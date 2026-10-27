import type { Breed } from "../schema/breed.types";

export const perro_de_presa_mallorquin: Breed = {
  slug: "perro-de-presa-mallorquin",
  name: "Perro de Presa Mallorquín",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Ca de Bou",
    "Perro Dogo Mallorquín",
    "Majorca Mastiff",
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
      metadataCheckedOn: "2026-10-27",
    },
  ],

  overview: {
    summary:
      "The Perro de Presa Mallorquín, also known as the Ca de Bou, is a powerful, medium-sized mastiff-type dog originating from Mallorca, Spain. Its broad head, muscular body, short coat, and confident bearing reflect its historical role as a guard dog. A well-socialised individual can be calm and composed around familiar people, but its size and strength make thoughtful ownership, early training, and responsible handling especially important.",

    description:
      "This breed has a slightly elongated, strongly built body, a broad and substantial head, powerful jaws, and a short, somewhat rough coat. The head is especially imposing, with a broad skull, pronounced facial structure, and small rose-shaped ears. Its coat is commonly brindle or fawn, while black is also accepted; limited white markings and a black mask may occur. The breed standard describes a generally quiet, self-assured dog that can show courage when needed. Individual behaviour depends on breeding, early socialisation, training, health, and day-to-day management. Because the dog is muscular and strong, its owner should be able to guide it calmly and safely in ordinary public situations.",

    history:
      "The breed developed in the Balearic Islands as mastiff-type dogs travelled around the Mediterranean with people and trade. Historical accounts describe Iberian mastiffs arriving in the islands and later mixing with guard dogs brought by the British. The resulting Ca de Bou was used for guarding and other practical work, and its presence is recorded in Spain's stud book by 1923. The first official registration followed in 1928, and a dog of the breed was shown in Barcelona in 1929. Some historical uses involved animal fighting; that history is context, not a recommendation for modern ownership or training.",

    originalPurpose:
      "Guarding and protection, including work around homes, properties, and livestock-related settings.",

    currentRoles: [
      "Companion in a suitably prepared household",
      "Property and home guardian where lawful and responsibly managed",
      "Obedience and relationship-based training activities",
      "Canine sports or structured activities appropriate to the individual dog's health and temperament",
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

    lifespanYears: null,

    coatType: "Short, close-lying, and slightly rough to the touch.",

    coatLength:
      "Short coat over the body; it does not require extensive trimming.",

    coatColors: [
      "Brindle, with darker and well-defined brindle patterns preferred in the older English-language standard.",
      "Fawn, with deeper shades preferred in the older English-language standard.",
      "Black.",
      "Limited white markings may occur on the feet, chest, and muzzle.",
      "A black mask is permitted.",
    ],

    sheddingLevel:
      "A short coat is relatively easy to maintain, but some shedding should be expected. A precise breed-specific shedding rating was not established in the consulted sources.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Strong, muscular, slightly elongated body.",
      "Large, broad, almost square head.",
      "Powerful jaw muscles and a characteristic undershot bite in the published standard.",
      "Small, high-set rose-shaped ears.",
      "Short, rough coat.",
      "Thick tail that tapers toward the tip.",
      "Noticeable difference between male and female head size.",
    ],
  },

  temperament: {
    traits: [
      "Generally calm by nature",
      "Confident and self-assured",
      "Courageous when circumstances call for it",
      "Loyal and devoted to familiar people",
      "Strong and physically powerful",
      "Potentially protective of home and property",
      "Needs consistent handling and appropriate socialisation",
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
        "Moderate, adjusted to age, fitness, and health. Provide regular walks, structured training, and opportunities for calm exploration rather than relying only on intense physical exercise.",

      minutesPerDay: null,

      activities: [
        "Daily lead walks",
        "Reward-based obedience training",
        "Scent and food-search games",
        "Controlled play appropriate to size and fitness",
        "Calm exposure to different environments",
        "Structured activities selected for the individual dog's joints and physical condition",
      ],
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush the short coat periodically with a soft brush or grooming mitt to remove loose hair and check the skin.",

      bathing:
        "Bathe when needed with a dog-specific shampoo. Avoid unnecessary frequent bathing that may irritate the skin.",

      notes: [
        "Inspect the skin for redness, irritation, or unusual lumps during routine grooming.",
        "Check ears regularly for redness, odour, or discharge.",
        "Trim nails as needed to maintain comfortable movement.",
        "Brush teeth regularly with dog-specific toothpaste.",
        "Clean the face gently if dirt collects around the muzzle.",
      ],
    },

    training: {
      difficulty:
        "Moderate to challenging for an inexperienced handler because the breed is strong and may show guarding behaviour. Training should be consistent, reward-based, and focused on safe everyday control.",

      tips: [
        "Start reward-based training and calm socialisation early.",
        "Teach loose-lead walking, recall, settle, and polite greetings as practical priorities.",
        "Reward calm behaviour around unfamiliar people rather than encouraging suspicion or confrontation.",
        "Use secure equipment suited to the dog's strength and body size.",
        "Avoid intimidation, deliberate aggression training, or punishment-based handling.",
        "Seek a qualified, humane trainer or veterinary behaviour professional if guarding, reactivity, or handling difficulties arise.",
      ],

      socialization:
        "Introduce the puppy gradually and positively to people, dogs, handling, sounds, and everyday environments. Supervise all interactions with children and other animals. Continue practising calm greetings and safe public behaviour throughout adulthood; socialisation should not mean forcing close contact with every person or dog.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Temperate conditions with access to shade and fresh water",
        "Warm weather with exercise scheduled for cooler periods",
        "Cold or wet weather with suitable shelter and individual comfort monitored",
      ],

      aloneTimeTolerance:
        "A reliable breed-specific alone-time tolerance rating was not established. Build alone time gradually, provide enrichment, and assess the individual dog's response.",
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced diet appropriate to the dog's age, body condition, activity, and veterinary needs.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Use the food manufacturer's feeding guide as a starting point and adjust portions to maintain a healthy body condition. Measure meals, account for treats, provide fresh water, and seek veterinary advice for growth, weight management, or medical dietary needs.",

    considerations: [
      "Maintain a healthy body condition and avoid excess weight.",
      "Adjust portions to the individual dog's activity level and food energy density.",
      "Use an appropriate growth diet for puppies and a suitable diet for older dogs.",
      "Make routine diet changes gradually unless a veterinarian advises otherwise.",
      "Consult a veterinarian about persistent digestive problems, appetite changes, or unexplained weight change.",
    ],

    note:
      "No breed-specific feeding quantity or universal meal frequency is recorded. Requirements vary with age, body condition, activity, and the food being fed.",
  },

  health: {
    overview:
      "The consulted breed standards describe conformation and temperament but do not establish a comprehensive, evidence-based list of common inherited diseases or a reliable lifespan range for the breed. This record therefore does not claim that particular disorders are prevalent in all Perro de Presa Mallorquín dogs. A veterinarian can advise on preventive care and screening based on the dog's family history, age, body condition, and clinical findings.",

    commonConditions: [],

    preventiveCare: [
      "Arrange routine veterinary examinations and keep vaccinations and parasite prevention appropriate to the dog's circumstances.",
      "Maintain a healthy body condition and adapt exercise to age and physical condition.",
      "Seek veterinary advice for persistent lameness, exercise intolerance, breathing changes, skin problems, or changes in behaviour.",
      "Keep dental, ear, nail, and skin care up to date.",
      "Ask breeders for available health history and discuss appropriate screening with a veterinarian.",
    ],

    recommendedScreenings: [],

    dentalCare:
      "Brush the teeth regularly with dog-specific toothpaste. Arrange veterinary dental checks and seek advice for gum inflammation, persistent bad breath, oral pain, or difficulty chewing.",

    earCare:
      "Check the ears regularly for redness, odour, discharge, or persistent scratching. Clean only as needed with a veterinarian-approved product and seek advice if irritation persists.",

    skinCare:
      "Inspect the short coat and skin during routine grooming. Seek veterinary advice for persistent itching, redness, sores, or other unexplained skin changes.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Owners prepared to train and manage a strong, muscular dog responsibly",
      "Households able to provide consistent socialisation and daily engagement",
      "People willing to learn reward-based training and safe handling",
      "Owners who can comply with local rules governing dogs and public access",
    ],

    notIdealFor: [
      "Owners who cannot safely manage a powerful dog on lead",
      "Households unwilling to invest time in training and socialisation",
      "People seeking a dog that needs little structure or supervision",
      "Owners expecting guarding behaviour to develop safely without training or management",
    ],
  },

  funFacts: [
    "The breed is widely known by the traditional Mallorcan name Ca de Bou.",
    "Its history is closely tied to Mediterranean travel and the movement of mastiff-type dogs between coastal regions.",
    "The breed was recorded in Spain's stud book by 1923, with its first official registration in 1928.",
    "The standard describes a slightly elongated body and a head that is especially substantial in males.",
    "Brindle and fawn are prominent coat colours, and a black mask is permitted.",
  ],

  faq: [
    {
      question: "Where does the Perro de Presa Mallorquín come from?",
      answer:
        "It comes from Mallorca in Spain's Balearic Islands. Its history is linked to mastiff-type dogs that travelled around the Mediterranean and later developed into the local Ca de Bou.",
    },
    {
      question: "Is the Ca de Bou the same breed?",
      answer:
        "Yes. Ca de Bou is a traditional name for the Perro Dogo Mallorquín, also known in English as the Majorca Mastiff.",
    },
    {
      question: "How tall is a Perro de Presa Mallorquín?",
      answer:
        "The Spanish breed profile gives a height of 55–60 cm for males and 52–57 cm for females. An older English-language FCI standard gives narrower ranges, so the version of the standard should be checked when exact show measurements matter.",
    },
    {
      question: "How much does a Perro de Presa Mallorquín weigh?",
      answer:
        "The Spanish breed profile gives a weight of 35–45 kg for males and 30–35 kg for females. An older English-language FCI standard lists different ranges, so the discrepancy should be kept in mind when comparing records.",
    },
    {
      question: "What is the breed's temperament like?",
      answer:
        "The breed is described as generally calm, confident, courageous, and devoted to familiar people. Each dog is an individual, and early socialisation, training, health, and responsible handling affect its behaviour.",
    },
    {
      question: "What coat colours are accepted?",
      answer:
        "Brindle, fawn, and black are accepted colours. Limited white markings may be present, and a black mask is permitted. The Spanish profile gives fawn and brindle equal preference, while the older English-language standard ranks brindle first.",
    },
    {
      question: "Is this breed suitable for a first-time owner?",
      answer:
        "It is not an easy default choice for an inexperienced owner because it is strong and may show guarding behaviour. Anyone considering the breed should be ready to provide structured training, socialisation, and safe physical control.",
    },
    {
      question: "Is the breed good with children?",
      answer:
        "A reliable breed-wide yes-or-no rating is not established here. Any dog-child interaction should be supervised, children should be taught respectful handling, and suitability should be judged for the individual dog and household.",
    },
    {
      question: "Does the breed have known health problems?",
      answer:
        "The sources consulted for this record do not establish a reliable breed-wide list of common inherited conditions. Ask a responsible breeder about the family health history and consult a veterinarian about appropriate preventive care and screening.",
    },
    {
      question: "How much grooming does it need?",
      answer:
        "The short coat is relatively easy to maintain. Periodic brushing, occasional bathing, regular nail care, ear checks, and dental hygiene are sensible parts of routine care.",
    },
  ],


  references: [
    "fci-majorca-mastiff-standard-249",
    "fci-majorca-mastiff-nomenclature-249",
    "rsce-dogo-mallorquin-standard",
    "commons-ca-de-bou-animaisa",
  ],

  evidence: {
    scientificName: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Conventional scientific designation for the domestic dog; it is not a breed-specific taxonomic distinction.",
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
      ],
      verifiedOn: "2026-10-27",
      note:
        "The recorded names are supported by the FCI standard title and the Spanish breed profile.",
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
      verifiedOn: "2026-10-27",
      note:
        "Uses the FCI classification and does not merge classifications from unrelated registry systems.",
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
      verifiedOn: "2026-10-27",
      note:
        "Spain is the registered country of origin; Mallorca is supported by the breed's historical account.",
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
      verifiedOn: "2026-10-27",
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
      ],
      verifiedOn: "2026-10-27",
      note:
        "User-facing text is an original summary of the breed's history, appearance, and traditional function.",
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
            "General Appearance, Coat, Colour, Size and Weight; this English-language standard gives different height, weight, and colour-preference details",
        },
      ],
      verifiedOn: "2026-10-27",
      note:
        "The primary recorded height, weight, and coat-colour preference values follow the Spanish breed profile. The older English-language FCI standard differs on some details; its figures have not been silently substituted or converted.",
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
      ],
      verifiedOn: "2026-10-27",
      note:
        "Uses the height ranges shown in the Spanish profile and explicitly records the narrower ranges in the older English-language standard as conflicting information.",
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
      ],
      verifiedOn: "2026-10-27",
      note:
        "Uses the ranges in the Spanish profile and retains the older English-language standard's different ranges as conflicting information. No unit conversion was performed.",
    },

    "physical.lifespanYears": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted official standard and Spanish breed profile do not establish a reliable lifespan range.",
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
      verifiedOn: "2026-10-27",
      note:
        "Accepted colours broadly overlap, but the sources differ on preference order. The record makes that distinction explicit.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific drooling rating was established in the consulted sources.",
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
      ],
      verifiedOn: "2026-10-27",
      note:
        "Temperament traits paraphrase the published breed descriptions; they do not guarantee individual behaviour.",
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
        "The 1–5 scores are editorial estimates for app comparison, not official ratings or scientific measurements.",
    },

    "temperament.scores.withChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted breed standards do not establish a reliable breed-wide score for behaviour with children.",
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
        "Care recommendations are general, practical guidance tailored to a strong, short-coated dog; they are not official breed-specific exercise prescriptions.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted sources do not specify a universal daily exercise-minute target.",
    },
    "care.livingEnvironment.apartmentSuitable": {
  reliability: "unavailable",
  sources: [],
  verifiedOn: null,
  note: "No sufficiently reliable, breed-specific source was found to verify apartment suitability.",
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
        "Nutrition content is general canine-care guidance, not a breed-specific feeding prescription.",
    },

    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal breed-specific puppy meal frequency was established; individual feeding should account for age, food, and veterinary advice.",
    },

    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal breed-specific adult meal frequency was established; individual feeding should account for activity, body condition, food, and veterinary advice.",
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal breed-specific senior meal frequency was established; individual feeding should account for health, appetite, and veterinary advice.",
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
        "The available sources support general preventive care but do not establish a comprehensive breed-specific disease profile.",
    },

    "health.commonConditions": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted sources do not establish a reliable list of common inherited conditions or population-level prevalence for this breed.",
    },

    "health.recommendedScreenings": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted sources do not establish a specific breed-wide screening protocol. Screening should be discussed with a veterinarian and informed by family history.",
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
        "Suitability flags are cautious editorial assessments based on the dog's size, strength, and potential guarding role; they are not guarantees about an individual dog.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A reliable breed-wide yes/no rating for families with children was not established. Suitability depends on the individual dog, household, training, and supervision.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A reliable breed-wide senior-owner suitability rating was not established; individual handling ability and the dog's training matter.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted sources do not establish a definitive breed-level apartment-suitability rating.",
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
      verifiedOn: "2026-10-27",
      note:
        "Historical details and physical characteristics are paraphrased in original wording.",
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
      verifiedOn: "2026-10-27",
      note:
        "FAQ answers are original paraphrases. Differences between the Spanish profile and older English-language standard are explicitly disclosed.",
    },
  },

  updatedOn: "2026-10-27",
};
