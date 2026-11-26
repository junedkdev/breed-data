import type { Breed } from "../schema/breed.types";

export const perro_de_presa_canario: Breed = {
  slug: "perro-de-presa-canario",
  name: "Perro de Presa Canario",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Presa Canario",
    "Dogo Canario",
    "Canary Mastiff",
    "Canarian Catch Dog"
  ],

  group: "Large mastiff-type molossoid guardian",

  origin: {
    country: "Spain",
    region:
      "Canary Islands (principally Tenerife and Gran Canaria)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Presa_Canario.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Presa_Canario.jpg",
      title: "Presa Canario.jpg",
      description:
        "An adult male Perro de Presa Canario at an outdoor exhibition in Tegueste, Tenerife.",
      creator: "Felorodriguez",
      uploader: "Basenji1908",
      capturedOn: "2011-10-17",
      uploadedOn: "2024-04-16",
      width: 2262,
      height: 2047,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Felorodriguez (cropped by Basenji1908), Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Presa_Canario.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/.",
      restrictions:
        "CC BY-SA 3.0 requires attribution and ShareAlike distribution if adapted.",
      metadataCheckedOn: "2026-11-26"
    }
  ],

  overview: {
    summary:
      "A heavy-boned, commanding Canary Islands mastiff bred for handling cattle and guarding estates, prized for its calm devotion to family, dark-masked fawn or brindle coat, and unwavering territorial vigilance.",

    description:
      "Slightly longer in body than tall at the shoulder, the Perro de Presa Canario combines massive bone, deep chest capacity, and thick muscle with an agile, ground-covering stride. Its broad, cuboid head carries a strong muzzle, moderately pendulous upper lips forming an inverted V from the front, and dark oval eyes with a steady, serious gaze. A short, coarse, flat single coat comes in shades of fawn and brindle, always paired with a black mask that stops at or below eye level. Calm, quiet, and deeply loyal inside its own household, this powerful guardian stays naturally reserved and suspicious around unfamiliar visitors and demands an experienced, steady handler.",

    history:
      "Developed in Spain's Canary Islands—chiefly Tenerife and Gran Canaria—the Perro de Presa Canario grew from crosses between the native pre-Hispanic Majorero cattle dog and heavier molossoid breeds brought to the islands by Spanish and British traders during the fifteenth through seventeenth centuries. Ranchers and farmers relied on these bold 'catch dogs' to hold semi-wild cattle, protect livestock, and guard remote estates. Changing rural life and mid-twentieth-century bans on fighting dogs pushed the breed toward extinction by the 1960s, until Spanish enthusiasts launched a recovery program in the 1970s using surviving island working dogs. After a period of international recognition under the name 'Dogo Canario', its traditional name 'Presa Canario' was officially restored.",

    originalPurpose:
      "Catching and holding cattle, protecting livestock, and guarding rural farms and estates in the Canary Islands",

    currentRoles: [
      "Estate and property guardian",
      "Livestock and ranch utility dog",
      "Obedience, weight-pulling, and working-dog sport competitor",
      "Devoted companion for highly experienced handlers"
    ]
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "cm",
      male: {
        min: 60,
        max: 66
      },
      female: {
        min: 56,
        max: 62
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 50,
        max: 65
      },
      female: {
        min: 40,
        max: 55
      }
    },

    lifespanYears: {
      min: 9,
      max: 11
    },

    coatType:
      "Short, coarse, flat single coat with no undercoat; harsh to the touch and slightly longer along the withers and backs of the thighs",

    coatLength: "Short",

    coatColors: [
      "Brindle (from deep warm dark shades to pale grey or blond)",
      "Fawn (all shades through sandy)",
      "Black facial mask required on fawn and brindle coats, not extending above eye level",
      "Limited white markings (up to 20%) permissible on chest, throat base, and toes"
    ],

    sheddingLevel:
      "Low to moderate; sheds lightly year-round without a heavy seasonal undercoat blow",

    droolingLevel:
      "Moderate; moderately pendulous upper lips lead to noticeable drooling after drinking or exercise",

    distinctiveFeatures: [
      "Robust, slightly rectangular mastiff frame that is longer than tall (especially noticeable in females)",
      "Massive, cuboid head with a 60:40 skull-to-muzzle ratio and dark inner lip pigmentation",
      "Black facial mask stopping below the eye line on fawn and brindle coats",
      "Strong jaws with a scissor bite or slight undershot bite",
      "Medium-to-dark brown oval eyes set well apart with an alert, serious expression",
      "Medium-sized drop ears hanging naturally against the cheeks",
      "Thick, muscular neck with elastic skin and a modest double dewlap",
      "Broad, deep chest reaching at least to the elbows with pronounced pectoral muscles",
      "High-set, thick tail tapering to the hock, hanging at rest and rising like a sabre when alert",
      "Solid forelegs and muscular hindquarters ending in compact cat-like feet with dark pads"
    ]
  },

  temperament: {
    traits: [
      "Calm, self-assured, and deeply loyal to its immediate family",
      "Strongly protective and naturally vigilant over home and territory",
      "Naturally reserved and suspicious toward unfamiliar strangers",
      "Confident and strong-willed, requiring a calm, experienced leader",
      "Often assertive or intolerant toward unfamiliar dogs, particularly of the same sex",
      "Deep, low warning bark used selectively rather than incessantly",
      "Docile and relaxed indoors when daily physical and mental needs are satisfied"
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 1,
      withStrangers: 1,
      protectiveness: 5,
      independence: 3,
      trainability: 3,
      barking: 2,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; a powerful working mastiff that needs structured daily walks, mental discipline, and secure physical outlets to stay balanced",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Brisk, structured daily leashed walks or trail hikes",
        "Obedience drills, impulse-control work, and tracking games",
        "Supervised play and free movement in a tall, reinforced fenced yard",
        "Weight pulling or structured working-dog sports for mature, joint-cleared adults"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush once a week with a rubber curry comb or firm bristle brush to remove loose hair and keep the coat healthy.",

      bathing:
        "Bathe occasionally—only when visibly dirty—using a gentle dog shampoo.",

      notes: [
        "Wipe drool from the muzzle, lip folds, and neck dewlap regularly to prevent trapped moisture and skin irritation.",
        "Inspect the drop ears weekly for wax buildup or redness, cleaning gently with a vet-approved solution.",
        "Trim strong, fast-growing nails every two to three weeks with heavy-duty clippers or a grinder to prevent splitting.",
        "Brush teeth several times a week with canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Challenging; smart and capable, yet immensely strong and self-willed, requiring early, consistent, experienced guidance",

      tips: [
        "Start structured obedience, loose-leash walking, and calm visitor protocols early in puppyhood before adult power arrives.",
        "Combine clear, unwavering boundaries with reward-based training; inconsistent or overly harsh handling undermines trust and control.",
        "Never encourage amateur bite work or territorial aggression—protective instincts are already strong.",
        "Keep outdoor freedom strictly inside a reinforced fence at least six feet tall with secure latches."
      ],

      socialization:
        "Thorough, positive, lifelong socialization starting in early puppyhood is vital. Calm, controlled exposure to varied people, neutral vaccinated dogs, noises, and environments helps natural guarding instincts mature into composed, discerning judgment."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Well suited to warm and temperate climates, reflecting its Canary Islands origins, while avoiding strenuous exercise in extreme heat",
        "Needs indoor housing and a fitted coat in freezing weather because its short single coat has no undercoat insulation"
      ],

      aloneTimeTolerance:
        "Low to moderate; closely bonded to its household and best suited to owners who provide steady daily interaction and structured routines."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced diet formulated for large or giant active breeds, using a controlled-growth large-breed puppy formula during development",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until about six months of age, then two meals daily on a large-breed growth formula.",
      adult:
        "Two measured meals per day to nourish heavy musculature while moderating single-meal stomach volume.",
      senior:
        "Two portion-controlled meals daily adjusted for slower metabolism and joint comfort."
    },

    guidelines:
      "Measure every meal accurately to keep the dog lean and muscular, since extra weight places heavy load on developing and adult joints. Split daily rations into two meals, rest the dog for at least an hour before and after eating to help lower bloat risk, and keep fresh water available at all times.",

    considerations: [
      "Prevent excess weight gain to protect hips, elbows, and knee ligaments.",
      "Avoid rapid puppy growth and never add calcium supplements unless prescribed by a veterinarian.",
      "Count training treats within the daily calorie budget.",
      "Transition food formulas gradually over five to seven days."
    ],

    note:
      "Confirm exact daily portions with a veterinarian based on age, workload, and body condition."
  },

  health: {
    overview:
      "The Perro de Presa Canario is generally hardy with a typical life expectancy of 9 to 11 years. As a heavy-boned, deep-chested mastiff breed, primary health priorities include monitoring orthopedic development (hip dysplasia, elbow dysplasia, cruciate ligament strain, and growing-puppy panosteitis), cardiac health, eyelid conformation, and gastric dilatation-volvulus (bloat) precautions.",

    commonConditions: [
      "Hip and elbow dysplasia — developmental joint conditions common across heavy-boned large breeds that can progress to arthritis, monitored through pre-breeding X-rays",
      "Gastric dilatation-volvulus (bloat) — an acute, life-threatening stomach twisting risk associated with deep-chested large-breed conformation",
      "Cruciate ligament injuries and panosteitis — knee ligament strain from heavy athletic mass and temporary long-bone inflammation in fast-growing puppies",
      "Cardiac conditions — occasional reports of dilated cardiomyopathy (DCM) or congenital heart issues, monitored through veterinary cardiac exams",
      "Eyelid abnormalities (entropion or ectropion) — inward-rolling or sagging eyelids that may require veterinary evaluation"
    ],

    preventiveCare: [
      "Ask breeders for documented hip and elbow evaluations along with veterinary cardiac and eye checks.",
      "Keep puppies growing steadily on a large-breed diet and limit repetitive high-impact jumping until skeletal maturity (around 18 to 24 months).",
      "Feed two smaller daily meals and separate hard exercise from mealtimes to help reduce bloat risk.",
      "Provide thick orthopedic bedding to cushion elbows and hips against calluses or hygromas.",
      "Keep lip folds, neck dewlap, and drop ears clean and dry."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "Veterinary cardiac evaluation",
      "Veterinary ophthalmologist eye examination"
    ],

    dentalCare:
      "Brush teeth several times a week with canine enzymatic toothpaste and schedule regular veterinary oral checks to keep the powerful jaws and gums healthy.",

    earCare:
      "Inspect the drop ears weekly for wax buildup, moisture, or redness, cleaning gently with a veterinarian-approved ear cleaner.",

    skinCare:
      "Check the short coat weekly for scrapes or parasites and keep facial folds and the double dewlap clean and dry."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: false,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Highly experienced owners skilled with powerful, confident guardian mastiff breeds",
      "Active rural or suburban households with a large, tall, securely fenced property",
      "Handlers committed to structured daily exercise, obedience, and lifelong socialization",
      "Owners seeking a calm, devoted, highly protective estate guardian"
    ],

    notIdealFor: [
      "First-time dog owners or passive handlers",
      "Homes with young children, frequent unannounced guests, or chaotic playgroups",
      "Apartments or dense urban settings without a secure private yard",
      "Off-leash dog parks or multi-dog households with same-sex dogs"
    ]
  },

  funFacts: [
    "The Spanish name 'Perro de Presa Canario' translates to 'Canarian Catch Dog', reflecting its traditional role holding semi-wild cattle on Canary Islands ranches.",
    "Its rugged stamina comes partly from the Majorero, an indigenous pre-Hispanic cattle dog of the Canary Islands.",
    "After being internationally registered for years as the 'Dogo Canario', the breed's traditional 'Presa Canario' name was formally restored in 2019.",
    "The Presa Canario's black facial mask is a defining trait on fawn and brindle dogs, stopping cleanly at or below the eye line.",
    "Although imposing outdoors, a well-raised Presa Canario is known for a deep, selective bark and a calm, quiet presence inside its own home."
  ],

  faq: [
    {
      question: "What is the difference between a Presa Canario and a Dogo Canario?",
      answer:
        "They are the exact same breed. It was known internationally as the 'Dogo Canario' for several years before its historical 'Presa Canario' name was restored."
    },
    {
      question: "How big does a Perro de Presa Canario get?",
      answer:
        "Adult males stand 60 to 66 cm at the shoulder and weigh 50 to 65 kg, while adult females stand 56 to 62 cm and weigh 40 to 55 kg."
    },
    {
      question: "How long does a Perro de Presa Canario live?",
      answer:
        "With lean weight management, joint protection, and preventive veterinary care, the breed typically lives 9 to 11 years."
    },
    {
      question: "Is a Presa Canario suitable for first-time dog owners or apartments?",
      answer:
        "No. Its size, physical power, and strong territorial instincts require an experienced handler and a home with a spacious, securely fenced yard."
    },
    {
      question: "Are Presa Canarios good with other dogs and strangers?",
      answer:
        "They are naturally suspicious of strangers and often assertive or intolerant toward unfamiliar dogs, especially of the same sex. Early, thorough socialization and responsible management are essential."
    },
    {
      question: "What health screenings should breeders perform?",
      answer:
        "Conscientious breeders prioritize hip and elbow dysplasia X-rays along with veterinary cardiac and eye examinations."
    }
  ],

  references: [
    "fci-presa-canario-official-standard",
    "fci-presa-canario-nomenclature",
    "rsce-presa-canario-standard",
    "akc-presa-canario-breed-profile",
    "ukc-presa-canario-breed-standard",
    "ofa-presa-canario-chic-requirements",
    "natureserve-canis-lupus-familiaris",
    "wikimedia-perro-de-presa-canario-lilly-m",
    "the-dog-api"
  ],

  evidence: {
    scientificName: {
      reliability: "reliable_source",
      sources: [
        {
          id: "natureserve-canis-lupus-familiaris",
          role: "verified",
          locator: "Species taxonomy record: Canis lupus familiaris"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Domestic dog subspecies taxonomy."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-presa-canario-nomenclature",
          role: "verified",
          locator: "PRESA CANARIO (346); renamed from Dogo Canario effective 2019-01-01"
        },
        {
          id: "akc-presa-canario-breed-profile",
          role: "verified",
          locator: "Presa Canario (renamed from Perro de Presa Canario in FSS January 2024); Canary Dog"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names: Presa Canario, Dogo Canario, Canary Mastiff"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-presa-canario-nomenclature",
          role: "verified",
          locator: "Group 2 Pinscher and Schnauzer - Molossoid and Swiss Mountain and Cattledogs; Section 2.1 Mastiff type Molossoids, without working trial"
        },
        {
          id: "ukc-presa-canario-breed-standard",
          role: "verified",
          locator: "Guardian Dog Group"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group: Working"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "User-facing group text avoids registry numbers and group titles."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-presa-canario-nomenclature",
          role: "verified",
          locator: "Country of origin: Spain"
        },
        {
          id: "fci-presa-canario-official-standard",
          role: "verified",
          locator: "Origin: Spain (Canary Islands: Tenerife and Gran Canaria)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: Canary Islands, Spain"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-presa-canario-official-standard",
          role: "verified",
          locator: "Proportions, gait, coat, black mask, and guarding/cattle-herding temperament (2023-10-05 revision)"
        },
        {
          id: "akc-presa-canario-breed-profile",
          role: "verified",
          locator: "About the breed and history (15th–16th century holding dogs, name change)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "All user-facing overview prose is newly written in original wording."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-presa-canario-official-standard",
          role: "verified",
          locator: "Proportions (60:40 skull-foreface), lips (inverted V), tail (sabre in action; cropped tail disqualifying), coat, colours (fawn/brindle with black mask not above eyes; >20% white disqualifying; 2023-10-05 revision)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "GET /breeds/{id}/colours"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Coat colors strictly follow FCI Standard No. 346 (fawn and brindle with black mask, white up to 20%); generic colors from The Dog API are excluded. Pincer bite is listed as a fault in the 2023 FCI revision."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-presa-canario-official-standard",
          role: "verified",
          locator: "Height at the withers: Males 60–66 cm; Females 56–62 cm"
        },
        {
          id: "akc-presa-canario-breed-profile",
          role: "cited",
          locator: "Height: 22–26 inches"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric: Males 58–66 cm; Females 56–64 cm"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Exact FCI Standard No. 346 height values in cm (60–66 cm / 56–62 cm); The Dog API lists 58–66 cm / 56–64 cm."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-presa-canario-official-standard",
          role: "verified",
          locator: "Weight: Males 50–65 kg; Females 40–55 kg"
        },
        {
          id: "akc-presa-canario-breed-profile",
          role: "cited",
          locator: "Weight: 84–110 pounds"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.weight.metric: Males 50–59 kg; Females 39–50 kg"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Exact FCI Standard No. 346 weight values in kg (50–65 kg / 40–55 kg); The Dog API lists 50–59 kg / 39–50 kg."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-presa-canario-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 9–11 years"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span: 9–11 years"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Both AKC profile and The Dog API report 9–11 years."
    },

    "physical.sheddingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-presa-canario-official-standard",
          role: "verified",
          locator: "Short, coarse, flat single coat with no undercoat"
        },
        {
          id: "akc-presa-canario-breed-profile",
          role: "verified",
          locator: "Moderate shedding rating"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-presa-canario-official-standard",
          role: "verified",
          locator: "Upper lip pendulous, although not excessively"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-presa-canario-official-standard",
          role: "verified",
          locator: "Behaviour/Temperament: severe look, balanced, self-confident, low deep bark, docile with family, suspicious of strangers"
        },
        {
          id: "akc-presa-canario-breed-profile",
          role: "verified",
          locator: "Strong-willed, confident, calm; not recommended for young children or unfamiliar dogs"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-presa-canario-breed-profile",
          role: "cited",
          locator: "Breed trait ratings"
        }
      ],
      verifiedOn: null,
      note: "Editorial 1–5 scores reflecting strong territorial protectiveness, low stranger/dog sociability, and calm indoor demeanor."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-presa-canario-breed-profile",
          role: "cited",
          locator: "Grooming, exercise, and nutrition guidance"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.exercise.level": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-presa-canario-official-standard",
          role: "verified",
          locator: "Agile, supple working guardian and cattle-herding dog"
        },
        {
          id: "akc-presa-canario-breed-profile",
          role: "verified",
          locator: "Daily walks, fenced play, and structured activities"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-presa-canario-breed-profile",
          role: "cited",
          locator: "Daily exercise needs for large working mastiffs"
        }
      ],
      verifiedOn: null,
      note: "Estimated 60–90 minutes of structured daily physical and mental work."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-presa-canario-breed-profile",
          role: "cited",
          locator: "Large size, territorial vigilance, and fenced yard recommendation"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-presa-canario-breed-profile",
          role: "verified",
          locator: "Fenced backyard play recommendation"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-presa-canario-official-standard",
          role: "verified",
          locator: "Canary Islands origin; short single coat with no undercoat"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-presa-canario-breed-profile",
          role: "cited",
          locator: "Family-devoted guardian temperament"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-presa-canario-breed-profile",
          role: "cited",
          locator: "Age-appropriate high-quality diet and weight monitoring"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-presa-canario-breed-profile",
          role: "verified",
          locator: "Health: generally healthy breed; life expectancy 9–11 years"
        },
        {
          id: "ofa-presa-canario-chic-requirements",
          role: "cited",
          locator: "OFA orthopedic/cardiac/eye disease tracking for Presa Canario"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "AKC notes no mandatory national club CHIC panel is currently listed; orthopedic, cardiac, and eye evaluations are recommended large-mastiff precautions."
    },

    "health.commonConditions": {
      reliability: "general_guidance",
      sources: [
        {
          id: "ofa-presa-canario-chic-requirements",
          role: "cited",
          locator: "OFA disease statistics for Presa Canario (hip/elbow evaluations)"
        },
        {
          id: "akc-presa-canario-breed-profile",
          role: "cited",
          locator: "Large working mastiff health considerations"
        }
      ],
      verifiedOn: null,
      note: "Reflects OFA-tracked orthopedic conditions and general large deep-chested mastiff risks."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-presa-canario-breed-profile",
          role: "cited",
          locator: "Weight control, grooming, nail/ear/dental care"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "general_guidance",
      sources: [
        {
          id: "ofa-presa-canario-chic-requirements",
          role: "cited",
          locator: "OFA orthopedic, cardiac, and eye screening programs"
        }
      ],
      verifiedOn: null,
      note: "Recommended veterinary pre-breeding screenings for a heavy-boned mastiff breed (no mandatory AKC national club CHIC panel currently listed)."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-presa-canario-breed-profile",
          role: "cited",
          locator: "Regular tooth brushing"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-presa-canario-breed-profile",
          role: "cited",
          locator: "Regular ear checks to avoid wax and debris buildup"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-presa-canario-official-standard",
          role: "cited",
          locator: "Short single coat and double dewlap"
        }
      ],
      verifiedOn: null,
      note: null
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-presa-canario-breed-profile",
          role: "cited",
          locator: "Not recommended for young children or unfamiliar dogs; strong-willed guardian"
        }
      ],
      verifiedOn: null,
      note: "Updated familiesWithChildren to false to align with AKC Marketplace 'Good with Children: Not Recommended' and intense guardian temperament."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-presa-canario-nomenclature",
          role: "verified",
          locator: "Name restored from Dogo Canario to Presa Canario effective 2019-01-01"
        },
        {
          id: "fci-presa-canario-official-standard",
          role: "verified",
          locator: "Black mask not spreading above eye level; low deep bark"
        },
        {
          id: "akc-presa-canario-breed-profile",
          role: "verified",
          locator: "Canary Islands catch dog heritage"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-presa-canario-official-standard",
          role: "verified",
          locator: "Height (60–66 cm / 56–62 cm), weight (50–65 kg / 40–55 kg), and temperament"
        },
        {
          id: "fci-presa-canario-nomenclature",
          role: "verified",
          locator: "Presa Canario / Dogo Canario name restoration"
        },
        {
          id: "akc-presa-canario-breed-profile",
          role: "verified",
          locator: "Lifespan (9–11 years) and temperament/socialization profile"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "All FAQ entries are written in original prose without source or registry names."
    }
  },

  updatedOn: "2026-11-26"
};
