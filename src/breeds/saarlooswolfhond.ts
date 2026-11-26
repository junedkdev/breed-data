import type { Breed } from "../schema/breed.types";

export const saarlooswolfhond: Breed = {
  slug: "saarlooswolfhond",
  name: "Saarlooswolfhond",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Saarloos Wolfdog",
    "Saarloos Wolfhond",
    "Chien-loup de Saarloos",
    "Perro lobo de Saarloos",
    "Saarlooswolfhund"
  ],

  group: "Sheepdogs and herding-type wolfdogs",

  origin: {
    country: "Netherlands",
    region: "Rotterdam and Dordrecht, South Holland"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hippie,_a_wolf_grey_saarloos_wolfdog.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Hippie,_a_wolf_grey_saarloos_wolfdog.jpg",
      title: "Hippie, a wolf grey saarloos wolfdog.jpg",
      description:
        "Portrait of an adult wolf-grey Saarlooswolfhond outdoors showing its wedge-shaped head, erect triangular ears, and light amber almond eyes.",
      creator: "@Hippie_Saarloos",
      uploader: "SaarloosWolfdog",
      capturedOn: "2019-09-04",
      uploadedOn: "2019-09-04",
      width: 1079,
      height: 1308,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by @Hippie_Saarloos (SaarloosWolfdog), Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Hippie,_a_wolf_grey_saarloos_wolfdog.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Saarloos_Wolfdog_1.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Saarloos_Wolfdog_1.jpg",
      title: "Saarloos Wolfdog 1.jpg",
      description:
        "Profile view of a male wolf-grey Saarlooswolfhond standing outdoors, displaying its long legs, balanced rectangular frame, and dense coat.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2016-12-11",
      uploadedOn: "2016-12-11",
      width: 600,
      height: 516,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Saarloos_Wolfdog_1.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    }
  ],

  overview: {
    summary:
      "A large, athletic Dutch wolfdog created from German Shepherd and Eurasian wolf crosses, known for its unmistakable lupine appearance, deep family loyalty, independent will, and cautious flight instinct.",

    description:
      "The Saarlooswolfhond is a strongly built, long-legged, rectangular dog whose body shape, effortless ground-covering trot, and dense seasonal coat closely mirror a wild wolf. Its broad, wedge-shaped head carries firm upright ears and obliquely set yellow almond eyes with a watchful, reserved gaze. Coats appear in shaded wolf-grey, forest-brown, or rare cream-to-white. Despite its imposing presence, this breed is neither aggressive nor suited for guard duty; it meets unfamiliar people and environments with natural caution and prefers to retreat rather than confront. Within its trusted home pack, however, it forms an intense, devoted bond and thrives on steady companionship.",

    history:
      "In 1932 in the Netherlands, breeder Leendert Saarloos crossed a German Shepherd Dog male with a female Eurasian wolf from the Rotterdam Zoo, hoping to restore natural stamina and resilience he believed modern working dogs had lost. Through careful backcrossing to the German Shepherd line, he established a distinct wolfdog population originally called the European Wolfdog. Although Saarloos hoped the dogs would excel in police or guide work, their inherited wolf-like caution and strong tendency to avoid unfamiliar situations proved poorly matched to noisy city service. After his death in 1969, Dutch enthusiasts continued refining the breed, achieving national recognition in 1975 under the name Saarlooswolfhond in his honor and international recognition in 1981.",

    originalPurpose:
      "Created to restore natural endurance and resilience for working and guide duties, though its cautious temperament ultimately directed it into specialized companionship.",

    currentRoles: [
      "Devoted household companion for experienced handlers",
      "Endurance hiking and rural trekking partner"
    ]
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "cm",
      male: {
        min: 65,
        max: 75
      },
      female: {
        min: 60,
        max: 70
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 36,
        max: 41
      },
      female: {
        min: 30,
        max: 35
      }
    },

    lifespanYears: {
      min: 12,
      max: 15
    },

    coatType:
      "Dense, weather-resistant double coat with a straight, harsh outer layer and a thick, soft undercoat that expands heavily in winter to form a slight neck ruff.",

    coatLength: "Short",

    coatColors: [
      "Wolf-grey (light to dark shaded black-tipped coat with black nose, lips, and eye rims)",
      "Forest-brown / bos-brown (light to dark shaded brown-tipped coat with liver pigmentation)",
      "Light cream to white (uncommon, with black pigmentation)",
      "Distinctive lighter underside and expressive wolf-like facial mask"
    ],

    sheddingLevel:
      "High; sheds steadily through the year and drops thick clumps of winter undercoat during spring and autumn coat blows",

    droolingLevel:
      "Low; tight, well-closed lips keep drooling minimal",

    distinctiveFeatures: [
      "Large, athletic, slightly elongated frame with males standing 65 to 75 cm (36 to 41 kg) and females 60 to 70 cm (30 to 35 kg)",
      "Unmistakably wolf-like proportions with long, muscular legs and a light, untiring trotting stride",
      "Wedge-shaped head with a broad flat skull, slight stop, and strong tapered muzzle",
      "Almond-shaped, obliquely set yellow eyes conveying an alert, reserved expression",
      "Medium-sized, sturdy, triangular upright ears with rounded tips and hair lining the inside",
      "Strong jaws closing in a complete scissor bite and tight-fitting lips",
      "Matching pigment rules: black nose, lips, and eye rims in wolf-grey and white dogs; liver pigment in forest-brown dogs",
      "Low-set, well-furred tail carried almost straight or in a gentle sabre curve"
    ]
  },

  temperament: {
    traits: [
      "Deeply devoted and dependable with its trusted owner and immediate family pack",
      "Proud, independent, and inclined to follow its own judgment first",
      "Naturally reserved and cautious around strangers, rarely seeking contact with unfamiliar people",
      "Guided by a strong flight instinct—prefers to retreat from startling or unknown situations rather than confront them",
      "Unsuited for protection or guard duty due to lack of territorial aggression",
      "Lively and energetic in familiar, quiet outdoor spaces",
      "Strongly pack-oriented and prone to severe distress when left isolated",
      "Quiet overall, relying more on subtle body posture and occasional howling than barking"
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 4,
      withStrangers: 1,
      protectiveness: 1,
      independence: 5,
      trainability: 2,
      barking: 2,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; an untiring endurance trotter needing generous daily mileage and open, low-stress outdoor movement",

      minutesPerDay: {
        min: 90,
        max: 120
      },

      activities: [
        "Long daily trail hikes or brisk runs in quiet rural settings",
        "Free running inside a large, tall, dig-proof fenced enclosure",
        "Calm pack walks alongside confident, steady dogs",
        "Natural scent-tracking and environmental exploration"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush once or twice a week with a slicker brush and undercoat rake, shifting to daily sessions during heavy seasonal undercoat sheds.",

      bathing:
        "Bathe only when genuinely dirty so natural skin oils and weather-repellent coat texture stay intact.",

      notes: [
        "Expect heavy seasonal coat blows twice a year when winter undercoat lifts out in tufts.",
        "Check the hairy upright ears weekly for dirt or burrs after outdoor walks.",
        "Trim nails every few weeks if most exercise happens on soft trails.",
        "Brush teeth several times a week with canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Very challenging; bright and observant, yet deeply independent and easily stressed by harsh pressure",

      tips: [
        "Rely strictly on gentle, reward-based training; scolding or physical pressure triggers shutdown, panic, or flight.",
        "Keep lessons short, calm, and varied rather than drilling repetitive obedience routines.",
        "Never attempt bite-work or guard training, which conflicts with the breed's cautious flight nature.",
        "Keep on a secure leash or long line in unfenced areas, as independent roaming instincts make off-leash recall unreliable."
      ],

      socialization:
        "Early, gradual, lifelong socialization is essential: calmly introduce puppies to new surfaces, sounds, and polite visitors without forcing contact so natural reserve stays steady rather than fearful."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cold climates, where the thick winter undercoat provides strong insulation",
        "Warm climates when cool indoor rest, shade, and fresh water are always available"
      ],

      aloneTimeTolerance:
        "Very low; intensely pack-oriented and prone to separation panic and escape attempts if left alone. Often settles much better alongside a calm, confident canine companion."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced large-breed dog food with quality animal protein to sustain lean muscle and endurance.",

    feedingFrequency: {
      puppy:
        "Three to four measured meals per day until six months of age to support steady large-breed growth.",
      adult:
        "Two measured meals per day for steady energy and digestion.",
      senior:
        "Two controlled meals per day adapted for lower activity and joint support."
    },

    guidelines:
      "Measure every meal accurately with a kitchen scale or measuring cup to keep a lean, athletic silhouette. Split daily food into two meals, avoid intense running right before or after eating, and keep fresh water available at all times.",

    considerations: [
      "Maintain a lean, light-footed body condition to protect large-breed hips and spine.",
      "Active dogs working in cold weather may need slightly higher daily calories.",
      "Count training treats within the daily calorie allowance.",
      "Switch diets gradually over five to seven days to avoid digestive upset."
    ],

    note:
      "Work with a veterinarian to set tailored daily calories based on age, activity level, and season."
  },

  health: {
    overview:
      "Saarlooswolfhonds are generally athletic dogs that commonly live 12 to 15 years, though their narrow genetic foundation from German Shepherd and wolf ancestors leaves the breed vulnerable to specific inherited conditions. Peer-reviewed veterinary research highlights an unusually high carrier frequency (~31%) for autosomal recessive LHX3 pituitary dwarfism, alongside SOD1-linked degenerative myelopathy, hip dysplasia, and inherited eye disorders. Responsible breeding programs rely heavily on DNA screening and careful genetic diversity management.",

    commonConditions: [
      "Pituitary dwarfism (LHX3-related combined pituitary hormone deficiency) — scientifically established autosomal recessive disorder caused by a 7-bp deletion in intron 5 of LHX3 inherited from German Shepherd ancestry; European screening of 239 healthy breeding dogs found a 31% carrier rate, making pre-breeding DNA testing essential to prevent stunted growth, coat loss, and early mortality",
      "Degenerative Myelopathy (DM, SOD1-related) — progressive late-onset spinal cord disease linked to an autosomal recessive SOD1 mutation with incomplete penetrance, causing gradual hind-limb weakness and paralysis in older dogs; screenable via DNA testing",
      "Hip dysplasia — developmental hip-joint looseness that can progress to osteoarthritis in large breeds, monitored through hip radiographs",
      "Inherited eye disorders — including Progressive Retinal Atrophy (PRA), cataracts, and glaucoma, monitored through routine specialist ophthalmic exams",
      "Spondylosis — degenerative bone spurs along the spine occasionally noted in older large dogs"
    ],

    preventiveCare: [
      "Verify that both breeding parents are DNA-tested for LHX3 pituitary dwarfism (never mating two carriers) and SOD1 degenerative myelopathy.",
      "Confirm pre-breeding hip dysplasia radiographs and specialist eye clearances.",
      "Maintain a lean, fit body weight throughout life to reduce wear on hips and spine.",
      "Provide a calm, predictable routine and secure fencing to prevent stress-related injury or escape.",
      "Schedule yearly veterinary wellness exams and parasite prevention."
    ],

    recommendedScreenings: [
      "DNA test for LHX3 pituitary dwarfism (combined pituitary hormone deficiency)",
      "DNA test for SOD1 degenerative myelopathy (DM)",
      "Radiographic hip dysplasia evaluation prior to breeding",
      "Ophthalmic examination by a board-certified veterinary ophthalmologist"
    ],

    dentalCare:
      "Brush teeth several times weekly with canine enzymatic toothpaste and arrange routine veterinary dental checks to keep the strong jaws and scissor bite healthy.",

    earCare:
      "Inspect the upright, hair-lined ears weekly for burrs, wax, or irritation, wiping gently with a veterinarian-approved ear rinse.",

    skinCare:
      "Part the thick double coat weekly to check for ticks or skin irritation, limiting baths so natural protective oils stay intact."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: false,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Highly experienced dog handlers familiar with primitive breeds and cautious wolfdog behavior",
      "Quiet rural properties with large, escape-proof (tall and dig-proof) fenced yards",
      "Households that already have a calm, confident dog to provide steady pack company",
      "Patient owners committed to lifelong positive socialization and gentle handling",
      "Active outdoorspeople wanting a quiet, devoted trail companion rather than a guard dog"
    ],

    notIdealFor: [
      "First-time owners or handlers expecting automatic, eager-to-please obedience",
      "Apartments or noisy city neighborhoods where constant unfamiliar traffic causes severe stress",
      "Anyone seeking a guard dog or personal-protection breed",
      "Busy homes with rowdy toddlers or frequent loud gatherings",
      "Owners who must leave a dog alone for full workdays"
    ]
  },

  funFacts: [
    "The Saarlooswolfhond traces directly to a documented 1932 Dutch cross between a male German Shepherd Dog and a female Eurasian wolf from the Rotterdam Zoo.",
    "Creator Leendert Saarloos originally aimed to produce a resilient working and guide dog, but the breed's inherited wolf-like caution and flight instinct steered it into companionship instead.",
    "Unlike vocal herding dogs that bark at unfamiliar visitors, a Saarlooswolfhond usually stays quiet, using subtle body language and distance—and occasionally howling.",
    "Coat color dictates pigment: wolf-grey and white dogs carry black noses, lips, and eye rims, whereas forest-brown (bos-brown) dogs carry liver-colored pigment.",
    "Because the breed descends from a small foundation group, a European genetic screening of 239 healthy breeding Saarlooswolfhonds found roughly 31% carried the recessive LHX3 dwarfism gene—making DNA testing a cornerstone of modern breeding."
  ],

  faq: [
    {
      question: "What kind of dog is a Saarlooswolfhond?",
      answer:
        "The Saarlooswolfhond is a large, wolf-like Dutch breed developed in the 1930s from German Shepherd and Eurasian wolf crosses, known for intense loyalty to its household, high independence, and natural reserve toward strangers."
    },
    {
      question: "Is a Saarlooswolfhond a good guard dog?",
      answer:
        "No. Despite its wild look and large size, it lacks territorial aggression and relies on a strong flight instinct, preferring to retreat from unfamiliar people rather than confront them."
    },
    {
      question: "How tall and heavy is a Saarlooswolfhond?",
      answer:
        "Adult males stand 65 to 75 cm at the shoulder and weigh roughly 36 to 41 kg, while adult females stand 60 to 70 cm and weigh about 30 to 35 kg."
    },
    {
      question: "How long does a Saarlooswolfhond live?",
      answer:
        "With good nutrition, genetic screening, and calm management, a Saarlooswolfhond typically lives 12 to 15 years."
    },
    {
      question: "Can a Saarlooswolfhond live in an apartment?",
      answer:
        "No. Its size, endurance exercise needs, escape-prone roaming instincts, and sensitivity to crowded urban noise make apartments a poor fit."
    },
    {
      question: "Are Saarlooswolfhonds hard to train?",
      answer:
        "Yes. They are smart yet fiercely independent and do not work just to please; training demands patience, short positive sessions, and zero harsh corrections."
    },
    {
      question: "Do Saarlooswolfhonds get along with other dogs?",
      answer:
        "Generally yes. Because they are strongly pack-oriented, many feel calmer and less prone to separation distress when living with a confident, well-balanced companion dog."
    },
    {
      question: "What are the main health concerns for a Saarlooswolfhond?",
      answer:
        "Key inherited risks from its narrow gene pool include LHX3 pituitary dwarfism (which has a high carrier rate and requires DNA screening), SOD1 degenerative myelopathy, hip dysplasia, and inherited eye disorders."
    }
  ],

  references: [
    "natureserve-canis-lupus-familiaris",
    "fci-saarlooswolfhond-official-standard",
    "fci-saarlooswolfhond-nomenclature",
    "ukc-saarloos-wolfdog-breed-standard",
    "akc-saarloos-wolfhond-profile",
    "pmc-saarloos-lhx3-dwarfism-2014",
    "pmc-dm-sod1-cohort-2025",
    "the-dog-api",
    "wikimedia-hippie-wolf-grey-saarloos-wolfdog",
    "wikimedia-saarloos-wolfdog-1-brown"
  ],

  evidence: {
    scientificName: {
      reliability: "reliable_source",
      sources: [
        {
          id: "natureserve-canis-lupus-familiaris",
          role: "verified",
          locator: "Taxonomic listing: Canis lupus familiaris (Domestic Dog)"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Canis lupus familiaris is the verified domestic-dog taxonomic label used across the catalog."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "verified",
          locator: "Standard heading: SAARLOOSWOLFHOND (Saarlooswolfdog)"
        },
        {
          id: "fci-saarlooswolfhond-nomenclature",
          role: "verified",
          locator: "Official multilingual names: SAARLOOS WOLFHOND, CHIEN-LOUP DE SAARLOOS, SAARLOOSWOLFHUND, PERRO LOBO DE SAARLOOS"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names: Saarloos Wolfdog, Saarlooswolfhond"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified across FCI Standard No. 311, FCI Nomenclature, AKC FSS profile, and The Dog API."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 1 Sheepdogs and Cattledogs (except Swiss Cattledogs); Section 1 Sheepdogs; Without working trial"
        },
        {
          id: "ukc-saarloos-wolfdog-breed-standard",
          role: "verified",
          locator: "Herding Dog Group"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group: Working"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "User-facing group label states Sheepdogs and herding-type wolfdogs without registry or section identifiers."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "verified",
          locator: "COUNTRY OF ORIGIN: The Netherlands; BRIEF HISTORICAL SUMMARY (Rotterdam Zoo wolf)"
        },
        {
          id: "fci-saarlooswolfhond-nomenclature",
          role: "verified",
          locator: "Country of origin: The Netherlands"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: Netherlands"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY (1932 Leendert Saarloos cross, 1975 Dutch recognition, 1981 FCI recognition), GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "akc-saarloos-wolfhond-profile",
          role: "verified",
          locator: "About the Breed: wolf-like build, movement, coat, proud independent character, reserved flight manner"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Written in original prose from FCI Standard No. 311, AKC FSS profile, UKC standard, and cross-checked against The Dog API."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS, HEAD, EYES, EARS, BODY, TAIL, COAT, COLOUR (wolf-grey, forest-brown, white), SIZE"
        },
        {
          id: "ukc-saarloos-wolfdog-breed-standard",
          role: "verified",
          locator: "General Appearance, Head, Coat, Color, and Conformation"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Strictly follows FCI Standard No. 311 coat colors (wolf-grey, forest-brown/bos-brown, and light cream to white) and excludes generic non-breed variants listed in The Dog API (e.g., black and tan, blue, brindle, merle, pied, red, tricolour)."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "verified",
          locator: "SIZE: Height at the withers: Males 65-75 cm, Females 60-70 cm."
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric: 65-75 cm males, 60-70 cm females"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Preserved in exact published centimetres (65-75 cm males, 60-70 cm females) from FCI Standard No. 311; matches The Dog API."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric: 36-41 kg males, 30-35 kg females"
        },
        {
          id: "akc-saarloos-wolfhond-profile",
          role: "cited",
          locator: "Weight: 70-90 lbs male; 60-80 lb female"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "FCI Standard No. 311 specifies height without fixed weight limits. Stored in kilograms (36-41 kg males, 30-35 kg females) from The Dog API to stay unit-consistent with height in centimetres; AKC FSS profile lists 70-90 lb males and 60-80 lb females."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-saarloos-wolfhond-profile",
          role: "verified",
          locator: "Life Expectancy: 12-15 years"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span: 10-12 years"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Follows AKC FSS breed profile (12-15 years); The Dog API lists a shorter 10-12 year range."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "verified",
          locator: "COAT: dense seasonal winter undercoat forming a slight ruff"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "verified",
          locator: "Lips: Well closed, tight fitting."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: lively, proud independent character, obeys own will foremost, devoted to master, reserved with strangers, wolf-like avoidance of unknown situations"
        },
        {
          id: "akc-saarloos-wolfhond-profile",
          role: "verified",
          locator: "About the Breed: independent, devoted, reserved, avoids unknown situations"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament: Independent, alert, loyal, reserved, intelligent"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "cited",
          locator: "BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "akc-saarloos-wolfhond-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 ratings informed by FCI Standard No. 311 and AKC FSS breed profile."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "cited",
          locator: "UTILIZATION, BEHAVIOUR/TEMPERAMENT, GAIT/MOVEMENT, and COAT"
        }
      ],
      verifiedOn: null,
      note:
        "Practical management reflecting high trotting endurance, cautious lupine temperament, and low-maintenance seasonal double coat."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "verified",
          locator: "GAIT/MOVEMENT: untiring trotter capable of covering great distances at its own pace"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "cited",
          locator: "Untiring distance-trotting gait and high energy"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 90 to 120 minutes daily reflects the endurance demands of a large, athletic trotter."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "cited",
          locator: "BEHAVIOUR/TEMPERAMENT: avoids unknown situations; large size and high endurance"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial evaluation that urban apartment living is unsuitable due to size, flight sensitivity, and space needs."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: cautious avoidance requiring secure fencing"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "verified",
          locator: "COAT: dense winter undercoat providing cold-weather insulation"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "cited",
          locator: "BEHAVIOUR/TEMPERAMENT: deeply devoted pack orientation"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "cited",
          locator: "Large athletic working conformation"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "cited",
          locator: "Large-breed life-stage meal scheduling"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pmc-saarloos-lhx3-dwarfism-2014",
          role: "verified",
          locator: "Voorbij et al. (JVIM, 2014): 7-bp deletion in intron 5 of LHX3 causing pituitary dwarfism; 31% carrier rate (75/239) in healthy breeding Saarlooswolfhonds"
        },
        {
          id: "pmc-dm-sod1-cohort-2025",
          role: "verified",
          locator: "Frontiers in Veterinary Science (2025): SOD1-homozygous degenerative myelopathy cohort including Saarloos Wolfhounds"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Grounded in peer-reviewed molecular genetics and clinical neurology literature rather than breed standards alone."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pmc-saarloos-lhx3-dwarfism-2014",
          role: "verified",
          locator: "LHX3 pituitary dwarfism (31% carrier frequency among 239 healthy Saarlooswolfhonds)"
        },
        {
          id: "pmc-dm-sod1-cohort-2025",
          role: "verified",
          locator: "SOD1-related degenerative myelopathy in Saarloos Wolfhounds"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "pmc-saarloos-lhx3-dwarfism-2014",
          role: "cited",
          locator: "Pre-breeding LHX3 genetic screening to eradicate pituitary dwarfism"
        },
        {
          id: "pmc-dm-sod1-cohort-2025",
          role: "cited",
          locator: "SOD1 genetic screening and clinical monitoring"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pmc-saarloos-lhx3-dwarfism-2014",
          role: "verified",
          locator: "Mandatory pre-breeding DNA screening for LHX3 mutation in Saarlooswolfhonds"
        },
        {
          id: "pmc-dm-sod1-cohort-2025",
          role: "verified",
          locator: "SOD1 DNA testing for degenerative myelopathy"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Combines peer-reviewed genetic screening recommendations (LHX3, SOD1) with standard large-breed hip and eye evaluations."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "cited",
          locator: "Jaws/Teeth: strong and complete scissor bite"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "cited",
          locator: "Ears: medium-sized, firm, pricked, hairy on the inside"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "cited",
          locator: "COAT: dense weather-resistant double coat"
        }
      ],
      verifiedOn: null,
      note: null
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "cited",
          locator: "BEHAVIOUR/TEMPERAMENT and UTILIZATION"
        },
        {
          id: "ukc-saarloos-wolfdog-breed-standard",
          role: "cited",
          locator: "Characteristics and lifestyle requirements"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability assessment reflecting extreme independence, flight instinct, high exercise demands, and pack-oriented needs."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "verified",
          locator: "1932 Leendert Saarloos cross, Rotterdam Zoo wolf, coat-linked pigmentation rules, quiet reserved nature"
        },
        {
          id: "pmc-saarloos-lhx3-dwarfism-2014",
          role: "verified",
          locator: "31% LHX3 pituitary dwarfism carrier rate among 239 healthy breeding Saarlooswolfhonds"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-saarlooswolfhond-official-standard",
          role: "verified",
          locator: "Origin, height (65-75 cm / 60-70 cm), lack of guarding instinct, flight instinct, and independent character"
        },
        {
          id: "akc-saarloos-wolfhond-profile",
          role: "verified",
          locator: "Lifespan (12-15 years) and breed profile"
        },
        {
          id: "pmc-saarloos-lhx3-dwarfism-2014",
          role: "verified",
          locator: "LHX3 pituitary dwarfism risk and DNA screening"
        },
        {
          id: "pmc-dm-sod1-cohort-2025",
          role: "verified",
          locator: "SOD1 degenerative myelopathy risk"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Synthesized in original wording without naming registries or source organizations."
    }
  },

  updatedOn: "2026-11-26"
};
