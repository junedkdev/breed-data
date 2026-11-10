import type { Breed } from "../schema/breed.types";

export const ariegeois: Breed = {
  slug: "ariegeois",
  name: "Ariegeois",

  scientificName: null,

  alternateNames: [
    "Ariégeois",
    "Ariege Hound",
    "Sabueso del Ariege",
  ],

  group: "Scent Hounds and Related Breeds; Medium-sized Hounds",

  origin: {
    country: "France",
    region: "Ariège, southern France",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ariegeois.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Ariegeois.jpg",
      title: "Ariegeois.jpg",
      description: "Ariegeois hound standing outdoors.",
      creator: "Bautt",
      uploader: "Bautt~commonswiki",
      capturedOn: "2013-12-03",
      uploadedOn: "2013-12-16",
      width: 1373,
      height: 845,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Bautt, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Colour balance and shadow adjustments by Justlettersandnumbers. Indicate further adaptations under equivalent terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10",
    },
  ],

  overview: {
    summary:
      "The Ariegeois is an elegant, medium-sized French scent hound originating in the Midi-Pyrénées region. Bred to hunt hare and deer in difficult mountain terrain, it combines a fine scenting nose, an active bell-like voice, and notable stamina. In addition to its hunting heritage, its calm and affectionate nature makes it an agreeable companion for households with the time and dedication to provide daily physical activity and scent-focused mental stimulation.",

    description:
      "Lightly constructed yet robustly framed, the Ariegeois presents an aristocratic appearance characterised by clean, dry contours, a slightly arched muzzle, and long, supple, curled ears attached low. Its short, dense coat is predominantly pure white with well-defined jet-black patches, occasional subtle black ticking, and soft tan points on the cheeks and above the eyes. Built for swiftness and endurance rather than brute force, this medium-sized hound moves with smooth, effortless strides and carries its sabre-curved tail proudly. While dedicated and focused when pursuing a scent trail, it is gentle, companionable, and sociable when resting among humans and other hounds.",

    history:
      "Originating in the rugged department of Ariège in southwestern France at the beginning of the twentieth century, the breed was established by crossing local briquet hounds with larger traditional French scent hounds, notably the Grand Bleu de Gascogne and Grand Gascon-Saintongeois. The intention was to develop a lighter, swifter hound capable of navigating rocky Pyrenean foothills while retaining the superb scenting accuracy and resonant voice of its larger forebears. Formal international acceptance followed in 1954, securing its position as a distinctive medium-sized pack hound primarily valued for hunting hare.",

    originalPurpose:
      "Trailing and driving small game, especially hare, as well as tracking larger game such as deer and wild boar across mountainous terrain.",

    currentRoles: [
      "Working scent hound in pack and solitary hunting",
      "Scent detection and tracking trials",
      "Active family companion in outdoor-oriented households",
      "Canine sports including trail work and scent games",
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

    coatType: "Short, fine, and dense",

    coatLength: "Short and close-lying, with fine and dense hair covering the body.",

    coatColors: [
      "White with jet-black patches",
      "White with black patches and subtle black ticking",
      "White and black with pale tan spots above the eyes and on the cheeks",
    ],

    sheddingLevel:
      "Moderate shedding throughout the year, requiring weekly brushing to remove loose hairs.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Light and elegant conformation with balanced muscularity",
      "Long, supple, curled ears attached low beneath eye level",
      "Expressive dark brown eyes with calm, alert gaze",
      "Short, dense white coat adorned with bold jet-black markings and pale tan points",
      "Sabre-curved tail carried gaily in motion",
      "Elongated hare feet with tight, dry toes and black pads",
    ],
  },

  temperament: {
    traits: [
      "Gentle",
      "Calm",
      "Affectionate",
      "Sociable",
      "Hard-working",
      "Intelligent",
      "Alert",
      "Enterprising",
      "Vocal on trail",
    ],

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
        "Long leashed walks in rural and natural settings",
        "Structured tracking games and trailing exercises",
        "Secure off-lead exploration in fully enclosed fields",
        "Agility, search-and-find puzzles, and scent-work drills",
      ],
    },

    grooming: {
      level: "Low",

      brushing:
        "Weekly brushing with a rubber curry comb or firm bristle brush to remove dead hair and distribute skin oils.",

      bathing:
        "Occasional bathing only when soiled, using a gentle canine-formulated shampoo to preserve skin barrier integrity.",

      notes: [
        "Inspect long drop ears weekly and after outdoor outings for moisture, debris, or irritation.",
        "Trim nails regularly to prevent foot splay and pad discomfort.",
        "Check coat, skin, and paws thoroughly for burs, thorns, and ticks following field excursions.",
      ],
    },

    training: {
      difficulty:
        "Moderate. While docile and eager to cooperate, strong scenting instincts require patient, reward-based motivation.",

      tips: [
        "Use high-value food rewards and praise to reinforce reliable engagement and responsiveness.",
        "Maintain strict leash management in unsecured areas to prevent wandering after scent trails.",
        "Channel natural tracking drives into structured scent-work games and trailing activities.",
        "Keep training sessions short, varied, and positive to avoid repetition fatigue.",
      ],

      socialization:
        "Early and varied exposure to diverse environments, livestock, household pets, and unfamiliar people encourages a balanced, confident adult temperament.",
    },

    livingEnvironment: {
      apartmentSuitable: null,

      houseWithYardSuitable: true,

      climates: [
        "Well-adapted to temperate climates but handles cooler mountain weather well when active.",
        "Provide ample shade, fresh hydration, and rest during warm summer temperatures.",
        "Protect from extreme cold and avoid prolonged damp confinement without insulated bedding.",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "High-quality commercial or balanced prepared diet formulated for active medium-sized sporting breeds.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Provide measured daily rations divided according to life stage and metabolic requirements. Monitor body condition regularly and adjust caloric intake for hunting season energy demands.",

    considerations: [
      "Increase caloric density during intensive hunting or trailing seasons to sustain working stamina.",
      "Incorporate treat calories into total daily nutritional calculations to prevent gradual weight gain.",
      "Ensure continuous access to fresh drinking water, especially during and after demanding physical exercise.",
    ],

    note:
      "Consult a veterinarian or certified canine nutritionist to establish customized feeding plans suited to individual health status and workload.",
  },

  health: {
    overview:
      "Available veterinary and cynological literature does not document a comprehensive list of breed-specific hereditary conditions or formal health prevalence statistics for the Ariegeois. This absence of published epidemiological data does not indicate complete freedom from genetic conditions. Prospective owners should review parental lineages, health histories, and consult a veterinary professional.",

    commonConditions: [],

    preventiveCare: [
      "Annual comprehensive physical examinations, vaccinations, and parasite prophylaxis.",
      "Routine otoscopic examination and ear hygiene for pendulous pinnae.",
      "Regular post-field body checks for external trauma, burs, and tick attachment.",
      "Maintaining optimal body condition score to reduce joint and cardiovascular stress.",
    ],

    recommendedScreenings: [],

    dentalCare:
      "Routine home toothbrushing several times weekly using canine toothpaste, combined with periodic professional veterinary dental evaluations.",

    earCare:
      "Weekly inspection and gentle cleansing of the ear canals using a veterinarian-approved ear wash, ensuring ears are dried thoroughly after swimming or rain.",

    skinCare:
      "Regular examination of the skin for contact dermatitis, parasites, or field abrasions, especially around the belly, thighs, and paw pads.",
  },

  suitability: {
    firstTimeOwners: null,

    familiesWithChildren: null,

    seniorOwners: null,

    activeOwners: true,

    apartmentLiving: null,

    idealFor: [
      "Active individuals and families committed to regular outdoor exercise",
      "Hunters, trackers, and participants in canine scent sports",
      "Households with securely fenced acreage or spacious yards",
      "Owners patient with hound vocalisation and strong trail curiosity",
    ],

    notIdealFor: [
      "Sedentary households seeking a low-maintenance companion",
      "Environments where frequent barking or howling cannot be accommodated",
      "Homes lacking secure perimeter fencing or off-leash control",
      "Owners expecting immediate off-leash reliability in open country",
    ],
  },

  funFacts: [
    "The Ariegeois was created in the Ariège department of southwestern France at the foot of the Pyrenees mountains.",
    "The breed is grouped among medium-sized scent hounds suited for trailing game across varied ground.",
    "Its ancestry combines the local Briquet hound with larger French hounds, specifically the Grand Bleu de Gascogne and Grand Gascon-Saintongeois.",
    "Bred primarily for trailing hare, it is renowned for its light step, fast pace, and ringing musical voice during the chase.",
    "Its white coat with sharply defined black markings and optional pale tan eye spots gives it an easily recognisable appearance in the field.",
  ],

  faq: [
    {
      question: "What was the Ariegeois originally bred for?",
      answer:
        "The Ariegeois was developed in southern France as a versatile scent hound specialised in hunting hare, as well as tracking larger game such as deer and wild boar over rugged terrain.",
    },
    {
      question: "How big does an Ariegeois get?",
      answer:
        "Typical height at the withers ranges from 52 to 58 cm for males and 50 to 56 cm for females. While no official weight range is published in standard documentation, working adults generally weigh between 25 and 30 kg.",
    },
    {
      question: "What does the coat of an Ariegeois look like?",
      answer:
        "It has a short, fine, and dense coat that is predominantly white with crisp jet-black patches, occasional subtle black flecking, and delicate pale tan points on the cheeks and above the eyes.",
    },
    {
      question: "How much exercise does an Ariegeois require?",
      answer:
        "As an energetic working hound, it requires substantial daily physical activity, including long walks, jogging, or scent-tracking games in secure environments to channel its natural stamina.",
    },
    {
      question: "Is the Ariegeois suitable for apartment living?",
      answer:
        "Because of its high energy, strong tracking instincts, and vocal tendencies, an apartment is generally challenging unless an owner provides extensive daily outdoor exercise and enrichment.",
    },
    {
      question: "What is the life expectancy of an Ariegeois?",
      answer:
        "Documented breed profiles report a typical lifespan of 10 to 12 years when provided with appropriate nutrition, preventive veterinary care, and regular exercise.",
    },
    {
      question: "Does the Ariegeois have any known breed-specific health issues?",
      answer:
        "There are currently no formal epidemiological studies establishing common inherited conditions for the breed. Like all long-eared hunting dogs, regular attention should be paid to ear hygiene, skin checks, and maintaining athletic conditioning.",
    },
  ],

  references: [
    "fci-ariegeois-standard",
    "fci-ariegeois-nomenclature",
    "societe-centrale-canine-ariegeois",
    "royal-canin-ariegeois",
    "wikimedia-ariegeois-bautt",
    "the-dog-api",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-ariegeois-nomenclature",
          role: "verified",
          locator: "Breed nomenclature entry: Ariegeois and Spanish designation Sabueso del Ariege",
        },
        {
          id: "fci-ariegeois-standard",
          role: "verified",
          locator: "FCI Standard No. 20 title and English designation",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names: Ariege Hound",
        },
      ],
      verifiedOn: "2026-11-10",
      note: null,
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Cynological and breed-standard sources classify domestic dogs under Canis lupus familiaris; no distinct scientific name applies specifically to this breed.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-ariegeois-standard",
          role: "verified",
          locator: "FCI classification: Group 6 Scenthounds and related breeds, Section 1.2 Medium-sized Hounds",
        },
      ],
      verifiedOn: "2026-11-10",
      note: null,
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-ariegeois-standard",
          role: "verified",
          locator: "Origin: France; Brief historical summary",
        },
        {
          id: "societe-centrale-canine-ariegeois",
          role: "verified",
          locator: "Historique: Midi de la France, l'Ariège au pied des Pyrénées",
        },
      ],
      verifiedOn: "2026-11-10",
      note: null,
    },

    "origin.region": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-ariegeois-standard",
          role: "verified",
          locator: "Brief historical summary: origin in Ariège",
        },
        {
          id: "societe-centrale-canine-ariegeois",
          role: "verified",
          locator: "Historique: l'Ariège, au pied des Pyrénées",
        },
      ],
      verifiedOn: "2026-11-10",
      note: null,
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-ariegeois-standard",
          role: "verified",
          locator: "Utilisation, brief historical summary, general appearance, behaviour and temperament",
        },
        {
          id: "societe-centrale-canine-ariegeois",
          role: "verified",
          locator: "Description générale, historique, comportement",
        },
      ],
      verifiedOn: "2026-11-10",
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
        {
          id: "societe-centrale-canine-ariegeois",
          role: "verified",
          locator: "Description générale et comportement",
        },
      ],
      verifiedOn: "2026-11-10",
      note:
        "The summary synthesises documented hunting heritage, temperament, and companion requirements in original wording.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-ariegeois-standard",
          role: "verified",
          locator: "General appearance, head, neck, body, tail, limbs, gait, skin, coat, and size",
        },
      ],
      verifiedOn: "2026-11-10",
      note: null,
    },

    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Neither the official standard nor the national kennel club (Société Centrale Canine) specifies official weight ranges ('Poids: NP'). Secondary commercial references such as The Dog API list estimated weights of 25–30 kg for males and 22–30 kg for females, but these figures are uncodified.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-canin-ariegeois",
          role: "verified",
          locator: "Breed Specifics: average life expectancy 10–12 years",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span: 10 - 14 years",
        },
      ],
      verifiedOn: "2026-11-10",
      note:
        "The stored range follows the cynological consensus of 10–12 years; The Dog API records 10–14 years.",
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-ariegeois-standard",
          role: "cited",
          locator: "Coat: hair short, fine and dense",
        },
      ],
      verifiedOn: null,
      note:
        "The standard notes a short, dense coat; shedding level is an editorial description of standard short single-coat maintenance.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No empirical drooling data was documented in standard or veterinary references.",
    },

    temperament: {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "Temperament scores are editorial estimates for comparative guidance, not psychometric or clinical evaluations.",
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-ariegeois-standard",
          role: "verified",
          locator: "Behaviour / Temperament: happy, sociable, easy to train, fine nose, enterprising, vocal",
        },
        {
          id: "societe-centrale-canine-ariegeois",
          role: "verified",
          locator: "Comportement: Calme et affectueux, grande finesse de nez, belle voix, appliqué",
        },
      ],
      verifiedOn: "2026-11-10",
      note:
        "Traits reflect standard descriptions of working style and domestic disposition.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "All numeric ratings (1–5) are editorial estimates and do not represent verified psychometric evaluations of individual dogs.",
    },

    care: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Care advice reflects standard canine husbandry adapted to active scent hounds.",
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-ariegeois-standard",
          role: "verified",
          locator: "Utilization: hound capable of working on difficult terrain with sustained stamina",
        },
        {
          id: "royal-canin-ariegeois",
          role: "verified",
          locator: "About the Ariegeois: high energy working dog",
        },
        {
          id: "societe-centrale-canine-ariegeois",
          role: "verified",
          locator: "Vivre en ville: chien de chasse fait pour vivre à la campagne",
        },
      ],
      verifiedOn: "2026-11-10",
      note: null,
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No fixed daily minute requirement is established in standard or veterinary sources; exercise requirements depend on age, fitness, and hunting activity.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Sources do not establish an empirical apartment suitability rating, though French club notes emphasise its adaptation to rural living.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "A securely fenced yard is recommended for active scent hounds to allow safe exploration without risk of following scent trails off-premises.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific alone-time threshold was found in cynological literature.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Nutritional assessment checklist and body condition scoring",
        },
      ],
      verifiedOn: null,
      note:
        "Nutritional recommendations follow WSAVA global veterinary guidelines for canine body condition and life stage feeding.",
    },

    "nutrition.feedingFrequency": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Feeding frequencies vary by individual caloric requirement, age, workload, and veterinary recommendation.",
    },

    health: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Health and wellness recommendations reflect veterinary preventive medicine standards.",
    },

    "health.commonConditions": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No epidemiological survey or veterinary screening database documents statistically verified hereditary disease predispositions for the Ariegeois.",
    },

    "health.recommendedScreenings": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No formal mandatory health screening protocol has been established by breed clubs or veterinary bodies.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "Home dental care and regular professional prophylaxis guidelines",
        },
      ],
      verifiedOn: null,
      note: null,
    },

    suitability: {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "Suitability assessments represent editorial evaluations of the breed's hunting instincts and exercise needs.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No verified consensus rating exists for novice owner suitability.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "While noted as gentle, no definitive statistical rating exists for child compatibility.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Senior owner suitability is not evaluated in breed standard documentation.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Apartment compatibility is unrated in formal documentation.",
    },

    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-ariegeois-standard",
          role: "cited",
          locator: "Utilization and behaviour",
        },
      ],
      verifiedOn: null,
      note:
        "Recommended for active owners capable of accommodating an athletic working hound.",
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-ariegeois-standard",
          role: "verified",
          locator: "Origin, historical summary, utilization, coat and colour",
        },
        {
          id: "fci-ariegeois-nomenclature",
          role: "verified",
          locator: "Classification: Group 6, Section 1.2",
        },
        {
          id: "societe-centrale-canine-ariegeois",
          role: "verified",
          locator: "Historique et description générale",
        },
      ],
      verifiedOn: "2026-11-10",
      note: null,
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-ariegeois-standard",
          role: "verified",
          locator: "Utilization, size, coat and character",
        },
        {
          id: "societe-centrale-canine-ariegeois",
          role: "verified",
          locator: "Description générale, comportement, santé",
        },
        {
          id: "royal-canin-ariegeois",
          role: "verified",
          locator: "Life expectancy and exercise profile",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric and breed.life_span",
        },
      ],
      verifiedOn: "2026-11-10",
      note:
        "FAQ answers provide concise original summaries of documented breed characteristics, height measurements, weight context, and care considerations.",
    },
  },

  updatedOn: "2026-11-10",
};
