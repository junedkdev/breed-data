/**
 * Validates data.json without importing the TypeScript breed records.
 * Use this as a round-trip check after a build.
 *
 *   npm run validate:json
 */

import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import {
  SCHEMA_VERSION,
  type BreedCatalogDocument,
} from "../breeds/breed.types";
import { reliabilityReport, validateCatalog, type Issue } from "./validate";

const here = dirname(fileURLToPath(import.meta.url));
const INPUT = resolve(here, "../data.json");

const raw = readFileSync(INPUT, "utf8");
const document = JSON.parse(raw) as BreedCatalogDocument;

if (document.schemaVersion !== SCHEMA_VERSION) {
  console.error(
    `ERROR  schemaVersion: ${String(document.schemaVersion)} ` +
      `(this tool reads version ${SCHEMA_VERSION})`,
  );
  process.exit(1);
}

const result = validateCatalog({
  breeds: document.breeds,
  sources: document.sources,
  licenses: document.licenses,
});

for (const issue of result.warnings) console.warn(format(issue));
for (const issue of result.errors) console.error(format(issue));

console.log(
  `\n${document.breeds.length} breeds, ${Object.keys(document.sources).length} sources, ` +
    `${Object.keys(document.licenses).length} licenses — ` +
    `${result.errors.length} error(s), ${result.warnings.length} warning(s)`,
);

const report = reliabilityReport(document.breeds);
console.log("\nEffective reliability of leaf facts:");
for (const [key, count] of Object.entries(report.perReliability)) {
  console.log(`  ${key.padEnd(18)} ${String(count).padStart(5)}`);
}

if (result.errors.length > 0) {
  console.error(`\n${INPUT} failed validation.`);
  process.exit(1);
}

console.log(`\n${INPUT} is valid.`);

function format(issue: Issue): string {
  const where = issue.breed ? `${issue.breed} › ${issue.path}` : issue.path;
  return `${issue.severity === "error" ? "ERROR" : "warn "}  ${where}: ${issue.message}`;
}
