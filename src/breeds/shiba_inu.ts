import type { Breed } from "../schema/breed.types";

export const shiba_inu: Breed = {
  slug: "shiba-inu",
  name: "Shiba Inu",
  scientificName: null,
  alternateNames: ["Shiba", "柴犬"],
  group: "Spitz and Primitive Types; Asian Spitz and Related Breeds",

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
      metadataCheckedOn: "2026-11-10",
    },
  ],

  overview: {
    summary:
      "The Shiba Inu is a compact, spirited Japanese spitz breed historically developed to hunt small game and birds across rugged mountainous regions. Recognised for its prick triangular ears, fox-like wedge head, dense double coat, and tightly curled tail, it displays an independent, confident, and dignified temperament. While devoted and affectionate with its immediate household, its keen prey drive and autonomous nature require patient, reward-based training and secure outdoor management.",

    description:
      "Muscular, compact, and quick on its feet, the Shiba Inu exhibits harmonious proportions and effortless, light-footed movement. Its outer coat is harsh and straight, standing off from the body over a soft, insulating undercoat, complemented by a thick brush tail carried proudly curled or arched over the back. Permitted colourings include red, black and tan, and sesame varieties, characterised by pale urajiro markings on the muzzle, cheeks, chest, underbelly, and inner legs. While deeply loyal and fastidiously clean within the home, the breed possesses an independent working spirit that responds best to consistent positive reinforcement rather than rigid drills. Daily physical walks, scent enrichment, and routine double-coat care during seasonal shedding keep this historic Japanese companion healthy and engaged.",

    history:
      "The Shiba Inu represents the smallest and oldest of Japan's native Spitz breeds, tracing its heritage to ancient hunting canines that inhabited mountainous regions facing the Sea of Japan. Traditionally prized for flushing game birds and tracking small quarry through dense brushwood, regional populations historically developed subtle differences across the San'in, Mino, and Shinshu strains. Following near-extinction during the early twentieth century and post-war hardships, dedicated Japanese breed preservationists consolidated surviving bloodlines, establishing unified breed criteria in 1934. In 1937, the Japanese government designated the Shiba Inu as a protected national natural monument, safeguarding the breed's cultural legacy and distinctive characteristics for modern generations.",

    originalPurpose:
      "Flushing and hunting game birds and small mammals in rugged mountain terrain, as well as serving as a watchful farmstead companion.",

    currentRoles: [
      "Devoted companion dog",
      "Agility, rally, and obedience participant",
      "Scent games, nose work, and problem-solving enrichment",
      "Conformation exhibition",
      "Active leashed outdoor companion",
    ],
  },

  physical: {
    sizeCategory: "Small, compact, and muscular",

    height: {
      unit: "cm",
      male: { min: 38, max: 41 },
      female: { min: 35, max: 38 },
    },

    weight: {
      unit: null,
      male: null,
      female: null,
    },

    lifespanYears: null,

    coatType:
      "Double coat with harsh, straight outer coat and soft, dense undercoat",

    coatLength:
      "Short to medium over the body, with slightly longer, stand-off hair forming a plume on the tail.",

    coatColors: [
      "Red",
      "Black and tan",
      "Sesame",
      "Black sesame",
      "Red sesame",
    ],

    sheddingLevel:
      "Heavy seasonal shedding, with significant undercoat release occurring during biannual coat blow.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Compact, well-muscled, and square-proportioned spitz outline",
      "Small, triangular prick ears tilted forward in line with the neck",
      "Dark brown, almond-shaped triangular eyes with spirited expression",
      "Thick, high-set tail carried curled or sickle-arched over the loin",
      "Dense, weather-resistant double coat with straight outer guard hairs",
      "Characteristic urajiro (whitish-to-cream markings) on the muzzle, cheeks, throat, chest, belly, and inner legs",
      "Light, springy, and effortless trotting gait",
    ],
  },

  temperament: {
    traits: [
      "Alert and watchful",
      "Spirited and bold",
      "Independent",
      "Loyal to familiar handlers",
      "Confident and dignified",
      "Strong prey drive",
      "Reserved with strangers",
      "Fastidiously clean",
    ],

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
      level: "Moderate to high",

      minutesPerDay: null,

      activities: [
        "Daily leashed walks and neighbourhood scent exploration",
        "Structured tracking games, search puzzles, and nose work",
        "Interactive games of fetch and flirt-pole chase in secure yards",
        "Short, engaging trick training and positive obedience sessions",
        "Agility and obstacle navigation in enclosed arenas",
      ],
    },

    grooming: {
      level: "Moderate, increasing during seasonal coat changes",

      brushing:
        "Brush weekly with a slicker brush and metal greyhound comb to remove loose hair and distribute natural oils. Increase brushing to daily sessions during seasonal shedding blowouts to lift heavy dead undercoat.",

      bathing:
        "Bathe occasionally only when soiled using a gentle, hypoallergenic dog shampoo. The naturally clean, water-repellent coat requires thorough rinsing and complete drying of the dense undercoat.",

      notes: [
        "Expect substantial loose undercoat release during spring and autumn coat blowouts.",
        "Introduce cooperative handling, ear cleaning, and paw touch early using positive reinforcement.",
        "Trim nails every two to three weeks to prevent foot discomfort and maintain correct upright stance.",
        "Brush teeth several times weekly using canine-formulated toothpaste.",
        "Maintain strict leash management in unfenced areas due to high chasing drive and selective recall.",
      ],
    },

    training: {
      difficulty:
        "Moderate to challenging. Highly intelligent and quick to learn, but strong independence and self-direction require creative, positive, and patient training.",

      tips: [
        "Utilise high-value food rewards and interactive toy play to maintain motivation.",
        "Keep training intervals brief, upbeat, and mentally engaging to avoid stubborn disinterest.",
        "Do not rely on off-leash recall in open country, as scent and visual prey triggers override training.",
        "Practice calm greeting routines and polite leash manners consistently from puppyhood.",
        "Channel prey drive into structured flirt-pole games and scent-work puzzles.",
      ],

      socialization:
        "Comprehensive early socialisation across diverse environments, novel sounds, calm adult dogs, and unfamiliar people fosters a composed, confident adult temperament.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Well-adapted to cool and temperate environments where the double coat provides thermal balance.",
        "Tolerates cold winter conditions well when active and provided with insulated indoor shelter.",
        "Requires access to shade, air conditioning, and fresh water during hot summer periods to avoid heat stress.",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "High-quality commercial or balanced prepared diet formulated for active, small-to-medium breeds.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Provide carefully measured daily rations divided into regular meals. Regularly evaluate body condition score and adjust caloric intake to prevent excess weight gain.",

    considerations: [
      "Monitor weight closely to avoid obesity, which places unnecessary strain on patellar and hip joints.",
      "Account for training treats within the total daily caloric allowance.",
      "Provide constant access to clean, fresh drinking water throughout the day.",
      "Consult a veterinarian regarding potential dietary adjustments if chronic skin allergies or digestive sensitivities occur.",
    ],

    note:
      "General canine nutritional guidance; individual feeding plans should be established with a veterinarian or veterinary clinical nutritionist.",
  },

  health: {
    overview:
      "Allergic dermatitis represents a documented health concern in the breed, manifesting as chronic pruritus and skin inflammation. Veterinary health guidelines and parent club monitoring also recommend diagnostic screening for hip dysplasia, inherited ocular conditions, and patellar luxation. These screening protocols reflect proactive health management rather than certainty of disease. Prospective owners should review parental diagnostic certificates with a veterinarian.",

    commonConditions: [
      "Atopic and environmental allergies — immune-mediated skin reactions causing pruritus, licking, and secondary dermatitis.",
      "Patellar luxation — congenital or developmental dislocation of the kneecap requiring orthopedic monitoring.",
      "Hip dysplasia — abnormal hip joint conformation evaluated through radiographic screening.",
      "Inherited eye disorders — including progressive retinal atrophy, cataracts, and primary open-angle glaucoma.",
    ],

    preventiveCare: [
      "Annual comprehensive physical examinations, core vaccinations, and routine parasite prophylaxis.",
      "Verifying that parent dogs possess passing orthopedic and ophthalmological screening clearances.",
      "Regular skin and ear inspections for early detection of allergic flares or secondary infections.",
      "Maintaining lean body condition to minimize orthopedic joint stress.",
      "Prompt veterinary assessment for persistent paw chewing, head shaking, or changes in gait.",
    ],

    recommendedScreenings: [
      "Clinical patellar evaluation by a qualified veterinarian to screen for luxation.",
      "Radiographic hip evaluation to assess joint conformation.",
      "Comprehensive ophthalmic evaluation by a board-certified veterinary ophthalmologist.",
    ],

    dentalCare:
      "Routine home toothbrushing several times weekly using canine toothpaste, combined with periodic professional dental cleanings as recommended by a veterinarian.",

    earCare:
      "Regular inspection of erect ears for wax buildup or irritation, cleaning gently with a veterinarian-approved ear cleaner when indicated.",

    skinCare:
      "Weekly coat parting during brushing to examine the skin for redness, hot spots, or flea dirt, seeking veterinary allergy testing if persistent scratching occurs.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Handlers who value an intelligent, independent, and dignified companion",
      "Active owners committed to daily leashed exercise and mental enrichment",
      "Households dedicated to regular double-coat brushing and seasonal shedding management",
      "Homes with securely fenced outdoor yards and strict off-leash safety awareness",
    ],

    notIdealFor: [
      "Owners expecting immediate, eager-to-please obedience or off-leash recall reliability",
      "Households intolerant of substantial seasonal hair shedding",
      "Homes where small prey animals are kept without secure separation",
      "Owners unable to provide consistent, patient, reward-based leadership",
    ],
  },

  funFacts: [
    "The Shiba Inu is the smallest and most ancient of the six native Japanese spitz breeds.",
    "The breed was designated an official natural monument of Japan in 1937 to protect its heritage.",
    "The distinctive term urajiro refers to the characteristic white-to-cream markings on the face, chest, underbelly, and tail underside.",
    "Traditionally valued for hunting game birds and small mammals in mountain thickets, the breed has transitioned seamlessly into a celebrated companion dog.",
    "Many Shibas produce a distinct high-pitched vocalisation known as the Shiba scream when excited, vocal, or protesting handling.",
  ],

  faq: [
    {
      question: "Where did the Shiba Inu originate?",
      answer:
        "The Shiba Inu originated in the rugged mountainous regions of central Japan facing the Sea of Japan, where it served as a versatile hunting companion for birds and small game.",
    },
    {
      question: "How tall is a Shiba Inu?",
      answer:
        "Ideal height at the withers is 39.5 cm for males and 36.5 cm for females, with an accepted tolerance of 1.5 cm above or below these figures (yielding 38–41 cm for males and 35–38 cm for females).",
    },
    {
      question: "How much does a Shiba Inu weigh?",
      answer:
        "Country-of-origin cynological documentation does not prescribe a formal weight bracket. General veterinary consensus and kennel profiles cite typical adult weights of 8 to 11 kg for males and 7 to 9 kg for females, depending on bone structure and athletic conditioning.",
    },
    {
      question: "Does the Shiba Inu shed heavily?",
      answer:
        "Yes. The breed possesses a dense double coat that sheds moderately year-round and undergoes intense seasonal coat blowouts twice a year, during which daily brushing is recommended.",
    },
    {
      question: "Is the Shiba Inu easy to train?",
      answer:
        "Shibas are exceptionally intelligent but independent and self-directed. They excel with patient, positive reinforcement training but can become bored or uncooperative with harsh or repetitive methods.",
    },
    {
      question: "Can a Shiba Inu be trusted off leash?",
      answer:
        "Off-leash reliability is generally not recommended in unconfined areas. Because of their ancient hunting instincts, rapid acceleration, and strong prey drive, they are prone to pursuing wildlife regardless of recall calls.",
    },
    {
      question: "What are common health concerns in the breed?",
      answer:
        "Allergic dermatitis, patellar luxation, and hip dysplasia are documented concerns. Responsible breeders perform diagnostic ophthalmic, patellar, and radiographic hip screenings on parent dogs.",
    },
    {
      question: "What is the life expectancy of a Shiba Inu?",
      answer:
        "A reliable breed-wide numerical lifespan was not established from the primary sources reviewed for this record, so no specific lifespan range is assigned here.",
    },
  ],

  references: [
    "fci-shiba-inu-standard-257",
    "japan-kennel-club-shiba",
    "american-kennel-club-shiba-inu",
    "akc-coton-de-tulear-health-testing-recommendations",
    "national-shiba-club-health",
    "wikimedia-shiba-inu-howyadointhere",
    "the-dog-api",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
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
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names: Shiba",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Uses the standard name and its Japanese form.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Standard cynological taxonomy classifies domestic dogs as Canis lupus familiaris; no unique taxonomic name applies specifically to this breed.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-shiba-inu-standard-257",
          role: "verified",
          locator: "FCI classification: Group 5, Section 5 Asian Spitz and related breeds",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Uses the Asian Spitz classification.",
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
      verifiedOn: "2026-11-10",
      note: "The official standard identifies Japan as the country of origin.",
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
      verifiedOn: "2026-11-10",
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
      verifiedOn: "2026-11-10",
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
      verifiedOn: "2026-11-10",
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
      verifiedOn: "2026-11-10",
      note: "The source publishes ideal heights and a tolerance of ±1.5 cm. The stored numeric ranges express those tolerances in the same published unit: male 38–41 cm and female 35–38 cm. No unit conversion is performed.",
    },

    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The reviewed official standards do not provide a numerical weight range. The Dog API lists an empirical range of 8–11 kg for males and 7–9 kg for females, but these figures remain uncodified.",
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
      verifiedOn: "2026-11-10",
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
      verifiedOn: "2026-11-10",
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
      verifiedOn: "2026-11-10",
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
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-10",
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
      verifiedOn: "2026-11-10",
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

    "nutrition": {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Nutritional assessment guidelines and body condition scoring",
        },
      ],
      verifiedOn: null,
      note: "Nutritional recommendations follow WSAVA global veterinary guidelines for canine body condition and life stage feeding.",
    },

    "nutrition.feedingFrequency": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Feeding frequency and portion sizes vary according to individual age, metabolism, and veterinary guidance.",
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
      verifiedOn: "2026-11-10",
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
      verifiedOn: "2026-11-10",
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
      verifiedOn: "2026-11-10",
      note: "The health testing requirements page lists patella, hip, and ophthalmologist evaluations recommended by the parent club.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive veterinary care guidance.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "Home dental prophylaxis and regular professional cleanings",
        },
      ],
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
      verifiedOn: "2026-11-10",
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
      verifiedOn: "2026-11-10",
      note: "Answers distinguish standard facts from health and care guidance.",
    },
  },

  updatedOn: "2026-11-10",
};
