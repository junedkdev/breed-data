import type { Breed } from "../schema/breed.types";

export const standard_schnauzer: Breed = {
  slug: "standard-schnauzer",
  name: "Standard Schnauzer",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Schnauzer",
    "Mittelschnauzer",
    "Wire-Haired Pinscher"
  ],

  group: "Pinscher, schnauzer, and working farm dogs",

  origin: {
    country: "Germany",
    region: "Southern Germany (Bavaria and Württemberg)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Standard_Schnauzers.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Standard_Schnauzers.jpg",
      title: "Standard Schnauzers.jpg",
      description:
        "Two female pepper-and-salt Standard Schnauzers—one with cropped ears and one with natural drop ears—showing their bristly beards and bushy eyebrows.",
      creator: "Cgoodall",
      uploader: "Cgoodall",
      capturedOn: "2007-03-25",
      uploadedOn: "2007-04-01",
      width: 2592,
      height: 1944,
      licenseId: "public-domain",
      attribution:
        "Photo by Cgoodall, Wikimedia Commons, Public Domain. Source: https://commons.wikimedia.org/wiki/File:Standard_Schnauzers.jpg.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mittelschnauzer_aka_Standard_Schnauzer.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Mittelschnauzer_aka_Standard_Schnauzer.jpg",
      title: "Mittelschnauzer aka Standard Schnauzer.jpg",
      description:
        "A male pepper-and-salt Standard Schnauzer displaying its square, sturdy proportions and harsh wire coat.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2006-06-01",
      uploadedOn: "2014-04-16",
      width: 500,
      height: 462,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Mittelschnauzer_aka_Standard_Schnauzer.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    }
  ],

  overview: {
    summary:
      "A sturdy, square-built medium working dog from southern Germany, recognized by its harsh pepper-and-salt or black wire coat, full beard, keen intelligence, and steadfast watchdog instincts.",

    description:
      "The Standard Schnauzer is the original medium-sized member of the Schnauzer family, built with a compact, muscular, square silhouette and strong bone. A dense, wiry double coat wraps the body, lengthening into a coarse beard along the rectangular muzzle and bushy brows shading dark, oval eyes. Its ground-covering, energetic gait reflects the stamina of an all-purpose farm dog. Alert, courageous, and deeply loyal to its household, this breed pairs lively playfulness with calm reliability, acting as a vigilant home protector that thrives on active involvement with its people.",

    history:
      "Rooted in medieval southern Germany, the Standard Schnauzer began as a versatile farm and stable companion comfortable around horses, quick to clear rodents, and dependable at guarding merchant carts and homesteads. Early German breeders referred to the dog as the Wire-Haired Pinscher until its whiskered muzzle—'Schnauze' in German—cemented the Schnauzer name around the turn of the twentieth century. During World War I and World War II, German forces relied on the breed as dispatch carriers and Red Cross aides. As the original prototype, it later served as the foundation for both the smaller Miniature Schnauzer and the larger Giant Schnauzer.",

    originalPurpose:
      "All-purpose farm and stable dog used for ratting, livestock droving, and guarding carts and homesteads.",

    currentRoles: [
      "Devoted, energetic family companion",
      "Alert, reliable property watchdog",
      "Versatile canine sports partner in obedience, agility, herding, barn hunt, and tracking",
      "Search-and-rescue and service-working dog"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 45,
        max: 50
      },
      female: {
        min: 45,
        max: 50
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 14,
        max: 20
      },
      female: {
        min: 14,
        max: 20
      }
    },

    lifespanYears: {
      min: 13,
      max: 16
    },

    coatType:
      "Dense, harsh, wiry double coat combining a thick undercoat with a rough, close-lying outer layer, accented by a stiff beard on the muzzle, bushy eyebrows, and longer leg furnishings.",

    coatLength: "Medium",

    coatColors: [
      "Pure black with a solid black undercoat",
      "Pepper and salt (banded black-and-white hairs creating shades from dark iron gray to silver gray with a gray undercoat)"
    ],

    sheddingLevel:
      "Low; the dense wire coat sheds very little when brushed routinely and hand-stripped periodically",

    droolingLevel:
      "Low; tight, black-pigmented lips prevent noticeable drooling",

    distinctiveFeatures: [
      "Compact, square build standing 45 to 50 cm at the shoulder and weighing 14 to 20 kg",
      "Strong, flat, elongated rectangular head with a blunt wedge muzzle and full bristly beard",
      "Powerful jaws closing in a complete scissor bite",
      "Dark, oval, forward-looking eyes shaded by thick, arched eyebrows",
      "High-set V-shaped drop ears whose inner edges rest neatly against the cheeks",
      "Muscular, slightly arched neck flowing into a short, firm back that slopes gently toward the rear",
      "Round, tight cat-like paws with dark nails and tough pads"
    ]
  },

  temperament: {
    traits: [
      "Bright, observant, and quick to learn when engaged with clear, fair leadership",
      "Spirited and playful yet steady and calm when settled indoors",
      "Deeply devoted to family members and generally patient with respectful children",
      "Naturally watchful and reserved around unfamiliar visitors",
      "Courageous, reliable guardian with strong protective instincts",
      "Independent thinker that can test boundaries if under-exercised or bored",
      "Keen chasing drive toward squirrels, rodents, and small scurrying animals"
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 5,
      independence: 3,
      trainability: 4,
      barking: 3,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; an athletic working breed needing brisk daily exercise and structured mental work to stay balanced and well-behaved",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Brisk daily walks, jogs, or trail hikes",
        "Obedience, rally, and impulse-control training games",
        "Agility, herding, barn hunt, or nosework sessions",
        "Structured fetch and tug in a securely fenced yard"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Brush and comb two to three times per week with a slicker brush and metal comb, focusing on the beard and leg furnishings where tangles collect.",

      bathing:
        "Bathe only when dirty using a gentle or harsh-coat canine shampoo so the crisp wire texture stays intact.",

      notes: [
        "Hand-strip dead outer hairs every few months to keep the weather-resistant wiry texture and rich pigment; frequent clipping softens the coat and dulls color.",
        "Rinse or wipe the beard after meals to keep skin clean and free of odors.",
        "Check the V-shaped drop ears weekly and clean gently with a veterinarian-approved solution.",
        "Trim nails every two to three weeks to preserve tight cat-like feet.",
        "Brush teeth several times a week with canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Moderate; sharp and capable of advanced work, yet independent enough to need consistent, upbeat, firm guidance",

      tips: [
        "Keep training varied and reward-driven with tasty treats and praise—repetitive drills bore this clever breed quickly.",
        "Set consistent household rules from puppyhood so strong-willed habits do not take root.",
        "Practice solid recall and leash manners early to manage its keen interest in chasing small critters.",
        "Avoid harsh or heavy-handed methods, which can trigger stubborn resistance."
      ],

      socialization:
        "Begin structured, positive socialization early with unfamiliar people, steady dogs, and busy public settings so natural watchfulness stays calm and discriminating."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool climates, where the harsh double coat shields well against wind and chill",
        "Warm climates when properly groomed, shaded, and exercised during cooler hours"
      ],

      aloneTimeTolerance:
        "Low to moderate; wants to be part of daily family life and can grow vocal or destructive if left isolated for long stretches."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced dog food formulated for active medium-sized breeds, portioned to keep a lean, muscular frame.",

    feedingFrequency: {
      puppy:
        "Three to four measured meals per day until six months of age.",
      adult:
        "Two measured meals per day to sustain steady energy and digestion.",
      senior:
        "Two controlled meals per day tailored to slower metabolism."
    },

    guidelines:
      "Measure every meal with a kitchen scale or measuring cup rather than free-feeding. Keeping body weight lean protects hip joints and athletic stamina, and fresh drinking water should always be available.",

    considerations: [
      "Monitor body condition so ribs remain easy to feel without excess fat cover.",
      "Count training treats within the daily calorie budget.",
      "Clean the beard after wet meals to avoid matted food residue.",
      "Transition gradually to new food over five to seven days."
    ],

    note:
      "Consult a veterinarian to match daily calories to your dog's age, metabolism, and daily activity."
  },

  health: {
    overview:
      "The Standard Schnauzer is generally a sturdy, long-lived working breed with a typical lifespan of 13 to 16 years. Breed health surveys consistently describe overall health as strong, though conscientious screening is essential for an autosomal recessive form of Dilated Cardiomyopathy (DCM) caused by a 22-base-pair deletion in the RBM20 gene, alongside hip dysplasia and inherited eye disorders.",

    commonConditions: [
      "Dilated Cardiomyopathy (DCM, RBM20-related) — scientifically established autosomal recessive heart-muscle disorder linked to a 22-bp deletion in RBM20, causing enlarged heart chambers, heart failure, or sudden cardiac death in homozygous dogs; DNA testing allows breeders to avoid mating two carriers",
      "Hip dysplasia — developmental hip-joint looseness that can lead to arthritis, monitored through pre-breeding hip radiographs",
      "Hereditary eye disorders — including cataracts and retinal anomalies, tracked through routine specialist eye exams",
      "Hypothyroidism (autoimmune thyroiditis) — underactive thyroid function occasionally reported in the breed, evaluated via veterinary blood panels",
      "Follicular dermatitis (Schnauzer comedo syndrome) — benign blackhead-like bumps along the back seen occasionally in Schnauzers, manageable with gentle veterinary skin care"
    ],

    preventiveCare: [
      "Verify that breeding parents have completed DNA testing for RBM20-related DCM (never breeding two carriers together), hip radiographs, and specialist eye examinations.",
      "Maintain a lean, fit body weight to protect hip joints throughout life.",
      "Keep up with year-round flea, tick, and heartworm prevention.",
      "Keep the beard and leg furnishings clean and dry, and schedule yearly veterinary wellness checks."
    ],

    recommendedScreenings: [
      "DNA test for Schnauzer Dilated Cardiomyopathy (RBM20 deletion)",
      "Radiographic hip dysplasia evaluation prior to breeding",
      "Ophthalmic examination by a board-certified veterinary ophthalmologist",
      "Optional breeder screenings including elbow radiographs, basic or advanced cardiac exam (auscultation/echocardiogram), and thyroid panel"
    ],

    dentalCare:
      "Brush teeth several times a week with canine enzymatic toothpaste and arrange routine veterinary dental checks to maintain strong jaws and healthy gums.",

    earCare:
      "Check under the V-shaped drop ears every week for wax, moisture, or redness, and clean gently with a veterinarian-approved rinse.",

    skinCare:
      "Part the dense wire coat weekly to inspect skin for parasites, mats, or comedones along the back; periodic hand-stripping supports healthy coat turnover."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Active households wanting a bright, athletic, and deeply loyal family companion",
      "Experienced owners comfortable offering steady, positive leadership to a spirited dog",
      "People seeking a vigilant, reliable home watchdog",
      "Handlers interested in obedience, agility, herding, barn hunt, or tracking",
      "Owners willing to maintain a wiry coat through regular brushing and periodic hand-stripping"
    ],

    notIdealFor: [
      "Passive or first-time owners reluctant to set clear, consistent rules",
      "Sedentary households looking for a low-energy lapdog",
      "Homes where the dog would spend long days alone without engagement",
      "Owners expecting an overly casual dog that greets every stranger indiscriminately",
      "Households with free-roaming small rodent pets"
    ]
  },

  funFacts: [
    "The Standard Schnauzer is the original prototype of the Schnauzer family, later used to shape both the Miniature Schnauzer and the Giant Schnauzer.",
    "Before the Schnauzer name caught on in the late nineteenth century, the breed was widely known in Germany as the Wire-Haired Pinscher.",
    "Its name comes from the German word 'Schnauze' (snout or muzzle), highlighting its bristly beard and mustache.",
    "During World War I and World War II, German military units employed these smart, resilient dogs as message carriers and Red Cross helpers.",
    "The classic pepper-and-salt coat effect comes from individual hairs banded in alternating black and white segments."
  ],

  faq: [
    {
      question: "What kind of dog is a Standard Schnauzer?",
      answer:
        "The Standard Schnauzer is a medium-sized, square-built German working dog known for its harsh wire coat, bristly beard, sharp intelligence, and loyal, watchful temperament."
    },
    {
      question: "How does a Standard Schnauzer differ from Miniature and Giant Schnauzers?",
      answer:
        "The Standard Schnauzer is the original medium-sized breed; the Miniature was bred down for small-scale ratting and companionship, while the Giant was bred up for heavy droving and guarding."
    },
    {
      question: "How tall and heavy is a Standard Schnauzer?",
      answer:
        "Adults stand 45 to 50 cm at the shoulder and weigh 14 to 20 kg, with a compact, solidly muscled build."
    },
    {
      question: "How long does a Standard Schnauzer live?",
      answer:
        "With balanced nutrition, responsible heart screening, and routine veterinary care, a Standard Schnauzer commonly lives 13 to 16 years."
    },
    {
      question: "Do Standard Schnauzers shed much, and how are they groomed?",
      answer:
        "They shed very little when properly maintained, but their harsh wire coat needs brushing two to three times a week and periodic hand-stripping to preserve its weather-resistant texture and color."
    },
    {
      question: "Can a Standard Schnauzer live in an apartment?",
      answer:
        "Yes, as long as it receives plenty of brisk daily walks, active play, and mental training outdoors."
    },
    {
      question: "Are Standard Schnauzers aggressive?",
      answer:
        "They are not inherently aggressive, though they are bold, watchful protectors that are naturally reserved with strangers. Early socialization and consistent training keep their guarding instincts balanced."
    },
    {
      question: "What are the main health concerns for a Standard Schnauzer?",
      answer:
        "Overall health is strong, but the most important inherited risk is autosomal recessive Dilated Cardiomyopathy (DCM), alongside hip dysplasia and hereditary eye disorders."
    },
    {
      question: "What health screenings are recommended before breeding?",
      answer:
        "Core screenings include a DNA test for Schnauzer Dilated Cardiomyopathy (DCM), hip dysplasia radiographs, and an ophthalmologist eye exam, with optional elbow, cardiac, and thyroid checks."
    }
  ],

  references: [
    "natureserve-canis-lupus-familiaris",
    "fci-schnauzer-official-standard",
    "fci-schnauzer-nomenclature",
    "akc-standard-schnauzer-breed-standard",
    "akc-standard-schnauzer-breed-profile",
    "ssca-standard-schnauzer-health",
    "ofa-standard-schnauzer-chic-requirements",
    "omia-schnauzer-dcm-rbm20",
    "the-dog-api",
    "wikimedia-standard-schnauzers-cgoodall",
    "wikimedia-mittelschnauzer-pleple2000"
  ],

  evidence: {
    scientificName: {
      reliability: "reliable_source",
      sources: [
        {
          id: "natureserve-canis-lupus-familiaris",
          role: "verified",
          locator: "Taxonomic listing: Canis lupus familiaris (Domestic Dog)"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Canis lupus familiaris is the verified domestic-dog taxonomic label used across the catalog."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "Standard heading: SCHNAUZER; Historical summary: Wire-Haired Pinscher"
        },
        {
          id: "fci-schnauzer-nomenclature",
          role: "verified",
          locator: "Official nomenclature: SCHNAUZER (182)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names: Mittelschnauzer, Schnauzer, Wire-haired Pinscher"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Cross-checked across FCI Standard No. 182, AKC profile, and The Dog API."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "CLASSIFICATION FCI: Group 2 Pinscher and Schnauzer - Molossoid and Swiss Mountain and Cattledogs; Section 1.2 Schnauzer; Without working trial"
        },
        {
          id: "akc-standard-schnauzer-breed-standard",
          role: "verified",
          locator: "Working Group"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group: Working"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "User-facing group label states Pinscher, schnauzer, and working farm dogs without registry or section identifiers."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "COUNTRY OF ORIGIN: Germany; BRIEF HISTORICAL SUMMARY (Southern Germany)"
        },
        {
          id: "fci-schnauzer-nomenclature",
          role: "verified",
          locator: "Country of origin: Germany"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: Germany"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "verified",
          locator: "About the Breed, History (Wire-Haired Pinscher, WWI/WWII dispatch and Red Cross service, progenitor of Miniature and Giant)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Written in original prose from FCI Standard No. 182, AKC records, and cross-checked against The Dog API."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "HEAD, EARS, BODY, LIMBS, COAT, COLOUR (pure black with black undercoat; pepper and salt), SIZE AND WEIGHT"
        },
        {
          id: "akc-standard-schnauzer-breed-standard",
          role: "verified",
          locator: "General Appearance, Head, Coat, Color (pepper and salt or pure black), Gait"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Strictly limits coatColors to pure black and pepper and salt per both FCI Standard No. 182 and AKC standard; excludes generic non-breed variants from The Dog API (blue, brindle, cream, fawn, liver, merle, pied, red, sable, tricolour, white)."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Height at withers: Dogs and bitches 45 to 50 cm."
        },
        {
          id: "akc-standard-schnauzer-breed-standard",
          role: "cited",
          locator: "Ideal 18.5-19.5 in males (DQ <18 or >20 in); 17.5-18.5 in females (DQ <17 or >19 in)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric: 47-50 cm males, 44-47 cm females"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Preserved in exact published centimetres (45 to 50 cm) from FCI Standard No. 182 (country-of-origin standard). AKC specifies sex-differentiated heights in inches and The Dog API lists converted sex-split centimetres."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Weight: Dogs and bitches 14 to 20 kg."
        },
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "cited",
          locator: "Weight: 35-45 pounds"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.weight.metric: 16-23 kg males, 14-20 kg females"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Preserved in exact published kilograms (14 to 20 kg) from FCI Standard No. 182. AKC lists 35-45 pounds and The Dog API lists converted 16-23 kg males / 14-20 kg females."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 13-16 years"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified from AKC breed profile (The Dog API omitted lifespan)."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (low)"
        },
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "COAT: Wiry, harsh, and dense double coat"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "Lips: Black, smooth and tight-fitting to the jaws."
        },
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (low)"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Lively temperament with deliberate calmness, good-natured, playful, loyal, incorruptible watchdog"
        },
        {
          id: "akc-standard-schnauzer-breed-standard",
          role: "verified",
          locator: "Temperament: highly developed senses, intelligence, aptitude for training, fearlessness, endurance, high-spirited with extreme reliability"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament: Intelligent, alert, energetic, loyal, protective, devoted"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 ratings informed by AKC trait scales and official temperament descriptions."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "cited",
          locator: "Exercise, Grooming, Training, and Nutrition guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Practical working-breed care combining vigorous daily exercise with hand-stripped wire-coat upkeep."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "verified",
          locator: "Energetic working breed thriving on hikes, agility, barn hunt, herding, and lure coursing"
        },
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "UTILIZATION: Guard and Companion Dog"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "cited",
          locator: "Daily active exercise and dog-sport recommendations"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 45 to 60 minutes daily suited to an athletic medium-sized working breed."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "verified",
          locator: "Medium indoor companion adaptable to apartments when exercise needs are met"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "verified",
          locator: "Family-oriented companion that thrives indoors with secure yard play"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "COAT: Harsh, dense double coat"
        },
        {
          id: "akc-standard-schnauzer-breed-standard",
          role: "verified",
          locator: "Temperament: resistance against weather and illness"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "cited",
          locator: "Insists on inclusion in family activities; does not do well left alone outdoors"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "cited",
          locator: "Nutrition: age-appropriate complete dog food and weight monitoring"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ssca-standard-schnauzer-health",
          role: "verified",
          locator: "SSCA Best Practices: required Hips, Eyes, and DCM DNA testing; recommended Elbow, Cardiac, Thyroid"
        },
        {
          id: "omia-schnauzer-dcm-rbm20",
          role: "verified",
          locator: "OMIA:002365-9615: RBM20 22-bp deletion causing autosomal recessive DCM in Standard Schnauzers (Leach et al. 2014, 2022; Harmon et al. 2017)"
        },
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "verified",
          locator: "Health: generally very healthy breed per SSCA surveys; DCM DNA test, hips, and eyes"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Combines OMIA molecular genetics data with SSCA Best Practices and AKC Working Group health testing requirements."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "omia-schnauzer-dcm-rbm20",
          role: "verified",
          locator: "RBM20-related autosomal recessive Dilated Cardiomyopathy in Standard Schnauzers"
        },
        {
          id: "ssca-standard-schnauzer-health",
          role: "verified",
          locator: "DCM, hip dysplasia, eye disorders, elbow, cardiac, and thyroid screening"
        },
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "verified",
          locator: "Hip dysplasia, eye disorders, and simple-recessive cardiomyopathy"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "ssca-standard-schnauzer-health",
          role: "cited",
          locator: "Pre-breeding health clearances and never mating two DCM carriers"
        },
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "cited",
          locator: "Weight management, grooming, and annual veterinary care"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-standard-schnauzer-chic-requirements",
          role: "verified",
          locator: "CHIC requirements for Standard Schnauzer (SS): Hip Evaluation, Ophthalmologist Evaluation, DCM DNA Test"
        },
        {
          id: "ssca-standard-schnauzer-health",
          role: "verified",
          locator: "Required CHIC tests (Hips, Eyes, DCM DNA) plus recommended OFA Elbow, Basic/Advanced Cardiac, Thyroid, and CHIC DNA Repository"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Matches SSCA Best Practices and AKC Working Group Health Testing Requirements."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-schnauzer-official-standard",
          role: "cited",
          locator: "Jaws/teeth: strong jaws and complete scissor bite"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-schnauzer-official-standard",
          role: "cited",
          locator: "Ears: high-set V-shaped drop ears"
        },
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "cited",
          locator: "Weekly ear checks and cleaning"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "cited",
          locator: "Wire-coat hand-stripping and skin maintenance"
        }
      ],
      verifiedOn: null,
      note: null
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "cited",
          locator: "Temperament, exercise, grooming, and family-compatibility profile"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability summary reflecting high activity needs, wire-coat upkeep, and strong-willed watchdog temperament."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "verified",
          locator: "Prototype of Schnauzer family, Wire-Haired Pinscher history, 'Schnauze' etymology, WWI/WWII dispatch and Red Cross work"
        },
        {
          id: "akc-standard-schnauzer-breed-standard",
          role: "verified",
          locator: "Color: pepper and salt banded hairs"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "Origin, height (45-50 cm), weight (14-20 kg), coat, and colors"
        },
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "verified",
          locator: "Lifespan (13-16 years), apartment living, temperament, and grooming"
        },
        {
          id: "ssca-standard-schnauzer-health",
          role: "verified",
          locator: "DCM DNA test, hip dysplasia, eye exams, and optional screenings"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Synthesized in original wording without naming registries or source organizations."
    }
  },

  updatedOn: "2026-11-26"
};
