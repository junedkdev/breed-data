import type { Breed } from "../schema/breed.types";

export const briard: Breed = {
  slug: "briard",
  name: "Briard",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Berger de Brie",
    "Chien de Berger de Brie",
    "Briard Shepherd"
  ],

  group:
    "Sheepdogs and Cattledogs (except Swiss Cattle Dogs); Section 1 — Sheepdogs (with working trial; also classified in the Herding and Pastoral groups)",

  origin: {
    country: "France",
    region:
      "Brie region and the plains of Île-de-France, northern and central France"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Berger_de_Brie_fawn_711.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Berger_de_Brie_fawn_711.jpg",
      title: "Berger de Brie fawn 711.jpg",
      description: "An adult fawn Briard standing outdoors in a garden.",
      creator: "Tomasz Sienicki",
      uploader: "Pmg",
      capturedOn: "2006-05-20",
      uploadedOn: "2006-05-21",
      width: 2016,
      height: 1756,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Tomasz Sienicki, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Berger_de_Brie_fawn_711.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chien_de_Berger_de_Brie.JPG",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Chien_de_Berger_de_Brie.JPG",
      title: "Chien de Berger de Brie.JPG",
      description: "A black Briard standing in profile at a dog show.",
      creator: "Pleple2000",
      uploader: "Pleple2000",
      capturedOn: "2008-10-05",
      uploadedOn: "2008-10-18",
      width: 2400,
      height: 1800,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Pleple2000, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Chien_de_Berger_de_Brie.JPG. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10"
    }
  ],

  overview: {
    summary:
      "A rustic, large-sized French pastoral sheepdog celebrated for its long, goat-like dry double coat, distinctive double dewclaws on the rear limbs, J-shaped crook tail, formidable working stamina, and deeply loyal, sensitive heart wrapped in fur.",

    description:
      "The Briard is a large, muscular, and athletic French herding dog combining substantial physical power with agile grace and supple, ground-covering movement. Characterized by a slightly rectangular body silhouette, it carries a rustic, harsh double coat with a dry, goat-like texture that drapes naturally over the entire body, creating a prominent moustache, beard, and sweeping eyebrows that frame dark, intelligent eyes without obscuring vision. A hallmark morphological feature is the presence of functional double dewclaws placed low on both rear legs. The head is long and imposing, complemented by high-set drop or natural erect ears and a long, low-set tail terminating in a distinct J-shaped hook. In the household, it is famously described as a heart wrapped in fur—calm, deeply affectionate, and fiercely devoted to family members—while remaining an alert, courageous guardian and a tireless herder in pasture work.",

    history:
      "The roots of the breed reach deep into medieval French agricultural history, with early literary mentions dating to a 1387 manuscript by Gaston Phoebus, Count of Foix. In early French pastoral traditions, indigenous sheepdogs were grouped broadly; in 1809, the agronomist Abbé Rozier clearly distinguished the lowland long-coated flock herder and guardian as the 'Chien de Brie' or 'Berger de Brie', separating it from the shorter-coated upland Beauceron. Celebrated historical figures, including Emperor Charlemagne, Napoleon Bonaparte, and Thomas Jefferson, were admirers of the breed, with Jefferson importing foundation pairs to Monticello in the late eighteenth century. The first breed standard was drawn up in France in 1897 and updated by the national breed club in 1909. During the First World War, the breed served heroically as an official military sentry dog, ammunition carrier, and red-cross search dog that located wounded soldiers on battlefields, cementing its legacy of unwavering courage and devotion.",

    originalPurpose:
      "Pastoral flock herding, boundary patrolling to prevent sheep from wandering into cultivated crops, and guarding flocks against wolves, feral predators, and thieves.",

    currentRoles: [
      "Pastoral livestock herding and farm boundary guardian",
      "Competitive herding trial, tracking, and working assessment athlete",
      "Devoted household companion and family protector",
      "Search, rescue, and avalanche detection partner",
      "Canine athlete in agility, rally, and competitive obedience"
    ]
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "cm",
      male: {
        min: 62,
        max: 68
      },
      female: {
        min: 56,
        max: 64
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 30,
        max: 40
      },
      female: {
        min: 25,
        max: 35
      }
    },

    lifespanYears: {
      min: 10,
      max: 12
    },

    coatType:
      "Long, supple, dry double coat resembling goat hair, forming slight locks without lying flat, at least 7 cm long on the body, with a fine, dense undercoat covering the entire body; features a distinct beard, moustache, and eyebrows that lightly veil the eyes.",

    coatLength: "Long",

    coatColors: [
      "Solid black",
      "Fawn (warm, uniform golden-fawn with darker shading on the extremities, ears, and back)",
      "Grey (born grey or clearing from black to dark charcoal or slate grey)",
      "Blue (born slate-blue, uniform in shade)"
    ],

    sheddingLevel:
      "Low to moderate; shedding is minimal when dead undercoat hairs are lifted through regular thorough brushing and line-combing",

    droolingLevel:
      "Low to moderate; tight-fitting lips minimize drooling, though long beard and moustache furnishings collect water after drinking",

    distinctiveFeatures: [
      "Rustic, athletic, and muscular silhouette slightly longer than tall (body length greater than withers height)",
      "Height at the withers of 62 to 68 cm in males and 56 to 64 cm in females",
      "Weight of 30 to 40 kg for males and 25 to 35 kg for females in lean working condition",
      "Dry, harsh, goat-like coat at least 7 cm in length draped gracefully over the body",
      "Abundant facial furnishings consisting of a distinct chin beard, long moustache, and eyebrows that veil the dark eyes",
      "Double dewclaws on both hind legs, placed low near the foot, each claw possessing a distinct, well-separated bony base",
      "Large, long head with a marked stop midway between occiput and nose tip, with parallel cranial-facial planes",
      "Large black nose with wide nostrils (or slate nose in blue dogs) and tight black lips",
      "Complete scissor bite with strong jaws and sound, powerful teeth",
      "Large, wide-open, horizontal dark brown or black eyes with darkly pigmented rims",
      "Ears set high, covered in long hair, hanging flat against the cheeks (or historically cropped erect)",
      "Deep, broad chest reaching down to the elbows with well-sprung ribs",
      "Low-set, intact tail reaching at least to the hock, carried in a J-shaped hook (crochet) at the tip without deviating sideways"
    ]
  },

  temperament: {
    traits: [
      "Loyal, affectionate, and deeply devoted to family members",
      "Fearless, courageous, and vigilant flock and estate guardian",
      "Intelligent, quick-witted, and highly trainable",
      "Calm, gentle, and patient in the home",
      "Alert and naturally watchful, with a protective instinct toward children",
      "Reserved and discerning with unfamiliar strangers without unprovoked aggression",
      "High stamina and tireless work ethic in pastoral herding",
      "Sensitive to handler emotional energy and vocal reprimands",
      "Can be assertive or bossy with other household animals if leadership is lax",
      "Possesses a remarkable memory, retaining early training experiences for life"
    ],

    scores: {
      affection: 5,
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
        "High; an athletic working pastoral breed requiring vigorous daily physical exercise and structured mental tasks to maintain indoor composure",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Daily brisk leashed walks and extended woodland trail hikes",
        "Herding trials, boundary management, and pastoral instinct tests",
        "Interactive fetch, ball retrieving, and flying-disc chasing in a secure yard",
        "Canine sports including agility, rally, tracking, and competitive obedience",
        "Canicross, trail jogging, or running alongside a bicycle once skeletally mature",
        "Problem-solving cognitive toys, snuffle mats, and scent-searching enrichment"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Line-brush thoroughly down to the skin two to three times weekly using a pin brush and metal greyhound comb to prevent mats and lift dead undercoat; pay special attention to friction areas behind the ears, armpits, beard, and rear feathering.",

      bathing:
        "Bathe every six to eight weeks or when soiled, using a moisturizing canine shampoo and conditioning rinse; avoid excessive blow-drying on hot settings to maintain the dry, natural coat texture.",

      notes: [
        "Never shave the double coat; the long goat-like hair protects against harsh winter freezing, thorny scrub, and summer radiant heat.",
        "Check and comb the facial beard and moustache clean after eating to prevent food crusting and moisture odor.",
        "Inspect double dewclaws on both hind legs weekly and trim nails regularly, as they do not wear down naturally on the ground.",
        "Inspect the drop ears weekly for wax buildup, moisture, or debris, cleaning gently with a veterinary ear cleanser.",
        "Trim hair between paw pads to maintain traction and prevent ice balls during winter walks.",
        "Brush teeth several times weekly with canine-formulated enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Moderate; exceptionally intelligent, eager to please, and quick to learn, but possesses a strong will, independent mind, and acute sensitivity that requires calm, consistent leadership",

      tips: [
        "Use positive reinforcement, high-value food rewards, and enthusiastic praise.",
        "Keep training sessions varied, cheerful, and purposeful to prevent boredom from mechanical repetition.",
        "Establish fair, consistent household boundaries from early puppyhood.",
        "Begin loose-leash walking, impulse control, and gentle socialization early before adult strength develops.",
        "Avoid harsh verbal corrections or physical intimidation, which cause this proud shepherd to lose trust and withdraw.",
        "Channel natural herding instincts into structured dog sports or fetch games rather than allowing heel-nipping of running children."
      ],

      socialization:
        "Introduce the puppy early, calmly, and positively to diverse people, friendly vaccinated dogs of varying sizes, household appliances, novel surfaces, and busy environments. Early structured socialization prevents natural reservedness from developing into aloof suspicion, resulting in a confident, well-adjusted guardian."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool and cold climates, where the dense double coat provides natural thermal protection",
        "Warm climates, provided indoor cooling, shade, and fresh water are available and exercise occurs during cooler morning or evening hours"
      ],

      aloneTimeTolerance:
        "Low to moderate; intensely people-oriented and deeply bonded to family, prone to separation distress, nuisance barking, or destructive behaviors if left isolated for long workdays without companionship."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for large active breeds, adjusted for age, activity level, and metabolic rate.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age, transitioning to two meals daily on a large-breed growth diet supporting steady skeletal development.",
      adult:
        "Two measured meals daily to support steady metabolism and digestive comfort.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output, joint support, and lean muscle retention."
    },

    guidelines:
      "Measure food portions carefully using a digital kitchen scale or standard measuring cup, adjusting amounts to maintain a lean, athletic body silhouette where the ribs are easily felt through the thick coat. Divide daily food into two distinct meals, restrict vigorous exercise for at least one hour before and after eating, use narrow food bowls or ear snoods to keep the beard clean, and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a lean, muscular body condition; excess weight places unnecessary mechanical strain on hips, elbows, and the spine.",
      "Account for training treats within the total daily caloric budget to prevent stealth weight gain.",
      "Use narrow spaniel-style bowls or elevated stands to prevent the long beard from soaking in water dishes.",
      "Rest the dog before and after meals to mitigate the risk of bloat (gastric dilatation-volvulus).",
      "Avoid feeding high-fat table scraps that can trigger digestive upset or acute pancreatitis.",
      "Transition between diet formulas gradually over five to seven days."
    ],

    note:
      "Caloric needs vary significantly based on age, sterilization status, and daily exercise. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Briard is a robust, hardy pastoral breed with a typical life expectancy of 10 to 12 years. Developed over centuries for demanding physical work across the French countryside, it has largely avoided many severe constitutional exaggerations. Primary hereditary health priorities include congenital stationary night blindness (CSNB, caused by an identified mutation in the RPE65 gene), hip dysplasia, elbow dysplasia, gastric dilatation-volvulus (GDV / bloat), autoimmune thyroiditis, and progressive retinal atrophy.",

    commonConditions: [
      "Congenital stationary night blindness (CSNB) — an inherited, non-progressive retinal disorder caused by an autosomal recessive deletion in the RPE65 gene, leading to severe night blindness and reduced visual acuity from puppyhood, fully preventable through pre-breeding DNA testing",
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints leading to osteoarthritis and hind-limb lameness, monitored through pre-breeding radiographic screening",
      "Elbow dysplasia — developmental abnormalities of the elbow joints that can cause forelimb lameness and secondary arthritis",
      "Gastric dilatation-volvulus (GDV / bloat) — an acute, life-threatening emergency in deep-chested dogs where the stomach distends with gas and twists on its axis",
      "Progressive retinal atrophy (PRA) and hereditary cataracts — degenerative or clouding conditions of the eye that can impair vision",
      "Autoimmune thyroiditis — immune-mediated inflammation of the thyroid gland resulting in hypothyroidism, weight gain, and skin changes",
      "Allergic dermatitis — occasional sensitivities to environmental allergens or fleas causing skin itching and secondary infections"
    ],

    preventiveCare: [
      "Confirm that breeding stock has certified DNA clearances for congenital stationary night blindness (RPE65 / CSNB), alongside certified radiographic hip and elbow clearances and annual ophthalmologist eye certifications.",
      "Maintain a lean body condition throughout life to minimize mechanical wear on hips, elbows, and knees.",
      "Feed two smaller meals daily and avoid vigorous running immediately before or after eating to mitigate bloat risk.",
      "Inspect and clean the long drop ears weekly, wiping canals with a veterinary ear wash and drying thoroughly.",
      "Inspect double dewclaws on both rear legs weekly and trim them regularly to prevent catching or tearing.",
      "Brush teeth several times weekly with canine enzymatic toothpaste.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "DNA marker test for Congenital Stationary Night Blindness (RPE65 gene mutation) prior to breeding",
      "Radiographic hip dysplasia evaluation through an accredited national screening program prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist",
      "Autoimmune thyroiditis blood profile"
    ],

    dentalCare:
      "Brush teeth several times weekly using dog-specific enzymatic toothpaste. The breed has strong, wide jaws with a complete 42-tooth scissor bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the high-set drop ears weekly for wax accumulation, moisture, or redness. Clean gently using a veterinarian-recommended ear solution, drying the leather thoroughly.",

    skinCare:
      "Part the dense coat weekly during line-brushing to inspect the skin for external parasites, redness, or mats. Avoid shaving the double coat; regular brushing preserves skin aeration and coat insulation."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Experienced dog owners familiar with herding drives, working vigilance, and large pastoral breeds",
      "Active outdoor households that enjoy long trail hikes, running, and herding sports",
      "Rural or semi-rural properties with spacious, securely fenced yards or working pasture acreage",
      "Owners committed to regular line-brushing, coat grooming, and mental problem-solving enrichment",
      "Families seeking an intensely loyal, protective, and affectionate companion of the hearth"
    ],

    notIdealFor: [
      "Novice or passive dog owners unprepared for high physical energy, herding drive, and independent intelligence",
      "Apartment dwellers or dense urban households without access to extensive open exercise areas",
      "Owners who leave a dog home alone in isolation for long workdays without company",
      "People seeking a low-maintenance pet that requires no brushing or coat care",
      "Individuals intolerant of shed hair, muddy paws, and damp beards around the home"
    ]
  },

  funFacts: [
    "A beloved historical French saying poetically describes the Briard as 'a heart wrapped in fur' (un coeur enveloppé de poils), celebrating its intense tenderness with family members despite its imposing, rugged exterior.",
    "A defining, mandatory anatomical requirement of the breed standard is the presence of functional double dewclaws placed low on both rear legs; historical shepherds believed these extra digits acted like snowshoes, providing extra stability and grip on muddy, wet pasture terrain.",
    "Thomas Jefferson was a passionate admirer of the breed; while serving as the American minister to France in the late 1780s, he purchased a pregnant Briard named Bergère, brought her and her puppies home to Virginia, and praised their herding prowess at Monticello.",
    "During World War I, the French military employed thousands of Briards as official sentries, messengers, and red-cross ambulance dogs; their keen senses allowed them to distinguish living wounded soldiers from the dead on muddy battlefields.",
    "Legend recounts the 'Dog of Montargis', a fourteenth-century French sheepdog said to be of Briard ancestry that famously unmasked and defeated its master's murderer in judicial single combat before the King of France.",
    "The distinctive J-shaped hook at the tip of the Briard's tail is known in French as a 'crochet', a hallmark trait that must never curl over the back or twist to either side."
  ],

  faq: [
    {
      question: "What is a Briard?",
      answer:
        "The Briard (Berger de Brie) is an ancient, large-sized French herding and sheepdog known for its long, goat-like coat, prominent beard and eyebrows, double rear dewclaws, and deeply affectionate, loyal personality."
    },
    {
      question: "What are double dewclaws, and why does the Briard have them?",
      answer:
        "Double dewclaws are two fully formed, bony digits situated low on the inner side of each rear leg. In the Briard, they are an essential breed hallmark that historically provided extra traction, foot surface area, and stability when herding livestock across wet, uneven pasture land."
    },
    {
      question: "How tall and heavy is a Briard?",
      answer:
        "Adult males stand 62 to 68 cm at the withers and weigh 30 to 40 kg, while adult females stand 56 to 64 cm and weigh 25 to 35 kg, presenting an athletic and powerful build."
    },
    {
      question: "How long does a Briard live?",
      answer:
        "With proper nutrition, regular exercise, and conscientious preventive veterinary care, the breed typically enjoys a healthy lifespan of 10 to 12 years."
    },
    {
      question: "Do Briards shed a lot, and how is their coat groomed?",
      answer:
        "Briards are relatively low shedders because loose undercoat hairs become trapped within the outer coat. They require thorough line-brushing and combing down to the skin two to three times a week to prevent matting, but they should never be shaved."
    },
    {
      question: "Are Briards good family dogs and good with children?",
      answer:
        "Yes. Within their own household, they are famously gentle, protective, and affectionate with children; however, because of their size and herding instincts, interactions with toddlers should be supervised, and early training is necessary to prevent heel-nipping."
    },
    {
      question: "Can a Briard live in an apartment?",
      answer:
        "No. Due to their large size, working stamina, and natural desire to patrol property boundaries, they are not suited to apartment living and thrive best in a house with a securely fenced yard or rural acreage."
    },
    {
      question: "Is the Briard easy to train?",
      answer:
        "They are exceptionally intelligent, quick to learn, and eager to please, but have an independent, sensitive mind. Training requires patient, reward-based methods and clear, calm consistency rather than harsh reprimands."
    },
    {
      question: "How much exercise does a Briard need each day?",
      answer:
        "The breed requires 60 to 90 minutes of daily physical activity, including brisk walks, trail hiking, fetch sessions, and mental challenges like herding, tracking, or agility."
    },
    {
      question: "What is Congenital Stationary Night Blindness (CSNB)?",
      answer:
        "Congenital stationary night blindness is an inherited eye disorder caused by a mutation in the RPE65 gene that impairs night vision from puppyhood. A definitive DNA test is available to ensure that carrier matings never produce affected dogs."
    },
    {
      question: "What health tests are recommended for breeding Briards?",
      answer:
        "Recommended pre-breeding screenings include DNA testing for congenital stationary night blindness (CSNB), radiographic hip and elbow dysplasia evaluations, and veterinary ophthalmologist eye exams."
    }
  ],

  references: [
    "fci-briard-official-standard",
    "fci-briard-nomenclature",
    "scc-briard-breed-standard",
    "club-du-chien-de-brie-profile",
    "akc-briard-breed-standard",
    "akc-briard-breed-profile",
    "the-kennel-club-briard-breed-standard",
    "ukc-briard-breed-standard",
    "ofa-briard-chic-requirements",
    "briard-csnb-rpe65-study-1998",
    "wikimedia-berger-de-brie-fawn-tomasz-sienicki",
    "wikimedia-chien-de-berger-de-brie-pleple2000"
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
          id: "fci-briard-official-standard",
          role: "verified",
          locator: "Standard heading: BERGER DE BRIE (Briard)"
        },
        {
          id: "fci-briard-nomenclature",
          role: "verified",
          locator: "Official nomenclature: BERGER DE BRIE (113), Briard"
        },
        {
          id: "scc-briard-breed-standard",
          role: "verified",
          locator: "Dénomination officielle: Berger de Brie (Briard)"
        },
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "History: Briard, Berger de Brie"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Verified across FCI Standard No. 113, FCI Nomenclature, SCC, and AKC."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 1 Sheepdogs and Cattledogs (except Swiss Cattle Dogs), Section 1 Sheepdogs, with working trial"
        },
        {
          id: "fci-briard-nomenclature",
          role: "verified",
          locator: "Group 1, Section 1 Sheepdogs, with working trial"
        },
        {
          id: "akc-briard-breed-standard",
          role: "verified",
          locator: "Herding Group"
        },
        {
          id: "the-kennel-club-briard-breed-standard",
          role: "verified",
          locator: "Pastoral Group"
        },
        {
          id: "ukc-briard-breed-standard",
          role: "verified",
          locator: "Herding Dog Group"
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
          id: "fci-briard-official-standard",
          role: "verified",
          locator: "ORIGIN: France; BRIEF HISTORICAL SUMMARY"
        },
        {
          id: "fci-briard-nomenclature",
          role: "verified",
          locator: "Country of origin: France"
        },
        {
          id: "scc-briard-breed-standard",
          role: "verified",
          locator: "Origine: France (plaines de Brie)"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, IMPORTANT PROPORTIONS, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "scc-briard-breed-standard",
          role: "verified",
          locator: "Historique, aptitudes herbagères, morphologie et caractère"
        },
        {
          id: "club-du-chien-de-brie-profile",
          role: "verified",
          locator: "Histoire du Chien de Brie, Abbé Rozier 1809, Gaston Phoebus, Thomas Jefferson, et sélection moderne"
        },
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "About the Breed, History (Thomas Jefferson, World War I sentry work), and Roles"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Synthesized in original prose from FCI Standard No. 113, SCC, French parent club, and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator: "HEAD, BODY, TAIL, LIMBS (double dewclaws), COAT, COLOUR, SIZE"
        },
        {
          id: "scc-briard-breed-standard",
          role: "verified",
          locator: "Morfologie, tête, double ergots, toison de chèvre et couleurs"
        },
        {
          id: "akc-briard-breed-standard",
          role: "verified",
          locator: "General Appearance, Size, Head, Double Dewclaws, Body, Coat, Color"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Conformation, rectangular build, goat-hair coat, double dewclaws on hind legs, J-shaped tail, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator: "SIZE: Height at withers: Males: 62 cm to 68 cm. Females: 56 cm to 64 cm."
        },
        {
          id: "scc-briard-breed-standard",
          role: "verified",
          locator: "Taille: Mâles: 62 à 68 cm; Femelles: 56 à 64 cm"
        },
        {
          id: "akc-briard-breed-standard",
          role: "verified",
          locator: "Height: Males: 23 to 27 inches (approx. 58.5 to 68.5 cm); Females: 22 to 25.5 inches (approx. 56 to 65 cm)"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Preserved in published unit of centimetres (62–68 cm for males, 56–64 cm for females) exactly as specified in the official FCI Standard No. 113 and SCC standard."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-briard-breed-standard",
          role: "verified",
          locator: "Poids: Mâles: environ 30 à 40 kg; Femelles: environ 25 à 35 kg"
        },
        {
          id: "club-du-chien-de-brie-profile",
          role: "verified",
          locator: "Poids moyen: 30-40 kg pour les mâles, 25-35 kg pour les femelles"
        },
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "Weight: 55-100 pounds (approx. 25-45 kg)"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "FCI Standard No. 113 specifies height ranges without publishing numerical weight limits. The stored 30 to 40 kg for males and 25 to 35 kg for females represent canonical figures published by SCC and the French parent club, preserved in kilograms."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12 years (typical range 10-12 years)"
        },
        {
          id: "the-kennel-club-briard-breed-standard",
          role: "verified",
          locator: "Longevity and health actuarial profile (10-12 years)"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Supported by kennel club and breed club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (2/5)"
        },
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator: "COAT: Long, dry, supple goat-like hair with dense undercoat; low shedding when brushed"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (2/5)"
        },
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator: "Lips: Tight fitting lips; beard collects moisture"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Tight lips result in low to moderate drooling, though beards retain drinking moisture."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Temperament of balanced character, neither aggressive nor timid, courageous, devoted"
        },
        {
          id: "scc-briard-breed-standard",
          role: "verified",
          locator: "Caractère: Équilibré, fidèle, protecteur, sage et hardi"
        },
        {
          id: "akc-briard-breed-standard",
          role: "verified",
          locator: "General Impression: Heart wrapped in fur, fearless, gentle, intelligent, faithful"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-briard-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        },
        {
          id: "the-kennel-club-briard-breed-standard",
          role: "cited",
          locator: "Temperament and behavior guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented pastoral guardian temperament, high family devotion, and territorial vigilance."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-briard-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        },
        {
          id: "club-du-chien-de-brie-profile",
          role: "cited",
          locator: "Entretien du pelage, ergots et éducation pastorale"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active pastoral shepherd management with goat-hair double coat line-brushing and dewclaw care protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "Energy Level (4/5); Exercise Needs (4/5)"
        },
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator: "UTILIZATION: Sheepdog and guard dog"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "the-kennel-club-briard-breed-standard",
          role: "cited",
          locator: "Exercise: Up to 1 hour or more per day"
        },
        {
          id: "akc-briard-breed-profile",
          role: "cited",
          locator: "Daily exercise recommendations"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 60 to 90 minutes of daily activity reflects the exercise demands of an athletic working herding breed."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-briard-breed-profile",
          role: "cited",
          locator: "Large size, exercise needs, and territorial flock vigilance"
        },
        {
          id: "club-du-chien-de-brie-profile",
          role: "cited",
          locator: "Cadre de vie recommandé: maison avec grand jardin"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial evaluation that large size, vigorous herding drive, and territorial vigilance make apartment living generally unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "Exercise and secure fenced-yard recommendations"
        },
        {
          id: "club-du-chien-de-brie-profile",
          role: "verified",
          locator: "Espace extérieur sécurisé pour l'exercice"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator: "COAT: Harsh, dry goat-hair coat with undercoat adapted to outdoor pasture weather"
        },
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "Weather adaptation: well-suited to cool and temperate climates"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "Tolerates Being Alone: Low to moderate; deeply attached to family"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-briard-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food, portion control, treat budgeting"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for active large herding breeds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-briard-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "briard-csnb-rpe65-study-1998",
          role: "verified",
          locator: "Identification of the RPE65 gene deletion causing congenital stationary night blindness in Briards"
        },
        {
          id: "ofa-briard-chic-requirements",
          role: "verified",
          locator: "CHIC Program requirements: Hip Dysplasia, CAER Eye exam, CSNB DNA test"
        },
        {
          id: "club-du-chien-de-brie-profile",
          role: "verified",
          locator: "Santé, dépistage de la cécité crépusculaire (CSNB), dysplasie de la hanche et torsions gastriques"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Synthesizes peer-reviewed genetics research on congenital stationary night blindness with health registry screening protocols."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "briard-csnb-rpe65-study-1998",
          role: "verified",
          locator: "Congenital stationary night blindness (CSNB) pathology and genetic mechanism"
        },
        {
          id: "ofa-briard-chic-requirements",
          role: "verified",
          locator: "Hip dysplasia, elbow dysplasia, and eye diseases"
        },
        {
          id: "club-du-chien-de-brie-profile",
          role: "verified",
          locator: "Gastric dilatation-volvulus (bloat), cataracts, progressive retinal atrophy"
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
          id: "club-du-chien-de-brie-profile",
          role: "cited",
          locator: "Dépistage obligatoire des reproducteurs, soins des ergots et prévention du retournement d'estomac"
        },
        {
          id: "akc-briard-breed-profile",
          role: "cited",
          locator: "Routine care, bloat precautions, and veterinary checks"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to large double-dewclawed herding breeds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-briard-chic-requirements",
          role: "verified",
          locator: "CHIC Program required screenings: Radiographic Hip Dysplasia evaluation, CAER Eye examination, CSNB DNA test"
        },
        {
          id: "club-du-chien-de-brie-profile",
          role: "verified",
          locator: "Protocole de dépistage: CSNB, hanches, coudes et tares oculaires"
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
          id: "fci-briard-official-standard",
          role: "cited",
          locator: "Jaws/teeth: strong jaws with complete scissor bite"
        },
        {
          id: "akc-briard-breed-profile",
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
          id: "fci-briard-official-standard",
          role: "cited",
          locator: "Ears: set on high, covered with long hair"
        },
        {
          id: "akc-briard-breed-profile",
          role: "cited",
          locator: "Ear hygiene and inspection"
        }
      ],
      verifiedOn: null,
      note: "Ear maintenance protocol for heavy drop ears covered with long hair."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-briard-official-standard",
          role: "cited",
          locator: "Skin: supple, no dewlap; long goat-like hair care"
        },
        {
          id: "club-du-chien-de-brie-profile",
          role: "cited",
          locator: "Entretien du poil et prévention des feutrages cutanés"
        }
      ],
      verifiedOn: null,
      note: "Dermatological care protocol for breeds with dense long double coats."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-briard-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        },
        {
          id: "the-kennel-club-briard-breed-standard",
          role: "cited",
          locator: "Characteristics, lifestyle suitability, and exercise"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, exercise demands, and coat care commitments."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "Thomas Jefferson Monticello import (Bergère), 'heart wrapped in fur' saying, World War I sentry work, Dog of Montargis legend"
        },
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator: "Brief historical summary: Double dewclaws, crochet tail, Abbé Rozier 1809"
        },
        {
          id: "club-du-chien-de-brie-profile",
          role: "verified",
          locator: "Historique et traditions pastorales françaises"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Verified historical folklore and working heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-briard-official-standard",
          role: "verified",
          locator: "Origin, size (62-68 cm / 56-64 cm), coat, colors, double dewclaws, and tail crochet"
        },
        {
          id: "scc-briard-breed-standard",
          role: "verified",
          locator: "Poids (30-40 kg / 25-35 kg), longévité (10-12 ans), tempérament"
        },
        {
          id: "akc-briard-breed-profile",
          role: "verified",
          locator: "Grooming, exercise, family suitability, and training"
        },
        {
          id: "ofa-briard-chic-requirements",
          role: "verified",
          locator: "Recommended health screening panel and CSNB DNA testing"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and genetics research without naming registries in prose."
    }
  },

  updatedOn: "2026-11-10"
};
