import type { Breed } from "../schema/breed.types";

export const papillon_and_phalene: Breed = {
  slug: "papillon-and-phalene",
  name: "Papillon and Phalène",
  scientificName: null,

  alternateNames: [
    "Continental Toy Spaniel",
    "Epagneul Nain Continental",
    "Papillon",
    "Phalène",
  ],

  group: "Companion and Toy Dogs; Continental Toy Spaniels",

  origin: {
    country: "Belgium and France",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Papillon%20with%20drop%20ears.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Papillon_with_drop_ears.jpg",
      title: "Papillon with drop ears.jpg",
      description:
        "A Phalène, the drop-eared variety of the Continental Toy Spaniel.",
      creator: "Dzhermanotta-royals",
      uploader: "Dzhermanotta-royals",
      capturedOn: "2015-08-01",
      uploadedOn: "2015-09-01",
      width: 960,
      height: 639,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Dzhermanotta-royals, via Wikimedia Commons, licensed under CC BY-SA 4.0. Credit the creator, link to the license, and indicate any changes made.",
      restrictions: null,
      metadataCheckedOn: "2026-11-12",
    },
  ],

  overview: {
    summary:
      "A lively, fine-boned European toy spaniel prized for its silky flowing coat and distinctive ear varieties—the erect, butterfly-winged Papillon and the drop-eared Phalène.",

    description:
      "The Papillon and Phalène represent the two ear varieties of the Continental Toy Spaniel, sharing identical body structure, intelligence, and spirited temperament. These small, fine-boned dogs display a slightly elongated silhouette, a light and quick gait, dark expressive eyes, and an abundant, silky single coat devoid of an undercoat. Despite their delicate appearance, they are hardy, alert, and remarkably quick to learn, excelling in obedience, agility, and companion life. They thrive on close human interaction, daily walks, and mental challenges, while their small stature calls for gentle handling and supervision around young children and larger dogs.",

    history:
      "Originating among European dwarf spaniels popular at royal courts from the Renaissance onward, the Continental Toy Spaniel frequently appears in sixteenth-century paintings. Initially bred with drooping ears, the erect-eared type emerged later and earned the French name Papillon ('butterfly') for its wing-like ear silhouette, while the original drop-eared variety became known as the Phalène ('moth'). Both varieties frequently appear in the same litter and remain unified as two distinct ear forms within a single Continental Toy Spaniel heritage.",

    originalPurpose: "Companion dog",

    currentRoles: [
      "Household companion",
      "Obedience and trick-training partner",
      "Agility and small-dog performance competitor",
      "Conformation show dog",
    ],
  },

  physical: {
    sizeCategory: "Toy",

    height: {
      unit: "in",
      male: {
        min: 8,
        max: 11,
      },
      female: {
        min: 8,
        max: 11,
      },
    },

    weight: {
      unit: "kg",
      male: {
        min: 1.5,
        max: 4.5,
      },
      female: {
        min: 1.5,
        max: 5,
      },
    },

    lifespanYears: {
      min: 14,
      max: 16,
    },

    coatType:
      "Single coat without an undercoat; abundant, fine, silky, and flowing with a slight resilience",

    coatLength:
      "Long on the body, chest ruff, ear fringes, backs of the legs, and plumed tail; short on the face, muzzle, and front of the lower legs",

    coatColors: [
      "White base with patches of any color",
      "White dominant on the body and legs",
      "White facial blaze preferred",
    ],

    sheddingLevel:
      "Moderate year-round shedding; weekly brushing keeps loose hair manageable",

    droolingLevel:
      "Low; individual dogs may vary",

    distinctiveFeatures: [
      "Papillon variety carries large, erect, obliquely set ears resembling butterfly wings",
      "Phalène variety carries drop ears fringed with long, flowing hair",
      "Fine-boned, slightly longer-than-tall rectangular frame",
      "High-set tail carried arched over the back in a long, flowing plume",
      "Silky single coat forming a protective chest ruff and leg feathering",
      "Elongated, hare-like feet with fine hair tufts between the toes",
    ],
  },

  temperament: {
    traits: [
      "Alert and observant",
      "Lively and playful",
      "Affectionate with family members",
      "Highly intelligent and eager to learn",
      "Confident and outgoing for a toy breed",
      "Vocal when excited or alerting to visitors",
      "Sensitive to harsh handling; thrives on positive reinforcement",
    ],

    scores: {
      affection: 5,
      withChildren: 3,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: 2,
      independence: 2,
      trainability: 5,
      barking: 4,
      energy: 4,
    },
  },

  care: {
    exercise: {
      level:
        "Moderate. Daily walks, interactive play, and brief mental training sessions satisfy this agile toy breed.",
      minutesPerDay: {
        min: 30,
        max: 60,
      },
      activities: [
        "Daily leashed walks using a well-fitted harness",
        "Indoor or fenced-yard fetch and gentle play",
        "Reward-based obedience, trick training, and rally",
        "Interactive food puzzles and scent-search games",
        "Small-dog agility tailored to fine bone structure",
      ],
    },

    grooming: {
      level:
        "Low to moderate — weekly brushing keeps the single silky coat tangle-free without undercoat matting.",
      brushing:
        "Brush and comb several times weekly using a pin brush and wide-toothed comb, focusing on the ear fringes, chest ruff, leg feathering, and tail.",
      bathing:
        "Bathe every few weeks or as needed with a gentle canine shampoo, drying the fine coat thoroughly.",
      notes: [
        "Inspect ear fringes and feathering regularly for burrs, debris, and small tangles.",
        "Trim nails frequently to prevent overgrowth and protect delicate paws.",
        "Brush teeth daily with dog-safe toothpaste to prevent periodontal disease.",
        "Examine ears weekly for redness, wax buildup, or odor.",
      ],
    },

    training: {
      difficulty:
        "Easy to moderate — exceptionally intelligent and eager to please, though alert barking requires early guidance.",
      tips: [
        "Use short, upbeat sessions built around treats, toys, and enthusiastic praise.",
        "Establish reliable recall, loose-leash walking, and calm greetings early.",
        "Teach a quiet cue to manage alert barking at household sounds or visitors.",
        "Introduce gentle handling, brushing, and nail trims gradually in puppyhood.",
        "Provide safe steps or ramps to furniture to protect fine bones from high jumps.",
      ],
      socialization:
        "Expose puppies gradually and positively to varied people, calm dogs, household noises, and new environments to build balanced confidence.",
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: [
        "Well-suited to indoor living across temperate climates",
        "Provide shade, fresh water, and cool indoor spaces during warm weather",
        "Use protective coats and shorter walks during cold or wet conditions",
      ],
      aloneTimeTolerance:
        "Low to moderate — strongly people-oriented and prone to distress if routinely left alone for long hours.",
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced small-breed or toy-breed diet matched to life stage, activity, and body condition.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Measure daily portions carefully to match energy expenditure and maintain a lean frame. Account for all training treats within the daily calorie budget, and provide continuous access to fresh water.",

    considerations: [
      "Toy-breed puppies are susceptible to hypoglycemia if meals are skipped or spaced too far apart.",
      "Extra treats can rapidly cause weight gain in a small dog and strain patellas.",
      "Select appropriately sized kibble for small jaws and dental comfort.",
      "Consult a veterinarian promptly if appetite drops, vomiting occurs, or weight shifts unexpectedly.",
    ],

    note:
      "Caloric targets and meal counts vary by age, metabolism, and health; establish an individualized feeding plan with a veterinarian.",
  },

  health: {
    overview:
      "Papillons and Phalènes are famously long-lived toy companions, frequently reaching their mid-to-late teens. Responsible breeders screen for patellar luxation, hereditary eye conditions, cardiac issues, and specific genetic disorders such as neuroaxonal dystrophy (NAD) and PRA-1. Their small stature also makes dental hygiene and safe handling essential.",

    commonConditions: [
      "Patellar luxation (slipping kneecap)",
      "Periodontal and dental disease",
      "Hereditary eye disorders including progressive retinal atrophy (PRA-1)",
      "Neuroaxonal dystrophy (NAD)",
      "Cardiac conditions including mitral valve disease",
      "Persistent open fontanel in some individuals",
      "Tracheal collapse or airway sensitivity",
      "Fractures or injuries from falls and rough handling",
    ],

    preventiveCare: [
      "Maintain routine veterinary wellness checks, dental cleanings, and age-appropriate vaccinations.",
      "Use a chest harness rather than a neck collar on walks to protect delicate airways.",
      "Supervise play with larger dogs and teach young children gentle handling.",
      "Request documented parental health clearances for eyes, patellas, heart, and relevant DNA tests.",
    ],

    recommendedScreenings: [
      "Ophthalmologist eye examination for breeding dogs",
      "Patella luxation evaluation for breeding dogs",
      "Cardiac examination for breeding dogs",
      "DNA testing for progressive retinal atrophy (PRA-1) and neuroaxonal dystrophy (NAD)",
    ],

    dentalCare:
      "Small jaws predispose toy breeds to crowded teeth and rapid tartar buildup; brush daily with canine toothpaste and arrange regular veterinary dental cleanings.",

    earCare:
      "Inspect both erect and drop ears weekly for wax, redness, or odor, keeping long ear fringes clean and tangle-free.",

    skinCare:
      "Check skin during brushing for dryness, irritation, or parasites, consulting a veterinarian for persistent scratching or hair loss.",
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Owners seeking an affectionate, portable, and highly trainable indoor companion",
      "Handlers interested in trick training, obedience, or small-dog agility",
      "Apartment or house dwellers committed to daily walks and consistent dental/coat care",
    ],

    notIdealFor: [
      "Households expecting to leave a toy dog alone for extended workdays without companionship",
      "Homes where very young children might handle a fine-boned dog roughly",
      "Owners unwilling to maintain regular brushing and preventive dental care",
    ],
  },

  funFacts: [
    "The name Papillon comes from the French word for butterfly, describing its erect, wing-like ears.",
    "Phalène means moth in French and refers to the original drop-eared variety.",
    "Both erect- and drop-eared varieties are recognized within the single Continental Toy Spaniel breed and can appear in the same litter.",
    "Despite their delicate toy size, they are among the most agile and successful competitors in small-dog obedience and agility.",
  ],

  faq: [
    {
      question: "Are Papillon and Phalène separate breeds?",
      answer:
        "No; they are recognized as two ear varieties of the single Continental Toy Spaniel breed—the Papillon has erect butterfly-like ears, while the Phalène has drop ears.",
    },
    {
      question: "Where do Papillon and Phalène dogs originate?",
      answer:
        "The breed originated in Belgium and France from European dwarf spaniels.",
    },
    {
      question: "How tall is a Papillon or Phalène?",
      answer:
        "Adults typically measure 8 to 11 inches at the withers.",
    },
    {
      question: "How much should a Papillon or Phalène weigh?",
      answer:
        "Published weight categories place adults between 1.5 and 4.5 kg for males and 1.5 and 5 kg for females, with a minimum threshold of 1.5 kg.",
    },
    {
      question: "What is the temperament like?",
      answer:
        "They are lively, alert, affectionate, and exceptionally quick to learn, thriving on human companionship and mental enrichment.",
    },
    {
      question: "Do Papillon and Phalène dogs need extensive grooming?",
      answer:
        "Because they have a single silky coat without an undercoat, they rarely mat heavily; brushing a few times a week keeps fringes smooth, alongside regular nail and dental care.",
    },
    {
      question: "What health checks should a breeder discuss?",
      answer:
        "Prospective owners should ask for documented eye, patella, and cardiac evaluations for breeding parents, plus DNA screening for PRA-1 and neuroaxonal dystrophy (NAD).",
    },
    {
      question: "Are they suitable for apartment living?",
      answer:
        "Yes, their compact size and adaptability make them well-suited to apartments when provided daily walks, play, and guidance on alert barking.",
    },
  ],

  references: [
    "fci-continental-toy-spaniel-standard",
    "american-kennel-club-papillon-standard",
    "american-kennel-club-papillon",
    "papillon-club-of-america-health-statement",
    "vca-papillon-breed-profile",
    "commons-phalen-papillon-with-drop-ears",
    "the-dog-api",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
  ],

  evidence: {
    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-continental-toy-spaniel-standard",
          role: "verified",
          locator: "Title, breed classification and variety names",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names",
        },
      ],
      verifiedOn: "2026-11-12",
      note:
        "Uses the recognised Continental Toy Spaniel name and its Papillon and Phalène varieties.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A breed-specific scientific name is not established by the breed-standard sources; omitted rather than inferring domestic-dog taxonomy.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-continental-toy-spaniel-standard",
          role: "verified",
          locator: "FCI classification, Group 9 and Section 9",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Uses Group 9 Section 9 classification.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-continental-toy-spaniel-standard",
          role: "verified",
          locator: "Origin: Belgium and France",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "The standard lists Belgium and France.",
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted official standard identifies Belgium and France without specifying a narrower region.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-continental-toy-spaniel-standard",
          role: "verified",
          locator: "General appearance, utilisation, historical summary and ear varieties",
        },
        {
          id: "american-kennel-club-papillon",
          role: "verified",
          locator: "About the breed, characteristics and breed history",
        },
      ],
      verifiedOn: "2026-11-12",
      note:
        "Overview and historical descriptions are original paraphrases of breed-standard and kennel-club information.",
    },

    physical: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-continental-toy-spaniel-standard",
          role: "verified",
          locator: "General appearance, coat, colour and size/weight",
        },
        {
          id: "american-kennel-club-papillon-standard",
          role: "verified",
          locator: "Size, coat, colour and ear varieties",
        },
        {
          id: "vca-papillon-breed-profile",
          role: "verified",
          locator: "Appearance and grooming",
        },
      ],
      verifiedOn: "2026-11-12",
      note:
        "Physical characteristics synthesize official conformation and veterinary sources.",
    },

    "physical.sizeCategory": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-papillon-standard",
          role: "verified",
          locator: "General Appearance: toy dog",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-papillon-standard",
          role: "verified",
          locator: "Size, Proportion, Substance: height at withers 8–11 inches",
        },
      ],
      verifiedOn: "2026-11-12",
      note:
        "Preserved in published inches (8–11 in) without unit conversion.",
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-continental-toy-spaniel-standard",
          role: "verified",
          locator: "Size and weight: minimum 1.5 kg; <2.5 kg and 2.5–4.5 kg males / 2.5–5 kg females",
        },
      ],
      verifiedOn: "2026-11-12",
      note:
        "Records outer bounds in published kilograms (1.5–4.5 kg males; 1.5–5 kg females).",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-papillon",
          role: "verified",
          locator: "Average size and life expectancy: 14–16 years",
        },
        {
          id: "vca-papillon-breed-profile",
          role: "conflicting",
          locator: "Lifespan: 12–15 years",
        },
      ],
      verifiedOn: "2026-11-12",
      note:
        "Uses 14–16 years; VCA reports 12–15 years.",
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-continental-toy-spaniel-standard",
          role: "verified",
          locator: "Coat — Hair",
        },
        {
          id: "american-kennel-club-papillon-standard",
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
          id: "fci-continental-toy-spaniel-standard",
          role: "verified",
          locator: "Coat — Hair",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-continental-toy-spaniel-standard",
          role: "verified",
          locator: "Coat — Colour",
        },
        {
          id: "american-kennel-club-papillon-standard",
          role: "verified",
          locator: "Color",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-papillon",
          role: "verified",
          locator: "Grooming and shedding traits",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Moderate year-round shedding from single coat.",
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-papillon",
          role: "verified",
          locator: "Breed traits",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Low drooling tendency.",
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-continental-toy-spaniel-standard",
          role: "verified",
          locator: "General appearance, ears, tail, coat, feet",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },

    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-papillon-standard",
          role: "verified",
          locator: "Temperament",
        },
        {
          id: "american-kennel-club-papillon",
          role: "verified",
          locator: "Breed traits and characteristics",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-12",
      note:
        "Descriptive traits are based on breed-standard and kennel-club descriptions; individual behavior varies.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "Editorial 1–5 scores for comparison, not clinical measurements.",
    },

    care: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-papillon",
          role: "verified",
          locator: "Grooming, training and health sections",
        },
        {
          id: "vca-papillon-breed-profile",
          role: "verified",
          locator: "Grooming, exercise, training and nutritional needs",
        },
      ],
      verifiedOn: "2026-11-12",
      note:
        "Care guidance synthesizes kennel-club and veterinary recommendations.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "Practical 30–60 minute editorial estimate; adjust to age and health.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Nutritional assessment guidelines and body condition scoring",
        },
        {
          id: "vca-papillon-breed-profile",
          role: "cited",
          locator: "Nutritional needs and puppy hypoglycemia prevention",
        },
      ],
      verifiedOn: null,
      note:
        "General small-breed feeding guidance; individual portions should be set with a veterinarian.",
    },

    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Feeding schedules vary by puppy age and size; confirm with a veterinarian.",
    },

    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Adult meal frequency depends on individual routine.",
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Senior meal frequency depends on health and metabolism.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "papillon-club-of-america-health-statement",
          role: "verified",
          locator: "Health statement and recommended evaluations",
        },
        {
          id: "american-kennel-club-papillon",
          role: "verified",
          locator: "Health and recommended health tests",
        },
        {
          id: "vca-papillon-breed-profile",
          role: "verified",
          locator: "Health concerns and preventive care",
        },
      ],
      verifiedOn: "2026-11-12",
      note:
        "Conditions represent documented breed risks rather than guaranteed outcomes.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "Routine teeth-brushing and professional prophylaxis advice",
        },
      ],
      verifiedOn: null,
      note: "Toy-breed dental care guidance.",
    },

    suitability: {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "Editorial suitability flags; household supervision and training shape individual outcomes.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-continental-toy-spaniel-standard",
          role: "verified",
          locator: "Breed name and recognised ear varieties",
        },
        {
          id: "american-kennel-club-papillon-standard",
          role: "verified",
          locator: "General appearance and ear type",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Checked against official breed-standard descriptions.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-continental-toy-spaniel-standard",
          role: "verified",
          locator: "Origin, classification, coat, colour and size/weight",
        },
        {
          id: "american-kennel-club-papillon-standard",
          role: "verified",
          locator: "Size, coat and temperament",
        },
        {
          id: "papillon-club-of-america-health-statement",
          role: "verified",
          locator: "Health statement and recommended evaluations",
        },
        {
          id: "vca-papillon-breed-profile",
          role: "verified",
          locator: "Grooming, lifespan and health concerns",
        },
      ],
      verifiedOn: "2026-11-12",
      note:
        "Answers synthesize verified conformation and veterinary sources in original wording.",
    },
  },

  updatedOn: "2026-11-12",
};
