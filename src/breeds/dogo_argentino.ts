import type { Breed } from "../schema/breed.types";

export const dogo_argentino: Breed = {
  slug: "dogo-argentino",
  name: "Dogo Argentino",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Argentine Dogo",
    "Argentine Mastiff",
    "Argentinean Mastiff",
    "Dogue Argentin",
    "Argentinische Dogge",
    "Dogo"
  ],

  group: "Mastiff-type molossoid working dogs (without working trial)",

  origin: {
    country: "Argentina",
    region: "Córdoba Province, central Argentina"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dogo_Argentino_in_a_field.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Dogo_Argentino_in_a_field.jpg",
      title: "Dogo Argentino in a field.jpg",
      description:
        "An adult Dogo Argentino outdoors in a grassy field showing its white coat and athletic build.",
      creator: "Mixtus",
      uploader: "Mixtus",
      capturedOn: "2025-06-01",
      uploadedOn: "2025-06-12",
      width: 2550,
      height: 3300,
      licenseId: "cc-by-4.0",
      attribution:
        "Photo by Mixtus (Dan Jensen), Wikimedia Commons, CC BY 4.0. Source: https://commons.wikimedia.org/wiki/File:Dogo_Argentino_in_a_field.jpg. License: https://creativecommons.org/licenses/by/4.0/. Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dogo_Argentino_-Argentijnse_dog_14-04-2010_17-00-50.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Dogo_Argentino_-Argentijnse_dog_14-04-2010_17-00-50.jpg",
      title: "Dogo Argentino -Argentijnse dog 14-04-2010 17-00-50.jpg",
      description:
        "A muscular Dogo Argentino standing in profile outdoors.",
      creator: "Paul Hermans",
      uploader: "Paul Hermans",
      capturedOn: "2010-04-14",
      uploadedOn: "2010-04-14",
      width: 1967,
      height: 1308,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Paul Hermans, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Dogo_Argentino_-Argentijnse_dog_14-04-2010_17-00-50.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    }
  ],

  overview: {
    summary:
      "A powerful, athletic, all-white big-game hunting mastiff from Argentina, bred for pack pursuit of wild boar and puma and known for fearless courage, explosive strength, and intense devotion to experienced owners.",

    description:
      "Created as a serious pack-hunting athlete rather than a sluggish giant, the Dogo Argentino pairs heavy bone and hard muscle with quick, agile movement and deep lung capacity. Its short, plain, smooth coat is completely white—allowing hunters to spot the dog quickly in dense cover—with at most one dark patch near the eye covering no more than 10 percent of the head. A strong, balanced head sits atop a thick yet shapely neck, displaying a convex skull, deep muzzle, broad black nose, and alert dark or hazelnut eyes with a distinctly resolute look. Loyal and affectionate with its own household, the breed carries strong guarding and prey drives that call for confident, experienced handling.",

    history:
      "In 1928, Argentine physician and avid hunter Dr. Antonio Nores Martinez of Córdoba Province began developing a dedicated pack hound capable of tracking and catching wild boar, peccaries, and mountain lions across Argentina's rugged plains and brush. Starting from the now-extinct Fighting Dog of Córdoba, he systematically crossed in multiple imported breeds—including the Great Dane, Boxer, Spanish Mastiff, Pyrenean Mastiff, Bull Terrier, Dogue de Bordeaux, English Pointer, Irish Wolfhound, and Bulldog—selecting for stamina, scenting ability, jaw power, pack cooperation, and a stark white coat. The resulting breed became Argentina's first internationally recognized native dog and is valued today both for big-game hunting and as a steadfast protector in experienced homes.",

    originalPurpose:
      "Tracking, chasing, and holding dangerous big game—especially wild boar, peccaries, and puma—in cooperative packs across Argentine terrain.",

    currentRoles: [
      "Big-game hunting and pack catch dog",
      "Vigilant estate and family protector",
      "Police, search-and-rescue, and working partner",
      "Competitor in obedience, agility, rally, and tracking for experienced handlers"
    ]
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "cm",
      male: {
        min: 60,
        max: 68
      },
      female: {
        min: 60,
        max: 65
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 40,
        max: 45
      },
      female: {
        min: 40,
        max: 43
      }
    },

    lifespanYears: {
      min: 9,
      max: 15
    },

    coatType:
      "Uniform, short, plain, and smooth coat roughly 1.5 to 2 cm long lying close to the body, sometimes developing a light undercoat in cold climates.",

    coatLength: "Short",

    coatColors: [
      "Completely white (a single dark or black patch near the eye is allowed if it covers no more than 10 percent of the head)"
    ],

    sheddingLevel:
      "Moderate; the short white coat sheds steadily through the year",

    droolingLevel:
      "Moderate; moderately thick, relatively tight lips keep resting drool lower than in heavier mastiffs, though saliva increases after drinking or exercise",

    distinctiveFeatures: [
      "Large, harmoniously muscled, athletic mastiff frame slightly longer than tall (length exceeding height by up to 10 percent)",
      "Withers height of 60 to 68 cm for males and 60 to 65 cm for females",
      "Lean working weight of 40 to 45 kg for males and 40 to 43 kg for females",
      "Short, smooth, completely white coat (at most one dark patch on the head not exceeding 10 percent of head surface)",
      "Strong head with a convex skull, slightly concave muzzle of matching length, and broad black nose",
      "Powerful jaws with pronounced cheek muscles and a complete scissor or pincer bite",
      "Medium-sized, almond-shaped dark or hazelnut eyes with preferably black rims and a sharp, alert gaze",
      "Thick, muscular, well-arched neck with elastic skin and minimal loose dewlap",
      "Deep, broad chest reaching below the elbows for substantial lung capacity",
      "Thick, medium-high-set saber tail tapering toward the hock and rising in a smooth arc during movement",
      "Straight, heavily boned forelegs and powerful, moderately angulated hindquarters built for sudden bursts of speed"
    ]
  },

  temperament: {
    traits: [
      "Courageous, determined, and fearless when working",
      "Loyal, calm, and deeply affectionate with its own household",
      "Naturally protective and territorial around home and family",
      "Alert, observant, and quick to respond to its handler",
      "Confident and steady without nervous shyness",
      "Strong-willed and physically powerful, needing firm, fair leadership",
      "Intense prey drive toward wild game and small fast-moving animals",
      "Can be selective or assertive toward unfamiliar dogs without careful management",
      "Tends to hunt quietly rather than baying loudly on a scent trail"
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 2,
      withStrangers: 2,
      protectiveness: 5,
      independence: 3,
      trainability: 4,
      barking: 2,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; an explosive, athletic working breed that requires vigorous daily physical outlets and structured mental engagement",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Several brisk leashed walks daily, trail hikes, or steady runs",
        "Active play in a large, securely fenced yard",
        "Dog sports such as agility, obedience, rally, and scent tracking",
        "Retrieving balls or flying discs, supervised swimming, and indoor trick or hide-and-seek games"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush weekly with a rubber grooming mitt or soft bristle brush to clear loose white hairs and keep the smooth coat clean.",

      bathing:
        "Bathe only occasionally with a mild canine shampoo, wiping the coat down between baths as needed.",

      notes: [
        "Trim strong, fast-growing nails regularly with a clipper or grinder to prevent splitting or cracking.",
        "Check ears weekly for wax and debris to help prevent ear infections.",
        "Brush teeth regularly with enzymatic canine toothpaste.",
        "Use pet-safe sunscreen on lightly pigmented areas of the nose, ears, and belly during prolonged intense sun exposure."
      ]
    },

    training: {
      difficulty:
        "Challenging; bright and capable, yet combines formidable strength, high prey drive, and strong territorial instincts that require an experienced, consistent handler",

      tips: [
        "Begin obedience, loose-leash manners, and impulse-control training early in puppyhood before adult weight and power develop.",
        "Pair calm, consistent boundaries with positive reinforcement rather than harsh force.",
        "Supervise interactions with guests and manage access to unfamiliar dogs and small pets.",
        "Always exercise on a sturdy leash or inside a tall, securely fenced yard."
      ],

      socialization:
        "Provide thorough, structured, ongoing socialization from early puppyhood with varied people, calm vaccinated dogs, everyday noises, and unfamiliar settings so protective instincts mature into steady, discerning judgment."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Warm climates, where the short white coat reflects heat effectively (with shade and sun protection for exposed pink skin)",
        "Temperate climates",
        "Cool climates when housed indoors with a warm coat for freezing outdoor temperatures"
      ],

      aloneTimeTolerance:
        "Moderate once daily physical and mental outlets are met, though this bonded guardian prefers regular interaction with its household."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced large-breed dog food matched to life stage (puppy, adult, or senior) and daily athletic workload.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until about six months old, then two daily meals on a large-breed growth formula supporting steady skeletal development.",
      adult:
        "Two measured meals daily to sustain heavy lean muscle while avoiding overly large single meals.",
      senior:
        "Two portion-controlled meals daily adjusted for lower calorie burn and joint comfort."
    },

    guidelines:
      "Measure every meal and monitor lean muscular condition closely so excess weight does not burden large joints. Split daily rations into two meals, avoid intense running immediately before and after eating as a precaution against bloat, and keep clean, fresh water available at all times.",

    considerations: [
      "Work with a veterinarian to choose a large-breed puppy formula and avoid unprescribed calcium supplements during growth.",
      "Keep adult weight trim and athletic to protect hips and elbows.",
      "Rest the dog before and after meals to help lower bloat risk.",
      "Transition between food formulas gradually over five to seven days."
    ],

    note:
      "Daily calorie needs vary widely between active hunting or sport dogs and quieter household companions. Consult a veterinarian to refine portions."
  },

  health: {
    overview:
      "The Dogo Argentino is generally sturdy and athletic with a broad typical lifespan of 9 to 15 years. Because of its solid white coat genetics, pigment-associated congenital sensorineural deafness is scientifically established in the breed—affecting roughly one quarter of tested dogs in a large retrospective hearing study, with patched dogs showing a lower rate—making puppy BAER testing essential. Core parent-club pre-breeding screenings also include hip and cardiac evaluations, alongside general large-breed vigilance for bloat and sun sensitivity.",

    commonConditions: [
      "Congenital sensorineural deafness — scientifically established pigment-linked unilateral or bilateral hearing loss (a retrospective study of 811 tested US dogs found 20.35% unilaterally deaf and 5.43% bilaterally deaf); detectable in puppies via BAER testing",
      "Hip dysplasia — developmental hip joint malformation screened via pre-breeding radiographs to reduce osteoarthritis risk",
      "Cardiac conditions — congenital or acquired heart disorders evaluated through veterinary cardiac examinations",
      "Gastric dilatation-volvulus (bloat) — an acute, life-threatening conformational risk in large, deep-chested breeds requiring emergency care",
      "Sunburn and solar dermatitis — ultraviolet sensitivity on lightly pigmented skin of the nose, ears, and abdomen during extended sun exposure",
      "Additional monitored conditions — elbow dysplasia and autoimmune thyroiditis are also tracked electively by some breeders and veterinarians"
    ],

    preventiveCare: [
      "Confirm that breeding parents and puppies have completed BAER hearing tests, plus parental hip and cardiac evaluations.",
      "Divide daily food into two meals and avoid vigorous exercise around mealtimes to reduce bloat risk.",
      "Protect lightly pigmented skin from prolonged intense sunlight with shade and pet-safe sunscreen.",
      "Keep ears clean and dry, trim fast-growing nails regularly, maintain lean weight, and schedule annual veterinary wellness checks."
    ],

    recommendedScreenings: [
      "Brainstem Auditory Evoked Response (BAER) hearing evaluation",
      "Radiographic hip dysplasia evaluation prior to breeding",
      "Veterinary cardiac examination prior to breeding",
      "Optional/elective checks (elbow radiographs, thyroid panel, and ophthalmologist exam) as advised by a veterinarian or breeder"
    ],

    dentalCare:
      "Brush teeth regularly with canine enzymatic toothpaste and schedule periodic veterinary dental exams to keep the strong jaws and gums healthy.",

    earCare:
      "Check ears weekly for wax buildup, debris, or redness and clean gently with a veterinarian-approved solution to prevent ear infections.",

    skinCare:
      "Inspect the short white coat and skin weekly during brushing for scrapes, parasites, or sun irritation, avoiding unnecessary frequent baths."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Highly experienced owners confident in guiding powerful guardian or big-game hunting breeds with steady leadership",
      "Active households or rural properties with a large, securely fenced yard",
      "Hunters or sport handlers committed to daily exercise, structured training, and ongoing socialization",
      "Homes without small free-roaming pets"
    ],

    notIdealFor: [
      "First-time dog owners or tentative handlers unprepared for massive strength and protective instincts",
      "Apartments or dense urban housing without secure outdoor space",
      "Owners seeking a carefree off-leash dog-park companion with unfamiliar dogs",
      "Sedentary households wanting a low-exercise pet"
    ]
  },

  funFacts: [
    "Dr. Antonio Nores Martinez began creating the breed in Córdoba in 1928, starting from the extinct Fighting Dog of Córdoba and blending traits from multiple imported working, mastiff, terrier, and pointing breeds.",
    "Its stark white coat was deliberately chosen so hunters could spot the dogs easily against dark Argentine brush and avoid accidental injury during fast-moving hunts.",
    "Unlike vocal scenthounds that bay continuously along a trail, the Dogo Argentino tracks and closes on game quietly.",
    "A large retrospective hearing study of 811 US Dogo Argentinos found that dogs carrying a dark head patch had a significantly lower rate of congenital deafness than completely unpatched white dogs.",
    "Because of its immense strength and guarding heritage, the Dogo Argentino faces ownership restrictions or bans in several countries, so prospective owners should always check local laws."
  ],

  faq: [
    {
      question: "What kind of dog is a Dogo Argentino?",
      answer:
        "It is a large, heavily muscled, all-white mastiff-type hunting breed developed in Argentina in the 1920s for pack pursuit of wild boar and puma, valued today as both a working hunter and a loyal guardian for experienced owners."
    },
    {
      question: "How tall and heavy does a Dogo Argentino get?",
      answer:
        "Adult males stand 60 to 68 cm at the withers and weigh 40 to 45 kg, while adult females stand 60 to 65 cm and weigh 40 to 43 kg."
    },
    {
      question: "What is the average lifespan of a Dogo Argentino?",
      answer:
        "Typical life expectancy ranges from 9 to 15 years with lean weight management, steady exercise, and routine veterinary care."
    },
    {
      question: "Is a Dogo Argentino suitable for first-time dog owners or apartments?",
      answer:
        "No. Its immense strength, high prey drive, territorial instincts, and daily exercise needs require an experienced handler and a home with a large, securely fenced yard."
    },
    {
      question: "Why is hearing testing important for Dogo Argentinos?",
      answer:
        "Like several predominantly white breeds, Dogo Argentinos have a documented risk of pigment-linked congenital sensorineural deafness, so responsible breeders perform BAER hearing tests on puppies and breeding stock."
    },
    {
      question: "How much grooming does a Dogo Argentino need?",
      answer:
        "Very little: weekly brushing with a rubber mitt or soft brush and occasional baths handle its short white coat, paired with regular nail trims, ear checks, tooth brushing, and sun protection on exposed pink skin."
    },
    {
      question: "How much daily exercise does a Dogo Argentino need?",
      answer:
        "Plan on 60 to 90 minutes of vigorous daily activity, combining brisk walks, hikes, fenced yard play, and structured training or dog sports."
    },
    {
      question: "What health screenings are recommended for breeding Dogo Argentinos?",
      answer:
        "Core pre-breeding checks include BAER hearing testing, radiographic hip evaluation, and a veterinary cardiac exam, with elbows, thyroid, and eyes checked electively when advised."
    }
  ],

  references: [
    "natureserve-canis-lupus-familiaris",
    "fci-dogo-argentino-official-standard",
    "fci-dogo-argentino-nomenclature",
    "akc-dogo-argentino-breed-standard",
    "akc-dogo-argentino-breed-profile",
    "ukc-dogo-argentino-breed-standard",
    "daca-health-programs",
    "ofa-dogo-argentino-chic-requirements",
    "pubmed-dogo-argentino-deafness-2021",
    "wikimedia-dogo-argentino-in-a-field",
    "wikimedia-dogo-argentino-argentijnse-dog",
    "the-dog-api"
  ],

  evidence: {
    scientificName: {
      reliability: "reliable_source",
      sources: [
        {
          id: "natureserve-canis-lupus-familiaris",
          role: "verified",
          locator: "Canis lupus familiaris (Domestic Dog) taxonomic record"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Domestic dog taxonomic name verified via NatureServe Explorer."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "Standard heading: DOGO ARGENTINO"
        },
        {
          id: "fci-dogo-argentino-nomenclature",
          role: "verified",
          locator: "Official nomenclature (No. 292): DOGO ARGENTINO, DOGUE ARGENTIN, ARGENTINISCHE DOGGE"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names: Argentine Mastiff, Argentine Dogo"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified across FCI Standard No. 292, FCI Nomenclature, and The Dog API."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 2 Pinscher and Schnauzer, Molossoid breeds, Swiss Mountain and Cattle Dogs; Section 2.1 Mastiff type Molossoids, without working trial"
        },
        {
          id: "fci-dogo-argentino-nomenclature",
          role: "verified",
          locator: "Group 2, Section 2 Molossoid breeds, Subsection Mastiff type, not subject to a working trial"
        },
        {
          id: "akc-dogo-argentino-breed-standard",
          role: "verified",
          locator: "Working Group"
        },
        {
          id: "ukc-dogo-argentino-breed-standard",
          role: "cited",
          locator: "Guardian Dog Group"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group: Working"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "User-facing group label omits registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "ORIGIN: Argentina; Córdoba Province"
        },
        {
          id: "fci-dogo-argentino-nomenclature",
          role: "verified",
          locator: "Country of origin: ARGENTINA"
        },
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "History: Province of Cordoba, central Argentina"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: Argentina"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "About the Breed, History (Dr. Antonio Nores Martinez, 1928, Cordoba), and Roles"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Written in original prose grounded in FCI Standard No. 292 and AKC records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS, HEAD, BODY, TAIL, LIMBS, COAT, COLOUR (solid white, dark head patch <=10%), SIZE AND WEIGHT"
        },
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "About the Breed: short plain smooth completely white coat, dark patch near eye <=10% of head"
        },
        {
          id: "akc-dogo-argentino-breed-standard",
          role: "verified",
          locator: "General Appearance, Head, Coat, Color"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.coat_colors (broader unstandardized colour list excluded in favor of official white coat)"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Coat colour follows FCI Standard No. 292 and AKC (completely white with at most one dark head patch <=10%), excluding The Dog API's broad unstandardized colour list."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Height at the withers — Males 60 to 68 cm, Females 60 to 65 cm"
        },
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "cited",
          locator: "Height: 24-26.5 inches (male), 24-25.5 inches (female)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height: male 61-67 cm, female 61-65 cm"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Preserved in published centimetres from FCI Standard No. 292 (60-68 cm males, 60-65 cm females), which supersedes The Dog API's 61-67 / 61-65 cm range."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Weight — Males 40 to 45 kg, Females 40 to 43 kg"
        },
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "cited",
          locator: "Weight: 80-100 pounds"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.weight: male 40-45 kg, female 40-43 kg"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Preserved in published kilograms from FCI Standard No. 292 (40-45 kg males, 40-43 kg females), matching The Dog API."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 9-15 years"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span: 9-15 years"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Updated to 9-15 years, matching both the live AKC breed profile and The Dog API."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "Grooming & Breed Traits: short smooth coat needing weekly brushing"
        },
        {
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "COAT: Uniform, short, plain, smooth, 1.5 to 2 cm"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "Lips: Moderately thick, short and tight"
        },
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Moderately thick, short, tight lips limit resting drool relative to heavier mastiffs."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Silent hunter, astute, alert, tenacious, courageous, confident, territorial"
        },
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "Loyal, courageous, athletic; alert and intelligent expression"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament: Courageous, loyal, protective, confident, intelligent, energetic"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics ratings"
        }
      ],
      verifiedOn: null,
      note: "Editorial 1-5 scores reflecting verified big-game hunting drive, strong protectiveness, and dog assertiveness."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "cited",
          locator: "Grooming (weekly brush, occasional bath, nail trims, ear checks, tooth brushing), Exercise, Nutrition"
        },
        {
          id: "daca-health-programs",
          role: "cited",
          locator: "Parent club care and health guidance"
        }
      ],
      verifiedOn: null,
      note: "Combines kennel club grooming, exercise, and sun-protection care."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "Exercise: athletic working dog needing several daily walks, fenced play, or sports"
        },
        {
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "UTILIZATION: Big-game pack hunter built for explosive energy"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "cited",
          locator: "Daily exercise and active sport recommendations"
        }
      ],
      verifiedOn: null,
      note: "Editorial estimate of 60 to 90 minutes daily for an adult athletic working breed."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "cited",
          locator: "Large size, high athleticism, and preference for fenced yard access"
        }
      ],
      verifiedOn: null,
      note: "Editorial assessment that large size, protective territorial instincts, and exercise needs make apartments unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "Exercise: backyard, preferably fenced"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "COAT: Short smooth white coat adapted to warm Argentine plains, light undercoat in cold climates"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "cited",
          locator: "Loyal family guardian traits"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "cited",
          locator: "Nutrition: large-breed life-stage formula tailored with veterinarian"
        }
      ],
      verifiedOn: null,
      note: "Reflects AKC large-breed nutrition guidance and bloat precautions."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "cited",
          locator: "Nutrition: life-stage meal frequency guidance"
        }
      ],
      verifiedOn: null,
      note: "Standard large-breed life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pubmed-dogo-argentino-deafness-2021",
          role: "verified",
          locator: "Retrospective BAER study of 811 US Dogo Argentinos: 25.77% overall congenital sensorineural deafness (20.35% unilateral, 5.43% bilateral); lower prevalence in patched dogs"
        },
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "Recommended Health Tests From the National Breed Club: Hip Evaluation, Cardiac Exam, BAER Testing"
        },
        {
          id: "ofa-dogo-argentino-chic-requirements",
          role: "verified",
          locator: "OFA CHIC health testing requirements (BAER, Hips, Cardiac)"
        },
        {
          id: "daca-health-programs",
          role: "verified",
          locator: "Dogo Argentino Club of America Health Programs"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Grounds congenital sensorineural deafness in peer-reviewed veterinary data alongside core parent-club screenings."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pubmed-dogo-argentino-deafness-2021",
          role: "verified",
          locator: "Congenital sensorineural deafness prevalence (25.77% overall across 811 tested dogs)"
        },
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "Core screening focus: Hip Evaluation, Cardiac Exam, BAER Testing"
        },
        {
          id: "daca-health-programs",
          role: "cited",
          locator: "Elective monitoring for elbows and thyroid alongside core tests"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Distinguishes scientifically established deafness prevalence and core screened conditions from general large-breed conformational risks and elective checks."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "cited",
          locator: "Health, Grooming (ear checks, nail trims, tooth brushing), and Nutrition"
        }
      ],
      verifiedOn: null,
      note: "Preventive care tailored to white-coated, deep-chested large working breeds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "Recommended Health Tests From the National Breed Club: Hip Evaluation, Cardiac Exam, BAER Testing"
        },
        {
          id: "ofa-dogo-argentino-chic-requirements",
          role: "verified",
          locator: "OFA CHIC required screenings: BAER, Hip Dysplasia, Cardiac"
        },
        {
          id: "daca-health-programs",
          role: "verified",
          locator: "DACA Health Programs (core + elective screenings)"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Separates the three core National Breed Club screenings (BAER, hips, cardiac) from optional elective checks."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "cited",
          locator: "Grooming: teeth should be brushed regularly"
        }
      ],
      verifiedOn: null,
      note: "Standard canine dental hygiene guidance."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "cited",
          locator: "Grooming: check ears regularly for wax and debris to avoid infection"
        }
      ],
      verifiedOn: null,
      note: "Routine ear inspection and cleaning guidance."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-dogo-argentino-official-standard",
          role: "cited",
          locator: "Short white coat and skin"
        }
      ],
      verifiedOn: null,
      note: "General skin and sun-protection care for short white coats."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "cited",
          locator: "About the Breed, Exercise, and Temperament"
        }
      ],
      verifiedOn: null,
      note: "Editorial suitability assessment reflecting immense strength, high prey drive, and guardian instincts."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "History: Dr. Antonio Nores Martinez, 1928, Cordoba; big-game hunting for boar and mountain lion"
        },
        {
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "Silent hunting trait and white coat visibility"
        },
        {
          id: "pubmed-dogo-argentino-deafness-2021",
          role: "verified",
          locator: "Lower deafness prevalence in head-patched dogs across 811 tested US Dogo Argentinos"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified breed history, working style, and genetics findings written in original prose."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "Origin, height (60-68 cm / 60-65 cm), weight (40-45 kg / 40-43 kg), white coat"
        },
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "Lifespan (9-15 years), grooming, exercise, recommended health tests (BAER, hips, cardiac)"
        },
        {
          id: "pubmed-dogo-argentino-deafness-2021",
          role: "verified",
          locator: "Congenital sensorineural deafness prevalence and BAER testing"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "FAQ answers synthesize verified kennel club standards and peer-reviewed veterinary research without naming registries."
    }
  },

  updatedOn: "2026-11-26"
};
