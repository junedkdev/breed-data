import type { Breed } from "../schema/breed.types";

export const yorkshire_terrier: Breed = {
  slug: "yorkshire-terrier",
  name: "Yorkshire Terrier",
  scientificName: null,
  alternateNames: ["Yorkie"],
  group: "Toy Group",

  origin: {
    country: "Great Britain",
    region: "Yorkshire, England",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Yorkshire_Terrier_dog.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Yorkshire_Terrier_dog.jpg",
      title: "Yorkshire Terrier dog.jpg",
      description: "Yorkshire Terrier photographed by its original creator.",
      creator: "MASAHARU TAKWMORI",
      uploader: "MASAHARU TAKWMORI",
      capturedOn: "2015-12-04",
      uploadedOn: "2015-12-05",
      width: 650,
      height: 904,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by MASAHARU TAKWMORI, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Changes, if any, must be indicated. Adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-22",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Yorkshire_terrier_dog_04.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Yorkshire_terrier_dog_04.jpg",
      title: "Yorkshire terrier dog 04.jpg",
      description: "Yorkshire Terrier photographed outdoors.",
      creator: "Roxyuru",
      uploader: "Roxyuru",
      capturedOn: "2020-02-05",
      uploadedOn: "2020-03-09",
      width: 4032,
      height: 3024,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Roxyuru, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Changes, if any, must be indicated. Adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-22",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Yorkshire_terrier_dog_01.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Yorkshire_terrier_dog_01.jpg",
      title: "Yorkshire terrier dog 01.jpg",
      description: "Yorkshire Terrier photographed by its original creator.",
      creator: "Roxyuru",
      uploader: "Roxyuru",
      capturedOn: "2020-02-05",
      uploadedOn: null,
      width: 3024,
      height: 4032,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Roxyuru, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Changes, if any, must be indicated. Adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-22",
    },
  ],

  overview: {
    summary:
      "The Yorkshire Terrier is a tiny, confident terrier with a long, silky coat and an alert, lively personality. Although now widely kept as a companion, it retains the curiosity, determination, and quick responses associated with its working-terrier ancestry.",

    description:
      "Yorkshire Terriers have a compact frame, upright V-shaped ears, dark expressive eyes, and a long coat that is traditionally parted along the back. The adult coat is typically steel blue over the body with rich tan on the head and legs; puppies are generally born darker and change as they mature. Their small size makes them adaptable to many homes, but they still need daily activity, mental engagement, patient training, and careful handling. Regular grooming and dental care are important parts of responsible ownership.",

    history:
      "The breed developed in nineteenth-century northern England, especially around Yorkshire, where small terriers were used to control rats in mills and other working environments. Several small terrier types contributed to its development. Over time, the Yorkshire Terrier became increasingly popular as a companion and show dog. Its appearance became more refined, but the lively and determined character associated with terriers remains evident.",

    originalPurpose:
      "Small working terrier used primarily for controlling rats and other vermin in mills and similar settings.",

    currentRoles: [
      "Companion dog",
      "Conformation show dog",
      "Obedience and trick-training participant",
      "Small-dog sports participant where suitable for the individual dog",
    ],
  },

  physical: {
    sizeCategory: "Toy",

    height: {
      unit: "cm",
      male: {
        min: 17.8,
        max: 20.3,
      },
      female: {
        min: 17.8,
        max: 20.3,
      },
    },

    weight: {
      unit: "kg",
      male: {
        min: null,
        max: 3.18,
      },
      female: {
        min: null,
        max: 3.18,
      },
    },

    lifespanYears: {
      min: 11,
      max: 15,
    },

    coatType:
      "Long, fine, glossy, silky coat; the standard describes a straight outer coat and does not specify a dense woolly undercoat.",

    coatLength:
      "The coat can grow long and hang evenly down both sides of the body, with a long fall on the head. Many companion dogs have a shorter practical trim.",

    coatColors: [
      "Blue and tan",
      "Blue and gold",
      "Black and tan in puppies before the adult coat develops",
      "Black and gold in puppies before the adult coat develops",
    ],

    sheddingLevel:
      "Often described as low-shedding, but loose hair and coat-care needs vary between individuals and grooming styles.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Very small, compact body with an alert, confident carriage.",
      "Small V-shaped ears that are carried erect.",
      "Dark, alert eyes and a black nose.",
      "Long, fine, silky coat parted along the back.",
      "Adult coat usually combines steel blue on the body with tan or gold on the head and legs.",
      "Puppy coat is generally darker and changes during maturation.",
    ],
  },

  temperament: {
    traits: [
      "Alert and observant.",
      "Lively and playful.",
      "Confident despite small size.",
      "Affectionate with familiar people.",
      "Intelligent and capable of learning routines.",
      "May be vocal when excited or alerting to sounds.",
      "Can show independence and persistent terrier instincts.",
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
      energy: 3,
    },
  },

  care: {
    exercise: {
      level:
        "Moderate for a toy breed. Daily walks, play, and short training activities are useful; activity should be adjusted for age, health, weather, and individual stamina.",

      minutesPerDay: null,

      activities: [
        "Short daily walks on a well-fitted harness or leash.",
        "Indoor games and supervised play.",
        "Reward-based obedience and trick training.",
        "Scent games and food puzzles.",
        "Age-appropriate activities in a secure area.",
      ],
    },

    grooming: {
      level:
        "Moderate to high, especially when the coat is kept long.",

      brushing:
        "Brush and comb frequently, ideally daily for a long show-style coat, to reduce tangles and mats. Work gently through the coat and pay attention to friction areas such as behind the ears, under the legs, and around the harness.",

      bathing:
        "Bathe as needed with a dog-appropriate shampoo and dry the coat thoroughly. Long coats need careful detangling before and after bathing to avoid tightening knots.",

      notes: [
        "A shorter companion trim can reduce day-to-day coat maintenance.",
        "Inspect the skin while parting the coat, since long hair can conceal irritation or debris.",
        "Keep hair around the eyes clean and avoid letting tangles pull at the skin.",
        "Check ears, nails, and paws regularly.",
        "Introduce brushing and handling early with short, positive sessions.",
      ],
    },

    training: {
      difficulty:
        "Moderate. The breed is intelligent and responsive but may be persistent or distracted by interesting sounds and movement.",

      tips: [
        "Use reward-based training with small treats and clear cues.",
        "Keep sessions brief and engaging.",
        "Teach calm behaviour and a reliable response to attention cues.",
        "Reward quiet behaviour rather than reinforcing alert barking.",
        "Practise recall in secure areas before adding distractions.",
        "Teach cooperative handling for brushing, tooth care, and veterinary checks.",
      ],

      socialization:
        "Provide gradual, positive exposure to different people, sounds, surfaces, and calm dogs. Supervise interactions with children and larger dogs because the Yorkshire Terrier's small size makes accidental injury possible.",
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates.",
        "Warm weather with shade, fresh water, and activity scheduled around cooler periods.",
        "Cool weather with appropriate protection when needed.",
      ],

      aloneTimeTolerance:
        "Variable. Gradually teach comfortable alone time and provide safe enrichment; do not assume that every individual will tolerate long periods without company.",
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced diet appropriate to the dog's life stage, size, activity, and health. Home-prepared diets should be formulated with veterinary nutritional guidance.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Measure portions and adjust them according to growth, body condition, and veterinary advice. Toy breeds have small energy reserves, so young puppies may need especially careful meal scheduling. Keep fresh water available and avoid excessive treats.",

    considerations: [
      "Choose food appropriate to the dog's life stage and small size.",
      "Monitor body condition rather than relying only on package feeding charts.",
      "Keep treats small and count them toward the daily food allowance.",
      "Ask a veterinarian about feeding schedules for very young or underweight puppies.",
      "Avoid starting supplements or restrictive diets without professional advice.",
    ],

    note:
      "The consulted sources do not establish one universally appropriate number of meals or calorie target for all Yorkshire Terriers; requirements vary with age, weight, activity, and health.",
  },

  health: {
    overview:
      "Yorkshire Terriers can live long lives, but some conditions deserve attention when choosing a puppy and planning preventive care. Breed-club recommendations include patella and eye evaluations for breeding dogs. Other conditions reported in veterinary and breed-health resources include dental disease, tracheal collapse, bladder stones, progressive retinal atrophy, lens luxation, liver shunt, and certain gastrointestinal or neurologic disorders. These conditions vary in evidence and frequency; this list is not a prediction about an individual dog.",

    commonConditions: [
      "Patellar luxation: displacement of the kneecap, which may cause intermittent lameness or altered movement.",
      "Dental disease: small jaws and crowded teeth can make regular home dental care and veterinary checks especially important.",
      "Tracheal collapse: a disorder affecting the windpipe that may cause coughing or breathing difficulty and requires veterinary assessment.",
      "Bladder stones: mineral stones can cause urinary signs and need veterinary diagnosis and treatment.",
      "Progressive retinal atrophy: an inherited retinal condition that can lead to progressive vision loss.",
      "Lens luxation and other eye disorders: eye symptoms should be assessed promptly by a veterinarian.",
      "Liver shunt and microvascular dysplasia: vascular liver conditions discussed in breed health resources.",
      "Other reported concerns include protein-losing enteropathy, encephalitis, degenerative myelopathy, and Legg-Calvé-Perthes disease; evidence and risk differ by condition.",
    ],

    preventiveCare: [
      "Schedule routine veterinary examinations and discuss any changes in movement, coughing, urination, vision, appetite, or energy.",
      "Brush teeth regularly with dog-appropriate products and arrange veterinary dental checks.",
      "Avoid encouraging repeated high jumps, especially in puppies, and handle the dog carefully.",
      "Maintain a healthy body condition and age-appropriate exercise.",
      "Ask breeders for documented health information on the parents and close relatives.",
      "Discuss breed-relevant screening with a veterinarian before breeding or when evaluating a puppy.",
    ],

    recommendedScreenings: [
      "Patella evaluation for breeding dogs, following the breed club's recommended protocol.",
      "Ophthalmologist evaluation for breeding dogs, following the breed club's recommended protocol.",
      "Discuss optional genetic testing for progressive retinal atrophy (PRA-prcd) and primary lens luxation with the breeder and veterinarian.",
      "Discuss liver shunt, microvascular dysplasia, and other family-history concerns when relevant; testing decisions should be based on veterinary advice.",
    ],

    dentalCare:
      "Brush teeth frequently using dog-safe toothpaste and a suitable brush. Small breeds can develop dental problems, so schedule veterinary oral checks and follow recommendations for professional cleaning.",

    earCare:
      "Inspect the ears routinely for redness, odour, discharge, or persistent scratching. Clean only with appropriate products and seek veterinary advice if irritation develops.",

    skinCare:
      "Part the coat during grooming to check for redness, parasites, sores, or mats. Persistent itching, hair loss, or recurring skin changes should be assessed by a veterinarian.",
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Owners looking for a small, lively companion.",
      "Households able to provide regular grooming and dental care.",
      "People who enjoy short training sessions and interactive play.",
      "Homes that can supervise interactions with young children and larger animals.",
    ],

    notIdealFor: [
      "Owners wanting a coat that needs little maintenance.",
      "Households unable to provide gentle handling and supervision.",
      "People expecting a small dog to need no training or exercise.",
      "Owners who cannot arrange veterinary care when small-dog health concerns arise.",
    ],
  },

  funFacts: [
    "The breed developed in nineteenth-century northern England, where small terriers worked in mills and similar settings.",
    "The Yorkshire Terrier's adult coat typically changes substantially from the darker puppy coat.",
    "The long coat is traditionally parted along the back.",
    "Despite its toy size, the breed retains the alertness and determination associated with terriers.",
  ],

  faq: [
    {
      question: "How big does a Yorkshire Terrier get?",
      answer:
        "The AKC standard sets a maximum weight of seven pounds, approximately 3.18 kg. The AKC breed profile lists a typical height of about 7–8 inches. Individual dogs can vary, and these profile figures should not replace veterinary assessment of healthy growth.",
    },
    {
      question: "How long does a Yorkshire Terrier live?",
      answer:
        "The AKC profile lists a life expectancy of 11–15 years. Longevity varies with genetics, preventive care, body condition, and the dog's individual health.",
    },
    {
      question: "Does a Yorkshire Terrier need daily grooming?",
      answer:
        "A long coat benefits from frequent, often daily, brushing to prevent tangles and mats. A shorter companion trim can reduce the time required, but regular coat, skin, ear, nail, and dental care are still needed.",
    },
    {
      question: "Are Yorkshire Terriers good with children?",
      answer:
        "They can live with considerate children, but their small size makes them vulnerable to accidental injury. Teach children to handle the dog gently and supervise all interactions, especially with very young children.",
    },
    {
      question: "What health checks should I ask a breeder about?",
      answer:
        "Ask for patella and eye screening information for the parents, and discuss family history of inherited eye disease and other conditions with the breeder and veterinarian. Screening reduces uncertainty but cannot guarantee that a puppy will never develop a health problem.",
    },
    {
      question: "Can a Yorkshire Terrier live in an apartment?",
      answer:
        "Yes, apartment living can suit the breed when daily walks, indoor play, training, grooming, and toilet routines are provided. The individual dog's needs and the household routine still matter.",
    },
  ],

  references: [
    "american-kennel-club-yorkshire-terrier",
    "american-kennel-club-yorkshire-terrier-standard",
    "fci-yorkshire-terrier-standard",
    "yorkshire-terrier-club-of-america-health-statement",
    "pdsa-yorkshire-terrier-health",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific scientific name was needed for this record, and the consulted breed sources do not establish a distinct taxonomic name.",
    },

    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "Breed name and profile",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "Yorkie is a commonly used informal short name.",
    },

    group: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "Breed group classification",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "The AKC classifies the Yorkshire Terrier in the Toy Group.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-yorkshire-terrier-standard",
          role: "verified",
          locator: "Country of origin",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "The current FCI nomenclature lists Great Britain as the country of origin.",
    },

    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "About the Breed",
        },
        {
          id: "american-kennel-club-yorkshire-terrier-standard",
          role: "verified",
          locator: "Historical and breed description",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "Breed history associates development with Yorkshire in northern England.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "About the Breed; What to Expect When Caring for a Yorkshire Terrier",
        },
        {
          id: "american-kennel-club-yorkshire-terrier-standard",
          role: "verified",
          locator: "General Appearance; Coat; Colors",
        },
        {
          id: "fci-yorkshire-terrier-standard",
          role: "verified",
          locator: "Breed classification and historical standard listing",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "Overview text is original wording based on the breed profile and standards.",
    },

    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "cited",
          locator: "Height and weight",
        },
      ],
      verifiedOn: null,
      note: "Toy is a practical size label; the schema stores it as display text.",
    },

    "physical.height": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "Average sizes and life expectancy",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "The AKC profile lists height as 7–8 inches; converted to centimetres. The profile does not provide sex-specific height ranges, so the same range is recorded for both sexes.",
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier-standard",
          role: "verified",
          locator: "Weight",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "The AKC standard states that weight must not exceed seven pounds, converted to approximately 3.18 kg. It does not set a minimum or a sex-specific maximum.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "Average sizes and life expectancy",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "The AKC profile lists life expectancy as 11–15 years.",
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "Coat description paraphrases the official standard.",
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "The standard describes the long, straight coat and its parting.",
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier-standard",
          role: "verified",
          locator: "Colors",
        },
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "Breed colors and markings",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "Color entries distinguish adult standard coloration from darker puppy coloration and AKC registration descriptions.",
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "cited",
          locator: "Coat and grooming",
        },
      ],
      verifiedOn: null,
      note: "A qualitative low-shedding description is not a measured breed-wide value.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling measurement was found; the value is left absent.",
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier-standard",
          role: "verified",
          locator: "General Appearance; Head; Coat; Colors",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "Features are paraphrased from the official breed standard.",
    },

    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "Breed Traits and Characteristics",
        },
        {
          id: "fci-yorkshire-terrier-standard",
          role: "verified",
          locator: "Behaviour and Temperament",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "These are general breed tendencies, not a guarantee of individual temperament.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "cited",
          locator: "Breed Traits and Characteristics",
        },
      ],
      verifiedOn: null,
      note: "Scores are editorial 1–5 estimates for app comparison, not validated behavioural test results or official standard values.",
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "What to Expect When Caring for a Yorkshire Terrier",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "Exercise advice is based on the breed profile and adapted for individual variation.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The consulted sources do not establish one reliable universal daily exercise-minute target.",
    },

    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "cited",
          locator: "Exercise and training guidance",
        },
      ],
      verifiedOn: null,
      note: "These are practical activity suggestions, not an official required exercise protocol.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "Grooming",
        },
        {
          id: "american-kennel-club-yorkshire-terrier-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "Grooming guidance is based on the coat's texture and length.",
    },

    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "Training and breed characteristics",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "Training recommendations are adapted into original wording.",
    },

    "care.livingEnvironment": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "cited",
          locator: "Size, exercise, and care",
        },
      ],
      verifiedOn: null,
      note: "Environment suitability is an editorial estimate, not an official certification.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "pdsa-yorkshire-terrier-health",
          role: "cited",
          locator: "General care guidance",
        },
      ],
      verifiedOn: null,
      note: "Nutrition advice is general guidance and should be tailored to the individual dog.",
    },

    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No single breed-specific puppy meal frequency was established from the consulted sources.",
    },

    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No single breed-specific adult meal frequency was established from the consulted sources.",
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No single breed-specific senior meal frequency was established from the consulted sources.",
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "yorkshire-terrier-club-of-america-health-statement",
          role: "verified",
          locator: "Recommended health screenings and additional conditions",
        },
        {
          id: "pdsa-yorkshire-terrier-health",
          role: "verified",
          locator: "Breed-related health problems",
        },
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "Health; Recommended Health Tests From the National Breed Club",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "Health overview distinguishes recommended screening from conditions reported as possible breed concerns.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "yorkshire-terrier-club-of-america-health-statement",
          role: "verified",
          locator: "Recommended screening; additional conditions",
        },
        {
          id: "pdsa-yorkshire-terrier-health",
          role: "verified",
          locator: "Breed-related health problems",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "This list combines veterinary and breed-club guidance; it does not assert prevalence or predict disease in an individual.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "cited",
          locator: "Health and care guidance",
        },
        {
          id: "yorkshire-terrier-club-of-america-health-statement",
          role: "cited",
          locator: "Recommended health screenings",
        },
      ],
      verifiedOn: null,
      note: "Preventive-care steps are general recommendations and do not replace veterinary advice.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "yorkshire-terrier-club-of-america-health-statement",
          role: "verified",
          locator: "Recommended physical health screenings and optional genetic tests",
        },
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "Recommended Health Tests From the National Breed Club",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "The club recommends patella and eye evaluations for breeding stock and discusses optional genetic testing; applicability should be confirmed with the breeder and veterinarian.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "yorkshire-terrier-club-of-america-health-statement",
          role: "cited",
          locator: "Dental maintenance",
        },
      ],
      verifiedOn: null,
      note: "Dental care advice is preventive guidance, not a diagnosis.",
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
      note: "General canine skin and coat-care guidance.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "cited",
          locator: "Breed traits, grooming, and exercise",
        },
        {
          id: "pdsa-yorkshire-terrier-health",
          role: "cited",
          locator: "Suitability around children and care",
        },
      ],
      verifiedOn: null,
      note: "Suitability values are editorial estimates and depend on training, socialization, supervision, and individual temperament.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "About the Breed",
        },
        {
          id: "american-kennel-club-yorkshire-terrier-standard",
          role: "verified",
          locator: "General Appearance; Coat; Colors",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "Facts are paraphrased from breed history and standard material.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "Breed profile; health; grooming",
        },
        {
          id: "yorkshire-terrier-club-of-america-health-statement",
          role: "verified",
          locator: "Health screening recommendations",
        },
        {
          id: "pdsa-yorkshire-terrier-health",
          role: "verified",
          locator: "Health and suitability",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "FAQ answers summarise the breed and care information in original wording.",
    },
  },

  updatedOn: "2026-10-22",
};
