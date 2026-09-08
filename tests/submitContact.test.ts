import assert from "node:assert/strict";
import test from "node:test";
import { CONTACT_SERVICE, submitContact } from "../src/helpers/submitContact.ts";
import type { ContactSubmission } from "../src/schemas/quote.ts";

const data: Omit<ContactSubmission, "verificationToken"> = {
  name: "Test", email: "test@example.com", phone: "+34 123456789", subject: "terrace",
  message: "Synthetic test", locale: "en", submissionId: "3e0ac019-e3a2-468c-8c64-76b99464ba53",
  website: "",
};
const token = `${data.submissionId}:1788866000000:synthetic-signature`;
const noWait = async () => {};
function withChallenge(response: Response): typeof fetch {
  return (async (url) => String(url).includes("/challenge?") ? Response.json({token,waitMs:2000}) : response) as typeof fetch;
}

test("client uses only the controlled service, with no browser credentials or recipient", async () => {
  const calls: string[] = [];
  const reference = await submitContact(data, (async (url, options) => {
    calls.push(String(url));
    assert.equal(options?.credentials, "omit");
    assert.equal(options?.redirect, "error");
    if (options?.method === "GET") return Response.json({token,waitMs:2000});
    assert.equal(options?.method, "POST");
    assert.deepEqual(JSON.parse(String(options?.body)), {...data,verificationToken:token});
    return Response.json({ ok: true, reference: data.submissionId });
  }) as typeof fetch, noWait);
  assert.deepEqual(calls, [`${CONTACT_SERVICE}/challenge?reference=${data.submissionId}`, CONTACT_SERVICE]);
  assert.equal(reference, data.submissionId);
});

for (const status of [400, 403, 429, 500, 502, 503]) {
  test(`HTTP ${status} cannot be mistaken for successful submission`, async () => {
    await assert.rejects(() => submitContact(data, withChallenge(
      Response.json({ ok: true, reference: data.submissionId }, { status })), noWait));
  });
}

test("SPA HTML fallback, invalid JSON, false success and wrong reference are rejected", async () => {
  for (const response of [
    new Response("<html>SPA fallback</html>", { headers: { "Content-Type": "text/html" } }),
    new Response("invalid json", { headers: { "Content-Type": "application/json" } }),
    Response.json({ ok: false }), Response.json({ ok: true, reference: "other-inquiry" }),
  ]) {
    await assert.rejects(() => submitContact(data, withChallenge(response), noWait));
  }
});

test("unavailable, malformed or mismatched challenges stop before submission",async()=>{
  for(const challenge of [Response.json({}, {status:503}),Response.json({token:"other-reference",waitMs:0}),Response.json({token,waitMs:999999}),new Response("<html>login</html>")]){
    let calls=0;
    await assert.rejects(()=>submitContact(data,(async()=>{calls++;return challenge;}) as typeof fetch,noWait));
    assert.equal(calls,1);
  }
});

test("network errors are exposed to the form so it can retain the customer's input", async () => {
  await assert.rejects(() => submitContact(data, (async () => { throw new TypeError("Network failed"); }) as typeof fetch));
});
