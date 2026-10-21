import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

import { mergeSources, parseSourcePaste } from "./sources";
import { sourcesPath } from "./paths";

const sample = `
"example-club": {
  id: "example-club",
  name: "Example Club",
  note: "A closing } stays inside the string",
},
`;

test("a pasted source can be added and then updated", () => {
  const original = readFileSync(sourcesPath, "utf8");
  const added = mergeSources(original, parseSourcePaste(sample));
  assert.deepEqual(added.added, ["example-club"]);
  assert.equal(added.updated.length, 0);
  assert.equal(added.text.includes('note: "A closing } stays inside the string"'), true);
  assert.equal(added.text.includes("export type SourceId"), true);

  const updated = mergeSources(
    added.text,
    parseSourcePaste(`"example-club": { id: "example-club", name: "Updated", },`),
  );
  assert.deepEqual(updated.updated, ["example-club"]);
  assert.equal(updated.text.includes('name: "Updated"'), true);
  assert.equal(updated.text.split('"example-club":').length - 1, 1);
});
