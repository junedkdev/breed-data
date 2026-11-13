import type { Breed } from "../schema/breed.types";

export const greater_swiss_mountain_dog: Breed = {
  slug: "greater-swiss-mountain-dog",
  name: "Greater Swiss Mountain Dog",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Grosser Schweizer Sennenhund",
    "Great Swiss Mountain Dog",
    "Grand Bouvier Suisse",
    "Gran Boyero Suizo",
    "Swissie",
    "GSMD"
  ],

  group:
    "Pinscher and Schnauzer Type, Molossoid Breeds, and Swiss Mountain and Cattle Dogs; Section 3 — Swiss Mountain and Cattle Dogs (without working trial; also classified in the Working and Guardian Dog groups)",

  origin: {
    country: "Switzerland",
    region:
      "Swiss Alps and midland valleys, Switzerland"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Greater_Swiss_Mountain_Dog.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Greater_Swiss_Mountain_Dog.jpg",
      title: "Greater Swiss Mountain Dog.jpg",
      description:
        "An adult female Greater Swiss Mountain Dog standing outdoors.",
      creator: "Swissy",
      uploader: "Swissy",
      capturedOn: "2007-05-11",
      uploadedOn: "2007-05-16",
      width: 1466,
      height: 985,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Swissy, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Greater_Swiss_Mountain_Dog.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-13"
    }
  ],

  overview: {
    summary:
      "A giant, heavy-boned, and strikingly tricolored Swiss draft and drover dog, prized for its immense pulling strength, alert dependability, and devoted, family-oriented nature.",

    description:
      "The Greater Swiss Mountain Dog is the largest and oldest of the four Swiss Sennenhund breeds, exhibiting a powerful, draft-built, and heavy-boned silhouette slightly longer than it is tall. Bred to haul heavy carts and drive cattle through alpine valleys, the Swissy commands an imposing presence wrapped in a striking tricolored double coat of black, rust-red, and clean white. The broad, flat skull transitions smoothly to a blunt, strong muzzle, accompanied by medium-sized drop ears and expressive almond-shaped eyes that radiate calm, self-assured confidence. Unwavering in its loyalty and surprisingly agile for its immense size, the breed thrives as a dependable family guardian and versatile working partner, requiring moderate but regular activity to stay physically and mentally fulfilled.",

    history:
      "As the oldest and largest of the Swiss mountain dogs, the Greater Swiss Mountain Dog shares an ancient mastiff heritage, likely descending from the large Molossian war dogs introduced to the Alpine regions by the Romans. For centuries, these massive dogs served as the all-purpose draft and droving dogs of Swiss farmers, butchers, and merchants, pulling heavy carts laden with meat and dairy products to market. By the late nineteenth century, industrialization nearly drove the breed to extinction as machines replaced draft animals. In 1908, the esteemed cynologist Professor Albert Heim spotted two exceptional short-haired specimens at a Swiss dog show and championed a revival effort, separating them from the closely related Bernese Mountain Dog and officially establishing the Grosser Schweizer Sennenhund. The breed was later exported globally, earning widespread recognition in the late twentieth century as an elite drafting dog and family guardian.",

    originalPurpose:
      "All-purpose alpine farm dog used for heavy draft work (cart pulling), droving cattle, and guarding rural property.",

    currentRoles: [
      "Versatile farm dog and livestock drover",
      "Canine athlete in carting, drafting, and weight pulling",
      "Vigilant estate and family guardian",
      "Devoted companion for experienced large-dog owners"
    ]
  },

  physical: {
    sizeCategory: "Giant",

    height: {
      unit: "cm",
      male: {
        min: 65,
        max: 72
      },
      female: {
        min: 60,
        max: 68
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 115,
        max: 140
      },
      female: {
        min: 85,
        max: 110
      }
    },

    lifespanYears: {
      min: 8,
      max: 11
    },

    coatType:
      "Dense, medium-length double coat featuring a thick outer coat and a plush undercoat; shorter coats are permissible provided the insulating undercoat is present.",

    coatLength: "Medium",

    coatColors: [
      "Tricolor (black base with symmetrical rust-red and white markings)",
      "White markings typically appear as a blaze on the face, on the chest, toes, and tail tip",
      "Rust-red markings appear over the eyes, on the cheeks, chest, and legs"
    ],

    sheddingLevel:
      "Moderate to high; sheds consistently year-round and heavily blows the undercoat twice a year during seasonal weather transitions",

    droolingLevel:
      "Low to moderate; relatively tight flews for a mastiff-type breed, though slight drooling may occur after drinking or heavy exertion",

    distinctiveFeatures: [
      "Large, heavy-boned, draft-built silhouette slightly longer than it is tall (10:9 length-to-height ratio)",
      "Height at the withers of 65 to 72 cm for males and 60 to 68 cm for females",
      "Working weight of 115 to 140 pounds for males and 85 to 110 pounds for females",
      "Striking tricolored coat of black, rust-red, and white with a dark grey to black undercoat",
      "Broad, flat skull with a slight stop and a strong, blunt muzzle",
      "Complete, regular scissor bite with powerful jaws",
      "Medium-sized, almond-shaped brown eyes expressing gentle alertness",
      "Medium-sized, triangular drop ears set high and hanging close to the head",
      "Deep, broad chest and muscular, well-sprung ribs extending to a strong, level back",
      "Heavy, thick tail reaching to the hock, hanging naturally at rest and raised slightly in action",
      "Sturdy, straight forelegs and powerful hindquarters with round, compact feet and well-arched toes"
    ]
  },

  temperament: {
    traits: [
      "Faithful, dependable, and deeply devoted to its family",
      "Self-confident, calm, and fearless in everyday situations",
      "Alert and watchful guardian that promptly announces visitors",
      "Self-assured and reserved with unfamiliar strangers without shyness",
      "Gentle, patient, and tolerant with familiar children",
      "Strong-willed and independent, requiring confident and consistent handling",
      "Moderate prey drive with a natural instinct to pull and carry heavy loads",
      "Slow to mature both physically and mentally",
      "Protective of its home territory and primary handler",
      "Sociable with other animals when properly socialized, though same-sex dog assertiveness can occur"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 4,
      independence: 3,
      trainability: 3,
      barking: 3,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "Moderate; a remarkably strong draft dog that requires steady, sustained daily activity rather than frantic high-speed running",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Daily brisk walks and moderate trail hikes in cool or temperate weather",
        "Carting, drafting, and structured weight-pulling exercises",
        "Carrying a dog backpack during wilderness treks",
        "Structured obedience and impulse-control drills",
        "Short, low-impact play sessions in a securely fenced yard"
      ]
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush once or twice weekly using a slicker brush and undercoat rake to manage loose hair, increasing to daily brushing during seasonal undercoat shedding.",

      bathing:
        "Bathe every two to three months or when soiled, ensuring the dense double coat is thoroughly dried down to the skin.",

      notes: [
        "Avoid shaving the double coat; it provides vital thermal insulation against both heat and cold.",
        "Inspect and clean the drop ears weekly to prevent wax accumulation and moisture retention.",
        "Trim the thick, fast-growing nails every two to three weeks to maintain correct compact foot alignment.",
        "Provide thick orthopedic bedding to protect heavy joints from pressure sores and elbow calluses.",
        "Brush teeth several times weekly with canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Moderate; highly intelligent and eager to please, but large, powerful, and occasionally stubborn if bored or poorly motivated, requiring calm, assertive leadership",

      tips: [
        "Begin leash training and obedience in early puppyhood before immense adult strength develops.",
        "Use positive reinforcement, food rewards, and calm, consistent boundaries.",
        "Avoid harsh physical corrections which can cause a large, powerful dog to shut down or resist.",
        "Channel draft instincts into structured carting or packing sports once growth plates have fully closed.",
        "Limit high-impact jumping, prolonged stairs, and forced running during the first two years to protect developing giant-breed joints."
      ],

      socialization:
        "Introduce the puppy early, continuously, and positively to diverse people, calm dogs, novel sounds, and urban environments. Extensive socialization ensures the breed's natural guarding instincts mature into calm, discerning vigilance."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cold and snowy winter climates, where the dense double coat excels at providing warmth",
        "Temperate climates",
        "Warm climates require extreme caution; the dog is highly susceptible to heatstroke and needs indoor air conditioning, deep shade, and strictly limited exercise during hot weather"
      ],

      aloneTimeTolerance:
        "Low to moderate; deeply attached to its family and prone to separation anxiety, pacing, or destructive behavior if left isolated for long hours without companionship."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for giant working breeds, with strictly controlled calcium, phosphorus, and caloric ratios for growing puppies.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age, transitioning to two meals daily on a giant-breed growth formula to prevent rapid bone growth.",
      adult:
        "Two measured meals daily to support heavy muscle mass and reduce the volume of food in the stomach at one time, minimizing bloat risk.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output and joint support."
    },

    guidelines:
      "Measure daily rations carefully using a digital kitchen scale or standard measuring cup, adjusting amounts to maintain a lean, athletic body condition where the ribs can be felt through the coat. Divide daily food into two distinct meals, strictly restrict vigorous exercise for at least one hour before and after eating to mitigate bloat risk, and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a lean body condition; excess weight places severe stress on giant-breed hips, elbows, and shoulders.",
      "Avoid rapid puppy growth; strictly avoid calcium supplements unless expressly prescribed by a veterinarian.",
      "Rest the dog before and after meals to mitigate the risk of bloat (gastric dilatation-volvulus).",
      "Use slow-feeder bowls if the dog bolts its food rapidly.",
      "Transition between diet formulas gradually over five to seven days."
    ],

    note:
      "Caloric needs vary significantly based on exercise intensity, draft work, age, and environmental temperature. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Greater Swiss Mountain Dog is a giant, heavy-boned working breed with a typical life expectancy of 8 to 11 years. Primary health considerations focus on managing orthopedic development and preventing gastric dilatation-volvulus (bloat). Key required screenings include radiographic evaluations for hip dysplasia, elbow dysplasia, and shoulder osteochondrosis (OCD), along with annual ophthalmic examinations.",

    commonConditions: [
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints leading to osteoarthritis and stiffness, monitored through pre-breeding radiographic screening",
      "Elbow dysplasia — developmental abnormalities of the elbow joints that can cause forelimb lameness and secondary arthritis",
      "Shoulder Osteochondrosis (OCD) — a developmental disorder of rapidly growing cartilage in the shoulder joint, causing lameness in giant-breed puppies",
      "Gastric dilatation-volvulus (GDV / bloat) — an acute, life-threatening twisting and distension of the stomach, requiring emergency veterinary care",
      "Splenic torsion — twisting of the spleen on its axis, cutting off blood supply, often requiring emergency surgical removal",
      "Idiopathic epilepsy — inherited recurrent neurological seizures, manageable with veterinary anticonvulsant medication",
      "Eye conditions — occasional reports of entropion, distichiasis (extra eyelashes), or cataracts, monitored through certified veterinary eye exams"
    ],

    preventiveCare: [
      "Confirm that breeding stock has certified radiographic clearances for hips, elbows, and shoulders, alongside certified eye examinations.",
      "Feed two smaller meals daily and avoid vigorous exercise immediately before or after eating to mitigate bloat risk.",
      "Maintain a lean body condition throughout growth and adulthood to minimize mechanical wear on joints.",
      "Strictly limit high-impact jumping and forced running until skeletal growth plates close around 18 to 24 months of age.",
      "Provide thick orthopedic bedding to protect heavy joints from elbow hygromas and pressure sores.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation through an accredited national screening program prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "Radiographic shoulder OCD evaluation prior to breeding",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste. The breed has massive jaws with a complete 42-tooth scissor bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the heavy drop ears weekly for wax accumulation, moisture, or redness. Clean gently using a veterinarian-recommended ear solution, drying the leather thoroughly.",

    skinCare:
      "Part the dense double coat weekly during brushing to inspect the skin for external parasites, hot spots, or irritation. Ensure the thick undercoat dries completely after bathing to prevent skin infections."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Experienced dog owners familiar with giant, powerful breeds and positive leadership",
      "Active rural households or suburban homes with large, securely fenced yards",
      "Families with respectful older children seeking a devoted, steady, and impressive guardian",
      "Canine sports enthusiasts interested in carting, drafting, and weight-pulling",
      "Homes in cold or temperate climates"
    ],

    notIdealFor: [
      "First-time dog owners or passive handlers intimidated by immense physical strength",
      "Apartment or condominium dwellers without extensive outdoor space",
      "Individuals seeking a long-distance running or high-speed jogging partner",
      "Owners unable to manage heavy seasonal coat shedding and occasional drooling",
      "Households located in very hot, humid climates without continuous indoor cooling"
    ]
  },

  funFacts: [
    "The Greater Swiss Mountain Dog is the largest and oldest of the four Swiss Sennenhund breeds, which also include the Bernese Mountain Dog, Appenzeller Sennenhund, and Entlebucher Mountain Dog.",
    "Unlike its famous cousin the Bernese Mountain Dog, which has a long, silky coat, the 'Swissy' has a shorter, more practical working double coat designed for demanding farm work.",
    "For centuries, Swissies were known as the 'poor man's horse' because they were affordable, immensely strong draft animals used by merchants and butchers to haul heavy carts laden with dairy and meat over rugged alpine passes.",
    "The breed was famously rescued from near extinction in 1908 by legendary canine expert Professor Albert Heim, who spotted two outstanding short-haired dogs at a show and recognized them as the ancient, vanishing Grosser Schweizer Sennenhund.",
    "Despite its massive size and heavy bone, a fit Swissy possesses remarkable agility and can navigate steep, rocky mountain terrain with confident ease."
  ],

  faq: [
    {
      question: "What is a Greater Swiss Mountain Dog?",
      answer:
        "The Greater Swiss Mountain Dog (often called a Swissy) is a giant, heavy-boned Swiss draft and drover dog, recognized by its striking tricolored coat, immense pulling strength, and calm, dependable family temperament."
    },
    {
      question: "What is the difference between a Greater Swiss Mountain Dog and a Bernese Mountain Dog?",
      answer:
        "While both are tricolored Swiss mountain dogs, the Greater Swiss Mountain Dog is significantly larger, heavier-boned, and has a shorter, denser double coat compared to the Bernese Mountain Dog's long, silky coat."
    },
    {
      question: "How tall and heavy is a Greater Swiss Mountain Dog?",
      answer:
        "Adult males stand 65 to 72 cm at the withers and weigh 115 to 140 pounds, while adult females stand 60 to 68 cm and weigh 85 to 110 pounds, presenting a powerful, giant silhouette."
    },
    {
      question: "How long does a Greater Swiss Mountain Dog live?",
      answer:
        "With proper nutrition, joint care, and preventive veterinary care, the breed typically enjoys a lifespan of 8 to 11 years, which is standard for giant breeds."
    },
    {
      question: "Do Greater Swiss Mountain Dogs shed a lot?",
      answer:
        "Yes, they shed moderately year-round and blow their dense undercoat heavily twice a year. Weekly brushing is essential to manage loose hair, and daily brushing is required during seasonal sheds."
    },
    {
      question: "Can a Greater Swiss Mountain Dog live in an apartment?",
      answer:
        "No. Due to their giant size, deep booming bark, and need for outdoor space, they are entirely unsuited to apartment living and require a home with a securely fenced yard."
    },
    {
      question: "Are Greater Swiss Mountain Dogs good family pets and good with children?",
      answer:
        "Yes, they are exceptionally devoted, patient, and gentle with their own family and older children. However, because of their massive size and strength, interactions with very young toddlers must always be supervised to prevent accidental knock-overs."
    },
    {
      question: "Do Greater Swiss Mountain Dogs drool?",
      answer:
        "They have a low to moderate drooling level. While their lips are relatively tight for a mastiff-type breed, they may drool slightly after drinking water, eating, or during heavy physical exertion."
    },
    {
      question: "How much exercise does a Greater Swiss Mountain Dog need?",
      answer:
        "They require 45 to 60 minutes of moderate, low-impact daily exercise, such as steady trail walks or drafting (cart pulling). Vigorous, high-impact running should be avoided to protect their heavy joints."
    },
    {
      question: "What health screenings are recommended for breeding dogs?",
      answer:
        "Recommended pre-breeding screenings include radiographic evaluations for hip dysplasia, elbow dysplasia, and shoulder osteochondrosis (OCD), along with annual veterinary ophthalmologist eye exams."
    }
  ],

  references: [
    "fci-greater-swiss-mountain-dog-official-standard",
    "fci-greater-swiss-mountain-dog-nomenclature",
    "akc-greater-swiss-mountain-dog-breed-standard",
    "akc-greater-swiss-mountain-dog-breed-profile",
    "ukc-greater-swiss-mountain-dog-breed-standard",
    "gsmdca-greater-swiss-mountain-dog-health",
    "ofa-greater-swiss-mountain-dog-chic-requirements",
    "wikimedia-greater-swiss-mountain-dog-swissy"
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
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "verified",
          locator: "Standard heading: GROSSER SCHWEIZER SENNENHUND (Great Swiss Mountain Dog)"
        },
        {
          id: "fci-greater-swiss-mountain-dog-nomenclature",
          role: "verified",
          locator: "Official nomenclature: GREAT SWISS MOUNTAIN DOG (58), Grand Bouvier Suisse, Gran Boyero Suizo"
        },
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "verified",
          locator: "History: Swissie, GSMD"
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Verified across FCI Standard No. 58, FCI Nomenclature, and AKC."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 2 Pinscher and Schnauzer type, Molossoid breeds, Swiss Mountain and Cattle Dogs; Section 3 Swiss Mountain and Cattle Dogs; without working trial"
        },
        {
          id: "fci-greater-swiss-mountain-dog-nomenclature",
          role: "verified",
          locator: "Group 2, Section 3 Swiss Mountain and Cattle Dogs, without working trial"
        },
        {
          id: "akc-greater-swiss-mountain-dog-breed-standard",
          role: "verified",
          locator: "Working Group"
        },
        {
          id: "ukc-greater-swiss-mountain-dog-breed-standard",
          role: "verified",
          locator: "Guardian Dog Group"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "verified",
          locator: "ORIGIN: Switzerland; BRIEF HISTORICAL SUMMARY"
        },
        {
          id: "fci-greater-swiss-mountain-dog-nomenclature",
          role: "verified",
          locator: "Country of origin: Switzerland"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY (Prof. Albert Heim 1908), GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "verified",
          locator: "About the Breed, History, 'poor man's horse' draft work, and Roles"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Synthesized in original prose from FCI Standard No. 58 and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS, HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE"
        },
        {
          id: "akc-greater-swiss-mountain-dog-breed-standard",
          role: "verified",
          locator: "General Appearance, Size, Proportion, Substance, Head, Coat, Color"
        },
        {
          id: "ukc-greater-swiss-mountain-dog-breed-standard",
          role: "verified",
          locator: "General Appearance, Head, Body, Coat, Color, Height and Weight"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Conformation, 10:9 length-to-height ratio, tricolor coat, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "verified",
          locator: "SIZE: Height at withers for males: 65 - 72 cm; Height at withers for females: 60 - 68 cm."
        },
        {
          id: "akc-greater-swiss-mountain-dog-breed-standard",
          role: "verified",
          locator: "Size: Height at the highest point of the shoulder is ideally: Dogs: 25.5 to 28.5 inches. Bitches: 23.5 to 27 inches."
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Preserved in published unit of centimetres (65 to 72 cm for males, 60 to 68 cm for females) exactly as specified in the official FCI Standard No. 58."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "verified",
          locator: "Weight: 115-140 pounds (male), 85-110 pounds (female)"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "FCI Standard No. 58 does not fix numerical weight values. The stored 115 to 140 pounds for males and 85 to 110 pounds for females represent canonical working ranges published by the AKC, preserved strictly in pounds per Rule 9."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 8-11 years"
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Supported by kennel club actuarial profiles for giant breeds."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (4/5)"
        },
        {
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "verified",
          locator: "COAT: Double coat consisting of thick, of medium length outer coat and dense undercoat"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "verified",
          locator: "Lips: Clean and close fitting. Black pigmentation"
        },
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (2/5)"
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Clean, close-fitting lips produce low to moderate drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Self-confident, alert, watchful and fearless in everyday situations. Good-natured and devoted to people familiar to him. Self-assured with strangers."
        },
        {
          id: "akc-greater-swiss-mountain-dog-breed-standard",
          role: "verified",
          locator: "Temperament: Bold, faithful, willing worker. Alert and vigilant."
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented draft and drover dog temperament, high family affection, and steadfast guarding instincts."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        },
        {
          id: "gsmdca-greater-swiss-mountain-dog-health",
          role: "cited",
          locator: "Exercise limits for growing giant breeds"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active draft dog management with joint-protection and double-coat grooming protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "verified",
          locator: "Energy Level (4/5); Exercise Needs (3/5 to 4/5)"
        },
        {
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "verified",
          locator: "UTILIZATION: Draft and drover dog, with watchful capabilities"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "cited",
          locator: "Daily exercise recommendations"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 45 to 60 minutes of daily activity reflects the moderate, steady exercise demands of a heavy-boned giant draft breed."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "cited",
          locator: "Giant size, loud bark, and need for outdoor space"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial evaluation that giant size, deep alert barking, and space requirements make apartment living generally unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "verified",
          locator: "Exercise and secure fenced-yard recommendations"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "verified",
          locator: "COAT: Dense double coat adapted to Swiss alpine climate"
        },
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "verified",
          locator: "Weather adaptation: excels in cold weather; highly susceptible to heat stress"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "cited",
          locator: "Tolerates Being Alone: Low to moderate; devoted family guardian"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food formulated for giant breeds"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for giant breeds prone to rapid skeletal growth and bloat."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance and divided meals to mitigate bloat"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule for giant breeds."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "gsmdca-greater-swiss-mountain-dog-health",
          role: "verified",
          locator: "Orthopedic challenges (Shoulder OCD, Hips, Elbows), Bloat, Splenic Torsion, and Epilepsy"
        },
        {
          id: "ofa-greater-swiss-mountain-dog-chic-requirements",
          role: "verified",
          locator: "CHIC Program requirements: Hip, Elbow, Shoulder OCD, and Eye evaluations"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Synthesizes parent club veterinary health records with national health registry screening protocols."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "gsmdca-greater-swiss-mountain-dog-health",
          role: "verified",
          locator: "Hip dysplasia, elbow dysplasia, shoulder OCD, bloat, splenic torsion, idiopathic epilepsy, eye conditions"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Details documented genetic and conformational conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "gsmdca-greater-swiss-mountain-dog-health",
          role: "cited",
          locator: "Limit strenuous exercise when young, maintain lean body condition, bloat precautions"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to giant draft dogs."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-greater-swiss-mountain-dog-chic-requirements",
          role: "verified",
          locator: "CHIC Program required screenings: Radiographic Hip Dysplasia evaluation, Radiographic Elbow Dysplasia evaluation, Radiographic Shoulder OCD evaluation, CAER Eye examination"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Screenings summarize published parent club and health registry protocols."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "cited",
          locator: "Jaws/teeth: strong, complete scissor bite"
        },
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "cited",
          locator: "Routine dental care"
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "cited",
          locator: "Ears: medium size, triangular, hanging close to head"
        },
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "cited",
          locator: "Ear hygiene and inspection"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for drop ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "cited",
          locator: "Coat texture and dense undercoat"
        }
      ],
      verifiedOn: null,
      note: "General skin and double-coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        },
        {
          id: "ukc-greater-swiss-mountain-dog-breed-standard",
          role: "cited",
          locator: "Characteristics and working lifestyle suitability"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, giant size, and draft working instincts."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "verified",
          locator: "Largest and oldest of the four Swiss Sennenhunds, 'poor man's horse' history, Professor Albert Heim 1908 revival"
        },
        {
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "verified",
          locator: "Brief historical summary: Albert Heim 1908 exhibition and recognition"
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Verified historical folklore and working heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "verified",
          locator: "Origin, height (65-72 cm / 60-68 cm), coat differences from Bernese Mountain Dog, and colors"
        },
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "verified",
          locator: "Weight (115-140 lbs / 85-110 lbs), lifespan (8-11 years), apartment living, family life, drooling, and exercise"
        },
        {
          id: "ofa-greater-swiss-mountain-dog-chic-requirements",
          role: "verified",
          locator: "Recommended health screening panel (Hips, Elbows, Shoulder OCD, Eyes)"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and health registry data without naming registries in prose."
    }
  },

  updatedOn: "2026-11-13"
};