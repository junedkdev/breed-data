import type { Breed } from "../schema/breed.types";

export const boston_terrier: Breed = {
  slug: "boston-terrier",
  name: "Boston Terrier",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Boston Bull",
    "Boston Bull Terrier",
    "Boxwood"
  ],

  group:
    "Companion and Toy Dogs; Section 11 — Small Molossian type Dogs (without working trial; also classified in the Non-Sporting group)",

  origin: {
    country: "United States",
    region:
      "Boston, Massachusetts (developed from English Bulldog and White English Terrier crosses)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Boston_Terrier_DSC_0004_(16399046489).jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Boston_Terrier_DSC_0004_(16399046489).jpg",
      title: "Boston Terrier DSC 0004 (16399046489).jpg",
      description:
        "A Boston Terrier standing indoors, clearly displaying its distinctive tuxedo-like markings and erect ears.",
      creator: "Pets Adviser",
      uploader: "Томасина",
      capturedOn: "2015-02-16",
      uploadedOn: "2015-03-21",
      width: 3008,
      height: 2000,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Pets Adviser, Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:Boston_Terrier_DSC_0004_(16399046489).jpg. License: https://creativecommons.org/licenses/by/2.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Boston_Terrier_Dog_002.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Boston_Terrier_Dog_002.jpg",
      title: "Boston Terrier Dog 002.jpg",
      description:
        "An adult Boston Terrier outdoors at the beach, highlighting the sturdy, short-backed build and broad, flat skull.",
      creator: "Ed Siasoco",
      uploader: "Flickr upload bot",
      capturedOn: "2007-06-24",
      uploadedOn: "2008-11-02",
      width: 1500,
      height: 2100,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Ed Siasoco, Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:Boston_Terrier_Dog_002.jpg. License: https://creativecommons.org/licenses/by/2.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17"
    }
  ],

  overview: {
    summary:
      "A lively, highly intelligent, and sturdy American companion dog famously known as 'The American Gentleman' for its impeccable tuxedo-like markings and excellent disposition.",

    description:
      "The Boston Terrier is a compact, short-tailed, and well-balanced dog combining agility, intelligence, and a sturdy, square-proportioned frame. It is most heavily characterized by its striking 'tuxedo' markings—a crisp white chest, muzzle band, and facial blaze set against a smooth brindle, seal, or black coat. The head is distinctively square and flat on top, free of wrinkles, with a short, wide muzzle that gives the face a slightly flat (brachycephalic) profile. Large, round, dark eyes are set widely apart, conveying a remarkably expressive, kind, and alert intelligence. The body is short-backed and square, supported by strong, straight limbs that allow for a graceful, rhythmic, and powerful stride. With its lively, eager-to-please nature and highly sociable personality, the Boston Terrier thrives as a loving, entertaining indoor companion.",

    history:
      "The Boston Terrier is a truly American breed, developed in the late nineteenth century in Boston, Massachusetts. Its lineage traces back to crosses between the English Bulldog and the now-extinct White English Terrier, a combination originally intended for fierce pit-fighting and ratting. A pivotal ancestor named 'Hooper's Judge,' imported to Boston in 1865, is widely considered the patriarch of the breed. As the dogs were selectively bred for smaller size and a gentler, more refined disposition, they rapidly transformed from tough fighters into affectionate companions. By the early twentieth century, they became immensely popular across the United States, earning the nickname 'The American Gentleman' due to their dapper markings and excellent manners. The breed was officially recognized in 1893, making it the first American breed to achieve such status, and it remains a proud symbol of American canine history today.",

    originalPurpose:
      "Originally developed from pit-fighting ancestors, but very quickly refined to serve exclusively as a devoted household companion and lap dog.",

    currentRoles: [
      "Devoted household companion",
      "Therapy and emotional support dog",
      "Canine athlete in agility, obedience, and rally (in temperature-controlled settings)",
      "Vigilant home alarm dog"
    ]
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "in",
      male: {
        min: 15,
        max: 17
      },
      female: {
        min: 15,
        max: 17
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 12,
        max: 25
      },
      female: {
        min: 12,
        max: 25
      }
    },

    lifespanYears: {
      min: 11,
      max: 13
    },

    coatType:
      "Short, smooth, bright, and fine in texture, lying close to the body and shedding very little.",

    coatLength: "Short",

    coatColors: [
      "Brindle with white markings",
      "Seal (appears black but casts a red reflection in bright light) with white markings",
      "Black with white markings",
      "Required white markings include a white muzzle band, a white blaze between the eyes, and a white forechest"
    ],

    sheddingLevel:
      "Low; the short, fine coat sheds minimally and requires very little maintenance",

    droolingLevel:
      "Low; the chops are of good depth but completely cover the teeth without being pendulous, preventing excessive drooling",

    distinctiveFeatures: [
      "Compact, squarely built frame that appears neither spindly nor coarse, balancing bone and muscle beautifully",
      "Height typically ranges from 15 to 17 inches at the withers",
      "Weight is strictly divided into classes: under 15 pounds, 15 to 20 pounds, and 20 to a maximum of 25 pounds",
      "Square, flat skull free of wrinkles, with a well-defined stop and abrupt brow",
      "Short, square, wide, and deep muzzle that is parallel to the top of the skull",
      "Broad, square jaws with a bite that is either even or sufficiently undershot to square the muzzle",
      "Large, round, dark eyes set wide apart, looking directly forward",
      "Small, erect ears situated as near to the corners of the skull as possible (can be natural or cropped)",
      "Deep chest with well-sprung ribs carried well back to a short loin",
      "Low-set, short, fine, and tapering tail that is either straight or screw-shaped, never carried above the horizontal",
      "Small, round, compact feet with well-arched toes"
    ]
  },

  temperament: {
    traits: [
      "Friendly, lively, and highly intelligent",
      "Deeply affectionate and devoted to its human family",
      "Alert and watchful, making an excellent but non-aggressive alarm barker",
      "Highly sociable with strangers, often welcoming guests with enthusiasm",
      "Playful and comical, possessing a spirited sense of humor",
      "Adaptable and even-tempered in domestic settings",
      "Can occasionally be stubborn during training if bored or unmotivated",
      "Highly sensitive to the tone of its handler's voice and corrections"
    ],

    scores: {
      affection: 5,
      withChildren: 5,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: 3,
      independence: 3,
      trainability: 4,
      barking: 2,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "Moderate; requires daily activity to stay fit, but extreme endurance or strenuous running must be avoided due to the breed's brachycephalic (flat-faced) anatomy and sensitivity to heat",

      minutesPerDay: {
        min: 30,
        max: 45
      },

      activities: [
        "Daily brisk neighborhood walks in cool or temperate weather",
        "Interactive indoor games such as fetch or gentle tug",
        "Basic obedience exercises and trick training for mental enrichment",
        "Supervised free play in a safely enclosed, shaded yard",
        "Canine sports like agility in indoor, climate-controlled environments"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush once a week using a soft bristle brush or a rubber hound glove to remove loose dead hairs and massage skin oils, keeping the coat bright and shiny.",

      bathing:
        "Bathe only occasionally when visibly soiled, using a gentle canine shampoo to protect the sensitive skin.",

      notes: [
        "The large, prominent eyes are highly vulnerable to dust and scratches; check them daily for signs of redness or irritation.",
        "Wipe the slight facial wrinkles around the muzzle gently with a damp cloth to prevent moisture buildup.",
        "Inspect the small erect ears weekly for dirt or wax.",
        "Trim fast-growing nails every two weeks to support correct foot alignment.",
        "Brush teeth several times weekly with canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Easy to moderate; highly intelligent and eager to please, but can display a stubborn streak if training becomes repetitive or overly harsh",

      tips: [
        "Use positive reinforcement, praise, and highly motivating treats.",
        "Because they are exceptionally sensitive to their owner's tone of voice, harsh verbal reprimands will cause them to shut down and refuse to cooperate.",
        "Keep training sessions brief, fun, and varied to maintain their focus and enthusiasm.",
        "Use a well-fitted body harness rather than a neck collar to avoid pressure on the trachea and eyes during walks."
      ],

      socialization:
        "Introduce the puppy early to varied people, children, other dogs, and urban environments. Their naturally friendly disposition blossoms with proper early exposure, ensuring a confident, outgoing adult."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Highly sensitive to heat and humidity due to its shortened muzzle; requires air conditioning and severely restricted outdoor time in summer",
        "Sensitive to extreme cold due to the short single coat; requires a sweater or jacket during winter walks"
      ],

      aloneTimeTolerance:
        "Low to moderate; bred specifically for human companionship, they form deep bonds and can experience separation anxiety or destructive chewing if left isolated for excessive periods."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for small to medium breeds, closely portion-controlled to prevent obesity.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age.",
      adult:
        "Two measured meals daily to support steady digestion and energy.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output."
    },

    guidelines:
      "Measure daily rations strictly using a digital kitchen scale or standard measuring cup. Obesity is a serious risk that exacerbates breathing difficulties and joint strain. Provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a strictly lean, well-muscled body condition; you should easily feel the ribs without pressing hard.",
      "Account for all training treats within the total daily caloric allowance.",
      "Ensure fresh water is always available, particularly in warm environments, as flat-faced breeds pant very inefficiently.",
      "Use shallow food bowls to accommodate the flat brachycephalic muzzle."
    ],

    note:
      "Caloric needs vary significantly based on age, metabolism, and daily activity. Consult a veterinarian to establish strictly tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Boston Terrier is a relatively robust companion breed with a typical lifespan of 11 to 13 years. Due to its brachycephalic (flat-faced) structure and prominent eyes, it is predisposed to specific anatomical health challenges. Primary health priorities focus on protecting the highly vulnerable eyes, managing respiratory function, and screening for hereditary conditions such as deafness, patellar luxation, and juvenile cataracts.",

    commonConditions: [
      "Brachycephalic Airway Obstructive Syndrome (BOAS) — anatomical abnormalities (elongated soft palate, stenotic nares) causing restricted airflow, noisy breathing, and severe heat intolerance",
      "Corneal ulcers and eye injuries — the large, prominent eyes are highly vulnerable to scratches from tall grass, dust, or rough play",
      "Early-onset hereditary juvenile cataracts (HSF4 mutation) — a genetic condition causing lens opacity and vision loss in young dogs, completely screenable via DNA testing",
      "Patellar luxation — intermittent displacement of the kneecap from the femoral groove, causing a 'skipping' gait and potential arthritis",
      "Congenital sensorineural deafness — pigment-associated deafness verifiable in puppies through BAER testing",
      "Hemivertebrae — malformed bones in the spine (common in screw-tailed breeds) that can occasionally cause neurological issues",
      "Allergies and sensitive skin — environmental or food allergies leading to itchy skin or hot spots"
    ],

    preventiveCare: [
      "Strictly avoid exposing the dog to extreme heat or humidity to prevent fatal respiratory distress (heatstroke).",
      "Confirm that breeding stock has certified clinical clearances for patellas, specialist eye exams, BAER hearing tests, and HSF4 DNA clearances.",
      "Use a well-fitted body harness rather than a neck collar to prevent pressure on the fragile trachea and prominent eyes.",
      "Protect the prominent eyes from injury by avoiding thorny brush and monitoring interactions with cats or other dogs.",
      "Maintain a lean weight to minimize mechanical stress on the knees and spine.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist (CAER)",
      "Clinical patellar luxation orthopedic evaluation by a veterinarian",
      "Brainstem Auditory Evoked Response (BAER) hearing evaluation",
      "DNA marker test for Early-onset Hereditary Juvenile Cataracts (HSF4 gene)"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste. The breed has a broad, undershot jaw; periodic veterinary dental assessments are necessary to preserve gum health.",

    earCare:
      "Inspect the small erect ears weekly for dust, wax accumulation, or redness. Clean gently using a veterinarian-recommended ear solution.",

    skinCare:
      "The short coat requires minimal care, but the facial wrinkles must be wiped clean and thoroughly dried regularly to prevent bacterial fold infections."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: false,
    apartmentLiving: true,

    idealFor: [
      "First-time dog owners, seniors, and families seeking a highly affectionate, entertaining indoor companion",
      "Apartment or condominium dwellers looking for an excellent, adaptable pet with moderate exercise needs",
      "Individuals who appreciate a dog with a lively sense of humor and a deep desire to be close to its owners",
      "Homes where the dog can be kept in a climate-controlled, air-conditioned environment during the summer"
    ],

    notIdealFor: [
      "Highly active individuals seeking a long-distance jogging, hiking, or strenuous outdoor sporting partner",
      "Owners who leave a dog home alone in isolation for long workdays",
      "Individuals living in un-air-conditioned homes in extremely hot, humid climates",
      "People looking for an outdoor-only dog or a fierce guard dog"
    ]
  },

  funFacts: [
    "The Boston Terrier was officially recognized in 1893, making it the very first breed developed entirely in the United States to earn official registry recognition.",
    "Because of their impeccable tuxedo-like markings and famously excellent manners, the breed earned the enduring nickname 'The American Gentleman'.",
    "Helen Keller, famed American author and disability rights advocate, was a devoted owner of a Boston Terrier named 'Phiz', gifted to her by her classmates.",
    "The breed serves as the official mascot of Boston University (a Boston Terrier named Rhett) and Wofford College in South Carolina.",
    "In 1979, the state legislature officially named the Boston Terrier the state dog of Massachusetts."
  ],

  faq: [
    {
      question: "What is a Boston Terrier?",
      answer:
        "The Boston Terrier is a compact, highly intelligent, and affectionate American companion breed, famous for its tuxedo-like markings, flat face, and lively, even-tempered disposition."
    },
    {
      question: "How tall and heavy is a Boston Terrier?",
      answer:
        "They typically stand 15 to 17 inches tall at the withers. Their weight is strictly classified in categories up to 25 pounds, generally ranging between 12 and 25 pounds in lean condition."
    },
    {
      question: "How long does a Boston Terrier live?",
      answer:
        "With strict weight management, heat avoidance, and preventive veterinary care, the breed typically enjoys a healthy lifespan of 11 to 13 years."
    },
    {
      question: "Do Boston Terriers shed a lot, and how are they groomed?",
      answer:
        "They are low shedders. Their short, smooth coat requires very little maintenance—usually just a weekly brushing with a hound glove and occasional baths. However, their facial wrinkles should be wiped clean regularly."
    },
    {
      question: "Can a Boston Terrier live in an apartment?",
      answer:
        "Yes, they make exceptional apartment dogs. Their moderate exercise needs, compact size, and adaptable nature make them perfectly suited for urban living, provided the home is air-conditioned."
    },
    {
      question: "Are Boston Terriers good with children?",
      answer:
        "Yes, they are exceptionally good with children. They are sturdy, playful, and affectionate, making them wonderful family companions when raised together with respectful children."
    },
    {
      question: "Are Boston Terriers hard to train?",
      answer:
        "They are highly intelligent and eager to please, making them relatively easy to train. However, they can be sensitive to harsh tones, so positive reinforcement and praise are essential for success."
    },
    {
      question: "What are the main health concerns for a Boston Terrier?",
      answer:
        "Primary health concerns relate to their flat (brachycephalic) faces, which cause breathing difficulties and extreme heat intolerance. They are also prone to eye injuries, slipping kneecaps (patellar luxation), deafness, and juvenile cataracts."
    }
  ],

  references: [
    "fci-boston-terrier-official-standard",
    "fci-boston-terrier-nomenclature",
    "akc-boston-terrier-breed-standard",
    "akc-boston-terrier-breed-profile",
    "ofa-boston-terrier-chic-requirements",
    "wikimedia-boston-terrier-dsc-0004",
    "wikimedia-boston-terrier-dog-002"
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
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "History: Boston Bull, Boston Bull Terrier, Boxwood"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Verified across AKC profile."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-boston-terrier-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 9 Companion and Toy Dogs; Section 11 Small Molossian type Dogs; Without working trial"
        },
        {
          id: "akc-boston-terrier-breed-standard",
          role: "verified",
          locator: "Non-Sporting Group"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-boston-terrier-official-standard",
          role: "verified",
          locator: "ORIGIN: U.S.A.; BRIEF HISTORICAL SUMMARY"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-boston-terrier-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "About the Breed, History (Hooper's Judge, English Bulldog x White English Terrier), and Roles"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Synthesized in original prose from FCI Standard No. 140 and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-boston-terrier-official-standard",
          role: "verified",
          locator: "HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, WEIGHT"
        },
        {
          id: "akc-boston-terrier-breed-standard",
          role: "verified",
          locator: "General Appearance, Size, Proportion, Substance, Head, Coat, Color, Gait"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Conformation, square build, flat face, tuxedo markings, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Height: 15-17 inches"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Preserved in published unit of inches (15 to 17 inches) exactly as specified in the official AKC breed profile. (Standards do not strictly limit height, focusing instead on weight classes and square proportions)."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-boston-terrier-breed-standard",
          role: "verified",
          locator: "Size, Proportion, Substance: Weight is divided by classes as follows: Under 15 pounds; 15 pounds and under 20 pounds; 20 pounds and not to exceed 25 pounds."
        },
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Weight: 12-25 pounds"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Preserved in published unit of pounds (12 to 25 pounds, not exceeding 25 lbs) exactly as specified in the official AKC standard and profile."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 11-13 years"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Supported by kennel club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (2/5)"
        },
        {
          id: "fci-boston-terrier-official-standard",
          role: "verified",
          locator: "COAT: Hair: Short, smooth, bright and fine in texture."
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-boston-terrier-official-standard",
          role: "verified",
          locator: "Lips: The chops are of good depth, but not pendulous, completely covering the teeth when the mouth is closed."
        },
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (1/5)"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Non-pendulous lips securely covering the teeth prevent excessive drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-boston-terrier-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: The Boston Terrier is a friendly and lively dog. The breed has an excellent disposition and a high degree of intelligence, which makes the Boston Terrier an incomparable companion."
        },
        {
          id: "akc-boston-terrier-breed-standard",
          role: "verified",
          locator: "Summary: ... a most dapper and charming American original"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented companion temperament, high family affection, extreme friendliness, and moderate trainability."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active companion dog management with intense brachycephalic heat-stress precautions and eye protection."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Energy Level (4/5); Exercise Needs (4/5); must be kept cool outdoors"
        },
        {
          id: "fci-boston-terrier-official-standard",
          role: "verified",
          locator: "UTILIZATION: Companion"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "cited",
          locator: "Daily exercise recommendations for lively companions"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 30 to 45 minutes of daily activity reflects the moderate exercise demands restricted by brachycephalic breathing limitations."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Adaptability: Adapts Well to Apartment Living (5/5); highly suited for indoor life"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Exercise and indoor supervision recommendations"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Weather adaptation: extremely sensitive to heat and humidity due to flat face; must be kept cool. Also sensitive to cold due to short coat."
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "cited",
          locator: "Tolerates Being Alone: Low to moderate; deeply bonded with family"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food formulated for small to medium breeds, strict portion control"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for small brachycephalic breeds highly prone to obesity and respiratory stress."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance and divided meals"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule to maintain steady digestion."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-boston-terrier-chic-requirements",
          role: "verified",
          locator: "CHIC Program requirements: Eye Examination, Patellar Luxation, BAER Deafness testing, HSF4 DNA Test"
        },
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Health overview: Prominent eyes prone to ulcers, cataracts, patellar luxation, deafness, and BOAS"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Synthesizes national health registry screening protocols and brachycephalic clinical data."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-boston-terrier-chic-requirements",
          role: "verified",
          locator: "Patellar luxation, eye conditions, early-onset hereditary cataracts, deafness"
        },
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Corneal ulcers, BOAS (breathing difficulties in heat), deafness, patellar luxation"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Details documented genetic and conformational conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "cited",
          locator: "Eye protection, harness usage, dental hygiene, heat avoidance, and strict weight control"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to prominent-eyed brachycephalic breeds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-boston-terrier-chic-requirements",
          role: "verified",
          locator: "CHIC Program required screenings: CAER Eye examination, Clinical Patellar Luxation, BAER hearing evaluation, HSF4 DNA Test"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Screenings summarize published parent club and health registry protocols."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-boston-terrier-official-standard",
          role: "cited",
          locator: "Jaws/teeth: Jaws broad and square with short, regular teeth. Even or slightly undershot."
        },
        {
          id: "akc-boston-terrier-breed-profile",
          role: "cited",
          locator: "Routine dental care"
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines for short, broad jaws."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-boston-terrier-official-standard",
          role: "cited",
          locator: "Ears: Small, carried erect, either natural or cropped"
        },
        {
          id: "akc-boston-terrier-breed-profile",
          role: "cited",
          locator: "Ear hygiene and weekly inspection"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for erect ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "cited",
          locator: "Coat brushing and facial wipe downs"
        }
      ],
      verifiedOn: null,
      note: "General skin and facial fold care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, high sociability, and heat sensitivity."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "American Gentleman nickname, 1893 recognition (first US breed), Hooper's Judge, Boston University mascot, state dog of Massachusetts"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Verified historical folklore and foundation facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boston-terrier-breed-standard",
          role: "verified",
          locator: "Origin, height (15-17 in), weight (max 25 lbs), coat, and colors"
        },
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Lifespan (11-13 years), apartment living, housebreaking, child suitability, and grooming"
        },
        {
          id: "ofa-boston-terrier-chic-requirements",
          role: "verified",
          locator: "Main health concerns (Eyes, Patellas, Deafness, Cataracts) and recommended health screening panel"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and veterinary data without naming registries in prose."
    }
  },

  updatedOn: "2026-11-17"
};
