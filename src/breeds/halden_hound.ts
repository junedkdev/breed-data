import type { Breed } from "../schema/breed.types";

export const halden_hound: Breed = {
  slug: "halden-hound",
  name: "Halden Hound",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Haldenstøver",
    "Haldenstover",
    "Haldenstövare",
    "Halden Scenthound",
    "Chien Courant de Halden",
    "Haldenlaufhund",
    "Sabueso de Halden"
  ],

  group:
    "Scenthounds and Related Breeds; Section 1.2 — Medium-sized Hounds (with working trial; also classified in the Scenthound group)",

  origin: {
    country: "Norway",
    region:
      "Halden and Østfold county, southeastern Norway (developed near the Swedish border)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Haldenst%C3%B8ver.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Haldenst%C3%B8ver.jpg",
      title: "Haldenstøver.jpg",
      description:
        "An adult Halden Hound (Haldenstøver) standing in profile outdoors.",
      creator: "Lilly M",
      uploader: "Lilly M",
      capturedOn: "2007-06-16",
      uploadedOn: "2007-06-25",
      width: 2592,
      height: 1944,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Lilly M, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Haldenst%C3%B8ver.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-11"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Haldenstovare_600.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Haldenstovare_600.jpg",
      title: "Haldenstovare 600.jpg",
      description:
        "A Halden Hound (Haldenstøver) standing outdoors at a dog show.",
      creator: "Tomasz Sienicki",
      uploader: "Pmg",
      capturedOn: "2006-05-20",
      uploadedOn: "2006-05-21",
      width: 600,
      height: 489,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Tomasz Sienicki, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Haldenstovare_600.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-11"
    }
  ],

  overview: {
    summary:
      "A handsome, medium-sized Norwegian scenthound built for cold-climate hare tracking, characterized by its crisp tricolour coat with white predominating, gentle and calm domestic manners, robust stamina, and ringing melodious bay.",

    description:
      "The Halden Hound is an athletic, rectangular-built, and harmonious medium-sized hunting hound that combines substantial bone and muscular endurance with light-footed, tireless movement. Developed in southeastern Norway to track hares and foxes across frozen pine forests, deep snow, and rugged boreal terrain, the dog was selectively bred to hunt as a solitary tracker rather than in large packs. Its short, harsh, and weather-resistant double coat displays an unmistakable tricolour pattern where a clean white ground is highlighted by distinct black patches and warm tan shadings across the head and legs. The head is clean and dry with a slightly domed skull, straight muzzle, medium-length drop ears, and dark brown eyes expressing an open, calm, and friendly disposition. In field work, it is a dedicated, cold-nosed hunter with a musical voice, while in domestic surroundings it settles into an exceptionally gentle, peaceful, and devoted family companion.",

    history:
      "The breed originated during the late nineteenth and early twentieth centuries in the Østfold district around the southeastern Norwegian town of Halden. Local huntsmen crossed native Norwegian farm hounds, notably the local Borge hound strain, with imported English Foxhounds, Beagles, and various German and Swedish hounds to produce a fast, cold-hardy, and easily handled hare-tracking hound that would work cooperatively with a single hunter. In 1952, the breed was formally given its distinct name to honor its town of origin and differentiate it from Norway's other native hounds, the Dunker and Hygen Hound. Formal international purebred recognition was granted in 1960. While it remains one of Scandinavia's rarest native hounds with tightly managed populations, it is deeply treasured across Norway for its quiet, non-quarrelsome home demeanor and exceptional tracking tenacity.",

    originalPurpose:
      "Solo tracking, scenting, and driving European hare and red fox across snowy forests and rugged Scandinavian wilderness.",

    currentRoles: [
      "Traditional solo hare and fox tracking hound",
      "Blood tracking, wounded game search, and forest trailing partner",
      "Devoted household companion for active outdoor families",
      "Canine partner for wilderness trekking, cross-country skiing, and hiking"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 52,
        max: 60
      },
      female: {
        min: 50,
        max: 58
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 23,
        max: 29
      },
      female: {
        min: 20,
        max: 25
      }
    },

    lifespanYears: {
      min: 12,
      max: 14
    },

    coatType:
      "Harsh, very dense, straight, and rather coarse double coat with a dense, soft undercoat offering superior protection against freezing Scandinavian rain, snow, and dense forest brambles.",

    coatLength: "Short",

    coatColors: [
      "White with black patches and tan shadings on the head, legs, and sometimes between black and white areas (white should predominate)",
      "White ground with distinct black saddle or mantle and warm tan points",
      "Tricolour pattern without heavy black predominance"
    ],

    sheddingLevel:
      "Moderate year-round shedding with heavier seasonal shedding in spring and autumn during undercoat molts",

    droolingLevel:
      "Low; tight, dry, cleanly chiselled lips prevent drooling",

    distinctiveFeatures: [
      "Solid, rectangular, and athletic medium-sized scenthound silhouette conveying stamina and functional agility",
      "Height at the withers of 52 to 60 cm for males (ideal 56 cm) and 50 to 58 cm for females (ideal 54 cm)",
      "Working weight of 23 to 29 kg for males and 20 to 25 kg for females in fit, athletic hunting condition",
      "Crisp tricolour coat with clean white predominating, marked by black patches and warm tan shadings on head and limbs",
      "Clean, dry, and balanced head with a slightly arched skull, defined stop, and straight nasal bridge",
      "Complete, regular scissor bite with powerful jaws and sound, evenly spaced white teeth",
      "Medium-sized, oval dark brown eyes with dark lids radiating a frank, calm, and friendly expression",
      "Medium drop ears set neither too high nor too low, hanging flat against the cheeks and reaching halfway along the muzzle",
      "Deep, spacious chest extending to the elbows with well-sprung oval ribs and a firm, level topline",
      "Muscular, arched neck widening cleanly into well-laid-back shoulders without loose throatiness",
      "Strong tail of medium length reaching nearly to the hock, carried rather low in a gentle sabre curve",
      "Straight, heavy-boned forelegs and powerful thighs with compact, tight oval cat-like feet and tough dark pads"
    ]
  },

  temperament: {
    traits: [
      "Calm, gentle, and composed in everyday domestic life",
      "Deeply affectionate, loyal, and friendly with family members",
      "Tenacious, methodical, and tireless tracker when working quarry",
      "Melodious, ringing, and clear baying voice used during tracking",
      "Exceptional sociability with other dogs, lacking dog-aggressive tendencies",
      "Patient, sweet-tempered, and tolerant companion for familiar children",
      "Independent problem-solver with natural scenting initiative in the field",
      "High prey drive toward small wild mammals, hare, and fox",
      "Courteous and welcoming with unfamiliar visitors, making a poor guard dog",
      "Single-minded and focused when following an enticing scent line"
    ],

    scores: {
      affection: 5,
      withChildren: 5,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: 2,
      independence: 3,
      trainability: 4,
      barking: 3,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; an active, endurance-driven hunting hound requiring daily sustained physical activity and olfactory enrichment",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Daily long leashed walks and structured trail hiking with generous sniffing time",
        "Free running and scent exploration in a securely fenced yard or paddock",
        "Tracking, blood tracking, and woodland scent search games",
        "Canine sports including tracking trials, nosework, and canicross",
        "Interactive fetch, ball retrieving, and food puzzle challenges",
        "Cold-weather wilderness hiking and cross-country ski excursions"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush once or twice weekly with a rubber hound mitt or firm bristle brush to remove dead hair and keep the harsh coat clean; increase to daily brushing during seasonal spring and autumn molts.",

      bathing:
        "Bathe every six to eight weeks or when soiled after muddy outdoor hunts, using a gentle canine shampoo that preserves natural water-repellent coat oils.",

      notes: [
        "The short harsh double coat naturally sheds dried forest dirt, mud, and snow once dry.",
        "Inspect the drop ears weekly for moisture, wax accumulation, or debris, wiping gently with an approved veterinary cleanser.",
        "Check paw pads, toes, and skin for thorns or ice balls after running in frozen snow or dense brambles.",
        "Trim hard, fast-growing nails every two to three weeks to maintain correct compact foot structure.",
        "Brush teeth several times weekly with canine enzymatic toothpaste.",
        "Wipe down the sleek coat with a damp towel after outdoor trails to remove dust and maintain gloss."
      ]
    },

    training: {
      difficulty:
        "Moderate; intelligent, friendly, and biddable, but possesses independent scenthound instincts that require patient, reward-based guidance",

      tips: [
        "Use positive reinforcement, high-value aromatic food treats, and cheerful encouragement.",
        "Keep training sessions varied, upbeat, and concise (5 to 10 minutes) to maintain motivation.",
        "Always exercise within a securely fenced area or on a long line, as intriguing scent trails will trigger selective hearing.",
        "Condition a reliable recall early using high-value rewards.",
        "Teach a quiet command early to help manage natural hound baying habits.",
        "Avoid harsh verbal reprimands or physical coercion, which cause this sensitive hound to lose trust and withdraw."
      ],

      socialization:
        "Introduce the puppy early, gradually, and positively to varied people, friendly vaccinated dogs of all sizes, household noises, vehicles, and novel outdoor environments. Early structured socialization develops an outgoing, stable adult that is friendly with strangers and poised in public."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cold and snowy winter climates, where the dense harsh double coat provides exceptional insulation",
        "Temperate climates",
        "Warm climates, provided indoor shade, cool shelter, and fresh water are available and exercise is scheduled during cooler hours"
      ],

      aloneTimeTolerance:
        "Moderate when provided with sufficient physical exercise and comfortable surroundings, though prolonged isolation can provoke boredom baying or digging."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for medium-sized active working or hound breeds, adjusted for age, activity level, and seasonal hunting output.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age, transitioning to two meals daily on a growth formula supporting steady development.",
      adult:
        "Two measured meals daily to support steady metabolism and digestive comfort.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output, joint support, and lean muscle retention."
    },

    guidelines:
      "Measure daily rations carefully using a digital kitchen scale or standard measuring cup, adjusting amounts to maintain a lean, athletic body condition where the ribs are easily felt through the dense coat. Scenthounds possess hearty appetites and will readily overeat if allowed free access to food. Divide daily food into two distinct meals, restrict vigorous running immediately before and after eating to reduce bloat risk, and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a lean, muscular body condition; excess weight places unnecessary mechanical wear on hips and stifles.",
      "Account for training treats within the total daily caloric allowance to prevent creeping weight gain.",
      "Rest the dog before and after meals to mitigate the risk of bloat (gastric dilatation-volvulus).",
      "Increase caloric and protein density during active autumn hunting and field trial seasons.",
      "Avoid feeding high-fat table scraps that can trigger digestive upset or acute pancreatitis.",
      "Transition between diet formulas gradually over five to seven days."
    ],

    note:
      "Caloric needs vary significantly based on outdoor temperature, tracking activity, and daily exercise. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Halden Hound is an exceptionally robust, hardy, and resilient Nordic scenthound with a typical life expectancy of 12 to 14 years. Having evolved through generations of practical field hunting across demanding Scandinavian wilderness, it enjoys strong overall constitutional vitality and has avoided artificial conformational exaggerations. Primary health considerations focus on orthopedic screening for hip dysplasia, routine ear care for drop ears prone to otitis externa, monitoring for bloat in deep-chested individuals, and managing field-related trauma.",

    commonConditions: [
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints, monitored through pre-breeding radiographic screening",
      "Chronic otitis externa — bacterial and yeast ear infections promoted by drop ears that restrict ventilation and trap moisture in the canal",
      "Gastric dilatation-volvulus (GDV / bloat) — an acute, life-threatening twisting and distension of the stomach in deep-chested hounds, requiring emergency veterinary care",
      "Traumatic outdoor injuries — minor cuts, punctures, pad abrasions, or sprains sustained while navigating icy terrain and dense forest brambles",
      "Eye conditions — rare reports of cataracts or retinal disorders, monitored through certified veterinary ophthalmologist examinations"
    ],

    preventiveCare: [
      "Confirm that breeding stock has certified radiographic hip clearances, alongside current specialist eye examinations.",
      "Inspect and thoroughly dry the drop ears weekly, wiping canals with an approved veterinary ear wash.",
      "Maintain a lean, muscular body condition throughout life to minimize mechanical wear on joints and ligaments.",
      "Feed two smaller meals daily and avoid vigorous running immediately before or after eating to mitigate bloat risk.",
      "Administer consistent year-round parasite prevention against fleas, ticks, and heartworms.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation through an accredited national screening program prior to breeding",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist",
      "Clinical orthopedic and cardiovascular examination by a veterinarian"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste. The breed has strong, wide jaws with a complete 42-tooth scissor bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the medium drop ears weekly for wax accumulation, moisture, or redness. Clean gently using a veterinarian-recommended ear solution, drying the leather thoroughly.",

    skinCare:
      "Part the dense coat weekly during brushing to inspect the skin for external parasites, redness, or scratches. Check paw pads and ear margins after woodland runs for cuts and thorns."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Active outdoor households, trail runners, and hikers who enjoy year-round wilderness exploration in cold and temperate climates",
      "Hunters and sportsmen seeking a dedicated, solo-working tracking partner for hare or fox",
      "Experienced hound owners who understand scent drive, baying voice, and positive leadership",
      "Homes with a large, securely fenced yard of at least five to six feet in height in rural or suburban settings",
      "Enthusiasts of tracking, blood tracking, and scentwork dog sports"
    ],

    notIdealFor: [
      "First-time dog owners or passive handlers unprepared for high physical endurance and independent scenting drive",
      "Apartment or condominium dwellers where ringing hound baying may disturb neighbors",
      "Households with loose small pets or rabbits vulnerable to hound prey drive",
      "Owners who leave a dog home alone in isolation for long workdays without company",
      "People seeking an aggressive guard dog"
    ]
  },

  funFacts: [
    "The Halden Hound is named after the historic border town of Halden in southeastern Norway, near the Swedish border, where the breed was selectively developed in the early twentieth century.",
    "Unlike many European scenthounds that hunt in large packs, the Halden Hound was specifically bred to work as a solitary hunter with a single handler, giving it an unusually calm, cooperative, and close-bonding personality in the home.",
    "The breed was established by crossing native Norwegian Borge hounds with imported English Foxhounds, Beagles, and German scenthounds, resulting in its distinctive tricolour coat and athletic endurance.",
    "The Halden Hound is considered one of the rarest of all Nordic hound breeds, with registrations carefully monitored to preserve its genetic vitality and authentic working instincts.",
    "Its ringing, melodious bay on a fresh scent trail is famed among Scandinavian hunters for its carrying power through dense pine valleys and across snow-covered hills.",
    "In the home, Halden Hounds are famously described by Norwegian hunters as 'gentle giants among harehounds' due to their sweet, patient demeanor with children and peaceful coexistence with other family dogs."
  ],

  faq: [
    {
      question: "What is a Halden Hound?",
      answer:
        "The Halden Hound (Haldenstøver) is a medium-sized Norwegian scenthound bred for hare hunting, recognized for its crisp tricolour coat with white predominating, athletic endurance, and calm, friendly family personality."
    },
    {
      question: "How does the Halden Hound differ from the Dunker and Hygen Hound?",
      answer:
        "While all three are native Norwegian harehounds, the Halden Hound is distinguished by its predominantly white tricolour coat (unlike the blue merle or harlequin pattern of the Dunker and the solid red-brown or black and tan of the Hygen Hound) and Foxhound ancestry."
    },
    {
      question: "How tall and heavy is a Halden Hound?",
      answer:
        "Adult males stand 52 to 60 cm at the withers (ideal 56 cm) and weigh 23 to 29 kg, while adult females stand 50 to 58 cm (ideal 54 cm) and weigh 20 to 25 kg, presenting a lean, athletic rectangular outline."
    },
    {
      question: "How long does a Halden Hound live?",
      answer:
        "With proper nutrition, regular exercise, and preventive veterinary care, the breed typically enjoys a healthy lifespan of 12 to 14 years."
    },
    {
      question: "Do Halden Hounds shed a lot, and how are they groomed?",
      answer:
        "They shed moderately year-round and blow their undercoat during seasonal changes. Their short, harsh double coat is low-maintenance, requiring only a weekly brushing with a rubber hound mitt, regular ear cleaning, and occasional nail trimming."
    },
    {
      question: "Can a Halden Hound live in an apartment?",
      answer:
        "Generally no. Due to their high exercise requirements, working stamina, and loud tracking bay, they are not suited to apartment living and thrive best in a house with a securely fenced yard."
    },
    {
      question: "Are Halden Hounds good family pets and good with children?",
      answer:
        "Yes, with active families. In the home, they are remarkably gentle, sweet-tempered, and affectionate with family members and patient with children; they also coexist peacefully with other dogs."
    },
    {
      question: "Is the Halden Hound easy to train?",
      answer:
        "They are intelligent, friendly, and food-motivated, but have an independent scenthound nature. When an interesting scent catches their nose, they can be single-minded, so training requires patience, food rewards, and consistent positive reinforcement."
    },
    {
      question: "How much exercise does a Halden Hound need each day?",
      answer:
        "The breed requires 60 to 90 minutes of daily physical activity, including brisk leashed walks, free running in a secure area, and scent exploration games."
    },
    {
      question: "What health tests are recommended for breeding Halden Hounds?",
      answer:
        "Recommended pre-breeding screenings include radiographic evaluations for hip dysplasia and certified veterinary ophthalmologist eye exams."
    }
  ],

  references: [
    "fci-halden-hound-official-standard",
    "fci-halden-hound-nomenclature",
    "nkk-haldenstover-rasestandard",
    "nhkf-haldenstover-raseprofil",
    "ukc-halden-hound-breed-standard",
    "wikimedia-haldenstover-lilly-m",
    "wikimedia-haldenstovare-600-tomasz-sienicki"
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
          id: "fci-halden-hound-official-standard",
          role: "verified",
          locator: "Standard heading: HALDENSTØVER (Halden Hound)"
        },
        {
          id: "fci-halden-hound-nomenclature",
          role: "verified",
          locator: "Official nomenclature: HALDEN HOUND (267), Haldenstøver, Chien Courant de Halden, Haldenlaufhund, Sabueso de Halden"
        },
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Rasenavn: Haldenstøver"
        },
        {
          id: "ukc-halden-hound-breed-standard",
          role: "verified",
          locator: "Breed Name: Halden Hound (Haldenstovare)"
        }
      ],
      verifiedOn: "2026-11-11",
      note: "Verified across FCI Standard No. 267, FCI Nomenclature, NKK, and UKC."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-halden-hound-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 6 Scenthounds and related breeds, Section 1.2 Medium-sized Hounds, with working trial"
        },
        {
          id: "fci-halden-hound-nomenclature",
          role: "verified",
          locator: "Group 6, Section 1.2 Medium-sized Hounds, with working trial"
        },
        {
          id: "ukc-halden-hound-breed-standard",
          role: "verified",
          locator: "Scenthound Group"
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
          id: "fci-halden-hound-official-standard",
          role: "verified",
          locator: "ORIGIN: Norway; BRIEF HISTORICAL SUMMARY"
        },
        {
          id: "fci-halden-hound-nomenclature",
          role: "verified",
          locator: "Country of origin: Norway"
        },
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Hjemland: Norge (Halden, Østfold)"
        }
      ],
      verifiedOn: "2026-11-11",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-halden-hound-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, IMPORTANT PROPORTIONS, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Bakgrunn, jaktegenskaper på hare og rev, helhetsinntrykk"
        },
        {
          id: "nhkf-haldenstover-raseprofil",
          role: "verified",
          locator: "Rasehistorie, Borgehunden, jaktstil som ensomjager og familiehund"
        },
        {
          id: "ukc-halden-hound-breed-standard",
          role: "verified",
          locator: "History, General Appearance, and Temperament"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "Synthesized in original prose from FCI Standard No. 267, NKK, NHKF, and UKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-halden-hound-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS, HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE AND WEIGHT"
        },
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Hode, kropp, hale, lemmer, pels, farge og størrelse"
        },
        {
          id: "ukc-halden-hound-breed-standard",
          role: "verified",
          locator: "General Appearance, Head, Body, Coat, Color, Height and Weight"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "Conformation, rectangular build, harsh dense tricolour coat, drop ears, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-halden-hound-official-standard",
          role: "verified",
          locator: "SIZE: Height at withers: Males: 52-60 cm, ideal height 56 cm. Females: 50-58 cm, ideal height 54 cm."
        },
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Mankehøyde: Hannhunder: 52-60 cm, ideal 56 cm. Tisper: 50-58 cm, ideal 54 cm."
        },
        {
          id: "ukc-halden-hound-breed-standard",
          role: "verified",
          locator: "Height: Males: 20.5 to 23.5 inches (52-60 cm); Females: 19.5 to 23 inches (50-58 cm)"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "Preserved in published unit of centimetres (52–60 cm for males, ideal 56 cm; 50–58 cm for females, ideal 54 cm) exactly as specified in the official FCI Standard No. 267 and NKK standard."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "nhkf-haldenstover-raseprofil",
          role: "verified",
          locator: "Vekt: Hannhunder ca. 23-29 kg, tisper ca. 20-25 kg"
        },
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Vektprofil: ca. 20-29 kg harmonisk i forhold til størrelsen"
        },
        {
          id: "ukc-halden-hound-breed-standard",
          role: "verified",
          locator: "Weight: Weight is in proportion to height, approximately 45 to 64 pounds (approx. 20-29 kg)"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "FCI Standard No. 267 specifies height without fixing a numerical weight. The stored 23 to 29 kg for males and 20 to 25 kg for females represent canonical figures published by national Norwegian harehound authorities (NHKF and NKK), preserved in kilograms."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "nhkf-haldenstover-raseprofil",
          role: "verified",
          locator: "Forventet levetid og helse (12-14 år)"
        },
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Helse, levealder og robusthet"
        }
      ],
      verifiedOn: "2026-11-11",
      note: "Supported by kennel club and breed club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-halden-hound-official-standard",
          role: "verified",
          locator: "COAT: Harsh, very dense and straight with dense undercoat"
        },
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Pelshår og underull, moderat røyting"
        }
      ],
      verifiedOn: "2026-11-11",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-halden-hound-official-standard",
          role: "verified",
          locator: "Lips: Tight fitting, not pendulous"
        },
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Lepper: Tørre, stramme, ikke leppefold"
        }
      ],
      verifiedOn: "2026-11-11",
      note: "Tight, dry lips prevent drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-halden-hound-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Scenthound; calm, friendly, affectionate and trusting, tenacious hunter"
        },
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Adferd/temperament: Rolig, vennlig, tillitsfull, sosial overfor andre hunder og folk"
        },
        {
          id: "ukc-halden-hound-breed-standard",
          role: "verified",
          locator: "Temperament: Calm, affectionate, trustworthy, friendly companion and hunter"
        }
      ],
      verifiedOn: "2026-11-11",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "cited",
          locator: "Adferd og raseegenskaper"
        },
        {
          id: "nhkf-haldenstover-raseprofil",
          role: "cited",
          locator: "Sosiale egenskaper og jaktlyst"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented Nordic scenthound temperament, high family affection, and calm domestic habits."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "cited",
          locator: "Pelsstell, mosjon og dressur"
        },
        {
          id: "nhkf-haldenstover-raseprofil",
          role: "cited",
          locator: "Stell, helse og jaktmessig aktivisering"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active tracking hound management with drop-ear care and harsh coat grooming protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-halden-hound-official-standard",
          role: "verified",
          locator: "UTILIZATION: Scenthound hunting hare with stamina"
        },
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Høyt aktivitetsbehov som jakthund"
        }
      ],
      verifiedOn: "2026-11-11",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "cited",
          locator: "Daglige mosjonsbehov"
        },
        {
          id: "nhkf-haldenstover-raseprofil",
          role: "cited",
          locator: "Trening og jaktaktivitet"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 60 to 90 minutes of daily activity reflects the exercise demands of an athletic hunting scenthound."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "cited",
          locator: "Aktiv jakthund som trives best med hage eller i landlige omgivelser"
        },
        {
          id: "nhkf-haldenstover-raseprofil",
          role: "cited",
          locator: "Plassbehov og varsling"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial evaluation that high physical energy, tracking drive, and hunting bay make apartment living generally unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Behov for inngjerdet uteområde"
        },
        {
          id: "nhkf-haldenstover-raseprofil",
          role: "verified",
          locator: "Sikret uteplass"
        }
      ],
      verifiedOn: "2026-11-11",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-halden-hound-official-standard",
          role: "verified",
          locator: "COAT: Harsh dense coat with thick undercoat adapted to Nordic winter climate"
        },
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Klimatilpasning til nordisk vær"
        }
      ],
      verifiedOn: "2026-11-11",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "nhkf-haldenstover-raseprofil",
          role: "cited",
          locator: "Selvstendighet og alenetid"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "cited",
          locator: "Ernæring og hold for jakthunder"
        },
        {
          id: "nhkf-haldenstover-raseprofil",
          role: "cited",
          locator: "Fôring i og utenfor jaktsesongen"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for active medium working hound breeds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "cited",
          locator: "Fôringsrutiner"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Helse, HD-overvåking og rasevitalitet"
        },
        {
          id: "nhkf-haldenstover-raseprofil",
          role: "verified",
          locator: "Sunnhet, lav forekomst av arvelige lidelser, HD-status"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "Synthesizes Norwegian kennel club and breed club veterinary health records."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Hofteleddsdysplasi (HD), ørebetennelser og jaktrelaterte skader"
        },
        {
          id: "nhkf-haldenstover-raseprofil",
          role: "verified",
          locator: "HD-røntgen og helseovervåking"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "Details documented conformational and environmental conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "nhkf-haldenstover-raseprofil",
          role: "cited",
          locator: "Forebyggende helsearbeid, ørerens og potetilsyn"
        },
        {
          id: "nkk-haldenstover-rasestandard",
          role: "cited",
          locator: "Rutinemessig veterinæroppfølging"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to active Nordic hunting hounds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Krav/anbefaling til avlshunder: HD-røntgen og øyelysing"
        },
        {
          id: "nhkf-haldenstover-raseprofil",
          role: "verified",
          locator: "Røntgenkontroll av hofter før paring"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "Screenings summarize published parent club and national kennel club breeding guidelines."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-halden-hound-official-standard",
          role: "cited",
          locator: "Jaws/teeth: scissor bite, complete dentition"
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-halden-hound-official-standard",
          role: "cited",
          locator: "Ears: set neither high nor low, hanging flat close to head"
        },
        {
          id: "nkk-haldenstover-rasestandard",
          role: "cited",
          locator: "Ørestell for hengeører"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for drop ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-halden-hound-official-standard",
          role: "cited",
          locator: "Skin: tight, firm, supple"
        }
      ],
      verifiedOn: null,
      note: "General skin and coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "cited",
          locator: "Egnethet for jegere og aktive familier"
        },
        {
          id: "nhkf-haldenstover-raseprofil",
          role: "cited",
          locator: "Sosial profil og familievennlighet"
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
          id: "nhkf-haldenstover-raseprofil",
          role: "verified",
          locator: "Halden opprinnelse, Borgehunden, ensomjager, sjelden rase, mildt gemytt"
        },
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "1952 navngiving, historisk bakgrunn og krysninger"
        },
        {
          id: "fci-halden-hound-official-standard",
          role: "verified",
          locator: "Brief historical summary: Southeastern Norwegian harehound heritage"
        }
      ],
      verifiedOn: "2026-11-11",
      note: "Verified historical folklore and working heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-halden-hound-official-standard",
          role: "verified",
          locator: "Origin, size (52-60 cm / 50-58 cm), coat, colors, and differences from Dunker/Hygen"
        },
        {
          id: "nhkf-haldenstover-raseprofil",
          role: "verified",
          locator: "Weight (20-29 kg), lifespan (12-14 years), family life, and hunting traits"
        },
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Apartment living, exercise needs, and health tests"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and parent club data without naming registries in prose."
    }
  },

  updatedOn: "2026-11-11"
};
