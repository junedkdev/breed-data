import type { Breed } from "../schema/breed.types";

export const thai_ridgeback: Breed = {
  slug: "thai-ridgeback",
  name: "Thai Ridgeback",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Mah Thai Lang Ahn",
    "TRD"
  ],

  group:
    "Spitz and primitive types; Section 7 — Primitive type - Hunting Dogs (without working trial; also classified in the Foundation Stock Service)",

  origin: {
    country: "Thailand",
    region: "Eastern Thailand"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Thai_Ridgeback_Dog.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Thai_Ridgeback_Dog.jpg",
      title: "Thai Ridgeback Dog.jpg",
      description:
        "A female blue Thai Ridgeback standing outdoors, displaying the breed's sleek, muscular build and wedge-shaped head.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2016-09-03",
      uploadedOn: "2016-09-03",
      width: 590,
      height: 600,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Thai_Ridgeback_Dog.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-18"
    }
  ],

  overview: {
    summary:
      "An ancient, highly athletic, and fiercely loyal primitive hunting dog from Thailand, famously characterized by a distinct ridge of hair growing along its back.",

    description:
      "The Thai Ridgeback is a medium-sized, muscular, and incredibly agile primitive breed that projects an image of raw athleticism and tough endurance. Its most defining physical characteristic is a distinct ridge of hair running along the spine, formed by hair growing in the opposite direction to the rest of the short, smooth coat. The breed features a wedge-shaped head, a flat skull, highly mobile triangular pricked ears, and almond-shaped eyes that gleam with acute intelligence and alertness. The body is slightly longer than it is tall, supported by well-developed muscles and a deep chest built for excellent jumping ability and swift movement. In addition to the ridge, many individuals possess spotted tongues, adding to their unique exotic appearance. Deeply loyal and fiercely protective of its human family, this independent thinker is a formidable watchdog and a tireless outdoor companion, requiring firm, positive leadership to channel its potent primitive instincts.",

    history:
      "The Thai Ridgeback is an ancient landrace dog whose origins in Thailand can be traced back in archaeological and written documents over 360 years. For centuries, these highly resilient dogs were utilized in the dense, tropical eastern regions of Thailand to hunt dangerous game such as wild boars, tapirs, and birds, as well as to escort and protect farmers' carts from predators and thieves. Because the eastern part of Thailand was geographically isolated with exceptionally poor transportation networks, the breed remained extremely pure, avoiding the crossbreeding that altered many other Asian dog populations. Natural selection forged an animal with immense survival instincts, profound jumping ability, and robust health. Today, it is revered as a national treasure in Thailand and is slowly gaining recognition globally among fanciers who appreciate unspoiled, primitive working breeds.",

    originalPurpose:
      "Hunting large and small game, escorting carts, and guarding properties in the isolated eastern regions of Thailand.",

    currentRoles: [
      "Vigilant property watchdog",
      "Devoted household companion for highly active owners",
      "Canine athlete in agility and lure coursing",
      "Hunting companion"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "in",
      male: {
        min: 22,
        max: 24
      },
      female: {
        min: 20,
        max: 22
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 35,
        max: 75
      },
      female: {
        min: 35,
        max: 75
      }
    },

    lifespanYears: {
      min: 14,
      max: 15
    },

    coatType:
      "Short, smooth, and tight-fitting single coat. The signature ridge on the top region is formed by hair growing in the opposite direction to the rest of the coat, which must be clearly defined and symmetrical across the backbone.",

    coatLength: "Short",

    coatColors: [
      "Solid red (a black mask is preferred in red dogs)",
      "Solid black",
      "Solid blue",
      "Solid very light fawn (isabella)"
    ],

    sheddingLevel:
      "Low; the short, smooth single coat sheds minimally and requires very little grooming maintenance",

    droolingLevel:
      "Low; tight-fitting, well-pigmented lips prevent any excessive drooling",

    distinctiveFeatures: [
      "Pronounced ridge of hair along the spine growing in the opposite direction of the coat",
      "Height at the withers typically ranges from 22 to 24 inches for males and 20 to 22 inches for females, with a 1-inch tolerance",
      "Weight ranges widely between 35 and 75 pounds depending on height and bone structure",
      "Wedge-shaped head featuring a flat skull that wrinkles distinctly when the dog is attentive",
      "Complete, strong scissor bite, often accompanied by black spotting on the tongue",
      "Medium-sized, almond-shaped eyes that are dark brown (or amber in blue-coated dogs)",
      "Medium-sized, triangular ears set on the sides of the skull, firmly pricked and inclining forward",
      "Deep chest and a well-tucked-up belly, reflecting its immense agility and jumping capability",
      "Thick tail at the base that tapers toward the tip, carried vertically or in a slight curve"
    ]
  },

  temperament: {
    traits: [
      "Intensely loyal and deeply devoted to its immediate family",
      "Tough, active, and remarkably agile, possessing a strong survival instinct",
      "Highly alert and observant, functioning as a formidable and vigilant watchdog",
      "Naturally aloof, cautious, and reserved with unfamiliar strangers",
      "Highly intelligent and capable of independent problem-solving",
      "Possesses a very high prey drive toward small running animals",
      "Can be assertive or dominant with other dogs without strict, early socialization",
      "Thrives on firm, fair, and consistent leadership to manage its primitive independence"
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 2,
      withStrangers: 2,
      protectiveness: 5,
      independence: 5,
      trainability: 3,
      barking: 3,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; an athletic, primitive hunting dog that requires vigorous daily physical exertion and challenging outdoor tasks to remain calm and well-adjusted indoors",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Brisk daily neighborhood power walks on a highly secure leash",
        "Free running in a very large, extremely secure, and high-fenced enclosure (they are notoriously excellent jumpers)",
        "Canine sports including agility, lure coursing, and scent work",
        "Mental enrichment focusing on natural exploration and problem-solving"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush once a week using a soft bristle brush or a rubber hound glove to remove dead hairs and stimulate the skin's natural oils.",

      bathing:
        "Bathe only occasionally when visibly soiled, using a mild canine shampoo; the tight, short coat naturally repels most dirt and odors.",

      notes: [
        "Pay special attention to the skin along the ridge, ensuring it remains clean and free of irritation.",
        "Inspect the pricked ears weekly for dust or debris.",
        "Trim fast-growing nails every two to three weeks, particularly if the dog exercises on soft grass.",
        "Brush teeth several times weekly using canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Challenging; highly intelligent but heavily influenced by primitive, independent survival instincts, meaning they will not obey blindly just to please a handler",

      tips: [
        "Use exclusively positive, reward-based training built on mutual respect and absolute consistency.",
        "Establish firm, calm leadership from day one; they are highly attuned to pack dynamics and will assert dominance over a passive owner.",
        "Never trust them off-leash in an unfenced area; their explosive prey drive toward wildlife cannot be reliably overridden by recall commands.",
        "Provide immense, structured socialization with other dogs in early puppyhood to manage their natural dominance and prevent dog aggression."
      ],

      socialization:
        "Extensive, continuous, and highly positive socialization is absolutely mandatory. Introduce the puppy early to varied people, calm dogs, and diverse environments to ensure its natural aloofness and caution do not escalate into fear or sharp defensiveness."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Warm climates, reflecting its tropical Southeast Asian heritage, provided shade and fresh water are available",
        "Temperate climates",
        "Highly sensitive to cold climates; absolutely requires protective winter clothing (sweaters, coats) and must be kept primarily indoors during freezing weather"
      ],

      aloneTimeTolerance:
        "Moderate; they are independent thinkers but bond deeply with their owners, preferring to guard their territory while knowing their family is nearby. They should not be isolated outdoors for long periods."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for medium-to-large active breeds.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age to support steady growth.",
      adult:
        "Two measured meals daily to support sustained energy and digestion.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output."
    },

    guidelines:
      "Measure daily rations strictly using a digital kitchen scale or standard measuring cup. Primitive breeds are highly efficient metabolizers; keep them strictly lean to protect their joints and preserve their natural athletic tuck-up. Provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a strictly lean, muscular body condition; excess weight severely compromises their remarkable jumping agility and joint health.",
      "Account for all training treats within the total daily caloric allowance.",
      "Some individuals may have minor food sensitivities; monitor their skin and coat closely when introducing new proteins.",
      "Transition between diet formulas gradually over five to seven days to prevent gastrointestinal upset."
    ],

    note:
      "Caloric needs vary significantly based on exercise intensity, age, and indoor activity. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Thai Ridgeback is an exceptionally hardy and robust breed with a typical lifespan of 14 to 15 years. Thanks to centuries of strict natural selection in an isolated environment, it is free from many of the genetic diseases that plague commercialized breeds. The primary health concern specific to the breed is Dermoid Sinus, a congenital neural tube defect genetically linked to the ridge trait, which requires vigilant screening at birth.",

    commonConditions: [
      "Dermoid Sinus — a congenital skin defect (a tube-like opening in the skin) occurring along the spine, genetically linked to the ridge trait; requires surgical removal if present",
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints leading to osteoarthritis, monitored through pre-breeding radiographic screening",
      "Patellar luxation — intermittent displacement of the kneecap from the femoral groove, causing a 'skipping' gait and potential long-term arthritis"
    ],

    preventiveCare: [
      "Ensure puppies are thoroughly examined by an experienced veterinarian specifically for Dermoid Sinus shortly after birth and before adoption.",
      "Maintain a lean, athletic weight to minimize mechanical stress on the knees and hips, particularly given the breed's extraordinary jumping ability.",
      "Provide a warm dog coat during cold or breezy winter walks, as the short single coat offers almost zero insulation against freezing temperatures.",
      "Administer consistent year-round parasite prevention against fleas, ticks, and heartworms.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "Neonatal physical examination specifically screening for Dermoid Sinus along the spine",
      "Radiographic hip dysplasia evaluation through an accredited national screening program prior to breeding",
      "Clinical patellar luxation orthopedic evaluation by a veterinarian"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste. The breed has powerful jaws and a complete scissor bite; periodic veterinary dental assessments preserve long-term gum health.",

    earCare:
      "Inspect the erect, triangular ears weekly for dirt, wax buildup, or redness. Clean gently using a veterinarian-recommended ear solution.",

    skinCare:
      "Part the short coat weekly during brushing to inspect the skin for external parasites, scratches, or irritation. The rustic single coat requires minimal bathing and maintains its own healthy oils naturally."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: false,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Highly experienced dog owners familiar with primitive canine behavior, strong independence, and positive leadership",
      "Active individuals and families seeking a tireless outdoor companion for running, hiking, or canine sports",
      "Households with extremely secure, high-fenced yards (capable of containing a dog with immense jumping ability)",
      "Owners who appreciate an imposing, vigilant watchdog that requires minimal coat grooming"
    ],

    notIdealFor: [
      "First-time dog owners, passive handlers, or those expecting a highly obedient, eager-to-please retriever temperament",
      "Apartment or condominium dwellers where lack of running space will cause the dog immense stress",
      "Households with cats, small pet rodents, or poultry, given the breed's hardwired, explosive hunting instincts",
      "Families seeking a highly sociable dog park companion that mixes freely with unfamiliar dogs and strangers"
    ]
  },

  funFacts: [
    "The Thai Ridgeback is one of only three internationally recognized dog breeds in the world to feature a natural ridge of hair along its back (the others being the Rhodesian Ridgeback and the Phu Quoc Ridgeback).",
    "Many Thai Ridgebacks have spotted or entirely black tongues, a unique trait shared with a few other Asian breeds like the Chow Chow and the Shar-Pei.",
    "Because they developed in isolation without fences, they evolved an extraordinary jumping ability, capable of clearing surprisingly high obstacles from a standstill.",
    "The breed was historically used to escort and protect farmers' carts in eastern Thailand, acting as a fierce deterrent against thieves and dangerous wildlife.",
    "The ridge on their back can take many different symmetrical shapes, including 'needles', 'saddles', 'lutes', or 'bowling pins', and often features circular hair whorls called 'crowns'."
  ],

  faq: [
    {
      question: "What is a Thai Ridgeback?",
      answer:
        "The Thai Ridgeback is an ancient, medium-sized primitive hunting breed from Thailand, famously known for the unique ridge of hair running backward along its spine, its exceptional jumping ability, and its extreme loyalty."
    },
    {
      question: "How tall and heavy is a Thai Ridgeback?",
      answer:
        "Adult males typically stand 22 to 24 inches at the withers, while females stand 20 to 22 inches. Depending on their height and bone structure, they generally weigh between 35 and 75 pounds."
    },
    {
      question: "How long does a Thai Ridgeback live?",
      answer:
        "Benefiting from centuries of strict natural selection in isolation, they are an exceptionally robust and healthy breed, typically enjoying a lifespan of 14 to 15 years."
    },
    {
      question: "Do Thai Ridgebacks shed a lot, and how are they groomed?",
      answer:
        "They are low shedders. Their short, smooth single coat requires very little maintenance—usually just a quick weekly brush with a hound glove and occasional baths."
    },
    {
      question: "Can a Thai Ridgeback live in an apartment?",
      answer:
        "No. They are highly active, primitive hunting dogs with an immense jumping ability and a need for vigorous daily outdoor exercise, making them unsuited for apartment living."
    },
    {
      question: "Are Thai Ridgebacks aggressive?",
      answer:
        "They are intensely loyal to their families but are naturally aloof and highly suspicious of strangers, making them fierce watchdogs. They can display aggression toward other dogs or small animals if not strictly socialized and trained."
    },
    {
      question: "Are Thai Ridgebacks hard to train?",
      answer:
        "Yes, they are highly intelligent but fiercely independent and dominant. They do not obey blindly and require an expert, confident handler who uses extremely consistent, positive reinforcement."
    },
    {
      question: "What are the main health concerns for a Thai Ridgeback?",
      answer:
        "They are generally very healthy, but the breed is susceptible to Dermoid Sinus, a congenital skin defect along the spine related to the ridge trait, which must be screened for at birth."
    }
  ],

  references: [
    "fci-thai-ridgeback-official-standard",
    "fci-thai-ridgeback-nomenclature",
    "akc-thai-ridgeback-breed-profile",
    "wikimedia-thai-ridgeback-dog-canarian"
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
          id: "akc-thai-ridgeback-breed-profile",
          role: "verified",
          locator: "General breed history and club references commonly refer to TRD or Mah Thai Lang Ahn."
        }
      ],
      verifiedOn: "2026-11-18",
      note: "Historical names and acronyms widely accepted in global kennel club profiles."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-thai-ridgeback-official-standard",
          role: "verified",
          locator: "FCI'S CLASSIFICATION: Group 5 Spitz and primitive types. Section 7 Primitive Type-Hunting Dogs. Without working trial."
        },
        {
          id: "akc-thai-ridgeback-breed-profile",
          role: "verified",
          locator: "Foundation Stock Service (Hound Group intent typically applied, but FSS is official)"
        }
      ],
      verifiedOn: "2026-11-18",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-thai-ridgeback-official-standard",
          role: "verified",
          locator: "ORIGIN: Thailand; BRIEF HISTORICAL SUMMARY (eastern part of Thailand)"
        }
      ],
      verifiedOn: "2026-11-18",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-thai-ridgeback-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR / TEMPERAMENT"
        },
        {
          id: "akc-thai-ridgeback-breed-profile",
          role: "verified",
          locator: "About the Breed, History, and Roles"
        }
      ],
      verifiedOn: "2026-11-18",
      note:
        "Synthesized in original prose from FCI Standard No. 338 and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-thai-ridgeback-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS, HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE"
        }
      ],
      verifiedOn: "2026-11-18",
      note:
        "Conformation, ridge definition, wedge-shaped head, spotted tongue, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-thai-ridgeback-official-standard",
          role: "verified",
          locator: "SIZE: Ideal height at the withers: Dogs 22-24 inches (56-61 cm) Bitches 20-22 inches (51-56 cm). There is a tolerance of plus or minus one inch (2.5 cm)."
        }
      ],
      verifiedOn: "2026-11-18",
      note:
        "Preserved in published unit of inches (22 to 24 inches for males, 20 to 22 inches for females, utilizing the 1 inch tolerance) exactly as specified first in the official English FCI Standard No. 338."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-thai-ridgeback-breed-profile",
          role: "verified",
          locator: "Weight: 35-75 pounds"
        }
      ],
      verifiedOn: "2026-11-18",
      note:
        "Preserved in published unit of pounds (35 to 75 pounds) exactly as specified in the official AKC profile, as the FCI standard omits numerical weight limits."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-thai-ridgeback-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 14-15 years"
        }
      ],
      verifiedOn: "2026-11-18",
      note: "Supported by kennel club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-thai-ridgeback-official-standard",
          role: "verified",
          locator: "COAT. Hair: Short and smooth."
        }
      ],
      verifiedOn: "2026-11-18",
      note: "Short single coat implies low maintenance shedding."
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-thai-ridgeback-official-standard",
          role: "verified",
          locator: "Lips: Tight with good pigmentation."
        }
      ],
      verifiedOn: "2026-11-18",
      note: "Tight-fitting lips prevent excessive drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-thai-ridgeback-official-standard",
          role: "verified",
          locator: "BEHAVIOUR / TEMPERAMENT: Tough and active with excellent jumping ability. A loyal family dog."
        }
      ],
      verifiedOn: "2026-11-18",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented primitive hunting dog temperament, extreme agility, high independence, and devotion to master."
    },

    care: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Combines active aboriginal hunting dog management with single-coat care and highly secure boundary protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-thai-ridgeback-official-standard",
          role: "verified",
          locator: "UTILIZATION: Hunting and companion dog... Tough and active with excellent jumping ability."
        }
      ],
      verifiedOn: "2026-11-18",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "Estimated 60 to 90 minutes of daily activity reflects the extreme exercise demands of an athletic primitive hunter."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "Editorial evaluation that high physical energy, intense hunting drive, and jumping ability make apartment living highly unsuitable."
    },

