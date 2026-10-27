import type { Breed } from "../schema/breed.types";

export const norfolk_terrier: Breed = {
  slug: "norfolk-terrier",
  name: "Norfolk Terrier",
  scientificName: "Canis lupus familiaris",
  alternateNames: ["Norfolk"],
  group: "Terrier Group",
  origin: {
    country: "England",
    region: null,
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Picture_of_Norfolk_Terrier.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Picture_of_Norfolk_Terrier.jpg",
      title: "Picture of Norfolk Terrier",
      description: "A photograph of a Norfolk Terrier.",
      creator: "Pingugu",
      uploader: "Pingugu",
      capturedOn: "2025-10-12",
      uploadedOn: "2026-09-23",
      width: 2860,
      height: 3814,
      licenseId: "cc0-1.0",
      attribution:
        "Photograph by Pingugu, Wikimedia Commons; dedicated to the public domain under CC0 1.0. Credit is appreciated but not required.",
      restrictions: null,
      metadataCheckedOn: "2026-10-27",
    },
  ],
  overview: {
    summary:
      "The Norfolk Terrier is a small, sturdy British working terrier with folded ears, a weather-resistant wiry coat, and a bold, lively personality. It was developed to work around farms and pursue small vermin, and it still combines a companionable nature with strong curiosity and hunting instincts.",
    description:
      "Compact and low to the ground, the Norfolk Terrier has a broad head, small dark eyes, forward-folding V-shaped ears, short powerful legs, and a hard outer coat over a softer undercoat. Its appearance is practical rather than delicate: the breed was developed to move confidently over rough ground and tackle small quarry. Norfolk Terriers are commonly described as alert, fearless, affectionate, and fun-loving. They can be sociable for terriers, but their prey drive means that reliable management around wildlife and small animals remains important. Daily activity, reward-based training, regular coat care, and close family contact help this energetic little dog thrive.",
    history:
      "The Norfolk Terrier developed in Britain as a small working terrier used around farms and stables to control rats and other small vermin. For many years, Norfolk and Norwich Terriers were shown together as varieties of the Norwich Terrier, distinguished chiefly by ear carriage. The drop-eared variety became the Norfolk Terrier after the two types were separated and cross-breeding was discouraged during the twentieth century. The breed retains the compact build, hardy coat, and tenacious working character associated with its terrier origins.",
    originalPurpose:
      "Working terrier used to pursue and control rats, foxes, and other small vermin, both alone and in groups.",
    currentRoles: [
      "Family companion",
      "Small-dog activity and walking partner",
      "Earthdog and other suitable terrier activities",
      "Obedience and agility participant",
      "Alert household watchdog",
    ],
  },
  physical: {
    sizeCategory: "Small",
    height: {
      unit: "in",
      male: { min: 9, max: 10 },
      female: { min: 9, max: 10 },
    },
    weight: {
      unit: "lb",
      male: { min: 11, max: 12 },
      female: { min: 11, max: 12 },
    },
    lifespanYears: { min: 12, max: 16 },
    coatType:
      "Double coat with a hard, wiry, straight outer coat and a soft insulating undercoat.",
    coatLength:
      "Medium length. The coat lies close to the body, is longer and rougher around the neck and shoulders, and is shorter and smoother on the head and ears, with modest eyebrows and whiskers.",
    coatColors: [
      "All shades of red",
      "Wheaten",
      "Black and tan",
      "Grizzle",
    ],
    sheddingLevel:
      "Sheds. Regular brushing and appropriate hand-stripping help manage loose coat and preserve the characteristic wiry texture.",
    droolingLevel: null,
    distinctiveFeatures: [
      "Small, compact, low-set body with good bone and substance.",
      "Distinctive V-shaped ears that fold forward close to the cheeks.",
      "Broad skull, strong wedge-shaped muzzle, and alert dark eyes.",
      "Short, powerful legs suited to moving through rough terrain.",
      "Hard, wiry outer coat with a softer insulating undercoat.",
      "A lively, fearless expression and confident working-terrier character.",
    ],
  },
  temperament: {
    traits: [
      "Alert",
      "Fearless",
      "Lively and fun-loving",
      "Affectionate with familiar people",
      "Confident and determined",
      "Curious and active",
      "Often more sociable than some terrier breeds",
      "May pursue small animals because of its prey drive",
      "Can be persistent when interested in a scent or moving target",
    ],
    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 3,
      independence: 3,
      trainability: 4,
      barking: 3,
      energy: 4,
    },
  },
  care: {
    exercise: {
      level:
        "Moderate to high for its size. Daily walks, sniffing opportunities, play, and short training sessions help satisfy the breed's active working-terrier nature. The Royal Kennel Club lists exercise needs of up to one hour per day.",
      minutesPerDay: null,
      activities: [
        "Daily walks with time to sniff and explore",
        "Reward-based obedience and recall practice",
        "Scent-search and food-puzzle games",
        "Fetch and interactive play in a secure area",
        "Agility or other suitable small-dog sports",
        "Earthdog or terrier activities where available and appropriate",
      ],
    },
    grooming: {
      level: "Moderate to high",
      brushing:
        "Brush and comb the coat regularly, at least weekly, paying attention to the wiry outer coat and softer undercoat. Hand-stripping at suitable intervals helps remove dead outer hairs and preserve coat texture; seek an experienced groomer if you are unfamiliar with the technique.",
      bathing:
        "Bathe when necessary rather than on a rigid schedule. Frequent unnecessary bathing or inappropriate clipping may affect the natural texture of the wiry coat.",
      notes: [
        "Hand-stripping is commonly used to maintain the traditional hard coat.",
        "Routine clipping can soften the coat and alter its texture and colour appearance.",
        "Check ears regularly for wax, odour, redness, or irritation.",
        "Trim nails as needed to prevent overgrowth and discomfort.",
        "Brush teeth regularly using dog-specific toothpaste.",
        "Check the coat and skin after outdoor activity for debris, ticks, or irritation.",
      ],
    },
    training: {
      difficulty:
        "Moderate. Norfolk Terriers are intelligent and can respond well to positive training, but their curiosity and hunting instincts can compete with handler attention.",
      tips: [
        "Use short, upbeat sessions with food rewards, play, and clear criteria.",
        "Practise recall in secure areas before relying on it near wildlife or moving animals.",
        "Teach loose-lead walking and attention cues early.",
        "Reward calm greetings and reinforce appropriate behaviour around other dogs.",
        "Provide legal outlets for digging, searching, and terrier-style problem-solving.",
        "Avoid harsh corrections; use consistency, management, and rewards to build reliable habits.",
      ],
      socialization:
        "Introduce puppies gradually and positively to different people, dogs, surfaces, sounds, handling, and everyday environments. Supervise interactions with children and other animals, and allow the dog space to disengage. Continue practising calm behaviour and confidence throughout adulthood.",
    },
    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: [
        "Temperate climates",
        "Cool climates with ordinary protection from severe weather",
        "Warmer climates when shade, fresh water, ventilation, and cooler exercise times are provided",
      ],
      aloneTimeTolerance:
        "Individual tolerance varies. Gradually teach calm alone time and provide exercise and enrichment before departures. A routine involving prolonged isolation every day may be unsuitable for a dog that expects regular activity and companionship.",
    },
  },
  nutrition: {
    dietType:
      "Complete and balanced dog food appropriate to life stage, body condition, activity, and veterinary needs.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Use the chosen food's feeding guide as a starting point and adjust portions for the dog's body condition, activity, and health. Measure meals, account for training treats, and keep fresh water available. Ask a veterinarian for advice when changing diets or managing a medical condition.",
    considerations: [
      "Monitor body condition and adjust portions to avoid excess weight.",
      "Include treats in the daily calorie allowance.",
      "Choose food suitable for the dog's life stage and activity.",
      "Introduce food changes gradually unless veterinary advice indicates otherwise.",
      "Seek veterinary advice for persistent digestive problems, appetite changes, or unexplained weight changes.",
    ],
    note:
      "A single meal frequency or portion size cannot be reliably prescribed for every Norfolk Terrier; needs depend on age, food energy density, activity, body condition, and health.",
  },
  health: {
    overview:
      "Norfolk Terriers are often described as hardy, but inherited health concerns can occur. Breed-club guidance recommends screening for inherited eye disease, mitral valve heart disease, and patellar luxation. Hip dysplasia screening is also discussed, while ichthyosis DNA testing is described as optional in the cited breed-club statement. These recommendations are intended to support responsible breeding and do not mean an individual dog has or will develop a condition.",
    commonConditions: [
      "Patellar luxation, in which the kneecap can move out of its normal position.",
      "Mitral valve heart disease, which affects a heart valve and should be assessed by a veterinarian.",
      "Inherited eye diseases; a specialist ophthalmic examination can help identify relevant abnormalities.",
      "Hip dysplasia, a developmental joint condition for which the breed-club statement describes screening as optional.",
      "Ichthyosis, a skin disorder for which the cited breed-club statement mentions optional DNA testing.",
    ],
    preventiveCare: [
      "Ask breeders for documented cardiac, eye, and patella screening results for the parents.",
      "Ask whether hip evaluations and ichthyosis DNA testing are appropriate for the specific breeding lines.",
      "Keep regular veterinary examinations and parasite prevention up to date.",
      "Maintain a healthy body condition and provide regular, age-appropriate exercise.",
      "Seek veterinary advice for a new heart murmur, lameness, persistent skin scaling, or changes in vision.",
      "Treat screening recommendations as risk management, not as a diagnosis or guarantee of future health.",
    ],
    recommendedScreenings: [
      "Cardiac examination, including assessment appropriate for mitral valve disease.",
      "Ophthalmologist examination for inherited eye disease.",
      "Patella evaluation for patellar luxation.",
      "Hip evaluation may be discussed with the breeder and veterinarian; the cited breed-club statement describes this as optional.",
      "Ask whether ichthyosis DNA testing is appropriate; the cited breed-club statement describes it as optional.",
    ],
    dentalCare:
      "Brush teeth regularly with dog-specific toothpaste and arrange routine veterinary dental checks. Seek advice for persistent bad breath, gum inflammation, oral pain, or difficulty chewing.",
    earCare:
      "Check the folded ears regularly for wax, debris, odour, redness, or repeated scratching. Clean only as needed with a veterinarian-approved product and seek advice if irritation persists.",
    skinCare:
      "Check skin and coat during brushing, especially after outdoor activity. Seek veterinary advice for persistent itching, redness, sores, or scaling that does not resolve.",
  },
  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: true,
    idealFor: [
      "Owners who enjoy daily walks, play, and training",
      "Households looking for a small but robust companion",
      "People willing to manage terrier instincts and practise recall",
      "Families prepared to supervise children and teach respectful handling",
      "Owners who can provide regular coat maintenance",
    ],
    notIdealFor: [
      "Households that expect a low-energy dog with little need for activity",
      "Owners who need a dog to roam off-lead around wildlife without reliable recall",
      "Homes with small animals where prey-drive management is not feasible",
      "People unwilling to maintain a wiry coat or arrange appropriate grooming",
      "Households where the dog would routinely be left alone for long periods without enrichment",
    ],
  },
  funFacts: [
    "The Norfolk Terrier is distinguished from its close relative, the Norwich Terrier, by its folded ears; the Norwich Terrier has erect ears.",
    "Norfolk and Norwich Terriers were once treated as two ear varieties of the same breed.",
    "Its hard coat and short legs reflect its origins as a practical working terrier.",
    "Although small, the Norfolk Terrier was bred for demanding work involving small vermin and rough terrain.",
  ],
  faq: [
    {
      question: "Where does the Norfolk Terrier come from?",
      answer:
        "The Norfolk Terrier developed in Britain as a small working terrier used around farms and stables to control small vermin.",
    },
    {
      question: "How can I distinguish a Norfolk Terrier from a Norwich Terrier?",
      answer:
        "The clearest distinction is ear carriage: Norfolk Terriers have ears that fold forward, while Norwich Terriers have erect ears.",
    },
    {
      question: "How tall is a Norfolk Terrier?",
      answer:
        "The American Kennel Club standard lists a mature height of 9 to 10 inches at the withers. Individual dogs may vary.",
    },
    {
      question: "How much does a Norfolk Terrier weigh?",
      answer:
        "The American Kennel Club standard gives a general weight of 11 to 12 pounds, or a weight appropriate to the individual dog's structure and balance. It does not publish a separate male and female range.",
    },
    {
      question: "How long does a Norfolk Terrier live?",
      answer:
        "The American Kennel Club lists a life expectancy of 12 to 16 years. An individual dog's lifespan depends on genetics, health, and care.",
    },
    {
      question: "Does a Norfolk Terrier need a lot of exercise?",
      answer:
        "It is an active working terrier and benefits from daily walks, play, sniffing, and training. The Royal Kennel Club lists exercise needs of up to one hour per day; adjust activity for age and health.",
    },
    {
      question: "Does the Norfolk Terrier shed?",
      answer:
        "Yes. Regular brushing and appropriate hand-stripping help manage the coat and maintain its traditional wiry texture.",
    },
    {
      question: "What health tests should I ask a breeder about?",
      answer:
        "Ask for documented cardiac, eye, and patella screening. The breed-club health statement also discusses optional hip evaluation and ichthyosis DNA testing. Confirm the current recommendations with a veterinarian or the national breed club.",
    },
    {
      question: "Can a Norfolk Terrier live in an apartment?",
      answer:
        "It can adapt to apartment living if it receives daily activity, training, and enrichment. Barking, prey-drive management, and the dog's individual ability to settle indoors should also be considered.",
    },
  ],
  references: [
    "american-kennel-club-norfolk-terrier-standard",
    "american-kennel-club-norfolk-terrier",
    "royal-kennel-club-norfolk-terrier-standard",
    "royal-kennel-club-norfolk-terrier-profile",
    "american-kennel-club-terrier-group-health-testing-requirements",
    "norfolk-terrier-club-health-statement",
    "commons-picture-of-norfolk-terrier-pingugu",
  ],
  evidence: {
    scientificName: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Conventional scientific designation for the domestic dog; it is not a breed-specific taxonomic distinction.",
    },
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-norfolk-terrier-standard",
          role: "verified",
          locator: "Breed name and historical description",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Norfolk is used as a shortened common name; Norfolk Terrier is the formal breed name used in the cited standard.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-norfolk-terrier-standard",
          role: "verified",
          locator: "Official standard and Terrier Group classification",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Uses the AKC group label; classifications can differ between registries.",
    },
    origin: {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-norfolk-terrier-profile",
          role: "verified",
          locator: "Historical account of the Norfolk and Norwich Terrier varieties",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "England is used as the country of origin in breed references; no narrower origin region is asserted.",
    },
    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The consulted sources did not establish a single specific region suitable for this field.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-norfolk-terrier-standard",
          role: "verified",
          locator: "General appearance, working purpose, size, coat and temperament",
        },
        {
          id: "royal-kennel-club-norfolk-terrier-standard",
          role: "cited",
          locator: "General appearance, characteristics, temperament and coat",
        },
        {
          id: "royal-kennel-club-norfolk-terrier-profile",
          role: "cited",
          locator: "Breed history and characteristics",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Descriptions are original paraphrases of breed-standard and kennel-club information.",
    },
    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-norfolk-terrier-standard",
          role: "verified",
          locator: "Size, proportion, substance, coat and colour",
        },
        {
          id: "american-kennel-club-norfolk-terrier",
          role: "cited",
          locator: "Breed profile: height, weight and life expectancy",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Measurement values follow the AKC-published units. The weight standard is general rather than sex-specific, so the same range is displayed for both sexes.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable consulted source established a breed-specific drooling rating.",
    },
    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-norfolk-terrier",
          role: "verified",
          locator: "Breed profile and description",
        },
        {
          id: "royal-kennel-club-norfolk-terrier-standard",
          role: "cited",
          locator: "Characteristics and temperament",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Traits describe common breed tendencies, not guaranteed behaviour in every individual.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-norfolk-terrier",
          role: "cited",
          locator: "Breed traits, exercise and temperament description",
        },
      ],
      verifiedOn: null,
      note: "Scores from 1 to 5 are editorial estimates for app comparison, not official or scientific measurements.",
    },
    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-norfolk-terrier",
          role: "cited",
          locator: "Exercise, grooming, training and nutrition",
        },
        {
          id: "royal-kennel-club-norfolk-terrier-profile",
          role: "cited",
          locator: "Exercise and grooming guidance",
        },
      ],
      verifiedOn: null,
      note: "Care recommendations are general guidance and should be adapted to the individual dog's age, health and behaviour.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The source provides a qualitative recommendation of up to one hour per day, not a precise universal exercise-minute range.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-norfolk-terrier",
          role: "cited",
          locator: "Breed care guidance",
        },
      ],
      verifiedOn: null,
      note: "General canine nutrition guidance, not an individual veterinary diet prescription.",
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal puppy meal frequency was established by the consulted breed-specific sources.",
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal adult meal frequency was established by the consulted breed-specific sources.",
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal senior meal frequency was established by the consulted breed-specific sources.",
    },
    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "norfolk-terrier-club-health-statement",
          role: "verified",
          locator: "Recommended inherited-condition screening and optional tests",
        },
        {
          id: "american-kennel-club-terrier-group-health-testing-requirements",
          role: "verified",
          locator: "Norfolk Terrier recommended tests: patella, cardiac and ophthalmologist examinations",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Screening guidance and reported inherited conditions are presented as risk-management information, not as claims that every dog is affected.",
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-norfolk-terrier",
          role: "cited",
          locator: "Activity, temperament, exercise and breed traits",
        },
        {
          id: "royal-kennel-club-norfolk-terrier-profile",
          role: "cited",
          locator: "Exercise, home size and breed characteristics",
        },
      ],
      verifiedOn: null,
      note: "Suitability is an editorial assessment based on typical breed needs; individual dogs and households vary.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal senior-owner suitability rating is assigned because owner mobility, support, and dog activity needs vary.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-norfolk-terrier-profile",
          role: "verified",
          locator: "History of Norfolk and Norwich Terrier recognition",
        },
        {
          id: "american-kennel-club-norfolk-terrier-standard",
          role: "cited",
          locator: "Working terrier description and ear carriage",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Historical and conformation details are paraphrased from the cited references.",
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-norfolk-terrier",
          role: "verified",
          locator: "Height, weight, lifespan and care profile",
        },
        {
          id: "norfolk-terrier-club-health-statement",
          role: "cited",
          locator: "Health-screening guidance",
        },
        {
          id: "royal-kennel-club-norfolk-terrier-profile",
          role: "cited",
          locator: "Breed history and exercise profile",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Answers paraphrase the cited sources and retain the units those sources publish.",
    },
  },
  updatedOn: "2026-10-27",
};
