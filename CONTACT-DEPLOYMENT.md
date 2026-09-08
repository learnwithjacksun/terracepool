# Terrace Pool inquiry delivery

The public website sends inquiries to `/api/contact` on the same Terrace Pool deployment. The API route sends through Resend from the server side. There is no Formspark fallback, no ChatGPT Sites dependency, no API key in the browser, and no browser-selected recipient.

## Hosting and control

The website remains in `valentinafu07-cell/terracepool` and deploys from `main` through the existing Vercel project. The contact form now expects Vercel serverless functions at:

```text
https://www.terracepool.com/api/contact
https://www.terracepool.com/api/contact/challenge
```

The production recipient is `info@terracepool.com`. The sender is `Terrace Pool <terracepool@leads.qualitypoolspa.es>`, using the already verified sending domain. Resend key `Terrace Pool contact` has sending access only, restricted to that domain. The existing `Onboarding` key, sending domain/DNS, webhooks, and other lead form must remain unchanged.

## Required Vercel environment variables

- `TERRACEPOOL_CONTACT_ENABLED`: `true` for normal operation; set `false` to pause delivery.
- `TERRACEPOOL_RESEND_API_KEY`: the dedicated Resend sending key; secret.
- `TERRACEPOOL_REQUEST_SECRET`: random signing secret; secret.
- `TERRACEPOOL_CONTACT_TO`: `info@terracepool.com`.
- `TERRACEPOOL_CONTACT_FROM`: `Terrace Pool <terracepool@leads.qualitypoolspa.es>`.
- `TERRACEPOOL_ALLOWED_ORIGINS`: `https://www.terracepool.com,https://terracepool.com,https://terracepool.vercel.app`.

The Resend key must be configured only as a server-side environment variable. Do not put it in frontend code, `.env` files committed to GitHub, or any `VITE_` variable.

## Delivery behavior

The existing contact page retains its five fields and four languages. Validation trims input and enforces field length limits. Subject values are fixed. Inquiry content is sent as plain text and HTML, and the visitor's email is set as Reply-To. The browser obtains a short-lived signed token from `/api/contact/challenge` and posts the inquiry to `/api/contact`. Success requires a JSON response with the same inquiry reference. Errors retain the form contents.

The API validates the allowed origin, required environment configuration, strict field schema, hidden honeypot, and a short-lived signed token with a minimum age and five-minute expiry. Resend idempotency uses the inquiry reference to reduce duplicate sends from retries.

No inquiry text or customer contact details are stored in this repository. The API does not write to a database. Resend delivery history is the operational record for accepted submissions.

## Verification and recovery

The Gmail-only test was delivered through Resend with reference `de5e4581-25e5-4228-b442-17fcb5184384`, message ID `0fc6f90b-57ac-4b96-a332-26a5bd2e169e`. No company-inbox test is authorized.

The frontend request flow and API handler are covered by contact tests. Build and lint checks cover the website.

If delivery fails after deployment, check that Vercel is deploying the latest `main` commit and that all required Vercel environment variables are present in the production environment. Do not restore the original Formspark endpoint. Retire that endpoint where account access permits, and review publishing access and company mailbox forwarding as separate incident recovery steps. The reported inquiry diversion's entry point has not been established.
