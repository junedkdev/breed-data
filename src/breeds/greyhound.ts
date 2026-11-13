import type { Breed } from "../schema/breed.types";

export const greyhound: Breed = {
  slug: "greyhound",
  name: "Greyhound",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "English Greyhound"
  ],

  group:
    "Sighthounds; Section 3 — Short-haired sighthounds (without working trial; also classified in the Hound group)",

  origin: {
    country: "Great Britain",
    region:
      "England, United Kingdom (with ancient roots tracing back to the Middle East and Ancient Egypt)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Greyhound_(15743605663).jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Greyhound_(15743605663).jpg",
      title: "Greyhound (15743605663).jpg",
      description:
        "An adult fawn-colored Greyhound standing outdoors.",
      creator: "KK70088",
      uploader: "FlickreviewR 2",
      capturedOn: "2010-04-11",
      uploadedOn: "2014-11-25",
      width: 1558,
      height: 1038,
      licenseId: "cc-by-sa-2.0",
      attribution:
        "Photo by KK70088, Wikimedia Commons, CC BY-SA 2.0. Source: https://commons.wikimedia.org/wiki/File:Greyhound_(15743605663).jpg. License: https://creativecommons.org/licenses/by-sa/2.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-13"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Greyhound_Close-up.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Greyhound_Close-up.jpg",
      title: "Greyhound Close-up.jpg",
      description:
        "A close-up view of a brindle Greyhound's head and neck.",
      creator: "Vincent Eisfeld",
      uploader: "Vincent Eisfeld",
      capturedOn: "2015-06-18",
      uploadedOn: "2015-06-18",
      width: 3688,
      height: 3316,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Vincent Eisfeld, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Greyhound_Close-up.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-13"
    }
  ],

  overview: {
    summary:
      "A tall, aerodynamic, and elegantly muscular British sighthound celebrated globally as the fastest breed of dog, possessing a gentle, even-tempered personality indoors and an explosive, unmatched sprinting capacity outdoors.",

    description:
      "The Greyhound is a marvel of canine biomechanics, engineered strictly for immense speed, acute vision, and breathtaking agility. Standing tall and upstanding, the breed combines a deep, capacious chest providing maximum heart room with a highly flexible, slightly arched loin and a long, muscular neck. Its aerodynamic silhouette is covered by a fine, close-lying coat that can be found in a wide array of colors, including black, white, red, blue, fawn, and brindle. The long, moderately wide head features a flat skull, a slight stop, and bright, dark, oval eyes that radiate an intelligent and gentle spirit. Although the Greyhound is a legendary pursuit hunter capable of reaching speeds over forty miles per hour in open coursing, its indoor demeanor is famously calm, quiet, and deeply affectionate, earning it a reputation as a sweet-natured 'couch potato' when off duty.",

    history:
      "The exact origins of the Greyhound remain a subject of historical debate, but experts widely agree that dogs of this distinct aerodynamic sighthound type have existed since antiquity, with depictions adorning ancient Egyptian tombs dating back to 4000 BCE. The breed was brought to Europe and heavily cultivated in Great Britain, where it became the favored coursing hound of the aristocracy. For centuries, British law dictated that only nobility were permitted to own and hunt with Greyhounds, using them to pursue hare, fox, and deer across vast estates. By the late nineteenth and early twentieth centuries, the breed's role evolved toward organized track racing and competitive coursing, leading to a split between show-bred (bench) Greyhounds and racing-bred strains. Regardless of their lineage, modern Greyhounds have transitioned seamlessly into popular and devoted family companions, particularly through extensive adoption programs for retired racing dogs.",

    originalPurpose:
      "Open-field coursing of fast game, particularly hare and deer, relying entirely on exceptional eyesight and explosive sprinting speed.",

    currentRoles: [
      "Retired racing and coursing hound transitioned to family companion",
      "Canine athlete in amateur lure coursing, straight racing, and agility",
      "Gentle and affectionate household pet",
      "Therapy and emotional support dog"
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
      "Very short, fine, and close-lying single coat offering virtually no protection against extreme cold, heat, or coarse brush.",

    coatLength: "Short",

    coatColors: [
      "Black",
      "White",
      "Red",
      "Blue",
      "Fawn",
      "Brindle",
      "Any of the above colors broken with white (parti-color)"
    ],

    sheddingLevel:
      "Low to moderate; the very short, fine single coat sheds lightly year-round and requires minimal maintenance",

    droolingLevel:
      "Low; clean, powerfully chiseled jaws and tight lips prevent drooling",

    distinctiveFeatures: [
      "Tall, incredibly aerodynamic sighthound silhouette combining muscular power with symmetrical, graceful proportions",
      "Ideal height at the withers of 71 to 76 cm for males and 68 to 71 cm for females",
      "Working weight typically ranging from 65 to 70 pounds for males and 60 to 65 pounds for females",
      "Deep, capacious chest providing vast lung and heart room, contrasting with a well-cut-up flank and slightly arched loin",
      "Long head with a flat skull, slight stop, and powerful, well-chiseled muzzle lacking heavy flews",
      "Complete, regular scissor bite with very strong teeth",
      "Bright, intelligent, dark oval eyes set obliquely",
      "Small, fine-textured rose-shaped ears that fold backward at rest and semi-prick when alert",
      "Long, elegantly arched, muscular neck blending cleanly into oblique, well-laid-back shoulders",
      "Extremely powerful, wide, and muscular thighs and second thighs providing immense propelling power",
      "Long, fine, tapering tail set rather low and carried slightly curved",
      "Moderate-length feet featuring compact, well-knuckled toes and strong pads"
    ]
  },

  temperament: {
    traits: [
      "Intelligent, gentle, and remarkably affectionate with its family",
      "Even-tempered, calm, and famously quiet indoors",
      "Independent and aloof yet unfailingly polite with unfamiliar strangers",
      "Intensely visually driven with explosive prey drive toward fast-moving objects or small animals",
      "Highly athletic and explosive in short outdoor sprints",
      "Sensitive to loud noises, harsh corrections, or chaotic environments",
      "Patient and sweet-natured with respectful older children",
      "Sociable and peaceable with other medium-to-large dogs",
      "Prefers soft, cushioned sleeping surfaces due to lack of body fat and thin skin",
      "Lacks strong territorial guarding or protective instincts"
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
        "Moderate; despite their reputation as elite sprinters, they are built for short, explosive bursts of speed rather than sustained endurance, and are famously lethargic indoors",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Daily brisk leashed walks for steady conditioning",
        "Short, explosive sprints in a large, fully and securely fenced field or paddock",
        "Amateur lure coursing or straight racing in safely controlled environments",
        "Interactive play and short training sessions",
        "Lounging and sleeping on deeply cushioned beds for the majority of the day"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush once weekly using a rubber hound mitt or soft bristle brush to remove loose hairs and massage natural skin oils into the fine coat.",

      bathing:
        "Bathe infrequently—only when visibly soiled—using a mild, hypoallergenic canine shampoo to avoid stripping the coat and drying out the sensitive skin.",

      notes: [
        "The breed's exceptionally thin skin lacks a protective fat layer, making it prone to tearing or scraping if the dog runs through thorny brush.",
        "Inspect the small rose ears weekly for dirt or wax buildup.",
        "Trim the fast-growing nails every two weeks to maintain correct, compact foot alignment and prevent toe injuries.",
        "Brush teeth several times weekly with canine enzymatic toothpaste.",
        "Provide a well-fitted, thick winter coat during cold weather, as the breed cannot tolerate low temperatures or freezing rain."
      ]
    },

    training: {
      difficulty:
        "Moderate; intelligent and capable of learning manners quickly, but highly independent, visually distracted, and extremely sensitive to handler tone",

      tips: [
        "Use gentle, positive reinforcement, high-value food treats, and brief, encouraging sessions.",
        "Never use harsh verbal reprimands, physical coercion, or electronic collars on this sensitive sighthound.",
        "Always exercise the dog on a secure leash or within a fully fenced area (minimum six feet high); intense prey drive guarantees the dog will bolt after small moving animals, completely ignoring recall commands.",
        "Use a wide, padded martingale collar or a specialized sighthound harness for walking, as their narrow heads can easily slip out of standard buckle collars.",
        "Introduce the dog carefully to stairs and glass doors, as many retired racing dogs have never encountered them."
      ],

      socialization:
        "Introduce the puppy or newly adopted adult calmly to varied people, other dog breeds (especially small breeds to assess prey drive), and urban noises. Gradual, positive exposure builds confidence in a breed that can occasionally be timid."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Warm and temperate climates",
        "Cool climates require the dog to wear a fitted sweater or heavy coat outdoors, as it possesses virtually no insulating body fat or undercoat",
        "Must be housed completely indoors; never suited for outdoor kenneling in extreme weather"
      ],

      aloneTimeTolerance:
        "Moderate; enjoys lounging and sleeping while owners are away, but thrives on human companionship and soft, comfortable surroundings."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for large breeds, prioritizing easily digestible proteins and fats to maintain lean muscle mass.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age.",
      adult:
        "Two measured meals daily to support steady digestion and reduce the risk of bloat.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output and joint support."
    },

    guidelines:
      "Measure daily rations carefully to maintain a strict athletic silhouette where the last two or three ribs are faintly visible and the hip bones are prominent. Overweight Greyhounds suffer severe mechanical stress on their fine-boned joints. Divide daily food into two distinct meals, strictly restrict vigorous running or sprinting for at least one to two hours before and after eating to mitigate bloat risk, and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a lean, highly athletic body condition; excess weight is detrimental to a sighthound's skeletal structure.",
      "Rest the dog before and after meals to mitigate the risk of bloat (gastric dilatation-volvulus).",
      "Feed from an elevated bowl if the dog demonstrates discomfort bending its long neck to the floor.",
      "Account for training treats within the total daily caloric allowance.",
      "Provide deeply cushioned orthopedic bedding to prevent painful pressure sores on unpadded elbows and hips."
    ],

    note:
      "Retired racing Greyhounds may require a specialized dietary transition when moving from a high-protein track diet to a standard pet diet. Consult a veterinarian for tailored feeding guidelines."
  },

  health: {
    overview:
      "The Greyhound is a highly athletic and generally healthy breed with a typical life expectancy of 10 to 13 years. Due to its unique physiology, the breed exhibits blood parameters (such as higher red blood cell counts and lower thyroid levels) that differ significantly from other breeds, requiring a veterinarian familiar with sighthound medicine. Primary health considerations include a high susceptibility to osteosarcoma (bone cancer), gastric dilatation-volvulus (bloat), delayed postoperative bleeding, and hereditary Greyhound polyneuropathy (NDRG1 mutation).",

    commonConditions: [
      "Osteosarcoma — a highly aggressive and prevalent primary bone cancer often affecting the long bones of the legs in middle-aged or senior Greyhounds",
      "Greyhound Polyneuropathy (NDRG1 gene mutation) — an inherited, severe neurological disorder causing progressive muscle weakness, exercise intolerance, and ataxia, screenable via DNA testing",
      "Gastric dilatation-volvulus (GDV / bloat) — an acute, life-threatening twisting and distension of the stomach in deep-chested breeds, requiring emergency veterinary care",
      "Delayed postoperative bleeding (Hyperfibrinolysis) — a breed-specific tendency to bleed excessively 24 to 48 hours after minor surgeries or trauma, highly treatable with antifibrinolytic medications (e.g., aminocaproic acid)",
      "Pannus (Chronic Superficial Keratitis) — an immune-mediated disease of the cornea exacerbated by ultraviolet light exposure, requiring lifelong veterinary eye drops",
      "Dental disease — a strong predisposition to heavy tartar buildup, gingivitis, and periodontal disease, requiring vigilant lifelong dental hygiene",
      "Corns — painful, hard keratinized paw pad lesions unique to sighthounds, causing severe lameness that requires specialized veterinary management"
    ],

    preventiveCare: [
      "Confirm that breeding stock has certified clearances for Greyhound polyneuropathy (NDRG1), cardiac evaluations, and specialist eye examinations.",
      "Feed two smaller meals daily and strictly avoid vigorous sprinting immediately before or after eating to mitigate bloat risk.",
      "Ensure your veterinarian is aware of sighthound-specific anesthesia protocols and the breed's unique blood work baselines.",
      "Discuss administering aminocaproic acid or similar antifibrinolytics with your veterinarian prior to any surgical procedure or dental extraction.",
      "Brush teeth daily and schedule regular professional veterinary dental cleanings to combat severe periodontal disease.",
      "Provide deeply cushioned orthopedic bedding to protect unpadded joints from hygromas and pressure sores."
    ],

    recommendedScreenings: [
      "DNA marker test for Greyhound Polyneuropathy (NDRG1 gene)",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist (CAER)",
      "Cardiac evaluation (auscultation or echocardiogram) by a board-certified veterinary cardiologist",
      "Regular veterinary dental assessments"
    ],

    dentalCare:
      "Brush teeth daily using canine enzymatic toothpaste. The breed has a perfect, regular scissor bite but is notoriously prone to early-onset dental disease, tartar, and tooth loss without strict hygiene.",

    earCare:
      "Inspect the small, fine-textured rose ears weekly for dirt, wax accumulation, or redness. Clean gently using a veterinarian-recommended ear solution.",

    skinCare:
      "Inspect the extremely thin, uninsulated skin regularly for tears, cuts, or abrasions after outdoor running. Protect the dog from freezing temperatures with coats and from intense summer sun to prevent solar dermatitis."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Individuals and families seeking a calm, affectionate, and quiet indoor companion",
      "Apartment dwellers who can provide daily leashed walks and occasional safe sprinting opportunities",
      "Owners committed to keeping the dog securely leashed or strictly within a six-foot fenced enclosure outdoors",
      "Sighthound enthusiasts participating in amateur lure coursing or straight racing",
      "Those looking to adopt and rehabilitate retired racing dogs"
    ],

    notIdealFor: [
      "Owners seeking a reliable off-leash companion in unfenced open areas",
      "Households with free-roaming outdoor cats, rabbits, or small pets vulnerable to explosive prey drive",
      "People seeking a fierce, territorial guard dog or loud watchdog",
      "Individuals unable or unwilling to manage the breed's strict dental hygiene and cold-weather clothing needs"
    ]
  },

  funFacts: [
    "The Greyhound is universally recognized as the fastest breed of dog, capable of reaching breathtaking speeds of up to 45 miles per hour (72 km/h) in a short sprint, utilizing a specialized 'double suspension gallop' where all four feet leave the ground twice during each stride.",
    "Despite their explosive athletic capabilities outdoors, Greyhounds are famously lazy indoors, earning the affectionate nickname '45-mph couch potatoes' from enthusiasts.",
    "The breed has unique physiological adaptations for speed, including an unusually large heart, highest percentage of fast-twitch muscle fibers of any breed, and blood that contains significantly more oxygen-carrying red blood cells than other dogs.",
    "Greyhounds are the only dog breed explicitly mentioned by name in the King James Version of the Bible (Proverbs 30:29-31), noted for their graceful stride.",
    "Because they have virtually no body fat and a very thin, fine coat, Greyhounds are highly susceptible to cold and rain, requiring warm fleece coats or sweaters for winter walks.",
    "Because of their narrow heads and long, thick necks, standard buckle collars easily slip off a Greyhound; they must be walked using a specialized wide martingale collar or a secure sighthound harness."
  ],

  faq: [
    {
      question: "What is a Greyhound?",
      answer:
        "The Greyhound is a tall, aerodynamic British sighthound renowned as the fastest dog breed in the world, combining explosive sprinting speed in the field with a gentle, quiet, and affectionate demeanor indoors."
    },
    {
      question: "How tall and heavy is a Greyhound?",
      answer:
        "Adult males stand 71 to 76 cm at the withers and typically weigh 65 to 70 pounds, while adult females stand 68 to 71 cm and weigh 60 to 65 pounds."
    },
    {
      question: "How long does a Greyhound live?",
      answer:
        "With proper nutrition, strict dental care, and preventive veterinary attention, the breed typically enjoys a healthy lifespan of 10 to 13 years."
    },
    {
      question: "Do Greyhounds shed a lot, and how are they groomed?",
      answer:
        "They are low-to-moderate shedders. Their extremely short, fine coat requires minimal grooming—just a quick weekly brush with a rubber hound mitt—but their lack of body fat means they require warm coats in cold weather."
    },
    {
      question: "Can a Greyhound live in an apartment?",
      answer:
        "Yes, surprisingly well. Despite their speed, they are notoriously lazy and quiet indoors, making them excellent apartment dogs provided they receive a daily walk and occasional access to a safely fenced area for short sprints."
    },
    {
      question: "Are Greyhounds good with cats and small dogs?",
      answer:
        "Caution is required. Greyhounds have a deeply ingrained prey drive and may instinctively chase small, fast-moving animals. While some can live peacefully with indoor cats, careful introduction and supervision are mandatory."
    },
    {
      question: "Can a Greyhound be walked off-leash?",
      answer:
        "Never, unless in a fully enclosed area with a high, secure fence. A Greyhound's incredible speed and visual prey drive mean that if they spot a squirrel or rabbit, they will bolt instantly and cannot be recalled."
    },
    {
      question: "Do Greyhounds have special medical needs?",
      answer:
        "Yes. Greyhounds have unique blood parameters, a high sensitivity to certain anesthetics, a predisposition to severe dental disease, and a breed-specific risk for delayed postoperative bleeding, requiring a veterinarian familiar with sighthounds."
    },
    {
      question: "What health screenings are recommended for breeding dogs?",
      answer:
        "Recommended pre-breeding screenings include a DNA test for Greyhound Polyneuropathy (NDRG1 mutation), certified veterinary ophthalmologist eye exams, and cardiac evaluations."
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
    "wikimedia-greyhound-kk70088",
    "wikimedia-greyhound-close-up-vincent-eisfeld"
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
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "Standard heading: GREYHOUND"
        },
        {
          id: "fci-greyhound-nomenclature",
          role: "verified",
          locator: "Official nomenclature: GREYHOUND (158)"
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Verified across FCI Standard No. 158 and FCI Nomenclature."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 10 Sighthounds; Section 3 Short-haired sighthounds; Without working trial"
        },
        {
          id: "fci-greyhound-nomenclature",
          role: "verified",
          locator: "Group 10, Section 3 Short-haired sighthounds, without working trial"
        },
        {
          id: "the-kennel-club-greyhound-breed-standard",
          role: "verified",
          locator: "Hound Group"
        },
        {
          id: "akc-greyhound-breed-standard",
          role: "verified",
          locator: "Hound Group"
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
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "ORIGIN: Great Britain; BRIEF HISTORICAL SUMMARY"
        },
        {
          id: "fci-greyhound-nomenclature",
          role: "verified",
          locator: "Country of origin: Great Britain"
        },
        {
          id: "the-kennel-club-greyhound-breed-standard",
          role: "verified",
          locator: "Origin and development in Great Britain"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "the-kennel-club-greyhound-breed-standard",
          role: "verified",
          locator: "General Appearance, Characteristics, Temperament"
        },
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "About the Breed, History, and Roles"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Synthesized in original prose from FCI Standard No. 158, The Royal Kennel Club, and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE"
        },
        {
          id: "the-kennel-club-greyhound-breed-standard",
          role: "verified",
          locator: "Head and Skull, Eyes, Ears, Body, Tail, Coat, Colour, Size"
        },
        {
          id: "akc-greyhound-breed-standard",
          role: "verified",
          locator: "Head, Neck, Shoulders, Chest, Back, Loins, Hindquarters, Feet, Tail, Coat, Color, Weight"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Conformation, aerodynamic sighthound build, fine close coat, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "SIZE: Ideal height: Dogs: 71 - 76 cm. Bitches: 68 - 71 cm."
        },
        {
          id: "the-kennel-club-greyhound-breed-standard",
          role: "verified",
          locator: "Size: Ideal height: dogs: 71-76 cms (28-30 ins); bitches: 69-71 cms (27-28 ins)."
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Preserved in published unit of centimetres (71-76 cm for males, 68-71 cm for females) exactly as specified in the official FCI Standard No. 158."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-greyhound-breed-standard",
          role: "verified",
          locator: "Weight: Dogs, 65 to 70 pounds; bitches 60 to 65 pounds."
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "FCI Standard No. 158 does not explicitly define weight limits. The stored 65 to 70 pounds for males and 60 to 65 pounds for females represent canonical figures published by the AKC standard, preserved strictly in pounds per Rule 9."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 10-13 years"
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Supported by kennel club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (2/5)"
        },
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "COAT: Fine and close."
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "Muzzle: Jaws powerful and well chiselled."
        },
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (1/5)"
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Clean, powerful, well-chiseled jaws without loose flews prevent drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Possessing remarkable stamina and endurance. Intelligent, gentle, affectionate and even tempered."
        },
        {
          id: "the-kennel-club-greyhound-breed-standard",
          role: "verified",
          locator: "Temperament: Intelligent, gentle, affectionate and even-tempered."
        },
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Temperament: Independent, Gentle, Noble"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        },
        {
          id: "the-kennel-club-greyhound-breed-standard",
          role: "cited",
          locator: "Temperament and behavior guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented sighthound temperament, high family docility, and intense visual prey drive."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        }
      ],
      verifiedOn: null,
      note:
        "Combines athletic sighthound management with short-coat thermal protection and soft-bedding care protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Energy Level (3/5 to 4/5); Exercise Needs (3/5)"
        },
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "UTILIZATION: Sighthound built for great speed"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "the-kennel-club-greyhound-breed-standard",
          role: "cited",
          locator: "Exercise requirements: Up to 1 hour per day"
        },
        {
          id: "akc-greyhound-breed-profile",
          role: "cited",
          locator: "Daily exercise recommendations"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 45 to 60 minutes of daily activity reflects the moderate exercise demands of a sprint-focused sighthound."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Adaptability: Adapts Well to Apartment Living (4/5 to 5/5); calm and quiet indoors"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Exercise and strictly secure fenced-yard recommendations"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "COAT: Fine and close (lacks thermal protection)"
        },
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Weather adaptation: highly sensitive to extreme cold, requiring a winter coat"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "cited",
          locator: "Tolerates Being Alone: Moderate; sleeps extensively but enjoys human company"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food formulated for large athletic breeds, portion control"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for deep-chested large breeds prone to bloat."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance and divided meals to mitigate bloat"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "greyhound-neuropathy-ndrg1-study-2010",
          role: "verified",
          locator: "NDRG1 mutation causing Greyhound polyneuropathy"
        },
        {
          id: "ofa-greyhound-chic-requirements",
          role: "verified",
          locator: "CHIC Program requirements: Greyhound Neuropathy (NDRG1) DNA test, Ophthalmologist Evaluation (CAER), Cardiac Evaluation"
        },
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Health overview: Osteosarcoma, dental disease, bleeding tendencies, bloat, and anesthesia sensitivity"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Synthesizes peer-reviewed genetics research with national health registry screening protocols."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "greyhound-neuropathy-ndrg1-study-2010",
          role: "verified",
          locator: "Greyhound Polyneuropathy (NDRG1 mutation) pathology"
        },
        {
          id: "ofa-greyhound-chic-requirements",
          role: "verified",
          locator: "Eye conditions and cardiac anomalies"
        },
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Osteosarcoma, bloat (GDV), periodontal disease, hyperfibrinolysis, and corns"
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
          id: "akc-greyhound-breed-profile",
          role: "cited",
          locator: "Routine care, strict dental hygiene, bloat precautions, soft bedding, and veterinary sighthound knowledge"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to the unique physiology of sighthounds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-greyhound-chic-requirements",
          role: "verified",
          locator: "CHIC Program required screenings: Greyhound Neuropathy (NDRG1) DNA Test, Ophthalmologist Evaluation, Cardiac Evaluation"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Screenings summarize published health registry protocols."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "cited",
          locator: "Jaws/teeth: strong, perfect scissor bite"
        },
        {
          id: "akc-greyhound-breed-profile",
          role: "cited",
          locator: "High predisposition to early-onset dental disease and tartar buildup requiring daily hygiene"
        }
      ],
      verifiedOn: null,
      note: "Strict home dental hygiene guidelines for a breed highly prone to periodontal disease."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "cited",
          locator: "Ears: small, rose-shape, fine texture"
        },
        {
          id: "akc-greyhound-breed-profile",
          role: "cited",
          locator: "Ear hygiene and inspection"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for folded rose ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "cited",
          locator: "Coat texture: fine and close; thin skin"
        },
        {
          id: "akc-greyhound-breed-profile",
          role: "cited",
          locator: "Skin protection from cold weather and abrasive terrain"
        }
      ],
      verifiedOn: null,
      note: "General skin care and thermal protection guidelines for thin-skinned breeds."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        },
        {
          id: "the-kennel-club-greyhound-breed-standard",
          role: "cited",
          locator: "Characteristics and lifestyle suitability"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, quiet indoor habits, and intense prey drive."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Fastest dog breed (up to 45 mph), '45-mph couch potato' nickname, double suspension gallop, unique blood work, King James Bible reference"
        },
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "Brief historical summary: Ancient Egyptian tombs dating to 4000 BC"
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Verified historical folklore and biomechanical working facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-greyhound-official-standard",
          role: "verified",
          locator: "Origin, height (71-76 cm / 68-71 cm), coat, and speed"
        },
        {
          id: "akc-greyhound-breed-standard",
          role: "verified",
          locator: "Weight (65-70 lbs / 60-65 lbs)"
        },
        {
          id: "akc-greyhound-breed-profile",
          role: "verified",
          locator: "Lifespan (10-13 years), apartment living, off-leash warnings, grooming, and dog/cat sociability"
        },
        {
          id: "ofa-greyhound-chic-requirements",
          role: "verified",
          locator: "Recommended health screening panel (NDRG1, eyes, heart) and unique medical needs"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and genetics research without naming registries in prose."
    }
  },

  updatedOn: "2026-11-13"
};
