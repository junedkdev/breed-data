import type { Breed } from "../schema/breed.types";

export const greater_swiss_mountain_dog: Breed = {
  slug: "greater-swiss-mountain-dog",
  name: "Greater Swiss Mountain Dog",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Grosser Schweizer Sennenhund",
    "Great Swiss Mountain Dog",
    "Grand Bouvier Suisse",
    "Gran Boyero Suizo",
    "Swissy",
    "Swissie",
    "GSMD"
  ],

  group: "Swiss mountain and cattle draft dogs (without working trial)",

  origin: {
    country: "Switzerland",
    region: "Swiss Alps and midland valleys, Switzerland"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Greater_Swiss_Mountain_Dog.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Greater_Swiss_Mountain_Dog.jpg",
      title: "Greater Swiss Mountain Dog.jpg",
      description:
        "An adult female Greater Swiss Mountain Dog standing outdoors, showing its tricolored black, rust, and white coat.",
      creator: "Swissy",
      uploader: "Swissy",
      capturedOn: "2007-05-11",
      uploadedOn: "2007-05-16",
      width: 1466,
      height: 985,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Swissy, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Greater_Swiss_Mountain_Dog.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    }
  ],

  overview: {
    summary:
      "A giant, heavy-boned, tricolored Swiss draft and drover dog prized for its immense pulling strength, dry-mouthed alpine practicality, steady vigilance, and deep devotion to its family.",

    description:
      "The largest and oldest of Switzerland's four tricolored mountain breeds, the Greater Swiss Mountain Dog has a sturdy, well-muscled draft build slightly longer than it is tall yet agile enough for steep mountain pastures. Its dense medium-length double coat pairs a jet-black base with symmetrical rich rust and crisp white markings across the face, chest, legs, and tail tip. A broad, flat skull and strong blunt muzzle frame gentle almond-shaped brown eyes and high-set triangular drop ears, with clean, close-fitting lips that make it a dry-mouthed breed. Faithful, calm, and watchful at home, it prefers living closely with its people while enjoying steady outdoor activity.",

    history:
      "Widely believed to descend from large Molossian mastiff-type dogs brought across the Alps by Roman legions and crossed with local Swiss farm dogs, the Greater Swiss Mountain Dog served Alpine farmers, herdsmen, and butchers for centuries—pulling heavy market carts, driving livestock, and guarding homesteads. Mechanization nearly erased the breed by the late 1800s until 1908, when Swiss cynologist Dr. Albert Heim spotted two short-haired tricolored dogs at a Zurich exhibition and recognized them as the vanishing Grosser Schweizer Sennenhund, leading to separate registration in Switzerland in 1909. Enthusiasts introduced the breed to the United States in 1968, where it has grown steadily as a versatile drafting, herding, and family companion.",

    originalPurpose:
      "All-purpose Alpine farm dog used for hauling heavy carts, droving cattle, and guarding rural homesteads.",

    currentRoles: [
      "Drafting, carting, and weight-pulling working dog",
      "Farm helper, livestock drover, and hiking pack carrier",
      "Watchful family guardian and devoted companion",
      "Participant in obedience, herding, and agility"
    ]
  },

  physical: {
    sizeCategory: "Giant",

    height: {
      unit: "cm",
      male: {
        min: 65,
        max: 72
      },
      female: {
        min: 60,
        max: 68
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 115,
        max: 140
      },
      female: {
        min: 85,
        max: 110
      }
    },

    lifespanYears: {
      min: 8,
      max: 11
    },

    coatType:
      "Dense medium-length double coat with a thick outer coat and a close, insulating undercoat (dark gray preferred, though light gray or tawny may occur).",

    coatLength: "Medium",

    coatColors: [
      "Tricolor (black base with symmetrical rich rust-red and white markings)",
      "White markings typically on the blaze and muzzle, unbroken from throat to chest, on the feet, and at the tail tip (a white neck patch or collar is tolerated)",
      "Rich rust-red markings above the eyes, on the cheeks, inside the ears, on both sides of the forechest, on all four legs, and beneath the tail"
    ],

    sheddingLevel:
      "Moderate to high; sheds steadily year-round and blows its thick undercoat heavily about twice a year",

    droolingLevel:
      "Low; a dry-mouthed breed with clean, close-fitting, non-pendulous black lips",

    distinctiveFeatures: [
      "Heavy-boned, muscular draft-and-drover silhouette slightly longer than tall in a 10:9 length-to-height ratio",
      "Withers height of 65 to 72 cm for males and 60 to 68 cm for females",
      "Adult weight of 115 to 140 lb for males and 85 to 110 lb for females",
      "Striking black, rich rust, and white tricolored double coat with a dense undercoat",
      "Flat, broad skull matching the strong blunt muzzle in length (1:1) and about twice its width (2:1), with a slight stop",
      "Clean, close-fitting black lips (dry-mouthed) and strong jaws with a complete scissor bite",
      "Medium-sized, almond-shaped brown eyes with close-fitting black rims and a gentle, alert gaze",
      "High-set, medium-sized triangular drop ears hanging close to the cheeks at rest and lifted forward when alert",
      "Deep, broad chest reaching roughly half the dog's height at the withers, level topline, and broad strong loin",
      "Thick, slightly tapering tail reaching the hocks, carried down at rest and raised gently in motion without curling over the back",
      "Straight, sturdy forelegs and muscular hindquarters with round, compact feet and arched toes"
    ]
  },

  temperament: {
    traits: [
      "Faithful, dependable, and deeply family-oriented",
      "Bold, calm, and self-confident in everyday life",
      "Alert and vigilant watchdog with a deep voice",
      "Self-assured with unfamiliar strangers without shyness",
      "Good-natured and patient with familiar children",
      "Food-motivated yet capable of an independent, stubborn streak",
      "Slow to mature both physically and mentally",
      "Strong natural instinct to pull and work alongside its owner"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 4,
      independence: 3,
      trainability: 3,
      barking: 3,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "Moderate; a steady, powerful hiking and drafting partner rather than a high-speed jogging or bicycling dog",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Daily neighborhood walks and steady woodland trail hikes in cool weather",
        "Carting, drafting, and weight pulling once adult skeletal maturity is reached",
        "Carrying a fitted dog pack on moderate hikes",
        "Obedience, herding, and low-impact fenced yard play"
      ]
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush periodically week to week; during the twice-yearly undercoat blow, bathe, blow dry thoroughly, and comb out with an undercoat rake or shedding tool.",

      bathing:
        "Bathe occasionally when soiled and during heavy seasonal sheds, drying the dense undercoat completely.",

      notes: [
        "Avoid shaving the double coat, which insulates against cold and shields the skin.",
        "Trim thick nails regularly and check drop ears every week for wax or moisture.",
        "Brush teeth regularly with canine enzymatic toothpaste.",
        "Provide thick, supportive bedding to help prevent elbow calluses on heavy joints."
      ]
    },

    training: {
      difficulty:
        "Moderate; food-motivated and willing to work, yet large and occasionally stubborn, requiring patient, determined, consistent leadership",

      tips: [
        "Use valued food rewards and start puppy classes and leash manners early before giant adult weight arrives.",
        "Avoid harness-style walking devices for everyday leash training—as a draft breed, wearing a harness outside draft work encourages pulling harder.",
        "Stay more patient and consistent than a stubborn adolescent without resorting to harsh physical force.",
        "Protect growing joints by avoiding forced running, repetitive jumping, and heavy draft loads until skeletal maturity."
      ],

      socialization:
        "Provide diligent, positive early exposure to diverse people, calm dogs, new environments, and household routines so natural vigilance matures into steady, confident manners."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cold and snowy climates, where the thick double coat thrives",
        "Temperate climates",
        "Warm climates only with indoor air conditioning, deep shade, cool water, and strictly limited activity in hot weather"
      ],

      aloneTimeTolerance:
        "Low to moderate; strongly family-oriented and happiest living inside with its people rather than kenneled or left isolated."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced giant-breed diet—commercial kibble, veterinarian-guided raw/fresh, or a balanced mix—strictly portioned to prevent obesity.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until about six months old, then two daily meals on a giant-breed growth formula.",
      adult:
        "Two measured meals daily to avoid large single stomach loads and digestive upset.",
      senior:
        "Two portion-controlled meals daily adjusted for lower calorie burn and joint comfort."
    },

    guidelines:
      "Avoid overfeeding—the most common feeding mistake in this breed, leading to loose stools and obesity that strain heavy joints. Measure every meal, divide daily rations into two meals, rest the dog before and after eating as a precaution against bloat, and keep fresh water available at all times.",

    considerations: [
      "Keep weight strictly lean, as obesity is one of the biggest preventable health hazards for this giant breed.",
      "Avoid rapid puppy growth and do not add calcium supplements unless prescribed by a veterinarian.",
      "Rest the dog before and after meals to help reduce bloat risk.",
      "Transition between food formulas gradually over five to seven days."
    ],

    note:
      "Portions should match age, climate, and drafting or hiking workload. Consult a veterinarian if loose stools or weight gain appear."
  },

  health: {
    overview:
      "The Greater Swiss Mountain Dog is generally sturdy for a giant breed with a typical life expectancy of 8 to 11 years and no single exclusive breed-only genetic disorder, though it shares major large- and giant-breed health priorities. Splenic torsion (independent of stomach torsion) occurs more often than in most other breeds, urinary incontinence is fairly common in puppies and spayed females, and breeders routinely screen for hip dysplasia, elbow dysplasia, shoulder osteochondrosis (OCD), and eye conditions while watching for bloat and epilepsy.",

    commonConditions: [
      "Splenic torsion — twisting of the spleen (separate from gastric torsion), reported more frequently in this breed than in most others and requiring urgent veterinary care",
      "Gastric dilatation-volvulus (bloat) — an acute, life-threatening twisting of the stomach seen in deep-chested giant breeds; owners should learn early warning signs",
      "Orthopedic developmental disorders (hip dysplasia, elbow dysplasia, and shoulder osteochondrosis / OCD) — joint abnormalities during rapid growth screened radiographically prior to breeding",
      "Urinary incontinence — fairly common in puppies and spayed females, generally manageable with veterinary guidance",
      "Idiopathic epilepsy — recurrent seizures that can appear across pedigrees (no DNA marker currently available), managed with veterinary medication",
      "Eye conditions — occasional eyelid or lens abnormalities monitored through specialist veterinary eye examinations"
    ],

    preventiveCare: [
      "Verify that breeding parents have completed recommended hip, elbow, shoulder, and specialist ophthalmologist evaluations.",
      "Prevent obesity through strict meal measurement and split daily food into two meals with rest before and after eating.",
      "Protect immature giant-breed joints by avoiding heavy jumping and forced jogging during the first 18 to 24 months.",
      "Know the emergency signs of bloat and splenic torsion, check drop ears weekly, and maintain annual veterinary wellness checks."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "Radiographic shoulder (OCD) evaluation prior to breeding",
      "Specialist veterinary ophthalmologist eye examination"
    ],

    dentalCare:
      "Brush teeth regularly with canine enzymatic toothpaste and schedule periodic veterinary dental exams to keep the strong scissor bite and gums healthy.",

    earCare:
      "Inspect the triangular drop ears weekly for wax buildup, moisture, or redness and clean gently with a veterinarian-approved solution.",

    skinCare:
      "Check the skin beneath the dense double coat during brushing for parasites or irritation, drying the undercoat thoroughly after baths."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Experienced owners ready to train and manage a giant, strong-willed draft breed with steady patience",
      "Homes with a spacious, securely fenced yard in cool or temperate climates",
      "Active families with respectful children seeking a loyal, steady hiking and home companion",
      "Enthusiasts interested in carting, drafting, backpacking, or weight pulling"
    ],

    notIdealFor: [
      "First-time or tentative owners unprepared for giant adult strength and slow maturity",
      "Apartments or small urban homes without ample space",
      "Runners or cyclists looking for a high-speed endurance jogging partner",
      "Households unwilling to manage heavy twice-yearly undercoat shedding"
    ]
  },

  funFacts: [
    "The Greater Swiss Mountain Dog is the largest and oldest of the four Swiss Sennenhund breeds—alongside the Bernese Mountain Dog, Appenzeller Sennenhund, and Entlebucher Mountain Dog—and helped shape early St. Bernard and Rottweiler lines.",
    "Because it is a natural draft breed, trainers advise against walking it on a harness for routine leash training—wearing a harness outside carting simply encourages it to pull harder.",
    "By the late 1800s the breed had nearly vanished until 1908, when two dogs entered as 'short-haired Bernese Mountain Dogs' caught the eye of Swiss expert Dr. Albert Heim and sparked its revival.",
    "Unlike many giant mastiff-type breeds, the Greater Swiss Mountain Dog is a dry-mouthed breed with clean, tight-fitting lips.",
    "First imported to the United States in 1968 after enthusiasts spotted the breed at a show in Frankfurt, it remains a prized carting and drafting athlete."
  ],

  faq: [
    {
      question: "What kind of dog is a Greater Swiss Mountain Dog?",
      answer:
        "Often nicknamed a 'Swissy,' it is a giant, heavy-boned, tricolored Swiss draft and drover breed known for its pulling power, dry mouth, steady watchfulness, and loyal family temperament."
    },
    {
      question: "How is the Greater Swiss Mountain Dog different from the Bernese Mountain Dog?",
      answer:
        "Both share Switzerland's classic black, rust, and white tricolor pattern, but the Greater Swiss Mountain Dog is larger and heavier-boned with a shorter, dense double coat instead of the Bernese's long silky coat."
    },
    {
      question: "How tall and heavy does a Greater Swiss Mountain Dog get?",
      answer:
        "Adult males stand 65 to 72 cm at the withers and weigh 115 to 140 lb, while adult females stand 60 to 68 cm and weigh 85 to 110 lb."
    },
    {
      question: "What is the average lifespan of a Greater Swiss Mountain Dog?",
      answer:
        "Typical life expectancy is 8 to 11 years, consistent with most giant working breeds when supported with lean weight control and preventive veterinary care."
    },
    {
      question: "Do Greater Swiss Mountain Dogs shed and drool?",
      answer:
        "They are dry-mouthed with minimal drooling, but their thick double coat sheds year-round and blows heavily about twice a year, needing a bath, blow-out, and thorough undercoat raking during seasonal sheds."
    },
    {
      question: "Can a Greater Swiss Mountain Dog live in an apartment?",
      answer:
        "Generally no. Its giant size, deep alert bark, and need for space fit far better in a house with a securely fenced yard."
    },
    {
      question: "How much exercise does a Greater Swiss Mountain Dog need?",
      answer:
        "Plan for 45 to 60 minutes of moderate, steady daily exercise such as brisk walks, woodland hikes, or adult drafting work—avoiding high-speed marathon jogging or heavy puppy impact."
    },
    {
      question: "What health screenings are recommended for Greater Swiss Mountain Dogs?",
      answer:
        "Core pre-breeding evaluations include hip, elbow, and shoulder (OCD) radiographs plus a specialist veterinary ophthalmologist eye exam, alongside owner awareness of bloat, splenic torsion, and epilepsy."
    }
  ],

  references: [
    "natureserve-canis-lupus-familiaris",
    "fci-greater-swiss-mountain-dog-official-standard",
    "fci-greater-swiss-mountain-dog-nomenclature",
    "akc-greater-swiss-mountain-dog-breed-standard",
    "akc-greater-swiss-mountain-dog-breed-profile",
    "ukc-greater-swiss-mountain-dog-breed-standard",
    "gsmdca-greater-swiss-mountain-dog-health",
    "ofa-greater-swiss-mountain-dog-chic-requirements",
    "wikimedia-greater-swiss-mountain-dog-swissy",
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
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "verified",
          locator: "Standard heading: GROSSER SCHWEIZER SENNENHUND (Great Swiss Mountain Dog)"
        },
        {
          id: "fci-greater-swiss-mountain-dog-nomenclature",
          role: "verified",
          locator: "Official nomenclature (No. 58): GREAT SWISS MOUNTAIN DOG, GRAND BOUVIER SUISSE, GROSSER SCHWEIZER SENNENHUND, GRAN BOYERO SUIZO"
        },
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "verified",
          locator: "About the Breed: Swissy / Swissies, GSMD"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names: Grosser Schweizer Sennenhund, Swissy"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified across FCI Standard No. 58, FCI Nomenclature, AKC breed profile, and The Dog API."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 2 Section 3 Swiss Mountain- and Cattledogs, without working trial"
        },
        {
          id: "fci-greater-swiss-mountain-dog-nomenclature",
          role: "verified",
          locator: "Group 2, Section 3 Swiss Mountain- and Cattledogs, not subject to a working trial"
        },
        {
          id: "akc-greater-swiss-mountain-dog-breed-standard",
          role: "verified",
          locator: "Working Group"
        },
        {
          id: "ukc-greater-swiss-mountain-dog-breed-standard",
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
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "verified",
          locator: "ORIGIN: Switzerland"
        },
        {
          id: "fci-greater-swiss-mountain-dog-nomenclature",
          role: "verified",
          locator: "Country of origin: SWITZERLAND"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: Switzerland"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY (1908/1909 SKG recognition, Dr. Albert Heim), GENERAL APPEARANCE"
        },
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "verified",
          locator: "About the Breed, History, Did You Know (1968 US import, 1995 AKC recognition)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Written in original prose grounded in FCI Standard No. 58 and AKC records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "verified",
          locator: "HEAD (1:1 length, 2:1 width), LIPS (barely developed, well fitting), COAT, COLOUR (tricolour, black main colour), SIZE"
        },
        {
          id: "akc-greater-swiss-mountain-dog-breed-standard",
          role: "verified",
          locator: "Proportion (10:9), Head (dry-mouthed), Coat (1.25-2 in topcoat with undercoat), Color (black, rich rust, white)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.coat_colors (broader unstandardized colour list excluded in favor of official black/rust/white tricolor)"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Conformation and tricolor pattern follow FCI Standard No. 58 and AKC Official Standard, excluding The Dog API's broad unstandardized colour list."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "verified",
          locator: "SIZE: Height at withers — Males 65-72 cm, Females 60-68 cm"
        },
        {
          id: "akc-greater-swiss-mountain-dog-breed-standard",
          role: "cited",
          locator: "Size: Dogs 25.5 to 28.5 inches; Bitches 23.5 to 27 inches"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height: male 65-72 cm, female 60-69 cm"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Preserved in published centimetres from FCI Standard No. 58 (65-72 cm males, 60-68 cm females), which supersedes The Dog API's 60-69 cm female upper bound."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "verified",
          locator: "Weight: 115-140 pounds (male), 85-110 pounds (female)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.weight: male 52-64 kg, female 39-50 kg"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "FCI Standard No. 58 and AKC Official Standard do not fix weight. Stored in published pounds (115-140 lb males, 85-110 lb females) directly from the AKC breed profile per Rule 9; The Dog API lists 52-64 kg / 39-50 kg."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 8-11 years"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span: 8-11 years"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Consistent across AKC and The Dog API."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "verified",
          locator: "Grooming: double coated, blows undercoat usually twice a year"
        },
        {
          id: "akc-greater-swiss-mountain-dog-breed-standard",
          role: "verified",
          locator: "Coat: dense topcoat with undercoat"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-standard",
          role: "verified",
          locator: "Head: Lips are clean and as a dry-mouthed breed, flews are only slightly developed"
        },
        {
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "verified",
          locator: "Lips: Barely developed, well fitting, not pendulous"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Explicitly described as a dry-mouthed breed in the official AKC standard."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Self-confident, alert, watchful, fearless, good-natured, devoted, self-assured with strangers"
        },
        {
          id: "akc-greater-swiss-mountain-dog-breed-standard",
          role: "verified",
          locator: "Temperament: Bold, faithful, willing worker, alert and vigilant"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament: Gentle, loyal, confident, alert, friendly"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics ratings"
        }
      ],
      verifiedOn: null,
      note: "Editorial 1-5 scores reflecting verified draft-and-drover temperament, high family devotion, and watchful guarding instincts."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "cited",
          locator: "Grooming ('wash and wear' with twice-yearly blow-out), Exercise (moderate hiker, not marathon runner), Training (food-motivated, avoid walking harnesses)"
        },
        {
          id: "gsmdca-greater-swiss-mountain-dog-health",
          role: "cited",
          locator: "Joint protection during giant-breed growth"
        }
      ],
      verifiedOn: null,
      note: "Combines kennel club draft-breed training, grooming, and joint-protection guidance."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "verified",
          locator: "Exercise: requires moderate exercise; better hiking companion than marathon-running or bicycling partner"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "cited",
          locator: "Moderate daily exercise recommendations"
        }
      ],
      verifiedOn: null,
      note: "Editorial estimate of 45 to 60 minutes daily for a healthy adult giant draft dog."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "cited",
          locator: "Giant size and outdoor space needs"
        }
      ],
      verifiedOn: null,
      note: "Editorial assessment that giant size and deep alert barking make apartment living generally unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "verified",
          locator: "Exercise and family living space guidance"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "verified",
          locator: "COAT: Dense double coat adapted to Swiss Alpine winters"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "cited",
          locator: "Family-oriented companion traits"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "cited",
          locator: "Nutrition: overfeeding is the most serious issue, causing loose stools and obesity"
        }
      ],
      verifiedOn: null,
      note: "Incorporates AKC warning against overfeeding and obesity alongside giant-breed bloat precautions."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "cited",
          locator: "Nutrition and giant-breed meal splitting"
        }
      ],
      verifiedOn: null,
      note: "Standard giant-breed life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "verified",
          locator: "Health: no single breed-specific disorder; splenic torsion occurs more often than in other breeds; bloat; urinary incontinence in puppies/spayed bitches; epilepsy; Recommended Tests: Hip, Elbow, Ophthalmologist, Shoulder"
        },
        {
          id: "gsmdca-greater-swiss-mountain-dog-health",
          role: "verified",
          locator: "Orthopedic Challenges: hip dysplasia, elbow dysplasia, shoulder OCD"
        },
        {
          id: "ofa-greater-swiss-mountain-dog-chic-requirements",
          role: "verified",
          locator: "OFA CHIC health screening program"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Synthesizes AKC, GSMDCA Health Foundation, and OFA CHIC screening data."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "verified",
          locator: "Splenic torsion, bloat, urinary incontinence, epilepsy, orthopedic conditions"
        },
        {
          id: "gsmdca-greater-swiss-mountain-dog-health",
          role: "verified",
          locator: "Hip dysplasia, elbow dysplasia, shoulder osteochondrosis (OCD)"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Distinguishes elevated breed risks (splenic torsion, urinary incontinence, giant-breed orthopedic OCD/dysplasia) from general giant-breed concerns."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "cited",
          locator: "Nutrition (obesity prevention), bloat awareness, grooming"
        },
        {
          id: "gsmdca-greater-swiss-mountain-dog-health",
          role: "cited",
          locator: "Growth-stage joint protection"
        }
      ],
      verifiedOn: null,
      note: "Preventive care tailored to giant draft breeds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "verified",
          locator: "Recommended Health Tests From the National Breed Club: Hip Evaluation, Elbow Evaluation, Ophthalmologist Evaluation, Shoulder Evaluation"
        },
        {
          id: "ofa-greater-swiss-mountain-dog-chic-requirements",
          role: "verified",
          locator: "OFA CHIC screening panel (hips, elbows, shoulders, eyes)"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Matches all four National Breed Club recommended evaluations."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "cited",
          locator: "Grooming: regular teeth cleaning"
        }
      ],
      verifiedOn: null,
      note: "Standard canine dental hygiene guidance."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "cited",
          locator: "Grooming: regular ear cleaning"
        }
      ],
      verifiedOn: null,
      note: "Routine drop-ear care guidance."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "cited",
          locator: "Grooming: dense double coat, seasonal blow-out and thorough drying"
        }
      ],
      verifiedOn: null,
      note: "General skin and double-coat care guidance."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "cited",
          locator: "About the Breed, Exercise, Training, Grooming"
        }
      ],
      verifiedOn: null,
      note: "Editorial suitability assessment reflecting giant size, slow maturity, and draft working heritage."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "verified",
          locator: "Training (avoid harnesses outside draft work), Did You Know (Dr. Albert Heim revival, 1968 US import, four Sennenhund breeds)"
        },
        {
          id: "akc-greater-swiss-mountain-dog-breed-standard",
          role: "verified",
          locator: "Head: dry-mouthed breed"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified breed history and practical draft-breed facts written in original prose."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-greater-swiss-mountain-dog-official-standard",
          role: "verified",
          locator: "Origin, height (65-72 cm / 60-68 cm), tricolor coat"
        },
        {
          id: "akc-greater-swiss-mountain-dog-breed-profile",
          role: "verified",
          locator: "Weight (115-140 lb / 85-110 lb), lifespan (8-11 years), moderate exercise, grooming, recommended health tests"
        },
        {
          id: "akc-greater-swiss-mountain-dog-breed-standard",
          role: "verified",
          locator: "Dry-mouthed trait"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "FAQ answers synthesize verified kennel club standards and health protocols without naming registries."
    }
  },

  updatedOn: "2026-11-26"
};
