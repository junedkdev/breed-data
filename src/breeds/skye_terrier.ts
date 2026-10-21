import type { Breed } from "../schema/breed.types";

export const skye_terrier: Breed = {
  slug: "skye-terrier",
  name: "Skye Terrier",
  scientificName: null,
  alternateNames: [],
  group: "Terrier Group",

  origin: {
    country: "United Kingdom",
    region: "Isle of Skye, Inner Hebrides, Scotland",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Skye_terrier_865.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Skye_terrier_865.jpg",
      title: "Skye terrier 865.jpg",
      description: "Skye Terrier photographed at a dog show in Katowice, Poland.",
      creator: "Pleple2000",
      uploader: "Pleple2000",
      capturedOn: "2007-03-16",
      uploadedOn: null,
      width: 1804,
      height: 1012,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Pleple2000, via Wikimedia Commons, CC BY-SA 3.0. Changes, if any, must be indicated. Adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
  ],

  overview: {
    summary:
      "The Skye Terrier is a sturdy, low-set Scottish terrier known for its long, straight coat, strong attachment to its family, and independent character. Though relatively short in stature, it has substantial bone, a long body, and the courage of a traditional working terrier.",

    description:
      "The Skye Terrier has a distinctive long-and-low outline, short muscular legs, a deep body, and a straight double coat that falls along both sides. Long hair frames the head and may partly cover the eyes; the ears can be erect or drop-eared. The breed is generally loyal and sensitive with its household, while often reserved around unfamiliar people. It benefits from consistent reward-based training, regular coat care, daily activity, and careful management during puppy growth because of its long-backed structure.",

    history:
      "The breed developed on Scotland's Isle of Skye and surrounding areas, where working terriers were used to control animals such as foxes and badgers. Its protective coat and compact, low body suited work around rocky terrain and animal dens. The breed later became fashionable among British nobility, particularly during the Victorian era. Modern Skye Terriers are primarily companions and show dogs, although their alertness and working-terrier instincts remain part of their character.",

    originalPurpose:
      "Working terrier used to control foxes, badgers, and other vermin.",

    currentRoles: [
      "Family companion",
      "Conformation show dog",
      "Obedience and other suitable dog-sport participant",
    ],
  },

  physical: {
    sizeCategory: "Small, long-bodied terrier",

    height: {
      unit: "cm",
      male: {
        min: 25.4,
        max: 25.4,
      },
      female: {
        min: 24.13,
        max: 24.13,
      },
    },

    weight: {
      unit: "kg",
      male: {
        min: 15.9,
        max: 20.4,
      },
      female: null,
    },

    lifespanYears: {
      min: 12,
      max: 14,
    },

    coatType:
      "Double coat with a short, soft undercoat and a long, straight, firm outer coat.",

    coatLength:
      "Long body coat that falls straight down either side; hair on the head forms a veil, with feathering around the ears and tail.",

    coatColors: [
      "Black",
      "Blue",
      "Dark gray",
      "Light gray",
      "Silver or platinum",
      "Fawn",
      "Cream",
    ],

    sheddingLevel:
      "Not quantified consistently in the consulted sources; regular brushing is needed to manage the long coat.",

    droolingLevel:
      "Generally expected to be low; this is a qualitative breed-profile estimate rather than a measured statistic.",

    distinctiveFeatures: [
      "Long, low body with short, muscular legs.",
      "Strong bone and a sturdy frame despite relatively short stature.",
      "Long, straight double coat that parts along the body.",
      "Hair on the head that can veil the forehead and eyes.",
      "Both erect and drop-ear forms are recognised.",
      "A long, well-feathered tail.",
    ],
  },

  temperament: {
    traits: [
      "Loyal and strongly attached to familiar people.",
      "Courageous and alert.",
      "Intelligent and capable of learning.",
      "Independent and sometimes strong-willed.",
      "Often reserved with unfamiliar people.",
      "Sensitive to harsh correction.",
      "Retains working-terrier instincts.",
    ],

    scores: {
      affection: 5,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 4,
      independence: 4,
      trainability: 3,
      barking: 3,
      energy: 3,
    },
  },

  care: {
    exercise: {
      level:
        "Moderate. Daily walks, play, and short training activities usually provide a practical starting point; individual needs vary with age, health, and conditioning.",

      minutesPerDay: null,

      activities: [
        "Daily leash walks.",
        "Supervised play and exploration.",
        "Reward-based obedience practice.",
        "Scent games and other mentally engaging activities.",
        "Suitable low-impact activities adjusted for age and fitness.",
      ],
    },

    grooming: {
      level:
        "Moderate to high because the long double coat can tangle and collect debris.",

      brushing:
        "Brush and comb the coat regularly, paying attention to the areas behind the ears, under the legs, around the chest, and wherever friction can create mats. Check that the comb reaches through the coat rather than only smoothing its surface.",

      bathing:
        "Bathe when needed with dog-appropriate shampoo. Work gently through the coat and dry it thoroughly to reduce tangling and retained moisture.",

      notes: [
        "Inspect the coat frequently for tangles, mats, seeds, and debris.",
        "Check the ears and the skin beneath the long coat during grooming.",
        "Keep nails trimmed and check the paws routinely.",
        "Avoid unnecessary clipping if maintaining the natural coat is important to you.",
        "Introduce grooming gradually so the dog learns to tolerate handling.",
      ],
    },

    training: {
      difficulty:
        "Moderate. Intelligence and attachment to the owner can support learning, while independence and sensitivity make patient consistency important.",

      tips: [
        "Use reward-based training with clear, consistent cues.",
        "Keep sessions short, engaging, and predictable.",
        "Avoid harsh physical correction or intimidation.",
        "Teach reliable recall, but remember that terrier instincts can compete with recall around wildlife.",
        "Reward calm behaviour around unfamiliar people and dogs.",
        "Teach cooperative handling for brushing, ear checks, and veterinary examinations.",
      ],

      socialization:
        "Introduce the puppy gradually and positively to different people, sounds, surfaces, handling, and suitable dogs. Aim for calm, safe experiences rather than forcing close contact with unfamiliar people or animals.",
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates.",
        "Cool weather with appropriate shelter and comfort.",
        "Warm weather with shade, ventilation, water, and avoidance of strenuous activity during heat.",
      ],

      aloneTimeTolerance:
        "Variable. Build alone-time tolerance gradually; avoid assuming that an individual dog will comfortably manage long periods alone simply because the breed is independent.",
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate to the dog's life stage, body condition, and activity level. Home-prepared diets should be formulated with veterinary nutritional guidance.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Measure food portions and adjust them according to growth, activity, body condition, and veterinary advice. Keep fresh drinking water available. Avoid allowing excess weight to accumulate, because unnecessary weight can increase mechanical load on the dog's long body and joints.",

    considerations: [
      "Choose a diet formulated for the dog's current life stage.",
      "Monitor body condition and adjust portions when weight changes.",
      "Count treats as part of the daily food allowance.",
      "Discuss growth and feeding amounts with a veterinarian, especially during puppyhood.",
      "Seek veterinary advice before making major dietary changes or adding supplements.",
    ],

    note:
      "The consulted breed sources do not establish a universal meal count or precise daily calorie target for every Skye Terrier. Feeding amounts should be individualised.",
  },

  health: {
    overview:
      "The Skye Terrier is generally described as a robust breed, but breed-club health monitoring and veterinary breed guidance identify concerns worth discussing with a breeder and veterinarian. Reported or monitored issues include puppy limp, renal dysplasia, hepatitis, and cancer. The AKC also cautions about spinal or disc injuries associated with the breed's long, low structure and mentions conditions such as mammary cancer and hemangiosarcoma. These concerns should not be interpreted as a diagnosis or as proof that an individual dog will develop them.",

    commonConditions: [
      "Puppy limp, sometimes referred to by breed enthusiasts as Skye limp; persistent or painful limping needs veterinary assessment.",
      "Renal dysplasia, a kidney-development condition monitored by the breed health community.",
      "Hepatitis and other liver-related concerns reported in breed health monitoring.",
      "Cancer, including types mentioned in breed-health discussions; an individual dog's risk cannot be inferred from breed membership alone.",
      "Spinal or intervertebral disc problems, a concern to discuss because of the breed's long-backed structure.",
      "Other conditions may occur as in any dog; the list is not exhaustive and does not establish prevalence.",
    ],

    preventiveCare: [
      "Arrange routine veterinary examinations and keep vaccinations and parasite prevention appropriate to local risks.",
      "Discuss persistent limping, weakness, back pain, reluctance to jump, or changes in movement promptly with a veterinarian.",
      "Avoid repeatedly encouraging puppies to jump from heights or take stairs excessively during growth.",
      "Ask breeders about relevant family health history, including concerns monitored by the breed health committee.",
      "Maintain a healthy body condition and regular, age-appropriate activity.",
      "Keep up with dental care, ear checks, nail trimming, and skin inspection beneath the coat.",
    ],

    recommendedScreenings: [
      "Ask the breeder and veterinarian about family history of puppy limp, renal dysplasia, hepatitis, and cancer.",
      "Discuss whether kidney imaging, elbow evaluation, or other investigations are appropriate for the individual dog or breeding plan.",
      "Do not interpret the absence of a formal recommended screening panel on a kennel-club page as proof that no health evaluation is useful.",
    ],

    dentalCare:
      "Brush the teeth regularly with dog-appropriate products and arrange veterinary dental checks as advised. Dental disease can affect dogs of any breed.",

    earCare:
      "Check the ears regularly, especially where long hair can conceal debris or irritation. Clean only as advised by a veterinary professional and seek advice for odour, redness, discharge, or persistent scratching.",

    skinCare:
      "Part the long coat during grooming to inspect the skin for redness, parasites, sores, or mats that pull on the skin. Seek veterinary advice for persistent itching, hair loss, or recurring skin changes.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Owners who value a loyal companion and can provide patient, consistent training.",
      "Households prepared for regular coat maintenance.",
      "People able to supervise interactions with children and other animals.",
      "Owners who can manage exercise safely and avoid excessive impact during puppy growth.",
    ],

    notIdealFor: [
      "People who want a wash-and-go coat requiring little maintenance.",
      "Owners expecting immediate, reliable off-leash recall around wildlife.",
      "Households unable to provide patient training or routine grooming.",
      "People who plan to encourage frequent high-impact jumping during puppyhood.",
    ],
  },

  funFacts: [
    "The breed takes its name from the Isle of Skye in Scotland.",
    "Skye Terriers can have erect ears or drop ears.",
    "The breed's long, low outline and protective coat reflect its working-terrier background.",
    "The breed became fashionable among British nobility during the Victorian era.",
  ],

  faq: [
    {
      question: "Is the Skye Terrier a good family dog?",
      answer:
        "It can be a devoted family companion, but children should be taught respectful handling and interactions should be supervised. Individual temperament, socialization, and training matter more than breed label alone.",
    },
    {
      question: "How much grooming does a Skye Terrier need?",
      answer:
        "The long double coat needs regular brushing and combing to prevent mats and remove debris. Check the coat, ears, skin, paws, and nails as part of the routine.",
    },
    {
      question: "How much exercise does a Skye Terrier need?",
      answer:
        "Daily walks and play are a useful starting point, adjusted for age, health, and individual energy. The consulted sources do not establish one exact daily-minute target for every dog.",
    },
    {
      question: "What health issues should prospective owners ask about?",
      answer:
        "Ask about family history of puppy limp, renal dysplasia, hepatitis, cancer, and spinal or disc concerns. These are topics for discussion, not a prediction that an individual dog will develop a condition.",
    },
    {
      question: "Can a Skye Terrier live in an apartment?",
      answer:
        "Apartment living can work when the dog receives daily activity, training, enrichment, grooming, and appropriate opportunities to toilet. The suitability of a specific home depends on the individual dog and its routine.",
    },
  ],

  references: [
    "american-kennel-club-skye-terrier",
    "american-kennel-club-skye-terrier-history",
    "united-kennel-club-skye-terrier-standard",
    "skye-terrier-club-uk-health",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A breed-specific scientific name was not established from the consulted breed sources; no taxonomic value is recorded.",
    },

    alternateNames: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No additional alternate name was sufficiently established from the consulted sources.",
    },

    group: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Breed group classification",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The American Kennel Club places the Skye Terrier in the Terrier Group.",
    },

    "origin.country": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier-history",
          role: "verified",
          locator: "Historical overview of the breed's origin",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The breed originated in Scotland, part of the United Kingdom.",
    },

    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier-history",
          role: "verified",
          locator: "Opening section on the Isle of Skye",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The breed is associated with the Isle of Skye in Scotland.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "About the Breed; care sections",
        },
        {
          id: "american-kennel-club-skye-terrier-history",
          role: "verified",
          locator: "Breed history",
        },
        {
          id: "united-kennel-club-skye-terrier-standard",
          role: "verified",
          locator: "General Appearance; Characteristics",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Overview facts were checked against breed-profile, historical, and standard information; descriptions are original wording.",
    },

    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "cited",
          locator: "Height and weight",
        },
        {
          id: "united-kennel-club-skye-terrier-standard",
          role: "cited",
          locator: "Height, weight and proportions",
        },
      ],
      verifiedOn: null,
      note: "Editorial size label based on the breed's height and weight; it is not a formal registry category.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-skye-terrier-standard",
          role: "verified",
          locator: "Height, Weight and Proportions",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "UKC ideal height is 10 inches for males and 9.5 inches for females; values are converted to centimetres.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Average sizes and life expectancy",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The male range is converted from the AKC profile's 35–45 pounds. The profile describes females as slightly lighter but does not provide a numeric female range.",
    },

    "physical.weight.female.max": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The consulted profile says females are slightly lighter but does not specify a numeric female weight range; no number is inferred.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Average sizes and life expectancy",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The AKC profile lists life expectancy as 12–14 years.",
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-skye-terrier-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The standard describes a soft, woolly undercoat and a hard, straight, long outer coat.",
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-skye-terrier-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Coat-length description paraphrases the standard.",
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-skye-terrier-standard",
          role: "verified",
          locator: "Color",
        },
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Breed colors and markings",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Listed colors are drawn from the UKC standard and AKC breed profile. The UKC standard also describes dark points.",
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "cited",
          locator: "Grooming",
        },
      ],
      verifiedOn: null,
      note: "The sources reviewed do not provide a consistent measured shedding level; the field is phrased qualitatively.",
    },

    "physical.droolingLevel": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling measurement was found; this is a qualitative estimate.",
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-skye-terrier-standard",
          role: "verified",
          locator: "General Appearance; Coat; Characteristics",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Physical features are paraphrased from the breed standard.",
    },

    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Breed traits and training",
        },
        {
          id: "united-kennel-club-skye-terrier-standard",
          role: "verified",
          locator: "Characteristics",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Traits are general breed descriptions, not a guarantee about an individual dog's behaviour.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "cited",
          locator: "Breed traits and characteristics",
        },
      ],
      verifiedOn: null,
      note: "Scores are editorial 1–5 estimates for app comparison, not validated behavioural test results or official breed-standard values.",
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Exercise",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The AKC describes the breed's exercise needs as relatively modest; individual requirements still vary.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The consulted sources do not establish a reliable universal number of exercise minutes per day.",
    },

    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "cited",
          locator: "Exercise and training",
        },
      ],
      verifiedOn: null,
      note: "Activities are practical suggestions adapted from general breed exercise and training guidance.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Grooming",
        },
        {
          id: "united-kennel-club-skye-terrier-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Grooming advice is based on the long double coat and breed-profile guidance.",
    },

    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Training",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Training guidance reflects the breed profile's description of an intelligent, independent, sensitive terrier.",
    },

    "care.livingEnvironment": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "cited",
          locator: "Exercise and care guidance",
        },
      ],
      verifiedOn: null,
      note: "Living-environment fields are practical estimates, not official suitability certifications.",
    },

    "nutrition.dietType": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine nutrition guidance; diet choice should be appropriate to life stage and individual health.",
    },

    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No single breed-specific puppy feeding frequency was established from the consulted sources.",
    },

    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No single breed-specific adult feeding frequency was established from the consulted sources.",
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No single breed-specific senior feeding frequency was established from the consulted sources.",
    },

    "nutrition.guidelines": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "cited",
          locator: "Nutrition",
        },
      ],
      verifiedOn: null,
      note: "General nutrition guidance is adapted into original wording; portion sizes must be individualised.",
    },

    "nutrition.considerations": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive nutrition recommendations, not breed-specific medical claims.",
    },

    "nutrition.note": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Nutrition",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "No universal breed-specific meal frequency is asserted.",
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Health",
        },
        {
          id: "skye-terrier-club-uk-health",
          role: "verified",
          locator: "Conditions currently being monitored",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Health concerns are presented as reported or monitored issues, not as a prediction for an individual dog.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Health",
        },
        {
          id: "skye-terrier-club-uk-health",
          role: "verified",
          locator: "Puppy Limp; Renal Dysplasia; Hepatitis; Other Research",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "This list combines concerns named by the AKC and the breed health committee; it does not rank prevalence.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "cited",
          locator: "Health and care guidance",
        },
        {
          id: "skye-terrier-club-uk-health",
          role: "cited",
          locator: "Breed health information",
        },
      ],
      verifiedOn: null,
      note: "Preventive-care recommendations are general advice and do not replace veterinary assessment.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Recommended Health Tests From the National Breed Club",
        },
        {
          id: "skye-terrier-club-uk-health",
          role: "verified",
          locator: "Renal Dysplasia; Finnish Skye Elbow Project; Health Committee",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The AKC page lists no recommended health tests from the national breed club; the UK breed club describes health monitoring and research. The object therefore recommends discussion with a veterinarian rather than claiming a mandatory screening protocol.",
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
      note: "General canine skin and coat-care guidance.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "cited",
          locator: "Breed traits, grooming, exercise, and training",
        },
      ],
      verifiedOn: null,
      note: "Suitability fields are editorial estimates based on the care and temperament described in breed sources; they are not guarantees.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier-history",
          role: "verified",
          locator: "Historical overview",
        },
        {
          id: "united-kennel-club-skye-terrier-standard",
          role: "verified",
          locator: "General Appearance; Coat",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Facts are paraphrased from breed history and standard material.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Breed profile and care sections",
        },
        {
          id: "skye-terrier-club-uk-health",
          role: "verified",
          locator: "Breed health information",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "FAQ answers summarise the record's cited breed and care information in original wording.",
    },
  },

  updatedOn: "2026-10-21",
};
