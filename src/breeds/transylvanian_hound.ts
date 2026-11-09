import type { Breed } from "../schema/breed.types";

export const transylvanian_hound: Breed = {
  slug: "transylvanian-hound",
  name: "Transylvanian Hound",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Erdélyi Kopó",
    "Hungarian Hound",
    "Transylvanian Scent Hound",
    "Chien Courant Transylvanien",
    "Transylvanischer Laufhund",
    "Sabueso de Transilvania",
    "Siebenbürgen Bracke"
  ],

  group:
    "Scenthounds and Related Breeds; Section 1.2 — Medium-sized Hounds (with working trial; also classified in the Scenthound and Hound groups)",

  origin: {
    country: "Hungary",
    region:
      "Carpathian Basin and the historical Transylvanian mountain plateaus"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Erd%C3%A9lyi_kop%C3%B3.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Erd%C3%A9lyi_kop%C3%B3.jpg",
      title: "Erdélyi kopó.jpg",
      description: "An adult Erdélyi kopó standing in profile outdoors.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2013-05-18",
      uploadedOn: "2013-05-18",
      width: 1478,
      height: 1157,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Erd%C3%A9lyi_kop%C3%B3.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Erd%C3%A9lyi_kop%C3%B3_-_1.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Erd%C3%A9lyi_kop%C3%B3_-_1.jpg",
      title: "Erdélyi kopó - 1.jpg",
      description: "An Erdélyi kopó outdoors in Ópusztaszer, Hungary.",
      creator: "DenesFeri",
      uploader: "DenesFeri",
      capturedOn: "2019-09-11",
      uploadedOn: "2019-09-23",
      width: 1728,
      height: 2304,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by DenesFeri, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Erd%C3%A9lyi_kop%C3%B3_-_1.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08"
    }
  ],

  overview: {
    summary:
      "An ancient, athletic Hungarian hunting hound shaped by the rugged Carpathian wilderness, renowned for its glossy black-and-tan coat with distinct eyebrow points, untiring stamina, calm domestic loyalty, and carrying bell-like bay on the trail.",

    description:
      "The Transylvanian Hound is an elegant, medium-to-large scent hound developed over centuries to drive and hold quarry across heavily forested and mountainous terrain. Built with an athletic rectangular silhouette, substantial bone, and lean musculature, the hound demonstrates effortless agility and endurance rather than cumbersome mass. Its double coat is short, dense, coarse, and weather-resistant, displaying a jet-black ground accented by clearly delineated tan markings on the muzzle and limbs, characteristic tan spots over the eyes, and occasional white markings on the chest and feet. The head is elongated and noble with a straight bridge, dark expressive eyes radiating calm intelligence, and medium-set pendant ears hanging close to the cheeks. In the home, it is a clean, tranquil, and deeply loyal companion, but in the field it transforms into an impassioned, courageous tracker capable of following trails across difficult wilderness for hours.",

    history:
      "The roots of the breed trace to the ancient scenthounds that accompanied the Magyar tribes into the Carpathian Basin in the ninth century, which intermingled with indigenous Celtic hounds. Throughout the Middle Ages and Renaissance, the breed was the favored hunting companion of Hungarian royalty and Transylvanian princes, prized for pursuing big game such as wild boar, red deer, European bison, and brown bear across steep, rocky heights. Regional terrain historically fostered two physical strains: a tall, long-legged hound adapted for open woodlands and big game, and a short-legged hound used for hunting hare and fox in dense thickets. Changing forestry laws and political upheavals in the twentieth century caused numbers to decline precipitously, bringing the breed to the brink of extinction. In 1968, dedicated conservationists recovered purebred survivors from isolated mountain valleys, reviving the lineage. Today, the tall variety is preserved as a treasured native breed celebrated for its authentic working qualities.",

    originalPurpose:
      "Tracking, driving, and baying big game including wild boar, red deer, bear, and lynx across dense mountain woodlands, working either solo or in small matched pairs.",

    currentRoles: [
      "Traditional tracking and driving hunting hound for big game",
      "Field trial and blood-tracking competitor",
      "Active companion for rural sporting households",
      "Search, rescue, and tracking detection dog"
    ]
  },

  physical: {
    sizeCategory: "Medium to large",

    height: {
      unit: "cm",
      male: {
        min: 55,
        max: 65
      },
      female: {
        min: 55,
        max: 65
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 25,
        max: 35
      },
      female: {
        min: 25,
        max: 35
      }
    },

    lifespanYears: {
      min: 10,
      max: 14
    },

    coatType:
      "Short, dense, straight, and rather harsh coarse outer coat with a softer, fine undercoat; lying close to the body, with cowlicks and ridges on the neck and back of thighs.",

    coatLength: "Short",

    coatColors: [
      "Black and tan (black ground with clearly defined rich tan markings on the muzzle, legs, and distinct tan spots above the eyes)",
      "Black and tan with white markings (white star or blaze on the chest, white on the throat, white on the paws, and white tail tip)"
    ],

    sheddingLevel:
      "Moderate year-round shedding, with increased shedding during seasonal coat changes in spring and autumn",

    droolingLevel:
      "Low; the lips are tight and clean-fitting with dark pigmentation",

    distinctiveFeatures: [
      "Athletic, medium-to-large hound outline with a balanced rectangular silhouette",
      "Height at the withers of 55 to 65 cm with an ideal height of 58 to 62 cm",
      "Weight of 25 to 35 kg with a minimum requirement of 25 kg",
      "Long, noble head with a slightly domed skull and moderate stop",
      "Straight nasal bridge and well-developed black nose with wide nostrils",
      "Almond-shaped, slightly oblique dark brown eyes with tight, black lids",
      "Medium-set, wide hanging drop ears with rounded tips, reaching to the mouth when drawn forward",
      "Clean, muscular neck without throatiness or loose dewlap",
      "Deep, broad, and long chest with a slightly tucked-up belly",
      "Low-set tail reaching a few centimeters below the hock, carried in a gentle sabre curve when moving",
      "Dense, short, coarse black double coat with tan spots over the eyes (eyebrow points), tan markings on muzzle and limbs, and discrete white markings",
      "Ground-covering, rhythmic, and tireless trot with long stride and great endurance"
    ]
  },

  temperament: {
    traits: [
      "Courageous, bold, and determined when working quarry",
      "Calm, gentle, and quiet in the home",
      "Deeply loyal and affectionate with family members",
      "Alert, watchful, and protective of territory",
      "Polite yet reserved and discerning with unfamiliar people",
      "Good-natured and patient with familiar children",
      "Cooperative and non-aggressive with other pack hounds",
      "High stamina, tenacity, and independent problem-solving ability",
      "High prey drive toward wild game, deer, and boar",
      "High-pitched, ringing, and musical hunting cry that carries over mountain distances"
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 2,
      protectiveness: 4,
      independence: 4,
      trainability: 4,
      barking: 4,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; an active, endurance hunting hound requiring extensive daily physical exercise and olfactory exploration",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Long daily trail hikes or brisk walks on varied terrain",
        "Supervised free running in a large, securely fenced field or acreage",
        "Structured scent tracking and blood tracking games",
        "Hunting field trials and simulated trail work",
        "Canicross, trail jogging, or running alongside a bicycle once fully mature",
        "Interactive food puzzles and nosework searches"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush once or twice weekly with a rubber hound mitt or firm bristle brush to remove dead hair and keep the short coat glossy; increase during seasonal spring shedding.",

      bathing:
        "Bathe only when heavily soiled or muddy after forest hunts, using a mild canine shampoo to preserve the coat's natural weather-resistant oils.",

      notes: [
        "Inspect the drop ears weekly for moisture, wax accumulation, or debris, especially after field hunts.",
        "Check paw pads and toes for thorns, cuts, burrs, or embedded seeds after running through rocky mountain cover.",
        "Trim strong, fast-growing nails every two to three weeks to maintain correct foot alignment.",
        "Brush teeth several times weekly using dog-specific enzymatic toothpaste.",
        "Wipe down the short coat with a damp cloth after woodland walks to remove dust and loose vegetation.",
        "Maintain consistent tick, flea, and heartworm prevention during active outdoor seasons."
      ]
    },

    training: {
      difficulty:
        "Moderate; intelligent, loyal, and eager to please, but possesses strong tracking instincts and independent scent focus that require patient, reward-based training and consistent containment",

      tips: [
        "Use positive reinforcement, high-value treats, and enthusiastic praise.",
        "Establish reliable recall from early puppyhood on a long line, recognizing that strong scent drive can override commands in the wild.",
        "Keep training sessions short, dynamic, and engaging to prevent boredom.",
        "Always walk on a leash or exercise in a securely fenced enclosure, as an enticing scent trail will trigger immediate pursuit.",
        "Channel natural trailing drive into structured scentwork, tracking, or hunting sports.",
        "Avoid harsh verbal reprimands or physical force, which cause this sensitive hound to lose trust and withdraw."
      ],

      socialization:
        "Introduce the puppy in a positive, structured manner to a wide range of people, friendly vaccinated dogs, household sounds, vehicles, and varied outdoor environments. Early social exposure develops a confident, stable companion that remains composed in family settings while retaining keen hunting instincts."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cold and snowy mountain climates, where the dense double coat provides excellent insulation",
        "Temperate climates",
        "Warm climates, provided there is ample shade, indoor cooling, fresh water, and exercise is scheduled during cooler morning or evening hours"
      ],

      aloneTimeTolerance:
        "Moderate when provided with plenty of daily exercise and mental enrichment, though prolonged isolation without companionship can lead to vocal baying or digging."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for medium-to-large active sporting or working hounds, adjusted for seasonal field exertion.",

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
      "The Transylvanian Hound is an exceptionally robust, hardy hunting dog with a typical life expectancy of 10 to 14 years. Shaped by centuries of natural selection in the demanding Carpathian mountain environment, it has largely escaped the genetic vulnerabilities associated with excessive commercial breeding. Health management focuses on routine orthopedic screening for hip and elbow dysplasia, managing drop ears to prevent otitis externa, avoiding bloat in deep-chested active dogs, and treating field-related injuries.",

    commonConditions: [
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints, monitored through pre-breeding radiographic screening programs",
      "Elbow dysplasia — developmental abnormalities of the elbow joints that can cause forelimb lameness and secondary arthritis",
      "Gastric dilatation-volvulus (GDV / bloat) — an acute, life-threatening emergency in deep-chested dogs where the stomach distends with gas and twists on its axis",
      "Otitis externa — bacterial or yeast infections in the ear canal encouraged by folded, pendant ear flaps that reduce air circulation",
      "Field injuries — minor lacerations, pad abrasions, torn nails, or muscle sprains sustained while tracking game through dense brush or across rocky ground",
      "Canine vector-borne infections — tick-borne diseases (such as babesiosis, Lyme disease, and anaplasmosis) encountered in wooded hunting habitats"
    ],

    preventiveCare: [
      "Verify that breeding parents have official radiographic hip and elbow evaluation clearances.",
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
      "Inspect the medium-set pendant ears weekly for wax buildup, moisture, or foul odor. Clean gently using a veterinarian-recommended ear solution, drying the leather thoroughly without inserting swabs deep into the canal.",

    skinCare:
      "Part the dense short coat weekly to inspect the skin for external parasites, scratches, or hot spots. The close-lying coat naturally sheds dirt and requires minimal skin intervention beyond regular brushing.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Active hunters, field trial competitors, and tracking enthusiasts seeking a dedicated, courageous scent hound",
      "Experienced dog owners familiar with managing strong hound drive, vocal baying, and outdoor independence",
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
    "The breed is one of Hungary's nine indigenous national dog breeds, historically developed in the forested mountains of the Carpathian Basin.",
    "Historically, two distinct varieties of the Erdélyi kopó existed: a long-legged hound used for hunting big game (bear, boar, stag, and lynx) in mountain forests, and a short-legged hound used for hunting small game (hare and fox) in plains and overgrown underbrush.",
    "The breed nearly vanished during the mid-twentieth century when hunting preserves were disrupted and local populations dropped precipitously, but dedicated cynologists located purebred survivors in Transylvania in 1968 and revived the lineage.",
    "In the Middle Ages and Renaissance, the Erdélyi kopó was the prized hunting hound of the Hungarian royal court and Transylvanian princes, celebrated in medieval chronicles and tapestries.",
    "The hound's distinctive hunting voice is high-pitched, resonant, and ringing, echoing off mountain rock faces so handlers can follow its progress several kilometers away.",
    "The tan spots above the eyes are a traditional hound trait colloquially referred to as 'four-eyes', historically believed by mountain huntsmen to provide protective vigilance against forest spirits and predators.",
    "Today, the long-legged variety is officially standardized and flourishing, celebrated as an authentic, versatile hunting partner and cultural treasure."
  ],

  faq: [
    {
      question: "What is a Transylvanian Hound?",
      answer:
        "The Transylvanian Hound is an ancient medium-to-large Hungarian scenthound bred for trailing big game in mountain forests, known for its sleek black-and-tan coat, athletic build, and resonant voice."
    },
    {
      question: "Where does the Transylvanian Hound originate?",
      answer:
        "The breed originates from the Carpathian Basin and historical Transylvania, where it was developed by Hungarian nobility and mountain huntsmen over many centuries."
    },
    {
      question: "What was the Transylvanian Hound bred to do?",
      answer:
        "It was bred to track, drive, and hold big game such as wild boar, red deer, bear, and lynx across steep, rocky woodlands, communicating with hunters using a musical ringing bark."
    },
    {
      question: "What is the difference between the long-legged and short-legged varieties?",
      answer:
        "Historically, the long-legged variety was used for big game hunting in mountain forests, while the short-legged variety was used for small game like hare and fox in dense underbrush; today, the long-legged hound is the primary officially standardized variety."
    },
    {
      question: "How tall and heavy is a Transylvanian Hound?",
      answer:
        "Adult males and females stand 55 to 65 cm at the withers (with an ideal height between 58 and 62 cm) and weigh 25 to 35 kg, with a minimum required weight of 25 kg."
    },
    {
      question: "How long does a Transylvanian Hound usually live?",
      answer:
        "With proper nutrition, regular exercise, and conscientious preventive veterinary care, the breed typically enjoys a healthy lifespan of 10 to 14 years."
    },
    {
      question: "What does the Transylvanian Hound's coat look like?",
      answer:
        "The coat is short, dense, and coarse with an undercoat, featuring a glossy black base with rich tan markings on the muzzle and legs, distinctive tan spots over the eyes, and small white markings on the chest or feet."
    },
    {
      question: "Can a Transylvanian Hound live in an apartment?",
      answer:
        "No. Due to its high exercise requirements, working endurance, and carrying voice, the breed is not suited to apartment living and thrives best in a rural or suburban home with a securely fenced yard."
    },
    {
      question: "Is the Transylvanian Hound good with children and other dogs?",
      answer:
        "Yes. Within its own household, it is gentle, calm, and affectionate with children, and as a traditional pack hound, it coexists harmoniously with other dogs."
    },
    {
      question: "How much exercise does a Transylvanian Hound need each day?",
      answer:
        "The breed requires at least 60 to 90 minutes of vigorous daily physical activity, including brisk walks, hiking, and mental scent-tracking enrichment to satisfy its working nature."
    },
    {
      question: "Does the Transylvanian Hound bark or bay a lot?",
      answer:
        "In the home, it is calm and composed, but in the field or when tracking quarry it possesses a high-pitched, ringing voice that echoes across great distances."
    },
    {
      question: "What health problems are known in the Transylvanian Hound?",
      answer:
        "The breed is remarkably robust with few genetic disorders; primary health considerations include hip dysplasia, elbow dysplasia, ear infections from drop ears, and occasional field injuries sustained while hunting."
    }
  ],

  references: [
    "fci-transylvanian-hound-official-standard",
    "fci-transylvanian-hound-nomenclature",
    "meoesz-erdelyi-kopo-breed-profile",
    "ukc-transylvanian-hound-breed-standard",
    "akc-transylvanian-hound-breed-profile",
    "wikimedia-erdelyi-kopo-canarian",
    "wikimedia-transylvanian-hound-denesferi"
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
          id: "fci-transylvanian-hound-official-standard",
          role: "verified",
          locator: "Standard heading: ERDÉLYI KOPÓ (Transylvanian Hound)"
        },
        {
          id: "fci-transylvanian-hound-nomenclature",
          role: "verified",
          locator: "Official nomenclature: ERDÉLYI KOPÓ (241), Chien Courant Transylvanien, Transylvanischer Laufhund, Sabueso de Transilvania"
        },
        {
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "verified",
          locator: "Fajtanév: Erdélyi kopó"
        },
        {
          id: "ukc-transylvanian-hound-breed-standard",
          role: "verified",
          locator: "Breed name: Transylvanian Hound"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Verified across FCI Standard No. 241, FCI Nomenclature, MEOESZ, and UKC."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-transylvanian-hound-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 6 Scenthounds and related breeds, Section 1.2 Medium-sized Hounds, with working trial"
        },
        {
          id: "fci-transylvanian-hound-nomenclature",
          role: "verified",
          locator: "Group 6, Section 1.2 Medium-sized Hounds, with working trial"
        },
        {
          id: "ukc-transylvanian-hound-breed-standard",
          role: "verified",
          locator: "Scenthound Group"
        },
        {
          id: "akc-transylvanian-hound-breed-profile",
          role: "verified",
          locator: "Hound Group (Foundation Stock Service)"
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
          id: "fci-transylvanian-hound-official-standard",
          role: "verified",
          locator: "ORIGIN: Hungary; BRIEF HISTORICAL SUMMARY"
        },
        {
          id: "fci-transylvanian-hound-nomenclature",
          role: "verified",
          locator: "Country of origin: Hungary"
        },
        {
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "verified",
          locator: "Származási hely: Magyarország (Erdély)"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-transylvanian-hound-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "verified",
          locator: "Fajtatörténet, nemesi udvarok, 1968-as megmentés és vadászati alkalmazás"
        },
        {
          id: "akc-transylvanian-hound-breed-profile",
          role: "verified",
          locator: "About the Breed, History, and Roles"
        },
        {
          id: "ukc-transylvanian-hound-breed-standard",
          role: "cited",
          locator: "History and Characteristics"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Synthesized in original prose from FCI Standard No. 241, MEOESZ, AKC, and UKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-transylvanian-hound-official-standard",
          role: "verified",
          locator: "HEAD, BODY, LIMBS, TAIL, COAT, COLOUR, SIZE AND WEIGHT"
        },
        {
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "verified",
          locator: "Általános megjelenés, fej, test, végtagok, szőrzet és méret"
        },
        {
          id: "ukc-transylvanian-hound-breed-standard",
          role: "verified",
          locator: "General Appearance, Head, Body, Coat, Color, Height and Weight"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Conformation, rectangular proportions, black-and-tan coat with eyebrow points, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-transylvanian-hound-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Height at withers: 55 to 65 cm. The ideal height is 58 to 62 cm."
        },
        {
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "verified",
          locator: "Marmagasság: 55-65 cm (ideális: 58-62 cm)"
        },
        {
          id: "ukc-transylvanian-hound-breed-standard",
          role: "verified",
          locator: "Height at withers: 21.5 to 25.5 inches (55 to 65 cm); ideal 23 to 24.5 inches (58 to 62 cm)"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Preserved in published unit of centimetres (55 to 65 cm) exactly as specified in FCI Standard No. 241 and MEOESZ standard."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-transylvanian-hound-official-standard",
          role: "verified",
          locator: "Weight: Minimum 25 kg."
        },
        {
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "verified",
          locator: "Súly: minimum 25 kg (általában 25-35 kg)"
        },
        {
          id: "ukc-transylvanian-hound-breed-standard",
          role: "verified",
          locator: "Weight: Minimum weight is 55 pounds (25 kg); typical working weight is 55 to 77 pounds (25 to 35 kg)"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "FCI Standard No. 241 specifies a minimum weight of 25 kg. National breed club and working documentation record a typical weight range of 25 to 35 kg, preserved in kilograms."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-transylvanian-hound-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 10-12 years (up to 14 years in working documentation)"
        },
        {
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "verified",
          locator: "Várható élettartam: 10-14 év"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Supported by kennel club and breed club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-transylvanian-hound-official-standard",
          role: "verified",
          locator: "COAT: Dense, straight, short, rather harsh coarse outer coat with undercoat"
        },
        {
          id: "akc-transylvanian-hound-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (2/5 to 3/5)"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-transylvanian-hound-official-standard",
          role: "verified",
          locator: "Lips: Dry and tight-fitting; dark pigmentation"
        },
        {
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "verified",
          locator: "Ajkak: Szorosan a fogsorra simulóak, szárazak"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Tight, dry lips result in low drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-transylvanian-hound-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Good-natured, courageous, persistent, calm, dependable, high-pitched ringing voice"
        },
        {
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "verified",
          locator: "Természet és viselkedés: Bátor, kitartó, barátságos, intelligens, tiszta hangú csaholás"
        },
        {
          id: "ukc-transylvanian-hound-breed-standard",
          role: "verified",
          locator: "Characteristics: Courageous, persistent, pleasant temperament, ringing voice"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-transylvanian-hound-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        },
        {
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "cited",
          locator: "Viselkedési profil és alkalmazhatóság"
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
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "cited",
          locator: "Gondozás, tartás és kiképzés"
        },
        {
          id: "akc-transylvanian-hound-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
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
          id: "fci-transylvanian-hound-official-standard",
          role: "verified",
          locator: "UTILIZATION: Hound capable of hunting big game independently over long distances"
        },
        {
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "verified",
          locator: "Mozgásigény és vadászati alkalmasság"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "cited",
          locator: "Napi mozgás és fizikai aktivitás"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 60 to 90 minutes of daily activity reflects the exercise demands of an athletic mountain scenthound."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-transylvanian-hound-official-standard",
          role: "cited",
          locator: "High stamina mountain hound with carrying ringing bay"
        },
        {
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "cited",
          locator: "Tartási körülmények: kertes ház javasolt"
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
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "verified",
          locator: "Ideális környezet: biztonságosan bekerített kerttel rendelkező otthon"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-transylvanian-hound-official-standard",
          role: "verified",
          locator: "COAT: Dense, harsh double coat adapted to harsh continental and mountain winter climates"
        },
        {
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "verified",
          locator: "Időjárásállóság a Kárpátok zord éghajlatán"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "cited",
          locator: "Egyedüllét-tűrés és szeparáció"
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
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "cited",
          locator: "Táplálás és szezonális energiaszükséglet"
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
          id: "akc-transylvanian-hound-breed-profile",
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
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "verified",
          locator: "Általános egészség, szűrések és genetikai sokféleség"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Documents high overall constitutional hardiness alongside routine orthopedic screening programs."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "verified",
          locator: "Csípőízületi diszplázia szűrés, gyomorcsavarodás megelőzése és sérülések"
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
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "cited",
          locator: "Megelőző állatorvosi ellátás és fülápolás"
        }
      ],
      verifiedOn: null,
      note: "Field hygiene protocol tailored to drop-eared hunting hounds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "verified",
          locator: "Tenyésztési feltétel: csípőízületi diszplázia (HD) szűrés"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Pre-breeding evaluations recommended by the national breed authority."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-transylvanian-hound-official-standard",
          role: "cited",
          locator: "Jaws/teeth: complete, regular scissor bite, 42 teeth"
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-transylvanian-hound-official-standard",
          role: "cited",
          locator: "Ears: medium set, hanging close to the cheeks, rounded tips"
        }
      ],
      verifiedOn: null,
      note: "Ear maintenance protocol for drop ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-transylvanian-hound-official-standard",
          role: "cited",
          locator: "Skin: medium thick, dark pigmentation"
        }
      ],
      verifiedOn: null,
      note: "General skin and coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "cited",
          locator: "Alkalmasság: vadászoknak és aktív gazdáknak"
        },
        {
          id: "akc-transylvanian-hound-breed-profile",
          role: "cited",
          locator: "Family life ratings and handler requirements"
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
          id: "fci-transylvanian-hound-official-standard",
          role: "verified",
          locator: "Brief historical summary: historic tall and short varieties, royal packs, 1968 rescue"
        },
        {
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "verified",
          locator: "Nemzeti kincs, négy szemű jegy (szemöldökfoltok), csaholás és történelem"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Verified historical and functional facts written without prohibited names."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-transylvanian-hound-official-standard",
          role: "verified",
          locator: "Origin, size (55-65 cm), weight (min 25 kg), coat, and colors"
        },
        {
          id: "meoesz-erdelyi-kopo-breed-profile",
          role: "verified",
          locator: "Súly (25-35 kg), életkor (10-14 év), vadászati mód és egészség"
        },
        {
          id: "ukc-transylvanian-hound-breed-standard",
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
