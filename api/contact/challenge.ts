import type { IncomingMessage, ServerResponse } from "node:http";
import { handleChallenge, handleOptions } from "../../server/contactApi.ts";

function send(res: ServerResponse, status: number, headers: Record<string, string> | undefined, body: unknown) {
  for (const [key, value] of Object.entries(headers ?? {})) res.setHeader(key, value);
  res.statusCode = status;
  if (status === 204) {
    res.end();
    return;
  }
  res.end(JSON.stringify(body ?? {}));
}

export default function handler(req: IncomingMessage, res: ServerResponse) {
  const origin = typeof req.headers.origin === "string" ? req.headers.origin : undefined;
  if (req.method === "OPTIONS") {
    const result = handleOptions(origin, process.env);
    send(res, result.status, result.headers, result.body);
    return;
  }
  if (req.method !== "GET") {
    send(res, 405, { "Content-Type": "application/json; charset=utf-8" }, { ok: false, code: "method" });
    return;
  }
  const url = new URL(req.url ?? "/api/contact/challenge", "https://www.terracepool.com");
  const result = handleChallenge(url.searchParams.get("reference") ?? undefined, origin, process.env);
  send(res, result.status, result.headers, result.body);
}
