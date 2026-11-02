import type { Breed } from "../schema/breed.types";

export const berger_picard: Breed = {
  slug: "berger-picard",
  name: "Berger Picard",
  scientificName: null,
  alternateNames: [
    "Berger de Picardie",
    "Picardy Sheepdog",
    "Picardy Shepherd",
    "Picard",
  ],
  group:
    "FCI Group 1 — Sheepdogs and Cattledogs (except Swiss Cattledogs); Section 1 — Sheepdogs, with working trial",
  origin: {
    country: "France",
    region:
      "Picardy, northern France is the traditional association; the precise historical origin is uncertain.",
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Picard_Delice_Stacked.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Picard_Delice_Stacked.jpg",
      title: "Picard Delice Stacked.jpg",
      description: "Berger Picard dogs shown in a stacked conformation view.",
      creator: "Cufleadh",
      uploader: "Cufleadh",
      capturedOn: "2011-11-04",
      uploadedOn: null,
      width: 3373,
      height: 2418,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Cufleadh, via Wikimedia Commons, licensed under CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Indicate if changes were made; adaptations must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-02",
    },
  ],
  overview: {
    summary:
      "The Berger Picard is a medium-sized French herding dog recognised by its rough, tousled coat, naturally erect ears, athletic build, and alert expression. Developed to move and protect livestock, it is an active, intelligent, and independent worker that generally thrives with regular exercise, thoughtful training, and close companionship.",
    description:
      "The Berger Picard has a sturdy but unheavy frame, with a body slightly longer than its height at the withers. Its rustic appearance comes from a harsh, semi-long outer coat and a fine, dense undercoat. Distinctive eyebrows, a beard, and a moustache frame its face, while its naturally erect ears give it an attentive expression. The breed's movement is free and supple, reflecting its original role as a working sheepdog. Picards are often lively, observant, and confident, although some can be reserved around unfamiliar people. Their independent working background makes early socialisation, consistent positive training, and daily mental and physical activity important.",
    history:
      "The Berger Picard is an old French sheepdog associated with the Picardy region, although its exact place of origin is not certain. Harsh-coated sheep and cattle dogs were historically found across north-western Europe, and the Picard may have developed from this wider working-dog population. Dogs of this type were shown alongside Beaucerons and Briards in 1863. The breed became more clearly established as a distinct type by 1898, and Paul Megnin drafted an early breed standard in 1922. It received definitive recognition in France in 1925. World War II severely affected the breed, and later enthusiasts worked to rebuild its population and preserve its traditional working characteristics.",
    originalPurpose:
      "Driving and guarding flocks of sheep, with a practical role as a farm and home guardian.",
    currentRoles: [
      "Sheep herding and livestock management",
      "Farm and property watchdog duties with appropriate training",
      "Companion for active households",
      "Agility, tracking, obedience, and other dog sports",
      "Hiking, running, and other outdoor activities with an active owner",
    ],
  },
  physical: {
    sizeCategory: "Medium",
    height: {
      unit: "cm",
      male: {
        min: 60,
        max: 65,
      },
      female: {
        min: 55,
        max: 60,
      },
    },
    weight: {
      unit: null,
      male: null,
      female: null,
    },
    lifespanYears: {
      min: 12,
      max: 13,
    },
    coatType:
      "Harsh, crisp, semi-long double coat with a fine, dense undercoat.",
    coatLength:
      "The FCI standard specifies approximately 5–6 cm over the body, including the tail. The coat on the head forms distinct eyebrows, a beard, and a moustache.",
    coatColors: [
      "Fawn",
      "Fawn with a dark overlay",
      "Fawn brindle",
      "Grey, generally remaining dark",
    ],
    sheddingLevel:
      "Moderate as a practical estimate. Seasonal shedding can be more noticeable because the breed has a dense undercoat.",
    droolingLevel: null,
    distinctiveFeatures: [
      "Medium-sized, sturdy, athletic frame without excessive heaviness",
      "Body slightly longer than height at the withers",
      "Naturally erect ears with slightly rounded tips",
      "Distinctive rough eyebrows, beard, and moustache",
      "Harsh, crisp, semi-long outer coat with a dense undercoat",
      "Naturally long tail that reaches the hock and has a slight curve at the tip",
      "Free, supple movement with moderate reach",
      "Black nose and dark eyes",
      "No dewclaws or supernumerary digits on the hind feet under the FCI standard",
    ],
  },
  temperament: {
    traits: [
      "Lively and alert",
      "Observant and attentive to its surroundings",
      "Generally even-tempered",
      "Confident without being expected to be aggressive",
      "May be reserved or aloof with unfamiliar people",
      "Intelligent and capable of independent problem-solving",
      "Active and inclined to enjoy purposeful work",
      "Often forms close relationships with its household",
    ],
    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 4,
      independence: 4,
      trainability: 4,
      barking: 3,
      energy: 5,
    },
  },
  care: {
    exercise: {
      level:
        "High. The Berger Picard was developed as a working sheepdog and has considerable stamina. Most healthy adults need daily physical activity together with mental challenges and opportunities to use their working instincts. Exercise should be adapted to age, health, fitness, and weather.",
      minutesPerDay: null,
      activities: [
        "Long daily walks",
        "Hiking and outdoor exploration",
        "Running with a fit adult dog after appropriate conditioning",
        "Herding activities where available and suitable",
        "Agility and other structured dog sports",
        "Tracking and scent-based games",
        "Obedience training and problem-solving games",
        "Swimming when the individual dog enjoys it and can do so safely",
      ],
    },
    grooming: {
      level:
        "Low to moderate. The rustic double coat is relatively practical, but it needs regular attention, especially when the undercoat is shedding.",
      brushing:
        "Brush approximately weekly as a practical routine. During heavier seasonal shedding, increase brushing frequency to remove loose undercoat. Check for tangles and debris in the beard, eyebrows, and feathered areas.",
      bathing:
        "Bathe occasionally or when genuinely dirty. Use a dog-formulated shampoo suitable for a harsh or crisp coat and rinse thoroughly.",
      notes: [
        "The coat is intended to retain its natural rustic texture; avoid unnecessary trimming or styling.",
        "Inspect the coat after outdoor activity for burrs, seeds, and debris.",
        "Trim nails regularly and check the paw pads.",
        "Inspect the ears regularly and clean only when needed with an appropriate product.",
        "Brush the teeth regularly using dog-safe toothpaste.",
        "During seasonal shedding, more frequent brushing helps remove loose undercoat.",
      ],
    },
    training: {
      difficulty:
        "Moderate to demanding as a practical owner-oriented estimate. The breed is intelligent and capable, but its independent herding background means it benefits from patient, consistent training and a clear relationship with its handler.",
      tips: [
        "Begin reward-based training and household routines early.",
        "Use consistent cues and short, engaging training sessions.",
        "Teach reliable recall gradually and practise in secure environments before allowing off-lead freedom.",
        "Reward calm behaviour around unfamiliar people, dogs, livestock, and moving objects.",
        "Provide activities that use the dog's problem-solving and scenting abilities.",
        "Build loose-lead walking and impulse control before the dog develops strong pulling habits.",
        "Avoid relying on repetitive drills alone; vary activities to maintain engagement.",
        "Use calm, predictable handling rather than harsh corrections.",
      ],
      socialization:
        "Introduce the puppy gradually and positively to different people, calm dogs, everyday sounds, handling, surfaces, and environments. Continue socialisation into adulthood. Some Picards can become reserved around unfamiliar people, so regular, comfortable exposure and reward-based training are useful. Do not force interactions when the dog is worried.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,
      climates: [
        "Provide shade, ventilation, and fresh water during hot weather.",
        "Avoid strenuous exercise during the hottest part of the day.",
        "Monitor for overheating during warm or humid conditions.",
        "Provide a dry, comfortable resting place in cold or wet weather.",
        "A secure outdoor area can be useful, but it does not replace walks, training, and companionship.",
      ],
      aloneTimeTolerance: null,
    },
  },
  nutrition: {
    dietType:
      "A complete and balanced diet appropriate to the dog's life stage, body condition, activity level, and health needs.",
    feedingFrequency: {
      puppy:
        "Feed a complete puppy diet in multiple meals according to age, growth, body condition, and veterinary advice. Avoid excessive calorie intake during development.",
      adult:
        "Use a consistent meal routine and adjust portions to maintain a healthy body condition and support the dog's activity level.",
      senior:
        "Adjust food portions and nutrient profile to age, activity, body condition, dental health, and any veterinary-diagnosed conditions.",
    },
    guidelines:
      "Choose a complete and balanced food appropriate for the dog's life stage. Measure portions and adjust them according to body condition, activity, and weight trends rather than relying on a fixed amount for every Berger Picard. Keep fresh water available and introduce dietary changes gradually. Ask a veterinarian for individual advice if the dog has digestive problems, allergies, a medical condition, or an unexpected change in weight.",
    considerations: [
      "Monitor body condition regularly and adjust portions when activity changes.",
      "Include training treats in the dog's overall daily food allowance.",
      "Avoid excessive feeding during puppy growth.",
      "Provide fresh water at all times.",
      "Discuss persistent digestive symptoms, skin problems, or food sensitivities with a veterinarian.",
      "Do not assume that a grain-free or other specialised diet is necessary without a clinical reason.",
    ],
    note:
      "These are general canine nutrition recommendations, not a breed-specific prescription. Feeding quantities should be individualised with veterinary guidance where needed.",
  },
  health: {
    overview:
      "The Berger Picard is often described as a generally healthy breed, but the available health picture is still developing because the breed is relatively rare in North America. Breed-club guidance identifies eye disease, including progressive retinal atrophy (PRA), cardiac disease such as dilated cardiomyopathy, joint conditions, cancer, seizures and other neurological concerns, and hypothyroidism as issues worth discussing with breeders and veterinarians. The club notes that more data is needed to understand the overall frequency of these conditions. Health screening and access to family health history are therefore important when selecting a puppy or planning a breeding.",
    commonConditions: [
      "Hip dysplasia and other joint concerns have been reported and are reasons to review parental screening results.",
      "Progressive retinal atrophy (PRA) and other eye disorders are recognised health concerns in breed-club guidance.",
      "Cardiac disease, including dilated cardiomyopathy, has been reported; the overall prevalence in the breed is not established.",
      "Cancer, including squamous cell carcinoma, is identified as a serious concern in breed-club health information.",
      "Seizures and other neurological conditions have been reported, but breed-wide incidence is not established.",
      "Hypothyroidism is mentioned in breed-club health guidance; its frequency in the breed is not clearly established.",
      "Osteochondritis dissecans has been reported as an occasional joint concern, particularly affecting younger dogs.",
    ],
    preventiveCare: [
      "Choose breeders who can provide documented hip and eye screening results and a family health history.",
      "Discuss cardiac evaluation and other relevant screening with the breeder and veterinarian.",
      "Arrange routine veterinary examinations and follow locally appropriate vaccination and parasite-prevention advice.",
      "Maintain a healthy body condition and adapt exercise to age and fitness.",
      "Monitor vision, mobility, exercise tolerance, skin, and behaviour for changes.",
      "Seek veterinary advice for unexplained lameness, exercise intolerance, fainting, seizures, or changes in vision.",
      "Ask a veterinarian about the appropriate timing of health checks as the dog ages.",
    ],
    recommendedScreenings: [
      "Hip evaluation through an established screening programme such as OFA or PennHIP, particularly for breeding stock.",
      "Ophthalmologist evaluation for inherited eye disorders.",
      "Cardiac evaluation, including advanced echocardiography where recommended by the breed-club CHIC guidance and veterinary professional.",
      "Discuss elbow dysplasia or thyroid evaluation as additional health electives under breed-club guidance.",
      "Ask the breeder for public health-testing records and family health history.",
    ],
    dentalCare:
      "Brush the teeth regularly with dog-safe toothpaste and arrange routine veterinary dental checks. Seek veterinary advice for persistent bad breath, gum bleeding, oral pain, or difficulty eating.",
    earCare:
      "The ears are naturally erect, but they should still be inspected regularly for redness, odour, discharge, discomfort, or persistent head shaking. Clean only when needed and use a veterinary-recommended product.",
    skinCare:
      "Inspect the skin while brushing, particularly beneath the dense coat and around the ears, legs, and tail. Seek veterinary advice for persistent itching, sores, lumps, hair loss, or changes in skin colour or texture.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "Active owners who can provide daily exercise and mental stimulation",
      "Households interested in herding, tracking, agility, or other structured activities",
      "Owners who enjoy training an intelligent and independent working dog",
      "People able to provide regular companionship and ongoing socialisation",
      "Rural or suburban households that can safely accommodate an energetic dog",
    ],
    notIdealFor: [
      "People looking for a low-energy dog with minimal exercise needs",
      "Households unable to provide consistent training and socialisation",
      "Owners who expect a naturally outgoing dog with every unfamiliar person",
      "People who leave a dog alone for long periods without companionship or enrichment",
      "Households unwilling to manage an active dog with herding instincts",
    ],
  },
  funFacts: [
    "The Berger Picard is one of France's traditional sheepdog breeds.",
    "Dogs of this type were shown alongside Beaucerons and Briards in 1863.",
    "An early breed standard was drafted in 1922, and the breed received definitive recognition in France in 1925.",
    "Its rough eyebrows, beard, and moustache are important parts of its characteristic rustic expression.",
    "The FCI standard describes a coat that is harsh and semi-long, with a fine, dense undercoat.",
    "The breed's name refers to its traditional association with the Picardy region, although its exact historical origin is uncertain.",
  ],
  faq: [
    {
      question: "Where does the Berger Picard come from?",
      answer:
        "The Berger Picard comes from France and is traditionally associated with the Picardy region in the north. Its precise historical origin is uncertain because similar rough-coated sheepdogs were found across north-western Europe.",
    },
    {
      question: "What was the Berger Picard bred for?",
      answer:
        "It was developed as a working sheepdog used to drive and protect flocks. It also served as a farm and home guardian.",
    },
    {
      question: "How tall is a Berger Picard?",
      answer:
        "The FCI standard gives a height of 60–65 cm for males and 55–60 cm for females, with a stated tolerance of 1 cm.",
    },
    {
      question: "How much does a Berger Picard weigh?",
      answer:
        "The FCI standard used for this record does not specify a weight range, so a breed-standard weight is not recorded.",
    },
    {
      question: "What colours does a Berger Picard come in?",
      answer:
        "The FCI standard lists fawn, fawn with a dark overlay, fawn brindle, and grey that generally remains dark. Large white patches are not accepted under the standard.",
    },
    {
      question: "How long does a Berger Picard live?",
      answer:
        "A commonly reported life expectancy is 12–13 years. Individual lifespan varies with genetics, health, diet, and care.",
    },
    {
      question: "Does the Berger Picard need a lot of exercise?",
      answer:
        "Yes. It is an active working sheepdog with good stamina. Most healthy adults benefit from daily walks, structured activity, and mental enrichment. The right amount depends on age, health, and fitness.",
    },
    {
      question: "Is the Berger Picard easy to groom?",
      answer:
        "Its rough double coat is relatively low-maintenance compared with many long-coated breeds. Regular brushing is useful, with more frequent attention during seasonal shedding.",
    },
    {
      question: "Is the Berger Picard good with children?",
      answer:
        "The breed standard describes the Picard as a family dog that enjoys close contact with children. As with any dog, interactions should be supervised, children should be taught safe handling, and suitability depends on the individual dog's temperament and upbringing.",
    },
    {
      question: "What health tests should Berger Picard breeders consider?",
      answer:
        "Breed-club guidance recommends hip evaluation and an ophthalmologist examination. It also discusses cardiac evaluation and additional elbow or thyroid testing. Ask breeders for documented results and discuss the appropriate checks with a veterinarian.",
    },
    {
      question: "Can a Berger Picard live in an apartment?",
      answer:
        "Living arrangements depend on the individual dog and the owner's ability to provide sufficient exercise, training, and companionship. The breed's high activity needs make daily engagement essential, regardless of home size.",
    },
  ],
  references: [
    "fci-berger-picard-standard-176",
    "fci-berger-picard-nomenclature-176",
    "akc-berger-picard-profile",
    "petmd-berger-picard-health-care",
    "bpca-berger-picard-health",
    "bpca-berger-picard-hips-elbows",
    "commons-picard-delice-stacked",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
  ],
  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-berger-picard-standard-176",
          role: "verified",
          locator: "Breed title and official name",
        },
        {
          id: "fci-berger-picard-nomenclature-176",
          role: "verified",
          locator: "Official breed nomenclature and translated names",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "Alternate names are taken from official breed nomenclature and established English-language breed references.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No separate scientific name specific to this domestic dog breed is recorded.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-berger-picard-standard-176",
          role: "verified",
          locator: "FCI classification — Group 1, Section 1, working trial",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "Group and section follow the official FCI classification.",
    },
    origin: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-berger-picard-standard-176",
          role: "verified",
          locator: "Origin and brief historical summary",
        },
        {
          id: "akc-berger-picard-profile",
          role: "cited",
          locator: "Breed history and Picardy association",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "France is the official country of origin. The Picardy region is described as a traditional association, not a proven exclusive origin.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-berger-picard-standard-176",
          role: "verified",
          locator: "History, utilization, general appearance, temperament, and coat",
        },
        {
          id: "akc-berger-picard-profile",
          role: "verified",
          locator: "Breed characteristics, exercise, and grooming",
        },
        {
          id: "petmd-berger-picard-health-care",
          role: "cited",
          locator: "Breed overview and care",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "Overview text is original paraphrase. Historical uncertainty is retained rather than assigning an unsupported exact origin.",
    },
    "overview.currentRoles": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-berger-picard-standard-176",
          role: "cited",
          locator: "Utilization — shepherd and guard dog",
        },
        {
          id: "akc-berger-picard-profile",
          role: "cited",
          locator: "Activity and dog-sport suitability",
        },
      ],
      verifiedOn: null,
      note:
        "Current activity examples are practical suggestions based on the breed's working background, not claims that every individual performs these roles.",
    },
    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-berger-picard-standard-176",
          role: "verified",
          locator: "General appearance, proportions, coat, colour, height, tail, and movement",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "Conformation and height are based on FCI Standard No. 176. Height is kept in the unit published by the source.",
    },
    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The FCI standard used for this record does not publish a weight range. No unsupported sex-specific range has been added.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "petmd-berger-picard-health-care",
          role: "verified",
          locator: "Life expectancy",
        },
        {
          id: "akc-berger-picard-profile",
          role: "cited",
          locator: "Breed life expectancy and health context",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "The lifespan range is a reported population-level estimate, not a guarantee for an individual dog.",
    },
    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-berger-picard-profile",
          role: "cited",
          locator: "Double coat and seasonal grooming",
        },
        {
          id: "petmd-berger-picard-health-care",
          role: "cited",
          locator: "Coat care and seasonal shedding",
        },
      ],
      verifiedOn: null,
      note:
        "Shedding level is an editorial estimate based on the coat and grooming descriptions; it is not an official rating.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A dependable breed-specific drooling level was not established.",
    },
    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-berger-picard-standard-176",
          role: "verified",
          locator: "Behaviour and temperament",
        },
        {
          id: "akc-berger-picard-profile",
          role: "cited",
          locator: "Breed temperament and socialisation",
        },
        {
          id: "petmd-berger-picard-health-care",
          role: "cited",
          locator: "Behaviour and owner considerations",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "Traits describe breed tendencies and do not guarantee the behaviour of an individual dog.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-berger-picard-standard-176",
          role: "cited",
          locator: "Temperament and working role",
        },
        {
          id: "akc-berger-picard-profile",
          role: "cited",
          locator: "Activity, temperament, and socialisation",
        },
      ],
      verifiedOn: null,
      note:
        "Scores are editorial estimates on the app's 1–5 scale, not official ratings or validated behavioural measurements.",
    },
    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "General nutritional assessment and individualised feeding guidance",
        },
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "General pet dental-care guidance",
        },
      ],
      verifiedOn: null,
      note:
        "General canine care guidance adapted to the needs of an active herding dog.",
    },
    "care.exercise.level": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-berger-picard-standard-176",
          role: "cited",
          locator: "Shepherd and guard dog utilization; movement and working structure",
        },
        {
          id: "akc-berger-picard-profile",
          role: "cited",
          locator: "Exercise requirements and activity",
        },
        {
          id: "petmd-berger-picard-health-care",
          role: "cited",
          locator: "Exercise and daily care",
        },
      ],
      verifiedOn: null,
      note:
        "High activity is a practical estimate based on the breed's working background and care guidance; it is not a formal standard rating.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A dependable breed-specific daily exercise duration in minutes was not established.",
    },
    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-berger-picard-profile",
          role: "verified",
          locator: "Grooming — seasonal brushing, occasional bathing, and coat care",
        },
        {
          id: "petmd-berger-picard-health-care",
          role: "cited",
          locator: "Grooming and coat maintenance",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "Grooming guidance is paraphrased. Brushing frequency may vary with season, coat condition, and the individual dog.",
    },
    "care.training.difficulty": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-berger-picard-profile",
          role: "cited",
          locator: "Independent problem-solving and positive training",
        },
        {
          id: "fci-berger-picard-standard-176",
          role: "cited",
          locator: "Working temperament",
        },
      ],
      verifiedOn: null,
      note:
        "Training difficulty is a practical estimate based on independence and working instincts, not an official rating.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The sources reviewed do not establish a reliable binary apartment-suitability value.",
    },
    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-berger-picard-standard-176",
          role: "cited",
          locator: "Shepherd and guard dog utilization",
        },
        {
          id: "petmd-berger-picard-health-care",
          role: "cited",
          locator: "Exercise, companionship, and living-environment considerations",
        },
      ],
      verifiedOn: null,
      note:
        "A secure yard can be useful for an active dog but is not a formal breed requirement and does not replace walks or training.",
    },
    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Weather-safety advice is general canine guidance; no precise breed-specific climate tolerance is claimed.",
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A reliable breed-specific alone-time tolerance value was not established.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Nutritional assessment and individualised feeding guidance",
        },
      ],
      verifiedOn: null,
      note:
        "General canine nutrition guidance; no breed-specific feeding quantity or special diet is claimed.",
    },
    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "bpca-berger-picard-health",
          role: "verified",
          locator: "Breed health overview and statement that population data is still developing",
        },
        {
          id: "petmd-berger-picard-health-care",
          role: "cited",
          locator: "Health conditions and veterinary-reviewed care information",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "The overview distinguishes reported health concerns from established prevalence and reflects the breed club's caution about limited population data.",
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "bpca-berger-picard-health",
          role: "verified",
          locator: "Reported serious and other health issues",
        },
        {
          id: "bpca-berger-picard-hips-elbows",
          role: "verified",
          locator: "Hip dysplasia and osteochondritis dissecans",
        },
        {
          id: "petmd-berger-picard-health-care",
          role: "cited",
          locator: "Progressive retinal atrophy and other health concerns",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "The conditions are reported concerns, not claims that all are common or that every Berger Picard will develop them. Reliable breed-wide prevalence is not established for several listed conditions.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "bpca-berger-picard-health",
          role: "cited",
          locator: "Advice to review inherited disease testing and family health history",
        },
        {
          id: "bpca-berger-picard-hips-elbows",
          role: "cited",
          locator: "Hip and elbow screening information",
        },
      ],
      verifiedOn: null,
      note:
        "Preventive advice combines general veterinary care with breed-relevant screening considerations.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-berger-picard-profile",
          role: "verified",
          locator: "Recommended health tests from the national breed club — hip and ophthalmologist evaluations",
        },
        {
          id: "bpca-berger-picard-health",
          role: "verified",
          locator: "Heritable eye, cardiac, and joint disease testing",
        },
        {
          id: "bpca-berger-picard-hips-elbows",
          role: "verified",
          locator: "Hip and elbow evaluation guidance",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "Screening guidance is intended for responsible breeding and puppy selection. The specific checks for an individual dog should be discussed with a veterinarian.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "General pet dental-care recommendations",
        },
      ],
      verifiedOn: null,
      note:
        "General veterinary dental-care advice; no breed-specific dental disease claim is made.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-berger-picard-standard-176",
          role: "cited",
          locator: "Naturally erect ear conformation",
        },
      ],
      verifiedOn: null,
      note:
        "Routine ear inspection is general care advice, not a claim of breed-specific ear-disease prevalence.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Routine coat and skin inspection is general canine care advice.",
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "fci-berger-picard-standard-176",
          role: "cited",
          locator: "Temperament and working utilization",
        },
        {
          id: "akc-berger-picard-profile",
          role: "cited",
          locator: "Activity, training, and owner considerations",
        },
        {
          id: "petmd-berger-picard-health-care",
          role: "cited",
          locator: "Considerations for prospective owners",
        },
      ],
      verifiedOn: null,
      note:
        "Owner-fit guidance is an estimate based on activity and training needs, not a universal suitability guarantee.",
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A universal first-time-owner suitability rating was not established.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A universal family-with-children rating was not established. The FCI standard describes the breed as a family dog that enjoys close contact with children, but individual temperament and supervision remain important.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A universal suitability rating for senior owners was not established.",
    },
    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-berger-picard-profile",
          role: "cited",
          locator: "High exercise needs and athletic working characteristics",
        },
        {
          id: "fci-berger-picard-standard-176",
          role: "cited",
          locator: "Shepherd and guard dog utilization",
        },
      ],
      verifiedOn: null,
      note:
        "Active-owner suitability is an estimate based on the breed's working background and exercise needs.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A reliable breed-specific apartment-living rating was not established.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-berger-picard-standard-176",
          role: "verified",
          locator: "Historical summary, coat, and breed characteristics",
        },
        {
          id: "fci-berger-picard-nomenclature-176",
          role: "verified",
          locator: "Official breed name, recognition, and origin",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "Facts are original paraphrases of the official standard and nomenclature.",
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-berger-picard-standard-176",
          role: "verified",
          locator: "Origin, history, utilization, height, coat, colour, and temperament",
        },
        {
          id: "fci-berger-picard-nomenclature-176",
          role: "verified",
          locator: "Official breed name and classification",
        },
        {
          id: "petmd-berger-picard-health-care",
          role: "verified",
          locator: "Life expectancy, grooming, exercise, and health information",
        },
        {
          id: "bpca-berger-picard-health",
          role: "verified",
          locator: "Breed health and screening guidance",
        },
      ],
      verifiedOn: "2026-11-02",
      note:
        "FAQ answers are original paraphrases. Unsupported weight and universal suitability claims are avoided.",
    },
  },
  updatedOn: "2026-11-02",
};
