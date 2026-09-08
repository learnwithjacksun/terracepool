import type { IncomingMessage, ServerResponse } from "node:http";
import { handleOptions, handleSubmission } from "../server/contactApi.ts";

type JsonRequest = IncomingMessage & { body?: unknown };

function send(res: ServerResponse, status: number, headers: Record<string, string> | undefined, body: unknown) {
  for (const [key, value] of Object.entries(headers ?? {})) res.setHeader(key, value);
  res.statusCode = status;
  if (status === 204) {
    res.end();
    return;
  }
  res.end(JSON.stringify(body ?? {}));
}

export default async function handler(req: JsonRequest, res: ServerResponse) {
  const origin = typeof req.headers.origin === "string" ? req.headers.origin : undefined;
  if (req.method === "OPTIONS") {
    const result = handleOptions(origin, process.env);
    send(res, result.status, result.headers, result.body);
    return;
  }
  if (req.method !== "POST") {
    send(res, 405, { "Content-Type": "application/json; charset=utf-8" }, { ok: false, code: "method" });
    return;
  }
  const result = await handleSubmission(req.body, origin, process.env);
  send(res, result.status, result.headers, result.body);
}
