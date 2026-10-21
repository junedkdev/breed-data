import type { Breed } from "../schema/breed.types";

export const jack_russell_terrier: Breed = {
  slug: "jack-russell-terrier",
  name: "Jack Russell Terrier",
  scientificName: null,
  alternateNames: ["Terrier Jack Russell"],
  group: "FCI Group 3 — Terriers; Section 2 — Small Terriers",
  origin: {
    country: "England",
    region: null,
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Jack_russell_terrier.JPG",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Jack_russell_terrier.JPG",
      title: "Jack russell terrier.JPG",
      description: "Photograph of Jack Russell Terrier dogs.",
      creator: "Ilmelodoro",
      uploader: "Ilmelodoro",
      capturedOn: "2012-01-15",
      uploadedOn: "2012-05-26",
      width: 2769,
      height: 1904,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Ilmelodoro, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Indicate any changes made; adaptations must comply with applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Jack_Russel_Terrier.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Jack_Russel_Terrier.jpg",
      title: "Jack Russel Terrier.jpg",
      description: "Photograph of a Jack Russell Terrier.",
      creator: "Johannesvg",
      uploader: "Johannesvg",
      capturedOn: "2012-01-15",
      uploadedOn: "2013-01-06",
      width: 427,
      height: 640,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Johannesvg, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Indicate any changes made; adaptations must comply with applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Jack_Russell_terrier_puppy.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Jack_Russell_terrier_puppy.jpg",
      title: "Jack Russell terrier puppy.jpg",
      description: "Photograph of an 11-week-old Jack Russell Terrier puppy.",
      creator: "3steph14",
      uploader: "3steph14",
      capturedOn: "2023-10-25",
      uploadedOn: "2023-11-30",
      width: 4080,
      height: 3072,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by 3steph14, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate any changes made; adaptations must comply with applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
  ],
  overview: {
    summary:
      "The Jack Russell Terrier is a small, energetic working terrier developed from English fox-working dogs and shaped into its recognised modern form in Australia. Alert, bold and quick to learn, it was bred to follow hounds and pursue quarry underground. It is usually best suited to homes that can offer daily activity, thoughtful training and safe outlets for its strong urge to chase, dig and explore.",
    description:
      "Compact but athletic, the Jack Russell Terrier has a body that is slightly longer than it is tall, with a flexible frame built for movement and work in tight spaces. Its coat may be smooth, rough or broken, and white should predominate with black and/or tan markings. This is not simply a small lap dog: the breed often brings a lively, persistent working temperament into everyday life. Consistent reward-based training, enrichment and secure supervision help channel its energy into appropriate activities.",
    history:
      "The breed traces to nineteenth-century England and Reverend John Russell, who developed fox-working terriers able to keep pace with hounds and enter dens to flush foxes and other quarry. Similar Russell-type terriers later travelled to Australia, where working dogs formed the basis of the breed developed and registered there. The Jack Russell Terrier is distinct from the taller, more squarely built Parson Russell Terrier, despite their shared historical roots.",
    originalPurpose:
      "A working terrier bred to accompany foxhounds and pursue foxes and other quarry into underground dens.",
    currentRoles: [
      "Active companion",
      "Scent games and tracking",
      "Agility and other suitable canine sports",
      "Structured terrier activities where available",
    ],
  },
  physical: {
    sizeCategory: "Small",
    height: {
      unit: "cm",
      male: { min: 25, max: 30 },
      female: { min: 25, max: 30 },
    },
    weight: {
      unit: "kg",
      male: { min: 5, max: 6 },
      female: { min: 5, max: 6 },
    },
    lifespanYears: { min: 13, max: 15 },
    coatType:
      "Weather-resistant coat that may be smooth, rough or broken; the coat should retain a natural working texture.",
    coatLength: "Short, with smooth, broken and rough varieties.",
    coatColors: [
      "Predominantly white with black markings",
      "Predominantly white with tan markings",
      "Predominantly white with black and tan markings",
    ],
    sheddingLevel: "Low to moderate; regular shedding occurs.",
    droolingLevel: "Low",
    distinctiveFeatures: [
      "Compact, flexible body slightly longer than it is tall",
      "Lively, alert expression with small, dark, almond-shaped eyes",
      "Button or dropped ears",
      "Weatherproof smooth, broken or rough coat",
      "Predominantly white coat with black and/or tan markings",
      "Deep chest and agile frame suited to working underground",
    ],
  },
  temperament: {
    traits: [
      "Lively, alert and active",
      "Bold and confident",
      "Friendly and often affectionate with familiar people",
      "Intelligent and quick to learn",
      "Persistent and independent when following scent or movement",
      "May chase wildlife and small animals because of its working heritage",
      "Can bark or dig when excited, under-stimulated or pursuing an instinctive activity",
      "Individual behaviour varies with genetics, experience, training and environment",
    ],
    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 2,
      independence: 4,
      trainability: 4,
      barking: 4,
      energy: 5,
    },
  },
  care: {
    exercise: {
      level:
        "High. The breed generally needs daily physical activity together with mentally engaging tasks. Tailor the amount and intensity to age, fitness, health and the individual dog.",
      minutesPerDay: null,
      activities: [
        "Brisk walks with opportunities to sniff and explore",
        "Reward-based training in short, varied sessions",
        "Scent games, food puzzles and problem-solving activities",
        "Fetch or interactive play in a secure area",
        "Agility, tracking or appropriate terrier activities",
        "Recall practice in securely enclosed spaces",
      ],
    },
    grooming: {
      level: "Low to moderate; rough or broken coats may need additional attention.",
      brushing:
        "Brush about weekly to remove loose hair and check the skin. Rough or broken coats may need hand-stripping or help from a groomer familiar with the coat type.",
      bathing:
        "Bathe when dirty or otherwise needed, using a dog-formulated shampoo and avoiding unnecessarily frequent baths.",
      notes: [
        "Grooming needs differ somewhat between smooth, broken and rough coats.",
        "Check ears regularly for redness, odour or discharge and clean only as needed with an appropriate product.",
        "Trim nails as needed to keep movement comfortable.",
        "Brush teeth regularly with dog-safe toothpaste.",
        "Inspect the skin and coat during grooming for parasites, irritation or wounds.",
      ],
    },
    training: {
      difficulty:
        "Moderate to challenging for inexperienced handlers. The breed is capable and responsive, but can be persistent, energetic and strongly motivated to chase.",
      tips: [
        "Use reward-based, varied sessions to keep learning engaging.",
        "Start recall, loose-leash walking and calm-settle training early.",
        "Reward quiet and settled behaviour as well as active performance.",
        "Provide safe outlets for sniffing, searching, digging and problem-solving.",
        "Use secure fencing and a lead where wildlife or small animals may trigger chasing.",
        "Manage introductions to children, dogs and other pets carefully.",
        "Avoid harsh methods; seek qualified help if chasing, reactivity or barking is difficult to manage.",
      ],
      socialization:
        "Introduce people, dogs, sounds, surfaces, transport and new settings gradually and positively. Supervise children’s interactions and use appropriate barriers around small pets; socialisation does not remove an individual dog's prey drive.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,
      climates: [
        "Can adapt to many climates when given appropriate shelter and care.",
        "In hot weather, provide shade, ventilation, fresh water and exercise during cooler parts of the day.",
        "In cold or wet conditions, provide a dry, comfortable resting area and monitor the individual dog.",
      ],
      aloneTimeTolerance: null,
    },
  },
  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate for life stage, body condition, activity level and health.",
    feedingFrequency: {
      puppy:
        "Feed a complete puppy diet in age-appropriate meals, following the food guidance and advice from a veterinarian.",
      adult:
        "Use measured meals of a complete adult diet and adjust the amount to maintain a healthy body condition.",
      senior:
        "Select a complete diet suited to activity, body condition, dental health and medical needs, with veterinary advice when appropriate.",
    },
    guidelines:
      "Assess food needs individually rather than assuming every dog of this breed needs the same quantity. Choose a nutritionally complete diet, measure portions, include training treats in the daily allowance, provide fresh water and monitor body condition. Ask a veterinarian about persistent weight changes, digestive signs or supplements.",
    considerations: [
      "Adjust portions to age, activity, body condition and food energy density.",
      "Count training treats as part of the daily intake.",
      "Keep fresh, clean water available.",
      "Introduce dietary changes gradually.",
      "Discuss persistent digestive signs or unexplained weight change with a veterinarian.",
      "Avoid supplements without a specific need and suitable veterinary advice.",
    ],
    note:
      "No universal calorie target or serving size is provided because requirements vary by individual dog, food and lifestyle.",
  },
  health: {
    overview:
      "Jack Russell Terriers are often described as robust, but breed-specific screening guidance highlights inherited conditions that responsible breeders should consider. These include primary lens luxation and neurological disorders such as late-onset ataxia and spinocerebellar ataxia. Screening recommendations concern breeding decisions and risk management; they cannot predict with certainty whether an individual dog will become ill.",
    commonConditions: [
      "Primary lens luxation, an inherited eye condition that can threaten vision",
      "Late-onset ataxia, an inherited neurological disorder",
      "Spinocerebellar ataxia, an inherited neurological disorder",
    ],
    preventiveCare: [
      "Arrange routine veterinary examinations and follow locally appropriate vaccination and parasite-prevention advice.",
      "Ask breeders for documented results from health tests relevant to the breed and the dog's lineage.",
      "Discuss primary lens luxation and neurological DNA tests, plus eye examinations, with a veterinarian or breed specialist.",
      "Seek prompt veterinary advice for sudden vision changes, abnormal balance, weakness, altered gait or other new neurological signs.",
      "Maintain dental hygiene, a healthy body condition and activity suitable for the individual dog.",
      "Remember that screening reduces uncertainty but does not guarantee future health.",
    ],
    recommendedScreenings: [
      "DNA test for primary lens luxation (PLL), listed as a good-practice pre-breeding test by The Royal Kennel Club.",
      "DNA test for late-onset ataxia (LOA), listed as a best-practice test.",
      "DNA test for spinocerebellar ataxia (SCA), listed as a best-practice test.",
      "Eye examination using an appropriate veterinary ophthalmology screening scheme.",
    ],
    dentalCare:
      "Brush teeth regularly with dog-safe toothpaste and arrange veterinary oral checks. Seek advice for oral pain, bleeding gums, damaged teeth, persistent bad breath or difficulty eating.",
    earCare:
      "Check ears regularly for redness, discharge, odour or repeated scratching. Clean only as needed with a dog-safe product and seek veterinary advice for persistent or painful signs.",
    skinCare:
      "Inspect skin and coat during grooming. Seek veterinary advice for ongoing itching, redness, sores, hair loss or recurring irritation rather than assuming the cause.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "Active households that enjoy daily outdoor activities and training",
      "Owners willing to provide secure containment and supervise the dog around wildlife",
      "People interested in scent games, agility, tracking or other suitable terrier activities",
      "Households prepared for a lively dog with persistent hunting instincts",
    ],
    notIdealFor: [
      "People seeking a low-energy dog that needs little stimulation",
      "Homes unable to provide safe containment or supervision around small animals",
      "Owners expecting reliable off-leash behaviour around wildlife without training and management",
      "Households unable to make time for daily activity, training and interaction",
    ],
  },
  funFacts: [
    "The breed originated in England and was developed into its modern recognised form in Australia.",
    "The FCI standard places the Jack Russell Terrier in Group 3, Terriers, Section 2, Small Terriers.",
    "Its working build is slightly longer than it is tall, with a chest shaped to help it move through narrow underground spaces.",
    "The Jack Russell Terrier is distinct from the taller, more squarely built Parson Russell Terrier.",
  ],
  faq: [
    {
      question: "Where did the Jack Russell Terrier originate?",
      answer:
        "The breed originated in England in the nineteenth century, from terriers associated with Reverend John Russell. Australia is identified as the country of development in the FCI standard.",
    },
    {
      question: "How tall is a Jack Russell Terrier?",
      answer:
        "The FCI and Royal Kennel Club standards give an ideal height range of 25–30 cm at the withers. An individual dog's adult height can differ from the standard.",
    },
    {
      question: "How much should a Jack Russell Terrier weigh?",
      answer:
        "The FCI standard relates weight to height at approximately 1 kg for each 5 cm of height, giving about 5 kg at 25 cm and 6 kg at 30 cm. Healthy weight depends on build and body condition.",
    },
    {
      question: "What coat colours are accepted?",
      answer:
        "White should predominate, with black and/or tan markings. The coat may be smooth, rough or broken.",
    },
    {
      question: "Does a Jack Russell Terrier need a lot of exercise?",
      answer:
        "It is an energetic working terrier that benefits from daily activity and mental enrichment. The appropriate amount depends on age, health, fitness and the individual dog; no fixed minute target is specified here.",
    },
    {
      question: "What health tests should I ask a breeder about?",
      answer:
        "Ask about primary lens luxation DNA testing, late-onset ataxia and spinocerebellar ataxia DNA testing, and appropriate eye examinations. Confirm current recommendations and results with the breeder, veterinarian or breed specialist.",
    },
    {
      question: "How long does a Jack Russell Terrier live?",
      answer:
        "A veterinary breed overview reports a lifespan of about 13–15 years. This is a general estimate, not a guarantee for an individual dog.",
    },
  ],
  references: [
    "fci-jack-russell-terrier-standard",
    "royal-kennel-club-jack-russell-terrier-standard",
    "royal-kennel-club-jack-russell-terrier-profile",
    "vca-jack-russell-terrier-breed-care",
    "jack-russell-terrier-club-health-monitoring",
    "wikimedia-jack-russell-terrier-ilmelodoro",
    "wikimedia-jack-russell-terrier-johannesvg",
    "wikimedia-jack-russell-terrier-puppy-3steph14",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
  ],
  evidence: {
    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "Title and official breed name; French title",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The alternate name follows the published French-language title.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A separate scientific species name for this domestic dog breed is not established in the consulted breed references.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "FCI classification: Group 3 Terriers, Section 2 Small Terriers",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Uses the FCI classification; other registries may organise breeds differently.",
    },
    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "Origin: England",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The FCI standard lists England as the origin.",
    },
    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A more specific region is not stated in the consulted official standard.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "Utilization, Brief Historical Summary and General Appearance",
        },
        {
          id: "royal-kennel-club-jack-russell-terrier-standard",
          role: "verified",
          locator: "Brief Historical Summary and General Appearance",
        },
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "verified",
          locator: "Breed Overview and Appearance",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Original descriptions synthesize official history, working purpose, conformation and current veterinary breed guidance.",
    },
    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "royal-kennel-club-jack-russell-terrier-profile",
          role: "cited",
          locator: "Breed characteristics: Size",
        },
      ],
      verifiedOn: null,
      note: "Display category follows the UK breed profile's small-size classification.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "Size and Weight: ideal height at the withers 25–30 cm",
        },
        {
          id: "royal-kennel-club-jack-russell-terrier-standard",
          role: "verified",
          locator: "Size: 25–30 cm",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The standards do not provide distinct male and female height ranges, so the same standard range is recorded for both.",
    },
    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "Size and Weight: approximately 1 kg per 5 cm of height",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The FCI standard relates weight to height and gives examples of approximately 5 kg at 25 cm and 6 kg at 30 cm; sex-specific values are not specified, so the same approximate range is recorded for both.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "verified",
          locator: "Breed Overview: lifespan 13–15 years",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "This is a veterinary source's general lifespan estimate, not an outcome guaranteed for an individual dog.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "Coat: smooth, rough or broken; weatherproof",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Follows the FCI coat description.",
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "Coat colour: white must predominate with black and/or tan markings",
        },
        {
          id: "royal-kennel-club-jack-russell-terrier-standard",
          role: "verified",
          locator: "Colour",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Colour variants express the standards' rule that white predominates and black and/or tan markings are permitted.",
    },
    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-jack-russell-terrier-profile",
          role: "verified",
          locator: "Breed characteristics: Sheds — Yes",
        },
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "verified",
          locator: "Breed Overview: shedding level Low to Moderate; Grooming",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The profile indicates regular shedding; VCA characterises it as low to moderate.",
    },
    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "verified",
          locator: "Breed Overview: drooling level Low",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Recorded from a veterinary breed overview.",
    },
    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "General Appearance, Important Proportions, Head, Ears, Coat and Size",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Summary of standard-described shape, ears, coat and colour rather than individual-dog predictions.",
    },
    "physical.coatLength": {
  reliability: "official_standard",
  sources: [
    {
      id: "fci-jack-russell-terrier-standard",
      role: "verified",
      locator: "Coat: smooth, rough or broken varieties",
    },
  ],
  verifiedOn: "2026-10-21",
  note: "The coat varieties are described in the official breed standard.",
},
    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "Behaviour / Temperament",
        },
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "verified",
          locator: "Breed Overview, Temperament and Training",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Combines official breed temperament with veterinary discussion of prey drive, independence, training and enrichment.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "cited",
          locator: "Behaviour / Temperament",
        },
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "cited",
          locator: "Breed Overview and Temperament and Training",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1–5 estimates informed by descriptions of energy, confidence, trainability and chase drive; scores are not clinical or standardised test results.",
    },
    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-jack-russell-terrier-profile",
          role: "verified",
          locator: "Breed characteristics: Exercise — up to 1 hour per day; VCA discussion of exercise and mental stimulation",
        },
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "verified",
          locator: "Exercise Needs",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Describes high activity needs qualitatively while avoiding a precise universal daily exercise duration.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No exact daily minute range is stored because sources express activity needs differently and individual needs vary.",
    },
    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-jack-russell-terrier-profile",
          role: "verified",
          locator: "Breed characteristics: Grooming once a week",
        },
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "verified",
          locator: "Grooming and Coat Care",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Weekly brushing is supported by the profile; rough and broken coat maintenance may need extra work.",
    },
    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "verified",
          locator: "Temperament and Training",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Training guidance reflects veterinary advice to use consistent reward-based training and to manage chase-related behaviour.",
    },
    "care.livingEnvironment": {
      reliability: "general_guidance",
      sources: [
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "cited",
          locator: "Suggested Exercises and Temperament",
        },
      ],
      verifiedOn: null,
      note: "General care recommendations; apartment suitability and alone-time tolerance are left unclassified rather than assumed.",
    },
    "care.livingEnvironment.apartmentSuitable": {
  reliability: "unavailable",
  sources: [],
  verifiedOn: null,
  note: "No sufficiently reliable basis was established for a categorical apartment-suitability value.",
},

