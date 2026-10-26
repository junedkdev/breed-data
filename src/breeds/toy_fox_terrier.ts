import type { Breed } from "../schema/breed.types";

export const toy_fox_terrier: Breed = {
  slug: "toy-fox-terrier",
  name: "Toy Fox Terrier",
  scientificName: null,
  alternateNames: [
    "American Toy Terrier",
    "AmerToy",
  ],
  group: "Toy Group",
  origin: {
    country: "United States",
    region: null,
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Toy_Fox_Terrier.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Toy_Fox_Terrier.jpg",
      title: "Toy Fox Terrier",
      description: "A Toy Fox Terrier.",
      creator: "Ltshears",
      uploader: "Ltshears",
      capturedOn: "2008-07-26",
      uploadedOn: "2008-08-14",
      width: 1016,
      height: 1008,
      licenseId: "cc-by-3.0",
      attribution:
        "Photo by Ltshears, Wikimedia Commons, CC BY 3.0 (https://creativecommons.org/licenses/by/3.0/). Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-10-26",
    },
  ],
  overview: {
    summary:
      "A tiny, athletic American terrier with a smooth, glossy coat, upright ears, a lively personality, and a strong instinct to investigate moving things.",
    description:
      "The Toy Fox Terrier combines the alertness and curiosity of a terrier with the compact size of a toy companion. Its balanced, muscular body is built for quick movement, while its short, glossy coat is predominantly white with clearly defined head markings. Bright, expressive eyes and erect ears contribute to its attentive appearance. This breed is often affectionate with its household, eager to learn, playful, and confident. Despite its small stature, it benefits from regular exercise, interesting training, careful socialisation, and consistent boundaries. Its small size also means that children and larger pets need to interact with it gently and under appropriate supervision.",
    history:
      "The Toy Fox Terrier was developed in the United States from smaller Smooth Fox Terriers, with toy breeds also contributing to its development. It was valued as a compact farm dog that could hunt rats and other small vermin, while retaining the alertness, energy, and tenacity associated with terriers. Over time, its small size, trainability, and entertaining personality also made it popular as a household companion. The breed retains its interest in movement and its readiness to investigate its surroundings.",
    originalPurpose:
      "Hunting rats and other small vermin around farms and buildings.",
    currentRoles: [
      "Companion dog",
      "Interactive household pet",
      "Obedience and rally participant",
      "Agility and trick-training participant",
      "Scent games and other supervised activity",
    ],
  },
  physical: {
    sizeCategory: "Toy",
    height: {
      unit: "in",
      male: {
        min: 8.5,
        max: 11.5,
      },
      female: {
        min: 8.5,
        max: 11.5,
      },
    },
    weight: {
      unit: "lb",
      male: {
        min: 4.5,
        max: 8,
      },
      female: {
        min: 4.5,
        max: 8,
      },
    },
    lifespanYears: {
      min: 13,
      max: 14,
    },
    coatType: "Short, smooth, fine-textured, glossy single coat.",
    coatLength:
      "Short and close-fitting over most of the body, with slightly longer hair around the neck and ruff.",
    coatColors: [
      "Tri-colour: predominantly black head with tan markings and a predominantly white body.",
      "White, chocolate and tan.",
      "White and tan.",
      "White and black.",
    ],
    sheddingLevel: "Moderate; the short coat sheds and loose hairs can be noticeable on clothing and furniture.",
    droolingLevel: "Low.",
    distinctiveFeatures: [
      "Compact, square-proportioned body with athletic musculature.",
      "High-set, erect, pointed ears.",
      "Bright, round, dark eyes and an alert expression.",
      "Short, smooth, glossy coat with a predominantly white body.",
      "Distinctive head markings in black, tan, or chocolate according to colour variety.",
      "Quick, agile movement and a confident terrier demeanour.",
    ],
  },
  temperament: {
    traits: [
      "Alert and observant",
      "Intelligent and quick to learn",
      "Affectionate with familiar people",
      "Lively and playful",
      "Confident and courageous",
      "Curious with a strong interest in small moving animals",
      "Can be vocal when excited or when alerting the household",
      "May become bored by repetitive training",
    ],
    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 3,
      independence: 3,
      trainability: 4,
      barking: 4,
      energy: 4,
    },
  },
  care: {
    exercise: {
      level:
        "Moderate to high for a toy-sized dog. Provide daily walks, play, and short training sessions. Adjust the intensity to the dog's age, fitness, and veterinary advice; its small size does not eliminate its need for activity.",
      minutesPerDay: null,
      activities: [
        "Daily walks using a well-fitted harness or secure lead",
        "Supervised games and fetch in a safe area",
        "Short reward-based obedience sessions",
        "Trick training and interactive puzzle toys",
        "Scent games and supervised exploration",
        "Suitable agility activities after age-appropriate conditioning",
      ],
    },
    grooming: {
      level: "Low.",
      brushing:
        "Brush about once a week with a soft brush or grooming glove to remove loose hair and keep the coat clean.",
      bathing:
        "Bathe as needed with a dog-appropriate shampoo, then dry thoroughly and keep the dog warm.",
      notes: [
        "The short coat is relatively easy to maintain but does shed.",
        "Check the skin for irritation, parasites, or unusual lumps during routine grooming.",
        "Trim nails regularly; small dogs may need frequent nail care if they do not wear them down naturally.",
        "Brush the teeth regularly because dental problems can be significant in small dogs.",
        "Check the ears and keep them clean and dry without inserting cotton buds into the ear canal.",
        "Provide a warm resting place and appropriate protection in cold weather because the short coat offers limited insulation.",
      ],
    },
    training: {
      difficulty:
        "Moderate. The breed is clever and responsive but may become distracted by movement or lose interest in repetitive tasks.",
      tips: [
        "Use short, varied sessions with food rewards, toys, and praise.",
        "Teach recall, leash manners, and calm settling from an early age.",
        "Practise impulse control around birds, rodents, and other small animals.",
        "Reward quiet behaviour and teach an alternative response to alert barking.",
        "Use gentle handling and protect the dog from rough play because of its small size.",
        "Supervise interactions with larger dogs until safe, calm behaviour is reliable.",
      ],
      socialization:
        "Introduce the puppy gradually and positively to people, calm dogs, common sounds, different surfaces, grooming, and veterinary handling. Continue reinforcement through adolescence and adulthood.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: null,
      climates: [
        "Cold weather: provide a warm resting area and suitable outdoor protection.",
        "Hot weather: provide shade, fresh water, and opportunities to rest.",
      ],
      aloneTimeTolerance: null,
    },
  },
  nutrition: {
    dietType:
      "A complete and balanced dog food formulated for the dog's life stage, size, activity level, and health status.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Use the food label as a starting point and adjust portions to maintain a healthy body condition. Measure meals, account for treats, provide fresh water, and consult a veterinarian when choosing a diet for a puppy, senior dog, or dog with a medical condition.",
    considerations: [
      "Small dogs can gain excess weight if treats and meal portions are not monitored.",
      "Choose a food suitable for the dog's life stage and individual needs.",
      "Account for training treats in the total daily food allowance.",
      "Monitor body condition and weight rather than relying on a fixed portion for every dog.",
      "Discuss persistent digestive problems, unexpected weight change, or special dietary needs with a veterinarian.",
    ],
    note:
      "A universal daily quantity is not recorded because energy needs depend on age, body condition, activity, and the specific food.",
  },
  health: {
    overview:
      "Toy Fox Terriers can live active lives, but prospective owners should ask about inherited and breed-associated health risks. Breed and veterinary sources discuss patellar luxation, eye conditions including primary lens luxation, Legg-Calvé-Perthes disease, von Willebrand disease, and thyroid problems. These are risks to discuss and screen for where appropriate, not diagnoses for an individual dog.",
    commonConditions: [
      "Patellar luxation: displacement of the kneecap that can cause lameness or abnormal gait.",
      "Primary lens luxation (PLL): an inherited eye disorder that can displace the lens and threaten vision.",
      "Legg-Calvé-Perthes disease: a disorder affecting the head of the femur and the hip joint.",
      "Von Willebrand disease: an inherited blood-clotting disorder.",
      "Hypothyroidism: reduced thyroid hormone production that requires veterinary assessment.",
      "Spinocerebellar ataxia (SCA): a genetic neurological disorder identified in breed-club health guidance.",
    ],
    preventiveCare: [
      "Ask the breeder for documented health-test results for both parents.",
      "Discuss patella evaluation and relevant inherited-disease testing with a veterinarian.",
      "Arrange prompt veterinary assessment for limping, persistent pain, unusual bleeding, changes in vision, or altered coordination.",
      "Maintain a healthy body condition with suitable nutrition and regular activity.",
      "Provide routine dental care and veterinary oral examinations.",
      "Keep up with vaccinations, parasite prevention, and routine health checks according to veterinary advice.",
    ],
    recommendedScreenings: [
      "Patella evaluation.",
      "Thyroid evaluation, as listed in the national breed club's recommended health tests.",
      "Primary Lens Luxation (PLL) testing.",
      "Ask the breeder about DNA testing for Spinocerebellar Ataxia (SCA) and von Willebrand disease where appropriate to the pedigree and current breed-club guidance.",
    ],
    dentalCare:
      "Brush the teeth regularly with dog-specific toothpaste and arrange veterinary dental examinations. Small dogs can develop dental disease even when their teeth look clean at a glance.",
    earCare:
      "Inspect the ears regularly for redness, odour, discharge, or discomfort. Clean only with a dog-safe product when needed and follow veterinary advice if signs of inflammation appear.",
    skinCare:
      "Check the short coat and skin during brushing for irritation, parasites, sores, or unusual lumps. Seek veterinary advice for persistent itching or changes in the skin.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: null,
    apartmentLiving: null,
    idealFor: [
      "People who want a small, alert, interactive companion.",
      "Owners willing to provide daily play, walks, and training.",
      "Households that can handle a lively terrier personality and manage alert barking.",
      "People who can provide careful supervision around children and larger pets.",
    ],
    notIdealFor: [
      "Households seeking a dog that requires no training or daily engagement.",
      "People who cannot protect a very small dog from rough handling or unsafe play.",
      "Owners who expect a strong terrier instinct to disappear without management and training.",
    ],
  },
  funFacts: [
    "The breed was developed in the United States from smaller Smooth Fox Terriers and toy-breed influences.",
    "Its history combines farm vermin control with life as a companion dog.",
    "Although small, it has the athletic build and alert working character associated with terriers.",
    "The official standard describes a predominantly white body with clearly defined head markings.",
  ],
  faq: [
    {
      question: "Where does the Toy Fox Terrier originate?",
      answer:
        "The Toy Fox Terrier was developed in the United States from smaller Smooth Fox Terriers and toy-breed influences.",
    },
    {
      question: "How tall is a Toy Fox Terrier?",
      answer:
        "The AKC standard gives an acceptable height of 8½–11½ inches. It does not specify different height ranges for males and females.",
    },
    {
      question: "What colours does a Toy Fox Terrier come in?",
      answer:
        "Recognised colour patterns include tri-colour, white and chocolate and tan, white and tan, and white and black. The body is predominantly white, with head markings defined by the pattern.",
    },
    {
      question: "Does a Toy Fox Terrier need a lot of grooming?",
      answer:
        "No. Its short, smooth coat is relatively easy to maintain with weekly brushing, occasional bathing, and routine nail, ear, and dental care.",
    },
    {
      question: "How much exercise does a Toy Fox Terrier need?",
      answer:
        "It needs daily walks, play, and mental activity. The exact amount depends on age, fitness, and health, so a fixed daily-minute figure is not given here.",
    },
    {
      question: "What health tests should I ask a breeder about?",
      answer:
        "Ask for patella evaluation, thyroid evaluation, and Primary Lens Luxation testing. You can also ask about SCA and von Willebrand disease testing in line with current breed-club guidance and the dog's pedigree.",
    },
    {
      question: "Is a Toy Fox Terrier suitable for a family with children?",
      answer:
        "It can be affectionate and playful, but its small body needs careful handling. Interactions with young children should be actively supervised, and children should be taught to handle the dog gently.",
    },
  ],
  references: [
    "american-kennel-club-toy-fox-terrier-standard",
    "american-kennel-club-toy-fox-terrier",
    "american-kennel-club-toy-group-health-testing",
    "ukc-toy-fox-terrier-standard",
    "vcahospitals-toy-fox-terrier",
    "national-toy-fox-terrier-association-health",
    "wikimedia-toy-fox-terrier-ltshears",
  ],
  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-toy-fox-terrier",
          role: "verified",
          locator: "Breed overview and alternate breed name",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Alternate naming is based on kennel-club and breed-club usage.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A breed-specific scientific name was not established from the selected breed sources.",
    },
    group: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-toy-fox-terrier",
          role: "verified",
          locator: "AKC breed group",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Group refers to the American Kennel Club classification.",
    },
    origin: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-toy-fox-terrier",
          role: "verified",
          locator: "Breed history and development",
        },
        {
          id: "vcahospitals-toy-fox-terrier",
          role: "cited",
          locator: "History",
        },
      ],
      verifiedOn: "2026-10-26",
      note: null,
    },
    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The selected sources establish the country of development but not a specific region.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-toy-fox-terrier-standard",
          role: "verified",
          locator: "General appearance, size, coat, and colour",
        },
        {
          id: "american-kennel-club-toy-fox-terrier",
          role: "cited",
          locator: "Breed overview",
        },
        {
          id: "vcahospitals-toy-fox-terrier",
          role: "cited",
          locator: "History, temperament, training, and care",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "User-facing descriptions are original summaries based on the listed sources.",
    },
    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-toy-fox-terrier-standard",
          role: "verified",
          locator: "General appearance, size, coat, and colour",
        },
      ],
      verifiedOn: "2026-10-26",
      note: null,
    },
    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-toy-fox-terrier-standard",
          role: "cited",
          locator: "Toy breed classification and size",
        },
      ],
      verifiedOn: null,
      note: "Toy is the catalog's size category, consistent with the breed's classification.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-toy-fox-terrier-standard",
          role: "verified",
          locator: "Size, Proportion and Substance",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The AKC standard publishes 8½–11½ inches for both sexes without separate sex-specific ranges. The exact published range is represented in decimal notation, with no unit conversion.",
    },
    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "ukc-toy-fox-terrier-standard",
          role: "verified",
          locator: "Height and weight",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The UKC standard says weight is up to 8 lbs, with 4.5–7.5 lbs preferred. The stored 4.5–8 lb interval records the preferred lower endpoint and the stated maximum, not a claim that 4.5 lbs is a biological minimum.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vcahospitals-toy-fox-terrier",
          role: "verified",
          locator: "Quick Facts: Life",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The range is from the veterinary breed profile; individual lifespan varies.",
    },
    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vcahospitals-toy-fox-terrier",
          role: "verified",
          locator: "Grooming and Care",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The short coat sheds; the level is described qualitatively rather than as a measured rate.",
    },
    "physical.droolingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "vcahospitals-toy-fox-terrier",
          role: "cited",
          locator: "Breed overview and grooming",
        },
      ],
      verifiedOn: null,
      note: "Low is an editorial estimate; the source does not provide a measured drooling score.",
    },
    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-toy-fox-terrier-standard",
          role: "verified",
          locator: "General appearance and breed character",
        },
        {
          id: "vcahospitals-toy-fox-terrier",
          role: "cited",
          locator: "Temperament and training",
        },
      ],
      verifiedOn: "2026-10-26",
      note: null,
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-toy-fox-terrier-standard",
          role: "cited",
          locator: "General appearance and character",
        },
        {
          id: "vcahospitals-toy-fox-terrier",
          role: "cited",
          locator: "Temperament and training",
        },
      ],
      verifiedOn: null,
      note: "Scores are editorial estimates on a 1–5 scale, not validated behavioural measurements.",
    },
    care: {
      reliability: "reliable_source",
      sources: [
        {
          id: "vcahospitals-toy-fox-terrier",
          role: "verified",
          locator: "Grooming, training, exercise, and care",
        },
        {
          id: "american-kennel-club-toy-fox-terrier",
          role: "cited",
          locator: "Grooming and health guidance",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Care recommendations are general breed guidance and should be adapted to the individual dog.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A single daily exercise duration suitable for all ages and individuals was not established.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Apartment suitability depends on training, noise management, exercise, and the individual dog's needs.",
    },
    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A yard alone does not determine suitability; no categorical value is recorded.",
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A reliable breed-specific alone-time duration was not established.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "vcahospitals-toy-fox-terrier",
          role: "cited",
          locator: "Grooming and Care",
        },
      ],
      verifiedOn: null,
      note: "Nutrition advice is general canine guidance, not a breed-specific feeding prescription.",
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Feeding frequency depends on age, growth, health, and the chosen diet.",
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal adult feeding frequency was not established.",
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Feeding frequency should be tailored to the individual senior dog.",
    },
    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-toy-fox-terrier",
          role: "verified",
          locator: "Recommended Health Tests from the National Breed Club",
        },
        {
          id: "national-toy-fox-terrier-association-health",
          role: "cited",
          locator: "Health testing guidance and common conditions",
        },
        {
          id: "vcahospitals-toy-fox-terrier",
          role: "cited",
          locator: "Health Concerns",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The listed conditions are health concerns described by the sources, not a statement of individual diagnosis or population prevalence.",
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "national-toy-fox-terrier-association-health",
          role: "verified",
          locator: "Common Conditions",
        },
        {
          id: "vcahospitals-toy-fox-terrier",
          role: "cited",
          locator: "Health Concerns",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Included conditions are described in breed-club or veterinary guidance. Their presence or frequency in an individual dog cannot be inferred from breed alone.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-toy-fox-terrier",
          role: "verified",
          locator: "Recommended Health Tests from the National Breed Club",
        },
        {
          id: "national-toy-fox-terrier-association-health",
          role: "cited",
          locator: "Health Testing Guidance",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Testing recommendations should be confirmed with the breeder, current breed-club guidance, and a veterinarian.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "vcahospitals-toy-fox-terrier",
          role: "cited",
          locator: "Grooming and Care",
        },
      ],
      verifiedOn: null,
      note: "Routine canine dental-care advice.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine ear-care advice.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine skin-care advice.",
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "vcahospitals-toy-fox-terrier",
          role: "cited",
          locator: "Ideal Owner and temperament guidance",
        },
      ],
      verifiedOn: null,
      note: "Suitability descriptions are practical guidance based on breed traits and care requirements, not guarantees.",
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Experience needs vary with the owner and individual dog; no categorical rating is recorded.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Compatibility depends on the individual dog, the children's ages, supervision, and handling.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability depends on the owner's circumstances and the individual dog's activity needs.",
    },
    "suitability.activeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No categorical suitability rating is recorded.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Apartment suitability depends on exercise, training, barking, and the individual dog's needs.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-toy-fox-terrier-standard",
          role: "verified",
          locator: "General appearance, size, and colour",
        },
        {
          id: "vcahospitals-toy-fox-terrier",
          role: "cited",
          locator: "History and training",
        },
      ],
      verifiedOn: "2026-10-26",
      note: null,
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-toy-fox-terrier-standard",
          role: "verified",
          locator: "Size, coat, and colour",
        },
        {
          id: "vcahospitals-toy-fox-terrier",
          role: "cited",
          locator: "History, care, and health",
        },
        {
          id: "american-kennel-club-toy-fox-terrier",
          role: "cited",
          locator: "Recommended health tests",
        },
      ],
      verifiedOn: "2026-10-26",
      note: null,
    },
  },
  updatedOn: "2026-10-26",
};
