/**
 * Merges source entries pasted from ChatGPT or Gemini into sources.ts.
 * An id that already exists is replaced. A new id is added.
 * The rest of the file, including the validation rules, is left alone.
 */

export interface SourcePaste {
  id: string;
  /** One registry entry, including its key and a trailing comma. */
  text: string;
}

export interface SourceMerge {
  text: string;
  added: string[];
  updated: string[];
}

export class UserError extends Error {}

/** Removes a markdown fence if the whole paste is wrapped in one. */
export function stripFence(text: string): string {
  const trimmed = text.trim();
  const fenced = /^```[a-zA-Z]*\n([\s\S]*?)\n```$/.exec(trimmed);
  return fenced?.[1]?.trim() ?? trimmed;
}

export function parseSourcePaste(pasted: string): SourcePaste[] {
  const text = stripFence(pasted);
  if (!text) return [];
  const body = unwrapObject(text);
  return splitEntries(body);
}

export function mergeSources(fileText: string, entries: readonly SourcePaste[]): SourceMerge {
  let text = fileText;
  const added: string[] = [];
  const updated: string[] = [];
  for (const entry of entries) {
    const existing = findEntry(text, entry.id);
    if (existing) {
      text = text.slice(0, existing.start) + entry.text + text.slice(existing.end);
      updated.push(entry.id);
    } else {
      text = insertEntry(text, entry.text);
      added.push(entry.id);
    }
  }
  return { text, added, updated };
}

function unwrapObject(text: string): string {
  const startsWithEntry = /^["'A-Za-z_]/.test(text);
  if (startsWithEntry) return text;
  const open = text.indexOf("{");
  const close = text.lastIndexOf("}");
  if (open >= 0 && close > open) return text.slice(open + 1, close);
  return text;
}

function splitEntries(body: string): SourcePaste[] {
  const entries: SourcePaste[] = [];
  let index = 0;
  while (index < body.length) {
    index = skipTrivia(body, index);
    if (index >= body.length) break;
    const quote = body[index];
    if (quote !== '"' && quote !== "'") {
      throw new UserError(`Could not read a source id near "${preview(body, index)}".`);
    }
    const keyStart = index;
    const id = readString(body, index);
    index = skipTrivia(body, id.end);
    if (body[index] !== ":") throw new UserError(`Expected : after source "${id.value}".`);
    index = skipTrivia(body, index + 1);
    if (body[index] !== "{") throw new UserError(`Source "${id.value}" must be an object.`);
    const valueEnd = matchingBrace(body, index);
    let end = valueEnd + 1;
    const after = skipTrivia(body, end);
    if (body[after] === ",") end = after + 1;
    const raw = body.slice(keyStart, end).trim().replace(/,\s*$/, "");
    entries.push({ id: id.value, text: `${raw},` });
    index = end;
  }
  return entries;
}

function findEntry(text: string, id: string): { start: number; end: number } | null {
  const needle = `"${id}":`;
  let from = 0;
  while (from < text.length) {
    const at = text.indexOf(needle, from);
    if (at < 0) return null;
    const lineStart = text.lastIndexOf("\n", at) + 1;
    if (text.slice(lineStart, at).trim() !== "") {
      from = at + needle.length;
      continue;
    }
    let cursor = skipTrivia(text, at + needle.length);
    if (text[cursor] !== "{") {
      from = at + needle.length;
      continue;
    }
    const valueEnd = matchingBrace(text, cursor);
    let end = valueEnd + 1;
    if (text[end] === ",") end += 1;
    return { start: lineStart, end };
  }
  return null;
}

function insertEntry(text: string, entryText: string): string {
  const marker = text.indexOf("defineSources(");
  if (marker < 0) throw new UserError("sources.ts is missing defineSources.");
  const open = text.indexOf("{", marker);
  if (open < 0) throw new UserError("sources.ts is missing the sources object.");
  const close = matchingBrace(text, open);
  let before = text.slice(0, close).trimEnd();
  if (!before.endsWith(",") && !before.endsWith("{")) before = `${before},`;
  return `${before}\n  ${entryText.trim()}\n${text.slice(close)}`;
}

function matchingBrace(text: string, openIndex: number): number {
  let depth = 0;
  for (let index = openIndex; index < text.length; index += 1) {
    const char = text[index];
    if (char === '"' || char === "'" || char === "`") {
      index = readString(text, index).end - 1;
      continue;
    }
    if (char === "/" && text[index + 1] === "/") {
      const nextLine = text.indexOf("\n", index);
      index = nextLine < 0 ? text.length : nextLine;
      continue;
    }
    if (char === "/" && text[index + 1] === "*") {
      const end = text.indexOf("*/", index + 2);
      index = end < 0 ? text.length : end + 1;
      continue;
    }
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return index;
    }
  }
  throw new UserError("A source object is missing its closing }.");
}

function readString(text: string, start: number): { value: string; end: number } {
  const quote = text[start];
  if (quote !== '"' && quote !== "'" && quote !== "`") {
    throw new UserError(`Expected a quoted source id near "${preview(text, start)}".`);
  }
  let value = "";
  for (let index = start + 1; index < text.length; index += 1) {
    const char = text[index];
    if (char === "\\") {
      value += text[index + 1] ?? "";
      index += 1;
      continue;
    }
    if (char === quote) return { value, end: index + 1 };
    value += char ?? "";
  }
  throw new UserError("A quoted string is missing its closing quote.");
}

function skipTrivia(text: string, start: number): number {
  let index = start;
  while (index < text.length) {
    const char = text[index];
    if (char === " " || char === "\n" || char === "\r" || char === "\t") {
      index += 1;
      continue;
    }
    if (char === "/" && text[index + 1] === "/") {
      const nextLine = text.indexOf("\n", index);
      index = nextLine < 0 ? text.length : nextLine + 1;
      continue;
    }
    if (char === "/" && text[index + 1] === "*") {
      const end = text.indexOf("*/", index + 2);
      index = end < 0 ? text.length : end + 2;
      continue;
    }
    break;
  }
  return index;
}

function preview(text: string, index: number): string {
  return text.slice(index, index + 40).replaceAll("\n", " ");
}
