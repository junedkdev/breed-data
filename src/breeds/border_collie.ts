import type { Breed } from "../schema/breed.types";

export const border_collie: Breed = {
  slug: "border-collie",
  name: "Border Collie",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Scottish Sheepdog",
    "Working Collie"
  ],

  group:
    "Sheepdogs and Cattledogs (except Swiss Cattle Dogs); Section 1 — Sheepdogs (with working trial; also classified in the Herding group)",

  origin: {
    country: "Great Britain",
    region: "Anglo-Scottish border"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Border_Collie_portrait.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Border_Collie_portrait.jpg",
      title: "Border Collie portrait.jpg",
      description:
        "A classic black and white Border Collie in an outdoor setting, displaying the breed's keen, intelligent expression and semi-erect ears.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2018-05-14",
      uploadedOn: "2018-05-14",
      width: 2500,
      height: 1667,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Border_Collie_portrait.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Border_Collie_working.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Border_Collie_working.jpg",
      title: "Border Collie working.jpg",
      description:
        "An agile Border Collie in a low, crouching stance, intensely focused while working in a grassy field.",
      creator: "Sannse",
      uploader: "Sannse",
      capturedOn: "2004-10-12",
      uploadedOn: "2004-10-12",
      width: 800,
      height: 600,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Sannse, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Border_Collie_working.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17"
    }
  ],

  overview: {
    summary:
      "A highly energetic, athletic, and fiercely intelligent sheepdog famous for its intense, hypnotic stare used to control livestock, making it a premier working dog and canine sports champion.",

    description:
      "The Border Collie is a well-balanced, medium-sized working dog that radiates grace, agility, and immense stamina. Built specifically for tireless activity, it possesses a lithe, muscular frame capable of sudden bursts of speed and remarkable changes of direction. The breed is most famous for its 'intense eye'—a deeply focused, hypnotic stare it uses while crouching low to the ground to silently command and move flocks of sheep. It comes in two distinct coat varieties (rough and smooth), both featuring a dense, weather-resisting undercoat. While black and white is the most iconic coloration, they appear in a wide array of patterns and colors. Renowned worldwide as perhaps the most intelligent and trainable of all canine breeds, the Border Collie is a workaholic that absolutely demands a purposeful 'job' to remain mentally and physically stable. It is an affectionate and incredibly observant companion, but its explosive energy and deeply hardwired herding instincts require a highly active, dedicated handler.",

    history:
      "The Border Collie was forged in the rugged, hilly landscape along the border of Scotland and England, an environment that demanded an exceptionally resilient and intelligent sheepdog. For centuries, local shepherds relied on agile, medium-sized collies to gather and manage large flocks over vast, unfenced moorlands. The modern breed's lineage is often traced back to a single legendary progenitor named Old Hemp, a quiet, intensely focused working dog born in 1893 who perfectly demonstrated the breed's signature 'eye' and stealthy, crouching herding style. Recognizing their unparalleled utility, shepherds favored performance and working ability above all else, ensuring the breed remained largely unchanged by the cosmetic exaggerations of the conformation show ring for many decades. Today, the Border Collie remains the world's premier sheep-herding breed and dominates high-level canine sports such as agility, obedience, and flyball across the globe.",

    originalPurpose:
      "Gathering, controlling, and moving flocks of sheep over rugged terrain using a specialized crouching stance and an intense, hypnotic stare.",

    currentRoles: [
      "Premier livestock herding dog",
      "Elite canine sports competitor (agility, flyball, obedience)",
      "Search and rescue dog",
      "Highly active household companion"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "in",
      male: {
        min: 19,
        max: 22
      },
      female: {
        min: 18,
        max: 21
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 30,
        max: 55
      },
      female: {
        min: 30,
        max: 55
      }
    },

    lifespanYears: {
      min: 12,
      max: 15
    },

    coatType:
      "Exists in two varieties: Rough (medium length and flat) and Smooth (short). Both feature a dense, weather-resisting undercoat and a close-fitting outer coat. Rough coats feature a noticeable mane, breeches, and a plumed tail.",

    coatLength: "Varies",

    coatColors: [
      "Black and white",
      "Red (brown/chocolate) and white",
      "Blue merle",
      "Red merle",
      "Sable",
      "Tri-color (black, white, and tan points)",
      "Any color is acceptable, but white should never be the predominant color"
    ],

    sheddingLevel:
      "Moderate to high; the dense double coat sheds steadily year-round and requires regular brushing to manage the heavier seasonal 'blow' of the undercoat",

    droolingLevel:
      "Low; tightly fitting lips prevent excessive drooling",

    distinctiveFeatures: [
      "Athletic, slightly rectangular build (the body is slightly longer than the height at the withers)",
      "Height typically ranges from 19 to 22 inches for males and 18 to 21 inches for females",
      "Weight generally falls between 30 and 55 pounds, kept in lean, hard working condition",
      "Broad, flat skull with a distinct stop and a strong, moderately short muzzle",
      "Complete, powerful scissor bite",
      "Medium-sized, oval eyes set wide apart, projecting a highly intense, intelligent, and piercing expression (often blue in merle dogs)",
      "Medium-sized, highly mobile ears carried erect or semi-erect (tipped over)",
      "Deep chest reaching the elbows, accommodating massive lung capacity for endurance",
      "Low-set, moderately long tail featuring an upward swirl at the tip, never carried tightly over the back",
      "Smooth, effortless, and highly stealthy gait with minimum lifting of the feet"
    ]
  },

  temperament: {
    traits: [
      "Incredibly intelligent, highly focused, and intensely driven to work",
      "Eager to learn and remarkably responsive to complex commands",
      "Extremely energetic and athletic, possessing virtually limitless stamina",
      "Deeply loyal and affectionate with its immediate family",
      "Can be reserved, aloof, or cautious with strangers, making an alert watchdog",
      "Possesses a profound, hardwired herding instinct, often attempting to corral children, pets, or even moving vehicles",
      "Highly sensitive to sound, motion, and its handler's body language",
      "Prone to obsessive-compulsive behaviors (like staring at lights or shadows) if chronically bored or under-exercised"
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 3,
      independence: 3,
      trainability: 5,
      barking: 3,
      energy: 5
    }
  },

  care: {
    exercise: {
      level:
        "Very high; a true workaholic that requires massive amounts of vigorous physical exertion and complex mental challenges to remain sane and balanced",

      minutesPerDay: {
        min: 90,
        max: 120
      },

      activities: [
        "Long-distance trail running, intense hiking, or biking alongside a handler",
        "Advanced canine sports training (agility, flyball, competitive obedience)",
        "Herding clinics and livestock management tasks",
        "Interactive fetch and frisbee sessions in large open spaces",
        "Complex problem-solving puzzles and continuous trick training"
      ]
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush two to three times a week using a slicker brush and metal comb to remove dead undercoat, prevent tangles in the feathering (for rough coats), and distribute healthy skin oils.",

      bathing:
        "Bathe only when visibly dirty; the weather-resistant coat naturally repels mud and dirt once it dries.",

      notes: [
        "Pay special attention to the feathering on the legs, belly, and tail to prevent painful matting.",
        "Inspect the ears weekly for dirt, debris, or wax buildup.",
        "Trim fast-growing nails every two weeks to support their agile, quick-turning movements.",
        "Brush teeth several times weekly with canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Moderate to challenging; while they are exceptionally quick learners, their intense intelligence means they also learn bad habits instantly and require an expert, active handler to provide constant direction",

      tips: [
        "Provide a concrete 'job' every single day; without purposeful work, they will invent their own (often destructive or obsessive) jobs.",
        "Use positive, reward-based training with high-value toys or fetch as the primary motivator.",
        "Actively manage their extreme herding instinct; they must be taught from puppyhood that chasing cars, bicycles, or children is strictly forbidden.",
        "Incorporate advanced trick training and obedience to thoroughly exhaust their highly active minds."
      ],

      socialization:
        "Extensive, continuous socialization is absolutely mandatory. Because they are hyper-aware of environmental changes and movement, early positive exposure to diverse sounds, people, and objects is necessary to prevent them from becoming sound-sensitive or neurotically reactive."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool climates, where the dense double coat provides excellent insulation",
        "Warm climates are tolerated, but intense exercise must be strictly limited to cooler morning or evening hours to prevent heat exhaustion"
      ],

      aloneTimeTolerance:
        "Low; they are deeply devoted to their handlers and require nearly constant physical and mental engagement. Leaving a Border Collie isolated and bored in a backyard is a recipe for severe behavioral problems."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for highly active, medium-sized working breeds.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age.",
      adult:
        "Two measured meals daily to support steady digestion and fuel intense activity.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output and joint support."
    },

    guidelines:
      "Measure daily rations strictly using a digital kitchen scale or standard measuring cup. Adjust amounts based on their daily work output; active competing athletes require significantly higher caloric and protein density than a standard household pet. Provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a strictly lean, athletic body condition to minimize mechanical stress on joints during high-speed turns and jumping.",
      "Account for all training treats within the total daily caloric allowance.",
      "Performance dogs may benefit from diets specifically enriched with omega-3 fatty acids for coat health and joint lubrication.",
      "Avoid feeding a large meal immediately before strenuous exercise to mitigate the risk of gastric issues."
    ],

    note:
      "Caloric needs fluctuate dramatically based on exercise intensity, age, and training schedule. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Border Collie is a robust and highly athletic breed with a typical lifespan of 12 to 15 years. However, they are predisposed to several inherited genetic conditions, particularly concerning their eyes and neurological systems. Dedicated breeding programs utilize extensive DNA testing and orthopedic screening to minimize the prevalence of these diseases.",

    commonConditions: [
      "Collie Eye Anomaly (CEA) — an inherited, congenital condition causing defects in the formation of the eye, ranging from mild to severe vision loss; completely screenable via DNA testing",
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints leading to osteoarthritis, monitored through pre-breeding radiographic screening",
      "Trapped Neutrophil Syndrome (TNS) — a fatal hereditary disease where the bone marrow cannot release white blood cells into the bloodstream, impairing the immune system; screenable via DNA testing",
      "Multidrug Resistance 1 (MDR1) mutation — a genetic sensitivity to certain common veterinary medications (like ivermectin), requiring DNA testing to prevent toxic reactions",
      "Epilepsy — inherited neurological seizure disorders that typically manifest in early adulthood and require lifelong veterinary management",
      "Congenital deafness — occasionally associated with the merle or excessive white coat patterns, verifiable through BAER testing"
    ],

    preventiveCare: [
      "Confirm that breeding stock has certified DNA clearances for CEA, TNS, and MDR1, along with clinical clearances for hips and eyes.",
      "If the dog's MDR1 status is unknown or affected, strictly avoid certain anti-parasitic medications and anesthetics as advised by a veterinarian.",
      "Maintain a lean, well-muscled body condition to minimize mechanical wear on the hips and elbows during high-impact sports.",
      "Administer consistent year-round parasite prevention against fleas, ticks, and heartworms.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "DNA marker test for Collie Eye Anomaly (CEA)",
      "DNA marker test for Trapped Neutrophil Syndrome (TNS)",
      "DNA marker test for MDR1 medication sensitivity",
      "Radiographic hip dysplasia evaluation through an accredited national screening program prior to breeding",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist (CAER)",
      "Brainstem Auditory Evoked Response (BAER) hearing evaluation for puppies"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste. The breed has powerful jaws and a complete scissor bite; periodic veterinary dental assessments preserve long-term gum health.",

    earCare:
      "Inspect the highly mobile ears weekly for dirt, wax buildup, or redness. Clean gently using a veterinarian-recommended ear solution.",

    skinCare:
      "Part the dense double coat weekly during brushing to inspect the skin for external parasites, ticks, or burrs sustained during outdoor work."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: false,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Highly active individuals, runners, and hikers willing to commit massive amounts of time to daily exercise",
      "Experienced dog owners familiar with managing extreme working drive, high intelligence, and obsessive behaviors",
      "Canine sports enthusiasts heavily involved in agility, flyball, herding, or competitive obedience",
      "Rural households, ranches, or farms with expansive, securely fenced acreage and actual livestock to manage"
    ],

    notIdealFor: [
      "First-time dog owners or passive handlers unequipped to manage extreme intelligence and boundless energy",
      "Apartment, condominium, or dense urban dwellers where unavoidable noise and lack of space will cause the dog immense stress",
      "Households looking for a calm, low-energy indoor pet or a highly submissive lap dog",
      "Families with toddlers or young children who may be frightened by the dog's hardwired instinct to nip at heels and herd them"
    ]
  },

  funFacts: [
    "The Border Collie is widely considered by canine behavioral scientists and experts to be the most intelligent dog breed in the world, capable of learning hundreds of distinct words and commands.",
    "A famous Border Collie named Chaser achieved global recognition for successfully learning and identifying the names of over 1,000 different toys.",
    "Unlike other herding breeds that nip and bark to move livestock, the Border Collie uses a unique predatory crouch and a hypnotic, intense stare known as 'the eye' to silently intimidate and control sheep.",
    "The modern breed traces almost its entire lineage back to a single dog named Old Hemp, born in Northumberland in 1893, who possessed a brilliant, quiet herding style that revolutionized the working sheepdog.",
    "Because they are so intensely driven by motion, a bored Border Collie will often try to 'herd' moving objects like bicycles, cars, or even shadows, which can lead to dangerous situations if unmanaged."
  ],

  faq: [
    {
      question: "What is a Border Collie?",
      answer:
        "The Border Collie is a medium-sized, highly athletic working sheepdog from the Anglo-Scottish border, globally recognized as the most intelligent and energetic breed, famous for its intense herding stare."
    },
    {
      question: "How tall and heavy is a Border Collie?",
      answer:
        "Adult males stand 19 to 22 inches at the withers, while females stand 18 to 21 inches. Both sexes are kept in lean, athletic condition and typically weigh between 30 and 55 pounds."
    },
    {
      question: "How long does a Border Collie live?",
      answer:
        "With proper nutrition, extensive daily exercise, and preventive veterinary care, the breed typically enjoys a healthy lifespan of 12 to 15 years."
    },
    {
      question: "Do Border Collies shed a lot, and how are they groomed?",
      answer:
        "They are moderate to high shedders. Their dense, weather-resistant double coat requires brushing two to three times a week to prevent matting in the longer feathering and to manage seasonal shedding."
    },
    {
      question: "Can a Border Collie live in an apartment?",
      answer:
        "Absolutely not. They are hyper-active workaholics that require vast amounts of open space, vigorous running, and constant mental stimulation; they will become highly destructive and neurotic in a small apartment."
    },
    {
      question: "Are Border Collies good with children?",
      answer:
        "They can be, provided the children are older and respectful. However, their intense hardwired herding instinct often drives them to chase and nip at the heels of running toddlers, making them less suited for families with very young children."
    },
    {
      question: "Are Border Collies hard to train?",
      answer:
        "They are exceptionally easy to train for complex tasks because of their brilliance, but they are difficult to live with if you are inexperienced. Because they learn so quickly, they also learn bad habits instantly and require an expert, deeply engaged handler."
    },
    {
      question: "What are the main health concerns for a Border Collie?",
      answer:
        "Primary health concerns include genetic eye disorders like Collie Eye Anomaly (CEA), medication sensitivity (MDR1 mutation), Trapped Neutrophil Syndrome (TNS), epilepsy, and hip dysplasia."
    }
  ],

  references: [
    "fci-border-collie-official-standard",
    "fci-border-collie-nomenclature",
    "akc-border-collie-breed-standard",
    "akc-border-collie-breed-profile",
    "ofa-border-collie-chic-requirements",
    "bcsa-border-collie-health",
    "wikimedia-border-collie-portrait-canarian",
    "wikimedia-border-collie-working-sannse"
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
          id: "akc-border-collie-breed-profile",
          role: "verified",
          locator: "History: Scottish Sheepdog, Working Collie"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Historical names verified via AKC profile history sections."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-border-collie-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 1 Sheepdogs and Cattledogs (except Swiss Cattle Dogs); Section 1 Sheepdogs; With working trial"
        },
        {
          id: "akc-border-collie-breed-standard",
          role: "verified",
          locator: "Herding Group"
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
          id: "fci-border-collie-official-standard",
          role: "verified",
          locator: "ORIGIN: Great Britain"
        },
        {
          id: "akc-border-collie-breed-profile",
          role: "verified",
          locator: "History: Anglo-Scottish border"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-border-collie-official-standard",
          role: "verified",
          locator: "UTILIZATION, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "akc-border-collie-breed-profile",
          role: "verified",
          locator: "About the Breed, History (Old Hemp), and Roles (Agility, Herding)"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Synthesized in original prose from FCI Standard No. 297 and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-border-collie-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS, HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE AND WEIGHT"
        },
        {
          id: "akc-border-collie-breed-standard",
          role: "verified",
          locator: "General Appearance, Size, Proportion, Substance, Head, Coat, Color, Gait"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Conformation, athletic build, 'intense eye', two coat varieties, and diverse colors follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-border-collie-breed-standard",
          role: "verified",
          locator: "Size, Proportion, Substance: The height at the withers varies from 19 to 22 inches for males, 18 to 21 inches for females."
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Preserved in published unit of inches (19 to 22 inches for males, 18 to 21 inches for females) exactly as specified in the official AKC standard. (FCI Standard No. 297 lists an ideal height of 53 cm for males, with females slightly less)."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-border-collie-breed-profile",
          role: "verified",
          locator: "Weight: 30-55 pounds"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Preserved in published unit of pounds (30 to 55 pounds) exactly as specified in the official AKC breed profile. The standard mandates weight proportionate to height."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-border-collie-breed-profile",
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
          id: "akc-border-collie-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (3/5)"
        },
        {
          id: "fci-border-collie-official-standard",
          role: "verified",
          locator: "COAT: Two varieties... both have a soft, dense and weather-resisting undercoat."
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-border-collie-official-standard",
          role: "verified",
          locator: "Lips: Tight, fitting, with dark pigmentation."
        },
        {
          id: "akc-border-collie-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (1/5)"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Tight-fitting lips prevent excessive drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-border-collie-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Tenacious, hard-working, of great tractability. Keen, alert, responsive and intelligent. Neither nervous nor aggressive."
        },
        {
          id: "akc-border-collie-breed-standard",
          role: "verified",
          locator: "Temperament: Intelligent, alert, and highly responsive. An intense worker... affectionate towards friends but may be sensibly reserved towards strangers."
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-border-collie-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented working herding temperament, supreme trainability, hyper-alert energy, and strong herding instincts."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-border-collie-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        }
      ],
      verifiedOn: null,
      note:
        "Combines extremely active sheepdog management with moderate double-coat grooming protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-border-collie-breed-profile",
          role: "verified",
          locator: "Energy Level (5/5); Exercise Needs (5/5)"
        },
        {
          id: "fci-border-collie-official-standard",
          role: "verified",
          locator: "UTILIZATION: Sheepdog... highly active."
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-border-collie-breed-profile",
          role: "cited",
          locator: "Daily exercise and canine sports recommendations"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 90 to 120 minutes of daily activity reflects the extreme exercise demands of a highly athletic, workaholic sheepdog."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-border-collie-breed-profile",
          role: "cited",
          locator: "Adaptability: Adapts Well to Apartment Living (2/5); extreme high energy and working drive"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial evaluation that massive energy, intense herding drive, and need for open movement make apartment living highly unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-border-collie-breed-profile",
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
          id: "fci-border-collie-official-standard",
          role: "verified",
          locator: "COAT: weather-resisting undercoat"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-border-collie-breed-profile",
          role: "cited",
          locator: "Tolerates Being Alone: Low; deeply devoted and requires intense mental engagement"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-border-collie-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food formulated for active medium breeds, adjusted for work output"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for highly active working breeds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-border-collie-breed-profile",
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
          id: "ofa-border-collie-chic-requirements",
          role: "verified",
          locator: "CHIC Program requirements: Hips, Eyes, CEA DNA test."
        },
        {
          id: "bcsa-border-collie-health",
          role: "verified",
          locator: "Health Guidelines: Collie Eye Anomaly (CEA), Trapped Neutrophil Syndrome (TNS), MDR1, Epilepsy, Deafness."
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Synthesizes parent club veterinary health records, national health registry screening protocols, and genetic mandates (CEA, TNS, MDR1)."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "bcsa-border-collie-health",
          role: "verified",
          locator: "Collie Eye Anomaly (CEA), Trapped Neutrophil Syndrome (TNS), MDR1 sensitivity, Hip Dysplasia, Epilepsy, Deafness"
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
          id: "bcsa-border-collie-health",
          role: "cited",
          locator: "MDR1 medication precautions, DNA screening, joint protection"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to highly active working dogs and medication sensitivities."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-border-collie-chic-requirements",
          role: "verified",
          locator: "CHIC Program required screenings: Radiographic Hip Dysplasia evaluation, CAER Eye examination, Collie Eye Anomaly (CEA) DNA test."
        },
        {
          id: "bcsa-border-collie-health",
          role: "verified",
          locator: "Parent club recommends DNA tests for TNS, MDR1, and BAER testing for deafness."
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Screenings summarize published parent club and health registry protocols."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-border-collie-official-standard",
          role: "cited",
          locator: "Jaws/teeth: Teeth and jaws strong with a perfect, regular and complete scissor bite."
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-border-collie-official-standard",
          role: "cited",
          locator: "Ears: Medium size... carried erect or semi-erect and sensitive in use."
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for highly mobile ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-border-collie-official-standard",
          role: "cited",
          locator: "Coat texture: Weather-resisting undercoat, outer coat dense."
        }
      ],
      verifiedOn: null,
      note: "General skin and double-coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-border-collie-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, extreme intelligence, massive exercise demands, and hardwired herding instincts."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-border-collie-breed-profile",
          role: "verified",
          locator: "Old Hemp foundation sire, Chaser the dog (1,000 words), intense eye herding style, smartest breed reputation"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Verified historical folklore and working heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-border-collie-breed-standard",
          role: "verified",
          locator: "Origin, height (19-22 in / 18-21 in), coat, and colors"
        },
        {
          id: "akc-border-collie-breed-profile",
          role: "verified",
          locator: "Weight (30-55 lbs), lifespan (12-15 years), apartment living, child suitability, and grooming"
        },
        {
          id: "bcsa-border-collie-health",
          role: "verified",
          locator: "Main health concerns (CEA, TNS, MDR1, Epilepsy) and recommended health screening panel"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "FAQ answers synthesize verified standards and parent club publications without naming registries in prose."
    }
  },

  updatedOn: "2026-11-17"
};
