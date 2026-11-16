import type { Breed } from "../schema/breed.types";

export const pekingese: Breed = {
  slug: "pekingese",
  name: "Pekingese",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Peke",
    "Lion Dog",
    "Peking Lion Dog",
    "Pelham",
    "Chinese Spaniel"
  ],

  group:
    "Companion and Toy Dogs; Section 8 — Japan Chin and Pekingese (without working trial; also classified in the Toy and Companion Dog groups)",

  origin: {
    country: "China",
    region:
      "Beijing (Peking), China (with subsequent historical patronage and standard development in Great Britain)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pekingese002.JPG",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Pekingese002.JPG",
      title: "Pekingese002.JPG",
      description:
        "An adult Pekingese dog standing outdoors, showcasing its long, straight double coat and flat facial profile.",
      creator: "Hugo.arg",
      uploader: "Hugo.arg",
      capturedOn: "2009-01-01",
      uploadedOn: "2009-01-05",
      width: 1943,
      height: 1547,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Hugo.arg, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Pekingese002.JPG. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-16"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bailey_Pekingese.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Bailey_Pekingese.jpg",
      title: "Bailey Pekingese.jpg",
      description:
        "A close-up view of a fawn Pekingese, highlighting its distinctive lion-like mane, dark facial mask, and large round eyes.",
      creator: "Dirk",
      uploader: "Flickr upload bot",
      capturedOn: "2007-11-22",
      uploadedOn: "2008-10-21",
      width: 1280,
      height: 1202,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Dirk, Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:Bailey_Pekingese.jpg. License: https://creativecommons.org/licenses/by/2.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-16"
    }
  ],

  overview: {
    summary:
      "A compact, remarkably heavy-boned, and regal toy dog of Chinese origin, celebrated for its flat facial profile, luxurious lion-like mane, and undeniably aristocratic, rolling gait.",

    description:
      "The Pekingese is an ancient, surprisingly heavy, and thick-set toy dog characterized by its lion-like appearance and unmistakable flat (brachycephalic) facial profile. Despite its small size, it possesses a heavily boned, muscular frame that is distinctly wider and heavier at the front than the rear, contributing to its signature unhurried, rolling gait. The head is massive and broad, featuring a completely flat skull, a deep stop, and a dark, wrinkled muzzle set flush with the face. Its crowning glory is a profuse, straight, and moderately long double coat that forms a distinct mane around the neck and shoulders. Deeply affectionate and exceptionally loyal to its immediate family, the breed carries itself with an independent, dignified, and sometimes stubborn attitude, fully expecting to be treated with the respect historically afforded to sacred royal companions.",

    history:
      "Revered as a sacred companion to Chinese royalty, the Pekingese boasts an ancient lineage dating back well over a thousand years. Mythological folklore holds that the breed was created when a lion fell in love with a marmoset monkey, resulting in a creature with the fearless courage of a lion and the diminutive size of a monkey. For centuries, these dogs were fiercely guarded within the imperial palaces of Beijing (Peking) by eunuchs, and theft of one was a crime punishable by death. They were strictly bred to resemble the mythical Foo Dogs (guardian lions) of Chinese Buddhism. The breed remained entirely isolated from the Western world until 1860, during the Second Opium War, when British and French troops stormed the Old Summer Palace and discovered five surviving Pekingese guarding the remains of an emperor's aunt. These five dogs were brought back to England and presented to Queen Victoria and other aristocrats, forming the foundation of the modern breed. The dogs quickly gained international popularity, and their royal, independent disposition remains untouched today.",

    originalPurpose:
      "Sacred royal companion, lap dog, and alarm watchdog exclusively for the imperial families of the Chinese court.",

    currentRoles: [
      "Devoted household companion and lap dog",
      "Prestigious conformation show competitor"
    ]
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "in",
      male: {
        min: 6,
        max: 9
      },
      female: {
        min: 6,
        max: 9
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 7,
        max: 14
      },
      female: {
        min: 7,
        max: 14
      }
    },

    lifespanYears: {
      min: 12,
      max: 14
    },

    coatType:
      "Long, straight, and moderately harsh double coat with a thick, soft undercoat. It features a profuse mane around the neck and shoulders, and heavy feathering on the ears, legs, and tail.",

    coatLength: "Long",

    coatColors: [
      "All colors and markings are permissible and of equal merit, except for albino or liver",
      "Fawn",
      "Red",
      "Sable",
      "Black and tan",
      "White",
      "Parti-color (evenly broken markings)",
      "A black mask outlining the muzzle and eyes is highly desirable and characteristic"
    ],

    sheddingLevel:
      "Moderate; the profuse double coat sheds consistently and drops its thick undercoat seasonally, requiring dedicated brushing to manage loose hairs",

    droolingLevel:
      "Low to moderate; despite the extremely flat, wrinkled muzzle, excessive drooling is uncommon unless the dog is panting heavily in warm weather",

    distinctiveFeatures: [
      "Extremely compact, low-slung, and surprisingly heavy-boned frame that is significantly wider at the chest than the hindquarters",
      "Height at the withers of 6 to 9 inches",
      "Weight must not exceed 14 pounds (typically ranging between 7 and 14 pounds), feeling surprisingly heavy when picked up",
      "Luxurious, straight double coat forming a prominent, lion-like mane around the neck and shoulders",
      "Massive, broad head with a flat skull, a deep stop, and a dark, heavily wrinkled muzzle set flush with the face",
      "Large, dark, round, and lustrous eyes set wide apart, projecting a bold and intelligent expression",
      "Heart-shaped drop ears set level with the skull, heavily feathered",
      "Broad, deep, and well-slung chest suspended between short, thick, bowed forelegs",
      "Distinctive unhurried, dignified, rolling gait caused by the wide front and narrower rear",
      "High-set, heavily plumed tail carried gracefully over the back"
    ]
  },

  temperament: {
    traits: [
      "Dignified, regal, and fiercely independent, possessing an undeniably aristocratic demeanor",
      "Deeply affectionate and loyal to its primary handler or immediate family",
      "Aloof, reserved, and naturally suspicious toward unfamiliar strangers",
      "Extremely courageous and bold, often oblivious to its small size when confronting perceived threats",
      "Stubborn and strong-willed, famously displaying a 'what's in it for me' attitude during training",
      "Alert and vigilant, making a highly effective alarm watchdog without being unnecessarily yappy",
      "Calm, sedate, and low-energy indoors, preferring to lounge comfortably rather than engage in frantic play",
      "Intolerant of rough handling, teasing, or chaotic environments"
    ],

    scores: {
      affection: 4,
      withChildren: 2,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 3,
      independence: 5,
      trainability: 2,
      barking: 3,
      energy: 2
    }
  },

  care: {
    exercise: {
      level:
        "Low; a sedate, brachycephalic indoor companion that requires minimal physical exertion and prefers comfortable lounging",

      minutesPerDay: {
        min: 20,
        max: 30
      },

      activities: [
        "Very short, leisurely neighborhood walks at a slow pace",
        "Gentle indoor playtime with favorite toys",
        "Brief, highly supervised outdoor exploration in cool, shaded environments",
        "Resting comfortably indoors in a climate-controlled setting"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Brush thoroughly for at least one hour weekly (or briefly every day) using a pin brush and metal comb to penetrate the thick undercoat, prevent painful mats, and maintain the impressive mane.",

      bathing:
        "Bathe every three to four weeks using a moisturizing canine shampoo; carefully air dry or gently blow-dry on a cool setting while brushing to prevent the undercoat from tangling.",

      notes: [
        "The deep facial wrinkle over the nose must be cleaned and dried daily using a damp cloth or veterinary wipe to prevent trapped moisture, bacterial infection, and skin fold dermatitis.",
        "Keep the hair trimmed neatly around the eyes to prevent corneal scratches and irritation.",
        "Inspect the heavily feathered drop ears weekly, cleaning the canals gently with an approved veterinary solution.",
        "Trim fast-growing nails every two weeks to support the dog's short, heavy-boned legs.",
        "Brush teeth daily with canine enzymatic toothpaste, as the short, overcrowded jaw is highly susceptible to periodontal disease."
      ]
    },

    training: {
      difficulty:
        "Challenging; highly intelligent but notoriously stubborn and independent, requiring immense patience and highly motivating rewards",

      tips: [
        "Use positive reinforcement exclusively, employing premium food rewards to overcome their natural resistance to taking orders.",
        "Keep training sessions very short (3 to 5 minutes) to prevent the dog from simply ignoring the handler.",
        "Housebreaking can be extremely slow and difficult; utilize strict crate training, a rigorous schedule, and constant supervision.",
        "Never use harsh verbal reprimands or physical corrections, which will cause this proud breed to refuse entirely or become defensive.",
        "Use a well-fitted body harness rather than a neck collar to prevent dangerous pressure on the fragile trachea and prominent eyes."
      ],

      socialization:
        "Introduce the puppy early, gradually, and positively to varied people, calm dogs, and low-stress environments. Proper exposure helps prevent their natural aloofness from developing into sharp fearfulness or snappy behavior toward strangers."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool climates, where the thick double coat provides excellent insulation",
        "Highly sensitive to heat and humidity due to its severely flat (brachycephalic) face and heavy coat; absolutely requires indoor air conditioning and strictly restricted outdoor time in summer"
      ],

      aloneTimeTolerance:
        "Moderate; their independent and slightly aloof nature allows them to tolerate being alone for reasonable workdays better than many other highly clingy toy breeds, provided they are in a safe, cool environment."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated specifically for toy breeds, adjusted carefully to prevent obesity in a very low-energy dog.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age to prevent hypoglycemia.",
      adult:
        "Two measured meals daily to support digestion and steady energy.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output and joint support."
    },

    guidelines:
      "Measure daily rations strictly using a digital kitchen scale. This breed is heavily boned but very inactive, making obesity a significant risk that severely exacerbates breathing difficulties and spinal stress. Use shallow or slanted food bowls to accommodate the flat brachycephalic muzzle, and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a lean body condition; excess weight places extreme, dangerous strain on the long back, short bowed legs, and restricted airways.",
      "Account for training treats within the total daily caloric allowance.",
      "Ensure fresh water is always available, particularly in warm environments, as flat-faced breeds pant very inefficiently.",
      "Transition between diet formulas gradually over five to seven days to prevent gastrointestinal upset."
    ],

    note:
      "Caloric needs are very low compared to active breeds of similar weight. Consult a veterinarian to establish strictly tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Pekingese is a generally long-lived breed with a typical lifespan of 12 to 14 years. However, its extreme physical structure—a severely brachycephalic (flat) face, prominent eyes, a heavy body on short bowed legs, and a relatively long back—predisposes it to specific anatomical and genetic health challenges. Primary health priorities focus on protecting the highly vulnerable eyes, managing respiratory function, and protecting the spine from mechanical injury.",

    commonConditions: [
      "Brachycephalic Airway Obstructive Syndrome (BOAS) — a combination of anatomical abnormalities (elongated soft palate, stenotic nares) causing restricted airflow, noisy breathing, and severe, life-threatening heat intolerance",
      "Corneal ulcers and eye injuries — the large, shallowly set, and prominent eyes are highly vulnerable to scratches from tall grass, rough play, or their own facial hair",
      "Keratoconjunctivitis Sicca (KCS / Dry Eye) — inadequate tear production causing painful, inflamed eyes and potential blindness if untreated",
      "Intervertebral Disc Disease (IVDD) — degeneration or herniation of spinal discs exacerbated by the breed's long back and short legs, causing extreme pain or paralysis",
      "Skin fold dermatitis — bacterial or yeast infections occurring in the deep facial wrinkles (particularly over the nose) if not kept meticulously clean and dry",
      "Patellar luxation — intermittent displacement of the kneecap from the femoral groove, causing a 'skipping' gait",
      "Periodontal disease — severe tartar buildup and gingivitis caused by overcrowded teeth in the short, broad jaw, requiring lifelong veterinary dental care"
    ],

    preventiveCare: [
      "Strictly avoid exposing the dog to extreme heat or humidity to prevent fatal respiratory distress (heatstroke).",
      "Use a well-fitted body harness rather than a neck collar to prevent pressure on the fragile trachea and eyes.",
      "Protect the prominent eyes from injury by avoiding thorny brush and ensuring the facial hair is trimmed or tied away from the cornea.",
      "Maintain a lean weight and use pet stairs for furniture to minimize mechanical stress on the long spine and short knees, actively preventing IVDD.",
      "Wipe the heavy facial wrinkle over the nose daily with a damp cloth and dry it thoroughly to prevent bacterial fold infections.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist",
      "Clinical patellar luxation orthopedic evaluation by a veterinarian",
      "Clinical cardiovascular evaluation"
    ],

    dentalCare:
      "Brush teeth daily using canine enzymatic toothpaste. The breed has a broad, undershot jaw with severely overcrowded teeth, leading to rapid plaque accumulation; schedule regular professional veterinary dental cleanings to prevent early tooth loss.",

    earCare:
      "Inspect the heavy, heavily feathered drop ears weekly for wax buildup, moisture, or yeast. Clean gently using a veterinarian-recommended ear solution.",

    skinCare:
      "Part the dense double coat daily during brushing to inspect the skin for external parasites, mats, or irritation. Strict daily cleaning and drying of the deep facial wrinkles is mandatory."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: false,
    seniorOwners: true,
    activeOwners: false,
    apartmentLiving: true,

    idealFor: [
      "Seniors or calm adults seeking a sedate, quiet, and deeply loyal indoor companion",
      "Apartment or condominium dwellers looking for a low-exercise, low-energy pet",
      "Individuals who appreciate a highly independent, dignified, and regal canine personality",
      "Owners willing to commit to dedicated daily grooming, facial fold cleaning, and strict temperature control",
      "Homes without young children or large, boisterous dogs"
    ],

    notIdealFor: [
      "Families with toddlers or young children who might play roughly, drop the dog, or inadvertently injure its prominent eyes and spine",
      "Highly active individuals seeking a jogging, hiking, or strenuous outdoor sporting partner",
      "First-time dog owners unaccustomed to extreme stubbornness during housebreaking and obedience training",
      "Individuals living in un-air-conditioned homes in hot, humid climates",
      "People unwilling or unable to manage rigorous daily grooming and veterinary dental hygiene"
    ]
  },

  funFacts: [
    "The Pekingese was created to resemble the mythical Foo Dogs (or Chinese guardian lions), which hold immense religious significance in Chinese Buddhism as protectors of the faith.",
    "For centuries, the breed was kept exclusively by the imperial family in Beijing's Forbidden City; commoners were strictly forbidden to own them, and stealing one was an offense punishable by death.",
    "During the 1860 sacking of the Old Summer Palace in Beijing by British and French troops, five surviving Pekingese were discovered guarding the body of an imperial princess who had taken her own life. These five dogs were brought back to England and formed the foundation of the modern breed.",
    "One of those original five dogs, named 'Looty', was presented directly to Queen Victoria and lived out her days in luxury at Windsor Castle.",
    "The breed possesses a unique, unhurried 'rolling' gait, which was deliberately cultivated by ancient breeders to prevent the dogs from wandering far from the palace grounds."
  ],

  faq: [
    {
      question: "What is a Pekingese?",
      answer:
        "The Pekingese is an ancient, compact, and heavily boned toy dog from China, renowned for its flat face, luxurious lion-like mane, independent regal attitude, and unique rolling gait."
    },
    {
      question: "How tall and heavy is a Pekingese?",
      answer:
        "The breed is remarkably heavy for its size. Adults stand 6 to 9 inches at the withers and typically weigh between 7 and 14 pounds, possessing a dense, solid, and muscular frame."
    },
    {
      question: "How long does a Pekingese live?",
      answer:
        "With proper nutrition, strict weight management, and preventive veterinary care, the breed typically enjoys a lifespan of 12 to 14 years."
    },
    {
      question: "Do Pekingese shed a lot, and how are they groomed?",
      answer:
        "They are moderate shedders. Their profuse double coat requires extensive grooming, including daily or thorough weekly brushing to prevent painful mats, alongside mandatory daily cleaning of their facial wrinkles."
    },
    {
      question: "Can a Pekingese live in an apartment?",
      answer:
        "Yes, they are exceptional apartment dogs. Their small size, very low exercise requirements, and calm, sedate indoor nature make them perfectly suited for urban living, provided the home is air-conditioned."
    },
    {
      question: "Are Pekingese good with children?",
      answer:
        "Generally no. Because of their independent, proud nature, intolerance for rough handling, and physical vulnerabilities (prominent eyes and long spine), they are best suited to adult-only homes or families with respectful older children."
    },
    {
      question: "Are Pekingese hard to train?",
      answer:
        "Yes, they are notoriously stubborn, independent, and notoriously difficult to housebreak. They require immense patience, strict consistency, and highly motivating food rewards, as they do not instinctively aim to please."
    },
    {
      question: "What are the main health concerns for a Pekingese?",
      answer:
        "Primary health concerns relate to their extreme physical structure, including severe breathing difficulties and heatstroke risk (BOAS), highly vulnerable eyes prone to injury, spinal disc issues (IVDD), and skin fold infections."
    }
  ],

  references: [
    "fci-pekingese-official-standard",
    "fci-pekingese-nomenclature",
    "akc-pekingese-breed-standard",
    "akc-pekingese-breed-profile",
    "pca-pekingese-health",
    "ofa-pekingese-chic-requirements",
    "wikimedia-pekingese-hugo-arg",
    "wikimedia-pekingese-bailey-dirk"
  ],

  evidence: {
    scientificName: {
      reliability: "unverified",
      sources: [],
      verifiedOn: null,
      note:
        "Canis lupus familiaris is used as the standard domestic-dog taxonomic label across the catalog; it is not stated in breed standards."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-pekingese-official-standard",
          role: "verified",
          locator: "Standard heading: PEKINGESE"
        },
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "History: Peke, Lion Dog, Peking Lion Dog, Pelham, Chinese Spaniel"
        }
      ],
      verifiedOn: "2026-11-16",
      note: "Verified across FCI Standard No. 207 and AKC profile."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-pekingese-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 9 Companion and Toy Dogs; Section 8 Japan Chin and Pekingese; Without working trial"
        },
        {
          id: "akc-pekingese-breed-standard",
          role: "verified",
          locator: "Toy Group"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-pekingese-official-standard",
          role: "verified",
          locator: "ORIGIN: China; PATRONAGE: Great Britain"
        }
      ],
      verifiedOn: "2026-11-16",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-pekingese-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "About the Breed, History (1860 Old Summer Palace sacking, Queen Victoria), and Roles"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "Synthesized in original prose from FCI Standard No. 207 and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-pekingese-official-standard",
          role: "verified",
          locator: "HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE AND WEIGHT"
        },
        {
          id: "akc-pekingese-breed-standard",
          role: "verified",
          locator: "General Appearance, Size, Proportion, Substance, Head, Coat, Color, Gait"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "Conformation, heavy bone, flat face, lion-like mane, rolling gait, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-pekingese-breed-standard",
          role: "verified",
          locator: "Size, Proportion, Substance: the dog is from 6 to 9 inches at the withers."
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "Preserved in published unit of inches (6 to 9 inches) exactly as specified in the official AKC standard. (FCI Standard No. 207 specifies weight limits but does not provide exact numerical height)."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-pekingese-breed-standard",
          role: "verified",
          locator: "Size, Proportion, Substance: Weight must not exceed 14 pounds."
        },
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "Weight: up to 14 pounds"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "Preserved in published unit of pounds (up to 14 pounds) exactly as specified in the official AKC standard. The 7 to 14 pound range is a canonical representation of the accepted working and show weight."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12-14 years"
        }
      ],
      verifiedOn: "2026-11-16",
      note: "Supported by kennel club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (3/5)"
        },
        {
          id: "fci-pekingese-official-standard",
          role: "verified",
          locator: "COAT: Long, straight, with profuse mane... thick undercoat."
        }
      ],
      verifiedOn: "2026-11-16",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-pekingese-official-standard",
          role: "verified",
          locator: "Lips: Lips must not show teeth or tongue."
        },
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (1/5)"
        }
      ],
      verifiedOn: "2026-11-16",
      note: "Despite the brachycephalic muzzle, lips are firm and prevent excessive drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-pekingese-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Leonine in appearance with alert and intelligent expression. Fearless, loyal, aloof but not timid or aggressive."
        },
        {
          id: "akc-pekingese-breed-standard",
          role: "verified",
          locator: "Temperament: A combination of regal dignity, intelligence and self-importance make for a good natured, opinionated and affectionate companion to those who have earned its respect."
        }
      ],
      verifiedOn: "2026-11-16",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented toy companion temperament, high independence, extreme stubbornness, and low energy."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        }
      ],
      verifiedOn: null,
      note:
        "Combines low-energy companion management with intense long-coat grooming and critical brachycephalic heat-stress precautions."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "Energy Level (2/5); Exercise Needs (1/5)"
        },
        {
          id: "fci-pekingese-official-standard",
          role: "verified",
          locator: "UTILIZATION: Companion Dog"
        }
      ],
      verifiedOn: "2026-11-16",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "cited",
          locator: "Daily exercise recommendations for low-energy toy breeds"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 20 to 30 minutes of daily activity reflects the very low exercise demands of a heavy-boned brachycephalic toy companion."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "Adaptability: Adapts Well to Apartment Living (5/5); highly suited for indoor life"
        }
      ],
      verifiedOn: "2026-11-16",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "Exercise and indoor supervision recommendations"
        }
      ],
      verifiedOn: "2026-11-16",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "Weather adaptation: extremely sensitive to heat and humidity due to flat face; must be kept cool"
        }
      ],
      verifiedOn: "2026-11-16",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "cited",
          locator: "Tolerates Being Alone: Moderate; independent nature but bred for companionship"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food formulated for toy breeds, strict portion control"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for toy breeds highly prone to obesity and skeletal stress."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance and divided meals"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule for toy breeds to prevent hypoglycemia."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-pekingese-chic-requirements",
          role: "verified",
          locator: "CHIC Program requirements: Eye Examination, Patellar Luxation"
        },
        {
          id: "pca-pekingese-health",
          role: "verified",
          locator: "Health Testing: Eye certification, Patella certification, Brachycephalic Syndrome, IVDD"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "Synthesizes parent club veterinary health records, national health registry screening protocols, and brachycephalic clinical data."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pca-pekingese-health",
          role: "verified",
          locator: "Corneal ulcers, KCS, skin fold dermatitis, Brachycephalic Airway Obstructive Syndrome (BOAS), Intervertebral Disc Disease (IVDD)"
        },
        {
          id: "ofa-pekingese-chic-requirements",
          role: "verified",
          locator: "Patellar luxation, eye conditions"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "Details documented genetic and conformational conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "pca-pekingese-health",
          role: "cited",
          locator: "Routine care, eye protection, facial fold cleaning, heat avoidance, back protection"
        },
        {
          id: "akc-pekingese-breed-profile",
          role: "cited",
          locator: "Harness usage, dental hygiene, and strict weight control"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to heavily built brachycephalic toy breeds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-pekingese-chic-requirements",
          role: "verified",
          locator: "CHIC Program required screenings: CAER Eye examination, Clinical Patellar Luxation"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "Screenings summarize published parent club and health registry protocols."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-pekingese-official-standard",
          role: "cited",
          locator: "Jaws/teeth: Flat face, broad jaw."
        },
        {
          id: "akc-pekingese-breed-profile",
          role: "cited",
          locator: "Routine dental care and early periodontal disease risk in short muzzles"
        }
      ],
      verifiedOn: null,
      note: "Strict home dental hygiene guidelines for a breed highly prone to periodontal disease."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-pekingese-official-standard",
          role: "cited",
          locator: "Ears: Heart-shaped, set level with the skull, carried close to the head, with profuse feathering"
        },
        {
          id: "akc-pekingese-breed-profile",
          role: "cited",
          locator: "Ear hygiene and weekly inspection"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for heavily coated drop ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "cited",
          locator: "Facial fold cleaning and coat brushing"
        }
      ],
      verifiedOn: null,
      note: "General skin, facial wrinkle, and double-coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, extreme independence, grooming demands, and physical fragility."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "Foo Dog origins, Lion and marmoset legend, 1860 Old Summer Palace sacking, 'Looty' and Queen Victoria, rolling gait"
        }
      ],
      verifiedOn: "2026-11-16",
      note: "Verified historical folklore and foundation facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pekingese-breed-standard",
          role: "verified",
          locator: "Origin, height (6-9 in), weight (max 14 lbs), coat, and colors"
        },
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "Lifespan (12-14 years), apartment living, housebreaking difficulty, child suitability, and grooming"
        },
        {
          id: "pca-pekingese-health",
          role: "verified",
          locator: "Main health concerns (BOAS, Eyes, IVDD) and recommended health screening panel"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and veterinary data without naming registries in prose."
    }
  },

  updatedOn: "2026-11-16"
};
