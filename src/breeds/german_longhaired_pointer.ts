import type { Breed } from "../schema/breed.types";

export const german_longhaired_pointer: Breed = {
  slug: "german-longhaired-pointer",
  name: "German Longhaired Pointer",
  scientificName: null,

  alternateNames: [
    "Deutsch Langhaar",
    "German Long-haired Pointing Dog",
    "German Longhaired Pointing Dog",
    "German Longhair",
    "GLP",
  ],

  group:
    "Pointing Dogs; Continental Pointing Dogs, Spaniel type (working trial required)",

  origin: {
    country: "Germany",
    region: "Developed across Germany as a versatile long-coated hunting gundog",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/German_Longhaired_Pointer.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:German_Longhaired_Pointer.jpg",
      title: "German Longhaired Pointer.jpg",
      description: "A German Longhaired Pointer photographed outdoors.",
      creator: "NLVince91",
      uploader: "NLVince91",
      capturedOn: "2021-05-20",
      uploadedOn: "2021-11-01",
      width: 12000,
      height: 9000,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by NLVince91, via Wikimedia Commons, licensed under CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:German_Longhaired_Pointer.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Provide appropriate credit, link to the license, indicate changes, and comply with the applicable share-alike terms for adaptations.",
      restrictions: null,
      metadataCheckedOn: "2026-11-12",
    },
  ],

  overview: {
    summary:
      "An athletic, medium-to-large German gundog bred to locate, point, and retrieve game across open fields, dense woods, and water, pairing a steady temperament with high endurance.",

    description:
      "Combining muscular substance with clean, ground-covering movement, the German Longhaired Pointer features expressive brown eyes, broad drop ears, and a close-fitting double coat accented by wavy feathering along the ears, legs, and plumed tail. Rather than specializing in a single hunting task, it was shaped as an all-terrain field partner and thrives in active homes that provide vigorous daily exercise, scent-driven enrichment, and consistent, positive training.",

    history:
      "Evolving in Germany from historic bird dogs, hawk dogs, water dogs, and scenting hounds, the breed entered organized purebred breeding in 1879. In 1897, Baron von Schorlemer drafted the foundational written description that guided modern selection, cementing its role as a versatile pointing and retrieving gundog across land and water.",

    originalPurpose:
      "Versatile gundog work: searching, pointing, and retrieving game in fields, woodland, and water.",

    currentRoles: [
      "All-around field hunting, pointing, and retrieving partner",
      "Scent-work, tracking, and endurance dog-sport competitor",
      "Active family companion in high-activity households",
    ],
  },

  physical: {
    sizeCategory: "Medium to large",

    height: {
      unit: "cm",
      male: { min: 60, max: 70 },
      female: { min: 58, max: 66 },
    },

    weight: {
      unit: "kg",
      male: { min: 25, max: 36 },
      female: { min: 20, max: 32 },
    },

    lifespanYears: {
      min: 10,
      max: 14,
    },

    coatType:
      "Dense, weather-resistant double coat with a firm, flat or slightly wavy outer layer over a thick undercoat.",

    coatLength:
      "Typically 3–5 cm along the back and sides, lengthening under the neck, chest, and belly with feathering on the ears, backs of the legs, and tail.",

    coatColors: [
      "Solid brown",
      "Brown with white or speckled markings on the chest and feet",
      "Dark roan with dark-brown patches",
      "Pale roan with pale-brown patches",
      "Mottled roan with small brown flecks on a white base",
      "Brown and white with large patches or blanket markings",
    ],

    sheddingLevel:
      "Moderate — sheds year-round and seasonally, requiring regular brushing to manage dead undercoat and tangles.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Substantial, muscular frame engineered for sustained field stamina",
      "Drop ears framed by wavy feathering and medium-brown eyes",
      "Close-lying double coat with functional feathering on the legs and a plumed tail",
      "Brown, brown-and-white, and roan coat patterns without black pigmentation",
      "Powerful hindquarters delivering smooth, ground-covering stride",
    ],
  },

  temperament: {
    traits: [
      "Calm and even-tempered at home",
      "Good-natured and eager to cooperate with its handler",
      "Alert, attentive, and people-oriented",
      "High-energy with strong natural searching and pointing instincts",
      "Restless if under-exercised or bored",
    ],

    scores: {
      affection: 4,
      withChildren: null,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 3,
      independence: 3,
      trainability: 4,
      barking: null,
      energy: 5,
    },
  },

  care: {
    exercise: {
      level:
        "Very high — a working gundog requiring over two hours of daily physical activity and mental engagement.",
      minutesPerDay: { min: 120, max: null },
      activities: [
        "Extended brisk walks and trail hikes suited to fitness",
        "Structured retrieving, field search games, and nose-work",
        "Supervised swimming in safe water",
        "Reward-based obedience, agility, or tracking sports",
      ],
    },

    grooming: {
      level: "Moderate — increases after heavy brush or water work",
      brushing:
        "Brush several times weekly, paying close attention to ear feathering, leg fringes, and tail plumes to prevent mats and remove burrs.",
      bathing:
        "Bathe as needed with a gentle canine shampoo, rinsing thoroughly and drying the dense undercoat completely.",
      notes: [
        "Inspect the hanging ears weekly for moisture, wax, burrs, or redness.",
        "Check between toes and through leg feathering for seeds and debris after field outings.",
        "Avoid routine clipping or shaving, which can alter the protective double coat.",
      ],
    },

    training: {
      difficulty:
        "Moderate — biddable and quick to learn, yet requires steady consistency to channel strong hunting drive.",
      tips: [
        "Use clear, reward-based methods; harsh corrections can unsettle sensitive individuals.",
        "Proof recall progressively in low-distraction areas before trusting off-leash freedom near wildlife.",
        "Incorporate retrieving and scent games to satisfy natural pointing instincts.",
      ],
      socialization:
        "Provide calm, positive exposure to varied people, unfamiliar dogs, and novel environments from puppyhood.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,
      climates: [
        "Provide shade, ventilation, and fresh water during warm weather.",
        "Schedule vigorous field exercise for cooler hours in hot, humid conditions.",
        "A securely fenced yard is helpful, though it does not replace structured daily exercise.",
      ],
      aloneTimeTolerance:
        "Low to moderate — thrives on regular human partnership and should not be routinely left isolated for long stretches.",
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced diet formulated for medium-to-large, active dogs according to life stage.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Measure daily portions against body condition score and actual field workload, keeping fresh water accessible at all times.",

    considerations: [
      "Adjust caloric intake between heavy hunting or sporting seasons and quieter periods.",
      "Avoid vigorous exercise immediately before or after large meals in deep-chested dogs.",
      "Introduce food transitions gradually and consult a veterinarian for persistent digestive or skin issues.",
    ],

    note:
      "No universal meal frequency or fixed gram ration applies to every German Longhaired Pointer; tailor portions with veterinary guidance.",
  },

  health: {
    overview:
      "Breed-club health programmes prioritize pre-breeding hip scoring, eye examinations including gonioscopy for goniodysgenesis, and cardiac checks, alongside DNA testing for the E locus and genetic markers linked to familial thyroid follicular cell carcinoma (FTFC). These represent screening priorities rather than a guarantee of disease; club records note no confirmed UK FTFC cases at the time of review, while cases have been documented in continental Europe.",

    commonConditions: [],

    preventiveCare: [
      "Request documented parental health-screening results before selecting a puppy.",
      "Maintain routine veterinary wellness checks, vaccinations, and parasite prevention.",
      "Keep the dog lean and well-conditioned, seeking veterinary care promptly for vision changes, lameness, or stamina decline.",
    ],

    recommendedScreenings: [
      "Hip dysplasia radiographic scoring for breeding stock",
      "Veterinary eye examination including gonioscopy for goniodysgenesis",
      "Pre-breeding veterinary cardiac examination",
      "E-locus coat-colour DNA test",
      "DNA testing for familial thyroid follicular cell carcinoma (FTFC)-associated markers where regionally recommended",
    ],

    dentalCare:
      "Brush teeth several times a week with canine toothpaste and arrange periodic veterinary oral exams.",

    earCare:
      "Inspect the feathered drop ears regularly after field and water work, seeking veterinary care for odour, discharge, or head-shaking.",

    skinCare:
      "Check the skin beneath the dense coat during brushing for ticks, grass awns, abrasions, or persistent irritation.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Very active households ready to provide over two hours of daily exercise and mental work",
      "Handlers interested in gundog sports, retrieving, scent trailing, or long trail hikes",
      "Owners committed to regular coat, feathering, and ear maintenance",
    ],

    notIdealFor: [
      "Sedentary households or owners seeking a low-exercise companion",
      "Homes where the dog would be left alone for long workdays without enrichment",
      "Handlers expecting effortless off-leash reliability around birds or wildlife without structured training",
    ],
  },

  funFacts: [
    "In its homeland, the breed is known as Deutsch Langhaar.",
    "Purebred breeding began in 1879, with an early written breed description drafted by Baron von Schorlemer in 1897.",
    "Unlike many gundogs specialized for a single task, it was developed to work equally across fields, woodland, and water.",
    "Black coat pigmentation is excluded; traditional colours center on rich browns, roans, and brown-and-white patterns.",
  ],

  faq: [
    {
      question: "What was the German Longhaired Pointer bred to do?",
      answer:
        "It was developed as a versatile hunting gundog capable of searching, pointing, and retrieving game across open fields, forests, and water.",
    },
    {
      question: "How tall and heavy is a German Longhaired Pointer?",
      answer:
        "Males typically measure 60–70 cm at the withers and females 58–66 cm, with narrower preferred heights (63–66 cm for males and 60–63 cm for females); adult weights average around 30 kg, ranging roughly 25–36 kg for males and 20–32 kg for females.",
    },
    {
      question: "How much exercise does the breed need?",
      answer:
        "Adult dogs typically need more than two hours of daily physical and mental activity, adjusted for age, health, fitness, and workload.",
    },
    {
      question: "What grooming does the coat require?",
      answer:
        "Brush several times a week and inspect the feathered ears, legs, and tail for tangles and burrs after outdoor outings, alongside routine nail and dental care.",
    },
    {
      question: "Which health tests should I ask a breeder about?",
      answer:
        "Ask for documented hip scoring, an eye exam including gonioscopy, a cardiac check, and recommended DNA tests such as E-locus and FTFC markers.",
    },
    {
      question: "Is a German Longhaired Pointer suited to apartment living?",
      answer:
        "Published sources do not establish a universal yes-or-no rule; meeting its high daily exercise and enrichment needs can be challenging in an apartment without dedicated outdoor routines.",
    },
  ],

  references: [
    "fci-german-longhaired-pointer-standard-117",
    "american-kennel-club-german-longhaired-pointer",
    "german-longhaired-pointer-club-uk-characteristics-standard",
    "german-longhaired-pointer-club-uk-health-testing",
    "royal-kennel-club-german-longhaired-pointer",
    "commons-german-longhaired-pointer-nlvince91",
    "the-dog-api",
  ],

  evidence: {
    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "Title — Deutsch Langhaar",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names (Deutsch Langhaar, GLP)",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
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
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "Classification — Group 7, Section 1.2, with working trial",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "Origin and Brief Historical Summary",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: Germany",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "Utilization, Brief Historical Summary, General Appearance, Coat, Temperament",
        },
        {
          id: "german-longhaired-pointer-club-uk-characteristics-standard",
          role: "verified",
          locator: "Breed overview, temperament, and exercise",
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
          id: "american-kennel-club-german-longhaired-pointer",
          role: "verified",
          locator: "Breed profile — height and weight overview",
        },
        {
          id: "german-longhaired-pointer-club-uk-characteristics-standard",
          role: "verified",
          locator: "General appearance",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "Size and Weight — 60–70 cm (males), 58–66 cm (females)",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.height.metric: 61–71 cm (males), 58–66 cm (females)",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Official standard height (60–70 cm males, 58–66 cm females) is retained; The Dog API lists 61–71 cm for males.",
    },
    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric: 25–36 kg (males), 20–32 kg (females)",
        },
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "cited",
          locator: "Size and Weight — average weight approx. 30 kg",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Sex-specific weight ranges are sourced from The Dog API; the official standard states an average weight of 30 kg without a sex-specific range.",
    },
    "physical.lifespanYears": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-german-longhaired-pointer",
          role: "cited",
          locator: "Life expectancy: 12–14 years",
        },
        {
          id: "german-longhaired-pointer-club-uk-characteristics-standard",
          role: "conflicting",
          locator: "Average lifespan: 10–12 years",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span: 12–14 years",
        },
      ],
      verifiedOn: null,
      note: "Stored 10–14 year span reflects the outer bounds of cited kennel-club and breed-club estimates.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "Coat — smooth or slightly wavy, close-fitting outer coat and dense undercoat",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "Coat — 3–5 cm on back and sides, longer feathering",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "Colour",
        },
        {
          id: "german-longhaired-pointer-club-uk-characteristics-standard",
          role: "verified",
          locator: "Colour section",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Generic species-wide colours from The Dog API are excluded.",
    },
    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-german-longhaired-pointer",
          role: "verified",
          locator: "Breed characteristics — sheds and grooming more than once a week",
        },
        {
          id: "american-kennel-club-german-longhaired-pointer",
          role: "verified",
          locator: "Grooming",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling level was established in reviewed sources.",
    },
    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "General Appearance, Ears, Coat, Tail, Gait",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "Behaviour / Temperament",
        },
        {
          id: "german-longhaired-pointer-club-uk-characteristics-standard",
          role: "verified",
          locator: "Temperament and characteristics",
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
          id: "fci-german-longhaired-pointer-standard-117",
          role: "cited",
          locator: "Behaviour / Temperament",
        },
        {
          id: "american-kennel-club-german-longhaired-pointer",
          role: "cited",
          locator: "Breed traits",
        },
        {
          id: "german-longhaired-pointer-club-uk-characteristics-standard",
          role: "cited",
          locator: "Temperament, trainability, and exercise",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1–5 estimates based on published temperament descriptions.",
    },
    "temperament.scores.withChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-wide numeric score for behaviour with children was established.",
    },
    "temperament.scores.barking": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-wide numeric barking score was established.",
    },
    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-german-longhaired-pointer",
          role: "verified",
          locator: "More than 2 hours of exercise per day",
        },
        {
          id: "american-kennel-club-german-longhaired-pointer",
          role: "verified",
          locator: "Exercise and working-dog needs",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-german-longhaired-pointer",
          role: "verified",
          locator: "Grooming",
        },
        {
          id: "royal-kennel-club-german-longhaired-pointer",
          role: "verified",
          locator: "Grooming more than once a week",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-german-longhaired-pointer",
          role: "verified",
          locator: "Training and exercise",
        },
        {
          id: "german-longhaired-pointer-club-uk-characteristics-standard",
          role: "verified",
          locator: "Trainability and sensitivity",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "care.livingEnvironment": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine welfare guidance adapted for an active working breed.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Reviewed sources do not establish a universal apartment-suitability rating.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine nutrition guidance; no breed-specific calorie prescription is asserted.",
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific puppy meal schedule was established.",
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific adult meal schedule was established.",
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific senior meal schedule was established.",
    },
    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "german-longhaired-pointer-club-uk-health-testing",
          role: "verified",
          locator: "Hip scoring, gonioscopy, heart checks, E-locus, and FTFC DNA testing",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Distinguishes screening priorities from breed-wide disease prevalence.",
    },
    "health.commonConditions": {
      reliability: "unavailable",
      sources: [
        {
          id: "german-longhaired-pointer-club-uk-health-testing",
          role: "cited",
          locator: "Screening targets listed separately; population-level prevalence not established",
        },
      ],
      verifiedOn: null,
      note: "No reliable breed-wide common-conditions prevalence list was established.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive veterinary guidance informed by breed-club screening priorities.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "german-longhaired-pointer-club-uk-health-testing",
          role: "verified",
          locator: "Required and strongly recommended breeding tests",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine canine dental care guidance.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine ear care guidance for feathered drop ears.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine skin and coat monitoring guidance.",
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "german-longhaired-pointer-club-uk-characteristics-standard",
          role: "cited",
          locator: "Exercise, space, and working-dog temperament",
        },
        {
          id: "royal-kennel-club-german-longhaired-pointer",
          role: "cited",
          locator: "Exercise, home, and garden recommendations",
        },
      ],
      verifiedOn: null,
      note: "Editorial suitability assessment based on exercise and working-dog demands.",
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability for first-time owners depends on individual support, training commitment, and activity capacity.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal rating for families with children is established.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal rating for senior owners is established.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal apartment-living rating is established.",
    },
    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "Title, Brief Historical Summary, and Colour",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "Origin, historical summary, height, average weight, coat",
        },
        {
          id: "american-kennel-club-german-longhaired-pointer",
          role: "verified",
          locator: "Grooming and exercise",
        },
        {
          id: "german-longhaired-pointer-club-uk-health-testing",
          role: "verified",
          locator: "Health testing recommendations",
        },
        {
          id: "royal-kennel-club-german-longhaired-pointer",
          role: "verified",
          locator: "Exercise requirements",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
  },

  updatedOn: "2026-11-12",
};
