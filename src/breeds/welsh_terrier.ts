import type { Breed } from "../schema/breed.types";

export const welsh_terrier: Breed = {
  slug: "welsh-terrier",
  name: "Welsh Terrier",
  scientificName: null,
  alternateNames: [
    "Welsh Black and Tan Rough-Coated Terrier",
    "Old English Terrier",
  ],
  group:
    "AKC Terrier Group; FCI Group 3 — Terriers, Section 1 — Large and medium-sized Terriers",

  origin: {
    country: "Great Britain",
    region: "Wales",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Welsh_Terrier.JPG",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Welsh_Terrier.JPG",
      title: "Welsh Terrier.JPG",
      description: "A Welsh Terrier photographed outdoors.",
      creator: "Shleiderbmx",
      uploader: "Shleiderbmx",
      capturedOn: "2009-05-24",
      uploadedOn: "2009-06-17",
      width: 4752,
      height: 3168,
      licenseId: "cc-by-3.0",
      attribution:
        "Photo by Shleiderbmx, via Wikimedia Commons, CC BY 3.0 (https://creativecommons.org/licenses/by/3.0/). Indicate changes, if any; attribution does not imply endorsement.",
      restrictions: null,
      metadataCheckedOn: "2026-10-24",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Welshterrier.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Welshterrier.jpg",
      title: "Welshterrier.jpg",
      description: "A Welsh Terrier named Fracas Madame Butterfly.",
      creator: "Ebba Persson",
      uploader: "Ebbsson (original Swedish Wikipedia uploader); later transferred to Wikimedia Commons",
      capturedOn: "2004-09-20",
      uploadedOn: "2006-12-10",
      width: 398,
      height: 320,
      licenseId: "cc-by-sa-2.5",
      attribution:
        "Photo by Ebba Persson, via Wikimedia Commons, CC BY-SA 2.5 (https://creativecommons.org/licenses/by-sa/2.5/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-24",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Welsh_Terrier_Image.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Welsh_Terrier_Image.jpg",
      title: "Welsh Terrier Image.jpg",
      description: "A Welsh Terrier photographed outdoors.",
      creator: "cameille",
      uploader: "Ltshears (Flickr upload bot)",
      capturedOn: "2008-01-10",
      uploadedOn: "2008-10-05",
      width: 1024,
      height: 768,
      licenseId: "cc-by-sa-2.0",
      attribution:
        "Photo by cameille, via Wikimedia Commons, CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-24",
    },
  ],

  overview: {
    summary:
      "The Welsh Terrier is a compact, sturdy terrier from Wales with a hard, wiry coat, a rectangular head and distinctive facial furnishings. Alert, playful and energetic, it was developed for hunting and remains an active companion that benefits from consistent training, daily exercise and regular coat care.",

    description:
      "Welsh Terriers have a balanced, sturdy build and a characteristic black-and-tan or black-grizzle-and-tan coat. The head is rectangular, with small folded ears and a beard that contributes to the breed's recognisable expression. Historically bred to pursue quarry such as foxes, badgers and otters, the Welsh Terrier retains curiosity, persistence and an interest in moving animals. It often enjoys interactive games, scent-based activities and training that gives it a clear task. This is not usually a low-activity dog: daily walks, safe opportunities to explore and mental enrichment help channel its energy. The harsh outer coat needs routine brushing and periodic professional grooming or hand-stripping, depending on the coat and the owner's goals.",

    history:
      "The Welsh Terrier developed in Wales from the working black-and-tan terrier tradition of Britain. It was used to hunt foxes, badgers and otters, sometimes working alongside hounds. The breed became established in dog shows during the nineteenth century and later gained popularity as a companion. Its historical relationship to other British terriers is well recognised, but the exact contribution of individual ancestral breeds is not fully documented, so detailed claims about a precise foundation cross should be treated cautiously.",

    originalPurpose:
      "A working terrier developed for hunting foxes, badgers and otters, including pursuing quarry into confined spaces and working with hunting packs.",

    currentRoles: [
      "Companion dog",
      "Scent-work and tracking activities",
      "Agility and suitable dog sports",
      "Obedience and rally",
      "Hiking and active outdoor companionship",
      "Conformation showing",
    ],
  },

  physical: {
    sizeCategory: "Small-to-medium, sturdy and compact terrier",

    // The UK Kennel Club standard sets a maximum height of 39 cm.
    // These ranges are practical approximations, not sex-specific standards.
    height: {
      unit: "cm",
      male: { min: 38, max: 39 },
      female: { min: 35, max: 39 },
    },

    // UK Kennel Club standard gives a breed weight of 9–9.5 kg.
    // The same standard range is repeated because the schema is BySex.
    weight: {
      unit: "kg",
      male: { min: 9, max: 9.5 },
      female: { min: 9, max: 9.5 },
    },

    lifespanYears: {
      min: 12,
      max: 15,
    },

    coatType:
      "A hard, dense, wiry outer coat with a short, soft undercoat. The coat forms a close-fitting jacket, with dense, wiry furnishings on the muzzle, legs and quarters.",

    coatLength: "Short-to-medium, wiry and close-fitting",

    coatColors: [
      "Black and tan",
      "Black grizzle and tan",
    ],

    sheddingLevel:
      "Low visible shedding when the coat is maintained properly, although loose hairs can still be released. Regular brushing and appropriate stripping or clipping help keep the coat tidy.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Compact, sturdy and balanced outline",
      "Rectangular head with a strong muzzle",
      "Small, V-shaped ears folded forward",
      "Distinctive beard and facial furnishings",
      "Hard, wiry coat with a softer undercoat",
      "Traditional dark jacket with tan head, legs and underside",
      "Strong legs and agile, free movement",
      "Alert, lively terrier expression",
    ],
  },

  temperament: {
    traits: [
      "Alert",
      "Spirited",
      "Playful",
      "Intelligent",
      "Friendly with familiar people",
      "Curious",
      "Courageous",
      "Persistent",
      "Independent at times",
    ],

    // Editorial estimates on a 1–5 scale, not standardised test results.
    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 4,
      protectiveness: 3,
      independence: 4,
      trainability: 3,
      barking: 4,
      energy: 4,
    },
  },

  care: {
    exercise: {
      level: "Moderate to high",

      // Practical estimate for a healthy adult; adjust to the individual dog.
      minutesPerDay: {
        min: 45,
        max: 75,
      },

      activities: [
        "Daily walks with opportunities to sniff and explore",
        "Play in a secure, enclosed area",
        "Reward-based obedience practice",
        "Scent-work and search games",
        "Fetch and interactive play",
        "Agility or other suitable dog sports",
        "Food puzzles and short problem-solving activities",
      ],
    },

    grooming: {
      level: "Moderate to high",

      brushing:
        "Brush and comb the coat once or twice a week to remove debris and reduce tangles. Pay attention to the beard, legs and furnishings. A traditional hard coat may need hand-stripping; clipping is a common companion-dog option but can change the coat's texture over time. A groomer experienced with wire-coated terriers can help choose a suitable routine.",

      bathing:
        "Bathe when necessary with a dog-appropriate shampoo and rinse thoroughly. Avoid unnecessary frequent bathing or harsh products that may irritate the skin or affect coat condition.",

      notes: [
        "Plan regular professional grooming or learn an appropriate hand-stripping routine.",
        "Comb the beard and furnishings to remove food, moisture and tangles.",
        "Inspect the skin during grooming for irritation, parasites or unusual lumps.",
        "Trim nails regularly and check the feet after outdoor activity.",
        "Brush teeth with a dog-specific toothbrush and toothpaste.",
        "Check ears for redness, odour, discharge or discomfort.",
        "Introduce grooming and handling gradually using positive reinforcement.",
      ],
    },

    training: {
      difficulty:
        "Moderate: intelligent and engaged, but terrier persistence and interest in moving animals can make consistency and distraction management important.",

      tips: [
        "Use reward-based methods and keep training sessions varied.",
        "Practise recall in secure areas before introducing stronger distractions.",
        "Teach loose-leash walking, leave-it and calm greetings early.",
        "Reward quiet settling as well as active performance.",
        "Use scent games and structured play to provide mental work.",
        "Manage access to small animals and use secure outdoor spaces where needed.",
        "Avoid harsh punishment; clear routines and consistent reinforcement are more useful.",
      ],

      socialization:
        "Introduce the dog to different people, environments, handling routines and suitable dogs in gradual, positive ways. Continue training throughout adulthood, and practise calm behaviour around other dogs and small animals. Supervise interactions where excitement or prey drive may make them difficult to manage.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool weather with appropriate shelter",
        "Warm weather with shade, fresh water and exercise during cooler hours",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced diet appropriate to life stage, body condition, activity level and veterinary needs.",

    feedingFrequency: {
      puppy:
        "Feed a complete puppy diet in age-appropriate measured meals. Ask a veterinarian to guide portions and changes as the puppy grows.",

      adult:
        "Many adult dogs do well with two measured meals per day. Adjust portions for activity, body condition and individual health needs.",

      senior: null,
    },

    guidelines:
      "Measure portions and monitor body condition rather than relying on a fixed amount for every dog. Keep fresh water available and include treats in the daily food allowance. If a dog gains weight, adjust portions and activity with veterinary guidance. Discuss persistent digestive symptoms, suspected food reactions or age-related changes with a veterinarian.",

    considerations: [
      "Adjust portions for age, activity and body condition.",
      "Avoid excess weight that can put unnecessary strain on joints.",
      "Use treats as part of the daily calorie allowance.",
      "Provide fresh water throughout the day.",
      "Ask a veterinarian about persistent digestive or skin problems.",
      "Review diet needs as the dog ages or develops a medical condition.",
    ],

    note:
      "Individual calorie needs vary. Use feeding guidance as a starting point and adjust according to body condition and veterinary advice.",
  },

  health: {
    overview:
      "Welsh Terriers are generally active, robust dogs, but like other breeds they can develop inherited or acquired health problems. The breed club specifically recommends testing for Primary Lens Luxation (PLL), an inherited eye condition. Other veterinary references discuss concerns such as glaucoma, epilepsy, hypothyroidism and allergies. These are health risks to be aware of, not conditions that every Welsh Terrier will develop. Breeder health records and regular veterinary examinations help inform care, but no single test guarantees future health.",

    commonConditions: [
      "Primary Lens Luxation (PLL): an inherited eye condition for which a DNA test is recommended by the breed club.",
      "Glaucoma: an eye disease that can threaten vision and requires prompt veterinary assessment if suspected.",
      "Hypothyroidism: reduced thyroid function that may cause changes in skin, coat, weight or energy.",
      "Epilepsy: recurrent seizures require veterinary investigation and management.",
      "Allergies and skin irritation: persistent itching, redness or recurrent ear and skin problems should be assessed by a veterinarian.",
      "Hip dysplasia and Legg-Calvé-Perthes disease are mentioned in breed health references, but their individual risk varies and should not be assumed in every dog.",
    ],

    preventiveCare: [
      "Ask the breeder for the dog's relevant health records and PLL DNA test status.",
      "Arrange regular veterinary examinations and keep vaccinations and parasite prevention appropriate to local risks.",
      "Seek prompt veterinary advice for eye pain, cloudiness, redness or sudden changes in vision.",
      "Consult a veterinarian about seizures, persistent itching, unexplained weight changes or reduced activity.",
      "Maintain a healthy body condition and regular exercise routine.",
      "Keep up with dental care, nail trimming, ear checks and coat maintenance.",
      "Discuss the timing and value of health screening with a veterinarian based on the dog's history and family background.",
    ],

    recommendedScreenings: [
      "Primary Lens Luxation (PLL) DNA test — recommended by the Welsh Terrier Club of America",
      "Veterinary eye examination when clinically indicated or recommended from family history",
      "Thyroid evaluation if symptoms or veterinary findings warrant it",
      "Orthopaedic assessment if there are mobility concerns or relevant family history",
    ],

    dentalCare:
      "Brush the teeth regularly with a dog-specific toothbrush and toothpaste. Arrange veterinary dental checks and seek advice for persistent bad breath, gum redness, pain or difficulty chewing.",

    earCare:
      "Check the ears routinely for redness, odour, discharge or discomfort. Clean only as advised by a veterinarian and seek care if signs of infection appear.",

    skinCare:
      "Part the coat during grooming to check for irritation, parasites, unusual lumps or hair loss. Persistent itching, redness or recurring skin problems should be assessed by a veterinarian.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "People who enjoy daily walks and interactive play",
      "Owners willing to provide consistent training and enrichment",
      "Households prepared for regular coat maintenance",
      "People interested in scent-work, agility or other suitable dog sports",
      "Owners able to manage terrier curiosity and interest in small animals",
    ],

    notIdealFor: [
      "People seeking a very low-energy dog",
      "Households unable to provide daily activity and interaction",
      "Owners who want a coat that needs no regular grooming",
      "People expecting reliable off-leash behaviour without recall training",
      "Households unable to supervise interactions with small animals or unfamiliar dogs when needed",
    ],
  },

  funFacts: [
    "The Welsh Terrier developed in Wales and has a long history as a working hunting terrier.",
    "The breed was used to hunt foxes, badgers and otters.",
    "Its traditional coat combines a hard, wiry outer layer with a softer undercoat.",
    "Welsh Terriers have been shown in dog shows since the nineteenth century.",
    "The breed's familiar black-and-tan look is also reflected in its historical name, the Welsh Black and Tan Rough-Coated Terrier.",
  ],

  faq: [
    {
      question: "How much exercise does a Welsh Terrier need?",
      answer:
        "A healthy adult may benefit from roughly 45–75 minutes of daily activity, adjusted for age, health and temperament. Combine walks with play, training and sniffing opportunities rather than relying on exercise alone.",
    },
    {
      question: "Do Welsh Terriers shed?",
      answer:
        "They tend to have low visible shedding when their wiry coat is properly maintained, but they can still release loose hair. Brushing and suitable professional grooming help keep the coat tidy.",
    },
    {
      question: "Are Welsh Terriers easy to train?",
      answer:
        "They are intelligent and capable learners, but their terrier curiosity and persistence can make training challenging around distractions. Short, varied, reward-based sessions and consistent recall practice are useful.",
    },
    {
      question: "Are Welsh Terriers good with children?",
      answer:
        "An individual Welsh Terrier may live successfully with children when introductions, training and supervision are appropriate. Suitability depends on the dog and the household; supervise interactions and teach children to respect the dog's space.",
    },
    {
      question: "What grooming does a Welsh Terrier need?",
      answer:
        "Brush and comb the coat once or twice a week, paying attention to the beard and furnishings. Traditional coats may need hand-stripping, while clipping is a common pet-grooming option. A groomer familiar with wire-coated terriers can help establish a suitable routine.",
    },
    {
      question: "What health test should I ask a breeder about?",
      answer:
        "Ask about Primary Lens Luxation (PLL) DNA testing, which is recommended by the breed club. Discuss family history and any other appropriate screening with a veterinarian.",
    },
    {
      question: "What colours does a Welsh Terrier have?",
      answer:
        "The recognised standard colours are black and tan or black grizzle and tan. The darker jacket covers much of the body, while tan appears on the head, legs and underside.",
    },
    {
      question: "How long does a Welsh Terrier live?",
      answer:
        "The American Kennel Club lists a life expectancy of 12–15 years. Individual lifespan varies with genetics, health, preventive care and living conditions.",
    },
    {
      question: "Can a Welsh Terrier live in an apartment?",
      answer:
        "It depends on the individual dog and the household's ability to provide exercise, enrichment and appropriate noise management. A yard can be useful but does not replace walks, training or interaction.",
    },
  ],

  references: [
    "fci-welsh-terrier-nomenclature",
    "royal-kennel-club-welsh-terrier-standard",
    "american-kennel-club-welsh-terrier",
    "american-kennel-club-terrier-group-health-testing-requirements",
    "welsh-terrier-club-america-health-statement",
    "vcahospitals-welsh-terrier",
    "wikimedia-welsh-terrier-shleiderbmx",
    "wikimedia-welshterrier-ebba-persson",
    "wikimedia-welsh-terrier-image-cameille",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A breed-specific scientific name is not recorded; the catalog does not require a formal taxonomic name.",
    },

    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "Breed history: former names",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Historical names are recorded in breed-history references; use as alternate names rather than as separate breeds.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-welsh-terrier-nomenclature",
          role: "verified",
          locator: "FCI nomenclature: Group 3, Terrier",
        },
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "Breed profile: Terrier Group",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Registry group names differ by kennel organisation.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-welsh-terrier-nomenclature",
          role: "verified",
          locator: "FCI nomenclature: country of origin",
        },
      ],
      verifiedOn: "2026-10-24",
      note: null,
    },

    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "Breed history: Welsh origins",
        },
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "cited",
          locator: "Breed standard and historical overview",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Wales is the established regional origin within Great Britain.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-welsh-terrier-nomenclature",
          role: "verified",
          locator: "FCI breed information and classification",
        },
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "Breed profile: history, temperament, coat and exercise",
        },
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "cited",
          locator: "Standard: coat, colour, size and movement",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Descriptions are original summaries. Uncertain details about exact ancestral crosses are not presented as established fact.",
    },

    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "cited",
          locator: "Standard: size and weight",
        },
      ],
      verifiedOn: null,
      note: "Editorial size category based on published measurements and build.",
    },

    "physical.height": {
      reliability: "estimate",
      sources: [
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "cited",
          locator: "Standard: height not exceeding 39 cm",
        },
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile: typical height",
        },
      ],
      verifiedOn: null,
      note: "The source standard gives a maximum height and describes females as proportionally smaller, not separate full ranges. The stored ranges are approximate display values, not sex-specific official limits.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "verified",
          locator: "Standard: weight 9–9.5 kg",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "The standard gives a breed weight range, not separate male and female ranges. The same range is repeated in both schema slots for compatibility.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "Breed profile: life expectancy",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Published life expectancy, not a guarantee for an individual dog.",
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "verified",
          locator: "Standard: coat texture and undercoat",
        },
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile: coat",
        },
      ],
      verifiedOn: "2026-10-24",
      note: null,
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "verified",
          locator: "Standard: coat",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "The standard describes a very close, hard and wiry coat.",
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "verified",
          locator: "Standard: colour",
        },
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "Breed profile: registered standard colours",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Black and tan and black grizzle and tan are recognised standard colour descriptions.",
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vcahospitals-welsh-terrier",
          role: "verified",
          locator: "Quick facts: coat care and shedding",
        },
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile: coat and grooming",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Qualitative description; no measured breed-specific shedding rate is claimed.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable, standardised breed-specific drooling rating was established.",
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "verified",
          locator: "Standard: head, coat, colour and movement",
        },
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile: appearance",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Tail docking has historical breed-standard context, but docking is regulated or prohibited in some jurisdictions; natural tails are included in modern standards.",
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-welsh-terrier-nomenclature",
          role: "verified",
          locator: "FCI breed standard reference",
        },
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "Breed profile: temperament",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Traits describe general breed tendencies and do not predict every individual dog's behaviour.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile: personality and activity",
        },
      ],
      verifiedOn: null,
      note: "All 1–5 scores are editorial estimates, not standardised behavioural test results.",
    },

    "care.exercise": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile: exercise and activity",
        },
        {
          id: "vcahospitals-welsh-terrier",
          role: "cited",
          locator: "Exercise and activity guidance",
        },
      ],
      verifiedOn: null,
      note: "Exercise level and minutes are practical estimates for a healthy adult, not official standard values. Adjust to age, health and individual tolerance.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "Breed profile: brushing, clipping and hand-stripping",
        },
        {
          id: "vcahospitals-welsh-terrier",
          role: "cited",
          locator: "Grooming overview",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Grooming demands depend on coat type, maintenance method and whether a traditional show coat is desired.",
    },

    "care.training": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Training and socialisation advice is general humane-dog-training guidance adapted to an active terrier.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Apartment suitability depends on exercise, enrichment, noise management and the individual dog; no universal yes/no value is recorded.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile: exercise and secure outdoor play",
        },
      ],
      verifiedOn: null,
      note: "A secure yard can help provide activity but does not replace walks, training or interaction.",
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General climate and exercise advice; adapt activity and shelter to local weather and the dog's health.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific duration for being left alone was established.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine nutrition guidance; individual needs depend on life stage, body condition and veterinary advice.",
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific senior feeding frequency was established.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "welsh-terrier-club-america-health-statement",
          role: "verified",
          locator: "Health statement: Primary Lens Luxation testing",
        },
        {
          id: "american-kennel-club-terrier-group-health-testing-requirements",
          role: "verified",
          locator: "Welsh Terrier: PLL DNA test",
        },
        {
          id: "vcahospitals-welsh-terrier",
          role: "verified",
          locator: "Health concerns and veterinary screening overview",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Health risks and screening recommendations are not diagnoses and do not establish that an individual dog will develop a condition.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vcahospitals-welsh-terrier",
          role: "verified",
          locator: "Health concerns: glaucoma, epilepsy, hypothyroidism, allergies and orthopaedic conditions",
        },
        {
          id: "welsh-terrier-club-america-health-statement",
          role: "verified",
          locator: "Breed-club health statement",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Conditions are included as reported health concerns, not as a claim about prevalence in all Welsh Terriers.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive veterinary guidance.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "welsh-terrier-club-america-health-statement",
          role: "verified",
          locator: "PLL DNA testing recommendation",
        },
        {
          id: "american-kennel-club-terrier-group-health-testing-requirements",
          role: "verified",
          locator: "Welsh Terrier: Primary Lens Luxation DNA test",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "The breed club recommends PLL testing and states that no tests are currently required by the club. Confirm current recommendations with the club and veterinarian.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine dental-care advice.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General ear-monitoring advice.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General skin and coat inspection advice.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability depends on support, training commitment, activity and individual temperament; no universal yes/no value is recorded.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability depends on the individual dog, child behaviour, supervision and household experience.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability depends on mobility, support, activity preferences and the individual dog.",
    },

    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile: activity needs",
        },
      ],
      verifiedOn: null,
      note: "Editorial matching guidance based on exercise and training needs.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Apartment living depends on exercise, enrichment, noise management and the individual dog.",
    },

    "suitability.idealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile: exercise, grooming and temperament",
        },
      ],
      verifiedOn: null,
      note: "Editorial matching guidance, not a guarantee of compatibility.",
    },

    "suitability.notIdealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile: exercise, grooming and temperament",
        },
      ],
      verifiedOn: null,
      note: "Editorial matching guidance, not a guarantee of incompatibility.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "Breed history and former names",
        },
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "cited",
          locator: "Standard: coat and traditional colour",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Historical facts are summarised in original wording.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "Breed profile: lifespan, exercise, grooming and temperament",
        },
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "verified",
          locator: "Standard: coat, colour, size and weight",
        },
        {
          id: "welsh-terrier-club-america-health-statement",
          role: "verified",
          locator: "PLL DNA testing recommendation",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Answers are original summaries and distinguish standard facts, health screening and general care advice.",
    },
  },

  updatedOn: "2026-10-24",
};
