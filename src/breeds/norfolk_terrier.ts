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
      metadataCheckedOn: "2026-11-12",
    },
  ],

  overview: {
    summary:
      "A small, sturdy British working terrier with forward-folding V-shaped ears, a hard wiry double coat, and a fearless, affectionate spirit.",

    description:
      "Compact, low-set, and solidly boned for its size, the Norfolk Terrier features a broad skull, strong wedge-shaped muzzle, dark oval eyes, and neat drop ears folded close to the cheeks. Its weather-resistant double coat—hard and straight on top with a soft undercoat—comes in red, wheaten, black-and-tan, or grizzle. More gregarious than many terriers yet retaining a keen prey drive toward small animals, it thrives with daily walks, scent games, positive training, and regular hand-stripping or brushing.",

    history:
      "Developed in East Anglia and Norfolk, England during the late nineteenth and early twentieth centuries as a fearless farm ratter and fox bolter, the breed was originally grouped with its prick-eared counterpart under the single name Norwich Terrier. Breeders began separating the two ear types in the mid-twentieth century, leading to formal recognition of the drop-eared Norfolk Terrier in Britain in 1964 and in North America in 1979.",

    originalPurpose:
      "Pursuing and bolting rats, foxes, and small vermin around farms and stables, both solo and in packs.",

    currentRoles: [
      "Lively family and household companion",
      "Earthdog, agility, obedience, and rally competitor",
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

    lifespanYears: {
      min: 12,
      max: 16,
    },

    coatType:
      "Weather-resistant double coat with a hard, wiry, straight outer layer over a soft insulating undercoat.",

    coatLength:
      "Medium length; close-fitting along the body, slightly longer and rougher around the neck and shoulders, and shorter on the head and ears with modest eyebrows and whiskers.",

    coatColors: [
      "All shades of red",
      "Wheaten",
      "Black and tan",
      "Grizzle",
    ],

    sheddingLevel:
      "Low to moderate — regular brushing and periodic hand-stripping clear dead hair and preserve wiry texture.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Compact, low-set frame with sturdy bone and substance",
      "V-shaped drop ears folding forward close to the cheeks",
      "Broad skull, wedge-shaped muzzle, and keen dark oval eyes",
      "Short, strong legs built for rough ground",
      "Hard, wiry double coat in red, wheaten, black-and-tan, or grizzle",
    ],
  },

  temperament: {
    traits: [
      "Alert and fearless",
      "Lively, playful, and affectionate with family",
      "More sociable than many working terriers",
      "Confident, curious, and determined",
      "Strong prey drive toward small animals and wildlife",
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
        "Moderate to high for its size — daily walks, sniffing, play, and short training sessions up to about one hour per day, adjusted for age and health.",
      minutesPerDay: null,
      activities: [
        "Daily leashed walks with ample sniffing time",
        "Interactive fetch and puzzle-toy play in a fenced yard",
        "Earthdog, agility, or nose-work games",
        "Short reward-based obedience sessions",
      ],
    },

    grooming: {
      level: "Moderate to high — periodic hand-stripping recommended",
      brushing:
        "Brush and comb at least weekly to clear loose undercoat and field debris, hand-stripping dead outer hairs periodically to maintain weather resistance.",
      bathing:
        "Bathe only when genuinely dirty using a mild canine shampoo; frequent bathing or clipping can soften the harsh coat texture.",
      notes: [
        "Inspect the folded ears weekly for wax, moisture, or redness.",
        "Trim nails regularly and brush teeth several times a week.",
        "Check paws and coat after brush or grass walks.",
      ],
    },

    training: {
      difficulty:
        "Moderate — smart and adaptable with positive reinforcement, though prey drive competes with off-leash recall.",
      tips: [
        "Use brief, upbeat, reward-based sessions.",
        "Practise recall in securely fenced spaces before trusting off-leash cues.",
        "Provide legal digging or scent-search outlets and avoid harsh corrections.",
      ],
      socialization:
        "Offer positive, gradual exposure to unfamiliar people, calm dogs, handling, and everyday sounds from puppyhood, supervising around small pets.",
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: [
        "Adapts well to cool and temperate climates with normal household shelter.",
        "Provide shade, fresh water, and cooler walking hours in hot weather.",
      ],
      aloneTimeTolerance:
        "Moderate when conditioned gradually — thrives on regular companionship and should not be routinely left isolated for long workdays.",
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced commercial diet formulated for small-breed dogs according to life stage and body condition.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Feed measured daily meals based on body condition score rather than free-feeding, counting training treats within daily calories and keeping fresh water available.",

    considerations: [
      "Small dogs gain weight quickly on excess treats or table scraps.",
      "Introduce diet transitions gradually to minimize digestive upset.",
      "Consult a veterinarian for persistent gastrointestinal signs or unexplained weight changes.",
    ],

    note:
      "No single meal count or gram ration fits every Norfolk Terrier; tailor portions with veterinary guidance.",
  },

  health: {
    overview:
      "Generally hardy and long-lived, Norfolk Terriers are nonetheless screened by breed clubs for mitral valve heart disease, inherited eye disorders, and patellar luxation, with optional evaluations for hip dysplasia and ichthyosis. These represent screening priorities rather than a guarantee of illness.",

    commonConditions: [
      "Patellar luxation — intermittent slipping of the kneecap.",
      "Mitral valve heart disease — age-related heart-valve degeneration monitored by veterinary auscultation and cardiac exams.",
      "Inherited eye disorders — screened through specialist veterinary eye exams.",
      "Hip dysplasia — developmental hip-joint malformation (optional screening).",
      "Ichthyosis — an inherited scaling skin disorder (optional DNA testing).",
    ],

    preventiveCare: [
      "Request documented parental cardiac, eye, and patella clearances from breeders.",
      "Schedule routine veterinary wellness exams, vaccinations, and parasite prevention.",
      "Seek prompt veterinary evaluation for new heart murmurs, skipping gaits, scaling skin, or vision changes.",
    ],

    recommendedScreenings: [
      "Veterinary cardiac examination (including mitral valve assessment)",
      "Veterinary ophthalmologist eye examination",
      "Patellar luxation clinical evaluation",
      "Optional hip dysplasia evaluation and ichthyosis DNA test based on pedigree",
    ],

    dentalCare:
      "Brush teeth several times a week with dog-safe toothpaste and arrange periodic veterinary oral checks.",

    earCare:
      "Inspect the forward-folding ears weekly for wax, debris, redness, or odour, cleaning gently only as advised by a veterinarian.",

    skinCare:
      "Check the skin beneath the wiry coat during weekly brushing for scaling, ticks, redness, or persistent scratching.",
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Active individuals, couples, or families with supervised children",
      "Apartment or house residents able to provide daily walks and enrichment",
      "Owners willing to brush weekly and maintain a wiry coat via hand-stripping or tidy trims",
    ],

    notIdealFor: [
      "Homes with unsupervised small pets such as hamsters, gerbils, or rabbits",
      "Owners expecting effortless off-leash reliability around wildlife",
      "Households leaving a dog isolated for long workdays without stimulation",
    ],
  },

  funFacts: [
    "The clearest visual difference between a Norfolk Terrier and a Norwich Terrier is ear carriage: Norfolks have forward-folding drop ears, while Norwich Terriers have erect prick ears.",
    "Until 1964 in Britain and 1979 in North America, both ear types were registered together under the Norwich Terrier name.",
    "Early twentieth-century horseman Frank 'Roughrider' Jones helped popularize the little red East Anglian terriers as ratters and fox bolters.",
    "Despite standing just 9 to 10 inches tall, the Norfolk Terrier was bred with sturdy bone and fearless grit for farm vermin control.",
  ],

  faq: [
    {
      question: "Where does the Norfolk Terrier come from?",
      answer:
        "It developed in East Anglia and Norfolk, England, as a sturdy farm terrier used to control rats and other small vermin.",
    },
    {
      question: "How is a Norfolk Terrier different from a Norwich Terrier?",
      answer:
        "Norfolk Terriers have V-shaped ears that fold forward against the cheeks, whereas Norwich Terriers carry their ears upright.",
    },
    {
      question: "How tall is a Norfolk Terrier?",
      answer:
        "Mature dogs typically stand 9 to 10 inches at the withers, though individuals vary.",
    },
    {
      question: "How much does a Norfolk Terrier weigh?",
      answer:
        "Adults typically weigh 11 to 12 pounds, proportionate to their compact structure and balance.",
    },
    {
      question: "How long does a Norfolk Terrier live?",
      answer:
        "Life expectancy typically ranges from 12 to 16 years depending on genetics, health, and care.",
    },
    {
      question: "Does a Norfolk Terrier need much exercise?",
      answer:
        "Yes—as an active working terrier, it benefits from daily walks, sniffing, play, and training up to roughly an hour per day, adjusted for age and fitness.",
    },
    {
      question: "Do Norfolk Terriers shed?",
      answer:
        "They shed lightly to moderately; weekly brushing and periodic hand-stripping remove dead hair and preserve the hard, wiry coat.",
    },
    {
      question: "What health tests should I ask a breeder about?",
      answer:
        "Ask for documented cardiac, ophthalmologist eye, and patella evaluations, plus optional hip and ichthyosis testing where relevant.",
    },
    {
      question: "Can a Norfolk Terrier live in an apartment?",
      answer:
        "Yes, provided it gets daily walks, mental enrichment, and consistent positive training.",
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
    "the-dog-api",
  ],

  evidence: {
    scientificName: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Conventional domestic-dog scientific designation rather than a breed-specific taxonomic distinction.",
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
      verifiedOn: "2026-11-12",
      note: null,
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-norfolk-terrier-standard",
          role: "verified",
          locator: "Terrier Group classification",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group: Terrier",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    origin: {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-norfolk-terrier-profile",
          role: "verified",
          locator: "Historical account of Norfolk and Norwich Terrier varieties",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: Norfolk, England",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Consulted sources did not establish a single narrower origin region.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-norfolk-terrier-standard",
          role: "verified",
          locator: "General appearance, working purpose, size, coat, temperament",
        },
        {
          id: "royal-kennel-club-norfolk-terrier-standard",
          role: "cited",
          locator: "General appearance, characteristics, temperament, coat",
        },
        {
          id: "royal-kennel-club-norfolk-terrier-profile",
          role: "cited",
          locator: "Breed history and 1964 separation",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-norfolk-terrier-standard",
          role: "verified",
          locator: "Size (9–10 in, 11–12 lb), coat, and colour",
        },
        {
          id: "american-kennel-club-norfolk-terrier",
          role: "cited",
          locator: "Height, weight, and 12–16 year life expectancy",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric (23–25 cm), breed.weight.metric (5–5.5 kg), breed.life_span (12–16 years)",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Published inches (9–10 in) and pounds (11–12 lb) from the AKC standard are retained without unit conversion; The Dog API lists 23–25 cm and 5–5.5 kg.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling rating was established.",
    },
    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-norfolk-terrier",
          role: "verified",
          locator: "Breed profile and temperament",
        },
        {
          id: "royal-kennel-club-norfolk-terrier-standard",
          role: "cited",
          locator: "Characteristics and temperament",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-norfolk-terrier",
          role: "cited",
          locator: "Breed traits and exercise",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1–5 comparison estimates.",
    },
    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-norfolk-terrier",
          role: "cited",
          locator: "Exercise, grooming, training, nutrition",
        },
        {
          id: "royal-kennel-club-norfolk-terrier-profile",
          role: "cited",
          locator: "Exercise and grooming guidance",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Source provides qualitative guidance ('up to one hour per day') rather than a fixed universal minute range.",
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
      note: null,
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal puppy meal frequency was established.",
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal adult meal frequency was established.",
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal senior meal frequency was established.",
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
          locator: "Patella, cardiac, and ophthalmologist examinations",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-norfolk-terrier",
          role: "cited",
          locator: "Activity, temperament, and breed traits",
        },
        {
          id: "royal-kennel-club-norfolk-terrier-profile",
          role: "cited",
          locator: "Exercise, home size, and characteristics",
        },
      ],
      verifiedOn: null,
      note: "Editorial suitability assessment.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal senior-owner suitability rating is assigned.",
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
      verifiedOn: "2026-11-12",
      note: null,
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-norfolk-terrier",
          role: "verified",
          locator: "Height, weight, lifespan, and care profile",
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
      verifiedOn: "2026-11-12",
      note: null,
    },
  },

  updatedOn: "2026-11-12",
};
