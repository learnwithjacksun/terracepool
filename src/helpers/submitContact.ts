import type { ContactSubmission } from "../schemas/quote.ts";

export class ContactDeliveryError extends Error {
  readonly code: string;
  constructor(code: string) {
    super(code);
    this.code = code;
  }
}

export const CONTACT_SERVICE = "https://terracepool-contact.onestopworld34.chatgpt.site/api/contact";
export async function submitContact(data: Omit<ContactSubmission, "verificationToken">, fetcher: typeof fetch = fetch,
  wait: (ms: number) => Promise<void> = ms => new Promise(resolve => setTimeout(resolve, ms))) {
  const challenge = await fetcher(`${CONTACT_SERVICE}/challenge?reference=${encodeURIComponent(data.submissionId)}`, {
    method: "GET", headers: { Accept: "application/json" }, credentials: "omit", redirect: "error",
    signal: AbortSignal.timeout(10000), cache: "no-store",
  });
  if (!challenge.ok || !challenge.headers.get("content-type")?.includes("application/json")) throw new ContactDeliveryError("verification_unavailable");
  const proof = await challenge.json() as { token?: string; waitMs?: number };
  if (typeof proof.token !== "string" || !proof.token.startsWith(`${data.submissionId}:`) || proof.token.length > 2048 ||
    typeof proof.waitMs !== "number" || proof.waitMs < 0 || proof.waitMs > 5000) throw new ContactDeliveryError("verification");
  await wait(proof.waitMs);
  const response = await fetcher(CONTACT_SERVICE, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ ...data, verificationToken: proof.token }),
    signal: AbortSignal.timeout(25000),
    credentials: "omit",
    redirect: "error",
  });
  if (!response.headers.get("content-type")?.includes("application/json")) {
    throw new ContactDeliveryError("delivery");
  }
  const result = await response.json() as { ok?: boolean; reference?: string; code?: string };
  if (!response.ok || result.ok !== true || result.reference !== data.submissionId) {
    throw new ContactDeliveryError(result.code ?? "delivery");
  }
  return result.reference;
}
