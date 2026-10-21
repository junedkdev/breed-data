import type { Breed } from "../schema/breed.types";

export const scottish_deerhound: Breed = {
  slug: "scottish-deerhound",
  name: "Scottish Deerhound",
  scientificName: null,
  alternateNames: ["Deerhound", "Scottish Deer Hound"],
  group: "FCI Group 10 — Sighthounds; Section 2 — Rough-haired Sighthounds",

  origin: {
    country: "Great Britain",
    region: "Scotland",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Scottish_Deerhound_grey_1.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Scottish_Deerhound_grey_1.jpg",
      title: "Scottish Deerhound grey 1.jpg",
      description: "Grey male Scottish Deerhound standing outdoors.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2020-08-23",
      uploadedOn: "2020-08-24",
      width: 1698,
      height: 1559,
      licenseId: "cc-by-sa-4.0",
      attribution:
        'Photo by Canarian, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Changes: none. If adapted, indicate changes and comply with the applicable share-alike terms.',
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Deerhound,_chiot.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Deerhound,_chiot.jpg",
      title: "Deerhound, chiot.jpg",
      description: "Scottish Deerhound puppy photographed at approximately three and a half months old.",
      creator: "Manializa",
      uploader: "Manializa",
      capturedOn: "2014-06-25",
      uploadedOn: "2019-04-08",
      width: 4928,
      height: 3264,
      licenseId: "cc-by-sa-4.0",
      attribution:
        'Photo by Manializa, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Changes: none. If adapted, indicate changes and comply with the applicable share-alike terms.',
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Deerhound_portrait.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Deerhound_portrait.jpg",
      title: "Deerhound portrait.jpg",
      description: "Portrait of a male Scottish Deerhound showing its head and ears.",
      creator: "Manializa",
      uploader: "Manializa",
      capturedOn: "2008-05-18",
      uploadedOn: "2019-04-08",
      width: 1334,
      height: 2000,
      licenseId: "cc-by-sa-4.0",
      attribution:
        'Photo by Manializa, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Changes: none. If adapted, indicate changes and comply with the applicable share-alike terms.',
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
  ],

  overview: {
    summary:
      "The Scottish Deerhound is a tall, athletic sighthound developed in Scotland to pursue red deer. It combines a lean, long-legged build and a coarse, wiry coat with a generally gentle and dignified temperament. Although often relaxed at home as an adult, it needs regular exercise and safe opportunities to run.",
    description:
      "This large, lightly built hound has the outline of a rough-coated Greyhound, with a deep chest, long head and neck, powerful hindquarters, and a naturally rugged coat. Its body is designed for speed and stamina over open ground rather than heavy guarding work. Scottish Deerhounds are commonly described as gentle, friendly, and responsive to calm handling. Their size, prey drive, and need for free movement make secure exercise areas and thoughtful management important parts of responsible ownership.",
    history:
      "The Deerhound has a long association with Scotland and the pursuit of red deer. Its early history is difficult to establish precisely, and some accounts blend historical evidence with legend. The breed was developed as a large coursing hound able to move quickly over challenging terrain. Changes in hunting practices and periods when ownership and breeding were restricted contributed to declines in its numbers. Modern Deerhounds are kept as companions and show dogs as well as participating in suitable sighthound activities.",
    originalPurpose:
      "Coursing and hunting red deer, using speed, stamina, and the ability to cover rough terrain.",
    currentRoles: [
      "Companion dog",
      "Conformation show dog",
      "Lure-coursing and other suitable sighthound activities",
    ],
  },

  physical: {
    sizeCategory: "Giant",
    height: {
      unit: "cm",
      male: {
        min: 76.2,
        max: 81.3,
      },
      female: {
        min: 71.1,
        max: null,
      },
    },
    weight: {
      unit: "kg",
      male: {
        min: 38.6,
        max: 49.9,
      },
      female: {
        min: 34.0,
        max: 43.1,
      },
    },
    lifespanYears: {
      min: 8,
      max: 11,
    },
    coatType: "Harsh, wiry, ragged double-textured coat",
    coatLength:
      "Generally around 7.5–10 cm on the body, with softer hair on the head, chest, and belly and modest furnishings on the legs.",
    coatColors: [
      "Blue-grey",
      "Dark grey",
      "Light grey",
      "Brindle",
      "Yellow",
      "Sandy red",
      "Red fawn",
    ],
    sheddingLevel: "Moderate",
    droolingLevel: null,
    distinctiveFeatures: [
      "Very tall, lean frame resembling a rough-coated Greyhound",
      "Long head and neck",
      "Deep chest and strong hindquarters",
      "Small ears that fold back when relaxed",
      "Coarse, wiry coat with a natural, untidy outline",
      "Long, tapering tail that is usually carried low when relaxed",
    ],
  },

  temperament: {
    traits: [
      "Gentle",
      "Friendly",
      "Dignified",
      "Affectionate with familiar people",
      "Sensitive to harsh handling",
      "Athletic outdoors and often relaxed indoors as an adult",
      "May chase moving animals because of its sighthound heritage",
    ],
    scores: {
      affection: 4,
      withChildren: null,
      withDogs: null,
      withStrangers: 4,
      protectiveness: 2,
      independence: 3,
      trainability: 4,
      barking: 2,
      energy: 4,
    },
  },

  care: {
    exercise: {
      level: "High; needs regular daily activity and safe opportunities to run",
      minutesPerDay: null,
      activities: [
        "Daily walks appropriate to age and fitness",
        "Free running in a securely fenced area",
        "Suitable lure-coursing or other controlled sighthound activities",
        "Calm enrichment and scent-based games",
      ],
    },
    grooming: {
      level: "Low to moderate",
      brushing:
        "Brush and comb the coat about weekly, checking for tangles and debris; increase grooming when the individual dog's coat requires it.",
      bathing:
        "Bathe when necessary with a dog-appropriate shampoo, rinse thoroughly, and dry the coat well.",
      notes: [
        "The coat is intended to remain harsh and natural rather than styled into a soft, sculpted finish.",
        "Check the ears, eyes, skin, nails, and feet during routine grooming.",
        "Trim nails regularly if normal activity does not keep them short.",
        "Avoid unnecessary close clipping that changes the coat's natural texture.",
      ],
    },
    training: {
      difficulty:
        "Moderate; generally responsive but sensitive and influenced by its chasing instinct",
      tips: [
        "Use reward-based methods, consistency, and calm handling.",
        "Practise recall in secure areas; do not rely on recall alone around wildlife or fast-moving animals.",
        "Introduce leash manners and everyday handling from an early age.",
        "Provide controlled social experiences with people, dogs, and varied environments.",
        "Keep exercise appropriate for growth and seek veterinary or breeder advice for young dogs.",
      ],
      socialization:
        "Introduce people, dogs, surfaces, sounds, and new environments gradually and positively. Supervise interactions and respect the dog's need for rest and space.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,
      climates: [
        "A range of temperate conditions, with appropriate shade, water, shelter, and weather management.",
        "In hot weather, avoid strenuous exercise during the hottest part of the day and watch for overheating.",
      ],
      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "A complete, balanced diet appropriate for the dog's life stage, body condition, and activity level.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Choose a nutritionally complete diet and adjust portions to maintain a lean, healthy body condition. Discuss growth, calorie needs, and any special dietary requirements with a veterinarian. Keep fresh water available at all times.",
    considerations: [
      "As a giant, deep-chested breed, the Scottish Deerhound warrants discussion with a veterinarian about the risk of gastric dilatation-volvulus (bloat).",
      "Avoid strenuous exercise around meals and follow an individual feeding plan recommended by the dog's veterinarian.",
      "Monitor weight and body condition rather than relying only on package feeding tables.",
      "Use treats in moderation and include them in the daily calorie allowance.",
    ],
    note:
      "This is general feeding guidance, not a prescribed meal schedule or a substitute for veterinary nutritional advice.",
  },

  health: {
    overview:
      "Scottish Deerhounds can be affected by inherited and other serious conditions. Breed-club health resources identify concerns including heart disease, osteosarcoma, gastric dilatation-volvulus, cystinuria, liver shunt, and inherited bleeding disorders. These are reported breed concerns, not a statement that an individual dog will develop them or that their prevalence is the same across populations. Breeders' documented screening results and an ongoing veterinary relationship are important.",
    commonConditions: [
      "Dilated cardiomyopathy and other cardiac conditions",
      "Osteosarcoma (bone cancer)",
      "Gastric dilatation-volvulus (bloat)",
      "Cystinuria and cystine urinary stones",
      "Portosystemic (liver) shunt",
      "Factor VII deficiency",
      "Delayed post-operative hemorrhage (DEPOH)",
    ],
    preventiveCare: [
      "Arrange regular veterinary examinations and discuss breed-relevant screening.",
      "Ask the breeder for documented health-test results and the parents' known genetic status.",
      "Discuss urgent warning signs of bloat with a veterinarian before an emergency occurs.",
      "Tell veterinary and surgical teams about any known or suspected bleeding-disorder status before procedures.",
      "Keep the dog lean, fit, and appropriately exercised throughout life.",
    ],
    recommendedScreenings: [
      "Cardiac evaluation; the breed club recommends echocardiography for breeding stock.",
      "Factor VII deficiency genetic testing or documented genetic status.",
      "Delayed post-operative hemorrhage (DEPOH) genetic testing or documented genetic status.",
      "Bile-acid testing for portosystemic (liver) shunt, following veterinary and breeder guidance.",
    ],
    dentalCare:
      "Brush the teeth regularly with dog-safe toothpaste and arrange veterinary dental checks. Seek veterinary advice for persistent bad breath, pain, bleeding gums, or difficulty eating.",
    earCare:
      "Check the ears regularly for redness, odour, discharge, or discomfort. Clean only as needed with a veterinarian-approved product, and seek veterinary advice if signs of infection appear.",
    skinCare:
      "Inspect the skin beneath the wiry coat during grooming. Ask a veterinarian to assess persistent itching, sores, new lumps, or changes in the skin.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "Households able to accommodate a very tall dog and its equipment",
      "Owners who can provide daily exercise and secure opportunities to run",
      "People who prefer a generally gentle companion and can use patient, reward-based training",
      "Homes prepared to manage a strong chasing instinct around small animals and wildlife",
      "Owners committed to preventative veterinary care and breed-relevant health screening",
    ],
    notIdealFor: [
      "Households unable to provide adequate space and safe exercise",
      "People who expect reliable off-leash recall around wildlife without secure management",
      "Homes that cannot accommodate a giant dog's size, food needs, and veterinary costs",
      "Owners who must leave a dog isolated for long periods without an appropriate companionship and enrichment plan",
      "Households expecting a dependable guard dog",
    ],
  },

  funFacts: [
    "The Scottish Deerhound was developed to pursue red deer across Scotland's rugged terrain.",
    "Its silhouette is similar to a Greyhound, but with a larger frame and a rough, wiry coat.",
    "Despite its athletic hunting heritage, an adult Deerhound can be notably relaxed indoors after suitable exercise.",
    "The breed's early history is difficult to separate fully from traditional stories and legend.",
    "The breed is recognised internationally as a rough-haired sighthound.",
  ],

  faq: [
    {
      question: "Where does the Scottish Deerhound originate?",
      answer:
        "It originates in Scotland, where it was developed as a large coursing hound for pursuing red deer.",
    },
    {
      question: "How large does a Scottish Deerhound get?",
      answer:
        "The AKC lists males at about 30–32 inches tall and 85–110 pounds, and females at 28 inches and up and 75–95 pounds. Individual dogs vary, and these figures are typical breed-profile ranges rather than a guarantee.",
    },
    {
      question: "How long does a Scottish Deerhound live?",
      answer:
        "A commonly published life-expectancy range is about 8–11 years. Individual lifespan depends on genetics, health, care, and other factors.",
    },
    {
      question: "Does the Scottish Deerhound need a lot of exercise?",
      answer:
        "Yes. The breed benefits from regular daily activity and safe opportunities to run. Exercise should be adapted to age, fitness, health, and weather, with particular care during growth.",
    },
    {
      question: "Is the Scottish Deerhound easy to groom?",
      answer:
        "Its wiry coat is usually manageable with regular brushing and combing. Routine nail care and checks of the ears, eyes, skin, and feet are also important.",
    },
    {
      question: "Is the Scottish Deerhound good with children and other dogs?",
      answer:
        "Many are described as gentle, but a categorical answer cannot predict an individual dog's behaviour. Supervise children and dog interactions, teach respectful handling, and assess compatibility individually.",
    },
    {
      question: "Can a Scottish Deerhound live in an apartment?",
      answer:
        "A universal yes-or-no rating is not established here. Consider the dog's size, daily exercise needs, access to secure running space, stairs, and the practical layout of the home before deciding.",
    },
    {
      question: "What health tests should I ask a breeder about?",
      answer:
        "Ask for documented cardiac screening, Factor VII deficiency and DEPOH genetic status, and bile-acid testing for liver shunt. A veterinarian can help interpret results and advise which checks are appropriate for an individual dog.",
    },
    {
      question: "Is a Scottish Deerhound a good guard dog?",
      answer:
        "It is generally known more for a gentle, dignified disposition than for guarding. Do not choose this breed on the expectation that it will act as a dependable protection dog.",
    },
  ],

  references: [
    "fci-deerhound-standard",
    "fci-deerhound-nomenclature",
    "american-kennel-club-scottish-deerhound",
    "american-kennel-club-scottish-deerhound-standard",
    "american-kennel-club-scottish-deerhound-history",
    "scottish-deerhound-club-of-america-breed-info",
    "scottish-deerhound-club-of-america-health-testing",
    "wikimedia-scottish-deerhound-grey-1",
    "wikimedia-scottish-deerhound-puppy",
    "wikimedia-scottish-deerhound-portrait",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-deerhound-nomenclature",
          role: "verified",
          locator: "Breed name and FCI breed nomenclature",
        },
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Breed profile title and About the Breed",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "Uses the breed's recognised name and the shorter Deerhound name used in official breed nomenclature.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted breed standards and kennel-club resources do not establish a distinct breed-specific scientific name.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-deerhound-standard",
          role: "verified",
          locator: "FCI classification",
        },
        {
          id: "fci-deerhound-nomenclature",
          role: "verified",
          locator: "Group 10, Rough-haired Sighthounds",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "Uses the FCI sighthound classification. The AKC also classifies the breed within the Hound Group.",
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-deerhound-standard",
          role: "verified",
          locator: "Origin and Brief Historical Summary",
        },
        {
          id: "fci-deerhound-nomenclature",
          role: "verified",
          locator: "Country of origin",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "The FCI identifies Great Britain as the country of origin; the breed's historical development is associated with Scotland.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-deerhound-standard",
          role: "verified",
          locator: "Utilization, Brief Historical Summary, General Appearance, Behaviour/Temperament",
        },
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "About the Breed, History, Exercise, Training, and Grooming",
        },
        {
          id: "scottish-deerhound-club-of-america-breed-info",
          role: "verified",
          locator: "So, You Think You Want a Scottish Deerhound?",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "Original summaries of the breed's appearance, historical use, and modern roles; user-facing prose is not copied from the sources.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-deerhound-standard",
          role: "verified",
          locator: "General Appearance, Coat, Colour, Height, and Weight",
        },
        {
          id: "american-kennel-club-scottish-deerhound-standard",
          role: "verified",
          locator: "Official Standard: General Appearance, Coat, Colour, Height and Weight",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "Standard-based appearance and coat details. Typical profile measurements and lifespan have more specific evidence claims.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-deerhound-standard",
          role: "verified",
          locator: "Height at the withers",
        },
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Height: male 30–32 inches; female 28 inches and up",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "AKC height figures converted from inches to centimetres and rounded to one decimal place; female height is an open-ended minimum in the AKC profile.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Average sizes and life expectancy: male 85–110 lb; female 75–95 lb",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "AKC typical weight ranges converted from pounds to kilograms and rounded to one decimal place; individual dogs vary.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Life Expectancy: 8–11 years",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "Published breed-profile range, not a prediction or guarantee for an individual dog.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted sources do not establish a sufficiently reliable drooling-level rating for this breed.",
    },

    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-deerhound-standard",
          role: "verified",
          locator: "Behaviour/Temperament",
        },
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Breed traits, training, and About the Breed",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "Summarises breed-level temperament descriptions; individual dogs may differ.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "cited",
          locator: "Breed Traits & Characteristics",
        },
        {
          id: "fci-deerhound-standard",
          role: "cited",
          locator: "Behaviour/Temperament",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 scores are interpretive summaries of typical tendencies, not validated behavioural measurements or predictions for an individual dog.",
    },

    "temperament.scores.withChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No numeric child-compatibility score is recorded; individual behaviour and the child's experience with dogs vary.",
    },

    "temperament.scores.withDogs": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No numeric dog-compatibility score is recorded; compatibility depends on the individual dogs, introduction, and socialisation.",
    },

    care: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General care advice should be adapted to the individual dog, its age, health, fitness, and local conditions.",
    },

    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Exercise and care of young and adult Deerhounds",
        },
        {
          id: "scottish-deerhound-club-of-america-breed-info",
          role: "verified",
          locator: "Exercise needs and home requirements",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "Supports regular exercise and safe running opportunities; it does not establish a universal daily minute prescription.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No single daily minute range is recorded because exercise needs vary with age, fitness, health, and conditions, and the consulted breed sources do not prescribe a universal figure.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Grooming",
        },
        {
          id: "american-kennel-club-scottish-deerhound-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "Summarises routine care for the natural wiry coat without suggesting that all dogs have identical grooming needs.",
    },

    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Training and Exercise",
        },
        {
          id: "fci-deerhound-standard",
          role: "verified",
          locator: "Behaviour/Temperament",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "Training guidance reflects the breed's sensitive temperament and sighthound chasing instinct.",
    },

    "care.livingEnvironment": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Exercise and home-care recommendations",
        },
        {
          id: "scottish-deerhound-club-of-america-breed-info",
          role: "verified",
          locator: "Size, exercise, and household considerations",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "Supports the importance of space, exercise, and practical management. It does not provide a universal apartment-suitability or alone-time rating.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No categorical apartment-suitability value is recorded; the decision depends on the home, exercise access, and the individual dog's needs.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted sources do not establish a reliable, general alone-time tolerance rating for the breed.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "cited",
          locator: "Nutrition and bloat-risk guidance",
        },
      ],
      verifiedOn: null,
      note:
        "General nutrition guidance; individual portions and feeding plans should be adapted with veterinary advice.",
    },

    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal puppy meal frequency is recorded; consult a veterinarian for a schedule appropriate to age, growth, and health.",
    },

    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal adult meal frequency is recorded; consult a veterinarian for an appropriate feeding plan.",
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal senior meal frequency is recorded; feeding needs vary with health, body condition, and veterinary recommendations.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Health and Recommended Health Tests",
        },
        {
          id: "scottish-deerhound-club-of-america-health-testing",
          role: "verified",
          locator: "Recommended Health Tests and Code of Ethics Guidelines",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "Breed health concerns and screening recommendations are not claims of disease prevalence or a diagnosis of any individual dog.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scottish-deerhound-club-of-america-health-testing",
          role: "verified",
          locator: "Recommended Health Tests; Code of Ethics Guidelines for Health Testing",
        },
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Recommended Health Tests From the National Breed Club",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "Screening list follows breed-club recommendations. Discuss timing and interpretation with a veterinarian; testing does not guarantee that disease will never occur.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General canine dental-care advice; seek veterinary care for signs of oral disease.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General canine ear-care advice; persistent symptoms require veterinary assessment.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General canine skin-care advice; new lumps or persistent skin changes require veterinary assessment.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "cited",
          locator: "Exercise, Training, Nutrition, and breed traits",
        },
        {
          id: "scottish-deerhound-club-of-america-breed-info",
          role: "cited",
          locator: "Household, exercise, and ownership considerations",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial guidance based on the breed's size, exercise needs, and prey drive; it is not a validated owner-matching test.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No sufficiently reliable basis was established for a categorical first-time-owner suitability rating.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No categorical family-with-children rating is recorded. Supervision and individual temperament matter, particularly because of the dog's size.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No sufficiently reliable basis was established for a categorical suitability rating for senior owners.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No categorical apartment-living suitability rating is recorded; the decision depends on the actual home and exercise arrangements.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound-history",
          role: "verified",
          locator: "Breed history and development as a deer coursing hound",
        },
        {
          id: "fci-deerhound-standard",
          role: "verified",
          locator: "Brief Historical Summary and General Appearance",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "Historical and breed-characteristic facts are paraphrased in original wording.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-deerhound-standard",
          role: "verified",
          locator: "Origin, history, coat, temperament, and measurements",
        },
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Size, life expectancy, exercise, grooming, nutrition, and health",
        },
        {
          id: "scottish-deerhound-club-of-america-health-testing",
          role: "verified",
          locator: "Recommended Health Tests",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "FAQ responses summarise sourced breed information and clearly distinguish typical ranges from individual outcomes.",
    },
  },

  updatedOn: "2026-10-21",
};
