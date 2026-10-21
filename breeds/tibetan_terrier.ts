import type { Breed } from "./breed.types";

export const tibetan_terrier: Breed = {
  slug: "tibetan-terrier",
  name: "Tibetan Terrier",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Tsang Apso",
    "Dokhi Apso"
  ],

  group:
    "AKC Non-Sporting Group; FCI Group 9 — Companion and Toy Dogs, Section 5 — Tibetan breeds",

  origin: {
    country: "Tibet",
    region: "Tibetan Plateau, historically associated with monasteries and local communities"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tibetan_Terrier.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Tibetan_Terrier.jpg",
      title: "Tibetan Terrier.jpg",
      description: "A Tibetan Terrier.",
      creator: "Acid Pix",
      uploader: "Ltshears, via Flickr upload bot",
      capturedOn: "2012-10-15",
      uploadedOn: "2012-11-13",
      width: 2402,
      height: 1601,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Acid Pix, via Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:Tibetan_Terrier.jpg. License: https://creativecommons.org/licenses/by/2.0/. Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-10-20"
    }
  ],

  overview: {
    summary:
      "An intelligent, affectionate Tibetan companion dog with a long double coat, distinctive broad feet and an alert, adaptable nature.",

    description:
      "The Tibetan Terrier is a medium-sized companion breed developed in the challenging terrain and climate of Tibet. Its long double coat provides insulation, while its large, flat, rounded feet help it move over uneven ground. Despite its name, it is not a typical earth-working terrier. The breed is known for intelligence, loyalty and sensitivity, and can be reserved with unfamiliar people. It generally benefits from patient, reward-based training, early socialisation, regular activity and consistent coat care. The long coat can become heavily tangled without routine brushing, so prospective owners should be prepared for grooming throughout the dog's life.",

    history:
      "The Tibetan Terrier developed in Tibet over many generations. It was kept as a companion and watchdog by local communities and was associated with monasteries. The breed's thick coat, agile build and broad feet suited life in cold, rugged terrain. Dogs of this type were valued for companionship and alertness rather than for the specialised vermin-hunting work associated with many European terriers. The breed later became established outside Tibet through dogs brought to other countries during the twentieth century. It is now kept primarily as a companion and participates in conformation, obedience, agility and other dog sports.",

    originalPurpose:
      "Companion and watchdog in Tibetan communities, with physical characteristics suited to rugged, high-altitude terrain.",

    currentRoles: [
      "Family companion",
      "Watchful household companion",
      "Agility and other suitable dog sports",
      "Obedience and trick training",
      "Hiking and outdoor companionship"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    // AKC standard: average male height 15–16 inches; females slightly smaller.
    heightCm: {
      male: { min: 38, max: 41 },
      female: null,
    },

    // The standard reports an overall range, not separate sex-specific weights.
    weightKg: {
      male: null,
      female: null
    },

    lifespanYears: {
      min: 12,
      max: 15
    },

    coatType:
      "A double coat with a soft, woolly undercoat and a profuse, fine outer coat that may be straight or wavy. The adult coat is long but should not trail on the ground.",

    coatLength: "Long",

    coatColors: [
      "Black",
      "White",
      "Gold",
      "Cream",
      "Grey",
      "Silver",
      "Sable",
      "Red",
      "Fawn",
      "Brown",
      "Black and white",
      "Black, white and gold",
      "Gold and white",
      "Grey and white",
      "Brown and white",
      "Brindle",
      "Tricolour",
      "Other combinations of accepted colours"
    ],

    sheddingLevel:
      "Moderate; loose undercoat and seasonal coat changes can require additional brushing.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Long double coat with a soft insulating undercoat",
      "Hair that falls forward over the eyes and foreface",
      "Large, flat, rounded feet with hair between the toes and pads",
      "Well-feathered tail carried curled over the back",
      "Compact, square-proportioned and sturdy build",
      "Pendant ears with abundant feathering",
      "Agile movement and good endurance for its size"
    ]
  },

  temperament: {
    traits: [
      "Intelligent",
      "Loyal",
      "Affectionate",
      "Sensitive",
      "Alert",
      "Playful",
      "Adaptable",
      "Sometimes reserved with unfamiliar people",
      "Responsive to patient training",
      "Often attached to its household"
    ],

    // Editorial estimates on a 1–5 scale, not official behaviour measurements.
    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 3,
      independence: 3,
      trainability: 4,
      barking: 3,
      energy: 3
    }
  },

  care: {
    exercise: {
      level: "Moderate",

      // Practical editorial estimate; individual needs vary by age and health.
      minutesPerDay: {
        min: 45,
        max: 75
      },

      activities: [
        "Daily walks",
        "Supervised exploration and sniffing",
        "Reward-based training games",
        "Agility or other suitable dog sports",
        "Indoor puzzle toys and enrichment",
        "Age-appropriate hikes on safe terrain"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Brush and comb the coat thoroughly several times a week, and more often when the coat is growing or tangles easily. Work through the coat in sections and check close to the skin, particularly behind the ears, under the legs, around the neck, beneath the tail and between the toes.",

      bathing:
        "Bathe when needed with a dog-appropriate shampoo. Rinse thoroughly and dry the coat completely, including the undercoat, to reduce tangles and trapped moisture.",

      notes: [
        "The long double coat needs consistent maintenance to prevent mats.",
        "Check behind the ears, under the legs and around the tail for tangles.",
        "Inspect the feet and trim excess hair around the pads when needed for cleanliness and traction.",
        "Keep nails trimmed and inspect the pads regularly.",
        "Check the ears for redness, odour or discharge.",
        "Do not shave the coat solely for convenience; ask a veterinarian or experienced groomer about medical or welfare-related reasons for clipping.",
        "A shorter practical pet trim may reduce maintenance, but the coat still needs routine care."
      ]
    },

    training: {
      difficulty:
        "Moderate; intelligent and capable of learning, but may be sensitive to harsh handling and can become distracted.",

      tips: [
        "Use short, positive training sessions with rewards and clear cues.",
        "Teach recall, loose-lead walking and calm greetings early.",
        "Introduce grooming tools and handling gradually from puppyhood.",
        "Reward quiet, settled behaviour rather than only responding after barking.",
        "Socialise positively with different people, dogs and everyday environments.",
        "Keep training varied to maintain engagement and confidence.",
        "Avoid physical punishment or intimidating methods."
      ],

      socialization:
        "Introduce new people, dogs, surfaces, sounds and handling experiences gradually and positively. Because some individuals may be reserved, allow the dog to approach at its own pace rather than forcing contact."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Cool climates",
        "Temperate climates",
        "Cold climates with appropriate shelter and care",
        "Warm climates with shade, fresh water and exercise during cooler hours"
      ],

      aloneTimeTolerance: null
    }
  },

  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate to the dog's life stage, body condition, activity and veterinary needs.",

    feedingFrequency: {
      puppy:
        "Feed a complete puppy diet in multiple measured meals according to age, product guidance and veterinary advice.",

      adult:
        "Many adults do well with two measured meals per day. Adjust portions to maintain a healthy body condition.",

      senior: null
    },

    guidelines:
      "Choose a nutritionally complete diet suitable for the dog's age and activity. Measure portions, provide fresh water, monitor body condition and adjust intake as activity changes. Consult a veterinarian if weight, digestion, allergies or other health concerns arise.",

    considerations: [
      "Avoid overfeeding and monitor weight regularly.",
      "Adjust portions for age, activity level and body condition.",
      "Use treats as part of the overall daily calorie allowance.",
      "Introduce food changes gradually unless a veterinarian advises otherwise.",
      "Ask a veterinarian before adding supplements or using a therapeutic diet."
    ],

    note:
      "There is no single calorie target suitable for every Tibetan Terrier. Individual needs depend on age, body condition, activity, health and the food's energy density."
  },

  health: {
    overview:
      "Tibetan Terriers are often long-lived, but inherited and age-related health conditions can occur. Breed-club screening recommendations include hip evaluation, eye examination, testing for several inherited eye and neurological disorders, hearing assessment using BAER, and patellar evaluation. These recommendations are intended to support responsible breeding and informed care; they do not mean that every dog will develop a listed condition.",

    commonConditions: [
      "Hip dysplasia: an inherited and developmental joint condition that can affect comfort and mobility.",
      "Patellar luxation: displacement of the kneecap, which can cause intermittent or persistent lameness.",
      "Progressive retinal atrophy (including PRA3 and RCD4-associated forms): inherited eye disorders that can lead to progressive vision loss.",
      "Primary lens luxation (PLL): an inherited eye condition in which the lens can become displaced.",
      "Neuronal ceroid lipofuscinosis (NCL): an inherited neurological disorder; breed-specific DNA testing can help assess genetic risk.",
      "Congenital deafness: hearing impairment present from birth, for which BAER testing can be used.",
      "Hypothyroidism or autoimmune thyroiditis: endocrine concerns that may warrant veterinary assessment when symptoms or history suggest them.",
      "Cataracts: clouding of the lens that may impair vision."
    ],

    preventiveCare: [
      "Arrange routine veterinary examinations and maintain appropriate vaccination and parasite prevention.",
      "Ask the breeder for documented hip, eye, patellar and BAER hearing results where applicable.",
      "Ask about DNA testing for NCL, PLL, PRA3 and RCD4 and how the results were interpreted in the breeding plan.",
      "Discuss changes in vision, hearing, gait, activity or behaviour promptly with a veterinarian.",
      "Maintain a healthy body condition and provide age-appropriate exercise.",
      "Brush teeth regularly and maintain routine ear, skin, nail and coat care."
    ],

    recommendedScreenings: [
      "Hip evaluation",
      "Eye examination",
      "Neuronal ceroid lipofuscinosis (NCL) DNA test",
      "Primary lens luxation (PLL) DNA test",
      "Progressive retinal atrophy PRA3 DNA test",
      "Progressive retinal atrophy RCD4 DNA test",
      "BAER hearing test",
      "Patellar luxation evaluation"
    ],

    dentalCare:
      "Brush regularly with dog-safe toothpaste and arrange veterinary dental checks. Do not use human toothpaste.",

    earCare:
      "Inspect the ears regularly for redness, odour, discharge or discomfort. Clean only with a dog-appropriate product and technique recommended by a veterinarian.",

    skinCare:
      "Check the skin under the long coat during brushing, particularly in areas prone to tangles or trapped moisture. Seek veterinary advice for persistent itching, redness, sores or hair loss."
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Owners who enjoy regular grooming and coat maintenance",
      "Households that can provide daily walks and mental enrichment",
      "People who prefer an affectionate, alert companion",
      "Owners willing to use patient, reward-based training",
      "Homes prepared to socialise a potentially reserved dog gradually",
      "People who want a companion for suitable dog sports and outdoor activities"
    ],

    notIdealFor: [
      "Owners who cannot commit to frequent coat brushing",
      "Households expecting a dog that needs no training or enrichment",
      "People who want a completely maintenance-free coat",
      "Homes where a dog would routinely be left alone for long periods without preparation or support",
      "Owners unwilling to address barking, grooming sensitivity or cautious behaviour if it develops"
    ]
  },

  funFacts: [
    "Despite its name, the Tibetan Terrier is not a typical terrier bred for underground vermin hunting.",
    "Its large, flat, rounded feet help provide traction on rough and uneven ground.",
    "The long coat includes a soft, woolly undercoat and a protective outer coat.",
    "The tail is typically well feathered and curls over the back.",
    "The breed's history is closely associated with Tibetan communities and monasteries."
  ],

  faq: [
    {
      question: "Is the Tibetan Terrier really a terrier?",
      answer:
        "No, not in the traditional working-terrier sense. It is a Tibetan companion breed whose name is historical; it was not developed primarily for underground vermin hunting."
    },
    {
      question: "How big does a Tibetan Terrier get?",
      answer:
        "The typical adult male is around 15–16 inches (38–41 cm) at the shoulder. Females are generally somewhat smaller. The standard gives an overall weight range of approximately 18–30 pounds (8–14 kg), with build and proportions also important."
    },
    {
      question: "How much exercise does a Tibetan Terrier need?",
      answer:
        "Most need daily walks and opportunities for play, exploration and training. The 45–75 minutes listed here is a practical estimate, not an official minimum; age and health affect individual needs."
    },
    {
      question: "Does the Tibetan Terrier shed?",
      answer:
        "It has a double coat and can shed loose undercoat, particularly during seasonal changes. Frequent brushing helps remove loose hair and prevent tangles."
    },
    {
      question: "Is the Tibetan Terrier hypoallergenic?",
      answer:
        "No dog breed can be guaranteed hypoallergenic. Coat and shedding characteristics vary, and people with allergies may react even to dogs that shed less visibly."
    },
    {
      question: "How often should I groom a Tibetan Terrier?",
      answer:
        "Brush and comb the coat several times a week, checking down to the skin. The exact schedule depends on coat texture, length, lifestyle and whether the dog has a practical pet trim."
    },
    {
      question: "Is the Tibetan Terrier good with children?",
      answer:
        "Many are affectionate family companions, but suitability depends on the individual dog, training and the child's behaviour. Supervise interactions and teach children to handle dogs gently."
    },
    {
      question: "What health tests should I ask a breeder about?",
      answer:
        "Ask for hip and eye evaluations, patellar assessment and BAER hearing results, and ask about DNA testing for NCL, PLL, PRA3 and RCD4. Review the actual results with the breeder and, where useful, your veterinarian."
    },
    {
      question: "Can a Tibetan Terrier live in an apartment?",
      answer:
        "It can adapt to apartment life if it receives daily exercise, enrichment, training and grooming. Individual barking habits and tolerance for time alone also matter."
    },
    {
      question: "How long do Tibetan Terriers live?",
      answer:
        "The breed club describes many as living 12 years or longer, with some reaching 15–16 years. Lifespan varies with genetics, health, care and chance."
    }
  ],

  references: [
    "akc-tibetan-terrier-profile",
    "akc-tibetan-terrier-standard",
    "ttca-tibetan-terrier-health-testing",
    "ttca-tibetan-terrier-health",
    "wikimedia-tibetan-terrier-acid-pix"
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "Breed profile: alternate names",
        },
      ],
      verifiedOn: "2026-10-20",
      note: "Alternate names checked against the cited breed profile.",
    },

    scientificName: {
      reliability: "unverified",
      sources: [],
      verifiedOn: null,
      note: "Conventional domestic-dog scientific designation; no breed-specific taxonomic claim is made."
    },

    group: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "Breed group"
        },
        {
          id: "akc-tibetan-terrier-standard",
          role: "verified",
          locator: "Official breed standard"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Registry group classifications differ; the record shows the AKC and FCI classifications."
    },

    origin: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-tibetan-terrier-standard",
          role: "verified",
          locator: "Opening historical section"
        },
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "Breed history and origin"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "The breed developed in Tibet; the exact historical region is described broadly."
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "Breed profile, temperament and history"
        },
        {
          id: "akc-tibetan-terrier-standard",
          role: "verified",
          locator: "General appearance and temperament"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Original summary of breed history, characteristics and common roles."
    },

    physical: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-tibetan-terrier-standard",
          role: "verified",
          locator: "Coat, colour, size and general appearance"
        },
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "Breed characteristics and coat colours"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Physical characteristics follow the breed standard and profile; coat colours may be expressed differently by registry."
    },

    "physical.heightCm": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-tibetan-terrier-standard",
          role: "verified",
          locator: "Size: average male height 15–16 inches; females slightly smaller"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Male height is converted to centimetres and rounded. The source does not provide a precise female range, so it is left unavailable."
    },

    "physical.weightKg": {
  reliability: "unavailable",
  sources: [],
  verifiedOn: null,
  note: "Reliable sources checked do not establish separate male and female weight ranges.",
},

    "physical.weightKg.male.max": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The source provides a combined breed weight range, not a male-specific maximum."
    },

    "physical.weightKg.female.max": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The source provides a combined breed weight range, not a female-specific maximum."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ttca-tibetan-terrier-health",
          role: "verified",
          locator: "Breed health: long-lived breed, many living to 12 years or beyond"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "The 12–15-year range is a conservative summary of the breed club's longevity description, not a guarantee for an individual dog."
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling rating was established from the consulted sources."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-tibetan-terrier-standard",
          role: "verified",
          locator: "Temperament"
        },
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "Breed temperament description"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "These are typical breed tendencies, not a guarantee of an individual dog's behaviour."
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "DogLens editorial scores on a 1–5 scale; not official or scientifically validated measurements."
    },

    care: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "Grooming, training and care guidance"
        },
        {
          id: "ttca-tibetan-terrier-health",
          role: "cited",
          locator: "General health, grooming and preventive care"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "General care recommendations are adapted to the breed's long double coat and companion temperament."
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Practical editorial range, not an official breed-specific exercise prescription."
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable quantified breed-specific alone-time tolerance was established."
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "ttca-tibetan-terrier-health",
          role: "cited",
          locator: "General health and diet guidance"
        }
      ],
      verifiedOn: null,
      note: "General feeding guidance; exact calorie and portion needs must be individualised."
    },

    "nutrition.feedingFrequency.puppy": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General puppy feeding guidance, not a breed-specific feeding schedule."
    },

    "nutrition.feedingFrequency.adult": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Two measured meals daily is general guidance, not a breed-specific requirement."
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific senior feeding frequency was established."
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "ttca-tibetan-terrier-health",
          role: "verified",
          locator: "Breed health concerns and preventive care"
        },
        {
          id: "ttca-tibetan-terrier-health-testing",
          role: "verified",
          locator: "Recommended health tests for breeding animals"
        },
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "Recommended health tests from the national breed club"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Conditions listed are reported breed concerns; this does not imply that every Tibetan Terrier will develop them."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ttca-tibetan-terrier-health-testing",
          role: "verified",
          locator: "Hip, eye, NCL, PLL, RCD4 PRA, PRA3, BAER and patellar testing"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "The club's recommendations are primarily intended for breeding dogs. Discuss their relevance with a veterinarian or responsible breeder."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-tibetan-terrier-profile",
          role: "cited",
          locator: "Breed characteristics and care needs"
        },
        {
          id: "akc-tibetan-terrier-standard",
          role: "cited",
          locator: "Temperament, size and coat"
        }
      ],
      verifiedOn: null,
      note: "Suitability is editorial guidance based on grooming, exercise and temperament, not a guarantee."
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific first-time-owner rating was established."
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific senior-owner rating was established."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-tibetan-terrier-standard",
          role: "verified",
          locator: "General appearance, feet, coat and tail"
        },
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "Historical description"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Breed facts are paraphrased from the standard and profile."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "Breed profile and care information"
        },
        {
          id: "akc-tibetan-terrier-standard",
          role: "verified",
          locator: "Size, coat, colours and temperament"
        },
        {
          id: "ttca-tibetan-terrier-health",
          role: "verified",
          locator: "Longevity and health concerns"
        },
        {
          id: "ttca-tibetan-terrier-health-testing",
          role: "verified",
          locator: "Recommended health screening"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Original answers based on breed standards and health guidance; exercise time is explicitly identified as an estimate."
    }
  },

  updatedOn: "2026-10-20"
};