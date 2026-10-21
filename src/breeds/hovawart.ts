import type { Breed } from "../schema/breed.types";

export const hovawart: Breed = {
  slug: "hovawart",
  name: "Hovawart",
  scientificName: "Canis lupus familiaris",
  alternateNames: [],
  group:
    "FCI Group 2 — Pinscher and Schnauzer, Molossoid breeds, Swiss Mountain and Cattledogs; Section 2.2 — Molossoid breeds, Mountain type; working trial required.",
  origin: {
    country: "Germany",
    region:
      "Historically associated with German farms and estates, including the Harz and Black Forest regions; the modern breed was reconstructed from 1922."
  },
  images: [],
  overview: {
    summary:
      "A powerful German working dog bred to guard homes and property, the Hovawart is loyal to its family, self-confident, alert and happiest when given purposeful activity.",
    description:
      "The Hovawart is a substantial, long-haired working companion with a guarding instinct and a close bond with its household. Developed to watch over farms and property, it is capable of making decisions without constant direction. A well-raised Hovawart can be affectionate, composed and versatile, but its confidence, size and independent judgement call for consistent training, careful socialisation and daily engagement. It is not simply a yard dog: it needs to live as part of the family and have regular opportunities to use its body and mind.",
    history:
      "The Hovawart's name comes from older German words associated with a farm or estate and a watchman. Dogs of this type guarded homes, farms and livestock in Germany. The modern reconstruction of the breed began in 1922 using suitable farm dogs and carefully managed outcrosses, including German Shepherd Dogs, Newfoundlands and Leonbergers. The FCI records recognition as a breed in 1937 and working-dog status in 1964. Selection for hip health has been an important feature of the breed's modern development.",
    originalPurpose:
      "Guarding farms, estates, property and livestock, with the independence needed to watch over an area.",
    currentRoles: [
      "Family companion and home guardian",
      "Watch and working dog",
      "Tracking and scent-work partner",
      "Search-and-rescue or other structured working activities when training and aptitude are suitable",
      "Dog-sport partner for obedience, agility and working trials"
    ]
  },
  physical: {
    sizeCategory: "Large",
    heightCm: {
      male: { min: 63, max: 70 },
      female: { min: 58, max: 65 }
    },
    weightKg: {
      male: { min: 30, max: 40 },
      female: { min: 25, max: 35 }
    },
    lifespanYears: { min: 10, max: 14 },
    coatType:
      "Long, thick, slightly wavy hair that lies close to the body, with relatively little undercoat and feathering on the neck, underside, backs of the legs and tail.",
    coatLength: "Long-haired, with shorter hair on the head and fronts of the legs.",
    coatColors: ["Black and tan", "Black", "Blond"],
    sheddingLevel:
      "Moderate, with loose hair during seasonal shedding; the coat needs regular thorough brushing.",
    droolingLevel: null,
    distinctiveFeatures: [
      "Powerful, medium-large build with a slightly elongated body",
      "Males and females differ in head shape and body build",
      "Long, slightly wavy coat with feathering on the legs and tail",
      "Black-and-tan dogs have defined tan markings on the face, chest and legs",
      "Black dogs have a shiny black coat; blond dogs have a medium-blond coat that lightens toward the legs and belly",
      "Triangular, hanging ears with gently rounded tips",
      "Oval, dark- to medium-brown eyes",
      "A bushy tail that reaches below the hock and changes carriage with the dog's mood"
    ]
  },
  temperament: {
    traits: [
      "Loyal and strongly devoted to familiar people",
      "Self-confident and composed",
      "Alert and naturally protective of home and family",
      "Intelligent, with a strong sense of smell",
      "Versatile and capable of learning varied working tasks",
      "Independent enough to assess a situation without constant direction",
      "May be strong-willed and intense in play, making training and socialisation important",
      "Benefits from positive, consistent guidance rather than intimidation"
    ],
    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 5,
      independence: 4,
      trainability: 4,
      barking: 3,
      energy: 4
    }
  },
  care: {
    exercise: {
      level:
        "High. Plan substantial daily exercise and mental work. The Royal Kennel Club lists more than two hours per day as a breed-profile guideline; adapt the routine to the dog's age, health and conditioning.",
      minutesPerDay: { min: 120, max: 150 },
      activities: [
        "Brisk walks and age-appropriate hikes",
        "Scent work, tracking games and nose-led exploration",
        "Reward-based obedience and everyday skills",
        "Agility, mantrailing or working trials after physical maturity and appropriate conditioning",
        "Puzzle feeders and supervised problem-solving games",
        "Controlled play with compatible dogs"
      ]
    },
    grooming: {
      level:
        "Moderate. Coat length and feathering can tangle if neglected.",
      brushing:
        "Brush thoroughly several times a week, combing through the whole coat rather than only its surface. Check behind the ears, around the elbows and the feathering on the backs of the legs for knots; increase brushing during shedding.",
      bathing:
        "Bathe when dirty or needed, using a dog-safe shampoo and rinsing thoroughly. Dry the coat and paws after wet outdoor activity.",
      notes: [
        "Introduce brushing, paw handling, ear checks and tooth brushing early.",
        "Check ears and paws for grass seeds, debris, redness or soreness after outdoor activity.",
        "Inspect the skin while brushing, especially under feathering and around tangles.",
        "Keep nails trimmed to a comfortable length.",
        "Avoid clipping the coat close to the skin unless a veterinarian recommends it for a medical reason."
      ]
    },
    training: {
      difficulty:
        "Moderate to challenging for inexperienced owners. The breed is intelligent and versatile but also confident, protective and capable of independent decisions.",
      tips: [
        "Begin reward-based training and calm, positive exposure to everyday life in puppyhood.",
        "Teach loose-leash walking, recall, settling and reliable responses around visitors before the dog reaches full size.",
        "Use short, varied sessions that give the dog a clear purpose.",
        "Reward calm behaviour at doors, fences and when meeting unfamiliar people.",
        "Avoid harsh or confrontational handling; build cooperation through consistency and trust.",
        "Provide structured mental work as well as physical activity.",
        "Choose dog sports or working activities that fit the dog's temperament and physical development."
      ],
      socialization:
        "Start in puppyhood and continue throughout life. Introduce people, dogs, places, sounds and handling in safe, positive, controlled situations. Socialisation should build calm judgement and confidence, not force the dog to welcome every stranger. Maintain supervision and secure management because the breed has a guarding background."
    },
    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,
      climates: [
        "Cool and temperate conditions",
        "Variable weather when the dog has shelter, water and a suitable resting place",
        "Warm weather with shade, ventilation, fresh water and exercise during cooler hours"
      ],
      aloneTimeTolerance: null
    }
  },
  nutrition: {
    dietType:
      "A complete and balanced diet appropriate for the dog's life stage, body condition, activity level and veterinary needs.",
    feedingFrequency: {
      puppy: null,
      adult:
        "Use a predictable daily schedule, but choose meal count and portion size according to age, activity, body condition and the food being fed. Ask a veterinarian for an individual plan.",
      senior: null
    },
    guidelines:
      "Feed a nutritionally complete diet in measured portions and monitor body condition as well as weight. Large-breed puppies grow in spurts, so adjust intake with veterinary guidance and avoid excessive exercise while joints are developing. Include training treats in the daily calorie allowance, keep fresh water available and make diet changes gradually.",
    considerations: [
      "Discuss an appropriate growth diet and healthy growth rate with a veterinarian when feeding a puppy.",
      "Reassess portions when activity, age or body condition changes.",
      "Do not add calcium, vitamins or supplements unless a veterinarian recommends them.",
      "Use training treats sparingly and include them in the daily ration.",
      "Ask the veterinarian whether individual health findings call for a specific diet."
    ],
    note:
      "No authoritative Hovawart-specific puppy or senior meal frequency was established in the reviewed sources. Nutrition guidance here is general advice, not a prescription for an individual dog."
  },
  health: {
    overview:
      "Hovawarts have benefited from deliberate selection for hip health, but that does not remove inherited risk in an individual dog. Breed-club guidance recommends hip scoring, thyroid testing and degenerative myelopathy DNA testing for breeding animals. These recommendations are most directly relevant when choosing a puppy or planning a breeding; they are not a diagnosis, and results vary by country, population and screening programme.",
    commonConditions: [
      "Hip dysplasia — a developmental hip-joint condition that can affect mobility; the breed has long-running screening and selection programmes.",
      "Hypothyroidism or thyroid dysfunction — thyroid testing is included in one Hovawart club's breeding-health guidance.",
      "Degenerative myelopathy (DM) susceptibility — DNA testing can identify the SOD1 variant associated with risk, but a result does not guarantee clinical signs will develop.",
      "Gastric dilatation-volvulus (bloat) — a life-threatening emergency possible in dogs, particularly large or deep-chested dogs. Sudden abdominal swelling, unproductive retching, restlessness or collapse require emergency veterinary care."
    ],
    preventiveCare: [
      "Arrange regular veterinary examinations and follow an appropriate vaccination and parasite-prevention plan.",
      "Maintain a lean body condition and discuss lameness, stiffness or reluctance to exercise promptly.",
      "Ask breeders for documented hip scores and relevant thyroid and DM screening results for breeding dogs.",
      "Discuss the meaning and limitations of a DM DNA result with a veterinarian or knowledgeable breeder.",
      "Learn the warning signs of bloat and identify an emergency veterinary service before one is needed.",
      "Brush teeth regularly and include ears, skin, paws and nails in routine checks."
    ],
    recommendedScreenings: [
      "Hip scoring or hip-dysplasia assessment for breeding dogs, using an accepted national scheme.",
      "Thyroid-function testing for breeding dogs as advised by the relevant breed club and veterinarian.",
      "Degenerative myelopathy (SOD1 variant) DNA testing for breeding dogs, interpreted alongside the intended mating and applicable breed-club rules.",
      "When buying a puppy, request written copies of the parents' screening results rather than relying only on verbal assurances."
    ],
    dentalCare:
      "Brush the teeth regularly, ideally daily, with a dog-specific toothbrush and toothpaste. Arrange veterinary oral examinations and professional cleaning when recommended.",
    earCare:
      "Check the ears routinely for redness, odour, discharge, debris or repeated head-shaking. Clean only when needed with a veterinarian-approved product; seek advice if irritation persists.",
    skinCare:
      "Check the skin during brushing, paying attention to tangles, damp areas, parasites and irritation beneath the feathering. Dry wet coat and paws, and ask a veterinarian about persistent itching, hair loss or skin changes."
  },
  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: false,
    idealFor: [
      "Active households that want a loyal companion and can invest in daily exercise and training",
      "Owners who appreciate an alert, protective working breed",
      "People interested in scent work, obedience, agility, tracking or suitable working activities",
      "Homes that can provide regular companionship, structure and secure outdoor access"
    ],
    notIdealFor: [
      "People seeking a low-exercise or low-involvement dog",
      "Owners unable to provide consistent training, socialisation and purposeful activities",
      "Households expecting a dog to accept every visitor without management or training",
      "Homes where a large, strong and protective dog cannot be supervised or handled safely",
      "Owners who plan to leave the dog isolated outdoors for most of the day"
    ]
  },
  funFacts: [
    "The breed's name combines older German words associated with a farm or estate and a watchman.",
    "The modern breed reconstruction began in 1922 and included managed outcrosses before a consistent working type was re-established.",
    "The Hovawart is recognised in three standard colours: black and tan, black, and blond.",
    "The breed standard describes a body slightly longer than the dog's height at the withers.",
    "The Hovawart's nose and versatile working background suit activities such as tracking and scent work."
  ],
  faq: [
    {
      question: "Is the Hovawart a good dog for first-time owners?",
      answer:
        "It is usually a better match for owners prepared for a large, intelligent and protective working breed. The Hovawart needs regular exercise, early socialisation and consistent training, so a first-time owner should seek experienced support and plan for a substantial daily commitment."
    },
    {
      question: "How big does a Hovawart get?",
      answer:
        "The FCI standard gives a height of 63–70 cm for males and 58–65 cm for females. A UK breed-club profile reports typical weight ranges of 30–40 kg for males and 25–35 kg for females; individual dogs vary."
    },
    {
      question: "What colours do Hovawarts come in?",
      answer:
        "The three standard colours are black and tan, black, and blond. Black-and-tan dogs have clearly defined lighter markings, while blond dogs have a medium-blond coat that lightens toward the legs and belly."
    },
    {
      question: "How much exercise does a Hovawart need?",
      answer:
        "It is an active working breed. The Royal Kennel Club's profile recommends more than two hours of exercise per day as a guide. Adapt the routine to the dog's age, health and fitness, and keep exercise controlled while a puppy is growing."
    },
    {
      question: "What health tests should I ask a Hovawart breeder about?",
      answer:
        "Ask for documented hip scores, thyroid-function results and degenerative myelopathy DNA test results for the breeding dogs. Screening recommendations vary between countries and clubs, so ask how the results were assessed and discuss them with a veterinarian."
    },
    {
      question: "Is a Hovawart good with children and other dogs?",
      answer:
        "There is no guarantee based on breed alone. Individual temperament, early positive socialisation, training and adult supervision matter, especially because Hovawarts are strong dogs with guarding instincts and can play intensely with other dogs."
    },
    {
      question: "Does a Hovawart need a lot of grooming?",
      answer:
        "The long coat needs regular thorough brushing, especially behind the ears and around the feathering on the legs. Check the coat more carefully during seasonal shedding and dry the coat and paws after wet outdoor activity."
    }
  ],
  references: [
    "fci-hovawart-official-standard",
    "fci-hovawart-nomenclature",
    "royal-kennel-club-hovawart-standard",
    "royal-kennel-club-hovawart-profile",
    "hovawart-club-of-great-britain-breed-introduction",
    "hovawart-club-of-great-britain-health",
    "hovawart-club-of-great-britain-care",
    "hovawart-club-of-north-america-faq"
  ],
  evidence: {
    alternateNames: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No distinct, currently recognised alternate breed name was established in the reviewed registry and breed-club sources."
    },
    scientificName: {
      reliability: "unverified",
      sources: [],
      verifiedOn: null,
      note: "Conventional species-level domestic-dog name; a breed-specific taxonomic designation was not verified."
    },
    group: {
      reliability: "official_standard",
      sources: [
        { id: "fci-hovawart-official-standard", role: "verified", locator: "FCI classification, Group 2, Section 2.2, with working trial" },
        { id: "fci-hovawart-nomenclature", role: "verified", locator: "Breed No. 190, Group 2, Molossoid breeds, Mountain type, working trial" }
      ],
      verifiedOn: "2026-10-20",
      note: null
    },
    origin: {
      reliability: "official_standard",
      sources: [
        { id: "fci-hovawart-official-standard", role: "verified", locator: "Origin and Brief Historical Summary" },
        { id: "fci-hovawart-nomenclature", role: "verified", locator: "Country of origin: Germany" },
        { id: "hovawart-club-of-great-britain-breed-introduction", role: "cited", locator: "Historical account of farms, estates and German regions" }
      ],
      verifiedOn: "2026-10-20",
      note: "Germany is the official country of origin. Regional references summarise historical association rather than establish an exclusive place of origin."
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        { id: "fci-hovawart-official-standard", role: "verified", locator: "Utilization, Brief Historical Summary, General Appearance and Behaviour/Temperament" },
        { id: "royal-kennel-club-hovawart-profile", role: "verified", locator: "Breed history, working roles, exercise and owner requirements" },
        { id: "hovawart-club-of-great-britain-breed-introduction", role: "verified", locator: "Breed Introduction and History" },
        { id: "hovawart-club-of-north-america-faq", role: "cited", locator: "Owner requirements and guardian background" }
      ],
      verifiedOn: "2026-10-20",
      note: "Original descriptions combine official working purpose, documented history and breed-club guidance without promising uniform behaviour in every individual."
    },
    physical: {
      reliability: "official_standard",
      sources: [
        { id: "fci-hovawart-official-standard", role: "verified", locator: "General Appearance, Head, Ears, Tail, Coat, Colour and Size" },
        { id: "royal-kennel-club-hovawart-standard", role: "cited", locator: "General appearance, characteristics and temperament" }
      ],
      verifiedOn: "2026-10-20",
      note: "Height, coat structure, standard colours and conformation follow the current FCI standard. Weight and lifespan use separate claims."
    },
    "physical.weightKg": {
      reliability: "reliable_source",
      sources: [
        { id: "hovawart-club-of-great-britain-breed-introduction", role: "verified", locator: "Breed Introduction: males 30–40 kg, females 25–35 kg" }
      ],
      verifiedOn: "2026-10-20",
      note: "Breed-club reported weight ranges; the FCI standard itself specifies height, not weight. Individual body condition and build vary."
    },
    "physical.weightKg.male.max": {
      reliability: "reliable_source",
      sources: [
        { id: "hovawart-club-of-great-britain-breed-introduction", role: "verified", locator: "Breed Introduction: male weight 30–40 kg" }
      ],
      verifiedOn: "2026-10-20",
      note: "Maximum transcribed from the breed club's published typical male weight range."
    },
    "physical.weightKg.female.max": {
      reliability: "reliable_source",
      sources: [
        { id: "hovawart-club-of-great-britain-breed-introduction", role: "verified", locator: "Breed Introduction: female weight 25–35 kg" }
      ],
      verifiedOn: "2026-10-20",
      note: "Maximum transcribed from the breed club's published typical female weight range."
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        { id: "hovawart-club-of-north-america-faq", role: "verified", locator: "FAQ: expected lifespan range of 10–14 years" }
      ],
      verifiedOn: "2026-10-20",
      note: "A broad 10–14 year estimate reported by a breed club, not a guaranteed lifespan or an independently measured population average."
    },
    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        { id: "royal-kennel-club-hovawart-profile", role: "verified", locator: "Breed characteristics: shedding and grooming requirements" },
        { id: "hovawart-club-of-great-britain-care", role: "cited", locator: "Coat maintenance and regular brushing" }
      ],
      verifiedOn: "2026-10-20",
      note: "The profile confirms shedding; the qualitative intensity varies by individual and season."
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No sufficiently reliable Hovawart-specific drooling level was established in the sources consulted."
    },
    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        { id: "fci-hovawart-official-standard", role: "verified", locator: "Behaviour/Temperament and Utilization" },
        { id: "royal-kennel-club-hovawart-standard", role: "verified", locator: "Characteristics and Temperament" },
        { id: "hovawart-club-of-great-britain-breed-introduction", role: "cited", locator: "Temperament, independent judgement and activities" }
      ],
      verifiedOn: "2026-10-20",
      note: "Breed tendencies are summarised from standards and breed-club information; individual temperament depends on genetics, upbringing, training and context."
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        { id: "fci-hovawart-official-standard", role: "cited", locator: "Behaviour/Temperament and working roles" },
        { id: "hovawart-club-of-north-america-faq", role: "cited", locator: "Owner experience, guarding instinct and training demands" }
      ],
      verifiedOn: null,
      note: "DogLens editorial 1–5 estimates informed by breed descriptions; these are not standardised temperament-test scores."
    },
    care: {
      reliability: "reliable_source",
      sources: [
        { id: "royal-kennel-club-hovawart-profile", role: "verified", locator: "Exercise and grooming recommendations" },
        { id: "hovawart-club-of-great-britain-care", role: "verified", locator: "Care and Grooming: coat maintenance, puppy exercise and enrichment" },
        { id: "hovawart-club-of-great-britain-breed-introduction", role: "cited", locator: "Suitable activities and need for mental exercise" }
      ],
      verifiedOn: "2026-10-20",
      note: "Care advice is breed-specific guidance that should be adapted to age, health, conditioning and the individual's temperament."
    },
    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        { id: "royal-kennel-club-hovawart-profile", role: "cited", locator: "Breed characteristics: more than 2 hours of exercise per day" }
      ],
      verifiedOn: null,
      note: "The 120–150 minute range is an editorial planning estimate based on a breed-profile category of more than two hours, not a precise physiological requirement. Puppies need controlled age-appropriate exercise."
    },
    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        { id: "hovawart-club-of-great-britain-care", role: "verified", locator: "Regular thorough brushing; mat-prone areas behind ears, elbows and rear-leg feathering" },
        { id: "royal-kennel-club-hovawart-profile", role: "cited", locator: "Grooming more than once a week and shedding" }
      ],
      verifiedOn: "2026-10-20",
      note: "Grooming descriptions reflect the long, feathered coat and practical breed-club maintenance advice."
    },
    "care.training": {
      reliability: "reliable_source",
      sources: [
        { id: "hovawart-club-of-north-america-faq", role: "verified", locator: "FAQ: owner experience, strong will and guarding instincts" },
        { id: "hovawart-club-of-great-britain-care", role: "cited", locator: "Early handling, trust-building and mental enrichment" }
      ],
      verifiedOn: "2026-10-20",
      note: "Training guidance is tailored to the breed's size, intelligence and protective instincts."
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        { id: "hovawart-club-of-north-america-faq", role: "cited", locator: "FAQ: space needs and preferred fenced running area" },
        { id: "royal-kennel-club-hovawart-profile", role: "cited", locator: "Large home and garden guidance" }
      ],
      verifiedOn: null,
      note: "Editorial assessment rather than a formal breed-standard restriction; space, exercise access and management matter."
    },
    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        { id: "hovawart-club-of-north-america-faq", role: "cited", locator: "FAQ: preference for a large fenced yard or equivalent activities" }
      ],
      verifiedOn: null,
      note: "A secure yard can help but does not replace companionship, training or daily activities."
    },
    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        { id: "hovawart-club-of-great-britain-care", role: "cited", locator: "Coat, outdoor care and drying wet coats and paws" }
      ],
      verifiedOn: null,
      note: "General management advice; heat tolerance varies by individual and climate."
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable quantitative breed-specific alone-time tolerance was established."
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [
        { id: "hovawart-club-of-great-britain-care", role: "cited", locator: "Balanced diet, growth and weight management" }
      ],
      verifiedOn: null,
      note: "Nutritional advice is general guidance and should be individualised to age, body condition and veterinary needs."
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable Hovawart-specific puppy meal frequency was established."
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "general_guidance",
      sources: [
        { id: "hovawart-club-of-great-britain-care", role: "cited", locator: "Balanced diet, treats and body-weight management" }
      ],
      verifiedOn: null,
      note: "No fixed number of meals is prescribed; use an individualised schedule and portion plan."
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable Hovawart-specific senior meal frequency was established."
    },
    health: {
      reliability: "reliable_source",
      sources: [
        { id: "hovawart-club-of-great-britain-health", role: "verified", locator: "Health screening for hip dysplasia, thyroid function and degenerative myelopathy" },
        { id: "royal-kennel-club-hovawart-profile", role: "cited", locator: "Pre-breeding health testing: hip dysplasia" },
        { id: "hovawart-club-of-north-america-faq", role: "cited", locator: "General health and reported hip-health observations" }
      ],
      verifiedOn: "2026-10-20",
      note: "The listed items reflect screening and management topics in breed-club guidance. Reported hip-health outcomes differ by population and do not guarantee an individual dog's health."
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        { id: "hovawart-club-of-great-britain-health", role: "cited", locator: "Health screening and early recognition guidance" },
        { id: "hovawart-club-of-great-britain-care", role: "cited", locator: "Routine coat, ear, dental and body-condition checks" }
      ],
      verifiedOn: null,
      note: "General preventive guidance combined with breed-specific screening recommendations."
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        { id: "hovawart-club-of-great-britain-care", role: "cited", locator: "Teeth cleaning as part of routine handling" }
      ],
      verifiedOn: null,
      note: null
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        { id: "hovawart-club-of-great-britain-care", role: "cited", locator: "Routine ear checks and debris" }
      ],
      verifiedOn: null,
      note: null
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        { id: "hovawart-club-of-great-britain-care", role: "cited", locator: "Skin checks during grooming and drying wet coats" }
      ],
      verifiedOn: null,
      note: null
    },
    suitability: {
      reliability: "estimate",
      sources: [
        { id: "hovawart-club-of-north-america-faq", role: "cited", locator: "Ideal owner and first-time owner advice" },
        { id: "royal-kennel-club-hovawart-profile", role: "cited", locator: "Exercise, space and working-breed profile" }
      ],
      verifiedOn: null,
      note: "Suitability descriptions are editorial guidance; a dog's individual behaviour, household experience and management matter more than a general label."
    },
    "suitability.firstTimeOwners": {
      reliability: "estimate",
      sources: [
        { id: "hovawart-club-of-north-america-faq", role: "cited", locator: "FAQ: suitability for first-time owners" }
      ],
      verifiedOn: null,
      note: "Set to false as an editorial caution because the club describes the breed as challenging for novice owners; exceptions depend on support and preparation."
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A breed-wide boolean would overstate predictability; suitability depends on the individual dog, children, socialisation and adult supervision."
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific yes/no suitability value for senior owners was established."
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        { id: "fci-hovawart-official-standard", role: "verified", locator: "Brief Historical Summary, General Appearance, Coat and Colour" },
        { id: "fci-hovawart-nomenclature", role: "cited", locator: "Breed recognition and colour varieties" },
        { id: "hovawart-club-of-great-britain-breed-introduction", role: "cited", locator: "History and name meaning" }
      ],
      verifiedOn: "2026-10-20",
      note: "Facts are checked against breed-standard and breed-club references and phrased in original wording."
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        { id: "fci-hovawart-official-standard", role: "verified", locator: "Height, colour, coat and temperament" },
        { id: "royal-kennel-club-hovawart-profile", role: "verified", locator: "Exercise and health-screening overview" },
        { id: "hovawart-club-of-great-britain-breed-introduction", role: "cited", locator: "Height and weight" },
        { id: "hovawart-club-of-great-britain-health", role: "cited", locator: "Breeding-health tests" },
        { id: "hovawart-club-of-great-britain-care", role: "cited", locator: "Grooming and exercise advice" },
        { id: "hovawart-club-of-north-america-faq", role: "cited", locator: "First-time owner advice and household behaviour" }
      ],
      verifiedOn: "2026-10-20",
      note: "FAQ answers summarise standard measurements and current club care/screening guidance without copying source prose."
    }
  },
  updatedOn: "2026-10-20"
};