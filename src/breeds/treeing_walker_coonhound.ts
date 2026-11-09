import type { Breed } from "../schema/breed.types";

export const treeing_walker_coonhound: Breed = {
  slug: "treeing-walker-coonhound",
  name: "Treeing Walker Coonhound",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Treeing Walker",
    "Walker Coonhound",
    "Walker Hound",
    "Treeing Walker Hound"
  ],

  group:
    "Scenthounds and Related Breeds; Section 1.1 — Large-sized Hounds (with working trial; also classified in the Hound and Scenthound groups)",

  origin: {
    country: "United States",
    region:
      "Southeastern United States (originating from English Foxhound crosses refined primarily in Virginia and Kentucky)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Treeing_Walker_Coonhound.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Treeing_Walker_Coonhound.jpg",
      title: "Treeing Walker Coonhound.jpg",
      description: "An adult Treeing Walker Coonhound standing in grass.",
      creator: "BullMaster",
      uploader: "BullMaster",
      capturedOn: "2008-01-20",
      uploadedOn: "2008-01-20",
      width: 1600,
      height: 1200,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by BullMaster, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Treeing_Walker_Coonhound.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08"
    }
  ],

  overview: {
    summary:
      "A fast, agile, and athletic American hunting hound known as the people's choice among coonhounds, celebrated for its striking tricolor coat, melodious trailing bugle, and distinct chop bark when game is treed.",

    description:
      "The Treeing Walker Coonhound is a clean-limbed, powerful, yet graceful medium-to-large scent hound developed for pursuit and treeing of wild game across dense American forests and rough terrain. Characterized by a streamlined, athletic outline with substantial bone and smooth musculature, the hound is built for remarkable speed, agility, and untiring endurance. Its smooth, glossy, and close-fitting short coat traditionally features a bright white ground with black markings and rich tan trim. The head is cleanly chiseled with a broad, slightly rounded skull, expressive dark eyes displaying a soft hound gaze, and medium-length pendant ears that hang gracefully. In the household, it presents an affectionate, calm, and docile temperament, but in the field it transforms into a relentless, competitive tracker with an extraordinary olfactory capacity.",

    history:
      "The breed traces its heritage to seventeenth- and eighteenth-century English Foxhounds brought to Virginia and Maryland by early American colonists. During the mid-nineteenth century, breeders Thomas Walker and George Washington Maupin in Kentucky crossed these foundation hounds with a stolen hound of mysterious breeding named Tennessee Lead, who possessed extraordinary drive, lightfooted speed, and a natural treeing instinct. These dogs were initially categorized as the Walker strain of the English Coonhound. In 1945, recognizing its distinct conformation, speed, and specialized treeing style, breeders established it as an independent purebred hound. Over the late twentieth and early twenty-first centuries, it achieved full national and international recognition, cementing its position as the premier competitive coonhound in North American field trials and night hunts.",

    originalPurpose:
      "Trailing, driving, and treeing raccoons, opossums, bobcats, mountain lions, and bears across rugged woodlands and swamps.",

    currentRoles: [
      "Competitive night hunt and field trial tracking hound",
      "Traditional tracking and treeing hunting companion",
      "Active outdoor companion for rural sporting households",
      "Canine athlete in agility, tracking, and scent work",
      "Search, rescue, and tracking detection dog"
    ]
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "in",
      male: {
        min: 22,
        max: 27
      },
      female: {
        min: 20,
        max: 25
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 50,
        max: 70
      },
      female: {
        min: 45,
        max: 65
      }
    },

    lifespanYears: {
      min: 12,
      max: 14
    },

    coatType:
      "Smooth, glossy, short, and dense coat that lies close to the body, coarse enough to provide effective protection from thorns and brambles without being harsh or wire-like.",

    coatLength: "Short",

    coatColors: [
      "Tricolor (white ground with black markings and rich tan trim)",
      "White and black",
      "White and tan"
    ],

    sheddingLevel:
      "Low to moderate year-round shedding with minor seasonal increases during spring and autumn",

    droolingLevel:
      "Low to moderate; lips are clean and tight compared to deeper-flewed hounds, though light salivation occurs around food or after strenuous tracking",

    distinctiveFeatures: [
      "Streamlined, athletic, and muscular body combining speed with endurance",
      "Height of 22 to 27 inches for males and 20 to 25 inches for females",
      "Weight of 50 to 70 pounds for males and 45 to 65 pounds for females",
      "Medium-length head with a broad, slightly rounded skull and a clearly defined stop",
      "Square, medium-length muzzle with tight-fitting, darkly pigmented lips",
      "Complete scissor bite with strong jaws and large teeth",
      "Large, prominent, dark brown or hazel eyes with an earnest, intelligent expression",
      "Medium-length pendant ears set moderately low, hanging gracefully with a slight roll",
      "Dry, muscular neck rising cleanly from well-laid-back shoulders without excess throatiness",
      "Deep, broad chest extending down to the elbows with well-sprung ribs",
      "Strong, straight back with a muscular, slightly arched loin",
      "High-set tail carried upward in a gentle sabre curve without turning over the back",
      "Straight, heavy-boned forelegs and powerful hindquarters with tight, well-knuckled cat feet"
    ]
  },

  temperament: {
    traits: [
      "Intelligent, alert, and confident in all environments",
      "Calm, gentle, and deeply affectionate in the home",
      "Passionate, relentless, and competitive on scent trails",
      "Eager to please and responsive to fair guidance",
      "Social, pack-oriented, and friendly with other dogs",
      "Good-natured and welcoming with unfamiliar humans",
      "Patient and dependable with familiar children",
      "High stamina and independent problem-solving drive",
      "High prey drive toward wild game and small animals",
      "Vocal and expressive, with a carrying musical bugle that shifts to a continuous chop bark at the tree"
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 5,
      withStrangers: 4,
      protectiveness: 2,
      independence: 4,
      trainability: 4,
      barking: 4,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; requires vigorous daily physical exercise, scent enrichment, and running opportunities to satisfy its working hound instincts",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Long daily brisk walks or trail hikes on a sturdy leash",
        "Supervised free running in a large, securely fenced field or paddock",
        "Structured scent tracking and blood tracking games",
        "Field trials, night hunts, and drag-trail scentwork",
        "Canicross, trail jogging, or running alongside a bicycle once fully mature",
        "Interactive food puzzles and nosework searches"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush once or twice weekly using a rubber hound glove or firm bristle brush to remove loose hair, distribute skin oils, and maintain coat gloss.",

      bathing:
        "Bathe every four to six weeks or as needed after muddy field runs, using a mild canine shampoo to avoid stripping natural protective oils.",

      notes: [
        "Inspect the long pendant ears weekly for moisture, wax buildup, or debris, especially after field hunts.",
        "Check paw pads, toes, and skin for thorns, burrs, or small cuts after running through dense cover.",
        "Trim strong, fast-growing nails every two to three weeks to maintain correct foot alignment.",
        "Brush teeth several times weekly using canine-formulated enzymatic toothpaste.",
        "Wipe down the short coat with a damp cloth after woodland runs to remove trail dust.",
        "Maintain consistent tick, flea, and heartworm prevention during active outdoor seasons."
      ]
    },

    training: {
      difficulty:
        "Moderate; highly intelligent and eager to please, but strong tracking instincts and independent scent focus require patient, reward-based training and consistent containment",

      tips: [
        "Use positive reinforcement, high-value treats, and enthusiastic praise.",
        "Practice recall from early puppyhood on a long line, acknowledging that scent drive can override commands in the wild.",
        "Keep sessions short, dynamic, and engaging to prevent boredom.",
        "Always walk on a leash or exercise in a securely fenced enclosure, as a scent trail will trigger immediate trailing.",
        "Channel natural trailing drive into structured scentwork, tracking, or hunting sports.",
        "Avoid harsh verbal reprimands or physical corrections, which cause this sensitive hound to lose confidence and shut down."
      ],

      socialization:
        "Introduce the puppy gradually and positively to a wide variety of people, vaccinated dogs, household sights, sounds, and outdoor environments. Broad early social exposure builds a confident, stable companion that is polite and relaxed with strangers while maintaining focus during training."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Warm climates, provided shade, fresh water, and air-conditioned rest areas are readily available",
        "Cold climates, provided the dog lives indoors with the family and has warm protective gear for extended winter outings"
      ],

      aloneTimeTolerance:
        "Moderate when provided with plenty of daily exercise and mental enrichment, though prolonged isolation without companionship can lead to baying or escape attempts."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for medium-to-large active sporting or working hounds, adjusted for seasonal hunting workload.",

    feedingFrequency: {
      puppy:
        "Three to four measured meals daily until six months of age, transitioning to two meals daily thereafter on a growth formula supporting steady development.",
      adult:
        "Two measured meals daily to support steady metabolism and minimize digestive discomfort.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output, joint mobility, and lean muscle retention."
    },

    guidelines:
      "Measure food rations carefully with a digital kitchen scale or standard measuring cup, adjusting caloric intake to match seasonal hunting demands. Divide the daily allowance into two meals, refrain from vigorous running for at least one hour before and after eating, and provide cool, fresh drinking water at all times.",

    considerations: [
      "Maintain a lean, muscular body condition where ribs are easily felt without excess fat padding.",
      "Increase caloric and protein density during active autumn and winter hunting or tracking trials.",
      "Count training treats toward the daily caloric allowance to avoid creeping weight gain during off-season months.",
      "Rest the dog before and after meals to promote healthy digestion and reduce the risk of bloat.",
      "Provide clean drinking water, especially during long tracking excursions in warm weather.",
      "Transition between diet formulas gradually over five to seven days."
    ],

    note:
      "Caloric needs fluctuate substantially between sedentary summer months and active autumn hunting seasons. Work with a veterinarian to establish tailored daily feeding portions."
  },

  health: {
    overview:
      "The Treeing Walker Coonhound is an exceptionally robust, athletic working breed with a typical life expectancy of 12 to 14 years. Developed primarily for functional performance, stamina, and sound movement in challenging American woodlands, it has largely avoided the severe hereditary genetic disorders seen in many heavily commercialized breeds. Primary health considerations focus on orthopedics, drop-ear management, and active field risks, including hip dysplasia, ear infections (otitis externa), and gastric dilatation-volvulus (GDV / bloat).",

    commonConditions: [
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints, monitored through pre-breeding radiographic screening programs",
      "Elbow dysplasia — developmental abnormalities of the elbow joints that can cause forelimb lameness and secondary arthritis",
      "Gastric dilatation-volvulus (GDV / bloat) — an acute, life-threatening emergency in deep-chested dogs where the stomach distends with gas and twists on its axis",
      "Otitis externa — bacterial or yeast infections in the ear canal encouraged by folded, pendant ear flaps that reduce air circulation",
      "Field injuries — minor lacerations, pad abrasions, torn nails, or muscle sprains sustained while tracking game through dense brush or across rocky ground",
      "Canine vector-borne infections — tick-borne diseases (such as Lyme disease, Ehrlichia, and Anaplasma) encountered in wooded hunting habitats"
    ],

    preventiveCare: [
      "Verify that breeding parents have official radiographic hip evaluation clearances.",
      "Inspect and dry the pendant ears weekly, particularly after wet forest runs or swims.",
      "Maintain strict tick, flea, and internal parasite prevention throughout active tracking seasons.",
      "Check paw pads, toes, and skin after hunting trips for thorns, cuts, burrs, or embedded debris.",
      "Feed two smaller meals daily and avoid vigorous running immediately before or after eating to mitigate bloat risk.",
      "Maintain a lean, athletic body condition to avoid premature joint wear.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine dental care."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia screening through an accredited national screening program prior to breeding",
      "Radiographic elbow dysplasia screening prior to breeding",
      "Routine clinical veterinary ophthalmic examination",
      "Annual veterinary blood screening for tick-borne diseases in endemic hunting territories"
    ],

    dentalCare:
      "Brush teeth several times weekly using dog-specific enzymatic toothpaste. The breed has strong, well-developed jaws with a complete 42-tooth scissor bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the pendant ears weekly for wax buildup, moisture, or foul odor. Clean gently using a veterinarian-recommended ear solution, drying the leather thoroughly without inserting swabs deep into the canal.",

    skinCare:
      "Part the dense short coat weekly to inspect the skin for external parasites, scratches, or hot spots. The close-lying coat naturally sheds dirt and requires minimal skin intervention beyond regular brushing."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Active hunters, field trial competitors, and tracking enthusiasts seeking a dedicated, fast-working hound",
      "Experienced dog owners familiar with managing strong scenthound drive, vocal baying, and outdoor independence",
      "Rural or semi-rural households with large, securely fenced outdoor space",
      "Outdoor lovers who engage in regular long-distance hiking, trail running, or woodland exploration",
      "Families that appreciate a calm, gentle, and quiet indoor companion paired with high outdoor energy"
    ],

    notIdealFor: [
      "Apartment dwellers or dense urban households with shared walls and limited outdoor open space",
      "Sedentary individuals looking for a low-exercise lap pet",
      "Households with loose small pets such as rabbits, ferrets, or rodents vulnerable to high prey drive",
      "Owners who require instant off-leash obedience in unfenced, wildlife-rich areas",
      "First-time owners unprepared for independent scent-tracking instincts and loud baying"
    ]
  },

  funFacts: [
    "Known among hunters as 'the people's choice' of coonhounds, it is the most popular and numerous hound in competitive night hunts and field trials across North America.",
    "The breed's lineage traces directly to imported English foxhounds and a famous foundation dog named Tennessee Lead, a hound of unknown ancestry acquired in Tennessee in the 1850s whose speed, drive, and treeing ability revolutionized American hounds.",
    "Two Kentucky breeders, Thomas Walker and George Washington Maupin, were instrumental in selecting and standardizing the breed, which was originally classified alongside the English Coonhound before gaining separate recognition.",
    "The breed is called a 'treeing' hound because upon chasing game up a tree, it places its front paws on the trunk, throws its head back, and bays continuously to alert the hunter.",
    "A skilled hunter can read the hound's distinct vocalizations: a deep, ringing musical bugle while pursuing quarry on the trail, which instantly shifts to an energetic, rapid chop bark the moment the game is treed.",
    "In competitive field trials and water races, the breed's streamlined athletic build makes it one of the fastest and most agile of all six American coonhound breeds.",
    "Despite its fierce drive on the trail, it is famously known for transforming into an affectionate, docile companion the moment it enters the home."
  ],

  faq: [
    {
      question: "What is a Treeing Walker Coonhound?",
      answer:
        "The Treeing Walker Coonhound is a medium-to-large American hunting hound renowned for its exceptional speed, keen nose, stamina, and ability to track and tree wild game."
    },
    {
      question: "Where does the Treeing Walker Coonhound originate?",
      answer:
        "The breed originated in the United States, developed primarily in Virginia and Kentucky from English Foxhounds crossed with a legendary foundation dog named Tennessee Lead."
    },
    {
      question: "What was the Treeing Walker Coonhound bred to do, and what does 'treeing' mean?",
      answer:
        "It was bred to trail raccoons, bears, and other game through woodlands. 'Treeing' refers to the hound's instinct to force game up a tree, place its paws against the trunk, and vocalize continuously until the hunter arrives."
    },
    {
      question: "How tall and heavy is a Treeing Walker Coonhound?",
      answer:
        "Adult males stand 22 to 27 inches at the shoulder and weigh 50 to 70 pounds, while females stand 20 to 25 inches and weigh 45 to 65 pounds, presenting an athletic and streamlined build."
    },
    {
      question: "How long does a Treeing Walker Coonhound usually live?",
      answer:
        "With proper nutrition, regular exercise, and conscientious preventive veterinary care, the breed typically enjoys a healthy lifespan of 12 to 14 years."
    },
    {
      question: "What does the Treeing Walker Coonhound's coat look like?",
      answer:
        "The coat is short, dense, glossy, and close-lying, most often featuring a crisp tricolor pattern of white with black markings and rich tan trim."
    },
    {
      question: "Can a Treeing Walker Coonhound live in an apartment?",
      answer:
        "No. Due to its high exercise requirements, working stamina, and carrying voice, the breed is not suited to apartment living and thrives best in a rural or suburban home with a securely fenced yard."
    },
    {
      question: "Is the Treeing Walker Coonhound good with children and other dogs?",
      answer:
        "Yes. It is remarkably gentle, friendly, and affectionate with children, and as a traditional pack hound, it gets along exceptionally well with other dogs."
    },
    {
      question: "How much exercise does a Treeing Walker Coonhound need each day?",
      answer:
        "The breed requires at least 60 to 90 minutes of vigorous daily physical activity, including brisk walks, hiking, and mental scent-tracking enrichment to satisfy its working nature."
    },
    {
      question: "Does the Treeing Walker Coonhound bark or howl a lot?",
      answer:
        "Yes. It possesses a loud, resonant bay and chop bark that carries over great distances, which it readily uses when excited, bored, or tracking an enticing scent."
    },
    {
      question: "Is the Treeing Walker Coonhound easy to train?",
      answer:
        "It is intelligent and eager to please its handler, but strong scenting instincts mean it can be easily distracted outdoors; it responds best to patient, positive reinforcement training and must be kept leashed in unfenced areas."
    },
    {
      question: "What health problems are known in the Treeing Walker Coonhound?",
      answer:
        "The breed is remarkably robust with few genetic disorders; primary health considerations include hip dysplasia, ear infections from pendant ears, and occasional field injuries sustained while hunting."
    }
  ],

  references: [
    "fci-treeing-walker-coonhound-official-standard",
    "fci-treeing-walker-coonhound-nomenclature",
    "akc-treeing-walker-coonhound-breed-standard",
    "akc-treeing-walker-coonhound-breed-profile",
    "ukc-treeing-walker-coonhound-breed-standard",
    "ofa-treeing-walker-coonhound-health-screenings",
    "wikimedia-treeing-walker-coonhound-bullmaster"
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
          id: "akc-treeing-walker-coonhound-breed-standard",
          role: "verified",
          locator: "Standard header and breed name: Treeing Walker Coonhound"
        },
        {
          id: "fci-treeing-walker-coonhound-official-standard",
          role: "verified",
          locator: "Standard heading: TREEING WALKER COONHOUND"
        },
        {
          id: "fci-treeing-walker-coonhound-nomenclature",
          role: "verified",
          locator: "Official nomenclature: TREEING WALKER COONHOUND (359)"
        },
        {
          id: "ukc-treeing-walker-coonhound-breed-standard",
          role: "verified",
          locator: "Breed name and historical variants (Walker Coonhound, Treeing Walker)"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Verified across AKC, FCI Standard No. 359, FCI Nomenclature, and UKC."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-treeing-walker-coonhound-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 6 Scenthounds and related breeds, Section 1.1 Large-sized Hounds, with working trial"
        },
        {
          id: "fci-treeing-walker-coonhound-nomenclature",
          role: "verified",
          locator: "Group 6, Section 1.1 Large-sized Hounds, with working trial"
        },
        {
          id: "akc-treeing-walker-coonhound-breed-standard",
          role: "verified",
          locator: "Hound Group"
        },
        {
          id: "ukc-treeing-walker-coonhound-breed-standard",
          role: "verified",
          locator: "Scenthound Group"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-treeing-walker-coonhound-official-standard",
          role: "verified",
          locator: "ORIGIN: United States of America; BRIEF HISTORICAL SUMMARY"
        },
        {
          id: "fci-treeing-walker-coonhound-nomenclature",
          role: "verified",
          locator: "Country of origin: United States of America"
        },
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "verified",
          locator: "History: Origin in the United States from English Foxhounds refined in Virginia and Kentucky"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-treeing-walker-coonhound-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "akc-treeing-walker-coonhound-breed-standard",
          role: "verified",
          locator: "General Appearance, Head, Body, and Temperament"
        },
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "verified",
          locator: "About the Breed, History (Tennessee Lead, George Washington Maupin, Thomas Walker), and Roles"
        },
        {
          id: "ukc-treeing-walker-coonhound-breed-standard",
          role: "verified",
          locator: "History (1945 separation from English Coonhound) and Characteristics"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Synthesized in original prose from FCI Standard No. 359, AKC standard and profile, and UKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-treeing-walker-coonhound-breed-standard",
          role: "verified",
          locator: "General Appearance, Head, Body, Legs, Coat, Color, and Size"
        },
        {
          id: "fci-treeing-walker-coonhound-official-standard",
          role: "verified",
          locator: "HEAD, BODY, LIMBS, TAIL, COAT, COLOUR, SIZE"
        },
        {
          id: "ukc-treeing-walker-coonhound-breed-standard",
          role: "verified",
          locator: "General Appearance, Head, Body, Coat, Color, Height and Weight"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Conformation, proportions, tricolor coat, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-treeing-walker-coonhound-breed-standard",
          role: "verified",
          locator: "Size: Working dogs in proportion: Males 22 to 27 inches; females 20 to 25 inches"
        },
        {
          id: "ukc-treeing-walker-coonhound-breed-standard",
          role: "verified",
          locator: "Height at withers: Males 22 to 27 inches; females 20 to 25 inches"
        },
        {
          id: "fci-treeing-walker-coonhound-official-standard",
          role: "verified",
          locator: "SIZE: Height at withers: Males: 56-69 cm (22-27 ins). Females: 51-64 cm (20-25 ins)."
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Preserved in published unit of inches (22 to 27 in for males, 20 to 25 in for females) exactly as specified in the AKC and UKC standards."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "verified",
          locator: "Weight: 50-70 pounds"
        },
        {
          id: "ukc-treeing-walker-coonhound-breed-standard",
          role: "verified",
          locator: "Weight: Weight should be in proportion to height (typically 50-70 lbs for males, 45-65 lbs for females)"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Preserved in published unit of pounds (50 to 70 lb for males, 45 to 65 lb for females) following AKC and UKC breed documentation."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12-13 years (up to 14 years)"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Supported by kennel club and coonhound association actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (2/5)"
        },
        {
          id: "fci-treeing-walker-coonhound-official-standard",
          role: "verified",
          locator: "COAT: Smooth, glossy, short, and dense"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (2/5)"
        },
        {
          id: "akc-treeing-walker-coonhound-breed-standard",
          role: "verified",
          locator: "Muzzle: Medium, rather square, with tight-fitting lips"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Tight-fitting lips result in low to moderate drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-treeing-walker-coonhound-breed-standard",
          role: "verified",
          locator: "General Impression: intelligent, alert, confident, social, friendly, passionate hunter"
        },
        {
          id: "fci-treeing-walker-coonhound-official-standard",
          role: "verified",
          locator: "BEHAVIOUR / TEMPERAMENT: Intelligent, active, courageous, pleasant hound at home"
        },
        {
          id: "ukc-treeing-walker-coonhound-breed-standard",
          role: "verified",
          locator: "Characteristics: Eager to please, intelligent, energetic hunter, calm companion"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        },
        {
          id: "ukc-treeing-walker-coonhound-breed-standard",
          role: "cited",
          locator: "Temperament and hunting characteristics"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented hound temperament and working drive."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        },
        {
          id: "ukc-treeing-walker-coonhound-breed-standard",
          role: "cited",
          locator: "Care, management, and hound training"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active hunting hound management with short-coat hound care protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "verified",
          locator: "Energy Level (4/5); Exercise Needs (4/5)"
        },
        {
          id: "fci-treeing-walker-coonhound-official-standard",
          role: "verified",
          locator: "UTILIZATION: Tracking and treeing hound with high stamina"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "cited",
          locator: "Exercise: Vigorous daily physical activity and scentwork"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 60 to 90 minutes of daily activity reflects the exercise demands of an athletic working hound."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "verified",
          locator: "Adaptability: Adapts Well to Apartment Living (1/5) - Not Recommended"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "High exercise needs and resonant baying instincts make apartment living unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "verified",
          locator: "Exercise and fenced-yard recommendations"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-treeing-walker-coonhound-official-standard",
          role: "verified",
          locator: "COAT: Smooth, dense short coat adapted to American woodland environments"
        },
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "verified",
          locator: "Weather sensitivity: single short coat requires indoor living in extreme cold"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "cited",
          locator: "Tolerates Being Alone: Moderate rating"
        }
      ],
      verifiedOn: null,
      note:
        "Scenthounds can tolerate moderate alone time when thoroughly exercised, but can become vocal if isolated without enrichment."
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food, weight management, treat budgeting"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for active sporting and hunting dogs."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "cited",
          locator: "Life-stage nutrition and portion control"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-treeing-walker-coonhound-health-screenings",
          role: "verified",
          locator: "Health screening guidelines and database statistics for hip and elbow dysplasia"
        },
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "verified",
          locator: "Health: General hardiness, hip dysplasia, and ear care"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Documents high overall constitutional vitality alongside routine orthopedic screening programs."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-treeing-walker-coonhound-health-screenings",
          role: "verified",
          locator: "Hip dysplasia and elbow dysplasia evaluations"
        },
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "verified",
          locator: "Ear infections (otitis externa) and field injury precautions"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Identifies documented breed considerations without using prohibited registry labels in prose."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "cited",
          locator: "Preventive care, bloat precautions, and ear hygiene"
        }
      ],
      verifiedOn: null,
      note: "Field hygiene protocol tailored to drop-eared hunting hounds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-treeing-walker-coonhound-health-screenings",
          role: "verified",
          locator: "Recommended evaluations: Hip Dysplasia, Elbow Dysplasia, and Eye Examination"
        },
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "verified",
          locator: "Recommended Health Tests: Hip Evaluation"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Pre-breeding evaluations recommended by the national breed authority and health registry."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-treeing-walker-coonhound-breed-standard",
          role: "cited",
          locator: "Jaws/teeth: complete scissor bite"
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-treeing-walker-coonhound-breed-standard",
          role: "cited",
          locator: "Ears: medium length, pendant, hanging gracefully"
        },
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "cited",
          locator: "Routine cleaning and weekly ear inspection"
        }
      ],
      verifiedOn: null,
      note: "Ear maintenance protocol for drop ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-treeing-walker-coonhound-official-standard",
          role: "cited",
          locator: "Skin: smooth and close-fitting"
        }
      ],
      verifiedOn: null,
      note: "General skin and coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        },
        {
          id: "ukc-treeing-walker-coonhound-breed-standard",
          role: "cited",
          locator: "Working temperament and hunting utility"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability flags and lists reflect editorial evaluations of hound exercise needs and hunting drive."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "verified",
          locator: "History: Tennessee Lead, George Washington Maupin, Thomas Walker, people's choice moniker"
        },
        {
          id: "ukc-treeing-walker-coonhound-breed-standard",
          role: "verified",
          locator: "Treeing style, voice changes (trail bugle to tree chop), and 1945 separation"
        },
        {
          id: "fci-treeing-walker-coonhound-official-standard",
          role: "verified",
          locator: "Brief historical summary: English Foxhound lineage"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Verified historical and functional facts written without prohibited names."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-treeing-walker-coonhound-breed-standard",
          role: "verified",
          locator: "Size (22-27 in / 20-25 in), coat, and colours"
        },
        {
          id: "akc-treeing-walker-coonhound-breed-profile",
          role: "verified",
          locator: "Weight (50-70 lbs), lifespan (12-14 years), temperament, and care"
        },
        {
          id: "ukc-treeing-walker-coonhound-breed-standard",
          role: "verified",
          locator: "General characteristics, hunting behavior, and treeing instincts"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "FAQ answers synthesize verified standards and parent-club guidance without naming registries in prose."
    }
  },

  updatedOn: "2026-11-08"
};
