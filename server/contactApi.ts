import { createHmac, timingSafeEqual } from "node:crypto";
import { contactSubmissionSchema } from "../src/schemas/quote.ts";

export type ContactEnv = Record<string, string | undefined>;
export type ContactResult = {
  status: number;
  headers?: Record<string, string>;
  body?: unknown;
};

type Fetcher = typeof fetch;

const jsonHeaders = { "Content-Type": "application/json; charset=utf-8" };
const maxAgeMs = 5 * 60 * 1000;
const minAgeMs = 1200;

function configuredOrigins(env: ContactEnv) {
  return (env.TERRACEPOOL_ALLOWED_ORIGINS ?? "https://www.terracepool.com,https://terracepool.com,https://terracepool.vercel.app")
    .split(",").map(origin => origin.trim()).filter(Boolean);
}

function corsHeaders(origin: string | undefined, env: ContactEnv): Record<string, string> {
  if (!origin || !configuredOrigins(env).includes(origin)) return {};
  return {
    "Access-Control-Allow-Origin": origin,
    "Vary": "Origin",
  };
}

function json(status: number, body: unknown, origin: string | undefined, env: ContactEnv): ContactResult {
  return { status, headers: { ...jsonHeaders, ...corsHeaders(origin, env) }, body };
}

function badOrigin(origin: string | undefined, env: ContactEnv) {
  return Boolean(origin && !configuredOrigins(env).includes(origin));
}

function requiredEnv(env: ContactEnv) {
  const keys = [
    "TERRACEPOOL_RESEND_API_KEY",
    "TERRACEPOOL_CONTACT_TO",
    "TERRACEPOOL_CONTACT_FROM",
    "TERRACEPOOL_REQUEST_SECRET",
  ];
  return keys.every(key => Boolean(env[key]));
}

function sign(reference: string, issuedAt: number, secret: string) {
  return createHmac("sha256", secret).update(`${reference}.${issuedAt}`).digest("base64url");
}

function verifyToken(token: string, reference: string, secret: string, now = Date.now()) {
  const parts = token.split(":");
  if (parts.length !== 3 || parts[0] !== reference) return false;
  const issuedAt = Number(parts[1]);
  if (!Number.isSafeInteger(issuedAt)) return false;
  const age = now - issuedAt;
  if (age < minAgeMs || age > maxAgeMs) return false;
  const expected = sign(reference, issuedAt, secret);
  const expectedBytes = Buffer.from(expected);
  const actualBytes = Buffer.from(parts[2]);
  return expectedBytes.length === actualBytes.length && timingSafeEqual(expectedBytes, actualBytes);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char] ?? char));
}

function subjectLabel(subject: string) {
  return ({ terrace: "Terrace pool", renovation: "Pool renovation", other: "Other inquiry" } as Record<string, string>)[subject] ?? subject;
}

function buildEmail(data: ReturnType<typeof contactSubmissionSchema.parse>) {
  const subject = subjectLabel(data.subject);
  const text = [
    `New Terrace Pool inquiry (${data.submissionId})`,
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Subject: ${subject}`,
    `Locale: ${data.locale}`,
    "",
    data.message,
  ].join("\n");
  const html = `<h2>New Terrace Pool inquiry</h2>
<p><strong>Reference:</strong> ${escapeHtml(data.submissionId)}</p>
<p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
<p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
<p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
<p><strong>Locale:</strong> ${escapeHtml(data.locale)}</p>
<p><strong>Message:</strong></p>
<p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>`;
  return { subject: `Terrace Pool inquiry: ${subject}`, text, html };
}

export function handleOptions(origin: string | undefined, env: ContactEnv): ContactResult {
  if (badOrigin(origin, env)) return { status: 403, headers: jsonHeaders, body: { ok: false, code: "origin" } };
  return {
    status: 204,
    headers: {
      ...corsHeaders(origin, env),
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type,Accept",
      "Access-Control-Max-Age": "86400",
    },
  };
}

export function handleChallenge(reference: string | undefined, origin: string | undefined, env: ContactEnv, now = Date.now()): ContactResult {
  if (badOrigin(origin, env)) return json(403, { ok: false, code: "origin" }, origin, env);
  if (!requiredEnv(env)) return json(503, { ok: false, code: "configuration" }, origin, env);
  if (!reference || !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(reference)) {
    return json(400, { ok: false, code: "reference" }, origin, env);
  }
  return json(200, {
    token: `${reference}:${now}:${sign(reference, now, env.TERRACEPOOL_REQUEST_SECRET as string)}`,
    waitMs: minAgeMs,
  }, origin, env);
}

export async function handleSubmission(rawBody: unknown, origin: string | undefined, env: ContactEnv, fetcher: Fetcher = fetch): Promise<ContactResult> {
  if (badOrigin(origin, env)) return json(403, { ok: false, code: "origin" }, origin, env);
  if (env.TERRACEPOOL_CONTACT_ENABLED === "false") return json(503, { ok: false, code: "disabled" }, origin, env);
  if (!requiredEnv(env)) return json(503, { ok: false, code: "configuration" }, origin, env);

  const parsed = contactSubmissionSchema.safeParse(rawBody);
  if (!parsed.success) return json(400, { ok: false, code: "validation" }, origin, env);
  const data = parsed.data;
  if (data.website && data.website.trim()) return json(200, { ok: true, reference: data.submissionId }, origin, env);
  if (!verifyToken(data.verificationToken, data.submissionId, env.TERRACEPOOL_REQUEST_SECRET as string)) {
    return json(403, { ok: false, code: "verification" }, origin, env);
  }

  const email = buildEmail(data);
  const resendResponse = await fetcher("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.TERRACEPOOL_RESEND_API_KEY}`,
      "Content-Type": "application/json",
      "Idempotency-Key": `terracepool-contact/${data.submissionId}`,
    },
    body: JSON.stringify({
      from: env.TERRACEPOOL_CONTACT_FROM,
      to: [env.TERRACEPOOL_CONTACT_TO],
      reply_to: data.email,
      subject: email.subject,
      text: email.text,
      html: email.html,
    }),
  });
  if (!resendResponse.ok) return json(502, { ok: false, code: "resend" }, origin, env);
  return json(200, { ok: true, reference: data.submissionId }, origin, env);
}
