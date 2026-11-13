import type { Breed } from "../schema/breed.types";

export const perro_de_presa_mallorquin: Breed = {
  slug: "perro-de-presa-mallorquin",
  name: "Perro de Presa Mallorquín",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Ca de Bou",
    "Perro Dogo Mallorquín",
    "Majorca Mastiff",
    "Majorcan Mastiff",
    "Majorcan Bulldog",
    "Dogue de Majorque",
    "Mallorca-Dogge",
  ],

  group:
    "FCI Group 2 — Pinscher and Schnauzer type, Molossoid breeds and Swiss Mountain and Cattle Dogs; Section 2.1 — Molossoid, Mastiff type; without working trial",

  origin: {
    country: "Spain",
    region: "Mallorca, Balearic Islands",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ca_de_bou.JPG",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Ca_de_bou.JPG",
      title: "Ca de bou.JPG",
      description: "A Ca de Bou (Perro Dogo Mallorquín).",
      creator: "Animaisa",
      uploader: "Animaisa",
      capturedOn: "2012-05-27",
      uploadedOn: "2013-04-02",
      width: 4288,
      height: 3216,
      licenseId: "cc-by-sa-3.0",
      attribution:
        'Animaisa, "Ca de bou.JPG", via Wikimedia Commons, licensed under CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). No changes made.',
      restrictions: null,
      metadataCheckedOn: "2026-11-13",
    },
  ],

  overview: {
    summary:
      "The Perro de Presa Mallorquín, widely known as the Ca de Bou, is a compact, muscular mastiff-type breed from Mallorca, Spain. Recognizable by its broad head, short rough coat, and steady bearing, it was historically shaped for property guarding and catch work. Calm and affectionate with familiar people when properly socialized, its physical power demands experienced, consistent handling and early training.",

    description:
      "Powerfully built with a slightly elongated frame, substantial bone, and a broad, nearly square head, this medium-sized Molosser carries strong jaws and small, high-set rose ears. Its short, close-lying coat feels slightly harsh and appears in brindle, fawn, or black, with or without a black mask and limited white markings. Naturally quiet and self-assured, a well-raised individual shows courage without unnecessary aggression. Because of its strength and protective instincts, prospective owners must commit to early socialization, calm leadership, and reliable physical control in public spaces.",

    history:
      "Developed on the island of Mallorca as Iberian mastiff-type dogs arrived with medieval settlement and later crossed with native island herding dogs and British bulldog-type dogs brought through maritime trade. Known locally as the Ca de Bou, the breed served as a farm guardian, cattle-catching dog, and participant in historical bull-baiting spectacles before blood sports were outlawed. Recorded in Spain's stud book by 1923 with its first official entry in 1928 and exhibition in Barcelona in 1929, it was later rebuilt from a small surviving population by dedicated Spanish breeders.",

    originalPurpose:
      "Property and farm guarding, cattle-catching, and historical bull-baiting work.",

    currentRoles: [
      "Family companion in experienced, well-prepared households",
      "Home and property guardian where lawful and responsibly managed",
      "Obedience and structured relationship-based training",
      "Canine sports suited to the individual dog's fitness and temperament",
    ],
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: { min: 55, max: 60 },
      female: { min: 52, max: 57 },
    },

    weight: {
      unit: "kg",
      male: { min: 35, max: 45 },
      female: { min: 30, max: 35 },
    },

    lifespanYears: {
      min: 10,
      max: 12,
    },

    coatType: "Short, close-lying, and slightly harsh to the touch.",

    coatLength:
      "Short single coat across the body; requires no clipping or trimming.",

    coatColors: [
      "Brindle (darker, well-defined patterns)",
      "Fawn (deeper shades preferred)",
      "Black",
      "Limited white markings on the front feet, chest, and muzzle",
      "Black mask (permitted)",
    ],

    sheddingLevel:
      "Low to moderate; the short, harsh coat sheds lightly to moderately year-round, though no exact breed-specific rating is established.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Compact, heavily muscled, slightly elongated frame with strong bone.",
      "Massive, broad, almost square skull with a pronounced stop.",
      "Powerful jaw muscles and a characteristic undershot bite.",
      "Small, high-set rose-shaped ears.",
      "Short, slightly rough coat.",
      "Low-set, thick-based tail tapering toward the tip.",
      "Noticeably broader head and heavier build in males than in females.",
    ],
  },

  temperament: {
    traits: [
      "Calm and composed when mature",
      "Self-assured and confident",
      "Courageous",
      "Loyal and affectionate with familiar people",
      "Alert and protective of home and territory",
      "Physically powerful",
      "Requires consistent handling and early socialization",
    ],

    scores: {
      affection: 4,
      withChildren: null,
      withDogs: 2,
      withStrangers: 3,
      protectiveness: 5,
      independence: 3,
      trainability: 3,
      barking: 3,
      energy: 3,
    },
  },

  care: {
    exercise: {
      level:
        "Moderate, tailored to age, joint health, and weather. Daily walks paired with structured training and mental enrichment keep this muscular breed balanced without overstraining joints.",

      minutesPerDay: null,

      activities: [
        "Daily controlled lead walks",
        "Reward-based obedience and impulse-control sessions",
        "Scent and food-search enrichment games",
        "Moderate play suited to build and fitness",
        "Calm exposure to varied public environments",
      ],
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush weekly with a soft bristle brush or rubber grooming mitt to lift loose hair and check skin condition.",

      bathing:
        "Bathe only when dirty with a gentle canine shampoo; avoid over-bathing so the skin stays healthy.",

      notes: [
        "Inspect skin during brushing for redness, bumps, or irritation.",
        "Check ears regularly for wax, odour, or redness.",
        "Trim nails regularly to support healthy posture and gait.",
        "Brush teeth routinely with dog-safe toothpaste.",
        "Wipe the muzzle and facial folds gently after meals or muddy walks.",
      ],
    },

    training: {
      difficulty:
        "Moderate to high for novice handlers due to physical strength and guarding instincts. Requires calm, consistent, reward-based leadership from puppyhood.",

      tips: [
        "Begin reward-based training and structured socialization early.",
        "Prioritize loose-lead walking, reliable recall, settling on cue, and calm greetings.",
        "Reward relaxed neutrality around unfamiliar people and dogs rather than encouraging suspicion.",
        "Use sturdy, well-fitted collars, harnesses, and leads matched to the dog's strength.",
        "Avoid harsh corrections, intimidation, or protective-aggression drills.",
        "Work with a qualified force-free trainer or veterinary behaviourist if reactivity or guarding issues appear.",
      ],

      socialization:
        "Provide gradual, positive exposure to varied people, dogs, sounds, handling, and public settings from a young age. Supervise all interactions with children and other animals, and reinforce calm neutrality rather than forcing close contact.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates with shade and fresh water",
        "Warm weather with walks scheduled during cooler hours",
        "Cool or damp weather with dry shelter and warmth",
      ],

      aloneTimeTolerance:
        "No breed-specific alone-time rating is established. Build alone time gradually with adequate exercise and enrichment, and monitor the individual dog.",
    },
  },

  nutrition: {
    dietType:
      "Complete, balanced dog food suited to life stage, body condition, activity level, and veterinary guidance.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Use the manufacturer's portion guide as a baseline and adjust to keep the dog lean and well-muscled. Measure meals, factor in treats, provide fresh water at all times, and consult a veterinarian for growth or weight-management plans.",

    considerations: [
      "Keep body weight lean to minimize stress on joints and ligaments.",
      "Match daily calories to actual exercise and metabolism.",
      "Feed an appropriate growth formula during puppyhood.",
      "Transition foods gradually unless advised otherwise by a veterinarian.",
      "Seek veterinary advice for digestive upset, appetite shifts, or unexplained weight changes.",
    ],

    note:
      "No universal portion size or meal count applies to every Perro de Presa Mallorquín; needs vary with age, condition, workload, and food energy density.",
  },

  health: {
    overview:
      "Official breed standards emphasize functional, clinical soundness but do not establish a comprehensive, population-level list of hereditary diseases for this breed. Avoid assuming specific conditions are widespread without supporting data, and work with a veterinarian to tailor preventive care and screening to family history and clinical exams.",

    commonConditions: [],

    preventiveCare: [
      "Schedule routine veterinary check-ups and keep vaccinations and parasite prevention current.",
      "Maintain a lean body weight and tailor exercise to age and joint health.",
      "Seek prompt veterinary evaluation for persistent lameness, breathing changes, exercise intolerance, or skin issues.",
      "Keep dental, ear, nail, and skin care consistent.",
      "Ask breeders for available multi-generation health history and discuss relevant screenings with your veterinarian.",
    ],

    recommendedScreenings: [],

    dentalCare:
      "Brush teeth regularly with canine toothpaste and arrange periodic veterinary oral checks. Have bad breath, red gums, broken teeth, or chewing discomfort examined promptly.",

    earCare:
      "Check ears regularly for redness, odour, wax, or discharge. Clean gently with a veterinarian-approved solution only when needed.",

    skinCare:
      "Inspect the short coat and skin during weekly brushing. Consult a veterinarian for persistent itching, redness, sores, or hair loss.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Experienced handlers ready to train and guide a strong, muscular dog responsibly",
      "Households committed to early socialization and daily mental and physical engagement",
      "Owners who favour calm, reward-based training and safe equipment",
      "People able to comply with local regulations for guardian breeds",
    ],

    notIdealFor: [
      "Handlers unable to physically control a powerful dog on a lead",
      "Households unwilling to dedicate time to early training and socialization",
      "People wanting a dog that needs minimal structure or supervision",
      "Owners hoping to encourage guarding behaviour without professional management",
    ],
  },

  funFacts: [
    "In Mallorca, the breed is traditionally called the Ca de Bou, meaning 'bull dog' in Catalan.",
    "Its ancestry reflects centuries of Mediterranean maritime travel linking Iberian mastiffs, native island dogs, and British dogs.",
    "The breed was recorded in Spain's stud book by 1923, with its first official registration in 1928 and a Barcelona show appearance in 1929.",
    "It has a slightly elongated body and a massive, broad head—especially pronounced in males—paired with a characteristic undershot bite.",
    "Brindle, fawn, and black coats are accepted, often accompanied by a black mask and small white markings.",
  ],

  faq: [
    {
      question: "Where does the Perro de Presa Mallorquín come from?",
      answer:
        "It comes from Mallorca in Spain's Balearic Islands, where mastiff-type dogs brought across the Mediterranean blended with local island dogs and British dogs over centuries.",
    },
    {
      question: "Is the Ca de Bou the same breed?",
      answer:
        "Yes. Ca de Bou is the traditional Mallorcan name for the Perro de Presa Mallorquín, also known in English as the Majorca Mastiff.",
    },
    {
      question: "How tall is a Perro de Presa Mallorquín?",
      answer:
        "Adult males typically measure 55–60 cm at the withers and females 52–57 cm, though some registry publications list slightly narrower ranges of 55–58 cm for males and 52–55 cm for females.",
    },
    {
      question: "How much does a Perro de Presa Mallorquín weigh?",
      answer:
        "Adult males typically weigh 35–45 kg and females 30–35 kg, though older registry figures list 35–38 kg for males and 30–34 kg for females.",
    },
    {
      question: "What is the breed's temperament like?",
      answer:
        "Typically calm, confident, courageous, and deeply loyal to familiar people, though early socialization, consistent training, and responsible handling strongly shape adult behaviour.",
    },
    {
      question: "What coat colours are accepted?",
      answer:
        "Brindle, fawn, and black are accepted, with limited white markings on the front feet, chest, and muzzle and an optional black mask.",
    },
    {
      question: "Is this breed suitable for a first-time owner?",
      answer:
        "It is generally not recommended for inexperienced owners because of its strength and potential guarding instincts. Consistent, reward-based training and secure handling are essential.",
    },
    {
      question: "Is the breed good with children?",
      answer:
        "No universal yes-or-no rating applies. Suitability depends on the individual dog's temperament, training, and strict adult supervision alongside teaching children respectful handling.",
    },
    {
      question: "Does the breed have known health problems?",
      answer:
        "Available official breed references do not establish a confirmed list of common hereditary diseases. Ask breeders for parental health history and consult a veterinarian about preventive care and screening.",
    },
    {
      question: "How much grooming does it need?",
      answer:
        "Very little. Weekly brushing with a soft brush or rubber mitt, occasional baths, regular nail trims, ear checks, and routine tooth brushing are sufficient.",
    },
  ],

  references: [
    "fci-majorca-mastiff-standard-249",
    "fci-majorca-mastiff-nomenclature-249",
    "rsce-dogo-mallorquin-standard",
    "commons-ca-de-bou-animaisa",
    "the-dog-api",
  ],

  evidence: {
    scientificName: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Conventional scientific designation for the domestic dog; not a breed-specific taxonomic distinction.",
    },

    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-majorca-mastiff-nomenclature-249",
          role: "verified",
          locator:
            "Official breed nomenclature: Majorca Mastiff, Dogue de Majorque, Mallorca-Dogge, and Ca de Bou",
        },
        {
          id: "fci-majorca-mastiff-standard-249",
          role: "verified",
          locator: "Standard title: Majorca Mastiff (Perro Dogo Mallorquin, Ca de Bou)",
        },
        {
          id: "rsce-dogo-mallorquin-standard",
          role: "verified",
          locator: "Breed profile heading: Dogo Mallorquín (Ca de Bou)",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names (Majorcan Mastiff, Majorcan Bulldog)",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Combines official FCI and RSCE names with common English synonyms from The Dog API.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-majorca-mastiff-standard-249",
          role: "verified",
          locator:
            "FCI classification: Group 2, Section 2.1 Molossian, Mastiff type; without working trial",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Follows the FCI classification; The Dog API lists Working.",
    },

    origin: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-majorca-mastiff-standard-249",
          role: "verified",
          locator: "Origin: Spain; historical summary of the Balearic Islands",
        },
        {
          id: "rsce-dogo-mallorquin-standard",
          role: "verified",
          locator: "Origin and historical summary",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Spain is the registered country of origin; Mallorca in the Balearic Islands is documented in breed history.",
    },

    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rsce-dogo-mallorquin-standard",
          role: "verified",
          locator: "Breed name and historical account referring to Mallorca",
        },
      ],
      verifiedOn: "2026-11-13",
      note: "Mallorca in the Balearic Islands is supported by the breed history.",
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-majorca-mastiff-standard-249",
          role: "verified",
          locator:
            "Utilization, Brief Historical Summary, General Appearance, and Behaviour/Temperament",
        },
        {
          id: "rsce-dogo-mallorquin-standard",
          role: "cited",
          locator: "History, general appearance, temperament, and utilization",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "All user-facing text is newly written original prose summarizing the breed's history, conformation, and traditional role.",
    },

    physical: {
      reliability: "reliable_source",
      sources: [
        {
          id: "rsce-dogo-mallorquin-standard",
          role: "verified",
          locator:
            "General appearance, head, body, coat, colour, height, and weight",
        },
        {
          id: "fci-majorca-mastiff-standard-249",
          role: "cited",
          locator:
            "General Appearance, Coat, Colour, Size and Weight",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span, breed.height.metric, breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Primary height, weight, and colour-preference values follow the newer RSCE Spanish standard; the older 1997 English-language FCI standard and The Dog API list narrower height/weight ranges. Coat colours follow FCI/RSCE rather than The Dog API's species-wide colour list.",
    },

    "physical.height": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rsce-dogo-mallorquin-standard",
          role: "verified",
          locator: "Tamaño: males 55–60 cm; females 52–57 cm",
        },
        {
          id: "fci-majorca-mastiff-standard-249",
          role: "conflicting",
          locator: "Size and Weight: males 55–58 cm; females 52–55 cm",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.height.metric: males 55–58 cm; females 52–55 cm",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Retains the newer RSCE standard's 55–60 cm (male) and 52–57 cm (female) ranges and records the narrower 55–58 cm / 52–55 cm ranges from the older 1997 FCI English PDF and The Dog API as conflicting.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rsce-dogo-mallorquin-standard",
          role: "verified",
          locator: "Peso: males 35–45 kg; females 30–35 kg",
        },
        {
          id: "fci-majorca-mastiff-standard-249",
          role: "conflicting",
          locator: "Size and Weight: males 35–38 kg; females 30–34 kg",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight.metric: males 35–38 kg; females 30–34 kg",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Retains the newer RSCE standard's 35–45 kg (male) and 30–35 kg (female) ranges and records the narrower 35–38 kg / 30–34 kg ranges from the older 1997 FCI English PDF and The Dog API as conflicting.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span (10–12 years)",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "FCI Standard No. 249 and the RSCE profile do not publish a lifespan; 10–12 years is sourced from The Dog API.",
    },

    "physical.coatColors": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rsce-dogo-mallorquin-standard",
          role: "verified",
          locator: "Color: fawn and brindle equally preferred; black also accepted; limited white markings and black mask permitted",
        },
        {
          id: "fci-majorca-mastiff-standard-249",
          role: "conflicting",
          locator: "Colour: brindle, fawn and black in that preference order; limited white patches and black mask permitted",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Accepted colours match across FCI and RSCE, though preference order differs slightly between the newer RSCE text and the older English FCI PDF.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific drooling rating was established in consulted sources.",
    },

    temperament: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-majorca-mastiff-standard-249",
          role: "verified",
          locator: "Behaviour / Temperament",
        },
        {
          id: "rsce-dogo-mallorquin-standard",
          role: "cited",
          locator: "Temperament and character",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Temperament traits paraphrase published breed descriptions; individual behaviour varies.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-majorca-mastiff-standard-249",
          role: "cited",
          locator: "Behaviour / Temperament and utilization",
        },
        {
          id: "rsce-dogo-mallorquin-standard",
          role: "cited",
          locator: "Temperament, character, and guarding role",
        },
      ],
      verifiedOn: null,
      note:
        "1–5 scores are editorial estimates for app comparison, not official or scientific ratings.",
    },

    "temperament.scores.withChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Consulted standards do not establish a reliable breed-wide score for behaviour with children.",
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-majorca-mastiff-standard-249",
          role: "cited",
          locator: "General appearance, coat, and behaviour/temperament",
        },
        {
          id: "rsce-dogo-mallorquin-standard",
          role: "cited",
          locator: "Appearance, temperament, and utilization",
        },
      ],
      verifiedOn: null,
      note:
        "General care guidance tailored to a strong, short-coated Molosser; not a veterinary prescription.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Consulted sources do not specify a universal daily exercise-minute target.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No sufficiently reliable breed-specific source establishes apartment suitability.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "rsce-dogo-mallorquin-standard",
          role: "cited",
          locator: "Breed profile and physical measurements",
        },
      ],
      verifiedOn: null,
      note:
        "General canine nutrition guidance, not a breed-specific feeding prescription.",
    },

    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal breed-specific puppy meal frequency was established.",
    },

    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal breed-specific adult meal frequency was established.",
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal breed-specific senior meal frequency was established.",
    },

    health: {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-majorca-mastiff-standard-249",
          role: "cited",
          locator: "Note: only functionally and clinically healthy dogs should be used for breeding",
        },
        {
          id: "rsce-dogo-mallorquin-standard",
          role: "cited",
          locator: "Breed standard and health/welfare-related fault guidance",
        },
      ],
      verifiedOn: null,
      note:
        "Consulted sources support general preventive care without establishing a breed-specific disease profile.",
    },

    "health.commonConditions": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Consulted sources do not establish a reliable list of common inherited conditions or prevalence.",
    },

    "health.recommendedScreenings": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Consulted sources do not establish a breed-wide screening protocol; consult a veterinarian.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "fci-majorca-mastiff-standard-249",
          role: "cited",
          locator: "General Appearance and Behaviour/Temperament",
        },
        {
          id: "rsce-dogo-mallorquin-standard",
          role: "cited",
          locator: "Temperament, guarding role, and physical characteristics",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial suitability assessment based on size, strength, and guarding heritage; individual dogs vary.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-wide rating for families with children was established.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-wide senior-owner suitability rating was established.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Consulted sources do not establish a definitive breed-level apartment-suitability rating.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-majorca-mastiff-standard-249",
          role: "verified",
          locator: "Brief Historical Summary and breed characteristics",
        },
        {
          id: "rsce-dogo-mallorquin-standard",
          role: "verified",
          locator: "History, coat colour, and physical characteristics",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Historical and physical facts written in original wording.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-majorca-mastiff-standard-249",
          role: "verified",
          locator: "Origin, history, temperament, coat colour, height, and weight",
        },
        {
          id: "rsce-dogo-mallorquin-standard",
          role: "verified",
          locator: "History, temperament, coat colour, height, and weight",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Original answers synthesizing the RSCE profile and older English-language FCI standard, noting measurement variations.",
    },
  },

  updatedOn: "2026-11-13",
};
