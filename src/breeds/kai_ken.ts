import type { Breed } from "../schema/breed.types";

export const kai_ken: Breed = {
  slug: "kai-ken",
  name: "Kai Ken",
  scientificName: null,

  alternateNames: [
    "Kai",
    "Tora Inu",
    "Kai Tora",
    "Kai Inu",
    "Kai Dog",
  ],

  group:
    "Japanese medium-sized Spitz-type hunting dog (Foundation Stock Service / Northern Breeds)",

  origin: {
    country: "Japan",
    region: "Kai Province, now Yamanashi Prefecture",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kai_Ken.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Kai_Ken.jpg",
      title: "Kai Ken.jpg",
      description: "Female Kai Ken with a red-brindle coat.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2016-11-12",
      uploadedOn: "2016-11-14",
      width: 600,
      height: 449,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, licensed under CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Kai_Ken.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Provide appropriate credit, link to the license, indicate changes, and comply with the applicable share-alike terms for adaptations.",
      restrictions: null,
      metadataCheckedOn: "2026-11-12",
    },
  ],

  overview: {
    summary:
      "A rare, medium-sized Japanese mountain hunting dog prized for its brindle tiger-striped coat, nimble athleticism, and deep devotion to its household.",

    description:
      "Built on a compact, slightly longer-than-tall Spitz frame, the Kai Ken pairs a wedge-shaped skull and forward-tilted prick ears with a dense double coat and a thick tail carried curled or curved like a sickle over the back. Its hallmark brindle striping—dark bands over black, medium, or reddish ground tones—sets it apart among native Japanese breeds. Deeply loyal at home yet naturally cautious around strangers, the Kai Ken retains keen tracking instincts and benefits from daily purposeful activity, secure containment, and patient lifelong socialization.",

    history:
      "Raised for centuries in the steep, forested valleys of Japan's former Kai Province (modern Yamanashi Prefecture), the breed worked alongside hunters to pursue deer and wild boar across rugged mountain slopes. Geographic isolation helped preserve its distinct lineage, and dedicated enthusiasts formed a preservation society in 1931 before the Japanese government named the Kai Ken a Natural Monument in 1934. Even today, the breed remains scarce outside Japan.",

    originalPurpose:
      "Mountain hunting of wild boar and deer across steep, wooded terrain.",

    currentRoles: [
      "Devoted family companion and alert household watchdog",
      "Active outdoor partner for hiking, tracking, and canine sports",
      "Occasional hunting dog in regions where permitted",
    ],
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "in",
      male: { min: 18.5, max: 21 },
      female: { min: 15.75, max: 18.25 },
    },

    weight: {
      unit: "kg",
      male: { min: 14, max: 20 },
      female: { min: 11, max: 16 },
    },

    lifespanYears: {
      min: 14,
      max: 16,
    },

    coatType:
      "Weather-resistant double coat featuring a harsh, straight outer layer over a thick, soft undercoat.",

    coatLength:
      "Short to medium length overall, with slightly longer guard hairs forming a fuller ruff around the neck and along the tail.",

    coatColors: [
      "Black brindle (kuro-tora)",
      "Medium brindle (chu-tora)",
      "Red brindle (aka-tora)",
    ],

    sheddingLevel:
      "Moderate overall, with heavy seasonal coat blows twice a year.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Tiger-striped brindle coat pattern in black, medium, or red tones",
      "Wedge-shaped head topped by thick, triangular erect ears angled slightly forward",
      "Strong, well-angulated hindquarters and springy catlike feet built for mountain climbing",
      "Thick tail carried in a tight curl or sickle arch over the back",
      "Compact, slightly rectangular body proportions",
    ],
  },

  temperament: {
    traits: [
      "Devoted and closely bonded to household members",
      "Keenly observant and alert to surroundings",
      "Self-reliant and capable of independent decision-making",
      "Naturally reserved with unfamiliar people",
      "Strong-willed with an enduring prey and tracking drive",
      "Agile, curious, and energetic outdoors",
    ],

    scores: {
      affection: 4,
      withChildren: null,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 4,
      independence: 4,
      trainability: 3,
      barking: null,
      energy: 4,
    },
  },

  care: {
    exercise: {
      level:
        "High — thrives on vigorous daily walks, trail hikes, and structured mental enrichment.",
      minutesPerDay: { min: 60, max: 120 },
      activities: [
        "Brisk daily walks and mountain or wooded trail hikes on a secure lead",
        "Nose-work, scent trailing, and interactive problem-solving games",
        "Reward-based obedience, agility, or recall practice in fenced areas",
      ],
    },

    grooming: {
      level: "Low to moderate, rising noticeably during seasonal coat blows",
      brushing:
        "Brush weekly to keep the harsh coat clean, increasing to several times a week with an undercoat rake during seasonal shedding.",
      bathing:
        "Bathe only occasionally using a gentle canine shampoo and dry the dense undercoat thoroughly.",
      notes: [
        "Expect heavy undercoat shedding during spring and autumn coat changes.",
        "Check ears, nails, teeth, and skin during routine grooming.",
        "Always use a sturdy leash or tall, secure fencing outdoors to prevent wildlife chasing.",
      ],
    },

    training: {
      difficulty:
        "Moderate to challenging for inexperienced owners due to independent judgment and strong prey instincts.",
      tips: [
        "Keep training sessions brief, upbeat, and reward-driven rather than repetitive.",
        "Practise recall diligently in enclosed spaces; wildlife scents can easily override off-leash cues.",
        "Channel natural hunting focus into structured scent work and puzzle tasks.",
      ],
      socialization:
        "Provide calm, positive exposure to varied people, unfamiliar dogs, handling, and noisy settings from puppyhood without forcing interactions.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,
      climates: [
        "Dense double coat handles cool mountain weather well; provide shade, ventilation, and fresh water in warm months.",
        "Shift vigorous outings to cooler morning or evening hours during hot, humid weather.",
        "Maintain secure perimeter fencing to prevent climbing or pursuing passing wildlife.",
      ],
      aloneTimeTolerance:
        "Moderate with gradual conditioning — pairs best with households that provide adequate exercise and enrichment before departures.",
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced commercial diet formulated for medium-sized, active dogs according to life stage.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Measure daily meals to maintain a lean, athletic body condition, adjusting portions for age and activity level while keeping fresh water available.",

    considerations: [
      "Adjust caloric intake during periods of intense hiking or lower winter activity to prevent weight gain.",
      "Transition food formulas gradually over several days to avoid digestive upset.",
      "Consult a veterinarian for persistent itching or gastrointestinal signs rather than rotating diets repeatedly on your own.",
    ],

    note:
      "No single meal schedule or calorie target fits every Kai Ken; consult a veterinarian to tailor portions to individual metabolism and workload.",
  },

  health: {
    overview:
      "Widely regarded as a hardy native breed, the Kai Ken has a small global population and limited large-scale epidemiological data. Breed-club health programmes prioritize screening for progressive retinal atrophy (PRA) and cardiac disorders alongside elective checks for hip and elbow dysplasia, patellar luxation, eye abnormalities, and autoimmune thyroiditis.",

    commonConditions: [
      "Progressive retinal atrophy (PRA) — an inherited retinal condition targeted by DNA screening.",
      "Patellar luxation — intermittent slipping of the kneecap reported in breed health profiles.",
      "Allergic skin disease — environmental or seasonal skin sensitivities noted in companion records.",
      "Seizure disorders — reported occasionally within the breed.",
      "Hip and elbow dysplasia — developmental joint conditions monitored through elective breeding screenings.",
      "Cardiac disorders and autoimmune thyroiditis — included in breed-club preventive health screening programmes.",
    ],

    preventiveCare: [
      "Request documented parental health-screening results when selecting a puppy.",
      "Keep routine veterinary checkups, vaccinations, and parasite prevention current.",
      "Seek prompt veterinary care for vision changes, persistent scratching, lameness, or seizure-like episodes.",
      "Maintain a lean body weight and steady, joint-friendly exercise.",
    ],

    recommendedScreenings: [
      "Progressive retinal atrophy (PRA) DNA test from an approved laboratory",
      "Veterinary cardiac evaluation (congenital, basic, or advanced exam)",
      "Elective hip and elbow dysplasia radiographic evaluations",
      "Patellar luxation clinical examination and ophthalmologist eye exam",
      "Autoimmune thyroiditis blood panel",
    ],

    dentalCare:
      "Brush teeth regularly with dog-safe toothpaste and schedule routine veterinary oral exams.",

    earCare:
      "Inspect the upright ears periodically for wax, redness, odour, or debris, seeking veterinary care if head-shaking develops.",

    skinCare:
      "Check the skin beneath the dense double coat during brushing, especially during seasonal coat blows, and consult a veterinarian for persistent irritation.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Active individuals or families who enjoy daily trail walks, hiking, and structured training",
      "Experienced handlers comfortable managing strong prey drive and secure containment",
      "Patient owners who appreciate a loyal, naturally reserved companion",
    ],

    notIdealFor: [
      "Handlers expecting reliable off-leash recall around deer, squirrels, or other wildlife",
      "Sedentary households unable to provide daily physical and mental stimulation",
      "Owners wanting an outgoing dog that eagerly greets every stranger",
    ],
  },

  funFacts: [
    "In Japan, the Kai Ken is nicknamed 'Tora Inu'—meaning 'Tiger Dog'—after its distinctive brindle stripes.",
    "The Japanese government designated the Kai Ken a Natural Monument in 1934 to safeguard its native bloodlines.",
    "Traditional preservation lines recognize three brindle shades: black brindle (kuro-tora), medium brindle (chu-tora), and red brindle (aka-tora).",
    "Historic hunters prized the breed's agility on steep mountain ledges and its willingness to swim across rivers while tracking game.",
  ],

  faq: [
    {
      question: "What makes the Kai Ken unique among Japanese breeds?",
      answer:
        "Its signature tiger-striped brindle coat, mountain-climbing agility, and intense loyalty to its own household distinguish it from Japan's other native Spitz breeds.",
    },
    {
      question: "Can a Kai Ken be trusted off leash?",
      answer:
        "Because the breed retains a strong hunting instinct toward wildlife, off-leash freedom is safest inside securely fenced areas rather than open, unfenced terrain.",
    },
    {
      question: "What coat colours occur in the Kai Ken?",
      answer:
        "Only brindle coats are traditional—classified as black brindle, medium brindle, and red brindle—while solid white or cream coats are not accepted.",
    },
    {
      question: "How much daily exercise does a Kai Ken need?",
      answer:
        "An athletic adult typically benefits from 60 to 120 minutes of daily activity, combining brisk walks or hikes with scent games and training.",
    },
    {
      question: "Which health screenings are recommended for Kai Kens?",
      answer:
        "Breed-club guidance emphasizes progressive retinal atrophy (PRA) DNA testing and cardiac exams, alongside elective evaluations for hips, elbows, patellas, eyes, and autoimmune thyroiditis.",
    },
    {
      question: "Is the Kai Ken a good choice for first-time dog owners?",
      answer:
        "Its independent thinking, strong prey drive, and reserve with strangers make it better suited to confident, consistent handlers rather than most first-time owners.",
    },
  ],

  references: [
    "akc-kai-ken-profile",
    "akc-kai-ken-standard-2025",
    "kai-ken-club-great-britain-health",
    "kai-ken-society-america-health",
    "kai-ken-society-america-standard",
    "nihonken-hozonkai-kai-ken",
    "royal-canin-kai-ken",
    "ukc-kai-ken-standard",
    "commons-kai-ken-canarian-2016",
    "the-dog-api",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "nihonken-hozonkai-kai-ken",
          role: "verified",
          locator: "Kai Ken breed overview and alternate name Kai Tora",
        },
        {
          id: "kai-ken-society-america-standard",
          role: "verified",
          locator: "History and alternate name Tora Inu",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names (Tora Inu, Kai Dog)",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Alternate names cross-referenced across Japanese preservation, breed club, and The Dog API records.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A distinct scientific name is not applicable beyond domestic dog (Canis lupus familiaris).",
    },
    group: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-kai-ken-profile",
          role: "verified",
          locator: "Foundation Stock Service listing",
        },
        {
          id: "ukc-kai-ken-standard",
          role: "verified",
          locator: "Northern Breeds group classification",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Kennel club groupings vary across registries.",
    },
    origin: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-kai-ken-standard-2025",
          role: "verified",
          locator: "History — Kai province and mountainous regions",
        },
        {
          id: "nihonken-hozonkai-kai-ken",
          role: "verified",
          locator: "Origin in Yamanashi Prefecture",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: Kai Province, Yamanashi Prefecture, Japan",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-kai-ken-standard-2025",
          role: "verified",
          locator: "History and General Appearance",
        },
        {
          id: "nihonken-hozonkai-kai-ken",
          role: "verified",
          locator: "Origin, 1934 Natural Monument status, hunting purpose, and coat colour",
        },
        {
          id: "ukc-kai-ken-standard",
          role: "verified",
          locator: "Characteristics and historical purpose",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.sizeCategory": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-kai-ken-standard-2025",
          role: "verified",
          locator: "General Appearance — medium-sized Spitz-type dog",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-kai-ken-standard-2025",
          role: "verified",
          locator: "Size, Proportion, Substance — 18.5–21 in (males), 15.75–18.25 in (females)",
        },
        {
          id: "kai-ken-society-america-standard",
          role: "verified",
          locator: "Size, Proportion, Substance — height limits in inches",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric: 46–56 cm (males), 39–50 cm (females)",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Official standard height in inches is retained without unit conversion; The Dog API lists 46–56 cm (males) and 39–50 cm (females).",
    },
    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric: 14–20 kg (males), 11–16 kg (females)",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Official breed standards reviewed do not specify weight; metric weight range is sourced from The Dog API.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-canin-kai-ken",
          role: "verified",
          locator: "Breed specifics — average life expectancy 14–16 years",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.life_span: 12–16 years",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Royal Canin reports 14–16 years, whereas The Dog API lists 12–16 years.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-kai-ken-standard-2025",
          role: "verified",
          locator: "Coat — harsh straight outer coat with dense undercoat",
        },
        {
          id: "ukc-kai-ken-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "ukc-kai-ken-standard",
          role: "verified",
          locator: "General Appearance — medium length harsh coat",
        },
        {
          id: "kai-ken-society-america-standard",
          role: "verified",
          locator: "Coat and mane",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "kai-ken-society-america-standard",
          role: "verified",
          locator: "Color — kuro-tora, chu-tora, aka-tora",
        },
        {
          id: "nihonken-hozonkai-kai-ken",
          role: "cited",
          locator: "Coat colour descriptions",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Only the three traditional brindle shades are listed; generic species-wide colours from The Dog API are excluded.",
    },
    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-kai-ken-profile",
          role: "verified",
          locator: "Grooming and seasonal shedding",
        },
        {
          id: "kai-ken-club-great-britain-health",
          role: "verified",
          locator: "Coat and grooming",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A reliable breed-specific drooling level was not established in the sources reviewed.",
    },
    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-kai-ken-standard-2025",
          role: "verified",
          locator: "General Appearance and Structure",
        },
        {
          id: "ukc-kai-ken-standard",
          role: "verified",
          locator: "General Appearance and Characteristics",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "kai-ken-society-america-standard",
          role: "verified",
          locator: "Temperament",
        },
        {
          id: "ukc-kai-ken-standard",
          role: "verified",
          locator: "Characteristics",
        },
        {
          id: "akc-kai-ken-profile",
          role: "verified",
          locator: "Temperament",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "kai-ken-society-america-standard",
          role: "cited",
          locator: "Temperament and working characteristics",
        },
        {
          id: "ukc-kai-ken-standard",
          role: "cited",
          locator: "Characteristics",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1–5 estimates based on breed-standard temperament descriptions.",
    },
    "temperament.scores.withChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-wide score for behaviour with children was established.",
    },
    "temperament.scores.barking": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-wide barking score was established.",
    },
    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        {
          id: "kai-ken-club-great-britain-health",
          role: "verified",
          locator: "Breed overview — exercise recommendation",
        },
        {
          id: "akc-kai-ken-profile",
          role: "verified",
          locator: "Exercise and Energy",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-kai-ken-profile",
          role: "verified",
          locator: "Grooming",
        },
        {
          id: "kai-ken-club-great-britain-health",
          role: "verified",
          locator: "Coat care",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "kai-ken-society-america-standard",
          role: "verified",
          locator: "Temperament — independence and hunting drive",
        },
        {
          id: "ukc-kai-ken-standard",
          role: "verified",
          locator: "Characteristics and hunting background",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "care.livingEnvironment": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Housing and climate recommendations are general canine welfare guidance.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Reviewed sources do not establish a universal apartment-suitability rating.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine nutrition guidance; no breed-specific calorie target is asserted.",
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific puppy feeding frequency was established.",
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific adult feeding frequency was established.",
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific senior feeding frequency was established.",
    },
    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "kai-ken-society-america-health",
          role: "verified",
          locator: "Health testing programme",
        },
        {
          id: "akc-kai-ken-profile",
          role: "verified",
          locator: "Health",
        },
        {
          id: "kai-ken-club-great-britain-health",
          role: "verified",
          locator: "Health screening",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Distinguishes screening priorities from breed-wide disease prevalence.",
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-kai-ken-profile",
          role: "verified",
          locator: "Health — allergies, luxating patella, PRA, seizures",
        },
        {
          id: "kai-ken-society-america-health",
          role: "verified",
          locator: "Recommended and elective health tests",
        },
        {
          id: "kai-ken-club-great-britain-health",
          role: "verified",
          locator: "Health screening",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive veterinary guidance adapted to breed screening priorities.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "kai-ken-society-america-health",
          role: "verified",
          locator: "PRA DNA test, Cardiac evaluation, and Health Electives",
        },
        {
          id: "kai-ken-club-great-britain-health",
          role: "verified",
          locator: "Recommended screening tests",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine dental hygiene is general canine care guidance.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine ear inspection is general canine care guidance.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine skin inspection during grooming is general canine care guidance.",
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "kai-ken-society-america-standard",
          role: "cited",
          locator: "Temperament",
        },
        {
          id: "ukc-kai-ken-standard",
          role: "cited",
          locator: "Characteristics",
        },
      ],
      verifiedOn: null,
      note: "Editorial suitability assessment based on activity needs, hunting drive, and temperament.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Reviewed sources do not establish a universal rating for families with children.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Reviewed sources do not establish a universal rating for senior owners.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Reviewed sources do not establish a universal apartment-living rating.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "nihonken-hozonkai-kai-ken",
          role: "verified",
          locator: "1934 Natural Monument status and brindle shades",
        },
        {
          id: "kai-ken-society-america-standard",
          role: "verified",
          locator: "Tora Inu nickname and mountain hunting history",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-kai-ken-standard-2025",
          role: "verified",
          locator: "History, coat, and temperament",
        },
        {
          id: "nihonken-hozonkai-kai-ken",
          role: "verified",
          locator: "Coat colours and Natural Monument status",
        },
        {
          id: "kai-ken-society-america-health",
          role: "verified",
          locator: "Health screening recommendations",
        },
        {
          id: "ukc-kai-ken-standard",
          role: "verified",
          locator: "Hunting instincts and temperament",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
  },

  updatedOn: "2026-11-12",
};
