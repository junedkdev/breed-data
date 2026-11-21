import type { Breed } from "../schema/breed.types";

export const fox_terrier_smooth: Breed = {
  slug: "fox-terrier-smooth",
  name: "Fox Terrier (Smooth)",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Smooth Fox Terrier",
    "Smooth-Haired Fox Terrier",
    "Foxie",
    "Fox-Terrier à poil lisse",
    "Glatthaar-Foxterrier",
    "Fox Terrier de pelo liso"
  ],

  group: "Large and Medium-Sized Terrier (Terrier)",

  origin: {
    country: "Great Britain",
    region: "England (traditional fox-hunting counties)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/FoxSmooth2.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:FoxSmooth2.jpg",
      title: "FoxSmooth2.jpg",
      description: "An adult female Smooth Fox Terrier standing in grass.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2021-07-31",
      uploadedOn: "2021-07-31",
      width: 1134,
      height: 892,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:FoxSmooth2.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/DocFile_Fox.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:DocFile_Fox.jpg",
      title: "DocFile Fox.jpg",
      description:
        "A Smooth Fox Terrier standing in side profile outdoors.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2006-06-10",
      uploadedOn: "2019-02-12",
      width: 1075,
      height: 1047,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:DocFile_Fox.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    }
  ],

  overview: {
    summary:
      "A crisp, athletic British earthdog with a flat, mostly white smooth coat, neatly folded V-shaped ears, keen energy, and bold hunting spirit.",

    description:
      "The Fox Terrier (Smooth) packs bone, stamina, and quickness into a neat, short-backed frame designed to cover ground smoothly without looking heavy or leggy. Its long, flat, moderately narrow head tapers toward strong jaws with a complete scissor bite, bright dark circular eyes, and small V-shaped ears folding forward close to the cheeks. The straight, hard, dense coat sits flat over the body—including the belly and inner thighs—and is predominantly white with black, tan, or black-and-tan patches. Alert, cheerful, and fearless, this lively terrier makes an engaging companion and keen watchdog for households ready to match its energy.",

    history:
      "Developed in England during the 18th and 19th centuries for traditional foxhunts, the Smooth Fox Terrier ran alongside hound packs or rode in saddle panniers until a fox went to ground, where the terrier entered the burrow to drive it out. Early working terriers were often dark or black-and-tan, so breeders blended them with the now-extinct Old English White Terrier, Bull Terrier, Beagle, and Greyhound lines to create a mostly white dog that hunters would not confuse with a red fox. Fox Terriers entered early British dog shows in the 1860s—with foundational dogs Old Jock, Old Tartar, and Old Trap competing at Birmingham in 1863—and a dedicated club wrote the first written description of the breed in 1876. Though Smooth and Wire varieties were long treated as coat types of one breed in some regions, they were formally separated into distinct breeds in the late 20th century.",

    originalPurpose:
      "Accompanying mounted foxhunts to bolt foxes from underground dens and controlling farm vermin.",

    currentRoles: [
      "Lively, affectionate family companion",
      "Alert home watchdog",
      "Competitor in earthdog trials, barn hunt, agility, flyball, and obedience",
      "Energetic walking and outdoor adventure partner"
    ]
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "cm",
      male: {
        min: 38,
        max: 39
      },
      female: {
        min: 36,
        max: 38
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 7.5,
        max: 8
      },
      female: {
        min: 7,
        max: 7.5
      }
    },

    lifespanYears: {
      min: 12,
      max: 15
    },

    coatType:
      "Straight, flat, smooth, hard, dense, and abundant single coat covering the entire body, including the belly and inner thighs.",

    coatLength: "Short",

    coatColors: [
      "All White",
      "White with Black Markings",
      "White with Tan Markings",
      "White with Black and Tan Markings (Tricolour)"
    ],

    sheddingLevel: "Low to moderate",
    droolingLevel: "Low",

    distinctiveFeatures: [
      "Short-backed, well-balanced frame that stands alert and ready for action without looking coarse or overly leggy",
      "Flat, moderately narrow skull tapering smoothly to strong jaws with a complete scissor bite",
      "Dark, moderately small, nearly circular eyes with a bright, keen expression",
      "Small, V-shaped drop ears folding neatly forward close to the cheeks",
      "Deep, narrow chest suited to squeezing into tight underground burrows",
      "High-set tail carried upright and gaily without curling over the back",
      "Small, round, compact cat-like feet with tough pads and moderately arched toes",
      "Predominantly white smooth coat with black, tan, or black-and-tan markings; brindle, red, and liver markings are undesirable"
    ]
  },

  temperament: {
    traits: [
      "Alert",
      "Active",
      "Fearless",
      "Friendly",
      "Forthcoming",
      "Playful",
      "Intelligent",
      "Independent",
      "Vigilant"
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 4,
      protectiveness: 3,
      independence: 4,
      trainability: 4,
      barking: 4,
      energy: 4
    }
  },

  care: {
    exercise: {
      level: "High",
      minutesPerDay: {
        min: 45,
        max: 60
      },
      activities: [
        "Brisk daily leash walks and neighborhood scent exploration",
        "Fetch and active play inside a securely fenced yard",
        "Earthdog tests, barn hunt, and scent work",
        "Agility, flyball, rally, and trick training",
        "Interactive puzzle feeders and structured digging games"
      ]
    },

    grooming: {
      level: "Low",
      brushing: "Weekly brushing with a firm bristle brush or rubber hound glove",
      bathing: "Monthly bath or as needed after muddy digging sessions",
      notes: [
        "The flat smooth coat sheds dirt easily and does not need clipping or hand-stripping.",
        "Check the small folded V-shaped ears every week for wax or debris and clean gently as needed.",
        "Trim nails regularly to keep the compact cat-like feet well aligned.",
        "Brush teeth frequently with dog-safe toothpaste and inspect paws after brushy walks or digging."
      ]
    },

    training: {
      difficulty: "Moderate",
      tips: [
        "Use upbeat, reward-based sessions with small treats and play; keep lessons short and varied so this clever terrier stays interested.",
        "Teach a dependable quiet cue early to manage alert watchdog barking.",
        "Keep the dog on a leash or inside a sturdy fenced yard outdoors, since chasing small wildlife is hardwired.",
        "Channel digging and hunting instincts into structured sports such as agility, earthdog, or barn hunt rather than relying on harsh corrections."
      ],
      socialization:
        "Enroll puppies early in positive socialization classes and introduce them calmly to new people, vaccinated dogs, and everyday noises so natural terrier boldness develops into steady manners."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: ["Temperate", "Cool", "Warm"],
      aloneTimeTolerance: "Moderate"
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced small-breed dog food matched to the dog's age and high daily energy output.",

    feedingFrequency: {
      puppy: "Three to four small measured meals daily until six months old, then two meals",
      adult: "Two measured meals per day",
      senior: "Two portion-controlled meals per day adjusted for lower activity"
    },

    guidelines:
      "Measure each meal carefully and factor training treats into the daily calorie budget so the terrier stays lean and muscular. Extra weight places unnecessary stress on knees and joints. Keep clean, fresh water available at all times.",

    considerations: [
      "Monitor body condition regularly because some Smooth Fox Terriers gain weight easily if overfed.",
      "Choose small-sized kibble suited to compact jaws.",
      "Avoid fatty table scraps and transition to new foods gradually over about a week."
    ],

    note:
      "Check with a veterinarian to tailor daily portions and life-stage diets to your dog's activity level and health."
  },

  health: {
    overview:
      "Fox Terriers (Smooth) are generally sturdy, energetic dogs with a typical lifespan of 12 to 15 years. Two inherited conditions have scientifically confirmed causal genetic mutations in the breed or closely related terrier lines: spinocerebellar ataxia with myokymia and seizures (linked to the KCNJ10 gene) and primary lens luxation (linked to the ADAMTS17 gene). Responsible breeding programs also screen for patellar luxation, heart conditions, inherited eye disorders, and congenital deafness.",

    commonConditions: [
      "Spinocerebellar ataxia with myokymia and seizures (SCA / SAMS) — an established autosomal recessive neurological disorder caused by a KCNJ10 gene mutation confirmed in Smooth-Haired Fox Terriers, leading to progressive incoordination, muscle twitching, and seizures",
      "Primary lens luxation (PLL) — an inherited eye disorder linked to an autosomal recessive ADAMTS17 gene mutation in terrier breeds that causes the eye lens to dislocate and can trigger painful glaucoma",
      "Patellar luxation — slipping of the kneecap out of its normal groove, monitored through veterinary orthopedic exams",
      "Cardiac conditions — congenital heart anomalies and murmurs evaluated through specialist heart screenings",
      "Congenital sensorineural deafness — unilateral or bilateral hearing loss reported in some predominantly white lines, checked with hearing (BAER) testing",
      "Legg-Calvé-Perthes disease — a hip-joint bone blood-supply disorder occasionally reported in young small terriers",
      "Cataracts and other ocular disorders — monitored through periodic veterinary eye examinations"
    ],

    preventiveCare: [
      "Verify that breeding parents have documented clearances for patellar luxation, cardiac health, eye exams, and DNA tests for spinocerebellar ataxia (KCNJ10) and primary lens luxation (ADAMTS17).",
      "Keep the dog at a lean, athletic weight to protect knees and hips.",
      "Maintain regular dental brushing, weekly ear checks, parasite prevention, and annual veterinary wellness visits."
    ],

    recommendedScreenings: [
      "Patella orthopedic evaluation",
      "Cardiac examination",
      "Veterinary ophthalmologist eye examination",
      "DNA test for Spinocerebellar Ataxia (KCNJ10 gene mutation)",
      "DNA test for Primary Lens Luxation (ADAMTS17 gene mutation)",
      "Hearing evaluation (BAER test) for breeding stock and predominantly white puppies"
    ],

    dentalCare:
      "Brush teeth several times a week with dog-safe toothpaste and schedule routine veterinary dental exams to keep teeth and gums clean.",

    earCare:
      "Inspect the small forward-folding ears weekly for wax, dirt, or redness and wipe gently with a veterinarian-approved cleaner.",

    skinCare:
      "Check the skin during weekly brushing for scratches, burrs, dryness, or parasites, especially after outdoor digging or trail walks."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Active owners and families who enjoy daily walks, fetch, and playful mental engagement",
      "People who appreciate a bold, cheerful, low-grooming small terrier",
      "Apartment or house dwellers able to provide steady exercise and teach a calm quiet cue",
      "Dog sport enthusiasts interested in earthdog trials, barn hunt, agility, or flyball"
    ],

    notIdealFor: [
      "Homes with loose small pets such as rabbits, hamsters, or birds that trigger strong chase instincts",
      "Sedentary households looking for a quiet, low-energy lapdog",
      "Owners who want an off-leash hiking partner in unfenced areas with wildlife",
      "People who leave a dog alone for long hours without exercise or enrichment"
    ]
  },

  funFacts: [
    "In 1863 at Birmingham, three early Fox Terriers—Old Jock, Old Tartar, and Old Trap—helped shape the breed, and within ten years Fox Terrier classes there drew 276 entries.",
    "A Smooth Fox Terrier named Ch. Warren Remedy won top honors at a premier New York championship dog show three consecutive years in 1907, 1908, and 1909—a streak that remains unmatched.",
    "U.S. President Herbert Hoover kept two Fox Terriers named Big Ben and Sonnie.",
    "Predominantly white coats were deliberately favored by 19th-century foxhunters so terriers bolting out of underground dens would never be mistaken for red foxes.",
    "Despite sharing ancestry with the Wire Fox Terrier, the Smooth has a slightly more V-shaped head and a flat coat that needs only weekly brushing instead of hand-stripping."
  ],

  faq: [
    {
      question: "How is a Smooth Fox Terrier different from a Wire Fox Terrier?",
      answer:
        "Both share similar size, proportions, and lively hunting drive, but the Smooth has a short, flat, low-maintenance coat and a slightly more V-shaped head, while the Wire has a harsh, wiry coat with facial furnishings that requires stripping."
    },
    {
      question: "How big does a Fox Terrier (Smooth) get?",
      answer:
        "Males stand up to 39 cm at the withers and weigh 7.5 to 8 kg, while females are slightly smaller at 36 to 38 cm and weigh 7 to 7.5 kg."
    },
    {
      question: "Can a Smooth Fox Terrier live happily in an apartment?",
      answer:
        "Yes, as long as it gets brisk daily walks and active play. Because the breed is an alert watchdog, teaching a reliable quiet cue early helps in close-neighbor living."
    },
    {
      question: "Can Smooth Fox Terriers be trusted off-leash?",
      answer:
        "No. Their strong instinct to chase squirrels, rabbits, and other small animals means they should stay on a leash or inside a securely fenced yard."
    },
    {
      question: "How much grooming does the smooth coat require?",
      answer:
        "Very little—weekly brushing with a firm brush or rubber hound glove, monthly baths or rinses after muddy digging, regular nail trims, and weekly ear checks are usually enough."
    },
    {
      question: "What health tests matter most for Smooth Fox Terriers?",
      answer:
        "Key screenings include patella and cardiac evaluations, veterinary eye exams, hearing (BAER) checks where relevant, and DNA tests for spinocerebellar ataxia (KCNJ10) and primary lens luxation (ADAMTS17)."
    }
  ],

  references: [
    "fci-fox-terrier-smooth-official-standard",
    "fci-fox-terrier-smooth-nomenclature",
    "the-kennel-club-fox-terrier-smooth-breed-standard",
    "rkc-fox-terrier-smooth-breed-profile",
    "akc-smooth-fox-terrier-breed-standard",
    "akc-smooth-fox-terrier-breed-profile",
    "ukc-smooth-fox-terrier-breed-standard",
    "ofa-smooth-fox-terrier-chic-requirements",
    "smooth-fox-terrier-sca-kcnj10-study-2014",
    "pubmed-rohdin-2015-kcnj10-ataxia-russell-terriers",
    "pubmed-gould-2011-adamts17-lens-luxation",
    "natureserve-canis-lupus-familiaris",
    "the-dog-api",
    "wikimedia-fox-terrier-smooth-canarian-foxsmooth2",
    "wikimedia-fox-terrier-smooth-canarian-docfile"
  ],

  evidence: {
    scientificName: {
      reliability: "reliable_source",
      sources: [
        {
          id: "natureserve-canis-lupus-familiaris",
          role: "verified",
          locator: "Taxon profile: Canis lupus familiaris (Domestic Dog)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "All domestic dog breeds belong to the subspecies Canis lupus familiaris."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-fox-terrier-smooth-nomenclature",
          role: "verified",
          locator: "Multilingual names (Fox Terrier a Poil Lisse, Fox Terrier Glatthaar, Fox Terrier de Pelo Liso)"
        },
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "Smooth Fox Terrier"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names (Smooth Fox Terrier, Smooth Haired Fox Terrier, Foxie)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-fox-terrier-smooth-official-standard",
          role: "verified",
          locator: "Group 3 Terriers, Section 1 Large and medium-sized Terriers, working trial optional"
        },
        {
          id: "the-kennel-club-fox-terrier-smooth-breed-standard",
          role: "verified",
          locator: "Terrier Group"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.breed_group (Terrier)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Presented in plain descriptive wording without registry codes or acronyms; FCI lists working trial as optional rather than omitted."
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-fox-terrier-smooth-nomenclature",
          role: "verified",
          locator: "Country of origin: Great Britain"
        },
        {
          id: "fci-fox-terrier-smooth-official-standard",
          role: "verified",
          locator: "Origin: Great Britain"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin (England)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Official FCI standard lists Great Britain; The Dog API lists England."
    },

    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-fox-terrier-smooth-breed-profile",
          role: "verified",
          locator: "About this breed (English fox hunts, Islington 1862, Birmingham 1863)"
        },
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "History section (England)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "overview.summary": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-fox-terrier-smooth-official-standard",
          role: "verified",
          locator: "General Appearance, Coat, Colour, and Temperament"
        },
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "About the Breed"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "overview.description": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-fox-terrier-smooth-official-standard",
          role: "verified",
          locator: "General Appearance, Head, Coat, and Colour"
        },
        {
          id: "the-kennel-club-fox-terrier-smooth-breed-standard",
          role: "verified",
          locator: "General Appearance, Characteristics, Coat, Eyes, Mouth"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.description"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "overview.history": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-fox-terrier-smooth-breed-profile",
          role: "verified",
          locator: "About this breed (fox hunting, Old English White Terrier/Bull Terrier/Beagle, 1862 Islington, 1863 Birmingham, 1876 standard)"
        },
        {
          id: "fci-fox-terrier-smooth-official-standard",
          role: "verified",
          locator: "Brief Historical Summary (British origins, 1876 original standard)"
        },
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "Did You Know and History sections"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.history (1985 AKC breed separation)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "overview.originalPurpose": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-fox-terrier-smooth-breed-profile",
          role: "verified",
          locator: "About this breed (earth dog bolting foxes)"
        },
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "Did You Know (harassing foxes out of dens)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "overview.currentRoles": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "About the Breed, Exercise, and Training sections"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.sizeCategory": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-fox-terrier-smooth-official-standard",
          role: "verified",
          locator: "Size and Weight (up to 39 cm, 7-8 kg)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.height.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-fox-terrier-smooth-official-standard",
          role: "verified",
          locator: "Size and Weight: Not exceeding 39 cm in males"
        },
        {
          id: "the-kennel-club-fox-terrier-smooth-breed-standard",
          role: "verified",
          locator: "Size: Not exceeding 39 cm in dogs"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.height.metric (38-39 cm)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "FCI Standard No. 12 and The Royal Kennel Club specify only the 39 cm maximum for males; the 38 cm lower bound comes from The Dog API metric range."
    },

    "physical.height.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-fox-terrier-smooth-official-standard",
          role: "verified",
          locator: "Size and Weight: Females slightly less than 39 cm"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.height.metric (36-38 cm)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "FCI Standard No. 12 states females are slightly less than 39 cm without publishing exact bounds; The Dog API provides 36-38 cm."
    },

    "physical.weight.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-fox-terrier-smooth-official-standard",
          role: "verified",
          locator: "Size and Weight: Dogs 7.5 - 8 kg"
        },
        {
          id: "the-kennel-club-fox-terrier-smooth-breed-standard",
          role: "verified",
          locator: "Size: Dogs 7.5-8 kg"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight.metric (8-8.5 kg)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Kept official FCI/Royal Kennel Club male weight (7.5-8 kg); The Dog API lists a slightly heavier 8-8.5 kg range."
    },

    "physical.weight.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-fox-terrier-smooth-official-standard",
          role: "verified",
          locator: "Size and Weight: Bitches 7 - 7.5 kg"
        },
        {
          id: "the-kennel-club-fox-terrier-smooth-breed-standard",
          role: "verified",
          locator: "Size: Bitches 7-7.5 kg"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (7-7.5 kg)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12-15 years"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span (12-15 years)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-fox-terrier-smooth-official-standard",
          role: "verified",
          locator: "Coat: Straight, flat, smooth, hard, dense and abundant; belly and underside of thighs not bare"
        },
        {
          id: "the-kennel-club-fox-terrier-smooth-breed-standard",
          role: "verified",
          locator: "Coat: Straight, flat, smooth, hard, dense and abundant"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "Coat Length: Short"
        },
        {
          id: "fci-fox-terrier-smooth-official-standard",
          role: "verified",
          locator: "Coat: Short, flat, smooth"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-fox-terrier-smooth-official-standard",
          role: "verified",
          locator: "Colour: White should predominate; all white, white with tan, black and tan or black markings; brindle, red or liver highly undesirable; any other colour unacceptable"
        },
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "Breed Colors (White, White & Black, White & Tan, White Black & Tan)"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "GET /breeds/{id}/colours"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Discarded non-breed colours from The Dog API endpoint (such as blue, brindle, cream, fawn, liver, merle, red, sable) because FCI Standard No. 12 requires white to predominate and treats brindle, red, and liver as highly undesirable and other colours as unacceptable."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (low)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-fox-terrier-smooth-official-standard",
          role: "verified",
          locator: "General Appearance, Head, Ears, Body, Tail, Feet, and Colour"
        },
        {
          id: "the-kennel-club-fox-terrier-smooth-breed-standard",
          role: "verified",
          locator: "General Appearance, Eyes, Mouth, Feet, Coat"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-fox-terrier-smooth-official-standard",
          role: "verified",
          locator: "Behaviour/Temperament (alert, quick, friendly, forthcoming, fearless)"
        },
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "About the Breed and Training sections"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics"
        }
      ],
      verifiedOn: null,
      note: "Editorial 1-5 scale estimates informed by kennel club temperament profiles."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "Exercise section (lively, athletic, requires ample exercise)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "cited",
          locator: "Exercise section"
        }
      ],
      verifiedOn: null,
      note: "General daily exercise range for an active small working terrier."
    },

    "care.exercise.activities": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "Exercise section (long walks, fetch, fenced playtime)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.grooming.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "Grooming section"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.grooming.brushing": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "Grooming section (weekly brushing with thick brush or hound glove)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.grooming.bathing": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "Grooming section (monthly bath or as needed after digging)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.grooming.notes": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "cited",
          locator: "Grooming section"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.training.difficulty": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "cited",
          locator: "Training section"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.training.tips": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "Training and Exercise sections (leash/fenced yard, digging instinct, terrier-savvy puppy classes)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.training.socialization": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "cited",
          locator: "Training section"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "Training section (equally at home in city or country)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "Exercise and Training sections (fenced yard)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-fox-terrier-smooth-official-standard",
          role: "cited",
          locator: "Coat description"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "cited",
          locator: "Temperament traits"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "cited",
          locator: "Nutrition section (high-quality age-appropriate food, weight and treat monitoring)"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pubmed-rohdin-2015-kcnj10-ataxia-russell-terriers",
          role: "verified",
          locator: "Abstract (KCNJ10 mutation confirmed in Smooth-Haired Fox Terriers with hereditary ataxia)"
        },
        {
          id: "smooth-fox-terrier-sca-kcnj10-study-2014",
          role: "verified",
          locator: "KCNJ10:c.627C>G mutation identification in spinocerebellar ataxia with myokymia and seizures"
        },
        {
          id: "pubmed-gould-2011-adamts17-lens-luxation",
          role: "verified",
          locator: "ADAMTS17 mutation associated with primary lens luxation in terriers"
        },
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "Health section (Patella Evaluation, Cardiac Exam)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pubmed-rohdin-2015-kcnj10-ataxia-russell-terriers",
          role: "verified",
          locator: "KCNJ10 mutation in Smooth-Haired Fox Terriers"
        },
        {
          id: "smooth-fox-terrier-sca-kcnj10-study-2014",
          role: "verified",
          locator: "Spinocerebellar ataxia with myokymia and seizures (KCNJ10)"
        },
        {
          id: "pubmed-gould-2011-adamts17-lens-luxation",
          role: "verified",
          locator: "Primary lens luxation (ADAMTS17)"
        },
        {
          id: "ofa-smooth-fox-terrier-chic-requirements",
          role: "verified",
          locator: "CHIC health screening conditions (patella, cardiac, eyes, PLL, SCA)"
        },
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "Health section (patellar luxation, cardiac disease)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Distinguishes peer-reviewed causal genetic mutations (KCNJ10, ADAMTS17) from monitored orthopedic, cardiac, ocular, and hearing conditions."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "cited",
          locator: "Health and Grooming sections"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "Recommended Health Tests from the National Breed Club (Patella Evaluation, Cardiac Exam)"
        },
        {
          id: "ofa-smooth-fox-terrier-chic-requirements",
          role: "verified",
          locator: "Smooth Fox Terrier CHIC screening panel (patella, cardiac, eye, PLL DNA, SCA DNA)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "cited",
          locator: "Health and Grooming sections"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "cited",
          locator: "Grooming section"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "cited",
          locator: "Grooming section"
        }
      ],
      verifiedOn: null,
      note: null
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "cited",
          locator: "About the Breed, Exercise, and Training sections"
        }
      ],
      verifiedOn: null,
      note: "Editorial household suitability assessment based on energy, prey drive, and training needs."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-fox-terrier-smooth-breed-profile",
          role: "verified",
          locator: "About this breed (1863 Birmingham Old Jock/Old Tartar/Old Trap, 276 entries, white coat purpose)"
        },
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "About the Breed and Did You Know (Herbert Hoover dogs, V-shaped head vs Wire)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Ch. Warren Remedy's 1907-1909 consecutive Best in Show record is corroborated by Westminster Kennel Club official records."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-fox-terrier-smooth-official-standard",
          role: "verified",
          locator: "Size, Weight, and Coat"
        },
        {
          id: "akc-smooth-fox-terrier-breed-profile",
          role: "verified",
          locator: "About the Breed, Grooming, Exercise, Training, and Health"
        },
        {
          id: "ofa-smooth-fox-terrier-chic-requirements",
          role: "verified",
          locator: "Recommended health screenings"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    }
  },

  updatedOn: "2026-11-21"
};
