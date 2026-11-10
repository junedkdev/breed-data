import type { Breed } from "../schema/breed.types";

export const icelandic_sheepdog: Breed = {
  slug: "icelandic-sheepdog",
  name: "Icelandic Sheepdog",
  scientificName: null,

  alternateNames: [
    "Íslenskur fjárhundur",
    "Iceland Dog",
    "Icelandic Spitz",
    "Islandsk Farehund",
  ],

  group: "Spitz and Primitive Types; Nordic Watchdogs and Herders",

  origin: {
    country: "Iceland",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Icelandic_Sheepdogs.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Icelandic_Sheepdogs.jpg",
      title: "Icelandic Sheepdogs.jpg",
      description: "Two Icelandic Sheepdogs photographed outdoors.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2017-12-09",
      uploadedOn: "2018-01-29",
      width: 2554,
      height: 1928,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, CC BY-SA 4.0. Changes, if any, must be indicated. Adapted versions must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10",
    },
  ],

  overview: {
    summary:
      "The Icelandic Sheepdog, celebrated as Iceland's native canine, is an agile Nordic spitz renowned for its cheerful demeanor, erect ears, and bushy tail curled over the spine. Developed to herd livestock across volcanic pastures, this devoted, vocal companion combines working grit with a gentle, people-focused household spirit.",

    description:
      "Slightly below medium stature, the Icelandic Sheepdog presents a sturdy rectangular frame clothed in a weather-resistant double coat with erect, highly mobile ears and a curled tail. The breed occurs in distinct short-haired and long-haired coat varieties, both bearing an insulating undercoat that easily deflects subarctic rain, wind, and snow. A cheerful, curious expression reflects its cooperative nature and keen sensory awareness. Historically trusted by Icelandic farmers to round up scattered sheep, cattle, and horses, it works with nimble agility and a melodious voice that guides stock through rugged volcanic terrain. In domestic settings, it forms devoted attachments to family members of all ages, greeting visitors with inquisitive enthusiasm. Because of its keen alert reflex and vocal working heritage, early guidance and structured daily activities are recommended to channel its natural energy.",

    history:
      "Arriving with Norse Viking settlers between AD 870 and 930, the ancestors of the Icelandic Sheepdog adapted over a millennium of geographical isolation to Iceland's unforgiving climate and rural farming practices. Developing as an indispensable pastoral worker, the dog tracked stray livestock across lava fields and sounded alarms to deter predatory birds from young lambs. Epidemics and natural disasters decimated the population in the nineteenth and twentieth centuries, prompting rigorous preservation programs by Icelandic and international breeders to secure the breed's genetic foundation. Recognized worldwide as a cherished Nordic herding spitz, the breed continues to serve as an enduring symbol of Iceland's agricultural heritage.",

    originalPurpose:
      "Herding, gathering, and driving sheep, cattle, and horses across Icelandic farmland, while alerting farmers to approaching visitors or threats.",

    currentRoles: [
      "Devoted family companion",
      "Herding trials and practical livestock work",
      "Agility, obedience, and rally sports",
      "Scent work and tracking",
      "Active hiking and outdoor companion",
      "Farm and household alert watchdog",
    ],
  },

  physical: {
    sizeCategory: "Slightly below medium size; sturdy and rectangular",

    height: {
      unit: "cm",
      male: { min: 46, max: 46 },
      female: { min: 42, max: 42 },
    },

    weight: {
      unit: "lb",
      male: { min: 30, max: 30 },
      female: { min: 25, max: 25 },
    },

    lifespanYears: {
      min: 12,
      max: 14,
    },

    coatType:
      "Thick, weather-resistant double coat with a soft, dense undercoat and a coarser outer coat.",

    coatLength:
      "Short-haired and long-haired varieties; both have a dense undercoat.",

    coatColors: [
      "Fawn in shades ranging from cream to reddish brown, with white markings",
      "Red in shades ranging from cream to reddish brown, with white markings",
      "Grey-shaded, with white markings",
      "Chocolate brown, with white markings",
      "Black, with white markings",
      "Pied patterns with coloured patches on a white background, where the coloured patches predominate",
    ],

    sheddingLevel:
      "Moderate to heavy. The double coat sheds throughout the year, with heavier seasonal shedding.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Erect, mobile ears",
      "Bushy tail curled over the back",
      "Rectangular body outline, longer than the height at the withers",
      "Thick, weather-resistant double coat",
      "Short-haired and long-haired coat varieties",
      "White markings accompanying the main coat colour",
      "Agile movement suited to traditional herding work",
    ],
  },

  temperament: {
    traits: [
      "Friendly and people-oriented",
      "Cheerful and playful",
      "Alert to unfamiliar sounds and visitors",
      "Curious and inquisitive",
      "Confident, with a generally gentle manner",
      "Lively and agile",
      "Naturally vocal, particularly when alerting or working",
      "Often keen to participate in training and family activities",
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: 3,
      independence: 3,
      trainability: 4,
      barking: 5,
      energy: 4,
    },
  },

  care: {
    exercise: {
      level: "Moderate to high",

      minutesPerDay: {
        min: 45,
        max: 90,
      },

      activities: [
        "Daily walks and outdoor exploration",
        "Play sessions with the household",
        "Reward-based obedience training",
        "Herding activities where available and appropriate",
        "Agility, rally or other suitable canine sports",
        "Tracking and scent-based games",
        "Food puzzles and other problem-solving activities",
      ],
    },

    grooming: {
      level: "Moderate; higher during seasonal shedding",

      brushing:
        "Brush at least weekly to remove loose hair and help prevent tangles. Brush more frequently during heavier shedding periods; a slicker brush or metal comb can help work through the coat. Check the coat down to the undercoat rather than brushing only the surface.",

      bathing:
        "Bathe when needed to remove dirt or odour, using a dog-appropriate shampoo and rinsing thoroughly. Avoid unnecessarily frequent bathing and dry the coat well after washing or getting wet.",

      notes: [
        "Expect increased loose hair during seasonal shedding.",
        "Check for tangles behind the ears, around the neck and in feathered areas of the longer coat.",
        "Inspect the coat and skin after outdoor activity.",
        "Trim nails regularly so they do not become uncomfortable.",
        "Check the ears routinely for redness, odour or discharge.",
        "Brush the teeth regularly with dog-specific dental products.",
      ],
    },

    training: {
      difficulty:
        "Generally responsive to training, but consistent practice is important because the breed is active, alert and vocal.",

      tips: [
        "Use reward-based methods and short, engaging training sessions.",
        "Teach calm behaviour as well as obedience cues.",
        "Practise recall in controlled settings before adding outdoor distractions.",
        "Reward quiet behaviour and appropriate alerting to help manage excessive barking.",
        "Introduce lead skills, handling and household routines from an early age.",
        "Provide suitable activities that use the dog's intelligence and energy.",
        "Avoid harsh corrections; use clear cues, repetition and rewards.",
      ],

      socialization:
        "Introduce puppies gradually and positively to different people, dogs, sounds, surfaces and everyday environments. Reward calm greetings and practise settling around visitors. Continue social learning as the dog matures, and supervise interactions with children and unfamiliar animals.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Cool and temperate climates",
        "Cold conditions when suitable shelter, water and individual comfort are provided",
        "Warmer conditions with shade, ventilation, fresh water and exercise scheduled around cooler periods",
      ],

      aloneTimeTolerance:
        "Often enjoys being involved in household activity and may struggle if routinely left alone for long periods. Build alone-time tolerance gradually and provide suitable enrichment.",
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced diet appropriate to the dog's life stage, body condition, health and activity level.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Choose a nutritionally complete diet suited to the dog's life stage and individual needs. Follow the food manufacturer's feeding guidance as a starting point, then adjust portions according to body condition, weight trend and activity. Keep fresh water available. Treats should be accounted for as part of daily intake, and significant diet changes should be introduced gradually.",

    considerations: [
      "Monitor body condition and adjust portions when activity or weight changes.",
      "Account for training treats and snacks in daily food intake.",
      "Provide fresh water at all times.",
      "Use a diet appropriate to age, health and activity level.",
      "Consult a veterinarian for persistent digestive issues, unexplained weight changes or special dietary needs.",
    ],

    note:
      "No single portion size is suitable for every Icelandic Sheepdog. Food requirements vary with age, metabolism, activity, body condition and health.",
  },

  health: {
    overview:
      "The breed is generally described as healthy, but individual dogs can still develop inherited or acquired conditions. Health history and screening results from responsible breeders are useful when choosing a puppy. Breed-associated conditions reported by the parent club and kennel-club resources include hip dysplasia, certain eye conditions and patellar luxation. A breed association with a condition does not mean that every dog will develop it, and this record does not estimate disease prevalence.",

    commonConditions: [
      "Hip dysplasia",
      "Cataracts and other inherited eye conditions",
      "Distichiasis",
      "Patellar luxation",
      "Elbow dysplasia",
    ],

    preventiveCare: [
      "Arrange regular veterinary health checks and follow an appropriate vaccination and parasite-prevention plan.",
      "Ask the breeder for verifiable hip and eye screening results for the parents.",
      "Monitor movement, comfort and willingness to exercise, and seek veterinary advice if lameness or stiffness develops.",
      "Check the ears regularly and seek veterinary advice for persistent redness, discharge or odour.",
      "Maintain a healthy body condition with suitable food and regular activity.",
      "Brush teeth regularly and arrange veterinary dental care when needed.",
      "Discuss any breed-specific screening or concerns with a veterinarian familiar with the dog's history.",
    ],

    recommendedScreenings: [
      "Hip evaluation before breeding",
      "Ophthalmologist or recognised eye examination before breeding",
    ],

    dentalCare:
      "Brush the teeth regularly with toothpaste designed for dogs. Arrange veterinary dental checks and seek advice if there is persistent bad breath, gum redness, oral pain or difficulty eating.",

    earCare:
      "Check the ears regularly for redness, odour, discharge or discomfort. Clean only as advised by a veterinarian and seek advice if signs of irritation or infection appear.",

    skinCare:
      "Check the skin while brushing, especially beneath the dense undercoat. Look for persistent itching, redness, unusual hair loss, lumps or parasites, and consult a veterinarian if changes persist.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "People who enjoy daily walks and interactive activities",
      "Households that want an involved, people-oriented companion",
      "Owners willing to train and manage a naturally vocal dog",
      "People interested in herding, obedience, agility or similar activities",
      "Households prepared for regular brushing and seasonal shedding",
    ],

    notIdealFor: [
      "People who need a consistently quiet dog without training to manage alert barking",
      "Households that cannot provide regular activity and interaction",
      "Owners who expect a dog to be left alone for long periods every day",
      "People who do not want to manage a thick double coat and seasonal shedding",
    ],
  },

  funFacts: [
    "The Icelandic Sheepdog is recognised as Iceland's native dog breed.",
    "Its ancestors are associated with dogs brought to Iceland by Norse settlers around AD 870–930.",
    "The breed's traditional work included gathering and driving livestock on farms.",
    "It has both short-haired and long-haired coat varieties.",
    "Its tendency to bark was useful when working livestock and alerting people to activity.",
  ],

  faq: [
    {
      question: "Is the Icelandic Sheepdog a herding dog?",
      answer:
        "Yes. It developed as a farm herding dog in Iceland and was used to gather and move sheep and other livestock.",
    },
    {
      question: "How much exercise does an Icelandic Sheepdog need?",
      answer:
        "It generally needs daily walks, play and mental activity. The suggested 45–90 minutes per day in this record is a practical estimate, not an official requirement; needs vary with age, health and individual energy.",
    },
    {
      question: "Does the Icelandic Sheepdog bark a lot?",
      answer:
        "It is a naturally vocal breed and may bark to alert its household or during activity. Training, enrichment and rewarding calm behaviour can help manage unnecessary barking.",
    },
    {
      question: "Does it shed?",
      answer:
        "Yes. Its thick double coat sheds, with heavier seasonal shedding. Regular brushing helps remove loose hair and keep the coat in good condition.",
    },
    {
      question: "What colours can an Icelandic Sheepdog have?",
      answer:
        "The main colours include fawn, red, grey-shaded, chocolate brown and black. White markings accompany the main colour, and some coat patterns include coloured patches on a white background.",
    },
    {
      question: "What health checks should I ask a breeder about?",
      answer:
        "Ask for verifiable hip and eye screening results for the parents. A veterinarian can explain the results and advise which checks are appropriate for an individual dog.",
    },
    {
      question: "Is an Icelandic Sheepdog suitable for every apartment?",
      answer:
        "Not necessarily. Suitability depends on the individual dog, daily activity, barking management, training and how long it would be left alone. The available sources do not establish a universal apartment-suitability answer.",
    },
  ],

  references: [
    "fci-icelandic-sheepdog-official-standard",
    "american-kennel-club-icelandic-sheepdog",
    "icelandic-sheepdog-association-of-america-health",
    "wikimedia-commons-icelandic-sheepdogs-photo",
    "the-dog-api",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-icelandic-sheepdog-official-standard",
          role: "verified",
          locator: "Title and breed name",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names",
        },
      ],
      verifiedOn: "2026-11-10",
      note:
        "Includes the breed's Icelandic name and commonly used English names; alternate-name usage can vary by country.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Canis lupus familiaris covers all domestic dogs; no breed-specific taxonomic designation applies.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-icelandic-sheepdog-official-standard",
          role: "verified",
          locator: "FCI classification: Group 5, Section 3",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.breed_group",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Classified within Nordic watchdogs and herders.",
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-icelandic-sheepdog-official-standard",
          role: "verified",
          locator: "Origin and brief historical summary",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-10",
      note:
        "The standard identifies Iceland as the country of origin and describes the breed's historical role.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-icelandic-sheepdog-official-standard",
          role: "verified",
          locator: "Origin and brief historical summary",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Iceland is the confirmed country of origin.",
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A more specific region of origin was not established in the reviewed sources.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-icelandic-sheepdog-official-standard",
          role: "verified",
          locator: "Historical summary, utilization, general appearance and temperament",
        },
        {
          id: "american-kennel-club-icelandic-sheepdog",
          role: "cited",
          locator: "About the Breed and History",
        },
      ],
      verifiedOn: "2026-11-10",
      note:
        "Descriptions are original summaries of the breed's documented origin, working purpose and characteristics.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-icelandic-sheepdog-official-standard",
          role: "verified",
          locator: "General appearance, coat, colour and size",
        },
      ],
      verifiedOn: "2026-11-10",
      note:
        "Covers standard-described structure, coat varieties, coat colours and ideal height. More specific claims below override this section claim where needed.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-icelandic-sheepdog-official-standard",
          role: "verified",
          locator: "Size: Ideal height at withers: Male: 46 cm, Female: 42 cm",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.height.metric",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "The FCI standard establishes ideal height at withers as 46 cm for males and 42 cm for females (stored as point reference values). The Dog API reports ranges of 46–51 cm for males and 42–47 cm for females.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-icelandic-sheepdog",
          role: "verified",
          locator: "Average sizes and life expectancy — Weight",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-10",
      note:
        "The AKC profile lists reference weights of 30 lb for males and 25 lb for females (represented with equal min/max values). The Dog API provides metric ranges of 14–16 kg for males and 11–14 kg for females, while the FCI standard specifies no numeric weight boundaries.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-icelandic-sheepdog",
          role: "verified",
          locator: "Average sizes and life expectancy",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Published kennel club and reference profiles report a life expectancy of 12–14 years.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A sufficiently specific, reliable breed-level drooling assessment was not established in the reviewed sources.",
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-icelandic-sheepdog",
          role: "cited",
          locator: "Grooming",
        },
      ],
      verifiedOn: null,
      note: "Editorial rating reflecting double-coat shedding patterns.",
    },

    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-icelandic-sheepdog-official-standard",
          role: "verified",
          locator: "Behaviour and temperament",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-10",
      note:
        "Traits summarise the standard's description of the breed. Individual dogs may differ.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-icelandic-sheepdog-official-standard",
          role: "cited",
          locator: "Behaviour and temperament",
        },
        {
          id: "american-kennel-club-icelandic-sheepdog",
          role: "cited",
          locator: "Breed Traits and Characteristics",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates for application display, not standardised behavioural test results or measured population statistics.",
    },

    care: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-icelandic-sheepdog",
          role: "verified",
          locator: "What to Expect When Caring for an Icelandic Sheepdog — Grooming, Exercise, Training and Nutrition",
        },
      ],
      verifiedOn: "2026-11-10",
      note:
        "Practical care descriptions are original summaries of the breed-care guidance. The daily exercise duration is separately marked as an estimate.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-icelandic-sheepdog",
          role: "cited",
          locator: "Exercise",
        },
      ],
      verifiedOn: null,
      note:
        "45–90 minutes is an editorial planning estimate based on the source's description of moderate daily exercise and outdoor activities; it is not a published breed-standard number.",
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
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Nutritional Assessment Guidelines",
        },
        {
          id: "american-kennel-club-icelandic-sheepdog",
          role: "cited",
          locator: "Nutrition",
        },
      ],
      verifiedOn: null,
      note:
        "General feeding guidance; exact portions and feeding schedules depend on the individual dog's age, condition, food and health.",
    },

    "nutrition.feedingFrequency": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No single puppy, adult, and senior meal frequency was established.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-icelandic-sheepdog",
          role: "verified",
          locator: "Health and recommended health tests",
        },
        {
          id: "icelandic-sheepdog-association-of-america-health",
          role: "verified",
          locator: "Health conditions that have been found in the Icelandic Sheepdog",
        },
      ],
      verifiedOn: "2026-11-10",
      note:
        "Potential conditions and screening advice are presented without implying that every dog is affected or that a condition's prevalence has been measured here.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "Dental Health Guidelines",
        },
      ],
      verifiedOn: null,
      note: "General canine dental care advice.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-icelandic-sheepdog",
          role: "cited",
          locator: "Breed traits, exercise, training and time alone",
        },
      ],
      verifiedOn: null,
      note:
        "Suitability is a practical editorial assessment, not a guarantee of how an individual dog will behave in a particular household.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The reviewed sources do not establish a universal yes/no recommendation for all first-time owners.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Suitability depends on the person's circumstances and the individual dog's needs; a universal yes/no value was not established.",
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
          id: "fci-icelandic-sheepdog-official-standard",
          role: "verified",
          locator: "Origin, brief historical summary and utilization",
        },
        {
          id: "american-kennel-club-icelandic-sheepdog",
          role: "cited",
          locator: "About the Breed and Did You Know?",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Short facts based on documented breed history and function.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-icelandic-sheepdog-official-standard",
          role: "verified",
          locator: "Utilization, coat, colour and behaviour",
        },
        {
          id: "american-kennel-club-icelandic-sheepdog",
          role: "cited",
          locator: "Health, grooming, exercise, training and nutrition",
        },
        {
          id: "icelandic-sheepdog-association-of-america-health",
          role: "cited",
          locator: "Health conditions and screening",
        },
      ],
      verifiedOn: "2026-11-10",
      note:
        "Answers are original summaries. Exercise duration is explicitly labelled as an estimate and apartment suitability is not asserted as a universal fact.",
    },
  },

  updatedOn: "2026-11-10",
};
