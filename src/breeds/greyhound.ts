import type { Breed } from "../schema/breed.types";

export const greyhound: Breed = {
  slug: "greyhound",
  name: "Greyhound",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "English Greyhound",
    "Lévrier Anglais"
  ],

  group: "Short-haired sighthound",

  origin: {
    country: "Great Britain",
    region:
      "England and Scotland, with ancient sighthound lineage traced to North Africa and the Middle East"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Greyhound_brindle_standing.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Greyhound_brindle_standing.jpg",
      title: "Greyhound brindle standing.jpg",
      description:
        "A full-body profile of an adult brindle Greyhound standing outdoors.",
      creator: "Scott Feldstein",
      uploader: "Pharaoh Hound",
      capturedOn: "2005-10-09",
      uploadedOn: "2007-02-03",
      width: 2306,
      height: 1700,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Scott Feldstein, Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:Greyhound_brindle_standing.jpg. License: https://creativecommons.org/licenses/by/2.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Greyhound_Close-up.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Greyhound_Close-up.jpg",
      title: "Greyhound Close-up.jpg",
      description:
        "A head-and-neck close-up of a brindle female Greyhound looking alertly to the side.",
      creator: "Vincent Eisfeld",
      uploader: "Vincent Eisfeld",
      capturedOn: "2015-06-18",
      uploadedOn: "2015-06-18",
      width: 3688,
      height: 3316,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "© Vincent Eisfeld / vincent-eisfeld.de / CC BY-SA 4.0, Wikimedia Commons. Source: https://commons.wikimedia.org/wiki/File:Greyhound_Close-up.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/.",
      restrictions:
        "CC BY-SA 4.0 requires credit in the creator's requested format (© Vincent Eisfeld / vincent-eisfeld.de / CC BY-SA 4.0) and ShareAlike terms if the image is adapted.",
      metadataCheckedOn: "2026-11-26"
    }
  ],

  overview: {
    summary:
      "A tall, sleek British sighthound famous for unmatched sprinting speed outdoors and a remarkably quiet, easygoing nature indoors.",

    description:
      "Built for explosive acceleration rather than heavy endurance, the Greyhound pairs a long, finely muscled frame with a deep ribcage that leaves generous room for heart and lungs. A slightly arched loin, sweeping hindquarters, and a long, graceful neck give the breed its unmistakable curved silhouette. The fine, close-lying coat hugs the body in many colors and patterns, while dark, oval eyes and small folded rose ears lend an attentive, gentle expression. Away from open spaces, most Greyhounds trade their athletic drive for long, peaceful naps on the softest surface they can find.",

    history:
      "Slender, long-legged sighthounds of this type appear in ancient art from North Africa and the Mediterranean, including carvings in the Fourth Dynasty Egyptian Tomb of Amten dating to roughly 2900–2751 BCE. Over centuries, these swift hounds spread across Europe and were carefully refined in Great Britain for open-field coursing, especially pursuing hare by sight. Historically prized by British nobility and landed estates, the breed later became closely tied to competitive track racing during the nineteenth and twentieth centuries. Today, both purpose-bred show or lure-coursing lines and retired racing dogs are widely cherished as calm household companions.",

    originalPurpose:
      "High-speed open-field coursing of hare and other swift game by sight",

    currentRoles: [
      "Household companion",
      "Lure coursing and amateur sighthound sports",
      "Therapy dog",
      "Conformation participant"
    ]
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "cm",
      male: {
        min: 71,
        max: 76
      },
      female: {
        min: 68,
        max: 71
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 65,
        max: 70
      },
      female: {
        min: 60,
        max: 65
      }
    },

    lifespanYears: {
      min: 10,
      max: 13
    },

    coatType:
      "Fine, smooth, close-lying single coat with firm texture and minimal natural insulation",

    coatLength: "Short",

    coatColors: [
      "Black",
      "White",
      "Red",
      "Blue",
      "Fallow",
      "Fawn",
      "Brindle",
      "Broken with white (parti-color)"
    ],

    sheddingLevel:
      "Low to moderate; the short single coat sheds lightly throughout the year without heavy seasonal matting",

    droolingLevel:
      "Low; tight lips and clean jaws keep drooling minimal",

    distinctiveFeatures: [
      "Tall, streamlined outline with a deep, spacious chest and pronounced abdominal tuck",
      "Long, moderately wide head with a flat skull, gentle stop, and strong, clean-cut jaws",
      "Complete scissor bite with sturdy teeth",
      "Bright, dark, oval eyes set obliquely with an alert, calm expression",
      "Small, thin rose-shaped ears folded neatly backward at rest",
      "Long, muscular, gracefully arched neck blending smoothly into well-sloped shoulders",
      "Broad, heavily muscled thighs and second thighs built for rapid thrust",
      "Long, low-set tail tapering smoothly to a fine tip with a slight upward curve",
      "Compact, well-knuckled hare-like feet with tough pads and strong claws"
    ]
  },

  temperament: {
    traits: [
      "Calm, quiet, and relaxed inside the home",
      "Gentle and affectionate with trusted family members",
      "Independent and somewhat reserved around unfamiliar people",
      "Strongly driven to chase fast-moving small animals by sight",
      "Sensitive to harsh voices, sudden commotion, and rough handling",
      "Generally polite and easygoing with other medium-to-large dogs",
      "Minimal territorial or watchdog barking"
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 1,
      independence: 4,
      trainability: 3,
      barking: 1,
      energy: 3
    }
  },

  care: {
    exercise: {
      level:
        "Moderate; built for brief, high-speed sprints rather than long endurance outings, followed by extended indoor rest",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Brisk daily leashed walks around quiet neighborhoods or parks",
        "Brief off-leash sprints inside a tall, securely enclosed field or yard",
        "Supervised lure coursing or straight-line sprint events",
        "Short, upbeat obedience or enrichment games indoors"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Rub down once a week with a rubber hound glove, damp cloth, or soft bristle brush to lift loose hair and keep the coat glossy.",

      bathing:
        "Bathe only when noticeably dirty using a gentle, moisturizing dog shampoo to protect the thin skin.",

      notes: [
        "Check the delicate skin after outdoor runs for small nicks or scrapes, as low body fat leaves little cushioning.",
        "Inspect the folded rose ears weekly for wax buildup, moisture, or irritation.",
        "Trim nails regularly so toes stay compact and comfortable during sprints.",
        "Brush teeth daily if possible, or several times each week, to slow tartar buildup.",
        "Use a snug, warm coat in cold or wet weather because the fine single coat provides very little insulation."
      ]
    },

    training: {
      difficulty:
        "Moderate; smart and willing to cooperate in calm settings, yet independent and easily distracted by movement outdoors",

      tips: [
        "Keep lessons brief, cheerful, and reward-based using tasty treats and gentle praise.",
        "Avoid raised voices or forceful corrections, which quickly cause this sensitive breed to shut down.",
        "Always use a leash in unfenced areas; once a Greyhound locks onto a fleeing squirrel or rabbit, reliable recall cannot be counted on.",
        "Fit a wide martingale collar or a secure sighthound harness so the narrow head cannot slip free.",
        "Introduce unfamiliar household features like slick floors, stairs, and glass doors patiently, especially with retired racing dogs."
      ],

      socialization:
        "Expose puppies and newly adopted adults gradually to varied people, gentle children, everyday noises, and other dogs. Always supervise closely around cats or very small pets until individual prey drive is clearly understood."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Comfortable in mild and warm climates when shade and water are available",
        "Needs a fitted winter jacket in cool or freezing temperatures due to thin skin and low body fat",
        "Strictly an indoor dog; unsuitable for outdoor kenneling"
      ],

      aloneTimeTolerance:
        "Moderate; many adults rest quietly while owners are out, though gradual routine building helps prevent separation distress."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced diet formulated for large active dogs, providing somewhat higher quality protein and calorie density than many less athletic breeds",

    feedingFrequency: {
      puppy:
        "Three to four measured meals per day during early growth, tapering to two meals as maturity approaches.",
      adult:
        "Two measured meals per day to keep digestion steady and reduce stomach distension.",
      senior:
        "Two portion-controlled meals daily adjusted for lower activity and lean muscle upkeep."
    },

    guidelines:
      "Portion meals so the dog stays sleek and athletic, with the last two or three ribs faintly visible and a crisp waist tuck. Greyhounds often burn more calories and benefit from somewhat higher protein than some similarly sized breeds, yet extra weight places needless strain on slender joints. Split daily rations into two meals, avoid intense running immediately before and after eating, and keep fresh water available at all times.",

    considerations: [
      "Keep body weight lean; excess pounds stress fine-boned legs and paws.",
      "Schedule calm rest periods before and after meals to help lower bloat risk.",
      "Use a slightly raised bowl if your veterinarian agrees and the dog prefers not to stoop deeply.",
      "Count training treats within the daily calorie budget.",
      "Transition retired racing dogs gradually from high-energy track diets to home maintenance food."
    ],

    note:
      "Individual calorie needs vary widely between active coursing dogs and relaxed household companions; confirm portions and diet composition with a veterinarian."
  },

  health: {
    overview:
      "Greyhounds typically live 10 to 13 years and are generally resilient, athletic dogs. Their unique sighthound physiology creates distinctive normal lab values—including higher red blood cell counts and naturally lower resting thyroid hormone (Total T4) levels than many other breeds—so working with a veterinarian familiar with sighthounds is valuable. Key health concerns include inherited Greyhound polyneuropathy (screenable via DNA testing), deep-chested gastric dilatation-volvulus (bloat), bone cancer (osteosarcoma), delayed postoperative bleeding, corneal pannus, dental disease, and paw pad corns.",

    commonConditions: [
      "Greyhound polyneuropathy — an established autosomal recessive neurological condition caused by a 10-base-pair deletion in the NDRG1 gene, leading to progressive weakness and loss of coordination in affected dogs; preventable through DNA screening of breeding parents",
      "Gastric dilatation-volvulus (bloat) — an acute, life-threatening stomach twisting risk associated with the breed's deep, narrow chest",
      "Osteosarcoma — an aggressive primary bone tumor documented at higher rates in retired racing and older Greyhounds, often affecting the long leg bones",
      "Delayed postoperative bleeding — a breed-recognized tendency for bleeding to resume 24 to 48 hours after surgery or injury due to rapid clot breakdown, manageable with veterinary antifibrinolytic medication",
      "Pannus (chronic superficial keratitis) — an immune-related eye condition affecting the cornea that worsens with ultraviolet light and requires ongoing eye drops",
      "Periodontal and dental disease — a frequent tendency toward heavy tartar buildup and gum inflammation without regular brushing",
      "Paw pad corns — firm, painful keratinized growths on the digital pads that can cause limping on hard ground"
    ],

    preventiveCare: [
      "Verify that breeding parents have documented clearances for Greyhound polyneuropathy DNA testing, specialist eye exams, and cardiac evaluations.",
      "Inform your veterinarian about sighthound-specific blood work baselines (such as naturally lower Total T4 thyroid readings) and anesthesia considerations before any procedure.",
      "Discuss preventive antifibrinolytic therapy with your veterinarian ahead of planned surgeries or dental extractions.",
      "Feed two smaller daily meals and keep vigorous sprinting separated from mealtimes to reduce bloat risk.",
      "Brush teeth daily and arrange routine veterinary dental checkups.",
      "Provide thick, supportive bedding to cushion bony elbows and hips against pressure sores."
    ],

    recommendedScreenings: [
      "Greyhound polyneuropathy DNA test (NDRG1 mutation)",
      "Annual eye examination by a veterinary ophthalmologist",
      "Cardiac evaluation by a veterinary cardiologist",
      "Routine veterinary dental examinations"
    ],

    dentalCare:
      "Daily tooth brushing with dog-safe enzymatic toothpaste is strongly advised. Although the breed has a clean scissor bite, Greyhounds frequently accumulate plaque and tartar quickly and benefit from periodic professional cleanings.",

    earCare:
      "Check the small, thin rose ears every week for wax, debris, or redness, and wipe gently with a veterinarian-approved cleaner when needed.",

    skinCare:
      "Look over the thin, close-coated skin after exercise for scrapes or minor tears. Dress the dog in a warm coat during chilly weather and limit prolonged harsh midday sun exposure on lightly pigmented areas."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Apartment or house dwellers who appreciate a calm, quiet indoor companion",
      "Owners able to provide daily leashed walks plus occasional secure off-leash sprints",
      "Gentle households with older, considerate children",
      "Adopters interested in giving a retired racing dog a peaceful home"
    ],

    notIdealFor: [
      "Owners expecting reliable off-leash hiking in unfenced woods or parks",
      "Homes with free-roaming small pets such as rabbits, hamsters, or untested cats",
      "Anyone seeking a vocal watchdog or territorial guard dog",
      "Households looking for an outdoor-only dog or a high-stamina marathon jogging partner"
    ]
  },

  funFacts: [
    "Greyhounds are the fastest breed of dog on land, capable of short sprints reaching roughly 45 miles per hour.",
    "During an all-out sprint, the breed uses a double-suspension gallop in which all four paws leave the ground twice per stride—once tucked beneath the chest and once fully extended.",
    "Despite their explosive track speed, Greyhounds sleep or lounge for much of the day and are affectionately nicknamed '45-mph couch potatoes.'",
    "Healthy Greyhounds naturally carry higher red blood cell concentrations and lower resting thyroid hormone (Total T4) values than most other dog breeds, which can look abnormal if compared against general canine lab ranges.",
    "Carvings of unmistakable Greyhound-like sighthounds appear in ancient Egyptian tombs dating back nearly five thousand years."
  ],

  faq: [
    {
      question: "Do Greyhounds need hours of intense exercise every day?",
      answer:
        "No. Although they are elite sprinters, Greyhounds are built for short bursts of speed rather than long-distance endurance. One or two brisk leashed walks totaling 45 to 60 minutes daily—paired with occasional safe sprints in a securely fenced space—keeps most adults happy and relaxed indoors."
    },
    {
      question: "Can a Greyhound live comfortably in an apartment?",
      answer:
        "Yes. Despite their tall frame, Greyhounds are famously quiet, rarely bark, and spend much of the day curled up on a soft bed. As long as they receive regular leashed walks and cushioned sleeping spots, they adapt smoothly to apartment life."
    },
    {
      question: "Can Greyhounds ever be trusted off leash in unfenced areas?",
      answer:
        "Generally no. Centuries of sight-hunting instinct make Greyhounds react instantly to fast-moving wildlife or small animals, and they can cover huge distances in seconds. Off-leash running should stay strictly inside a tall, fully enclosed yard or paddock."
    },
    {
      question: "Are Greyhounds safe around cats and small dogs?",
      answer:
        "It varies by individual dog. Some Greyhounds learn to coexist peacefully with indoor cats and small dogs, while others retain strong chase instincts toward small, fast-moving animals. Careful introductions, slow supervision, and a basket muzzle during early meetings are essential."
    },
    {
      question: "Why do Greyhounds need a veterinarian familiar with sighthounds?",
      answer:
        "Healthy Greyhounds naturally have different blood test baselines—such as higher red blood cell levels and lower resting thyroid hormone (Total T4) readings—along with specific anesthesia sensitivities and a known risk of delayed bleeding after surgery. A sighthound-experienced vet interprets tests accurately and plans safer procedures."
    },
    {
      question: "How long do Greyhounds live and what health tests matter most?",
      answer:
        "Greyhounds typically live 10 to 13 years. For breeding dogs, recommended screening focuses on a DNA test for Greyhound polyneuropathy, an ophthalmologist eye exam, and a cardiac evaluation."
    }
  ],

  references: [
    "fci-greyhound-official-standard",
    "fci-greyhound-nomenclature",
    "the-kennel-club-greyhound-breed-standard",
    "akc-greyhound-breed-standard",
    "akc-greyhound-breed-profile",
    "ofa-greyhound-chic-requirements",
    "greyhound-neuropathy-ndrg1-study-2010",
    "shiel-2007-greyhound-thyroid-values",
    "natureserve-canis-lupus-familiaris",
    "wikimedia-greyhound-kk70088",
    "wikimedia-greyhound-close-up-vincent-eisfeld",
    "the-dog-api"
  ],

  evidence: {
    scientificName: {
      reliability: "reliable_source",
      sources: [
        {
          id: "natureserve-canis-lupus-familiaris",
          role: "verified",
          locator: "Species taxonomy record: Canis lupus familiaris"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Domestic dog subspecies taxonomy."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greyhound-nomenclature",
          role: "verified",
          locator: "French official breed name: LEVRIER ANGLAIS"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "English Greyhound is a common regional descriptor; Lévrier Anglais is the official French FCI nomenclature name."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "Group 10 Sighthounds, Section 3 Short-haired Sighthounds, without working trial"
        },
        {
          id: "the-kennel-club-greyhound-breed-standard",
          role: "verified",
          locator: "Hound Group"
        },
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Hound Group"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group: Hound"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "User-facing group text avoids registry classification numbers and names while preserving accurate sighthound type."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "Origin: Great Britain"
        },
        {
          id: "fci-greyhound-nomenclature",
          role: "verified",
          locator: "Country of origin: Great Britain"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: Ancient Egypt/Middle East"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Official FCI standard establishes Great Britain as country of origin; The Dog API lists Ancient Egypt/Middle East, reflecting ancient sighthound ancestry noted in region and history."
    },

    "overview.summary": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "General appearance and behaviour/temperament"
        },
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "About the breed: speed and gentle indoor temperament"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Original synthesis of official conformation and temperament traits."
    },

    "overview.description": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "General appearance, head, body, coat, and colour"
        },
        {
          id: "the-kennel-club-greyhound-breed-standard",
          role: "verified",
          locator: "General appearance, characteristics, body, and hindquarters"
        },
        {
          id: "akc-greyhound-breed-standard",
          role: "verified",
          locator: "General appearance, chest, loin, neck, and coat"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Original descriptive prose grounded in official breed standards."
    },

    "overview.history": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "History: Tomb of Amten (Fourth Dynasty Egypt, 2900–2751 BCE), hare coursing, British development"
        },
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "Brief historical summary and Great Britain origin"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.history"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Original historical summary verified against kennel club and standard sources."
    },

    "overview.originalPurpose": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "Utilization: Sighthound for coursing"
        },
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Hare as natural quarry; open-field coursing"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "overview.currentRoles": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Companion, lure coursing, conformation, and therapy roles"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.sizeCategory": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "Ideal height 71–76 cm (males) and 68–71 cm (females)"
        },
        {
          id: "akc-greyhound-breed-standard",
          role: "verified",
          locator: "Weight 65–70 lb (dogs) and 60–65 lb (bitches)"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "Size: Ideal height — Dogs 71–76 cm, Bitches 68–71 cm"
        },
        {
          id: "the-kennel-club-greyhound-breed-standard",
          role: "cited",
          locator: "Size: Ideal height — Dogs 71–76 cms, Bitches 69–71 cms"
        },
        {
          id: "akc-greyhound-breed-profile",
          role: "cited",
          locator: "Height: 28–30 inches (male), 27–28 inches (female)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric: 71–76 cm (male), 68–71 cm (female)"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Exact FCI Standard No. 158 height values in cm (matches The Dog API; Royal Kennel Club lists female minimum as 69 cm)."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-greyhound-breed-standard",
          role: "verified",
          locator: "Weight: Dogs 65 to 70 pounds; Bitches 60 to 65 pounds"
        },
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Weight: 65–70 pounds (male), 60–65 pounds (female)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.weight.metric: 29–32 kg (male), 27–29 kg (female)"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Exact AKC Official Standard weight values in lb (FCI Standard No. 158 does not prescribe a numeric weight; The Dog API lists 29–32 kg / 27–29 kg)."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 10–13 years"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span: 10–13 years"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Both AKC breed profile and The Dog API report 10–13 years."
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "Coat — Hair: Fine and close"
        },
        {
          id: "akc-greyhound-breed-standard",
          role: "verified",
          locator: "Coat: Short, smooth and firm in texture"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-greyhound-breed-standard",
          role: "verified",
          locator: "Coat: Short, smooth and firm in texture"
        },
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "Section 3 Short-haired Sighthounds; Hair: Fine and close"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "Colour: Black, white, red, blue, fallow, brindle or any of these colours broken with white"
        },
        {
          id: "akc-greyhound-breed-standard",
          role: "verified",
          locator: "Color: Immaterial"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "GET /breeds/{id}/colours"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "FCI Standard No. 158 specifies black, white, red, blue, fallow, brindle, or any of these broken with white; AKC states color is immaterial; The Dog API includes broader generic canine color labels."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Grooming and shedding ratings"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Drooling level rating"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "Head, eyes, ears, bite, neck, body, tail, limbs, and feet"
        },
        {
          id: "the-kennel-club-greyhound-breed-standard",
          role: "verified",
          locator: "Head, mouth, chest, hindquarters, and tail"
        },
        {
          id: "akc-greyhound-breed-standard",
          role: "verified",
          locator: "Feet: hard and close, rather more hare than catfeet, well knuckled up with good strong claws"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "Behaviour/Temperament: Intelligent, gentle, affectionate and even-tempered"
        },
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Temperament: Independent, gentle, noble; strong chase instinct and gentle indoor demeanor"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "cited",
          locator: "Breed trait ratings"
        },
        {
          id: "fci-greyhound-official-standard",
          role: "cited",
          locator: "Behaviour/Temperament"
        }
      ],
      verifiedOn: null,
      note: "Editorial 1–5 ratings synthesized from kennel club profiles and breed standard temperament descriptions."
    },

    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Exercise: daily walks and brief sprints in securely fenced spaces"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Daily minute range is a practical estimate grounded in breed exercise guidance."
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Grooming: weekly rubdowns with damp cloth or hound glove, nail trims, weekly ear checks, daily brushing"
        },
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "Fine and close coat"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Training: independent sighthound, keep lessons short and sweet, gentle approach never harsh, early socialization"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Apartment suitability, indoor comfort, and cold-weather coat guidance"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    nutrition: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Nutrition: somewhat higher calories and protein than some dogs; bloat awareness"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Meal frequency and bloat precautions reflect standard veterinary feeding practice for deep-chested large breeds."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Health: life expectancy 10–13 years, bloat/gastric torsion, Greyhound neuropathy, cardiac and eye conditions"
        },
        {
          id: "greyhound-neuropathy-ndrg1-study-2010",
          role: "verified",
          locator: "PLoS One 2010;5(6):e11258 (PMID 20582309): NDRG1 10-bp deletion causing autosomal recessive Greyhound polyneuropathy"
        },
        {
          id: "shiel-2007-greyhound-thyroid-values",
          role: "verified",
          locator: "Vet Rec 2007;161:616–619 (PMID 17982140): 42 of 46 healthy young Greyhounds (91.3%) had Total T4 below non-breed-specific ranges"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Distinguishes peer-reviewed genetic and endocrine findings from conformational and clinical predispositions."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "greyhound-neuropathy-ndrg1-study-2010",
          role: "verified",
          locator: "NDRG1 exon 15 10-bp deletion (c.1080_1089delTCGCCTGGAC) in Greyhounds with polyneuropathy"
        },
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Health section: bloat/gastric torsion, Greyhound neuropathy, cardiac and eye conditions"
        },
        {
          id: "ofa-greyhound-chic-requirements",
          role: "cited",
          locator: "Greyhound CHIC health screening panel"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Separates genetically confirmed NDRG1 polyneuropathy from deep-chested conformational GDV risk and widely documented clinical predispositions."
    },

    "health.preventiveCare": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Recommended Health Tests From National Breed Club and general care"
        },
        {
          id: "ofa-greyhound-chic-requirements",
          role: "cited",
          locator: "Greyhound CHIC testing recommendations"
        },
        {
          id: "shiel-2007-greyhound-thyroid-values",
          role: "verified",
          locator: "Breed-specific thyroid reference intervals in healthy Greyhounds"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Recommended Health Tests From National Breed Club: Cardiac Exam, Ophthalmologist Evaluation, Greyhound Polyneuropathy - DNA Test"
        },
        {
          id: "ofa-greyhound-chic-requirements",
          role: "cited",
          locator: "Greyhound CHIC requirements (NDRG1 DNA, Eye, Cardiac)"
        },
        {
          id: "greyhound-neuropathy-ndrg1-study-2010",
          role: "verified",
          locator: "Genetic basis of NDRG1 DNA test for Greyhound polyneuropathy"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "cited",
          locator: "Grooming: daily tooth brushing if possible"
        },
        {
          id: "the-kennel-club-greyhound-breed-standard",
          role: "cited",
          locator: "Mouth: complete scissor bite"
        }
      ],
      verifiedOn: null,
      note: "General canine preventive dental care tailored to the breed."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "cited",
          locator: "Grooming: weekly ear checks"
        },
        {
          id: "fci-greyhound-official-standard",
          role: "cited",
          locator: "Ears: small, rose-shaped, of fine texture"
        }
      ],
      verifiedOn: null,
      note: "Routine ear hygiene guidance for folded rose ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "cited",
          locator: "Coat: fine and close"
        },
        {
          id: "akc-greyhound-breed-profile",
          role: "cited",
          locator: "Grooming and cold-weather protection"
        }
      ],
      verifiedOn: null,
      note: "General skin and thermal care guidance for short-coated, low-body-fat sighthounds."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "cited",
          locator: "Temperament, apartment living, exercise, and family traits"
        },
        {
          id: "fci-greyhound-official-standard",
          role: "cited",
          locator: "Behaviour/Temperament"
        }
      ],
      verifiedOn: null,
      note: "Editorial suitability ratings based on calm indoor behavior, low barking, and strong sight-chase instincts."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Top speed (~45 mph), Tomb of Amten (2900–2751 BCE), relaxed indoor habits"
        },
        {
          id: "shiel-2007-greyhound-thyroid-values",
          role: "verified",
          locator: "Naturally lower Total T4 concentrations in healthy Greyhounds (PMID 17982140)"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "Origin, height, coat, and temperament"
        },
        {
          id: "akc-greyhound-breed-standard",
          role: "verified",
          locator: "Weight (65–70 lb / 60–65 lb)"
        },
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Lifespan (10–13 years), exercise, apartment suitability, recommended health tests"
        },
        {
          id: "shiel-2007-greyhound-thyroid-values",
          role: "verified",
          locator: "Sighthound-specific thyroid hormone baselines"
        },
        {
          id: "greyhound-neuropathy-ndrg1-study-2010",
          role: "verified",
          locator: "Greyhound polyneuropathy NDRG1 DNA test"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "All FAQ entries are written in original prose without source or registry names."
    }
  },

  updatedOn: "2026-11-26"
};
