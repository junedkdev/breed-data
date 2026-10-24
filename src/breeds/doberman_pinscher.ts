import type { Breed } from "../schema/breed.types";

export const doberman_pinscher: Breed = {
  slug: "doberman-pinscher",
  name: "Doberman Pinscher",
  scientificName: null,
  alternateNames: ["Dobermann"],
  group:
    "AKC Working Group; FCI Group 2 — Pinscher and Schnauzer type, Section 1 — Pinschers, with working trial",

  origin: {
    country: "Germany",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Doberman_Pinscher_aka_Dobermann.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Doberman_Pinscher_aka_Dobermann.jpg",
      title: "Doberman Pinscher aka Dobermann.jpg",
      description: "A black-and-tan female Doberman Pinscher.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2011-07-10",
      uploadedOn: "2014-04-16",
      width: 1083,
      height: 1871,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Indicate changes, if any; adaptations must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-23",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Doberman_Dog.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Doberman_Dog.jpg",
      title: "Doberman Dog.jpg",
      description: "A Doberman Pinscher photographed in 2024.",
      creator: "Puppydekho",
      uploader: "Puppydekho",
      capturedOn: "2024-03-03",
      uploadedOn: "2024-03-18",
      width: 1500,
      height: 1600,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Puppydekho, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate changes, if any; adaptations must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-23",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Doberman_Pinscher.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Doberman_Pinscher.jpg",
      title: "Doberman Pinscher.jpg",
      description: "A Doberman Pinscher photographed outdoors.",
      creator: "Willitorivera",
      uploader: "Willitorivera",
      capturedOn: "2017-06-16",
      uploadedOn: null,
      width: 2620,
      height: 4656,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Willitorivera, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Indicate changes, if any; adaptations must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-23",
    },
  ],

  overview: {
    summary:
      "The Doberman Pinscher is a sleek, muscular German working breed known for its alert expression, close-fitting coat and strong bond with its household. Intelligent and athletic, it usually thrives with structured training, regular exercise and close involvement in family life.",

    description:
      "The Doberman combines a powerful, athletic frame with an elegant outline and a short, smooth coat. It was developed as a versatile working dog and is now kept as a companion, sport dog and working partner. The breed is often highly attentive to its surroundings and learns quickly, but its size, energy and guarding instincts make thoughtful training and socialisation important. Daily exercise should be paired with activities that engage its mind, such as obedience practice, scent games and structured play. Dobermans generally benefit from living closely with their people rather than being left isolated for long periods. Their short coat is relatively easy to maintain, although skin, nails, ears, teeth and overall health still need routine care.",

    history:
      "The Dobermann was developed in Germany in the late nineteenth century and takes its name from Friedrich Louis Dobermann, who is credited with establishing the breed. Early dogs were selected for a combination of alertness, courage, strength and usefulness as protection and working animals. They were used in police and other service roles, as well as for guarding and companionship. The breed's exact ancestry is not completely documented, so accounts that assign precise percentages or definitive contributions to particular foundation breeds should be treated cautiously.",

    originalPurpose:
      "A versatile protection and working dog developed to accompany and safeguard its handler, later used in police and other service work.",

    currentRoles: [
      "Companion dog",
      "Obedience and rally",
      "Agility and other dog sports",
      "Scent-work and tracking",
      "Search and service work where appropriately trained",
      "Responsible protection-related working disciplines",
      "Conformation showing",
    ],
  },

  physical: {
    sizeCategory: "Medium-large, muscular and athletic",

    // FCI standard measurements, in centimetres at the withers.
    height: {
      unit: "cm",
      male: { min: 68, max: 72 },
      female: { min: 63, max: 68 },
    },

    // Published breed weight ranges are approximate and not sex-specific.
    weight: {
      unit: "kg",
      male: { min: 27, max: 45 },
      female: { min: 27, max: 45 },
    },

    lifespanYears: {
      min: 10,
      max: 12,
    },

    coatType:
      "Short, hard, dense and close-lying, with a smooth appearance. A visible grey undercoat is not expected in the standard coat description.",

    coatLength: "Short",

    coatColors: [
      "Black with clearly defined rust-red markings",
      "Brown with clearly defined rust-red markings",
      "Red with rust markings — recognised in the American standard",
      "Blue with rust markings — recognised in the American standard",
      "Fawn or Isabella with rust markings — recognised in the American standard",
    ],

    sheddingLevel:
      "Low to moderate visible shedding; short hairs can still collect on clothing and furniture. Individual shedding varies with season, skin health and grooming.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Compact, muscular and athletic body",
      "Elegant outline with a proud, alert carriage",
      "Long, wedge-shaped head and strong muzzle",
      "Short, smooth, close-fitting coat",
      "Clearly defined rust markings on traditional black or brown coats",
      "Naturally folded ears unless altered surgically",
      "Naturally long tail unless docked where permitted",
      "Balanced, energetic movement built for endurance and speed",
    ],
  },

  temperament: {
    traits: [
      "Intelligent",
      "Alert and observant",
      "Loyal to its household",
      "Energetic",
      "Confident",
      "Courageous",
      "Responsive to training",
      "Protective in some situations",
      "Sensitive to handling and household routines",
    ],

    // Editorial estimates on a 1–5 scale, not standardised test results.
    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 5,
      independence: 2,
      trainability: 5,
      barking: 3,
      energy: 5,
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
        "Brisk walks and controlled running when physically mature",
        "Reward-based obedience training",
        "Scent-work and tracking games",
        "Agility or other suitable dog sports",
        "Structured fetch and interactive play",
        "Food puzzles and problem-solving games",
        "Calm decompression walks with opportunities to sniff",
      ],
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush once or twice a week with a soft brush or grooming mitt to remove loose hairs and distribute skin oils. Check the skin during grooming, especially if scratching, redness or hair loss appears.",

      bathing:
        "Bathe when needed with a dog-appropriate shampoo and rinse thoroughly. Avoid excessive bathing or harsh products that can irritate the skin.",

      notes: [
        "Check the skin for irritation, dry patches, lumps or unusual hair loss.",
        "Trim nails regularly; active dogs do not always wear them down sufficiently.",
        "Brush teeth with a dog-specific toothbrush and toothpaste.",
        "Check the ears routinely for redness, odour or discharge.",
        "Provide a comfortable resting place away from prolonged cold or wet conditions.",
        "Introduce handling, nail care and veterinary examinations with positive reinforcement.",
      ],
    },

    training: {
      difficulty:
        "Moderate to high: highly trainable and responsive, but powerful, energetic dogs need consistent handling, early foundations and regular practice.",

      tips: [
        "Use reward-based training with clear, consistent expectations.",
        "Teach loose-leash walking and calm greetings from an early age.",
        "Build a reliable recall in secure areas before practising around distractions.",
        "Train impulse control, settle cues and the ability to disengage from triggers.",
        "Socialise gradually with varied people, environments and suitable dogs.",
        "Use structured activities to channel energy and reinforce focus.",
        "Avoid encouraging uncontrolled aggression or relying on intimidation-based methods.",
        "Seek a qualified, humane trainer if guarding, fear or reactivity becomes difficult to manage.",
      ],

      socialization:
        "Provide gradual, positive exposure to everyday sounds, surfaces, people, handling and suitable dogs. Socialisation is an ongoing process rather than a single puppy-stage task. Focus on calm confidence and safe choices, not forcing the dog into overwhelming interactions.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool weather with appropriate shelter",
        "Warm weather with shade, fresh water and exercise during cooler hours",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced diet appropriate to life stage, body condition, activity level and veterinary needs.",

    feedingFrequency: {
      puppy:
        "Feed a complete puppy diet in age-appropriate measured meals. Ask a veterinarian to guide growth, body condition and portion changes.",

      adult:
        "Many adults do well with two measured meals per day. Adjust portions to activity, body condition and individual health needs.",

      senior: null,
    },

    guidelines:
      "Measure daily portions and monitor body condition rather than relying on a fixed amount for every dog. Keep fresh water available and include treats in the daily food allowance. Ask a veterinarian about an appropriate diet for a dog with heart, thyroid, liver or digestive concerns. Discuss meal timing and exercise with the veterinarian, particularly if the dog has a history of digestive problems.",

    considerations: [
      "Maintain a lean body condition to reduce unnecessary strain on joints.",
      "Adjust portions as growth, activity and age change.",
      "Use treats as part of the daily calorie allowance.",
      "Provide fresh water throughout the day.",
      "Discuss any persistent digestive symptoms or unexplained weight changes with a veterinarian.",
      "Seek veterinary advice about diet and activity if a cardiac or other chronic condition is diagnosed.",
    ],

    note:
      "Nutritional requirements vary by individual. Use feeding guidance as a starting point and adjust according to body condition and veterinary advice.",
  },

  health: {
    overview:
      "Doberman Pinschers have several important health considerations, particularly dilated cardiomyopathy, thyroid disease, von Willebrand disease, liver disease and cervical vertebral instability. Hip and eye evaluations are also included in breed-club screening recommendations. Some conditions can develop despite normal earlier screening, so health checks should be discussed with a veterinarian over the dog's lifetime. Breeder records, family history and appropriate testing can inform risk assessment but cannot guarantee an individual dog's future health.",

    commonConditions: [
      "Dilated cardiomyopathy (DCM): a serious heart-muscle disease associated with the breed; routine veterinary assessment and appropriate cardiac monitoring are important.",
      "Hypothyroidism and autoimmune thyroid disease: thyroid function can be evaluated with veterinary blood testing.",
      "Von Willebrand disease (vWD): an inherited clotting disorder for which DNA testing is available.",
      "Chronic active hepatitis and other liver disease: veterinary assessment may include blood chemistry and additional tests when indicated.",
      "Cervical vertebral instability, often called Wobbler syndrome: a spinal condition that can affect coordination and mobility; diagnosis requires veterinary evaluation.",
      "Hip dysplasia: a developmental joint condition for which radiographic evaluation may be recommended.",
      "Eye disorders: screening by a veterinary ophthalmologist is included in breed health guidance.",
      "Gastric dilatation-volvulus (bloat): a potentially life-threatening emergency involving stomach distension and rotation; urgent veterinary treatment is required if suspected.",
    ],

    preventiveCare: [
      "Arrange regular veterinary examinations and discuss cardiac monitoring appropriate to age, family history and risk.",
      "Ask the breeder for documented cardiac, thyroid, eye, hip and von Willebrand disease testing where applicable.",
      "Keep vaccination and parasite prevention current according to local veterinary guidance.",
      "Maintain healthy body condition and build exercise gradually.",
      "Learn the warning signs of bloat, including a swollen abdomen, repeated unproductive retching, restlessness and rapid deterioration; seek emergency care if suspected.",
      "Seek prompt veterinary care for fainting, unexplained exercise intolerance, weakness, abnormal bleeding or changes in coordination.",
      "Discuss ongoing screening intervals with a veterinarian because a single normal test does not exclude future disease.",
    ],

    recommendedScreenings: [
      "Cardiac examination by a veterinarian; breeding-dog screening may include echocardiography and Holter monitoring",
      "Thyroid evaluation",
      "Von Willebrand disease type I DNA test",
      "Hip evaluation using an accepted radiographic scheme",
      "Ophthalmologist examination",
      "Additional liver assessment when history, symptoms or veterinary findings warrant it",
    ],

    dentalCare:
      "Brush the teeth regularly with a dog-specific toothbrush and toothpaste. Arrange veterinary dental checks and seek advice for persistent bad breath, gum redness, pain or difficulty chewing.",

    earCare:
      "Check the ears routinely for redness, odour, discharge or discomfort. Clean only as advised by a veterinarian and seek care if signs of infection appear.",

    skinCare:
      "The short coat makes skin checks relatively straightforward. Look for irritation, sores, unusual lumps, persistent itching or hair loss and consult a veterinarian if these persist.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "People who can provide daily exercise and mental enrichment",
      "Owners who are willing to train consistently throughout the dog's life",
      "Households where the dog can live closely with its people",
      "People interested in obedience, scent-work or suitable dog sports",
      "Owners prepared to manage a strong, alert dog responsibly",
      "Households willing to budget for routine veterinary care and breed-relevant health monitoring",
    ],

    notIdealFor: [
      "People seeking a low-energy or minimally trained companion",
      "Households unable to provide daily exercise and interaction",
      "Owners who expect guarding instincts to replace training and supervision",
      "People unwilling to manage introductions and interactions thoughtfully",
      "Households planning to leave the dog isolated for extended periods on a regular basis",
    ],
  },

  funFacts: [
    "The breed takes its name from Friedrich Louis Dobermann, who developed it in Germany in the nineteenth century.",
    "FCI classifies the Dobermann in Group 2 and requires a working trial for the breed.",
    "The short coat has clearly defined markings in standard black and brown varieties.",
    "Dobermans have been used in police, protection and other working roles as well as as family companions.",
    "A normal health test at one point in time does not rule out every condition that may develop later in life.",
  ],

  faq: [
    {
      question: "How much exercise does a Doberman Pinscher need?",
      answer:
        "A healthy adult may need roughly 60–120 minutes of activity a day, adjusted for age, health and temperament. Combine walks with training and mental enrichment, and avoid forcing strenuous exercise on a growing puppy.",
    },
    {
      question: "Are Doberman Pinschers easy to train?",
      answer:
        "They are intelligent and often learn quickly, but their strength, energy and alertness make consistent training important. Reward-based methods, impulse control, reliable recall and calm greetings are useful foundations.",
    },
    {
      question: "Do Doberman Pinschers shed?",
      answer:
        "Yes. Their short coat still releases hairs, which can collect on furniture and clothing. Regular brushing with a soft brush or grooming mitt helps remove loose hair.",
    },
    {
      question: "Are Doberman Pinschers good family dogs?",
      answer:
        "An individual dog may thrive in a family that provides training, exercise and appropriate supervision. Suitability depends on the dog's temperament and the household, and children should always be supervised around dogs.",
    },
    {
      question: "What health conditions should owners know about?",
      answer:
        "Important concerns include dilated cardiomyopathy, thyroid disease, von Willebrand disease, liver disease and cervical vertebral instability. Hip and eye screening may also be recommended. Discuss testing and ongoing monitoring with a veterinarian.",
    },
    {
      question: "What health tests should I ask a breeder about?",
      answer:
        "Ask for documented cardiac, thyroid, von Willebrand disease, hip and eye testing as appropriate. Cardiac screening may include echocardiography and Holter monitoring. Confirm current recommendations with the breed club and your veterinarian.",
    },
    {
      question: "What colours does a Doberman Pinscher come in?",
      answer:
        "The FCI standard recognises black or brown coats with clearly defined rust-red markings. The American standard also recognises red, blue and fawn (Isabella) varieties with rust markings.",
    },
    {
      question: "How long does a Doberman Pinscher live?",
      answer:
        "A commonly published life-expectancy range is around 10–12 years. Individual lifespan varies with genetics, health, preventive care and living conditions.",
    },
    {
      question: "Can a Doberman Pinscher live in an apartment?",
      answer:
        "It depends on the individual dog and the household's ability to provide exercise, training, enrichment and appropriate noise management. A yard alone is not a substitute for daily interaction and activity.",
    },
    {
      question: "Are Doberman Pinschers naturally aggressive?",
      answer:
        "Breed reputation does not determine an individual dog's behaviour. Temperament is influenced by genetics, early experiences, health, training and management. Responsible socialisation and humane, consistent training are essential.",
    },
  ],

  references: [
    "fci-dobermann-standard",
    "american-kennel-club-doberman-pinscher",
    "american-kennel-club-working-group-health-testing-requirements",
    "doberman-pinscher-club-america-health-statement",
    "wikimedia-doberman-canarian",
    "wikimedia-doberman-puppydekho",
    "wikimedia-doberman-willitorivera",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A breed-specific scientific name is not recorded; the catalog does not require a formal taxonomic name.",
    },

    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "Official breed name: Dobermann",
        },
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "verified",
          locator: "Breed profile name: Doberman Pinscher",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Dobermann is the name used by the FCI; Doberman Pinscher is the American breed name.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "FCI classification",
        },
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "verified",
          locator: "AKC breed group",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "The FCI and AKC use different group systems.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "FCI breed nomenclature: country of origin",
        },
      ],
      verifiedOn: "2026-10-23",
      note: null,
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No specific subnational region is recorded in the breed entry.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "FCI standard: historical summary, use, appearance and temperament",
        },
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "verified",
          locator: "Breed profile: appearance, history and working traits",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Descriptions are original summaries; exact ancestral contributions are not presented as settled fact.",
    },

    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "cited",
          locator: "FCI standard: general appearance and measurements",
        },
      ],
      verifiedOn: null,
      note: "Editorial size description based on standard measurements and build.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "FCI standard: height at the withers",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "FCI height ranges are stored in centimetres. The American standard has somewhat different ranges.",
    },

    "physical.weight": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile: typical size and weight",
        },
      ],
      verifiedOn: null,
      note: "Approximate overall range converted to kilograms and repeated for both sex slots because the schema requires a BySex object; these are not separate sex-specific standards.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "verified",
          locator: "Breed profile: life expectancy",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Published lifespan range, not a guarantee for an individual dog.",
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "FCI standard: coat",
        },
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile: coat and grooming",
        },
      ],
      verifiedOn: "2026-10-23",
      note: null,
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "FCI standard: coat",
        },
      ],
      verifiedOn: "2026-10-23",
      note: null,
    },

    "physical.coatColors": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "FCI standard: recognised colours",
        },
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "verified",
          locator: "American breed profile and standard colour descriptions",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Colour lists vary by registry. The object identifies the American-standard colours separately from the two colours listed by the FCI.",
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile: short coat and grooming",
        },
      ],
      verifiedOn: null,
      note: "Qualitative estimate; no measured breed-specific shedding rate is claimed.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable standardised breed-specific drooling rating was established.",
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "FCI standard: general appearance, head, coat and movement",
        },
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile: appearance",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Ear cropping and tail docking are not required for a dog to be a Doberman; legal status and breed presentation vary by country.",
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "FCI standard: behaviour and temperament",
        },
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile: temperament and working traits",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Traits describe broad breed tendencies and do not predict every individual's behaviour.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile: activity and temperament",
        },
      ],
      verifiedOn: null,
      note: "All 1–5 scores are editorial estimates, not standardised behavioural test results.",
    },

    "care.exercise": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile: exercise and activity needs",
        },
        {
          id: "fci-dobermann-standard",
          role: "cited",
          locator: "FCI standard: working use and temperament",
        },
      ],
      verifiedOn: null,
      note: "Exercise level and minutes are practical estimates for healthy adult dogs. Adjust for age, health and individual tolerance.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "verified",
          locator: "Breed profile: short coat and routine grooming",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Coat grooming is relatively simple, but routine hygiene remains important.",
    },

    "care.training": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Training and socialisation suggestions are general humane-dog-training guidance, adapted to a strong, alert working breed.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability depends on the individual dog, exercise, enrichment and household management; no universal yes/no value is recorded.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile: activity and working traits",
        },
      ],
      verifiedOn: null,
      note: "A secure yard can be useful but does not replace exercise, training or family interaction.",
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General climate advice for a short-coated dog; adapt activity and shelter to local weather and individual health.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific duration for being left alone was established.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine nutrition guidance; individual needs depend on life stage, body condition and veterinary advice.",
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific senior feeding frequency was established.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "doberman-pinscher-club-america-health-statement",
          role: "verified",
          locator: "Club health statement: cardiac, thyroid, liver, cervical instability, vWD, eye and hip concerns",
        },
        {
          id: "american-kennel-club-working-group-health-testing-requirements",
          role: "verified",
          locator: "Doberman Pinscher: recommended health tests",
        },
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile: health concerns",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Health risks and screening recommendations are not a diagnosis and do not establish that an individual dog will develop a condition.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "doberman-pinscher-club-america-health-statement",
          role: "verified",
          locator: "Club health statement: cardiomyopathy, thyroid, liver, cervical instability, von Willebrand disease, eye and hip concerns",
        },
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "verified",
          locator: "Breed profile: health concerns including DCM, vWD, hip dysplasia, progressive retinal atrophy and hypothyroidism",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Conditions are included as recognised concerns, not as a claim about prevalence in all Dobermans.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General veterinary prevention guidance. Breed-specific screening should be discussed with a veterinarian.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-working-group-health-testing-requirements",
          role: "verified",
          locator: "Doberman Pinscher: hip, cardiac, ophthalmologist, thyroid and vWD tests",
        },
        {
          id: "doberman-pinscher-club-america-health-statement",
          role: "verified",
          locator: "Club health statement: cardiac, thyroid, vWD, eye and hip screening guidance",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Screening recommendations can change; confirm current requirements with the breed club and veterinarian. A normal result does not guarantee future health.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine dental-care advice.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General ear monitoring advice.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General skin inspection advice.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability depends on support, training commitment, activity and individual temperament; no universal yes/no value is recorded.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability depends on the individual dog, child behaviour, supervision and household experience.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability depends on mobility, support, activity preferences and the individual dog.",
    },

    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile: exercise and working traits",
        },
      ],
      verifiedOn: null,
      note: "Editorial matching guidance based on activity and training needs.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Apartment living depends on exercise, enrichment, noise management and the individual dog.",
    },

    "suitability.idealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile: activity and working traits",
        },
      ],
      verifiedOn: null,
      note: "Editorial matching guidance, not a guarantee of compatibility.",
    },

    "suitability.notIdealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile: activity and training needs",
        },
      ],
      verifiedOn: null,
      note: "Editorial matching guidance, not a guarantee of incompatibility.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "FCI standard: history, classification and working use",
        },
      ],
      verifiedOn: "2026-10-23",
      note: null,
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "FCI standard: classification, colour and temperament",
        },
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "verified",
          locator: "Breed profile: lifespan, coat, health and activity",
        },
        {
          id: "doberman-pinscher-club-america-health-statement",
          role: "verified",
          locator: "Breed-club health guidance",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Answers are original summaries and distinguish registry standards, health guidance and general care advice.",
    },
  },

  updatedOn: "2026-10-23",
};
