import type { Breed } from "../schema/breed.types";

export const polish_hound: Breed = {
  slug: "polish-hound",
  name: "Polish Hound",
  scientificName: null,

  alternateNames: [
    "Ogar Polski",
    "Ogar polski",
    "Polnische Bracke",
    "Brachet polonais",
    "Sabueso Polaco",
  ],

  group:
    "FCI Group 6 — Scent hounds and related breeds; Section 1.1 — Large-sized Hounds",

  origin: {
    country: "Poland",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ogar_polski_-_pies.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Ogar_polski_-_pies.jpg",
      title: "Ogar polski - pies.jpg",
      description:
        "Polish Hound photographed outdoors; the original file page describes a male with slight greying around the muzzle.",
      creator: "Malgo.milek",
      uploader: "Malgo.milek",
      capturedOn: "2023-05-16",
      uploadedOn: "2023-07-19",
      width: 3101,
      height: 2067,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Malgo.milek, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-25",
    },
  ],

  overview: {
    summary:
      "The Polish Hound, also known as the Ogar Polski, is a sturdy Polish scent hound developed for tracking game over long distances. Its strong build, hanging ears, dark body and tan markings reflect its traditional working role. It follows scent with persistence and may give a deep, audible voice while pursuing a trail.",

    description:
      "The Polish Hound is a medium-sized, substantial hound built for endurance rather than bursts of speed. Its body is slightly longer than its height at the withers, and its head is strong, with pendulous ears and a dark nose. The coat is dense and medium in length, usually showing a dark body with tan areas on the head and limbs; limited white markings may occur. The breed was developed as a scent hound, so tracking and pursuing an interesting trail can be highly motivating. Its working voice may also be noticeable in everyday life. Prospective owners should plan for secure outdoor exercise, patient reward-based training and activities that give the dog appropriate opportunities to use its nose. Temperament and household suitability still vary between individual dogs and depend on socialisation, training, health and environment.",

    history:
      "The Polish Hound is an established Polish hunting breed with a long documented history. Accounts of hunting with hounds in Poland appear in medieval chronicles, and historical writing from the sixteenth and seventeenth centuries discusses the Ogar and its use in hunting. After the Second World War, the population within Poland's new borders had become very small. In 1959, Piotr Kartawik brought four Polish Hounds from the area that is now in Belarus and established a kennel that helped rebuild the breed. A standard was prepared in the 1960s, and the breed was subsequently entered in the FCI register. The modern breed remains associated with scent-based hunting work.",

    originalPurpose:
      "To track and pursue game by scent, historically including hare, fox, roe deer and wild boar, as well as assisting in some forms of duck hunting.",

    currentRoles: [
      "Scent-based hunting work where lawful",
      "Tracking and nose-work activities",
      "Active outdoor companionship for owners prepared for a working hound",
      "Conformation showing",
    ],
  },

  physical: {
    sizeCategory: "Medium-sized, strongly built scent hound",

    height: {
      unit: "cm",
      male: { min: 56, max: 65 },
      female: { min: 55, max: 60 },
    },

    weight: {
      unit: "lb",
      male: { min: 55, max: 70 },
      female: { min: 44, max: 57 },
    },

    lifespanYears: null,

    coatType:
      "Medium-length, thick coat with a dense undercoat; the hair is somewhat longer along the back, the rear of the hindquarters and the lower part of the tail.",

    coatLength: "Medium",

    coatColors: [
      "Dark grey to black body with tan markings",
      "Tan markings ranging from fawn to deeper cinnamon shades",
      "Limited white markings may occur on the muzzle, chest, lower legs or tail",
    ],

    sheddingLevel:
      "Shedding should be expected because the coat includes a dense undercoat. The amount may vary with season and the individual dog's coat condition.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Strong, substantial body designed for endurance",
      "Body slightly longer than height at the withers",
      "Pendulous ears set relatively low",
      "Dark body with tan markings on the head and limbs",
      "Dense, medium-length coat with an undercoat",
      "A characteristic audible voice when following a trail",
    ],
  },

  temperament: {
    traits: [
      "Persistent when following a scent",
      "Enduring and purposeful in working conditions",
      "Often devoted to familiar household members",
      "May be wary of unfamiliar people",
      "Vocal during scent pursuit",
      "Can be independent when following a trail",
      "Needs suitable outlets for its natural tracking behaviour",
    ],

    // Editorial 1–5 estimates, not standardised behavioural test results.
    scores: {
      affection: 4,
      withChildren: null,
      withDogs: null,
      withStrangers: 3,
      protectiveness: 3,
      independence: 4,
      trainability: 3,
      barking: 5,
      energy: 4,
    },
  },

  care: {
    exercise: {
      level: "High",

      // Practical editorial estimate for a healthy adult, not an official
      // breed-standard requirement.
      minutesPerDay: {
        min: 60,
        max: 120,
      },

      activities: [
        "Long walks in safe, suitable environments",
        "Supervised scent-tracking and nose-work games",
        "Reward-based recall and lead training",
        "Structured outdoor exploration",
        "Food puzzles and other problem-solving activities",
        "Suitable hunting-related work where lawful and appropriate",
      ],
    },

    grooming: {
      level: "Low to moderate",

      brushing:
        "Brush regularly to remove loose hair and dirt. A soft brush or grooming mitt can help maintain the coat; brush more often during heavier shedding. Check the coat and skin after walks through woodland, fields or dense vegetation.",

      bathing:
        "Bathe when needed because the coat is dirty or has an odour. Use a dog-appropriate shampoo, rinse thoroughly and avoid unnecessary frequent bathing.",

      notes: [
        "Check the hanging ears regularly for redness, odour, discharge or discomfort.",
        "Inspect the coat and skin after outdoor activity.",
        "Keep nails trimmed to a comfortable length.",
        "Brush teeth regularly with dog-specific dental products.",
        "Introduce grooming and handling gradually and positively.",
      ],
    },

    training: {
      difficulty:
        "Moderate to challenging for handlers unfamiliar with scent hounds. An interesting trail may compete strongly with a handler's cues, so training should be consistent and carefully managed.",

      tips: [
        "Use reward-based training and short, clear cues.",
        "Build recall in low-distraction settings before increasing difficulty.",
        "Use a lead or long line in unsecured outdoor areas.",
        "Reward check-ins and calm behaviour, not only active performance.",
        "Provide appropriate scent games and tracking activities.",
        "Practise settling, lead skills and handling from an early age.",
        "Avoid assuming that a trained recall will always override a strong scent interest.",
      ],

      socialization:
        "Introduce the dog gradually and positively to people, dogs, handling and everyday environments. Supervise interactions with children and unfamiliar animals, and train calm behaviour around wildlife. A breed description cannot guarantee how an individual dog will respond.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Cool and temperate conditions",
        "Cold weather with appropriate shelter and monitoring",
        "Warm weather with shade, water and exercise scheduled for cooler periods",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced dog food suited to the dog's life stage, body condition, activity and veterinary needs.",

    feedingFrequency: {
      puppy:
        "Feed a complete puppy diet in age-appropriate meals. Adjust portions as the puppy grows, using the food's feeding guidance and veterinary advice.",

      adult:
        "Many adult dogs do well with two measured meals per day. Adjust the amount for workload, body condition and individual health needs rather than using one fixed portion for every dog.",

      senior:
        "Adjust food type and portions to the older dog's body condition, activity and health. A veterinarian can advise whether a different diet is appropriate.",
    },

    guidelines:
      "Measure daily portions and monitor body condition. Keep fresh water available, especially during and after exercise, and include training treats in the daily food allowance. Make routine food changes gradually unless a veterinarian advises otherwise. Working dogs may have different energy needs from less active companions, so adjust feeding to the individual dog rather than assuming every Polish Hound needs the same amount.",

    considerations: [
      "Adjust portions to age, workload and body condition.",
      "Avoid excess weight that may add strain to joints.",
      "Provide fresh water during and after activity.",
      "Count treats as part of the daily food allowance.",
      "Discuss persistent digestive or weight concerns with a veterinarian.",
    ],

    note:
      "A verified Polish Hound-specific calorie target or feeding schedule was not established from the reviewed breed standards. Individual requirements depend on age, activity, body condition and health.",
  },

  health: {
    overview:
      "The reviewed breed standards describe conformation and working characteristics, but they do not establish a reliable, comprehensive list of common diseases or breed-specific disease prevalence. This record therefore does not label particular diseases as common in the Polish Hound without adequate evidence. Routine veterinary care, healthy body condition, responsible breeding and discussion of the dog's family health history remain important.",

    commonConditions: [],

    preventiveCare: [
      "Arrange routine veterinary examinations and follow vaccination and parasite-prevention advice appropriate to local risks.",
      "Maintain a healthy body condition and suitable exercise routine.",
      "Check ears, paws, skin and coat after outdoor activity.",
      "Provide regular dental care and nail trimming.",
      "Ask a responsible breeder about the parents' health history and any screening performed.",
    ],

    recommendedScreenings: [],

    dentalCare:
      "Brush teeth regularly with dog-specific toothpaste and a suitable brush. Ask a veterinarian to assess persistent bad breath, tartar, gum inflammation or changes in eating behaviour.",

    earCare:
      "Check the hanging ears regularly for redness, odour, discharge or discomfort. Clean only as advised by a veterinarian, and do not insert cotton swabs deep into the ear canal.",

    skinCare:
      "Inspect the skin and coat after outdoor activity for parasites, plant material, scratches or irritation. Seek veterinary advice for persistent itching, hair loss, sores or recurring skin problems.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "People who can provide substantial daily outdoor activity",
      "Owners interested in scent work, tracking or suitable hunting activities",
      "Households prepared to train recall and manage scent-driven behaviour",
      "Owners who understand the needs of an independent working hound",
    ],

    notIdealFor: [
      "People looking for a low-energy dog with minimal exercise needs",
      "Homes where the dog would routinely be off lead in unsecured areas",
      "Owners unable to provide consistent training and meaningful activity",
      "Households expecting a scent hound to ignore interesting trails reliably",
    ],
  },

  funFacts: [
    "The Polish name of the breed is Ogar Polski.",
    "Historical Polish writing about Ogar hounds dates back several centuries.",
    "The breed's traditional work relies on following scent rather than speed alone.",
    "Its characteristic vocal pursuit is an important part of its traditional hunting style.",
  ],

  faq: [
    {
      question: "What is another name for the Polish Hound?",
      answer:
        "The breed is also known as the Ogar Polski, its Polish name.",
    },
    {
      question: "What was the Polish Hound bred to do?",
      answer:
        "It was developed as a scent hound for tracking and pursuing game. Historical uses included several kinds of game, while the current legal context for hunting varies by location.",
    },
    {
      question: "Is the Polish Hound vocal?",
      answer:
        "Yes. The breed standard describes loud barking during scent pursuit. How vocal an individual dog is at home can also depend on training, environment and opportunities to use its working instincts.",
    },
    {
      question: "What does a Polish Hound look like?",
      answer:
        "It is a substantial, medium-sized hound with hanging ears, a dense medium-length coat and a dark body with tan markings. Limited white markings may also occur.",
    },
    {
      question: "How much exercise does a Polish Hound need?",
      answer:
        "It is a working scent hound that generally benefits from regular, substantial activity and opportunities to use its nose. The daily exercise range in this record is a practical editorial estimate, not an official standard requirement.",
    },
    {
      question: "Which health problems are common in Polish Hounds?",
      answer:
        "The reviewed sources did not establish a reliable breed-specific prevalence list. Ask breeders about family health history and available screening, and consult a veterinarian about appropriate preventive care.",
    },
  ],

  references: [
    "fci-polish-hound-official-standard",
    "united-kennel-club-polish-hound-standard",
    "wikimedia-ogar-polski-pies-malgo-milek-2023",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The reviewed breed standards do not establish a distinct breed-specific scientific name.",
    },

    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "verified",
          locator: "Official breed name and translated nomenclature",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "verified",
          locator: "FCI classification",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "verified",
          locator: "Origin",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A narrower region of origin was not established by the reviewed official standard.",
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "verified",
          locator: "Historical summary, utilisation, general appearance and temperament",
        },
        {
          id: "united-kennel-club-polish-hound-standard",
          role: "cited",
          locator: "General appearance, coat, colour and working characteristics",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "User-facing prose is an original summary of the cited breed standards.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "verified",
          locator: "General appearance, coat and height",
        },
        {
          id: "united-kennel-club-polish-hound-standard",
          role: "verified",
          locator: "Height and weight",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Height follows the FCI standard in centimetres; weight follows the UKC standard in pounds. Measurements from different standards may not be identical.",
    },

    "physical.lifespanYears": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No sufficiently reliable breed-specific lifespan range was established from the reviewed primary sources.",
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "cited",
          locator: "Coat description, including dense undercoat",
        },
      ],
      verifiedOn: null,
      note: "Editorial estimate based on the described coat; the standard does not quantify shedding.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling level was established.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "cited",
          locator: "Utilisation and temperament",
        },
        {
          id: "united-kennel-club-polish-hound-standard",
          role: "cited",
          locator: "Breed characteristics and working purpose",
        },
      ],
      verifiedOn: null,
      note: "Scores are editorial 1–5 estimates, not standardised behavioural measurements.",
    },

    "temperament.scores.withChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No sufficiently reliable evidence was established for a comparative score of compatibility with children.",
    },

    "temperament.scores.withDogs": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No sufficiently reliable evidence was established for a comparative score of compatibility with other dogs.",
    },
    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "verified",
          locator: "Temperament and utilisation",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Traits are summarised from the breed standard's temperament and working-purpose descriptions; individual dogs may differ.",
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "cited",
          locator: "Scent-hound utilisation, endurance and working behaviour",
        },
      ],
      verifiedOn: null,
      note: "Practical care advice informed by the breed's working purpose; recommendations are not official standard requirements.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "cited",
          locator: "General appearance and utilisation as a scent hound",
        },
      ],
      verifiedOn: null,
      note: "Practical starting estimate for a healthy adult, not a validated breed-specific requirement.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a universal apartment-suitability classification.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Reliable breed-specific evidence about tolerance for being left alone was not established.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine nutrition guidance; adjust the diet to the individual dog's life stage, activity, body condition and veterinary needs.",
    },

    health: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive-care guidance. The reviewed breed standards do not establish breed-specific disease prevalence.",
    },

    "health.commonConditions": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No sufficiently reliable breed-specific list of common conditions and prevalence was established.",
    },

    "health.recommendedScreenings": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific screening protocol was established from the reviewed sources. Ask a veterinarian or responsible breeder about appropriate screening for the individual dog.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine canine preventive-care advice, not a breed-specific medical claim.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine dental-care advice.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "cited",
          locator: "Description of pendulous ears",
        },
      ],
      verifiedOn: null,
      note: "General ear-care advice; no breed-specific ear-disease rate is claimed.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General skin and coat care advice.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "cited",
          locator: "Scent-hound utilisation and working temperament",
        },
      ],
      verifiedOn: null,
      note: "Editorial household guidance based on working characteristics, not a guarantee of an individual dog's behaviour.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal first-time-owner suitability classification was established.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability depends on the individual dog, children's behaviour, supervision and socialisation; no universal classification is recorded.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability depends on the owner's capacity to meet the individual dog's exercise and training needs.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a universal apartment-living classification.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "verified",
          locator: "Official name, historical summary and utilisation",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "verified",
          locator: "Breed name, utilisation, coat and temperament",
        },
        {
          id: "united-kennel-club-polish-hound-standard",
          role: "cited",
          locator: "Height, weight, coat and colour",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Answers are original summaries and distinguish standard facts from editorial care estimates.",
    },
  },

  updatedOn: "2026-10-25",
};
