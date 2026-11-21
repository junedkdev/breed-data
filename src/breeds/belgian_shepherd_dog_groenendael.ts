import type { Breed } from "../schema/breed.types";

export const belgian_shepherd_dog_groenendael: Breed = {
  slug: "belgian-shepherd-dog-groenendael",
  name: "Belgian Shepherd Dog (Groenendael)",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Groenendael",
    "Belgian Sheepdog",
    "Belgian Shepherd",
    "Chien de Berger Belge",
    "Belgischer Schäferhund",
    "Perro de Pastor Belga"
  ],

  group: "Herding and Pastoral Sheepdog (Sheepdog)",

  origin: {
    country: "Belgium",
    region: "Château de Groenendael, Sonian Forest near Brussels, Belgium"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Berger_belge_Groenendael.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Berger_belge_Groenendael.jpg",
      title: "Berger belge Groenendael.jpg",
      description:
        "An adult black Belgian Shepherd Groenendael playing on the beach of Boulogne.",
      creator: "Tsaag Valren",
      uploader: "Tsaag Valren",
      capturedOn: "2018-09-17",
      uploadedOn: "2018-10-14",
      width: 3228,
      height: 2220,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Tsaag Valren, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Berger_belge_Groenendael.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Groenendael.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Groenendael.jpg",
      title: "Groenendael.jpg",
      description:
        "A 4-year-old male Belgian Shepherd Groenendael standing outdoors.",
      creator: "Adam C. Emery (Acemetrical)",
      uploader: "Acemetrical",
      capturedOn: "2015-12-16",
      uploadedOn: "2015-12-16",
      width: 974,
      height: 1600,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Adam C. Emery (Acemetrical), Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Groenendael.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    }
  ],

  overview: {
    summary:
      "An agile, square-built Belgian herding dog distinguished by its long solid-black double coat, full neck collarette, crisp upright ears, keen mind, and intense devotion to its handler.",

    description:
      "The Belgian Shepherd Dog (Groenendael) is a medium-to-large, squarely proportioned working herder that pairs lean strength with quick, fluid grace. As the long-coated black variety among Belgium's four native sheepdogs, it carries a proud head and neck framed by a rich collarette, feathered legs, full thigh breeches, and a plumed tail. Its finely chiseled head features stiff triangular ears held upright when alert, a complete scissor bite, and slightly almond-shaped dark brown eyes with a bright, questioning gaze. Driven, responsive, and deeply attached to its people, the Groenendael thrives on active teamwork and close daily engagement.",

    history:
      "Belgian herding dogs of this type worked across rural Belgium from the Middle Ages onward. In 1891, veterinary professor Adolphe Reul examined 117 native herding dogs to help classify Belgium's regional sheepdogs into four coat varieties sharing the same athletic build: Groenendael, Tervueren, Malinois, and Laekenois. The solid-black long-haired line was established by innkeeper and breeder Nicolas Rose at the Château de Groenendael near Brussels, using a foundational black pair that fixed the variety's striking appearance. Valued for stamina, courage, and quick learning, Belgian Shepherds served during World War I as sentries, messengers, and ambulance dogs, and today work worldwide in police, search, herding, and dog sports.",

    originalPurpose:
      "Herding and guarding sheep flocks and protecting Belgian farmsteads.",

    currentRoles: [
      "Herding, tracking, and utility working dog",
      "Police, military, and search-and-rescue partner",
      "High-level competitor in agility, obedience, flyball, and protection sports",
      "Devoted, active companion and watchdog for experienced owners"
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
      "Long, straight, abundant double coat with a dense undercoat; short on the face, outer ears, and lower legs, and longer around the neck (collarette), backs of thighs (breeches), and tail.",

    coatLength: "Long",

    coatColors: [
      "Solid Black (small white patch on forechest and toes permitted; white or grey muzzle frosting occurs naturally with age)"
    ],

    sheddingLevel: "Moderate year-round, with heavy seasonal shedding",
    droolingLevel: "Low",

    distinctiveFeatures: [
      "Square, balanced frame whose length from shoulder to buttock closely matches height at the withers",
      "Long, straight solid-black double coat with a prominent neck collarette and feathered thigh breeches",
      "High-set, stiffly erect triangular ears held upright when attentive",
      "Slightly almond-shaped dark brown eyes with black rims and a lively, questioning expression",
      "Proud, slightly arched neck widening smoothly into well-laid shoulders",
      "Deep chest reaching the elbows with a firm, straight back and graceful underline"
    ]
  },

  temperament: {
    traits: [
      "Intelligent",
      "Watchful",
      "Alert",
      "Energetic",
      "Loyal",
      "Protective",
      "Sensitive",
      "Hardworking",
      "Reserved with strangers"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 5,
      independence: 2,
      trainability: 5,
      barking: 3,
      energy: 5
    }
  },

  care: {
    exercise: {
      level: "Very high",
      minutesPerDay: {
        min: 90,
        max: 120
      },
      activities: [
        "Interactive daily runs, brisk hikes, and ball-play sessions with the owner",
        "Herding, tracking, and scent-work training",
        "Agility, obedience, rally, and flyball competitions",
        "Structured mental enrichment and puzzle challenges"
      ]
    },

    grooming: {
      level: "Moderate",
      brushing: "Weekly thorough brushing year-round, switching to daily brushing during heavy seasonal undercoat sheds",
      bathing: "Infrequent baths as needed with a gentle dog shampoo",
      notes: [
        "Never shave the double coat, as both layers protect the skin from cold, moisture, and sun.",
        "Pay close attention to the collarette, behind the ears, and thigh breeches where tangles form first.",
        "Trim nails regularly, check the upright ears for wax or debris, and brush teeth several times a week."
      ]
    },

    training: {
      difficulty: "Easy to moderate",
      tips: [
        "Use upbeat, reward-based training with treats and toys; harsh handling quickly undermines trust in this sensitive breed.",
        "Engage the dog daily with varied tasks—simply turning a Groenendael out into a yard alone is not enough.",
        "Start puppy obedience and impulse-control classes early to channel strong herding instincts cleanly.",
        "Use a tall, securely fenced yard and keep the dog on a leash in open areas."
      ],
      socialization:
        "Begin calm, positive socialization in early puppyhood across varied people, dogs, places, and sounds so natural vigilance matures into steady, confident judgment without nervousness."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,
      climates: ["Cold", "Temperate", "Warm"],
      aloneTimeTolerance: "Low to moderate"
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced dog food formulated for active medium-to-large working breeds, tailored to life stage and workload.",

    feedingFrequency: {
      puppy: "Three to four small measured meals daily until six months old, then two meals",
      adult: "Two measured meals per day",
      senior: "Two portion-controlled meals per day adjusted for lower activity"
    },

    guidelines:
      "Measure meals carefully and watch body condition through the dense coat so the dog stays lean and athletic. Split daily food into two meals and avoid heavy running right before or after eating to help reduce bloat risk. Keep fresh water available at all times.",

    considerations: [
      "Adjust calories up during intense sport or working seasons and down during quieter periods to prevent weight gain.",
      "Count training treats within the daily calorie allowance.",
      "Avoid rich table scraps and transition to any new diet gradually over about a week."
    ],

    note:
      "Consult a veterinarian to match daily portions and diet formulas to your dog's workload and life stage."
  },

  health: {
    overview:
      "The Belgian Shepherd Dog (Groenendael) is generally a robust, athletic breed with a typical lifespan of 12 to 14 years. Peer-reviewed genetic research has identified interacting risk loci on canine chromosomes 14 and 37 (near ADAM23) associated with idiopathic epilepsy in Belgian Shepherds. Responsible health programs also screen for hip dysplasia, elbow dysplasia, and inherited eye disorders, while owners and veterinarians should remain mindful of heightened sensitivity to anesthesia and deep-chested bloat risk.",

    commonConditions: [
      "Idiopathic epilepsy — a recurring seizure disorder with documented multigenic inheritance in Belgian Shepherds, linked in genome-wide studies to interacting risk loci on chromosomes 14 and 37 (near ADAM23)",
      "Hip dysplasia — developmental hip-joint malformation that can lead to arthritis, monitored through radiographic screening",
      "Elbow dysplasia — developmental elbow-joint abnormalities monitored via radiographic evaluation",
      "Anesthesia sensitivity — heightened sensitivity to certain anesthetic agents, requiring sighthound- and shepherd-aware veterinary protocols during surgery",
      "Inherited eye disorders — progressive retinal atrophy (PRA) and cataracts monitored through regular veterinary ophthalmologist exams",
      "Gastric dilatation-volvulus (bloat) — an acute, life-threatening stomach twisting risk in deep-chested breeds requiring immediate emergency care",
      "Certain cancers — monitored through routine senior veterinary checkups"
    ],

    preventiveCare: [
      "Verify that breeding stock has documented radiographic hip and elbow clearances, current ophthalmologist eye exams, and carefully tracked family histories regarding epilepsy.",
      "Alert your veterinarian to the breed's sensitivity to anesthesia before any surgical or dental procedure.",
      "Feed two measured meals daily and rest the dog before and after eating to help lower bloat risk.",
      "Maintain lean muscle condition, regular dental brushing, ear checks, parasite control, and annual veterinary exams."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation",
      "Radiographic elbow dysplasia evaluation",
      "Veterinary ophthalmologist eye examination",
      "Pedigree and family health review for idiopathic epilepsy"
    ],

    dentalCare:
      "Brush teeth several times a week with dog-safe toothpaste and schedule routine veterinary dental checks to keep the strong scissor-bite teeth and gums healthy.",

    earCare:
      "Check the erect triangular ears weekly for wax buildup, dirt, or redness, and wipe gently with a veterinarian-approved cleaner when needed.",

    skinCare:
      "Part the long black coat during weekly brushing to check the skin for mats, redness, burrs, or parasites, without shaving the protective double coat."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Active, experienced owners who enjoy daily interactive exercise and training teamwork",
      "Homes with a tall, securely fenced yard and time for close human companionship",
      "Dog sport enthusiasts participating in herding, agility, obedience, tracking, or flyball",
      "Active families with respectful children who include the dog in daily life"
    ],

    notIdealFor: [
      "First-time or low-energy owners unprepared for a high-drive, sensitive working shepherd",
      "Apartment dwellers without consistent access to vigorous daily exercise and training space",
      "Households that leave a dog alone in a yard or indoors for long workdays without interaction",
      "Handlers who rely on harsh or heavy-handed training corrections"
    ]
  },

  funFacts: [
    "The variety is named after the Château de Groenendael near Brussels, where breeder Nicolas Rose established the solid-black long-coated line in the late 1800s.",
    "In 1891, veterinary professor Adolphe Reul examined 117 native Belgian herding dogs to help define the four coat varieties—Groenendael, Tervueren, Malinois, and Laekenois.",
    "All four Belgian Shepherd varieties share the same square athletic structure and are differentiated only by coat length, texture, and color.",
    "During World War I, Belgian Shepherds worked on the front lines as sentries, messengers, and ambulance dogs.",
    "Light white or grey frosting on the muzzle is a normal, accepted trait in the black Groenendael, and a small white patch on the forechest or toes is also tolerated."
  ],

  faq: [
    {
      question: "How is a Groenendael different from a Malinois, Tervueren, or Laekenois?",
      answer:
        "All four are Belgian Shepherd varieties sharing the same square build and working drive; they differ only in coat: the Groenendael has a long solid-black coat, the Tervueren has a long fawn, red, or grey coat with black overlay, the Malinois has a short fawn/red/grey coat with black mask, and the Laekenois has a harsh, wiry reddish-fawn coat."
    },
    {
      question: "How big does a Belgian Shepherd Dog (Groenendael) get?",
      answer:
        "Adult males stand 60 to 66 cm at the withers and weigh 25 to 30 kg, while adult females stand 56 to 62 cm and weigh 20 to 25 kg."
    },
    {
      question: "Is a Groenendael good for apartment living?",
      answer:
        "Usually not. Because this breed has very high energy, sharp vigilance, and intense daily exercise and training needs, it fits best in an active household with a securely fenced yard."
    },
    {
      question: "How much grooming does the long black coat need?",
      answer:
        "Most of the year, a thorough weekly brushing keeps the double coat clean and tangle-free, with daily brushing needed during heavy seasonal shedding. Never shave the coat."
    },
    {
      question: "Is the Groenendael a good choice for first-time dog owners?",
      answer:
        "Generally no. While highly intelligent and eager to learn, its high working energy, strong herding instincts, and emotional sensitivity suit experienced owners ready for daily structured training."
    },
    {
      question: "What health screenings are recommended for Groenendaels?",
      answer:
        "Key pre-breeding screenings include radiographic hip and elbow evaluations, veterinary ophthalmologist eye exams, and careful pedigree tracking for idiopathic epilepsy."
    }
  ],

  references: [
    "fci-belgian-shepherd-dog-standard-15",
    "fci-belgian-shepherd-dog-nomenclature",
    "srhk-belgian-shepherd-breed-standard",
    "akc-belgian-sheepdog-breed-standard",
    "akc-belgian-sheepdog-breed-profile",
    "the-kennel-club-belgian-shepherd-dog-groenendael-breed-standard",
    "rkc-belgian-shepherd-dog-groenendael-breed-profile",
    "ukc-belgian-shepherd-dog-breed-standard",
    "ofa-belgian-sheepdog-chic-requirements",
    "belgian-shepherd-idiopathic-epilepsy-study-2020",
    "natureserve-canis-lupus-familiaris",
    "the-dog-api",
    "wikimedia-berger-belge-groenendael-tsaag-valren",
    "wikimedia-groenendael-adam-emery"
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
          id: "fci-belgian-shepherd-dog-nomenclature",
          role: "verified",
          locator: "Multilingual names (Chien de Berger Belge, Belgischer Schäferhund, Perro de Pastor Belga; variety Groenendael)"
        },
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "Breed name: Belgian Sheepdog"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names (Belgian Shepherd, Belgian Sheepdog, Chien de Berger Belge)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-nomenclature",
          role: "verified",
          locator: "Group 1 Sheepdogs and Cattledogs, Section 1 Sheepdogs, subject to working trial"
        },
        {
          id: "the-kennel-club-belgian-shepherd-dog-groenendael-breed-standard",
          role: "verified",
          locator: "Pastoral Group"
        },
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "Herding Group"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.breed_group (Herding)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Presented in plain descriptive wording without registry codes or acronyms."
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-nomenclature",
          role: "verified",
          locator: "Country of origin: Belgium"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin (Belgium)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "srhk-belgian-shepherd-breed-standard",
          role: "verified",
          locator: "Château de Groenendael near Brussels"
        },
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "History section (Nicolas Rose, Groenendael)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "overview.summary": {
      reliability: "official_standard",
      sources: [
        {
          id: "the-kennel-club-belgian-shepherd-dog-groenendael-breed-standard",
          role: "verified",
          locator: "General Appearance, Characteristics, and Colour"
        },
        {
          id: "akc-belgian-sheepdog-breed-profile",
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
          id: "the-kennel-club-belgian-shepherd-dog-groenendael-breed-standard",
          role: "verified",
          locator: "General Appearance, Body, Eyes, Ears, and Colour"
        },
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "General Appearance, Coat, and Temperament"
        },
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "About the Breed (collarette, breeches, questioning intelligence)"
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
          id: "rkc-belgian-shepherd-dog-groenendael-breed-profile",
          role: "verified",
          locator: "About this breed (Middle Ages, 1891 club, Prof. Adolphe Reul examining 117 dogs, four varieties)"
        },
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "Did You Know and History sections (Nicolas Rose, Club du Chien de Berger Belge)"
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
      reliability: "official_standard",
      sources: [
        {
          id: "the-kennel-club-belgian-shepherd-dog-groenendael-breed-standard",
          role: "verified",
          locator: "Characteristics (primary purpose: herder and guardian of the flock)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "overview.currentRoles": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-belgian-shepherd-dog-groenendael-breed-profile",
          role: "verified",
          locator: "About this breed (herding, police, armed forces, service dog)"
        },
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "Exercise section (obedience, agility, tracking, herding, flyball)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.sizeCategory": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Size and Weight (56-66 cm, 20-30 kg)"
        },
        {
          id: "the-kennel-club-belgian-shepherd-dog-groenendael-breed-standard",
          role: "verified",
          locator: "General Appearance (medium-sized dog)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.height.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Size: Males 62 cm ideal, 60-66 cm limits"
        },
        {
          id: "the-kennel-club-belgian-shepherd-dog-groenendael-breed-standard",
          role: "cited",
          locator: "Ideal height: Dogs 61-66 cm"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.height.metric (61-66 cm)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Kept official FCI country-of-origin male height (60-66 cm, ideal 62 cm). The Dog API, Royal Kennel Club, and AKC list 61-66 cm / 24-26 in."
    },

    "physical.height.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Size: Females 58 cm ideal, 56-62 cm limits"
        },
        {
          id: "the-kennel-club-belgian-shepherd-dog-groenendael-breed-standard",
          role: "cited",
          locator: "Ideal height: Bitches 56-61 cm"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.height.metric (56-61 cm)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Kept official FCI country-of-origin female height (56-62 cm, ideal 58 cm). The Dog API, Royal Kennel Club, and AKC list 56-61 cm / 22-24 in."
    },

    "physical.weight.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Weight: Males about 25-30 kg"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight.metric (25-34 kg)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Kept official FCI male weight (25-30 kg); The Dog API lists a wider 25-34 kg range matching the AKC profile (55-75 lb)."
    },

    "physical.weight.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Weight: Females about 20-25 kg"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight.metric (20-27 kg)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Kept official FCI female weight (20-25 kg); The Dog API lists 20-27 kg matching the AKC profile (45-60 lb)."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12-14 years"
        },
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
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Coat: Long straight double coat with dense undercoat, collarette, and breeches"
        },
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "Grooming section (double-layer coat, dense undercoat, harder outer coat)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Groenendael: Long-haired variety"
        },
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "Coat Length: Long"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Colour: Groenendael solid black (small white on forechest and toes tolerated)"
        },
        {
          id: "the-kennel-club-belgian-shepherd-dog-groenendael-breed-standard",
          role: "verified",
          locator: "Colour: Groenendael black; frosting on muzzle normal; small white on forechest and toes tolerated"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "GET /breeds/{id}/colours"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Discarded 16 non-black species-wide colours from The Dog API endpoint because the Groenendael variety is strictly solid black."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "Grooming section (weekly brushing most of year; heavy seasonal shed)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (low)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "the-kennel-club-belgian-shepherd-dog-groenendael-breed-standard",
          role: "verified",
          locator: "Body, Neck, Eyes, Ears, and Colour"
        },
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Head, Ears, Body, and Coat"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "the-kennel-club-belgian-shepherd-dog-groenendael-breed-standard",
          role: "verified",
          locator: "Temperament (intelligent, alert, naturally vigilant, devoted, initial reserve without nervousness or aggression)"
        },
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "About the Breed (bright, watchful, serious-minded, sensitive)"
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
          id: "akc-belgian-sheepdog-breed-profile",
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
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "Exercise section (requires ample daily interactive exercise)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "cited",
          locator: "Exercise section"
        }
      ],
      verifiedOn: null,
      note: "General daily exercise range for a high-energy working herding dog."
    },

    "care.exercise.activities": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "Exercise section (ball play, long runs, obedience, agility, tracking, herding, flyball)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.grooming.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "Grooming section"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.grooming.brushing": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "Grooming section (weekly brushing normally; daily during heavy seasonal shed)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.grooming.bathing": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "Grooming section (infrequent baths unless messy)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.grooming.notes": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "cited",
          locator: "Grooming and Health sections"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.training.difficulty": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "cited",
          locator: "Training section"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.training.tips": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "Training and Exercise sections (interactive engagement, sensitive temperament, puppy classes)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.training.socialization": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "Training section (socialization and puppy-training classes especially important)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "cited",
          locator: "Exercise and Energy guidance"
        }
      ],
      verifiedOn: null,
      note: "Editorial assessment that high working drive and exercise needs make apartments generally unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "Exercise section"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "cited",
          locator: "Weather-resistant double coat"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "About the Breed (craves human companionship and abhors neglect)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "cited",
          locator: "Nutrition section (age-appropriate food, calorie monitoring)"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "belgian-shepherd-idiopathic-epilepsy-study-2020",
          role: "verified",
          locator: "Abstract (interacting risk loci on CFA14 and CFA37 near ADAM23 for idiopathic epilepsy)"
        },
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "Health section (epilepsy, hip/elbow dysplasia, PRA/cataracts, anesthesia sensitivity, cancers)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "belgian-shepherd-idiopathic-epilepsy-study-2020",
          role: "verified",
          locator: "CFA14 and CFA37 (ADAM23) idiopathic epilepsy GWAS in Belgian Shepherds"
        },
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "Health section (hip/elbow dysplasia, PRA, cataracts, anesthesia sensitivity, certain cancers)"
        },
        {
          id: "ofa-belgian-sheepdog-chic-requirements",
          role: "verified",
          locator: "CHIC screening conditions (hips, elbows, eyes)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Distinguishes peer-reviewed multigenic epilepsy risk loci from orthopedic/ocular screening priorities, anesthesia sensitivity, and deep-chested bloat risk."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "cited",
          locator: "Health section (anesthesia sensitivity, ear and dental checks)"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "Recommended Health Tests from the National Breed Club (Hip Evaluation, Elbow Evaluation, Ophthalmologist Evaluation)"
        },
        {
          id: "ofa-belgian-sheepdog-chic-requirements",
          role: "verified",
          locator: "Belgian Sheepdog CHIC testing requirements"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "cited",
          locator: "Health section (regular teeth brushing)"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "cited",
          locator: "Health section (regular ear checks)"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "cited",
          locator: "Grooming section"
        }
      ],
      verifiedOn: null,
      note: null
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "cited",
          locator: "About the Breed, Exercise, and Training sections"
        }
      ],
      verifiedOn: null,
      note: "Editorial household suitability assessment based on high working energy and sensitivity."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-belgian-shepherd-dog-groenendael-breed-profile",
          role: "verified",
          locator: "About this breed (1891 Prof. Adolphe Reul examining 117 dogs, four coat varieties)"
        },
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "Did You Know (Nicolas Rose foundation couple, Club du Chien de Berger Belge)"
        },
        {
          id: "the-kennel-club-belgian-shepherd-dog-groenendael-breed-standard",
          role: "verified",
          locator: "Colour (muzzle frosting normal, small white on forechest/toes tolerated)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Size (60-66 cm / 56-62 cm), Weight (25-30 kg / 20-25 kg), and four varieties"
        },
        {
          id: "akc-belgian-sheepdog-breed-profile",
          role: "verified",
          locator: "Grooming, Exercise, Training, and Recommended Health Tests"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    }
  },

  updatedOn: "2026-11-21"
};
