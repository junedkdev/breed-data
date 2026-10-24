import type { Breed } from "../schema/breed.types";

export const puli: Breed = {
  slug: "puli",
  name: "Puli",
  scientificName: null,

  alternateNames: [
    "Hungarian Puli",
    "Pulik",
  ],

  group: "FCI Group 1 — Sheepdogs and Cattledogs; Section 1 — Sheepdogs",

  origin: {
    country: "Hungary",
    region: "Carpathian Basin; historical development associated with Hungarian herding communities",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/PuliDog.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:PuliDog.jpg",
      title: "PuliDog.jpg",
      description: "A Hungarian Puli with its characteristic corded coat.",
      creator: "Steve Jurvetson",
      uploader: "Flickr upload bot",
      capturedOn: "2007-09-23",
      uploadedOn: "2008-02-28",
      width: 2106,
      height: 2068,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Steve Jurvetson, via Wikimedia Commons, CC BY 2.0 (https://creativecommons.org/licenses/by/2.0/). Indicate changes, if any.",
      restrictions: null,
      metadataCheckedOn: "2026-10-24",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Puli_white.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Puli_white.jpg",
      title: "Puli white.jpg",
      description: "A white male Puli photographed outdoors.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2016-11-13",
      uploadedOn: "2016-11-14",
      width: 600,
      height: 475,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-24",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ziggy_the_Puli_%28cropped%29.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Ziggy_the_Puli_(cropped).jpg",
      title: "Ziggy the Puli (cropped).jpg",
      description: "A grey Puli photographed as an adult dog.",
      creator: "Sminthopsis84",
      uploader: "Sagaciousphil",
      capturedOn: "2008-05-27",
      uploadedOn: "2014-08-21",
      width: 1070,
      height: 1311,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Sminthopsis84, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-24",
    },
  ],

  overview: {
    summary:
      "The Puli is a lively Hungarian herding dog best known for its distinctive coat, which naturally forms dense cords as it matures. Compact, agile and quick to learn, it was developed to work closely with people and manage livestock. It often forms a close bond with its household and benefits from regular activity, mental challenges and a consistent routine. Its unusual coat needs dedicated maintenance, especially when kept corded.",

    description:
      "Beneath its unmistakable coat, the Puli is a medium-sized, muscular dog with a square outline and light, agile movement. The coat combines a woolly undercoat with a coarser outer coat; as it develops, the hair can form round cords or flatter, ribbon-like locks. Its appearance should not obscure the needs of the dog underneath: regular movement, training, social contact and careful health checks remain important. Pulik were bred to work with herders, so many enjoy learning tasks and taking part in activities with their people. They can be alert and reserved around unfamiliar visitors, making early positive socialisation and thoughtful introductions valuable. Owners should plan for the practical demands of whichever coat style they choose, since a corded coat takes time to wash and dry thoroughly.",

    history:
      "The Puli is an old Hungarian herding breed with historical links to the livestock-keeping communities of the Carpathian Basin. The FCI standard describes it as a Hungarian breed of Asian origin and says its ancestors most probably arrived with migrating Magyar groups who practised nomadic animal husbandry. The Puli worked with flocks and helped people manage livestock in the Hungarian countryside. Although the breed's history reaches back many centuries, precise claims about individual ancestral breeds or a single date of origin are not established by the reviewed standards.",

    originalPurpose:
      "Herding and working alongside people managing livestock, especially sheep.",

    currentRoles: [
      "Companion dog",
      "Herding activities where suitable and available",
      "Obedience and rally training",
      "Agility and other appropriate dog sports",
      "Scent games and interactive enrichment",
      "Conformation showing",
    ],
  },

  physical: {
    sizeCategory: "Medium",

    // FCI Standard No. 55 gives these permitted height ranges.
    height: {
      unit: "cm",
      male: { min: 39, max: 45 },
      female: { min: 36, max: 42 },
    },

    // The reviewed official standard does not specify a weight range.
    weight: {
      unit: null,
      male: null,
      female: null,
    },

    lifespanYears: {
      min: 10,
      max: 15,
    },

    coatType:
      "A double coat with a dense, woolly undercoat and a coarser, wavy or curly outer coat. The two coat layers combine to form natural cords or locks as the dog matures.",

    coatLength:
      "Long and corded in the mature coat; cords can become very long if allowed to grow. The coat may also be maintained brushed out or clipped, depending on the owner's chosen style.",

    coatColors: [
      "Pearl white",
      "Black",
      "Black shaded with rust-red or grey",
      "Fawn with a pronounced black mask",
      "Grey in any shade",
    ],

    sheddingLevel: null,
    droolingLevel: null,

    distinctiveFeatures: [
      "Distinctive cords or locks formed by the double coat",
      "Compact, square proportions and a muscular body",
      "Light-footed, agile movement",
      "A profusely coated head that can partly obscure the eyes",
      "A heavily coated tail carried curled over the back",
      "A coat that needs deliberate maintenance to remain clean and healthy",
    ],
  },

  temperament: {
    traits: [
      "Lively and energetic",
      "Intelligent and responsive to training",
      "Alert to activity around the home",
      "Closely bonded with familiar people",
      "Playful and curious",
      "Potentially reserved around unfamiliar people",
      "Independent enough to benefit from clear, consistent routines",
    ],

    // Editorial estimates, not results from a standardised temperament test.
    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 4,
      independence: 3,
      trainability: 4,
      barking: 4,
      energy: 4,
    },
  },

  care: {
    exercise: {
      level: "High",

      // No breed-standard daily minute target was established.
      minutesPerDay: null,

      activities: [
        "Daily walks and opportunities to explore safely",
        "Reward-based obedience sessions",
        "Interactive games and food puzzles",
        "Agility or other suitable dog sports",
        "Scent games and problem-solving activities",
        "Herding activities with appropriate instruction where available",
      ],
    },

    grooming: {
      level: "High",

      brushing:
        "Grooming depends on the chosen coat style. For a corded coat, check the skin and separate developing cords by hand so that they form evenly without becoming one large, compact mat. For a brushed-out coat, frequent thorough brushing is needed to prevent tangles. Check the coat down to the skin rather than only grooming its surface.",

      bathing:
        "Bathe when necessary with dog-appropriate shampoo. A corded coat can take a long time to rinse and dry completely, so allow ample time and ensure the coat is fully dry to help prevent dampness remaining close to the skin.",

      notes: [
        "Choose and maintain a coat style deliberately; corded, brushed and clipped coats have different upkeep needs.",
        "Inspect the skin regularly because a dense coat can conceal irritation or debris.",
        "Check the coat after outdoor activity for leaves, burrs and other material.",
        "Trim nails as needed and introduce paw handling gradually.",
        "Keep ears clean and dry, and seek veterinary advice for persistent odour, redness or discharge.",
        "Maintain routine dental care.",
      ],
    },

    training: {
      difficulty: "Moderate",

      tips: [
        "Start reward-based training early and keep sessions engaging.",
        "Teach recall, leash manners and calm greetings before allowing more freedom.",
        "Use games and short training sessions to make use of the breed's learning ability.",
        "Provide mental work as well as physical exercise.",
        "Reward quiet, settled behaviour rather than reinforcing demand barking.",
        "Use consistent rules and avoid harsh or intimidating methods.",
      ],

      socialization:
        "Introduce the puppy gradually to a variety of people, friendly dogs, handling, sounds and everyday environments. Keep experiences positive and controlled, especially around unfamiliar visitors. Continue socialisation through adulthood and allow the dog to observe new situations at a comfortable distance instead of forcing contact.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: null,

      climates: [
        "Cool and temperate conditions",
        "Warm conditions when shade, fresh water and heat management are provided",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced diet appropriate to the dog's life stage, body condition, activity and individual veterinary needs.",

    feedingFrequency: {
      puppy:
        "Usually 3–4 measured meals daily, adjusted for age, growth and veterinary advice.",
      adult:
        "Often 2 measured meals daily; adjust the total amount to maintain a healthy body condition.",
      senior:
        "Adjust meal size, calorie intake and diet to health, appetite, mobility and veterinary advice.",
    },

    guidelines:
      "Use a nutritionally complete diet and measure portions instead of relying on guesswork. Adjust intake as the dog grows or its activity and body condition change. Provide fresh water at all times. Introduce dietary changes gradually and consult a veterinarian for an individual plan, particularly during growth, illness or older age.",

    considerations: [
      "Monitor body condition rather than using a generic weight target.",
      "Count treats as part of the daily intake.",
      "Avoid adding supplements without a specific need and veterinary guidance.",
      "Choose a diet suitable for the dog's age, activity and any diagnosed medical conditions.",
    ],

    note:
      "No validated Puli-specific feeding formula or portion schedule was established from the reviewed breed sources. Individual needs vary.",
  },

  health: {
    overview:
      "The reviewed breed-club and kennel-club materials recommend health screening for breeding Pulik, including evaluation of hips and patellae, an eye examination and a DNA test for the common variant associated with degenerative myelopathy. These are screening recommendations intended to support responsible breeding; they do not mean that every Puli will develop these conditions. Ask a breeder for the parents' relevant test results, and discuss any screening or diagnostic concerns for an individual dog with a veterinarian.",

    commonConditions: [],

    preventiveCare: [
      "Keep routine veterinary examinations and vaccinations up to date according to local veterinary advice.",
      "Discuss age-appropriate hip, patella and eye assessment with a veterinarian.",
      "Ask the breeder about documented screening results for the puppy's parents, including degenerative myelopathy DNA testing.",
      "Maintain a healthy body condition and regular physical activity.",
      "Inspect the skin and coat routinely, particularly under cords and around areas where debris can collect.",
      "Seek veterinary advice for persistent changes in movement, vision, appetite, energy or behaviour.",
    ],

    recommendedScreenings: [
      "Hip dysplasia evaluation",
      "Patella evaluation",
      "Ophthalmologist eye examination",
      "Degenerative myelopathy (DM) DNA test for the common variant",
    ],

    dentalCare:
      "Brush the teeth regularly with dog-safe toothpaste and introduce oral handling gradually. Seek veterinary advice for gum bleeding, persistent bad breath, oral pain or difficulty eating.",

    earCare:
      "Inspect the ears routinely and keep them clean and dry when needed. Avoid inserting cotton swabs deeply into the ear canal. Persistent scratching, odour, discharge or redness should be assessed by a veterinarian.",

    skinCare:
      "Check the skin beneath the coat regularly for irritation, parasites, wounds or unusual lumps. Keep the coat clean and ensure it dries fully after bathing, especially when corded. Persistent itching, redness, hair loss or sores need veterinary assessment.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "People who enjoy training and interactive activities with their dog",
      "Households able to provide regular exercise and mental enrichment",
      "Owners willing to learn the specific care needs of a corded or long coat",
      "People who can provide consistent routines, positive training and socialisation",
    ],

    notIdealFor: [
      "Owners who want a low-maintenance coat",
      "Households unable to provide regular activity or interaction",
      "People unwilling to invest time in coat care and skin checks",
      "Owners expecting every dog to be immediately comfortable with unfamiliar visitors",
    ],
  },

  funFacts: [
    "Puli is the singular name; Pulik is the Hungarian plural.",
    "The breed's country of origin is Hungary.",
    "The mature coat can form round cords or flatter, ribbon-like locks.",
    "The FCI standard classifies the Puli as a sheepdog and does not require a working trial under that classification.",
    "Its distinctive coat can make the dog's proportions difficult to judge by appearance alone.",
  ],

  faq: [
    {
      question: "Where does the Puli come from?",
      answer:
        "The Puli originates in Hungary and has a long history associated with Hungarian livestock herding.",
    },
    {
      question: "What was the Puli bred to do?",
      answer:
        "It was developed as a herding dog that worked alongside people managing livestock, particularly sheep.",
    },
    {
      question: "How tall is a Puli?",
      answer:
        "The FCI standard gives a permitted height range of 39–45 cm for males and 36–42 cm for females. These are standard ranges, not a prediction of an individual dog's exact size.",
    },
    {
      question: "What colours can a Puli have?",
      answer:
        "The FCI standard lists pearl white, black, black shaded with rust-red or grey, fawn with a pronounced black mask, and grey in any shade. Colour terminology can differ between registries.",
    },
    {
      question: "How long does a Puli usually live?",
      answer:
        "A breed-club FAQ gives an average lifespan of around 10–15 years. Individual lifespan varies with genetics, health, environment and veterinary care.",
    },
    {
      question: "Does every Puli have a corded coat?",
      answer:
        "The coat is naturally inclined to form cords as it matures, but owners may maintain it corded, brushed out or clipped. Each style has its own upkeep requirements.",
    },
    {
      question: "Is the Puli easy to groom?",
      answer:
        "No. Its coat requires a substantial time commitment. Cords need to be separated and checked, while a brushed-out coat needs frequent brushing. A corded coat can also take a long time to wash and dry fully.",
    },
    {
      question: "Which health tests should I ask a breeder about?",
      answer:
        "Breed-club recommendations include hip and patella evaluations, an eye examination and DNA testing for the common variant associated with degenerative myelopathy. Ask for documented results and discuss their interpretation with your veterinarian.",
    },
  ],

  references: [
    "fci-puli-official-standard",
    "american-kennel-club-puli",
    "puli-club-of-america-health-statement",
    "puli-club-of-america-faq",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A breed-specific scientific name is not established separately from the domestic dog's scientific name.",

    },

    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "verified",
          locator: "Breed nomenclature and standard title",
        },
        {
          id: "american-kennel-club-puli",
          role: "verified",
          locator: "Breed profile",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Names are included where supported by breed references.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "verified",
          locator: "FCI classification",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Uses the FCI classification; other registries may use different group labels.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "verified",
          locator: "Origin and breed nomenclature",
        },
      ],
      verifiedOn: "2026-10-24",
      note: null,
    },

    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "verified",
          locator: "Brief historical summary: Magyar migration and the Carpathian Basin",
        },
      ],
      verifiedOn: "2026-10-24",
      note:
        "Historical context only; this does not assert a precisely documented birthplace.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "verified",
          locator: "Brief historical summary, utilization, general appearance and temperament",
        },
        {
          id: "american-kennel-club-puli",
          role: "verified",
          locator: "About the breed and care information",
        },
      ],
      verifiedOn: "2026-10-24",
      note:
        "Descriptions are original summaries rather than copied breed-standard wording.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "verified",
          locator: "Standard: general appearance, size, coat and colours",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Physical descriptions follow the FCI standard.",
    },

    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The reviewed FCI breed standard does not specify a weight range, so no sex-specific weight values are recorded.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "puli-club-of-america-faq",
          role: "verified",
          locator: "FAQ: average lifespan",
        },
      ],
      verifiedOn: "2026-10-24",
      note:
        "A published average range, not a guarantee for an individual dog.",
    },

    "physical.sheddingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The reviewed official standard does not assign a shedding level, and no numeric or categorical value is recorded.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling level was established.",
    },

    temperament: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "verified",
          locator: "Standard: behaviour and temperament",
        },
        {
          id: "american-kennel-club-puli",
          role: "verified",
          locator: "Breed profile: temperament and activity",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Broad breed traits do not guarantee an individual dog's behaviour.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "cited",
          locator: "Standard: temperament and working role",
        },
        {
          id: "american-kennel-club-puli",
          role: "cited",
          locator: "Breed profile: activity and learning",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 scores based on general breed descriptions; not standardised behavioural test results.",
    },

    care: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Practical advice is general canine guidance and should be adapted to the individual dog.",
    },

    "care.exercise.level": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-puli",
          role: "cited",
          locator: "Breed profile: active herding background and care",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial activity category based on the breed's working background; not a measured exercise prescription.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No specific, verified daily exercise-minute range was established for the breed.",
    },

    "care.grooming.level": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-puli",
          role: "cited",
          locator: "What to expect when caring for a Puli: coat care",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial category reflecting the time needed to manage the coat; the burden varies with coat style.",
    },

    "care.training.difficulty": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-puli",
          role: "cited",
          locator: "Breed profile: intelligence, activity and care",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial estimate; individual learning and behaviour vary.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Suitability depends on exercise, enrichment, noise and the individual dog; no universal yes/no value is recorded.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A yard may be useful but is not enough on its own to establish suitability; no universal yes/no value is recorded.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific alone-time tolerance was established.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Feeding recommendations are general canine guidance rather than a validated Puli-specific feeding plan.",
    },

    health: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Health information should be interpreted with a veterinarian and does not replace examination or individual risk assessment.",
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "puli-club-of-america-health-statement",
          role: "verified",
          locator: "Recommended health tests for breeding stock",
        },
        {
          id: "american-kennel-club-puli",
          role: "verified",
          locator: "Health and recommended health tests",
        },
      ],
      verifiedOn: "2026-10-24",
      note:
        "Screening recommendations are not presented as evidence that all dogs of the breed develop the conditions.",
    },

    "health.commonConditions": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The reviewed materials focus on recommended screening and do not establish a complete, reliable prevalence-ranked list of common conditions.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "puli-club-of-america-health-statement",
          role: "verified",
          locator: "Breed-club breeding-stock health requirements",
        },
        {
          id: "american-kennel-club-puli",
          role: "verified",
          locator: "Recommended health tests from the national breed club",
        },
      ],
      verifiedOn: "2026-10-24",
      note:
        "These are screening recommendations for responsible breeding and veterinary discussion, not a diagnosis of the individual dog.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Routine prevention should be tailored to the individual dog's health and local veterinary advice.",
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
      note: "General canine ear-care guidance.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine skin and coat-care guidance.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-puli",
          role: "cited",
          locator: "Breed profile: activity and grooming needs",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial household-matching guidance, not a guarantee of compatibility.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Suitability depends on the owner's experience and the individual dog; no universal yes/no value is recorded.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Compatibility depends on the dog, children, supervision, training and household circumstances.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Suitability depends on mobility, support, activity preferences and the individual dog.",
    },

    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-puli",
          role: "cited",
          locator: "Breed profile: herding background and activity",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial matching guidance based on the breed's activity and enrichment needs.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Apartment suitability depends on exercise, enrichment, noise and the individual dog's behaviour; no universal yes/no value is recorded.",
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "verified",
          locator: "Breed nomenclature, historical summary and coat description",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Facts are original summaries of the standard.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "verified",
          locator: "Origin, classification, height and coat colours",
        },
        {
          id: "american-kennel-club-puli",
          role: "verified",
          locator: "Breed profile and recommended health tests",
        },
        {
          id: "puli-club-of-america-health-statement",
          role: "verified",
          locator: "Recommended health tests",
        },
        {
          id: "puli-club-of-america-faq",
          role: "verified",
          locator: "FAQ: average lifespan",
        },
      ],
      verifiedOn: "2026-10-24",
      note:
        "Answers are original summaries; health-screening advice is distinguished from diagnosis.",
    },
  },

  updatedOn: "2026-10-24",
};
