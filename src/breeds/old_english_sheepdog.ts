import type { Breed } from "../schema/breed.types";

export const old_english_sheepdog: Breed = {
  slug: "old-english-sheepdog",
  name: "Old English Sheepdog",
  scientificName: null,

  alternateNames: [
    "OES",
    "Bobtail",
    "Old English Sheep Dog",
    "Chien de Berger Anglais Ancestral",
    "Altenglischer Schäferhund",
  ],

  group: "FCI Group 1 — Sheepdogs and Cattledogs (except Swiss Cattledogs); Section — Sheepdogs",

  origin: {
    country: "Great Britain",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Old_English_Sheepdog_%28dog%29.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Old_English_Sheepdog_(dog).jpg",
      title: "Old English Sheepdog (dog).jpg",
      description: "An Old English Sheepdog photographed on 9 September 2021.",
      creator: "DestinationFearFan",
      uploader: "DestinationFearFan",
      capturedOn: "2021-09-09",
      uploadedOn: "2021-09-10",
      width: 1200,
      height: 1600,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by DestinationFearFan, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-25",
    },
  ],

  overview: {
    summary:
      "The Old English Sheepdog is a large, sturdy herding breed recognised for its abundant shaggy coat, distinctive rolling gait and adaptable, intelligent nature. Originally used for moving livestock, it needs regular activity, companionship and consistent coat care. Its loud, ringing bark and substantial grooming needs are important considerations for prospective owners.",

    description:
      "The Old English Sheepdog has a compact, muscular build beneath a profuse double coat. Its coat is shaggy rather than curly, with a dense undercoat that provides insulation and weather protection when maintained properly. Breed-standard colours include shades of grey, grizzle, blue and blue merle, with or without white markings. The head is heavily coated, and the hair can obscure the eyes if left unmanaged. Despite its substantial appearance, the breed is agile and capable of purposeful movement. It was developed for demanding livestock work and generally benefits from regular exercise, training and activities that engage its mind. Many are sociable and adaptable companions, but individuals vary, and a dog's behaviour depends on its temperament, upbringing, health and environment. Owners should be prepared for thorough grooming and should not assume that a shaggy coat can be maintained with only occasional brushing.",

    history:
      "The Old English Sheepdog developed in Great Britain as a working dog associated with herding and driving livestock. Its sturdy body, shaggy protective coat and capable movement suited it to outdoor work. Over time, the breed became established in dog shows and as a companion as well as retaining its historical connection to farm work. The name is traditional; it does not mean that the breed is simply an ancient type of sheepdog unchanged over time.",

    originalPurpose:
      "Herding and driving livestock, including helping move animals between grazing areas and markets.",

    currentRoles: [
      "Family companion",
      "Herding activities and trials",
      "Obedience and rally",
      "Agility and other suitable canine sports",
      "Outdoor walking and hiking companion",
      "Alert watchdog",
      "Conformation showing",
    ],
  },

  physical: {
    sizeCategory: "Large, compact and muscular",

    height: {
      unit: "in",
      male: { min: 22, max: null },
      female: { min: 21, max: null },
    },

    // The breed profile gives one overall weight range rather than
    // separate male and female ranges. The same published range is retained
    // in both schema slots; it is not a claim that sex-specific ranges match.
    weight: {
      unit: "lb",
      male: { min: 60, max: 100 },
      female: { min: 60, max: 100 },
    },

    lifespanYears: {
      min: 10,
      max: 12,
    },

    coatType:
      "Profuse double coat with a hard-textured, shaggy outer coat and a dense undercoat that provides weather protection when maintained.",

    coatLength: "Long and shaggy, with especially abundant coat over the head and hindquarters",

    coatColors: [
      "Grey, with or without white markings",
      "Grizzle, with or without white markings",
      "Blue, with or without white markings",
      "Blue merle, with or without white markings",
      "White markings on a coloured ground or coloured markings on a white ground, as described by the breed standard",
    ],

    sheddingLevel:
      "Moderate to heavy; loose undercoat and outer-coat hair can accumulate, particularly when the coat is not brushed thoroughly.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Profuse shaggy double coat",
      "Compact, muscular body",
      "Topline that is lower at the withers than at the loin",
      "Head and skull heavily covered with hair",
      "Characteristic rolling movement from behind",
      "Loud, ringing bark",
      "Coat colours in shades of grey, grizzle, blue or blue merle, with or without white",
    ],
  },

  temperament: {
    traits: [
      "Intelligent and adaptable",
      "Often sociable with familiar people",
      "Capable and agile despite its substantial coat",
      "Alert to activity around its home",
      "Can be playful and energetic",
      "May be vocal when alerting",
      "Benefits from consistent training and household routines",
      "Individual sociability and behaviour vary",
    ],

    // Editorial estimates on a 1–5 scale, not standardised test results.
    scores: {
      affection: 4,
      withChildren: 4,
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
      level: "Moderate to high",

      // Practical editorial estimate for a healthy adult, not an official
      // breed-standard requirement.
      minutesPerDay: {
        min: 60,
        max: 90,
      },

      activities: [
        "Daily walks suited to age and fitness",
        "Play and supervised outdoor exploration",
        "Reward-based obedience training",
        "Herding activities where available and appropriate",
        "Agility, rally or other suitable canine sports",
        "Food puzzles and problem-solving games",
        "Calm-lead walking and recall practice",
      ],
    },

    grooming: {
      level: "High",

      brushing:
        "Brush and comb the coat thoroughly at least weekly, working in sections down to the skin rather than only smoothing the surface. Dense undercoat can mat close to the skin, especially behind the ears, around the neck, beneath the legs and on the hindquarters. Many pet owners need more frequent sessions or professional grooming to keep the coat comfortable and manageable. A shorter pet trim can reduce the amount of coat to maintain, but still requires regular care.",

      bathing:
        "Bathe when the coat is dirty or needs a refresh, using a dog-appropriate shampoo and rinsing thoroughly. The coat can take time to dry, so allow sufficient drying time and make sure the undercoat is not left damp. Ask a professional groomer or veterinarian for advice if the coat is heavily matted; do not pull painfully at mats.",

      notes: [
        "Check regularly for mats close to the skin, particularly in dense or feathered areas.",
        "Keep the hair around the eyes managed so it does not obstruct vision.",
        "Check the skin during grooming for redness, irritation, parasites or unusual lumps.",
        "Inspect and trim nails regularly.",
        "Check ears for redness, odour or discharge.",
        "Brush teeth regularly with dog-specific dental products.",
        "Plan grooming sessions and budget for professional help if needed.",
      ],
    },

    training: {
      difficulty:
        "Moderate. The breed is intelligent and adaptable, but its size, activity level and alert barking make early training and consistent household rules important.",

      tips: [
        "Use reward-based training with clear cues and consistent expectations.",
        "Teach loose-lead walking early because the adult dog is large and strong.",
        "Practise recall in safe, controlled settings before adding distractions.",
        "Reward calm behaviour and appropriate alerting to help manage excessive barking.",
        "Introduce grooming, brushing and body handling gradually and positively.",
        "Provide suitable activities that engage the dog's mind as well as its body.",
        "Keep sessions varied and avoid harsh corrections.",
      ],

      socialization:
        "Introduce puppies gradually and positively to people, dogs, handling, grooming equipment, household sounds and everyday environments. Reward calm greetings and practise settling around visitors. Supervise interactions with children and unfamiliar animals, and continue training as the dog matures.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Cool and temperate conditions",
        "Cold weather when suitable shelter and individual comfort are provided",
        "Warm weather with shade, ventilation, fresh water and exercise scheduled for cooler periods",
      ],

      aloneTimeTolerance:
        "Individual tolerance varies. Build alone-time gradually and provide enrichment; avoid routinely leaving a companion-oriented dog alone for long periods without preparation.",
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced diet appropriate to the dog's life stage, body condition, health and activity level.",

    feedingFrequency: {
      puppy:
        "Feed age-appropriate puppy food in several measured meals according to the product guidance and advice from a veterinarian. Adjust portions as the puppy grows.",
      adult:
        "Provide measured meals on a consistent schedule, adjusting the amount to maintain a healthy body condition and suit the dog's activity level.",
      senior:
        "Choose food and meal portions according to the dog's age, body condition, dental comfort, activity and health. Ask a veterinarian whether a senior-specific diet is appropriate.",
    },

    guidelines:
      "Choose a nutritionally complete food suited to the dog's life stage and individual needs. Use the product's feeding guide as a starting point, then adjust portions based on body condition, weight trend and activity. Keep fresh water available. Introduce major diet changes gradually and seek veterinary guidance for persistent digestive problems or unexplained weight changes.",

    considerations: [
      "Monitor body condition and adjust portions when activity or weight changes.",
      "Account for training treats and snacks in daily food intake.",
      "Provide fresh water at all times.",
      "Use food suitable for age, health and activity level.",
      "Discuss persistent digestive issues or special dietary needs with a veterinarian.",
    ],

    note:
      "There is no single portion size that suits every Old English Sheepdog. Individual needs vary with age, metabolism, activity, body condition and health.",
  },

  health: {
    overview:
      "Old English Sheepdogs can be affected by inherited and acquired health conditions. Breed-club and kennel-club resources recommend health screening for breeding dogs, including hip evaluation, eye examination, thyroid assessment and certain DNA tests. Other tests may be recommended for cardiac health, hearing and additional inherited conditions. These recommendations identify areas worth discussing with a breeder and veterinarian; they do not mean that every dog will develop these conditions. A screening registry number by itself does not prove that every test result is normal, so review the actual results.",

    commonConditions: [
      "Hip dysplasia",
      "Eye conditions, including progressive retinal atrophy and hereditary cataracts",
      "Autoimmune thyroiditis",
      "Exercise-induced collapse",
      "Multiple drug sensitivity associated with the MDR1 gene",
      "Cardiac anomalies",
      "Congenital deafness",
      "Cerebellar degeneration",
      "Primary ciliary dyskinesia",
    ],

    preventiveCare: [
      "Arrange regular veterinary checks and follow a vaccination and parasite-prevention plan suited to the dog.",
      "Ask the breeder for verifiable hip and eye screening results for the parents.",
      "Discuss thyroid evaluation and relevant DNA tests with a veterinarian or responsible breeder.",
      "Monitor mobility, exercise tolerance and general behaviour; seek veterinary advice if changes appear.",
      "Check the coat and skin thoroughly during grooming, including beneath the dense undercoat.",
      "Maintain a healthy body condition with suitable food and regular activity.",
      "Brush teeth regularly and arrange veterinary dental care when needed.",
      "Ask a veterinarian about any screening recommended for the dog's age, family history and health.",
    ],

    recommendedScreenings: [
      "Hip dysplasia evaluation",
      "Eye examination by a board-certified veterinary ophthalmologist",
      "Autoimmune thyroiditis evaluation",
      "Exercise-induced collapse (EIC) DNA test",
      "Multiple drug sensitivity (MDR1) DNA test",
      "Cardiac evaluation — optional recommendation from the parent club",
      "BAER hearing evaluation for congenital deafness — optional recommendation",
      "DNA testing for cerebellar degeneration — optional recommendation",
      "DNA testing for primary ciliary dyskinesia — optional recommendation",
    ],

    dentalCare:
      "Brush the teeth regularly with toothpaste designed for dogs. Arrange veterinary dental checks and seek advice for gum redness, persistent bad breath, oral pain or difficulty eating.",

    earCare:
      "Check the ears routinely for redness, odour, discharge or discomfort. Clean only as advised by a veterinarian and seek advice if signs of irritation or infection appear.",

    skinCare:
      "The dense coat can hide skin changes, so inspect the skin during thorough brushing. Look for persistent itching, redness, unusual hair loss, lumps or parasites, and consult a veterinarian if changes persist.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Households prepared for substantial, regular coat care",
      "People who can provide daily activity and ongoing training",
      "Owners interested in herding, obedience or other suitable dog sports",
      "People who want an involved companion and can provide regular interaction",
      "Households that can manage a large dog and its alert barking",
    ],

    notIdealFor: [
      "People who want a low-maintenance coat",
      "Households unable to provide regular grooming or budget for professional grooming",
      "People who need a consistently quiet dog without training to manage alert barking",
      "Owners who cannot provide daily activity and companionship",
      "People who are not prepared to train and safely handle a large, strong dog",
    ],
  },

  funFacts: [
    "The breed is associated with herding and driving livestock in Great Britain.",
    "The shaggy coat is a defining feature, but its texture and condition matter as much as its volume.",
    "The breed standard describes a distinctive rolling movement when viewed from behind.",
    "The traditional name is also commonly shortened to OES.",
    "Despite its substantial appearance, the breed is described as agile and capable of purposeful movement.",
  ],

  faq: [
    {
      question: "How big does an Old English Sheepdog get?",
      answer:
        "The breed standard gives a minimum height of 22 inches for males and 21 inches for females. The AKC breed profile lists a general weight range of 60–100 pounds, without separating that range by sex.",
    },
    {
      question: "How long does an Old English Sheepdog usually live?",
      answer:
        "The published breed profile lists a life expectancy of 10–12 years. Individual lifespan varies with genetics, health, body condition and care.",
    },
    {
      question: "Does an Old English Sheepdog need a lot of grooming?",
      answer:
        "Yes. Its profuse double coat needs thorough brushing and combing down to the skin, usually at least weekly and often more frequently depending on coat condition. Some owners use professional grooming or a shorter pet trim.",
    },
    {
      question: "What colours are recognised in the breed standard?",
      answer:
        "The standard describes shades of grey, grizzle, blue and blue merle, with or without white markings. It treats brown and fawn shades as objectionable rather than preferred colours.",
    },
    {
      question: "Is the Old English Sheepdog good with children?",
      answer:
        "Some individuals are patient and sociable, but suitability depends on the dog's temperament, training and the children's behaviour. Supervise interactions, teach children respectful handling and provide the dog with a safe place to rest.",
    },
    {
      question: "What health tests should I ask a breeder about?",
      answer:
        "Ask for verifiable hip and eye screening results, thyroid evaluation and relevant DNA tests such as exercise-induced collapse and MDR1. Cardiac, hearing and other genetic tests may also be recommended. A veterinarian can help interpret actual results.",
    },
    {
      question: "Is an Old English Sheepdog suitable for apartment living?",
      answer:
        "There is no universal answer. Suitability depends on available space, daily activity, barking management, grooming routines, training and the individual dog. This record does not assign a blanket apartment-suitability rating.",
    },
  ],

  references: [
    "fci-old-english-sheepdog-standard",
    "american-kennel-club-old-english-sheepdog-standard",
    "american-kennel-club-old-english-sheepdog",
    "old-english-sheepdog-club-of-america-health-registries",
    "wikimedia-old-english-sheepdog-destinationfearfan",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-old-english-sheepdog-standard",
          role: "verified",
          locator: "Breed name and classification",
        },
        {
          id: "american-kennel-club-old-english-sheepdog",
          role: "cited",
          locator: "Breed profile and common abbreviation",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Includes the standard breed name and commonly used short or translated names.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A breed-specific scientific name was not established in the reviewed kennel-club and breed-standard sources.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-old-english-sheepdog-standard",
          role: "verified",
          locator: "FCI classification — Group 1, Section Sheepdogs",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "FCI classification as a sheepdog.",
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-old-english-sheepdog-standard",
          role: "verified",
          locator: "Country of origin",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The standard identifies Great Britain as the country of origin.",
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A single specific region of origin was not established by the reviewed standard.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-old-english-sheepdog-standard",
          role: "verified",
          locator: "Breed classification and official standard context",
        },
        {
          id: "american-kennel-club-old-english-sheepdog-standard",
          role: "verified",
          locator: "General appearance, coat, colour, gait and temperament",
        },
        {
          id: "american-kennel-club-old-english-sheepdog",
          role: "cited",
          locator: "About the Breed and care guidance",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Original summaries of the documented working role, appearance and breed characteristics.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-old-english-sheepdog-standard",
          role: "verified",
          locator: "General appearance, size, coat and colour",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Covers standard-described appearance, coat and colour. Height, weight and lifespan use more specific evidence claims below.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-old-english-sheepdog-standard",
          role: "verified",
          locator: "Size, Proportion, Substance — height",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "The standard publishes 22 inches and upward for males and 21 inches and upward for females. The source's first-listed unit, inches, is retained.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-old-english-sheepdog",
          role: "verified",
          locator: "Average sizes and life expectancy — weight",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "The breed profile gives a general range of 60–100 pounds, not sex-specific ranges. The schema requires separate sex slots, so the same published overall range is repeated in both; it must not be interpreted as a claim that the sexes have identical weight distributions.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-old-english-sheepdog",
          role: "verified",
          locator: "Average sizes and life expectancy",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The profile lists a life expectancy of 10–12 years.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A sufficiently specific, reliable breed-level drooling assessment was not established in the reviewed sources.",
    },

    temperament: {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-old-english-sheepdog-standard",
          role: "verified",
          locator: "Temperament",
        },
        {
          id: "american-kennel-club-old-english-sheepdog",
          role: "cited",
          locator: "Breed traits and characteristics",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Traits summarise the breed-standard description and breed profile; individual dogs may differ.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-old-english-sheepdog",
          role: "cited",
          locator: "Breed Traits and Characteristics",
        },
        {
          id: "american-kennel-club-old-english-sheepdog-standard",
          role: "cited",
          locator: "Temperament",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates for application display. These are not standardised behavioural test results or population statistics.",
    },

    care: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-old-english-sheepdog",
          role: "verified",
          locator: "What to Expect When Caring for an Old English Sheepdog",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Care advice is an original summary of breed-care guidance. The exact daily exercise duration is marked separately as an estimate.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-old-english-sheepdog",
          role: "cited",
          locator: "Exercise",
        },
      ],
      verifiedOn: null,
      note:
        "60–90 minutes is a practical editorial estimate for a healthy adult, not a number published by the breed standard.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The reviewed sources do not establish a universal yes/no answer for apartment suitability.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-old-english-sheepdog",
          role: "cited",
          locator: "Nutrition",
        },
      ],
      verifiedOn: null,
      note:
        "General feeding guidance. Exact portions and feeding schedules depend on the individual dog's age, body condition, food and health.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-old-english-sheepdog",
          role: "verified",
          locator: "Health and recommended health tests",
        },
        {
          id: "old-english-sheepdog-club-of-america-health-registries",
          role: "verified",
          locator: "CHIC health testing requirements and optional tests",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Conditions and screening recommendations are presented as risks and tests to discuss, not as a claim that every dog is affected or that prevalence is known.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-old-english-sheepdog",
          role: "cited",
          locator: "Breed traits, grooming, exercise and training",
        },
      ],
      verifiedOn: null,
      note:
        "Practical editorial assessment of household needs, not a guarantee of individual behaviour.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The reviewed sources do not establish a universal yes/no recommendation for all first-time owners.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Family suitability varies with the individual dog, training and children's behaviour; a universal boolean is not asserted.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Suitability depends on the owner's circumstances and the individual dog's needs; a universal yes/no value was not established.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A universal apartment-living rating was not established in the reviewed sources.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-old-english-sheepdog-standard",
          role: "verified",
          locator: "General appearance and gait",
        },
        {
          id: "fci-old-english-sheepdog-standard",
          role: "cited",
          locator: "Classification and origin",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Short facts based on the breed standard and classification.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-old-english-sheepdog",
          role: "verified",
          locator: "Breed profile, size, lifespan, grooming and health",
        },
        {
          id: "american-kennel-club-old-english-sheepdog-standard",
          role: "verified",
          locator: "Size, coat, colour and temperament",
        },
        {
          id: "old-english-sheepdog-club-of-america-health-registries",
          role: "cited",
          locator: "Recommended health screenings",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Answers are original summaries. The overall weight range is explicitly described as not sex-specific, and apartment suitability is not presented as a universal fact.",
    },
  },

  updatedOn: "2026-10-25",
};
