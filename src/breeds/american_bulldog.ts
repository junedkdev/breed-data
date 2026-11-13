import type { Breed } from "../schema/breed.types";

export const american_bulldog: Breed = {
  slug: "american-bulldog",
  name: "American Bulldog",
  scientificName: null,

  alternateNames: [
    "AmBull",
    "Southern White",
    "White English Bulldog",
  ],

  group: "Guardian Dog Group",

  origin: {
    country: "United States",
    region: "American South (historical development)",
  },

  images: [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/0/04/American_Bulldog.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:American_Bulldog.jpg",
      title: "American Bulldog.jpg",
      description: "Photograph identified on the file page as an American Bulldog.",
      creator: "JR Strecker",
      uploader: "Jrs0301",
      capturedOn: "2011-01-31",
      uploadedOn: "2011-02-08",
      width: 2560,
      height: 1920,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by JR Strecker (Jrs0301), via Wikimedia Commons, licensed under CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-11-12",
    },
  ],

  overview: {
    summary:
      "A muscular, athletic American working dog with a short coat, broad skull, and confident, people-focused temperament, requiring early training, consistent socialization, and daily structured exercise.",

    description:
      "Built for farm utility rather than ornament, the American Bulldog has a powerful, slightly rectangular frame, heavy bone, and a wide, square muzzle. Appearance varies noticeably across bloodlines—ranging from leaner, more agile working lines to heavier-boned, broader-headed types—with many modern dogs blending both. Its short, low-maintenance coat requires minimal brushing, though responsible ownership demands regular skin-fold checks, firm yet positive leadership, and steady physical outlets.",

    history:
      "Tracing back to working bulldogs brought by settlers to the American South, the breed served rural farms and ranches as a versatile catch dog, livestock handler, and property guardian. Nearly lost after World War II, it was revived through dedicated efforts led by breeders John D. Johnson and Alan Scott, giving rise to both heavier and more athletic lines that shaped today's population.",

    originalPurpose:
      "All-purpose Southern farm utility dog used for catching cattle, managing livestock, and guarding property.",

    currentRoles: [
      "Active family companion and household guardian",
      "Farm and rural property dog in suitable settings",
      "Obedience, weight-pull, agility, and dog-sport competitor",
    ],
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "in",
      male: { min: 22, max: 27 },
      female: { min: 20, max: 25 },
    },

    weight: {
      unit: "kg",
      male: { min: 34, max: 45 },
      female: { min: 27, max: 36 },
    },

    lifespanYears: {
      min: 10,
      max: 12,
    },

    coatType:
      "Short, close-lying single coat ranging from soft to moderately stiff.",

    coatLength:
      "One inch or less in length, lying smooth without feathering or waviness.",

    coatColors: [
      "White with coloured patches",
      "Brindle",
      "Solid colours, pied, or brindle combinations",
    ],

    sheddingLevel:
      "Low to moderate — sheds seasonally despite its short coat.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Powerful, athletic, heavily muscled build slightly longer than tall",
      "Broad, substantial skull and wide, strong muzzle",
      "Natural ears carried as drop, semi-prick, or rose ears",
      "Low-set natural tail tapering smoothly toward the tip",
      "Distinct athletic (Scott) and heavier-boned (Johnson) line variations",
    ],
  },

  temperament: {
    traits: [
      "Confident and courageous",
      "Loyal and deeply bonded to its household",
      "Athletic, energetic, and alert",
      "Intelligent and responsive to consistent training",
      "Naturally protective and often reserved with unfamiliar people",
      "Requires careful introductions and management around unfamiliar dogs",
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 2,
      withStrangers: 3,
      protectiveness: 5,
      independence: 3,
      trainability: 4,
      barking: 3,
      energy: 5,
    },
  },

  care: {
    exercise: {
      level:
        "High — thrives on brisk daily walks, structured play, and purposeful training tailored to age and fitness.",
      minutesPerDay: null,
      activities: [
        "Daily leashed walks with secure, well-fitted gear",
        "Reward-based obedience and impulse-control drills",
        "Structured tug and fetch games with clear rules",
        "Nose-work, puzzle feeders, and supervised yard play inside sturdy fencing",
      ],
    },

    grooming: {
      level: "Low for coat brushing, with routine attention to skin folds, ears, nails, and teeth",
      brushing:
        "Brush weekly with a rubber grooming mitt or soft bristle brush to clear loose hair and inspect the skin.",
      bathing:
        "Bathe as needed with a gentle canine shampoo, rinsing and drying skin folds thoroughly.",
      notes: [
        "Wipe facial wrinkles and inspect skin for redness, scaling, or itching.",
        "Clean ears periodically with a vet-recommended cleanser.",
        "Keep nails trimmed and maintain regular dental brushing.",
      ],
    },

    training: {
      difficulty:
        "Moderate to challenging for novices due to physical strength, high energy, and protective instincts.",
      tips: [
        "Begin reward-based training and clear household boundaries in puppyhood.",
        "Prioritize loose-leash walking, reliable recall, and calm greetings.",
        "Avoid harsh or punitive methods; keep growing puppies away from repetitive high-impact jumping.",
      ],
      socialization:
        "Provide structured, positive exposure to varied people, calm dogs, and everyday settings from early puppyhood, supervising interactions closely.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,
      climates: [
        "Adapts to varied climates with indoor shelter; provide shade, ventilation, and fresh water in warm weather.",
        "Schedule vigorous exercise for cooler hours during hot, humid days.",
        "Never leave outdoors unsupervised without secure fencing and weather protection.",
      ],
      aloneTimeTolerance:
        "Moderate when conditioned gradually — prolonged isolation without exercise or enrichment can lead to boredom or destructive habits.",
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced commercial diet formulated for large-breed dogs according to life stage and body condition.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Feed measured daily portions to maintain a lean, well-muscled body condition rather than excess bulk, keeping fresh water available at all times.",

    considerations: [
      "Use large-breed puppy formulas during growth to support steady joint development.",
      "Introduce diet changes gradually and keep treats under 10% of daily calories.",
      "Consult a veterinarian for persistent itching, ear inflammation, or digestive upset.",
    ],

    note:
      "No universal meal count or calorie target applies to every American Bulldog; adjust portions with veterinary guidance.",
  },

  health: {
    overview:
      "Though sturdy and athletic, American Bulldogs are noted in veterinary references for risks involving hip and elbow dysplasia, allergic skin disease, and the rare inherited skin disorder ichthyosis. Requesting documented parental health clearances and maintaining routine veterinary exams help support long-term joint and skin health.",

    commonConditions: [
      "Hip dysplasia — developmental hip-joint malformation that can lead to arthritis.",
      "Elbow dysplasia — developmental elbow disorder causing forelimb lameness.",
      "Allergic skin disease — immune-driven itching, redness, hair loss, or secondary ear and skin infections.",
      "Ichthyosis — a rare inherited skin condition causing scaling and flaking.",
    ],

    preventiveCare: [
      "Request documented parental hip, elbow, and ichthyosis screening results from breeders.",
      "Maintain routine veterinary wellness checks, vaccinations, and parasite prevention.",
      "Keep a lean body weight and seek veterinary care promptly for lameness, persistent scratching, or scaling skin.",
    ],

    recommendedScreenings: [
      "Hip and elbow dysplasia radiographic evaluations for breeding stock",
      "Genetic testing for canine ichthyosis",
      "Review of parental and close-relative orthopaedic and dermatological history",
    ],

    dentalCare:
      "Brush teeth several times a week with canine toothpaste and schedule routine veterinary oral exams.",

    earCare:
      "Check ears weekly for wax buildup, redness, or odour, using a vet-approved cleanser as needed.",

    skinCare:
      "Keep facial folds clean and dry, and monitor the short coat for scaling, flaking, or persistent itching.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Experienced or well-prepared owners ready to train and safely handle a strong, athletic dog",
      "Active households able to provide daily vigorous exercise and mental engagement",
      "Homes with secure fencing and supervision for family and visitor interactions",
    ],

    notIdealFor: [
      "Owners unwilling or unable to manage a powerful dog on lead",
      "Households skipping early socialization and consistent training",
      "Homes leaving a high-energy dog isolated for long workdays",
    ],
  },

  funFacts: [
    "The breed descends from working bulldogs brought by settlers to the American South.",
    "The Scott and Johnson names are widely used to describe its leaner athletic and heavier-boned historical types.",
    "Early Southern farmers relied on the breed to catch feral cattle and guard homesteads.",
    "Formal kennel-club recognition of the breed took effect on January 1, 1999.",
  ],

  faq: [
    {
      question: "How tall is an American Bulldog?",
      answer:
        "Mature males typically stand 22–27 inches at the withers and mature females 20–25 inches.",
    },
    {
      question: "How much does an American Bulldog weigh?",
      answer:
        "Weight is proportionate to height and build, with males typically weighing roughly 34–45 kg and females 27–36 kg.",
    },
    {
      question: "How long do American Bulldogs live?",
      answer:
        "They have an average lifespan of about 10–12 years with attentive veterinary and preventive care.",
    },
    {
      question: "Is the American Bulldog suited to first-time dog owners?",
      answer:
        "Its physical strength, high energy, and protective instincts can be challenging for novices, making confident, consistent training essential.",
    },
    {
      question: "Does an American Bulldog need much grooming?",
      answer:
        "Weekly brushing keeps its short coat tidy, though facial wrinkles, ears, nails, and skin health require regular attention.",
    },
    {
      question: "Which health issues should owners watch for?",
      answer:
        "Veterinary references highlight hip and elbow dysplasia, allergic skin disease, and the rare inherited condition ichthyosis.",
    },
    {
      question: "Do all American Bulldogs look the same?",
      answer:
        "No—athletic lines tend to be leaner and longer-muzzled, while heavier lines carry thicker bone and broader heads, with many dogs blending both.",
    },
  ],

  references: [
    "united-kennel-club-american-bulldog-standard",
    "petmd-american-bulldog",
    "zoetis-american-bulldog-profile",
    "commons-american-bulldog-jrs0301",
    "the-dog-api",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No separate scientific binomial is assigned beyond domestic dog (Canis lupus familiaris).",
    },
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "zoetis-american-bulldog-profile",
          role: "verified",
          locator: "Breed profile — AmBull nickname",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names (AmBull, Southern White, White English Bulldog)",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-american-bulldog-standard",
          role: "verified",
          locator: "Standard heading — Guardian Dog Group",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group: Working",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-american-bulldog-standard",
          role: "verified",
          locator: "History — American South",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: United States",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "united-kennel-club-american-bulldog-standard",
          role: "verified",
          locator: "History — American South",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-american-bulldog-standard",
          role: "verified",
          locator: "History, General Appearance, and Characteristics",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "petmd-american-bulldog",
          role: "cited",
          locator: "Breed overview and body size",
        },
      ],
      verifiedOn: null,
      note: "Broad catalog size label.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-american-bulldog-standard",
          role: "verified",
          locator: "Height and Weight — males 22–27 inches; females 20–25 inches",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric: 56–64 cm (males), 51–58 cm (females)",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Published inches from the UKC standard are retained without unit conversion; The Dog API lists 56–64 cm (males) and 51–58 cm (females).",
    },
    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric: 34–45 kg (males), 27–36 kg (females)",
        },
        {
          id: "united-kennel-club-american-bulldog-standard",
          role: "cited",
          locator: "Weight proportionate to height",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Official standard specifies weight proportionate to height without a numeric range; metric ranges are sourced from The Dog API.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "petmd-american-bulldog",
          role: "verified",
          locator: "Health section — average lifespan 10–12 years",
        },
        {
          id: "zoetis-american-bulldog-profile",
          role: "cited",
          locator: "Breed profile — lifespan",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span: 10–12 years",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-american-bulldog-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-american-bulldog-standard",
          role: "verified",
          locator: "Coat — one inch or less",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-american-bulldog-standard",
          role: "verified",
          locator: "Colour — permitted colours and patterns",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Generic species-wide colours from The Dog API are excluded.",
    },
    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "petmd-american-bulldog",
          role: "verified",
          locator: "General care — coat and shedding",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling measurement was established.",
    },
    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-american-bulldog-standard",
          role: "verified",
          locator: "General Appearance, Ears, Tail, and Historical Types",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-american-bulldog-standard",
          role: "verified",
          locator: "Characteristics and History",
        },
        {
          id: "petmd-american-bulldog",
          role: "cited",
          locator: "Breed overview and training",
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
          id: "united-kennel-club-american-bulldog-standard",
          role: "cited",
          locator: "Characteristics",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1–5 comparison estimates.",
    },
    "care.exercise.level": {
      reliability: "general_guidance",
      sources: [
        {
          id: "petmd-american-bulldog",
          role: "cited",
          locator: "General care and exercise",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No single verified daily exercise-minute target was established.",
    },
    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General enrichment suggestions adapted to the individual dog.",
    },
    "care.grooming": {
      reliability: "general_guidance",
      sources: [
        {
          id: "petmd-american-bulldog",
          role: "cited",
          locator: "General care and skin care",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "care.training": {
      reliability: "general_guidance",
      sources: [
        {
          id: "petmd-american-bulldog",
          role: "cited",
          locator: "Training and socialization",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal apartment-suitability boolean is assigned.",
    },
    "care.livingEnvironment": {
      reliability: "general_guidance",
      sources: [
        {
          id: "petmd-american-bulldog",
          role: "cited",
          locator: "General care",
        },
      ],
      verifiedOn: null,
      note: "General environmental and alone-time guidance.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "petmd-american-bulldog",
          role: "cited",
          locator: "What to feed an American Bulldog",
        },
      ],
      verifiedOn: null,
      note: "General canine nutrition guidance.",
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed puppy meal frequency is asserted.",
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed adult meal frequency is asserted.",
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed senior meal frequency is asserted.",
    },
    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "petmd-american-bulldog",
          role: "verified",
          locator: "Health issues and preventive care",
        },
        {
          id: "zoetis-american-bulldog-profile",
          role: "cited",
          locator: "Breed health overview",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "petmd-american-bulldog",
          role: "verified",
          locator: "Hip and elbow dysplasia, allergies, and ichthyosis",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Reported risks rather than prevalence estimates.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "petmd-american-bulldog",
          role: "cited",
          locator: "General health care and screening",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "petmd-american-bulldog",
          role: "verified",
          locator: "Hip and elbow dysplasia and ichthyosis screening",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive dental care guidance.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General ear-care guidance.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "petmd-american-bulldog",
          role: "cited",
          locator: "Allergies and ichthyosis",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "united-kennel-club-american-bulldog-standard",
          role: "cited",
          locator: "Characteristics and traditional work",
        },
        {
          id: "petmd-american-bulldog",
          role: "cited",
          locator: "Training, exercise, and family suitability",
        },
      ],
      verifiedOn: null,
      note: "Editorial suitability estimates.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal senior-owner suitability rating is assigned.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal apartment-living rating is assigned.",
    },
    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-american-bulldog-standard",
          role: "verified",
          locator: "History and recognition date",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    faq: {
      reliability: "general_guidance",
      sources: [
        {
          id: "united-kennel-club-american-bulldog-standard",
          role: "cited",
          locator: "Height, weight, and historical types",
        },
        {
          id: "petmd-american-bulldog",
          role: "cited",
          locator: "Lifespan, grooming, and health",
        },
      ],
      verifiedOn: null,
      note: "Combines standard-backed facts with general care guidance.",
    },
  },

  updatedOn: "2026-11-12",
};
