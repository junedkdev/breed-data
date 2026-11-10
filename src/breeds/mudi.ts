import type { Breed } from "../schema/breed.types";

export const mudi: Breed = {
  slug: "mudi",
  name: "Mudi",
  scientificName: null,
  alternateNames: [
    "Hungarian Mudi",
    "Hungarian Herding Dog",
  ],

  group: "Sheepdogs and Cattle Dogs; Sheepdogs",

  origin: {
    country: "Hungary",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mudi.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Mudi.jpg",
      title: "Mudi.jpg",
      description: "Black Mudi showcasing upright prick ears, alert expression, and natural coat.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2006-03-03",
      uploadedOn: "2013-10-23",
      width: 294,
      height: 355,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 3.0. Changes, if any, must be indicated. https://creativecommons.org/licenses/by-sa/3.0/",
      restrictions: null,
      metadataCheckedOn: "2026-11-10",
    },
  ],

  overview: {
    summary:
      "The Mudi is an agile, spirited Hungarian herding dog distinguished by an upright, radar-like carriage of the ears, a wedge-shaped head, and a weather-resistant wavy or lightly curled body coat. Renowned for its versatile working drive, acute vigilance, and swift problem-solving ability, this medium-sized canine thrives when provided with rigorous daily exercise, mental challenges, and close companionship.",

    description:
      "Balanced, energetic, and swift on its feet, the Mudi displays an alert silhouette marked by high-set erect ears, an expressive almond-shaped eye, and a slightly sloping topline. The head and anterior surfaces of the limbs carry short, sleek hair, contrasting sharply with the dense, shiny, wavy to curly coat protecting the trunk. Developed in pastoral Hungary to drive cattle, sheep, and swine, the breed handles unpredictable stock with resolute courage and quick footwork. In modern homes, this innate athleticism translates into outstanding capability across agility, obedience, tracking, and disc sports. Because of its keen alertness and vocal guarding instincts, early socialization and consistent guidance are vital to help channel its drive into productive channels.",

    history:
      "The Mudi emerged naturally in Hungary across the eighteenth and nineteenth centuries, likely through spontaneous crosses between regional working sheepdogs and prick-eared pastoral dogs brought by German settlers. Unlike breeds developed primarily for show rings, it was selected solely for versatile farm utility—driving stubborn cattle, managing flocks, catching vermin, and sounding alarms. By the early twentieth century, dedicated naturalists documented its distinct morphology, though wartime devastation nearly eradicated the population. Preservation efforts by committed breed enthusiasts revived numbers while strictly maintaining the breed's functional working drive.",

    originalPurpose:
      "Versatile farm dog tasked with driving stubborn livestock, herding cattle and sheep, exterminating vermin, and guarding farmsteads.",

    currentRoles: [
      "Pastoral livestock herding and stock driving",
      "Agility, flyball, and performance dog sports",
      "Obedience and rally competition",
      "Scent work and search-and-rescue",
      "Watchdog and farmstead alert duties",
      "Active outdoor companion",
    ],
  },

  physical: {
    sizeCategory: "medium",

    height: {
      unit: "cm",
      male: {
        min: 41,
        max: 47,
      },
      female: {
        min: 38,
        max: 44,
      },
    },

    weight: {
      unit: "kg",
      male: {
        min: 11,
        max: 13,
      },
      female: {
        min: 8,
        max: 11,
      },
    },

    lifespanYears: {
      min: 12,
      max: 14,
    },

    coatType:
      "Dense, glossy coat forming pronounced waves or compact curls over the torso, paired with short, smooth hair on the head and front of the legs.",

    coatLength:
      "Short and sleek on the facial region and forelimbs; 3 to 7 cm long across the body, with longer feathering on the rear of the forearms, upper thighs, and tail.",

    coatColors: [
      "Black",
      "White",
      "Fawn",
      "Ash (blue-grey)",
      "Brown",
      "Ash-brown",
      "Cifra (merle)",
    ],

    sheddingLevel: "Moderate",

    droolingLevel: null,

    distinctiveFeatures: [
      "Tapering, wedge-shaped head with a clean, expressive profile",
      "High-set, erect ears shaped like an inverted V with independent mobility",
      "Glossy, wavy to curly body coat contrasting with smooth facial hair",
      "Pronounced feathering along the posterior limbs and tail underside",
      "Naturally variable tail carriage, ranging from a natural bobtail to full length",
      "Slightly sloping topline descending from the withers to the croup",
      "Almond-shaped, dark or coat-coordinated eyes displaying a bright, watchful gaze",
    ],
  },

  temperament: {
    traits: [
      "Intelligent",
      "Alert",
      "Energetic",
      "Courageous",
      "Keen to work",
      "Watchful",
      "Vocal",
      "Biddable",
      "Adaptable",
      "Reserved with strangers",
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 4,
      independence: 3,
      trainability: 5,
      barking: 4,
      energy: 5,
    },
  },

  care: {
    exercise: {
      level: "High",
      minutesPerDay: {
        min: 60,
        max: 120,
      },
      activities: [
        "Vigorous daily hikes and off-leash running in secure enclosures",
        "Structured canine sports such as agility, flyball, and disc",
        "Herding instinct trials and practical stock work",
        "Scent discrimination and search-and-find enrichment",
        "Interactive fetch and retrieving sessions",
        "Frequent, brief positive reinforcement training intervals",
      ],
    },

    grooming: {
      level: "Low to moderate",
      brushing:
        "Comb or brush through the coat once or twice weekly to untangle curls, dislodge field burrs, and remove loose undercoat. The hair naturally repels much dirt and requires minimal elaborate intervention.",
      bathing:
        "Bathe occasionally when noticeably soiled or muddy, using a mild canine shampoo and drying thoroughly. Avoid blow-drying that fluffs out or straightens the natural wavy curl pattern.",
      notes: [
        "Inspect the wavy coat and ear fringes for seeds, twigs, and burrs following field outings.",
        "Check prick ears routinely for wax buildup, foreign matter, or signs of irritation.",
        "Trim toenails regularly to prevent split nails and maintain proper foot mechanics.",
        "Increase combing frequency during seasonal coat transitions.",
        "Never shave the natural coat, as clipping alters texture and disrupts natural thermal protection.",
      ],
    },

    training: {
      difficulty: "Moderate",
      tips: [
        "Incorporate positive, reward-based methods using toys, treats, and enthusiastic praise.",
        "Establish consistent boundaries early to prevent vocal alarm habits from escalating.",
        "Provide ongoing mental variety to prevent boredom and repetitive frustration.",
        "Practice solid recall cues and impulse control around moving livestock or wildlife.",
        "Keep instructional sessions short, lively, and intellectually stimulating.",
      ],
      socialization:
        "Expose young dogs systematically and gently to novel people, varied environments, household sounds, and other animals. Support calm curiosity rather than forcing interactions, helping counteract natural developmental fear periods and innate wariness toward unfamiliar people.",
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: [
        "Temperate climates",
        "Cool climates",
        "Warm climates with shade, abundant water, and exercise scheduled during cooler morning or evening hours",
      ],
      aloneTimeTolerance:
        "Moderate; can tolerate reasonable periods alone when thoroughly exercised beforehand, but prolonged solitude without stimulation may prompt excessive vocalization or destructive chewing.",
    },
  },

  nutrition: {
    dietType:
      "High-quality commercial or balanced home-prepared diet formulated for active medium-sized dogs, adjusted to individual workload and life stage.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Feed measured portions tailored to body condition and physical workload, adjusting intake seasonally or during intense training periods. Provide continuous access to fresh water. Incorporate training treats into daily caloric budgets to avoid excess weight gain, and consult a veterinarian for personalized nutritional planning.",

    considerations: [
      "Working dogs and active canine athletes may require higher caloric density during peak performance seasons.",
      "Monitor body condition score regularly and reduce portions promptly if activity drops.",
      "Support developing puppies with diets matched to appropriate growth rates.",
      "Introduce any dietary changes gradually over seven to ten days to prevent digestive upset.",
    ],

    note:
      "General nutritional framework; individual dietary requirements vary according to metabolism, health status, neuter status, and daily exercise.",
  },

  health: {
    overview:
      "The Mudi is generally a robust and resilient working dog with a life expectancy of 12 to 14 years. While comparatively free of extreme conformational defects, individual dogs can develop hereditary orthopedic disorders, ocular conditions, or neurological issues such as idiopathic epilepsy. Conscientious breeders prioritize comprehensive health screening for parent animals to maintain hereditary soundness.",

    commonConditions: [
      "Hip dysplasia",
      "Elbow dysplasia",
      "Patellar luxation",
      "Cataracts",
      "Progressive retinal atrophy",
      "Idiopathic epilepsy",
      "Multidrug sensitivity (MDR1 mutation in certain bloodlines)",
    ],

    preventiveCare: [
      "Schedule annual veterinary wellness examinations, advancing to biannual checkups for senior canines.",
      "Verify health clearances and certified screening records for both parents before acquiring a puppy.",
      "Maintain lean muscular condition to minimize stress on hip, elbow, and stifle joints.",
      "Seek prompt veterinary assessment if seizure activity, gait changes, or sudden vision deficits occur.",
      "Keep vaccinations, core parasite protection, and oral health up to date.",
    ],

    recommendedScreenings: [
      "Hip evaluation",
      "Elbow evaluation",
      "Patellar luxation examination",
      "Comprehensive ophthalmologist eye examination",
      "Basic cardiac evaluation",
      "Optional DNA testing for multidrug sensitivity (MDR1) and degenerative myelopathy",
    ],

    dentalCare:
      "Brush teeth several times weekly using canine-formulated toothpaste, and schedule professional veterinary cleanings as recommended during routine wellness visits.",

    earCare:
      "Examine the upright prick ears weekly for redness, foreign debris from outdoor exercise, or excessive moisture, cleaning gently with a veterinarian-approved ear wash when necessary.",

    skinCare:
      "Regularly inspect the skin beneath the dense curls for parasites, grass awns, or localized dryness, particularly in merle-patterned or ash individuals.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Experienced dog owners dedicated to daily outdoor exercise and structured training",
      "Handlers enthusiastic about agility, flyball, disc, or tracking sports",
      "Rural homesteads, hobby farms, and active households needing an alert working partner",
      "Families that welcome a communicative, highly participatory canine companion",
    ],

    notIdealFor: [
      "Sedentary households seeking a low-maintenance lap dog",
      "Homes in noise-sensitive settings where natural alarm barking cannot be managed",
      "Owners who must leave dogs isolated for extended periods without mental engagement",
      "Inexperienced handlers unprepared for high canine drive, vigilance, and quick arousal",
    ],
  },

  funFacts: [
    "The breed's name is pronounced approximately like the English word 'moodie'.",
    "Its mobile, prick ears can pivot independently in diverse directions, functioning like tiny radar dishes to track subtle sounds.",
    "Unlike many European herding breeds that herd solely sheep, the Mudi was traditionally trusted to drive semi-feral cattle and stubborn swine.",
    "Individuals can be born with a wide range of tail lengths, from an entirely natural bobtail to a full plumy tail.",
    "The distinctive wavy coat develops cowlicks and ridges along the body and requires no artificial clipping or scissoring.",
  ],

  faq: [
    {
      question: "Where did the Mudi originate?",
      answer:
        "The breed originated in Hungary, developing during the eighteenth and nineteenth centuries from natural crosses between indigenous Hungarian herding canines and prick-eared German pastoral dogs.",
    },
    {
      question: "How much daily physical activity does a Mudi need?",
      answer:
        "A typical adult benefits from 60 to 120 minutes of daily physical and mental exercise, including brisk walks, vigorous fetching, training tasks, or competitive dog sports like agility and flyball.",
    },
    {
      question: "What coat colors are typical for this breed?",
      answer:
        "Recognised coat categories include black, white, fawn (ranging from pale cream to yellowish-red), ash (bluish grey), brown (chocolate), and cifra (a striking merle patterning over base colors). Subtle white patches on the chest or toes can also appear.",
    },
    {
      question: "Is the Mudi challenging to train?",
      answer:
        "Because of its intense intelligence and desire to cooperate, the breed learns commands rapidly; however, its high energy, sensitivity, and propensity to bark require patient, varied, reward-based training and consistent mental stimulation.",
    },
    {
      question: "What health evaluations are advised for breeding dogs?",
      answer:
        "Core health screenings include diagnostic evaluations of the hips, elbows, and patellas, alongside an eye examination by a certified veterinary ophthalmologist and a basic cardiac assessment.",
    },
    {
      question: "Can a Mudi adapt successfully to apartment living?",
      answer:
        "Apartment living is viable provided owners fulfill the dog's high requirements for daily outdoor exercise and mental enrichment, while constructively managing its natural inclination to sound vocal alerts at corridor noises.",
    },
  ],

  references: [
    "fci-mudi-standard-2023",
    "american-kennel-club-mudi",
    "canadian-kennel-club-mudi",
    "mudi-club-of-america-health-testing",
    "mudi-club-of-america-faq",
    "petmd-mudi-breed",
    "wikimedia-commons-mudi-jpg",
    "the-dog-api",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "canadian-kennel-club-mudi",
          role: "verified",
          locator: "Breed name and origin",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names",
        },
        {
          id: "american-kennel-club-mudi",
          role: "cited",
          locator: "Mudi breed profile",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "The alternate names reflect regional pastoral designations and heritage.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Canis lupus familiaris is the species-level taxonomic designation for domestic dogs; no breed-specific scientific name exists.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-mudi-standard-2023",
          role: "verified",
          locator: "FCI classification: Group 1 Sheepdogs and Cattledogs, Section 1 Sheepdogs",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.breed_group",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Classified within pastoral sheepdogs and cattledogs.",
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-mudi-standard-2023",
          role: "verified",
          locator: "Origin: Hungary; Brief Historical Summary",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Hungary is the verified country of origin; historical documentation does not establish a single exclusive sub-region.",
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No sufficiently authoritative source defines a distinct regional origin within Hungary.",
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-mudi-standard-2023",
          role: "verified",
          locator: "Utilization, Brief Historical Summary, General Appearance and Behaviour/Temperament",
        },
        {
          id: "american-kennel-club-mudi",
          role: "cited",
          locator: "About the Breed; Exercise; Training",
        },
        {
          id: "mudi-club-of-america-faq",
          role: "cited",
          locator: "What is a Mudi?; General Mudi temperament",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Synthesizes published breed background, historical farm roles, and modern working capabilities.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-mudi-standard-2023",
          role: "verified",
          locator: "Size: Height at withers; males 41–47 cm and females 38–44 cm",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.height.metric",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "The FCI standard establishes height in centimetres without conversion: males 41–47 cm, females 38–44 cm.",
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-mudi-standard-2023",
          role: "verified",
          locator: "Size and weight: Weight: Dogs: 11–13 kg, Bitches: 8–11 kg",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric",
        },
        {
          id: "canadian-kennel-club-mudi",
          role: "cited",
          locator: "Height/Weight: males 24–29 lbs and females 18–24 lbs",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "The FCI standard publishes sex-specific weights in kilograms (dogs 11–13 kg, bitches 8–11 kg). The Dog API provides a combined range of 8–13 kg, while Canadian Kennel Club publishes 24–29 lbs for males and 18–24 lbs for females.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-mudi",
          role: "verified",
          locator: "Average sizes and life expectancy: 12–14 years",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span",
        },
        {
          id: "mudi-club-of-america-faq",
          role: "cited",
          locator: "How long will a Mudi live?",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Published life expectancy estimates range between 12 and 14 years.",
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-mudi",
          role: "cited",
          locator: "Grooming: brushing to remove dead hair",
        },
      ],
      verifiedOn: null,
      note: "Editorial assessment based on typical coat maintenance; shedding varies across seasons and individuals.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No authoritative source establishes a specific drooling rating.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-mudi-standard-2023",
          role: "verified",
          locator: "General Appearance, Important Proportions, Eyes, Ears, Tail, Coat, Colour and Size",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Physical morphology, proportions, and coat traits follow the official standard.",
    },

    temperament: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-mudi-standard-2023",
          role: "verified",
          locator: "Behaviour/Temperament",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament",
        },
        {
          id: "american-kennel-club-mudi",
          role: "cited",
          locator: "About the Breed; Training",
        },
        {
          id: "mudi-club-of-america-faq",
          role: "cited",
          locator: "General Mudi temperament",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Behavioral traits reflect official standard descriptions and breed club consensus.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-mudi",
          role: "cited",
          locator: "Breed Traits & Characteristics",
        },
        {
          id: "mudi-club-of-america-faq",
          role: "cited",
          locator: "General Mudi temperament",
        },
      ],
      verifiedOn: null,
      note: "Editorial scale ratings intended for application display, not a standardized behavioral test.",
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-mudi",
          role: "cited",
          locator: "What to Expect When Caring for a Mudi: Grooming, Exercise, Training and Nutrition",
        },
        {
          id: "petmd-mudi-breed",
          role: "cited",
          locator: "Breed care and exercise guidance",
        },
      ],
      verifiedOn: null,
      note: "Practical care and husbandry recommendations informed by pastoral breed characteristics.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "petmd-mudi-breed",
          role: "cited",
          locator: "Exercise and mental stimulation",
        },
        {
          id: "american-kennel-club-mudi",
          role: "cited",
          locator: "Exercise",
        },
      ],
      verifiedOn: null,
      note: "The 60–120 minute exercise window is a practical guideline, not a rigid requirement.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Nutritional Assessment Guidelines",
        },
        {
          id: "american-kennel-club-mudi",
          role: "cited",
          locator: "Nutrition",
        },
      ],
      verifiedOn: null,
      note: "Canine nutritional best practices; specific caloric and nutritional demands vary with age and activity.",
    },

    "nutrition.feedingFrequency": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No single puppy, adult, and senior meal frequency was established.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "mudi-club-of-america-health-testing",
          role: "verified",
          locator: "Common Health Tests for Mudis",
        },
        {
          id: "mudi-club-of-america-faq",
          role: "cited",
          locator: "How long will a Mudi live? Does the Mudi have any health problems?",
        },
        {
          id: "american-kennel-club-mudi",
          role: "cited",
          locator: "Health; Recommended Health Tests from the National Breed Club",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Health conditions and screening priorities derived from breed club and orthopedic registry guidance.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "fci-mudi-standard-2023",
          role: "cited",
          locator: "Utilization and Behaviour/Temperament",
        },
        {
          id: "american-kennel-club-mudi",
          role: "cited",
          locator: "Exercise, Training and Nutrition",
        },
        {
          id: "mudi-club-of-america-faq",
          role: "cited",
          locator: "General Mudi temperament",
        },
      ],
      verifiedOn: null,
      note: "Editorial assessment of household suitability; success depends on lifestyle, training, and exercise consistency.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability for senior handlers varies widely depending on personal activity, mobility, and support.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-mudi-standard-2023",
          role: "verified",
          locator: "Brief Historical Summary, Tail and Coat",
        },
        {
          id: "mudi-club-of-america-faq",
          role: "cited",
          locator: "What is a Mudi?",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Informational points summarizing notable anatomical and historical traits.",
    },

    faq: {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-mudi-standard-2023",
          role: "cited",
          locator: "Origin, Utilization, Coat and Size",
        },
        {
          id: "american-kennel-club-mudi",
          role: "cited",
          locator: "Health, Exercise and Training",
        },
        {
          id: "mudi-club-of-america-health-testing",
          role: "cited",
          locator: "Common Health Tests for Mudis",
        },
      ],
      verifiedOn: null,
      note: "Answers synthesize historical background, coat varieties, exercise needs, and preventive health recommendations.",
    },
  },

  updatedOn: "2026-11-10",
};
