import type { Breed } from "../schema/breed.types";

export const australian_silky_terrier: Breed = {
  slug: "australian-silky-terrier",
  name: "Australian Silky Terrier",
  scientificName: null,

  alternateNames: [
    "Silky Terrier",
    "Sydney Silky",
  ],

  group: "Terriers; Toy Terriers",

  origin: {
    country: "Australia",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Silkkiterrieri.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Silkkiterrieri.jpg",
      title: "Silkkiterrieri.jpg",
      description: "Photograph of an Australian Silky Terrier.",
      creator: "Jenna-timonen",
      uploader: "Jenna-timonen",
      capturedOn: null,
      uploadedOn: "2011-05-10",
      width: 1208,
      height: 950,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Jenna-timonen, via Wikimedia Commons, licensed under CC BY-SA 3.0. Include a link to the license and indicate if changes were made.",
      restrictions: null,
      metadataCheckedOn: "2026-11-12",
    },
  ],

  overview: {
    summary:
      "A compact, spirited Australian toy terrier distinguished by its straight, glossy blue-and-tan silky coat and keen, alert expression, packing genuine terrier energy into a small frame.",

    description:
      "Moderately low-set and slightly longer than tall, the Australian Silky Terrier wears a fine, straight, parted coat in crisp shades of blue and tan. Though sized as a household companion, it carries the bold curiosity, quickness, and rodent-hunting heritage of its terrier forebears. Owners should expect daily interactive play, consistent reward-based training, and frequent brushing to keep the silky coat tangle-free.",

    history:
      "Bred in Australia—historically around Sydney, earning the early nickname Sydney Silky—the breed emerged from crosses between local Australian Terriers and imported Yorkshire Terriers in the late nineteenth and early twentieth centuries. Breeders aimed to pair the Yorkshire Terrier's glossy blue-and-tan coat with sturdier terrier substance, achieving a unified national breed type by the mid-twentieth century.",

    originalPurpose:
      "A small companion terrier capable of keeping homes and yards clear of domestic rodents.",

    currentRoles: [
      "Lively household companion",
      "Obedience, agility, rally, and trick-training partner",
      "Conformation show dog",
    ],
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "cm",
      male: { min: 23, max: 26 },
      female: null,
    },

    weight: {
      unit: "kg",
      male: { min: 3.5, max: 5 },
      female: { min: 3.5, max: 5 },
    },

    lifespanYears: {
      min: 10,
      max: 15,
    },

    coatType:
      "Straight, flat, fine, glossy single coat with a silky texture parted cleanly along the spine.",

    coatLength:
      "Desirable body coat length is 13–15 cm from behind the ears to the tail set-on, stopping clear of the ground so movement is unobstructed and the feet remain free of long hair.",

    coatColors: [
      "Blue and tan",
      "Silver-blue and tan",
      "Any rich, clearly defined shade of blue and tan",
    ],

    sheddingLevel:
      "Low — sheds minimally, though regular brushing is needed to remove loose strands and prevent mats.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Compact, moderately low-set body slightly longer than tall",
      "Straight, glossy, parted blue-and-tan silky coat",
      "Small, high-set, V-shaped ears carried cleanly erect",
      "Keen, alert terrier expression with small, dark oval eyes",
      "Free, true movement without coat dragging on the floor",
    ],
  },

  temperament: {
    traits: [
      "Alert and keenly observant",
      "Lively, playful, and curious",
      "Confident and bold for its small size",
      "Affectionate and responsive with family members",
      "Intelligent and quick to learn through positive reinforcement",
      "Vocal watchdog with lingering small-prey chase instincts",
    ],

    scores: {
      affection: 5,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 3,
      independence: 3,
      trainability: 4,
      barking: 4,
      energy: 4,
    },
  },

  care: {
    exercise: {
      level:
        "Moderate — satisfied by daily walks, interactive toy play, sniffing, and brief training games tailored to age and fitness.",
      minutesPerDay: null,
      activities: [
        "Daily leashed walks on a well-fitted harness",
        "Interactive indoor fetch and puzzle-toy play",
        "Reward-based trick, obedience, or nose-work sessions",
        "Supervised yard exploration inside secure fencing",
      ],
    },

    grooming: {
      level: "High when kept in full coat; moderate with a shorter pet trim",
      brushing:
        "Brush and comb several times a week—ideally daily in full coat—paying close attention behind the ears, under the legs, and around harness contact points.",
      bathing:
        "Bathe periodically with a gentle canine shampoo, conditioning and drying carefully while combing out tangles before they set.",
      notes: [
        "Check skin, ears, eyes, and paws during routine brushing.",
        "Keep nails trimmed and brush teeth regularly.",
        "A practical puppy or pet trim reduces daily combing while altering the traditional long silhouette.",
      ],
    },

    training: {
      difficulty:
        "Moderate — bright and eager to engage, though terrier independence benefits from upbeat consistency.",
      tips: [
        "Keep sessions short, varied, and reward-based.",
        "Teach a calm 'quiet' cue early to manage alert barking.",
        "Practise recall in secure spaces before trusting off-leash cues around small animals.",
      ],
      socialization:
        "Provide gradual, positive exposure to varied people, calm dogs, grooming handling, and everyday noises from puppyhood.",
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: [
        "Adapts well to most climates indoors with appropriate shelter.",
        "Provide shade, fresh water, and cooler walking hours in hot weather.",
        "Dry the fine single coat thoroughly after rain or cold, damp outings.",
      ],
      aloneTimeTolerance:
        "Moderate when conditioned gradually — prefers regular company and enrichment, as prolonged boredom can trigger barking.",
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced commercial diet formulated for small-breed dogs according to life stage and body condition.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Measure daily portions by body condition score rather than guesswork, keeping treats modest and fresh water available at all times.",

    considerations: [
      "Small-breed formulas offer appropriately sized kibble and calorie density.",
      "Avoid overfeeding, as excess weight strains knees and joints.",
      "Introduce food transitions gradually and consult a veterinarian for persistent digestive signs.",
    ],

    note:
      "No universal meal frequency or gram ration applies to every Australian Silky Terrier; tailor portions with veterinary guidance.",
  },

  health: {
    overview:
      "Australian Silky Terriers are generally long-lived companions, though breed profiles note concerns involving the kneecaps, hip joints, eyes, and teeth. These represent potential risks to monitor rather than inevitable conditions, so routine veterinary exams and responsible breeder health checks are essential.",

    commonConditions: [
      "Patellar luxation — slipping of the kneecap reported as a concern in small terriers.",
      "Legg-Calvé-Perthes disease — a developmental hip-joint disorder noted in toy breeds.",
      "Eye disorders including juvenile cataracts — monitored through veterinary eye exams.",
      "Dental and periodontal disease — common in small breeds without regular oral care.",
    ],

    preventiveCare: [
      "Schedule routine veterinary wellness exams, vaccinations, and parasite control.",
      "Ask breeders about parental patella and eye health history.",
      "Maintain lean body weight and seek veterinary care promptly for skipping gaits, limping, or eye cloudiness.",
    ],

    recommendedScreenings: [
      "Veterinary patellar luxation evaluation",
      "Periodic veterinary eye examination",
      "Review of parental and close-relative health records",
    ],

    dentalCare:
      "Brush teeth several times a week with canine toothpaste and arrange periodic professional veterinary dental cleanings.",

    earCare:
      "Inspect the small upright ears regularly for wax, redness, or odour, seeking veterinary advice if irritation appears.",

    skinCare:
      "Check the skin beneath the parted coat during brushing for tangles, harness rubbing, redness, or itching.",
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Apartment or house dwellers seeking a compact, lively companion",
      "Owners willing to commit to frequent coat brushing or routine grooming trims",
      "Families with older or gently supervised children and active seniors",
    ],

    notIdealFor: [
      "Homes unwilling to maintain a fine, tangle-prone coat",
      "Households with unsupervised toddlers or rough-playing large dogs",
      "Owners expecting a completely silent dog or effortless off-leash reliability around small pets",
    ],
  },

  funFacts: [
    "The Australian Silky Terrier was developed in Australia and was known early on as the Sydney Silky.",
    "Puppies are born black and tan, gradually developing their signature blue-and-tan adult coat by around 18 months of age.",
    "Though grouped with toy breeds, it retains the alert confidence and rodent-hunting spirit of a true terrier.",
    "Despite its glamorous silky coat, the breed is built for free, unobstructed movement rather than floor-length dragging hair.",
  ],

  faq: [
    {
      question: "Is the Australian Silky Terrier suited to apartment living?",
      answer:
        "Yes—its compact size and moderate exercise needs fit apartment life well when paired with daily walks, play, and gentle quiet-cue training.",
    },
    {
      question: "How much grooming does an Australian Silky Terrier need?",
      answer:
        "A full-length coat requires frequent—often daily—brushing and combing to stay tangle-free, though a shorter pet trim simplifies upkeep.",
    },
    {
      question: "How tall and heavy is an Australian Silky Terrier?",
      answer:
        "Males typically stand 23–26 cm at the withers (with females slightly smaller), and adults generally weigh around 3.5–5 kg.",
    },
    {
      question: "What is the breed's expected lifespan?",
      answer:
        "Australian Silky Terriers typically live about 10–15 years with attentive veterinary and dental care.",
    },
    {
      question: "Do Australian Silky Terriers shed heavily?",
      answer:
        "No—they are generally low shedders, though their fine single coat still needs regular brushing to prevent mats.",
    },
    {
      question: "Are Australian Silky Terriers good with children?",
      answer:
        "They can be affectionate family companions when children are taught gentle handling and interactions are supervised to protect their small frame.",
    },
    {
      question: "Which health issues should owners watch for?",
      answer:
        "Watch for skipping or limping (which can signal patellar luxation or hip issues), eye cloudiness, and dental tartar buildup, scheduling regular veterinary checkups.",
    },
  ],

  references: [
    "fci-australian-silky-terrier-standard-236",
    "dogs-australia-australian-silky-terrier-standard",
    "royal-kennel-club-australian-silky-terrier-standard",
    "dogs-victoria-australian-silky-terrier-profile",
    "canadian-kennel-club-silky-terrier-profile",
    "commons-australian-silky-terrier-jenna-timonen",
    "the-dog-api",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No separate scientific binomial is assigned beyond domestic dog (Canis lupus familiaris).",
    },
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "canadian-kennel-club-silky-terrier-profile",
          role: "verified",
          locator: "Breed profile and historical Sydney Silky name",
        },
        {
          id: "dogs-australia-australian-silky-terrier-standard",
          role: "cited",
          locator: "Australian Silky Terrier breed standard",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names (Sydney Silky)",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-australian-silky-terrier-standard-236",
          role: "verified",
          locator: "Classification — Group 3, Section 4",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-australian-silky-terrier-standard-236",
          role: "verified",
          locator: "Country of origin: Australia",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: Australia",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No single official region is asserted as the exclusive origin.",
    },
    "overview.summary": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-australian-silky-terrier-standard-236",
          role: "verified",
          locator: "General appearance and behaviour/temperament",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "overview.description": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-australian-silky-terrier-standard-236",
          role: "verified",
          locator: "General appearance, coat, colour, and movement",
        },
        {
          id: "royal-kennel-club-australian-silky-terrier-standard",
          role: "cited",
          locator: "General appearance, coat, colour, and size",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "overview.history": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-australian-silky-terrier-standard-236",
          role: "verified",
          locator: "Brief historical summary",
        },
        {
          id: "canadian-kennel-club-silky-terrier-profile",
          role: "cited",
          locator: "Origin and Sydney Silky name",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.history",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "overview.originalPurpose": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-australian-silky-terrier-standard-236",
          role: "verified",
          locator: "Utilization and rodent-hunting heritage",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "overview.currentRoles": {
      reliability: "general_guidance",
      sources: [
        {
          id: "royal-kennel-club-australian-silky-terrier-standard",
          role: "cited",
          locator: "Breed characteristics",
        },
      ],
      verifiedOn: null,
      note: "Plausible companion and activity roles.",
    },
    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "royal-kennel-club-australian-silky-terrier-standard",
          role: "cited",
          locator: "Height and general appearance",
        },
      ],
      verifiedOn: null,
      note: "Broad catalog size label.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-australian-silky-terrier-standard-236",
          role: "verified",
          locator: "Height at withers — males 23–26 cm; females slightly less",
        },
        {
          id: "dogs-australia-australian-silky-terrier-standard",
          role: "cited",
          locator: "Sizes",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric: 23–25 cm",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Official standard specifies 23–26 cm for males without a separate numeric female range; The Dog API lists 23–25 cm.",
    },
    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric: 3.5–5 kg",
        },
        {
          id: "fci-australian-silky-terrier-standard-236",
          role: "cited",
          locator: "Weight in proportion to height",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Official standards state weight proportionate to height without a numeric range; metric range is sourced from The Dog API.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "dogs-victoria-australian-silky-terrier-profile",
          role: "verified",
          locator: "Average life span: 10–15 years",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-australian-silky-terrier-standard-236",
          role: "verified",
          locator: "Coat — flat, fine, glossy, silky",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-australian-silky-terrier-standard",
          role: "verified",
          locator: "Coat length — 13–15 cm",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-australian-silky-terrier-standard-236",
          role: "verified",
          locator: "Colour — blue and tan",
        },
        {
          id: "dogs-australia-australian-silky-terrier-standard",
          role: "cited",
          locator: "Colour",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Generic species-wide colours from The Dog API are excluded.",
    },
    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "royal-kennel-club-australian-silky-terrier-standard",
          role: "cited",
          locator: "Single silky coat description",
        },
      ],
      verifiedOn: null,
      note: "Qualitative shedding estimate.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling measurement was established.",
    },
    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-australian-silky-terrier-standard-236",
          role: "verified",
          locator: "General Appearance, Head, Ears, Coat, Colour, Movement",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-australian-silky-terrier-standard-236",
          role: "verified",
          locator: "Behaviour and temperament",
        },
        {
          id: "royal-kennel-club-australian-silky-terrier-standard",
          role: "cited",
          locator: "Characteristics and temperament",
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
          id: "fci-australian-silky-terrier-standard-236",
          role: "cited",
          locator: "Behaviour and temperament",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1–5 estimates for comparison.",
    },
    "care.exercise.level": {
      reliability: "general_guidance",
      sources: [
        {
          id: "royal-kennel-club-australian-silky-terrier-standard",
          role: "cited",
          locator: "Breed characteristics and movement",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed daily exercise-minute target was established.",
    },
    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General enrichment suggestions for small active dogs.",
    },
    "care.grooming": {
      reliability: "general_guidance",
      sources: [
        {
          id: "royal-kennel-club-australian-silky-terrier-standard",
          role: "cited",
          locator: "Coat description and length",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "care.training": {
      reliability: "general_guidance",
      sources: [
        {
          id: "royal-kennel-club-australian-silky-terrier-standard",
          role: "cited",
          locator: "Characteristics and temperament",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "canadian-kennel-club-silky-terrier-profile",
          role: "verified",
          locator: "Temperament and apartment adaptability",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    "care.livingEnvironment": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General environmental and alone-time guidance.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine nutrition guidance.",
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed puppy meal frequency is asserted.",
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed adult meal frequency is asserted.",
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed senior meal frequency is asserted.",
    },
    "health.overview": {
      reliability: "general_guidance",
      sources: [
        {
          id: "dogs-victoria-australian-silky-terrier-profile",
          role: "cited",
          locator: "Breed profile and health information",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "dogs-victoria-australian-silky-terrier-profile",
          role: "verified",
          locator: "Reported health concerns",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Reported concerns rather than population prevalence estimates.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "dogs-victoria-australian-silky-terrier-profile",
          role: "cited",
          locator: "Breed health information",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "health.recommendedScreenings": {
      reliability: "general_guidance",
      sources: [
        {
          id: "dogs-victoria-australian-silky-terrier-profile",
          role: "cited",
          locator: "Reported health concerns",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive dental care guidance.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General ear-care guidance.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General skin-care guidance.",
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "canadian-kennel-club-silky-terrier-profile",
          role: "cited",
          locator: "Temperament and activity level",
        },
      ],
      verifiedOn: null,
      note: "Editorial suitability estimates.",
    },
    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-australian-silky-terrier-standard-236",
          role: "verified",
          locator: "Origin, classification, coat, and colour",
        },
        {
          id: "dogs-australia-australian-silky-terrier-standard",
          role: "cited",
          locator: "Breed history and colour",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },
    faq: {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-australian-silky-terrier-standard-236",
          role: "cited",
          locator: "Breed standard",
        },
        {
          id: "dogs-victoria-australian-silky-terrier-profile",
          role: "cited",
          locator: "Average life span and health information",
        },
      ],
      verifiedOn: null,
      note: "Combines standard-backed facts with general care guidance.",
    },
  },

  updatedOn: "2026-11-12",
};
