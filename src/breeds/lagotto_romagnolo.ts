import type { Breed } from "../schema/breed.types";

export const lagotto_romagnolo: Breed = {
  slug: "lagotto-romagnolo",
  name: "Lagotto Romagnolo",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Romagna Water Dog",
    "Water Dog of Romagna",
    "Lagotto"
  ],

  group:
    "Retrievers, Flushing Dogs, and Water Dogs; Section 3 — Water Dogs (also classified in the Sporting and Gundog groups)",

  origin: {
    country: "Italy",
    region:
      "Romagna sub-region (historically the lowlands of Comacchio and marshlands of Ravenna)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lagotto-romagnolo.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Lagotto-romagnolo.jpg",
      title: "Lagotto-romagnolo.jpg",
      description:
        "An adult Lagotto Romagnolo with a typical dense, curly coat outdoors.",
      creator: "XTY78",
      uploader: "XTY78",
      capturedOn: "2021-11-11",
      uploadedOn: "2021-11-11",
      width: 4032,
      height: 3024,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by XTY78, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Lagotto-romagnolo.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-13"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lagotto_Romagnolo.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Lagotto_Romagnolo.jpg",
      title: "Lagotto Romagnolo.jpg",
      description:
        "A close-up view of a Lagotto Romagnolo showcasing the distinctive woolly curls.",
      creator: "Sandra Schmidt",
      uploader: "Canecorsodog",
      capturedOn: "2005-08-06",
      uploadedOn: "2005-08-06",
      width: 450,
      height: 425,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Sandra Schmidt, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Lagotto_Romagnolo.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-13"
    }
  ],

  overview: {
    summary:
      "An ancient, highly intelligent Italian water retriever uniquely specialized for truffle hunting, celebrated for its dense, woolly, non-shedding curls, keen olfactory prowess, and tractable, affectionate nature.",

    description:
      "The Lagotto Romagnolo is a small to medium-sized, powerfully built sporting dog of rustic appearance, designed to work tirelessly across varied terrain. Its hallmark is a dense, woolly, and tightly curled double coat that covers the entire body and head, providing impenetrable protection against cold water and thorny underbrush. The nearly square, mesomorphic frame features a deep chest, webbed paws adapted for swimming and digging, and a trapezoidal head with large, rounded eyes expressing alert intelligence. Uniquely among sporting breeds, generations of selective breeding have effectively overridden its original hunting instincts, ensuring the dog remains singularly focused on its work without being distracted by game. In the home, the Lagotto is remarkably tractable, undemanding, and deeply attached to its family, functioning as both an alert watchdog and a gentle companion.",

    history:
      "The Lagotto Romagnolo boasts a documented archaeological continuity spanning over two millennia, ranking among the oldest known water retrieving breeds. Its name derives from the Romagnolo dialect phrase 'càn lagòt', meaning 'water dog' or 'hunting dog in the marsh with curly and hispid fur'. For centuries, these dogs were the indispensable companions of Italian 'vallaroli' (lagoon hunters), expertly retrieving waterfowl from the vast, freezing marshlands of Ravenna and the lowlands of Comacchio. During the late nineteenth century, massive agricultural drainage projects transformed these historic marshes into arable farmland, rendering the traditional water dog obsolete. Adapting to the new landscape, the Lagotto was repurposed for its exceptional nose and became an unparalleled specialist in searching for truffles across the open country and hills of Romagna. Modern preservation efforts in the late twentieth century rescued the breed from decline, cementing its status as the world's only recognized purebred truffle hunter.",

    originalPurpose:
      "Retrieving waterfowl from the marshes and lagoons of the Romagna region in Italy, later transitioning to specialized truffle searching.",

    currentRoles: [
      "Specialist truffle-searching dog",
      "Versatile canine athlete in agility, obedience, and nosework",
      "Vigilant home watchdog",
      "Devoted and hypoallergenic family companion"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 43,
        max: 48
      },
      female: {
        min: 41,
        max: 46
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 13,
        max: 16
      },
      female: {
        min: 11,
        max: 14
      }
    },

    lifespanYears: {
      min: 15,
      max: 17
    },

    coatType:
      "Dense, woolly in texture, and tightly curled with an abundant water-repellent undercoat; the coat grows continuously without seasonal shedding and evenly covers the body, head, and tail.",

    coatLength: "Medium",

    coatColors: [
      "Off-white solid",
      "White with brown or orange patches",
      "Brown roan",
      "Solid brown (in various shades) with or without white",
      "Solid orange with or without white"
    ],

    sheddingLevel:
      "Low; considered hypoallergenic as the coat does not shed seasonally and loose hairs are trapped within the curls until clipped or brushed",

    droolingLevel:
      "Low; rather tight lips covered with bristly moustache prevent excessive drooling",

    distinctiveFeatures: [
      "Rustic, nearly square mesomorphic frame where trunk length is roughly equal to the height at the withers",
      "Ideal height of 46 cm for males and 43 cm for females, with a 1 cm tolerance above or below the extremes",
      "Dense, tightly curled, continuous-growing coat requiring regular clipping",
      "Trapezoidal head shape with slightly diverging upper longitudinal axes of the skull and muzzle",
      "Large, rounded eyes ranging from ochre to dark hazel and brown, featuring well-developed eyelashes",
      "Medium-sized triangular drop ears with rounded tips, set just above the zygomatic arches",
      "Strong jaws with a scissor or pincer bite (a slightly reverse scissor bite is also acceptable)",
      "Webbed paws functioning perfectly for both soft soil digging and aquatic work",
      "Scimitar-shaped tail set at medium height, raised when attentive but never curled into a ring over the back"
    ]
  },

  temperament: {
    traits: [
      "Tractable, keen, and highly responsive to training",
      "Affectionate and deeply attached to its owner and family",
      "Alert and observant, making a very capable watchdog",
      "Intensely focused on scent work and digging tasks",
      "Undemanding and calm indoors when physical and mental needs are met",
      "Lacking strong prey drive; selectively bred to ignore game in favor of truffles",
      "Reserved but polite with unfamiliar strangers",
      "Sociable with other household pets when appropriately socialized",
      "Energetic and eager when presented with a job or outdoor activity"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 3,
      independence: 2,
      trainability: 5,
      barking: 3,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; an intelligent, active sporting dog requiring daily physical exercise combined with rigorous olfactory and mental stimulation",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Daily brisk trail walks and woodland hikes",
        "Scent work, tracking games, and simulated truffle hunting",
        "Swimming and water retrieving in safe environments",
        "Canine sports including agility, rally obedience, and nosework",
        "Interactive digging challenges in a designated sandbox"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Brush thoroughly once a week using a slicker brush and metal comb to separate curls and prevent matting down to the skin.",

      bathing:
        "Bathe every four to six weeks using a mild canine shampoo; air dry or gently towel dry rather than blow-drying to allow the coat to form natural tight ringlets.",

      notes: [
        "The coat grows continuously and must be clipped completely down at least once a year, typically in the spring.",
        "Regularly trim the hair around the eyes to ensure clear vision, and clip the sanitary areas for cleanliness.",
        "Inspect the drop ears weekly; gently remove excess hair from the ear canal to promote airflow and prevent bacterial or yeast infections.",
        "Check the webbed paws for debris, burrs, or mud compaction after working in the field.",
        "Trim fast-growing nails every two to three weeks.",
        "Brush teeth several times weekly using canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Easy; highly intelligent, biddable, and eager to please, making them exceptionally responsive to positive reinforcement",

      tips: [
        "Use positive, reward-based training with high-value treats and enthusiastic praise.",
        "Channel natural digging and scenting instincts into structured games rather than punishing the behavior.",
        "Keep instructional lessons engaging and mentally challenging to satisfy their working heritage.",
        "Socialize early and extensively to ensure their natural watchdog reserve does not develop into fearful shyness.",
        "Although they have a low prey drive, basic recall and loose-leash training are essential for off-leash reliability."
      ],

      socialization:
        "Introduce the puppy early, gradually, and positively to varied people, friendly vaccinated dogs, household noises, vehicles, and varied outdoor environments. Structured socialization builds a confident, well-adjusted adult dog that handles novel situations gracefully."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool and wet climates, where the dense, water-repellent double coat provides excellent insulation",
        "Warm climates, provided the coat is kept clipped short, with adequate shade, air conditioning, and hydration available"
      ],

      aloneTimeTolerance:
        "Low to moderate; deeply attached to its human family and prone to separation distress or boredom-induced digging if left isolated for long workdays without companionship."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for active medium-sized breeds, adjusted for age, working workload, and metabolic rate.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age.",
      adult:
        "Two measured meals daily to support steady energy levels and comfortable digestion.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output and joint support."
    },

    guidelines:
      "Measure daily rations carefully using a digital kitchen scale or standard measuring cup to maintain a lean, athletic body condition. The dense coat can easily hide weight gain, so regular physical assessments (feeling for the ribs) are necessary. Divide daily food into two distinct meals and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a lean body condition; excess weight places unnecessary stress on the joints.",
      "Account for training treats within the total daily caloric allowance.",
      "Wipe the bristly moustache and beard after meals and drinking to prevent moisture buildup and odor.",
      "Avoid feeding high-fat table scraps that can trigger digestive upset.",
      "Transition between diet formulas gradually over five to seven days."
    ],

    note:
      "Caloric needs vary significantly based on daily exercise intensity, nosework participation, and ambient temperature. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Lagotto Romagnolo is a generally healthy and robust breed with an impressive life expectancy of 15 to 17 years. The breed benefits from strict genetic screening protocols established by parent clubs. Primary health priorities include DNA testing for Benign Familial Juvenile Epilepsy (BFJE) and Lagotto Storage Disease (LSD), alongside orthopedic screening for hip dysplasia and patellar luxation, and annual veterinary ophthalmic examinations.",

    commonConditions: [
      "Benign Familial Juvenile Epilepsy (BFJE / LGI2 gene mutation) — a breed-specific neurological disorder causing focal seizures in puppies between 5 and 13 weeks of age, which typically resolve by adulthood, completely screenable via DNA testing",
      "Lagotto Storage Disease (LSD) — a fatal, progressive neurodegenerative lysosomal storage disease resulting in cerebellar ataxia and behavioral changes, completely preventable through DNA testing",
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints leading to osteoarthritis, monitored through pre-breeding radiographic screening",
      "Patellar luxation — intermittent displacement of the kneecap from the femoral groove, evaluated through clinical orthopedic examination",
      "Ocular conditions — cataracts and other hereditary eye anomalies, monitored through annual certified veterinary ophthalmologist examinations",
      "Chronic otitis externa — bacterial and yeast ear infections promoted by dense hair growth inside the ear canal, requiring diligent routine ear hygiene"
    ],

    preventiveCare: [
      "Confirm that breeding stock has certified radiographic clearances for hips, clinical clearances for patellas, annual specialist eye exams, and DNA clearances for BFJE and LSD.",
      "Inspect the ears weekly; carefully remove excess hair from the ear canal to allow ventilation, and dry thoroughly after swimming or bathing.",
      "Maintain a lean, muscular body condition throughout life to minimize mechanical wear on joints and ligaments.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "DNA marker test for Benign Familial Juvenile Epilepsy (BFJE / LGI2 gene)",
      "DNA marker test for Lagotto Storage Disease (LSD)",
      "Radiographic hip dysplasia evaluation through an accredited national screening program prior to breeding",
      "Clinical patellar luxation orthopedic evaluation",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste. The breed has strong jaws with a complete scissor, pincer, or slightly reverse scissor bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the drop ears weekly for wax accumulation, moisture, or redness. Because the inner auricle grows hair, gentle removal of excess hair and cleaning with a veterinarian-recommended ear solution is crucial.",

    skinCare:
      "Part the dense, woolly coat weekly during brushing to inspect the skin for external parasites, mats, or irritation. Ensure the thick coat dries completely down to the skin after bathing."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Active individuals and families seeking an intelligent, highly trainable, and affectionate companion",
      "Allergy sufferers seeking a low-shedding, hypoallergenic dog",
      "Canine sports enthusiasts interested in nosework, agility, or tracking",
      "Apartment or house dwellers who can provide daily physical and mental exercise",
      "Owners willing to commit to regular brushing and annual professional coat clipping"
    ],

    notIdealFor: [
      "Sedentary individuals looking for a low-maintenance indoor lap dog without working drive",
      "Households unwilling to invest time and budget into required grooming and clipping",
      "Owners who leave a dog home alone in isolation for long workdays without mental stimulation",
      "People seeking a fierce, aggressive territorial guard dog"
    ]
  },

  funFacts: [
    "The Lagotto Romagnolo is the only recognized purebred dog in the world bred specifically for truffle hunting, an adaptation made after the great Italian marshlands were drained in the late nineteenth century.",
    "The breed possesses a documented archaeological continuity spanning nearly 2,500 years, making it one of the oldest known water retrieving breeds in existence.",
    "Unlike most sporting breeds, the Lagotto's hunting instinct for game has been genetically 'cancelled' over generations, ensuring the dog remains entirely focused on searching for truffles without being distracted by passing wildlife.",
    "The name 'Lagotto' originates from the Romagnolo dialect word 'càn lagòt', which perfectly describes its original job: 'water dog' or 'hunting dog in the marsh with curly and hispid fur'.",
    "The Lagotto is widely considered a hypoallergenic breed because its continuous-growing, tightly curled coat traps dander and does not undergo seasonal shedding."
  ],

  faq: [
    {
      question: "What is a Lagotto Romagnolo?",
      answer:
        "The Lagotto Romagnolo is an ancient Italian breed originally used as a water retriever, but today is world-renowned as a specialized truffle-hunting dog with a dense, curly, hypoallergenic coat and an affectionate, trainable nature."
    },
    {
      question: "How tall and heavy is a Lagotto Romagnolo?",
      answer:
        "Adult males stand 43 to 48 cm at the withers and weigh 13 to 16 kg, while adult females stand 41 to 46 cm and weigh 11 to 14 kg."
    },
    {
      question: "How long does a Lagotto Romagnolo live?",
      answer:
        "With proper nutrition, mental enrichment, and preventive veterinary care, the breed is notably long-lived, typically enjoying a healthy lifespan of 15 to 17 years."
    },
    {
      question: "Do Lagotto Romagnolos shed a lot, and how are they groomed?",
      answer:
        "They are very low shedders and are considered hypoallergenic. Their woolly, curly coat grows continuously and must be brushed weekly to prevent matting, and clipped down completely at least once a year."
    },
    {
      question: "Can a Lagotto Romagnolo live in an apartment?",
      answer:
        "Yes, they can adapt well to apartment living provided they receive 45 to 60 minutes of daily physical exercise and, importantly, regular mental stimulation such as nosework or puzzle toys."
    },
    {
      question: "Are Lagotto Romagnolos good family pets and good with children?",
      answer:
        "Yes, they are exceptionally affectionate, tractable, and devoted to their families, making them patient and playful companions for respectful children."
    },
    {
      question: "Does the Lagotto Romagnolo have a high prey drive?",
      answer:
        "No. Generations of selective breeding for truffle hunting have effectively diminished their prey drive, meaning they are rarely distracted by small animals or game while working or walking."
    },
    {
      question: "What is BFJE in the Lagotto Romagnolo?",
      answer:
        "Benign Familial Juvenile Epilepsy (BFJE) is a breed-specific neurological condition where puppies experience focal seizures that usually disappear by adulthood; it is entirely preventable through responsible DNA testing by breeders."
    },
    {
      question: "What health tests are recommended for breeding dogs?",
      answer:
        "Recommended pre-breeding screenings include DNA tests for BFJE and Lagotto Storage Disease (LSD), radiographic evaluations for hip dysplasia, clinical patellar luxation checks, and annual veterinary ophthalmologist eye exams."
    }
  ],

  references: [
    "fci-lagotto-romagnolo-official-standard",
    "fci-lagotto-romagnolo-nomenclature",
    "akc-lagotto-romagnolo-breed-standard",
    "akc-lagotto-romagnolo-breed-profile",
    "dogs-australia-lagotto-romagnolo-standard",
    "lrca-lagotto-romagnolo-health",
    "ofa-lagotto-romagnolo-chic-requirements",
    "lagotto-romagnolo-bfje-lgi2-study",
    "wikimedia-lagotto-romagnolo-xty78",
    "wikimedia-lagotto-romagnolo-sandra-schmidt"
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
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "Standard heading: LAGOTTO ROMAGNOLO (Romagna Water Dog)"
        },
        {
          id: "akc-lagotto-romagnolo-breed-profile",
          role: "verified",
          locator: "Breed Information: Water Dog of Romagna, Lagotto"
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Verified across FCI Standard No. 298 and AKC profile."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 8 Retrievers - Flushing Dogs - Water Dogs; Section 3 Water Dogs"
        },
        {
          id: "fci-lagotto-romagnolo-nomenclature",
          role: "verified",
          locator: "Group 8, Section 3 Water Dogs"
        },
        {
          id: "akc-lagotto-romagnolo-breed-standard",
          role: "verified",
          locator: "Sporting Group"
        },
        {
          id: "dogs-australia-lagotto-romagnolo-standard",
          role: "verified",
          locator: "Group 3 (Gundogs)"
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
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "ORIGIN: Italy; BRIEF HISTORICAL SUMMARY"
        },
        {
          id: "dogs-australia-lagotto-romagnolo-standard",
          role: "verified",
          locator: "History: Ancient breed in the lowlands of Comacchio and marshlands of Ravenna, Italy"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "akc-lagotto-romagnolo-breed-standard",
          role: "verified",
          locator: "General Appearance: Small to medium-sized dog... dense, curly coat of wooly texture."
        },
        {
          id: "dogs-australia-lagotto-romagnolo-standard",
          role: "verified",
          locator: "History, General Appearance, Temperament"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Synthesized in original prose from FCI Standard No. 298, Dogs Australia, and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS, HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE AND WEIGHT"
        },
        {
          id: "dogs-australia-lagotto-romagnolo-standard",
          role: "verified",
          locator: "Head And Skull, Eyes, Ears, Mouth, Coat, Size"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Conformation, square mesomorphic build, dense woolly coat, webbed paws, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Height at the withers: Males: 43 - 48 cm (ideal height: 46 cm). Females: 41 - 46 cm (ideal height: 43 cm). Tolerance of 1 cm over or under."
        },
        {
          id: "dogs-australia-lagotto-romagnolo-standard",
          role: "verified",
          locator: "Height: 43 ±1 cm to 48 ±1 cm (males); 41 ±1 cm to 46 ±1 cm (females)"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Preserved in published unit of centimetres (43–48 cm for males and 41–46 cm for females) exactly as specified in the official FCI Standard No. 298."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "Weight: Males: 13 - 16 kg. Females: 11 - 14 kg."
        },
        {
          id: "dogs-australia-lagotto-romagnolo-standard",
          role: "verified",
          locator: "Mass: 13 kg to 16 kg (males); 11 kg to 14 kg (females)"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "Preserved in published unit of kilograms (13 to 16 kg for males and 11 to 14 kg for females) exactly as specified in the official FCI Standard No. 298."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "lrca-lagotto-romagnolo-health",
          role: "verified",
          locator: "The Lagotto Romagnolo is a healthy and robust dog with a life expectancy of 15 to 17 years."
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Supported by parent breed club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "COAT: of woolly texture, never twisted to form thin cords, semi-rough on the surface, with tight, ring-shaped curls... Coat does not shed naturally."
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "Lips: The lips are not too thick; they are rather tight... covered with a long and rather bristly moustache."
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Tight-fitting lips prevent drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Tractable, undemanding, keen, affectionate, very attached to his owner and easy to train. Very good companion and excellent watchdog."
        },
        {
          id: "dogs-australia-lagotto-romagnolo-standard",
          role: "verified",
          locator: "Temperament: The former hunting instinct has been modified by genetic selection; hence his work is not distracted by the scent of game. Tractable, undemanding, keen, affectionate."
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "cited",
          locator: "Temperament characteristics"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented working truffle dog temperament, high trainability, cancelled prey drive, and strong family affection."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "lrca-lagotto-romagnolo-health",
          role: "cited",
          locator: "Coat care, clipping, and exercise management"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active sporting dog management with continuous-growing curly coat clipping and ear hygiene protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "UTILIZATION: Truffle dog with natural gift for searching."
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-lagotto-romagnolo-breed-profile",
          role: "cited",
          locator: "Daily exercise and scentwork recommendations"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 45 to 60 minutes of daily activity reflects the moderate-to-high exercise and olfactory demands of a working truffle dog."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-lagotto-romagnolo-breed-profile",
          role: "cited",
          locator: "Size and adaptability"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial evaluation that compact size, tractable nature, and lack of shedding make apartment living highly suitable provided exercise needs are met."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-lagotto-romagnolo-breed-profile",
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
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "COAT: Dense, woolly in texture, water-repellent undercoat"
        }
      ],
      verifiedOn: "2026-11-13",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "cited",
          locator: "BEHAVIOUR/TEMPERAMENT: Very attached to his owner"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-lagotto-romagnolo-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food formulated for medium active breeds"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for active medium-sized sporting breeds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-lagotto-romagnolo-breed-profile",
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
          id: "lagotto-romagnolo-bfje-lgi2-study",
          role: "verified",
          locator: "LGI2 truncation causes a remitting focal epilepsy (BFJE) in Lagotto Romagnolo dogs"
        },
        {
          id: "ofa-lagotto-romagnolo-chic-requirements",
          role: "verified",
          locator: "CHIC Program requirements: Hip Dysplasia, Eye examination, Patellar Luxation, BFJE DNA, LSD DNA"
        },
        {
          id: "lrca-lagotto-romagnolo-health",
          role: "verified",
          locator: "Health Information: BFJE, Lagotto Storage Disease, Hips, Patellas, Eyes"
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
          id: "lagotto-romagnolo-bfje-lgi2-study",
          role: "verified",
          locator: "Benign Familial Juvenile Epilepsy (BFJE) pathology and LGI2 genetics"
        },
        {
          id: "ofa-lagotto-romagnolo-chic-requirements",
          role: "verified",
          locator: "Lagotto Storage Disease (LSD), Hip dysplasia, Patellar luxation, Eye conditions"
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
          id: "lrca-lagotto-romagnolo-health",
          role: "cited",
          locator: "Preventive health, DNA testing verification, ear canal hair removal"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to curly-coated water dogs."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-lagotto-romagnolo-chic-requirements",
          role: "verified",
          locator: "CHIC Program required screenings: Radiographic Hip Dysplasia evaluation, Patellar Luxation, CAER Eye examination, Benign Familial Juvenile Epilepsy (BFJE) DNA test, Lagotto Storage Disease (LSD) DNA test"
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
          id: "fci-lagotto-romagnolo-official-standard",
          role: "cited",
          locator: "Jaws/teeth: strong with almost straight branches, scissor or pincer bite, slightly reverse acceptable"
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "cited",
          locator: "Ears: Medium-sized, triangular, drop. The inner part of the auricle is also covered with hair."
        },
        {
          id: "lrca-lagotto-romagnolo-health",
          role: "cited",
          locator: "Ear hygiene, hair plucking, and inspection"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for drop ears with internal hair growth."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "cited",
          locator: "Coat texture and continuous growth requiring clipping"
        }
      ],
      verifiedOn: null,
      note: "General skin and curly-coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "cited",
          locator: "Tractable, undemanding, affectionate companion"
        },
        {
          id: "dogs-australia-lagotto-romagnolo-standard",
          role: "cited",
          locator: "Characteristics and lifestyle suitability"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, hypoallergenic coat, and high trainability."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "Brief historical summary: Ravenna marsh water dog transitioned to truffle dog, hunting instinct genetically cancelled"
        },
        {
          id: "dogs-australia-lagotto-romagnolo-standard",
          role: "verified",
          locator: "Romagna dialect meaning (càn lagòt), only purebred specialized truffle searcher"
        }
      ],
      verifiedOn: "2026-11-13",
      note: "Verified historical folklore and working heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-lagotto-romagnolo-official-standard",
          role: "verified",
          locator: "Origin, height (43-48 cm / 41-46 cm), weight (13-16 kg / 11-14 kg), coat, and truffle hunting role"
        },
        {
          id: "lrca-lagotto-romagnolo-health",
          role: "verified",
          locator: "Lifespan (15-17 years), hypoallergenic shedding, and recommended health screenings (BFJE, LSD)"
        },
        {
          id: "dogs-australia-lagotto-romagnolo-standard",
          role: "verified",
          locator: "Lack of prey drive (cancelled hunting instinct), family suitability, and exercise"
        }
      ],
      verifiedOn: "2026-11-13",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and genetics research without naming registries in prose."
    }
  },

  updatedOn: "2026-11-13"
};
