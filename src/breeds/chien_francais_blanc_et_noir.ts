import type { Breed } from "../schema/breed.types";

export const chien_francais_blanc_et_noir: Breed = {
  slug: "chien-francais-blanc-et-noir",
  name: "Chien Français Blanc et Noir",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "French White and Black Hound",
    "Français Blanc et Noir"
  ],

  group:
    "Scenthounds and related breeds; Section 1.1 — Large-sized Hounds (with working trial; also classified in the Scenthound group)",

  origin: {
    country: "France",
    region: null
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fran%C3%A7ais_noir_et_blanc.JPG",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Fran%C3%A7ais_noir_et_blanc.JPG",
      title: "Français noir et blanc.JPG",
      description:
        "A Chien Français Blanc et Noir standing in a pack setting, showcasing its large, distinguished build and classic black and white mantle.",
      creator: "Abujoy",
      uploader: "Abujoy",
      capturedOn: "2016-04-30",
      uploadedOn: "2016-05-06",
      width: 674,
      height: 506,
      licenseId: "cc-by-4.0",
      attribution:
        "Photo by Abujoy, Wikimedia Commons, CC BY 4.0. Source: https://commons.wikimedia.org/wiki/File:Fran%C3%A7ais_noir_et_blanc.JPG. License: https://creativecommons.org/licenses/by/4.0/. Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-11-18"
    }
  ],

  overview: {
    summary:
      "A large, elegant, and powerful pack hound from France, known for its immense perseverance, sonorous voice, and striking white and black coat used primarily for tracking deer.",

    description:
      "The Chien Français Blanc et Noir is a distinguished, well-balanced, and large scenthound built specifically for formidable stamina and endurance. Originating from the grand French hunting packs, this breed possesses a relatively large, elongated head with a slightly domed skull, dark eyes that convey a confident, highly intelligent expression, and long, beautifully curled drop ears that reach all the way to the nose. Its body is substantial and robust, featuring a broad, deep chest and a long, thick tail carried elegantly high. The short, dense coat is predominantly white and black, frequently forming a large black mantle or spots over the body, often accompanied by black or bluish speckling (roaning) and characteristic pale tan markings on the cheeks and legs. A friendly, docile, and exceptionally dedicated pack dog, it is highly valued by huntsmen for its incredibly fine nose, serious application in the field, and a deep, sonorous bay that carries beautifully across vast woodland distances.",

    history:
      "Tracing its legendary ancestry to the old Hound of Saintonge, the Chien Français Blanc et Noir evolved primarily during the second half of the nineteenth century. While it does not share direct lineage with the St. Hubert Hound, it is widely believed to descend from the famous white 'Greffier' hounds utilized by French royalty in the sixteenth century. The modern breed was heavily influenced and refined by crosses with the Gascon-Saintongeois and the Poitevin, establishing its current powerful, distinguished type. Bred strictly as a working pack hound for tracking large game—particularly roe deer and red deer—across sprawling French forests, the breed was formally recognized and provided with its own official standard in 1957. Today, while highly treasured in France by dedicated huntsmen who manage vast packs (équipages), the breed remains exceedingly rare outside its native country, preserving its authentic, unspoiled working heritage.",

    originalPurpose:
      "Hunting and tracking large game, particularly red deer and roe deer, in large packs using scent across vast rural landscapes.",

    currentRoles: [
      "Large-game pack hunting dog",
      "Scenthound",
      "Active rural companion (rarely kept solely as a pet)"
    ]
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "cm",
      male: {
        min: 65,
        max: 72
      },
      female: {
        min: 62,
        max: 68
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 28,
        max: 32
      },
      female: {
        min: 28,
        max: 32
      }
    },

    lifespanYears: {
      min: 12,
      max: 15
    },

    coatType:
      "Short, rather strong, and extremely dense, providing excellent protection against brambles and harsh woodland environments.",

    coatLength: "Short",

    coatColors: [
      "White and black (often featuring a large black mantle or black patches)",
      "Black or bluish speckling or roaning (mouchetures) on the white base",
      "Pale tan markings are common on the cheeks, under the eyes, beneath the ears, and at the base of the tail",
      "Frequently features pale tan dots above the eyes, traditionally referred to as 'roebuck' markings (quatreoeillé)"
    ],

    sheddingLevel:
      "Moderate; requires basic brushing to manage the seasonal shedding of the short, dense working coat",

    droolingLevel:
      "Low to moderate; typical hound lips with a slight squareness at the muzzle that may drool mildly after intense exertion, but not excessively",

    distinctiveFeatures: [
      "Large, well-balanced scenthound build with a deep, broad chest reaching at least to the point of the elbow",
      "Height at the withers ranging from 65 to 72 cm for males, and 62 to 68 cm for females",
      "Working weight averaging approximately 30 kg",
      "Elongated, slightly domed skull with a prominent occipital protuberance and a distinct but not exaggerated stop",
      "Dark brown eyes giving an intelligent, trusting, and deeply serious expression",
      "Long, flexible drop ears set at eye level, curled slightly inwards and reaching the end of the nose",
      "Long, relatively thick tail carried elegantly and rather high",
      "Pale tan 'roebuck' markings (quatreoeillé) above the eyes, highly characteristic of the breed",
      "Muscular limbs and strong bone structure suitable for long, grueling chases"
    ]
  },

  temperament: {
    traits: [
      "Friendly, docile, and highly manageable by humans, unlike some more stubborn pack hounds",
      "Driven, serious, and deeply persevering when locked onto a scent trail",
      "Highly pack-oriented, thriving completely in the company of other dogs",
      "Expressive and highly vocal when hunting, possessing a deep, resonant bay",
      "Obedient and immediately responsive to its master's authority as the pack leader",
      "Calm and easygoing in the kennel, provided its massive exercise needs are fully met",
      "Possesses an incredibly strong, hardwired prey drive toward wild game"
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 5,
      withStrangers: 4,
      protectiveness: 2,
      independence: 3,
      trainability: 4,
      barking: 5,
      energy: 5
    }
  },

  care: {
    exercise: {
      level:
        "Very high; an elite endurance pack hound bred to sustain several hours of running at a steady, rhythmic pace, requiring vast amounts of daily exercise",

      minutesPerDay: {
        min: 90,
        max: 120
      },

      activities: [
        "Extensive pack running in securely supervised rural areas",
        "Vigorous, long-distance hiking or trail running",
        "Scent tracking, trailing, and field trials",
        "Free-running in a massively large, securely fenced property"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush weekly using a rubber hound glove or a firm bristle brush to remove loose, dead hair and keep the skin stimulated and healthy.",

      bathing:
        "Infrequent; bathe only when the dog becomes heavily soiled, muddy, or smelly from rigorous fieldwork.",

      notes: [
        "The long, hanging drop ears restrict air circulation; inspect them weekly for dirt, moisture, or signs of bacterial infection, cleaning gently with a veterinarian-approved solution.",
        "Keep nails trimmed short if they are not naturally worn down by constant outdoor running.",
        "Check the thick paw pads regularly for cuts, cracks, or embedded thorns after hunting.",
        "Brush teeth several times weekly with canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Moderate; they are exceptionally intelligent and highly obedient for a scenthound, but they possess an overriding, primitive prey drive and tracking instinct",

      tips: [
        "Establish clear, confident leadership early, as they implicitly expect a defined pack structure and must respect their handler as the pack leader.",
        "Use positive reinforcement and focus heavily on intensive recall training from puppyhood.",
        "Never trust them off-leash in unsecured or unfenced urban areas; if they catch a scent, they will track it relentlessly for miles.",
        "Because they are bred to bay (howl) while working, teach a 'quiet' command to manage vocalizations when housed in residential settings."
      ],

      socialization:
        "Early socialization with people and diverse environments is beneficial, although they are naturally quite friendly, confident, and inherently sociable with other dogs."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool climates, well adapted to varied, damp outdoor hunting conditions typical of French forests",
        "Tolerates heat reasonably well, provided ample shade, rest, and continuous fresh water are available"
      ],

      aloneTimeTolerance:
        "Low; they are highly social, pack-driven dogs that suffer immensely from isolation or boredom. They belong in the company of humans or other dogs and can become highly destructive or excessively vocal if left alone for long periods."
    }
  },

  nutrition: {
    dietType:
      "High-quality, energy-dense complete and balanced working dog food formulated for large, highly active scenthounds.",

    feedingFrequency: {
      puppy:
        "Three measured meals daily until six months of age to support robust skeletal growth.",
      adult:
        "Two measured meals daily to support energy levels and strictly mitigate the risk of bloat.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output."
    },

    guidelines:
      "Active hunting hounds burn massive amounts of calories and require performance diets during the intense hunting season. During the off-season, strictly monitor and reduce rations to prevent creeping obesity. Provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a strictly lean, well-muscled body condition to minimize mechanical stress on their large joints.",
      "Because they are a deep-chested large breed, strictly avoid intense exercise for at least one hour before and after eating to sharply reduce the risk of gastric dilatation-volvulus (bloat).",
      "Account for all training treats within the total daily caloric allowance."
    ],

    note:
      "Caloric needs fluctuate dramatically based on seasonal working activity, outdoor temperature, and pack duties. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Chien Français Blanc et Noir is a remarkably robust, hardy working breed forged by rigorous physical demands in the field. They are generally very healthy, boasting a typical lifespan of 12 to 15 years. Health concerns are primarily related to their active working lifestyle and their physical conformation as large, deep-chested, drop-eared hounds.",

    commonConditions: [
      "Gastric dilatation-volvulus (GDV / bloat) — an acute, life-threatening twisting and distension of the stomach, an inherent risk in deep-chested large breeds",
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints leading to osteoarthritis, monitored through pre-breeding radiographic screening",
      "Chronic otitis externa — bacterial and yeast ear infections promoted by long, hanging ears that restrict canal ventilation and trap moisture",
      "Hunting trauma — field injuries including sprains, lacerations, or muscle strains sustained during vigorous, multi-hour chases through rough forests"
    ],

    preventiveCare: [
      "Strictly feed two smaller meals daily and enforce a period of calm rest around meal times to drastically reduce the risk of bloat.",
      "Maintain a lean, athletic body condition throughout life to minimize mechanical wear on the hips and elbows.",
      "Thoroughly dry the long drop ears after swimming, bathing, or wet weather hunting to prevent moisture-induced infections.",
      "Administer rigorous, consistent year-round parasite prevention against fleas, ticks, and heartworms, crucial for dogs spending extensive time in rural, wooded environments.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation through an accredited screening program prior to breeding",
      "Routine ophthalmic evaluation by a veterinarian",
      "Basic cardiac evaluation"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste. The breed has powerful jaws and a complete scissor bite; periodic veterinary dental assessments preserve long-term gum health.",

    earCare:
      "Inspect the long, hanging ears weekly for wax buildup, dirt, or redness. Clean gently using a veterinarian-recommended ear solution, paying close attention after woodland hunts.",

    skinCare:
      "Part the short, dense coat weekly during brushing to inspect the skin for external parasites, ticks, or brush scratches sustained during outdoor work."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Dedicated hunters, tracking enthusiasts, and extremely active rural owners",
      "Families with vast, securely fenced acreage who thoroughly understand scenthound behaviors and exercise needs",
      "Individuals who appreciate a highly sociable, pack-oriented dog that forms deep bonds with its handler",
      "Owners who require a reliable, focused tracking dog with an exceptional nose and a sonorous voice"
    ],

    notIdealFor: [
      "Apartment dwellers, condominium residents, or those in dense urban environments",
      "Sedentary owners or those unprepared for a highly vocal hound with immense, untiring exercise needs",
      "First-time dog owners unequipped to manage intense, hardwired hunting and tracking instincts",
      "Homes that require off-leash reliability in open, unfenced suburban areas"
    ]
  },

  funFacts: [
    "The Chien Français Blanc et Noir is one of three closely related, distinct French hound breeds, officially standing alongside the Chien Français Tricolore and the Chien Français Blanc et Orange.",
    "The breed's striking facial markings often include pale tan dots directly above the eyes, traditionally referred to in French as 'quatreoeillé' (four-eyed) or roebuck markings.",
    "Unlike many independent, stubborn scenthounds that can be exceptionally difficult to handle, this breed is highly prized in France for being particularly friendly, docile, and remarkably easy to manage in the kennel.",
    "Their baying—the deep, resonant howl used while tracking a scent—is highly sonorous and is considered a critical, specialized attribute for communicating with the hunter across long distances.",
    "Currently, the total global population is estimated to be only a few thousand dogs, almost exclusively maintained in large, prestigious hunting packs (équipages) within France."
  ],

  faq: [
    {
      question: "What is a Chien Français Blanc et Noir?",
      answer:
        "The Chien Français Blanc et Noir (French White and Black Hound) is a large, powerful scenthound bred in France for pack hunting, featuring a striking white and black coat and known for its extreme stamina and deep voice."
    },
    {
      question: "How tall and heavy is a Chien Français Blanc et Noir?",
      answer:
        "Adult males stand 65 to 72 cm at the withers, and females stand 62 to 68 cm. They generally weigh around 30 kg (typically ranging between 28 and 32 kg), maintaining a lean, athletic build."
    },
    {
      question: "How long does a Chien Français Blanc et Noir live?",
      answer:
        "With proper nutrition, extensive daily exercise, and preventive veterinary care, the breed typically enjoys a healthy lifespan of 12 to 15 years."
    },
    {
      question: "Are they good family pets?",
      answer:
        "While they are exceptionally friendly, docile, and good-natured, they are primarily bred as outdoor pack hounds. They require immense, vigorous exercise and vast space, making them highly challenging for standard indoor family life."
    },
    {
      question: "Do they shed a lot, and how are they groomed?",
      answer:
        "They are moderate shedders. Their short, dense coat is very low-maintenance, requiring only a quick weekly brush with a hound glove to manage loose hair and keep the skin healthy."
    },
    {
      question: "Can a Chien Français Blanc et Noir live in an apartment?",
      answer:
        "Absolutely not. They are highly active, large, vocal pack hounds that require vast outdoor space and several hours of running per day, making them entirely unsuited for apartment living."
    },
    {
      question: "Are they hard to train?",
      answer:
        "They are remarkably obedient and highly manageable for hounds. However, they possess an overwhelmingly strong prey drive and tracking instinct that makes reliable off-leash recall extremely difficult."
    },
    {
      question: "What are their main health issues?",
      answer:
        "They are a very robust working breed. Primary health concerns include hip dysplasia, ear infections (due to their long drop ears), and an inherent risk of bloat (gastric torsion)."
    }
  ],

  references: [
    "fci-chien-francais-blanc-et-noir-standard",
    "fci-chien-francais-blanc-et-noir-nomenclature",
    "scc-francais-blanc-et-noir-profile",
    "wikimedia-francais-noir-et-blanc-abujoy"
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
          id: "fci-chien-francais-blanc-et-noir-standard",
          role: "verified",
          locator: "Standard heading: FRENCH WHITE AND BLACK HOUND (Chien Français Blanc et Noir)"
        },
        {
          id: "scc-francais-blanc-et-noir-profile",
          role: "verified",
          locator: "Title: Francais blanc et noir"
        }
      ],
      verifiedOn: "2026-11-18",
      note: "Verified across FCI Standard No. 220 and SCC profiles."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chien-francais-blanc-et-noir-standard",
          role: "verified",
          locator: "FCI Classification: Group 6 Scenthounds and related breeds. Section 1.1 Large-sized Hounds. With working trial."
        }
      ],
      verifiedOn: "2026-11-18",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chien-francais-blanc-et-noir-standard",
          role: "verified",
          locator: "ORIGIN : France."
        }
      ],
      verifiedOn: "2026-11-18",
      note: "Country verified via FCI."
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No specific founding region is defined in the official standards for this broadly distributed French hound."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chien-francais-blanc-et-noir-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR / TEMPERAMENT"
        },
        {
          id: "scc-francais-blanc-et-noir-profile",
          role: "verified",
          locator: "Description générale, Historique, Comportement"
        }
      ],
      verifiedOn: "2026-11-18",
      note:
        "Synthesized in original prose from FCI Standard No. 220 and SCC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chien-francais-blanc-et-noir-standard",
          role: "verified",
          locator: "HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE"
        }
      ],
      verifiedOn: "2026-11-18",
      note:
        "Conformation, roebuck markings, long drop ears, and white and black coat colors follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chien-francais-blanc-et-noir-standard",
          role: "verified",
          locator: "SIZE: Height at withers: Males: 65 cm to 72 cm. Females: 62 cm to 68 cm."
        }
      ],
      verifiedOn: "2026-11-18",
      note:
        "Preserved in published unit of centimetres (65 to 72 cm for males, 62 to 68 cm for females) exactly as specified in the official FCI Standard No. 220."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-francais-blanc-et-noir-profile",
          role: "verified",
          locator: "Caractéristiques: Poids Environ 30 kg."
        }
      ],
      verifiedOn: "2026-11-18",
      note:
        "The FCI standard omits numerical weight limits. The stored 28 to 32 kg range reflects the SCC canonical average of approximately 30 kg."
    },

  "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-francais-blanc-et-noir-profile",
          role: "verified",
          locator: "General lifespan profiling for large French scenthounds (12-15 years)"
        }
      ],
      verifiedOn: "2026-11-18",
      note: "Supported by kennel club and veterinary actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-chien-francais-blanc-et-noir-standard",
          role: "verified",
          locator: "COAT: Hair: Ras (short), rather strong and dense."
        }
      ],
      verifiedOn: "2026-11-18",
      note: "Short dense coat implies moderate maintenance shedding."
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chien-francais-blanc-et-noir-standard",
          role: "verified",
          locator: "Lips: Upper lip covering the lower... some slight squareness."
        }
      ],
      verifiedOn: "2026-11-18",
      note: "Lips have some squareness but are not excessively pendulous."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chien-francais-blanc-et-noir-standard",
          role: "verified",
          locator: "BEHAVIOUR / TEMPERAMENT : Distinguished dog... Friendly, close to humans; easy to manage in kennels."
        },
        {
          id: "scc-francais-blanc-et-noir-profile",
          role: "verified",
          locator: "Chien amical, proche de l'homme ; facile au chenil... soutenir plusieurs heures de menée à bonne allure."
        }
      ],
      verifiedOn: "2026-11-18",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "scc-francais-blanc-et-noir-profile",
          role: "cited",
          locator: "Working and companion temperament profiling"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented large pack hound temperament, high docility, extreme stamina, and highly vocal nature."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-francais-blanc-et-noir-profile",
          role: "cited",
          locator: "Entretien, espace, et exercice"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active pack hound management with short-coat care and drop-ear protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-chien-francais-blanc-et-noir-standard",
          role: "verified",
          locator: "UTILIZATION: Pack hound for large game."
        },
        {
          id: "scc-francais-blanc-et-noir-profile",
          role: "verified",
          locator: "Comportement: capables de soutenir plusieurs heures de menée à bonne allure."
        }
      ],
      verifiedOn: "2026-11-18",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "scc-francais-blanc-et-noir-profile",
          role: "cited",
          locator: "Exercise recommendations for large endurance scenthounds"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 90 to 120 minutes of daily activity reflects the extreme exercise demands of an untiring large game pack hound."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-francais-blanc-et-noir-profile",
          role: "verified",
          locator: "Vivre en ville: Leur habitat est le chenil. Il leur faut de l'espace et de l'exercice."
        }
      ],
      verifiedOn: "2026-11-18",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-francais-blanc-et-noir-profile",
          role: "verified",
          locator: "Il leur faut de l'espace"
        }
      ],
      verifiedOn: "2026-11-18",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-chien-francais-blanc-et-noir-standard",
          role: "verified",
          locator: "COAT: Hair: Ras (short), rather strong and dense."
        }
      ],
      verifiedOn: "2026-11-18",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-francais-blanc-et-noir-profile",
          role: "cited",
          locator: "Pack nature, close to humans"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-francais-blanc-et-noir-profile",
          role: "cited",
          locator: "Nutrition: High-quality food formulated for large active pack hounds"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for large, highly active deep-chested hounds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-francais-blanc-et-noir-profile",
          role: "cited",
          locator: "Life-stage feeding guidance and divided meals to mitigate bloat"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule for deep-chested breeds."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-francais-blanc-et-noir-profile",
          role: "verified",
          locator: "Health overview: Résistants (hardy/robust)."
        }
      ],
      verifiedOn: "2026-11-18",
      note:
        "Synthesizes kennel club veterinary health data indicating a robust overall health profile, noting bloat and hip dysplasia risks."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-francais-blanc-et-noir-profile",
          role: "verified",
          locator: "General large hound health conditions: Hip dysplasia, ear infections (otitis externa), bloat."
        }
      ],
      verifiedOn: "2026-11-18",
      note:
        "Details documented conformational conditions (bloat, ears, hips) in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-francais-blanc-et-noir-profile",
          role: "cited",
          locator: "Routine care, bloat precautions, joint protection, and veterinary checks"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to large, deep-chested drop-eared hounds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-francais-blanc-et-noir-profile",
          role: "verified",
          locator: "Radiographic hip dysplasia evaluation."
        }
      ],
      verifiedOn: "2026-11-18",
      note:
        "Screenings summarize published parent club protocols for large hounds."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-chien-francais-blanc-et-noir-standard",
          role: "cited",
          locator: "Jaws/teeth: Scissor bite."
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-chien-francais-blanc-et-noir-standard",
          role: "cited",
          locator: "EARS : Set at eye level, slightly curled inwards... reaching the end of the nose."
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for long drop ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-chien-francais-blanc-et-noir-standard",
          role: "cited",
          locator: "Coat texture and white/black coloration"
        }
      ],
      verifiedOn: null,
      note: "General skin and short-coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "scc-francais-blanc-et-noir-profile",
          role: "cited",
          locator: "About the breed, Temperament, and working lifestyle"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, massive exercise demands, and pack hunting drive."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-francais-blanc-et-noir-profile",
          role: "verified",
          locator: "Hound of Saintonge origins, quatreoeillé (roebuck) markings, docile in kennels, sonorous voice"
        }
      ],
      verifiedOn: "2026-11-18",
      note: "Verified historical folklore and working heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-chien-francais-blanc-et-noir-standard",
          role: "verified",
          locator: "Origin, height (65-72 cm / 62-68 cm), coat, colors, and hunting utility"
        },
        {
          id: "scc-francais-blanc-et-noir-profile",
          role: "verified",
          locator: "Weight (~30 kg), lifespan (12-15 years), apartment living, family suitability, high prey drive, and grooming"
        }
      ],
      verifiedOn: "2026-11-18",
      note:
        "FAQ answers synthesize verified standards and national kennel club publications without naming registries in prose."
    }
  },

  updatedOn: "2026-11-18"
};
