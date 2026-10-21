import type { Breed } from "./breed.types";

export const english_setter: Breed = {
  slug: "english-setter",
  name: "English Setter",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Laverack Setter",
    "English Setting Spaniel"
  ],

  group: "AKC Sporting Group; UK Kennel Club Gundog Group; FCI Group 7 — Pointing Dogs",

  origin: {
    country: "England",
    region: "United Kingdom"
  },

  // No image is included until a specific original file's creator,
  // license, commercial-use terms and attribution can be checked.
  images: [],

  overview: {
    summary:
      "An elegant, friendly sporting dog with a feathered coat, a gentle expression and a strong instinct for locating game birds.",

    description:
      "The English Setter is a medium-to-large sporting dog developed to search for game birds and indicate their location to a hunter. Its distinctive appearance combines a refined head, long silky feathering and a white coat patterned with fine flecks known as belton. At home, many English Setters are affectionate and sociable companions, while outdoors they can be energetic, curious and strongly interested in scents and birds. They usually do best with regular exercise, patient reward-based training, coat maintenance and close companionship. Their hunting instincts mean that a secure outdoor area and reliable recall training are especially important.",

    history:
      "The English Setter developed in England as a bird-finding dog. Earlier setters were trained to locate game and crouch or 'set' near it, allowing hunters to approach and use nets; later, the breed was adapted to work alongside firearms. Historical accounts describe the influence of older spaniel and pointer-type dogs, although the exact ancestry of the modern breed is not fully documented. Breeders in the nineteenth century helped establish recognisable lines for field work and exhibition. Today, English Setters continue to participate in hunting and field activities and are also kept as active companions.",

    originalPurpose:
      "To search for game birds and indicate their location to hunters, historically by setting or crouching near the birds.",

    currentRoles: [
      "Hunting and bird-finding work where lawful",
      "Field trials and gundog activities",
      "Scent-based enrichment and outdoor exploration",
      "Obedience, hiking and other suitable dog activities",
      "Active family companion"
    ]
  },

  physical: {
    sizeCategory: "Medium to large",

    // AKC profile ranges converted from inches to centimetres and rounded.
    heightCm: {
      male: {
        min: 64,
        max: 69
      },
      female: {
        min: 58,
        max: 64
      }
    },

    // AKC profile ranges converted from pounds to kilograms and rounded.
    weightKg: {
      male: {
        min: 29.5,
        max: 36.3
      },
      female: {
        min: 20.4,
        max: 24.9
      }
    },

    lifespanYears: {
      min: 12,
      max: 12
    },

    coatType:
      "Flat-lying, soft and silky, with longer feathering on the ears, chest, underside, legs and tail. The coat may be slightly wavy but should not be curly.",

    coatLength: "Medium to long, with feathering",

    coatColors: [
      "Blue belton (black flecking on white)",
      "Orange belton (orange flecking on white)",
      "Lemon belton (lemon-coloured flecking on white)",
      "Liver belton (liver-coloured flecking on white)",
      "Tricolour, commonly blue belton with tan markings"
    ],

    sheddingLevel:
      "Moderate; loose hair and coat tangles are easier to manage with regular brushing.",

    // The consulted sources did not provide a consistent breed-specific rating.
    droolingLevel: null,

    distinctiveFeatures: [
      "Long, narrow head with a gentle expression",
      "Low-set hanging ears with silky feathering",
      "White coat with distinctive flecked belton markings",
      "Long feathering on the chest, legs and tail",
      "Athletic, balanced build suited to sustained movement"
    ]
  },

  temperament: {
    traits: [
      "Affectionate",
      "Friendly",
      "Gentle",
      "Sociable",
      "Energetic outdoors",
      "Curious and scent-aware",
      "Sensitive to harsh handling",
      "Often companionable with familiar people and other dogs"
    ],

    // Editorial estimates on a 1–5 scale, not official measurements.
    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: 2,
      independence: 3,
      trainability: 4,
      barking: 3,
      energy: 5
    }
  },

  care: {
    exercise: {
      level: "High",

      // Practical editorial estimate; individual needs vary by age and health.
      minutesPerDay: {
        min: 60,
        max: 120
      },

      activities: [
        "Brisk walks and hikes",
        "Supervised running in a securely enclosed area",
        "Scent games and search activities",
        "Reward-based recall and obedience practice",
        "Age-appropriate field or gundog activities"
      ]
    },

    grooming: {
      level: "Moderate to high",

      brushing:
        "Brush thoroughly at least several times a week, increasing frequency when feathering tangles easily. Pay particular attention behind the ears, under the legs, on the chest and around the tail.",

      bathing:
        "Bathe when needed with a dog-appropriate shampoo. The right interval depends on coat condition, outdoor activity and skin health.",

      notes: [
        "Use a comb to check feathered areas for knots and mats.",
        "Inspect ears regularly and keep them clean and dry as advised by a veterinarian.",
        "Trim nails regularly so they do not become overgrown.",
        "Check the coat and skin after outdoor walks for burrs, grass seeds and parasites.",
        "Professional trimming may help maintain a manageable coat but is not a substitute for routine brushing."
      ]
    },

    training: {
      difficulty:
        "Moderate; generally responsive to patient training, but outdoor scents and bird interest can compete for attention.",

      tips: [
        "Use rewards, praise and short, engaging training sessions.",
        "Start recall and lead manners early and practise around gradually increasing distractions.",
        "Teach calm greetings and settle behaviours as well as active skills.",
        "Provide safe opportunities to sniff and explore instead of expecting the dog to ignore all scent interests.",
        "Avoid harsh punishment, which can undermine confidence and cooperation.",
        "Do not allow off-lead exercise in unsecured areas until recall is dependable and the environment is safe."
      ],

      socialization:
        "Introduce the dog gradually and positively to people, dogs, handling, household sounds and varied environments during puppyhood and continue throughout life."
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool climates with suitable shelter",
        "Warm climates when exercise is scheduled during cooler hours and shade and water are available"
      ],

      aloneTimeTolerance: null
    }
  },

  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate to the dog's life stage, body condition, activity level and veterinary needs.",

    feedingFrequency: {
      puppy:
        "Use a complete puppy diet and divide the daily amount into multiple meals according to age, product guidance and veterinary advice.",

      adult:
        "Many adult dogs do well with two measured meals per day; adjust the amount to maintain a lean body condition.",

      senior: null
    },

    guidelines:
      "Choose a nutritionally complete diet appropriate for the dog's life stage and activity. Measure portions, monitor body condition and adjust food intake as exercise changes. Keep fresh water available at all times. Treats should be included in the overall daily calorie allowance.",

    considerations: [
      "Avoid overfeeding and monitor weight regularly.",
      "Adjust food portions for working dogs and dogs with lower activity levels.",
      "Introduce diet changes gradually unless a veterinarian directs otherwise.",
      "Discuss growth, weight, allergies or digestive concerns with a veterinarian.",
      "Ask a veterinarian about meal timing and exercise precautions if the dog has risk factors for bloat."
    ],

    note:
      "Individual calorie needs vary. Follow the food's feeding guidance as a starting point and adjust with veterinary advice and body-condition monitoring."
  },

  health: {
    overview:
      "English Setters can live active lives with appropriate preventive care, weight management and veterinary checks. Breed-club and kennel-club guidance identifies hip and elbow evaluation, thyroid evaluation and BAER hearing testing among recommended screening areas. These recommendations support risk assessment; they do not mean that every dog will develop a condition.",

    commonConditions: [
      "Hip dysplasia: an inherited and developmental joint condition worth discussing with the breeder and veterinarian.",
      "Elbow dysplasia: a developmental joint condition for which screening is recommended by the national breed club.",
      "Congenital sensorineural deafness: research in a UK puppy cohort found both unilateral and bilateral cases; the study's results should not be treated as a universal prevalence estimate for every population.",
      "Hypothyroidism: a possible endocrine concern that may be assessed when clinically appropriate.",
      "Gastric dilatation-volvulus (bloat): a life-threatening emergency that requires immediate veterinary attention if suspected."
    ],

    preventiveCare: [
      "Arrange routine veterinary examinations and keep vaccinations and parasite prevention current.",
      "Discuss hip and elbow evaluation, thyroid assessment and BAER hearing testing with a veterinarian or responsible breeder.",
      "Maintain a lean body condition and age-appropriate exercise.",
      "Seek veterinary care promptly for sudden abdominal swelling, repeated unproductive retching, collapse or marked distress.",
      "Use a secure lead or fenced area because hunting interest can lead the dog to follow scents or birds."
    ],

    recommendedScreenings: [
      "Hip evaluation",
      "Elbow evaluation",
      "Thyroid evaluation",
      "BAER hearing testing"
    ],

    dentalCare:
      "Brush the teeth regularly with dog-safe toothpaste and arrange veterinary dental assessment when needed. Do not use human toothpaste.",

    earCare:
      "Check the hanging ears regularly for redness, odour, discharge or discomfort. Clean only as advised by a veterinarian, and seek care if signs of infection appear.",

    skinCare:
      "Inspect the skin and feathering during brushing, particularly where mats can trap moisture or debris. Seek veterinary advice for persistent itching, redness, sores or hair loss."
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "People who can provide daily exercise and mental enrichment",
      "Households that enjoy outdoor activities and scent-based games",
      "Owners willing to brush and maintain a feathered coat",
      "Families prepared to supervise children and teach respectful dog handling",
      "People who can provide companionship and consistent reward-based training"
    ],

    notIdealFor: [
      "Households that expect a low-energy dog with minimal exercise needs",
      "Owners who cannot provide regular coat care",
      "People who need dependable off-lead reliability without training",
      "Homes where the dog would be left alone for long periods without gradual preparation and suitable support"
    ]
  },

  funFacts: [
    "The name 'setter' refers to the historical behaviour of indicating game by crouching or setting near it.",
    "The term 'belton' describes the characteristic flecked coat pattern associated with the breed.",
    "English Setters were developed as bird-finding dogs and remain associated with field work.",
    "The long feathering is visually distinctive and needs regular care to prevent tangles."
  ],

  faq: [
    {
      question: "Is the English Setter a good family dog?",
      answer:
        "Many English Setters are affectionate and sociable companions. As with any breed, children and dogs should be supervised together, and the individual dog's temperament, training and needs matter."
    },
    {
      question: "How much exercise does an English Setter need?",
      answer:
        "They are an active sporting breed and generally need substantial daily movement and mental enrichment. The 60–120 minutes listed here is a practical estimate, not a universal prescription; age, health and working activity change the amount needed."
    },
    {
      question: "Does an English Setter shed?",
      answer:
        "Yes. Regular brushing helps remove loose hair and prevent tangles in the longer feathering."
    },
    {
      question: "How often should an English Setter be brushed?",
      answer:
        "Brush several times a week as a starting point, checking the feathered areas for knots. Some coats need daily attention, especially after outdoor activity."
    },
    {
      question: "What does belton mean?",
      answer:
        "Belton describes a flecked pattern on the coat, commonly seen as coloured speckling on a white ground."
    },
    {
      question: "Are English Setters easy to train?",
      answer:
        "They can respond well to patient, reward-based training. Their interest in birds and scents can make recall and focus challenging outdoors, so practise gradually and use secure areas."
    },
    {
      question: "What health tests should I ask a breeder about?",
      answer:
        "Ask about hip and elbow evaluation, thyroid evaluation and BAER hearing testing. Discuss the results and their relevance with a veterinarian; screening reduces uncertainty but cannot guarantee future health."
    },
    {
      question: "Can an English Setter live in an apartment?",
      answer:
        "Apartment living suitability depends on the individual dog, daily exercise, training, noise and time spent alone. The catalog does not assign a definitive breed-wide yes or no."
    },
    {
      question: "What colours do English Setters have?",
      answer:
        "Common recognised patterns include blue, orange, lemon and liver belton, along with tricolour patterns. Exact wording and acceptance can vary by registry."
    },
    {
      question: "Are English Setters prone to bloat?",
      answer:
        "Bloat is a serious risk discussed in general breed-care guidance. Sudden abdominal swelling, unproductive retching, collapse or severe distress needs emergency veterinary care."
    }
  ],

  references: [
    "akc-english-setter-profile",
    "american-kennel-club-sporting-group-health-testing",
    "english-setter-association-breed-standard",
    "english-setter-association-health",
    "pubmed-english-setter-congenital-deafness",
    "akc-english-setter-history"
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-english-setter-history",
          role: "verified",
          locator: "Breed history and historical naming"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Historical alternate names are not necessarily formal registry names."
    },

    scientificName: {
      reliability: "unverified",
      sources: [],
      verifiedOn: null,
      note: "Recorded as the conventional domestic-dog scientific designation; not independently verified for this catalog entry."
    },

    group: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-english-setter-profile",
          role: "verified",
          locator: "Breed group"
        },
        {
          id: "english-setter-association-breed-standard",
          role: "verified",
          locator: "Breed standard"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Group labels depend on the registry; the record displays more than one registry classification."
    },

    origin: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-english-setter-history",
          role: "verified",
          locator: "Breed history"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "The breed was developed in England."
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-english-setter-profile",
          role: "verified",
          locator: "About the breed, care and exercise"
        },
        {
          id: "akc-english-setter-history",
          role: "verified",
          locator: "Breed history"
        },
        {
          id: "english-setter-association-breed-standard",
          role: "verified",
          locator: "Breed characteristics and historical function"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Descriptions are original summaries of the cited breed profile and standard."
    },

    physical: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-english-setter-profile",
          role: "verified",
          locator: "Height, weight, life expectancy and breed characteristics"
        },
        {
          id: "english-setter-association-breed-standard",
          role: "verified",
          locator: "General appearance, coat, colour and size"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "AKC profile measurements are used for height and weight; the UK standard has somewhat different height ranges."
    },

    "physical.weightKg.male.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-english-setter-profile",
          role: "verified",
          locator: "Weight: males 65–80 pounds; converted to kilograms and rounded"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Converted from pounds and rounded to one decimal place."
    },

    "physical.weightKg.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-english-setter-profile",
          role: "verified",
          locator: "Weight: females 45–55 pounds; converted to kilograms and rounded"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Converted from pounds and rounded to one decimal place."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-english-setter-profile",
          role: "verified",
          locator: "Grooming and coat care"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Qualitative description; not a measured shedding rate."
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No sufficiently consistent breed-specific drooling rating was established from the consulted sources."
    },

    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-english-setter-profile",
          role: "verified",
          locator: "Breed traits and temperament"
        },
        {
          id: "english-setter-association-breed-standard",
          role: "verified",
          locator: "Characteristics and temperament"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Traits describe common breed tendencies, not guarantees about an individual dog."
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "DogLens editorial ratings on a 1–5 scale, not official or validated psychometric scores."
    },

    care: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-english-setter-profile",
          role: "verified",
          locator: "Grooming, exercise, training and nutrition guidance"
        },
        {
          id: "english-setter-association-breed-standard",
          role: "cited",
          locator: "Activity and working characteristics"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Includes general care guidance; individual needs vary."
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "A practical editorial range, not a formally published breed-specific minimum."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No categorical breed-wide apartment suitability rating was established."
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable quantified breed-specific alone-time tolerance was found."
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-english-setter-profile",
          role: "cited",
          locator: "Nutrition guidance"
        }
      ],
      verifiedOn: null,
      note: "General feeding advice; exact diet and quantity should be tailored to the individual dog."
    },

    "nutrition.feedingFrequency.puppy": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-english-setter-profile",
          role: "verified",
          locator: "Nutrition: puppy feeding"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "The profile advises multiple small meals for puppies; the record avoids prescribing a fixed quantity."
    },

    "nutrition.feedingFrequency.adult": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-english-setter-profile",
          role: "verified",
          locator: "Nutrition: adult feeding"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "The source recommends measured adult meals; exact needs vary."
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No specific senior feeding frequency was established from the consulted breed-specific sources."
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-english-setter-profile",
          role: "verified",
          locator: "Health and recommended national breed club tests"
        },
        {
          id: "english-setter-association-health",
          role: "verified",
          locator: "Breed health information"
        },
        {
          id: "pubmed-english-setter-congenital-deafness",
          role: "verified",
          locator: "Study abstract and reported results"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Health risks and screening guidance do not imply that every dog will develop these conditions."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-english-setter-profile",
          role: "verified",
          locator: "Breed health and recommended screenings"
        },
        {
          id: "english-setter-association-health",
          role: "verified",
          locator: "Health concerns and screening information"
        },
        {
          id: "pubmed-english-setter-congenital-deafness",
          role: "verified",
          locator: "Study results on congenital sensorineural deafness"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Conditions are described as possible concerns, not as a prediction for an individual dog."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-sporting-group-health-testing",
          role: "verified",
          locator: "English Setter: recommended tests from the national breed club"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Screening recommendations should be discussed with a veterinarian or responsible breeder."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-english-setter-profile",
          role: "cited",
          locator: "Breed characteristics and care requirements"
        }
      ],
      verifiedOn: null,
      note: "Suitability statements are editorial guidance based on activity, grooming and training needs, not a guarantee."
    },

    "suitability.familiesWithChildren": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-english-setter-profile",
          role: "verified",
          locator: "Family life and child-supervision guidance"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "A positive general tendency does not remove the need to supervise children and dogs."
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific rating for suitability for senior owners was established."
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability depends on the individual dog and household; no categorical breed-wide rating was established."
    },

    "suitability.firstTimeOwners": {
  reliability: "unavailable",
  sources: [],
  verifiedOn: null,
  note: "No reliable breed-specific rating for suitability for first-time owners was established."
},

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-english-setter-history",
          role: "verified",
          locator: "Breed history"
        },
        {
          id: "english-setter-association-breed-standard",
          role: "verified",
          locator: "Coat markings and breed function"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Historical and coat terminology facts are paraphrased."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-english-setter-profile",
          role: "verified",
          locator: "Breed characteristics, care, exercise, grooming, nutrition and health"
        },
        {
          id: "english-setter-association-breed-standard",
          role: "verified",
          locator: "Breed standard"
        },
        {
          id: "english-setter-association-health",
          role: "verified",
          locator: "Health guidance"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Answers are original summaries. Exercise time is explicitly labelled as an estimate."
    }
  },

  updatedOn: "2026-10-20"
};