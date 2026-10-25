import type { Breed } from "../schema/breed.types";

export const mudi: Breed = {
  slug: "mudi",
  name: "Mudi",
  scientificName: "Canis lupus familiaris",
  alternateNames: ["Hungarian Mudi"],

  group: "FCI Group 1: Sheepdogs and Cattledogs; Section 1: Sheepdogs",

  origin: {
    country: "Hungary",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mudi.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Mudi.jpg",
      title: "Mudi.jpg",
      description: "Black Hungarian herder, Mudi.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2006-03-03",
      uploadedOn: "2013-10-23",
      width: 294,
      height: 355,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 3.0. Changes, if any, must be indicated. https://creativecommons.org/licenses/by-sa/3.0/",
      restrictions: null,
      metadataCheckedOn: "2026-10-25",
    },
  ],

  overview: {
    summary:
      "The Mudi is an alert, athletic Hungarian herding dog known for its quick learning, erect ears and wavy or lightly curled coat. It thrives when daily life includes purposeful activity, training and close interaction with its people.",

    description:
      "Medium-sized and agile, the Mudi has a wedge-shaped head, lively expression and upright ears that readily respond to sounds and movement. Its head and the fronts of its legs carry short, smooth hair, while the rest of the body has a dense, shiny coat that ranges from strongly wavy to slightly curly. The breed was developed to help manage livestock, including animals that can be difficult to move. Its intelligence, vigilance and willingness to work can make it a rewarding partner for herding, agility, obedience and scent-based activities. These same qualities mean that a Mudi needs thoughtful training and enough mental and physical activity; an individual dog's behaviour still depends on temperament, socialisation and experience.",

    history:
      "The Mudi developed in Hungary, probably during the eighteenth and nineteenth centuries, through the mixing of local herding dogs with prick-eared German herding dogs. Historically it served farmers as a versatile worker rather than being bred only for appearance. The breed has been used to move livestock, alert people to activity around a property and, in some settings, assist with hunting wild boar. It remains comparatively uncommon internationally, and working ability has been an important part of its identity.",

    originalPurpose:
      "Herding livestock, including larger or difficult animals, while also providing alert and property-guarding behaviour.",

    currentRoles: [
      "Livestock herding",
      "Active household companion",
      "Agility and obedience sports",
      "Flyball, frisbee and other structured dog sports",
      "Scent work and other enrichment activities",
      "Alert or watchdog duties",
    ],
  },

  physical: {
    sizeCategory: "medium",

    height: {
      unit: "cm",
      male: {
        min: 41,
        max: 47,
      },
      female: {
        min: 38,
        max: 44,
      },
    },

    weight: {
      unit: "lb",
      male: {
        min: 24,
        max: 29,
      },
      female: {
        min: 18,
        max: 24,
      },
    },

    lifespanYears: {
      min: 12,
      max: 14,
    },

    coatType:
      "Dense, shiny coat that is strongly wavy or slightly curled over the body, with short, straight and smooth hair on the head and fronts of the legs.",

    coatLength:
      "Short and smooth on the head and front of the limbs; approximately 3 to 7 cm on the body, with longer feathering on the backs of the forearms, upper thighs and underside of the tail.",

    coatColors: [
      "Black",
      "White",
      "Fawn, ranging from beige to red",
      "Ash or blue-grey",
      "Liver or brown",
      "Ash-brown or diluted brown",
      "Cifra (merle), with merle-patterned versions of the listed base colours",
    ],

    sheddingLevel: "Moderate; individual shedding varies.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Wedge-shaped head that narrows toward the nose",
      "High-set, erect, reverse-V-shaped ears",
      "Distinctly sloping topline toward the rear",
      "Short, smooth hair on the head and front of the limbs",
      "Dense, shiny, wavy or slightly curled coat over most of the body",
      "Pronounced feathering on the backs of the forearms, upper thighs and underside of the tail",
      "Almond-shaped, slightly oblique eyes; blue eyes can occur in merle-coloured dogs",
      "A naturally short or full-length tail may occur",
    ],
  },

  temperament: {
    traits: [
      "Intelligent",
      "Quick to learn",
      "Energetic",
      "Courageous",
      "Watchful",
      "Alert",
      "Adaptable",
      "Keen to work",
      "Often vocal",
      "May be reserved with unfamiliar people",
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 4,
      independence: 3,
      trainability: 5,
      barking: 4,
      energy: 5,
    },
  },

  care: {
    exercise: {
      level: "High",
      minutesPerDay: {
        min: 60,
        max: 120,
      },
      activities: [
        "Brisk walks and hikes suited to the dog's fitness",
        "Reward-based obedience training",
        "Agility and other suitable dog sports",
        "Herding activities where available and appropriate",
        "Scent games and search tasks",
        "Retrieving, frisbee and interactive play",
        "Short training sessions throughout the day",
      ],
    },

    grooming: {
      level: "Low to moderate",
      brushing:
        "Brush or comb regularly to remove loose hair and debris. Check the longer coat on the body and tail for tangles, particularly after outdoor activities.",
      bathing:
        "Bathe when needed with a dog-appropriate shampoo and rinse thoroughly. Frequent bathing is not usually necessary unless the dog gets dirty or a veterinarian recommends it.",
      notes: [
        "Inspect the coat after walks or work in brush and long grass.",
        "Check the ears, paws, nails and skin routinely.",
        "Keep nails trimmed to a comfortable length.",
        "Brush more frequently during periods of heavier shedding.",
        "Avoid unnecessary shaving of the natural coat.",
      ],
    },

    training: {
      difficulty:
        "Moderate; generally quick to learn, but high energy and vigilance call for consistent training and useful outlets for working instincts.",
      tips: [
        "Use positive reinforcement and keep training sessions varied.",
        "Teach reliable recall and loose-leash walking early.",
        "Reward calm behaviour around people, dogs, livestock and moving objects.",
        "Provide structured activities that exercise both the body and mind.",
        "Teach an appropriate response to barking and alert behaviour rather than expecting the instinct to disappear.",
        "Avoid repetitive drills that cause frustration or disengagement.",
      ],
      socialization:
        "Introduce the dog gradually and positively to different people, dogs, places, sounds and everyday situations. Reward calm observation and allow the dog to build confidence without forcing interactions.",
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: [
        "Temperate climates",
        "Cool climates",
        "Warm climates with shade, fresh water and exercise adjusted to avoid overheating",
      ],
      aloneTimeTolerance:
        "Individual-dependent. Build time alone gradually and provide exercise, enrichment and a predictable routine. Long periods without activity or companionship may be difficult for a highly engaged working dog.",
    },
  },

  nutrition: {
    dietType:
      "Complete and balanced dog food appropriate to life stage, body condition, activity and individual health needs.",

    feedingFrequency: {
      puppy:
        "Several measured meals a day are common during growth. Follow the food's instructions and veterinary guidance as the puppy develops.",
      adult:
        "Two measured meals daily suit many adult dogs. Adjust portions according to body condition and workload.",
      senior:
        "Adjust portions and diet to the dog's activity, body condition, dental health and veterinary needs.",
    },

    guidelines:
      "Use measured portions and keep fresh water available. Choose food formulated for the dog's life stage, monitor body condition and change diets gradually. Training treats should be included in the daily food allowance. A veterinarian can help tailor feeding to growth, activity, allergies or medical needs.",

    considerations: [
      "Energy requirements can rise substantially with regular herding or dog-sport work.",
      "Avoid overfeeding when exercise decreases.",
      "Choose an appropriate growth diet for puppies and monitor development.",
      "Discuss supplements and therapeutic diets with a veterinarian.",
      "Keep clean drinking water available, especially after exercise.",
    ],

    note:
      "This is general canine feeding guidance, not a breed-specific calorie prescription. Needs vary with age, health, neuter status, metabolism and workload.",
  },

  health: {
    overview:
      "Mudis are often described as generally healthy, but individual dogs can still develop inherited or acquired conditions. Breed-club health guidance highlights joint, patella, eye and cardiac evaluations for breeding dogs. Reports of other inherited conditions exist, but the presence of a condition in the breed does not establish its frequency or predict an individual dog's health.",

    commonConditions: [
      "Hip dysplasia",
      "Elbow dysplasia",
      "Patellar luxation",
      "Eye conditions, including cataracts and progressive retinal atrophy",
      "Epilepsy has been reported in the breed; prevalence and individual risk are uncertain",
    ],

    preventiveCare: [
      "Arrange routine veterinary examinations and seek advice promptly for changes in movement, vision, balance or behaviour.",
      "Maintain a healthy body condition and build exercise gradually.",
      "Ask breeders for documented health-screening results for both parents.",
      "Discuss the relevance of inherited-disease testing for the specific family line.",
      "Keep vaccinations, parasite prevention and dental care up to date according to veterinary advice.",
    ],

    recommendedScreenings: [
      "Hip evaluation",
      "Elbow evaluation",
      "Patellar luxation evaluation",
      "Eye examination by a veterinary ophthalmologist",
      "Basic cardiac evaluation",
      "Discuss thyroid, advanced cardiac or genetic testing with a veterinarian or responsible breeder where appropriate",
    ],

    dentalCare:
      "Brush regularly with dog-specific dental products and arrange veterinary dental assessments as needed. Ask a veterinarian about persistent bad breath, bleeding gums, oral pain or difficulty eating.",

    earCare:
      "Check the ears regularly for redness, discharge, odour or persistent scratching. Seek veterinary advice if these signs occur or persist.",

    skinCare:
      "Inspect the skin and coat for irritation, parasites, wounds or unusual hair loss. Consult a veterinarian if itching, redness or other skin changes persist.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Active people who enjoy daily exercise and training",
      "Owners interested in herding, agility, obedience or scent-based activities",
      "Households able to provide consistent rules, enrichment and companionship",
      "People who appreciate an alert, responsive dog",
      "Owners willing to train recall and manage vocal behaviour",
    ],

    notIdealFor: [
      "People looking for a low-energy companion with minimal exercise needs",
      "Households that cannot provide daily training or enrichment",
      "Owners expecting a naturally quiet dog without training",
      "People who cannot supervise and guide a highly alert dog around unfamiliar situations",
      "Homes where the dog would routinely be left without activity or companionship for long periods",
    ],
  },

  funFacts: [
    "The Mudi's name is pronounced approximately 'moodie'.",
    "The breed developed in Hungary and was valued for its practical livestock-working ability.",
    "Its coat differs across the body: the head and front of the legs are smooth, while the body is wavy or lightly curled.",
    "A Mudi's tail may be naturally short or full length.",
    "The breed is used in activities such as herding, agility, obedience and flyball.",
  ],

  faq: [
    {
      question: "Where does the Mudi come from?",
      answer:
        "The Mudi originated in Hungary. The breed developed from Hungarian herding dogs, probably crossed with prick-eared German herding dogs during the eighteenth and nineteenth centuries.",
    },
    {
      question: "How much exercise does a Mudi need?",
      answer:
        "The Mudi is an energetic working breed that benefits from daily exercise and mental tasks. The 60–120 minute range in this profile is an editorial planning estimate, not a formal breed-standard requirement; adjust it for age, fitness and veterinary advice.",
    },
    {
      question: "What colours can a Mudi have?",
      answer:
        "The current FCI standard recognises black, white, fawn, ash, liver, ash-brown and cifra (merle) colour categories. Small white markings may be tolerated under the standard.",
    },
    {
      question: "Is the Mudi easy to train?",
      answer:
        "Many Mudis learn quickly and enjoy having a task. Use positive reinforcement, varied sessions and consistent rules. Their alertness and energy mean training should also address recall, calm greetings and barking.",
    },
    {
      question: "What health checks should I ask a breeder about?",
      answer:
        "Ask for documented hip, elbow, patella and eye evaluations, and discuss basic cardiac screening. Additional tests may be relevant depending on the dog's family line and veterinary advice.",
    },
    {
      question: "Can a Mudi live in an apartment?",
      answer:
        "Apartment living can work if the dog receives enough exercise, training and enrichment. Access to a yard can be useful, but it does not replace walks, purposeful activity or interaction.",
    },
  ],

  references: [
    "fci-mudi-standard-2023",
    "american-kennel-club-mudi",
    "canadian-kennel-club-mudi",
    "mudi-club-of-america-health-testing",
    "mudi-club-of-america-faq",
    "petmd-mudi-breed",
    "wikimedia-commons-mudi-jpg",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "canadian-kennel-club-mudi",
          role: "verified",
          locator: "Breed name and origin",
        },
        {
          id: "american-kennel-club-mudi",
          role: "cited",
          locator: "Mudi breed profile",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The alternate name reflects the breed's Hungarian origin.",
    },

    scientificName: {
      reliability: "unverified",
      sources: [],
      verifiedOn: null,
      note:
        "Canis lupus familiaris is the domestic dog taxonomic name used as a catalog convention, not a separate scientific name for this breed.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-mudi-standard-2023",
          role: "verified",
          locator: "FCI classification: Group 1, Section 1",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Uses the FCI classification; other kennel clubs may group breeds differently.",
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-mudi-standard-2023",
          role: "verified",
          locator: "Origin: Hungary; Brief Historical Summary",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Hungary is the stated country of origin. A more specific region is not asserted.",
    },
    "origin.region": {
  reliability: "unavailable",
  sources: [],
  verifiedOn: null,
  note:
    "No sufficiently reliable source was found to establish a more specific region of origin.",
},

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-mudi-standard-2023",
          role: "verified",
          locator: "Utilization, Brief Historical Summary, General Appearance and Behaviour/Temperament",
        },
        {
          id: "american-kennel-club-mudi",
          role: "cited",
          locator: "About the Breed; Exercise; Training",
        },
        {
          id: "mudi-club-of-america-faq",
          role: "cited",
          locator: "What is a Mudi?; General Mudi temperament",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Original summary of the breed's history, appearance and working roles. Uncertain details of ancestry are described as probable rather than established fact.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-mudi-standard-2023",
          role: "verified",
          locator: "Size: Height at withers; males 41–47 cm and females 38–44 cm",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The FCI standard publishes the height ranges in centimetres; the stored values use that unit without conversion.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "canadian-kennel-club-mudi",
          role: "verified",
          locator: "Height/Weight: males 24–29 lbs and females 18–24 lbs",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The CKC page gives sex-specific weight ranges in pounds first. Values are stored in pounds without conversion.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-mudi",
          role: "verified",
          locator: "Average sizes and life expectancy: 12–14 years",
        },
        {
          id: "mudi-club-of-america-faq",
          role: "cited",
          locator: "How long will a Mudi live?",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Published life-expectancy estimate; an individual dog's lifespan can differ.",
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-mudi",
          role: "cited",
          locator: "Grooming: brushing to remove dead hair",
        },
      ],
      verifiedOn: null,
      note: "Qualitative editorial estimate; the source does not publish a standard shedding score.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling level was established.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-mudi-standard-2023",
          role: "verified",
          locator: "General Appearance, Important Proportions, Eyes, Ears, Tail, Coat, Colour and Size",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Physical characteristics follow the FCI standard unless a more specific claim is provided.",
    },

    temperament: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-mudi-standard-2023",
          role: "verified",
          locator: "Behaviour/Temperament",
        },
        {
          id: "american-kennel-club-mudi",
          role: "cited",
          locator: "About the Breed; Training",
        },
        {
          id: "mudi-club-of-america-faq",
          role: "cited",
          locator: "General Mudi temperament",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Traits summarise breed-standard descriptions and breed-club observations. Individual dogs vary.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-mudi",
          role: "cited",
          locator: "Breed Traits & Characteristics",
        },
        {
          id: "mudi-club-of-america-faq",
          role: "cited",
          locator: "General Mudi temperament",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1–5 ratings for app display, not a validated behavioural test or official standard score.",
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-mudi",
          role: "cited",
          locator: "What to Expect When Caring for a Mudi: Grooming, Exercise, Training and Nutrition",
        },
        {
          id: "petmd-mudi-breed",
          role: "cited",
          locator: "Breed care and exercise guidance",
        },
      ],
      verifiedOn: null,
      note: "General care guidance informed by breed activity and coat. Individual needs vary.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "petmd-mudi-breed",
          role: "cited",
          locator: "Exercise and mental stimulation",
        },
        {
          id: "american-kennel-club-mudi",
          role: "cited",
          locator: "Exercise",
        },
      ],
      verifiedOn: null,
      note: "The 60–120 minute range is a practical editorial estimate, not a formal breed-standard requirement.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-mudi",
          role: "cited",
          locator: "Nutrition",
        },
      ],
      verifiedOn: null,
      note: "General canine nutrition guidance. No breed-specific calorie or portion prescription is claimed.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "mudi-club-of-america-health-testing",
          role: "verified",
          locator: "Common Health Tests for Mudis",
        },
        {
          id: "mudi-club-of-america-faq",
          role: "cited",
          locator: "How long will a Mudi live? Does the Mudi have any health problems?",
        },
        {
          id: "american-kennel-club-mudi",
          role: "cited",
          locator: "Health; Recommended Health Tests from the National Breed Club",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Health concerns and screening recommendations are based on breed-club and kennel-club resources. Reported conditions are not presented as inevitable or assigned an unsupported prevalence.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "fci-mudi-standard-2023",
          role: "cited",
          locator: "Utilization and Behaviour/Temperament",
        },
        {
          id: "american-kennel-club-mudi",
          role: "cited",
          locator: "Exercise, Training and Nutrition",
        },
        {
          id: "mudi-club-of-america-faq",
          role: "cited",
          locator: "General Mudi temperament",
        },
      ],
      verifiedOn: null,
      note: "Editorial suitability guidance; household fit depends on the dog's individual temperament, training and daily routine.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No categorical recommendation can be made for senior owners without knowing the person's mobility, activity and support needs.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-mudi-standard-2023",
          role: "verified",
          locator: "Brief Historical Summary, Tail and Coat",
        },
        {
          id: "mudi-club-of-america-faq",
          role: "cited",
          locator: "What is a Mudi?",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Paraphrased breed facts drawn from the standard and breed-club material.",
    },

    faq: {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-mudi-standard-2023",
          role: "cited",
          locator: "Origin, Utilization, Coat and Size",
        },
        {
          id: "american-kennel-club-mudi",
          role: "cited",
          locator: "Health, Exercise and Training",
        },
        {
          id: "mudi-club-of-america-health-testing",
          role: "cited",
          locator: "Common Health Tests for Mudis",
        },
      ],
      verifiedOn: null,
      note: "Answers combine breed-standard information with general care guidance. Exercise timing is an estimate.",
    },
  },

  updatedOn: "2026-10-25",
};
