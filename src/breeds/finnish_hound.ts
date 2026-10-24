import type { Breed } from "../schema/breed.types";

export const finnish_hound: Breed = {
  slug: "finnish-hound",
  name: "Finnish Hound",
  scientificName: null,
  alternateNames: [
    "Suomenajokoira",
    "Chien courant finlandais",
    "Finnischer Laufhund",
    "Finsk stövare",
    "Sabueso finlandés",
  ],
  group: "FCI Group 6 — Scent hounds and related breeds; Section 1.2 — Medium-sized Hounds",

  origin: {
    country: "Finland",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/FinnishHound.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:FinnishHound.jpg",
      title: "FinnishHound.jpg",
      description: "Finnish Hound photographed outdoors.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2021-08-01",
      uploadedOn: "2021-08-01",
      width: 1792,
      height: 1415,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-24",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Finnish_Hound.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Finnish_Hound.jpg",
      title: "Finnish Hound.jpg",
      description: "Finnish Hound, also known by its Finnish name Suomenajokoira.",
      creator: "EtäKärppä",
      uploader: "EtäKärppä",
      capturedOn: "2009-04-05",
      uploadedOn: "2009-07-20",
      width: 3648,
      height: 2736,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by EtäKärppä, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-24",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Finnishhoundsuomenajo6.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Finnishhoundsuomenajo6.jpg",
      title: "Finnishhoundsuomenajo6.jpg",
      description: "Male Finnish Hound photographed outdoors.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2025-05-04",
      uploadedOn: null,
      width: 1998,
      height: 1460,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-24",
    },
  ],

  overview: {
    summary:
      "The Finnish Hound is a medium-sized, tricoloured scent hound developed in Finland to track hare and fox. It combines a strong sense of smell and independent working style with a generally calm, friendly nature at home. Its hunting instinct and stamina make it best suited to people who can provide substantial outdoor activity and purposeful work.",

    description:
      "Longer in body than it is tall, the Finnish Hound is strongly built without appearing heavy. Its short, dense coat has a black mantle, rich tan areas and typically white markings. Long, hanging ears and a purposeful scent-tracking style reflect its traditional work as a hunting hound. The breed was developed for Finnish hunting conditions and is known for following scent independently while giving voice during pursuit. A Finnish Hound may settle calmly at home after adequate activity, but its strong interest in scent and game should be considered in everyday management. Secure exercise areas, recall training, scent-based activities and consistent routines can help meet its needs. Individual behaviour varies with genetics, early experience, training and the opportunities available to use its working abilities.",

    history:
      "The breed's organised development began after Finnish hunting enthusiasts established a kennel organisation in 1889. They sought a hound suited to local conditions because dogs imported from other countries did not fully meet hunters' needs. Selected dogs from the existing Finnish dog population formed the basis of the developing breed, and early breed characteristics were described in the 1890s. A black mantle became established alongside tan and white markings during the breed's development. The modern breed standard largely reflects a definition shaped during the twentieth century, with the first standard commonly dated to 1932.",

    originalPurpose:
      "To locate and pursue hare and fox by scent, working independently and using vocalisation to follow the hunt.",

    currentRoles: [
      "Hare and fox hunting",
      "Scent tracking and nose-work activities",
      "Active outdoor companionship for experienced owners",
      "Conformation showing",
    ],
  },

  physical: {
    sizeCategory: "Medium-sized, strongly built scent hound",

    height: {
      unit: "cm",
      male: { min: 55, max: 61 },
      female: { min: 52, max: 58 },
    },

    // A reliable breed-standard weight range was not established in the
    // reviewed primary sources, so no numeric weight is inferred.
    weight: {
      unit: null,
      male: null,
      female: null,
    },

    lifespanYears: {
      min: 11,
      max: 14,
    },

    coatType:
      "A dense, close-lying double coat with a short, soft undercoat and a straight, dense, rather harsh outer coat.",

    coatLength: "Short to medium, close-lying",

    coatColors: [
      "Tricolour: black mantle, rich tan markings and white markings",
    ],

    sheddingLevel:
      "Some shedding should be expected from a double coat; the amount can vary with season, coat condition and the individual dog.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Tricolour coat with a black mantle, tan areas and white markings",
      "Medium-sized, strong build without excessive heaviness",
      "Body clearly longer than the height at the withers",
      "Long, hanging ears",
      "A scent-focused working style and resonant voice during pursuit",
      "Short, dense coat with a relatively harsh outer layer",
    ],
  },

  temperament: {
    traits: [
      "Calm in familiar home settings",
      "Generally friendly",
      "Energetic when working or exercising",
      "Strongly scent-driven",
      "Independent when following a trail",
      "Persistent during pursuit",
      "Vocal while tracking game",
      "Often more naturally suited to hunting work than a sedentary companion role",
    ],

    // Editorial estimates on a 1–5 scale, not standardised test results.
    scores: {
      affection: 3,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 2,
      independence: 4,
      trainability: 3,
      barking: 4,
      energy: 5,
    },
  },

  care: {
    exercise: {
      level: "High",

      // Practical editorial estimate for a healthy adult, not an official
      // breed-standard requirement. Hunting dogs may need additional work.
      minutesPerDay: {
        min: 60,
        max: 120,
      },

      activities: [
        "Long walks in safe, suitable environments",
        "Supervised scent-tracking and nose-work games",
        "Structured outdoor exploration",
        "Reward-based obedience and recall practice",
        "Hunting-related work where lawful and appropriate",
        "Food puzzles and other problem-solving activities",
      ],
    },

    grooming: {
      level: "Low to moderate",

      brushing:
        "Brush regularly to remove loose hair and dirt, and increase brushing when shedding is heavier. A grooming mitt or soft brush may be sufficient for routine coat care. Check the coat and skin after outdoor activity, especially after moving through brush or long grass.",

      bathing:
        "Bathe when the coat is dirty or has an odour, using a dog-appropriate shampoo and rinsing thoroughly. Avoid unnecessarily frequent bathing, and dry the dog well after wet-weather activity.",

      notes: [
        "Check the hanging ears regularly for redness, odour or discharge.",
        "Inspect the coat and skin after walks in fields, woodland or brush.",
        "Keep nails trimmed to a comfortable length.",
        "Brush teeth regularly with dog-specific dental products.",
        "Introduce grooming and handling gradually and positively.",
      ],
    },

    training: {
      difficulty:
        "Moderate to challenging for owners who are unfamiliar with scent hounds. The breed can work independently and may prioritise an interesting trail over a handler's cue.",

      tips: [
        "Use reward-based training with clear, consistent cues.",
        "Build recall gradually in controlled settings before adding distractions.",
        "Use a long line and secure spaces when practising outdoors around wildlife.",
        "Reward check-ins and calm behaviour as well as active performance.",
        "Include scent games so the dog has appropriate outlets for its natural abilities.",
        "Keep sessions varied and avoid relying on punishment to interrupt scent-driven behaviour.",
        "Practise handling, lead skills and settling routines from an early age.",
      ],

      socialization:
        "Introduce the dog gradually and positively to people, other dogs, handling, household routines and varied environments. Practise calm behaviour around wildlife and unfamiliar animals, and supervise interactions rather than assuming that a hunting background predicts how an individual dog will behave.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Cool and temperate climates",
        "Cold weather with suitable shelter and monitoring",
        "Warm weather with shade, water and exercise scheduled for cooler periods",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate to the dog's life stage, body condition, activity and veterinary needs.",

    feedingFrequency: {
      puppy:
        "Feed a complete puppy diet in age-appropriate meals. Adjust portions as the puppy grows, following veterinary advice and the food's feeding guidance.",

      adult:
        "Many adult dogs do well with two measured meals per day. Adjust the amount for workload, body condition and individual health needs rather than relying on a fixed portion for every dog.",

      senior: null,
    },

    guidelines:
      "Measure daily portions and monitor body condition regularly. Keep fresh water available, particularly after exercise, and count training treats as part of the daily intake. Change foods gradually unless a veterinarian advises otherwise. Dogs doing sustained hunting or endurance work may have different energy needs from less active companions, so adjust feeding with veterinary guidance.",

    considerations: [
      "Adjust portions to workload, age and body condition.",
      "Avoid excess weight that can add strain to joints.",
      "Keep fresh water available during and after exercise.",
      "Include treats in the daily food allowance.",
      "Discuss diet changes with a veterinarian if persistent digestive, skin or weight problems develop.",
    ],

    note:
      "Calorie needs vary considerably between individual dogs, especially between active working dogs and less active companions. Use body condition and veterinary advice to guide portions.",
  },

  health: {
    overview:
      "The reviewed sources support attention to hip health in Finnish Hound breeding, but they do not establish a complete, evidence-backed list of common diseases with reliable breed-specific prevalence. Routine veterinary care and individual health history remain important; no dog is guaranteed to be free of inherited or acquired conditions.",

    commonConditions: [],

    preventiveCare: [
      "Schedule regular veterinary examinations and keep vaccinations and parasite prevention appropriate to local risks.",
      "Maintain a healthy body condition and suitable exercise routine.",
      "Inspect ears, skin, paws and coat after outdoor activity.",
      "Keep dental care and nail trimming part of the regular routine.",
      "Discuss family history and any breed-relevant screening with a veterinarian or responsible breeder.",
    ],

    recommendedScreenings: [
      "Discuss hip health and appropriate hip evaluation with a veterinarian or responsible breeder; Finnish breeding guidance refers to hip index when making breeding decisions.",
    ],

    dentalCare:
      "Brush the teeth regularly with dog-specific toothpaste and a suitable brush. Ask a veterinarian to assess tartar, gum inflammation, persistent bad breath or changes in eating behaviour.",

    earCare:
      "Check the hanging ears regularly for redness, odour, discharge or discomfort. Clean only as advised by a veterinarian and avoid inserting cotton swabs deep into the ear canal.",

    skinCare:
      "Inspect the skin and coat after outdoor activity for parasites, plant material, scratches or irritation. Seek veterinary advice for persistent itching, hair loss, sores or recurring skin problems.",
  },

  suitability: {
    // Suitability values are editorial guidance, not guarantees about an
    // individual dog's behaviour or a substitute for meeting the breed.
    firstTimeOwners: false,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "People who can provide substantial daily outdoor activity",
      "Owners interested in scent work, tracking or suitable hunting activities",
      "Households prepared to train recall and manage strong scent interest",
      "Owners who understand the needs of independent working hounds",
    ],

    notIdealFor: [
      "People looking for a low-energy dog with minimal exercise needs",
      "Homes where the dog would routinely be off lead in unsecured areas near wildlife",
      "Owners unable to provide consistent training and meaningful activity",
      "Households expecting a hunting hound to have no interest in following scents",
    ],
  },

  funFacts: [
    "The Finnish name for the breed is Suomenajokoira.",
    "The breed was developed to suit Finnish hunting conditions and is especially associated with hare and fox hunting.",
    "Its traditional work involves following scent independently and giving voice while pursuing game.",
    "The breed's characteristic tricolour appearance developed from earlier colour-selection efforts.",
  ],

  faq: [
    {
      question: "What was the Finnish Hound bred to do?",
      answer:
        "It was developed to hunt hare and fox by scent. It can follow a trail independently and use its voice during pursuit.",
    },
    {
      question: "Is the Finnish Hound a high-energy dog?",
      answer:
        "It is an energetic working hound with substantial exercise and activity needs. A companion dog still needs suitable physical exercise and mental work, even if it does not hunt.",
    },
    {
      question: "Can a Finnish Hound live in an apartment?",
      answer:
        "Apartment suitability cannot be determined from breed alone, but the breed's stamina, scent drive and vocal hunting style can make apartment living challenging. Daily activity, training, noise considerations and the individual dog's needs all matter.",
    },
    {
      question: "What colour is a Finnish Hound?",
      answer:
        "The recognised standard describes a tricolour coat, typically with a black mantle, rich tan markings and white areas.",
    },
    {
      question: "Does the Finnish Hound need a lot of grooming?",
      answer:
        "Its short, dense coat generally requires less grooming than a long coat. Regular brushing, ear checks, nail care and routine dental care are still important.",
    },
    {
      question: "What health screening should prospective owners ask about?",
      answer:
        "Ask about hip health, any available screening results, the parents' health history and the breeder's health practices. A veterinarian can advise which examinations are appropriate for an individual dog.",
    },
  ],

  references: [
    "fci-finnish-hound-official-standard",
    "finnish-kennel-club-finnish-hound",
    "united-kennel-club-finnish-hound-standard",
    "zoetis-finnish-hound-profile",
    "wikimedia-finnish-hound-canarian-2021",
    "wikimedia-finnish-hound-etakarppa-2009",
    "wikimedia-finnish-hound-canarian-2025",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific scientific name was established from the reviewed kennel-club and standard sources.",
    },

    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "verified",
          locator: "Breed nomenclature and official breed names",
        },
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "verified",
          locator: "Breed name and alternative names",
        },
      ],
      verifiedOn: "2026-10-24",
      note: null,
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "verified",
          locator: "FCI classification",
        },
      ],
      verifiedOn: "2026-10-24",
      note: null,
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "verified",
          locator: "Origin",
        },
      ],
      verifiedOn: "2026-10-24",
      note: null,
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A narrower geographic region of origin was not established from the reviewed primary sources.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "verified",
          locator: "Brief historical summary, utilisation and general appearance",
        },
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "verified",
          locator: "Breed history and breed overview",
        },
        {
          id: "united-kennel-club-finnish-hound-standard",
          role: "cited",
          locator: "Characteristics and general appearance",
        },
      ],
      verifiedOn: "2026-10-24",
      note: null,
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "verified",
          locator: "General appearance, coat and size",
        },
      ],
      verifiedOn: "2026-10-24",
      note: null,
    },

    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No sufficiently supported breed-standard weight range was found in the reviewed primary sources.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "zoetis-finnish-hound-profile",
          role: "verified",
          locator: "Life span",
        },
      ],
      verifiedOn: "2026-10-24",
      note: "Published breed-profile range; individual lifespan varies.",
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "cited",
          locator: "Coat description",
        },
      ],
      verifiedOn: null,
      note: "Editorial estimate based on coat type; the standard does not quantify shedding.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling level was established.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "cited",
          locator: "Utilisation and working characteristics",
        },
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "cited",
          locator: "Temperament and hunting instinct",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1–5 estimates, not validated behavioural measurements. Individual dogs vary.",
    },
    "temperament.traits": {
  reliability: "reliable_source",
  sources: [
    {
      id: "fci-finnish-hound-official-standard",
      role: "verified",
      locator: "Temperament and utilisation",
    },
    {
      id: "finnish-kennel-club-finnish-hound",
      role: "verified",
      locator: "Breed overview and hunting characteristics",
    },
  ],
  verifiedOn: "2026-10-24",
  note: "Traits are summarised from breed descriptions and working characteristics; individual dogs may differ.",
},

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "cited",
          locator: "Working style, hunting instinct and temperament",
        },
        {
          id: "fci-finnish-hound-official-standard",
          role: "cited",
          locator: "Utilisation",
        },
      ],
      verifiedOn: null,
      note: "Practical care guidance informed by the breed's working purpose; exercise duration and training advice are not official standard requirements.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "cited",
          locator: "Working purpose and hunting instinct",
        },
      ],
      verifiedOn: null,
      note: "Practical starting estimate for a healthy adult, not a validated breed-specific requirement.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A reliable source establishing a universal apartment-suitability classification was not found.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Reliable breed-specific evidence for alone-time tolerance was not found.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine nutrition guidance; individual diet and portions should be adjusted with veterinary advice.",
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A breed-specific senior feeding frequency was not established; needs vary by health, body condition and diet.",
    },

    health: {
      reliability: "general_guidance",
      sources: [
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "cited",
          locator: "Hip index breeding objective",
        },
        {
          id: "zoetis-finnish-hound-profile",
          role: "cited",
          locator: "Breed health overview",
        },
      ],
      verifiedOn: null,
      note: "The reviewed sources do not establish a complete list of common diseases with reliable breed-specific prevalence.",
    },

    "health.commonConditions": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No sufficiently supported breed-specific list of common conditions and prevalence was established from the reviewed sources.",
    },

    "health.recommendedScreenings": {
      reliability: "general_guidance",
      sources: [
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "cited",
          locator: "Hip index breeding objective",
        },
      ],
      verifiedOn: null,
      note: "The source discusses hip index in breeding decisions; the recommendation to discuss individual screening with a veterinarian is general guidance.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine preventive-care advice applicable to dogs generally.",
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
      note: "General ear-care advice; the breed has hanging ears, but no breed-specific ear-disease rate is claimed.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General skin and coat care advice.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "cited",
          locator: "Hunting instinct and suitability as a hunting dog",
        },
        {
          id: "fci-finnish-hound-official-standard",
          role: "cited",
          locator: "Traditional utilisation",
        },
      ],
      verifiedOn: null,
      note: "Editorial suitability guidance based on the breed's working purpose and exercise needs; individual dogs and households differ.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal breed-level conclusion is recorded. Suitability depends on the individual dog, child behaviour, supervision and socialisation.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Owner suitability depends on the person's capacity to meet the individual dog's exercise and training needs.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "verified",
          locator: "Breed name and history",
        },
        {
          id: "fci-finnish-hound-official-standard",
          role: "verified",
          locator: "Utilisation and historical summary",
        },
      ],
      verifiedOn: "2026-10-24",
      note: null,
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "verified",
          locator: "Utilisation, coat and size",
        },
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "verified",
          locator: "Breed overview and history",
        },
        {
          id: "zoetis-finnish-hound-profile",
          role: "cited",
          locator: "Life span and health overview",
        },
      ],
      verifiedOn: "2026-10-24",
      note: null,
    },
  },

  updatedOn: "2026-10-24",
};
