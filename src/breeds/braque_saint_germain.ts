import type { Breed } from "../schema/breed.types";

export const braque_saint_germain: Breed = {
  slug: "braque-saint-germain",
  name: "Braque Saint-Germain",
  scientificName: null,
  alternateNames: [
    "Saint Germain Pointer",
    "Saint-Germain Pointing Dog",
    "Braco Saint-Germain",
  ],
  group: "FCI Group 7 — Pointing Dogs; Section 1.1 — Continental Pointing Dogs, Braque type",
  origin: {
    country: "France",
    region:
      "Compiègne and Saint-Germain-en-Laye, associated with the breed's historical development",
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Braque_saint-germain_433.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Braque_saint-germain_433.jpg",
      title: "Braque saint-germain 433.jpg",
      description:
        "A Braque Saint-Germain shown at a dog show in Poznań, Poland.",
      creator: "Pleple2000",
      uploader: "Pleple2000",
      capturedOn: "2006-11-11",
      uploadedOn: "2006-11-22",
      width: 2226,
      height: 1998,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Pleple2000, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). No changes made. Source: https://commons.wikimedia.org/wiki/File:Braque_saint-germain_433.jpg",
      restrictions: null,
      metadataCheckedOn: "2026-10-24",
    },
  ],
  overview: {
    summary:
      "A medium-to-large French pointing dog with a short white coat marked in fawn or orange, developed for energetic and cooperative game-bird hunting.",
    description:
      "The Braque Saint-Germain is an athletic French gun dog recognised for its white coat with orange-fawn markings, balanced proportions, and smooth, purposeful movement. Its head has a moderately defined stop and a muzzle that is parallel to, or only slightly divergent from, the skull in profile. The coat is short, and the breed's outline combines substantial bone with musculature suited to sustained work. Traditionally used to locate and point game birds, it can also work on furred game. Breed descriptions portray it as affectionate, sociable, and responsive to patient handling. Its working heritage means that exercise, outdoor exploration, scent-based activities, and considerate training are important parts of responsible ownership.",
    history:
      "The breed developed in France around 1830 from dogs produced by crossing an English Pointer with a continental pointing dog. It was first associated with the royal kennels at Compiègne and later became known by its connection with Saint-Germain-en-Laye when the kennels moved. The breed became prominent at early French dog shows, including the first French dog show in 1863. Its French breed club was founded in March 1913, and the FCI granted definitive recognition in 1954.",
    originalPurpose:
      "Pointing game birds, especially pheasant, partridge, and woodcock; the breed may also be used to hunt furred game.",
    currentRoles: [
      "Pointing and retrieving game birds",
      "Hunting and field work",
      "Scent games and structured outdoor activities",
      "Active companion for households able to meet its exercise and training needs",
    ],
  },
  physical: {
    sizeCategory: "Medium to large",
    height: {
      unit: "cm",
      male: {
        min: 56,
        max: 62,
      },
      female: {
        min: 54,
        max: 59,
      },
    },
    weight: {
      unit: null,
      male: null,
      female: null,
    },
    lifespanYears: {
      min: 10,
      max: 14,
    },
    coatType: "Short, close, and not excessively fine.",
    coatLength: "Short, with a relatively fine-skinned, athletic outline.",
    coatColors: [
      "Dull white with orange or fawn markings",
      "Some mottling or ticking may occur, but is not preferred by the FCI standard",
      "Ears are predominantly fawn; only a very small amount of white is described as acceptable",
    ],
    sheddingLevel:
      "Not quantified in the breed standard; expect some routine shedding and assess the individual dog's coat.",
    droolingLevel: null,
    distinctiveFeatures: [
      "Athletic pointing-dog build with bone and musculature suited to sustained work",
      "Medium proportions and a moderately marked stop",
      "Skull and muzzle lines that are parallel or only slightly divergent",
      "Short coat in dull white with orange-fawn markings",
      "Smooth, balanced, and supple galloping action",
      "Height at the withers of 56–62 cm for males and 54–59 cm for females under the FCI standard",
    ],
  },
  temperament: {
    traits: [
      "Affectionate",
      "Sociable",
      "Even-tempered",
      "Intelligent",
      "Responsive to training",
      "Energetic when working",
      "Sensitive to harsh handling",
    ],
    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 2,
      independence: 3,
      trainability: 4,
      barking: 3,
      energy: 4,
    },
  },
  care: {
    exercise: {
      level:
        "Moderate to high. Its pointing-dog background makes regular physical activity and purposeful outdoor enrichment important.",
      minutesPerDay: null,
      activities: [
        "Brisk daily walks and longer outings suited to fitness",
        "Reward-based scent games and searching exercises",
        "Pointing and retrieving practice where appropriate",
        "Hikes or outdoor exploration in safe areas",
        "Controlled running in secure spaces",
      ],
    },
    grooming: {
      level: "Low to moderate",
      brushing:
        "Brush the short coat regularly with a soft brush or grooming mitt to remove loose hair and check the skin.",
      bathing:
        "Bathe when necessary with a dog-appropriate shampoo, especially after muddy outdoor activity.",
      notes: [
        "Inspect the coat and skin after walks in long grass or brush.",
        "Check ears, paws, nails, and pads as part of routine care.",
        "The short coat does not require elaborate styling.",
        "The breed standard does not provide a quantified shedding rate.",
      ],
    },
    training: {
      difficulty:
        "Moderate. Breed sources describe the dog as trainable and cooperative, while emphasising that harsh handling is unsuitable.",
      tips: [
        "Use patient, consistent, reward-based training.",
        "Keep sessions engaging and provide opportunities to use natural scenting and pointing behaviours.",
        "Build recall gradually and practise it in secure areas before considering off-lead activity.",
        "Teach reliable leash manners because outdoor scents can be distracting.",
        "Reward calm behaviour and cooperation rather than relying on physical correction.",
      ],
      socialization:
        "Introduce the dog positively to people, dogs, environments, handling, and everyday sounds. Continue socialisation throughout life and adapt the pace to the individual dog.",
    },
    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,
      climates: [
        "Provide shade, clean water, and rest during hot weather.",
        "Avoid strenuous exercise in high heat.",
        "Provide a dry, comfortable resting area after cold or wet outings.",
      ],
      aloneTimeTolerance: null,
    },
  },
  nutrition: {
    dietType:
      "A complete and balanced diet appropriate to the dog's age, activity level, body condition, and individual health needs.",
    feedingFrequency: {
      puppy:
        "Feed a suitable puppy diet in multiple meals according to age, growth, body condition, and veterinary advice.",
      adult:
        "Use regular meals and adjust portions to activity, weight trend, and body condition.",
      senior:
        "Review food type and portions as age, activity, body condition, and veterinary needs change.",
    },
    guidelines:
      "Choose a nutritionally complete diet and tailor the daily amount to the dog's life stage, workload, and body condition. Keep fresh water available, measure portions, and introduce dietary changes gradually.",
    considerations: [
      "Dogs doing regular field work may need different energy intake from less active companions.",
      "Monitor body condition rather than relying on a fixed portion for every dog.",
      "Include treats in the overall daily food allowance.",
      "Discuss persistent digestive signs, weight changes, or special diets with a veterinarian.",
    ],
    note:
      "This is general canine nutrition guidance, not a breed-specific feeding prescription.",
  },
  health: {
    overview:
      "The sources consulted do not establish a dependable breed-specific disease-prevalence profile or a dedicated screening schedule for this breed. Broad health-topic categories in general breed profiles are not enough to establish that a condition is common or inherited in the breed. Ask breeders for documented health history and discuss appropriate routine care with a veterinarian.",
    commonConditions: [],
    preventiveCare: [
      "Arrange routine veterinary examinations and follow vaccination and parasite-prevention guidance appropriate to the dog's region and lifestyle.",
      "Maintain a healthy body condition with suitable exercise and measured feeding.",
      "Inspect ears, skin, coat, paws, and nails during routine grooming.",
      "Seek veterinary advice for persistent changes in appetite, movement, vision, behaviour, or general condition.",
    ],
    recommendedScreenings: [],
    dentalCare:
      "Brush the teeth regularly with dog-safe toothpaste and arrange veterinary dental checks. Seek advice for bad breath, oral pain, bleeding gums, or difficulty eating.",
    earCare:
      "Check the ears regularly for redness, odour, discharge, discomfort, or repeated head shaking. Clean only as directed by a veterinarian.",
    skinCare:
      "Check the skin during brushing and after outdoor activity. Consult a veterinarian about persistent itching, redness, sores, hair loss, or recurring irritation.",
  },
  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,
    idealFor: [
      "Active owners who can provide consistent exercise and outdoor enrichment",
      "People interested in pointing, retrieving, or scent-based activities",
      "Households willing to use patient, reward-based training",
      "Owners who appreciate an affectionate dog with a genuine working-dog background",
    ],
    notIdealFor: [
      "Households seeking a consistently sedentary companion",
      "Owners unable to provide regular outdoor activity and mental enrichment",
      "People who rely on harsh or coercive training methods",
      "Homes where exercise and training needs cannot be accommodated",
    ],
  },
  funFacts: [
    "The breed was developed around 1830 in French royal kennels.",
    "Its earlier name was associated with Compiègne before the Saint-Germain name became established.",
    "The breed appeared prominently at early French dog shows, including the first French dog show in 1863.",
    "The FCI granted definitive recognition to the breed in 1954.",
  ],
  faq: [
    {
      question: "Where does the Braque Saint-Germain originate?",
      answer:
        "It originates in France and was developed around 1830 from an English Pointer and a continental pointing dog. Its history is associated with Compiègne and later Saint-Germain-en-Laye.",
    },
    {
      question: "How tall is a Braque Saint-Germain?",
      answer:
        "The FCI standard gives 56–62 cm at the withers for males and 54–59 cm for females. It also describes an additional 2 cm tolerance for exceptional specimens.",
    },
    {
      question: "What colour is its coat?",
      answer:
        "The standard describes a dull white coat with orange or fawn markings. Some mottling is tolerated, but is not preferred.",
    },
    {
      question: "What was the breed developed to do?",
      answer:
        "It was developed as a pointing dog, mainly for feathered game such as pheasant, partridge, and woodcock. Breed descriptions also mention work on furred game.",
    },
    {
      question: "Is the Braque Saint-Germain easy to train?",
      answer:
        "Breed descriptions characterise it as intelligent and responsive to training. Patient, consistent, reward-based methods are appropriate; harsh handling is not recommended.",
    },
    {
      question: "How much does a Braque Saint-Germain weigh?",
      answer:
        "The FCI standard does not specify a breed-specific weight range, so this record does not provide a numerical weight estimate.",
    },
    {
      question: "What is its life expectancy?",
      answer:
        "Published breed profiles give estimates that differ. A 10–14 year range is recorded here as an approximate range, not a guarantee for an individual dog.",
    },
    {
      question: "Which health tests should I ask a breeder about?",
      answer:
        "A dependable breed-specific screening schedule was not established from the sources consulted. Ask the breeder for documented health information about the parents and family line, and discuss appropriate checks with a veterinarian.",
    },
    {
      question: "Can it live in an apartment?",
      answer:
        "Apartment suitability depends on the individual dog and the household's ability to provide exercise, enrichment, and training. This record rates apartment living cautiously because the breed was developed for active field work.",
    },
  ],
  references: [
    "fci-braque-saint-germain-standard",
    "fci-braque-saint-germain-nomenclature",
    "vdh-braque-saint-germain",
    "ukc-braque-saint-germain-standard",
    "zoetis-braque-saint-germain",
    "royal-canin-braque-saint-germain",
    "wikimedia-braque-saint-germain-433",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
  ],
  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-braque-saint-germain-nomenclature",
          role: "verified",
          locator: "Official English and Spanish breed names",
        },
        {
          id: "vdh-braque-saint-germain",
          role: "verified",
          locator: "Breed name and profile",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Alternate names are documented names for the breed.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted breed-specific sources do not establish a separate scientific name for this breed.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "verified",
          locator: "FCI classification",
        },
      ],
      verifiedOn: "2026-10-24",
      note: null,
    },
    origin: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "verified",
          locator: "Origin and brief historical summary",
        },
        {
          id: "vdh-braque-saint-germain",
          role: "verified",
          locator: "Herkunft — origin and development",
        },
      ],
      verifiedOn: "2026-10-24",
      note:
        "The record uses the documented French locations associated with the breed's development rather than claiming a single precise place of origin.",
    },
    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "verified",
          locator: "Origin",
        },
      ],
      verifiedOn: "2026-10-24",
      note: null,
    },
    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "verified",
          locator: "Brief historical summary — Compiègne and Saint-Germain-en-Laye",
        },
      ],
      verifiedOn: "2026-10-24",
      note:
        "These are historical development locations, not a claim that the breed originated within one modern administrative region.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "verified",
          locator: "Historical summary, utilization, general appearance, and temperament",
        },
        {
          id: "vdh-braque-saint-germain",
          role: "verified",
          locator: "Origin, personality, appearance, and hunting use",
        },
        {
          id: "ukc-braque-saint-germain-standard",
          role: "verified",
          locator: "History, characteristics, general appearance, and coat",
        },
      ],
      verifiedOn: "2026-10-24",
      note:
        "Descriptions are original paraphrases. Historical details are limited to facts supported by breed-standard and kennel-club sources.",
    },
    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "cited",
          locator: "General appearance and height",
        },
      ],
      verifiedOn: null,
      note:
        "Medium to large is a catalogue category inferred from the standard's height and build description.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "verified",
          locator: "Size — height at the withers",
        },
      ],
      verifiedOn: "2026-10-24",
      note:
        "The recorded ranges are the standard's main male and female ranges; the standard separately allows a 2 cm tolerance for exceptional specimens.",
    },
    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The FCI standard does not specify weight, and no sufficiently reliable breed-specific weight range was established from the sources reviewed.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "zoetis-braque-saint-germain",
          role: "verified",
          locator: "Breed profile — life span 10–14 years",
        },
        {
          id: "royal-canin-braque-saint-germain",
          role: "cited",
          locator: "Breed specifics — life expectancy 12–13 years",
        },
      ],
      verifiedOn: "2026-10-24",
      note:
        "Published profiles give different estimates. The wider 10–14 year range is presented as approximate and must not be interpreted as a guarantee.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "verified",
          locator: "Coat — hair",
        },
      ],
      verifiedOn: "2026-10-24",
      note: null,
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "verified",
          locator: "Coat — hair",
        },
      ],
      verifiedOn: "2026-10-24",
      note: null,
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "verified",
          locator: "Coat — colour",
        },
      ],
      verifiedOn: "2026-10-24",
      note:
        "Colour descriptions follow the FCI standard. Other registries may express permitted markings differently.",
    },
    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "cited",
          locator: "Coat — short hair",
        },
      ],
      verifiedOn: null,
      note:
        "The standard describes coat length but does not quantify shedding. This is deliberately left qualitative.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling level was established.",
    },
    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "verified",
          locator: "General appearance, head, coat, colour, and gait",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Features are paraphrased from the official standard.",
    },
    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "verified",
          locator: "Behaviour and temperament",
        },
        {
          id: "vdh-braque-saint-germain",
          role: "verified",
          locator: "Personality",
        },
      ],
      verifiedOn: "2026-10-24",
      note:
        "These traits describe typical breed tendencies and do not guarantee an individual dog's behaviour.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "cited",
          locator: "Temperament and working purpose",
        },
        {
          id: "zoetis-braque-saint-germain",
          role: "cited",
          locator: "Sociability, exercise, and top traits",
        },
      ],
      verifiedOn: null,
      note:
        "Scores are editorial estimates on a 1–5 scale, not standardised behavioural measurements.",
    },
    "care.exercise.level": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "cited",
          locator: "Utilization — pointing breed used principally on feathered game",
        },
      ],
      verifiedOn: null,
      note:
        "Moderate to high is a practical estimate based on the breed's working role and athletic build.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted sources do not establish one universal daily exercise-minute target for all dogs of this breed.",
    },
    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "cited",
          locator: "Utilization and working purpose",
        },
      ],
      verifiedOn: null,
      note:
        "Activities are practical suggestions rather than a prescribed exercise programme.",
    },
    "care.grooming.level": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "cited",
          locator: "Coat — short hair",
        },
      ],
      verifiedOn: null,
      note:
        "Low to moderate is an editorial estimate; the breed standard does not assign a grooming score.",
    },
    "care.training.difficulty": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "cited",
          locator: "Behaviour and temperament",
        },
        {
          id: "vdh-braque-saint-germain",
          role: "cited",
          locator: "Personality and training",
        },
      ],
      verifiedOn: null,
      note:
        "Moderate is a practical owner-facing estimate rather than an official breed rating.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "cited",
          locator: "Working purpose and athletic build",
        },
      ],
      verifiedOn: null,
      note:
        "This is a cautious owner-fit estimate based on the breed's working background; individual dogs and living arrangements differ.",
    },
    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "cited",
          locator: "Working purpose and athletic build",
        },
      ],
      verifiedOn: null,
      note:
        "A secure yard may be useful but does not replace walks, training, and enrichment.",
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific alone-time tolerance value was established.",
    },
    "care.grooming.brushing": {
  reliability: "general_guidance",
  sources: [
    {
      id: "fci-braque-saint-germain-standard",
      role: "cited",
      locator: "Coat",
    },
  ],
  verifiedOn: null,
  note: "General grooming guidance informed by the breed's short coat; the FCI standard does not prescribe a brushing schedule.",
},

