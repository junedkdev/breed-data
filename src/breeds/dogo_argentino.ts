import type { Breed } from "../schema/breed.types";

export const dogo_argentino: Breed = {
  slug: "dogo-argentino",
  name: "Dogo Argentino",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Argentine Dogo",
    "Argentinean Mastiff",
    "Dogo"
  ],

  group:
    "Pinscher and Schnauzer Type, Molossoid Breeds, and Swiss Mountain and Cattle Dogs; Section 2.1 — Mastiff type Molossoids (without working trial; also classified in the Working and Guardian Dog groups)",

  origin: {
    country: "Argentina",
    region:
      "Córdoba Province, central Argentina"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dogo_Argentino_in_a_field.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Dogo_Argentino_in_a_field.jpg",
      title: "Dogo Argentino in a field.jpg",
      description:
        "An adult Dogo Argentino standing alert outdoors in a field.",
      creator: null,
      uploader: "M.J.",
      capturedOn: "2025-06-01",
      uploadedOn: "2026-04-19",
      width: 1920,
      height: 1080,
      licenseId: "public-domain",
      attribution:
        "Photo from Wikimedia Commons, Public Domain. Source: https://commons.wikimedia.org/wiki/File:Dogo_Argentino_in_a_field.jpg.",
      restrictions: null,
      metadataCheckedOn: "2026-11-13"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dogo_Argentino_-Argentijnse_dog_14-04-2010_17-00-50.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Dogo_Argentino_-Argentijnse_dog_14-04-2010_17-00-50.jpg",
      title: "Dogo Argentino -Argentijnse dog 14-04-2010 17-00-50.jpg",
      description:
        "A large male Dogo Argentino in profile outdoors.",
      creator: "Pleple2000",
      uploader: "Pleple2000",
      capturedOn: "2010-04-14",
      uploadedOn: "2010-04-14",
      width: 2592,
      height: 1944,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Pleple2000, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Dogo_Argentino_-Argentijnse_dog_14-04-2010_17-00-50.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-13"
    }
  ],

  overview: {
    summary:
      "A massive, athletic, and completely white mastiff-type hunter from Argentina, engineered for extreme courage and power in pursuing big game, yet maintaining a steadfast, affectionate devotion to its human family.",

    description:
      "The Dogo Argentino is a formidable, large-sized working and hunting dog combining explosive athletic power with an elegant, harmonious mastiff silhouette. Originally created in South America to track, corner, and hold dangerous big game like wild boar and pumas, the Dogo is heavily boned and highly muscular, moving with an agile, effortless stride. Its defining physical hallmark is a short, smooth, entirely white coat—designed to reflect heat and make the dog easily visible to hunters in dense terrain—paired with a strong, blocky head featuring a distinctly convex skull and slightly concave muzzle. Dark, almond-shaped eyes give the breed a hard, intelligent expression of fearless determination. While possessing unparalleled courage and tenacity in the field, a properly raised Dogo is a remarkably serene, loving, and gentle companion within the home, showing profound loyalty to its family while acting as a natural, uncompromising guardian against threats.",

    history:
      "The breed was masterminded in the late 1920s by Dr. Antonio Nores Martinez, an Argentine surgeon and passionate hunter from Córdoba who sought to create the ultimate big-game hunting dog. He began with the Old Fighting Dog of Córdoba—a legendary, fierce local mastiff crossbreed—and methodically blended it with several imported breeds to refine its working instincts and temperament. The Great Dane added height; the Boxer contributed agility and a tractable nature; the Spanish Mastiff and Pyrenean Mastiff provided raw power and a calmer demeanor; the English Pointer enhanced scenting ability; and the Bull Terrier and Dogue de Bordeaux contributed exceptional jaw strength and courage. Above all, Dr. Nores Martinez rigorously selected against dog-aggression, favoring dogs capable of hunting cooperatively in packs. After decades of careful refinement, the breed gained immense respect worldwide as both an elite big-game hunter and a formidable guardian, eventually earning official international recognition as Argentina's first and most famous native breed.",

    originalPurpose:
      "Tracking, chasing, and catching dangerous big game, particularly wild boar, peccaries, and pumas, across the diverse and rugged terrains of Argentina, while working cooperatively in packs.",

    currentRoles: [
      "Big-game hunting and catch dog",
      "Vigilant estate and personal protection guardian",
      "Police, military, and search-and-rescue working dog",
      "Devoted household companion for highly experienced handlers"
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
      min: 10,
      max: 12
    },

    coatType:
      "Uniform, straight, short, and smooth coat, ranging from approximately 1.5 to 2 cm in length, conforming tightly to the body; in colder climates, a light undercoat may naturally develop.",

    coatLength: "Short",

    coatColors: [
      "Entirely white",
      "A single black or dark-colored patch on the skull is permissible provided it does not cover more than 10 percent of the head's surface"
    ],

    sheddingLevel:
      "Moderate; the short coat sheds steadily year-round and requires regular brushing to manage loose white hairs",

    droolingLevel:
      "Moderate; while the lips are relatively tight for a mastiff-type breed, some drooling can occur after drinking or intense physical exertion",

    distinctiveFeatures: [
      "Large, athletic, and heavily muscled mastiff silhouette that is slightly off-square (body length exceeding height by up to 10 percent)",
      "Height at the withers of 60 to 68 cm for males and 60 to 65 cm for females",
      "Working weight of 40 to 45 kg for males and 40 to 43 kg for females in lean, hardened condition",
      "Entirely white, short, smooth coat designed to reflect heat and ensure high visibility in the field",
      "Powerful, balanced head with a solid, convex skull and a slightly concave muzzle of equal length",
      "Broad, completely black nose with large nostrils",
      "Strong jaws with well-defined masseter muscles and a complete, powerful scissor or pincer bite",
      "Medium-sized, almond-shaped eyes, dark or hazelnut in color, with preferably black-pigmented eye rims",
      "Thick, strong neck with very thick, lax skin forming smooth wrinkles without an excessive dewlap",
      "Broad, deep chest extending below the elbows, giving the impression of massive lung capacity",
      "Thick, saber-like tail set medium high, tapering to the hock, raised in an arc when active",
      "Straight, heavily boned forelegs and muscular thighs with short rear pasterns for explosive driving power"
    ]
  },

  temperament: {
    traits: [
      "Courageous, fearless, and tenaciously determined when working",
      "Calm, quiet, and deeply affectionate with its own family in domestic settings",
      "Highly protective and naturally territorial, distinguishing sharply between familiar guests and intruders",
      "Intelligent, observant, and highly aware of its surroundings",
      "Confident and self-assured, never exhibiting unprovoked shyness or nervous fear",
      "Strong-willed and dominant, requiring clear, unwavering human leadership",
      "High prey drive toward wild animals and small running pets",
      "Can be fiercely assertive toward unfamiliar dogs, requiring careful socialization",
      "Patient and gentle with familiar children in its own household",
      "Stoic and insensitive to pain during high-adrenaline activities"
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
        "High; an explosive, athletic hunting dog that requires vigorous daily aerobic exercise and highly structured physical outlets",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Daily brisk running, long power-walks, or trail hiking on a sturdy leash",
        "Free running in a very large, securely fenced and reinforced yard",
        "Structured working tasks such as weight pulling, scent tracking, or advanced obedience training",
        "Interactive fetch and heavy tug games using durable equipment",
        "Supervised, controlled swimming in safe waters"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush once or twice weekly using a rubber hound mitt or soft bristle brush to remove loose dead hairs and keep the white coat glossy.",

      bathing:
        "Bathe only when necessary using a mild, hypoallergenic canine shampoo to avoid stripping natural skin oils, or simply wipe down the coat with a damp cloth.",

      notes: [
        "The short white coat requires very little maintenance but shedding is steady and visible on dark furniture.",
        "Apply dog-safe, non-toxic sunscreen to the pink skin of the nose, ears, and belly if the dog spends extended time in intense direct sunlight to prevent solar dermatitis.",
        "Inspect the drop ears weekly for dirt, wax accumulation, or redness, cleaning gently with a veterinary-approved solution.",
        "Trim the strong, fast-growing nails every two to three weeks to maintain correct foot alignment.",
        "Brush teeth several times weekly using canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Challenging; highly intelligent and capable, but possesses immense physical power, strong protective instincts, and a dominant nature requiring expert, consistent handling",

      tips: [
        "Begin intensive obedience and leash-walking training in early puppyhood before massive adult strength develops.",
        "Use firm, fair, and positive reinforcement; the breed respects calm, unwavering authority but will challenge a passive or hesitant handler.",
        "Establish extremely clear boundaries regarding territory, visitors, and resource guarding.",
        "Never encourage aggressive behavior or bite work without professional supervision; protective instincts are already deeply hardwired.",
        "Always exercise within a securely fenced area of at least six feet in height with sturdy gates.",
        "Avoid repetitive drilling; keep sessions purposeful and mentally engaging to maintain focus."
      ],

      socialization:
        "Extensive, continuous socialization is absolutely critical from a young age. Introduce the dog safely and positively to a wide variety of people, neutral vaccinated dogs, diverse environments, and household guests to ensure its powerful guardian instincts mature into calm, discerning judgment rather than indiscriminate reactivity."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Warm climates, where the short white coat effectively reflects intense sunlight",
        "Temperate climates",
        "Cool climates, provided the dog lives indoors and is given a warm coat for freezing conditions, as the single coat offers minimal winter insulation"
      ],

      aloneTimeTolerance:
        "Moderate; requires significant daily human interaction and physical exercise, but can settle calmly on its own territory if its working needs have been met."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for large, highly active muscular breeds, with controlled growth parameters for puppies.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age, transitioning to two meals daily on a large-breed growth formula to prevent rapid, uneven bone development.",
      adult:
        "Two measured meals daily to support heavy muscle mass and reduce the volume of food in the stomach at one time.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output and joint support."
    },

    guidelines:
      "Measure daily rations carefully using a digital kitchen scale or standard measuring cup, adjusting amounts to maintain a lean, athletic body silhouette where the heavy musculature is visible and excess fat is avoided. Divide daily food into two distinct meals, strictly avoid vigorous exercise for at least one hour before and after eating to mitigate bloat risk, and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a lean, muscular body condition; excess weight places severe stress on large joints and ligaments.",
      "Account for training treats within the total daily caloric allowance to prevent obesity.",
      "Rest the dog before and after meals to mitigate the risk of bloat (gastric dilatation-volvulus).",
      "Avoid rapid puppy growth; avoid calcium supplements unless expressly prescribed by a veterinarian.",
      "Increase protein and caloric density if the dog is actively used for strenuous hunting or weight-pulling sports.",
      "Transition between diet formulas gradually over five to seven days."
    ],

    note:
      "Caloric needs vary significantly based on exercise intensity, age, and environmental temperature. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Dogo Argentino is a robust, athletic, and generally healthy working breed with a typical life expectancy of 10 to 12 years. Because it is predominantly white, the breed carries a genetic predisposition for pigment-related congenital deafness. Primary health priorities focus on Brainstem Auditory Evoked Response (BAER) testing for hearing, orthopedic screening for hip and elbow dysplasia, cardiac evaluations, and preventive management for gastric dilatation-volvulus (bloat).",

    commonConditions: [
      "Congenital sensorineural deafness — pigment-associated unilateral or bilateral deafness common in solid white breeds, verifiable in young puppies through BAER testing",
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints leading to osteoarthritis, monitored through pre-breeding radiographic screening",
      "Elbow dysplasia — developmental abnormalities of the elbow joints that can cause forelimb lameness and secondary arthritis",
      "Gastric dilatation-volvulus (GDV / bloat) — an acute, life-threatening twisting and distension of the stomach in large, deep-chested breeds, requiring emergency veterinary care",
      "Cardiac conditions — occasional congenital heart defects monitored through veterinary cardiologist examinations",
      "Autoimmune thyroiditis — an immune-mediated disorder leading to hypothyroidism, weight gain, and lethargy, screenable via blood testing",
      "Solar dermatitis and sunburn — sensitivity of unpigmented skin on the nose, ears, and belly to intense ultraviolet radiation"
    ],

    preventiveCare: [
      "Confirm that breeding stock has certified BAER hearing test results, radiographic hip and elbow clearances, and cardiac evaluations.",
      "Feed two smaller meals daily and avoid vigorous exercise immediately before or after eating to reduce bloat risk.",
      "Maintain a lean, muscular body condition throughout growth and adulthood to minimize mechanical wear on joints.",
      "Apply pet-safe sunscreen to exposed, lightly pigmented skin before prolonged outdoor exposure in intense summer sun.",
      "Administer consistent year-round parasite prevention against fleas, ticks, and heartworms.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "Brainstem Auditory Evoked Response (BAER) hearing evaluation prior to breeding or puppy placement",
      "Radiographic hip dysplasia evaluation through an accredited national screening program prior to breeding",
      "Congenital cardiac examination including echocardiography by a veterinary cardiologist",
      "Thyroid panel evaluation prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste. The breed has massively powerful jaws with a complete 42-tooth scissor or pincer bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the ears weekly for wax accumulation, moisture, or redness. Clean gently using a veterinarian-recommended ear solution, drying the leather thoroughly.",

    skinCare:
      "Part the short coat weekly during brushing to inspect the skin for external parasites, cuts, or solar irritation. Avoid excessive bathing to preserve the coat's natural protective barrier."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Highly experienced dog owners familiar with dominant, powerful guardian or mastiff breeds and firm, positive leadership",
      "Active individuals or rural households with extensive, securely fenced property",
      "Hunters or sportsmen seeking a courageous, athletic catch dog",
      "Owners deeply committed to extensive, lifelong socialization and rigorous daily exercise",
      "Homes without small, vulnerable pets due to intense prey drive"
    ],

    notIdealFor: [
      "First-time dog owners, passive handlers, or those intimidated by immense physical strength",
      "Apartment, condominium, or dense urban dwellers without access to a large, secure yard",
      "Households with frequent, unannounced visitors or chaotic children's neighborhood playgroups",
      "Owners seeking an easygoing dog park companion that mixes freely with unfamiliar dogs",
      "Sedentary individuals looking for a low-energy indoor pet"
    ]
  },

  funFacts: [
    "To create the ultimate big-game hunter, Dr. Antonio Nores Martinez used the Old Fighting Dog of Córdoba as a base, systematically crossbreeding it with the Great Dane, Boxer, Spanish Mastiff, Old English Bulldog, Bull Terrier, Pyrenean Mastiff, English Pointer, Irish Wolfhound, and Dogue de Bordeaux.",
    "The Dogo Argentino's stark white coat was intentionally selected so the dogs would be easily visible to hunters on the pampas and brushlands of Argentina, preventing accidental shootings during chaotic hunts.",
    "Despite its fierce reputation as a boar-catcher and puma hunter, the breed standard heavily emphasizes a dog that is quiet and affectionately devoted at home; Dr. Nores Martinez strictly culled dogs that showed unprovoked aggression toward humans.",
    "The Dogo is renowned for hunting silently; rather than baying on the trail like a scenthound, it tracks and chases its quarry quietly until the final confrontation.",
    "While it is the pride of Argentina and the first internationally recognized breed developed in that country, the Dogo Argentino's immense power and protective nature have led to it being restricted or banned in certain countries with strict breed-specific legislation."
  ],

  faq: [
    {
      question: "What is a Dogo Argentino?",
      answer:
        "The Dogo Argentino is a large, powerfully built, and entirely white mastiff-type breed from Argentina, originally developed in the 1920s to hunt big game like wild boar and puma while serving as a loyal, fearless family guardian."
    },
    {
      question: "How tall and heavy is a Dogo Argentino?",
      answer:
        "Adult males stand 60 to 68 cm at the withers and weigh 40 to 45 kg, while adult females stand 60 to 65 cm and weigh 40 to 43 kg, presenting a heavily muscled and athletic frame."
    },
    {
      question: "How long does a Dogo Argentino live?",
      answer:
        "With proper nutrition, regular exercise, and conscientious preventive veterinary care, the breed typically enjoys a lifespan of 10 to 12 years."
    },
    {
      question: "Is the Dogo Argentino a good family dog?",
      answer:
        "Yes, but only for highly experienced, active families. Within their own household, they are deeply affectionate, loyal, and gentle with their own children, but their massive strength and protective instincts require expert handling and socialization."
    },
    {
      question: "Are Dogo Argentinos aggressive?",
      answer:
        "A well-bred and properly socialized Dogo is not indiscriminately aggressive toward humans; they are calm and confident. However, they are highly territorial, have a very strong prey drive toward animals, and can be severely dog-aggressive if not trained and managed properly."
    },
    {
      question: "Can a Dogo Argentino live in an apartment?",
      answer:
        "No. Due to their large size, immense power, protective instincts, and need for vigorous daily exercise, they are completely unsuited to apartment living and require a home with a large, securely fenced yard."
    },
    {
      question: "Why do some Dogo Argentinos have hearing problems?",
      answer:
        "Like many primarily white breeds (such as Dalmatians and Bull Terriers), the lack of pigment-producing cells can affect the inner ear, leading to congenital deafness; reputable breeders BAER test all puppies before placement."
    },
    {
      question: "Do Dogo Argentinos shed a lot, and how are they groomed?",
      answer:
        "They shed moderately year-round. Their short white coat is very low-maintenance, requiring only weekly brushing with a rubber mitt and occasional baths, though they may need sunscreen on exposed pink skin in intense summer heat."
    },
    {
      question: "How much exercise does a Dogo Argentino need each day?",
      answer:
        "The breed requires 60 to 90 minutes of vigorous daily physical activity, including long hikes, running, and structured training tasks to keep them physically and mentally fulfilled."
    },
    {
      question: "What health screenings are recommended for breeding dogs?",
      answer:
        "Recommended pre-breeding screenings include BAER hearing tests, radiographic evaluations for hip and elbow dysplasia, veterinary cardiac exams, and thyroid evaluations."
    }
  ],

  references: [
    "fci-dogo-argentino-official-standard",
    "fci-dogo-argentino-nomenclature",
    "akc-dogo-argentino-breed-standard",
    "akc-dogo-argentino-breed-profile",
    "ukc-dogo-argentino-breed-standard",
    "daca-health-programs",
    "ofa-dogo-argentino-chic-requirements",
    "wikimedia-dogo-argentino-in-a-field",
    "wikimedia-dogo-argentino-argentijnse-dog"
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
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "Standard heading: DOGO ARGENTINO"
        },
        {
          id: "fci-dogo-argentino-nomenclature",
          role: "verified",
          locator: "Official nomenclature: DOGO ARGENTINO (292)"
        },
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "History: Argentine Dogo, Argentinean Mastiff"
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Verified across FCI Standard No. 292, FCI Nomenclature, and AKC."
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
          locator: "Group 2, Section 2.1 Mastiff type Molossoids, without working trial"
        },
        {
          id: "akc-dogo-argentino-breed-standard",
          role: "verified",
          locator: "Working Group"
        },
        {
          id: "ukc-dogo-argentino-breed-standard",
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
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "ORIGIN: Republic of Argentina; BRIEF HISTORICAL SUMMARY (Province of Cordoba)"
        },
        {
          id: "fci-dogo-argentino-nomenclature",
          role: "verified",
          locator: "Country of origin: Argentina"
        },
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "History: Developed in central Argentina"
        }
      ],
      verifiedOn: "2026-11-13",
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
          locator: "About the Breed, History (Dr. Antonio Nores Martinez, 1928, ten breeds), and Roles"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Synthesized in original prose from FCI Standard No. 292 and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS, HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE AND WEIGHT"
        },
        {
          id: "akc-dogo-argentino-breed-standard",
          role: "verified",
          locator: "General Appearance, Size, Proportion, Substance, Head, Coat, Color"
        },
        {
          id: "ukc-dogo-argentino-breed-standard",
          role: "verified",
          locator: "General Appearance, Head, Body, Coat, Color, Height and Weight"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Conformation, heavy bone, solid white coat with dark spot limit, convex skull, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Height at the withers: Males: 60 to 68 cm. Females: 60 to 65 cm."
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Preserved in published unit of centimetres (60–68 cm for males and 60–65 cm for females) exactly as specified in the official FCI Standard No. 292."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "Weight: Males: 40 to 45 kg. Females: 40 to 43 kg."
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Preserved in published unit of kilograms (40 to 45 kg for males and 40 to 43 kg for females) exactly as specified in the official FCI Standard No. 292."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 10-12 years"
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Supported by kennel club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (3/5)"
        },
        {
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "COAT: Uniform, short, plain and smooth to the touch, with an average length of 1.5 to 2 cm."
        }
      ],
      verifiedOn: "2026-11-13",
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
          locator: "Breed Traits: Drooling Level (3/5)"
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Tight-fitting lips for a mastiff reduce resting drool, though some occurs during work."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: It should be silent, never barking on the trail. Astute, alert, tenacious, courageous, confident. Highly territorial."
        },
        {
          id: "akc-dogo-argentino-breed-standard",
          role: "verified",
          locator: "Character & Temperament: Strong, tenacious and rustic dog created to protect family and property, as well as to hunt large game."
        },
        {
          id: "ukc-dogo-argentino-breed-standard",
          role: "verified",
          locator: "Temperament: Loyal, protective, high prey drive"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        },
        {
          id: "ukc-dogo-argentino-breed-standard",
          role: "cited",
          locator: "Temperament and behavior guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented big-game mastiff temperament, extreme protectiveness, and dog assertiveness."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        },
        {
          id: "daca-health-programs",
          role: "cited",
          locator: "Care, sun protection, and secure containment"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active hunting dog management with short-coat sun protection and secure boundary protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "Energy Level (4/5); Exercise Needs (4/5)"
        },
        {
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "UTILIZATION: Big game hunting dog with explosive power and agility"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "cited",
          locator: "Exercise recommendations for working catch dogs"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 60 to 90 minutes of daily activity reflects the exercise demands of an athletic, muscular working hound."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "cited",
          locator: "Large size, strong guarding instincts, and need for open movement"
        },
        {
          id: "ukc-dogo-argentino-breed-standard",
          role: "cited",
          locator: "Territorial nature and housing requirements"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial evaluation that massive size, protective territorial instincts, and heavy exercise needs make apartment living unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "Exercise and secure fenced-yard recommendations (minimum six-foot fence)"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "COAT: Short white coat reflects heat, lacks insulation in severe cold"
        },
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "Weather adaptation: excels in warm weather; sensitive to extreme cold"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "cited",
          locator: "Tolerates Being Alone: Moderate; devoted family guardian"
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
          locator: "Nutrition: High-quality food formulated for large active breeds"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for large, heavily muscled working breeds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance and divided meals to mitigate bloat"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule for large breeds."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "daca-health-programs",
          role: "verified",
          locator: "DACA Health Committee guidelines on BAER testing, Hip Dysplasia, and Cardiac evaluation"
        },
        {
          id: "ofa-dogo-argentino-chic-requirements",
          role: "verified",
          locator: "CHIC Program requirements: Deafness (BAER), Hip Dysplasia, Cardiac Evaluation"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Synthesizes national health registry screening protocols with parent club veterinary priorities."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "daca-health-programs",
          role: "verified",
          locator: "Congenital deafness, Hip Dysplasia, Cardiac diseases, Autoimmune Thyroiditis"
        },
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "Gastric dilatation-volvulus (bloat) and solar dermatitis"
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
          id: "daca-health-programs",
          role: "cited",
          locator: "Preventive health, sun protection, and joint management"
        },
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "cited",
          locator: "Routine care, bloat precautions, and veterinary wellness checks"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to white-coated large mastiff breeds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-dogo-argentino-chic-requirements",
          role: "verified",
          locator: "CHIC Program required screenings: Congenital Deafness (BAER), Radiographic Hip Dysplasia evaluation, Cardiac Evaluation"
        },
        {
          id: "daca-health-programs",
          role: "verified",
          locator: "Required tests: BAER, Hips, Cardiac. Elective tests: Elbows, Thyroid, CAER Eye exam."
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
          id: "fci-dogo-argentino-official-standard",
          role: "cited",
          locator: "Jaws/teeth: strong jaws with complete scissor or pincer bite"
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-dogo-argentino-official-standard",
          role: "cited",
          locator: "Ears: set high, flat and rounded at tip, uncropped hanging"
        },
        {
          id: "akc-dogo-argentino-breed-profile",
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
          id: "fci-dogo-argentino-official-standard",
          role: "cited",
          locator: "Skin: thick, elastic; short white coat"
        },
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "cited",
          locator: "Skin protection from sunburn"
        }
      ],
      verifiedOn: null,
      note: "General skin and sun-protection care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        },
        {
          id: "ukc-dogo-argentino-breed-standard",
          role: "cited",
          locator: "Characteristics and guardian lifestyle suitability"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, extreme power, and guardian dominance."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "Dr. Antonio Nores Martinez development, ten breed foundation, Old Fighting Dog of Córdoba"
        },
        {
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "Brief historical summary: White coat for high visibility, silent hunter trait"
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Verified historical folklore and working heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-dogo-argentino-official-standard",
          role: "verified",
          locator: "Origin, height (60-68 cm / 60-65 cm), weight (40-45 kg / 40-43 kg), solid white coat, and dark spot limit"
        },
        {
          id: "akc-dogo-argentino-breed-profile",
          role: "verified",
          locator: "Lifespan (10-12 years), apartment living, family life, and dog aggression"
        },
        {
          id: "ofa-dogo-argentino-chic-requirements",
          role: "verified",
          locator: "Recommended health screening panel (BAER, Hips, Heart)"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and health registry data without naming registries in prose."
    }
  },

  updatedOn: "2026-11-13"
};
