/**
 * Source registry: every publication a breed record may cite.
 *
 * Add a source here once, then reference its id from `references` and
 * `evidence` in breed records. `accessedOn` is when an editor opened the
 * URL; it is not a fact-check date. Verification dates live on the claim.
 */

import type { Source } from "../schema/breed.types";

function defineSources<T extends Record<string, Source>>(sources: T): T {
  return sources;
}

export const sources = defineSources({
  "american-kennel-club-eurasier": {
    id: "american-kennel-club-eurasier",
    name: "American Kennel Club - Eurasier",
    url: "https://www.akc.org/dog-breeds/eurasier/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-14",
    note: null,
    publisher: null
  },
  "american-kennel-club-glen-of-imaal-terrier": {
    id: "american-kennel-club-glen-of-imaal-terrier",
    name: "American Kennel Club - Glen of Imaal Terrier",
    url: "https://www.akc.org/dog-breeds/glen-of-imaal-terrier/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-15",
    note: null,
    publisher: null
  },
  "american-kennel-club-hokkaido": {
    id: "american-kennel-club-hokkaido",
    name: "American Kennel Club - Hokkaido",
    url: "https://www.akc.org/dog-breeds/hokkaido/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: null,
    publisher: null
  },
"american-kennel-club-italian-greyhound": {
    id: "american-kennel-club-italian-greyhound",
    name: "American Kennel Club - Italian Greyhound",
    url: "https://www.akc.org/dog-breeds/italian-greyhound/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: null,
    publisher: null
  },
  "american-kennel-club-italian-greyhound-official-standard": {
    id: "american-kennel-club-italian-greyhound-official-standard",
    name: "American Kennel Club - Italian Greyhound Official Standard",
    url: "https://images.akc.org/pdf/breeds/standards/ItalianGreyhound.pdf",
    type: "official_breed_standard",
    publishedOn: "1976-12-14",
    accessedOn: "2026-10-19",
    note: "Approved December 14, 1976.",
    publisher: null
  },
  "american-kennel-club-official-wirehaired-vizsla-breed-standard": {
    id: "american-kennel-club-official-wirehaired-vizsla-breed-standard",
    name: "American Kennel Club - Official Wirehaired Vizsla Breed Standard",
    url: "https://images.akc.org/pdf/breeds/standards/WirehairedViszla.pdf",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-14",
    note: null,
    publisher: null
  },
  "american-kennel-club-pharaoh-hound": {
    id: "american-kennel-club-pharaoh-hound",
    name: "American Kennel Club - Pharaoh Hound",
    url: "https://www.akc.org/dog-breeds/pharaoh-hound/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-15",
    note: null,
    publisher: null
  },
  "american-kennel-club-russian-toy": {
    id: "american-kennel-club-russian-toy",
    name: "American Kennel Club - Russian Toy",
    url: "https://www.akc.org/dog-breeds/russian-toy/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-18",
    note: "Consulted on 15 October 2026. Life expectancy 12–14 years. The page lists height 8–11 inches and weight up to 6.5 pounds; those figures are not stored in the FCI measurement columns. It also describes a lively, intelligent dog that can be slightly aloof with strangers.",
    publisher: null
  },
  "american-kennel-club-staffordshire-bull-terrier": {
    id: "american-kennel-club-staffordshire-bull-terrier",
    name: "American Kennel Club – Staffordshire Bull Terrier",
    url: "https://www.akc.org/dog-breeds/staffordshire-bull-terrier/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Official breed standard and profile published by the American Kennel Club.",
    publisher: "American Kennel Club"
  },
  "american-kennel-club-terrier-group-health-testing-requirements": {
    id: "american-kennel-club-terrier-group-health-testing-requirements",
    name: "American Kennel Club - Terrier Group Health Testing Requirements",
    url: "https://www.akc.org/breeder-programs/breed-health-testing-requirements/terrier-group-health-testing-requirements/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-15",
    note: null,
    publisher: null
  },
  "american-kennel-club-wirehaired-vizsla": {
    id: "american-kennel-club-wirehaired-vizsla",
    name: "American Kennel Club - Wirehaired Vizsla",
    url: "https://www.akc.org/dog-breeds/wirehaired-vizsla/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-14",
    note: null,
    publisher: null
  },
  "canadian-kennel-club-gascogne-braque-francais": {
    id: "canadian-kennel-club-gascogne-braque-francais",
    name: "Canadian Kennel Club – Gascogne Braque Français",
    url: "https://www.ckc.ca/en/Choosing-a-Dog/Choosing-a-Breed/Sporting-Dogs/Braque-Francais-Gascogne",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-15",
    note: null,
    publisher: null
  },
  "canadian-kennel-club-vizsla-wire-haired-breed-standard": {
    id: "canadian-kennel-club-vizsla-wire-haired-breed-standard",
    name: "Canadian Kennel Club Official Breed Standard: Vizsla (Wire-Haired)",
    url: "https://www.ckc.ca/CanadianKennelClub/media/Breed-Standards/Group%201/Vizsla-Wire-Haired.pdf",
    publisher: "Canadian Kennel Club (CKC)",
    type: "breed_standard",
    commercialUse: "reference_only",
    accessedOn: "2026-10-19",
    publishedOn: null,
    note: "Official Canadian Kennel Club breed standard for the Vizsla (Wire-Haired), effective January 2014."
  },
  "dogzone-schweizer-laufhund-breed-information-and-health": {
    id: "dogzone-schweizer-laufhund-breed-information-and-health",
    name: "DogZone - Schweizer Laufhund breed information and health",
    url: "https://www.dogzone.com/breeds/schweizer-laufhund/",
    type: "other",
    publishedOn: null,
    accessedOn: "2026-10-14",
    note: null,
    publisher: null
  },
  "eurasier-club-of-canada-breed-standard": {
    id: "eurasier-club-of-canada-breed-standard",
    name: "Eurasier Club of Canada - Breed Standard",
    url: "https://www.eurasier.org/standard",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-14",
    note: null,
    publisher: null
  },
  "european-college-of-veterinary-ophthalmologists-breed-eye-conditions": {
    id: "european-college-of-veterinary-ophthalmologists-breed-eye-conditions",
    name: "European College of Veterinary Ophthalmologists - Breed eye conditions",
    url: "https://www.ecvo.eu/media/schweizelaufhuender.pdf",
    type: "veterinary",
    publishedOn: null,
    accessedOn: "2026-10-14",
    note: null,
    publisher: null
  },
  "fci-hokkaido-breed-standard-and-nomenclature": {
    id: "fci-hokkaido-breed-standard-and-nomenclature",
    name: "FCI - Hokkaido Breed Standard and Nomenclature",
    url: "https://www.fci.be/en/nomenclature/HOKKAIDO-261.html",
    type: "official_breed_standard",
    publishedOn: "2017-02-09",
    accessedOn: "2026-10-19",
    note: "FCI Standard No. 261 (valid standard dated 2016-10-30, published in English 2017-02-09 at https://dev.fci.be/Nomenclature/Standards/261g05-en.pdf).",
    publisher: null
  },
  "fci-hungarian-wire-haired-pointing-dog-standard": {
    id: "fci-hungarian-wire-haired-pointing-dog-standard",
    name: "FCI - Hungarian Wire-Haired Pointing Dog Standard",
    url: "https://www.fci.be/Nomenclature/Standards/239g07-en.pdf",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-14",
    note: null,
    publisher: null
  },
  "fci-italian-sighthound-breed-nomenclature": {
    id: "fci-italian-sighthound-breed-nomenclature",
    name: "FCI - Italian Sighthound Breed Nomenclature",
    url: "https://www.fci.be/en/nomenclature/PICCOLO-LEVRIERO-ITALIANO-200.html",
    type: "official_breed_standard",
    publishedOn: "2015-12-17",
    accessedOn: "2026-10-19",
    note: "Corrected FCI nomenclature URL for Piccolo Levriero Italiano (Standard No. 200, accepted definitively 1956-10-22).",
    publisher: null
  },
  "fci-official-breed-standard-pyrenean-mountain-dog": {
    id: "fci-official-breed-standard-pyrenean-mountain-dog",
    name: "FCI Official Breed Standard - Pyrenean Mountain Dog",
    url: "https://www.fci.be/nomenclature/Standards/137g02-en.pdf",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-14",
    note: null,
    publisher: null
  },
  "fci-official-italian-sighthound-breed-standard": {
    id: "fci-official-italian-sighthound-breed-standard",
    name: "FCI - Official Italian Sighthound Breed Standard",
    url: "https://www.fci.be/Nomenclature/Standards/200g10-en.pdf",
    type: "official_breed_standard",
    publishedOn: "2015-12-17",
    accessedOn: "2026-10-19",
    note: "FCI Standard No. 200 (official valid standard dated 2015-11-13, published in English 2015-12-17).",
    publisher: null
  },
  "fci-pharaoh-hound-breed-nomenclature": {
    id: "fci-pharaoh-hound-breed-nomenclature",
    name: "FCI - Pharaoh Hound Breed Nomenclature",
    url: "https://www.fci.be/en/nomenclature/PHARAOH-HOUND-248.html",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-15",
    note: null,
    publisher: null
  },
  "fci-standard-no-142-slovakian-chuvach": {
    id: "fci-standard-no-142-slovakian-chuvach",
    name: "FCI Standard No. 142 – Slovakian Chuvach (Slovenský Čuvač)",
    url: "https://www.fci.be/Nomenclature/Standards/142g01-en.pdf",
    type: "official_breed_standard",
    publishedOn: "1996-06-04",
    accessedOn: "2026-10-20",
    note: "Official FCI breed standard for the Slovenský Čuvač (Slovakian Chuvach), Group 1, Section 1 (Sheepdogs).",
    publisher: "Fédération Cynologique Internationale"
  },
  "fci-standard-no-347-white-swiss-shepherd-dog": {
    id: "fci-standard-no-347-white-swiss-shepherd-dog",
    name: "FCI Standard No. 347 – White Swiss Shepherd Dog",
    url: "https://www.fci.be/Nomenclature/Standards/347g01-en.pdf",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-15",
    note: null,
    publisher: null
  },
  "fci-standard-no-352-russkiy-toy-russian-toy": {
    id: "fci-standard-no-352-russkiy-toy-russian-toy",
    name: "FCI Standard No. 352 - Russkiy Toy (Russian Toy)",
    url: "https://www.fci.be/nomenclature/Standards/352g09-en.pdf",
    type: "official_breed_standard",
    publishedOn: "2017-11-07",
    accessedOn: "2026-10-18",
    note: "Official valid standard dated 7 November 2017. The English PDF file is dated 5 December 2017. Group 9, Section 9, Continental Toy Spaniels and Russian Toys, without a working trial. Height 22–27 cm, preferable 25 cm. Weight up to 3 kg, preferable 2.3 kg.",
    publisher: null
  },
  "federation-cynologique-internationale-fci-berger-blanc-suisse-breed-profile": {
    id: "federation-cynologique-internationale-fci-berger-blanc-suisse-breed-profile",
    name: "Fédération Cynologique Internationale (FCI) – Berger Blanc Suisse breed profile",
    url: "https://www.fci.be/en/nomenclature/WHITE-SWISS-SHEPHERD-DOG-347.html",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-15",
    note: null,
    publisher: null
  },
  "federation-cynologique-internationale-fci-french-pointing-dog-gascogne-type": {
    id: "federation-cynologique-internationale-fci-french-pointing-dog-gascogne-type",
    name: "Fédération Cynologique Internationale (FCI) – French Pointing Dog, Gascogne Type",
    url: "https://www.fci.be/en/nomenclature/FRENCH-POINTING-DOG-GASCOGNE-TYPE-133.html",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-15",
    note: null,
    publisher: null
  },
"federation-cynologique-internationale-fci-schweizer-laufhund": {
    id: "federation-cynologique-internationale-fci-schweizer-laufhund",
    name: "Fédération Cynologique Internationale (FCI) - FCI Standard No. 59 — Schweizer Laufhund / Chien Courant Suisse (Swiss Hound)",
    url: "https://www.fci.be/en/nomenclature/CHIEN-COURANT-SUISSE-59.html",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    accessedOn: "2026-10-19",
    publishedOn: null,
    note: "Official FCI nomenclature and breed standard page (FCI-St. N° 59, definitively recognized 1954-08-25; current valid standard 2001-11-28, published 2002-06-28; English text also mirrored at https://www.dogsglobal.com/breeds/schweizer-laufhund/breed-standards).",
    publisher: null
  },
  "federation-cynologique-internationale-fci-slovakian-chuvach": {
    id: "federation-cynologique-internationale-fci-slovakian-chuvach",
    name: "Fédération Cynologique Internationale (FCI) – Slovakian Chuvach",
    url: "https://www.fci.be/en/nomenclature/SLOVAKIAN-CHUVACH-142.html",
    type: "official_breed_standard",
    publishedOn: "1996-06-04",
    accessedOn: "2026-10-20",
    note: "Official FCI breed nomenclature and summary for Slovenský Čuvač (No. 142).",
    publisher: "Fédération Cynologique Internationale"
  },
  "federation-cynologique-internationale-pyrenean-mountain-dog": {
    id: "federation-cynologique-internationale-pyrenean-mountain-dog",
    name: "CHIEN DE MONTAGNE DES PYRENEES (137)",
    publisher: "Fédération Cynologique Internationale (FCI)",
    url: "https://www.fci.be/en/nomenclature/CHIEN-DE-MONTAGNE-DES-PYRENEES-137.html",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: null,
  },
  "glen-of-imaal-terrier-club-of-america-health-issues": {
    id: "glen-of-imaal-terrier-club-of-america-health-issues",
    name: "Glen of Imaal Terrier Club of America - Health Issues",
    url: "https://www.glens.org/health_issues.html",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-15",
    note: null,
    publisher: null
  },
  "glen-of-imaal-terrier-club-of-america-official-breed-standard": {
    id: "glen-of-imaal-terrier-club-of-america-official-breed-standard",
    name: "Glen of Imaal Terrier Club of America - Official Breed Standard",
    url: "https://www.glens.org/standard.html",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-15",
    note: null,
    publisher: null
  },
  "great-pyrenees-club-of-america-health-resources": {
    id: "great-pyrenees-club-of-america-health-resources",
    name: "Great Pyrenees Club of America - Health Resources",
    url: "https://greatpyrenees.club/general-health-form/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-14",
    note: null,
    publisher: null
  },
  "great-pyrenees-club-of-america-official-breed-standard": {
    id: "great-pyrenees-club-of-america-official-breed-standard",
    name: "Great Pyrenees Club of America - Official Breed Standard",
    url: "https://greatpyrenees.club/great-pyrenees-official-standard/",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-14",
    note: null,
    publisher: null
  },
  "hokkaido-association-of-north-america-breed-standard": {
    id: "hokkaido-association-of-north-america-breed-standard",
    name: "Hokkaido Association of North America - Breed Standard",
    url: "https://www.hokkaidoken.org/breed/standard/",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Follows the Hokkaido Ken Hozonkai (DOKENHO) standard effective in Japan since April 11, 1945.",
    publisher: null
  },
  "royal-canin-switzerland-schweizer-laufhund": {
    id: "royal-canin-switzerland-schweizer-laufhund",
    name: "Royal Canin Switzerland - Schweizer Laufhund",
    url: "https://www.royalcanin.com/ch/dogs/breeds/swiss-hound",
    type: "other",
    publishedOn: null,
    accessedOn: "2026-10-14",
    note: null,
    publisher: null
  },
  "schweizerischer-laufhundeclub-der-laufhund": {
    id: "schweizerischer-laufhundeclub-der-laufhund",
    name: "Schweizerischer Laufhundeclub - Der Laufhund",
    url: "https://www.laufhund.ch/der-laufhund",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-14",
    note: null,
    publisher: null
  },
  "slovak-national-dog-breeds-slovensky-cuvac": {
    id: "slovak-national-dog-breeds-slovensky-cuvac",
    name: "Slovak National Dog Breeds – Slovenský Čuvač",
    url: "https://www.slovakdogbreeds.sk/plemena/slovensky-cuvac/",
    type: "official_breed_standard",
    publishedOn: "1965-08-18",
    accessedOn: "2026-10-20",
    note: "Official Slovak breed profile, historical documentation, and standard definition published by Slovenské národné plemená psov.",
    publisher: "Slovenské národné plemená psov"
  },
  "russian-toy-club-of-america-health-statement": {
    id: "russian-toy-club-of-america-health-statement",
    name: "Russian Toy Club of America - Health Statement",
    url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2024/01/05190942/Russian-Toy-Club-of-America-Health-Statement-November-13-2023.pdf",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-18",
    note: "Board-approved health statement dated 13 November 2023. Recommended breeding-dog tests: patellar luxation, inherited eye disease, and cardiac screening; additional recommended tests include Legg-Calve-Perthes, hip and elbow dysplasia, and bile-acid testing for liver shunts.",
    publisher: null
  },
  "the-royal-kennel-club-russian-toy-breed-standard": {
    id: "the-royal-kennel-club-russian-toy-breed-standard",
    name: "The Royal Kennel Club - Russian Toy Breed Standard",
    url: "https://www.royalkennelclub.com/breed-standards/toy/russian-toy/",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-18",
    note: "Page last updated April 2025. The UK standard gives 20–28 cm height with ±1 cm tolerance, while the FCI standard gives 22–27 cm; measurements should be labelled by registry.",
    publisher: null
  },
  "the-kennel-club-russian-toy": {
    id: "the-kennel-club-russian-toy",
    name: "The Kennel Club - Russian Toy",
    url: "https://www.royalkennelclub.com/search/breeds-a-to-z/breeds/toy/russian-toy/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-18",
    note: "Consulted on 15 October 2026. Exercise up to 1 hour a day. Home size: flat or apartment. Grooming: every day. Sheds, with no level given. Lifespan: over 12 years. Best-practice screening: eye testing under the BVA/KC/ISDS Eye Scheme. The about text also describes an earlier watchdog and ratter role; the stored original purpose follows the FCI standard.",
    publisher: null
  },
  "the-royal-kennel-club-eurasier-breed-standard": {
    id: "the-royal-kennel-club-eurasier-breed-standard",
    name: "The Royal Kennel Club - Eurasier Breed Standard",
    url: "https://www.royalkennelclub.com/breed-standards/utility/eurasier/",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-14",
    note: null,
    publisher: null
  },
  "the-royal-kennel-club-glen-of-imaal-terrier-breed-standard": {
    id: "the-royal-kennel-club-glen-of-imaal-terrier-breed-standard",
    name: "The Royal Kennel Club - Glen of Imaal Terrier Breed Standard",
    url: "https://www.royalkennelclub.com/breed-standards/terrier/glen-of-imaal-terrier/",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-15",
    note: null,
    publisher: null
  },
  "the-royal-kennel-club-staffordshire-bull-terrier-breed-standard": {
    id: "the-royal-kennel-club-staffordshire-bull-terrier-breed-standard",
    name: "The Royal Kennel Club – Staffordshire Bull Terrier Breed Standard",
    url: "https://www.royalkennelclub.com/breed-standards/terrier/staffordshire-bull-terrier",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Official breed standard published by the country-of-origin kennel club.",
    publisher: "The Royal Kennel Club"
  },
  "united-kennel-club-staffordshire-bull-terrier-breed-standard": {
    id: "united-kennel-club-staffordshire-bull-terrier-breed-standard",
    name: "United Kennel Club – Staffordshire Bull Terrier Breed Standard",
    url: "https://www.ukcdogs.com/staffordshire-bull-terrier",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Official breed standard published by the United Kennel Club.",
    publisher: "United Kennel Club"
  },
  "united-states-eurasier-club-health": {
    id: "united-states-eurasier-club-health",
    name: "United States Eurasier Club - Health",
    url: "https://www.useurasierclub.org/health",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-14",
    note: null,
    publisher: null
  },
  "white-swiss-shepherd-club-of-america-breed-education-and-health-information": {
    id: "white-swiss-shepherd-club-of-america-breed-education-and-health-information",
    name: "White Swiss Shepherd Club of America – Breed Education and Health Information",
    url: "https://whiteswissshepherd.org/breed_education/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-15",
    note: null,
    publisher: null
  },
  "fci-kromfohrlander-breed-standard": {
    id: "fci-kromfohrlander-breed-standard",
  name: "FCI - Kromfohrländer Breed Standard No. 192",
  url: "https://www.fci.be/Nomenclature/Standards/192g09-en.pdf",
  type: "official_breed_standard",
  publishedOn: "1998-10-12",
  accessedOn: "2026-10-21",
  note: "Official FCI standard for the Kromfohrländer (Standard No. 192), Group 9, Section 10.",
  publisher: "Fédération Cynologique Internationale"
  },

  "vdh-kromfohrlander-breed-profile": {
    id: "vdh-kromfohrlander-breed-profile",
    name: "Verband für das Deutsche Hundewesen (VDH) – Kromfohrländer",
    url: "https://welpen.vdh.de/hunderassen/rasselexikon/ergebnis/kromfohrlaender",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "German national kennel club (VDH) breed profile covering measurements, coat varieties, temperament, and history.",
    publisher: "Verband für das Deutsche Hundewesen"
  },

  "american-kennel-club-kromfohrlander": {
    id: "american-kennel-club-kromfohrlander",
  name: "American Kennel Club – Kromfohrlander",
  url: "https://www.akc.org/dog-breeds/kromfohrlander/",
  type: "kennel_club",
  publishedOn: null,
  accessedOn: "2026-10-21",
  note: "AKC breed profile and traits, life expectancy, health testing, grooming, exercise, training, and nutrition.",
  publisher: "American Kennel Club"
  },

  "kromfohrlander-club-of-america-kromis": {
    id: "kromfohrlander-club-of-america-kromis",
  name: "Kromfohrländer Club of America – Kromis",
  url: "https://www.kromiclub.org/kromis",
  type: "breed_club",
  publishedOn: null,
  accessedOn: "2026-10-21",
  note: "Official US national breed club profile covering coat types, shedding, living arrangements, temperament, feeding, and health conditions.",
  publisher: "Kromfohrländer Club of America",
  commercialUse: "reference_only"
  },

  "kromfohrlander-hfh-fam83g-study": {
    id: "kromfohrlander-hfh-fam83g-study",
  name: "PLOS Genetics – A Mutation in the FAM83G Gene in Dogs with Hereditary Footpad Hyperkeratosis",
  url: "https://journals.plos.org/plosgenetics/article?id=10.1371/journal.pgen.1004370",
  type: "scientific",
  publishedOn: "2014-05-15",
  accessedOn: "2026-10-21",
  note: "Peer-reviewed research identifying a FAM83G variant associated with hereditary footpad hyperkeratosis in Kromfohrländer and Irish Terrier dogs.",
  publisher: "PLOS Genetics",
  commercialUse: "commercial_use"
  },
"fci-coton-de-tulear-official-standard": {
    id: "fci-coton-de-tulear-official-standard",
    name: "FCI - Coton de Tuléar Official Breed Standard No. 283",
    publisher: "Fédération Cynologique Internationale",
    url: "https://www.fci.be/nomenclature/Standards/283g09-en.pdf",
    type: "official_breed_standard",
    publishedOn: "2000-02-04",
    accessedOn: "2026-10-21",
    note: "Official FCI breed standard No. 283 (published 2000-02-04; official valid standard dated 1999-11-25; definitive FCI recognition 1970-09-02). Used for classification, country of origin, proportions, measurements, coat, colour, and temperament."
  },

"american-kennel-club-coton-de-tulear": {
    id: "american-kennel-club-coton-de-tulear",
    name: "American Kennel Club - Coton de Tulear Breed Profile",
    publisher: "American Kennel Club",
    url: "https://www.akc.org/dog-breeds/coton-de-tulear/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Official AKC breed profile covering lifespan (15–19 years), height/weight, trait ratings, grooming, exercise, training, nutrition, and health overview."
  },

"akc-coton-de-tulear-health-testing-recommendations": {
    id: "akc-coton-de-tulear-health-testing-recommendations",
    name: "American Kennel Club - Non-Sporting Group Health Testing Requirements",
    publisher: "American Kennel Club",
    url: "https://www.akc.org/breeder-programs/breed-health-testing-requirements/non-sporting-group-health-testing-requirements/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Lists Coton de Tulear health tests recommended by the national parent breed club (Patella Evaluation, Hip Evaluation, Cardiac Exam, Ophthalmologist Evaluation)."
  },

"usactc-coton-de-tulear-health-statement": {
    id: "usactc-coton-de-tulear-health-statement",
    name: "United States of America Coton de Tulear Club - Official Health Statement",
    publisher: "United States of America Coton de Tulear Club",
    url: "https://cdn.akc.org/Marketplace/Health-Statement/Coton-de-Tulear.pdf",
    type: "breed_club",
    publishedOn: "2021-06-18",
    accessedOn: "2026-10-21",
    note: "Official parent breed club health statement hosted by the AKC (replacing https://www.akc.org/wp-content/uploads/2021/07/Coton-de-Tulear-Health-Statement.pdf). Details mandatory Code of Ethics structural testing, CHIC requirements, and strongly recommended elective clinical and DNA tests."
  },

"coton-de-tulear-club-of-america-about-the-breed": {
    id: "coton-de-tulear-club-of-america-about-the-breed",
    name: "Coton de Tulear Club of America - About the Breed",
    publisher: "Coton de Tulear Club of America",
    url: "https://www.cotonclub.org/about-the-breed",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Breed-club documentation covering Malagasy origin in Tuléar, history since 1974/1976, temperament, longevity, coat care, and colour varieties."
  },

"canadian-kennel-club-coton-de-tulear-profile": {
    id: "canadian-kennel-club-coton-de-tulear-profile",
    name: "Canadian Kennel Club - Coton de Tulear",
    publisher: "Canadian Kennel Club",
    url: "https://www.ckc.ca/en/Choosing-a-Dog/Choosing-a-Breed/Toy-Dogs/Coton-de-Tulear",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Official CKC breed profile covering origin in Tulear, temperament, apartment suitability, height (10–12.5 in / 25–32 cm), weight (9–14 lb / 4–6.5 kg), and coat care."
  },

"wikimedia-coton-de-tulear-dog-jean": {
    id: "wikimedia-coton-de-tulear-dog-jean",
    name: "Wikimedia Commons - File:Coton de Tulear dog.jpg",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Coton_de_Tulear_dog.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: "2009-05-14",
    accessedOn: "2026-10-21",
    note: "Photograph by Jean, originally published on Flickr (2009-05-14) and verified on Wikimedia Commons (2014-03-07) under CC BY 2.0."
  },

"wikimedia-coton-de-tulear-puppy-willie-whitby": {
    id: "wikimedia-coton-de-tulear-puppy-willie-whitby",
    name: "Wikimedia Commons - File:Coton de Tulear.jpg",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Coton_de_Tulear.jpg",
    type: "other",
    commercialUse: "reference_only",
    publishedOn: "2011-03-15",
    accessedOn: "2026-10-21",
    note: "Photograph of a 13-week-old Coton de Tulear puppy uploaded by Willie Whitby under CC BY-SA 3.0. Note: embedded Nikon D90 EXIF metadata lists 'Author: John Williams' and 'Copyright holder: John Williams' (captured 2011-03-13); flagged for commercial-use authorship verification."
  },
"fci-cirneco-dell-etna-standard": {
    id: "fci-cirneco-dell-etna-standard",
    name: "FCI - Cirneco dell'Etna Official Breed Standard No. 199",
    url: "https://www.fci.be/Nomenclature/Standards/199g05-en.pdf",
    type: "official_breed_standard",
    publishedOn: "2017-02-07",
    accessedOn: "2026-10-21",
    note: "Official FCI Standard No. 199 (English translation dated 2017-02-07; official valid standard published 2016-10-30). Used for origin, classification, proportions, anatomy, coat, colour, height (46–50 cm / 44–48 cm ± 2 cm), weight (10–13 kg / 8–11 kg), and disqualifying faults.",
    publisher: "Fédération Cynologique Internationale"
  },

"american-kennel-club-cirneco-dell-etna": {
    id: "american-kennel-club-cirneco-dell-etna",
    name: "American Kennel Club - Cirneco dell'Etna Breed Profile",
    url: "https://www.akc.org/dog-breeds/cirneco-delletna/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Official AKC breed profile used for life expectancy (15–16 years), North American weight ranges (20–28 lbs male, 19–25 lbs female), low drooling rating, temperament, exercise, training, grooming, nutrition, and historical trivia.",
    publisher: "American Kennel Club"
  },

"american-kennel-club-cirneco-dell-etna-standard": {
    id: "american-kennel-club-cirneco-dell-etna-standard",
    name: "American Kennel Club - Official Cirneco dell'Etna Breed Standard",
    url: "https://images.akc.org/pdf/breeds/standards/CirnecodellEtna.pdf",
    type: "official_breed_standard",
    publishedOn: "2020-01-14",
    accessedOn: "2026-10-21",
    note: "Official AKC breed standard approved 2020-01-14 and effective 2020-03-31. Specifies height of 18–20 inches for dogs and 17–19 inches for bitches (disqualifying outside limits), retention of front dewclaws, and honourable working scars clause.",
    publisher: "American Kennel Club"
  },

"cirneco-dell-etna-club-health-statement": {
    id: "cirneco-dell-etna-club-health-statement",
    name: "Cirneco dell'Etna Club of America - Health Statement",
    url: "https://cdn.akc.org/Marketplace/Health-Statement/Cirneco-dell-Etna.pdf",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Parent-club health statement reporting that the club has not observed widespread heritable health issues in the breed and currently has no routine mandatory screening test panel.",
    publisher: "Cirneco dell'Etna Club of America"
  },

"cirneco-foundation-health-library": {
    id: "cirneco-foundation-health-library",
    name: "Cirneco Foundation - Health Library & CONS Testing Resources",
    url: "https://cirnecofoundation.org/health/health-library/",
    type: "scientific",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Curated scientific library and health initiative of the 501(c)(3) Cirneco Foundation, documenting peer-reviewed studies on Cirneco oculo-neurological syndrome (CONS / AMPD2), University of Pennsylvania reference genome sequencing, genomic variability, and Leishmania infantum immunity.",
    publisher: "Cirneco Foundation"
  },

"cirneco-cons-ampd2-study-2024": {
    id: "cirneco-cons-ampd2-study-2024",
    name: "Murgiano et al. (2024) - Frameshift Variant in AMPD2 in Cirneco dell'Etna Dogs with Retinopathy and Tremors (Genes)",
    url: "https://pubmed.ncbi.nlm.nih.gov/38397227/",
    type: "scientific",
    publishedOn: "2024-02-13",
    accessedOn: "2026-10-21",
    note: "Peer-reviewed study (Genes 2024;15(2):238, PMID: 38397227, PMCID: PMC10887799) identifying a 1-bp frameshift deletion in exon 15 of AMPD2 on CFA6 (g.42,698,170delC / c.2131delG / p.D711Mfs12Stop) associated with Cirneco oculo-neurological syndrome (CONS) in two male littermates and three related carriers.",
    publisher: "Genes (MDPI) / PubMed"
  },

"wikimedia-cirneco-vignazzi-2022": {
    id: "wikimedia-cirneco-vignazzi-2022",
    name: "Wikimedia Commons - File:CIRNECO DELL'ETNA.jpg",
    url: "https://commons.wikimedia.org/wiki/File:CIRNECO_DELL%27ETNA.jpg",
    type: "other",
    publishedOn: "2023-09-05",
    accessedOn: "2026-10-21",
    note: "Photograph by Vignazzi (captured 2022-09-05, uploaded 2023-09-05, 992x1600 px) depicting a three-year-old male Cirneco dell'Etna in Sicily under CC BY-SA 4.0.",
    publisher: "Wikimedia Commons"
  },

"wikimedia-cirneco-frumpy-2006": {
    id: "wikimedia-cirneco-frumpy-2006",
    name: "Wikimedia Commons - File:Cirneco dell Etna.jpg",
    url: "https://commons.wikimedia.org/wiki/File:Cirneco_dell_Etna.jpg",
    type: "other",
    publishedOn: "2006-07-02",
    accessedOn: "2026-10-21",
    note: "Photograph attributed on German Wikipedia and Wikimedia Commons to author Jan Eduard (recorded capture date 1998-08-01; uploaded to de.wikipedia on 2006-01-06 and transferred to Commons at full 1182x835 resolution by Frumpy on 2006-07-02) under GFDL 1.2+ / CC BY-SA 3.0; flagged for commercial-use provenance verification due to a conflicting source note on derivative File:Cirneco_dell_Etna_611.jpg.",
    publisher: "Wikimedia Commons"
  },
"cirneco-dell-etna-club-of-america-breed-profile": {
    id: "cirneco-dell-etna-club-of-america-breed-profile",
    name: "Cirneco dell'Etna Club of America - Breed Standard & Introduction",
    url: "https://cirneco.org/breed/",
    type: "breed_club",
    publishedOn: "2020-01-14",
    accessedOn: "2026-10-21",
    note: "Parent-club breed overview and official standard page noting Sicilian rabbit-hunting heritage on Mount Etna lava terrain and cautioning that the English translation 'Sicilian greyhound' is a misnomer.",
    publisher: "Cirneco dell'Etna Club of America"
  },
  "fci-eurasier-breed-standard": {
    id: "fci-eurasier-breed-standard",
    name: "FCI - Eurasier (Eurasian) Breed Standard No. 291",
    url: "https://www.fci.be/Nomenclature/Standards/291g05-en.pdf",
    type: "official_breed_standard",
    publishedOn: "2020-02-17",
    accessedOn: "2026-10-19",
    note: "Official valid standard dated 4 September 2019 (published in English on 17 February 2020). Group 5, Section 5: Asian Spitz and related breeds, without working trial.",
    publisher: null
  },
  "united-states-eurasier-club-breed-information": {
    id: "united-states-eurasier-club-breed-information",
    name: "United States Eurasier Club - History, Character and FAQ",
    url: "https://www.useurasierclub.org/faq",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Covers breed history in Weinheim, temperament, apartment suitability, coat shedding cycles, feeding habits, and living environment.",
    publisher: null
  },
  "eurasier-dwlm-vldlr-study": {
    id: "eurasier-dwlm-vldlr-study",
    name: "PLOS ONE - VLDLR Deletion and Dandy-Walker-Like Malformation in Eurasier Dogs",
    url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0108917",
    type: "scientific",
    publishedOn: "2015-02-10",
    accessedOn: "2026-10-19",
    note: "Peer-reviewed study (Gerber et al., 2015) identifying the autosomal recessive VLDLR:c.1713delC mutation responsible for Dandy-Walker-like malformation (DWLM) in Eurasier dogs.",
    publisher: null
  },
"fci-nova-scotia-duck-tolling-retriever-standard": {
    id: "fci-nova-scotia-duck-tolling-retriever-standard",
    name: "FCI - Nova Scotia Duck Tolling Retriever Standard No. 312",
    url: "https://www.fci.be/Nomenclature/Standards/312g08-en.pdf",
    type: "official_breed_standard",
    publishedOn: "1999-02-05",
    accessedOn: "2026-10-21",
    note: "Official FCI Standard No. 312 (dated 1999-02-05; official valid standard published 1987-06-24). Used for Group 8 Section 1 classification, working utilization, historical summary, head and body measurements, coat, colour, height (48–51 cm / 45–48 cm ± 2.5 cm), weight (20–23 kg / 17–20 kg), and disqualifying faults.",
    publisher: "Fédération Cynologique Internationale"
  },

"american-kennel-club-nova-scotia-duck-tolling-retriever": {
    id: "american-kennel-club-nova-scotia-duck-tolling-retriever",
    name: "American Kennel Club - Nova Scotia Duck Tolling Retriever",
    url: "https://www.akc.org/dog-breeds/nova-scotia-duck-tolling-retriever/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Official AKC breed profile used for height (18–20 in / 17–19 in), weight (35–50 lbs), life expectancy (12–14 years), drooling and shedding ratings, temperament, exercise, grooming, training, nutrition, and health guidance.",
    publisher: "American Kennel Club"
  },

"canadian-kennel-club-nova-scotia-duck-tolling-retriever": {
    id: "canadian-kennel-club-nova-scotia-duck-tolling-retriever",
    name: "Canadian Kennel Club - Nova Scotia Duck Tolling Retriever",
    url: "https://www.ckc.ca/en/Choosing-a-Dog/Choosing-a-Breed/Sporting-Dogs/Retriever-Nova-Scotia-Duck-Tolling",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Official CKC breed profile covering Little River Harbour origin, 1945 CKC recognition, working purpose, size (45–51 cm; 17–23 kg / 37–51 lbs), coat and colour, temperament, and grooming.",
    publisher: "Canadian Kennel Club"
  },

"nsdtr-club-canada-about-tollers": {
    id: "nsdtr-club-canada-about-tollers",
    name: "Nova Scotia Duck Tolling Retriever Club of Canada - About Tollers",
    url: "https://www.toller.ca/tollers/about-tollers/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Canadian parent-club guide covering Little River Duck Dog and Yarmouth Toller history, 1945 CKC registration, 1995 Provincial Dog of Nova Scotia designation, tolling behaviour, physical traits, seasonal shedding, temperament, and socialization.",
    publisher: "Nova Scotia Duck Tolling Retriever Club of Canada"
  },

"nsdtr-club-canada-health": {
    id: "nsdtr-club-canada-health",
    name: "Nova Scotia Duck Tolling Retriever Club of Canada - Health",
    url: "https://www.toller.ca/tollers/health/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Canadian parent-club health resource detailing recommended orthopaedic, ophthalmic, thyroid, and cardiac evaluations alongside DNA tests for PRA-prcd, CEA/CH, JADD, CP1, CLPS, DM, CDDY/IVDD, CDMC, CLAM, DE, and Buff/Dilute (and noting that Tollers have not tested positive for MDR1).",
    publisher: "Nova Scotia Duck Tolling Retriever Club of Canada"
  },
"american-kennel-club-sporting-group-health-testing": {
    id: "american-kennel-club-sporting-group-health-testing",
    name: "American Kennel Club - Sporting Group Health Testing Requirements",
    url: "https://www.akc.org/breeder-programs/breed-health-testing-requirements/sporting-group-health-testing-requirements/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Official AKC Sporting Group breed health testing recommendations, including Nova Scotia Duck Tolling Retriever and Boykin Spaniel screening panels.",
    publisher: "American Kennel Club"
  },
"nsdtr-club-usa-health-statement": {
    id: "nsdtr-club-usa-health-statement",
    name: "Nova Scotia Duck Tolling Retriever Club (USA) - Health Statement",
    url: "https://cdn.akc.org/Marketplace/Health-Statement/Nova-Scotia-Duck-Tolling-Retriever.pdf",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "US parent-club health statement outlining required CHIC screenings (hip dysplasia evaluation, ACVO eye exam, and prcd-PRA DNA test) and optional screenings (elbow, cardiac, patellar, thyroid, CEA, JADD, CP1, CLPS, CDDY, CLAM, and CDMC).",
    publisher: "Nova Scotia Duck Tolling Retriever Club (USA)"
  },

"nsdtr-immune-mediated-disease-patterns-2015": {
    id: "nsdtr-immune-mediated-disease-patterns-2015",
    name: "Disease Patterns and Incidence of Immune-Mediated Disease in Insured Swedish Nova Scotia Duck Tolling Retrievers",
    url: "https://bvajournals.onlinelibrary.wiley.com/doi/10.1136/vr.102960",
    type: "scientific",
    publishedOn: "2015-07-18",
    accessedOn: "2026-10-21",
    note: "Bremer HD, Vilson Å, Bonnett BN, Hansson-Hamlin H (Veterinary Record 2015;177(3):74). Epidemiological cohort study of 2,890 insured Swedish Tollers (2002–2007) reporting elevated relative risk and incidence rates for SRMA (20 per 10,000 DYAR; RR 12) and IMRD (6.8 per 10,000 DYAR; RR 18), higher lymphoma risk, and lower ear and heart disease rates compared with other breeds.",
    publisher: "Veterinary Record (BMJ / BVA)"
  },

"nsdtr-immune-mediated-health-survey-2024": {
    id: "nsdtr-immune-mediated-health-survey-2024",
    name: "In Sickness and Health - A Questionnaire-Based Study of Immune-Mediated Diseases and Neoplasia in Swedish Nova Scotia Duck Tolling Retrievers",
    url: "https://doi.org/10.1186/s13028-024-00761-x",
    type: "scientific",
    publishedOn: "2024-08-15",
    accessedOn: "2026-10-21",
    note: "Nilsson K et al. / Hansson-Hamlin H (Acta Veterinaria Scandinavica 2024;66:39). Questionnaire study of 935 living and 177 deceased Swedish Tollers reporting living lifetime prevalence of 3.0% for IMRD and 3.5% for SRMA, owner-reported neoplasia of any type in 14% of living dogs (mammary 22%, mast cell 15%), and neoplasia as cause of death in 38.4% of deceased dogs.",
    publisher: "Acta Veterinaria Scandinavica (BioMed Central)"
  },

"nsdtr-resf1-jadd-study-2026": {
    id: "nsdtr-resf1-jadd-study-2026",
    name: "A Variant in RESF1 Is Associated with Addison's Disease and Multiple Autoimmune Syndrome in Young Nova Scotia Duck Tolling Retrievers",
    url: "https://www.nature.com/articles/s41598-026-42994-y",
    type: "scientific",
    publishedOn: "2026-03-12",
    accessedOn: "2026-10-21",
    note: "Brown EA, Cullen JN et al. / Bannasch DL (Scientific Reports 2026;16:13194). Identifies an autosomal recessive missense variant in RESF1 (Chr27:29,736,795, c.3170C>T, p.Pro1057Leu) associated with juvenile-onset Addison's disease (~75% penetrance by 1 year, median onset 5 months) and multiple autoimmune syndrome (41.7%–70.8% concurrent immune disorders; median survival 2.0 years).",
    publisher: "Scientific Reports (Nature Portfolio)"
  },

"uc-davis-vgl-jadd-nsdtr": {
    id: "uc-davis-vgl-jadd-nsdtr",
    name: "UC Davis Veterinary Genetics Laboratory - Juvenile Addison's Disease in Nova Scotia Duck Tolling Retrievers",
    url: "https://vgl.ucdavis.edu/test/jadd-nsdtr",
    type: "veterinary",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "UC Davis VGL test page for the RESF1 c.3170C>T (p.Pro1057Leu) juvenile Addison's disease (JADD) variant, documenting autosomal recessive inheritance with incomplete (~75.9%) penetrance, ~20%–23% carrier frequency, concurrent ocular/immunologic comorbidities, and breeding guidance.",
    publisher: "UC Davis Veterinary Genetics Laboratory"
  },

"wikimedia-nsdtr-portrait-christopher-woo": {
    id: "wikimedia-nsdtr-portrait-christopher-woo",
    name: "Wikimedia Commons - Nova Scotia Duck Tolling Retriever portrait.jpg",
    url: "https://commons.wikimedia.org/wiki/File:Nova_Scotia_Duck_Tolling_Retriever_portrait.jpg",
    type: "other",
    publishedOn: "2006-04-30",
    accessedOn: "2026-10-21",
    note: "Photograph of a young Nova Scotia Duck Tolling Retriever by Christopher Woo (originally shared on Flickr as 'Happy Deks', uploaded to Wikimedia Commons on 2007-05-01 by Pharaoh Hound, 1024x768, verified under CC BY 2.0).",
    publisher: "Wikimedia Commons"
  },

"wikimedia-nsdtr-puppy-jarle-nystuen": {
    id: "wikimedia-nsdtr-puppy-jarle-nystuen",
    name: "Wikimedia Commons - Nova Scotia Duck-Tolling Retriever.jpg",
    url: "https://commons.wikimedia.org/wiki/File:Nova_Scotia_Duck-Tolling_Retriever.jpg",
    type: "other",
    publishedOn: "2005-07-25",
    accessedOn: "2026-10-21",
    note: "Photograph of a 12-week-old male Nova Scotia Duck Tolling Retriever puppy by Jarle Nystuen (uploaded on 2005-07-25 by Minto, 800x599, originally tagged Attribution / GFDL 1.2+ and migrated to CC BY-SA 3.0).",
    publisher: "Wikimedia Commons"
  },
"fci-bloodhound-official-standard": {
    id: "fci-bloodhound-official-standard",
    name: "FCI - Bloodhound (Chien de Saint-Hubert) Official Breed Standard No. 84",
    url: "https://www.fci.be/nomenclature/Standards/084g06-en.pdf",
    type: "official_breed_standard",
    publishedOn: "2002-07-12",
    accessedOn: "2026-10-21",
    note: "Official FCI Standard No. 84 (dated 2002-07-12; original valid standard published 2001-03-13). Used for origin (Belgium / Ardennes / Abbey of Saint-Hubert), Group 6 Section 1.1 classification, historical summary (7th-century St. Hubert, 11th-century William the Conqueror and white Talbot hounds), proportions (10:9 body, 1:2 chest, 3:7 head, 1:2 muzzle), temperament, coat, colour, height (ideal 68 cm male / 62 cm female ± 4 cm), weight (46–54 kg male / 40–48 kg female), and disqualifying faults.",
    publisher: "Fédération Cynologique Internationale"
  },

"american-kennel-club-bloodhound": {
    id: "american-kennel-club-bloodhound",
    name: "American Kennel Club - Bloodhound Breed Profile",
    url: "https://www.akc.org/dog-breeds/bloodhound/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Official AKC breed profile used for height (25–27 in male, 23–25 in female), weight (90–110 lbs male, 80–100 lbs female), life expectancy (10–12 years), 1885 AKC recognition, 1805 Thrapston law-enforcement history, 2022 Westminster Best in Show, temperament, vocalisation, exercise, daily ear/wrinkle care, nutrition, and recommended health tests.",
    publisher: "American Kennel Club"
  },

"royal-kennel-club-bloodhound-standard": {
    id: "royal-kennel-club-bloodhound-standard",
    name: "Royal Kennel Club - Bloodhound Breed Standard",
    url: "https://www.royalkennelclub.com/breed-standards/hound/bloodhound/",
    type: "official_breed_standard",
    publishedOn: "2025-04-01",
    accessedOn: "2026-10-21",
    note: "Official UK Kennel Club breed standard (last updated 2025-04-01). Used as a secondary registry reference for appearance, head length (≥30 cm dogs, ≥28 cm bitches), colour, temperament, and UK height (63–69 cm / 58–63 cm) and weight (41–50 kg / 36–45.5 kg) ranges.",
    publisher: "The Royal Kennel Club"
  },

"akc-hound-group-health-testing-requirements": {
    id: "akc-hound-group-health-testing-requirements",
    name: "American Kennel Club - Hound Group Health Testing Requirements",
    url: "https://www.akc.org/breeder-programs/breed-health-testing-requirements/hound-group-health-testing-requirements/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Official AKC Hound Group health-testing requirements listing hip evaluation, elbow evaluation, and cardiac examination for the Bloodhound.",
    publisher: "American Kennel Club"
  },

"american-bloodhound-club-recommended-health-tests": {
    id: "american-bloodhound-club-recommended-health-tests",
    name: "American Bloodhound Club - Recommended Health Tests",
    url: "https://www.americanbloodhoundclub.org/recommended-health-tests/",
    type: "breed_club",
    publishedOn: "2021-08-09",
    accessedOn: "2026-10-21",
    note: "US parent-club health testing guide detailing required CHIC evaluations (OFA hip dysplasia, OFA elbow dysplasia, and OFA cardiac exam by a practitioner, specialist, or cardiologist) and optional evaluations (ACVO eye exam, patellar luxation, PennHIP, and SOD1 degenerative myelopathy DNA test), plus cumulative OFA statistics.",
    publisher: "American Bloodhound Club"
  },

"american-bloodhound-club-ofa-statistics": {
    id: "american-bloodhound-club-ofa-statistics",
    name: "American Bloodhound Club - Bloodhound OFA Statistics",
    url: "https://www.americanbloodhoundclub.org/bloodhound-ofa-statistics/",
    type: "breed_club",
    publishedOn: "2025-02-09",
    accessedOn: "2026-10-21",
    note: "US parent-club OFA-CHIC requirements (including permanent microchip/tattoo identification) and OFA registry evaluation statistics (hips 25.4% abnormal of 2,941; elbows 14.2% abnormal of 1,224; cardiac 0.7% abnormal of 732; patella 2.7% abnormal of 150; thyroid 5.7% abnormal / 19.5% equivocal of 159; DM 6.4% affected / 44.1% carrier / 49.5% normal of 311).",
    publisher: "American Bloodhound Club"
  },

"bloodhound-club-uk-health-information": {
    id: "bloodhound-club-uk-health-information",
    name: "The Bloodhound Club (UK) - Health Information",
    url: "https://www.thebloodhoundclub.com/health-information-1",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "UK breed-club health overview covering leading survey causes of death (cancer and gastric torsion/bloat), atopic dermatitis/eczema, hip and elbow scoring, eyelid/multi-ocular conditions, BVA heart and eye schemes, 10.00% average COI, and the 1 January 2025 reclassification from Category 3 to Category 2.",
    publisher: "The Bloodhound Club (UK)"
  },

"vcahospitals-bloodhound-profile": {
    id: "vcahospitals-bloodhound-profile",
    name: "VCA Animal Hospitals - Bloodhound",
    url: "https://vcahospitals.com/know-your-pet/bloodhound",
    type: "veterinary",
    publishedOn: "2026-09-18",
    accessedOn: "2026-10-21",
    note: "Veterinary breed profile by LifeLearn Inc. / VCA Animal Hospitals covering quick facts (23–27 in, 80–110 lbs), scent-tracking anatomy, temperament, ideal home environment (caution with heat overexertion), and life-stage health considerations (hip/elbow dysplasia, patellar luxation, entropion, ectropion, cherry eye, keratoconjunctivitis sicca, skin-fold infections, congenital heart valve disease, GDV, chronic otitis, and degenerative myelopathy).",
    publisher: "VCA Animal Hospitals"
  },

"petmd-bloodhound-health-care": {
    id: "petmd-bloodhound-health-care",
    name: "PetMD - Bloodhound Dog Breed Health and Care",
    url: "https://www.petmd.com/dog/breeds/bloodhound",
    type: "veterinary",
    publishedOn: "2023-01-23",
    accessedOn: "2026-10-21",
    note: "Veterinary breed guide by Dr. Teresa Kho-Pelfrey, DVM, covering lifespan (10–12 years), hip and elbow dysplasia, otitis externa/media/interna, GDV pathophysiology and prophylactic gastropexy, feeding (2–3 smaller meals daily, avoiding elevated bowls and vigorous exercise around meals), 6-foot fencing, and daily facial-fold wiping.",
    publisher: "PetMD"
  },

"wikimedia-bloodhound-puppy-meagan": {
    id: "wikimedia-bloodhound-puppy-meagan",
    name: "Wikimedia Commons - Bloodhound Puppy.jpg",
    url: "https://commons.wikimedia.org/wiki/File:Bloodhound_Puppy.jpg",
    type: "other",
    publishedOn: "2009-03-07",
    accessedOn: "2026-10-21",
    note: "Photograph of a Bloodhound puppy by Meagan (Flickr account: Jakey Face), captured 2009-03-07 and uploaded to Wikimedia Commons on 2012-09-13 (873x1100, verified under CC BY 2.0).",
    publisher: "Wikimedia Commons"
  },

"wikimedia-bloodhound-black-and-tan-canarian": {
    id: "wikimedia-bloodhound-black-and-tan-canarian",
    name: "Wikimedia Commons - Bloodhound black and tan.JPG",
    url: "https://commons.wikimedia.org/wiki/File:Bloodhound_black_and_tan.JPG",
    type: "other",
    publishedOn: "2013-09-21",
    accessedOn: "2026-10-21",
    note: "Photograph of a male black-and-tan Bloodhound by Canarian, captured 2013-09-21 (per Summary and SONY DSLR-A350 EXIF metadata) and uploaded 2013-10-23 (630x442, licensed under CC BY-SA 3.0).",
    publisher: "Wikimedia Commons"
  },
  "hokkaido-association-of-north-america-about": {
    id: "hokkaido-association-of-north-america-about",
    name: "Hokkaido Association of North America - About Hokkaido",
    url: "https://www.hokkaidoken.org/breed/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "National breed club overview covering temperament, appearance, coat colours, grooming, house manners, vocalization, pica, and potty training.",
    publisher: null
  },
  "hokkaido-association-of-north-america-history": {
    id: "hokkaido-association-of-north-america-history",
    name: "Hokkaido Association of North America - Hokkaido History",
    url: "https://www.hokkaidoken.org/breed/history/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "National breed club history covering Ainu origins, Thomas Blakiston (1869), the 1902 Hakkōda Mountains army rescue, the 1937 Natural Monument designation, DOKENHO (1954), and Otōsan.",
    publisher: null
  },
  "hokkaido-association-of-north-america-health": {
    id: "hokkaido-association-of-north-america-health",
    name: "Hokkaido Association of North America - Hokkaido Health",
    url: "https://www.hokkaidoken.org/breed/health/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "National breed club health statement detailing mandatory and optional pre-breeding clearances, Collie eye anomaly (CEA), heart murmurs, hip dysplasia, idiopathic seizures, anxiety, psychogenic polydipsia, and pica.",
    publisher: null
  },
  "united-kennel-club-hokkaido-breed-standard": {
    id: "united-kennel-club-hokkaido-breed-standard",
    name: "United Kennel Club - Hokkaido (Ainu) Breed Standard",
    url: "https://www.ukcdogs.com/hokkaido-ainu",
    type: "official_breed_standard",
    publishedOn: "2008-01-01",
    accessedOn: "2026-10-19",
    note: "Official UKC breed standard for the Hokkaido (recognized as Ainu in 1996, renamed Hokkaido in 2008; Northern Breed Group).",
    publisher: null
  },
  "hokkaido-cea-nhej1-study": {
    id: "hokkaido-cea-nhej1-study",
    name: "Veterinary Ophthalmology - Collie Eye Anomaly in Hokkaido Dogs: Case Study",
    url: "https://pubmed.ncbi.nlm.nih.gov/22051190/",
    type: "veterinary_reference",
    publishedOn: "2011-09-29",
    accessedOn: "2026-10-19",
    note: "Peer-reviewed study by Mizukami et al. (Vet Ophthalmol 2012;15(2):128-132; DOI: 10.1111/j.1463-5224.2011.00950.x) identifying the intronic 7.8-kb NHEJ1 deletion in Hokkaido dogs.",
    publisher: null
  },
  "hokkaido-cea-mdr1-selection-study": {
    id: "hokkaido-cea-mdr1-selection-study",
    name: "Veterinary Record - Investigation of Parallel and Simultaneous Selection for Collie Eye Anomaly and Ivermectin Toxicosis",
    url: "https://nara-nakayamavet.com/2014Veterinary%20Record.pdf",
    type: "veterinary_reference",
    publishedOn: "2014-08-16",
    accessedOn: "2026-10-19",
    note: "Peer-reviewed study by Mizukami et al. (Vet Rec 2014;175(7):174; DOI: 10.1136/vr.102015) confirming a 0.667 mutant allele frequency for the NHEJ1 Collie eye anomaly deletion (12/18 carriers, 6/18 affected) and 0% frequency for the MDR1/ABCB1 defect in tested Hokkaido dogs.",
    publisher: null
  },
  "fci-grand-anglo-francais-tricolore-standard": {
    id: "fci-grand-anglo-francais-tricolore-standard",
    name: "FCI - Grand Anglo-Français Tricolore Standard No. 322",
    url: "https://www.fci.be/Nomenclature/Standards/322g06-en.pdf",
    type: "official_breed_standard",
    publishedOn: "1996-06-18",
    accessedOn: "2026-10-19",
    note: "The English translation PDF is dated 1996-06-18. It states that the official valid standard was published on 1983-01-27. Used for origin, FCI classification, working purpose, anatomy, coat, colour and height.",
    publisher: null
  },

  "fci-grand-anglo-francais-tricolore-nomenclature": {
    id: "fci-grand-anglo-francais-tricolore-nomenclature",
    name: "FCI - Grand Anglo-Français Tricolore Breed Nomenclature",
    url: "https://www.fci.be/en/nomenclature/GREAT-ANGLO-FRENCH-TRICOLOUR-HOUND-322.html",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Official FCI breed listing confirming country of origin, group, section, definitive recognition date and working-trial classification.",
    publisher: null
  },

  "venerie-grand-anglo-francais-tricolore": {
    id: "venerie-grand-anglo-francais-tricolore",
    name: "Vénerie - Le Grand Anglo-Français Tricolore",
    url: "https://venerie.org/chiens-de-chasse-a-courre/races-le-grand-anglo-francais-tricolore.html",
    type: "other",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "French hunting-dog information resource. Used for the breed's hunting role, working context, general appearance and classification.",
    publisher: null
  },

  "chien-com-grand-anglo-francais-tricolore": {
    id: "chien-com-grand-anglo-francais-tricolore",
    name: "Chien.com - Grand Anglo-Français Tricolore",
    url: "https://www.chien.com/races-de-chiens/grand-anglo-francais-tricolore-448.php",
    type: "other",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Secondary French breed profile consulted for historical background and reported behaviour. Its numerical weight and lifespan claims are not used because reliable breed-standard figures were not found and secondary sources differ.",
    publisher: null
  },

  "wikimedia-grand-anglo-francais-tricolore-alephalpha": {
    id: "wikimedia-grand-anglo-francais-tricolore-alephalpha",
    name: "Wikimedia Commons - Grand anglo francais tricol.jpg",
    url: "https://commons.wikimedia.org/wiki/File:Grand_anglo_francais_tricol.jpg",
    type: "other",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Photograph by Alephalpha, showing a Grand Anglo-Français Tricolore in a pack. Wikimedia Commons offers the work under CC BY-SA 3.0 and GFDL; this record uses CC BY-SA 3.0.",
    publisher: null
  },

  "wikimedia-largeanglofrench-tricolore1-canarian": {
    id: "wikimedia-largeanglofrench-tricolore1-canarian",
    name: "Wikimedia Commons - Largeanglofrench-tricolore1.jpg",
    url: "https://commons.wikimedia.org/wiki/File:Largeanglofrench-tricolore1.jpg",
    type: "other",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Photograph by Canarian, depicting a Great Anglo-French Tricolour Hound. Wikimedia Commons lists CC BY-SA 4.0.",
    publisher: null
  },
  "italian-greyhound-club-of-america-about": {
    id: "italian-greyhound-club-of-america-about",
    name: "Italian Greyhound Club of America - About the Italian Greyhound",
    url: "https://italiangreyhound.org/about-the-italian-greyhound/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "National breed club guide covering temperament, exercise, grooming (daily tooth brushing, 1–3x weekly nail grinding), puppy/adult feeding schedules, house-training, and jump/fracture safety.",
    publisher: null
  },
  "italian-greyhound-club-of-america-history": {
    id: "italian-greyhound-club-of-america-history",
    name: "Italian Greyhound Club of America - Italian Greyhound Breed History",
    url: "https://italiangreyhound.org/about-the-italian-greyhound/italian-greyhound-breed-history/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "National breed club history covering ancient Mediterranean origins, Renaissance nobility and artists, royal owners, 1886 AKC registration, and post-WWII European repopulation.",
    publisher: null
  },
  "italian-greyhound-club-of-america-health": {
    id: "italian-greyhound-club-of-america-health",
    name: "Italian Greyhound Club of America - Italian Greyhound Health",
    url: "https://italiangreyhound.org/about-the-italian-greyhound/health/",
    type: "breed_club",
    publishedOn: "2026-02-16",
    accessedOn: "2026-10-19",
    note: "Official IGCA Health Testing Recommendations (also published at https://www.akc.org/wp-content/uploads/2026/02/Health-Statement-Italian-Greyhound-Club-of-America-2026-Final.pdf).",
    publisher: null
  },
  "the-italian-greyhound-club-uk-breed-standard": {
    id: "the-italian-greyhound-club-uk-breed-standard",
    name: "The Italian Greyhound Club (UK) - Official Breed Standard",
    url: "https://www.theitaliangreyhoundclub.co.uk/standard.php",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Official UK breed standard under the auspices of The Kennel Club specifying ideal height 32–38 cm (12.5–15 in), ideal weight 3.6–4.5 kg (8–10 lbs), and accepted colours.",
    publisher: null
  },
  "uc-davis-vgl-italian-greyhound-health-panel": {
    id: "uc-davis-vgl-italian-greyhound-health-panel",
    name: "UC Davis Veterinary Genetics Laboratory - Italian Greyhound Health Panel (FEH, PCAG, PRA-IG1)",
    url: "https://vgl.ucdavis.edu/panel/italian-greyhound-health-panel",
    type: "veterinary_reference",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "UC Davis VGL documentation for FEH (https://vgl.ucdavis.edu/test/feh-ig), PCAG (https://vgl.ucdavis.edu/test/pcag-susceptibility-ig), and PRA-IG1 (https://vgl.ucdavis.edu/test/pra-susceptibility-ig).",
    publisher: null
  },
  "italian-greyhound-feh-enam-study": {
    id: "italian-greyhound-feh-enam-study",
    name: "Animal Genetics - Simple Recessive Mutation in ENAM Is Associated with Amelogenesis Imperfecta in Italian Greyhounds",
    url: "https://pubmed.ncbi.nlm.nih.gov/23638899/",
    type: "veterinary_reference",
    publishedOn: "2013-05-03",
    accessedOn: "2026-10-19",
    note: "Peer-reviewed study by Gandolfi et al. (Anim Genet 2013;44(5):569-578; DOI: 10.1111/age.12043) identifying the 5-bp deletion in exon 10 of ENAM causing familial enamel hypoplasia (14% affected, 30% carriers).",
    publisher: null
  },
  "italian-greyhound-autoimmune-diversity-study": {
    id: "italian-greyhound-autoimmune-diversity-study",
    name: "Canine Genetics and Epidemiology - A Search for Genetic Diversity Among Italian Greyhounds from Continental Europe and the USA and the Effect of Inbreeding on Susceptibility to Autoimmune Disease",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4628233/",
    type: "veterinary_reference",
    publishedOn: "2015-10-30",
    accessedOn: "2026-10-19",
    note: "Peer-reviewed study by Pedersen et al. (Canine Genet Epidemiol 2015;2:17; DOI: 10.1186/s40575-015-0030-9; PMID: 26526059) analyzing genetic bottlenecks, DLA class I/II homozygosity, and multiple autoimmune diseases in Italian Greyhounds.",
    publisher: null
  },
  "fci-grand-anglo-francais-blanc-et-orange-standard": {
    id: "fci-grand-anglo-francais-blanc-et-orange-standard",
    name: "FCI - Grand Anglo-Français Blanc et Orange Standard No. 324",
    url: "https://www.fci.be/Nomenclature/Standards/324g06-en.pdf",
    type: "official_breed_standard",
    publishedOn: "2023-08-01",
    accessedOn: "2026-10-19",
    note: "The current official valid standard was published on 2023-08-01; the English PDF translation is dated 2023-10-06. Used for origin, classification, working purpose, conformation, coat, colour and height.",
    publisher: null
  },

  "fci-grand-anglo-francais-blanc-et-orange-nomenclature": {
    id: "fci-grand-anglo-francais-blanc-et-orange-nomenclature",
    name: "FCI - Grand Anglo-Français Blanc et Orange Breed Nomenclature",
    url: "https://www.fci.be/en/nomenclature/GREAT-ANGLO-FRENCH-WHITE-ORANGE-HOUND-324.html",
    type: "official_breed_standard",
    publishedOn: "2023-08-01",
    accessedOn: "2026-10-19",
    note: "Official FCI nomenclature confirming country of origin, group, section, working-trial classification and the date of definitive recognition.",
    publisher: null
  },

  "ukc-great-anglo-francais-white-and-orange-hound": {
    id: "ukc-great-anglo-francais-white-and-orange-hound",
    name: "United Kennel Club - Great Anglo-Français White and Orange Hound Breed Standard",
    url: "https://www.ukcdogs.com/great-anglo-francais-white-and-orange-hound",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "UKC standard recognised in 2006. Used as a secondary registry standard for conformation, coat, colour, teeth, movement and working-hound characteristics.",
    publisher: null
  },

  "worldlydogs-grand-anglo-francais-blanc-et-orange": {
    id: "worldlydogs-grand-anglo-francais-blanc-et-orange",
    name: "Worldly Dogs - Grand Anglo-Français Blanc et Orange",
    url: "https://www.worldlydogs.com/grand-anglo-franccedilais-blanc-et-orange.html",
    type: "other",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Secondary breed overview used cautiously for historical context and traditional pack-hunting use. Not used to establish weight, lifespan, health prevalence or quantitative temperament ratings.",
    publisher: null
  },

  "wikimedia-grand-anglo-francais-blanc-et-orange-alephalpha": {
    id: "wikimedia-grand-anglo-francais-blanc-et-orange-alephalpha",
    name: "Wikimedia Commons - 06101298 Grand anglo francais orange.jpg",
    url: "https://commons.wikimedia.org/wiki/File:06101298_Grand_anglo_francais_orange.jpg",
    type: "other",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Original photograph by Alephalpha, dated 2006-10-22. Wikimedia Commons lists CC BY-SA 3.0 and GFDL; this record uses CC BY-SA 3.0.",
    publisher: null
  },
  "fci-tornjak-official-standard": {
    id: "fci-tornjak-official-standard",
    name: "FCI - Tornjak Official Breed Standard No. 355",
    url: "https://www.fci.be/Nomenclature/Standards/355g02-en.pdf",
    type: "official_breed_standard",
    publishedOn: "2017-11-23",
    accessedOn: "2026-10-19",
    note: "The PDF is dated 2017-11-23 and identifies 2017-11-07 as the publication date of the original valid standard. Used for origin, classification, purpose, temperament, conformation, coat, colour and height.",
    publisher: null
  },

  "fci-tornjak-nomenclature": {
    id: "fci-tornjak-nomenclature",
    name: "FCI - Tornjak Breed Nomenclature",
    url: "https://www.fci.be/en/nomenclature/BOSNIAN-AND-HERZEGOVINIAN-CROATIAN-SHEPHERD-DOG-355.html",
    type: "official_breed_standard",
    publishedOn: "2017-11-23",
    accessedOn: "2026-10-19",
    note: "Official FCI listing confirming the breed's country of origin, Group 2 classification, mountain-type subsection, definitive recognition and working-trial status.",
    publisher: null
  },

  "american-kennel-club-tornjak": {
    id: "american-kennel-club-tornjak",
    name: "American Kennel Club - Tornjak Breed Profile",
    url: "https://www.akc.org/dog-breeds/tornjak/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Used for the published approximate weight and lifespan ranges, temperament, grooming, exercise, training, nutrition and general health guidance.",
    publisher: null
  },

  "ukc-tornjak-official-standard": {
    id: "ukc-tornjak-official-standard",
    name: "United Kennel Club - Tornjak Breed Standard",
    url: "https://www.ukcdogs.com/tornjak",
    type: "official_breed_standard",
    publishedOn: "2017-05-01",
    accessedOn: "2026-10-19",
    note: "The UKC standard was revised on 2017-05-01. Used as a secondary registry source for conformation, coat, colour and working-guardian temperament.",
    publisher: null
  },

  "tornjak-club-north-america-breed-profile": {
    id: "tornjak-club-north-america-breed-profile",
    name: "Tornjak Club of North America - About the Breed",
    url: "https://www.tornjakclub.com/pages/about-breed.html",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Breed-club information on historical origin, livestock guardian function, temperament, average size, weight and lifespan.",
    publisher: null
  },

  "tornjak-club-north-america-health-concerns": {
    id: "tornjak-club-north-america-health-concerns",
    name: "Tornjak Club of North America - Health Concerns",
    url: "https://www.tornjakclub.com/pages/articles/health.html",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Breed-club health information discussing gastric dilatation-volvulus, hip dysplasia and elbow dysplasia, along with risk management and responsible breeding.",
    publisher: null
  },

  "tornjak-hip-dysplasia-monitoring-study-2022": {
    id: "tornjak-hip-dysplasia-monitoring-study-2022",
    name: "Results of Radiological Hip Dysplasia Monitoring in Tornjak Breed",
    url: "https://hrcak.srce.hr/en/287653",
    type: "scientific",
    publishedOn: "2022-12-11",
    accessedOn: "2026-10-19",
    note: "Peer-reviewed retrospective study of 735 radiographic hip evaluations from 2001-2016. The screened population's results should not be interpreted as a universal prevalence estimate for every Tornjak.",
    publisher: null
  },

  "tornjak-hip-dysplasia-biomarker-study-2023": {
    id: "tornjak-hip-dysplasia-biomarker-study-2023",
    name: "Breed-Specific Evaluation of Serum Biochemical Markers in Canine Hip Dysplasia Observed in a Tornjak Dog Population",
    url: "https://pubmed.ncbi.nlm.nih.gov/37699541/",
    type: "scientific",
    publishedOn: "2023-11-01",
    accessedOn: "2026-10-19",
    note: "Peer-reviewed study examining biochemical markers in 99 Tornjaks classified by radiographic hip status. It is research into diagnostic markers, not a population-wide disease prevalence survey.",
    publisher: null
  },

  "wikimedia-tornjak-and-puppy-tomasz-wasko": {
    id: "wikimedia-tornjak-and-puppy-tomasz-wasko",
    name: "Wikimedia Commons - Tornjak and puppy.jpg",
    url: "https://commons.wikimedia.org/wiki/File:Tornjak_and_puppy.jpg",
    type: "other",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Photograph by Tomasz Waśko. Wikimedia Commons identifies the file as CC BY-SA 4.0.",
    publisher: null
  },

  "wikimedia-tornjak-female-canarian": {
    id: "wikimedia-tornjak-female-canarian",
    name: "Wikimedia Commons - Bosnian and Herzegovinian - Croatian Shepherd Dog aka Tornjak.jpg",
    url: "https://commons.wikimedia.org/wiki/File:Bosnian_and_Herzegovinian_-_Croatian_Shepherd_Dog_aka_Tornjak.jpg",
    type: "other",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Photograph by Canarian of a female Tornjak. Wikimedia Commons identifies the file as CC BY-SA 3.0.",
    publisher: null
  },
  "skg-schweizer-laufhund": {
    id: "skg-schweizer-laufhund",
    name: "Schweizer Laufhund — Rasseporträt (mit dem Schweizerischen Laufhundeclub SLC)",
    publisher: "Schweizerische Kynologische Gesellschaft (SKG)",
    url: "https://www.skg.ch/schweizer-laufhund/",
    type: "kennel_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Official Swiss Kennel Club breed portrait co-authored with the Schweizerischer Laufhundeclub (SLC), documenting height (47–59 cm), weight (18–23 kg), history, working styles, temperament, exercise, and health/ear care.",
  },
  "schweizerischer-laufhundeclub-zuchtreglement": {
    id: "schweizerischer-laufhundeclub-zuchtreglement",
    name: "Zuchtreglement des Schweizerischen Laufhunde-Clubs (ZR-SLC-2021)",
    publisher: "Schweizerischer Laufhunde-Club (SLC)",
    url: "https://www.laufhund.ch/zucht?file=files/themes/laufhunde/Dokumente/Zucht/Dokumente/re_ccc_2021_d.pdf&cid=334",
    type: "kennel_club",
    commercialUse: "reference_only",
    accessedOn: "2026-10-19",
    note: "Official breeding regulations of the Swiss breed club (approved by the SKG Central Committee on 2021-04-28), covering mandatory breeding inspection (Ankörung) at 15+ months, minimum breeding age (18 months), and conformation/behavioural requirements.",
    publishedOn: null
  },
  "united-kennel-club-swiss-hound-breed-standard": {
    id: "united-kennel-club-swiss-hound-breed-standard",
    name: "Swiss Hound — Official UKC Breed Standard",
    publisher: "United Kennel Club (UKC)",
    url: "https://www.ukcdogs.com/swiss-hound",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    accessedOn: "2026-10-19",
    note: "Official UKC breed standard (Scenthound Group, recognized January 1, 2006), confirming height (19–23 in / 49–59 cm males, 18.5–22.5 in / 47–57 cm females), four varieties, and coat colours.",
    publishedOn: null
  },
  "russian-toy-club-of-america-breed-standard": {
    id: "russian-toy-club-of-america-breed-standard",
    name: "Russian Toy Club of America — Official AKC Breed Standard",
    publisher: "Russian Toy Club of America (RTCA) / American Kennel Club (AKC)",
    url: "https://www.russiantoyclubofamerica.org/breed-standard",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: "2017-07-14",
    accessedOn: "2026-10-19",
    note: "Official AKC breed standard (approved July 14, 2017; effective June 27, 2018), specifying height (8–11 in; disqualifying <7 in or >12 in), weight (up to 6.5 lbs; disqualifying <2 lbs), coat length (1–3 in, full ear fringe after 3 years), and accepted colours."
  },
  "russian-toy-club-of-america-breed-history": {
    id: "russian-toy-club-of-america-breed-history",
    name: "Russian Toy Club of America — Breed History",
    publisher: "Russian Toy Club of America (RTCA)",
    url: "https://www.russiantoyclubofamerica.org/breed-history",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Official parent-club history documenting the 1716–1725 preserved specimen at the Zoological Museum in St. Petersburg, the 1958 long-coated progenitor Chiki, the 1966 standard, and the 1988 unification of the two varieties."
  },
  "russian-toy-club-of-america-faq": {
    id: "russian-toy-club-of-america-faq",
    name: "Russian Toy Club of America — Frequently Asked Questions (FAQ)",
    publisher: "Russian Toy Club of America (RTCA)",
    url: "https://www.russiantoyclubofamerica.org/faq",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Official parent-club FAQ covering appearance, coat colour eye/nose pigment rules, minimal shedding, puppy coat drop between 5 and 12 months, full coat/fringe maturation at 2–3 years, and harness safety."
  },
  "russian-toy-club-of-america-health-and-genetics": {
    id: "russian-toy-club-of-america-health-and-genetics",
    name: "Russian Toy Club of America — Health & Genetics Committee",
    publisher: "Russian Toy Club of America (RTCA)",
    url: "https://www.russiantoyclubofamerica.org/health-and-genetics",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Official RTCA Health & Genetics page listing core OFA screenings (Patellar Luxation, Ophthalmology Exam, Basic Cardiology Exam), optional OFA screenings (Legg-Calvé-Perthes, Hip Dysplasia, Elbow Dysplasia, Paired Serum Bile Acid), and Cornell Biobank sample collection for PRA and Legg-Calvé-Perthes."
  },
  "russian-toy-club-of-america-performance": {
    id: "russian-toy-club-of-america-performance",
    name: "Russian Toy Club of America — Performance & Nose Work",
    publisher: "Russian Toy Club of America (RTCA)",
    url: "https://www.russiantoyclubofamerica.org/performance",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Official RTCA performance overview documenting participation in agility, obedience, rally, lure coursing, trick training, and nose work."
  },
  "united-kennel-club-russkiy-toy-breed-standard": {
    id: "united-kennel-club-russkiy-toy-breed-standard",
    name: "United Kennel Club — Russkiy Toy Breed Standard",
    publisher: "United Kennel Club (UKC)",
    url: "https://www.ukcdogs.com/russkiy-toy",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: "2018-02-01",
    accessedOn: "2026-10-19",
    note: "Official UKC breed standard (recognized 2008, revised February 1, 2018; Companion Dog Group), specifying height 8–11 in (preferred 10 in), weight up to 6 lbs (preferred 5 lbs; eliminating fault <3 lbs or >6 lbs; disqualifying <2 lbs), and all 11 coat colours."
  },
  "fci-bullmastiff-official-standard": {
    id: "fci-bullmastiff-official-standard",
    name: "FCI - Bullmastiff Official Breed Standard No. 157",
    publisher: "Fédération Cynologique Internationale",
    url: "https://www.fci.be/nomenclature/Standards/157g02-en.pdf",
    type: "official_breed_standard",
    publishedOn: "2026-09-08",
    accessedOn: "2026-10-19",
    note:
      "The PDF header is dated 06.10.2026 and the document states that the official valid standard was published on 08.09.2026.",
  },

  "american-kennel-club-bullmastiff": {
    id: "american-kennel-club-bullmastiff",
    name: "American Kennel Club - Bullmastiff",
    publisher: "American Kennel Club",
    url: "https://www.akc.org/dog-breeds/bullmastiff/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:
      "Breed profile covering typical height, weight, life expectancy, temperament, exercise, grooming, and recommended health tests.",
  },

  "royal-kennel-club-bullmastiff-standard": {
    id: "royal-kennel-club-bullmastiff-standard",
    name: "The Royal Kennel Club - Bullmastiff Breed Standard",
    publisher: "The Royal Kennel Club",
    url: "https://www.royalkennelclub.com/breed-standards/working/bullmastiff/",
    type: "official_breed_standard",
    publishedOn: "2025-08-01",
    accessedOn: "2026-10-19",
    note:
      "The standard page states it was last updated on 1 August 2025. Used as a cross-reference for physical characteristics and temperament.",
  },

  "royal-kennel-club-bullmastiff-profile": {
    id: "royal-kennel-club-bullmastiff-profile",
    name: "The Royal Kennel Club - Bullmastiff Breed Profile",
    publisher: "The Royal Kennel Club",
    url: "https://www.royalkennelclub.com/search/breeds-a-to-z/breeds/working/bullmastiff/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:
      "Breed history, coat, home and garden guidance, exercise listing, lifespan category, and recommended pre-breeding hip, elbow, and eye screening.",
  },

  "american-bullmastiff-association-health-statement": {
    id: "american-bullmastiff-association-health-statement",
    name: "American Bullmastiff Association - Health Statement",
    publisher: "American Bullmastiff Association",
    url: "https://cdn.akc.org/Marketplace/Health-Statement/Bullmastiff.pdf",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:
      "The breed-club statement recommends pre-breeding screening for hips, elbows, thyroid, eyes, and heart. No publication date is asserted because a precise date was not established.",
  },

  "american-bullmastiff-association-common-health-conditions": {
    id: "american-bullmastiff-association-common-health-conditions",
    name: "American Bullmastiff Association - Common Diseases and Conditions",
    publisher: "American Bullmastiff Association",
    url: "https://bullmastiff.us/health-rescue/common-diseases-conditions/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:
      "Breed-club educational reference covering cardiac disorders, eye problems, and hypothyroidism. It explicitly advises that the material does not replace veterinary care.",
  },

  "petmd-bullmastiff-health-and-care": {
    id: "petmd-bullmastiff-health-and-care",
    name: "PetMD - Bullmastiff Dog Breed Health and Care",
    publisher: "PetMD",
    url: "https://www.petmd.com/dog/breeds/bullmastiff",
    type: "veterinary",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:
      "Veterinary-authored breed-care article covering typical lifespan, dilated cardiomyopathy, entropion, training, and home considerations. A precise publication date was not recorded.",
  },

  "merck-veterinary-manual-gastric-dilatation-volvulus": {
    id: "merck-veterinary-manual-gastric-dilatation-volvulus",
    name: "Merck Veterinary Manual - Gastric Dilatation and Volvulus in Small Animals",
    publisher: "Merck Veterinary Manual",
    url: "https://www.merckvetmanual.com/digestive-system/surgical-problems-of-the-gastrointestinal-tract-in-small-animals/gastric-dilation-and-volvulus-in-small-animals",
    type: "veterinary_reference",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:
      "Veterinary reference on GDV/bloat, including risk factors, warning signs, and urgent treatment. The source reports a full review in August 2025; no exact publication day is asserted.",
  },

  "wikimedia-bullmastiff-desaix83": {
    id: "wikimedia-bullmastiff-desaix83",
    name: "Wikimedia Commons - Bullmastiff.jpg",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Bullmastiff.jpg",
    type: "other",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:
      "File page identifies creator Desaix83, based on the work of Fausto Moreno; image dimensions 589 × 509 pixels; licensed CC BY-SA 3.0. Attribute the creators, link the license, indicate any additional changes, and observe share-alike requirements for adaptations.",
  },

  "wikimedia-bullmastiff-puppy-davidmiron": {
    id: "wikimedia-bullmastiff-puppy-davidmiron",
    name: "Wikimedia Commons - Bullmastiff puppy.jpg",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Bullmastiff_puppy.jpg",
    type: "other",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:
      "File page identifies Davidmiron as creator and uploader; the page describes a two-month-old puppy and lists original dimensions 1836 × 1224 pixels. Licensed CC BY-SA 3.0; retain attribution and the applicable share-alike terms.",
  },
  "american-kennel-club-great-pyrenees": {
    id: "american-kennel-club-great-pyrenees",
    name: "Great Pyrenees Dog Breed Information",
    publisher: "American Kennel Club (AKC)",
    url: "https://www.akc.org/dog-breeds/great-pyrenees/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:null
  },
  "great-pyrenees-club-of-america-history": {
    id: "great-pyrenees-club-of-america-history",
    name: "History of the Great Pyrenees",
    publisher: "Great Pyrenees Club of America (GPCA)",
    url: "https://greatpyrenees.club/history-of-the-great-pyrenees/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:null
  },
  "great-pyrenees-club-of-america-caring-feeding-training": {
    id: "great-pyrenees-club-of-america-caring-feeding-training",
    name: "Care, Feeding, Training",
    publisher: "Great Pyrenees Club of America (GPCA)",
    url: "https://greatpyrenees.club/caring-feeding-training/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:null
  },
  "great-pyrenees-club-of-america-grooming": {
    id: "great-pyrenees-club-of-america-grooming",
    name: "Grooming the Great Pyrenees",
    publisher: "Great Pyrenees Club of America (GPCA)",
    url: "http://greatpyrenees.club/grooming-the-great-pyrenees/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:null
  },
  "great-pyrenees-club-of-america-obedience-training": {
    id: "great-pyrenees-club-of-america-obedience-training",
    name: "Obedience Training",
    publisher: "Great Pyrenees Club of America (GPCA)",
    url: "https://greatpyrenees.club/obedience-training/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:null
  },
  "great-pyrenees-club-of-america-livestock-guardian-dogs": {
    id: "great-pyrenees-club-of-america-livestock-guardian-dogs",
    name: "Livestock Guardian Dogs",
    publisher: "Great Pyrenees Club of America (GPCA)",
    url: "https://greatpyrenees.club/livestock-guardian-dogs/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:null
  },
  "great-pyrenees-club-of-america-is-this-the-breed-for-you": {
    id: "great-pyrenees-club-of-america-is-this-the-breed-for-you",
    name: "Is this the breed for you?",
    publisher: "Great Pyrenees Club of America (GPCA)",
    url: "https://greatpyrenees.club/is-this-the-breed-for-you/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:null
  },
  "great-pyrenees-club-of-america-general-health-cancer": {
    id: "great-pyrenees-club-of-america-general-health-cancer",
    name: "General Health & Cancer",
    publisher: "Great Pyrenees Club of America (GPCA)",
    url: "http://greatpyrenees.club/general-health-cancer/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:null
  },
  "great-pyrenees-club-of-america-chic-participation": {
    id: "great-pyrenees-club-of-america-chic-participation",
    name: "GPCA Participation (CHIC Testing & DNA Repository)",
    publisher: "Great Pyrenees Club of America (GPCA)",
    url: "http://greatpyrenees.club/gpca-participation/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:null
  },
  "great-pyrenees-club-of-america-degenerative-myelopathy": {
    id: "great-pyrenees-club-of-america-degenerative-myelopathy",
    name: "Degenerative Myelopathy",
    publisher: "Great Pyrenees Club of America (GPCA)",
    url: "https://greatpyrenees.club/degenerative-myelopathy/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:null
  },
  "the-royal-kennel-club-pyrenean-mountain-dog-breed-standard": {
    id: "the-royal-kennel-club-pyrenean-mountain-dog-breed-standard",
    name: "Pyrenean Mountain Dog | Breed Standards",
    publisher: "The Royal Kennel Club (UK)",
    url: "https://www.royalkennelclub.com/breed-standards/pastoral/pyrenean-mountain-dog/",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:null
  },
  "united-kennel-club-great-pyrenees-breed-standard": {
    id: "united-kennel-club-great-pyrenees-breed-standard",
    name: "Breed Standards: Great Pyrenees",
    publisher: "United Kennel Club (UKC)",
    url: "https://www.ukcdogs.com/great-pyrenees",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:null
  },
  "uc-davis-vgl-canine-multifocal-retinopathy-1": {
    id: "uc-davis-vgl-canine-multifocal-retinopathy-1",
    name: "Canine Multifocal Retinopathy 1 (CMR1)",
    publisher: "UC Davis Veterinary Genetics Laboratory",
    url: "https://vgl.ucdavis.edu/test/cmr1",
    type: "veterinary",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:null
  },
  "umn-canine-genetics-lab-great-pyrenees-health-panel": {
    id: "umn-canine-genetics-lab-great-pyrenees-health-panel",
    name: "Great Pyrenees Health Panel (Dwarfism & Neuronal Degeneration)",
    publisher: "University of Minnesota College of Veterinary Medicine Canine Genetics Lab",
    url: "https://vetmed.umn.edu/research/research-labs/canine-genetics-lab/canine-genetics-testing/great-pyrenees-health-panel",
    type: "veterinary",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:null
  },
  "great-pyrenees-sacs-neuronal-degeneration-study": {
    id: "great-pyrenees-sacs-neuronal-degeneration-study",
    name: "A SACS deletion variant in Great Pyrenees dogs causes autosomal recessive neuronal degeneration",
    publisher: "Human Genetics (PubMed: 37758910)",
    url: "https://pubmed.ncbi.nlm.nih.gov/37758910/",
    type: "scientific_publication",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:null
  },
  "great-pyrenees-chondrodysplasia-study": {
    id: "great-pyrenees-chondrodysplasia-study",
    name: "Chondrodysplasia in five Great Pyrenees",
    publisher: "Journal of the American Veterinary Medical Association (PubMed: 7829378)",
    url: "https://pubmed.ncbi.nlm.nih.gov/7829378/",
    type: "scientific_publication",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:null
  },
  "great-pyrenees-glanzmann-thrombasthenia-study": {
    id: "great-pyrenees-glanzmann-thrombasthenia-study",
    name: "Clinical, biochemical, and molecular aspects of Glanzmann's thrombasthenia in humans and dogs",
    publisher: "Veterinary Pathology (PubMed: 11355654)",
    url: "https://pubmed.ncbi.nlm.nih.gov/11355654/",
    type: "scientific_publication",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note:null
  },
  "fci-bucovina-shepherd-dog-official-standard": {
    id: "fci-bucovina-shepherd-dog-official-standard",
    name: "FCI - Romanian Bucovina Shepherd Official Breed Standard No. 357",
    url: "https://www.fci.be/Nomenclature/Standards/357g02-en.pdf",
    type: "official_breed_standard",
    publishedOn: "2023-08-20",
    accessedOn: "2026-10-19",
    note: "The official valid English standard published 20 August 2023. Used for classification, origin, purpose, temperament, measurements, coat and colour.",
    publisher: "Fédération Cynologique Internationale"
  },
  "fci-bucovina-shepherd-dog-nomenclature": {
    id: "fci-bucovina-shepherd-dog-nomenclature",
    name: "FCI - Romanian Bucovina Shepherd Nomenclature",
    url: "https://www.fci.be/en/nomenclature/ROMANIAN-BUCOVINA-SHEPHERD-357.html",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "FCI breed page listing Romanian origin, Group 2, definitive recognition in 2019 and standard publication information.",
    publisher: "Fédération Cynologique Internationale"
  },
  "uc-davis-canine-hip-dysplasia": {
    id: "uc-davis-canine-hip-dysplasia",
    name: "UC Davis School of Veterinary Medicine - Canine Hip Dysplasia",
    url: "https://healthtopics.vetmed.ucdavis.edu/health-topics/canine/hip-dysplasia",
    type: "veterinary",
    publishedOn: "2019-04-24",
    accessedOn: "2026-10-19",
    note: "General veterinary reference for canine hip dysplasia, body condition, radiographic evaluation and screening breeding animals; not Bucovina-specific prevalence.",
    publisher: "University of California, Davis, School of Veterinary Medicine"
  },
  "avma-pet-dental-care": {
    id: "avma-pet-dental-care",
    name: "American Veterinary Medical Association - Pet Dental Care",
    url: "https://avma.org/PetDental",
    type: "veterinary",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "General veterinary guidance for routine dental prevention and veterinary oral checks.",
    publisher: "American Veterinary Medical Association"
  },
  "wikimedia-bucovina-shepherd-canarian-2019": {
    id: "wikimedia-bucovina-shepherd-canarian-2019",
    name: "Wikimedia Commons - Bucovina Shepherd.jpg",
    url: "https://commons.wikimedia.org/wiki/File:Bucovina_Shepherd.jpg",
    type: "other",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Photograph by Canarian. Original file page states CC BY-SA 4.0, captured 7 September 2019, uploaded 9 September 2019, 2343 × 1791 pixels.",
    publisher: "Wikimedia Commons"
  },
  "wikimedia-bucovina-shepherd-canarian-2023": {
    id: "wikimedia-bucovina-shepherd-canarian-2023",
    name: "Wikimedia Commons - Bucovinashepherdciobanesc1.jpg",
    url: "https://commons.wikimedia.org/wiki/File:Bucovinashepherdciobanesc1.jpg",
    type: "other",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Photograph by Canarian. Original file page states CC BY-SA 4.0, captured 26 August 2023, uploaded 27 August 2023, 1713 × 1367 pixels.",
    publisher: "Wikimedia Commons"
  },
  "american-kennel-club-boykin-spaniel-official-standard": {
    id: "american-kennel-club-boykin-spaniel-official-standard",
    name: "American Kennel Club - Official Standard for the Boykin Spaniel",
    publisher: "American Kennel Club",
    url: "https://images.akc.org/pdf/breeds/standards/BoykinSpaniel.pdf",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Official standard used for general appearance, origin, height, coat and working purpose."
  },
  "united-kennel-club-boykin-spaniel-standard": {
    id: "united-kennel-club-boykin-spaniel-standard",
    name: "United Kennel Club - Boykin Spaniel Breed Standard",
    publisher: "United Kennel Club",
    url: "https://www.ukcdogs.com/breed-groups/boykin-spaniel",
    type: "official_breed_standard",
    publishedOn: "2013-07-01",
    accessedOn: "2026-10-19",
    note: "UKC standard revised 1 July 2013; used for coat, colour, height and weight ranges."
  },
  "american-kennel-club-boykin-spaniel": {
    id: "american-kennel-club-boykin-spaniel",
    name: "American Kennel Club - Boykin Spaniel",
    publisher: "American Kennel Club",
    url: "https://www.akc.org/dog-breeds/boykin-spaniel/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Breed overview and grooming information; includes recommended breed-club health tests."
  },
  "boykin-spaniel-club-breed-history": {
    id: "boykin-spaniel-club-breed-history",
    name: "Boykin Spaniel Club and Breeders Association of America - History and Origin",
    publisher: "Boykin Spaniel Club and Breeders Association of America",
    url: "https://boykinspanielclub.us/history-and-origin",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Breed history, South Carolina state-dog recognition and development as a hunting retriever."
  },
  "boykin-spaniel-society-puppy-health-testing": {
    id: "boykin-spaniel-society-puppy-health-testing",
    name: "Boykin Spaniel Society - Puppy Buyer Health Testing Information",
    publisher: "The Boykin Spaniel Society",
    url: "https://www.boykinspaniel.org/puppy-buyers-information.php",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-19",
    note: "Breed-club advice about breeder health clearances, including hips, eyes, heart, patella, EIC, DM and CEA."
  },
"fci-hungarian-wire-haired-pointer-nomenclature": {
    id: "fci-hungarian-wire-haired-pointer-nomenclature",
    name: "FCI Breeds Nomenclature: Drótzörü Magyar Vizsla (239)",
    url: "https://www.fci.be/en/nomenclature/HUNGARIAN-WIRE-HAIRED-POINTER-239.html",
    publisher: "Fédération Cynologique Internationale (FCI)",
    type: "breed_registry",
    commercialUse: "reference_only",
    accessedOn: "2026-10-19",
    publishedOn: null,
    note: "Official FCI nomenclature entry for breed No. 239 (Drótzörü Magyar Vizsla / Hungarian Wire-Haired Pointer)."
  },
  "united-kennel-club-hungarian-wire-haired-vizsla-breed-standard": {
    id: "united-kennel-club-hungarian-wire-haired-vizsla-breed-standard",
    name: "United Kennel Club Official Breed Standard: Hungarian Wire-Haired Vizsla",
    url: "https://www.ukcdogs.com/docs/breeds/hungarian-wiredhaired-vizsla.pdf",
    publisher: "United Kennel Club (UKC)",
    type: "breed_standard",
    commercialUse: "reference_only",
    accessedOn: "2026-10-19",
    publishedOn: null,
    note: "Official UKC Gundog Group breed standard for the Hungarian Wire-Haired Vizsla (revised January 2, 2024)."
  },
  "canadian-kennel-club-wire-haired-vizsla": {
    id: "canadian-kennel-club-wire-haired-vizsla",
    name: "Canadian Kennel Club: Vizsla (Wire-haired) Breed Profile",
    url: "https://www.ckc.ca/en/Choosing-a-Dog/Choosing-a-Breed/Sporting-Dogs/Vizsla-Wire-haired",
    publisher: "Canadian Kennel Club (CKC)",
    type: "kennel_club",
    commercialUse: "reference_only",
    accessedOn: "2026-10-19",
    publishedOn: null,
    note: "CKC breed overview, history, temperament, and grooming summary for the Wire-Haired Vizsla."
  },
  "wirehaired-vizsla-club-of-america-health": {
    id: "wirehaired-vizsla-club-of-america-health",
    name: "Wirehaired Vizsla Club of America: Health",
    url: "https://www.wvca.club/health",
    publisher: "Wirehaired Vizsla Club of America (WVCA)",
    type: "breed_club",
    commercialUse: "reference_only",
    accessedOn: "2026-10-19",
    publishedOn: null,
    note: "AKC parent club health overview covering HUU, hip/elbow dysplasia, eye disorders, SAS, ECLE, allergies, bloat, and CHIC screening."
  },
  "wirehaired-vizsla-club-of-america-health-statement": {
    id: "wirehaired-vizsla-club-of-america-health-statement",
    name: "Wirehaired Vizsla Club of America Official Health Statement",
    url: "https://www.akc.org/wp-content/uploads/2022/02/Wirehaired-Vizsla-health-statement.pdf",
    publisher: "Wirehaired Vizsla Club of America (WVCA) / American Kennel Club",
    type: "breed_club",
    commercialUse: "reference_only",
    accessedOn: "2026-10-19",
    publishedOn: null,
    note: "Official parent-club health statement detailing required CHIC tests (Hips, ACVO Eye, HUU) and breed-specific clinical notes (ECLE, vaccine and anaesthesia sensitivities)."
  },
  "wirehaired-vizsla-club-of-america-health-survey": {
    id: "wirehaired-vizsla-club-of-america-health-survey",
    name: "Wirehaired Vizsla Club of America: Health Survey & OFA Statistics",
    url: "https://www.wvca.club/health-survey",
    publisher: "Wirehaired Vizsla Club of America (WVCA)",
    type: "breed_club",
    commercialUse: "reference_only",
    accessedOn: "2026-10-19",
    publishedOn: null,
    note: "WVCA health survey summary and 2025 OFA testing pass rates for elbows, eyes, and hips."
  },
  "wirehaired-vizsla-club-of-america-code-of-ethics": {
    id: "wirehaired-vizsla-club-of-america-code-of-ethics",
    name: "Wirehaired Vizsla Club of America: Code of Ethics (Amended October 24, 2025)",
    url: "https://www.wvca.club/code-of-ethics",
    publisher: "Wirehaired Vizsla Club of America (WVCA)",
    type: "breed_club",
    commercialUse: "reference_only",
    accessedOn: "2026-10-19",
    publishedOn: null,
    note: "Mandates pre-breeding hip clearance (OFA at >=24 months and/or PennHIP <=0.70 without DJD), annual CAER eye exam, and at least one parent DNA-tested Clear/Normal for ECLE."
  },
  "wirehaired-vizsla-club-of-america-grooming": {
    id: "wirehaired-vizsla-club-of-america-grooming",
    name: "Wirehaired Vizsla Club of America: Grooming Your Wirehaired Vizsla",
    url: "https://www.wvca.club/grooming",
    publisher: "Wirehaired Vizsla Club of America (WVCA)",
    type: "breed_club",
    commercialUse: "reference_only",
    accessedOn: "2026-10-19",
    publishedOn: null,
    note: "Parent-club grooming guide covering brushing tools (Pin Brush, Slicker Brush, Undercoat Rake, Mars Coat King), hand-stripping vs. clipping, and monthly ear, pad, and nail care."
  },
  "wirehaired-vizsla-club-of-america-is-a-wire-right": {
    id: "wirehaired-vizsla-club-of-america-is-a-wire-right",
    name: "Wirehaired Vizsla Club of America: Is a Wire Right For You?",
    url: "https://www.wvca.club/is-a-wire-right",
    publisher: "Wirehaired Vizsla Club of America (WVCA)",
    type: "breed_club",
    commercialUse: "reference_only",
    accessedOn: "2026-10-19",
    publishedOn: null,
    note: "Parent-club suitability and lifestyle guide for prospective Wirehaired Vizsla owners."
  },
  "wirehaired-vizsla-club-of-america-breeder-resources": {
    id: "wirehaired-vizsla-club-of-america-breeder-resources",
    name: "Wirehaired Vizsla Club of America: Breeder Referral & Resources",
    url: "https://www.wvca.club/breeder-resources",
    publisher: "Wirehaired Vizsla Club of America (WVCA)",
    type: "breed_club",
    commercialUse: "reference_only",
    accessedOn: "2026-10-19",
    publishedOn: null,
    note: "Parent-club buyer and breeder checklist covering CHIC health clearances and ECLE testing."
  },
  "wirehaired-vizsla-club-of-america-hunt-training-resources": {
    id: "wirehaired-vizsla-club-of-america-hunt-training-resources",
    name: "Wirehaired Vizsla Club of America: Hunt Training Resources",
    url: "https://www.wvca.club/hunt-training-resources",
    publisher: "Wirehaired Vizsla Club of America (WVCA)",
    type: "breed_club",
    commercialUse: "reference_only",
    accessedOn: "2026-10-19",
    publishedOn: null,
    note: "Parent-club field and versatile hunting dog training guidance."
  },
  "wirehaired-vizsla-club-of-america-club-flyer": {
    id: "wirehaired-vizsla-club-of-america-club-flyer",
    name: "Wirehaired Vizsla Club of America: Meet the Wirehaired Vizsla Flyer",
    url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2025/08/26102938/Wiredhaired-Vizsla-Club-Flyer.pdf",
    publisher: "Wirehaired Vizsla Club of America (WVCA)",
    type: "breed_club",
    commercialUse: "reference_only",
    accessedOn: "2026-10-19",
    publishedOn: null,
    note: "Official WVCA breed flyer specifying daily exercise needs (30-60 minutes of off-leash running daily), temperament, and versatile activities."
  },
  "uc-davis-vgl-hyperuricosuria": {
    id: "uc-davis-vgl-hyperuricosuria",
    name: "UC Davis Veterinary Genetics Laboratory: Hyperuricosuria (HUU) DNA Test",
    url: "https://vgl.ucdavis.edu/test/hyperuricosuria",
    publisher: "UC Davis Veterinary Genetics Laboratory",
    type: "veterinary",
    commercialUse: "reference_only",
    accessedOn: "2026-10-19",
    publishedOn: null,
    note: "Veterinary genetics test documentation for autosomal recessive hyperuricosuria (SLC2A9 c.563G>T) in dogs."
  },
  "canine-hyperuricosuria-slc2a9-study": {
    id: "canine-hyperuricosuria-slc2a9-study",
    name: "Mutations in the SLC2A9 gene cause hyperuricosuria and hyperuricemia in the dog (PLOS Genetics, 2008)",
    url: "https://pubmed.ncbi.nlm.nih.gov/18989453/",
    publisher: "PLOS Genetics / PubMed (PMID: 18989453)",
    type: "scientific_publication",
    commercialUse: "reference_only",
    accessedOn: "2026-10-19",
    publishedOn: null,
    note: "Bannasch et al. (2008) study identifying the exon 5 missense mutation (c.563G>T; p.Cys188Phe) in SLC2A9 responsible for canine hyperuricosuria."
  },
  "canine-ecle-unc93b1-study": {
    id: "canine-ecle-unc93b1-study",
    name: "UNC93B1 variant in dogs with exfoliative cutaneous lupus erythematosus (PLOS Genetics, 2020)",
    url: "https://pubmed.ncbi.nlm.nih.gov/32028618/",
    publisher: "PLOS Genetics / PubMed (PMID: 32028618)",
    type: "scientific_publication",
    commercialUse: "reference_only",
    accessedOn: "2026-10-19",
    publishedOn: null,
    note: "Leeb et al. (2020) study identifying the autosomal recessive UNC93B1 missense variant (XM_540813.6:c.1438C>A; p.Pro480Thr) in German Shorthaired Pointers and Hungarian Wirehaired Vizslas with ECLE."
  },
  "fci-artois-hound-official-standard": {
    id: "fci-artois-hound-official-standard",
    name: "FCI Standard No. 28 — Artois Hound (Chien d'Artois)",
    publisher: "Fédération Cynologique Internationale",
    url: "https://www.fci.be/nomenclature/Standards/028g06-en.pdf",
    type: "official_breed_standard",
    publishedOn: "1996-11-25",
    accessedOn: "2026-10-20",
    note: "The English standard is dated 25 November 1996; the FCI page lists 24 July 1996 as the official valid standard publication date."
  },
  "societe-centrale-canine-artois-hound-standard-comments": {
    id: "societe-centrale-canine-artois-hound-standard-comments",
    name: "Société Centrale Canine — Artois Hound Standard and Commentary",
    publisher: "Société Centrale Canine",
    url: "https://www.centrale-canine.fr/articles/le-chien-dartois-standard-et-commentaires",
    type: "kennel_club",
    publishedOn: "2022-12-05",
    accessedOn: "2026-10-20",
    note: "French kennel-club commentary on selected features of the standard; webpage indicates an update on 4 November 2025."
  },
  "wsava-global-nutrition-guidelines": {
    id: "wsava-global-nutrition-guidelines",
    name: "WSAVA Global Nutrition Guidelines",
    publisher: "World Small Animal Veterinary Association",
    url: "https://wsava.org/global-guidelines/global-nutrition-guidelines/",
    type: "veterinary",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Veterinary guidance supporting individualized nutrition assessment and body-condition monitoring."
  },
  "fci-old-danish-pointing-dog-standard": {
    id: "fci-old-danish-pointing-dog-standard",
    name: "FCI - Old Danish Pointing Dog Official Breed Standard No. 281",
    publisher: "Fédération Cynologique Internationale",
    url: "https://www.fci.be/Nomenclature/Standards/281g07-en.pdf",
    type: "official_breed_standard",
    publishedOn: "1998-01-08",
    accessedOn: "2026-10-20",
    note: "English FCI Standard No. 281; document dated 12 October 1998. The standard states 8 January 1998 as the publication date of the official valid standard."
  },

  "old-danish-pointing-dog-danish-breed-club": {
    id: "old-danish-pointing-dog-danish-breed-club",
    name: "Club for Old Danish Pointing Dogs - Breed Description and History",
    publisher: "Klubben for Gamle Danske Hønsehunde",
    url: "https://www.gdh.dk/side.asp?ID=20084",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Breed club information on working purpose, temperament and historical origin."
  },

  "nordic-kennel-union-old-danish-pointing-dog": {
    id: "nordic-kennel-union-old-danish-pointing-dog",
    name: "Nordic Kennel Union - Old Danish Pointing Dog",
    publisher: "Svenska Kennelklubben / Nordic Kennel Union",
    url: "https://www.skk.se/en/nku-home/nordic-dog-breeds/denmark/old-danish-pointing-dog/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Nordic breed profile covering size, coat, grooming, temperament, exercise and training."
  },

  "united-kennel-club-old-danish-pointing-dog": {
    id: "united-kennel-club-old-danish-pointing-dog",
    name: "United Kennel Club - Old Danish Pointing Dog Breed Standard",
    publisher: "United Kennel Club",
    url: "https://www.ukcdogs.com/breed-groups/old-danish-pointing-dog",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Additional breed standard and historical context."
  },
  "fci-irish-glen-of-imaal-terrier-nomenclature": {
    id: "fci-irish-glen-of-imaal-terrier-nomenclature",
    name: "Fédération Cynologique Internationale (FCI) - Irish Glen of Imaal Terrier (302) Nomenclature",
    publisher: "Fédération Cynologique Internationale (FCI)",
    url: "https://www.fci.be/en/nomenclature/IRISH-GLEN-OF-IMAAL-TERRIER-302.html",
    type: "breed_registry",
    commercialUse: "reference_only",
    publishedOn: "2024-09-20",
    accessedOn: "2026-10-20",
    note: "FCI Nomenclature No. 302; definitive acceptance 1975-09-17, official valid standard dated 2024-09-03 and published 2024-09-20."
  },
  "fci-irish-glen-of-imaal-terrier-standard": {
    id: "fci-irish-glen-of-imaal-terrier-standard",
    name: "FCI-Standard N° 302: Irish Glen of Imaal Terrier",
    publisher: "Fédération Cynologique Internationale (FCI)",
    url: "http://www.fci.be/nomenclature/Standards/302g03-en.pdf",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: "2024-09-20",
    accessedOn: "2026-10-20",
    note: "Official valid FCI Standard No. 302 (dated 2024-09-03, published 2024-09-20)."
  },
  "canadian-kennel-club-glen-of-imaal-terrier-breed-standard": {
    id: "canadian-kennel-club-glen-of-imaal-terrier-breed-standard",
    name: "Canadian Kennel Club Official Breed Standard - Glen of Imaal Terrier",
    publisher: "Canadian Kennel Club (CKC)",
    url: "https://www.ckc.ca/CanadianKennelClub/media/Breed-Standards/Group%204/Glen-of-Imaal-Terrier.pdf",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: "2021-01-01",
    accessedOn: "2026-10-20",
    note: "Recognized by CKC in 2020; official standard effective January 2021."
  },
  "united-kennel-club-glen-of-imaal-terrier-breed-standard": {
    id: "united-kennel-club-glen-of-imaal-terrier-breed-standard",
    name: "United Kennel Club (UKC) Breed Standard - Glen of Imaal Terrier",
    publisher: "United Kennel Club (UKC)",
    url: "https://www.ukcdogs.com/glen-of-imaal-terrier",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: "2017-05-01",
    accessedOn: "2026-10-20",
    note: "Recognized by UKC on 1993-01-01; standard revised 2017-05-01."
  },
  "glen-of-imaal-terrier-club-of-america-characteristics": {
    id: "glen-of-imaal-terrier-club-of-america-characteristics",
    name: "Glen of Imaal Terrier Club of America - Characteristics",
    publisher: "Glen of Imaal Terrier Club of America (GITCA)",
    url: "https://www.glens.org/characteristics.html",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Parent-club overview of temperament, barking, exercise, digging, fencing, and water safety."
  },
  "glen-of-imaal-terrier-club-of-america-chic": {
    id: "glen-of-imaal-terrier-club-of-america-chic",
    name: "Glen of Imaal Terrier Club of America - What is CHIC?",
    publisher: "Glen of Imaal Terrier Club of America (GITCA)",
    url: "http://www.glens.org/chic.html",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Parent-club CHIC health testing protocol (ACVO eye exam, OFA/PennHIP hip evaluation, and crd3 PRA DNA test)."
  },
  "glen-of-imaal-terrier-club-of-america-code-of-ethics": {
    id: "glen-of-imaal-terrier-club-of-america-code-of-ethics",
    name: "Glen of Imaal Terrier Club of America - Code of Ethics",
    publisher: "Glen of Imaal Terrier Club of America (GITCA)",
    url: "https://www.glens.org/code_of_ethics.html",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: "2025-09-06",
    accessedOn: "2026-10-20",
    note: "Parent-club Code of Ethics (effective 2015-01-01, revised 2025-09-06) detailing mandatory pre-breeding hip, elbow, eye, and crd3 testing."
  },
  "glen-of-imaal-terrier-club-of-america-grooming": {
    id: "glen-of-imaal-terrier-club-of-america-grooming",
    name: "Glen of Imaal Terrier Club of America - Grooming",
    publisher: "Glen of Imaal Terrier Club of America (GITCA)",
    url: "https://www.glens.org/grooming.html",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Parent-club coat brushing, stripping, ear-canal plucking, and bathing guide."
  },
  "glen-of-imaal-terrier-club-of-america-earth-dog": {
    id: "glen-of-imaal-terrier-club-of-america-earth-dog",
    name: "Glen of Imaal Terrier Club of America - Earthdog Events with Glen of Imaal Terriers",
    publisher: "Glen of Imaal Terrier Club of America (GITCA)",
    url: "https://www.glens.org/earth_dog.html",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Parent-club guide to historical Irish badger trials (Certificate of Dead Gameness) and modern AWTA and AKC Earthdog tests."
  },
  "american-kennel-club-glen-of-imaal-terrier-history": {
    id: "american-kennel-club-glen-of-imaal-terrier-history",
    name: "American Kennel Club - Glen of Imaal Terrier History: From Irish Farmyards to Modern Homes",
    publisher: "American Kennel Club (AKC)",
    url: "https://www.akc.org/expert-advice/dog-breeds/glen-of-imaal-terrier-history/",
    type: "kennel_club",
    commercialUse: "reference_only",
    publishedOn: "2025-01-08",
    accessedOn: "2026-10-20",
    note: "AKC breed history covering 16th-17th century Flemish/Hessian origins, George Turberville (1576), Teastas Mor badger trials, and turnspit/butter-churn traditions."
  },
  "glen-of-imaal-terrier-association-uk-the-breed": {
    id: "glen-of-imaal-terrier-association-uk-the-breed",
    name: "The Glen of Imaal Terrier Association (GOITA) - The Breed",
    publisher: "The Glen of Imaal Terrier Association (GOITA)",
    url: "https://www.goita.co.uk/the-breed/",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "UK breed club overview and Irish history of the Glen of Imaal Terrier."
  },
  "glen-of-imaal-terrier-association-uk-health-1": {
    id: "glen-of-imaal-terrier-association-uk-health-1",
    name: "The Glen of Imaal Terrier Association (GOITA) - Health 1 (PRA/crd3 and Degenerative Myelopathy)",
    publisher: "The Glen of Imaal Terrier Association (GOITA)",
    url: "https://www.goita.co.uk/glen-health/",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "UK breed club guidance on achondroplasia, stoicism during veterinary exams, PRA/crd3 DNA testing, BVA eye testing, and the UK DM allele-frequency study."
  },
  "glen-of-imaal-terrier-association-uk-health-2": {
    id: "glen-of-imaal-terrier-association-uk-health-2",
    name: "The Glen of Imaal Terrier Association (GOITA) - Health 2 (Allergies, Elbows, Hip Dysplasia, Alopecia)",
    publisher: "The Glen of Imaal Terrier Association (GOITA)",
    url: "https://www.goita.co.uk/general-health/",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "UK breed club guidance on allergies, chondrodystrophic ulnar growth-plate closure, hip dysplasia, and seasonal flank alopecia."
  },
  "glen-of-imaal-terrier-association-uk-grooming": {
    id: "glen-of-imaal-terrier-association-uk-grooming",
    name: "The Glen of Imaal Terrier Association (GOITA) - Grooming",
    publisher: "The Glen of Imaal Terrier Association (GOITA)",
    url: "https://www.goita.co.uk/grooming_general/",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "UK breed club grooming guide covering combing, hand-stripping, ear care, paw pad checks, and coat stages."
  },
  "glen-of-imaal-terrier-association-uk-puppy-exercise": {
    id: "glen-of-imaal-terrier-association-uk-puppy-exercise",
    name: "The Glen of Imaal Terrier Association (GOITA) - Puppy Exercise",
    publisher: "The Glen of Imaal Terrier Association (GOITA)",
    url: "https://www.goita.co.uk/puppies/puppy-exercise/",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "UK breed club puppy exercise guidance for protecting achondroplastic joints and growth plates."
  },
  "glen-of-imaal-terrier-association-uk-senior-glens": {
    id: "glen-of-imaal-terrier-association-uk-senior-glens",
    name: "The Glen of Imaal Terrier Association (GOITA) - Senior Glens",
    publisher: "The Glen of Imaal Terrier Association (GOITA)",
    url: "https://www.goita.co.uk/senior-glens/",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "UK breed club senior care guide covering twice-yearly vet checks, senior nutrition, arthritis, and car ramp use."
  },
  "glen-of-imaal-terrier-association-uk-hot-weather": {
    id: "glen-of-imaal-terrier-association-uk-hot-weather",
    name: "The Glen of Imaal Terrier Association (GOITA) - Hot Weather",
    publisher: "The Glen of Imaal Terrier Association (GOITA)",
    url: "https://www.goita.co.uk/hot-weather/",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "UK breed club heatwave and cooling safety guide."
  },
  "glen-of-imaal-terrier-association-uk-code-of-ethics": {
    id: "glen-of-imaal-terrier-association-uk-code-of-ethics",
    name: "The Glen of Imaal Terrier Association (GOITA) - Code of Ethics",
    publisher: "The Glen of Imaal Terrier Association (GOITA)",
    url: "https://www.goita.co.uk/code-of-ethics/",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "UK breed club Code of Ethics requiring mandatory gPRA/crd3 DNA testing and breeding endorsements on liver-coloured puppies."
  },
  "glen-of-imaal-terrier-crd3-adam9-study": {
    id: "glen-of-imaal-terrier-crd3-adam9-study",
    name: "An ADAM9 mutation in canine cone-rod dystrophy 3 establishes homology with human cone-rod dystrophy 9 (Molecular Vision, 2010)",
    publisher: "Molecular Vision / PubMed (PMID: 20806078; PMCID: PMC2925905)",
    url: "https://pubmed.ncbi.nlm.nih.gov/20806078/",
    type: "scientific_publication",
    commercialUse: "commercial_use",
    publishedOn: "2010-08-11",
    accessedOn: "2026-10-20",
    note: "Goldstein et al. (2010) open-access study (CC BY) identifying the ~23-kb genomic deletion removing exons 15 and 16 of ADAM9 on CFA16 as the cause of crd3 in the Glen of Imaal Terrier."
  },
  "fci-maremma-sheepdog-official-standard": {
    id: "fci-maremma-sheepdog-official-standard",
    name: "FCI - Abruzzes and Maremma Shepherd Dog Official Standard No. 201",
    publisher: "Fédération Cynologique Internationale",
    url: "https://www.fci.be/nomenclature/Standards/201g01-en.pdf",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: "2025-12-03",
    accessedOn: "2026-10-20",
    note: "The PDF is dated 2025-12-16 and states that the current official valid standard was published on 2025-12-03. Used for FCI classification, origin, working purpose, history, temperament, coat, colour, height and weight."
  },

  "fci-maremma-sheepdog-nomenclature": {
    id: "fci-maremma-sheepdog-nomenclature",
    name: "FCI - Abruzzes and Maremma Shepherd Dog Nomenclature",
    publisher: "Fédération Cynologique Internationale",
    url: "https://www.fci.be/en/nomenclature/ABRUZZES-AND-MAREMMA-SHEPHERD-DOG-201.html",
    type: "breed_registry",
    commercialUse: "reference_only",
    publishedOn: "2025-12-03",
    accessedOn: "2026-10-20",
    note: "FCI listing for breed No. 201, confirming Italian origin, classification, definitive recognition and standard publication information."
  },

  "maremma-sheepdog-club-of-america-faq": {
    id: "maremma-sheepdog-club-of-america-faq",
    name: "Maremma Sheepdog Club of America - Breed FAQ",
    publisher: "Maremma Sheepdog Club of America",
    url: "https://maremmaclub.org/msca-maremma-sheepdog-faq/",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Breed-club information on traditional flock-guarding work, attachment to familiar people, coat maintenance and suitability for different households."
  },

  "maremma-sheepdog-club-of-america-health-guidelines": {
    id: "maremma-sheepdog-club-of-america-health-guidelines",
    name: "Maremma Sheepdog Club of America - Code of Ethics and Standards of Care",
    publisher: "Maremma Sheepdog Club of America",
    url: "https://maremmaclub.org/msca-code-of-ethics-enforcement-guidelines/",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Breed-club guidance for responsible breeding, hip and elbow considerations, veterinary evaluation of possible inherited or conformation-related concerns, and health screening."
  },

  "purina-uk-maremma-sheepdog": {
    id: "purina-uk-maremma-sheepdog",
    name: "Purina UK - Maremma Sheepdog Breed Profile",
    publisher: "Purina UK",
    url: "https://www.purina.co.uk/find-a-pet/dog-breeds/maremma-sheepdog",
    type: "other",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Breed profile consulted for reported lifespan, exercise, grooming, training, living environment and potential health concerns. Reported risks should not be treated as population-wide prevalence."
  },

  "zoetis-petcare-maremma-sheepdog": {
    id: "zoetis-petcare-maremma-sheepdog",
    name: "Zoetis Petcare - Maremma Sheepdog Breed Explorer",
    publisher: "Zoetis Petcare",
    url: "https://www.zoetispetcare.com/breed-explorer/breed/maremma-sheepdog",
    type: "veterinary",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Breed profile listing a general lifespan estimate of 10–13 years. The profile notes that breed-level guidance does not replace veterinary advice for an individual dog."
  },

  "wikimedia-maremma-sheepdog-acii-dman": {
    id: "wikimedia-maremma-sheepdog-acii-dman",
    name: "Wikimedia Commons - The Maremma Sheepdog.jpg",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:The_Maremma_Sheepdog.jpg",
    type: "other",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Photograph by ACiiDMaN, dated and uploaded 2015-10-27, 960 × 720 pixels. Wikimedia Commons identifies the file as CC BY-SA 4.0. Attribution is required; adaptations must follow the applicable share-alike terms."
  },

  "wikimedia-maremma-sheepdog-male-canarian": {
    id: "wikimedia-maremma-sheepdog-male-canarian",
    name: "Wikimedia Commons - Maremma Sheepdog male.jpg",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Maremma_Sheepdog_male.jpg",
    type: "other",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Photograph by Canarian, captured 2016-11-13 and uploaded 2016-11-14, 600 × 581 pixels. Wikimedia Commons identifies the file as CC BY-SA 4.0. Attribution is required; adaptations must follow the applicable share-alike terms."
  },
  "fci-pharaoh-hound-standard": {
    id: "fci-pharaoh-hound-standard",
    name: "FCI-Standard N° 248: Pharaoh Hound",
    publisher: "Fédération Cynologique Internationale (FCI)",
    url: "https://www.fci.be/Nomenclature/Standards/248g05-en.pdf",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: "2026-10-06",
    accessedOn: "2026-10-20",
    note: "Official valid FCI Standard No. 248 (dated 2026-09-08, published 2026-10-06; definitive acceptance 1963-08-09)."
  },
  "american-kennel-club-pharaoh-hound-official-standard": {
    id: "american-kennel-club-pharaoh-hound-official-standard",
    name: "American Kennel Club - Official Standard of the Pharaoh Hound",
    publisher: "American Kennel Club (AKC)",
    url: "https://images.akc.org/pdf/breeds/standards/PharaohHound.pdf",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: "1989-04-03",
    accessedOn: "2026-10-20",
    note: "Approved May 10, 1983; effective April 3, 1989."
  },
  "the-royal-kennel-club-pharaoh-hound-breed-standard": {
    id: "the-royal-kennel-club-pharaoh-hound-breed-standard",
    name: "The Royal Kennel Club - Pharaoh Hound Breed Standard",
    publisher: "The Royal Kennel Club",
    url: "https://www.royalkennelclub.com/breed-standards/hound/pharaoh-hound/",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: "2025-04-01",
    accessedOn: "2026-10-20",
    note: "Official UK breed standard for the Pharaoh Hound (last updated 1 April 2025)."
  },
  "united-kennel-club-pharaoh-hound-breed-standard": {
    id: "united-kennel-club-pharaoh-hound-breed-standard",
    name: "United Kennel Club (UKC) Breed Standard - Pharaoh Hound",
    publisher: "United Kennel Club (UKC)",
    url: "https://www.ukcdogs.com/pharaoh-hound",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: "2017-05-01",
    accessedOn: "2026-10-20",
    note: "Recognized by UKC in 1983; official standard revised May 1, 2017."
  },
  "canadian-kennel-club-pharaoh-hound": {
    id: "canadian-kennel-club-pharaoh-hound",
    name: "Canadian Kennel Club (CKC) - Pharaoh Hound",
    publisher: "Canadian Kennel Club (CKC)",
    url: "https://www.ckc.ca/en/Choosing-a-Dog/Choosing-a-Breed/Hounds/Pharaoh-Hound",
    type: "kennel_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "CKC breed profile covering Maltese/Gozo development, temperament, lack of doggy odour, and blushing trait."
  },
  "pharaoh-hound-club-of-america": {
    id: "pharaoh-hound-club-of-america",
    name: "Pharaoh Hound Club of America (PHCA) - About the Breed & Living with Pharaohs",
    publisher: "Pharaoh Hound Club of America (PHCA)",
    url: "https://ph-club.org/",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Official AKC parent club resource covering versatility, activities, health surveys, and indoor family living."
  },
  "pharaoh-hound-club-of-america-club-flier": {
    id: "pharaoh-hound-club-of-america-club-flier",
    name: "Pharaoh Hound Club of America (PHCA) - Official Breed Information Flyer",
    publisher: "Pharaoh Hound Club of America (PHCA) / American Kennel Club",
    url: "http://cdn.akc.org/PharaohHound-club-flier.pdf",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Official parent-club flyer covering personality, indoor living, alert barking, fencing/leash safety, and OFA/CERF health screenings (hips, thyroid, patellas, eyes)."
  },
  "pharaoh-hound-club-of-america-code-of-ethics": {
    id: "pharaoh-hound-club-of-america-code-of-ethics",
    name: "Pharaoh Hound Club of America (PHCA) - Code of Ethics",
    publisher: "Pharaoh Hound Club of America (PHCA)",
    url: "https://ph-club.org/wp-content/uploads/2021/10/2020REVCOEFINALFILLABLE.pdf",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: "2020-06-01",
    accessedOn: "2026-10-20",
    note: "Revised June 2020; mandates pre-breeding CHIC screening, minimum 24-month breeding age, and puppy microchipping prior to placement."
  },
  "kelb-tal-fenek-malta-breed-description": {
    id: "kelb-tal-fenek-malta-breed-description",
    name: "Kelb tal-Fenek - Breed Description (by Peter Gatt)",
    publisher: "Kelb tal-Fenek Malta",
    url: "http://www.kelb-tal-fenek.com/description.htm",
    type: "other",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Maltese breed reference documenting the 1974 National Dog of Malta declaration, 1977 1-Lira coin, puppy blue-to-amber eye transition at 3-4 months, and nighttime hunting with ferrets."
  },
  "kelb-tal-fenek-malta-history": {
    id: "kelb-tal-fenek-malta-history",
    name: "Kelb tal-Fenek - Where does the Name 'Pharaoh Hound' come from? (by Jan Scotland)",
    publisher: "Kelb tal-Fenek Malta",
    url: "http://www.kelb-tal-fenek.com/history.htm",
    type: "other",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Historical documentation citing Fra. G. Fran. Abela (1647), Cecil S. Camilleri (1995), and the 1963/1974/1977 UK and FCI standard history."
  },
  "vca-animal-hospitals-pharaoh-hound": {
    id: "vca-animal-hospitals-pharaoh-hound",
    name: "VCA Animal Hospitals - Pharaoh Hound",
    publisher: "VCA Animal Hospitals / LifeLearn",
    url: "https://vcahospitals.com/know-your-pet/pharaoh-hound",
    type: "veterinary",
    commercialUse: "reference_only",
    publishedOn: "2014-05-30",
    accessedOn: "2026-10-20",
    note: "Veterinary breed overview noting sensitivity to anaesthesia and certain chemicals."
  },
  "canine-genetic-structure-parker-2004": {
    id: "canine-genetic-structure-parker-2004",
    name: "Genetic Structure of the Purebred Domestic Dog (Science, 2004)",
    publisher: "Science / PubMed (PMID: 15155949)",
    url: "https://pubmed.ncbi.nlm.nih.gov/15155949/",
    type: "scientific_publication",
    commercialUse: "reference_only",
    publishedOn: "2004-05-21",
    accessedOn: "2026-10-20",
    note: "Parker et al. (2004) study analyzing 85 domestic dog breeds and demonstrating that the Pharaoh Hound clusters with modern European-derived breeds rather than ancient basal breeds."
  },
"mediterranean-hounds-phylogeography-perini-2023": {
    id: "mediterranean-hounds-phylogeography-perini-2023",
    name: "Perini et al. (2023) - Phylogeographic and population genetic structure of hound-like native dogs of the Mediterranean Basin (Research in Veterinary Science)",
    url: "https://pubmed.ncbi.nlm.nih.gov/36669378/",
    type: "scientific",
    publishedOn: "2023-02-01",
    accessedOn: "2026-10-21",
    note: "Genomic and mitochondrial study (PMID: 36669378) of eight Mediterranean hound breeds demonstrating that the Cirneco dell'Etna and Kelb tal-Fenek cluster with European/Mediterranean warren hounds and are genetically divergent from modern Egyptian street dogs.",
    publisher: "Research in Veterinary Science / PubMed"
  },
  "fci-hovawart-official-standard": {
    id: "fci-hovawart-official-standard",
    name: "FCI Standard No. 190 — Hovawart",
    publisher: "Fédération Cynologique Internationale",
    url: "https://www.fci.be/nomenclature/Standards/190g02-en.pdf",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: "2025-03-28",
    accessedOn: "2026-10-20",
    note: "Official valid FCI breed standard No. 190; used for classification, origin, history, temperament, coat colours, height and conformation."
  },
  "fci-hovawart-nomenclature": {
    id: "fci-hovawart-nomenclature",
    name: "FCI Nomenclature — Hovawart",
    publisher: "Fédération Cynologique Internationale",
    url: "https://www.fci.be/en/nomenclature/HOVAWART-190.html",
    type: "breed_registry",
    commercialUse: "reference_only",
    publishedOn: "2025-03-28",
    accessedOn: "2026-10-20",
    note: "FCI registry entry confirming Hovawart No. 190, German origin, classification, recognition history and the three standard colour varieties."
  },
  "royal-kennel-club-hovawart-standard": {
    id: "royal-kennel-club-hovawart-standard",
    name: "The Royal Kennel Club — Hovawart Breed Standard",
    publisher: "The Royal Kennel Club",
    url: "https://www.royalkennelclub.com/breed-standards/working/hovawart/",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: "2025-04-01",
    accessedOn: "2026-10-20",
    note: "UK breed standard last updated 1 April 2025; cross-checked conformation, temperament and working-dog characteristics."
  },
  "royal-kennel-club-hovawart-profile": {
    id: "royal-kennel-club-hovawart-profile",
    name: "The Royal Kennel Club — Hovawart Breed Profile",
    publisher: "The Royal Kennel Club",
    url: "https://www.royalkennelclub.com/search/breeds-a-to-z/breeds/working/hovawart/",
    type: "kennel_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Breed profile with exercise, grooming, shedding, lifespan, colour and pre-breeding hip-screening guidance."
  },
  "hovawart-club-of-great-britain-breed-introduction": {
    id: "hovawart-club-of-great-britain-breed-introduction",
    name: "Hovawart Club of Great Britain — Breed Introduction",
    publisher: "Hovawart Club of Great Britain",
    url: "https://www.hovawart.org.uk/about/breed-introduction/",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Breed-club account of historical development, guarding purpose, height and weight ranges, temperament and suitable activities."
  },
  "hovawart-club-of-great-britain-health": {
    id: "hovawart-club-of-great-britain-health",
    name: "Hovawart Club of Great Britain — Health",
    publisher: "Hovawart Club of Great Britain",
    url: "https://www.hovawart.org.uk/owning/health/",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Breed-club health guidance covering hip scoring, thyroid testing and degenerative myelopathy DNA testing for breeding dogs."
  },
  "hovawart-club-of-great-britain-care": {
    id: "hovawart-club-of-great-britain-care",
    name: "Hovawart Club of Great Britain — Care and Grooming",
    publisher: "Hovawart Club of Great Britain",
    url: "https://www.hovawart.org.uk/owning/care/",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Breed-club care advice covering grooming, enrichment, controlled exercise during growth, coat checks, handling and dental routines."
  },
  "hovawart-club-of-north-america-faq": {
    id: "hovawart-club-of-north-america-faq",
    name: "Hovawart Club of North America — Frequently Asked Questions",
    publisher: "Hovawart Club of North America",
    url: "https://www.hovawartclub.org/hovawart-faq.html",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Parent-club FAQ on owner experience, working and guarding instincts, space needs, common breed traits and reported hip-health observations."
  },
  "societe-centrale-canine-braque-francais-type-gascogne": {
    id: "societe-centrale-canine-braque-francais-type-gascogne",
    name: "Société Centrale Canine – Braque Français, Type Gascogne",
    url: "https://www.centrale-canine.fr/le-chien-de-race/braque-francais-type-gascogne",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: null,
    publisher: "Société Centrale Canine"
  },
  "united-kennel-club-braque-francais-de-grande-taille-breed-standard": {
    id: "united-kennel-club-braque-francais-de-grande-taille-breed-standard",
    name: "United Kennel Club – Braque Francais de Grande Taille Breed Standard",
    url: "https://www.ukcdogs.com/braque-francais-de-grande-taille",
    type: "official_breed_standard",
    publishedOn: "2006-01-01",
    accessedOn: "2026-10-20",
    note: null,
    publisher: "United Kennel Club"
  },
  "club-du-braque-francais": {
    id: "club-du-braque-francais",
    name: "Club du Braque Français",
    url: "https://www.centrale-canine.fr/club-du-braque-francais",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: null,
    publisher: "Club du Braque Français"
  },

  "american-kennel-club-american-english-coonhound": {
    id: "american-kennel-club-american-english-coonhound",
    name: "American Kennel Club — American English Coonhound",
    publisher: "American Kennel Club",
    url: "https://www.akc.org/dog-breeds/american-english-coonhound/",
    type: "kennel_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Official AKC breed profile; provides height, weight, lifespan, coat and colour information, working history, temperament, grooming, nutrition, and health guidance."
  },
  "american-kennel-club-american-english-coonhound-standard": {
    id: "american-kennel-club-american-english-coonhound-standard",
    name: "Official Standard for the American English Coonhound",
    publisher: "American Kennel Club",
    url: "https://images.akc.org/pdf/rulebooks/RE9ACH.pdf",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "American English Coonhound standard within the AKC Coonhound Rules and Breed Standards publication; used for height, body proportions, coat and colour patterns, head features, temperament and working purpose."
  },
  "united-kennel-club-english-coonhound-standard": {
    id: "united-kennel-club-english-coonhound-standard",
    name: "United Kennel Club — English Coonhound Breed Standard",
    publisher: "United Kennel Club",
    url: "https://www.ukcdogs.com/english-coonhound",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: "2016-01-01",
    accessedOn: "2026-10-20",
    note: "UKC English Coonhound standard, revised 1 January 2016; documents alternate registry height limits, permitted colours, conformation, temperament and the breed's historical development."
  },
  "american-kennel-club-american-english-coonhound-history": {
    id: "american-kennel-club-american-english-coonhound-history",
    name: "American Kennel Club — American English Coonhound History",
    publisher: "American Kennel Club",
    url: "https://www.akc.org/expert-advice/dog-breeds/american-english-coonhound-history/",
    type: "kennel_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Breed-history feature covering English Foxhound ancestry, development in the American colonies and southern United States, naming and colour-pattern distinctions."
  },
  "wikimedia-american-english-coonhound-pets-adviser": {
    id: "wikimedia-american-english-coonhound-pets-adviser",
    name: "Wikimedia Commons — American English Coonhound.jpg",
    publisher: "Wikimedia Commons; original author Pets Adviser",
    url: "https://commons.wikimedia.org/wiki/File:American_English_Coonhound.jpg",
    type: "other",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Original file page identifies Pets Adviser as author, capture date 9 February 2012, Commons upload date 2 July 2013, dimensions 3888 × 2592, and Creative Commons Attribution 2.0 Generic (CC BY 2.0), which allows commercial reuse with attribution."
  },
  "akc-english-setter-profile": {
    id: "akc-english-setter-profile",
    name: "American Kennel Club — English Setter",
    publisher: "American Kennel Club",
    url: "https://www.akc.org/dog-breeds/english-setter/",
    type: "kennel_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Breed profile covering measurements, life expectancy, care, grooming, exercise, nutrition and recommended health tests."
  },

  "english-setter-association-breed-standard": {
    id: "english-setter-association-breed-standard",
    name: "English Setter Association — Breed Standard",
    publisher: "English Setter Association",
    url: "https://englishsetterassociation.org.uk/breed_standard.html",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "The page identifies the standard as published in August and amended in November 2002; the exact publication day is not stated."
  },

  "english-setter-association-health": {
    id: "english-setter-association-health",
    name: "English Setter Association — Health",
    publisher: "English Setter Association",
    url: "https://www.englishsetterassociation.org.uk/health.html",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Breed-health information, screening context and links to the English Setter health survey."
  },

  "pubmed-english-setter-congenital-deafness": {
    id: "pubmed-english-setter-congenital-deafness",
    name: "Congenital sensorineural deafness in English setters in the United Kingdom",
    publisher: "PubMed",
    url: "https://pubmed.ncbi.nlm.nih.gov/31662574/",
    type: "scientific_publication",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Peer-reviewed study abstract reporting BAER screening results from a UK cohort of English Setter puppies."
  },

  "akc-english-setter-history": {
    id: "akc-english-setter-history",
    name: "American Kennel Club — English Setter History",
    publisher: "American Kennel Club",
    url: "https://www.akc.org/expert-advice/dog-breeds/english-setter-history/",
    type: "kennel_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Historical overview of the breed's development and traditional bird-finding function."
  },
  "schweizerische-kynologische-gesellschaft-weisser-schweizer-schaeferhund": {
    id: "schweizerische-kynologische-gesellschaft-weisser-schweizer-schaeferhund",
    name: "Schweizerische Kynologische Gesellschaft (SKG) & Gesellschaft Weisse Schäferhunde Schweiz (GWS) – Weisser Schweizer Schäferhund Rasseportrait",
    url: "https://www.skg.ch/weisser-schweizer-schaeferhund/",
    type: "kennel_club",
    publishedOn: "2024-02-01",
    accessedOn: "2026-10-20",
    note: null,
    publisher: "Schweizerische Kynologische Gesellschaft"
  },
  "the-royal-kennel-club-white-swiss-shepherd-dog-breed-standard": {
    id: "the-royal-kennel-club-white-swiss-shepherd-dog-breed-standard",
    name: "The Royal Kennel Club – White Swiss Shepherd Dog Breed Standard",
    url: "https://www.royalkennelclub.com/about-us/resources/media-centre/2017/july/new-breed-white-swiss-shepherd-dog/",
    type: "official_breed_standard",
    publishedOn: "2017-10-01",
    accessedOn: "2026-10-20",
    note: null,
    publisher: "The Royal Kennel Club"
  },
  "dogs-australia-white-swiss-shepherd-dog-breed-standard": {
    id: "dogs-australia-white-swiss-shepherd-dog-breed-standard",
    name: "Dogs Australia – White Swiss Shepherd Dog Breed Standard",
    url: "https://dogsaustralia.org.au/members/breeds/breed-standards/White-Swiss-Shepherd-Dog",
    type: "official_breed_standard",
    publishedOn: "2015-12-11",
    accessedOn: "2026-10-20",
    note: null,
    publisher: "Dogs Australia"
  },
  "fci-pyrenean-mastiff-nomenclature": {
    id: "fci-pyrenean-mastiff-nomenclature",
    name: "FCI — Pyrenean Mastiff (Mastín del Pirineo)",
    publisher: "Fédération Cynologique Internationale",
    url: "https://fci.be/en/nomenclature/PYRENEAN-MASTIFF-92.html",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: "2002-08-30",
    accessedOn: "2026-10-20",
    note: "Official breed nomenclature. Lists Spain as the country of origin, FCI Group 2 and the standard publication date."
  },

  "uk-kennel-club-pyrenean-mastiff-standard": {
    id: "uk-kennel-club-pyrenean-mastiff-standard",
    name: "The Royal Kennel Club — Pyrenean Mastiff (Imported) Breed Standard",
    publisher: "The Royal Kennel Club",
    url: "https://www.royalkennelclub.com/breed-standards/working/pyrenean-mastiff-imp/",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Breed standard page updated 1 October 2025; covers appearance, temperament, coat, colour and minimum height."
  },

  "akc-pyrenean-mastiff-profile": {
    id: "akc-pyrenean-mastiff-profile",
    name: "American Kennel Club — Pyrenean Mastiff",
    publisher: "American Kennel Club",
    url: "https://www.akc.org/dog-breeds/pyrenean-mastiff/",
    type: "kennel_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Breed profile covering height, weight, life expectancy, temperament, care, grooming, nutrition and recommended health tests."
  },

  "pmaa-pyrenean-mastiff-standard": {
    id: "pmaa-pyrenean-mastiff-standard",
    name: "Pyrenean Mastiff Association of America — Breed Standard",
    publisher: "Pyrenean Mastiff Association of America",
    url: "https://www.pyreneanmastiffassociation.org/pyreneanmastiffstandard",
    type: "breed_standard",
    commercialUse: "reference_only",
    publishedOn: "2023-08-07",
    accessedOn: "2026-10-20",
    note: "Breed standard page states approval on 7 August 2023 and effectiveness on 26 June 2024."
  },

  "pmaa-pyrenean-mastiff-health": {
    id: "pmaa-pyrenean-mastiff-health",
    name: "Pyrenean Mastiff Association of America — Health Concerns",
    publisher: "Pyrenean Mastiff Association of America",
    url: "https://www.pyreneanmastiffassociation.org/healthconditions",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Breed health information including hip data and cardiac concerns. Owner-reported and breed-population data should not be treated as a universal prevalence estimate."
  },

  "petmd-pyrenean-mastiff-health": {
    id: "petmd-pyrenean-mastiff-health",
    name: "PetMD — Pyrenean Mastiff Dog Breed Health and Care",
    publisher: "PetMD",
    url: "https://www.petmd.com/dog/breeds/pyrenean-mastiff",
    type: "veterinary",
    commercialUse: "reference_only",
    publishedOn: "2024-10-18",
    accessedOn: "2026-10-20",
    note: "Veterinary-reviewed breed guide covering lifespan, size, health concerns and care."
  },  "akc-tibetan-terrier-profile": {
    id: "akc-tibetan-terrier-profile",
    name: "American Kennel Club — Tibetan Terrier",
    publisher: "American Kennel Club",
    url: "https://www.akc.org/dog-breeds/tibetan-terrier/",
    type: "kennel_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Breed profile covering characteristics, history, coat colours and recommended health tests."
  },

  "akc-tibetan-terrier-standard": {
    id: "akc-tibetan-terrier-standard",
    name: "American Kennel Club — Official Standard of the Tibetan Terrier",
    publisher: "American Kennel Club",
    url: "https://images.akc.org/pdf/breeds/standards/TibetanTerrier.pdf",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: "1987-03-10",
    accessedOn: "2026-10-20",
    note: "Official standard approved on 10 March 1987; covers general appearance, coat, colours, size and temperament."
  },

  "ttca-tibetan-terrier-health-testing": {
    id: "ttca-tibetan-terrier-health-testing",
    name: "Tibetan Terrier Club of America — Health Testing",
    publisher: "Tibetan Terrier Club of America",
    url: "https://www.ttclubofamerica.org/health/health-testing.html",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Breeding health recommendations including hip and eye evaluation, NCL, PLL, PRA3, RCD4, BAER and patellar testing."
  },

  "ttca-tibetan-terrier-health": {
    id: "ttca-tibetan-terrier-health",
    name: "Tibetan Terrier Club of America — Breed Health",
    publisher: "Tibetan Terrier Club of America",
    url: "https://www.ttclubofamerica.org/health/breed-health.html",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Breed-health overview, longevity information and inherited health concerns."
  },

  "wikimedia-tibetan-terrier-acid-pix": {
    id: "wikimedia-tibetan-terrier-acid-pix",
    name: "Wikimedia Commons — Tibetan Terrier.jpg",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Tibetan_Terrier.jpg",
    type: "other",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Original file page identifies Acid Pix as the creator, records the 15 October 2012 capture date and 13 November 2012 upload date, and states CC BY 2.0 licensing."
  },
  "federation-cynologique-internationale-fci-staffordshire-bull-terrier": {
    id: "federation-cynologique-internationale-fci-staffordshire-bull-terrier",
    name: "Fédération Cynologique Internationale (FCI) – Staffordshire Bull Terrier",
    url: "https://www.fci.be/en/nomenclature/STAFFORDSHIRE-BULL-TERRIER-76.html",
    type: "official_breed_standard",
    publishedOn: "1998-06-24",
    accessedOn: "2026-10-20",
    note: "FCI Standard No. 76 for the Staffordshire Bull Terrier (Group 3, Section 3).",
    publisher: "Fédération Cynologique Internationale"
  },
  "staffordshire-bull-terrier-club-of-america-health-and-chic": {
    id: "staffordshire-bull-terrier-club-of-america-health-and-chic",
    name: "Staffordshire Bull Terrier Club of America – Health and CHIC Requirements",
    url: "https://sbtca.com/health-genetics/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Official national parent club health testing guidelines, CHIC criteria, and hereditary disease statements.",
    publisher: "Staffordshire Bull Terrier Club of America"
  },
  "pegram-2020-staffordshire-bull-terrier-vetcompass-study": {
    id: "pegram-2020-staffordshire-bull-terrier-vetcompass-study",
    name: "Pegram et al. (2020) – Staffordshire Bull Terriers in the UK: Their Disorders and Demographics in VetCompass",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7510130/",
    type: "scientific",
    publishedOn: "2020-09-23",
    accessedOn: "2026-10-20",
    note: "Epidemiological cohort study of 1,304 confirmed Staffordshire Bull Terriers evaluating disorder prevalence, longevity, and behavioral odds in primary-care veterinary clinics.",
    publisher: "Canine Medicine and Genetics"
  },
  "ukc-black-mouth-cur-breed-standard": {
    id: "ukc-black-mouth-cur-breed-standard",
    name: "United Kennel Club — Black Mouth Cur Breed Standard",
    publisher: "United Kennel Club",
    url: "https://www.ukcdogs.com/breeds/black-mouth-cur/",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Official breed standard covering history, working characteristics, appearance, coat colours, and minimum mature height and weight.",
  },

  "continental-kennel-club-black-mouth-cur": {
    id: "continental-kennel-club-black-mouth-cur",
    name: "Continental Kennel Club — Black Mouth Cur",
    publisher: "Continental Kennel Club",
    url: "https://ckcusa.com/breeds/black-mouth-cur/",
    type: "kennel_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Breed information covering alternate names, origin, working roles, reported lifespan, and size ranges.",
  },

  "wikimedia-black-mouth-cur-portrait": {
    id: "wikimedia-black-mouth-cur-portrait",
    name: "Wikimedia Commons — BlackMouthCurPortrait.jpg",
    publisher: "Wikimedia Commons; photograph by Greg Hume",
    url: "https://commons.wikimedia.org/wiki/File:BlackMouthCurPortrait.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Original file page identifies Greg Hume as photographer and lists CC BY-SA 3.0. Commercial reuse requires attribution and compliance with the licence terms.",
  },

  "wikimedia-black-mouth-cur-10": {
    id: "wikimedia-black-mouth-cur-10",
    name: "Wikimedia Commons — Black mouth cur-10.jpg",
    publisher: "Wikimedia Commons; photograph by Greg Hume",
    url: "https://commons.wikimedia.org/wiki/File:Black_mouth_cur-10.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Original file page identifies Greg Hume as photographer and lists CC BY-SA 4.0. Commercial reuse requires attribution and compliance with the licence terms.",
  },

  "wikimedia-ellie-mae-blackmouth-cur": {
    id: "wikimedia-ellie-mae-blackmouth-cur",
    name: "Wikimedia Commons — Ellie Mae the Blackmouth Cur.jpg",
    publisher: "Wikimedia Commons; photograph by Slbaldelli",
    url: "https://commons.wikimedia.org/wiki/File:Ellie_Mae_the_Blackmouth_Cur.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Original file page identifies Slbaldelli as author and lists CC BY-SA 3.0. Commercial reuse requires attribution and compliance with the licence terms.",
  },
  "fci-deutsch-stichelhaar-standard": {
    id: "fci-deutsch-stichelhaar-standard",
    name: "FCI — Deutsch Stichelhaar, Standard No. 232",
    publisher: "Fédération Cynologique Internationale",
    url: "https://www.fci.be/Nomenclature/Standards/232g07-en.pdf",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: "2008-03-13",
    accessedOn: "2026-10-20",
    note:
      "Official English-language breed standard. Covers origin, working purpose, history, appearance, temperament, coat colours and height."
  },
  
  "vdh-deutsch-stichelhaar-profile": {
    id: "vdh-deutsch-stichelhaar-profile",
    name: "VDH — Deutsch Stichelhaar Breed Profile",
    publisher: "Verband für das Deutsche Hundewesen",
    url: "https://welpen.vdh.de/hunderassen/rasselexikon/ergebnis/deutsch-stichelhaar",
    type: "kennel_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note:
      "German kennel organisation profile covering height, appearance, temperament and breed history."
  },
  "commons-deutsch-stichelhaar-alephalpha": {
    id: "commons-deutsch-stichelhaar-alephalpha",
    name: "Wikimedia Commons — 03030288 Deutsch Stichelhaa.jpg",
    publisher: "Wikimedia Commons; photograph by Alephalpha",
    url: "https://commons.wikimedia.org/wiki/File:03030288_Deutsch_Stichelhaa.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note:
      "File page lists Alephalpha as author, capture date 30 March 2003, original dimensions 1200 × 900, and CC BY-SA 3.0. Commercial reuse requires attribution and share-alike compliance."
  },
  "commons-deutsch-stichelhaar-hiska": {
    id: "commons-deutsch-stichelhaar-hiska",
    name: "Wikimedia Commons — Hiska vom Greifenhagen.jpg",
    publisher: "Wikimedia Commons; photograph by Lunsenberg",
    url: "https://commons.wikimedia.org/wiki/File:Hiska_vom_Greifenhagen.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note:
      "File page identifies the pictured dog as Hiska vom Greifenhagen, gives the capture date as 5 January 2009, and lists CC BY-SA 3.0. Commercial reuse requires attribution and share-alike compliance."
  },
  "commons-deutsch-stichelhaar-farkas": {
    id: "commons-deutsch-stichelhaar-farkas",
    name: "Wikimedia Commons — Szálkásszőrű német vizsla.jpg",
    publisher: "Wikimedia Commons; photograph by Farkas Attila",
    url: "https://commons.wikimedia.org/wiki/File:Sz%C3%A1lk%C3%A1ssz%C5%91r%C5%B1_n%C3%A9met_vizsla.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note:
      "File page identifies Farkas Attila as author and records a public-domain dedication by the copyright holder. Original dimensions are 270 × 200."
  },
  "american-kennel-club-slovensky-cuvac": {
    id: "american-kennel-club-slovensky-cuvac",
    name: "American Kennel Club – Slovensky Cuvac",
    url: "https://www.akc.org/dog-breeds/slovensky-cuvac/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Official AKC breed profile and Foundation Stock Service standard criteria (recorded in FSS since February 2009).",
    publisher: "American Kennel Club"
  },
  "klub-chovatelov-slovenskych-cuvacov-zdravie-dbk": {
    id: "klub-chovatelov-slovenskych-cuvacov-zdravie-dbk",
    name: "Klub chovateľov slovenských čuvačov – Dysplázia bedrových kĺbov (DBK)",
    url: "https://www.slovenskycuvac.info/zdravie-a-vyziva/62-dysplazia-bedrovych-klbov",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Official national breed club health regulations governing mandatory pre-breeding hip dysplasia screening (RTG DBK) and breeding limits.",
    publisher: "Klub chovateľov slovenských čuvačov"
  },
  "fci-tyrolean-hound-official-standard": {
    id: "fci-tyrolean-hound-official-standard",
    name: "FCI — Tyrolean Hound Official Breed Standard No. 68",
    publisher: "Fédération Cynologique Internationale (FCI)",
    url: "https://www.fci.be/Nomenclature/Standards/068g06-en.pdf",
    type: "official_breed_standard",
    publishedOn: "1996-06-18",
    accessedOn: "2026-10-20",
    note: "Official English FCI Standard No. 68. The document is dated 18 June 1996 and states that the official valid standard was published on 10 October 1995. Used for origin, history, classification, working purpose, temperament, coat, colours and height.",
  },
  "fci-tyrolean-hound-nomenclature": {
    id: "fci-tyrolean-hound-nomenclature",
    name: "FCI — Tyrolean Hound Breed Nomenclature",
    publisher: "Fédération Cynologique Internationale (FCI)",
    url: "https://fci.be/en/nomenclature/TYROLEAN-HOUND-68.html",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Official FCI breed listing confirming breed number 68, English and international breed names, Austrian origin, classification and recognition information.",
  },
  "klub-tirolerbracke-profile": {
    id: "klub-tirolerbracke-profile",
    name: "Klub Tirolerbracke — Breed Profile",
    publisher: "Klub Tirolerbracke",
    url: "https://www.klubtirolerbracke.at/rasse",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Breed-club information on the Tyrolean Hound's origin, working purpose, appearance and temperament. Used as supporting context alongside the official FCI standard.",
  },
  "tiroler-jaegerverband-tyrolean-hound": {
    id: "tiroler-jaegerverband-tyrolean-hound",
    name: "Tiroler Jägerverband — Hunting Dogs in Tyrol",
    publisher: "Tiroler Jägerverband",
    url: "https://www.tjv.at/wild-jagd/jagen-in-tirol/jagdhunde/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Regional hunting association information on Austrian hound breeds, the Tyrolean Hound's working purpose, height and coat description.",
  },
  "commons-tyrolean-hound-bracke2011-adult": {
    id: "commons-tyrolean-hound-bracke2011-adult",
    name: "Wikimedia Commons — Tyrolean Hound, three-year-old male",
    publisher: "Wikimedia Commons; photograph by Bracke2011",
    url: "https://commons.wikimedia.org/wiki/File:3_Jahre_junger_R%C3%BCde_Farbe_schwarz_rot_oder_rot_mit_schwarzem_Mantel_und_Bracken-Stern_wei%C3%9F_vor_der_Brust%2C_Widerristh%C3%B6he_47_cm%2C_Gewicht_16_kg..jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Original file page identifies Bracke2011 as the author and the image as CC BY-SA 4.0. Commercial reuse is permitted subject to attribution, indication of changes, and applicable share-alike requirements.",
  },
  "commons-tyrolean-hound-bracke2011-tracking": {
    id: "commons-tyrolean-hound-bracke2011-tracking",
    name: "Wikimedia Commons — Tyrolean Hound scent work in winter",
    publisher: "Wikimedia Commons; photograph by Bracke2011",
    url: "https://commons.wikimedia.org/wiki/File:F%C3%A4hrtensuche_-_Nasenarbeit_im_Winter_im_alter_von_9._Mon._%28Foto_2.%29.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Original file page identifies Bracke2011 as the author and the image as CC BY-SA 4.0. Commercial reuse is permitted subject to attribution, indication of changes, and applicable share-alike requirements.",
  },
  "commons-tyrolean-hound-bracke2011-puppy": {
    id: "commons-tyrolean-hound-bracke2011-puppy",
    name: "Wikimedia Commons — Tyrolean Hound puppy",
    publisher: "Wikimedia Commons; photograph by Bracke2011",
    url: "https://commons.wikimedia.org/wiki/File:Welpe_R%C3%BCde_im_alter_von_3.Mon..jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-20",
    note: "Original file page identifies Bracke2011 as the author and the image as CC BY-SA 4.0. Commercial reuse is permitted subject to attribution, indication of changes, and applicable share-alike requirements.",
  },
  "fci-bernese-mountain-dog-standard": {
    id: "fci-bernese-mountain-dog-standard",
    name: "FCI — Bernese Mountain Dog Official Breed Standard No. 45",
    publisher: "Fédération Cynologique Internationale (FCI)",
    url: "https://www.fci.be/nomenclature/Standards/045g02-en.pdf",
    type: "official_breed_standard",
    publishedOn: "2003-05-05",
    accessedOn: "2026-10-21",
    note: "Official English FCI Standard No. 45. The document is dated 5 May 2003 and identifies 25 March 2003 as the publication date of the official valid standard. Used for origin, classification, history, temperament, coat, colour and height.",
  },
  "american-kennel-club-bernese-mountain-dog": {
    id: "american-kennel-club-bernese-mountain-dog",
    name: "American Kennel Club — Bernese Mountain Dog",
    publisher: "American Kennel Club",
    url: "https://www.akc.org/dog-breeds/bernese-mountain-dog/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Breed profile used for published weight and lifespan ranges, grooming and shedding information, exercise guidance, temperament, family suitability and health concerns.",
  },
  "bernese-mountain-dog-club-america-recommended-testing": {
    id: "bernese-mountain-dog-club-america-recommended-testing",
    name: "Bernese Mountain Dog Club of America — Recommended Testing",
    publisher: "Bernese Mountain Dog Club of America",
    url: "https://www.bmdca.org/recommended-testing",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Breed-club health-testing guidance covering hips, elbows, eyes, heart, degenerative myelopathy and an additional test selected from the club's recommendations.",
  },
  "commons-bernese-two-dogs-antonio-kless": {
    id: "commons-bernese-two-dogs-antonio-kless",
    name: "Wikimedia Commons — Two Bernese Mountain Dogs.jpg",
    publisher: "Wikimedia Commons; photograph by Antonio Kless",
    url: "https://commons.wikimedia.org/wiki/File:Two_Bernese_Mountain_Dogs.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "File page identifies Antonio Kless as author, gives the capture date as 5 August 2011 and original dimensions as 3072 × 2304 pixels. Licensed under CC BY-SA 4.0; attribution, change indication and applicable share-alike terms are required.",
  },
  "commons-bernese-female-antonio-kless": {
    id: "commons-bernese-female-antonio-kless",
    name: "Wikimedia Commons — Bernese Mountain Dog Female.jpg",
    publisher: "Wikimedia Commons; photograph by Antonio Kless",
    url: "https://commons.wikimedia.org/wiki/File:Bernese_Mountain_Dog_Female.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "File page identifies Antonio Kless as author, gives the capture date as 4 August 2011 and current original dimensions as 2200 × 2624 pixels. Licensed under CC BY-SA 4.0; attribution, change indication and applicable share-alike terms are required.",
  },
  "commons-bernese-male-and-female-antonio-kless": {
    id: "commons-bernese-male-and-female-antonio-kless",
    name: "Wikimedia Commons — Bernese Mountain Dog Male And Female.jpg",
    publisher: "Wikimedia Commons; photograph by Antonio Kless",
    url: "https://commons.wikimedia.org/wiki/File:Bernese_Mountain_Dog_Male_And_Female.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "File page identifies Antonio Kless as author, gives the capture date as 4 August 2011 and current original dimensions as 3072 × 2049 pixels. Licensed under CC BY-SA 4.0; attribution, change indication and applicable share-alike terms are required.",
  },
  "fci-brittany-spaniel-standard": {
    id: "fci-brittany-spaniel-standard",
    name: "FCI — Brittany Spaniel (Épagneul Breton), Standard No. 95",
    publisher: "Fédération Cynologique Internationale",
    url: "https://www.fci.be/nomenclature/Standards/095g07-en.pdf",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: "2003-05-05",
    accessedOn: "2026-10-21",
    note:
      "FCI Standard No. 95. The PDF is dated 05.05.2003; the FCI nomenclature page lists 25.03.2003 as the date of publication of the official valid standard.",
  },

  "american-kennel-club-brittany-standard": {
    id: "american-kennel-club-brittany-standard",
    name: "American Kennel Club — Official Standard for the Brittany",
    publisher: "American Kennel Club",
    url: "https://images.akc.org/pdf/breeds/standards/Brittany.pdf",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note:
      "Official breed standard. Includes general appearance, size, proportion, coat, and tail details.",
  },

  "american-kennel-club-brittany-profile": {
    id: "american-kennel-club-brittany-profile",
    name: "American Kennel Club — Brittany Breed Profile",
    publisher: "American Kennel Club",
    url: "https://www.akc.org/dog-breeds/brittany/",
    type: "kennel_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note:
      "Breed profile covering typical size, lifespan, exercise, grooming, training, nutrition, and health.",
  },

  "american-brittany-club-health-testing": {
    id: "american-brittany-club-health-testing",
    name: "American Brittany Club — Breeder Recommendations for Health Checks",
    publisher: "American Brittany Club, Inc.",
    url: "https://cdn.akc.org/Marketplace/Health-Statement/Brittany.pdf",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note:
      "Breed-club health-check recommendations include hip evaluation, ophthalmologist examination, and one additional screening selected from cardiac, elbow, patellar, or thyroid evaluation.",
  },

  "wikimedia-brittany-aka-spaniel-rlamorgan": {
    id: "wikimedia-brittany-aka-spaniel-rlamorgan",
    name: "Wikimedia Commons — Aka Brittany Spaniel.jpg",
    publisher: "Wikimedia Commons; photograph by RLAMorgan",
    url: "https://commons.wikimedia.org/wiki/File:Aka_Brittany_Spaniel.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note:
      "Original file page identifies RLAMorgan as author, gives the photograph date as 2017-02-15, and lists CC BY-SA 4.0. Commercial reuse is permitted subject to attribution and share-alike requirements.",
  },

  "wikimedia-brittany-blackticked-canarian": {
    id: "wikimedia-brittany-blackticked-canarian",
    name: "Wikimedia Commons — Brittanyblackticked.jpg",
    publisher: "Wikimedia Commons; photograph by Canarian",
    url: "https://commons.wikimedia.org/wiki/File:Brittanyblackticked.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note:
      "Original file page identifies Canarian as author, lists dimensions of 1477 × 1227 pixels, and specifies CC BY-SA 4.0. The capture date is not established in the consulted metadata. Commercial reuse is permitted subject to attribution and share-alike requirements.",
  },

  "wikimedia-brittany-puppy-veronicanicole88": {
    id: "wikimedia-brittany-puppy-veronicanicole88",
    name: "Wikimedia Commons — Brittany Puppy in Play Pen.jpg",
    publisher: "Wikimedia Commons; photograph by VeronicaNicole88",
    url: "https://commons.wikimedia.org/wiki/File:Brittany_Puppy_in_Play_Pen.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note:
      "Original file page describes a 14-week-old Brittany puppy, identifies VeronicaNicole88 as author, and gives the date as 2015-09-25. The file is licensed under CC BY-SA 4.0; commercial reuse is permitted subject to attribution and share-alike requirements.",
  },
  "fci-great-dane-standard": {
    id: "fci-great-dane-standard",
    name: "FCI — Great Dane (Deutsche Dogge), Standard No. 235",
    publisher: "Fédération Cynologique Internationale",
    url: "https://www.fci.be/Nomenclature/Standards/235g02-en.pdf",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: "2024-08-21",
    accessedOn: "2026-10-21",
    note:
      "FCI Standard No. 235, English version dated 02.10.2024. The document identifies 21.08.2024 as the publication date of the official valid standard.",
  },

  "american-kennel-club-great-dane-profile": {
    id: "american-kennel-club-great-dane-profile",
    name: "American Kennel Club — Great Dane Breed Profile",
    publisher: "American Kennel Club",
    url: "https://www.akc.org/dog-breeds/great-dane/",
    type: "kennel_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note:
      "Breed profile with breed characteristics and recommended health tests from the national breed club.",
  },

  "american-kennel-club-great-dane-lifespan-health": {
    id: "american-kennel-club-great-dane-lifespan-health",
    name: "American Kennel Club — Great Dane Life Span and Health Issues",
    publisher: "American Kennel Club",
    url: "https://www.akc.org/expert-advice/health/great-dane-life-span/",
    type: "kennel_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note:
      "Health article covering typical lifespan, bloat, cardiac disease, joint and bone concerns, thyroid issues, and preventive-care considerations.",
  },

  "great-dane-club-america-health-research": {
    id: "great-dane-club-america-health-research",
    name: "Great Dane Club of America — Health and Research",
    publisher: "Great Dane Club of America",
    url: "https://gdca.org/the-great-dane/health-and-research/",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note:
      "Breed-club health information, including bloat, cardiac and thyroid concerns, eye conditions, and recommended screening for breeding dogs.",
  },

  "great-dane-club-america-owner-guide": {
    id: "great-dane-club-america-owner-guide",
    name: "Great Dane Club of America — Is a Great Dane for You?",
    publisher: "Great Dane Club of America",
    url: "https://gdca.org/the-great-dane/is-a-great-dane-for-you/",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note:
      "Owner suitability and responsible-breeder guidance, including health-screening considerations.",
  },

  "wikimedia-great-dane-blue-canarian": {
    id: "wikimedia-great-dane-blue-canarian",
    name: "Wikimedia Commons — Blue Great Dane.jpg",
    publisher: "Wikimedia Commons; photograph by Canarian",
    url: "https://commons.wikimedia.org/wiki/File:Blue_Great_Dane.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note:
      "The file page identifies Canarian as the creator, gives the image date as 2018-09-08, and lists 1465 × 1408 pixels. Licensed under CC BY-SA 4.0; attribution and share-alike requirements apply.",
  },

  "wikimedia-great-dane-puppies-jvgrandblanc": {
    id: "wikimedia-great-dane-puppies-jvgrandblanc",
    name: "Wikimedia Commons — Great Dane puppies.jpg",
    publisher: "Wikimedia Commons; photograph by Jvgrandblanc",
    url: "https://commons.wikimedia.org/wiki/File:Great_Dane_puppies.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note:
      "The file page identifies Jvgrandblanc as the creator, gives the image date as 2016-04-19, and lists 1632 × 918 pixels. Licensed under CC BY-SA 4.0; attribution and share-alike requirements apply.",
  },

  "wikimedia-great-dane-champion-show-valenzuela400": {
    id: "wikimedia-great-dane-champion-show-valenzuela400",
    name: "Wikimedia Commons — Great Dane Champion Dog Show.jpg",
    publisher: "Wikimedia Commons; photograph by Valenzuela400",
    url: "https://commons.wikimedia.org/wiki/File:Great_Dane_Champion_Dog_Show.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note:
      "The available Commons search result identifies Valenzuela400 and lists 1854 × 3523 pixels. The image was uploaded on 2024-01-22. Licensed under CC BY-SA 4.0; attribution and share-alike requirements apply. The capture date was not recorded.",
  },
  "rassezuchtverein-der-kromfohrlaender":{
    id: "rassezuchtverein-der-kromfohrlaender",
  name: "Rassezuchtverein der Kromfohrländer e.V.",
  url: "https://kromfohrlaender.de/",
  type: "breed_club",
  publishedOn: null,
  accessedOn: "2026-10-21",
  note: "Original German national breed club founded in 1955 by breed founder Ilse Schleifenbaum; establishes health screening regulations (Körung), breeding guidelines, and the University of Kassel DNA blood bank.",
  publisher: "Rassezuchtverein der Kromfohrländer e.V.",
  commercialUse: "reference_only"
  },
  "fci-gascon-saintongeois-standard": {
    id: "fci-gascon-saintongeois-standard",
    name: "FCI Standard No. 21 - Gascon Saintongeois",
    publisher: "Fédération Cynologique Internationale",
    url: "https://fci.be/Nomenclature/Standards/021g06-en.pdf",
    type: "official_breed_standard",
    publishedOn: "2023-08-08",
    accessedOn: "2026-10-21",
    note:
      "Official breed standard covering origin, classification, history, utilization, temperament, conformation, coat, colour, and separate height ranges for the Grand and Petit varieties.",
  },
  "royal-canin-gascon-saintongeois": {
    id: "royal-canin-gascon-saintongeois",
    name: "Royal Canin - Gascon Saintongeois",
    publisher: "Royal Canin",
    url: "https://www.royalcanin.com/fr/dogs/breeds/gascon-saintongeois",
    type: "other",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note:
      "Consumer breed profile used for typical life expectancy and qualitative care context. Lifespan is an estimate, not a guarantee.",
  },
  "wikimedia-gascon-saintongeois-grand-canarian": {
    id: "wikimedia-gascon-saintongeois-grand-canarian",
    name: "Wikimedia Commons - Largegasconsaintonge1.jpg",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Largegasconsaintonge1.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note:
      "Original file page identifies Canarian as author and lists CC BY-SA 4.0. Commercial use is allowed subject to attribution and applicable share-alike terms.",
  },
  "wikimedia-gascon-saintongeois-petit-canarian": {
    id: "wikimedia-gascon-saintongeois-petit-canarian",
    name: "Wikimedia Commons - Petitgasconsaintongeois1.jpg",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Petitgasconsaintongeois1.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note:
      "Original file page identifies Canarian as author and describes the Petit variety. License: CC BY-SA 4.0, with attribution and applicable share-alike terms.",
  },
  "wikimedia-gascon-saintongeois-grand-photo-canarian": {
    id: "wikimedia-gascon-saintongeois-grand-photo-canarian",
    name: "Wikimedia Commons - Isogascognesaintonge.jpg",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Isogascognesaintonge.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note:
      "Original file page identifies Canarian as author and lists CC BY 4.0. Commercial use is allowed with attribution and indication of changes where applicable.",
  },
  "american-kennel-club-coton-de-tulear-official-standard": {
    id: "american-kennel-club-coton-de-tulear-official-standard",
    name: "American Kennel Club - Official Standard of the Coton de Tulear",
    publisher: "American Kennel Club",
    url: "https://images.akc.org/pdf/breeds/standards/CotondeTulear.pdf",
    type: "official_breed_standard",
    publishedOn: "2013-10-01",
    accessedOn: "2026-10-21",
    note: "Official AKC breed standard for the Coton de Tulear (approved September 11, 2013; effective October 1, 2013)."
  },
  "the-royal-kennel-club-coton-de-tulear-breed-standard": {
    id: "the-royal-kennel-club-coton-de-tulear-breed-standard",
    name: "The Royal Kennel Club - Coton De Tulear Breed Standard",
    publisher: "The Royal Kennel Club",
    url: "https://www.thekennelclub.org.uk/breed-standards/toy/coton-de-tulear/",
    type: "official_breed_standard",
    publishedOn: "2026-04-01",
    accessedOn: "2026-10-21",
    note: "Official UK Royal Kennel Club breed standard for the Coton de Tulear in the Toy Group (heights 25–30 cm for dogs, 22–27 cm for bitches)."
  },
  "united-kennel-club-coton-de-tulear-breed-standard": {
    id: "united-kennel-club-coton-de-tulear-breed-standard",
    name: "United Kennel Club - Coton de Tulear Breed Standard",
    publisher: "United Kennel Club",
    url: "https://www.ukcdogs.com/coton-de-tulear",
    type: "official_breed_standard",
    publishedOn: "2007-07-01",
    accessedOn: "2026-10-21",
    note: "Official UKC breed standard for the Coton de Tulear in the Companion Dog Group (recognized January 1, 1996; revised July 1, 2007)."
  },
  "usactc-history-of-the-coton-de-tulear": {
    id: "usactc-history-of-the-coton-de-tulear",
    name: "United States of America Coton de Tulear Club - History of the Coton de Tulear",
    publisher: "United States of America Coton de Tulear Club",
    url: "https://www.usactc.dog/coton/history-of-the-coton-de-tulear/",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Official AKC parent club history, origin in Toliara (formerly Tuléar), temperament, vocalizations, 15–19 year lifespan, and 9–14 month coat-transition grooming guidance."
  },
  "coton-de-tulear-bnat-grm1-study": {
    id: "coton-de-tulear-bnat-grm1-study",
    name: "Journal of Veterinary Internal Medicine - A Truncated Retrotransposon Disrupts the GRM1 Coding Sequence in Coton de Tulear Dogs with Bandera's Neonatal Ataxia",
    publisher: "Journal of Veterinary Internal Medicine",
    url: "https://pubmed.ncbi.nlm.nih.gov/21281350/",
    type: "scientific",
    publishedOn: "2011-01-31",
    accessedOn: "2026-10-21",
    note: "Peer-reviewed study by Zeng et al. (J Vet Intern Med 2011;25(2):267-272, PMID 21281350) identifying the exon 8 GRM1 retrotransposon insertion causing autosomal recessive Bandera's neonatal cerebellar ataxia in Coton de Tulear dogs."
  },
  "coton-de-tulear-cmr2-best1-study": {
    id: "coton-de-tulear-cmr2-best1-study",
    name: "UC Davis Veterinary Genetics Laboratory - Canine Multifocal Retinopathy 2 (CMR2)",
    publisher: "UC Davis Veterinary Genetics Laboratory",
    url: "https://vgl.ucdavis.edu/test/cmr2",
    type: "veterinary",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Veterinary genetics reference documenting the autosomal recessive BEST1 c.482G>A mutation causing Canine Multifocal Retinopathy 2 (CMR2) in the Coton de Tulear (citing Guziewicz et al., 2007, Invest Ophthalmol Vis Sci 48(5):1959-67)."
  },
  "coton-de-tulear-ph-agxt-study": {
    id: "coton-de-tulear-ph-agxt-study",
    name: "Animal Genetics - Primary Hyperoxaluria in Coton de Tulear",
    publisher: "Animal Genetics",
    url: "https://pubmed.ncbi.nlm.nih.gov/22486513/",
    type: "scientific",
    publishedOn: "2011-11-08",
    accessedOn: "2026-10-21",
    note: "Peer-reviewed study by Vidgren et al. (Anim Genet 2012;43(3):356-361, PMID 22486513) identifying the autosomal recessive AGXT c.996G>A (p.Gly102Ser) mutation causing fatal neonatal primary hyperoxaluria in Coton de Tulear puppies."
  },
  "wikimedia-coton-de-tulear-2-canarian": {
    id: "wikimedia-coton-de-tulear-2-canarian",
    name: "Wikimedia Commons - File:Coton de Tulear 2.jpg",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Coton_de_Tulear_2.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: "2020-08-23",
    accessedOn: "2026-10-21",
    note: "Original photograph of an adult Coton de Tulear by Canarian (captured and uploaded 2020-08-23, Sony DSLR-A350), licensed under CC BY-SA 4.0."
  },
  "fci-alpine-dachsbracke-standard": {
    id: "fci-alpine-dachsbracke-standard",
    name: "FCI Standard No. 254 - Alpine Dachsbracke",
    publisher: "Fédération Cynologique Internationale",
    url: "https://www.fci.be/nomenclature/Standards/254g06-en.pdf",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: "1995-10-10",
    accessedOn: "2026-10-21",
    note:
      "Official English translation of FCI Standard No. 254, dated 18 June 1996. The document lists 10 October 1995 as the publication date of the official valid standard. Covers origin, classification, history, utilization, temperament, conformation, coat, colour, and height.",
  },
  "wikimedia-alpine-dachsbracke-1-canarian": {
    id: "wikimedia-alpine-dachsbracke-1-canarian",
    name: "Wikimedia Commons - Alpine Dachsbracke 1.jpg",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Alpine_Dachsbracke_1.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note:
      "Original file page credits Canarian and identifies the photograph as a female black-and-tan Alpine Dachsbracke. Licensed under CC BY-SA 4.0; attribution and applicable share-alike conditions are required.",
  },
  "wikimedia-alpine-dachsbracke-2-canarian": {
    id: "wikimedia-alpine-dachsbracke-2-canarian",
    name: "Wikimedia Commons - Alpine Dachsbracke 2.jpg",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Alpine_Dachsbracke_2.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note:
      "Original file page credits Canarian and identifies the photograph as a male deer-red Alpine Dachsbracke. Licensed under CC BY-SA 4.0; attribution and applicable share-alike conditions are required.",
  },
  "wikimedia-alpine-dachsbracke-4-canarian": {
    id: "wikimedia-alpine-dachsbracke-4-canarian",
    name: "Wikimedia Commons - Alpine Dachsbracke 4.jpg",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Alpine_Dachsbracke_4.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note:
      "Original file page credits Canarian and identifies a deer-red Alpine Dachsbracke. Licensed under CC BY-SA 4.0; attribution and applicable share-alike conditions are required.",
  },
  "fci-parson-russell-terrier-standard": {
    id: "fci-parson-russell-terrier-standard",
    name: "FCI — Parson Russell Terrier Standard No. 339",
    publisher: "Fédération Cynologique Internationale",
    url: "https://www.fci.be/nomenclature/Standards/339g03-en.pdf",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: "2017-08-22",
    accessedOn: "2026-10-21",
    note: "Official valid standard publication date printed in the standard.",
  },
  "akc-parson-russell-terrier-standard": {
    id: "akc-parson-russell-terrier-standard",
    name: "American Kennel Club — Official Parson Russell Terrier Standard",
    publisher: "American Kennel Club",
    url: "https://images.akc.org/pdf/breeds/standards/ParsonRussellTerrier.pdf",
    type: "official_breed_standard",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Official breed standard covering ideal height, weight, coat, colour, and temperament.",
  },
  "american-kennel-club-parson-russell-terrier": {
    id: "american-kennel-club-parson-russell-terrier",
    name: "American Kennel Club — Parson Russell Terrier",
    publisher: "American Kennel Club",
    url: "https://www.akc.org/dog-breeds/parson-russell-terrier/",
    type: "kennel_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Breed overview and health information.",
  },
  "parson-russell-terrier-association-america-guide": {
    id: "parson-russell-terrier-association-america-guide",
    name: "Parson Russell Terrier Association of America — Breed Guide",
    publisher: "Parson Russell Terrier Association of America",
    url: "https://cdn.akc.org/ParsonRussellTerrier-club-flier.pdf",
    type: "breed_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Breed-club guide covering history, exercise, grooming, containment, and health screening.",
  },
  "american-kennel-club-parson-russell-terrier-dna-recommendations": {
    id: "american-kennel-club-parson-russell-terrier-dna-recommendations",
    name: "American Kennel Club — Breed-Specific DNA Testing Recommendations",
    publisher: "American Kennel Club",
    url: "https://www.akc.org/breeder-programs/dna/dna-resource-center/akc-dna-health/breed-specific-dna-testing-recommendations/",
    type: "kennel_club",
    commercialUse: "reference_only",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Includes Parson Russell Terrier-specific inherited-condition testing information.",
  },
  "wikimedia-parson-russell-terrier-sadnes": {
    id: "wikimedia-parson-russell-terrier-sadnes",
    name: "Wikimedia Commons — Parson Russell Terier.jpg",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Parson_Russell_Terier.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "File page identifies Sadnes as creator; licensed under CC BY-SA 3.0. Attribution and share-alike terms apply.",
  },
  "wikimedia-parson-russell-terrier-dwietwarze": {
    id: "wikimedia-parson-russell-terrier-dwietwarze",
    name: "Wikimedia Commons — Parson russell terrier.jpg",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Parson_russell_terrier.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "File page identifies Dwietwarze as creator; licensed under CC BY-SA 3.0. Attribution and share-alike terms apply.",
  },
  "wikimedia-parson-russell-terrier-alephalpha": {
    id: "wikimedia-parson-russell-terrier-alephalpha",
    name: "Wikimedia Commons — 06070946 Parson Russell Terrier white.jpg",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:06070946_Parson_Russell_Terrier_white.jpg",
    type: "other",
    commercialUse: "commercial_use",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "File page identifies Alephalpha as creator; licensed under CC BY-SA 3.0. Attribution and share-alike terms apply.",
  },
  "fci-cirneco-dell-etna-nomenclature": {
    id: "fci-cirneco-dell-etna-nomenclature",
    name: "FCI Breeds Nomenclature - Cirneco dell'Etna (No. 199)",
    url: "https://www.fci.be/en/nomenclature/CIRNECO-DELL-ETNA-199.html",
    type: "official_breed_standard",
    publishedOn: "2017-02-07",
    accessedOn: "2026-10-21",
    note: "Official FCI nomenclature entry for Cirneco dell'Etna (No. 199), documenting definitive recognition on 1956-03-09, official multilingual names, and working-trial status.",
    publisher: "Fédération Cynologique Internationale"
  },
  "enci-cirneco-dell-etna-profile": {
    id: "enci-cirneco-dell-etna-profile",
    name: "Ente Nazionale della Cinofilia Italiana (ENCI) - Cirneco dell'Etna",
    url: "https://www.enci.it/libro-genealogico/razze/cirneco-dell-etna",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Official Italian Kennel Club (ENCI) breed profile, historical monograph (Migneco 1932, Baroness Agata Paternò Castello, Solaro 1939 standard, 1951 Catania club, Ch. Aetnensis Pupa 1952, ferret partnership), and Selected Breeding (Riproduzione Selezionata) requirements including HD A/B hip grading.",
    publisher: "Ente Nazionale della Cinofilia Italiana (ENCI)"
  },
  "sace-enci-cirneco-dell-etna-standard-commentary": {
    id: "sace-enci-cirneco-dell-etna-standard-commentary",
    name: "Società Amatori Cirneco dell'Etna (SACE) / ENCI - Commento allo Standard del Cirneco dell'Etna",
    url: "https://www.enci.it/media/3084/societ%C3%A0-amatori-cirneco-dell-etna-commento-allo-standard.pdf",
    type: "official_breed_standard",
    publishedOn: "2018-04-30",
    accessedOn: "2026-10-21",
    note: "Official technical commentary on the Cirneco dell'Etna standard published by ENCI and the Italian parent club (SACE), detailing anatomical proportions, monochromatic pigmentation, coat texture, seasonal molt patches, and mandatory working trials since 1994.",
    publisher: "Ente Nazionale della Cinofilia Italiana (ENCI) / Società Amatori Cirneco dell'Etna"
  },
  "the-royal-kennel-club-cirneco-dell-etna-standard": {
    id: "the-royal-kennel-club-cirneco-dell-etna-standard",
    name: "The Royal Kennel Club - Cirneco Dell'Etna Breed Standard",
    url: "https://www.thekennelclub.org.uk/breed-standards/hound/cirneco-delletna/",
    type: "official_breed_standard",
    publishedOn: "2025-04-01",
    accessedOn: "2026-10-21",
    note: "Official UK breed standard in the Hound Group specifying ideal height of 46–50 cm (18¼–19½ in) for dogs and 44–48 cm (17¼–19 in) for bitches, 2.5 cm (1 in) body coat, and colour rules.",
    publisher: "The Royal Kennel Club"
  },
  "united-kennel-club-cirneco-dell-etna-standard": {
    id: "united-kennel-club-cirneco-dell-etna-standard",
    name: "United Kennel Club (UKC) - Cirneco dell'Etna Breed Standard",
    url: "https://www.ukcdogs.com/cirneco-dell-etna",
    type: "official_breed_standard",
    publishedOn: "2009-07-01",
    accessedOn: "2026-10-21",
    note: "Official UKC breed standard in the Sighthound & Pariah Dog Group (recognized 2006, revised 2009-07-01).",
    publisher: "United Kennel Club"
  },
  "cirneco-dell-etna-club-of-america-about": {
    id: "cirneco-dell-etna-club-of-america-about",
    name: "Cirneco dell'Etna Club of America - About CdECA",
    url: "https://cirneco.org/about/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Official parent-club history documenting the founding of CdECA on 1997-06-15 in Houston, establishment of the North American studbook in June 1998, ASFA lure-coursing recognition, and full AKC Hound Group recognition on 2015-01-01.",
    publisher: "Cirneco dell'Etna Club of America"
  },
  "cirneco-dell-etna-club-of-america-sport": {
    id: "cirneco-dell-etna-club-of-america-sport",
    name: "Cirneco dell'Etna Club of America - Sport & ENCI Work Standard",
    url: "https://cirneco.org/sport/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Parent-club guide to Cirneco field work, lure coursing, conformation, and the English translation of the ENCI Working Standard and Field Trial Regulations on wild rabbit.",
    publisher: "Cirneco dell'Etna Club of America"
  },
  "cirneco-dell-etna-club-of-america-rescue": {
    id: "cirneco-dell-etna-club-of-america-rescue",
    name: "Cirneco dell'Etna Club of America - Rescue & Adoption Guidance",
    url: "https://cirneco.org/rescue/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Parent-club rescue and owner guidance covering North American population numbers, prey drive toward cats and squirrels, fenced running requirements, off-leash safety, and indoor blanket-burrowing habits.",
    publisher: "Cirneco dell'Etna Club of America"
  },
  "cirneco-genomic-variability-cortellari-2021": {
    id: "cirneco-genomic-variability-cortellari-2021",
    name: "Cortellari et al. (2021) - Genomic variability of Cirneco dell'Etna and the genetic distance with other dog breeds (Italian Journal of Animal Science)",
    url: "https://doi.org/10.1080/1828051X.2021.1873076",
    type: "scientific",
    publishedOn: "2021-02-12",
    accessedOn: "2026-10-21",
    note: "Peer-reviewed genomic study (Ital J Anim Sci 2021;20(1):304–314) analyzing 230K SNP arrays in self-coloured fawn and tan-and-white Cirnechi, establishing genetic closeness to Kelb tal-Fenek and Segugio Italiano, ROH inbreeding (FROH 0.195 vs 0.100), and MITF white-spotting selection.",
    publisher: "Italian Journal of Animal Science (Taylor & Francis)"
  },
  "cirneco-leishmania-immune-response-2024": {
    id: "cirneco-leishmania-immune-response-2024",
    name: "Martínez-Sáez et al. (2024) - Adaptive and innate immune response of Leishmania infantum infection in Cirneco dell'Etna dog breed",
    url: "https://pubmed.ncbi.nlm.nih.gov/39217909/",
    type: "scientific",
    publishedOn: "2024-08-28",
    accessedOn: "2026-10-21",
    note: "Peer-reviewed veterinary immunology study (Comp Immunol Microbiol Infect Dis 2024;113:102232, PMID: 39217909) investigating Th1 and Th17 cytokine responses to endemic Leishmania infantum infection in Cirneco dell'Etna dogs.",
    publisher: "Comparative Immunology, Microbiology and Infectious Diseases / PubMed"
  },
  "wikimedia-cirneco-maschio-3-anni-vignazzi-2022": {
    id: "wikimedia-cirneco-maschio-3-anni-vignazzi-2022",
    name: "Wikimedia Commons - File:CIRNECO DELL'ETNA, MASCHIO DI 3 ANNI.jpg",
    url: "https://commons.wikimedia.org/wiki/File:CIRNECO_DELL%27ETNA,_MASCHIO_DI_3_ANNI.jpg",
    type: "other",
    publishedOn: "2023-09-05",
    accessedOn: "2026-10-21",
    note: "Photograph by Vignazzi (captured 2022-09-05, uploaded 2023-09-05, 1044x1600 px) showing a three-year-old male Cirneco dell'Etna (Giotto dei Vignazzi) in Sicily under CC BY-SA 4.0.",
    publisher: "Wikimedia Commons"
  },
  "wikimedia-cirneco-cucciola-2-mesi-vignazzi-2021": {
    id: "wikimedia-cirneco-cucciola-2-mesi-vignazzi-2021",
    name: "Wikimedia Commons - File:CIRNECO DELL'ETNA., CUCCIOLA DI 2 MESI.jpg",
    url: "https://commons.wikimedia.org/wiki/File:CIRNECO_DELL%27ETNA.,_CUCCIOLA_DI_2_MESI.jpg",
    type: "other",
    publishedOn: "2023-09-05",
    accessedOn: "2026-10-21",
    note: "EXIF-verified Canon EOS 6D photograph by Vignazzi (captured 2021-10-04, uploaded 2023-09-05, 5002x3283 px) showing a two-month-old female Cirneco dell'Etna puppy (Bella dei Vignazzi) under CC BY-SA 4.0.",
    publisher: "Wikimedia Commons"
  },
  "fci-german-shepherd-dog-standard": {
    id: "fci-german-shepherd-dog-standard",
    name: "FCI - German Shepherd Dog Official Standard No. 166",
    publisher: "Fédération Cynologique Internationale",
    url: "https://fci.be/Nomenclature/Standards/166g01-en.pdf",
    type: "official_breed_standard",
    publishedOn: "2010-12-23",
    accessedOn: "2026-10-21",
    note: "Official standard covering origin, classification, history, character, measurements, coat, and colours.",
  },
  "american-kennel-club-german-shepherd-dog": {
    id: "american-kennel-club-german-shepherd-dog",
    name: "American Kennel Club - German Shepherd Dog",
    publisher: "American Kennel Club",
    url: "https://www.akc.org/dog-breeds/german-shepherd-dog/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Breed profile and general exercise, grooming, and training information.",
  },
  "vcahospitals-german-shepherd": {
    id: "vcahospitals-german-shepherd",
    name: "VCA Animal Hospitals - German Shepherd",
    publisher: "VCA Animal Hospitals",
    url: "https://vcahospitals.com/know-your-pet/german-shepherd",
    type: "veterinary_reference",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Veterinary breed overview, grooming, home environment, and reported health concerns.",
  },
  "german-shepherd-dog-club-of-america-health-genetics": {
    id: "german-shepherd-dog-club-of-america-health-genetics",
    name: "German Shepherd Dog Club of America - Health and Genetics",
    publisher: "German Shepherd Dog Club of America",
    url: "https://gsdca.org/health-genetics/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Breed-club health information and CHIC screening requirements.",
  },
  "wikimedia-german-shepherd-dogs-7desks": {
    id: "wikimedia-german-shepherd-dogs-7desks",
    name: "Wikimedia Commons - German shepherd dogs.jpg",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:German_shepherd_dogs.jpg",
    type: "other",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Original file page identifies creator 7desks and CC BY-SA 4.0 licensing.",
  },
  "wikimedia-german-shepherd-dog-alsatian-4-canarian": {
    id: "wikimedia-german-shepherd-dog-alsatian-4-canarian",
    name: "Wikimedia Commons - German Shepherd Dog Alsatian 4.jpg",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:German_Shepherd_Dog_Alsatian_4.jpg",
    type: "other",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Original file page identifies creator Canarian and CC BY-SA 4.0 licensing.",
  },
  "wikimedia-german-shepherd-dog-alsatian-3-canarian": {
    id: "wikimedia-german-shepherd-dog-alsatian-3-canarian",
    name: "Wikimedia Commons - German Shepherd Dog Alsatian 3.jpg",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:German_Shepherd_Dog_Alsatian_3.jpg",
    type: "other",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Original file page identifies creator Canarian and CC BY-SA 4.0 licensing.",
  },
  "fci-drentsche-patrijshond-standard": {
    id: "fci-drentsche-patrijshond-standard",
    name: "FCI - Drentsche Patrijshond Official Standard No. 224",
    publisher: "Fédération Cynologique Internationale",
    url: "https://www.fci.be/nomenclature/Standards/224g07-en.pdf",
    type: "official_breed_standard",
    publishedOn: "2016-04-04",
    accessedOn: "2026-10-21",
    note: "Official standard covering history, classification, temperament, appearance, coat, colour, height, and weight.",
  },
  "drentsche-patrijshond-club-health-screening": {
    id: "drentsche-patrijshond-club-health-screening",
    name: "Vereniging De Drentsche Patrijshond - Health Examinations",
    publisher: "Vereniging De Drentsche Patrijshond",
    url: "https://drentschepatrijshond.com/fokkerij/fokken-de-basis/gezondheidsonderzoek/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Breed-club information on eye (ECVO), hip dysplasia, and elbow dysplasia examinations in its breeding-health programme.",
  },
  "united-kennel-club-drentsche-patrijshond-standard": {
    id: "united-kennel-club-drentsche-patrijshond-standard",
    name: "United Kennel Club - Drentsche Patrijshond Breed Standard",
    publisher: "United Kennel Club",
    url: "https://www.ukcdogs.com/breed-groups/drentsche-patrijshond",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Additional breed-standard reference for history, coat, colour, and size.",
  },
  "wikimedia-drentsche-patrijshond-stefanie-joksch": {
    id: "wikimedia-drentsche-patrijshond-stefanie-joksch",
    name: "Wikimedia Commons - Drentsche Patrijshond.jpg",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Drentsche_Patrijshond.jpg",
    type: "other",
    publishedOn: "2019-11-09",
    accessedOn: "2026-10-21",
    note: "Original file page credits Stefanie Joksch and states CC BY-SA 4.0. Original dimensions 6016 × 4016 pixels.",
  },
  "wikimedia-drentsche-patrijshond-riga-tomasina": {
    id: "wikimedia-drentsche-patrijshond-riga-tomasina",
    name: "Wikimedia Commons - Drentsche Patrijshond in Riga 1.JPG",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Drentsche_Patrijshond_in_Riga_1.JPG",
    type: "other",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Original file page credits Томасина and states CC BY-SA 3.0. Original dimensions 1501 × 1258 pixels.",
  },
  "wikimedia-drentsche-patrijshond-bowi-dutchid": {
    id: "wikimedia-drentsche-patrijshond-bowi-dutchid",
    name: "Wikimedia Commons - Drentsche Patrijshond Bowi the Gloucester.jpg",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Drentsche_Patrijshond_Bowi_the_Gloucester.jpg",
    type: "other",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Original file page credits DutchID and offers CC BY-SA 3.0. Original dimensions 2113 × 1616 pixels.",
  },
  "fci-stabijhoun-standard": {
    id: "fci-stabijhoun-standard",
    name: "FCI Standard No. 222 — Stabijhoun",
    publisher: "Fédération Cynologique Internationale",
    url: "https://www.fci.be/nomenclature/Standards/222g07-en.pdf",
    type: "official_breed_standard",
    publishedOn: "2014-11-03",
    accessedOn: "2026-10-21",
    note: "Official valid standard; English-language standard dated 3 November 2014.",
  },
  "american-kennel-club-stabyhoun": {
    id: "american-kennel-club-stabyhoun",
    name: "American Kennel Club — Stabyhoun",
    publisher: "American Kennel Club",
    url: "https://www.akc.org/dog-breeds/stabyhoun/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Breed profile, history, characteristics and reported health concerns.",
  },
  "stabyhoun-association-of-america-about-breed": {
    id: "stabyhoun-association-of-america-about-breed",
    name: "Ameri-Can Stabyhoun Association — About the Breed",
    publisher: "Ameri-Can Stabyhoun Association",
    url: "https://stabyhouns.org/about-the-breed-2/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Breed history, temperament, grooming, training and activity guidance.",
  },
  "united-kennel-club-stabyhoun-standard": {
    id: "united-kennel-club-stabyhoun-standard",
    name: "United Kennel Club — Stabyhoun",
    publisher: "United Kennel Club",
    url: "https://www.ukcdogs.com/stabyhoun",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Breed standard, history and traditional work.",
  },
  "licg-stabijhoun": {
    id: "licg-stabijhoun",
    name: "LICG — Stabijhoun",
    publisher: "LICG",
    url: "https://www.licg.nl/honden/stabijhoun/",
    type: "other",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Dutch pet-care reference covering appearance, size, weight, coat and approximate average lifespan.",
  },
  "wikimedia-stabyhoun-werkpaard": {
    id: "wikimedia-stabyhoun-werkpaard",
    name: "Stabijhoun.JPG — Wikimedia Commons",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Stabijhoun.JPG",
    type: "other",
    publishedOn: "2013-07-24",
    accessedOn: "2026-10-21",
    note: "Creator and uploader: Werkpaard. File page states CC BY-SA 3.0; attribution and share-alike terms apply.",
  },
  "wikimedia-stabyhoun-mjk23": {
    id: "wikimedia-stabyhoun-mjk23",
    name: "Friesestabijs01.jpg — Wikimedia Commons",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Friesestabijs01.jpg",
    type: "other",
    publishedOn: "2009-04-03",
    accessedOn: "2026-10-21",
    note: "Creator and uploader: Mjk23. File page states CC BY-SA 3.0; attribution and share-alike terms apply.",
  },
  "wikimedia-stabyhoun-caronna": {
    id: "wikimedia-stabyhoun-caronna",
    name: "Stabyhoun.jpg — Wikimedia Commons",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Stabyhoun.jpg",
    type: "other",
    publishedOn: "2005-04-24",
    accessedOn: "2026-10-21",
    note: "Photographer credited on the file page as Steffen Heinz (Caronna); uploader: Caronna. CC BY-SA 3.0 applies, with attribution and share-alike terms.",
  },
  "nsdtr-club-canada-ckc-standard": {
    id: "nsdtr-club-canada-ckc-standard",
    name: "Nova Scotia Duck Tolling Retriever Club of Canada - Official CKC Breed Standard",
    url: "https://www.toller.ca/tollers/ckc-standard/",
    type: "official_breed_standard",
    publishedOn: "1997-12-01",
    accessedOn: "2026-10-21",
    note: "Official Canadian Kennel Club breed standard for the Nova Scotia Duck Tolling Retriever (revised December 1997), detailing origin, temperament, size (48–51 cm / 45–48 cm ± 3 cm; 20–23 kg / 17–20 kg), coat, colour, gait, and disqualifications.",
    publisher: "Nova Scotia Duck Tolling Retriever Club of Canada / Canadian Kennel Club"
  },
  "nsdtr-club-usa-breed-standard": {
    id: "nsdtr-club-usa-breed-standard",
    name: "Nova Scotia Duck Tolling Retriever Club (USA) - Official AKC Breed Standard",
    url: "https://www.nsdtrc-usa.org/breed/standard/",
    type: "official_breed_standard",
    publishedOn: "2001-06-11",
    accessedOn: "2026-10-21",
    note: "Official AKC / NSDTRC-USA breed standard (approved 11 June 2001, effective 1 September 2001), specifying 18–21 in (ideal 19 in) for males and 17–20 in (ideal 18 in) for females, 10:9 body length-to-height ratio, coat, colour, and disqualifications.",
    publisher: "Nova Scotia Duck Tolling Retriever Club (USA) / American Kennel Club"
  },
  "nsdtr-club-usa-health-overview": {
    id: "nsdtr-club-usa-health-overview",
    name: "Nova Scotia Duck Tolling Retriever Club (USA) - Health & Genetics Overview",
    url: "https://www.nsdtrc-usa.org/health/overview/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "US parent-club health and genetics overview detailing required CHIC tests (hip evaluation, annual ACVO eye exam, prcd-PRA DNA test) and recommended screenings (elbow, cardiac, patellar, thyroid, CEA, JADD, CP1, CLPS, CDDY, CLAM, and CDMC).",
    publisher: "Nova Scotia Duck Tolling Retriever Club (USA)"
  },
  "uc-davis-vgl-nsdtr-health-panel": {
    id: "uc-davis-vgl-nsdtr-health-panel",
    name: "UC Davis Veterinary Genetics Laboratory - Nova Scotia Duck Tolling Retriever Health Panel",
    url: "https://vgl.ucdavis.edu/panel/nova-scotia-duck-tolling-retriever-health-panel",
    type: "veterinary",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Veterinary genetics laboratory breed panel covering CDMC (SNX14), CLAM (LMNA), CP1 (DLX6), CLPS (ADAMTS20), JADD (RESF1), CDDY/IVDD (FGF4), and DM (SOD1).",
    publisher: "UC Davis Veterinary Genetics Laboratory"
  },
  "uc-davis-vgl-clam-nsdtr": {
    id: "uc-davis-vgl-clam-nsdtr",
    name: "UC Davis Veterinary Genetics Laboratory - Cardiac Laminopathy (CLAM) in Nova Scotia Duck Tolling Retrievers",
    url: "https://vgl.ucdavis.edu/test/clam-nsdtr",
    type: "veterinary",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Veterinary genetics laboratory documentation for the autosomal recessive LMNA frameshift variant (p.Asp576ThrfsTer124) associated with fatal juvenile/young-adult dilated and fibrosing cardiomyopathy (CLAM) in Nova Scotia Duck Tolling Retrievers.",
    publisher: "UC Davis Veterinary Genetics Laboratory"
  },
  "american-kennel-club-nsdtr-history": {
    id: "american-kennel-club-nsdtr-history",
    name: "American Kennel Club - Nova Scotia Duck Tolling Retriever History: Behind the 'Little River Duck Dog'",
    url: "https://www.akc.org/expert-advice/dog-breeds/nova-scotia-duck-tolling-retriever-history/",
    type: "kennel_club",
    publishedOn: "2024-02-27",
    accessedOn: "2026-10-21",
    note: "Detailed AKC historical article documenting Mi'kmaq and red-fox tolling traditions, Little River Harbour origins, Kooikerhondje and St. John's Water Dog connections, 1945 Canadian registration of 15 dogs, Sue Van Sloun's 1978 US imports, 1984 US club founding, and 2003 AKC recognition as the 150th breed.",
    publisher: "American Kennel Club"
  },
  "fci-lowchen-standard": {
    id: "fci-lowchen-standard",
    name: "FCI Standard No. 233 — Lowchen (Little Lion Dog)",
    publisher: "Fédération Cynologique Internationale",
    url: "https://www.fci.be/Nomenclature/Standards/233g09-en.pdf",
    type: "official_breed_standard",
    publishedOn: "2004-03-24",
    accessedOn: "2026-10-21",
    note: "Official English-language breed standard, No. 233.",
  },
  "american-kennel-club-lowchen": {
    id: "american-kennel-club-lowchen",
    name: "Löwchen — Breed Information",
    publisher: "American Kennel Club",
    url: "https://www.akc.org/dog-breeds/lowchen/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Breed characteristics, life expectancy, grooming, exercise, training, and recommended health tests.",
  },
  "lowchen-club-of-america-breed-health": {
    id: "lowchen-club-of-america-breed-health",
    name: "Löwchen Club of America — Breed Health",
    publisher: "Löwchen Club of America",
    url: "https://www.thelowchenclubofamerica.org/competitive-loewchen/breed-health",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Breed-specific screening recommendations for eye, hip, and patellar conditions.",
  },
  "lowchen-club-of-america-about-breed": {
    id: "lowchen-club-of-america-about-breed",
    name: "Löwchen Club of America — About the Breed",
    publisher: "Löwchen Club of America",
    url: "https://www.thelowchenclubofamerica.org/the-loewchen-breed",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Breed history, alternate names, characteristics, and care information.",
  },
  "wikimedia-lowchen-ainos": {
    id: "wikimedia-lowchen-ainos",
    name: "Lowchen.jpg — Wikimedia Commons",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Lowchen.jpg",
    type: "other",
    publishedOn: "2011-08-24",
    accessedOn: "2026-10-21",
    note: "Image author Ainos; current uploader shown as Hundar. CC BY 3.0; attribution is required.",
  },
  "wikimedia-lowchen-jappitoo": {
    id: "wikimedia-lowchen-jappitoo",
    name: "LowchenFemale.jpg — Wikimedia Commons",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:LowchenFemale.jpg",
    type: "other",
    publishedOn: "2010-11-19",
    accessedOn: "2026-10-21",
    note: "Author and uploader: Jappitoo. CC BY-SA 3.0 applies; attribution and share-alike terms apply.",
  },
  "wikimedia-lowchen-basil-smile": {
    id: "wikimedia-lowchen-basil-smile",
    name: "Löwchen dog (Basil Smile).jpg — Wikimedia Commons",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:L%C3%B6wchen_dog_%28Basil_Smile%29.jpg",
    type: "other",
    publishedOn: "2010-09-04",
    accessedOn: "2026-10-21",
    note: "Photographer: John M. P. Knox. CC BY-SA 2.0 applies; attribution and share-alike terms apply.",
  },
  "fci-collie-rough-nomenclature": {
    id: "fci-collie-rough-nomenclature",
    name: "FCI Breed Nomenclature — Collie Rough (156)",
    publisher: "Fédération Cynologique Internationale",
    url: "https://www.fci.be/en/nomenclature/COLLIE-ROUGH-156.html",
    type: "breed_registry",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Current FCI breed listing for classification, country of origin, and working-trial status. The page lists the official valid standard date as 2026-09-08.",
  },
  "fci-collie-rough-standard-2012": {
    id: "fci-collie-rough-standard-2012",
    name: "FCI Standard No. 156 — Collie (Rough), 2012 edition",
    publisher: "Fédération Cynologique Internationale",
    url: "https://www.fci.be/Nomenclature/Standards/156g01-en.pdf",
    type: "official_breed_standard",
    publishedOn: "2012-11-22",
    accessedOn: "2026-10-21",
    note: "Earlier official standard used only for historical background and general breed description, not as the authority for current measurements.",
  },
  "american-kennel-club-collie": {
    id: "american-kennel-club-collie",
    name: "Collie — Breed Information",
    publisher: "American Kennel Club",
    url: "https://www.akc.org/dog-breeds/collie/",
    type: "kennel_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Breed profile covering size, life expectancy, colours, grooming, exercise, training, and recommended health tests.",
  },
  "collie-club-of-america-health": {
    id: "collie-club-of-america-health",
    name: "Collie Health",
    publisher: "Collie Club of America",
    url: "https://thecollieclub.org/collie-health/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Breed-health guidance discussing Collie Eye Anomaly, MDR1 medication sensitivity, and health resources.",
  },
  "collie-club-of-america-breeder-health": {
    id: "collie-club-of-america-breeder-health",
    name: "Breeder Health Testing",
    publisher: "Collie Club of America",
    url: "https://thecollieclub.org/faq-items/breeder-health-testing/",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Breeder screening guidance covering CEA, MDR1, PRA-rcd2, dermatomyositis, hip evaluation, and degenerative myelopathy.",
  },
  "wikimedia-rough-collie-barberousse": {
    id: "wikimedia-rough-collie-barberousse",
    name: "Rough Collie.jpg — Wikimedia Commons",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Rough_Collie.jpg",
    type: "other",
    publishedOn: "2017-10-20",
    accessedOn: "2026-10-21",
    note: "Photograph credited to B@rberousse (Alain BOUCHERY), uploaded via Flickr upload bot. CC BY-SA 2.0; commercial use is allowed under the license terms.",
  },
  "wikimedia-rough-collie-panaca": {
    id: "wikimedia-rough-collie-panaca",
    name: "Rough collie Panaca.JPG — Wikimedia Commons",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Rough_collie_Panaca.JPG",
    type: "other",
    publishedOn: "2012-07-08",
    accessedOn: "2026-10-21",
    note: "White Rough Collie photographed by Petruss. CC BY-SA 3.0; commercial use is allowed under the license terms.",
  },
  "wikimedia-rough-collie-canberra": {
    id: "wikimedia-rough-collie-canberra",
    name: "Rough Collie Canberra 2016.jpg — Wikimedia Commons",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Rough_Collie_Canberra_2016.jpg",
    type: "other",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Photograph credited to Thennicke. CC BY-SA 4.0; commercial use is allowed under the license terms. The upload date was not recorded because it was not independently established.",
  },
  "american-bloodhound-club-breed-history-standard": {
    id: "american-bloodhound-club-breed-history-standard",
    name: "American Bloodhound Club - Breed History & Official AKC Standard",
    url: "https://www.americanbloodhoundclub.org/breed-history-standard/",
    type: "official_breed_standard",
    publishedOn: "1996-01-09",
    accessedOn: "2026-10-21",
    note: "Official AKC / American Bloodhound Club breed standard (approved 9 January 1996, effective 29 February 1996) and historical overview, specifying 25–27 in (average 26 in) and 90–110 lbs for dogs, 23–25 in (average 24 in) and 80–100 lbs for bitches, head length ≥12 in (dogs) and ≥11 in (bitches), scissor or level bite, and black-and-tan, liver-and-tan, and red colours.",
    publisher: "American Bloodhound Club / American Kennel Club"
  },
  "american-bloodhound-club-faq": {
    id: "american-bloodhound-club-faq",
    name: "American Bloodhound Club - Frequently Asked Questions about Bloodhounds",
    url: "https://www.americanbloodhoundclub.org/frequently-asked-questions-about-bloodhounds/",
    type: "breed_club",
    publishedOn: "2020-06-10",
    accessedOn: "2026-10-21",
    note: "US parent-club FAQ covering activity needs, apartment unsuitability, height/weight (including 120–130+ lb individuals), colour shades, drooling, baying, non-guarding watchdog nature, supervision with children under 5, pack sociability, digging, 5–6 ft physical fencing, and why electronic/invisible fences fail.",
    publisher: "American Bloodhound Club"
  },
  "bloodhound-club-uk-breed-standard": {
    id: "bloodhound-club-uk-breed-standard",
    name: "The Bloodhound Club (UK) - Official UK Kennel Club Breed Standard",
    url: "https://www.thebloodhoundclub.com/breed-standard",
    type: "official_breed_standard",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "Complete text of the UK Kennel Club Bloodhound breed standard hosted by The Bloodhound Club, detailing head length (≥30 cm / 12 in in dogs, ≥28 cm / 11 in in bitches), unimpeded eyesight, scissor bite, colours, height (63–69 cm / 25–27 in dogs, 58–63 cm / 23–25 in bitches; ideal 66 cm / 61 cm), and weight (41–50 kg / 90–110 lbs dogs, 36–45.5 kg / 80–100 lbs bitches).",
    publisher: "The Bloodhound Club (UK) / The Kennel Club"
  },
  "bloodhound-club-uk-considering-a-bloodhound": {
    id: "bloodhound-club-uk-considering-a-bloodhound",
    name: "The Bloodhound Club (UK) - Considering A Bloodhound, What You Should Know",
    url: "https://www.thebloodhoundclub.com/considering-a-bloodhound",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "UK parent-club buyer and owner guide covering KC/BVA hip, elbow, eye, heart, and DM testing, 10.00% average COI, scent-driven temperament, 15-foot slobber throws, minimum 2 hours of daily exercise, counter-surfing height, gastric torsion, ear cleaning, and reduced entropion incidence.",
    publisher: "The Bloodhound Club (UK)"
  },
  "bloodhound-club-uk-breed-history": {
    id: "bloodhound-club-uk-breed-history",
    name: "The Bloodhound Club (UK) - The History of the Bloodhound",
    url: "https://www.thebloodhoundclub.com/breed-history",
    type: "breed_club",
    publishedOn: null,
    accessedOn: "2026-10-21",
    note: "UK parent-club historical account documenting British records from c. 1300, St. Hubert's Abbey origins, Scottish border 'sleuth hound' tracking of cattle reivers, Robert Boyle's 17th-century 7-mile trailing trial, Sir Walter Scott and Landseer depictions, and WWII population bottleneck.",
    publisher: "The Bloodhound Club (UK)"
  },
  "bloodhound-gdv-mortality-morbidity-uk-2010": {
    id: "bloodhound-gdv-mortality-morbidity-uk-2010",
    name: "Mortality and Morbidity Due to Gastric Dilatation-Volvulus Syndrome in Pedigree Dogs in the UK",
    url: "https://pubmed.ncbi.nlm.nih.gov/20626784/",
    type: "scientific",
    publishedOn: "2010-07-15",
    accessedOn: "2026-10-21",
    note: "Evans KM, Adams VJ (Journal of Small Animal Practice 2010;51(7):376–381, PMID 20626784). Epidemiological study of 15,881 deceased and 36,006 live UK pedigree dogs identifying the Bloodhound among the breeds at greatest risk of both GDV mortality and GDV morbidity.",
    publisher: "Journal of Small Animal Practice (BSAVA / Wiley)"
  },
});

export type SourceId = keyof typeof sources;
