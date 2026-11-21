import type { Breed } from "../schema/breed.types";

export const spanish_mastiff: Breed = {
  slug: "spanish-mastiff",
  name: "Spanish Mastiff",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Mastín Español",
    "Mastín Leonés",
    "Mastín Extremeño",
    "Mastín de la Mancha",
    "Mastín Castellano"
  ],

  group: "Mountain-Type Molossoid (Livestock Guardian and Working Dog)",

  origin: {
    country: "Spain",
    region: "Iberian Peninsula (Castile and León, Extremadura, Asturias, and historic Mesta transhumance routes)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mast%C3%ADn_espa%C3%B1ol.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Mast%C3%ADn_espa%C3%B1ol.jpg",
      title: "Mastín español.jpg",
      description:
        "An adult Spanish Mastiff photographed at a dog exhibition in Jerez de la Frontera, Spain.",
      creator: "Antonio M. Romero Dorado",
      uploader: "AMRD",
      capturedOn: "2007-11-17",
      uploadedOn: "2007-12-01",
      width: 1024,
      height: 657,
      licenseId: "public-domain",
      attribution:
        "Photo by Antonio M. Romero Dorado, Wikimedia Commons, Public Domain. Source: https://commons.wikimedia.org/wiki/File:Mast%C3%ADn_espa%C3%B1ol.jpg.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mast%C3%ADn_espa%C3%B1ol_de_trabajo,_Castilla.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Mast%C3%ADn_espa%C3%B1ol_de_trabajo,_Castilla.jpg",
      title: "Mastín español de trabajo, Castilla.jpg",
      description:
        "A working Spanish Mastiff guarding sheep outdoors in Castile, Spain.",
      creator: "Vicente Rojan",
      uploader: "Contiqui",
      capturedOn: "2017-03-21",
      uploadedOn: "2017-03-21",
      width: 960,
      height: 720,
      licenseId: "cc0-1.0",
      attribution:
        "Photo by Vicente Rojan, Wikimedia Commons, CC0 1.0 Universal Public Domain Dedication. Source: https://commons.wikimedia.org/wiki/File:Mast%C3%ADn_espa%C3%B1ol_de_trabajo,_Castilla.jpg. License: https://creativecommons.org/publicdomain/zero/1.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    }
  ],

  overview: {
    summary:
      "A giant, rustic Spanish livestock guardian known for its massive bone structure, abundant loose throat skin with a pronounced double dewlap, deep booming bark, and calm yet fearless defense of flocks and property.",

    description:
      "The Spanish Mastiff is an immense, powerfully muscled mountain guardian built slightly longer than tall, pairing heavy skeletal mass with flexible, balanced movement at a strong trot. Its dense, coarse, semi-long double coat covers thick, loose skin that forms a broad double dewlap along the neck. The large, truncated-pyramidal head has a slightly arched broad skull, a gentle stop, a wide straight muzzle in a 3:2 skull-to-muzzle ratio, and pendulous upper lips with black-pigmented gums and palate. Small dark hazel eyes set in thick black eyelids carry a quiet, noble expression that turns stern toward intruders, while medium triangular drop ears hang close to the cheeks. Calm, affectionate, and patient with its own family and livestock, the breed stands unwaveringly firm when defending its territory against predators or trespassers.",

    history:
      "Rooted in the ancient pastoral life of the Iberian Peninsula, the ancestors of the Spanish Mastiff arrived more than two millennia ago through early Mediterranean trade and developed alongside local herding stock. From the Middle Ages onward, the breed became inseparable from the Mesta, Spain's powerful association of sheep ranchers that moved vast Merino flocks seasonally between northern mountain pastures and southern lowlands. Wearing heavy spiked iron collars known as carlancas to protect their necks from wolf bites, these dogs guarded migrating herds and remote estates across Castile, León, and Extremadura. After traditional long-distance transhumance declined in the twentieth century, dedicated breeders and national clubs established formal breeding and health programs to preserve the breed's rustic build and working character.",

    originalPurpose:
      "Defending migrating and stationary flocks of Merino sheep and other livestock against wolves, predators, and thieves across Spanish pastures.",

    currentRoles: [
      "Working livestock guardian for sheep, goats, and cattle",
      "Rural farm, ranch, and estate protector",
      "Calm, devoted companion for experienced owners with ample fenced land"
    ]
  },

  physical: {
    sizeCategory: "Giant",

    height: {
      unit: "cm",
      male: {
        min: 77,
        max: 89
      },
      female: {
        min: 72,
        max: 84
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 64,
        max: 100
      },
      female: {
        min: 50,
        max: 77
      }
    },

    lifespanYears: {
      min: 10,
      max: 12
    },

    coatType:
      "Dense, coarse, straight, semi-long double coat with thicker protective hair along the ribs and flanks, shorter hair on the legs, longer silky feathering on the tail, and thick loose skin forming a prominent double dewlap.",

    coatLength: "Medium",

    coatColors: [
      "Fawn",
      "Yellow",
      "Red",
      "Black",
      "Wolf-grey",
      "Deer-red",
      "Brindle",
      "Pied / Particolour",
      "White-marked"
    ],

    sheddingLevel:
      "Moderate year-round with heavy seasonal undercoat shedding in spring and autumn",

    droolingLevel:
      "High; loose, pendulous lips and wide lip corners lead to frequent drooling, especially after drinking, eating, or in warm weather",

    distinctiveFeatures: [
      "Colossal, rustic giant build slightly longer than tall, combining heavy bone with agile trotting movement",
      "Minimum height at the withers of 77 cm in males (commonly exceeding 80 cm, up to 89 cm) and 72 cm in females (commonly exceeding 75 cm, up to 84 cm), with no formal upper ceiling",
      "Mature weight typically 64 to 100 kg in males and 50 to 77 kg in females",
      "Thick, elastic, loose skin forming a generous double dewlap under the throat",
      "Massive truncated-pyramidal head with a broad, slightly convex skull, gentle stop, and 3:2 skull-to-muzzle ratio",
      "Pendulous upper lips covering the lower lip, black-pigmented gums, and a black palate with pronounced ridges",
      "Strong scissor bite with complete premolars and large canines",
      "Small, dark hazel eyes framed by thick black eyelids, with the lower lid revealing a small portion of the conjunctiva",
      "Medium-sized, flat, triangular drop ears set above eye level and hanging naturally beside the cheeks",
      "Broad, deep, muscular chest with rounded ribs and a level topline",
      "Thick, heavily feathered tail reaching to the hocks, carried low at rest and lifted in a sabre curve with a slight tip curl when alert",
      "Large, tight cat-like feet with hair between the toes; hind legs may carry single or double dewclaws"
    ]
  },

  temperament: {
    traits: [
      "Calm, composed, and dignified in daily life",
      "Affectionate, gentle, and loyal toward family members",
      "Self-assured and aware of its own strength, conserving energy until needed",
      "Resolute, fearless, and firm when confronting predators or unfamiliar intruders",
      "Independent thinker shaped by centuries of unsupervised flock guarding",
      "Patient and tolerant with familiar children and bonded livestock",
      "Naturally reserved and watchful around strangers",
      "Low-pitched, deep, booming bark audible across long distances",
      "Territorial toward unfamiliar dogs entering its boundary"
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 2,
      withStrangers: 2,
      protectiveness: 5,
      independence: 5,
      trainability: 3,
      barking: 4,
      energy: 2
    }
  },

  care: {
    exercise: {
      level:
        "Moderate; thrives on unhurried daily walks and patrolling spacious fenced ground rather than intense running or high-impact sports",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Leisurely daily perimeter walks and countryside strolls",
        "Free patrolling and resting across a large, securely fenced yard or pasture",
        "Supervised livestock guardianship and rural property companionship",
        "Low-impact enrichment such as scent foraging and calm obedience practice"
      ]
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush once or twice a week with a firm slicker brush and undercoat rake to clear loose hair and field debris, increasing to daily brushing during spring and autumn coat blows.",

      bathing:
        "Bathe only as needed when heavily muddy or odorous, since the coarse outer coat sheds dried dirt naturally.",

      notes: [
        "Wipe drool from the muzzle, chin, and deep neck folds regularly, drying the double dewlap thoroughly to prevent skin irritation.",
        "Check the triangular drop ears weekly for wax buildup, moisture, or redness.",
        "Inspect hind legs regularly if single or double dewclaws are present, trimming them before they snag.",
        "Keep thick, fast-growing nails trimmed regularly with heavy-duty clippers or a grinder.",
        "Provide deep, cushioned bedding or soft ground to protect elbows and hocks from pressure calluses and hygromas."
      ]
    },

    training: {
      difficulty:
        "Challenging; smart and perceptive, yet bred to make independent guarding decisions rather than follow repetitive obedience commands automatically",

      tips: [
        "Use calm, confident leadership paired with positive reinforcement and food rewards.",
        "Start leash manners, handling acceptance, and boundary rules in early puppyhood before full adult weight develops.",
        "Keep training sessions brief, respectful, and consistent to avoid stubborn disengagement.",
        "Avoid harsh corrections or physical force, which erode trust and can provoke defensive resistance.",
        "Rely on sturdy, tall perimeter fencing rather than off-leash recall in unfenced areas."
      ],

      socialization:
        "Expose puppies early and positively to welcoming guests, calm vaccinated dogs, everyday noises, and any livestock they will live alongside. Structured early socialization helps natural protective wariness mature into steady judgment."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cold mountain and winter climates, where the thick double coat insulates well",
        "Warm climates when ample shade, cool resting spots, fresh water, and dawn or dusk activity are provided"
      ],

      aloneTimeTolerance:
        "High when given a secure pasture or fenced acreage to watch over, though regular human bonding remains important for household companions."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced nutrition formulated for giant breeds, matched to slow puppy growth, adult maintenance, and moderate daily energy burn.",

    feedingFrequency: {
      puppy:
        "Three measured meals per day until roughly six months old on a giant-breed growth diet with controlled calories and minerals, then two meals daily.",
      adult:
        "Two measured meals per day to support steady digestion and avoid large single stomach loads.",
      senior:
        "Two portion-controlled meals per day adjusted for lower activity while preserving lean muscle."
    },

    guidelines:
      "Measure every meal carefully and monitor body condition so excess weight does not overload developing or aging joints. Split daily rations into two meals, keep vigorous movement away from mealtimes to reduce bloat risk, and keep heavy, non-tip water bowls filled at all times.",

    considerations: [
      "Encourage slow, steady growth throughout the first 18 to 24 months to protect giant-breed hips, elbows, and long bones.",
      "Avoid vigorous activity right before and for at least an hour after meals to help lower bloat risk.",
      "Count training treats within the daily calorie budget because giant low-energy breeds can gain weight easily.",
      "Transition gradually to new food formulas over five to seven days."
    ],

    note:
      "Because giant dogs mature slowly and vary widely in weight and workload, review specific calorie targets and growth diets with a veterinarian."
  },

  health: {
    overview:
      "The Spanish Mastiff is generally a sturdy, rustic giant breed with a typical lifespan of 10 to 12 years. Because of its immense weight and deep chest, the most closely monitored health concerns are orthopedic and structural—especially hip dysplasia, which is actively screened through official radiographic breeding programs, alongside reported giant-breed risks such as elbow dysplasia, gastric dilatation-volvulus (bloat), eyelid conformation issues (entropion or ectropion), growth-related bone inflammation, elbow hygromas, and heart conditions. A 2024 peer-reviewed genomic study also identified the Spanish Mastiff among breeds displaying a clinical resistance phenotype to severe canine leishmaniosis.",

    commonConditions: [
      "Hip dysplasia — monitored developmental malformation of the hip joint that can lead to arthritis and hind-limb lameness; actively screened by radiographic evaluation in formal breeding programs",
      "Elbow dysplasia — reported giant-breed developmental elbow abnormality that can cause forelimb lameness and secondary arthritis",
      "Gastric dilatation-volvulus (GDV / bloat) — reported acute emergency in deep-chested giant dogs where the stomach distends and twists, requiring immediate veterinary surgery",
      "Entropion and ectropion — reported eyelid abnormalities linked to heavy facial skin where lids roll inward or droop excessively, potentially irritating the eye",
      "Panosteitis and developmental bone inflammation — reported temporary, shifting lameness sometimes seen in rapidly growing giant-breed puppies",
      "Elbow hygromas and pressure calluses — fluid-filled swellings or thickened skin over bony joints caused by lying on hard surfaces",
      "Cardiac conditions — monitored heart issues such as dilated cardiomyopathy or murmurs assessed through veterinary auscultation and specialist exams"
    ],

    preventiveCare: [
      "Select puppies from parents with official radiographic hip dysplasia clearances and sound eyelid and joint conformation.",
      "Feed a giant-breed growth formula in measured portions to keep puppies lean during their slow two-year skeletal maturation.",
      "Split food into two daily meals, rest the dog before and after eating, and learn the emergency warning signs of bloat.",
      "Provide thick, supportive bedding to help prevent elbow hygromas and pressure sores.",
      "Keep deep neck dewlap folds clean and dry, check drop ears weekly, and schedule annual veterinary wellness checks."
    ],

    recommendedScreenings: [
      "Official radiographic hip dysplasia evaluation prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "Ophthalmic evaluation for eyelid conformation (entropion/ectropion) and hereditary eye disease",
      "Cardiac examination by a veterinarian prior to breeding"
    ],

    dentalCare:
      "Brush teeth several times a week with dog-safe toothpaste and have gums and teeth checked during routine veterinary exams.",

    earCare:
      "Inspect the drop ears weekly for wax, moisture, or odor, cleaning gently with a vet-approved solution and drying carefully.",

    skinCare:
      "Check and dry the deep folds of the double throat dewlap weekly to prevent moisture irritation, and offer soft bedding to protect heavy joints."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Farmers, ranchers, and rural landowners needing a dependable guardian for livestock or acreage",
      "Experienced owners of giant guardian breeds who respect autonomous protective instincts",
      "Country or spacious rural homes with heavy-duty perimeter fencing",
      "Households prepared for giant-breed feeding costs, heavy drool, and seasonal shedding"
    ],

    notIdealFor: [
      "First-time dog owners or households wanting an effortlessly submissive pet",
      "Apartments, condos, or small suburban lots with close neighbors",
      "Homes without strong, tall fencing or owners bothered by drooling and deep barking",
      "People looking for a fast-paced jogging partner or eager-to-please competitive obedience dog"
    ]
  },

  funFacts: [
    "In medieval Spain, the Mesta sheep-ranching guild relied on Spanish Mastiffs to guard migrating Merino flocks across long seasonal routes between northern summer mountains and southern winter pastures.",
    "Working Spanish Mastiffs traditionally wore heavy iron collars studded with outward spikes—called carlancas—to shield their throats from wolf bites during nighttime attacks.",
    "Diego Velázquez featured a calm, massive Spanish Mastiff resting in the foreground of his famous 1656 royal painting Las Meninas.",
    "The breed's abundant double dewlap served a practical purpose in the field, giving the dog extra loose neck skin so a predator's grip was less likely to reach vital structures.",
    "Its deep, low-pitched bark carries across wide valleys and open plains, warning predators away before a physical confrontation ever occurs.",
    "The English word 'mastiff' traces back to the Latin word mansuetus, meaning gentle or mild—reflecting the breed's calm nature with its own people."
  ],

  faq: [
    {
      question: "What is a Spanish Mastiff?",
      answer:
        "The Spanish Mastiff (Mastín Español) is a giant, ancient livestock guardian breed from Spain, developed to protect flocks of Merino sheep and rural estates from wolves and intruders."
    },
    {
      question: "How big does a Spanish Mastiff get?",
      answer:
        "Adult males stand at least 77 cm at the withers (often 80 to 89 cm) and typically weigh 64 to 100 kg, while adult females stand at least 72 cm (often 75 to 84 cm) and typically weigh 50 to 77 kg."
    },
    {
      question: "How is the Spanish Mastiff different from the Pyrenean Mastiff?",
      answer:
        "Both are giant Spanish flock guardians, but the Spanish Mastiff generally has heavier bone, looser throat skin with a pronounced double dewlap, and solid or brindle coats in shades like fawn, yellow, red, black, or wolf-grey, whereas the Pyrenean Mastiff is typically predominantly white with a defined mask and colored patches."
    },
    {
      question: "How long do Spanish Mastiffs live?",
      answer:
        "With controlled puppy growth, healthy weight management, and regular veterinary care, Spanish Mastiffs typically live 10 to 12 years."
    },
    {
      question: "Do Spanish Mastiffs drool heavily?",
      answer:
        "Yes. Their loose, pendulous upper lips and wide lip corners cause regular drooling, especially after drinking, eating, or in warm weather."
    },
    {
      question: "Can a Spanish Mastiff live in an apartment?",
      answer:
        "No. Their colossal size, deep carrying bark, and strong territorial instincts make them poorly suited to apartments; they thrive on rural properties or homes with large, securely fenced yards."
    },
    {
      question: "Are Spanish Mastiffs good with children and family?",
      answer:
        "Yes, they are famously calm, patient, and protective with their own families. Because of their immense weight and slow physical maturity, always supervise interactions with young children."
    },
    {
      question: "How much exercise does a Spanish Mastiff need?",
      answer:
        "Most adults do well with about 45 to 60 minutes of calm daily activity, such as leisurely walks and time patrolling a spacious fenced yard, rather than strenuous running."
    },
    {
      question: "Are double rear dewclaws normal in Spanish Mastiffs?",
      answer:
        "Yes. Rear legs may have single dewclaws, double dewclaws, or no dewclaws at all; all are recognized in the breed, though dewclaws should be checked and trimmed regularly."
    },
    {
      question: "What health concerns should Spanish Mastiff owners watch for?",
      answer:
        "Key areas to monitor include hip and elbow dysplasia, bloat (gastric dilatation-volvulus), eyelid issues such as entropion or ectropion, elbow hygromas from hard surfaces, and heart health."
    }
  ],

  references: [
    "natureserve-canis-lupus-familiaris",
    "fci-spanish-mastiff-official-standard",
    "fci-spanish-mastiff-nomenclature",
    "rsce-mastin-espanol-breed-standard",
    "aepme-mastin-espanol-profile",
    "ukc-spanish-mastiff-breed-standard",
    "akc-spanish-mastiff-breed-profile",
    "spanish-mastiff-hip-dysplasia-study-2015",
    "pubmed-spanish-mastiff-leishmaniosis-2024",
    "the-dog-api",
    "wikimedia-mastin-espanol-1-tomasz-sienicki",
    "wikimedia-mastin-espanol-canarian"
  ],

  evidence: {
    scientificName: {
      reliability: "reliable_source",
      sources: [
        {
          id: "natureserve-canis-lupus-familiaris",
          role: "verified",
          locator: "Taxon record: Canis lupus familiaris (ITIS TSN 726821)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Verified domestic dog taxonomic name via NatureServe Explorer (ITIS TSN 726821)."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spanish-mastiff-nomenclature",
          role: "verified",
          locator: "Official nomenclature: MASTÍN ESPAÑOL (91)"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names: Mastín Español, Mastín Leonés, Mastín Extremeño"
        },
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "verified",
          locator: "Perro Mastín Español"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Verified across FCI Nomenclature, RSCE, and The Dog API."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spanish-mastiff-nomenclature",
          role: "verified",
          locator: "Group 2, Section 2.2 Molossian type - Mountain type, without working trial"
        },
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "verified",
          locator: "Grupo 2 - Sección 2.2 Molosoides tipo montaña, sin prueba de trabajo"
        },
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "verified",
          locator: "Foundation Stock Service; Working Group designation"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Written without registry names or numbered section labels in user-facing text."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spanish-mastiff-nomenclature",
          role: "verified",
          locator: "Country of origin: Spain; definitive acceptance 1954-11-13"
        },
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "verified",
          locator: "Origen: España; transhumance and Mesta Merino flocks"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin: Spain"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "verified",
          locator: "Estándar FCI Nº 91 (30.08.2002; original valid standard 26.05.1982): Utilización, Apariencia general, Proporciones, Temperamento"
        },
        {
          id: "aepme-mastin-espanol-profile",
          role: "verified",
          locator: "Historia del Mastín Español, AEPME founding (1981), Plan de Cría (1998)"
        },
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "verified",
          locator: "About the Breed, History (Phoenician/Greek roots >2,000 years ago, Mesta transhumance)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Rewritten in original prose synthesizing FCI Standard No. 91 / RSCE, AEPME, and AKC records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "verified",
          locator: "Cabeza (3:2 ratio, sub-convex skull, scissor bite, black palate, small hazel eyes with black lids showing lower conjunctiva), Cuello (papada doble), Cola, Extremidades (simple/double dewclaws), Pelaje, Color"
        },
        {
          id: "fci-spanish-mastiff-official-standard",
          role: "verified",
          locator: "FCI Standard No. 91 conformation, coat, and color"
        },
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "verified",
          locator: "Breed Colors & Markings: Black, Fawn, Red, Wolfgray, Yellow; Brindle and White markings"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Corrected eyes (small dark hazel with lower lid showing part of conjunctiva, not almond-shaped), skull profile (sub-convex, 3:2 ratio), and bite (scissor bite required; pincer bite is a minor fault in FCI/RSCE standard). Filtered out non-breed colors from The Dog API's generic list."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "verified",
          locator: "Tamaño: No upper limit; minimum height Males 77 cm (desirable >80 cm), Females 72 cm (desirable >75 cm)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric: male 71-89 cm, female 72-84 cm"
        },
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "cited",
          locator: "Height: Minimum 28-35 inches"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Retains FCI/RSCE official lower limits (77 cm males, 72 cm females; no official upper ceiling) over The Dog API's lower male minimum (71 cm), paired with The Dog API upper bounds (89 cm / 84 cm) to reflect typical adult range in centimetres."
    },

    "physical.height.male.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.height.metric: male max 89 cm"
        },
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "cited",
          locator: "Tamaño: no upper limit; desirable to exceed 80 cm"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "FCI/RSCE sets no upper height ceiling; 89 cm reflects The Dog API published upper range."
    },

    "physical.height.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.height.metric: female max 84 cm"
        },
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "cited",
          locator: "Tamaño: no upper limit; desirable to exceed 75 cm"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "FCI/RSCE sets no upper height ceiling; 84 cm reflects The Dog API published upper range."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric: male 64-100 kg, female 50-77 kg"
        },
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "cited",
          locator: "Weight: 140-200 pounds"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "FCI Standard No. 91 / RSCE does not publish numerical weight limits. Uses The Dog API verified metric ranges (64-100 kg males, 50-77 kg females), which align closely with AKC's published 140-200 pounds."
    },

    "physical.weight.male.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric: male max 100 kg"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.weight.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric: female max 77 kg"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 10-12 years"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span: 10-12 years"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Consistent across AKC and The Dog API."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "verified",
          locator: "Pelaje: dense, thick, semi-long double coat"
        },
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "verified",
          locator: "Labios: upper lip amply covering lower lip; very loose lip commissure"
        },
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "verified",
          locator: "Temperamento y comportamiento: intelligent, rustic, affectionate, mild, noble, firm before predators and strangers, self-assured, deep booming bark"
        },
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "verified",
          locator: "About the Breed: intelligent, affectionate, kind, noble, determined protector"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament: Protective, calm, loyal, intelligent, independent, affectionate"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics"
        },
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "cited",
          locator: "Temperamento y comportamiento"
        }
      ],
      verifiedOn: null,
      note: "Editorial 1-5 estimates reflecting documented livestock guardian protectiveness, independence, and calm energy."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "cited",
          locator: "Grooming (weekly brushing, nails, ears, teeth), Exercise, Nutrition"
        },
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "cited",
          locator: "Double dewlap, dense coat, and working guardian nature"
        }
      ],
      verifiedOn: null,
      note: "Practical care guidance tailored to giant livestock guardians with loose throat skin."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "verified",
          locator: "Exercise: relatively calm breed needing regular daily walks or fenced yard time"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "cited",
          locator: "Daily moderate exercise guidance"
        }
      ],
      verifiedOn: null,
      note: "Estimated 45-60 minutes daily reflects the moderate, low-impact activity needs of a giant livestock guardian."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "cited",
          locator: "Giant size, fenced backyard recommendation, deep resonant bark"
        },
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "cited",
          locator: "Farm and flock guardian role; deep loud bark audible at long distances"
        }
      ],
      verifiedOn: null,
      note: "Editorial evaluation: giant mass, territorial guarding, and booming bark make apartments unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "verified",
          locator: "Exercise: fenced backyard or spacious outdoor area"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "verified",
          locator: "Utilización & Pelaje: thick double coat for seasonal mountain and lowland grazing"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "cited",
          locator: "Autonomous flock and property guardianship"
        }
      ],
      verifiedOn: null,
      note: "Livestock guardians tolerate independent outdoor time well when patrolling a secure territory."
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "cited",
          locator: "Nutrition: age-appropriate diet, weight control, limit treats"
        }
      ],
      verifiedOn: null,
      note: "General giant-breed nutrition and bloat-mitigation guidance."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "cited",
          locator: "Life-stage nutrition"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage meal schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "spanish-mastiff-hip-dysplasia-study-2015",
          role: "verified",
          locator: "AEPME Official Hip Dysplasia Radiographic Protocol (active since March 2022)"
        },
        {
          id: "aepme-mastin-espanol-profile",
          role: "verified",
          locator: "Plan de Cría: hip dysplasia control (Grades A-D apt, E excluded, evaluated by University of León Veterinary Faculty)"
        },
        {
          id: "pubmed-spanish-mastiff-leishmaniosis-2024",
          role: "verified",
          locator: "Int J Parasitol 2024 (PMID 38570155): Spanish Mastiff identified among breeds with clinical resistance phenotype to Leishmania infantum"
        },
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "verified",
          locator: "Serious faults: excessive entropion or ectropion"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Replaced broken/non-existent PubMed 25692686 reference with verified AEPME official hip dysplasia protocol and added peer-reviewed 2024 PubMed genomic study (PMID 38570155)."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "spanish-mastiff-hip-dysplasia-study-2015",
          role: "verified",
          locator: "AEPME hip dysplasia radiographic screening protocol"
        },
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "verified",
          locator: "Excessive entropion or ectropion listed as serious faults"
        },
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "cited",
          locator: "Health overview and giant-breed care"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Distinguishes actively screened hip dysplasia and standard-noted eyelid conformation issues from general giant-breed reported risks (elbow dysplasia, bloat, panosteitis, hygromas, cardiac)."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "spanish-mastiff-hip-dysplasia-study-2015",
          role: "cited",
          locator: "Pre-breeding hip dysplasia radiography"
        },
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "cited",
          locator: "Routine weight control, grooming, and veterinary care"
        }
      ],
      verifiedOn: null,
      note: "General preventive care recommendations for giant livestock guardians."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "spanish-mastiff-hip-dysplasia-study-2015",
          role: "verified",
          locator: "AEPME official hip dysplasia radiographic protocol"
        },
        {
          id: "aepme-mastin-espanol-profile",
          role: "verified",
          locator: "Authorized hip dysplasia evaluation at University of León Veterinary Faculty"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Hip dysplasia radiography is formally institutionalized by AEPME; elbow, eye, and cardiac evaluations are prudent giant-breed breeding checks."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "cited",
          locator: "Grooming: regular teeth brushing"
        }
      ],
      verifiedOn: null,
      note: "Standard canine dental hygiene guidance."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "cited",
          locator: "Grooming: regular ear checks for wax and debris"
        }
      ],
      verifiedOn: null,
      note: "Standard drop-ear care guidance."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "cited",
          locator: "Thick loose skin and pronounced double dewlap"
        }
      ],
      verifiedOn: null,
      note: "General skin-fold and pressure-point care for heavy giant breeds."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "cited",
          locator: "Temperament, exercise, and giant-breed ownership considerations"
        },
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "cited",
          locator: "Livestock and property guardianship"
        }
      ],
      verifiedOn: null,
      note: "Editorial suitability assessment based on giant size, guardian instincts, and moderate energy."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "verified",
          locator: "Mesta transhumance, Merino sheep guarding, deep carrying bark"
        },
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "verified",
          locator: "Did You Know: Latin 'mansuetus' root of mastiff, Mesta transhumance"
        },
        {
          id: "aepme-mastin-espanol-profile",
          role: "verified",
          locator: "Carlanca spiked collars and historical Spanish mastiff heritage"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Verified historical and linguistic facts rewritten in original wording."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "verified",
          locator: "Origin, height minimums (77/72 cm), double dewlap, rear dewclaws, coat colors"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "Weight (64-100 kg / 50-77 kg), height upper bounds (89/84 cm), lifespan (10-12 years)"
        },
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "verified",
          locator: "Lifespan, drooling, exercise, family life"
        },
        {
          id: "spanish-mastiff-hip-dysplasia-study-2015",
          role: "verified",
          locator: "Hip dysplasia screening protocol"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "All FAQ answers written in original wording without registry names."
    }
  },

  updatedOn: "2026-11-21"
};
