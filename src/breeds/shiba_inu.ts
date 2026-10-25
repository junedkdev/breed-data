import type { Breed } from "../schema/breed.types";

export const shiba_inu: Breed = {
  slug: "shiba-inu",
  name: "Shiba Inu",
  scientificName: null,
  alternateNames: ["Shiba", "柴犬"],
  group: "FCI Group 5 — Spitz and primitive types; Section 5 — Asian Spitz and related breeds",

  origin: {
    country: "Japan",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Shiba_inu.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Shiba_inu.jpg",
      title: "Shiba inu.jpg",
      description: "An 11-year-old Shiba Inu.",
      creator: "Howyadointhere",
      uploader: "Howyadointhere",
      capturedOn: "2019-03-09",
      uploadedOn: "2019-03-31",
      width: 4032,
      height: 3024,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Howyadointhere, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). No changes made. Adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-25",
    },
  ],

  overview: {
    summary:
      "The Shiba Inu is a small, sturdy Japanese breed originally used to hunt birds and small animals. It has a compact, muscular build, upright triangular ears, dark eyes and a curled or sickle-shaped tail. Its dense double coat comes in several recognised colours, usually with pale markings called urajiro. Shibas are alert, independent-minded and often strongly attached to familiar people. Their hunting background makes secure outdoor management and patient, reward-based training especially important.",

    description:
      "The Shiba Inu combines a compact frame with well-developed muscles and quick, light movement. Its outer coat is straight and firm, while the soft undercoat provides insulation. The head has a broad forehead and a tapered muzzle, with small forward-tilting ears and a confident expression. Coat colours include red, black and tan, and sesame variations; the standard describes pale urajiro markings on characteristic areas of the body. Shibas are observant and can be self-directed, so reliable everyday manners are best built through consistency and rewards rather than force. Regular walks, mental enrichment, grooming during seasonal shedding and secure lead or fenced-area management help meet their needs.",

    history:
      "The Shiba is an indigenous Japanese breed with a long history in mountainous areas facing the Sea of Japan, where it was used to hunt birds and small animals. Regional populations developed slight differences. During the late nineteenth and early twentieth centuries, crossbreeding with imported hunting dogs contributed to a decline in pure Shiba populations. Preservation efforts began in earnest around the late 1920s, and a unified breed standard was established in 1934. In 1937, the Shiba was designated a natural monument in Japan, supporting the preservation and development of the breed known today.",

    originalPurpose:
      "Hunting birds and small animals, as well as serving as a companion dog.",

    currentRoles: [
      "Companion dog",
      "Reward-based obedience and trick training",
      "Scent games and other enrichment activities",
      "Conformation showing",
      "Active outdoor companionship with secure management",
    ],
  },

  physical: {
    sizeCategory: "Small, compact and muscular",

    height: {
      // The standard publishes ideal heights and a tolerance of ±1.5 cm.
      // The numeric ranges below express those stated tolerances in cm.
      unit: "cm",
      male: { min: 38, max: 41 },
      female: { min: 35, max: 38 },
    },

    // The reviewed official breed standards do not establish a numeric
    // weight range, so no weight is inferred.
    weight: {
      unit: null,
      male: null,
      female: null,
    },

    // A reliable breed-wide lifespan figure was not established from the
    // primary sources reviewed for this record.
    lifespanYears: null,

    coatType:
      "Double coat with a harsh, straight outer coat and a soft, dense undercoat.",

    coatLength:
      "Short to medium, with a dense undercoat and slightly longer hair on the tail.",

    coatColors: [
      "Red",
      "Black and tan",
      "Sesame",
      "Black sesame",
      "Red sesame",
    ],

    sheddingLevel:
      "Heavy seasonal shedding is common. Regular brushing during coat changes helps remove loose undercoat and reduce hair around the home.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Small, well-balanced and muscular body",
      "Small triangular ears held upright and tilted slightly forward",
      "Dark brown, somewhat triangular eyes",
      "Thick tail carried curled or in a sickle shape over the back",
      "Dense double coat",
      "Urajiro pale markings on characteristic areas of the face, underside and limbs",
      "Quick, free and light movement",
    ],
  },

  temperament: {
    traits: [
      "Alert and observant",
      "Loyal to familiar people",
      "Confident and self-possessed",
      "Independent-minded",
      "Active and agile",
      "May show a strong interest in small animals",
      "Can be reserved with unfamiliar people",
      "May be difficult to recall reliably when off lead",
    ],

    // Editorial estimates on a 1–5 scale, not standardised test results.
    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 3,
      independence: 5,
      trainability: 3,
      barking: 3,
      energy: 4,
    },
  },

  care: {
    exercise: {
      level:
        "Moderate to high for a healthy adult, depending on age, health and individual temperament.",

      minutesPerDay: null,

      activities: [
        "Daily walks on a secure lead",
        "Reward-based obedience practice",
        "Scent games and food puzzles",
        "Supervised play",
        "Short training sessions with varied rewards",
        "Exploration in secure, enclosed areas",
      ],
    },

    grooming: {
      level: "Moderate, increasing during seasonal coat changes",

      brushing:
        "Brush or comb the coat regularly, with more frequent sessions when the undercoat is shedding heavily. Gentle brushing helps remove loose hair and gives you an opportunity to check the skin. Introduce grooming gradually, as some Shibas may resist prolonged handling.",

      bathing:
        "Bathe when necessary with a dog-appropriate shampoo and rinse thoroughly. Avoid unnecessary frequent bathing, and dry the coat properly after bathing. Seek professional advice if there is persistent itching, skin irritation or an unusual coat change.",

      notes: [
        "Expect loose undercoat during seasonal shedding.",
        "Introduce brushing, nail care and handling early using rewards.",
        "Check the skin during grooming for irritation, parasites or unusual changes.",
        "Inspect the ears regularly and seek veterinary advice for redness, odour or discharge.",
        "Trim nails as needed.",
        "Brush teeth regularly with dog-specific dental products.",
        "Use a secure lead or enclosed area outdoors because hunting instincts can make off-lead recall unreliable.",
      ],
    },

    training: {
      difficulty:
        "Moderate to challenging for owners who expect consistent off-lead recall or a highly handler-focused dog. Shibas can learn well with rewards, but independence and interest in their surroundings may compete with a cue.",

      tips: [
        "Use reward-based training with clear, consistent cues.",
        "Keep sessions short, engaging and varied.",
        "Practise recall in controlled, enclosed environments before increasing distractions.",
        "Do not rely on off-lead recall in open or unsecured areas.",
        "Reward calm behaviour around people, dogs and everyday sounds.",
        "Use food puzzles and scent games to provide mental engagement.",
        "Teach cooperative handling for brushing, nail trimming and veterinary checks.",
        "Supervise interactions with small animals because the breed was developed for hunting.",
      ],

      socialization:
        "Introduce the puppy gradually and positively to people, calm dogs, handling, household sounds and different environments. Reward relaxed behaviour and give the dog room to disengage when uncomfortable. Continue training throughout adulthood, supervise interactions with children and other animals, and tailor introductions to the individual dog's responses.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Cool and temperate conditions",
        "Cold weather with suitable shelter and monitoring",
        "Warm weather with shade, fresh water and exercise during cooler periods",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate to the dog's life stage, body condition, activity and veterinary needs.",

    feedingFrequency: {
      puppy:
        "Feed a complete puppy diet in age-appropriate meals. Adjust portions as the puppy grows and follow veterinary guidance and the food's feeding instructions.",

      adult:
        "Use measured meals on a consistent schedule. The right amount depends on body condition, activity, age and individual health; some Shibas may be selective eaters while others readily overeat.",

      senior:
        "Choose food and portions according to the older dog's body condition, activity and medical needs. Ask a veterinarian about adjustments when health or mobility changes.",
    },

    guidelines:
      "Measure portions and monitor body condition rather than feeding an unrestricted amount. Keep fresh water available, count training treats as part of the daily food allowance and change foods gradually unless a veterinarian advises otherwise. If weight, skin or digestive concerns persist, seek veterinary guidance.",

    considerations: [
      "Adjust portions to activity, age and body condition.",
      "Avoid excess weight that can add strain to joints.",
      "Keep fresh water available throughout the day.",
      "Count treats and chews as part of the daily food allowance.",
      "Use a diet appropriate to the dog's life stage.",
      "Discuss persistent itching, digestive changes or weight concerns with a veterinarian.",
    ],

    note:
      "This is general canine nutrition guidance, not a Shiba-specific feeding prescription. Exact portions depend on the individual dog.",
  },

  health: {
    overview:
      "Allergies are described as a common concern in Shibas and may cause itching or skin irritation. Breed-club and kennel-club guidance also recommends screening breeding dogs for hip health, eye disorders and patellar luxation. Screening recommendations do not mean every Shiba will develop these problems, and the sources reviewed do not establish reliable prevalence figures for each condition. A veterinarian and a responsible breeder can help interpret family history and the relevance of health tests.",

    commonConditions: [
      "Allergies, which may cause itching and skin irritation.",
      "Hip dysplasia is among the conditions for which breeding dogs are screened.",
      "Eye disorders are among the conditions for which breeding dogs are screened.",
      "Patellar luxation is among the conditions for which breeding dogs are screened.",
    ],

    preventiveCare: [
      "Arrange routine veterinary examinations and age-appropriate preventive care.",
      "Maintain a healthy body condition and suitable daily activity.",
      "Discuss persistent itching, skin changes, mobility problems or changes in vision with a veterinarian.",
      "Ask the breeder for documented health-screening results and information about relevant conditions in the family line.",
      "Use screening recommendations as part of responsible breeding and health planning, not as a guarantee that a dog will remain disease-free.",
    ],

    recommendedScreenings: [
      "Patella evaluation, recommended by the national breed club.",
      "Hip evaluation, recommended by the national breed club.",
      "Ophthalmologist evaluation, recommended by the national breed club.",
    ],

    dentalCare:
      "Brush the teeth regularly with dog-specific toothpaste and a suitable toothbrush. Have the mouth checked during routine veterinary examinations, especially if there is bad breath, discomfort or difficulty eating.",

    earCare:
      "Check the ears regularly for redness, odour, discharge or scratching. Clean only when needed using a dog-safe product, and seek veterinary advice if signs of inflammation occur.",

    skinCare:
      "Check the skin while brushing, especially during seasonal shedding. Seek veterinary advice for persistent itching, redness, recurrent skin irritation or unusual hair loss, as these signs can have different causes.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Owners who enjoy training and interactive enrichment",
      "People prepared to maintain a double coat during seasonal shedding",
      "Households able to provide secure outdoor exercise",
      "Owners willing to manage hunting instincts and off-lead safety",
      "People who appreciate an alert and independent companion",
    ],

    notIdealFor: [
      "Owners who require dependable off-lead recall in open areas",
      "People unwilling to manage seasonal shedding",
      "Households expecting a dog that always responds immediately to commands",
      "Owners unable to provide regular exercise, enrichment and training",
      "Homes that cannot safely manage interactions with small animals",
    ],
  },

  funFacts: [
    "The Shiba has a long history as a Japanese hunting dog for birds and small animals.",
    "The breed was designated a natural monument in Japan in 1937.",
    "The term urajiro describes pale markings found on characteristic areas of the Shiba's coat.",
    "The breed standard describes both hunting and companion roles.",
  ],

  faq: [
    {
      question: "Where does the Shiba Inu come from?",
      answer:
        "The Shiba Inu originated in Japan. It was traditionally used to hunt birds and small animals, particularly in mountainous areas facing the Sea of Japan.",
    },
    {
      question: "How tall is a Shiba Inu?",
      answer:
        "The breed standard lists an ideal height of 39.5 cm for males and 36.5 cm for females, with a tolerance of ±1.5 cm for each.",
    },
    {
      question: "How much does a Shiba Inu weigh?",
      answer:
        "The official standard reviewed for this record does not provide a numeric weight range. The appropriate weight depends on the individual dog's build and body condition.",
    },
    {
      question: "Does a Shiba Inu shed a lot?",
      answer:
        "Yes. Shibas have a dense double coat and can shed heavily during seasonal coat changes. Regular brushing, especially during those periods, helps remove loose undercoat.",
    },
    {
      question: "Is a Shiba Inu easy to train?",
      answer:
        "Shibas can learn well with consistent, reward-based training, but their independent nature and interest in their surroundings can make some tasks, especially recall, challenging. Training should be patient and ongoing.",
    },
    {
      question: "Can a Shiba Inu walk off lead?",
      answer:
        "Off-lead reliability should not be assumed. Because of their hunting background and tendency to follow interesting sights or scents, a secure lead or enclosed area is the safer choice.",
    },
    {
      question: "What health issues should owners know about?",
      answer:
        "Allergies are described as a common concern. Breeding guidance also recommends hip, eye and patella screening. These are health considerations, not a prediction that an individual dog will develop a condition.",
    },
    {
      question: "How long does a Shiba Inu live?",
      answer:
        "A reliable numerical lifespan was not established from the primary sources reviewed for this record, so no specific lifespan range is assigned here.",
    },
  ],

  references: [
    "fci-shiba-inu-standard-257",
    "japan-kennel-club-shiba",
    "american-kennel-club-shiba-inu",
    "akc-coton-de-tulear-health-testing-recommendations",
    "national-shiba-club-health",
    "wikimedia-shiba-inu-howyadointhere",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-shiba-inu-standard-257",
          role: "verified",
          locator: "Standard title: Shiba; Japanese name 柴犬",
        },
        {
          id: "japan-kennel-club-shiba",
          role: "verified",
          locator: "Breed profile title and Japanese breed name",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Uses the standard name and its Japanese form.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The breed standards reviewed do not establish a separate scientific name for this breed.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shiba-inu-standard-257",
          role: "verified",
          locator: "FCI classification: Group 5, Section 5",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Uses the FCI classification.",
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shiba-inu-standard-257",
          role: "verified",
          locator: "Origin and historical summary",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The FCI standard identifies Japan as the country of origin.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shiba-inu-standard-257",
          role: "verified",
          locator: "Origin: Japan",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The breed's history mentions mountainous areas facing the Sea of Japan, but the reviewed standard does not establish a single formal region field suitable for this record.",
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shiba-inu-standard-257",
          role: "verified",
          locator: "Historical summary, utilization, general appearance, temperament and coat",
        },
        {
          id: "japan-kennel-club-shiba",
          role: "verified",
          locator: "Breed history, behaviour, colour and size sections",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Descriptions are original paraphrases of the official breed information.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shiba-inu-standard-257",
          role: "verified",
          locator: "General appearance, coat, colour and size sections",
        },
        {
          id: "japan-kennel-club-shiba",
          role: "verified",
          locator: "General appearance, colour and size sections",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Physical characteristics follow the official standard.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shiba-inu-standard-257",
          role: "verified",
          locator: "Size: males 39.5 cm and females 36.5 cm, each with ±1.5 cm tolerance",
        },
        {
          id: "japan-kennel-club-shiba",
          role: "verified",
          locator: "Size: height at withers, male and female",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The source publishes ideal heights and a tolerance of ±1.5 cm. The stored numeric ranges express those tolerances in the same published unit: male 38–41 cm and female 35–38 cm. No unit conversion is performed.",
    },

    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The reviewed official standards do not provide a numerical weight range.",
    },

    "physical.lifespanYears": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A reliable breed-wide numerical lifespan was not established from the primary sources reviewed.",
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shiba-inu-standard-257",
          role: "verified",
          locator: "Coat: outer coat and undercoat",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shiba-inu-standard-257",
          role: "verified",
          locator: "Coat colour section",
        },
        {
          id: "japan-kennel-club-shiba",
          role: "verified",
          locator: "Coat colour section",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Colours are paraphrased from the official standard.",
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-shiba-inu",
          role: "verified",
          locator: "Grooming section: seasonal shedding and brushing",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Seasonal shedding is described in the breed profile.",
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
          id: "fci-shiba-inu-standard-257",
          role: "verified",
          locator: "Behaviour and temperament",
        },
        {
          id: "japan-kennel-club-shiba",
          role: "verified",
          locator: "Behaviour and character",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Broad breed descriptions are not guarantees about individual dogs.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial 1–5 estimates, not scores from standardised behavioural testing. Individual dogs vary.",
    },

    "care.exercise": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-shiba-inu",
          role: "cited",
          locator: "Exercise and training sections",
        },
      ],
      verifiedOn: null,
      note: "Care suggestions are general guidance informed by the breed's reported activity and hunting background.",
    },

    "care.exercise.level": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial starting point for a healthy adult; individual exercise needs vary.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A single breed-wide daily exercise duration was not established by the reviewed sources.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-shiba-inu-standard-257",
          role: "verified",
          locator: "Coat section",
        },
        {
          id: "american-kennel-club-shiba-inu",
          role: "verified",
          locator: "Grooming section",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The coat type and seasonal shedding are source-backed; detailed instructions are original care guidance.",
    },

    "care.grooming.bathing": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine grooming advice.",
    },

    "care.grooming.notes": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General grooming, hygiene and outdoor-safety guidance.",
    },

    "care.training.difficulty": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-shiba-inu",
          role: "cited",
          locator: "Training section: recall and secure management",
        },
      ],
      verifiedOn: null,
      note: "Practical editorial assessment informed by the breed profile; not a formal training test result.",
    },

    "care.training.tips": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General reward-based training and safety guidance.",
    },

    "care.training.socialization": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General dog socialization advice.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The reviewed sources do not establish a universal apartment-suitability rating.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial suitability estimate. A yard must be secure and does not replace walks or enrichment.",
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General environmental guidance; tolerance depends on individual health and conditions.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A reliable breed-wide tolerance for time alone was not established.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-shiba-inu",
          role: "cited",
          locator: "Nutrition section",
        },
      ],
      verifiedOn: null,
      note: "General canine nutrition guidance, not a breed-specific feeding prescription.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-shiba-inu",
          role: "verified",
          locator: "Health section",
        },
        {
          id: "national-shiba-club-health",
          role: "verified",
          locator: "Health overview and health-testing recommendations",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Health information is presented as screening guidance and reported concerns, not as prevalence estimates or individual diagnosis.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-shiba-inu",
          role: "verified",
          locator: "Health section: allergies, hip health, eye disorders and patella screening",
        },
        {
          id: "national-shiba-club-health",
          role: "verified",
          locator: "Health issues and recommended health testing",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The list distinguishes reported concerns from conditions for which screening is recommended. It does not assert a prevalence rate.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-coton-de-tulear-health-testing-recommendations",
          role: "verified",
          locator: "Non-Sporting Group Health Testing Requirements page, Shiba Inu row: patella, hip and ophthalmologist evaluation",
        },
        {
          id: "national-shiba-club-health",
          role: "verified",
          locator: "Parent-club health testing recommendations",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The AKC testing page is an existing registry entry whose URL is shared by the breed-testing listing; the locator identifies the Shiba Inu row specifically.",
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
      note: "General canine dental-care guidance.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine ear-care guidance.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General skin-care advice; persistent itching or irritation requires veterinary assessment.",
    },

    suitability: {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial lifestyle guidance based on the breed's independence, hunting background and grooming needs; not a validated suitability test.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal first-time-owner rating is not established and depends on the owner and individual dog.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal family-with-children rating is not established; temperament, socialization and supervision matter.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability for senior owners depends on the dog's needs and the owner's circumstances.",
    },

    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial estimate that owners able to provide regular engagement may be a good match.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal apartment-living rating was not established by the reviewed sources.",
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shiba-inu-standard-257",
          role: "verified",
          locator: "Historical summary and utilization",
        },
        {
          id: "japan-kennel-club-shiba",
          role: "verified",
          locator: "Breed history and coat colour",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Facts are paraphrased from the breed standard and national kennel-club profile.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-shiba-inu-standard-257",
          role: "verified",
          locator: "Origin, historical summary, utilization, coat and size",
        },
        {
          id: "american-kennel-club-shiba-inu",
          role: "verified",
          locator: "Health, grooming, exercise and training",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Answers distinguish standard facts from health and care guidance.",
    },
  },

  updatedOn: "2026-10-25",
};
