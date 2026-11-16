import type { Breed } from "../schema/breed.types";

export const shih_tzu: Breed = {
  slug: "shih-tzu",
  name: "Shih Tzu",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Chrysanthemum Dog",
    "Lion Dog",
    "Tibetan Lion Dog"
  ],

  group:
    "Companion and Toy Dogs; Section 5 — Tibetan breeds (without working trial; also classified in the Toy and Utility groups)",

  origin: {
    country: "Tibet (China)",
    region:
      "Tibet (with subsequent historical patronage and standard development in Great Britain)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Shih_tzu-Coupe-lion.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Shih_tzu-Coupe-lion.jpg",
      title: "Shih tzu-Coupe-lion.jpg",
      description:
        "An adult Shih Tzu displaying a short 'puppy cut' or 'lion cut' standing outdoors.",
      creator: "Pouchkine75",
      uploader: "Pouchkine75",
      capturedOn: "2021-03-26",
      uploadedOn: "2021-03-26",
      width: 651,
      height: 925,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Pouchkine75, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Shih_tzu-Coupe-lion.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-13"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Shih_Tzu_-_Star_of_Buddha.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Shih_Tzu_-_Star_of_Buddha.jpg",
      title: "Shih Tzu - Star of Buddha.jpg",
      description:
        "A close-up of a Shih Tzu's face, showcasing the distinctive facial hair and a white 'Star of Buddha' marking on the forehead.",
      creator: "Avesterfelt",
      uploader: "Avesterfelt",
      capturedOn: "2023-05-07",
      uploadedOn: "2023-05-07",
      width: 953,
      height: 1267,
      licenseId: "cc0-1.0",
      attribution:
        "Photo by Avesterfelt, Wikimedia Commons, CC0 1.0 Universal Public Domain Dedication. Source: https://commons.wikimedia.org/wiki/File:Shih_Tzu_-_Star_of_Buddha.jpg. License: https://creativecommons.org/publicdomain/zero/1.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-13"
    }
  ],

  overview: {
    summary:
      "A sturdy, lively, and alert toy dog of Tibetan origin, famous for its luxurious long double coat, distinctive chrysanthemum-like facial hair, and sweet, arrogant carriage.",

    description:
      "The Shih Tzu is an ancient, compact, and solidly built toy dog characterized by a distinctive, arrogant carriage and a face that resembles a blooming chrysanthemum. Although small in stature, it possesses a remarkably robust and heavy-boned frame. The breed's crowning glory is its long, dense, flowing double coat, which sweeps the ground and requires dedicated upkeep, though many owners prefer a low-maintenance short clip. The broad, round head features a short, square muzzle and large, dark, expressive eyes that radiate warmth and trust. Historically bred to warm the laps of Chinese royalty, the Shih Tzu retains a regal, confident attitude while being overwhelmingly affectionate and playful with its family. Despite its glamorous appearance, it is a sturdy, resilient, and highly adaptable companion perfectly suited for indoor living.",

    history:
      "The Shih Tzu, whose name translates to 'lion dog', is one of the oldest dog breeds in the world, with roots extending deep into Tibetan antiquity. Originating in the monasteries of Tibet, these small, alert dogs were frequently given as treasured tribute gifts to the Chinese emperors. Within the imperial palaces of China, royal eunuchs meticulously bred them, likely crossing them with the Pekingese or Pug to refine their distinctive flat-faced (brachycephalic) appearance. For centuries, the breed was kept exclusively by Chinese royalty and hidden behind palace walls, serving as pampered lap warmers and loyal alarm dogs. It was not until the 1930s that the first Shih Tzu were exported to Europe, where British fanciers refined the modern standard. Following World War II, returning military personnel brought the breed to the United States, sparking immense popularity. Today, the Shih Tzu remains one of the world's most beloved companion dogs.",

    originalPurpose:
      "Treasured royal companion, lap warmer, and vigilant alarm dog for Tibetan monks and Chinese emperors.",

    currentRoles: [
      "Devoted household companion and lap dog",
      "Emotional support and therapy dog",
      "Prestigious conformation show competitor",
      "Canine athlete in obedience and agility (for well-conditioned individuals)"
    ]
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "cm",
      male: {
        min: 20,
        max: 27
      },
      female: {
        min: 20,
        max: 27
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 4.5,
        max: 8
      },
      female: {
        min: 4.5,
        max: 8
      }
    },

    lifespanYears: {
      min: 10,
      max: 18
    },

    coatType:
      "Long, dense, and flowing double coat with a good undercoat; not curly, though a slight wave is permissible. Facial hair grows upward on the muzzle, creating the signature 'chrysanthemum' face.",

    coatLength: "Long",

    coatColors: [
      "All colors and patterns are permissible and highly valued",
      "Gold and white",
      "Black and white",
      "Solid black",
      "Solid gold",
      "Silver and white",
      "Brindle",
      "Liver (pigmentation on nose and eye rims matches the coat color)",
      "Blue",
      "A white blaze on the forehead and a white tip to the tail are highly desired in parti-colored dogs"
    ],

    sheddingLevel:
      "Low; the coat is more hair-like than fur and sheds very little, trapping dead hair in the coat until brushed out, making it suitable for many allergy sufferers",

    droolingLevel:
      "Low; despite the brachycephalic muzzle, the lips are firm and do not cause excessive drooling",

    distinctiveFeatures: [
      "Sturdy, compact toy silhouette with a surprisingly heavy, solid bone structure",
      "Height at the withers strictly not exceeding 27 cm",
      "Weight ranging from 4.5 to 8 kg, with an ideal working weight between 4.5 and 7.5 kg",
      "Luxurious, long, flowing double coat that requires extensive daily maintenance if left unclipped",
      "Broad, round head with a short, square muzzle and a distinct, abrupt stop",
      "Hair growing upwards on the muzzle, creating a distinctive 'chrysanthemum' facial appearance",
      "Slightly undershot or level bite with a broad lower jaw",
      "Large, dark, round eyes placed well apart, showing a warm, sweet expression without being prominent or bulging",
      "Large, heavily coated drop ears set slightly below the crown of the skull",
      "Broad, deep chest and a firm, level back",
      "Heavily plumed tail set high and carried gaily over the back",
      "Arrogant, confident carriage with the head held high and a smooth, flowing gait"
    ]
  },

  temperament: {
    traits: [
      "Deeply affectionate, outgoing, and happy-go-lucky",
      "Highly people-oriented, thriving on human companionship and extended lap time",
      "Alert and watchful, acting as a reliable but non-aggressive alarm barker",
      "Confident and proud in carriage, masking a remarkably sweet and trusting nature",
      "Playful and lively indoors, yet highly adaptable to calm apartment living",
      "Generally friendly and polite with unfamiliar strangers",
      "Sociable and peaceful with other dogs and household pets",
      "Can be stubborn and independent during training, displaying a 'what's in it for me' attitude",
      "Thrives on positive reinforcement and quickly shuts down if treated harshly"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: 2,
      independence: 2,
      trainability: 3,
      barking: 3,
      energy: 3
    }
  },

  care: {
    exercise: {
      level:
        "Low to moderate; a classic indoor companion that requires only brief daily walks and short indoor play sessions to stay healthy",

      minutesPerDay: {
        min: 30,
        max: 45
      },

      activities: [
        "Short, brisk neighborhood walks in cool or temperate weather",
        "Interactive indoor play, such as gentle fetch or tug-of-war",
        "Basic obedience games and trick training for mental enrichment",
        "Supervised exploration in a safely enclosed yard"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Brush and comb daily down to the skin using a high-quality pin brush and metal comb to prevent severe and painful matting in the long double coat; many pet owners opt for a low-maintenance short 'puppy cut' every four to six weeks.",

      bathing:
        "Bathe every three to four weeks using a moisturizing canine shampoo and conditioner to keep the long hair silky and manageable.",

      notes: [
        "The topknot on the head is traditionally tied up with a band to keep hair out of the large eyes and prevent corneal irritation.",
        "Wipe the facial wrinkles and corners of the eyes daily with a damp cloth to prevent tear staining, moisture buildup, and bacterial infection.",
        "Inspect the heavily feathered drop ears weekly, gently removing excess hair from the canal to promote airflow.",
        "Trim fast-growing nails every two to three weeks to maintain correct foot alignment.",
        "Brush teeth daily with canine enzymatic toothpaste to combat the breed's high susceptibility to periodontal disease."
      ]
    },

    training: {
      difficulty:
        "Moderate; highly intelligent but famously stubborn, requiring immense patience, strict consistency, and highly motivating rewards",

      tips: [
        "Keep training sessions very short, fun, and highly rewarding using premium treats to overcome their independent streak.",
        "Housebreaking can be notoriously difficult and slow; utilize strict crate training, regular schedules, and constant supervision.",
        "Never use harsh verbal reprimands or physical corrections, which will cause this sensitive companion to refuse to cooperate.",
        "Socialize early and extensively to ensure their natural confidence matures into polite, outgoing sociability rather than shyness or fear."
      ],

      socialization:
        "Introduce the puppy early to varied people, gentle children, vaccinated dogs, and household noises. Proper exposure prevents the dog from becoming snappy or overly timid in busy environments."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Highly sensitive to heat and humidity due to its flat (brachycephalic) face; absolutely requires indoor air conditioning and restricted outdoor time in summer",
        "Cold weather is tolerated reasonably well if the coat is kept long, though a sweater is beneficial in freezing temperatures"
      ],

      aloneTimeTolerance:
        "Low; bred exclusively for centuries to be a constant human companion, this breed is highly prone to separation anxiety and depression if left isolated for long workdays."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated specifically for toy breeds, adjusted carefully to prevent obesity.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age to prevent hypoglycemia.",
      adult:
        "Two measured meals daily to support steady energy and comfortable digestion.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output and joint support."
    },

    guidelines:
      "Measure daily rations strictly using a digital kitchen scale. Toy breeds possess small frames, and even a minor excess in body weight places dangerous strain on their short legs and long spine. Use shallow or slanted food bowls to accommodate the flat brachycephalic muzzle, and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a lean body condition; obesity severely exacerbates breathing difficulties and spinal stress.",
      "Account for training treats within the total daily caloric allowance.",
      "Ensure fresh water is always available, particularly in warm weather, as flat-faced breeds pant less efficiently.",
      "Consider a water bottle or specialized bowl to keep the facial beard and ears dry.",
      "Transition between diet formulas gradually over five to seven days to prevent gastrointestinal upset."
    ],

    note:
      "Caloric needs vary based on age, metabolism, and activity level. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Shih Tzu is a generally long-lived breed with a typical lifespan of 10 to 18 years. However, its unique physical structure—a brachycephalic (flat) face, prominent eyes, and chondrodysplastic (short-legged) dwarfism—predisposes it to specific anatomical and genetic health challenges. Primary health priorities focus on protecting the vulnerable eyes, managing respiratory function, screening for renal dysplasia, and maintaining strict dental hygiene.",

    commonConditions: [
      "Brachycephalic Airway Obstructive Syndrome (BOAS) — a combination of anatomical abnormalities (elongated soft palate, stenotic nares) causing restricted airflow, noisy breathing, and severe heat intolerance",
      "Corneal ulcers and eye injuries — the large, shallowly set, and prominent eyes are highly vulnerable to scratches from tall grass, rough play, or their own facial hair",
      "Keratoconjunctivitis Sicca (KCS / Dry Eye) — inadequate tear production causing painful, inflamed eyes and potential blindness if untreated",
      "Juvenile Renal Dysplasia (JRD) — an inherited, severe developmental defect of the kidneys leading to early-onset chronic renal failure",
      "Patellar luxation — intermittent displacement of the kneecap from the femoral groove, causing a 'skipping' gait and potential arthritis",
      "Intervertebral Disc Disease (IVDD) — degeneration or herniation of spinal discs exacerbated by the breed's relatively long back and short legs, causing extreme pain or paralysis",
      "Periodontal disease — severe tartar buildup and gingivitis caused by overcrowded teeth in the short, broad jaw, requiring lifelong veterinary dental care",
      "Umbilical hernias — frequently occurring developmental defects where abdominal fat protrudes through the navel, often benign but occasionally requiring surgical repair"
    ],

    preventiveCare: [
      "Confirm that breeding stock has certified clinical clearances for patellas, annual specialist eye exams, and kidney health screenings.",
      "Strictly avoid exposing the dog to extreme heat or humidity to prevent life-threatening respiratory distress (heatstroke).",
      "Use a well-fitted body harness rather than a neck collar to prevent pressure on the fragile trachea and eyes.",
      "Protect the prominent eyes by tying up the head hair and avoiding play in thorny or tall brush.",
      "Maintain a lean weight and use pet stairs for furniture to minimize mechanical stress on the spine and knees.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist",
      "Clinical patellar luxation orthopedic evaluation by a veterinarian",
      "Renal evaluation (blood/urine markers or ultrasound) to screen for Juvenile Renal Dysplasia"
    ],

    dentalCare:
      "Brush teeth daily using canine enzymatic toothpaste. The breed has a broad, undershot jaw with severely overcrowded teeth, leading to rapid plaque accumulation; schedule regular professional veterinary dental cleanings to prevent early tooth loss.",

    earCare:
      "Inspect the heavy, heavily coated drop ears weekly for wax buildup, moisture, or yeast. Clean gently using a veterinarian-recommended ear solution, carefully plucking excess hair from the canal if advised by a vet.",

    skinCare:
      "Part the dense double coat daily during brushing to inspect the skin for external parasites, mats, or irritation. Wipe facial folds daily to prevent trapped moisture and bacterial fold dermatitis."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: false,
    apartmentLiving: true,

    idealFor: [
      "First-time dog owners, seniors, and families seeking a calm, deeply affectionate indoor companion",
      "Apartment or condominium dwellers looking for a quiet, low-exercise pet",
      "Allergy sufferers seeking a low-shedding, hair-coated breed",
      "Households where someone is home most of the day to provide constant companionship",
      "Owners willing to commit to daily brushing or regular professional grooming expenses"
    ],

    notIdealFor: [
      "Highly active individuals seeking a jogging, hiking, or strenuous outdoor sporting partner",
      "Families with very young, boisterous toddlers who might accidentally drop or injure a small dog",
      "Owners who leave a dog home alone in isolation for long workdays",
      "Individuals living in un-air-conditioned homes in hot, humid climates",
      "People unwilling or unable to manage rigorous daily grooming and dental hygiene"
    ]
  },

  funFacts: [
    "The Shih Tzu is affectionately nicknamed the 'Chrysanthemum Dog' because the hair on its face grows outward in all directions, resembling the petals of the flower.",
    "During the Ming and Qing Dynasties, these royal lap dogs were so fiercely guarded that they were rarely seen outside the imperial palaces, and commoners caught owning one could face severe punishment.",
    "The breed's name, 'Shih Tzu', translates to 'lion dog' in Mandarin, reflecting its original purpose to resemble the sacred lions depicted in traditional Buddhist art and mythology.",
    "Almost all modern Shih Tzu trace their entire genetic lineage back to just 14 foundational dogs—seven males and seven females—that were used to rescue and rebuild the breed after it was nearly eradicated during the Chinese Communist Revolution.",
    "The Shih Tzu frequently displays a small white marking on its forehead known as the 'Star of Buddha', which according to legend was left when Buddha kissed a faithful lion dog on the head."
  ],

  faq: [
    {
      question: "What is a Shih Tzu?",
      answer:
        "The Shih Tzu is a small, sturdy, and ancient toy dog breed from Tibet and China, famous for its long, flowing double coat, distinctive flat face, and sweet, outgoing, and deeply affectionate personality."
    },
    {
      question: "How tall and heavy is a Shih Tzu?",
      answer:
        "Adult Shih Tzu stand up to 27 cm at the withers and weigh between 4.5 and 8 kg, possessing a surprisingly heavy and solid bone structure for their size."
    },
    {
      question: "How long does a Shih Tzu live?",
      answer:
        "With proper nutrition, strict dental care, and preventive veterinary attention, they are very long-lived, typically reaching 10 to 18 years of age."
    },
    {
      question: "Do Shih Tzu shed a lot, and how are they groomed?",
      answer:
        "No, they shed very little and are often considered a good choice for allergy sufferers. However, their long, hair-like coat requires intense daily brushing to prevent painful mats, leading many owners to keep them in a short, low-maintenance 'puppy cut'."
    },
    {
      question: "Can a Shih Tzu live in an apartment?",
      answer:
        "Yes, they are exceptional apartment dogs. Their small size, calm indoor nature, and low exercise requirements make them perfectly suited for urban living."
    },
    {
      question: "Are Shih Tzu good with children?",
      answer:
        "Yes, they are generally playful and affectionate with children. However, because of their small size and prominent eyes, interactions with toddlers must be closely supervised to prevent the dog from being accidentally dropped or injured."
    },
    {
      question: "Are Shih Tzu hard to housebreak?",
      answer:
        "Yes, like many toy breeds, they can be notoriously stubborn to potty train. Success requires strict consistency, patience, a regular schedule, and effective crate training."
    },
    {
      question: "What are the main health concerns for a Shih Tzu?",
      answer:
        "Primary health concerns include breathing difficulties and heat intolerance due to their flat faces (BOAS), eye injuries and ulcers, slipping kneecaps (patellar luxation), juvenile kidney disease, and severe dental issues."
    }
  ],

  references: [
    "fci-shih-tzu-official-standard",
    "fci-shih-tzu-nomenclature",
    "akc-shih-tzu-breed-standard",
    "akc-shih-tzu-breed-profile",
    "astc-shih-tzu-health",
    "ofa-shih-tzu-chic-requirements",
    "charlie-pet-health-shih-tzu",
    "wikimedia-shih-tzu-coupe-lion",
    "wikimedia-shih-tzu-star-of-buddha"
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
          id: "fci-shih-tzu-official-standard",
          role: "verified",
          locator: "Standard heading: SHIH TZU"
        },
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "History: Chrysanthemum Dog, Lion Dog"
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Verified across FCI Standard No. 208 and AKC profile."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shih-tzu-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 9 Companion and Toy Dogs; Section 5 Tibetan breeds; Without working trial"
        },
        {
          id: "akc-shih-tzu-breed-standard",
          role: "verified",
          locator: "Toy Group"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shih-tzu-official-standard",
          role: "verified",
          locator: "ORIGIN: Tibet (China); PATRONAGE: Great Britain"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shih-tzu-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "About the Breed, History (14 foundational dogs, Ming Dynasty), and Roles"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Synthesized in original prose from FCI Standard No. 208 and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shih-tzu-official-standard",
          role: "verified",
          locator: "HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE AND WEIGHT"
        },
        {
          id: "akc-shih-tzu-breed-standard",
          role: "verified",
          locator: "General Appearance, Size, Proportion, Substance, Head, Coat, Color"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Conformation, heavy bone, chrysanthemum face, double coat, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shih-tzu-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Height at the withers: Not more than 27 cm (10 ½ ins)."
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Preserved in published unit of centimetres (max 27 cm) exactly as specified in the official FCI Standard No. 208."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shih-tzu-official-standard",
          role: "verified",
          locator: "Weight: 4.5 to 8 kg (10 to 18 lbs). Ideal weight 4.5 to 7.5 kg (10-16 ½ lbs)."
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Preserved in published unit of kilograms (4.5 to 8 kg) exactly as specified in the official FCI Standard No. 208."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 10-18 years"
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Supported by kennel club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (1/5)"
        },
        {
          id: "fci-shih-tzu-official-standard",
          role: "verified",
          locator: "COAT: Long, dense, not curly, with good undercoat."
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shih-tzu-official-standard",
          role: "verified",
          locator: "Lips: Level and not showing."
        },
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (1/5)"
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Despite the flat face, tight lips prevent excessive drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shih-tzu-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Intelligent, active and alert. Friendly and independent."
        },
        {
          id: "akc-shih-tzu-breed-standard",
          role: "verified",
          locator: "Temperament: As the sole purpose of the Shih Tzu is that of a companion and house pet, it is essential that its temperament be outgoing, happy, affectionate, friendly and trusting towards all."
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented toy companion temperament, high family affection, and stubborn trainability."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        },
        {
          id: "charlie-pet-health-shih-tzu",
          role: "cited",
          locator: "Heat tolerance, BOAS precautions, eye protection"
        }
      ],
      verifiedOn: null,
      note:
        "Combines companion dog management with intense long-coat grooming and brachycephalic heat-stress precautions."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "Energy Level (3/5); Exercise Needs (2/5)"
        },
        {
          id: "fci-shih-tzu-official-standard",
          role: "verified",
          locator: "UTILIZATION: Companion Dog"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "cited",
          locator: "Daily exercise recommendations for toy breeds"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 30 to 45 minutes of daily activity reflects the modest exercise demands of a brachycephalic toy companion."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "Adaptability: Adapts Well to Apartment Living (5/5); highly suited for indoor life"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "Exercise and secure yard recommendations"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "charlie-pet-health-shih-tzu",
          role: "verified",
          locator: "Breathing (BOAS) and heat: take care in warm weather due to brachycephalic airways"
        },
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "Weather adaptation: extremely sensitive to heat and humidity"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "cited",
          locator: "Tolerates Being Alone: Low to moderate; bred entirely for human companionship"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food formulated for toy breeds, portion control"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for toy breeds prone to obesity and dental overcrowding."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance and divided meals"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule for toy breeds to prevent hypoglycemia."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-shih-tzu-chic-requirements",
          role: "verified",
          locator: "CHIC Program requirements: Eye Examination, Patellar Luxation"
        },
        {
          id: "astc-shih-tzu-health",
          role: "verified",
          locator: "Health Testing: Eye certification, Patella certification, Basic Cardiac"
        },
        {
          id: "charlie-pet-health-shih-tzu",
          role: "verified",
          locator: "Health overview: BOAS, Kidneys (Juvenile Renal Dysplasia), Eyes, and Urinary stones"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Synthesizes parent club veterinary health records, national health registry screening protocols, and brachycephalic clinical data."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "charlie-pet-health-shih-tzu",
          role: "verified",
          locator: "Juvenile Renal Dysplasia, bladder stones, corneal ulcers, dry eye, BOAS"
        },
        {
          id: "ofa-shih-tzu-chic-requirements",
          role: "verified",
          locator: "Patellar luxation, eye conditions"
        },
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "Umbilical hernias, dental disease, and IVDD"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Details documented genetic and conformational conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "charlie-pet-health-shih-tzu",
          role: "cited",
          locator: "Routine care, eye protection, kidney screening, heat avoidance"
        },
        {
          id: "akc-shih-tzu-breed-profile",
          role: "cited",
          locator: "Harness usage, dental hygiene, and weight control"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to brachycephalic toy breeds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-shih-tzu-chic-requirements",
          role: "verified",
          locator: "CHIC Program required screenings: CAER Eye examination, Clinical Patellar Luxation"
        },
        {
          id: "astc-shih-tzu-health",
          role: "verified",
          locator: "Recommended health testing from parent club"
        },
        {
          id: "charlie-pet-health-shih-tzu",
          role: "verified",
          locator: "Routine kidney/renal screening"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Screenings summarize published parent club and health registry protocols."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-shih-tzu-official-standard",
          role: "cited",
          locator: "Jaws/teeth: Wide, slightly undershot or level."
        },
        {
          id: "akc-shih-tzu-breed-profile",
          role: "cited",
          locator: "Routine dental care and early periodontal disease risk"
        }
      ],
      verifiedOn: null,
      note: "Strict home dental hygiene guidelines for a breed highly prone to periodontal disease."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-shih-tzu-official-standard",
          role: "cited",
          locator: "Ears: large, with long leathers, carried drooping. Heavily coated"
        },
        {
          id: "akc-shih-tzu-breed-profile",
          role: "cited",
          locator: "Ear hygiene and weekly inspection"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for heavily coated drop ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "cited",
          locator: "Facial fold cleaning and coat brushing"
        }
      ],
      verifiedOn: null,
      note: "General skin, facial fold, and double-coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, grooming demands, and heat sensitivity."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "Chrysanthemum Dog nickname, Ming Dynasty royal history, 14 foundational dogs, 'lion dog' translation, Star of Buddha legend"
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Verified historical folklore and foundation facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-shih-tzu-official-standard",
          role: "verified",
          locator: "Origin, height (max 27 cm), weight (4.5-8 kg), coat, and colors"
        },
        {
          id: "akc-shih-tzu-breed-profile",
          role: "verified",
          locator: "Lifespan (10-18 years), apartment living, housebreaking difficulty, family life, and grooming"
        },
        {
          id: "ofa-shih-tzu-chic-requirements",
          role: "verified",
          locator: "Recommended health screening panel (Eyes, Patellas)"
        },
        {
          id: "charlie-pet-health-shih-tzu",
          role: "verified",
          locator: "Main health concerns (BOAS, Eyes, JRD)"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and veterinary data without naming registries in prose."
    }
  },

  updatedOn: "2026-11-13"
};
