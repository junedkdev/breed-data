import type { Breed } from "../schema/breed.types";

/**
 * Chien Français Tricolore (French Tricolour Hound).
 * Breed-standard facts are taken primarily from FCI Standard No. 219.
 * Values not established by the reviewed sources are intentionally null/empty.
 */
export const chien_francais_tricolore: Breed = {
  slug: "chien-francais-tricolore",
  name: "Chien Français Tricolore",
  scientificName: null,
  alternateNames: [
    "Français Tricolore",
    "French Tricolour Hound",
    "French Tricolor Hound",
  ],
  group:
    "FCI Group 6: Scenthounds and Related Breeds; Section 1.1: Large-sized Hounds (with working trial)",
  origin: {
    country: "France",
    region: null,
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Frenchhound-tricolore.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Frenchhound-tricolore.jpg",
      title: "Frenchhound-tricolore.jpg",
      description: "A French Tricolour Hound photographed outdoors.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2022-04-23",
      uploadedOn: "2022-04-23",
      width: 2135,
      height: 2179,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, licensed under CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Frenchhound-tricolore.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Provide appropriate credit, link to the license, indicate changes, and comply with the applicable share-alike terms for adaptations.",
      restrictions: null,
      metadataCheckedOn: "2026-10-26",
    },
  ],
  overview: {
    summary:
      "A large, elegant French pack hound developed for hunting large game, recognised by its tricolour coat and strong scent-hound construction.",
    description:
      "The Chien Français Tricolore is a large, athletic scent hound bred to work in a pack. The FCI standard describes an elegant but strongly built dog with good bone and muscle, a long head, low-set ears, a deep chest, a long tail carried high, and short, rather fine hair. Its working heritage means it is best understood as an active hunting hound rather than a companion breed bred primarily for sedentary life.",
    history:
      "The breed was developed in France as a pack hound for big-game hunting. The FCI lists definitive recognition on 15 December 1959. The reviewed sources do not establish a sufficiently detailed, verified account of its earlier development to state more specific ancestry claims.",
    originalPurpose:
      "Pack hunting of large game using scent and sustained movement.",
    currentRoles: [
      "Pack hunting and scent-hound work",
      "Active working-dog life with experienced handlers",
    ],
  },
  physical: {
    sizeCategory: "Large",
    height: {
      unit: "cm",
      male: { min: 62, max: 72 },
      female: { min: 60, max: 68 },
    },
    weight: {
      unit: null,
      male: null,
      female: null,
    },
    lifespanYears: null,
    coatType: "Short, rather fine hair",
    coatLength: "Short",
    coatColors: [
      "Tricolour",
      "Black mantle with bright tan markings",
      "Copper tan markings",
      "Grizzled or wolf-grey colouring is admitted by the standard",
    ],
    sheddingLevel: null,
    droolingLevel: null,
    distinctiveFeatures: [
      "Large, elegant, strongly boned and muscular frame",
      "Elongated head and black nose with open nostrils",
      "Brown eyes",
      "Ears set at eye level and slightly curled",
      "Deep chest and long tail carried high",
      "Short, rather fine coat with tricolour patterning",
    ],
  },
  temperament: {
    traits: [
      "Active working scent hound",
      "Bred to work with other hounds in a pack",
      "Purpose-built for following scent during hunting",
      "Likely to need consistent handling and outlets for working behaviour",
    ],
    scores: {
      affection: null,
      withChildren: null,
      withDogs: null,
      withStrangers: null,
      protectiveness: null,
      independence: null,
      trainability: null,
      barking: null,
      energy: null,
    },
  },
  care: {
    exercise: {
      level: "High; provide regular, purposeful activity appropriate to the individual dog",
      minutesPerDay: null,
      activities: [
        "Long walks in secure areas",
        "Scent games and tracking-style enrichment",
        "Structured outdoor activity with reliable containment",
      ],
    },
    grooming: {
      level: "Low to moderate",
      brushing: "Brush periodically to remove loose hair and check the skin.",
      bathing: "Bathe when needed, using a dog-appropriate shampoo.",
      notes: [
        "The short coat generally does not require complex styling.",
        "Check ears regularly, especially after outdoor activity.",
        "Keep nails trimmed and maintain routine dental care.",
      ],
    },
    training: {
      difficulty:
        "Best suited to a patient, consistent handler familiar with scent hounds and working dogs.",
      tips: [
        "Use reward-based training and short, consistent sessions.",
        "Build recall gradually and practise in secure areas because scent can be highly motivating.",
        "Provide structured scent work and appropriate mental enrichment.",
        "Introduce calm lead manners and household routines early.",
      ],
      socialization:
        "Provide gradual, positive exposure to people, dogs, environments, handling and everyday sounds from an appropriate age.",
    },
    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,
      climates: [
        "Provide secure shelter, shade and constant access to fresh water.",
        "Adjust activity during hot, cold or severe weather.",
      ],
      aloneTimeTolerance: null,
    },
  },
  nutrition: {
    dietType: "A complete and balanced diet appropriate to the dog's life stage, body condition and activity level.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Choose a nutritionally complete diet and tailor portions to age, activity, body condition and veterinary advice. Keep fresh water available and monitor body condition rather than relying on a fixed portion for every dog.",
    considerations: [
      "Working activity can change energy needs; adjust portions to actual workload and body condition.",
      "Introduce diet changes gradually.",
      "Discuss persistent weight changes or digestive problems with a veterinarian.",
    ],
    note: "No breed-specific feeding quantities or verified feeding-frequency schedule were established by the sources reviewed.",
  },
  health: {
    overview:
      "The reviewed breed standards describe conformation and intended function, but do not provide a reliable breed-specific disease prevalence profile or a definitive screening protocol. Do not infer that the breed is free from inherited disease from this absence of data.",
    commonConditions: [],
    preventiveCare: [
      "Arrange routine veterinary examinations and vaccinations appropriate to local guidance.",
      "Maintain parasite prevention, dental care, nail care and a healthy body condition.",
      "Seek veterinary advice for persistent lameness, changes in stamina, appetite or behaviour.",
    ],
    recommendedScreenings: [],
    dentalCare: "Brush the teeth regularly where tolerated and follow veterinary dental-care advice.",
    earCare: "Inspect ears regularly and seek veterinary advice for redness, odour, discharge or repeated head-shaking.",
    skinCare: "Check the skin and coat during routine grooming for wounds, parasites, irritation or unusual changes.",
  },
  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: null,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,
    idealFor: [
      "Experienced, active owners familiar with hounds or working dogs",
      "Homes able to provide regular outdoor activity, scent enrichment and secure management",
      "Appropriate pack-hunting or scent-hound working environments where legal and humane",
    ],
    notIdealFor: [
      "People seeking a low-exercise companion dog",
      "Homes unable to provide secure containment and regular activity",
      "Owners who expect reliable off-leash recall without extensive training",
    ],
  },
  funFacts: [
    "The FCI classifies the breed among large-sized hounds in Group 6 and records a working trial.",
    "The FCI standard permits a grizzled wolf-colour appearance in addition to the characteristic tricolour pattern.",
    "The FCI records definitive recognition of the breed on 15 December 1959.",
  ],
  faq: [
    {
      question: "What was the Chien Français Tricolore bred to do?",
      answer: "It was developed as a pack hound for hunting large game.",
    },
    {
      question: "How tall is a Chien Français Tricolore?",
      answer: "The FCI standard gives 62–72 cm for males and 60–68 cm for females.",
    },
    {
      question: "What coat does the breed have?",
      answer: "The FCI standard describes short, rather fine hair and a tricolour coat; black mantle and bright or copper tan markings are described, and grizzled wolf colour is admitted.",
    },
    {
      question: "Is this breed suitable for apartment living?",
      answer: "It is generally a poor fit for a typical low-activity apartment lifestyle because it is a large working scent hound that needs purposeful activity and secure management. This is a practical suitability assessment, not a formal breed-standard rule.",
    },
    {
      question: "What is the breed's typical lifespan or weight?",
      answer: "The reliable sources reviewed for this record did not establish a breed-specific lifespan or weight range, so these values are left unrecorded rather than guessed.",
    },
  ],
  references: [
    "fci-francais-tricolore-standard-2023",
    "fci-francais-tricolore-nomenclature",
    "ukc-chien-francais-tricolore-standard",
    "venerie-chien-francais-tricolore",
    "commons-frenchhound-tricolore-canarian-2022",
  ],
  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        { id: "fci-francais-tricolore-nomenclature", role: "verified", locator: "Official breed nomenclature entry" },
        { id: "ukc-chien-francais-tricolore-standard", role: "verified", locator: "Breed name and standard heading" },
      ],
      verifiedOn: "2026-10-26",
      note: "Names are restricted to the FCI name and English-language variants used by the consulted kennel-club source.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The reviewed breed sources do not specify a breed-specific scientific name.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        { id: "fci-francais-tricolore-standard-2023", role: "verified", locator: "FCI classification section" },
        { id: "fci-francais-tricolore-nomenclature", role: "verified", locator: "Group and section listing" },
      ],
      verifiedOn: "2026-10-26",
      note: "FCI Group 6, Section 1.1, with working trial.",
    },
    origin: {
      reliability: "official_standard",
      sources: [{ id: "fci-francais-tricolore-standard-2023", role: "verified", locator: "Origin" }],
      verifiedOn: "2026-10-26",
      note: "The breed's country of origin is France; no more specific region is stated.",
    },
    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The reviewed sources do not identify a specific French region of origin.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        { id: "fci-francais-tricolore-standard-2023", role: "verified", locator: "General appearance, use, coat and colour sections" },
        { id: "ukc-chien-francais-tricolore-standard", role: "verified", locator: "History and breed standard" },
        { id: "venerie-chien-francais-tricolore", role: "cited", locator: "French-language breed description" },
        { id: "fci-francais-tricolore-nomenclature", role: "verified", locator: "Definitive recognition date" },
      ],
      verifiedOn: "2026-10-26",
      note: "Summary, description and purpose follow the official standard and kennel-club description; detailed early ancestry is deliberately not asserted.",
    },
    physical: {
      reliability: "official_standard",
      sources: [
        { id: "fci-francais-tricolore-standard-2023", role: "verified", locator: "General appearance, head, body, tail, coat, colour and size" },
        { id: "ukc-chien-francais-tricolore-standard", role: "verified", locator: "Breed standard" },
      ],
      verifiedOn: "2026-10-26",
      note: "Standard-derived appearance and coat details. Unpublished weight, lifespan and grooming-related numeric ratings are not inferred.",
    },
    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The consulted standards do not provide a reliable weight range.",
    },
    "physical.lifespanYears": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific lifespan figure was established from the reviewed sources.",
    },
    "physical.sheddingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The coat description does not establish a verified shedding-level rating.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The reviewed sources do not establish a verified drooling-level rating.",
    },
    temperament: {
      reliability: "reliable_source",
      sources: [
        { id: "fci-francais-tricolore-standard-2023", role: "verified", locator: "Use and general appearance" },
        { id: "ukc-chien-francais-tricolore-standard", role: "verified", locator: "History and working-hound description" },
      ],
      verifiedOn: "2026-10-26",
      note: "Only working role and pack-hound context are stated as breed facts; no unsupported numeric temperament ratings are supplied.",
    },
    "temperament.scores": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No source reviewed supplies validated numerical temperament scores for this breed.",
    },
    care: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Practical care guidance based on general dog-care principles and the breed's documented working-hound role; not a claim from the breed standard.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No verified breed-specific daily exercise-minute recommendation was found.",
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The reviewed sources do not establish a breed-specific alone-time tolerance.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine nutrition guidance only; no breed-specific feeding amounts are asserted.",
    },
    "nutrition.feedingFrequency": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No verified breed-specific puppy, adult or senior feeding frequency was found.",
    },
    health: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive-care advice only; the reviewed standards do not establish breed-specific disease prevalence or screening recommendations.",
    },
    "health.commonConditions": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No sufficiently reliable breed-specific common-condition list was established from the reviewed sources.",
    },
    "health.recommendedScreenings": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No verified breed-specific screening protocol was established from the reviewed sources.",
    },
    suitability: {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Suitability recommendations are editorial estimates based on the documented large working scent-hound role, not verified temperament testing.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The reviewed sources do not establish a reliable breed-specific family-with-children suitability assessment.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        { id: "fci-francais-tricolore-standard-2023", role: "verified", locator: "Classification and colour sections" },
        { id: "fci-francais-tricolore-nomenclature", role: "verified", locator: "Definitive recognition date" },
      ],
      verifiedOn: "2026-10-26",
      note: "Facts are drawn from the FCI standard and official nomenclature listing.",
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        { id: "fci-francais-tricolore-standard-2023", role: "verified", locator: "Use, size, coat and colour sections" },
        { id: "fci-francais-tricolore-nomenclature", role: "verified", locator: "Recognition date" },
        { id: "ukc-chien-francais-tricolore-standard", role: "verified", locator: "Breed description" },
      ],
      verifiedOn: "2026-10-26",
      note: "Answers are limited to information supported by the consulted breed sources or clearly labelled practical suitability guidance.",
    },
  },
  updatedOn: "2026-10-26",
};
