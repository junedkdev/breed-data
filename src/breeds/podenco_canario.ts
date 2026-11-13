import type { Breed } from "../schema/breed.types";

export const podenco_canario: Breed = {
  slug: "podenco-canario",
  name: "Podenco Canario",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Canarian Warren Hound",
    "Canarian Podenco",
    "Chien de Garenne des Canaries",
    "Kanarischer Podenco",
  ],

  group:
    "FCI Group 5 — Spitz and primitive types; Section 7 — Primitive type, hunting dogs; without working trial",

  origin: {
    country: "Spain",
    region: "Canary Islands",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Podenco_canario_hembra.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Podenco_canario_hembra.jpg",
      title: "Podenco canario hembra.jpg",
      description:
        "A female Podenco Canario photographed in the countryside.",
      creator: "Marianne Perdomo",
      uploader: "Mperdomo",
      capturedOn: "2007-05-26",
      uploadedOn: "2007-12-09",
      width: 2016,
      height: 1512,
      licenseId: "cc-by-sa-4.0",
      attribution:
        'Marianne Perdomo, "Podenco canario hembra.jpg", via Wikimedia Commons, licensed under CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). No changes made.',
      restrictions: null,
      metadataCheckedOn: "2026-11-13",
    },
  ],

  overview: {
    summary:
      "The Podenco Canario is a lean, agile hunting dog from Spain's Canary Islands. Shaped for rabbit hunting across rugged volcanic terrain, it relies on sharp scent, sight, and hearing working together. Energetic, alert, and deeply loyal to its household, it needs vigorous daily exercise, mental stimulation, and careful management around wildlife.",

    description:
      "Light-boned yet strongly muscled, the Podenco Canario has a slightly elongated frame, large upright ears, and an intent, lively expression. Its short, smooth, dense coat appears in red-and-white combinations ranging from bright orange to deep mahogany. Built for tireless endurance across rocky ground, stone walls, and thorny scrub, it thrives in active homes that provide structured scenting outlets and securely fenced running space.",

    history:
      "Developed across Spain's Canary Islands—especially Gran Canaria and Tenerife—the Podenco Canario is an ancient hunting breed adapted to volcanic terrain. Traditional accounts propose an ancient link to Egyptian dogs brought via Phoenician, Greek, Carthaginian, or Egyptian seafarers, though these routes remain historical hypotheses rather than proven fact. Valued for centuries as a tireless rabbit hunter, the breed received formal international recognition in 1987, with its updated English standard published in 1999.",

    originalPurpose:
      "Hunting rabbits across rocky, volcanic, and brush-covered Canary Islands terrain using scent, sight, and hearing.",

    currentRoles: [
      "Traditional rabbit-hunting dog",
      "Scent-search and tracking partner",
      "Lure coursing and running sports",
      "Agility and endurance activities suited to individual fitness",
      "Active companion for energetic, prepared households",
    ],
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: { min: 55, max: 64 },
      female: { min: 53, max: 60 },
    },

    weight: {
      unit: "kg",
      male: { min: 20, max: 25 },
      female: { min: 17, max: 22 },
    },

    lifespanYears: {
      min: 12,
      max: 14,
    },

    coatType: "Smooth, short, and dense.",

    coatLength:
      "Short and tight-lying across the body with a smooth, dense finish.",

    coatColors: [
      "Red and white combinations",
      "Orange-red and white",
      "Deep red or mahogany and white",
      "Varying proportions and shades of red and white",
    ],

    sheddingLevel:
      "Low to moderate; the short, smooth coat is easy to maintain, though no exact breed-specific shedding rating is established.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Lean, dry-muscled, lightly framed build with visible rib and muscle definition",
      "Slightly longer-than-tall proportions",
      "Large, pointed ears carried upright when alert or excited",
      "Small, oblique, almond-shaped amber eyes",
      "Long, tapered muzzle with a coat-harmonizing nose",
      "Deep chest above elbow level and a distinctly tucked-up belly",
      "Low-set tail reaching slightly past the hock, often tipped in white",
      "Light, agile, ground-covering trot",
    ],
  },

  temperament: {
    traits: [
      "Courageous and tireless",
      "Energetic and dynamic",
      "Alert and observant",
      "Strongly driven by hunting and chasing instincts",
      "Devoted and affectionate toward familiar people",
      "Intelligent and quick to read its environment",
      "Restless if under-exercised",
      "Generally gentle and non-aggressive",
      "Easily absorbed by scents or moving prey",
    ],

    scores: {
      affection: 4,
      withChildren: null,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 1,
      independence: 4,
      trainability: 3,
      barking: 2,
      energy: 5,
    },
  },

  care: {
    exercise: {
      level:
        "High. Built for all-day hunting across rugged terrain, healthy adults need vigorous daily exercise paired with scenting and mental challenges, adjusted for age, fitness, and heat.",

      minutesPerDay: null,

      activities: [
        "Brisk daily walks with ample sniffing time",
        "Secure off-lead running in tall, well-fenced enclosures",
        "Scent-search and tracking games",
        "Reward-based nose-work exercises",
        "Lure coursing where available",
        "Agility training suited to build and conditioning",
        "Long-line outdoor exploration",
        "Puzzle feeders and food-search enrichment",
      ],
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush weekly with a soft bristle brush or rubber grooming mitt to lift loose hair and check the skin for scratches.",

      bathing:
        "Bathe only when dirty with a gentle canine shampoo, avoiding frequent washing and drying the short coat thoroughly.",

      notes: [
        "The short, smooth coat needs minimal upkeep.",
        "Inspect skin regularly for scrapes, thorns, or irritation after field runs.",
        "Check paws and pads after walking over volcanic or rocky ground.",
        "Check upright ears weekly for dirt, redness, or odour.",
        "Trim nails regularly to keep stride comfortable.",
        "Brush teeth routinely with dog-safe toothpaste.",
      ],
    },

    training: {
      difficulty:
        "Moderate to high for owners new to primitive hunting breeds. Responsive to patient, reward-based methods, yet strong prey and scent drives compete with cues outdoors.",

      tips: [
        "Use upbeat, reward-based training in short, engaging sessions.",
        "Build recall gradually in quiet, securely fenced spaces.",
        "Never assume reliable off-lead recall around rabbits or wild game.",
        "Use a sturdy lead or long line in open, unfenced areas.",
        "Reward eye contact and calm check-ins around distractions.",
        "Channel hunting instincts into structured nose-work and coursing games.",
        "Maintain tall, secure fencing—an athletic Podenco can clear low barriers.",
        "Avoid harsh corrections; fair, consistent rewards build trust.",
      ],

      socialization:
        "Provide gradual, positive exposure to varied people, dogs, sounds, handling, and everyday settings from puppyhood onward. Supervise interactions with children and other animals, and take extra care around cats or small pets given strong rabbit-hunting instincts.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Warm climates with reliable shade and fresh water",
        "Temperate climates with comfortable indoor shelter",
        "Hot weather with exercise scheduled during cooler morning or evening hours",
        "Cool or cold weather with a warm coat or indoor shelter as needed",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "Complete, balanced dog food tailored to life stage, body condition, activity level, and veterinary guidance.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Start with the feeding guide on a complete commercial diet and adjust portions for activity, age, and body condition. Because Podencos are naturally lean, evaluate rib and hip cover with a veterinarian rather than overfeeding, include treats in daily calories, and keep fresh water available at all times.",

    considerations: [
      "Recognize natural lean athleticism without confusing healthy muscle tone for underweight.",
      "Scale daily calories to actual exercise and hunting workload.",
      "Monitor body condition score regularly.",
      "Count training rewards within daily food intake.",
      "Transition foods gradually unless advised otherwise by a veterinarian.",
      "Provide fresh water frequently during warm weather and after runs.",
    ],

    note:
      "Portion sizes and meal counts vary with age, condition, calorie density, and daily workload.",
  },

  health: {
    overview:
      "Consulted breed references do not establish a comprehensive population-level disease profile or formal screening schedule for the Podenco Canario. While generally hardy, its lean build and active work over rough terrain warrant routine checks of paws, joints, and skin alongside standard preventive veterinary care.",

    commonConditions: [],

    preventiveCare: [
      "Schedule routine veterinary exams and keep vaccinations and parasite prevention current.",
      "Monitor body condition, muscle tone, and stamina.",
      "Inspect paws, pads, and nails after runs over rocky or thorny ground.",
      "Check skin and coat for scrapes, thorns, or ticks after outdoor outings.",
      "Provide shade, water, and rest during hot weather.",
      "Build strenuous exercise gradually and consult a veterinarian for persistent lameness, fatigue, or appetite changes.",
    ],

    recommendedScreenings: [],

    dentalCare:
      "Brush teeth regularly with canine toothpaste and arrange routine veterinary oral checks. Have bad breath, gum inflammation, or chewing difficulty assessed promptly.",

    earCare:
      "Check the large upright ears weekly for wax, debris, odour, or redness, cleaning gently with a veterinarian-approved solution only when needed.",

    skinCare:
      "Inspect the thin, short coat and skin during brushing and after field runs for scratches, parasites, or persistent itching.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Active owners ready to provide daily vigorous exercise and mental enrichment",
      "Handlers interested in scent work, tracking, lure coursing, or agility",
      "Households with tall, securely fenced outdoor space",
      "Owners committed to patient recall training and wildlife management",
    ],

    notIdealFor: [
      "Sedentary households wanting a low-energy companion",
      "Owners expecting reliable off-lead recall near wildlife without management",
      "Homes with unseparated small pets such as rabbits or rodents",
      "People unable to provide secure fencing and daily active outlets",
    ],
  },

  funFacts: [
    "Native to the Canary Islands—especially Gran Canaria and Tenerife—it is prized for hunting rabbits across volcanic rock.",
    "It hunts silently by combining keen scent, sharp eyesight, and acute hearing to locate rabbits in crevices and stone walls.",
    "Its large, mobile ears snap upright whenever the dog is alert or excited.",
    "Its lean frame is slightly longer than tall, allowing agile leaps across uneven, thorny terrain.",
    "The short, sleek coat appears in shades of red and white, ranging from bright orange to deep mahogany.",
    "Traditional accounts link its ancestry to ancient Egyptian dogs brought by Mediterranean seafarers, though exact routes remain unproven.",
  ],

  faq: [
    {
      question: "Where does the Podenco Canario come from?",
      answer:
        "It comes from Spain's Canary Islands, especially Gran Canaria and Tenerife, where it developed as a specialized rabbit-hunting breed.",
    },
    {
      question: "What was the Podenco Canario bred to do?",
      answer:
        "It was bred to hunt rabbits across rugged volcanic terrain, stone walls, and dense scrub using scent, sight, and hearing.",
    },
    {
      question: "How tall is a Podenco Canario?",
      answer:
        "Adult males measure 55–64 cm at the withers and females measure 53–60 cm, with a 2 cm tolerance permitted for dogs of strong breed type.",
    },
    {
      question: "How much does a Podenco Canario weigh?",
      answer:
        "Adult males typically weigh 20–25 kg and adult females typically weigh 17–22 kg.",
    },
    {
      question: "How long does a Podenco Canario live?",
      answer:
        "Typical lifespan is around 12–14 years, depending on genetics, nutrition, and veterinary care.",
    },
    {
      question: "What colours can a Podenco Canario have?",
      answer:
        "It comes in red and white combinations, with red tones ranging from orange to deep mahogany.",
    },
    {
      question: "Does a Podenco Canario need a lot of exercise?",
      answer:
        "Yes. As an athletic hunting dog with high stamina, it needs daily brisk walks, secure running opportunities, and scenting or agility outlets.",
    },
    {
      question: "Is a Podenco Canario easy to train?",
      answer:
        "Intelligent and responsive to reward-based training, its strong prey and scent drives mean recall around wildlife requires careful practice and a long line in unfenced areas.",
    },
    {
      question: "Is a Podenco Canario suitable for apartment living?",
      answer:
        "Suitability depends on the individual dog and the owner's ability to provide substantial daily vigorous exercise, enrichment, and secure off-lead running space.",
    },
    {
      question: "Are there known inherited health problems in the Podenco Canario?",
      answer:
        "No comprehensive breed-wide list of hereditary disorders or formal screening protocol is established in consulted references. Keep up routine veterinary checks and inspect paws and skin after rough-terrain runs.",
    },
    {
      question: "Can a Podenco Canario live with small pets?",
      answer:
        "Caution is essential because of its strong rabbit-hunting instincts. Introductions to cats or small animals require careful management and should never be left unsupervised.",
    },
  ],

  references: [
    "fci-podenco-canario-standard-329",
    "fci-podenco-canario-nomenclature-329",
    "rsce-podenco-canario-profile",
    "vdh-podenco-canario-profile",
    "commons-podenco-canario-hembraphoto",
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
      reliability: "official_standard",
      sources: [
        {
          id: "fci-podenco-canario-standard-329",
          role: "verified",
          locator: "Standard heading and English breed-name line",
        },
        {
          id: "fci-podenco-canario-nomenclature-329",
          role: "verified",
          locator: "Multilingual breed nomenclature",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Alternate names follow official FCI standard and nomenclature.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-podenco-canario-standard-329",
          role: "verified",
          locator: "FCI classification: Group 5, Section 7, without working trial",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Follows official FCI classification; The Dog API lists Hound.",
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-podenco-canario-standard-329",
          role: "verified",
          locator: "Origin and Brief Historical Summary",
        },
        {
          id: "rsce-podenco-canario-profile",
          role: "cited",
          locator: "Origin and breed description",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Spain is the country of origin; the Canary Islands are the home region.",
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-podenco-canario-standard-329",
          role: "verified",
          locator:
            "Utilization, Brief Historical Summary, General Appearance and Behaviour/Temperament",
        },
        {
          id: "vdh-podenco-canario-profile",
          role: "cited",
          locator:
            "Breed description, personality, exercise, training, grooming and origin",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "All user-facing prose is newly written original wording; proposed ancient ancestry is presented as a historical hypothesis.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-podenco-canario-standard-329",
          role: "verified",
          locator:
            "General Appearance, Important Proportions, Head, Eyes, Ears, Tail, Coat and Size (55–64 cm male, 53–60 cm female)",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Height ranges (55–64 cm male, 53–60 cm female) and conformation follow FCI Standard No. 329 (matching The Dog API). Coat colours follow FCI Standard No. 329 rather than The Dog API's species-wide colour list.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (20–25 kg male, 17–22 kg female)",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "FCI Standard No. 329 does not publish weight limits; sex-specific ranges (20–25 kg male, 17–22 kg female) are sourced from The Dog API.",
    },

    "physical.weight.male.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-13",
      note: "Male weight range (20–25 kg) sourced from The Dog API.",
    },

    "physical.weight.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-13",
      note: "Female weight range (17–22 kg) sourced from The Dog API.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span (12–14 years)",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "FCI Standard No. 329 does not publish a lifespan; 12–14 years is sourced from The Dog API.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Consulted standards and kennel-club profiles do not establish a breed-specific drooling level.",
    },

    temperament: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-podenco-canario-standard-329",
          role: "verified",
          locator: "Behaviour / Temperament",
        },
        {
          id: "vdh-podenco-canario-profile",
          role: "cited",
          locator: "Personality and social behaviour",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Traits paraphrase official descriptions; individual behaviour varies.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-podenco-canario-standard-329",
          role: "cited",
          locator: "Behaviour / Temperament",
        },
        {
          id: "vdh-podenco-canario-profile",
          role: "cited",
          locator: "Personality and social behaviour",
        },
      ],
      verifiedOn: null,
      note:
        "Qualitative editorial estimates on a 1–5 scale, not standardized test results.",
    },

    "temperament.scores.withChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Consulted authoritative sources do not provide a specific basis for a breed-wide child compatibility score.",
    },

    care: {
      reliability: "reliable_source",
      sources: [
        {
          id: "vdh-podenco-canario-profile",
          role: "verified",
          locator:
            "Exercise, personality, training, social behaviour and grooming",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Breed-specific activity, training, and grooming guidance based on the kennel-club profile.",
    },

    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vdh-podenco-canario-profile",
          role: "verified",
          locator:
            "Daily activity, coursing, agility and movement needs",
        },
        {
          id: "fci-podenco-canario-standard-329",
          role: "cited",
          locator: "Utilization and hunting endurance",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "High activity needs supported by working purpose and kennel-club profile.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific daily exercise duration in minutes was established.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vdh-podenco-canario-profile",
          role: "verified",
          locator: "Short coat and grooming",
        },
        {
          id: "fci-podenco-canario-standard-329",
          role: "cited",
          locator: "Coat: smooth, short and dense",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Low-maintenance coat guidance supported by standard and kennel-club profile.",
    },

    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vdh-podenco-canario-profile",
          role: "verified",
          locator: "Training, recall and exercise",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Training guidance reflects hunting motivation and off-lead recall caution.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Consulted sources do not establish a dependable breed-wide apartment suitability rating.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Reliable breed-specific information about alone-time tolerance was not found.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General canine nutrition guidance adapted to life stage, body condition, and activity.",
    },

    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No breed-specific puppy feeding frequency is established.",
    },

    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No breed-specific adult feeding frequency is established.",
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No breed-specific senior feeding frequency is established.",
    },

    health: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine health and preventive-care guidance; no breed-specific disease profile asserted.",
    },

    "health.commonConditions": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No sufficiently reliable breed-specific population evidence was found to list common inherited conditions.",
    },

    "health.recommendedScreenings": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No established breed-wide screening protocol was identified in consulted sources.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Standard preventive veterinary care and rough-terrain paw/skin checks.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General veterinary dental hygiene guidance.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General ear inspection and cleaning guidance.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General skin inspection and care guidance.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "fci-podenco-canario-standard-329",
          role: "cited",
          locator: "Utilization and Behaviour / Temperament",
        },
        {
          id: "vdh-podenco-canario-profile",
          role: "cited",
          locator: "Personality, exercise and living with the breed",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial suitability assessment based on hunting purpose and activity needs.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-wide first-time-owner rating was established.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No definitive breed-wide family-with-children rating was established.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-wide senior-owner suitability rating was established.",
    },

    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "vdh-podenco-canario-profile",
          role: "cited",
          locator: "Daily activity and sporting interests",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial assessment based on regular vigorous activity needs.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-wide apartment-living rating was established.",
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-podenco-canario-standard-329",
          role: "verified",
          locator:
            "Brief Historical Summary, Utilization, General Appearance and Coat",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Facts written in original wording from the official standard; ancient ancestry is presented as a hypothesis.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-podenco-canario-standard-329",
          role: "verified",
          locator:
            "Origin, Utilization, Coat, Size and Behaviour / Temperament",
        },
        {
          id: "vdh-podenco-canario-profile",
          role: "cited",
          locator: "Exercise, training and breed characteristics",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric and breed.life_span",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Original answers synthesizing official standards, kennel-club guidance, and The Dog API weight/lifespan figures.",
    },
  },

  updatedOn: "2026-11-13",
};
