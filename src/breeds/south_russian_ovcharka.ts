import type { Breed } from "../schema/breed.types";

export const south_russian_ovcharka: Breed = {
  slug: "south-russian-ovcharka",
  name: "South Russian Shepherd Dog",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "South Russian Ovcharka",
    "Berger de Russie méridionale",
    "Südrussischer Ovtcharka",
    "Perro de pastor de Rusia meridional"
  ],

  group: "Sheepdogs and Cattledogs (Group 1, Section 1: Sheepdogs)",

  origin: {
    country: "Russia",
    region: null
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Owczarek_po%C5%82udnioworosyjski_ju%C5%BCak_00p.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Owczarek_po%C5%82udnioworosyjski_ju%C5%BCak_00p.jpg",
      title: "Owczarek południoworosyjski jużak 00p.jpg",
      description: "South Russian Ovcharka during dog's show in Racibórz, Poland",
      creator: "Przykuta",
      uploader: null,
      capturedOn: null,
      uploadedOn: null,
      width: 3112,
      height: 1980,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Przykuta, via Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Owczarek_po%C5%82udnioworosyjski_ju%C5%BCak_00p.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Owtchar_aka_Russian_Sheepdog_from_1915.JPG",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Owtchar_aka_Russian_Sheepdog_from_1915.JPG",
      title: "Owtchar aka Russian Sheepdog from 1915.JPG",
      description: "Owtchar aka Russian Sheepdog from 1915",
      creator: null,
      uploader: null,
      capturedOn: null,
      uploadedOn: null,
      width: 1812,
      height: 1353,
      licenseId: "public-domain",
      attribution: null,
      restrictions:
        "Historical illustration from W. E. Mason, Dogs of All Nations (1915). The file page states it is in the public domain in the United States because it was first published before 1931; the author is not named.",
      metadataCheckedOn: "2026-11-17"
    }
  ],

  overview: {
    summary:
      "A large, powerful flock guardian from the southern steppes, wrapped in a long, harsh, mostly white coat and known for its calm confidence, independence and deep suspicion of strangers.",

    description:
      "The South Russian Shepherd Dog is a big, strongly built herding and guarding breed, somewhat longer than it is tall and never heavy or stocky. Its most striking feature is the coat: at least 10 cm long, harsh and shaggy, covering the whole dog, including the head and eyes, over a soft, thick, lighter undercoat. Colours are white or white with pale shading or patches of yellowish, grey, wheaten or ivory tones; puppies often change colour before reaching their adult shade at about 18 to 24 months. The head is long, the eyes are almond-shaped and brown, and the low-set triangular ears lie close to the cheeks under thick hair. By nature the breed is balanced, self-assured and independent. It forms a strong bond with its own family but treats strangers with wariness and reserve, a trait that comes from generations of guarding sheep, cattle and property with little human direction.",

    history:
      "The breed's ancestors are thought to include rough-coated, bearded sheepdogs that came from Spain to the steppes of southern Russia together with fine-wool sheep in the early nineteenth century; this movement is noted in the Russian Empire's law collection published in 1830. These lighter herding dogs were crossed with local shepherd dogs and sighthound-type dogs, producing a tougher, larger guardian suited to life on the open steppe. The dogs became known abroad, and at the Paris World's Fair of 1867 a Russian sheepdog won a gold medal for beauty. From 1898, systematic breeding on the Askania-Nova estate of Friedrich von Falz-Fein shaped the modern type and gave the breed its name. The first official standard was approved in the Soviet Union in the early 1930s. The breed received definitive international recognition in 1983 and was recognised in the United States in 1996, where its registered name changed from South Russian Ovcharka to South Russian Shepherd Dog in 2009. It remains rare outside its homeland.",

    originalPurpose:
      "Herding and guarding flocks of sheep and cattle on the steppes, and protecting farms and property.",

    currentRoles: [
      "Livestock guardian",
      "Property and family guardian",
      "Show dog"
    ]
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "cm",
      male: {
        min: 66,
        max: null
      },
      female: {
        min: 62,
        max: null
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 35,
        max: null
      },
      female: {
        min: 30,
        max: null
      }
    },

    lifespanYears: null,

    coatType:
      "Long, harsh, thick and shaggy outer coat, sometimes slightly wavy, over a soft, long, thick undercoat that is lighter in colour",

    coatLength: "Long (at least 10 cm)",

    coatColors: [
      "White",
      "White with yellowish shading",
      "White with grey patches",
      "White with wheaten (biscuit) patches",
      "White with pale ivory patches"
    ],

    sheddingLevel: null,

    droolingLevel: null,

    distinctiveFeatures: [
      "Height at the withers of at least 66 cm in males and 62 cm in females; larger dogs are preferred if well proportioned",
      "Body length 10–12% greater than height at the withers",
      "Long, harsh coat of at least 10 cm covering the whole body, including the face and eyes",
      "Head length about 40% of the height at the withers",
      "Almond-shaped brown eyes, set wide apart",
      "Low-set, medium-sized triangular ears hanging close to the cheeks",
      "Tail reaching at least the hock, often ending in a hook, never curled over the back",
      "Adult coat colour settles at about 18–24 months"
    ]
  },

  temperament: {
    traits: [
      "Well-balanced",
      "Self-confident",
      "Independent",
      "Devoted to its owner",
      "Wary and reserved with strangers",
      "Strongly protective"
    ],

    scores: {
      affection: 3,
      withChildren: 2,
      withDogs: 2,
      withStrangers: 1,
      protectiveness: 5,
      independence: 5,
      trainability: 2,
      barking: 3,
      energy: 3
    }
  },

  care: {
    exercise: {
      level:
        "Moderate to high; needs daily walks plus space to patrol, rather than intense, repetitive exercise",

      minutesPerDay: null,

      activities: [
        "Daily on-lead walks in varied surroundings",
        "Patrolling a large, securely fenced property",
        "Calm structured training sessions",
        "Livestock guarding work where appropriate"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Brush and comb the long coat through to the skin several times a week, and daily during seasonal shedding, to prevent felting and mats.",

      bathing:
        "Bathe only when needed and dry the coat completely; a damp, dense coat can mat and irritate the skin.",

      notes: [
        "The undercoat sheds heavily at least once a year, needing extra combing.",
        "Keep hair around the feet, hygiene areas and ears tidy to prevent soiling and mats.",
        "Check the eyes under the facial hair and keep the area clean.",
        "Trim the nails regularly; large dogs that walk mostly on grass may not wear them down."
      ]
    },

    training: {
      difficulty:
        "Challenging; intelligent but independent and dominant, so it needs an experienced, consistent handler",

      tips: [
        "Start training and handling early, before the puppy becomes large and strong.",
        "Use calm, consistent, reward-based methods and clear household rules.",
        "Teach reliable lead walking and a controlled greeting routine for visitors.",
        "Never rely on off-lead control in public places.",
        "Seek help from a trainer experienced with livestock guardian breeds if guarding behaviour becomes a concern."
      ],

      socialization:
        "Extensive, well-managed socialisation from puppyhood with people, other dogs and everyday situations is essential. Even well-socialised adults usually remain reserved with strangers, so visitors should be introduced under control."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Adapts to a wide range of climates",
        "In hot weather, provide shade, water and rest, and exercise in the cooler hours"
      ],

      aloneTimeTolerance:
        "Moderate for an adult with a secure property to watch, but long isolation from its family can lead to boredom and problem behaviour."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced diet formulated for large-breed dogs, with large-breed puppy food during growth.",

    feedingFrequency: {
      puppy:
        "Three to four meals a day until about six months old, then two meals a day.",
      adult: "Two measured meals a day.",
      senior:
        "Two smaller meals a day, adjusted for activity and body condition."
    },

    guidelines:
      "Feed measured meals and adjust portions to keep a lean, muscular body. The thick coat can hide weight gain, so check by feeling the ribs and waist. Keep fresh water available at all times.",

    considerations: [
      "Use a large-breed puppy diet so growth is steady rather than fast.",
      "Avoid vigorous exercise just before and after meals.",
      "Splitting the daily food into at least two meals is commonly advised for large, deep-chested dogs.",
      "Change foods gradually over about a week."
    ],

    note:
      "Calorie needs vary with age, neutering status and activity. A vet can recommend a target weight and portion size."
  },

  health: {
    overview:
      "Very little published health data exists for this breed, and no breed-specific health survey or screening programme was found. Owners should apply the usual precautions for large, heavy dogs: careful growth in puppyhood, keeping the dog lean, and hip and elbow screening of breeding dogs.",

    commonConditions: [],

    preventiveCare: [
      "Ask breeders whether the parents have had hip and elbow X-ray screening.",
      "Keep the dog lean, especially while it is growing.",
      "Avoid forced or repetitive high-impact exercise until the skeleton has matured.",
      "Learn the signs of bloat, such as a swollen belly and unproductive retching, and treat them as an emergency.",
      "Keep up yearly health checks, vaccinations and parasite control, and check under the coat for skin problems."
    ],

    recommendedScreenings: [
      "Hip dysplasia X-ray screening for breeding dogs",
      "Elbow dysplasia X-ray screening for breeding dogs"
    ],

    dentalCare:
      "Brush the teeth several times a week with dog toothpaste and have the mouth checked at each vet visit.",

    earCare:
      "Check the hair-covered ears weekly for wax, smell or redness and keep the hair around the ear opening free of mats.",

    skinCare:
      "Part the coat to the skin while grooming to look for mats, redness, hot spots or parasites. Dense mats trap moisture and should be worked out or carefully trimmed."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: null,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Experienced owners of guardian breeds",
      "Homes with a large, securely fenced property",
      "Farms needing a livestock guardian",
      "Owners prepared for substantial coat care"
    ],

    notIdealFor: [
      "First-time dog owners",
      "Flats or homes without secure outdoor space",
      "Households with frequent unfamiliar visitors",
      "Owners wanting a dog that is friendly with everyone",
      "People unable to manage a large, strong dog physically"
    ]
  },

  funFacts: [
    "A Russian sheepdog won a gold medal for beauty at the Paris World's Fair in 1867.",
    "The breed's modern type was shaped from 1898 on the Askania-Nova estate of Friedrich von Falz-Fein.",
    "Its coat must be at least 10 cm long, and it covers the eyes as well as the body.",
    "Puppies often change colour as they grow, settling on their adult shade at around 18 to 24 months.",
    "In the United States the breed was first registered as the South Russian Ovcharka and renamed the South Russian Shepherd Dog in 2009."
  ],

  faq: [
    {
      question: "How big does a South Russian Shepherd Dog get?",
      answer:
        "Males should be at least 66 cm at the withers and at least 35 kg; females at least 62 cm and 30 kg. Larger dogs are preferred if they are well proportioned."
    },
    {
      question: "Is this breed good for first-time owners?",
      answer:
        "Generally no. It is a powerful, independent guardian that needs an experienced, consistent owner and careful socialisation."
    },
    {
      question: "How does it behave with strangers?",
      answer:
        "It is devoted to its family but naturally wary and reserved with people it does not know, and it will guard its home. Visitors should always be introduced under control."
    },
    {
      question: "How much grooming does the coat need?",
      answer:
        "A lot. The long coat should be brushed through several times a week, and daily when the undercoat sheds, to prevent mats."
    },
    {
      question: "What colours does the breed come in?",
      answer:
        "White, white with yellowish shading, or white with grey, wheaten or pale ivory patches. Puppies may change colour before they reach adulthood."
    },
    {
      question: "How long does the breed live?",
      answer:
        "No reliable lifespan figure was found for this breed. As with other large dogs, good weight control and veterinary care help support a long life."
    },
    {
      question: "What health problems does the breed have?",
      answer:
        "Breed-specific health data is very limited. Like other large breeds, it benefits from hip and elbow screening of breeding dogs, controlled growth and a lean body weight."
    }
  ],

  references: [
    "fci-south-russian-shepherd-dog-official-standard",
    "fci-south-russian-shepherd-dog-nomenclature",
    "ukc-south-russian-shepherd-dog-standard",
    "wikimedia-south-russian-ovcharka-przykuta-raciborz",
    "wikimedia-south-russian-ovcharka-mason-1915"
  ],

  evidence: {
    scientificName: {
      reliability: "unverified",
      sources: [],
      verifiedOn: null,
      note:
        "Canis lupus familiaris is the domestic-dog label used across the catalog; breed standards do not state it."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-south-russian-shepherd-dog-nomenclature",
          role: "verified",
          locator: "Official names: BERGER DE RUSSIE MERIDIONALE; SÜDRUSSISCHER OVTCHARKA; PERRO DE PASTOR DE RUSIA MERIDIONAL"
        },
        {
          id: "ukc-south-russian-shepherd-dog-standard",
          role: "verified",
          locator: "Recognized 1 January 1996 as the South Russian Ovcharka"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Official names written in normal case rather than the nomenclature page's capitals."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-south-russian-shepherd-dog-official-standard",
          role: "verified",
          locator: "FCI-CLASSIFICATION: Group 1 Sheepdogs and Cattle Dogs; Section 1 Sheepdogs; without working trial"
        },
        {
          id: "fci-south-russian-shepherd-dog-nomenclature",
          role: "verified",
          locator: "Group n°1; Section: Sheepdogs"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-south-russian-shepherd-dog-official-standard",
          role: "verified",
          locator: "ORIGIN: Russia"
        },
        {
          id: "fci-south-russian-shepherd-dog-nomenclature",
          role: "verified",
          locator: "Country of origin: Russian Federation"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Country as recorded by the FCI."
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The standard refers only to the southern steppes; a modern region is not recorded here."
    },

    "overview.summary": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-south-russian-shepherd-dog-official-standard",
          role: "verified",
          locator: "GENERAL APPEARANCE; BEHAVIOUR/TEMPERAMENT; HAIR; COLOUR; UTILIZATION"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "overview.description": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-south-russian-shepherd-dog-official-standard",
          role: "verified",
          locator: "GENERAL APPEARANCE; IMPORTANT PROPORTIONS; BEHAVIOUR/TEMPERAMENT; EYES; EARS; HAIR; COLOUR; UTILIZATION"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Written in original wording from the standard."
    },

    "overview.history": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-south-russian-shepherd-dog-official-standard",
          role: "verified",
          locator: "BRIEF HISTORICAL SUMMARY: Spanish ancestry noted in 1830 law collection; 1867 Paris gold medal; 1898 Askania-Nova selection; first standard early 1930s"
        },
        {
          id: "fci-south-russian-shepherd-dog-nomenclature",
          role: "verified",
          locator: "Date of acceptance on a definitive basis: 1983"
        },
        {
          id: "ukc-south-russian-shepherd-dog-standard",
          role: "verified",
          locator: "Recognized 1 January 1996; name changed effective 1 January 2009"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Rarity outside the homeland is an editorial remark."
    },

    "overview.originalPurpose": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-south-russian-shepherd-dog-official-standard",
          role: "verified",
          locator: "UTILIZATION: herding and guardian dog; protecting cattle; guarding premises"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "overview.currentRoles": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-south-russian-shepherd-dog-official-standard",
          role: "cited",
          locator: "UTILIZATION"
        }
      ],
      verifiedOn: null,
      note: "Editorial summary of present-day uses."
    },

    "physical.sizeCategory": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-south-russian-shepherd-dog-official-standard",
          role: "verified",
          locator: "GENERAL APPEARANCE: above-medium to large size"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-south-russian-shepherd-dog-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: males not less than 66 cm; females not less than 62 cm"
        },
        {
          id: "ukc-south-russian-shepherd-dog-standard",
          role: "cited",
          locator: "Height: males minimum 25 inches; females minimum 24 inches"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "The standard sets minimums only, so no maximum is stored."
    },

    "physical.height.male.max": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No maximum height is published; the standard prefers larger dogs if well proportioned."
    },

    "physical.height.female.max": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No maximum height is published."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-south-russian-shepherd-dog-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: males not less than 35 kg; females not less than 30 kg"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Minimum weights only."
    },

    "physical.weight.male.max": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No maximum weight is published."
    },

    "physical.weight.female.max": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No maximum weight is published."
    },

    "physical.lifespanYears": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No standard, kennel-club or scientific source checked gives a lifespan for this breed."
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-south-russian-shepherd-dog-official-standard",
          role: "verified",
          locator: "HAIR: long, harsh, thick, coarse and shaggy; soft, long, thick undercoat, lighter in colour"
        },
        {
          id: "ukc-south-russian-shepherd-dog-standard",
          role: "verified",
          locator: "Coat: long, coarse, thick and dense with well-developed undercoat"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-south-russian-shepherd-dog-official-standard",
          role: "verified",
          locator: "HAIR: not less than 10 cm"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-south-russian-shepherd-dog-official-standard",
          role: "verified",
          locator: "COLOUR: white, white with yellowish shading, white with grey, wheaten (biscuit) or pale ivory patches"
        },
        {
          id: "ukc-south-russian-shepherd-dog-standard",
          role: "conflicting",
          locator: "Color: also lists straw, ashen grey and other shades of grey, and grey speckled"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "The UKC standard accepts a wider range of greys than the FCI standard."
    },

    "physical.sheddingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No source checked rates shedding for this breed."
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No source checked rates drooling for this breed."
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-south-russian-shepherd-dog-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS; EYES; EARS; TAIL; HAIR; COLOUR; SIZE AND WEIGHT"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-south-russian-shepherd-dog-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: well-balanced, self-confident, independent; devoted to owner; wary and reserved with strangers"
        },
        {
          id: "ukc-south-russian-shepherd-dog-standard",
          role: "verified",
          locator: "Characteristics: distrustful of strangers, dominant in character"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-south-russian-shepherd-dog-official-standard",
          role: "cited",
          locator: "BEHAVIOUR/TEMPERAMENT; UTILIZATION"
        },
        {
          id: "ukc-south-russian-shepherd-dog-standard",
          role: "cited",
          locator: "Characteristics"
        }
      ],
      verifiedOn: null,
      note: "Editorial 1–5 estimates. No published trait ratings were found."
    },

    "care.exercise.level": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial judgement for a large guardian breed."
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No source checked gives a daily exercise figure."
    },

    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General activity ideas for a guardian breed."
    },

    "care.grooming": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-south-russian-shepherd-dog-official-standard",
          role: "cited",
          locator: "HAIR: coat at least 10 cm with thick undercoat"
        }
      ],
      verifiedOn: null,
      note: "General long-coat care advice; the grooming level is an editorial rating based on coat length and density."
    },

    "care.training": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-south-russian-shepherd-dog-official-standard",
          role: "cited",
          locator: "BEHAVIOUR/TEMPERAMENT"
        }
      ],
      verifiedOn: null,
      note: "Training guidance for an independent, protective guardian."
    },

    "care.training.difficulty": {
      reliability: "estimate",
      sources: [
        {
          id: "ukc-south-russian-shepherd-dog-standard",
          role: "cited",
          locator: "Characteristics: dominant in character"
        }
      ],
      verifiedOn: null,
      note: "Editorial judgement."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial judgement based on size and guarding instinct."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial judgement."
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "ukc-south-russian-shepherd-dog-standard",
          role: "cited",
          locator: "Characteristics: can adapt to many climates and temperatures"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial judgement."
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General feeding advice for large-breed dogs."
    },

    health: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific health study, survey or screening programme was found; health content is general large-breed guidance."
    },

    "health.commonConditions": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific evidence of common conditions was found. Popular breed websites mention hip dysplasia and bloat but cite no data."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "fci-south-russian-shepherd-dog-official-standard",
          role: "cited",
          locator: "BEHAVIOUR/TEMPERAMENT; UTILIZATION"
        },
        {
          id: "ukc-south-russian-shepherd-dog-standard",
          role: "cited",
          locator: "Characteristics"
        }
      ],
      verifiedOn: null,
      note: "Editorial suitability judgements."
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No source checked assesses the breed with children; it depends heavily on the individual dog and household."
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-south-russian-shepherd-dog-official-standard",
          role: "verified",
          locator: "BRIEF HISTORICAL SUMMARY; HAIR; COLOUR"
        },
        {
          id: "ukc-south-russian-shepherd-dog-standard",
          role: "verified",
          locator: "Name changed to South Russian Shepherd Dog effective 1 January 2009"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    faq: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-south-russian-shepherd-dog-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT; BEHAVIOUR/TEMPERAMENT; HAIR; COLOUR"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Answers about owners, grooming and health include general guidance alongside verified facts."
    }
  },

  updatedOn: "2026-11-17"
};
