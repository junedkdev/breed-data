import type { Breed } from "../schema/breed.types";

export const chow_chow: Breed = {
  slug: "chow-chow",
  name: "Chow Chow",
  scientificName: null,
  alternateNames: [],
  group: "AKC Non-Sporting Group; FCI Group 5 — Spitz and primitive types, Section 5 — Asian Spitz and related breeds",

  origin: {
    country: "China",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chow_Chow_dog.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Chow_Chow_dog.jpg",
      title: "Chow Chow dog.jpg",
      description: "Adult female Chow Chow.",
      creator: "Andrea Papaccio",
      uploader: "Andrea Papaccio",
      capturedOn: "2025-10-24",
      uploadedOn: "2026-01-04",
      width: 2592,
      height: 3428,
      licenseId: "cc0-1.0",
      attribution:
        "Photo by Andrea Papaccio, via Wikimedia Commons; dedicated to the public domain under CC0 1.0 (https://creativecommons.org/publicdomain/zero/1.0/). Credit provided voluntarily.",
      restrictions: null,
      metadataCheckedOn: "2026-10-23",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/01_Chow_Chow.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:01_Chow_Chow.jpg",
      title: "01 Chow Chow.jpg",
      description: "Chow Chow dog.",
      creator: "Prayitno",
      uploader: "Frei sein (Flickr upload bot)",
      capturedOn: "2013-02-09",
      uploadedOn: "2014-03-18",
      width: 2952,
      height: 3690,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Prayitno, via Wikimedia Commons, CC BY 2.0 (https://creativecommons.org/licenses/by/2.0/). Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-10-23",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/02_-_Chow-chow.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:02_-_Chow-chow.jpg",
      title: "02 - Chow-chow.jpg",
      description: "Chow Chow dog.",
      creator: "Olga Filonenko",
      uploader: "Frei sein (Flickr upload bot)",
      capturedOn: "2012-10-20",
      uploadedOn: "2014-03-18",
      width: 1734,
      height: 2600,
      licenseId: "cc-by-sa-2.0",
      attribution:
        "Photo by Olga Filonenko, via Wikimedia Commons, CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0/). Changes, if any, must be indicated; adaptations must comply with the same or a compatible share-alike license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-23",
    },
  ],

  overview: {
    summary:
      "The Chow Chow is a sturdy, compact dog known for its dense coat, lion-like ruff, small upright ears and distinctive blue-black tongue. Typically dignified and independent, it often forms close bonds with its household while remaining reserved around unfamiliar people.",

    description:
      "Recognisable by its broad head, deep-set eyes, plush coat and tail carried over the back, the Chow Chow has a strong, squarely built frame. It occurs in rough-coated and smooth-coated varieties. Despite its substantial coat, it should be able to move freely and should not be burdened by excess hair in hot weather. Chow Chows are often self-possessed and loyal, but they may not welcome every stranger or unfamiliar dog. Early, positive socialisation, respectful handling and consistent reward-based training help owners manage these tendencies. Grooming is a major part of care: the dense undercoat can tangle or mat if it is not thoroughly brushed. Owners must also take heat management seriously, especially in warm or humid conditions.",

    history:
      "The Chow Chow is an old Chinese breed associated with guarding and hunting. Its history has been documented over many centuries, although detailed accounts of its earliest ancestry should be treated cautiously. The breed became known in Britain after dogs arrived there in the late eighteenth century, and it gained wider public recognition in the twentieth century. Today it is kept mainly as a companion and household watchdog.",

    originalPurpose:
      "A versatile dog historically used for guarding and hunting; modern roles commonly include companionship and watchfulness.",

    currentRoles: [
      "Companion dog",
      "Household watchdog",
      "Conformation showing",
      "Reward-based training and enrichment activities",
      "Leashed walks and moderate outdoor activity",
    ],
  },

  physical: {
    sizeCategory: "Medium-sized, compact and sturdy",

    // FCI standard measurements in centimetres.
    height: {
      unit: "cm",
      male: { min: 48, max: 56 },
      female: { min: 46, max: 51 },
    },

    // AKC publishes an overall breed weight range, not sex-specific ranges.
    // The same overall range is recorded for both sexes because the schema
    // requires a BySex structure; it should not be read as a sex-specific norm.
    weight: {
      unit: "kg",
      male: { min: 20.4, max: 31.8 },
      female: { min: 20.4, max: 31.8 },
    },

    lifespanYears: {
      min: 8,
      max: 12,
    },

    coatType:
      "A dense double coat in either rough or smooth form. The rough coat has a coarse, profuse outer coat and soft woolly undercoat, with a fuller mane or ruff around the neck. The smooth coat is shorter, dense and plush-like.",

    coatLength: "Rough: long and profuse; smooth: short and dense",

    coatColors: [
      "Black",
      "Red",
      "Blue",
      "Fawn",
      "Cream",
      "White",
    ],

    sheddingLevel:
      "High, with noticeable seasonal shedding. The dense undercoat needs thorough brushing to remove loose hair and prevent mats.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Blue-black tongue, a characteristic feature of the breed",
      "Broad, flat skull and a broad muzzle",
      "Small, thick, upright ears with rounded tips",
      "Deep-set, oval eyes that contribute to a serious expression",
      "Dense double coat, often forming a mane-like ruff",
      "Compact, sturdy body with a tail carried high over the back",
      "Distinctive short-striding, pendulum-like movement",
    ],
  },

  temperament: {
    traits: [
      "Independent",
      "Loyal to familiar people",
      "Dignified and serious-minded",
      "Often reserved with strangers",
      "Alert and watchful",
      "Can be selective about unfamiliar dogs",
      "May dislike rough or intrusive handling",
      "Benefits from calm, consistent boundaries",
    ],

    // Editorial estimates on a 1–5 scale, not standardised test results.
    scores: {
      affection: 3,
      withChildren: 2,
      withDogs: 2,
      withStrangers: 2,
      protectiveness: 4,
      independence: 5,
      trainability: 3,
      barking: 2,
      energy: 3,
    },
  },

  care: {
    exercise: {
      level: "Moderate",

      // Practical estimate for a healthy adult; individual needs vary.
      minutesPerDay: {
        min: 45,
        max: 60,
      },

      activities: [
        "Daily walks during cooler parts of the day",
        "Calm sniffing walks and controlled outdoor exploration",
        "Short reward-based training sessions",
        "Food puzzles and low-impact enrichment",
        "Gentle play in a cool, safe environment",
      ],
    },

    grooming: {
      level: "High",

      brushing:
        "Brush thoroughly at least twice a week, increasing frequency during heavy shedding or when the coat tangles easily. Work through the outer coat and undercoat rather than brushing only the surface. Pay particular attention behind the ears, around the ruff, under the legs and near the hindquarters.",

      bathing:
        "Bathe when needed with dog-appropriate products, rinse thoroughly and dry the dense coat completely. A cool-air dryer can help remove moisture from the undercoat. Avoid leaving the coat damp against the skin, and seek professional grooming help if mats are difficult to remove safely.",

      notes: [
        "Check the coat down to the skin for mats, trapped debris and irritation.",
        "Inspect the eyes and ears during routine grooming.",
        "Trim nails regularly and brush teeth with dog-specific dental products.",
        "Monitor the skin for redness, persistent itching or sores hidden under the coat.",
        "Do not shave the coat solely to make the dog cooler without veterinary or professional grooming advice; focus on shade, water and avoiding heat exposure.",
        "Take extra care during seasonal shedding, when loose undercoat can accumulate quickly.",
      ],
    },

    training: {
      difficulty:
        "Moderate to challenging; the breed's independent temperament can make repetitive or forceful training ineffective.",

      tips: [
        "Use rewards, praise and short, clear training sessions.",
        "Teach handling, grooming and veterinary-care routines gradually and positively.",
        "Practise calm greetings and give the dog space when it appears uncomfortable.",
        "Introduce unfamiliar people and dogs in controlled, low-pressure settings.",
        "Teach loose-leash walking and reliable responses before increasing distractions.",
        "Avoid physical punishment, forced greetings and confrontational handling.",
        "Supervise interactions with children and teach them not to hug, climb on or disturb a resting dog.",
      ],

      socialization:
        "Begin early, using calm and positive introductions to people, dogs, handling, sounds and everyday settings. Continue throughout adulthood, without forcing close contact. Reward relaxed behaviour and respect the dog's signals when it needs space.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Cool and temperate climates",
        "Warm climates only with careful heat management, shade, ventilation and constant access to water",
        "Avoid strenuous exercise during hot or humid weather",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced diet appropriate to the dog's life stage, body condition, activity level and veterinary needs.",

    feedingFrequency: {
      puppy:
        "Feed a complete puppy diet in age-appropriate meals, following the food manufacturer's instructions and veterinary advice.",

      adult:
        "Many adult dogs do well with two measured meals a day. Adjust portions to maintain a healthy body condition and account for activity changes.",

      senior: null,
    },

    guidelines:
      "Measure food portions, provide fresh water at all times and monitor body condition regularly. Choose a complete diet appropriate for the dog's age and health. Treats count toward daily intake. Ask a veterinarian for individual advice if weight changes, skin problems or digestive symptoms persist.",

    considerations: [
      "Avoid overfeeding and monitor weight and body condition.",
      "Adjust portions for age, activity and veterinary needs.",
      "Introduce diet changes gradually unless a veterinarian recommends otherwise.",
      "Discuss persistent itching, recurrent skin problems or suspected food reactions with a veterinarian rather than changing diets repeatedly without guidance.",
      "In hot weather, ensure fresh water is always available and avoid exercising immediately in the heat.",
    ],

    note:
      "Individual calorie requirements vary. Use feeding guidance as a starting point and adjust with body-condition monitoring and veterinary advice.",
  },

  health: {
    overview:
      "Chow Chows benefit from routine veterinary care and attention to their eyes, joints, skin, weight and heat tolerance. Breed-club screening guidance includes eye, hip, elbow, patellar and autoimmune thyroiditis evaluations. These recommendations help breeders and owners assess selected risks; they do not guarantee that a dog will be free of inherited or later-developing conditions.",

    commonConditions: [
      "Hip dysplasia: a developmental joint condition for which screening is recommended.",
      "Elbow dysplasia: a developmental joint concern included in breed screening recommendations.",
      "Patellar luxation: displacement of the kneecap, for which screening is recommended.",
      "Eye disorders: eye examinations are included in breed screening recommendations; seek veterinary assessment for squinting, discharge, redness or discomfort.",
      "Autoimmune thyroiditis: a thyroid-related concern included in breed screening guidance.",
      "Skin and coat problems: dense undercoat and mats can hide irritation or contribute to discomfort if grooming is neglected.",
      "Heat-related illness: a potentially serious risk when a heavily coated dog is exposed to high temperatures or strenuous exercise in hot weather.",
    ],

    preventiveCare: [
      "Arrange routine veterinary examinations and keep vaccinations and parasite prevention appropriate to local risks.",
      "Ask the breeder for documented health screening results and discuss their meaning with a veterinarian.",
      "Maintain a healthy body condition and adjust exercise and feeding as the dog ages.",
      "Monitor the eyes, skin, ears, mobility and general behaviour for changes.",
      "Provide shade, ventilation and fresh water, and avoid strenuous exercise in hot or humid conditions.",
      "Seek urgent veterinary care for breathing difficulty, collapse, marked weakness or suspected heatstroke.",
    ],

    recommendedScreenings: [
      "Eye examination by a qualified veterinary ophthalmologist",
      "Hip dysplasia evaluation",
      "Elbow dysplasia evaluation",
      "Patellar luxation evaluation",
      "Autoimmune thyroiditis evaluation",
      "Optional cardiac evaluation where advised by the breeder's veterinarian or relevant health program",
    ],

    dentalCare:
      "Brush the teeth regularly with dog-specific toothpaste and a suitable toothbrush. Arrange veterinary dental checks and do not use human toothpaste.",

    earCare:
      "Check the ears regularly for redness, odour, discharge or discomfort. Clean only as advised by a veterinarian and seek care if signs of infection appear.",

    skinCare:
      "Part the coat to inspect the skin during grooming. Check for mats, moisture, parasites, redness and persistent itching. Dense fur can conceal skin changes, so seek veterinary advice if irritation, sores or hair loss persist.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Owners who appreciate an independent, dignified companion",
      "Households prepared for frequent, thorough coat care",
      "People willing to socialise carefully and respect the dog's boundaries",
      "Owners who can provide regular moderate exercise and heat-safe routines",
      "People comfortable with consistent, reward-based training",
    ],

    notIdealFor: [
      "People seeking a low-grooming dog",
      "Households expecting every dog to welcome frequent handling or unfamiliar visitors",
      "Owners unable to manage introductions and interactions responsibly",
      "People who cannot provide safe, cool conditions during hot weather",
      "Households unwilling to maintain regular grooming and preventive veterinary care",
    ],
  },

  funFacts: [
    "The Chow Chow is classified by the FCI among Asian Spitz and related breeds.",
    "Its blue-black tongue is one of its best-known physical characteristics.",
    "The breed has both rough-coated and smooth-coated varieties.",
    "The Chow Chow's tail is carried high and rests over the back.",
    "The breed's short-striding gait is a recognised part of its characteristic movement.",
  ],

  faq: [
    {
      question: "Are Chow Chows good family dogs?",
      answer:
        "They can form close bonds with their household, but their independent nature and personal boundaries mean that family suitability depends on the individual dog, socialisation and supervision. Children should be taught to handle dogs respectfully, and interactions should be supervised.",
    },
    {
      question: "How much grooming does a Chow Chow need?",
      answer:
        "Regular, thorough grooming is essential. Brush through the dense outer coat and undercoat at least twice a week, and more often during heavy shedding or when tangles develop. Check the skin as well as the visible coat.",
    },
    {
      question: "Are Chow Chows easy to train?",
      answer:
        "They can learn with patient, consistent, reward-based training, but they may be independent and less willing to repeat exercises without a clear benefit. Avoid forceful methods and make handling practice part of everyday training.",
    },
    {
      question: "Can a Chow Chow live in a hot climate?",
      answer:
        "Extra care is needed because of the dense double coat. Provide shade, ventilation and fresh water, exercise during cooler hours and avoid strenuous activity in hot or humid weather. Seek veterinary care promptly if heat illness is suspected.",
    },
    {
      question: "What health tests should I ask a breeder about?",
      answer:
        "Ask for documented eye, hip, elbow, patellar and autoimmune thyroiditis screening results. A veterinarian can help interpret the results and advise whether additional tests are appropriate for the individual dog.",
    },
    {
      question: "What colours can Chow Chows have?",
      answer:
        "Recognised colours include black, red, blue, fawn, cream and white. The coat may have shading, but the FCI standard does not permit patchy or parti-coloured coats.",
    },
    {
      question: "What is a Chow Chow's life expectancy?",
      answer:
        "The AKC breed profile lists a life expectancy of 8–12 years. An individual dog's lifespan varies with genetics, health, preventive care and living conditions.",
    },
  ],

  references: [
    "fci-chow-chow-standard",
    "american-kennel-club-chow-chow",
    "chow-chow-health-screening-chic",
    "wikimedia-chow-chow-andrea-papaccio",
    "wikimedia-chow-chow-prayitno",
    "wikimedia-chow-chow-olga-filonenko",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific scientific name is recorded; a formal taxonomy value was not required for the breed profile.",
    },

    alternateNames: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No additional alternate name is recorded because a reliable, distinct alternative name was not established from the consulted breed authorities.",
    },

    group: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "FCI standard: classification",
        },
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile: Non-Sporting Group",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Group labels differ by registry.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "FCI standard: origin",
        },
      ],
      verifiedOn: "2026-10-23",
      note: null,
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The consulted official standard identifies China as the country of origin but does not establish a single specific region.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "FCI standard: historical summary, appearance and temperament",
        },
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile: appearance, temperament and grooming",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "User-facing descriptions are original synthesis; uncertain early ancestry is not presented as established fact.",
    },

    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "cited",
          locator: "FCI standard: height and general appearance",
        },
      ],
      verifiedOn: null,
      note: "Editorial size description based on standard height and build.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "FCI standard: size",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Measurements are stored in centimetres.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile: average weight",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "The published 45–70 lb range is for the breed overall, not separated by sex. It is converted to kilograms and repeated in both schema sex slots solely because the current schema requires a BySex structure; it is not a claim of sex-specific weight ranges.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile: life expectancy",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Published life-expectancy estimate, not a guarantee for an individual dog.",
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "FCI standard: coat",
        },
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile: rough and smooth coats",
        },
      ],
      verifiedOn: "2026-10-23",
      note: null,
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "FCI standard: rough and smooth coat descriptions",
        },
      ],
      verifiedOn: "2026-10-23",
      note: null,
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "FCI standard: colour",
        },
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile: breed colours",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Colours follow the FCI standard; shading may occur, but patchy or parti-coloured coats are not accepted by that standard.",
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile: grooming and coat care",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Describes coat-maintenance and shedding expectations, not a measured shedding rate.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No consistent, authoritative breed-specific drooling rating was established.",
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "FCI standard: general appearance, tongue, ears, tail and movement",
        },
      ],
      verifiedOn: "2026-10-23",
      note: null,
    },

    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "FCI standard: behaviour and temperament",
        },
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile: temperament and personality",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "These are general breed tendencies, not a prediction about every individual dog.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile: trait descriptions",
        },
      ],
      verifiedOn: null,
      note: "All 1–5 ratings are editorial estimates, not standardised behavioural test results.",
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile: exercise needs",
        },
      ],
      verifiedOn: "2026-10-23",
      note: null,
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile: daily exercise",
        },
      ],
      verifiedOn: null,
      note: "Practical estimate for a healthy adult; age, health, weather and individual needs vary.",
    },

    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Suggested activities are general care advice and should be adapted to the individual dog.",
    },

    "care.grooming.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile: grooming",
        },
      ],
      verifiedOn: "2026-10-23",
      note: null,
    },

    "care.grooming.brushing": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile: brushing and undercoat care",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "The routine should be adjusted for coat type and seasonal shedding.",
    },

    "care.grooming.bathing": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General grooming guidance; drying needs depend on coat density and condition.",
    },

    "care.grooming.notes": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine grooming and coat-maintenance guidance.",
    },

    "care.training.difficulty": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "FCI standard: temperament",
        },
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile: personality",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Training difficulty is descriptive and varies with the individual dog and method.",
    },

    "care.training.tips": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Reward-based training and safe interaction guidance.",
    },

    "care.training.socialization": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General socialisation guidance; introductions should be gradual and should respect the dog's comfort.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Apartment suitability cannot be reduced to a universal yes/no; the individual dog, exercise, temperature and management matter.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile: exercise and care",
        },
      ],
      verifiedOn: null,
      note: "Editorial assessment; a yard does not replace walks, interaction or heat management.",
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "cited",
          locator: "FCI standard: coat must not impede activity or cause distress in hot weather",
        },
      ],
      verifiedOn: null,
      note: "General heat-safety guidance informed by the standard's warning about excess coat and hot weather.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific duration for being left alone was established.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine nutrition guidance; feeding should be adapted to the individual dog's age, body condition and veterinary needs.",
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
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile: recommended health tests",
        },
        {
          id: "chow-chow-health-screening-chic",
          role: "verified",
          locator: "OFA-CHIC breed-specific screening recommendations",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Screening recommendations identify areas for assessment; they do not establish that every dog will develop a condition.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive veterinary and heat-safety guidance.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile: recommended health tests from the national breed club",
        },
        {
          id: "chow-chow-health-screening-chic",
          role: "verified",
          locator: "Breed-specific CHIC screening requirements",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Screening guidance can change; confirm current requirements with the breed club and veterinarian. A CHIC number does not mean every result is normal.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine dental care advice.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General ear monitoring guidance.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General skin and coat inspection guidance.",
    },

    "suitability.firstTimeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile: temperament and grooming needs",
        },
      ],
      verifiedOn: null,
      note: "Editorial assessment; an experienced, well-supported first-time owner may still be successful.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability with children depends on the individual dog, child behaviour, supervision and household experience; no universal yes/no value is recorded.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability for senior owners depends on mobility, support, grooming capacity and the individual dog.",
    },

    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile: exercise needs",
        },
      ],
      verifiedOn: null,
      note: "Editorial assessment based on the breed's moderate exercise needs.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Apartment suitability depends on temperature, exercise, coat care and the individual dog's behaviour; no universal value is recorded.",
    },

    "suitability.idealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile: temperament, grooming and exercise",
        },
      ],
      verifiedOn: null,
      note: "Editorial matching guidance, not a guarantee of compatibility.",
    },

    "suitability.notIdealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile: temperament, grooming and exercise",
        },
      ],
      verifiedOn: null,
      note: "Editorial matching guidance, not a guarantee of incompatibility.",
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "FCI standard: classification, tongue, coat, tail and movement",
        },
      ],
      verifiedOn: "2026-10-23",
      note: null,
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "FCI standard: temperament, colour and coat",
        },
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile: lifespan, grooming, exercise and health tests",
        },
        {
          id: "chow-chow-health-screening-chic",
          role: "verified",
          locator: "Breed-specific health screening recommendations",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Answers are original summaries and distinguish general breed guidance from individual outcomes.",
    },
  },

  updatedOn: "2026-10-23",
};
