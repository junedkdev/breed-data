import type { Breed } from "../schema/breed.types";

export const bolognese: Breed = {
  slug: "bolognese",
  name: "Bolognese",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Bichon Bolognese",
    "Bolo",
    "Bologneser",
    "Bichon Bolonais"
  ],

  group: "Bichon and Related Toy Companion (Companion and Toy)",

  origin: {
    country: "Italy",
    region: "Bologna, Emilia-Romagna, northern Italy"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Male_adult_bolognese_dog.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Male_adult_bolognese_dog.jpg",
      title: "Male adult bolognese dog.jpg",
      description: "An adult male white Bolognese standing outdoors.",
      creator: "Mrtibbs1999",
      uploader: "Mrtibbs1999",
      capturedOn: "2024-04-01",
      uploadedOn: "2024-04-01",
      width: 1179,
      height: 1259,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Mrtibbs1999, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Male_adult_bolognese_dog.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bolo%C5%84czyk_5e3.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Bolo%C5%84czyk_5e3.jpg",
      title: "Bolończyk 5e3.jpg",
      description: "An adult Bolognese photographed at a dog show in Poznań.",
      creator: "Pleple2000",
      uploader: "Pleple2000",
      capturedOn: "2006-11-12",
      uploadedOn: "2006-11-21",
      width: 2184,
      height: 2190,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Pleple2000, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Bolo%C5%84czyk_5e3.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    }
  ],

  overview: {
    summary:
      "A small, square-built Italian toy companion of the bichon family, prized for its pure white flocky coat, dark expressive eyes, calm demeanor, and deep devotion to its people.",

    description:
      "The Bolognese is a compact, sturdy toy dog with a square outline in which body length from shoulder to buttock equals height at the withers. Its signature feature is a long, airy, pure white coat that stands off the body in loose, fluffy flocks rather than hanging flat or forming straight fringes, contrasted by a large black nose, dark-rimmed lips, and round dark eyes. High-set hanging ears are firm enough at the base to stand slightly away from the skull, giving the head a broad, expressive frame. Quiet, observant, and deeply attached to its household, the Bolognese prefers staying close to its family and adapts smoothly to calm indoor life.",

    history:
      "Named for the northern Italian city of Bologna, the Bolognese shares ancient Mediterranean ancestry with the Maltese and other white bichon lapdogs mentioned by Aristotle as Canes Melitenses. Valued in Italy as early as the 11th and 12th centuries, the breed reached peak prestige during the Renaissance as a favored companion and diplomatic gift among European courts. Cosimo de' Medici carried eight puppies to Brussels as gifts for Belgian noblemen, and King Philip II of Spain—after receiving two from the Duke d'Este—wrote that they were the most royal gift one could present to an emperor. Artists such as Titian, Pieter Bruegel the Elder, and Goya painted Bolognese dogs in noble portraits, and Flemish weavers featured them in 17th-century tapestries. Later Italian breeders preserved the breed's classic type through the 20th century, and it entered Britain in 1989.",

    originalPurpose:
      "Indoor lapdog and close household companion in Italian and European noble courts.",

    currentRoles: [
      "Devoted indoor family and lap companion",
      "Calm apartment companion for retirees, seniors, and home-based owners",
      "Therapy and visiting dog",
      "Participant in obedience, rally, scent work, and trick training"
    ]
  },

  physical: {
    sizeCategory: "Toy",

    height: {
      unit: "cm",
      male: {
        min: 27,
        max: 30
      },
      female: {
        min: 25,
        max: 28
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 2.5,
        max: 4
      },
      female: {
        min: 2.5,
        max: 4
      }
    },

    lifespanYears: {
      min: 12,
      max: 14
    },

    coatType:
      "Long, airy, flocky single coat covering the body from head to tail (shorter on the muzzle), standing off the skin in loose tufts rather than lying flat or forming fringes.",

    coatLength: "Long",

    coatColors: [
      "Pure White"
    ],

    sheddingLevel: "Low",
    droolingLevel: "Low",

    distinctiveFeatures: [
      "Square, compact build where body length matches height at the withers",
      "Pure white, fluffy flocky coat worn naturally untrimmed without sculpted styling",
      "Large, round dark eyes framed by black-pigmented rims and a large black nose",
      "High-set, long hanging ears that are firm at the base and stand slightly away from the skull, making the head look broader",
      "Straight back with a slightly convex loin and a high-set tail curving smoothly over the back",
      "Tightly pigmented dark lips and complete scissor bite"
    ]
  },

  temperament: {
    traits: [
      "Serene",
      "Calm",
      "Devoted",
      "Affectionate",
      "Docile",
      "Playful",
      "Intelligent",
      "Observant",
      "Reserved with strangers"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 2,
      independence: 2,
      trainability: 4,
      barking: 2,
      energy: 2
    }
  },

  care: {
    exercise: {
      level: "Moderate",
      minutesPerDay: {
        min: 30,
        max: 45
      },
      activities: [
        "Daily leisurely neighborhood walks",
        "Indoor ball rolling, hide-and-seek, and soft toy play",
        "Short trick-training and scent-work games",
        "Supervised playtime in a securely fenced yard"
      ]
    },

    grooming: {
      level: "High",
      brushing: "Comb and brush gently three to four times weekly down to the skin to keep the fluffy flocks tangle-free",
      bathing: "Occasional baths as needed with a gentle dog shampoo to keep the white coat clean and bright",
      notes: [
        "Keep the coat in its natural, untrimmed flocky state for traditional presentation, trimming only around the eyes and sanitary areas; many pet owners opt for a shorter all-over trim for simpler daily upkeep.",
        "Wipe around the eyes regularly to limit tear staining and clean the muzzle after meals.",
        "Check the long hanging ears weekly for wax or debris and trim nails regularly.",
        "Brush teeth often to reduce plaque buildup common in toy mouths."
      ]
    },

    training: {
      difficulty: "Easy",
      tips: [
        "Use gentle, reward-based training with small treats and warm praise; harsh corrections upset this sensitive companion.",
        "Keep sessions short, playful, and consistent, especially during early house-training.",
        "Set calm, clear household rules so the dog does not develop pushy 'small dog' habits.",
        "Practice gradual, low-stress alone-time routines early to help reduce separation anxiety."
      ],
      socialization:
        "Introduce puppies gently to unfamiliar people, calm dogs, and everyday sights and sounds so their natural reserve warms smoothly into friendly confidence."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: ["Temperate", "Warm"],
      aloneTimeTolerance: "Low"
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced toy-breed dog food matched to the dog's life stage and modest activity level.",

    feedingFrequency: {
      puppy: "Three to four small measured meals daily until six months old, then two meals",
      adult: "Two measured meals per day",
      senior: "Two smaller, portion-controlled meals per day"
    },

    guidelines:
      "Measure meals carefully and keep training treats modest, because small companion dogs can gain weight easily. Choose small kibble suited to tiny jaws and keep fresh drinking water available at all times.",

    considerations: [
      "Watch calorie intake closely to prevent excess weight that strains small knee joints.",
      "Offer small-bite food and shallow bowls to keep long facial hair cleaner.",
      "Transition gradually when changing diets and avoid fatty table scraps."
    ],

    note:
      "Confirm exact daily portions and any special dietary needs with your veterinarian."
  },

  health: {
    overview:
      "The Bolognese is generally a healthy, sturdy toy breed with a typical lifespan of 12 to 14 years. No breed-wide severe conformational exaggerations affect the breed, and health screening focuses on orthopedic and eye conditions monitored in small companion dogs—especially patellar luxation and inherited retinal or lens disorders—alongside routine dental care for compact toy jaws.",

    commonConditions: [
      "Patellar luxation — slipping of the kneecap out of its normal groove, a primary orthopedic screening focus in toy breeds",
      "Progressive retinal atrophy (PRA-prcd) and other inherited eye anomalies — monitored through genetic testing and routine veterinary eye exams",
      "Hereditary cataracts — lens clouding screened through periodic ophthalmologist examinations",
      "Legg-Calvé-Perthes disease — a hip-joint bone blood-supply condition occasionally reported in small toy dogs",
      "Periodontal disease — tartar accumulation and gum inflammation common in crowded toy mouths without regular brushing",
      "Tear staining (epiphora) — brownish staining beneath the eyes caused by tearing on white facial hair, managed through routine wiping"
    ],

    preventiveCare: [
      "Ask breeders for documented clearances on patella evaluations, veterinary eye exams, and PRA-prcd genetic testing.",
      "Brush teeth regularly and schedule routine veterinary dental checks.",
      "Maintain a healthy, lean weight to protect knees and hips, and keep up with annual wellness exams and parasite prevention."
    ],

    recommendedScreenings: [
      "Patella orthopedic evaluation",
      "PRA-prcd DNA test",
      "Veterinary ophthalmologist eye examination",
      "Cardiac examination"
    ],

    dentalCare:
      "Brush teeth several times a week—ideally daily—using dog-safe toothpaste, and schedule routine veterinary dental exams to keep small jaws healthy.",

    earCare:
      "Check the long, well-coated hanging ears weekly for wax buildup, odor, or redness, and clean gently with a vet-approved solution.",

    skinCare:
      "Part the flocky white coat during regular combing to inspect the skin for tangles, dryness, redness, or parasites."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: false,
    apartmentLiving: true,

    idealFor: [
      "Home-based owners, retirees, and seniors who can offer steady daily companionship",
      "Apartment or house dwellers looking for a calm, quiet, low-shedding toy dog",
      "First-time dog owners ready for regular coat brushing and gentle training",
      "Families with calm, respectful children who handle small dogs carefully"
    ],

    notIdealFor: [
      "Households away on long full-time workdays, as the breed is prone to separation anxiety",
      "Owners unwilling to commit to frequent combing and eye-area coat care",
      "Homes with rough toddlers who might accidentally injure a small toy dog",
      "People seeking a high-endurance jogging partner or loud guard dog"
    ]
  },

  funFacts: [
    "During the Renaissance, Cosimo de' Medici brought eight Bolognese puppies to Brussels as gifts for Belgian noblemen.",
    "After receiving two Bolognese from the Duke d'Este, King Philip II of Spain wrote to thank him, calling them the most royal gift one could bestow upon an emperor.",
    "Venetian master Titian painted Duke Federico Gonzaga caressing his Bolognese, and the breed also appears in works by Pieter Bruegel the Elder, Francisco Goya, and 17th-century Flemish tapestries.",
    "Unlike the Bichon Frise, whose coat is blown out and scissored into rounded shapes, the Bolognese is traditionally presented in its natural, untrimmed flocky tufts.",
    "High-set ears that stand slightly stiff at the base create the optical illusion that a Bolognese's head is broader than it actually is."
  ],

  faq: [
    {
      question: "How is a Bolognese different from a Bichon Frise?",
      answer:
        "Both are small white companions in the bichon family, but the Bolognese has a long, airy, flocky coat worn naturally untrimmed and a calmer, more serene temperament, whereas the Bichon Frise is typically scissored into a rounded plush silhouette."
    },
    {
      question: "How big does a Bolognese get?",
      answer:
        "Adult males stand 27 to 30 cm at the withers and females stand 25 to 28 cm, with a typical weight of 2.5 to 4 kg."
    },
    {
      question: "Can a Bolognese be left alone during a full workday?",
      answer:
        "No. Bolognese form a very close bond with their people and are prone to separation anxiety, so they thrive best in homes where someone is around much of the day."
    },
    {
      question: "Do Bolognese dogs shed much?",
      answer:
        "They shed very little onto furniture, though loose hair catches inside their flocky coat and must be combed out several times a week to prevent matting."
    },
    {
      question: "Are Bolognese good apartment dogs?",
      answer:
        "Yes. Their compact size, calm indoor habits, and modest exercise needs make them well suited to apartment living when paired with daily walks and indoor play."
    },
    {
      question: "What health tests are recommended for Bolognese breeding stock?",
      answer:
        "Recommended screenings include a patella evaluation, a PRA-prcd DNA test, a veterinary ophthalmologist eye examination, and routine cardiac checks."
    }
  ],

  references: [
    "fci-bolognese-official-standard",
    "fci-bolognese-nomenclature",
    "enci-bolognese-breed-standard",
    "akc-bolognese-breed-profile",
    "the-kennel-club-bolognese-breed-standard",
    "rkc-bolognese-breed-profile",
    "ukc-bolognese-breed-standard",
    "ofa-bolognese-health-screenings",
    "natureserve-canis-lupus-familiaris",
    "the-dog-api",
    "wikimedia-bolognese-1-lilly-m",
    "wikimedia-bolognese-600-tomasz-sienicki"
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
          id: "fci-bolognese-nomenclature",
          role: "verified",
          locator: "Multilingual names (Bichon Bolonais, Bologneser)"
        },
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Did You Know and Grooming sections (Bichon Bolognese, Bolo)"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names (Bichon Bolognese, Bolo)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "Group 9 Companion and Toy Dogs, Section 1 Bichons and related breeds, without working trial"
        },
        {
          id: "the-kennel-club-bolognese-breed-standard",
          role: "verified",
          locator: "Toy Group"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.breed_group (Toy)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Presented in plain descriptive wording without registry codes or acronyms."
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bolognese-nomenclature",
          role: "verified",
          locator: "Country of origin: Italy"
        },
        {
          id: "enci-bolognese-breed-standard",
          role: "verified",
          locator: "Origine: Italia"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin (Bologna, Italy)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-bolognese-breed-profile",
          role: "verified",
          locator: "About this breed (north Italian city of Bologna)"
        },
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "History section (Bologna, Italy)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "overview.summary": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "General Appearance, Body, Coat, and Temperament"
        },
        {
          id: "akc-bolognese-breed-profile",
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
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "Body (square construction), Ears (rigid at base, detached from skull), Coat, and Temperament"
        },
        {
          id: "the-kennel-club-bolognese-breed-standard",
          role: "verified",
          locator: "General Appearance, Head and Skull, Eyes, Ears, and Proportions"
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
          id: "enci-bolognese-breed-standard",
          role: "verified",
          locator: "Storia (Aristotle Canes Melitenses, Cosimo de' Medici, King Philip II of Spain and Duke d'Este, Titian, Bruegel, Goya)"
        },
        {
          id: "the-kennel-club-bolognese-breed-standard",
          role: "verified",
          locator: "Brief Historical Summary (known in Bologna since 14th century, entered UK in 1989)"
        },
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "History and Did You Know sections (11th-12th centuries, 17th-century Flemish tapestries)"
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
          id: "enci-bolognese-breed-standard",
          role: "verified",
          locator: "Storia (companion and royal court gift)"
        },
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "About the Breed (companion dog)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "overview.currentRoles": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "About the Breed, Exercise, and Companion Events sections"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.sizeCategory": {
      reliability: "official_standard",
      sources: [
        {
          id: "the-kennel-club-bolognese-breed-standard",
          role: "verified",
          locator: "General Appearance (small white toy dog)"
        },
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Toy Group designation"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.height.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "Size and Weight: Males 27-30 cm"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric (25-30 cm combined)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Kept official FCI sex-specific male height (27-30 cm); The Dog API gives a single combined 25-30 cm range."
    },

    "physical.height.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "Size and Weight: Females 25-28 cm"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric (25-30 cm combined)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Kept official FCI sex-specific female height (25-28 cm); The Dog API gives a single combined 25-30 cm range."
    },

    "physical.weight.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "Size and Weight: 2.5-4 kg"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (2.5-4 kg)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "FCI Standard No. 196 and The Dog API both publish a single breed-wide weight range of 2.5-4 kg."
    },

    "physical.weight.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "Size and Weight: 2.5-4 kg"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (2.5-4 kg)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "FCI Standard No. 196 and The Dog API both publish a single breed-wide weight range of 2.5-4 kg."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
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
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "Coat (long, flocky, standing off body without fringes)"
        },
        {
          id: "rkc-bolognese-breed-profile",
          role: "verified",
          locator: "About this breed (white flocks, shown untrimmed)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Coat Length: Long"
        },
        {
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "Coat: Long all over the body"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "Colour: Pure white without any patches or shades of white"
        },
        {
          id: "rkc-bolognese-breed-profile",
          role: "verified",
          locator: "Breed Standard colours: White only (Category 0)"
        },
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Breed Colors: White (199) only"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "GET /breeds/{id}/colours"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Discarded 16 non-white species-wide colours from The Dog API endpoint because official standards permit pure white only."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Grooming section (minimal/non-shedding)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
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
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "Body, Ears, Eyes, Topline, and Coat"
        },
        {
          id: "the-kennel-club-bolognese-breed-standard",
          role: "verified",
          locator: "Important Proportions, Head and Skull, Eyes, and Ears"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "Behaviour/Temperament (very serene, calm, faithful to master and entourage)"
        },
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "About the Breed (playful, easy-going, devoted, shy toward strangers until socialized)"
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
          id: "akc-bolognese-breed-profile",
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
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Exercise section (moderate exercise schedule, low-energy but playful)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "cited",
          locator: "Exercise section"
        }
      ],
      verifiedOn: null,
      note: "General daily exercise range for a calm toy companion."
    },

    "care.exercise.activities": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Exercise section (walks, fenced yard play, hide-and-seek, ball rolling, trick training)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.grooming.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Grooming section (regular grooming needed for full coat)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.grooming.brushing": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "cited",
          locator: "Grooming section"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.grooming.bathing": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Grooming section (occasional bath)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.grooming.notes": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Grooming section (unshaped/untrimmed full coat or shorter pet trim, nails, ears, teeth)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.training.difficulty": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
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
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Training and About the Breed sections (small dog syndrome prevention, separation anxiety management)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.training.socialization": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "About the Breed (can be shy with strangers, warms quickly when socialized)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Exercise section (great apartment dogs with moderate exercise)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Exercise section (fenced backyard playtime)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-bolognese-official-standard",
          role: "cited",
          locator: "Indoor companion single coat"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "About the Breed (prone to separation anxiety, ill-suited for 9-5 workday)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "cited",
          locator: "Nutrition section (age-appropriate food, calorie and weight monitoring)"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Health section (mostly healthy; patellar luxation, eye anomalies, PRA/PRCD)"
        },
        {
          id: "rkc-bolognese-breed-profile",
          role: "verified",
          locator: "Breed Watch (no special conformation points of concern identified)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Health section (luxating patellas, eye anomalies, PRA/PRCD)"
        },
        {
          id: "ofa-bolognese-health-screenings",
          role: "verified",
          locator: "Monitored orthopedic and ocular conditions"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Distinguishes primary breed-club screening priorities (patellar luxation, PRA-prcd, eye anomalies) from general toy-breed dental and tear-staining concerns."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "cited",
          locator: "Health and Grooming sections"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Recommended Health Tests from the National Breed Club (Patella Evaluation, PRA/PRCD, CAER Eye Examination)"
        },
        {
          id: "ofa-bolognese-health-screenings",
          role: "verified",
          locator: "Bolognese health screening guidelines"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "cited",
          locator: "Grooming section (regular teeth brushing)"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "cited",
          locator: "Grooming section (regular ear checks)"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
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
          id: "akc-bolognese-breed-profile",
          role: "cited",
          locator: "About the Breed and Exercise sections (seniors, retirees, apartments, not 9-5 workdays)"
        }
      ],
      verifiedOn: null,
      note: "Editorial household suitability assessment based on calm indoor habits and low alone-time tolerance."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "enci-bolognese-breed-standard",
          role: "verified",
          locator: "Storia (Cosimo de' Medici eight puppies to Brussels, King Philip II of Spain quote after Duke d'Este gift, Titian, Bruegel, Goya)"
        },
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Did You Know (Duke Federico Gonzaga portrait by Titian, 17th-century Flemish tapestries)"
        },
        {
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "Ears (rigid at base creating broader head impression) and untrimmed flocky coat"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Corrected historical attribution so the 'most royal gift' quote is accurately credited to King Philip II of Spain rather than Cosimo de' Medici."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "Size (27-30 cm / 25-28 cm), Weight (2.5-4 kg), and flocky coat"
        },
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "About the Breed, Grooming, Exercise, and Recommended Health Tests"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    }
  },

  updatedOn: "2026-11-21"
};
