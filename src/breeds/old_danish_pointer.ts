import type { Breed } from "../schema/breed.types";

export const old_danish_pointer: Breed = {
  slug: "old-danish-pointer",
  name: "Old Danish Pointer",
  scientificName: null,

  alternateNames: [
    "Old Danish Pointing Dog",
    "Gammel Dansk Hønsehund",
    "Old Danish Bird Dog",
    "Bakhound",
  ],

  group:
    "FCI Group 7 — Pointing Dogs, Section 1.1 — Continental Pointing Dogs, Braque type (working trial required)",

  origin: {
    country: "Denmark",
    region: "Jutland; historically associated with Glenstrup near Randers and Hobro",
  },

  images: [],

  overview: {
    summary:
      "A sturdy Danish pointing dog with a short white-and-brown coat, a steady temperament and a close-working style suited to bird hunting and scent-based field work.",

    description:
      "The Old Danish Pointer is a medium-sized, powerfully built gundog developed in Denmark for locating and pointing game birds. Its characteristic appearance combines a broad, substantial head, low-set hanging ears, a short dense coat and white colouring marked with brown patches or speckles. The breed is known for a calm, determined manner and a hunting style that keeps the dog in contact with its handler rather than ranging at extreme speed. At home, breed-club and Nordic kennel-club descriptions portray it as devoted to its family and generally steady around people and other dogs. It is best matched with people who can provide regular outdoor activity, scent work, retrieving or suitable field work, as well as close companionship. Its short coat is straightforward to maintain, but it does not provide strong weather insulation.",

    history:
      "The breed's documented history reaches back to around 1710 in Jutland, where Morten Bak is credited with developing a consistent white-and-brown pointing dog through repeated crossings of dogs kept by travelling Romani people with local farm dogs. The FCI history notes that the ancestry is not completely certain; St. Hubert-type scent hounds and Spanish pointing dogs are considered possible contributors. The resulting dogs became known as Bakhounds or Old Danish Pointing Dogs and were developed as practical, versatile bird-hunting companions.",

    originalPurpose:
      "Versatile gundog work, especially locating and pointing birds while maintaining contact with the hunter; the breed is also described as capable of tracking wounded game.",

    currentRoles: [
      "Bird-hunting and pointing work",
      "Scent work and tracking activities",
      "Retrieving and other structured outdoor activities",
      "Companion for active households with time for daily outdoor engagement",
    ],
  },

  physical: {
    sizeCategory: "Medium",
    height: {
      unit: "cm",
      male: { min: 54, max: 60 },
      female: { min: 50, max: 56 },
    },
    weight: {
      unit: "kg",
      male: { min: 30, max: 35 },
      female: { min: 26, max: 31 },
    },
    lifespanYears: null,
    coatType: "Short, dense and somewhat hard to the touch",
    coatLength: "Short",
    coatColors: [
      "White with brown markings",
      "White with a few large brown patches",
      "White with many small brown speckles or freckles",
      "Brown markings may range from lighter brown to dark brown; darker brown is preferred by the standard",
    ],
    sheddingLevel: null,
    droolingLevel: null,
    distinctiveFeatures: [
      "Rectangular, strongly built body",
      "Pronounced difference in build between the substantial male and lighter, more spirited female",
      "Short, broad head with a relatively unpronounced stop",
      "Deep, hanging flews and characteristic loose skin around the throat",
      "Low-set, broad ears with rounded ends",
      "White coat with brown patches or speckling",
      "Medium-length tail naturally carried down",
    ],
  },

  temperament: {
    traits: [
      "Calm and generally steady",
      "Determined and courageous",
      "Attentive to its handler while working",
      "Purposeful and thorough in the field rather than exceptionally fast",
      "Loyal and closely bonded with its family",
      "Often described as patient with children and sociable with other dogs, though individual temperament and socialisation matter",
      "Responsive to thoughtful, reward-based training",
    ],
    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: null,
      independence: 3,
      trainability: 4,
      barking: null,
      energy: 4,
    },
  },

  care: {
    exercise: {
      level: "High; a working pointing breed that needs substantial daily outdoor activity and opportunities to use its nose",
      minutesPerDay: null,
      activities: [
        "Long walks and hikes",
        "Supervised off-leash exercise in a secure, suitable area",
        "Scent games and tracking",
        "Retrieving games",
        "Field training or appropriate gundog work",
        "Reward-based obedience and problem-solving activities",
      ],
    },
    grooming: {
      level: "Low",
      brushing:
        "Brush regularly with a rubber grooming brush or wipe with a damp chamois to remove loose hair and dirt; more frequent brushing can help manage visible white hairs around the home.",
      bathing:
        "Bathe when needed, using a dog-appropriate shampoo and drying thoroughly after wet or cold-weather activity.",
      notes: [
        "The short, dense coat is relatively easy to maintain.",
        "The coat provides limited insulation against harsh weather; provide suitable shelter and protection according to conditions.",
        "Check the ears regularly and dry them after swimming or wet outdoor work.",
        "Inspect skin folds, feet and coat after field activity for dirt, seeds or debris.",
        "Trim nails as needed and maintain routine dental hygiene.",
      ],
    },
    training: {
      difficulty:
        "Moderate; generally willing to cooperate, but needs consistent training that channels hunting and scenting instincts.",
      tips: [
        "Use reward-based methods, short sessions and clear, consistent cues.",
        "Build reliable recall before allowing off-leash exercise in unsecured areas.",
        "Provide structured scent games and retrieving tasks rather than relying only on repetitive physical exercise.",
        "Introduce hunting-related distractions gradually and reward attention to the handler.",
        "Keep training varied and motivating, with rewards delivered promptly.",
      ],
      socialization:
        "Introduce the dog gradually and positively to different people, calm dogs, environments, handling and everyday sounds during puppyhood and continue social learning throughout life.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,
      climates: [],
      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced diet appropriate to the dog's life stage, body condition and activity level",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Choose a nutritionally complete food suitable for the dog's age, reproductive status and workload. Set portions using the food's calorie information, body condition and weight trend rather than a breed-only feeding estimate. Adjust intake as activity changes, keep fresh water available, and discuss major diet changes or special needs with a veterinarian.",
    considerations: [
      "Working dogs may need different energy intake across hunting, training and rest periods.",
      "Monitor body condition and adjust portions to avoid excess weight.",
      "Use treats as part of the daily energy allowance.",
      "For puppies, older dogs or dogs with medical conditions, ask a veterinarian to tailor the feeding plan.",
    ],
    note:
      "No universal breed-specific ration or meal schedule is recorded. Individual calorie needs vary substantially with age, size, health and workload.",
  },

  health: {
    overview:
      "The sources consulted for this record provide conformation and care descriptions but do not establish reliable breed-specific disease prevalence, a validated lifespan range or a definitive screening panel. Avoid treating generic canine risks or isolated reports as confirmed breed-wide predispositions. Ask breeders for veterinary records and family health history, and work with a veterinarian on preventive care.",
    commonConditions: [],
    preventiveCare: [
      "Arrange regular veterinary wellness examinations and keep vaccinations and parasite prevention appropriate to local risk.",
      "Maintain a healthy body condition and age-appropriate activity.",
      "Check ears, skin folds, paws and coat after outdoor work.",
      "Maintain routine dental care and nail trimming.",
      "Seek veterinary advice promptly for persistent lameness, eye irritation, skin problems or changes in appetite or behaviour.",
    ],
    recommendedScreenings: [],
    dentalCare:
      "Brush teeth regularly with dog-specific toothpaste and arrange veterinary oral examinations. Dental chews or diets should complement, not replace, brushing and professional care.",
    earCare:
      "Check the hanging ears regularly for redness, odour, discharge or discomfort. Keep them dry after wet activities and ask a veterinarian before using ear medication or cleaners if irritation is present.",
    skinCare:
      "Inspect the skin, throat folds, paws and coat after field work. Clean off debris gently and seek veterinary advice for persistent redness, itching, sores or unusual odour.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "Active people who enjoy regular outdoor exercise",
      "Hunters and handlers interested in pointing work, scent work or tracking",
      "Households able to provide daily engagement and close companionship",
      "Owners willing to train recall and manage hunting instincts responsibly",
    ],
    notIdealFor: [
      "People who want a low-activity dog with minimal outdoor exercise needs",
      "Households where the dog would routinely be left alone for long periods without enrichment or companionship",
      "Owners unable to provide safe management around wildlife and strong scenting or hunting interests",
    ],
  },

  funFacts: [
    "The breed is also known by its Danish name, Gammel Dansk Hønsehund.",
    "Its recorded history reaches back to around 1710 in Jutland.",
    "The FCI standard describes a working style that is relatively measured and keeps contact with the hunter.",
    "The breed's white coat is characteristically marked with brown patches or small speckles.",
  ],

  faq: [
    {
      question: "What was the Old Danish Pointer bred to do?",
      answer:
        "It was developed as a versatile gundog for bird hunting, especially locating and pointing game while staying in contact with the hunter. It can also take part in scent-based tracking work.",
    },
    {
      question: "How large does an Old Danish Pointer get?",
      answer:
        "The FCI standard gives males a height of 54–60 cm and weight of 30–35 kg. Females are 50–56 cm tall and weigh 26–31 kg.",
    },
    {
      question: "What does its coat look like?",
      answer:
        "The coat is short, dense and somewhat hard to the touch. The standard describes a white base with brown patches or smaller brown speckles, with darker brown preferred.",
    },
    {
      question: "Is the Old Danish Pointer suitable for an active family?",
      answer:
        "It may suit an active household that can provide outdoor exercise, scent-based activities, training and companionship. Introductions and supervision should be appropriate for the ages and needs of the children and the individual dog.",
    },
    {
      question: "How much exercise does it need each day?",
      answer:
        "Breed sources describe it as a working dog that needs substantial daily activity, but the consulted references do not establish a reliable universal number of minutes. The plan should reflect age, health, conditioning and workload.",
    },
    {
      question: "What health problems is the breed known for?",
      answer:
        "The sources used here do not establish a reliable breed-specific list of common diseases or prevalence figures. Ask breeders about documented family health history and consult a veterinarian about appropriate screening and preventive care.",
    },
  ],

  references: [
    "fci-old-danish-pointing-dog-standard",
    "old-danish-pointing-dog-danish-breed-club",
    "nordic-kennel-union-old-danish-pointing-dog",
    "united-kennel-club-old-danish-pointing-dog",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "Title and breed name",
        },
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "verified",
          locator: "Breed heading and alternative names",
        },
      ],
      verifiedOn: "2026-10-20",
      note: null,
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A breed-specific scientific name is not used; the species-level binomial is omitted rather than presented as a breed distinction.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "FCI classification",
        },
      ],
      verifiedOn: "2026-10-20",
      note: null,
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "Origin and brief historical summary",
        },
        {
          id: "old-danish-pointing-dog-danish-breed-club",
          role: "cited",
          locator: "Breed history",
        },
      ],
      verifiedOn: "2026-10-20",
      note: null,
    },

    "overview.summary": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "Utilization, general appearance, coat and behaviour",
        },
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "cited",
          locator: "About the breed and activity needs",
        },
      ],
      verifiedOn: "2026-10-20",
      note: null,
    },

    "overview.description": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "General appearance, behaviour, coat and size",
        },
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "verified",
          locator: "Appearance, personality, grooming and needs",
        },
        {
          id: "old-danish-pointing-dog-danish-breed-club",
          role: "cited",
          locator: "Breed description and temperament",
        },
      ],
      verifiedOn: "2026-10-20",
      note: "Original synthesis; behaviour can vary between individual dogs.",
    },

    "overview.history": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "Brief historical summary",
        },
      ],
      verifiedOn: "2026-10-20",
      note: "The standard describes parts of the ancestry as probable rather than certain.",
    },

    "overview.originalPurpose": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "Utilization and behaviour/character",
        },
        {
          id: "old-danish-pointing-dog-danish-breed-club",
          role: "cited",
          locator: "Breed description and tracking",
        },
      ],
      verifiedOn: "2026-10-20",
      note: null,
    },

    "overview.currentRoles": {
      reliability: "reliable_source",
      sources: [
        {
          id: "old-danish-pointing-dog-danish-breed-club",
          role: "verified",
          locator: "Breed description and working uses",
        },
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "cited",
          locator: "Activity needs and handler contact",
        },
      ],
      verifiedOn: "2026-10-20",
      note: "Roles are grounded in the breed's documented working purpose and general activity guidance.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "General appearance, coat and size",
        },
      ],
      verifiedOn: "2026-10-20",
      note: null,
    },

    "physical.lifespanYears": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The consulted primary and kennel-club sources do not provide a sufficiently supported breed-specific lifespan range.",
    },

    "physical.sheddingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A validated shedding category was not established. Short coat does not by itself establish a reliable shedding level.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The standard describes deep flews but does not quantify typical drooling; no categorical level is recorded.",
    },

    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "Behaviour/character",
        },
        {
          id: "old-danish-pointing-dog-danish-breed-club",
          role: "verified",
          locator: "Temperament and breed description",
        },
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "cited",
          locator: "Personality and activity level",
        },
      ],
      verifiedOn: "2026-10-20",
      note: "Temperament descriptions are population-level tendencies, not guarantees for an individual dog.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "old-danish-pointing-dog-danish-breed-club",
          role: "cited",
          locator: "Temperament and trainability",
        },
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "cited",
          locator: "Personality and activity level",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1–5 estimates derived from qualitative breed descriptions; they are not measured behavioural scores.",
    },

    "temperament.scores.protectiveness": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The consulted sources do not establish a reliable breed-specific protectiveness score.",
    },

    "temperament.scores.barking": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The consulted sources do not establish a reliable breed-specific barking score.",
    },

    care: {
      reliability: "reliable_source",
      sources: [
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "verified",
          locator: "Coat and grooming, needs, tips and tricks for learning and handling",
        },
        {
          id: "old-danish-pointing-dog-danish-breed-club",
          role: "cited",
          locator: "Working-dog activity and training",
        },
      ],
      verifiedOn: "2026-10-20",
      note: "Care details combine breed-specific activity guidance with practical recommendations; individual requirements vary.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Sources describe substantial daily activity but do not establish a validated universal minutes-per-day range.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific yes/no apartment-suitability finding was identified; suitability depends on exercise, enrichment, neighbours and the individual dog.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific alone-time tolerance measure was identified.",
    },

    "care.livingEnvironment.climates": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The short coat's limited insulation is described, but a validated list of suitable climates is not available.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Nutrition assessment and body-condition monitoring",
        },
      ],
      verifiedOn: null,
      note: "General veterinary nutrition guidance, not a breed-specific diet prescription.",
    },

    "nutrition.feedingFrequency": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal breed-specific meal frequency was established; feeding schedules depend on age, health and routine.",
    },

    "nutrition.considerations": {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Nutritional assessment and body condition",
        },
      ],
      verifiedOn: null,
      note: null,
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "Standard's health and conformation provisions; no breed disease prevalence stated",
        },
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "cited",
          locator: "Breed overview and care information",
        },
      ],
      verifiedOn: "2026-10-20",
      note: "No disease prevalence or breed-specific screening panel is inferred from the absence of health information.",
    },

    "health.commonConditions": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Reliable breed-specific disease prevalence information was not established in the sources consulted.",
    },

    "health.recommendedScreenings": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No authoritative breed-specific screening panel was identified. A veterinarian may recommend tests based on family history, clinical findings and local breeding guidance.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "cited",
          locator: "Grooming and activity needs",
        },
      ],
      verifiedOn: null,
      note: "General canine preventive-care guidance, not a claim of breed-specific disease risk.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "Pet dental care guidance",
        },
      ],
      verifiedOn: null,
      note: null,
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "cited",
          locator: "Appearance and grooming",
        },
      ],
      verifiedOn: null,
      note: "General ear monitoring advice for a dog with hanging ears.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "cited",
          locator: "Coat and grooming",
        },
      ],
      verifiedOn: null,
      note: null,
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "cited",
          locator: "Personality, activity level and needs",
        },
        {
          id: "old-danish-pointing-dog-danish-breed-club",
          role: "cited",
          locator: "Breed description and temperament",
        },
      ],
      verifiedOn: null,
      note: "Editorial suitability guidance based on activity and temperament descriptions; household circumstances and the individual dog matter.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No authoritative source establishes a universal yes/no recommendation for first-time owners.",
    },

    "suitability.familiesWithChildren": {
      reliability: "estimate",
      sources: [
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "cited",
          locator: "Personality and activity level; patient towards children",
        },
      ],
      verifiedOn: null,
      note: "A qualified estimate; interactions require adult supervision and depend on the individual dog and children.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability depends on the person's mobility, support and activity capacity; no general breed-level yes/no value is recorded.",
    },

    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "cited",
          locator: "Needs and activity level",
        },
      ],
      verifiedOn: null,
      note: "The breed's working background supports this suitability estimate, but individual circumstances still matter.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific apartment-living yes/no finding was identified.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "History, behaviour and coat",
        },
        {
          id: "old-danish-pointing-dog-danish-breed-club",
          role: "verified",
          locator: "Breed history",
        },
      ],
      verifiedOn: "2026-10-20",
      note: null,
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "Utilization, size, coat and historical summary",
        },
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "verified",
          locator: "Activity needs, grooming and personality",
        },
      ],
      verifiedOn: "2026-10-20",
      note: "Answers summarise documented breed information and explicitly preserve gaps in health and exercise data.",
    },
  },

  updatedOn: "2026-10-20",
};
