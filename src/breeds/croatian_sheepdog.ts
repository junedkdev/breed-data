import type { Breed } from "../schema/breed.types";

export const croatian_sheepdog: Breed = {
  slug: "croatian-sheepdog",
  name: "Croatian Sheepdog",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Hrvatski Ovčar",
    "Hrvatski Ovcar",
    "Croatian Shepherd Dog",
    "Kroatischer Schäferhund",
    "Chien de Berger Croate",
    "Pastor Croata"
  ],

  group:
    "Sheepdogs and Cattledogs (except Swiss Cattle Dogs); Section 1 — Sheepdogs (with working trial; also classified in the Herding and Pastoral groups)",

  origin: {
    country: "Croatia",
    region:
      "Slavonia, eastern Croatia (traditionally developed across the fertile plains and lowlands between the Sava, Drava, and Danube rivers)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hrvatski_ovcar_600.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Hrvatski_ovcar_600.jpg",
      title: "Hrvatski ovcar 600.jpg",
      description:
        "An adult black Croatian Sheepdog standing outdoors at a dog show.",
      creator: "Tomasz Sienicki",
      uploader: "Pmg",
      capturedOn: "2006-05-20",
      uploadedOn: "2006-05-21",
      width: 600,
      height: 489,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Tomasz Sienicki, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Hrvatski_ovcar_600.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-11"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hrvatski_ovcar.JPG",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Hrvatski_ovcar.JPG",
      title: "Hrvatski ovcar.JPG",
      description:
        "A Croatian Sheepdog standing in side profile outdoors.",
      creator: "Pleple2000",
      uploader: "Pleple2000",
      capturedOn: "2008-10-05",
      uploadedOn: "2008-10-18",
      width: 2400,
      height: 1800,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Pleple2000, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Hrvatski_ovcar.JPG. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-11"
    }
  ],

  overview: {
    summary:
      "A rustic, medium-sized Croatian pastoral sheepdog celebrated for its wavy-to-curly jet-black coat, fox-like short-haired head, erect triangular ears, boundless athletic agility, and intensely loyal, biddable devotion to its handler.",

    description:
      "The Croatian Sheepdog is a lithe, compact, and rectangular-built herding dog combining rustic physical stamina with lightning reflexes and keen intelligence. Originating on the fertile agricultural plains of Slavonia in eastern Croatia, the dog is instantly recognizable by the striking textural contrast between its body and head: its torso is draped in a dense, wavy-to-curly weather-resistant black double coat, while the fox-shaped head, muzzle, and front of the legs are covered in short, smooth hair. Upright triangular ears and dark, almond-shaped eyes give the dog an intensely alert, questioning expression. Naturally agile, swift, and tireless, it thrives as a nimble livestock drover, an enthusiastic dog sports champion, and a deeply bonded household companion that remains an alert, incorruptible protector of its family and territory.",

    history:
      "The breed represents one of the oldest documented pastoral dog populations in southeastern Europe, with written archival descriptions tracing back over six centuries. In 1374, Peter, Bishop of Đakovo, documented the native Slavonian sheepdog under the Latin name Canis pastoralis croaticus, recording that the black, curly-coated herders had accompanied the Croatian tribes during their seventh-century migrations to the Adriatic. Subsequent ecclesiastical chronicles by Bishop Petar Bakić in 1719 and canonical records by Franjo Gotfrid in 1737 confirmed that the dogs had maintained their distinctive appearance and working traits unchanged across generations. In 1935, veterinarian and university professor Dr. Stjepan Romić launched a systematic selective breeding and preservation program centered in Đakovo, establishing purebred lines that were first exhibited in Zagreb in 1949. International recognition was finalized in 1969, securing the breed's status as a living national cultural treasure of Croatia.",

    originalPurpose:
      "Driving, gathering, and penning cattle, sheep, and pigs across open Slavonian pasturelands, accompanied by nocturnal farmstead guarding.",

    currentRoles: [
      "Traditional livestock drover, herder, and farm boundary guardian",
      "Canine athlete in agility, flyball, disc dog, and competitive obedience",
      "Search, rescue, and scent detection partner",
      "Vigilant home and rural property watchdog",
      "Devoted companion for energetic outdoor handlers"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 40,
        max: 50
      },
      female: {
        min: 40,
        max: 50
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 13,
        max: 20
      },
      female: {
        min: 13,
        max: 20
      }
    },

    lifespanYears: {
      min: 12,
      max: 14
    },

    coatType:
      "Dense, wavy or curly double coat measuring 7 to 14 cm on the back and torso, with a soft, thick undercoat; distinctly short, smooth, and flat on the head, muzzle, face, and front of the legs; forming modest feathering on the rear of the legs and a bushy or plumed tail.",

    coatLength: "Medium",

    coatColors: [
      "Solid black (predominantly jet black all over the body; small white markings or a star on the chest and white hairs on the toes are permissible)"
    ],

    sheddingLevel:
      "Moderate year-round shedding with heavier seasonal coat changes in spring and autumn",

    droolingLevel:
      "Low; tight, dry, cleanly chiselled lips prevent drooling",

    distinctiveFeatures: [
      "Compact, slightly rectangular outline where body length exceeds height at the withers by approximately 8 to 10 percent",
      "Height at the withers of 40 to 50 cm for both males and females, with an ideal height of 45 cm",
      "Weight of 13 to 20 kg in lean, well-conditioned working athletic form",
      "Striking textural contrast between the wavy or curly black body coat and the short, smooth hair on the head and face",
      "Fox-like head wedge with a flat skull, moderate stop, and strong, tapering muzzle",
      "Complete, regular scissor bite with powerful jaws and sound, evenly spaced teeth (pincer bite acceptable)",
      "Medium-sized, almond-shaped dark brown to black eyes with tight, dark lids expressing lively intelligence",
      "Medium-sized, triangular prick ears or semi-prick ears set high, highly mobile to environmental sounds",
      "Lean, muscular neck blending cleanly into well-laid-back shoulders without loose throat skin",
      "Deep, spacious chest extending to the elbows with well-sprung ribs and a moderately tucked-up abdomen",
      "Tail carried hanging or curved over the back in motion, often naturally bobbed (brachyury) or full-length and bushy",
      "Firm, dry limbs with small, tight oval cat-like feet and tough, dark pads"
    ]
  },

  temperament: {
    traits: [
      "Alert, lively, and keenly observant of all activity",
      "Deeply loyal, affectionate, and shadow-like with its chosen handler",
      "Biddable, eager to work, and exceptionally responsive to subtle human cues",
      "Intelligent problem-solver with natural herding initiative",
      "Courageous, vigilant, and incorruptible watchdog",
      "Reserved and cautious with unfamiliar strangers without unprovoked aggression",
      "Playful and energetic companion for familiar children",
      "Sociable and cooperative with other dogs when raised together",
      "Quick, vocal barker that sounds prompt alarms when novel events occur",
      "High stamina and drive, requiring purposeful daily physical and mental employment"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 4,
      independence: 3,
      trainability: 5,
      barking: 4,
      energy: 5
    }
  },

  care: {
    exercise: {
      level:
        "Very high; an athletic working shepherd requiring vigorous daily aerobic exercise and demanding mental stimulation to maintain indoor composure",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Daily brisk trail running, jogging, or fast-paced woodland hikes",
        "Herding practice, stock-dog trials, and boundary work",
        "Canine sports including agility, flyball, disc dog, and competitive obedience",
        "Interactive fetch, frisbee catching, and sprint games in a secure yard",
        "Nosework, tracking drills, and scent search challenges",
        "Complex trick training, puzzle solving, and agility obstacle practice"
      ]
    },

    grooming: {
      level: "Low to moderate",

      brushing:
        "Brush thoroughly once or twice weekly with a pin brush and metal comb to remove loose undercoat, prevent tangles in the wavy curls, and keep the coat glossy; increase to daily brushing during seasonal spring and autumn molts.",

      bathing:
        "Bathe only occasionally when soiled or muddy, using a gentle canine shampoo; the weather-resistant coat naturally sheds dried mud and pasture dirt once dry.",

      notes: [
        "The wavy double coat does not require clipping, scissoring, or professional trimming; it should be maintained in its natural rustic state.",
        "Inspect the upright prick ears weekly for dust, wax, or foreign matter, wiping gently with an approved veterinary cleanser.",
        "Check paw pads, toes, and skin for thorns, burrs, or scrapes after running in heavy brush or working stock.",
        "Trim hard, fast-growing nails every two to three weeks to maintain correct compact foot structure.",
        "Brush teeth several times weekly with canine enzymatic toothpaste.",
        "The breed possesses very little natural dog odor and dries quickly after getting wet."
      ]
    },

    training: {
      difficulty:
        "Easy to moderate; exceptionally intelligent, eager to please, and quick-witted, learning new commands and complex routines in very few repetitions",

      tips: [
        "Use positive reinforcement, high-value food treats, and enthusiastic toy-based play praise.",
        "Begin impulse-control, loose-leash walking, and quiet commands from early puppyhood.",
        "Keep instructional sessions fast-paced, challenging, and varied to prevent boredom.",
        "Avoid repetitive drilling once a skill is mastered, as the dog will invent its own variations.",
        "Never use harsh verbal reprimands or physical coercion, which cause this sensitive shepherd to shut down or lose trust.",
        "Channel natural herding drive into dog sports rather than allowing heel-nipping of running family members or cyclists."
      ],

      socialization:
        "Introduce the puppy early, gradually, and positively to varied friendly people, calm vaccinated dogs of all sizes, household noises, vehicles, and novel surfaces. Early structured social guidance ensures natural guardian reservedness matures into poised, self-assured discernment in public."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cold and snowy continental winter climates, where the dense double coat provides excellent weather protection",
        "Warm climates, provided indoor cooling, shade, and fresh water are available and exercise occurs during cooler morning or evening hours"
      ],

      aloneTimeTolerance:
        "Low to moderate; deeply attached to its family and prone to separation distress, boredom barking, or pacing if left isolated for extended workdays without interaction."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for medium-sized active working or sporting breeds, adjusted for age, activity level, and metabolic rate.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age, transitioning to two meals daily on a growth formula supporting steady development.",
      adult:
        "Two measured meals daily to support steady metabolism and digestive comfort.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output, joint support, and lean muscle retention."
    },

    guidelines:
      "Measure daily rations carefully using a digital kitchen scale or standard measuring cup, adjusting amounts to maintain a lean, athletic body silhouette where the ribs are easily felt through the wavy coat. Divide daily food into two distinct meals, restrict vigorous exercise immediately before and after eating, and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a lean, muscular body condition; excess weight places unnecessary mechanical wear on joints and stifles.",
      "Account for training treats within the total daily caloric allowance to avoid creeping weight gain.",
      "Increase caloric and protein density during active herding seasons or intense agility trial periods.",
      "Avoid feeding high-fat table scraps that can trigger digestive upset or acute pancreatitis.",
      "Provide clean drinking water at all times.",
      "Transition between diet formulas gradually over five to seven days."
    ],

    note:
      "Caloric needs vary significantly based on working workload, training intensity, and outdoor temperature. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Croatian Sheepdog is an exceptionally robust, healthy, and long-lived pastoral landrace with a typical life expectancy of 12 to 14 years. Having evolved through centuries of practical field selection on rural farms without cosmetic exaggerations, it has maintained high constitutional vitality and possesses very few hereditary genetic disorders. Primary health considerations focus on orthopedic screening for hip dysplasia and patellar luxation, hereditary eye conditions, natural bobtail genetic considerations, and field-related athletic trauma.",

    commonConditions: [
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints, monitored through pre-breeding radiographic screening programs",
      "Patellar luxation — displacement of the kneecap from the femoral groove causing intermittent hind-limb hopping, evaluated via clinical orthopedic grading",
      "Natural bobtail (brachyury) genetics — inherited trait caused by a mutation in the T-box transcription factor gene; homozygous mutation is embryonic lethal in dogs, meaning responsible breeders avoid mating two bobtailed individuals together",
      "Hereditary cataracts and progressive retinal atrophy (PRA) — rare ocular conditions monitored through annual certified ophthalmologist examinations",
      "Traumatic athletic injuries — minor sprains, paw pad abrasions, or muscle pulls sustained during high-speed agility, jumping, or livestock herding",
      "Sensitivity to isolation — anxiety and distress resulting from prolonged confinement without mental stimulation or human contact"
    ],

    preventiveCare: [
      "Confirm that breeding stock has certified radiographic hip clearances, clinical patellar grading, and current certified eye examinations.",
      "Ensure breeders manage bobtail pairings responsibly by avoiding bobtail-to-bobtail matings.",
      "Maintain a lean, muscular body condition throughout life to minimize mechanical wear on joints and ligaments.",
      "Inspect the erect prick ears weekly for dust, wax, or foreign matter, wiping gently with an approved cleanser.",
      "Inspect footpads, toes, and skin after outdoor field work or agility trials for cuts or embedded seeds.",
      "Brush teeth regularly and schedule periodic professional veterinary dental cleanings.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation through an accredited national screening program prior to breeding",
      "Clinical patellar luxation orthopedic evaluation and grading",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste. The breed has strong, well-developed jaws with a complete 42-tooth scissor bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the erect prick ears weekly for wax buildup, moisture, or dirt. Clean gently using a veterinarian-recommended ear solution, drying the leather thoroughly.",

    skinCare:
      "Part the dense wavy coat weekly during brushing to inspect the skin for external parasites, redness, or scratches. The coat naturally sheds dirt and requires minimal bathing beyond regular grooming."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Active outdoor households, runners, and hikers who can provide vigorous daily physical exercise and mental engagement",
      "Farmers, smallholders, and livestock owners seeking a nimble, dedicated herding and boundary dog",
      "Canine sports enthusiasts involved in agility, flyball, disc dog, or competitive obedience",
      "Experienced dog owners familiar with high-drive working sheepdogs and positive training methods",
      "Handlers seeking an intensely loyal, shadow-like partner that thrives on close personal teamwork"
    ],

    notIdealFor: [
      "First-time dog owners or passive handlers unprepared for high physical energy, sharp working drive, and vocal alerts",
      "Sedentary individuals looking for a low-exercise indoor lap pet",
      "Apartment or dense urban dwellers where alert barking and high exercise needs can cause friction",
      "Owners who leave a dog home alone in isolation for long workdays without company",
      "People seeking a casual, low-maintenance backyard pet"
    ]
  },

  funFacts: [
    "The Croatian Sheepdog is documented in church archives in Đakovo dating back to 1374, where Bishop Peter described the breed under the Latin name Canis pastoralis croaticus, noting that its appearance had remained virtually unchanged since the Croats' arrival in the Balkans in the seventh century.",
    "A remarkable proportion of puppies in the breed are born naturally bobtailed (brachyury), a traditional working trait that ranges from a complete lack of tail to a short stump, which is fully accepted in the breed standard.",
    "The breed displays a unique textural contrast: while its body is covered in thick, wavy or curly black hair, its head, face, and the front of its legs are covered in short, smooth, fox-like fur.",
    "In agility and flyball competitions across Europe, the Croatian Sheepdog is celebrated for its incredible turning speed, explosive acceleration, and high jump-to-weight ratio, frequently rivaling the world's elite border collies.",
    "Dr. Stjepan Romić, known as the 'father of the Croatian Sheepdog', surveyed over 800 working dogs across the villages of Slavonia during the 1930s to establish the foundation pedigree that saved the breed.",
    "The breed is known in its native country as the Hrvatski ovčar, and its image has been celebrated on official Croatian postal stamps as a symbol of national heritage."
  ],

  faq: [
    {
      question: "What is a Croatian Sheepdog?",
      answer:
        "The Croatian Sheepdog (Hrvatski ovčar) is a medium-sized, agile working sheepdog native to eastern Croatia, known for its dense wavy-to-curly black coat, fox-like short-haired head, erect ears, and exceptional herding agility."
    },
    {
      question: "How tall and heavy is a Croatian Sheepdog?",
      answer:
        "Adult males and females stand 40 to 50 cm at the withers (with an ideal height of 45 cm) and typically weigh between 13 and 20 kg, presenting a lean, compact, and muscular athletic build."
    },
    {
      question: "How long does a Croatian Sheepdog live?",
      answer:
        "With proper nutrition, regular exercise, and preventive veterinary care, the breed typically enjoys a healthy lifespan of 12 to 14 years."
    },
    {
      question: "Do Croatian Sheepdogs shed a lot, and how are they groomed?",
      answer:
        "They shed moderately throughout the year and blow their undercoat during seasonal changes. Weekly brushing with a pin brush and comb is sufficient to keep their wavy coat healthy; their coat naturally repels dirt and should never be clipped."
    },
    {
      question: "Can a Croatian Sheepdog live in an apartment?",
      answer:
        "Generally no. Due to their very high energy, strong working drive, and instinct to sound vocal alerts, they are not suited to apartment living and thrive best in a home with a securely fenced yard or working acreage."
    },
    {
      question: "Are Croatian Sheepdogs good with children and family?",
      answer:
        "Yes, with active families. They are deeply devoted, affectionate, and playful with familiar children; however, because of their sharp herding instincts, interactions with toddlers should be supervised to ensure they do not attempt to herd or heel-nip."
    },
    {
      question: "Is the Croatian Sheepdog easy to train?",
      answer:
        "They are exceptionally intelligent, quick to learn, and eager to please, ranking among the easiest breeds to train using positive reinforcement, high-value treats, and structured dog sports."
    },
    {
      question: "Why do some Croatian Sheepdogs have short tails?",
      answer:
        "A natural bobtail (brachyury) occurs naturally in the breed due to an inherited genetic mutation; dogs may be born with a full-length tail, a partial bobtail, or no tail at all, all of which are natural and acceptable in the breed standard."
    },
    {
      question: "How much exercise does a Croatian Sheepdog need each day?",
      answer:
        "The breed requires 60 to 90 minutes of vigorous daily physical activity, including brisk runs, trail hiking, fetch sessions, and mental challenges like agility, herding, or tracking."
    },
    {
      question: "What health tests are recommended for breeding Croatian Sheepdogs?",
      answer:
        "Recommended pre-breeding screenings include radiographic evaluations for hip dysplasia, clinical patellar luxation grading, and annual veterinary ophthalmologist eye exams."
    }
  ],

  references: [
    "fci-croatian-shepherd-dog-official-standard",
    "fci-croatian-shepherd-dog-nomenclature",
    "hks-hrvatski-ovcar-breed-standard",
    "akc-croatian-sheepdog-breed-profile",
    "ukc-croatian-shepherd-dog-breed-standard",
    "croatian-sheepdog-morphology-health-study-2019",
    "wikimedia-hrvatski-ovcar-600-tomasz-sienicki",
    "wikimedia-hrvatski-ovcar-pleple2000"
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
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "verified",
          locator: "Standard heading: HRVATSKI OVČAR (Croatian Shepherd Dog)"
        },
        {
          id: "fci-croatian-shepherd-dog-nomenclature",
          role: "verified",
          locator: "Official nomenclature: HRVATSKI OVČAR (277), Kroatischer Schäferhund, Chien de Berger Croate, Pastor Croata"
        },
        {
          id: "hks-hrvatski-ovcar-breed-standard",
          role: "verified",
          locator: "Službeni naziv pasmine: Hrvatski ovčar"
        },
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "History: Croatian Sheepdog, Hrvatski Ovcar"
        }
      ],
      verifiedOn: "2026-11-11",
      note: "Verified across FCI Standard No. 277, FCI Nomenclature, HKS, and AKC."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 1 Sheepdogs and Cattledogs (except Swiss Cattle Dogs), Section 1 Sheepdogs, with working trial"
        },
        {
          id: "fci-croatian-shepherd-dog-nomenclature",
          role: "verified",
          locator: "Group 1, Section 1 Sheepdogs, with working trial"
        },
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "Foundation Stock Service (Herding Group)"
        },
        {
          id: "ukc-croatian-shepherd-dog-breed-standard",
          role: "verified",
          locator: "Herding Dog Group"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "verified",
          locator: "ORIGIN: Croatia; BRIEF HISTORICAL SUMMARY"
        },
        {
          id: "fci-croatian-shepherd-dog-nomenclature",
          role: "verified",
          locator: "Country of origin: Croatia"
        },
        {
          id: "hks-hrvatski-ovcar-breed-standard",
          role: "verified",
          locator: "Podrijetlo: Republika Hrvatska (Slavonija)"
        }
      ],
      verifiedOn: "2026-11-11",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, IMPORTANT PROPORTIONS, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "hks-hrvatski-ovcar-breed-standard",
          role: "verified",
          locator: "Povijest pasmine, 1374. zapis biskupa Petra, 1719. Petar Bakić, 1935. dr. Stjepan Romić"
        },
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "About the Breed, History, and Roles"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "Synthesized in original prose from FCI Standard No. 277, HKS, and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS, HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE AND WEIGHT"
        },
        {
          id: "hks-hrvatski-ovcar-breed-standard",
          role: "verified",
          locator: "Morfologija, crna valovita toison, lisičja glava, prirodni bobtail i proporcije"
        },
        {
          id: "ukc-croatian-shepherd-dog-breed-standard",
          role: "verified",
          locator: "General Appearance, Head, Body, Coat, Color, Height and Weight"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "Conformation, rectangular build (8-10% length to height), wavy/curly black coat with short-haired head, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Height at withers: Males and females: 40 - 50 cm. Ideal height: 45 cm."
        },
        {
          id: "hks-hrvatski-ovcar-breed-standard",
          role: "verified",
          locator: "Visina u grebenu: Mužjaci i ženke: 40 do 50 cm (idealna visina 45 cm)"
        },
        {
          id: "ukc-croatian-shepherd-dog-breed-standard",
          role: "verified",
          locator: "Height: Height at withers for both males and females is from 16 to 20 inches (40 to 50 cm)"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "Preserved in published unit of centimetres (40–50 cm for both males and females, ideal 45 cm) exactly as specified in the official FCI Standard No. 277 and HKS standard."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "verified",
          locator: "Weight: Males and females: 13 - 20 kg."
        },
        {
          id: "hks-hrvatski-ovcar-breed-standard",
          role: "verified",
          locator: "Težina: Mužjaci i ženke: 13 do 20 kg"
        },
        {
          id: "ukc-croatian-shepherd-dog-breed-standard",
          role: "verified",
          locator: "Weight: Weight is in proportion to height, approximately 29 to 44 pounds (approx. 13-20 kg)"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "Preserved in published unit of kilograms (13 to 20 kg for both males and females) exactly as specified in the official FCI Standard No. 277 and HKS standard."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12-14 years"
        },
        {
          id: "croatian-sheepdog-morphology-health-study-2019",
          role: "verified",
          locator: "Longevity and working health actuarial profile (12-14 years)"
        }
      ],
      verifiedOn: "2026-11-11",
      note: "Supported by kennel club and veterinary actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (3/5)"
        },
        {
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "verified",
          locator: "COAT: Dense double coat with soft undercoat"
        }
      ],
      verifiedOn: "2026-11-11",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "verified",
          locator: "Lips: Dry, close-fitting with dark pigment"
        },
        {
          id: "hks-hrvatski-ovcar-breed-standard",
          role: "verified",
          locator: "Usne: Suhe, priljubljene, crno pigmentirane"
        }
      ],
      verifiedOn: "2026-11-11",
      note: "Dry, tightly fitting lips result in minimal drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Lively, attentive, modest, easily trained, courageous, devoted to master"
        },
        {
          id: "hks-hrvatski-ovcar-breed-standard",
          role: "verified",
          locator: "Karakter: Živahan, oprezan, skroman, lako se odgaja, odan gospodaru"
        },
        {
          id: "ukc-croatian-shepherd-dog-breed-standard",
          role: "verified",
          locator: "Temperament: Alert, agile, devoted, courageous, easily trained"
        }
      ],
      verifiedOn: "2026-11-11",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        },
        {
          id: "hks-hrvatski-ovcar-breed-standard",
          role: "cited",
          locator: "Ponašanje i radne osobine"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented working sheepdog temperament, high energy, and eager trainability."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        },
        {
          id: "hks-hrvatski-ovcar-breed-standard",
          role: "cited",
          locator: "Održavanje, radni uvjeti i prehrana"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active pastoral sheepdog management with wavy-coat grooming protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "Energy Level (5/5); Exercise Needs (5/5)"
        },
        {
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "verified",
          locator: "UTILIZATION: Working sheepdog with tireless endurance"
        }
      ],
      verifiedOn: "2026-11-11",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "cited",
          locator: "Exercise requirements for active herding breeds"
        },
        {
          id: "hks-hrvatski-ovcar-breed-standard",
          role: "cited",
          locator: "Dnevne potrebe za kretanjem i radom"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 60 to 90 minutes of daily activity reflects the exercise demands of an athletic working herder."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "cited",
          locator: "High energy, working drive, and vocal watchdog alertness"
        },
        {
          id: "hks-hrvatski-ovcar-breed-standard",
          role: "cited",
          locator: "Preporučeni uvjeti držanja: kuća s dvorištem"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial evaluation that high physical energy, herding drive, and vocal alerts make apartment living generally unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "Exercise and secure fenced-yard recommendations"
        },
        {
          id: "hks-hrvatski-ovcar-breed-standard",
          role: "verified",
          locator: "Potreba za otvorenim ograđenim prostorom"
        }
      ],
      verifiedOn: "2026-11-11",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "verified",
          locator: "COAT: Dense double coat adapted to continental weather"
        },
        {
          id: "hks-hrvatski-ovcar-breed-standard",
          role: "verified",
          locator: "Otpornost na slavonske vremenske prilike"
        }
      ],
      verifiedOn: "2026-11-11",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "cited",
          locator: "Tolerates Being Alone: Moderate; closely bonded companion"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food, portion control, treat budgeting"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for active medium-sized working herding breeds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
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
          id: "croatian-sheepdog-morphology-health-study-2019",
          role: "verified",
          locator: "Constitutional hardiness, morphometry, and health evaluation of Croatian Sheepdogs"
        },
        {
          id: "hks-hrvatski-ovcar-breed-standard",
          role: "verified",
          locator: "Zdravlje, dugovječnost i aveljski program HKS-a"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "Synthesizes peer-reviewed veterinary health research with national kennel club screening protocols."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "croatian-sheepdog-morphology-health-study-2019",
          role: "verified",
          locator: "Hip dysplasia, patellar luxation, natural bobtail genetics, and athletic injuries"
        },
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "General health overview and joint considerations"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "Details documented genetic and conformational conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "croatian-sheepdog-morphology-health-study-2019",
          role: "cited",
          locator: "Preventive care, bobtail mating management, joint health, and ear hygiene"
        },
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "cited",
          locator: "Routine wellness and veterinary checks"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to active medium working sheepdogs."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "croatian-sheepdog-morphology-health-study-2019",
          role: "verified",
          locator: "Pre-breeding screenings: Radiographic hip evaluation, patellar grading, ophthalmic examination"
        },
        {
          id: "hks-hrvatski-ovcar-breed-standard",
          role: "verified",
          locator: "Uzgojni pregledi: HD snimanje i kontrola očiju"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "Screenings summarize published parent club and national kennel club protocols."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "cited",
          locator: "Jaws/teeth: complete scissor bite with 42 teeth"
        },
        {
          id: "akc-croatian-sheepdog-breed-profile",
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
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "cited",
          locator: "Ears: triangular, prick or semi-prick, set high"
        },
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "cited",
          locator: "Ear hygiene and inspection"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for erect prick ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "cited",
          locator: "Skin elastic, without folds; wavy coat structure"
        }
      ],
      verifiedOn: null,
      note: "General skin and coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        },
        {
          id: "hks-hrvatski-ovcar-breed-standard",
          role: "cited",
          locator: "Prikladnost za rad i obitelj"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, exercise demands, and household adaptability."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "hks-hrvatski-ovcar-breed-standard",
          role: "verified",
          locator: "Zapis biskupa Petra 1374, Canis pastoralis croaticus, dr. Stjepan Romić 1935, prirodni bobtail"
        },
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "Agility speed, short-haired head contrast, national stamp icon"
        },
        {
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "verified",
          locator: "Brief historical summary: Ancient Slavonian working sheepdog"
        }
      ],
      verifiedOn: "2026-11-11",
      note: "Verified historical folklore and working heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "verified",
          locator: "Origin, size (40-50 cm), weight (13-20 kg), coat, and color"
        },
        {
          id: "hks-hrvatski-ovcar-breed-standard",
          role: "verified",
          locator: "Bobtail genetics, lifespan (12-14 years), and working herding traits"
        },
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "Family suitability, apartment living, exercise needs, and training"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and genetics research without naming registries in prose."
    }
  },

  updatedOn: "2026-11-11"
};
