import type { Breed } from "../schema/breed.types";

export const gordon_setter: Breed = {
  slug: "gordon-setter",
  name: "Gordon Setter",
  scientificName: null,
  alternateNames: [],
  group: "AKC Sporting Group; FCI Group 7 — Pointing Dogs, Section 2.2 — Setters",

  origin: {
    country: "United Kingdom",
    region: "Scotland",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/SeterSzkockiGordon.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:SeterSzkockiGordon.jpg",
      title: "SeterSzkockiGordon.jpg",
      description: "Gordon Setter photographed by Adam Ziaja.",
      creator: "Adam Ziaja",
      uploader: null,
      capturedOn: null,
      uploadedOn: null,
      width: 812,
      height: 1024,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Adam Ziaja, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-22",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Wet-Gordon-Setter.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Wet-Gordon-Setter.jpg",
      title: "Wet-Gordon-Setter.jpg",
      description: "A wet Gordon Setter.",
      creator: "Robert Breuer",
      uploader: "Net-breuer",
      capturedOn: "2004-07-01",
      uploadedOn: "2006-07-12",
      width: 1107,
      height: 1260,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Robert Breuer (Net-breuer), via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-22",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Gordon_Setter.JPG",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Gordon_Setter.JPG",
      title: "Gordon Setter.JPG",
      description: "Gordon Setter photographed in a field-working setting.",
      creator: "Nordic-Gordon-Hunters",
      uploader: "Nordic-Gordon-Hunters",
      capturedOn: "2006-04-20",
      uploadedOn: "2011-06-28",
      width: 1536,
      height: 1024,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Nordic-Gordon-Hunters, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-22",
    },
  ],

  overview: {
    summary:
      "The Gordon Setter is a substantial Scottish gundog bred to locate game birds over challenging terrain. It is known for its black coat with rich tan markings, feathered ears and legs, stamina, intelligence, and close attachment to its family.",

    description:
      "Strongly built yet elegant, the Gordon Setter combines the endurance needed for long days outdoors with an affectionate, people-oriented nature at home. Its glossy black coat carries clearly defined chestnut-red or tan markings, while longer feathering appears around the ears, chest, underside, legs, and tail. This is an active working breed that usually needs more than a brief walk: regular exercise, training, and mental tasks help it stay settled. It can be devoted and responsive, but its hunting background means birds and other moving animals may attract its attention. Early socialisation, patient reward-based training, regular grooming, and a secure outdoor environment are useful parts of responsible ownership.",

    history:
      "The Gordon Setter developed in Scotland as a game-bird dog capable of working over rough ground and in demanding weather. The breed became closely associated with Alexander, the fourth Duke of Gordon, whose kennels helped establish its distinctive type in the late eighteenth and early nineteenth centuries. Its traditional work involved searching for birds and indicating their location to the hunter. The breed is now seen both in field work and as an active companion, while retaining the stamina, scenting ability, and bird interest expected of a setter.",

    originalPurpose:
      "Hunting dog developed to search for game birds and indicate their location to a hunter.",

    currentRoles: [
      "Hunting and bird-finding work where lawful",
      "Field trials and gundog activities",
      "Active family companion",
      "Tracking, scent-based enrichment, and suitable dog sports",
      "Conformation shows",
    ],
  },

  physical: {
    sizeCategory: "Large, substantial sporting dog",

    height: {
      unit: "cm",
      male: { min: 66, max: 66 },
      female: { min: 62, max: 62 },
    },

    weight: {
      unit: "kg",
      male: { min: 29.5, max: 29.5 },
      female: { min: 25.5, max: 25.5 },
    },

    lifespanYears: {
      min: 12,
      max: 13,
    },

    coatType:
      "Soft, glossy, flat-lying coat that may be straight or slightly waved, with longer silky feathering.",

    coatLength:
      "Short and fine on the head, front of the legs, and ear tips; moderate on the body, with longer feathering on the ears, chest, underside, backs of the legs, and tail.",

    coatColors: [
      "Deep, shining coal black with clearly defined chestnut-red or tan markings",
    ],

    sheddingLevel:
      "Regular brushing helps manage loose hair; shedding can vary by dog and season.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Substantial, well-muscled body built for stamina rather than extreme speed.",
      "Deep, shining black coat with clearly defined tan markings.",
      "Long, silky feathering on the ears, chest, underside, legs, and tail.",
      "Long, refined head with a broad black nose and dark-brown eyes.",
      "Low-set, thin ears that lie close to the head.",
      "Straight or slightly curved tail with feathering.",
      "Smooth, free movement with strong drive from the hindquarters.",
    ],
  },

  temperament: {
    traits: [
      "Affectionate and closely bonded with familiar people",
      "Intelligent and capable",
      "Bold and outgoing in suitable situations",
      "Generally dignified, with a kindly disposition",
      "Energetic and outdoors-oriented",
      "May be reserved with unfamiliar people",
      "Can be persistent when interested in birds or other wildlife",
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 3,
      independence: 3,
      trainability: 4,
      barking: 3,
      energy: 5,
    },
  },

  care: {
    exercise: {
      level:
        "High; needs regular physical activity and mental engagement, especially activities shared with its handler.",
      minutesPerDay: null,
      activities: [
        "Long walks and hikes suited to the dog's age and fitness",
        "Supervised running in secure, suitable areas",
        "Retrieving games and gundog-style activities",
        "Scent games and structured outdoor exploration",
        "Reward-based obedience and suitable dog sports",
      ],
    },

    grooming: {
      level: "Moderate",
      brushing:
        "Brush at least weekly, and more often when the feathering tangles or gathers debris. Check behind the ears, beneath the legs, on the chest, and around the tail.",
      bathing:
        "Bathe when needed with dog-appropriate products. Dry the coat thoroughly after bathing or wet outdoor activity, and avoid excessive washing that irritates the skin.",
      notes: [
        "Remove tangles and burrs from the longer feathering before they tighten into mats.",
        "Check the ears routinely for redness, odour, discharge, or trapped debris.",
        "Trim nails as needed and inspect the feet after outdoor exercise.",
        "Keep up with routine dental care and veterinary health checks.",
      ],
    },

    training: {
      difficulty:
        "Moderate; intelligent and responsive, but its energy and hunting interests require consistent training and suitable outlets.",
      tips: [
        "Use positive reinforcement, clear cues, and consistent household rules.",
        "Practise recall regularly, beginning in low-distraction settings and progressing gradually.",
        "Use a lead or long line where wildlife, roads, or unfamiliar surroundings make free running unsafe.",
        "Provide structured activities that allow the dog to work with its handler.",
        "Keep training sessions engaging and appropriate to the dog's age and physical development.",
      ],
      socialization:
        "Introduce the dog positively and gradually to different people, dogs, places, sounds, and handling experiences. Supervise interactions with children and other animals, and teach calm behaviour around birds and wildlife.",
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: [
        "Cool and temperate climates",
        "Mild climates",
        "Warm weather with shade, fresh water, and exercise scheduled for cooler hours",
      ],
      aloneTimeTolerance:
        "Gordon Setters often form close bonds with their household. Build alone-time tolerance gradually and provide exercise and enrichment; individual dogs vary in how comfortably they settle alone.",
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate for the dog's life stage, body condition, activity, and veterinary needs.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Feed measured portions of a nutritionally complete diet and monitor body condition over time. Adjust intake for age, activity, growth, and health rather than relying on a fixed amount for every Gordon Setter. Keep fresh water available and discuss substantial diet changes with a veterinarian.",
    considerations: [
      "Keep the dog lean and monitor weight as activity levels change.",
      "Use treats in moderation and include them in the daily food allowance.",
      "Discuss an appropriate feeding routine with a veterinarian, particularly during growth or when health needs change.",
      "Gastric dilatation-volvulus (bloat) is a serious concern in deep-chested dogs; learn the warning signs and seek emergency veterinary care if suspected.",
    ],
    note:
      "No universal breed-specific meal frequency or calorie target is recorded here. Portions and feeding schedules should be individualised.",
  },

  health: {
    overview:
      "Gordon Setters are generally described as robust dogs, but there are health concerns that responsible breeders and owners should discuss. Breed-club guidance highlights hip and elbow evaluation, eye examinations, and DNA testing for progressive retinal atrophy associated with the rcd4 variant. The breed profile also warns about gastric dilatation-volvulus (bloat), a life-threatening emergency. These are screening and care considerations, not a prediction that an individual dog will develop a condition.",

    commonConditions: [
      "Gastric dilatation-volvulus (GDV or bloat), a sudden, potentially fatal emergency involving stomach distension and twisting.",
      "Hip dysplasia, a developmental condition affecting the hip joints.",
      "Elbow dysplasia, a developmental joint condition considered in breed screening recommendations.",
      "Progressive retinal atrophy associated with the rcd4 variant (PRA-rcd4), an inherited retinal disease that can lead to vision loss.",
      "Other eye disorders may occur; regular veterinary assessment remains important even when a genetic test is available.",
    ],

    preventiveCare: [
      "Arrange routine veterinary examinations and keep vaccinations and parasite prevention appropriate to local risks.",
      "Ask breeders for documented hip, elbow, and eye evaluation results and relevant DNA-test results.",
      "Learn the warning signs of bloat, including a swollen abdomen, repeated unproductive retching, restlessness, drooling, weakness, or collapse; suspected GDV requires emergency veterinary care.",
      "Maintain a healthy body condition and age-appropriate exercise routine.",
      "Seek prompt veterinary assessment for changes in vision, persistent lameness, unusual abdominal swelling, or sudden distress.",
    ],

    recommendedScreenings: [
      "Hip evaluation through an appropriate recognised screening scheme.",
      "Elbow evaluation through an appropriate recognised screening scheme.",
      "Examination by a qualified veterinary ophthalmologist.",
      "PRA-rcd4 DNA testing, with results interpreted alongside the dog's breeding and family history.",
      "Ask about CHIC DNA repository requirements and whether relevant results are recorded for breeding animals.",
    ],

    dentalCare:
      "Brush teeth regularly with dog-specific toothpaste and arrange veterinary dental checks as advised. Dental disease can affect dogs of any breed.",

    earCare:
      "Check the ears regularly, especially beneath the longer hair. Seek veterinary advice for redness, odour, discharge, pain, or persistent scratching; use ear cleaners only as appropriate for the individual dog.",

    skinCare:
      "Inspect the skin while brushing, particularly beneath feathering and around the ears, legs, and tail. Remove debris gently and seek veterinary advice for persistent itching, sores, hair loss, or recurring irritation.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Active people or families who can provide daily exercise and shared activities.",
      "Owners who enjoy training, outdoor exploration, and working with an intelligent dog.",
      "Households prepared for regular brushing and coat maintenance.",
      "People able to manage hunting interests and provide safe opportunities for exercise.",
    ],

    notIdealFor: [
      "People seeking a low-energy dog that needs only short walks.",
      "Owners unable to provide regular companionship, activity, and mental stimulation.",
      "Households expecting dependable off-leash recall without sustained training.",
      "People who cannot maintain the dog's feathered coat or supervise outdoor activity safely.",
    ],
  },

  funFacts: [
    "The breed's name is closely linked to the Dukes of Gordon, whose Scottish kennels helped shape its modern type.",
    "Gordon Setters were developed to locate game birds and work with hunters across challenging terrain.",
    "Compared with other setters, the Gordon is typically more substantial in build.",
    "The breed's black coat and rich tan markings are defining features of its recognised appearance.",
  ],

  faq: [
    {
      question: "Is a Gordon Setter a good family dog?",
      answer:
        "It can be an affectionate and loyal family companion in a household that provides exercise, training, and regular interaction. Children and dogs should be supervised together, and individual temperament depends on genetics, socialisation, and experience.",
    },
    {
      question: "How much exercise does a Gordon Setter need?",
      answer:
        "The breed generally needs substantial daily activity and mental engagement. There is no single exercise-minute target that suits every dog, so the routine should be adapted to age, fitness, health, and working activity.",
    },
    {
      question: "What colour is a Gordon Setter?",
      answer:
        "The recognised standard colour is deep, shining black with clearly defined chestnut-red or tan markings. A very small white spot on the chest may be permitted by the standard.",
    },
    {
      question: "What health tests should I ask a breeder about?",
      answer:
        "Ask for documented hip and elbow evaluations, an eye examination by a qualified veterinary ophthalmologist, and PRA-rcd4 DNA-test information. Results should be considered with family history and veterinary advice.",
    },
    {
      question: "Does a Gordon Setter need a lot of grooming?",
      answer:
        "Regular brushing is important, particularly around the ears, chest, legs, underside, and tail where longer hair can tangle. Routine ear, nail, dental, and skin checks are also useful.",
    },
    {
      question: "Can a Gordon Setter live in an apartment?",
      answer:
        "Apartment living may be possible if the dog receives adequate daily exercise, training, companionship, and enrichment. A yard can be useful but does not replace activity with its owner.",
    },
    {
      question: "Are Gordon Setters prone to bloat?",
      answer:
        "Gastric dilatation-volvulus is a recognised concern for the breed. Learn the emergency signs and seek immediate veterinary care if bloat is suspected; a veterinarian can discuss individual risk and feeding routines.",
    },
  ],

  references: [
    "american-kennel-club-gordon-setter",
    "fci-gordon-setter-standard",
    "gordon-setter-club-of-america-health-statement",
    "american-kennel-club-sporting-group-health-testing",
    "wikimedia-gordon-setter-adam-ziaja",
    "wikimedia-gordon-setter-robert-breuer",
    "wikimedia-gordon-setter-nordic-hunters",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The consulted breed references do not establish a breed-specific scientific name; no value is inferred.",
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
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "Breed group classification",
        },
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "FCI classification, Group 7 and Section 2.2",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "The field preserves the US and FCI classifications rather than treating their group names as identical.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Origin",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "The current FCI standard identifies Great Britain as the country of origin.",
    },

    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "Breed history and association with Scotland",
        },
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Origin and historical context",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "Scotland is recorded as the historical region associated with the breed; the FCI country-level designation remains Great Britain.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "About the breed, history, exercise, training, and grooming",
        },
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Utilization, general appearance, and temperament",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "The overview is original wording based on breed history, function, temperament, and appearance information.",
    },

    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "cited",
          locator: "Average size and build",
        },
        {
          id: "fci-gordon-setter-standard",
          role: "cited",
          locator: "General appearance and size",
        },
      ],
      verifiedOn: null,
      note: "Large, substantial sporting dog is an editorial size description rather than a formal cross-registry category.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Size and weight",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "The current FCI standard specifies 66 cm for males and 62 cm for females. The schema ranges use equal minimum and maximum values to preserve these stated standard heights.",
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Size and weight",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "The current FCI standard specifies 29.5 kg for males and 25.5 kg for females. These are standard figures, not a claim that all healthy adults should weigh exactly that amount.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "Average sizes and life expectancy",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "The AKC profile lists a life expectancy of 12–13 years; actual longevity varies between dogs.",
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Coat, hair",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "Coat texture and feathering are paraphrased from the current FCI standard.",
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Coat, hair",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "The description preserves the standard's distinction between shorter hair and longer feathering.",
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Coat, colour",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "The colour description follows the current FCI standard, including its permitted tan markings.",
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "Grooming and shedding",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "The text describes the practical effect of regular brushing without assigning a numerical shedding score.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No dependable breed-specific drooling measurement was established from the consulted sources.",
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "General appearance, head, ears, tail, coat, and movement",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "The listed features are paraphrased from the current breed standard.",
    },

    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "About the breed, temperament, and training",
        },
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Behaviour and temperament",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "Traits describe general breed tendencies, not guaranteed behaviour in an individual dog.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "cited",
          locator: "Breed traits, energy, sociability, and training",
        },
      ],
      verifiedOn: null,
      note: "Scores are editorial 1–5 app estimates, not validated behavioural-test results or official standard values.",
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "Exercise and breed purpose",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "The exercise description reflects the breed's working background and activity needs.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The consulted sources do not establish a universal daily exercise-minute range suitable for all Gordon Setters.",
    },

    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "cited",
          locator: "Exercise and training",
        },
      ],
      verifiedOn: null,
      note: "Activity suggestions are practical recommendations adapted to the breed's exercise needs and working function.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "Grooming",
        },
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Coat, hair",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "Grooming advice reflects the coat type and breed-profile care guidance.",
    },

    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "Training and exercise",
        },
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Behaviour and temperament",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "Training recommendations address the breed's working instincts, energy, and responsiveness.",
    },

    "care.livingEnvironment": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "cited",
          locator: "Exercise, family attachment, and living environment",
        },
      ],
      verifiedOn: null,
      note: "Living-environment and alone-time statements are practical estimates, not formal breed certifications.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Nutrition text is general canine-care guidance and is not a breed-specific medical prescription.",
    },

    "nutrition.feedingFrequency": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal puppy, adult, or senior meal frequency specific to this breed was established.",
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "Health and recommended health tests",
        },
        {
          id: "gordon-setter-club-of-america-health-statement",
          role: "verified",
          locator: "CHIC, hip and elbow evaluations, eye examination, and PRA-rcd4 testing",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "Health information is presented as screening and care context, not as a prediction for an individual dog.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "Health; bloat and screening recommendations",
        },
        {
          id: "gordon-setter-club-of-america-health-statement",
          role: "verified",
          locator: "Hip dysplasia, elbow dysplasia, eye evaluation, and PRA-rcd4",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "The list reflects conditions and screening priorities identified by the breed profile and breed-club health statement; it does not rank prevalence.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "cited",
          locator: "Health and exercise guidance",
        },
        {
          id: "gordon-setter-club-of-america-health-statement",
          role: "cited",
          locator: "Recommended health evaluations",
        },
      ],
      verifiedOn: null,
      note: "Preventive-care recommendations are general advice adapted to breed-specific screening concerns and do not replace veterinary assessment.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-sporting-group-health-testing",
          role: "verified",
          locator: "Gordon Setter recommended health tests",
        },
        {
          id: "gordon-setter-club-of-america-health-statement",
          role: "verified",
          locator: "CHIC DNA repository, hips, elbows, eyes, and PRA-rcd4",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "Screening recommendations are based on the current AKC parent-club listing and the breed-club statement; owners should confirm suitable tests with their veterinarian and breeder.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine dental-care guidance, not a breed-specific medical claim.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine ear-care guidance adapted to the breed's feathered ears.",
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
          id: "american-kennel-club-gordon-setter",
          role: "cited",
          locator: "Exercise, temperament, grooming, and training",
        },
      ],
      verifiedOn: null,
      note: "Suitability fields are editorial estimates based on care needs and general breed traits, not guarantees for every household.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "History and breed characteristics",
        },
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Origin, utilization, coat colour, and general appearance",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "Facts are paraphrased from the breed history and standard.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "Breed profile, exercise, grooming, nutrition, and health",
        },
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Size, colour, origin, and working purpose",
        },
        {
          id: "gordon-setter-club-of-america-health-statement",
          role: "verified",
          locator: "Recommended health testing",
        },
      ],
      verifiedOn: "2026-10-22",
      note: "FAQ answers summarise cited breed and care information in original wording.",
    },
  },

  updatedOn: "2026-10-22",
};
