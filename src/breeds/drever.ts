import type { Breed } from "../schema/breed.types";

export const drever: Breed = {
  slug: "drever",
  name: "Drever",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Swedish Dachsbracke",
    "Basset suédois",
    "Perro tejonero sueco",
    "Schwedische Dachsbracke",
    "Dreeveri",
  ],

  group:
    "FCI Group 6 — Scenthounds and related breeds; Section 1.3 — Small-sized Hounds; with working trial",

  origin: {
    country: "Sweden",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/DocFile_Drever.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:DocFile_Drever.jpg",
      title: "DocFile Drever.jpg",
      description: "A Drever dog.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2005-04-23",
      uploadedOn: null,
      width: 1341,
      height: 972,
      licenseId: "cc-by-sa-4.0",
      attribution:
        'Canarian, "DocFile Drever.jpg", via Wikimedia Commons, licensed under CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). No changes made.',
      restrictions: null,
      metadataCheckedOn: "2026-10-27",
    },
  ],

  overview: {
    summary:
      "The Drever is a sturdy Swedish scent hound with a long body, short legs, and a strong instinct for tracking game. Bred for hunting in Swedish terrain, it is persistent on a trail and known for its clear, sustained voice while following scent. It can be calm and affectionate at home, but its working drive means it needs meaningful activity and is not automatically suited to a purely sedentary companion lifestyle.",

    description:
      "The Drever has a robust, low-set build rather than the proportions of a fast, long-legged running hound. Its body is relatively long, with strong muscles and short, sturdy legs. The coat is short, hard, and close-lying, with somewhat longer hair in selected areas such as the neck, back, and rear thighs. White markings appear alongside the base colour. In the field, the breed follows scent and gives voice while driving game, helping hunters track its progress. At home, temperament and behaviour still depend on the individual dog, training, socialisation, and the opportunities it receives to use its natural abilities.",

    history:
      "The Drever developed in Sweden from small German hounds, particularly the Westphalian Dachsbracke, which were imported in the early twentieth century. The first Swedish registrations were made in 1913. The name Drever was adopted for the Swedish variety in 1947, and the breed was recognised as Swedish in 1953. It became valued as a practical scent hound able to work in Swedish terrain and climate, especially when tracking deer and other game.",

    originalPurpose:
      "A scent hound used to track and drive game, especially roe deer, deer, hare, and fox, while giving voice to help hunters follow the trail.",

    currentRoles: [
      "Scent-trailing and game-driving hunting dog",
      "Hare and fox hunting hound",
      "Roe deer and deer tracking hound",
      "Active companion for a household able to meet its working and exercise needs",
      "Scent-work and tracking activities suited to the individual dog",
    ],
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "cm",
      male: { min: 32, max: 38 },
      female: { min: 30, max: 36 },
    },

    weight: {
      unit: null,
      male: null,
      female: null,
    },

    lifespanYears: null,

    coatType:
      "Short, hard, straight, dense, and close-lying coat. The coat is relatively short on the head, ears, and lower legs, and somewhat longer on the neck, back, and rear thighs.",

    coatLength:
      "Short overall, with slightly longer hair on the neck, back, and rear thighs. The underside of the tail has a brush-like covering rather than long feathering.",

    coatColors: [
      "Any colour combined with white markings, except all-white or liver-brown.",
      "Tan with white markings, with or without a black back.",
      "Black and white combinations.",
      "Red or fawn shades with white markings.",
      "Tricolour patterns with white markings.",
    ],

    sheddingLevel:
      "Some shedding should be expected. The short coat is relatively easy to maintain with regular brushing; an exact breed-specific shedding rating is not established here.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Long, sturdy body carried relatively low to the ground.",
      "Short, strong legs suited to working through varied terrain.",
      "Robust build with well-developed musculature.",
      "Short, hard, close-lying coat.",
      "Long, thick tail that may be carried higher when moving.",
      "A clear, sustained voice used while tracking and driving game.",
      "Distinctive male and female height ranges in the breed standard.",
    ],
  },

  temperament: {
    traits: [
      "Alert",
      "Generally steady in temperament",
      "Persistent when following a scent",
      "Strong hunting instinct",
      "Determined and work-focused outdoors",
      "Can be calm and sociable in a familiar home environment",
      "Vocal while tracking game",
    ],

    scores: {
      affection: 3,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 2,
      independence: 4,
      trainability: 3,
      barking: 5,
      energy: 4,
    },
  },

  care: {
    exercise: {
      level:
        "High in terms of daily engagement and opportunity to use scenting instincts. Exercise should include walks, sniffing, training, and safe outlets for tracking behaviour; the amount should be adapted to age, fitness, and health.",

      minutesPerDay: null,

      activities: [
        "Daily walks with time for safe sniffing and exploration",
        "Supervised scent-trailing games",
        "Reward-based tracking exercises",
        "Hiking on suitable, secure routes",
        "Structured hunting activity where lawful and appropriate",
        "Food-search and scent-enrichment games",
        "Recall and lead-walking practice",
      ],
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush regularly with a soft brush or grooming mitt to remove loose hair and dirt and to check the skin.",

      bathing:
        "Bathe when needed rather than on a fixed schedule. Use a dog-specific shampoo and dry the coat thoroughly.",

      notes: [
        "The short coat is comparatively straightforward to maintain.",
        "Check the ears regularly for wax, odour, redness, or irritation.",
        "Inspect paws and nails after outdoor activity.",
        "Trim nails when needed to maintain comfortable movement.",
        "Brush teeth regularly with dog-specific toothpaste.",
        "Check the coat and skin after walks for ticks, plant material, or irritation.",
      ],
    },

    training: {
      difficulty:
        "Moderate. The Drever is bred to follow scent and can become absorbed in a trail. Consistent reward-based training, realistic expectations, and good environmental management are important.",

      tips: [
        "Use short, consistent sessions with rewards that motivate the individual dog.",
        "Build recall gradually and practise in secure areas before increasing distractions.",
        "Use a lead or long line in open areas where wildlife or scent trails may draw the dog away.",
        "Reward attention to the handler and calm behaviour around distractions.",
        "Provide legal scent-work activities to give its tracking instincts an appropriate outlet.",
        "Avoid relying on punishment to interrupt scent-driven behaviour; use training and management together.",
      ],

      socialization:
        "Introduce puppies gradually and positively to different people, dogs, sounds, surfaces, handling, and everyday settings. Supervise interactions with children and other animals. Continue practising recall, lead skills, calm greetings, and attention around outdoor distractions throughout adulthood.",
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool climates with suitable shelter and routine care",
        "Warmer climates when shade, water, ventilation, and cooler exercise times are provided",
      ],

      aloneTimeTolerance:
        "A reliable breed-specific alone-time rating is not established. Teach independence gradually, provide appropriate exercise and enrichment, and assess the individual dog's response rather than assuming it will tolerate long periods alone.",
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate to the dog's life stage, body condition, activity level, and veterinary needs.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Use the food manufacturer's feeding guide as a starting point, then adjust portions for body condition, activity, age, and health. Measure meals, account for treats, and provide fresh water. Consult a veterinarian for growth, weight-management, or medical-diet questions.",

    considerations: [
      "Maintain a healthy body condition and avoid excess weight.",
      "Adjust food quantity to the dog's actual activity rather than its hunting background alone.",
      "Include treats in the overall daily food allowance.",
      "Make dietary changes gradually unless a veterinarian advises otherwise.",
      "Seek veterinary advice for persistent digestive problems, appetite changes, or unexplained weight change.",
    ],

    note:
      "A single portion size or meal frequency cannot be reliably prescribed for every Drever. Individual needs depend on age, food energy density, activity, body condition, and health.",
  },

  health: {
    overview:
      "The available breed information does not establish a comprehensive, population-level list of inherited disorders or a reliable numerical lifespan. The Swedish breed profile notes that breathing problems during or after hunting and unusual fatigue, described as hunting oedema, have been observed in the breed. This is a reported concern rather than a diagnosis for every Drever. Any breathing difficulty, collapse, or unusual fatigue during exercise requires prompt veterinary assessment.",

    commonConditions: [
      "Reported hunting-related breathing problems or unusual fatigue sometimes referred to as hunting oedema. This should be treated as a concern to discuss with a veterinarian, not as a condition that affects every Drever.",
    ],

    preventiveCare: [
      "Arrange routine veterinary examinations and keep vaccinations and parasite prevention appropriate to the dog's circumstances.",
      "Build exercise gradually and adapt it to age, fitness, weather, and health.",
      "Stop activity and seek veterinary advice if the dog develops unusual fatigue, breathing difficulty, weakness, or collapse during or after hunting or exercise.",
      "Maintain a healthy body condition and monitor changes in appetite, movement, breathing, or stamina.",
      "Ask breeders for available health history and discuss any screening relevant to the individual dog's family line with a veterinarian.",
      "Keep dental, ear, nail, and skin care up to date.",
    ],

    recommendedScreenings: [],

    dentalCare:
      "Brush the teeth regularly with dog-specific toothpaste. Arrange veterinary dental checks and seek advice for persistent bad breath, gum inflammation, oral pain, or difficulty chewing.",

    earCare:
      "Check the ears regularly for wax, debris, odour, redness, or repeated scratching. Clean only as needed with a veterinarian-approved product and seek advice if irritation persists.",

    skinCare:
      "Inspect the skin and coat during brushing and after outdoor activity. Seek veterinary advice for persistent itching, redness, sores, or other changes that do not resolve.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Owners who can provide regular exercise and meaningful scent-based enrichment",
      "People interested in tracking or lawful hunting activities",
      "Households prepared to train and manage a scent hound outdoors",
      "Owners who can use a lead, long line, or secure area when recall is unreliable",
      "Families willing to supervise children and teach respectful dog handling",
    ],

    notIdealFor: [
      "Households seeking a low-activity dog that needs little engagement",
      "Owners who expect reliable off-lead recall without sustained training",
      "People unwilling to manage strong scent-following and hunting instincts",
      "Homes where barking would be a major problem and cannot be managed",
      "Owners who cannot provide regular activity and mental enrichment",
    ],
  },

  funFacts: [
    "The Drever developed in Sweden from small German hounds, including the Westphalian Dachsbracke.",
    "The breed name Drever was adopted for the Swedish variety in 1947.",
    "Its short legs and sturdy body suit its traditional role as a scent hound working through Swedish terrain.",
    "Drevers are valued for giving voice while following game, allowing hunters to follow the progress of a trail.",
    "White markings are characteristic of accepted coat patterns; all-white and liver-brown coats are not accepted in the cited standard.",
  ],

  faq: [
    {
      question: "Where does the Drever come from?",
      answer:
        "The Drever comes from Sweden. It developed from small German hounds brought to Sweden in the early twentieth century, and it became recognised as a Swedish breed in 1953.",
    },
    {
      question: "What was the Drever bred to do?",
      answer:
        "The Drever was developed as a scent hound for tracking and driving game, especially roe deer, deer, hare, and fox. It commonly gives voice while following a trail.",
    },
    {
      question: "How tall is a Drever?",
      answer:
        "The published breed-standard height range is 32–38 cm for males and 30–36 cm for females.",
    },
    {
      question: "How much does a Drever weigh?",
      answer:
        "A reliable breed-specific weight range was not established in the sources used for this record, so no weight figure is provided.",
    },
    {
      question: "How long does a Drever live?",
      answer:
        "A reliable lifespan range was not established in the sources used for this record. An individual dog's longevity depends on factors including genetics, health, and care.",
    },
    {
      question: "Does a Drever need a lot of exercise?",
      answer:
        "The Drever is a working scent hound that needs regular activity and opportunities to use its nose. Daily walks, scent games, tracking practice, and safe outdoor exploration can help meet those needs.",
    },
    {
      question: "Is a Drever easy to train?",
      answer:
        "Training is manageable with consistency and rewards, but a strong interest in scent can make the dog difficult to call away from a trail. Practise recall in secure areas and use a lead or long line when needed.",
    },
    {
      question: "What coat colours are accepted for a Drever?",
      answer:
        "The breed standard permits colours combined with white markings, but does not accept an all-white or liver-brown coat. Tan with white markings, sometimes with a black back, is a common pattern.",
    },
    {
      question: "Are there health concerns to know about?",
      answer:
        "Swedish breed information notes reports of breathing problems during or after hunting and unusual fatigue sometimes referred to as hunting oedema. This is not a diagnosis for every dog. Breathing difficulty or collapse requires prompt veterinary attention.",
    },
    {
      question: "Can a Drever live in an apartment?",
      answer:
        "Apartment living may be challenging because the Drever is an active scent hound and can be vocal while working. Suitability depends on the individual dog, the building, exercise opportunities, training, and whether barking can be managed.",
    },
  ],

  references: [
    "fci-drever-standard-130",
    "swedish-kennel-club-drever-profile",
    "commons-docfile-drever-canarian",
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
          id: "swedish-kennel-club-drever-profile",
          role: "verified",
          locator: "Nordic Dog Breeds page: Also known as",
        },
      ],
      verifiedOn: "2026-10-27",
      note:
        "Includes the alternate names explicitly listed in the consulted breed profile.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-drever-standard-130",
          role: "verified",
          locator:
            "FCI classification: Group 6, Section 1.3 Small-sized Hounds, with working trial",
        },
      ],
      verifiedOn: "2026-10-27",
      note:
        "Uses the FCI classification; other kennel organisations may use different group systems.",
    },

    origin: {
      reliability: "reliable_source",
      sources: [
        {
          id: "swedish-kennel-club-drever-profile",
          role: "verified",
          locator: "Breed facts and history",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Sweden is stated as the breed's country of origin.",
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted sources establish Sweden as the country of origin but do not establish a single specific region for this field.",
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-drever-standard-130",
          role: "verified",
          locator:
            "Utilization, Brief Historical Summary, General Appearance, and Behaviour/Temperament",
        },
        {
          id: "swedish-kennel-club-drever-profile",
          role: "cited",
          locator: "General information, characteristics, and history",
        },
      ],
      verifiedOn: "2026-10-27",
      note:
        "Original descriptions summarise the breed's origin, conformation, and traditional hunting function.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-drever-standard-130",
          role: "verified",
          locator:
            "General Appearance, Coat, Colour, and Size: height at withers for males and females",
        },
        {
          id: "swedish-kennel-club-drever-profile",
          role: "cited",
          locator: "Size and appearance",
        },
      ],
      verifiedOn: "2026-10-27",
      note:
        "Physical description and height ranges follow the published breed standard. No unsupported weight or lifespan figure is inferred.",
    },

    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted official standard and breed profile did not establish a reliable numerical weight range.",
    },

    "physical.lifespanYears": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted sources did not establish a reliable breed-specific lifespan range.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific drooling rating was established in the consulted sources.",
    },

    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "swedish-kennel-club-drever-profile",
          role: "verified",
          locator: "Temperament and activity description",
        },
        {
          id: "fci-drever-standard-130",
          role: "cited",
          locator: "Behaviour/Temperament",
        },
      ],
      verifiedOn: "2026-10-27",
      note:
        "Traits describe reported breed tendencies, not guaranteed behaviour in every individual dog.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "swedish-kennel-club-drever-profile",
          role: "cited",
          locator: "Temperament, hunting instinct, activity, and vocal working behaviour",
        },
        {
          id: "fci-drever-standard-130",
          role: "cited",
          locator: "Behaviour/Temperament and utilization",
        },
      ],
      verifiedOn: null,
      note:
        "The 1–5 scores are editorial estimates for app comparison, not official or scientific measurements.",
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "swedish-kennel-club-drever-profile",
          role: "cited",
          locator: "Activity, grooming, hunting purpose, and breed characteristics",
        },
        {
          id: "fci-drever-standard-130",
          role: "cited",
          locator: "Utilization and Behaviour/Temperament",
        },
      ],
      verifiedOn: null,
      note:
        "Care suggestions are practical guidance informed by the breed's working role and should be adapted to each dog's age, health, and behaviour.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted sources describe the breed's activity and hunting purpose but do not establish a universal daily exercise-minute range.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "swedish-kennel-club-drever-profile",
          role: "cited",
          locator: "Breed characteristics and activity needs",
        },
      ],
      verifiedOn: null,
      note:
        "General canine nutrition guidance; this is not an individual veterinary diet prescription.",
    },

    "nutrition.feedingFrequency": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal Drever-specific meal frequency was established. Feeding frequency should be chosen according to age, health, food, and veterinary advice.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "swedish-kennel-club-drever-profile",
          role: "verified",
          locator:
            "Health section: reported breathing problems during or after hunting and unusual fatigue described as hunting oedema",
        },
      ],
      verifiedOn: "2026-10-27",
      note:
        "The record distinguishes a concern reported by the breed profile from a claim that every Drever is affected. It does not infer population-wide prevalence.",
    },
    "health.recommendedScreenings": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No specific breed-wide health screening protocol was established by the consulted sources. Ask a veterinarian about screening appropriate to the individual dog's history and family line.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "swedish-kennel-club-drever-profile",
          role: "cited",
          locator:
            "Information on hunting instinct, the need for hunting-related activity, and suitability as a family dog",
        },
        {
          id: "fci-drever-standard-130",
          role: "cited",
          locator: "Utilization and Behaviour/Temperament",
        },
      ],
      verifiedOn: null,
      note:
        "Suitability flags are editorial assessments based on typical working-dog needs, not guarantees for every dog or household.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific senior-owner suitability rating was established. Suitability depends on an owner's circumstances and the individual dog's activity and training needs.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-drever-standard-130",
          role: "verified",
          locator: "Brief Historical Summary, Utilization, and Coat/Colour",
        },
        {
          id: "swedish-kennel-club-drever-profile",
          role: "verified",
          locator: "History, coat colours, hunting use, and vocal tracking behaviour",
        },
      ],
      verifiedOn: "2026-10-27",
      note:
        "Historical and working-role details are paraphrased in original wording.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-drever-standard-130",
          role: "verified",
          locator:
            "Origin, Utilization, Brief Historical Summary, Coat, Colour, Size, and Behaviour/Temperament",
        },
        {
          id: "swedish-kennel-club-drever-profile",
          role: "verified",
          locator:
            "Alternate names, history, height, coat colours, activity, and health",
        },
      ],
      verifiedOn: "2026-10-27",
      note:
        "Answers are original paraphrases. Measurements use the units published by the cited source; unknown weight and lifespan figures are not estimated.",
    },
  },

  updatedOn: "2026-10-27",
};
