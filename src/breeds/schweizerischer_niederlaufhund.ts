import type { Breed } from "../schema/breed.types";

export const schweizerischer_niederlaufhund: Breed = {
  slug: "schweizerischer-niederlaufhund",
  name: "Schweizerischer Niederlaufhund",
  scientificName: null,

  alternateNames: [
    "Small Swiss Hound",
    "Swiss Short-Legged Hound",
    "Petit Chien Courant Suisse",
    "Sabueso Suizo Pequeño",
  ],

  group:
    "FCI Group 6 — Scent hounds and related breeds; Section 1.3 — Small-sized Hounds; with working trial",

  origin: {
    country: "Switzerland",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/08115491_Schwyzer_Niederlaufhund.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:08115491_Schwyzer_Niederlaufhund.jpg",
      title: "08115491 Schwyzer Niederlaufhund.jpg",
      description:
        "A Schwyzer Niederlaufhund, representing one of the four recognised varieties of the Small Swiss Hound.",
      creator: "Alephalpha",
      uploader: "Alephalpha",
      capturedOn: "2008-11-03",
      uploadedOn: "2008-11-04",
      width: 800,
      height: 600,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Alephalpha, “08115491 Schwyzer Niederlaufhund.jpg,” via Wikimedia Commons, licensed under CC BY-SA 3.0 Unported. https://commons.wikimedia.org/wiki/File:08115491_Schwyzer_Niederlaufhund.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. No changes made.",
      restrictions: null,
      metadataCheckedOn: "2026-11-16",
    },
  ],

  overview: {
    summary:
      "The Schweizerischer Niederlaufhund, or Small Swiss Hound, is a short-legged Swiss scent hound developed around 1900 for hunting in confined districts. Built with a rectangular body, long folded ears, and a keen nose, it pairs tireless trailing determination and a resonant hunting voice with a friendly, steady home temperament. Its four traditional regional colour varieties are now united within a single breed.",

    description:
      "Compact, muscular, and longer than tall, this short-legged hound is designed for deliberate, sure-footed scent work rather than high speed. A noble head carries very long, low-set, folded ears that hang close to the cheeks, while a medium-length tail hangs relaxed at rest and rises slightly in action. Occurring in smooth, rough, and double-coated varieties across four historic Swiss colour patterns (and their combinations), the breed is affectionate and composed indoors but requires secure lead management, patient training, and regular scent-work outlets outdoors.",

    history:
      "At the turn of the twentieth century, several Swiss cantons shifted from broad canton-wide hunting permits to smaller district hunting territories. Because full-sized Swiss Hounds were too fast and wide-ranging for these smaller zones, breeders selectively crossed smaller hounds to create a lower-set, slower-trailing scent hound. A dedicated breed club was established on 1 June 1905, international recognition followed in 1954, and a 2015 standard revision united the four historic regional varieties—Bernese, Jura, Lucerne, and Schwyz—into one breed to strengthen genetic diversity.",

    originalPurpose:
      "Independent scent hunting in smaller hunting districts, driving game with a melodic voice and tracking wounded game.",

    currentRoles: [
      "Vocal scent hunting and game driving",
      "Blood-trailing and tracking wounded game",
      "Mantrailing and recreational nose-work sports",
      "Active outdoor companion on leashed hikes",
      "Conformation showing",
    ],
  },

  physical: {
    sizeCategory: "Small-sized, short-legged scent hound",

    height: {
      unit: "cm",
      male: { min: 35, max: 43 },
      female: { min: 33, max: 40 },
    },

    weight: {
      unit: "kg",
      male: { min: 15, max: 20 },
      female: { min: 15, max: 15 },
    },

    lifespanYears: { min: 14, max: 16 },

    coatType:
      "Three recognised coat varieties: smooth (short), rough (wire-haired), and double coat (stockhaar).",

    coatLength:
      "Smooth coats are short, sleek, and tight-fitting; rough coats are harsh, springy, and close-fitting with a light beard; double coats pair a dense, straight topcoat with a thick undercoat.",

    coatColors: [
      "White and black with tan markings (Small Bernese variety)",
      "Black with tan markings (Small Jura variety)",
      "Blue-speckled roan with a black mantle (Small Lucerne variety)",
      "White with orange-red markings or mantle (Small Schwyz variety)",
      "Mixed combinations of the four traditional variety colours",
    ],

    sheddingLevel: null,

    droolingLevel: null,

    distinctiveFeatures: [
      "Short-legged, moderately elongated rectangular body",
      "Dry, straight, well-boned limbs",
      "Very long, low-set ears hanging in graceful folds close to the cheeks",
      "Ear length reaching at least to the tip of the nose",
      "Noble head with a friendly, alert expression",
      "Medium-length tail hanging at rest and rising slightly in motion, never curled over the back",
      "Smooth, rough, and double-coat textures",
      "Four traditional Swiss regional colour patterns and their combinations",
    ],
  },

  temperament: {
    traits: [
      "Friendly and affectionate",
      "Calm indoors, lively outdoors",
      "Passionate, determined scent hunter",
      "Persistent and vocal on a trail",
      "Untiring in rough terrain",
      "Independent when searching for game",
      "Quick to learn from experience",
      "Sensitive to harsh or impatient handling",
      "Steady, neither timid nor aggressive",
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 4,
      protectiveness: 2,
      independence: 4,
      trainability: 3,
      barking: 4,
      energy: 5,
    },
  },

  care: {
    exercise: {
      level:
        "High for a healthy adult. This working scent hound needs daily outdoor walks paired with mantrailing, tracking, or nose-work games scaled to age and health.",

      minutesPerDay: null,

      activities: [
        "Extended daily walks in varied terrain (primarily on lead or long line)",
        "Supervised scent-tracking and blood-trailing exercises",
        "Mantrailing and recreational nose work",
        "Controlled search and food-trail games",
        "Reward-based recall and obedience practice",
        "Low-pressure, low-jump agility exercises",
      ],
    },

    grooming: {
      level:
        "Low to moderate. Routine coat brushing is simple, while the very long, folded ears require regular inspection.",

      brushing:
        "Brush weekly according to coat variety to lift loose hair and dirt while checking the skin.",

      bathing:
        "Bathe only when soiled using a gentle canine shampoo, rinsing thoroughly and drying the coat and ear flaps completely.",

      notes: [
        "Inspect the long, folded ears weekly because they cover the ear canals.",
        "Keep ears clean and dry, consulting a veterinarian for redness, odour, discharge, or head shaking.",
        "Adjust brushing tools to smooth, rough, or double coat texture.",
        "Trim nails regularly and inspect paw pads after woodland walks.",
        "Brush teeth routinely with dog-safe toothpaste.",
      ],
    },

    training: {
      difficulty:
        "Moderate to challenging for novice hound owners. Quick to learn yet independent on a scent trail, it responds best to calm, empathetic, reward-based training.",

      tips: [
        "Use calm, patient, reward-based methods; harshness quickly backfires with this sensitive hound.",
        "Keep sessions purposeful and meaningful—hounds resist repetitive drills that lack clear purpose.",
        "Start intensive recall conditioning early in puppyhood to encourage checking in and shorter-range searching.",
        "Use a lead or long line in unfenced areas where wildlife scent could trigger a chase.",
        "Provide regular mantrailing or tracking games as an outlet during non-hunting months.",
        "Practice cooperative handling for ear checks, nail trims, and veterinary exams.",
      ],

      socialization:
        "Introduce puppies gradually and positively to varied people, calm dogs, household noises, and outdoor settings, rewarding relaxed behaviour and continuing recall and lead practice into adulthood.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: null,

      climates: [
        "Temperate climates with comfortable indoor shelter",
        "Warm weather with shade, fresh water, and cooler-hour walks",
        "Cool or alpine weather with dry shelter after outings",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "Complete, balanced dog food tailored to life stage, body condition, activity level, and veterinary needs.",

    feedingFrequency: {
      puppy:
        "Feed a complete puppy formula in multiple age-appropriate meals daily, adjusting portions as the puppy grows.",

      adult:
        "Feed measured meals on a consistent schedule, adjusting portions to keep a lean waist across hunting and rest seasons.",

      senior:
        "Adjust food profile and portions to age, mobility, and veterinary advice.",
    },

    guidelines:
      "Measure meals and monitor body condition regularly to prevent excess weight on a long-backed, short-legged frame. Include training rewards in daily calorie totals and keep fresh water available at all times.",

    considerations: [
      "Keep weight lean to protect the spine and joints.",
      "Scale food intake between active tracking seasons and quieter months.",
      "Count high-value tracking treats within daily calories.",
      "Provide fresh water throughout the day.",
      "Consult a veterinarian for persistent digestive or weight changes.",
    ],

    note:
      "General canine nutrition guidance; individual portions depend on age, calorie density, workload, and health.",
  },

  health: {
    overview:
      "Generally a robust and long-lived breed, the Schweizerischer Niederlaufhund has two primary considerations noted in Swiss kennel-club guidance: its long, low-set ears cover the ear canals and can predispose dogs to ear-canal irritation if not kept clean, and its historically narrow gene pool makes careful breeding selection essential (a reason the four colour varieties were merged in 2015). Other recurring breed-specific hereditary diseases have not been established.",

    commonConditions: [
      "Ear-canal irritation or otitis externa, as the very long, folded ears cover the ear canals and reduce airflow.",
    ],

    preventiveCare: [
      "Schedule routine veterinary wellness exams and keep vaccinations and parasite prevention current.",
      "Check the long, folded ears regularly and keep them clean and dry.",
      "Seek prompt veterinary care for ear redness, odour, discharge, or head shaking.",
      "Maintain a lean body weight and steady physical conditioning.",
      "Ask breeders about longevity and genetic diversity in their lines.",
    ],

    recommendedScreenings: [],

    dentalCare:
      "Brush teeth regularly with dog-safe toothpaste and have teeth checked at routine veterinary visits.",

    earCare:
      "Inspect the long, folded ears weekly for redness, odour, discharge, or scratching. Clean gently only as advised by a veterinarian and never insert swabs into the ear canal.",

    skinCare:
      "Check skin during brushing for ticks, burrs, redness, or irritation after forest walks.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Active owners who enjoy long nature walks and outdoor exploration",
      "Hunters or handlers interested in mantrailing, tracking, and scent work",
      "Patient handlers who use calm, empathetic, reward-based training",
      "Families seeking an affectionate, friendly medium-small hound",
      "Owners diligent about routine ear checks and lead management",
    ],

    notIdealFor: [
      "Sedentary households wanting a low-energy companion",
      "Owners expecting effortless off-lead recall in open wildlife areas",
      "Handlers who use harsh or impatient training methods",
      "Homes where a resonant hound voice would cause conflict",
    ],
  },

  funFacts: [
    "Developed around 1900 when Swiss cantons introduced smaller district hunting zones where full-sized Swiss Hounds ranged too far.",
    "Its dedicated Swiss breed club was founded on 1 June 1905, originally as the Schweizerischer Dachsbracken-Club.",
    "Recognised internationally in 1954 as four separate colour breeds, the Bernese, Jura, Lucerne, and Schwyz varieties were united into a single breed in 2015.",
    "Unlike the smooth-coated full-sized Swiss Hound, the Small Swiss Hound comes in smooth, rough (bearded), and double-coated types.",
    "Its compact size and friendly nature make it a popular mantrailing partner during non-hunting months.",
  ],

  faq: [
    {
      question: "Where does the Schweizerischer Niederlaufhund come from?",
      answer:
        "It comes from Switzerland, where it was bred around 1900 as a slower, short-legged scent hound suited to smaller canton hunting districts.",
    },
    {
      question: "Is the Schweizerischer Niederlaufhund the same as the Swiss Hound?",
      answer:
        "No. The Schweizerischer Niederlaufhund is the Small Swiss Hound, a distinct short-legged breed with its own standard, whereas the Schweizer Laufhund is the taller, medium-sized Swiss Hound.",
    },
    {
      question: "What are the four varieties of the Small Swiss Hound?",
      answer:
        "The four traditional varieties are Bernese (tricolour white, black, and tan), Jura (black and tan), Lucerne (blue-speckled roan with black patches), and Schwyz (white and orange-red), now combined into one breed along with mixed colour combinations.",
    },
    {
      question: "How tall is a Schweizerischer Niederlaufhund?",
      answer:
        "Adult males measure 35–43 cm at the withers and adult females measure 33–40 cm, with a tolerance of ±2 cm.",
    },
    {
      question: "How much does a Schweizerischer Niederlaufhund weigh?",
      answer:
        "Adult weight is typically around 15 to 20 kg, with females reaching up to about 15 kg and males up to about 20 kg.",
    },
    {
      question: "What is the temperament of the Small Swiss Hound?",
      answer:
        "Friendly, sensitive, and affectionate at home with a calm-to-lively temperament, it is also a passionate, independent, and vocal scent hunter outdoors.",
    },
    {
      question: "How much exercise does this breed need?",
      answer:
        "It needs daily outdoor walks plus regular scent-based work such as mantrailing, tracking, or nose-work games to satisfy its hunting drive.",
    },
    {
      question: "Does the Schweizerischer Niederlaufhund need much grooming?",
      answer:
        "Coat care is straightforward across smooth, rough, and double coats, but the very long, folded ears need weekly checks to keep the ear canals clean and dry.",
    },
    {
      question: "Are there any known health concerns?",
      answer:
        "It is generally robust and long-lived, though its long folded ears require regular care to prevent ear-canal irritation, and breeders select pairings carefully to maintain genetic diversity.",
    },
    {
      question: "How long does a Schweizerischer Niederlaufhund live?",
      answer:
        "Expected lifespan is typically 14–16 years with proper nutrition and care.",
    },
  ],

  references: [
    "fci-schweizer-niederlaufhund-standard-60",
    "fci-schweizer-niederlaufhund-nomenclature-60",
    "skg-schweizer-niederlaufhund-profile-2024",
    "wikimedia-schwyzer-niederlaufhund-photo",
    "the-dog-api",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-schweizer-niederlaufhund-nomenclature-60",
          role: "verified",
          locator: "Breed nomenclature: German, English, French, and Spanish breed names",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Follows official German, English, French, and Spanish breed names.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Reviewed standards and profiles do not establish a separate scientific name.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schweizer-niederlaufhund-standard-60",
          role: "verified",
          locator: "FCI classification: Group 6, Section 1.3, with working trial",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Follows FCI classification; The Dog API lists Scenthound.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schweizer-niederlaufhund-standard-60",
          role: "verified",
          locator: "Origin: Switzerland",
        },
        {
          id: "fci-schweizer-niederlaufhund-nomenclature-60",
          role: "verified",
          locator: "Country of origin of the breed",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-16",
      note: null,
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Sources identify Switzerland as the country of origin without specifying a single region.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-schweizer-niederlaufhund-standard-60",
          role: "verified",
          locator: "Utilization, historical summary, general appearance and behaviour/temperament",
        },
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "verified",
          locator: "Breed history, purpose, varieties and current scent-work activities",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "All user-facing prose is newly written original wording summarizing official standards and Swiss kennel-club material.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schweizer-niederlaufhund-standard-60",
          role: "verified",
          locator: "General appearance, ears, tail, coat types, colours and size",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Physical characteristics and coat varieties follow FCI Standard No. 60 rather than The Dog API's generic colour list.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schweizer-niederlaufhund-standard-60",
          role: "verified",
          locator: "Size: males 35–43 cm, females 33–40 cm; tolerance ±2 cm",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Retains FCI sex-specific height ranges (35–43 cm male, 33–40 cm female); The Dog API combines them into 33–43 cm without separating sexes.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "verified",
          locator: "Approximate upper weights: females up to about 15 kg and males up to about 20 kg",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (15–18 kg)",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Combines the 15 kg lower bound from The Dog API with the SKG Swiss breed profile's upper bounds (up to ~20 kg for males and ~15 kg for females; The Dog API gives a combined 15–18 kg range).",
    },

    "physical.weight.male.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "verified",
          locator: "Males up to about 20 kg",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Approximate upper weight for males from the SKG profile.",
    },

    "physical.weight.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "verified",
          locator: "Females up to about 15 kg",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Approximate upper weight for females from the SKG profile.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "verified",
          locator: "Expected lifespan of 14–16 years with suitable care and nutrition",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span (12–14 years)",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "14–16 years is reported by the SKG Swiss breed profile (The Dog API lists 12–14 years).",
    },

    "physical.sheddingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Consulted sources describe coat types without establishing a specific shedding rating.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling assessment was found.",
    },

    temperament: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schweizer-niederlaufhund-standard-60",
          role: "verified",
          locator: "Behaviour and temperament",
        },
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "verified",
          locator: "Character and temperament",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Breed-level temperament descriptions; individual dogs vary.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-schweizer-niederlaufhund-standard-60",
          role: "cited",
          locator: "Behaviour and temperament",
        },
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "cited",
          locator: "Character, hunting drive and family compatibility",
        },
      ],
      verifiedOn: null,
      note: "Editorial estimates on a 1–5 scale, not standardized test results.",
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "cited",
          locator: "Exercise, scent work, ear care and training guidance",
        },
      ],
      verifiedOn: null,
      note: "Care recommendations combine breed-informed activity suggestions with general care guidance.",
    },

    "care.exercise.level": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-schweizer-niederlaufhund-standard-60",
          role: "cited",
          locator: "Utilization and behaviour: persistent scent hunting and tracking work",
        },
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "cited",
          locator: "Hunting activity, tracking and outdoor exercise",
        },
      ],
      verifiedOn: null,
      note: "Editorial activity-level assessment for a healthy adult.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Reviewed sources do not prescribe a single daily exercise duration.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-schweizer-niederlaufhund-standard-60",
          role: "verified",
          locator: "Coat section: smooth, rough and double-coat types",
        },
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "verified",
          locator: "Normal coat care and particular attention to the ears",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Coat descriptions and ear-care emphasis are source-backed.",
    },

    "care.training": {
      reliability: "general_guidance",
      sources: [
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "cited",
          locator: "Calm, consistent and patient handling; harshness is counterproductive",
        },
      ],
      verifiedOn: null,
      note: "Breed-informed training guidance.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Reviewed sources do not establish a universal apartment-suitability rating.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Reviewed sources do not establish a universal house-with-yard rating.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-wide alone-time rating was established.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine nutrition guidance.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "verified",
          locator: "Breeding population, ear-related concern and health overview",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Reflects ear-care and genetic-diversity points noted in the SKG profile.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "verified",
          locator: "Long ears cover the ear canals and may increase the risk of recurring ear trouble",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Describes a conformational ear-care consideration rather than a universal disease.",
    },

    "health.recommendedScreenings": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Reviewed sources do not establish a formal breed-specific screening panel.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive veterinary care guidance with attention to ear checks.",
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
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "cited",
          locator: "Particular attention to ear care due to long, low-set ears",
        },
      ],
      verifiedOn: null,
      note: "Extra ear attention is breed-specific; cleaning methods follow general veterinary guidance.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine skin-care guidance.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "cited",
          locator: "Family compatibility, hunting purpose and activity requirements",
        },
      ],
      verifiedOn: null,
      note: "Editorial lifestyle guidance based on working drive and temperament.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal first-time-owner rating is established.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability for senior owners depends on individual activity and handling context.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal apartment-living rating was established.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-schweizer-niederlaufhund-standard-60",
          role: "verified",
          locator: "Historical summary and utilization",
        },
        {
          id: "fci-schweizer-niederlaufhund-nomenclature-60",
          role: "verified",
          locator: "Definitive recognition date, breed classification and varieties",
        },
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "verified",
          locator: "Club history and consolidation of the four colour varieties",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Historical facts written in original wording.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-schweizer-niederlaufhund-standard-60",
          role: "verified",
          locator: "Origin, classification, history, utilization, temperament, coat and size",
        },
        {
          id: "fci-schweizer-niederlaufhund-nomenclature-60",
          role: "verified",
          locator: "Official breed name, recognition status and four varieties",
        },
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "verified",
          locator: "Weight, lifespan, health, temperament and care",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Original answers synthesizing official standard information and Swiss breed-profile guidance.",
    },
  },

  updatedOn: "2026-11-16",
};
