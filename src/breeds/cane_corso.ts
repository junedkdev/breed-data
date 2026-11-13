import type { Breed } from "../schema/breed.types";

export const cane_corso: Breed = {
  slug: "cane-corso",
  name: "Cane Corso",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Cane Corso Italiano",
    "Italian Mastiff",
    "Italian Corso Dog",
    "Corso"
  ],

  group:
    "Pinscher and Schnauzer Type, Molossoid Breeds, and Swiss Mountain and Cattle Dogs; Section 2.1 — Mastiff type Molossoids (without working trial; also classified in the Working and Guardian Dog groups)",

  origin: {
    country: "Italy",
    region:
      "Southern Italy (historically prevalent in Apulia, Lucania, and Sannio)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cane_corso_2021_03.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Cane_corso_2021_03.jpg",
      title: "Cane corso 2021 03.jpg",
      description:
        "An adult Cane Corso standing in profile, displaying its powerful mastiff build.",
      creator: "Wojciech Pędzich",
      uploader: "Wojciech Pędzich",
      capturedOn: "2021-08-14",
      uploadedOn: "2021-08-15",
      width: 4691,
      height: 3564,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Wojciech Pędzich, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Cane_corso_2021_03.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-13"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cane_corso_17.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Cane_corso_17.jpg",
      title: "Cane corso 17.jpg",
      description:
        "A large male Cane Corso standing outdoors, showing a distinctive dark brindle coat.",
      creator: "Wili15",
      uploader: "Wili15",
      capturedOn: "2014-04-17",
      uploadedOn: "2014-04-18",
      width: 3872,
      height: 2592,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Wili15, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Cane_corso_17.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-13"
    }
  ],

  overview: {
    summary:
      "A massive, athletic, and fiercely loyal Italian mastiff descendant of Roman war dogs, renowned for its protective instincts, imposing black or brindle coat, and quiet, confident intelligence.",

    description:
      "The Cane Corso is a large, sturdy, and elegant mastiff-type working dog that balances immense muscular power with athletic agility. Characterized by a broad, molossoid head with slightly converging skull and muzzle axes, the breed projects an aura of confident vigilance. Its short, dense, and shiny double coat provides excellent weather protection and appears in shades of black, lead-grey, slate-grey, light fawn, dark fawn, and brindle, often marked with a dark facial mask that does not extend beyond the eye line. The dark, oval eyes express a keen, watchful intelligence. When in motion, the Corso covers ground with a fluid, extended stride, masking its heavy bone structure with surprising grace. In the home, a well-socialized Corso is remarkably gentle, docile, and fiercely devoted to its family, while remaining inherently aloof and highly protective against unfamiliar threats.",

    history:
      "The Cane Corso is a direct descendant of the legendary 'Canis Pugnax', the massive war dogs employed by the Roman Empire. Its name derives from the Latin 'cohors', meaning 'protector' or 'guardian of the farmyard'. For centuries, the breed served as a versatile utility dog in rural Italy, particularly in the southern regions of Apulia, Lucania, and Sannio. Italian farmers relied on the Corso to guard property, drive cattle and swine to market, and hunt dangerous large game like wild boar. As Italian agricultural practices modernized in the mid-twentieth century, the breed faced near extinction. However, a dedicated group of Italian enthusiasts, led by Dr. Paolo Breber, launched a careful recovery program in the 1970s using a few surviving specimens from southern Italy. The breed was successfully rescued, earning official recognition in Italy in 1994 and internationally shortly thereafter, ascending to global popularity as a premier guardian and working dog.",

    originalPurpose:
      "Guarding property and livestock, droving cattle and swine, and hunting large, dangerous game such as wild boar in rural Italy.",

    currentRoles: [
      "Estate and family protection guardian",
      "Livestock and farm working dog",
      "Police and military tracking and apprehension",
      "Canine athlete in obedience and protection sports",
      "Devoted household companion for experienced handlers"
    ]
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "cm",
      male: {
        min: 64,
        max: 68
      },
      female: {
        min: 60,
        max: 64
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 45,
        max: 50
      },
      female: {
        min: 40,
        max: 45
      }
    },

    lifespanYears: {
      min: 9,
      max: 12
    },

    coatType:
      "Short, shiny, very dense double coat with a light, fine undercoat that thickens in winter; it is completely flat without fringing.",

    coatLength: "Short",

    coatColors: [
      "Black",
      "Lead-grey",
      "Slate-grey",
      "Light grey",
      "Light fawn",
      "Dark fawn",
      "Stag red",
      "Brindle (stripes on different shades of fawn or grey)"
    ],

    sheddingLevel:
      "Low to moderate; sheds steadily year-round with slightly heavier undercoat shedding in the spring",

    droolingLevel:
      "Moderate; possesses tighter flews than many mastiff breeds, but drooling occurs after drinking or intense physical exertion",

    distinctiveFeatures: [
      "Large, imposing, and elegant mastiff silhouette with a body slightly longer than the height at the withers",
      "Height at the withers of 64 to 68 cm for males and 60 to 64 cm for females (with a 2 cm tolerance)",
      "Working weight of 45 to 50 kg for males and 40 to 45 kg for females",
      "Broad, molossoid head with slightly converging longitudinal axes of the skull and muzzle",
      "Fawn and brindle dogs have a black or grey facial mask that does not extend beyond the eye line",
      "Strong, square muzzle that is as broad as it is long",
      "Complete, regular bite; a slight undershot bite (prognathism) is considered standard and acceptable",
      "Medium-sized, oval eyes set looking directly forward, as dark as possible according to coat color",
      "Medium-sized, uncropped triangular drop ears set high above the zygomatic arches (traditionally cropped in some regions, though banned in many countries)",
      "Thick, strong neck carrying a moderate amount of loose skin without an excessive dewlap",
      "Deep, broad chest extending down to the elbow with well-sprung ribs",
      "Thick tail set rather high, tapering at the tip, carried high in action but never curled over the back"
    ]
  },

  temperament: {
    traits: [
      "Intensely loyal, affectionate, and deeply bonded with its immediate family",
      "Fearless, courageous, and steadfast when protecting property or people",
      "Highly intelligent, observant, and naturally suspicious of unfamiliar strangers",
      "Calm, quiet, and composed in the home when physical needs are met",
      "Dominant and strong-willed, requiring firm, confident, and highly consistent human leadership",
      "Gentle and tolerant with children within its own household when raised together",
      "Can be assertive or aggressive toward unfamiliar dogs, requiring careful socialization",
      "Requires a defined 'job' or purpose to prevent destructive boredom",
      "Highly sensitive to its owner's tone of voice and emotional state",
      "Uncompromising and fiercely territorial perimeter guardian"
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 2,
      withStrangers: 2,
      protectiveness: 5,
      independence: 3,
      trainability: 4,
      barking: 2,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; a vigorous, athletic working mastiff requiring daily strenuous physical exercise and demanding mental tasks to remain balanced",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Daily brisk leashed power-walks or trail hikes",
        "Structured obedience drills and impulse-control training",
        "Canine sports such as IPO/IGP protection sports, tracking, or weight pulling",
        "Interactive fetch and heavy tug games using durable equipment",
        "Free running in a very large, securely fenced and reinforced yard"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush once or twice weekly using a rubber hound mitt or natural bristle brush to remove dead hairs, distribute skin oils, and maintain the coat's shine.",

      bathing:
        "Bathe infrequently—every two to three months or when visibly soiled—using a mild canine shampoo to avoid stripping natural protective oils.",

      notes: [
        "The short double coat is relatively low maintenance but sheds visibly, particularly in spring.",
        "Wipe the facial wrinkles and flew folds regularly to prevent moisture buildup and bacterial infection.",
        "Inspect the drop ears weekly for dirt, wax accumulation, or redness, cleaning gently with a veterinary-approved solution.",
        "Trim the strong, fast-growing nails every two to three weeks to maintain correct foot alignment and prevent splaying.",
        "Brush teeth several times weekly using canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Challenging; highly intelligent and capable, but possesses immense physical power, protective instincts, and a dominant nature requiring expert, consistent handling",

      tips: [
        "Begin intensive obedience and leash-walking training in early puppyhood before massive adult strength develops.",
        "Use firm, fair, and positive reinforcement; the breed respects calm, unwavering authority but will stubbornly resist or challenge a harsh, abusive handler.",
        "Establish extremely clear boundaries regarding territory, visitors, and resource guarding.",
        "Never encourage aggressive behavior or bite work without professional supervision; protective instincts are already deeply hardwired.",
        "Keep training sessions engaging, purposeful, and mentally challenging to maintain focus.",
        "Always exercise within a securely fenced area of at least six feet in height with sturdy gates."
      ],

      socialization:
        "Extensive, continuous socialization is absolutely critical from the day the puppy arrives. Introduce the dog safely and positively to a wide variety of people, neutral vaccinated dogs, diverse environments, and household guests. Early structured exposure ensures its powerful guardian instincts mature into calm, discerning judgment rather than indiscriminate fear or aggression."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Warm climates, provided indoor air conditioning, shade, and fresh water are available and exercise occurs during cooler hours",
        "Cool climates, where the dense winter undercoat provides adequate protection during outdoor activity"
      ],

      aloneTimeTolerance:
        "Low to moderate; deeply attached to its family and prone to separation anxiety or destructive behavior if left isolated outdoors for long hours."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for large or giant active working breeds, with carefully controlled growth parameters for puppies.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age, transitioning to two meals daily on a large-breed growth formula to prevent rapid, uneven bone development.",
      adult:
        "Two measured meals daily to support heavy muscle mass and reduce the volume of food in the stomach at one time.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output and joint support."
    },

    guidelines:
      "Measure daily rations carefully using a digital kitchen scale or standard measuring cup, adjusting amounts to maintain a lean, athletic body silhouette where the heavy musculature is visible and excess fat is strictly avoided. Divide daily food into two distinct meals, strictly restrict vigorous exercise for at least one hour before and after eating to mitigate bloat risk, and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a lean, muscular body condition; excess weight places severe stress on large joints and ligaments.",
      "Account for training treats within the total daily caloric allowance to prevent obesity.",
      "Rest the dog before and after meals to mitigate the risk of bloat (gastric dilatation-volvulus).",
      "Avoid rapid puppy growth; strictly avoid calcium supplements unless expressly prescribed by a veterinarian.",
      "Increase protein and caloric density if the dog is actively used for strenuous protection sports or farm work.",
      "Transition between diet formulas gradually over five to seven days."
    ],

    note:
      "Caloric needs vary significantly based on exercise intensity, age, and environmental temperature. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Cane Corso is a robust, athletic, and heavy-boned working breed with a typical life expectancy of 9 to 12 years. Primary health priorities focus on orthopedic screening for hip and elbow dysplasia, cardiac evaluations, ophthalmic examinations for entropion and ectropion, and DNA screening for breed-specific genetic conditions such as Dental-Skeletal-Retinal Anomaly (DSRA) and Neuronal Ceroid Lipofuscinosis (NCL).",

    commonConditions: [
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints leading to osteoarthritis, monitored through pre-breeding radiographic screening",
      "Elbow dysplasia — developmental abnormalities of the elbow joints that can cause forelimb lameness and secondary arthritis",
      "Dental-Skeletal-Retinal Anomaly (DSRA / MIA3 gene mutation) — an inherited, breed-specific autosomal recessive disorder causing brittle, discolored teeth, disproportionate skeletal growth, and progressive retinal degeneration, completely screenable via DNA testing",
      "Neuronal Ceroid Lipofuscinosis (NCL) — an inherited neurodegenerative disease causing progressive neurological decline, screenable via DNA testing",
      "Gastric dilatation-volvulus (GDV / bloat) — an acute, life-threatening twisting and distension of the stomach in large, deep-chested breeds, requiring emergency veterinary care",
      "Eyelid abnormalities (Entropion, Ectropion) and 'Cherry Eye' (prolapse of the gland of the nictitating membrane) — ocular conditions requiring veterinary surgical correction",
      "Idiopathic epilepsy — inherited recurrent neurological seizures, manageable with veterinary anticonvulsant medication",
      "Subvalvular aortic stenosis (SAS) and Dilated Cardiomyopathy (DCM) — cardiac conditions monitored through veterinary cardiologist examinations"
    ],

    preventiveCare: [
      "Confirm that breeding stock has certified radiographic clearances for hips and elbows, cardiac evaluations, specialist eye examinations, and DNA clearances for DSRA and NCL.",
      "Feed two smaller meals daily and avoid vigorous exercise immediately before or after eating to reduce bloat risk.",
      "Maintain a lean, muscular body condition throughout growth and adulthood to minimize mechanical wear on joints.",
      "Inspect the drop ears and facial folds weekly, cleaning gently with a veterinary-approved solution to prevent bacterial or yeast infections.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation through an accredited national screening program prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "Congenital cardiac examination by a veterinary cardiologist",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist",
      "Clinical patellar luxation orthopedic evaluation",
      "DNA marker test for Dental-Skeletal-Retinal Anomaly (DSRA / MIA3 gene)",
      "DNA marker test for Neuronal Ceroid Lipofuscinosis (NCL)"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste. The breed has massively powerful jaws with a slight undershot bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the medium-sized triangular drop ears weekly for wax accumulation, moisture, or redness. Clean gently using a veterinarian-recommended ear solution, drying the leather thoroughly.",

    skinCare:
      "Part the short coat weekly during brushing to inspect the skin for external parasites or irritation. Keep the facial wrinkles clean and dry to prevent localized skin fold dermatitis."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Highly experienced dog owners familiar with dominant, powerful guardian or mastiff breeds and firm, positive leadership",
      "Active individuals or rural households with extensive, securely fenced property",
      "Canine sports enthusiasts involved in IPO/IGP protection sports, tracking, or advanced obedience",
      "Owners deeply committed to extensive, lifelong socialization and structured daily training",
      "Families with older, respectful children seeking a devoted and uncompromising home guardian"
    ],

    notIdealFor: [
      "First-time dog owners, passive handlers, or those intimidated by immense physical strength",
      "Apartment, condominium, or dense urban dwellers without access to a large, secure yard",
      "Households with frequent, unannounced visitors or chaotic neighborhood playgroups",
      "Owners seeking an easygoing dog park companion that mixes freely with unfamiliar dogs",
      "Sedentary individuals looking for a low-energy indoor pet"
    ]
  },

  funFacts: [
    "The Cane Corso is a direct descendant of the fearsome 'Canis Pugnax', the massive war dogs employed by the Roman legions across the ancient empire.",
    "The breed's name has nothing to do with the island of Corsica; it derives from the Latin word 'cohors', which means 'protector' or 'guardian of the farmyard'.",
    "Despite its ancient Roman origins, the breed was nearly extinct by the mid-twentieth century and was painstakingly resurrected in the 1970s by a group of dedicated Italian enthusiasts who scoured rural southern Italy for surviving specimens.",
    "Unlike heavier, more ponderous mastiff breeds, the Cane Corso was bred for agile athleticism and can run with surprising speed and grace when pursuing wild boar.",
    "In recent years, the breed has surged in global popularity, frequently appearing in films, television, and celebrity households due to its imposing, statuesque appearance and intense loyalty."
  ],

  faq: [
    {
      question: "What is a Cane Corso?",
      answer:
        "The Cane Corso is a large, powerful, and athletic Italian mastiff bred originally to hunt big game, drive cattle, and guard rural farmsteads, renowned for its fearless protective instincts and deep loyalty to its family."
    },
    {
      question: "How tall and heavy is a Cane Corso?",
      answer:
        "Adult males stand 64 to 68 cm at the withers and weigh 45 to 50 kg, while adult females stand 60 to 64 cm and weigh 40 to 45 kg, presenting an elegant yet massively muscled silhouette."
    },
    {
      question: "How long does a Cane Corso live?",
      answer:
        "With proper nutrition, regular exercise, and conscientious preventive veterinary care, the breed typically enjoys a lifespan of 9 to 12 years."
    },
    {
      question: "Is the Cane Corso a good family dog?",
      answer:
        "Yes, but only for highly experienced, active families. Within their own household, they are deeply affectionate, loyal, and gentle with their own children, but their massive strength and protective instincts require expert handling and lifelong socialization."
    },
    {
      question: "Are Cane Corsos aggressive?",
      answer:
        "A well-bred and properly socialized Cane Corso is calm, confident, and discerning. However, they are highly territorial, naturally suspicious of strangers, and can be assertive toward unfamiliar dogs if not trained and managed properly."
    },
    {
      question: "Can a Cane Corso live in an apartment?",
      answer:
        "No. Due to their large size, immense power, protective instincts, and need for vigorous daily exercise, they are completely unsuited to apartment living and require a home with a large, securely fenced yard."
    },
    {
      question: "Do Cane Corsos shed a lot, and how are they groomed?",
      answer:
        "They shed moderately year-round and shed their undercoat more heavily in the spring. Their short coat is low-maintenance, requiring only weekly brushing with a rubber mitt and occasional baths."
    },
    {
      question: "How much exercise does a Cane Corso need each day?",
      answer:
        "The breed requires 60 to 90 minutes of vigorous daily physical activity, including power-walking, running, and structured training tasks to keep them physically and mentally fulfilled."
    },
    {
      question: "What is DSRA in Cane Corsos?",
      answer:
        "Dental-Skeletal-Retinal Anomaly (DSRA) is a rare, breed-specific genetic disorder causing brittle teeth, skeletal growth issues, and vision loss. It is entirely preventable by ensuring breeders perform the available DNA test on parent dogs."
    },
    {
      question: "What health screenings are recommended for breeding dogs?",
      answer:
        "Recommended pre-breeding screenings include radiographic evaluations for hip and elbow dysplasia, veterinary cardiac and eye exams, and DNA testing for DSRA and Neuronal Ceroid Lipofuscinosis (NCL)."
    }
  ],

  references: [
    "fci-cane-corso-italiano-official-standard",
    "fci-cane-corso-italiano-nomenclature",
    "enci-cane-corso-italiano-standard",
    "akc-cane-corso-breed-standard",
    "akc-cane-corso-breed-profile",
    "ccaa-cane-corso-health",
    "ofa-cane-corso-chic-requirements",
    "cane-corso-dsra-mia3-study-2021",
    "wikimedia-cane-corso-17-wili15",
    "wikimedia-cane-corso-2021-03-wojciech"
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
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "Standard heading: CANE CORSO ITALIANO"
        },
        {
          id: "akc-cane-corso-breed-profile",
          role: "verified",
          locator: "History: Italian Mastiff, Italian Corso Dog, Corso"
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Verified across FCI Standard No. 343 and AKC profile."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 2 Pinscher and Schnauzer, Molossoid breeds, Swiss Mountain and Cattle Dogs; Section 2.1 Mastiff type Molossoids, without working trial"
        },
        {
          id: "akc-cane-corso-breed-standard",
          role: "verified",
          locator: "Working Group"
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
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "ORIGIN: Italy; BRIEF HISTORICAL SUMMARY"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "enci-cane-corso-italiano-standard",
          role: "verified",
          locator: "Storia, Aspetto Generale, Comportamento e Carattere"
        },
        {
          id: "akc-cane-corso-breed-profile",
          role: "verified",
          locator: "About the Breed, History, Canis Pugnax, and Roles"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Synthesized in original prose from FCI Standard No. 343, ENCI, and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS, HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE AND WEIGHT"
        },
        {
          id: "akc-cane-corso-breed-standard",
          role: "verified",
          locator: "General Appearance, Size, Proportion, Substance, Head, Coat, Color"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Conformation, elegant mastiff build, slightly undershot bite, coat colors, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Height at the withers: Males: 64 cm - 68 cm. Females: 60 cm - 64 cm. With a tolerance of 2 cm, more or less."
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Preserved in published unit of centimetres (64–68 cm for males and 60–64 cm for females) exactly as specified in the official FCI Standard No. 343."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "Weight: Males: 45 - 50 kg. Females: 40 - 45 kg."
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Preserved in published unit of kilograms (45 to 50 kg for males and 40 to 45 kg for females) exactly as specified in the official FCI Standard No. 343."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 9-12 years"
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Supported by kennel club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (3/5)"
        },
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "COAT: Short, shiny, very dense with a light undercoat"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "Lips: The upper lips moderately hanging and cover the lower jaw"
        },
        {
          id: "akc-cane-corso-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (3/5)"
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Moderately hanging flews produce moderate drooling, especially during exertion."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Guardian of property, family and livestock; extremely agile and responsive."
        },
        {
          id: "akc-cane-corso-breed-standard",
          role: "verified",
          locator: "Temperament: Intelligent, active, even-minded, unequalled watch and protection dog. Docile and affectionate with owner, loving with children and family."
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented guardian mastiff temperament, high protectiveness, and intelligence."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active guardian dog management with short-coat grooming and secure boundary protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "verified",
          locator: "Energy Level (4/5); Exercise Needs (4/5)"
        },
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "UTILIZATION: Guardian of property, family and livestock"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "cited",
          locator: "Exercise recommendations for working mastiffs"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 60 to 90 minutes of daily activity reflects the exercise demands of an athletic, muscular working dog."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "cited",
          locator: "Large size, strong guarding instincts, and need for open movement"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial evaluation that massive size, protective territorial instincts, and exercise needs make apartment living unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "verified",
          locator: "Exercise and secure fenced-yard recommendations (minimum six-foot fence)"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "COAT: Short, shiny, very dense with a light undercoat"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "cited",
          locator: "Tolerates Being Alone: Low to moderate; devoted family guardian"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food formulated for large active breeds"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for large, heavily muscled working breeds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance and divided meals to mitigate bloat"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule for large breeds."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "cane-corso-dsra-mia3-study-2021",
          role: "verified",
          locator: "MIA3 Splice Defect in Cane Corso Dogs with Dental-Skeletal-Retinal Anomaly (DSRA)"
        },
        {
          id: "ofa-cane-corso-chic-requirements",
          role: "verified",
          locator: "CHIC Program requirements: Hip, Elbow, Cardiac, Eye, Patellar Luxation, NCL DNA, DSRA DNA"
        },
        {
          id: "ccaa-cane-corso-health",
          role: "verified",
          locator: "CCAA Health updates: DSRA and NCL added to CHIC testing"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Synthesizes peer-reviewed genetics research (DSRA) with national health registry screening protocols."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "cane-corso-dsra-mia3-study-2021",
          role: "verified",
          locator: "Dental-Skeletal-Retinal Anomaly (DSRA) clinical description and genetics"
        },
        {
          id: "ofa-cane-corso-chic-requirements",
          role: "verified",
          locator: "Hip dysplasia, elbow dysplasia, NCL, cardiac anomalies, eye disorders"
        },
        {
          id: "akc-cane-corso-breed-profile",
          role: "verified",
          locator: "Gastric dilatation-volvulus (bloat) and idiopathic epilepsy"
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
          id: "ccaa-cane-corso-health",
          role: "cited",
          locator: "Preventive health, joint management, and CHIC screening compliance"
        },
        {
          id: "akc-cane-corso-breed-profile",
          role: "cited",
          locator: "Routine care, bloat precautions, and veterinary wellness checks"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to large mastiff breeds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-cane-corso-chic-requirements",
          role: "verified",
          locator: "CHIC Program required screenings: Radiographic Hip and Elbow Dysplasia evaluation, Cardiac Evaluation, CAER Eye examination, Patellar Luxation, NCL DNA test, DSRA DNA test"
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
          id: "fci-cane-corso-italiano-official-standard",
          role: "cited",
          locator: "Jaws/teeth: very broad, thick and curved; slightly undershot bite"
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "cited",
          locator: "Ears: medium sized, triangular, dropping, set on high"
        },
        {
          id: "akc-cane-corso-breed-profile",
          role: "cited",
          locator: "Ear hygiene and inspection"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for drop ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "cited",
          locator: "Skin protection and facial fold cleaning"
        }
      ],
      verifiedOn: null,
      note: "General skin and facial wrinkle care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        },
        {
          id: "akc-cane-corso-breed-standard",
          role: "cited",
          locator: "Characteristics and guardian lifestyle suitability"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, extreme power, and guardian dominance."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-cane-corso-breed-profile",
          role: "verified",
          locator: "Canis Pugnax war dog origins, 'cohors' etymology, 1970s Dr. Paolo Breber revival"
        },
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "Brief historical summary: Southern Italian roots (Apulia, Lucania, Sannio)"
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Verified historical folklore and working heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-cane-corso-italiano-official-standard",
          role: "verified",
          locator: "Origin, height (64-68 cm / 60-64 cm), weight (45-50 kg / 40-45 kg), coat, and colors"
        },
        {
          id: "akc-cane-corso-breed-profile",
          role: "verified",
          locator: "Lifespan (9-12 years), apartment living, family life, and dog aggression"
        },
        {
          id: "cane-corso-dsra-mia3-study-2021",
          role: "verified",
          locator: "Dental-Skeletal-Retinal Anomaly (DSRA) DNA testing"
        },
        {
          id: "ofa-cane-corso-chic-requirements",
          role: "verified",
          locator: "Recommended health screening panel (Hips, Elbows, Eyes, Cardiac, NCL, DSRA)"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and genetics research without naming registries in prose."
    }
  },

  updatedOn: "2026-11-13"
};
