import type { Breed } from "../schema/breed.types";

export const cane_corso: Breed = {
  slug: "cane-corso",
  name: "Cane Corso",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Cane Corso Italiano",
    "Italian Cane Corso",
    "Italian Mastiff",
    "Chien de Cour Italien",
    "Corso"
  ],

  group: "Mastiff-type molossoid working guardian",

  origin: {
    country: "Italy",
    region:
      "Southern Italy, especially rural Apulia, Lucania, and Sannio"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cane_corso_2021_03.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Cane_corso_2021_03.jpg",
      title: "Cane corso 2021 03.jpg",
      description:
        "An adult Cane Corso standing outdoors, showing its muscular build and short coat.",
      creator: "Wojciech Pędzich",
      uploader: "Wojciech Pędzich",
      capturedOn: "2021-08-14",
      uploadedOn: "2022-04-26",
      width: 4691,
      height: 3564,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Wojciech Pędzich, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Cane_corso_2021_03.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/.",
      restrictions:
        "CC BY-SA 4.0 requires attribution and ShareAlike distribution if adapted. Wikimedia Commons currently flags this file as lacking an explicit source statement even though the listed photographer and uploader are identical; confirm provenance before high-risk commercial use.",
      metadataCheckedOn: "2026-11-26"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cane_corso_17.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Cane_corso_17.jpg",
      title: "Cane corso 17.jpg",
      description:
        "A large adult Cane Corso standing outdoors with a dark brindle coat.",
      creator: "Wili15",
      uploader: "Wili15",
      capturedOn: "2014-04-17",
      uploadedOn: "2017-12-17",
      width: 3872,
      height: 2592,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Wili15, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Cane_corso_17.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/.",
      restrictions:
        "CC BY-SA 4.0 requires attribution and ShareAlike distribution if adapted.",
      metadataCheckedOn: "2026-11-26"
    }
  ],

  overview: {
    summary:
      "A muscular, athletic Italian mastiff bred for guarding estates, managing livestock, and hunting big game, valued for calm devotion at home and watchful protection.",

    description:
      "Slightly longer in body than tall at the shoulder, the Cane Corso combines heavy bone and dense muscle with clean, athletic outlines rather than bulky heaviness. Its broad, chiseled head features slightly converging skull and muzzle planes, a strong square muzzle, and medium oval eyes that look straight ahead with steady alertness. A short, glossy, tightly packed coat with a light undercoat comes in black, shades of blue-grey, fawn, stag red, dark wheat, and brindle patterns. On the move, the dog covers ground in a long, effortless trot. With consistent leadership and thorough socialization, it is affectionate and composed around its household while staying naturally reserved and protective toward unfamiliar visitors.",

    history:
      "The Cane Corso descends from ancient Roman molossoid war and utility dogs, with its name linked to the Latin word 'cohors', meaning protector or guardian of the farmyard. For generations across southern Italy—particularly in Apulia, Lucania, and Sannio—the breed worked as an all-purpose rural helper that guarded farmsteads, drove cattle and pigs, and tracked dangerous game such as wild boar. Mechanized farming and rural migration drove numbers dangerously low by the mid-twentieth century. Beginning in the 1970s, Italian enthusiasts including Dr. Paolo Breber located surviving working dogs in southern provinces and rebuilt the population, leading to national recognition in Italy in 1994 and broad international recognition over the following decade.",

    originalPurpose:
      "Guarding farmsteads, families, and livestock; driving cattle and swine; and hunting large game such as wild boar",

    currentRoles: [
      "Home and property guardian",
      "Farm and livestock utility dog",
      "Obedience, tracking, and protection sport competitor",
      "Loyal companion for experienced handlers"
    ]
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "cm",
      male: {
        min: 64,
        max: 68
      },
      female: {
        min: 60,
        max: 64
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 45,
        max: 50
      },
      female: {
        min: 40,
        max: 45
      }
    },

    lifespanYears: {
      min: 9,
      max: 12
    },

    coatType:
      "Short, glossy, very dense coat with a light undercoat and firm, glass-like sheen; lies close without feathering",

    coatLength: "Short",

    coatColors: [
      "Black",
      "Lead-grey (blue)",
      "Slate-grey (blue)",
      "Light grey (blue)",
      "Light fawn",
      "Dark fawn",
      "Stag red",
      "Dark wheat",
      "Black brindle",
      "Grey (blue) brindle"
    ],

    sheddingLevel:
      "Moderate; sheds steadily throughout the year with heavier seasonal shedding of the light undercoat in spring",

    droolingLevel:
      "Moderate; upper lips hang moderately over the lower jaw, leading to noticeable drooling after drinking or exercise",

    distinctiveFeatures: [
      "Strong, athletic mastiff build that is slightly longer than tall at the withers",
      "Broad, sculpted head with slightly converging skull and muzzle axes and a deep, square muzzle roughly as wide as it is long",
      "Black or blue-grey facial mask on fawn and brindle coats that stays below the eye line; small white markings may appear on the chest, toes, and nasal bridge",
      "Slightly undershot bite with sturdy, well-aligned teeth",
      "Medium-sized, forward-set oval eyes with tight eyelids and dark iris pigment matched to coat shade",
      "Triangular, medium-sized drop ears set high above the cheekbones",
      "Muscular, clean neck with firm skin and minimal dewlap",
      "Broad, deep chest reaching to the elbow with well-sprung ribs",
      "Thick, fairly high-set tail carried higher when moving without curling over the back"
    ]
  },

  temperament: {
    traits: [
      "Deeply loyal, steady, and affectionate with immediate family members",
      "Alert, courageous, and strongly protective of home and property",
      "Intelligent, observant, and responsive to clear, consistent direction",
      "Naturally reserved and watchful around unfamiliar people",
      "Confident and strong-willed; needs an experienced, calm handler",
      "Often assertive or territorial with unfamiliar dogs, especially of the same sex",
      "Quiet and settled indoors once daily physical and mental needs are met"
    ],

    scores: {
      affection: 4,
      withChildren: 4,
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
        "High; an athletic working mastiff that needs vigorous daily movement plus structured mental engagement to stay calm and well-mannered",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Brisk daily leashed walks or trail hikes",
        "Structured obedience drills and impulse-control exercises",
        "Tracking, scent work, and supervised working-dog sports",
        "Interactive tug or fetch games with heavy-duty toys",
        "Supervised free running inside a tall, reinforced fenced yard"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush once a week with a rubber hound glove or soft bristle brush, increasing to several times weekly during spring shedding.",

      bathing:
        "Bathe only as needed using a mild dog shampoo so the skin and glossy coat retain natural oils.",

      notes: [
        "Wipe drool from the muzzle and lip folds after meals and drinking to keep skin dry and healthy.",
        "Check the high-set drop ears weekly for wax, moisture, or odor, and clean gently with a vet-approved ear wash.",
        "Trim thick nails every two to three weeks, starting paw-handling desensitization early in puppyhood.",
        "Brush teeth several times a week with canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Challenging; bright and eager to work for a respected handler, yet physically powerful and naturally protective, demanding early, consistent training",

      tips: [
        "Start structured obedience, loose-leash walking, and calm visitor routines early before adult size and strength arrive.",
        "Use calm, consistent boundaries paired with reward-based training; erratic or overly harsh handling undermines trust and stability.",
        "Teach reliable 'all clear' and settle cues so the dog relaxes once guests are welcomed.",
        "Avoid amateur protection or bite encouragement; guarding instincts develop naturally without provocation.",
        "Keep exercise secure inside a sturdy fence at least six feet tall with reliable latches."
      ],

      socialization:
        "Thorough, ongoing socialization from puppyhood is essential. Provide calm, positive exposure to varied people, everyday sounds, public settings, and neutral dogs so innate guardian instincts mature into poised, discerning judgment rather than fear or reactivity."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Well suited to temperate climates",
        "Tolerates warm weather when given shade, water, air conditioning, and exercise during cooler hours",
        "Handles cool weather comfortably during activity thanks to its dense coat and light undercoat, though it should live indoors"
      ],

      aloneTimeTolerance:
        "Low to moderate; strongly people-oriented and prone to stress or destructive chewing if left isolated for long stretches."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced large-breed diet formulated for active working dogs, using a controlled-growth large-breed puppy formula during development",

    feedingFrequency: {
      puppy:
        "Three to four measured meals daily until about six months of age, then two meals daily on a large-breed growth diet to support steady bone development.",
      adult:
        "Two measured meals daily to nourish heavy musculature while keeping individual stomach volume moderate.",
      senior:
        "Two portion-controlled meals daily adjusted for slower metabolism and joint comfort."
    },

    guidelines:
      "Measure every meal accurately to preserve a lean, muscular outline without excess body fat, which places heavy strain on developing and adult joints. Split daily intake into two meals, keep intense running separated from mealtimes by at least an hour to help reduce bloat risk, and keep fresh water available at all times.",

    considerations: [
      "Keep weight lean and muscular throughout life to protect hips, elbows, and ligaments.",
      "Avoid rapid puppy growth and never add extra calcium supplements unless directed by a veterinarian.",
      "Schedule calm rest before and after eating to lower gastric dilatation-volvulus risk.",
      "Count training treats toward the daily calorie total.",
      "Transition food formulas gradually over five to seven days."
    ],

    note:
      "Daily calorie requirements depend on age, metabolism, and workload; work with a veterinarian to set exact portions."
  },

  health: {
    overview:
      "The Cane Corso generally lives 9 to 12 years and is a hardy, heavily muscled working breed. Two inherited single-gene disorders have been scientifically identified in the breed and can be avoided through DNA screening of breeding parents: Dental-Skeletal-Retinal Anomaly (DSRA, caused by a MIA3 splice defect) and Neuronal Ceroid Lipofuscinosis (NCL1, caused by a PPT1 splice donor mutation). Other key health priorities include orthopedic conditions (hip dysplasia, elbow dysplasia, and patellar luxation), cardiac disease, gastric dilatation-volvulus (bloat), idiopathic epilepsy, eyelid abnormalities (entropion, ectropion, and cherry eye), and demodectic mange.",

    commonConditions: [
      "Dental-Skeletal-Retinal Anomaly (DSRA) — an established autosomal recessive collagenopathy caused by a MIA3 gene splice defect, producing brittle discolored teeth, shortened stature or orthopedic issues, and progressive vision loss; preventable via DNA testing",
      "Neuronal Ceroid Lipofuscinosis (NCL1) — a documented autosomal recessive lysosomal storage disorder caused by a PPT1 splice donor mutation leading to progressive neurological decline; preventable via DNA testing",
      "Hip and elbow dysplasia — developmental joint conditions common across large, heavy-boned breeds that can lead to arthritis and are monitored through pre-breeding X-rays",
      "Patellar luxation — kneecap instability evaluated through veterinary orthopedic screening",
      "Gastric dilatation-volvulus (bloat) — an acute, life-threatening twisting of the stomach associated with deep-chested large-breed conformation, requiring immediate emergency care",
      "Idiopathic epilepsy — recurrent seizures with no identifiable underlying cause, typically first appearing around two years of age (ranging roughly from nine months to five years) and managed with veterinary anticonvulsant therapy; no DNA test currently exists",
      "Eyelid disorders (entropion, ectropion, and cherry eye) — inward- or outward-rolling eyelids and prolapsed third-eyelid glands that may require surgical correction",
      "Cardiac conditions and demodectic mange — heart abnormalities monitored through veterinary cardiac screening and follicular mite skin flare-ups noted in young or stressed dogs"
    ],

    preventiveCare: [
      "Confirm that both breeding parents have verified clearances for hips, elbows, patellas, cardiac health, and DNA tests for DSRA and NCL1.",
      "Keep puppies growing steadily on a large-breed diet and maintain a lean adult body weight to protect joints.",
      "Divide meals into two daily feedings and restrict hard exercise around mealtimes to help reduce bloat risk.",
      "Check eyes, facial folds, and drop ears weekly for redness, discharge, or irritation.",
      "Schedule regular veterinary wellness visits, parasite prevention, and dental checkups."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "Cardiac evaluation by a veterinarian or veterinary cardiologist",
      "Orthopedic patellar luxation evaluation",
      "Neuronal Ceroid Lipofuscinosis (NCL1 / PPT1) DNA test",
      "Dental-Skeletal-Retinal Anomaly (DSRA / MIA3) DNA test"
    ],

    dentalCare:
      "Brush teeth several times a week with canine enzymatic toothpaste and schedule periodic veterinary oral exams to protect the powerful jaws and slightly undershot bite.",

    earCare:
      "Inspect the medium triangular drop ears every week for wax, dampness, or redness, cleaning gently with a veterinarian-recommended solution and drying thoroughly.",

    skinCare:
      "Examine the short coat and skin weekly during brushing for irritation, mites, or scrapes, and keep lip and facial folds clean and dry."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Experienced owners comfortable leading a large, confident, protective working mastiff",
      "Active households with a spacious, securely fenced yard",
      "Handlers interested in obedience, tracking, or structured working-dog sports",
      "Families with older, respectful children who can commit to lifelong training and socialization"
    ],

    notIdealFor: [
      "First-time dog owners or anyone seeking an effortlessly compliant, low-effort pet",
      "Apartments or dense urban housing without a secure private yard",
      "Frequent off-leash dog park visits with unfamiliar dogs",
      "Sedentary households or owners away from home for long daily stretches"
    ]
  },

  funFacts: [
    "Despite the sound of its name, the Cane Corso does not come from Corsica; 'corso' stems from the Latin 'cohors', meaning protector or guardian of the farmyard.",
    "The breed's ancestry traces back to ancient Roman molossoid war and utility dogs, and it shares roots with the heavier Neapolitan Mastiff.",
    "By the 1970s the Cane Corso had nearly disappeared from rural Italy until dedicated enthusiasts located surviving farm dogs in southern provinces and rebuilt the breed.",
    "The plural of Cane Corso in Italian is 'Cani Corsi'.",
    "Historically, Italian farmers valued fawn-coated Corsi as 'straw stack dogs' because their warm coat blended naturally with hay and wheat while watching livestock."
  ],

  faq: [
    {
      question: "How big does a Cane Corso get?",
      answer:
        "Adult males typically stand 64 to 68 cm at the shoulder and weigh 45 to 50 kg, while adult females stand 60 to 64 cm and weigh 40 to 45 kg."
    },
    {
      question: "How long does a Cane Corso live?",
      answer:
        "With balanced nutrition, lean weight management, and regular veterinary care, a Cane Corso typically lives 9 to 12 years."
    },
    {
      question: "Is a Cane Corso a good fit for first-time dog owners?",
      answer:
        "Usually no. Their size, physical strength, and strong guarding instincts require an experienced, calm handler who can deliver consistent training and thorough socialization from early puppyhood."
    },
    {
      question: "Can a Cane Corso live in an apartment?",
      answer:
        "An apartment is rarely suitable. This large, protective working dog needs space, a securely fenced yard, and 60 to 90 minutes of daily structured exercise and mental work."
    },
    {
      question: "Are Cane Corsos naturally aggressive?",
      answer:
        "A well-bred, thoroughly socialized Cane Corso is calm, steady, and devoted to its family. However, the breed is naturally territorial, reserved with strangers, and often assertive toward unfamiliar dogs, so responsible management is essential."
    },
    {
      question: "What are DSRA and NCL1 in Cane Corsos?",
      answer:
        "Dental-Skeletal-Retinal Anomaly (DSRA) and Neuronal Ceroid Lipofuscinosis (NCL1) are two inherited autosomal recessive genetic disorders identified in the breed. Both can be prevented by DNA testing breeding parents before mating."
    },
    {
      question: "What health screenings should breeders complete?",
      answer:
        "Recommended pre-breeding screenings include hip and elbow dysplasia X-rays, cardiac and patellar luxation evaluations, and DNA tests for both DSRA and NCL1."
    }
  ],

  references: [
    "fci-cane-corso-italiano-official-standard",
    "fci-cane-corso-italiano-nomenclature",
    "enci-cane-corso-italiano-standard",
    "akc-cane-corso-breed-standard",
    "akc-cane-corso-breed-profile",
    "ccaa-cane-corso-health",
    "ofa-cane-corso-chic-requirements",
    "cane-corso-dsra-mia3-study-2021",
    "cane-corso-ncl-ppt1-study-2017",
    "natureserve-canis-lupus-familiaris",
    "wikimedia-cane-corso-17-wili15",
    "wikimedia-cane-corso-2021-03-wojciech",
    "the-dog-api"
  ],

  evidence: {
    scientificName: {
      reliability: "reliable_source",
      sources: [
        {
          id: "natureserve-canis-lupus-familiaris",
          role: "verified",
          locator: "Species taxonomy record: Canis lupus familiaris"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Domestic dog subspecies taxonomy."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "Standard heading: CANE CORSO ITALIANO (Italian Cane Corso)"
        },
        {
          id: "fci-cane-corso-italiano-nomenclature",
          role: "verified",
          locator: "French official name: CHIEN DE COUR ITALIEN"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names: Italian Mastiff, Cane Corso Italiano"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-cane-corso-italiano-nomenclature",
          role: "verified",
          locator: "Group 2 Pinscher and Schnauzer - Molossoid and Swiss Mountain and Cattledogs; Section 2 Molossian type, Subsection Mastiff type; Subject to a working trial"
        },
        {
          id: "akc-cane-corso-breed-standard",
          role: "verified",
          locator: "Working Group"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group: Working"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "FCI Nomenclature confirms the Cane Corso is subject to a working trial (correcting earlier draft). User-facing group text avoids registry group/section labels."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "ORIGIN: Italy"
        },
        {
          id: "enci-cane-corso-italiano-standard",
          role: "verified",
          locator: "Southern Italian working heritage"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: Italy"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "General appearance, gait, coat, colours, and working heritage"
        },
        {
          id: "enci-cane-corso-italiano-standard",
          role: "verified",
          locator: "Aspetto Generale and guardian/working history"
        },
        {
          id: "akc-cane-corso-breed-profile",
          role: "verified",
          locator: "About the breed, Roman molossoid origins, 'cohors' etymology, and 1970s revival"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "All user-facing overview text is newly written in original wording."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "Head, bite (undershot not >5 mm), coat (short, shiny, very dense with slight undercoat of vitreous texture), colours, and size/weight (2023-10-13 revision)"
        },
        {
          id: "akc-cane-corso-breed-standard",
          role: "verified",
          locator: "General appearance, proportion, and coat"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "GET /breeds/{id}/colours"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Coat colors reflect the 2023-10-13 FCI Standard No. 343 list (including dark wheat and blue-grey designations); generic canine color variants from The Dog API are excluded."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Height at the withers: Males 64 cm – 68 cm; Females 60 cm – 64 cm (tolerance of 2 cm, more or less)"
        },
        {
          id: "akc-cane-corso-breed-standard",
          role: "cited",
          locator: "Height: Males 25 to 27.5 inches; Females 23.5 to 26 inches"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric: Males 64–70 cm; Females 60–66 cm"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Exact FCI Standard No. 343 ideal height range in cm (64–68 cm / 60–64 cm). The Dog API adds the +2 cm tolerance to the upper limit (70 cm / 66 cm)."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Weight: Males 45 – 50 kg; Females 40 – 45 kg (weight according to size of dog)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.weight.metric: Males 45–50 kg; Females 40–45 kg"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Exact FCI Standard No. 343 weight in kg (matches The Dog API; AKC standard specifies weight proportionate to height)."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 9–12 years"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span: 9–12 years"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Both AKC profile and The Dog API report 9–12 years."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "verified",
          locator: "Grooming and seasonal shedding guidance"
        },
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "Short, very dense coat with slight undercoat"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "Moderately hanging upper lips"
        },
        {
          id: "akc-cane-corso-breed-profile",
          role: "verified",
          locator: "Drooling level rating"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "Behaviour/Temperament: guardian of property, family, and livestock; agile and responsive"
        },
        {
          id: "akc-cane-corso-breed-standard",
          role: "verified",
          locator: "Temperament: intelligent, active, even-minded, watch and protection dog, affectionate with family"
        },
        {
          id: "enci-cane-corso-italiano-standard",
          role: "verified",
          locator: "Dominant guardian temperament requiring firm, balanced leadership"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "cited",
          locator: "Breed trait ratings"
        },
        {
          id: "enci-cane-corso-italiano-standard",
          role: "cited",
          locator: "Guardian temperament and same-sex dog assertiveness"
        }
      ],
      verifiedOn: null,
      note: "Editorial 1–5 scores reflecting strong protectiveness, family loyalty, and cautious sociability with unfamiliar dogs and strangers."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "cited",
          locator: "Exercise, grooming, training, and socialization"
        },
        {
          id: "ccaa-cane-corso-health",
          role: "cited",
          locator: "Parent club care and management guidance"
        }
      ],
      verifiedOn: null,
      note: "Practical care and management guidance for a large guardian breed."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "verified",
          locator: "High energy and vigorous daily exercise needs"
        },
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "Working guardian athleticism"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "cited",
          locator: "Daily exercise guidance for athletic working mastiffs"
        }
      ],
      verifiedOn: null,
      note: "Estimated 60–90 minutes of daily physical and mental activity."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "cited",
          locator: "Large size, strong guarding instincts, and fenced yard need"
        }
      ],
      verifiedOn: null,
      note: "Editorial assessment based on adult size, territorial vigilance, and exercise requirements."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "verified",
          locator: "Secure fenced yard recommendation"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "Short, very dense coat with slight undercoat"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "cited",
          locator: "Strong family bond and companion needs"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "cited",
          locator: "Large-breed nutrition and bloat precautions"
        }
      ],
      verifiedOn: null,
      note: "General large-breed dietary management and bloat-mitigation guidance."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "cane-corso-dsra-mia3-study-2021",
          role: "verified",
          locator: "Genes (Basel) 2021;12(10):1497 (PMID 34680893): autosomal recessive MIA3 splice defect causing DSRA"
        },
        {
          id: "cane-corso-ncl-ppt1-study-2017",
          role: "verified",
          locator: "J Vet Intern Med 2017;31(1):149–157 (PMID 28008682): homozygous PPT1 splice donor mutation causing NCL1"
        },
        {
          id: "ccaa-cane-corso-health",
          role: "verified",
          locator: "CCAA CHIC requirements (Hips, Elbows, Cardiac, Patella, NCL DNA, DSRA DNA)"
        },
        {
          id: "ofa-cane-corso-chic-requirements",
          role: "verified",
          locator: "OFA CHIC Cane Corso panel (breed=COR)"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Distinguishes genetically established DSRA and NCL1 mutations from orthopedic, conformational, and parent-club-monitored conditions."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "cane-corso-dsra-mia3-study-2021",
          role: "verified",
          locator: "DSRA (MIA3 c.3822+3_3822+4del) clinical and genetic characterization"
        },
        {
          id: "cane-corso-ncl-ppt1-study-2017",
          role: "verified",
          locator: "NCL1 (PPT1 c.124+1G>A) clinical and genetic characterization"
        },
        {
          id: "ccaa-cane-corso-health",
          role: "verified",
          locator: "Hip dysplasia, elbow dysplasia, patella, cardiac, idiopathic epilepsy, demodectic mange, and bloat"
        },
        {
          id: "akc-cane-corso-breed-profile",
          role: "verified",
          locator: "Bloat/gastric torsion and eyelid conditions"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "ccaa-cane-corso-health",
          role: "cited",
          locator: "Pre-breeding health testing and general health management"
        },
        {
          id: "akc-cane-corso-breed-profile",
          role: "cited",
          locator: "Routine wellness, weight control, and bloat precautions"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ccaa-cane-corso-health",
          role: "verified",
          locator: "Six CCAA CHIC requirements: Hip Dysplasia (OFA/PennHIP), Elbow Dysplasia, Cardiac, Patellar Luxation, NCL DNA, DSRA DNA"
        },
        {
          id: "ofa-cane-corso-chic-requirements",
          role: "verified",
          locator: "OFA CHIC Cane Corso panel (breed=COR)"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Matches the exact six required tests published by the national breed club and OFA CHIC (ophthalmologist eye exam removed from mandatory list)."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "cited",
          locator: "Jaws/teeth: powerful jaws, slightly undershot bite"
        }
      ],
      verifiedOn: null,
      note: "General canine preventive dental care."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "cited",
          locator: "Ears: triangular, dropping, set high"
        },
        {
          id: "akc-cane-corso-breed-profile",
          role: "cited",
          locator: "Routine ear cleaning"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "cited",
          locator: "Short-coat and facial-fold hygiene"
        }
      ],
      verifiedOn: null,
      note: null
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "cited",
          locator: "Temperament, exercise, and training profile"
        },
        {
          id: "enci-cane-corso-italiano-standard",
          role: "cited",
          locator: "Dominant guardian temperament requiring experienced handler"
        }
      ],
      verifiedOn: null,
      note: "Editorial suitability ratings based on adult size, strength, and protective drive."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "verified",
          locator: "Latin 'cohors' etymology, Roman molossoid ancestry, plural 'Cani Corsi', 1970s revival"
        },
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "Historical Italian farm guardian role"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "Height (64–68 cm / 60–64 cm), weight (45–50 kg / 40–45 kg), temperament"
        },
        {
          id: "akc-cane-corso-breed-profile",
          role: "verified",
          locator: "Lifespan (9–12 years), training, exercise, living environment"
        },
        {
          id: "cane-corso-dsra-mia3-study-2021",
          role: "verified",
          locator: "DSRA (MIA3) autosomal recessive inheritance and DNA test"
        },
        {
          id: "cane-corso-ncl-ppt1-study-2017",
          role: "verified",
          locator: "NCL1 (PPT1) autosomal recessive inheritance and DNA test"
        },
        {
          id: "ccaa-cane-corso-health",
          role: "verified",
          locator: "Six recommended pre-breeding health screenings"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "All FAQ entries are written in original prose without registry or source names."
    }
  },

  updatedOn: "2026-11-26"
};
