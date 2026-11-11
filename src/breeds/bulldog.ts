import type { Breed } from "../schema/breed.types";

export const bulldog: Breed = {
  slug: "bulldog",
  name: "Bulldog",
  scientificName: null,
  alternateNames: ["English Bulldog", "British Bulldog"],
  group: "Molossoid Breeds, Mastiff Type",
  origin: {
    country: "Great Britain",
    region: null,
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/English_Bulldog.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:English_Bulldog.jpg",
      title: "English Bulldog.jpg",
      description: "Snoring English Bulldog",
      creator: "Oxfordian Kissuth",
      uploader: "Oxfordian Kissuth",
      capturedOn: "2010-05-22",
      uploadedOn: "2010-05-22",
      width: 2866,
      height: 2157,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Oxfordian Kissuth, Wikimedia Commons, CC BY-SA 3.0. Changes, if any, must be indicated; adaptations must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-11",
    },
  ],
  overview: {
    summary:
      "A heavy-set, low-slung British companion dog known for its broad shoulders, distinctive wrinkled brow, pushed-in muzzle, and gentle, steadfast temperament.",
    description:
      "Characterised by a wide, compact frame and powerful muscularity, the Bulldog presents an unmistakable silhouette with strong limbs, a deep chest, and a wide-set front. Its short, glossy coat lies close to the body, complementing a massive head featuring loose facial creases, an undershot lower jaw, small rose-shaped ears, and a characteristic rolling gait. Despite a formidable historical origin, modern dogs are typically calm, loyal, and quietly affectionate companions that enjoy close contact with their families. Because of their brachycephalic facial structure and heavy body plan, owners must pay diligent attention to respiratory ease, heat avoidance, weight management, and daily hygiene of facial and tail folds.",
    history:
      "Originating in Great Britain from ancient mastiff-type war and guarding dogs, the breed was historically used in bull-baiting arenas. Following the legal prohibition of animal baiting sports in 1835, dedicated breeders transformed the Bulldog from an aggressive working fighter into a gentle, mild-mannered household companion and show exhibition dog. Twentieth- and twenty-first-century breeding guidelines have increasingly prioritised physical soundness, free breathing, and overall welfare to counteract exaggerated anatomical traits.",
    originalPurpose:
      "Bull-baiting and arena combat; subsequently refined as a calm domestic companion and exhibition dog.",
    currentRoles: [
      "Devoted family companion",
      "Calm household pet suited to gentle routines",
      "Conformation exhibition",
    ],
  },
  physical: {
    sizeCategory: "Medium",
    height: {
      unit: null,
      male: null,
      female: null,
    },
    weight: {
      unit: "kg",
      male: {
        min: 25,
        max: 25,
      },
      female: {
        min: 23,
        max: 23,
      },
    },
    lifespanYears: {
      min: 8,
      max: 10,
    },
    coatType: "Short, smooth, close-lying coat with a fine texture.",
    coatLength: "Short and smooth across the body.",
    coatColors: [
      "Red",
      "Fawn",
      "White",
      "Red and white",
      "Fawn and white",
      "Red brindle",
      "Fawn brindle",
      "Red brindle and white",
      "Fawn brindle and white",
      "Pied patterns using accepted colours",
    ],
    sheddingLevel:
      "Regular shedding; brushing several times a week helps remove loose hair and keep the coat in good condition.",
    droolingLevel: null,
    distinctiveFeatures: [
      "Broad, square head with prominent cheeks",
      "Short, broad muzzle and an undershot lower jaw",
      "Large, broad black nose with wide, open nostrils to facilitate unobstructed airflow",
      "Small, thin rose-shaped ears set high and wide",
      "Round, wide-set, dark eyes with no visible white when looking forward",
      "Broad chest, compact torso, and heavy, muscular front quarters",
      "Loose skin and facial folds requiring regular hygiene and drying",
      "Short, smooth coat in solid, brindle, or pied variations",
      "Characteristic short, rolling gait resulting from wide front and narrower rear assembly",
    ],
  },
  temperament: {
    traits: [
      "Affectionate and companionable",
      "Calm and steady",
      "Courageous and resolute",
      "Loyal and dependable",
      "Determined and deliberate",
      "Sensitive to heat and strenuous exertion",
    ],
    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 3,
      independence: 3,
      trainability: 3,
      barking: 2,
      energy: 2,
    },
  },
  care: {
    exercise: {
      level:
        "Low to moderate. Provide regular, gentle activity suited to the individual dog. Avoid forcing exercise in hot or humid conditions, and stop if breathing becomes difficult or the dog shows signs of overheating.",
      minutesPerDay: null,
      activities: [
        "Short, relaxed walks during the cooler morning or evening hours",
        "Gentle indoor playtime with frequent rest pauses",
        "Reward-based training games focused on basic manners",
        "Low-impact mental enrichment and puzzle feeders",
        "Leisurely sniffing walks tailored to personal breathing comfort",
      ],
    },
    grooming: {
      level:
        "Low coat-maintenance needs, with extra routine attention required for skin folds, paws, and the area beneath the tail.",
      brushing:
        "Brush the short coat several times a week with a soft rubber curry brush or grooming mitt to remove loose hair and stimulate natural oils.",
      bathing:
        "Bathe when necessary using a gentle, hypoallergenic dog shampoo. Dry all skin folds and body creases completely to avoid moisture buildup.",
      notes: [
        "Inspect facial wrinkles and nose ropes daily; clean and dry them thoroughly to prevent moisture accumulation.",
        "Check beneath the tail pocket regularly for redness, debris, or dampness.",
        "Maintain comfortable nail length to support correct foot placement.",
        "Brush teeth routinely with canine-specific dental products.",
        "Avoid vigorous exercise in hot or humid weather, providing immediate access to air conditioning and fresh water.",
      ],
    },
    training: {
      difficulty:
        "Moderate. Responds best to patient, reward-based sessions rather than repetitive or physically demanding drills.",
      tips: [
        "Keep training intervals short, positive, and focused on essential manners.",
        "Utilise high-value food rewards while monitoring overall caloric intake.",
        "Practice gentle handling and cooperative care for wrinkle and paw cleaning from puppyhood.",
        "Never train outdoors in warm, humid weather.",
        "Cease exercise immediately if breathing becomes raspy, laboured, or unusually loud.",
      ],
      socialization:
        "Introduce puppies gradually to various people, quiet surfaces, and well-mannered dogs to foster a confident, unflappable adult temperament.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: null,
      climates: [
        "Highly vulnerable to warm, humid conditions due to compromised panting efficiency.",
        "Requires reliable indoor temperature regulation and shade during summer months.",
        "Never leave in a parked vehicle or poorly ventilated environment.",
        "Tolerates cool temperate weather well, but protect from freezing dampness.",
      ],
      aloneTimeTolerance: null,
    },
  },
  nutrition: {
    dietType:
      "A complete and balanced diet appropriate to the dog's life stage, body condition, and activity level.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Measure food portions carefully to maintain a lean body condition score. Because excess weight exacerbates respiratory and orthopedic difficulties, calorie intake should be strictly monitored in consultation with a veterinarian.",
    considerations: [
      "Bulldogs readily gain excess body mass, which significantly impairs breathing and mobility.",
      "Factor training treats directly into the total daily food allocation.",
      "Ensure clean drinking water is accessible at all times in a wide, shallow bowl suited to a flat face.",
      "Avoid strenuous physical exertion immediately before and after meal times.",
    ],
    note:
      "Individual caloric requirements depend on age, metabolic rate, and physical soundness; consult a veterinarian for tailored nutritional plans.",
  },
  health: {
    overview:
      "Bulldogs have important health and welfare considerations associated with their brachycephalic skull and compact conformation. Epidemiological research on clinical veterinary records documents increased relative risks for brachycephalic obstructive airway syndrome (BOAS), skin-fold dermatitis, cherry eye, entropion, dry eye, and interdigital cysts. Pre-breeding diagnostic examinations assess airway dimensions, cardiac function, and joint integrity to inform responsible breeding and preventive management.",
    commonConditions: [
      "Brachycephalic obstructive airway syndrome (BOAS) — upper airway stenosis and elongated soft palate impairing respiration and heat regulation.",
      "Skin-fold dermatitis — bacterial or fungal intertrigo within facial creases and tail pockets.",
      "Ophthalmic disorders — including prolapse of the third eyelid gland (cherry eye), entropion, and keratoconjunctivitis sicca.",
      "Tracheal hypoplasia — congenital narrowing of the windpipe requiring radiographic evaluation.",
      "Patellar luxation and congenital heart anomalies — musculoskeletal and cardiovascular conditions monitored through clinical health screening.",
      "Interdigital furunculosis — inflammatory cysts developing between the toes.",
    ],
    preventiveCare: [
      "Schedule regular veterinary examinations focusing on respiratory airflow, eyes, skin folds, and weight management.",
      "Seek prompt medical advice for loud breathing, persistent snoring with effort, exercise intolerance, or blueish gums.",
      "Practice strict heat prevention, ensuring cool indoor environments during warm seasons.",
      "Cleanse and dry facial wrinkles and the tail pocket daily.",
      "Maintain a strictly controlled, lean body weight to alleviate joint and airway stress.",
    ],
    recommendedScreenings: [
      "Clinical patellar evaluation by a veterinarian.",
      "Comprehensive cardiac examination.",
      "Radiographic evaluation for tracheal hypoplasia.",
    ],
    dentalCare:
      "Brush teeth regularly using dog-formulated enzymatic toothpaste, arranging veterinary dental evaluations to manage crowded incisors resulting from an undershot jaw.",
    earCare:
      "Inspect rose ears weekly for redness, discharge, or odor, cleansing gently with a veterinarian-approved ear solution when needed.",
    skinCare:
      "Perform daily inspection and gentle drying of facial folds, tail base, and interdigital spaces, applying veterinary-prescribed topical cleansers if irritation emerges.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: null,
    apartmentLiving: null,
    idealFor: [
      "Households seeking a calm, loyal companion that enjoys indoor family relaxation",
      "Owners prepared to perform daily skin-fold hygiene and wrinkle drying",
      "People who can provide temperature-controlled living spaces and gentle exercise",
      "Owners willing to manage potential ongoing veterinary requirements responsibly",
    ],
    notIdealFor: [
      "People seeking a companion for running, hiking, or sustained outdoor recreation",
      "Households unable to provide cool air conditioning during warm weather",
      "Owners unable to maintain meticulous daily skin-fold care",
      "Anyone prioritising exaggerated facial flatness or extreme wrinkles over health and comfort",
    ],
  },
  funFacts: [
    "The Bulldog was historically developed in Great Britain for arena bull-baiting before transitioning into a companion breed following nineteenth-century animal welfare reforms.",
    "Its distinct rolling gait originates from a broad, heavy front combined with a lighter, slightly narrower hind assembly.",
    "Facial wrinkles and skin folds are functional anatomical features that require dedicated daily cleansing and drying.",
  ],
  faq: [
    {
      question: "How much does a Bulldog weigh?",
      answer:
        "Codified target weights are 25 kg for adult males and 23 kg for adult females. An individual dog's healthy weight depends on frame size and muscular conditioning.",
    },
    {
      question: "What is the typical lifespan of a Bulldog?",
      answer:
        "Published kennel club breed profiles cite an average life expectancy of 8 to 10 years, with individual longevity influenced by respiratory health, weight management, and preventive veterinary care.",
    },
    {
      question: "How much exercise does a Bulldog need?",
      answer:
        "Most Bulldogs thrive on gentle, low-impact exercise, such as two short daily walks during the cool hours, avoiding heat, humidity, and any activity that induces respiratory strain.",
    },
    {
      question: "Why is health screening essential for Bulldogs?",
      answer:
        "Health monitoring protocols recommend clinical patella evaluation, comprehensive cardiac examination, and radiographic evaluation for tracheal hypoplasia. Prospective owners should discuss diagnostic clearances with a veterinarian.",
    },
    {
      question: "How should an owner care for a Bulldog's facial wrinkles?",
      answer:
        "Facial folds and the tail pocket should be inspected daily, wiped clean of debris, and dried thoroughly to prevent bacterial and fungal skin-fold infections.",
    },
    {
      question: "Can Bulldogs tolerate hot weather?",
      answer:
        "No. Due to their shortened facial anatomy, Bulldogs have difficulty dissipating body heat through panting and are highly susceptible to fatal heat stroke. They require air-conditioned indoor environments during warm weather.",
    },
    {
      question: "Are Bulldogs suitable for households with children?",
      answer:
        "Many Bulldogs are gentle and patient with children, but all interactions should be supervised, and children should be taught to respect the dog's resting needs and exercise limitations.",
    },
  ],
  references: [
    "fci-bulldog-standard-149",
    "fci-bulldog-nomenclature-149",
    "royal-kennel-club-bulldog-standard",
    "american-kennel-club-bulldog",
    "akc-coton-de-tulear-health-testing-recommendations",
    "bulldog-club-of-america-health-testing",
    "rvc-vetcompass-english-bulldog-study",
    "wikimedia-english-bulldog-oxfordian-kissuth",
    "the-dog-api",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
  ],
  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bulldog",
          role: "verified",
          locator: "Breed profile: English Bulldog alternate name",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names: English Bulldog, British Bulldog",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Uses documented alternate designations.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Standard taxonomy classifies domestic dogs as Canis lupus familiaris; no unique taxonomic name applies specifically to this breed.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bulldog-nomenclature-149",
          role: "verified",
          locator: "Group 2, Section 2.1 Molossoid breeds, Mastiff type",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Uses the Molossoid Mastiff-type classification.",
    },
    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bulldog-standard-149",
          role: "verified",
          locator: "Origin: Great Britain; Brief historical summary",
        },
        {
          id: "royal-kennel-club-bulldog-standard",
          role: "verified",
          locator: "Country of origin: Great Britain",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "The official breed standard identifies Great Britain as the origin.",
    },
    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Official breed standards identify Great Britain as the country of origin without establishing a single regional subdivision.",
    },
    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bulldog-standard-149",
          role: "verified",
          locator: "General appearance, temperament, historical summary, and utilisation",
        },
        {
          id: "royal-kennel-club-bulldog-standard",
          role: "verified",
          locator: "General appearance, temperament, and characteristics",
        },
        {
          id: "american-kennel-club-bulldog",
          role: "verified",
          locator: "About the Breed and History",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Descriptions are original summaries of documented history, characteristics, and welfare priorities.",
    },
    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bulldog-standard-149",
          role: "verified",
          locator: "General appearance, head, body, coat, colour, movement, and weight",
        },
        {
          id: "royal-kennel-club-bulldog-standard",
          role: "verified",
          locator: "General appearance, head and skull, coat, colours, and size",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Physical descriptions follow official breed standards.",
    },
    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-bulldog-standard-149",
          role: "cited",
          locator: "General appearance and weight",
        },
      ],
      verifiedOn: null,
      note: "Editorial size classification inferred from adult weight standards and compact stature.",
    },
    "physical.height": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Neither the country-of-origin standard (Royal Kennel Club) nor international standard (FCI) specifies a numeric height range. The Dog API records an empirical range of 36–38 cm, but this remains uncodified.",
    },
    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bulldog-standard-149",
          role: "verified",
          locator: "WEIGHT: Dogs 25 kgs; Bitches 23 kgs",
        },
        {
          id: "royal-kennel-club-bulldog-standard",
          role: "verified",
          locator: "Weight: Dogs: 25 kgs (55 lbs); Bitches: 23 kgs (50 lbs)",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "The official breed standards specify discrete target weights of 25 kg for males and 23 kg for females. Kilograms are retained without conversion.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bulldog",
          role: "verified",
          locator: "Average sizes and life expectancy: 8–10 years",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span: 8 - 10 years",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Published breed profiles cite a life expectancy of 8–10 years.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bulldog-standard-149",
          role: "verified",
          locator: "Coat: hair short, close, smooth",
        },
      ],
      verifiedOn: "2026-11-11",
      note: null,
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bulldog-standard-149",
          role: "verified",
          locator: "Colour section",
        },
        {
          id: "royal-kennel-club-bulldog-standard",
          role: "verified",
          locator: "Colour section",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Colours follow the official standards.",
    },
    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bulldog",
          role: "verified",
          locator: "Grooming: brushing and heavier shedding periods",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Describes routine coat shedding and grooming needs.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling measurement was established.",
    },
    temperament: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bulldog-standard-149",
          role: "verified",
          locator: "Behaviour / Temperament",
        },
        {
          id: "royal-kennel-club-bulldog-standard",
          role: "verified",
          locator: "Characteristics and temperament",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Temperament traits describe common breed tendencies.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-bulldog",
          role: "cited",
          locator: "Breed traits and characteristics",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1–5 scores based on general breed descriptions.",
    },
    care: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bulldog",
          role: "verified",
          locator: "Exercise, heat precautions, grooming, and skin-fold care",
        },
        {
          id: "bulldog-club-of-america-health-testing",
          role: "verified",
          locator: "Breed health resources and screening recommendations",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Care advice reflects practical husbandry tailored to brachycephalic dogs.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No single daily minute range is assigned because exercise tolerance varies significantly based on respiratory function, temperature, and age.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable universal apartment-suitability verdict was established.",
    },
    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A yard alone does not establish suitability; individual health, temperature regulation, and supervision matter.",
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific tolerance for time alone was established.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Nutritional assessment guidelines and body condition scoring",
        },
        {
          id: "american-kennel-club-bulldog",
          role: "cited",
          locator: "Nutrition and maintaining a healthy body condition",
        },
      ],
      verifiedOn: null,
      note: "General feeding advice following WSAVA guidelines; not a breed-specific prescription.",
    },
    "nutrition.feedingFrequency": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Feeding frequency and portion sizes vary according to individual age, metabolism, and veterinary guidance.",
    },
    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "rvc-vetcompass-english-bulldog-study",
          role: "verified",
          locator: "Results and discussion: disorder predispositions in English Bulldogs",
        },
        {
          id: "bulldog-club-of-america-health-testing",
          role: "verified",
          locator: "Health testing recommendations",
        },
        {
          id: "american-kennel-club-bulldog",
          role: "verified",
          locator: "Health and heat precautions",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Separates population-level disorder associations and pre-breeding screening recommendations from an individual dog's diagnosis.",
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rvc-vetcompass-english-bulldog-study",
          role: "verified",
          locator: "Disorder predispositions: BOAS, skin-fold dermatitis, cherry eye, entropion, dry eye, and interdigital cysts",
        },
        {
          id: "bulldog-club-of-america-health-testing",
          role: "verified",
          locator: "Patella, cardiac, and tracheal hypoplasia screening",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "The study reports population-level associations; it does not imply that every Bulldog will develop these conditions.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-coton-de-tulear-health-testing-recommendations",
          role: "verified",
          locator: "Bulldog: patella evaluation, cardiac exam, and tracheal hypoplasia radiographic evaluation",
        },
        {
          id: "bulldog-club-of-america-health-testing",
          role: "verified",
          locator: "Recommended Bulldog health tests",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Lists screening recommendations established by national breed clubs.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-bulldog",
          role: "cited",
          locator: "Heat precautions and grooming",
        },
        {
          id: "bulldog-club-of-america-health-testing",
          role: "cited",
          locator: "Breed health and screening resources",
        },
      ],
      verifiedOn: null,
      note: "Practical preventive advice; veterinary care should be tailored to the individual dog.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "Home dental hygiene and professional dental evaluation",
        },
      ],
      verifiedOn: null,
      note: "General canine dental-care guidance.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-bulldog",
          role: "cited",
          locator: "Grooming and general care",
        },
      ],
      verifiedOn: null,
      note: "General canine ear-care guidance.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-bulldog",
          role: "cited",
          locator: "Facial wrinkle and skin-fold care",
        },
        {
          id: "rvc-vetcompass-english-bulldog-study",
          role: "cited",
          locator: "Skin-fold dermatitis findings",
        },
      ],
      verifiedOn: null,
      note: "General skin-care advice informed by documented skin-fold concerns.",
    },
    suitability: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bulldog",
          role: "verified",
          locator: "About the Breed, exercise, and care",
        },
        {
          id: "bulldog-club-of-america-health-testing",
          role: "verified",
          locator: "Health and welfare resources",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Suitability lists reflect care demands and welfare considerations rather than a guarantee about any individual dog.",
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable universal first-time-owner suitability rating was established.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal yes/no rating can capture the child's age, supervision, and individual dog's temperament.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable universal suitability rating for senior owners was established.",
    },
    "suitability.activeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "An active owner's plans may involve activity levels that are unsuitable for some Bulldogs; no universal rating was established.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable universal apartment-living rating was established.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-bulldog-standard-149",
          role: "verified",
          locator: "Historical summary and movement",
        },
        {
          id: "american-kennel-club-bulldog",
          role: "verified",
          locator: "History and breed profile",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Facts are paraphrased in original wording.",
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-bulldog-standard-149",
          role: "verified",
          locator: "Weight, origin, and historical summary",
        },
        {
          id: "american-kennel-club-bulldog",
          role: "verified",
          locator: "Life expectancy, care, and heat precautions",
        },
        {
          id: "bulldog-club-of-america-health-testing",
          role: "verified",
          locator: "Recommended health tests",
        },
        {
          id: "rvc-vetcompass-english-bulldog-study",
          role: "verified",
          locator: "Health findings and population-level limitations",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Answers are original summaries of the referenced standards, health guidance, and research.",
    },
  },
  updatedOn: "2026-11-11",
};
