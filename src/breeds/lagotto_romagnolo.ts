import type { Breed } from "../schema/breed.types";

export const lagotto_romagnolo: Breed = {
  slug: "lagotto-romagnolo",
  name: "Lagotto Romagnolo",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Romagna Water Dog",
    "Italian Water Dog",
    "Chien d'Eau Romagnol",
    "Lagotto"
  ],

  group: "Curly-coated water and truffle-searching dog",

  origin: {
    country: "Italy",
    region:
      "Romagna sub-region of Emilia-Romagna, historically the lowlands of Comacchio and marshlands of Ravenna"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lagotto-romagnolo.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Lagotto-romagnolo.jpg",
      title: "Lagotto-romagnolo.jpg",
      description:
        "An adult Lagotto Romagnolo outdoors displaying its dense, tightly curled coat.",
      creator: "XTY78",
      uploader: "XTY78",
      capturedOn: "2021-11-11",
      uploadedOn: "2021-11-11",
      width: 4032,
      height: 3024,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by XTY78, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Lagotto-romagnolo.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/.",
      restrictions:
        "CC BY-SA 4.0 requires attribution and ShareAlike distribution if adapted.",
      metadataCheckedOn: "2026-11-26"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lagotto_Romagnolo.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Lagotto_Romagnolo.jpg",
      title: "Lagotto Romagnolo.jpg",
      description:
        "A close-up portrait of a nine-month-old male Lagotto Romagnolo showing woolly curls and facial furnishings.",
      creator: "Sandra Schmidt",
      uploader: "Caronna",
      capturedOn: "2005-05-30",
      uploadedOn: "2006-05-14",
      width: 450,
      height: 425,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Sandra Schmidt, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Lagotto_Romagnolo.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/.",
      restrictions:
        "CC BY-SA 3.0 requires attribution and ShareAlike distribution if adapted (also dual-licensed under GFDL).",
      metadataCheckedOn: "2026-11-26"
    }
  ],

  overview: {
    summary:
      "A sturdy, curly-coated Italian water dog reshaped into a dedicated truffle-searching specialist, prized for its keen nose, low-shedding woolly curls, and affectionate, trainable nature.",

    description:
      "Compact, rustic, and solidly muscled, the Lagotto Romagnolo has a nearly square body wrapped head to tail in tight, woolly ringlets backed by a water-repellent undercoat. Thick eyebrows, whiskers, and a beard frame large, rounded eyes that carry an alert, earnest look. Generations of focused breeding for scent work dialed back the breed's urge to chase wildlife, leaving an eager worker that stays locked onto underground odors rather than game trails. Indoors, the Lagotto is warm, adaptable, and deeply bonded to its people, acting as an attentive watchdog without heavy guarding aggression.",

    history:
      "Water-retrieving dogs of this rustic curly-coated type worked for centuries across the marshes of Ravenna and the lowlands of Comacchio in Italy's Romagna region, where local dialect called them 'càn lagòt'—marsh water dogs. When wide-scale drainage projects converted those wetlands into farmland during the late nineteenth century, waterfowl retrieving faded away. Local handlers redirected the breed's remarkable scenting ability toward locating buried truffles in the woods and hills of Romagna. Dedicated Italian preservation work in the late twentieth century stabilized the population and established the Lagotto Romagnolo worldwide as a dedicated truffle-hunting breed.",

    originalPurpose:
      "Retrieving waterfowl in the marshes of Romagna, later specialized for locating underground truffles",

    currentRoles: [
      "Truffle-searching specialist",
      "Nosework, tracking, agility, and obedience competitor",
      "Alert household watchdog",
      "Affectionate family companion"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 43,
        max: 48
      },
      female: {
        min: 41,
        max: 46
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 13,
        max: 16
      },
      female: {
        min: 11,
        max: 14
      }
    },

    lifespanYears: {
      min: 15,
      max: 17
    },

    coatType:
      "Dense, woolly, tightly curled coat with a waterproof undercoat; grows continuously without heavy seasonal shedding and covers the body, head, and tail evenly",

    coatLength: "Medium",

    coatColors: [
      "Off-white solid",
      "White with brown or orange patches",
      "Brown roan",
      "Solid brown (various shades) with or without white",
      "Solid orange with or without white"
    ],

    sheddingLevel:
      "Low; the continuous-growing curly coat traps loose hairs inside the curls until brushed or clipped",

    droolingLevel:
      "Low; neat, fairly tight lips framed by a bristly moustache keep drooling minimal",

    distinctiveFeatures: [
      "Rustic, solidly built, nearly square frame with strong bone and deep chest",
      "Tight, ring-shaped woolly curls paired with dense eyebrows, whiskers, and beard",
      "Trapezoidal head with slightly diverging skull and muzzle planes",
      "Large, rounded eyes ranging from ochre to dark brown with expressive lashes",
      "Medium triangular drop ears with rounded tips and hair growing inside the ear leather",
      "Strong jaws with a scissor, pincer, or slightly reverse scissor bite",
      "Compact, webbed paws suited for both swimming and digging in soft woodland soil",
      "Scimitar-shaped tail tapering toward the tip, carried higher when alert without curling tightly over the back"
    ]
  },

  temperament: {
    traits: [
      "Eager to learn, biddable, and responsive to gentle training",
      "Warm, loyal, and closely attached to family members",
      "Alert and vocal enough to serve as a reliable watchdog",
      "Intensely driven to sniff, search, and dig when given a task",
      "Minimal wildlife chase instinct compared with most sporting dogs",
      "Polite yet slightly reserved with unfamiliar visitors",
      "Generally friendly with other dogs and household pets when socialized early"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 3,
      independence: 2,
      trainability: 5,
      barking: 3,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; an energetic scent-working dog that needs daily physical movement paired with mental and olfactory challenges",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Daily brisk walks and woodland trail outings",
        "Scent games, hide-and-seek nosework, and amateur truffle searching",
        "Swimming and water play in safe locations",
        "Agility, rally, and obedience training",
        "Approved digging enrichment in a dedicated yard sandbox"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Comb and brush thoroughly at least once a week down to the skin to keep dense curls from felting into mats.",

      bathing:
        "Bathe every four to six weeks with a gentle dog shampoo; towel blot and air dry so the natural tight ringlets reform cleanly.",

      notes: [
        "Clip the entire coat down at least once a year, or maintain a tidy rustic trim every two to three months so curls stay manageable.",
        "Keep hair trimmed around the eyes for clear sightlines and around sanitary areas for cleanliness.",
        "Check the drop ears weekly and carefully clear excess hair from the ear canal to improve airflow and help prevent infections.",
        "Rinse and inspect webbed paws for burrs, twigs, or packed mud after outdoor adventures.",
        "Trim nails every two to three weeks and brush teeth several times a week."
      ]
    },

    training: {
      difficulty:
        "Easy; bright, eager to cooperate, and quick to pick up cues when trained with upbeat positive methods",

      tips: [
        "Use reward-based sessions with food treats, praise, and play rather than harsh corrections.",
        "Give natural sniffing and digging instincts structured outlets such as scent boxes or nosework drills.",
        "Vary training routines so this clever dog stays engaged and motivated.",
        "Practice calm greetings and novel-environment confidence early so watchdog reserve stays poised rather than timid."
      ],

      socialization:
        "Start calm, positive socialization early with unfamiliar people, children, vaccinated dogs, traffic, and varied surfaces. Steady exposure helps the puppy mature into an assured, adaptable adult."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Well suited to temperate climates",
        "Handles cool and damp weather well thanks to its dense, waterproof curls and undercoat",
        "Comfortable in warm weather when kept clipped short with shade, water, and indoor cooling"
      ],

      aloneTimeTolerance:
        "Low to moderate; thrives on human company and may bark or dig out of boredom if left alone for long stretches."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced diet formulated for active medium-sized dogs, tailored to age and daily activity level",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until about six months of age.",
      adult:
        "Two measured meals per day for steady energy and comfortable digestion.",
      senior:
        "Two portion-controlled meals daily adjusted for lower calorie burn and joint comfort."
    },

    guidelines:
      "Weigh or measure rations carefully and feel under the thick curls regularly to confirm ribs remain easily felt beneath a light covering of fat. Split daily intake into two meals and keep fresh water available at all times.",

    considerations: [
      "Check body condition by hand because dense curls can conceal gradual weight gain.",
      "Count training treats within the daily calorie budget.",
      "Wipe the beard and moustache after meals and drinking to prevent dampness and odor.",
      "Avoid rich, fatty table scraps and transition new diets slowly over five to seven days."
    ],

    note:
      "Adjust portions with a veterinarian's guidance if the dog participates in heavy field work, swimming, or canine sports."
  },

  health: {
    overview:
      "The Lagotto Romagnolo is a resilient, long-lived breed with a typical life expectancy of 15 to 17 years. Two inherited autosomal recessive neurological conditions have been genetically identified in the breed and can be prevented through DNA screening of breeding parents: Benign Familial Juvenile Epilepsy (BFJE, linked to an LGI2 truncation) and Lagotto Storage Disease (LSD, linked to an ATG4D missense variant). Other health priorities include hip dysplasia, patellar luxation, hereditary eye conditions, and recurrent ear infections promoted by hair inside the ear canal.",

    commonConditions: [
      "Benign Familial Juvenile Epilepsy (BFJE) — an established autosomal recessive condition caused by an LGI2 gene truncation, producing focal seizures in puppies starting around 5 to 7 weeks of age that typically remit by about 4 months; preventable via DNA testing",
      "Lagotto Storage Disease (LSD) — an established, fatal autosomal recessive neurodegenerative vacuolar storage disorder caused by an ATG4D gene missense variant (c.1288G>A), leading to progressive loss of coordination and behavioral changes; preventable via DNA testing",
      "Hip dysplasia — developmental malformation of the hip joints that can progress to arthritis, monitored through pre-breeding X-rays",
      "Patellar luxation — intermittent slipping of the kneecap evaluated through orthopedic examination",
      "Hereditary eye disorders — cataracts and other ocular conditions monitored through annual veterinary ophthalmologist exams",
      "Otitis externa (ear infections) — moisture and dense hair inside the drop ear canal can trap wax and promote bacterial or yeast buildup without routine care"
    ],

    preventiveCare: [
      "Confirm that breeding parents have documented DNA clearances for BFJE and LSD, radiographic hip evaluations, patellar luxation checks, and specialist eye exams.",
      "Inspect ears weekly, manage excess ear-canal hair gently, and dry ears thoroughly after swimming or bathing.",
      "Maintain a lean, athletic weight throughout life to protect hips and knees.",
      "Schedule annual veterinary wellness exams, parasite prevention, and dental checkups."
    ],

    recommendedScreenings: [
      "Benign Familial Juvenile Epilepsy (BFJE / LGI2) DNA test",
      "Lagotto Storage Disease (LSD / ATG4D) DNA test",
      "Radiographic hip dysplasia evaluation prior to breeding",
      "Orthopedic patellar luxation evaluation",
      "Annual eye examination by a veterinary ophthalmologist"
    ],

    dentalCare:
      "Brush teeth several times a week using canine enzymatic toothpaste and arrange periodic veterinary dental checks to keep gums healthy.",

    earCare:
      "Check the drop ears weekly for redness, odor, or wax. Gently clear excess hair growing inside the ear canal and clean with a veterinarian-approved ear wash as needed.",

    skinCare:
      "Part the dense curls down to the skin during weekly brushing to catch early tangles, burrs, or skin irritation, and make sure the undercoat dries completely after baths or swims."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Active owners and families wanting an affectionate, quick-learning companion",
      "People who prefer a low-shedding curly coat (keeping in mind no dog is completely allergen-free)",
      "Handlers interested in nosework, tracking, agility, or recreational truffle hunting",
      "Apartment or house dwellers able to provide daily walks, mental games, and regular grooming"
    ],

    notIdealFor: [
      "Owners unwilling to budget time or money for weekly combing and regular coat clipping",
      "Sedentary households wanting a low-energy lap dog with minimal enrichment needs",
      "Homes where the dog will be left alone for long workdays without companionship",
      "Anyone seeking an imposing personal protection or guard dog"
    ]
  },

  funFacts: [
    "The Lagotto Romagnolo is widely recognized as the only purebred dog specialized specifically for truffle hunting.",
    "Its name comes from the Romagnolo dialect expression 'càn lagòt', referring to a curly-coated marsh or water dog.",
    "After nineteenth-century drainage projects turned the Ravenna marshes into farmland, local handlers shifted the breed from retrieving waterfowl to hunting prized underground truffles.",
    "Generations of selective breeding for truffle searching dialed back the breed's game-chasing drive so working dogs stay focused on subterranean scent.",
    "Despite a teddy-bear look, the Lagotto is a rugged, long-lived worker that commonly reaches 15 to 17 years of age."
  ],

  faq: [
    {
      question: "How big does a Lagotto Romagnolo get?",
      answer:
        "Adult males stand 43 to 48 cm at the shoulder and weigh 13 to 16 kg, while adult females stand 41 to 46 cm and weigh 11 to 14 kg."
    },
    {
      question: "How long does a Lagotto Romagnolo live?",
      answer:
        "The breed is notably long-lived, with a typical life expectancy of 15 to 17 years."
    },
    {
      question: "Do Lagotto Romagnolos shed much, and what grooming do they need?",
      answer:
        "They shed very little because loose hairs stay caught in their dense curls. However, their continuous-growing coat requires weekly combing to prevent mats and a full clip at least once a year."
    },
    {
      question: "Can a Lagotto Romagnolo live in an apartment?",
      answer:
        "Yes. Their compact medium size and adaptable nature suit apartment life well as long as they receive 45 to 60 minutes of daily exercise plus mental scent games."
    },
    {
      question: "Do Lagotto Romagnolos have a strong prey drive?",
      answer:
        "Generally no. Selective breeding for truffle searching reduced their urge to chase wildlife, though basic recall training is still important outdoors."
    },
    {
      question: "What are BFJE and Lagotto Storage Disease (LSD)?",
      answer:
        "Benign Familial Juvenile Epilepsy (BFJE) is an inherited puppyhood seizure disorder that usually resolves by about four months of age, while Lagotto Storage Disease (LSD) is a serious, progressive inherited neurological condition. Both are autosomal recessive and can be avoided through DNA testing of breeding parents."
    },
    {
      question: "What health screenings should breeders complete?",
      answer:
        "Recommended pre-breeding tests include DNA screening for BFJE and LSD, hip dysplasia X-rays, patellar luxation exams, and annual veterinary ophthalmologist eye checks."
    }
  ],

  references: [
    "fci-lagotto-romagnolo-official-standard",
    "fci-lagotto-romagnolo-nomenclature",
    "akc-lagotto-romagnolo-breed-standard",
    "akc-lagotto-romagnolo-breed-profile",
    "dogs-australia-lagotto-romagnolo-standard",
    "lrca-lagotto-romagnolo-health",
    "ofa-lagotto-romagnolo-chic-requirements",
    "lagotto-romagnolo-bfje-lgi2-study",
    "lagotto-romagnolo-lsd-atg4d-study-2015",
    "natureserve-canis-lupus-familiaris",
    "wikimedia-lagotto-romagnolo-xty78",
    "wikimedia-lagotto-romagnolo-sandra-schmidt",
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
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "Standard heading: LAGOTTO ROMAGNOLO (Romagna Water Dog)"
        },
        {
          id: "fci-lagotto-romagnolo-nomenclature",
          role: "verified",
          locator: "French official name: CHIEN D'EAU ROMAGNOL"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names: Romagna Water Dog, Italian Water Dog, Lagotto"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lagotto-romagnolo-nomenclature",
          role: "verified",
          locator: "Group 8 Retrievers - Flushing Dogs - Water Dogs, Section 3 Water Dogs (working trial only for countries that requested it)"
        },
        {
          id: "akc-lagotto-romagnolo-breed-standard",
          role: "verified",
          locator: "Sporting Group"
        },
        {
          id: "dogs-australia-lagotto-romagnolo-standard",
          role: "verified",
          locator: "Group 3 (Gundogs)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group: Sporting"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "User-facing group text avoids registry numbers and group titles."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "Origin: Italy; Romagna marshlands of Ravenna and lowlands of Comacchio"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: Romagna region, Italy"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "General appearance, history, utilization, coat, and temperament (2026-10-02 revision)"
        },
        {
          id: "akc-lagotto-romagnolo-breed-profile",
          role: "verified",
          locator: "About the breed: curly coat, truffle-searching heritage, rugged worker"
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
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "Proportions, head, tail, coat, accepted colours, and disqualifying faults (black coat/patches/pigmentation disqualified; 2026-10-02 revision)"
        },
        {
          id: "dogs-australia-lagotto-romagnolo-standard",
          role: "verified",
          locator: "Conformation, coat, and bite"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "GET /breeds/{id}/colours"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Coat colors follow the official FCI standard; generic colors from The Dog API (such as black, blue, brindle, merle) are excluded because black coat/patches are disqualifying in FCI Standard No. 298."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "Height at the withers: Males 43–48 cm (ideal 46 cm); Females 41–46 cm (ideal 43 cm); tolerance ±1 cm"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric: Males 43–48 cm; Females 41–46 cm"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Exact FCI Standard No. 298 values in cm (matches The Dog API)."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "Weight: Males 13–16 kg; Females 11–14 kg"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.weight.metric: Males 13–16 kg; Females 11–14 kg"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Exact FCI Standard No. 298 values in kg (matches The Dog API)."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "lrca-lagotto-romagnolo-health",
          role: "verified",
          locator: "Health Information: life expectancy of 15 to 17 years"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified from the Lagotto Romagnolo Club of America (The Dog API omitted lifespan)."
    },

    "physical.sheddingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "Coat: dense woolly curls that do not shed naturally"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "Lips: rather tight, covered with bristly moustache"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "Behaviour/Temperament: tractable, undemanding, keen, affectionate, very attached to owner, easy to train, good watchdog"
        },
        {
          id: "dogs-australia-lagotto-romagnolo-standard",
          role: "verified",
          locator: "Modified hunting instinct for truffle work"
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
          id: "fci-lagotto-romagnolo-official-standard",
          role: "cited",
          locator: "Temperament traits"
        }
      ],
      verifiedOn: null,
      note: "Editorial 1–5 ratings grounded in official breed temperament descriptions."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "lrca-lagotto-romagnolo-health",
          role: "cited",
          locator: "Coat care, ear care, and exercise guidance"
        },
        {
          id: "akc-lagotto-romagnolo-breed-profile",
          role: "cited",
          locator: "Grooming, training, and activity guidance"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.exercise.level": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "Utilization: truffle-searching working dog"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-lagotto-romagnolo-breed-profile",
          role: "cited",
          locator: "Daily physical and scent-work exercise needs"
        }
      ],
      verifiedOn: null,
      note: "Estimated 45–60 minutes of daily exercise plus mental enrichment."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-lagotto-romagnolo-breed-profile",
          role: "cited",
          locator: "Medium size and adaptable indoor disposition"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-lagotto-romagnolo-breed-profile",
          role: "verified",
          locator: "Active outdoor and scent-work lifestyle"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "Dense, curly, waterproof coat and undercoat"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "cited",
          locator: "Very attached to owner"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-lagotto-romagnolo-breed-profile",
          role: "cited",
          locator: "Balanced medium-breed diet"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "lagotto-romagnolo-bfje-lgi2-study",
          role: "verified",
          locator: "PLoS Genet 2011;7(7):e1002194 (PMID 21829378): LGI2 truncation causing remitting focal juvenile epilepsy"
        },
        {
          id: "lagotto-romagnolo-lsd-atg4d-study-2015",
          role: "verified",
          locator: "PLoS Genet 2015;11(4):e1005169 (PMID 25875846): ATG4D missense variant (c.1288G>A; p.A430T) causing Lagotto Storage Disease"
        },
        {
          id: "lrca-lagotto-romagnolo-health",
          role: "verified",
          locator: "Life expectancy (15–17 years) and breed health overview"
        },
        {
          id: "ofa-lagotto-romagnolo-chic-requirements",
          role: "verified",
          locator: "LRCA / OFA CHIC screening requirements"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Distinguishes genetically established BFJE (LGI2) and LSD (ATG4D) disorders from orthopedic, ocular, and ear-canal care concerns."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "lagotto-romagnolo-bfje-lgi2-study",
          role: "verified",
          locator: "BFJE onset (~7 weeks) and remission (~4 months), LGI2 truncation"
        },
        {
          id: "lagotto-romagnolo-lsd-atg4d-study-2015",
          role: "verified",
          locator: "LSD neurodegeneration, ATG4D c.1288G>A in >2,300 Lagotto Romagnolo cohort"
        },
        {
          id: "ofa-lagotto-romagnolo-chic-requirements",
          role: "verified",
          locator: "Hip dysplasia, patellar luxation, and eye evaluations"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "lrca-lagotto-romagnolo-health",
          role: "cited",
          locator: "Pre-breeding testing and routine preventive care"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-lagotto-romagnolo-chic-requirements",
          role: "verified",
          locator: "CHIC screening panel: Hip Dysplasia, Patellar Luxation, Eye/CAER, BFJE DNA, LSD DNA"
        },
        {
          id: "lagotto-romagnolo-bfje-lgi2-study",
          role: "verified",
          locator: "Genetic basis of LGI2 BFJE DNA test"
        },
        {
          id: "lagotto-romagnolo-lsd-atg4d-study-2015",
          role: "verified",
          locator: "Genetic basis of ATG4D LSD DNA test"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "cited",
          locator: "Jaws/teeth: strong jaws, scissor, pincer, or slightly reverse scissor bite"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "cited",
          locator: "Ears: triangular drop ears with inner hair growth"
        },
        {
          id: "lrca-lagotto-romagnolo-health",
          role: "cited",
          locator: "Ear canal hygiene"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "cited",
          locator: "Dense, continuously growing woolly coat"
        }
      ],
      verifiedOn: null,
      note: null
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "cited",
          locator: "Tractable, affectionate companion and working traits"
        }
      ],
      verifiedOn: null,
      note: "Editorial suitability ratings based on size, coat care, and mental stimulation needs."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "Romagna marshlands history, transition to truffle searching, modified hunting instinct"
        },
        {
          id: "lrca-lagotto-romagnolo-health",
          role: "verified",
          locator: "15–17 year life expectancy"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "Height (43–48 cm / 41–46 cm), weight (13–16 kg / 11–14 kg), coat, and temperament"
        },
        {
          id: "lrca-lagotto-romagnolo-health",
          role: "verified",
          locator: "Lifespan (15–17 years) and health overview"
        },
        {
          id: "lagotto-romagnolo-bfje-lgi2-study",
          role: "verified",
          locator: "BFJE (LGI2) juvenile remitting epilepsy"
        },
        {
          id: "lagotto-romagnolo-lsd-atg4d-study-2015",
          role: "verified",
          locator: "LSD (ATG4D) storage disease"
        },
        {
          id: "ofa-lagotto-romagnolo-chic-requirements",
          role: "verified",
          locator: "Recommended pre-breeding screenings"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "All FAQ entries are written in original prose without registry or source names."
    }
  },

  updatedOn: "2026-11-26"
};
