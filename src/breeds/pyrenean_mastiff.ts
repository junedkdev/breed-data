import type { Breed } from "../schema/breed.types";

export const pyrenean_mastiff: Breed = {
  slug: "pyrenean-mastiff",
  name: "Pyrenean Mastiff",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Mastín del Pirineo",
    "Mastin of the Pyrenees"
  ],

  group:
    "FCI Group 2 — Pinscher and Schnauzer, Molossoid and Swiss Mountain and Cattledogs; UKC Guardian Dog Group",

  origin: {
    country: "Spain",
    region: "Aragon and the Spanish Pyrenees"
  },

  // No image is included: no original image file was verified for this record.
  images: [],

  overview: {
    summary:
      "A giant Spanish livestock guardian known for its substantial build, thick white coat with distinct patches, calm manner and confident protective instincts.",

    description:
      "The Pyrenean Mastiff is a very large, powerful dog developed to protect livestock in the mountainous regions of Spain. Its dense coat is predominantly white with clearly defined patches, often including markings around the eyes and ears. Despite its imposing size, the breed is expected to move with strength and balance rather than sluggishness. It is commonly described as calm, intelligent and affectionate with familiar people, while remaining alert and confident when unfamiliar people or potential threats approach. Responsible ownership requires early socialisation, consistent reward-based training, secure boundaries, room to move, regular grooming and the budget and physical ability to manage a giant dog.",

    history:
      "The breed developed in the Spanish Pyrenees, particularly in Aragon, where shepherds relied on large guardian dogs to protect livestock during seasonal movement between pastures. These dogs were expected to deter predators such as wolves and bears while remaining with the flock and its handlers. As large predators became less common and traditional livestock practices changed, the breed's numbers declined. Dedicated Spanish breeders later worked to rebuild the population from a limited number of dogs. The Pyrenean Mastiff is now kept as a livestock and property guardian and as a companion in homes prepared for its size and guarding instincts.",

    originalPurpose:
      "To guard livestock and protect flocks against predators, particularly wolves and bears, while accompanying shepherds across mountain grazing areas.",

    currentRoles: [
      "Livestock guardian where appropriate and lawful",
      "Property and estate guardian",
      "Family companion in a suitably prepared home",
      "Outdoor companion for people with space and experience handling giant dogs",
      "Conformation and breed activities"
    ]
  },

  physical: {
    sizeCategory: "Giant",

    // Official breed-standard minimums; no upper limit is specified by the cited standards.
    heightCm: {
      male: {
        min: 77,
        max: null
      },
      female: {
        min: 72,
        max: null
      }
    },

    // Published profile weight is a combined range, not divided by sex.
    weightKg: {
      male: null,
      female: null
    },

    // Veterinary-reviewed sources give differing ranges; retain the wider reported range.
    lifespanYears: {
      min: 8,
      max: 12
    },

    coatType:
      "Dense, thick, moderately long double coat with a coarse rather than woolly texture. The coat is more abundant around the neck and shoulders, and longer on the underside, backs of the legs and tail.",

    coatLength: "Medium to long",

    coatColors: [
      "White with grey patches",
      "White with golden-yellow patches",
      "White with brown patches",
      "White with black patches",
      "White with silver-grey patches",
      "White with sandy or beige patches",
      "White with agouti or sable patches",
      "White with badger-like markings",
      "White with patch markings that may include brindling, according to some standards"
    ],

    sheddingLevel:
      "Moderate to heavy; seasonal coat changes can produce substantial shedding.",

    droolingLevel: "High",

    distinctiveFeatures: [
      "Very large, strong and muscular body with substantial bone",
      "Predominantly white coat with clearly defined patches",
      "Dark facial pigment and a mask that may be present",
      "Broad head with a powerful muzzle and gentle expression",
      "Dense coat with a pronounced neck ruff, especially in males",
      "Large plumed tail",
      "Double dewlap and substantial neck skin",
      "Powerful, balanced movement for a giant breed"
    ]
  },

  temperament: {
    traits: [
      "Calm",
      "Noble",
      "Intelligent",
      "Courageous",
      "Confident around unfamiliar people",
      "Affectionate with familiar people",
      "Protective",
      "Independent",
      "Generally steady when well socialised",
      "Alert to changes around livestock or property"
    ],

    // DogLens editorial estimates, not official or validated behaviour scores.
    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 5,
      independence: 4,
      trainability: 3,
      barking: 3,
      energy: 3
    }
  },

  care: {
    exercise: {
      level: "Moderate; regular daily activity without excessive impact during growth",

      // Practical estimate, not an official breed-standard requirement.
      minutesPerDay: {
        min: 45,
        max: 90
      },

      activities: [
        "Regular walks at a comfortable pace",
        "Supervised exploration in a secure area",
        "Low-impact outdoor activity appropriate to age and joint health",
        "Calm scent and problem-solving games",
        "Short reward-based training sessions",
        "Suitable livestock-guardian work with appropriate supervision and conditions"
      ]
    },

    grooming: {
      level: "Moderate to high",

      brushing:
        "Brush thoroughly at least weekly, with more frequent brushing during seasonal shedding. Pay particular attention to the feathering behind the forelegs, underside, rear, tail and areas where the coat can trap moisture or debris.",

      bathing:
        "Bathe when needed using a dog-appropriate shampoo. Dry the dense coat thoroughly to the skin after bathing or getting wet.",

      notes: [
        "Expect more loose coat during seasonal shedding periods.",
        "Check and clean the drool-prone neck and dewlap area as needed.",
        "Inspect hanging ears regularly for dirt, odour, redness or discharge.",
        "Trim nails regularly, including dewclaws where present.",
        "Check the coat and skin for mats, parasites, grass seeds and moisture-related irritation.",
        "Avoid shaving the double coat unless a veterinarian advises a medical reason.",
        "In hot or humid weather, provide shade, water and a cool resting place, and ensure the undercoat dries properly."
      ]
    },

    training: {
      difficulty:
        "Moderate to challenging for inexperienced handlers because of its size, independence and natural guarding instincts.",

      tips: [
        "Begin reward-based training and household manners early, while the dog is still manageable physically.",
        "Teach loose-lead walking, recall, a reliable stop cue and calm visitor routines.",
        "Use consistent rules and rewards rather than intimidation or harsh punishment.",
        "Socialise the puppy gradually with different people, environments, surfaces and appropriate dogs.",
        "Teach the dog to settle calmly when people enter or leave the property.",
        "Use secure fencing and controlled introductions rather than expecting instinct alone to determine whether a visitor or animal is safe.",
        "Get help from a qualified trainer experienced with livestock guardians or giant breeds if guarding behaviour becomes difficult to manage."
      ],

      socialization:
        "Early, ongoing and carefully managed socialisation is important. Introduce visitors, other dogs, handling and everyday environments in a way that supports calm, controlled behaviour without forcing interactions."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cool and temperate climates",
        "Mountain environments with suitable shelter",
        "Warm climates with shade, plentiful water and activity scheduled for cooler hours"
      ],

      aloneTimeTolerance: null
    }
  },

  nutrition: {
    dietType:
      "A complete and balanced diet appropriate for a giant-breed dog's life stage, growth rate, body condition and health.",

    feedingFrequency: {
      puppy:
        "Feed a complete large- or giant-breed puppy diet in several measured meals according to age, product guidance and veterinary advice. Avoid uncontrolled rapid growth and overfeeding.",

      adult:
        "Many adult dogs do well with two measured meals per day. Adjust portions to activity level and body condition.",

      senior: null
    },

    guidelines:
      "Giant breeds need careful weight and growth management. Use a nutritionally complete diet, measure portions, keep fresh water available and adjust intake to maintain a lean body condition. Ask a veterinarian to guide growth feeding, especially during puppyhood and adolescence.",

    considerations: [
      "Avoid excess calories and rapid weight gain during growth.",
      "Choose a diet formulated for the dog's life stage and expected adult size.",
      "Monitor body condition and adjust portions as activity changes.",
      "Discuss joint health, supplements and any diet changes with a veterinarian rather than adding supplements automatically.",
      "Ask a veterinarian about feeding and exercise routines that may reduce risk factors associated with bloat.",
      "Keep food and treats appropriate to the dog's overall daily energy needs."
    ],

    note:
      "There is no single correct portion for every Pyrenean Mastiff. Food requirements depend on age, body condition, activity, neuter status and the specific diet."
  },

  health: {
    overview:
      "As a giant breed, the Pyrenean Mastiff needs careful attention to joint development, body condition and heart health. Breed-club guidance highlights hip and elbow screening and cardiac assessment, while degenerative myelopathy DNA testing is also recommended by the national breed club listed in the breed profile. Deep-chested dogs may develop gastric dilatation-volvulus (bloat), a life-threatening emergency. Screening can help inform breeding and care decisions but cannot guarantee that an individual dog will remain healthy.",

    commonConditions: [
      "Hip dysplasia: an abnormal development of the hip joint that can contribute to pain and reduced mobility.",
      "Elbow dysplasia: a group of developmental elbow disorders relevant to large and giant dogs.",
      "Degenerative myelopathy: an inherited progressive neurological disease; DNA testing can help assess genetic status but results require correct interpretation.",
      "Cardiac disease: breed-club health information notes concerns about heart disease in the population and recommends cardiac evaluation for breeding dogs.",
      "Gastric dilatation-volvulus (bloat): a sudden, potentially fatal emergency involving stomach distension and sometimes twisting.",
      "Moisture-associated skin irritation or hot spots: dense coat can make thorough drying important, particularly in humid conditions."
    ],

    preventiveCare: [
      "Schedule regular veterinary examinations and maintain appropriate vaccination and parasite-prevention plans.",
      "Ask breeders for documented hip and elbow evaluation results and relevant genetic test results.",
      "Discuss cardiac examination and whether further testing is appropriate with a veterinarian.",
      "Maintain a lean body condition and avoid excessive impact during growth.",
      "Seek emergency veterinary care immediately if bloat is suspected.",
      "Keep the dense coat dry to the skin after bathing or getting wet, especially in humid weather.",
      "Use secure fencing and controlled handling to reduce risks associated with a powerful guardian dog."
    ],

    recommendedScreenings: [
      "Hip evaluation",
      "Elbow evaluation",
      "Cardiac examination",
      "Degenerative myelopathy DNA test"
    ],

    dentalCare:
      "Brush regularly with dog-safe toothpaste and arrange veterinary dental checks. Large size does not remove the need for routine oral care.",

    earCare:
      "Check the hanging ears regularly for redness, odour, discharge or discomfort. Clean only with a suitable product and method recommended by a veterinarian.",

    skinCare:
      "Inspect the skin beneath the dense coat and around the neck folds. Dry the coat thoroughly after bathing or wet weather and seek veterinary advice for persistent redness, itching, sores or discharge."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Experienced owners who understand giant breeds and guardian behaviour",
      "Homes with sufficient room and secure fencing",
      "Rural or semi-rural households able to meet the dog's needs",
      "People prepared for substantial food, veterinary, grooming and equipment costs",
      "Families committed to early socialisation, consistent training and supervision",
      "Suitable livestock-guardian settings with responsible management"
    ],

    notIdealFor: [
      "People who cannot safely manage a very large, powerful dog on a lead",
      "Small homes without enough space or access to appropriate outdoor activity",
      "Owners who want a dog that welcomes every stranger without supervision",
      "Households unable to afford giant-breed food, veterinary care and transport",
      "People unwilling to manage shedding, drooling and regular coat care",
      "Homes where secure boundaries and controlled visitor introductions are not possible"
    ]
  },

  funFacts: [
    "The breed is known in its country of origin as Mastín del Pirineo.",
    "It developed in Spain as a livestock guardian, not as a mountain-dog breed from France.",
    "The coat is expected to have a white base with distinct patches rather than being solid white.",
    "The breed standard specifies minimum heights rather than a maximum height limit.",
    "Its traditional role required it to accompany livestock over seasonal grazing routes and deter large predators."
  ],

  faq: [
    {
      question: "Is the Pyrenean Mastiff the same as the Pyrenean Mountain Dog?",
      answer:
        "No. They are distinct breeds with different breed histories and standards. The Pyrenean Mastiff is the Spanish livestock guardian also known as Mastín del Pirineo."
    },
    {
      question: "How large does a Pyrenean Mastiff get?",
      answer:
        "The cited breed standards specify minimum heights of 77 cm for males and 72 cm for females, with no upper height limit in the standard used here. Individual size varies."
    },
    {
      question: "Is the Pyrenean Mastiff a good family dog?",
      answer:
        "It can be a calm and affectionate family companion in a well-prepared home. Its giant size and guarding instincts make early training, socialisation and supervision especially important."
    },
    {
      question: "How much exercise does a Pyrenean Mastiff need?",
      answer:
        "Regular walks and controlled daily activity are important. The 45–90 minutes shown in this profile is an editorial estimate, not an official rule; age, health and working responsibilities affect individual needs."
    },
    {
      question: "Does the Pyrenean Mastiff shed?",
      answer:
        "Yes. Its dense coat can shed heavily during seasonal coat changes. Regular brushing and thorough drying help keep the coat and skin in good condition."
    },
    {
      question: "What colours are accepted for a Pyrenean Mastiff?",
      answer:
        "The coat has a white base with distinct patches. Recognised patch colours vary slightly by registry, and some standards specify a facial mask and markings around the ears and eyes."
    },
    {
      question: "Is the Pyrenean Mastiff easy to train?",
      answer:
        "It is intelligent but may be independent. Begin early with reward-based training, clear boundaries and gradual socialisation. Professional guidance can be useful for inexperienced owners."
    },
    {
      question: "What health tests should I ask a breeder about?",
      answer:
        "Ask for documented hip and elbow evaluations, a cardiac examination and degenerative myelopathy DNA test results. Discuss the results with a veterinarian and ask how they were considered in breeding decisions."
    },
    {
      question: "Can a Pyrenean Mastiff live in a hot climate?",
      answer:
        "It can need extra care in warm weather because of its dense coat and large body. Provide shade, fresh water and a cool resting area, and avoid strenuous exercise during the hottest hours."
    },
    {
      question: "What is bloat, and why should owners know about it?",
      answer:
        "Bloat is a potentially life-threatening stomach emergency. A swollen abdomen, repeated unproductive retching, restlessness, weakness or collapse requires immediate emergency veterinary attention."
    }
  ],

  references: [
    "fci-pyrenean-mastiff-nomenclature",
    "uk-kennel-club-pyrenean-mastiff-standard",
    "akc-pyrenean-mastiff-profile",
    "pmaa-pyrenean-mastiff-standard",
    "pmaa-pyrenean-mastiff-health",
    "petmd-pyrenean-mastiff-health"
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-pyrenean-mastiff-nomenclature",
          role: "verified",
          locator: "Breed name: Mastín del Pirineo / Pyrenean Mastiff"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Mastín del Pirineo is the Spanish breed name. The alternate English wording is descriptive."
    },

    scientificName: {
      reliability: "unverified",
      sources: [],
      verifiedOn: null,
      note: "Conventional domestic-dog designation recorded without a breed-specific taxonomic verification."
    },

    group: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-pyrenean-mastiff-nomenclature",
          role: "verified",
          locator: "FCI Group 2 and Molossian type"
        },
        {
          id: "uk-kennel-club-pyrenean-mastiff-standard",
          role: "verified",
          locator: "Guardian breed standard"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Classification labels differ by registry."
    },

    origin: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-pyrenean-mastiff-nomenclature",
          role: "verified",
          locator: "Country of origin: Spain"
        },
        {
          id: "pmaa-pyrenean-mastiff-standard",
          role: "verified",
          locator: "Historical summary and region of Aragon"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Breed origin is Spain, with the Aragon and Spanish Pyrenees region associated with its traditional work."
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "pmaa-pyrenean-mastiff-standard",
          role: "verified",
          locator: "History, general appearance and temperament"
        },
        {
          id: "uk-kennel-club-pyrenean-mastiff-standard",
          role: "verified",
          locator: "Historical summary and general appearance"
        },
        {
          id: "akc-pyrenean-mastiff-profile",
          role: "verified",
          locator: "Breed overview and history"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Descriptions are original summaries of the breed's history, appearance and working role."
    },

    physical: {
      reliability: "reliable_source",
      sources: [
        {
          id: "pmaa-pyrenean-mastiff-standard",
          role: "verified",
          locator: "Size, coat and colour sections"
        },
        {
          id: "uk-kennel-club-pyrenean-mastiff-standard",
          role: "verified",
          locator: "General appearance, coat, colour and size"
        },
        {
          id: "akc-pyrenean-mastiff-profile",
          role: "verified",
          locator: "Height, weight, life expectancy and drooling"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Standards differ in coat detail and colour wording. The object describes the white base coat and distinct patches common to the breed."
    },

    "physical.heightCm": {
      reliability: "official_standard",
      sources: [
        {
          id: "pmaa-pyrenean-mastiff-standard",
          role: "verified",
          locator: "Size: males minimum 30 inches; females minimum 28 inches"
        },
        {
          id: "uk-kennel-club-pyrenean-mastiff-standard",
          role: "verified",
          locator: "Size: males minimum 77 cm; females minimum 72 cm"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Stored minimums are in centimetres. The cited standard does not define a maximum height."
    },

    "physical.weightKg": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Reliable sex-specific weight ranges were not established for this record."
    },

    "physical.weightKg.male.max": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable sex-specific maximum weight was established."
    },

    "physical.weightKg.female.max": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable sex-specific maximum weight was established."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "petmd-pyrenean-mastiff-health",
          role: "verified",
          locator: "Breed overview: lifespan 8–12 years"
        },
        {
          id: "akc-pyrenean-mastiff-profile",
          role: "conflicting",
          locator: "Breed profile: life expectancy 10–12 years"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Published estimates differ. The wider 8–12-year range is retained to reflect the difference, not as a guarantee for an individual dog."
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pyrenean-mastiff-profile",
          role: "verified",
          locator: "Breed characteristics: drooling"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Qualitative breed-profile rating; individual dogs vary."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "pmaa-pyrenean-mastiff-standard",
          role: "verified",
          locator: "Temperament"
        },
        {
          id: "uk-kennel-club-pyrenean-mastiff-standard",
          role: "verified",
          locator: "Temperament"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Breed-standard tendencies do not guarantee the behaviour of an individual dog."
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "DogLens editorial ratings on a 1–5 scale; not official or scientifically validated temperament measurements."
    },

    care: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pyrenean-mastiff-profile",
          role: "verified",
          locator: "Grooming, training, nutrition and health guidance"
        },
        {
          id: "pmaa-pyrenean-mastiff-health",
          role: "cited",
          locator: "Health and owner guidance"
        },
        {
          id: "petmd-pyrenean-mastiff-health",
          role: "cited",
          locator: "Veterinary-reviewed care guidance"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Includes general care guidance; individual needs vary by age, health and environment."
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Practical editorial estimate, not a formally published breed-specific minimum."
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
          id: "akc-pyrenean-mastiff-profile",
          role: "cited",
          locator: "Nutrition guidance"
        },
        {
          id: "petmd-pyrenean-mastiff-health",
          role: "cited",
          locator: "Veterinary-reviewed breed care"
        }
      ],
      verifiedOn: null,
      note: "General giant-breed feeding guidance; exact amounts should be individualised with veterinary advice."
    },

    "nutrition.feedingFrequency.puppy": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-pyrenean-mastiff-profile",
          role: "cited",
          locator: "Nutrition and growth guidance"
        }
      ],
      verifiedOn: null,
      note: "General puppy feeding guidance; no fixed breed-specific meal schedule is asserted."
    },

    "nutrition.feedingFrequency.adult": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Two measured meals per day is general feeding guidance rather than a breed-specific requirement."
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
          id: "akc-pyrenean-mastiff-profile",
          role: "verified",
          locator: "Health and recommended tests from the national breed club"
        },
        {
          id: "pmaa-pyrenean-mastiff-health",
          role: "verified",
          locator: "Health concerns, hip data and cardiac information"
        },
        {
          id: "petmd-pyrenean-mastiff-health",
          role: "verified",
          locator: "Veterinary-reviewed health conditions"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Conditions are described as risks or reported concerns, not as diagnoses or predictions for every dog."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pyrenean-mastiff-profile",
          role: "verified",
          locator: "Recommended health tests: hip, elbow, cardiac and degenerative myelopathy DNA"
        },
        {
          id: "pmaa-pyrenean-mastiff-health",
          role: "cited",
          locator: "Breed health information"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Screening guidance should be discussed with a veterinarian or responsible breeder."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-pyrenean-mastiff-profile",
          role: "cited",
          locator: "Temperament and care needs"
        },
        {
          id: "uk-kennel-club-pyrenean-mastiff-standard",
          role: "cited",
          locator: "Size and guardian temperament"
        }
      ],
      verifiedOn: null,
      note: "Suitability is editorial guidance based on size, guarding behaviour and care needs, not a guarantee."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-pyrenean-mastiff-nomenclature",
          role: "verified",
          locator: "Official breed name and origin"
        },
        {
          id: "pmaa-pyrenean-mastiff-standard",
          role: "verified",
          locator: "History, coat and size"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Historical and standard details are paraphrased."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-pyrenean-mastiff-nomenclature",
          role: "verified",
          locator: "Breed identity and origin"
        },
        {
          id: "pmaa-pyrenean-mastiff-standard",
          role: "verified",
          locator: "Size, coat, colour and temperament"
        },
        {
          id: "akc-pyrenean-mastiff-profile",
          role: "verified",
          locator: "Health, grooming, nutrition and care"
        },
        {
          id: "petmd-pyrenean-mastiff-health",
          role: "verified",
          locator: "Lifespan and veterinary-reviewed health guidance"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Answers are original summaries; exercise time is explicitly described as an estimate."
    }
  },

  updatedOn: "2026-10-20"
};