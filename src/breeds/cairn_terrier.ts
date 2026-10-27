import type { Breed } from "../schema/breed.types";

export const cairn_terrier: Breed = {
  slug: "cairn-terrier",
  name: "Cairn Terrier",
  scientificName: "Canis lupus familiaris",
  alternateNames: ["Cairn"],
  group: "Terrier Group",
  origin: {
    country: "Scotland",
    region: "Western Highlands and the Isle of Skye",
  },
  images: [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Cairn_terrier.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Cairn_terrier.jpg",
      title: "Cairn terrier.jpg",
      description: "Photograph identified on the file page as a Cairn Terrier.",
      creator: "Rockytopscott",
      uploader: "Rockytopscott",
      capturedOn: null,
      uploadedOn: "2008-11-07",
      width: 1944,
      height: 2592,
      licenseId: "cc-by-3.0",
      attribution:
        "Photo by Rockytopscott, via Wikimedia Commons, licensed under CC BY 3.0 (https://creativecommons.org/licenses/by/3.0/). Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-10-26",
    },
  ],
  overview: {
    summary:
      "The Cairn Terrier is a small, sturdy Scottish working terrier known for its weather-resistant double coat, alert expression, curiosity, and confident personality. Originally developed to pursue small quarry among rocky ground, it remains an energetic companion that benefits from daily activity, engaging training, and secure opportunities to explore.",
    description:
      "Compact but not delicate, the Cairn Terrier has a strong body, short legs, erect pointed ears, dark expressive eyes, and a shaggy outer coat over a soft undercoat. Its natural appearance and practical coat reflect its working origins. Cairns are often lively, independent-minded, and interested in movement and scents around them. They can be affectionate household companions, but their hunting heritage may show up as digging, chasing small animals, or barking at activity. Consistent, reward-based training and sensible supervision help channel these instincts.",
    history:
      "The Cairn Terrier developed in Scotland, particularly in the Western Highlands and around the Isle of Skye. Small working terriers were used to locate and pursue foxes, otters, and other quarry among rocky piles and rough terrain. The name refers to the stone heaps that provided cover for small animals. Cairns share historical ancestry with other Scottish terrier breeds, including the West Highland White Terrier and the Scottish Terrier. The breed later became established in dog shows and companion homes while retaining the robust, active character associated with its working past.",
    originalPurpose:
      "Hunting and flushing small quarry and vermin from rocky ground and stone piles in Scotland.",
    currentRoles: [
      "Companion dog",
      "Family household dog",
      "Participant in obedience and agility activities",
      "Scent-work and earthdog activity partner",
      "Small working terrier where suitable opportunities and humane handling are available",
    ],
  },
  physical: {
    sizeCategory: "Small",
    height: {
      unit: "in",
      male: {
        min: 11,
        max: 12,
      },
      female: {
        min: 11,
        max: 12,
      },
    },
    weight: {
      unit: "lb",
      male: {
        min: 14,
        max: 16,
      },
      female: {
        min: 14,
        max: 16,
      },
    },
    lifespanYears: {
      min: 13,
      max: 15,
    },
    coatType:
      "Double coat with a harsh, weather-resistant outer coat and a short, soft, close undercoat.",
    coatLength:
      "Shaggy, medium-length outer coat that protects the body from weather; the coat should remain practical and natural rather than soft, silky, or heavily sculpted.",
    coatColors: [
      "Cream",
      "Wheaten",
      "Red",
      "Grey",
      "Nearly black",
      "Brindle variations of the accepted colours",
    ],
    sheddingLevel:
      "Sheds. Regular brushing helps remove loose hair; shedding varies with the individual and coat cycle.",
    droolingLevel: null,
    distinctiveFeatures: [
      "Small, strongly built body with short legs and a workmanlike outline.",
      "Broad head with a short, powerful muzzle and a somewhat foxy expression.",
      "Small, pointed, erect ears.",
      "Medium-sized, widely set, dark hazel eyes with shaggy eyebrows.",
      "Double coat with a harsh, weather-resistant outer layer and a soft undercoat.",
      "Short tail carried upright or gaily without curling over the back.",
      "Strong feet and muscular hindquarters suited to moving over rough terrain.",
      "Coat colours commonly include cream, wheaten, red, grey, and nearly black, with brindling permitted by the cited UK standard.",
    ],
  },
  temperament: {
    traits: [
      "Alert and observant",
      "Active and playful",
      "Confident and often fearless",
      "Curious and exploratory",
      "Independent-minded",
      "Intelligent and capable of learning",
      "Can be persistent when following a scent",
      "May dig or chase small animals",
      "May bark to alert its household",
      "Often affectionate with familiar people",
    ],
    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 3,
      independence: 4,
      trainability: 3,
      barking: 4,
      energy: 4,
    },
  },
  care: {
    exercise: {
      level:
        "Moderate to high for a small breed. Daily walks, active play, and mental enrichment are important; exercise needs vary by age, health, and individual temperament.",
      minutesPerDay: null,
      activities: [
        "Daily walks using a secure lead or harness",
        "Supervised exploration in a securely fenced area",
        "Scent games and food-search activities",
        "Reward-based obedience training",
        "Agility or other suitable low-impact dog sports",
        "Earthdog activities where available and safely managed",
        "Interactive play that channels chasing and hunting instincts appropriately",
      ],
    },
    grooming: {
      level:
        "Moderate. Regular brushing is needed, and maintaining the traditional harsh coat may require hand-stripping by a knowledgeable groomer.",
      brushing:
        "Brush and comb regularly to remove loose hair and prevent tangles, especially around the furnishings and areas where debris collects. Check the coat and skin after outdoor adventures.",
      bathing:
        "Bathe when genuinely needed, using a dog-appropriate shampoo and drying the coat thoroughly. Frequent unnecessary bathing can affect the texture and condition of a harsh double coat.",
      notes: [
        "Ask a groomer familiar with wire-coated terriers about hand-stripping if maintaining the traditional coat texture is a priority.",
        "Clipping can change the texture and appearance of the outer coat; discuss grooming goals with an experienced groomer.",
        "Check the ears, eyes, paws, nails, and skin regularly.",
        "Remove burrs, seeds, and other debris caught in the coat after outdoor activity.",
        "Brush the teeth regularly with dog-specific toothpaste.",
        "Adjust grooming frequency to coat condition and the dog's lifestyle.",
      ],
    },
    training: {
      difficulty:
        "Moderate. Cairn Terriers are intelligent, but their independent working instincts can make them selective about repetitive exercises. Short, varied, reward-based sessions are generally more productive than harsh corrections.",
      tips: [
        "Begin training and household routines early, using rewards and clear, consistent cues.",
        "Practise recall in secure areas before considering any off-leash activity.",
        "Use lead management where wildlife or unfamiliar small animals may trigger chasing.",
        "Provide legal, safe outlets for sniffing, searching, and problem-solving.",
        "Teach calm greetings and reinforce quiet behaviour where barking is a concern.",
        "Use appropriate barriers and supervision around small pets.",
        "Keep sessions brief and engaging, and gradually increase distractions.",
      ],
      socialization:
        "Introduce the puppy gradually and positively to different people, environments, everyday sounds, handling, and suitable dogs. Keep encounters controlled and pleasant. Continue social learning into adulthood, and do not assume that every Cairn will be comfortable with unfamiliar dogs or small animals.",
    },
    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: [
        "Cool and temperate climates",
        "Cold weather with suitable shelter and monitoring",
        "Warmer climates when shade, fresh water, ventilation, and cooler exercise times are provided",
      ],
      aloneTimeTolerance:
        "Individual tolerance varies. Build alone time gradually and provide activity and enrichment before departures. Long, routine periods without companionship or stimulation may contribute to boredom, barking, or destructive behaviour.",
    },
  },
  nutrition: {
    dietType:
      "Complete and balanced dog food appropriate for the dog's life stage, body condition, activity level, and veterinary needs.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Use the food manufacturer's feeding guide as a starting point, then adjust portions to maintain a healthy body condition. Fresh water should always be available. A veterinarian can help tailor the diet to the dog's age, activity, dental health, and medical history.",
    considerations: [
      "Monitor body condition and avoid excess treats, which can contribute to weight gain in a small dog.",
      "Choose food appropriate for the dog's life stage and health status.",
      "Use measured portions rather than estimating by eye.",
      "Introduce diet changes gradually unless a veterinarian advises otherwise.",
      "Include training treats in the daily calorie allowance.",
      "Seek veterinary advice for persistent digestive problems, appetite changes, or unexplained weight change.",
    ],
    note:
      "The consulted breed sources do not establish one feeding schedule or portion size suitable for every Cairn Terrier. Individual requirements depend on age, body condition, activity, food energy density, and health.",
  },
  health: {
    overview:
      "Cairn Terriers are often described as hardy and long-lived, but inherited and developmental health conditions can occur. Breed-club health guidance identifies several areas for screening, including globoid cell leukodystrophy, liver vascular abnormalities, kidney abnormalities, ocular melanosis, cardiac health, and patellar luxation. These are screening priorities rather than a claim that an individual dog has, or will develop, any of these conditions. Discuss family history and suitable testing with a veterinarian and responsible breeder.",
    commonConditions: [
      "Globoid cell leukodystrophy (GCL), an inherited neurological disorder for which breed-club guidance recommends DNA testing of breeding dogs that have not already been cleared by test or parentage.",
      "Portosystemic vascular anomaly (PSVA) and microvascular dysplasia (MVD), liver-related vascular conditions for which the breed-club guidance describes testing.",
      "Renal aplasia or renal dysplasia, developmental kidney abnormalities addressed in the breed-club screening recommendations.",
      "Ocular melanosis (OM), an eye condition for which breed-club guidance recommends regular eye examination in adult Cairns.",
      "Cardiac abnormalities, which the breed-club guidance includes in its recommended adult health evaluation.",
      "Patellar luxation, a kneecap condition included in the breed-club's pre-breeding examination recommendations.",
    ],
    preventiveCare: [
      "Ask the breeder for relevant parental health screening records and family history.",
      "Discuss breed-relevant screening with a veterinarian rather than assuming every dog requires an identical test panel.",
      "Arrange routine veterinary examinations and follow the veterinarian's vaccination and parasite-prevention recommendations.",
      "Maintain a healthy body condition and age-appropriate exercise.",
      "Arrange prompt veterinary assessment for persistent changes in gait, vision, energy, appetite, or behaviour.",
      "Keep routine dental care, nail trimming, ear checks, and skin checks part of regular care.",
    ],
    recommendedScreenings: [
      "Globoid cell leukodystrophy (GCL) DNA testing for breeding dogs not already cleared by testing or parentage.",
      "Veterinary assessment for portosystemic vascular anomaly (PSVA) and microvascular dysplasia (MVD) according to breed-club guidance.",
      "Kidney ultrasound screening for renal aplasia or dysplasia according to breed-club guidance.",
      "Ophthalmic examination for ocular melanosis, with the breed-club guidance recommending annual examinations from 3 years of age.",
      "Cardiac examination by a veterinarian.",
      "Patellar examination before breeding.",
    ],
    dentalCare:
      "Brush the teeth regularly with dog-specific toothpaste and arrange veterinary dental checks. Ask a veterinarian to assess persistent bad breath, gum redness, oral discomfort, or difficulty chewing.",
    earCare:
      "Check the ears regularly for redness, odour, discharge, or repeated scratching. Clean only when needed and use products and techniques recommended by a veterinarian.",
    skinCare:
      "Inspect the coat and skin during brushing, especially after outdoor activity. Watch for persistent itching, redness, scaling, sores, or hair loss, and seek veterinary advice if these occur.",
  },
  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: true,
    idealFor: [
      "Households that enjoy daily walks, play, and training games",
      "Owners who appreciate a lively, curious dog with an independent streak",
      "People willing to manage digging, barking, and chasing instincts",
      "Families prepared to supervise children and teach respectful dog handling",
      "Owners who can provide secure outdoor activity and regular companionship",
      "People willing to maintain a double coat and arrange suitable grooming",
    ],
    notIdealFor: [
      "Households that expect a reliably quiet dog without training",
      "Owners who need dependable off-leash recall around wildlife without gradual training",
      "Homes where small pets cannot be safely separated or supervised",
      "People unable to provide daily activity and mental enrichment",
      "Owners unwilling to manage a terrier's digging or prey-drive behaviours",
    ],
  },
  funFacts: [
    "The breed's name comes from stone piles called cairns, where small quarry could hide.",
    "Cairn Terriers were developed as working dogs in Scotland rather than solely as lapdogs.",
    "The breed shares historical ancestry with several other Scottish terriers.",
    "Cairn Terriers have a weather-resistant double coat with a harsh outer layer and a soft undercoat.",
    "A Cairn Terrier named Terry played Toto in the 1939 film The Wizard of Oz.",
  ],
  faq: [
    {
      question: "Where did the Cairn Terrier originate?",
      answer:
        "The Cairn Terrier developed in Scotland, particularly the Western Highlands and the Isle of Skye, where small working terriers were used to pursue quarry among rocky ground.",
    },
    {
      question: "How tall is a Cairn Terrier?",
      answer:
        "The cited UKC standard gives a height of 11 to 12 inches. Other registries publish different ideal measurements, so a dog's standard may depend on the registry being used.",
    },
    {
      question: "How much does a Cairn Terrier weigh?",
      answer:
        "The cited UKC standard gives a weight of 14 to 16 pounds. The ideal weight should also be considered in proportion to the dog's build and condition.",
    },
    {
      question: "How long does a Cairn Terrier live?",
      answer:
        "The AKC breed profile lists a life expectancy of 13–15 years. Individual lifespan varies with genetics, health, and care.",
    },
    {
      question: "Does a Cairn Terrier need a lot of exercise?",
      answer:
        "Cairn Terriers are active working terriers and benefit from daily walks, play, and mental enrichment. Their needs vary by age, health, and individual temperament.",
    },
    {
      question: "Is a Cairn Terrier easy to train?",
      answer:
        "Cairns can learn quickly, but they may also be independent and strongly interested in scents or moving animals. Short, varied reward-based sessions and secure recall practice are useful.",
    },
    {
      question: "Does a Cairn Terrier shed?",
      answer:
        "Yes. Regular brushing helps remove loose hair and keep the coat in good condition. Owners who want to maintain the traditional harsh coat may wish to consult a groomer experienced with hand-stripping.",
    },
    {
      question: "What health screenings should I ask a breeder about?",
      answer:
        "Breed-club guidance includes screening for globoid cell leukodystrophy, liver vascular abnormalities, kidney abnormalities, ocular melanosis, cardiac health, and patellar luxation. Ask the breeder for documented results and discuss individual needs with a veterinarian.",
    },
    {
      question: "Can a Cairn Terrier live in an apartment?",
      answer:
        "Apartment living can work if the dog receives daily exercise, training, and enrichment. Barking, digging instincts, and access to safe outdoor activity should be considered when planning the home environment.",
    },
  ],
  references: [
    "united-kennel-club-cairn-terrier-standard",
    "american-kennel-club-cairn-terrier",
    "royal-kennel-club-cairn-terrier-standard",
    "cairn-terrier-club-of-america-health-guidelines",
    "commons-cairn-terrier-rockytopscott",
  ],
  evidence: {
    scientificName: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "The catalogue uses the conventional domestic-dog scientific designation; it is not a breed-specific taxonomic distinction.",
    },
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "united-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "Breed heading and history",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The registered breed name is Cairn Terrier; Cairn is used as a shortened common name.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "Standard heading: Terrier Group",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Group classification follows the cited registry.",
    },
    origin: {
      reliability: "reliable_source",
      sources: [
        {
          id: "united-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "History",
        },
        {
          id: "american-kennel-club-cairn-terrier",
          role: "cited",
          locator: "Breed history",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Historical origin is described at the country and regional level without asserting a single place of creation.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "united-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "History, general appearance, characteristics, and coat",
        },
        {
          id: "american-kennel-club-cairn-terrier",
          role: "cited",
          locator: "About the Breed; exercise, training, and nutrition",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Original prose summarises breed history, working role, and general care considerations.",
    },
    "physical.sizeCategory": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-cairn-terrier",
          role: "verified",
          locator: "Breed profile: size",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Small is the catalogue's size category.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "Height & Weight: 11 to 12 inches",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The source does not give sex-specific height ranges; the published standard range is used for both sex slots without conversion.",
    },
    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "Height & Weight: 14 to 16 pounds",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The source does not give sex-specific weight ranges; the published standard range is used for both sex slots without conversion.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-cairn-terrier",
          role: "verified",
          locator: "Breed profile: life expectancy 13–15 years",
        },
        {
          id: "cairn-terrier-club-of-america-health-guidelines",
          role: "cited",
          locator: "Page 1: average lifespan 13–14 years",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The displayed range follows the AKC profile. The breed-club health guidance gives a slightly narrower average, so lifespan should be understood as an estimate.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Coat description is paraphrased from the standard.",
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "General appearance and coat",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Describes the functional, natural coat rather than a show-grooming style.",
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "Color",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Colour list follows the cited UKC standard; colour acceptance differs between registries.",
    },
    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-cairn-terrier",
          role: "verified",
          locator: "Breed traits and care",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Qualitative shedding description; individual coat cycles vary.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source consulted provided a sufficiently grounded breed-specific drooling rating.",
    },
    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "General appearance, head, ears, body, coat, and tail",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Features are paraphrased from the official breed standard.",
    },
    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "united-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "Characteristics and history",
        },
        {
          id: "american-kennel-club-cairn-terrier",
          role: "cited",
          locator: "Breed traits and training",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Traits describe common breed tendencies; individual temperament depends on genetics, socialization, and experience.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-cairn-terrier",
          role: "cited",
          locator: "Breed traits and characteristics",
        },
      ],
      verifiedOn: null,
      note: "Scores are editorial estimates for app comparison, not scientific measurements or official registry ratings.",
    },
    "care.exercise": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-cairn-terrier",
          role: "cited",
          locator: "What to Expect When Caring for a Cairn Terrier: Exercise",
        },
        {
          id: "royal-kennel-club-cairn-terrier-standard",
          role: "cited",
          locator: "Breed A-Z: exercise and activity",
        },
      ],
      verifiedOn: null,
      note: "Care advice is general guidance and should be adapted to the dog's age and health.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No exact daily exercise-minute range is recorded because the consulted sources do not establish one universal number.",
    },
    "care.grooming": {
      reliability: "general_guidance",
      sources: [
        {
          id: "royal-kennel-club-cairn-terrier-standard",
          role: "cited",
          locator: "Breed A-Z: grooming",
        },
      ],
      verifiedOn: null,
      note: "Grooming advice is general and depends on coat condition and whether the owner maintains a traditional hand-stripped coat.",
    },
    "care.training": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-cairn-terrier",
          role: "cited",
          locator: "What to Expect When Caring for a Cairn Terrier: Training",
        },
      ],
      verifiedOn: null,
      note: "Recommendations are general training and welfare guidance.",
    },
    "care.livingEnvironment": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-cairn-terrier",
          role: "cited",
          locator: "Exercise and general breed care",
        },
        {
          id: "royal-kennel-club-cairn-terrier-standard",
          role: "cited",
          locator: "Breed A-Z: home and garden suitability",
        },
      ],
      verifiedOn: null,
      note: "Housing suitability is conditional on exercise, enrichment, management, and the individual dog's behaviour.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-cairn-terrier",
          role: "cited",
          locator: "What to Expect When Caring for a Cairn Terrier: Nutrition",
        },
      ],
      verifiedOn: null,
      note: "General feeding guidance, not an individual veterinary diet prescription.",
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed puppy feeding frequency is prescribed; needs vary by age, food, and veterinary advice.",
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed adult feeding frequency is prescribed; individual requirements vary.",
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed senior feeding frequency is prescribed; individual requirements vary.",
    },
    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "cairn-terrier-club-of-america-health-guidelines",
          role: "verified",
          locator: "Page 1: suggested minimal health testing guidelines",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Health overview reflects the breed-club's stated screening guidance and does not claim every dog will develop these conditions.",
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "cairn-terrier-club-of-america-health-guidelines",
          role: "verified",
          locator: "Page 1: GCL, PSVA/MVD, kidney ultrasound, ocular melanosis, cardiac exam, and patella exam",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "These are conditions or screening priorities named in breed-club guidance, not prevalence rankings.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "cairn-terrier-club-of-america-health-guidelines",
          role: "cited",
          locator: "Page 1: recommended testing and veterinary evaluation",
        },
      ],
      verifiedOn: null,
      note: "Preventive care should be tailored with a veterinarian.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "cairn-terrier-club-of-america-health-guidelines",
          role: "verified",
          locator: "Page 1: suggested minimal health testing guidelines",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Screenings are transcribed as recommendations from the cited breed-club guidance; confirm current advice with a veterinarian.",
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
      note: "General coat and skin-care guidance.",
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-cairn-terrier",
          role: "cited",
          locator: "Breed profile: exercise, training, and home life",
        },
        {
          id: "royal-kennel-club-cairn-terrier-standard",
          role: "cited",
          locator: "Breed A-Z: size of home and activity",
        },
      ],
      verifiedOn: null,
      note: "Suitability is an editorial estimate; household compatibility depends on training, supervision, and the individual dog.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal senior-owner suitability value is assigned because mobility, activity level, and support vary between people.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-cairn-terrier",
          role: "verified",
          locator: "History and Did You Know?",
        },
        {
          id: "united-kennel-club-cairn-terrier-standard",
          role: "cited",
          locator: "History",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Historical facts are paraphrased from the breed references.",
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "united-kennel-club-cairn-terrier-standard",
          role: "verified",
          locator: "Height & Weight, History, and Coat",
        },
        {
          id: "american-kennel-club-cairn-terrier",
          role: "verified",
          locator: "Life expectancy, exercise, training, and nutrition",
        },
        {
          id: "cairn-terrier-club-of-america-health-guidelines",
          role: "cited",
          locator: "Page 1: health-testing recommendations",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "FAQs summarise registry measurements and general care guidance; measurements may vary between registries.",
    },
  },
  updatedOn: "2026-10-26",
};
