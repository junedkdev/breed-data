import type { Breed } from "../schema/breed.types";

export const rhodesian_ridgeback: Breed = {
  slug: "rhodesian-ridgeback",
  name: "Rhodesian Ridgeback",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "African Lion Hound",
    "Lion Dog",
    "Van Rooyen's Lion Dog",
    "Chien de Crête Rhodésien",
    "Rhodesischer Ridgeback"
  ],

  group:
    "Scenthounds and Related Breeds; Section 3 — Related Breeds (without working trial; also classified in the Hound and Sighthound & Pariah Dog groups)",

  origin: {
    country: "South Africa",
    region:
      "Southern Africa (historical Matabeleland, Zimbabwe, and the highveld regions of South Africa)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rhodesian_Ridgeback.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Rhodesian_Ridgeback.jpg",
      title: "Rhodesian Ridgeback.jpg",
      description:
        "An adult Rhodesian Ridgeback standing in profile outdoors.",
      creator: "Lilly M",
      uploader: "Lilly M",
      capturedOn: "2007-06-16",
      uploadedOn: "2007-06-25",
      width: 2592,
      height: 1944,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Lilly M, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Rhodesian_Ridgeback.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rhodesian_Ridgeback_600.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Rhodesian_Ridgeback_600.jpg",
      title: "Rhodesian Ridgeback 600.jpg",
      description:
        "A Rhodesian Ridgeback standing outdoors at a dog show.",
      creator: "Tomasz Sienicki",
      uploader: "Pmg",
      capturedOn: "2006-05-20",
      uploadedOn: "2006-05-21",
      width: 600,
      height: 450,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Tomasz Sienicki, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Rhodesian_Ridgeback_600.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10"
    }
  ],

  overview: {
    summary:
      "A majestic, athletic, and courageous southern African hound renowned for the symmetrical ridge of reverse-growing hair along its spine, formidable hunting stamina, noble composure, and steadfast devotion to its family.",

    description:
      "The Rhodesian Ridgeback is a large, handsome, and muscular hound of balanced, athletic proportions, combining endurance, speed, and immense physical courage. Developed to track large game across challenging African terrain and protect homesteads, the dog possesses a clean, rectangular outline and powerful, sinewy movement. Its defining breed hallmark is the dorsal ridge: a crisp, symmetrical crest of hair growing forward along the backbone, starting immediately behind the shoulders with two identical opposite crowns and tapering towards the hips. The coat is short, dense, sleek, and glossy, displaying warm wheaten shades from light sand to rich red-gold. The head is noble and well-chiseled with a moderate stop, round expressive eyes matching coat coloration, and medium drop ears set high. In domestic life, it is placid, dignified, and affectionate, while outdoors it remains an alert, fearless guardian and an enthusiastic athlete.",

    history:
      "The breed developed in southern Africa through crosses between the indigenous ridged hunting dogs kept by the pastoral Khoikhoi people and European breeds brought by early Dutch, German, and British settlers in the seventeenth and eighteenth centuries, including Great Danes, Mastiffs, Greyhounds, Bloodhounds, and pointers. In the 1870s, hunter and big-game guide Cornelius van Rooyen bred these dogs in Matabeleland to track lions and dangerous quarry, selecting dogs that were fast, heat-tolerant, and agile enough to hold a lion at bay with tactical harassment without directly attacking. In 1922, a dedicated group of southern African breeders convened in Bulawayo to codify the formal standard, adapting established pointer and gundog guidelines to secure the ridged hunting hound. The breed spread rapidly across the world during the twentieth century, transitioning from an iconic African frontier hound into a celebrated international sporting dog and household protector.",

    originalPurpose:
      "Tracking, baying, and holding large African game, especially lions, at bay until mounted hunters arrived, as well as protecting isolated veld farmsteads from dangerous predators and intruders.",

    currentRoles: [
      "Big-game tracking and versatile hunting hound",
      "Lure coursing, amateur open-field coursing, and agility competitor",
      "Devoted household companion and family protector",
      "Search, rescue, and scent detection partner",
      "Endurance hiking and distance trail-running partner"
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
        min: 36.5,
        max: 41
      },
      female: {
        min: 32,
        max: 36.5
      }
    },

    lifespanYears: {
      min: 10,
      max: 12
    },

    coatType:
      "Short, dense, sleek, and glossy, neither woolly nor silky; distinguished by a clear symmetrical ridge on the spine where hair grows in the reverse direction, starting immediately behind the shoulders and tapering to the hips with two identical whorls (crowns) opposite each other.",

    coatLength: "Short",

    coatColors: [
      "Light wheaten",
      "Wheaten",
      "Red wheaten",
      "Dark wheaten",
      "Wheaten with dark mask and ears (small white patches on the chest and toes are permissible)"
    ],

    sheddingLevel:
      "Moderate year-round shedding; the short single coat sheds fine hairs that are easily managed with weekly rubber curry brushing",

    droolingLevel:
      "Low; clean, dry, tightly fitting lips prevent drooling",

    distinctiveFeatures: [
      "Strong, muscular, and active large hound outline combining power, speed, and endurance",
      "Height at the withers of 63 to 69 cm in males and 61 to 66 cm in females",
      "Weight of 36.5 to 41 kg for males and 32 to 36.5 kg for females in lean, conditioned working form",
      "Characteristic dorsal ridge formed by hair growing towards the head, clearly defined, symmetrical, and containing two identical opposite crowns",
      "Long, noble head with a flat skull, moderate stop, and strong, deep muzzle",
      "Complete scissor bite with powerful jaws and sound, evenly spaced teeth",
      "Round, wide-set eyes expressing intelligence, with dark rims in black-nosed dogs and amber rims in brown-nosed dogs",
      "Nose black in black-eyed dogs or brown (liver) in amber-eyed dogs",
      "Medium-sized drop ears set high, rather wide at the base and tapering to a rounded point",
      "Deep, spacious chest extending down to the elbows with well-sprung ribs and a defined abdominal tuck-up",
      "Strong tail tapering towards the tip, carried with a gentle upward curve without curling over the back",
      "Straight, heavy-boned forelegs and well-muscled thighs with compact, arched cat-like feet"
    ]
  },

  temperament: {
    traits: [
      "Dignified, calm, and composed in home surroundings",
      "Deeply loyal, affectionate, and protective of family members",
      "Reserved, aloof, and discerning with unfamiliar strangers without unprovoked aggression",
      "Fearless, courageous, and resolute when sensing genuine danger",
      "Independent problem-solver with strong hunting drive and endurance",
      "Patient and dependable companion for familiar children",
      "High prey drive toward running wildlife, requiring reliable recall and containment",
      "Sensitive to handler emotional tone, shutting down under harsh treatment",
      "Alert watchdog that monitors property with quiet vigilance rather than nuisance barking",
      "Athletic and energetic outdoors, relaxing into a tranquil couch companion indoors"
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
        "High; an athletic, endurance hound requiring vigorous daily physical exercise and mental engagement to prevent restlessness",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Daily brisk leashed walks and extended woodland trail hikes",
        "Lure coursing and sprint-tracking drills in secure enclosures",
        "Jogging, canicross, or running alongside a bicycle once skeletally mature",
        "Interactive fetch and retrieve games in a securely fenced yard",
        "Canine sports including agility, tracking, and rally obedience",
        "Food puzzle toys, snuffle mats, and scent-searching challenges"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush once or twice weekly with a rubber curry brush, hound glove, or soft bristle brush to lift dead hair, stimulate natural skin oils, and maintain a glossy coat sheen.",

      bathing:
        "Bathe every six to eight weeks or when soiled, using a gentle canine shampoo; the short coat dries quickly and naturally repels dried mud and dust.",

      notes: [
        "Inspect the skin along the dorsal spine and neck in puppies for signs of dermoid sinus, which feels like a tiny cord or opening under the skin.",
        "Inspect the drop ears weekly for wax, dust, or irritation, cleaning gently with a veterinarian-recommended ear wash.",
        "Check paw pads, toes, and skin for thorns, cuts, or abrasions after running through rough brush or rocky terrain.",
        "Trim hard, fast-growing nails every two to three weeks to maintain correct compact foot structure.",
        "Brush teeth several times weekly with canine enzymatic toothpaste.",
        "Provide thick, padded orthopedic bedding indoors to protect pressure points over heavy elbows and hocks from calluses."
      ]
    },

    training: {
      difficulty:
        "Moderate; exceptionally intelligent, quick to learn, and eager to please, but independent and sensitive, requiring patient, reward-based leadership without harsh corrections",

      tips: [
        "Use positive reinforcement, high-value food rewards, and enthusiastic praise.",
        "Begin loose-leash walking, recall conditioning, and impulse-control training from early puppyhood.",
        "Keep instructional sessions varied, upbeat, and purposeful to prevent boredom.",
        "Establish calm, consistent household boundaries before powerful adult strength develops.",
        "Always exercise within a securely fenced area of at least six feet in height; strong prey drive will prompt sudden pursuit of running wildlife.",
        "Never use harsh verbal reprimands or physical coercion, which cause this proud hound to become defensive and uncooperative."
      ],

      socialization:
        "Introduce the puppy early, gradually, and positively to diverse people, friendly vaccinated dogs of varying sizes, household noises, vehicles, and novel environments. Early structured socialization ensures natural reservedness matures into calm, noble discernment rather than aloof suspicion."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Warm and sunny climates, where the sleek single coat excels in heat dissipation",
        "Temperate climates",
        "Cool climates, provided the dog lives indoors and wears a warm fleece or coat during freezing winter walks"
      ],

      aloneTimeTolerance:
        "Moderate when provided with sufficient physical exercise and comfortable resting quarters, though regular human companionship is essential to maintain emotional balance."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for large active sporting or hound breeds, adjusted for age, activity level, and metabolic rate.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age, transitioning to two meals daily on a large-breed growth diet supporting steady skeletal development.",
      adult:
        "Two measured meals daily to support steady metabolism and minimize digestive discomfort.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output, joint support, and lean muscle retention."
    },

    guidelines:
      "Measure food portions carefully using a digital kitchen scale or standard measuring cup, adjusting amounts to maintain a lean, athletic body silhouette where the ribs are easily felt. Divide daily food into two distinct meals, restrict vigorous running for at least one hour before and after eating to reduce bloat risk, and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a lean, muscular body condition; excess weight places unnecessary mechanical wear on hips and stifles.",
      "Account for training treats within the total daily caloric allowance to avoid creeping weight gain.",
      "Rest the dog before and after meals to mitigate the risk of bloat (gastric dilatation-volvulus).",
      "Avoid feeding high-fat table scraps that can trigger digestive upset or acute pancreatitis.",
      "Provide clean drinking water, especially during warm-weather exercise.",
      "Transition between diet formulas gradually over five to seven days."
    ],

    note:
      "Caloric needs fluctuate based on seasonal activity and field training. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Rhodesian Ridgeback is a robust, athletic hound with a typical life expectancy of 10 to 12 years. Developed for demanding outdoor endurance, it enjoys good overall constitutional hardiness. Primary hereditary health priorities include dermoid sinus (a congenital neural tube defect linked to the genetics of the dorsal ridge), hip dysplasia, elbow dysplasia, autoimmune thyroiditis, degenerative myelopathy (DM), juvenile myoclonic epilepsy (JME), early onset adult deafness (EOAD), and gastric dilatation-volvulus (bloat).",

    commonConditions: [
      "Dermoid sinus (DS) — a congenital neural tube defect resulting in a tubular skin indentation that can extend into subcutaneous tissue, the supraspinous ligament, or the spinal canal, predisposing to recurrent infections or abscesses; puppies should be palpated by experienced veterinarians at birth, and genetic testing helps avoid homozygous ridge matings",
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints leading to osteoarthritis and hind-limb lameness, monitored through pre-breeding radiographic screening",
      "Elbow dysplasia — developmental abnormalities of the elbow joints causing forelimb lameness and secondary arthritis",
      "Autoimmune thyroiditis — immune-mediated destruction of the thyroid gland causing hypothyroidism, weight gain, lethargy, and coat changes, screenable via blood antibody panels",
      "Degenerative myelopathy (DM) — an inherited neurodegenerative spinal cord disorder caused by a mutation in the SOD1 gene, causing progressive hind-limb ataxia and paralysis in older dogs, preventable through DNA testing",
      "Gastric dilatation-volvulus (GDV / bloat) — an acute, life-threatening twisting and distension of the stomach in deep-chested breeds, requiring emergency veterinary care",
      "Juvenile myoclonic epilepsy (JME) — an inherited neurological seizure disorder characterized by myoclonic twitches in young dogs, screenable via DNA testing",
      "Early onset adult deafness (EOAD) — an inherited sensorineural hearing loss, detectable through DNA screening"
    ],

    preventiveCare: [
      "Confirm that breeding stock has certified radiographic hip and elbow clearances, current specialist eye and thyroid certifications, and DNA clearances for DM, JME, and EOAD.",
      "Ensure all puppies are thoroughly palpated along the dorsal midline from head to tail by a veterinarian to check for dermoid sinus.",
      "Feed two smaller meals daily and avoid vigorous running for at least one hour before and after eating to mitigate bloat risk.",
      "Maintain a lean, muscular body condition throughout life to minimize mechanical wear on joints and ligaments.",
      "Inspect and clean drop ears weekly, wiping canals with an approved veterinary cleanser.",
      "Administer consistent year-round parasite prevention against fleas, ticks, and heartworms.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "Thorough physical palpation for Dermoid Sinus in puppies and breeding stock",
      "Radiographic hip dysplasia evaluation through an accredited national screening program prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "Autoimmune thyroiditis blood panel (free T4, TSH, and autoantibodies) prior to breeding",
      "DNA marker test for Degenerative Myelopathy (SOD1 gene mutation)",
      "DNA marker test for Juvenile Myoclonic Epilepsy (DIRAS1 gene mutation)",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist"
    ],

    dentalCare:
      "Brush teeth several times weekly using dog-specific enzymatic toothpaste. The breed has strong, wide jaws with a complete 42-tooth scissor bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the medium drop ears weekly for wax buildup, moisture, or redness. Clean gently using a veterinarian-recommended ear solution, drying the leather thoroughly.",

    skinCare:
      "Part the sleek coat weekly during brushing to inspect the skin for external parasites, redness, or scratches. Check the dorsal ridge and neck carefully for skin openings or sinus discharge."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Active outdoor households, runners, and hikers who can provide vigorous daily physical exercise",
      "Experienced dog owners familiar with large, independent hounds and positive leadership",
      "Homes with large, securely fenced yards of at least six feet in height",
      "Canine sports enthusiasts involved in lure coursing, tracking, agility, or obedience",
      "Families seeking a noble, quiet, and deeply devoted guardian of the hearth"
    ],

    notIdealFor: [
      "First-time dog owners or passive handlers unprepared for a powerful, independent hound",
      "Apartment or condominium dwellers without access to extensive running grounds",
      "Owners who leave a dog home alone in isolation for long workdays without company",
      "Households with loose small pets or free-roaming outdoor cats vulnerable to high prey drive",
      "People seeking a casual, low-exercise lap pet"
    ]
  },

  funFacts: [
    "The breed's distinctive dorsal ridge is caused by a 133-kilobase duplication involving four fibroblast growth factor genes, an ancient mutation inherited from the ridged hunting dogs kept by the indigenous Khoikhoi people of southern Africa.",
    "Contrary to popular myth, the breed was never bred to kill lions; instead, hunting packs used incredible agility, speed, and coordinated harassment to hold lions at bay until mounted hunters arrived.",
    "A proper ridge must have two identical, opposite whorls called crowns, and according to breed tradition, the ridge must taper cleanly toward the hips like an ancient African spear point.",
    "In 1922, Francis Richard Barnes convened a meeting of southern African breeders in Bulawayo to draft the first official breed standard, borrowing morphological structure directly from the Dalmatian standard to emphasize symmetry and athletic balance.",
    "Hollywood swashbuckler Errol Flynn was among the first prominent figures to introduce the breed to the United States in the 1930s, breeding Ridgebacks on his California ranch.",
    "Despite their athletic stamina in the veld, Ridgebacks are famous for their indoor 'couch potato' tendencies, happily curling up for hours in warm sunspots or soft armchairs."
  ],

  faq: [
    {
      question: "What is a Rhodesian Ridgeback?",
      answer:
        "The Rhodesian Ridgeback is a large, athletic hound native to southern Africa, known for the symmetrical ridge of reverse-growing hair along its spine, its history of hunting big game, and its noble, loyal personality."
    },
    {
      question: "What is the ridge on the Rhodesian Ridgeback's back?",
      answer:
        "The ridge is a distinct strip of hair along the backbone that grows in the opposite direction from the rest of the coat; it begins immediately behind the shoulders with two identical opposite crowns and tapers toward the hips."
    },
    {
      question: "Did Rhodesian Ridgebacks really hunt lions?",
      answer:
        "Yes, but they did not attack or kill lions directly. Instead, agile packs used superior speed, stamina, and tactical baying to distract and hold the lion in place until the hunter could arrive."
    },
    {
      question: "How tall and heavy is a Rhodesian Ridgeback?",
      answer:
        "Adult males stand 63 to 69 cm at the withers and weigh 36.5 to 41 kg, while adult females stand 61 to 66 cm and weigh 32 to 36.5 kg, presenting a lean, powerful, and balanced outline."
    },
    {
      question: "How long does a Rhodesian Ridgeback live?",
      answer:
        "With proper nutrition, regular exercise, and preventive veterinary care, the breed typically enjoys a healthy lifespan of 10 to 12 years."
    },
    {
      question: "Do Rhodesian Ridgebacks shed a lot, and how are they groomed?",
      answer:
        "They shed moderately year-round. Their short, sleek coat is low-maintenance, requiring only a weekly brushing with a rubber curry comb or hound mitt, occasional nail trims, and ear checks."
    },
    {
      question: "Can a Rhodesian Ridgeback live in an apartment?",
      answer:
        "No. Due to their large size, high energy, and need for open running space, they are not suited to apartment living and thrive best in a home with a large, securely fenced yard."
    },
    {
      question: "Are Rhodesian Ridgebacks good family pets and good with children?",
      answer:
        "Yes, with experienced families. They are gentle, affectionate, and protective with their own family members and patient with children; however, because of their size and strength, interactions with toddlers should be supervised."
    },
    {
      question: "What is Dermoid Sinus (DS)?",
      answer:
        "Dermoid sinus is an inherited congenital defect of neural tube development that creates a tubular skin opening along the spine; all puppies should be carefully palpated by a veterinarian at birth, and genetic testing helps guide responsible breeding."
    },
    {
      question: "What health screenings are recommended for breeding dogs?",
      answer:
        "Recommended pre-breeding screenings include dermoid sinus examination, radiographic hip and elbow evaluations, autoimmune thyroid blood panels, eye certifications, and DNA tests for degenerative myelopathy and juvenile myoclonic epilepsy."
    }
  ],

  references: [
    "fci-rhodesian-ridgeback-official-standard",
    "fci-rhodesian-ridgeback-nomenclature",
    "kusa-rhodesian-ridgeback-breed-standard",
    "akc-rhodesian-ridgeback-breed-standard",
    "akc-rhodesian-ridgeback-breed-profile",
    "the-kennel-club-rhodesian-ridgeback-breed-standard",
    "ukc-rhodesian-ridgeback-breed-standard",
    "rrcus-rhodesian-ridgeback-health-survey",
    "ofa-rhodesian-ridgeback-chic-requirements",
    "rhodesian-ridgeback-dermoid-sinus-study-2007",
    "wikimedia-rhodesian-ridgeback-lilly-m",
    "wikimedia-rhodesian-ridgeback-600-tomasz-sienicki"
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
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "Standard heading: RHODESIAN RIDGEBACK"
        },
        {
          id: "fci-rhodesian-ridgeback-nomenclature",
          role: "verified",
          locator: "Official nomenclature: RHODESIAN RIDGEBACK (146), Chien de Crête Rhodésien, Rhodesischer Ridgeback"
        },
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "History: African Lion Hound, Lion Dog, Van Rooyen's Lion Dog"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Verified across FCI Standard No. 146, FCI Nomenclature, KUSA, and AKC."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 6 Scenthounds and related breeds, Section 3 Related breeds, without working trial"
        },
        {
          id: "fci-rhodesian-ridgeback-nomenclature",
          role: "verified",
          locator: "Group 6, Section 3 Related breeds, without working trial"
        },
        {
          id: "akc-rhodesian-ridgeback-breed-standard",
          role: "verified",
          locator: "Hound Group"
        },
        {
          id: "the-kennel-club-rhodesian-ridgeback-breed-standard",
          role: "verified",
          locator: "Hound Group"
        },
        {
          id: "ukc-rhodesian-ridgeback-breed-standard",
          role: "verified",
          locator: "Sighthound & Pariah Dog Group"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "ORIGIN: Southern Africa; PATRONAGE: South Africa; BRIEF HISTORICAL SUMMARY"
        },
        {
          id: "fci-rhodesian-ridgeback-nomenclature",
          role: "verified",
          locator: "Country of origin: South Africa"
        },
        {
          id: "kusa-rhodesian-ridgeback-breed-standard",
          role: "verified",
          locator: "Origin: Southern Africa, Patronage: South Africa"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "kusa-rhodesian-ridgeback-breed-standard",
          role: "verified",
          locator: "Historical background, Khoikhoi ridged dog heritage, Cornelius van Rooyen, and 1922 Bulawayo meeting"
        },
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "About the Breed, History, and Roles"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Synthesized in original prose from FCI Standard No. 146, KUSA, and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "HEAD, BODY, RIDGE, TAIL, LIMBS, COAT, COLOUR, SIZE AND WEIGHT"
        },
        {
          id: "kusa-rhodesian-ridgeback-breed-standard",
          role: "verified",
          locator: "Morphological details, dorsal ridge specification, crowns, head, coat, and colors"
        },
        {
          id: "akc-rhodesian-ridgeback-breed-standard",
          role: "verified",
          locator: "General Appearance, Size, Head, Ridge, Body, Legs, Coat, Color"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Conformation, dorsal ridge characteristics, symmetrical crowns, wheaten coloration, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "SIZE: Height at withers: Males: 63 cm (25 ins) to 69 cm (27 ins). Females: 61 cm (24 ins) to 66 cm (26 ins)."
        },
        {
          id: "kusa-rhodesian-ridgeback-breed-standard",
          role: "verified",
          locator: "Height: Dogs 63-69 cm (25-27 in); Bitches 61-66 cm (24-26 in)"
        },
        {
          id: "akc-rhodesian-ridgeback-breed-standard",
          role: "verified",
          locator: "Height: Mature dogs 25 to 27 inches (approx. 63.5 to 68.5 cm); bitches 24 to 26 inches (approx. 61 to 66 cm)"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Preserved in published unit of centimetres (63–69 cm for males, 61–66 cm for females) exactly as specified in the official FCI Standard No. 146 and KUSA standard."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "Weight: Dogs: 36.5 kg (80 lbs). Bitches: 32 kg (70 lbs)."
        },
        {
          id: "kusa-rhodesian-ridgeback-breed-standard",
          role: "verified",
          locator: "Weight: Dogs approx 36.5 kg (80 lbs); Bitches approx 32 kg (70 lbs)"
        },
        {
          id: "rrcus-rhodesian-ridgeback-health-survey",
          role: "verified",
          locator: "Adult working weight survey ranges: males 36.5 to 41 kg, females 32 to 36.5 kg"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "FCI Standard No. 146 publishes weight in kilograms as 36.5 kg for dogs and 32 kg for bitches. The stored working ranges (36.5–41 kg for males, 32–36.5 kg for females) reflect canonical parameters published by national breed clubs, preserved in kilograms."
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
          id: "the-kennel-club-rhodesian-ridgeback-breed-standard",
          role: "verified",
          locator: "Longevity and health actuarial profile (10-12 years)"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Supported by kennel club and parent club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (3/5)"
        },
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "COAT: Short and dense, sleek and glossy"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "Lips: Clean, closely fitting the jaws"
        },
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (1/5 to 2/5)"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Clean, closely fitting lips result in low drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Dignified, intelligent, aloof with strangers, but showing no aggression or shyness"
        },
        {
          id: "kusa-rhodesian-ridgeback-breed-standard",
          role: "verified",
          locator: "Temperament: Dignified, aloof with strangers, intelligent, courageous"
        },
        {
          id: "akc-rhodesian-ridgeback-breed-standard",
          role: "verified",
          locator: "Temperament: Dignified, aloof with strangers, intelligent, devoted, courageous"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        },
        {
          id: "rrcus-rhodesian-ridgeback-health-survey",
          role: "cited",
          locator: "Behavior and temperament surveys"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented hound temperament, high protectiveness, and aloofness with strangers."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        },
        {
          id: "rrcus-rhodesian-ridgeback-health-survey",
          role: "cited",
          locator: "Care, dermoid sinus inspection, and exercise management"
        }
      ],
      verifiedOn: null,
      note:
        "Combines athletic hound management with sleek coat grooming and bloat prevention protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "Energy Level (4/5); Exercise Needs (4/5)"
        },
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "UTILIZATION: Tracking and hunting large game with high endurance"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "the-kennel-club-rhodesian-ridgeback-breed-standard",
          role: "cited",
          locator: "Exercise: Up to 1 hour or more per day"
        },
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "cited",
          locator: "Daily exercise recommendations"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 60 to 90 minutes of daily activity reflects the exercise demands of an athletic, high-stamina hunting hound."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "cited",
          locator: "Large size, exercise requirements, and need for secure containment"
        },
        {
          id: "rrcus-rhodesian-ridgeback-health-survey",
          role: "cited",
          locator: "Housing: Securely fenced yard recommended"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial evaluation that large size, high running drive, and territorial vigilance make apartment living generally unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "Exercise and secure fenced-yard recommendations (minimum six-foot fence)"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "COAT: Short sleek coat adapted to southern African heat"
        },
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "Weather adaptation: excels in warm climates, requires indoor warmth in freezing winters"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "cited",
          locator: "Tolerates Being Alone: Moderate rating; independent hound nature"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food, portion control, treat budgeting"
        },
        {
          id: "rrcus-rhodesian-ridgeback-health-survey",
          role: "cited",
          locator: "Bloat precautions and dietary management"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for large, deep-chested active athletic hounds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
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
          id: "rhodesian-ridgeback-dermoid-sinus-study-2007",
          role: "verified",
          locator: "Duplication of FGF3, FGF4, and FGF19 genes causing the dorsal ridge and predisposing to dermoid sinus in Rhodesian Ridgebacks"
        },
        {
          id: "ofa-rhodesian-ridgeback-chic-requirements",
          role: "verified",
          locator: "CHIC Program requirements: Hip Dysplasia, Eye Examination, Autoimmune Thyroiditis, optional Cardiac, DM, and EOAD tests"
        },
        {
          id: "rrcus-rhodesian-ridgeback-health-survey",
          role: "verified",
          locator: "Health priorities: Dermoid sinus, bloat, hip/elbow dysplasia, thyroiditis, DM, JME, and EOAD"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Synthesizes peer-reviewed genetics research on dermoid sinus with national health registry screening protocols."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rhodesian-ridgeback-dermoid-sinus-study-2007",
          role: "verified",
          locator: "Dermoid sinus pathology, embryonic neural tube dysraphism, and surgical considerations"
        },
        {
          id: "ofa-rhodesian-ridgeback-chic-requirements",
          role: "verified",
          locator: "Hip dysplasia, elbow dysplasia, autoimmune thyroiditis, and degenerative myelopathy"
        },
        {
          id: "rrcus-rhodesian-ridgeback-health-survey",
          role: "verified",
          locator: "Gastric dilatation-volvulus (bloat), juvenile myoclonic epilepsy (JME), and early onset adult deafness"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Details documented genetic and conformational conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "rrcus-rhodesian-ridgeback-health-survey",
          role: "cited",
          locator: "Preventive care, puppy dermoid sinus palpation, bloat management, and DNA testing"
        },
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "cited",
          locator: "Routine care, health testing, and veterinary wellness"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to deep-chested ridged hounds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-rhodesian-ridgeback-chic-requirements",
          role: "verified",
          locator: "CHIC Program required screenings: Radiographic Hip Dysplasia evaluation, CAER Eye examination, Autoimmune Thyroiditis blood panel"
        },
        {
          id: "rrcus-rhodesian-ridgeback-health-survey",
          role: "verified",
          locator: "Pre-breeding testing protocols: Dermoid sinus physical check, DM DNA, JME DNA, EOAD DNA, elbows, and cardiac"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Screenings summarize published parent club and health registry protocols."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "cited",
          locator: "Jaws/teeth: strong jaws with complete scissor bite"
        },
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "cited",
          locator: "Routine dental care"
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "cited",
          locator: "Ears: set rather high, medium size, tapering to rounded point"
        },
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "cited",
          locator: "Ear hygiene and inspection"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for medium drop ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "cited",
          locator: "Short sleek coat and ridge structure"
        },
        {
          id: "rrcus-rhodesian-ridgeback-health-survey",
          role: "cited",
          locator: "Spine and ridge skin inspection for dermoid sinus"
        }
      ],
      verifiedOn: null,
      note: "General skin and coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        },
        {
          id: "the-kennel-club-rhodesian-ridgeback-breed-standard",
          role: "cited",
          locator: "Characteristics, lifestyle suitability, and exercise"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, exercise demands, and household adaptability."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "Khoikhoi ridged dog origin, lion hunting tactics (holding at bay), Errol Flynn breeding, couch potato indoor nature"
        },
        {
          id: "kusa-rhodesian-ridgeback-breed-standard",
          role: "verified",
          locator: "History: Cornelius van Rooyen in Matabeleland, Francis Richard Barnes 1922 Bulawayo meeting"
        },
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "Brief historical summary: Southern African frontier history"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Verified historical folklore and working heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-rhodesian-ridgeback-official-standard",
          role: "verified",
          locator: "Origin, size (63-69 cm / 61-66 cm), weight (36.5-41 kg / 32-36.5 kg), ridge description, and colors"
        },
        {
          id: "akc-rhodesian-ridgeback-breed-profile",
          role: "verified",
          locator: "Lion hunting facts, exercise needs, family suitability, and training"
        },
        {
          id: "rhodesian-ridgeback-dermoid-sinus-study-2007",
          role: "verified",
          locator: "Dermoid sinus explanation and genetics"
        },
        {
          id: "ofa-rhodesian-ridgeback-chic-requirements",
          role: "verified",
          locator: "Recommended health screening panel"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and genetics research without naming registries in prose."
    }
  },

  updatedOn: "2026-11-10"
};
