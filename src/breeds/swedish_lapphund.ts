import type { Breed } from "../schema/breed.types";

export const swedish_lapphund: Breed = {
  slug: "swedish-lapphund",
  name: "Swedish Lapphund",
  scientificName: null,
  alternateNames: [
    "Svensk lapphund",
    "Schwedischer Lapphund",
    "Perro Sueco de Laponia",
    "Lapphund Suedois",
    "Ruotsinlapinkoira",
  ],
  group: "FCI Group 5: Spitz and Primitive Types; Section 3: Nordic Watchdogs and Herders",
  origin: {
    country: "Sweden",
    region: null,
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Swedish_Lapphund.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Swedish_Lapphund.jpg",
      title: "Swedish Lapphund.jpg",
      description: "A Swedish Lapphund, male dog.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2017-12-08",
      uploadedOn: null,
      width: 2115,
      height: 1769,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Changes, if any, must be indicated. Adapted material must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-26",
    },
  ],
  overview: {
    summary:
      "A lively, intelligent Nordic spitz breed with a dense black double coat, a strong working heritage, and an affectionate, alert nature.",
    description:
      "The Swedish Lapphund is a slightly smaller-than-medium, rectangularly built spitz with erect ears, a profuse weather-resistant double coat, and a bushy tail carried curled over the back when moving. Traditionally valued for herding reindeer, hunting, and watching over people and property, it remains an adaptable companion for households that can give it regular activity and purposeful interaction. The breed is generally described as affectionate, attentive, willing to work, and responsive to training. Its thick coat needs routine care, and its alert nature makes early training and considerate management of barking useful.",
    history:
      "The Swedish Lapphund is an old Nordic breed associated with the Sami people and the northern Scandinavian region. It was used historically for hunting and watching, and later became closely associated with reindeer herding. As traditional Lapphund numbers declined during the early twentieth century, enthusiasts worked to find and preserve dogs that retained the breed's characteristic type. The breed is now kept mainly as a versatile companion, although its working heritage remains evident in its alertness, stamina, and willingness to take part in activities.",
    originalPurpose:
      "Reindeer herding, hunting, and watchdog duties; now mainly a versatile companion.",
    currentRoles: [
      "Family companion",
      "Reindeer herding where the work is still practised",
      "Watchdog",
      "Obedience and rally activities",
      "Agility",
      "Tracking and scent-based activities",
      "Other suitable dog sports and enrichment work",
    ],
  },
  physical: {
    sizeCategory: "Medium, slightly less than medium in the FCI description",
    height: {
      unit: "cm",
      male: {
        min: 45,
        max: 51,
      },
      female: {
        min: 40,
        max: 46,
      },
    },
    weight: {
      unit: "kg",
      male: {
        min: 16,
        max: 20,
      },
      female: {
        min: 14,
        max: 16,
      },
    },
    lifespanYears: {
      min: 12,
      max: 14,
    },
    coatType:
      "Profuse, weather-resistant double coat with straight, stand-off outer hair and a dense, finely curled undercoat",
    coatLength:
      "Short on the head and front of the legs; longer on the chest, backs of the legs, tail, and around the neck, where it forms a ruff",
    coatColors: [
      "Usually solid black",
      "Black with typical bronzing or bear-brown shading",
      "White markings on the chest, feet, or tail tip are permitted",
    ],
    sheddingLevel:
      "Seasonal shedding is expected from the dense double coat; the amount varies with the individual and season.",
    droolingLevel: null,
    distinctiveFeatures: [
      "Slightly less than medium-sized, with a rectangular body shape",
      "Proud head carriage and a rounded forehead",
      "Small, triangular, erect ears with slightly rounded tips",
      "Brown, round, fairly large eyes that are not protruding",
      "Strong, evenly tapering muzzle",
      "Profuse double coat that stands away from the body",
      "Long, bushy tail carried curled over the back when moving",
      "Oval feet with closely knit toes and protective hair between the pads",
      "Usually black coat, often with bronzing and sometimes small white markings",
    ],
  },
  temperament: {
    traits: [
      "Lively",
      "Alert",
      "Kind and affectionate",
      "Attentive and receptive",
      "Willing to work",
      "Enduring and robust",
      "Responsive to training",
      "Versatile in suitable canine activities",
      "Likely to notice unfamiliar activity around the home",
    ],
    scores: {
      affection: 5,
      withChildren: 4,
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
      level:
        "Active. Regular physical exercise and mental work help meet the needs of this alert, willing-to-work breed.",
      minutesPerDay: null,
      activities: [
        "Daily walks and opportunities to explore safely",
        "Reward-based obedience training",
        "Agility or rally-style activities where suitable",
        "Tracking and scent games",
        "Herding activities with appropriate instruction",
        "Interactive play and problem-solving games",
      ],
    },
    grooming: {
      level: "Moderate, with extra attention during seasonal coat changes",
      brushing:
        "Brush regularly to remove loose hair and prevent tangles, paying particular attention to the ruff, tail, and longer feathering.",
      bathing:
        "Bathe when needed rather than on a rigid schedule; use a dog-safe shampoo and dry the dense coat thoroughly.",
      notes: [
        "The double coat is dense and weather-resistant.",
        "Check the coat and skin routinely, including areas with longer hair.",
        "During heavier shedding, more frequent brushing may help remove loose undercoat.",
        "Inspect the ears and trim nails as part of routine care.",
        "Avoid shaving the double coat unless a veterinarian recommends clipping for a medical reason.",
      ],
    },
    training: {
      difficulty:
        "Generally described as responsive and willing to learn; consistency is still important for a lively, alert dog.",
      tips: [
        "Use reward-based methods and keep sessions engaging.",
        "Teach calm behaviour around doors, visitors, and outdoor distractions.",
        "Build reliable recall and loose-leash walking from an early age.",
        "Provide regular opportunities to learn new tasks.",
        "Use enrichment to channel attention and working drive constructively.",
      ],
      socialization:
        "Introduce puppies and newly adopted dogs positively to a variety of people, environments, sounds, and well-matched dogs. Reward calm behaviour and avoid overwhelming the dog.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,
      climates: [
        "The dense coat is described as weather-resistant.",
        "In hot weather, provide shade, fresh water, ventilation, and exercise during cooler hours.",
      ],
      aloneTimeTolerance: null,
    },
  },
  nutrition: {
    dietType:
      "A complete and balanced diet appropriate for the dog's life stage, activity level, body condition, and health.",
    feedingFrequency: {
      puppy:
        "Feed a complete puppy diet in age-appropriate meals, following the product guidance and veterinary advice.",
      adult:
        "Provide measured portions of a complete adult diet and adjust the amount to maintain a healthy body condition.",
      senior:
        "Review portion size, body condition, and any age-related dietary needs with a veterinarian.",
    },
    guidelines:
      "Use a nutritionally complete food suitable for the dog's life stage. Base portions on the food's feeding guide, activity, body condition, and veterinary advice rather than assuming all dogs of this breed need the same quantity. Keep fresh water available and transition foods gradually.",
    considerations: [
      "Monitor body condition and adjust portions if weight changes.",
      "Include treats in the overall daily food allowance.",
      "Avoid foods known to be toxic to dogs.",
      "Discuss persistent digestive issues, allergies, or unexplained weight changes with a veterinarian.",
    ],
    note:
      "No verified breed-specific daily food quantity was established in the sources reviewed; individual needs vary.",
  },
  health: {
    overview:
      "The breed is generally described as healthy, but hip dysplasia can occur. Swedish breed guidance also describes DNA testing for prcd-PRA in dogs used for breeding. These points do not establish that every dog will develop a condition or that the breed is free from other health problems.",
    commonConditions: [
      "Hip dysplasia (HD) can occur.",
    ],
    preventiveCare: [
      "Arrange regular veterinary wellness examinations.",
      "Ask the breeder for relevant health records and information about the parents.",
      "Discuss appropriate eye-health and hip-health information with the breeder and veterinarian.",
      "Keep vaccinations and parasite prevention current according to local veterinary advice.",
      "Maintain dental hygiene and monitor body condition, mobility, skin, coat, eyes, and ears.",
      "Seek veterinary advice promptly for new or persistent symptoms.",
    ],
    recommendedScreenings: [
      "Ask about hip-health history and any relevant hip dysplasia screening.",
      "Swedish breed guidance reports DNA testing for prcd-PRA in breeding dogs; ask the breeder for the parents' relevant test results.",
    ],
    dentalCare:
      "Brush the teeth regularly with a dog-specific toothbrush and toothpaste where possible. Have the mouth and teeth checked during routine veterinary visits.",
    earCare:
      "Inspect the ears regularly. Clean only when needed with a dog-safe product recommended by a veterinary professional, and seek advice for redness, odour, discharge, or persistent scratching.",
    skinCare:
      "Check the skin and coat during brushing, especially beneath the dense undercoat. Ask a veterinarian about persistent itching, redness, sores, unusual lumps, or hair loss.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "People who enjoy regular walks, training, and interactive activities",
      "Households able to provide both exercise and mental enrichment",
      "Owners interested in suitable dog sports, tracking, or other structured activities",
      "Families seeking an affectionate companion and prepared to teach calm household behaviour",
    ],
    notIdealFor: [
      "Households that cannot provide regular activity and engagement",
      "People seeking a reliably quiet dog without training for alert barking",
      "Owners unwilling to maintain a dense double coat, especially during seasonal shedding",
    ],
  },
  funFacts: [
    "The Swedish Lapphund has a long history in northern Scandinavia and is closely associated with Sami culture.",
    "Its traditional work included hunting and watchdog duties as well as herding reindeer.",
    "The breed's profuse double coat is described as weather-resistant.",
    "The Swedish Lapphund is versatile and can take part in activities such as obedience, agility, tracking, and herding.",
    "A Lapphund was the first dog registered by the Swedish Kennel Club in 1893, according to the club's breed history.",
  ],
  faq: [
    {
      question: "Where does the Swedish Lapphund originate?",
      answer:
        "The breed originates in Sweden and has a long history in northern Scandinavia, where it was associated with Sami communities and traditional working life.",
    },
    {
      question: "How tall is a Swedish Lapphund?",
      answer:
        "The FCI standard gives an ideal height of 48 cm for males and 43 cm for females, with an allowance of 3 cm either way.",
    },
    {
      question: "How much does a Swedish Lapphund weigh?",
      answer:
        "The Swedish Kennel Club's breed profile lists 16–20 kg for males and 14–16 kg for females.",
    },
    {
      question: "What is the Swedish Lapphund's temperament?",
      answer:
        "It is generally described as lively, alert, affectionate, attentive, and willing to work. Individual behaviour varies with genetics, socialisation, training, and experience.",
    },
    {
      question: "What kind of exercise does a Swedish Lapphund need?",
      answer:
        "It benefits from regular daily exercise and activities that engage its mind. Walking, training, scent games, tracking, and suitable dog sports are options; the right amount depends on the individual dog.",
    },
    {
      question: "Does the Swedish Lapphund shed?",
      answer:
        "It has a dense double coat and can shed seasonally. Regular brushing, with extra attention during coat changes, helps remove loose hair.",
    },
    {
      question: "What health issues should owners ask about?",
      answer:
        "Hip dysplasia can occur, and Swedish breed guidance reports prcd-PRA DNA testing in breeding dogs. Ask a responsible breeder for relevant health records and discuss an individual dog's needs with a veterinarian.",
    },
    {
      question: "Is the Swedish Lapphund suitable for apartment living?",
      answer:
        "There is no reliable universal yes-or-no answer. Suitability depends on the individual dog's exercise, enrichment, barking, training, and the household's ability to meet those needs.",
    },
  ],
  references: [
    "fci-swedish-lapphund-standard",
    "swedish-kennel-club-swedish-lapphund-en",
    "swedish-kennel-club-swedish-lapphund",
    "ukc-swedish-lapphund-standard",
    "commons-swedish-lapphund-canarian-2017",
  ],
  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-swedish-lapphund-standard",
          role: "verified",
          locator: "Breed title and nomenclature",
        },
        {
          id: "swedish-kennel-club-swedish-lapphund-en",
          role: "verified",
          locator: "Also known as",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Alternate names are drawn from breed registry and kennel club terminology.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A breed-specific scientific name was not established from the sources reviewed.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-swedish-lapphund-standard",
          role: "verified",
          locator: "FCI classification: Group 5, Section 3",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Uses the FCI classification.",
    },
    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-swedish-lapphund-standard",
          role: "verified",
          locator: "Origin",
        },
      ],
      verifiedOn: "2026-10-26",
      note: null,
    },
    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The standard identifies Sweden as the country of origin but does not define a more specific region as the breed's origin.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-swedish-lapphund-standard",
          role: "verified",
          locator: "Utilization, Brief Historical Summary, General Appearance, and Behaviour / Temperament",
        },
        {
          id: "swedish-kennel-club-swedish-lapphund-en",
          role: "verified",
          locator: "About the breed, Appearance, Personality and activity level, and History",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Overview and history are original paraphrases of breed-standard and kennel-club information.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-swedish-lapphund-standard",
          role: "verified",
          locator: "Size and Weight: ideal height and allowance of +/- 3 cm",
        },
      ],
      verifiedOn: "2026-10-26",
      note:
        "Stored as the FCI ideal height plus its published 3 cm allowance; no unit conversion was performed.",
    },
    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "swedish-kennel-club-swedish-lapphund",
          role: "verified",
          locator: "Storlek och utseende: vikt for males and females",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Uses the Swedish Kennel Club's published weight ranges in kg.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "swedish-kennel-club-swedish-lapphund",
          role: "verified",
          locator: "Hälsa: commonly reaches 12–14 years",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Published breed lifespan range.",
    },
    "physical": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-swedish-lapphund-standard",
          role: "verified",
          locator: "General Appearance, Head, Tail, Coat, Colour, and Size",
        },
        {
          id: "swedish-kennel-club-swedish-lapphund-en",
          role: "verified",
          locator: "Appearance, coat and size",
        },
        {
          id: "ukc-swedish-lapphund-standard",
          role: "verified",
          locator: "General appearance, coat, colour, and tail",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Physical details follow the breed standards; sourced measurements have their own claims.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A reliable breed-specific drooling level was not established.",
    },
    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-swedish-lapphund-standard",
          role: "verified",
          locator: "Behaviour / Temperament",
        },
        {
          id: "swedish-kennel-club-swedish-lapphund-en",
          role: "verified",
          locator: "Personality and activity level",
        },
        {
          id: "ukc-swedish-lapphund-standard",
          role: "verified",
          locator: "Characteristics",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Traits paraphrase the sources' qualitative descriptions of the breed.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-swedish-lapphund-standard",
          role: "cited",
          locator: "Behaviour / Temperament",
        },
        {
          id: "swedish-kennel-club-swedish-lapphund-en",
          role: "cited",
          locator: "Personality and activity level",
        },
      ],
      verifiedOn: null,
      note:
        "Scores are editorial 1–5 estimates from qualitative breed descriptions, not results of validated behavioural testing.",
    },
    "care.exercise": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-swedish-lapphund-standard",
          role: "cited",
          locator: "Utilization and Behaviour / Temperament",
        },
        {
          id: "swedish-kennel-club-swedish-lapphund-en",
          role: "cited",
          locator: "Personality and activity level; listed dog sports",
        },
      ],
      verifiedOn: null,
      note:
        "The active-care description and activity suggestions are practical guidance based on the breed's working background, not a prescribed exercise quota.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific daily exercise duration was established.",
    },
    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-swedish-lapphund-standard",
          role: "verified",
          locator: "Coat and Colour",
        },
        {
          id: "swedish-kennel-club-swedish-lapphund-en",
          role: "verified",
          locator: "Appearance, coat and size; grooming information",
        },
      ],
      verifiedOn: "2026-10-26",
      note:
        "The grooming description is based on the coat type and published care information; the bathing advice is general guidance.",
    },
    "care.grooming.bathing": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General dog-grooming advice; a breed-specific bathing interval was not established.",
    },
    "care.training": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Training suggestions are general reward-based dog-care guidance rather than a breed-specific protocol.",
    },
    "care.training.difficulty": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-swedish-lapphund-standard",
          role: "cited",
          locator: "Behaviour / Temperament: willing to work and described as easy to train",
        },
      ],
      verifiedOn: null,
      note: "Qualitative editorial assessment; individual dogs vary.",
    },
    "care.livingEnvironment": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-swedish-lapphund-standard",
          role: "cited",
          locator: "Coat, Utilization, and Behaviour / Temperament",
        },
        {
          id: "swedish-kennel-club-swedish-lapphund-en",
          role: "cited",
          locator: "About the breed and activity level",
        },
      ],
      verifiedOn: null,
      note:
        "Living-environment guidance is conditional and does not claim a universal housing fit.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The sources do not establish a reliable universal apartment-suitability boolean.",
    },
    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Weather-resistant coat information comes from the breed standard; hot-weather precautions are general canine welfare guidance.",
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A dependable breed-specific alone-time tolerance was not established.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Nutrition advice is general canine-care guidance and does not assert a breed-specific food quantity.",
    },
    health: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Routine preventive care is general guidance. Breed-specific health information is recorded separately where supported.",
    },
    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "swedish-kennel-club-swedish-lapphund",
          role: "verified",
          locator: "Hälsa: general health, hip dysplasia, and prcd-PRA testing in breeding dogs",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Health summary is limited to issues explicitly mentioned in breed guidance.",
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "swedish-kennel-club-swedish-lapphund",
          role: "verified",
          locator: "Hälsa: hip dysplasia can occur",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Only hip dysplasia is included because it is explicitly identified in the consulted source.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "swedish-kennel-club-swedish-lapphund",
          role: "verified",
          locator: "Hälsa: breeding dogs are DNA-tested for prcd-PRA; hip dysplasia information",
        },
      ],
      verifiedOn: "2026-10-26",
      note:
        "Breeding-related test information is reported as such; it is not presented as a universal diagnostic requirement for every pet dog.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive-care advice for dogs.",
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
      note: "General skin and coat-care guidance.",
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "fci-swedish-lapphund-standard",
          role: "cited",
          locator: "Utilization and Behaviour / Temperament",
        },
        {
          id: "swedish-kennel-club-swedish-lapphund-en",
          role: "cited",
          locator: "Personality and activity level",
        },
      ],
      verifiedOn: null,
      note:
        "Suitability recommendations are editorial guidance based on activity and working traits, not a guarantee for every household.",
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The sources do not establish a reliable universal first-time-owner suitability classification.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The sources do not establish a universal family-with-children suitability boolean; individual temperament and supervision matter.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Suitability depends on the individual dog's activity and behaviour and the owner's circumstances.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The sources do not establish a reliable universal apartment-living suitability boolean.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-swedish-lapphund-standard",
          role: "verified",
          locator: "Brief Historical Summary and Utilization",
        },
        {
          id: "swedish-kennel-club-swedish-lapphund-en",
          role: "verified",
          locator: "History and listed activities",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Historical details and activity examples are paraphrased.",
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-swedish-lapphund-standard",
          role: "verified",
          locator: "Origin, historical summary, temperament, coat, and size",
        },
        {
          id: "swedish-kennel-club-swedish-lapphund",
          role: "verified",
          locator: "Weight, lifespan, and health information",
        },
        {
          id: "swedish-kennel-club-swedish-lapphund-en",
          role: "verified",
          locator: "Also known as, activities, grooming, and breed history",
        },
      ],
      verifiedOn: "2026-10-26",
      note:
        "FAQ answers paraphrase the cited information and qualify health claims to avoid implying that every individual dog will be affected.",
    },
  },
  updatedOn: "2026-10-26",
};
