import type { Breed } from "../schema/breed.types";

export const halden_hound: Breed = {
  slug: "halden-hound",
  name: "Halden Hound",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Haldenstøver",
    "Haldenstover",
    "Haldenstövare",
    "Bisseberghund",
    "Ankerstøver",
    "Chien courant de Halden",
    "Halden-Bracke",
    "Sabueso Halden"
  ],

  group: "Medium-Sized Scenthound (Hound)",

  origin: {
    country: "Norway",
    region:
      "Halden and Østfold county in southeastern Norway, near the Swedish border"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Halden_Hound.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Halden_Hound.jpg",
      title: "Halden Hound.jpg",
      description:
        "A tricolour female Halden Hound photographed in profile.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2016-12-03",
      uploadedOn: "2016-12-03",
      width: 600,
      height: 502,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Halden_Hound.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Haldenstovare.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Haldenstovare.jpg",
      title: "Haldenstovare.jpg",
      description:
        "An adult tricolour Halden Hound (Haldenstøver) standing outdoors.",
      creator: "Sabine (dogwiki)",
      uploader: "Ltshears",
      capturedOn: null,
      uploadedOn: "2006-05-31",
      width: 450,
      height: 364,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Sabine (dogwiki), Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Haldenstovare.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    }
  ],

  overview: {
    summary:
      "A medium-sized, rectangular Norwegian scenthound built for cold-climate hare, fox, and lynx tracking, recognized by its predominantly white tricolour coat, sturdy build, steady nerves, and quiet, affectionate home manners.",

    description:
      "The Halden Hound is a well-proportioned, rectangular, and strongly built yet light-footed Norwegian scenthound resembling a slightly lighter Foxhound in outline. Bred to hunt independently as a single-handed tracking dog across snowy Nordic forests and rugged terrain, it combines physical durability and parallel, ground-covering movement with a harsh, straight, weatherproof double coat and thick undercoat. Its coat is predominantly clean white marked with distinct black patches and warm tan shadings on the head, legs, and sometimes along the borders between black and white. Its dry, medium-sized head features a gently arched skull, understated stop and occiput, medium-set drop ears, and calm dark brown eyes. At home, the breed is notably sociable, trusting, and quiet in everyday life, saving its carrying voice for the trail.",

    history:
      "The Halden Hound's lineage traces back to the mid-nineteenth century in Norway's Østfold region around the border town of Halden, where local harehounds were crossed with imported English Foxhounds—along with some Harrier, Beagle, German, and Swedish hound ancestry—to create a swift, cold-hardy solo hunter. In the 1860s, Østfold farmer Hans Larsen Bisseberg bred early lines known as the 'Bisseberghund', while the Anker family of Rød Herregård in Halden gave rise to the name 'Ankerstøver'. The name 'Haldenstøver' came into use around 1938. After a canine distemper outbreak in 1931 and World War II nearly wiped out the narrow breeding base, dedicated Norwegian enthusiasts revived the breed and secured formal national approval in 1952, followed by international recognition in 1965. Today it remains critically rare, with only about 10 to 20 puppies registered annually in Norway.",

    originalPurpose:
      "Solo, voice-trailing scenthound hunting hare, red fox, and lynx across snowy Norwegian forests and rugged countryside.",

    currentRoles: [
      "Solo-working hare, fox, and lynx tracking hound",
      "Blood tracking and forest scent-trailing partner",
      "Affectionate family companion for active outdoor households",
      "Endurance partner for hiking, trail running, and winter skiing"
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
        max: 26
      }
    },

    lifespanYears: {
      min: 12,
      max: 14
    },

    coatType:
      "Harsh, very dense, straight double coat backed by a thick undercoat that insulates against freezing Scandinavian snow, rain, and brush.",

    coatLength: "Short",

    coatColors: [
      "White with black patches and tan shadings on the head and legs (and sometimes between the white and black patches); white must predominate over black"
    ],

    sheddingLevel:
      "Moderate year-round, with heavier undercoat shedding during spring and autumn seasonal changes",

    droolingLevel:
      "Low; dry, tight-fitting lips without pendulous flews keep drooling minimal",

    distinctiveFeatures: [
      "Rectangular, strong, and agile scenthound build without heaviness, reminiscent of a lighter Foxhound",
      "Height at the withers of 52 to 60 cm for males (ideal 56 cm) and 50 to 58 cm for females (ideal 54 cm)",
      "Working weight of 23 to 29 kg for males and 20 to 26 kg for females in fit condition",
      "Predominantly white tricolour coat with clean black patches and tan shadings on head and legs; black must not dominate and fine ticking is considered mismarked",
      "Harsh, dense, straight double coat with thick undercoat for winter durability",
      "Medium-sized, clean head with a gently arched skull and understated stop and occiput",
      "Complete, regular scissor bite with strong jaws and sound teeth",
      "Dark brown oval eyes conveying steady nerves and an open, friendly expression",
      "Medium-set drop ears hanging flat against the head",
      "Deep chest, well-sprung ribs, and a relatively long, strong neck",
      "Low-carried tail reaching approximately to the hocks",
      "Oval, well-arched, tightly knit feet well covered with protective hair between the toes"
    ]
  },

  temperament: {
    traits: [
      "Steady-nerved, calm, and trusting in daily household life",
      "Exceptionally friendly, gentle, and affectionate with family members",
      "Typically quiet around the home, saving its carrying voice for scent trailing",
      "Sociable and non-quarrelsome around people and other dogs",
      "Energetic, confident, and resilient over long days in rugged terrain",
      "Strong hunting drive and easy to train on hare, fox, and predator trails",
      "Intelligent and cooperative with a single handler, yet focused and independent once on a scent line"
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
        "High; a physically tough, stamina-driven hunting hound built to cover long distances and needing generous daily movement and scenting outlets",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Brisk daily leashed walks and woodland hikes with ample sniffing opportunities",
        "Supervised running inside a tall, securely fenced yard",
        "Structured tracking, blood tracking, and nosework games",
        "Canicross, trail running, and winter ski-joring or snowshoe hikes",
        "Interactive foraging toys and food puzzles between outings"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush once a week with a rubber hound glove or medium bristle brush—stepping up frequency during spring and autumn undercoat sheds—to remove loose hair.",

      bathing:
        "Bathe only as needed, roughly every six to eight weeks or after muddy outings, with a mild dog shampoo that preserves natural weatherproofing oils.",

      notes: [
        "The harsh, dense coat naturally sheds dried mud and snow once dry.",
        "Check and clean the drop ears weekly to prevent wax, debris, or dampness.",
        "Inspect the fur-insulated spaces between the toes after snow or forest runs for ice balls, burrs, or cuts.",
        "Trim nails every two to three weeks to keep the oval feet tight and balanced.",
        "Brush teeth several times a week with dog-safe enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Moderate; intelligent, trusting, and responsive to a handler, though strong scenting drive calls for patient, reward-based consistency",

      tips: [
        "Build cooperation with positive reinforcement, aromatic food rewards, and calm praise.",
        "Keep lessons concise, engaging, and varied so the hound stays enthusiastic.",
        "Use a sturdy leash or a securely fenced space outdoors because fresh wildlife trails can override recall.",
        "Practice recall from puppyhood on a long line before advancing to higher-distraction woods.",
        "Avoid harsh corrections, which conflict with this hound's trusting, steady temperament."
      ],

      socialization:
        "Introduce puppies gently and positively to diverse people, calm vaccinated dogs, everyday noises, and varied outdoor environments to reinforce the breed's naturally open, confident manners."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cold and snowy climates, where the harsh double coat and fur-protected toes excel",
        "Temperate climates",
        "Warm climates, provided shade, fresh water, indoor cooling, and cooler-hour walks are maintained"
      ],

      aloneTimeTolerance:
        "Moderate when well exercised, though long periods of isolation without daily outdoor stimulation can lead to restlessness."
    }
  },

  nutrition: {
    dietType:
      "Complete and balanced commercial dog food formulated for active medium-sized working breeds, scaled to age and seasonal hunting or hiking workload.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until about six months of age, then shifting to two measured meals per day.",
      adult:
        "Two measured meals per day for steady energy and comfortable digestion.",
      senior:
        "Two portion-controlled meals daily adjusted for lower calorie burn while maintaining lean muscle."
    },

    guidelines:
      "Weigh or measure each meal rather than free-feeding so the ribs remain easily felt beneath the dense coat. Increase daily energy intake during active hunting or winter trekking seasons, divide daily rations into two meals, and allow quiet rest before and after eating as a precaution against bloat.",

    considerations: [
      "Keep body condition lean to protect hip and stifle joints over a long active life.",
      "Count training treats within the daily calorie budget.",
      "Schedule calm rest around mealtimes to reduce bloat risk in deep-chested dogs.",
      "Avoid fatty table scraps and transition between diets gradually over five to seven days."
    ],

    note:
      "Calorie requirements fluctuate substantially between peak autumn/winter field work and quieter off-season months. Consult a veterinarian for tailored portions."
  },

  health: {
    overview:
      "Despite its historically small breeding population, the Halden Hound is regarded as a notably healthy, hardy breed with a typical lifespan of 12 to 14 years and no widespread inherited disease burden recorded. Careful population management focuses on preserving genetic diversity alongside routine radiographic hip screening, weekly drop-ear care, and standard precautions for deep-chested working hounds.",

    commonConditions: [
      "Hip dysplasia (HD) — not recorded at high prevalence in the breed, but proactively monitored through pre-breeding radiographic hip screening",
      "Genetic diversity risk from small population size — very low annual puppy numbers require careful breeding management and outcrossing safeguards to prevent inbreeding depression",
      "Otitis externa (outer ear infections) — a general conformational risk for drop-eared hounds when moisture or debris accumulates in the ear canal",
      "Gastric dilatation-volvulus (GDV / bloat) — an emergency risk across deep-chested breeds, mitigated by divided meals and post-meal rest",
      "Field and winter injuries — minor paw cuts, ice-crust abrasions, or sprains incurred during vigorous woodland work"
    ],

    preventiveCare: [
      "Confirm breeding parents have completed radiographic hip screening (A, B, or C grades, with C paired only to HD-free mates) and follow responsible genetic-diversity limits.",
      "Inspect and dry the hanging ears weekly, wiping gently with a veterinarian-approved ear wash.",
      "Keep weight lean and well-muscled throughout life to minimize joint strain.",
      "Feed two measured meals daily and avoid vigorous running right before or after eating.",
      "Maintain year-round parasite protection against ticks, fleas, and heartworm, and book annual veterinary wellness exams."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia (HD) evaluation prior to breeding",
      "Routine veterinary wellness, orthopedic, and ophthalmic checkups"
    ],

    dentalCare:
      "Brush teeth several times a week using canine enzymatic toothpaste, paired with routine veterinary oral checkups.",

    earCare:
      "Lift and inspect the medium drop ears weekly for odour, wax, redness, or dampness after wet or snowy outings, wiping gently with a veterinary cleanser.",

    skinCare:
      "Brush weekly through the harsh double coat to check the skin for ticks, burrs, or scrapes, paying close attention to paw pads and between the toes after winter runs."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Active outdoor households, hikers, and winter sports enthusiasts who enjoy long days outside",
      "Hunters seeking a solo-working hare, fox, or lynx tracking hound with steady nerves",
      "Rural or suburban homes with a securely fenced yard",
      "Active families wanting a gentle, quiet, dog-friendly companion indoors"
    ],

    notIdealFor: [
      "Sedentary households or first-time owners unprepared for high daily exercise and strong hunting instincts",
      "Apartments or dense urban settings without easy access to trails and secure running space",
      "Homes with unsupervised small pets such as rabbits that can trigger chase instincts",
      "People looking for a territorial or protective guard dog"
    ]
  },

  funFacts: [
    "Before the name 'Haldenstøver' came into use around 1938, the breed was known locally as the 'Bisseberghund' (after Østfold farmer Hans Larsen Bisseberg in the 1860s) and the 'Ankerstøver' (after the Anker family at Rød Herregård in Halden).",
    "Canine distemper in 1931 and World War II nearly wiped out the breed, but Norwegian enthusiasts rebuilt it and secured formal national recognition in 1952.",
    "With only about 10 to 20 puppies registered each year in Norway, the Halden Hound is critically rare and carefully managed under a national breeding program that caps individual dogs at 20 offspring to protect genetic diversity.",
    "Unlike many vocal pack hounds, most Halden Hounds are remarkably quiet in everyday family life, reserving their carrying voice for the hunting trail.",
    "Its oval, tightly knit feet grow protective hair between the toes to help shield against freezing Nordic snow and rough forest ground."
  ],

  faq: [
    {
      question: "What is a Halden Hound?",
      answer:
        "The Halden Hound (Haldenstøver) is a rare, medium-sized Norwegian scenthound bred for solo hare, fox, and lynx tracking, known for its predominantly white tricolour coat, steady nerves, and gentle home manners."
    },
    {
      question: "How does the Halden Hound differ from Norway's other native harehounds?",
      answer:
        "While the Halden Hound, Dunker, and Hygen Hound are all Norwegian harehounds, the Halden Hound is distinguished by its predominantly white tricolour coat with black patches and tan shadings, as well as its lighter Foxhound-like outline."
    },
    {
      question: "How tall and heavy is a Halden Hound?",
      answer:
        "Adult males stand 52 to 60 cm at the withers (ideal 56 cm) and weigh roughly 23 to 29 kg, while adult females stand 50 to 58 cm (ideal 54 cm) and weigh roughly 20 to 26 kg."
    },
    {
      question: "How long does a Halden Hound live?",
      answer:
        "With good nutrition, regular exercise, and routine veterinary care, the breed typically lives 12 to 14 years."
    },
    {
      question: "How much grooming does a Halden Hound need?",
      answer:
        "Grooming is low-maintenance. Brush the harsh double coat weekly (more often during spring and autumn undercoat sheds), check the drop ears weekly, trim nails regularly, and brush teeth several times a week."
    },
    {
      question: "Can a Halden Hound live in an apartment?",
      answer:
        "Generally no. Although quiet indoors, its high endurance and daily exercise requirements make it far better suited to a rural or suburban house with a securely fenced yard."
    },
    {
      question: "Are Halden Hounds good family dogs and good with children?",
      answer:
        "Yes, in active households. They are well known for steady nerves, friendliness, and gentle, trusting manners with children and other dogs, provided their outdoor exercise needs are met."
    },
    {
      question: "How easy is it to train a Halden Hound?",
      answer:
        "They are intelligent, trusting, and cooperative with positive reinforcement, but strong wildlife-tracking instincts mean outdoor off-leash recall requires careful long-line training and secure fencing."
    },
    {
      question: "How much exercise does a Halden Hound need each day?",
      answer:
        "Plan on at least 60 to 90 minutes of brisk daily activity, combining leashed walks, woodland hikes, secure yard running, and scent-tracking games."
    },
    {
      question: "What health screenings are recommended for breeding Halden Hounds?",
      answer:
        "Radiographic hip dysplasia (HD) screening is recommended for all breeding dogs alongside careful genetic-diversity management and routine veterinary checkups."
    }
  ],

  references: [
    "natureserve-canis-lupus-familiaris",
    "fci-halden-hound-official-standard",
    "fci-halden-hound-nomenclature",
    "nkk-haldenstover-rasestandard",
    "nhkf-haldenstover-raseprofil",
    "ukc-halden-hound-breed-standard",
    "wikimedia-haldenstover-lilly-m",
    "wikimedia-haldenstovare-600-tomasz-sienicki",
    "the-dog-api"
  ],

  evidence: {
    scientificName: {
      reliability: "reliable_source",
      sources: [
        {
          id: "natureserve-canis-lupus-familiaris",
          role: "verified",
          locator: "Scientific Name: Canis lupus familiaris (Domestic Dog)"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "Verified standard domestic-dog trinomial taxonomy across the catalog."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-halden-hound-nomenclature",
          role: "verified",
          locator: "Official nomenclature: HALDENSTØVER (267), Halden Hound, Chien courant de Halden, Halden-Bracke, Sabueso Halden"
        },
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Historical names: Bisseberghund (Hans Larsen Bisseberg, 1860s) and Ankerstøver (Anker family, Rød Herregård)"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "alternateNames: Haldenstøver"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Updated German and Spanish names to exact FCI nomenclature (Halden-Bracke, Sabueso Halden) and added verified historical Norwegian names."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-halden-hound-nomenclature",
          role: "verified",
          locator: "Group 6 Scent hounds and related breeds; Section: Scent hounds; Subsection: Medium-sized Hounds; Subject to a working trial"
        },
        {
          id: "ukc-halden-hound-breed-standard",
          role: "cited",
          locator: "Scenthound Group"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "group: Hound"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "User-facing group omits kennel-club names and numeric section labels per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-halden-hound-nomenclature",
          role: "verified",
          locator: "Country of origin of the breed: NORWAY; definitive acceptance 1965-10-07"
        },
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Halden, Østfold county, southeastern Norway"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "origin.country: Halden, Norway"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-halden-hound-official-standard",
          role: "verified",
          locator: "FCI Standard No. 267 (1999-08-09): Coat, colour, feet, gait, and proportions"
        },
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "History (1860s Bisseberghund, Ankerstøver, 1931 distemper, WWII, 1938 name, 1952 approval), 10-20 annual puppy registrations, hare/fox/lynx hunting, quiet indoor nature"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "description and history"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "Corrected historical ancestry (Bisseberghund & Ankerstøver, not Borge hound) and FCI definitive recognition year (1965, not 1960)."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-halden-hound-official-standard",
          role: "verified",
          locator: "COAT (harsh, very dense, straight with dense undercoat), COLOUR (white with black patches and tan shadings; black must not predominate; small black/tan spots mismarked), FEET (oval, well covered with hair between toes)"
        },
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Størrelse/Utseende: rectangular, strong without heaviness, understated stop and occiput, low-carried tail"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "coatColors lists 17 generic canine colours; only the official predominantly white tricolour pattern was kept"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "Excluded non-standard colours from The Dog API and aligned anatomical details to FCI Standard No. 267 and NKK."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-halden-hound-official-standard",
          role: "verified",
          locator: "SIZE: Height at withers: Males 52–60 cm, ideal 56 cm. Females 50–58 cm, ideal 54 cm."
        },
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Ønsket høyde: hannhunder 52–60 cm, tisper 50–58 cm"
        },
        {
          id: "nhkf-haldenstover-raseprofil",
          role: "verified",
          locator: "Størrelse: Hannhund 52–60 cm (ideal 56 cm), Tispe 50–58 cm (ideal 54 cm)"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "height: male 51–60 cm, female 48–58 cm (official FCI/NKK minimums are 52 cm and 50 cm)"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "Preserved exact published centimetres (52–60 cm males, 50–58 cm females) per FCI Standard No. 267 and NKK; recorded Dog API discrepancy."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "weight: male 23–29 kg, female 20–26 kg"
        },
        {
          id: "fci-halden-hound-official-standard",
          role: "cited",
          locator: "FCI Standard No. 267 specifies height without prescribing a numerical weight"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "FCI Standard No. 267 does not fix a numerical weight; stored The Dog API's published metric weight ranges (23–29 kg males, 20–26 kg females)."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "lifespanYears: 12–14"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Verified 12–14 years from The Dog API."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-halden-hound-official-standard",
          role: "verified",
          locator: "COAT: Harsh, very dense and straight with dense undercoat"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-halden-hound-official-standard",
          role: "verified",
          locator: "Lips: Tight-fitting, not pendulous"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Strong nerves, exceptionally sociable and trusting, friendly, rarely vocal in everyday life, strong hunting drive"
        },
        {
          id: "fci-halden-hound-official-standard",
          role: "verified",
          locator: "Aggressive or overly shy dogs disqualifying"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "temperament.traits: Gentle, alert, intelligent, confident, energetic"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "cited",
          locator: "High activity level, high friendliness, quiet everyday habits"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "Temperament traits"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 scores synthesized from NKK profile and documented scenthound traits."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "cited",
          locator: "High activity, low coat care, hunting and family lifestyle guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Combines NKK activity/care profile with standard drop-ear and winter paw care."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Aktivitetsnivå: Høyt; physically strong, durable all-day hunting hound"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "cited",
          locator: "High daily activity requirement"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial estimate of 60 to 90 minutes daily for an athletic endurance hound."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "cited",
          locator: "High activity level and hunting drive"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial assessment that high endurance and outdoor needs make apartments generally unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "cited",
          locator: "Active outdoor hunting hound profile"
        }
      ],
      verifiedOn: null,
      note: "A securely fenced yard is strongly recommended."
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-halden-hound-official-standard",
          role: "verified",
          locator: "Harsh, very dense coat with thick undercoat and well-haired toes suited to Nordic winters"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "cited",
          locator: "Sociable hunting and family dog profile"
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
          locator: "Medium-sized working hunting hound build"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional guidance for active medium-sized working scenthounds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "cited",
          locator: "Standard canine life-stage feeding"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage meal schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Despite small population (10-20 puppies/year), no significant incidence of hereditary diseases (including HD) recorded; HD screening and 20-offspring breeding cap recommended"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "Lifespan 12–14 years"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "Grounded directly in NKK's breed profile and Norwegian harehound breeding program."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Low recorded hereditary disease burden; HD screening recommended; critically small population size (10-20 puppies/year)"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "Distinguishes proactive HD monitoring and small-population genetic management from general drop-ear and deep-chested hound risks."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "cited",
          locator: "NKK HD breeding recommendations (A/B/C grading, C mated only to HD-free) and 20-offspring limit"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care tailored to active Nordic hunting hounds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "NKK Norwegian harehound breeding program: radiographic hip dysplasia (HD) evaluation recommended for breeding stock"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "Aligned strictly with NKK's published breeding-program recommendations."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-halden-hound-official-standard",
          role: "cited",
          locator: "Jaws/teeth: complete scissor bite"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "cited",
          locator: "Medium-set drop ears"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-halden-hound-official-standard",
          role: "cited",
          locator: "Harsh double coat and well-haired toes"
        }
      ],
      verifiedOn: null,
      note: null
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "cited",
          locator: "Fine combination of hunting and family dog; high activity level"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability ratings based on NKK's activity and temperament profile."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "1860s Bisseberghund, Ankerstøver, 1931 distemper, WWII, 1938 name, 1952 approval, 10-20 annual puppies, quiet everyday demeanor"
        },
        {
          id: "fci-halden-hound-official-standard",
          role: "verified",
          locator: "Feet well covered with hair between the toes"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Verified historical and anatomical facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-halden-hound-official-standard",
          role: "verified",
          locator: "Height (52–60 cm / 50–58 cm), coat, and predominantly white tricolour pattern"
        },
        {
          id: "nkk-haldenstover-rasestandard",
          role: "verified",
          locator: "Hunting roles (hare/fox/lynx), steady nerves, quiet indoor nature, HD screening"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "Weight (23–29 kg males, 20–26 kg females) and lifespan (12–14 years)"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "Original FAQ answers grounded in FCI Standard No. 267, NKK, and The Dog API without Rule 5 registry names."
    }
  },

  updatedOn: "2026-11-21"
};
