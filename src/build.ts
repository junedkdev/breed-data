/**
 * Builds data.json from the TypeScript breed records.
 *
 *   npm run check          type-check the records
 *   npm run validate       run the integrity rules on the TypeScript records
 *   npm run validate:json  run the same rules on data.json
 *   npm run build          validate, then write data.json (pretty)
 *   npm run build:minify   validate, then write data.json (compact)
 *
 * The file is only written when there are no errors. Warnings are printed
 * and do not block the build.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import {
  SCHEMA_VERSION,
  type BreedCatalogDocument,
} from "../breeds/breed.types";
import { breedData } from "../breeds/data";
import { licenses } from "../breeds/licenses";
import { sources } from "../breeds/sources";
import { reliabilityReport, validateCatalog, type Issue } from "./validate";

const here = dirname(fileURLToPath(import.meta.url));
const OUTPUT = resolve(here, "../data.json");

const args = new Set(process.argv.slice(2));
const checkOnly = args.has("--check");
const minify = args.has("--minify");

const result = validateCatalog({ breeds: breedData, sources, licenses });

for (const issue of result.warnings) console.warn(format(issue));
for (const issue of result.errors) console.error(format(issue));

console.log(
  `\n${breedData.length} breeds, ${Object.keys(sources).length} sources, ` +
    `${Object.keys(licenses).length} licenses — ` +
    `${result.errors.length} error(s), ${result.warnings.length} warning(s)`,
);

if (result.errors.length > 0) {
  console.error("\ndata.json was not written.");
  process.exit(1);
}

printReport();

if (checkOnly) {
  console.log("\nValidation only; data.json was not written.");
  process.exit(0);
}

const document: BreedCatalogDocument = {
  schemaVersion: SCHEMA_VERSION,
  sources,
  licenses,
  breeds: [...breedData].sort((a, b) => a.slug.localeCompare(b.slug)),
};

mkdirSync(dirname(OUTPUT), { recursive: true });
const json = minify
  ? JSON.stringify(document)
  : `${JSON.stringify(document, null, 2)}\n`;
writeFileSync(OUTPUT, json, "utf8");
console.log(`\nWrote ${OUTPUT} (${(Buffer.byteLength(json) / 1024).toFixed(1)} KiB)`);

function format(issue: Issue): string {
  const where = issue.breed ? `${issue.breed} › ${issue.path}` : issue.path;
  return `${issue.severity === "error" ? "ERROR" : "warn "}  ${where}: ${issue.message}`;
}

function printReport(): void {
  const report = reliabilityReport(breedData);
  console.log("\nEffective reliability of leaf facts:");
  for (const [key, count] of Object.entries(report.perReliability)) {
    console.log(`  ${key.padEnd(18)} ${String(count).padStart(5)}`);
  }
  console.log("\nVerified leaf facts per breed:");
  for (const row of report.perBreed) {
    console.log(
      `  ${row.slug.padEnd(28)} ${String(row.verifiedLeaves).padStart(3)} / ${row.totalLeaves}`,
    );
  }
}
