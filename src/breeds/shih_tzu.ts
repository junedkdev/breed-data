import type { Breed } from "../schema/breed.types";

export const shih_tzu: Breed = {
  slug: "shih-tzu",
  name: "Shih Tzu",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Chrysanthemum Dog",
    "Lion Dog",
    "Tibetan Lion Dog"
  ],

  group: "Tibetan-origin toy companion dog",

  origin: {
    country: "Tibet (China)",
    region:
      "Tibet and imperial China, with modern breed patronage in Great Britain"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Shih_tzu-Coupe-lion.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Shih_tzu-Coupe-lion.jpg",
      title: "Shih tzu-Coupe-lion.jpg",
      description:
        "An adult Shih Tzu outdoors wearing a tidy short clip.",
      creator: "Pouchkine75",
      uploader: "Pouchkine75",
      capturedOn: "2021-03-26",
      uploadedOn: "2021-03-26",
      width: 651,
      height: 925,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Pouchkine75, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Shih_tzu-Coupe-lion.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/.",
      restrictions:
        "CC BY-SA 4.0 requires attribution and ShareAlike distribution if adapted.",
      metadataCheckedOn: "2026-11-26"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Shih_Tzu_-_Star_of_Buddha.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Shih_Tzu_-_Star_of_Buddha.jpg",
      title: "Shih Tzu - Star of Buddha.jpg",
      description:
        "A close-up portrait of a Shih Tzu showing outward-growing facial hair and a white forehead blaze.",
      creator: "Avesterfelt",
      uploader: "Avesterfelt",
      capturedOn: "2023-05-07",
      uploadedOn: "2024-05-02",
      width: 953,
      height: 1267,
      licenseId: "cc0-1.0",
      attribution:
        "Photo by Avesterfelt, Wikimedia Commons, CC0 1.0 Universal Public Domain Dedication. Source: https://commons.wikimedia.org/wiki/File:Shih_Tzu_-_Star_of_Buddha.jpg. License: https://creativecommons.org/publicdomain/zero/1.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    }
  ],

  overview: {
    summary:
      "A sturdy, cheerful Tibetan-origin toy companion prized for its flowing double coat, outward-blooming chrysanthemum face, proud carriage, and warm, people-loving temperament.",

    description:
      "Compact yet surprisingly solid and heavy-boned for its small frame, the Shih Tzu moves with an upright, confident bearing and a smooth, reaching stride. Its signature long, dense double coat hangs straight or with a slight wave—never curly or woolly—and the hair on the short muzzle grows upward to frame large, dark, expressive eyes. Although bred solely as an indoor companion for centuries, the Shih Tzu is lively, playful, and resilient rather than fragile. Whether kept in a full floor-length coat or a practical short trim, it thrives on close human company and adapts effortlessly to apartment life.",

    history:
      "The Shih Tzu—whose name means 'lion dog'—originated in Tibet, where small, alert monastery dogs were sent as royal gifts to Chinese emperors. Inside the imperial courts of China, palace breeders carefully refined these dogs, likely blending Tibetan lines with Pekingese or Pug ancestry to produce the breed's distinctive short muzzle and flowing coat. Kept closely guarded behind palace walls for centuries as lap warmers and house companions, the breed reached Europe in the 1930s, where British fanciers shaped the modern breed type. Returning service members introduced the Shih Tzu to North America after World War II, and almost all dogs alive today trace back to just 14 foundational animals (seven males and seven females) used to preserve the breed.",

    originalPurpose:
      "Indoor palace companion, lap warmer, and alert household watchdog for Tibetan monasteries and Chinese royalty",

    currentRoles: [
      "Devoted indoor family companion",
      "Therapy and emotional-support partner",
      "Conformation competitor",
      "Casual obedience and agility participant"
    ]
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "cm",
      male: {
        min: null,
        max: 27
      },
      female: {
        min: null,
        max: 27
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 4.5,
        max: 8
      },
      female: {
        min: 4.5,
        max: 8
      }
    },

    lifespanYears: {
      min: 10,
      max: 18
    },

    coatType:
      "Long, dense outer coat (straight or slightly wavy, never curly) with a moderate, non-woolly undercoat; facial hair grows upward over the muzzle into a chrysanthemum pattern",

    coatLength: "Long",

    coatColors: [
      "All solid and parti-color patterns except merle",
      "Gold and white",
      "Black and white",
      "Solid black",
      "Solid gold",
      "Silver and white",
      "Brindle",
      "Liver (with matching liver nose and eye rims)",
      "Blue (with matching slate nose and eye rims)"
    ],

    sheddingLevel:
      "Low; loose hairs stay trapped inside the long coat until combed out rather than scattering heavily",

    droolingLevel:
      "Low; neat, level lips keep drooling minimal",

    distinctiveFeatures: [
      "Solid, sturdy toy build with unexpectedly substantial bone and a broad, deep chest",
      "Broad, round head with an abrupt stop and a short, square, unwrinkled muzzle",
      "Outward-growing facial hair forming a chrysanthemum pattern; head hair should be tied up cleanly so vision stays unobstructed",
      "Large, round, dark eyes set well apart with a warm, trusting look (not overly bulging)",
      "Wide, slightly undershot or level bite with a broad lower jaw",
      "Large, heavily feathered drop ears blending smoothly into the neck hair",
      "Heavily plumed tail set high and carried cheerfully over the back",
      "White forehead blaze and white tail tip prized in parti-colored coats",
      "Proud, buoyant head carriage and smooth, flowing gait"
    ]
  },

  temperament: {
    traits: [
      "Warm, outgoing, and deeply affectionate with family",
      "Playful, cheerful, and content to curl up in a lap",
      "Friendly and trusting toward most unfamiliar visitors",
      "Alert enough to announce arrivals without guarding aggression",
      "Generally amiable with other dogs and household pets",
      "Independent and somewhat stubborn during training, responding best to upbeat rewards",
      "Sensitive to harsh scolding; flourishes with gentle, patient guidance"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: 2,
      independence: 2,
      trainability: 3,
      barking: 3,
      energy: 3
    }
  },

  care: {
    exercise: {
      level:
        "Low to moderate; short daily strolls and indoor play sessions comfortably satisfy this indoor companion",

      minutesPerDay: {
        min: 30,
        max: 45
      },

      activities: [
        "Short, leisurely neighborhood walks during cool parts of the day",
        "Gentle indoor fetch, tug, and puzzle toys",
        "Playful trick training and basic obedience",
        "Supervised exploring in a safe, shaded yard (avoid deep water—they are poor swimmers)"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Comb and brush daily down to the skin with a pin brush and metal comb if keeping a full coat, or schedule a short 'puppy cut' every four to six weeks for easier upkeep.",

      bathing:
        "Bathe every three to four weeks with a gentle dog shampoo and conditioner, drying completely to prevent tangles.",

      notes: [
        "Tie up long head hair cleanly—or trim it neatly—so hair never rubs the eyes or blocks vision.",
        "Wipe the corners of the eyes and muzzle hair daily with a damp cloth to keep tear staining and dampness in check.",
        "Check the heavily coated drop ears weekly for wax, moisture, or odor.",
        "Trim nails every two to three weeks and brush teeth daily to slow tartar buildup."
      ]
    },

    training: {
      difficulty:
        "Moderate; clever and charming, yet famously stubborn about housetraining unless routines stay consistent",

      tips: [
        "Keep lessons short, upbeat, and treat-motivated to hold interest.",
        "Use crate training, frequent outdoor trips, and close supervision to make housetraining stick.",
        "Avoid harsh voices or scolding, which quickly make this sensitive companion shut down.",
        "Use a soft body harness instead of a neck collar to protect the windpipe and eyes."
      ],

      socialization:
        "Introduce puppies gently to varied people, polite children, vaccinated dogs, and grooming handling early so they grow into confident, easygoing adults."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Comfortable in temperate indoor environments",
        "Very sensitive to heat and humidity because of its short muzzle and dense coat; needs air conditioning and limited summer outdoor exertion",
        "Handles cool walks reasonably well in a longer coat, though a light sweater helps in freezing weather"
      ],

      aloneTimeTolerance:
        "Low; bred strictly for human companionship and prone to distress if left alone for long workdays."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced small- or toy-breed dog food portioned carefully to keep weight lean",

    feedingFrequency: {
      puppy:
        "Three to four small measured meals daily until six months of age to guard against low blood sugar.",
      adult:
        "Two measured meals per day for steady digestion and weight control.",
      senior:
        "Two portion-controlled meals daily adjusted for lower calorie burn."
    },

    guidelines:
      "Measure every meal accurately because even a small weight gain adds extra load to the short legs, long back, and airways. Offer food in a shallow dish that suits the flat muzzle, and keep fresh water available at all times.",

    considerations: [
      "Keep weight trim to reduce breathing strain and spinal stress.",
      "Count treats within the daily calorie allowance.",
      "Keep cool water handy in warm weather, as short-muzzled dogs cool themselves less efficiently.",
      "Use a clean drip-style bottle or narrow bowl if needed to keep beard hair dry."
    ],

    note:
      "Consult a veterinarian for exact daily calories tailored to age, activity, and body condition."
  },

  health: {
    overview:
      "The Shih Tzu is a notably long-lived companion with a typical life expectancy of 10 to 18 years. Because of its short muzzle, large eyes, and short-legged frame, key health priorities include eye protection and specialist eye screening, patellar luxation checks, heat and airway awareness (BOAS), spinal care, and diligent daily dental hygiene. Juvenile renal dysplasia, urinary stones, and umbilical hernias are also documented in the breed.",

    commonConditions: [
      "Ocular disorders — corneal ulcers, dry eye (keratoconjunctivitis sicca), cataracts, progressive retinal atrophy (PRA), retinal detachment, and inward-growing eyelashes (distichiasis), monitored through specialist eye exams",
      "Patellar luxation — intermittent slipping of the kneecap evaluated through routine veterinary orthopedic checks",
      "Brachycephalic airway narrowing (BOAS) and heat intolerance — shortened airways and narrow nostrils in some dogs can cause noisy breathing and rapid overheating in warm or humid weather",
      "Periodontal disease — overcrowded teeth in the short jaw promote rapid tartar buildup and gum inflammation without daily brushing",
      "Intervertebral disc disease (IVDD) — spinal disc strain associated with a relatively long back and short legs",
      "Hip dysplasia — monitored by conscientious breeders alongside patellar evaluations",
      "Juvenile renal dysplasia (JRD), urinary stones, and umbilical hernias — kidney, bladder, and abdominal-wall conditions reported in the breed"
    ],

    preventiveCare: [
      "Confirm that breeding parents have documented specialist eye exams and patellar luxation clearances (plus hip checks where performed).",
      "Protect against overheating by limiting warm-weather walks and keeping the dog indoors with air conditioning in summer.",
      "Walk on a body harness rather than a neck collar to avoid throat and eye pressure.",
      "Keep facial hair tied up or trimmed away from the eyes and avoid tall brush or rough play that could scratch corneas.",
      "Brush teeth daily and schedule routine veterinary dental cleanings."
    ],

    recommendedScreenings: [
      "Annual eye examination by a veterinary ophthalmologist",
      "Clinical patellar luxation orthopedic evaluation",
      "Hip dysplasia evaluation and routine veterinary kidney/urinary monitoring"
    ],

    dentalCare:
      "Brush teeth every day with canine enzymatic toothpaste. Because the short, broad jaw crowds teeth closely together, regular professional veterinary dental cleanings are important to prevent gum disease and early tooth loss.",

    earCare:
      "Inspect the heavily feathered drop ears every week for wax, dampness, or yeast odor, and clean gently with a veterinarian-approved solution.",

    skinCare:
      "Brush down to the skin daily in a full coat to prevent tight mats and trapped moisture, and wipe the eye corners and muzzle folds daily."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: false,
    apartmentLiving: true,

    idealFor: [
      "First-time owners, seniors, and families wanting a cheerful, affectionate lap companion",
      "Apartment dwellers looking for a small, adaptable indoor dog with modest exercise needs",
      "Households where someone is around most of the day",
      "Owners willing to commit to daily brushing or regular professional grooming"
    ],

    notIdealFor: [
      "Runners, hikers, or anyone seeking a high-stamina outdoor sports partner",
      "Un-air-conditioned homes in hot, humid climates",
      "Households where the dog would be left alone for long workdays",
      "Families with very rough toddlers who might accidentally drop a small dog"
    ]
  },

  funFacts: [
    "The Shih Tzu's name means 'lion dog' in Mandarin, echoing the sacred lion guardians of Buddhist tradition.",
    "Because hair on the short muzzle fans outward in every direction, the breed earned the nickname 'Chrysanthemum Dog.'",
    "Nearly every Shih Tzu alive today descends from just 14 foundational dogs—seven males and seven females—used to rebuild the breed in the twentieth century.",
    "A small white forehead marking sometimes seen on parti-colored Shih Tzu is affectionately called the 'Star of Buddha.'",
    "Despite a plush, regal coat, Shih Tzu are poor swimmers and much prefer staying dry on a cool sofa than splashing in deep water."
  ],

  faq: [
    {
      question: "How big does a Shih Tzu get?",
      answer:
        "Adult Shih Tzu stand up to 27 cm at the shoulder and weigh 4.5 to 8 kg (with an ideal weight of 4.5 to 7.5 kg), feeling surprisingly sturdy and solid for a small toy dog."
    },
    {
      question: "How long does a Shih Tzu live?",
      answer:
        "With lean weight management, daily dental care, and regular veterinary visits, Shih Tzu commonly live 10 to 18 years."
    },
    {
      question: "Do Shih Tzu shed much, and how much grooming do they need?",
      answer:
        "They shed very little because loose hairs stay caught in the coat. A full floor-length coat needs daily brushing down to the skin, so many pet owners opt for a tidy short trim every four to six weeks."
    },
    {
      question: "Are Shih Tzu good apartment dogs?",
      answer:
        "Yes. Their small size, calm indoor habits, and modest 30-to-45-minute daily exercise needs make them standout apartment companions."
    },
    {
      question: "Can Shih Tzu tolerate hot weather or swimming?",
      answer:
        "No. Their short muzzles and dense coats make them prone to overheating in warm, humid weather, and they are poor swimmers who should be supervised closely around pools and deep water."
    },
    {
      question: "What are the main health concerns and screenings for a Shih Tzu?",
      answer:
        "Key concerns include eye injuries and ocular disease, patellar luxation, heat and airway sensitivity, dental overcrowding, spinal strain, and occasional kidney issues. Specialist eye exams and patellar luxation checks are the core pre-breeding screenings."
    }
  ],

  references: [
    "fci-shih-tzu-official-standard",
    "fci-shih-tzu-nomenclature",
    "akc-shih-tzu-breed-standard",
    "akc-shih-tzu-breed-profile",
    "astc-shih-tzu-health",
    "ofa-shih-tzu-chic-requirements",
    "charlie-pet-health-shih-tzu",
    "natureserve-canis-lupus-familiaris",
    "wikimedia-shih-tzu-coupe-lion",
    "wikimedia-shih-tzu-star-of-buddha",
    "the-dog-api"
  ],

  evidence: {
    scientificName: {
      reliability: "reliable_source",
      sources: [
        {
          id: "natureserve-canis-lupus-familiaris",
          role: "verified",
          locator: "Species taxonomy record: Canis lupus familiaris"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Domestic dog subspecies taxonomy."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shih-tzu-official-standard",
          role: "verified",
          locator: "Standard heading: SHIH TZU"
        },
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "Chrysanthemum Dog, Lion Dog"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names: Chrysanthemum Dog, Lion Dog"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shih-tzu-nomenclature",
          role: "verified",
          locator: "Group 9 Companion and Toy Dogs, Section 5 Tibetan breeds, without working trial"
        },
        {
          id: "akc-shih-tzu-breed-standard",
          role: "verified",
          locator: "Toy Group"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group: Toy"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "User-facing group text avoids registry group and section numbers."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shih-tzu-nomenclature",
          role: "verified",
          locator: "Country of origin: Tibet (China); Country of patronage: Great Britain"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: Tibet/China"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shih-tzu-official-standard",
          role: "verified",
          locator: "General appearance, coat, gait, and temperament (2026-10-06 revision)"
        },
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "About the breed and history (Tibetan/imperial China origins, 14 foundational dogs)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "All user-facing overview prose is newly written in original wording."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shih-tzu-official-standard",
          role: "verified",
          locator: "Coat (long, dense, not curly, moderate non-woolly undercoat, hair not affecting vision/movement), colour (all colours permissible except merle, which is unacceptable), height, and weight (2026-10-06 revision)"
        },
        {
          id: "akc-shih-tzu-breed-standard",
          role: "verified",
          locator: "Head, bite, coat, and proportions"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "GET /breeds/{id}/colours"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "FCI Standard No. 208 (2026-10-06) explicitly states all colours are permissible except merle, which is unacceptable; merle from The Dog API is excluded."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shih-tzu-official-standard",
          role: "verified",
          locator: "Size and Weight: Height at the withers — Not more than 27 cm"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric: 23–27 cm"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Exact FCI Standard No. 208 upper bound in cm (max 27 cm, no minimum fixed; min set to null instead of invented 20 cm). The Dog API lists 23–27 cm."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shih-tzu-official-standard",
          role: "verified",
          locator: "Weight: 4.5 to 8 kg (ideal weight 4.5–7.5 kg)"
        },
        {
          id: "akc-shih-tzu-breed-profile",
          role: "cited",
          locator: "Weight: 9–16 lb"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.weight.metric: 4–7 kg"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Exact FCI Standard No. 208 weight range in kg (4.5–8 kg; ideal 4.5–7.5 kg). The Dog API lists 4–7 kg."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 10–18 years"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span: 10–18 years"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Both AKC profile and The Dog API report 10–18 years."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "Low shedding coat profile"
        },
        {
          id: "fci-shih-tzu-official-standard",
          role: "verified",
          locator: "Long, dense outer coat with moderate undercoat"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shih-tzu-official-standard",
          role: "verified",
          locator: "Level lips"
        },
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "Low drooling level"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shih-tzu-official-standard",
          role: "verified",
          locator: "Behaviour/Temperament: intelligent, active, alert, friendly, independent"
        },
        {
          id: "akc-shih-tzu-breed-standard",
          role: "verified",
          locator: "Temperament: outgoing, happy, affectionate, friendly and trusting towards all"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "cited",
          locator: "Breed trait ratings"
        }
      ],
      verifiedOn: null,
      note: "Editorial 1–5 scores reflecting high affection, friendliness, and moderate trainability."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "cited",
          locator: "Heat intolerance, poor swimming ability, grooming, and training guidance"
        },
        {
          id: "charlie-pet-health-shih-tzu",
          role: "cited",
          locator: "BOAS heat precautions and eye protection"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.exercise.level": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shih-tzu-official-standard",
          role: "verified",
          locator: "Utilization: Companion dog"
        },
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "Modest indoor companion exercise needs"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "cited",
          locator: "Short daily walks and indoor play"
        }
      ],
      verifiedOn: null,
      note: "Estimated 30–45 minutes of daily light activity."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "High apartment adaptability"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "Supervised shaded yard activity"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "Do not tolerate heat well because of heavy coats and short faces"
        },
        {
          id: "charlie-pet-health-shih-tzu",
          role: "verified",
          locator: "Warm-weather brachycephalic breathing precautions"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "cited",
          locator: "Companion-focused household dog"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "cited",
          locator: "Toy-breed diet and weight control"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "Health: hip dysplasia, patellar luxation, cataracts, PRA, retinal detachment, corneal dryness/inflammation, heat intolerance"
        },
        {
          id: "astc-shih-tzu-health",
          role: "verified",
          locator: "ASTC CHIC participation (August 2021): eye and patella screening"
        },
        {
          id: "ofa-shih-tzu-chic-requirements",
          role: "verified",
          locator: "OFA CHIC Shih Tzu panel (breed=SH)"
        },
        {
          id: "charlie-pet-health-shih-tzu",
          role: "verified",
          locator: "BOAS, corneal ulcers, Juvenile Renal Dysplasia, urinary stones"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "Hip dysplasia, patellar luxation, cataracts, PRA, retinal detachment, corneal exposure/dryness"
        },
        {
          id: "charlie-pet-health-shih-tzu",
          role: "verified",
          locator: "BOAS, JRD, urinary stones, corneal ulcers"
        },
        {
          id: "astc-shih-tzu-health",
          role: "verified",
          locator: "Ocular disorders, patellas, dental disease, umbilical hernias"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "cited",
          locator: "Heat avoidance, eye protection, harness use, dental hygiene"
        },
        {
          id: "charlie-pet-health-shih-tzu",
          role: "cited",
          locator: "Routine eye, airway, and kidney monitoring"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-shih-tzu-chic-requirements",
          role: "verified",
          locator: "CHIC requirements: Eye (CAER) and Patellar Luxation"
        },
        {
          id: "astc-shih-tzu-health",
          role: "verified",
          locator: "ASTC CHIC certification program (August 2021)"
        },
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "Responsible breeders screen for hip dysplasia, patellar luxation, and eye anomalies"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-shih-tzu-official-standard",
          role: "cited",
          locator: "Wide, slightly undershot or level bite"
        },
        {
          id: "akc-shih-tzu-breed-profile",
          role: "cited",
          locator: "Daily dental care for toy-breed overcrowding"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-shih-tzu-official-standard",
          role: "cited",
          locator: "Large, heavily coated drop ears"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "cited",
          locator: "Daily brushing and facial-fold hygiene"
        }
      ],
      verifiedOn: null,
      note: null
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "cited",
          locator: "Apartment adaptability, grooming, and heat sensitivity"
        }
      ],
      verifiedOn: null,
      note: "Editorial suitability ratings based on indoor companion traits, grooming needs, and heat sensitivity."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "Lion Dog / Chrysanthemum Dog nicknames, 14 foundational dogs, poor swimmers"
        },
        {
          id: "fci-shih-tzu-official-standard",
          role: "verified",
          locator: "White blaze on forehead desirable in parti-colours"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-shih-tzu-official-standard",
          role: "verified",
          locator: "Height (not more than 27 cm), weight (4.5–8 kg; ideal 4.5–7.5 kg), coat"
        },
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "Lifespan (10–18 years), heat intolerance, poor swimming, apartment living"
        },
        {
          id: "ofa-shih-tzu-chic-requirements",
          role: "verified",
          locator: "Eye and patellar luxation screenings"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "All FAQ entries are written in original prose without source or registry names."
    }
  },

  updatedOn: "2026-11-26"
};
