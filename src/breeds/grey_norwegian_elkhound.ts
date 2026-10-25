import type { Breed } from "../schema/breed.types";

export const grey_norwegian_elkhound: Breed = {
  slug: "grey-norwegian-elkhound",
  name: "Grey Norwegian Elkhound",
  scientificName: null,

  alternateNames: [
    "Norwegian Elkhound Grey",
    "Norwegian Elkhound",
    "Norsk Elghund Grå",
    "Gray Norwegian Elkhound",
    "Norwegian Moose Dog",
  ],

  group:
    "FCI Group 5 — Spitz and primitive types; Section 2 — Nordic Hunting Dogs",

  origin: {
    country: "Norway",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/NorwegianElkGrey1.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:NorwegianElkGrey1.jpg",
      title: "NorwegianElkGrey1.jpg",
      description: "Grey Norwegian Elkhound, male.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2021-07-31",
      uploadedOn: null,
      width: 1803,
      height: 1600,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-25",
    },
  ],

  overview: {
    summary:
      "The Grey Norwegian Elkhound is a sturdy, medium-sized Nordic hunting Spitz developed in Norway to track and hunt elk. It has a dense grey double coat, erect ears and a tightly curled tail. Typically alert, energetic and independent, it combines strong working instincts with the potential to be a devoted household companion when given regular activity, training and engagement.",

    description:
      "Compact and squarely built, the Grey Norwegian Elkhound has a broad wedge-shaped head, dark eyes, small erect ears and a thick tail curled over its back. Its weather-resistant coat consists of a soft undercoat and a coarse outer layer. Black-tipped guard hairs create the characteristic grey appearance, while the chest, underside and legs are generally lighter. The breed was developed for hunting large game in Nordic conditions and can cover substantial ground while tracking. Its intelligence and alertness make it responsive to learning, but its independent working style means that consistent training and secure outdoor management are important.",

    history:
      "The Grey Norwegian Elkhound is a traditional Norwegian hunting breed with a long association with Nordic big-game hunting. It was developed to locate and track elk, using stamina, scenting ability and persistent vocalisation during the hunt. The FCI records Norway as its country of origin and lists the breed as a Nordic hunting dog. Its robust build and weather-resistant coat reflect the demands of outdoor work in a cold northern climate.",

    originalPurpose:
      "Hunting elk and other large game, tracking them over varied terrain and alerting hunters through vocalisation.",

    currentRoles: [
      "Companion dog",
      "Hunting and tracking dog",
      "Scent-work participant",
      "Agility and other suitable canine sports",
      "Watchdog that alerts its household to activity",
    ],
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 52,
        max: 52,
      },
      female: {
        min: 49,
        max: 49,
      },
    },

    weight: {
      unit: "lb",
      male: {
        min: 55,
        max: 55,
      },
      female: {
        min: 48,
        max: 48,
      },
    },

    lifespanYears: {
      min: 12,
      max: 15,
    },

    coatType: "Double coat with a soft, dense undercoat and coarse outer coat",

    coatLength:
      "Medium; shorter and smooth on the head and front of the legs, longer around the neck, thighs, backs of the legs and tail",

    coatColors: [
      "Grey with black-tipped outer coat hairs",
      "Silver-grey and darker grey shades",
      "Lighter grey on the chest, belly, legs and underside of the tail",
      "Pale grey undercoat",
    ],

    sheddingLevel: "High, with heavy seasonal shedding",

    droolingLevel: null,

    distinctiveFeatures: [
      "Compact, square body with a strong, balanced build",
      "Erect, pointed and highly mobile ears",
      "Dark brown eyes and a wedge-shaped head",
      "Thick grey double coat with black-tipped guard hairs",
      "Distinctive lighter harness marking on the coat",
      "High-set tail tightly curled over the back",
      "Strong, sturdy legs suited to sustained outdoor work",
    ],
  },

  temperament: {
    traits: [
      "Energetic",
      "Fearless",
      "Brave",
      "Alert and watchful",
      "Intelligent",
      "Independent-minded",
      "Vocal, especially when alerting or working",
      "Often affectionate with familiar people",
      "Persistent when following an interesting scent",
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 4,
      independence: 4,
      trainability: 3,
      barking: 5,
      energy: 5,
    },
  },

  care: {
    exercise: {
      level: "High",

      minutesPerDay: {
        min: 60,
        max: 90,
      },

      activities: [
        "Daily walks with opportunities to explore and sniff",
        "Supervised activity in a securely fenced area",
        "Scent-work games and tracking exercises",
        "Reward-based obedience and recall practice",
        "Agility or other suitable canine sports",
        "Interactive play and enrichment activities",
      ],
    },

    grooming: {
      level: "Moderate, increasing substantially during seasonal coat changes",

      brushing:
        "Brush several times per week and increase to daily brushing during heavy shedding. A slicker brush or suitable undercoat tool can help remove loose hair without damaging the coat.",

      bathing:
        "Bathe when needed, using dog-appropriate shampoo. Avoid excessive bathing or unnecessary clipping of the weather-resistant double coat.",

      notes: [
        "Expect noticeable seasonal shedding from the dense undercoat.",
        "Check the coat and skin regularly for tangles, irritation and parasites.",
        "Inspect ears routinely and keep them clean and dry.",
        "Trim nails as needed and maintain regular dental care.",
        "The coat is designed to provide weather protection; routine clipping should not be treated as a grooming requirement.",
      ],
    },

    training: {
      difficulty: "Moderate; intelligence is balanced by an independent hunting temperament",

      tips: [
        "Use consistent, reward-based training with short and varied sessions.",
        "Start recall and leash training early, practising around gradually increasing distractions.",
        "Keep the dog on a leash or in a securely enclosed area where wildlife or traffic may be present.",
        "Teach an appropriate cue for barking and reward calm behaviour, while recognising that vocal alerting is a natural tendency.",
        "Provide scent-based activities and purposeful tasks to engage its working instincts.",
        "Introduce grooming, handling and everyday household routines positively from an early age.",
      ],

      socialization:
        "Introduce people, dogs, handling and unfamiliar environments gradually and positively. Continue practising calm behaviour throughout adulthood, and supervise interactions with children and unfamiliar animals.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "The dense double coat is suited to cold and cool conditions.",
        "Provide shade, fresh water and reduced exertion during hot or humid weather.",
        "Avoid leaving the dog exposed to extreme temperatures without shelter.",
        "Adapt outdoor activity to the dog's age, health and local weather.",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced diet appropriate to the dog's life stage, body condition and activity level.",

    feedingFrequency: {
      puppy:
        "Feed according to age, growth and the food manufacturer's instructions; obtain an individual schedule from a veterinarian.",

      adult:
        "Two measured meals daily can be a practical routine. Adjust portions according to body condition, activity and veterinary advice.",

      senior:
        "Adjust food type and portions to the dog's health, mobility, body condition and veterinary recommendations.",
    },

    guidelines:
      "Measure food portions, provide fresh water at all times and monitor body condition regularly. Active dogs may have different energy needs from less active household companions. Choose a nutritionally complete diet and make changes gradually unless a veterinarian advises otherwise.",

    considerations: [
      "Adjust portions for age, activity level, reproductive status and body condition.",
      "Avoid excessive treats that displace a balanced diet.",
      "Keep fresh water available, particularly after exercise.",
      "Discuss persistent weight changes, digestive problems or food intolerance with a veterinarian.",
      "For breeding dogs, seek veterinary guidance on nutritional needs before mating and during pregnancy or nursing.",
    ],

    note:
      "This is general canine nutrition guidance, not a breed-specific prescription. Individual dietary needs vary.",
  },

  health: {
    overview:
      "The Grey Norwegian Elkhound is a robust working breed, but it is not free from inherited or age-related health problems. Breed-club health guidance recommends hip and eye evaluation for breeding dogs. Conditions reported in the wider breed include hip dysplasia and some eye disorders; kidney problems and cancer have also been discussed in breed health information. A reported condition is not a prediction that an individual dog will develop it, and screening recommendations should be interpreted with a veterinarian.",

    commonConditions: [
      "Hip dysplasia, a developmental condition affecting the hip joints.",
      "Eye disorders, including inherited conditions that may be identified through ophthalmic evaluation.",
      "Cancer and cardiac problems have been reported as causes of illness or death in breed health information; individual risk varies.",
      "Kidney problems have been reported historically, but the available breed profile does not establish a current population-level prevalence.",
    ],

    preventiveCare: [
      "Arrange regular veterinary wellness checks and keep vaccinations and parasite prevention appropriate to the dog's needs.",
      "Maintain a healthy body condition and consistent, age-appropriate activity.",
      "Discuss any persistent lameness, eye changes, altered thirst, appetite changes or unexplained weight loss with a veterinarian.",
      "Request health documentation when acquiring a puppy and ask about the health of parents and close relatives.",
      "Seek veterinary advice before breeding and review relevant inherited-health risks.",
    ],

    recommendedScreenings: [
      "Hip evaluation using a recognised veterinary screening programme.",
      "Ophthalmologist evaluation, especially for dogs intended for breeding.",
      "A general pre-breeding veterinary examination and any additional tests recommended based on family history and clinical findings.",
    ],

    dentalCare:
      "Brush teeth regularly with dog-safe products. Arrange a veterinary dental examination if there is persistent bad breath, gum inflammation, oral pain or visible tartar.",

    earCare:
      "Check the ears regularly for redness, odour, discharge or discomfort. Ask a veterinarian to assess persistent symptoms rather than treating a suspected infection without guidance.",

    skinCare:
      "Inspect the dense coat and skin during grooming, especially during seasonal shedding. Seek veterinary advice for persistent itching, bald patches, wounds or new lumps.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "People who enjoy regular outdoor activity and scent-based games",
      "Owners who can provide consistent training and mental enrichment",
      "Households with a securely fenced outdoor area",
      "People who are comfortable living with a naturally alert and vocal dog",
      "Owners prepared to manage seasonal shedding and regular grooming",
    ],

    notIdealFor: [
      "People who need a consistently quiet dog and cannot manage alert barking",
      "Households unable to provide regular exercise and engagement",
      "Owners who expect reliable off-leash behaviour around wildlife without secure management",
      "People unwilling to maintain a dense double coat during seasonal shedding",
    ],
  },

  funFacts: [
    "The FCI classifies the Grey Norwegian Elkhound among the Nordic hunting dogs in Group 5.",
    "The breed's grey appearance comes from black tips on the outer coat rather than a single flat grey colour.",
    "The lighter harness marking is a recognised feature of the coat described in the breed standard.",
    "The breed's traditional role was hunting elk in Norway, using tracking ability, endurance and vocal alerting.",
  ],

  faq: [
    {
      question: "What was the Grey Norwegian Elkhound bred to do?",
      answer:
        "It was developed in Norway as a hunting dog for elk and other large game. Its working style combines tracking, endurance and vocal alerting.",
    },
    {
      question: "How much exercise does a Grey Norwegian Elkhound need?",
      answer:
        "It needs regular daily activity and mental engagement. The 60–90 minute range in this profile is an editorial estimate for a healthy adult, not a fixed requirement from the breed standard. Age, health and individual drive should guide the actual routine.",
    },
    {
      question: "Does the Grey Norwegian Elkhound shed a lot?",
      answer:
        "Yes. Its dense double coat can shed heavily, particularly during seasonal coat changes. Regular brushing helps remove loose undercoat and manage hair around the home.",
    },
    {
      question: "Is the Grey Norwegian Elkhound easy to train?",
      answer:
        "It is intelligent and capable of learning, but its independent hunting instincts can make repetitive training less effective. Short, rewarding sessions and purposeful activities are often more useful than harsh or repetitive methods.",
    },
    {
      question: "Can this breed live in an apartment?",
      answer:
        "Apartment suitability depends on the individual dog, exercise, barking management and the household. No universal yes-or-no value is recorded here. A prospective owner should carefully assess whether the dog's activity and vocal tendencies can be managed in their living situation.",
    },
    {
      question: "What health checks should I ask a breeder about?",
      answer:
        "Ask for hip evaluation and ophthalmic examination records, along with the parents' wider veterinary history. A veterinarian can advise whether any additional tests are appropriate for the individual dog's family history and breeding plans.",
    },
  ],

  references: [
    "fci-norwegian-elkhound-grey-standard",
    "american-kennel-club-norwegian-elkhound-standard",
    "american-kennel-club-norwegian-elkhound",
    "norwegian-elkhound-association-of-america-health",
    "royal-kennel-club-norwegian-elkhound",
    "wikimedia-norwegian-elkhound-grey-canarian",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-norwegian-elkhound-grey-standard",
          role: "verified",
          locator: "Breed nomenclature and standard name",
        },
        {
          id: "american-kennel-club-norwegian-elkhound",
          role: "verified",
          locator: "Breed profile and alternate-name context",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Alternate names are recorded across breed references. The record specifically represents the grey variety, not the Black Norwegian Elkhound.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A breed-specific scientific name was not established from the consulted sources.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-norwegian-elkhound-grey-standard",
          role: "verified",
          locator: "FCI classification, Group 5 and Section 2",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-norwegian-elkhound-grey-standard",
          role: "verified",
          locator: "Origin and utilisation",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The FCI standard identifies Norway as the country of origin.",
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A more specific region of origin was not established by the official standard.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-norwegian-elkhound-grey-standard",
          role: "verified",
          locator: "Utilisation, general appearance, behaviour and coat",
        },
        {
          id: "american-kennel-club-norwegian-elkhound",
          role: "verified",
          locator: "Breed profile: history, characteristics and exercise",
        },
        {
          id: "royal-kennel-club-norwegian-elkhound",
          role: "cited",
          locator: "Breed standard and historical overview",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Descriptions are original summaries of breed-standard and kennel-club information.",
    },

    physical: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-norwegian-elkhound",
          role: "verified",
          locator: "Breed profile: height, weight, life expectancy and coat",
        },
        {
          id: "fci-norwegian-elkhound-grey-standard",
          role: "verified",
          locator: "General appearance, coat and size",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Physical characteristics are based on the official standard and breed profile. Specific measurement claims below record the source's published units.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-norwegian-elkhound-grey-standard",
          role: "verified",
          locator: "Size and weight: ideal height at the withers",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The FCI standard publishes ideal heights of 52 cm for males and 49 cm for females, not minimum-to-maximum intervals. Equal bounds encode the published ideal values in a range-only schema; they must not be interpreted as a permitted height range.",
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-norwegian-elkhound-standard",
          role: "verified",
          locator: "Official standard: size, proportion and substance",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The AKC standard publishes approximate weights of about 55 pounds for males and 48 pounds for females. Equal bounds encode those approximate point values in the range-only schema; they are not weight limits.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-norwegian-elkhound",
          role: "verified",
          locator: "Breed profile: life expectancy",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The breed profile lists 12–15 years. Individual lifespan varies and this range is not a prediction for a specific dog.",
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-norwegian-elkhound-grey-standard",
          role: "verified",
          locator: "Coat: colour",
        },
        {
          id: "american-kennel-club-norwegian-elkhound-standard",
          role: "verified",
          locator: "Official standard: colour",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The FCI standard describes grey shades created by black tips on the outer coat and a lighter undercoat. The grey variety should not be conflated with the Black Norwegian Elkhound.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A reliable breed-specific drooling level was not established.",
    },

    temperament: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-norwegian-elkhound-grey-standard",
          role: "verified",
          locator: "Behaviour and character",
        },
        {
          id: "royal-kennel-club-norwegian-elkhound",
          role: "verified",
          locator: "Temperament",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The standard describes typical breed character. Individual dogs may differ.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-norwegian-elkhound",
          role: "cited",
          locator: "Breed traits, exercise, training and barking",
        },
      ],
      verifiedOn: null,
      note: "All 1–5 temperament scores are editorial estimates, not results of standardised behavioural tests.",
    },

    care: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-norwegian-elkhound",
          role: "verified",
          locator: "Breed profile: grooming, exercise, training and nutrition",
        },
        {
          id: "royal-kennel-club-norwegian-elkhound",
          role: "cited",
          locator: "Breed characteristics and coat",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Breed-specific care characteristics are sourced from kennel-club information; general advice is identified separately.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-norwegian-elkhound",
          role: "cited",
          locator: "Exercise and activity needs",
        },
        {
          id: "royal-kennel-club-norwegian-elkhound",
          role: "cited",
          locator: "Breed characteristics: exercise",
        },
      ],
      verifiedOn: null,
      note: "The 60–90 minute range is an editorial planning estimate, not a fixed requirement stated in the breed standard.",
    },

    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Suggested activities are general care guidance and should be adapted to the dog's age, health and training.",
    },

    "care.grooming.bathing": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General bathing guidance; frequency depends on coat, skin and lifestyle.",
    },

    "care.grooming.notes": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine coat, ear, nail and dental maintenance guidance.",
    },

    "care.training.tips": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General reward-based training and safety guidance.",
    },

    "care.training.socialization": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General positive socialisation advice; adapt to the individual dog.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Apartment suitability depends on exercise, vocal behaviour and the individual household; no universal yes-or-no value is recorded.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-norwegian-elkhound",
          role: "cited",
          locator: "Exercise and outdoor management guidance",
        },
      ],
      verifiedOn: null,
      note: "A secure yard can help with activity and management but does not replace walks, enrichment or supervision.",
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General climate and heat-safety advice.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A reliable breed-specific duration for being left alone was not established.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine nutrition guidance, not a breed-specific veterinary diet.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-norwegian-elkhound",
          role: "verified",
          locator: "Breed profile: health concerns and recommended health tests",
        },
        {
          id: "norwegian-elkhound-association-of-america-health",
          role: "verified",
          locator: "Health statement: hip dysplasia and ocular examination",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Reported conditions and screening recommendations do not mean every dog will develop a listed condition.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive veterinary care guidance.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine dental-care guidance.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General ear-monitoring guidance; seek veterinary advice for symptoms.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General skin and coat inspection guidance.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-norwegian-elkhound",
          role: "cited",
          locator: "Breed profile: exercise, training, grooming and temperament",
        },
      ],
      verifiedOn: null,
      note: "Suitability is an editorial assessment of typical breed needs, not a guarantee about an individual dog or household.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Experience and household needs vary; a reliable universal yes-or-no value was not established.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability around children depends on the individual dog, supervision and household; no universal breed-level yes-or-no value is recorded.",
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
      note: "Apartment suitability depends on exercise, vocal behaviour and management; no universal yes-or-no value is recorded.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-norwegian-elkhound-grey-standard",
          role: "verified",
          locator: "FCI classification, coat and traditional utilisation",
        },
        {
          id: "american-kennel-club-norwegian-elkhound",
          role: "verified",
          locator: "Breed history and characteristics",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-norwegian-elkhound-grey-standard",
          role: "verified",
          locator: "Utilisation, coat and behaviour",
        },
        {
          id: "american-kennel-club-norwegian-elkhound",
          role: "verified",
          locator: "Life expectancy, exercise, grooming and health",
        },
        {
          id: "norwegian-elkhound-association-of-america-health",
          role: "verified",
          locator: "Recommended health evaluations",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Answers are original summaries of the cited breed information and distinguish general advice from breed-specific guidance.",
    },
  },

  updatedOn: "2026-10-25",
};
