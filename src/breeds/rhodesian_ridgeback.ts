import type { Breed } from "../schema/breed.types";

export const rhodesian_ridgeback: Breed = {
  slug: "rhodesian-ridgeback",
  name: "Rhodesian Ridgeback",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "African Lion Hound",
    "Lion Dog",
    "Ridgeback",
    "Chien de Rhodésie à Crête Dorsale",
    "Perro Crestado Rodesiano"
  ],

  group: "Scenthounds and Related Breeds (African Hunting Hound)",

  origin: {
    country: "South Africa",
    region: "Southern Africa (Cape Colony, South Africa, and historical Matabeleland / Zimbabwe)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rhodesian_ridgeback_(8109929134).jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Rhodesian_ridgeback_(8109929134).jpg",
      title: "Rhodesian ridgeback (8109929134).jpg",
      description:
        "An adult wheaten Rhodesian Ridgeback showing its sleek short coat, dark eyes, and athletic head and shoulders.",
      creator: "Pets Adviser",
      uploader: "Томасина",
      capturedOn: "2012-10-21",
      uploadedOn: "2015-03-21",
      width: 3648,
      height: 2736,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Pets Adviser (https://www.petsadviser.com), Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:Rhodesian_ridgeback_(8109929134).jpg. License: https://creativecommons.org/licenses/by/2.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rhodesian_Ridgeback_16.10.2011_pl.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Rhodesian_Ridgeback_16.10.2011_pl.jpg",
      title: "Rhodesian Ridgeback 16.10.2011 pl.jpg",
      description:
        "A mature Rhodesian Ridgeback standing outdoors at a dog show in Poland.",
      creator: "Pleple2000",
      uploader: "Pleple2000",
      capturedOn: "2011-10-16",
      uploadedOn: null,
      width: 1500,
      height: 1388,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Pleple2000, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Rhodesian_Ridgeback_16.10.2011_pl.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    }
  ],

  overview: {
    summary:
      "A powerful, athletic southern African hound distinguished by the symmetrical ridge of reverse-growing hair along its spine, great endurance, dignified reserve with strangers, and deep loyalty to its family.",

    description:
      "The Rhodesian Ridgeback is a handsome, muscular, symmetrically built hound combining high endurance with agile speed on a clean, slightly rectangular frame. Its unmistakable trademark is the dorsal ridge—a well-defined band of hair growing forward along the back, beginning directly behind the shoulders with two matching opposite whorls (crowns) and tapering neatly toward the hips. The short, dense, glossy coat spans wheaten shades from pale flaxen to deep red wheaten, paired with either a black nose and dark eyes or a brown (liver) nose and amber eyes. A flat skull, moderate stop, strong muzzle, clean tight lips, and high-set medium drop ears frame a calm, intelligent expression. Outdoors, it is a bold, fast-moving athlete with keen hunting drive; indoors, it is typically composed, affectionate, and quietly watchful.",

    history:
      "The only registered breed indigenous to southern Africa, the Rhodesian Ridgeback arose in the Cape Colony when early European settlers crossed their hunting and guardian dogs—including Greyhounds, Mastiffs, Terriers, and Great Danes—with the semi-domesticated ridged hunting dogs of the indigenous Khoikhoi people. In the late nineteenth century, big-game hunter Cornelius van Rooyen further refined these versatile hounds in Matabeleland (modern Zimbabwe) to track game in small packs of two or three and hold lions at bay through agile harassment—never attacking directly—until the hunter arrived. In 1922, breeder Francis Richard Barnes gathered enthusiasts in Bulawayo to draft the breed's first formal description, modeling its balanced proportions on the Dalmatian, with regional kennel approval following in 1926. Today the breed is prized worldwide as a devoted family companion, watchdog, and canine athlete.",

    originalPurpose:
      "Tracking large African game—most famously baying and holding lions at bay in small packs until the hunter arrived—and guarding frontier farms.",

    currentRoles: [
      "Devoted family companion and alert household watchdog",
      "Versatile big-game tracking and hunting hound",
      "Canine athlete in lure coursing, tracking, agility, and obedience",
      "Endurance hiking and running partner for active owners"
    ]
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "cm",
      male: {
        min: 63,
        max: 69
      },
      female: {
        min: 61,
        max: 66
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 36,
        max: 41
      },
      female: {
        min: 29,
        max: 34
      }
    },

    lifespanYears: {
      min: 10,
      max: 12
    },

    coatType:
      "Short, dense, sleek, and glossy single coat featuring a clearly defined, symmetrical dorsal ridge of forward-growing hair with two identical opposite crowns behind the shoulders tapering toward the hips.",

    coatLength: "Short",

    coatColors: [
      "Light wheaten",
      "Wheaten",
      "Red wheaten"
    ],

    sheddingLevel:
      "Moderate year-round; sheds fine short hairs easily managed with weekly brushing",

    droolingLevel:
      "Low; clean, tightly fitting lips keep drooling minimal",

    distinctiveFeatures: [
      "Symmetrical, muscular, athletic hound frame built for endurance and agile speed",
      "Height at the withers of 63 to 69 cm in males and 61 to 66 cm in females",
      "Mature weight typically 36 to 41 kg in males (ideal 36.5 kg) and 29 to 34 kg in females (ideal 32 kg)",
      "Trademark dorsal ridge of reverse-growing hair starting behind the shoulders with two identical opposite crowns and tapering cleanly toward the hips",
      "Wheaten coat ranging from pale flaxen to rich red wheaten, with minimal white on chest and toes permitted",
      "Either a black nose paired with dark eyes or a brown (liver) nose paired with amber eyes",
      "Flat skull, moderate stop, strong deep muzzle, and clean, closely fitting lips",
      "Strong jaws with a complete scissor bite",
      "Round, bright, moderately wide-set eyes harmonizing with coat color",
      "Medium-sized drop ears set fairly high, broad at the base and tapering to a rounded tip",
      "Deep chest reaching the elbows, well-sprung ribs, and a strong tail carried in a gentle upward curve"
    ]
  },

  temperament: {
    traits: [
      "Dignified, even-tempered, and composed indoors",
      "Deeply loyal, affectionate, and protective of its family",
      "Naturally reserved or aloof with strangers without shyness or unprovoked aggression",
      "Intelligent, strong-willed, and independent",
      "Courageous and steady when confronting genuine threats",
      "Athletic and driven outdoors with a very strong prey drive",
      "Patient and gentle with familiar family children",
      "Quiet watchdog that typically barks only for a reason",
      "Sensitive to harsh handling and responsive to firm, fair leadership"
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 5,
      independence: 4,
      trainability: 4,
      barking: 2,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; a strong, athletic hound that needs daily brisk walks, secure running opportunities, and mental engagement",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Daily brisk walks and long trail hikes",
        "Free sprinting and fetch in a tall, securely fenced yard",
        "Lure coursing, tracking, agility, and obedience training",
        "Structured distance jogging once skeletal growth is complete",
        "Scent-work games and food puzzles for mental stimulation"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush once a week with a rubber curry brush or hound glove to remove loose hairs and keep the short coat glossy.",

      bathing:
        "Bathe only occasionally when muddy or dusty, using a mild dog shampoo.",

      notes: [
        "Trim nails regularly—many Ridgebacks dislike clippers and respond much better to a rotary nail grinder.",
        "Check the medium drop ears weekly for wax buildup or irritation.",
        "Inspect the dorsal midline of puppies carefully (and have a veterinarian palpate it) to rule out dermoid sinus.",
        "Provide thick, supportive bedding indoors to prevent elbow and hock calluses."
      ]
    },

    training: {
      difficulty:
        "Moderate; intelligent and capable, yet strong-willed and independent enough to need firm, fair, patient guidance from early puppyhood",

      tips: [
        "Start puppy classes, positive reinforcement, and consistent household rules early before adult strength develops.",
        "Keep sessions upbeat, structured, and varied rather than overly repetitive.",
        "Always use a leash or a securely fenced enclosure outdoors because strong prey drive can override recall.",
        "Avoid harsh physical corrections, which undermine trust in this proud, sensitive hound.",
        "Manage kitchen counters carefully—Ridgebacks are famously tall, clever counter surfers."
      ],

      socialization:
        "Provide broad, positive early exposure to unfamiliar people, calm dogs, and varied environments so natural aloofness matures into calm discernment."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Warm, sunny climates where the sleek short coat sheds heat well",
        "Temperate climates",
        "Cold climates when housed indoors with a warm coat for winter walks"
      ],

      aloneTimeTolerance:
        "Moderate once thoroughly exercised, though this devoted indoor companion needs daily family interaction."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced nutrition formulated for large active breeds, matched to life stage and daily exercise output.",

    feedingFrequency: {
      puppy:
        "Three to four measured meals per day until about six months old on a large-breed growth formula, then two meals daily.",
      adult:
        "Two measured meals per day to sustain steady energy and help reduce bloat risk.",
      senior:
        "Two portion-controlled meals per day adapted for lower calorie needs and joint support."
    },

    guidelines:
      "Measure every meal consistently and keep the dog lean with easily felt ribs. Split food into two meals, rest the dog before and after eating to lower bloat risk, store human food safely out of reach of counter surfing, and keep fresh water available at all times.",

    considerations: [
      "Watch calorie intake closely because some adults gain weight easily if under-exercised or over-treated.",
      "Avoid vigorous running right before and for at least an hour after meals to mitigate bloat risk.",
      "Count training treats within the daily ration and switch diets gradually over five to seven days."
    ],

    note:
      "Adjust portions seasonally for activity level and consult a veterinarian for individualized large-breed feeding plans."
  },

  health: {
    overview:
      "The Rhodesian Ridgeback is generally a healthy, sturdy hound with a typical lifespan of 10 to 12 years. Scientifically established inherited conditions in the breed include dermoid sinus (a congenital neural-tube skin defect linked to the 133-kilobase duplication of FGF3, FGF4, FGF19, and ORAOV1 that produces the dorsal ridge), Juvenile Myoclonic Epilepsy (caused by a recessive 4-bp deletion in DIRAS1), and Early Onset Adult Deafness (associated with an autosomal recessive 12-bp deletion in EPS8L2). Other monitored or reported conditions include hip and elbow dysplasia, autoimmune thyroiditis, degenerative myelopathy (SOD1), hereditary eye anomalies, and gastric dilatation-volvulus (bloat).",

    commonConditions: [
      "Dermoid sinus — scientifically established congenital neural-tube defect linked to the FGF3/FGF4/FGF19/ORAOV1 ridge duplication, forming a tubular tract along the dorsal midline that can become infected; puppies must be palpated carefully at birth",
      "Juvenile Myoclonic Epilepsy (JME) — scientifically established autosomal recessive seizure disorder caused by a 4-bp deletion in the DIRAS1 gene, producing myoclonic twitches and photosensitivity in young dogs; screenable via DNA testing",
      "Early Onset Adult Deafness (EOAD) — scientifically established autosomal recessive hearing loss associated with a 12-bp in-frame deletion in the EPS8L2 gene; screenable via DNA testing",
      "Hip dysplasia — monitored developmental malformation of the hip joint screened via pre-breeding radiographs",
      "Elbow dysplasia — monitored developmental elbow abnormality screened via pre-breeding radiographs",
      "Autoimmune thyroiditis — monitored immune-mediated thyroid disorder causing hypothyroidism, evaluated via blood antibody panels",
      "Degenerative myelopathy (DM) — inherited late-onset spinal cord degeneration linked to the SOD1 variant, screenable via DNA testing",
      "Gastric dilatation-volvulus (GDV / bloat) — reported acute emergency in deep-chested large breeds requiring immediate veterinary care",
      "Hereditary eye anomalies — monitored through periodic veterinary ophthalmologist examinations"
    ],

    preventiveCare: [
      "Choose puppies from parents with verified hip, elbow, thyroid, and eye clearances plus DNA testing for JME, EOAD, and DM.",
      "Ensure every puppy is palpated thoroughly along the neck, back, and tail base by an experienced breeder or veterinarian for dermoid sinus.",
      "Feed two measured meals daily, keep body condition lean, and rest the dog before and after meals to help reduce bloat risk.",
      "Check ears weekly, maintain nail length with a grinder or clippers, and schedule annual veterinary wellness visits."
    ],

    recommendedScreenings: [
      "Physical palpation for dermoid sinus in puppies and breeding stock",
      "Radiographic hip dysplasia evaluation prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "DNA test for Juvenile Myoclonic Epilepsy (DIRAS1 mutation)",
      "DNA test for Early Onset Adult Deafness (EPS8L2 deletion)",
      "Autoimmune thyroiditis blood panel and periodic veterinary ophthalmologist eye examination",
      "DNA test for Degenerative Myelopathy (SOD1 mutation)"
    ],

    dentalCare:
      "Brush teeth several times a week with dog-safe toothpaste and include dental evaluations in annual veterinary checkups.",

    earCare:
      "Inspect the drop ears weekly for wax buildup, dust, or redness, cleaning gently with a vet-approved ear wash when needed.",

    skinCare:
      "Check the sleek coat and dorsal midline during weekly brushing for ticks, abrasions, or any skin openings or swellings."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Experienced owners of large, strong-willed hounds who use firm, fair positive leadership",
      "Active households, runners, and hikers able to provide daily brisk exercise",
      "Homes with a tall, securely fenced yard and indoor family living space",
      "Dog sport enthusiasts interested in lure coursing, tracking, agility, or obedience"
    ],

    notIdealFor: [
      "First-time dog owners looking for an effortlessly obedient breed",
      "Small apartments without daily outdoor running and exercise outlets",
      "Households with loose small pets vulnerable to high prey drive",
      "Owners who keep dogs isolated outdoors away from the family"
    ]
  },

  funFacts: [
    "The breed's trademark dorsal ridge comes from a 133-kilobase genetic duplication spanning three fibroblast growth factor genes (FGF3, FGF4, and FGF19) along with ORAOV1, inherited from the ancient ridged dogs of the Khoikhoi people.",
    "Despite its nickname 'African Lion Hound,' the breed never killed lions—small packs of two or three dogs used speed and agility to keep a lion at bay until the hunter arrived.",
    "When Francis Richard Barnes drafted the first formal breed description in Bulawayo in 1922, he modeled its balanced proportions on the Dalmatian.",
    "Hollywood actor Errol Flynn became the first breeder of Rhodesian Ridgebacks in the United States during the 1930s on his California ranch.",
    "Although bred for endurance across the African veld, Ridgebacks are famous for lounging happily on warm sofas indoors once exercised—and for cleverly counter-surfing unattended food.",
    "Rhodesian Ridgebacks appear in shades of wheaten with two distinct nose types: a black nose paired with dark eyes, or a less common brown (liver) nose paired with amber eyes."
  ],

  faq: [
    {
      question: "What is a Rhodesian Ridgeback?",
      answer:
        "The Rhodesian Ridgeback is a large, muscular hound indigenous to southern Africa, recognized by the symmetrical strip of backward-growing hair along its spine, its big-game tracking heritage, and its dignified, loyal nature."
    },
    {
      question: "What causes the ridge on a Rhodesian Ridgeback's back?",
      answer:
        "The ridge is a strip of hair growing forward toward the head, caused by a dominant 133-kilobase genetic duplication involving FGF3, FGF4, FGF19, and ORAOV1; a classic ridge starts behind the shoulders with two matching opposite crowns and tapers toward the hips."
    },
    {
      question: "Did Rhodesian Ridgebacks actually fight lions?",
      answer:
        "No. Working in agile groups of two or three, they tracked lions and kept them at bay through quick, elusive harassment without engaging in direct combat until the hunter arrived."
    },
    {
      question: "How big does a Rhodesian Ridgeback get?",
      answer:
        "Adult males stand 63 to 69 cm at the withers and typically weigh 36 to 41 kg (ideal 36.5 kg), while adult females stand 61 to 66 cm and typically weigh 29 to 34 kg (ideal 32 kg)."
    },
    {
      question: "How long do Rhodesian Ridgebacks live?",
      answer:
        "With good nutrition, lean weight management, and regular veterinary care, Rhodesian Ridgebacks typically live 10 to 12 years."
    },
    {
      question: "How much grooming does a Rhodesian Ridgeback need?",
      answer:
        "Very little. Weekly brushing with a rubber curry brush or hound mitt manages moderate shedding, paired with occasional baths, weekly ear checks, and regular nail trims (often easiest with a nail grinder)."
    },
    {
      question: "Can a Rhodesian Ridgeback live in an apartment?",
      answer:
        "Generally no. Although calm indoors after exercise, their large size, athletic drive, and need for secure running space make a house with a tall fenced yard a much better fit."
    },
    {
      question: "Are Rhodesian Ridgebacks good family dogs?",
      answer:
        "Yes, in experienced, active homes. They are deeply devoted, protective, and affectionate with their own families, though their large size means play with young children should always be supervised."
    },
    {
      question: "What is dermoid sinus?",
      answer:
        "Dermoid sinus is a congenital tube-like skin defect along the dorsal midline linked to the same genetic duplication that creates the ridge. Experienced breeders and veterinarians palpate newborn puppies carefully to detect it early."
    },
    {
      question: "What health tests are recommended for breeding Rhodesian Ridgebacks?",
      answer:
        "Important pre-breeding checks include dermoid sinus palpation, radiographic hip and elbow evaluations, DNA tests for Juvenile Myoclonic Epilepsy (DIRAS1), Early Onset Adult Deafness (EPS8L2), and Degenerative Myelopathy (SOD1), plus thyroid and ophthalmologist exams."
    }
  ],

  references: [
    "natureserve-canis-lupus-familiaris",
    "fci-rhodesian-ridgeback-official-standard",
    "fci-rhodesian-ridgeback-nomenclature",
    "kusa-rhodesian-ridgeback-breed-standard",
    "akc-rhodesian-ridgeback-breed-standard",
    "akc-rhodesian-ridgeback-breed-profile",
    "the-kennel-club-rhodesian-ridgeback-breed-standard",
    "rkc-rhodesian-ridgeback-breed-profile",
    "ukc-rhodesian-ridgeback-breed-standard",
    "rrcus-rhodesian-ridgeback-health-survey",
    "ofa-rhodesian-ridgeback-chic-requirements",
    "rhodesian-ridgeback-dermoid-sinus-study-2007",
    "pubmed-wielaender-2017-rr-jme-diras1",
    "pubmed-eoad-2022-rr-eps8l2",
    "the-dog-api",
    "wikimedia-rhodesian-ridgeback-lilly-m",
    "wikimedia-rhodesian-ridgeback-600-tomasz-sienicki"
  ],

  evidence: {
    scientificName: {
      reliability: "reliable_source",
      sources: [
        {
          id: "natureserve-canis-lupus-familiaris",
          role: "verified",
          locator: "Taxon record: Canis lupus familiaris (ITIS TSN 726821)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Verified domestic dog taxonomic name via NatureServe Explorer (ITIS TSN 726821)."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-nomenclature",
          role: "verified",
          locator: "Official nomenclature: RHODESIAN RIDGEBACK (146), CHIEN DE RHODESIE A CRETE DORSALE, PERRO CRESTADO RODESIANO"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names: African Lion Hound, Lion Dog, Ridgeback"
        },
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "Did You Know: African Lion Hound"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Updated French and Spanish names to match FCI Nomenclature No. 146."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-nomenclature",
          role: "verified",
          locator: "Group 6 Scenthounds and related breeds, Section 3 Related breeds, without working trial"
        },
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "Hound Group"
        },
        {
          id: "the-kennel-club-rhodesian-ridgeback-breed-standard",
          role: "verified",
          locator: "Hound Group"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Written without registry names or numbered section labels in user-facing text."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "Origin: Southern Africa; Standard supplied by Kennel Union of Southern Africa and Zimbabwe Kennel Club"
        },
        {
          id: "fci-rhodesian-ridgeback-nomenclature",
          role: "verified",
          locator: "Country of origin: South Africa; definitive acceptance 1955-02-21"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin: Southern Africa"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "FCI Standard No. 146 (valid 2025-05-15, published 2025-06-06): Brief Historical Summary (Cape Colony, F.R. Barnes 1922 Bulawayo Dalmatian-based standard, 1926 approval), General Appearance"
        },
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "About the Breed, History (Khoikhoi dogs, Cornelius van Rooyen, baying lions without killing)"
        },
        {
          id: "rkc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "About this breed: scent hound tracking lions, Khoikhoi ancestry"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Rewritten in original prose synthesizing FCI Standard No. 146 (2025), AKC, and Royal Kennel Club."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "Conformation, dorsal ridge with two symmetrical crowns, coat, wheaten shades, nose/eye pairing, scissor bite"
        },
        {
          id: "the-kennel-club-rhodesian-ridgeback-breed-standard",
          role: "verified",
          locator: "General appearance, eyes (round, bright, harmonising with coat), forequarters, ridge"
        },
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "Breed Colors & Markings: Light Wheaten, Wheaten, Red Wheaten with Black or Brown nose; Black Mask and White Markings"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Filtered out generic non-breed colors from The Dog API list; preserved wheaten-only color range."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "Size: Height at withers — Males 63-69 cm, Females 61-66 cm"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric: male 64-69 cm, female 61-66 cm"
        },
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "cited",
          locator: "Height: 25-27 inches (male), 24-26 inches (female)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Retains official FCI/KUSA/RKC centimetres (63-69 cm males, 61-66 cm females) over The Dog API's 64-69 cm male minimum."
    },

    "physical.height.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "Size: Males max 69 cm"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.height.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "Size: Females max 66 cm"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric: male 36-41 kg, female 29-34 kg"
        },
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "Weight: Dogs 36.5 kg, Bitches 32 kg"
        },
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "cited",
          locator: "Weight: 85 pounds (male), 70 pounds (female)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "FCI Standard No. 146 publishes single ideal weights (36.5 kg males, 32 kg females). Uses The Dog API verified metric ranges (36-41 kg males, 29-34 kg females) which encompass both FCI ideals and align with AKC's 85 / 70 pounds."
    },

    "physical.weight.male.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric: male max 41 kg"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.weight.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric: female max 34 kg"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 10-12 years"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span: 10-12 years"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Consistent across AKC and The Dog API."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "Grooming: sheds somewhat; weekly brushing"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "Lips: clean, closely fitting"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "Behaviour/Temperament: dignified, intelligent, aloof with strangers, no aggression or shyness"
        },
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "About the Breed & Training: dignified, affectionate, even-tempered, strong-willed, strong prey drive"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament: Loyal, intelligent, confident, independent, affectionate"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics"
        }
      ],
      verifiedOn: null,
      note: "Editorial 1-5 estimates reflecting documented hound independence, protectiveness, and reserve with strangers."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "cited",
          locator: "Grooming (weekly brushing, nail grinder preference), Exercise, Training (counter surfing, secure enclosure), Nutrition"
        }
      ],
      verifiedOn: null,
      note: "Practical care guidance tailored to large athletic hounds."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "Exercise: strong athletic dog needing daily walks, running, and play"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "cited",
          locator: "Daily exercise guidance"
        }
      ],
      verifiedOn: null,
      note: "Estimated 60-90 minutes daily reflects the endurance of an athletic large hound."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "cited",
          locator: "Large athletic hound requiring secure off-leash running enclosures"
        }
      ],
      verifiedOn: null,
      note: "Editorial evaluation: large size and strong running drive generally favor a securely fenced yard over apartments."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "Training: safely enclosed area required when off leash"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "Short sleek single coat developed in southern Africa"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "cited",
          locator: "Training: devoted companion needing to live indoors with human family"
        }
      ],
      verifiedOn: null,
      note: "Moderate alone-time tolerance when exercised, but requires indoor family life."
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "cited",
          locator: "Nutrition: age-appropriate diet, counter-surfing caution, weight control"
        }
      ],
      verifiedOn: null,
      note: "Standard large-breed nutrition and bloat-mitigation guidance."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "cited",
          locator: "Life-stage nutrition"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage meal schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rhodesian-ridgeback-dermoid-sinus-study-2007",
          role: "verified",
          locator: "Nat Genet 2007 (PMID 17922012): 133-kb duplication of FGF3, FGF4, FGF19, and ORAOV1 causing ridge and dermoid sinus predisposition"
        },
        {
          id: "pubmed-wielaender-2017-rr-jme-diras1",
          role: "verified",
          locator: "PNAS 2017 (PMID 28223533): recessive 4-bp deletion in DIRAS1 causing Juvenile Myoclonic Epilepsy with photosensitivity"
        },
        {
          id: "pubmed-eoad-2022-rr-eps8l2",
          role: "verified",
          locator: "PLoS One 2022 (PMID 35385474): autosomal recessive 12-bp deletion in EPS8L2 associated with Early Onset Adult Deafness"
        },
        {
          id: "rkc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "Good Practice screening: JME DNA test, BVA/KC Hip & Elbow schemes"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Clearly separates peer-reviewed genetic diseases (dermoid sinus, JME/DIRAS1, EOAD/EPS8L2) from monitored/reported conditions."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rhodesian-ridgeback-dermoid-sinus-study-2007",
          role: "verified",
          locator: "Dermoid sinus genetic basis (FGF3/FGF4/FGF19/ORAOV1)"
        },
        {
          id: "pubmed-wielaender-2017-rr-jme-diras1",
          role: "verified",
          locator: "Juvenile Myoclonic Epilepsy (DIRAS1)"
        },
        {
          id: "pubmed-eoad-2022-rr-eps8l2",
          role: "verified",
          locator: "Early Onset Adult Deafness (EPS8L2)"
        },
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "Hip/elbow dysplasia, thyroid function, eye anomalies, dermoid sinus"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Distinguishes scientifically established genetic disorders from monitored orthopedic, endocrine, and acute risks."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "cited",
          locator: "Puppy dermoid sinus palpation, health screening, weight control, nail/ear care"
        }
      ],
      verifiedOn: null,
      note: "General preventive care recommendations for large ridged hounds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "Good Practice tests: JME DNA test, BVA/KC Elbow Dysplasia Scheme, BVA/KC Hip Dysplasia Scheme"
        },
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "Recommended National Breed Club Tests: Hip Evaluation, Elbow Evaluation; breeder screening for thyroid, eyes, dermoid sinus"
        },
        {
          id: "ofa-rhodesian-ridgeback-chic-requirements",
          role: "verified",
          locator: "OFA CHIC health testing panel (hips, eyes, thyroid, elbows, DM, EOAD)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Combines Royal Kennel Club, AKC, and OFA CHIC pre-breeding health testing recommendations."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "cited",
          locator: "Strong jaws with complete scissor bite"
        }
      ],
      verifiedOn: null,
      note: "Standard canine dental hygiene guidance."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "cited",
          locator: "Medium drop ears"
        }
      ],
      verifiedOn: null,
      note: "Standard drop-ear care guidance."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "cited",
          locator: "Weekly brushing and dorsal midline checks"
        }
      ],
      verifiedOn: null,
      note: "General skin and ridge inspection guidance."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "cited",
          locator: "About the Breed: strong-willed, often too much hound for novice owners; indoor family dog"
        }
      ],
      verifiedOn: null,
      note: "Editorial suitability assessment based on size, independence, prey drive, and exercise needs."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "rhodesian-ridgeback-dermoid-sinus-study-2007",
          role: "verified",
          locator: "133-kb duplication involving FGF3, FGF4, FGF19, and ORAOV1"
        },
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "1922 Bulawayo Dalmatian-based standard by F.R. Barnes; baying lions in groups of 2-3"
        },
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "Errol Flynn 1930s California breeding; black vs brown nose; counter surfing"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Corrected gene description from 'four fibroblast growth factor genes' to three FGF genes (FGF3, FGF4, FGF19) plus ORAOV1 per Salmon Hillbertz et al. (2007)."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "Height (63-69 / 61-66 cm), ideal weight (36.5 / 32 kg), dorsal ridge, lion baying"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "Weight ranges (36-41 / 29-34 kg), lifespan (10-12 years)"
        },
        {
          id: "rhodesian-ridgeback-dermoid-sinus-study-2007",
          role: "verified",
          locator: "Dermoid sinus genetic basis"
        },
        {
          id: "rkc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "Pre-breeding health screening (hips, elbows, JME DNA)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "All FAQ answers written in original wording without registry names."
    }
  },

  updatedOn: "2026-11-21"
};
