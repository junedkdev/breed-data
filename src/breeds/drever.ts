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
      uploadedOn: "2019-02-11",
      width: 1341,
      height: 972,
      licenseId: "cc-by-sa-4.0",
      attribution:
        'Canarian, "DocFile Drever.jpg", via Wikimedia Commons, licensed under CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). No changes made.',
      restrictions: null,
      metadataCheckedOn: "2026-11-13",
    },
  ],

  overview: {
    summary:
      "The Drever is a compact, sturdy Swedish scent hound with a long body, short legs, and remarkable stamina on a trail. Developed to track game through challenging forest terrain, it works deliberately and gives clear, sustained voice while following scent. Though calm and affectionate indoors, its strong hunting drive demands regular outdoor engagement and purposeful scent activity.",

    description:
      "Built low to the ground with a muscular, slightly elongated frame and short, strong limbs, the Drever is designed for endurance rather than speed. Its coat is short, harsh, and close-fitting, growing slightly longer along the neck, back, and rear thighs, always paired with white markings. In the field, it tracks steadily and uses a resonant, carrying bark so handlers can follow its route through dense cover. Indoors, it settles well with family when given sufficient exercise, socialization, and outlets for its keen nose.",

    history:
      "The breed originated in Sweden from small German hounds—chiefly the Westphalian Dachsbracke—imported in the early 1910s and first registered in Sweden in 1913. Breeders shaped a slightly slower, steady-trailing hound well suited to Swedish terrain, snow, and deer hunting. In 1947 the Swedish variety received the name Drever, and by 1953 it was formally recognized as a distinct Swedish national breed.",

    originalPurpose:
      "Slow-driving scent hound used to track and push roe deer, deer, hare, and fox while giving voice along the trail.",

    currentRoles: [
      "Scent-trailing and game-driving hunting hound",
      "Roe deer, deer, hare, and fox tracking dog",
      "Active family companion in homes able to satisfy its exercise and scenting needs",
      "Recreational tracking and nose-work partner",
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
      unit: "kg",
      male: { min: 14, max: 18 },
      female: { min: 14, max: 18 },
    },

    lifespanYears: {
      min: 12,
      max: 15,
    },

    coatType:
      "Short, harsh, straight, dense, and close-lying coat. Hair is shorter on the head, ears, and lower limbs, and slightly longer on the neck, back, and backs of the thighs.",

    coatLength:
      "Short overall, with marginally longer hair on the neck, back, and rear thighs, and a dense, brush-like covering underneath the tail without long feathering.",

    coatColors: [
      "Any colour combined with white markings, except all-white or liver-brown",
      "Tan with white markings, with or without a black saddle or back",
      "Black and white",
      "Red or fawn with white markings",
      "Tricolour with white markings",
    ],

    sheddingLevel:
      "Moderate seasonal shedding; the short, dense coat releases loose hair steadily and responds well to routine brushing, though an exact breed-wide rating is not established.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Long, muscular body set low to the ground on short, sturdy legs.",
      "Proportionally large, elongated head with a straight or slightly convex nasal bridge and dark brown eyes.",
      "Low-set, medium-long, broad hanging ears with rounded tips.",
      "Well-developed oval chest extending clearly below the elbows.",
      "Long, thick-based tail typically carried low or slightly raised when moving, never curled over the back.",
      "Clear, carrying voice used persistently while trailing game.",
    ],
  },

  temperament: {
    traits: [
      "Alert",
      "Even-tempered",
      "Persistent on a scent trail",
      "Strong hunting and tracking instinct",
      "Courageous and determined outdoors",
      "Calm, loyal, and affectionate at home",
      "Vocal while following scent",
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
        "High in terms of daily mental and physical engagement. Needs regular walks, safe sniffing time, and structured tracking or scent games adjusted to age, fitness, and weather.",

      minutesPerDay: null,

      activities: [
        "Daily walks allowing unhurried sniffing and exploration",
        "Structured scent-trailing and nose-work games",
        "Reward-based tracking practice",
        "On-lead hiking in varied outdoor terrain",
        "Lawful hunting and field work where appropriate",
        "Recall and loose-lead training sessions",
      ],
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush weekly with a soft brush or rubber grooming mitt to remove loose hair and dirt while checking the skin.",

      bathing:
        "Bathe only when dirty using a gentle canine shampoo, then towel-dry thoroughly.",

      notes: [
        "The short, harsh coat sheds dirt easily and needs minimal trimming.",
        "Check hanging ears weekly for wax buildup, odour, or redness.",
        "Inspect paws, pads, and nails after woodland or field walks.",
        "Trim nails regularly to keep gait comfortable.",
        "Brush teeth routinely with dog-safe toothpaste.",
        "Check coat and skin for ticks or burrs after outdoor activity.",
      ],
    },

    training: {
      difficulty:
        "Moderate. Naturally attentive and intelligent, yet strong scent instincts can override cues once a trail catches its attention. Consistent reward-based training and lead management are essential.",

      tips: [
        "Keep sessions short, upbeat, and reward-driven.",
        "Build reliable recall in enclosed spaces before adding outdoor distractions.",
        "Use a lead or long line in unfenced areas where wildlife scent may tempt the dog to range.",
        "Reinforce check-ins and calm focus around smells and movement.",
        "Channel tracking drive into legal scent games and structured nose work.",
        "Avoid harsh corrections; combine patient training with secure physical management.",
      ],

      socialization:
        "Provide calm, positive introductions to varied people, dogs, environments, and handling from puppyhood. Supervise interactions with children and small pets, and maintain recall and lead manners throughout adulthood.",
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool climates with dry shelter and routine care",
        "Warm climates only with reliable shade, fresh water, and cooler-hour exercise",
      ],

      aloneTimeTolerance:
        "No fixed breed-wide alone-time rating is established. Build alone-time tolerance gradually with adequate exercise and enrichment, and monitor the individual dog.",
    },
  },

  nutrition: {
    dietType:
      "Complete, balanced canine diet suited to life stage, body condition, and actual activity level.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Start with the food manufacturer's portion guide and adjust to maintain a lean, well-muscled waistline. Because Drevers can gain weight easily when inactive, weigh meals carefully, factor in training treats, and provide fresh water at all times.",

    considerations: [
      "Keep body condition lean to avoid extra strain on a long back and short legs.",
      "Match daily calories to actual exercise rather than assuming working-level intake year-round.",
      "Count treats and chews within the daily calorie budget.",
      "Transition foods gradually over several days unless advised otherwise by a veterinarian.",
      "Consult a veterinarian for persistent appetite changes, digestive upset, or weight shifts.",
    ],

    note:
      "Portion sizes and meal counts depend on age, calorie density, workload, and veterinary guidance.",
  },

  health: {
    overview:
      "Available breed records do not establish a comprehensive population-level list of hereditary diseases. However, breed health observations note reports of breathing difficulties during or after hunting and unusual fatigue—sometimes termed hunting oedema. Treat this as a serious symptom to watch for rather than an inevitable condition, and seek prompt veterinary care for any respiratory distress, weakness, or collapse during exertion.",

    commonConditions: [
      "Reported exercise- or hunting-related breathing difficulties and unusual fatigue (sometimes called hunting oedema), noted as a breed concern requiring prompt veterinary assessment rather than a universal diagnosis.",
    ],

    preventiveCare: [
      "Schedule regular veterinary wellness exams and keep vaccinations and parasite prevention current.",
      "Condition the dog gradually for strenuous field work and adjust exertion to weather and fitness.",
      "Stop exercise immediately and seek veterinary attention if breathing difficulty, unusual fatigue, weakness, or collapse occurs.",
      "Maintain lean body weight to support spine and joint comfort.",
      "Request available health history from breeders and discuss relevant screenings with a veterinarian.",
      "Keep dental, ear, nail, and skin checks routine.",
    ],

    recommendedScreenings: [],

    dentalCare:
      "Brush teeth regularly with canine toothpaste and arrange routine veterinary oral checks. Have bad breath, red gums, broken teeth, or chewing difficulty evaluated promptly.",

    earCare:
      "Inspect the hanging ears weekly for wax, debris, odour, or redness. Clean gently with a veterinarian-approved solution when needed and seek care for recurring irritation.",

    skinCare:
      "Check skin and coat during brushing and after woodland walks for ticks, scratches, or redness. Consult a veterinarian for persistent itching or sores.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Active owners ready to provide daily walks and structured scent enrichment",
      "Hunters or trackers seeking a steady, vocal scent hound",
      "Households willing to manage strong trailing instincts with secure fencing and leads",
      "Families prepared to supervise children and teach respectful handling",
    ],

    notIdealFor: [
      "Sedentary households wanting a low-exercise lap dog",
      "Owners expecting reliable off-lead recall near wildlife without intensive management",
      "Homes or apartments where a resonant hunting bark would cause noise issues",
      "First-time owners unwilling to train around independent scenting behaviour",
    ],
  },

  funFacts: [
    "The Drever originated in Sweden from small German hounds, particularly the Westphalian Dachsbracke, first registered there in 1913.",
    "Its current name was officially adopted in 1947, and the breed gained formal recognition as a Swedish breed in 1953.",
    "Its low-slung, muscular frame helps it move steadily through deep snow and dense Nordic undergrowth.",
    "While trailing game, a Drever gives a clear, carrying voice so hunters can follow the chase through forest cover.",
    "Accepted coats always include white markings visible from all sides, whereas all-white and liver-brown coats are disallowed.",
  ],

  faq: [
    {
      question: "Where does the Drever come from?",
      answer:
        "The Drever comes from Sweden, where it was developed from small German hounds imported in the early twentieth century and formally recognized as a Swedish breed in 1953.",
    },
    {
      question: "What was the Drever bred to do?",
      answer:
        "It was bred as a slow-driving scent hound to track and push roe deer, deer, hare, and fox while giving voice so hunters could follow the trail.",
    },
    {
      question: "How tall is a Drever?",
      answer:
        "Adult males measure 32–38 cm at the withers (ideally 35 cm) and adult females measure 30–36 cm (ideally 33 cm).",
    },
    {
      question: "How much does a Drever weigh?",
      answer:
        "Typical adult weight ranges from 14 to 18 kg, depending on sex, build, and conditioning.",
    },
    {
      question: "How long does a Drever live?",
      answer:
        "Typical lifespan is around 12 to 15 years, varying with genetics, weight management, and veterinary care.",
    },
    {
      question: "Does a Drever need a lot of exercise?",
      answer:
        "Yes. As an active working scent hound, it needs daily walks plus regular sniffing, tracking, or nose-work outlets to stay balanced.",
    },
    {
      question: "Is a Drever easy to train?",
      answer:
        "It is intelligent and responds well to reward-based training, but strong scenting instincts mean off-lead recall around wildlife requires careful management and a long line in unfenced areas.",
    },
    {
      question: "What coat colours are accepted for a Drever?",
      answer:
        "All coat colours with white markings are permitted except all-white or liver-brown. Tan with white markings, with or without a black saddle, is especially common.",
    },
    {
      question: "Are there health concerns to know about?",
      answer:
        "Breed health notes include reports of breathing difficulties and unusual fatigue during or after hunting, sometimes called hunting oedema. Any respiratory distress or collapse during exercise requires prompt veterinary care.",
    },
    {
      question: "Can a Drever live in an apartment?",
      answer:
        "Apartment living is generally not ideal because of its high activity needs and strong, resonant voice. A home with secure outdoor access and regular field exercise is a better fit.",
    },
  ],

  references: [
    "fci-drever-standard-130",
    "swedish-kennel-club-drever-profile",
    "commons-docfile-drever-canarian",
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
      reliability: "reliable_source",
      sources: [
        {
          id: "swedish-kennel-club-drever-profile",
          role: "verified",
          locator: "Nordic Dog Breeds page: Also known as",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Includes alternate names listed in the Swedish Kennel Club profile alongside Swedish Dachsbracke.",
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
      verifiedOn: "2026-11-13",
      note:
        "Follows FCI Group 6 Section 1.3 classification; The Dog API lists Hound.",
    },

    origin: {
      reliability: "reliable_source",
      sources: [
        {
          id: "swedish-kennel-club-drever-profile",
          role: "verified",
          locator: "Breed facts and history",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-13",
      note: "Sweden is verified as the country of origin.",
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Consulted sources establish Sweden as the country of origin without specifying a single sub-region.",
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
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "All user-facing prose is original wording summarizing the official standard, kennel-club profile, and historical background.",
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
          locator: "Size, coat colours, and appearance",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Sex-specific height ranges (32–38 cm male, 30–36 cm female) follow the official FCI standard; The Dog API gave a combined breed-wide range of 30–38 cm without separating sexes. Coat colours exclude all-white and liver-brown per the FCI standard (unlike generic colours listed in The Dog API).",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (14–18 kg)",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "FCI Standard No. 130 does not publish weight limits; 14–18 kg is taken from The Dog API, which provides one breed-wide range without separating males and females.",
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
      note: "The Dog API gave one breed-wide weight range (14–18 kg) and did not separate males and females.",
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
      note: "The Dog API gave one breed-wide weight range (14–18 kg) and did not separate males and females.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span (12–15 years)",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "FCI Standard No. 130 does not publish a lifespan; 12–15 years is sourced from The Dog API.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific drooling rating was established in consulted sources.",
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
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Describes typical breed tendencies; individual behaviour depends on genetics, training, and socialization.",
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
        "1–5 scores are editorial estimates for app comparison, not official or scientific measurements.",
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
        "Practical care guidance adapted to a working scent hound; tailor to age, health, and environment.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Consulted sources do not establish a universal daily exercise-minute figure.",
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
        "General canine nutrition guidance; consult a veterinarian for individualized diet plans.",
    },

    "nutrition.feedingFrequency": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal Drever-specific meal frequency was established.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "swedish-kennel-club-drever-profile",
          role: "verified",
          locator:
            "Health section: reported breathing problems during or after hunting and unusual fatigue (hunting oedema)",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Distinguishes reported hunting-related respiratory/fatigue concerns from population-wide prevalence.",
    },

    "health.recommendedScreenings": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No breed-wide screening protocol was established by the consulted sources.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "swedish-kennel-club-drever-profile",
          role: "cited",
          locator:
            "Hunting instinct, need for hunting-related activity, and family suitability",
        },
        {
          id: "fci-drever-standard-130",
          role: "cited",
          locator: "Utilization and Behaviour/Temperament",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial suitability ratings based on typical scent-hound traits; individual dogs and households vary.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific rating for senior owners was established.",
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
      verifiedOn: "2026-11-13",
      note:
        "Historical and working-role facts written in original wording.",
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
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric and breed.life_span",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Original answers synthesizing the official standard, kennel-club profile, and The Dog API weight/lifespan figures.",
    },
  },

  updatedOn: "2026-11-13",
};
