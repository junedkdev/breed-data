/**
 * Local page for the ChatGPT and Gemini breed workflow.
 *
 *   npm run ui
 *
 * Open http://127.0.0.1:4317
 */

import { createServer, type IncomingMessage, type ServerResponse } from "node:http";
import { readFileSync } from "node:fs";
import { extname, join, normalize, sep } from "node:path";

import {
  addChatgptRecord,
  copyChatgptPrompt,
  copyGeminiPrompt,
  createBreedFile,
  loadState,
  updateGeminiRecord,
} from "./actions";
import { runCheck } from "./check";
import { publicDir } from "./paths";
import { UserError } from "./sources";

const port = Number(process.env.PORT ?? 4317);
const types: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
};

const server = createServer((request, response) => {
  void handle(request, response);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Breed data page: http://127.0.0.1:${port}`);
});

async function handle(request: IncomingMessage, response: ServerResponse): Promise<void> {
  try {
    const url = new URL(request.url ?? "/", `http://127.0.0.1:${port}`);
    if (request.method === "GET" && url.pathname === "/api/state") {
      return send(response, 200, loadState());
    }
    if (request.method === "POST" && url.pathname === "/api/validate") {
      return send(response, 200, await runCheck());
    }
    if (request.method === "POST" && url.pathname === "/api/chatgpt/prompt") {
      return send(response, 200, copyChatgptPrompt());
    }
    if (request.method === "POST" && url.pathname === "/api/chatgpt/file") {
      const body = await readJson(request);
      return send(response, 200, createBreedFile(textField(body, "filename")));
    }
    if (request.method === "POST" && url.pathname === "/api/chatgpt/add") {
      const body = await readJson(request);
      const saved = addChatgptRecord({
        filename: textField(body, "filename"),
        content: textField(body, "content"),
        sources: textField(body, "sources"),
      });
      return send(response, 200, { ...saved, check: await runCheck() });
    }
    if (request.method === "POST" && url.pathname === "/api/gemini/prompt") {
      return send(response, 200, copyGeminiPrompt());
    }
    if (request.method === "POST" && url.pathname === "/api/gemini/update") {
      const body = await readJson(request);
      const saved = updateGeminiRecord({
        content: textField(body, "content"),
        sources: textField(body, "sources"),
      });
      return send(response, 200, { ...saved, check: await runCheck() });
    }
    if (request.method === "GET") return sendFile(response, url.pathname);
    send(response, 404, { error: "Not found." });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Something went wrong.";
    send(response, error instanceof UserError ? 400 : 500, { error: message });
  }
}

function sendFile(response: ServerResponse, pathname: string): void {
  const relative = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const path = normalize(join(publicDir, relative));
  if (path !== publicDir && !path.startsWith(`${publicDir}${sep}`)) {
    send(response, 404, { error: "Not found." });
    return;
  }
  try {
    const body = readFileSync(path);
    response.writeHead(200, { "content-type": types[extname(path)] ?? "text/plain; charset=utf-8" });
    response.end(body);
  } catch {
    send(response, 404, { error: "Not found." });
  }
}

async function readJson(request: IncomingMessage): Promise<Record<string, unknown>> {
  const raw = await readBody(request);
  if (!raw) return {};
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new UserError("That was not valid JSON.");
  }
  if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new UserError("Expected a JSON object.");
  }
  return parsed as Record<string, unknown>;
}

function textField(body: Record<string, unknown>, key: string): string {
  const value = body[key];
  return typeof value === "string" ? value : "";
}

function readBody(request: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    let size = 0;
    request.on("data", (chunk: Buffer) => {
      size += chunk.length;
      if (size > 8_000_000) {
        reject(new UserError("That paste is larger than 8 MB."));
        request.destroy();
        return;
      }
      chunks.push(chunk);
    });
    request.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    request.on("error", reject);
  });
}

function send(response: ServerResponse, status: number, body: unknown): void {
  response.writeHead(status, { "content-type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(body));
}
