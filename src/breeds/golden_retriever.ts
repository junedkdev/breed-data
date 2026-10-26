import type { Breed } from "../schema/breed.types";

export const golden_retriever: Breed = {
  slug: "golden-retriever",
  name: "Golden Retriever",
  scientificName: null,
  alternateNames: ["Golden", "Golden Retriever"],
  group: "Sporting Group",
  origin: {
    country: "United Kingdom",
    region: "Scotland",
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Golden-retriever-dog.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Golden-retriever-dog.jpg",
      title: "Golden-retriever-dog.jpg",
      description: "Photograph of a Golden Retriever.",
      creator: "Karen Arnold",
      uploader: "Brooks patty",
      capturedOn: null,
      uploadedOn: "2018-07-23",
      width: 1920,
      height: 1440,
      licenseId: "cc0-1.0",
      attribution: "Photo by Karen Arnold, via Wikimedia Commons; CC0 1.0. Attribution is provided voluntarily.",
      restrictions: null,
      metadataCheckedOn: "2026-10-26",
    },
  ],
  overview: {
    summary:
      "A friendly, athletic Scottish gundog known for its golden coat, willingness to work with people, and enthusiasm for retrieving, swimming, training, and outdoor activities.",
    description:
      "The Golden Retriever is a medium-to-large, powerfully built sporting dog with a balanced frame, kind expression, drop ears, and a dense double coat that protects it during outdoor work. Goldens are typically sociable, responsive to training, and keen to participate in family life. They were developed as retrieving dogs, and many retain a strong interest in carrying objects, fetching, swimming, and scent-based games. Their friendly reputation does not remove the need for early training, supervision around children, regular exercise, and a long-term grooming commitment. This breed generally suits households that can provide daily interaction and activity rather than leaving the dog isolated or under-stimulated for long periods.",
    history:
      "The breed was developed in Scotland as a gundog for retrieving game, particularly in settings where a capable land-and-water retriever was useful. Historical records from the Guisachan estate in Inverness-shire document the development of the breed during the nineteenth century. The Golden Retriever later became established as both a working dog and a companion, and is now also seen in assistance work, search activities, field sports, and canine competitions.",
    originalPurpose:
      "Retrieving shot game for hunters, including work on land and around water.",
    currentRoles: [
      "Family companion",
      "Hunting and field retriever",
      "Assistance and guide-dog work",
      "Search and rescue work",
      "Obedience, agility, tracking, and other canine sports",
    ],
  },
  physical: {
    sizeCategory: "Medium to large",
    height: {
      unit: "in",
      male: {
        min: 23,
        max: 24,
      },
      female: {
        min: 21.5,
        max: 22.5,
      },
    },
    weight: {
      unit: "lb",
      male: {
        min: 65,
        max: 75,
      },
      female: {
        min: 55,
        max: 65,
      },
    },
    lifespanYears: {
      min: 10,
      max: 12,
    },
    coatType:
      "Dense double coat with a water-resistant outer coat and insulating undercoat.",
    coatLength:
      "Medium-length, straight or wavy outer coat with feathering on the neck, legs, underside, and tail.",
    coatColors: [
      "Dark golden",
      "Golden",
      "Light golden",
    ],
    sheddingLevel:
      "Moderate throughout much of the year, with heavier seasonal shedding that may require daily brushing.",
    droolingLevel:
      "Usually low to moderate, although individual dogs may drool more around food, after exercise, or in warm weather.",
    distinctiveFeatures: [
      "Balanced, athletic body suited to sustained retrieving work.",
      "Broad head with a friendly, intelligent expression.",
      "Medium-sized drop ears set near eye level.",
      "Dense double coat with feathering on the body and tail.",
      "Strong, muscular tail carried with a lively action.",
      "Webbed-feeling, well-padded feet that support outdoor activity and swimming.",
    ],
  },
  temperament: {
    traits: [
      "Typically friendly and sociable",
      "Affectionate with familiar people",
      "Intelligent and responsive to reward-based training",
      "Usually eager to cooperate with a handler",
      "Playful and often enthusiastic about retrieving",
      "Energetic and suited to active households",
      "Often welcoming toward unfamiliar people",
      "May remain excitable and mouthy during adolescence",
    ],
    scores: {
      affection: 5,
      withChildren: 5,
      withDogs: 4,
      withStrangers: 5,
      protectiveness: 2,
      independence: 2,
      trainability: 5,
      barking: 2,
      energy: 4,
    },
  },
  care: {
    exercise: {
      level:
        "Moderate to high. Adult dogs generally need daily walks, active play, and opportunities to use their retrieving and problem-solving skills. Exercise needs vary with age, health, fitness, and individual temperament.",
      minutesPerDay: null,
      activities: [
        "Brisk walks and hikes appropriate to the dog's fitness",
        "Fetch and controlled retrieving games",
        "Swimming where safe and supervised",
        "Reward-based obedience and trick training",
        "Scent games and tracking activities",
        "Agility or other suitable canine sports",
      ],
    },
    grooming: {
      level:
        "Moderate, increasing during seasonal shedding.",
      brushing:
        "Brush thoroughly once or twice a week in ordinary periods and more frequently during heavy shedding. Check behind the ears, feathering, tail, and other areas where tangles can form.",
      bathing:
        "Bathe when needed using a dog-appropriate shampoo. Dry the coat thoroughly, especially after swimming or bathing, and avoid excessive bathing that irritates the skin.",
      notes: [
        "Expect loose hair around the home, especially during seasonal coat changes.",
        "Use a suitable brush or comb to remove loose undercoat and prevent tangles.",
        "Check the ears regularly, particularly after swimming, and seek veterinary advice if there is redness, odour, discharge, or persistent scratching.",
        "Trim nails as needed and brush teeth regularly.",
        "Inspect the skin beneath the coat during grooming for irritation, lumps, parasites, or developing hot spots.",
        "Avoid shaving the double coat unless a veterinarian recommends clipping for a specific medical reason.",
      ],
    },
    training: {
      difficulty:
        "Generally responsive to training, especially when lessons are positive, consistent, and rewarding. Their enthusiasm can lead to jumping, pulling, or over-excitement if calm behaviour is not taught.",
      tips: [
        "Start reward-based training and household routines early.",
        "Teach loose-leash walking, recall, settling, and polite greetings before the dog becomes large and strong.",
        "Use retrieving games, food puzzles, and scent activities to provide mental engagement.",
        "Keep sessions varied and short enough to maintain interest, then gradually increase distractions.",
        "Reward calm behaviour as well as active performance so the dog learns to relax indoors.",
        "Supervise play and teach a reliable drop or trade cue to manage objects safely.",
      ],
      socialization:
        "Introduce the puppy gradually and positively to different people, friendly dogs, handling, household sounds, transport, and everyday environments. Continue practising throughout adulthood, and supervise interactions with children and unfamiliar dogs rather than assuming every individual will behave identically.",
    },
    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: [
        "Cool climates",
        "Temperate climates",
        "Warm climates with shade, ventilation, fresh water, and exercise scheduled for cooler parts of the day",
      ],
      aloneTimeTolerance:
        "Often prefers company and regular participation in family activities. Gradual alone-time training is important; prolonged isolation or insufficient enrichment may contribute to distress or unwanted behaviour.",
    },
  },
  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate to the dog's life stage, body condition, activity, and health needs.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Set portions according to the food's energy content, the dog's age, activity, and body condition, then adjust with veterinary guidance. Measure meals rather than relying on free-feeding, monitor weight regularly, and keep clean drinking water available. Nutritional needs change during growth, adulthood, pregnancy, ageing, and illness.",
    considerations: [
      "Monitor body condition and weight because excess weight can increase strain on joints.",
      "Account for training treats and chews when calculating daily food intake.",
      "Choose a diet labelled complete and balanced for the appropriate life stage.",
      "Avoid abrupt diet changes unless medically indicated; transition foods gradually when possible.",
      "Ask a veterinarian before using supplements or therapeutic diets.",
      "Discuss an appropriate feeding and activity routine with a veterinarian if the dog is gaining weight or has digestive symptoms.",
    ],
    note:
      "There is no single meal count or portion size that is correct for every Golden Retriever. Establish an individual feeding plan with a veterinarian, particularly during puppy growth or when managing weight or disease.",
  },
  health: {
    overview:
      "Golden Retrievers can live active lives, but responsible care includes routine veterinary examinations and attention to inherited and acquired conditions. Breed-club screening guidance highlights hip and elbow health, heart examinations, eye examinations, and specific inherited disease testing for breeding dogs. Screening reduces some breeding risks but cannot guarantee that an individual dog will remain free of disease.",
    commonConditions: [
      "Hip dysplasia, a developmental joint condition that can contribute to pain and arthritis.",
      "Elbow dysplasia, a group of developmental elbow disorders.",
      "Eye conditions, including inherited or juvenile eye disease; specific risks vary by line and diagnosis.",
      "Cardiac disease, including subvalvular aortic stenosis.",
      "Neuronal ceroid lipofuscinosis 5 (NCL5), an inherited neurological condition for which DNA testing is recommended in breeding guidance.",
      "Skin and ear problems, which may include irritation or infection and should be assessed when persistent.",
      "Obesity, which can worsen mobility and general health when energy intake consistently exceeds requirements.",
    ],
    preventiveCare: [
      "Arrange regular veterinary wellness examinations and keep vaccinations and parasite prevention appropriate to local risk.",
      "Maintain a healthy body condition and increase exercise gradually, particularly during growth.",
      "Discuss hip, elbow, eye, cardiac, and relevant DNA screening records when selecting a puppy or evaluating a breeding dog.",
      "Seek veterinary assessment for persistent lameness, exercise intolerance, eye changes, recurrent ear problems, or skin irritation.",
      "Learn the signs of an emergency, including sudden abdominal swelling, repeated unproductive retching, collapse, or severe breathing difficulty.",
      "Use age-appropriate dental care, parasite control, and screening based on the dog's individual history.",
    ],
    recommendedScreenings: [
      "Hip evaluation for breeding dogs",
      "Elbow evaluation for breeding dogs",
      "Cardiac examination for breeding dogs",
      "Ophthalmologist examination for breeding dogs",
      "NCL5 DNA test as recommended by breed-club health guidance",
    ],
    dentalCare:
      "Brush the teeth regularly with dog-safe toothpaste. Dental chews may supplement but should not replace brushing or professional examinations. Ask a veterinarian to assess persistent bad breath, gum bleeding, oral pain, or difficulty eating.",
    earCare:
      "Inspect the drop ears regularly, especially after swimming or bathing. Keep them dry and clean only with products recommended for dogs; seek veterinary care for odour, redness, discharge, head shaking, or persistent scratching.",
    skinCare:
      "Part the coat during grooming to check for redness, parasites, lumps, damp or irritated areas, and mats. Persistent itching, recurrent hot spots, hair loss, or inflamed skin warrant veterinary assessment rather than repeated home treatment.",
  },
  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: true,
    idealFor: [
      "Households that want a sociable companion and can provide daily activity.",
      "People interested in retrieving games, swimming, hiking, training, or canine sports.",
      "Owners willing to manage regular brushing, seasonal shedding, and routine veterinary care.",
      "Families prepared to teach manners, supervise child-dog interactions, and provide consistent training.",
    ],
    notIdealFor: [
      "People who need a low-shedding dog or cannot tolerate loose hair around the home.",
      "Households unable to provide regular exercise, training, and companionship.",
      "Owners who expect a puppy to be calm and self-sufficient without structured training.",
      "People unwilling to budget for routine veterinary care and potential breed-associated health screening.",
    ],
  },
  funFacts: [
    "The breed was developed in Scotland for retrieving game, including work around water.",
    "The Golden Retriever's soft mouth and retrieving motivation are useful working traits when properly trained.",
    "Goldens can work as companions, sporting dogs, assistance dogs, and participants in search activities.",
    "Their dense double coat helps protect them outdoors but also means regular grooming and seasonal shedding.",
  ],
  faq: [
    {
      question: "How long does a Golden Retriever usually live?",
      answer:
        "A commonly published life-expectancy range is 10 to 12 years. Individual lifespan varies with genetics, health, weight, environment, and veterinary care.",
    },
    {
      question: "Do Golden Retrievers shed a lot?",
      answer:
        "Yes. They shed throughout the year and can shed much more heavily during seasonal coat changes. Regular brushing helps remove loose hair and reduce tangles.",
    },
    {
      question: "Are Golden Retrievers easy to train?",
      answer:
        "They are generally eager to learn and respond well to consistent, reward-based training. Early work on recall, leash manners, calm greetings, and settling is especially helpful.",
    },
    {
      question: "Are Golden Retrievers suitable for families with children?",
      answer:
        "Many are affectionate and sociable family companions, but every dog is an individual. Adults should supervise interactions, teach children respectful handling, and provide the dog with a safe place to rest.",
    },
    {
      question: "Can a Golden Retriever live in an apartment?",
      answer:
        "Apartment living can work if the dog receives sufficient daily exercise, training, enrichment, and companionship. Access to a yard does not replace walks or mental activity.",
    },
    {
      question: "What health checks should I ask a breeder about?",
      answer:
        "Ask for verifiable hip and elbow evaluations, cardiac and eye examinations, and relevant DNA testing recommended for the breed. Screening records are useful risk information, not a guarantee of future health.",
    },
  ],
  references: [
    "akc-golden-retriever-official-standard",
    "akc-golden-retriever-profile",
    "grca-golden-retriever-health-screening",
    "wikimedia-golden-retriever-karen-arnold",
  ],
  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator: "Breed name and breed overview",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The alternate label 'Golden' is a commonly used shortened name; the registered breed name is Golden Retriever.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific scientific name is recorded; a general domestic-dog binomial is omitted.",
    },
    group: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator: "Breed group",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Uses the American Kennel Club group classification.",
    },
    origin: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator: "About the Breed and historical development",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The breed was developed in Scotland, part of the United Kingdom.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator: "About the Breed; grooming, exercise, training, and nutrition sections",
        },
        {
          id: "akc-golden-retriever-official-standard",
          role: "cited",
          locator: "Official Standard for the Golden Retriever",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "User-facing descriptions are original summaries of the breed profile and standard.",
    },
    physical: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator: "Height, weight, life expectancy, coat, and grooming sections",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Physical traits not covered by a more specific standard claim are based on the breed profile.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-golden-retriever-official-standard",
          role: "verified",
          locator: "Size, Proportion, Substance",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Measurements are recorded in inches, as published in the standard.",
    },
    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-golden-retriever-official-standard",
          role: "verified",
          locator: "Size, Proportion, Substance",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Measurements are recorded in pounds, as published in the standard.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator: "Life expectancy",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Published breed-profile range; an individual dog's lifespan may differ.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-golden-retriever-official-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Summarizes the standard's coat description.",
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-golden-retriever-official-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Summarizes the standard's coat length and feathering description.",
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-golden-retriever-official-standard",
          role: "verified",
          locator: "Color",
        },
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Breed colors and markings",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Uses the breed profile's named gold color categories.",
    },
    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-golden-retriever-official-standard",
          role: "verified",
          locator: "General Appearance; Head; Ears; Tail; Coat",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Concise paraphrases of standard characteristics.",
    },
    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator: "About the Breed and breed traits",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Traits describe common breed tendencies, not guaranteed behaviour in every dog.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Breed traits and temperament descriptions",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1–5 estimates derived from qualitative breed tendencies; these are not standardized test results.",
    },
    care: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General practical dog-care guidance adapted to the breed's coat, activity, and social needs.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No single evidence-based daily minute range applies to all ages, fitness levels, and health conditions.",
    },
    "care.livingEnvironment": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Exercise, temperament, and grooming guidance",
        },
      ],
      verifiedOn: null,
      note: "Lifestyle suitability is an editorial assessment and depends on the household and individual dog.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General nutrition guidance; portions and feeding routines should be individualized.",
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A fixed meal frequency is not specified because needs vary with age, growth, food, and veterinary advice.",
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A fixed meal frequency is not specified because needs vary with the individual dog and feeding plan.",
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A fixed meal frequency is not specified because needs vary with health, appetite, and veterinary advice.",
    },
    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator: "Health and recommended health tests",
        },
        {
          id: "grca-golden-retriever-health-screening",
          role: "verified",
          locator: "Health screenings for the parents of a litter",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Health risks and screening guidance are summarized conservatively. The list is not exhaustive and does not predict an individual dog's diagnosis.",
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Breed temperament, exercise, training, and grooming descriptions",
        },
      ],
      verifiedOn: null,
      note: "Lifestyle recommendations are editorial assessments, not guarantees of compatibility.",
    },
    "suitability.seniorOwners": {
  reliability: "unavailable",
  sources: [],
  verifiedOn: null,
  note: null,
},
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator: "About the Breed",
        },
        {
          id: "akc-golden-retriever-official-standard",
          role: "cited",
          locator: "General Appearance and Coat",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Short, original summaries of documented working and physical characteristics.",
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator: "Life expectancy, health, grooming, exercise, training, and nutrition",
        },
        {
          id: "grca-golden-retriever-health-screening",
          role: "cited",
          locator: "Health screenings for the parents of a litter",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Answers summarize source-backed breed information and general ownership guidance.",
    },
  },
  updatedOn: "2026-10-26",
};
