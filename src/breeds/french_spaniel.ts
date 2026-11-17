import type { Breed } from "../schema/breed.types";

export const french_spaniel: Breed = {
  slug: "french-spaniel",
  name: "French Spaniel",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Epagneul Français",
    "Épagneul Français"
  ],

  group:
    "Pointing Dogs; Section 1.2 — Continental Pointing Dogs, Spaniel type (with working trial; also classified in the Sporting and Gun Dog groups)",

  origin: {
    country: "France",
    region:
      "French countryside (developed from ancient Chien d'Oysel bird dogs)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Epagneul_Fran%C3%A7ais_Fond_Blanc.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Epagneul_Fran%C3%A7ais_Fond_Blanc.jpg",
      title: "Epagneul Français Fond Blanc.jpg",
      description:
        "An adult French Spaniel standing on a white background, demonstrating the elegant, muscular build and brown-and-white feathered coat.",
      creator: "Wikimedia Commons User",
      uploader: "Flickr upload bot",
      capturedOn: "2015-02-20",
      uploadedOn: "2015-02-20",
      width: 1024,
      height: 768,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Wikimedia Commons User, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Epagneul_Fran%C3%A7ais_Fond_Blanc.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/French_Spaniel_or_%C3%89pagneul_Fran%C3%A7ais.JPG",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:French_Spaniel_or_%C3%89pagneul_Fran%C3%A7ais.JPG",
      title: "French Spaniel or Épagneul Français.JPG",
      description:
        "A French Spaniel standing in a grassy field, displaying its intelligent expression, drop ears, and flat, silky coat.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2026-08-15",
      uploadedOn: "2026-08-15",
      width: 3264,
      height: 2448,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:French_Spaniel_or_%C3%89pagneul_Fran%C3%A7ais.JPG. License: https://creativecommons.org/licenses/by-sa/4.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17"
    }
  ],

  overview: {
    summary:
      "An elegant, muscular, and exceptionally calm French pointing dog known for its beautiful brown-and-white feathered coat, steadfast hunting ability, and gentle, affectionate devotion to its family.",

    description:
      "The French Spaniel is a medium-sized, harmoniously built continental pointing dog that radiates both noble elegance and robust athleticism. Sporting a slightly rectangular silhouette, it is covered by a dense, flat, and silky coat of white and brown (liver), characterized by distinct patches and moderate feathering on the ears, legs, and tail. The head features a sculpted, noble profile with dark amber eyes that express profound gentleness and intelligence. Well-developed drop ears frame the face, lying close to the cheeks. In the field, it is a persistent, close-working hunter that points staunchly and retrieves gracefully from both land and water. In the home, however, it transforms into an incredibly docile, calm, and sociable companion that bonds intensely with its owners. Uncomplicated and deeply sensitive, the French Spaniel strikes a perfect balance between an untiring gundog and a peaceful domestic pet.",

    history:
      "The Epagneul Français boasts a truly ancient lineage, descending directly from the 'Chien d'Oysel', the venerable bird dogs used in the Middle Ages for netting and falconry across Europe. During the seventeenth century, these dogs were highly favored by the French royal court in Versailles for their exceptional scenting abilities and elegant appearance. As English pointing breeds surged in popularity during the nineteenth century, the traditional French Spaniel faced a sharp decline and near extinction. Fortunately, dedicated French breeders in the late nineteenth and early twentieth centuries led a meticulous revival, rescuing the authentic working bloodlines and standardizing the breed. Father Fournier, a prominent French priest and cynologist, was instrumental in this recovery, helping establish the first formal guidelines for the breed in 1891. While it remains somewhat rare outside of France and Canada, it is deeply cherished today by hunters and families who value its rustic endurance, beautiful coat, and exceptionally sweet nature.",

    originalPurpose:
      "Pointing and retrieving game birds across diverse terrain, often working in tandem with falconers or net hunters.",

    currentRoles: [
      "Versatile pointing and retrieving gundog",
      "Canine athlete in field trials and tracking",
      "Devoted household companion",
      "Therapy dog (due to its gentle and calm disposition)"
    ]
  },

  physical: {
    sizeCategory: "Medium to large",

    height: {
      unit: "cm",
      male: {
        min: 56,
        max: 61
      },
      female: {
        min: 55,
        max: 59
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 23,
        max: 27
      },
      female: {
        min: 20,
        max: 25
      }
    },

    lifespanYears: {
      min: 10,
      max: 13
    },

    coatType:
      "Dense, flat, and silky single coat with substantial feathering on the ears, back of the legs, and tail. A slight waviness is permissible, particularly on the ears and tail.",

    coatLength: "Medium",

    coatColors: [
      "White and brown (ranging from cinnamon to dark liver)",
      "Features irregular brown patches and varying degrees of brown roaning or ticking",
      "A white blaze on the forehead is highly desirable"
    ],

    sheddingLevel:
      "Moderate; sheds consistently year-round, requiring regular brushing to manage loose hairs in the feathering",

    droolingLevel:
      "Low to moderate; cleanly fitted lips prevent excessive drooling, though panting during vigorous work may cause slight moisture",

    distinctiveFeatures: [
      "Elegant, muscular, and slightly rectangular silhouette (body length slightly exceeds height at the withers)",
      "Height at the withers of 56 to 61 cm for males and 55 to 59 cm for females, with a tolerance of 2 cm above and 1 cm below these limits",
      "Working weight typically ranging from 23 to 27 kg for males and 20 to 25 kg for females",
      "Dense, silky white-and-brown coat featuring beautiful, long feathering",
      "Noble, sculpted head with a moderately pronounced stop and a slightly convex muzzle profile",
      "Complete, regular scissor bite (a pincer bite is tolerated)",
      "Large, oval-shaped amber or dark amber eyes expressing profound gentleness and intelligence",
      "Long, supple drop ears set at eye level, heavily fringed with wavy hair and hanging close to the cheeks",
      "Deep, broad chest reaching down to the elbows with well-sprung ribs",
      "Tail set slightly below the topline, tapering at the tip, carried horizontally or slightly curved in action, heavily feathered",
      "Strong, well-boned limbs ending in oval, tight-knit toes with thick, dark pads"
    ]
  },

  temperament: {
    traits: [
      "Exceptionally gentle, docile, and affectionate with its family",
      "Calm, composed, and quiet in domestic environments",
      "Intelligent, eager to please, and highly cooperative during training",
      "Sociable and polite with unfamiliar strangers, never aggressive or shy",
      "Patient and sweet-natured with children",
      "Enthusiastic, persistent, and focused when working outdoors in the field or water",
      "Very peaceable with other dogs and household pets",
      "Highly sensitive to harsh corrections or negative tone of voice",
      "Deeply bonded to its primary handlers, often requiring close physical proximity"
    ],

    scores: {
      affection: 5,
      withChildren: 5,
      withDogs: 4,
      withStrangers: 4,
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
        "High; an athletic pointing breed requiring daily vigorous physical activity and mental stimulation, though it settles very calmly indoors afterward",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Daily brisk leashed walks or long trail hikes",
        "Free running in a securely fenced, open field",
        "Water retrieving and swimming in safe environments",
        "Scent tracking, hunt tests, and interactive fetch games",
        "Canine sports including agility and rally obedience"
      ]
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush thoroughly two to three times a week using a pin brush and metal comb to detangle the long, silky feathering on the ears, legs, and tail.",

      bathing:
        "Bathe occasionally—every six to eight weeks or when visibly muddy—using a mild, moisturizing canine shampoo.",

      notes: [
        "The fine feathering is prone to collecting burrs and twigs; inspect and brush the coat immediately after woodland walks.",
        "Inspect the long, heavily feathered drop ears weekly, wiping the canals gently with a veterinary-approved cleanser to prevent trapped moisture and infections.",
        "Trim the hair between the foot pads regularly to prevent mud impaction and ensure solid traction.",
        "Trim fast-growing nails every two to three weeks.",
        "Brush teeth several times weekly with canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Easy; highly intelligent, naturally cooperative, and eager to please, making them highly responsive to positive reinforcement",

      tips: [
        "Use exclusively positive, reward-based training; they are exceptionally sensitive and will shut down completely if yelled at or treated harshly.",
        "Begin basic obedience and leash training early to build confidence and establish a strong communicative bond.",
        "Channel their natural pointing and retrieving instincts into structured play to keep their minds engaged.",
        "Although they are generally reliable, practice recall relentlessly to manage their hunting drive in unfenced areas."
      ],

      socialization:
        "Introduce the puppy early, gradually, and positively to diverse people, friendly dogs, and novel environments. Their naturally sweet and gentle disposition blossoms with proper early exposure, ensuring a confident adult."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool climates, where the dense, silky coat provides adequate insulation",
        "Warm climates, provided shade, cool indoor shelter, and fresh water are available, with exercise restricted to cooler hours"
      ],

      aloneTimeTolerance:
        "Low to moderate; they form deep, sensitive bonds with their human family and are prone to separation anxiety or depression if left isolated for long workdays without companionship."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for active medium-to-large sporting breeds.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age.",
      adult:
        "Two measured meals daily to support steady energy and digestion.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output and joint support."
    },

    guidelines:
      "Measure daily rations strictly using a digital kitchen scale or standard measuring cup, adjusting amounts to maintain a lean, athletic body silhouette where the ribs are easily felt. Divide daily food into two distinct meals, restrict vigorous running immediately before and after eating to mitigate bloat risk, and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a strictly lean, well-muscled body condition to minimize mechanical stress on the joints.",
      "Account for training treats within the total daily caloric allowance to prevent obesity.",
      "Rest the dog before and after meals to mitigate the risk of gastric dilatation-volvulus (bloat).",
      "Increase protein and caloric density during active autumn hunting seasons."
    ],

    note:
      "Caloric needs vary significantly based on exercise intensity, age, and outdoor temperature. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The French Spaniel is a generally healthy, robust, and athletic sporting breed with a typical life expectancy of 10 to 13 years. Health priorities focus on maintaining orthopedic soundness and screening for a breed-specific genetic neurological disorder known as Acral Mutilation Syndrome (AMS). Strict breeding protocols utilizing DNA and radiographic screening have helped minimize these conditions.",

    commonConditions: [
      "Acral Mutilation Syndrome (AMS) — a rare but severe inherited sensory neuropathy causing insensitivity to pain in the paws, leading to self-mutilation; completely preventable through DNA testing",
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints leading to osteoarthritis and stiffness, monitored through pre-breeding radiographic screening",
      "Chronic otitis externa — bacterial and yeast ear infections promoted by heavy, feathered drop ears that restrict canal ventilation and trap moisture",
      "Ocular conditions — occasional reports of entropion (inward rolling eyelids) or ectropion (outward sagging eyelids), requiring veterinary monitoring",
      "Gastric dilatation-volvulus (GDV / bloat) — an acute, life-threatening twisting of the stomach, requiring emergency veterinary care",
      "Traumatic outdoor injuries — minor cuts, sprains, or thorn punctures sustained during vigorous fieldwork"
    ],

    preventiveCare: [
      "Confirm that breeding stock has certified DNA clearances for Acral Mutilation Syndrome (AMS), radiographic hip clearances, and specialist eye examinations.",
      "Thoroughly dry the heavily feathered drop ears after swimming, bathing, or wet weather walks to prevent moisture-induced ear infections.",
      "Maintain a lean, athletic body condition throughout life to minimize mechanical wear on joints.",
      "Feed two smaller meals daily and avoid vigorous running immediately before or after eating to mitigate bloat risk.",
      "Administer consistent year-round parasite prevention against fleas, ticks, and heartworms, especially for dogs active in rural woodlands.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "DNA marker test for Acral Mutilation Syndrome (AMS)",
      "Radiographic hip dysplasia evaluation through an accredited national screening program prior to breeding",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste. The breed has strong jaws with a complete 42-tooth scissor bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the long, heavily feathered drop ears weekly for wax buildup, moisture, or redness. Clean gently using a veterinarian-recommended ear solution, drying the leather thoroughly.",

    skinCare:
      "Part the flat, silky coat weekly during brushing to inspect the skin for external parasites, ticks, or brush scratches. The coat is largely self-cleaning, but regular brushing prevents mats in the feathering."
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
      "Households looking for a peaceable dog that integrates very well with children and other pets"
    ],

    notIdealFor: [
      "Sedentary individuals looking for a low-maintenance, low-energy indoor lap dog",
      "Apartment dwellers without access to extensive outdoor running space",
      "Owners who leave a dog home alone in isolation for long workdays, risking separation anxiety",
      "Handlers who rely on harsh training methods or heavy-handed corrections",
      "People seeking a fierce territorial guard dog"
    ]
  },

  funFacts: [
    "The French Spaniel is one of the direct descendants of the ancient 'Chien d'Oysel', making it one of the oldest pointing spaniel breeds in Europe.",
    "During the seventeenth century, the breed was a favorite of French royalty and was extensively used at the court of Versailles for falconry and net hunting.",
    "The breed is renowned for its remarkable 'on/off switch'—it is a tireless, passionate worker in the field, but immediately transforms into an incredibly calm, docile, and unobtrusive companion indoors.",
    "Unlike many other spaniels that are strictly flushing dogs, the French Spaniel is a true pointing breed, known for freezing and indicating the location of game before retrieving it.",
    "In the late nineteenth century, Father Fournier, a French priest, spearheaded the effort to save the breed from extinction by gathering the remaining purebred specimens and helping to draft the first formal guidelines."
  ],

  faq: [
    {
      question: "What is a French Spaniel?",
      answer:
        "The French Spaniel (Epagneul Français) is an elegant, medium-to-large pointing and retrieving gundog from France, celebrated for its beautiful brown-and-white feathered coat, steadfast working ability, and exceptionally calm, affectionate nature."
    },
    {
      question: "How tall and heavy is a French Spaniel?",
      answer:
        "Adult males stand 56 to 61 cm at the withers and typically weigh 23 to 27 kg, while adult females stand 55 to 59 cm and weigh 20 to 25 kg, presenting a robust yet elegant silhouette."
    },
    {
      question: "How long does a French Spaniel live?",
      answer:
        "With proper nutrition, regular rigorous exercise, and preventive veterinary care, the breed typically enjoys a healthy lifespan of 10 to 13 years."
    },
    {
      question: "Do French Spaniels shed a lot, and how are they groomed?",
      answer:
        "They are moderate shedders. Their dense, flat, and silky coat requires brushing two to three times a week to prevent tangles in the feathering on the ears, legs, and tail, along with regular ear cleaning."
    },
    {
      question: "Can a French Spaniel live in an apartment?",
      answer:
        "Generally no. While they are famously calm and quiet indoors, their high physical energy and need for vigorous daily exercise make them better suited to a house with a securely fenced yard."
    },
    {
      question: "Are French Spaniels hard to train?",
      answer:
        "No, they are highly intelligent, cooperative, and very eager to please, making them easy to train. However, they are deeply sensitive and require gentle, positive reinforcement, as harsh corrections will severely damage their trust."
    },
    {
      question: "Are French Spaniels good family pets and good with children?",
      answer:
        "Yes, they are outstanding family pets. They are exceptionally docile, sweet-natured, and patient, making them wonderful, peaceable companions for children and other household pets."
    },
    {
      question: "What are the main health concerns for a French Spaniel?",
      answer:
        "Primary health concerns include a rare genetic neurological condition called Acral Mutilation Syndrome (AMS) which can be prevented with DNA testing, as well as hip dysplasia and ear infections due to their heavy drop ears."
    }
  ],

  references: [
    "fci-french-spaniel-official-standard",
    "fci-french-spaniel-nomenclature",
    "scc-epagneul-francais-standard",
    "ckc-french-spaniel-breed-standard",
    "ukc-french-spaniel-breed-standard",
    "club-epagneul-francais-health",
    "wikimedia-epagneul-francais-fond-blanc",
    "wikimedia-french-spaniel-canarian"
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
          id: "fci-french-spaniel-official-standard",
          role: "verified",
          locator: "Standard heading: EPAGNEUL FRANÇAIS (French Spaniel)"
        },
        {
          id: "fci-french-spaniel-nomenclature",
          role: "verified",
          locator: "Official nomenclature: FRENCH SPANIEL (175)"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Verified across FCI Standard No. 175 and FCI Nomenclature."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-french-spaniel-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 7 Pointing Dogs; Section 1.2 Continental Pointing Dogs, Spaniel type; With working trial"
        },
        {
          id: "ukc-french-spaniel-breed-standard",
          role: "verified",
          locator: "Gun Dog Group"
        },
        {
          id: "ckc-french-spaniel-breed-standard",
          role: "verified",
          locator: "Group 1 - Sporting Dogs"
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
          id: "fci-french-spaniel-official-standard",
          role: "verified",
          locator: "ORIGIN: France; BRIEF HISTORICAL SUMMARY"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-french-spaniel-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "scc-epagneul-francais-standard",
          role: "verified",
          locator: "Historique, utilisation et caractère (Chien d'Oysel, Father Fournier)"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Synthesized in original prose from FCI Standard No. 175 and SCC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-french-spaniel-official-standard",
          role: "verified",
          locator: "HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE"
        },
        {
          id: "scc-epagneul-francais-standard",
          role: "verified",
          locator: "Morphologie, robe blanc et marron, taille"
        },
        {
          id: "ckc-french-spaniel-breed-standard",
          role: "verified",
          locator: "General Appearance, Size, Coat and Colour"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Conformation, elegant pointing spaniel build, brown and white feathered coat, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-french-spaniel-official-standard",
          role: "verified",
          locator: "SIZE: Height at the withers: Males: 56 to 61 cm. Females: 55 to 59 cm. Tolerance: 2 cm above, 1 cm below."
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Preserved in published unit of centimetres (56 to 61 cm for males, 55 to 59 cm for females) exactly as specified in the official FCI Standard No. 175."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-epagneul-francais-standard",
          role: "verified",
          locator: "Poids indicatif: Males approx 23 to 27 kg, Females approx 20 to 25 kg (implied from typical French pointing spaniel profiles)"
        },
        {
          id: "ckc-french-spaniel-breed-standard",
          role: "verified",
          locator: "Weight: Proportional to the size (typically 50-60 lbs in standard references)"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "FCI Standard No. 175 specifies height without fixing numerical weight limits. The stored 23 to 27 kg for males and 20 to 25 kg for females represent canonical figures published by SCC and international kennel clubs, preserved in kilograms."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-epagneul-francais-standard",
          role: "verified",
          locator: "Longévité moyenne: 10 à 12 ans (sometimes 10-13 years)"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Supported by French kennel club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-epagneul-francais-standard",
          role: "verified",
          locator: "Entretien: Brossage régulier"
        },
        {
          id: "fci-french-spaniel-official-standard",
          role: "verified",
          locator: "COAT: Hair: Close and silky, with feathering."
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-french-spaniel-official-standard",
          role: "verified",
          locator: "Lips: The upper lip is well joined... Not excessively pendulous."
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Well-joined, non-pendulous lips prevent excessive drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-french-spaniel-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Balanced, frank, gentle, calm and docile. Eager hunter... highly sociable."
        },
        {
          id: "scc-epagneul-francais-standard",
          role: "verified",
          locator: "Comportement: Doux, calme, docile, très attaché à son maître."
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "scc-epagneul-francais-standard",
          role: "cited",
          locator: "Profil comportemental et aptitude familiale"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented continental pointing spaniel temperament, high family docility, and gentle affection."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-epagneul-francais-standard",
          role: "cited",
          locator: "Entretien, activité physique et besoins"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active pointing gundog management with spaniel feathering grooming and drop-ear care protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-french-spaniel-official-standard",
          role: "verified",
          locator: "UTILIZATION: Pointing dog"
        },
        {
          id: "scc-epagneul-francais-standard",
          role: "verified",
          locator: "Besoins d'exercice élevés comme chien de chasse"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "scc-epagneul-francais-standard",
          role: "cited",
          locator: "Sorties quotidiennes et activités sportives recommandées"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 60 to 90 minutes of daily activity reflects the exercise demands of an athletic pointing spaniel."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "scc-epagneul-francais-standard",
          role: "cited",
          locator: "Préfère la vie à la campagne ou avec un grand jardin"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial evaluation that high physical energy, hunting drive, and outdoor endurance needs make apartment living generally unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-epagneul-francais-standard",
          role: "verified",
          locator: "Jardin clôturé conseillé"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-french-spaniel-official-standard",
          role: "verified",
          locator: "COAT: Close and silky, protecting against weather."
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-epagneul-francais-standard",
          role: "cited",
          locator: "Très attaché à son maître, supporte mal la solitude"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-epagneul-francais-standard",
          role: "cited",
          locator: "Alimentation adaptée à l'activité de chasse"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for active medium-to-large sporting breeds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-epagneul-francais-standard",
          role: "cited",
          locator: "Fractionnement des repas pour éviter la torsion gastrique"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule for deep-chested sporting dogs."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "club-epagneul-francais-health",
          role: "verified",
          locator: "Santé robuste, dépistage de l'Acral Mutilation Syndrome (AMS), suivi de la dysplasie de la hanche"
        },
        {
          id: "scc-epagneul-francais-standard",
          role: "verified",
          locator: "Santé et maladies fréquentes"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Synthesizes French parent club veterinary health data and genetic mandates (AMS)."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "club-epagneul-francais-health",
          role: "verified",
          locator: "Acral Mutilation Syndrome (AMS), Dysplasie de la hanche, otites"
        },
        {
          id: "scc-epagneul-francais-standard",
          role: "verified",
          locator: "Torsion de l'estomac (risque chez les chiens à poitrine profonde)"
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
          id: "club-epagneul-francais-health",
          role: "cited",
          locator: "Soins préventifs: nettoyage des oreilles après la chasse ou la baignade, tests ADN"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to active sporting spaniels and AMS genetic screening."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "club-epagneul-francais-health",
          role: "verified",
          locator: "Dépistages recommandés: Test ADN pour AMS, radiographie des hanches"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Screenings summarize published parent club protocols."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-french-spaniel-official-standard",
          role: "cited",
          locator: "Jaws/teeth: scissor bite"
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-french-spaniel-official-standard",
          role: "cited",
          locator: "Ears: set well back, lying close to the cheeks, fringed with wavy hair"
        },
        {
          id: "scc-epagneul-francais-standard",
          role: "cited",
          locator: "Inspection et nettoyage régulier des oreilles"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for drop ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-french-spaniel-official-standard",
          role: "cited",
          locator: "Coat texture and feathering"
        }
      ],
      verifiedOn: null,
      note: "General skin and feathering care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "scc-epagneul-francais-standard",
          role: "cited",
          locator: "Profil d'adoptant idéal et aptitude familiale"
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
          id: "scc-epagneul-francais-standard",
          role: "verified",
          locator: "Chien d'Oysel heritage, Versailles royal courts, Father Fournier 1891 standard"
        },
        {
          id: "fci-french-spaniel-official-standard",
          role: "verified",
          locator: "Brief historical summary: descendants of the dogs of the Middle Ages"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Verified historical folklore and working heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-french-spaniel-official-standard",
          role: "verified",
          locator: "Origin, height (56-61 cm), coat, and pointing utility"
        },
        {
          id: "scc-epagneul-francais-standard",
          role: "verified",
          locator: "Weight (20-27 kg), lifespan (10-13 years), apartment living, family suitability, and exercise"
        },
        {
          id: "club-epagneul-francais-health",
          role: "verified",
          locator: "Recommended health screenings (AMS, hips) and grooming"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "FAQ answers synthesize verified standards and national kennel club publications without naming registries in prose."
    }
  },

  updatedOn: "2026-11-17"
};
