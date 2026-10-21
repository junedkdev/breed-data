import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";

import { nextChatgpt, nextGemini, readProgress, withStatus, writeProgress } from "./file";

const progressPath = resolve(dirname(fileURLToPath(import.meta.url)), "progress.txt");

test("the progress file keeps every breed and the current markers", () => {
  const rows = readProgress(readFileSync(progressPath, "utf8"));
  assert.equal(rows.length, 371);
  assert.equal(rows.filter((row) => row.status === "CG").length, 14);
  assert.equal(rows.filter((row) => row.status === "C").length, 24);
  assert.equal(rows.filter((row) => row.status === "").length, 333);
  assert.equal(nextChatgpt(rows)?.name, "gascon_saintongeois");
  assert.equal(nextGemini(rows)?.name, "coton_de_tulear");
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
