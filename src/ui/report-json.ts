/**
 * Prints the current catalog check as JSON.
 * The page starts a fresh process so it sees files that were just saved.
 */

import { breedData } from "../breeds/data";
import { licenses } from "../registry/licenses";
import { sources } from "../registry/sources";
import { validateCatalog, type Issue } from "../validate/rules";

const result = validateCatalog({ breeds: breedData, sources, licenses });

console.log(
  JSON.stringify({
    breedCount: breedData.length,
    errors: result.errors.map(plain),
    warnings: result.warnings.map(plain),
  }),
);

function plain(issue: Issue): { breed: string | null; path: string; message: string } {
  return { breed: issue.breed, path: issue.path, message: issue.message };
}
