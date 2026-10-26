import type { Breed } from "../schema/breed.types";

export const bull_terrier: Breed = {
  slug: "bull-terrier",
  name: "Bull Terrier",
  scientificName: null,

  alternateNames: [
    "English Bull Terrier",
  ],

  group: "Terrier Group; Bull-type Terriers",

  origin: {
    country: "Great Britain",
    region: "England",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bullterrier-3453301920.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Bullterrier-3453301920.jpg",
      title: "Bullterrier-3453301920.jpg",
      description: "Female English Bull Terrier dog (dam) on a beach.",
      creator: "Pixabay User TC-TORRES",
      uploader: "Adventurous36",
      capturedOn: "2013-12-12",
      uploadedOn: "2019-04-10",
      width: 1920,
      height: 1280,
      licenseId: "cc0-1.0",
      attribution: null,
      restrictions: null,
      metadataCheckedOn: "2026-10-26",
    },
  ],

  overview: {
    summary:
      "A muscular, energetic British terrier recognised by its distinctive egg-shaped head, small upright ears and playful, determined personality. Bull Terriers need regular activity, consistent reward-based training and early socialisation.",

    description:
      "The Bull Terrier is a sturdy, athletic dog with a distinctive head profile, compact eyes, erect ears and a short, glossy coat. It was developed in Britain from earlier bull-and-terrier types and is now kept mainly as a companion and performance dog. Many Bull Terriers are affectionate, comical and highly engaged with their families, but they can also be strong-willed, boisterous and physically powerful. They benefit from structured daily exercise, clear training routines and appropriate opportunities to explore and play. Their enthusiasm and strength make early manners training particularly valuable. They should be introduced positively to people, dogs and everyday environments, with interactions supervised according to the individual dog's behaviour.",

    history:
      "The modern Bull Terrier developed in nineteenth-century Britain from bull-and-terrier dogs. Breeders gradually shaped a more recognisable type, including the characteristic long, oval head. The breed became established as a companion and show dog, with white and coloured varieties recognised in breed standards. It retains the athleticism and persistence associated with its terrier ancestry, while many modern dogs live as household companions and participate in dog sports.",

    originalPurpose:
      "Developed in Britain from bull-and-terrier types; historical roles included sporting and exhibition activities.",

    currentRoles: [
      "Family companion",
      "Conformation and breed-show participant",
      "Obedience and rally participant",
      "Agility and other suitable dog-sport participant",
      "Interactive play and scent-enrichment companion",
    ],
  },

  physical: {
    sizeCategory: "Medium",

    // The breed standards consulted do not prescribe fixed height limits.
    // The commonly published general height is not sex-specific, so it is
    // not duplicated into male/female measurement fields.
    height: {
      unit: null,
      male: null,
      female: null,
    },

    // The commonly published weight range is not sex-specific. Keep these
    // structured fields unavailable instead of presenting the same range
    // as if it were separately verified for each sex.
    weight: {
      unit: null,
      male: null,
      female: null,
    },

    lifespanYears: {
      min: 12,
      max: 13,
    },

    coatType: "Short, flat, dense and glossy, with a harsh-to-the-touch texture.",

    coatLength: "Short",

    coatColors: [
      "White; markings on the head are permissible under the AKC standard",
      "Coloured variety: any colour other than white, or any colour with white markings; brindle is preferred when other qualities are equal",
      "Commonly seen colours include brindle, red, fawn, black brindle and tricolour, with or without white markings where permitted by the applicable standard",
    ],

    sheddingLevel: "Moderate; regular brushing helps remove loose hair.",

    droolingLevel:
      "Low to moderate; individual dogs may differ.",

    distinctiveFeatures: [
      "Long, strong head with a distinctive oval or egg-like outline when viewed from the front",
      "Small, narrow, obliquely set eyes that give an alert expression",
      "Small, erect ears carried close together",
      "Muscular, well-balanced body built for strength and activity",
      "Short, flat coat that lies close to the body",
      "The commonly published typical height is 21–22 inches and the commonly published weight range is 50–70 pounds; these are general figures, not fixed limits in the breed standard",
    ],
  },

  temperament: {
    traits: [
      "Playful and often comical",
      "Energetic and enthusiastic",
      "Affectionate with familiar people",
      "Intelligent and capable of learning routines",
      "Persistent and sometimes stubborn",
      "Can be exuberant or boisterous, especially when young",
      "May need careful introductions and supervision around unfamiliar dogs",
      "Often enjoys interactive play and attention from its family",
    ],

    // These are editorial suitability estimates, not standardised
    // behavioural measurements or veterinary assessments.
    scores: {
      affection: 5,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 3,
      independence: 3,
      trainability: 3,
      barking: 3,
      energy: 5,
    },
  },

  care: {
    exercise: {
      level:
        "High. Provide daily walks, play, training and mental enrichment. Adapt activity to age, fitness, weather and veterinary advice.",

      // No fixed breed-specific daily minute recommendation was established
      // from the sources used for this record.
      minutesPerDay: null,

      activities: [
        "Daily walks with opportunities for sniffing and exploration",
        "Short reward-based training sessions",
        "Interactive games with suitable toys",
        "Food puzzles and scent-search activities",
        "Age-appropriate agility or other structured activities",
        "Controlled play in a secure area",
      ],
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush regularly with a soft-bristle brush or grooming mitt to remove loose hair and keep the coat clean.",

      bathing:
        "Bathe when needed using a dog-safe shampoo. Avoid excessive bathing that may dry or irritate the skin.",

      notes: [
        "Check the skin regularly for redness, itching, sores or unusual hair loss.",
        "Trim the nails when needed to maintain comfortable movement.",
        "Inspect the ears routinely and clean them only with a suitable dog ear-care product when necessary.",
        "Brush the teeth regularly with dog-specific toothpaste.",
        "Increase brushing during periods of heavier shedding.",
      ],
    },

    training: {
      difficulty:
        "Moderate to challenging for inexperienced owners. The breed can learn well but may be persistent and excitable, so consistent, reward-based training is important.",

      tips: [
        "Start training and positive socialisation early.",
        "Use short sessions with rewards, play and clear, consistent cues.",
        "Teach loose-leash walking, recall, waiting at doors and calm greetings.",
        "Reward calm behaviour rather than allowing jumping or rough play to become a habit.",
        "Introduce other dogs gradually and supervise interactions based on the dogs' individual behaviour.",
        "Avoid harsh punishment or confrontational handling; use humane, reward-based methods.",
        "Provide safe chew toys and enrichment to redirect inappropriate chewing.",
      ],

      socialization:
        "Introduce the dog gradually and positively to a variety of people, calm dogs, sounds, surfaces and everyday settings. Continue practising throughout adulthood. Supervise interactions with children and other animals, and do not assume that socialisation guarantees every dog will be comfortable with every other dog.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Temperate conditions with access to shade and fresh water",
        "Warm weather with exercise scheduled during cooler periods",
        "Cold or wet conditions with suitable shelter and monitoring, as the short coat provides limited insulation",
      ],

      aloneTimeTolerance:
        "Varies by individual. Gradually teach comfortable alone time, provide enrichment and avoid routinely leaving the dog isolated for long periods.",
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate for the dog's life stage, activity level and body condition.",

    feedingFrequency: {
      puppy:
        "Feed several measured meals each day according to the puppy's age, growth and the food's feeding guidance. Ask a veterinarian to review growth and body condition.",

      adult:
        "Many adult dogs do well with two measured meals per day. Adjust the total daily amount to maintain a healthy body condition.",

      senior:
        "Choose portions and food appropriate to the older dog's activity, body condition, dental health and any veterinary-diagnosed conditions.",
    },

    guidelines:
      "Measure daily food portions and adjust them as activity and body condition change. Keep fresh water available. Introduce dietary changes gradually, use treats in moderation and consult a veterinarian before adding supplements or making a therapeutic diet change.",

    considerations: [
      "Monitor body condition rather than relying only on the amount printed on a food package.",
      "Use a complete diet formulated for the appropriate life stage.",
      "Keep treats and table scraps from displacing balanced meals.",
      "Discuss persistent itching, digestive upset or suspected food reactions with a veterinarian instead of making repeated unsupervised diet changes.",
      "Seek veterinary advice if weight changes unexpectedly or appetite changes persist.",
    ],

    note:
      "Exact food quantity depends on age, size, activity, metabolism and the calorie content of the food; no single portion size is appropriate for every Bull Terrier.",
  },

  health: {
    overview:
      "Bull Terriers should receive routine preventive veterinary care, and prospective owners should ask breeders for relevant health-screening records. Breed-club and kennel-club guidance highlights cardiac assessment, kidney screening, hearing testing and patellar evaluation. These are screening priorities, not a prediction that an individual dog will develop a condition. A veterinarian should interpret results and recommend follow-up based on the dog's history and examination.",

    commonConditions: [
      "Cardiac abnormalities, which are a reason for recommended screening",
      "Kidney disorders and proteinuria, which are relevant to breed health screening",
      "Congenital hearing impairment or deafness",
      "Patellar luxation",
      "Skin irritation or allergic skin disease; investigate persistent symptoms with a veterinarian",
    ],

    preventiveCare: [
      "Arrange routine veterinary examinations and maintain a preventive-care schedule.",
      "Keep vaccinations, parasite prevention and dental care up to date according to veterinary advice.",
      "Maintain a healthy body condition and regular, age-appropriate activity.",
      "Ask for breeder health records and discuss relevant inherited risks before acquiring a puppy.",
      "Seek veterinary assessment for persistent itching, unusual thirst or urination, fainting, reduced exercise tolerance or changes in hearing.",
    ],

    recommendedScreenings: [
      "Cardiac examination",
      "Kidney screening, including a urine protein-to-creatinine ratio when recommended",
      "BAER (Brainstem Auditory Evoked Response) hearing test",
      "Patella evaluation",
    ],

    dentalCare:
      "Brush the teeth regularly with dog-specific toothpaste and arrange veterinary dental examinations as advised. Report persistent bad breath, bleeding gums, broken teeth or difficulty eating.",

    earCare:
      "Inspect the ears routinely for redness, odour, discharge or discomfort. Ask a veterinarian about persistent ear symptoms rather than treating them without a diagnosis.",

    skinCare:
      "Check for redness, itching, scabs, sores and hair loss. If symptoms recur or persist, seek veterinary advice to investigate possible allergy, parasites or infection.",
  },

  suitability: {
    // These are broad editorial recommendations, not guarantees about
    // an individual dog's behaviour or compatibility.
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "People who enjoy daily activity, training and interactive play",
      "Owners willing to provide consistent, reward-based training",
      "Households able to supervise children and manage an energetic, muscular dog responsibly",
      "Owners prepared to arrange early socialisation and ongoing enrichment",
    ],

    notIdealFor: [
      "People seeking a low-energy dog with minimal exercise needs",
      "Owners unable to provide consistent training or supervision",
      "Households expecting every dog to be comfortable with unfamiliar dogs without gradual introductions",
      "People who need to leave a dog alone for long periods on a routine basis",
    ],
  },

  funFacts: [
    "The Bull Terrier's egg-shaped head is one of the breed's most recognisable features.",
    "Breed standards describe both white and coloured varieties.",
    "The breed combines a muscular build with an active, playful nature.",
    "Short-coated does not mean no grooming: brushing and routine skin checks are still useful.",
  ],

  faq: [
    {
      question: "How big does a Bull Terrier get?",
      answer:
        "The AKC profile gives a typical height of 21–22 inches and a weight range of 50–70 pounds. Breed standards do not prescribe fixed height and weight limits, so individual dogs can differ.",
    },
    {
      question: "How long does a Bull Terrier usually live?",
      answer:
        "The AKC breed profile lists a life expectancy of 12–13 years. An individual dog's lifespan depends on factors including genetics, preventive care and overall health.",
    },
    {
      question: "Are Bull Terriers good family dogs?",
      answer:
        "Many are affectionate and playful with their families. Their strength and enthusiasm mean that adults should supervise interactions with children and teach both the dog and children safe, respectful behaviour.",
    },
    {
      question: "Do Bull Terriers need a lot of exercise?",
      answer:
        "They are an active breed and generally benefit from daily walks, play and training. Match the amount and intensity to the dog's age, fitness and health, rather than following a rigid schedule.",
    },
    {
      question: "What health tests should I ask a breeder about?",
      answer:
        "Ask for records of cardiac assessment, kidney screening, hearing testing such as BAER, and patella evaluation. A veterinarian can explain what each result means and whether additional checks are appropriate.",
    },
    {
      question: "Are Bull Terriers easy to train?",
      answer:
        "They can learn well, but persistence and excitement may make training challenging. Short, consistent, reward-based sessions and early socialisation are helpful.",
    },
  ],

  references: [
    "akc-bull-terrier-profile",
    "akc-bull-terrier-official-standard",
    "ukc-bull-terrier-standard",
    "ckc-bull-terrier-profile",
    "bull-terrier-club-america-health-statement",
    "commons-bullterrier-3453301920",
    "continental-kennel-club-bull-terrier",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "ckc-bull-terrier-profile",
          role: "verified",
          locator: "Breed name and description",
        },
        {
          id: "continental-kennel-club-bull-terrier",
          role: "verified",
          locator: "Breed name",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "English Bull Terrier is used as an alternate name in some breed references.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: null,
    },

    group: {
      reliability: "reliable_source",
      sources: [
        {
          id: "ukc-bull-terrier-standard",
          role: "verified",
          locator: "Official Bull Terrier breed standard",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Group terminology varies between kennel-club systems.",
    },

    origin: {
      reliability: "reliable_source",
      sources: [
        {
          id: "ukc-bull-terrier-standard",
          role: "verified",
          locator: "Breed standard and breed description",
        },
        {
          id: "akc-bull-terrier-profile",
          role: "verified",
          locator: "About the Breed",
        },
      ],
      verifiedOn: "2026-10-26",
      note: null,
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bull-terrier-profile",
          role: "verified",
          locator: "About the Breed; breed overview",
        },
        {
          id: "ukc-bull-terrier-standard",
          role: "verified",
          locator: "General appearance, coat and temperament",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "User-facing prose is newly written and summarises source-supported breed information.",
    },

    physical: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bull-terrier-profile",
          role: "verified",
          locator: "Average sizes and life expectancy",
        },
        {
          id: "ukc-bull-terrier-standard",
          role: "verified",
          locator: "Height and weight; coat; colour",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "General measurements are described in prose because the schema's measurement fields are sex-specific but the published typical figures are not.",
    },

    "physical.height": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The consulted standards do not provide fixed height limits or separate sex-specific measurements.",
    },

    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The consulted standards do not provide fixed weight limits or separate sex-specific measurements.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bull-terrier-profile",
          role: "verified",
          locator: "Average sizes and life expectancy",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Life expectancy is the published breed-profile range, not a guarantee for an individual dog.",
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-bull-terrier-official-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-10-26",
      note: null,
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-bull-terrier-official-standard",
          role: "verified",
          locator: "White and coloured varieties; colour",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Colour wording reflects the standard consulted; other kennel-club standards may phrase accepted colours differently.",
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-bull-terrier-profile",
          role: "cited",
          locator: "Grooming",
        },
      ],
      verifiedOn: null,
      note: "Qualitative editorial estimate; shedding varies between individuals and seasons.",
    },

    "physical.droolingLevel": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Qualitative editorial estimate; drooling varies between individuals.",
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-bull-terrier-official-standard",
          role: "verified",
          locator: "General appearance; head and coat",
        },
        {
          id: "ukc-bull-terrier-standard",
          role: "verified",
          locator: "Head; height and weight",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The typical height and weight figures are general breed-profile figures, not official limits.",
    },

    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "ukc-bull-terrier-standard",
          role: "verified",
          locator: "Temperament",
        },
        {
          id: "akc-bull-terrier-profile",
          role: "verified",
          locator: "About the Breed",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Breed tendencies do not predict every individual dog's behaviour.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-bull-terrier-profile",
          role: "cited",
          locator: "Breed profile and care information",
        },
        {
          id: "ukc-bull-terrier-standard",
          role: "cited",
          locator: "Temperament",
        },
      ],
      verifiedOn: null,
      note: "The 1–5 values are editorial estimates, not scores published by the cited organisations.",
    },

    care: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General care guidance should be adapted to the individual dog and reviewed with a veterinarian where appropriate.",
    },

    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bull-terrier-profile",
          role: "verified",
          locator: "What to Expect When Caring for a Bull Terrier",
        },
        {
          id: "ckc-bull-terrier-profile",
          role: "verified",
          locator: "Activity Level",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Activity recommendations are qualitative and should be adjusted to age, health and fitness.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No sufficiently supported breed-specific daily minute range was established.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bull-terrier-profile",
          role: "verified",
          locator: "Grooming",
        },
        {
          id: "ckc-bull-terrier-profile",
          role: "verified",
          locator: "Grooming",
        },
      ],
      verifiedOn: "2026-10-26",
      note: null,
    },

    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bull-terrier-profile",
          role: "verified",
          locator: "Training and care information",
        },
        {
          id: "ckc-bull-terrier-profile",
          role: "verified",
          locator: "Activity Level",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Training suggestions are practical guidance, not a guarantee of behaviour.",
    },

    "care.livingEnvironment": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-bull-terrier-profile",
          role: "cited",
          locator: "Care and exercise information",
        },
      ],
      verifiedOn: null,
      note: "Environmental suitability varies by household, dog, training and daily routine.",
    },
    "care.livingEnvironment.apartmentSuitable": {
  reliability: "unavailable",
  sources: [],
  verifiedOn: null,
  note: "Apartment suitability cannot be reliably reduced to a breed-wide boolean.",
},

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Nutrition guidance is general and not a veterinary diet prescription.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bull-terrier-profile",
          role: "verified",
          locator: "Health; recommended health tests",
        },
        {
          id: "bull-terrier-club-america-health-statement",
          role: "verified",
          locator: "Heart, kidney, hearing and patella screening guidance",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Health-screening priorities are not a claim that every dog will develop the listed conditions.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "bull-terrier-club-america-health-statement",
          role: "verified",
          locator: "Heart, kidney, hearing and patella screening guidance",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "This list highlights breed-relevant screening concerns; it does not rank disease prevalence.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bull-terrier-profile",
          role: "verified",
          locator: "Recommended Health Tests From the National Breed Club",
        },
        {
          id: "bull-terrier-club-america-health-statement",
          role: "verified",
          locator: "Heart, kidney, hearing and patella screening guidance",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Discuss the relevance and timing of each test with a veterinarian and breeder.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-bull-terrier-profile",
          role: "cited",
          locator: "Breed overview and care information",
        },
        {
          id: "ckc-bull-terrier-profile",
          role: "cited",
          locator: "Activity Level",
        },
      ],
      verifiedOn: null,
      note: "These are broad editorial recommendations and not guarantees of compatibility.",
    },
    "suitability.apartmentLiving": {
  reliability: "unavailable",
  sources: [],
  verifiedOn: null,
  note: "Suitability depends on the individual dog, exercise, training and housing conditions.",
},

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bull-terrier-official-standard",
          role: "verified",
          locator: "Head and coat",
        },
        {
          id: "ukc-bull-terrier-standard",
          role: "verified",
          locator: "Coat and colour",
        },
      ],
      verifiedOn: "2026-10-26",
      note: null,
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bull-terrier-profile",
          role: "verified",
          locator: "Average sizes and life expectancy; health; grooming",
        },
        {
          id: "bull-terrier-club-america-health-statement",
          role: "verified",
          locator: "Recommended health screening",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Answers summarise sourced facts and general care guidance in original wording.",
    },
  },

  updatedOn: "2026-10-26",
};
