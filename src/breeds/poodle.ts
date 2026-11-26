import type { Breed } from "../schema/breed.types";

export const poodle: Breed = {
  slug: "poodle",
  name: "Poodle",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Caniche",
    "Pudel",
    "Standard Poodle",
    "Miniature Poodle",
    "Toy Poodle",
    "Medium Poodle"
  ],

  group:
    "Companion and Toy Dogs; Section 2 — Poodle (without working trial; also classified in the Non-Sporting and Toy groups)",

  origin: {
    country: "Germany and France",
    region: null
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Standard_Poodle_black_lying_down.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Standard_Poodle_black_lying_down.jpg",
      title: "Standard Poodle black lying down.jpg",
      description:
        "A black Standard Poodle resting outdoors, showcasing its distinguished chiseled head, straight muzzle, attentive dark oval eyes, close-lying pendant ears, and dense curly coat.",
      creator: "Belinda Hankins Miller",
      uploader: "Pharaoh Hound",
      capturedOn: "2007-09-18",
      uploadedOn: "2007-09-24",
      width: 1828,
      height: 1827,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Belinda Hankins Miller, Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:Standard_Poodle_black_lying_down.jpg. License: https://creativecommons.org/licenses/by/2.0/. Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-11-25"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Standard_Poodle_black_male_sitting.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Standard_Poodle_black_male_sitting.jpg",
      title: "Standard Poodle black male sitting.jpg",
      description:
        "A black male Standard Poodle named Theo sitting attentively, highlighting its proud head carriage, clean dewlap-free neck, and plush elastic curls.",
      creator: "A W",
      uploader: "Pharaoh Hound",
      capturedOn: "2007-06-29",
      uploadedOn: "2007-07-05",
      width: 854,
      height: 1279,
      licenseId: "cc-by-sa-2.0",
      attribution:
        "Photo by A W, Wikimedia Commons, CC BY-SA 2.0. Source: https://commons.wikimedia.org/wiki/File:Standard_Poodle_black_male_sitting.jpg. License: https://creativecommons.org/licenses/by-sa/2.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-25"
    }
  ],

  overview: {
    summary:
      "An exceptionally bright, agile, and proud water-retrieving dog bred across multiple size varieties, combining keen athletic capability and strong trainability with devoted family companionship.",

    description:
      "The Poodle is a well-proportioned, square-leaning, and briskly moving dog celebrated worldwide for its sharp mind, lively spirit, and distinctive curly or corded coat. Rather than heavy or coarse in bone, it projects balanced elegance—carrying its head proudly atop a strong, slightly arched, dewlap-free neck, with an oval skull, straight muzzle measuring roughly nine-tenths of skull length, dark almond-shaped eyes, and flat pendant ears set along the cheeks. Its dense, springy coat comes in either tight, uniform, woolly curls or long, dense cords, traditionally styled in classic trims that leave joints free for movement while protecting vital areas. Across its size varieties—from the larger Standard down to Medium, Miniature, and Toy sizes—the Poodle is affectionate, people-focused, quick to learn, and eager to participate in daily family life, outdoor walks, swimming, and canine sports.",

    history:
      "Tracing its roots to skilled water-retrieving dogs in Western and Central Europe, the Poodle developed over centuries as a capable gun dog and swimmer used to retrieve waterfowl from lakes and marshes. Its name stems from the German word 'Pudel'—linked to splashing in water—while in France it is widely known as the 'Caniche' and celebrated as the national dog of France. Over time, breeders selected distinct size varieties—including Standard, Medium, Miniature, and Toy—adapting the breed's agility and intelligence from working marshes and trick performances into modern companion homes and competitive dog sports.",

    originalPurpose:
      "Retrieving waterfowl and game from water and marshland, alongside active companionship and trick/working roles.",

    currentRoles: [
      "Devoted family and household companion",
      "Obedience, agility, rally, tracking, and dock-diving competitor",
      "Water-retrieving and therapy dog"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 24,
        max: 62
      },
      female: {
        min: 24,
        max: 62
      }
    },

    weight: {
      unit: null,
      male: null,
      female: null
    },

    lifespanYears: null,

    coatType:
      "Dense, springy double-style coat appearing either as profuse, fine, woolly, even curls elastic to the touch or as dense, heavy cords measuring at least 20 cm in length; traditionally groomed in structured trims.",

    coatLength: "Medium",

    coatColors: [
      "Black",
      "White",
      "Brown (deep, dark, uniform warm brown)",
      "Grey",
      "Fawn / Apricot"
    ],

    sheddingLevel:
      "Low; the dense curly or corded coat traps loose hair rather than shedding freely around the home, requiring regular brushing or combing",

    droolingLevel:
      "Low; tight, well-fitting lips resting cleanly against the lower jaw and a dewlap-free neck keep drooling minimal",

    distinctiveFeatures: [
      "Balanced, lightly built yet muscular silhouette slightly longer than tall with withers height nearly matching croup height",
      "Across size varieties, height at the withers spans 45 to 62 cm for Standard, 35 to 45 cm for Medium, 28 to 35 cm for Miniature, and 24 to 28 cm for Toy Poodles",
      "Chiseled head with an oval skull slightly convex in profile, straight muzzle roughly nine-tenths of skull length, dark almond-shaped eyes, and close-fitting pendant drop ears",
      "Strong scissor bite and a dewlap-free, slightly arched neck carried high and proudly",
      "Upright, parallel limbs with a light, bouncy gait and naturally short-free tail set high at the loin",
      "Profuse curly or corded coat with traditional grooming trims"
    ]
  },

  temperament: {
    traits: [
      "Highly intelligent, quick-witted, and eager to learn new cues and tasks",
      "Affectionate, loyal, and deeply attached to its family household",
      "Lively, playful, and alert with a light, buoyant energy level",
      "Sociable and people-oriented, thriving on interaction, games, and mental engagement",
      "Responsive to consistent, positive guidance and prone to boredom if left under-stimulated"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 4,
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
        "High; an energetic, athletic dog across all size varieties that benefits from daily brisk walks, retrieve or swimming play, and mental enrichment",

      minutesPerDay: {
        min: 45,
        max: 90
      },

      activities: [
        "Brisk daily walks and active outdoor play",
        "Swimming, water retrieving, and dock-diving games",
        "Agility, obedience, rally, and scent-work training",
        "Interactive puzzle toys and trick learning"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Brush and comb thoroughly down to the skin several times a week—or daily for longer or corded coats—to prevent tangles and matting.",

      bathing:
        "Bathe regularly with a mild dog shampoo and conditioner, detangling thoroughly before washing and drying completely.",

      notes: [
        "Schedule regular professional grooming trims every four to eight weeks depending on coat style and length.",
        "Inspect pendant ears weekly for wax, moisture, or odour, and clean gently when needed.",
        "Trim nails regularly and brush teeth several times weekly using dog-safe toothpaste."
      ]
    },

    training: {
      difficulty:
        "Easy; quick to grasp commands and enthusiastic when sessions are engaging and consistent",

      tips: [
        "Use upbeat, reward-based training with treats, praise, and play rather than harsh corrections.",
        "Keep sessions varied and mentally stimulating so a sharp Poodle does not grow bored.",
        "Practice recall and impulse control early, especially around water, wildlife, and busy areas."
      ],

      socialization:
        "Early, positive exposure to varied people, friendly dogs, grooming routines, and everyday sights builds poise and confidence across every size variety."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate and four-season climates with appropriate coat grooming and warm shelter in cold weather",
        "Warm weather requires avoiding strenuous midday exertion and providing shade and fresh water"
      ],

      aloneTimeTolerance:
        "Low to moderate; thrives on human companionship and can become restless or vocal if left alone for long stretches without enrichment."
    }
  },

  nutrition: {
    dietType:
      "Complete and balanced commercial dog food formulated for the dog's life stage and size category.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until roughly six months of age.",
      adult:
        "Two measured meals daily to maintain steady energy and healthy body weight.",
      senior:
        "Two portion-controlled meals daily tailored to activity level, dental comfort, and joint care."
    },

    guidelines:
      "Measure portions according to size variety, age, and activity level to keep ribs easily felt without excess weight. Provide fresh drinking water continuously.",

    considerations: [
      "Monitor treat calories carefully to prevent weight gain, particularly in smaller or less active individuals.",
      "In larger deep-chested Poodles, avoid vigorous exercise right before or after large meals and watch for signs of bloat.",
      "Transition gradually between diets over five to seven days."
    ],

    note:
      "Exact calorie and nutrient needs vary by size variety (Toy, Miniature, Medium, or Standard) and activity level; consult a veterinarian for individualized guidance."
  },

  health: {
    overview:
      "Poodles across size varieties are generally active companions, though specific hereditary and age-related risks vary by size and lineage. Documented breed health priorities include sebaceous adenitis (an inflammatory skin condition affecting sebaceous glands that requires lifelong management and is not cured by a single treatment), progressive retinal atrophy (including prcd-PRA) and other ocular conditions, joint concerns such as hip dysplasia and patellar luxation, endocrine disorders including Addison's disease (hypoadrenocorticism) and Cushing's disease, and bloat in deep-chested larger individuals.",

    commonConditions: [
      "Sebaceous adenitis — a chronic inflammatory condition targeting sebaceous glands that can cause scaling, follicular casts, coat changes, and hair loss, requiring ongoing veterinary skin management",
      "Progressive retinal atrophy and hereditary eye disorders — progressive vision loss and eye conditions monitored through DNA testing and periodic veterinary eye exams",
      "Hip dysplasia and patellar luxation — joint developmental issues affecting hip sockets or kneecaps depending on size variety, screened via radiographs or clinical exams",
      "Addison's disease (hypoadrenocorticism) and Cushing's disease — adrenal hormone imbalances requiring veterinary diagnosis and lifelong management",
      "Gastric dilatation-volvulus (bloat) — an acute medical emergency most relevant to larger, deep-chested individuals"
    ],

    preventiveCare: [
      "Ask breeders for documented parental health evaluations (such as hip, patella, eye, and relevant genetic or endocrine screenings).",
      "Maintain a lean body condition, regular exercise, dental hygiene, and routine ear and skin checks.",
      "Seek prompt veterinary evaluation for persistent skin scaling, hair loss, vision changes, lameness, or sudden lethargy/vomiting."
    ],

    recommendedScreenings: [
      "Hip dysplasia radiographic evaluation (especially for larger varieties) and clinical patellar luxation evaluation",
      "Periodic veterinary ophthalmologist eye examination and relevant DNA testing such as prcd-PRA",
      "Elective thyroid, cardiac, or sebaceous adenitis evaluations as advised by a veterinarian or breeding programme"
    ],

    dentalCare:
      "Brush teeth several times weekly using dog-safe enzymatic toothpaste and schedule regular veterinary dental evaluations.",

    earCare:
      "Inspect pendant ears weekly for wax, moisture, odour, or redness, cleaning gently with a dog-safe product when needed.",

    skinCare:
      "Part the dense curly or corded coat regularly during grooming to check skin for dryness, scaling, irritation, tangles, or parasites."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Active individuals and families wanting an intelligent, affectionate, trainable companion",
      "Owners willing to commit to consistent brushing and regular grooming trims",
      "Households that enjoy walks, games, swimming, or canine sports"
    ],

    notIdealFor: [
      "Owners looking for a low-grooming coat without regular brushing or professional trims",
      "Sedentary households unable to provide daily physical and mental stimulation",
      "People who leave a social dog alone for long periods without company"
    ]
  },

  funFacts: [
    "The English name 'Poodle' comes from the German word 'Pudel,' linked to splashing in water, reflecting the breed's historic water-retrieving background.",
    "In France, the Poodle is known as the 'Caniche' and is celebrated as the national dog of France.",
    "Classic Poodle grooming clips originated for practical working reasons—leaving fur over joints and the chest while clipping elsewhere to reduce drag in water.",
    "Poodles are recognized across multiple size categories—including Standard, Medium, Miniature, and Toy—while sharing the same core conformation and spirited intelligence."
  ],

  faq: [
    {
      question: "What is a Poodle?",
      answer:
        "The Poodle is a bright, agile, and affectionate dog breed originating in Western and Central Europe with roots in water retrieving, known for its curly or corded coat and multiple size varieties."
    },
    {
      question: "How tall are Poodles?",
      answer:
        "Height at the withers depends on size variety: 45 to 62 cm for Standard, 35 to 45 cm for Medium, 28 to 35 cm for Miniature, and 24 to 28 cm for Toy Poodles."
    },
    {
      question: "Do Poodles shed a lot, and how much grooming do they need?",
      answer:
        "Free household shedding is low because loose hair is held within the dense curly or corded coat, but grooming demand is high—requiring frequent brushing and combing plus regular trims to prevent matting."
    },
    {
      question: "Can a Poodle live in an apartment?",
      answer:
        "Yes, if given daily walks, play, and mental enrichment suited to its size and energy level."
    },
    {
      question: "Are Poodles easy to train?",
      answer:
        "Yes, Poodles are widely known for high intelligence and responsiveness to consistent, positive, reward-based training."
    },
    {
      question: "What are the main health concerns for a Poodle?",
      answer:
        "Key health topics include sebaceous adenitis, progressive retinal atrophy and other eye conditions, hip dysplasia or patellar luxation depending on size, endocrine disorders such as Addison's or Cushing's disease, and bloat in larger individuals."
    }
  ],

  references: [
    "fci-poodle-official-standard-172",
    "akc-poodle-toy-breed-profile",
    "pcaf-poodle-health-concerns",
    "pmc-canine-sebaceous-adenitis-7877684",
    "wikimedia-standard-poodle-black-lying-down-miller",
    "wikimedia-standard-poodle-black-male-sitting-aw"
  ],

  evidence: {
    scientificName: {
      reliability: "unverified",
      sources: [],
      verifiedOn: null,
      note:
        "Canis lupus familiaris is used as the standard domestic-dog taxonomic label across the catalog; it is not stated in breed standards."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-poodle-official-standard-172",
          role: "verified",
          locator: "Standard heading: CANICHE (Poodle) and size varieties (Standard, Medium, Miniature, Toy)"
        },
        {
          id: "akc-poodle-toy-breed-profile",
          role: "verified",
          locator: "French name Caniche and Toy Poodle designation"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified across FCI Standard No. 172 and AKC."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-poodle-official-standard-172",
          role: "verified",
          locator: "FCI-St. N° 172: Group 9 Companion and Toy Dogs, Section 2 Poodle, without working trial"
        },
        {
          id: "akc-poodle-toy-breed-profile",
          role: "verified",
          locator: "AKC Toy Group classification (Standard/Miniature in Non-Sporting Group)"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-poodle-official-standard-172",
          role: "verified",
          locator: "ORIGIN: Germany / France (water-retrieving and French Caniche heritage)"
        },
        {
          id: "akc-poodle-toy-breed-profile",
          role: "verified",
          locator: "German 'Pudel' etymology and French 'Caniche' / national dog of France heritage"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Country origin verified from FCI Standard No. 172 and AKC; single founding sub-region is not uniform across all varieties."
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "FCI Standard No. 172 and AKC do not specify a single founding region across all Poodle size varieties."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-poodle-official-standard-172",
          role: "verified",
          locator: "GENERAL APPEARANCE, PROPORTIONS, HEAD, COAT, and size varieties"
        },
        {
          id: "akc-poodle-toy-breed-profile",
          role: "verified",
          locator: "Water-retrieving background, Caniche / Pudel history, sports and companion versatility"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Synthesized in original prose from FCI Standard No. 172 and AKC."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-poodle-official-standard-172",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS, HEAD, NECK, BODY, TAIL, LIMBS, GAIT, SKIN, COAT (curly and corded), and COLOUR"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified from FCI Standard No. 172 (2024)."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-poodle-official-standard-172",
          role: "verified",
          locator: "SIZE: Standard 45–62 cm (up to 62 cm max), Medium 35–45 cm, Miniature 28–35 cm, Toy 24–28 cm (down to 23 cm floor)"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Preserved in centimetres (24 to 62 cm spanning Toy through Standard varieties) from FCI Standard No. 172 without unit conversion."
    },

    "physical.weight": {
      reliability: "unavailable",
      sources: [
        {
          id: "fci-poodle-official-standard-172",
          role: "cited",
          locator: "FCI Standard No. 172 omits a numerical weight range across varieties"
        }
      ],
      verifiedOn: null,
      note:
        "FCI Standard No. 172 does not specify a numerical weight range, and weight varies substantially across Standard, Medium, Miniature, and Toy size varieties."
    },

    "physical.lifespanYears": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No single official lifespan range is published across all Poodle size varieties in primary standards."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-poodle-toy-breed-profile",
          role: "verified",
          locator: "Low shedding characteristic of curly/corded Poodle coats"
        },
        {
          id: "fci-poodle-official-standard-172",
          role: "verified",
          locator: "COAT: Profuse fine woolly curly or dense corded coat"
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-poodle-official-standard-172",
          role: "verified",
          locator: "Lips: Moderately developed, rather tight, resting cleanly without hanging over; NECK: without dewlap"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Tight lips and dewlap-free neck keep drooling low."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-poodle-official-standard-172",
          role: "verified",
          locator: "GENERAL APPEARANCE & CHARACTER: Lively, alert, proud, and balanced disposition"
        },
        {
          id: "akc-poodle-toy-breed-profile",
          role: "verified",
          locator: "Intelligent, agile, self-confident, people-oriented, and eager to please"
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-poodle-toy-breed-profile",
          role: "cited",
          locator: "Affectionate, intelligent, trainable, playful, and active"
        }
      ],
      verifiedOn: null,
      note: "Editorial 1–5 estimates reflecting general Poodle temperament traits."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-poodle-toy-breed-profile",
          role: "cited",
          locator: "Regular brushing/clipping, daily exercise, swimming/sports, and positive training"
        }
      ],
      verifiedOn: null,
      note: "General Poodle care guidance."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-poodle-toy-breed-profile",
          role: "verified",
          locator: "Active daily exercise, swimming, retrieving, and sports engagement"
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial daily activity range (45 to 90 minutes) depending on size variety and fitness."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial assessment that apartments suit Poodles when daily exercise and mental stimulation are provided."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial assessment that houses with fenced yards suit active Poodles."
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General climate and coat-care guidance."
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General companionship guidance for people-oriented Poodles."
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-poodle-toy-breed-profile",
          role: "cited",
          locator: "Calorie and treat moderation to avoid excess weight"
        }
      ],
      verifiedOn: null,
      note: "General canine nutrition guidance."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pcaf-poodle-health-concerns",
          role: "verified",
          locator: "Documents Addison's disease, Cushing's disease, bloat/GDV, hip dysplasia, patellar luxation, PRA/eye conditions, and sebaceous adenitis screening"
        },
        {
          id: "pmc-canine-sebaceous-adenitis-7877684",
          role: "verified",
          locator: "PMC7877684 (PMID 33692587): Reviews canine sebaceous adenitis presentation, Poodle predisposition, and lifelong management"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Synthesizes parent-club health records and peer-reviewed dermatology literature without naming clubs in user-facing prose."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pmc-canine-sebaceous-adenitis-7877684",
          role: "verified",
          locator: "Sebaceous adenitis (follicular casts, scaling, hair loss, lifelong management)"
        },
        {
          id: "pcaf-poodle-health-concerns",
          role: "verified",
          locator: "PRA/ocular disorders, hip dysplasia, patellar luxation, Addison's disease, Cushing's disease, and bloat/GDV"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified from peer-reviewed veterinary review and parent-club health documentation."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "pcaf-poodle-health-concerns",
          role: "cited",
          locator: "Parental health screening, weight/bloat awareness, and periodic eye/joint checks"
        }
      ],
      verifiedOn: null,
      note: "General preventive veterinary care guidance."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pcaf-poodle-health-concerns",
          role: "verified",
          locator: "Hip evaluation, patellar luxation evaluation, ophthalmologist eye exam, prcd-PRA DNA test, and elective thyroid/cardiac/SA evaluations"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified from parent-club health testing guidance."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General home and veterinary dental hygiene guidance."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-poodle-official-standard-172",
          role: "cited",
          locator: "Pendant drop ears set along the cheeks"
        }
      ],
      verifiedOn: null,
      note: "General ear-inspection and cleaning guidance."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "pmc-canine-sebaceous-adenitis-7877684",
          role: "cited",
          locator: "Coat scaling and sebaceous gland care"
        }
      ],
      verifiedOn: null,
      note: "General coat and skin inspection guidance."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-poodle-toy-breed-profile",
          role: "cited",
          locator: "Active, smart, people-oriented companion requiring regular coat grooming"
        }
      ],
      verifiedOn: null,
      note: "Editorial owner-suitability estimates."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-poodle-toy-breed-profile",
          role: "verified",
          locator: "German 'Pudel' origin and French 'Caniche' / national dog of France heritage"
        },
        {
          id: "fci-poodle-official-standard-172",
          role: "verified",
          locator: "Recognized size varieties and traditional grooming clips"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified historical and coat-related facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-poodle-official-standard-172",
          role: "verified",
          locator: "Height ranges across size varieties and curly/corded coat"
        },
        {
          id: "akc-poodle-toy-breed-profile",
          role: "verified",
          locator: "Origin, grooming/shedding, apartment adaptability, and trainability"
        },
        {
          id: "pcaf-poodle-health-concerns",
          role: "verified",
          locator: "Key health conditions and screenings"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "FAQ answers written in original wording without mentioning source or club names."
    }
  },

  updatedOn: "2026-11-25"
};
