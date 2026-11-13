import type { Breed } from "../schema/breed.types";

export const beauceron: Breed = {
  slug: "beauceron",
  name: "Beauceron",
  scientificName: null,
  alternateNames: [
    "Berger de Beauce",
    "Beauce Sheepdog",
    "Bas Rouge",
    "Red-Stocking",
    "French Short-Haired Shepherd Dog",
    "French Shorthaired Shepherd",
  ],
  group:
    "FCI Group 1 — Sheepdogs and Cattledogs (except Swiss Cattledogs); Section 1 — Sheepdogs, with working trial",
  origin: {
    country: "France",
    region: "The Beauce plains and surrounding French plains",
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Beauceron_portrait.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Beauceron_portrait.jpg",
      title: "Beauceron portrait.jpg",
      description: "A portrait photograph of a Beauceron.",
      creator: "Flickr user zenera",
      uploader: "Pharaoh Hound",
      capturedOn: "2005-09-21",
      uploadedOn: "2007-03-15",
      width: 1420,
      height: 1068,
      licenseId: "cc-by-sa-2.0",
      attribution:
        "Photo by Flickr user zenera, via Wikimedia Commons, licensed under CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0/). Indicate if changes were made; adaptations must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-13",
    },
  ],
  overview: {
    summary:
      "The Beauceron is a large, athletic French herding breed prized for endurance, intelligence, and steady self-confidence. Its short, harsh coat typically appears in black with rich squirrel-red markings or in a mottled harlequin pattern. Capable and deeply loyal, it thrives with consistent training, purposeful daily exercise, and close partnership with an active household.",
    description:
      "Muscular and well balanced without bulkiness, this large sheepdog carries a slightly longer-than-tall frame and a supple, ground-covering trot. A chiseled, elongated head features a black nose, dark oval eyes, and high-set ears that drop or sit half-pricked. Its short, coarse outer coat covers a dense downy undercoat in either black-and-tan—earning the nickname Bas Rouge for its red-stocking legs—or grey, black, and tan harlequin. Double dewclaws on the hind legs are a hallmark trait. Gentle, fearless, and vigilant by nature, adult behaviour depends heavily on early socialization, consistent leadership, and daily mental work.",
    history:
      "An ancient French plains sheepdog sharing deep roots with the Briard, the breed took its name from the Beauce agricultural region southwest of Paris. By the late nineteenth century, the terms Beauce Dog, Beauceron, and Bas Rouge were used to distinguish this short-coated herder from long-coated French shepherds. Valued for moving and guarding large flocks, and later serving in wartime messenger and rescue roles, it remains an active working and sporting dog.",
    originalPurpose:
      "Herding and protecting sheep and cattle flocks across open French plains.",
    currentRoles: [
      "Herding and livestock management",
      "Property and family guardian with structured training",
      "Dog sports including obedience, agility, tracking, and protection trials",
      "Active companion for experienced households able to meet high exercise needs",
    ],
  },
  physical: {
    sizeCategory: "Large",
    height: {
      unit: "cm",
      male: {
        min: 65,
        max: 70,
      },
      female: {
        min: 61,
        max: 68,
      },
    },
    weight: {
      unit: "kg",
      male: {
        min: 32,
        max: 50,
      },
      female: {
        min: 32,
        max: 50,
      },
    },
    lifespanYears: {
      min: 10,
      max: 12,
    },
    coatType:
      "Short, thick, firm, coarse, and close-lying outer coat over a short, fine, dense, downy undercoat.",
    coatLength:
      "Body coat measures 3–4 cm, with shorter hair on the head and light feathering on the backs of the thighs and underside of the tail.",
    coatColors: [
      "Black and tan (black base with rich squirrel-red markings)",
      "Harlequin (grey and black mottling with tan markings)",
    ],
    sheddingLevel:
      "Moderate to high; seasonal coat blowouts produce noticeable shedding.",
    droolingLevel: null,
    distinctiveFeatures: [
      "Large, muscular, athletic build without heaviness",
      "Slightly longer-than-tall proportions",
      "Short, coarse double coat",
      "Black-and-tan markings giving rise to the nickname Bas Rouge ('red stocking')",
      "Recognized harlequin pattern of grey, black, and tan",
      "Double dewclaws on each hind leg",
      "Long, chiseled head with dark nose and oval eyes",
      "High-set ears carried half-pricked or dropped",
      "Low-set tail reaching at least to the hock with a slight J-hook tip",
      "Supple, extended trot",
    ],
  },
  temperament: {
    traits: [
      "Confident and self-assured",
      "Gentle and fearless",
      "Intelligent and quick to learn",
      "Loyal and deeply bonded with family",
      "Alert with natural herding and guarding instincts",
      "Energetic and happiest with a purposeful job",
      "Reserved toward strangers without early socialization",
    ],
    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 4,
      independence: 3,
      trainability: 4,
      barking: 3,
      energy: 5,
    },
  },
  care: {
    exercise: {
      level:
        "High. Built for sustained herding and guarding, healthy adults need vigorous daily exercise paired with structured training and mental challenges, scaled to age and fitness.",
      minutesPerDay: null,
      activities: [
        "Brisk daily walks and hikes",
        "Structured obedience and impulse-control training",
        "Herding trials or instinct work",
        "Tracking, scent-search, and nose-work games",
        "Agility, carting, or endurance sports suited to age and joint health",
        "Calm settle-on-cue enrichment after active sessions",
      ],
    },
    grooming: {
      level:
        "Low to moderate. The short, dense coat is easy to maintain with weekly brushing and extra sessions during seasonal shedding.",
      brushing:
        "Brush weekly with a firm bristle brush or rubber mitt, increasing frequency during seasonal coat changes to clear loose undercoat.",
      bathing:
        "Bathe only when dirty using a canine-safe shampoo, rinsing thoroughly.",
      notes: [
        "Check skin and coat routinely for irritation, ticks, or scrapes.",
        "Inspect ears weekly and clean only when needed with a veterinarian-approved solution.",
        "Trim nails regularly, paying close attention to the hind double dewclaws.",
        "Brush teeth regularly with dog-safe toothpaste.",
      ],
    },
    training: {
      difficulty:
        "Moderate to high. Sharp intelligence and eagerness to work are balanced by size, slow maturity, and strong herding/guarding drives, requiring consistent, reward-based leadership.",
      tips: [
        "Begin reward-based training early with consistent rules across the household.",
        "Prioritize loose-lead walking and calm greetings before the dog reaches full size.",
        "Build recall and impulse control steadily in fenced, low-distraction areas.",
        "Reinforce calm settling indoors alongside active training games.",
        "Channel herding and guarding instincts into structured tasks rather than rough play.",
        "Avoid harsh or confrontational methods; clear boundaries and fair rewards build reliable cooperation.",
      ],
      socialization:
        "Provide gradual, positive exposure to varied people, calm dogs, handling, sounds, and public settings from puppyhood. Supervise interactions with children and unfamiliar animals, building confidence without overwhelming the dog.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,
      climates: [
        "Provide shade, ventilation, and fresh water in warm weather.",
        "Avoid intense exercise during peak heat and humidity.",
        "Provide dry, warm shelter during cold or wet conditions.",
        "A securely fenced yard is helpful but never replaces daily walks and mental engagement.",
      ],
      aloneTimeTolerance: null,
    },
  },
  nutrition: {
    dietType:
      "Complete, balanced dog food formulated for large breeds and matched to life stage, body condition, and activity level.",
    feedingFrequency: {
      puppy:
        "Feed a complete large-breed puppy formula in multiple measured meals daily according to age and veterinary advice, avoiding excessive calories during rapid growth.",
      adult:
        "Maintain a consistent meal routine with measured portions to preserve lean muscle and healthy body condition.",
      senior:
        "Adjust diet and portions for age, activity, dental health, and any veterinary conditions.",
    },
    guidelines:
      "Select a nutritionally complete diet and tailor portions to weight trends, activity, and body condition rather than fixed averages. Keep fresh water available at all times, transition foods gradually, and discuss meal timing and bloat (GDV) precautions with a veterinarian.",
    considerations: [
      "Monitor body condition score and adjust portions when workload changes.",
      "Count training treats within daily calorie intake.",
      "Use a large-breed puppy formula during growth to support steady skeletal development.",
      "Ask a veterinarian about meal scheduling and rest around exercise to help manage bloat risk.",
      "Consult a veterinarian for persistent digestive upset or unexplained weight changes.",
    ],
    note:
      "General canine nutrition guidance; individual portions depend on age, calorie density, workload, and veterinary advice.",
  },
  health: {
    overview:
      "Generally a hardy working breed, the Beauceron still carries risks common to large, deep-chested dogs. Breed-club health guidance highlights hip dysplasia, eye conditions, and cardiac disease (including dilated cardiomyopathy) as primary screening priorities, alongside awareness of bloat (GDV), hypothyroidism, osteochondrosis dissecans, and allergies—though breed-wide prevalence for several of these is not fully established. Review parental health clearances with breeders and maintain regular veterinary care.",
    commonConditions: [
      "Hip dysplasia, an inherited orthopaedic concern monitored through radiographic screening.",
      "Cardiac disease, including dilated cardiomyopathy, documented in the breed though exact population incidence is unestablished.",
      "Inherited eye conditions, prompting recommended ophthalmic screening for breeding stock.",
      "Hypothyroidism, noted in breed-club guidance with unclear overall incidence.",
      "Gastric dilatation-volvulus (bloat), an acute life-threatening emergency in large, deep-chested dogs.",
      "Osteochondrosis dissecans (OCD), a developmental joint risk in fast-growing large breeds.",
      "Food or environmental allergies, reported without established breed-wide prevalence.",
    ],
    preventiveCare: [
      "Schedule routine veterinary exams and keep vaccinations and parasite prevention current.",
      "Keep body weight lean and avoid over-exercising growing joints.",
      "Learn emergency signs of bloat—such as abdominal swelling, unproductive retching, and sudden distress—and seek immediate veterinary care if they occur.",
      "Request documented hip, eye, and cardiac clearances for both parents when choosing a puppy.",
      "Monitor mobility, stamina, coat, and appetite, consulting a veterinarian for persistent changes.",
    ],
    recommendedScreenings: [
      "Hip dysplasia evaluation.",
      "Ophthalmologist eye examination.",
      "Cardiac evaluation (with echocardiography when advised).",
      "Optional elbow and thyroid evaluations discussed with a veterinarian.",
    ],
    dentalCare:
      "Brush teeth regularly with canine toothpaste and schedule routine veterinary dental checks. Have bad breath, bleeding gums, or chewing discomfort assessed promptly.",
    earCare:
      "Check ears weekly for redness, odour, moisture, or head shaking. Clean gently with a veterinarian-approved solution only when needed.",
    skinCare:
      "Inspect skin during weekly brushing for ticks, allergies, hotspots, or persistent itching.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "Active, experienced owners who enjoy daily training and outdoor exercise",
      "Households able to provide clear boundaries, companionship, and mental work",
      "Handlers interested in herding, obedience, tracking, or canine sports",
      "Owners prepared to manage a large, powerful working dog safely",
    ],
    notIdealFor: [
      "Sedentary households seeking a low-energy companion",
      "Owners unable to commit daily time to exercise, training, and socialization",
      "People expecting effortless manners without consistent leadership",
      "Households hoping guarding instincts will manage themselves without supervision",
    ],
  },
  funFacts: [
    "Its French nickname Bas Rouge ('red stocking') comes from the rich squirrel-red markings on its lower legs.",
    "One of France's traditional plains sheepdogs, it was shaped for both herding and flock protection.",
    "Beyond black and tan, the recognized harlequin coat blends grey and black mottling with tan accents.",
    "Double dewclaws on each hind leg are a signature anatomical trait of the breed.",
    "Classified as a working sheepdog, the breed remains subject to a field working trial.",
  ],
  faq: [
    {
      question: "Where does the Beauceron come from?",
      answer:
        "The Beauceron originates in France, taking its name from the Beauce agricultural plains southwest of Paris, where it developed as a working sheepdog.",
    },
    {
      question: "What was the Beauceron bred to do?",
      answer:
        "It was bred to herd and guard sheep and cattle flocks, and today excels in herding, obedience, tracking, and active companionship.",
    },
    {
      question: "How tall is a Beauceron?",
      answer:
        "Adult males measure 65–70 cm at the withers and adult females measure 61–68 cm.",
    },
    {
      question: "How much does a Beauceron weigh?",
      answer:
        "Typical adult weight ranges from 32 to 50 kg, depending on sex, bone structure, and conditioning.",
    },
    {
      question: "What colours can a Beauceron have?",
      answer:
        "Two patterns are recognized: black and tan (black with rich squirrel-red markings) and harlequin (grey and black mottling with tan markings).",
    },
    {
      question: "Is the Beauceron easy to train?",
      answer:
        "Highly intelligent and capable of learning complex tasks, it nonetheless requires consistent, reward-based training and early socialization because of its size, energy, and working drive.",
    },
    {
      question: "Is the Beauceron suitable for first-time dog owners?",
      answer:
        "There is no universal rule, though its size, slow maturity, and strong herding/guarding instincts make it demanding for novices without experienced guidance.",
    },
    {
      question: "What health checks should Beauceron breeders consider?",
      answer:
        "Recommended clearances include hip evaluation, an ophthalmologist eye exam, and cardiac testing, with optional elbow and thyroid checks discussed with a veterinarian.",
    },
    {
      question: "Does the Beauceron need a lot of exercise?",
      answer:
        "Yes. Built for sustained herding work, healthy adults need daily vigorous exercise paired with training and mental enrichment, tailored to age and fitness.",
    },
  ],
  references: [
    "fci-beauceron-standard-44",
    "fci-beauceron-nomenclature-44",
    "akc-beauceron-breed-profile",
    "american-beauceron-club-health-statement",
    "commons-beauceron-portrait-zenera",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
    "the-dog-api",
  ],
  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-beauceron-standard-44",
          role: "verified",
          locator: "Title and brief historical summary",
        },
        {
          id: "fci-beauceron-nomenclature-44",
          role: "verified",
          locator: "Official breed nomenclature and translated names",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names (French Shorthaired Shepherd)",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Drawn from official FCI nomenclature, standard, and The Dog API synonym.",
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
          id: "fci-beauceron-standard-44",
          role: "verified",
          locator: "FCI classification: Group 1, Section 1",
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
          id: "fci-beauceron-standard-44",
          role: "verified",
          locator: "Origin and brief historical summary",
        },
        {
          id: "akc-beauceron-breed-profile",
          role: "cited",
          locator: "Breed history and origin",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "France is the official country of origin; Beauce plains are supported by historical records.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-beauceron-standard-44",
          role: "verified",
          locator: "Historical summary, general appearance, temperament, coat, and utilization",
        },
        {
          id: "akc-beauceron-breed-profile",
          role: "verified",
          locator: "Breed overview and working characteristics",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "All user-facing prose is newly written original wording summarizing official standards and historical context.",
    },
    "overview.currentRoles": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-beauceron-standard-44",
          role: "cited",
          locator: "Utilization — sheepdog and guard dog",
        },
        {
          id: "akc-beauceron-breed-profile",
          role: "cited",
          locator: "Working characteristics",
        },
      ],
      verifiedOn: null,
      note:
        "Contemporary activities inferred from documented herding and working roles.",
    },
    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-beauceron-standard-44",
          role: "verified",
          locator: "General appearance, proportions, coat, colour, hind dewclaws, tail, and size (65–70 cm male, 61–68 cm female)",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Height and conformation follow FCI Standard No. 44 (matching The Dog API's 65–70 cm male and 61–68 cm female ranges). Coat colours follow the FCI standard rather than The Dog API's species-wide colour list.",
    },
    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (32–50 kg)",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "FCI Standard No. 44 does not publish a weight range; 32–50 kg is sourced from The Dog API, which gives one breed-wide range without separating sexes.",
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
        "The Dog API gave one breed-wide weight range (32–50 kg) without separating males and females.",
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
        "The Dog API gave one breed-wide weight range (32–50 kg) without separating males and females.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-beauceron-breed-profile",
          role: "verified",
          locator: "Breed size and life expectancy (10–12 years)",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span (10–12 years)",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "AKC and The Dog API both report a 10–12 year average lifespan.",
    },
    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-beauceron-standard-44",
          role: "cited",
          locator: "Short, thick coat with dense undercoat",
        },
        {
          id: "akc-beauceron-breed-profile",
          role: "cited",
          locator: "Coat and grooming",
        },
      ],
      verifiedOn: null,
      note:
        "Practical estimate from double-coat structure, not an official numerical rating.",
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
          id: "fci-beauceron-standard-44",
          role: "verified",
          locator: "Behaviour and temperament",
        },
        {
          id: "akc-beauceron-breed-profile",
          role: "cited",
          locator: "Breed temperament and activity",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Traits paraphrase published descriptions; individual behaviour varies.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-beauceron-standard-44",
          role: "cited",
          locator: "Temperament and working role",
        },
        {
          id: "akc-beauceron-breed-profile",
          role: "cited",
          locator: "Breed traits and activity",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial estimates on a 1–5 scale, not official or scientific ratings.",
    },
    care: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General canine care guidance adapted to a large, active working breed.",
    },
    "care.exercise.level": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-beauceron-standard-44",
          role: "cited",
          locator: "Utilization and working build",
        },
        {
          id: "akc-beauceron-breed-profile",
          role: "cited",
          locator: "Activity and exercise needs",
        },
      ],
      verifiedOn: null,
      note:
        "Owner-oriented activity estimate based on working background.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No dependable breed-specific daily exercise duration in minutes was established.",
    },
    "care.training.difficulty": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-beauceron-standard-44",
          role: "cited",
          locator: "Temperament and working utilization",
        },
        {
          id: "akc-beauceron-breed-profile",
          role: "cited",
          locator: "Intelligence and working characteristics",
        },
      ],
      verifiedOn: null,
      note:
        "Practical estimate based on size, energy, and working instincts.",
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
          id: "fci-beauceron-standard-44",
          role: "cited",
          locator: "Large working sheepdog and guard dog role",
        },
      ],
      verifiedOn: null,
      note:
        "A secure yard is helpful for an active large breed but does not replace exercise and training.",
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
        "No dependable breed-specific alone-time tolerance rating was established.",
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
        "General canine nutrition guidance, not a breed-specific veterinary prescription.",
    },
    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-beauceron-club-health-statement",
          role: "verified",
          locator: "Health statement — orthopaedic, eye, cardiac, thyroid, GDV, OCD, and allergy considerations",
        },
        {
          id: "akc-beauceron-breed-profile",
          role: "cited",
          locator: "Health and recommended health tests",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Distinguishes documented screening priorities from conditions whose breed-wide prevalence is unestablished.",
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-beauceron-club-health-statement",
          role: "verified",
          locator: "Health statement — hip dysplasia, eye problems, cardiac disease, hypothyroidism, GDV, OCD, and allergies",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Reflects conditions discussed in breed-club guidance without claiming universal prevalence.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-beauceron-club-health-statement",
          role: "cited",
          locator: "Screening recommendations and bloat-risk guidance",
        },
      ],
      verifiedOn: null,
      note:
        "General preventive-care guidance with breed-relevant topics flagged for veterinary discussion.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-beauceron-club-health-statement",
          role: "verified",
          locator: "Recommended hip certification, eye examination, cardiac evaluation, and encouraged elbow and thyroid testing",
        },
        {
          id: "akc-beauceron-breed-profile",
          role: "cited",
          locator: "Recommended health tests from the national breed club",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Breed-club screening recommendations for breeding stock.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "General pet dental-care guidance",
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
          id: "fci-beauceron-standard-44",
          role: "cited",
          locator: "Ear conformation",
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
          id: "fci-beauceron-standard-44",
          role: "cited",
          locator: "Temperament, build, and working utilization",
        },
        {
          id: "akc-beauceron-breed-profile",
          role: "cited",
          locator: "Activity and breed characteristics",
        },
      ],
      verifiedOn: null,
      note:
        "Practical owner-fit guidance, not universal behavioural guarantees.",
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
        "No universal family-with-children rating was established.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal senior-owner suitability rating was established.",
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
          id: "fci-beauceron-standard-44",
          role: "verified",
          locator: "Historical summary, coat, colour, and hind dewclaws",
        },
        {
          id: "fci-beauceron-nomenclature-44",
          role: "verified",
          locator: "Official breed nomenclature and recognition",
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
          id: "fci-beauceron-standard-44",
          role: "verified",
          locator: "Origin, historical summary, classification, coat, colour, temperament, and height",
        },
        {
          id: "fci-beauceron-nomenclature-44",
          role: "verified",
          locator: "Official breed names and classification",
        },
        {
          id: "akc-beauceron-breed-profile",
          role: "verified",
          locator: "Life expectancy and breed characteristics",
        },
        {
          id: "american-beauceron-club-health-statement",
          role: "verified",
          locator: "Health and screening recommendations",
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
