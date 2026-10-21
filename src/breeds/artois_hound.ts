import type { Breed } from "../schema/breed.types";

export const artois_hound: Breed = {
  slug: "artois-hound",
  name: "Artois Hound",
  scientificName: null,

  alternateNames: ["Chien d'Artois", "Chien d'Artois (French name)", "Picard"],

  group: "FCI Group 6 — Scenthounds and Related Breeds; Section 1.2 — Medium-sized Scenthounds; working trial required",

  origin: {
    country: "France",
    region: "Artois and Picardy in northern France"
  },

  // No photo is included because an original file page, creator and reuse
  // terms have not been checked to the standard required for commercial use.
  images: [],

  overview: {
    summary:
      "A sturdy, medium-sized French scent hound developed for persistent hunting, known for its strong nose, pack-working ability and distinctive tricolour coat.",

    description:
      "The Artois Hound is a compact yet powerful scent hound built for stamina rather than extreme speed. Its broad head, long drooping ears, muscular body and short, dense coat give it a recognisable hound appearance. The breed was developed for hunting with people and other hounds, using scent to follow game over sustained periods. Its working background means that nose-led exploration, substantial daily activity and secure outdoor management are important considerations. The breed standard describes a balanced and affectionate dog that works well in a pack; individual behaviour still depends on genetics, early experience, health and training.",

    history:
      "The Artois Hound, historically also called the Picard, is an old French hunting breed associated with the Artois and Picardy regions. Historical accounts describe it as valued for hare hunting and other scent-hunting work. Crossbreeding and declining numbers weakened the traditional type, and after the Second World War the breed was feared lost. A reconstruction effort begun in the early 1970s, associated with M. Audrechy and Mme Pilat, helped re-establish it among French scenthounds. The FCI recognises the breed definitively and lists France as its country of origin.",

    originalPurpose:
      "Scent hunting with a human hunting party and in packs, especially following hare; the official standard also describes work on deer and wild boar in suitable terrain.",

    currentRoles: [
      "Scent-hunting and tracking in appropriate working settings",
      "Pack hound for experienced handlers",
      "Companion for homes able to meet its activity, scent-work and management needs"
    ]
  },

  physical: {
    sizeCategory: "Medium",
    heightCm: {
      male: { min: 53, max: 58 },
      female: { min: 53, max: 58 }
    },
    // The standard gives one average weight range for both sexes, not sex-specific values.
    weightKg: {
      male: { min: 28, max: 30 },
      female: { min: 28, max: 30 }
    },
    lifespanYears: null,
    coatType: "Short, dense and fairly flat",
    coatLength: "Short",
    coatColors: [
      "Dark fawn tricolour with a hare-like or badger-like appearance",
      "Tricolour with a mantle or large patches",
      "Fawn head, sometimes with dark overlay"
    ],
    sheddingLevel: null,
    droolingLevel: null,
    distinctiveFeatures: [
      "Strong, muscular body that is not excessively long",
      "Broad, rounded skull and a moderately elongated muzzle",
      "Long, broad, low-hanging ears with rounded tips",
      "Long, strong tail carried in a sickle shape",
      "Strong feet and limbs suited to sustained movement"
    ]
  },

  temperament: {
    traits: [
      "Energetic and hardy",
      "Acute scenting ability",
      "Balanced and affectionate according to the breed standard",
      "Described as working well alongside other hounds",
      "May vocalise loudly while following scent, as is typical of a working scenthound"
    ],
    scores: {
      affection: 4,
      withChildren: null,
      withDogs: 4,
      withStrangers: null,
      protectiveness: null,
      independence: null,
      trainability: null,
      barking: 4,
      energy: 5
    }
  },

  care: {
    exercise: {
      level: "High; sustained physical activity and nose-led enrichment are important",
      minutesPerDay: null,
      activities: [
        "Long, age-appropriate walks on leash",
        "Supervised scent games and tracking exercises",
        "Structured outdoor exploration in secure areas",
        "Suitable hound work or canine activities where legally and ethically appropriate"
      ]
    },
    grooming: {
      level: "Low to moderate",
      brushing: "Brush regularly, such as weekly, to remove loose hair and check the skin; increase during heavier shedding if needed.",
      bathing: "Bathe when dirty or when advised by a veterinary professional, using a dog-appropriate shampoo.",
      notes: [
        "Inspect the long, hanging ears regularly and keep them clean and dry as advised by a veterinarian.",
        "Check paws, nails and skin after outdoor activity.",
        "Brush teeth regularly with dog-safe toothpaste and arrange routine veterinary dental checks."
      ]
    },
    training: {
      difficulty: "Potentially challenging for inexperienced owners because scent-following and hunting instincts can compete with recall.",
      tips: [
        "Use reward-based training and short, consistent sessions.",
        "Teach recall and leash skills early, practising first in low-distraction environments.",
        "Provide legal, safe outlets for scenting and tracking behaviour.",
        "Use secure fencing and a lead in open areas where wildlife or traffic may be present."
      ],
      socialization:
        "Introduce people, dogs, handling, traffic and varied environments gradually and positively during puppyhood, continuing throughout life. Supervise interactions with children and unfamiliar animals."
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,
      climates: [],
      aloneTimeTolerance: null
    }
  },

  nutrition: {
    dietType: "A complete and balanced diet appropriate to the dog's life stage, activity, body condition and health",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null
    },
    guidelines:
      "Choose a nutritionally complete diet and adjust portions using body-condition monitoring, activity level and veterinary advice. Hunting or highly active dogs may need different energy intake from less active individuals; do not assume all dogs of this breed need the same calories.",
    considerations: [
      "Maintain a lean, fit body condition and review weight regularly.",
      "Account for training treats and working-day food when calculating total intake.",
      "Keep fresh water available, especially after exercise.",
      "Discuss major diet changes, supplements or a therapeutic diet with a veterinarian."
    ],
    note:
      "Breed-specific calorie targets and universal meal frequencies were not established in the sources consulted. Individualise feeding with veterinary guidance."
  },

  health: {
    overview:
      "The reviewed breed standard and kennel-club material describe conformation and working traits but do not establish a reliable, breed-specific disease-prevalence profile or a validated list of routine genetic screening tests. This should not be interpreted as proof that the breed has no inherited health risks.",
    commonConditions: [],
    preventiveCare: [
      "Arrange regular veterinary wellness examinations and keep vaccinations and parasite prevention appropriate to local risk.",
      "Maintain healthy body condition and appropriate conditioning for sustained activity.",
      "Inspect ears, paws, skin and nails after outdoor work.",
      "Seek veterinary assessment for persistent lameness, exercise intolerance, ear discharge, skin changes or other new symptoms."
    ],
    recommendedScreenings: [],
    dentalCare:
      "Brush the teeth frequently with toothpaste made for dogs and have the mouth checked routinely by a veterinarian. Dental disease can occur regardless of breed.",
    earCare:
      "Because the ears are long and hanging, inspect them regularly for redness, odour, discharge or discomfort. Clean only as advised by a veterinary professional; do not insert cotton swabs into the ear canal.",
    skinCare:
      "Check the short coat and skin during brushing and after outdoor activity. Ask a veterinarian about persistent itching, sores, hair loss or lumps."
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "Experienced, active handlers who value scent-based activities",
      "Homes able to provide sustained exercise, training and secure outdoor management",
      "Handlers familiar with pack hounds and the practical demands of hunting instincts and vocalisation"
    ],
    notIdealFor: [
      "Homes unable to provide regular physical activity and mental enrichment",
      "Owners who expect reliable off-leash recall without substantial training",
      "Households that need a consistently quiet dog or cannot safely manage a scent-driven hound outdoors"
    ]
  },

  funFacts: [
    "The breed was historically also known as the Picard.",
    "The FCI classifies the Artois Hound as a medium-sized scenthound with a working trial.",
    "The official standard describes its working voice as high-pitched and audible from a distance."
  ],

  faq: [
    {
      question: "Where does the Artois Hound come from?",
      answer:
        "It comes from France and is historically associated with the Artois and Picardy regions of the country's north."
    },
    {
      question: "What was the Artois Hound bred to do?",
      answer:
        "It was developed as a scent hound for hunting with people and in packs, particularly tracking hare and other game."
    },
    {
      question: "How large is an Artois Hound?",
      answer:
        "The FCI standard lists 53–58 cm at the withers for both sexes, with an average weight of 28–30 kg."
    },
    {
      question: "What coat does an Artois Hound have?",
      answer:
        "The standard describes a short, dense, fairly flat coat, typically dark-fawn tricolour with a mantle or large patches."
    },
    {
      question: "Is the Artois Hound suitable for apartment living?",
      answer:
        "A breed-specific yes-or-no recommendation is not recorded because reliable evidence was not found. Its stamina, scenting drive and vocal working style mean that daily activity, enrichment and the individual dog's behaviour should be assessed carefully."
    },
    {
      question: "Which inherited diseases affect the Artois Hound?",
      answer:
        "The sources reviewed did not establish a dependable breed-specific list or prevalence estimates. Ask a veterinarian and a responsible breeder about the health history of the individual dog's family and any screening appropriate to the line."
    }
  ],

  references: [
    "fci-artois-hound-official-standard",
    "societe-centrale-canine-artois-hound-standard-comments",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care"
  ],

  evidence: {
    "alternateNames": {
      reliability: "reliable_source",
      sources: [
        { id: "fci-artois-hound-official-standard", role: "verified", locator: "Title and brief historical summary" },
        { id: "societe-centrale-canine-artois-hound-standard-comments", role: "cited", locator: "Breed name and historical type" }
      ],
      verifiedOn: "2026-10-20",
      note: "The French name is Chien d'Artois; Picard is a historical name noted in the official standard."
    },
    "scientificName": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A separate breed-level scientific name is not established by the consulted kennel-club sources."
    },
    "group": {
      reliability: "official_standard",
      sources: [{ id: "fci-artois-hound-official-standard", role: "verified", locator: "FCI classification, Group 6, Section 1.2" }],
      verifiedOn: "2026-10-20",
      note: null
    },
    "origin": {
      reliability: "official_standard",
      sources: [{ id: "fci-artois-hound-official-standard", role: "verified", locator: "Origin and brief historical summary" }],
      verifiedOn: "2026-10-20",
      note: "France is specified by the FCI; the regional association is supported by the French kennel-club commentary."
    },
    "overview": {
      reliability: "reliable_source",
      sources: [
        { id: "fci-artois-hound-official-standard", role: "verified", locator: "Utilization, history, appearance and temperament" },
        { id: "societe-centrale-canine-artois-hound-standard-comments", role: "cited", locator: "History, working type and commentary on standard" }
      ],
      verifiedOn: "2026-10-20",
      note: "Descriptions are paraphrased. Historical details follow the official standard and French kennel-club commentary."
    },
    "physical": {
      reliability: "official_standard",
      sources: [{ id: "fci-artois-hound-official-standard", role: "verified", locator: "General appearance, coat, size and weight" }],
      verifiedOn: "2026-10-20",
      note: "The standard states the same height range for males and females and gives an overall average weight rather than sex-specific weights."
    },
    "physical.lifespanYears": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific lifespan range was established from the official standard or consulted kennel-club source."
    },
    "physical.sheddingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A short coat is specified, but no reliable breed-specific shedding level was found."
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling level was found."
    },
    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        { id: "fci-artois-hound-official-standard", role: "verified", locator: "Utilization and behaviour/temperament" },
        { id: "societe-centrale-canine-artois-hound-standard-comments", role: "cited", locator: "Character and pack-working commentary" }
      ],
      verifiedOn: "2026-10-20",
      note: "The breed-standard characterisation is not a guarantee of every individual dog's behaviour."
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        { id: "fci-artois-hound-official-standard", role: "cited", locator: "Working purpose, temperament and vocalisation" }
      ],
      verifiedOn: null,
      note: "Scores are editorial estimates for general discovery, not validated behavioural measurements. Null scores mean evidence was insufficient to provide a useful estimate."
    },
    "temperament.scores.withChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific evidence supports a generalised child-compatibility score."
    },
    "temperament.scores.withStrangers": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific evidence supports a generalised stranger-compatibility score."
    },
    "temperament.scores.protectiveness": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific evidence supports a protectiveness score."
    },
    "temperament.scores.independence": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific evidence supports an independence score."
    },
    "temperament.scores.trainability": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific evidence supports a general trainability score."
    },
    "care": {
      reliability: "general_guidance",
      sources: [
        { id: "fci-artois-hound-official-standard", role: "cited", locator: "Working purpose and physical type" }
      ],
      verifiedOn: null,
      note: "Practical care and training guidance is general advice informed by working-hound characteristics, not a clinical or officially scored breed requirement."
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The sources describe a hardy hunting dog but do not provide an evidence-based daily minute target applicable to all individuals."
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A breed-specific apartment-suitability verdict was not supported by the consulted authoritative sources."
    },
    "care.livingEnvironment.climates": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No validated climate-suitability list was found."
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific alone-time tolerance information was found."
    },
    "nutrition": {
      reliability: "general_guidance",
      sources: [{ id: "wsava-global-nutrition-guidelines", role: "cited", locator: "Global Nutrition Guidelines and individual nutritional assessment" }],
      verifiedOn: null,
      note: "General veterinary nutrition guidance; portions and feeding plans must be individualised."
    },
    "nutrition.feedingFrequency": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal breed-specific feeding frequency was established for puppy, adult and senior stages."
    },
    "health.overview": {
      reliability: "reliable_source",
      sources: [{ id: "fci-artois-hound-official-standard", role: "verified", locator: "Scope of the official standard: conformation, temperament, work and breed history; it does not establish disease prevalence" }],
      verifiedOn: "2026-10-20",
      note: "This statement describes the limits of the sources reviewed, not evidence that the breed is free of inherited health risks."
    },
    "health.commonConditions": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No dependable breed-specific common-condition list was found in the reviewed official sources."
    },
    "health.recommendedScreenings": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No verified Artois Hound-specific recommended screening programme was located. Screening should be discussed with a veterinarian and responsible breeder."
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        { id: "avma-pet-dental-care", role: "cited", locator: "Routine veterinary dental assessment and home oral care" },
        { id: "wsava-global-nutrition-guidelines", role: "cited", locator: "Individual nutrition assessment and body-condition tools" }
      ],
      verifiedOn: null,
      note: "General canine preventive care advice, not a breed-specific health claim."
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [{ id: "avma-pet-dental-care", role: "cited", locator: "Home oral care and routine veterinary dental checks" }],
      verifiedOn: null,
      note: "General veterinary dental-care advice."
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [{ id: "fci-artois-hound-official-standard", role: "cited", locator: "Ear conformation" }],
      verifiedOn: null,
      note: "General ear monitoring advice, prompted by the breed's long, hanging ears."
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [{ id: "fci-artois-hound-official-standard", role: "cited", locator: "Short, dense coat" }],
      verifiedOn: null,
      note: "General skin and coat-care advice."
    },
    "suitability": {
      reliability: "estimate",
      sources: [{ id: "fci-artois-hound-official-standard", role: "cited", locator: "Working purpose, stamina and vocalisation" }],
      verifiedOn: null,
      note: "Suitability is an editorial fit estimate, based on working-hound needs; assess the individual dog and household."
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A general yes/no assessment for first-time owners is not sufficiently supported by reliable breed-specific evidence."
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific evidence supports a general family-with-children verdict."
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability depends on a person's health, activity and support; no general breed-level verdict is recorded."
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A separate apartment-living verdict is not established by reliable breed-specific sources."
    },
    "faq": {
      reliability: "reliable_source",
      sources: [
        { id: "fci-artois-hound-official-standard", role: "verified", locator: "Origin, utilization, historical summary, measurements and coat" },
        { id: "societe-centrale-canine-artois-hound-standard-comments", role: "cited", locator: "Regional history and character commentary" }
      ],
      verifiedOn: "2026-10-20",
      note: "Answers are original paraphrases. Health and apartment suitability answers explicitly state evidence limitations."
    },
    "funFacts": {
      reliability: "reliable_source",
      sources: [{ id: "fci-artois-hound-official-standard", role: "verified", locator: "Brief historical summary, classification and utilization" }],
      verifiedOn: "2026-10-20",
      note: null
    }
  },

  updatedOn: "2026-10-20"
};
