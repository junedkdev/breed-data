import type { Breed } from "../schema/breed.types";

export const cesky_fousek: Breed = {
  slug: "cesky-fousek",
  name: "Cesky Fousek",
  scientificName: null,
  alternateNames: [
    "Český fousek",
    "Bohemian Wire-Haired Pointing Griffon",
    "Bohemian Wire-Haired Pointing Dog",
    "Barbu Tchèque",
  ],
  group: "FCI Group 7 — Pointing Dogs; Section 1.3 — Continental Pointing Dogs, Griffon type",
  origin: {
    country: "Czech Republic",
    region: null,
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cesky_Fousek_Flickr.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Cesky_Fousek_Flickr.jpg",
      title: "Cesky Fousek Flickr.jpg",
      description: "A Český Fousek.",
      creator: "Srinayan Puppala (Flickr username: TigerPuppala)",
      uploader: null,
      capturedOn: "2005-05-08",
      uploadedOn: null,
      width: 800,
      height: 571,
      licenseId: "cc-by-sa-2.0",
      attribution:
        "Photo by Srinayan Puppala (TigerPuppala), via Wikimedia Commons, licensed under CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0/). Indicate any changes; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-03",
    },
  ],
  overview: {
    summary:
      "The Cesky Fousek is a medium-sized, versatile wire-haired pointing dog from the Czech Republic. Bred to work across fields, woodland and water, it combines stamina and a weather-resistant coat with an alert, cooperative nature. Its characteristic beard and expressive eyebrows frame a practical working-dog appearance. This is an active hunting breed that needs purposeful exercise, training and close involvement with its household.",
    description:
      "Strong and athletic without being heavy, the Cesky Fousek has a firm body, a long, relatively narrow head and a distinctive three-part coat. A soft dense undercoat protects the skin, while a coarse close-fitting topcoat and harsher guard hairs provide a rugged outer covering. Longer, softer hair on the lips and lower jaw forms the beard, and the eyebrows are prominent. The breed was developed as an all-round pointing dog able to search and work on land and in water. It is generally described in its breed standard as trainable and devoted to its handler, but its working instincts and stamina mean it is best suited to people who can provide regular activity and structured outlets for its abilities.",
    history:
      "The Cesky Fousek was historically a widely kept wire-haired pointing dog in the area of present-day Czechia and Slovakia before the First World War. The war and its aftermath brought the breed close to extinction during the 1920s. A recovery programme used surviving typical dogs and planned breeding to re-establish the modern breed. The FCI recognises it as a Czech breed and classifies it among continental pointing dogs of the Griffon type. The FCI standard describes it as a versatile working dog and subjects the breed to a working trial.",
    originalPurpose:
      "A versatile pointing and hunting dog developed for work in fields, woodland and water.",
    currentRoles: [
      "Versatile hunting and pointing dog",
      "Field, woodland and water work",
      "Hunting-dog trials and working tests",
      "Active companion for experienced outdoor households",
      "Scent work, retrieving and structured gundog activities",
    ],
  },
  physical: {
    sizeCategory: "Medium-sized",
    height: {
      unit: "cm",
      male: { min: 60, max: 66 },
      female: { min: 58, max: 62 },
    },
    weight: {
      unit: "kg",
      male: { min: 28, max: 34 },
      female: { min: 22, max: 28 },
    },
    lifespanYears: null,
    coatType:
      "Three-part, weather-resistant coat consisting of a soft dense undercoat, a harsh coarse topcoat and longer, straight guard hairs.",
    coatLength:
      "The FCI standard describes an undercoat about 1,5 cm long, a topcoat 3 to 4 cm long and guard hairs 5 to 7 cm long. Hair is longer on the rear sides of the legs, forming feathering; the head has a beard and prominent eyebrows.",
    coatColors: [
      "Dark roan, with or without brown patches",
      "Brown with ticked markings on the forechest and lower part of the limbs",
      "Brown without markings",
    ],
    sheddingLevel:
      "Seasonal shedding is expected; the FCI standard notes that the dense undercoat is almost completely shed in summer. Individual shedding varies.",
    droolingLevel: null,
    distinctiveFeatures: [
      "Medium-sized, strong and enduring pointing-dog build",
      "Long, relatively narrow head with a moderately arched nasal bridge",
      "Dark-brown nose and deep-set amber to chestnut eyes",
      "High-set, broad-based ears that narrow towards rounded tips",
      "Characteristic beard formed by longer, softer hair on the lips and lower jaw",
      "Pronounced eyebrows pointing upwards",
      "Three-layer coat with a dense undercoat and harsh outer hair",
      "Compact feet with thick, coarse pads and a remnant of webbing between the toes",
    ],
  },
  temperament: {
    traits: [
      "Devoted and cooperative with its handler",
      "Generally described as readily trainable for a working dog",
      "Alert, energetic and purposeful when working",
      "Has an innate hunting response and may be sharp towards vermin",
      "Built for sustained activity across varied terrain",
      "Needs early, positive socialisation and consistent boundaries",
    ],
    scores: {
      affection: 4,
      withChildren: null,
      withDogs: null,
      withStrangers: null,
      protectiveness: null,
      independence: 3,
      trainability: 4,
      barking: null,
      energy: 5,
    },
  },
  care: {
    exercise: {
      level:
        "High. This is a versatile working pointer with substantial stamina and a need for purposeful daily activity. Leisurely walks alone are unlikely to meet the needs of a fit working-line dog.",
      minutesPerDay: null,
      activities: [
        "Long, varied walks and hikes appropriate to age and fitness",
        "Structured gundog training and field exercises",
        "Scent work, tracking and searching games",
        "Retrieving practice on land and, where safe, in water",
        "Swimming in safe, supervised conditions",
        "Recall and off-lead skills practised in secure areas",
        "Mental enrichment and calm settling exercises between active periods",
      ],
    },
    grooming: {
      level:
        "Moderate. The harsh working coat is practical, but it still needs regular inspection and maintenance, particularly after outdoor work.",
      brushing:
        "Brush and comb regularly to remove debris and loose undercoat, paying attention to the beard, feathering and areas where burrs or vegetation can collect. Increase coat checks after field or woodland outings. The breed's dense undercoat sheds heavily in summer, so more frequent grooming may be needed during that period.",
      bathing:
        "Bathe when genuinely dirty or after exposure to substances that should be washed from the coat. Use a dog-safe shampoo, rinse thoroughly and dry the coat well, especially after swimming or wet-weather work. Avoid excessive bathing that strips the coat unnecessarily.",
      notes: [
        "Inspect the beard and leg feathering after walks for seeds, burrs and tangles.",
        "Check the coat and skin after hunting or woodland work for ticks, cuts and foreign material.",
        "Dry the ears and coat after swimming or prolonged wet-weather activity.",
        "Trim nails as needed and check pads for cracks or injuries.",
        "Brush teeth regularly with dog-specific toothpaste.",
        "The standard describes a dense undercoat that is almost completely shed in summer; plan for seasonal coat maintenance.",
      ],
    },
    training: {
      difficulty:
        "Moderate to demanding for a pet-only home; the breed is described as trainable, but its working drive, stamina and hunting instincts call for consistent handling and meaningful activities.",
      tips: [
        "Begin reward-based training, recall and lead manners early.",
        "Use short, purposeful sessions and build skills gradually around real-world distractions.",
        "Provide structured scent, search and retrieving activities rather than relying only on free exercise.",
        "Train a reliable recall before allowing off-lead freedom in unfenced areas.",
        "Teach calm behaviour and settling as deliberately as active working skills.",
        "Manage access to wildlife and small animals; a strong hunting response should not be assumed to disappear through obedience training.",
        "Introduce grooming, ear checks, paw handling and post-outing inspections from puppyhood.",
      ],
      socialization:
        "Introduce the puppy positively and progressively to different people, stable dogs, surfaces, sounds, vehicles and outdoor environments. Practise calm behaviour around livestock and wildlife at a safe distance, and supervise all interactions with children and other animals. Socialisation should build confidence without forcing close contact or overwhelming the dog.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,
      climates: [
        "The dense undercoat and harsh outer coat are described as protective against dampness and suited to demanding outdoor work.",
        "Provide shade, ventilation and fresh water in hot weather, and avoid strenuous activity during the hottest part of the day.",
        "In cold or wet conditions, dry the dog after work and check for chill, skin irritation and trapped moisture.",
      ],
      aloneTimeTolerance:
        null,
    },
  },
  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate to the dog's life stage, body condition, workload and veterinary needs.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Adjust food quantity to age, body condition and activity rather than assuming every dog has the same calorie requirement. Working dogs may need different energy intake on demanding days than during rest periods. Measure meals, account for training rewards, provide constant access to clean water and ask a veterinarian to assess body condition and diet when workload changes.",
    considerations: [
      "Match energy intake to actual workload; activity can vary substantially between working and rest days.",
      "Maintain a lean, fit body condition without underfeeding a growing puppy or active adult.",
      "Count training treats and food rewards as part of the daily ration.",
      "Provide water before, during suitable breaks and after exercise, with care taken around strenuous work and feeding routines.",
      "Discuss any persistent digestive signs, weight changes or supplements with a veterinarian.",
    ],
    note:
      "The breed standards and breed-club resources reviewed do not establish a universal calorie target or feeding schedule for all Cesky Fouseks.",
  },
  health: {
    overview:
      "Published breed research has identified atypical recurrent flank alopecia (aRFA) as a notable health concern in the Cesky Fousek. A 2022 study examined 216 dogs and reported seasonal, non-inflammatory hair-loss patterns, with a complex genetic contribution suggested by the findings; the specific causal variants were not established. This does not mean every Cesky Fousek will develop the condition, and the study does not provide a simple predictive test. The breed club in North America also collects health information to monitor the population. Ask breeders about family history, skin or coat changes and the health information available for the parents. Routine veterinary care remains important for all dogs.",
    commonConditions: [
      "Atypical recurrent flank alopecia (aRFA): a breed-associated, often seasonal pattern of non-inflammatory hair loss studied in Cesky Fouseks. Its genetic basis appears complex and is not fully resolved.",
    ],
    preventiveCare: [
      "Ask the breeder about aRFA or recurrent seasonal hair loss in the puppy's parents, close relatives and previous litters.",
      "Request available health records and ask how the breeder participates in breed-club health monitoring.",
      "Arrange routine veterinary examinations and locally appropriate parasite prevention.",
      "Check the skin and coat regularly, especially after field work, and seek veterinary advice for persistent or recurring hair loss.",
      "Maintain a healthy body condition and condition the dog gradually for demanding work.",
      "Check ears, paws and coat after swimming, hunting or woodland activity.",
    ],
    recommendedScreenings: [
      "Discuss hip evaluation with the breeder and veterinarian; the Cesky Fousek North America breeding programme states that dogs considered for breeding undergo PennHIP evaluation.",
      "Ask whether the breeder has documented aRFA history in the family and participates in the breed-club health survey.",
      "No validated, universally recommended genetic screening test for aRFA was established by the study reviewed; do not treat a research association as a clinical diagnostic test.",
    ],
    dentalCare:
      "Brush the teeth regularly with dog-specific toothpaste and arrange veterinary dental checks as advised. Do not use human toothpaste.",
    earCare:
      "The ears are pendant and should be checked routinely, especially after swimming or work in wet vegetation. Keep them dry and seek veterinary advice for persistent redness, odour, discharge, head-shaking or discomfort.",
    skinCare:
      "Inspect the skin during regular grooming for ticks, wounds, irritation and recurring areas of hair loss. Seasonal or persistent coat loss should be assessed by a veterinarian rather than assumed to be aRFA, since other skin and endocrine conditions can look similar.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "Experienced owners who enjoy training and outdoor activities",
      "People who can provide sustained daily exercise and mental work",
      "Hunting households seeking a versatile pointing dog for field, woodland and water",
      "Owners interested in scent work, retrieving and gundog activities",
      "Homes able to provide companionship, structure and regular coat and health checks",
    ],
    notIdealFor: [
      "Households seeking a low-energy or mostly sedentary companion",
      "Owners unable to provide purposeful activity and consistent training",
      "Homes that cannot safely manage strong interest in wildlife and small animals",
      "People who expect the dog to exercise itself in a yard without interaction",
      "Households wanting a breed with a well-established, simple health-screening profile and no known breed-specific research concerns",
    ],
  },
  funFacts: [
    "The FCI lists the Cesky Fousek as breed number 245.",
    "The breed's name is commonly rendered in English as Bohemian Wire-Haired Pointing Griffon.",
    "Its coat has three distinct hair types: undercoat, topcoat and guard hair.",
    "The beard is formed by longer, softer hair on the lower jaw and lips.",
    "The breed standard describes the dog as a versatile worker in fields, woodland and water.",
    "A 2022 study investigated atypical recurrent flank alopecia using data from 216 Cesky Fouseks.",
  ],
  faq: [
    {
      question: "Where does the Cesky Fousek come from?",
      answer:
        "The Cesky Fousek originates in the Czech Republic. It was historically common in the area of present-day Czechia and Slovakia before the First World War and was later restored through planned breeding.",
    },
    {
      question: "What was the Cesky Fousek bred to do?",
      answer:
        "It was developed as a versatile pointing and hunting dog for work in fields, woodland and water. The FCI classifies it among continental pointing dogs and requires a working trial for the breed.",
    },
    {
      question: "How tall is a Cesky Fousek?",
      answer:
        "The FCI standard gives a height of 60 to 66 cm for dogs and 58 to 62 cm for bitches, measured at the withers.",
    },
    {
      question: "How much does a Cesky Fousek weigh?",
      answer:
        "The FCI standard gives 28 to 34 kg for dogs and 22 to 28 kg for bitches.",
    },
    {
      question: "What coat colours are accepted?",
      answer:
        "The accepted colours are dark roan with or without brown patches, brown with ticked markings on the forechest and lower limbs, and brown without markings.",
    },
    {
      question: "Does the Cesky Fousek need a lot of exercise?",
      answer:
        "Yes. It is a high-stamina working pointer bred for varied outdoor tasks. It needs regular purposeful exercise and mental work such as scent activities, retrieving and gundog training. A universal daily minute target is not established by the breed sources reviewed.",
    },
    {
      question: "Does the Cesky Fousek have any known health concerns?",
      answer:
        "Research has identified atypical recurrent flank alopecia, a seasonal pattern of hair loss, as a breed-associated concern. Its genetic basis appears complex and is not fully understood. Ask breeders about family history and discuss recurring coat changes with a veterinarian.",
    },
    {
      question: "Is the Cesky Fousek suitable for apartment living?",
      answer:
        "A reliable breed-specific rating for apartment living was not established in the sources reviewed. Its high activity needs mean that any home must be able to provide substantial daily exercise, training and enrichment.",
    },
  ],
  references: [
    "fci-cesky-fousek-standard-245",
    "fci-cesky-fousek-nomenclature-245",
    "ukc-cesky-fousek-standard",
    "cfna-cesky-fousek-health-survey",
    "cfna-cesky-fousek-health-monitoring",
    "neradilova-2022-cesky-fousek-flank-alopecia",
    "commons-cesky-fousek-flickr-photo",
  ],
  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A breed-specific scientific name is not applicable or established in the breed standards reviewed.",
    },
    alternateNames: {
      reliability: "official_standard",
      sources: [
        { id: "fci-cesky-fousek-standard-245", role: "verified", locator: "Breed title and recognised alternative English name" },
        { id: "fci-cesky-fousek-nomenclature-245", role: "verified", locator: "Breed nomenclature and language names" },
      ],
      verifiedOn: "2026-11-03",
      note: "Includes the Czech name and standard English or French names shown by the breed registries.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        { id: "fci-cesky-fousek-standard-245", role: "verified", locator: "FCI classification" },
      ],
      verifiedOn: "2026-11-03",
      note: null,
    },
    origin: {
      reliability: "official_standard",
      sources: [
        { id: "fci-cesky-fousek-standard-245", role: "verified", locator: "Origin" },
        { id: "fci-cesky-fousek-nomenclature-245", role: "verified", locator: "Country of origin" },
      ],
      verifiedOn: "2026-11-03",
      note: "The current country of origin is recorded as the Czech Republic; the standard notes the former Czechoslovak context.",
    },
    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The official standard identifies the country but does not establish a narrower region of origin.",
    },
    overview: {
      reliability: "official_standard",
      sources: [
        { id: "fci-cesky-fousek-standard-245", role: "verified", locator: "General appearance, utilization and brief historical summary" },
        { id: "fci-cesky-fousek-nomenclature-245", role: "verified", locator: "Breed status, group and country of origin" },
      ],
      verifiedOn: "2026-11-03",
      note: "Descriptions are original summaries of the breed standard and official registry information.",
    },
    "overview.history": {
      reliability: "official_standard",
      sources: [
        { id: "fci-cesky-fousek-standard-245", role: "verified", locator: "Brief historical summary" },
        { id: "ukc-cesky-fousek-standard", role: "cited", locator: "History" },
      ],
      verifiedOn: "2026-11-03",
      note: "Historical account is limited to details stated by the breed standards.",
    },
    physical: {
      reliability: "official_standard",
      sources: [
        { id: "fci-cesky-fousek-standard-245", role: "verified", locator: "General appearance, coat, colour, size and weight" },
      ],
      verifiedOn: "2026-11-03",
      note: "Breed-standard physical characteristics and measurements.",
    },
    "physical.lifespanYears": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific lifespan range was established in the sources reviewed.",
    },
    "physical.sheddingLevel": {
      reliability: "official_standard",
      sources: [
        { id: "fci-cesky-fousek-standard-245", role: "verified", locator: "Coat, undercoat description" },
      ],
      verifiedOn: "2026-11-03",
      note: "Seasonal undercoat shedding is explicitly described in the standard; overall shedding intensity is not quantified.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling level was established.",
    },
    temperament: {
      reliability: "official_standard",
      sources: [
        { id: "fci-cesky-fousek-standard-245", role: "verified", locator: "General appearance and working characteristics" },
        { id: "ukc-cesky-fousek-standard", role: "verified", locator: "Characteristics" },
      ],
      verifiedOn: "2026-11-03",
      note: "Breed-level working temperament; individual behaviour varies with genetics, training and experience.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        { id: "fci-cesky-fousek-standard-245", role: "cited", locator: "Trainability, devotion and hunting characteristics" },
        { id: "ukc-cesky-fousek-standard", role: "cited", locator: "Characteristics" },
      ],
      verifiedOn: null,
      note: "Scores are editorial 1–5 estimates, not validated behavioural measurements. Unknown dimensions remain null.",
    },
    "temperament.scores.withChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific evidence establishes a with-children score.",
    },
    "temperament.scores.withDogs": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific evidence establishes a with-dogs score.",
    },
    "temperament.scores.withStrangers": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific evidence establishes a with-strangers score.",
    },
    "temperament.scores.protectiveness": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific evidence establishes a protectiveness score.",
    },
    "temperament.scores.barking": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific evidence establishes a barking score.",
    },
    care: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Care recommendations combine the breed's documented working characteristics with general responsible dog-care guidance.",
    },
    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        { id: "fci-cesky-fousek-standard-245", role: "verified", locator: "Utilization and field, water and woodland working abilities" },
        { id: "cfna-cesky-fousek-health-monitoring", role: "cited", locator: "Working tests and breeding programme" },
      ],
      verifiedOn: "2026-11-03",
      note: "High activity needs are inferred from the breed's stated working purpose and abilities; no universal daily duration is asserted.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable universal daily exercise duration in minutes was found.",
    },
    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        { id: "fci-cesky-fousek-standard-245", role: "verified", locator: "Coat structure and seasonal undercoat shedding" },
      ],
      verifiedOn: "2026-11-03",
      note: "Grooming advice is tailored to the documented three-part coat; frequency recommendations are practical care guidance.",
    },
    "care.training": {
      reliability: "reliable_source",
      sources: [
        { id: "fci-cesky-fousek-standard-245", role: "verified", locator: "Trainability and pointing-dog working purpose" },
        { id: "ukc-cesky-fousek-standard", role: "verified", locator: "Characteristics and working-dog description" },
      ],
      verifiedOn: "2026-11-03",
      note: "Training advice reflects the breed's working instincts; individual training outcomes vary.",
    },
    "care.livingEnvironment": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Housing suitability depends on the dog's activity needs, routine and individual behaviour.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific source establishes apartment suitability as a universal yes-or-no rating.",
    },
    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        { id: "fci-cesky-fousek-standard-245", role: "cited", locator: "Working-dog activity and outdoor purpose" },
      ],
      verifiedOn: null,
      note: "A secure yard can be useful for an active dog but does not replace daily exercise, training or supervision.",
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific alone-time duration was established.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine nutrition guidance; no breed-specific calorie target or feeding schedule is asserted.",
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal breed-specific puppy feeding schedule was established.",
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal breed-specific adult feeding schedule was established.",
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal breed-specific senior feeding schedule was established.",
    },
    health: {
      reliability: "reliable_source",
      sources: [
        { id: "neradilova-2022-cesky-fousek-flank-alopecia", role: "verified", locator: "Abstract, results and conclusions: atypical recurrent flank alopecia in the Cesky Fousek" },
        { id: "cfna-cesky-fousek-health-survey", role: "cited", locator: "Breed health survey and monitoring rationale" },
      ],
      verifiedOn: "2026-11-03",
      note: "Health information is limited to a published breed-specific research finding and the breed club's monitoring programme; it is not a complete disease-prevalence profile.",
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        { id: "neradilova-2022-cesky-fousek-flank-alopecia", role: "verified", locator: "Abstract and conclusions: atypical recurrent flank alopecia" },
      ],
      verifiedOn: "2026-11-03",
      note: "aRFA is a documented breed-associated research concern, not a claim that all dogs are affected or that prevalence is known for every population.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        { id: "cfna-cesky-fousek-health-monitoring", role: "verified", locator: "PennHIP evaluation stated for dogs considered for the breeding programme" },
        { id: "cfna-cesky-fousek-health-survey", role: "verified", locator: "Health survey categories and monitoring programme" },
        { id: "neradilova-2022-cesky-fousek-flank-alopecia", role: "verified", locator: "Discussion of aRFA research limitations and genetic uncertainty" },
      ],
      verifiedOn: "2026-11-03",
      note: "PennHIP is described as part of the CFNA breeding programme, not as a universal requirement in every country. aRFA family-history discussion is not a validated screening test.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General veterinary preventive-care guidance.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine dental-care guidance.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General ear-care guidance, with routine checks after water work.",
    },
    "health.skinCare": {
      reliability: "reliable_source",
      sources: [
        { id: "neradilova-2022-cesky-fousek-flank-alopecia", role: "verified", locator: "Clinical description of seasonal hair-loss patterns" },
      ],
      verifiedOn: "2026-11-03",
      note: "Advice to investigate recurrent hair loss reflects the published breed-specific aRFA research; other causes must be ruled out by a veterinarian.",
    },
    suitability: {
      reliability: "estimate",
      sources: [
        { id: "fci-cesky-fousek-standard-245", role: "cited", locator: "Versatile pointing-dog working purpose and stamina" },
        { id: "cfna-cesky-fousek-health-monitoring", role: "cited", locator: "Working tests and breeding programme" },
      ],
      verifiedOn: null,
      note: "Household-fit guidance is an editorial assessment based on the documented working purpose and activity needs, not a validated suitability test.",
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a universal first-time-owner rating.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a universal suitability rating for families with children.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a universal senior-owner suitability rating.",
    },
    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [
        { id: "fci-cesky-fousek-standard-245", role: "cited", locator: "Versatile working and pointing-dog purpose" },
      ],
      verifiedOn: null,
      note: "Editorial fit assessment based on the breed's documented working role and stamina.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a universal apartment-living suitability rating.",
    },
    funFacts: {
      reliability: "official_standard",
      sources: [
        { id: "fci-cesky-fousek-standard-245", role: "verified", locator: "FCI breed number, coat, history and utilization" },
        { id: "neradilova-2022-cesky-fousek-flank-alopecia", role: "verified", locator: "Study population and research findings" },
      ],
      verifiedOn: "2026-11-03",
      note: "Facts are drawn from the official standard and published research.",
    },
    faq: {
      reliability: "official_standard",
      sources: [
        { id: "fci-cesky-fousek-standard-245", role: "verified", locator: "Origin, history, utilization, measurements and colours" },
        { id: "fci-cesky-fousek-nomenclature-245", role: "verified", locator: "Breed classification and origin" },
        { id: "neradilova-2022-cesky-fousek-flank-alopecia", role: "verified", locator: "aRFA findings" },
      ],
      verifiedOn: "2026-11-03",
      note: "Answers summarise verified breed-standard facts and published health research; care recommendations are qualified where evidence is limited.",
    },
  },
  updatedOn: "2026-11-03",
};
