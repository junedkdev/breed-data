import type { Breed } from "../schema/breed.types";

export const boxer: Breed = {
  slug: "boxer",
  name: "Boxer",
  scientificName: null,

  alternateNames: [
    "Deutscher Boxer",
    "German Boxer",
  ],

  group:
    "FCI Group 2 — Pinscher and Schnauzer type, Molossoid breeds, Swiss Mountain and Cattle Dogs; Section 2.1 — Molossoid breeds, mastiff type; with working trial",

  origin: {
    country: "Germany",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chata_the_Boxer.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Chata_the_Boxer.jpg",
      title: "Chata the Boxer.jpg",
      description: "A female Boxer named Chata.",
      creator: "Tomascastelazo",
      uploader: "Tomascastelazo",
      capturedOn: "2015-09-27",
      uploadedOn: "2015-09-28",
      width: 3164,
      height: 3812,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "© Tomas Castelazo, www.tomascastelazo.com / Wikimedia Commons / CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Photo: “Chata the Boxer.jpg” by Tomascastelazo. No changes made.",
      restrictions: null,
      metadataCheckedOn: "2026-11-07",
    },
  ],

  overview: {
    summary:
      "The Boxer is a medium-sized, muscular German working breed recognised for its square build, short glossy coat, broad muzzle and lively expression. It combines an affectionate, playful nature with confidence and alertness. Historically developed from hunting dogs used to seize and hold game, the Boxer later became valued as a companion, guard and working dog. It needs regular activity, close interaction with its household and thoughtful management in hot weather.",

    description:
      "A well-built Boxer has a compact, square outline, strong bone and clearly developed muscles. Its short coat lies close to the body and is usually fawn or brindle, with a characteristic dark mask. The broad muzzle, undershot jaw and expressive dark eyes give the breed its distinctive appearance. Natural ears lie close to the cheeks and turn forward when the dog is attentive; the tail is naturally left at its normal length under the FCI standard. Boxers are energetic and people-oriented, often retaining a playful attitude into adulthood. They generally respond well to consistent, reward-based training, but their strength and enthusiasm make early manners, impulse control and supervised exercise important.",

    history:
      "The Boxer developed in Germany from the small Brabant Bullenbeisser, a type of hunting dog used to seize and hold game until the huntsman arrived. Selection originally placed considerable emphasis on working ability and a powerful, broad muzzle. Over time, the breed developed into a versatile dog used for companionship, guarding and other working roles. The FCI recognises Germany as its country of origin and classifies the Boxer among the mastiff-type Molossoid breeds.",

    originalPurpose:
      "Seizing and holding game during hunts, followed by use as a companion, guard and working dog.",

    currentRoles: [
      "Family companion",
      "Obedience and rally activities",
      "Agility and other suitable dog sports",
      "Tracking and scent-based activities",
      "Conformation showing",
      "Working and service-related activities where individually suitable",
    ],
  },

  physical: {
    sizeCategory: "Medium-sized, muscular and square-built",

    height: {
      // FCI Standard No. 144 publishes these ranges in centimetres.
      unit: "cm",
      male: { min: 57, max: 63 },
      female: { min: 53, max: 59 },
    },

    weight: {
      // FCI states: males over 30 kg at approximately 60 cm;
      // females about 25 kg at approximately 56 cm.
      // The source does not provide a complete range.
      unit: "kg",
      male: { min: 30, max: null },
      female: { min: null, max: 25 },
    },

    lifespanYears: { min: 10, max: 12 },

    coatType:
      "Short, hard, glossy coat that lies close to the body.",

    coatLength:
      "Short and close-fitting, with a smooth appearance.",

    coatColors: [
      "Fawn, ranging from light fawn to dark deer red",
      "Brindle on a fawn background",
      "Fawn or brindle with a black mask",
      "Fawn or brindle with white markings",
    ],

    sheddingLevel: null,

    droolingLevel: null,

    distinctiveFeatures: [
      "Medium-sized body with a compact, square outline",
      "Strong bone and clearly developed muscles",
      "Broad, powerful muzzle",
      "Distinctive undershot lower jaw",
      "Dark eyes with dark rims",
      "Short, hard and glossy coat",
      "Fawn or brindle colouring with a black mask",
      "Deep chest reaching to the elbows",
      "Natural ears that lie close to the cheeks",
      "Naturally carried tail of normal length",
      "Lively, powerful movement",
    ],
  },

  temperament: {
    traits: [
      "Affectionate and devoted to familiar people",
      "Loyal to its household",
      "Alert and watchful",
      "Self-confident",
      "Courageous",
      "Playful and friendly during interaction",
      "Calm and balanced when well-adjusted",
      "Can be distrustful of unfamiliar people",
      "Intelligent and responsive to training",
      "Energetic and enthusiastic",
    ],

    // Editorial estimates on a 1–5 scale, not standardised test results.
    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 4,
      independence: 2,
      trainability: 4,
      barking: 3,
      energy: 5,
    },
  },

  care: {
    exercise: {
      level:
        "High. Boxers are active, playful dogs that benefit from daily physical activity and mental challenges. Exercise should be adjusted for age, health and temperature.",

      minutesPerDay: null,

      activities: [
        "Daily walks with opportunities to explore",
        "Reward-based obedience training",
        "Fetch and interactive play",
        "Suitable agility and fitness activities",
        "Tracking and scent games",
        "Food puzzles and other enrichment activities",
        "Supervised play with compatible dogs",
      ],
    },

    grooming: {
      level: "Low",

      brushing:
        "The short, close-fitting coat is relatively easy to maintain. Brush or rub it with a soft grooming mitt or rubber brush about once or twice a week to remove loose hair and keep the coat looking tidy. Check the skin during grooming, especially around facial folds.",

      bathing:
        "Bathe when necessary using a dog-appropriate shampoo. Rinse thoroughly and dry the coat and facial folds carefully. Avoid frequent unnecessary bathing, which can dry or irritate the skin.",

      notes: [
        "The short coat generally needs only occasional brushing.",
        "Check facial folds for moisture, redness or irritation.",
        "Trim nails regularly if they do not wear down naturally.",
        "Brush teeth frequently with dog-specific dental products.",
        "Check ears regularly for redness, odour or discharge.",
        "Provide shade and fresh water during warm weather.",
        "Avoid strenuous exercise during hot parts of the day.",
      ],
    },

    training: {
      difficulty:
        "Moderate. Boxers are intelligent and often willing to work with their people, but their strength, enthusiasm and playful energy make consistent training and good impulse control important.",

      tips: [
        "Use positive reinforcement and clear, consistent cues.",
        "Start basic manners and lead training early.",
        "Teach calm greetings and discourage jumping through reward-based methods.",
        "Practise loose-lead walking before the dog becomes physically strong.",
        "Use short, varied sessions to maintain engagement.",
        "Teach reliable recall in controlled environments.",
        "Reward calm behaviour around visitors, dogs and everyday distractions.",
        "Include mental activities such as scent games and food puzzles.",
        "Avoid strenuous exercise in hot or humid conditions.",
        "Supervise play and teach the dog to settle after excitement.",
      ],

      socialization:
        "Introduce puppies gradually and positively to different people, calm dogs, handling, household sounds and everyday environments. Reward relaxed behaviour and avoid forcing interactions. Continue practising calm greetings, lead manners and appropriate play as the dog matures. Supervise interactions with children and other animals, and allow the dog time to rest when overstimulated.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: null,

      climates: [
        "Best managed in moderate temperatures.",
        "Needs careful protection from hot and humid weather.",
        "Should not be left outdoors in extreme heat or cold.",
        "Provide shade, ventilation and access to fresh water.",
        "Plan exercise for cooler parts of the day in warm climates.",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate to the dog's life stage, body condition, activity and veterinary needs.",

    feedingFrequency: {
      puppy:
        "Feed a complete puppy diet in age-appropriate meals. Adjust portions as the puppy grows and follow veterinary guidance and the food manufacturer's instructions.",

      adult:
        "Provide measured meals on a consistent schedule. Adjust portions according to body condition, activity and individual needs. Avoid unrestricted feeding if it causes excess weight gain.",

      senior:
        "Choose food and portions according to the older dog's body condition, activity and medical needs. Ask a veterinarian about dietary adjustments if mobility, weight or health changes.",
    },

    guidelines:
      "Measure food portions and monitor body condition regularly. Keep fresh water available, count treats as part of the daily food allowance and make dietary changes gradually unless a veterinarian advises otherwise. Active dogs may need different portions from less active dogs. Seek veterinary advice for persistent digestive problems, weight changes or feeding difficulties.",

    considerations: [
      "Maintain a healthy body condition and avoid excess weight.",
      "Adjust portions to age, activity and individual metabolism.",
      "Provide fresh drinking water throughout the day.",
      "Count treats and chews as part of the daily food allowance.",
      "Use a complete diet suitable for the dog's life stage.",
      "Discuss persistent digestive problems or weight changes with a veterinarian.",
    ],

    note:
      "This is general canine nutrition guidance, not a Boxer-specific feeding prescription. Exact portions depend on the individual dog's age, body condition, activity and health.",
  },

  health: {
    overview:
      "Boxers have several recognised health concerns, particularly involving the heart and cancer. Research using veterinary records has also identified ear disorders, tumours and eye ulcers among commonly recorded problems in the breed. Their relatively short muzzle can contribute to breathing and heat-management concerns in some individuals. Breeding dogs may be screened for hip and elbow conditions, thyroid disease, cardiac disorders and certain inherited conditions. Screening recommendations are intended to support responsible breeding and do not mean that every Boxer will develop these conditions. Regular veterinary examinations and attention to changes in breathing, exercise tolerance, skin, eyes and general behaviour are important.",

    commonConditions: [
      "Cardiac disease, including aortic stenosis and arrhythmogenic right ventricular cardiomyopathy (ARVC).",
      "Tumours, including mast cell tumours and lymphoma.",
      "Ear disorders.",
      "Corneal ulcers and other eye problems.",
      "Hip dysplasia.",
      "Brachycephalic obstructive airway syndrome (BOAS) or other breathing difficulties in some dogs with shortened muzzles.",
      "Hypothyroidism.",
      "Degenerative myelopathy.",
    ],

    preventiveCare: [
      "Arrange regular veterinary examinations and age-appropriate preventive care.",
      "Ask the veterinarian to assess heart sounds during routine examinations.",
      "Discuss cardiac screening and monitoring, particularly if there is a family history of heart disease.",
      "Ask breeders for documented hip, elbow, thyroid and cardiac screening results.",
      "Discuss the relevance of ARVC and degenerative myelopathy DNA tests with a veterinarian or genetic specialist.",
      "Monitor for new lumps, skin changes or unexplained swelling and have them checked promptly.",
      "Seek veterinary attention for eye pain, squinting, discharge or cloudiness.",
      "Monitor breathing and exercise tolerance, especially in warm weather.",
      "Maintain a healthy body condition and suitable daily activity.",
    ],

    recommendedScreenings: [
      "Hip evaluation for breeding dogs.",
      "Elbow evaluation for breeding dogs.",
      "Thyroid evaluation for breeding dogs.",
      "Aortic stenosis and subaortic stenosis cardiac evaluation.",
      "Aortic valve disease evaluation.",
      "Arrhythmogenic right ventricular cardiomyopathy (ARVC) DNA testing.",
      "Annual Holter monitoring for Boxer cardiomyopathy in breeding dogs.",
      "Degenerative myelopathy (common variant) DNA testing.",
    ],

    dentalCare:
      "Brush the teeth regularly with dog-specific toothpaste and a suitable toothbrush. Check the mouth during routine veterinary examinations, especially if there is bad breath, discomfort, drooling or difficulty eating.",

    earCare:
      "Check the ears regularly for redness, odour, discharge or scratching. Clean only when necessary with a dog-safe product recommended by a veterinarian. Seek veterinary advice if irritation or discharge persists.",

    skinCare:
      "Check the skin during grooming for irritation, lumps, unusual growths, redness or changes around facial folds. Boxers can develop skin problems and tumours, so have persistent or changing lesions assessed by a veterinarian rather than assuming they are harmless.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Active households that can provide daily exercise and interaction",
      "People who enjoy training and interactive play",
      "Families prepared to supervise dog-child interactions",
      "Owners who want an affectionate and involved companion",
      "People willing to manage heat exposure carefully",
      "Owners prepared for regular veterinary attention to breed-related health risks",
    ],

    notIdealFor: [
      "People who want a low-energy or minimally active dog",
      "Households unable to provide regular companionship and enrichment",
      "Owners who cannot manage a strong, enthusiastic dog on a lead",
      "People who expect the dog to tolerate strenuous activity in hot weather",
      "Owners unwilling to monitor health changes and maintain regular veterinary care",
    ],
  },

  funFacts: [
    "The Boxer originated in Germany.",
    "Its immediate ancestor is described as the small Brabant Bullenbeisser.",
    "The breed was historically used to seize and hold game during hunts.",
    "The Boxer is classified by the FCI among mastiff-type Molossoid breeds.",
    "The breed's characteristic head includes a broad muzzle and an undershot jaw.",
    "The FCI standard recognises fawn and brindle coat colours, both with a black mask.",
    "The Boxer has been used as a companion, guard and working dog.",
  ],

  faq: [
    {
      question: "Where does the Boxer dog breed originate?",
      answer:
        "The Boxer originated in Germany. Its development is associated with the small Brabant Bullenbeisser, a type of hunting dog used to seize and hold game.",
    },
    {
      question: "What is the Boxer dog's temperament?",
      answer:
        "The Boxer is generally described as confident, loyal, alert and playful. It is usually affectionate with its household and may be cautious around unfamiliar people. Individual temperament depends on genetics, socialisation, training and experience.",
    },
    {
      question: "How tall is a Boxer?",
      answer:
        "The FCI breed standard gives a height of 57–63 cm for males and 53–59 cm for females, measured at the withers.",
    },
    {
      question: "How much does a Boxer weigh?",
      answer:
        "The FCI standard states that males weigh over 30 kg at a height of approximately 60 cm. Females weigh about 25 kg at a height of approximately 56 cm. These are reference figures, not complete weight ranges.",
    },
    {
      question: "What colours do Boxers come in?",
      answer:
        "The recognised colours are fawn and brindle. Both have a black mask, and white markings may also be present.",
    },
    {
      question: "How long does a Boxer live?",
      answer:
        "The American Kennel Club gives a typical life expectancy of 10–12 years. Individual lifespan varies with genetics, health, weight and care.",
    },
    {
      question: "Does a Boxer need a lot of exercise?",
      answer:
        "Yes. Boxers are active dogs that benefit from daily walks, play, training and mental enrichment. Exercise should be adjusted for age and health, and strenuous activity should be avoided during hot weather.",
    },
    {
      question: "Is a Boxer easy to train?",
      answer:
        "Boxers are intelligent and often willing to learn, but their enthusiasm and strength make consistency important. Positive reinforcement, early manners training and calm lead skills are useful.",
    },
    {
      question: "Are Boxers good family dogs?",
      answer:
        "Many Boxers are affectionate and playful with their families. As with any strong, energetic dog, interactions with children should be supervised and the dog should be taught calm behaviour and appropriate play.",
    },
    {
      question: "What health problems are Boxers prone to?",
      answer:
        "Important concerns include heart disease, tumours, ear disorders, eye ulcers, hip dysplasia and breathing difficulties in some dogs. The risk varies between individuals. Regular veterinary care and appropriate health screening are important.",
    },
    {
      question: "What health tests should Boxer breeders consider?",
      answer:
        "Breed-club guidance for breeding dogs includes hip and elbow evaluations, thyroid testing, cardiac assessments, Holter monitoring, and DNA tests for ARVC and degenerative myelopathy. A veterinarian or relevant specialist should advise on the appropriate tests and their interpretation.",
    },
    {
      question: "Can a Boxer live in a hot climate?",
      answer:
        "Boxers need careful heat management. Their short muzzle can make breathing and cooling more difficult, so provide shade, ventilation and fresh water, and schedule exercise during cooler periods. Avoid strenuous activity in hot or humid conditions.",
    },
  ],

  references: [
    "fci-boxer-standard-144",
    "akc-boxer-breed-profile",
    "american-boxer-club-health-screening",
    "rvc-vetcompass-boxer-study-2023",
    "rvc-boxer-health-study-summary-2023",
    "pdsa-boxer-breed-health",
    "wikimedia-chata-boxer-photo",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator: "Breed title: Deutscher Boxer (Boxer)",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "The alternate German name follows the official breed title.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The breed standards and breed profiles reviewed do not establish a separate scientific name for the Boxer breed.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator: "FCI classification: Group 2, Section 2.1, with working trial",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Uses the FCI classification.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator: "Origin: Germany",
        },
      ],
      verifiedOn: "2026-11-07",
      note: null,
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The official standard identifies Germany as the country of origin but does not specify one region as the breed's origin.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator:
            "Utilization, historical summary, general appearance and behaviour/temperament",
        },
        {
          id: "akc-boxer-breed-profile",
          role: "cited",
          locator: "Breed overview, temperament and care",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "Descriptions are original summaries of the breed's documented history, purpose and characteristics.",
    },

    physical: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator:
            "General appearance, proportions, head, body, coat, colour, size and weight",
        },
        {
          id: "akc-boxer-breed-profile",
          role: "cited",
          locator: "Breed size and lifespan information",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "Physical descriptions are based primarily on the official standard. Measurement fields have more specific evidence claims below.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator: "Size and weight: height at the withers, dogs 57–63 cm and females 53–59 cm",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "The published centimetre values are stored as written, without unit conversion.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator:
            "Size and weight: dogs over 30 kg at approximately 60 cm; bitches about 25 kg at approximately 56 cm",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "The standard gives reference weights rather than complete sex-specific weight ranges. The values are stored in kilograms as published.",
    },

    "physical.weight.male.max": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The standard gives a lower reference of over 30 kg for males but does not publish an upper weight limit.",
    },

    "physical.weight.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator:
            "Size and weight: bitches about 25 kg at approximately 56 cm",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "The value is approximate, as stated in the standard, and should not be interpreted as a strict maximum for every female.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boxer-breed-profile",
          role: "verified",
          locator: "Average sizes and life expectancy: 10–12 years",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "This is the published typical life-expectancy range, not a guarantee for an individual dog.",
    },

    "physical.sheddingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The reviewed breed-specific sources describe the short coat and grooming needs but do not establish a reliable shedding level.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A reliable breed-wide drooling level was not established. The standard's fault description is not treated as a quantified drooling assessment.",
    },

    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator: "Behaviour and temperament",
        },
        {
          id: "akc-boxer-breed-profile",
          role: "cited",
          locator: "Breed traits and personality",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "Breed-level descriptions do not guarantee the behaviour of an individual dog.",
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator: "Behaviour and temperament",
        },
        {
          id: "akc-boxer-breed-profile",
          role: "cited",
          locator: "Breed personality and temperament",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "Traits are paraphrased from the standard and breed profile.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "cited",
          locator: "Behaviour and temperament",
        },
        {
          id: "akc-boxer-breed-profile",
          role: "cited",
          locator: "Breed traits and characteristics",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial scores on a 1–5 scale. They are not results from standardised behavioural testing.",
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-boxer-breed-profile",
          role: "cited",
          locator: "Exercise, grooming and climate-related care",
        },
        {
          id: "pdsa-boxer-breed-health",
          role: "cited",
          locator: "Exercise, health and general care information",
        },
      ],
      verifiedOn: null,
      note:
        "Care advice combines Boxer-specific guidance with general dog-care recommendations.",
    },

    "care.exercise.level": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-boxer-breed-profile",
          role: "cited",
          locator: "Exercise: playful, high-energy breed needing ample daily activity",
        },
        {
          id: "pdsa-boxer-breed-health",
          role: "cited",
          locator: "Exercise needs and activity level",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial activity-level assessment. Exercise needs vary with age, health and temperature.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No single daily exercise duration is treated as a universal requirement for every Boxer.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boxer-breed-profile",
          role: "verified",
          locator: "Grooming: short coat and routine brushing guidance",
        },
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator: "Coat: short, hard, glossy and close-fitting",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "Coat type and basic grooming needs are source-backed. Nail and dental instructions are general care advice.",
    },

    "care.training": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "cited",
          locator: "Behaviour and temperament: trainability and working character",
        },
        {
          id: "akc-boxer-breed-profile",
          role: "cited",
          locator: "Training and breed characteristics",
        },
      ],
      verifiedOn: null,
      note:
        "Training recommendations are breed-informed guidance and should be adapted to the individual dog.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A universal apartment-suitability rating is not established by the sources reviewed.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A yard may be useful but is not established as a universal requirement or suitability measure.",
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boxer-breed-profile",
          role: "verified",
          locator: "Care: limited tolerance for extreme heat or cold",
        },
        {
          id: "pdsa-boxer-breed-health",
          role: "cited",
          locator: "Brachycephalic health and heat-management advice",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "Climate guidance reflects the breed's reported sensitivity to temperature extremes and general heat-safety advice.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A reliable breed-wide alone-time tolerance was not established.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General canine nutrition advice. No Boxer-specific feeding quantity or diet prescription was established.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "rvc-vetcompass-boxer-study-2023",
          role: "verified",
          locator:
            "Study of demography, mortality and common disorders in Boxer dogs under primary veterinary care",
        },
        {
          id: "rvc-boxer-health-study-summary-2023",
          role: "verified",
          locator:
            "Research summary: common disorders and health priorities in UK Boxer dogs",
        },
        {
          id: "pdsa-boxer-breed-health",
          role: "cited",
          locator: "Boxer health concerns",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "Health information is based on veterinary research and breed-health guidance. It describes risks, not diagnoses or predictions for an individual dog.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rvc-vetcompass-boxer-study-2023",
          role: "verified",
          locator: "Common disorders recorded in the study population",
        },
        {
          id: "rvc-boxer-health-study-summary-2023",
          role: "verified",
          locator: "Summary of ear disorders, tumours and eye ulcers",
        },
        {
          id: "pdsa-boxer-breed-health",
          role: "cited",
          locator: "Potential breathing, hip, eye and heart conditions",
        },
        {
          id: "american-boxer-club-health-screening",
          role: "cited",
          locator: "Breeding health screening: cardiac, thyroid, hip, elbow and genetic conditions",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "The list combines disorders reported in veterinary research with conditions addressed by breed-club screening guidance. It is not a ranked prevalence list.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-boxer-club-health-screening",
          role: "verified",
          locator:
            "Testing and Reporting Guidelines: hip/elbow, thyroid, aortic valve, AS/SAS, Holter, ARVC and DM",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "These recommendations apply to dogs in active breeding programmes. The club advises that tests and results be interpreted with a veterinarian or specialist.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-boxer-club-health-screening",
          role: "cited",
          locator:
            "Recommendation for heart auscultation at veterinary visits and specialist assessment of abnormal findings",
        },
        {
          id: "pdsa-boxer-breed-health",
          role: "cited",
          locator: "Health concerns and veterinary screening advice",
        },
      ],
      verifiedOn: null,
      note:
        "General preventive care informed by breed-health guidance. Screening schedules should be decided with the dog's veterinarian.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-boxer-breed-profile",
          role: "cited",
          locator: "Grooming: regular dental care",
        },
      ],
      verifiedOn: null,
      note: "General canine dental-care advice.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "rvc-boxer-health-study-summary-2023",
          role: "cited",
          locator: "Ear disorders among commonly recorded Boxer conditions",
        },
      ],
      verifiedOn: null,
      note:
        "Regular checks are sensible because ear disorders are reported in the breed; cleaning should be guided by veterinary advice.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "rvc-vetcompass-boxer-study-2023",
          role: "cited",
          locator: "Common disorders and tumour-related health findings",
        },
        {
          id: "pdsa-boxer-breed-health",
          role: "cited",
          locator: "Skin problems and facial-fold irritation",
        },
      ],
      verifiedOn: null,
      note:
        "General skin-care advice with attention to lumps, skin changes and facial-fold irritation.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-boxer-breed-profile",
          role: "cited",
          locator: "Family, activity and care characteristics",
        },
        {
          id: "pdsa-boxer-breed-health",
          role: "cited",
          locator: "Exercise needs and family companion information",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial lifestyle guidance based on activity needs, temperament and health management. It is not a validated suitability test.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "First-time-owner suitability depends on the person's experience, training support and the individual dog's behaviour.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Suitability for senior owners depends on individual health, strength, lifestyle and support.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A universal apartment-living rating was not established by the sources reviewed.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator: "Historical summary, origin and utilization",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Historical and breed-standard facts are paraphrased.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator:
            "Origin, history, classification, temperament, coat, colour, height and weight",
        },
        {
          id: "akc-boxer-breed-profile",
          role: "verified",
          locator: "Life expectancy and breed-care information",
        },
        {
          id: "american-boxer-club-health-screening",
          role: "verified",
          locator: "Breeding health-screening recommendations",
        },
        {
          id: "rvc-vetcompass-boxer-study-2023",
          role: "cited",
          locator: "Common disorders and mortality research",
        },
      ],
      verifiedOn: "2026-11-07",
      note:
        "Answers distinguish official standard measurements, published life-expectancy guidance, health research and breeding-screening recommendations.",
    },
  },

  updatedOn: "2026-11-07",
};
