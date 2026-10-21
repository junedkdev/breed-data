import type { Breed } from "../schema/breed.types";

export const tornjak: Breed = {
  slug: "tornjak",
  name: "Tornjak",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Bosnian and Herzegovinian-Croatian Shepherd Dog",
    "Bosnian-Herzegovinian-Croatian Shepherd Dog",
    "Croatian-Bosnian Shepherd Dog"
  ],

  group:
    "FCI Group 2 — Pinscher and Schnauzer type, Molossoid breeds, Swiss Mountain and Cattle Dogs; Section 2.2 — Mountain type",

  origin: {
    country: "Bosnia and Herzegovina and Croatia",
    region:
      "Mountain areas and surrounding valleys of Bosnia and Herzegovina and Croatia"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tornjak_and_puppy.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Tornjak_and_puppy.jpg",
      title: "Tornjak and puppy.jpg",
      description: "An adult Tornjak with a Tornjak puppy.",
      creator: "Tomasz Waśko",
      uploader: "TomaszVasco",
      capturedOn: "2023-05-20",
      uploadedOn: "2023-05-26",
      width: 4966,
      height: 3311,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Tomasz Waśko, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Tornjak_and_puppy.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-19"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bosnian_and_Herzegovinian_-_Croatian_Shepherd_Dog_aka_Tornjak.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Bosnian_and_Herzegovinian_-_Croatian_Shepherd_Dog_aka_Tornjak.jpg",
      title: "Bosnian and Herzegovinian - Croatian Shepherd Dog aka Tornjak.jpg",
      description: "A female Tornjak.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2008-10-31",
      uploadedOn: "2013-01-20",
      width: 495,
      height: 408,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Bosnian_and_Herzegovinian_-_Croatian_Shepherd_Dog_aka_Tornjak.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-19"
    }
  ],

  overview: {
    summary:
      "A large, powerful livestock guardian from Bosnia and Herzegovina and Croatia, known for its thick double coat, balanced build, confident nature and close bond with its family and the animals it guards.",

    description:
      "The Tornjak is a large mountain-type livestock guardian developed to protect sheep, cattle and farm property. It has a strong but balanced body, a dense weather-protective double coat, a broad head and a long, richly coated tail. The coat is usually predominantly white with distinct patches of other solid colours. Tornjaks are generally described as calm and affectionate with familiar people, while remaining alert and cautious with strangers when guarding. They are intelligent and capable of learning, but their independent guardian instincts mean that early socialisation, consistent boundaries and responsible handling are important. The breed needs regular activity, space to move safely and an owner prepared for the responsibilities of managing a large protective dog.",

    history:
      "The Tornjak developed in the mountainous regions and valleys of Bosnia and Herzegovina and Croatia. Written records from the medieval period, including references dated 1067 and 1374, are recognised in the breed's historical record. The local guardian-dog population later declined substantially. A coordinated effort to recover the breed began in Croatia and Bosnia and Herzegovina around 1972, followed by sustained purebred breeding from 1978. Today's Tornjak descends from dogs selected for the traditional work of protecting livestock and farm property in this region.",

    originalPurpose:
      "Livestock guardian and farmyard protection dog, used to guard sheep and other livestock against predators and threats to the flock or property.",

    currentRoles: [
      "Livestock guardian",
      "Farm and property guardian",
      "Rural family companion",
      "Outdoor companion for experienced owners",
      "Structured obedience and reward-based training",
      "Suitable canine activities that provide movement and mental enrichment"
    ]
  },

  physical: {
    sizeCategory: "Large",

    heightCm: {
      male: {
        min: 65,
        max: 70
      },
      female: {
        min: 60,
        max: 65
      }
    },

    weightKg: {
      male: {
        min: 27,
        max: 54
      },
      female: {
        min: 27,
        max: 54
      }
    },

    lifespanYears: {
      min: 12,
      max: 14
    },

    coatType:
      "Long, thick double coat with a dense, woolly undercoat and a long, coarse outer coat. The outer coat is usually straight, although it may be slightly wavy over the shoulders and back. The mane around the neck, feathering on the forelimbs, breeches on the upper thighs and plume on the tail are particularly prominent.",

    coatLength: "Long",

    coatColors: [
      "Predominantly white with distinct patches of other solid colours",
      "White with a black mantle and white markings around the head, neck or legs",
      "Almost white with smaller coloured markings",
      "Parti-coloured patterns with clearly defined areas of colour"
    ],

    sheddingLevel:
      "Moderate to high, with heavier shedding possible during seasonal coat changes",

    droolingLevel: null,

    distinctiveFeatures: [
      "Large, powerful and agile body with an almost square outline",
      "Body length should not exceed height at the withers by more than about eight percent under the breed standard",
      "Strong, harmonious build without excessively coarse bone",
      "Elongated head with skull and muzzle of approximately equal length",
      "Large nose with dark pigmentation",
      "Dark, almond-shaped eyes with close-fitting eyelids",
      "Medium-sized, triangular pendant ears carried close to the cheeks",
      "Powerful neck with abundant coat forming a mane",
      "Short, straight and moderately broad back",
      "Deep, broad and spacious chest",
      "Strong limbs, well-developed muscles and well-arched feet",
      "Long, mobile tail with abundant feathering and a distinct plume",
      "Long, thick double coat with a dense winter undercoat",
      "Longer hair around the neck and upper thighs, with feathering along the forearms",
      "Predominantly white parti-coloured coat, often with dark patches"
    ]
  },

  temperament: {
    traits: [
      "Calm with familiar people",
      "Affectionate with family",
      "Confident",
      "Intelligent",
      "Courageous",
      "Alert",
      "Protective of livestock and property",
      "Independent",
      "Wary of unfamiliar people",
      "Generally steady in temperament",
      "Capable of learning tasks and retaining training",
      "Naturally oriented toward guarding and monitoring its surroundings"
    ],

    scores: {
      affection: 5,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 5,
      independence: 4,
      trainability: 4,
      barking: 4,
      energy: 3
    }
  },

  care: {
    exercise: {
      level:
        "Moderate to high, depending on age, health, environment and whether the dog performs livestock-guardian work",

      minutesPerDay: null,

      activities: [
        "Daily walks appropriate to age and physical condition",
        "Supervised movement and exploration in a secure area",
        "Outdoor activity with the owner",
        "Reward-based obedience and attention training",
        "Calm enrichment and problem-solving games",
        "Structured activity appropriate to a livestock guardian",
        "Hiking or other suitable outdoor activities once maturity and fitness permit"
      ]
    },

    grooming: {
      level: "Moderate to high",

      brushing:
        "Brush the dense double coat at least weekly, checking through the outer coat to the undercoat. Brush more frequently during heavier seasonal shedding and give extra attention to the mane, feathered areas, breeches and tail plume.",

      bathing:
        "Bathe when necessary using a dog-safe shampoo. Rinse thoroughly and dry the coat properly, paying attention to areas where the thick coat may retain moisture. Avoid unnecessary frequent bathing that could irritate the skin.",

      notes: [
        "The long double coat has a dense undercoat that provides protection in cold and wet conditions.",
        "Check the coat behind the ears, around the mane, on the thighs and beneath the tail for tangles or debris.",
        "Brush more often during seasonal shedding to remove loose undercoat.",
        "Inspect the ears regularly for wax, dirt, redness, odour or discharge.",
        "Trim nails when needed and inspect paws after outdoor activity.",
        "Keep teeth clean with regular brushing using dog-specific toothpaste.",
        "Introduce grooming, nail trimming and routine handling calmly from puppyhood.",
        "Do not shave the double coat simply to reduce shedding; seek veterinary or professional grooming guidance when coat or skin problems arise."
      ]
    },

    training: {
      difficulty:
        "Generally trainable, but consistent handling and early socialisation are important for a large, independent livestock guardian with natural protective instincts",

      tips: [
        "Use calm, consistent, reward-based training.",
        "Begin socialisation and foundational training early.",
        "Teach reliable responses to recall, leave-it and settle cues, practising in secure environments.",
        "Teach the dog to distinguish normal visitors and everyday situations from genuine threats through controlled positive experiences.",
        "Set clear boundaries around gates, livestock areas and public spaces.",
        "Supervise introductions to unfamiliar dogs, visitors and other animals.",
        "Reward calm behaviour and appropriate responses rather than encouraging unnecessary guarding.",
        "Avoid harsh or intimidating corrections that may undermine trust.",
        "Continue training throughout adulthood because responsible management remains important as the dog matures."
      ],

      socialization:
        "Introduce the puppy gradually and positively to different people, dogs, handling routines, sounds and environments. As the breed can be cautious around unfamiliar people and naturally protective, socialisation should build confidence and appropriate judgement rather than force the dog to greet everyone. Maintain supervision around visitors, unfamiliar animals and children."
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [],

      aloneTimeTolerance: null
    }
  },

  nutrition: {
    dietType:
      "Complete and balanced dog food appropriate for a large-breed dog's life stage, body condition, activity level and individual health needs.",

    feedingFrequency: {
      puppy:
        "Usually several smaller meals daily; frequency should decrease gradually with age and follow veterinary guidance.",
      adult:
        "Two meals daily is a common practical routine; portion size should be adjusted to body condition and activity.",
      senior:
        "Individualise meal frequency and portion size according to appetite, weight, activity, dental health and veterinary advice."
    },

    guidelines:
      "Feed a complete and balanced diet suited to the dog's life stage and activity. Measure food portions, monitor body condition and adjust the amount with veterinary guidance. Provide fresh water at all times. Large-breed puppies need controlled, appropriate growth rather than excessive calorie or mineral intake. Discuss feeding practices and the risk of gastric dilatation-volvulus with a veterinarian, especially if the dog has a deep chest or relevant family history.",

    considerations: [
      "Maintain a healthy body condition and avoid excess weight.",
      "Use a suitable large-breed puppy diet during growth.",
      "Adjust the feeding amount to age, activity, body condition and food energy density.",
      "Avoid uncontrolled calorie or supplement intake during puppy growth.",
      "Count training treats as part of the daily food allowance.",
      "Make routine diet changes gradually unless a veterinarian directs otherwise.",
      "Discuss the signs and risk management of gastric dilatation-volvulus with a veterinarian.",
      "Do not add calcium, joint supplements or other products without an appropriate veterinary reason.",
      "Seek veterinary advice for persistent appetite changes, digestive problems or unexplained changes in weight."
    ],

    note:
      "No universal daily food quantity is specified because the Tornjak's requirements vary with age, activity, body condition, food energy density and health. Individual feeding plans should be reviewed with a veterinarian."
  },

  health: {
    overview:
      "Tornjak-specific health information is less extensive than that available for many widely established breeds, so not every disease risk has a reliable population-level estimate. Hip dysplasia has been documented in breed-specific radiographic research. One retrospective analysis of 735 hip radiographs collected from 2001 to 2016 found that approximately one quarter of the evaluated records were classed as dysplastic. This was a screened population, not a survey of every Tornjak, so the percentage should not be interpreted as the breed's universal prevalence. Breed-club health guidance also discusses elbow dysplasia and gastric dilatation-volvulus (bloat). These issues do not mean that every individual dog will develop them. Responsible breeding, healthy growth, body-condition management and appropriate veterinary checks can help manage some risks but cannot guarantee an individual dog's future health.",

    commonConditions: [
      "Hip dysplasia — a developmental abnormality of the hip joint that can lead to pain, lameness and arthritis. It has been documented in Tornjak-specific radiographic research. In one screened set of 735 radiographs, 25.03% were graded as dysplastic; that percentage should not be treated as universal breed prevalence.",
      "Elbow dysplasia — a developmental joint concern identified in breed-club health guidance for Tornjaks and other large dogs. It can cause pain, lameness and later joint degeneration.",
      "Gastric dilatation-volvulus (GDV or bloat) — a life-threatening emergency in which the stomach expands and may twist. It is an important concern to discuss for large dogs, particularly those with a deep chest. Tornjak-specific population prevalence is not established by this record."
    ],

    preventiveCare: [
      "Schedule routine veterinary examinations and discuss screening needs for a large-breed dog.",
      "Ask the breeder for documented hip and elbow evaluation results and relevant family health history.",
      "Maintain an appropriate growth rate and healthy adult body condition.",
      "Learn the warning signs of GDV, including an enlarged abdomen, unsuccessful retching, restlessness or sudden abdominal pain; seek emergency veterinary care immediately if suspected.",
      "Discuss meal routines and individual GDV risk with a veterinarian.",
      "Provide regular, age-appropriate activity without excessive strain during growth.",
      "Keep vaccinations and parasite prevention appropriate to local veterinary advice.",
      "Maintain dental hygiene and routine ear, coat, nail and paw checks.",
      "Seek veterinary advice for persistent lameness, stiffness, appetite changes, skin problems or abnormal behaviour.",
      "Use secure outdoor management and responsible control around unfamiliar people, dogs and livestock."
    ],

    recommendedScreenings: [
      "Hip radiographic evaluation for breeding dogs through an accepted national or international programme.",
      "Elbow evaluation for breeding dogs, guided by the breed club, veterinarian and relevant screening programme.",
      "Ask for documented screening results and family history rather than relying only on a breeder's verbal assurances.",
      "Discuss any additional examinations with a veterinarian based on the dog's clinical findings, pedigree and intended breeding role. The sources reviewed do not establish a complete mandatory genetic-testing panel for this breed."
    ],

    dentalCare:
      "Brush teeth regularly with dog-specific toothpaste and an appropriate toothbrush. Ask a veterinarian to assess tartar, gum inflammation, persistent bad breath, pain while eating or other oral changes. Home brushing does not replace professional dental examination.",

    earCare:
      "Inspect the pendant ears regularly for dirt, excess wax, redness, odour or discharge. Clean only with a suitable dog-safe product as recommended by a veterinarian. Seek veterinary advice for persistent scratching, head shaking or discomfort, and do not insert cotton swabs deep into the ear canal.",

    skinCare:
      "Part the thick coat during regular grooming to inspect the skin for irritation, parasites, wounds, tangles or unusual lumps. Keep the coat clean and dry it properly after bathing or getting wet. Seek veterinary advice for persistent itching, sores or unexplained hair loss."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Owners experienced with large guardian or working breeds",
      "Rural households able to provide appropriate livestock-guardian work or structured daily activity",
      "People who can manage a large, protective dog responsibly",
      "Owners prepared for early socialisation and consistent training",
      "Households with secure outdoor space",
      "People willing to maintain a dense double coat",
      "Owners prepared to supervise encounters with unfamiliar visitors and animals"
    ],

    notIdealFor: [
      "People seeking a small, low-maintenance indoor companion",
      "Owners unable to manage a large and potentially protective dog",
      "Households unable to provide daily activity, training and companionship",
      "People who expect the dog to welcome all unfamiliar people without careful socialisation",
      "Owners unwilling to groom a dense double coat",
      "Households where secure outdoor management and responsible handling are not possible"
    ]
  },

  funFacts: [
    "The Tornjak originates from Bosnia and Herzegovina and Croatia.",
    "Its traditional purpose is guarding livestock and farm property.",
    "Historical documents dated 1067 and 1374 are noted in the breed's written history.",
    "The breed's systematic recovery began around 1972, followed by continuous purebred breeding from 1978.",
    "The word 'Tornjak' is commonly associated with a livestock enclosure or pen.",
    "The breed's body is intended to be nearly square and balanced rather than excessively heavy.",
    "Its thick double coat has a dense, woolly undercoat for protection in colder conditions.",
    "The tail is long and richly coated, with a plume; it is normally raised above the back while moving.",
    "The breed is classified by the FCI in Group 2, Mountain Type, and does not require an FCI working trial."
  ],

  faq: [
    {
      question: "Where does the Tornjak originate?",
      answer:
        "The breed originates from Bosnia and Herzegovina and Croatia, particularly the mountain areas and valleys of the region."
    },
    {
      question: "What was the Tornjak bred to do?",
      answer:
        "It was developed as a livestock guardian and farmyard protection dog, traditionally protecting flocks and property."
    },
    {
      question: "How tall is a Tornjak?",
      answer:
        "The FCI standard lists 65–70 cm for males and 60–65 cm for females, with a tolerance of 2 cm. Actual adult size can vary, and a dog's health should not be judged from height alone."
    },
    {
      question: "How much does a Tornjak weigh?",
      answer:
        "Published breed profiles give broad approximate ranges, but reported figures differ and the FCI standard does not set a weight range. A healthy weight depends on the dog's frame and body condition; the numbers stored in this record should be treated as approximate rather than sex-specific official measurements."
    },
    {
      question: "How long does a Tornjak usually live?",
      answer:
        "Breed profiles commonly list a lifespan of around 12–14 years. This is an estimate, not a guarantee for an individual dog."
    },
    {
      question: "What is the Tornjak's coat like?",
      answer:
        "It has a long, thick double coat with a dense undercoat. The topcoat is usually long and coarse, while the coat is shorter on the face and legs. A mane, thigh feathering and a well-coated tail are characteristic."
    },
    {
      question: "What colours can a Tornjak have?",
      answer:
        "The breed is usually parti-coloured, with white as the dominant ground colour and distinct patches of other solid colours. Black-mantled dogs and nearly white dogs with smaller markings can also occur."
    },
    {
      question: "Is a Tornjak a good family dog?",
      answer:
        "Tornjaks are often described as calm and affectionate with familiar people while being cautious around strangers. Whether one is suitable for a particular family depends on the individual dog's temperament, socialisation, supervision and the household's experience with guardian breeds."
    },
    {
      question: "Does a Tornjak need a lot of grooming?",
      answer:
        "Its dense double coat needs regular brushing, generally at least weekly, with more frequent care during heavier shedding periods. The mane, feathered areas and tail need particular attention."
    },
    {
      question: "Can a Tornjak live in an apartment?",
      answer:
        "Reliable breed-specific evidence does not establish a blanket answer. The Tornjak is a large livestock guardian, so space, daily activity, training and the owner's ability to manage a protective dog should be considered carefully before choosing an apartment."
    },
    {
      question: "What health problems are known in Tornjaks?",
      answer:
        "Hip dysplasia has been documented in breed-specific radiographic research. Breed-club guidance also discusses elbow dysplasia and gastric dilatation-volvulus. These are concerns to discuss with a veterinarian and do not mean every Tornjak will develop them."
    },
    {
      question: "What health checks should I ask a breeder about?",
      answer:
        "Ask for documented hip and elbow evaluation results and family health history. A veterinarian can advise whether additional tests are appropriate for the particular dog and its intended breeding role."
    },
    {
      question: "How much exercise does a Tornjak need?",
      answer:
        "It needs regular daily activity suited to its age and health, together with training and mental engagement. Its needs will differ depending on whether it performs livestock-guardian work or lives as a companion. The available sources do not establish one exact daily exercise-minute target."
    },
    {
      question: "Is the Tornjak easy to train?",
      answer:
        "The breed is described as intelligent and capable of learning tasks, but its natural guardian instincts need responsible management. Consistent, calm training and early socialisation are important."
    }
  ],

  references: [
    "fci-tornjak-official-standard",
    "fci-tornjak-nomenclature",
    "american-kennel-club-tornjak",
    "ukc-tornjak-official-standard",
    "tornjak-club-north-america-breed-profile",
    "tornjak-club-north-america-health-concerns",
    "tornjak-hip-dysplasia-monitoring-study-2022",
    "tornjak-hip-dysplasia-biomarker-study-2023",
    "wikimedia-tornjak-and-puppy-tomasz-wasko",
    "wikimedia-tornjak-female-canarian"
  ],

  evidence: {
    scientificName: {
      reliability: "unverified",
      sources: [],
      verifiedOn: null,
      note:
        "Canis lupus familiaris is used as the general domestic-dog taxonomic label, not as a Tornjak-specific scientific name. The cited breed sources do not provide a separate taxonomic name for the breed."
    },

    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-tornjak-official-standard",
          role: "verified",
          locator: "Standard title and breed name"
        },
        {
          id: "american-kennel-club-tornjak",
          role: "verified",
          locator: "About the Breed and alternate name"
        },
        {
          id: "ukc-tornjak-official-standard",
          role: "cited",
          locator: "Breed history and recognised name"
        }
      ],
      verifiedOn: "2026-10-19",
      note: null
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-tornjak-official-standard",
          role: "verified",
          locator: "FCI classification, Group 2, Section 2.2, working trial"
        },
        {
          id: "fci-tornjak-nomenclature",
          role: "verified",
          locator: "Group, subsection and working-trial status"
        }
      ],
      verifiedOn: "2026-10-19",
      note: "Uses the FCI classification."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-tornjak-official-standard",
          role: "verified",
          locator: "Origin and brief historical summary"
        },
        {
          id: "fci-tornjak-nomenclature",
          role: "verified",
          locator: "Country of origin"
        }
      ],
      verifiedOn: "2026-10-19",
      note: null
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-tornjak-official-standard",
          role: "verified",
          locator: "Utilization, history, general appearance and temperament"
        },
        {
          id: "tornjak-club-north-america-breed-profile",
          role: "cited",
          locator: "History, temperament and livestock-guardian role"
        },
        {
          id: "american-kennel-club-tornjak",
          role: "cited",
          locator: "About the Breed and History"
        }
      ],
      verifiedOn: "2026-10-19",
      note:
        "The breed's livestock-guardian purpose and origin are supported by the standard. Historical dates and recovery efforts follow the published breed history."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-tornjak-official-standard",
          role: "verified",
          locator: "General appearance, proportions, coat, colour and size"
        }
      ],
      verifiedOn: "2026-10-19",
      note:
        "Height, coat, colours and general conformation follow the FCI standard. Weight, lifespan and grooming-related values are overridden below where they come from non-standard sources or estimates."
    },

    "physical.heightCm": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-tornjak-official-standard",
          role: "verified",
          locator: "Size: males 65–70 cm; females 60–65 cm; tolerance ±2 cm"
        }
      ],
      verifiedOn: "2026-10-19",
      note:
        "The stored ranges show the standard's nominal ranges; its separate ±2 cm tolerance is not added into these fields."
    },

    "physical.weightKg": {
      reliability: "reliable_source",
      sources: [
        {
          id: "tornjak-club-north-america-breed-profile",
          role: "verified",
          locator: "Average weight: 60–120 lb"
        },
        {
          id: "american-kennel-club-tornjak",
          role: "conflicting",
          locator: "Average weight: 62–110 lb"
        }
      ],
      verifiedOn: "2026-10-19",
      note:
        "The FCI standard does not publish a weight range. The recorded 27–54 kg range is an approximate conversion of the broader 60–120 lb range from the breed club; the AKC profile publishes a narrower 62–110 lb range. The schema has sex-specific fields, but these published values are overall breed ranges and are repeated in both slots, not a claim of sex-specific weight limits."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-tornjak",
          role: "verified",
          locator: "Average life expectancy"
        },
        {
          id: "tornjak-club-north-america-breed-profile",
          role: "cited",
          locator: "Average life span"
        }
      ],
      verifiedOn: "2026-10-19",
      note: "Published breed-level estimate, not a guarantee for an individual dog."
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-tornjak-official-standard",
          role: "cited",
          locator: "Thick topcoat and dense woolly winter undercoat"
        },
        {
          id: "american-kennel-club-tornjak",
          role: "cited",
          locator: "Grooming frequency and coat care"
        }
      ],
      verifiedOn: null,
      note:
        "The moderate-to-high shedding description is an editorial estimate based on the dense double coat. The consulted sources do not provide a measured shedding rate."
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A reliable breed-specific drooling level was not established from the sources reviewed."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-tornjak-official-standard",
          role: "verified",
          locator: "Behaviour / temperament"
        },
        {
          id: "tornjak-club-north-america-breed-profile",
          role: "cited",
          locator: "Temperament and livestock-guardian function"
        }
      ],
      verifiedOn: "2026-10-19",
      note:
        "Traits describe breed tendencies; an individual dog's behaviour depends on genetics, upbringing, socialisation and environment."
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-tornjak-official-standard",
          role: "cited",
          locator: "Behaviour / temperament and guarding role"
        },
        {
          id: "american-kennel-club-tornjak",
          role: "cited",
          locator: "Breed traits and temperament"
        },
        {
          id: "tornjak-club-north-america-breed-profile",
          role: "cited",
          locator: "Temperament and guardian instincts"
        }
      ],
      verifiedOn: null,
      note:
        "The 1–5 values are editorial estimates, not experimentally measured breed statistics or validated behavioural scores. Child and dog suitability should always be judged individually."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-tornjak",
          role: "cited",
          locator: "Grooming, Exercise, Training and Nutrition"
        },
        {
          id: "tornjak-club-north-america-breed-profile",
          role: "cited",
          locator: "Guardian role, coat and temperament"
        }
      ],
      verifiedOn: null,
      note:
        "This section combines general dog-care guidance with considerations for a large double-coated livestock guardian."
    },

    "care.exercise.level": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-tornjak-official-standard",
          role: "cited",
          locator: "Livestock-guardian utilisation"
        },
        {
          id: "american-kennel-club-tornjak",
          role: "cited",
          locator: "Exercise guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Moderate-to-high is a qualitative estimate. Activity depends on age, health, living environment and whether the dog is working."
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The sources support regular daily activity but do not establish one reliable breed-specific exercise-minute range."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A reliable general breed-level apartment-suitability value was not established."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-tornjak-official-standard",
          role: "cited",
          locator: "Livestock and farmyard-guardian purpose"
        },
        {
          id: "american-kennel-club-tornjak",
          role: "cited",
          locator: "Exercise and fenced-yard suggestions"
        }
      ],
      verifiedOn: null,
      note:
        "A secure yard is an estimated suitable environment for supervised activity but does not replace daily exercise, training or social contact."
    },

    "care.livingEnvironment.climates": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Although the breed has a thick double coat, the consulted sources do not establish a validated climate-suitability list."
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A reliable breed-specific measure of alone-time tolerance was not found."
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-tornjak",
          role: "cited",
          locator: "Nutrition and weight management"
        },
        {
          id: "tornjak-club-north-america-health-concerns",
          role: "cited",
          locator: "Health and growth-related care"
        }
      ],
      verifiedOn: null,
      note:
        "General feeding recommendations adapted for a large-breed dog; this is not an individual veterinary diet plan."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-tornjak",
          role: "cited",
          locator: "Nutrition and life-stage feeding"
        }
      ],
      verifiedOn: null,
      note:
        "Meal-frequency text describes a general routine rather than a breed-specific requirement. Actual feeding frequency should be tailored to age, health and veterinary advice."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "tornjak-hip-dysplasia-monitoring-study-2022",
          role: "verified",
          locator: "Study results and limitations"
        },
        {
          id: "tornjak-club-north-america-health-concerns",
          role: "verified",
          locator: "Hip and elbow dysplasia and GDV"
        }
      ],
      verifiedOn: "2026-10-19",
      note:
        "The health overview distinguishes documented breed-specific hip findings from a population-wide prevalence claim. The screened-study result must be interpreted in its sampling context."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "tornjak-hip-dysplasia-monitoring-study-2022",
          role: "verified",
          locator: "Results of radiological hip dysplasia monitoring"
        },
        {
          id: "tornjak-hip-dysplasia-biomarker-study-2023",
          role: "cited",
          locator: "Tornjak hip dysplasia research cohort"
        },
        {
          id: "tornjak-club-north-america-health-concerns",
          role: "verified",
          locator: "Hip and elbow dysplasia and gastric dilatation-volvulus"
        }
      ],
      verifiedOn: "2026-10-19",
      note:
        "These are documented or breed-club-highlighted concerns, not diagnoses for every Tornjak. Hip-study percentages come from screened radiographic records and should not be treated as prevalence across the entire breed."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "tornjak-club-north-america-health-concerns",
          role: "cited",
          locator: "GDV prevention and hip/elbow health"
        },
        {
          id: "american-kennel-club-tornjak",
          role: "cited",
          locator: "General health, grooming and nutrition"
        }
      ],
      verifiedOn: null,
      note:
        "General prevention advice for a large dog and livestock guardian; it does not replace an individual veterinary care plan."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "tornjak-club-north-america-health-concerns",
          role: "verified",
          locator: "Responsible breeding and joint screening guidance"
        },
        {
          id: "tornjak-hip-dysplasia-monitoring-study-2022",
          role: "cited",
          locator: "Radiographic hip evaluation results"
        }
      ],
      verifiedOn: "2026-10-19",
      note:
        "Hip and elbow evaluations are presented as responsible-breeding checks. Confirm current local programme requirements with the breed club and veterinarian."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-tornjak",
          role: "cited",
          locator: "Routine care and grooming"
        }
      ],
      verifiedOn: null,
      note: "General canine dental-care guidance."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-tornjak",
          role: "cited",
          locator: "Ear checks and grooming"
        }
      ],
      verifiedOn: null,
      note: "General ear-care guidance for a dog with pendant ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-tornjak",
          role: "cited",
          locator: "Double-coat grooming"
        }
      ],
      verifiedOn: null,
      note: "General skin and coat-care guidance."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-tornjak",
          role: "cited",
          locator: "Temperament, exercise and living environment"
        },
        {
          id: "tornjak-club-north-america-breed-profile",
          role: "cited",
          locator: "Livestock guardian temperament and activity"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability values are editorial recommendations, not validated predictions of how every Tornjak will behave in a particular household."
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Reliable breed-specific evidence supporting a blanket yes/no value for families with children was not established."
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Suitability depends on a person's health, mobility, experience and support; a reliable breed-level yes/no value was not established."
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Reliable general breed-level apartment-suitability evidence was not found."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-tornjak-official-standard",
          role: "verified",
          locator: "Historical summary, working purpose, body proportions, coat and movement"
        },
        {
          id: "fci-tornjak-nomenclature",
          role: "verified",
          locator: "Official FCI classification and recognition"
        },
        {
          id: "american-kennel-club-tornjak",
          role: "cited",
          locator: "Historical name and breed background"
        }
      ],
      verifiedOn: "2026-10-19",
      note: null
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-tornjak-official-standard",
          role: "verified",
          locator: "Origin, working purpose, height, coat and colour"
        },
        {
          id: "american-kennel-club-tornjak",
          role: "verified",
          locator: "Weight, lifespan and general care"
        },
        {
          id: "tornjak-hip-dysplasia-monitoring-study-2022",
          role: "verified",
          locator: "Hip dysplasia study results and limitations"
        },
        {
          id: "tornjak-club-north-america-health-concerns",
          role: "cited",
          locator: "Health concerns and screening guidance"
        }
      ],
      verifiedOn: "2026-10-19",
      note:
        "The FAQ distinguishes official standard values, estimates from breed profiles and health-study findings. It does not present the screened hip-dysplasia percentage as a universal breed prevalence."
    }
  },

  updatedOn: "2026-10-19"
};