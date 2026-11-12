import type { Breed } from "../schema/breed.types";

export const shar_pei: Breed = {
  slug: "shar-pei",
  name: "Shar Pei",
  scientificName: null,

  alternateNames: [
    "Chinese Shar-Pei",
    "Shar-Pei",
    "Chinese Fighting Dog",
  ],

  group:
    "Pinscher and Schnauzer – Molossoid and Swiss Mountain and Cattledogs; Molossian type, Mastiff type (Non-Sporting Group)",

  origin: {
    country: "China",
    region: "Southern coastal provinces",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Traditional_Shar_Pei.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Traditional_Shar_Pei.jpg",
      title: "Traditional_Shar_Pei.jpg",
      description: "A traditional Shar Pei photographed outdoors.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: null,
      uploadedOn: "2016-11-25",
      width: 697,
      height: 675,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, licensed under CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Traditional_Shar_Pei.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Provide appropriate credit, link to the license, indicate changes, and comply with the applicable share-alike terms for adaptations.",
      restrictions: null,
      metadataCheckedOn: "2026-11-12",
    },
  ],

  overview: {
    summary:
      "A compact, medium-sized Chinese breed instantly recognizable by its loose skin folds, broad hippopotamus-shaped muzzle, blue-black tongue, and harsh, bristly coat.",

    description:
      "The Shar Pei is a square-proportioned, sturdy companion dog with a broad skull, pronounced forehead and shoulder wrinkles, tiny triangular ears, and a high-set tail curled cleanly over the back. Its rough single coat—translated from Cantonese as 'sand skin'—ranges from an ultra-short horse coat to a slightly longer brush coat. Calm, self-possessed, and deeply loyal to its household, the Shar Pei tends to be reserved around strangers and benefits from early, consistent socialization alongside attentive eye, ear, and skin-fold care.",

    history:
      "Originating along China's southern coast and recorded as early as the Han Dynasty, the Shar Pei served rural households as an all-around guardian, herder, hunter, and pit fighter. Political upheaval and heavy taxation in the mid-twentieth century nearly wiped out the breed, leaving only a handful of survivors in Hong Kong and Macau. Dedicated breeders launched an international rescue effort in the early 1970s, rebuilding the population and securing definitive international recognition in June 1981.",

    originalPurpose:
      "All-purpose Chinese farm guardian, hunter, herder, and pit-fighting dog.",

    currentRoles: [
      "Loyal family companion and household watchdog",
      "Conformation, obedience, rally, agility, and therapy participant",
    ],
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "in",
      male: { min: 18, max: 20 },
      female: { min: 18, max: 20 },
    },

    weight: {
      unit: "lb",
      male: { min: 45, max: 60 },
      female: { min: 45, max: 60 },
    },

    lifespanYears: {
      min: 8,
      max: 12,
    },

    coatType:
      "Short, harsh, bristly single coat with no undercoat, occurring in horse-coat or brush-coat textures",

    coatLength:
      "Very short 'horse coat' or a somewhat longer 'brush coat', not exceeding 2.5 cm",

    coatColors: [
      "Black",
      "Blue",
      "Fawn",
      "Red",
      "Cream",
      "Sable",
      "Chocolate",
      "Isabella",
      "Apricot",
    ],

    sheddingLevel: "Moderate",
    droolingLevel: "Low to moderate",

    distinctiveFeatures: [
      "Loose, deeply folded skin across the forehead, cheeks, and withers, especially prominent in puppies",
      "Broad, padded hippopotamus-like muzzle paired with a solid blue-black or lavender tongue",
      "Small, thick, triangular ears folded forward close to the skull",
      "Harsh, sand-textured single coat lacking any undercoat",
      "High-set, thick-based tail carried curled over or to the side of the back",
    ],
  },

  temperament: {
    traits: [
      "Calm",
      "Independent",
      "Devoted",
      "Alert",
      "Dignified",
      "Reserved with strangers",
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 2,
      withStrangers: 2,
      protectiveness: 5,
      independence: 5,
      trainability: 3,
      barking: 2,
      energy: 3,
    },
  },

  care: {
    exercise: {
      level:
        "Moderate — satisfied by daily brisk walks, structured play, and mental enrichment without requiring endurance athletics.",
      minutesPerDay: { min: 30, max: 45 },
      activities: [
        "Daily leashed walks in temperate weather",
        "Short scent-work, puzzle-feeder, or obedience sessions",
        "Supervised yard play inside secure fencing",
      ],
    },

    grooming: {
      level: "Low to moderate",
      brushing:
        "Brush weekly with a soft bristle brush or rubber grooming mitt to lift dead hair and check the skin.",
      bathing:
        "Bathe periodically as needed, rinsing thoroughly and drying every skin fold completely to prevent trapped moisture.",
      notes: [
        "Inspect and gently dry facial, neck, and body folds regularly, especially after baths or wet weather.",
        "Check the small, tightly folded ear canals weekly for wax buildup, odour, or redness.",
        "Trim nails every few weeks and maintain routine dental brushing.",
      ],
    },

    training: {
      difficulty:
        "Moderate — intelligent and house-trains quickly, though independent and strong-willed if sessions turn repetitive.",
      tips: [
        "Use upbeat, reward-based methods with brief, varied lessons.",
        "Establish calm household leadership and polite leash manners during puppyhood.",
        "Avoid harsh corrections, which can trigger stubbornness or defensive distrust.",
      ],
      socialization:
        "Begin structured, positive introductions to unfamiliar people, calm dogs, veterinary handling, and varied environments early in puppyhood.",
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: [
        "Best suited to temperate conditions; the broad muzzle and compact airways heighten heat sensitivity.",
        "Limit strenuous exercise during hot, humid afternoons and provide constant shade and fresh water.",
      ],
      aloneTimeTolerance:
        "Low to moderate — bonds closely with its household and does not thrive when left isolated for long stretches.",
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced commercial or veterinary-formulated diet tailored to a medium-sized dog's life stage and activity level.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Feed measured daily portions based on body condition score and veterinary guidance, keeping fresh water available at all times.",

    considerations: [
      "Monitor body condition closely to avoid excess weight that can strain hips, elbows, and stifles.",
      "Introduce any diet change gradually over several days to minimize digestive upset.",
      "Discuss specialized diets with a veterinarian if skin allergies, ear inflammation, or kidney concerns arise.",
    ],

    note:
      "No breed-specific meal count or fixed gram ration was established in the sources reviewed; individual caloric needs vary with age and metabolism.",
  },

  health: {
    overview:
      "Shar Peis are predisposed to several inherited structural and immune-mediated conditions. Primary-care veterinary data highlight high rates of eyelid rolling (entropion), chronic ear inflammation, and bacterial skin infections, alongside breed-specific autoinflammatory fever that can progress to kidney amyloidosis. Selecting breeders who complete recommended orthopaedic, eye, thyroid, and genetic screenings—and maintaining attentive fold, ear, and veterinary care—helps protect long-term welfare.",

    commonConditions: [
      "Entropion — inward rolling of the eyelids caused by heavy facial folds that irritates the cornea; recorded in 17.88% of Shar Peis in a UK primary-care study and often requires surgical correction.",
      "Otitis Externa — chronic external ear canal inflammation linked to narrow, folded ear anatomy; documented in 16.36% of Shar Peis in primary-care records.",
      "Familial Shar-Pei Fever (SPAID) & Renal Amyloidosis — recurrent unexplained high fevers and swollen hocks driven by autoinflammatory disease, which can deposit amyloid protein in the kidneys and lead to renal failure.",
      "Skin Fold Dermatitis & Pyoderma — moisture and friction within deep skin folds predispose the breed to bacterial skin infections and allergies.",
      "Hip & Elbow Dysplasia and Patellar Luxation — developmental joint malformations causing lameness or osteoarthritis.",
      "Hypothyroidism — autoimmune thyroiditis leading to low thyroid hormone levels, weight gain, lethargy, and coat changes.",
    ],

    preventiveCare: [
      "Schedule regular veterinary wellness exams, including periodic urinalysis to monitor protein levels for early kidney amyloidosis.",
      "Seek prompt veterinary evaluation for sudden high fevers, swollen hock joints, squinting, or head shaking.",
      "Keep vaccinations, parasite control, and lean body weight up to date.",
    ],

    recommendedScreenings: [
      "Hip dysplasia radiographic evaluation",
      "Elbow dysplasia radiographic evaluation",
      "Patellar luxation clinical examination",
      "Annual veterinary ophthalmologist eye examination",
      "Autoimmune thyroiditis blood panel",
      "Autoinflammatory disease (SPAID) genetic risk testing and routine urinary protein screening",
    ],

    dentalCare:
      "Brush teeth several times a week with canine toothpaste and arrange periodic professional veterinary dental cleanings.",

    earCare:
      "Inspect and gently clean the narrow ear canals weekly as advised by a veterinarian, checking for discharge, redness, or foul odour.",

    skinCare:
      "Keep deep facial and body folds clean and completely dry after bathing or rain, and monitor for hair loss, redness, or scratching.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: null,
    seniorOwners: true,
    activeOwners: false,
    apartmentLiving: true,

    idealFor: [
      "Calm households seeking a clean, devoted, moderate-energy watchdog",
      "Owners willing to commit to early socialization and routine fold, ear, and eye care",
      "Apartment or house dwellers who provide daily walks and consistent companionship",
    ],

    notIdealFor: [
      "Homes wanting an effortless, universally dog-friendly companion for crowded dog parks",
      "People away for long workdays who leave a dog alone for extended periods",
      "Owners unwilling to budget for potential eye, ear, skin, or autoinflammatory veterinary care",
    ],
  },

  funFacts: [
    "In Cantonese, 'Shar Pei' translates to 'sand skin,' a nod to its short, rough, bristly coat.",
    "Alongside the Chow Chow, the Shar Pei is famous for having a solid blue-black or lavender tongue rather than a pink one.",
    "During the mid-1970s, the breed was so scarce that it was briefly listed as the rarest dog breed in the world before an international rescue effort revived it.",
    "Formal international breed recognition became definitive in June 1981.",
  ],

  faq: [
    {
      question: "Why does a Shar Pei have so many wrinkles?",
      answer:
        "Loose, folded skin—most dramatic in puppies—historically helped protect the dog during farm guarding and fighting by making it harder for an opponent or quarry to get a solid grip.",
    },
    {
      question: "What is the difference between a horse coat and a brush coat?",
      answer:
        "A horse coat is extremely short, harsh, and prickly to the touch, whereas a brush coat is slightly longer (up to about 2.5 cm) and feels somewhat softer while remaining straight and stand-off.",
    },
    {
      question: "Do Shar Peis shed or drool heavily?",
      answer:
        "They shed moderately and drool only lightly to moderately, though their loose jowls can drip a little water after drinking.",
    },
    {
      question: "What is Shar-Pei Fever?",
      answer:
        "It is an inherited autoinflammatory condition causing sudden episodes of high fever and painful, swollen hock joints; repeated episodes can lead to amyloid protein buildup in the kidneys.",
    },
    {
      question: "Are Shar Peis good apartment dogs?",
      answer:
        "Yes, their calm indoor demeanor, moderate exercise needs, and low barking tendency suit apartment living well, provided they receive daily walks and regular human company.",
    },
    {
      question: "How big does a Shar Pei get?",
      answer:
        "Adults typically measure 18 to 20 inches at the withers and weigh 45 to 60 pounds, though individual sizes vary.",
    },
  ],

  references: [
    "fci-shar-pei-standard-1999",
    "fci-shar-pei-nomenclature",
    "akc-chinese-shar-pei-standard",
    "akc-chinese-shar-pei-profile",
    "canadian-kennel-club-chinese-shar-pei",
    "vca-chinese-shar-pei",
    "merck-veterinary-manual-shar-pei-fever",
    "chinese-shar-pei-club-health-statement",
    "cspca-spaid-testing",
    "oneill-et-al-shar-pei-health-2023",
    "commons-traditional-shar-pei-canarian-2016",
    "the-dog-api",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names",
        },
        {
          id: "akc-chinese-shar-pei-profile",
          role: "cited",
          locator: "Breed title — Chinese Shar-Pei",
        },
        {
          id: "canadian-kennel-club-chinese-shar-pei",
          role: "cited",
          locator: "Breed title — Chinese Shar-Pei",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Alternate names cross-referenced between The Dog API and North American kennel club listings.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No separate scientific binomial is assigned beyond domestic dog (Canis lupus familiaris).",
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shar-pei-standard-1999",
          role: "verified",
          locator: "Classification: Group 2, Section 2.1 Molossian type, Mastiff type",
        },
        {
          id: "akc-chinese-shar-pei-profile",
          role: "cited",
          locator: "Group: Non-Sporting Group",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group: Non-Sporting",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shar-pei-standard-1999",
          role: "verified",
          locator: "Origin: China",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: China",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "origin.region": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shar-pei-standard-1999",
          role: "verified",
          locator: "Brief Historical Summary — coastal provinces around the South China Sea",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.history — southern provinces",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "overview.summary": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shar-pei-standard-1999",
          role: "verified",
          locator: "General Appearance",
        },
        {
          id: "akc-chinese-shar-pei-standard",
          role: "verified",
          locator: "General Appearance",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "overview.description": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shar-pei-standard-1999",
          role: "verified",
          locator: "General Appearance, Head, Coat, Behaviour/Temperament",
        },
        {
          id: "akc-chinese-shar-pei-standard",
          role: "verified",
          locator: "General Appearance, Head, Coat, Temperament",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "overview.history": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shar-pei-standard-1999",
          role: "verified",
          locator: "Brief Historical Summary",
        },
        {
          id: "fci-shar-pei-nomenclature",
          role: "cited",
          locator: "Date of acceptance on a definitive basis: 30/06/1981",
        },
        {
          id: "canadian-kennel-club-chinese-shar-pei",
          role: "cited",
          locator: "History section — near-extinction and 1970s revival",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.history",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "overview.originalPurpose": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shar-pei-standard-1999",
          role: "verified",
          locator: "Brief Historical Summary — hunting and guard dog, fighting dog",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.history — hunting, herding, guarding, and farm work",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "overview.currentRoles": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-chinese-shar-pei-profile",
          role: "verified",
          locator: "Breed Overview and Companion / Performance sports",
        },
        {
          id: "canadian-kennel-club-chinese-shar-pei",
          role: "cited",
          locator: "Breed profile — family companion and watchdog",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.sizeCategory": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shar-pei-standard-1999",
          role: "verified",
          locator: "General Appearance — medium-sized",
        },
        {
          id: "akc-chinese-shar-pei-standard",
          role: "verified",
          locator: "General Appearance — medium-sized",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-chinese-shar-pei-standard",
          role: "verified",
          locator: "Size, Proportion, Substance — 18 to 20 inches at the withers",
        },
        {
          id: "fci-shar-pei-standard-1999",
          role: "cited",
          locator: "Size — 44–51 cm (17.5–20 in)",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric: 46–51 cm",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Preserves 18–20 in from AKC Official Standard; FCI Standard No. 309 specifies 44–51 cm.",
    },
    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-chinese-shar-pei-standard",
          role: "verified",
          locator: "Size, Proportion, Substance — 45 to 60 pounds",
        },
        {
          id: "akc-chinese-shar-pei-profile",
          role: "cited",
          locator: "Weight: 45–60 lb",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.weight.metric: 20–27 kg",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Preserves 45–60 lb from AKC Official Standard; FCI Standard No. 309 does not specify weight.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-chinese-shar-pei-profile",
          role: "verified",
          locator: "Life Expectancy: 8–12 years",
        },
        {
          id: "vca-chinese-shar-pei",
          role: "verified",
          locator: "Life span: 8–12 years",
        },
        {
          id: "oneill-et-al-shar-pei-health-2023",
          role: "cited",
          locator: "Median longevity 7.28 years in UK primary-care cohort",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span: 8–12 years",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shar-pei-standard-1999",
          role: "verified",
          locator: "Coat — short, harsh and bristly, no undercoat",
        },
        {
          id: "akc-chinese-shar-pei-standard",
          role: "verified",
          locator: "Coat — harsh, bristly, off-standing, no undercoat",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shar-pei-standard-1999",
          role: "verified",
          locator: "Coat — 1 cm to 2.5 cm maximum",
        },
        {
          id: "akc-chinese-shar-pei-standard",
          role: "verified",
          locator: "Coat — horse coat vs. brush coat (not exceeding 1 inch)",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shar-pei-standard-1999",
          role: "verified",
          locator: "Colour — all solid colours acceptable except white",
        },
        {
          id: "akc-chinese-shar-pei-standard",
          role: "verified",
          locator: "Color — solid colors and sables",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Only solid colours (with darker shading on back/ears or sable) are accepted in standards; parti-colour, spotted, or solid white are disqualifying.",
    },
    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vca-chinese-shar-pei",
          role: "verified",
          locator: "Coat and Shedding — moderate shedding",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vca-chinese-shar-pei",
          role: "verified",
          locator: "Grooming / Drooling — moderate drooling",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shar-pei-standard-1999",
          role: "verified",
          locator: "General Appearance, Head, Ears, Tail, Coat",
        },
        {
          id: "akc-chinese-shar-pei-standard",
          role: "verified",
          locator: "Head, Mouth (blue-black tongue), Ears, Tail, Coat",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shar-pei-standard-1999",
          role: "verified",
          locator: "Behaviour / Temperament — calm, independent, loyal, affectionate",
        },
        {
          id: "akc-chinese-shar-pei-standard",
          role: "verified",
          locator: "Temperament — regal, alert, intelligent, dignified, aloof with strangers",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-chinese-shar-pei-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics",
        },
        {
          id: "canadian-kennel-club-chinese-shar-pei",
          role: "cited",
          locator: "Temperament and Training",
        },
        {
          id: "vca-chinese-shar-pei",
          role: "cited",
          locator: "Personality and Behaviour",
        },
      ],
      verifiedOn: null,
      note: "1–5 ordinal scores synthesized from published kennel club and veterinary temperament descriptions.",
    },
    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vca-chinese-shar-pei",
          role: "verified",
          locator: "Exercise — moderate daily activity",
        },
        {
          id: "akc-chinese-shar-pei-profile",
          role: "cited",
          locator: "Exercise Needs",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "canadian-kennel-club-chinese-shar-pei",
          role: "verified",
          locator: "Grooming and Skin-Fold Care",
        },
        {
          id: "vca-chinese-shar-pei",
          role: "verified",
          locator: "Grooming, Ears, and Skin Care",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-chinese-shar-pei-profile",
          role: "verified",
          locator: "Training and Socialization",
        },
        {
          id: "canadian-kennel-club-chinese-shar-pei",
          role: "cited",
          locator: "Training — early socialization and positive consistency",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "care.livingEnvironment": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vca-chinese-shar-pei",
          role: "verified",
          locator: "Living Environment, Heat Sensitivity, and Alone-Time Tolerance",
        },
        {
          id: "akc-chinese-shar-pei-profile",
          role: "cited",
          locator: "Living Environment",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "nutrition.dietType": {
      reliability: "reliable_source",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "verified",
          locator: "Complete and balanced life-stage diet",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "nutrition.feedingFrequency": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific meal frequency was specified in reviewed sources.",
    },
    "nutrition.guidelines": {
      reliability: "reliable_source",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "verified",
          locator: "Body condition scoring and portion tailoring",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "nutrition.considerations": {
      reliability: "reliable_source",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "verified",
          locator: "Nutritional assessment and diet transitions",
        },
        {
          id: "vca-chinese-shar-pei",
          role: "cited",
          locator: "Weight management and skin/kidney dietary considerations",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "nutrition.note": {
      reliability: "reliable_source",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "verified",
          locator: "Individualized feeding requirements",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "oneill-et-al-shar-pei-health-2023",
          role: "verified",
          locator: "Abstract and Results — disorder prevalence and longevity",
        },
        {
          id: "merck-veterinary-manual-shar-pei-fever",
          role: "verified",
          locator: "Shar-Pei Fever and Renal Amyloidosis",
        },
        {
          id: "vca-chinese-shar-pei",
          role: "cited",
          locator: "Health Concerns",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "oneill-et-al-shar-pei-health-2023",
          role: "verified",
          locator: "Entropion (17.88%), Otitis externa (16.36%), Pyoderma (4.29%)",
        },
        {
          id: "merck-veterinary-manual-shar-pei-fever",
          role: "verified",
          locator: "Familial Shar-Pei Fever and Amyloidosis",
        },
        {
          id: "chinese-shar-pei-club-health-statement",
          role: "verified",
          locator: "Hip dysplasia, elbow dysplasia, patellar luxation, autoimmune thyroiditis",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "health.preventiveCare": {
      reliability: "reliable_source",
      sources: [
        {
          id: "merck-veterinary-manual-shar-pei-fever",
          role: "verified",
          locator: "Monitoring for fever episodes and urinary protein loss",
        },
        {
          id: "vca-chinese-shar-pei",
          role: "verified",
          locator: "Preventive veterinary wellness",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "chinese-shar-pei-club-health-statement",
          role: "verified",
          locator: "Recommended breed screenings",
        },
        {
          id: "cspca-spaid-testing",
          role: "verified",
          locator: "SPAID genetic risk testing",
        },
        {
          id: "merck-veterinary-manual-shar-pei-fever",
          role: "cited",
          locator: "Urinary protein screening",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "health.dentalCare": {
      reliability: "reliable_source",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "verified",
          locator: "Home brushing and veterinary dental care",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "health.earCare": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vca-chinese-shar-pei",
          role: "verified",
          locator: "Ear canal hygiene",
        },
        {
          id: "oneill-et-al-shar-pei-health-2023",
          role: "cited",
          locator: "Otitis externa prevalence (16.36%)",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "health.skinCare": {
      reliability: "reliable_source",
      sources: [
        {
          id: "canadian-kennel-club-chinese-shar-pei",
          role: "verified",
          locator: "Skin-fold cleaning and drying",
        },
        {
          id: "vca-chinese-shar-pei",
          role: "cited",
          locator: "Fold dermatitis management",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-chinese-shar-pei-profile",
          role: "cited",
          locator: "Breed Characteristics",
        },
        {
          id: "vca-chinese-shar-pei",
          role: "cited",
          locator: "Lifestyle and Care Fit",
        },
        {
          id: "canadian-kennel-club-chinese-shar-pei",
          role: "cited",
          locator: "Owner suitability",
        },
      ],
      verifiedOn: null,
      note: "Suitability booleans and lists synthesized from published kennel club and veterinary care profiles.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Left null because child suitability depends heavily on early socialization and respectful handling.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-shar-pei-standard-1999",
          role: "verified",
          locator: "Name translation ('sand skin') and blue-black tongue",
        },
        {
          id: "fci-shar-pei-nomenclature",
          role: "verified",
          locator: "Definitive acceptance date: 30 June 1981",
        },
        {
          id: "canadian-kennel-club-chinese-shar-pei",
          role: "verified",
          locator: "1970s near-extinction and revival",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-shar-pei-standard-1999",
          role: "verified",
          locator: "Coat varieties and skin folds",
        },
        {
          id: "akc-chinese-shar-pei-standard",
          role: "verified",
          locator: "Size (18–20 in, 45–60 lb) and coat types",
        },
        {
          id: "merck-veterinary-manual-shar-pei-fever",
          role: "verified",
          locator: "Shar-Pei Fever",
        },
        {
          id: "vca-chinese-shar-pei",
          role: "verified",
          locator: "Shedding, drooling, and apartment suitability",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
  },

  updatedOn: "2026-11-12",
};
