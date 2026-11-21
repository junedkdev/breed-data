import type { Breed } from "../schema/breed.types";

export const basset_bleu_de_gascogne: Breed = {
  slug: "basset-bleu-de-gascogne",
  name: "Basset Bleu de Gascogne",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Blue Gascony Basset",
    "Basset Azul de Gascuña",
    "Blauer Basset der Gascogne"
  ],

  group: "Small-Sized Scenthound (Scenthound)",

  origin: {
    country: "France",
    region: "Gascony and Béarn, southwestern France"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Blue_Gascony_Basset_Basset_Bleu_de_Gascogne_02.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Blue_Gascony_Basset_Basset_Bleu_de_Gascogne_02.jpg",
      title: "Blue Gascony Basset Basset Bleu de Gascogne 02.jpg",
      description:
        "An adult Basset Bleu de Gascogne showing its slate-blue mottled coat and long drop ears.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2017-12-09",
      uploadedOn: null,
      width: 2162,
      height: 1406,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Blue_Gascony_Basset_Basset_Bleu_de_Gascogne_02.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Basset_bleu_de_Gascogne.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Basset_bleu_de_Gascogne.jpg",
      title: "Basset bleu de Gascogne.jpg",
      description:
        "An adult Basset Bleu de Gascogne (Noémie des Prés de Perce-Neiges) standing outdoors.",
      creator: "M.W. Reichert",
      uploader: "Caronna",
      capturedOn: "2005-10-30",
      uploadedOn: "2006-01-25",
      width: 921,
      height: 554,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by M.W. Reichert (uploaded by Caronna), Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Basset_bleu_de_Gascogne.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    }
  ],

  overview: {
    summary:
      "A sturdy, low-slung French scenthound known for its mottled slate-blue coat with tan points, long curling drop ears, deep ringing voice, and gentle, affectionate home demeanor.",

    description:
      "The Basset Bleu de Gascogne is an athletic, short-legged hunting hound from southwestern France that combines solid strength with aristocratic balance rather than heaviness. Closely related to the taller Grand Bleu de Gascogne, it carries a noble head with a slightly arched muzzle, dark brown eyes with a soft expression, and remarkably long, fine, inward-curling ears set very low. Its short, thick, close coat is heavily mottled in black and white to create a slate-blue look, accented by black head patches and tan markings over the eyes, on the cheeks, legs, and under the tail. Determined, keen-nosed, and rich-voiced on a scent trail, it transitions smoothly into a calm, warm companion at home.",

    history:
      "Rooted in the Gascony and Béarn regions of southwestern France, the Basset Bleu de Gascogne descends from the ancient Grand Bleu de Gascogne—hounds associated with medieval hunting estates such as that of Gaston Phébus. Breeders developed the shorter-legged basset type so hunters on foot could keep pace with the pack through dense brush and rough country while shooting small game. After numbers fell sharply in the late 19th century, French breeder Alain Bourbon revived and stabilized the breed in the early 20th century, preserving its distinctive slate-blue coat, deep hunting voice, and steady tracking style.",

    originalPurpose:
      "Tracking and driving small game such as hare and rabbit on foot for gun hunters, working alone or in packs.",

    currentRoles: [
      "Gun-hunting and pack tracking hound in wooded and brushy terrain",
      "Scent-trailing and utility tracking dog",
      "Gentle, companionable family pet for active outdoor homes"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 34,
        max: 38
      },
      female: {
        min: 34,
        max: 38
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 16,
        max: 18
      },
      female: {
        min: 16,
        max: 18
      }
    },

    lifespanYears: {
      min: 10,
      max: 14
    },

    coatType:
      "Short, thick, dense, and close-fitting single coat built to resist brambles and rain.",

    coatLength: "Short",

    coatColors: [
      "Slate-Blue Mottled (Black and White Ticked) with Black Patches and Tan Points"
    ],

    sheddingLevel: "Low to moderate",
    droolingLevel: "Moderate",

    distinctiveFeatures: [
      "Low-slung, sturdy basset silhouette showing power without clumsiness",
      "Dense black-and-white mottled coat giving a slate-blue appearance, paired with black head patches and tan markings above the eyes, on the cheeks, lips, inner ears, legs, and under the tail",
      "Very low-set, fine, supple drop ears that curl inward and extend past the nose",
      "Dark brown eyes with a soft, calm expression and a slightly arched nasal bridge",
      "Deep, sonorous, howling baying voice used while trailing",
      "Strong jaws with a complete scissor bite"
    ]
  },

  temperament: {
    traits: [
      "Gentle",
      "Affectionate",
      "Calm indoors",
      "Friendly",
      "Alert",
      "Loyal",
      "Independent",
      "Pack-oriented",
      "Persistent tracker"
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 5,
      withStrangers: 3,
      protectiveness: 2,
      independence: 4,
      trainability: 3,
      barking: 4,
      energy: 4
    }
  },

  care: {
    exercise: {
      level: "High",
      minutesPerDay: {
        min: 60,
        max: 120
      },
      activities: [
        "Long daily leashed walks with ample time for sniffing",
        "Structured scentwork and trailing games",
        "Supervised exploration in a securely fenced yard",
        "Pack walks with other sociable dogs"
      ]
    },

    grooming: {
      level: "Low to moderate",
      brushing: "Weekly brushing with a rubber hound glove or firm bristle brush",
      bathing: "Occasional baths as needed after muddy trail outings",
      notes: [
        "Check and gently clean the very long, curling drop ears regularly so trapped moisture does not trigger ear infections.",
        "Wipe drool from pendulous lips and chin folds after meals and water.",
        "Trim nails regularly and inspect paws and ear tips for burrs or briar scratches after woodland walks.",
        "Brush teeth several times a week with dog-safe toothpaste."
      ]
    },

    training: {
      difficulty: "Moderate",
      tips: [
        "Use calm, reward-based training with aromatic treats; this sensitive hound responds well to patience and poorly to harshness.",
        "Keep the dog on a leash or inside a securely fenced area outdoors, as a fresh scent trail can easily override recall.",
        "Start polite indoor habits and early socialization young, especially if living near neighbors.",
        "Channel strong scenting drive into nosework and trailing games."
      ],
      socialization:
        "Introduce puppies early to varied people, friendly dogs, town noises, and everyday routines so they grow into steady, adaptable companions."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,
      climates: ["Temperate", "Warm", "Cool"],
      aloneTimeTolerance: "Moderate"
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced dog food formulated for active medium-sized hounds, adjusted for age and daily activity.",

    feedingFrequency: {
      puppy: "Three to four small measured meals daily until six months old, then two meals",
      adult: "Two measured meals per day",
      senior: "Two portion-controlled meals per day adjusted for lower activity"
    },

    guidelines:
      "Measure portions carefully to keep this low-slung hound trim and muscular, because extra weight puts avoidable strain on its long back and short limbs. Use narrow bowls to keep the long ears out of food and water, and avoid heavy exercise right before or after meals.",

    considerations: [
      "Maintain a lean body weight to protect the elongated spine and joints.",
      "Count training treats within the daily calorie budget.",
      "Provide fresh water at all times and change diets gradually over about a week."
    ],

    note:
      "Confirm exact daily portions and nutritional needs with a veterinarian based on workload and life stage."
  },

  health: {
    overview:
      "The Basset Bleu de Gascogne is generally a hardy, rustic working hound with a typical lifespan of 10 to 14 years. No breed-specific causal genetic mutations are currently documented in peer-reviewed literature for this rare breed; health awareness centers on conformational risks shared by long-backed, pendulous-eared bassets—such as spinal disc strain, ear infections, eyelid conformation issues, joint dysplasia, and bloat in deep-chested dogs.",

    commonConditions: [
      "Ear infections (otitis externa) — long, low-set curling drop ears restrict airflow and can trap moisture without regular cleaning",
      "Spinal disc strain / intervertebral disc disease (IVDD) — an elongated back paired with short legs increases vulnerability to back strain if overweight or allowed repeated high-impact jumping",
      "Eyelid conformation issues (ectropion / entropion) — loose facial skin around the lower eyelids can occasionally predispose to eye irritation",
      "Hip and elbow dysplasia — developmental joint conditions monitored in medium-heavy working hounds",
      "Gastric dilatation-volvulus (bloat) — a potential emergency risk in deep-chested hounds if fed large single meals or exercised immediately after eating"
    ],

    preventiveCare: [
      "Keep the long curling ears clean and dry through regular weekly inspections.",
      "Maintain a lean, fit body condition and discourage repeated jumping from high furniture or vehicle tailgates to protect the spine.",
      "Feed two measured meals daily rather than one large meal, and keep up with routine dental care, parasite prevention, and annual veterinary exams."
    ],

    recommendedScreenings: [
      "Routine veterinary musculoskeletal and spinal checks",
      "Radiographic hip and elbow evaluations for breeding stock",
      "Veterinary eye examination"
    ],

    dentalCare:
      "Brush teeth several times a week with dog-safe toothpaste and schedule routine veterinary dental checks.",

    earCare:
      "Inspect and clean the long, curling drop ears regularly with a veterinarian-approved ear cleanser and dry the ear canal opening thoroughly.",

    skinCare:
      "Check the short coat, lip folds, and long ear margins weekly for scratches, burrs, redness, or parasites after outdoor walks."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Active rural or suburban households with a securely fenced yard",
      "Hound lovers who enjoy long sniffing walks, trailing, or scentwork",
      "Multi-dog homes, as this pack-bred hound typically gets along well with other dogs",
      "Families wanting a calm, gentle, affectionate indoor companion"
    ],

    notIdealFor: [
      "Apartment dwellers with noise-sensitive neighbors, given the breed's deep, carrying voice",
      "Owners expecting reliable off-leash recall in unfenced woods or parks",
      "Households with loose small pets like rabbits that trigger hunting instincts",
      "Sedentary owners unable to provide daily long outdoor walks"
    ]
  },

  funFacts: [
    "The 'blue' color is actually a dense black-and-white mottling that blends into a slate-blue sheen from a distance.",
    "French hunters prize the breed's deep, ringing, howling voice, which carries clearly across wooded valleys during a trail.",
    "Short legs were bred deliberately so hunters walking on foot could follow the hound's steady, sustained tracking pace through dense brambles.",
    "The Basset Bleu de Gascogne belongs to southwestern France's historic Bleu de Gascogne family alongside the Grand Bleu de Gascogne, Petit Bleu de Gascogne, and Griffon Bleu de Gascogne."
  ],

  faq: [
    {
      question: "Why is the Basset Bleu de Gascogne called 'blue'?",
      answer:
        "Its short coat is tightly mottled with black and white hairs that create a slate-blue effect from a distance, accented by black patches and tan markings."
    },
    {
      question: "How big does a Basset Bleu de Gascogne get?",
      answer:
        "Both males and females stand 34 to 38 cm at the withers and typically weigh 16 to 18 kg."
    },
    {
      question: "Can a Basset Bleu de Gascogne live in an apartment?",
      answer:
        "While calm indoors if raised with good habits and plenty of exercise, its deep carrying voice and high daily outdoor walking needs make a house with a securely fenced yard a much better fit."
    },
    {
      question: "Are Bassets Bleus de Gascogne good with other dogs and children?",
      answer:
        "Yes. Bred to hunt in packs, they are typically very sociable with other dogs and gentle, affectionate companions for families with respectful children."
    },
    {
      question: "How much grooming does a Basset Bleu de Gascogne need?",
      answer:
        "The short coat needs only weekly brushing, but the very long curling ears require regular weekly cleaning and drying to prevent infections."
    },
    {
      question: "Can a Basset Bleu de Gascogne walk off-leash?",
      answer:
        "It is safest to keep this breed on a leash or inside a securely fenced area, as its powerful tracking nose can quickly draw it away after a scent trail."
    }
  ],

  references: [
    "fci-basset-bleu-de-gascogne-official-standard",
    "fci-basset-bleu-de-gascogne-nomenclature",
    "scc-basset-bleu-de-gascogne-breed-standard",
    "club-du-bleu-de-gascogne-profile",
    "rkc-basset-bleu-de-gascogne-breed-standard",
    "rkc-basset-bleu-de-gascogne-breed-profile",
    "ukc-basset-bleu-de-gascogne-breed-standard",
    "akc-basset-bleu-de-gascogne-breed-profile",
    "natureserve-canis-lupus-familiaris",
    "the-dog-api",
    "wikimedia-basset-bleu-de-gascogne-lilly-m",
    "wikimedia-basset-bleu-de-gascogne-600-tomasz-sienicki"
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
          id: "fci-basset-bleu-de-gascogne-official-standard",
          role: "verified",
          locator: "Standard heading: Basset Bleu de Gascogne (Blue Gascony Basset)"
        },
        {
          id: "fci-basset-bleu-de-gascogne-nomenclature",
          role: "verified",
          locator: "Multilingual names (Blue Gascony Basset, Basset Azul de Gascuña, Blauer Basset der Gascogne)"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names (Blue Gascony Basset)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-bleu-de-gascogne-nomenclature",
          role: "verified",
          locator: "Group 6 Scenthounds and related breeds, Section 1.3 Small-sized Hounds, with working trial"
        },
        {
          id: "rkc-basset-bleu-de-gascogne-breed-standard",
          role: "verified",
          locator: "Hound Group"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.breed_group (Hound)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Presented in plain descriptive wording without registry codes or acronyms."
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-bleu-de-gascogne-official-standard",
          role: "verified",
          locator: "Origin: France"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin (Gascony, France)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "verified",
          locator: "Historique (Gascogne et Béarn, midi de la France)"
        },
        {
          id: "rkc-basset-bleu-de-gascogne-breed-profile",
          role: "verified",
          locator: "About this breed (South West of France)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "overview.summary": {
      reliability: "official_standard",
      sources: [
        {
          id: "rkc-basset-bleu-de-gascogne-breed-standard",
          role: "verified",
          locator: "General Appearance and Characteristics"
        },
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "verified",
          locator: "Description générale and Comportement"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "overview.description": {
      reliability: "official_standard",
      sources: [
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "verified",
          locator: "Description générale (slate-blue mottled coat, low-set curling ears, dark eyes, slightly arched muzzle)"
        },
        {
          id: "rkc-basset-bleu-de-gascogne-breed-standard",
          role: "verified",
          locator: "General Appearance and Characteristics"
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
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "verified",
          locator: "Historique (Gascony and Béarn, Gaston Phébus)"
        },
        {
          id: "rkc-basset-bleu-de-gascogne-breed-profile",
          role: "verified",
          locator: "About this breed (short-legged basset designed to be followed on foot)"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.history (Grand Bleu de Gascogne descent, Alain Bourbon early 20th-century revival)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "overview.originalPurpose": {
      reliability: "reliable_source",
      sources: [
        {
          id: "club-du-bleu-de-gascogne-profile",
          role: "verified",
          locator: "Chasse à tir, vénerie du lapin, pack trailing"
        },
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "verified",
          locator: "Description générale (chasse à tir)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "overview.currentRoles": {
      reliability: "reliable_source",
      sources: [
        {
          id: "club-du-bleu-de-gascogne-profile",
          role: "verified",
          locator: "Hunting and pack trailing"
        },
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "verified",
          locator: "Comportement and utility tracking"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.sizeCategory": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-basset-bleu-de-gascogne-breed-profile",
          role: "verified",
          locator: "Breed characteristics: Size Medium"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.height.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-bleu-de-gascogne-official-standard",
          role: "verified",
          locator: "Size: Height at the withers, males and females 34-38 cm"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.height.metric (33-38 cm)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Kept official FCI Standard No. 35 height (34-38 cm); The Dog API lists a 1 cm lower minimum (33-38 cm)."
    },

    "physical.height.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-bleu-de-gascogne-official-standard",
          role: "verified",
          locator: "Size: Height at the withers, males and females 34-38 cm"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.height.metric (33-38 cm)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Kept official FCI Standard No. 35 height (34-38 cm); The Dog API lists a 1 cm lower minimum (33-38 cm)."
    },

    "physical.weight.male.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (16-18 kg)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "FCI Standard No. 35 does not publish a numerical weight. Used The Dog API verified metric range (16-18 kg), which is a single breed-wide range."
    },

    "physical.weight.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (16-18 kg)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "FCI Standard No. 35 does not publish a numerical weight. Used The Dog API verified metric range (16-18 kg), which is a single breed-wide range."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span (10-14 years)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "verified",
          locator: "Description générale (poil court, gros et serré)"
        },
        {
          id: "fci-basset-bleu-de-gascogne-official-standard",
          role: "verified",
          locator: "Coat (short, thick, dense; fine coat is a fault)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "verified",
          locator: "Description générale (poil court)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-bleu-de-gascogne-official-standard",
          role: "verified",
          locator: "Colour (black-and-white mottled slate-blue with black patches and tan markings; any other coat is disqualifying)"
        },
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "verified",
          locator: "Description générale (robe à mouchetures blanches et noires aspect bleu ardoisé)"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "GET /breeds/{id}/colours"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Discarded non-breed species-wide colours from The Dog API endpoint because FCI Standard No. 35 disqualifies any coat other than slate-blue mottled with black patches and tan points."
    },

    "physical.sheddingLevel": {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "cited",
          locator: "Short, dense coat maintenance"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "physical.droolingLevel": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-basset-bleu-de-gascogne-official-standard",
          role: "cited",
          locator: "Hound head and lip conformation"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-bleu-de-gascogne-official-standard",
          role: "verified",
          locator: "Head, Ears, Coat, Colour, and Size"
        },
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "verified",
          locator: "Description générale"
        },
        {
          id: "rkc-basset-bleu-de-gascogne-breed-standard",
          role: "verified",
          locator: "General Appearance and Characteristics"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "verified",
          locator: "Comportement (calme, affectueux, intelligent, sensible)"
        },
        {
          id: "club-du-bleu-de-gascogne-profile",
          role: "verified",
          locator: "Psychique (très chasseur, discipliné, chasse bien en meute)"
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
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "cited",
          locator: "Comportement"
        },
        {
          id: "club-du-bleu-de-gascogne-profile",
          role: "cited",
          locator: "Voix et comportement en meute"
        }
      ],
      verifiedOn: null,
      note: "Editorial 1-5 scale estimates informed by SCC and parent club behavioral profiles."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-basset-bleu-de-gascogne-breed-profile",
          role: "verified",
          locator: "Breed characteristics: Exercise More than 2 hours per day"
        },
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "verified",
          locator: "Comportement (requires ample daily exercise)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "general_guidance",
      sources: [
        {
          id: "rkc-basset-bleu-de-gascogne-breed-profile",
          role: "cited",
          locator: "Exercise guidance"
        }
      ],
      verifiedOn: null,
      note: "General daily exercise range for an active tracking hound."
    },

    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [
        {
          id: "club-du-bleu-de-gascogne-profile",
          role: "cited",
          locator: "Scent trailing and pack work"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.grooming.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "verified",
          locator: "Alimentation & Santé (entretien aisé)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.grooming.brushing": {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "cited",
          locator: "Short coat care"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.grooming.bathing": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: null
    },

    "care.grooming.notes": {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "cited",
          locator: "Long curling ears and short coat care"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.training.difficulty": {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "cited",
          locator: "Comportement (intelligent and sensitive)"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.training.tips": {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "cited",
          locator: "Comportement et éducation"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.training.socialization": {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "cited",
          locator: "Vivre en ville (early habits)"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "club-du-bleu-de-gascogne-profile",
          role: "cited",
          locator: "Voix sonore et grave (deep carrying voice)"
        },
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "cited",
          locator: "Vivre en ville (can adapt if started young and well exercised, though voice and energy suit houses better)"
        }
      ],
      verifiedOn: null,
      note: "Editorial assessment that deep carrying voice and strong daily exercise needs favor a house with a yard."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "cited",
          locator: "Comportement"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "cited",
          locator: "Origin in southwestern France"
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
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "cited",
          locator: "Alimentation & Santé"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.overview": {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "cited",
          locator: "Alimentation & Santé (doté d'une bonne santé)"
        }
      ],
      verifiedOn: null,
      note: "General veterinary awareness for long-backed, pendulous-eared hounds; no peer-reviewed breed-specific causal mutations are established."
    },

    "health.commonConditions": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-basset-bleu-de-gascogne-official-standard",
          role: "cited",
          locator: "Conformation (long curling ears, low-slung body)"
        }
      ],
      verifiedOn: null,
      note: "Reflects general conformational risks of basset-type scenthounds rather than breed-specific epidemiological prevalence."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "general_guidance",
      sources: [],
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
      sources: [
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "cited",
          locator: "Long curling drop ears"
        }
      ],
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
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "cited",
          locator: "Comportement et vivre en ville"
        },
        {
          id: "club-du-bleu-de-gascogne-profile",
          role: "cited",
          locator: "Voix et chasse en meute"
        }
      ],
      verifiedOn: null,
      note: "Editorial household suitability assessment based on vocal baying, scent drive, and pack sociability."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "verified",
          locator: "Description générale (optical slate-blue mottling)"
        },
        {
          id: "club-du-bleu-de-gascogne-profile",
          role: "verified",
          locator: "Voix (hurleur, deep resonant voice) and steady tracking pace"
        },
        {
          id: "rkc-basset-bleu-de-gascogne-breed-profile",
          role: "verified",
          locator: "About this breed (short legs bred to be followed on foot)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-basset-bleu-de-gascogne-official-standard",
          role: "verified",
          locator: "Size (34-38 cm) and Colour"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "Weight (16-18 kg) and Lifespan (10-14 years)"
        },
        {
          id: "scc-basset-bleu-de-gascogne-breed-standard",
          role: "verified",
          locator: "Comportement, Vivre en ville, and Grooming"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    }
  },

  updatedOn: "2026-11-21"
};
