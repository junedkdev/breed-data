import type { Breed } from "../schema/breed.types";

export const sussex_spaniel: Breed = {
  slug: "sussex-spaniel",
  name: "Sussex Spaniel",
  scientificName: null,

  alternateNames: [],

  group:
    "FCI Group 8 — Retrievers, Flushing Dogs and Water Dogs; Section 2 — Flushing Dogs; with working trial",

  origin: {
    country: "Great Britain",
    region: "Sussex, England",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sussex_spaniels_at_dog_show.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Sussex_spaniels_at_dog_show.jpg",
      title: "Sussex spaniels at dog show.jpg",
      description: "Several Sussex Spaniels at a conformation dog show.",
      creator: "Dan Bennett",
      uploader: "Flickr upload bot",
      capturedOn: "2009-08-14",
      uploadedOn: "2012-02-18",
      width: 3872,
      height: 2592,
      licenseId: "cc-by-2.0",
      attribution:
        'Dan Bennett, "Sussex spaniels at dog show.jpg", via Wikimedia Commons, licensed under CC BY 2.0 (https://creativecommons.org/licenses/by/2.0/). No changes made.',
      restrictions: null,
      metadataCheckedOn: "2026-11-13",
    },
  ],

  overview: {
    summary:
      "The Sussex Spaniel is a sturdy, low-set British flushing spaniel instantly recognizable by its rich golden-liver coat and deliberate, rolling stride. Bred to push through dense undergrowth and give tongue on a scent trail, it pairs steady field determination with a kindly, cheerful home temperament.",

    description:
      "Long-bodied and low to the ground with heavy bone, a deep chest, and short, strong legs, the Sussex Spaniel carries an abundant, flat golden-liver coat whose hair tips shade toward gold. Soft, wavy hair covers its lobular ears, while moderate feathering frames the legs beneath a broad head and soft hazel eyes that lend a deceptively solemn expression. Calm and affectionate indoors, it remains a true sporting spaniel with strong scenting instincts and a characteristic rolling gait.",

    history:
      "Named for the English county of Sussex, the breed emerged in the eighteenth century among landowners seeking a strong, low-slung spaniel able to work heavy clay soil and thick hedgerows on foot. Its habit of giving voice on scent helped hunters track it through tall cover. Registered among the earliest sporting breeds in 1870s Britain and 1884 North America, it survived near-extinction after World War II thanks to dedicated breeders and remains a rare native breed today.",

    originalPurpose:
      "Flushing game birds from dense undergrowth and giving tongue on scent trails so hunters on foot could follow.",

    currentRoles: [
      "Flushing and hunting gundog in dense cover",
      "Scent-work, tracking, and field-trial partner",
      "Active companion for households ready for daily walks and coat care",
      "Conformation showing and rare-breed preservation",
    ],
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: { min: 38, max: 41 },
      female: { min: 38, max: 41 },
    },

    weight: {
      unit: "kg",
      male: { min: null, max: 23 },
      female: { min: null, max: 23 },
    },

    lifespanYears: {
      min: 12,
      max: 15,
    },

    coatType:
      "Abundant, flat double coat with ample weather-resistant undercoat; soft, wavy hair on the ears and moderate feathering on the forelegs and hindlegs.",

    coatLength:
      "Medium-length and abundant across the body, lying flat without curl, with wavy ear hair and moderate leg feathering.",

    coatColors: [
      "Rich golden liver, shading to gold at the hair tips with gold predominating",
    ],

    sheddingLevel:
      "Moderate; the abundant double coat sheds steadily and needs regular brushing to clear loose undercoat, though no exact numerical rating is established.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Long, low-set, heavily boned and muscular body",
      "Short, strong legs suited to dense cover",
      "Deep, wide chest and muscular back and loin",
      "Distinctive rolling gait",
      "Broad head with pronounced stop and slightly frowning brow",
      "Fairly large hazel eyes with a gentle, serious expression",
      "Thick, low-set lobular ears with soft wavy hair",
      "Rich golden-liver coat shading to gold at the tips",
      "Lively tail action kept below back level",
      "Tendency to give tongue while working scent in cover",
    ],
  },

  temperament: {
    traits: [
      "Kindly and gentle",
      "Friendly and cheerful despite a solemn expression",
      "Steady and loyal companion",
      "Keenly interested in scent and game",
      "Deliberate yet energetic in the field",
      "Vocal when trailing scent or excited",
      "Persistent once locked onto an interesting scent",
    ],

    scores: {
      affection: 4,
      withChildren: null,
      withDogs: null,
      withStrangers: 3,
      protectiveness: null,
      independence: 3,
      trainability: 3,
      barking: 4,
      energy: 3,
    },
  },

  care: {
    exercise: {
      level:
        "Moderate to high. An active sporting gundog that thrives on daily walks, swimming, and scent-based exploration, adjusted for slow puppy growth, age, and joint health.",

      minutesPerDay: null,

      activities: [
        "Daily walks with ample sniffing time",
        "Supervised scent-search and tracking games",
        "Reward-based retrieving exercises",
        "Steady hikes on varied trails",
        "Swimming for fit adult dogs",
        "Short training sessions combining movement and nose work",
      ],
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush and comb several times weekly, focusing on the wavy ears, chest, belly, and leg feathering to prevent mats and clear burrs.",

      bathing:
        "Bathe only when soiled using a canine-safe shampoo, rinsing and drying the dense coat and undercoat thoroughly.",

      notes: [
        "Regular brushing clears loose undercoat and prevents tangles in feathered areas.",
        "Check leg and underside feathering for burrs, mud, and grass seeds after walks.",
        "Inspect the heavy, hairy ears weekly and keep them clean and dry.",
        "Trim nails regularly to support comfortable movement.",
        "Brush teeth routinely with dog-safe toothpaste.",
        "Part the coat during brushing to check skin for irritation or parasites.",
      ],
    },

    training: {
      difficulty:
        "Moderate. Cheerful and willing to cooperate, though strong scenting instincts can compete with recall. Patient, reward-based training works best.",

      tips: [
        "Use high-value food or play rewards to keep sessions upbeat.",
        "Keep cues clear, patient, and consistent.",
        "Build recall steadily in enclosed spaces before trusting off-lead near wildlife.",
        "Use a lead or long line in open areas with heavy game scent.",
        "Channel working drive into structured retrieving and tracking games.",
        "Avoid harsh corrections; steady, positive guidance suits its sensitive nature.",
      ],

      socialization:
        "Provide gradual, positive exposure to varied people, dogs, sounds, surfaces, and handling from puppyhood onward, supervising all interactions with children and other animals.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool weather with dry shelter and routine coat care",
        "Warm weather only with reliable shade, fresh water, and cooler-hour exercise",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "Complete, balanced dog food matched to life stage, body condition, activity level, and veterinary guidance.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Use the manufacturer's feeding guide as a starting point, then adjust measured portions to maintain a healthy, well-muscled frame without excess weight on its long back and short legs. Keep fresh water available and count treats toward daily calories.",

    considerations: [
      "Prevent excess weight to reduce avoidable strain on the spine and joints.",
      "Match daily portions to actual activity level and metabolism.",
      "Include training rewards and chews within total daily intake.",
      "Transition diets gradually unless advised otherwise by a veterinarian.",
      "Consult a veterinarian for persistent digestive upset or weight changes.",
    ],

    note:
      "Exact portions and meal counts depend on age, calorie density, activity, and veterinary advice.",
  },

  health: {
    overview:
      "Breed-club health guidance highlights PDP1-related pyruvate dehydrogenase deficiency (for which DNA testing is available) and puppy cardiac checks as key considerations to discuss with breeders, alongside general monitoring for hip dysplasia and eye conditions. Request documented parental test results and keep up routine veterinary care.",

    commonConditions: [],

    preventiveCare: [
      "Schedule routine veterinary exams and keep vaccinations and parasite prevention current.",
      "Ask breeders for documented PDP1 DNA test status when selecting a puppy.",
      "Ask about puppy cardiac auscultation results and any follow-up evaluations.",
      "Maintain a lean body weight and avoid strenuous jumping or forced exercise in slow-growing puppies under a year old.",
      "Check ears, teeth, nails, skin, and coat routinely.",
      "Seek prompt veterinary care for changes in stamina, breathing, or gait.",
    ],

    recommendedScreenings: [
      "PDP1 DNA testing for pyruvate dehydrogenase phosphatase 1 deficiency.",
      "Cardiac auscultation in puppies around eight weeks of age, with echocardiography if an abnormality is heard.",
    ],

    dentalCare:
      "Brush teeth regularly with canine toothpaste and arrange periodic veterinary oral checks. Have bad breath, gum redness, or chewing discomfort assessed promptly.",

    earCare:
      "Check the large, hairy, low-set ears weekly for wax, redness, odour, or moisture—especially after swimming or wet walks—and clean gently with a veterinarian-approved solution when needed.",

    skinCare:
      "Inspect skin during regular brushing for trapped debris, mats, parasites, or persistent itching.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Handlers interested in gundog work, tracking, or scent-search games",
      "Households ready for daily walks and regular spaniel coat grooming",
      "Owners who appreciate a sturdy, cheerful, low-set sporting breed",
      "People prepared to manage vocal trailing behaviour and scent drive",
    ],

    notIdealFor: [
      "Households unable to provide daily outdoor activity and mental stimulation",
      "Owners wanting a wash-and-wear coat needing minimal brushing",
      "Homes requiring complete quiet in every situation",
      "Settings where strong scenting instincts cannot be safely managed",
    ],
  },

  funFacts: [
    "Named for the English county of Sussex, it was bred in the 1700s to push through thick hedgerows and heavy clay soil.",
    "Unlike most silent-trailing spaniels, it is famous for giving tongue while following scent in dense cover.",
    "Its low-slung, muscular build produces a signature rolling gait.",
    "Its rich golden-liver coat—shading to gold at the hair tips—is unique among spaniels.",
    "It was among the first ten breeds admitted to North American kennel-club stud books in 1884.",
  ],

  faq: [
    {
      question: "What was the Sussex Spaniel originally bred to do?",
      answer:
        "It was bred as a flushing spaniel for dense undergrowth, locating game birds and flushing them within range while giving tongue on scent trails.",
    },
    {
      question: "What colour is a Sussex Spaniel?",
      answer:
        "The only accepted colour is rich golden liver, with hair shading toward gold at the tips and gold predominating.",
    },
    {
      question: "How large is a Sussex Spaniel?",
      answer:
        "Ideal height at the withers is 38–41 cm and approximate weight is around 23 kg, though individual dogs vary.",
    },
    {
      question: "Does a Sussex Spaniel need regular grooming?",
      answer:
        "Yes. Its abundant coat and undercoat need brushing and combing several times a week, especially around the wavy ears and leg feathering.",
    },
    {
      question: "Is the Sussex Spaniel a quiet breed?",
      answer:
        "Not always. Known for giving tongue while working in thick cover, it can be more vocal than many other spaniels around exciting scents.",
    },
    {
      question: "What health checks should prospective owners discuss with a breeder?",
      answer:
        "Ask breeders for PDP1 DNA test results and puppy cardiac check records, and discuss individual screening needs with your veterinarian.",
    },
  ],

  references: [
    "fci-sussex-spaniel-standard-127",
    "royal-kennel-club-sussex-spaniel-standard",
    "fci-sussex-spaniel-nomenclature-127",
    "american-kennel-club-sussex-spaniel",
    "canadian-kennel-club-sussex-spaniel",
    "sussex-spaniel-club-of-america-health",
    "commons-sussex-spaniels-dog-show",
    "the-dog-api",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A breed-specific scientific name is not recorded; the catalog does not infer one.",
    },

    alternateNames: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No additional established breed name is recorded in consulted registry and breed-club material.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-sussex-spaniel-standard-127",
          role: "verified",
          locator: "FCI classification: Group 8, Section 2, with working trial",
        },
      ],
      verifiedOn: "2026-11-13",
      note: "Follows FCI Group 8, Section 2; The Dog API lists Sporting.",
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-sussex-spaniel-standard-127",
          role: "verified",
          locator: "Origin: Great Britain",
        },
        {
          id: "royal-kennel-club-sussex-spaniel-standard",
          role: "verified",
          locator: "Breed standard and breed name (Sussex, England)",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-13",
      note: "Originates in Great Britain, specifically Sussex, England.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "sussex-spaniel-club-of-america-health",
          role: "cited",
          locator: "Breed club breed information",
        },
        {
          id: "american-kennel-club-sussex-spaniel",
          role: "verified",
          locator: "About the Breed and History",
        },
        {
          id: "royal-kennel-club-sussex-spaniel-standard",
          role: "verified",
          locator: "General appearance, characteristics and temperament",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history",
        },
      ],
      verifiedOn: "2026-11-13",
      note: "All user-facing text is newly written original prose paraphrasing breed-club and kennel-club sources.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-sussex-spaniel-standard-127",
          role: "verified",
          locator: "General appearance, limbs, coat, colour, size and weight (38–41 cm, approx. 23 kg)",
        },
        {
          id: "royal-kennel-club-sussex-spaniel-standard",
          role: "verified",
          locator: "General appearance, body, coat, colour and size",
        },
      ],
      verifiedOn: "2026-11-13",
      note: "Height (38–41 cm) and approximate weight (23 kg) follow FCI Standard No. 127. Note: The Dog API lists 33–38 cm and 16–20 kg, and AKC lists 13–15 in and up to 45 lb; official FCI standard values are retained. Coat colour follows FCI/RKC rather than The Dog API's species-wide colour list.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span (12–15 years)",
        },
      ],
      verifiedOn: "2026-11-13",
      note: "FCI Standard No. 127 and RKC do not publish a lifespan; 12–15 years is sourced from The Dog API.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling rating was found.",
    },

    temperament: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-sussex-spaniel-standard-127",
          role: "verified",
          locator: "Behaviour and temperament",
        },
        {
          id: "royal-kennel-club-sussex-spaniel-standard",
          role: "verified",
          locator: "Characteristics and temperament",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-13",
      note: "Traits reflect official standard and working character; individual dogs vary.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-sussex-spaniel",
          role: "cited",
          locator: "Breed traits and about the breed",
        },
        {
          id: "canadian-kennel-club-sussex-spaniel",
          role: "cited",
          locator: "Temperament and activity level",
        },
      ],
      verifiedOn: null,
      note: "Editorial estimates on a 1–5 scale, not measured behavioural statistics; unsupported dimensions remain null.",
    },

    "temperament.scores.withChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Reliable breed-specific evidence for a with-children score was not found.",
    },

    "temperament.scores.withDogs": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Reliable breed-specific evidence for a with-dogs score was not found.",
    },

    "temperament.scores.protectiveness": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Reliable breed-specific evidence for a protectiveness score was not found.",
    },

    care: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General dog-care guidance adapted to coat type and sporting background.",
    },

    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        {
          id: "canadian-kennel-club-sussex-spaniel",
          role: "verified",
          locator: "Activity Level",
        },
        {
          id: "royal-kennel-club-sussex-spaniel-standard",
          role: "verified",
          locator: "General appearance and characteristics",
        },
      ],
      verifiedOn: "2026-11-13",
      note: "Active gundog heritage supports regular daily activity without a fixed minute quota.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No authoritative breed-specific daily exercise duration was found.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "canadian-kennel-club-sussex-spaniel",
          role: "verified",
          locator: "Grooming and coat",
        },
        {
          id: "fci-sussex-spaniel-standard-127",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-11-13",
      note: "Abundant double coat supports regular brushing and ear care.",
    },

    "care.training": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Reward-based training and gradual socialization are general welfare recommendations.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Reliable evidence for a categorical apartment-suitability rating was not found.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "canadian-kennel-club-sussex-spaniel",
          role: "cited",
          locator: "Activity Level",
        },
      ],
      verifiedOn: null,
      note: "A secure yard is useful for an active dog but does not replace walks or supervision.",
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General dog-welfare climate guidance.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Reliable breed-specific evidence about alone-time tolerance was not found.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General nutrition guidance tailored to life stage, condition, and veterinary advice.",
    },

    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific puppy feeding frequency is established.",
    },

    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific adult feeding frequency is established.",
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific senior feeding frequency is established.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "sussex-spaniel-club-of-america-health",
          role: "verified",
          locator: "PDP1 testing and cardiac abnormalities",
        },
      ],
      verifiedOn: "2026-11-13",
      note: "Health summary reflects breed-club guidance consulted; not a complete prevalence study.",
    },

    "health.commonConditions": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No sufficiently supported list of common conditions or prevalence estimates was established.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "sussex-spaniel-club-of-america-health",
          role: "verified",
          locator: "PDP1 testing and cardiac abnormalities",
        },
      ],
      verifiedOn: "2026-11-13",
      note: "Screening recommendations from the breed club.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine preventive-care recommendations are general veterinary guidance.",
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
      note: "General ear-care guidance for pendulous, hair-covered ears.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General coat and skin-care guidance.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "canadian-kennel-club-sussex-spaniel",
          role: "cited",
          locator: "Temperament, activity level and grooming",
        },
        {
          id: "royal-kennel-club-sussex-spaniel-standard",
          role: "cited",
          locator: "Characteristics and general appearance",
        },
      ],
      verifiedOn: null,
      note: "Cautious editorial suitability guidance.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a categorical first-time-owner suitability rating.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a categorical family-with-children rating.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a categorical senior-owner suitability rating.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a categorical apartment-living rating.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-sussex-spaniel",
          role: "verified",
          locator: "History and Did You Know?",
        },
        {
          id: "fci-sussex-spaniel-standard-127",
          role: "verified",
          locator: "Behaviour and temperament; gait and movement",
        },
      ],
      verifiedOn: "2026-11-13",
      note: "Historical and breed-character facts written in original wording.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-sussex-spaniel-standard-127",
          role: "verified",
          locator: "Origin, utilization, coat, colour, size and weight",
        },
        {
          id: "sussex-spaniel-club-of-america-health",
          role: "verified",
          locator: "PDP1 testing and cardiac abnormalities",
        },
        {
          id: "royal-kennel-club-sussex-spaniel-standard",
          role: "verified",
          locator: "Characteristics and coat",
        },
      ],
      verifiedOn: "2026-11-13",
      note: "Original summaries of cited breed-standard and breed-club material.",
    },
  },

  updatedOn: "2026-11-13",
};
