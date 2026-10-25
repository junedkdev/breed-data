import type { Breed } from "../schema/breed.types";

export const lancashire_heeler: Breed = {
  slug: "lancashire-heeler",
  name: "Lancashire Heeler",

  scientificName: null,

  alternateNames: ["Ormskirk Heeler"],

  group:
    "FCI Group 1 — Sheepdogs and Cattledogs (except Swiss Cattledogs); Section 1 — Sheepdogs",

  origin: {
    country: "England",
    region: "Lancashire, particularly the Ormskirk area",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lancashire_Heeler.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Lancashire_Heeler.jpg",
      title: "Lancashire Heeler.jpg",
      description: "Lancashire Heeler photographed outdoors.",
      creator: "Lil Shepherd",
      uploader: "Ltshears (Flickr upload bot)",
      capturedOn: "2011-11-12",
      uploadedOn: "2012-08-06",
      width: 1773,
      height: 2559,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Lil Shepherd (originally published on Flickr), via Wikimedia Commons, CC BY 2.0 (https://creativecommons.org/licenses/by/2.0/). No changes made.",
      restrictions: null,
      metadataCheckedOn: "2026-10-25",
    },
  ],

  overview: {
    summary:
      "The Lancashire Heeler is a small, sturdy British herding dog developed to work with cattle. Alert, energetic, and intelligent, it combines a compact build with a surprisingly active working nature. It can also show terrier-like instincts when pursuing small animals, so daily activity, consistent training, and safe outdoor management are important.",

    description:
      "The Lancashire Heeler has a powerful, compact body that is slightly longer than its height at the shoulder. Its short, weather-resistant double coat has a fine undercoat beneath a hard, flat outer coat. The recognised colours are black and tan or liver and tan, usually with rich tan markings on the face and legs. Alert ears, almond-shaped eyes, and a naturally carried tail give it an attentive expression. Although small, this is a working dog with herding instincts and substantial energy for its size. Its needs and behaviour will vary with age, health, socialisation, training, and daily routine.",

    history:
      "The Lancashire Heeler is associated with the Lancashire area of north-west England, especially around Ormskirk. Its exact origins are not fully established. One commonly proposed explanation is that Welsh cattle-driving dogs of the Corgi type encountered Manchester Terriers as cattle were brought into the area. The breed has been maintained there over many generations and is recognised for its cattle-working background. The FCI published its official valid breed standard in 2016.",

    originalPurpose:
      "Herding and moving cattle. The breed also has terrier instincts associated with rabbiting and ratting.",

    currentRoles: [
      "Herding and cattle-working activities",
      "Active companion dog",
      "Reward-based training and dog sports suited to the individual",
      "Supervised scent games and other enrichment activities",
    ],
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "cm",
      male: {
        min: 30,
        max: 30,
      },
      female: {
        min: 25,
        max: 25,
      },
    },

    weight: {
      unit: null,
      male: null,
      female: null,
    },

    lifespanYears: null,

    coatType:
      "Double coat with a fine undercoat and a short, thick, hard, flat, weather-resistant outer coat.",

    coatLength:
      "Short and flat over the body, with the outer coat slightly longer around the neck.",

    coatColors: [
      "Black and tan",
      "Liver and tan",
    ],

    sheddingLevel:
      "Not quantified in the reviewed sources. The double coat can release loose hair, so regular brushing is sensible.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Small, powerful, sturdy build",
      "Body approximately 2.5 cm longer than height at the withers",
      "Alert ears that show lift or are erect",
      "Medium-sized, almond-shaped eyes",
      "Short, hard, flat, weather-resistant double coat",
      "Recognised black-and-tan or liver-and-tan colouring",
      "Rich tan markings commonly appear on the cheeks and often above the eyes",
      "A distinct black or liver mark above the front feet is desirable in the breed standard",
      "Naturally carried tail that curves slightly over the back when alert, without forming a complete ring",
      "Smart, brisk movement",
    ],
  },

  temperament: {
    traits: [
      "Courageous",
      "Happy",
      "Affectionate with its owner",
      "Alert",
      "Energetic",
      "Intelligent",
      "Trainable",
      "People-oriented",
      "May show terrier-like chasing instincts",
    ],

    // Editorial estimates, not standardised scientific measurements.
    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 3,
      independence: 3,
      trainability: 4,
      barking: 4,
      energy: 4,
    },
  },

  care: {
    exercise: {
      level: "Moderate to high",

      minutesPerDay: null,

      activities: [
        "Daily walks suited to the dog's age and fitness",
        "Short reward-based training sessions",
        "Supervised play and interactive games",
        "Food-search and scent-based enrichment",
        "Herding activities or suitable dog sports where available",
        "Secure outdoor exploration with opportunities to investigate safely",
      ],
    },

    grooming: {
      level: "Low to moderate",

      brushing:
        "Brush regularly with a suitable dog brush to remove loose hair and check the coat and skin. Grooming needs may increase when the dog is shedding more heavily.",

      bathing:
        "Bathe when necessary using a dog-appropriate shampoo. Avoid excessive bathing and dry the coat properly after wet-weather outings.",

      notes: [
        "The short outer coat is relatively straightforward to maintain.",
        "Check the skin and coat regularly for irritation, parasites, or debris.",
        "Inspect the ears for redness, odour, discharge, or discomfort.",
        "Trim the nails as needed and check the paws and pads.",
        "The reviewed sources do not quantify the breed's shedding rate.",
      ],
    },

    training: {
      difficulty:
        "Moderate. The breed is described as intelligent and trainable, but its working instincts and energy make consistent training and appropriate outlets important.",

      tips: [
        "Use reward-based training with clear, consistent cues.",
        "Keep training sessions engaging and appropriate to the dog's attention span.",
        "Teach reliable recall and practise it in a secure area before considering off-lead activity.",
        "Use a lead or secure enclosure where chasing instincts could create a safety risk.",
        "Reward calm behaviour around moving animals and other distractions.",
        "Provide suitable activities that engage the dog's mind as well as its body.",
      ],

      socialization:
        "Introduce the dog gradually and positively to people, dogs, handling, everyday sounds, and different environments. Supervise interactions with children and other animals, and tailor the approach to the individual dog's behaviour.",
    },

    livingEnvironment: {
      apartmentSuitable: null,

      houseWithYardSuitable: true,

      climates: [
        "The weather-resistant coat offers some protection during ordinary outdoor activity.",
        "Provide shade, fresh water, and rest in hot weather.",
        "Avoid strenuous exercise during extreme heat.",
        "Check the coat and paws after outdoor activity and dry the dog when needed.",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate to the dog's life stage, body condition, activity level, and individual health needs.",

    feedingFrequency: {
      puppy:
        "Feed an age-appropriate puppy diet in multiple meals, following the food manufacturer's guidance and veterinary advice.",

      adult:
        "Use a consistent feeding routine and adjust portions to maintain a healthy body condition. Account for actual activity and weight trends.",

      senior:
        "Choose food and portions according to age, body condition, activity, dental health, and any veterinary-diagnosed conditions.",
    },

    guidelines:
      "Choose a nutritionally complete diet and adjust portions according to age, activity, body condition, and weight trends. Keep fresh water available, introduce diet changes gradually, and seek veterinary advice if persistent digestive or weight problems develop.",

    considerations: [
      "Adjust portions to the dog's actual activity level and body condition.",
      "Monitor weight because a small dog may need relatively modest portions.",
      "Include treats in the daily food allowance.",
      "Keep fresh drinking water available, particularly after exercise.",
      "Discuss persistent digestive, skin, dental, or weight concerns with a veterinarian.",
    ],

    note:
      "The reviewed sources do not establish a universal feeding quantity for the Lancashire Heeler. Individual requirements depend on age, activity, health, body condition, and the energy content of the food.",
  },

  health: {
    overview:
      "Breed-club guidance identifies several eye conditions that may affect Lancashire Heelers, including primary lens luxation, Collie eye anomaly, persistent pupillary membrane, and hereditary cataracts. Patellar luxation is also mentioned as a possible concern. These reports do not mean every dog will develop a condition or establish its prevalence. Responsible breeding, appropriate screening, and individual veterinary care are important.",

    commonConditions: [
      "Primary lens luxation (PLL) — a potentially serious inherited eye condition identified in breed-club health guidance.",
      "Collie eye anomaly (CEA/CH) — an inherited eye condition for which DNA testing is recommended in breed-club guidance.",
      "Persistent pupillary membrane (PPM) — an eye condition reported in breed-club health information.",
      "Hereditary cataracts — an inherited eye condition reported in breed-club health information.",
      "Patellar luxation — displacement of the kneecap, reported as a possible breed health concern.",
    ],

    preventiveCare: [
      "Arrange regular veterinary examinations and keep vaccinations and parasite prevention appropriate to local risks.",
      "Ask breeders for relevant eye-screening and DNA-test results for the parents.",
      "Maintain a healthy body condition and regular exercise appropriate to the dog's age and fitness.",
      "Inspect the eyes, ears, paws, skin, and coat regularly.",
      "Maintain dental hygiene and trim nails as needed.",
      "Discuss any change in vision, eye appearance, gait, or comfort promptly with a veterinarian.",
    ],

    recommendedScreenings: [
      "BVA/RKC/ISDS Eye Scheme screening.",
      "DNA testing for primary lens luxation (PLL).",
      "DNA testing for Collie eye anomaly (CEA/CH).",
    ],

    dentalCare:
      "Brush the teeth regularly with dog-specific toothpaste and a suitable brush. Ask a veterinarian to assess persistent bad breath, tartar, gum inflammation, or changes in eating behaviour.",

    earCare:
      "Check the ears regularly for redness, unusual odour, discharge, or discomfort. Clean only as advised by a veterinarian and do not insert cotton swabs deep into the ear canal.",

    skinCare:
      "Inspect the coat and skin regularly for parasites, irritation, scratches, or unusual lumps. Seek veterinary advice for persistent itching, hair loss, sores, or recurring skin problems.",
  },

  suitability: {
    firstTimeOwners: null,

    familiesWithChildren: null,

    seniorOwners: null,

    activeOwners: true,

    apartmentLiving: null,

    idealFor: [
      "People looking for a small but active working-type dog",
      "Owners who can provide daily activity, training, and mental enrichment",
      "Households interested in herding activities or suitable dog sports",
      "Owners prepared to manage chasing and other working instincts",
      "People who can provide consistent, reward-based training",
    ],

    notIdealFor: [
      "Households seeking a dog that requires very little activity or engagement",
      "Owners unable to provide consistent training and supervision",
      "Homes where chasing instincts cannot be managed safely",
      "People expecting a breed's typical traits to guarantee an individual dog's behaviour",
    ],
  },

  funFacts: [
    "The Lancashire Heeler originated in England and is associated with the Lancashire and Ormskirk area.",
    "The breed was developed for cattle work.",
    "Its traditional working character also includes terrier-like instincts when rabbiting and ratting.",
    "The recognised coat colours are black and tan or liver and tan.",
    "The ideal shoulder height in the FCI standard is 30 cm for males and 25 cm for females.",
    "The breed standard describes the body as approximately 2.5 cm longer than the height at the withers.",
  ],

  faq: [
    {
      question: "What was the Lancashire Heeler bred to do?",
      answer:
        "It was developed to work cattle. The breed standard also notes terrier-like instincts when rabbiting and ratting.",
    },
    {
      question: "How tall is a Lancashire Heeler?",
      answer:
        "The FCI standard gives an ideal shoulder height of 30 cm for males and 25 cm for females. These are ideal measurements, not guaranteed measurements for every dog.",
    },
    {
      question: "What colours does the Lancashire Heeler come in?",
      answer:
        "The recognised colours are black and tan or liver and tan. Rich tan markings commonly appear on the cheeks and often above the eyes.",
    },
    {
      question: "Does the Lancashire Heeler need a lot of grooming?",
      answer:
        "Its short, weather-resistant double coat is relatively easy to maintain. Regular brushing and routine checks of the skin, ears, paws, and coat are sensible.",
    },
    {
      question: "Is the Lancashire Heeler good for first-time owners?",
      answer:
        "A definitive breed-specific rating is not established in the reviewed sources. Prospective owners should consider the dog's energy, training needs, working instincts, and the time they can provide for activity and supervision.",
    },
    {
      question: "What health tests should I ask a breeder about?",
      answer:
        "Breed-club guidance recommends eye screening, DNA testing for primary lens luxation (PLL), and DNA testing for Collie eye anomaly (CEA/CH). Ask to see the actual results and discuss their meaning with a veterinarian or knowledgeable breeder.",
    },
    {
      question: "What health conditions may affect Lancashire Heelers?",
      answer:
        "Breed-club health information reports several eye conditions, including PLL, CEA, PPM, and hereditary cataracts, as well as patellar luxation. These are possible concerns, not a prediction that an individual dog will develop them.",
    },
    {
      question: "How long does a Lancashire Heeler live?",
      answer:
        "The reviewed sources did not establish a sufficiently reliable average lifespan for this record, so a numerical lifespan is not provided.",
    },
  ],

  references: [
    "fci-lancashire-heeler-standard",
    "royal-kennel-club-lancashire-heeler-standard",
    "american-kennel-club-lancashire-heeler",
    "american-kennel-club-lancashire-heeler-gazette",
    "lancashire-heeler-club-health",
    "wikimedia-lancashire-heeler-lil-shepherd",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-lancashire-heeler-gazette",
          role: "verified",
          locator: "Breed information: alternate name",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "The alternate name is included only because it is explicitly recorded in the cited breed information.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The reviewed breed-standard and kennel-club sources do not provide a distinct scientific name for this breed.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lancashire-heeler-standard",
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
          id: "fci-lancashire-heeler-standard",
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
          id: "fci-lancashire-heeler-standard",
          role: "verified",
          locator: "Brief historical summary: Lancashire and the Ormskirk area",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "The region is recorded at the level supported by the standard; a more specific birthplace or founding kennel is not inferred.",
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lancashire-heeler-standard",
          role: "verified",
          locator: "Utilization, history, general appearance, behaviour and temperament",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "The user-facing text is an original paraphrase of the documented breed history and working characteristics.",
    },

    "overview.summary": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-lancashire-heeler",
          role: "verified",
          locator: "About the Breed",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Original summary based on documented working traits and general activity level.",
    },

    "overview.history": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lancashire-heeler-standard",
          role: "verified",
          locator: "Brief historical summary",
        },
        {
          id: "american-kennel-club-lancashire-heeler-gazette",
          role: "cited",
          locator: "Breed history",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "The historical cross-breeding account is presented as a proposal, not a conclusively established pedigree.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lancashire-heeler-standard",
          role: "verified",
          locator: "General appearance, proportions, coat, colour and size",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lancashire-heeler-standard",
          role: "verified",
          locator: "Size and weight: ideal height at the withers",
        },
        {
          id: "royal-kennel-club-lancashire-heeler-standard",
          role: "verified",
          locator: "Size: ideal height at shoulder",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "The standards provide ideal heights, not a range. Equal minimum and maximum values preserve the published ideal point without inventing a range. The source's first measurement unit, cm, is retained.",
    },

    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The reviewed FCI and Royal Kennel Club standards do not establish a male or female weight range.",
    },

    "physical.lifespanYears": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The reviewed reliable sources did not establish a sufficiently supported average lifespan for this record.",
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-lancashire-heeler-standard",
          role: "cited",
          locator: "Coat: fine undercoat and weather-resistant outer coat",
        },
      ],
      verifiedOn: null,
      note:
        "The standard describes the coat but does not quantify shedding. The entry deliberately avoids assigning a measured shedding category.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific drooling level was established.",
    },

    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-lancashire-heeler-standard",
          role: "verified",
          locator: "Brief historical summary and behaviour/temperament",
        },
        {
          id: "american-kennel-club-lancashire-heeler",
          role: "cited",
          locator: "About the Breed",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "The text summarises documented breed tendencies; an individual dog's temperament may differ.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "All 1–5 scores are editorial estimates intended for comparison, not standardised scientific measurements.",
    },

    care: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Care recommendations are general canine guidance and should be adjusted to the individual dog.",
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-lancashire-heeler-standard",
          role: "verified",
          locator: "General appearance and brief historical summary: energetic worker",
        },
        {
          id: "american-kennel-club-lancashire-heeler",
          role: "verified",
          locator: "About the Breed: medium to high energy",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "The activity level is a qualitative interpretation of the breed's working background, not a measured exercise prescription.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific daily exercise duration was established.",
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
        "A secure yard can be useful for an active dog but does not replace exercise, training, supervision, or enrichment.",
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
        "Nutrition recommendations are general canine guidance, not a breed-specific veterinary prescription.",
    },

    health: {
      reliability: "general_guidance",
      sources: [
        {
          id: "lancashire-heeler-club-health",
          role: "cited",
          locator: "Health conditions and recommended breeder health schemes",
        },
      ],
      verifiedOn: null,
      note:
        "Preventive advice is general guidance. The breed-specific conditions are listed separately and are not presented as inevitable or as prevalence estimates.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "lancashire-heeler-club-health",
          role: "verified",
          locator: "Health: conditions that can affect the breed",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "These are conditions reported by the breed club as possible concerns. The source does not establish that every dog is affected or provide prevalence estimates.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "lancashire-heeler-club-health",
          role: "verified",
          locator: "Health: recommended eye screening, PLL DNA test and CEA/CH DNA test",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "These are breed-related screening recommendations for prospective breeding dogs and breeder discussions, not a claim that every individual pet requires the same testing schedule.",
    },

    suitability: {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "Suitability guidance is an editorial assessment of documented working traits, not a guarantee about individual behaviour.",
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
        "The reviewed sources do not establish a definitive family-with-children suitability rating.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The reviewed sources do not establish a definitive senior-owner suitability rating.",
    },

    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-lancashire-heeler-standard",
          role: "cited",
          locator: "General appearance and utilization: energetic working dog",
        },
      ],
      verifiedOn: null,
      note:
        "This recommendation is an editorial assessment based on the breed's working background.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No definitive apartment-living rating was established from the reviewed sources.",
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lancashire-heeler-standard",
          role: "verified",
          locator: "Origin, utilization, history, proportions, coat and size",
        },
        {
          id: "american-kennel-club-lancashire-heeler-gazette",
          role: "cited",
          locator: "Breed history and alternate name",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-lancashire-heeler-standard",
          role: "verified",
          locator: "Utilization, coat, colour, size and temperament",
        },
        {
          id: "lancashire-heeler-club-health",
          role: "verified",
          locator: "Health and recommended screening tests",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Answers are original summaries. Uncertain lifespan and individual health outcomes are explicitly qualified.",
    },
  },

  updatedOn: "2026-10-25",
};
