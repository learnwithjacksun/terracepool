# Terrace Pool inquiry delivery

The public website sends inquiries to the company-controlled service at `https://terracepool-contact.onestopworld34.chatgpt.site/api/contact`. The service sends through Resend. There is no Formspark fallback, no API key in the browser, and no browser-selected recipient.

## Hosting and control

The website remains in `valentinafu07-cell/terracepool` and deploys from `main` through the existing Vercel project `learnwithjacksuns-projects/terracepool`. The contact service is managed separately through Sites, project `appgprj_6a9ff57590b08191bfa4876ebcfaa563`. **This form requires no new Vercel environment variables.**

The service source is maintained in its own Sites source repository and supplied as a separate source package. Its Worker entry point is `server/worker.ts`; generated Drizzle migrations create its managed D1 database. Runtime secrets are set through Sites, never in this repository or the hosting manifest.

The production recipient is `info@terracepool.com`. The sender is `Terrace Pool <terracepool@leads.qualitypoolspa.es>`, using the already verified sending domain. Resend key `Terrace Pool contact` has sending access only, restricted to that domain. The existing `Onboarding` key, sending domain/DNS, webhooks, and other lead form must remain unchanged.

## Delivery behavior

The existing contact page retains its five fields and four languages. Validation trims input and enforces field length limits. Subject values are fixed. Inquiry content is plain text and the visitor's email is Reply-To. The browser obtains a short-lived signed token and posts the inquiry over HTTPS to the fixed service address. Success requires a valid receipt with the same inquiry reference. Errors retain the form contents; retries of unchanged content retain their reference.

The service validates exact allowed origins, JSON content type, a 32 KiB request limit, a strict field schema, the hidden honeypot, and an origin/IP/reference-bound token with a short minimum age and five-minute expiry. These tokens are not proof of a human visitor. Enforced database quotas limit Terrace Pool to 20 reserved deliveries per rolling 24 hours, 10 per hour across the site, and 3 per hour per client IP. This reserves most of the shared Resend daily allowance for the other integration. A limit or verification failure returns an error; it never silently discards an inquiry as successful.

The database stores only reference IDs, keyed hashes of IP/payload, timestamps, receipt IDs, and delivery state. It does not store inquiry text or contact details. A single atomic SQL statement enforces all quotas under concurrent requests. A processing lease and Resend idempotency prevent duplicate sends on retries; ambiguous requests are retried only within 23 hours of the first attempt.

No Turnstile account or production widget is required by this deployment. The earlier local Turnstile test was replaced with these hosted request and quota controls so the form can be managed without Vercel or Cloudflare dashboard access.

## Runtime settings (Sites contact service only)

- `TERRACEPOOL_CONTACT_ENABLED`: `true` for normal operation; set `false` and redeploy to pause delivery.
- `TERRACEPOOL_RESEND_API_KEY`: the dedicated Resend sending key; secret.
- `TERRACEPOOL_REQUEST_SECRET`: random signing/hash secret; secret.
- `TERRACEPOOL_CONTACT_TO`: `info@terracepool.com`.
- `TERRACEPOOL_CONTACT_FROM`: `terracepool@leads.qualitypoolspa.es`.
- `TERRACEPOOL_ALLOWED_ORIGINS`: `https://www.terracepool.com,https://terracepool.com,https://terracepool.vercel.app`.

Changing Sites runtime settings requires redeploying a saved service version. The worker also has an explicit origin allowlist. No generic `RESEND_API_KEY` or other application's recipient/key is reused.

## Verification and recovery

The Gmail-only test was delivered through Resend with reference `de5e4581-25e5-4228-b442-17fcb5184384`, message ID `0fc6f90b-57ac-4b96-a332-26a5bd2e169e`. No company-inbox test is authorized. Provider-reported delivery does not establish that a mailbox is secure or that the message was read.

The frontend has 10 request/response tests. The service has 21 tests using real SQLite and mocked email delivery, including quota concurrency, recipient tampering, token binding, replay handling, provider errors, and absence of customer details in stored state/logs. Build and lint checks cover the website; the service is type-checked and bundled for Workers.

Check `/health` for service availability and check the Resend record for a real inquiry's delivery/bounce status. Service logs contain only operational references, message IDs, and status codes. There is no automatic customer email or account-wide webhook change.

If delivery fails, pause the controlled service and investigate its logs. Do not restore the original Formspark endpoint. Retire that endpoint where account access permits, and review publishing access and company mailbox forwarding as separate incident recovery steps. The reported inquiry diversion's entry point has not been established.
