import type { Breed } from "../schema/breed.types";

export const affenpinscher: Breed = {
  slug: "affenpinscher",
  name: "Affenpinscher",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Monkey Terrier",
    "Monkey Dog",
    "Ape Terrier",
    "Zwergaffenpinscher",
    "Diablotin Moustachu"
  ],

  group: "Pinscher, schnauzer, and toy companion dogs",

  origin: {
    country: "Germany",
    region: "Southern Germany"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/An_Affenpinscher.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:An_Affenpinscher.jpg",
      title: "An Affenpinscher.jpg",
      description:
        "A black Affenpinscher portrait showing its rough, wiry facial furnishings, bristly eyebrows, and dark round eyes.",
      creator: "Lori Branham",
      uploader: "Flickr upload bot",
      capturedOn: "2009-02-10",
      uploadedOn: "2014-03-02",
      width: 3318,
      height: 2212,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Lori Branham, Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:An_Affenpinscher.jpg. License: https://creativecommons.org/licenses/by/2.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Affenpinscher_breed.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Affenpinscher_breed.jpg",
      title: "Affenpinscher breed.jpg",
      description:
        "An adult Affenpinscher photographed outdoors, highlighting its compact square build and shaggy wire coat.",
      creator: "Futurebreak",
      uploader: "Futurebreak",
      capturedOn: "2023-08-24",
      uploadedOn: "2026-07-08",
      width: 3024,
      height: 4032,
      licenseId: "cc0-1.0",
      attribution:
        "Photo by Futurebreak, Wikimedia Commons, CC0 1.0 Public Domain Dedication. Source: https://commons.wikimedia.org/wiki/File:Affenpinscher_breed.jpg. License: https://creativecommons.org/publicdomain/zero/1.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    }
  ],

  overview: {
    summary:
      "A sturdy, wiry-coated toy companion from Germany known for its expressive monkey-like face, bold ratter heritage, and comically serious charm.",

    description:
      "The Affenpinscher is a compact, square-built small dog with solid bone and none of the fragile look seen in more delicate toy breeds. Its trademark face features coarse eyebrows, a bristly beard, and stiff hair fanning out around a round skull and short muzzle, giving it an unmistakably inquisitive, monkey-like look. Dark, round eyes gaze straight ahead with a solemn yet mischievous spark. A dense, harsh wire coat covers the body, traditionally pure black in its homeland though shades such as gray, silver, red, black and tan, and belge also appear in other regions. Bred originally to clear rodents from barns and kitchens, it pairs an alert, fearless streak with warm loyalty and entertaining antics at home.",

    history:
      "Small rough-coated ratters of Affenpinscher type were working across southern Germany by the seventeenth century, guarding stables, granaries, and household kitchens from mice and rats. Over time, breeders in cities such as Munich and Berlin refined these plucky utility dogs into smaller indoor companions without losing their fearless edge. The breed also helped shape related European dogs, including the Brussels Griffon and the Miniature Schnauzer. Numbers fell sharply during the world wars of the twentieth century, yet dedicated German and international breeders rebuilt the lines and preserved the breed's distinctive shaggy face and bold spirit.",

    originalPurpose:
      "Farm, stable, and household ratter later adapted into an alert indoor companion.",

    currentRoles: [
      "Loyal and entertaining indoor family companion",
      "Alert home watchdog",
      "Competitor in small-dog agility, obedience, and barn hunt sports"
    ]
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "cm",
      male: {
        min: 25,
        max: 30
      },
      female: {
        min: 25,
        max: 30
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 4,
        max: 6
      },
      female: {
        min: 4,
        max: 6
      }
    },

    lifespanYears: {
      min: 12,
      max: 15
    },

    coatType:
      "Dense, harsh, rough wire coat with stiffer, standing hair around the head forming bushy eyebrows, a full beard, cheek tufts, and a wreath around the eyes.",

    coatLength: "Medium",

    coatColors: [
      "Pure black with a black undercoat (traditional homeland preference)",
      "Gray",
      "Silver",
      "Red",
      "Black and tan",
      "Belge (red mixed with black, brown, or white hairs)",
      "A small white chest spot occasionally appears; large white patches are uncommon"
    ],

    sheddingLevel:
      "Low; the harsh wire coat drops minimal loose hair when brushed regularly and tidied periodically",

    droolingLevel:
      "Low; tight, black-edged lips keep drooling minimal",

    distinctiveFeatures: [
      "Compact, square, sturdy frame measuring 25 to 30 cm at the shoulder and weighing roughly 4 to 6 kg",
      "Round, domed head with a short straight muzzle, distinct stop, and straggly radial facial hair creating a monkey-like expression",
      "Slightly undershot jaw with tight black lips that conceal the teeth and tongue when closed",
      "Dark, round, forward-looking eyes ringed with coarse hair",
      "High-set V-shaped drop ears carried close to the head (natural or cropped where permitted)",
      "Short, strong back and high-set tail carried upward in a gentle curve",
      "Straight, well-boned front legs and compact, round, cat-like paws with black nails",
      "Light, fluent, confident gait carried with comic seriousness"
    ]
  },

  temperament: {
    traits: [
      "Bold, fearless, and self-assured well beyond its small stature",
      "Inquisitive, bright, and quick to pick up cues when lessons stay fun",
      "Deeply devoted, affectionate, and comical with its household",
      "Alert and quick to sound the alarm when something feels out of place",
      "Reserved around unfamiliar visitors until it decides to warm up",
      "Independent and persistent, occasionally showing a quick spark of temper if provoked",
      "Strong chasing instinct around rodents and small scurrying pets",
      "Uncomfortable with rough play, teasing, or having toys and food snatched away"
    ],

    scores: {
      affection: 4,
      withChildren: 2,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 4,
      independence: 4,
      trainability: 3,
      barking: 4,
      energy: 3
    }
  },

  care: {
    exercise: {
      level:
        "Moderate; lively and playful indoors, needing daily walks and mental games without long endurance runs in hot weather",

      minutesPerDay: {
        min: 30,
        max: 45
      },

      activities: [
        "Brisk daily neighborhood walks on a secure leash",
        "Short indoor fetch, puzzle toys, and trick games",
        "Small-dog sports such as agility, rally, or barn hunt",
        "Supervised sniffing and play in a securely fenced yard"
      ]
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush and comb two to three times per week with a slicker brush and metal comb, paying close attention to the beard, eyebrows, and leg furnishings to stop mats.",

      bathing:
        "Bathe only as needed with a mild dog shampoo that preserves the crisp, wiry coat texture.",

      notes: [
        "Tidy the shaggy outline every two to three months through light hand-stripping or careful blending; frequent close clipping softens the coat and can fade deep black hair.",
        "Keep stray hairs trimmed away from the eyes so they do not irritate the surface.",
        "Check and gently clean the V-shaped drop ears each week to prevent wax buildup.",
        "Trim dark nails every two to three weeks to keep the compact paws healthy.",
        "Brush teeth daily to counter tartar accumulation in the short jaw."
      ]
    },

    training: {
      difficulty:
        "Moderate; sharp-minded and willing to engage with a trusted handler, yet independent and quickly bored by monotonous drills",

      tips: [
        "Keep sessions short—around three to five minutes—upbeat, and varied using small food rewards.",
        "Teach a calm 'quiet' cue early to channel its watchful alarm barking.",
        "Approach house-training with a firm routine, crate management, and steady patience.",
        "Avoid harsh scolding or physical corrections, which make this proud breed defensive or uncooperative.",
        "Supervise carefully around small household pets such as hamsters or birds due to its ratter instincts."
      ],

      socialization:
        "Introduce puppies early and positively to new people, steady dogs, and city sounds so natural watchfulness stays balanced and confident rather than snappy."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool climates where the dense wire coat helps insulate the body",
        "Sensitive to high heat and humidity because of its shortened muzzle; keep indoors with air conditioning during hot spells"
      ],

      aloneTimeTolerance:
        "Low to moderate; bonds tightly with its household and does best when not left alone for long stretches every day."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced small-breed dog food measured carefully to maintain a lean, solid build.",

    feedingFrequency: {
      puppy:
        "Three to four small, measured meals per day until six months of age to maintain steady blood sugar.",
      adult:
        "Two measured meals per day to support even energy and healthy weight.",
      senior:
        "Two portion-controlled meals per day matched to slower metabolism."
    },

    guidelines:
      "Measure every meal accurately because even small amounts of excess weight place heavy strain on tiny knees, hips, and airways. Keep fresh, cool drinking water available at all times.",

    considerations: [
      "Check body condition regularly so ribs remain easy to feel under a thin covering.",
      "Count training treats within the daily calorie budget.",
      "Provide cool water immediately after walks, especially in warm weather when shorter-muzzled dogs cool down less efficiently.",
      "Wipe the facial beard clean after meals to keep skin dry and odor-free."
    ],

    note:
      "Adjust daily portions with a veterinarian based on age, activity level, and body condition."
  },

  health: {
    overview:
      "The Affenpinscher is generally a sturdy, long-lived small breed with a typical lifespan of 12 to 15 years and no single inherited disease unique only to the breed. Even so, toy-breed orthopedic and ocular concerns—especially patellar luxation and cataracts or other eye changes—warrant routine screening, alongside awareness of hip issues, heart murmurs in older dogs, dental crowding, and heat sensitivity from its shortened muzzle.",

    commonConditions: [
      "Patellar luxation — intermittent slipping of the kneecap common across toy breeds and a primary orthopedic screening focus",
      "Ocular conditions (including cataracts and surface eye injuries) — monitored through routine specialist eye exams, with prominent forward-facing eyes also vulnerable to accidental scratches",
      "Hip dysplasia and Legg-Calvé-Perthes disease — developmental hip joint disorders reported in small and toy breeds, monitored optionally by breeders via radiographs",
      "Cardiac anomalies and age-related mitral valve disease — heart murmurs or structural valve changes observed in some small dogs as they age, checked during routine veterinary auscultation",
      "Brachycephalic airway heat sensitivity — mildly shortened muzzle can make cooling via panting less efficient in hot, humid weather, though generally less severe than in extremely flat-faced breeds",
      "Periodontal disease — crowded teeth in the compact, slightly undershot jaw encourage faster plaque and gum inflammation without regular brushing",
      "Chiari-like malformation and syringomyelia — investigated in scientific craniometric studies of brachycephalic toy breeds including Affenpinschers, though clinical prevalence appears lower than in breeds with more severely flattened skulls"
    ],

    preventiveCare: [
      "Verify that breeding parents have completed eye and patella evaluations, plus optional hip and cardiac checks where available.",
      "Avoid strenuous outdoor play in hot or humid weather and provide cool shade or air conditioning.",
      "Use a snug chest harness rather than a neck collar to keep pressure off the windpipe.",
      "Maintain a lean body weight and limit repeated jumps off high furniture to protect knees and hips.",
      "Keep facial hair tidy around the eyes and schedule yearly veterinary checkups and dental cleanings."
    ],

    recommendedScreenings: [
      "Clinical patellar luxation orthopedic evaluation by a veterinarian",
      "Ophthalmic examination by a board-certified veterinary ophthalmologist",
      "Optional hip dysplasia, Legg-Calvé-Perthes, elbow, and cardiac evaluations for breeding dogs"
    ],

    dentalCare:
      "Brush teeth daily with canine enzymatic toothpaste and schedule regular veterinary dental cleanings to manage plaque in the compact, slightly undershot jaw.",

    earCare:
      "Check the drop ears weekly for redness, moisture, or wax buildup, cleaning gently with a veterinarian-approved solution.",

    skinCare:
      "Part the dense wire coat during weekly brushing to check skin health and prevent mats, avoiding overly frequent bathing that strips natural coat oils."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: false,
    seniorOwners: true,
    activeOwners: false,
    apartmentLiving: true,

    idealFor: [
      "Adults, couples, or seniors wanting a loyal, lively, and comical indoor companion",
      "Apartment dwellers looking for a compact, low-shedding watchdog with moderate exercise needs",
      "Owners who enjoy an independent, feisty personality with a sense of humor",
      "People willing to keep up with regular brushing and occasional coat tidying",
      "Calm households without toddlers or loose small rodent pets"
    ],

    notIdealFor: [
      "Families with young children who might tease, squeeze, or handle a small dog roughly",
      "Long-distance runners or hikers wanting a high-endurance outdoor partner",
      "First-time owners expecting effortless obedience without patience and consistency",
      "Hot, humid homes lacking dependable indoor air conditioning",
      "Households keeping free-roaming pet rodents or birds"
    ]
  },

  funFacts: [
    "In German, 'Affen' means monkey or ape and 'Pinscher' refers to a terrier-like dog, giving the breed its classic 'Monkey Terrier' nickname.",
    "French admirers long dubbed the breed 'Diablotin Moustachu'—the 'Mustached Little Devil'—for its whiskered face and cheeky personality.",
    "One of Europe's older toy breeds, the Affenpinscher played a direct foundational role in developing the Brussels Griffon and influenced the Miniature Schnauzer.",
    "Despite weighing just 4 to 6 kg, it still carries the fearless ratter heart bred to clear rats from seventeenth-century stables and kitchens.",
    "Its neat, jaunty strut and solemn expression give the breed a famously serious, almost comical self-importance."
  ],

  faq: [
    {
      question: "What kind of dog is an Affenpinscher?",
      answer:
        "The Affenpinscher is a sturdy, wire-coated German toy dog recognized by its expressive monkey-like face, bold ratter heritage, and loyal, entertaining personality."
    },
    {
      question: "How big does an Affenpinscher get?",
      answer:
        "Adults stand 25 to 30 cm tall at the shoulder and weigh roughly 4 to 6 kg, with a solid, square build."
    },
    {
      question: "How long does an Affenpinscher live?",
      answer:
        "With lean weight management, dental care, and routine veterinary checkups, an Affenpinscher typically lives 12 to 15 years."
    },
    {
      question: "Do Affenpinschers shed much, and how should they be groomed?",
      answer:
        "They shed very little. Brush and comb the harsh wire coat two to three times a week to prevent tangles, and tidy it every couple of months by light hand-stripping or blending."
    },
    {
      question: "Are Affenpinschers good apartment dogs?",
      answer:
        "Yes. Their compact size, low shedding, and moderate daily exercise needs fit apartment life well, though early training helps manage their alert watchdog barking."
    },
    {
      question: "Are Affenpinschers good with children?",
      answer:
        "Usually they do best in adult homes or with calm, older children who respect their space, as they dislike rough play, teasing, or grabbing."
    },
    {
      question: "Are Affenpinschers hard to train?",
      answer:
        "They are smart and willing to work with a bonded owner, yet independent and easily bored. Short, lively sessions with tasty rewards work far better than repetitive drills."
    },
    {
      question: "What health issues should Affenpinscher owners watch for?",
      answer:
        "Affenpinschers are generally hardy, but owners and breeders watch for patellar luxation, eye conditions such as cataracts, hip issues, dental crowding, and overheating in hot weather."
    }
  ],

  references: [
    "natureserve-canis-lupus-familiaris",
    "fci-affenpinscher-official-standard",
    "fci-affenpinscher-nomenclature",
    "akc-affenpinscher-breed-standard",
    "akc-affenpinscher-breed-profile",
    "aca-affenpinscher-health",
    "ofa-affenpinscher-chic-requirements",
    "ofa-legg-calve-perthes",
    "pmc-affenpinscher-craniometric-2017",
    "the-dog-api",
    "wikimedia-an-affenpinscher-lori-branham",
    "wikimedia-affenpinscher-breed-futurebreak"
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
          id: "fci-affenpinscher-official-standard",
          role: "verified",
          locator: "Standard heading: AFFENPINSCHER"
        },
        {
          id: "akc-affenpinscher-breed-profile",
          role: "verified",
          locator: "About the Breed and History: Monkey Dog, Monkey Terrier, Diablotin Moustachu"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names: Monkey Terrier, Monkey Dog, Ape Terrier, Zwergaffenpinscher"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Cross-checked across FCI Standard No. 186, AKC breed profile, and The Dog API."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-affenpinscher-official-standard",
          role: "verified",
          locator: "CLASSIFICATION F.C.I.: Group 2 Pinscher and Schnauzer - Molossoid and Swiss Mountain and Cattledogs; Section 1 Pinscher and Schnauzer type, Subsection Pinscher; Without working trial"
        },
        {
          id: "akc-affenpinscher-breed-standard",
          role: "verified",
          locator: "Toy Group"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group: Toy"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "User-facing group label states Pinscher, schnauzer, and toy companion dogs without registry or section identifiers."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-affenpinscher-official-standard",
          role: "verified",
          locator: "COUNTRY OF ORIGIN: Germany; BRIEF HISTORICAL SUMMARY (Southern Germany)"
        },
        {
          id: "fci-affenpinscher-nomenclature",
          role: "verified",
          locator: "Country of origin: Germany"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: Germany"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-affenpinscher-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "akc-affenpinscher-breed-profile",
          role: "verified",
          locator: "About the Breed, History (17th-century German ratters, Munich/Berlin development, Brussels Griffon/Miniature Schnauzer ties)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Written in original prose from FCI Standard No. 186, AKC records, and cross-checked against The Dog API."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-affenpinscher-official-standard",
          role: "verified",
          locator: "HEAD, EYES, EARS, BODY, TAIL, LIMBS, GAIT/MOVEMENT, COAT, COLOUR (pure black with black undercoat), SIZE AND WEIGHT"
        },
        {
          id: "akc-affenpinscher-breed-standard",
          role: "verified",
          locator: "General Appearance, Body, Tail, Forequarters, Hindquarters, Coat, Color (black, gray, silver, red, black and tan, or belge), Gait"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Notes both FCI Standard No. 186's pure black color requirement and AKC's broader accepted palette (black, gray, silver, red, black and tan, belge); excludes generic non-breed variants from The Dog API (e.g., liver, merle, brindle, pied, white)."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-affenpinscher-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Height at withers: Dogs and bitches: 25 to 30 cm"
        },
        {
          id: "akc-affenpinscher-breed-standard",
          role: "cited",
          locator: "Preferred height at the withers is 9 1/2 to 11 1/2 inches"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric: 23-29 cm"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Preserved in exact published centimetres (25 to 30 cm) from FCI Standard No. 186 (country-of-origin standard). AKC specifies 9.5 to 11.5 inches and The Dog API lists converted 23-29 cm."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-affenpinscher-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Weight: Dogs and bitches: appr. 4 to 6 kg"
        },
        {
          id: "akc-affenpinscher-breed-profile",
          role: "cited",
          locator: "Weight: 7-10 pounds"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.weight.metric: 3.2-4.5 kg"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Preserved in exact published kilograms (4 to 6 kg) from FCI Standard No. 186. AKC breed profile lists 7-10 pounds and The Dog API lists converted 3.2-4.5 kg."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-affenpinscher-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12-15 years"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span: 12-15 years"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Consistent across AKC breed profile and The Dog API."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-affenpinscher-breed-profile",
          role: "verified",
          locator: "Shedding and grooming profile"
        },
        {
          id: "fci-affenpinscher-official-standard",
          role: "verified",
          locator: "COAT: Hair: The body coat should be harsh and dense."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-affenpinscher-official-standard",
          role: "verified",
          locator: "Lips: Close-fitting to the jaws; black pigment."
        },
        {
          id: "akc-affenpinscher-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (low)"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-affenpinscher-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Fearless, alert, persistent and devoted, sometimes with quick-tempered passion."
        },
        {
          id: "akc-affenpinscher-breed-standard",
          role: "verified",
          locator: "Temperament: game, alert, inquisitive, loyal, affectionate, generally quiet, fearless toward any aggressor"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament: Confident, alert, playful, loyal, courageous"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-affenpinscher-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 ratings informed by AKC trait scales and official temperament descriptions."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-affenpinscher-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Practical companion care combining wire-coat upkeep, short positive training sessions, and warm-weather precautions."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-affenpinscher-breed-profile",
          role: "verified",
          locator: "Energy Level: Somewhat Active / moderate daily exercise"
        },
        {
          id: "fci-affenpinscher-official-standard",
          role: "verified",
          locator: "UTILIZATION: House and Companion Dog"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-affenpinscher-breed-profile",
          role: "cited",
          locator: "Moderate daily walking and indoor play guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 30 to 45 minutes daily suited to an active small companion."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-affenpinscher-breed-profile",
          role: "verified",
          locator: "Compact indoor companion suited to apartment living"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-affenpinscher-breed-profile",
          role: "verified",
          locator: "Supervised outdoor play and secure fencing recommendations"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-affenpinscher-breed-profile",
          role: "verified",
          locator: "Health: shorter-faced breed can experience breathing difficulty in hot weather if permitted to overheat"
        },
        {
          id: "fci-affenpinscher-official-standard",
          role: "verified",
          locator: "COAT: Harsh, dense body coat"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-affenpinscher-breed-profile",
          role: "cited",
          locator: "Loyal household companion temperament"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-affenpinscher-breed-profile",
          role: "cited",
          locator: "Nutrition: age-appropriate complete dog food and weight monitoring"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-affenpinscher-breed-profile",
          role: "cited",
          locator: "Small-breed life-stage feeding guidance"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "aca-affenpinscher-health",
          role: "verified",
          locator: "ACA Official Health Statement: CHIC Eye and Patella testing, optional hip/elbow/Legg-Calve-Perthes/heart testing, and no known breed-unique inherited malfunction"
        },
        {
          id: "akc-affenpinscher-breed-profile",
          role: "verified",
          locator: "Health: generally healthy; screen for luxating patella, heart anomalies, vision problems, hip dysplasia; heat sensitivity"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Reflects parent club health statement and distinguishes core screening targets from optional checks and broader toy-breed risks."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "aca-affenpinscher-health",
          role: "verified",
          locator: "Eyes, patellas, hips, elbows, Legg-Calve-Perthes, and heart evaluations"
        },
        {
          id: "akc-affenpinscher-breed-profile",
          role: "verified",
          locator: "Luxating patella, heart anomalies, vision problems, hip dysplasia, hot-weather breathing difficulty"
        },
        {
          id: "ofa-legg-calve-perthes",
          role: "verified",
          locator: "Legg-Calve-Perthes disease in miniature and toy breeds"
        },
        {
          id: "pmc-affenpinscher-craniometric-2017",
          role: "verified",
          locator: "Craniometric analysis of brachycephalic hindbrain and Chiari-like malformation / syringomyelia risk factors including Affenpinscher"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "aca-affenpinscher-health",
          role: "cited",
          locator: "Pre-breeding health screening and puppy-buyer verification"
        },
        {
          id: "akc-affenpinscher-breed-profile",
          role: "cited",
          locator: "Heat avoidance, weight management, and routine veterinary care"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-affenpinscher-chic-requirements",
          role: "verified",
          locator: "CHIC requirements for Affenpinscher (AF): Patella Evaluation and Ophthalmologist Evaluation"
        },
        {
          id: "aca-affenpinscher-health",
          role: "verified",
          locator: "Required CHIC tests (eyes and patellas) plus optional OFA hip, elbow, Legg-Calve-Perthes, and heart evaluations"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Matches the official Affenpinscher Club of America health statement and AKC Toy Group health-testing directory."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-affenpinscher-official-standard",
          role: "cited",
          locator: "Jaws/teeth: slightly undershot lower jaw"
        },
        {
          id: "akc-affenpinscher-breed-profile",
          role: "cited",
          locator: "Small-breed dental hygiene"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-affenpinscher-official-standard",
          role: "cited",
          locator: "EARS: High-set V-shaped drop ears"
        },
        {
          id: "akc-affenpinscher-breed-profile",
          role: "cited",
          locator: "Weekly ear checks and cleaning"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-affenpinscher-official-standard",
          role: "cited",
          locator: "SKIN: Close fitting over the whole body"
        },
        {
          id: "akc-affenpinscher-breed-profile",
          role: "cited",
          locator: "Wire-coat brushing and skin checks"
        }
      ],
      verifiedOn: null,
      note: null
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-affenpinscher-breed-profile",
          role: "cited",
          locator: "Temperament, family compatibility, and daily care profile"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability assessment based on size, moderate exercise needs, bold temperament, and intolerance of rough handling."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-affenpinscher-breed-profile",
          role: "verified",
          locator: "German 'monkey dog' translation, 'Diablotin Moustachu' nickname, Brussels Griffon/Miniature Schnauzer ties, 1600s ratter heritage"
        },
        {
          id: "akc-affenpinscher-breed-standard",
          role: "verified",
          locator: "GAIT: comic seriousness"
        },
        {
          id: "fci-affenpinscher-official-standard",
          role: "verified",
          locator: "WEIGHT: appr. 4 to 6 kg"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-affenpinscher-official-standard",
          role: "verified",
          locator: "Origin, height (25-30 cm), weight (4-6 kg), coat"
        },
        {
          id: "akc-affenpinscher-breed-profile",
          role: "verified",
          locator: "Lifespan (12-15 years), apartment suitability, training, child suitability, and grooming"
        },
        {
          id: "aca-affenpinscher-health",
          role: "verified",
          locator: "Primary health screening focus (patellas, eyes, hips, heart)"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Synthesized in original wording without naming registries or source organizations."
    }
  },

  updatedOn: "2026-11-26"
};