"care.grooming.bathing": {
  reliability: "general_guidance",
  sources: [
    {
      id: "fci-braque-saint-germain-standard",
      role: "cited",
      locator: "Coat",
    },
  ],
  verifiedOn: null,
  note: "General care guidance for a short-coated dog; the standard does not specify bathing frequency.",
},

"care.grooming.notes": {
  reliability: "general_guidance",
  sources: [
    {
      id: "fci-braque-saint-germain-standard",
      role: "cited",
      locator: "Coat",
    },
  ],
  verifiedOn: null,
  note: "Practical grooming advice based on the described coat; these recommendations are not explicit FCI standard requirements.",
},

"care.training.tips": {
  reliability: "general_guidance",
  sources: [
    {
      id: "fci-braque-saint-germain-standard",
      role: "cited",
      locator: "Temperament and use",
    },
  ],
  verifiedOn: null,
  note: "General training advice informed by the breed's described temperament and working purpose, rather than a specific training protocol in the standard.",
},

"care.training.socialization": {
  reliability: "general_guidance",
  sources: [
    {
      id: "fci-braque-saint-germain-standard",
      role: "cited",
      locator: "Temperament",
    },
  ],
  verifiedOn: null,
  note: "General socialization guidance; the cited standard describes temperament but does not prescribe a socialization schedule.",
},

