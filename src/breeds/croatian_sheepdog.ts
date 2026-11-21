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
    "Chien Berger Croate",
    "Perro Pastor Croata"
  ],

  group: "Herding Sheepdog (Sheepdog)",

  origin: {
    country: "Croatia",
    region: "Eastern Slavonia (around Đakovo), Croatia"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Gera062005sed.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Gera062005sed.jpg",
      title: "Gera062005sed.jpg",
      description: "An adult black Croatian Sheepdog (Mawlch Gera) sitting outdoors.",
      creator: "Michala Mračková",
      uploader: "Prskavka~commonswiki",
      capturedOn: null,
      uploadedOn: "2006-06-08",
      width: 1536,
      height: 2048,
      licenseId: "public-domain",
      attribution:
        "Photo by Michala Mračková, Wikimedia Commons, Public Domain. Source: https://commons.wikimedia.org/wiki/File:Gera062005sed.jpg.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/GeraHojda09112055ZG.jpeg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:GeraHojda09112055ZG.jpeg",
      title: "GeraHojda09112055ZG.jpeg",
      description: "A Croatian Sheepdog (Mawlch Gera) competing on an agility course.",
      creator: "Michala Mračková",
      uploader: "Prskavka~commonswiki",
      capturedOn: null,
      uploadedOn: null,
      width: 540,
      height: 405,
      licenseId: "public-domain",
      attribution:
        "Photo by Michala Mračková, Wikimedia Commons, Public Domain. Source: https://commons.wikimedia.org/wiki/File:GeraHojda09112055ZG.jpeg.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    }
  ],

  overview: {
    summary:
      "A nimble, medium-sized Croatian herding dog instantly recognized by its wavy-to-curly black body coat, smooth short-haired fox-like head, erect or semi-pricked ears, and tireless agility.",

    description:
      "The Croatian Sheepdog is a compact, slightly rectangular working herder combining rugged endurance with quick, springy movement. Its hallmark look is the sharp contrast between its dense, wavy or curly black body coat and the short, smooth hair covering its wedge-shaped head, muzzle, and the front of its legs. Dark, oval eyes with tight black lids and mobile triangular ears—carried either pricked or semi-pricked—give the breed a bright, questioning gaze. Devoted, humble, and eager to work, it thrives as an active livestock herder, fast dog-sport competitor, and alert watchdog for energetic owners.",

    history:
      "One of southeastern Europe's oldest documented pastoral breeds, the Croatian Sheepdog developed over centuries in eastern Slavonia around Đakovo. In a 1374 manuscript, Bishop Petar of Đakovo recorded the native herder as Canis pastoralis croaticus, noting that Croats had brought the dogs with them during earlier migrations; in 1719, Bishop Petar Bakić cited that record and noted that the breed's appearance had remained unchanged. Veterinary professor Dr. Stjepan Romić launched a systematic breeding program in Đakovo in 1935, and the breed made its public show debut in Zagreb in October 1949. Dr. Otto Rohr drafted the first written breed description in 1951, paving the way for formal international recognition in the late 1960s.",

    originalPurpose:
      "Herding and driving sheep, cattle, and other livestock across Slavonian pastures while guarding rural yards.",

    currentRoles: [
      "Versatile livestock herder and farm watchdog",
      "Fast competitor in agility, flyball, obedience, herding, and frisbee",
      "Loyal, energetic companion for active outdoor households"
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
      "Dense, wavy or curly double coat with a soft undercoat over the body, contrasting with short, smooth hair on the head, face, outer ears, and front of the legs.",

    coatLength: "Medium",

    coatColors: [
      "Solid Black (small white markings on chest or toes permitted)"
    ],

    sheddingLevel: "Moderate",
    droolingLevel: "Low",

    distinctiveFeatures: [
      "Slightly rectangular, compact build where body length exceeds height at the withers and height to the elbow is about half of withers height",
      "Striking coat contrast: wavy or curly black hair over the body paired with short, smooth hair on the head and face",
      "Blunt wedge-shaped head with parallel skull and muzzle lines and a complete scissor bite",
      "Medium-sized, oval black to dark chestnut-brown eyes with tightly fitting, fully black-pigmented eyelids",
      "Even triangular ears carried either pricked or semi-pricked (with three-fifths erect and the upper two-fifths folded)",
      "Naturally bobtailed or full-length bushy tail"
    ]
  },

  temperament: {
    traits: [
      "Loyal",
      "Active",
      "Alert",
      "Intelligent",
      "Biddable",
      "Eager to please",
      "Courageous",
      "Playful",
      "Sensibly wary of strangers"
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
      level: "Very high",
      minutesPerDay: {
        min: 60,
        max: 90
      },
      activities: [
        "Daily brisk runs, trail hikes, and vigorous outdoor play",
        "Herding, agility, flyball, obedience, and frisbee",
        "Scent tracking and interactive trick training",
        "Supervised sprinting and jumping games in a tall, securely fenced yard"
      ]
    },

    grooming: {
      level: "Low to moderate",
      brushing: "Weekly brushing or combing to remove dead hair and keep the wavy coat tidy",
      bathing: "Occasional baths as needed; the rustic coat sheds dirt easily",
      notes: [
        "Leave the wavy double coat natural rather than clipping it.",
        "Trim nails regularly and inspect the triangular ears weekly for wax or debris.",
        "Check paw pads after trail runs or farm work and brush teeth several times a week."
      ]
    },

    training: {
      difficulty: "Easy",
      tips: [
        "Use upbeat, reward-based training with treats and toys; this bright, eager herder picks up new cues quickly.",
        "Keep sessions varied and mentally challenging so boredom does not turn into digging or mischief.",
        "Teach a dependable quiet cue early to manage alert watchdog barking.",
        "Provide a tall, secure fence because the breed is known for remarkable jumping ability."
      ],
      socialization:
        "Introduce puppies early and positively to unfamiliar people, calm dogs, and everyday settings so their sensible wariness develops into confident judgment."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,
      climates: ["Temperate", "Cold", "Warm"],
      aloneTimeTolerance: "Low to moderate"
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced dog food suited to an active medium-sized working breed, tailored to life stage and daily exercise.",

    feedingFrequency: {
      puppy: "Three to four small measured meals daily until six months old, then two meals",
      adult: "Two measured meals per day",
      senior: "Two portion-controlled meals per day adjusted for lower activity"
    },

    guidelines:
      "Measure daily portions to keep the dog lean and athletic without extra weight on active joints. Adjust calories for heavy herding or sport schedules and provide fresh drinking water at all times.",

    considerations: [
      "Count training treats within daily calories.",
      "Avoid fatty table scraps and switch diets gradually over about a week.",
      "Keep fresh water available during and after vigorous exercise."
    ],

    note:
      "Follow your veterinarian's guidance to tailor feeding frequency and diet formulas to your dog's age and activity level."
  },

  health: {
    overview:
      "The Croatian Sheepdog is generally a hardy, healthy working breed with a typical lifespan of 12 to 14 years. Shaped by practical rural selection without extreme physical exaggerations, it has relatively few widespread hereditary diseases. Key breeding and veterinary considerations include responsible management of natural bobtail genetics (avoiding bobtail-to-bobtail matings due to homozygous embryonic lethality in dogs carrying the TBXT mutation) alongside standard active-breed screening for hip dysplasia, patellar luxation, and inherited eye conditions.",

    commonConditions: [
      "Natural bobtail (brachyury) breeding consideration — short or absent tails in bobtailed dog breeds are typically linked to a heterozygous TBXT gene mutation where mating two bobtailed dogs causes early embryonic loss of homozygous embryos, so responsible breeders pair bobtails only with full-tailed dogs",
      "Hip dysplasia — developmental hip-joint laxity monitored in active medium herding dogs through pre-breeding radiographs",
      "Patellar luxation — occasional kneecap slipping monitored during orthopedic checkups",
      "Eye conditions (cataracts, PRA) — uncommon ocular issues checked via periodic veterinary eye exams",
      "Athletic field injuries — minor paw scrapes, sprains, or muscle strains from high-speed jumping and herding"
    ],

    preventiveCare: [
      "Confirm that breeding stock undergoes hip, patella, and eye checks and that bobtail-to-bobtail pairings are avoided.",
      "Keep the dog lean and well conditioned, inspect paws and ears after outdoor work, and maintain dental brushing, parasite prevention, and annual vet visits."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation",
      "Clinical patellar luxation evaluation",
      "Veterinary ophthalmologist eye examination",
      "Natural bobtail (TBXT) genetic management before breeding"
    ],

    dentalCare:
      "Brush teeth several times a week with dog-safe toothpaste and schedule routine veterinary dental exams.",

    earCare:
      "Check the pricked or semi-pricked ears weekly for wax buildup, dust, or redness, and clean gently as needed.",

    skinCare:
      "Part the wavy black coat during weekly brushing to check the skin for burrs, scratches, or parasites."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Active outdoor owners, runners, and hikers who enjoy daily training and energetic play",
      "Dog sport enthusiasts competing in agility, flyball, herding, obedience, or frisbee",
      "Smallholders or rural homes with tall, secure fencing",
      "Active families with respectful children who include the dog in daily routines"
    ],

    notIdealFor: [
      "Sedentary households wanting a low-exercise indoor lapdog",
      "Apartment dwellers with noise-sensitive neighbors, given the breed's alert watchdog barking",
      "Homes with low fences, due to the breed's strong jumping ability",
      "Owners away for long hours without daily exercise and mental engagement"
    ]
  },

  funFacts: [
    "In 1374, Bishop Petar of Đakovo documented the breed as Canis pastoralis croaticus, and in 1719 Bishop Petar Bakić recorded that its appearance had stayed unchanged over more than three centuries.",
    "Known for bold herding agility, Croatian Sheepdogs will even run across the backs of tightly packed sheep to reach the front of the flock quickly.",
    "The breed displays a distinctive coat contrast: wavy or curly black hair across the body paired with short, smooth fur on the head, face, and front of the legs.",
    "Croatian Sheepdogs are celebrated for extraordinary jumping ability and quick turning speed in agility, flyball, and frisbee.",
    "Veterinary professor Dr. Stjepan Romić began systematic breeding in Đakovo in 1935, leading to the breed's first Zagreb show presentation in 1949."
  ],

  faq: [
    {
      question: "How big does a Croatian Sheepdog get?",
      answer:
        "Both males and females stand 40 to 50 cm at the withers and weigh 13 to 20 kg."
    },
    {
      question: "How long do Croatian Sheepdogs live?",
      answer:
        "They are generally sturdy, healthy dogs with a typical lifespan of 12 to 14 years."
    },
    {
      question: "Is the Croatian Sheepdog easy to groom?",
      answer:
        "Yes. Weekly brushing or combing to remove loose hair, occasional baths, and routine nail and ear care are usually enough; the natural wavy coat does not need clipping."
    },
    {
      question: "Can a Croatian Sheepdog live in an apartment?",
      answer:
        "Usually not. Although calm indoors after exercise, their high daily energy, jumping agility, and alert watchdog barking suit a home with a tall, securely fenced yard much better."
    },
    {
      question: "Is the Croatian Sheepdog easy to train?",
      answer:
        "Yes. They are alert, quick-learning, and eager to please, thriving on upbeat, reward-based training and structured sports like agility, herding, or flyball."
    },
    {
      question: "Why are some Croatian Sheepdogs born with short tails?",
      answer:
        "A natural bobtail trait occurs in the breed, so puppies may be born with full-length or naturally short tails; responsible breeders avoid mating two bobtailed dogs together."
    }
  ],

  references: [
    "fci-croatian-shepherd-dog-official-standard",
    "fci-croatian-shepherd-dog-nomenclature",
    "fci-croatian-shepherd-dog-education-2014",
    "hks-hrvatski-ovcar-breed-standard",
    "akc-croatian-sheepdog-breed-profile",
    "ukc-croatian-shepherd-dog-breed-standard",
    "croatian-sheepdog-morphology-health-study-2019",
    "pmc-canine-tbxt-bobtail-review-2025",
    "natureserve-canis-lupus-familiaris",
    "the-dog-api",
    "wikimedia-hrvatski-ovcar-600-tomasz-sienicki",
    "wikimedia-hrvatski-ovcar-pleple2000"
  ],

  evidence: {
    scientificName: {
      reliability: "reliable_source",
      sources: [
        {
          id: "natureserve-canis-lupus-familiaris",
          role: "verified",
          locator: "Taxon profile: Canis lupus familiaris (Domestic Dog)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "All domestic dog breeds belong to the subspecies Canis lupus familiaris."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-nomenclature",
          role: "verified",
          locator: "Multilingual names (Hrvatski Ovčar, Croatian Shepherd Dog, Kroatischer Schäferhund, Chien Berger Croate, Perro Pastor Croata)"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names (Hrvatski Ovčar)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-nomenclature",
          role: "verified",
          locator: "Group 1 Sheepdogs and Cattledogs, Section 1 Sheepdogs, not subject to working trial"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.breed_group (Herding)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Presented in plain descriptive wording without registry codes or acronyms; FCI Nomenclature confirms the breed is not subject to a working trial."
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-nomenclature",
          role: "verified",
          locator: "Country of origin: Croatia"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin (Croatia)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-education-2014",
          role: "verified",
          locator: "Historical summary (eastern Slavonia, Đakovo)"
        },
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "About the Breed (Đakovo)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "overview.summary": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-education-2014",
          role: "verified",
          locator: "General appearance, proportions, head, ears"
        },
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "About the Breed"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "overview.description": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-education-2014",
          role: "verified",
          locator: "Important proportions, head, eyes, ears"
        },
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "About the Breed"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.description"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "overview.history": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-education-2014",
          role: "verified",
          locator: "Historical summary (1374 Bishop Petar, 1719 Petar Bakić, 1935 Prof. Stjepan Romić, 1949 Zagreb show, 1951 Dr. Otto Rohr, 1969 FCI standard)"
        },
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "About the Breed (1374 chronicle, 1719 manuscript, 1935 breeding program)"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.history"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "overview.originalPurpose": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-education-2014",
          role: "verified",
          locator: "Utilization (herding of livestock, guard dog, companion)"
        },
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "History and Did You Know sections"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "overview.currentRoles": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "Exercise and Did You Know sections (herding, guard, companion, flyball, obedience, frisbee)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.sizeCategory": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.description (medium-sized)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.height.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "verified",
          locator: "Size and Weight: Males and females 40-50 cm"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.height.metric (40-50 cm)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.height.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "verified",
          locator: "Size and Weight: Males and females 40-50 cm"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.height.metric (40-50 cm)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.weight.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "verified",
          locator: "Size and Weight: Males and females 13-20 kg"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (13-20 kg)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.weight.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "verified",
          locator: "Size and Weight: Males and females 13-20 kg"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (13-20 kg)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span (12-14 years)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "verified",
          locator: "Coat (wavy or curly double coat on body; short smooth hair on head and face)"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.description (wavy or curly black coat)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.coatLength": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "Coat Length: Medium"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "verified",
          locator: "Colour: Black (small white markings on chest or toes permitted)"
        },
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "Breed Colors: Black (007)"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "GET /breeds/{id}/colours"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Discarded 16 non-black species-wide colours from The Dog API endpoint because the Croatian Sheepdog is strictly black."
    },

    "physical.sheddingLevel": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "cited",
          locator: "Grooming section"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "physical.droolingLevel": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "cited",
          locator: "Breed traits"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-education-2014",
          role: "verified",
          locator: "Important proportions, head, eyes, ears (pricked or semi-pricked 3/5 erect, 2/5 folded)"
        },
        {
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "verified",
          locator: "Coat contrast and tail"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "About the Breed and Training sections (loyal, active, alert, intelligent, biddable, eager to please, sensibly suspicious)"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics"
        }
      ],
      verifiedOn: null,
      note: "Editorial 1-5 scale estimates informed by kennel club temperament profiles."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "Exercise section (very energetic, extraordinary jumping ability)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "cited",
          locator: "Exercise section"
        }
      ],
      verifiedOn: null,
      note: "General daily exercise range for a high-energy herding dog."
    },

    "care.exercise.activities": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "Exercise section (flyball, obedience, herding, frisbee, running)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.grooming.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "Grooming section (easily cared for, wash-and-wear)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.grooming.brushing": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "Grooming section (combing or brushing to remove dead hair)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.grooming.bathing": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "Grooming section (occasional baths)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.grooming.notes": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "cited",
          locator: "Grooming section"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.training.difficulty": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "Training section (very trainable and eager to please)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.training.tips": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "Exercise and Training sections (mischievous digging if under-exercised, jumping ability, trainable)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.training.socialization": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "cited",
          locator: "Training section"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "cited",
          locator: "Exercise and Training sections (very energetic, watchdog)"
        }
      ],
      verifiedOn: null,
      note: "Editorial assessment that high herding energy and alert barking suit a house with a yard."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "cited",
          locator: "Exercise section"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-education-2014",
          role: "cited",
          locator: "Adapted to Slavonian conditions"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "cited",
          locator: "Nutrition section"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "Health section (overall healthy breed)"
        },
        {
          id: "pmc-canine-tbxt-bobtail-review-2025",
          role: "verified",
          locator: "Section 3.7 (TBXT natural bobtail mutation and homozygous embryonic reabsorption)"
        },
        {
          id: "croatian-sheepdog-morphology-health-study-2019",
          role: "cited",
          locator: "Veterinarski arhiv Croatian Sheepdog hematology/clinical baseline study"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pmc-canine-tbxt-bobtail-review-2025",
          role: "verified",
          locator: "Section 3.7 (TBXT bobtail genetics and breeding guidance)"
        },
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "cited",
          locator: "Health section"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Distinguishes established canine TBXT bobtail breeding genetics from general active-breed orthopedic and ocular monitoring."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "pmc-canine-tbxt-bobtail-review-2025",
          role: "cited",
          locator: "Bobtail pairing management"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "general_guidance",
      sources: [
        {
          id: "pmc-canine-tbxt-bobtail-review-2025",
          role: "cited",
          locator: "TBXT bobtail breeding considerations"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: null
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: null
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: null
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "cited",
          locator: "Exercise and Training sections"
        }
      ],
      verifiedOn: null,
      note: "Editorial household suitability assessment based on high energy, jumping ability, and watchdog nature."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-education-2014",
          role: "verified",
          locator: "Historical summary (1374 Bishop Petar, 1719 Petar Bakić, 1935 Prof. Stjepan Romić, 1949 Zagreb show)"
        },
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "About the Breed and Exercise sections (running across backs of sheep, extraordinary jumping ability)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-croatian-shepherd-dog-official-standard",
          role: "verified",
          locator: "Size (40-50 cm) and Weight (13-20 kg)"
        },
        {
          id: "akc-croatian-sheepdog-breed-profile",
          role: "verified",
          locator: "Grooming, Exercise, and Training sections"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "Lifespan (12-14 years)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    }
  },

  updatedOn: "2026-11-21"
};