"care.livingEnvironment.aloneTimeTolerance": {
  reliability: "unavailable",
  sources: [],
  verifiedOn: null,
  note: "No sufficiently reliable breed-specific evidence was established for alone-time tolerance.",
},
    "care.exercise.activities": {
  reliability: "general_guidance",
  sources: [],
  verifiedOn: null,
  note: "General activity suggestions suited to an energetic working terrier. Activities should be adapted to the individual dog's age, fitness, health, and training.",
},
    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Global Nutrition Guidelines",
        },
      ],
      verifiedOn: null,
      note: "General nutrition recommendations are individualized to body condition, life stage and health; these are not breed-specific dietary claims.",
    },
    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-jack-russell-terrier-profile",
          role: "verified",
          locator: "Health: pre-breeding screening for PLL, LOA, SCA and eye testing",
        },
        {
          id: "jack-russell-terrier-club-health-monitoring",
          role: "verified",
          locator: "Health Monitoring in the Jack Russell Terrier",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The listed conditions and screening advice are drawn from breed-specific health-screening resources; this is not a claim that every dog is affected.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "royal-kennel-club-jack-russell-terrier-profile",
          role: "cited",
          locator: "Health testing guidance",
        },
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "cited",
          locator: "Grooming and Breed Overview",
        },
      ],
      verifiedOn: null,
      note: "Combines breed-screening awareness with general routine veterinary prevention advice.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "Pet Dental Care",
        },
      ],
      verifiedOn: null,
      note: "General veterinary dental prevention guidance.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "cited",
          locator: "Grooming and Coat Care",
        },
      ],
      verifiedOn: null,
      note: "General ear inspection and care guidance.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "cited",
          locator: "Grooming and Coat Care",
        },
      ],
      verifiedOn: null,
      note: "General skin and coat inspection guidance.",
    },
    suitability: {
      reliability: "reliable_source",
      sources: [
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "verified",
          locator: "Breed Overview, Temperament and Training, Suggested Exercises",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Qualitative suitability lists are grounded in activity needs, prey drive and training considerations; explicit owner-category boolean ratings remain unavailable.",
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No definitive, standardised first-time-owner rating was found in the official breed standard or veterinary source.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Child compatibility depends on individual temperament, supervision and household circumstances; no universal boolean is recorded.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No source reviewed provides a defensible general boolean rating for suitability for senior owners.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The Royal Kennel Club profile lists apartment living as possible, but an individual dog's exercise, noise and enrichment needs vary; no universal boolean is recorded.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "Origin, Country of Development, History and Classification",
        },
        {
          id: "royal-kennel-club-jack-russell-terrier-standard",
          role: "verified",
          locator: "Brief Historical Summary and General Appearance",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Historical and classification facts are checked against official breed-standard documents.",
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "History, Classification, Coat and Size and Weight",
        },
        {
          id: "royal-kennel-club-jack-russell-terrier-profile",
          role: "verified",
          locator: "Health recommendations",
        },
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "verified",
          locator: "Breed Overview: lifespan and activity needs",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Answers distinguish official standard measurements, breed-screening recommendations and general lifespan estimates.",
    },
  },
  updatedOn: "2026-10-21",
};
