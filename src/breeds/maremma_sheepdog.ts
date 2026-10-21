import type { Breed } from "../schema/breed.types";

export const maremma_sheepdog: Breed = {
  slug: "maremma-sheepdog",
  name: "Maremma Sheepdog",
  scientificName: "Canis lupus familiaris",
  alternateNames: [
    "Abruzzes and Maremma Shepherd Dog",
    "Cane da Pastore Abruzzese Maremmano",
    "Cane da Pastore Maremmano-Abruzzese",
    "Maremmano-Abruzzese"
  ],
  group:
    "FCI Group 1 — Sheepdogs and Cattledogs (except Swiss Cattledogs); Section 1 — Sheepdogs; no working trial.",
  origin: {
    country: "Italy",
    region:
      "Abruzzo, the Tuscan Maremma and Latium (Lazio); the modern breed developed from regional flock-guardian populations."
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Maremma_Sheepdog.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:The_Maremma_Sheepdog.jpg",
      title: "The Maremma Sheepdog.jpg",
      description: "Adult male Maremma Sheepdog standing on grass.",
      creator: "ACiiDMaN",
      uploader: "ACiiDMaN",
      capturedOn: "2015-10-27",
      uploadedOn: "2015-10-27",
      width: 960,
      height: 720,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "ACiiDMaN, “The Maremma Sheepdog.jpg”, Wikimedia Commons (https://commons.wikimedia.org/wiki/File:The_Maremma_Sheepdog.jpg), licensed under CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). No changes made.",
      restrictions: null,
      metadataCheckedOn: "2026-10-20"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Maremma_Sheepdog_male.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Maremma_Sheepdog_male.jpg",
      title: "Maremma Sheepdog male.jpg",
      description: "Adult male Maremma Sheepdog with a white coat.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2016-11-13",
      uploadedOn: "2016-11-14",
      width: 600,
      height: 581,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Canarian, “Maremma Sheepdog male.jpg”, Wikimedia Commons (https://commons.wikimedia.org/wiki/File:Maremma_Sheepdog_male.jpg), licensed under CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). No changes made.",
      restrictions: null,
      metadataCheckedOn: "2026-10-20"
    }
  ],
  overview: {
    summary:
      "A large Italian livestock guardian known for its white coat, independent judgement and strong commitment to protecting its flock and territory.",
    description:
      "The Maremma Sheepdog is a substantial, sturdy working dog developed to stay with sheep and protect them from predators and other threats. It combines a dense, weather-resistant coat with an alert nature and the ability to make decisions without waiting for constant direction from a handler. With familiar people, a well-socialised Maremma can be deeply devoted, but it may assess unfamiliar visitors cautiously. Its size, guarding instincts, independence and vocal responses make secure space, careful management and early training especially important. It is generally best suited to an experienced owner who understands livestock guardian behaviour and can provide a meaningful role rather than expecting automatic obedience or a typical urban companion.",
    history:
      "The Maremma Sheepdog developed in Italy from traditional flock-guarding dogs associated with the Abruzzo region, the Tuscan Maremma and Latium. Seasonal livestock movement helped bring regional populations into contact, encouraging the development of a more unified breed type from the nineteenth century onward. Its long-standing working role shaped an independent guardian that could remain with sheep and respond to threats without continuous direction from people.",
    originalPurpose:
      "Protecting sheep flocks and guarding farms and rural property.",
    currentRoles: [
      "Livestock guardian for sheep and other farm animals",
      "Flock and farm-property protector",
      "Rural working guardian where its temperament, environment and training are appropriate"
    ]
  },
  physical: {
    sizeCategory: "Large",
    heightCm: {
      male: {
        min: 67,
        max: 73.5
      },
      female: {
        min: 62,
        max: 70
      }
    },
    weightKg: {
      male: {
        min: 40,
        max: 52
      },
      female: {
        min: 35,
        max: 45
      }
    },
    lifespanYears: {
      min: 10,
      max: 13
    },
    coatType:
      "Dense coat with long, rather coarse outer hair and an abundant seasonal undercoat.",
    coatLength:
      "Long over the body, with a substantial neck collar and shorter hair around the muzzle, head, ears and front of the limbs.",
    coatColors: [
      "Solid white",
      "Ivory shades within the limits accepted by the breed standard",
      "Pale orange shades within the limits accepted by the breed standard",
      "Lemon shades within the limits accepted by the breed standard"
    ],
    sheddingLevel:
      "Moderate to high, with noticeable seasonal shedding as the dense undercoat changes.",
    droolingLevel:
      "Some drooling is reported; the amount varies from dog to dog.",
    distinctiveFeatures: [
      "Large, sturdy and slightly rectangular body",
      "Long white coat with a dense seasonal undercoat",
      "Broad, conical head with a calm but attentive expression",
      "Small, high-set, triangular ears that hang naturally",
      "Dark-pigmented nose and eyelid rims",
      "Thick neck with a noticeable coat collar, particularly in males",
      "Low-set, well-furnished tail that hangs at rest and rises closer to the topline during activity",
      "Build and coat suited to sustained outdoor flock-guarding work"
    ]
  },
  temperament: {
    traits: [
      "Perceptive and alert",
      "Independent in decision-making",
      "Devoted to familiar people",
      "Protective of its flock and property",
      "Naturally cautious or suspicious toward unfamiliar people",
      "Capable of working at a distance from a handler",
      "Intelligent but not always inclined to obey repetitive commands",
      "Benefits from structured work, early socialisation and consistent handling"
    ],
    scores: {
      affection: 4,
      withChildren: 2,
      withDogs: 2,
      withStrangers: 1,
      protectiveness: 5,
      independence: 5,
      trainability: 3,
      barking: 4,
      energy: 3
    }
  },
  care: {
    exercise: {
      level:
        "Moderate to high. A Maremma needs daily movement and mental work; livestock-guardian duties can involve substantially more movement than a companion-only routine.",
      minutesPerDay: {
        min: 60,
        max: 120
      },
      activities: [
        "Daily walks adjusted to the individual dog's age, health and working responsibilities",
        "Supervised movement and exploration in a securely fenced area",
        "Purposeful livestock-guardian work when the dog is appropriately trained and managed",
        "Short reward-based training sessions for recall, leash manners and visitor routines",
        "Scent games and calm problem-solving activities for mental enrichment"
      ]
    },
    grooming: {
      level:
        "Moderate to high, especially during seasonal shedding or when the dog spends much of its time indoors.",
      brushing:
        "Brush and comb thoroughly several times a week, working through the dense coat rather than only grooming the surface. Increase coat checks during seasonal shedding.",
      bathing:
        "Bathe when needed with a dog-safe shampoo, rinse thoroughly and dry the dense coat well. Bathing frequency should be based on the dog's cleanliness and skin condition.",
      notes: [
        "Inspect the coat regularly for tangles, trapped debris and areas that may conceal irritation.",
        "Give extra attention to the dense undercoat during seasonal shedding.",
        "Check paw pads and the hair between the toes; trim only when needed and safely.",
        "Inspect the skin when brushing, especially if the coat stays damp or begins to mat.",
        "Check ears, eyes and nails as part of the regular grooming routine.",
        "Avoid shaving the double coat unless a veterinarian recommends clipping for a medical reason."
      ]
    },
    training: {
      difficulty:
        "Moderate to high for owners expecting automatic obedience. The breed is intelligent but was developed to make independent decisions while guarding.",
      tips: [
        "Begin reward-based training and safe exposure to everyday situations during puppyhood.",
        "Teach reliable leash manners, recall and calm responses to household routines before the dog reaches full size.",
        "Use short, purposeful sessions and reward the behaviours you want to maintain.",
        "Avoid harsh or intimidating corrections; these can damage trust and complicate the management of a protective dog.",
        "Introduce visitors gradually and use secure separation when a situation cannot be managed safely.",
        "Provide an appropriate role and ongoing mental enrichment rather than relying on physical exercise alone."
      ],
      socialization:
        "Start early and continue throughout adulthood. Introduce different people, settings, sounds and animals in controlled, positive situations. Because the breed may independently assess unfamiliar people, teach calm, manageable routines instead of forcing close contact with visitors. Socialisation does not remove the need for secure containment or supervision."
    },
    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,
      climates: [
        "Cool and temperate climates",
        "Warm climates when the dog has shade, fresh water, a cool resting area and exercise during cooler hours"
      ],
      aloneTimeTolerance: null
    }
  },
  nutrition: {
    dietType:
      "A complete and balanced diet appropriate for a large-breed dog, its life stage, body condition, activity and veterinary needs.",
    feedingFrequency: {
      puppy: null,
      adult:
        "Divide the daily ration into smaller meals rather than offering one very large meal. The exact schedule and portions should be discussed with a veterinarian, particularly because bloat is a reported concern.",
      senior: null
    },
    guidelines:
      "Choose a complete and balanced food that meets the dog's life-stage requirements. Measure portions, monitor body condition and adjust intake according to growth, activity and veterinary advice. Keep fresh water available at all times, and make food transitions gradually rather than switching diets abruptly.",
    considerations: [
      "Maintain a lean body condition to reduce unnecessary load on joints.",
      "Discuss large-breed growth nutrition with a veterinarian when feeding a puppy.",
      "Do not add calcium, vitamins or other supplements unless a veterinarian recommends them.",
      "Because gastric dilatation-volvulus (bloat) is a reported concern, ask a veterinarian about feeding routines, individual risk factors and emergency warning signs.",
      "A feeding routine may need to change with age, workload, body condition or medical needs.",
      "Seek veterinary advice for persistent digestive problems or a sudden change in appetite."
    ],
    note:
      "A reliable breed-specific meal count was not established for puppies or senior dogs in the reviewed references. The adult feeding guidance is general risk-management advice, not a guarantee against bloat."
  },
  health: {
    overview:
      "Health planning for a Maremma should account for its large size, active working background and the conditions reported in breed-care guidance. Hip dysplasia, elbow dysplasia and gastric dilatation-volvulus are concerns to discuss with a veterinarian. The reviewed sources do not establish a single population-wide prevalence for these conditions, and a breed-level risk does not mean that an individual dog will develop them.",
    commonConditions: [
      "Hip dysplasia — a developmental disorder of the hip joint that can affect comfort and mobility.",
      "Elbow dysplasia — a group of developmental elbow-joint problems that can contribute to lameness.",
      "Gastric dilatation-volvulus (GDV or bloat) — a life-threatening emergency involving stomach distension and possible twisting."
    ],
    preventiveCare: [
      "Schedule regular veterinary examinations and follow an age-appropriate vaccination and parasite-prevention plan.",
      "Keep the dog at a healthy body condition and discuss any persistent lameness or reduced mobility promptly.",
      "Discuss bloat risk and emergency warning signs with the veterinarian; suspected GDV requires urgent veterinary care.",
      "Use responsible breeding practices and ask to see the parents' health-screening records before choosing a puppy.",
      "Monitor appetite, weight, mobility, skin condition and behaviour so changes can be identified early."
    ],
    recommendedScreenings: [
      "Hip-dysplasia evaluation for breeding dogs, using an accepted programme such as OFA certification or PennHIP assessment.",
      "Discuss elbow evaluation and other appropriate orthopaedic checks with the veterinarian.",
      "Ask a veterinarian to evaluate possible inherited or conformation-related concerns when relevant, including eyelid abnormalities, bite misalignment, umbilical hernia or cryptorchidism.",
      "Confirm the appropriate tests and timing for the individual dog with a veterinarian and a responsible breeder."
    ],
    dentalCare:
      "Brush the teeth regularly, ideally daily, using dog-specific toothpaste and a suitable toothbrush. Arrange veterinary oral examinations and professional cleaning when recommended.",
    earCare:
      "Check the ears regularly for redness, odour, discharge or repeated head-shaking. Clean only when necessary with a veterinarian-approved product, and seek veterinary advice if irritation persists.",
    skinCare:
      "Regularly comb through the coat and inspect the skin beneath it, paying attention to tangles, damp areas, trapped debris and hot spots. During heavy shedding, increase grooming so loose undercoat does not conceal skin problems."
  },
  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: null,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,
    idealFor: [
      "Experienced owners who understand livestock-guardian behaviour",
      "Rural households with adequate, securely managed land",
      "Farms and livestock keepers who can provide appropriate guardian work",
      "Owners who can invest in early socialisation, consistent training and visitor management"
    ],
    notIdealFor: [
      "Apartment living or cramped urban environments",
      "Owners who require automatic obedience or a highly sociable dog with every visitor",
      "Households unable to provide secure fencing, daily activity and meaningful engagement",
      "Homes with frequent unsupervised visitors where the dog's protective responses cannot be managed safely",
      "People looking for a low-maintenance first dog without experience managing large guardian breeds"
    ]
  },
  funFacts: [
    "The breed's modern name brings together the names of two Italian regions associated with its development: Abruzzo and the Maremma.",
    "Its traditional role is to remain with a flock and respond to threats, rather than wait for continuous commands from a handler.",
    "The breed's characteristic white coat is closely associated with its traditional work among sheep.",
    "Seasonal livestock movement helped bring regional flock-guardian populations into contact during the nineteenth century."
  ],
  faq: [
    {
      question: "Is the Maremma Sheepdog a good apartment dog?",
      answer:
        "Usually not. Its size, independent guardian instincts, need for purposeful activity and possible response to visitors make it better suited to a rural setting with secure space."
    },
    {
      question: "How much exercise does a Maremma Sheepdog need?",
      answer:
        "A practical starting point is around 60–120 minutes of daily walking or equivalent activity, adjusted for the dog's age, health and workload. A working livestock guardian may move much more throughout the day."
    },
    {
      question: "What colour is a Maremma Sheepdog?",
      answer:
        "The usual and preferred colour is solid white. Limited ivory, pale orange or lemon shades may be accepted within the breed standard's stated limits."
    },
    {
      question: "Does a Maremma Sheepdog shed?",
      answer:
        "Yes. It has a dense coat and undercoat that requires regular brushing, with more attention during seasonal shedding."
    },
    {
      question: "What health concerns should owners know about?",
      answer:
        "Hip dysplasia, elbow dysplasia and gastric dilatation-volvulus (bloat) are reported concerns. These are not predictions for every dog; discuss screening, prevention and emergency signs with your veterinarian."
    },
    {
      question: "Is a Maremma Sheepdog suitable for a family with children?",
      answer:
        "It depends on the individual dog, the household and the owner's experience. The breed can be devoted to familiar people, but its size and protective response to unfamiliar visitors require early socialisation, clear routines and adult supervision around children."
    }
  ],
  references: [
    "fci-maremma-sheepdog-official-standard",
    "fci-maremma-sheepdog-nomenclature",
    "maremma-sheepdog-club-of-america-faq",
    "maremma-sheepdog-club-of-america-health-guidelines",
    "purina-uk-maremma-sheepdog",
    "zoetis-petcare-maremma-sheepdog",
    "wikimedia-maremma-sheepdog-acii-dman",
    "wikimedia-maremma-sheepdog-male-canarian",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care"
  ],
  evidence: {
    scientificName: {
      reliability: "unverified",
      sources: [],
      verifiedOn: null,
      note:
        "Conventional species-level name; no breed-specific taxonomic designation was verified."
    },
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-maremma-sheepdog-official-standard",
          role: "verified",
          locator: "Title and breed name"
        },
        {
          id: "fci-maremma-sheepdog-nomenclature",
          role: "cited",
          locator: "English and Italian breed names"
        },
        {
          id: "purina-uk-maremma-sheepdog",
          role: "cited",
          locator: "History and origins"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Alternate names are limited to forms supported by the reviewed breed references."
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-maremma-sheepdog-official-standard",
          role: "verified",
          locator: "FCI classification"
        }
      ],
      verifiedOn: "2026-10-20",
      note: null
    },
    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-maremma-sheepdog-official-standard",
          role: "verified",
          locator: "Origin and brief historical summary"
        }
      ],
      verifiedOn: "2026-10-20",
      note: null
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-maremma-sheepdog-official-standard",
          role: "verified",
          locator: "Utilization, historical summary and temperament"
        },
        {
          id: "maremma-sheepdog-club-of-america-faq",
          role: "cited",
          locator: "Questions on the breed's role and behaviour"
        },
        {
          id: "purina-uk-maremma-sheepdog",
          role: "cited",
          locator: "History, origins and ideal owner"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Descriptions summarise the breed's working background without asserting a population-wide behaviour guarantee."
    },
    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-maremma-sheepdog-official-standard",
          role: "verified",
          locator: "General appearance, coat, colour, size and weight"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Standard-derived physical characteristics. Lifespan, shedding and drooling are overridden with separate evidence below."
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "zoetis-petcare-maremma-sheepdog",
          role: "verified",
          locator: "Breed overview: Life Span"
        },
        {
          id: "purina-uk-maremma-sheepdog",
          role: "cited",
          locator: "Breed summary: Lifespan"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Published estimates vary slightly between sources; 10–13 years is the range used here."
    },
    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "maremma-sheepdog-club-of-america-faq",
          role: "verified",
          locator: "FAQ: Coat"
        },
        {
          id: "purina-uk-maremma-sheepdog",
          role: "cited",
          locator: "Grooming Maremma Sheepdog"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Shedding intensity varies with coat, season and living conditions."
    },
    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "purina-uk-maremma-sheepdog",
          role: "verified",
          locator: "Breed summary: Drooling"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "The profile reports some drooling; the amount can vary between individual dogs."
    },
    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-maremma-sheepdog-official-standard",
          role: "verified",
          locator: "Utilization and behaviour/temperament"
        },
        {
          id: "purina-uk-maremma-sheepdog",
          role: "cited",
          locator: "Personality and ideal owner"
        },
        {
          id: "maremma-sheepdog-club-of-america-faq",
          role: "cited",
          locator: "Questions on flock guarding and familiar people"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Traits describe breed tendencies, not a guarantee about any individual dog."
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "purina-uk-maremma-sheepdog",
          role: "cited",
          locator: "Personality, training and ideal owner"
        },
        {
          id: "maremma-sheepdog-club-of-america-faq",
          role: "cited",
          locator: "Breed behaviour and suitability"
        }
      ],
      verifiedOn: null,
      note:
        "The 1–5 ratings are DogLens editorial estimates based on described working behaviour; they are not standardized temperament-test results."
    },
    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "purina-uk-maremma-sheepdog",
          role: "cited",
          locator: "Exercise, grooming and training"
        }
      ],
      verifiedOn: null,
      note: "Care needs depend on age, health, working role and the dog's living environment."
    },
    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "purina-uk-maremma-sheepdog",
          role: "verified",
          locator: "Breed summary: exercise and activity"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Exercise needs must be adapted to individual health, age and workload."
    },
    "care.exercise.minutesPerDay": {
      reliability: "reliable_source",
      sources: [
        {
          id: "purina-uk-maremma-sheepdog",
          role: "verified",
          locator: "Breed summary: one to two hours of walking a day"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "This is a general walking guideline rather than a measurement of all daily movement for a working guardian."
    },
    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [
        {
          id: "purina-uk-maremma-sheepdog",
          role: "cited",
          locator: "Exercise needs and training guidance"
        }
      ],
      verifiedOn: null,
      note: "Activities are practical suggestions and should be adapted to the individual dog."
    },
    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "purina-uk-maremma-sheepdog",
          role: "verified",
          locator: "Grooming Maremma Sheepdog"
        },
        {
          id: "maremma-sheepdog-club-of-america-faq",
          role: "cited",
          locator: "FAQ: Coat"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Brushing frequency increases when loose undercoat is being shed."
    },
    "care.grooming.bathing": {
      reliability: "general_guidance",
      sources: [
        {
          id: "maremma-sheepdog-club-of-america-faq",
          role: "cited",
          locator: "FAQ: Coat and coat maintenance"
        }
      ],
      verifiedOn: null,
      note: "Bathing advice is general grooming guidance, not a breed-specific medical requirement."
    },
    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "purina-uk-maremma-sheepdog",
          role: "verified",
          locator: "Training Maremma Sheepdogs"
        },
        {
          id: "maremma-sheepdog-club-of-america-faq",
          role: "cited",
          locator: "Questions on breed temperament and ownership"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Training and socialisation recommendations reflect the breed's independent guardian tendencies."
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "purina-uk-maremma-sheepdog",
          role: "cited",
          locator: "Space requirements and ideal owner"
        }
      ],
      verifiedOn: null,
      note: "Editorial suitability assessment based on size, guardian behaviour and space needs; individual circumstances vary."
    },
    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "purina-uk-maremma-sheepdog",
          role: "cited",
          locator: "Space requirements"
        },
        {
          id: "maremma-sheepdog-club-of-america-faq",
          role: "cited",
          locator: "Breed's traditional working role"
        }
      ],
      verifiedOn: null,
      note: "A yard is useful only when secure and paired with activity, social contact and appropriate management."
    },
    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-maremma-sheepdog-official-standard",
          role: "cited",
          locator: "Coat description"
        },
        {
          id: "purina-uk-maremma-sheepdog",
          role: "cited",
          locator: "Coat and living-environment guidance"
        }
      ],
      verifiedOn: null,
      note: "Climate guidance is practical advice; heat tolerance varies with the individual dog and its environment."
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No sufficiently reliable breed-specific alone-time tolerance value was established."
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Nutrition and body-condition guidance"
        }
      ],
      verifiedOn: null,
      note: "Diet guidance should be individualized to age, condition, workload and veterinary needs."
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed breed-specific puppy meal frequency was established in the reviewed references."
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "general_guidance",
      sources: [
        {
          id: "purina-uk-maremma-sheepdog",
          role: "cited",
          locator: "Nutrition and feeding: bloat-risk guidance"
        }
      ],
      verifiedOn: null,
      note: "Smaller divided meals are general risk-management advice and do not guarantee prevention of GDV."
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed breed-specific senior meal frequency was established in the reviewed references."
    },
    health: {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "Preventive oral care"
        }
      ],
      verifiedOn: null,
      note: "Health and prevention guidance does not replace veterinary examination or diagnosis."
    },
    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "purina-uk-maremma-sheepdog",
          role: "verified",
          locator: "Health concerns"
        },
        {
          id: "maremma-sheepdog-club-of-america-health-guidelines",
          role: "cited",
          locator: "Health and genetic considerations"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "The available references identify areas to discuss with a veterinarian but do not establish universal disease prevalence."
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "purina-uk-maremma-sheepdog",
          role: "verified",
          locator: "Health concerns: hip dysplasia, elbow dysplasia and GDV"
        },
        {
          id: "maremma-sheepdog-club-of-america-health-guidelines",
          role: "cited",
          locator: "Hip and elbow screening guidance"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Listed conditions are reported concerns, not a claim that every dog is affected."
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "maremma-sheepdog-club-of-america-health-guidelines",
          role: "cited",
          locator: "Health and genetic considerations"
        },
        {
          id: "purina-uk-maremma-sheepdog",
          role: "cited",
          locator: "Health and nutrition guidance"
        }
      ],
      verifiedOn: null,
      note: "Preventive-care decisions should be made with the dog's veterinarian."
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "maremma-sheepdog-club-of-america-health-guidelines",
          role: "verified",
          locator: "Health and genetic considerations"
        },
        {
          id: "purina-uk-maremma-sheepdog",
          role: "cited",
          locator: "Hip-dysplasia screening scheme"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Screening recommendations chiefly concern breeding decisions; the veterinarian should determine appropriate tests and timing."
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "Pet dental care"
        }
      ],
      verifiedOn: null,
      note: null
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General hygiene advice; seek veterinary care when symptoms persist."
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "purina-uk-maremma-sheepdog",
          role: "cited",
          locator: "Grooming Maremma Sheepdog"
        },
        {
          id: "maremma-sheepdog-club-of-america-faq",
          role: "cited",
          locator: "FAQ: Coat"
        }
      ],
      verifiedOn: null,
      note: "Regular grooming helps owners inspect the skin under the dense coat."
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "purina-uk-maremma-sheepdog",
          role: "cited",
          locator: "Ideal owner and space requirements"
        },
        {
          id: "maremma-sheepdog-club-of-america-faq",
          role: "cited",
          locator: "Family-pet suitability"
        }
      ],
      verifiedOn: null,
      note: "Suitability ratings are editorial guidance; an individual dog's temperament and household management matter."
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A single breed-wide yes/no value would be misleading; safety depends on the individual dog, children and household management."
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-maremma-sheepdog-official-standard",
          role: "verified",
          locator: "Brief historical summary and utilization"
        },
        {
          id: "maremma-sheepdog-club-of-america-faq",
          role: "cited",
          locator: "Breed history and coat"
        }
      ],
      verifiedOn: "2026-10-20",
      note: null
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-maremma-sheepdog-official-standard",
          role: "verified",
          locator: "Coat colour, utilization, height and weight"
        },
        {
          id: "purina-uk-maremma-sheepdog",
          role: "cited",
          locator: "Exercise, health, suitability and lifespan"
        },
        {
          id: "maremma-sheepdog-club-of-america-faq",
          role: "cited",
          locator: "Breed behaviour and working role"
        }
      ],
      verifiedOn: "2026-10-20",
      note: "Answers summarize breed-level guidance and should not be interpreted as guarantees for an individual dog."
    }
  },
  updatedOn: "2026-10-20"
};