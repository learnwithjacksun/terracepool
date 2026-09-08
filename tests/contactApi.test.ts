import assert from "node:assert/strict";
import test from "node:test";
import { handleChallenge, handleSubmission } from "../server/contactApi.ts";

const env = {
  TERRACEPOOL_RESEND_API_KEY: "re_test",
  TERRACEPOOL_CONTACT_TO: "info@terracepool.com",
  TERRACEPOOL_CONTACT_FROM: "Terrace Pool <terracepool@leads.qualitypoolspa.es>",
  TERRACEPOOL_REQUEST_SECRET: "test-secret",
  TERRACEPOOL_ALLOWED_ORIGINS: "https://www.terracepool.com,https://terracepool.com",
};

const submissionId = "3e0ac019-e3a2-468c-8c64-76b99464ba53";
const origin = "https://www.terracepool.com";

test("challenge and submission send through Resend without exposing a browser key", async () => {
  const challenge = handleChallenge(submissionId, origin, env, Date.now() - 2000);
  assert.equal(challenge.status, 200);
  const token = (challenge.body as { token: string }).token;
  const calls: { url: string; options: RequestInit }[] = [];
  const result = await handleSubmission({
    name: "Test Client",
    email: "client@example.com",
    phone: "+34 123456789",
    subject: "terrace",
    message: "I would like a quote for a terrace pool.",
    locale: "en",
    submissionId,
    verificationToken: token,
    website: "",
  }, origin, env, (async (url, options) => {
    calls.push({ url: String(url), options: options ?? {} });
    return Response.json({ id: "email-id" });
  }) as typeof fetch);

  assert.equal(result.status, 200);
  assert.deepEqual(result.body, { ok: true, reference: submissionId });
  assert.equal(calls.length, 1);
  assert.equal(calls[0]?.url, "https://api.resend.com/emails");
  assert.equal((calls[0]?.options.headers as Record<string, string>).Authorization, "Bearer re_test");
  const payload = JSON.parse(String(calls[0]?.options.body));
  assert.deepEqual(payload.to, ["info@terracepool.com"]);
  assert.equal(payload.reply_to, "client@example.com");
});

test("invalid origins, missing config and early tokens are rejected", async () => {
  assert.equal(handleChallenge(submissionId, "https://evil.example", env).status, 403);
  assert.equal(handleChallenge(submissionId, origin, {}).status, 503);
  const challenge = handleChallenge(submissionId, origin, env);
  const token = (challenge.body as { token: string }).token;
  const early = await handleSubmission({
    name: "Test Client",
    email: "client@example.com",
    phone: "+34 123456789",
    subject: "terrace",
    message: "I would like a quote for a terrace pool.",
    locale: "en",
    submissionId,
    verificationToken: token,
    website: "",
  }, origin, env, (async () => Response.json({})) as typeof fetch);
  assert.equal(early.status, 403);
});

test("honeypot submissions return success without sending email", async () => {
  const challenge = handleChallenge(submissionId, origin, env, Date.now() - 2000);
  const token = (challenge.body as { token: string }).token;
  let calls = 0;
  const result = await handleSubmission({
    name: "Bot",
    email: "bot@example.com",
    phone: "+34 123456789",
    subject: "other",
    message: "Spam",
    locale: "en",
    submissionId,
    verificationToken: token,
    website: "filled",
  }, origin, env, (async () => {
    calls += 1;
    return Response.json({});
  }) as typeof fetch);
  assert.equal(result.status, 200);
  assert.equal(calls, 0);
});
