import type { Breed } from "../schema/breed.types";

export const ibizan_hound: Breed = {
  slug: "ibizan-hound",
  name: "Ibizan Hound",
  scientificName: null,

  alternateNames: [
    "Podenco Ibicenco",
    "Ibizan Podenco",
    "Podenco d'Ibiza",
    "Ca Eivissec",
    "Ibizan Warren Hound",
    "Beezer",
  ],

  group:
    "Spitz and primitive types; Primitive type hunting dogs (also placed in Hound groupings)",

  origin: {
    country: "Spain",
    region:
      "Balearic Islands, particularly Ibiza, Formentera, Mallorca, and Menorca",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ibizan_Hound.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Ibizan_Hound.jpg",
      title: "Ibizan Hound.jpg",
      description: "Photograph of an Ibizan Hound.",
      creator: "sean mason",
      uploader: "Ltshears (Flickr upload bot)",
      capturedOn: "2002-11-10",
      uploadedOn: "2008-11-18",
      width: 1773,
      height: 1185,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by sean mason, originally posted to Flickr and shared via Wikimedia Commons, licensed under CC BY 2.0. https://creativecommons.org/licenses/by/2.0/. Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-11-12",
    },
  ],

  overview: {
    summary:
      "A swift, deer-like rabbit hunter from Spain's Balearic Islands, instantly recognized by its tall, mobile ears, lean athletic frame, and remarkable standing-jump agility.",

    description:
      "Sleek yet muscular, the Ibizan Hound pairs a finely chiseled head and clear amber eyes with long limbs and large, stiffly upright ears that swivel toward every sound. Its slightly rectangular frame carries a deep chest and comes in two hard-textured coat varieties—smooth or wire-haired—in shades of white, red, or both combined. Affectionate and playful with its household yet often politely aloof with newcomers, this agile hunter combines sight, scent, and hearing to pursue fast-moving quarry, making high, secure fencing and dedicated recall training essential.",

    history:
      "Shaped over generations in Spain's Balearic Islands—especially Ibiza, Formentera, Mallorca, and Menorca—the breed is known locally as Podenco Ibicenco or Ca Eivissec. Island hunters relied on its speed, endurance, and extraordinary leaping ability to flush and catch rabbits across rocky, scrub-covered hillsides. While its silhouette echoes ancient Mediterranean hunting dogs, documented breed lineage centers on its sustained island development.",

    originalPurpose:
      "Hunting rabbits and small game over rugged island terrain using sight, scent, and acute hearing.",

    currentRoles: [
      "Rabbit and small-game hunting where permitted",
      "Lure coursing, racing, agility, and tracking competitor",
      "Active family companion in securely fenced homes",
    ],
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "in",
      male: { min: 23, max: 27 },
      female: { min: 22, max: 26 },
    },

    weight: {
      unit: "lb",
      male: { min: 46, max: 55 },
      female: { min: 40, max: 50 },
    },

    lifespanYears: {
      min: 11,
      max: 14,
    },

    coatType:
      "Hard-textured coat occurring in two varieties: short, close-lying smooth or rougher wire-haired with facial furnishings.",

    coatLength:
      "Smooth coats lie shortest on the head and ears and lengthen slightly behind the thighs and beneath the tail; wire coats measure roughly 1–3 inches.",

    coatColors: [
      "White",
      "Red, ranging from pale lion-gold to deep chestnut-red",
      "White and red in combination",
    ],

    sheddingLevel:
      "Low to moderate — smooth coats need minimal upkeep, while wire coats benefit from extra brushing to clear loose hair and burrs.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Very large, thin, upright ears that pivot expressively when alert",
      "Long, narrow skull with clear amber-to-caramel eyes",
      "Lean, fine-boned, deep-chested build engineered for speed",
      "Extraordinary vertical jumping ability from a standing start",
      "Smooth and wire-haired coat varieties in white, red, or white-and-red",
      "Light, springy, suspended trot",
    ],
  },

  temperament: {
    traits: [
      "Alert, perceptive, and quick to react",
      "Warm, playful, and loyal with family members",
      "Independent-minded in the field",
      "Intensely driven to chase fast-moving animals",
      "Politely reserved with unfamiliar people without shyness",
      "Responsive to patient, reward-based training",
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 2,
      independence: 5,
      trainability: 4,
      barking: 2,
      energy: 5,
    },
  },

  care: {
    exercise: {
      level:
        "Very high — a swift, athletic hunting breed needing over two hours of daily exercise and safe running.",
      minutesPerDay: { min: 120, max: null },
      activities: [
        "Extended brisk walks and trail hikes suited to fitness",
        "Free running inside tall, securely enclosed areas",
        "Lure coursing, agility, or tracking sports",
        "Structured nose-work games and reward-based recall drills",
      ],
    },

    grooming: {
      level: "Low to moderate depending on coat variety",
      brushing:
        "Brush smooth coats weekly with a soft bristle brush or rubber mitt; comb wire coats thoroughly as needed to remove tangles and field debris without unnecessary clipping.",
      bathing:
        "Bathe only occasionally with a mild canine shampoo and dry thoroughly to prevent skin dryness.",
      notes: [
        "Check the large upright ears weekly for wax, debris, redness, or odour.",
        "Inspect paws and thin skin after runs through brush or rocky ground.",
        "Keep nails trimmed and maintain routine dental brushing.",
      ],
    },

    training: {
      difficulty:
        "Moderate — quick to learn with upbeat, reward-based methods, though off-leash recall competes with strong prey drive.",
      tips: [
        "Start recall games early inside low-distraction, fenced spaces.",
        "Rely on leashes or tall secure fencing outdoors rather than assuming recall will override wildlife instincts.",
        "Keep training sessions varied, brief, and positive.",
      ],
      socialization:
        "Offer calm, positive introductions to unfamiliar people, dogs, and novel sights from puppyhood, letting the dog observe at its own pace.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,
      climates: [
        "Provide shade, ventilation, and fresh water in warm weather, avoiding peak midday heat for hard runs.",
        "Use a well-fitted coat in cold or damp weather if a lean, short-coated dog shows discomfort.",
        "Fencing should be tall and secure due to the breed's remarkable standing-jump capability.",
      ],
      aloneTimeTolerance:
        "Moderate when conditioned gradually — pair departures with prior exercise and enrichment, avoiding routine long-day isolation.",
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced commercial diet suited to a large, athletic dog's life stage and activity level.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Measure daily meals against body condition score rather than relying on a naturally lean outline alone, keeping fresh water accessible.",

    considerations: [
      "Adjust caloric intake to match seasonal running or coursing workloads.",
      "Avoid vigorous exercise immediately around large meals if advised by a veterinarian for deep-chested dogs.",
      "Consult a veterinarian for persistent digestive upset, skin irritation, or unexplained weight loss.",
    ],

    note:
      "No fixed calorie target or meal schedule applies to every Ibizan Hound; individual needs vary with age, fitness, and metabolism.",
  },

  health: {
    overview:
      "Parent-club health programmes prioritize screening breeding stock for hip dysplasia, inherited eye disorders, congenital deafness, autoimmune thyroiditis, and cardiac conditions. Seizures and gastric dilatation-volvulus (bloat) are also noted as concerns, though published sources do not establish breed-wide prevalence rates for every condition.",

    commonConditions: [
      "Hip dysplasia — monitored through radiographic hip evaluations.",
      "Eye disorders — screened via regular veterinary ophthalmologist exams.",
      "Congenital deafness — screened using BAER hearing testing.",
      "Autoimmune thyroiditis — evaluated through specialized thyroid blood panels.",
      "Seizure disorders — reported occasionally; causes may vary.",
      "Gastric dilatation-volvulus (bloat) — an acute emergency risk in deep-chested breeds.",
    ],

    preventiveCare: [
      "Request documented parental health-screening results before acquiring a puppy.",
      "Maintain routine veterinary wellness exams, vaccinations, and parasite control.",
      "Learn the early warning signs of bloat and seek emergency veterinary care immediately if suspected.",
    ],

    recommendedScreenings: [
      "Hip dysplasia evaluation through an accepted orthopaedic programme",
      "Annual veterinary ophthalmologist eye examination",
      "BAER hearing test for congenital deafness",
      "Autoimmune thyroiditis blood panel from an approved laboratory",
      "Cardiac evaluation as included in current parent-club screening protocols",
    ],

    dentalCare:
      "Brush teeth several times a week with dog-safe toothpaste and schedule routine veterinary oral checks.",

    earCare:
      "Inspect the upright ears weekly for wax, dirt, redness, or discharge, cleaning gently only when needed with a canine ear cleanser.",

    skinCare:
      "Check thin skin and coat during weekly brushing for scrapes, sun sensitivity on pale areas, or persistent itching.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Active owners ready to provide over two hours of daily exercise and safe running",
      "Handlers interested in lure coursing, agility, tracking, or long hikes",
      "Homes with tall, secure fencing and consistent, reward-based training",
    ],

    notIdealFor: [
      "Sedentary households seeking a low-exercise companion",
      "Owners expecting reliable off-leash freedom in unfenced areas near wildlife",
      "Homes lacking secure containment for a high-jumping sighthound",
    ],
  },

  funFacts: [
    "In Spain's Balearic Islands, the breed is traditionally called Podenco Ibicenco or Ca Eivissec.",
    "Unlike pure sighthounds, it hunts rabbits using acute hearing and scent alongside keen eyesight.",
    "Ibizan Hounds are famous for clearing tall fences from a standing start with little or no running approach.",
    "Both smooth and wire-haired coat varieties are recognized equally in show and field circles.",
  ],

  faq: [
    {
      question: "What was the Ibizan Hound bred to do?",
      answer:
        "It was developed on Spain's Balearic Islands to hunt rabbits across rocky terrain using sight, scent, and hearing.",
    },
    {
      question: "How tall is an Ibizan Hound?",
      answer:
        "Males typically stand 23–27 inches at the withers and females 22–26 inches, though published ranges can vary slightly by region.",
    },
    {
      question: "How much does an Ibizan Hound weigh?",
      answer:
        "Adult males typically weigh 46–55 pounds and females 40–50 pounds, depending on individual build and body condition.",
    },
    {
      question: "How much exercise does an Ibizan Hound need?",
      answer:
        "Adult Ibizan Hounds generally need more than two hours of daily exercise and safe running opportunities, adjusted for age, health, and fitness.",
    },
    {
      question: "Does an Ibizan Hound need much grooming?",
      answer:
        "Smooth coats usually need only weekly brushing, while wire-haired coats benefit from extra combing to clear loose hair and field debris.",
    },
    {
      question: "Can an Ibizan Hound go off leash?",
      answer:
        "Its strong instinct to chase moving animals means off-leash running is safest inside tall, securely fenced enclosures.",
    },
    {
      question: "Which health tests should I ask a breeder about?",
      answer:
        "Ask for documented hip, eye, BAER hearing, autoimmune thyroiditis, and cardiac evaluations, reviewing any results with your veterinarian.",
    },
  ],

  references: [
    "fci-podenco-ibicenco-standard-089",
    "united-kennel-club-ibizan-hound-standard",
    "american-kennel-club-ibizan-hound",
    "ibizan-hound-club-us-akc-standard",
    "ibizan-hound-club-us-health",
    "royal-kennel-club-ibizan-hound",
    "commons-ibizan-hound-sean-mason",
    "the-dog-api",
  ],

  evidence: {
    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-podenco-ibicenco-standard-089",
          role: "verified",
          locator: "Breed nomenclature and brief historical summary — Podenco Ibicenco / Ca Eivissec",
        },
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Breed overview — Podenco Ibicenco",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names (Podenco Ibicenco, Beezer)",
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
          id: "fci-podenco-ibicenco-standard-089",
          role: "verified",
          locator: "Classification — Group 5, Section 7, primitive type hunting dogs",
        },
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "cited",
          locator: "Hound breed group",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group: Hound",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-podenco-ibicenco-standard-089",
          role: "verified",
          locator: "Origin: Spain (Balearic Islands)",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: Balearic Islands, Spain",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-podenco-ibicenco-standard-089",
          role: "verified",
          locator: "Utilization and brief historical summary",
        },
        {
          id: "ibizan-hound-club-us-akc-standard",
          role: "verified",
          locator: "General appearance, movement, and temperament",
        },
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "verified",
          locator: "About this breed and characteristics",
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
          id: "royal-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Breed characteristics — size listed as Large",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-ibizan-hound-standard",
          role: "verified",
          locator: "Height & Weight — dogs 23–27 inches; bitches 22–26 inches",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric: 60–70 cm (males), 57–66 cm (females)",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Published inches from the UKC standard are retained without unit conversion; The Dog API lists 60–70 cm (males) and 57–66 cm (females).",
    },
    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-ibizan-hound-standard",
          role: "verified",
          locator: "Height & Weight — males 46–55 lb; females 40–50 lb",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.weight.metric: 23–29 kg (males), 20–25 kg (females)",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Published pounds from the UKC standard are retained without unit conversion; The Dog API lists 23–29 kg (males) and 20–25 kg (females).",
    },
    "physical.lifespanYears": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-ibizan-hound",
          role: "cited",
          locator: "Breed profile — life expectancy",
        },
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "cited",
          locator: "Breed characteristics — lifespan over 10 years",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span: 11–14 years",
        },
      ],
      verifiedOn: null,
      note: "Published breed-profile lifespan estimate.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "ibizan-hound-club-us-akc-standard",
          role: "verified",
          locator: "Coat — smooth and wire-haired varieties",
        },
        {
          id: "united-kennel-club-ibizan-hound-standard",
          role: "verified",
          locator: "Coat — smooth and rough varieties",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "ibizan-hound-club-us-akc-standard",
          role: "verified",
          locator: "Coat — smooth coat distribution and wire coat 1–3 inches",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "ibizan-hound-club-us-akc-standard",
          role: "verified",
          locator: "Color — white, red, or combination",
        },
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Breed standard colours",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Generic species-wide colours from The Dog API are excluded.",
    },
    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Breed characteristics — sheds and grooming once a week",
        },
        {
          id: "american-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Grooming — smooth and wire coat varieties",
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
          id: "ibizan-hound-club-us-akc-standard",
          role: "verified",
          locator: "General Appearance, Head, Ears, Body, Coat, Gait",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ibizan-hound-club-us-akc-standard",
          role: "verified",
          locator: "Temperament",
        },
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Breed standard — reserved, dignified, intelligent, independent",
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
          id: "ibizan-hound-club-us-akc-standard",
          role: "cited",
          locator: "Temperament and hunting characteristics",
        },
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "cited",
          locator: "Breed standard temperament",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1–5 estimates based on published qualitative descriptions.",
    },
    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "verified",
          locator: "More than 2 hours of exercise per day",
        },
        {
          id: "american-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Athletic sprinter and jumper requiring space",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Grooming once a week",
        },
        {
          id: "american-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Grooming and ear-care guidance",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ibizan-hound-club-us-akc-standard",
          role: "verified",
          locator: "Temperament and hunting instinct",
        },
        {
          id: "united-kennel-club-ibizan-hound-standard",
          role: "verified",
          locator: "Hunting function and breed characteristics",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "care.livingEnvironment": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General welfare guidance adapted for an agile, high-jumping sighthound.",
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
      note: "General canine nutrition guidance; no breed-specific calorie target is asserted.",
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
          id: "ibizan-hound-club-us-health",
          role: "verified",
          locator: "Health concerns and recommended tests",
        },
        {
          id: "american-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Health and recommended parent-club tests",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Distinguishes screening priorities from breed-wide disease prevalence.",
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ibizan-hound-club-us-health",
          role: "verified",
          locator: "Deafness, eye disease, thyroiditis, hip dysplasia, seizures, and bloat",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Conditions listed reflect parent-club concerns and screening targets rather than a population prevalence ranking.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive veterinary guidance informed by breed screening priorities.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ibizan-hound-club-us-health",
          role: "verified",
          locator: "Recommended screenings — hips, eyes, BAER hearing, thyroid, cardiac",
        },
        {
          id: "american-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Recommended health tests from the national breed club",
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
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Grooming — weekly ear checks for wax and debris",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
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
          id: "royal-kennel-club-ibizan-hound",
          role: "cited",
          locator: "Exercise, home, and garden size guidance",
        },
        {
          id: "american-kennel-club-ibizan-hound",
          role: "cited",
          locator: "Need for ample space and athletic activity",
        },
      ],
      verifiedOn: null,
      note: "Editorial suitability assessment based on exercise and prey-drive demands.",
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a universal first-time-owner rating.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a universal rating for families with children.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a universal senior-owner rating.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a universal apartment-living rating.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-podenco-ibicenco-standard-089",
          role: "verified",
          locator: "Origin and rabbit-hunting utilization",
        },
        {
          id: "ibizan-hound-club-us-akc-standard",
          role: "verified",
          locator: "Coat varieties and jumping ability",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "united-kennel-club-ibizan-hound-standard",
          role: "verified",
          locator: "Height & Weight",
        },
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Exercise and grooming",
        },
        {
          id: "ibizan-hound-club-us-health",
          role: "verified",
          locator: "Health tests and concerns",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
  },

  updatedOn: "2026-11-12",
};
