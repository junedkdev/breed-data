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
      metadataCheckedOn: "2026-11-13",
    },
  ],
  overview: {
    summary:
      "The Berger Picard is a medium-sized French herding dog known for its tousled, crisp coat, high-set erect ears, and lively expression. Bred to drive and guard sheep flocks, this athletic, independent-minded worker thrives with daily physical exercise, consistent reward-based training, and close family involvement.",
    description:
      "Solidly built without heaviness, the Berger Picard has a slightly longer-than-tall frame and effortless, supple movement. Its rugged look comes from a harsh, semi-long outer coat over a fine, dense undercoat, accented by distinct eyebrows, a beard, and a moustache beneath naturally upright ears. Observant, energetic, and deeply loyal to its household, it can be reserved with unfamiliar people, making early socialization and engaging daily mental work essential.",
    history:
      "Among the oldest French herding breeds, the Berger Picard is traditionally linked to the Picardy region of northern France, though its exact origins among northwestern European rough-coated flock dogs remain uncertain. Exhibited alongside Beaucerons and Briards in 1863, the breed gained clearer definition by 1898, received a formal draft standard in 1922, and earned official recognition in France in 1925. Nearly wiped out during both World Wars, it was rebuilt by dedicated breeders.",
    originalPurpose:
      "Driving and guarding sheep flocks, alongside general farm and homestead watchdog work.",
    currentRoles: [
      "Sheep herding and livestock management",
      "Farm and property watchdog with appropriate training",
      "Active family companion",
      "Agility, tracking, obedience, rally, and herding trials",
      "Hiking, running, and outdoor endurance partner",
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
      unit: "kg",
      male: {
        min: 23,
        max: 32,
      },
      female: {
        min: 23,
        max: 32,
      },
    },
    lifespanYears: {
      min: 12,
      max: 13,
    },
    coatType:
      "Harsh, crisp, semi-long double coat paired with a fine, dense undercoat.",
    coatLength:
      "Measures approximately 5–6 cm over the body and tail, while forming distinct eyebrows, a beard, and a moustache on the head.",
    coatColors: [
      "Fawn",
      "Fawn with a dark overlay",
      "Fawn brindle",
      "Grey, generally remaining dark",
    ],
    sheddingLevel:
      "Moderate; seasonal coat changes release noticeable loose undercoat.",
    droolingLevel: null,
    distinctiveFeatures: [
      "Medium-sized, solid, athletic build without heaviness",
      "Body length slightly exceeding height at the withers",
      "Naturally erect, high-set ears with slightly rounded tips",
      "Rugged facial hair forming eyebrows, beard, and moustache",
      "Harsh, crisp, semi-long double coat",
      "Long tail reaching the hock with a slight upward curve at the tip",
      "Free, supple stride",
      "Black nose and dark eyes",
      "Hind feet free of dewclaws or extra digits",
    ],
  },
  temperament: {
    traits: [
      "Lively and alert",
      "Observant and attentive",
      "Even-tempered",
      "Confident and fearless without unwarranted aggression",
      "Reserved or aloof toward strangers",
      "Intelligent, independent problem-solver",
      "Energetic and happiest with a purposeful task",
      "Affectionate and closely bonded with family",
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
        "High. Built for sustained herding work, healthy adults need vigorous daily physical exercise plus mental enrichment, scaled to age, fitness, and weather.",
      minutesPerDay: null,
      activities: [
        "Long daily walks",
        "Hiking and trail exploration",
        "Conditioned running with a mature adult dog",
        "Herding instinct and livestock work",
        "Agility, rally, and structured dog sports",
        "Tracking and scent-search games",
        "Obedience and puzzle-solving sessions",
        "Supervised swimming when enjoyed",
      ],
    },
    grooming: {
      level:
        "Low to moderate. The rustic double coat stays relatively tidy with routine brushing, needing more frequent care during seasonal shedding.",
      brushing:
        "Brush weekly (or monthly outside shedding, increasing to every day or two during seasonal blowouts) using a slicker brush and rake, checking the beard, eyebrows, and feathering for tangles and burrs.",
      bathing:
        "Bathe occasionally when soiled using a shampoo formulated for crisp coats, rinsing thoroughly.",
      notes: [
        "Preserve the natural rustic coat texture without unnecessary clipping or styling.",
        "Check coat and paws for burrs, grass seeds, and ticks after outdoor runs.",
        "Trim nails regularly.",
        "Inspect the upright ears routinely and clean only when needed with a veterinarian-approved solution.",
        "Brush teeth regularly with dog-safe toothpaste.",
      ],
    },
    training: {
      difficulty:
        "Moderate to high. Sharp intelligence and problem-solving drive can look like stubbornness if sessions are repetitive, so patient, varied, reward-based training works best.",
      tips: [
        "Start reward-based training and household routines early.",
        "Keep cues consistent and sessions short, varied, and engaging.",
        "Build reliable recall in fenced areas before allowing off-lead freedom.",
        "Reinforce calm focus around unfamiliar people, dogs, livestock, and moving cyclists.",
        "Provide scent-work and puzzle games to satisfy herding-dog curiosity.",
        "Establish loose-lead walking and impulse control early.",
        "Use calm, fair rewards rather than harsh corrections.",
      ],
      socialization:
        "Provide gradual, positive exposure to varied people, calm dogs, sounds, surfaces, and public settings from puppyhood into adulthood. Because Picards can be reserved with strangers, let the dog approach at its own comfort level without forcing close contact.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,
      climates: [
        "Provide shade, ventilation, and fresh water in warm weather.",
        "Schedule vigorous exercise during cooler hours in summer.",
        "Provide a dry, comfortable shelter in cold or wet conditions.",
        "A securely fenced yard is helpful but never replaces daily walks and mental engagement.",
      ],
      aloneTimeTolerance: null,
    },
  },
  nutrition: {
    dietType:
      "Complete, balanced dog food matched to life stage, body condition, activity level, and health needs.",
    feedingFrequency: {
      puppy:
        "Feed a complete puppy formula in multiple measured meals daily according to age and veterinary guidance, avoiding excessive calories during growth.",
      adult:
        "Maintain a consistent meal schedule with measured portions to keep a lean, athletic build.",
      senior:
        "Adjust portions and nutrient balance for age, activity, dental health, and any veterinary conditions.",
    },
    guidelines:
      "Select a nutritionally complete diet and tailor portions to weight trends, activity, and body condition rather than fixed averages. Keep fresh water available at all times, transition foods gradually, and consult a veterinarian for digestive issues, allergies, or weight changes.",
    considerations: [
      "Monitor body condition score regularly and adjust portions when activity shifts.",
      "Count training treats within total daily calories.",
      "Avoid overfeeding during puppyhood.",
      "Keep fresh water accessible at all times.",
      "Consult a veterinarian before adopting specialized or grain-free diets.",
    ],
    note:
      "General canine nutrition guidance; individual portions depend on age, calorie density, workload, and veterinary advice.",
  },
  health: {
    overview:
      "Generally a hardy breed, the Berger Picard has a relatively small North American population, so comprehensive breed-wide incidence data is still developing. Breed-club health guidance highlights eye disorders (including progressive retinal atrophy), hip dysplasia, cardiac disease (such as dilated cardiomyopathy), cancer, seizures, hypothyroidism, and osteochondritis dissecans as topics to review with breeders and veterinarians. Request documented parental health clearances before selecting a puppy.",
    commonConditions: [
      "Hip dysplasia and joint issues, monitored via radiographic screening.",
      "Progressive retinal atrophy (PRA) and other inherited eye disorders.",
      "Cardiac disease, including dilated cardiomyopathy, reported without established breed-wide prevalence.",
      "Cancers, including squamous cell carcinoma, noted as a serious concern in breed-club guidance.",
      "Seizures and neurological disorders, reported with unclear overall incidence.",
      "Hypothyroidism, noted in breed-club guidance with unestablished frequency.",
      "Osteochondritis dissecans (OCD), an occasional developmental joint issue in young dogs.",
    ],
    preventiveCare: [
      "Request documented hip and eye clearances and multi-generation health history from breeders.",
      "Discuss cardiac evaluation and relevant screenings with breeders and your veterinarian.",
      "Keep routine veterinary exams, vaccinations, and parasite prevention current.",
      "Maintain a lean body weight and scale exercise to age and joint comfort.",
      "Monitor vision, stamina, mobility, skin, and behaviour, seeking veterinary care for unexplained lameness, fainting, seizures, or vision changes.",
    ],
    recommendedScreenings: [
      "Hip dysplasia evaluation (e.g., OFA or PennHIP).",
      "Ophthalmologist eye examination.",
      "Cardiac evaluation (including echocardiography where advised by veterinary specialists).",
      "Elective elbow and thyroid evaluations discussed with a veterinarian.",
    ],
    dentalCare:
      "Brush teeth regularly with canine toothpaste and arrange periodic veterinary oral checks. Have bad breath, bleeding gums, or chewing discomfort evaluated promptly.",
    earCare:
      "Inspect the upright ears regularly for redness, odour, wax, or head shaking, cleaning gently with a veterinarian-approved solution only when needed.",
    skinCare:
      "Inspect skin during brushing for ticks, sores, lumps, hair loss, or persistent itching.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "Active owners ready for daily vigorous exercise and mental challenges",
      "Handlers interested in herding, agility, tracking, rally, or obedience",
      "People who enjoy training an intelligent, independent-thinking partner",
      "Households able to provide close companionship and ongoing socialization",
    ],
    notIdealFor: [
      "Sedentary homes seeking a low-exercise companion",
      "Owners unable to commit time to consistent training and socialization",
      "People expecting a dog that greets every stranger with instant enthusiasm",
      "Households leaving a dog alone for long hours without enrichment",
    ],
  },
  funFacts: [
    "One of France's oldest traditional sheepdogs, it was exhibited alongside Beaucerons and Briards in 1863.",
    "A draft breed standard was written in 1922, and France granted official recognition in 1925.",
    "Its rough eyebrows, beard, and moustache create a signature tousled, expressive face.",
    "The harsh, semi-long double coat measures roughly 5–6 cm over the body and pairs a crisp outer layer with a dense undercoat.",
    "Although traditionally linked to Picardy in northern France, its exact historical origin among northwestern European herding dogs remains uncertain.",
  ],
  faq: [
    {
      question: "Where does the Berger Picard come from?",
      answer:
        "It comes from France and is traditionally linked to the northern region of Picardy, though its exact origin among northwestern European rough-coated sheepdogs is uncertain.",
    },
    {
      question: "What was the Berger Picard bred for?",
      answer:
        "It was bred to drive and guard sheep flocks and serve as an alert farm and homestead watchdog.",
    },
    {
      question: "How tall is a Berger Picard?",
      answer:
        "Adult males typically measure 60–65 cm at the withers and females 55–60 cm (with a 1 cm tolerance).",
    },
    {
      question: "How much does a Berger Picard weigh?",
      answer:
        "Typical adult weight ranges from 23 to 32 kg, depending on sex, bone structure, and conditioning.",
    },
    {
      question: "What colours does a Berger Picard come in?",
      answer:
        "Accepted colours are fawn, fawn with a dark overlay, fawn brindle, and dark grey, without large white patches.",
    },
    {
      question: "How long does a Berger Picard live?",
      answer:
        "Average life expectancy is around 12–13 years, varying with genetics, diet, and veterinary care.",
    },
    {
      question: "Does the Berger Picard need a lot of exercise?",
      answer:
        "Yes. As an athletic working sheepdog, healthy adults need daily long walks or hikes alongside mental stimulation such as training, scent games, or dog sports.",
    },
    {
      question: "Is the Berger Picard easy to groom?",
      answer:
        "Its rough double coat is relatively low-maintenance, needing periodic brushing and more frequent sessions during seasonal shedding.",
    },
    {
      question: "Is the Berger Picard good with children?",
      answer:
        "Generally affectionate and family-oriented with familiar children, though all interactions should be supervised and suitability depends on individual temperament and upbringing.",
    },
    {
      question: "What health tests should Berger Picard breeders consider?",
      answer:
        "Recommended tests include hip evaluation and an ophthalmologist eye exam, alongside cardiac evaluation and optional elbow or thyroid checks.",
    },
    {
      question: "Can a Berger Picard live in an apartment?",
      answer:
        "Suitability depends on the individual dog and the owner's commitment to daily vigorous exercise, training, and companionship regardless of home size.",
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
    "the-dog-api",
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
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Alternate names follow official FCI nomenclature and established English-language references.",
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
      verifiedOn: "2026-11-13",
      note:
        "Follows official FCI classification; The Dog API lists Herding.",
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
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "France is the official country of origin; Picardy is a traditional association rather than a proven exclusive origin.",
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
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "All user-facing prose is newly written original wording preserving historical uncertainty.",
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
        "Contemporary activities inferred from documented herding and sporting background.",
    },
    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-berger-picard-standard-176",
          role: "verified",
          locator: "General appearance, proportions, coat, colour, height (60–65 cm male, 55–60 cm female), tail, and movement",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Height and conformation follow FCI Standard No. 176 (matching The Dog API's 60–65 cm male and 55–60 cm female ranges). Coat colours follow the FCI standard rather than The Dog API's species-wide colour list.",
    },
    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (23–32 kg)",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "FCI Standard No. 176 does not publish a weight range; 23–32 kg is sourced from The Dog API, which gives one breed-wide range without separating sexes.",
    },
    "physical.weight.male.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "The Dog API gave one breed-wide weight range (23–32 kg) without separating males and females.",
    },
    "physical.weight.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "The Dog API gave one breed-wide weight range (23–32 kg) without separating males and females.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "petmd-berger-picard-health-care",
          role: "verified",
          locator: "Life expectancy (12–13 years)",
        },
        {
          id: "akc-berger-picard-profile",
          role: "cited",
          locator: "Breed life expectancy and health context",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span (12–13 years)",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "PetMD and The Dog API both report a 12–13 year average lifespan.",
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
        "Editorial estimate based on double-coat structure, not an official rating.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No dependable breed-specific drooling level was established.",
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
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Traits describe breed tendencies; individual behaviour varies.",
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
        "Editorial estimates on a 1–5 scale, not official or validated behavioural measurements.",
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
        "General canine care guidance adapted to an active herding dog.",
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
        "Practical activity estimate based on working background, not a formal standard rating.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No dependable breed-specific daily exercise duration in minutes was established.",
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
      verifiedOn: "2026-11-13",
      note:
        "Grooming guidance paraphrased from kennel-club and veterinary care references.",
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
        "Practical estimate based on independence and working instincts.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Consulted sources do not establish a reliable binary apartment-suitability rating.",
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
        "A secure yard is useful for an active dog but does not replace walks or training.",
    },
    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General weather-safety guidance, not a breed-specific climate study.",
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific alone-time tolerance rating was established.",
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
        "General canine nutrition guidance, not a breed-specific prescription.",
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
      verifiedOn: "2026-11-13",
      note:
        "Distinguishes reported health concerns from established prevalence given limited population data.",
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
      verifiedOn: "2026-11-13",
      note:
        "Reported concerns from breed-club and veterinary references without claiming universal prevalence.",
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
        "General preventive-care guidance combined with breed-relevant screening considerations.",
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
      verifiedOn: "2026-11-13",
      note:
        "Screening guidance for breeding stock and puppy selection.",
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
        "General veterinary dental guidance.",
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
        "Routine ear inspection guidance.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Routine coat and skin check guidance.",
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
        "Owner-fit estimate based on activity and training needs.",
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal first-time-owner suitability rating was established.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal family-with-children rating was established; supervision remains important.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal senior-owner suitability rating was established.",
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
        "Estimate based on the breed's working background and exercise needs.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific apartment-living rating was established.",
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
      verifiedOn: "2026-11-13",
      note:
        "Facts written in original wording from official standard and nomenclature.",
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
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Original answers synthesizing official standards, breed-club health guidance, and The Dog API weight range.",
    },
  },
  updatedOn: "2026-11-13",
};
