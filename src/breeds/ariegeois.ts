import type { Breed } from "../schema/breed.types";

export const ariegeois: Breed = {
  slug: "ariegeois",
  name: "Ariegeois",

  scientificName: null,

  alternateNames: [
    "Ariégeois",
    "Ariege-Hound",
    "Sabueso del Ariege",
  ],

  group:
    "FCI Group 6 — Scenthounds and related breeds; Section 1.2 — Medium-sized Hounds",

  origin: {
    country: "France",
    region: "Ariège, southwestern France",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ariegeois.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Ariegeois.jpg",
      title: "Ariegeois.jpg",
      description: "Ariegeois dog",
      creator: "Bautt",
      uploader: "Bautt~commonswiki",
      capturedOn: "2013-12-03",
      uploadedOn: "2013-12-16",
      width: 1373,
      height: 845,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Bautt, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). The file history notes colour-balance and shadow modifications by Justlettersandnumbers. Indicate any further changes; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-25",
    },
  ],

  overview: {
    summary:
      "The Ariegeois is a medium-sized French scent hound developed for hunting, especially hare. Lightly built and agile, it uses its keen nose and distinctive voice to follow a trail, either independently or with other hounds. Its working heritage makes regular outdoor activity, scent-based enrichment, and consistent training important parts of companion care.",

    description:
      "The Ariegeois has an elegant, relatively light frame suited to moving efficiently over challenging terrain. Its short, fine, dense coat is predominantly white with clearly defined black markings, which may appear mottled; pale tan markings can occur on the cheeks and above the eyes. The breed has long, supple ears, an alert expression, and a tail carried in a lively curve. It is a purposeful working hound rather than a breed developed primarily for sedentary companionship. Individual behaviour and household suitability depend on training, socialisation, health, and the opportunities provided for activity.",

    history:
      "The breed originated in the Ariège area of France. Its documented development involved crossing a local Briquet-type hound with a larger pack-hunting scent hound, possibly from the Bleu de Gascogne or Gascon Saintongeois type. The result retained characteristics of traditional French pack hounds while being lighter and more agile. The FCI records definitive recognition in 1954 and publishes a breed standard for the Ariegeois.",

    originalPurpose:
      "Scent hunting, including driving game toward waiting hunters and pursuing game over difficult terrain. Hare is the principal traditional quarry; the breed is also used to track roe deer and wild boar.",

    currentRoles: [
      "Scent-hound hunting where legal and appropriate",
      "Tracking and scent-led working activities",
      "Supervised scent games and tracking enrichment",
      "Active companionship for households able to meet working-hound needs",
    ],
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 52,
        max: 58,
      },
      female: {
        min: 50,
        max: 56,
      },
    },

    weight: {
      unit: null,
      male: null,
      female: null,
    },

    lifespanYears: {
      min: 10,
      max: 12,
    },

    coatType: "Short, fine, dense coat.",

    coatLength:
      "Short and close-lying; the breed standard describes the hair as fine and dense.",

    coatColors: [
      "White with clearly defined jet-black markings",
      "White with black markings that may be mottled",
      "White and black with pale tan markings on the cheeks and above the eyes",
    ],

    sheddingLevel:
      "Not reliably quantified in the reviewed sources. Regular brushing is a sensible way to remove loose hair and check the skin.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Light, medium-sized and elegant build",
      "Long, supple ears set below eye level",
      "Brown, alert-looking eyes",
      "Short, fine and dense coat",
      "White coat with clearly defined black markings, sometimes mottled",
      "Pale tan markings may occur on the cheeks and above the eyes",
      "Tail carried in a lively, sabre-like curve",
      "Agile movement suited to working across difficult terrain",
    ],
  },

  temperament: {
    traits: [
      "Sociable",
      "Cheerful",
      "Hard-working",
      "Energetic",
      "Alert",
      "Enterprising",
      "Scent-focused",
      "Vocal while working",
      "Generally responsive to training",
    ],

    // Editorial estimates, not measured scientific scores.
    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 2,
      independence: 4,
      trainability: 4,
      barking: 5,
      energy: 5,
    },
  },

  care: {
    exercise: {
      level: "High",

      minutesPerDay: null,

      activities: [
        "Long, secure walks with opportunities to sniff and explore",
        "Supervised scent trails and tracking games",
        "Reward-based search and find-it activities",
        "Structured outdoor exploration in safe, enclosed areas",
        "Suitable hunting or working activities where legal, safe, and appropriate",
        "Short training sessions that combine movement with mental engagement",
      ],
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush regularly with a suitable dog brush to remove loose hair and debris and to check the coat and skin. Increase checks after walks through grass, woodland, or brush.",

      bathing:
        "Bathe when necessary with a dog-appropriate shampoo. Avoid unnecessarily frequent bathing, and dry the dog properly after wet-weather outings.",

      notes: [
        "The short coat is relatively straightforward to maintain.",
        "Check the ears regularly for redness, odour, discharge, or discomfort.",
        "Inspect the coat and skin after outdoor activity for ticks, seeds, scratches, and irritation.",
        "Trim nails as needed and check the paws and pads regularly.",
        "The reviewed sources do not provide a measured shedding rate.",
      ],
    },

    training: {
      difficulty:
        "Moderate. A scent hound may become highly focused on a trail, so consistent reward-based training and safe management are important.",

      tips: [
        "Use food rewards, play, and scent-based activities to keep training engaging.",
        "Practise recall in a secure area before considering off-lead activity.",
        "Use a lead or secure enclosure wherever scent interest could lead the dog away from safety.",
        "Teach calm leash walking and reward checking in with the handler.",
        "Keep sessions clear and consistent rather than relying on punishment.",
        "Provide suitable scent work to give the dog's natural tracking behaviour an appropriate outlet.",
      ],

      socialization:
        "Introduce the dog gradually and positively to different people, dogs, environments, handling, and everyday sounds. Monitor the individual dog's responses and seek qualified help if persistent fear or reactivity develops.",
    },

    livingEnvironment: {
      apartmentSuitable: null,

      houseWithYardSuitable: true,

      climates: [
        "Provide shade, fresh water, and rest during hot weather.",
        "Avoid strenuous activity during extreme heat and move exercise to cooler times.",
        "Check the paws and coat after outdoor activity in rough or overgrown terrain.",
        "Provide a secure outdoor area because scent-driven exploration can lead a dog away from its handler.",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate to the dog's life stage, body condition, activity level, and individual health needs.",

    feedingFrequency: {
      puppy:
        "Feed an age-appropriate puppy diet in multiple meals, following the food manufacturer's guidance and advice from a veterinarian.",

      adult:
        "Use a consistent feeding routine and adjust portions to maintain a healthy body condition. Consider actual daily activity rather than assuming every individual has the same energy needs.",

      senior:
        "Choose food and portions according to age, body condition, activity, dental health, and any veterinary-diagnosed conditions.",
    },

    guidelines:
      "Choose a nutritionally complete diet and adjust portions according to age, activity, body condition, and weight trends. Keep fresh water available, introduce dietary changes gradually, and ask a veterinarian for advice if weight or digestive problems persist.",

    considerations: [
      "Working and highly active dogs may need different energy intake from less active companions.",
      "Monitor body condition and adjust portions if weight changes.",
      "Include treats in the daily food allowance.",
      "Keep clean drinking water available, particularly after exercise.",
      "Discuss persistent digestive, skin, or weight concerns with a veterinarian.",
    ],

    note:
      "The reviewed breed sources do not establish a universal feeding quantity for the Ariegeois. Individual requirements depend on body size, age, activity, health, and the energy content of the food.",
  },

  health: {
    overview:
      "The reviewed breed-standard and breed-profile sources do not establish a reliable list of common Ariegeois diseases or breed-specific disease prevalence. This should not be interpreted as proof that the breed has no inherited health risks. Consider the individual dog's medical history, responsible breeding practices, and veterinary advice.",

    commonConditions: [],

    preventiveCare: [
      "Arrange routine veterinary examinations and keep vaccinations and parasite prevention appropriate to local risks.",
      "Maintain a healthy body condition and suitable regular exercise.",
      "Inspect ears, paws, skin, and coat after outdoor activity.",
      "Keep dental hygiene and nail care part of the routine.",
      "Discuss the health history of the dog and its relatives with a veterinarian or responsible breeder.",
      "Seek veterinary advice promptly for persistent changes in appetite, mobility, behaviour, or general condition.",
    ],

    recommendedScreenings: [],

    dentalCare:
      "Brush the teeth regularly with dog-specific toothpaste and a suitable brush. Ask a veterinarian to assess persistent bad breath, gum inflammation, tartar, or changes in eating behaviour.",

    earCare:
      "Check the ears regularly for redness, unusual odour, discharge, or discomfort. Clean only as advised by a veterinarian and do not insert cotton swabs deep into the ear canal.",

    skinCare:
      "Inspect the skin and coat after walks for parasites, plant material, scratches, and irritation. Seek veterinary advice for persistent itching, hair loss, sores, or recurring skin problems.",
  },

  suitability: {
    firstTimeOwners: null,

    familiesWithChildren: null,

    seniorOwners: null,

    activeOwners: true,

    apartmentLiving: null,

    idealFor: [
      "Active households able to provide substantial outdoor activity",
      "People interested in scent work, tracking, or suitable working-hound activities",
      "Owners prepared to train recall and manage a strong interest in scents",
      "Households that can provide secure exercise and consistent training",
      "People comfortable living with a potentially vocal scent hound",
    ],

    notIdealFor: [
      "Households seeking a low-energy dog that needs little activity",
      "Owners who cannot provide secure exercise and consistent leash management",
      "People expecting reliable off-lead recall without training",
      "Homes unable to accommodate a dog's working instincts and scent-driven behaviour",
    ],
  },

  funFacts: [
    "The Ariegeois originated in the Ariège area of France.",
    "The FCI places the breed in Group 6, for scent hounds and related breeds.",
    "Hare is the breed's principal traditional quarry, though it has also been used to track roe deer and wild boar.",
    "Its history includes a cross between a local Briquet-type hound and a larger pack-hunting scent hound.",
    "Its white coat with clearly defined black markings is a recognised feature of the breed standard.",
  ],

  faq: [
    {
      question: "What was the Ariegeois bred to do?",
      answer:
        "It was developed as a scent hound for hunting, especially hare. It has also been used to track roe deer and wild boar.",
    },
    {
      question: "How tall is an adult Ariegeois?",
      answer:
        "The breed standard gives a height of 52–58 cm for males and 50–56 cm for females, measured at the withers.",
    },
    {
      question: "What does an Ariegeois look like?",
      answer:
        "It is a light, medium-sized hound with long, supple ears and a short, fine, dense coat. The coat is white with clearly defined black markings, sometimes mottled, and may have pale tan markings on the cheeks and above the eyes.",
    },
    {
      question: "How much grooming does an Ariegeois need?",
      answer:
        "Its short coat is relatively easy to maintain. Regular brushing and routine checks of the ears, skin, paws, and coat are sensible, especially after outdoor activity.",
    },
    {
      question: "Is the Ariegeois suitable for apartment living?",
      answer:
        "The reviewed sources do not establish a definitive apartment-suitability rating. Its working background and high activity needs mean that exercise, noise, training, secure outdoor access, and the individual dog's behaviour should all be considered before deciding.",
    },
    {
      question: "How long does an Ariegeois live?",
      answer:
        "The reviewed breed profile gives an average life expectancy of 10–12 years. An individual dog's lifespan can vary with genetics, healthcare, lifestyle, and other factors.",
    },
    {
      question: "Are any common health conditions confirmed for the breed?",
      answer:
        "The sources reviewed for this record do not establish a reliable breed-specific list of common conditions. That does not mean the breed is free of health risks; discuss individual and family health history with a veterinarian or responsible breeder.",
    },
  ],

  references: [
    "fci-ariegeois-standard",
    "fci-ariegeois-nomenclature",
    "royal-canin-ariegeois",
    "wikimedia-ariegeois-bautt",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-ariegeois-nomenclature",
          role: "verified",
          locator: "Breed nomenclature entry: Ariegeois and Spanish name",
        },
        {
          id: "fci-ariegeois-standard",
          role: "verified",
          locator: "Standard title and English name",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Names are limited to forms shown in the consulted FCI records.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted breed-standard and kennel-club sources do not provide a distinct scientific name for this breed.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-ariegeois-standard",
          role: "verified",
          locator: "FCI classification",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-ariegeois-standard",
          role: "verified",
          locator: "Origin and brief historical summary",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },

    "origin.region": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-ariegeois-standard",
          role: "verified",
          locator: "Brief historical summary: origin in the Ariège",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "The region is recorded at the level supported by the standard; no more specific town or kennel is inferred.",
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-ariegeois-standard",
          role: "verified",
          locator: "Utilization, historical summary, general appearance, behaviour and temperament",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },

    "overview.summary": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-canin-ariegeois",
          role: "verified",
          locator: "About the Ariegeois; Breed Specifics",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "The user-facing summary is an original synthesis of the breed's documented working role and general characteristics.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-ariegeois-standard",
          role: "verified",
          locator: "General appearance, coat, colour and size",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },

    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The reviewed FCI standard does not specify male or female weight ranges.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-canin-ariegeois",
          role: "verified",
          locator: "Breed Specifics: average life expectancy",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "The stored range follows the profile's stated 10–12 years; it is an average estimate, not a guarantee for an individual dog.",
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-ariegeois-standard",
          role: "cited",
          locator: "Coat: hair described as short, fine and dense",
        },
      ],
      verifiedOn: null,
      note:
        "The sources do not quantify shedding. The value explicitly avoids assigning a measured shedding level.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific drooling level was found in the consulted sources.",
    },

    temperament: {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "Temperament scores are editorial estimates and are not standardised scientific measurements.",
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-ariegeois-standard",
          role: "verified",
          locator: "Behaviour and temperament",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Traits are paraphrased from the standard's descriptions of working behaviour and character.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "All 1–5 ratings are editorial estimates intended for comparison, not verified measurements of individual dogs.",
    },

    care: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Care recommendations are practical guidance and must be adjusted to the individual dog.",
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-ariegeois-standard",
          role: "verified",
          locator: "Utilization and behaviour: scent hunting and work over difficult terrain",
        },
        {
          id: "royal-canin-ariegeois",
          role: "verified",
          locator: "About the Ariegeois",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "High activity need is a practical interpretation of the breed's working role, not a measured exercise prescription.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No dependable breed-specific daily minute requirement was found. Needs vary with age, health, fitness, and working load.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The reviewed sources do not establish a definitive apartment-suitability rating.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "A secure yard may be useful for an active scent hound, but a yard alone does not meet exercise or enrichment needs.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific tolerance for being left alone was established.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Nutrition advice is general canine guidance, not a breed-specific veterinary prescription.",
    },

    health: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Preventive advice is general canine guidance. It does not establish breed-specific disease prevalence.",
    },

    "health.commonConditions": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No sufficiently reliable source in the reviewed set established a breed-specific list of common conditions.",
    },

    "health.recommendedScreenings": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific screening protocol was established from the consulted sources.",
    },

    suitability: {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "Suitability guidance is an editorial assessment of the breed's documented working traits, not a guarantee of individual behaviour.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The reviewed sources do not establish a definitive first-time-owner suitability rating.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No sufficiently reliable breed-specific rating for family-with-children suitability was established.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The reviewed sources do not establish a definitive senior-owner suitability rating.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Apartment suitability depends on individual behaviour and available exercise; the consulted sources do not provide a definitive rating.",
    },

    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-ariegeois-standard",
          role: "cited",
          locator: "Utilization and behaviour: working scent hound",
        },
      ],
      verifiedOn: null,
      note:
        "This is an editorial suitability recommendation based on the breed's working role.",
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-ariegeois-standard",
          role: "verified",
          locator: "Origin, utilization, history, coat and classification",
        },
        {
          id: "fci-ariegeois-nomenclature",
          role: "verified",
          locator: "Breed recognition and nomenclature",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-ariegeois-standard",
          role: "verified",
          locator: "Utilization, coat, size and behaviour",
        },
        {
          id: "royal-canin-ariegeois",
          role: "verified",
          locator: "Breed Specifics: average life expectancy",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Answers are original summaries of the cited breed facts; general advice and individual variation are stated cautiously.",
    },
  },

  updatedOn: "2026-10-25",
};
