import type { Breed } from "../schema/breed.types";

export const portuguese_pointer: Breed = {
  slug: "portuguese-pointer",
  name: "Portuguese Pointer",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Perdigueiro Português",
    "Portuguese Pointing Dog"
  ],

  group:
    "Pointing Dogs; Section 1.1 — Continental Pointing Dogs, type 'Braque' (with working trial; also classified in the Sporting and Gun Dog groups)",

  origin: {
    country: "Portugal",
    region: "Iberian Peninsula"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Perdigueiro_Portugues_aka_Portuguese_Pointer.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Perdigueiro_Portugues_aka_Portuguese_Pointer.jpg",
      title: "Perdigueiro Portugues aka Portuguese Pointer.jpg",
      description:
        "An adult fawn Portuguese Pointer standing in profile, displaying its robust, square build and short, dense coat.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2006-06-25",
      uploadedOn: "2014-05-31",
      width: 498,
      height: 472,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Perdigueiro_Portugues_aka_Portuguese_Pointer.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Portuguese_pointer_11yo.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Portuguese_pointer_11yo.jpg",
      title: "Portuguese pointer 11yo.jpg",
      description:
        "A mature Portuguese Pointer resting outdoors on the grass, showcasing its broad head and drop ears.",
      creator: "Afonso Silva~commonswiki",
      uploader: "Afonso Silva~commonswiki",
      capturedOn: "2006-06-29",
      uploadedOn: "2006-06-29",
      width: 1632,
      height: 1224,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Afonso Silva~commonswiki, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Portuguese_pointer_11yo.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17"
    }
  ],

  overview: {
    summary:
      "An affectionate, robust, and highly intelligent pointing dog of Portuguese origin, renowned for its athletic stamina, short yellow coat, and supreme devotion as both an untiring bird hunter and a calm household companion.",

    description:
      "The Portuguese Pointer is a medium-sized, square-built, and harmonious sporting dog that radiates functional strength and rustic elegance. Designed to endure harsh terrain and long hours in the field, it possesses a deep chest, a sturdy back, and a remarkably solid bone structure. The breed is covered in a short, hard, and dense single coat—completely lacking an undercoat—that is typically found in beautiful shades of light, medium, or dark yellow, often accented by crisp white markings. Its distinct head features parallel planes, a broad skull, and large, expressive, oval-shaped brown eyes that reveal an incredibly docile, sweet, and highly intelligent nature. While it is a persistent, focused, and relentless worker outdoors, pointing staunchly at game, it transforms indoors into an exceptionally calm, quiet, and devoted family member that thrives on close human physical contact.",

    history:
      "Tracing its roots deep into the antiquity of the Iberian Peninsula, the Portuguese Pointer evolved alongside falconers as early as the twelfth century. In its homeland, the breed is famously known as the 'Perdigueiro Português'—a name directly derived from 'perdiz', meaning partridge, signifying its unmatched prowess in hunting this specific game bird. For centuries, it was an indispensable asset to local hunters and royal estates across Portugal. By the eighteenth century, the breed's reputation for keen scenting, steadfast pointing, and immense stamina drew the attention of British wine merchants trading in the region. It is widely documented that many of these dogs were exported to Great Britain, where they heavily influenced the development of the modern English Pointer. Despite facing challenges from modernization and shifting agricultural practices in the late nineteenth century, the breed was carefully preserved by dedicated Portuguese fanciers who formalized its written standard in the 1930s, ensuring this noble, rustic gundog continued to thrive.",

    originalPurpose:
      "Finding, scenting, and steadfastly pointing game birds—particularly partridge—for falconers and net hunters in the Portuguese countryside.",

    currentRoles: [
      "Versatile pointing and retrieving gundog",
      "Canine athlete in field trials and scent work",
      "Highly devoted household companion"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 52,
        max: 60
      },
      female: {
        min: 48,
        max: 56
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 20,
        max: 27
      },
      female: {
        min: 16,
        max: 22
      }
    },

    lifespanYears: {
      min: 12,
      max: 14
    },

    coatType:
      "Short, hard, dense, and somewhat coarse single coat lying perfectly flat against the body, completely lacking an undercoat. The hair is noticeably finer and shorter on the head and ears.",

    coatLength: "Short",

    coatColors: [
      "Yellow (fawn) in light, medium, or dark shades",
      "Solid yellow",
      "Yellow featuring distinct white patches on the head, neck, chest, and lower limbs"
    ],

    sheddingLevel:
      "Low to moderate; the short single coat sheds consistently but is very easy to manage due to the lack of an undercoat",

    droolingLevel:
      "Low; tightly fitted, well-pigmented lips prevent excessive drooling",

    distinctiveFeatures: [
      "Solid, square-built, and harmonious frame where the length of the body equals the height at the withers",
      "Height at the withers ideally 56 cm for males (limits 52 to 60 cm) and 52 cm for females (limits 48 to 56 cm)",
      "Working weight ranging from 20 to 27 kg for males and 16 to 22 kg for females",
      "Head characterized by parallel planes, a broad skull, and a distinct stop",
      "Large, oval, and highly expressive eyes in shades of brown corresponding to the coat color",
      "Drop ears that are thin, broad at the base, triangular with rounded tips, and hanging close to the cheeks",
      "Complete and regular scissor bite",
      "Deep, broad chest reaching down to the elbows, supporting excellent lung capacity",
      "Short, broad, and slightly arched loin",
      "Tail thick at the base and tapering toward the tip, carried horizontally or slightly raised in a gentle curve during action",
      "Strong, well-boned limbs ending in round, tight toes with thick, dark pads"
    ]
  },

  temperament: {
    traits: [
      "Extremely affectionate, demonstrative, and deeply devoted to its human family",
      "Highly intelligent, observant, and responsive to handler cues",
      "Calm, docile, and remarkably unobtrusive when relaxing indoors",
      "Energetic, focused, and persistent while working in the field",
      "Sociable and gentle with children and familiar household members",
      "Can be slightly reserved or aloof with strangers, but never sharp or aggressive",
      "Eager to please, possessing a sensitive nature that thrives on positive guidance",
      "Peaceable with other dogs when properly socialized"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 2,
      independence: 2,
      trainability: 4,
      barking: 2,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; an athletic pointing breed that requires vigorous daily physical activity and mental stimulation, though it settles very calmly indoors afterward",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Daily brisk leashed walks or long trail hikes",
        "Free running in a securely fenced, open field",
        "Scent tracking, hunt tests, and interactive retrieving games",
        "Canine sports including agility and rally obedience"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush once a week using a soft bristle brush or a rubber hound glove to remove loose dead hairs, massage skin oils, and keep the coat bright and shining.",

      bathing:
        "Bathe only occasionally when visibly soiled, using a mild canine shampoo to preserve the skin's natural protective oils.",

      notes: [
        "The short single coat is virtually self-cleaning and requires very little maintenance.",
        "Inspect the drop ears weekly, wiping the canals gently with a veterinary-approved cleanser to prevent trapped moisture and infections.",
        "Trim fast-growing nails every two to three weeks to maintain correct, tight foot alignment.",
        "Brush teeth several times weekly with canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Easy; highly intelligent, naturally cooperative, and eager to please, making them highly responsive to positive reinforcement",

      tips: [
        "Use exclusively positive, reward-based training; they are deeply sensitive dogs that will shut down or become timid if yelled at or treated harshly.",
        "Begin basic obedience and leash training early to build confidence and establish a strong communicative bond.",
        "Channel their natural pointing and scenting instincts into structured play to keep their minds engaged.",
        "Practice solid recall relentlessly to safely manage their strong hunting drive in unfenced rural areas."
      ],

      socialization:
        "Introduce the puppy early, gradually, and positively to diverse people, friendly dogs, and novel environments. Because they can be naturally reserved with strangers, proper early exposure ensures a confident, well-adjusted adult."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Warm climates, reflecting its Iberian Peninsula heritage, provided shade and fresh water are always available",
        "Sensitive to extreme cold; the short single coat completely lacks an undercoat, so they require a warm dog jacket during freezing winter conditions"
      ],

      aloneTimeTolerance:
        "Low; they form incredibly deep, sensitive bonds with their human family and are prone to severe separation anxiety or depression if left isolated for long workdays without companionship."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for active medium-sized sporting breeds.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age.",
      adult:
        "Two measured meals daily to support steady energy and digestion.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output and joint support."
    },

    guidelines:
      "Measure daily rations strictly using a digital kitchen scale or standard measuring cup, adjusting amounts to maintain a lean, athletic body silhouette where the ribs are easily felt but not seen. Divide daily food into two distinct meals, restrict vigorous running immediately before and after eating, and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a strictly lean, well-muscled body condition to minimize mechanical stress on the joints.",
      "Account for training treats within the total daily caloric allowance to prevent obesity.",
      "Increase protein and caloric density during active autumn hunting seasons or intense training periods.",
      "Transition between diet formulas gradually over five to seven days to prevent gastrointestinal upset."
    ],

    note:
      "Caloric needs vary significantly based on exercise intensity, age, and outdoor temperature. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Portuguese Pointer is a highly robust, rustic, and athletic working breed with a typical life expectancy of 12 to 14 years. Unspoiled by extreme cosmetic exaggerations, the breed generally enjoys excellent health. Primary health priorities focus on maintaining orthopedic soundness, preventing ear infections common to drop-eared dogs, and managing the dog's weight to protect joint longevity.",

    commonConditions: [
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints leading to osteoarthritis and stiffness, monitored through pre-breeding radiographic screening",
      "Elbow dysplasia — developmental abnormalities of the elbow joints that can cause forelimb lameness and secondary arthritis",
      "Chronic otitis externa — bacterial and yeast ear infections promoted by drop ears that restrict canal ventilation and trap moisture",
      "Ocular conditions — occasional reports of entropion (inward rolling eyelids) or ectropion (outward sagging eyelids), requiring veterinary monitoring",
      "Traumatic outdoor injuries — minor cuts, sprains, or thorn punctures sustained during vigorous fieldwork in rough terrain"
    ],

    preventiveCare: [
      "Confirm that breeding stock has certified radiographic clearances for hips and elbows, and specialist eye examinations.",
      "Thoroughly clean and dry the drop ears after swimming, bathing, or wet weather walks to prevent moisture-induced ear infections.",
      "Maintain a lean, athletic body condition throughout life to minimize mechanical wear on joints.",
      "Provide a warm dog jacket during freezing winter walks, as the breed lacks an insulating undercoat.",
      "Administer consistent year-round parasite prevention against fleas, ticks, and heartworms, especially for dogs active in rural areas.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation through an accredited national screening program prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste. The breed has strong jaws with a complete scissor bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the thin, triangular drop ears weekly for wax buildup, moisture, or redness. Clean gently using a veterinarian-recommended ear solution, drying the leather thoroughly.",

    skinCare:
      "Part the short, dense coat weekly during brushing to inspect the skin for external parasites, ticks, or brush scratches. The single coat is very low maintenance and requires infrequent bathing."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Active individuals and families seeking an exceptionally calm, gentle, and highly affectionate sporting companion",
      "First-time dog owners willing to provide consistent daily exercise to a highly biddable, eager-to-please breed",
      "Hunters or outdoor enthusiasts looking for a dedicated pointing and retrieving partner",
      "Homes with a securely fenced yard providing ample space for supervised running",
      "Owners who desire a deeply attached, short-coated dog that demands very little grooming"
    ],

    notIdealFor: [
      "Sedentary individuals looking for a low-maintenance, low-energy indoor lap dog",
      "Apartment dwellers without access to extensive outdoor running space",
      "Owners who leave a dog home alone in isolation for long workdays, risking separation anxiety and depression",
      "Handlers who rely on harsh training methods or heavy-handed corrections",
      "People seeking a fierce territorial guard dog"
    ]
  },

  funFacts: [
    "In its native Portugal, the breed is known as the 'Perdigueiro Português'; the word 'perdigueiro' comes from 'perdiz', meaning partridge, highlighting the dog's historical specialty in hunting game birds.",
    "The Portuguese Pointer is widely considered by canine historians to be a primary ancestor of the famous English Pointer, having been brought back to Britain by wine merchants in the eighteenth century.",
    "The breed possesses a remarkable 'on/off switch', being a tireless, intensely focused hunter in the field, yet transforming into a remarkably calm, docile, and quiet companion inside the house.",
    "Unlike many European pointing dogs, the Portuguese Pointer has absolutely no undercoat, which makes grooming incredibly easy but leaves them sensitive to freezing winter temperatures.",
    "They are renowned for their highly demonstrative affection, often demanding physical contact and leaning against their owners to show devotion."
  ],

  faq: [
    {
      question: "What is a Portuguese Pointer?",
      answer:
        "The Portuguese Pointer (Perdigueiro Português) is a medium-sized, athletic pointing gundog from the Iberian Peninsula, famous for its short yellow coat, steadfast hunting ability, and incredibly affectionate, docile nature."
    },
    {
      question: "How tall and heavy is a Portuguese Pointer?",
      answer:
        "Adult males stand 52 to 60 cm at the withers (ideal 56 cm) and weigh 20 to 27 kg. Adult females stand 48 to 56 cm (ideal 52 cm) and weigh 16 to 22 kg."
    },
    {
      question: "How long does a Portuguese Pointer live?",
      answer:
        "With proper nutrition, regular rigorous exercise, and preventive veterinary care, the breed typically enjoys a healthy lifespan of 12 to 14 years."
    },
    {
      question: "Do Portuguese Pointers shed a lot, and how are they groomed?",
      answer:
        "They are low to moderate shedders. Their short, hard single coat has no undercoat, making grooming exceptionally easy—requiring only a quick weekly brush with a hound glove and very occasional baths."
    },
    {
      question: "Can a Portuguese Pointer live in an apartment?",
      answer:
        "Generally no. While they are famously calm and quiet indoors, their high physical energy and need for vigorous daily exercise make them much better suited to a house with a securely fenced yard."
    },
    {
      question: "Are Portuguese Pointers hard to train?",
      answer:
        "No, they are highly intelligent, cooperative, and eager to please, making them relatively easy to train. However, they are deeply sensitive and require gentle, positive reinforcement, as harsh corrections will damage their trust."
    },
    {
      question: "Are Portuguese Pointers good family pets and good with children?",
      answer:
        "Yes, they are outstanding family pets. They are exceptionally docile, sweet-natured, and patient, making them wonderful, peaceable companions for children, provided they receive enough exercise."
    },
    {
      question: "What are the main health concerns for a Portuguese Pointer?",
      answer:
        "They are a very robust and healthy breed. Primary health concerns are limited to conditions common in many active sporting dogs, such as hip dysplasia and ear infections due to their drop ears."
    }
  ],

  references: [
    "fci-portuguese-pointer-official-standard",
    "fci-portuguese-pointer-nomenclature",
    "cpc-perdigueiro-portugues-standard",
    "akc-portuguese-pointer-breed-profile",
    "wikimedia-perdigueiro-portugues-canarian",
    "wikimedia-portuguese-pointer-afonso-silva"
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
          id: "fci-portuguese-pointer-official-standard",
          role: "verified",
          locator: "Standard heading: PORTUGUESE POINTING DOG (Perdigueiro Português)"
        },
        {
          id: "fci-portuguese-pointer-nomenclature",
          role: "verified",
          locator: "Official nomenclature: PORTUGUESE POINTING DOG (187)"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Verified across FCI Standard No. 187 and FCI Nomenclature."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-portuguese-pointer-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 7 Pointing Dogs; Section 1.1 Continental Pointing Dogs, type 'Braque'; With working trial"
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
          id: "fci-portuguese-pointer-official-standard",
          role: "verified",
          locator: "ORIGIN: Portugal; BRIEF HISTORICAL SUMMARY"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-portuguese-pointer-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "akc-portuguese-pointer-breed-profile",
          role: "verified",
          locator: "About the Breed, History (partridge hunting, English Pointer influence), and Roles"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Synthesized in original prose from FCI Standard No. 187 and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-portuguese-pointer-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS, HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE AND WEIGHT"
        },
        {
          id: "cpc-perdigueiro-portugues-standard",
          role: "verified",
          locator: "Morphology, short yellow coat without undercoat, square proportions"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Conformation, square build, short single yellow coat, drop ears, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-portuguese-pointer-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Height at the withers: Males: 56 cm. Females: 52 cm. Tolerance: +/- 4 cm."
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Preserved in published unit of centimetres (ideal 56 cm for males with +/- 4 cm tolerance making it 52-60 cm; ideal 52 cm for females with +/- 4 cm tolerance making it 48-56 cm) exactly as specified in the official FCI Standard No. 187."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-portuguese-pointer-official-standard",
          role: "verified",
          locator: "Weight: Males: 20-27 kg. Females: 16-22 kg."
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Preserved in published unit of kilograms (20-27 kg for males and 16-22 kg for females) exactly as specified in the official FCI Standard No. 187."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-portuguese-pointer-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12-14 years"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Supported by kennel club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-portuguese-pointer-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (2/5)"
        },
        {
          id: "fci-portuguese-pointer-official-standard",
          role: "verified",
          locator: "COAT: Hair: Short, hard, harsh and dense... Without undercoat."
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-portuguese-pointer-official-standard",
          role: "verified",
          locator: "Lips: Close fitting, not pendulous."
        },
        {
          id: "akc-portuguese-pointer-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (1/5)"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Close fitting, non-pendulous lips prevent excessive drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-portuguese-pointer-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Extremely affectionate and highly submissive animal, very sociable and somewhat haughty towards other dogs. Placid and easily taught... Very hardy and totally devoted to its work."
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-portuguese-pointer-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented continental pointing dog temperament, high family affection, extreme docility, and hunting energy."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-portuguese-pointer-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active pointing gundog management with very low-maintenance short-coat grooming and drop-ear care protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-portuguese-pointer-breed-profile",
          role: "verified",
          locator: "Energy Level (4/5); Exercise Needs (4/5)"
        },
        {
          id: "fci-portuguese-pointer-official-standard",
          role: "verified",
          locator: "UTILIZATION: Pointing dog... Very hardy and totally devoted to its work."
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-portuguese-pointer-breed-profile",
          role: "cited",
          locator: "Daily exercise and hunting work recommendations"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 60 to 90 minutes of daily activity reflects the exercise demands of an athletic, untiring pointing breed."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-portuguese-pointer-breed-profile",
          role: "cited",
          locator: "High energy outdoors, working drive, and need for open movement"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial evaluation that high physical energy, hunting drive, and outdoor endurance needs make apartment living generally unsuitable despite their calm indoor demeanor."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-portuguese-pointer-breed-profile",
          role: "verified",
          locator: "Exercise and secure fenced-yard recommendations"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-portuguese-pointer-official-standard",
          role: "verified",
          locator: "COAT: Without undercoat."
        },
        {
          id: "akc-portuguese-pointer-breed-profile",
          role: "verified",
          locator: "Weather adaptation: excels in warm weather; lacks undercoat so sensitive to extreme cold"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-portuguese-pointer-official-standard",
          role: "cited",
          locator: "BEHAVIOUR/TEMPERAMENT: Extremely affectionate... highly submissive"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-portuguese-pointer-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food formulated for active medium breeds"
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
          id: "akc-portuguese-pointer-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance and divided meals"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule for active sporting dogs."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-portuguese-pointer-breed-profile",
          role: "verified",
          locator: "Health overview: generally a very healthy and robust breed, check for hip dysplasia and ear infections"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Synthesizes kennel club veterinary health data and rustic working dog priorities."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-portuguese-pointer-breed-profile",
          role: "verified",
          locator: "Hip dysplasia, ear infections (otitis externa)"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Details documented conformational and environmental conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-portuguese-pointer-breed-profile",
          role: "cited",
          locator: "Routine care, ear drying, coat brushing, and veterinary wellness checks"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to active, drop-eared sporting dogs."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-portuguese-pointer-breed-profile",
          role: "verified",
          locator: "Recommended evaluations: Hip Evaluation, Ophthalmologist Evaluation"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Screenings summarize published national kennel club protocols."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-portuguese-pointer-official-standard",
          role: "cited",
          locator: "Jaws/teeth: Normal scissor bite"
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-portuguese-pointer-official-standard",
          role: "cited",
          locator: "Ears: Set on above the level of the eyes... hanging... flat, with one or two longitudinal folds when attentive"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for drop ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-portuguese-pointer-official-standard",
          role: "cited",
          locator: "Coat texture: short, hard, harsh and dense"
        }
      ],
      verifiedOn: null,
      note: "General skin and short single-coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-portuguese-pointer-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, grooming needs, high trainability, and exercise demands."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-portuguese-pointer-breed-profile",
          role: "verified",
          locator: "Perdigueiro name translation (partridge), ancient Iberian roots, influence on the English Pointer"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Verified historical folklore and working heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-portuguese-pointer-official-standard",
          role: "verified",
          locator: "Origin, height (52-60 cm / 48-56 cm), weight (20-27 kg / 16-22 kg), coat, and pointing utility"
        },
        {
          id: "akc-portuguese-pointer-breed-profile",
          role: "verified",
          locator: "Lifespan (12-14 years), apartment living, family suitability, and grooming"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "FAQ answers synthesize verified standards and national kennel club publications without naming registries in prose."
    }
  },

  updatedOn: "2026-11-17"
};
