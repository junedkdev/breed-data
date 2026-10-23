import type { Breed } from "../schema/breed.types";

export const afghan_hound: Breed = {
  slug: "afghan-hound",
  name: "Afghan Hound",
  scientificName: null,
  alternateNames: [],
  group: "AKC Hound Group; FCI Group 10 — Sighthounds, Section: Long-haired or fringed Sighthounds",

  origin: {
    country: "Afghanistan",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Afghan-Hound.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Afghan-Hound.jpg",
      title: "Afghan-Hound.jpg",
      description: "Afghan Hound with a reddish coat.",
      creator: "Jurriaan Schulman",
      uploader: null,
      capturedOn: null,
      uploadedOn: null,
      width: 900,
      height: 760,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Jurriaan Schulman, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Indicate changes, if any; adaptations must comply with applicable share-alike terms.",
      restrictions:
        "The file page also mentions GNU Free Documentation License terms and historical Wikipedia disclaimers. Recheck the original page and retain the chosen CC BY-SA attribution and license record.",
      metadataCheckedOn: "2026-10-23",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Afghan_Hound.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Afghan_Hound.jpg",
      title: "Afghan Hound.jpg",
      description:
        "Afghan Hound Zushkhan Jodeci at a championship dog show.",
      creator: "Sannse",
      uploader: null,
      capturedOn: "2003-08-29",
      uploadedOn: null,
      width: 548,
      height: 566,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Sannse, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Indicate changes, if any; adaptations must comply with applicable share-alike terms.",
      restrictions:
        "The file page also mentions GNU Free Documentation License terms and historical Wikipedia disclaimers. Recheck the original page and retain the chosen CC BY-SA attribution and license record.",
      metadataCheckedOn: "2026-10-23",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/AfghanHound.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:AfghanHound.jpg",
      title: "AfghanHound.jpg",
      description: "Afghan Hound photographed outdoors.",
      creator: "Bryan Ungard",
      uploader: "Ltshears",
      capturedOn: "2007-12-16",
      uploadedOn: "2011-08-03",
      width: 3008,
      height: 2000,
      licenseId: "cc-by-sa-2.0",
      attribution:
        "Photo by Bryan Ungard, via Wikimedia Commons, CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0/). Indicate changes, if any; adaptations must comply with applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-23",
    },
  ],

  overview: {
    summary:
      "The Afghan Hound is a tall, athletic sighthound recognised for its long, silky coat, distinctive topknot, narrow head and dignified expression. Bred for hunting in challenging terrain, it combines speed and keen sight with an independent, often reserved personality.",

    description:
      "Elegant in appearance but built for athletic movement, the Afghan Hound has a long, fine-textured coat, a flowing topknot and prominent hipbones. Its coat can appear in many colours, and the shorter-haired saddle on mature dogs is a characteristic feature of the breed. Afghan Hounds are often affectionate with familiar people while remaining independent or aloof with strangers. Their hunting heritage means they may pursue animals that move quickly, so reliable management, secure fencing and careful off-lead decisions are important. The coat takes substantial ongoing care: regular, thorough brushing and bathing help prevent tangles and mats. Prospective owners should be prepared for both the grooming commitment and the need for safe opportunities to move and run.",

    history:
      "The Afghan Hound is an ancient type of sighthound associated with Afghanistan, where dogs of this form were used to hunt game in varied and often rugged landscapes. Its speed, sight and agility suited it to pursuing quarry across open ground. The modern pedigree breed was developed further in Britain after Afghan-type hounds were brought to the country, and it later became established in conformation showing and as a companion. The precise early ancestry is not fully documented, so specific origin stories should be treated cautiously.",

    originalPurpose:
      "A sighthound used to pursue and catch game by sight and speed in open or rugged terrain.",

    currentRoles: [
      "Companion dog",
      "Conformation showing",
      "Lure coursing and other suitable sighthound sports",
      "Supervised running and outdoor exercise",
      "Reward-based training and scent or enrichment games",
    ],
  },

  physical: {
    sizeCategory: "Large, tall and lightly built sighthound",

    // FCI standard measurements, stored in centimetres.
    height: {
      unit: "cm",
      male: { min: 68, max: 74 },
      female: { min: 63, max: 69 },
    },

    // The AKC standard gives approximate weights, not a formal range.
    // Equal min/max values preserve the approximate stated figures.
    weight: {
      unit: "kg",
      male: { min: 27.2, max: 27.2 },
      female: { min: 22.7, max: 22.7 },
    },

    // AKC breed profile estimate; individual lifespan varies.
    lifespanYears: {
      min: 12,
      max: 18,
    },

    coatType:
      "Long, fine, silky hair over much of the body, with a long topknot and feathering. Mature dogs characteristically have shorter, close-lying hair over the saddle of the back.",

    coatLength: "Long, silky and feathered, with a short-haired saddle",

    coatColors: [
      "Black",
      "Cream",
      "Red",
      "Blue",
      "Brindle",
      "Black and tan",
      "Other solid colours and combinations permitted by the applicable breed standard",
    ],

    sheddingLevel:
      "Loose hair can be less conspicuous than on many short-coated breeds, but the long coat can tangle and mat. Regular brushing and bathing are needed to maintain coat condition.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Long, silky topknot on the head",
      "Long, hanging ears covered with silky hair",
      "Narrow, refined head and dark, almond-shaped eyes",
      "Long coat with prominent feathering",
      "Short, close-lying saddle on the back of mature dogs",
      "Tall, athletic frame with prominent hipbones and long limbs",
      "High-carried tail that typically has a ring or curl at the end",
    ],
  },

  temperament: {
    traits: [
      "Independent",
      "Dignified",
      "Often reserved with unfamiliar people",
      "Affectionate with familiar people",
      "Sensitive to rough handling",
      "Athletic and fast-moving",
      "Can be strongly attracted to moving animals",
      "May be less consistently responsive when distracted",
    ],

    // Editorial estimates on a 1–5 scale, not standardised measurements.
    scores: {
      affection: 3,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 2,
      independence: 5,
      trainability: 3,
      barking: 2,
      energy: 4,
    },
  },

  care: {
    exercise: {
      level: "High",

      // Practical estimate for a healthy adult; adapt to the individual dog.
      minutesPerDay: {
        min: 60,
        max: 120,
      },

      activities: [
        "Daily walks with opportunities to explore safely",
        "Supervised running in a securely enclosed area",
        "Age-appropriate lure coursing or other sighthound activities",
        "Short reward-based training sessions",
        "Food puzzles and other calm mental enrichment",
      ],
    },

    grooming: {
      level: "Very high",

      brushing:
        "Brush and comb the coat thoroughly several times a week, often more frequently depending on its length, texture and condition. Work in small sections and check behind the ears, under the legs, around the chest, between the feathering and along the tail for tangles or mats.",

      bathing:
        "Regular bathing is generally needed to keep the long coat clean and manageable. Use dog-appropriate shampoo and conditioner, rinse thoroughly and dry the coat carefully. The appropriate interval depends on the dog's coat, lifestyle and skin condition.",

      notes: [
        "Do not brush only the visible top layer; check through the coat to the skin.",
        "Use a suitable comb to identify knots before they tighten into mats.",
        "Check the ears regularly and follow veterinary advice for cleaning.",
        "Trim nails as needed and brush teeth regularly.",
        "Check the coat after outdoor activity for burrs, grass seeds and debris.",
        "Ask an experienced groomer for help if the coat becomes heavily matted.",
      ],
    },

    training: {
      difficulty:
        "Moderate to challenging; independence and hunting motivation can make reliable responses difficult around distractions.",

      tips: [
        "Use patient, reward-based methods and keep sessions short and engaging.",
        "Practise recall from an early age, but do not rely on it alone around wildlife or roads.",
        "Use a secure enclosed space for off-lead running.",
        "Build attention and calm behaviours gradually in low-distraction settings.",
        "Introduce handling, grooming and bathing positively so coat care becomes routine.",
        "Avoid harsh punishment or forceful handling.",
        "Provide appropriate outlets for running and exploration rather than expecting the dog to remain inactive.",
      ],

      socialization:
        "Introduce the puppy gradually and positively to people, dogs, everyday sounds, handling and varied environments. Continue reinforcing calm, safe behaviour throughout adulthood, while respecting the dog's individual comfort level.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates with shade, water and appropriate shelter",
        "Cool climates with suitable protection and comfortable resting areas",
        "Warm climates with exercise during cooler hours and close attention to overheating",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced diet suitable for the dog's life stage, body condition, activity and individual veterinary needs.",

    feedingFrequency: {
      puppy:
        "Feed a complete puppy diet in age-appropriate meals, following the food manufacturer's guidance and advice from a veterinarian.",

      adult:
        "Many adult dogs do well with two measured meals daily. Adjust portions to maintain a lean body condition and account for changes in exercise.",

      senior: null,
    },

    guidelines:
      "Choose a nutritionally complete food appropriate for the dog's life stage. Measure portions, keep fresh water available, monitor body condition and adjust intake as activity changes. Treats should be included in the daily calorie allowance. Seek veterinary guidance for growth, weight changes or specific dietary needs.",

    considerations: [
      "Avoid overfeeding and monitor body condition regularly.",
      "Adjust food quantity for changes in exercise, age and health.",
      "Introduce diet changes gradually unless a veterinarian advises otherwise.",
      "Discuss supplements or restrictive diets with a veterinarian before using them.",
      "Ask a veterinarian about meal timing and exercise precautions if the dog has risk factors for gastric dilatation-volvulus.",
    ],

    note:
      "Individual calorie requirements vary. Use feeding instructions as a starting point, then adjust with body-condition monitoring and veterinary advice.",
  },

  health: {
    overview:
      "Afghan Hounds need routine preventive veterinary care, weight and dental monitoring, and attention to their eyes, joints and overall condition. Breed-club screening recommendations include hip evaluation, an ophthalmologist evaluation and thyroid evaluation. These tests help assess selected risks; they do not guarantee that a dog is free of inherited or later-developing disease.",

    commonConditions: [
      "Gastric dilatation-volvulus (bloat): a life-threatening emergency involving stomach distension and possible twisting. Seek emergency veterinary care immediately if suspected.",
      "Hip dysplasia: a developmental joint condition for which breed-club screening is recommended.",
      "Eye disorders: an ophthalmologist examination is included in breed-club screening recommendations.",
      "Thyroid disorders: thyroid evaluation is included in breed-club screening recommendations.",
      "Chylothorax: a condition involving accumulation of lymphatic fluid in the chest that has been the subject of breed-club research. This mention does not establish that it is common in every Afghan Hound population.",
    ],

    preventiveCare: [
      "Schedule routine veterinary examinations and keep vaccinations and parasite prevention appropriate to local risks.",
      "Maintain a lean body condition and adjust food intake as activity changes.",
      "Discuss breed-club screening records with the breeder and veterinarian.",
      "Seek urgent veterinary care for signs of bloat, including a distended abdomen, unproductive retching, restlessness or sudden deterioration.",
      "Monitor mobility, appetite, energy and other changes, and discuss persistent concerns with a veterinarian.",
    ],

    recommendedScreenings: [
      "Hip evaluation",
      "Ophthalmologist evaluation",
      "Thyroid evaluation",
      "Review of relevant health records and screening results with a veterinarian before breeding",
    ],

    dentalCare:
      "Brush the teeth regularly with dog-specific dental products and arrange veterinary dental assessment when indicated. Do not use human toothpaste.",

    earCare:
      "Check the long, hair-covered ears regularly for odour, redness, discharge or discomfort. Clean only as advised by a veterinarian and seek care if signs of infection appear.",

    skinCare:
      "Part the coat to inspect the skin during grooming. Look for redness, parasites, irritation and mats that pull on the skin. Seek veterinary advice for persistent itching, sores or hair loss.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Owners prepared for substantial, ongoing coat care",
      "People who can provide daily exercise and safe opportunities to run",
      "Households that appreciate an independent dog and use patient training",
      "Owners able to manage a strong chase instinct responsibly",
      "People interested in sighthound sports or other suitable enrichment",
    ],

    notIdealFor: [
      "People seeking a low-maintenance coat",
      "Households unable to provide secure exercise areas or careful outdoor management",
      "Owners expecting consistently immediate obedience around moving animals",
      "People who cannot budget time for grooming and routine veterinary care",
    ],
  },

  funFacts: [
    "The Afghan Hound is classified by the FCI among long-haired or fringed sighthounds.",
    "The long, silky topknot is one of the breed's most recognisable features.",
    "A shorter-haired saddle on the back is a characteristic feature of the mature coat.",
    "The breed's history is associated with Afghanistan, while Britain played a major role in establishing the modern pedigree show breed.",
    "Its flowing coat can make the dog appear heavier than its athletic frame suggests.",
  ],

  faq: [
    {
      question: "Are Afghan Hounds easy to train?",
      answer:
        "They can learn well with patient, reward-based training, but their independent nature and interest in moving animals may make reliable responses difficult in distracting environments. Secure management remains important.",
    },
    {
      question: "How much grooming does an Afghan Hound need?",
      answer:
        "A great deal compared with most breeds. The long coat needs thorough, regular brushing and periodic bathing to prevent tangles and mats. The exact routine depends on coat condition and lifestyle.",
    },
    {
      question: "Can an Afghan Hound live in an apartment?",
      answer:
        "It depends on the individual dog and the owner's ability to provide enough exercise, enrichment and grooming. Apartment suitability is not recorded as a universal yes or no for this breed.",
    },
    {
      question: "Can Afghan Hounds be let off lead?",
      answer:
        "Only in an appropriately secure area unless the situation has been carefully assessed. Their sighthound heritage can prompt them to chase animals, and recall may not be reliable around strong distractions.",
    },
    {
      question: "What health tests should I ask a breeder about?",
      answer:
        "Ask about hip evaluation, an ophthalmologist evaluation and thyroid evaluation, which are listed in breed-club screening recommendations. A veterinarian can explain what each result means for an individual dog.",
    },
    {
      question: "What is the Afghan Hound's life expectancy?",
      answer:
        "The AKC breed profile gives a life expectancy of 12–18 years. Individual lifespan varies with genetics, health, care and circumstances.",
    },
  ],

  references: [
    "fci-afghan-hound-standard",
    "american-kennel-club-afghan-hound-standard",
    "american-kennel-club-afghan-hound",
    "afghan-hound-club-of-america-health",
    "wikimedia-afghan-hound-jurriaan-schulman",
    "wikimedia-afghan-hound-sannse",
    "wikimedia-afghan-hound-bryan-ungard",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A breed-specific scientific name was not established from the consulted breed authorities.",
    },

    alternateNames: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No additional alternate name was recorded because a reliable, consistent alternative was not established.",
    },

    group: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-afghan-hound-standard",
          role: "verified",
          locator: "FCI breed nomenclature: Group and section",
        },
        {
          id: "american-kennel-club-afghan-hound",
          role: "verified",
          locator: "Breed profile: Hound Group",
        },
      ],
      verifiedOn: "2026-10-23",
      note: null,
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-afghan-hound-standard",
          role: "verified",
          locator: "FCI Afghan Hound breed nomenclature: country of origin",
        },
      ],
      verifiedOn: "2026-10-23",
      note: null,
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A more specific geographic region was not recorded because the consulted authority identifies Afghanistan as the country of origin but does not establish one specific region.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-afghan-hound-standard",
          role: "verified",
          locator: "FCI breed standard and nomenclature",
        },
        {
          id: "american-kennel-club-afghan-hound-standard",
          role: "verified",
          locator: "Official standard: general appearance, coat, size and temperament",
        },
        {
          id: "american-kennel-club-afghan-hound",
          role: "cited",
          locator: "Breed profile and breed overview",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "User-facing prose is original synthesis. Historical details are kept broad where precise early ancestry is not established.",
    },

    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-afghan-hound-standard",
          role: "cited",
          locator: "FCI standard: height and general appearance",
        },
      ],
      verifiedOn: null,
      note: "Editorial size description based on standard height and build.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-afghan-hound-standard",
          role: "verified",
          locator: "FCI standard: height at the withers",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Measurements are stored in centimetres.",
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-afghan-hound-standard",
          role: "verified",
          locator: "Official standard: Height and Weight",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "The standard gives approximate weights of about 60 lb for dogs and 50 lb for bitches; these are converted to kilograms and represented as single approximate values, not as a verified population range.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-afghan-hound",
          role: "verified",
          locator: "Breed profile: Life Expectancy",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "A published estimate, not a guarantee for an individual dog.",
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-afghan-hound-standard",
          role: "verified",
          locator: "FCI standard: Coat",
        },
        {
          id: "american-kennel-club-afghan-hound-standard",
          role: "verified",
          locator: "Official standard: Coat",
        },
      ],
      verifiedOn: "2026-10-23",
      note: null,
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-afghan-hound-standard",
          role: "verified",
          locator: "FCI standard: Coat",
        },
        {
          id: "american-kennel-club-afghan-hound-standard",
          role: "verified",
          locator: "Official standard: Coat and saddle",
        },
      ],
      verifiedOn: "2026-10-23",
      note: null,
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-afghan-hound-standard",
          role: "verified",
          locator: "Official standard: Color",
        },
        {
          id: "fci-afghan-hound-standard",
          role: "cited",
          locator: "FCI standard: Colour",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "The list is illustrative rather than exhaustive; the applicable standard permits a broad range of colours.",
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-afghan-hound",
          role: "verified",
          locator: "Breed profile: Grooming",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Describes coat-maintenance needs rather than a measured shedding rate.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No consistent, authoritative breed-specific drooling rating was established.",
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-afghan-hound-standard",
          role: "verified",
          locator: "Official standard: General Appearance, Head, Ears and Coat",
        },
        {
          id: "fci-afghan-hound-standard",
          role: "cited",
          locator: "FCI standard: General Appearance",
        },
      ],
      verifiedOn: "2026-10-23",
      note: null,
    },

    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-afghan-hound",
          role: "verified",
          locator: "Breed profile: temperament and personality",
        },
        {
          id: "american-kennel-club-afghan-hound-standard",
          role: "verified",
          locator: "Official standard: Temperament",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "These are typical breed tendencies, not predictions about every individual dog.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-afghan-hound",
          role: "cited",
          locator: "Breed profile: trait descriptions",
        },
      ],
      verifiedOn: null,
      note: "All 1–5 scores are editorial estimates, not standardised behavioural test results.",
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-afghan-hound",
          role: "verified",
          locator: "Breed profile: activity and breed characteristics",
        },
      ],
      verifiedOn: "2026-10-23",
      note: null,
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-afghan-hound",
          role: "cited",
          locator: "Breed profile: activity and breed characteristics",
        },
      ],
      verifiedOn: null,
      note: "Practical editorial estimate for a healthy adult; age, health and individual needs vary.",
    },

    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Suggested activities are general care guidance and should be adapted to the dog's health and training.",
    },

    "care.grooming.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-afghan-hound",
          role: "verified",
          locator: "Breed profile: Grooming",
        },
      ],
      verifiedOn: "2026-10-23",
      note: null,
    },

    "care.grooming.brushing": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-afghan-hound",
          role: "verified",
          locator: "Breed profile: Grooming",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "The exact brushing schedule depends on coat condition and lifestyle.",
    },

    "care.grooming.bathing": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Practical grooming advice; adjust to the individual dog's coat and skin condition.",
    },

    "care.grooming.notes": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine coat, ear, nail and dental maintenance guidance.",
    },

    "care.training.difficulty": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-afghan-hound",
          role: "verified",
          locator: "Breed profile: personality and training-related traits",
        },
        {
          id: "american-kennel-club-afghan-hound-standard",
          role: "cited",
          locator: "Official standard: temperament",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Difficulty is descriptive and varies with the individual dog and training approach.",
    },

    "care.training.tips": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Reward-based training and safe management guidance, not a breed-specific medical or behavioural guarantee.",
    },

    "care.training.socialization": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General puppy and adult dog socialisation guidance.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Apartment suitability cannot be reliably reduced to a universal yes/no; exercise, management and the individual dog matter.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-afghan-hound",
          role: "cited",
          locator: "Breed profile: exercise and activity needs",
        },
      ],
      verifiedOn: null,
      note: "Editorial assessment; a yard must be securely enclosed and does not replace walks or interaction.",
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General climate and heat-safety advice; individual tolerance varies.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A reliable breed-specific duration for being left alone was not established.",
    },

    "nutrition.dietType": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General nutrition guidance; diet should be adapted to the individual dog and veterinary advice.",
    },

    "nutrition.feedingFrequency.puppy": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Meal frequency depends on age, food and veterinary guidance.",
    },

    "nutrition.feedingFrequency.adult": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Two meals daily is a common practical approach, not a mandatory breed-specific rule.",
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific senior feeding frequency was established; adjust feeding to the dog's health and veterinary advice.",
    },

    "nutrition.guidelines": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General guidance for complete nutrition, portion monitoring and hydration.",
    },

    "nutrition.considerations": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General feeding and veterinary-care considerations; not a substitute for individual medical advice.",
    },

    "nutrition.note": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General portion and body-condition guidance.",
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-afghan-hound",
          role: "verified",
          locator: "Breed profile: recommended health tests and bloat note",
        },
        {
          id: "afghan-hound-club-of-america-health",
          role: "verified",
          locator: "Health Testing & Canine Health Information Center",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Screening recommendations indicate areas for assessment; they do not mean all dogs will develop these conditions.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-afghan-hound",
          role: "verified",
          locator: "Breed profile: bloat and recommended health tests",
        },
        {
          id: "afghan-hound-club-of-america-health",
          role: "verified",
          locator: "Health screening information and chylothorax research links",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "The list distinguishes screening topics from reported health concerns. Chylothorax is mentioned as a subject of breed-club research, not asserted to be common in all populations.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive veterinary care guidance.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-afghan-hound",
          role: "verified",
          locator: "Recommended Health Tests from the National Breed Club",
        },
        {
          id: "afghan-hound-club-of-america-health",
          role: "verified",
          locator: "Health Testing & Canine Health Information Center",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Screening recommendations can change; confirm current requirements with the breed club and veterinarian.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine dental care advice.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General ear monitoring guidance; seek veterinary advice for symptoms.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General coat and skin inspection advice.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-afghan-hound",
          role: "cited",
          locator: "Breed profile: grooming, temperament and activity",
        },
      ],
      verifiedOn: null,
      note: "Suitability is an editorial assessment, not a guarantee about an individual dog or household.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability around children depends on the individual dog, supervision and the household; no universal breed-level yes/no value is recorded.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability for senior owners depends on individual mobility, support and the dog's exercise needs; no universal value is recorded.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Apartment suitability depends on exercise, management and the individual dog; no universal yes/no value is recorded.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-afghan-hound-standard",
          role: "verified",
          locator: "FCI breed nomenclature and breed standard",
        },
        {
          id: "american-kennel-club-afghan-hound-standard",
          role: "verified",
          locator: "Official standard: coat and general appearance",
        },
      ],
      verifiedOn: "2026-10-23",
      note: null,
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-afghan-hound",
          role: "verified",
          locator: "Breed profile: life expectancy, grooming and recommended health tests",
        },
        {
          id: "american-kennel-club-afghan-hound-standard",
          role: "verified",
          locator: "Official standard: temperament and coat",
        },
        {
          id: "afghan-hound-club-of-america-health",
          role: "verified",
          locator: "Health Testing & Canine Health Information Center",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Answers summarise the cited breed guidance and include appropriate uncertainty where individual needs vary.",
    },
  },

  updatedOn: "2026-10-23",
};
