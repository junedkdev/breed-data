import type { Breed } from "../schema/breed.types";

export const spinone_italiano: Breed = {
  slug: "spinone-italiano",
  name: "Spinone Italiano",
  scientificName: "Canis lupus familiaris",
  alternateNames: ["Italian Spinone", "Spinone", "Spinoni Italiani"],

  group:
    "FCI Group 7: Pointing Dogs; Section 1.3: Continental Pointing Dogs, Griffon type",

  origin: {
    country: "Italy",
    region: "Northern Italy, including the Piedmont region in historical accounts",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Spinone_Italiano.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Spinone_Italiano.jpg",
      title: "Spinone Italiano.jpg",
      description: "A Spinone Italiano photographed during a walk in Dorset.",
      creator: "Caroline Granycome",
      uploader: "Ltshears",
      capturedOn: "2012-06-09",
      uploadedOn: "2012-09-13",
      width: 4288,
      height: 2848,
      licenseId: "cc-by-sa-2.0",
      attribution:
        "Photo by Caroline Granycome, via Wikimedia Commons, CC BY-SA 2.0. Changes, if any, must be indicated. https://creativecommons.org/licenses/by-sa/2.0/",
      restrictions: null,
      metadataCheckedOn: "2026-10-25",
    },
  ],

  overview: {
    summary:
      "A sturdy Italian pointing dog with a distinctive wiry coat, expressive face and patient, sociable nature. The Spinone Italiano was developed as a versatile hunting companion, able to search, point and retrieve across varied terrain, including water.",

    description:
      "The Spinone Italiano is a large, solidly built sporting dog whose strength and endurance are more important than speed alone. Its rough, dense coat protects it while working through brush and uneven ground. Longer facial hair forms characteristic eyebrows, a moustache and a beard, while the broad nose and almost human-looking expression give the breed a recognisable appearance. Spinoni are generally sociable, patient and cooperative, although individual temperament depends on genetics, early experiences, training and ongoing care. Their working heritage means they usually benefit from regular outdoor activity, opportunities to use their nose and purposeful interaction with their people.",

    history:
      "The Spinone has a long association with hunting in Italy. Historical descriptions of rough-haired Italian hunting dogs appear in written accounts from the seventeenth century, and dogs of a similar type were depicted in European art during the Middle Ages and Renaissance. The modern breed is recognised internationally as an Italian pointing dog. Historical references support an old Italian lineage, but they do not establish every detail of the breed's ancestry or the exact timeline of its development.",

    originalPurpose:
      "A versatile hunting dog bred to search for game, point it out to the hunter and retrieve game from land or water.",

    currentRoles: [
      "Hunting and field work",
      "Retrieving and scent-based activities",
      "Active household companion",
      "Dog sports and structured outdoor activities",
      "Suitable, individually assessed therapy or visiting work",
    ],
  },

  physical: {
    sizeCategory: "large",

    height: {
      unit: "cm",
      male: {
        min: 60,
        max: 70,
      },
      female: {
        min: 58,
        max: 65,
      },
    },

    weight: {
      unit: "kg",
      male: {
        min: 34,
        max: 39,
      },
      female: {
        min: 29,
        max: 34,
      },
    },

    lifespanYears: {
      min: 10,
      max: 12,
    },

    coatType:
      "Dense, coarse, hard-textured and slightly wiry coat that lies close to the body.",

    coatLength:
      "Short to medium on most of the body. Longer, stiffer hair forms eyebrows, while softer, longer hair on the cheeks and upper lips creates a moustache and beard.",

    coatColors: [
      "White",
      "White and orange",
      "Orange roan",
      "White and brown",
      "Brown roan",
    ],

    sheddingLevel: "Moderate; individual shedding varies with coat condition and grooming routine.",

    droolingLevel:
      "May drool around the mouth, particularly after drinking or eating; the amount varies between individuals.",

    distinctiveFeatures: [
      "Strong, substantial frame with well-developed bone and musculature",
      "Body proportions tending toward a square outline",
      "Broad, voluminous nose with a distinctive rounded upper edge",
      "Long facial hair forming eyebrows, moustache and beard",
      "Large, nearly round eyes with an ochre-coloured iris",
      "Low-set, roughly triangular ears",
      "Rough coat designed for practical work in brush and varied terrain",
      "A strong, extended trot suited to covering ground efficiently",
    ],
  },

  temperament: {
    traits: [
      "Sociable",
      "Patient",
      "Docile",
      "Affectionate",
      "Enduring",
      "Cooperative",
      "Generally gentle",
      "Interested in scent and outdoor exploration",
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: 2,
      independence: 3,
      trainability: 4,
      barking: 2,
      energy: 4,
    },
  },

  care: {
    exercise: {
      level: "Moderate to high",
      minutesPerDay: {
        min: 60,
        max: 90,
      },
      activities: [
        "Daily walks with time to sniff and explore",
        "Retrieving games adapted to the dog's age and fitness",
        "Scent work and tracking games",
        "Swimming where safe and supervised",
        "Field training or other structured sporting activities",
        "Reward-based training and enrichment games",
      ],
    },

    grooming: {
      level: "Moderate",
      brushing:
        "Brush or comb regularly to remove loose hair, debris and small tangles. Pay particular attention to the beard, eyebrows, ears and areas where friction can cause matting.",
      bathing:
        "Bathe when needed with a dog-appropriate shampoo. Rinse and dry thoroughly, particularly around the beard and ears.",
      notes: [
        "Inspect the coat after walks through dense vegetation and remove burrs or other debris.",
        "The traditional coat may benefit from occasional hand-stripping to maintain its texture; ask an experienced groomer to demonstrate the technique.",
        "Avoid unnecessary shaving if preserving the natural coat texture is important.",
        "Check nails, paws, skin and ears regularly.",
        "Clean the beard after meals or drinking when needed.",
      ],
    },

    training: {
      difficulty:
        "Moderate; a patient, consistent approach is usually more effective than harsh or repetitive drills.",
      tips: [
        "Use reward-based training with food, toys, praise or access to activities the dog enjoys.",
        "Keep sessions engaging and gradually increase distractions.",
        "Teach reliable recall before allowing off-leash activity in safe areas.",
        "Practise calm greetings and polite leash walking from an early age.",
        "Use scent games and retrieving tasks to provide appropriate mental stimulation.",
        "Keep training age-appropriate, particularly while joints are developing.",
      ],
      socialization:
        "Introduce the dog gradually and positively to varied people, friendly dogs, surfaces, sounds, travel and everyday environments. Prioritise calm, safe experiences rather than forcing interaction.",
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: [
        "Temperate climates",
        "Cool climates",
        "Warm climates with shade, water and activity adjusted for heat",
      ],
      aloneTimeTolerance:
        "Individual-dependent. Build alone time gradually and provide exercise, enrichment and a predictable routine; long, frequent periods alone may not suit a dog that expects substantial interaction.",
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate to the dog's life stage, body condition, activity level and individual health needs.",

    feedingFrequency: {
      puppy:
        "Usually several small meals daily; follow the food's feeding guidance and your veterinarian's advice as the puppy grows.",
      adult:
        "Often fed in two measured meals daily. Adjust portions to maintain a healthy body condition.",
      senior:
        "Individualise meal size, energy intake and feeding routine according to body condition, dental health, activity and veterinary advice.",
    },

    guidelines:
      "Measure food portions, keep fresh water available and monitor body condition rather than relying only on package portions. Make diet changes gradually. Treats should be included in the daily energy intake, and any therapeutic diet should be chosen with a veterinarian.",

    considerations: [
      "Avoid overfeeding and monitor weight as activity changes.",
      "Use a complete diet formulated for the dog's life stage.",
      "Discuss growth and feeding amounts with a veterinarian while the dog is a puppy.",
      "Ask a veterinarian before adding supplements or making major dietary changes.",
      "For dogs that eat quickly or have individual digestive concerns, discuss an appropriate feeding routine with a veterinarian.",
    ],

    note:
      "These are general feeding principles, not a breed-specific prescription. Calorie needs vary with age, neuter status, health, metabolism and workload.",
  },

  health: {
    overview:
      "The Spinone Italiano is generally described as a healthy breed, but no breed is free of inherited or acquired disease. Breed-club health resources identify joint, eye, thyroid and neurological concerns that responsible breeders and owners should discuss with veterinary professionals. Screening results can inform breeding decisions, but they cannot guarantee that an individual dog will remain healthy.",

    commonConditions: [
      "Hip dysplasia",
      "Elbow dysplasia",
      "Eye conditions, including ectropion and cataracts",
      "Hypothyroidism and other thyroid disorders",
      "Cerebellar ataxia, a rare but serious inherited neurological condition",
      "Cruciate ligament injury",
      "Panosteitis, a painful bone condition that may occur during growth",
    ],

    preventiveCare: [
      "Arrange routine veterinary examinations and seek prompt advice about changes in gait, balance, vision, appetite or behaviour.",
      "Keep the dog at a healthy body condition and build exercise gradually, especially during growth.",
      "Discuss appropriate joint, eye and other screening with a veterinarian or responsible breeder.",
      "Ask whether the parents have relevant health clearances and whether genetic testing is indicated for the particular breeding lines.",
      "Maintain routine vaccination, parasite prevention and dental care according to veterinary advice.",
    ],

    recommendedScreenings: [
      "Hip evaluation",
      "Elbow evaluation",
      "Ophthalmologist eye examination",
      "Discuss thyroid evaluation with the veterinarian or breeder",
      "Discuss cerebellar ataxia DNA testing and cardiac screening where appropriate",
    ],

    dentalCare:
      "Brush the teeth regularly with dog-specific dental products and arrange veterinary dental assessments as needed. Seek veterinary advice for persistent bad breath, oral pain, bleeding or difficulty eating.",

    earCare:
      "Check the ears regularly for redness, odour, discharge or persistent scratching. Keep them dry after swimming or bathing and use only ear-cleaning products recommended by a veterinarian.",

    skinCare:
      "Inspect the skin under the coat and around the ears, paws and beard for irritation, parasites, wounds or persistent redness. Seek veterinary advice if itching, hair loss or skin changes persist.",
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "People who enjoy regular walks and outdoor activities",
      "Households able to provide daily exercise and mental enrichment",
      "Owners interested in scent work, retrieving or other cooperative activities",
      "Families willing to supervise dog-child interactions and teach respectful handling",
      "Owners prepared to maintain a rough coat, beard and ears",
    ],

    notIdealFor: [
      "People seeking a very low-activity dog",
      "Households unable to provide regular companionship or enrichment",
      "Owners expecting reliable off-leash behaviour without training",
      "People unwilling to manage coat care and post-outing checks",
      "Homes where the dog's size and exercise needs cannot be accommodated",
    ],
  },

  funFacts: [
    "The breed's name is associated with the Italian expression 'bracco spinoso', often linked to its rough coat or the thorny cover where game may hide.",
    "The Spinone is a pointing dog that can also retrieve, including from water.",
    "Historical descriptions of rough-haired Italian hunting dogs appear in accounts dating back to the seventeenth century.",
    "Its eyebrows, moustache and beard are among its most recognisable physical features.",
  ],

  faq: [
    {
      question: "Is the Spinone Italiano a family dog?",
      answer:
        "It is generally described as sociable and patient and can be a good family companion. As with any dog, suitability depends on the individual, supervision, training and how children interact with the dog.",
    },
    {
      question: "How much exercise does a Spinone Italiano need?",
      answer:
        "Plan for regular daily walks and additional opportunities to sniff, retrieve or take part in other activities. The suggested daily exercise range in this profile is an editorial estimate, not a formal breed-standard requirement; adjust it for age, fitness and veterinary advice.",
    },
    {
      question: "Does the Spinone Italiano shed?",
      answer:
        "Yes, Spinoni can shed. Regular brushing and suitable coat maintenance help manage loose hair and debris, but the amount varies between dogs.",
    },
    {
      question: "What health checks should I ask a breeder about?",
      answer:
        "Ask about hip and elbow evaluations and eye examinations. You can also discuss thyroid, cardiac and cerebellar ataxia testing with the breeder and your veterinarian. Screening recommendations and results should be interpreted with professional guidance.",
    },
    {
      question: "Is the Spinone Italiano easy to train?",
      answer:
        "Many are cooperative and respond well to patient, reward-based training. Keep sessions engaging, practise recall consistently and use activities that make good use of the dog's nose and retrieving instincts.",
    },
    {
      question: "Can a Spinone Italiano live in an apartment?",
      answer:
        "It can be possible if the dog receives sufficient exercise, enrichment and companionship. Access to a yard can be convenient, but a yard alone does not replace walks, training and interaction.",
    },
  ],

  references: [
    "fci-spinone-italiano-standard",
    "the-kennel-club-italian-spinone-standard",
    "american-kennel-club-spinone-italiano",
    "spinone-club-of-america-about-spinoni",
    "spinone-club-of-america-health",
    "wikimedia-spinone-italiano-photo",
  ],

  evidence: {
    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator: "Title: Spinone Italiano (Italian Spinone)",
        },
        {
          id: "spinone-club-of-america-about-spinoni",
          role: "verified",
          locator: "About the Spinone Italiano; singular and plural forms",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Includes the English alternate name and the common shortened form.",
    },

    scientificName: {
      reliability: "unverified",
      sources: [],
      verifiedOn: null,
      note:
        "Canis lupus familiaris is the domestic dog taxonomic name used as a catalog convention; the breed standards do not establish a separate breed-level scientific name.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator: "FCI classification: Group 7, Section 1.3, Griffon type",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Uses the FCI classification; kennel-club grouping systems can differ.",
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator: "Origin: Italy; Brief Historical Summary",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Italy is the stated country of origin. Northern Italy/Piedmont is presented as historical context, not a precisely established exclusive origin.",
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator:
            "Utilization, Brief Historical Summary, General Appearance, Behaviour/Temperament",
        },
        {
          id: "the-kennel-club-italian-spinone-standard",
          role: "verified",
          locator: "General appearance, characteristics, temperament and coat",
        },
        {
          id: "spinone-club-of-america-about-spinoni",
          role: "verified",
          locator: "About Spinoni; Origins; Find an Activity",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "User-facing history and descriptions are original summaries. Historical ancestry beyond the documented accounts is not asserted as certain.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator:
            "General Appearance, Important Proportions, Eyes, Ears, Coat, Colour and Utilization",
        },
        {
          id: "the-kennel-club-italian-spinone-standard",
          role: "verified",
          locator: "Coat, Colour and Size",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Height and weight are stored in the first unit system printed by The Kennel Club: centimetres and kilograms. Breed-standard measurements describe an ideal range, not a guarantee for every dog.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-spinone-italiano",
          role: "verified",
          locator: "Average sizes and life expectancy: 10–12 years",
        },
        {
          id: "spinone-club-of-america-about-spinoni",
          role: "verified",
          locator: "Health & Longevity: average lifespan 10–12 years",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Published breed-profile estimate; individual lifespan varies.",
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "spinone-club-of-america-about-spinoni",
          role: "cited",
          locator: "A Well-Groomed Dog Is a Healthy Dog",
        },
      ],
      verifiedOn: null,
      note:
        "Qualitative editorial estimate. The source confirms that Spinoni shed but does not define a standard shedding scale.",
    },

    "physical.droolingLevel": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "No sufficiently reliable breed-specific drooling scale was established; this is a cautious qualitative estimate, not a verified breed statistic.",
    },

    temperament: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator: "Behaviour/Temperament",
        },
        {
          id: "the-kennel-club-italian-spinone-standard",
          role: "verified",
          locator: "Characteristics and Temperament",
        },
        {
          id: "spinone-club-of-america-about-spinoni",
          role: "cited",
          locator: "About the Spinone Italiano; Origins and activities",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Traits summarise the standard's description. Individual dogs can differ in temperament and behaviour.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "cited",
          locator: "Behaviour/Temperament",
        },
        {
          id: "american-kennel-club-spinone-italiano",
          role: "cited",
          locator: "Breed Traits & Characteristics",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 ratings for app presentation, not measurements published by a kennel club or a validated behavioural test.",
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "spinone-club-of-america-about-spinoni",
          role: "cited",
          locator: "Find an Activity; A Well-Groomed Dog Is a Healthy Dog",
        },
        {
          id: "fci-spinone-italiano-standard",
          role: "cited",
          locator: "Utilization and Behaviour/Temperament",
        },
      ],
      verifiedOn: null,
      note:
        "Practical care guidance informed by the breed's working role and coat. It is not a formal standard or a substitute for individual veterinary advice.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "spinone-club-of-america-about-spinoni",
          role: "cited",
          locator: "Find an Activity",
        },
      ],
      verifiedOn: null,
      note:
        "The 60–90 minute range is an editorial planning estimate, not a published breed-specific requirement. Adjust for age, health and fitness.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General canine feeding guidance. No breed-specific daily calorie or portion requirement is asserted.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "spinone-club-of-america-health",
          role: "verified",
          locator:
            "The Skeletal System, Eye Conditions, Thyroid Conditions, Cerebellar Ataxia, Testing & Clearances",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Breed-club health information supports the listed concerns and screening topics. It does not mean every Spinone will develop these conditions.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine dental-care advice, not a Spinone-specific health finding.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General ear-care guidance; seek veterinary advice for signs of disease.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General skin-care guidance, not a breed-specific diagnosis or risk estimate.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "cited",
          locator: "Utilization and Behaviour/Temperament",
        },
        {
          id: "spinone-club-of-america-about-spinoni",
          role: "cited",
          locator: "Find an Activity; family companion and working roles",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial suitability guidance. Individual temperament, household routines, training and access to exercise determine real-world fit.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator: "Brief Historical Summary and Utilization",
        },
        {
          id: "spinone-club-of-america-about-spinoni",
          role: "verified",
          locator: "About the Spinone Italiano; Origins of the Spinone",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Facts are paraphrased from breed-history and working-role references.",
    },

    faq: {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "cited",
          locator: "Utilization and Behaviour/Temperament",
        },
        {
          id: "spinone-club-of-america-health",
          role: "cited",
          locator: "Recommended health testing and health information",
        },
        {
          id: "spinone-club-of-america-about-spinoni",
          role: "cited",
          locator: "Activity, grooming and family-companion information",
        },
      ],
      verifiedOn: null,
      note:
        "Answers combine sourced breed information with general care guidance; exercise timing and household suitability are estimates.",
    },
  },

  updatedOn: "2026-10-25",
};
