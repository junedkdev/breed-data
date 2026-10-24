import type { Breed } from "../schema/breed.types";

export const aidi: Breed = {
  slug: "aidi",
  name: "Aidi",
  scientificName: null,

  alternateNames: [
    "Aïdi",
    "Atlas Mountain Dog",
    "Atlas Shepherd Dog",
    "Chien de Montagne de l'Atlas",
  ],

  group:
    "FCI Group 2 — Pinscher and Schnauzer, Molossoid and Swiss Mountain and Cattledogs; Section 2 — Molossian type; Subsection 2.2 — Mountain type",

  origin: {
    country: "Morocco",
    region: "Atlas Mountains and the surrounding plateaus of Morocco",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Atlas_Mountain_Dog.JPG",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Atlas_Mountain_Dog.JPG",
      title: "Atlas Mountain Dog.JPG",
      description:
        "An Aidi photographed outdoors, showing its substantial coat and guardian-dog build.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2013-08-17",
      uploadedOn: "2013-10-13",
      width: 693,
      height: 457,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-24",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Atlasmountainaidi.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Atlasmountainaidi.jpg",
      title: "Atlasmountainaidi.jpg",
      description: "An Atlas Mountain Dog photographed outdoors.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2023-08-26",
      uploadedOn: "2023-08-27",
      width: 2465,
      height: 2102,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-24",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Aidi_Atlas.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Aidi_Atlas.jpg",
      title: "Aidi Atlas.jpg",
      description: "An Aidi photographed in Morocco.",
      creator: "HichamB",
      uploader: "Hichamalemdar",
      capturedOn: "2021-08-19",
      uploadedOn: "2021-08-19",
      width: 1030,
      height: 853,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by HichamB (Wikimedia username Hichamalemdar), via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-24",
    },
  ],

  overview: {
    summary:
      "The Aidi, also known as the Atlas Mountain Dog, is a sturdy guardian breed originating in Morocco. It has a thick, weather-protective coat, an alert outlook and a strong instinct to protect its family and property. It is generally better suited to experienced, active homes that can provide secure space, training and purposeful daily activity.",

    description:
      "The Aidi is a powerful but agile dog developed in the mountainous regions and plateaus of Morocco. Its dense coat helps protect it from changing outdoor conditions, while its muscular build supports sustained movement over rugged ground. The breed is known for vigilance and a natural tendency to assess unfamiliar people, animals and situations. It can be devoted and affectionate with familiar family members, but its guarding instincts make early socialisation, careful introductions and consistent, humane handling particularly important. An Aidi needs more than a place to sleep: it benefits from regular exercise, mental enrichment and clear boundaries. Individual dogs vary, and breed descriptions should not be treated as a guarantee of temperament.",

    history:
      "The Aidi has a long association with the Atlas Mountains and surrounding plateaus of North Africa, especially Morocco. It traditionally worked alongside semi-nomadic communities as a guardian of people, camps, belongings and livestock against potential threats. Its historical role was protection rather than herding flocks in the conventional European sheepdog sense. The breed developed in working environments where alertness, hardiness and independent judgement were useful. Detailed claims about particular ancestral crosses or a single precise date of origin are not established here.",

    originalPurpose:
      "Guarding and protecting people, camps, property and livestock from potential threats.",

    currentRoles: [
      "Companion for an experienced household",
      "Property and livestock guardian where legally and practically appropriate",
      "Outdoor activities with a responsible handler",
      "Reward-based training and structured enrichment",
      "Conformation showing where the breed is recognised",
    ],
  },

  physical: {
    sizeCategory: "Large",

    // The FCI standard gives a 52–62 cm height range; the UKC standard
    // describes the same ideal range for males and females.
    height: {
      unit: "cm",
      male: { min: 52, max: 62 },
      female: { min: 52, max: 62 },
    },

    // The reviewed official standards do not provide a reliable weight range.
    weight: {
      unit: null,
      male: null,
      female: null,
    },

    // Royal Canin's breed profile lists an average life expectancy of 10–12 years.
    lifespanYears: {
      min: 10,
      max: 12,
    },

    coatType:
      "Thick, dense and rather harsh, with a protective outer coat; the face and ears have shorter, finer hair.",

    coatLength:
      "Moderate or half-long on the body, approximately 6 cm in the FCI standard, with a fuller mane and longer hair on the tail and breeches.",

    coatColors: [
      "Fawn, from pale sand to deep red",
      "Brown, from beige to deep brown",
      "Black",
      "Fawn with brindle markings",
      "Fawn or brown with a darker overlay or mantle",
      "Any of the described colours with white markings, including predominantly white coats",
    ],

    sheddingLevel: null,
    droolingLevel: null,

    distinctiveFeatures: [
      "Strong, muscular and agile build without a cumbersome appearance",
      "Thick, bushy coat adapted to outdoor conditions",
      "A fuller mane around the neck and throat, especially in males",
      "Longer hair on the breeches and a well-furnished tail",
      "Alert, direct expression",
      "Body proportions described in the UKC standard as approximately 10:9 in length to height",
    ],
  },

  temperament: {
    traits: [
      "Alert and watchful",
      "Naturally protective of familiar people and property",
      "Affectionate and devoted with its family",
      "Confident and independent in assessing unfamiliar situations",
      "Potentially reserved around unfamiliar people",
      "Capable of making independent decisions while guarding",
    ],

    // These are editorial estimates, not official temperament test results.
    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 5,
      independence: 4,
      trainability: 3,
      barking: 4,
      energy: 4,
    },
  },

  care: {
    exercise: {
      level: "High",

      // No reliable breed-specific daily minute target was established.
      minutesPerDay: null,

      activities: [
        "Daily walks and supervised outdoor exploration",
        "Structured scent and search games",
        "Reward-based obedience and impulse-control exercises",
        "Secure-area play and movement",
        "Purposeful activities that engage the dog's attention",
      ],
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush regularly, increasing frequency when the coat is shedding or collecting debris. Check the dense coat carefully for tangles, burrs and parasites, especially after outdoor activity.",

      bathing:
        "Bathe when needed with a dog-appropriate shampoo. Avoid unnecessary frequent bathing, and dry the dense coat thoroughly.",

      notes: [
        "Inspect the skin beneath the thick coat rather than relying on a quick surface check.",
        "Check and trim nails as needed.",
        "Clean the ears when required and seek veterinary advice for persistent redness, odour or discharge.",
        "Maintain routine dental care.",
        "Do not crop ears or dock tails for cosmetic reasons; follow applicable animal-welfare laws and veterinary guidance.",
      ],
    },

    training: {
      difficulty: "Moderate to challenging for an inexperienced handler",

      tips: [
        "Begin reward-based training and household routines early.",
        "Teach reliable recall, leash manners and calm responses to everyday situations.",
        "Use gradual, controlled introductions to unfamiliar people, dogs and environments.",
        "Provide mental enrichment and appropriate tasks rather than relying on physical exercise alone.",
        "Use secure fencing and actively supervise interactions; do not rely on breed reputation as a substitute for training.",
        "Avoid intimidation or harsh punishment, which can undermine trust and make behaviour harder to manage.",
      ],

      socialization:
        "Start early and continue throughout adulthood. Introduce people, animals, handling and new environments gradually and positively, while maintaining enough distance for the dog to remain calm. Because the breed has strong guarding instincts, socialisation should teach safe, controlled behaviour rather than force the dog to welcome every stranger.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Mountain and upland environments",
        "Cool conditions",
        "Warm conditions when shade, water and heat management are provided",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate to the dog's life stage, body condition, activity and veterinary needs.",

    feedingFrequency: {
      puppy:
        "Usually 3–4 meals daily, adjusted to age, growth and veterinary advice.",
      adult:
        "Often 2 measured meals daily; adjust portions to maintain a healthy body condition.",
      senior:
        "Meal frequency and calorie intake should be adjusted to health, appetite, mobility and veterinary advice.",
    },

    guidelines:
      "Choose a nutritionally complete diet and measure portions rather than feeding by guesswork. Adjust intake according to growth, activity, body condition and life stage. Keep clean drinking water available. Introduce diet changes gradually, and consult a veterinarian for an individual feeding plan, especially during growth, pregnancy, illness or older age.",

    considerations: [
      "Monitor body condition and weight rather than relying on a generic portion estimate.",
      "Avoid feeding immediately around vigorous exercise if the dog is uncomfortable after meals; ask a veterinarian about an appropriate routine.",
      "Keep treats moderate and include them in the overall daily intake.",
      "Do not add supplements or restrictive diets without a specific reason and veterinary guidance.",
    ],

    note:
      "No Aidi-specific nutrient requirement or validated breed-specific feeding schedule was established in the reviewed sources. Individual needs vary with age, body condition, activity and health.",
  },

  health: {
    overview:
      "The sources reviewed did not establish a comprehensive, breed-wide inherited-disease profile for the Aidi. A 2022 field study examined 161 Atlas shepherd dogs in the Tiaret region of Algeria and reported positive leishmaniasis results in 110 dogs using at least one of several diagnostic methods. This was a geographically specific study of a particular sample; it should not be interpreted as a global prevalence estimate or proof of a genetic predisposition in the breed. In areas where canine leishmaniasis occurs, ask a local veterinarian about sand-fly exposure, prevention and appropriate testing.",

    commonConditions: [],

    preventiveCare: [
      "Arrange routine veterinary examinations and keep vaccinations appropriate to local risks and veterinary advice.",
      "Use parasite prevention suited to the dog's location, lifestyle and exposure.",
      "Maintain a healthy body condition and regular, appropriate activity.",
      "Check the skin, coat, paws, nails and ears during routine handling.",
      "Discuss any persistent change in appetite, weight, movement, energy or behaviour with a veterinarian.",
      "In regions where sand flies and canine leishmaniasis occur, ask a veterinarian about locally appropriate protective measures.",
    ],

    recommendedScreenings: [],

    dentalCare:
      "Brush the teeth regularly with dog-safe toothpaste. Introduce handling gradually, and seek veterinary advice about persistent bad breath, gum bleeding, oral pain or difficulty eating.",

    earCare:
      "Inspect the ears routinely and keep them clean and dry when needed. Do not insert cotton swabs deeply into the ear canal. Seek veterinary advice for persistent scratching, odour, discharge or redness.",

    skinCare:
      "Part the dense coat periodically to check the skin for irritation, parasites, wounds or unusual lumps. After outdoor activity, check for burrs and other debris. Persistent itching, hair loss, sores or skin changes warrant veterinary assessment.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Experienced owners who understand guardian-dog behaviour",
      "Households able to provide consistent training and ongoing socialisation",
      "People who can offer regular activity, enrichment and a meaningful daily routine",
      "Appropriate rural or property settings with secure boundaries and responsible supervision",
    ],

    notIdealFor: [
      "Owners who want a dog that automatically welcomes unfamiliar visitors",
      "Households unable to manage a strong guarding instinct",
      "People who cannot provide regular exercise, enrichment and training",
      "Homes where secure containment and responsible introductions are not practical",
    ],
  },

  funFacts: [
    "The Aidi is also known as the Atlas Mountain Dog.",
    "The breed's recognised country of origin is Morocco.",
    "Its traditional role is guarding and protection rather than herding flocks in the conventional European sheepdog sense.",
    "The coat can be fawn, brown or black, with a range of darker overlays, brindling and white markings.",
    "The official FCI standard describes the breed as not subject to a working trial.",
  ],

  faq: [
    {
      question: "Where does the Aidi come from?",
      answer:
        "The Aidi originates in Morocco and is associated with the Atlas Mountains and surrounding plateaus of North Africa.",
    },
    {
      question: "Is the Aidi a herding dog?",
      answer:
        "Its traditional work is guarding and protecting people, camps, property and livestock. The breed standard distinguishes this role from conventional flock herding.",
    },
    {
      question: "How tall is an Aidi?",
      answer:
        "The official breed standards give a height range of approximately 52–62 cm at the withers.",
    },
    {
      question: "What coat colours can an Aidi have?",
      answer:
        "Recognised descriptions include fawn, brown and black. These may appear with brindling, darker overlays or mantles, and white markings that vary in extent.",
    },
    {
      question: "Is the Aidi suitable for a first-time dog owner?",
      answer:
        "There is no universal yes-or-no answer for every household, but its strong guarding instincts and need for careful socialisation can make it challenging for an inexperienced owner. Learn about guardian-dog behaviour and seek qualified, reward-based training support before choosing one.",
    },
    {
      question: "How much exercise does an Aidi need?",
      answer:
        "The reviewed standards do not prescribe a daily number of exercise minutes. Plan for regular physical activity and mental enrichment, then adjust the routine to the individual dog's age, health, temperament and fitness.",
    },
    {
      question: "Does the Aidi have known breed-specific health problems?",
      answer:
        "The sources reviewed do not establish a complete breed-wide inherited-disease profile. One study reported canine leishmaniasis in dogs sampled in a specific region of Algeria; local exposure risk and prevention should be discussed with a veterinarian rather than assumed to apply equally to every Aidi.",
    },
  ],

  references: [
    "fci-aidi-official-standard",
    "united-kennel-club-aidi-standard",
    "royal-canin-aidi-profile",
    "pubmed-aidi-leishmaniasis-study",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "Breed nomenclature and official standard title",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "verified",
          locator: "Title and breed history",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Names are recorded as used in official breed references.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The reviewed breed standards do not establish a breed-specific scientific name.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "Breed nomenclature: group and section",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Uses the FCI classification rather than implying every registry uses the same grouping.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "Breed nomenclature: country of origin",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "verified",
          locator: "History",
        },
      ],
      verifiedOn: "2026-10-24",
      note: null,
    },

    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "Standard: origin and historical distribution",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "verified",
          locator: "History: mountains and plateaus of North Africa, especially Morocco",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Describes the documented region without claiming a more precise birthplace.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "Standard: general appearance, use and temperament",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "verified",
          locator: "History, general appearance and characteristics",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "User-facing prose is an original summary, not a transcription of the standards.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "Standard: size, coat, colour and general appearance",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "verified",
          locator: "Coat, colour, height and general appearance",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Standard-derived physical descriptions are kept separate from unavailable or non-standard values.",
    },

    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-standard weight range was found in the reviewed official standards.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-canin-aidi-profile",
          role: "verified",
          locator: "Breed specifics: average life expectancy",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "A published breed-profile estimate, not a guarantee for an individual dog.",
    },

    "physical.sheddingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The reviewed standards describe coat structure but do not establish a reliable shedding level.",
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
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "Standard: behaviour and temperament",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "verified",
          locator: "Characteristics",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Traits summarise breed-standard descriptions; individual behaviour varies.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "cited",
          locator: "Standard: behaviour and temperament",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "cited",
          locator: "Characteristics and traditional guardian role",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1–5 scores inferred from broad breed descriptions; they are not standardised behavioural measurements.",
    },

    care: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Practical care guidance should be adapted to the individual dog and local veterinary advice.",
    },

    "care.exercise.level": {
      reliability: "estimate",
      sources: [
        {
          id: "united-kennel-club-aidi-standard",
          role: "cited",
          locator: "History and general appearance: traditional outdoor guardian role",
        },
      ],
      verifiedOn: null,
      note: "Editorial activity category based on the breed's working background, not a measured daily requirement.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific daily exercise-minute recommendation was found.",
    },

    "care.grooming.level": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "cited",
          locator: "Standard: coat description",
        },
      ],
      verifiedOn: null,
      note: "Editorial estimate based on the dense, moderate-length coat.",
    },

    "care.training.difficulty": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "cited",
          locator: "Standard: guarding behaviour and temperament",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "cited",
          locator: "Characteristics and traditional guardian role",
        },
      ],
      verifiedOn: null,
      note: "Editorial estimate about management demands, not a formal trainability test.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability depends on the individual dog, activity, training, noise and housing arrangements; no universal yes/no value is recorded.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "united-kennel-club-aidi-standard",
          role: "cited",
          locator: "History and traditional guardian role",
        },
      ],
      verifiedOn: null,
      note: "A secure yard may help meet the breed's space needs but does not replace exercise, training or supervision.",
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Climate advice is practical guidance and should account for shade, hydration, acclimatisation and the individual dog's condition.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific tolerance for being left alone was established.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Feeding guidance is general canine advice, not a validated Aidi-specific diet plan.",
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pubmed-aidi-leishmaniasis-study",
          role: "verified",
          locator: "Abstract: study population, region and diagnostic findings",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "The disease finding is explicitly limited to the study sample and location; it is not presented as proof of inherited susceptibility.",
    },

    "health.commonConditions": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable, comprehensive breed-wide list of common inherited conditions was established from the reviewed sources.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine prevention should be tailored by a veterinarian to the dog's health and local exposure risks.",
    },

    "health.recommendedScreenings": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No Aidi-specific screening protocol was established from the reviewed sources.",
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
          id: "fci-aidi-official-standard",
          role: "cited",
          locator: "Standard: temperament and traditional purpose",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "cited",
          locator: "History and characteristics",
        },
      ],
      verifiedOn: null,
      note: "Editorial matching guidance based on the guardian role; it is not a guarantee of compatibility.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Owner experience and individual dog behaviour vary; no universal yes/no value is recorded.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Compatibility depends on the dog, children, supervision, training and household circumstances.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability depends on an owner's mobility, support, experience and the individual dog's needs.",
    },

    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "united-kennel-club-aidi-standard",
          role: "cited",
          locator: "History and general appearance",
        },
      ],
      verifiedOn: null,
      note: "Editorial guidance based on the breed's traditional working role and activity needs.",
    },

    "suitability.apartmentLiving": {
      reliability: "estimate",
      sources: [
        {
          id: "united-kennel-club-aidi-standard",
          role: "cited",
          locator: "History and traditional guardian role",
        },
      ],
      verifiedOn: null,
      note: "Editorial estimate, not an absolute rule; individual needs and the housing arrangement matter.",
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "Breed nomenclature and standard",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "verified",
          locator: "History, coat and colour",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Facts are phrased as original summaries of the standards.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "Breed nomenclature and standard",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "verified",
          locator: "History, characteristics, height and coat",
        },
        {
          id: "royal-canin-aidi-profile",
          role: "verified",
          locator: "Breed specifics: average life expectancy",
        },
        {
          id: "pubmed-aidi-leishmaniasis-study",
          role: "verified",
          locator: "Abstract: geographically specific field study",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Answers are original summaries and preserve the limitations of the reviewed evidence.",
    },
  },

  updatedOn: "2026-10-24",
};
