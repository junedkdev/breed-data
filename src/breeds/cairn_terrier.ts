import type { Breed } from "../schema/breed.types";

export const cairn_terrier: Breed = {
  slug: "cairn-terrier",
  name: "Cairn Terrier",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Cairn",
    "Short-haired Skye Terrier",
  ],

  group: "Terrier Group",

  origin: {
    country: "Scotland",
    region: "Western Highlands and the Isle of Skye",
  },

  images: [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Cairn_terrier.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Cairn_terrier.jpg",
      title: "Cairn terrier.jpg",
      description: "Photograph identified on the file page as a Cairn Terrier.",
      creator: "Rockytopscott",
      uploader: "Rockytopscott",
      capturedOn: null,
      uploadedOn: "2008-11-07",
      width: 1944,
      height: 2592,
      licenseId: "cc-by-3.0",
      attribution:
        "Photo by Rockytopscott, via Wikimedia Commons, licensed under CC BY 3.0 (https://creativecommons.org/licenses/by/3.0/). Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-11-12",
    },
  ],

  overview: {
    summary:
      "A compact, hardy Scottish working terrier prized for its shaggy weather-resistant double coat, keen foxy expression, and bold, cheerful curiosity.",

    description:
      "Sturdy and workmanlike without heaviness, the Cairn Terrier pairs a broad, furnished head and small pointed ears with a medium-length harsh outer coat over a soft, close undercoat. Developed to bolt foxes and vermin from rocky Highland terrain, it remains energetic, inquisitive, and independent-minded—eager to dig, investigate scents, and announce visitors. Positive, varied training and secure outdoor containment help channel its lively terrier instincts into rewarding companionship.",

    history:
      "Shaped in Scotland's Western Highlands and on the Isle of Skye—where it was first exhibited as the short-haired Skye Terrier—the breed takes its name from 'cairns,' the stone mounds where small quarry sheltered. Sharing roots with the Scottish Terrier and West Highland White Terrier, it preserved a lighter, rugged working build while transitioning smoothly into modern companion homes and dog sports.",

    originalPurpose:
      "Routing foxes, otters, and vermin out of stone piles and rugged Highland terrain.",

    currentRoles: [
      "Lively family and household companion",
      "Agility, obedience, rally, and earthdog competitor",
      "Scent-work and trick-training partner",
    ],
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "in",
      male: { min: 11, max: 12 },
      female: { min: 11, max: 12 },
    },

    weight: {
      unit: "lb",
      male: { min: 14, max: 16 },
      female: { min: 14, max: 16 },
    },

    lifespanYears: {
      min: 13,
      max: 15,
    },

    coatType:
      "Weather-resistant double coat consisting of a profuse, harsh outer layer over a short, soft, close undercoat.",

    coatLength:
      "Shaggy, medium-length natural coat that protects against rain and brush rather than appearing silky or sculpted.",

    coatColors: [
      "Cream",
      "Wheaten",
      "Red",
      "Grey",
      "Nearly black",
      "Brindle variations of accepted colours",
    ],

    sheddingLevel:
      "Low to moderate — regular brushing and occasional hand-stripping clear dead hair.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Small, sturdy, workmanlike frame built to move freely over rough ground",
      "Broad skull, short powerful muzzle, and shaggy eyebrows framing dark hazel eyes",
      "Small, pointed, erect ears set wide on the skull",
      "Short tail carried gaily upright without curling over the back",
      "Coat colours include cream, wheaten, red, grey, and nearly black, often with brindling and dark points on the ears and muzzle",
    ],
  },

  temperament: {
    traits: [
      "Alert and keenly observant",
      "Cheerful, active, and inquisitive",
      "Confident and fearless for its size",
      "Independent-minded and persistent on a scent",
      "Affectionate and loyal with household members",
      "Vocal watchdog inclined to dig or chase small moving animals",
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 3,
      independence: 4,
      trainability: 3,
      barking: 4,
      energy: 4,
    },
  },

  care: {
    exercise: {
      level:
        "Moderate to high for a small breed — thrives on daily brisk walks, interactive play, and nose-work.",
      minutesPerDay: null,
      activities: [
        "Daily leashed walks on a secure harness",
        "Supervised play inside escape-proof, dig-resistant fencing",
        "Scent-search games, puzzle feeders, and earthdog trials",
        "Reward-based obedience, agility, or trick training",
      ],
    },

    grooming: {
      level: "Moderate — weekly brushing plus periodic hand-stripping to preserve harsh texture",
      brushing:
        "Brush and comb weekly to remove loose undercoat, tangles, and field burrs, checking behind the ears and legs.",
      bathing:
        "Bathe only when genuinely dirty with a gentle canine shampoo and dry thoroughly; over-bathing softens the harsh outer coat.",
      notes: [
        "Consult a terrier-experienced groomer about hand-stripping rather than clipping if maintaining traditional texture matters.",
        "Check ears, eyes, paws, and nails routinely.",
        "Brush teeth regularly with dog-safe toothpaste.",
      ],
    },

    training: {
      difficulty:
        "Moderate — smart and quick to catch on, though terrier independence resists dull repetition.",
      tips: [
        "Keep lessons short, upbeat, and reward-based.",
        "Practise recall in fenced areas before trusting off-leash cues near wildlife.",
        "Teach a calm 'quiet' cue early and provide legal digging or scent outlets.",
      ],
      socialization:
        "Offer positive, gradual exposure to unfamiliar people, calm dogs, and handling from puppyhood, supervising around small pets.",
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: [
        "Weather-resistant double coat handles cool and damp conditions well.",
        "Provide shade, fresh water, and cooler walking hours in hot weather.",
        "Check yard fencing along the ground line, as Cairns are skilled diggers.",
      ],
      aloneTimeTolerance:
        "Moderate when conditioned gradually — prolonged boredom without enrichment can trigger barking or digging.",
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced commercial diet formulated for small-breed dogs according to life stage and body condition.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Measure daily portions to keep a lean, athletic waist rather than free-feeding, counting training treats within daily calories and keeping fresh water available.",

    considerations: [
      "Small breeds gain weight easily on extra table scraps or treats.",
      "Introduce food transitions gradually to avoid digestive upset.",
      "Consult a veterinarian for persistent appetite changes, vomiting, or weight loss.",
    ],

    note:
      "No single meal count or gram ration fits every Cairn Terrier; tailor portions with veterinary guidance.",
  },

  health: {
    overview:
      "Generally hardy and long-lived, Cairn Terriers are nonetheless screened by parent clubs for specific inherited and developmental conditions, including globoid cell leukodystrophy (GCL), liver vascular shunts (PSVA/MVD), renal dysplasia, ocular melanosis, cardiac abnormalities, and patellar luxation. These are preventive screening targets rather than a prediction for any individual dog.",

    commonConditions: [
      "Globoid cell leukodystrophy (GCL) — an inherited neurological disorder screened via parental DNA testing.",
      "Portosystemic vascular anomaly (PSVA) and microvascular dysplasia (MVD) — congenital liver vascular conditions screened in puppies and breeding stock.",
      "Renal aplasia or dysplasia — developmental kidney abnormalities evaluated by ultrasound.",
      "Ocular melanosis — an inherited pigmentary eye condition that can lead to secondary glaucoma.",
      "Cardiac abnormalities and patellar luxation — evaluated through veterinary heart and knee examinations.",
    ],

    preventiveCare: [
      "Request documented parental DNA, liver, kidney, eye, heart, and patella clearances from breeders.",
      "Schedule routine veterinary wellness exams, vaccinations, and parasite control.",
      "Monitor eyes for pigment spots or cloudiness and seek prompt care for limping, lethargy, or excessive thirst.",
    ],

    recommendedScreenings: [
      "Globoid cell leukodystrophy (GCL) DNA test",
      "Bile-acid or ammonia screening for PSVA / MVD",
      "Veterinary kidney ultrasound for renal aplasia or dysplasia",
      "Annual veterinary ophthalmologist exam for ocular melanosis (from age 2–3 onward)",
      "Veterinary cardiac and patellar luxation examinations",
    ],

    dentalCare:
      "Brush teeth several times a week with canine toothpaste and arrange routine veterinary dental checks.",

    earCare:
      "Inspect the small upright ears regularly for wax, redness, or odour, seeking veterinary advice if irritation develops.",

    skinCare:
      "Check the skin beneath the double coat during brushing for burrs, ticks, redness, or persistent scratching.",
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Active individuals or families who enjoy daily walks, play, and training games",
      "Apartment or house residents prepared to manage alert barking and digging",
      "Owners willing to brush weekly and arrange periodic hand-stripping or tidy trims",
    ],

    notIdealFor: [
      "Homes with unsupervised small pets such as rodents or rabbits",
      "Owners expecting effortless off-leash reliability around wildlife",
      "Households wanting a completely silent, low-interaction lapdog",
    ],
  },

  funFacts: [
    "The breed is named after 'cairns,' the Highland stone piles where foxes and vermin sheltered.",
    "Cairn Terriers were originally shown in Britain as short-haired Skye Terriers and share ancestry with the West Highland White Terrier.",
    "A Cairn Terrier named Terry famously portrayed Toto in the 1939 classic The Wizard of Oz.",
    "Their harsh, weather-resistant outer coat and soft undercoat were shaped for working in misty Scottish moorlands.",
  ],

  faq: [
    {
      question: "Where did the Cairn Terrier originate?",
      answer:
        "It developed in Scotland's Western Highlands and on the Isle of Skye as a rugged small-game and vermin terrier.",
    },
    {
      question: "How tall is a Cairn Terrier?",
      answer:
        "Adults typically stand 11 to 12 inches at the withers, though regional kennel ideals vary slightly (some North American lines target 9.5 to 10 inches).",
    },
    {
      question: "How much does a Cairn Terrier weigh?",
      answer:
        "Adults typically weigh 14 to 16 pounds, depending on individual build and body condition.",
    },
    {
      question: "How long does a Cairn Terrier live?",
      answer:
        "Life expectancy typically averages 13–15 years, though individual longevity depends on genetics, health, and care.",
    },
    {
      question: "Does a Cairn Terrier need much exercise?",
      answer:
        "Yes—for a small dog it is energetic and benefits from daily walks, interactive play, and nose-work games.",
    },
    {
      question: "Do Cairn Terriers shed?",
      answer:
        "They shed lightly to moderately; weekly brushing and periodic hand-stripping remove dead hair and preserve the harsh outer coat.",
    },
    {
      question: "What health screenings should I ask a breeder about?",
      answer:
        "Ask for documented results for globoid cell leukodystrophy (GCL) DNA, liver shunt (PSVA/MVD), kidney ultrasound, ophthalmologist eye exams for ocular melanosis, cardiac checks, and patella evaluations.",
    },
    {
      question: "Can a Cairn Terrier live in an apartment?",
      answer:
        "Yes, provided it receives daily walks, mental enrichment, and gentle training to keep alert barking in check.",
    },
  ],

  references: [
    "united-kennel-club-cairn-terrier-standard",
    "american-kennel-club-cairn-terrier",
    "royal-kennel-club-cairn-terrier-standard",
    "cairn-terrier-club-of-america-health-guidelines",
    "commons-cairn-terrier-rockytopscott",
    "the-dog-api",
  ],

  evidence: {
    scientificName: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Conventional domestic-dog taxonomic designation rather than a breed-specific label.",
    },
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "united-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "Breed heading and history — Cairn",
        },
        {
          id: "royal-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "About this breed — short haired Skye Terrier",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names (Short-haired Skye Terrier)",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "Standard heading — Terrier Group",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group: Terrier",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    origin: {
      reliability: "reliable_source",
      sources: [
        {
          id: "united-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "History — Scotland, Western Highlands, Isle of Skye",
        },
        {
          id: "american-kennel-club-cairn-terrier",
          role: "cited",
          locator: "Breed history",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: Scotland",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "united-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "History, General Appearance, Characteristics, and Coat",
        },
        {
          id: "american-kennel-club-cairn-terrier",
          role: "cited",
          locator: "About the Breed; exercise and training",
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
          id: "american-kennel-club-cairn-terrier",
          role: "verified",
          locator: "Breed profile — Small",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "Height & Weight — 11 to 12 inches",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric: 25–28 cm (males), 24–27 cm (females)",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Published inches (11–12 in) from the UKC standard are retained without unit conversion; The Dog API lists 25–28 cm (males) and 24–27 cm (females).",
    },
    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "Height & Weight — 14 to 16 pounds",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.weight.metric: 6–7.5 kg (males), 6–7 kg (females)",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Published pounds (14–16 lb) from the UKC standard are retained without unit conversion; The Dog API lists 6–7.5 kg (males) and 6–7 kg (females).",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-cairn-terrier",
          role: "verified",
          locator: "Breed profile — life expectancy 13–15 years",
        },
        {
          id: "cairn-terrier-club-of-america-health-guidelines",
          role: "cited",
          locator: "Average lifespan 13–14 years",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-cairn-terrier-standard",
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
          id: "united-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "General Appearance and Coat",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "Color",
        },
        {
          id: "royal-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "Colour — cream, wheaten, red, grey, nearly black, brindle",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Generic species-wide colours from The Dog API are excluded.",
    },
    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-cairn-terrier",
          role: "verified",
          locator: "Breed traits and care — shedding",
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
          id: "united-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "General Appearance, Head, Ears, Body, Coat, Tail",
        },
        {
          id: "royal-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "Eyes, Ears, Tail, Colour",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "united-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "Characteristics and History",
        },
        {
          id: "american-kennel-club-cairn-terrier",
          role: "cited",
          locator: "Breed traits and training",
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
          id: "american-kennel-club-cairn-terrier",
          role: "cited",
          locator: "Breed traits and characteristics",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1–5 comparison estimates.",
    },
    "care.exercise": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-cairn-terrier",
          role: "cited",
          locator: "Exercise",
        },
        {
          id: "royal-kennel-club-cairn-terrier-standard",
          role: "cited",
          locator: "Exercise and activity",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No exact daily exercise-minute range was established.",
    },
    "care.grooming": {
      reliability: "general_guidance",
      sources: [
        {
          id: "royal-kennel-club-cairn-terrier-standard",
          role: "cited",
          locator: "Grooming",
        },
        {
          id: "american-kennel-club-cairn-terrier",
          role: "cited",
          locator: "Weekly brushing and hand-stripping",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "care.training": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-cairn-terrier",
          role: "cited",
          locator: "Training",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "care.livingEnvironment": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-cairn-terrier",
          role: "cited",
          locator: "Exercise and breed care",
        },
        {
          id: "royal-kennel-club-cairn-terrier-standard",
          role: "cited",
          locator: "Home and garden suitability",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-cairn-terrier",
          role: "cited",
          locator: "Nutrition",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed puppy feeding frequency is prescribed.",
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed adult feeding frequency is prescribed.",
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed senior feeding frequency is prescribed.",
    },
    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "cairn-terrier-club-of-america-health-guidelines",
          role: "verified",
          locator: "Care & Health — screening guidelines",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "cairn-terrier-club-of-america-health-guidelines",
          role: "verified",
          locator: "GCL, PSVA/MVD, kidney ultrasound, ocular melanosis, cardiac, patella",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Screening priorities rather than prevalence rankings.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "cairn-terrier-club-of-america-health-guidelines",
          role: "cited",
          locator: "Recommended testing and veterinary evaluation",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "cairn-terrier-club-of-america-health-guidelines",
          role: "verified",
          locator: "Care & Health — health testing guidelines",
        },
      ],
      verifiedOn: "2026-11-12",
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
      sources: [],
      verifiedOn: null,
      note: "General canine ear-care guidance.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General coat and skin-care guidance.",
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-cairn-terrier",
          role: "cited",
          locator: "Exercise, training, and home life",
        },
        {
          id: "royal-kennel-club-cairn-terrier-standard",
          role: "cited",
          locator: "Size of home and activity",
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
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-cairn-terrier",
          role: "verified",
          locator: "History and fun facts",
        },
        {
          id: "united-kennel-club-cairn-terrier-standard",
          role: "cited",
          locator: "History",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "united-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "Height & Weight, History, and Coat",
        },
        {
          id: "american-kennel-club-cairn-terrier",
          role: "verified",
          locator: "Life expectancy, exercise, training, and nutrition",
        },
        {
          id: "cairn-terrier-club-of-america-health-guidelines",
          role: "cited",
          locator: "Health-testing recommendations",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
  },

  updatedOn: "2026-11-12",
};
