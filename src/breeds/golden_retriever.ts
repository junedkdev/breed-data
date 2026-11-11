import type { Breed } from "../schema/breed.types";

export const golden_retriever: Breed = {
  slug: "golden-retriever",
  name: "Golden Retriever",
  scientificName: null,

  alternateNames: ["Golden"],

  group: "Sporting Group",

  origin: {
    country: "United Kingdom",
    region: "Scotland",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Golden-retriever-dog.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Golden-retriever-dog.jpg",
      title: "Golden-retriever-dog.jpg",
      description: "Photograph of a Golden Retriever.",
      creator: "Karen Arnold",
      uploader: "Brooks patty",
      capturedOn: null,
      uploadedOn: "2018-07-23",
      width: 1920,
      height: 1440,
      licenseId: "cc0-1.0",
      attribution:
        "Photo by Karen Arnold, via Wikimedia Commons; CC0 1.0. Attribution is provided voluntarily.",
      restrictions: null,
      metadataCheckedOn: "2026-11-11",
    },
  ],

  overview: {
    summary:
      "A gentle, athletic gundog developed in the Scottish Highlands, celebrated for its golden water-repellent coat, amiable disposition, and eagerness to work closely with humans in retrieving, service roles, and family life.",

    description:
      "The Golden Retriever is a well-proportioned, powerful sporting dog distinguished by a broad skull, kind and intelligent eyes, short drop ears, and a dense, water-repellent double coat. Highly social and responsive to positive training methods, Goldens thrive on active participation in household routines and purposeful outdoor activities. Bred to retrieve waterfowl and upland game across rugged land and cold water, they possess an innate desire to carry objects, swim, and explore scents. While renowned for their patient and cheerful nature, they require consistent early guidance, ample daily exercise, and regular grooming to prevent matting and manage seasonal shedding.",

    history:
      "The breed originated in mid-nineteenth-century Scotland at the Guisachan estate in Glen Affric, Inverness-shire, founded by Dudley Marjoribanks (later Lord Tweedmouth). Seeking a superior retriever suited to the wet, mountainous Scottish terrain, Marjoribanks crossed a yellow wavy-coated retriever named Nous with a Tweed Water Spaniel bitch named Belle. Subsequent deliberate crosses introduced Irish Setter, Bloodhound, and wavy- and flat-coated retrievers to refine tracking ability, nose sensitivity, and biddability. Today, the Golden Retriever excels not only as a classic hunting retriever but also as a premier guide dog, search-and-rescue canine, and cherished household companion.",

    originalPurpose:
      "Locating and retrieving waterfowl and upland game undamaged from land and water during shooting excursions.",

    currentRoles: [
      "Family companion",
      "Hunting and field retriever",
      "Assistance and guide dog for individuals with disabilities",
      "Search and rescue detection dog",
      "Canine performance sports including agility, obedience, and tracking",
    ],
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "in",
      male: {
        min: 23,
        max: 24,
      },
      female: {
        min: 21.5,
        max: 22.5,
      },
    },

    weight: {
      unit: "lb",
      male: {
        min: 65,
        max: 75,
      },
      female: {
        min: 55,
        max: 65,
      },
    },

    lifespanYears: {
      min: 10,
      max: 12,
    },

    coatType:
      "Dense, water-repellent double coat with a straight or wavy firm outer layer and a thick undercoat",

    coatLength:
      "Medium",

    coatColors: [
      "Dark Golden",
      "Golden",
      "Light Golden",
    ],

    sheddingLevel:
      "Moderate throughout the year, with heavy seasonal shedding in spring and autumn",

    droolingLevel:
      "Low to moderate, primarily observed after vigorous exertion, excitement, or around food",

    distinctiveFeatures: [
      "Broad, well-chiselled head with a friendly, eager facial expression",
      "Medium-sized drop ears lying close to the cheeks and set just above eye level",
      "Dense, water-resistant double coat with distinctive feathering on the neck, thighs, legs, and tail",
      "Substantial bone and muscular, balanced frame built for sustained swimming and retrieving",
      "Thick, muscular tail carried level with the back with a characteristic lively action",
      "Round, compact feet with thick pads suited to diverse hunting terrain",
    ],
  },

  temperament: {
    traits: [
      "Friendly",
      "Intelligent",
      "Devoted",
      "Reliable",
      "Eager to please",
      "Confident",
      "Gentle-natured",
      "Enthusiastic retriever",
    ],

    scores: {
      affection: 5,
      withChildren: 5,
      withDogs: 5,
      withStrangers: 5,
      protectiveness: 2,
      independence: 2,
      trainability: 5,
      barking: 2,
      energy: 4,
    },
  },

  care: {
    exercise: {
      level:
        "High — adult dogs require regular daily physical exertion and purposeful mental stimulation to stay healthy and contented.",
      minutesPerDay: null,
      activities: [
        "Brisk daily walks and trail hikes",
        "Supervised swimming and water-retrieving sessions",
        "Interactive games of fetch with balls or dummies",
        "Positive-reinforcement obedience and trick routines",
        "Scent-tracking exercises and food-dispensing puzzle toys",
        "Dog sports including agility, rally, and dock diving",
      ],
    },

    grooming: {
      level:
        "Moderate, requiring daily attention during heavy seasonal coat transitions.",
      brushing:
        "Brush two to three times weekly with a slicker brush and undercoat rake, increasing to daily sessions during shedding seasons to remove dead fur and prevent mats behind the ears and feathering.",
      bathing:
        "Bathe every few months or as needed when soiled, using a gentle canine shampoo and drying the thick coat thoroughly to prevent skin irritation.",
      notes: [
        "Routinely inspect and dry the drop ears, especially after swimming, to minimize the risk of trapped moisture and ear infections.",
        "Regularly trim nails to prevent splaying and discomfort during walking.",
        "Maintain daily dental hygiene using canine-formulated toothpaste and arrange professional dental assessments as advised by a veterinarian.",
        "Never shave the insulating double coat unless specifically directed by a veterinarian for medical intervention.",
        "Examine the skin and coat for hot spots, burrs, ticks, or irritation after field excursions.",
      ],
    },

    training: {
      difficulty:
        "Easy to moderate — highly biddable and responsive to positive reinforcement, though exuberant adolescent energy requires consistent boundaries.",
      tips: [
        "Emphasize reward-based training techniques utilizing treats, play, and praise rather than harsh corrections.",
        "Establish loose-leash walking, reliable recall, and four-paws-on-the-floor greetings early to manage exuberant growth.",
        "Direct natural mouthing and carrying instincts toward appropriate toys and safe chews.",
        "Incorporate calm settling routines indoors alongside energetic outdoor activities.",
        "Maintain mental challenge through progressive scent games, retrieval drills, and obedience sequences.",
      ],
      socialization:
        "Introduce young dogs gently to varied environments, diverse people, respectful dogs, and novel sights and sounds, continuing positive exposure through maturity to foster balanced confidence.",
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: [
        "Temperate climates",
        "Cool and cold climates with ample outdoor protection",
        "Warm climates with air conditioning, plentiful shade, fresh water, and exercise scheduled during cooler morning and evening hours",
      ],
      aloneTimeTolerance:
        "Low to moderate — thrives on human companionship and can develop separation anxiety or destructive chewing habits if left alone for prolonged periods without enrichment.",
    },
  },

  nutrition: {
    dietType:
      "High-quality commercial or balanced home-prepared diet formulated for large sporting breeds",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Provide a nutritionally complete diet tailored to the dog's life stage, activity demands, and physical condition. Accurately measure meals rather than free-feeding, and ensure constant access to clean, fresh water.",

    considerations: [
      "Carefully monitor caloric intake and body condition score to prevent obesity, which places excess stress on joints and exacerbates dysplasia.",
      "Feed large-breed puppy formulations that regulate calcium and phosphorus levels to support steady skeletal growth.",
      "Factor all training treats into the total daily caloric allowance to avoid unintended weight gain.",
      "Avoid vigorous exercise immediately before or after substantial meals to help mitigate gastric dilatation-volvulus risks.",
      "Consult a veterinarian regarding diet modifications or nutritional adjustments as the dog ages or health needs shift.",
    ],

    note:
      "These suggestions provide general nutritional guidance; specific caloric targets and feeding routines should be customized with a veterinary professional.",
  },

  health: {
    overview:
      "While Golden Retrievers are active and resilient dogs, they are predisposed to specific hereditary conditions including joint dysplasias, cardiac disorders, hereditary eye diseases, and certain cancers. Health screening of breeding parents significantly reduces hereditary risks, and proactive veterinary care helps ensure early detection and management.",

    commonConditions: [
      "Hip dysplasia",
      "Elbow dysplasia",
      "Subvalvular aortic stenosis (SAS)",
      "Hereditary eye conditions including pigmentary uveitis, cataracts, and progressive retinal atrophy (PRA)",
      "Neuronal ceroid lipofuscinosis 5 (NCL5)",
      "Skin conditions and atopic allergies",
      "Hypothyroidism",
      "Gastric dilatation-volvulus (bloat)",
    ],

    preventiveCare: [
      "Schedule regular veterinary wellness checkups and maintain current vaccinations and parasite prevention.",
      "Keep the dog at a lean, healthy body condition throughout life to protect orthopedic joint health.",
      "Discuss documented hip, elbow, cardiac, and ophthalmologic evaluations of both parents when acquiring a puppy.",
      "Familiarize yourself with the clinical signs of gastric dilatation-volvulus and seek immediate emergency veterinary attention if suspected.",
      "Maintain consistent dental brushing, ear hygiene, and routine monitoring of skin and lumps.",
    ],

    recommendedScreenings: [
      "Radiographic hip evaluation for joint conformation",
      "Radiographic elbow evaluation for developmental dysplasia",
      "Cardiovascular examination by a board-certified veterinary cardiologist",
      "Comprehensive eye examination by a board-certified veterinary ophthalmologist",
      "DNA testing for neuronal ceroid lipofuscinosis 5 (NCL5) and progressive retinal atrophy mutations",
    ],

    dentalCare:
      "Brush teeth daily with dog-specific enzymatic toothpaste, provide approved dental chews, and arrange professional dental cleanings as recommended by a veterinarian.",

    earCare:
      "Inspect and clean the pendulous ears weekly and dry them thoroughly after swimming or bathing; seek prompt veterinary attention for redness, foul odour, or frequent head-shaking.",

    skinCare:
      "Regularly part the coat to check for hot spots, damp eczema, parasites, or inflammation, and consult a veterinarian for persistent scratching, hair loss, or recurrent ear or skin infections.",
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Active households seeking a sociable, affectionate companion for outdoor activities and family life",
      "Owners enthusiastic about participating in retrieving games, swimming, hiking, or canine performance sports",
      "Families prepared to commit to regular brushing, coat maintenance, and vacuuming loose seasonal hair",
      "Handlers who enjoy positive-reinforcement training and daily interactive engagement",
    ],

    notIdealFor: [
      "Households seeking a hypoallergenic dog or individuals unwilling to tolerate regular shedding and pet hair",
      "Owners who cannot provide consistent daily exercise and interactive companionship",
      "Environments where the dog would be isolated outdoors or left alone for extended periods without mental stimulation",
      "Individuals looking for an aggressive protection dog or detached guardian",
    ],
  },

  funFacts: [
    "The foundation of the breed trace to Guisachan in Scotland, where a yellow wavy-coated retriever was bred to a Tweed Water Spaniel in 1868.",
    "Their gentle soft mouth was selectively developed so they could retrieve waterfowl without causing damage to the game.",
    "Beyond their sporting heritage, their exceptional trainability and empathy make them among the most widely deployed service and guide dogs globally.",
    "Their dense double coat features water-repellent properties that allow them to swim comfortably in chilly Scottish lochs and rivers.",
  ],

  faq: [
    {
      question: "How long does a Golden Retriever typically live?",
      answer:
        "A healthy Golden Retriever has an expected lifespan of 10 to 12 years, supported by proactive veterinary care, healthy weight management, and responsible breeding.",
    },
    {
      question: "Do Golden Retrievers shed heavily?",
      answer:
        "Yes, they shed moderately year-round and experience substantial seasonal coat blows in spring and autumn, requiring regular brushing to control loose fur.",
    },
    {
      question: "Are Golden Retrievers suitable for first-time dog owners?",
      answer:
        "Yes, their biddable temperament, high intelligence, and gentle nature make them well-suited for beginners who can meet their exercise and grooming needs.",
    },
    {
      question: "How much daily exercise does a Golden Retriever require?",
      answer:
        "Adult dogs thrive with at least one to two hours of daily physical activity, including brisk walks, games of fetch, swimming, and mental enrichment.",
    },
    {
      question: "Are Golden Retrievers good with young children?",
      answer:
        "They are generally remarkably patient, friendly, and gentle around children, though adult supervision is always recommended during interactions.",
    },
    {
      question: "What health screenings should prospective owners check for?",
      answer:
        "Prospective owners should verify documented evaluations for hips, elbows, cardiovascular health, and hereditary eye diseases, alongside relevant genetic tests.",
    },
  ],

  references: [
    "akc-golden-retriever-official-standard",
    "akc-golden-retriever-profile",
    "grca-golden-retriever-health-screening",
    "wikimedia-golden-retriever-karen-arnold",
    "the-dog-api",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator: "Breed name and overview",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names",
        },
      ],
      verifiedOn: "2026-11-11",
      note:
        "The informal designation 'Golden' is a ubiquitous colloquial shortening; the registered breed name is Golden Retriever.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No breed-specific scientific name is recognized; general domestic-dog binomials are omitted.",
    },

    group: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator: "Breed group classification",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Classified within the sporting category.",
    },

    origin: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator: "About the Breed: History",
        },
      ],
      verifiedOn: "2026-11-11",
      note:
        "The breed was established in nineteenth-century Scotland, part of the United Kingdom.",
    },

    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator: "About the Breed: History",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Developed in the Scottish Highlands at Guisachan estate.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator:
            "About the Breed; grooming, exercise, training, and nutrition",
        },
        {
          id: "akc-golden-retriever-official-standard",
          role: "cited",
          locator: "General Appearance",
        },
      ],
      verifiedOn: "2026-11-11",
      note:
        "User-facing descriptions are original summaries synthesizing breed history and conformation documentation.",
    },

    physical: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator:
            "Height, weight, life expectancy, coat, and grooming sections",
        },
      ],
      verifiedOn: "2026-11-11",
      note:
        "Physical traits not covered by a more specific standard claim are based on verified breed profile documentation.",
    },

    "physical.sizeCategory": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator: "General appearance and size",
        },
      ],
      verifiedOn: "2026-11-11",
      note: null,
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-golden-retriever-official-standard",
          role: "verified",
          locator: "Size, Proportion, Substance: Height at withers",
        },
      ],
      verifiedOn: "2026-11-11",
      note:
        "Recorded in whole and half inches as published in the official standard: males 23–24 inches, females 21.5–22.5 inches. Dogs deviating more than one inch from these limits are disqualified.",
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-golden-retriever-official-standard",
          role: "verified",
          locator: "Size, Proportion, Substance: Weight",
        },
      ],
      verifiedOn: "2026-11-11",
      note:
        "Recorded in pounds as published in the official standard: males 65–75 lb, females 55–65 lb.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator: "Life expectancy: 10–12 years",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span",
        },
      ],
      verifiedOn: "2026-11-11",
      note:
        "Published life-expectancy range of 10 to 12 years; individual longevity varies based on genetics, weight management, and health care.",
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-golden-retriever-official-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-11-11",
      note:
        "Summarizes the official standard description of a dense, water-repellent double coat.",
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-golden-retriever-official-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-11-11",
      note:
        "Summarizes the official standard description of medium length and moderate feathering.",
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-golden-retriever-official-standard",
          role: "verified",
          locator: "Color",
        },
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Breed colors and markings",
        },
      ],
      verifiedOn: "2026-11-11",
      note:
        "Reflects the three recognized shades of lustrous golden coat: Dark Golden, Golden, and Light Golden.",
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator: "Grooming traits",
        },
      ],
      verifiedOn: "2026-11-11",
      note:
        "Described in breed profile resources as moderate throughout the year with seasonal spikes.",
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator: "Breed traits",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Described as low to moderate in profile summaries.",
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-golden-retriever-official-standard",
          role: "verified",
          locator: "General Appearance; Head; Ears; Body; Tail; Feet",
        },
      ],
      verifiedOn: "2026-11-11",
      note:
        "Original paraphrases of conformation hallmarks described in the official standard.",
    },

    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator: "About the Breed: Personality and traits",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-11",
      note:
        "Traits describe typical breed tendencies; individual canine temperaments can vary.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Breed traits and temperament evaluations",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates synthesized from qualitative behavioral descriptions.",
    },

    "temperament.scores.affection": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Personality traits",
        },
      ],
      verifiedOn: null,
      note: "Reflects profound affection for human companions.",
    },

    "temperament.scores.withChildren": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Family life compatibility",
        },
      ],
      verifiedOn: null,
      note: "Known for patient and gentle demeanor around children.",
    },

    "temperament.scores.withDogs": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Dog-to-dog friendliness",
        },
      ],
      verifiedOn: null,
      note: "Generally very sociable and peaceable with other canines.",
    },

    "temperament.scores.withStrangers": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Social traits",
        },
      ],
      verifiedOn: null,
      note: "Typically welcomes unfamiliar people warmly.",
    },

    "temperament.scores.protectiveness": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Watchdog tendencies",
        },
      ],
      verifiedOn: null,
      note: "Low guardian instincts; friendly toward visitors.",
    },

    "temperament.scores.independence": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Trainability and responsiveness",
        },
      ],
      verifiedOn: null,
      note: "Low independence; highly attached and eager to please handlers.",
    },

    "temperament.scores.trainability": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Trainability rating",
        },
      ],
      verifiedOn: null,
      note: "Exceptionally biddable, intelligent, and responsive.",
    },

    "temperament.scores.barking": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Vocal behavior",
        },
      ],
      verifiedOn: null,
      note: "Generally quiet; barks primarily to alert or in play.",
    },

    "temperament.scores.energy": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Activity level",
        },
      ],
      verifiedOn: null,
      note: "High energy requiring purposeful daily outlets.",
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Grooming, exercise, and training guidance",
        },
      ],
      verifiedOn: null,
      note:
        "General practical dog-care recommendations adapted to a sporting retriever.",
    },

    "care.exercise.level": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Exercise section",
        },
      ],
      verifiedOn: null,
      note:
        "High exercise demand characteristic of an athletic gundog.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No single evidence-based daily minute figure applies across all life stages and health conditions.",
    },

    "care.livingEnvironment": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Exercise and temperament descriptions",
        },
      ],
      verifiedOn: null,
      note:
        "Adaptable to varied homes provided exercise and enrichment needs are met.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Exercise and lifestyle adaptability",
        },
      ],
      verifiedOn: null,
      note: "Can adapt to apartment living with dedicated outdoor activity.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Exercise guidance",
        },
      ],
      verifiedOn: null,
      note: "Well suited to homes with secure outdoor yard space.",
    },

    "care.livingEnvironment.climates": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Coat and care",
        },
      ],
      verifiedOn: null,
      note: "Dense double coat provides insulation in temperate and cold climates.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Temperament and socialization",
        },
      ],
      verifiedOn: null,
      note: "Sociable nature predisposes breed to distress when left isolated.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Nutritional assessment guidelines and body condition scoring",
        },
      ],
      verifiedOn: null,
      note:
        "General nutritional principles; feeding portions and schedules should be customized with veterinary guidance.",
    },

    "nutrition.dietType": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General sporting breed nutritional guidance.",
    },

    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A fixed meal frequency is not specified because needs vary with puppy age and growth rate.",
    },

    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A fixed meal frequency is not specified because individual caloric requirements vary.",
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A fixed meal frequency is not specified because metabolic rates vary in aging canines.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator: "Health and recommended health tests",
        },
        {
          id: "grca-golden-retriever-health-screening",
          role: "verified",
          locator: "Health screenings for the parents of a litter",
        },
      ],
      verifiedOn: "2026-11-11",
      note:
        "Hereditary risks and screening recommendations reflect parent club guidance and veterinary health surveys.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "grca-golden-retriever-health-screening",
          role: "cited",
          locator: "General health advice",
        },
      ],
      verifiedOn: null,
      note: "General preventive care recommendations.",
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
      note: "General canine dental-care advice.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General ear hygiene advice for drop-eared retrieving dogs.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General skin and coat inspection guidance.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator:
            "Breed temperament, exercise, training, and grooming descriptions",
        },
      ],
      verifiedOn: null,
      note:
        "Lifestyle suitability recommendations are editorial assessments, not definitive guarantees of compatibility.",
    },

    "suitability.firstTimeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Personality and trainability",
        },
      ],
      verifiedOn: null,
      note: "Highly recommended for novice owners willing to provide exercise and training.",
    },

    "suitability.familiesWithChildren": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Family compatibility",
        },
      ],
      verifiedOn: null,
      note: "Excellent family companion with proven gentleness around children.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No standardized rating; suitability depends heavily on the individual dog's energy and the owner's mobility.",
    },

    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Activity and exercise",
        },
      ],
      verifiedOn: null,
      note: "Ideal companion for outdoor and active lifestyles.",
    },

    "suitability.apartmentLiving": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "cited",
          locator: "Lifestyle adaptability",
        },
      ],
      verifiedOn: null,
      note: "Can thrive in apartments when exercise commitments are met.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator: "About the Breed: History",
        },
        {
          id: "akc-golden-retriever-official-standard",
          role: "cited",
          locator: "General Appearance and Coat",
        },
      ],
      verifiedOn: "2026-11-11",
      note:
        "Original summaries of documented breed history, physical attributes, and working roles.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-golden-retriever-profile",
          role: "verified",
          locator:
            "Life expectancy, health, grooming, exercise, training, and nutrition",
        },
        {
          id: "grca-golden-retriever-health-screening",
          role: "cited",
          locator: "Health screenings for the parents of a litter",
        },
      ],
      verifiedOn: "2026-11-11",
      note:
        "Answers synthesize verified breed information and general veterinary care advice.",
    },
  },

  updatedOn: "2026-11-11",
};
