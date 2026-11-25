import type { Breed } from "../schema/breed.types";

export const braque_francais_pyrenees: Breed = {
  slug: "braque-francais-pyrenees",
  name: "Braque Français, type Pyrénées",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "French Pointing Dog - Pyrenean Type",
    "Braque Français Pyrenean",
    "Braque Français (Pyrenees)",
    "Pyrenean French Pointer",
    "Petit Braque Français"
  ],

  group:
    "Pointing Dogs; Section 1.1 — Continental Pointing Dogs, 'Braque' type (with working trial; also classified in the Sporting group)",

  origin: {
    country: "France",
    region: "Pyrenees and Southwestern France"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/French_Pointer_type_Pyrenean.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:French_Pointer_type_Pyrenean.jpg",
      title: "French Pointer type Pyrenean.jpg",
      description:
        "An adult Braque Français, type Pyrénées photographed outdoors, showing its lean rustic build, short fine chestnut-and-white ticked coat, high-set barely folded drop ears, and gentle dark eyes.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2017-12-08",
      uploadedOn: "2018-01-30",
      width: 1712,
      height: 1451,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:French_Pointer_type_Pyrenean.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-25"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Wy%C5%BCe%C5%82_pirenejski_308.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Wy%C5%BCe%C5%82_pirenejski_308.jpg",
      title: "Wyżeł pirenejski 308.jpg",
      description:
        "An adult Braque Français, type Pyrénées standing in profile at an exhibition, highlighting its lighter athletic frame, clean dewlap-free neck, tight feet, and sleek brown-and-white coat.",
      creator: "Pleple2000",
      uploader: "Pleple2000",
      capturedOn: "2006-11-12",
      uploadedOn: "2006-11-22",
      width: 2208,
      height: 2010,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Pleple2000, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Wy%C5%BCe%C5%82_pirenejski_308.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-25"
    }
  ],

  overview: {
    summary:
      "A nimble, lighter-framed, and remarkably gentle medium-sized French pointing dog from the Pyrenees and southwestern France, uniting centuries-old upland bird-hunting efficiency and natural retrieving instincts with an affectionate, biddable family temperament.",

    description:
      "The Braque Français, type Pyrénées—also known as the French Pointing Dog (Pyrenean Type)—is the smaller, sleeker, and more widely kept of the two historic Braque Français varieties. Sharing the noble continental pointing silhouette of its larger Gascogne cousin while trimming away excess weight and loose skin, it stands as a rustic, well-muscled, athletic gun dog built for agile endurance across upland plains and wooded foothills. Its clean head features a chestnut-brown nose with wide nostrils, less pendulous lips, warm amber-to-chestnut eyes radiating gentle intelligence, and barely folded drop ears set above the eye line whose tips stop roughly 2 cm short of the nose leather. A muscular neck with little or no dewlap leads into a compact back, tight feet, a fine tail that may be naturally short from birth, and a finer, shorter chestnut-and-white coat than the Gascogne type. Enthusiastic, fast, and methodical in the field—with a strong natural retrieve and a love of water—it transitions seamlessly indoors into a calm, tender, child-loving companion that thrives on close partnership with its owner.",

    history:
      "Descending from one of Europe's oldest continental pointing lineages—already described in the fourteenth century by Gaston Fébus, Count of Foix, and linked historically to ancient Spanish pointing dogs and southern hunting hounds—the Braque Français evolved across southwestern France and the central Pyrenees without heavy outside crossbreeding. Over time, regional hunting terrain shaped two closely related yet distinct sizes: the larger, heavier-boned Gascogne type of the plains and the smaller, lighter, more agile Pyrenean type suited to rugged foothills and versatile foot-hunting. Preserved for centuries purely for practical field efficiency, both types earned definitive international recognition in January 1955 and formal Canadian recognition in 1992, with the Pyrenean type becoming by far the more numerous of the two in France and gaining a dedicated following in Italy and North America. Today, it remains a quintessential French upland bird dog while earning appreciation among active families and dog-sport enthusiasts.",

    originalPurpose:
      "Locating, pointing, flushing, and retrieving upland game birds and small game across southwestern France and the Pyrenean foothills.",

    currentRoles: [
      "Versatile upland pointing and retrieving hunting dog",
      "Water-retrieving and scent-tracking sporting dog",
      "Canine-sports competitor in agility, obedience, and rally",
      "Gentle, affectionate family companion for active households"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 51,
        max: 58
      },
      female: {
        min: 49,
        max: 56
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 17,
        max: 25
      },
      female: {
        min: 17,
        max: 25
      }
    },

    lifespanYears: {
      min: 12,
      max: 15
    },

    coatType:
      "Short, smooth, sleek coat that is noticeably finer and shorter than that of the Gascogne type, lying closely over tighter, supple skin.",

    coatLength: "Short",

    coatColors: [
      "Chestnut brown (solid self-coloured, with or without white on the head, chest, and legs)",
      "Chestnut brown and white (white with chestnut or cinnamon patches, with or without mottling)",
      "Chestnut brown and white heavily ticked or mottled (roan)",
      "Chestnut brown with pale tan markings over the eyes, on the cheeks, lips, and limbs (black nose and any trace of black in the coat are disqualifying)"
    ],

    sheddingLevel:
      "Moderate; the fine, short coat sheds lightly throughout the year with two heavier seasonal moults per year",

    droolingLevel:
      "Low; less pendulous, less convex lips than the Gascogne type combined with tight skin and little or no neck dewlap keep drooling minimal",

    distinctiveFeatures: [
      "Rustic, well-muscled, athletic medium continental pointer retaining the noble proportions of the larger Gascogne type in a lighter, tighter-skinned, more agile frame",
      "Height at the withers of 51 to 58 cm for males and 49 to 56 cm for females",
      "Working adult weight of 17 to 25 kg for both males and females",
      "Clean, balanced head with a chestnut-brown nose and well-opened nostrils, slightly convex or straight non-snipey muzzle, less pendulous lips, and a complete scissor bite",
      "Warm, gentle golden-amber to dark chestnut eyes with tight pigmented rims (round bulging eyes, entropion, ectropion, and pink eyelid spots are faulted or disqualified)",
      "Barely folded drop ears set above the eye line whose tips terminate roughly 2 cm short of the nose leather (ears touching the nose are faulted)",
      "Muscular neck with slight or no dewlap, shorter strong back, slightly less let-down belly (never whippety), and lighter-boned straight limbs with tight lean feet",
      "Fine tail that may be naturally short from birth (complete absence of tail / anury is disqualifying; traditionally docked where legally permitted, left natural where restricted)",
      "Finer, shorter smooth coat in chestnut, chestnut-and-white, or heavily ticked brown-and-white patterns (black noses and black hair are strictly disqualified)"
    ]
  },

  temperament: {
    traits: [
      "Gentle, soft-natured, friendly, and deeply affectionate toward its owner and family",
      "Intelligent, biddable, and remarkably eager to please—responding promptly whenever it clearly understands what is asked",
      "Emotionally sensitive to harsh handling; undeserved punishment can discourage and shut down this soft pointer for a long time",
      "Sociable, easygoing, and welcoming with polite visitors and other dogs, and famously fond of children",
      "Energetic, agile, and intensely driven outdoors with a strong pointing, retrieving, and water-loving instinct",
      "Calm and settled indoors once its daily physical and mental sporting needs are properly fulfilled"
    ],

    scores: {
      affection: 5,
      withChildren: 5,
      withDogs: 5,
      withStrangers: 4,
      protectiveness: 2,
      independence: 2,
      trainability: 5,
      barking: 2,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; an athletic, energetic continental bird dog that needs substantial daily outdoor exercise, running, swimming, or pointing work to stay calm and content",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Upland bird pointing, flushing, retrieving, and natural-aptitude field trials",
        "Brisk daily woodland hikes, trail running, swimming, and retrieving balls or flying discs",
        "Canine sports including agility, obedience, rally, and structured nosework",
        "Supervised vigorous play inside a spacious, securely fenced yard"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Very easy-care short fine coat—brush once a week with a rubber grooming mitt or soft bristle brush to clear loose hair, increasing frequency briefly during its two seasonal sheds each year.",

      bathing:
        "Bathe only occasionally when visibly muddy or odorous after fieldwork or swimming, using a mild canine shampoo.",

      notes: [
        "Inspect and gently dry the drop ears weekly—and after every swim or wet forest outing—to prevent wax buildup, debris, or ear infections.",
        "Trim strong, fast-growing nails regularly with clippers or a grinder to avoid overgrowth, splitting, or cracking.",
        "Check the tight lean feet and fine short coat after brush hunting for ticks, thorns, burrs, or minor scrapes.",
        "Brush teeth several times weekly using canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Easy; exceptionally intelligent, attentive, cooperative, and eager to please, making it one of the most responsive continental pointers when trained with gentle clarity",

      tips: [
        "Use calm, clear, reward-based positive training with praise, play, and small treats; harsh corrections or shouting are unnecessary and can quickly discourage this sensitive breed.",
        "Channel its strong natural pointing, retrieving, and water-loving instincts early into field training, retrieve games, agility, or rally.",
        "Practice solid recall and impulse control around birds and wildlife before granting off-leash freedom in open countryside.",
        "Acclimate puppies gently to urban sights and noises early if living in a town or city."
      ],

      socialization:
        "Early, positive exposure to varied people, friendly dogs, children, and everyday environments reinforces its naturally sociable, calm, and confident disposition."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate and four-season climates, matching southwestern France and the Pyrenean foothills",
        "Warm climates are handled well during active hunting when vigorous work is scheduled for cooler morning or evening hours with shade and cool drinking water",
        "Cold winter weather is handled comfortably while actively running, though its very fine, short single coat needs warm indoor shelter—and a light coat during freezing inactive spells"
      ],

      aloneTimeTolerance:
        "Low; deeply attached to its owner and family, a Braque Français, type Pyrénées needs close daily human companionship and can grow anxious or restless if left alone for long stretches."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for medium-sized, active sporting and hunting breeds.",

    feedingFrequency: {
      puppy:
        "Three measured small meals daily until roughly six months of age to support steady, lean musculoskeletal growth.",
      adult:
        "Two measured meals daily (preferred over a single large evening meal to maintain steady energy and support healthy digestion).",
      senior:
        "Two portion-controlled meals daily tailored for lower activity and joint maintenance."
    },

    guidelines:
      "Measure every meal accurately according to activity level to keep this pointer lean, agile, and well-muscled without excess weight over its joints. Increase caloric density gradually during strenuous autumn hunting seasons and scale back during quieter months. Although traditional French hunting texts mention a single evening meal, splitting adult rations into two smaller meals with calm post-meal rest is safer for deep-chested sporting dogs. Keep clean, fresh drinking water available at all times.",

    considerations: [
      "Count all training treats inside the daily calorie budget to prevent obesity.",
      "Avoid intense running immediately before or after large meals as a general deep-chested sporting-dog precaution.",
      "Keep growing puppies lean on a balanced medium-breed growth formula to support healthy hip development.",
      "Transition gradually between diet formulas over five to seven days to avoid digestive upset."
    ],

    note:
      "Caloric needs differ substantially between active upland hunting dogs and lower-activity household companions. Consult a veterinarian to establish individual feeding portions."
  },

  health: {
    overview:
      "The Braque Français, type Pyrénées is widely regarded as a hardy, healthy sporting breed with a typical life expectancy of 12 to 15 years and no single-gene breed-specific hereditary disease mutations currently established in major genetic databases. Peer-reviewed genome-wide SNP analyses of the breed documented moderate inbreeding levels well within the range of other European purebred dogs (with recent effective population size estimated at 27.5 to 51 across sampled cohorts), confirming sufficient genetic diversity for conservation while underscoring thoughtful outbred pairing. Practical pre-breeding and veterinary priorities centre on radiographic hip dysplasia screening (recommended in Nordic breeding strategies), eyelid conformation checks (entropion and ectropion), weekly drop-ear care, and active fieldwork precautions.",

    commonConditions: [
      "Hip dysplasia — developmental laxity and malformation of the hip joints that can progress to osteoarthritis; actively monitored via pre-breeding radiographic hip screening in European breeding programmes (targeting HD-A or HD-B status)",
      "Eyelid conformation issues (entropion and ectropion) — inward or outward rolling of the eyelids that can irritate the cornea, explicitly flagged as disqualifying structural faults requiring veterinary attention",
      "Otitis externa (outer ear infections) — conformation-linked risk associated with drop ears that can retain moisture, wax, or woodland debris, especially in water-loving dogs",
      "Population-level inbreeding monitoring — peer-reviewed 2018 genomic studies documented moderate homozygosity (effective population size ~27.5 to 51 in studied cohorts), emphasizing careful pedigree management to preserve long-term genetic health",
      "Gastric dilatation-volvulus (GDV / bloat) and fieldwork trauma — general active deep-chested sporting-dog precautions alongside paw cuts, brush abrasions, and tick exposure"
    ],

    preventiveCare: [
      "Ask breeders for documented parental radiographic hip dysplasia clearances (ideally HD-A or HD-B) and review multi-generation pedigrees to support healthy genetic diversity.",
      "Inspect and dry the drop ears weekly—and after every swim or damp woodland outing—to prevent ear infections.",
      "Keep the dog lean and well-conditioned, feed two divided adult meals with calm post-meal rest, and check paws and coat for thorns or ticks after every hunt.",
      "Schedule annual veterinary wellness check-ups (including eye and dental checks) and maintain consistent vaccinations and year-round parasite prevention."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation prior to breeding (recommended HD-A or HD-B in European breeding guidance)",
      "Routine veterinary ophthalmic evaluation (checking eyelid conformation for entropion/ectropion and ocular health)",
      "Multi-generation pedigree review to manage inbreeding in small regional populations"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste and schedule regular veterinary dental checks to keep teeth and gums healthy.",

    earCare:
      "Inspect and dry the high-set, barely folded drop ears weekly—and after every swimming session—for wax buildup, trapped moisture, grass seeds, or redness, cleaning gently with a veterinarian-approved solution when needed.",

    skinCare:
      "Run hands over the fine, short coat and tight skin after every woodland or meadow outing to catch ticks, burrs, thorns, or minor scrapes early."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Upland bird hunters and field-trial enthusiasts looking for a nimble, close-working, natural-retrieving continental pointer",
      "Active families with children seeking an affectionate, gentle, biddable, and dog-friendly companion with a low-maintenance short coat",
      "Committed active apartment or urban owners who acclimate the dog young and provide 60 to 90 minutes of vigorous daily outdoor exercise, hiking, or dog sports",
      "First-time sporting-breed owners willing to use calm, positive training and meet high daily activity needs"
    ],

    notIdealFor: [
      "Sedentary households expecting a low-energy couch dog satisfied with brief walks",
      "Owners who leave a deeply bonded companion alone for long workdays without company",
      "Handlers who use harsh, heavy-handed training corrections that crush this soft pointer's confidence",
      "Homes with free-roaming pet birds or small prey animals without strict management"
    ]
  },

  funFacts: [
    "The Braque Français lineage is one of Europe's oldest documented pointing dogs—already praised in the fourteenth century by Gaston Fébus, Count of Foix, long before modern pointer breeds were shaped.",
    "Among the two closely related French varieties, the Braque Français, type Pyrénées is the smaller, sleeker, tighter-skinned, and more popular cousin of the larger Braque Français, type Gascogne.",
    "Some Braque Français, type Pyrénées puppies are born naturally short-tailed—a traditional accepted trait, though being born completely tailless (anury) is disqualified.",
    "Its coat colour rules are strict on pigment: every dog must carry a chestnut-brown nose and brown-and-white (or solid brown) markings, while a black nose or even a trace of black hair in the coat is a disqualifying fault.",
    "In 2018, Italian and international veterinary geneticists published the first genome-wide SNP characterizations of the Braque Français, type Pyrénées, confirming that despite its modest global numbers it retains healthy genetic variability suitable for long-term conservation."
  ],

  faq: [
    {
      question: "What is a Braque Français, type Pyrénées?",
      answer:
        "The Braque Français, type Pyrénées (French Pointing Dog – Pyrenean Type) is an agile, medium-sized French pointing dog from southwestern France and the Pyrenees, known for its fine chestnut-and-white short coat, natural retrieving instinct, and gentle, biddable temperament."
    },
    {
      question: "How tall and heavy is a Braque Français, type Pyrénées?",
      answer:
        "Adult males stand 51 to 58 cm at the withers and adult females stand 49 to 56 cm, with working adults weighing 17 to 25 kg."
    },
    {
      question: "How is the Pyrenean type different from the Gascony type?",
      answer:
        "The Pyrenean type is smaller, lighter-boned, tighter-skinned, and more agile—with a finer, shorter coat, less pendulous lips, higher-set barely folded ears, and little or no dewlap—compared with the larger, heavier Braque Français, type Gascogne."
    },
    {
      question: "How long does a Braque Français, type Pyrénées live?",
      answer:
        "Generally a hardy, healthy sporting breed, the Braque Français, type Pyrénées has an average life expectancy of 12 to 15 years with balanced nutrition and routine veterinary care."
    },
    {
      question: "Can a Braque Français, type Pyrénées live in a city or apartment?",
      answer:
        "Yes, if acclimated young and paired with an active owner. Although calm and gentle indoors, it is an athletic bird dog that requires 60 to 90 minutes of daily vigorous walks, swimming, hiking, or canine sports to stay happy."
    },
    {
      question: "Are Braque Français, type Pyrénées good with children and easy to train?",
      answer:
        "Yes. They are famously fond of children, sociable with other dogs, intelligent, and eager to please—making them very easy to train using calm, positive reward-based methods while avoiding harsh punishment, which easily discourages this sensitive breed."
    },
    {
      question: "How much grooming does a Braque Français, type Pyrénées need?",
      answer:
        "Grooming is minimal: weekly brushing with a rubber mitt or soft brush manages its fine short coat (which sheds more heavily twice a year), paired with occasional baths, regular nail trims, and weekly drop-ear checks."
    },
    {
      question: "What are the main health concerns for a Braque Français, type Pyrénées?",
      answer:
        "Overall a healthy breed with no established single-gene hereditary diseases, its main veterinary priorities are radiographic hip dysplasia screening in breeding stock, checking for eyelid faults (entropion/ectropion), preventing drop-ear infections after swimming, and managing genetic diversity across small regional populations."
    }
  ],

  references: [
    "fci-braque-francais-pyrenees-official-standard",
    "fci-braque-francais-pyrenees-nomenclature",
    "scc-braque-francais-type-pyrenees-profile",
    "ckc-braque-francais-pyrenees-standard",
    "akc-braque-francais-pyrenean-profile",
    "skk-braque-francais-type-pyrenees-profile",
    "skk-skf-braque-francais-pyrenees-ras",
    "pmc-mastrangelo-2018-bfp-genomic-characterization",
    "pmc-mastrangelo-2018-bfp-roh-diversity",
    "wikimedia-french-pointer-pyrenean-canarian",
    "wikimedia-wyzel-pirenejski-308-pleple2000"
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
          id: "fci-braque-francais-pyrenees-official-standard",
          role: "verified",
          locator: "Standard heading: BRAQUE FRANÇAIS, TYPE PYRÉNÉES (French Pointing Dog Pyrenean Type)"
        },
        {
          id: "ckc-braque-francais-pyrenees-standard",
          role: "verified",
          locator: "Official CKC name: BRAQUE FRANÇAIS (PYRENEES)"
        },
        {
          id: "akc-braque-francais-pyrenean-profile",
          role: "verified",
          locator: "Official AKC FSS name: Braque Francais Pyrenean"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified across FCI Standard No. 134, CKC, and AKC; Pyrenean French Pointer and Petit Braque Français are widely used English and French equivalents."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-braque-francais-pyrenees-official-standard",
          role: "verified",
          locator: "FCI-CLASSIFICATION: Group 7 Pointing Dogs. Section 1.1 Continental Pointing Dogs, type « Braque ». With working trial."
        },
        {
          id: "ckc-braque-francais-pyrenees-standard",
          role: "verified",
          locator: "CKC Group I: Sporting Dogs"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-braque-francais-pyrenees-official-standard",
          role: "verified",
          locator: "ORIGIN: France"
        },
        {
          id: "skk-braque-francais-type-pyrenees-profile",
          role: "verified",
          locator: "Historik: Southwestern France and the central Pyrenees"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Country (France) verified from FCI Standard No. 134; Pyrenees and Southwestern France regional origin verified from SKK and SCC."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-braque-francais-pyrenees-official-standard",
          role: "verified",
          locator: "UTILIZATION (Pointing dog), GENERAL APPEARANCE (rustic, not heavy, sufficiently muscled, tighter skin), HEAD, EARS, NECK, TAIL, COAT, SIZE"
        },
        {
          id: "fci-braque-francais-pyrenees-nomenclature",
          role: "verified",
          locator: "Date of acceptance on a definitive basis by the FCI: 1955-01-18"
        },
        {
          id: "scc-braque-francais-type-pyrenees-profile",
          role: "verified",
          locator: "Historique (descendant of oldest known pointing breed described by Gaston Phebus, Count of Foix), Comportement, Vivre en ville"
        },
        {
          id: "ckc-braque-francais-pyrenees-standard",
          role: "verified",
          locator: "1992 CKC recognition and structural comparison with Gascogne type"
        },
        {
          id: "akc-braque-francais-pyrenean-profile",
          role: "verified",
          locator: "Smaller and more popular of the two Braque Français types; natural retrieve and love of water"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Synthesized in original prose from FCI Standard No. 134, FCI Nomenclature, SCC, CKC, and AKC."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-braque-francais-pyrenees-official-standard",
          role: "verified",
          locator: "GENERAL APPEARANCE, HEAD (chestnut-brown nose, less pendent lips), EARS (above eye line, barely folded, ending 2 cm from nose leather), NECK (slight or no dewlap), BODY, TAIL (fine, docked or naturally short; anury disqualifying), LIMBS (lighter, tight feet), COAT (finer and shorter than Gascogne), SIZE, DISQUALIFYING FAULTS (entropion, ectropion, split nose, syndactyly)"
        },
        {
          id: "ckc-braque-francais-pyrenees-standard",
          role: "verified",
          locator: "COLOUR (white with dark brown/cinnamon patches or mottling, self-coloured brown, optional pale tan over eyes/cheeks/limbs; black nose and traces of black in coat disqualified)"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "All conformation differences from the Gascogne type, 2 cm ear-tip rule, natural short tail allowance, finer short coat, and chestnut-and-white colour rules follow FCI Standard No. 134 (2023) and CKC Standard."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-braque-francais-pyrenees-official-standard",
          role: "verified",
          locator: "SIZE: Male: 51 - 58 cm. Female: 49 - 56 cm."
        },
        {
          id: "scc-braque-francais-type-pyrenees-profile",
          role: "verified",
          locator: "Taille: 51 à 58 cm pour les mâles, 49 à 56 cm pour les femelles."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Preserved verbatim in published unit of centimetres (51 to 58 cm males, 49 to 56 cm females) from the current 2023 FCI Standard No. 134 and SCC. (Older 2015 CKC and SKK summary pages still reflect the previous 47–56 / 47–58 cm bounds; AKC lists 18.5–23 in)."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "ckc-braque-francais-pyrenees-standard",
          role: "verified",
          locator: "Weight: 17 to 25 kg (37.5 to 55 lb)."
        },
        {
          id: "akc-braque-francais-pyrenean-profile",
          role: "cited",
          locator: "AKC Weight Chart separately lists 40 to 55 pounds for both sexes."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "FCI Standard No. 134 and SCC omit weight; stored verbatim in first-stated published unit of kilograms (17 to 25 kg) from the official CKC Breed Standard."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-braque-francais-pyrenean-profile",
          role: "verified",
          locator: "Life Expectancy: 12-15 years."
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified from AKC breed profile."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "skk-braque-francais-type-pyrenees-profile",
          role: "verified",
          locator: "Skötsel: Very easy-care short fine coat; sheds twice a year."
        },
        {
          id: "fci-braque-francais-pyrenees-official-standard",
          role: "verified",
          locator: "COAT: Finer and shorter than that of the Gascogne Type."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-braque-francais-pyrenees-official-standard",
          role: "verified",
          locator: "Lips: Less pendent or less convex than in the Gascogne type; NECK: Slight or no dewlap; GENERAL APPEARANCE: Skin tighter."
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Less pendulous lips, tight skin, and minimal/no dewlap keep drooling low."
    },

    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-braque-francais-type-pyrenees-profile",
          role: "verified",
          locator: "Comportement & Vivre en ville: Intelligent, obedient, very attached to owner; harsh/undeserved punishment can put it off for a long time; gentle, calm, adores children."
        },
        {
          id: "akc-braque-francais-pyrenean-profile",
          role: "verified",
          locator: "Friendly, smart, willing to please; gentle, sociable, submissive; natural retrieve instinct and loves water."
        },
        {
          id: "skk-braque-francais-type-pyrenees-profile",
          role: "verified",
          locator: "Friendly, easygoing, sociable with people and other dogs, responsive, cooperative, easy to train, strong hunting drive."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-braque-francais-pyrenean-profile",
          role: "cited",
          locator: "Friendly, smart, willing to please, sociable with family, children, and other dogs"
        },
        {
          id: "scc-braque-francais-type-pyrenees-profile",
          role: "cited",
          locator: "Gentle, calm indoors, sensitive to punishment, athletic outdoors"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates reflecting documented family warmth, child and dog sociability, high trainability, and active sporting energy."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-braque-francais-pyrenean-profile",
          role: "cited",
          locator: "Weekly brushing, occasional baths, regular nail trims, ear checks, toothbrushing, swimming/hiking/retrieving/agility/obedience/rally"
        },
        {
          id: "scc-braque-francais-type-pyrenees-profile",
          role: "cited",
          locator: "Regular sporting exercise, gentle training, city adaptation if acclimated young"
        }
      ],
      verifiedOn: null,
      note:
        "General continental-pointer care combining high daily outdoor exercise and positive training with minimal short-coat grooming."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "skk-braque-francais-type-pyrenees-profile",
          role: "verified",
          locator: "Energetic, willing working hunting dog requiring an active daily routine with regular exercise and mental stimulation."
        },
        {
          id: "scc-braque-francais-type-pyrenees-profile",
          role: "verified",
          locator: "Vivre en ville: Sporting dog needing regular active exercise to expend energy."
        },
        {
          id: "akc-braque-francais-pyrenean-profile",
          role: "verified",
          locator: "Excels in swimming, hiking, retrieving, agility, obedience, and rally."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "Editorial daily activity range (60 to 90 minutes) reflecting an energetic medium-sized upland pointing dog."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-braque-francais-type-pyrenees-profile",
          role: "verified",
          locator: "Vivre en ville: Gentle and calm, it adapts very well to city living provided it is accustomed young and given regular sporting exercise."
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Supported by SCC city-adaptation guidance with explicit daily exercise caveats."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "skk-braque-francais-type-pyrenees-profile",
          role: "cited",
          locator: "Active hunting and family companion thriving with outdoor access"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial assessment that a home with a securely fenced yard suits this active sporting pointer."
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-braque-francais-pyrenees-official-standard",
          role: "cited",
          locator: "Southwestern French/Pyrenean origin and very fine, short smooth coat"
        }
      ],
      verifiedOn: null,
      note: "General climate guidance inferred from regional French origin and fine short coat."
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-braque-francais-type-pyrenees-profile",
          role: "verified",
          locator: "Vivre en ville: Le Braque français type pyrénées doit vivre avec son maître (must live closely with its owner)."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-braque-francais-type-pyrenees-profile",
          role: "cited",
          locator: "Alimentation & Santé: Commercial or balanced diet scaled to activity level (notes traditional single evening meal)."
        },
        {
          id: "akc-braque-francais-pyrenean-profile",
          role: "cited",
          locator: "Monitor treats to prevent obesity; clean fresh water continuously."
        }
      ],
      verifiedOn: null,
      note:
        "General sporting-breed veterinary nutrition guidance emphasizing lean athletic condition and divided adult meals."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Standard medium-breed canine life-stage feeding schedule dividing adult rations into two meals."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-braque-francais-pyrenean-profile",
          role: "verified",
          locator: "Health: Most Pyrenean Type French Pointers are healthy dogs; responsible breeders screen stock for common health issues."
        },
        {
          id: "skk-skf-braque-francais-pyrenees-ras",
          role: "verified",
          locator: "Hälsa: Recommends radiographic hip dysplasia screening (HD-A or HD-B) for breeding stock."
        },
        {
          id: "pmc-mastrangelo-2018-bfp-genomic-characterization",
          role: "verified",
          locator: "PLOS ONE 2018 (PMC6281230, PMID 30517199): Genome-wide characterization showing inbreeding levels well within other purebred dog breeds and recent Ne = 51."
        },
        {
          id: "pmc-mastrangelo-2018-bfp-roh-diversity",
          role: "verified",
          locator: "BMC Res Notes 2018 (PMC5761150): SNP-array diversity study (Ho 0.371, He 0.359, Ne 27.5, FROH 0.0526-0.225) confirming sufficient genetic variability for conservation."
        },
        {
          id: "fci-braque-francais-pyrenees-official-standard",
          role: "verified",
          locator: "DISQUALIFYING FAULTS: Entropion, ectropion."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Synthesizes AKC health status, Swedish RAS hip-screening recommendations, FCI eyelid disqualifications, and peer-reviewed genomic diversity studies without naming clubs or registries in user-facing text."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "skk-skf-braque-francais-pyrenees-ras",
          role: "verified",
          locator: "Pre-breeding radiographic hip dysplasia monitoring (HD-A / HD-B target)"
        },
        {
          id: "fci-braque-francais-pyrenees-official-standard",
          role: "verified",
          locator: "Entropion and ectropion eyelid conformation faults"
        },
        {
          id: "pmc-mastrangelo-2018-bfp-roh-diversity",
          role: "verified",
          locator: "Population-level homozygosity and Ne monitoring (~27.5 to 51 across 2018 studies)"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Explicitly distinguishes documented screening/genomic priorities (hip dysplasia, eyelid conformation, genetic diversity) from general drop-ear and active deep-chested sporting-dog precautions."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "skk-skf-braque-francais-pyrenees-ras",
          role: "cited",
          locator: "Pre-breeding radiographic hip screening"
        },
        {
          id: "akc-braque-francais-pyrenean-profile",
          role: "cited",
          locator: "Regular ear checks, nail trims, toothbrushing, and weight management"
        }
      ],
      verifiedOn: null,
      note: "General preventive veterinary care protocol tailored to Braque Français, type Pyrénées."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "skk-skf-braque-francais-pyrenees-ras",
          role: "verified",
          locator: "Recommends radiographic hip dysplasia screening (HD-A or HD-B) prior to breeding."
        },
        {
          id: "pmc-mastrangelo-2018-bfp-genomic-characterization",
          role: "verified",
          locator: "Supports ongoing pedigree and genetic-diversity management."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Summarizes European RAS hip-screening guidance and genomic diversity recommendations alongside routine ophthalmic checks without naming clubs or registries in user-facing prose."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-braque-francais-pyrenean-profile",
          role: "cited",
          locator: "Teeth should be brushed regularly."
        }
      ],
      verifiedOn: null,
      note: "Standard home and veterinary dental care guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-braque-francais-pyrenean-profile",
          role: "cited",
          locator: "Ears should be checked regularly to avoid wax and debris buildup that can lead to infection."
        },
        {
          id: "fci-braque-francais-pyrenees-official-standard",
          role: "cited",
          locator: "EARS: Set on above eye line, barely folded, tips ending 2 cm from nose leather."
        }
      ],
      verifiedOn: null,
      note: "Routine drop-ear inspection and post-swim drying protocol."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-braque-francais-pyrenees-official-standard",
          role: "cited",
          locator: "Skin tighter than Gascogne type; finer and shorter smooth coat."
        }
      ],
      verifiedOn: null,
      note: "General skin and woodland-tick inspection guidance after hunting outings."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "scc-braque-francais-type-pyrenees-profile",
          role: "cited",
          locator: "Adores children, must live with owner, adapts well to city when acclimated young and exercised regularly, sensitive to harsh punishment"
        },
        {
          id: "skk-braque-francais-type-pyrenees-profile",
          role: "cited",
          locator: "Excellent both as hunting dog and family dog in an active home"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability evaluations balancing gentle family friendliness, high trainability, and low-grooming coat against high daily sporting exercise and sensitivity to isolation or harsh handling."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-braque-francais-type-pyrenees-profile",
          role: "verified",
          locator: "Direct descendant of the oldest known pointing breed described by Gaston Phebus, Count of Foix"
        },
        {
          id: "akc-braque-francais-pyrenean-profile",
          role: "verified",
          locator: "Smaller and more popular of the two Braque Français types"
        },
        {
          id: "fci-braque-francais-pyrenees-official-standard",
          role: "verified",
          locator: "Naturally short tail permitted (anury disqualified)"
        },
        {
          id: "ckc-braque-francais-pyrenees-standard",
          role: "verified",
          locator: "Black nose and any trace of black in the coat are disqualifying"
        },
        {
          id: "pmc-mastrangelo-2018-bfp-genomic-characterization",
          role: "verified",
          locator: "2018 first genome-wide SNP characterization confirming sufficient diversity for conservation"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified historical, morphological, pigmentation, and genomic facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-braque-francais-pyrenees-official-standard",
          role: "verified",
          locator: "Height (51-58 cm males / 49-56 cm females), structural differences from Gascogne type, entropion/ectropion disqualifications"
        },
        {
          id: "ckc-braque-francais-pyrenees-standard",
          role: "verified",
          locator: "Weight (17-25 kg)"
        },
        {
          id: "akc-braque-francais-pyrenean-profile",
          role: "verified",
          locator: "Lifespan (12-15 years), minimal grooming, positive training, healthy profile"
        },
        {
          id: "scc-braque-francais-type-pyrenees-profile",
          role: "verified",
          locator: "City/apartment adaptation with exercise, fondness for children, sensitivity to harsh punishment"
        },
        {
          id: "skk-skf-braque-francais-pyrenees-ras",
          role: "verified",
          locator: "Hip dysplasia radiographic screening"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "FAQ answers synthesize FCI Standard No. 134, SCC, CKC, AKC, SKK/RAS, and peer-reviewed genomic studies without naming clubs or registries in user-facing prose."
    }
  },

  updatedOn: "2026-11-25"
};
