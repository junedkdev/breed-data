import type { Breed } from "../schema/breed.types";

export const schweizerischer_niederlaufhund: Breed = {
  slug: "schweizerischer-niederlaufhund",
  name: "Schweizerischer Niederlaufhund",
  scientificName: null,

  alternateNames: [
    "Small Swiss Hound",
    "Swiss Short-Legged Hound",
    "Petit Chien Courant Suisse",
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
      metadataCheckedOn: "2026-11-07",
    },
  ],

  overview: {
    summary:
      "The Schweizerischer Niederlaufhund, also known as the Small Swiss Hound, is a short-legged scent hound developed in Switzerland for hunting in smaller hunting areas. It has a moderately long, rectangular body, long folded ears and a keen nose. The breed is known for its determination on scent trails, friendly character and calm-to-lively temperament. It works independently while using a distinctive voice during the hunt. Its four traditional colour varieties are now recognised within one breed.",

    description:
      "This compact, sturdy hound is built for persistent scent work rather than speed over long distances. Its body is moderately long and rectangular, with lean but robust limbs, a noble head and very long ears that hang close to the cheeks. The tail is normally carried low and rises slightly when the dog is active. The breed has smooth, rough and double-coat types, with colours associated with its four traditional regional varieties. It is friendly and generally steady in temperament, but its strong hunting interest means that outdoor activity should include secure handling, scent-based enrichment and consistent training.",

    history:
      "The breed developed around the turn of the twentieth century, when hunting areas in several Swiss cantons became smaller and more enclosed. The medium-sized Swiss Hounds were considered too fast and wide-ranging for this style of hunting, so breeders selected and crossed dogs to produce a smaller, shorter-legged scent hound. The Schweizer Niederlaufhund Club was founded on 1 June 1905, initially under the name Schweizerischer Dachsbracken Club. The FCI recognised the breed definitively in 1954. In 2015, the standard was revised to bring the four traditional colour varieties together as one breed.",

    originalPurpose:
      "Independent scent hunting in smaller hunting areas, following and driving game with a distinctive voice and tracking wounded game.",

    currentRoles: [
      "Scent hunting and tracking game",
      "Tracking wounded game",
      "Mantrailing and recreational scent work",
      "Outdoor companion for active households",
      "Conformation showing",
    ],
  },

  physical: {
    sizeCategory: "Small-sized, short-legged scent hound",

    height: {
      // FCI Standard No. 60 publishes these height ranges and a tolerance of ±2 cm.
      // The stored values retain the published ranges without calculating new limits.
      unit: "cm",
      male: { min: 35, max: 43 },
      female: { min: 33, max: 40 },
    },

    // The 2024 Swiss breed profile gives approximate upper weights only.
    // No minimum weight is inferred.
    weight: {
      unit: "kg",
      male: { min: null, max: 20 },
      female: { min: null, max: 15 },
    },

    lifespanYears: { min: 14, max: 16 },

    coatType:
      "The breed has three recognised coat types: smooth, rough and double coat.",

    coatLength:
      "The smooth coat is short, smooth and close-fitting. The rough coat is harsh, elastic and close-fitting, with a slight beard. The double coat has a dense, straight top coat and a dense undercoat.",

    coatColors: [
      "White and black with tan markings (Small Bernese variety)",
      "Black with tan markings (Small Jura variety)",
      "Blue-speckled with a black mantle (Small Lucerne variety)",
      "White with an orange-red mantle (Small Schwyz variety)",
      "Mixed combinations of the recognised variety colours",
    ],

    sheddingLevel: null,

    droolingLevel: null,

    distinctiveFeatures: [
      "Short-legged, moderately long and rectangular body",
      "Lean, robust limbs",
      "Long, low-set ears that hang folded close to the cheeks",
      "Ears that reach at least to the tip of the nose",
      "Noble head with a friendly, alert expression",
      "Medium-length tail carried low when relaxed",
      "Tail carried slightly upwards during action",
      "Smooth, rough and double-coat types",
      "Four traditional regional colour varieties",
    ],
  },

  temperament: {
    traits: [
      "Friendly and approachable",
      "Calm to lively temperament",
      "Passionate and determined scent hunter",
      "Persistent and focused on scent trails",
      "Untiring when working",
      "Independent when searching for game",
      "Intelligent and capable of learning",
      "Sensitive to harsh or impatient handling",
      "Generally steady rather than nervous or aggressive",
    ],

    // Editorial estimates on a 1–5 scale, not standardised behavioural test results.
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
        "High for a healthy adult. This working scent hound benefits from regular outdoor activity and opportunities to follow scents. Exercise needs vary with age, health and working drive.",

      minutesPerDay: null,

      activities: [
        "Daily walks in varied outdoor environments",
        "Supervised scent-tracking exercises",
        "Mantrailing and nose-work activities",
        "Tracking games and controlled search exercises",
        "Reward-based obedience practice",
        "Suitable agility exercises without excessive pressure",
        "Long-line exploration in safe areas",
      ],
    },

    grooming: {
      level:
        "Low to moderate. Coat care is generally straightforward, but the long, folded ears need particular attention.",

      brushing:
        "Brush occasionally to remove loose hair and keep the coat clean. The exact frequency can vary with the individual coat type and seasonal changes. Check the skin while grooming.",

      bathing:
        "Bathe when necessary using a dog-appropriate shampoo. Rinse thoroughly and dry the coat and ears carefully. Avoid excessive bathing unless advised by a veterinarian.",

      notes: [
        "Check the long, folded ears regularly because they cover the ear canals.",
        "Keep the ears clean and dry, and ask a veterinarian about suitable cleaning products.",
        "Seek veterinary advice for ear odour, redness, discharge, repeated head shaking or persistent scratching.",
        "Brush the coat occasionally and adjust grooming to the individual coat type.",
        "Trim nails when needed.",
        "Brush teeth regularly with dog-specific dental products.",
        "Check the paws after walks or outdoor scent activities.",
      ],
    },

    training: {
      difficulty:
        "Moderate to challenging for owners unfamiliar with scent hounds. The breed is intelligent and capable of learning, but its independent hunting work and strong interest in following scents require patient, consistent handling.",

      tips: [
        "Use calm, reward-based training and avoid harsh corrections.",
        "Keep training sessions clear, consistent and engaging.",
        "Begin recall training early and practise it in controlled environments.",
        "Use a lead or long line where wildlife or other distractions may trigger tracking behaviour.",
        "Include scent games and tracking activities to provide suitable mental work.",
        "Reward calm behaviour around people, dogs and everyday situations.",
        "Teach cooperative handling for ear checks, grooming and veterinary examinations.",
        "Build reliable everyday manners alongside activities that satisfy the dog's working instincts.",
      ],

      socialization:
        "Introduce the puppy gradually and positively to different people, calm dogs, handling, household sounds and outdoor environments. Reward relaxed behaviour and allow the dog to move away when uncomfortable. Continue socialisation and training into adulthood, with particular attention to calm lead manners and controlled responses to scents and wildlife.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: null,

      climates: [
        "Adaptable to ordinary temperate conditions with suitable shelter.",
        "Provide shade, fresh water and cooler exercise periods in hot weather.",
        "Adjust outdoor activity to the dog's age, health and weather conditions.",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate to the dog's life stage, body condition, activity level and veterinary needs.",

    feedingFrequency: {
      puppy:
        "Feed a complete puppy diet in age-appropriate meals. Adjust portions as the puppy grows and follow veterinary guidance and the food's feeding instructions.",

      adult:
        "Provide measured meals on a consistent schedule. Adjust the amount to body condition, activity and individual needs rather than relying on a fixed breed-wide portion.",

      senior:
        "Choose food and portions according to the older dog's body condition, activity and health. Ask a veterinarian about dietary changes if weight, mobility or medical needs change.",
    },

    guidelines:
      "Measure food portions and monitor body condition regularly. Keep fresh water available, include training treats in the daily food allowance and make dietary changes gradually unless a veterinarian advises otherwise. A dog doing regular scent work or hunting may have different energy requirements from a less active companion.",

    considerations: [
      "Adjust portions to age, activity and body condition.",
      "Maintain a healthy weight to support mobility and working ability.",
      "Provide fresh drinking water throughout the day.",
      "Count treats and chews as part of the daily food allowance.",
      "Use a complete diet suitable for the dog's life stage.",
      "Discuss persistent digestive changes or weight concerns with a veterinarian.",
    ],

    note:
      "These are general canine nutrition recommendations, not a breed-specific feeding prescription. Individual food requirements depend on activity, age, body condition and health.",
  },

  health: {
    overview:
      "A Swiss breed profile highlights the long, low-set ears as a particular care concern because they cover the ear canals and may increase the risk of recurring ear problems. It also notes that the historical breeding population was relatively narrow and that careful selection of breeding pairs remains important. The profile does not identify other recurring breed-specific health problems. This information is not a veterinary prevalence study and does not guarantee the health of an individual dog.",

    commonConditions: [
      "Ear-canal inflammation or recurring ear trouble may be a concern because the long, folded ears cover the ear canals.",
    ],

    preventiveCare: [
      "Arrange routine veterinary examinations and age-appropriate preventive care.",
      "Give particular attention to regular checks of the long, folded ears.",
      "Seek veterinary advice promptly for persistent ear irritation, odour, redness or discharge.",
      "Maintain a healthy body condition and suitable daily activity.",
      "Ask breeders about the health and longevity of their breeding dogs and the care taken when selecting breeding pairs.",
      "Discuss any persistent mobility, skin, digestive or behavioural changes with a veterinarian.",
    ],

    recommendedScreenings: [],

    dentalCare:
      "Brush the teeth regularly with dog-specific toothpaste and a suitable toothbrush. Have the mouth checked during routine veterinary examinations, especially if there is bad breath, discomfort or difficulty eating.",

    earCare:
      "The long, folded ears need regular attention because they cover the ear canals. Check them for redness, odour, discharge or scratching. Keep them dry and clean only as advised by a veterinarian. Do not insert cotton buds or other objects into the ear canal.",

    skinCare:
      "Check the skin during routine grooming for redness, irritation, parasites or unusual hair loss. Seek veterinary advice if itching or skin changes persist.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Active owners who enjoy outdoor activities",
      "People interested in scent work, tracking or mantrailing",
      "Owners able to provide regular exercise and mental enrichment",
      "People who can train patiently and consistently",
      "Households prepared to manage a strong interest in following scents",
      "Owners willing to give regular attention to ear care",
    ],

    notIdealFor: [
      "People looking for a low-activity dog",
      "Owners who expect dependable off-lead recall in open areas",
      "Households unable to provide regular outdoor activity and enrichment",
      "People unwilling to manage scent-driven hunting behaviour",
      "Owners who cannot provide regular checks of the long, folded ears",
    ],
  },

  funFacts: [
    "The breed was developed for hunting in smaller and more enclosed Swiss hunting areas.",
    "Its breed club was founded on 1 June 1905.",
    "The FCI definitively recognised the breed in 1954.",
    "The four traditional varieties are Bernese, Jura, Lucerne and Schwyz.",
    "The 2015 standard brought the four colour varieties together under one breed.",
    "The breed is used for tracking wounded game as well as ordinary scent hunting.",
  ],

  faq: [
    {
      question: "Where does the Schweizerischer Niederlaufhund come from?",
      answer:
        "The Schweizerischer Niederlaufhund comes from Switzerland. It was developed around the turn of the twentieth century for hunting in smaller areas where the larger Swiss Hounds were considered too fast and wide-ranging.",
    },
    {
      question: "Is the Schweizerischer Niederlaufhund the same as the Swiss Hound?",
      answer:
        "No. The Schweizerischer Niederlaufhund is the Small Swiss Hound, a shorter-legged breed. The larger Schweizer Laufhund is a separate breed with a different FCI standard.",
    },
    {
      question: "What are the four varieties of the Small Swiss Hound?",
      answer:
        "The traditional varieties are Bernese, Jura, Lucerne and Schwyz. They are distinguished mainly by their recognised coat colours and patterns and are now grouped within one breed.",
    },
    {
      question: "How tall is a Schweizerischer Niederlaufhund?",
      answer:
        "The breed standard gives a height of 35–43 cm for males and 33–40 cm for females. It also states a tolerance of ±2 cm.",
    },
    {
      question: "How much does a Schweizerischer Niederlaufhund weigh?",
      answer:
        "A Swiss breed profile gives approximate upper weights of around 20 kg for males and 15 kg for females. These are approximate maximum figures, not complete weight ranges.",
    },
    {
      question: "What is the temperament of the Small Swiss Hound?",
      answer:
        "It is generally friendly, with a temperament that can range from calm to lively. It is also a passionate and determined scent hunter that can work independently when following a trail.",
    },
    {
      question: "How much exercise does this breed need?",
      answer:
        "It needs regular outdoor activity and opportunities to use its nose. Walks, tracking games and mantrailing can provide useful physical and mental activity. A single daily exercise duration is not established by the sources reviewed.",
    },
    {
      question: "Does the Schweizerischer Niederlaufhund need much grooming?",
      answer:
        "Coat care is generally straightforward, but the long, folded ears need regular attention. Check them for redness, odour or discharge and seek veterinary advice if problems appear.",
    },
    {
      question: "Are there any known health concerns?",
      answer:
        "The long, folded ears can cover the ear canals and may increase the risk of recurring ear problems. The breed profile also notes the importance of careful breeding selection because the historical breeding population was relatively narrow.",
    },
    {
      question: "How long does a Schweizerischer Niederlaufhund live?",
      answer:
        "A Swiss breed profile gives an expected lifespan of 14–16 years with suitable care and nutrition. Individual lifespan can vary.",
    },
  ],

  references: [
    "fci-schweizer-niederlaufhund-standard-60",
    "fci-schweizer-niederlaufhund-nomenclature-60",
    "skg-schweizer-niederlaufhund-profile-2024",
    "wikimedia-schwyzer-niederlaufhund-photo",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-schweizer-niederlaufhund-nomenclature-60",
          role: "verified",
          locator:
            "Breed nomenclature: German, English and French breed names",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "Alternate names follow the official German, English and French breed names.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The breed standards and breed profiles reviewed do not establish a separate scientific name for this dog breed.",
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
      verifiedOn: "2026-11-07",
      note: "Uses the FCI classification.",
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
      ],
      verifiedOn: "2026-11-07",
      note: null,
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The sources identify Switzerland as the country of origin but do not establish one specific region as the breed's origin.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-schweizer-niederlaufhund-standard-60",
          role: "verified",
          locator:
            "Utilization, historical summary, general appearance and behaviour/temperament",
        },
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "verified",
          locator:
            "Page 18: breed history, purpose, varieties and current scent-work activities",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "Descriptions are original summaries of the breed's documented history, working purpose and characteristics.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schweizer-niederlaufhund-standard-60",
          role: "verified",
          locator:
            "General appearance, ears, tail, coat types, colours and size",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "Physical characteristics follow FCI Standard No. 60. Measurements and coat descriptions retain the standard's published units and categories.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schweizer-niederlaufhund-standard-60",
          role: "verified",
          locator:
            "Size: males 35–43 cm, females 33–40 cm; tolerance ±2 cm",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "The stored ranges reproduce the published male and female ranges. The standard separately states a tolerance of ±2 cm; no additional limits have been calculated.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "verified",
          locator:
            "Page 18: approximate upper weights, females up to about 15 kg and males up to about 20 kg",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "The source gives approximate upper weights only. Minimum weights are not supplied and have not been inferred.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "verified",
          locator:
            "Page 18: expected lifespan of 14–16 years with suitable care and nutrition",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "This is the expected lifespan reported in a breed profile, not a population-based survival study.",
    },

    "physical.sheddingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The sources describe coat types and basic grooming but do not establish a reliable breed-specific shedding level.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A reliable breed-specific drooling assessment was not found.",
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
          locator: "Page 18: character and temperament",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "Breed-level temperament descriptions do not guarantee the behaviour of an individual dog.",
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
          locator: "Page 18: character, hunting drive and family compatibility",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial estimates on a 1–5 scale based on the documented working role and temperament. They are not results from standardised behavioural testing.",
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "cited",
          locator:
            "Page 18: exercise, scent work, ear care and training guidance",
        },
      ],
      verifiedOn: null,
      note:
        "Care recommendations combine breed-informed activity and handling suggestions with general dog-care guidance.",
    },

    "care.exercise.level": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-schweizer-niederlaufhund-standard-60",
          role: "cited",
          locator:
            "Utilization and behaviour: persistent scent hunting and tracking work",
        },
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "cited",
          locator: "Page 18: hunting activity, tracking and outdoor exercise",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial activity-level assessment for a healthy adult. Individual needs vary with age, health and working activity.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The reviewed sources do not prescribe a single daily exercise duration for this breed.",
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
          locator:
            "Page 18: normal coat care and the need for particular attention to the ears",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "The coat descriptions and emphasis on ear care are source-backed. Bathing, nail and dental instructions are general care advice.",
    },

    "care.training": {
      reliability: "general_guidance",
      sources: [
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "cited",
          locator:
            "Page 18: calm, consistent and patient handling; harshness is counterproductive",
        },
      ],
      verifiedOn: null,
      note:
        "Training suggestions are breed-informed guidance and should be adapted to the individual dog.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The sources reviewed do not establish a universal apartment-suitability rating.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The sources reviewed do not establish a universal house-with-yard suitability rating.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A reliable breed-wide tolerance for time alone was not established.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General canine nutrition advice. No breed-specific feeding quantity or diet prescription was established.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "verified",
          locator:
            "Page 18: breeding population, ear-related concern and health overview",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "Health information is limited to concerns described in the breed profile. It is not a diagnosis or a prevalence estimate.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "verified",
          locator:
            "Page 18: long ears cover the ear canals and may increase the risk of recurring ear trouble",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "The listed concern is a potential ear-health risk, not a claim that the condition is present in every dog or has a known prevalence.",
    },

    "health.recommendedScreenings": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The sources reviewed do not establish a breed-specific health-screening panel.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General preventive veterinary care advice, with additional attention to ear checks.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine dental-care advice.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "cited",
          locator:
            "Page 18: particular attention to ear care due to long, low-set ears",
        },
      ],
      verifiedOn: null,
      note:
        "The need for extra attention is breed-specific; cleaning methods are general guidance and should follow veterinary advice.",
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
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "cited",
          locator:
            "Page 18: family compatibility, hunting purpose and activity requirements",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial lifestyle guidance based on the breed's working drive and documented temperament. It is not a validated suitability test.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A universal first-time-owner rating is not established and depends on the owner's experience and the individual dog.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Suitability for senior owners depends on the person's circumstances and the individual dog's needs.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A universal apartment-living rating was not established by the sources reviewed.",
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
          locator:
            "Definitive recognition date, breed classification and varieties",
        },
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "verified",
          locator:
            "Page 18: club history and consolidation of the four colour varieties",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Historical facts are paraphrased from breed documentation.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-schweizer-niederlaufhund-standard-60",
          role: "verified",
          locator:
            "Origin, classification, history, utilization, temperament, coat and size",
        },
        {
          id: "fci-schweizer-niederlaufhund-nomenclature-60",
          role: "verified",
          locator:
            "Official breed name, recognition status and four varieties",
        },
        {
          id: "skg-schweizer-niederlaufhund-profile-2024",
          role: "verified",
          locator:
            "Page 18: weight, lifespan, health, temperament and care",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "Answers distinguish official standard information from approximate breed-profile figures and general care advice.",
    },
  },

  updatedOn: "2026-11-07",
};
