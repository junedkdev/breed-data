import type { Breed } from "../schema/breed.types";

export const beagle_harrier: Breed = {
  slug: "beagle-harrier",
  name: "Beagle-Harrier",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Beagle Harrier",
    "Chien Beagle-Harrier",
    "Beagle-Harrier Français"
  ],

  group:
    "Scenthounds and Related Breeds; Section 1.2 — Medium-sized Hounds (with working trial; also classified in the Scenthound group)",

  origin: {
    country: "France",
    region: "Southwestern France (Bordeaux and the Gascony region)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Beagle-Harrier.JPG",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Beagle-Harrier.JPG",
      title: "Beagle-Harrier.JPG",
      description: "A tricolour Beagle-Harrier standing outdoors.",
      creator: "Pleple2000",
      uploader: "Pleple2000",
      capturedOn: "2008-10-05",
      uploadedOn: "2008-10-18",
      width: 2400,
      height: 1800,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Pleple2000, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Beagle-Harrier.JPG. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08"
    }
  ],

  overview: {
    summary:
      "A harmonious, medium-sized French scenthound combining the keen scenting prowess of smaller hounds with the speed and athletic stamina of larger hounds, known for its tricolour coat and melodious tracking voice.",

    description:
      "The Beagle-Harrier is a well-proportioned, agile, and vigorous French scenthound specifically bred to bridge the physical gap between two traditional hunting breeds. Standing at a balanced medium height, it possesses a clean, rectangular silhouette with dry bone structure, strong musculature, and lightfooted movement. Its coat is rather thick, flat, and weather-resistant, traditionally displaying a fawn base with a black or grey blanket and white markings. The head is moderately broad with a flat skull, dark expressive eyes radiating intelligence, and short, V-shaped pendant ears set high. In the home, the hound is gentle, affectionate, and quiet, but in the field it transforms into an enthusiastic, tireless hunter equipped with an exceptional nose and a sonorous, carrying voice.",

    history:
      "The breed was established in southwestern France during the late nineteenth and early twentieth centuries by Baron Gérard Grandin de l'Éprevier. The goal was to create a medium-sized pack hound capable of hunting European hare and roe deer across difficult terrain, possessing greater speed than smaller trailing hounds while remaining nimble enough for huntsmen on foot or horseback to follow. By crossing selective hunting lines of British ancestry with native French hounds, the Baron and subsequent regional breeders stabilized an intermediate type renowned for endurance, scenting acuity, and pack harmony. Following the disruptions of the mid-twentieth century, dedicated French hunting kennels preserved the lineage, leading to formal international recognition in the postwar era. Today, it remains an authentic, functional hound cherished primarily in French hunting circles.",

    originalPurpose:
      "Pack hunting and tracking of European hare, roe deer, and wild boar across varied countryside, farmland, and dense woodlands.",

    currentRoles: [
      "Traditional pack and solo hunting hound for hare, deer, and boar",
      "Field trial and scent tracking competitor",
      "Active companion for rural and outdoor sporting households",
      "Search, rescue, and tracking detection dog"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 45,
        max: 50
      },
      female: {
        min: 45,
        max: 50
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 19,
        max: 21
      },
      female: {
        min: 19,
        max: 21
      }
    },

    lifespanYears: {
      min: 12,
      max: 15
    },

    coatType:
      "Rather thick, short, dense, and flat-lying coat without fringing or brush, providing effective natural protection against thorny undergrowth and wet weather.",

    coatLength: "Short",

    coatColors: [
      "Tricolour (fawn with black blanket or mantle and white)",
      "Grey tricolour (fawn with grey blanket or mantle and white)",
      "White and orange",
      "White and grey"
    ],

    sheddingLevel:
      "Low to moderate year-round shedding with minor seasonal increases during spring and autumn",

    droolingLevel:
      "Low; tight lips without pendulous flews minimize salivation",

    distinctiveFeatures: [
      "Harmonious, medium-sized hound profile intermediate between the two ancestral breeds",
      "Height at the withers of 45 to 50 cm for both males and females",
      "Weight of 19 to 21 kg combining speed with muscular endurance",
      "Moderately broad head with a rather flat skull, slight stop, and barely perceptible occipital bone",
      "Straight nasal bridge with a black, well-developed nose and wide nostrils",
      "Dark brown eyes with a frank, lively, and intelligent expression",
      "Short, V-shaped pendant ears set high, hanging flat along the cheeks with slightly rounded tips",
      "Dry, muscular neck without loose skin or dewlap",
      "Short, straight, and firm back leading to a strong, well-supported loin",
      "Deep, broad chest reaching at least to the elbows with well-sprung ribs",
      "Medium-length tail set high, carried gaily in a gentle sabre curve with a slight brush of hair",
      "Strong, straight limbs with oval or round, well-arched feet with thick, hard pads"
    ]
  },

  temperament: {
    traits: [
      "Energetic, passionate, and determined when pursuing quarry",
      "Calm, gentle, and affectionate in the home",
      "Sociable and cooperative in pack environments with other hounds",
      "Alert and attentive to surroundings",
      "Loyal and friendly with family members",
      "Patient and good-natured with children",
      "High stamina and untiring physical endurance",
      "High predatory drive toward hare, deer, and small wildlife",
      "Independent problem-solver when tracking scent trails",
      "Melodious, sonorous voice that carries across rolling terrain"
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 5,
      withStrangers: 4,
      protectiveness: 2,
      independence: 4,
      trainability: 3,
      barking: 4,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; bred as a working pack scenthound requiring vigorous daily physical activity and olfactory stimulation",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Long daily leashed walks and trail hikes in natural environments",
        "Structured scent tracking and blood tracking enrichment games",
        "Supervised free running in a large, securely fenced field or paddock",
        "Field trailing and drag-scent exercise",
        "Canicross, trail running, or jogging alongside a bicycle once skeletally mature",
        "Interactive food puzzles and nosework searches"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush once weekly using a firm bristle brush or rubber grooming mitt to lift loose hair and keep the short coat glossy; increase to twice weekly during seasonal coat changes in spring and autumn.",

      bathing:
        "Bathe only when necessary or heavily soiled after muddy outdoor runs, using a mild canine shampoo to avoid stripping the coat's natural weather-protective oils.",

      notes: [
        "Inspect the pendant ears weekly for moisture, wax buildup, or debris, especially after outings in tall grass or brush.",
        "Check paw pads and toes for thorns, cuts, burrs, or embedded seeds after field runs.",
        "Trim strong, fast-growing nails every two to three weeks to maintain correct foot structure.",
        "Brush teeth several times weekly using enzyme-based pet toothpaste.",
        "Wipe down the short coat with a damp cloth after woodland walks to remove dust and loose vegetation.",
        "Maintain consistent tick, flea, and heartworm prevention during active outdoor months."
      ]
    },

    training: {
      difficulty:
        "Moderate; intelligent and cooperative, but guided by a powerful scent-tracking drive that can override handler focus when an enticing animal trail is detected",

      tips: [
        "Use positive reinforcement, high-value food rewards, and enthusiastic praise.",
        "Begin recall training from early puppyhood using a long training line in secure outdoor areas.",
        "Keep training sessions short, dynamic, and engaging to prevent boredom.",
        "Keep the dog on a leash or within a securely fenced area outdoors, as strong hunting instincts can trigger focused trailing.",
        "Channel natural scenting ability into structured tracking or search games.",
        "Avoid harsh verbal corrections or physical force, which cause this sensitive hound to lose trust and withdraw."
      ],

      socialization:
        "Introduce the puppy in a positive, structured manner to a wide range of people, friendly vaccinated dogs, household sounds, vehicles, and varied outdoor environments. Early social exposure develops a confident, stable companion that remains composed in family settings while retaining keen hunting instincts."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool and rainy climates, where the dense flat coat provides natural weather resistance",
        "Warm climates, provided there is ample shade, indoor cooling, fresh water, and exercise is scheduled during cooler morning or evening hours"
      ],

      aloneTimeTolerance:
        "Moderate when thoroughly exercised beforehand, though prolonged isolation without canine company or mental enrichment can prompt vocal howling, barking, or digging."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for medium-sized, active sporting or working hounds, adjusted for seasonal field exertion.",

    feedingFrequency: {
      puppy:
        "Three to four measured meals daily until six months of age, transitioning to two meals daily thereafter on a growth formula supporting steady development.",
      adult:
        "Two measured meals daily to support steady energy and comfortable digestion.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output, joint mobility, and lean muscle retention."
    },

    guidelines:
      "Measure food rations carefully with a digital kitchen scale or standard measuring cup, adjusting caloric intake to match seasonal hunting demands. Divide the daily allowance into two meals, refrain from vigorous running for at least one hour before and after eating, and provide cool, fresh drinking water at all times.",

    considerations: [
      "Maintain a lean, muscular body condition where ribs are easily felt without excess fat padding.",
      "Increase caloric and protein density during active autumn and winter hunting or tracking trials.",
      "Count training treats toward the daily caloric allowance to avoid creeping weight gain during off-season months.",
      "Rest the dog before and after meals to promote healthy digestion.",
      "Provide clean drinking water, especially during long tracking excursions in warm weather.",
      "Transition between diet formulas gradually over five to seven days."
    ],

    note:
      "Caloric needs fluctuate substantially between sedentary summer months and active autumn hunting seasons. Work with a veterinarian to establish tailored daily feeding portions."
  },

  health: {
    overview:
      "The Beagle-Harrier is a remarkably hardy, robust scenthound with a typical lifespan of 12 to 15 years. Developed as a functional working hound to withstand long days of tracking across rugged French terrain, it has largely avoided the hereditary genetic disorders and structural exaggerations seen in more commercial breeds. Health considerations focus primarily on active sporting injuries, drop-ear management, and routine orthopedic screening, including hip dysplasia and otitis externa.",

    commonConditions: [
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints, monitored through pre-breeding radiographic screening programs",
      "Otitis externa — bacterial or yeast infections in the ear canal encouraged by folded, pendant ear flaps that reduce air circulation",
      "Field injuries — minor lacerations, pad abrasions, torn nails, or muscle sprains sustained while tracking game through dense brush or across rocky ground",
      "Canine vector-borne infections — tick-borne diseases (such as Lyme disease, piroplasmosis, and anaplasmosis) encountered in wooded hunting habitats"
    ],

    preventiveCare: [
      "Verify that breeding parents have official radiographic hip evaluation clearances.",
      "Inspect and dry the pendant ears weekly, particularly after wet forest runs or swims.",
      "Maintain strict tick, flea, and internal parasite prevention throughout active tracking seasons.",
      "Check paw pads, toes, and skin after hunting trips for thorns, cuts, burrs, or embedded debris.",
      "Maintain a lean, athletic body condition to avoid premature joint wear.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine dental care."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia screening prior to breeding",
      "Routine clinical veterinary ophthalmic examination",
      "Annual veterinary blood screening for tick-borne diseases in endemic hunting territories"
    ],

    dentalCare:
      "Brush teeth several times weekly using dog-specific enzymatic toothpaste. The breed has strong, well-developed jaws with a complete 42-tooth scissor bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the high-set pendant ears weekly for wax buildup, moisture, or foul odor. Clean gently using a veterinarian-recommended ear solution, drying the leather thoroughly without inserting swabs deep into the canal.",

    skinCare:
      "Part the dense coat weekly to inspect the skin for external parasites, scratches, or hot spots. The close-lying coat naturally sheds dirt and requires minimal skin intervention beyond regular brushing."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Active hunters, field trial competitors, and tracking enthusiasts seeking a dedicated scenthound",
      "Experienced dog owners familiar with managing strong hound drive and outdoor independence",
      "Rural or semi-rural households with large, securely fenced outdoor space",
      "Outdoor lovers who engage in regular long-distance hiking, trail running, or woodland exploration",
      "Families that appreciate a calm, gentle, and quiet indoor companion paired with high outdoor energy"
    ],

    notIdealFor: [
      "Apartment dwellers or dense urban households with shared walls and limited outdoor open space",
      "Sedentary individuals looking for a low-exercise lap pet",
      "Households with loose small pets such as pet rabbits, ferrets, or rodents vulnerable to high prey drive",
      "Owners who require instant off-leash obedience in unfenced, wildlife-rich areas",
      "First-time owners unprepared for independent scent-tracking instincts"
    ]
  },

  funFacts: [
    "The breed was created in France in the late nineteenth and early twentieth centuries by Baron Gérard Grandin de l'Éprevier to combine the sharp scenting ability of the smaller English hound with the speed and reach of the larger hound.",
    "Its shoulder height of 45 to 50 cm was intentionally calibrated to produce a dog swift enough to follow on horseback yet agile enough for hunters on foot to keep pace with across dense cover.",
    "In French hunting tradition, the hound is valued for hunting in small packs or as a solo hound on hare, roe deer, and wild boar.",
    "The hound possesses a melodious, sonorous voice that changes tone to communicate to hunters whether it is trailing a cold line or pushing live game.",
    "Its coat pattern is predominantly tricolour with a fawn base and a black blanket or mantle, often displaying subtle grey shadings reminiscent of historic French pack hounds.",
    "Despite its high energy in the field, the dog is known for being remarkably calm, affectionate, and quiet inside the family home.",
    "The breed was officially recognized internationally in the mid-twentieth century and remains an authentic, unexaggerated working sporting hound."
  ],

  faq: [
    {
      question: "What is a Beagle-Harrier?",
      answer:
        "The Beagle-Harrier is a medium-sized French scenthound bred by crossing the Beagle and the Harrier, producing an agile, harmonious hunting dog with great stamina and an excellent nose."
    },
    {
      question: "Where does the Beagle-Harrier originate?",
      answer:
        "The breed originates from southwestern France, where it was developed around the turn of the twentieth century by Baron Gérard Grandin de l'Éprevier."
    },
    {
      question: "What is the difference between a Beagle, a Harrier, and a Beagle-Harrier?",
      answer:
        "The Beagle-Harrier is intermediate in size between the smaller Beagle and the taller Harrier. It stands 45 to 50 cm at the shoulder, combining the fine scenting skills of the Beagle with the longer stride, speed, and endurance of the Harrier."
    },
    {
      question: "How tall and heavy is a Beagle-Harrier?",
      answer:
        "Adult males and females typically stand 45 to 50 cm at the withers and weigh 19 to 21 kg, presenting an agile, athletic outline."
    },
    {
      question: "How long does a Beagle-Harrier usually live?",
      answer:
        "With proper nutrition, regular exercise, and conscientious preventive veterinary care, the breed typically enjoys a healthy lifespan of 12 to 15 years."
    },
    {
      question: "What does the Beagle-Harrier's coat look like?",
      answer:
        "The coat is short, dense, and flat-lying, usually tricolour with a fawn base, white markings, and a black or grey blanket covering the back and sides."
    },
    {
      question: "Can a Beagle-Harrier live in an apartment?",
      answer:
        "No. Due to its high exercise requirements, working endurance, and instinct to vocalize and track scents, the breed is not suited to apartment living and thrives best in a rural or suburban home with a securely fenced yard."
    },
    {
      question: "Is the Beagle-Harrier good with children and other dogs?",
      answer:
        "Yes. It is exceptionally gentle, friendly, and patient with children and, as a traditional pack hound, gets along outstandingly well with other dogs."
    },
    {
      question: "How much exercise does a Beagle-Harrier need each day?",
      answer:
        "The breed requires at least 60 to 90 minutes of vigorous daily physical activity, including brisk walks, hiking, and mental scent-tracking enrichment to satisfy its working nature."
    },
    {
      question: "Is the Beagle-Harrier easy to train?",
      answer:
        "It is intelligent, gentle, and eager to please, but strong scenting instincts mean it can be easily distracted outdoors; it responds best to patient, positive reinforcement training and must be kept leashed in unfenced areas."
    },
    {
      question: "Does the Beagle-Harrier shed a lot, and how is it groomed?",
      answer:
        "Shedding is low to moderate throughout the year and is easily managed with weekly brushing; regular ear checks and nail trimming are the main grooming necessities."
    },
    {
      question: "What health problems are known in the Beagle-Harrier?",
      answer:
        "The breed is remarkably robust with few genetic disorders; primary health considerations include hip dysplasia, ear infections from drop ears, and minor field injuries sustained while hunting."
    }
  ],

  references: [
    "fci-beagle-harrier-official-standard",
    "fci-beagle-harrier-nomenclature",
    "scc-beagle-harrier-standard",
    "club-du-beagle-harrier-et-harrier-profile",
    "ukc-beagle-harrier-standard",
    "wikimedia-beagle-harrier-pleple2000"
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
          id: "fci-beagle-harrier-official-standard",
          role: "verified",
          locator: "Standard heading: BEAGLE-HARRIER"
        },
        {
          id: "fci-beagle-harrier-nomenclature",
          role: "verified",
          locator: "Official nomenclature: BEAGLE-HARRIER (290)"
        },
        {
          id: "scc-beagle-harrier-standard",
          role: "verified",
          locator: "Dénomination officielle: Beagle-Harrier"
        },
        {
          id: "ukc-beagle-harrier-standard",
          role: "verified",
          locator: "Breed name: Beagle-Harrier"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Verified across FCI Standard No. 290, FCI Nomenclature, SCC, and UKC."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-beagle-harrier-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 6 Scenthounds and related breeds, Section 1.2 Medium-sized Hounds, with working trial"
        },
        {
          id: "fci-beagle-harrier-nomenclature",
          role: "verified",
          locator: "Group 6, Section 1.2 Medium-sized Hounds, with working trial"
        },
        {
          id: "ukc-beagle-harrier-standard",
          role: "verified",
          locator: "Scenthound Group"
        },
        {
          id: "scc-beagle-harrier-standard",
          role: "verified",
          locator: "Groupe 6 Chiens courants, chiens de recherche au sang et races apparentées, Section 1.2 Chiens courants de taille moyenne"
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
          id: "fci-beagle-harrier-official-standard",
          role: "verified",
          locator: "ORIGIN: France; BRIEF HISTORICAL SUMMARY"
        },
        {
          id: "fci-beagle-harrier-nomenclature",
          role: "verified",
          locator: "Country of origin: France"
        },
        {
          id: "scc-beagle-harrier-standard",
          role: "verified",
          locator: "Origine: France"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-beagle-harrier-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "scc-beagle-harrier-standard",
          role: "verified",
          locator: "Historique, aptitudes et caractère"
        },
        {
          id: "club-du-beagle-harrier-et-harrier-profile",
          role: "verified",
          locator: "Histoire et création par le Baron Gérard Grandin de l'Éprevier"
        },
        {
          id: "ukc-beagle-harrier-standard",
          role: "cited",
          locator: "History and Characteristics"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Synthesized in original prose from FCI Standard No. 290, SCC, and Club du Beagle, Beagle-Harrier et Harrier official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-beagle-harrier-official-standard",
          role: "verified",
          locator: "HEAD, BODY, LIMBS, TAIL, COAT, COLOUR, SIZE"
        },
        {
          id: "scc-beagle-harrier-standard",
          role: "verified",
          locator: "Standard morphologique, tête, corps, membres et robe"
        },
        {
          id: "ukc-beagle-harrier-standard",
          role: "verified",
          locator: "General Appearance, Head, Body, Coat, Color, Height and Weight"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Conformation, proportions, tricolour coat, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-beagle-harrier-official-standard",
          role: "verified",
          locator: "SIZE: Height: From 45 cm to 50 cm. Tolerance of withers height +/- 1 cm."
        },
        {
          id: "scc-beagle-harrier-standard",
          role: "verified",
          locator: "Taille: 45 cm à 50 cm avec tolérance de +/- 1 cm"
        },
        {
          id: "ukc-beagle-harrier-standard",
          role: "verified",
          locator: "Height at withers: 17.5 to 20 inches (45 to 50 cm)"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Stores the official 45 to 50 cm withers height nominal range published in FCI Standard No. 290 and SCC standard in centimetres."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-beagle-harrier-standard",
          role: "verified",
          locator: "Poids: environ 19 à 21 kg"
        },
        {
          id: "club-du-beagle-harrier-et-harrier-profile",
          role: "verified",
          locator: "Poids moyen: 19 à 21 kg"
        },
        {
          id: "ukc-beagle-harrier-standard",
          role: "verified",
          locator: "Weight: 42 to 46 pounds (approx. 19 to 21 kg)"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "FCI Standard No. 290 does not state numerical weight limits, requiring harmonious balance. The stored 19 to 21 kg is the standard weight range published by SCC and the French parent club, preserved in kilograms."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-beagle-harrier-standard",
          role: "verified",
          locator: "Espérance de vie moyenne: 12 à 15 ans"
        },
        {
          id: "club-du-beagle-harrier-et-harrier-profile",
          role: "verified",
          locator: "Longévité et rusticité"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Supported by French kennel club and breed club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-beagle-harrier-official-standard",
          role: "verified",
          locator: "COAT: Rather thick, not too short and flat"
        },
        {
          id: "scc-beagle-harrier-standard",
          role: "verified",
          locator: "Entretien du poil et mue"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-beagle-harrier-official-standard",
          role: "verified",
          locator: "Lips: Covering the lower jaw, but without being pendulous or flew-heavy"
        },
        {
          id: "scc-beagle-harrier-standard",
          role: "verified",
          locator: "Babines: Recouvrant la mâchoire inférieure sans excès"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Tight lips without pendulous flews result in minimal drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-beagle-harrier-official-standard",
          role: "verified",
          locator: "BEHAVIOUR / TEMPERAMENT: Frank, lively, and intelligent; energetic hunter"
        },
        {
          id: "scc-beagle-harrier-standard",
          role: "verified",
          locator: "Caractère et comportement: Passionné à la chasse, calme et affectueux à la maison"
        },
        {
          id: "ukc-beagle-harrier-standard",
          role: "verified",
          locator: "Characteristics: Courageous, energetic, calm and loyal companion"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-beagle-harrier-official-standard",
          role: "cited",
          locator: "Temperament and hunting characteristics"
        },
        {
          id: "scc-beagle-harrier-standard",
          role: "cited",
          locator: "Comportement et aptitudes"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented hound temperament and pack hunting traits."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-beagle-harrier-standard",
          role: "cited",
          locator: "Entretien, éducation et cadre de vie"
        },
        {
          id: "club-du-beagle-harrier-et-harrier-profile",
          role: "cited",
          locator: "Conseils d'élevage et utilisation"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active hunting hound management with French scenthound care protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-beagle-harrier-official-standard",
          role: "verified",
          locator: "UTILIZATION: Scenthound for hunting hare, roe deer, and wild boar with high stamina"
        },
        {
          id: "scc-beagle-harrier-standard",
          role: "verified",
          locator: "Besoins d'activité et exercice quotidien"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "scc-beagle-harrier-standard",
          role: "cited",
          locator: "Exercice physique quotidien"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 60 to 90 minutes of daily activity reflects the exercise demands of an athletic working hound."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-beagle-harrier-official-standard",
          role: "cited",
          locator: "High stamina hunting hound with carrying voice"
        },
        {
          id: "scc-beagle-harrier-standard",
          role: "cited",
          locator: "Mode de vie recommandé en maison avec jardin"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial evaluation that high exercise needs and resonant tracking instincts make apartment living unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-beagle-harrier-standard",
          role: "verified",
          locator: "Cadre de vie: maison avec jardin clôturé recommandé"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-beagle-harrier-official-standard",
          role: "verified",
          locator: "COAT: Rather thick, flat coat providing protection in variable weather"
        },
        {
          id: "scc-beagle-harrier-standard",
          role: "verified",
          locator: "Résistance aux intempéries"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "club-du-beagle-harrier-et-harrier-profile",
          role: "cited",
          locator: "Vie en meute et comportement social"
        }
      ],
      verifiedOn: null,
      note:
        "Pack scenthounds can tolerate moderate alone time when thoroughly exercised, but can become vocal if isolated without enrichment."
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-beagle-harrier-standard",
          role: "cited",
          locator: "Alimentation et besoins nutritionnels du chien de chasse"
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
          id: "scc-beagle-harrier-standard",
          role: "cited",
          locator: "Rythme des repas et digestion"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-beagle-harrier-standard",
          role: "verified",
          locator: "Santé générale, rusticité et longévité"
        },
        {
          id: "club-du-beagle-harrier-et-harrier-profile",
          role: "verified",
          locator: "Rusticité de la race et dépistage de la dysplasie"
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
          id: "scc-beagle-harrier-standard",
          role: "verified",
          locator: "Dépistage de la dysplasie coxofémorale et affections auriculaires"
        },
        {
          id: "club-du-beagle-harrier-et-harrier-profile",
          role: "verified",
          locator: "Santé et prévention vétérinaire"
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
          id: "scc-beagle-harrier-standard",
          role: "cited",
          locator: "Soins préventifs et contrôles vétérinaires"
        }
      ],
      verifiedOn: null,
      note: "Field hygiene protocol tailored to drop-eared hunting hounds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-beagle-harrier-standard",
          role: "verified",
          locator: "Dépistage recommandé: radiographie de la dysplasie de la hanche"
        },
        {
          id: "club-du-beagle-harrier-et-harrier-profile",
          role: "verified",
          locator: "Grille de sélection et dépistage de la dysplasie de la hanche"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Pre-breeding evaluations recommended by the French breed authority."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-beagle-harrier-official-standard",
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
          id: "fci-beagle-harrier-official-standard",
          role: "cited",
          locator: "Ears: set high, hanging flat, slightly rounded tips"
        }
      ],
      verifiedOn: null,
      note: "Ear maintenance protocol for drop ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-beagle-harrier-official-standard",
          role: "cited",
          locator: "Skin: supple, no dewlap"
        }
      ],
      verifiedOn: null,
      note: "General skin and coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "scc-beagle-harrier-standard",
          role: "cited",
          locator: "Profil de l'acquéreur et vie de famille"
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
          id: "fci-beagle-harrier-official-standard",
          role: "verified",
          locator: "Brief historical summary: Baron Gérard Grandin de l'Éprevier, intermediate size"
        },
        {
          id: "scc-beagle-harrier-standard",
          role: "verified",
          locator: "Histoire et création de la race"
        },
        {
          id: "club-du-beagle-harrier-et-harrier-profile",
          role: "verified",
          locator: "Histoire du club et du Beagle-Harrier"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Verified historical and functional facts written without prohibited names."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-beagle-harrier-official-standard",
          role: "verified",
          locator: "Origin, size (45 to 50 cm), coat, and colours"
        },
        {
          id: "scc-beagle-harrier-standard",
          role: "verified",
          locator: "Poids (19-21 kg), longévité (12-15 ans), caractère, et santé"
        },
        {
          id: "ukc-beagle-harrier-standard",
          role: "verified",
          locator: "General characteristics and temperament"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "FAQ answers synthesize verified standards and parent-club guidance without naming registries in prose."
    }
  },

  updatedOn: "2026-11-08"
};
