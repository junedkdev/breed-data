import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";

import { nextChatgpt, nextGemini, readProgress, withStatus, writeProgress } from "./file";

const progressPath = resolve(dirname(fileURLToPath(import.meta.url)), "progress.txt");

test("the progress file parses every breed line", () => {
  const text = readFileSync(progressPath, "utf8");
  const breedLines = text.split(/\r?\n/).filter((line) => /^\d+\s*:/.test(line.trim()));
  const rows = readProgress(text);
  const indexes = new Set(rows.map((row) => row.index));

  assert.equal(rows.length, breedLines.length);
  assert.equal(indexes.size, rows.length);
  assert.ok(rows.length > 0);
  assert.ok(rows.every((row) => row.name.length > 0));
  // The next prompt follows the open task, then the first breed still in that stage.
  if (rows.some((row) => row.status === "R")) assert.equal(nextChatgpt(rows)?.status, "R");
  else if (rows.some((row) => row.status === "")) assert.equal(nextChatgpt(rows)?.status, "");
  if (rows.some((row) => row.status === "CR")) assert.equal(nextGemini(rows)?.status, "CR");
  else if (rows.some((row) => row.status === "C")) assert.equal(nextGemini(rows)?.status, "C");
});

test("changing a status moves that breed to the end of the new group", () => {
  const rows = readProgress("0:eurasier - CG\n\n14:coton_de_tulear - C\n\n38:gascon_saintongeois\n");
  const started = withStatus(rows, 38, "R");
  const saved = withStatus(started, 38, "C");
  const written = writeProgress(saved);
  const again = readProgress(written);
  assert.deepEqual(
    again.map((row) => `${row.index}:${row.status}`),
    ["0:CG", "14:C", "38:C"],
  );
});
