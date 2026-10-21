/**
 * Image license registry.
 *
 * Terms are those stated by each deed at `url`. Add a license here only after
 * reading its deed; leave a term `null` if the deed does not settle it.
 */

import type { License } from "../schema/breed.types";

function defineLicenses<T extends Record<string, License>>(licenses: T): T {
  return licenses;
}

export const licenses = defineLicenses({
  "cc0-1.0": {
    name: "Creative Commons CC0 1.0 Universal",
    spdx: "CC0-1.0",
    url: "https://creativecommons.org/publicdomain/zero/1.0/",
    commercialUseAllowed: true,
    attributionRequired: false,
    shareAlikeRequired: false,
  },
  "cc-by-2.0": {
    name: "Creative Commons Attribution 2.0 Generic",
    spdx: "CC-BY-2.0",
    url: "https://creativecommons.org/licenses/by/2.0/",
    commercialUseAllowed: true,
    attributionRequired: true,
    shareAlikeRequired: false,
  },
  "cc-by-2.5": {
    name: "Creative Commons Attribution 2.5 Generic",
    spdx: "CC-BY-2.5",
    url: "https://creativecommons.org/licenses/by/2.5/",
    commercialUseAllowed: true,
    attributionRequired: true,
    shareAlikeRequired: false,
  },
  "cc-by-3.0": {
    name: "Creative Commons Attribution 3.0 Unported",
    spdx: "CC-BY-3.0",
    url: "https://creativecommons.org/licenses/by/3.0/",
    commercialUseAllowed: true,
    attributionRequired: true,
    shareAlikeRequired: false,
  },
  "cc-by-4.0": {
    name: "Creative Commons Attribution 4.0 International",
    spdx: "CC-BY-4.0",
    url: "https://creativecommons.org/licenses/by/4.0/",
    commercialUseAllowed: true,
    attributionRequired: true,
    shareAlikeRequired: false,
  },
  "cc-by-sa-2.0": {
    name: "Creative Commons Attribution-ShareAlike 2.0 Generic",
    spdx: "CC-BY-SA-2.0",
    url: "https://creativecommons.org/licenses/by-sa/2.0/",
    commercialUseAllowed: true,
    attributionRequired: true,
    shareAlikeRequired: true,
  },
  "cc-by-sa-2.5": {
    name: "Creative Commons Attribution-ShareAlike 2.5 Generic",
    spdx: "CC-BY-SA-2.5",
    url: "https://creativecommons.org/licenses/by-sa/2.5/",
    commercialUseAllowed: true,
    attributionRequired: true,
    shareAlikeRequired: true,
  },
  "cc-by-sa-3.0": {
    name: "Creative Commons Attribution-ShareAlike 3.0 Unported",
    spdx: "CC-BY-SA-3.0",
    url: "https://creativecommons.org/licenses/by-sa/3.0/",
    commercialUseAllowed: true,
    attributionRequired: true,
    shareAlikeRequired: true,
  },
  "cc-by-sa-4.0": {
    name: "Creative Commons Attribution-ShareAlike 4.0 International",
    spdx: "CC-BY-SA-4.0",
    url: "https://creativecommons.org/licenses/by-sa/4.0/",
    commercialUseAllowed: true,
    attributionRequired: true,
    shareAlikeRequired: true,
  },
  "public-domain": {
    name: "Public domain",
    spdx: null,
    url: "https://commons.wikimedia.org/wiki/Commons:Licensing",
    commercialUseAllowed: true,
    attributionRequired: false,
    shareAlikeRequired: false,
  },
});

export type LicenseId = keyof typeof licenses;
