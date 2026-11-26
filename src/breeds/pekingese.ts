import type { Breed } from "../schema/breed.types";

export const pekingese: Breed = {
  slug: "pekingese",
  name: "Pekingese",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Peke",
    "Lion Dog",
    "Peking Lion Dog",
    "Foo Dog"
  ],

  group: "Companion and toy dogs",

  origin: {
    country: "China",
    region:
      "Beijing, China, with later modern breed development in Great Britain"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pekingese002.JPG",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Pekingese002.JPG",
      title: "Pekingese002.JPG",
      description:
        "A standing adult Pekingese photographed outdoors, showing its straight double coat, feathered legs, and short facial profile.",
      creator: "Hugo.arg",
      uploader: "Hugo.arg",
      capturedOn: "2009-01-01",
      uploadedOn: "2009-01-04",
      width: 1943,
      height: 1547,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Hugo.arg, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Pekingese002.JPG. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bailey_Pekingese.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Bailey_Pekingese.jpg",
      title: "Bailey Pekingese.jpg",
      description:
        "Close portrait of a fawn Pekingese displaying its dark facial mask, full neck ruff, and wide-set dark eyes.",
      creator: "Dirk",
      uploader: "Flickr upload bot",
      capturedOn: "2007-11-22",
      uploadedOn: "2008-10-21",
      width: 1280,
      height: 1202,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Dirk, Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:Bailey_Pekingese.jpg. License: https://creativecommons.org/licenses/by/2.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    }
  ],

  overview: {
    summary:
      "A compact, solid-boned toy companion from China recognized by its broad flat face, full neck mane, self-possessed manner, and unhurried rolling walk.",

    description:
      "The Pekingese is a low, sturdy companion dog that feels unexpectedly dense and muscular in the hands despite its small height. Its body is noticeably broader across the ribs and chest than through the waist and hindquarters, supported by short, thick, gently bowed forelegs that create a smooth, unhurried rolling stride. The large, wide head has a flat crown, a very short muzzle, and round, dark eyes set far apart. A straight double coat forms a thick ruff around the neck and shoulders without becoming so heavy that it hides body shape or hinders movement. Around familiar people, this breed is deeply devoted and quietly affectionate, yet it keeps an independent, dignified outlook and prefers calm, respectful handling.",

    history:
      "Developed over more than a thousand years inside the imperial courts of Beijing, the Pekingese was treasured as a palace companion closely tied to Chinese royal households and lion symbolism. For generations, these small dogs lived behind palace walls and remained largely unknown outside China. That isolation ended in 1860 during the Second Opium War, when British and French forces entered the Old Summer Palace outside Beijing and recovered five surviving dogs. Taken to England and presented to Queen Victoria and British nobles, those foundation animals launched modern breeding programs in Britain and later North America, shaping the companion breed known around the world today.",

    originalPurpose:
      "Palace lapdog and alert indoor companion bred for Chinese imperial households.",

    currentRoles: [
      "Devoted indoor household companion and lapdog",
      "Alert home watchdog"
    ]
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "in",
      male: {
        min: 6,
        max: 9
      },
      female: {
        min: 6,
        max: 9
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: null,
        max: 14
      },
      female: {
        min: null,
        max: 14
      }
    },

    lifespanYears: {
      min: 12,
      max: 14
    },

    coatType:
      "Moderately long, straight double coat with a coarse outer layer and a dense, softer undercoat, forming a ruff around the neck and shoulders plus long feathering on the ears, legs, toes, and tail; coat volume should remain practical and never restrict movement.",

    coatLength: "Long",

    coatColors: [
      "Fawn",
      "Red",
      "Sable",
      "Black",
      "Black and tan",
      "Cream",
      "White",
      "Parti-color (evenly broken markings)",
      "Dark facial mask or self-colored face with black nose, lips, and eye rims; albino, liver, and merle are excluded"
    ],

    sheddingLevel:
      "Moderate; drops hair steadily through the year with heavier seasonal undercoat shedding",

    droolingLevel:
      "Low; tight lips keep drooling minimal during normal rest, though panting increases in warm weather",

    distinctiveFeatures: [
      "Small, pear-shaped build that is wide and deep through the chest and lighter in the rear, feeling unexpectedly heavy when lifted",
      "Stands 6 to 9 inches tall at the shoulder with adult weight capped at 14 pounds",
      "Broad, flat-topped skull with a very short muzzle and firm lips that cover the teeth and tongue",
      "Clear, round, dark eyes set wide apart and free of obvious surface irritation",
      "Heart-shaped drop ears set level with the top of the skull and framed by long fringes",
      "Straight double coat with a lion-like ruff around the shoulders that does not obscure body lines or impede walking",
      "Short, stout, slightly bowed front legs that produce a steady, rolling stride",
      "High-set, richly feathered tail arched cleanly over the back"
    ]
  },

  temperament: {
    traits: [
      "Confident, self-possessed, and proud in everyday bearing",
      "Warmly loyal and deeply bonded to trusted family members",
      "Naturally reserved and cautious around unfamiliar visitors",
      "Bold and fearless despite its small stature",
      "Independent and strong-willed, preferring gentle persuasion over strict commands",
      "Watchful enough to announce arrivals without nonstop barking",
      "Quiet and relaxed indoors, happiest resting near its people",
      "Quick to resent rough handling, teasing, or noisy chaos"
    ],

    scores: {
      affection: 4,
      withChildren: 2,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 3,
      independence: 5,
      trainability: 2,
      barking: 3,
      energy: 2
    }
  },

  care: {
    exercise: {
      level:
        "Low; a calm, short-faced indoor companion that needs only light daily movement and must not be pushed hard in warm weather",

      minutesPerDay: {
        min: 20,
        max: 30
      },

      activities: [
        "Short, unhurried walks on cool sidewalks during mild parts of the day",
        "Light indoor toy play on non-slip floors",
        "Brief supervised time in a shaded, fenced yard",
        "Relaxed indoor companionship in a cool room"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Comb and brush down to the skin several times each week—spending at least an hour weekly—using a pin brush and metal comb to prevent tight mats behind the ears, under the legs, and across the neck ruff.",

      bathing:
        "Bathe every three to four weeks with a gentle canine shampoo, rinse thoroughly, and dry completely with a towel and cool-setting dryer while brushing out tangles.",

      notes: [
        "Wipe and carefully dry the skin fold across the nose bridge every day to stop trapped moisture and skin irritation.",
        "Check the eyes daily for discharge or stray hairs that could rub against the cornea.",
        "Lift and inspect the feathered drop ears each week, cleaning away wax gently with a vet-approved cleanser.",
        "Trim nails every two weeks so excess length does not strain the short front legs.",
        "Brush teeth daily because the compact jaw crowds teeth closely together."
      ]
    },

    training: {
      difficulty:
        "Challenging; smart and observant, yet independent and unhurried about obeying repetitive drills",

      tips: [
        "Keep lessons upbeat and brief—around three to five minutes—using small, high-value food rewards.",
        "Build house-training around a strict outdoor schedule, close supervision, and patient repetition.",
        "Skip harsh scolding or physical pressure, which quickly causes this proud dog to shut down or resist.",
        "Walk on a snug chest harness rather than a neck collar to keep pressure off the windpipe and prominent eyes.",
        "Practice calm handling of paws, ears, and facial folds from puppyhood so daily grooming stays stress-free."
      ],

      socialization:
        "Expose puppies early and gently to friendly visitors, calm dogs, and everyday household sounds so natural reserve does not turn into nervous snapping."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Cool climates where the dense double coat offers natural comfort",
        "Mild, temperate climates with shaded outdoor breaks",
        "Poor fit for hot or humid weather; reliable indoor air conditioning and strict limits on summer outdoor activity are essential"
      ],

      aloneTimeTolerance:
        "Moderate; more self-sufficient than clingy toy breeds and generally settles calmly for a few hours in a cool, secure home, though it still thrives on daily human company."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced small-breed dog food portioned carefully to match a low-activity metabolism and keep body weight lean.",

    feedingFrequency: {
      puppy:
        "Three to four small, measured meals per day until six months old to keep blood sugar steady.",
      adult:
        "Two measured meals per day to maintain healthy digestion and steady weight.",
      senior:
        "Two controlled meals per day tailored to lower calorie needs and aging joints."
    },

    guidelines:
      "Weigh or measure each meal accurately rather than leaving food out all day. Extra weight quickly worsens breathing effort and adds pressure to the spine and short legs. Wide, shallow dishes make eating easier for a flat muzzle, and cool, fresh water should stay within reach at all times.",

    considerations: [
      "Monitor body condition regularly so ribs remain easy to feel without a thick fat layer.",
      "Count training snacks toward the daily calorie total.",
      "Keep cool water available at all times, especially in warm weather when panting is less efficient.",
      "Switch foods gradually over five to seven days to avoid stomach upset."
    ],

    note:
      "Because this breed burns relatively few calories, work with a veterinarian to set exact daily portions."
  },

  health: {
    overview:
      "Many Pekingese reach 12 to 14 years of age with attentive care, yet their compact, flat-faced, long-backed build brings clear structural health risks. Veterinary literature highlights heightened susceptibility to upper-airway obstruction, corneal ulceration and dry eye, intervertebral disc disease linked to chondrodystrophy, patellar luxation, and facial-fold skin infections. Keeping weight lean, protecting the eyes, and avoiding heat stress are central to everyday health.",

    commonConditions: [
      "Brachycephalic Obstructive Airway Syndrome (BOAS) — conformational narrowing of the nostrils and upper airway that causes noisy breathing, reduced exercise tolerance, and high risk of overheating",
      "Corneal ulceration and brachycephalic ocular disease — scientifically documented predisposition due to shallow eye sockets and wide-open eyelids, increasing risk of surface scratches, pigment changes, and painful ulcers",
      "Keratoconjunctivitis sicca (dry eye) — reduced tear film quality or volume that leads to eye redness, thick discharge, and secondary corneal damage",
      "Intervertebral Disc Disease (IVDD) — scientifically established chondrodystrophy risk linked to the CFA12 FGF4 retrogene, where premature disc degeneration in the long back can trigger neck or back pain and mobility loss",
      "Patellar luxation — slipping of the kneecap out of its normal groove, commonly seen in small breeds and capable of causing intermittent skipping or lameness",
      "Facial skin fold dermatitis (intertrigo) — moisture-driven bacterial or yeast inflammation inside the nose wrinkle when folds are not cleaned and dried",
      "Periodontal disease — crowded teeth in the short jaw accelerate plaque buildup and gum inflammation without regular dental care"
    ],

    preventiveCare: [
      "Keep the dog indoors in air-conditioned spaces during warm or humid weather and avoid midday walks to prevent heatstroke.",
      "Always attach the leash to a comfortable chest harness instead of a collar to protect the airway and eyes.",
      "Keep thorny plants, sharp toys, and stray facial hairs away from the prominent eyes, and seek prompt veterinary care for any squinting or redness.",
      "Use ramps or pet steps for couches and beds and keep body weight lean to reduce sudden strain on the spine and knees.",
      "Clean and dry the facial nose fold daily to prevent moisture buildup and skin irritation.",
      "Keep up with yearly veterinary checkups, dental cleanings, and parasite prevention."
    ],

    recommendedScreenings: [
      "Routine eye examination by a board-certified veterinary ophthalmologist to monitor corneal health, eyelids, and tear production",
      "Clinical orthopedic patellar luxation evaluation by a veterinarian",
      "Clinical cardiovascular auscultation or cardiology checkup",
      "Clinical respiratory assessment for airway airflow and nostril openness",
      "DNA testing for the CFA12 FGF4 retrogene (CDDY/IVDD) to inform breeding decisions"
    ],

    dentalCare:
      "Brush teeth daily with pet-safe enzymatic toothpaste and plan routine veterinary dental cleanings, as the short, crowded jaw traps plaque rapidly.",

    earCare:
      "Check under the long ear fringes every week for moisture, odor, or wax, and clean gently with a veterinarian-approved ear rinse.",

    skinCare:
      "Part the coat down to the skin during weekly brushing to spot hidden mats or irritation, and clean and dry the facial nose wrinkle every day."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: false,
    seniorOwners: true,
    activeOwners: false,
    apartmentLiving: true,

    idealFor: [
      "Calm adults or older owners who want a quiet, devoted indoor companion",
      "Apartment residents looking for a small, low-exercise dog",
      "People who enjoy an independent, dignified pet with a strong personality",
      "Owners ready for consistent coat brushing, daily facial-fold care, and climate-controlled living",
      "Quiet households without rowdy toddlers or large, boisterous pets"
    ],

    notIdealFor: [
      "Homes with young children who may hug tightly, drop the dog, or accidentally bump its eyes or back",
      "Runners, hikers, or outdoor enthusiasts wanting an athletic trail companion",
      "New dog owners expecting quick, eager obedience and effortless house-training",
      "Hot, humid homes without dependable air conditioning",
      "Busy households unable to keep up with weekly thorough brushing and routine eye and dental care"
    ]
  },

  funFacts: [
    "Ancient Chinese artisans and court breeders shaped the breed to echo the guardian lion statues associated with imperial palaces and Buddhist temples.",
    "For centuries, owning a Pekingese was reserved for China's imperial court, and strict palace rules guarded the dogs from outsiders.",
    "Modern Western lines trace back to five dogs recovered from Beijing's Old Summer Palace in 1860 and brought to England.",
    "One of those five dogs, nicknamed 'Looty', became a celebrated pet of Queen Victoria at Windsor Castle.",
    "The breed's slow, rolling walk comes from its broad chest, slightly bowed front legs, and lighter rear quarters."
  ],

  faq: [
    {
      question: "What kind of dog is a Pekingese?",
      answer:
        "A Pekingese is a small, solid-boned toy companion originally bred for China's imperial court, known for its flat face, lion-like neck mane, calm indoor nature, and self-possessed personality."
    },
    {
      question: "How big does a Pekingese get?",
      answer:
        "Adults typically stand 6 to 9 inches tall at the shoulder and weigh up to 14 pounds, feeling surprisingly sturdy and dense when picked up."
    },
    {
      question: "What is the typical lifespan of a Pekingese?",
      answer:
        "With lean weight management, cool living conditions, and regular veterinary care, a Pekingese usually lives 12 to 14 years."
    },
    {
      question: "How much grooming does a Pekingese need?",
      answer:
        "Expect regular upkeep: the straight double coat sheds moderately and needs thorough brushing several times a week to avoid mats, while the nose wrinkle must be wiped and dried daily."
    },
    {
      question: "Is a Pekingese a good apartment dog?",
      answer:
        "Yes. Its compact size, modest exercise needs, and relaxed indoor temperament suit apartments well, as long as air conditioning keeps the home cool in warm months."
    },
    {
      question: "Do Pekingese get along with children?",
      answer:
        "They usually do best in adult homes or with calm, older children who handle them gently, because they dislike rough play and have vulnerable eyes and backs."
    },
    {
      question: "Are Pekingese easy to train?",
      answer:
        "Not usually. They are bright but independent and slow to house-train, responding best to brief, upbeat sessions with tasty rewards and steady patience."
    },
    {
      question: "What health problems are most common in Pekingese?",
      answer:
        "The main risks stem from their compact, flat-faced build: breathing and heat-sensitivity issues (BOAS), corneal ulcers and dry eye, spinal disc disease (IVDD), patellar luxation, and facial-fold skin irritation."
    }
  ],

  references: [
    "natureserve-canis-lupus-familiaris",
    "fci-pekingese-official-standard",
    "fci-pekingese-nomenclature",
    "akc-pekingese-breed-standard",
    "akc-pekingese-breed-profile",
    "pca-pekingese-health",
    "ofa-pekingese-chic-requirements",
    "ofa-cddy-ivdd",
    "pmc-vetcompass-corneal-ulceration-2017",
    "the-dog-api",
    "wikimedia-pekingese-hugo-arg",
    "wikimedia-pekingese-bailey-dirk"
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
          id: "fci-pekingese-official-standard",
          role: "verified",
          locator: "Standard heading: PEKINGESE"
        },
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "About the Breed and History: Peke, Lion Dog, Peking Lion Dog"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names: Lion Dog, Pekes, Foo Dog"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Cross-checked across FCI Standard No. 207, AKC breed profile, and The Dog API (which also lists Foo Dog)."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-pekingese-official-standard",
          role: "verified",
          locator: "CLASSIFICATION F.C.I.: Group 9 Companion and Toy Dogs; Section 8 Japan Chin and Pekingese; Without working trial"
        },
        {
          id: "akc-pekingese-breed-standard",
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
        "User-facing group label states Companion and toy dogs without registry or section identifiers."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-pekingese-official-standard",
          role: "verified",
          locator: "ORIGIN: China; PATRONAGE: Great Britain"
        },
        {
          id: "fci-pekingese-nomenclature",
          role: "verified",
          locator: "Country of origin: China; Patronage: Great Britain"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: China"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-pekingese-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT (published 2026-10-06)"
        },
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "About the Breed and History (Chinese imperial courts, 1860 Old Summer Palace, Queen Victoria)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Written in original prose from FCI Standard No. 207 (2026-10-06), AKC records, and cross-checked against The Dog API."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-pekingese-official-standard",
          role: "verified",
          locator: "HEAD, EYES, BODY, TAIL, LIMBS, COAT (welfare wording restricting excessive coat), COLOUR (albino, liver, or merle unacceptable), SIZE AND WEIGHT"
        },
        {
          id: "akc-pekingese-breed-standard",
          role: "verified",
          locator: "General Appearance, Neck/Body/Tail, Forequarters, Hindquarters, Coat, Color, Gait, Disqualification"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Incorporates the 2026-10-06 FCI Standard No. 207 coat-volume and eye-health wording and exclusion of albino, liver, and merle; disagrees with The Dog API's generic coat-color list, which included Liver and Merle."
    },

    "physical.height": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "Height: 6-9 inches"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric: 15-23 cm"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Preserved in exact published inches (6 to 9 in) from AKC breed profile. Neither FCI Standard No. 207 nor the AKC PDF standard sets a numerical height; The Dog API lists converted metric 15-23 cm."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-pekingese-breed-standard",
          role: "verified",
          locator: "Disqualification: Weight over 14 pounds."
        },
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "Weight: up to 14 pounds"
        },
        {
          id: "fci-pekingese-official-standard",
          role: "verified",
          locator: "WEIGHT: Ideal weight not exceeding 5 kg for males and 5.4 females."
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.weight.metric: 3.2-6.4 kg"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Kept in exact published pounds with min: null, max: 14 per AKC standard disqualification ('Weight over 14 pounds') and profile ('up to 14 pounds') to stay unit-consistent with height in inches. FCI Standard No. 207 sets lower upper limits (not exceeding 5 kg for males and 5.4 kg for females), and The Dog API lists a converted 3.2-6.4 kg range."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12-14 years"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span: 12-14 years"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Consistent across AKC breed profile and The Dog API."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "Shedding: Moderate"
        },
        {
          id: "fci-pekingese-official-standard",
          role: "verified",
          locator: "COAT: Moderately long, straight with mane; thick, softer undercoat."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-pekingese-official-standard",
          role: "verified",
          locator: "Lips: Level, must not show teeth or tongue."
        },
        {
          id: "akc-pekingese-breed-profile",
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
          id: "fci-pekingese-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Fearless, loyal, aloof, neither timid nor aggressive."
        },
        {
          id: "akc-pekingese-breed-standard",
          role: "verified",
          locator: "Temperament: regal dignity, intelligence, self-importance, good natured, opinionated, affectionate"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament: Loyal, independent, confident, courageous, affectionate, alert"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
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
          id: "akc-pekingese-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Practical daily care guidance combining long double-coat upkeep, facial-fold hygiene, and brachycephalic heat precautions."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "Energy Level: Calm / low exercise needs"
        },
        {
          id: "fci-pekingese-official-standard",
          role: "verified",
          locator: "UTILIZATION: Companion Dog"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "cited",
          locator: "Low-energy companion exercise guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 20 to 30 minutes daily suited to a low-energy, short-faced toy breed."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "Breed profile: compact, low-energy indoor companion"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "Supervised outdoor time and heat-management precautions"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "Prefers cool temperatures; sensitive to heat and humidity due to short muzzle and heavy coat"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "cited",
          locator: "Independent companion temperament"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "cited",
          locator: "Toy-breed nutrition and weight-management guidance"
        }
      ],
      verifiedOn: null,
      note:
        "General small-breed feeding and weight-control guidance."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "cited",
          locator: "Small-breed life-stage meal scheduling"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pmc-vetcompass-corneal-ulceration-2017",
          role: "verified",
          locator: "VetCompass primary-care study: elevated corneal ulcerative disease risk in brachycephalic breeds including Pekingese"
        },
        {
          id: "ofa-cddy-ivdd",
          role: "verified",
          locator: "Breeds affected by 12-FGF4R (CDDY/IVDD): Pekingese"
        },
        {
          id: "pca-pekingese-health",
          role: "verified",
          locator: "Pekingese Club of America health resources"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Distinguishes peer-reviewed breed predispositions (ocular surface disease, CDDY/IVDD) from conformational risks (BOAS, facial-fold dermatitis)."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pmc-vetcompass-corneal-ulceration-2017",
          role: "verified",
          locator: "Corneal ulcerative disease predisposition in Pekingese"
        },
        {
          id: "ofa-cddy-ivdd",
          role: "verified",
          locator: "CFA12 FGF4 retrogene causing chondrodystrophy and intervertebral disc disease (IVDD) in Pekingese"
        },
        {
          id: "pca-pekingese-health",
          role: "verified",
          locator: "Parent club health archive covering airway, ocular, orthopedic, and skin concerns"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "pca-pekingese-health",
          role: "cited",
          locator: "Preventive eye, airway, spinal, and fold care"
        },
        {
          id: "akc-pekingese-breed-profile",
          role: "cited",
          locator: "Heat avoidance, harness use, and weight management"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "general_guidance",
      sources: [
        {
          id: "ofa-pekingese-chic-requirements",
          role: "cited",
          locator: "OFA breed health listing for Pekingese (PE); note AKC Toy Group health-testing directory currently lists no mandatory national breed club tests"
        },
        {
          id: "ofa-cddy-ivdd",
          role: "cited",
          locator: "Available DNA test for 12-FGF4R (CDDY/IVDD) in Pekingese"
        },
        {
          id: "pca-pekingese-health",
          role: "cited",
          locator: "Clinical eye, patella, cardiac, and airway health monitoring"
        }
      ],
      verifiedOn: null,
      note:
        "Because AKC's Toy Group health-testing directory currently lists no parent-club mandatory tests for Pekingese, these screenings are framed as recommended veterinary and DNA checks rather than mandatory CHIC requirements."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-pekingese-official-standard",
          role: "cited",
          locator: "HEAD: Short, broad muzzle and jaw"
        },
        {
          id: "akc-pekingese-breed-profile",
          role: "cited",
          locator: "Routine small-breed dental care"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-pekingese-official-standard",
          role: "cited",
          locator: "EARS: Heart-shaped, set level with skull, carried close to head with long feathering"
        },
        {
          id: "akc-pekingese-breed-profile",
          role: "cited",
          locator: "Weekly ear inspection and cleaning"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "cited",
          locator: "Double-coat brushing and facial-fold hygiene"
        }
      ],
      verifiedOn: null,
      note: null
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "cited",
          locator: "Temperament, family compatibility, and care needs"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability summary reflecting low exercise needs, high grooming/climate demands, and independent temperament."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "Imperial Chinese court origins, guardian lion symbolism, 1860 Old Summer Palace recovery, Queen Victoria's dog 'Looty', rolling gait"
        },
        {
          id: "fci-pekingese-official-standard",
          role: "verified",
          locator: "GAIT/MOVEMENT and BRIEF HISTORICAL SUMMARY"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pekingese-breed-standard",
          role: "verified",
          locator: "Weight limit (14 lb), coat, and gait"
        },
        {
          id: "akc-pekingese-breed-profile",
          role: "verified",
          locator: "Height (6-9 in), lifespan (12-14 years), grooming, apartment living, child suitability, and training"
        },
        {
          id: "pmc-vetcompass-corneal-ulceration-2017",
          role: "verified",
          locator: "Corneal ulceration risk in Pekingese"
        },
        {
          id: "ofa-cddy-ivdd",
          role: "verified",
          locator: "CDDY/IVDD risk in Pekingese"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Synthesized in original wording without naming registries or source organizations."
    }
  },

  updatedOn: "2026-11-26"
};
