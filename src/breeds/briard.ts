import type { Breed } from "../schema/breed.types";

export const briard: Breed = {
  slug: "briard",
  name: "Briard",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Berger de Brie",
    "Chien de Berger de Brie",
    "French Lowlands Sheepdog"
  ],

  group: "Sheepdogs and Cattledogs",

  origin: {
    country: "France",
    region:
      "Brie region and the northern and central lowland plains of France"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Briard-fawn.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Briard-fawn.jpg",
      title: "Briard-fawn.jpg",
      description:
        "A fawn Briard showing its long, goat-like coat and bearded head.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2021-08-07",
      uploadedOn: "2021-08-11",
      width: 1511,
      height: 1344,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Briard-fawn.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-20"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Briard_2_jaar.JPG",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Briard_2_jaar.JPG",
      title: "Briard 2 jaar.JPG",
      description: "A two-year-old Briard photographed outdoors.",
      creator: "Dardeche",
      uploader: "SieBot",
      capturedOn: "2007-03-12",
      uploadedOn: "2007-06-07",
      width: 3456,
      height: 2304,
      licenseId: "public-domain",
      attribution:
        "Photo by Dardeche (Dutch Wikipedia), Wikimedia Commons, released into the public domain. Source: https://commons.wikimedia.org/wiki/File:Briard_2_jaar.JPG.",
      restrictions: null,
      metadataCheckedOn: "2026-11-20"
    }
  ],

  overview: {
    summary:
      "A rugged, muscular French sheepdog distinguished by its long, dry, goat-like coat, double rear dewclaws, J-hooked tail, tireless herding stamina, and fiercely loyal family nature.",

    description:
      "The Briard is a large, supple, and athletic herding dog built slightly longer than it is tall, combining sturdy bone with light, agile movement. Its trademark coat—long, dry, and textured like goat hair over a light undercoat—drapes naturally over the body and forms a beard, moustache, and arching eyebrows that lightly veil large, oval, dark eyes. Two unmistakable anatomical features set the breed apart: a pair of well-separated double dewclaws placed low on each hind leg, and a long, uncut tail ending in a subtle J-shaped hook. Often nicknamed 'a heart wrapped in fur,' the Briard pairs steady, affectionate devotion to its household with natural watchfulness around strangers and a strong, independent working drive.",

    history:
      "Long known across northern France as the French Lowlands Sheepdog, the breed evolved to drive flocks along rural pastures and defend them from wolves and poachers. The name 'chien de Brie' appeared in print in 1809 in Abbé Rozier's agricultural treatise, separating the long-coated lowland herder from the shorter-coated Beauceron. Historical accounts credit both the Marquis de Lafayette and Thomas Jefferson with bringing specimens to America, and Briards were exhibited at the first French dog show in 1863 before gaining formal recognition in 1897 (when the goat-hair variety prevailed over a woollier type). During both World Wars, the French military deployed Briards as sentries, pack dogs, and battlefield ambulance dogs locating wounded soldiers. Although numbers fell sharply after the Second World War, dedicated breeders preserved the breed as an all-around herder, sport dog, and devoted companion.",

    originalPurpose:
      "Driving, patrolling, and guarding sheep and livestock across unfenced lowland pastures in France.",

    currentRoles: [
      "Livestock herding and farm guardian",
      "Devoted family companion and home watchdog",
      "Herding, agility, obedience, rally, and tracking competitor",
      "Search-and-rescue partner"
    ]
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "cm",
      male: {
        min: 62,
        max: 68
      },
      female: {
        min: 56,
        max: 64
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 32,
        max: 45
      },
      female: {
        min: 23,
        max: 29
      }
    },

    lifespanYears: {
      min: 10,
      max: 12
    },

    coatType:
      "Long, supple, dry, goat-like outer coat (at least 7 cm long on the body) over a light, fine undercoat, forming a beard, moustache, and eyebrows that lightly veil the eyes.",

    coatLength: "Long",

    coatColors: [
      "Black",
      "Fawn (warm fawn, sometimes with lighter shading on the extremities and inclined parts)",
      "Fawn with slight to medium black overlay (often with a dark mask)",
      "Grey",
      "Blue"
    ],

    sheddingLevel:
      "Low to moderate; loose undercoat hairs tend to remain caught inside the long coat until cleared by thorough brushing and combing",

    droolingLevel:
      "Low to moderate; tight lips keep drool minimal, though long facial hair holds water after drinking",

    distinctiveFeatures: [
      "Supple, muscular, slightly rectangular build with body length slightly exceeding height at the withers",
      "Height at the withers of 62 to 68 cm in males and 56 to 64 cm in females",
      "Typical adult weight of 32 to 45 kg in males and 23 to 29 kg in females",
      "Long, dry, goat-like coat at least 7 cm in length with a light undercoat",
      "Prominent beard, moustache, and arching eyebrows framing the face without masking its structure",
      "Two well-separated double dewclaws with nails placed low on each hind leg",
      "Long, strong head with parallel skull and muzzle planes and a clearly marked stop midway between occiput and nose tip",
      "Strong black nose with open nostrils (or blue/bluish nose in blue-coated dogs) and tight lips",
      "Strong white teeth meeting in a complete, regular scissor bite",
      "Large, oval, horizontal, well-open dark eyes (with paler eyes permitted in blue dogs)",
      "High-set, flat ears covered in long hair, carried naturally short and not plastered flat against the head",
      "Uncut, well-feathered low-set tail reaching at least to the hock and ending in a distinct J-shaped hook"
    ]
  },

  temperament: {
    traits: [
      "Balanced, steady, and fearless—neither aggressive nor timid",
      "Deeply loyal, affectionate, and protective toward family and children",
      "Intelligent and observant with an excellent memory",
      "Independent decision-maker bred to manage flocks with minimal direction",
      "Reserved and watchful around unfamiliar strangers",
      "High energy and tireless stamina requiring a regular job or outlet"
    ],

    scores: {
      affection: 5,
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
        "High; an energetic pastoral worker that craves daily action, long outings, and purposeful mental tasks",

      minutesPerDay: {
        min: 60,
        max: 120
      },

      activities: [
        "Brisk daily walks, trail hikes, and jogging or cycling once mature",
        "Free running and ball or disc retrieving in a large, securely fenced yard",
        "Herding trials and instinct work",
        "Agility, obedience, rally, tracking, and search-and-rescue training",
        "Interactive puzzle feeders and scent-work games"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Brush thoroughly all the way down to the skin several times a week—and daily for show or heavy coats—using a quality pin brush and undercoat rake or comb to lift dead undercoat and prevent mats behind the ears, under the legs, and in the beard.",

      bathing:
        "Bathe as needed based on lifestyle—ranging from monthly to less frequently—after a complete pre-bath brush-out so water does not tighten existing tangles.",

      notes: [
        "Introduce puppies to brushing early and positively so adult grooming sessions remain calm and cooperative.",
        "Avoid shaving the coat, as the dry double coat insulates against cold, brush, and sun.",
        "Check the double rear dewclaws weekly and trim their nails regularly because they do not touch the ground to wear down naturally.",
        "Wipe and comb the beard and moustache after meals and drinks to prevent food buildup and odor.",
        "Inspect the hair-covered ears weekly for wax, redness, or moisture, and brush teeth several times a week."
      ]
    },

    training: {
      difficulty:
        "Moderate; bright, eager to please, and blessed with a sharp memory, yet bred to make independent decisions and test inconsistent handlers",

      tips: [
        "Keep training lively, upbeat, and varied so this clever thinker stays engaged.",
        "Use reward-based methods with clear, steady boundaries—harsh corrections erode trust in this sensitive shepherd.",
        "Begin loose-leash walking and impulse control early before the dog reaches full adult strength.",
        "Redirect natural herding impulses into structured sports or fetch rather than allowing heel-nipping of running children.",
        "Maintain ongoing training and socialization well beyond puppyhood."
      ],

      socialization:
        "Expose puppies early and continuously to unfamiliar people, calm dogs, urban noise, and varied settings so their natural reserve stays steady and confident rather than suspicious."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool and cold climates suited to its weather-resistant double coat",
        "Warm climates when indoor cooling, shade, fresh water, and cooler-hour exercise are provided"
      ],

      aloneTimeTolerance:
        "Low to moderate; deeply bonded to its household and best suited to homes where it is included in daily life rather than isolated for long stretches."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced dog food formulated for an active large-breed dog and matched to life stage (large-breed puppy, adult, or senior).",

    feedingFrequency: {
      puppy:
        "Three to four small measured meals daily until six months of age on a large-breed growth formula",
      adult: "Two measured meals per day",
      senior: "Two portion-controlled meals per day adjusted for lower activity"
    },

    guidelines:
      "Serve measured portions rather than free-feeding, checking body condition by feeling the ribs beneath the long coat to prevent gradual weight gain. Provide fresh, clean water at all times.",

    considerations: [
      "Keep weight lean to protect large-breed hips and elbows from excess strain.",
      "Limit training treats within the daily calorie budget, as some individuals gain weight easily.",
      "Split daily food into two meals and avoid vigorous running right before or after eating to help reduce bloat risk in this deep-chested breed.",
      "Use narrow bowls or beard-friendly dishes to keep facial furnishings cleaner when drinking.",
      "Transition gradually over five to seven days when changing diets."
    ],

    note:
      "Daily calorie needs depend on age, activity level, and neuter status; consult a veterinarian before using home-prepared diets or supplements."
  },

  health: {
    overview:
      "The Briard is generally a hardy large breed with a typical lifespan of 10 to 12 years (often averaging around 12 years). Scientifically established inherited priorities include congenital stationary night blindness (CSNB), caused by an autosomal recessive 4-base-pair deletion in the RPE65 gene—now fully preventable through pre-breeding DNA testing—and hip dysplasia. Other ocular conditions monitored by veterinary ophthalmologists include cataracts, corneal dystrophy, and retinal folds. Additional health concerns noted by breeders and veterinary sources, though less uniformly quantified across populations, include elbow dysplasia, autoimmune thyroiditis (hypothyroidism), gastric dilatation-volvulus (GDV / bloat, a risk for deep-chested large dogs), cancer, immune-mediated disorders, exocrine pancreatic insufficiency, and kidney disease.",

    commonConditions: [
      "Congenital stationary night blindness (CSNB) — a well-established autosomal recessive retinal disorder caused by a 4-base-pair deletion in the RPE65 gene that impairs night vision and retinal function from puppyhood; completely preventable through pre-breeding DNA screening.",
      "Hip dysplasia — a recognized developmental hip-joint disorder in large breeds that can lead to arthritis and lameness; screened radiographically prior to breeding (typically at 24 months or older).",
      "Ocular disorders (cataracts, corneal dystrophy, retinal folds) — eye conditions monitored through periodic board-certified veterinary ophthalmologist examinations.",
      "Gastric dilatation-volvulus (GDV / bloat) — an acute, life-threatening stomach twisting emergency to watch for in large, deep-chested breeds.",
      "Elbow dysplasia (optional screening) — developmental elbow-joint abnormalities monitored by breeders via radiographic evaluation.",
      "Autoimmune thyroiditis / hypothyroidism (optional screening) — immune-mediated thyroid inflammation affecting metabolism, weight, and coat quality.",
      "Other reported or monitored conditions — cancer, immune-mediated diseases, exocrine pancreatic insufficiency, and kidney disease have been noted in breed health guidance and warrant routine veterinary vigilance."
    ],

    preventiveCare: [
      "Verify pre-breeding DNA clearance for congenital stationary night blindness (RPE65 / CSNB), radiographic hip evaluation, and veterinary ophthalmologist eye exams when choosing a puppy.",
      "Feed two measured meals daily and rest the dog before and after meals to help lower bloat risk, while learning early emergency signs of GDV.",
      "Keep body weight lean to reduce long-term wear on hips and elbows.",
      "Inspect and trim double rear dewclaws weekly so they do not snag or tear during active play.",
      "Maintain regular coat brushing, ear checks, dental care, and annual veterinary wellness visits."
    ],

    recommendedScreenings: [
      "DNA test for congenital stationary night blindness (RPE65 / CSNB) prior to breeding",
      "Radiographic hip dysplasia evaluation (typically at 24 months of age or older)",
      "Board-certified veterinary ophthalmologist eye examination (at least once between 6 months and 8 years of age, and periodically for breeding stock)",
      "Optional but recommended screenings: radiographic elbow dysplasia evaluation and full autoimmune thyroiditis blood panel (FT4D, cTSH, TgAA)"
    ],

    dentalCare:
      "Brush teeth several times per week using canine enzymatic toothpaste, paired with routine veterinary dental checks to keep the strong jaws and scissor-bite dentition healthy.",

    earCare:
      "Check the hair-covered drop ears weekly for wax buildup, odor, or redness, cleaning gently with a veterinarian-approved solution and drying carefully.",

    skinCare:
      "Part the long coat down to the skin during weekly brushing to check for mats, parasites, or skin irritation; keep the coat clean and mat-free rather than shaving it."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Experienced handlers comfortable with large, strong-willed herding breeds",
      "Active households that enjoy daily hikes, running, herding, or dog sports",
      "Homes with a large, securely fenced yard or rural space",
      "Owners willing to commit several sessions a week to thorough coat brushing",
      "Families seeking an intensely loyal, watchful, and affectionate companion"
    ],

    notIdealFor: [
      "First-time dog owners unprepared for high energy and independent herding instincts",
      "Apartment dwellers without reliable access to large open exercise areas",
      "Households that leave a dog alone for long workdays on a routine basis",
      "Owners looking for a low-grooming coat or a dog that greets every stranger enthusiastically"
    ]
  },

  funFacts: [
    "French admirers famously call the Briard 'a heart wrapped in fur,' capturing its gentle loyalty to family beneath a rugged exterior.",
    "Two fully formed double dewclaws on each hind leg are a classic breed hallmark traditionally prized by shepherds for extra traction on uneven pasture ground.",
    "Both Thomas Jefferson and the Marquis de Lafayette are credited with helping introduce Briards to the United States.",
    "During both World Wars, French troops relied on Briards as sentries, pack dogs, and battlefield ambulance dogs helping search parties find wounded soldiers.",
    "The uncut tail ends in a gentle J-shaped hook known in French as a 'crochet.'"
  ],

  faq: [
    {
      question: "How big does a Briard get?",
      answer:
        "Adult male Briards stand 62 to 68 cm at the withers and typically weigh 32 to 45 kg, while females stand 56 to 64 cm and typically weigh 23 to 29 kg."
    },
    {
      question: "Why do Briards have double dewclaws on their back legs?",
      answer:
        "Double dewclaws—two distinct, well-separated toes with nails placed low on each hind leg—are a signature trait preserved by French shepherds, who valued the wider foot base for stability and grip while working rough pastures."
    },
    {
      question: "How long do Briards live?",
      answer:
        "Briards typically live 10 to 12 years, with average life expectancy often cited around 12 years."
    },
    {
      question: "How much grooming does a Briard coat require?",
      answer:
        "Plan on thorough brushing and combing all the way down to the skin several times a week (and daily for heavy coats) using a pin brush and undercoat rake to prevent mats. Start brushing gently in puppyhood, and avoid shaving the natural double coat."
    },
    {
      question: "Are Briards suited to apartment living?",
      answer:
        "Generally no. Their large frame, strong working stamina, and watchful herding nature are much better suited to a house with a large, securely fenced yard and generous daily exercise."
    },
    {
      question: "What is congenital stationary night blindness (CSNB) in Briards?",
      answer:
        "CSNB is an inherited retinal condition caused by a specific 4-base-pair deletion in the RPE65 gene that impairs night vision from puppyhood. Because a reliable DNA test exists, responsible breeders test breeding stock to avoid producing affected puppies."
    },
    {
      question: "What health screenings should Briard breeders complete?",
      answer:
        "Core pre-breeding tests include a CSNB (RPE65) DNA test, radiographic hip evaluation (typically at 24 months or older), and a veterinary ophthalmologist eye exam, with elbow radiographs and an autoimmune thyroid panel also recommended."
    }
  ],

  references: [
    "natureserve-canis-lupus-familiaris",
    "fci-briard-official-standard",
    "fci-briard-nomenclature",
    "scc-briard-breed-standard",
    "club-du-chien-de-brie-profile",
    "akc-briard-breed-standard",
    "akc-briard-breed-profile",
    "the-kennel-club-briard-breed-standard",
    "rkc-briard-breed-profile",
    "ukc-briard-breed-standard",
    "ofa-briard-chic-requirements",
    "bca-briard-ofa-chic",
    "briard-csnb-rpe65-study-1998",
    "the-dog-api",
    "wikimedia-berger-de-brie-fawn-tomasz-sienicki",
    "wikimedia-chien-de-berger-de-brie-pleple2000"
  ],

  evidence: {
    scientificName: {
      reliability: "reliable_source",
      sources: [
        {
          id: "natureserve-canis-lupus-familiaris",
          role: "verified",
          locator: "Related ITIS Names: Canis lupus familiaris Linnaeus, 1758 (TSN 726821); Wilson and Reeder 2005"
        }
      ],
      verifiedOn: "2026-11-20",
      note: "Standard domestic dog subspecies taxonomy verified via NatureServe Explorer / ITIS."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator: "Standard heading: BERGER DE BRIE (Briard); French Lowlands Sheepdog"
        },
        {
          id: "fci-briard-nomenclature",
          role: "verified",
          locator: "BERGER DE BRIE (113), BRIARD"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "alternateNames: Berger de Brie"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator:
            "Group 1 Sheepdogs and Cattle Dogs (except Swiss Cattle Dogs), Section 1 Sheepdogs, with working trial"
        },
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "Herding Group (recognized 1928)"
        },
        {
          id: "the-kennel-club-briard-breed-standard",
          role: "verified",
          locator: "Pastoral Group"
        },
        {
          id: "ukc-briard-breed-standard",
          role: "verified",
          locator: "Herding Dog Group"
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "User-facing group label avoids registry acronyms and group numbers per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-briard-nomenclature",
          role: "verified",
          locator: "Country of origin: FRANCE"
        },
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator: "ORIGIN: France; French Lowlands Sheepdog / chien de Brie"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "origin.country: France"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator:
            "UTILIZATION, BRIEF HISTORICAL SUMMARY (1809 Abbé Rozier, WWI/WWII sentinel & ambulance dog), GENERAL APPEARANCE"
        },
        {
          id: "scc-briard-breed-standard",
          role: "verified",
          locator: "Historique (1809, 1897 goat-hair vs woolly varieties) & Description générale"
        },
        {
          id: "rkc-briard-breed-profile",
          role: "verified",
          locator: "About this breed (1863 first French dog show, 1897 recognition, WWI/WWII)"
        },
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "About the Breed, History, Did You Know (Lafayette, Thomas Jefferson)"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator:
            "HEAD, EYES (oval, paler allowed in blue dogs), NOSE (blue/bluish in blue dogs), EARS, DOUBLE DEWCLAWS, COAT (goat-like, >=7 cm, slight undercoat), COLOUR"
        },
        {
          id: "the-kennel-club-briard-breed-standard",
          role: "verified",
          locator: "General appearance, Eyes, Mouth, Neck (updated 2025-08-01)"
        },
        {
          id: "akc-briard-breed-standard",
          role: "verified",
          locator: "General Appearance, Tail (J-crook), Hindquarters (double dewclaws)"
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "Corrected undercoat to 'light/slight', eye shape to 'oval' (with paler eyes allowed in blue dogs), and warm fawn shading to lighter on extremities per FCI Standard No. 113."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator: "SIZE: Males 62–68 cm at the withers; Females 56–64 cm at the withers"
        },
        {
          id: "akc-briard-breed-profile",
          role: "conflicting",
          locator: "Height: 23–27 inches (male), 22–25.5 inches (female)"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "height (cm): male 58–69, female 56–65"
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "Kept FCI Standard No. 113 metric heights (62–68 cm males, 56–64 cm females) over The Dog API (58–69 / 56–65 cm) and AKC inch ranges."
    },

    "physical.height.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator: "SIZE: Males 62–68 cm"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "height.male.max: 69 cm"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "physical.height.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator: "SIZE: Females 56–64 cm"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "height.female.max: 65 cm"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "weight (kg): male 32–45, female 23–29"
        },
        {
          id: "akc-briard-breed-profile",
          role: "cited",
          locator: "Weight: 55–100 pounds (overall range in pounds)"
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "FCI Standard No. 113 does not publish numerical weight limits. Stored The Dog API's published metric weights (32–45 kg males, 23–29 kg females), consistent with AKC's 55–100 lb range."
    },

    "physical.weight.male.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "weight.male.max: 45 kg"
        },
        {
          id: "akc-briard-breed-profile",
          role: "cited",
          locator: "Weight upper range: 100 pounds"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "physical.weight.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "weight.female.max: 29 kg"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "lifespanYears: 10–12"
        },
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12 years"
        },
        {
          id: "rkc-briard-breed-profile",
          role: "cited",
          locator: "Lifespan: Over 10 years"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-briard-breed-profile",
          role: "verified",
          locator: "Breed characteristics: Sheds: Yes"
        },
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "Grooming: undercoat rake eliminates dead hair and lessens shedding"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator: "Lips: tight fitting"
        },
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator:
            "BEHAVIOUR/TEMPERAMENT: Balanced temperament, neither aggressive nor timid; steady and fearless"
        },
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "confident / smart / faithful; protective of family, wary with outsiders; excellent memory"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "temperament.traits: Loyal, intelligent, protective, confident, courageous, devoted"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-briard-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics"
        },
        {
          id: "fci-briard-official-standard",
          role: "cited",
          locator: "Behaviour / Temperament"
        }
      ],
      verifiedOn: null,
      note: "Editorial 1–5 ratings synthesized from kennel club descriptions."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-briard-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, Nutrition"
        },
        {
          id: "rkc-briard-breed-profile",
          role: "cited",
          locator: "Breed characteristics: Exercise (more than 2 hours/day), Grooming (every day), Large house/garden"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-briard-breed-profile",
          role: "verified",
          locator: "Exercise: More than 2 hours per day"
        },
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "Exercise: requires a job and craves action (hikers, bicyclers, joggers)"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "rkc-briard-breed-profile",
          role: "cited",
          locator: "Exercise: More than 2 hours per day"
        },
        {
          id: "akc-briard-breed-profile",
          role: "cited",
          locator: "Exercise recommendations"
        }
      ],
      verifiedOn: null,
      note: "Editorial estimate of 60–120 minutes/day reflecting high pastoral exercise needs."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "rkc-briard-breed-profile",
          role: "cited",
          locator: "Size of home: Large house; Size of garden: Large garden"
        },
        {
          id: "akc-briard-breed-profile",
          role: "cited",
          locator: "Exercise: needs a large, securely fenced area"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "Exercise: large, securely fenced area"
        },
        {
          id: "rkc-briard-breed-profile",
          role: "verified",
          locator: "Size of home: Large house; Size of garden: Large garden"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator: "COAT: long, dry goat-like hair with light undercoat"
        },
        {
          id: "rkc-briard-breed-profile",
          role: "verified",
          locator: "Pastoral Group weatherproof double coat"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "About the Breed & Exercise: strong need for human companionship"
        },
        {
          id: "scc-briard-breed-standard",
          role: "verified",
          locator: "Comportement: ne doit pas être relégué en chenil ni attaché"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-briard-breed-profile",
          role: "cited",
          locator: "Nutrition: high-quality age-appropriate food, calorie/weight monitoring"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-briard-breed-profile",
          role: "cited",
          locator: "Age-appropriate diet guidance"
        }
      ],
      verifiedOn: null,
      note: "Standard large-breed life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "briard-csnb-rpe65-study-1998",
          role: "verified",
          locator: "Mol Vis 1998 (PMID 9808841): homozygous 4-bp (AAGA) deletion in RPE65 causing CSNB"
        },
        {
          id: "bca-briard-ofa-chic",
          role: "verified",
          locator: "Required: Hip Dysplasia (min 24 mo), ACVO Eye Exam, CSNB DNA; Optional: Autoimmune Thyroiditis, Elbow Dysplasia"
        },
        {
          id: "rkc-briard-breed-profile",
          role: "verified",
          locator: "CSNB DNA test, BVA/KC Hip Scheme, and Jan 6, 2025 import/overseas-sire CSNB registration restriction"
        },
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "Health: hip dysplasia, CSNB, cataracts, corneal dystrophy, retinal folds, hypothyroidism, immune diseases, EPI, kidney disease, cancer"
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "Distinguishes genetically established conditions and required screenings from optional/reported concerns per Rule 8."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "briard-csnb-rpe65-study-1998",
          role: "verified",
          locator: "RPE65 4-bp deletion and CSNB (PMID 9808841)"
        },
        {
          id: "bca-briard-ofa-chic",
          role: "verified",
          locator: "Hip dysplasia, eye disorders, CSNB, autoimmune thyroiditis, elbow dysplasia"
        },
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "Health section condition list"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "bca-briard-ofa-chic",
          role: "cited",
          locator: "Pre-breeding health testing"
        },
        {
          id: "akc-briard-breed-profile",
          role: "cited",
          locator: "Grooming, Nutrition, and Health guidance"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "bca-briard-ofa-chic",
          role: "verified",
          locator:
            "CHIC required: Hip Dysplasia (OFA/PennHIP/International, min 24 mo), ACVO Eye Exam (6 mo–8 yr), CSNB DNA; Optional: Autoimmune Thyroiditis (FT4D, cTSH, TgAA), Elbow Dysplasia"
        },
        {
          id: "ofa-briard-chic-requirements",
          role: "verified",
          locator: "OFA CHIC Briard program"
        },
        {
          id: "rkc-briard-breed-profile",
          role: "verified",
          locator: "Good/Best Practice: genetic diversity, CSNB DNA test, BVA/KC Hip Scheme"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "the-kennel-club-briard-breed-standard",
          role: "cited",
          locator: "Mouth: strong white teeth, complete scissor bite"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-briard-official-standard",
          role: "cited",
          locator: "Ears: set on high, flat, covered with long hair"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-briard-breed-profile",
          role: "cited",
          locator: "Grooming: brush completely to the skin several times a week"
        }
      ],
      verifiedOn: null,
      note: null
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-briard-breed-profile",
          role: "cited",
          locator: "About the Breed, Exercise, Grooming, Training"
        },
        {
          id: "rkc-briard-breed-profile",
          role: "cited",
          locator: "Breed characteristics"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability summary based on large size, high exercise, daily grooming, and herding drive."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "'heart wrapped in fur', Thomas Jefferson & Lafayette"
        },
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator: "Double dewclaws, crochet tail, WWI/WWII military service"
        },
        {
          id: "rkc-briard-breed-profile",
          role: "verified",
          locator: "About this breed: WWI/WWII pack and search dogs"
        },
        {
          id: "club-du-chien-de-brie-profile",
          role: "cited",
          locator: "French pastoral heritage"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator: "Size (62–68 cm / 56–64 cm), double dewclaws, coat"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "Weight (32–45 kg / 23–29 kg), lifespan (10–12 years)"
        },
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "Grooming, living environment, training"
        },
        {
          id: "briard-csnb-rpe65-study-1998",
          role: "verified",
          locator: "CSNB RPE65 4-bp deletion (PMID 9808841)"
        },
        {
          id: "bca-briard-ofa-chic",
          role: "verified",
          locator: "CHIC pre-breeding health screenings"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    }
  },

  updatedOn: "2026-11-20"
};
