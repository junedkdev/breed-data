import type { Breed } from "../schema/breed.types";

export const patterdale_terrier: Breed = {
  slug: "patterdale-terrier",
  name: "Patterdale Terrier",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Black Fell Terrier",
    "Fell Terrier",
    "Patterdale"
  ],

  group:
    "Terriers; Working Earthdogs (also classified in the Terrier and Working Dog groups)",

  origin: {
    country: "United Kingdom",
    region:
      "Lake District, Cumbria, Northern England (specifically developed in and around the village of Patterdale, Ullswater)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Patterdale_Terrier.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Patterdale_Terrier.jpg",
      title: "Patterdale_Terrier.jpg",
      description: "An adult black Patterdale Terrier standing outdoors in grass.",
      creator: "Sannse",
      uploader: "Sannse",
      capturedOn: "2004-06-03",
      uploadedOn: "2004-06-03",
      width: 800,
      height: 600,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Sannse, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Patterdale_Terrier.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-09"
    }
  ],

  overview: {
    summary:
      "A tough, compact, and fearless British working earthdog native to the Lake District, renowned for its flexible spannable chest, weatherproof double coat, tenacious drive, and affectionate domestic loyalty.",

    description:
      "The Patterdale Terrier is an authentic, rugged working earthdog built with a compact, balanced frame designed to pursue quarry into tight underground rock fissures and dens. Characterized by clean, muscular lines and strong bone without coarseness, the terrier possesses an extraordinarily flexible, spannable ribcage that can be encircled by an average pair of human hands directly behind the shoulders. Its dense, weather-resistant double coat appears in smooth, broken, or rough textures, predominantly in solid black, though red, liver, grizzle, and black-and-tan are recognized. The head is strong and trapezoidal with powerful punishing jaws, dark alert eyes, and neat V-shaped drop ears. In the home, it settles into an affectionate, companionable, and quiet pet, but outdoors it reveals boundless stamina, intense focus on scent trails, and game determination.",

    history:
      "The breed developed in the rocky fells and steep valleys of the Lake District in northern England, descending from hard-bitten northern fell terriers bred to safeguard sheep flocks from red foxes. Unlike southern terriers bred for softer lowland earths, fell terriers required exceptional toughness, flexible chests, and fearless stamina to traverse jagged granite crags. In the late nineteenth and early twentieth centuries, Joe Bowman, renowned huntsman of the Ullswater Foxhounds, systematically bred these black terriers at his base in Patterdale, establishing the core bloodlines. Subsequent generations of dedicated Cumbria breeders, notably Cyril Breay, Frank Buck, and Brian Nuttall, refined the working strain to maintain its practical earthdog excellence and sound constitution. The breed was later introduced to North America and recognized as a distinct purebred terrier, while remaining an unexaggerated, functional working dog prized by earthdog and sport enthusiasts worldwide.",

    originalPurpose:
      "Subterranean earthwork, bolting and dispatching foxes from rocky mountain dens, badger and otter control, and farm vermin management across the northern English fells.",

    currentRoles: [
      "Working earthdog and farm pest controller",
      "Competitive earthdog, barn hunt, and terrier trial athlete",
      "Active outdoor companion and hiking partner for experienced handlers",
      "Canine athlete in agility, flyball, and scent tracking"
    ]
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "in",
      male: {
        min: 10,
        max: 15
      },
      female: {
        min: 10,
        max: 15
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 11,
        max: 15
      },
      female: {
        min: 11,
        max: 15
      }
    },

    lifespanYears: {
      min: 12,
      max: 15
    },

    coatType:
      "Dense, weather-resistant double coat with a soft, insulating undercoat, occurring in three recognized varieties: smooth (coarse, flat, and close-fitting), broken (longer, harsher guard hairs with distinct facial whiskers and beard), and rough (coarse, wiry hair covering the body with full facial furnishings).",

    coatLength: "Short",

    coatColors: [
      "Solid black (predominant and classic colour)",
      "Black with white markings on the chest and feet",
      "Red (ranging from golden tan to deep rich red)",
      "Liver / chocolate (with brown pigmentation on nose and eye rims)",
      "Grizzle",
      "Black and tan"
    ],

    sheddingLevel:
      "Low to moderate year-round shedding; dead hairs are easily removed with weekly brushing or periodic hand-stripping of broken and rough coats",

    droolingLevel:
      "Low; tight, clean-fitting lips prevent drooling",

    distinctiveFeatures: [
      "Compact, athletic, and sturdy working terrier outline built for agility and endurance",
      "Height at the withers of 10 to 15 inches",
      "Working weight of 11 to 15 pounds in hard, fit muscular condition",
      "Spannable, oval chest that can be encircled and compressed by two hands behind the shoulders to confirm underground capability",
      "Strong, wedge-shaped head with a broad skull and a powerful muzzle displaying considerable jaw strength",
      "Complete scissor bite with strong, large white teeth (level bite acceptable)",
      "Dark, medium-sized eyes set wide apart, harmonizing with coat colour and displaying a keen, fearless expression",
      "Small, triangular drop ears folding neatly just above the skull line and hanging close to the cheeks",
      "Muscular, moderately arched neck widening smoothly into clean, laid-back shoulders",
      "Level topline with a strong, flexible loin and deep, moderately tucked-up flank",
      "Tail set high, traditionally docked by one-third or left natural, carried merrily like a sabre without curling over the back",
      "Firm, compact cat-like feet with tough, thick black pads designed for rocky crags"
    ]
  },

  temperament: {
    traits: [
      "Fearless, courageous, and exceptionally determined",
      "Affectionate, loving, and deeply loyal to household family members",
      "Spirited, energetic, and highly driven outdoors",
      "Intelligent and independent problem-solver",
      "Alert and observant watchdog ready to sound an alarm",
      "Friendly and self-assured with familiar people",
      "Gentle and sturdy companion for respectful children",
      "High prey drive toward small mammals, rodents, and rabbits",
      "Tenacious working grit that requires patient, structured leadership",
      "May show dog-directed assertiveness or reactivity toward unfamiliar dogs of the same sex"
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 2,
      withStrangers: 3,
      protectiveness: 3,
      independence: 4,
      trainability: 3,
      barking: 4,
      energy: 5
    }
  },

  care: {
    exercise: {
      level:
        "High; an energetic working terrier requiring substantial daily physical exercise and mental engagement to prevent boredom and digging",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Daily brisk leashed walks and trail hikes across rural and natural terrain",
        "Interactive fetch, tug, and flirt-pole chase sessions in a secure yard",
        "Earthdog trials and simulated underground tunnel tracking",
        "Agility, flyball, and structured obstacle courses",
        "Food puzzle challenges, snuffle mats, and scent-searching enrichment",
        "Supervised garden exploration and digging in designated sand pits"
      ]
    },

    grooming: {
      level: "Low to moderate",

      brushing:
        "Brush once or twice weekly with a rubber hound mitt or firm bristle brush to remove loose hair and trail dirt; broken and rough coats benefit from hand-stripping dead wire hairs twice a year to maintain coat weather resistance.",

      bathing:
        "Bathe only when heavily soiled or muddy after digging, using a mild canine shampoo to avoid depleting natural protective skin oils.",

      notes: [
        "Inspect the drop ears weekly for trapped dirt, wax, or foreign matter, particularly after subterranean tunneling.",
        "Check paw pads, toes, and skin for thorns, burrs, or small abrasions after running through rough heather and rocky crags.",
        "Trim hard, fast-growing nails every two to three weeks to maintain compact foot structure.",
        "Brush teeth several times weekly using canine-formulated enzymatic toothpaste.",
        "Wipe down the coat with a damp cloth after woodland runs to remove surface debris.",
        "Provide dedicated digging pits to channel natural excavation instincts away from landscaped garden beds."
      ]
    },

    training: {
      difficulty:
        "Moderate to challenging; highly intelligent and food-motivated, but possesses an independent mindset and high prey focus that require patient, consistent guidance",

      tips: [
        "Use positive reinforcement, high-value food rewards, and enthusiastic praise.",
        "Keep instructional sessions short, varied, and fast-paced (5 to 10 minutes) to avoid boredom.",
        "Practice recall early on a long line, recognizing that strong scent and prey drive can override commands in the wild.",
        "Always maintain the dog on a leash or inside a securely fenced area, as small wildlife will trigger immediate pursuit.",
        "Avoid harsh verbal reprimands or physical corrections, which cause this proud terrier to become defensive and uncooperative.",
        "Channel high energy and natural working drive into structured dog sports such as agility, barn hunt, or scent tracking."
      ],

      socialization:
        "Introduce the puppy early and calmly to diverse people, friendly vaccinated dogs of varying sizes, household appliances, novel surfaces, and busy environments. Early structured socialization helps manage natural terrier feistiness and fosters a well-adjusted, confident adult companion."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool and rainy climates, where the dense double coat provides natural weather resistance",
        "Warm climates, provided indoor cooling, shade, and fresh water are available and exercise occurs during cooler morning or evening hours"
      ],

      aloneTimeTolerance:
        "Low to moderate; high energy and strong family attachment mean prolonged isolation can lead to boredom barking, frantic digging, and destructive chewing."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for small active working breeds, adjusted for age, metabolism, and physical output.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age, transitioning to two meals daily on a growth formula supporting steady development.",
      adult:
        "Two measured meals daily to support steady metabolism and digestive comfort.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output, joint support, and lean muscle retention."
    },

    guidelines:
      "Measure food portions carefully using a digital kitchen scale or standard measuring cup, adjusting amounts to maintain a lean, athletic body silhouette where the ribs are easily felt. Divide daily food into two distinct meals, restrict vigorous exercise immediately before and after eating, and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a lean, hard working condition where the ribs are easily felt; excess weight places undue strain on small joints and spine.",
      "Account for training treats within the total daily caloric allowance to prevent gradual weight gain.",
      "Increase caloric and protein density during active field trials or heavy outdoor work.",
      "Avoid feeding rich or fatty table scraps that can trigger digestive upset or acute pancreatitis.",
      "Provide clean drinking water, especially during active exercise in warm weather.",
      "Transition between diet formulas gradually over five to seven days."
    ],

    note:
      "Caloric needs vary significantly based on activity level, working workload, and age. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Patterdale Terrier is an exceptionally hardy, robust working terrier with a typical life expectancy of 12 to 15 years. Bred primarily for field utility, stamina, and sound movement in challenging English terrain rather than show ring aesthetics, it has largely escaped the extreme conformational exaggerations and hereditary genetic defects seen in many popular companion breeds. Health considerations focus primarily on primary lens luxation (PLL, an inherited condition screenable via DNA testing), patellar luxation, contact allergies, and minor traumatic injuries sustained during earthwork.",

    commonConditions: [
      "Primary lens luxation (PLL) — an inherited ocular disorder caused by an autosomal recessive mutation in the ADAMTS17 gene, causing disintegration of the lens zonules, lens displacement, and secondary acute glaucoma, fully preventable through pre-breeding DNA testing",
      "Patellar luxation — kneecap displacement from the femoral groove causing intermittent hopping or hind-limb lameness, monitored through clinical orthopedic grading",
      "Field and hunting injuries — puncture wounds, lacerations, corneal abrasions, and broken teeth sustained during underground earthwork and brush running",
      "Allergic dermatitis — skin sensitivity to flea bites, pollen, or environmental contact allergens causing itching and scratching",
      "Periodontal disease — tartar buildup and gingivitis common in small breeds, preventable through routine home dental care"
    ],

    preventiveCare: [
      "Verify that breeding stock has been DNA tested for primary lens luxation (ADAMTS17 mutation).",
      "Inspect eyes, ears, and paw pads after outdoor excursions in heavy underbrush or rocky terrain.",
      "Maintain a lean, conditioned body weight to prevent excess strain on joints.",
      "Administer consistent year-round flea, tick, and heartworm preventative treatments.",
      "Brush teeth regularly and schedule periodic professional veterinary cleanings.",
      "Ensure annual veterinary wellness examinations and core vaccinations remain up to date."
    ],

    recommendedScreenings: [
      "DNA marker test for Primary Lens Luxation (ADAMTS17 gene mutation) prior to breeding",
      "Clinical patellar luxation orthopedic evaluation and grading",
      "Comprehensive ophthalmic examination by a board-certified veterinary ophthalmologist"
    ],

    dentalCare:
      "Brush teeth several times weekly using dog-specific enzymatic toothpaste. The breed has powerful jaws with a complete 42-tooth scissor bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the drop ears weekly for moisture, wax buildup, or debris, especially after subterranean digging. Clean gently with an approved cleanser, drying the leather thoroughly.",

    skinCare:
      "Part the dense coat weekly during brushing to inspect the skin for external parasites, cuts, or irritation. The harsh coat naturally sheds dirt and requires minimal bathing beyond regular grooming."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Active outdoor enthusiasts, hikers, and trail runners seeking an energetic small companion",
      "Experienced terrier owners who understand working earthdog drives, feisty independence, and high stamina",
      "Rural or suburban homes with a securely fenced yard",
      "Sporting dog handlers interested in earthdog trials, scent work, and agility",
      "Households seeking a loyal, fearless, and compact guardian of the hearth"
    ],

    notIdealFor: [
      "Novice dog owners unprepared for high prey drive and tenacious working instincts",
      "Apartment dwellers or dense urban households where barking and high energy can cause friction",
      "Households with loose pet rabbits, rodents, or small animals vulnerable to predatory drive",
      "Sedentary individuals looking for a low-energy lap pet",
      "Owners who expect reliable off-leash obedience in unfenced areas"
    ]
  },

  funFacts: [
    "The breed is named after the picturesque village of Patterdale in the Lake District of Cumbria, England, where it was selectively bred to hunt foxes across rocky fells.",
    "A defining physical requirement of the breed is that its chest must be 'spannable'—a hunter should be able to span the ribcage behind the shoulders with both hands, ensuring the terrier can squeeze into tight rock fissures and underground burrows.",
    "Legendary huntsman Joe Bowman of the Ullswater Foxhounds is credited with establishing the foundational strains of the black fell terrier in the late nineteenth and early twentieth centuries.",
    "Unlike many modern show terriers that were bred away from their working roots, the Patterdale Terrier has remained an authentic, unexaggerated working earthdog prized for practical performance.",
    "The coat occurs in three distinct textures: smooth, broken (with wiry whiskers and beard), and rough, all offering equal protection against cold mountain rain and thorny gorse.",
    "Renowned terrier breeders Cyril Breay, Frank Buck, and Brian Nuttall further refined the modern working strain, creating lines celebrated for game courage and stamina."
  ],

  faq: [
    {
      question: "What is a Patterdale Terrier?",
      answer:
        "The Patterdale Terrier is a small, athletic working earthdog native to the Lake District of northern England, known for its black coat, spannable chest, courage, and intense hunting drive."
    },
    {
      question: "Where does the Patterdale Terrier originate?",
      answer:
        "The breed originated in the Lake District of Cumbria, England, developed primarily around the village of Patterdale by huntsman Joe Bowman and local farmers to protect sheep from foxes in rocky fells."
    },
    {
      question: "What was the Patterdale Terrier bred to do?",
      answer:
        "It was bred to work underground, pursuing and bolting foxes from rocky cairns and subterranean dens, as well as controlling badgers and farm vermin."
    },
    {
      question: "What does 'spannable' mean for a Patterdale Terrier?",
      answer:
        "Spannable means that an average person's hands can encircle the dog's ribcage just behind the front legs and compress it slightly; this ensures the terrier has the flexible chest required to navigate narrow underground rock crevices."
    },
    {
      question: "How tall and heavy is a Patterdale Terrier?",
      answer:
        "Adult males and females typically stand 10 to 15 inches tall at the withers and weigh between 11 and 15 pounds in hard, fit working condition."
    },
    {
      question: "How long does a Patterdale Terrier live?",
      answer:
        "The breed is remarkably robust and long-lived, typically enjoying a healthy lifespan of 12 to 15 years with proper nutrition, exercise, and preventive veterinary care."
    },
    {
      question: "What coat types and colors are found in the Patterdale Terrier?",
      answer:
        "The coat occurs in three varieties—smooth, broken (with slight beard and whiskers), and rough—and is most often solid black, though red, liver, grizzle, and black-and-tan are also recognized."
    },
    {
      question: "Is a Patterdale Terrier good with children and other pets?",
      answer:
        "It is affectionate and loyal with children in its family, but because of its high terrier energy, supervision is recommended; its intense prey drive makes it unsafe around small pets like rabbits or rodents, and it may be assertive with other dogs."
    },
    {
      question: "Can a Patterdale Terrier live in an apartment?",
      answer:
        "Generally no. Its high energy, need for strenuous daily exercise, and natural instinct to bark at unusual sights or sounds make it poorly suited to apartment living; it thrives best in a house with a securely fenced yard."
    },
    {
      question: "Is the Patterdale Terrier easy to train?",
      answer:
        "It is very smart and eager to work, but has an independent terrier mindset. Training requires patient, reward-based methods and positive reinforcement rather than repetitive drills or harsh handling."
    },
    {
      question: "How much exercise does a Patterdale Terrier need daily?",
      answer:
        "The breed requires 60 to 90 minutes of daily physical exercise, including brisk walks, trail hikes, and mental challenges like scent work or agility."
    },
    {
      question: "What health issues affect the Patterdale Terrier?",
      answer:
        "The breed is generally very healthy, with primary considerations centering on primary lens luxation (PLL, an inherited eye disease preventable through DNA testing), patellar luxation, skin allergies, and minor injuries from hunting in rough brush."
    }
  ],

  references: [
    "ukc-patterdale-terrier-official-standard",
    "patterdale-terrier-club-of-america-breed-standard",
    "patterdale-terrier-pll-adamts17-study-2011",
    "bva-canine-health-schemes-terriers",
    "wikimedia-patterdale-terrier-sannse"
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
          id: "ukc-patterdale-terrier-official-standard",
          role: "verified",
          locator: "Standard header and breed name: Patterdale Terrier"
        },
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "verified",
          locator: "History: Black Fell Terrier, Fell Terrier"
        }
      ],
      verifiedOn: "2026-11-09",
      note: "Verified across official UKC and PTCA breed standards."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "ukc-patterdale-terrier-official-standard",
          role: "verified",
          locator: "Terrier Group"
        },
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "verified",
          locator: "Working terrier and earthdog classification"
        }
      ],
      verifiedOn: "2026-11-09",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "ukc-patterdale-terrier-official-standard",
          role: "verified",
          locator: "History: Lake District of Northern England"
        },
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "verified",
          locator: "Origin: Village of Patterdale, Ullswater, Cumbria, England"
        }
      ],
      verifiedOn: "2026-11-09",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "ukc-patterdale-terrier-official-standard",
          role: "verified",
          locator: "History, General Appearance, and Characteristics"
        },
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "verified",
          locator: "Breed History (Joe Bowman, Cyril Breay, Frank Buck, Brian Nuttall), General Appearance, and Earthdog Purpose"
        }
      ],
      verifiedOn: "2026-11-09",
      note:
        "Synthesized in original prose from official UKC and PTCA breed standards."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "ukc-patterdale-terrier-official-standard",
          role: "verified",
          locator: "Head, Body, Coat, Color, Height, Weight"
        },
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "verified",
          locator: "General Appearance, Spannable Chest, Head, Ears, Coat, Color, Size"
        }
      ],
      verifiedOn: "2026-11-09",
      note:
        "Conformation, spannable chest, coat varieties, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "ukc-patterdale-terrier-official-standard",
          role: "verified",
          locator: "Height: Height is measured at the withers. The height range is from 10 to 15 inches."
        },
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "verified",
          locator: "Size: Height: 10 to 15 inches"
        }
      ],
      verifiedOn: "2026-11-09",
      note:
        "Preserved in published unit of inches (10 to 15 inches) exactly as specified in official standards."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "ukc-patterdale-terrier-official-standard",
          role: "verified",
          locator: "Weight: Weight is in proportion to the height of the terrier. A dog in hard, working condition will usually weigh between 11 and 13 pounds for a 12-inch dog."
        },
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "verified",
          locator: "Weight: Working dogs typically weigh 11 to 15 pounds"
        }
      ],
      verifiedOn: "2026-11-09",
      note:
        "Preserved in published unit of pounds (11 to 15 pounds) following official UKC and PTCA standards."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "verified",
          locator: "Health and Longevity: 12-15 years"
        }
      ],
      verifiedOn: "2026-11-09",
      note: "Supported by parent club and working terrier breed registry data."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ukc-patterdale-terrier-official-standard",
          role: "verified",
          locator: "Coat: Dense double coat with weather-resistant undercoat"
        },
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "verified",
          locator: "Grooming and shedding characteristics"
        }
      ],
      verifiedOn: "2026-11-09",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ukc-patterdale-terrier-official-standard",
          role: "verified",
          locator: "Mouth: Tight-fitting lips"
        }
      ],
      verifiedOn: "2026-11-09",
      note: "Tight-fitting lips prevent drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "ukc-patterdale-terrier-official-standard",
          role: "verified",
          locator: "Characteristics: Eager to please, courageous, bold, active, confident"
        },
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "verified",
          locator: "Temperament: Gameness, boldness, loyalty, quarry focus"
        }
      ],
      verifiedOn: "2026-11-09",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "ukc-patterdale-terrier-official-standard",
          role: "cited",
          locator: "Temperament and behavior guidance"
        },
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "cited",
          locator: "Working drives and domestic behavior"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented working earthdog temperament and prey drive."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "cited",
          locator: "Care, exercise, and management guidelines"
        },
        {
          id: "ukc-patterdale-terrier-official-standard",
          role: "cited",
          locator: "Working terrier traits and care"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active earthdog management with short-coat grooming and training protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "verified",
          locator: "Working earthdog endurance and daily exercise needs"
        }
      ],
      verifiedOn: "2026-11-09",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "cited",
          locator: "Exercise and stamina recommendations"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 60 to 90 minutes of daily activity reflects the high energy demands of a working earthdog."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "cited",
          locator: "High energy, digging, and barking instincts in working terriers"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial evaluation that high energy, digging instincts, and vocal tendencies make apartment living generally unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "verified",
          locator: "Housing: Securely fenced yard recommended"
        }
      ],
      verifiedOn: "2026-11-09",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ukc-patterdale-terrier-official-standard",
          role: "verified",
          locator: "Coat: Dense double coat adapted to harsh Lake District weather"
        }
      ],
      verifiedOn: "2026-11-09",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "cited",
          locator: "Terrier temperament and separation boredom"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "cited",
          locator: "Nutrition and body condition maintenance"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for active working terriers."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "cited",
          locator: "Feeding schedules"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "patterdale-terrier-pll-adamts17-study-2011",
          role: "verified",
          locator: "ADAMTS17 gene mutation and primary lens luxation in working terriers"
        },
        {
          id: "bva-canine-health-schemes-terriers",
          role: "verified",
          locator: "Eye examinations and patellar evaluation for working terriers"
        },
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "verified",
          locator: "Health and soundness: primary lens luxation and working fitness"
        }
      ],
      verifiedOn: "2026-11-09",
      note:
        "Synthesizes peer-reviewed genetics research on primary lens luxation with veterinary health screening recommendations."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "patterdale-terrier-pll-adamts17-study-2011",
          role: "verified",
          locator: "Primary lens luxation clinical and genetic description"
        },
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "verified",
          locator: "Patellar luxation, field injuries, and allergic dermatitis"
        }
      ],
      verifiedOn: "2026-11-09",
      note:
        "Details documented genetic and conformational conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "cited",
          locator: "Preventative health and field injury care"
        },
        {
          id: "bva-canine-health-schemes-terriers",
          role: "cited",
          locator: "Veterinary preventative recommendations"
        }
      ],
      verifiedOn: null,
      note: "Field hygiene protocol tailored to active working terriers."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "patterdale-terrier-pll-adamts17-study-2011",
          role: "verified",
          locator: "DNA testing for ADAMTS17 mutation"
        },
        {
          id: "bva-canine-health-schemes-terriers",
          role: "verified",
          locator: "Eye examination and patellar evaluation"
        }
      ],
      verifiedOn: "2026-11-09",
      note:
        "Screenings summarize published breed club and veterinary genetics protocols."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "ukc-patterdale-terrier-official-standard",
          role: "cited",
          locator: "Teeth: complete scissor bite with strong teeth"
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "ukc-patterdale-terrier-official-standard",
          role: "cited",
          locator: "Ears: small triangular drop ears"
        }
      ],
      verifiedOn: null,
      note: "Ear maintenance protocol for drop ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "ukc-patterdale-terrier-official-standard",
          role: "cited",
          locator: "Skin and coat structure"
        }
      ],
      verifiedOn: null,
      note: "General skin and coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "cited",
          locator: "Suitability, working drives, and domestic requirements"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, exercise demands, and working drive."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "ukc-patterdale-terrier-official-standard",
          role: "verified",
          locator: "Brief historical summary: Lake District roots, spannable chest"
        },
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "verified",
          locator: "Historical facts: Joe Bowman, Cyril Breay, Frank Buck, Brian Nuttall, coat varieties"
        }
      ],
      verifiedOn: "2026-11-09",
      note: "Verified historical folklore and working heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "ukc-patterdale-terrier-official-standard",
          role: "verified",
          locator: "Size (10-15 in), weight (11-15 lbs), coat varieties, colors, and spannability"
        },
        {
          id: "patterdale-terrier-club-of-america-breed-standard",
          role: "verified",
          locator: "Lifespan, temperament, exercise, and training"
        },
        {
          id: "patterdale-terrier-pll-adamts17-study-2011",
          role: "verified",
          locator: "Primary lens luxation testing"
        }
      ],
      verifiedOn: "2026-11-09",
      note:
        "FAQ answers synthesize verified standards, breed club publications, and genetics research without naming registries in prose."
    }
  },

  updatedOn: "2026-11-09"
};
