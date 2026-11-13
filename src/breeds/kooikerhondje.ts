import type { Breed } from "../schema/breed.types";

export const kooikerhondje: Breed = {
  slug: "kooikerhondje",
  name: "Nederlandse Kooikerhondje",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Kooikerhondje",
    "Dutch Decoy Dog",
    "Kooiker",
  ],

  group: "Retrievers, Flushing Dogs and Water Dogs (Sporting / Utility)",

  origin: {
    country: "The Netherlands",
    region: null,
  },

  images: [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Kooikerhondje_puppy.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Kooikerhondje_puppy.jpg",
      title: "Kooikerhondje puppy.jpg",
      description:
        "A Kooikerhondje puppy, described on the original file page as a Dutch Decoy Dog puppy.",
      creator: "Jeroenzwaan",
      uploader: "Jeroenzwaan",
      capturedOn: "2018-01-10",
      uploadedOn: "2018-01-10",
      width: 4032,
      height: 3024,
      licenseId: "cc0-1.0",
      attribution:
        "Photo by Jeroenzwaan, Wikimedia Commons; dedicated to the public domain under CC0 1.0 (credit appreciated but not required).",
      restrictions: null,
      metadataCheckedOn: "2026-11-12",
    },
  ],

  overview: {
    summary:
      "A small, lively Dutch sporting spaniel with crisp orange-red and white markings, black-tipped 'earring' ears, and a plumed tail, originally bred to lure ducks into decoy traps.",

    description:
      "Nearly square in build and light on its feet, the Nederlandse Kooikerhondje carries a medium-length, close-lying coat with clear orange-red patches over a white base, a well-feathered white-plumed tail, and hanging ears often tipped with black feathering. Cheerful, alert, and affectionate with familiar people yet frequently reserved around strangers, it retains genuine sporting stamina and thrives on daily walks, nose-work, dog sports, and gentle, positive socialization.",

    history:
      "Documented in the Netherlands as far back as the sixteenth century, the breed worked in 'eendenkooien' (duck decoys), trotting quietly near the water and waving its plumed tail to draw curious waterfowl into capture channels. Numbers fell sharply by the mid-twentieth century until Baroness van Hardenbroek van Ammerstol spearheaded a wartime recovery from surviving stock, leading to interim Dutch recognition in 1966 and official recognition in 1971.",

    originalPurpose:
      "Luring ducks into traditional Dutch decoy channels by sparking their curiosity without hunting or retrieving them directly.",

    currentRoles: [
      "Active family and household companion",
      "Agility, obedience, rally, and nose-work competitor",
      "Sporting and outdoor activity partner",
    ],
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "cm",
      male: { min: 37, max: 42 },
      female: { min: 35, max: 40 },
    },

    weight: {
      unit: "kg",
      male: { min: 9, max: 14 },
      female: { min: 9, max: 14 },
    },

    lifespanYears: {
      min: 12,
      max: null,
    },

    coatType:
      "Medium-length, close-fitting coat—straight or slightly wavy—over a well-developed undercoat with moderate feathering.",

    coatLength:
      "Medium length; shorter on the head, front of the legs, and paws, with feathering on the throat, forechest, backs of the legs, and tail.",

    coatColors: [
      "Clear orange-red patches on a white ground (orange-red predominating)",
      "White facial blaze (preferred)",
      "Black feathering at the ear tips ('earrings')",
      "Occasional intermingled black hairs, slight ticking, or a black tail ring",
    ],

    sheddingLevel:
      "Moderate — sheds year-round and seasonally; weekly brushing keeps loose hair manageable.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Small, nearly square sporting build slightly longer than tall",
      "Clear orange-red patches over a white coat with a preferred white facial blaze",
      "Hanging ears often tipped with distinctive black feathering ('earrings')",
      "Well-feathered white-plumed tail carried level with or above the back",
      "Flowing, springy stride with good reach and rear drive",
    ],
  },

  temperament: {
    traits: [
      "Lively, agile, and observant",
      "Self-confident and persistent during work",
      "Friendly and easy-going with familiar people",
      "Often reserved or aloof with strangers",
      "Generally quiet rather than excessively vocal",
      "Sensitive to harsh corrections or chaotic environments",
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 2,
      independence: 3,
      trainability: 4,
      barking: 3,
      energy: 4,
    },
  },

  care: {
    exercise: {
      level:
        "Moderate to high — an active sporting dog suited to daily walks, training games, and agility or scent sports.",
      minutesPerDay: null,
      activities: [
        "Daily walks with time for relaxed sniffing and exploration",
        "Agility, rally, obedience, or nose-work classes",
        "Reward-based recall and puzzle-toy enrichment",
        "Supervised swimming where safe and enjoyed",
      ],
    },

    grooming: {
      level: "Moderate — natural untrimmed coat",
      brushing:
        "Brush thoroughly at least once a week, focusing on ear fringes, leg feathering, and the plumed tail to prevent tangles.",
      bathing:
        "Bathe only as needed with a gentle canine shampoo and dry thoroughly after swimming or wet walks.",
      notes: [
        "Keep the coat natural and untrimmed; avoid heavy scissoring or shaving.",
        "Inspect the hanging ears weekly for wax, moisture, or redness.",
        "Trim nails regularly and brush teeth with dog-safe toothpaste.",
      ],
    },

    training: {
      difficulty:
        "Moderate — intelligent and eager to learn with upbeat, reward-based guidance, though sensitive to harsh handling.",
      tips: [
        "Use short, positive, varied training sessions.",
        "Build recall and loose-lead manners early in low-distraction areas.",
        "Avoid harsh reprimands; reinforce calm confidence around new sights.",
      ],
      socialization:
        "Provide calm, gradual, positive exposure to unfamiliar people, dogs, sounds, and handling from puppyhood without forcing close contact.",
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: [
        "Adapts well to cool and temperate climates with normal household shelter.",
        "Provide shade, ventilation, and fresh water in warm weather, exercising during cooler hours.",
      ],
      aloneTimeTolerance:
        "Moderate when conditioned gradually — prefers regular interaction and should not be routinely left isolated for long stretches.",
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced commercial diet formulated for small-to-medium active dogs according to life stage.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Measure daily portions against body condition score and activity level, counting training treats within daily calories and keeping fresh water available.",

    considerations: [
      "Adjust intake for sporting activity versus quieter periods.",
      "Introduce diet transitions gradually to minimize digestive upset.",
      "Consult a veterinarian for persistent gastrointestinal signs or unexplained weight changes.",
    ],

    note:
      "No fixed meal count or calorie target applies to every Nederlandse Kooikerhondje; tailor portions with veterinary guidance.",
  },

  health: {
    overview:
      "While often hardy and long-lived, the breed has documented inherited conditions that make parental DNA and clinical screening essential. Breed-club health programmes prioritize testing for von Willebrand disease type III (VWDIII), hereditary necrotizing myelopathy (ENM), hereditary eye disease, patellar luxation, and hip dysplasia, while also monitoring polymyositis, epilepsy, and kidney disorders.",

    commonConditions: [
      "Von Willebrand disease type III (VWDIII) — an inherited blood-clotting disorder targeted by DNA screening.",
      "Hereditary necrotizing myelopathy (ENM) — an inherited progressive neurological disorder targeted by DNA screening.",
      "Patellar luxation — intermittent slipping of the kneecap.",
      "Hip dysplasia — developmental hip-joint malformation.",
      "Hereditary eye conditions — including cataracts and distichiasis.",
      "Polymyositis, epilepsy, and kidney disorders — reported in the breed and monitored by breed clubs.",
    ],

    preventiveCare: [
      "Request documented parental VWDIII and ENM DNA clearances alongside eye, patella, and hip evaluations.",
      "Maintain routine veterinary wellness exams, vaccinations, and parasite control.",
      "Seek prompt veterinary care for unexplained bleeding, hind-limb weakness, altered gait, seizures, or eye changes.",
    ],

    recommendedScreenings: [
      "DNA test for von Willebrand disease type III (VWDIII)",
      "DNA test for hereditary necrotizing myelopathy (ENM)",
      "Veterinary ophthalmologist eye examination",
      "Patellar luxation clinical evaluation",
      "Hip dysplasia radiographic evaluation",
    ],

    dentalCare:
      "Brush teeth regularly with dog-safe toothpaste and schedule routine veterinary oral checks.",

    earCare:
      "Inspect the feathered hanging ears weekly for wax, moisture, redness, or odour, cleaning gently only as advised by a veterinarian.",

    skinCare:
      "Check skin and coat during weekly brushing for burrs, ticks, redness, or persistent scratching.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Active owners who enjoy daily walks, dog sports, and positive training",
      "Families with respectful, supervised children who appreciate an alert sporting companion",
      "Handlers prepared to socialize a naturally reserved dog gently",
    ],

    notIdealFor: [
      "Sedentary households seeking a low-exercise lapdog",
      "Homes where the dog would be left alone for long workdays without enrichment",
      "Owners expecting immediate, indiscriminate friendliness toward every stranger",
    ],
  },

  funFacts: [
    "In Dutch, a 'kooiker' is the operator of a duck decoy—and 'hondje' means little dog.",
    "During duck-decoy work, the dog did not chase or retrieve birds; its waving plumed tail simply lured curious ducks down the trap channel.",
    "Baroness van Hardenbroek van Ammerstol helped rescue the breed from near-extinction in the Netherlands during World War II.",
    "The black feathering at the tips of the ears is affectionately known as 'earrings.'",
  ],

  faq: [
    {
      question: "Where does the Nederlandse Kooikerhondje come from?",
      answer:
        "It originated in the Netherlands as a specialized duck-decoy dog whose waving tail lured waterfowl into capture channels.",
    },
    {
      question: "How tall is a Nederlandse Kooikerhondje?",
      answer:
        "Males typically measure 37–42 cm at the withers and females 35–40 cm, though regional breed profiles vary slightly.",
    },
    {
      question: "How much does a Nederlandse Kooikerhondje weigh?",
      answer:
        "Adults typically weigh about 9–14 kg, depending on build and body condition.",
    },
    {
      question: "How long does a Nederlandse Kooikerhondje live?",
      answer:
        "They typically live over 12 years—often around 12–15 years—with good genetics and preventive care.",
    },
    {
      question: "Does a Kooikerhondje need much exercise?",
      answer:
        "Yes—as an active sporting dog, it benefits from daily walks, training games, and activities like agility or nose-work.",
    },
    {
      question: "Is the Kooikerhondje friendly with strangers?",
      answer:
        "They are typically friendly and easy-going with familiar people while often remaining reserved around strangers, making gradual positive socialization helpful.",
    },
    {
      question: "What health tests should I ask a breeder about?",
      answer:
        "Ask for documented DNA test results for von Willebrand disease type III (VWDIII) and hereditary necrotizing myelopathy (ENM), plus eye, patella, and hip evaluations.",
    },
    {
      question: "Can a Kooikerhondje live in an apartment?",
      answer:
        "Yes, provided its daily exercise, mental enrichment, and companionship needs are consistently met.",
    },
  ],

  references: [
    "fci-kooikerhondje-breed-standard",
    "royal-kennel-club-kooikerhondje-standard",
    "american-kennel-club-nederlandse-kooikerhondje",
    "american-kennel-club-kooikerhondje-health-statement",
    "commons-kooikerhondje-puppy-jeroenzwaan",
    "the-dog-api",
  ],

  evidence: {
    scientificName: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Conventional scientific designation for the domestic dog.",
    },
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-kooikerhondje-breed-standard",
          role: "verified",
          locator: "Breed name and nomenclature",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names (Kooikerhondje, Dutch Decoy Dog, Kooiker)",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    group: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-kooikerhondje-breed-standard",
          role: "verified",
          locator: "FCI Group 8",
        },
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "Utility Group",
        },
        {
          id: "american-kennel-club-nederlandse-kooikerhondje",
          role: "verified",
          locator: "Sporting Group",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group: Sporting",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kooikerhondje-breed-standard",
          role: "verified",
          locator: "Country of origin: The Netherlands",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: Netherlands",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Consulted official sources do not establish a narrower geographic region.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "Historical summary, general appearance, temperament, coat, duck-decoy role",
        },
        {
          id: "fci-kooikerhondje-breed-standard",
          role: "cited",
          locator: "Origin and utilization",
        },
        {
          id: "american-kennel-club-nederlandse-kooikerhondje",
          role: "cited",
          locator: "Breed profile and temperament",
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
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "General appearance — small",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "Size — dogs 37–42 cm; bitches 35–40 cm",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.height.metric: 38–43 cm (males), 36–41 cm (females)",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Official standard height (37–42 cm dogs, 35–40 cm bitches) is retained; The Dog API lists 38–43 cm and 36–41 cm.",
    },
    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric: 9–14 kg",
        },
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "cited",
          locator: "Weight not specified in official standard",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Official standards do not specify a numeric weight range; metric range is sourced from The Dog API.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "Lifespan over 12 years",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span: 12–15 years",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "RKC states over 12 years without an upper bound; The Dog API lists 12–15 years.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-kooikerhondje-standard",
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
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "Coat and feathering",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "Colour — orange-red patches on white",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Generic species-wide colours from The Dog API are excluded.",
    },
    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "Breed characteristics — sheds",
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
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "General Appearance, Tail, Coat, Colour, Gait",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "Temperament",
        },
        {
          id: "american-kennel-club-nederlandse-kooikerhondje",
          role: "cited",
          locator: "Breed profile",
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
          id: "american-kennel-club-nederlandse-kooikerhondje",
          role: "cited",
          locator: "Breed profile traits",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1–5 comparison estimates.",
    },
    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-nederlandse-kooikerhondje",
          role: "cited",
          locator: "Exercise, training, grooming, nutrition",
        },
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "cited",
          locator: "Exercise and grooming",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed daily exercise-minute figure was established.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-nederlandse-kooikerhondje",
          role: "cited",
          locator: "Nutrition and general care",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed puppy meal frequency is prescribed.",
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed adult meal frequency is prescribed.",
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed senior meal frequency is prescribed.",
    },
    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-kooikerhondje-health-statement",
          role: "verified",
          locator: "Recommended screening tests and breed health concerns",
        },
        {
          id: "american-kennel-club-nederlandse-kooikerhondje",
          role: "cited",
          locator: "National breed club health testing recommendations",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-kooikerhondje-health-statement",
          role: "cited",
          locator: "Breeding health tests and pedigree advice",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine dental-care guidance.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-nederlandse-kooikerhondje",
          role: "cited",
          locator: "Grooming — ear checks",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General coat and skin-care advice.",
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-nederlandse-kooikerhondje",
          role: "cited",
          locator: "Activity and temperament description",
        },
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "cited",
          locator: "Size, exercise, and home guidance",
        },
      ],
      verifiedOn: null,
      note: "Editorial suitability assessments.",
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal first-time-owner suitability rating is assigned.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal senior-owner suitability rating is assigned.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "Historical summary and tail/ear description",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "Size, lifespan, history, and temperament",
        },
        {
          id: "american-kennel-club-kooikerhondje-health-statement",
          role: "cited",
          locator: "Health-screening recommendations",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
  },

  updatedOn: "2026-11-12",
};
