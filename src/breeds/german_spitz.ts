import type { Breed } from "../schema/breed.types";

export const german_spitz: Breed = {
  slug: "german-spitz",
  name: "German Spitz",
  scientificName: null,
  alternateNames: ["Deutscher Spitz"],
  group: "FCI Group 5 — Spitz and primitive types; Section 4 — European Spitz",

  origin: {
    country: "Germany",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/German_spitz.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:German_spitz.jpg",
      title: "German spitz.jpg",
      description: "German Spitz, Mittelspitz variety.",
      creator: "Savannahepryor",
      uploader: "Savannahepryor",
      capturedOn: "2015-07-17",
      uploadedOn: "2016-03-16",
      width: 4592,
      height: 3448,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Savannahepryor, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). No changes made. Adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-25",
    },
  ],

  overview: {
    summary:
      "The German Spitz is a German-origin breed family recognised in several size varieties. It is known for its upright pointed ears, foxy expression, abundant double coat and bushy tail carried over the back. Depending on the variety, a German Spitz can be a small companion or a noticeably larger watchdog. The breed is generally alert, lively and closely attached to its household, and its coat and tendency to notice unfamiliar activity are important considerations for prospective owners.",

    description:
      "German Spitz dogs have a distinctive outline created by a dense undercoat that lifts the longer outer coat away from the body. A mane-like ruff frames the neck and shoulders, while the tail is richly coated and carried curled over the back. The head tapers towards the nose, and the small triangular ears stand upright. Coat colours and size depend on the recognised variety. These dogs are often observant and responsive to activity around the home, so early training should include calm greetings and appropriate responses to sounds and visitors. Regular coat care, reward-based training and activities suited to the individual dog's size and age help support a comfortable home life.",

    history:
      "The FCI breed standard describes German Spitz dogs as descendants of ancient Central European Spitz-type dogs, including the peat-dog and lake-dwelling Spitz types. It notes that many other breeds developed from these dogs. The modern German Spitz standard groups five varieties under one breed standard: Wolfspitz/Keeshond, German Giant Spitz, German Medium Size Spitz, German Miniature Spitz and German Toy Spitz/Pomeranian. The varieties share a recognisable Spitz outline but differ in size and some permitted coat colours.",

    originalPurpose:
      "Watchdog and companion dog, as stated in the FCI breed standard.",

    currentRoles: [
      "Companion dog",
      "Household watchdog",
      "Reward-based obedience and trick training",
      "Suitable canine activities chosen for the dog's variety, age and fitness",
      "Conformation showing",
    ],
  },

  physical: {
    sizeCategory:
      "Small to large depending on variety; the German Spitz is a family of five recognised size varieties.",

    height: {
      // The FCI standard publishes heights by variety, not by sex.
      // These are the combined lower and upper bounds across all five
      // varieties, not a separate male/female standard.
      unit: "cm",
      male: { min: 18, max: 55 },
      female: { min: 18, max: 55 },
    },

    // The FCI standard says each variety should have a weight appropriate
    // to its size but does not publish a numerical weight range.
    weight: {
      unit: null,
      male: null,
      female: null,
    },

    // A reliable breed-wide lifespan figure was not established from
    // the sources reviewed. Do not infer one from the general word
    // "longevity" in a breed standard.
    lifespanYears: null,

    coatType:
      "Double coat with a long, straight, stand-off outer coat and a short, thick, soft undercoat.",

    coatLength:
      "Long and abundant over most of the body, with shorter, dense hair on the head, ears, front of the legs and feet.",

    coatColors: [
      "White",
      "Black",
      "Brown",
      "Orange",
      "Grey-shaded",
      "Other colours permitted by the standard, including orange-sable, cream, cream-sable, black-and-tan, black-and-silver, brown-and-tan and specified parti-colour patterns",
    ],

    sheddingLevel:
      "Seasonal shedding can be substantial. The undercoat is shed heavily during coat changes, and more frequent brushing is useful during those periods.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Small, upright, triangular ears",
      "Foxy, wedge-shaped head",
      "Dense mane-like ruff around the neck and shoulders",
      "Bushy tail carried over the back",
      "Abundant double coat",
      "Five recognised size varieties under the FCI German Spitz standard",
    ],
  },

  temperament: {
    traits: [
      "Alert and attentive",
      "Lively",
      "Usually closely attached to familiar people",
      "Trainable with consistent, positive methods",
      "Can be wary of unfamiliar people",
      "Often quick to notice sounds and activity around the home",
      "May bark to alert its household",
    ],

    // Editorial estimates, not standardised behavioural test results.
    // These scores describe a broad breed tendency and do not predict
    // the behaviour of an individual dog or every size variety.
    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 3,
      independence: 3,
      trainability: 4,
      barking: 4,
      energy: 3,
    },
  },

  care: {
    exercise: {
      level:
        "Moderate as a general starting point; needs vary with variety, age, health and individual temperament.",

      minutesPerDay: null,

      activities: [
        "Daily walks suited to the dog's size and fitness",
        "Short reward-based training sessions",
        "Scent games and food puzzles",
        "Supervised play",
        "Age-appropriate obedience and trick training",
        "Secure outdoor exploration",
      ],
    },

    grooming: {
      level: "Moderate to high, especially during seasonal coat changes",

      brushing:
        "Brush through the coat regularly to help prevent tangles and remove loose undercoat. Increase brushing during heavier seasonal shedding. Work gently through the ruff, feathering and areas where the coat can become compacted. Avoid forceful brushing that can damage the coat or irritate the skin.",

      bathing:
        "Bathe when needed with a dog-appropriate shampoo, rinse thoroughly and dry the coat carefully. Avoid unnecessary frequent bathing and make sure the dense undercoat dries properly.",

      notes: [
        "Expect more loose undercoat during seasonal coat changes.",
        "Introduce brushing and handling gradually from puppyhood.",
        "Check the skin while grooming for irritation, lumps or parasites.",
        "Inspect the ears regularly and ask a veterinarian about redness, odour or discharge.",
        "Trim nails as needed.",
        "Brush teeth regularly using dog-specific dental products.",
        "Do not shave the double coat as a routine grooming shortcut; discuss medical or coat-related concerns with a qualified groomer or veterinarian.",
      ],
    },

    training: {
      difficulty:
        "Moderate. The breed is described as trainable, but alertness and barking may need consistent management.",

      tips: [
        "Use reward-based training and short, engaging sessions.",
        "Teach a reliable recall gradually in controlled environments.",
        "Reward quiet behaviour and calm responses to household sounds.",
        "Practise polite greetings with visitors rather than allowing repeated uncontrolled barking.",
        "Provide suitable enrichment instead of relying on exercise alone.",
        "Teach handling and grooming skills with rewards and patience.",
        "Adapt activities to the dog's particular size variety and physical ability.",
      ],

      socialization:
        "Introduce the dog positively and gradually to different people, calm dogs, household sounds, handling and everyday environments. Reward relaxed behaviour around visitors and unfamiliar activity. Supervise children and dogs together, and allow the individual dog's comfort and behaviour to guide interactions.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Cool and temperate conditions",
        "Cold weather with appropriate shelter and monitoring",
        "Warm weather with shade, fresh water and exercise during cooler periods",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate to life stage, body condition, activity and veterinary needs.",

    feedingFrequency: {
      puppy:
        "Feed an appropriate complete puppy diet in age-appropriate meals. Adjust portions as growth progresses and follow veterinary guidance and the food's feeding instructions.",

      adult:
        "Many adult dogs do well with measured meals on a consistent schedule. The appropriate amount depends on the dog's variety, size, activity, body condition and health.",

      senior:
        "Choose food and meal portions according to the senior dog's body condition, activity and medical needs, with veterinary advice where appropriate.",
    },

    guidelines:
      "Measure portions and monitor body condition rather than relying on a fixed amount for every German Spitz. Keep fresh water available, account for training treats in the daily food allowance and make dietary changes gradually unless a veterinarian advises otherwise. Puppies, adults and older dogs may have different nutritional needs.",

    considerations: [
      "Adjust portions to the individual dog's size and activity.",
      "Monitor body condition and avoid excess weight.",
      "Keep fresh water available throughout the day.",
      "Count treats and chews as part of the overall food allowance.",
      "Use a diet appropriate to the dog's life stage.",
      "Discuss persistent digestive, skin or weight concerns with a veterinarian.",
    ],

    note:
      "This is general canine nutrition guidance, not a German Spitz-specific feeding prescription. Exact portions and energy requirements cannot be established from breed-standard information alone.",
  },

  health: {
    overview:
      "The AKC breed profile reports that progressive retinal atrophy (PRA), retinal dysplasia (RD) and patellar luxation have been seen in some German Spitz dogs, while noting that most of the breed is generally healthy. These reports do not establish an individual dog's diagnosis or the prevalence of each condition across every variety. Discuss the health history of the particular variety and its family line with a veterinarian and responsible breeder.",

    commonConditions: [
      "Progressive retinal atrophy (PRA) has been reported in the breed.",
      "Retinal dysplasia (RD) has been reported in the breed.",
      "Patellar luxation has been reported in the breed.",
    ],

    preventiveCare: [
      "Arrange routine veterinary examinations and age-appropriate preventive care.",
      "Maintain a healthy body condition and suitable daily activity.",
      "Discuss eye health, mobility changes and any inherited conditions known in the dog's family line with a veterinarian.",
      "Seek veterinary advice promptly for changes in vision, gait, comfort or behaviour.",
      "Ask the breeder for documented health-screening results relevant to the dog's variety and family line.",
    ],

    recommendedScreenings: [
      "Patella evaluation, listed in the AKC national breed-club health-testing recommendations.",
      "Hip evaluation, listed in the AKC national breed-club health-testing recommendations.",
      "Elbow evaluation, listed in the AKC national breed-club health-testing recommendations.",
      "Ophthalmologist evaluation, listed in the AKC national breed-club health-testing recommendations.",
      "Multiplex DNA testing, listed in the AKC national breed-club health-testing recommendations.",
      "The German Spitz Breeders and Owners Club also advises consideration of eye testing and patella testing; hip scoring may help build a better picture of health in the population.",
    ],

    dentalCare:
      "Brush the teeth regularly with dog-specific toothpaste and a suitable toothbrush. Have the mouth and teeth checked during routine veterinary examinations, particularly if there is bad breath, discomfort or difficulty eating.",

    earCare:
      "Check the ears regularly for redness, odour, discharge or scratching. Clean only when needed using a product recommended for dogs, and seek veterinary advice if signs of inflammation occur.",

    skinCare:
      "Part the dense coat during grooming to check the skin. Pay attention to tangles, irritation, parasites and damp undercoat, and seek veterinary advice for persistent itching, hair loss or inflamed skin.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "People who want an alert, engaged companion",
      "Owners willing to maintain a dense double coat",
      "Households able to train and manage alert barking",
      "People who enjoy reward-based training and enrichment",
      "Owners prepared to choose a suitable variety for their home and lifestyle",
    ],

    notIdealFor: [
      "People who want a dog with minimal coat maintenance",
      "Households unwilling to address persistent alert barking",
      "People expecting all German Spitz varieties to have the same size or exercise needs",
      "Owners who cannot provide regular interaction, training and grooming",
    ],
  },

  funFacts: [
    "The FCI groups five varieties under the German Spitz standard: Wolfspitz/Keeshond, German Giant Spitz, German Medium Size Spitz, German Miniature Spitz and German Toy Spitz/Pomeranian.",
    "The breed standard describes the German Spitz as a watchdog and companion dog.",
    "The thick neck ruff and bushy tail carried over the back are characteristic features of the breed family.",
    "The permitted colours differ among some German Spitz varieties.",
  ],

  faq: [
    {
      question: "Is the German Spitz one size?",
      answer:
        "No. The FCI standard includes five varieties, from the German Toy Spitz/Pomeranian to the Wolfspitz/Keeshond. They do not all share the same height range.",
    },
    {
      question: "How tall is a German Spitz?",
      answer:
        "The FCI standard lists variety-specific heights: German Toy Spitz/Pomeranian 21 ± 3 cm, German Miniature Spitz 27 ± 3 cm, German Medium Size Spitz 35 ± 5 cm, German Giant Spitz 45 ± 5 cm, and Wolfspitz/Keeshond 49 ± 6 cm. These are variety standards, not a single target height for every German Spitz.",
    },
    {
      question: "How much does a German Spitz weigh?",
      answer:
        "The FCI standard says that each variety should have a weight appropriate to its size, but it does not provide a single numerical weight range for the whole breed. Ask about the particular variety and the individual dog's body condition.",
    },
    {
      question: "Does a German Spitz shed?",
      answer:
        "Yes. The breed has a dense double coat, and seasonal shedding can be substantial. Regular brushing is important, with more frequent coat care during heavier shedding periods.",
    },
    {
      question: "Which health problems should owners know about?",
      answer:
        "The AKC profile reports that progressive retinal atrophy, retinal dysplasia and patellar luxation have been seen in some German Spitz dogs. These reports are not a diagnosis or a statement that every dog will develop these conditions. Discuss appropriate screening with a veterinarian and responsible breeder.",
    },
    {
      question: "Is the German Spitz suitable for apartment living?",
      answer:
        "It depends on the particular variety, the dog's temperament and how well its exercise, enrichment, grooming and barking are managed. The available sources do not establish a universal apartment-suitability rating for all five varieties.",
    },
    {
      question: "What is the German Spitz's life expectancy?",
      answer:
        "A reliable breed-wide numerical life expectancy was not established from the sources reviewed. Lifespan can vary with variety, genetics, health care and individual circumstances, so this record does not assign an unsupported number.",
    },
  ],

  references: [
    "fci-german-spitz-standard-97",
    "vdh-german-spitz-profile",
    "american-kennel-club-german-spitz",
    "akc-german-spitz-health-testing",
    "gsboc-german-spitz-health-testing",
    "wikimedia-german-spitz-savannahepryor",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-german-spitz-standard-97",
          role: "verified",
          locator: "Title and nomenclature: German Spitz / Deutscher Spitz",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The German name is recorded as an alternate label for the breed.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The reviewed breed standard does not establish a separate scientific name for the German Spitz breed.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-spitz-standard-97",
          role: "verified",
          locator: "FCI classification: Group 5, Section 4 European Spitz",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Uses the FCI classification.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-spitz-standard-97",
          role: "verified",
          locator: "Origin: Germany",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The official standard identifies Germany as the country of origin but does not establish one specific region.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-german-spitz-standard-97",
          role: "verified",
          locator: "Historical summary, utilization, general appearance and variety descriptions",
        },
        {
          id: "vdh-german-spitz-profile",
          role: "verified",
          locator: "Breed profile: appearance, coat and recognised varieties",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "User-facing text is an original summary of the standard and breed profile.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-spitz-standard-97",
          role: "verified",
          locator: "General appearance, coat, colours, size and weight by variety",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Physical descriptions follow the FCI standard. Variety-specific measurements are combined only where the schema cannot represent each variety separately.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-spitz-standard-97",
          role: "verified",
          locator: "Size and weight sections for all five varieties",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The combined envelope of 18–55 cm is derived from the FCI variety tolerances: Toy Spitz 21 ± 3 cm at the lower end and Wolfspitz/Keeshond 49 ± 6 cm at the upper end. The schema has only male/female ranges, whereas the standard publishes height by variety, so the same combined range is stored in both slots. This is not a claim that all varieties or sexes have the same target height.",
    },

    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The standard says weight should correspond to variety size but does not provide a numerical breed-wide range.",
    },

    "physical.lifespanYears": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-wide numerical life expectancy was established in the sources reviewed.",
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-german-spitz",
          role: "verified",
          locator: "Grooming section: seasonal shedding and undercoat change",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Seasonal shedding and the need for increased brushing during coat changes are described in the breed profile.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A reliable breed-specific drooling assessment was not established.",
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-spitz-standard-97",
          role: "verified",
          locator: "Behaviour and character sections for German Spitz varieties",
        },
        {
          id: "american-kennel-club-german-spitz",
          role: "verified",
          locator: "Breed profile summary",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Traits summarise breed-standard descriptions and are not guarantees about individual dogs.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial 1–5 estimates, not scores from a standardised behavioural assessment. Individual dogs and varieties may differ.",
    },

    "care.exercise.level": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "A broad editorial starting point for the breed family; the reviewed standard does not prescribe a daily exercise level.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A single breed-wide daily exercise duration was not established; requirements vary by variety, age, health and individual dog.",
    },

    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine enrichment suggestions, not breed-standard requirements.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-german-spitz-standard-97",
          role: "verified",
          locator: "Coat sections describing the double coat and abundant furnishings",
        },
        {
          id: "american-kennel-club-german-spitz",
          role: "verified",
          locator: "Grooming section: coat maintenance and seasonal shedding",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Coat characteristics are verified; the grooming instructions are original practical guidance.",
    },

    "care.grooming.bathing": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General dog-coat care advice, not a German Spitz-specific medical recommendation.",
    },

    "care.grooming.notes": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine grooming and hygiene advice for dogs with a dense coat.",
    },

    "care.training.difficulty": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-german-spitz-standard-97",
          role: "verified",
          locator: "Behaviour and character: attentiveness and trainability",
        },
        {
          id: "american-kennel-club-german-spitz",
          role: "verified",
          locator: "Breed profile summary",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The difficulty label is a practical interpretation of the breed's alertness and trainability, not a formal test score.",
    },

    "care.training.tips": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General reward-based training advice.",
    },

    "care.training.socialization": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General puppy and dog socialization guidance.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The reviewed sources do not establish one apartment-suitability value for all five size varieties.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial suitability estimate. A yard does not replace walks, supervision, training or enrichment.",
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General environmental guidance; individual heat and cold tolerance depends on health, coat, acclimatisation and conditions.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A reliable breed-wide tolerance for time alone was not established.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine nutrition advice; not a breed-specific feeding prescription.",
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-german-spitz",
          role: "verified",
          locator: "Health section: reported PRA, retinal dysplasia and patella luxation",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Reported conditions are presented as concerns seen in some dogs, not as a diagnosis or a prevalence estimate.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-german-spitz",
          role: "verified",
          locator: "Health section: PRA, RD and patella luxation",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The list reflects conditions reported in the cited breed profile; it does not rank prevalence.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-german-spitz-health-testing",
          role: "verified",
          locator: "German Spitz: recommended patella, hip, elbow, ophthalmologist and multiplex DNA tests",
        },
        {
          id: "gsboc-german-spitz-health-testing",
          role: "verified",
          locator: "Health and testing: annual eye test, patella test and discussion of hip scoring",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Screening lists are recommendations from the cited organisations. Discuss which tests are appropriate for the individual dog's variety and family line.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive veterinary care guidance.",
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
      note: "General skin and coat observation advice.",
    },

    suitability: {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial lifestyle guidance based on the breed's coat, alertness and variety-dependent size; not a validated suitability test.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A single first-time-owner suitability rating is not established for all German Spitz varieties and individual temperaments.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal family-with-children rating is not established; individual temperament, socialization and supervision matter.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability for senior owners depends on the variety, the individual dog's needs and the owner's circumstances.",
    },

    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial estimate that owners who can provide regular engagement and training may be a good match.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A single apartment-living rating would not accurately represent all five varieties.",
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-spitz-standard-97",
          role: "verified",
          locator: "Historical summary, utilization and variety sections",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Facts are paraphrased from the FCI standard.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-german-spitz-standard-97",
          role: "verified",
          locator: "Variety descriptions, size and weight sections",
        },
        {
          id: "american-kennel-club-german-spitz",
          role: "verified",
          locator: "Health and grooming sections",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Answers distinguish variety-specific standard facts from information that was not established in the reviewed sources.",
    },
  },

  updatedOn: "2026-10-25",
};
