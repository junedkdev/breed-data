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
      uploader: null,
      capturedOn: "2017-04-07",
      uploadedOn: "2017-04-07",
      width: 7366,
      height: 4920,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Dllu, via Wikimedia Commons, CC BY-SA 4.0. No changes made. https://commons.wikimedia.org/wiki/File:An_Akita_Inu_resting.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/",
      restrictions: null,
      metadataCheckedOn: "2026-11-03",
    },
  ],

  overview: {
    summary:
      "The Akita Inu is a large, powerful Japanese Spitz-type dog known for its dignified appearance, loyalty and composed temperament. It has a strong, well-balanced body, a broad head, small upright triangular ears and a thick tail carried over its back. Its dense double coat comes in red fawn, sesame, brindle and white. Originally developed from dogs associated with hunting large game in Japan, the Akita later became an important national breed and is now primarily kept as a companion. It is intelligent and independent, making early socialization, consistent training and responsible ownership particularly important.",

    description:
      "The Akita Inu combines substantial bone and muscular strength with the characteristic features of a Japanese Spitz-type dog. Its broad forehead, dark brown eyes, forward-inclining ears and thick curled tail give it a distinctive appearance. The outer coat is harsh and straight, while the undercoat is soft and dense. Red fawn, sesame, brindle and white are the recognised colours, with whitish urajiro markings required on all colours except white. The breed is generally composed, faithful and receptive, although individual dogs differ in personality. Akitas benefit from patient training, appropriate social experiences, regular physical activity and clear boundaries. Their size, independence and potential difficulty with unfamiliar dogs make responsible management essential.",

    history:
      "The Akita developed in the Akita region of northern Japan. Historical accounts describe medium-sized Akita Matagi dogs used for bear hunting. From the early seventeenth century, these dogs were also used in dog fighting, and later crossbreeding with Tosas and Mastiffs increased their size and changed some of their original Spitz-type characteristics. After dog fighting was prohibited in Japan in 1908, efforts continued to preserve and improve the breed. Nine outstanding examples were designated Natural Monuments in 1931. World War II caused a severe decline in the population and complicated the breed's development. After the war, preservation efforts focused on restoring the traditional Japanese type through selective breeding. The modern Akita Inu is recognised internationally as a Japanese companion breed.",

    originalPurpose:
      "Hunting large game, including bears, and later participating in dog fighting during part of its historical development. The modern FCI classification lists the breed for companionship.",

    currentRoles: [
      "Companion dog",
      "Family companion in appropriately managed households",
      "Conformation showing",
      "Obedience and reward-based training",
      "Outdoor walking and enrichment activities",
    ],
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "cm",
      // FCI ideal heights: 67 cm for males and 61 cm for females.
      // The official standard allows a tolerance of ±3 cm.
      male: {
        min: 67,
        max: 67,
      },
      female: {
        min: 61,
        max: 61,
      },
    },

    // The FCI Standard No. 255 does not specify numerical weight values.
    weight: {
      unit: null,
      male: null,
      female: null,
    },

    // JACA's 2025 health statement gives a 10–12 year life expectancy.
    lifespanYears: {
      min: 10,
      max: 12,
    },

    coatType:
      "Double coat with a harsh, straight outer coat and a soft, dense undercoat.",

    coatLength:
      "Short to medium. Hair is slightly longer around the withers and rump, with a longer coat on the tail.",

    coatColors: [
      "Red fawn",
      "Sesame",
      "Brindle",
      "White",
    ],

    sheddingLevel:
      "Sheds and requires regular coat maintenance. Its dense double coat benefits from routine brushing.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Large, sturdy and well-balanced body",
      "Broad forehead and strong muzzle",
      "Small, dark brown, almost triangular eyes",
      "Small, thick, upright triangular ears",
      "Thick muscular neck",
      "Deep chest and strong bone structure",
      "High-set, thick tail carried curled over the back",
      "Harsh straight outer coat with a soft dense undercoat",
      "Urajiro whitish markings on recognised coat colours",
      "Resilient and powerful movement",
    ],
  },

  temperament: {
    traits: [
      "Loyal",
      "Faithful",
      "Composed",
      "Dignified",
      "Independent",
      "Intelligent",
      "Alert",
      "Courageous",
      "Reserved with unfamiliar people",
      "Strong-willed",
      "Protective",
    ],

    // Editorial estimates, not results of standardised behavioural testing.
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
        "Daily walks",
        "Structured outdoor exercise",
        "Reward-based obedience sessions",
        "Scent-based enrichment games",
        "Supervised exploration",
        "Interactive play",
        "Mental stimulation activities",
      ],
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush regularly to remove loose hair and maintain the dense double coat. Increase brushing frequency during heavier shedding periods.",

      bathing:
        "Bathe when necessary using a dog-appropriate shampoo. Rinse thoroughly and dry the dense undercoat completely.",

      notes: [
        "The double coat requires consistent maintenance.",
        "Check the skin while brushing, especially beneath the dense undercoat.",
        "Avoid shaving the double coat as a routine grooming practice.",
        "Trim nails regularly to maintain comfortable movement.",
        "Check and clean the ears when needed.",
        "Maintain regular dental hygiene.",
        "Brush more frequently when shedding increases.",
      ],
    },

    training: {
      difficulty: "Moderate to challenging",

      tips: [
        "Start training and household boundaries early.",
        "Use reward-based methods and consistent expectations.",
        "Keep training sessions structured and engaging.",
        "Avoid harsh punishment and confrontational handling.",
        "Teach reliable leash manners from an early age.",
        "Practise calm behaviour around unfamiliar people and dogs.",
        "Use secure outdoor areas rather than assuming reliable off-leash recall.",
        "Provide regular mental enrichment.",
        "Ensure all household members follow consistent training rules.",
      ],

      socialization:
        "Begin gradual, positive socialization during puppyhood. Introduce different environments, people, handling experiences and well-matched dogs carefully. Continue social learning throughout adulthood and supervise interactions. Do not force interactions with unfamiliar dogs.",
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cool",
        "Temperate",
      ],

      aloneTimeTolerance:
        "Individual tolerance varies. Gradually teach comfortable periods of separation and provide exercise, enrichment and appropriate rest.",
    },
  },

  nutrition: {
    dietType:
      "Complete and balanced dog food appropriate for the dog's life stage, size, activity level and health requirements.",

    feedingFrequency: {
      puppy:
        "Several small meals daily. Adjust meal frequency and portions according to age, growth and veterinary guidance.",

      adult:
        "Two measured meals daily are a practical starting point. Adjust portions according to body condition and activity.",

      senior:
        "Maintain a complete and balanced senior-appropriate diet, adjusting portions and nutrients according to veterinary advice.",
    },

    guidelines:
      "Feed a nutritionally complete diet appropriate for a large breed. Measure portions rather than relying on unrestricted feeding. Monitor body condition, growth, activity and weight, and keep fresh drinking water available. Puppy feeding should support controlled growth rather than excessive weight gain.",

    considerations: [
      "Monitor body condition and avoid excessive weight gain.",
      "Use a suitable large-breed puppy diet during growth.",
      "Adjust food portions to the dog's activity and age.",
      "Introduce dietary changes gradually.",
      "Keep fresh water available.",
      "Discuss persistent digestive problems with a veterinarian.",
      "Avoid feeding immediately before or after vigorous exercise.",
      "Ask a veterinarian about individual dietary requirements.",
    ],

    note:
      "The feeding suggestions are general guidance, not a breed-specific nutritional prescription. Individual requirements vary with age, body condition, health and activity.",
  },

  health: {
    overview:
      "The Japanese Akitainu is described as generally healthy, but responsible breeding and preventive veterinary care remain important. Breed-health organisations highlight autoimmune conditions and recommend screening breeding dogs for eye, hip and thyroid disorders, as well as tooth-enamel and joint-related conditions. Health-screening recommendations identify potential risks; they do not mean every Akita will develop these conditions.",

    commonConditions: [
      "Sebaceous adenitis — an inflammatory skin condition involving sebaceous glands.",
      "Uveodermatological syndrome (UDS) — an autoimmune condition affecting the eyes and skin.",
      "Autoimmune thyroiditis — an immune-mediated thyroid condition.",
      "Hip dysplasia — an abnormal development of the hip joint.",
      "Eye disorders, including juvenile cataracts and persistent pupillary membranes.",
      "Familial enamel hypoplasia or amelogenesis imperfecta — an inherited tooth-enamel disorder.",
      "Patellar luxation — displacement of the kneecap.",
      "Elbow dysplasia — abnormal development of the elbow joint.",
    ],

    preventiveCare: [
      "Arrange regular veterinary health examinations.",
      "Maintain an appropriate vaccination and parasite-prevention schedule.",
      "Monitor changes in vision, skin condition and behaviour.",
      "Maintain healthy body condition and regular exercise.",
      "Provide routine dental care.",
      "Keep nails trimmed and maintain coat hygiene.",
      "Discuss breed-relevant health screening with a veterinarian.",
      "Seek prompt veterinary assessment for unexplained eye or skin changes.",
    ],

    recommendedScreenings: [
      "Hip evaluation for hip dysplasia.",
      "Ophthalmologist examination for inherited eye conditions.",
      "Thyroid evaluation, including autoimmune thyroiditis screening.",
      "DNA testing for familial enamel hypoplasia or amelogenesis imperfecta.",
      "Patellar luxation evaluation.",
      "Elbow dysplasia evaluation.",
    ],

    dentalCare:
      "Brush regularly with dog-appropriate toothpaste. Pay attention to tooth enamel and dental development, particularly in young dogs. Ask a veterinarian about any abnormal tooth appearance or discomfort.",

    earCare:
      "Inspect the ears regularly for redness, discharge, odour or irritation. Clean only when necessary with an appropriate veterinary-recommended product.",

    skinCare:
      "Maintain regular coat brushing and inspect the skin for unusual scaling, hair loss, inflammation or pigment changes. Persistent skin problems require veterinary assessment, particularly because autoimmune skin conditions are recognised breed-health concerns.",
  },

  suitability: {
    // Editorial lifestyle estimates, not clinical or behavioural assessments.
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Experienced dog owners",
      "Households able to provide consistent training",
      "Owners who appreciate an independent and dignified dog",
      "People able to provide regular exercise and enrichment",
      "Households prepared for responsible dog socialization",
      "Owners willing to maintain a dense double coat",
    ],

    notIdealFor: [
      "Owners looking for an easy-to-train, highly obedient dog",
      "Households unable to provide consistent boundaries",
      "People expecting every dog interaction to be effortless",
      "Owners who cannot manage a large and powerful dog",
      "Households without sufficient time for exercise and enrichment",
      "People expecting dependable off-leash behaviour without extensive training",
    ],
  },

  funFacts: [
    "The Akita takes its name from the Akita region of Japan.",
    "The breed has historical connections with the Akita Matagi dogs used for bear hunting.",
    "Nine outstanding Akita examples were designated Natural Monuments in Japan in 1931.",
    "The Akita is classified in FCI Group 5, which includes Spitz and primitive types.",
    "Urajiro describes the characteristic whitish markings found on recognised non-white coat colours.",
    "The Akita has a thick tail that is characteristically carried curled over its back.",
    "The modern FCI standard classifies the Akita as a companion dog.",
  ],

  faq: [
    {
      question: "Where does the Akita Inu originate?",
      answer:
        "The Akita Inu originates from Japan, particularly the Akita region of northern Honshu. The breed developed from Japanese dogs historically associated with hunting large game.",
    },
    {
      question: "Is Akita Inu the same as American Akita?",
      answer:
        "No. Japanese Akita Inu and American Akita are distinct breed types with different breed standards and physical characteristics. This record describes the Japanese Akita, not the American Akita.",
    },
    {
      question: "How tall is an Akita Inu?",
      answer:
        "The FCI standard gives an ideal height of 67 cm for males and 61 cm for females, with a tolerance of 3 cm more or less.",
    },
    {
      question: "How much does an Akita Inu weigh?",
      answer:
        "The FCI Standard No. 255 does not specify a numerical weight range. A healthy weight depends on the individual dog's size, build and body condition.",
    },
    {
      question: "How long does an Akita Inu live?",
      answer:
        "The Japanese Akitainu Club of America gives a life expectancy of 10–12 years. Individual lifespan varies with genetics, health and care.",
    },
    {
      question: "What colours are recognised in the Akita Inu?",
      answer:
        "The recognised colours are red fawn, sesame, brindle and white. All listed colours except white must have the characteristic urajiro markings.",
    },
    {
      question: "Is the Akita Inu easy to train?",
      answer:
        "Akitas are intelligent but independent-minded. Consistent, patient, reward-based training and early socialization are important. Their independence can make some training tasks more challenging.",
    },
    {
      question: "Does the Akita Inu shed?",
      answer:
        "Yes. The Akita has a dense double coat and requires regular brushing to remove loose hair and maintain coat condition. More frequent brushing may be necessary during heavier shedding periods.",
    },
    {
      question: "Is an Akita Inu good with other dogs?",
      answer:
        "Individual temperaments vary, and interactions with unfamiliar dogs may require careful management. Early socialization, supervision and responsible introductions are important.",
    },
    {
      question: "What health tests should Akita Inu breeders consider?",
      answer:
        "Breed-health recommendations include hip, eye and thyroid examinations, DNA testing for inherited tooth-enamel disorders, and screening for patellar and elbow conditions. Ask breeders for documented results and discuss them with a veterinarian.",
    },
    {
      question: "Is Akita Inu suitable for first-time owners?",
      answer:
        "The breed is generally better suited to owners who can manage a large, independent dog and provide consistent training, socialization and responsible supervision.",
    },
  ],

  references: [
    "fci-akita-standard-255",
    "fci-akita-nomenclature-255",
    "jaca-japanese-akitainu-health-statement-2025",
    "wikimedia-akita-inu-resting-photo",
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
      ],
      verifiedOn: "2026-11-03",
      note: "Uses the official Akita name and commonly used Japanese breed-name variants.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The reviewed breed standards and breed-health publications do not establish a separate scientific name for this breed.",
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
      verifiedOn: "2026-11-03",
      note: "Uses the FCI classification.",
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
      ],
      verifiedOn: "2026-11-03",
      note: "The geographical description follows the breed's Japanese origin and historical connection with the Akita region.",
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
      verifiedOn: "2026-11-03",
      note: "The standard identifies the Akita region as part of the breed's historical development.",
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
      ],
      verifiedOn: "2026-11-03",
      note: "Original user-facing descriptions based on the official breed information.",
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
      verifiedOn: "2026-11-03",
      note: "Physical characteristics follow FCI Standard No. 255, with non-standard care observations separately identified.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-akita-standard-255",
          role: "verified",
          locator: "SIZE: male 67 cm, female 61 cm, tolerance ±3 cm",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "The stored values are the exact ideal heights published by the FCI. The standard separately allows a tolerance of 3 cm more or less. No unit conversion is performed.",
    },

    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "FCI Standard No. 255 does not publish a numerical weight range. No weight has been inferred from other breed types.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "jaca-japanese-akitainu-health-statement-2025",
          role: "verified",
          locator: "Opening paragraph: life expectancy 10–12 years",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "The range is reported in the 2025 Japanese Akitainu Club of America health statement. It is an expected lifespan, not a guarantee.",
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
      verifiedOn: "2026-11-03",
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
      verifiedOn: "2026-11-03",
      note: "Recognised colours are paraphrased from the official standard.",
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
      verifiedOn: "2026-11-03",
      note: "The description identifies the maintenance needs of the dense double coat without assigning an unsupported shedding frequency.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A reliable breed-specific drooling assessment was not established.",
    },

    temperament: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-akita-standard-255",
          role: "verified",
          locator: "BEHAVIOUR AND TEMPERAMENT",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Breed-level temperament descriptions are not guarantees about individual dogs.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial 1–5 estimates, not results from standardised behavioural testing. Individual dogs vary.",
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
      note: "Care recommendations are practical guidance and should be adapted to the individual dog's health, age and lifestyle.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "An editorial starting range for a healthy adult dog, not a published breed-standard requirement. Puppies, seniors and dogs with health conditions need individual plans.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine nutrition advice. The record does not prescribe a particular brand, formula or medical diet.",
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
      verifiedOn: "2026-11-03",
      note: "Health information distinguishes reported breed concerns from recommended screening. It does not assert disease prevalence.",
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
      verifiedOn: "2026-11-03",
      note: "This list describes reported health concerns and screening targets. It is not a ranked prevalence list.",
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
      verifiedOn: "2026-11-03",
      note: "These are recommendations for breeding-stock screening, not a substitute for veterinary assessment of an individual dog.",
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
      note: "General canine dental care advice, supplemented by breed-specific tooth-enamel screening information.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine ear-care advice.",
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
      note: "General skin-care advice with breed-health context. Skin symptoms require veterinary assessment.",
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
      note: "Editorial lifestyle estimates based on size, independence and management needs. These are not validated suitability assessments.",
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-akita-standard-255",
          role: "verified",
          locator: "Historical summary, origin, classification and coat colour",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Facts are original paraphrases of the official breed information.",
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
          locator: "Life expectancy and health screening",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Answers distinguish official breed-standard facts from health information and general care advice.",
    },
  },

  updatedOn: "2026-11-03",
};
