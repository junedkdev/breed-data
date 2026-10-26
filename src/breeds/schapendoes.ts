import type { Breed } from "../schema/breed.types";

export const schapendoes: Breed = {
  slug: "schapendoes",
  name: "Schapendoes",
  scientificName: null,
  alternateNames: [
    "Dutch Schapendoes",
    "Nederlandse Schapendoes",
    "Dutch Sheepdog",
  ],
  group: "FCI Group 1: Sheepdogs and Cattledogs (except Swiss Cattledogs), Section 1: Sheepdogs",
  origin: {
    country: "The Netherlands",
    region: null,
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Schapendoes.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Schapendoes.jpg",
      title: "Schapendoes",
      description:
        "A Schapendoes photographed at an agility event in Monschau-Höfen, Germany.",
      creator: "Steffen Heinz (Caronna)",
      uploader: "Caronna",
      capturedOn: "2005-09-10",
      uploadedOn: "2005-09-10",
      width: 1510,
      height: 1077,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Steffen Heinz (Caronna), Wikimedia Commons, CC BY-SA 3.0. Changes, if any, must be indicated; adaptations must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-26",
    },
  ],
  overview: {
    summary:
      "A lively, medium-sized Dutch herding dog known for its shaggy coat, springy movement, intelligence, and stamina.",
    description:
      "The Schapendoes is a lightly built, long-coated sheepdog developed to work with flocks in the Netherlands. Its abundant, slightly wavy coat frames an expressive face, often highlighted by a topknot, moustache, and beard. Beneath its shaggy appearance is an agile, athletic dog with a strong appetite for activity and mental challenges. Schapendoes are generally described as cheerful, alert, clever, and affectionate with familiar people. Their independent working instincts mean that they benefit from consistent, reward-based training, early socialisation, regular exercise, and planned coat care.",
    history:
      "The Schapendoes was traditionally used by shepherds in the Netherlands, especially in areas where sheep grazed on open heathland. Its stamina, agility, intelligence, and ability to work independently were valuable in moving and managing flocks. The breed's numbers declined sharply around the Second World War. Dutch dog enthusiast and judge P.M.C. Toepoel helped revive it by locating surviving local long-haired herding dogs and rebuilding the population. A breed club was established in 1947, and the breed later gained wider kennel-club recognition.",
    originalPurpose:
      "Herding and moving sheep, particularly in the open grazing areas of the Netherlands.",
    currentRoles: [
      "Companion dog",
      "Herding dog",
      "Agility and other dog-sport participant",
      "Obedience and rally participant",
      "Hiking and outdoor activity companion",
    ],
  },
  physical: {
    sizeCategory: "Medium",
    height: {
      unit: "cm",
      male: {
        min: 43,
        max: 50,
      },
      female: {
        min: 40,
        max: 47,
      },
    },
    weight: {
      unit: null,
      male: null,
      female: null,
    },
    lifespanYears: {
      min: 12,
      max: 15,
    },
    coatType:
      "Dense, double coat with a fine, dry, slightly wavy outer coat and an insulating undercoat.",
    coatLength:
      "Long and shaggy; hair on the hindquarters may reach approximately 7 cm according to the breed description. The head typically has a topknot, moustache, and beard.",
    coatColors: [
      "All colours are permitted; blue-grey to black is preferred by the FCI breed standard.",
    ],
    sheddingLevel: null,
    droolingLevel: null,
    distinctiveFeatures: [
      "Long, tousled coat that gives the dog a shaggy outline.",
      "Distinctive topknot, moustache, and beard.",
      "Dark, expressive, rounded eyes.",
      "Lightly built body with supple, springy movement.",
      "Athletic build and a notable ability to jump.",
      "Long, well-feathered tail used expressively during movement.",
    ],
  },
  temperament: {
    traits: [
      "Lively and high-spirited",
      "Intelligent and quick to learn",
      "Affectionate and loyal with familiar people",
      "Alert and watchful",
      "Agile with strong stamina",
      "Independent-minded",
      "Playful and responsive to engaging activities",
    ],
    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 3,
      independence: 4,
      trainability: 4,
      barking: 3,
      energy: 5,
    },
  },
  care: {
    exercise: {
      level:
        "High. This active herding breed needs daily physical activity and mental engagement. Walks alone may not satisfy every dog; play, training, and activities that use its agility and problem-solving ability can help.",
      minutesPerDay: null,
      activities: [
        "Brisk walks and longer outings suited to the dog's fitness",
        "Supervised off-leash play in a secure area",
        "Agility and other suitable dog sports",
        "Reward-based obedience and trick training",
        "Scent games and interactive food puzzles",
        "Herding activities where safely and appropriately available",
      ],
    },
    grooming: {
      level:
        "Moderate to high. The long double coat needs regular attention to prevent tangles and mats, particularly while the puppy coat changes to the adult coat.",
      brushing:
        "Comb through the coat regularly with a suitable wide-toothed comb, working carefully through the undercoat and areas prone to tangling. Increase grooming frequency whenever mats begin to form and during the puppy-to-adult coat transition.",
      bathing:
        "Bathe when needed rather than on an unnecessarily frequent schedule. Use a dog-appropriate shampoo and dry the coat thoroughly, including the dense undercoat.",
      notes: [
        "Check behind the ears, around the collar, under the legs, and through the undercoat for tangles.",
        "Introduce grooming and gentle handling from puppyhood so that coat care becomes a familiar routine.",
        "Separate small tangles carefully rather than pulling hard on the skin.",
        "Inspect the skin while grooming and seek veterinary advice for persistent redness, itching, or hair loss.",
        "Check the ears, trim nails as needed, and maintain regular dental care.",
      ],
    },
    training: {
      difficulty:
        "Moderate. The breed is intelligent and willing to learn but may use its own judgement, so training should be consistent, engaging, and fair.",
      tips: [
        "Use reward-based training, clear cues, and short sessions that keep the dog interested.",
        "Provide regular mental tasks as well as physical exercise.",
        "Practise recall and loose-leash skills early, using secure areas while reliability develops.",
        "Teach calm greetings and household routines before energetic habits become established.",
        "Use games, tricks, and suitable dog sports to channel the breed's agility and enthusiasm.",
        "Avoid relying on harsh corrections; reward the behaviour you want to see repeated.",
      ],
      socialization:
        "Introduce the puppy gradually and positively to different people, friendly dogs, environments, surfaces, sounds, and everyday handling. Continue practising throughout adolescence and adulthood.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: null,
      climates: [],
      aloneTimeTolerance: null,
    },
  },
  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate to the dog's life stage, health, and activity level. Home-prepared diets should be formulated with veterinary guidance.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Use the food manufacturer's feeding guide as a starting point, then adjust portions for age, activity, body condition, and individual needs. Keep fresh water available and review the dog's weight regularly with a veterinary professional.",
    considerations: [
      "Match food and portion size to growth stage and daily activity.",
      "Account for training treats when estimating total daily intake.",
      "Monitor body condition rather than relying on food portions alone.",
      "Discuss persistent digestive problems, unexpected weight changes, or special dietary needs with a veterinarian.",
    ],
    note:
      "No breed-specific feeding quantity is recorded here because a reliable, universally applicable amount was not established from the selected sources.",
  },
  health: {
    overview:
      "Breed-club and kennel-organisation guidance identifies inherited eye health, including progressive retinal atrophy (PRA), as an important consideration when selecting breeding dogs. A breed description cannot predict an individual dog's health; ask the breeder for documented test results and discuss the dog's own health needs with a veterinarian.",
    commonConditions: [
      "Progressive retinal atrophy (PRA), an inherited eye disease for which breed-club guidance recommends DNA screening of breeding dogs.",
    ],
    preventiveCare: [
      "Arrange routine veterinary examinations and discuss changes in vision or eye appearance promptly.",
      "Ask the breeder for documented parental health-screening results.",
      "Maintain a healthy body condition and provide regular, age-appropriate exercise.",
      "Check the ears, skin, coat, nails, and teeth during routine care.",
      "Follow veterinary advice on vaccination, parasite prevention, and dental care.",
    ],
    recommendedScreenings: [
      "ECVO eye examination for breeding dogs, as described in Dutch kennel-organisation breeding guidance.",
      "DNA testing for progressive retinal atrophy (PRA), as described in Dutch breed-club and kennel-organisation guidance.",
      "Ask the breeder and veterinarian which additional tests are appropriate for the dog's pedigree, age, and individual history.",
    ],
    dentalCare:
      "Brush the teeth regularly with dog-specific toothpaste and arrange professional veterinary assessment when needed.",
    earCare:
      "Check the ears regularly for redness, odour, discharge, or discomfort. Clean only as advised by a veterinary professional.",
    skinCare:
      "Part the dense coat during grooming to check for mats, irritation, parasites, and areas of persistent itching. Seek veterinary advice for ongoing skin changes.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: null,
    apartmentLiving: null,
    idealFor: [
      "People who can provide daily exercise and regular mental enrichment.",
      "Households willing to maintain a long, dense coat.",
      "Owners interested in training, agility, and other interactive activities.",
      "People who enjoy an involved, lively companion rather than a low-activity dog.",
    ],
    notIdealFor: [
      "Households seeking a dog that needs very little exercise or engagement.",
      "Owners unable to commit to regular coat maintenance.",
      "People who expect every dog to be naturally reliable off leash without training.",
    ],
  },
  funFacts: [
    "The Schapendoes is a traditional Dutch sheepdog.",
    "Its breed standard highlights agility, stamina, and a notable ability to jump.",
    "The shaggy head furnishings include a characteristic topknot, moustache, and beard.",
    "The breed was rebuilt by enthusiasts after its population declined around the Second World War.",
  ],
  faq: [
    {
      question: "Where does the Schapendoes come from?",
      answer:
        "The Schapendoes originated in the Netherlands, where it was used to herd sheep in open grazing areas.",
    },
    {
      question: "How tall is a Schapendoes?",
      answer:
        "The FCI standard gives a height at the withers of 43–50 cm for males and 40–47 cm for females.",
    },
    {
      question: "What colours can a Schapendoes have?",
      answer:
        "All colours are permitted by the FCI standard, with blue-grey to black preferred.",
    },
    {
      question: "Does a Schapendoes need much grooming?",
      answer:
        "Yes. Its long, dense coat needs regular combing to manage tangles and mats. Start grooming routines early and pay particular attention during the puppy-to-adult coat transition.",
    },
    {
      question: "How much exercise does a Schapendoes need?",
      answer:
        "It is an active herding breed that needs daily physical exercise and mental engagement. The exact amount depends on age, health, and the individual dog.",
    },
    {
      question: "Which health tests should I ask a breeder about?",
      answer:
        "Ask for documented eye-examination results and PRA DNA test results for the breeding dogs. A veterinarian can advise whether additional screening is appropriate for the individual dog.",
    },
  ],
  references: [
    "fci-schapendoes-standard-313",
    "fci-schapendoes-nomenclature-313",
    "raad-van-beheer-schapendoes",
    "american-kennel-club-schapendoes",
    "canadian-kennel-club-schapendoes",
    "schapendoes-club-of-canada-health",
    "schapendoes-club-of-canada-faq",
    "wikimedia-schapendoes-caronna",
  ],
  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-schapendoes-nomenclature-313",
          role: "verified",
          locator: "Breed name and official nomenclature",
        },
        {
          id: "american-kennel-club-schapendoes",
          role: "verified",
          locator: "About the Breed: Dutch Sheep Dog",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Alternate names are taken from kennel-club and official breed nomenclature pages.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A breed-specific scientific name was not established from the selected sources.",
    },
    group: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-schapendoes-nomenclature-313",
          role: "verified",
          locator: "Group and section",
        },
      ],
      verifiedOn: "2026-10-26",
      note: null,
    },
    origin: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-schapendoes-nomenclature-313",
          role: "verified",
          locator: "Country of origin",
        },
        {
          id: "canadian-kennel-club-schapendoes",
          role: "cited",
          locator: "Origin and historical overview",
        },
      ],
      verifiedOn: "2026-10-26",
      note: null,
    },
    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The sources reviewed do not establish a definitive regional origin.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-schapendoes-standard-313",
          role: "verified",
          locator: "General appearance and utilization",
        },
        {
          id: "american-kennel-club-schapendoes",
          role: "verified",
          locator: "About the Breed and care guidance",
        },
        {
          id: "canadian-kennel-club-schapendoes",
          role: "cited",
          locator: "Origin, temperament, coat, and activity",
        },
        {
          id: "raad-van-beheer-schapendoes",
          role: "cited",
          locator: "Breed description and history",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Descriptions are original summaries based on the cited breed references.",
    },
    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schapendoes-standard-313",
          role: "verified",
          locator: "General appearance, coat, colour, and size",
        },
      ],
      verifiedOn: "2026-10-26",
      note: null,
    },
    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-schapendoes-standard-313",
          role: "cited",
          locator: "Size and general appearance",
        },
      ],
      verifiedOn: null,
      note: "Medium is a descriptive catalog category, not an official measurement category.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schapendoes-standard-313",
          role: "verified",
          locator: "Size: height at withers",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Numbers and unit are preserved as published by the FCI standard.",
    },
    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The selected FCI standard does not specify a sex-specific weight range.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-schapendoes",
          role: "verified",
          locator: "Life Expectancy",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The 12–15 year range is the range published in the AKC breed profile.",
    },
    "physical.sheddingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A sufficiently specific shedding level was not established from the selected sources.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A breed-specific drooling level was not established from the selected sources.",
    },
    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-schapendoes-standard-313",
          role: "verified",
          locator: "Utilization and temperament characteristics",
        },
        {
          id: "american-kennel-club-schapendoes",
          role: "cited",
          locator: "About the Breed",
        },
        {
          id: "canadian-kennel-club-schapendoes",
          role: "cited",
          locator: "Temperament",
        },
      ],
      verifiedOn: "2026-10-26",
      note: null,
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-schapendoes",
          role: "cited",
          locator: "Breed traits and characteristics",
        },
        {
          id: "canadian-kennel-club-schapendoes",
          role: "cited",
          locator: "Temperament and activity level",
        },
      ],
      verifiedOn: null,
      note: "Scores are editorial estimates on a 1–5 scale, not measured behavioural outcomes.",
    },
    care: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-schapendoes",
          role: "verified",
          locator: "What to Expect When Caring for a Schapendoes",
        },
        {
          id: "canadian-kennel-club-schapendoes",
          role: "cited",
          locator: "Activity, coat, and grooming",
        },
        {
          id: "schapendoes-club-of-canada-faq",
          role: "cited",
          locator: "Exercise, training, and grooming FAQs",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Care recommendations summarise breed-specific guidance and should be adapted to the individual dog.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A single daily-minute range applicable to all ages and individuals was not established.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Apartment suitability depends on the individual dog and the owner's ability to meet its needs.",
    },
    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A yard alone does not determine suitability; no categorical breed-specific value is recorded.",
    },
    "care.livingEnvironment.climates": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A specific climate suitability list was not established from the selected sources.",
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A reliable breed-specific alone-time tolerance was not established.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine feeding advice, not a Schapendoes-specific prescription.",
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Feeding frequency depends on age, health, and individual needs.",
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal adult feeding frequency was not established.",
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Feeding frequency should be adjusted to the senior dog's individual needs.",
    },
    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "raad-van-beheer-schapendoes",
          role: "verified",
          locator: "Breed health and breeding-screening requirements",
        },
        {
          id: "schapendoes-club-of-canada-health",
          role: "cited",
          locator: "Health and care",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Health content distinguishes reported screening priorities from individual diagnosis or prevalence claims.",
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "raad-van-beheer-schapendoes",
          role: "verified",
          locator: "Required eye examination and PRA DNA testing",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "PRA is included because it is specifically named in breeding-screening guidance; this does not imply every Schapendoes is affected.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "raad-van-beheer-schapendoes",
          role: "verified",
          locator: "Breed breeding standards: ECVO eye examination and PRA DNA test",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Recommendations reflect the published Dutch breeding guidance; confirm current requirements with the relevant breed club and veterinarian.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine dental-care advice.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine ear-care advice.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine skin-care advice.",
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-schapendoes",
          role: "cited",
          locator: "Activity, training, and grooming guidance",
        },
        {
          id: "canadian-kennel-club-schapendoes",
          role: "cited",
          locator: "Temperament and activity level",
        },
      ],
      verifiedOn: null,
      note: "Suitability descriptions are practical editorial guidance based on activity and coat-care needs, not guarantees about an individual dog.",
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Experience requirements vary by owner and dog; no categorical value is recorded.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Compatibility depends on the individual dog, children, supervision, and training.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability depends on the owner's circumstances and the individual dog's exercise needs.",
    },
    "suitability.activeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The field is left unset rather than turning a general breed tendency into a categorical rating.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Apartment suitability depends on exercise, enrichment, training, and the individual dog.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-schapendoes-standard-313",
          role: "verified",
          locator: "General appearance and utilization",
        },
        {
          id: "canadian-kennel-club-schapendoes",
          role: "cited",
          locator: "Historical overview",
        },
      ],
      verifiedOn: "2026-10-26",
      note: null,
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-schapendoes-standard-313",
          role: "verified",
          locator: "Origin, coat colour, and height at withers",
        },
        {
          id: "raad-van-beheer-schapendoes",
          role: "cited",
          locator: "Health screening guidance",
        },
        {
          id: "american-kennel-club-schapendoes",
          role: "cited",
          locator: "Exercise and grooming guidance",
        },
      ],
      verifiedOn: "2026-10-26",
      note: null,
    },
  },
  updatedOn: "2026-10-26",
};
