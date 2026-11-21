import type { Breed } from "../schema/breed.types";

export const whippet: Breed = {
  slug: "whippet",
  name: "Whippet",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Snap Dog",
    "English Whippet",
    "Lévrier Whippet"
  ],

  group: "Short-Haired Sighthound (Sighthound)",

  origin: {
    country: "Great Britain",
    region:
      "Northern England, Wales, London, and the Midlands (especially 19th-century mining and mill districts)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Whippet_2018_19.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Whippet_2018_19.jpg",
      title: "Whippet 2018 19.jpg",
      description:
        "An adult fawn brindle Whippet standing in profile outdoors.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2018-09-08",
      uploadedOn: "2018-09-17",
      width: 1544,
      height: 1432,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Whippet_2018_19.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Whippet_2018_14.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Whippet_2018_14.jpg",
      title: "Whippet 2018 14.jpg",
      description: "An adult fawn Whippet standing outdoors.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2018-09-08",
      uploadedOn: "2018-09-17",
      width: 1634,
      height: 1254,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Whippet_2018_14.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    }
  ],

  overview: {
    summary:
      "A sleek, medium-sized British sighthound bred for fast sprinting and agile coursing, known for its deep chest, arched loin, quiet indoor manners, and warm attachment to people.",

    description:
      "The Whippet combines lean muscular power with clean, graceful lines built for high-speed pursuit. Reaching bursts of up to 35 mph, this medium-sized sighthound has a deep chest for lung capacity, a smoothly arched loin, a tucked-up belly, and long, slender legs. Its head is long and lean with bright oval eyes, small rose-shaped ears folded neatly back, and a clean scissor bite. The short, fine coat lies close to the skin and appears in nearly every solid, brindle, or patched color pattern except merle. Indoors, Whippets are remarkably calm, quiet, and fond of soft bedding, yet outdoors they switch instantly into keen, fast-moving sprinters whenever motion catches their eye.",

    history:
      "Genetic research links the Whippet closely to the Greyhound, tracing back to ancient Celtic coursing hounds. During the 19th century, working families in northern England, Wales, London, and the Midlands developed this smaller, more economical runner for hunting rabbits and small vermin as well as weekend track racing. Breeders refined smaller Greyhounds with terrier lines to add quickness and grit, earning the dog nicknames such as 'Snap Dog' and 'the poor man's racehorse.' English textile mill workers later brought Whippets to Massachusetts, helping establish the breed in North America. Over time, the Whippet grew from a working-class racing and coursing dog into a widely loved companion and versatile canine sports competitor.",

    originalPurpose:
      "Sight-hunting rabbits and small game, plus competing in straight-track sprint racing.",

    currentRoles: [
      "Affectionate, low-key family companion",
      "Lure coursing and straight-track racing competitor",
      "Versatile participant in agility, flyball, dock diving, and obedience",
      "Gentle therapy and visiting dog"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 47,
        max: 51
      },
      female: {
        min: 44,
        max: 47
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 11,
        max: 18
      },
      female: {
        min: 11,
        max: 18
      }
    },

    lifespanYears: {
      min: 12,
      max: 15
    },

    coatType:
      "Fine, short, smooth, and close-fitting single coat with no feathering.",

    coatLength: "Short",

    coatColors: [
      "Black",
      "Blue",
      "Brindle",
      "Cream",
      "Fawn",
      "Red",
      "Silver Brindle",
      "White",
      "Particolor",
      "Fawn Brindle",
      "Blue Brindle",
      "Red Brindle",
      "Black and White",
      "Fawn and White",
      "Red and White",
      "Blue and White",
      "Brindle and White"
    ],

    sheddingLevel: "Low",
    droolingLevel: "Low",

    distinctiveFeatures: [
      "Graceful arch over a strong, flexible loin without a humped back",
      "Deep brisket paired with a sharp abdominal tuck",
      "Small, fine rose-shaped ears folded neatly along the neck",
      "Long, tapering tail with no feathering, carried in a gentle curve below back level",
      "Lean athletic frame where two to four vertebrae remain subtly visible in fit adults",
      "Fine, tight coat permitted in any color or pattern except merle"
    ]
  },

  temperament: {
    traits: [
      "Gentle",
      "Affectionate",
      "Calm indoors",
      "Playful",
      "Quiet",
      "Intelligent",
      "Sensitive",
      "Alert"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 2,
      independence: 3,
      trainability: 4,
      barking: 1,
      energy: 4
    }
  },

  care: {
    exercise: {
      level: "Moderate",
      minutesPerDay: {
        min: 45,
        max: 60
      },
      activities: [
        "Off-leash sprinting in a tall, securely fenced enclosure",
        "Brisk daily leash walks",
        "Lure coursing and amateur straight-track racing",
        "Agility, flyball, and dock diving",
        "Short games of fetch and scent play"
      ]
    },

    grooming: {
      level: "Low",
      brushing: "Weekly rubdown with a soft bristle brush or rubber grooming mitt",
      bathing: "Occasional baths as needed using a mild, skin-friendly dog shampoo",
      notes: [
        "Trim nails regularly so long claws do not catch or injure toes during high-speed sprints.",
        "Inspect thin skin after outdoor runs for small scrapes, thorn pricks, or tears.",
        "Keep a warm coat or sweater handy in cool, windy, or wet weather because the fine single coat offers minimal insulation.",
        "Clean rose-folded ears gently when needed and brush teeth several times a week."
      ]
    },

    training: {
      difficulty: "Easy",
      tips: [
        "Use calm, reward-based training with soft treats and praise; harsh corrections quickly make this sensitive breed shut down.",
        "Keep sessions brief, upbeat, and varied so the dog stays engaged.",
        "Build a dependable recall from puppyhood, while remembering that strong prey drive means keeping the dog leashed outside securely fenced spaces.",
        "Teach polite greetings and calm impulse control around small animals early on."
      ],
      socialization:
        "Introduce puppies gradually to everyday sounds, unfamiliar people, calm dogs, and varied surfaces so their natural reserve develops into steady confidence."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: ["Temperate", "Warm"],
      aloneTimeTolerance: "Moderate"
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced diet rich in quality animal protein and healthy fats tailored to an athletic medium-sized sighthound.",

    feedingFrequency: {
      puppy: "Three to four small meals daily until about six months old, then two to three meals",
      adult: "Two measured meals per day",
      senior: "Two smaller, easily digestible meals per day adjusted for lower activity"
    },

    guidelines:
      "Feed measured portions to keep a trim sighthound silhouette rather than a heavy waist. A healthy adult Whippet should not look emaciated, yet two to four vertebrae should remain subtly visible and the hipbones should not be buried in fat. Avoid vigorous sprinting right before or right after a full meal.",

    considerations: [
      "High metabolism in active or racing dogs may require slightly higher calorie density than sedentary pets.",
      "Maintain steady lean muscle without excess weight that strains slender joints and limbs.",
      "Always provide fresh drinking water, especially after sprint sessions."
    ],

    note:
      "Confirm exact daily portions and life-stage diets with a veterinarian, especially for growing puppies or active sport competitors."
  },

  health: {
    overview:
      "Whippets are generally sturdy, long-lived sighthounds with a typical lifespan of 12 to 15 years. Two conditions have documented genetic links in the breed: a well-characterized myostatin gene deletion affecting muscle mass and racing speed, and mitral valve degeneration, where research has linked disease severity to a region on chromosome 15. Like other lean sighthounds, Whippets also require informed veterinary care regarding anesthetic protocols, athletic heart measurements, thin skin, and cold sensitivity.",

    commonConditions: [
      "Mitral valve degeneration (MVD) — age-related heart valve disease; genome-wide research in Whippets links disease severity to a genetic locus on chromosome 15",
      "Myostatin (MSTN) gene mutation ('bully' Whippet syndrome) — established 2-base-pair deletion causing extra muscle and faster sprint times in single-copy carriers and extreme muscular hypertrophy with cramping in double-copy dogs",
      "Anesthetic sensitivity — low body fat and sighthound liver metabolism increase sensitivity to certain older barbiturate anesthetics and heat loss under sedation",
      "Thin-skin lacerations and toe injuries — minimal body fat and fine coat leave skin prone to small tears during rough play, while high-speed turns can sprain toes",
      "Inherited eye disorders — cataracts and retinal degeneration monitored across breeding lines",
      "Congenital deafness — unilateral or bilateral hearing loss reported in some lines",
      "Cold sensitivity and hypothermia — fine single coat and minimal body fat offer little insulation in cold or wet weather"
    ],

    preventiveCare: [
      "Schedule annual wellness checkups that include careful heart auscultation, especially as the dog enters middle and senior years.",
      "Work with a veterinarian familiar with sighthound anesthesia and normal athletic heart size when planning surgery or diagnostic imaging.",
      "Provide soft, supportive bedding to protect bony elbows and hips from pressure calluses.",
      "Use a fitted coat in chilly weather and supervise off-leash runs only inside tall, securely enclosed areas."
    ],

    recommendedScreenings: [
      "Cardiac evaluation by a veterinary cardiologist",
      "Ophthalmologist eye examination",
      "Hearing evaluation (BAER test)",
      "Myostatin (MSTN) DNA test for breeding dogs",
      "Thyroid panel"
    ],

    dentalCare:
      "Brush teeth several times a week with dog-safe toothpaste and schedule routine veterinary dental checks to keep tartar and gum inflammation under control.",

    earCare:
      "Check the small folded rose ears weekly for wax buildup, redness, or odor, and wipe gently with a vet-approved ear cleaner when needed.",

    skinCare:
      "Check the fine coat and thin skin after outdoor runs for small scratches, burrs, or tears, and protect against sunburn or frostbite during weather extremes."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Apartment or house dwellers who want a quiet, clean, low-odor indoor companion",
      "People who can offer daily brisk walks plus safe, fenced sprint sessions",
      "Gentle families with respectful children who appreciate an affectionate couch partner",
      "Dog sport enthusiasts interested in lure coursing, agility, flyball, or dock diving"
    ],

    notIdealFor: [
      "Households wanting an off-leash hiking companion in unfenced areas with wildlife",
      "Homes with loose small pets such as rabbits, hamsters, or outdoor cats that trigger chase instincts",
      "Owners seeking a loud watchdog or outdoor kennel dog",
      "Handlers who prefer heavy-handed or harsh training methods"
    ]
  },

  funFacts: [
    "Whippets can accelerate to speeds of up to 35 mph using a flexible double-suspension gallop.",
    "Because working-class miners and mill workers in 19th-century England raced them when full-sized Greyhounds were too expensive to keep, Whippets earned the nickname 'the poor man's racehorse.'",
    "English textile mill workers brought some of the first Whippets to Massachusetts, helping introduce the breed to North America.",
    "A single-copy variation in the myostatin (MSTN) gene gives carrier Whippets measurably greater muscle mass and faster racing times, while two copies produce the heavily muscled 'bully' Whippet.",
    "Despite their track speed, Whippets rarely bark and spend much of their indoor time curled up under blankets or on soft cushions."
  ],

  faq: [
    {
      question: "Are Whippets good apartment dogs?",
      answer:
        "Yes. Whippets are quiet, clean, rarely bark, and love resting indoors, making them well suited to apartment living as long as they receive daily walks and regular safe opportunities to run."
    },
    {
      question: "Can a Whippet be trusted off-leash in an open park?",
      answer:
        "No. Whippets have a powerful instinct to chase fast-moving objects and can reach up to 35 mph in seconds, so they should only run off-leash inside a tall, securely fenced enclosure."
    },
    {
      question: "Do Whippets need coats in cold weather?",
      answer:
        "Yes. Their short, fine single coat and very low body fat provide little warmth, so a well-fitted dog coat or sweater helps keep them comfortable during cool, windy, or rainy walks."
    },
    {
      question: "Are Whippets safe around cats and small pets?",
      answer:
        "Some Whippets learn to live peacefully with indoor cats they are raised alongside, but their strong sighthound chase drive makes outdoor cats, rabbits, and other small animals risky without close supervision."
    },
    {
      question: "How much grooming does a Whippet need?",
      answer:
        "Very little. A weekly rubdown with a soft brush or rubber grooming mitt, occasional baths, regular nail trims, and routine dental care are usually enough."
    }
  ],

  references: [
    "fci-whippet-official-standard",
    "fci-whippet-nomenclature",
    "the-kennel-club-whippet-breed-standard",
    "rkc-whippet-breed-profile",
    "akc-whippet-breed-standard",
    "akc-whippet-breed-profile",
    "american-whippet-club-health",
    "ofa-whippet-chic-requirements",
    "whippet-myostatin-mutation-study-2007",
    "pubmed-whippet-mvd-gwas-2015",
    "natureserve-canis-lupus-familiaris",
    "the-dog-api",
    "wikimedia-whippet-2018-19-canarian",
    "wikimedia-whippet-2018-14-canarian"
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
          id: "fci-whippet-nomenclature",
          role: "verified",
          locator: "Multilingual nomenclature (Lévrier Whippet)"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names (Snap Dog)"
        },
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "History section (Snap Dog / Poor Man's Racehorse)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "Classification: Group 10 Sighthounds, Section 3 Short-haired Sighthounds"
        },
        {
          id: "the-kennel-club-whippet-breed-standard",
          role: "verified",
          locator: "Hound Group classification"
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
          id: "fci-whippet-nomenclature",
          role: "verified",
          locator: "Country of origin: Great Britain"
        },
        {
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "Origin: Great Britain"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin (England)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Official FCI standard lists Great Britain; The Dog API lists England."
    },

    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-whippet-breed-profile",
          role: "verified",
          locator: "History section (mining areas of the North, Wales, London, and the Midlands)"
        },
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "History section (northern England)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "overview.summary": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "General Appearance and Behaviour/Temperament"
        },
        {
          id: "akc-whippet-breed-profile",
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
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "General Appearance, Head, Body, Coat, and Colour"
        },
        {
          id: "the-kennel-club-whippet-breed-standard",
          role: "verified",
          locator: "General Appearance, Head, Body, and Coat"
        },
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "About the Breed (35 mph speed and indoor temperament)"
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
          id: "rkc-whippet-breed-profile",
          role: "verified",
          locator: "History section (genetic link to Greyhound / Celtic Vertragus; 19th-century mining districts)"
        },
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "History section (Poor Man's Racehorse; English mill operatives in Massachusetts)"
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
          id: "rkc-whippet-breed-profile",
          role: "verified",
          locator: "History section (vermin, small game hunting, and racing)"
        },
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "History section (rabbit hunting and racing)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "overview.currentRoles": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "About the Breed and Exercise sections"
        },
        {
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "Utilization (Racing dog)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.sizeCategory": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "Size (44-51 cm)"
        },
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "About the Breed (medium-sized sighthound)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.height.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "Size: Dogs 47-51 cm"
        },
        {
          id: "the-kennel-club-whippet-breed-standard",
          role: "verified",
          locator: "Size: Dogs 47-51 cm"
        },
        {
          id: "akc-whippet-breed-standard",
          role: "verified",
          locator: "Size: Dogs 19-22 inches"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.height.metric (48-56 cm)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Kept official FCI/Royal Kennel Club country-of-origin height (47-51 cm for males). The Dog API lists a taller range (48-56 cm) reflecting the AKC standard (19-22 in)."
    },

    "physical.height.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "Size: Bitches 44-47 cm"
        },
        {
          id: "the-kennel-club-whippet-breed-standard",
          role: "verified",
          locator: "Size: Bitches 44-47 cm"
        },
        {
          id: "akc-whippet-breed-standard",
          role: "verified",
          locator: "Size: Bitches 18-21 inches"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.height.metric (46-53 cm)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Kept official FCI/Royal Kennel Club country-of-origin height (44-47 cm for females). The Dog API lists a taller range (46-53 cm) reflecting the AKC standard (18-21 in)."
    },

    "physical.weight.male.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (11-18 kg)"
        },
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Breed profile weight (25-40 pounds)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "FCI Standard No. 162 does not publish a numerical weight. Used The Dog API verified metric range (11-18 kg), which aligns with the AKC breed profile (25-40 lb); The Dog API gives one breed-wide range without separating sexes."
    },

    "physical.weight.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (11-18 kg)"
        },
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Breed profile weight (25-40 pounds)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "FCI Standard No. 162 does not publish a numerical weight. Used The Dog API verified metric range (11-18 kg), which aligns with the AKC breed profile (25-40 lb); The Dog API gives one breed-wide range without separating sexes."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12-15 years"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span (12-15 years)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "Coat: Fine, short, close"
        },
        {
          id: "the-kennel-club-whippet-breed-standard",
          role: "verified",
          locator: "Coat: Fine, short, close in texture"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "Coat: Short"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "Colour: Any colour or mixture of colours; merle unacceptable"
        },
        {
          id: "rkc-whippet-breed-profile",
          role: "verified",
          locator: "Colours section"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "GET /breeds/{id}/colours"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Merle was listed in The Dog API colour endpoint but is explicitly excluded because FCI Standard No. 162 declares merle unacceptable."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Grooming section (minimal shedding)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Breed traits (low drooling)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "Body, Ears, Tail, Coat, and Colour"
        },
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Nutrition/Body condition (two to four visible vertebrae)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "Behaviour/Temperament (gentle, affectionate, even disposition)"
        },
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "About the Breed (calm, affectionate, playful, quiet)"
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

    "temperament.scores.affection": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Temperament traits"
        }
      ],
      verifiedOn: null,
      note: "Numeric 1-5 scale editorial estimate informed by kennel club temperament profiles."
    },

    "temperament.scores.withChildren": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Temperament traits"
        }
      ],
      verifiedOn: null,
      note: "Numeric 1-5 scale editorial estimate informed by kennel club temperament profiles."
    },

    "temperament.scores.withDogs": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Temperament traits"
        }
      ],
      verifiedOn: null,
      note: "Numeric 1-5 scale editorial estimate informed by kennel club temperament profiles."
    },

    "temperament.scores.withStrangers": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Temperament traits"
        }
      ],
      verifiedOn: null,
      note: "Numeric 1-5 scale editorial estimate informed by kennel club temperament profiles."
    },

    "temperament.scores.protectiveness": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Temperament traits"
        }
      ],
      verifiedOn: null,
      note: "Numeric 1-5 scale editorial estimate informed by kennel club temperament profiles."
    },

    "temperament.scores.independence": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Temperament traits"
        }
      ],
      verifiedOn: null,
      note: "Numeric 1-5 scale editorial estimate informed by kennel club temperament profiles."
    },

    "temperament.scores.trainability": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Training section"
        }
      ],
      verifiedOn: null,
      note: "Numeric 1-5 scale editorial estimate informed by kennel club training guidance."
    },

    "temperament.scores.barking": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "About the Breed (rarely barks)"
        }
      ],
      verifiedOn: null,
      note: "Numeric 1-5 scale editorial estimate informed by kennel club profile noting the breed rarely barks."
    },

    "temperament.scores.energy": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Exercise section"
        }
      ],
      verifiedOn: null,
      note: "Numeric 1-5 scale editorial estimate reflecting high outdoor sprint drive balanced by calm indoor habits."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Exercise section"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Exercise section"
        }
      ],
      verifiedOn: null,
      note: "General daily exercise range for healthy adult Whippets combining walks and fenced sprints."
    },

    "care.exercise.activities": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Exercise section (fenced sprinting, lure coursing, agility, flyball, dock diving)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.grooming.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-whippet-breed-profile",
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
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Grooming section"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.grooming.bathing": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Grooming section"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.grooming.notes": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-whippet-breed-profile",
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
          id: "akc-whippet-breed-profile",
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
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Training section (positive reinforcement, leash safety outside fenced areas)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.training.socialization": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Training section"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "About the Breed (well suited for apartment living when exercised)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Exercise section (fenced yard)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Coat and cold sensitivity guidance"
        }
      ],
      verifiedOn: null,
      note: "Fine single coat and low body fat make temperate and warm climates more comfortable without winter gear."
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Temperament guidance"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "nutrition.dietType": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Nutrition section"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "nutrition.feedingFrequency.puppy": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Standard veterinary puppy feeding schedule."
    },

    "nutrition.feedingFrequency.adult": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Standard veterinary adult feeding schedule."
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Standard veterinary senior feeding schedule."
    },

    "nutrition.guidelines": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Nutrition section (two to four visible vertebrae; hipbones not sunk in fat)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "nutrition.considerations": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Nutrition section"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "nutrition.note": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: null
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-whippet-club-health",
          role: "verified",
          locator: "Health and Genetics overview"
        },
        {
          id: "whippet-myostatin-mutation-study-2007",
          role: "verified",
          locator: "Abstract and Results (MSTN 2-bp deletion)"
        },
        {
          id: "pubmed-whippet-mvd-gwas-2015",
          role: "verified",
          locator: "Abstract (CFA15 locus associated with MVD severity)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pubmed-whippet-mvd-gwas-2015",
          role: "verified",
          locator: "Mitral valve degeneration GWAS in 138 Whippets"
        },
        {
          id: "whippet-myostatin-mutation-study-2007",
          role: "verified",
          locator: "Myostatin (MSTN) 2-bp deletion in exon 3"
        },
        {
          id: "american-whippet-club-health",
          role: "verified",
          locator: "Anesthesia sensitivity, cardiac health, eye health, and deafness"
        },
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Health section (cardiac, eye, BAER hearing, cold/skin care)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Distinguishes peer-reviewed genetic findings (MSTN mutation, MVD chromosome 15 association) from sighthound physiological traits and monitored breed risks."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-whippet-club-health",
          role: "cited",
          locator: "Health and Genetics"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Recommended Health Tests from the National Breed Club (Cardiac Exam, Ophthalmologist Evaluation, BAER Testing)"
        },
        {
          id: "ofa-whippet-chic-requirements",
          role: "verified",
          locator: "Whippet CHIC health testing requirements (eye, cardiac, thyroid)"
        },
        {
          id: "american-whippet-club-health",
          role: "verified",
          locator: "Pre-breeding health screening and MSTN testing"
        }
      ],
      verifiedOn: "2026-11-21",
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
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Grooming and care guidance"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "suitability.firstTimeOwners": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "About the Breed"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "suitability.familiesWithChildren": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Temperament traits"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "suitability.seniorOwners": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Temperament and exercise guidance"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "suitability.activeOwners": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Exercise section"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "suitability.apartmentLiving": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "About the Breed (apartment suitability)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "suitability.idealFor": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "About the Breed and Exercise"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "suitability.notIdealFor": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Training and Exercise (prey drive, leash requirement)"
        }
      ],
      verifiedOn: null,
      note: null
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "About the Breed and History (35 mph, Poor Man's Racehorse, English mill workers in Massachusetts, rarely barks)"
        },
        {
          id: "whippet-myostatin-mutation-study-2007",
          role: "verified",
          locator: "Abstract (MSTN heterozygote speed enhancement and homozygote 'bully' phenotype)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "About the Breed, Exercise, Grooming, and Training sections"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    }
  },

  updatedOn: "2026-11-21"
};