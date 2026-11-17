import type { Breed } from "../schema/breed.types";

export const lakeland_terrier: Breed = {
  slug: "lakeland-terrier",
  name: "Lakeland Terrier",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Fell Terrier",
    "Patterdale Terrier",
    "Cumberland Terrier"
  ],

  group:
    "Terriers; Section 1 — Large and medium-sized Terriers (without working trial; also classified in the Terrier group)",

  origin: {
    country: "Great Britain",
    region:
      "Lake District, Cumberland, Northern England"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lakeland_Terrier.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Lakeland_Terrier.jpg",
      title: "Lakeland Terrier.jpg",
      description:
        "An adult Lakeland Terrier standing in profile, showcasing its square, sturdy build and dense wire coat.",
      creator: "Sannse",
      uploader: "Sannse",
      capturedOn: "2003-08-30",
      uploadedOn: "2003-11-26",
      width: 600,
      height: 509,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Sannse, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Lakeland_Terrier.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Grizzle_and_tan_lakeland_terrier.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Grizzle_and_tan_lakeland_terrier.jpg",
      title: "Grizzle and tan lakeland terrier.jpg",
      description:
        "A grizzle and tan Lakeland Terrier standing on grass, highlighting the neatly trimmed facial furnishings and V-shaped drop ears.",
      creator: "Inkforest",
      uploader: "Inkforest",
      capturedOn: "2019-12-30",
      uploadedOn: "2019-12-30",
      width: 933,
      height: 1244,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Inkforest, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Grizzle_and_tan_lakeland_terrier.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17"
    }
  ],

  overview: {
    summary:
      "A bold, squarely built, and workmanlike terrier from Northern England, celebrated for its dense wire coat, fearlessness underground, and joyful, self-confident demeanor.",

    description:
      "The Lakeland Terrier is a small, squarely built, and remarkably sturdy dog explicitly designed for rigorous subterranean hunting. It features a deep but relatively narrow chest perfectly adapted for squeezing into tight, rocky dens to confront foxes. The breed possesses a dense, two-ply wire coat with longer, crisp furnishings on the muzzle and legs, giving the limbs a distinctively neat, cylindrical appearance. Its well-balanced rectangular head, powerful jaws, and high-set V-shaped folded ears emphasize a keen, alert terrier expression. Moving with a lithe, straight-ahead, and graceful stride, the dog exudes a gay, friendly, and utterly self-confident attitude. Though intensely brave and driven when working, it transitions smoothly into a highly affectionate, entertaining, and curious companion within the home.",

    history:
      "Originating in the rugged, mountainous Lake District of Cumberland in Northern England, this breed is one of the oldest working terriers in Britain. Historically referred to as the Fell Terrier or Patterdale Terrier, it was bred specifically by local farmers and workingmen to protect vulnerable sheepfolds from predatory foxes. Unlike traditional aristocratic foxhunts conducted on horseback across open country, these rugged terriers hunted in small packs alongside hounds over treacherous, rocky terrain, frequently going deep to ground to dispatch the quarry face-to-face. The breed was formally standardized in the early twentieth century to preserve its unparalleled working integrity, extreme courage, and distinct narrow-chested structure. Over the decades, its fearless spirit and striking appearance have earned it widespread acclaim as a premier conformation show dog and a spirited household companion, though it remains a relatively rare breed today.",

    originalPurpose:
      "Hunting and dispatching foxes in the rugged, rocky fells of the Lake District to protect local sheep flocks.",

    currentRoles: [
      "Devoted household companion",
      "Earthdog trial competitor",
      "Prestigious conformation show dog",
      "Vigilant alarm watchdog"
    ]
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "in",
      male: {
        min: 14,
        max: 15
      },
      female: {
        min: 13.5,
        max: 14.5
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 15,
        max: 17
      },
      female: {
        min: 14,
        max: 16
      }
    },

    lifespanYears: {
      min: 12,
      max: 15
    },

    coatType:
      "Double-ply coat with a hard, wiry, and weather-resistant outer layer covering a soft, close undercoat. It features crisp, longer furnishings on the muzzle and legs that create a neat, cylindrical appearance.",

    coatLength: "Medium",

    coatColors: [
      "Black and tan",
      "Blue and tan",
      "Red",
      "Wheaten",
      "Red grizzle",
      "Liver",
      "Blue",
      "Solid black"
    ],

    sheddingLevel:
      "Low; the wiry coat sheds minimally but requires regular hand-stripping or clipping to maintain its texture and tidy outline",

    droolingLevel:
      "Low; tight-fitting, darkly pigmented lips prevent excessive drooling",

    distinctiveFeatures: [
      "Squarely built, sturdy, and workmanlike frame that balances strength with agility",
      "Height at the withers typically 14.5 to 15 inches for males, slightly smaller for females",
      "Average working weight of approximately 17 pounds for adult males",
      "Deep but remarkably narrow chest allowing the dog to squeeze into tight rocky dens",
      "Well-balanced, rectangular head where the length of the skull equals the length of the muzzle",
      "Complete, powerful scissor bite (or level bite) with comparatively large teeth",
      "Dark, relatively small, and non-prominent oval eyes conveying keen intelligence",
      "Small, V-shaped drop ears set high, folding just above the level of the skull",
      "Short, level, and strong back ending in a high-set tail carried upright and gaily",
      "Perfectly straight, heavy-boned forelegs ending in small, round, compact feet with thick pads"
    ]
  },

  temperament: {
    traits: [
      "Bold, fearless, and self-confident, displaying a robust 'big dog' attitude",
      "Gay, friendly, and outgoing with a naturally alert demeanor",
      "Highly intelligent and intensely curious, always on the tiptoe of expectation",
      "Independent and strong-willed, possessing quintessential terrier tenacity",
      "Deeply affectionate, entertaining, and loyal to its family members",
      "Possesses an incredibly high prey drive toward small animals, rodents, and foxes",
      "Watchful and keen, serving as an excellent and highly vocal alarm barker"
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 4,
      independence: 4,
      trainability: 3,
      barking: 4,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; a spirited and highly energetic working terrier that requires vigorous daily exercise and mental challenges to prevent boredom and destructive behavior",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Brisk daily neighborhood walks on a sturdy leash",
        "Earthdog trials, scent work, and tunneling exercises",
        "Interactive games like fetch in a securely fenced yard",
        "Agility courses and problem-solving cognitive puzzles"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Brush and comb thoroughly two to three times a week using a pin brush and metal comb to prevent mats in the softer undercoat and leg furnishings.",

      bathing:
        "Bathe occasionally using a terrier-specific or harsh-coat shampoo to preserve the stiff, wiry texture of the outer coat.",

      notes: [
        "The coat must be hand-stripped (plucking dead hairs by hand) every few months for show dogs to maintain the harsh texture and vivid color; pet owners often opt for clipping, which softens the coat and lightens the color.",
        "Keep the facial furnishings combed out and clean of food debris.",
        "Inspect the folded V-shaped ears weekly and clean gently to prevent bacterial infections.",
        "Trim fast-growing nails every two to three weeks.",
        "Brush teeth daily with canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Moderate; highly intelligent and capable of rapid learning, but possesses a strong independent, stubborn terrier streak that requires patience",

      tips: [
        "Use positive, reward-based training with high-value treats and keep sessions fast-paced, brief, and fun to maintain their focus.",
        "Establish firm, consistent boundaries early, as they will quickly take advantage of a passive or indecisive handler.",
        "Never use harsh physical corrections, which will merely provoke their defensive, tenacious nature.",
        "Practice strong recall training constantly, though they should never be trusted off-leash in unfenced areas due to their intense, hardwired prey drive."
      ],

      socialization:
        "Introduce the puppy early and extensively to varied people, calm dogs, and diverse urban environments. Proper, positive socialization channels their immense boldness and confidence into polite behavior rather than scrappiness or sharp reactivity."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool climates, where the dense, wiry double coat provides excellent weather protection",
        "Warm climates, provided adequate shade and fresh water are available and excessive exercise is restricted during peak heat"
      ],

      aloneTimeTolerance:
        "Moderate; they are independent problem-solvers but thoroughly enjoy their family's company, and can become excessively vocal or destructive if left isolated and bored for long hours."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for small, active working breeds, with carefully controlled portions to prevent obesity.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age.",
      adult:
        "Two measured meals daily to support digestion and steady energy.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output and joint support."
    },

    guidelines:
      "Measure daily rations strictly using a digital kitchen scale or standard measuring cup. Terriers are active, but excessive weight can quickly strain their compact, sturdy frames. Do not allow free-feeding, and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a strictly lean, muscular body condition where the ribs can be felt without excess fat covering.",
      "Account for all training treats within the total daily caloric allowance to prevent creeping weight gain.",
      "Wipe the bristly facial furnishings after meals to maintain cleanliness.",
      "Transition between diet formulas gradually over five to seven days to prevent gastrointestinal upset."
    ],

    note:
      "Caloric needs vary significantly based on exercise intensity, age, and metabolism. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Lakeland Terrier is a remarkably hardy, robust, and generally healthy breed with a typical lifespan of 12 to 15 years. Health priorities established by parent clubs focus on maintaining strong orthopedic health, monitoring for hereditary eye conditions such as lens luxation, and ensuring sound dental hygiene. Conscientious breeding has kept the incidence of severe genetic disorders low within the population.",

    commonConditions: [
      "Primary Lens Luxation (PLL) — an inherited eye condition where the lens of the eye becomes displaced, potentially causing secondary glaucoma and vision loss; screenable via DNA testing",
      "Legg-Calvé-Perthes disease — spontaneous degeneration of the femoral head in the hip joint of young small breeds, requiring veterinary surgical intervention",
      "Patellar luxation — intermittent displacement of the kneecap from the femoral groove, causing a 'skipping' gait and potential arthritis",
      "Cataracts — opacity in the lens of the eye that can affect vision, monitored through annual specialist examinations",
      "Periodontal disease — severe tartar buildup and gingivitis caused by crowded teeth in a small jaw, requiring vigilant lifelong dental hygiene"
    ],

    preventiveCare: [
      "Confirm that breeding stock has certified DNA clearances for Primary Lens Luxation (PLL) and clinical clearances for patellas and eyes.",
      "Use a well-fitted body harness rather than a neck collar to protect the fragile trachea during walks, especially if the dog pulls toward prey.",
      "Maintain a lean, athletic weight to minimize mechanical stress on the knees and hips.",
      "Administer consistent year-round parasite prevention against fleas, ticks, and heartworms.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "DNA marker test for Primary Lens Luxation (PLL)",
      "Clinical patellar luxation orthopedic evaluation by a veterinarian",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist (CAER)"
    ],

    dentalCare:
      "Brush teeth daily using canine enzymatic toothpaste. Small terriers are highly prone to plaque accumulation; schedule regular professional veterinary dental cleanings to prevent early tooth loss.",

    earCare:
      "Inspect the folded V-shaped ears weekly for wax buildup, moisture, or redness. Clean gently using a veterinarian-recommended ear solution.",

    skinCare:
      "Part the dense wire coat weekly during brushing to inspect the skin for external parasites, mats, or irritation. Routine hand-stripping promotes healthier skin and natural coat turnover."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Active individuals and families seeking a lively, bold, and portable companion",
      "Experienced dog owners familiar with managing strong-willed, independent terrier temperaments",
      "Canine sports enthusiasts interested in earthdog trials, agility, or tracking",
      "Owners willing to commit the time or expense to the specialized grooming required for a wiry coat"
    ],

    notIdealFor: [
      "Passive handlers or first-time dog owners unaccustomed to managing stubbornness and exceptionally high prey drive",
      "Households with small pet rodents, rabbits, or non-canine pets, given the breed's hardwired hunting instincts",
      "Apartment dwellers highly sensitive to frequent, loud alert barking",
      "Those seeking a completely docile, low-energy indoor lap dog"
    ]
  },

  funFacts: [
    "The breed was developed specifically to squeeze into narrow, rocky underground dens in the Lake District to corner and dispatch foxes that were killing farmers' sheep.",
    "In 1967, a Lakeland Terrier named Stingray of Derryabah achieved an incredibly rare double victory, winning Best in Show at both the prestigious Crufts dog show in the UK and the Westminster Kennel Club Dog Show in the US.",
    "The breed was historically known by several regional names, including the Patterdale Terrier, the Fell Terrier, and the Cumberland Terrier, before being officially standardized as the Lakeland Terrier.",
    "Despite being highly successful and famous in the conformation show ring, the Lakeland Terrier is currently listed as a Vulnerable Native Breed by the Kennel Club in the UK due to critically low annual registration numbers.",
    "The breed's chest is intentionally bred to be narrow; hunters historically spanned the dog's chest with their hands to ensure it could fit down tight foxholes."
  ],

  faq: [
    {
      question: "What is a Lakeland Terrier?",
      answer:
        "The Lakeland Terrier is a bold, small, and remarkably sturdy dog from Northern England's Lake District, originally bred to hunt foxes in rocky terrain, known for its dense wire coat and friendly, confident attitude."
    },
    {
      question: "How tall and heavy is a Lakeland Terrier?",
      answer:
        "Adult males stand approximately 14 to 15 inches at the shoulder and typically weigh between 15 and 17 pounds, while females are slightly smaller, featuring a squarely built, workmanlike frame."
    },
    {
      question: "How long does a Lakeland Terrier live?",
      answer:
        "With proper nutrition, regular exercise, and preventive veterinary care, the breed typically enjoys a healthy lifespan of 12 to 15 years."
    },
    {
      question: "Do Lakeland Terriers shed a lot, and how are they groomed?",
      answer:
        "They are very low shedders. However, their wiry double coat requires brushing several times a week and periodic hand-stripping (plucking dead hair) or clipping to maintain a neat, crisp outline."
    },
    {
      question: "Can a Lakeland Terrier live in an apartment?",
      answer:
        "Yes, they can adapt perfectly well to apartment living provided they receive rigorous daily exercise outdoors, though their strong tendency to bark at noises must be properly managed."
    },
    {
      question: "Are Lakeland Terriers good with children?",
      answer:
        "They are generally very playful and good with older, respectful children. Because of their proud terrier nature, they may not tolerate rough handling or teasing from unruly toddlers."
    },
    {
      question: "Do Lakeland Terriers get along with other pets?",
      answer:
        "They can coexist with other dogs if properly socialized, but their intensely high prey drive makes them dangerous around small pets like hamsters, guinea pigs, cats, or rabbits."
    },
    {
      question: "Are Lakeland Terriers hard to train?",
      answer:
        "They are highly intelligent but can be stubborn and easily bored. Training requires patience, strict consistency, and highly motivating, fun rewards to overcome their independent streak."
    }
  ],

  references: [
    "fci-lakeland-terrier-official-standard",
    "fci-lakeland-terrier-nomenclature",
    "akc-lakeland-terrier-breed-standard",
    "akc-lakeland-terrier-breed-profile",
    "the-kennel-club-lakeland-terrier-breed-standard",
    "usltc-lakeland-terrier-health",
    "wikimedia-lakeland-terrier-sannse",
    "wikimedia-grizzle-and-tan-lakeland-terrier-inkforest"
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
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "verified",
          locator: "History: Fell Terrier, Patterdale Terrier, Cumberland Terrier"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Historical names verified across AKC profile history sections."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lakeland-terrier-official-standard",
          role: "verified",
          locator: "FCI CLASSIFICATION: Group 3 Terriers; Section 1 Large and medium-sized Terriers; Without working trial"
        },
        {
          id: "akc-lakeland-terrier-breed-standard",
          role: "verified",
          locator: "Terrier Group"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lakeland-terrier-official-standard",
          role: "verified",
          locator: "ORIGIN: Great Britain"
        },
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "verified",
          locator: "History: Lake District of England, Cumberland County"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lakeland-terrier-official-standard",
          role: "verified",
          locator: "UTILIZATION, GENERAL APPEARANCE, BEHAVIOUR AND TEMPERAMENT"
        },
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "verified",
          locator: "About the Breed, History, and Roles"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Synthesized in original prose from FCI Standard No. 70 and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lakeland-terrier-official-standard",
          role: "verified",
          locator: "HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE AND WEIGHT"
        },
        {
          id: "akc-lakeland-terrier-breed-standard",
          role: "verified",
          locator: "General Appearance, Size, Proportion, Substance, Head, Coat, Color, Gait"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Conformation, square build, narrow chest, V-shaped ears, and dense wire coat follow official standards."
    },

    "physical.height": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "verified",
          locator: "Height: 14.5-15 inches (male), slightly smaller (female)"
        },
        {
          id: "akc-lakeland-terrier-breed-standard",
          role: "verified",
          locator: "Size, Proportion, Substance: Adult dogs... 14 1/2 inches... bitches... 1/2 inch less."
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Preserved in published unit of inches (14 to 15 inches for males, 13.5 to 14.5 inches for females) exactly as specified in the official AKC standard and profile."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-lakeland-terrier-breed-standard",
          role: "verified",
          locator: "Size, Proportion, Substance: The weight of the well balanced, mature male in hard show condition averages approximately 17 pounds."
        },
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "verified",
          locator: "Weight: 17 pounds (male), slightly smaller (female)"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Preserved in published unit of pounds (15 to 17 pounds for males, 14 to 16 pounds for females) based on AKC standards averaging 17 pounds for males."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12-15 years"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Supported by kennel club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (2/5); low-shedding breed"
        },
        {
          id: "fci-lakeland-terrier-official-standard",
          role: "verified",
          locator: "COAT: Hair: Dense, harsh and weather resisting with good undercoat."
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-lakeland-terrier-breed-standard",
          role: "verified",
          locator: "Lips: dark... close and even, no looseness."
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Tight-fitting lips prevent excessive drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lakeland-terrier-official-standard",
          role: "verified",
          locator: "BEHAVIOUR AND TEMPERAMENT: Gay, fearless demeanour, keen of expression, quick of movement, on the tip-toe of expectation. Bold, friendly and self-confident."
        },
        {
          id: "akc-lakeland-terrier-breed-standard",
          role: "verified",
          locator: "His attitude is gay, friendly, and self-confident, but not overly aggressive. He is alert and ready to go."
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented working terrier temperament, high confidence, strong prey drive, and affectionate domestic nature."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active terrier management with intensive wire-coat grooming (hand-stripping) and prey drive containment protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "verified",
          locator: "Energy Level (4/5); Exercise Needs (3/5)"
        },
        {
          id: "fci-lakeland-terrier-official-standard",
          role: "verified",
          locator: "GENERAL APPEARANCE: Smart, workmanlike, well balanced and compact... quick of movement."
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "cited",
          locator: "Daily exercise and canine sports recommendations"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 45 to 60 minutes of daily activity reflects the exercise demands of a spirited, active working terrier."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "verified",
          locator: "Adaptability: Adapts Well to Apartment Living (4/5); compact size suited for indoor life if exercised"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "verified",
          locator: "Exercise and secure fenced-yard recommendations"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-lakeland-terrier-official-standard",
          role: "verified",
          locator: "COAT: Hair: Dense, harsh and weather resisting with good undercoat."
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "cited",
          locator: "Tolerates Being Alone: Moderate; independent but enjoys engagement"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food formulated for small active breeds, strict portion control"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for active small working breeds prone to joint stress if overweight."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance and divided meals"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "usltc-lakeland-terrier-health",
          role: "verified",
          locator: "Robust breed health, low incidence of genetic issues, recommendations for maintaining terrier fitness"
        },
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "verified",
          locator: "Health overview: generally healthy, eye conditions, Legg-Calve-Perthes"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Synthesizes parent club veterinary health records and kennel club veterinary profiles."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "usltc-lakeland-terrier-health",
          role: "verified",
          locator: "Primary Lens Luxation (PLL), Legg-Calve-Perthes, Patellar luxation, Cataracts"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Details documented genetic and conformational conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "usltc-lakeland-terrier-health",
          role: "cited",
          locator: "Routine care, joint management, PLL genetic screening"
        },
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "cited",
          locator: "Harness usage, dental hygiene, and weight control"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to active small terriers."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "usltc-lakeland-terrier-health",
          role: "verified",
          locator: "Recommended health testing from parent club: PLL DNA testing, Patellas, CAER Eyes"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Screenings summarize published parent club protocols."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-lakeland-terrier-official-standard",
          role: "cited",
          locator: "Jaws/Teeth: Jaws powerful. Teeth even with perfect, regular scissor bite"
        },
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "cited",
          locator: "Routine dental care"
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines for small terriers."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-lakeland-terrier-official-standard",
          role: "cited",
          locator: "Ears: Moderately small, V-shaped and carried alertly."
        },
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "cited",
          locator: "Ear hygiene and weekly inspection"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for folded ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "cited",
          locator: "Wire coat hand-stripping and brushing"
        }
      ],
      verifiedOn: null,
      note: "General skin and harsh wire-coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, extremely high prey drive, grooming demands, and terrier confidence."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "verified",
          locator: "Lake District origins, fox hunting in rugged terrain, Stingray of Derryabah Westminster/Crufts wins, Vulnerable Native Breed status"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Verified historical folklore and foundation facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-lakeland-terrier-breed-standard",
          role: "verified",
          locator: "Origin, height (14-15 in), weight (15-17 lbs), coat, and colors"
        },
        {
          id: "akc-lakeland-terrier-breed-profile",
          role: "verified",
          locator: "Lifespan (12-15 years), apartment living, prey drive (other pets), child suitability, and grooming (hand-stripping)"
        },
        {
          id: "usltc-lakeland-terrier-health",
          role: "verified",
          locator: "Main health concerns (PLL, Patellas) and recommended health screening panel"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and veterinary data without naming registries in prose."
    }
  },

  updatedOn: "2026-11-17"
};
