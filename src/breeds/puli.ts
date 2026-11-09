import type { Breed } from "../schema/breed.types";

export const puli: Breed = {
  slug: "puli",
  name: "Puli",
  scientificName: null,

  alternateNames: [
    "Hungarian Puli",
    "Puli Dog",
    "Pulik",
  ],

  group: "Herding Dogs; Sheepdogs",

  origin: {
    country: "Hungary",
    region: "Carpathian Basin; historical pastoral plains of Hungary",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/PuliDog.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:PuliDog.jpg",
      title: "PuliDog.jpg",
      description: "A black Hungarian Puli displaying its characteristic corded coat.",
      creator: "Steve Jurvetson",
      uploader: "Flickr upload bot",
      capturedOn: "2007-09-23",
      uploadedOn: "2008-02-28",
      width: 2106,
      height: 2068,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Steve Jurvetson, via Wikimedia Commons, CC BY 2.0 (https://creativecommons.org/licenses/by-2.0/). Indicate changes, if any.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Puli_white.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Puli_white.jpg",
      title: "Puli white.jpg",
      description: "A pearl-white male Puli photographed outdoors.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2016-11-13",
      uploadedOn: "2016-11-14",
      width: 600,
      height: 475,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ziggy_the_Puli_%28cropped%29.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Ziggy_the_Puli_(cropped).jpg",
      title: "Ziggy the Puli (cropped).jpg",
      description: "An adult grey Puli photographed with established coat cords.",
      creator: "Sminthopsis84",
      uploader: "Sagaciousphil",
      capturedOn: "2008-05-27",
      uploadedOn: "2014-08-21",
      width: 1070,
      height: 1311,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Sminthopsis84, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08",
    },
  ],

  overview: {
    summary:
      "Celebrated for its extraordinary, naturally corded coat, the Puli is an ancient Hungarian sheepdog of medium size, square proportions, and remarkable acrobatics. Quick-witted, agile, and intensely loyal, it was bred for centuries to maneuver sheep flocks across the Hungarian plains with bouncy energy and dedicated watchfulness.",

    description:
      "Behind its flowing curtain of cords, the Puli is a solid, finely muscled herder with a lively step and an alert mind. The breed's unique double coat consists of a dense, woolly undercoat and a coarser topcoat that intertwine naturally during adolescence to form rounded cords or flat ribbon-like dreadlocks. Far from being merely ornamental, this dense fleece served as functional armor against freezing winds and pasture predators. Highly intelligent, playful, and deeply attached to its immediate household, the Puli thrives on companionship, interactive mental puzzles, and structured training. While naturally reserved with strangers, its deep desire to work alongside its human partners makes it an enthusiastic athlete in agility, herding trials, and obedience, provided its coat is given structured, hands-on care.",

    history:
      "Ancestors of the Puli traveled into the Carpathian Basin alongside migrating Magyar pastoralists over a millennium ago, establishing themselves as indispensable working herders across the Hungarian puszta. While larger white livestock guardians like the Komondor and Kuvasz stood guard against wolves at night, the nimble, darker-coated Puli worked actively by day, bounding over sheep backs to direct the flock. Although modern agricultural mechanization and the turmoil of World War II severely depleted working populations, devoted Hungarian and international breeders successfully preserved this ancient pastoral treasure.",

    originalPurpose:
      "Driving and herding sheep and livestock across the Hungarian plains, working cooperatively with shepherds and larger flock guardians.",

    currentRoles: [
      "Devoted household companion",
      "Competitive herding and instinct trial athlete",
      "Agility, rally, and trick dog competitor",
      "Conformation show competitor",
      "Interactive scent and obedience participant",
    ],
  },

  physical: {
    sizeCategory: "Medium-sized, square-bodied, athletic herding dog",

    height: {
      unit: "cm",
      male: { min: 39, max: 45 },
      female: { min: 36, max: 42 },
    },

    weight: {
      unit: "kg",
      male: { min: 13.5, max: 16 },
      female: { min: 11, max: 14 },
    },

    lifespanYears: {
      min: 10,
      max: 15,
    },

    coatType:
      "Remarkable double coat comprising a fine woolly undercoat and a coarser, wavy outer coat that naturally mat together to form distinct cords or flat ribbons, covering the entire body, limbs, and head.",

    coatLength: "Long, with mature cords often reaching ground length on the body and loin over three to five years",

    coatColors: [
      "Pearl White",
      "Black",
      "Black Shaded with Rust-Red or Grey",
      "Fawn with Black Mask",
      "Grey",
    ],

    sheddingLevel:
      "Low visible hair fallout; shed hairs remain trapped within the established cords rather than dropping onto furniture, requiring manual cord separation rather than traditional brush removal.",

    droolingLevel: "Low",

    distinctiveFeatures: [
      "Naturally corded or ribboned dreadlock fleece covering the entire body and concealing physical contours",
      "Square, balanced body outline with height at the withers equal to body length",
      "Head completely covered in profuse hanging cords that shield dark, lively eyes",
      "Tightly curled tail resting flat and forward over the rump, blending seamlessly into back furnishings",
      "Vigorous, bouncing, quick-stepping gait with rapid ground coverage and acrobatic turns",
    ],
  },

  temperament: {
    traits: [
      "Intelligent",
      "Energetic and agile",
      "Loyal and devoted to family",
      "Alert and vigilant",
      "Playful and spirited",
      "Naturally watchful and reserved with strangers",
      "Curious problem-solver",
      "Retains strong herding instincts",
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 4,
      independence: 3,
      trainability: 4,
      barking: 4,
      energy: 4,
    },
  },

  care: {
    exercise: {
      level: "High",

      minutesPerDay: {
        min: 45,
        max: 75,
      },

      activities: [
        "Daily brisk neighborhood walks and park exploratory strolls",
        "Interactive fetch, frisbee, and agility obstacle practice in secure enclosures",
        "Structured herding instinct trials and livestock driving games",
        "Scent-work tracking puzzles and trick training sessions",
        "Indoor problem-solving games and food-foraging mats",
      ],
    },

    grooming: {
      level: "High",

      brushing:
        "Do not brush a corded coat; instead, manually separate cords down to the skin by hand every week to keep them neat and prevent large collective mats from forming. If maintained in a brushed-out or clipped companion trim, thorough line-brushing multiple times weekly is required.",

      bathing:
        "Bathe only when necessary, diluting shampoo thoroughly, rinsing repeatedly to remove all soap residue, and squeezing moisture out with towels before using a high-velocity cool dryer for several hours to prevent mildew odor in dense cords.",

      notes: [
        "Gently tie up facial cords with a soft band during meals, messy activities, or agility courses to keep cords clean and enhance vision.",
        "Check and separate developing cords between 9 and 18 months of age when puppy fuzz begins tangling with the adult topcoat.",
        "Inspect paw pads, between the toes, and under the ears after outdoor exercise to extract twigs, burrs, and foxtails.",
        "Keep nails trimmed short and maintain routine tooth brushing.",
      ],
    },

    training: {
      difficulty:
        "Moderate; extraordinarily smart and quick to learn, but easily bored by repetitive drills and inclined to execute commands in its own spirited, independent manner.",

      tips: [
        "Keep training sessions fast-paced, novel, and fun, relying on positive reinforcement, food rewards, and play.",
        "Address alert watchdog barking early by teaching a quiet settle cue rather than encouraging recreational alarm barking.",
        "Introduce veterinary handling, foot touching, ear cleaning, and cord separation gently during early puppyhood.",
        "Channel instinctual herding urges—such as nipping heels or circling running children—into acceptable ball-fetching and agility games.",
      ],

      socialization:
        "Provide broad, positive socialisation throughout puppyhood and adolescence to new people, dogs, household sounds, and bustling environments, curbing excessive aloofness while fostering steady, confident manners.",
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cool and temperate climates",
        "Warm climates when provided with air-conditioned indoor comfort, shade, and exercise scheduled during cool morning and evening hours",
      ],

      aloneTimeTolerance:
        "Moderate when adequate physical activity and interactive toys are provided, though extended confinement can foster boredom barking or mischief.",
    },
  },

  nutrition: {
    dietType:
      "Nutritionally complete, balanced commercial dry kibble, wet food, or veterinary-formulated diet suited to active, medium-sized herding dogs.",

    feedingFrequency: {
      puppy: "3 to 4 measured meals daily during growth, transitioning to 2 meals daily around six months of age",
      adult: "2 measured meals per day to maintain consistent energy and lean body composition",
      senior: null,
    },

    guidelines:
      "Measure food portions carefully using a scale or measuring cup, regularly palpating the ribs and waistline beneath the heavy corded coat to ensure the dog remains lean and muscular.",

    considerations: [
      "Because the thick corded fleece can mask weight gain or loss, assess physical body condition score by touch rather than visual appraisal alone.",
      "Include training treats within the total daily calorie budget.",
      "Ensure fresh drinking water is always accessible, using a narrow-rimmed water bowl to keep long facial cords dry.",
      "Consult a veterinarian if unexplained changes in weight, skin health, or digestion arise.",
    ],

    note: "Caloric requirements vary with age, activity level, coat weight, and weather; consult a veterinarian for personalized dietary guidance.",
  },

  health: {
    overview:
      "The Puli is generally a robust, long-lived breed with a typical lifespan of 10 to 15 years. Breed-health testing programs supported by the parent club prioritize screening for hip dysplasia, patellar luxation, inherited ophthalmic conditions, and degenerative myelopathy (DM) via DNA testing.",

    commonConditions: [
      "Hip dysplasia: developmental malformation of the hip joints that can lead to osteoarthritis and stiffness.",
      "Patellar luxation: slippage or dislocation of the kneecap in the rear legs.",
      "Degenerative myelopathy (DM): a progressive neurodegenerative spinal cord disorder leading to late-onset rear-limb ataxia; detectable via DNA testing.",
      "Ophthalmic disorders (including progressive retinal atrophy and cataracts).",
      "Moist dermatitis and ear irritation: skin issues that can develop if corded coats or ears remain damp after bathing or swimming.",
    ],

    preventiveCare: [
      "Verify that breeding stock has certified health evaluations for hips, patellas, eyes, and degenerative myelopathy DNA testing.",
      "Schedule yearly comprehensive veterinary wellness examinations, core vaccinations, and appropriate parasite prevention.",
      "Ensure the dense corded fleece dries completely down to the skin after baths to prevent fungal or bacterial skin infections.",
      "Maintain a lean body condition to minimize stress on hip and stifle joints.",
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation through an accepted screening scheme",
      "Patellar luxation clinical orthopedic evaluation",
      "Comprehensive eye examination by a board-certified veterinary ophthalmologist (CAER/CERF)",
      "Degenerative myelopathy (DM) DNA test for the common variant",
    ],

    dentalCare:
      "Brush teeth multiple times weekly using canine enzymatic paste to prevent plaque buildup and periodontal disease.",

    earCare:
      "Inspect ears weekly for trapped moisture, wax accumulation, or odor, keeping inner canals clean and dry.",

    skinCare:
      "Check the skin beneath cords during weekly separation sessions for burrs, localized redness, or irritation, especially after outdoor outings.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Active individuals and families who enjoy interactive training, agility, and outdoor activities",
      "Owners committed to learning and maintaining the unique hands-on needs of a corded coat",
      "Households with a securely fenced yard where a bouncy herding dog can romp safely",
      "People looking for an extraordinarily intelligent, loyal, and acrobatic canine companion",
    ],

    notIdealFor: [
      "Households seeking a low-maintenance, wash-and-wear coat",
      "Sedentary owners unable to provide daily exercise, training, and mental enrichment",
      "Homes in very hot, humid climates without reliable indoor air conditioning",
      "Dense apartment complexes where natural alert watchdog barking could create tenant friction",
    ],
  },

  funFacts: [
    "Puli is the singular term, while 'Pulik' is the traditional Hungarian plural used by fanciers and shepherds.",
    "A mature Puli coat contains hundreds of individual cords that can take between four and five years to grow to full floor length.",
    "Bred as an acrobatic sheep herder, the Puli is legendary in Hungary for leaping across the backs of crowded sheep to reach the front of the flock.",
    "While black is the most common colour, Pulik also occur in pearl white, grey, and masked fawn, historically allowing shepherds to spot them easily against dark pastures.",
    "Facebook founder Mark Zuckerberg famously owned a white corded Puli named Beast, who became an internet sensation with his mop-like appearance.",
  ],

  faq: [
    {
      question: "Where does the Puli originate?",
      answer:
        "The Puli originates in Hungary, where it was brought by Magyar pastoral tribes over a thousand years ago to herd sheep across the Hungarian plains.",
    },
    {
      question: "How big do Pulik get?",
      answer:
        "Official measurements list males at 39 to 45 cm at the withers and females at 36 to 42 cm, with typical weights ranging from 13.5 to 16 kg for males and 11 to 14 kg for females.",
    },
    {
      question: "Are Puli cords difficult to groom?",
      answer:
        "Corded coats cannot be brushed; cords must be separated by hand down to the skin weekly to prevent matting. Bathing requires thorough rinsing and several hours of drying with a high-velocity blower.",
    },
    {
      question: "Are Pulik good family dogs?",
      answer:
        "Yes, they are affectionate, loyal, and playful with their family members and get along well with respectful children, though herding instincts like gentle ankle-nipping should be guided early.",
    },
    {
      question: "How much exercise does a Puli need daily?",
      answer:
        "A healthy adult Puli needs 45 to 75 minutes of daily physical exercise and mental engagement, excelling at agility, fetch, and scent games.",
    },
    {
      question: "What health tests should I verify before getting a Puli puppy?",
      answer:
        "Ask breeders for certified evaluations of both parents covering hips, patellas, eyes (CAER/CERF exam), and DNA testing for degenerative myelopathy (DM).",
    },
    {
      question: "What colors do Pulik come in?",
      answer:
        "Recognised colours include black, black shaded with rust-red or grey, fawn with a black mask, grey in various shades, and pearl white.",
    },
    {
      question: "Do Pulik shed a lot of hair?",
      answer:
        "No. Shed hairs become trapped inside the cords rather than falling onto furniture, making the breed low-shedding in the home.",
    },
    {
      question: "Can a Puli live in an apartment?",
      answer:
        "Generally no. Their bouncy energy, working drive, and vocal watchdog tendencies make them much better suited to homes with secure yards.",
    },
  ],

  references: [
    "fci-puli-official-standard",
    "american-kennel-club-puli",
    "puli-club-of-america-health-statement",
    "puli-club-of-america-faq",
    "wikimedia-puli-steve-jurvetson",
    "wikimedia-puli-white-canarian",
    "wikimedia-puli-grey-sminthopsis84",
    "the-dog-api",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Left null in accordance with repository schema conventions when no formal taxonomy name is assigned.",
    },

    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names",
        },
        {
          id: "fci-puli-official-standard",
          role: "verified",
          locator: "Breed nomenclature: Puli, Pulik",
        },
        {
          id: "american-kennel-club-puli",
          role: "verified",
          locator: "Breed profile: Hungarian Puli",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Alternate names (Hungarian Puli, Puli Dog, Pulik) verified across standards and reference records.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "verified",
          locator: "FCI classification: Group 1 Sheepdogs and Cattledogs, Section 1 Sheepdogs",
        },
        {
          id: "american-kennel-club-puli",
          role: "verified",
          locator: "Breed profile: Herding Group",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.breed_group",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Combines Herding and Sheepdog classifications without citing registry acronyms in user-facing text.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "verified",
          locator: "Origin: Hungary",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "origin.region": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "verified",
          locator: "Brief Historical Summary: Carpathian Basin and Hungarian pastoral plains",
        },
        {
          id: "american-kennel-club-puli",
          role: "verified",
          locator: "History: Hungarian plains",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Identifies the Carpathian Basin and historical Hungarian pastoral plains.",
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "verified",
          locator: "Brief Historical Summary, General Appearance, Behaviour/Temperament, and Utilisation sections",
        },
        {
          id: "american-kennel-club-puli",
          role: "verified",
          locator: "About the Breed, History, and Traits sections",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "All overview text is synthesized in original phrasing from standard and kennel-club references.",
    },

    "physical.sizeCategory": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "verified",
          locator: "General Appearance and Size sections: medium size, square body",
        },
        {
          id: "american-kennel-club-puli",
          role: "verified",
          locator: "About the Breed: compact, medium-sized herding dog",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "verified",
          locator: "Size — Height at withers: Dogs 39-45 cm, Bitches 36-42 cm",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.height.metric (male 40-44 cm, female 37-41 cm)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Stored in exact published metric centimetres (males 39-45 cm, females 36-42 cm). The Dog API reflects narrower target ranges (40-44 cm / 37-41 cm); official FCI standard numbers are retained.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (male 13.5-16 kg, female 11-14 kg)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Stored in exact published metric kilograms (males 13.5-16 kg, females 11-14 kg) from the structured reference record, as official standards do not bound weight numerically.",
    },

    "physical.weight.male.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (16 kg)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Maximum male weight of 16 kg verified from reference data.",
    },

    "physical.weight.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (14 kg)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Maximum female weight of 14 kg verified from reference data.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "puli-club-of-america-faq",
          role: "verified",
          locator: "FAQ: average lifespan 10-15 years",
        },
        {
          id: "american-kennel-club-puli",
          role: "verified",
          locator: "Breed profile — Life Expectancy: 10-15 years",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.life_span (10-16 years)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Retains the 10-15 year lifespan range supported by parent-club documentation; The Dog API gives 10-16 years.",
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "verified",
          locator: "Coat — Hair: dense undercoat and coarser topcoat intertwine to form cords or ribbon-like locks",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "verified",
          locator: "Coat — Hair section",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "verified",
          locator: "Colour: Pearl white, black, black shaded with rust-red or grey, fawn with black mask, grey",
        },
        {
          id: "american-kennel-club-puli",
          role: "verified",
          locator: "Colors & Markings",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "GET /breeds/{id}/colours",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Restricted to recognized standard coat colors (Pearl White, Black, Black Shaded with Rust-Red or Grey, Fawn with Black Mask, Grey); non-standard endpoint variants are excluded.",
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-puli",
          role: "cited",
          locator: "Breed profile: coat care and shedding",
        },
      ],
      verifiedOn: null,
      note: "Editorial estimate reflecting that shed hairs remain trapped within the cords.",
    },

    "physical.droolingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "cited",
          locator: "Head — Lips: tight, dark pigmented",
        },
      ],
      verifiedOn: null,
      note: "Editorial estimate reflecting clean, tight lips described in the standard.",
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "verified",
          locator: "General Appearance, Head, Body, Tail, and Coat sections",
        },
        {
          id: "american-kennel-club-puli",
          role: "verified",
          locator: "About the Breed: physical characteristics and movement",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "verified",
          locator: "Behaviour / Temperament: Lively, intelligent, alert, very devoted to master and family",
        },
        {
          id: "american-kennel-club-puli",
          role: "verified",
          locator: "Breed profile — Personality & Temperament",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-puli",
          role: "cited",
          locator: "Breed profile — Trait ratings and temperament descriptions",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1-5 ratings based on documented working and temperament traits.",
    },

    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-puli",
          role: "verified",
          locator: "Breed profile — Exercise section",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Daily exercise requirements (45-75 minutes) reflecting an active, agile herding dog.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-puli",
          role: "verified",
          locator: "Breed profile — Grooming section: corded coat separation and bathing",
        },
        {
          id: "puli-club-of-america-faq",
          role: "verified",
          locator: "FAQ: grooming corded coat",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "High grooming guidance for corded coat separation, drying, and ear/paw care.",
    },

    "care.training": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-puli",
          role: "cited",
          locator: "Breed profile — Training and socialization guidance",
        },
      ],
      verifiedOn: null,
      note: "Positive, reward-based training guidance adapted to an intelligent, driven herder.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-puli",
          role: "cited",
          locator: "Breed profile — Exercise, watchdog barking, and activity needs",
        },
      ],
      verifiedOn: null,
      note: "Boolean assessment; high energy, alert barking, and cord upkeep make apartments generally unsuitable.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-puli",
          role: "cited",
          locator: "Breed profile — Exercise and living needs",
        },
      ],
      verifiedOn: null,
      note: "A securely fenced yard provides necessary exercise and outdoor romp space.",
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "cited",
          locator: "Coat — Hair: weather-resistant corded jacket",
        },
      ],
      verifiedOn: null,
      note: "Climate guidance reflecting adaptation to cold plains, with heat-avoidance advice for dense coats.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-puli",
          role: "cited",
          locator: "Breed profile — Temperament: family-oriented, intelligent",
        },
      ],
      verifiedOn: null,
      note: "Guidance on managing alone time for an interactive herding dog.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-puli",
          role: "cited",
          locator: "Breed profile — Nutrition section",
        },
      ],
      verifiedOn: null,
      note: "General canine nutritional recommendations suited to an active, medium-sized herding dog.",
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific senior feeding frequency was established.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "puli-club-of-america-health-statement",
          role: "verified",
          locator: "PCA Health Statement: hips, patellas, eyes, degenerative myelopathy",
        },
        {
          id: "american-kennel-club-puli",
          role: "verified",
          locator: "Breed profile — Health section",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Synthesises parent-club health screening requirements and documented breed health conditions.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "puli-club-of-america-health-statement",
          role: "verified",
          locator: "Health statement: hip dysplasia, patellar luxation, eye disorders, degenerative myelopathy",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Includes documented conditions such as hip dysplasia, patellar luxation, DM, and eye disorders.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "puli-club-of-america-health-statement",
          role: "cited",
          locator: "Health screening protocol",
        },
        {
          id: "american-kennel-club-puli",
          role: "cited",
          locator: "Breed profile — Health and preventive care",
        },
      ],
      verifiedOn: null,
      note: "Proactive veterinary preventive care, complete cord drying to prevent moist dermatitis, and orthopedic management.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "puli-club-of-america-health-statement",
          role: "verified",
          locator: "Required health evaluations: Hips, Patellas, Eyes, Degenerative Myelopathy DNA test",
        },
        {
          id: "american-kennel-club-puli",
          role: "verified",
          locator: "Recommended health tests from the national breed club",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine canine dental hygiene advice.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine ear hygiene for corded ears.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Skin inspection and cord drying advice to avoid moist pyoderma.",
    },

    "suitability.firstTimeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-puli",
          role: "cited",
          locator: "Breed profile — Temperament, training, and coat care needs",
        },
      ],
      verifiedOn: null,
      note: "Editorial assessment; demanding corded coat maintenance and headstrong intelligence make the breed better suited to experienced owners.",
    },

    "suitability.familiesWithChildren": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-puli",
          role: "cited",
          locator: "Breed profile — Traits: Good with Young Children",
        },
      ],
      verifiedOn: null,
      note: "Boolean assessment; playful and affectionate with children under responsible adult supervision.",
    },

    "suitability.seniorOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-puli",
          role: "cited",
          locator: "Breed profile — Energy level and grooming demands",
        },
      ],
      verifiedOn: null,
      note: "Editorial assessment; multi-hour coat upkeep and high exercise demands can be challenging for seniors.",
    },

    "suitability.activeOwners": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-puli",
          role: "verified",
          locator: "Breed profile — Exercise section",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "suitability.apartmentLiving": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-puli",
          role: "cited",
          locator: "Breed profile — Exercise and living needs",
        },
      ],
      verifiedOn: null,
      note: "Aligned with care.livingEnvironment.apartmentSuitable.",
    },

    "suitability.idealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-puli",
          role: "cited",
          locator: "Breed profile — Temperament, exercise, and grooming needs",
        },
      ],
      verifiedOn: null,
      note: "Synthesised owner-matching guidance based on agility, coat upkeep, and active herding drive.",
    },

    "suitability.notIdealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-puli",
          role: "cited",
          locator: "Breed profile — Temperament, exercise, and grooming needs",
        },
      ],
      verifiedOn: null,
      note: "Synthesised owner-matching caveats.",
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "verified",
          locator: "Brief Historical Summary and Coat section",
        },
        {
          id: "american-kennel-club-puli",
          role: "verified",
          locator: "About the Breed and History",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-puli-official-standard",
          role: "verified",
          locator: "Size, Coat, Colour, and Utilisation sections",
        },
        {
          id: "american-kennel-club-puli",
          role: "verified",
          locator: "Breed profile — Weight, Lifespan, Exercise, Grooming, Training, and Health",
        },
        {
          id: "puli-club-of-america-health-statement",
          role: "verified",
          locator: "Parent-club health testing recommendations",
        },
        {
          id: "puli-club-of-america-faq",
          role: "verified",
          locator: "FAQ: lifespan and corded grooming",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },
  },

  updatedOn: "2026-11-08",
};