"care.livingEnvironment.climates": {
  reliability: "general_guidance",
  sources: [
    {
      id: "fci-braque-saint-germain-standard",
      role: "cited",
      locator: "Coat and use",
    },
  ],
  verifiedOn: null,
  note: "Environmental guidance is an inference from the breed's coat and working background, not a verified breed-specific climate-tolerance claim.",
},
    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Nutritional assessment, body condition, and individualised feeding",
        },
      ],
      verifiedOn: null,
      note:
        "Nutrition guidance is general canine advice, not a breed-specific veterinary prescription.",
    },
    health: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Health advice is general guidance. The available breed profiles do not establish a dependable disease-prevalence profile or a dedicated screening schedule.",
    },
    "health.commonConditions": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No sufficiently reliable breed-specific list of common conditions was established. Broad health-topic categories are not treated as proof of prevalence.",
    },
    "health.recommendedScreenings": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A dependable breed-specific screening schedule was not established from the sources consulted.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "General preventive dental care",
        },
      ],
      verifiedOn: null,
      note: "General veterinary dental guidance.",
    },
    "suitability.firstTimeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "cited",
          locator: "Working purpose and temperament",
        },
      ],
      verifiedOn: null,
      note:
        "This cautious estimate reflects the exercise and training commitment that may be involved; it is not a universal rule.",
    },
    "suitability.familiesWithChildren": {
      reliability: "estimate",
      sources: [
        {
          id: "zoetis-braque-saint-germain",
          role: "cited",
          locator: "Sociability and family-companion description",
        },
        {
          id: "vdh-braque-saint-germain",
          role: "cited",
          locator: "Personality and family life",
        },
      ],
      verifiedOn: null,
      note:
        "This is an estimate, not a guarantee. Supervision, socialisation, children's ages, and the individual dog's behaviour remain important.",
    },
    "suitability.seniorOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "cited",
          locator: "Working purpose and activity needs",
        },
      ],
      verifiedOn: null,
      note:
        "This estimate concerns the activity commitment, not age itself; an active older owner may still be a suitable match.",
    },
    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "cited",
          locator: "Working purpose and athletic build",
        },
      ],
      verifiedOn: null,
      note:
        "Active owners may be a practical fit, but the individual dog's needs should be assessed.",
    },
    "suitability.apartmentLiving": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "cited",
          locator: "Working purpose and athletic build",
        },
      ],
      verifiedOn: null,
      note:
        "This is an owner-fit estimate rather than an official restriction; exercise, enrichment, neighbours, and individual behaviour matter.",
    },
    "suitability.idealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "cited",
          locator: "Working purpose and temperament",
        },
      ],
      verifiedOn: null,
      note:
        "These are practical owner-fit suggestions, not guaranteed outcomes.",
    },
    "suitability.notIdealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "cited",
          locator: "Working purpose and temperament",
        },
      ],
      verifiedOn: null,
      note:
        "These are practical ownership considerations, not formal behavioural or veterinary conclusions.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "verified",
          locator: "Historical summary",
        },
        {
          id: "vdh-braque-saint-germain",
          role: "verified",
          locator: "Origin and history",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Facts are paraphrased from breed-history material.",
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-braque-saint-germain-standard",
          role: "verified",
          locator: "Origin, utilization, temperament, height, coat, and colour",
        },
        {
          id: "vdh-braque-saint-germain",
          role: "verified",
          locator: "Breed profile",
        },
        {
          id: "zoetis-braque-saint-germain",
          role: "verified",
          locator: "Breed profile and lifespan estimate",
        },
      ],
      verifiedOn: "2026-10-24",
      note:
        "Answers are original paraphrases. Lifespan is described as an estimate and unsupported weight or screening claims are omitted.",
    },
  },
  updatedOn: "2026-10-24",
};
