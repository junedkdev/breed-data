import type { Breed } from "../schema/breed.types";

export const standard_schnauzer: Breed = {
  slug: "standard-schnauzer",
  name: "Standard Schnauzer",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Schnauzer",
    "Mittelschnauzer",
    "Wire-Haired Pinscher"
  ],

  group:
    "Pinscher and Schnauzer Type, Molossoid Breeds, and Swiss Mountain and Cattle Dogs; Section 1.2 — Schnauzers (without working trial; also classified in the Working group)",

  origin: {
    country: "Germany",
    region: "Southern Germany (Bavaria and Württemberg)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Standard_Schnauzers.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Standard_Schnauzers.jpg",
      title: "Standard Schnauzers.jpg",
      description:
        "Two adult pepper and salt Standard Schnauzers resting outdoors, displaying their distinctive beards and bushy eyebrows.",
      creator: "Cgoodall",
      uploader: "Cgoodall",
      capturedOn: "2007-03-25",
      uploadedOn: "2007-03-25",
      width: 2592,
      height: 1944,
      licenseId: "public-domain",
      attribution:
        "Photo by Cgoodall, Wikimedia Commons, Public Domain. Source: https://commons.wikimedia.org/wiki/File:Standard_Schnauzers.jpg.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mittelschnauzer_aka_Standard_Schnauzer.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Mittelschnauzer_aka_Standard_Schnauzer.jpg",
      title: "Mittelschnauzer aka Standard Schnauzer.jpg",
      description:
        "A close view of a male pepper and salt Standard Schnauzer, showing the robust, square-built frame and harsh wire coat.",
      creator: "Unknown Uploader",
      uploader: "Pleple2000",
      capturedOn: "2006-06-01",
      uploadedOn: "2006-06-01",
      width: 500,
      height: 462,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo from Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Mittelschnauzer_aka_Standard_Schnauzer.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17"
    }
  ],

  overview: {
    summary:
      "A robust, heavy-set, and highly intelligent German working dog, celebrated for its pepper-and-salt or pure black wire coat, bristly beard, and spirited, incorruptible devotion as a farm and family guardian.",

    description:
      "The Standard Schnauzer is a medium-sized, sturdily built canine combining a distinctly square, muscular frame with an aura of lively intelligence. As the original progenitor of the three related sizing variants, this dog presents a rugged, aristocratic appearance heavily defined by its harsh, dense wire coat. Its unmistakable head is elongated and rectangular, graced with a bristly beard and thick, overarching eyebrows that shade dark, oval eyes. The breed's movement is characterized by a strong, free, and ground-covering stride that reflects its profound athletic endurance. Far more than just a handsome face, the dog possesses a fearless, alert, and deeply loyal temperament. Naturally highly vigilant, it functions as an incorruptible property watchdog and a devoted, engaging companion for active households.",

    history:
      "The origins of this rugged working breed date back to the Middle Ages in Southern Germany, where farmers and tradesmen required an exceptionally versatile dog. Originally known as the Wire-Haired Pinscher, it was utilized for herding livestock, dispatching rodents in stables, and aggressively guarding heavily laden carts traveling to market. The breed's lineage is thought to incorporate early ratting terriers, wire-haired pinschers, and potentially the black German Poodle and Wolfspitz. The transition to its modern name occurred after a particularly striking dog named 'Schnauzer' (derived from the German word 'Schnauze', meaning snout or muzzle) won a prestigious Hanover dog show in 1879, immortalizing the distinctive bearded look. Throughout the late nineteenth and early twentieth centuries, it gained widespread respect as a police dog, dispatch carrier, and Red Cross aide during the World Wars. As the progenitor of the miniature and giant variants, this original medium-sized dog remains a globally cherished working breed and family protector today.",

    originalPurpose:
      "Versatile farm dog, vermin dispatcher, livestock drover, and incorruptible guard dog for merchants and tradesmen.",

    currentRoles: [
      "Vigilant home and property watchdog",
      "Devoted household companion",
      "Canine athlete in agility, obedience, and tracking",
      "Search and rescue partner"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 45,
        max: 50
      },
      female: {
        min: 45,
        max: 50
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 14,
        max: 20
      },
      female: {
        min: 14,
        max: 20
      }
    },

    lifespanYears: {
      min: 13,
      max: 16
    },

    coatType:
      "Wire-haired, harsh, and dense double coat. The undercoat is dense, while the topcoat is flat, rough, and wiry to the touch. Features include a distinct, rough beard on the muzzle and bushy eyebrows.",

    coatLength: "Medium",

    coatColors: [
      "Pure black with a black undercoat",
      "Pepper and salt (ranging from dark iron grey to silver grey, uniformly distributed with a grey undercoat)"
    ],

    sheddingLevel:
      "Low to moderate; the harsh wire coat sheds very little if properly maintained through hand-stripping and regular brushing",

    droolingLevel:
      "Low; tight-fitting, heavily pigmented lips prevent excessive drooling",

    distinctiveFeatures: [
      "Squarely built, robust frame where the height at the withers is approximately equal to the body length",
      "Height at the withers ranging from 45 to 50 cm for both males and females",
      "Working weight ranging uniformly from 14 to 20 kg for both sexes",
      "Strong, elongated, and rectangular head that tapers slightly from the ears to the eyes",
      "Muzzle ending in a blunt wedge, covered by a harsh, bristly beard",
      "Complete, powerful scissor bite with strong jaws",
      "Dark, oval, forward-facing eyes framed by dense, bushy eyebrows",
      "High-set, V-shaped drop ears, carried with the inner edges lying close to the cheeks",
      "Strong, muscular, and slightly arched neck blending cleanly into the shoulders",
      "Short, firm back sloping slightly downward toward the rear",
      "Well-muscled thighs and short, round cat-like feet with dark nails and hard pads"
    ]
  },

  temperament: {
    traits: [
      "Highly intelligent, lively, and engaging with its immediate family",
      "Fearless and alert, functioning as a highly reliable and incorruptible watchdog",
      "Good-natured and deeply loyal, forming exceptionally strong bonds with its handlers",
      "Naturally reserved, observant, and aloof toward unfamiliar strangers",
      "Playful and spirited, requiring purposeful mental and physical engagement",
      "Possesses a strong prey drive toward rodents and small fast-moving animals",
      "Strong-willed and independent-thinking, reflecting its history as an autonomous farm dog",
      "Tolerant and patient with children when properly raised in the household"
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 5,
      independence: 3,
      trainability: 4,
      barking: 3,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; a robust and energetic working breed that demands vigorous daily physical exertion and challenging mental tasks to remain stable and content",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Brisk daily jogging or long-distance trail hiking",
        "Structured obedience and impulse-control training routines",
        "Canine sports such as agility, rally, and tracking trials",
        "Interactive fetch and retrieving games in a securely fenced yard",
        "Search and nosework puzzles to stimulate its high intelligence"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Brush thoroughly two to three times weekly using a slicker brush and metal comb to prevent mats in the dense furnishings (beard and leg hair).",

      bathing:
        "Bathe only when visibly soiled using a harsh-coat texturizing shampoo to prevent softening the protective wire hair.",

      notes: [
        "The coat must be hand-stripped (plucking dead hair from the root) every few months to maintain the correct harsh texture and rich color; clipping will result in a softer, faded coat.",
        "Wipe the bristly beard daily after meals to prevent food debris and moisture buildup.",
        "Inspect the drop ears weekly and gently remove any wax or dirt accumulation to prevent infection.",
        "Trim fast-growing nails every two weeks to support the dog's robust, athletic movement.",
        "Brush teeth several times weekly using canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Moderate; highly intelligent and capable of rapid learning, but possesses a strong independent streak that requires firm, consistent, and positive leadership",

      tips: [
        "Use reward-based training with high-value treats and enthusiastic praise to maintain their interest.",
        "Keep sessions varied, fast-paced, and mentally stimulating; they easily become bored and stubbornly ignore repetitive drilling.",
        "Establish extremely clear boundaries and expectations from puppyhood to prevent them from assuming a dominant household role.",
        "Practice early recall training and leash manners, as their ratting instincts can cause them to bolt after small animals."
      ],

      socialization:
        "Extensive, continuous socialization is crucial. Introduce the puppy safely to varied people, calm dogs, and diverse environments to ensure their natural suspicion of strangers does not escalate into sharp defensiveness or over-guarding."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool climates, where the dense double coat provides excellent insulation and weather protection",
        "Warm climates, provided the coat is stripped properly, shade is available, and strenuous exercise is avoided during peak heat hours"
      ],

      aloneTimeTolerance:
        "Low to moderate; strongly bonded to its family and prone to separation distress, boredom barking, or destructive behavior if left isolated for long workdays."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for active medium-sized working breeds.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age.",
      adult:
        "Two measured meals daily to support steady digestion and energy levels.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output."
    },

    guidelines:
      "Measure daily rations strictly using a digital kitchen scale or standard measuring cup. Adjust amounts to maintain a lean, well-muscled body condition, preventing the heavy-set frame from developing excess fat. Divide daily food into two distinct meals and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a strictly lean body weight to minimize mechanical stress on the joints.",
      "Account for all training treats within the total daily caloric allowance.",
      "Wipe the beard after meals to maintain cleanliness.",
      "Transition between diet formulas gradually over five to seven days to prevent gastrointestinal upset."
    ],

    note:
      "Caloric needs vary based on age, metabolism, and daily exercise intensity. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Standard Schnauzer is a highly robust, sturdy, and generally long-lived working breed with a typical lifespan of 13 to 16 years. Conscientious breeding has kept the breed remarkably healthy, though it shares some genetic vulnerabilities with other mid-sized working dogs. Primary health priorities focus on crucial DNA testing for Dilated Cardiomyopathy (DCM), alongside orthopedic screening for hip dysplasia and annual veterinary eye examinations.",

    commonConditions: [
      "Dilated Cardiomyopathy (DCM) — a severe, inherited condition causing the heart muscle to weaken and become enlarged, leading to exercise intolerance, collapse, or sudden death; screenable via DNA testing",
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints leading to osteoarthritis and stiffness, monitored through pre-breeding radiographic screening",
      "Hereditary ocular conditions — including cataracts and retinal dysplasia, monitored through specialist veterinary ophthalmologist examinations",
      "Autoimmune thyroiditis (hypothyroidism) — an immune-mediated disorder leading to an underactive thyroid, weight gain, and coat changes, screenable via blood testing",
      "Follicular dermatitis (Schnauzer comedo syndrome) — a breed-specific skin condition causing blackheads along the spine, manageable with veterinary shampoos"
    ],

    preventiveCare: [
      "Ensure breeding stock has certified radiographic clearances for hips, specialist eye examinations, and strict DNA testing for Dilated Cardiomyopathy (DCM).",
      "Maintain a lean, muscular body condition throughout life to minimize wear on the hips.",
      "Administer consistent year-round parasite prevention against fleas, ticks, and heartworms.",
      "Thoroughly clean and dry the dense beard and leg furnishings to prevent bacterial or yeast infections in the hair.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "DNA marker test for Dilated Cardiomyopathy (DCM)",
      "Radiographic hip dysplasia evaluation through an accredited national screening program prior to breeding",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist (CAER)",
      "Basic cardiac evaluation (auscultation or echocardiogram)",
      "Thyroid panel evaluation"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste. The breed has powerful jaws and a complete scissor bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the V-shaped drop ears weekly for wax buildup, moisture, or redness. Clean gently using a veterinarian-recommended ear solution, drying the leather thoroughly.",

    skinCare:
      "Part the harsh double coat weekly during brushing to inspect the skin for external parasites, comedones (blackheads), or irritation. Routine hand-stripping promotes healthier skin and coat turnover."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Active individuals and families seeking a highly intelligent, interactive, and robust indoor companion",
      "Experienced dog owners familiar with positive leadership and managing strong-willed, protective temperaments",
      "Those looking for a vigilant, non-aggressive but formidable property watchdog",
      "Canine sports enthusiasts involved in obedience, tracking, or agility",
      "Owners willing to commit to the time and expense of hand-stripping a wire coat"
    ],

    notIdealFor: [
      "Passive handlers or first-time dog owners unaccustomed to setting firm behavioral boundaries",
      "Sedentary individuals looking for a low-energy, highly submissive lap dog",
      "Households that leave a dog isolated for long workdays without mental stimulation",
      "Owners looking for a highly sociable dog park companion that mixes freely and indiscriminately with strangers",
      "Homes with small pet rodents, given the breed's hardwired ratting history"
    ]
  },

  funFacts: [
    "The Standard Schnauzer is the original breed in the Schnauzer family, later used to develop both the Miniature Schnauzer (by crossing with smaller breeds like the Affenpinscher) and the Giant Schnauzer (by crossing with larger herding and molossoid breeds).",
    "Before the breed was officially named the 'Schnauzer', these dogs were simply known in Germany as Wire-Haired Pinschers.",
    "The name 'Schnauzer' is derived from the German word 'Schnauze', meaning snout or muzzle, referencing the dog's prominent, bristly beard and moustache.",
    "Renowned for their intelligence and loyalty, Standard Schnauzers were employed extensively by the German army during World War I and World War II as dispatch carriers and Red Cross aides.",
    "The breed's distinctive 'pepper and salt' coat color is created by banded hairs, where each individual hair shaft features alternating bands of black and white."
  ],

  faq: [
    {
      question: "What is a Standard Schnauzer?",
      answer:
        "The Standard Schnauzer is a medium-sized, square-built German working dog, famous for its harsh wire coat, bristly beard, high intelligence, and fearless devotion as a watchdog and family companion."
    },
    {
      question: "What is the difference between a Standard Schnauzer, Miniature Schnauzer, and Giant Schnauzer?",
      answer:
        "The Standard is the original, medium-sized breed. The Miniature was bred down in size for ratting and companionship, while the Giant was bred up in size for heavy farm work and serious protection duties."
    },
    {
      question: "How tall and heavy is a Standard Schnauzer?",
      answer:
        "Adult males and females typically stand 45 to 50 cm at the withers and weigh uniformly between 14 and 20 kg, maintaining a sturdy, heavy-set, and well-muscled frame."
    },
    {
      question: "How long does a Standard Schnauzer live?",
      answer:
        "With proper nutrition, rigorous health screening for heart issues, and preventive veterinary care, the breed typically enjoys a lifespan of 13 to 16 years."
    },
    {
      question: "Do Standard Schnauzers shed a lot, and how are they groomed?",
      answer:
        "They are low shedders when properly maintained. However, their harsh wire coat requires significant grooming, including regular brushing and periodic hand-stripping (plucking dead hair) to maintain its weather-resistant texture and color."
    },
    {
      question: "Can a Standard Schnauzer live in an apartment?",
      answer:
        "Yes, despite being an active working breed, their moderate size allows them to adapt well to apartment living provided they receive rigorous daily physical and mental exercise outdoors."
    },
    {
      question: "Are Standard Schnauzers aggressive?",
      answer:
        "They are not inherently aggressive, but they are bold, highly protective watchdogs that are naturally suspicious of strangers. Without firm training and early socialization, this protectiveness can become overly territorial."
    },
    {
      question: "What are the main health concerns for a Standard Schnauzer?",
      answer:
        "While generally robust, the breed's most critical health concern is a genetic predisposition to Dilated Cardiomyopathy (DCM), a severe heart condition. They can also face hip dysplasia and hereditary eye disorders."
    },
    {
      question: "What health screenings are recommended for breeding dogs?",
      answer:
        "Mandatory pre-breeding screenings include a DNA test for Dilated Cardiomyopathy (DCM), radiographic evaluations for hip dysplasia, and certified veterinary eye examinations."
    }
  ],

  references: [
    "fci-schnauzer-official-standard",
    "fci-schnauzer-nomenclature",
    "akc-standard-schnauzer-breed-standard",
    "akc-standard-schnauzer-breed-profile",
    "ssca-standard-schnauzer-health",
    "ofa-standard-schnauzer-chic-requirements",
    "wikimedia-standard-schnauzers-cgoodall",
    "wikimedia-mittelschnauzer-pleple2000"
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
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "Standard heading: SCHNAUZER"
        },
        {
          id: "fci-schnauzer-nomenclature",
          role: "verified",
          locator: "Official nomenclature: SCHNAUZER (182)"
        },
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "verified",
          locator: "History: Mittelschnauzer, Wire-Haired Pinscher"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Verified across FCI Standard No. 182, FCI Nomenclature, and AKC profile."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 2 Pinscher and Schnauzer, Molossoid breeds, Swiss Mountain and Cattle Dogs; Section 1.2 Schnauzer, without working trial"
        },
        {
          id: "akc-standard-schnauzer-breed-standard",
          role: "verified",
          locator: "Working Group"
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
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "ORIGIN: Germany; BRIEF HISTORICAL SUMMARY (Southern Germany)"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "verified",
          locator: "About the Breed, History (Wire-Haired Pinscher, 1879 Hanover show), and Roles"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Synthesized in original prose from FCI Standard No. 182 and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS, HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE AND WEIGHT"
        },
        {
          id: "akc-standard-schnauzer-breed-standard",
          role: "verified",
          locator: "General Appearance, Size, Proportion, Substance, Head, Coat, Color, Gait"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Conformation, square build, harsh wire coat, beard/eyebrows, and pepper-and-salt/black colors follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Height at withers: Dogs and bitches 45 to 50 cm."
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Preserved in published unit of centimetres (45 to 50 cm) exactly as specified in the official FCI Standard No. 182."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "Weight: Dogs and bitches 14 to 20 kg."
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Preserved in published unit of kilograms (14 to 20 kg) exactly as specified in the official FCI Standard No. 182."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 13-16 years"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Supported by kennel club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (2/5)"
        },
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "COAT: Hair: The coat should be wiry, harsh and dense. It consists of a dense undercoat and a not too short top coat, lying close to the body."
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "Lips: Black, smooth and tight-fitting to the jaws."
        },
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (1/5)"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Tight-fitting, fully pigmented lips prevent drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Typical characteristics are his lively temperament, coupled with deliberate calmness. A good natured, playful character and a proverbial loyalty to his master. Incorruptible watchdog."
        },
        {
          id: "akc-standard-schnauzer-breed-standard",
          role: "verified",
          locator: "Temperament: The Standard Schnauzer has highly developed senses, intelligence, aptitude for training, fearlessness, endurance and resistance against weather and illness. His nature combines high-spirited temperament with extreme reliability."
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented working farm dog temperament, high loyalty, high intelligence, and steadfast guarding instincts."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active working dog management with intensive wire-coat grooming (hand-stripping) protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "verified",
          locator: "Energy Level (4/5); Exercise Needs (4/5)"
        },
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "UTILIZATION: Guard and Companion Dog"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "cited",
          locator: "Daily exercise and canine sports recommendations"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 45 to 60 minutes of daily activity reflects the exercise demands of an intelligent, athletic working farm breed."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "verified",
          locator: "Adaptability: Adapts Well to Apartment Living (4/5); provided ample exercise is given"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "verified",
          locator: "Exercise and secure indoor/outdoor supervision recommendations"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "COAT: Harsh and dense double coat provides protection"
        },
        {
          id: "akc-standard-schnauzer-breed-standard",
          role: "verified",
          locator: "Temperament: resistance against weather and illness"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "cited",
          locator: "Tolerates Being Alone: Moderate; devoted and deeply loyal family guardian"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food formulated for medium active breeds, portion control"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for active medium-sized working breeds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance and divided meals"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-standard-schnauzer-chic-requirements",
          role: "verified",
          locator: "CHIC Program requirements: Eye Examination, Hip Dysplasia, DCM DNA Test"
        },
        {
          id: "ssca-standard-schnauzer-health",
          role: "verified",
          locator: "Best Practices: Hips, Eyes, DCM (Dilated Cardiomyopathy) DNA test mandatory"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Synthesizes parent club veterinary health records, genetic mandates (DCM), and national health registry screening protocols."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ssca-standard-schnauzer-health",
          role: "verified",
          locator: "Dilated Cardiomyopathy (DCM), Hip Dysplasia, Eye conditions"
        },
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "verified",
          locator: "Autoimmune thyroiditis, Follicular dermatitis (Schnauzer comedo syndrome)"
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
          id: "ssca-standard-schnauzer-health",
          role: "cited",
          locator: "Routine care, mandatory genetic DCM testing, joint protection"
        },
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "cited",
          locator: "Beard cleaning, ear hygiene, and grooming"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to wire-coated working breeds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-standard-schnauzer-chic-requirements",
          role: "verified",
          locator: "CHIC Program required screenings: CAER Eye examination, Radiographic Hip Dysplasia evaluation, Dilated Cardiomyopathy DNA Test"
        },
        {
          id: "ssca-standard-schnauzer-health",
          role: "verified",
          locator: "Mandatory: Hips, Eyes, DCM. Recommended: Elbows, Cardiac Echo, Thyroid."
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
          id: "fci-schnauzer-official-standard",
          role: "cited",
          locator: "Jaws/teeth: Strong upper and lower jaw. Complete scissor bite."
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-schnauzer-official-standard",
          role: "cited",
          locator: "Ears: Drop ears, set high, V-shaped, inner edges lying close to cheeks."
        },
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "cited",
          locator: "Ear hygiene and weekly inspection"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for drop ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "cited",
          locator: "Wire coat hand-stripping, comedo syndrome awareness, and beard cleaning"
        }
      ],
      verifiedOn: null,
      note: "General skin, facial beard, and harsh wire-coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, high intelligence, grooming demands, and watchdog instincts."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "verified",
          locator: "Original Schnauzer, 1879 Hanover show, 'Schnauze' translation, WWI/WWII dispatch and Red Cross history, progenitor of Miniature/Giant"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Verified historical folklore and foundation facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-schnauzer-official-standard",
          role: "verified",
          locator: "Origin, height (45-50 cm), weight (14-20 kg), coat, and colors"
        },
        {
          id: "akc-standard-schnauzer-breed-profile",
          role: "verified",
          locator: "Lifespan (13-16 years), apartment living, watchdog ability, child suitability, and grooming (hand-stripping)"
        },
        {
          id: "ssca-standard-schnauzer-health",
          role: "verified",
          locator: "Main health concerns (DCM, Hips) and recommended health screening panel"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and veterinary data without naming registries in prose."
    }
  },

  updatedOn: "2026-11-17"
};
