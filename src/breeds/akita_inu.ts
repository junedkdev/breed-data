import type { Breed } from "../schema/breed.types";

export const akita_inu: Breed = {
  slug: "akita-inu",
  name: "Akita Inu",
  scientificName: null,

  alternateNames: [
    "Akita",
    "Japanese Akita",
    "Japanese Akitainu",
    "Akita Ken",
  ],

  group:
    "FCI Group 5 — Spitz and primitive types; Section 5 — Asian Spitz and related breeds",

  origin: {
    country: "Japan",
    region: "Akita Prefecture, northern Honshu",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/An_Akita_Inu_resting.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:An_Akita_Inu_resting.jpg",
      title: "An Akita Inu resting.jpg",
      description: "An Akita Inu resting.",
      creator: "Dllu",
      uploader: "Dllu",
      capturedOn: "2017-04-07",
      uploadedOn: "2017-04-07",
      width: 7366,
      height: 4920,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Dllu, via Wikimedia Commons, CC BY-SA 4.0. No changes made. https://commons.wikimedia.org/wiki/File:An_Akita_Inu_resting.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/",
      restrictions: null,
      metadataCheckedOn: "2026-11-16",
    },
  ],

  overview: {
    summary:
      "The Akita Inu is a large, powerful Japanese Spitz-type dog admired for its dignified bearing, deep loyalty, and composed temperament. Built with a balanced, sturdy frame, broad head, small forward-tilted triangular ears, and a thick curled tail, its plush double coat appears in red fawn, sesame, brindle, and white. Originally descended from northern Japanese big-game hunting dogs and now revered as a companion breed, its independent mind requires early socialization, patient training, and experienced handling.",

    description:
      "Substantial bone and muscular strength meet classic Japanese Spitz proportions in the Akita Inu. A broad forehead, small dark triangular eyes, thick pricked ears, and a high-set tail curled over the back create its unmistakable silhouette. Its harsh, straight outer coat stands over a soft, dense undercoat in red fawn, sesame, brindle, or pure white, with whitish urajiro markings required on all colours except white. Calm, faithful, and alert at home, this strong-willed dog needs clear household boundaries, daily exercise, and careful management around unfamiliar dogs.",

    history:
      "Originating in northern Honshu's Akita region, the breed traces back to medium-sized Akita Matagi dogs used to hunt bear and wild boar. From the early seventeenth century, dogs in the region were used in fighting rings and later crossed with Tosas and Mastiffs, altering their traditional Spitz outline. Following a 1908 ban on dog fighting, preservationists worked to restore the native type, and in 1931 nine outstanding dogs were named Natural Monuments of Japan. After World War II devastated numbers, breeders selectively rebuilt the traditional Japanese line—distinct from the heavier American line—earning international recognition as a companion breed.",

    originalPurpose:
      "Hunting large game such as bear and wild boar, with a historical period of dog-fighting use before modern preservation as a companion breed.",

    currentRoles: [
      "Loyal household and family companion in experienced homes",
      "Conformation showing and cultural breed preservation",
      "Reward-based obedience and structured training",
      "Daily walking, hiking, and scent-enrichment partner",
    ],
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "cm",
      male: {
        min: 67,
        max: 67,
      },
      female: {
        min: 61,
        max: 61,
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
      "Weather-resistant double coat combining a harsh, straight outer layer with a soft, dense undercoat.",

    coatLength:
      "Short to medium overall, with slightly longer hair across the withers and rump and fuller hair on the tail.",

    coatColors: [
      "Red fawn (with urajiro whitish markings)",
      "Sesame — red fawn hairs with black tips (with urajiro markings)",
      "Brindle (with urajiro markings)",
      "Pure white",
    ],

    sheddingLevel:
      "High during seasonal coat blowouts; the dense double coat sheds year-round and needs regular brushing.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Large, sturdy, well-proportioned Spitz frame",
      "Broad skull and forehead with a strong, tapered muzzle",
      "Relatively small, dark brown, nearly triangular eyes",
      "Small, thick, triangular ears pricked and tilted slightly forward",
      "Thick, muscular neck without dewlap",
      "Deep chest, level back, and heavy bone",
      "High-set, thick tail carried vigorously curled over the back",
      "Harsh, stand-off outer coat over a plush undercoat",
      "Characteristic whitish urajiro markings on all non-white colours",
      "Resilient, powerful gait",
    ],
  },

  temperament: {
    traits: [
      "Deeply loyal and faithful",
      "Composed and dignified",
      "Independent thinker",
      "Intelligent and observant",
      "Alert and courageous",
      "Reserved or aloof with strangers",
      "Strong-willed",
      "Naturally protective of household",
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 2,
      withStrangers: 2,
      protectiveness: 5,
      independence: 5,
      trainability: 3,
      barking: 2,
      energy: 3,
    },
  },

  care: {
    exercise: {
      level: "Moderate to high",
      minutesPerDay: {
        min: 60,
        max: 90,
      },
      activities: [
        "Brisk daily walks on a sturdy lead",
        "Structured outdoor exercise in securely fenced spaces",
        "Reward-based obedience and focus games",
        "Scent-search and nose-work enrichment",
        "Supervised trail hikes in cool or temperate weather",
        "Interactive puzzle play",
      ],
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush weekly using an undercoat rake and pin brush to clear loose hair, increasing to daily brushing during heavy seasonal coat blowouts.",

      bathing:
        "Bathe as needed with a gentle canine shampoo, rinsing thoroughly and drying the dense undercoat completely to prevent trapped moisture.",

      notes: [
        "Never shave the double coat, as it insulates and protects the skin.",
        "Part the coat during brushing to check skin for scaling, redness, or hair loss.",
        "Trim nails regularly to keep footing comfortable.",
        "Check ears routinely for wax, redness, or odour.",
        "Maintain regular tooth brushing and inspect young teeth for normal enamel.",
      ],
    },

    training: {
      difficulty: "Moderate to challenging",

      tips: [
        "Establish clear, consistent household boundaries from puppyhood.",
        "Use patient, reward-based training rather than harsh corrections.",
        "Keep sessions short, purposeful, and varied to prevent boredom.",
        "Prioritize loose-lead walking and reliable handler focus early.",
        "Reinforce calm neutrality around unfamiliar people and dogs.",
        "Exercise in securely fenced areas rather than relying on off-lead recall.",
        "Provide daily mental puzzles alongside physical walks.",
      ],

      socialization:
        "Start calm, positive socialization early in puppyhood, introducing varied people, sights, handling, and steady dogs gradually. Supervise all interactions and never force close contact with unfamiliar dogs.",
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cool",
        "Temperate",
      ],

      aloneTimeTolerance:
        "Moderate when conditioned gradually; provide adequate daily exercise, mental enrichment, and family companionship.",
    },
  },

  nutrition: {
    dietType:
      "Complete, balanced large-breed dog food matched to life stage, body condition, activity level, and veterinary needs.",

    feedingFrequency: {
      puppy:
        "Feed a controlled-growth large-breed puppy diet in multiple measured meals daily according to age and veterinary advice.",

      adult:
        "Feed two measured meals daily, adjusting portions to maintain lean muscle and healthy body condition.",

      senior:
        "Feed a balanced senior-appropriate formula, adjusting calories and nutrients with veterinary guidance.",
    },

    guidelines:
      "Feed measured portions of a nutritionally complete large-breed diet rather than free-feeding. Monitor weight trends and rib cover, keep fresh water available at all times, and support steady, unhurried skeletal growth in puppies.",

    considerations: [
      "Keep body weight lean to reduce stress on hips, elbows, and stifles.",
      "Use a dedicated large-breed puppy formula during growth.",
      "Adjust portions when seasonal activity changes.",
      "Transition between foods gradually.",
      "Avoid vigorous exercise immediately before or after meals.",
      "Consult a veterinarian for persistent digestive or weight concerns.",
    ],

    note:
      "General canine nutrition guidance; individual requirements vary with age, metabolism, workload, and veterinary advice.",
  },

  health: {
    overview:
      "Generally a sturdy breed, the Akita Inu is nonetheless monitored for several autoimmune, orthopedic, ocular, and dental conditions. Breed-health guidance highlights sebaceous adenitis, uveodermatological syndrome (UDS), and autoimmune thyroiditis, alongside screening breeding stock for hip and elbow dysplasia, patellar luxation, inherited eye disorders, and familial enamel hypoplasia (amelogenesis imperfecta). Prospective owners should review documented parental clearances and maintain routine veterinary care.",

    commonConditions: [
      "Sebaceous adenitis — an immune-mediated skin disorder targeting the sebaceous glands and causing scaling and hair loss.",
      "Uveodermatological syndrome (UDS / VKH-like syndrome) — a serious autoimmune condition affecting the eyes and skin pigment.",
      "Autoimmune thyroiditis — an immune-mediated disorder leading to hypothyroidism.",
      "Hip dysplasia — developmental malformation of the hip joint.",
      "Inherited eye conditions, including juvenile cataracts and persistent pupillary membranes (PPM).",
      "Familial enamel hypoplasia (amelogenesis imperfecta) — an inherited defect of tooth enamel development.",
      "Patellar luxation — slipping of the kneecap.",
      "Elbow dysplasia — developmental abnormality of the elbow joint.",
    ],

    preventiveCare: [
      "Schedule regular veterinary wellness exams and keep vaccinations and parasite prevention current.",
      "Monitor eyes, skin pigment, and coat quality closely, seeking prompt care for redness, squinting, or patchy hair loss.",
      "Maintain a lean body weight and steady, joint-friendly exercise.",
      "Provide routine dental care and check young adult teeth for normal enamel coverage.",
      "Request documented parental health clearances before selecting a puppy.",
    ],

    recommendedScreenings: [
      "Hip dysplasia evaluation.",
      "Ophthalmologist eye examination.",
      "Thyroid panel including autoimmune thyroiditis evaluation.",
      "DNA test for familial enamel hypoplasia (amelogenesis imperfecta).",
      "Patellar luxation evaluation.",
      "Elbow dysplasia evaluation.",
    ],

    dentalCare:
      "Brush teeth regularly with dog-safe toothpaste and inspect developing adult teeth for rough, pitted, or discoloured enamel, consulting a veterinarian if abnormalities appear.",

    earCare:
      "Check the thick, upright ears weekly for redness, odour, wax, or irritation, cleaning gently only when needed with a veterinarian-approved solution.",

    skinCare:
      "Inspect skin during brushing for scaling, follicular casts, hair loss, or depigmentation around the nose, lips, and eyelids, seeking prompt veterinary evaluation for persistent changes.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Experienced owners comfortable leading a large, independent-minded dog",
      "Households committed to patient, reward-based training and clear structure",
      "Owners who appreciate a quiet, dignified, deeply loyal companion",
      "Homes with a securely fenced yard and time for daily walks",
      "People prepared to manage introductions to unfamiliar dogs carefully",
    ],

    notIdealFor: [
      "First-time owners seeking an effortlessly biddable, eager-to-please dog",
      "Households unable to maintain consistent boundaries and supervision",
      "Owners wanting a dog for busy off-leash dog parks",
      "Handlers unable to physically manage a strong, large spitz",
      "Homes unwilling to brush a heavy seasonal-shedding double coat",
    ],
  },

  funFacts: [
    "Named for Akita Prefecture in northern Honshu, its ancestors were medium-sized Akita Matagi bear-hunting dogs.",
    "In 1931, Japan designated nine outstanding Akitas as national Natural Monuments.",
    "All non-white coat colours must display 'urajiro'—characteristic whitish markings along the muzzle, cheeks, throat, chest, belly, tail underside, and inner legs.",
    "Its thick, high-set tail curls tightly over the back, nearly reaching the hocks when let down.",
    "Post-World War II preservation separated the traditional Japanese Akita Inu from the heavier American Akita line.",
  ],

  faq: [
    {
      question: "Where does the Akita Inu originate?",
      answer:
        "It originates in Japan, specifically the mountainous Akita Prefecture of northern Honshu, where its ancestors hunted bear and large game.",
    },
    {
      question: "Is Akita Inu the same as American Akita?",
      answer:
        "No. The Japanese Akita Inu and the American Akita are recognized as separate breeds with distinct standards, head shapes, size ranges, and permitted coat colours.",
    },
    {
      question: "How tall is an Akita Inu?",
      answer:
        "Ideal height at the withers is 67 cm for males and 61 cm for females, with a tolerance of 3 cm above or below.",
    },
    {
      question: "How much does an Akita Inu weigh?",
      answer:
        "Adult males typically weigh 65 to 75 lb and adult females typically weigh 55 to 65 lb, proportioned to their lighter, athletic Japanese frame.",
    },
    {
      question: "How long does an Akita Inu live?",
      answer:
        "Typical life expectancy is 10 to 12 years, depending on genetics, weight management, and veterinary care.",
    },
    {
      question: "What colours are recognised in the Akita Inu?",
      answer:
        "Recognised colours are red fawn, sesame (red fawn hairs with black tips), brindle, and pure white; all colours except white must show whitish urajiro markings.",
    },
    {
      question: "Is the Akita Inu easy to train?",
      answer:
        "Intelligent yet independent and strong-willed, it responds best to calm, consistent, reward-based training and early socialization rather than repetitive drills.",
    },
    {
      question: "Does the Akita Inu shed?",
      answer:
        "Yes. Its plush double coat sheds moderately year-round and blows its dense undercoat heavily during seasonal changes, requiring frequent brushing.",
    },
    {
      question: "Is an Akita Inu good with other dogs?",
      answer:
        "It can be selective or intolerant toward unfamiliar dogs, particularly of the same sex, so early socialization, leashed walks, and careful supervision are essential.",
    },
    {
      question: "What health tests should Akita Inu breeders consider?",
      answer:
        "Recommended clearances include hip, elbow, patella, eye, and thyroid evaluations, along with DNA testing for familial enamel hypoplasia (amelogenesis imperfecta).",
    },
    {
      question: "Is Akita Inu suitable for first-time owners?",
      answer:
        "Generally no. Its size, strength, independence, and guarding instincts are better suited to experienced handlers who can provide clear structure and safe management.",
    },
  ],

  references: [
    "fci-akita-standard-255",
    "fci-akita-nomenclature-255",
    "jaca-japanese-akitainu-health-statement-2025",
    "wikimedia-akita-inu-resting-photo",
    "the-dog-api",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-akita-standard-255",
          role: "verified",
          locator: "Standard title: Akita, FCI Standard No. 255",
        },
        {
          id: "jaca-japanese-akitainu-health-statement-2025",
          role: "verified",
          locator: "Title and breed identification: Japanese Akitainu",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Uses official Akita and Japanese Akitainu names; note that 'Great Japanese Dog' in The Dog API refers historically to the American Akita line and is omitted here to avoid conflating the two breeds.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Reviewed breed standards and health publications do not establish a separate scientific name.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-akita-standard-255",
          role: "verified",
          locator: "FCI classification: Group 5, Section 5",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Follows FCI Group 5, Section 5 classification; The Dog API lists Working.",
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-akita-standard-255",
          role: "verified",
          locator: "Origin and brief historical summary",
        },
        {
          id: "fci-akita-nomenclature-255",
          role: "verified",
          locator: "Country of origin: Japan",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Follows Japanese origin and historical connection with Akita Prefecture.",
    },

    "origin.region": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-akita-standard-255",
          role: "verified",
          locator: "Brief historical summary: Akita region",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Identifies the Akita region in northern Honshu.",
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-akita-standard-255",
          role: "verified",
          locator: "Historical summary, utilization, general appearance, behaviour, coat and size",
        },
        {
          id: "fci-akita-nomenclature-255",
          role: "verified",
          locator: "Breed classification and origin",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "All user-facing prose is newly written original wording based on official breed information.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-akita-standard-255",
          role: "verified",
          locator: "General appearance, head, body, tail, coat, colour and size",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Physical characteristics follow FCI Standard No. 255.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-akita-standard-255",
          role: "verified",
          locator: "SIZE: male 67 cm, female 61 cm, tolerance ±3 cm",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.height.metric (66–71 cm male, 61–66 cm female — reflects American Akita dimensions)",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Retains the exact FCI ideal heights (67 cm male, 61 cm female, ±3 cm tolerance) for the Japanese Akita Inu; The Dog API's 66–71 cm / 61–66 cm ranges reflect American Akita measurements.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "jaca-japanese-akitainu-health-statement-2025",
          role: "verified",
          locator: "Breed weight: 65–75 pounds (male), 55–65 pounds (female)",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight.metric (45–59 kg male, 32–45 kg female — reflects heavier American Akita)",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "FCI Standard No. 255 omits weight; 65–75 lb (male) and 55–65 lb (female) are taken from the Japanese Akitainu Club of America / AKC Japanese Akitainu profile in published lb units, whereas The Dog API's 45–59 kg / 32–45 kg figures reflect the heavier American Akita.",
    },

    "physical.weight.male.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "jaca-japanese-akitainu-health-statement-2025",
          role: "verified",
          locator: "Male weight: 65–75 pounds",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Upper end of the Japanese Akitainu male weight range (75 lb).",
    },

    "physical.weight.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "jaca-japanese-akitainu-health-statement-2025",
          role: "verified",
          locator: "Female weight: 55–65 pounds",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Upper end of the Japanese Akitainu female weight range (65 lb).",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "jaca-japanese-akitainu-health-statement-2025",
          role: "verified",
          locator: "Opening paragraph: life expectancy 10–12 years",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span (10–13 years)",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "10–12 years is reported in the 2025 Japanese Akitainu Club of America health statement (The Dog API lists 10–13 years).",
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-akita-standard-255",
          role: "verified",
          locator: "COAT — Hair",
        },
      ],
      verifiedOn: "2026-11-16",
      note: null,
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-akita-standard-255",
          role: "verified",
          locator: "COAT — Colour and urajiro definition",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Follows FCI Standard No. 255 (red fawn, sesame, brindle, white) rather than The Dog API's species-wide colour list.",
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "jaca-japanese-akitainu-health-statement-2025",
          role: "verified",
          locator: "Grooming guidance: double or triple-coated breeds and regular coat maintenance",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Reflects maintenance needs of the dense double coat.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling assessment was established.",
    },

    temperament: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-akita-standard-255",
          role: "verified",
          locator: "BEHAVIOUR AND TEMPERAMENT",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Breed-level temperament descriptions; individual dogs vary.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial 1–5 estimates, not results from standardized behavioural testing.",
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "jaca-japanese-akitainu-health-statement-2025",
          role: "cited",
          locator: "Grooming and maintenance guidance",
        },
      ],
      verifiedOn: null,
      note: "Practical care guidance adapted to health, age, and lifestyle.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial starting range for a healthy adult dog, not a published breed-standard requirement.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine nutrition guidance.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "jaca-japanese-akitainu-health-statement-2025",
          role: "verified",
          locator: "Health overview, recommended screening and autoimmune conditions",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Distinguishes reported breed concerns from recommended screening without asserting prevalence.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "jaca-japanese-akitainu-health-statement-2025",
          role: "verified",
          locator: "Autoimmune conditions: sebaceous adenitis and uveodermatological syndrome; screening for other inherited concerns",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Describes reported health concerns and screening targets rather than a prevalence ranking.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "jaca-japanese-akitainu-health-statement-2025",
          role: "verified",
          locator: "OFA eye, hip, thyroid, tooth enamel, patella and elbow screening recommendations",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Recommendations for breeding-stock screening.",
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
      note: "General canine dental care guidance supplemented by tooth-enamel monitoring.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine ear-care guidance.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "jaca-japanese-akitainu-health-statement-2025",
          role: "cited",
          locator: "Autoimmune skin conditions and sebaceous adenitis",
        },
      ],
      verifiedOn: null,
      note: "General skin-care guidance with autoimmune skin context.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "fci-akita-standard-255",
          role: "cited",
          locator: "Large size and breed temperament",
        },
      ],
      verifiedOn: null,
      note: "Editorial lifestyle estimates based on size, independence, and management needs.",
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-akita-standard-255",
          role: "verified",
          locator: "Historical summary, origin, tail and coat colour",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Facts written in original wording from official breed information.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-akita-standard-255",
          role: "verified",
          locator: "Origin, history, size, coat, colour, temperament and utilization",
        },
        {
          id: "jaca-japanese-akitainu-health-statement-2025",
          role: "verified",
          locator: "Life expectancy, weight, and health screening",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Original answers synthesizing official breed-standard facts and health guidance.",
    },
  },

  updatedOn: "2026-11-16",
};
