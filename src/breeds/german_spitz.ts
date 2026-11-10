import type { Breed } from "../schema/breed.types";

export const german_spitz: Breed = {
  slug: "german-spitz",
  name: "German Spitz",
  scientificName: null,
  alternateNames: ["Deutscher Spitz"],
  group: "Spitz and Primitive Types; European Spitz",

  origin: {
    country: "Germany",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/German_spitz.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:German_spitz.jpg",
      title: "German spitz.jpg",
      description: "German Spitz, Mittelspitz variety.",
      creator: "Savannahepryor",
      uploader: "Savannahepryor",
      capturedOn: "2015-07-17",
      uploadedOn: "2016-03-16",
      width: 4592,
      height: 3448,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Savannahepryor, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). No changes made. Adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10",
    },
  ],

  overview: {
    summary:
      "The German Spitz is an ancient German breed family encompassing five distinct size varieties. Characterised by erect triangular ears, a foxy wedge-shaped head, a lush double coat with a lion-like ruff, and a bushy tail carried over the back, it ranges from a diminutive toy companion to a sturdy watchdog. Naturally alert, spirited, and closely attached to its household, it makes a dedicated companion when provided with consistent training and regular mental stimulation.",

    description:
      "Displaying a classic Nordic-spitz silhouette, the German Spitz possesses a dense undercoat that supports a long, straight, stand-off outer coat, forming an imposing mane around the neck and shoulders. The wedge-shaped head tapers smoothly toward the nose, complemented by dark expressive eyes and small, keenly mobile upright ears. Permitted sizes and coat colours vary across the five recognised varieties, ranging from solid white, black, and brown to wolf-grey and parti-colour patterns. Naturally attentive to household activity and quick to announce unfamiliar visitors, these dogs require early socialisation and calm, consistent training to channel their vigilant instincts productively.",

    history:
      "Descended from ancient Stone Age peat dogs and lake-dwelling canines of Central Europe, the German Spitz lineage represents one of the oldest domesticated types in the region. Over centuries, these vigilant Spitz dogs diverged into distinct size varieties serving as watchful farm guardians and companion animals across Germany. Cynological classifications formally recognise five distinct size varieties within this historic family: Wolfspitz (Keeshond), Giant Spitz (Grossspitz), Medium Spitz (Mittelspitz), Miniature Spitz (Kleinspitz), and Toy Spitz (Zwergspitz or Pomeranian). While varying substantially in stature and colour range, all varieties share a characteristic silhouette, foxy head, and weather-resistant double coat.",

    originalPurpose:
      "Farm watchdog, alert sentry, and devoted household companion.",

    currentRoles: [
      "Devoted household companion",
      "Vigilant home watchdog",
      "Agility, rally, and obedience competition",
      "Trick training, scent games, and mental enrichment",
      "Conformation exhibition across size categories",
    ],
  },

  physical: {
    sizeCategory:
      "Small to large depending on variety; the German Spitz is a family of five recognised size varieties.",

    height: {
      unit: "cm",
      male: { min: 18, max: 55 },
      female: { min: 18, max: 55 },
    },

    weight: {
      unit: null,
      male: null,
      female: null,
    },

    lifespanYears: null,

    coatType:
      "Double coat with a long, straight, stand-off outer coat and a short, thick, soft undercoat.",

    coatLength:
      "Long and abundant over most of the body, with shorter, dense hair on the head, ears, front of the legs and feet.",

    coatColors: [
      "White",
      "Black",
      "Brown",
      "Orange",
      "Grey-shaded",
      "Other permitted shades including orange-sable, cream, cream-sable, black-and-tan, black-and-silver, brown-and-tan, and parti-colour patterns",
    ],

    sheddingLevel:
      "Seasonal shedding can be substantial. The undercoat is shed heavily during coat changes, and more frequent brushing is useful during those periods.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Small, upright, triangular ears",
      "Foxy, wedge-shaped head",
      "Dense mane-like ruff around the neck and shoulders",
      "Bushy tail carried over the back",
      "Abundant double coat",
      "Five distinct recognised size categories ranging from Toy to Giant varieties",
    ],
  },

  temperament: {
    traits: [
      "Alert and attentive",
      "Lively",
      "Devoted to family",
      "Trainable with positive reinforcement",
      "Watchful with strangers",
      "Quick to notice environmental changes",
      "Vocal sentry instinct",
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 3,
      independence: 3,
      trainability: 4,
      barking: 4,
      energy: 3,
    },
  },

  care: {
    exercise: {
      level:
        "Moderate as a general starting point; needs vary with variety, age, health and individual temperament.",

      minutesPerDay: null,

      activities: [
        "Daily walks tailored to the specific size variety and physical stamina",
        "Short, engaging reward-based training sessions",
        "Interactive scent-work games and puzzle feeders",
        "Structured play in securely fenced outdoor areas",
        "Basic obedience drills and trick learning",
      ],
    },

    grooming: {
      level: "Moderate to high, especially during seasonal coat changes",

      brushing:
        "Brush through the coat thoroughly several times weekly with a pin brush or slicker to prevent matting and lift dead undercoat. Increase brushing frequency during heavy seasonal coat shedding, taking care to work gently through the neck ruff and rear feathering without scraping the skin.",

      bathing:
        "Bathe periodically when soiled using a mild dog shampoo. Rinse thoroughly and blow-dry the coat completely with a high-velocity dryer on cool to ensure moisture does not remain trapped within the dense undercoat.",

      notes: [
        "Expect significant undercoat release during biannual seasonal coat blowing.",
        "Introduce gentle handling and grooming routines during early puppyhood.",
        "Inspect the skin beneath the dense ruff regularly for parasites or hot spots.",
        "Check ears frequently and consult a veterinarian if redness or odour appears.",
        "Keep nails trimmed regularly to support sound foot conformation.",
        "Never shave the double coat as a shortcut, as this can permanently alter coat texture and thermal regulation.",
      ],
    },

    training: {
      difficulty:
        "Moderate. Intelligent and eager to learn, but strong watchdog vigilance and vocal alert habits require patient, consistent guidance.",

      tips: [
        "Employ positive reinforcement methods using high-value rewards and enthusiastic praise.",
        "Acknowledge alert barks calmly and teach a reliable quiet cue to prevent excessive vocalisation.",
        "Establish polite, calm greetings with household guests from an early age.",
        "Provide daily mental puzzles and interactive training to prevent boredom.",
        "Tailor physical activities to the structural capabilities of the individual size variety.",
      ],

      socialization:
        "Introduce the dog gradually and positively to diverse people, stable adult dogs, household appliances, and novel environments. Reward calm, observant behaviour to prevent natural wariness from developing into persistent suspicion.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Thrives in cool and temperate climates where the thick double coat provides natural insulation.",
        "Tolerates cold winter weather well when active and provided with warm indoor shelter.",
        "Requires access to shaded areas, cool indoor spaces, and abundant water during hot summer weather.",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate to life stage, body condition, activity and veterinary needs.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Measure daily food portions carefully according to size variety, body condition scoring, and daily activity. Account for training treats within total daily caloric allowances and introduce any dietary modifications gradually.",

    considerations: [
      "Calibrate rations precisely to the dog's size variety, avoiding excess weight in smaller individuals.",
      "Monitor body condition score regularly to prevent obesity and associated joint stress.",
      "Provide clean, fresh drinking water at all times.",
      "Factor training treats into the total daily energy budget.",
    ],

    note:
      "General canine nutrition guidance; exact daily caloric requirements must be determined in consultation with a veterinarian based on size variety, age, and lifestyle.",
  },

  health: {
    overview:
      "Veterinary literature and national breed club health surveys record that progressive retinal atrophy (PRA), retinal dysplasia, and patellar luxation occur in some German Spitz dogs, although the overall population is generally robust. These documented conditions represent potential hereditary concerns rather than inevitable health outcomes. Prospective owners should examine the veterinary histories and diagnostic test results of parental lines across the specific size variety.",

    commonConditions: [
      "Progressive retinal atrophy (PRA) — an inherited retinal degeneration causing progressive vision impairment.",
      "Retinal dysplasia (RD) — abnormal retinal development detectable via veterinary ophthalmic screening.",
      "Patellar luxation — congenital or developmental kneecap instability observed particularly in smaller varieties.",
    ],

    preventiveCare: [
      "Annual comprehensive wellness examinations and appropriate vaccination and parasite control.",
      "Regular veterinary ophthalmic examinations throughout adulthood.",
      "Maintaining an optimal body weight to protect patellar and hip joints.",
      "Verifying documented health screening certificates from parent stock before acquiring a puppy.",
      "Seeking veterinary guidance promptly if changes in vision, gait, or general mobility occur.",
    ],

    recommendedScreenings: [
      "Clinical patellar evaluation by a qualified veterinarian to screen for luxation.",
      "Radiographic hip evaluation to assess joint conformation.",
      "Radiographic elbow evaluation for articular soundness.",
      "Comprehensive ophthalmic evaluation by a board-certified veterinary ophthalmologist.",
      "DNA panel testing covering known breed-relevant hereditary mutations.",
    ],

    dentalCare:
      "Brush teeth regularly using canine-specific enzymatic toothpaste, scheduling periodic professional dental evaluations to preserve periodontal health.",

    earCare:
      "Inspect upright ears weekly for wax buildup, irritation, or foreign debris, gently cleansing the outer ear flap when necessary.",

    skinCare:
      "Part the dense coat regularly during grooming sessions to inspect the skin for redness, hot spots, or parasites, ensuring the skin remains dry after bathing or rain.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Owners who appreciate an alert, devoted, and animated companion",
      "Households committed to regular brushing and double-coat maintenance",
      "Handlers willing to train and channel alert vocal tendencies thoughtfully",
      "Families seeking an active companion tailored to a specific living space through size choice",
    ],

    notIdealFor: [
      "Individuals seeking a low-maintenance, short-coated dog",
      "Households intolerant of alert watchdog barking",
      "Owners expecting uniform exercise requirements across all five varieties",
      "Homes unable to provide daily human interaction and coat care",
    ],
  },

  funFacts: [
    "The German Spitz family encompasses five recognised size varieties: Wolfspitz (Keeshond), Giant Spitz, Medium Spitz, Miniature Spitz, and Toy Spitz (Pomeranian).",
    "Historically bred for vigilant guarding, these dogs were valued by farmsteads for alerting owners to approaching strangers without showing unprovoked aggression.",
    "The thick neck ruff and bushy tail carried over the back are characteristic features of the breed family.",
    "The permitted colours differ among some German Spitz varieties.",
  ],

  faq: [
    {
      question: "Is the German Spitz one size?",
      answer:
        "No. The breed family comprises five distinct size varieties, spanning from the diminutive Toy Spitz to the substantial Wolfspitz.",
    },
    {
      question: "How tall is a German Spitz?",
      answer:
        "Height varies according to the specific variety: Toy Spitz measure 21 ± 3 cm, Miniature Spitz measure 27 ± 3 cm, Medium Spitz measure 35 ± 5 cm, Giant Spitz measure 45 ± 5 cm, and Wolfspitz measure 49 ± 6 cm at the withers.",
    },
    {
      question: "How much does a German Spitz weigh?",
      answer:
        "Cynological standards state that weight should correspond proportionally to the dog's size variety rather than prescribing a single universal weight bracket for the whole breed.",
    },
    {
      question: "Does a German Spitz shed?",
      answer:
        "Yes. The breed has a dense double coat, and seasonal shedding can be substantial. Regular brushing is important, with more frequent coat care during heavier shedding periods.",
    },
    {
      question: "Which health problems should owners know about?",
      answer:
        "Documented hereditary conditions include progressive retinal atrophy (PRA), retinal dysplasia, and patellar luxation. Responsible breeders screen parent dogs with ophthalmological evaluations and orthopedic checks to reduce the incidence of these disorders.",
    },
    {
      question: "Is the German Spitz suitable for apartment living?",
      answer:
        "It depends on the particular variety, the dog's temperament and how well its exercise, enrichment, grooming and barking are managed. The available sources do not establish a universal apartment-suitability rating for all five varieties.",
    },
    {
      question: "What is the German Spitz's life expectancy?",
      answer:
        "A reliable breed-wide numerical life expectancy was not established from the sources reviewed. Lifespan can vary with variety, genetics, health care and individual circumstances, so this record does not assign an unsupported number.",
    },
  ],

  references: [
    "fci-german-spitz-standard-97",
    "vdh-german-spitz-profile",
    "american-kennel-club-german-spitz",
    "akc-german-spitz-health-testing",
    "gsboc-german-spitz-health-testing",
    "wikimedia-german-spitz-savannahepryor",
    "the-dog-api",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-german-spitz-standard-97",
          role: "verified",
          locator: "Title and nomenclature: German Spitz / Deutscher Spitz",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "The German name is recorded as an alternate label for the breed.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The reviewed breed standard does not establish a separate scientific name for the German Spitz breed.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-spitz-standard-97",
          role: "verified",
          locator: "FCI classification: Group 5, Section 4 European Spitz",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Uses the European Spitz classification.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-spitz-standard-97",
          role: "verified",
          locator: "Origin: Germany",
        },
      ],
      verifiedOn: "2026-11-10",
      note: null,
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The official standard identifies Germany as the country of origin but does not establish one specific region.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-german-spitz-standard-97",
          role: "verified",
          locator: "Historical summary, utilization, general appearance and variety descriptions",
        },
        {
          id: "vdh-german-spitz-profile",
          role: "verified",
          locator: "Breed profile: appearance, coat and recognised varieties",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "User-facing text is an original summary of the standard and breed profile.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-spitz-standard-97",
          role: "verified",
          locator: "General appearance, coat, colours, size and weight by variety",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Physical descriptions follow the official standard. Variety-specific measurements are combined across the five recognised sizes.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-spitz-standard-97",
          role: "verified",
          locator: "Size and weight sections for all five varieties",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.height.metric: 23 - 38 cm",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "The combined envelope of 18–55 cm is derived from official variety tolerances: Toy Spitz 21 ± 3 cm at the lower bound and Wolfspitz/Keeshond 49 ± 6 cm at the upper bound. The Dog API records 23–38 cm, which reflects intermediate Mittelspitz and Kleinspitz sizes rather than the full five-variety spectrum.",
    },

    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The standard specifies that weight should correspond to variety size but does not establish a universal numerical range. The Dog API lists an empirical range of 3.6–12 kg for males and 3.6–11 kg for females across middle varieties, but these remain uncodified.",
    },

    "physical.lifespanYears": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-wide numerical life expectancy is established for the umbrella family across all five size varieties.",
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-german-spitz",
          role: "verified",
          locator: "Grooming section: seasonal shedding and undercoat change",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Seasonal shedding and the need for increased brushing during coat changes are described in the breed profile.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A reliable breed-specific drooling assessment was not established.",
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-spitz-standard-97",
          role: "verified",
          locator: "Behaviour and character sections for German Spitz varieties",
        },
        {
          id: "american-kennel-club-german-spitz",
          role: "verified",
          locator: "Breed profile summary",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Traits summarise standard descriptions and kennel club profiles in original phrasing.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial 1–5 estimates, not scores from a standardised behavioural assessment. Individual dogs and varieties may differ.",
    },

    care: {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "A broad editorial starting point for the breed family; the reviewed standard does not prescribe a daily exercise level.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A single breed-wide daily exercise duration was not established; requirements vary by variety, age, health and individual dog.",
    },

    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine enrichment suggestions, not breed-standard requirements.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-german-spitz-standard-97",
          role: "verified",
          locator: "Coat sections describing the double coat and abundant furnishings",
        },
        {
          id: "american-kennel-club-german-spitz",
          role: "verified",
          locator: "Grooming section: coat maintenance and seasonal shedding",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Coat characteristics are verified; the grooming instructions are original practical guidance.",
    },

    "care.grooming.bathing": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General dog-coat care advice, not a breed-specific medical recommendation.",
    },

    "care.grooming.notes": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine grooming and hygiene advice for dogs with a dense coat.",
    },

    "care.training.difficulty": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-german-spitz-standard-97",
          role: "verified",
          locator: "Behaviour and character: attentiveness and trainability",
        },
        {
          id: "american-kennel-club-german-spitz",
          role: "verified",
          locator: "Breed profile summary",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "The difficulty label is a practical interpretation of the breed's alertness and trainability, not a formal test score.",
    },

    "care.training.tips": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General reward-based training advice.",
    },

    "care.training.socialization": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General puppy and dog socialization guidance.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The reviewed sources do not establish one apartment-suitability value for all five size varieties.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial suitability estimate. A yard does not replace walks, supervision, training or enrichment.",
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General environmental guidance; individual heat and cold tolerance depends on health, coat, acclimatisation and conditions.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A reliable breed-wide tolerance for time alone was not established.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Nutritional assessment guidelines and body condition scoring",
        },
      ],
      verifiedOn: null,
      note: "General canine nutrition advice following WSAVA guidelines; not a breed-specific feeding prescription.",
    },

    "nutrition.feedingFrequency": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Feeding frequency varies according to size variety, age, and individual veterinary recommendations.",
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-german-spitz",
          role: "verified",
          locator: "Health section: reported PRA, retinal dysplasia and patella luxation",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Reported conditions are presented as concerns seen in some dogs, not as a diagnosis or a prevalence estimate.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-german-spitz",
          role: "verified",
          locator: "Health section: PRA, RD and patella luxation",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "The list reflects conditions reported in the cited breed profile; it does not rank prevalence.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-german-spitz-health-testing",
          role: "verified",
          locator: "German Spitz: recommended patella, hip, elbow, ophthalmologist and multiplex DNA tests",
        },
        {
          id: "gsboc-german-spitz-health-testing",
          role: "verified",
          locator: "Health and testing: annual eye test, patella test and discussion of hip scoring",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Screening lists are recommendations from the cited organisations. Discuss which tests are appropriate for the individual dog's variety and family line.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive veterinary care guidance.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "Home dental prophylaxis and regular professional cleanings",
        },
      ],
      verifiedOn: null,
      note: "General canine dental-care guidance.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine ear-care guidance.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General skin and coat observation advice.",
    },

    suitability: {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial lifestyle guidance based on the breed's coat, alertness and variety-dependent size; not a validated suitability test.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A single first-time-owner suitability rating is not established for all German Spitz varieties and individual temperaments.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal family-with-children rating is not established; individual temperament, socialization and supervision matter.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability for senior owners depends on the variety, the individual dog's needs and the owner's circumstances.",
    },

    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial estimate that owners who can provide regular engagement and training may be a good match.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A single apartment-living rating would not accurately represent all five varieties.",
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-spitz-standard-97",
          role: "verified",
          locator: "Historical summary, utilization and variety sections",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Facts are paraphrased from the official standard in original wording.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-german-spitz-standard-97",
          role: "verified",
          locator: "Variety descriptions, size and weight sections",
        },
        {
          id: "american-kennel-club-german-spitz",
          role: "verified",
          locator: "Health and grooming sections",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Answers distinguish variety-specific standard facts from information that was not established in the reviewed sources.",
    },
  },

  updatedOn: "2026-11-10",
};
