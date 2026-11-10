import type { Breed } from "../schema/breed.types";

export const polish_hound: Breed = {
  slug: "polish-hound",
  name: "Polish Hound",
  scientificName: null,

  alternateNames: [
    "Ogar Polski",
    "Polnische Bracke",
    "Brachet polonais",
    "Sabueso Polaco",
  ],

  group: "Scent Hounds and Related Breeds; Large-sized Hounds",

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
        "Adult male Polish Hound showing robust bone structure, pendulous ears, and black-and-tan coat.",
      creator: "Malgo.milek",
      uploader: "Malgo.milek",
      capturedOn: "2023-05-16",
      uploadedOn: "2023-07-19",
      width: 3101,
      height: 2067,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Malgo.milek, via Wikimedia Commons, CC BY-SA 4.0. Changes, if any, must be indicated. Adapted versions must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10",
    },
  ],

  overview: {
    summary:
      "The Polish Hound, natively celebrated as the Ogar Polski, is a substantial, calm-tempered scent hound bred for enduring cross-country tracking across dense woodland. Characterized by low-set hanging ears, a deep resonant voice, and a distinctive black or dark mantle over warm tan, it couples relentless hunting determination with an exceptionally gentle, loyal demeanor in the family home.",

    description:
      "Substantial, well-muscled, and built for sustained stamina rather than blinding speed, the Polish Hound displays a slightly rectangular silhouette with heavy bone and a calm, noble expression. A noble head with soft, low-set pendulous ears and a gently folded dewlap leads into a broad, deep chest and powerful limbs. The dense double coat pairs a short, sleek texture on the head and front legs with a thicker, weather-resistant outer layer and soft undercoat over the trunk. In the field, the hound pursues trails with deliberate methodology, sounding a melodious, bell-like voice that shifts in pitch between sexes. At home, it is renowned for its tranquil, unhurried temperament, forming deep attachments to its household and treating family members with gentle patience. Prospective owners should anticipate its powerful tracking drive, providing structured scent enrichment and secure boundaries while maintaining patient, positive reinforcement.",

    history:
      "Hounds of this type have pursued game across Polish forests since the Middle Ages, with fourteenth-century royal chronicles recording specialized packs kept for sovereign hunts. Sixteenth- and seventeenth-century Polish sporting literature—notably Count Jan Ostroróg's 1618 treatise—documented systematic breeding principles and established the name Ogar for these melodious trailing hounds. The devastation of World War II virtually wiped out the breed in central Poland, but in 1959, cynologist Piotr Kartawik repatriated foundational breeding dogs from modern-day Belarus to reconstruct the population. Official documentation soon followed in the 1960s, preserving Poland's venerable national scent hound as both a treasured hunting partner and a calm domestic companion.",

    originalPurpose:
      "Tracking and driving big game, hare, fox, and wild boar across forested terrain, signaling the line with a melodious tracking voice.",

    currentRoles: [
      "Scent trailing and forest tracking",
      "Search and rescue and trailing sports",
      "Active companion for outdoor-oriented homes",
      "Conformation showing",
    ],
  },

  physical: {
    sizeCategory: "Medium-to-large",

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

    lifespanYears: {
      min: 10,
      max: 14,
    },

    coatType:
      "Dense double coat consisting of a thick, hard outer layer and a soft, insulating undercoat, lying sleek on the face and lengthening slightly along the spine, thighs, and tail underside.",

    coatLength: "Medium",

    coatColors: [
      "Black mantle with tan markings",
      "Dark grey mantle with tan markings",
      "Tan with small white chest or foot markings",
    ],

    sheddingLevel: "Moderate",

    droolingLevel: null,

    distinctiveFeatures: [
      "Rectangular, muscular frame engineered for all-day trailing stamina",
      "Low-set, medium-length pendulous ears hanging close to the cheeks with rounded tips",
      "Noble, broad head with slight forehead wrinkling and gentle throat dewlap",
      "Dark saddle or blanket over rich tan markings on head, flanks, and limbs",
      "Dense weather-resistant double coat with soft undercoat",
      "Sonorous, musical tracking bay that varies distinctly by sex",
    ],
  },

  temperament: {
    traits: [
      "Calm",
      "Devoted",
      "Persistent",
      "Gentle",
      "Alert",
      "Vocal on trail",
      "Independent",
      "Even-tempered",
      "Reserved with strangers",
    ],

    scores: {
      affection: 4,
      withChildren: null,
      withDogs: null,
      withStrangers: 3,
      protectiveness: 3,
      independence: 4,
      trainability: 3,
      barking: 4,
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
        "Long leashed hikes and walks in natural settings",
        "Structured scent-tracking games and nose work",
        "Controlled exploration in safely fenced areas",
        "Short, varied positive obedience sessions",
        "Food puzzles and environmental search challenges",
      ],
    },

    grooming: {
      level: "Low to moderate",

      brushing:
        "Brush once or twice weekly with a hound mitt or firm bristle brush to clear dead undercoat and maintain coat shine, increasing frequency during spring and autumn shedding periods.",

      bathing:
        "Bathe only as needed when dirty or after muddy field tracking, using a gentle canine shampoo and drying thoroughly.",

      notes: [
        "Inspect pendulous ears weekly for moisture, debris, or redness, cleaning with a veterinarian-recommended rinse.",
        "Check paws and coat for burrs, seeds, and ticks following woodland walks.",
        "Trim claws regularly to maintain correct foot structure and prevent splitting.",
        "Brush teeth several times weekly using pet-safe dental paste.",
      ],
    },

    training: {
      difficulty: "Moderate",

      tips: [
        "Employ patient, reward-based methods leveraging high-value treats and encouraging praise.",
        "Practice dependable recall early, keeping in mind that strong olfactory cues can challenge responsiveness.",
        "Keep sessions engaging and varied rather than drilling monotonous repetitions.",
        "Use long tracking lines in open terrain to prevent unmonitored pursuit of wildlife scents.",
      ],

      socialization:
        "Introduce the young hound gently and systematically to unfamiliar people, domestic sounds, varied environments, and other dogs to nurture its inherently calm, self-assured nature.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Cool and temperate climates",
        "Cold climates with adequate weather protection",
        "Warm climates with access to cool shade, abundant water, and exercise during cooler morning or evening hours",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "Complete and balanced high-quality diet appropriate for large working hounds, formulated for life stage and physical conditioning.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Provide measured daily rations divided into two meals for adults to reduce bloat risks. Ensure constant access to fresh water. Adjust caloric intake based on seasonal hunting or exercise levels, monitoring body condition to avoid excess weight.",

    considerations: [
      "Active working dogs require increased caloric density during peak trailing seasons.",
      "Avoid strenuous physical exertion immediately before or after mealtimes.",
      "Prevent obesity to minimize mechanical stress on joints and spine.",
      "Account for training treats within the dog's total daily caloric allowance.",
    ],

    note:
      "General canine nutrition guidance; individual requirements vary with age, metabolism, and activity level.",
  },

  health: {
    overview:
      "The Polish Hound is generally regarded as a robust and healthy working hound with an average life expectancy of 10 to 14 years. As with other deep-chested trailing hounds, clinical attention focuses primarily on structural eyelid abnormalities such as ectropion or entropion, developmental hip dysplasia, otitis externa associated with pendant ears, and potential risks of gastric dilatation-volvulus (bloat).",

    commonConditions: [],

    preventiveCare: [
      "Schedule annual veterinary examinations, including periodic eye and orthopedic assessments.",
      "Check and clean the pendulous ear canals regularly to prevent fungal or bacterial buildup.",
      "Feed measured portions in split daily meals and avoid vigorous exercise directly around feeding times.",
      "Maintain core immunizations, routine parasite prevention, and dental hygiene.",
      "Verify parental health histories and screening results when acquiring a puppy.",
    ],

    recommendedScreenings: [
      "Hip radiographic evaluation",
      "Ophthalmologist examination for eyelid conformation",
      "Routine otoscopic ear canal examination",
    ],

    dentalCare:
      "Brush teeth regularly using dog-formulated toothpaste, arranging professional dental cleanings as recommended by a veterinarian.",

    earCare:
      "Inspect hanging ears weekly for discharge, warmth, or unpleasant odors, cleansing carefully with a veterinarian-approved ear wash without probing deeply into the canal.",

    skinCare:
      "Check the skin and coat after outdoor activity for scratches, ticks, or irritation, consulting a veterinarian if persistent itching or inflammation arises.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Active individuals and families who appreciate dedicated outdoor tracking and hiking",
      "Rural or semi-rural homes with securely fenced yards",
      "Owners interested in scent work, tracking trials, or lawful hunting",
      "Households seeking a tranquil, affectionate, and steadfast companion indoors",
    ],

    notIdealFor: [
      "Sedentary homes unable to provide regular physical and olfactory enrichment",
      "Urban environments where deep tracking vocalizations would disturb neighbors",
      "Owners expecting instant off-leash reliability in open wildlife territory",
      "Households lacking secure yard containment",
    ],
  },

  funFacts: [
    "The native Polish name 'Ogar' is deeply embedded in regional culture and appears in Polish literature dating back over four centuries.",
    "Unlike sight hounds that rely on blinding bursts of speed, the Polish Hound is built for unhurried, relentless tracking endurance across dense brush.",
    "The breed possesses a resonant, melodious tracking bay, with males traditionally emitting a lower-pitched voice while females sound at a higher pitch.",
    "Polish historical accounts from 1618 describe hunting treatises dedicated exclusively to the breeding and management of Ogar hounds.",
  ],

  faq: [
    {
      question: "What is the historical origin of the Polish Hound?",
      answer:
        "The breed developed in Poland over many centuries as a specialized forest hunting hound, historically trailing hare, deer, and wild boar. Following significant population losses in World War II, the breed was reconstructed in the late 1950s using surviving regional hounds.",
    },
    {
      question: "How large does a Polish Hound grow?",
      answer:
        "Adult males typically stand 56–65 cm at the withers with weights ranging between 55–70 lb, while adult females measure 55–60 cm and weigh 44–57 lb.",
    },
    {
      question: "Is the Polish Hound a loud breed?",
      answer:
        "The hound is renowned for giving voice with a clear, musical bay while pursuing a fresh scent trail. In the household, it is generally calm and quiet when its exercise and mental needs are met, though it will sound an alert if strangers approach.",
    },
    {
      question: "What does the Polish Hound's coat look like?",
      answer:
        "It features a dense, weather-resistant double coat with a dark grey to black mantle covering the body, complemented by warm tan markings across the head, chest, and limbs.",
    },
    {
      question: "How much exercise does this hound require?",
      answer:
        "A healthy adult hound benefits from 60 to 90 minutes of daily physical exercise and scent-based activity, such as brisk walks, woodland exploration, or tracking games.",
    },
    {
      question: "What health conditions should owners be aware of?",
      answer:
        "The breed is generally robust, with clinical considerations centering around developmental hip dysplasia, eyelid variations such as ectropion or entropion, routine ear canal hygiene for pendant ears, and bloat prevention.",
    },
  ],

  references: [
    "fci-polish-hound-official-standard",
    "united-kennel-club-polish-hound-standard",
    "wikimedia-ogar-polski-pies-malgo-milek-2023",
    "the-dog-api",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Canis lupus familiaris covers all domestic dogs; no breed-specific taxonomic designation applies.",
    },

    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "verified",
          locator: "Official breed name and translated nomenclature",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Encompasses the authentic Polish name Ogar Polski and European translations.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "verified",
          locator: "FCI classification: Group 6, Section 1.1 Large-sized Hounds",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.breed_group",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Classified within scent hounds and related breeds.",
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "verified",
          locator: "Origin: Poland; Brief Historical Summary",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Poland is the verified country of origin.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "verified",
          locator: "Origin: Poland",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Poland is the verified country of origin.",
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A narrower regional origin within Poland was not established in official documentation.",
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
      verifiedOn: "2026-11-10",
      note: "Synthesizes official standard history, tracking purpose, and domestic temperament.",
    },

    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "cited",
          locator: "General appearance and height",
        },
        {
          id: "united-kennel-club-polish-hound-standard",
          role: "cited",
          locator: "Height and weight",
        },
      ],
      verifiedOn: null,
      note: "Medium-to-large represents an editorial display categorization reflecting hound build and height.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "verified",
          locator: "Height at withers: Males: 56-65 cm, Females: 55-60 cm",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.height.metric",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Height is published in centimetres: males 56–65 cm, females 55–60 cm.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "united-kennel-club-polish-hound-standard",
          role: "verified",
          locator: "Weight: 55 to 70 pounds for males, 44 to 57 pounds for females",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "The FCI standard specifies that weight must be proportional to size without giving numeric bounds. The UKC standard publishes weight in pounds (males 55–70 lb, females 44–57 lb), while The Dog API records metric equivalents of 25–32 kg for males and 20–27 kg for females.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Published kennel club and breed references estimate a lifespan of 10 to 14 years.",
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "verified",
          locator: "Coat: hair",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Medium-length, thick outer coat with a dense undercoat.",
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "verified",
          locator: "Coat: hair",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Medium length on body; short and smooth on head, ears, and limbs.",
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "verified",
          locator: "Coat: colour",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Dark body mantle with tan markings; small white patches on chest and toes tolerated.",
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
      note: "Editorial assessment based on double coat maintenance requirements.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling rating was established.",
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "verified",
          locator: "General appearance, head, ears, neck, body, tail, and coat",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Morphological and functional traits verified against the official standard.",
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
      verifiedOn: "2026-11-10",
      note: "Physical dimensions synthesized from standard measurements.",
    },

    temperament: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "verified",
          locator: "Behaviour and temperament; utilisation",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament",
        },
        {
          id: "united-kennel-club-polish-hound-standard",
          role: "cited",
          locator: "Characteristics",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Traits synthesize working stamina, trailing dedication, and gentle domestic character.",
    },

    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "verified",
          locator: "Temperament and utilisation",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Combines official standard behavioral descriptions and reference keywords.",
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
      note: "Editorial ratings for comparative display; unverified metrics remain null.",
    },

    "temperament.scores.withChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No sufficiently verified empirical score for compatibility with children was established.",
    },

    "temperament.scores.withDogs": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No standardized comparative rating for dog compatibility was established.",
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
      note: "Practical care advice informed by hound husbandry and scent-work routines.",
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
      note: "The 60–90 minute guideline is a practical daily planning target.",
    },

    "care.grooming": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "cited",
          locator: "Coat: hair",
        },
      ],
      verifiedOn: null,
      note: "Coat maintenance reflects double-coat shedding and routine pendant-ear care.",
    },

    "care.training": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "cited",
          locator: "Temperament and working pursuit",
        },
      ],
      verifiedOn: null,
      note: "Training advice emphasizes reward-based methods and management of scent-driven focus.",
    },

    "care.livingEnvironment": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "cited",
          locator: "General appearance and working role",
        },
      ],
      verifiedOn: null,
      note: "Housing advice is editorial guidance emphasizing spacious grounds and secure containment.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No authoritative source establishes a universal apartment-suitability classification.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific solitary tolerance rating was established.",
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
      note: "General canine nutrition guidance emphasizing portion control and body condition monitoring.",
    },

    "nutrition.feedingFrequency": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No single puppy, adult, and senior meal frequency was established.",
    },

    health: {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-polish-hound-official-standard",
          role: "cited",
          locator: "General appearance and conformation",
        },
      ],
      verifiedOn: null,
      note: "Health information reflects recognized trailing hound vulnerabilities including ear infections and deep-chested bloat risks.",
    },

    "health.commonConditions": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No epidemiological prevalence study establishes breed-specific disease frequencies; listed conditions reflect general scent hound and deep-chested conformational tendencies.",
    },

    "health.recommendedScreenings": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Screening suggestions reflect clinical best practices for medium-to-large trailing hounds.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine preventive health and hygiene guidance for active outdoor dogs.",
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
      note: "General canine dental care advice.",
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
      note: "Routine ear care advice tailored to low-set pendulous ears.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General skin and coat inspection advice following woodland activity.",
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
      note: "Suitability flags represent practical editorial recommendations based on scent hound traits.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal first-time-owner rating was established.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability depends on individual temperament, socialization, and adult supervision.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability depends on owner physical capacity and activity routines.",
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
      verifiedOn: "2026-11-10",
      note: "Summarizes authentic Polish hound nomenclature, historical hunting literature, and vocal traits.",
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
      verifiedOn: "2026-11-10",
      note: "FAQ responses synthesize standard metrics, exercise planning, and care guidance.",
    },
  },

  updatedOn: "2026-11-10",
};
