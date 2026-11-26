import type { Breed } from "../schema/breed.types";

export const belgian_shepherd_dog_tervuren: Breed = {
  slug: "belgian-shepherd-dog-tervuren",
  name: "Belgian Tervuren",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Belgian Shepherd Dog (Tervueren)",
    "Chien de Berger Belge (Tervueren)",
    "Tervueren",
    "Terv",
    "Belgischer Schäferhund (Tervueren)"
  ],

  group: "Long-haired Belgian herding and working sheepdog",

  origin: {
    country: "Belgium",
    region:
      "Tervuren, near Brussels in the province of Flemish Brabant"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Belgian_Tervueren_Shepherd.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Belgian_Tervueren_Shepherd.jpg",
      title: "Belgian Tervueren Shepherd.jpg",
      description:
        "An adult Belgian Tervuren outdoors showing its long fawn-and-black-overlay coat, dark mask, and erect ears.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2017-12-08",
      uploadedOn: "2018-01-30",
      width: 1821,
      height: 1868,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Belgian_Tervueren_Shepherd.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/.",
      restrictions:
        "CC BY-SA 4.0 requires attribution and ShareAlike distribution if adapted.",
      metadataCheckedOn: "2026-11-26"
    }
  ],

  overview: {
    summary:
      "A square-built, agile Belgian sheepdog distinguished by its long fawn-to-mahogany double coat tipped with black, dark facial mask, sharp intelligence, and tireless drive.",

    description:
      "Athletic, finely chiseled, and balanced on a crisp square silhouette, the Belgian Tervuren pairs lean muscle with a proud, watchful stance. Its abundant long double coat—typically warm fawn to mahogany (or grey) brushed with black hair tips—forms a dramatic mane around the neck and chest, feathery leg furnishings, and a plumed tail. High-set triangular ears and dark almond eyes sit above a distinct black mask. Quick-witted, deeply devoted, and sensitive to its handler's tone, the Tervuren thrives on daily mental and physical work while remaining naturally observant and somewhat reserved with strangers.",

    history:
      "In the late nineteenth century, Belgian fanciers organized native farm and flock dogs into four coat-and-color varieties that shared the same athletic build and herding instinct. The long-haired fawn dogs took their name from Tervuren, a village outside Brussels where brewer M.F. Corbeel bred a foundational pair named 'Tom' and 'Poes'—dogs that pulled carts and guarded property alongside herding duties. Over the twentieth century, the variety proved itself in military messenger, sentry, and police roles, and today excels globally in agility, obedience, tracking, and herding while serving active households as a loyal companion.",

    originalPurpose:
      "Herding livestock, managing flocks, and guarding farms across rural Belgium",

    currentRoles: [
      "Agility, obedience, rally, tracking, and herding competitor",
      "Search-and-rescue and specialized working dog",
      "Alert home watchdog",
      "Devoted companion for highly active, experienced owners"
    ]
  },

  physical: {
    sizeCategory: "Medium to large",

    height: {
      unit: "cm",
      male: {
        min: 60,
        max: 66
      },
      female: {
        min: 56,
        max: 62
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 25,
        max: 30
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
      "Abundant, straight, fairly harsh long outer coat backed by a dense woolly undercoat; forms a pronounced neck ruff (fuller in males), feathered legs, and a richly plumed tail",

    coatLength: "Long",

    coatColors: [
      "Warm fawn to mahogany with black overlay (charbonné)",
      "Grey with black overlay",
      "Distinct black facial mask required on muzzle and framing the eyes",
      "Small white markings tolerated on the forechest and tips of the toes"
    ],

    sheddingLevel:
      "Moderate to high; sheds steadily year-round and blows its woolly undercoat heavily once or twice a year",

    droolingLevel:
      "Low; thin, tight, darkly pigmented lips keep drooling minimal",

    distinctiveFeatures: [
      "Square, harmonious, leanly muscled frame built for speed and agility without heaviness",
      "Long fawn, mahogany, or grey coat tipped with black overlay and a lush neck collarette",
      "Clearly defined black mask covering the muzzle; lack of mask is atypical",
      "Finely sculpted, long wedge-shaped head with parallel skull and muzzle planes",
      "Complete scissor bite with strong white teeth (pincer bite tolerated)",
      "Medium-sized, slightly oblique dark brown almond eyes with a keen, questioning look",
      "Small, high-set, stiffly erect triangular ears",
      "Firm, short, straight back and deep, moderately wide chest reaching the elbows",
      "Medium-length tail reaching at least to the hock, carried lower at rest and curving smoothly upward in motion without curling over the back",
      "Compact, rounded cat-like feet with sturdy dark nails"
    ]
  },

  temperament: {
    traits: [
      "Exceptionally bright, alert, and eager for daily purposeful tasks",
      "Deeply loyal, affectionate, and closely tuned to its owner's emotions",
      "Sensitive to harsh voices or heavy-handed discipline; thrives on upbeat guidance",
      "Watchful, observant, and naturally reserved around unfamiliar strangers",
      "High herding and motion drive requiring clear impulse-control training",
      "Playful and inventive, thriving on complex dog sports and problem-solving",
      "Naturally protective of home and family without unprovoked aggression"
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 5,
      independence: 3,
      trainability: 5,
      barking: 3,
      energy: 5
    }
  },

  care: {
    exercise: {
      level:
        "Very high; a tireless herding athlete needing daily vigorous aerobic exercise paired with demanding mental work",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Brisk trail running, long hikes, and structured conditioning",
        "Agility, obedience, rally, tracking, and scentwork training",
        "Organized herding lessons and interactive puzzle games",
        "Supervised fetch and recall drills inside a tall, securely fenced yard"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Brush thoroughly two to three times weekly with a pin brush and undercoat rake to prevent tangles in the ruff, behind the ears, and along the leg feathering; brush daily during heavy seasonal coat blows.",

      bathing:
        "Bathe every six to eight weeks or when dirty using a gentle dog shampoo, drying the dense undercoat thoroughly.",

      notes: [
        "Trim excess hair between the paw pads for traction on indoor floors and to keep mud or ice balls from packing.",
        "Check the erect triangular ears weekly for dust or wax buildup.",
        "Trim dark nails every two to three weeks to keep feet compact.",
        "Brush teeth several times a week with canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Moderate; learns cues rapidly yet demands an engaging, consistent, sensitive handler who avoids harsh force",

      tips: [
        "Keep training playful, creative, and reward-based; repetitive drilling bores this clever breed quickly.",
        "Avoid harsh corrections, which erode confidence and trust in a sensitive shepherd.",
        "Teach strong impulse control around joggers, bicycles, and running children early so herding nipping never becomes a habit.",
        "Give the dog a regular 'job' through dog sports, scent games, or advanced tricks."
      ],

      socialization:
        "Provide broad, positive, ongoing socialization starting in early puppyhood with varied people, neutral vaccinated dogs, urban sounds, and novel places so natural vigilance stays calm and confident."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Well suited to cool, damp, and temperate climates thanks to its weatherproof double coat",
        "Handles warm weather when provided shade, indoor cooling, fresh water, and exercise during cooler early-morning or evening hours"
      ],

      aloneTimeTolerance:
        "Low; strongly handler-focused and prone to anxiety, vocalizing, or destructive boredom if left alone for long workdays."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced diet formulated for active medium-to-large working breeds, tailored to age and training workload",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until about six months of age to support steady skeletal growth.",
      adult:
        "Two measured meals per day to fuel lean athleticism and keep single-meal stomach volume moderate.",
      senior:
        "Two portion-controlled meals daily adjusted for lower calorie burn and joint comfort."
    },

    guidelines:
      "Measure every meal accurately and feel under the thick double coat regularly to confirm a lean, athletic silhouette. Split daily rations into two meals, keep intense running separated from mealtimes by at least an hour to help lower bloat risk, and provide cool, fresh water continuously.",

    considerations: [
      "Keep weight lean to protect hips, elbows, and athletic stamina.",
      "Schedule calm rest before and after eating to reduce gastric dilatation-volvulus risk.",
      "Count training treats within the daily calorie budget.",
      "Adjust calories upward during heavy herding, agility, or endurance training."
    ],

    note:
      "Confirm exact portions with a veterinarian based on age, activity level, and body condition."
  },

  health: {
    overview:
      "The Belgian Tervuren is a generally hardy, athletic breed with a typical life expectancy of 12 to 14 years. Pre-breeding health priorities focus on hip and elbow dysplasia X-rays, specialist eye exams (screening for progressive retinal atrophy and cataracts), and thyroid evaluations. Peer-reviewed veterinary studies also document a breed predisposition to gastric carcinoma (stomach cancer) in Tervuren and Groenendael lines, alongside inherited idiopathic epilepsy and deep-chested bloat risk.",

    commonConditions: [
      "Gastric carcinoma — although uncommon in dogs overall, peer-reviewed veterinary research documents a clear breed predisposition in Belgian Tervuren and Groenendael lines (typically diagnosed around 9–10 years of age); persistent vomiting, gagging, or appetite loss warrants prompt veterinary endoscopy",
      "Hip and elbow dysplasia — developmental joint conditions monitored through pre-breeding radiographic evaluations",
      "Idiopathic epilepsy — recurrent seizures documented across Belgian Shepherd lines, managed with veterinary anticonvulsant therapy",
      "Hereditary eye conditions — progressive retinal atrophy (PRA), cataracts, and pannus monitored through annual specialist eye examinations",
      "Autoimmune thyroiditis (hypothyroidism) — underactive thyroid function causing weight gain, fatigue, or coat thinning, screened via blood thyroid panels",
      "Gastric dilatation-volvulus (bloat) — an acute, life-threatening stomach twisting risk in deep-chested athletic dogs"
    ],

    preventiveCare: [
      "Confirm that breeding parents have documented hip, elbow, specialist eye, and thyroid clearances.",
      "Seek timely veterinary evaluation—including endoscopy if advised—for any persistent vomiting, gagging, or unexplained weight loss in middle-aged or senior dogs.",
      "Feed two smaller daily meals and avoid vigorous running right before or after eating to help lower bloat risk.",
      "Keep body weight lean and maintain routine wellness visits, dental care, and parasite prevention."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "Annual eye examination by a veterinary ophthalmologist",
      "Thyroid panel evaluation"
    ],

    dentalCare:
      "Brush teeth several times a week with canine enzymatic toothpaste and arrange periodic veterinary dental checks to maintain the complete scissor bite and healthy gums.",

    earCare:
      "Check the stiffly erect triangular ears every week for dust, wax, or redness, cleaning gently with a veterinarian-approved solution when needed.",

    skinCare:
      "Part the long double coat weekly during brushing to spot ticks, tangles, or skin irritation, and dry the woolly undercoat thoroughly after baths."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Experienced owners familiar with high-drive, sensitive herding breeds",
      "Runners, hikers, and dog-sport enthusiasts interested in agility, obedience, tracking, or herding",
      "Active households with a tall, securely fenced yard",
      "Families with older, respectful children who can provide daily structured training"
    ],

    notIdealFor: [
      "First-time dog owners looking for an easygoing, low-drive pet",
      "Households away from home for long workdays without midday activity",
      "Sedentary owners or apartments without substantial daily outdoor outlets",
      "Families with very young toddlers whose fast, unpredictable running may trigger herding behavior"
    ]
  },

  funFacts: [
    "The variety is named for the Belgian village of Tervuren near Brussels, home of early breeder M.F. Corbeel and his foundation dogs 'Tom' and 'Poes.'",
    "In most countries worldwide, the Tervuren is classified as one of four coat varieties of a single Belgian Shepherd breed alongside the Malinois, Groenendael, and Laekenois, whereas North America recognizes it as a separate breed.",
    "The black-tipped coat overlay is traditionally called 'charbonné' (charcoaled), giving each fawn or mahogany hair a dark tip that shifts shade as the dog moves.",
    "Foundation sire 'Tom' reportedly pulled his owner's beer cart by day and guarded the brewery at night—capturing the breed's all-around working spirit.",
    "The first dog to earn a national herding championship title in the United States was a Belgian Tervuren."
  ],

  faq: [
    {
      question: "How does a Belgian Tervuren differ from a Belgian Malinois?",
      answer:
        "They share the same Belgian Shepherd ancestry, square athletic build, and high working drive, but the Tervuren carries a long, plush double coat with a neck ruff and plumed tail while the Malinois has a short, smooth coat."
    },
    {
      question: "How big does a Belgian Tervuren get?",
      answer:
        "Adult males stand 60 to 66 cm at the shoulder (ideal 62 cm) and weigh about 25 to 30 kg, while adult females stand 56 to 62 cm (ideal 58 cm) and weigh about 20 to 25 kg."
    },
    {
      question: "How long does a Belgian Tervuren live?",
      answer:
        "With good nutrition, lean weight management, and regular veterinary care, the breed typically lives 12 to 14 years."
    },
    {
      question: "Do Belgian Tervurens shed heavily?",
      answer:
        "Yes. They shed moderately year-round and blow their dense woolly undercoat heavily once or twice a year, requiring brushing two to three times weekly—and daily during seasonal sheds."
    },
    {
      question: "Is a Belgian Tervuren a good choice for first-time owners or apartments?",
      answer:
        "Usually no. Their intense intelligence, sensitivity, vigilance, and need for 60 to 90 minutes (or more) of daily physical and mental work fit an experienced handler with a fenced yard best."
    },
    {
      question: "What health screenings and concerns matter most for a Belgian Tervuren?",
      answer:
        "Core pre-breeding screenings include hip and elbow dysplasia X-rays, specialist eye exams, and thyroid panels. Owners should also watch for signs of epilepsy, bloat, and persistent stomach upset (vomiting or appetite loss), as the breed has a documented predisposition to gastric carcinoma."
    }
  ],

  references: [
    "fci-belgian-shepherd-dog-standard-15",
    "fci-belgian-shepherd-dog-nomenclature",
    "srhk-belgian-shepherd-breed-standard",
    "akc-belgian-tervuren-breed-standard",
    "akc-belgian-tervuren-breed-profile",
    "the-kennel-club-belgian-shepherd-dog-tervueren-breed-standard",
    "ofa-belgian-tervuren-chic-requirements",
    "abtc-belgian-tervuren-health",
    "belgian-shepherd-gastric-carcinoma-study-2021",
    "natureserve-canis-lupus-familiaris",
    "wikimedia-belgian-tervueren-shepherd-canarian",
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
          id: "fci-belgian-shepherd-dog-nomenclature",
          role: "verified",
          locator: "CHIEN DE BERGER BELGE (15) — Variety: Tervueren; German: BELGISCHER SCHÄFERHUND"
        },
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "Belgian Tervuren"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-nomenclature",
          role: "verified",
          locator: "Group 1 Sheepdogs and Cattledogs, Section 1 Sheepdogs, subject to a working trial"
        },
        {
          id: "akc-belgian-tervuren-breed-standard",
          role: "verified",
          locator: "Herding Group"
        },
        {
          id: "the-kennel-club-belgian-shepherd-dog-tervueren-breed-standard",
          role: "verified",
          locator: "Pastoral Group"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group: Herding"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "User-facing group text avoids registry numbers and group titles."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-nomenclature",
          role: "verified",
          locator: "Country of origin: Belgium"
        },
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "Named for Tervuren, near Brussels"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: Belgium"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "General appearance, coat (Tervueren), working heritage, and temperament"
        },
        {
          id: "srhk-belgian-shepherd-breed-standard",
          role: "verified",
          locator: "Belgian Shepherd varieties and Tervueren heritage"
        },
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "About the breed and history (M.F. Corbeel, Tom and Poes)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "All user-facing overview prose is newly written in original wording."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Square proportions, head, tail, long coat with woolly undercoat, fawn/grey with black overlay and strict black mask (lack of mask disqualifying)"
        },
        {
          id: "akc-belgian-tervuren-breed-standard",
          role: "verified",
          locator: "Coat, color (rich fawn to russet mahogany with black overlay), and conformation"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "GET /breeds/{id}/colours"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Coat colors strictly follow FCI Standard No. 15 and AKC (fawn/mahogany or grey with black overlay and required black mask); generic colors from The Dog API are excluded."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Ideal height: Males 62 cm (limits 60–66 cm); Females 58 cm (limits 56–62 cm)"
        },
        {
          id: "akc-belgian-tervuren-breed-standard",
          role: "cited",
          locator: "Height: Males 24–26 inches; Females 22–24 inches"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric: Males 61–66 cm; Females 56–61 cm"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Exact FCI Standard No. 15 height limits in cm (60–66 cm / 56–62 cm); The Dog API lists 61–66 cm / 56–61 cm."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Weight: Males about 25–30 kg; Females about 20–25 kg"
        },
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "cited",
          locator: "Weight: 45–75 lb overall"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.weight.metric: Males 25–34 kg; Females 20–27 kg"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Exact FCI Standard No. 15 weight range in kg (25–30 kg / 20–25 kg); The Dog API lists 25–34 kg / 20–27 kg."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12–14 years"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span: 12–14 years"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Both AKC profile and The Dog API report 12–14 years."
    },

    "physical.sheddingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Long double coat with dense woolly undercoat"
        },
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "Seasonal undercoat shedding profile"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Thin, well-tightened, strongly pigmented lips"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Watchful, active, bursting with energy, innate sheepdog and guardian instinct"
        },
        {
          id: "akc-belgian-tervuren-breed-standard",
          role: "verified",
          locator: "Intelligent, courageous, alert, devoted to owner, vigilant with strangers"
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
          id: "akc-belgian-tervuren-breed-profile",
          role: "cited",
          locator: "Breed trait ratings"
        }
      ],
      verifiedOn: null,
      note: "Editorial 1–5 scores reflecting high energy, high trainability, and strong protective alertness."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "cited",
          locator: "Exercise, grooming, training, and nutrition guidance"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.exercise.level": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "High-energy working sheepdog"
        },
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "Very high daily physical and mental exercise needs"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "cited",
          locator: "Daily vigorous exercise and mental stimulation recommendations"
        }
      ],
      verifiedOn: null,
      note: "Estimated 60–90 minutes (or more) of daily aerobic and mental work."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "cited",
          locator: "High working drive and outdoor exercise demands"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
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
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Weatherproof long double coat with woolly undercoat"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "cited",
          locator: "Closely bonded, handler-focused working dog"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "cited",
          locator: "Active working-breed nutrition and bloat awareness"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "Health: hip dysplasia, elbow dysplasia, progressive retinal atrophy, epilepsy; Recommended Health Tests: Hip, Elbow, Ophthalmologist, Thyroid"
        },
        {
          id: "belgian-shepherd-gastric-carcinoma-study-2021",
          role: "verified",
          locator: "Acta Vet Scand 2021;63(1):7 (PMID 33563310): documented predisposition to gastric carcinoma in Belgian Shepherd Tervuren and Groenendael varieties"
        },
        {
          id: "ofa-belgian-tervuren-chic-requirements",
          role: "verified",
          locator: "OFA CHIC Belgian Tervuren panel (Hip, Elbow, Eye, Thyroid)"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Combines national breed club CHIC testing with peer-reviewed evidence on gastric carcinoma predisposition."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "belgian-shepherd-gastric-carcinoma-study-2021",
          role: "verified",
          locator: "Gastric carcinoma predisposition in Tervuren/Groenendael; vomiting warrants timely endoscopy"
        },
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "Hip dysplasia, elbow dysplasia, progressive retinal atrophy, epilepsy"
        },
        {
          id: "ofa-belgian-tervuren-chic-requirements",
          role: "verified",
          locator: "Thyroid, eye, hip, and elbow screening conditions"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "cited",
          locator: "Health screening, ear checks, tooth brushing, bloat precautions"
        },
        {
          id: "belgian-shepherd-gastric-carcinoma-study-2021",
          role: "cited",
          locator: "Prompt veterinary evaluation for persistent vomiting or appetite loss"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "Recommended Health Tests From National Breed Club: Hip Evaluation, Elbow Evaluation, Ophthalmologist Evaluation, Thyroid Evaluation"
        },
        {
          id: "ofa-belgian-tervuren-chic-requirements",
          role: "verified",
          locator: "OFA CHIC Belgian Tervuren panel (breed=BT)"
        },
        {
          id: "abtc-belgian-tervuren-health",
          role: "cited",
          locator: "ABTC CHIC health testing participation"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "cited",
          locator: "Strong white teeth, complete scissor bite"
        },
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "cited",
          locator: "Regular tooth brushing"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "cited",
          locator: "Regular ear checks for signs of infection"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "cited",
          locator: "Long double coat with dense woolly undercoat"
        }
      ],
      verifiedOn: null,
      note: null
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "cited",
          locator: "High energy, training, and family traits"
        }
      ],
      verifiedOn: null,
      note: "Editorial suitability ratings based on intense working drive, sensitivity, and daily exercise demands."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "Tervuren village origin, M.F. Corbeel's Tom & Poes, first US herding champion"
        },
        {
          id: "fci-belgian-shepherd-dog-nomenclature",
          role: "verified",
          locator: "Four Belgian Shepherd varieties (Groenendael, Laekenois, Malinois, Tervueren)"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Height (60–66 cm / 56–62 cm), weight (25–30 kg / 20–25 kg), coat, and varieties"
        },
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "Lifespan (12–14 years), grooming, exercise, and 4 recommended health tests"
        },
        {
          id: "belgian-shepherd-gastric-carcinoma-study-2021",
          role: "verified",
          locator: "Gastric carcinoma predisposition in Tervuren lines"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "All FAQ entries are written in original prose without source or registry names."
    }
  },

  updatedOn: "2026-11-26"
};
