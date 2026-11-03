import type { Breed } from "../schema/breed.types";

export const podenco_canario: Breed = {
  slug: "podenco-canario",
  name: "Podenco Canario",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Canarian Warren Hound",
    "Canarian Podenco",
    "Chien de Garenne des Canaries",
    "Kanarischer Podenco",
  ],

  group:
    "FCI Group 5 — Spitz and primitive types; Section 7 — Primitive type, hunting dogs; without working trial",

  origin: {
    country: "Spain",
    region: "Canary Islands",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Podenco_canario_hembra.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Podenco_canario_hembra.jpg",
      title: "Podenco canario hembra.jpg",
      description:
        "A female Podenco Canario photographed in the countryside.",
      creator: "Marianne Perdomo",
      uploader: "Mperdomo",
      capturedOn: "2007-05-26",
      uploadedOn: "2007-12-09",
      width: 2016,
      height: 1512,
      licenseId: "cc-by-sa-4.0",
      attribution:
        'Marianne Perdomo, "Podenco canario hembra.jpg", via Wikimedia Commons, licensed under CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). No changes made.',
      restrictions: null,
      metadataCheckedOn: "2026-11-02",
    },
  ],

  overview: {
    summary:
      "The Podenco Canario is a lean, athletic hunting dog from Spain's Canary Islands. Developed for rabbit hunting across demanding terrain, it combines a highly developed sense of smell with keen hearing and sight. It is energetic, alert and strongly attached to its people, and needs regular physical activity, mental engagement and careful management around wildlife.",

    description:
      "The Podenco Canario has a distinctive light-framed, muscular build, a slightly elongated body, large upright ears and an alert expression. Its short, dense coat is usually a combination of red and white, with red shades ranging from orange to deep mahogany. The breed was developed to work across the varied landscapes of the Canary Islands, where it locates rabbits using scent, sight and hearing. Its stamina and hunting instincts remain important parts of its character. In a companion home, it benefits from an active routine, opportunities to investigate scents and secure outdoor spaces where it can move freely without chasing wildlife.",

    history:
      "The Podenco Canario developed in the Canary Islands, particularly on Gran Canaria and Tenerife. The FCI breed history describes a possible ancient connection with Egyptian dogs and suggests that dogs may have reached the islands through Phoenician, Greek, Carthaginian or Egyptian contacts. The precise route and ancestry are historical hypotheses rather than conclusively established facts. The breed's traditional role was rabbit hunting across rocky, uneven and sometimes volcanic terrain. Its official FCI standard was published in 1999 and records 24 June 1987 as the date of publication of the original valid standard.",

    originalPurpose:
      "Rabbit hunting across the varied terrain of the Canary Islands, using scent, sight and hearing to locate rabbits in rocky ground, stone walls, crevices, volcanic formations and dense vegetation.",

    currentRoles: [
      "Traditional rabbit-hunting dog",
      "Scent-based tracking and searching activities",
      "Lure coursing and other suitable running sports",
      "Agility and athletic activities adapted to the individual dog",
      "Active companion for households able to meet its exercise and enrichment needs",
    ],
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: { min: 55, max: 64 },
      female: { min: 53, max: 60 },
    },

    weight: {
      unit: null,
      male: null,
      female: null,
    },

    lifespanYears: null,

    coatType: "Smooth, short and dense.",

    coatLength:
      "Short and close to the body, with a smooth, dense texture.",

    coatColors: [
      "Red and white combinations.",
      "Orange-red with white.",
      "Deep red or mahogany with white.",
      "Different intensities and combinations of red and white.",
    ],

    sheddingLevel:
      "The short coat is relatively easy to maintain. A precise breed-specific shedding level is not established by the sources used for this record.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Lean, muscular and lightly built body.",
      "Body slightly longer than the height at the withers.",
      "Large, pointed ears that become erect when the dog is alert or excited.",
      "Small, obliquely set, almond-shaped eyes, usually in shades of amber.",
      "Long, tapered muzzle and a nose whose colour harmonises with the coat.",
      "Deep but relatively high-set chest and a distinctly tucked-up abdomen.",
      "Low-set tail reaching slightly below the hock, often with a white tip.",
      "Agile, extended and light movement.",
    ],
  },

  temperament: {
    traits: [
      "Courageous",
      "Energetic and highly active",
      "Alert and attentive to its surroundings",
      "Strongly motivated by hunting and chasing",
      "Very attached to its familiar people",
      "Intelligent and responsive to its environment",
      "Can be restless when its activity needs are not met",
      "Generally non-aggressive according to the breed standard",
      "May become strongly focused on scents or moving animals",
    ],

    scores: {
      affection: 4,
      withChildren: null,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 1,
      independence: 4,
      trainability: 3,
      barking: 2,
      energy: 5,
    },
  },

  care: {
    exercise: {
      level:
        "High. This is an athletic hunting breed with substantial stamina and a strong desire to investigate its surroundings. It needs daily physical activity as well as opportunities to use its nose and engage its mind. Exercise should be adapted to age, fitness, health and weather.",

      minutesPerDay: null,

      activities: [
        "Daily walks with time for sniffing and exploration",
        "Secure, supervised running in a properly enclosed area",
        "Scent-search and tracking games",
        "Reward-based nose-work activities",
        "Lure coursing where available and suitable",
        "Agility activities adapted to the dog's fitness",
        "Structured outdoor exploration on a lead or long line",
        "Food-search and problem-solving enrichment",
      ],
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush periodically with a soft brush or grooming mitt to remove loose hair and surface dirt and to check the skin.",

      bathing:
        "Bathe when necessary using a dog-specific shampoo. Avoid unnecessary frequent bathing, and dry the dog properly afterwards.",

      notes: [
        "The smooth, short coat is relatively straightforward to maintain.",
        "Check the skin regularly for irritation, scratches and other changes.",
        "Inspect the paws and pads after running or walking over rough ground.",
        "Check the ears regularly for dirt, redness, odour or irritation.",
        "Trim nails when needed to maintain comfortable movement.",
        "Brush the teeth regularly with dog-specific toothpaste.",
        "Check the coat and skin after outdoor activity for ticks, thorns and plant material.",
      ],
    },

    training: {
      difficulty:
        "Moderate to challenging for owners unfamiliar with hunting breeds. The Podenco Canario can be responsive to thoughtful training, but its strong interest in wildlife and scent can compete with attention to its handler. Consistency, patience and secure management are important.",

      tips: [
        "Use reward-based methods and short, engaging training sessions.",
        "Build recall gradually, beginning in quiet and secure environments.",
        "Do not assume reliable off-lead recall around rabbits or other wildlife.",
        "Use a lead or long line in open areas where chasing could be dangerous.",
        "Reward attention to the handler and calm responses to distractions.",
        "Provide scent games and tracking activities as appropriate outlets for natural hunting behaviour.",
        "Use secure fencing because an athletic hunting dog may pursue an interesting scent or moving animal.",
        "Avoid harsh or intimidating handling; use clear, consistent cues and suitable rewards.",
      ],

      socialization:
        "Introduce puppies gradually and positively to different people, dogs, sounds, surfaces, handling and everyday environments. Supervise interactions with children and other animals. Continue practising calm greetings, lead skills and attention around distractions throughout adulthood. Because of the breed's hunting motivation, introductions to small pets require particular care and should never be assumed safe without individual assessment and supervision.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Warm climates, with access to shade and fresh water.",
        "Temperate climates with suitable shelter.",
        "Hot weather with exercise scheduled carefully and protection from overheating.",
        "Cool or cold weather with appropriate shelter and protection when needed.",
      ],

      aloneTimeTolerance:null
        },
  },

  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate to the dog's life stage, body condition, activity level and veterinary needs.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Use the feeding guide on a complete commercial dog food as a starting point. Adjust portions according to the dog's age, activity, body condition and the energy density of the food. Measure meals, include treats in the daily food allowance and provide fresh water. Ask a veterinarian for advice about growth, weight management or a therapeutic diet.",

    considerations: [
      "Maintain a healthy body condition without assuming that every lean-looking dog is underweight.",
      "Adjust food portions to actual activity levels and changes in exercise.",
      "Monitor body condition and weight over time.",
      "Include treats and training rewards in the overall daily food allowance.",
      "Make dietary changes gradually unless a veterinarian recommends otherwise.",
      "Provide fresh water, particularly after exercise and in warm weather.",
      "Seek veterinary advice for persistent digestive problems, appetite changes or unexplained weight loss.",
    ],

    note:
      "A fixed portion size or feeding frequency cannot be reliably prescribed for every Podenco Canario. Individual requirements depend on age, body condition, food energy density, activity and health.",
  },

  health: {
    overview:
      "The sources reviewed for this record do not establish a reliable population-level health profile, a numerical prevalence of inherited disorders or a recognised breed-wide screening schedule for the Podenco Canario. Its athletic build and traditional work in rough terrain make sensible monitoring of general fitness, movement, paws and skin useful, but these are practical care considerations rather than evidence of specific inherited diseases. A veterinarian should assess any persistent lameness, injury, unexplained fatigue, appetite change or other unusual symptom.",

    commonConditions: [],

    preventiveCare: [
      "Arrange routine veterinary examinations and maintain vaccinations and parasite prevention appropriate to the dog's circumstances.",
      "Monitor body condition, muscle condition and changes in stamina.",
      "Inspect paws and pads after activity on rocky, rough or uneven ground.",
      "Check for cuts, thorns, ticks and other outdoor-related injuries after walks and running.",
      "Provide shade, fresh water and rest during hot weather.",
      "Build exercise gradually and adapt strenuous activity to age, fitness and health.",
      "Discuss the dog's family health history and any relevant individual screening with a veterinarian.",
      "Maintain regular dental, ear, nail and skin care.",
    ],

    recommendedScreenings: [],

    dentalCare:
      "Brush the teeth regularly with dog-specific toothpaste. Arrange routine veterinary dental checks and seek advice for persistent bad breath, gum inflammation, oral pain or difficulty chewing.",

    earCare:
      "Check the ears regularly for wax, debris, odour, redness or repeated scratching. Clean only when needed with a veterinarian-approved product and seek veterinary advice if irritation persists.",

    skinCare:
      "Inspect the skin and coat during routine grooming and after outdoor activity. Look for scratches, irritation, parasites and other changes. Seek veterinary advice for persistent itching, redness, sores or unexplained skin changes.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Active owners who can provide regular exercise and mental enrichment",
      "People interested in scent work, tracking or suitable running sports",
      "Households able to provide secure outdoor exercise opportunities",
      "Owners willing to train recall carefully and manage hunting instincts",
      "People who appreciate an athletic, alert and strongly bonded companion",
    ],

    notIdealFor: [
      "Households seeking a low-energy dog with minimal exercise needs",
      "Owners expecting dependable off-lead recall around wildlife without training",
      "Homes where small animals cannot be safely separated or managed",
      "People unable to provide regular activity and mental stimulation",
      "Owners who cannot provide secure outdoor management for a hunting dog",
    ],
  },

  funFacts: [
    "The Podenco Canario comes from the Canary Islands, especially Gran Canaria and Tenerife.",
    "It was developed for rabbit hunting and uses scent, sight and hearing to locate its quarry.",
    "Its traditional hunting terrain includes rocky ground, stone walls, volcanic formations and thorny vegetation.",
    "The breed has large, mobile ears that become erect when it is alert or excited.",
    "The FCI standard describes the breed as slightly longer than it is tall.",
    "Its short coat is usually red and white, with red shades ranging from orange to mahogany.",
    "The FCI historical account proposes an ancient Egyptian connection, although the precise route by which the breed's ancestors reached the islands remains uncertain.",
  ],

  faq: [
    {
      question: "Where does the Podenco Canario come from?",
      answer:
        "The Podenco Canario comes from Spain's Canary Islands. It is particularly associated with Gran Canaria and Tenerife and was traditionally used for rabbit hunting.",
    },
    {
      question: "What was the Podenco Canario bred to do?",
      answer:
        "It was developed for rabbit hunting across varied island terrain. It uses its nose, sight and hearing to locate rabbits in rocky areas, crevices, stone walls and dense vegetation.",
    },
    {
      question: "How tall is a Podenco Canario?",
      answer:
        "The FCI standard gives a height of 55–64 cm for males and 53–60 cm for females. It also allows a deviation of 2 cm above or below those ranges when the dog otherwise fits the breed type.",
    },
    {
      question: "How much does a Podenco Canario weigh?",
      answer:
        "The FCI standard used for this record does not provide a numerical weight range, and a sufficiently reliable alternative figure was not established. No weight value is therefore recorded.",
    },
    {
      question: "How long does a Podenco Canario live?",
      answer:
        "A reliable breed-specific lifespan range was not established from the authoritative sources used for this record. An individual dog's longevity depends on factors including genetics, health, body condition and care.",
    },
    {
      question: "What colours can a Podenco Canario have?",
      answer:
        "The FCI standard describes red and white combinations. The red may range from orange to dark red or mahogany.",
    },
    {
      question: "Does a Podenco Canario need a lot of exercise?",
      answer:
        "Yes. It is an athletic hunting dog with considerable stamina and needs daily activity. Walks, safe running, scent games and suitable sporting activities can help meet its physical and mental needs.",
    },
    {
      question: "Is a Podenco Canario easy to train?",
      answer:
        "It can learn well with patient, reward-based training, but its strong hunting instincts may make recall difficult around wildlife. Practise in secure areas and use a lead or long line where necessary.",
    },
    {
      question: "Is a Podenco Canario suitable for apartment living?",
      answer:
        "Apartment suitability cannot be reliably determined for the whole breed. Its high activity needs mean that the owner must provide substantial daily exercise, enrichment and secure opportunities to run. The individual dog's behaviour and the living environment also matter.",
    },
    {
      question: "Are there known inherited health problems in the Podenco Canario?",
      answer:
        "The sources reviewed for this record do not establish a reliable breed-wide list of inherited disorders or a formal screening schedule. This does not mean inherited conditions are absent. Ask about the individual dog's health history and discuss appropriate veterinary care with a veterinarian.",
    },
    {
      question: "Can a Podenco Canario live with small pets?",
      answer:
        "Care is needed because the breed was developed to hunt rabbits and may have a strong chase response. Compatibility with cats or other small animals depends on the individual dog, its history and careful management. Never leave introductions unsupervised.",
    },
  ],

  references: [
    "fci-podenco-canario-standard-329",
    "fci-podenco-canario-nomenclature-329",
    "rsce-podenco-canario-profile",
    "vdh-podenco-canario-profile",
    "commons-podenco-canario-hembraphoto",
  ],

  evidence: {
    scientificName: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Conventional scientific designation for the domestic dog; it is not a breed-specific taxonomic distinction.",
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-podenco-canario-standard-329",
          role: "verified",
          locator: "Standard heading and English breed-name line",
        },
        {
          id: "fci-podenco-canario-nomenclature-329",
          role: "verified",
          locator: "Multilingual breed nomenclature",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "Alternate names are taken from the official FCI standard and nomenclature.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-podenco-canario-standard-329",
          role: "verified",
          locator: "FCI classification: Group 5, Section 7, without working trial",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "Uses the FCI classification. Other organisations may use different group systems.",
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-podenco-canario-standard-329",
          role: "verified",
          locator: "Origin and Brief Historical Summary",
        },
        {
          id: "rsce-podenco-canario-profile",
          role: "cited",
          locator: "Origin and breed description",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "Spain is the country of origin; the Canary Islands are identified as the breed's home region.",
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-podenco-canario-standard-329",
          role: "verified",
          locator:
            "Utilization, Brief Historical Summary, General Appearance and Behaviour/Temperament",
        },
        {
          id: "vdh-podenco-canario-profile",
          role: "cited",
          locator:
            "Breed description, personality, exercise, training, grooming and origin",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "Original prose summarises the documented origin, working purpose, physical type and behaviour. The possible ancient ancestry is described as a historical hypothesis.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-podenco-canario-standard-329",
          role: "verified",
          locator:
            "General Appearance, Important Proportions, Head, Eyes, Ears, Tail, Coat and Size",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "Physical characteristics and height ranges follow the FCI standard. Weight and lifespan are not supplied by that standard.",
    },

    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The FCI standard and the other authoritative breed profiles used for this record did not establish a reliable numerical weight range.",
    },

    "physical.lifespanYears": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A sufficiently reliable breed-specific lifespan range was not established from the authoritative sources used for this record.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted breed standards and kennel-club profile do not establish a breed-specific drooling level.",
    },

    temperament: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-podenco-canario-standard-329",
          role: "verified",
          locator: "Behaviour / Temperament",
        },
        {
          id: "vdh-podenco-canario-profile",
          role: "cited",
          locator: "Personality and social behaviour",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "Trait descriptions are paraphrased from the standard and kennel-club profile. Numerical scores are editorial estimates, not measured breed statistics.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-podenco-canario-standard-329",
          role: "cited",
          locator: "Behaviour / Temperament",
        },
        {
          id: "vdh-podenco-canario-profile",
          role: "cited",
          locator: "Personality and social behaviour",
        },
      ],
      verifiedOn: null,
      note:
        "All 1–5 scores are qualitative editorial estimates based on the breed's documented working purpose and described behaviour. They are not standardised temperament-test results.",
    },

    "temperament.scores.withChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted authoritative sources do not provide a sufficiently specific basis for a breed-wide child compatibility score.",
    },

    care: {
      reliability: "reliable_source",
      sources: [
        {
          id: "vdh-podenco-canario-profile",
          role: "verified",
          locator:
            "Exercise, personality, training, social behaviour and grooming",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "Breed-specific activity, training and grooming advice is based on the kennel-club profile. General safety and care suggestions are not claims of breed-specific medical requirements.",
    },

    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vdh-podenco-canario-profile",
          role: "verified",
          locator:
            "Daily activity, coursing, agility and movement needs",
        },
        {
          id: "fci-podenco-canario-standard-329",
          role: "cited",
          locator: "Utilization and hunting endurance",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "High activity needs are supported by the breed's working purpose and kennel-club description. No fixed daily exercise duration is asserted.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No sufficiently reliable breed-specific daily exercise duration was established. Exercise needs vary with age, fitness, health and individual behaviour.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vdh-podenco-canario-profile",
          role: "verified",
          locator: "Short coat and grooming",
        },
        {
          id: "fci-podenco-canario-standard-329",
          role: "cited",
          locator: "Coat: smooth, short and dense",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "Low-maintenance coat description is supported by the short coat standard and kennel-club profile. Routine hygiene advice is general dog-care guidance.",
    },

    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vdh-podenco-canario-profile",
          role: "verified",
          locator: "Training, recall and exercise",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "Training guidance reflects the breed's activity and hunting motivation and the profile's caution about off-lead exercise.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The sources reviewed do not establish a dependable breed-wide apartment suitability rating. Individual activity, training and environment are important.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Reliable breed-specific information about alone-time tolerance was not found.",

    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Nutrition advice is general guidance for dogs and should be adapted to the individual dog's life stage, body condition, activity and veterinary needs.",
    },

    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No breed-specific puppy feeding frequency is established. Feeding schedules should be based on age, growth, food and veterinary advice.",
    },

    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No breed-specific adult feeding frequency is established. Feeding schedules should be based on the individual dog's needs and food.",
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No breed-specific senior feeding frequency is established. Feeding schedules should be adapted to health, appetite and veterinary advice.",
    },

    health: {
      reliability: "general_guidance",
      sources: [ ],
      verifiedOn: null,
      note: "General canine health and preventive-care guidance; no breed-specific health conclusions are asserted.",
    },

    "health.commonConditions": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No sufficiently reliable breed-specific population evidence was found to list common inherited or acquired conditions. An empty list does not imply that the breed is free from disease.",
    },

    "health.recommendedScreenings": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No established breed-wide health screening protocol was identified in the authoritative sources reviewed.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Routine veterinary care, parasite prevention, safe exercise and general monitoring are standard preventive practices for dogs.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Dental care advice is general veterinary hygiene guidance, not a claim of a breed-specific dental disorder.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Ear inspection and cleaning advice is general dog-care guidance.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Skin inspection and basic care advice is general dog-care guidance.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "fci-podenco-canario-standard-329",
          role: "cited",
          locator: "Utilization and Behaviour / Temperament",
        },
        {
          id: "vdh-podenco-canario-profile",
          role: "cited",
          locator: "Personality, exercise and living with the breed",
        },
      ],
      verifiedOn: null,
      note:
        "Suitability guidance is an editorial assessment based on the breed's documented hunting purpose, activity needs and behaviour. It is not a guarantee for every individual dog.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The sources reviewed do not provide a reliable breed-wide first-time-owner rating.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The sources reviewed do not provide sufficient evidence for a definitive breed-wide family-with-children rating.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A reliable breed-wide senior-owner suitability rating was not established. Suitability depends on the dog's activity needs and the owner's circumstances.",
    },

    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "vdh-podenco-canario-profile",
          role: "cited",
          locator: "Daily activity and sporting interests",
        },
      ],
      verifiedOn: null,
      note:
        "An editorial suitability assessment based on the documented need for regular activity and the breed's athletic working background.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A reliable breed-wide apartment living rating was not established. Individual exercise provision, environment and behaviour matter.",
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-podenco-canario-standard-329",
          role: "verified",
          locator:
            "Brief Historical Summary, Utilization, General Appearance and Coat",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "Facts are paraphrased from the official standard. The proposed ancient ancestry is presented as a historical hypothesis.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-podenco-canario-standard-329",
          role: "verified",
          locator:
            "Origin, Utilization, Coat, Size and Behaviour / Temperament",
        },
        {
          id: "vdh-podenco-canario-profile",
          role: "cited",
          locator: "Exercise, training and breed characteristics",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "Answers summarise verified breed information and clearly state where reliable weight, lifespan or health data was not established.",
    },
  },

  updatedOn: "2026-11-02",
};
