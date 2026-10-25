import type { Breed } from "../schema/breed.types";

export const broholmer: Breed = {
  slug: "broholmer",
  name: "Broholmer",
  scientificName: null,
  alternateNames: [],
  group:
    "FCI Group 2: Pinscher and Schnauzer, Molossoid and Swiss Mountain and Cattledogs; Section 2.1: Molossian, Mastiff type",
  origin: {
    country: "Denmark",
    region: null,
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Broholmer_634.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Broholmer_634.jpg",
      title: "Broholmer 634.jpg",
      description:
        "A Broholmer photographed at the World Dog Show in Poznań, Poland.",
      creator: "Pleple2000",
      uploader: "Pleple2000",
      capturedOn: "2006-11-11",
      uploadedOn: "2006-11-22",
      width: 2916,
      height: 2112,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Pleple2000, via Wikimedia Commons, CC BY-SA 3.0. Changes, if any, must be indicated. Adapted versions must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-25",
    },
  ],
  overview: {
    summary:
      "The Broholmer is a powerful Danish Mastiff-type dog known for its steady nature, confident presence, and close bond with its household. Despite its imposing size, the breed is intended to be composed and friendly while remaining attentive to its surroundings.",
    description:
      "Large and strongly built, the Broholmer has a rectangular outline, broad head, muscular neck, deep chest, and short, close-fitting coat with an undercoat. Its expression and movement are generally calm rather than hurried. The breed standard describes a dog that is good-natured, sociable, watchful, and self-assured. Its size and guarding background make early socialisation, careful handling, and consistent reward-based training especially important. The short coat is comparatively straightforward to maintain, but the dog's substantial frame calls for sensible exercise and thoughtful management as it grows.",
    history:
      "The Broholmer type has been known in Denmark since the Middle Ages and was used for stag hunting before becoming associated with guarding large farms and estates. During the late eighteenth century, Chamberlain Sehested of Broholm helped establish and increase the breed, whose name comes from that estate. The population declined sharply after the Second World War and the breed came close to disappearing. From around 1975, dedicated enthusiasts worked with the Danish Kennel Club to rebuild the population. The FCI now recognises the Broholmer as a Danish breed.",
    originalPurpose:
      "Historically used for stag hunting and later primarily for guarding large farms and estates; today recognised as a companion and guard dog.",
    currentRoles: [
      "Household companion",
      "Watchful home and property companion",
      "Family dog in a home able to manage a very large breed",
    ],
  },
  physical: {
    sizeCategory: "large",
    height: {
      unit: "cm",
      male: {
        min: 75,
        max: 75,
      },
      female: {
        min: 70,
        max: 70,
      },
    },
    weight: {
      unit: "kg",
      male: {
        min: 50,
        max: 70,
      },
      female: {
        min: 40,
        max: 60,
      },
    },
    lifespanYears: {
      min: 8,
      max: 10,
    },
    coatType: "Short, close-lying coat with an undercoat.",
    coatLength: "Short and close to the body.",
    coatColors: [
      "Yellow, with or without a black mask",
      "Red, with or without a black mask",
      "Black",
      "Permitted white markings on the chest, feet, and tip of the tail",
    ],
    sheddingLevel: "moderate",
    droolingLevel: "moderate",
    distinctiveFeatures: [
      "Large, powerful Mastiff-type build with a rectangular body outline",
      "Broad, substantial head and a short-looking, massive muzzle",
      "Strong, muscular neck with some loose skin around the throat",
      "Broad, deep chest and powerful forequarters",
      "Round eyes ranging from light to dark amber",
      "Medium-sized, hanging ears carried close to the cheeks",
      "Broad-based tail that hangs when relaxed and rises during movement",
      "Short coat with an undercoat",
    ],
  },
  temperament: {
    traits: [
      "Calm and generally even-tempered",
      "Good-natured and friendly",
      "Watchful without needing to be constantly active",
      "Self-assured",
      "Often closely attached to its household",
      "Capable of a confident guarding presence",
      "Benefits from early socialisation because of its size and strength",
    ],
    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 4,
      independence: 3,
      trainability: 4,
      barking: 3,
      energy: 3,
    },
  },
  care: {
    exercise: {
      level: "moderate",
      minutesPerDay: null,
      activities: [
        "Regular, steady walks suited to the dog's age and condition",
        "Sniffing and exploring in safe, controlled areas",
        "Short training sessions that combine movement and mental engagement",
        "Calm outdoor time with the household",
        "Low-impact activity while a young dog is still growing",
      ],
    },
    grooming: {
      level: "low",
      brushing:
        "Brush regularly, for example once or twice a week, and more often when shedding increases.",
      bathing:
        "Bathe when needed rather than on a rigid schedule; use a dog-appropriate shampoo and dry the coat thoroughly.",
      notes: [
        "The short coat is relatively easy to maintain, but it still benefits from regular brushing.",
        "Check the skin for irritation, lumps, parasites, or areas of persistent redness during grooming.",
        "Inspect the ears regularly and clean them only as needed with a dog-safe product.",
        "Trim nails as needed and check the paws after outdoor activity.",
        "Brush the teeth regularly with dog toothpaste.",
      ],
    },
    training: {
      difficulty: "moderate",
      tips: [
        "Start socialisation and basic training early, before the dog reaches its adult size and strength.",
        "Use calm, consistent, reward-based training rather than intimidation or physical corrections.",
        "Practise loose-leash walking and polite greetings as routine skills.",
        "Introduce different people, dogs, surfaces, sounds, and everyday situations gradually and positively.",
        "Teach reliable handling skills for veterinary examinations, grooming, and nail care.",
        "Use short, varied sessions and reinforce calm behaviour around visitors.",
      ],
      socialization:
        "Early, ongoing, positive socialisation is important. Introduce people, animals, and new environments at a pace that keeps the dog comfortable, and supervise interactions because of the breed's size.",
    },
    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,
      climates: [
        "Temperate climates",
        "Cool climates",
        "In warm weather, provide shade, fresh water, ventilation, and exercise during cooler parts of the day",
      ],
      aloneTimeTolerance:
        "Individual tolerance varies. Build alone-time gradually and avoid routinely leaving the dog isolated for long periods.",
    },
  },
  nutrition: {
    dietType:
      "A complete and balanced diet appropriate for the dog's life stage, body condition, and health.",
    feedingFrequency: {
      puppy:
        "Feed the number of meals recommended for the puppy's age and the chosen complete growth diet; divide the daily amount into several meals.",
      adult:
        "Many adult dogs do well with two measured meals per day; adjust portions to maintain a healthy body condition.",
      senior:
        "Adjust meal size and diet to activity, body condition, dental health, and veterinary advice.",
    },
    guidelines:
      "Use a complete diet appropriate for a large-breed dog and monitor body condition as well as weight. Follow the food manufacturer's feeding guidance as a starting point, then adjust with veterinary advice. Keep fresh water available. Treats should make up only a small part of daily intake.",
    considerations: [
      "Avoid overfeeding and excessive weight gain, which place additional load on joints.",
      "Growing large-breed puppies need controlled, appropriate growth rather than rapid weight gain.",
      "Do not add calcium or other supplements to a complete growth diet unless advised by a veterinarian.",
      "Keep meals and exercise routines consistent, and discuss the risk of gastric dilatation-volvulus with a veterinarian.",
      "Dietary needs vary with age, activity, reproductive status, and medical conditions.",
    ],
    note:
      "This is general feeding guidance, not an individual ration calculation. A veterinarian can help select a diet and portion size for the dog's age, growth, body condition, and health.",
  },
  health: {
    overview:
      "No single lifespan or health outcome can be guaranteed for an individual Broholmer. The breed club has documented a history of structured health monitoring and discusses several conditions relevant to breeding and screening. Ask for the parents' health records and speak with a veterinarian about an appropriate preventive-care plan.",
    commonConditions: [
      "Hip dysplasia: a developmental joint condition monitored by the breed club.",
      "Elbow dysplasia: an elbow-joint condition included in breed health monitoring.",
      "Osteochondrosis and osteochondritis dissecans (OCD): developmental joint conditions discussed in breed health resources.",
      "Spondylosis: a spinal condition included among the breed club's health topics.",
      "Subaortic stenosis (SAS): a heart condition for which the breed club provides information about cardiac assessment.",
    ],
    preventiveCare: [
      "Schedule routine veterinary examinations and keep vaccinations and parasite prevention appropriate to the dog's circumstances.",
      "Maintain a lean body condition and build exercise gradually, particularly during growth.",
      "Discuss joint health and appropriate activity with a veterinarian as the dog matures.",
      "Seek prompt veterinary advice for exercise intolerance, fainting, persistent lameness, unusual stiffness, or sudden abdominal swelling.",
      "Discuss signs of gastric dilatation-volvulus and the need for emergency care with a veterinarian.",
      "Maintain dental care, nail care, and regular skin and ear checks.",
    ],
    recommendedScreenings: [
      "Hip evaluation, particularly when assessing a potential breeding dog's health history",
      "Elbow evaluation, particularly when assessing a potential breeding dog's health history",
      "Discuss cardiac examination and whether further assessment for subaortic stenosis is appropriate",
      "Review the parents' available health records and the current recommendations of the relevant national kennel club and breed club",
    ],
    dentalCare:
      "Brush regularly with dog toothpaste and arrange veterinary dental checks. Seek advice for persistent bad breath, bleeding gums, pain, or difficulty eating.",
    earCare:
      "Check the hanging ears routinely for redness, odour, discharge, or discomfort. Clean only when needed and consult a veterinarian if signs of infection appear.",
    skinCare:
      "Inspect the skin during brushing, especially around areas where skin folds or moisture may accumulate. Ask a veterinarian about persistent itching, redness, lumps, or recurrent skin problems.",
  },
  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,
    idealFor: [
      "Households with enough space and resources for a very large dog",
      "Owners prepared to train and manage a strong dog consistently",
      "Families able to supervise children and dog interactions",
      "People seeking a calm companion with a watchful presence",
      "Owners committed to socialisation, routine exercise, and preventive veterinary care",
    ],
    notIdealFor: [
      "People unable to safely manage a very large, powerful adult dog",
      "Homes where the dog would routinely be left alone for long periods",
      "Owners seeking a small, highly portable dog",
      "Households unwilling to invest in early socialisation and leash training",
      "Living situations with frequent stairs or limited room to move comfortably, especially during growth",
    ],
  },
  funFacts: [
    "The breed's name comes from Broholm, the Danish estate associated with Chamberlain Sehested and the breed's development.",
    "Although the Broholmer's history includes stag hunting, it later became particularly associated with guarding large farms and estates.",
    "The breed nearly disappeared after the Second World War, and organised efforts to rebuild its population began around 1975.",
    "The FCI classifies the Broholmer as a Mastiff-type dog in Group 2, Section 2.1.",
  ],
  faq: [
    {
      question: "Where does the Broholmer come from?",
      answer:
        "The Broholmer originates in Denmark. Its history is linked to Danish estates, where it was used for hunting and later for guarding large properties.",
    },
    {
      question: "How large does a Broholmer get?",
      answer:
        "The breed standard gives an approximate height of 75 cm for males and 70 cm for females. Standard weight ranges are 50–70 kg for males and 40–60 kg for females.",
    },
    {
      question: "Is the Broholmer usually aggressive?",
      answer:
        "The breed standard describes a calm, good-natured, friendly, watchful, and self-assured dog. Individual temperament still varies, so responsible breeding, socialisation, training, and supervision matter.",
    },
    {
      question: "Does the Broholmer need extensive grooming?",
      answer:
        "Its short coat is relatively easy to maintain. Regular brushing, nail care, dental care, and routine checks of the skin and ears are still important.",
    },
    {
      question: "What health checks should a prospective owner ask about?",
      answer:
        "Ask for the parents' health records, including available hip and elbow evaluations. Discuss cardiac assessment and any current breed-club recommendations with a veterinarian or responsible breeder.",
    },
    {
      question: "Is the Broholmer suitable for apartment living?",
      answer:
        "It is a very large dog and generally benefits from adequate indoor space and easy access to suitable outdoor exercise. Suitability depends on the individual dog, the building, local rules, and the owner's ability to meet its needs.",
    },
  ],
  references: [
    "fci-broholmer-standard-2025",
    "dkk-broholmer-profile",
    "american-kennel-club-broholmer",
    "royal-canin-broholmer",
    "broholmerselskabet-health",
    "wikimedia-broholmer-634",
  ],
  evidence: {
    alternateNames: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No additional alternate name is recorded because a sufficiently reliable synonym was not established in the consulted sources.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A breed-specific scientific name was not established. No species-level label has been substituted.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-broholmer-standard-2025",
          role: "verified",
          locator: "FCI classification",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Uses the FCI group and section classification stated in the current standard.",
    },
    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-broholmer-standard-2025",
          role: "verified",
          locator: "Origin",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The current official standard specifies Denmark as the country of origin but does not establish a more precise geographic region.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-broholmer-standard-2025",
          role: "verified",
          locator: "Utilization, brief historical summary, general appearance, behaviour and temperament",
        },
        {
          id: "dkk-broholmer-profile",
          role: "cited",
          locator: "Breed profile and breed characteristics",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "The user-facing description is an original synthesis of the breed standard and kennel-club history.",
    },
    "physical.sizeCategory": {
      reliability: "reliable_source",
      sources: [
        {
          id: "dkk-broholmer-profile",
          role: "verified",
          locator: "Size and breed characteristics",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The Danish Kennel Club categorises the breed as large.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-broholmer-standard-2025",
          role: "verified",
          locator: "Size and weight",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "The standard gives approximate heights, not formal minimum-to-maximum intervals; equal numeric bounds represent the stated approximate target.",
    },
    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-broholmer-standard-2025",
          role: "verified",
          locator: "Size and weight",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-broholmer",
          role: "verified",
          locator: "Average size and life expectancy",
        },
        {
          id: "royal-canin-broholmer",
          role: "conflicting",
          locator: "Breed specifics; average life expectancy",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "The American Kennel Club lists 8–10 years; Royal Canin lists a broader 7–12-year range. Lifespan is variable and should not be treated as a guarantee.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-broholmer-standard-2025",
          role: "verified",
          locator: "Coat: hair",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-broholmer-standard-2025",
          role: "verified",
          locator: "Coat: hair",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-broholmer-standard-2025",
          role: "verified",
          locator: "Coat: colour",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-broholmer-standard-2025",
          role: "cited",
          locator: "Coat: short hair with undercoat",
        },
        {
          id: "dkk-broholmer-profile",
          role: "cited",
          locator: "Coat care",
        },
      ],
      verifiedOn: null,
      note:
        "Moderate is an editorial estimate based on the short double coat and general grooming description, not a measured shedding rate.",
    },
    "physical.droolingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-broholmer-standard-2025",
          role: "cited",
          locator: "Head and lips",
        },
      ],
      verifiedOn: null,
      note:
        "Moderate is an editorial estimate for a Mastiff-type dog with somewhat pendulous lips; individual dogs vary.",
    },
    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-broholmer-standard-2025",
          role: "verified",
          locator: "General appearance, head, eyes, ears, neck, body, tail and coat",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-broholmer-standard-2025",
          role: "verified",
          locator: "Behaviour and temperament",
        },
        {
          id: "dkk-broholmer-profile",
          role: "cited",
          locator: "Temperament and everyday handling",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "These traits describe breed tendencies, not guaranteed behaviour in every individual.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-broholmer-standard-2025",
          role: "cited",
          locator: "Behaviour and temperament",
        },
        {
          id: "dkk-broholmer-profile",
          role: "cited",
          locator: "Temperament and activity level",
        },
      ],
      verifiedOn: null,
      note:
        "All 1–5 temperament scores are editorial estimates for comparative app display, not validated psychometric measurements.",
    },
    "care.exercise": {
      reliability: "general_guidance",
      sources: [
        {
          id: "dkk-broholmer-profile",
          role: "cited",
          locator: "Needs, activity level and guidance for young dogs",
        },
      ],
      verifiedOn: null,
      note:
        "Exercise suggestions are general welfare guidance; adapt them to the dog's age, fitness, and veterinary advice.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No verified breed-specific daily exercise duration was established, so a numeric range is not supplied.",
    },
    "care.grooming": {
      reliability: "general_guidance",
      sources: [
        {
          id: "dkk-broholmer-profile",
          role: "cited",
          locator: "Coat care",
        },
        {
          id: "fci-broholmer-standard-2025",
          role: "cited",
          locator: "Coat",
        },
      ],
      verifiedOn: null,
      note:
        "Routine grooming recommendations combine the documented coat type with standard dog-care advice.",
    },
    "care.training": {
      reliability: "general_guidance",
      sources: [
        {
          id: "dkk-broholmer-profile",
          role: "cited",
          locator: "Learning, handling and socialisation guidance",
        },
      ],
      verifiedOn: null,
      note:
        "Training advice is general guidance tailored to a large, powerful breed; it is not a claim that every dog has identical learning needs.",
    },
    "care.livingEnvironment": {
      reliability: "estimate",
      sources: [
        {
          id: "dkk-broholmer-profile",
          role: "cited",
          locator: "Needs and activity level",
        },
        {
          id: "royal-canin-broholmer",
          role: "cited",
          locator: "Key facts and breed specifics",
        },
      ],
      verifiedOn: null,
      note:
        "Living-environment ratings are practical editorial guidance, not official suitability rules. Individual circumstances matter.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Feeding advice is general canine nutrition guidance, not a breed-specific clinical prescription.",
    },
    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "broholmerselskabet-health",
          role: "verified",
          locator: "Health overview and historical health monitoring",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "The overview reflects the breed club's discussion of health monitoring and does not imply that every Broholmer has a health problem.",
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "broholmerselskabet-health",
          role: "verified",
          locator: "Health topics: hip dysplasia, elbow dysplasia, OCD, spondylosis and aortic stenosis",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "These are breed-club health topics and screening considerations. They are not ranked by prevalence here and should not be interpreted as a diagnosis or proof that the breed has unusually high rates of each condition.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General preventive-care guidance for dogs, adapted to the breed's size and growth needs.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "broholmerselskabet-health",
          role: "verified",
          locator: "Breed health pages and links to joint and cardiac topics",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Ask a veterinarian and the relevant breed club about current local screening protocols, especially before breeding.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General veterinary dental-care guidance.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General veterinary ear-care guidance.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General skin-monitoring guidance.",
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "dkk-broholmer-profile",
          role: "cited",
          locator: "Breed needs, size, temperament and activity",
        },
        {
          id: "fci-broholmer-standard-2025",
          role: "cited",
          locator: "General appearance and temperament",
        },
      ],
      verifiedOn: null,
      note:
        "Suitability flags are editorial guidance based on the dog's size and general breed tendencies. They are not universal rules about which people may own the breed.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-broholmer-standard-2025",
          role: "verified",
          locator: "Brief historical summary and FCI classification",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-broholmer-standard-2025",
          role: "verified",
          locator: "Origin, history, size, coat and temperament",
        },
        {
          id: "dkk-broholmer-profile",
          role: "cited",
          locator: "Breed needs and everyday handling",
        },
        {
          id: "broholmerselskabet-health",
          role: "cited",
          locator: "Health information",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Answers are original summaries; individual health, behaviour, and housing needs vary.",
    },
  },
  updatedOn: "2026-10-25",
};
