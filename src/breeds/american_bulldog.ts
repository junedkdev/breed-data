import type { Breed } from "../schema/breed.types";

export const american_bulldog: Breed = {
  slug: "american-bulldog",
  name: "American Bulldog",
  scientificName: null,
  alternateNames: ["AmBull"],
  group: "Guardian Dog Group",
  origin: {
    country: "United States",
    region: "American South (historical development)",
  },
  images: [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/0/04/American_Bulldog.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:American_Bulldog.jpg",
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
      metadataCheckedOn: "2026-10-26",
    },
  ],
  overview: {
    summary:
      "The American Bulldog is a powerful, athletic working breed with a short coat, a broad head, and a confident, people-oriented nature. It can be a devoted family companion, but its strength, energy, and guardian instincts make early training and thoughtful socialization especially important.",
    description:
      "American Bulldogs are muscular, strong-boned dogs built for active work rather than a purely ornamental role. Their body is slightly longer than tall, with a broad head and substantial muzzle. Different lines can look noticeably different: some are more athletic and moderate, while others are heavier and more muscular. A short coat is relatively easy to maintain, but responsible ownership still requires regular exercise, grooming checks, training, and preventive veterinary care.",
    history:
      "The breed descends from working bulldogs brought by immigrants to the American South. Farmers and ranchers used these dogs for varied jobs, including managing livestock and guarding property. After the Second World War, the breed was close to disappearing, and breeders including John D. Johnson and Alan Scott helped rebuild its numbers. Over time, distinct heavier and more athletic types developed, and many modern dogs combine features of more than one line.",
    originalPurpose:
      "All-purpose farm work, livestock catching and handling, and property protection.",
    currentRoles: [
      "Active household companion",
      "Farm and property dog in appropriately managed settings",
      "Participant in suitable obedience and canine sports",
      "Working dog for experienced handlers where legal, ethical, and appropriate",
    ],
  },
  physical: {
    sizeCategory: "Large",
    height: {
      unit: "in",
      male: {
        min: 22,
        max: 27,
      },
      female: {
        min: 20,
        max: 25,
      },
    },
    weight: {
      unit: null,
      male: null,
      female: null,
    },
    lifespanYears: {
      min: 10,
      max: 12,
    },
    coatType: "Short, close-lying coat that may feel soft or stiff.",
    coatLength:
      "The UKC standard specifies a coat one inch or less in length, with no feathering or waviness.",
    coatColors: [
      "White with coloured patches",
      "Brindle",
      "Other solid colours and colour combinations permitted by the applicable registry standard",
    ],
    sheddingLevel:
      "Low to moderate; seasonal shedding may occur despite the short coat.",
    droolingLevel: null,
    distinctiveFeatures: [
      "Powerful, athletic, strongly muscled body with substantial bone.",
      "Body slightly longer than tall.",
      "Large, broad head and wide muzzle.",
      "Natural ears may be drop, semi-prick, or rose-shaped.",
      "Natural tail is preferred in the UKC standard.",
      "Two commonly described line types are the more athletic Scott type and the heavier Johnson type, with many dogs showing mixed characteristics.",
    ],
  },
  temperament: {
    traits: [
      "Confident and courageous",
      "Loyal and closely bonded to its household",
      "Athletic and energetic",
      "Intelligent and capable of learning",
      "May be reserved around unfamiliar people, especially when young",
      "Can show strong guardian instincts",
      "Needs structured introductions and management around unfamiliar dogs and animals",
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
        "High. Provide regular walks, play, training, and suitable outlets for the breed's working energy. Build activity gradually, particularly during growth, and tailor exercise to the dog's health and fitness.",
      minutesPerDay: null,
      activities: [
        "Daily walks using secure, well-fitted equipment",
        "Reward-based obedience and impulse-control training",
        "Interactive play and structured tug games with clear rules",
        "Scent-search and problem-solving games",
        "Appropriate canine sports for dogs whose health and structure suit them",
        "Supervised activity in a securely fenced area",
      ],
    },
    grooming: {
      level:
        "Low coat-maintenance needs, with routine attention to skin, ears, nails, and teeth.",
      brushing:
        "Brush regularly with a soft brush or grooming mitt to remove loose hair and check the skin. Increase brushing during seasonal shedding.",
      bathing:
        "Bathe when dirty or when advised by a veterinarian. Use a dog-appropriate shampoo and dry thoroughly, especially if the dog has skin folds or recurrent irritation.",
      notes: [
        "Inspect the skin for redness, itchiness, flaking, sores, or recurring irritation.",
        "Trim nails as needed and check the paws after outdoor activity.",
        "Check the ears regularly and clean only as recommended by a veterinarian.",
        "Brush teeth regularly with dog-specific toothpaste.",
        "Short fur does not remove the need to monitor skin health.",
      ],
    },
    training: {
      difficulty:
        "Moderate to challenging for an inexperienced handler because the dog is powerful, energetic, and can be independent. Consistent, humane training is important from puppyhood.",
      tips: [
        "Start reward-based training and household rules early.",
        "Prioritise loose-leash walking, recall, calm greetings, and reliable disengagement from distractions.",
        "Reward calm behaviour around visitors and unfamiliar dogs rather than relying on intimidation or punishment.",
        "Use secure equipment and management appropriate to the dog's strength.",
        "Keep sessions structured and mentally engaging.",
        "Avoid high-impact repetitive exercise for growing puppies; ask a veterinarian about age-appropriate activity.",
      ],
      socialization:
        "Arrange gradual, positive exposure to different people, calm dogs, everyday environments, and handling. Supervise interactions, assess each dog's comfort, and do not force greetings. Because individual dog tolerance varies, use controlled introductions and separate dogs when needed.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,
      climates: [
        "Can live in a range of climates with suitable shelter and monitoring.",
        "In hot weather, provide shade, water, ventilation, and exercise during cooler hours.",
        "Avoid leaving the dog outdoors without secure shelter or supervision.",
      ],
      aloneTimeTolerance:
        "Individual tolerance varies. Build alone time gradually and provide exercise, training, and enrichment. Long periods of isolation may lead to frustration or unwanted behaviour.",
    },
  },
  nutrition: {
    dietType:
      "A complete and balanced diet appropriate to life stage, body condition, activity level, and veterinary needs.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Use the food manufacturer's feeding guide as a starting point and adjust portions based on body condition, activity, age, and veterinary advice. Keep fresh water available and include treats in the daily calorie allowance.",
    considerations: [
      "Maintain a lean, well-muscled body condition rather than feeding for maximum bulk.",
      "Use a diet suitable for the dog's age and expected adult size.",
      "Make diet changes gradually unless a veterinarian recommends otherwise.",
      "Seek veterinary advice for persistent digestive problems, unexplained weight change, or suspected food-related skin symptoms.",
      "Do not use supplements or restrictive diets as treatment without veterinary guidance.",
    ],
    note:
      "A single meal count or portion size cannot be reliably prescribed for every American Bulldog; individual needs depend on age, food energy density, health, and activity.",
  },
  health: {
    overview:
      "American Bulldogs can be active, robust dogs, but breed and veterinary references report concerns involving joints and skin. These reports describe possible risks, not a diagnosis or a prediction for every dog. Responsible breeders should provide relevant health information and screening records, while owners should arrange routine veterinary care and seek advice when symptoms appear.",
    commonConditions: [
      "Hip dysplasia, a developmental joint condition that can cause pain and later arthritis.",
      "Elbow dysplasia, a group of developmental elbow disorders.",
      "Allergic skin disease, which may cause itching, redness, hair loss, or recurrent ear and skin infections.",
      "Ichthyosis, a rare inherited skin disorder reported in the breed.",
    ],
    preventiveCare: [
      "Arrange routine veterinary examinations and follow the veterinarian's vaccination and parasite-prevention advice.",
      "Ask breeders for documented hip and elbow screening information and any relevant inherited-disease testing.",
      "Monitor the skin for persistent itching, scaling, redness, or recurrent infections.",
      "Maintain a healthy body condition and use age-appropriate exercise.",
      "Seek veterinary assessment for lameness, joint pain, persistent skin symptoms, or unexpected changes in activity.",
    ],
    recommendedScreenings: [
      "Discuss hip and elbow evaluations for breeding dogs with a veterinarian and the relevant screening organisation.",
      "Ask the breeder about screening for ichthyosis and the health history of related dogs.",
      "Select any additional screening based on family history, clinical findings, and veterinary advice.",
    ],
    dentalCare:
      "Brush the teeth regularly with dog-specific toothpaste and arrange veterinary dental checks. Seek advice for bad breath, oral discomfort, bleeding gums, or difficulty eating.",
    earCare:
      "Check the ears for redness, odour, discharge, or repeated scratching. Clean them only with an appropriate product and technique recommended by a veterinarian.",
    skinCare:
      "Check the short coat and skin regularly. Persistent itching, scaling, redness, hair loss, or recurrent infections warrant veterinary assessment; rare inherited skin disorders have been reported in this breed.",
  },
  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "Experienced or well-prepared owners able to train and safely manage a powerful dog",
      "Active households that can provide regular exercise and mental engagement",
      "Owners committed to early socialization, supervision, and consistent reward-based training",
      "Homes with secure fencing and a plan for controlled introductions to visitors and other animals",
    ],
    notIdealFor: [
      "Owners unable to manage a strong, energetic dog safely",
      "Households unwilling to invest in early training and ongoing socialization",
      "Homes where the dog would be left without adequate activity or companionship for long periods",
      "Situations where the dog cannot be safely separated from unfamiliar animals when needed",
    ],
  },
  funFacts: [
    "The breed was developed from working bulldogs brought to the American South.",
    "The Scott and Johnson names are commonly used for two historical types within the breed.",
    "The breed's working history includes livestock handling and property protection.",
    "The UKC recognised the American Bulldog on January 1, 1999.",
  ],
  faq: [
    {
      question: "How tall is an American Bulldog?",
      answer:
        "The UKC standard gives a desirable height of 22–27 inches for mature males and 20–25 inches for mature females.",
    },
    {
      question: "What is the American Bulldog's weight range?",
      answer:
        "The UKC standard says weight should be proportionate to height rather than giving a single numeric range. For that reason, this catalogue does not record a numeric weight range.",
    },
    {
      question: "How long do American Bulldogs live?",
      answer:
        "A veterinary-reviewed breed profile gives an average lifespan of 10–12 years. Individual lifespan varies with genetics, health, and care.",
    },
    {
      question: "Is the American Bulldog suitable for a first-time owner?",
      answer:
        "It may be challenging for an inexperienced owner because of its strength, energy, and guardian instincts. Consistent reward-based training, careful socialization, and safe management are important.",
    },
    {
      question: "Does the American Bulldog need a lot of grooming?",
      answer:
        "The short coat is relatively easy to brush, but the skin, ears, nails, and teeth still need routine care. Skin irritation should not be dismissed as ordinary shedding.",
    },
    {
      question: "Which health concerns should owners discuss with a veterinarian?",
      answer:
        "Reported concerns include hip and elbow dysplasia, allergic skin disease, and the rare inherited condition ichthyosis. Ask a veterinarian or responsible breeder which screening and preventive care are appropriate.",
    },
    {
      question: "Are all American Bulldogs built the same way?",
      answer:
        "No. Dogs from more athletic lines may look leaner, while heavier lines tend to have more bone and a bulkier head. Many dogs show a mixture of these traits.",
    },
  ],
  references: [
    "united-kennel-club-american-bulldog-standard",
    "petmd-american-bulldog",
    "zoetis-american-bulldog-profile",
    "commons-american-bulldog-jrs0301",
  ],
  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific scientific name is required or established by the consulted breed references.",
    },
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "zoetis-american-bulldog-profile",
          role: "verified",
          locator: "Breed profile: nickname",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The short nickname is recorded as a common alternate name.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-american-bulldog-standard",
          role: "verified",
          locator: "Standard heading: Guardian Dog Group",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Group follows the cited registry's classification.",
    },
    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-american-bulldog-standard",
          role: "verified",
          locator: "History: working dogs brought by immigrants to the American South",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The breed was developed in the United States.",
    },
    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "united-kennel-club-american-bulldog-standard",
          role: "verified",
          locator: "History: working dogs preserved by immigrants in the American South",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Historical development is associated with the American South; no single state is asserted.",
    },
    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-american-bulldog-standard",
          role: "verified",
          locator: "History, general appearance, and characteristics",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Original prose summarises the working history, physical type, and temperament described in the standard.",
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
      note: "Large is a catalogue category rather than a formal standard measurement.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-american-bulldog-standard",
          role: "verified",
          locator: "Height and weight: mature males 22–27 inches; mature females 20–25 inches",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Numbers and units are retained exactly as published in the UKC standard; no conversion was made.",
    },
    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The consulted official standard states that weight should be proportionate to height and does not set a numeric weight range.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "petmd-american-bulldog",
          role: "verified",
          locator: "Health section: average lifespan",
        },
        {
          id: "zoetis-american-bulldog-profile",
          role: "cited",
          locator: "Breed profile: life span",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The 10–12 year range follows the veterinary-reviewed profile; another breed profile gives a broader estimate.",
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
      verifiedOn: "2026-10-26",
      note: "Coat description paraphrased from the standard.",
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-american-bulldog-standard",
          role: "verified",
          locator: "Coat: one inch or less",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The source's original unit is retained.",
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-american-bulldog-standard",
          role: "verified",
          locator: "Colour: permitted colours and disqualifications",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The applicable registry's exclusions are detailed in its standard; registry rules may differ.",
    },
    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "petmd-american-bulldog",
          role: "verified",
          locator: "General care: coat and shedding",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Qualitative description; individual shedding and seasonal changes vary.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No sufficiently reliable breed-specific drooling rating was established.",
    },
    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-american-bulldog-standard",
          role: "verified",
          locator: "General appearance, ears, tail, and historical types",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Features are paraphrased from the official standard.",
    },
    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-american-bulldog-standard",
          role: "verified",
          locator: "Characteristics and history",
        },
        {
          id: "petmd-american-bulldog",
          role: "cited",
          locator: "Breed overview and training",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Traits describe general tendencies and are not guarantees about an individual dog.",
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
      note: "Scores are editorial comparison estimates, not scientific measurements or official ratings.",
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
      note: "Exercise needs vary by age, health, and individual temperament.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No single verified daily exercise-minute range is asserted.",
    },
    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Activities are general enrichment suggestions and should be adapted to the individual dog.",
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
      note: "Routine grooming suggestions are general care guidance.",
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
      note: "Recommendations are general welfare and safety guidance.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal apartment-suitability boolean is assigned because housing suitability depends on the individual dog, available exercise, noise tolerance, and local rules.",
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
      note: "Environmental and alone-time guidance is general advice rather than a formal breed-standard claim.",
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
      note: "Nutrition guidance is general and is not a veterinary prescription.",
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed puppy feeding frequency is asserted; needs vary with age, diet, and veterinary advice.",
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed adult feeding frequency is asserted; needs vary by individual.",
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed senior feeding frequency is asserted; needs vary by individual.",
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
      verifiedOn: "2026-10-26",
      note: "Summarises reported risks without implying every dog will develop them.",
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
      verifiedOn: "2026-10-26",
      note: "Reported conditions are possible concerns, not prevalence estimates.",
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
      note: "Preventive-care guidance should be adapted by the dog's veterinarian.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "petmd-american-bulldog",
          role: "verified",
          locator: "Hip and elbow dysplasia and ichthyosis screening discussion",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Screening is framed as a discussion with a breeder and veterinarian rather than a universal test panel.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive dental advice.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General ear-care advice.",
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
      note: "General advice; persistent skin symptoms need veterinary assessment.",
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
      note: "Suitability is an editorial estimate and depends on the individual dog and household.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal senior-owner suitability rating is assigned because ability to handle a strong dog varies by person and support available.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal apartment-living rating is assigned; housing suitability depends on the dog, household, exercise opportunities, and local rules.",
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
      verifiedOn: "2026-10-26",
      note: "Facts paraphrased from the standard's historical section.",
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
      note: "FAQ combines standard-backed details and general care information.",
    },
  },
  updatedOn: "2026-10-26",
};
