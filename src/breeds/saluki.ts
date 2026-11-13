import type { Breed } from "../schema/breed.types";

export const saluki: Breed = {
  slug: "saluki",
  name: "Saluki",
  scientificName: null,

  alternateNames: [
    "Persian Greyhound",
    "Gazelle Hound",
    "Arabian Hound",
  ],

  group: "Sighthounds; Long-haired or Fringed Sighthounds",

  origin: {
    country: "Middle East",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Saluki_dog.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Saluki_dog.jpg",
      title: "Saluki dog.jpg",
      description: "Saluki photographed at Qasr Al Sarab, United Arab Emirates.",
      creator: "Srk60",
      uploader: "Srk60",
      capturedOn: "2021-12-19",
      uploadedOn: "2022-06-15",
      width: 768,
      height: 1024,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Srk60, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10",
    },
  ],

  overview: {
    summary:
      "The Saluki is an ancient Middle Eastern sighthound built for speed, endurance and visual pursuit. Elegant and fine-boned without being fragile, it is typically dignified, gentle with its family and independently minded. Its strong chasing instinct means it needs regular exercise and secure spaces where it can run safely.",

    description:
      "Salukis have a long, narrow head, a deep chest, long limbs and a lightly curved tail. Their outline is athletic and balanced, reflecting a history of pursuing fast game across varied terrain. The coat occurs in two recognised forms: a feathered variety with silky furnishings on areas such as the ears, legs and tail, and a smooth variety without feathering. Although often calm indoors after suitable activity, Salukis are sight-driven hunters and may chase moving animals. Reliable fencing, thoughtful leash use and reward-based training are important parts of everyday life with this breed.",

    history:
      "The Saluki developed across the Middle East, where nomadic tribes and desert communities maintained dogs suited to regional topography and coursing quarry. Its traditional role was to pursue game by sight across desert sands, working in partnership with falcons and mounted hunters. Formal Western recognition followed during the 1920s as foundational breeding hounds were established internationally.",

    originalPurpose:
      "A hunting and coursing hound used to spot, pursue and catch fast-moving game, including gazelle.",

    currentRoles: [
      "Companion dog",
      "Lure-coursing participant",
      "Sighthound sport and recreational running partner",
      "Conformation and other suitable canine sports",
    ],
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "in",
      male: {
        min: 23,
        max: 28,
      },
      female: null,
    },

    weight: {
      unit: "lb",
      male: {
        min: 40,
        max: 65,
      },
      female: {
        min: 40,
        max: 65,
      },
    },

    lifespanYears: {
      min: 10,
      max: 17,
    },

    coatType: "Smooth, fine and silky; may be feathered or smooth",
    coatLength: "Short to medium, with longer silky feathering in the feathered variety",

    coatColors: [
      "White",
      "Cream",
      "Fawn",
      "Golden",
      "Red",
      "Grizzle and tan",
      "Tricolour (white, black and tan)",
      "Black and tan",
      "Any other colour or combination of colours, with brindle being non-typical",
    ],

    sheddingLevel: "Low to moderate",

    droolingLevel: null,

    distinctiveFeatures: [
      "Long, narrow head and refined expression",
      "Deep chest and long, lean limbs",
      "Long ears that may carry silky feathering",
      "Long, naturally curved tail, often feathered underneath",
      "Two coat varieties: feathered and smooth",
      "Light, flowing movement suited to fast pursuit",
    ],
  },

  temperament: {
    traits: [
      "Dignified",
      "Gentle",
      "Intelligent",
      "Independent-minded",
      "Often reserved with unfamiliar people",
      "Athletic and strongly motivated to chase moving objects",
      "Can form close bonds with familiar people while remaining less demonstrative than some companion breeds",
    ],

    scores: {
      affection: 3,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 2,
      independence: 5,
      trainability: 3,
      barking: 2,
      energy: 5,
    },
  },

  care: {
    exercise: {
      level: "High",

      minutesPerDay: {
        min: 90,
        max: 120,
      },

      activities: [
        "Daily walks on a secure leash",
        "Running in a safely enclosed area",
        "Lure coursing or other appropriately supervised sighthound activities",
        "Reward-based training and short enrichment sessions",
        "Scent games and calm indoor activities for mental stimulation",
      ],
    },

    grooming: {
      level: "Low to moderate",

      brushing:
        "Brush about once a week; check and gently detangle the longer ear, leg and tail feathering more often when needed.",

      bathing:
        "Bathe when dirty or when the coat needs cleaning, using a dog-appropriate shampoo and avoiding unnecessary frequent washing.",

      notes: [
        "The smooth variety generally needs little coat maintenance; feathered dogs may need extra attention to prevent tangles.",
        "Check ears regularly, especially where long hair can trap debris.",
        "Trim nails as needed and introduce handling gradually.",
        "Brush teeth regularly and arrange veterinary dental care when indicated.",
      ],
    },

    training: {
      difficulty: "Moderate to challenging for owners expecting immediate obedience",

      tips: [
        "Use patient, reward-based training and keep sessions short and engaging.",
        "Practise recall in secure areas; do not rely on recall alone around wildlife or traffic.",
        "Introduce leash skills, handling and household routines early.",
        "Use secure fencing because a moving animal may trigger a rapid chase.",
        "Provide suitable outlets for running and chasing through controlled activities.",
      ],

      socialization:
        "Introduce people, dogs, handling, travel and everyday environments gradually and positively. Respect individual sensitivity and avoid forcing interactions.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Can adapt to different environments when exercise, shelter and temperature management are appropriate.",
        "Provide shade, fresh water and rest during hot weather.",
        "Protect the dog from cold, wet or windy conditions when its coat and individual tolerance offer insufficient protection.",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate to the dog's life stage, body condition and activity level.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Measure meals, keep fresh water available and monitor body condition rather than judging weight by appearance alone. A Saluki is naturally lean, so seek advice from a veterinarian familiar with sighthounds if you are unsure whether the dog is at a healthy weight.",

    considerations: [
      "Adjust energy intake to age, exercise and individual metabolism.",
      "Avoid vigorous exercise immediately before or after meals.",
      "Discuss a suitable feeding and hydration plan with a veterinarian, especially for a highly active dog.",
      "Do not assume that a very lean outline automatically means the dog is underweight; assess body condition with professional guidance.",
    ],

    note:
      "These are general feeding recommendations, not a breed-specific prescription. Individual needs vary with age, health, reproductive status and activity.",
  },

  health: {
    overview:
      "Salukis are historically hardy sighthounds with an average lifespan of 10 to 17 years. Clinical attention centers on cardiovascular health (including dilated cardiomyopathy), thyroid evaluations, cancer surveillance, and bloat risk management. Due to low body fat and unique hepatic metabolism, veterinarians employ specialized anesthesia protocols tailored to sighthounds.",

    commonConditions: [
      "Cardiac conditions, including dilated cardiomyopathy",
      "Autoimmune thyroiditis and non-pathological sighthound thyroid variations",
      "Hemangiosarcoma and other canine cancers",
      "Gastric dilatation-volvulus (bloat)",
      "Sensitivity to barbiturate anaesthesia",
    ],

    preventiveCare: [
      "Arrange regular veterinary wellness examinations and keep vaccinations and parasite prevention appropriate to the dog's needs.",
      "Maintain a healthy body condition and an age-appropriate exercise routine.",
      "Seek urgent veterinary care for sudden abdominal swelling, repeated unproductive retching, collapse or severe distress.",
      "Tell the veterinarian that the dog is a Saluki before surgery or sedation, and follow their individual anaesthesia plan.",
      "Discuss any persistent change in stamina, appetite, weight, breathing or behaviour with a veterinarian.",
    ],

    recommendedScreenings: [
      "Cardiac examination, with echocardiogram and auscultation if indicated",
      "Thyroid evaluation when clinically appropriate, interpreted with awareness of sighthound-specific reference considerations",
      "Before breeding, discuss additional health testing and the parents' medical history with the veterinarian and responsible breed club",
    ],

    dentalCare:
      "Brush teeth regularly with dog-safe products and arrange veterinary dental assessment when there is persistent bad breath, gum inflammation, pain or visible tartar.",

    earCare:
      "Check the ears routinely for redness, odour, discharge or discomfort. Seek veterinary advice for symptoms rather than treating suspected infection at home.",

    skinCare:
      "Check the skin and coat during grooming for irritation, wounds, parasites or new lumps. Seek veterinary assessment for persistent or changing abnormalities.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "People who can provide regular exercise and safe opportunities to run",
      "Households prepared to manage a strong chase instinct responsibly",
      "Owners who prefer calm, dignified companionship and respect an independent temperament",
      "People interested in lure coursing or other suitable sighthound activities",
    ],

    notIdealFor: [
      "Households that expect reliable off-leash freedom in unsecured areas",
      "People unable to provide daily exercise and enrichment",
      "Homes where small animals cannot be kept safely separated or managed",
      "Owners who require instant obedience or a dog that enthusiastically greets every stranger",
    ],
  },

  funFacts: [
    "The breed naturally occurs in both feathered and smooth coat varieties, with smooth individuals displaying sleek, unfeathered limbs and ears.",
    "Permitted coat shades span virtually all canine colors and patterns, ranging from pure white and warm cream to grizzle, tricolor, and rich red.",
    "Salukis were developed as sight-driven hunting dogs, so their response to fast-moving animals can be stronger than their response to a familiar recall cue.",
    "Enthusiasts formed the first dedicated national breed club in the United States in 1927 to protect and preserve authentic coursing lines.",
  ],

  faq: [
    {
      question: "Is a Saluki a good family dog?",
      answer:
        "A Saluki can make a wonderful companion in a household that appreciates its quiet dignity and exercise needs. It is affectionate with family members on its own terms, while supervised interactions and respectful handling are important around young children.",
    },
    {
      question: "How much exercise does a Saluki need?",
      answer:
        "Plan for substantial daily activity, including walks and safe opportunities to run. The 90–120 minute range in this profile is an editorial estimate for a healthy adult, not a fixed veterinary prescription. Puppies, older dogs and dogs with health concerns need an individually adjusted plan.",
    },
    {
      question: "Can a Saluki be let off leash?",
      answer:
        "Only in an appropriately secure area. A Saluki may chase wildlife or other moving objects very quickly, so ordinary recall training is not a substitute for safe containment.",
    },
    {
      question: "Does a Saluki need a lot of grooming?",
      answer:
        "Usually not as much as heavily coated breeds. Weekly brushing is a reasonable starting point, with extra care for the longer silky feathering on feathered Salukis.",
    },
    {
      question: "What is the Saluki's life expectancy?",
      answer:
        "Published reference profiles generally cite a life expectancy of 10 to 17 years, with breed club consensus noting 10 to 14 years as common. Individual longevity varies with genetics, weight management, and veterinary care.",
    },
    {
      question: "What health checks should be discussed with a breeder?",
      answer:
        "Breed-club guidance highlights cardiac examination and thyroid evaluation, with additional assessment based on the dog's history and breeding plan. Ask the breeder for health records and review them with a veterinarian.",
    },
  ],

  references: [
    "fci-saluki-standard",
    "american-kennel-club-saluki-standard",
    "american-kennel-club-saluki",
    "saluki-club-of-america-health",
    "saluki-club-of-america",
    "purina-india-saluki",
    "wikimedia-saluki-dog-srk60",
    "the-dog-api",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "purina-india-saluki",
          role: "verified",
          locator: "Breed profile: alternate name",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Includes traditional Persian Greyhound, Gazelle Hound, and Arabian Hound designations.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A reliable, breed-specific scientific name was not established; Canis lupus familiaris covers all domestic dogs.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-saluki-standard",
          role: "verified",
          locator: "FCI classification and nomenclature: Group 10, Section 1",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.breed_group",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Classified within long-haired or fringed sighthounds.",
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-saluki-standard",
          role: "verified",
          locator: "Origin and historical summary",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "The FCI standard identifies the origin as the Middle East, reflecting broad regional desert dispersal.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-saluki-standard",
          role: "verified",
          locator: "Origin and historical summary",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Middle East is the recorded geographic origin.",
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A narrower regional origin is not assigned because the breed developed across a broad Middle Eastern expanse.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-saluki-standard",
          role: "verified",
          locator: "Historical summary, utilisation and general appearance",
        },
        {
          id: "american-kennel-club-saluki",
          role: "verified",
          locator: "Breed profile: overview, exercise and training",
        },
        {
          id: "saluki-club-of-america",
          role: "verified",
          locator: "Breed history and current activities",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "User-facing descriptions are original summaries of breed-standard and kennel-club information.",
    },

    physical: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-saluki",
          role: "verified",
          locator: "Breed profile: height, weight, life expectancy, coat and grooming",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Physical descriptions and profile values are based on the cited breed profile unless a more specific claim overrides this one.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-saluki-standard",
          role: "verified",
          locator: "Official standard: general appearance and height: 23–28 inches",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.height.metric",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "The standard gives 23–28 inches for dogs and says bitches may be considerably smaller. The schema's female range is left null rather than inventing an unsupported numeric range. The Dog API reports metric equivalents of 58–71 cm.",
    },
    "physical.height.female.max": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No maximum female height is specified in the consulted standard.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-saluki",
          role: "verified",
          locator: "Breed profile: average weight: 40–65 pounds",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "The profile publishes 40–65 pounds as a general breed range across sexes. The Dog API reports metric equivalents of 18–29 kg for males and 16–25 kg for females.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-saluki",
          role: "verified",
          locator: "Breed profile: life expectancy: 10–17 years",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span",
        },
        {
          id: "saluki-club-of-america",
          role: "conflicting",
          locator: "Breed overview: life expectancy: 10–14 years",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Published estimates differ: the AKC profile gives 10–17 years, while the Saluki Club of America gives 10–14 years. The stored range follows the AKC profile and preserves that uncertainty in the FAQ.",
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-saluki-standard",
          role: "verified",
          locator: "Coat: colour",
        },
        {
          id: "american-kennel-club-saluki-standard",
          role: "verified",
          locator: "Official standard: colours",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "The FCI standard permits any colour or combination; it notes brindles as undesirable.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A sufficiently reliable breed-specific drooling level was not established.",
    },

    temperament: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-saluki-standard",
          role: "verified",
          locator: "Behaviour and temperament",
        },
        {
          id: "american-kennel-club-saluki-standard",
          role: "verified",
          locator: "Official standard: general appearance and expression",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Temperament descriptions reflect sighthound independence and reserved dignity.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-saluki",
          role: "cited",
          locator: "Breed traits and temperament profile",
        },
        {
          id: "fci-saluki-standard",
          role: "cited",
          locator: "Behaviour and temperament",
        },
      ],
      verifiedOn: null,
      note: "All 1–5 scores are editorial estimates, not standardised behavioural test results.",
    },

    care: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-saluki",
          role: "verified",
          locator: "Breed profile: exercise, grooming, training and nutrition",
        },
        {
          id: "saluki-club-of-america",
          role: "cited",
          locator: "Breed overview and activities",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Breed-specific care details are based on the cited breed profile.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-saluki",
          role: "cited",
          locator: "Exercise and activity needs",
        },
      ],
      verifiedOn: null,
      note: "The 90–120 minute range is an editorial planning estimate for a healthy adult, not a fixed requirement published by the breed standard.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Apartment suitability cannot be reduced to a reliable universal yes/no; exercise, management and the individual dog matter.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A reliable breed-specific duration for being left alone was not established.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Nutritional Assessment Guidelines",
        },
      ],
      verifiedOn: null,
      note: "General canine feeding advice emphasizing portion control and body condition monitoring.",
    },

    "nutrition.feedingFrequency": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No single puppy, adult, and senior meal frequency was established.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-saluki",
          role: "verified",
          locator: "Breed profile: health and recommended health tests",
        },
        {
          id: "saluki-club-of-america-health",
          role: "verified",
          locator: "Health: cardiac, thyroid, cancer and anaesthesia considerations",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Reported health concerns and screening advice do not imply that every Saluki will develop a listed condition.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "Dental Health Guidelines",
        },
      ],
      verifiedOn: null,
      note: "General canine dental-care guidance.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-saluki",
          role: "cited",
          locator: "Breed profile: temperament, exercise and training",
        },
      ],
      verifiedOn: null,
      note: "Suitability is an editorial assessment of typical needs, not a guarantee about an individual dog or household.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Experience and suitability vary by household; a reliable universal yes/no value was not established.",
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
      note: "Suitability depends on the owner's mobility, support and the dog's activity needs; no universal value is recorded.",
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
          id: "fci-saluki-standard",
          role: "verified",
          locator: "Breed classification, coat varieties and colour",
        },
        {
          id: "saluki-club-of-america",
          role: "verified",
          locator: "Breed history and American recognition",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Summarizes authentic sighthound history, coat varieties, and coursing heritage.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-saluki",
          role: "verified",
          locator: "Breed profile: life expectancy, exercise, grooming and health",
        },
        {
          id: "saluki-club-of-america",
          role: "verified",
          locator: "Breed overview and life expectancy",
        },
        {
          id: "saluki-club-of-america-health",
          role: "verified",
          locator: "Health guidance and recommended evaluations",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Answers summarise breed guidance in original wording and preserve differences between published lifespan estimates.",
    },
  },

  updatedOn: "2026-11-10",
};
