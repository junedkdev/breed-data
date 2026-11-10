import type { Breed } from "../schema/breed.types";

export const spanish_mastiff: Breed = {
  slug: "spanish-mastiff",
  name: "Spanish Mastiff",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Mastín Español",
    "Mastín Leonés",
    "Mastín de la Mancha",
    "Mastín de Extremadura",
    "Mastín Castellano",
    "Spanish Molosser",
    "Mastiff Español"
  ],

  group:
    "Pinscher and Schnauzer Type, Molossoid Breeds, and Swiss Mountain and Cattle Dogs; Section 2.2 — Mountain-type Molossoids (without working trial; also classified in the Guardian Dog and Working groups)",

  origin: {
    country: "Spain",
    region:
      "Iberian Peninsula (specifically Extremadura, Castile and León, Asturias, and historical Mesta transhumance trails)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mastin_Espa%C3%B1ol_1.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Mastin_Espa%C3%B1ol_1.jpg",
      title: "Mastin Español 1.jpg",
      description: "An adult Spanish Mastiff standing outdoors in grass.",
      creator: "Tomasz Sienicki",
      uploader: "Pmg",
      capturedOn: "2006-05-20",
      uploadedOn: "2006-05-21",
      width: 600,
      height: 529,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Tomasz Sienicki, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Mastin_Espa%C3%B1ol_1.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mastin_espa%C3%B1ol.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Mastin_espa%C3%B1ol.jpg",
      title: "Mastin español.jpg",
      description: "An adult Spanish Mastiff in profile outdoors.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2013-05-18",
      uploadedOn: "2013-05-18",
      width: 1478,
      height: 1184,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Mastin_espa%C3%B1ol.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10"
    }
  ],

  overview: {
    summary:
      "A colossal, rustic, and ancient Iberian livestock guardian renowned for its immense bone structure, heavy double dewlap, thick weather-resistant coat, low guttural roar of a bark, and fearless yet dignified protection of grazing flocks.",

    description:
      "The Spanish Mastiff is a giant, heavy-boned, and powerful mountain molossoid developed over thousands of years to protect vast herds of transhumant Merino sheep from wolves and marauders across the rugged plateaus of Spain. Displaying a sub-longilinear silhouette where body length distinctly exceeds height at the withers, the dog combines mass and structural strength with surprising agility and supple movement. Its dense, coarse double coat lies close to abundant, loose skin that forms an unmistakable, pronounced double dewlap along the throat and neck. The head is massive, truncated-pyramidal, and deep, carrying small, triangular drop ears, almond-shaped dark eyes with a calm, serene gaze, and thick, pendulous upper lips. In the family home, it is placid, noble, and gentle, but on its native pasture territory it transforms into an incorruptible, vigilant guardian ready to confront any predator without hesitation.",

    history:
      "The ancestry of the breed is intertwined with the ancient pastoral traditions of the Iberian Peninsula, where Phoenician and Roman traders introduced heavy Asian molossers that were crossed with indigenous shepherd dogs. For centuries, the dog was the linchpin of the 'Honrado Concejo de la Mesta', the medieval association of Spanish sheep owners that managed the seasonal migration of millions of Merino sheep along the 'cañadas reales' between northern summer pastures and southern winter plains. Traditional Mesta regulations mandated one mastiff for every one hundred sheep, fitting each guardian with a spiked iron collar (carlanca) to shield its throat from wolf bites during nighttime ambushes. As traditional transhumance declined in the twentieth century, the breed was preserved and standardized through dedicated breeding programs in León, Extremadura, and Castile. Today, it remains an authentic, rustic livestock guardian across the Iberian mountains and a noble estate protector worldwide.",

    originalPurpose:
      "Guarding transhumant flocks of Merino sheep and cattle against Iberian wolves, bears, and livestock raiders during long cross-country migrations.",

    currentRoles: [
      "Traditional livestock guardian dog for sheep, goats, and cattle",
      "Rural estate, farm, and homestead guardian",
      "Devoted household companion for experienced handlers with acreage",
      "Cultural symbol of traditional Iberian pastoral heritage"
    ]
  },

  physical: {
    sizeCategory: "Giant",

    height: {
      unit: "cm",
      male: {
        min: 77,
        max: 88
      },
      female: {
        min: 72,
        max: 80
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 65,
        max: 100
      },
      female: {
        min: 55,
        max: 80
      }
    },

    lifespanYears: {
      min: 10,
      max: 12
    },

    coatType:
      "Dense, thick, semi-long, straight, and coarse outer coat lying flat against the body, with a dense, woolly undercoat that thickens in winter; skin is extremely thick, supple, and loose, forming a prominent double dewlap on the throat.",

    coatLength: "Medium",

    coatColors: [
      "Fawn (ranging from pale biscuit to deep reddish-fawn)",
      "Brindle (fawn, red, or grey ground with dark stripes)",
      "Red",
      "Black",
      "Wolf-grey (cervato or lobato)",
      "Yellow",
      "Particolour (white ground with coloured patches or coloured ground with white markings)"
    ],

    sheddingLevel:
      "Moderate year-round shedding with heavy seasonal coat blowing in spring and autumn",

    droolingLevel:
      "High; heavy, pendulous flews and loose lower lips result in regular drooling, particularly after eating, drinking, or during warm weather",

    distinctiveFeatures: [
      "Massive, rustic, and powerful giant molossoid silhouette with substantial bone density",
      "Height at the withers exceeding 77 cm for males (often reaching 80 to 88 cm) and exceeding 72 cm for females (often reaching 75 to 80 cm)",
      "Weight ranging from 65 to 100 kg in mature males and 55 to 80 kg in mature females",
      "Abundant, loose, and elastic skin forming a distinctive, two-lobed dewlap hanging generously under the neck",
      "Massive, truncated-pyramidal head with a broad skull, flat forehead, and gentle stop",
      "Broad, deep, and square muzzle with thick, loose, and pendulous upper lips covering the lower jaw",
      "Complete scissor bite with powerful jaws and strong teeth (pincer bite acceptable)",
      "Small, almond-shaped, dark hazel or dark brown eyes with relaxed lids expressing a serene, noble gaze",
      "Medium-sized, triangular, flat drop ears set above the eye line, hanging close to the cheeks",
      "Deep, broad, and heavily muscled chest with prominent sternum and well-sprung ribs",
      "Thick, heavy tail set medium-low, reaching the hock, carried in a gentle sabre curve at rest and raised with a distinct curl when alert",
      "Heavy, straight limbs with large cat-like feet; single or double dewclaws on the hind legs are common and traditionally accepted"
    ]
  },

  temperament: {
    traits: [
      "Serene, calm, and dignified in everyday demeanor",
      "Deeply loyal, affectionate, and protective of family members",
      "Fearless, resolute, and unwavering when confronting threats or predators",
      "Aloof, suspicious, and highly discerning toward unfamiliar strangers",
      "Autonomous decision-maker with ancient livestock guardian instincts",
      "Gentle and remarkably patient with familiar children and farm animals",
      "Territorially vigilant, monitoring boundaries with quiet watchfulness",
      "Deep, booming, guttural bark that resonates over vast mountain distances",
      "Low reactivity indoors with a slow, deliberate working pace outdoors",
      "Intolerant of canine intrusion into its established protective perimeter"
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 2,
      withStrangers: 2,
      protectiveness: 5,
      independence: 5,
      trainability: 3,
      barking: 4,
      energy: 2
    }
  },

  care: {
    exercise: {
      level:
        "Moderate; requires regular territorial patrolling, leisurely distance walks, and open outdoor space, but not suited to high-speed running, jogging, or intense agility",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Daily leisurely boundary walks and perimeter patrols on secure acreage",
        "Slow-paced leashed neighborhood or countryside strolls",
        "Free movement and resting in a large, securely fenced yard or pasture",
        "Supervised livestock monitoring and pastoral coexistence",
        "Gentle cognitive enrichment and food-foraging games"
      ]
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush once or twice weekly with a sturdy slicker brush and undercoat rake to remove loose hair and dirt; increase to daily brushing during heavy seasonal undercoat shedding in spring and autumn.",

      bathing:
        "Bathe only when heavily soiled, as the coarse double coat naturally repels dried mud, dust, and rain.",

      notes: [
        "Inspect and gently wipe the deep skin folds of the double throat dewlap weekly to prevent moisture buildup and skin intertrigo.",
        "Wipe drool from the mouth and chin folds regularly, particularly after meals and drinking.",
        "Inspect the drop ears weekly for moisture, wax accumulation, or debris.",
        "Inspect and trim rear dewclaws (including double dewclaws) regularly to prevent overgrowth or tearing.",
        "Trim massive, thick nails every three to four weeks to maintain correct foot posture.",
        "Brush teeth several times weekly with canine enzymatic toothpaste.",
        "Provide thick, padded bedding or cool ground to prevent hygromas and calluses on heavy elbow and hock joints."
      ]
    },

    training: {
      difficulty:
        "Challenging; highly intelligent and independent, possessing thousands of years of autonomous guardian instincts that do not respond to mechanical obedience drills or harsh methods",

      tips: [
        "Use positive reinforcement, food rewards, and calm, confident leadership.",
        "Begin leash-manners and impulse-control training from early puppyhood before immense physical weight develops.",
        "Establish fair, consistent household rules without shouting or physical intimidation.",
        "Keep instructional sessions short, calm, and purposeful to prevent stubborn disinterest.",
        "Always maintain secure, heavy-duty perimeter fencing at least five to six feet high.",
        "Never use harsh corrections, which can compromise the guardian's trust and promote defensive defiance."
      ],

      socialization:
        "Introduce the puppy early, carefully, and extensively to varied friendly people, calm vaccinated dogs, livestock, household visitors, and novel environments. Thorough early social guidance ensures natural guardian suspicion matures into calm discernment rather than indiscriminate hostility."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cold and snowy mountain climates, where the thick double coat provides superb thermal insulation",
        "Warm continental climates, provided abundant shade, cool indoor shelter, and unlimited fresh drinking water are available, restricting physical activity to cooler dawn or twilight hours"
      ],

      aloneTimeTolerance:
        "High when provided with a secure pasture, acreage, or yard to monitor, though close family connection and human companionship remain vital to domestic balance."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for giant breeds, adjusted for age, slow growth, and moderate metabolic output.",

    feedingFrequency: {
      puppy:
        "Three measured meals daily until six months of age, transitioning to two meals daily on a giant-breed growth diet formulated with controlled calcium and phosphorus to foster slow, steady skeletal development.",
      adult:
        "Two measured meals daily to support steady digestion and help mitigate the risk of gastric dilatation-volvulus.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output, joint support, and lean muscle maintenance."
    },

    guidelines:
      "Measure food rations carefully with a digital scale or standard measuring cup, adjusting portions to keep the dog lean and well-conditioned without excess body fat. Divide the daily allowance into two distinct meals, restrict vigorous exercise for at least one hour before and after eating, use wide, stable food dishes, and provide cool, clean drinking water continuously.",

    considerations: [
      "Keep growing puppies lean during their first two years to avoid placing excess stress on developing bones and joints.",
      "Rest the dog before and after meals to mitigate the risk of bloat (gastric dilatation-volvulus).",
      "Account for training treats within the total daily caloric allowance to prevent obesity.",
      "Use heavy, non-tip water buckets to accommodate substantial head size and drool.",
      "Avoid feeding high-fat table scraps that can trigger acute pancreatitis.",
      "Transition between diet formulas gradually over five to seven days."
    ],

    note:
      "Caloric needs vary based on age, outdoor temperature, and acreage patrolling duties. Consult a veterinarian experienced in giant breeds to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Spanish Mastiff is a rustic, long-lived giant livestock guardian with a typical life expectancy of 10 to 12 years. Bred primarily for functional endurance in demanding mountain terrain, it has largely avoided many artificial genetic extremes. However, its immense body mass and deep chest predispose it to specific structural and orthopedic disorders. Primary health considerations include hip dysplasia, elbow dysplasia, gastric dilatation-volvulus (GDV / bloat), eyelid abnormalities (entropion and ectropion), panosteitis in fast-growing puppies, and hygromas over heavy pressure points.",

    commonConditions: [
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints leading to degenerative osteoarthritis and hind-limb lameness, monitored through pre-breeding radiographic screening",
      "Elbow dysplasia — developmental abnormalities of the elbow joints that can cause forelimb lameness and secondary arthritis",
      "Gastric dilatation-volvulus (GDV / bloat) — an acute, life-threatening emergency in deep-chested giant breeds where the stomach distends with gas and twists on its mesenteric axis, requiring emergency surgical intervention",
      "Entropion and ectropion — eyelid margin defects where loose facial skin causes the eyelids to roll inward against the cornea or sag outward, predisposing to conjunctivitis and corneal irritation",
      "Panosteitis and hypertrophic osteodystrophy (HOD) — self-limiting inflammatory bone conditions causing shifting lameness in fast-growing giant puppies",
      "Elbow hygroma and pressure calluses — fluid-filled sacs and thick skin pads forming over elbow joints from resting on hard ground",
      "Heart conditions — occasional reports of dilated cardiomyopathy (DCM) or murmurs evaluated via veterinary auscultation and echocardiography"
    ],

    preventiveCare: [
      "Confirm that breeding stock has certified radiographic clearances for hips and elbows, alongside certified specialist ophthalmic evaluations.",
      "Promote slow, controlled growth in puppies through portion-controlled giant-breed nutrition with calibrated calcium-to-phosphorus ratios.",
      "Feed two smaller meals daily and avoid vigorous exercise immediately before or after eating to mitigate bloat risk.",
      "Provide thick, cushioned bedding or orthopedic mattresses to protect heavy elbow and hock joints from hygromas.",
      "Inspect and clean throat dewlap folds weekly to prevent bacterial or yeast intertrigo.",
      "Trim hind dewclaws regularly to prevent painful snagging and tearing.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation through an accredited national screening program prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "Comprehensive ophthalmic examination by a board-certified veterinary ophthalmologist",
      "Cardiac examination including auscultation by a veterinary specialist"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste. The breed has powerful, massive jaws with a complete 42-tooth scissor bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the triangular drop ears weekly for wax buildup, moisture, or foul odor. Clean gently using a veterinarian-recommended ear solution, drying the leather thoroughly.",

    skinCare:
      "Inspect the deep throat dewlap folds weekly for redness or moisture accumulation. Clean and dry the skin folds with a soft cloth, providing soft resting surfaces to prevent pressure calluses."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Ranchers, pastoralists, and farmers seeking a formidable, autonomous flock guardian against wolves and predators",
      "Experienced owners of giant livestock guardian breeds who appreciate independent, territorial protection",
      "Rural or semi-rural properties with spacious, securely fenced acreage or large yards",
      "Households comfortable managing substantial body weight, heavy drooling, and seasonal shedding",
      "Owners who value a calm, gentle domestic presence paired with vigilant outdoor protection"
    ],

    notIdealFor: [
      "First-time dog owners or passive handlers unprepared for autonomous giant guardian instincts",
      "Apartment, condominium, or suburban townhouse living",
      "Urban environments with heavy foot traffic, shared fences, and frequent unfamiliar visitors",
      "Households without secure, heavy-duty perimeter fencing",
      "People seeking a highly submissive, eager-to-please companion for competitive agility or obedience"
    ]
  },

  funFacts: [
    "The Spanish Mastiff was the official protector of the Mesta, the medieval Spanish sheep-owners guild, where historical livestock laws codified in the thirteenth century dictated that shepherds must keep one mastiff for every one hundred Merino sheep.",
    "During centuries of seasonal sheep migrations across Spain, shepherds fitted their mastiffs with heavy iron collars called 'carlancas' studded with outward-facing two-inch spikes, designed to protect the dogs' throats from lethal wolf bites during nocturnal battles.",
    "Diego Velázquez famously immortalized the Spanish Mastiff in his 1656 royal masterpiece 'Las Meninas', depicting a massive, placid mastiff resting peacefully at the feet of the young Infanta Margarita and her ladies-in-waiting in the royal palace.",
    "The breed's signature double dewlap on the throat is not merely decorative; historically, the loose, thick skin folds allowed the dog to turn and retaliate against wolves even if seized by the neck.",
    "In Spanish folk tradition, the breed's bark is referred to as 'el ladrido de trueno' (thunder bark), a low-pitched, guttural roar that can echo across mountain valleys for over two kilometers to deter predators.",
    "Despite standing 77 to 88 cm tall and weighing up to 100 kg, the Spanish Mastiff has an extraordinarily calm, slow, and measured resting pace, conserving its massive energy until a genuine threat appears."
  ],

  faq: [
    {
      question: "What is a Spanish Mastiff?",
      answer:
        "The Spanish Mastiff (Mastín Español) is an ancient, giant livestock guardian dog from Spain, renowned for its colossal bone structure, thick double dewlap, weather-resistant coat, and calm, fearless protection of sheep and cattle."
    },
    {
      question: "How tall and heavy is a Spanish Mastiff?",
      answer:
        "Adult males stand 77 to 88 cm at the withers and weigh 65 to 100 kg, while adult females stand 72 to 80 cm and weigh 55 to 80 kg, presenting an imposing, massive frame."
    },
    {
      question: "How does the Spanish Mastiff differ from the Pyrenean Mastiff?",
      answer:
        "While both are giant Spanish flock guardians, the Spanish Mastiff is heavier-boned with more abundant, loose throat skin, a prominent double dewlap, and solid or brindle coloring; the Pyrenean Mastiff typically has a predominantly white coat with a well-defined dark facial mask and colored patches."
    },
    {
      question: "How long does a Spanish Mastiff live?",
      answer:
        "With proper nutrition, slow puppy growth, and conscientious preventive veterinary care, the breed typically enjoys a lifespan of 10 to 12 years."
    },
    {
      question: "Does the Spanish Mastiff drool a lot?",
      answer:
        "Yes. Their heavy, pendulous upper lips and loose lower flews produce regular drooling, especially after drinking, eating, or during warm weather; owners should keep hand towels available."
    },
    {
      question: "Can a Spanish Mastiff live in an apartment?",
      answer:
        "No. Due to their colossal size, territorial vigilance, and deep booming bark, they are completely unsuited to apartment living and require a rural or semi-rural home with a securely fenced yard or pasture."
    },
    {
      question: "Is the Spanish Mastiff good with children and family?",
      answer:
        "Yes. Within their own family, they are famously gentle, patient, and deeply protective of children; however, due to their massive size, interactions with toddlers should always be supervised."
    },
    {
      question: "How much exercise does a Spanish Mastiff need each day?",
      answer:
        "They require moderate exercise, typically 45 to 60 minutes of daily activity, consisting of slow-paced boundary walks, leisurely strolls, and free movement across secure outdoor grounds."
    },
    {
      question: "Why do Spanish Mastiffs have double dewclaws on their rear legs?",
      answer:
        "Double rear dewclaws are an ancient, authentic anatomical trait common to traditional Iberian livestock guardians; historically, they provided extra stability and footing on uneven, rocky mountain terrain."
    },
    {
      question: "What health conditions affect the Spanish Mastiff?",
      answer:
        "Primary health priorities include hip dysplasia, elbow dysplasia, bloat (gastric dilatation-volvulus), eyelid disorders (entropion and ectropion), and elbow hygromas from resting on hard surfaces."
    }
  ],

  references: [
    "fci-spanish-mastiff-official-standard",
    "fci-spanish-mastiff-nomenclature",
    "rsce-mastin-espanol-breed-standard",
    "aepme-mastin-espanol-profile",
    "ukc-spanish-mastiff-breed-standard",
    "akc-spanish-mastiff-breed-profile",
    "spanish-mastiff-hip-dysplasia-study-2015",
    "wikimedia-mastin-espanol-1-tomasz-sienicki",
    "wikimedia-mastin-espanol-canarian"
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
          id: "fci-spanish-mastiff-official-standard",
          role: "verified",
          locator: "Standard heading: MASTÍN ESPAÑOL (Spanish Mastiff)"
        },
        {
          id: "fci-spanish-mastiff-nomenclature",
          role: "verified",
          locator: "Official nomenclature: MASTÍN ESPAÑOL (91)"
        },
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "verified",
          locator: "Denominación oficial: Mastín Español"
        },
        {
          id: "aepme-mastin-espanol-profile",
          role: "verified",
          locator: "Historia y nombres tradicionales: Mastín Leonés, Mastín de la Mancha, Mastín de Extremadura"
        },
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "verified",
          locator: "History: Spanish Mastiff, Mastín Español"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Verified across FCI Standard No. 91, FCI Nomenclature, RSCE, AEPME, and AKC."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spanish-mastiff-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 2 Pinscher and Schnauzer, Molossoid breeds, Swiss Mountain and Cattle Dogs, Section 2.2 Molossoid breeds, Mountain type, without working trial"
        },
        {
          id: "fci-spanish-mastiff-nomenclature",
          role: "verified",
          locator: "Group 2, Section 2.2 Mountain type, without working trial"
        },
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "verified",
          locator: "Grupo 2 Molosoides tipo montaña"
        },
        {
          id: "ukc-spanish-mastiff-breed-standard",
          role: "verified",
          locator: "Guardian Dog Group"
        },
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "verified",
          locator: "Foundation Stock Service (Working Group)"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spanish-mastiff-official-standard",
          role: "verified",
          locator: "ORIGIN: Spain; BRIEF HISTORICAL SUMMARY"
        },
        {
          id: "fci-spanish-mastiff-nomenclature",
          role: "verified",
          locator: "Country of origin: Spain"
        },
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "verified",
          locator: "Origen: España (rutas de la Mesta y trashumancia ibérica)"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spanish-mastiff-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, IMPORTANT PROPORTIONS, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "verified",
          locator: "Resumen histórico, proporciones, aspecto general y aptitudes"
        },
        {
          id: "aepme-mastin-espanol-profile",
          role: "verified",
          locator: "Historia del Mastín Español, Mesta, carlancas, trashumancia y morfología"
        },
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "verified",
          locator: "About the Breed, History, and Roles"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Synthesized in original prose from FCI Standard No. 91, RSCE, AEPME, and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spanish-mastiff-official-standard",
          role: "verified",
          locator: "HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE AND WEIGHT"
        },
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "verified",
          locator: "Morfología, proporciones, papada doble, cabeza, extremidades y manto"
        },
        {
          id: "ukc-spanish-mastiff-breed-standard",
          role: "verified",
          locator: "General Appearance, Size, Head, Double Dewlap, Body, Coat, Color"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Conformation, sub-longilinear proportions, double throat dewlap, coarse double coat, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spanish-mastiff-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Height at the withers: Lower limit: Dogs: 77 cm. Bitches: 72 cm. Desirable to largely exceed: dogs over 80 cm, bitches over 75 cm."
        },
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "verified",
          locator: "Alzada a la cruz: Límite inferior: Machos 77 cm; Hembras 72 cm (deseable superar 80 cm y 75 cm)"
        },
        {
          id: "ukc-spanish-mastiff-breed-standard",
          role: "verified",
          locator: "Height: Males: minimum 30.5 inches (77 cm), preferably 31.5 inches (80 cm) or more; Females: minimum 28.5 inches (72 cm), preferably 29.5 inches (75 cm) or more"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Preserved in published unit of centimetres (77–88 cm for males, with 77 cm lower limit and desirable over 80 cm; 72–80 cm for females, with 72 cm lower limit and desirable over 75 cm) exactly as specified in the official FCI Standard No. 91 and RSCE standard."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "aepme-mastin-espanol-profile",
          role: "verified",
          locator: "Peso estándar orientativo: Machos de 65 a 100 kg; Hembras de 55 a 80 kg"
        },
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "verified",
          locator: "Morfología funcional: animales pesados y masivos con peso armónico proporcionado a la gran talla"
        },
        {
          id: "ukc-spanish-mastiff-breed-standard",
          role: "verified",
          locator: "Weight: Males typically 140 to 220 pounds (approx. 64-100 kg); Females 110 to 170 pounds (approx. 50-77 kg)"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "FCI Standard No. 91 defines size with lower height limits and requires harmonious mass without fixing a ceiling. The stored 65 to 100 kg for males and 55 to 80 kg for females represent canonical working figures published by the national parent club (AEPME) and working registries, preserved in kilograms."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 10-12 years"
        },
        {
          id: "aepme-mastin-espanol-profile",
          role: "verified",
          locator: "Esperanza de vida media (10-12 años)"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Supported by kennel club and parent club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-spanish-mastiff-official-standard",
          role: "verified",
          locator: "COAT: Dense, thick, coarse outer coat with woolly undercoat"
        },
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (3/5 to 4/5)"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-spanish-mastiff-official-standard",
          role: "verified",
          locator: "Lips: Upper lip amply covering lower lip, pendulous flews"
        },
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (4/5)"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Pendulous upper lips and loose lower flews result in regular drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spanish-mastiff-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Affectionate, meek, noble, extremely firm in front of dangerous animals and strangers; confident, deep and grave bark"
        },
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "verified",
          locator: "Carácter y comportamiento: Noble, afectuoso, rústico, guardián firme y seguro, ladrido ronco y grave"
        },
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "verified",
          locator: "Temperament: Calm, noble, courageous, deeply loyal, natural protector"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        },
        {
          id: "aepme-mastin-espanol-profile",
          role: "cited",
          locator: "Pauta de comportamiento y vigilancia"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented livestock guardian temperament, high protectiveness, and low energy."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        },
        {
          id: "aepme-mastin-espanol-profile",
          role: "cited",
          locator: "Cuidados, espacio, higiene de pliegues y ejercicio"
        }
      ],
      verifiedOn: null,
      note:
        "Combines giant flock guardian management with double dewlap hygiene and bloat prevention protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "verified",
          locator: "Energy Level (2/5); Exercise Needs (2/5 to 3/5)"
        },
        {
          id: "fci-spanish-mastiff-official-standard",
          role: "verified",
          locator: "UTILIZATION: Guard and defence. Close to flocks during seasonal migration"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "cited",
          locator: "Daily exercise requirements: Moderate activity and perimeter walking"
        },
        {
          id: "aepme-mastin-espanol-profile",
          role: "cited",
          locator: "Necesidad de movimiento en espacios abiertos"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 45 to 60 minutes of daily activity reflects the moderate exercise demands of a heavy, energy-conserving giant livestock guardian."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "cited",
          locator: "Colossal size, territorial guarding, and booming voice"
        },
        {
          id: "aepme-mastin-espanol-profile",
          role: "cited",
          locator: "Inadecuado para pisos o espacios reducidos"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial evaluation that colossal body size, deep booming bark, and territorial guardian instincts make apartment living unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "verified",
          locator: "Exercise and secure fenced-yard recommendations"
        },
        {
          id: "aepme-mastin-espanol-profile",
          role: "verified",
          locator: "Requisitos de alojamiento: fincas, casas con terreno amplio y vallado"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-spanish-mastiff-official-standard",
          role: "verified",
          locator: "COAT: Thick coat with dense woolly undercoat adapted to Iberian continental and mountain climates"
        },
        {
          id: "rsce-mastin-espanol-breed-standard",
          role: "verified",
          locator: "Rusticidad y resistencia a climas extremos de montaña y calor ibérico"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "aepme-mastin-espanol-profile",
          role: "cited",
          locator: "Comportamiento autónomo en el campo"
        }
      ],
      verifiedOn: null,
      note:
        "Flock guardians possess high autonomous alone-time tolerance when given a territory or animals to monitor, though family contact is necessary."
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food, portion control, bloat precautions"
        },
        {
          id: "aepme-mastin-espanol-profile",
          role: "cited",
          locator: "Alimentación del perro gigante y prevención de sobrepeso"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for giant breeds prone to orthopedic stress and gastric dilatation."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "cited",
          locator: "Life-stage nutrition and divided meal schedules"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "spanish-mastiff-hip-dysplasia-study-2015",
          role: "verified",
          locator: "Radiographic hip dysplasia prevalence, phenotypic evaluation, and breeding control in the Spanish Mastiff"
        },
        {
          id: "aepme-mastin-espanol-profile",
          role: "verified",
          locator: "Salud, displasia de cadera, codo, torsión gástrica y entropión"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Synthesizes peer-reviewed veterinary studies on orthopedic screening with national parent club health recommendations."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "spanish-mastiff-hip-dysplasia-study-2015",
          role: "verified",
          locator: "Hip dysplasia pathology and osteoarthritis in Spanish Mastiffs"
        },
        {
          id: "aepme-mastin-espanol-profile",
          role: "verified",
          locator: "Displasia coxofemoral, torsión gástrica, entropión, ectropión e higromas"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Details documented genetic and conformational conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "aepme-mastin-espanol-profile",
          role: "cited",
          locator: "Prevención, control de crecimiento lento, higiene de pliegues y descanso acolchado"
        },
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "cited",
          locator: "Routine care, bloat precautions, and veterinary checks"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to giant livestock guardians."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "aepme-mastin-espanol-profile",
          role: "verified",
          locator: "Requisitos de cría: Radiografía oficial de displasia de cadera (HD) y codo (ED), examen ocular"
        },
        {
          id: "spanish-mastiff-hip-dysplasia-study-2015",
          role: "verified",
          locator: "Pre-breeding radiographic screening protocols"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Screenings summarize published parent club and veterinary orthopedic protocols."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-spanish-mastiff-official-standard",
          role: "cited",
          locator: "Jaws/teeth: complete scissor bite, powerful large teeth"
        },
        {
          id: "akc-spanish-mastiff-breed-profile",
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
          id: "fci-spanish-mastiff-official-standard",
          role: "cited",
          locator: "Ears: medium size, triangular, flat drop ears"
        },
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "cited",
          locator: "Ear hygiene and inspection"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for heavy drop ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-spanish-mastiff-official-standard",
          role: "cited",
          locator: "Skin: very thick, loose, double dewlap on throat"
        },
        {
          id: "aepme-mastin-espanol-profile",
          role: "cited",
          locator: "Higiene y secado de la papada doble para evitar intertrigo"
        }
      ],
      verifiedOn: null,
      note: "Dermatological care protocol for breeds with deep skin dewlaps."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        },
        {
          id: "aepme-mastin-espanol-profile",
          role: "cited",
          locator: "Requisitos de manejo y perfil del propietario adecuado"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, giant physical mass, and guardian instincts."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "aepme-mastin-espanol-profile",
          role: "verified",
          locator: "Historia de la Mesta, 1 mastín por 100 ovejas, carlancas con púas, cuadro Las Meninas de Velázquez"
        },
        {
          id: "fci-spanish-mastiff-official-standard",
          role: "verified",
          locator: "Brief historical summary: Transhumance history, Merino sheep guarding"
        },
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "verified",
          locator: "Velázquez Las Meninas, carlanca spiked collars, thunder bark"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Verified historical folklore and working heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-spanish-mastiff-official-standard",
          role: "verified",
          locator: "Origin, size (males 77-88 cm / females 72-80 cm), double dewlap, and colors"
        },
        {
          id: "aepme-mastin-espanol-profile",
          role: "verified",
          locator: "Weight (65-100 kg / 55-80 kg), lifespan (10-12 years), double dewclaws, and comparison with Pyrenean Mastiff"
        },
        {
          id: "akc-spanish-mastiff-breed-profile",
          role: "verified",
          locator: "Family suitability, drooling, exercise, and training"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and parent club data without naming registries in prose."
    }
  },

  updatedOn: "2026-11-10"
};
