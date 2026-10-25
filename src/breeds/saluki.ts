import type { Breed } from "../schema/breed.types";

export const saluki: Breed = {
  slug: "saluki",
  name: "Saluki",
  scientificName: null,

  alternateNames: [
    "Persian Greyhound",
  ],

  group: "FCI Group 10 — Sighthounds; Section 1 — Long-haired or fringed Sighthounds",

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
      metadataCheckedOn: "2026-10-25",
    },
  ],

  overview: {
    summary:
      "The Saluki is an ancient Middle Eastern sighthound built for speed, endurance and visual pursuit. Elegant and fine-boned without being fragile, it is typically dignified, gentle with its family and independently minded. Its strong chasing instinct means it needs regular exercise and secure spaces where it can run safely.",

    description:
      "Salukis have a long, narrow head, a deep chest, long limbs and a lightly curved tail. Their outline is athletic and balanced, reflecting a history of pursuing fast game across varied terrain. The coat occurs in two recognised forms: a feathered variety with silky furnishings on areas such as the ears, legs and tail, and a smooth variety without feathering. Although often calm indoors after suitable activity, Salukis are sight-driven hunters and may chase moving animals. Reliable fencing, thoughtful leash use and reward-based training are important parts of everyday life with this breed.",

    history:
      "The Saluki developed across the Middle East, where different communities maintained dogs suited to local terrain and hunting needs. Its traditional role was to pursue game by sight, and its history is closely associated with desert hunting cultures. The breed was established in the United States in the 1920s and received American Kennel Club recognition in 1927.",

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
      "Other colours or combinations permitted by the FCI standard",
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
      puppy:
        "Feed according to the puppy's age, growth and the food manufacturer's guidance; ask a veterinarian for an individual schedule.",

      adult:
        "Two measured meals per day can be a practical routine; adjust portions to body condition, activity and veterinary advice.",

      senior:
        "Choose food and meal portions according to health, activity, dental condition and veterinary guidance.",
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
      "Salukis are often described as a relatively hardy breed, but they still need routine veterinary care. Breed-club guidance highlights cardiac health, thyroid interpretation, cancer awareness and the need to discuss sighthound-specific considerations before anaesthesia. A screening recommendation identifies something worth assessing; it does not mean that every Saluki will develop the condition.",

    commonConditions: [
      "Cardiac conditions, including dilated cardiomyopathy, have been reported; individual risk varies.",
      "Thyroid test results may differ from typical ranges used for many other breeds, so results should be interpreted in clinical context.",
      "Cancer can occur, as in other dogs; routine veterinary checks are important.",
      "Gastric dilatation-volvulus (bloat) is a serious emergency risk in dogs and is discussed in Saluki breed guidance.",
      "Anaesthesia planning deserves particular attention in lean sighthounds; discuss the dog's breed and medical history with the veterinarian.",
    ],

    preventiveCare: [
      "Arrange regular veterinary wellness examinations and keep vaccinations and parasite prevention appropriate to the dog's needs.",
      "Maintain a healthy body condition and an age-appropriate exercise routine.",
      "Seek urgent veterinary care for sudden abdominal swelling, repeated unproductive retching, collapse or severe distress.",
      "Tell the veterinarian that the dog is a Saluki before surgery or sedation, and follow their individual anaesthesia plan.",
      "Discuss any persistent change in stamina, appetite, weight, breathing or behaviour with a veterinarian.",
    ],

    recommendedScreenings: [
      "Cardiac examination, with further testing if indicated by the veterinarian or breeding plan.",
      "Thyroid evaluation when clinically appropriate, interpreted with awareness of sighthound-specific reference considerations.",
      "Before breeding, discuss additional health testing and the parents' medical history with the veterinarian and responsible breed club.",
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
    "The FCI recognises both feathered and smooth Salukis; the smooth variety lacks the longer feathering.",
    "The breed standard allows a wide range of coat colours and combinations.",
    "Salukis were developed as sight-driven hunting dogs, so their response to fast-moving animals can be stronger than their response to a familiar recall cue.",
    "The Saluki Club of America was formed in 1927, the same year the breed was recognised by the American Kennel Club.",
  ],

  faq: [
    {
      question: "Is a Saluki a good family dog?",
      answer:
        "A Saluki may be a good companion in a household that understands its independent nature and exercise needs. Compatibility with children depends on the individual dog, supervision and the family's experience; no breed label replaces careful introductions and adult supervision.",
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
        "The AKC profile lists 10–17 years, while the Saluki Club of America gives 10–14 years. These are population-level estimates, not a prediction for an individual dog; health, genetics and care all matter.",
    },
    {
      question: "What health checks should be discussed with a breeder?",
      answer:
        "Saluki breed-club guidance highlights cardiac examination and thyroid evaluation, with additional assessment based on the dog's history and breeding plan. Ask the breeder for health records and review them with a veterinarian.",
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
      ],
      verifiedOn: "2026-10-25",
      note: "Persian Greyhound is recorded as an alternate name in the consulted breed profile.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A reliable, breed-specific scientific name was not established; no taxonomic name is inferred.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-saluki-standard",
          role: "verified",
          locator: "FCI classification and nomenclature",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-saluki-standard",
          role: "verified",
          locator: "Origin and historical summary",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The FCI identifies the origin as the Middle East; this is a broad region, not a single modern country.",
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A more specific region of origin is not assigned because the breed developed across a broad area.",
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
      verifiedOn: "2026-10-25",
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
      verifiedOn: "2026-10-25",
      note: "Physical descriptions and profile values are based on the cited breed profile unless a more specific claim overrides this one.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-saluki-standard",
          role: "verified",
          locator: "Official standard: general appearance and height",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The standard gives 23–28 inches for dogs and says bitches may be considerably smaller. The schema's female range is left null rather than inventing a numeric female range.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-saluki",
          role: "verified",
          locator: "Breed profile: average weight",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The profile publishes 40–65 pounds as a general breed range, not as separate male and female ranges. The schema only offers sex-specific slots, so the same overall range is repeated in both slots; these must not be interpreted as sex-specific estimates.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-saluki",
          role: "verified",
          locator: "Breed profile: life expectancy",
        },
        {
          id: "saluki-club-of-america",
          role: "conflicting",
          locator: "Breed overview: life expectancy",
        },
      ],
      verifiedOn: "2026-10-25",
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
      verifiedOn: "2026-10-25",
      note: "The FCI standard permits any colour or combination; it notes brindles as undesirable. The listed examples are not an exhaustive list of all permitted combinations.",
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
      ],
      verifiedOn: "2026-10-25",
      note: "Temperament descriptions reflect breed-standard language and should not be treated as guarantees about individual dogs.",
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
      verifiedOn: "2026-10-25",
      note: "Breed-specific care details are based on the cited breed profile; general care advice is identified separately where applicable.",
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

    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Suggested activities are general care guidance and should be adapted to the dog's health, age and training.",
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
      note: "Routine grooming guidance for coat, ears, nails and teeth.",
    },

    "care.training.tips": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General reward-based training and safety advice.",
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
      note: "Apartment suitability cannot be reduced to a reliable universal yes/no; exercise, management and the individual dog matter.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-saluki",
          role: "cited",
          locator: "Exercise and secure-yard guidance",
        },
      ],
      verifiedOn: null,
      note: "A secure yard can help provide safe activity but does not replace walks, enrichment or supervision.",
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General advice about shelter, hydration and temperature management.",
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
      note: "General canine feeding advice, not a breed-specific veterinary diet.",
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
      verifiedOn: "2026-10-25",
      note: "Reported health concerns and screening advice do not imply that every Saluki will develop a listed condition.",
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
      verifiedOn: "2026-10-25",
      note: null,
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
      verifiedOn: "2026-10-25",
      note: "Answers summarise breed guidance in original wording and preserve differences between published lifespan estimates.",
    },
  },

  updatedOn: "2026-10-25",
};