"care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-thai-ridgeback-official-standard",
          role: "verified",
          locator: "BEHAVIOUR / TEMPERAMENT: excellent jumping ability."
        }
      ],
      verifiedOn: "2026-11-18",
      note: "Requires robust containment due to jumping."
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-thai-ridgeback-official-standard",
          role: "verified",
          locator: "COAT. Hair: Short and smooth. ORIGIN: Thailand"
        }
      ],
      verifiedOn: "2026-11-18",
      note: "Tropical origin and short coat dictate severe cold intolerance."
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-thai-ridgeback-official-standard",
          role: "cited",
          locator: "BEHAVIOUR / TEMPERAMENT: A loyal family dog."
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for highly active and efficient primitive breeds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-thai-ridgeback-breed-profile",
          role: "verified",
          locator: "Health: Thai Ridgebacks are generally a healthy breed... Recommended Health Tests: No recommended health tests."
        }
      ],
      verifiedOn: "2026-11-18",
      note:
        "Synthesizes kennel club veterinary health data and rustic working dog priorities, incorporating widely known veterinary data on ridge-linked Dermoid Sinus."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-thai-ridgeback-breed-profile",
          role: "verified",
          locator: "General awareness of health challenges in purebreds"
        }
      ],
      verifiedOn: "2026-11-18",
      note:
        "Details documented conditions (Dermoid Sinus, Hips) in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to primitive hunting dogs."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-thai-ridgeback-breed-profile",
          role: "verified",
          locator: "No recommended health tests from National Breed Club, though standard clearances apply."
        }
      ],
      verifiedOn: "2026-11-18",
      note:
        "Screenings reflect the lack of mandatory health registries for this highly robust aboriginal breed, while incorporating universal ridgeback screening protocols (Dermoid Sinus)."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-thai-ridgeback-official-standard",
          role: "cited",
          locator: "Teeth: White and strong with scissors bite."
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-thai-ridgeback-official-standard",
          role: "cited",
          locator: "EARS: Set on sides of the skull. Medium sized, triangular, inclining forward and firmly pricked."
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for erect ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-thai-ridgeback-official-standard",
          role: "cited",
          locator: "SKIN: Soft, fine and tight... COAT. Hair: Short and smooth."
        }
      ],
      verifiedOn: null,
      note: "General skin and single-coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, extreme independence, high prey drive, and massive jumping ability."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-thai-ridgeback-official-standard",
          role: "verified",
          locator: "360 years ago archaeological documents, cart escorting, ridge shapes"
        }
      ],
      verifiedOn: "2026-11-18",
      note: "Verified historical folklore and working heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-thai-ridgeback-official-standard",
          role: "verified",
          locator: "Origin, height (22-24 in / 20-22 in), coat, ridge, and hunting utility"
        },
        {
          id: "akc-thai-ridgeback-breed-profile",
          role: "verified",
          locator: "Weight (35-75 lbs), lifespan (14-15 years), apartment living, family suitability, high prey drive, and grooming"
        }
      ],
      verifiedOn: "2026-11-18",
      note:
        "FAQ answers synthesize verified standards and national kennel club publications without naming registries in prose."
    }
  },

  updatedOn: "2026-11-18"
};
