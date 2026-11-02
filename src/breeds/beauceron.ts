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
      metadataCheckedOn: "2026-10-27",
    },
  ],
  overview: {
    summary:
      "The Beauceron is a large, powerful French herding dog valued for its stamina, intelligence, confidence, and ability to work with livestock. Its short, dense coat is most often black and tan, with a harlequin pattern also recognised. It is a capable working breed that generally benefits from consistent training, purposeful activity, and a close partnership with its household.",
    description:
      "Strong and muscular without being cumbersome, the Beauceron has a slightly longer-than-tall outline and an extended, supple stride. Its head is long and well proportioned, with a dark nose, dark eyes in most colour varieties, and ears that may be half-pricked or dropped. The short, coarse outer coat lies close to the body over a dense undercoat. The familiar black-and-tan pattern gives the breed its traditional nickname, Bas Rouge, referring to the reddish-tan markings on the legs. The harlequin variety combines grey and black mottling with tan markings. Double dewclaws on the hind legs are a distinctive feature of the breed standard. Confident, gentle, and fearless are central temperament qualities described in the standard, but individual behaviour depends on genetics, socialisation, training, and experience.",
    history:
      "The Beauceron is an old French plains sheepdog. By the end of the nineteenth century, the names Beauce Dog, Beauceron, and Bas Rouge were used for this short-coated type of French herding dog. Its early role involved moving and guarding sheep flocks. The breed's build, stamina, and working temperament helped it remain useful for demanding tasks. Today, the Beauceron is known both as a herding and guarding dog and as a participant in structured working activities.",
    originalPurpose:
      "Herding and guarding sheep flocks, with a build and temperament suited to sustained work.",
    currentRoles: [
      "Herding and livestock management where appropriate",
      "Property and livestock guarding with suitable training and management",
      "Dog sports and structured working activities",
      "Tracking, obedience, and other training activities that provide mental engagement",
      "Companion for experienced, active households able to meet its exercise and training needs",
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
      unit: null,
      male: null,
      female: null,
    },
    lifespanYears: {
      min: 10,
      max: 12,
    },
    coatType:
      "Short, thick, firm, coarse, and close-lying outer coat with a short, fine, dense, downy undercoat.",
    coatLength:
      "The body coat is 3–4 cm long. The head coat is shorter, and light feathering is present on the buttocks and underside of the tail.",
    coatColors: [
      "Black and tan, with black as the base colour and rich reddish-tan markings",
      "Harlequin: grey and black mottling with tan markings",
    ],
    sheddingLevel: "Moderate to high as a practical estimate; seasonal shedding may be noticeable.",
    droolingLevel: null,
    distinctiveFeatures: [
      "Large, powerful, muscular build without excessive heaviness",
      "Body slightly longer than height at the withers",
      "Short, coarse coat over a dense undercoat",
      "Black-and-tan coat known traditionally as Bas Rouge",
      "Harlequin coat with grey and black mottling plus tan markings",
      "Double dewclaws on the hind legs are a defining breed-standard feature",
      "Long head, dark nose, and oval eyes",
      "Ears may be half-pricked or dropped",
      "Long, low-carried tail that reaches at least to the hock and forms a slight hook",
      "Free, supple movement with an extended trot",
    ],
  },
  temperament: {
    traits: [
      "Confident and self-assured",
      "Gentle and fearless according to the breed standard",
      "Intelligent and responsive to structured training",
      "Loyal and often closely bonded with its household",
      "Naturally alert, with herding and guarding instincts",
      "Energetic and inclined to benefit from having a purposeful task",
      "May be reserved with unfamiliar people; early positive socialisation is important",
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
        "High. The Beauceron was developed for sustained herding and guarding work. Most healthy adults need substantial daily physical activity along with training and mental enrichment. The right amount depends on age, health, fitness, and individual temperament.",
      minutesPerDay: null,
      activities: [
        "Long walks and hikes adapted to fitness and weather",
        "Structured obedience and reward-based training",
        "Herding activities where suitable and available",
        "Tracking and scent-search games",
        "Dog sports appropriate to the individual dog's age and physical condition",
        "Impulse-control exercises and handler check-ins",
        "Calm enrichment activities that teach the dog to settle after exercise",
      ],
    },
    grooming: {
      level:
        "Low to moderate. The coat is short and practical, but routine brushing helps remove loose hair and allows regular inspection of the skin.",
      brushing:
        "Brush weekly with a suitable short-coat brush or grooming mitt. Increase brushing when shedding becomes more noticeable, and inspect the coat after outdoor activity.",
      bathing:
        "Bathe when needed with a dog-formulated shampoo. Avoid excessive bathing and rinse thoroughly.",
      notes: [
        "Check the skin and coat regularly for irritation, parasites, or small injuries.",
        "Inspect the ears and clean them only when needed using a suitable veterinary-recommended product.",
        "Trim nails as needed and check the pads after exercise.",
        "Keep the hind dewclaws and their nails in good condition.",
        "Brush the teeth regularly with dog-safe toothpaste.",
      ],
    },
    training: {
      difficulty:
        "Moderate to demanding as a practical owner-oriented estimate. The breed is intelligent and trainable, but its size, energy, and herding or guarding instincts make consistent, thoughtful handling important.",
      tips: [
        "Start reward-based training early and keep cues consistent across household members.",
        "Teach loose-lead walking and calm greetings before the dog becomes physically powerful.",
        "Build recall and impulse control gradually in secure, low-distraction environments.",
        "Reward calm settling, not only active performance.",
        "Use short, engaging training sessions and increase difficulty progressively.",
        "Provide appropriate outlets for herding and guarding instincts rather than encouraging uncontrolled chasing or confrontational behaviour.",
        "Avoid harsh handling; clear boundaries and predictable reinforcement are more suitable for building cooperation.",
      ],
      socialization:
        "Provide gradual, positive exposure to different people, calm dogs, handling, household routines, and everyday environments from an early age. Supervise interactions with children and unfamiliar animals. Socialisation should build confidence and safe behaviour rather than forcing the dog into overwhelming situations.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,
      climates: [
        "Provide shade, ventilation, and fresh water during warm weather.",
        "Reduce strenuous exercise during hot or humid conditions and monitor for overheating.",
        "Provide a dry, comfortable resting area in cold or wet weather.",
        "A secure yard can be useful, but it does not replace structured exercise, training, and companionship.",
      ],
      aloneTimeTolerance: null,
    },
  },
  nutrition: {
    dietType:
      "A complete and balanced diet appropriate to the dog's life stage, body condition, activity, and health needs.",
    feedingFrequency: {
      puppy:
        "Feed a complete large-breed puppy diet in multiple meals according to age, body condition, and veterinary advice. Avoid excessive energy intake during growth.",
      adult:
        "Use a consistent meal routine and adjust portions to maintain a healthy body condition and support the dog's activity level.",
      senior:
        "Adjust diet and portions to age, activity, body condition, dental health, and any veterinary-diagnosed conditions.",
    },
    guidelines:
      "Choose a complete and balanced diet and tailor portions to the individual dog's age, activity, body condition, and weight trend. Measure food rather than relying on a universal portion size. Keep fresh water available and introduce dietary changes gradually. Because the Beauceron is a large, deep-chested dog, discuss feeding routines and the signs of gastric dilatation-volvulus (bloat) with a veterinarian. No particular diet or feeding quantity is asserted as uniquely required for this breed.",
    considerations: [
      "Monitor body condition and adjust food intake if activity levels change.",
      "Include training treats in the overall daily food allowance.",
      "During growth, use an appropriate large-breed puppy diet and avoid excessive calorie intake.",
      "Ask a veterinarian about an appropriate feeding routine and bloat risk management.",
      "Seek veterinary advice for persistent digestive symptoms, unexplained weight changes, or special dietary needs.",
    ],
    note:
      "These are general canine nutrition recommendations and do not replace individual veterinary advice. Feeding quantities should be based on the specific dog's needs.",
  },
  health: {
    overview:
      "The Beauceron is often described as a robust working breed, but that does not mean an individual is free from inherited or acquired disease. Breed-club health guidance identifies hip dysplasia as an important screening consideration, recommends eye and cardiac evaluations for breeding stock, and discusses dilated cardiomyopathy, hypothyroidism, gastric dilatation-volvulus, osteochondrosis dissecans, and allergies. The prevalence of some of these conditions in the breed is not clearly established, so they should be presented as health considerations rather than inevitable outcomes. Ask breeders for documented results from appropriate health checks and consult a veterinarian about the needs of the individual dog.",
    commonConditions: [
      "Hip dysplasia is an important inherited orthopaedic screening consideration.",
      "Cardiac disease, including dilated cardiomyopathy, has been documented; the breed-wide incidence is not established by the source reviewed.",
      "Eye problems are a reason for recommended ophthalmic evaluation of breeding stock, although a specific high prevalence is not established.",
      "Hypothyroidism has been discussed in breed-club guidance, but its incidence in Beaucerons is unclear.",
      "Gastric dilatation-volvulus (bloat) is a serious concern for large, deep-chested dogs; it is not possible to predict reliably which individual will develop it.",
      "Osteochondrosis dissecans can affect rapidly growing large-breed dogs; appropriate growth nutrition and controlled exercise are relevant preventive considerations.",
      "Food-related or environmental allergies may occur, but a Beauceron-specific prevalence was not established.",
    ],
    preventiveCare: [
      "Arrange routine veterinary examinations and follow vaccination and parasite-prevention advice appropriate to the dog's location and lifestyle.",
      "Maintain a healthy body condition and adapt exercise to age, fitness, and health.",
      "Learn the warning signs of bloat, including sudden abdominal enlargement, unproductive retching, restlessness, and distress; seek emergency veterinary care if suspected.",
      "Discuss hip, eye, and cardiac health records when selecting a puppy or breeding dog.",
      "Provide appropriate nutrition and controlled exercise during growth.",
      "Monitor mobility, stamina, appetite, skin, and behaviour, and seek veterinary advice for persistent changes.",
    ],
    recommendedScreenings: [
      "Hip evaluation through an established veterinary screening programme for breeding stock.",
      "Ophthalmic examination by a qualified veterinary eye specialist for breeding stock.",
      "Cardiac evaluation, with echocardiography when recommended by the veterinary professional or breed-club guidance.",
      "Discuss elbow and thyroid evaluation with the breeder's veterinarian; breed-club guidance encourages these checks, but the need should be assessed with appropriate professional advice.",
    ],
    dentalCare:
      "Brush the teeth regularly with dog-safe toothpaste and arrange veterinary dental checks. Seek advice for bad breath, oral pain, bleeding gums, or difficulty eating.",
    earCare:
      "Inspect the ears regularly for redness, odour, discharge, discomfort, or persistent head shaking. Clean only with a suitable product and method recommended by a veterinarian.",
    skinCare:
      "Check the skin while brushing, especially after outdoor activity. Seek veterinary advice for persistent itching, redness, sores, hair loss, or recurring irritation.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "Active owners who enjoy regular training and outdoor activity",
      "Households able to provide consistent boundaries, companionship, and mental enrichment",
      "People interested in herding, obedience, tracking, or other structured dog activities",
      "Owners willing to train and safely manage a large, powerful working dog",
    ],
    notIdealFor: [
      "People looking for a low-energy dog that needs little training or enrichment",
      "Households unable to provide regular exercise and consistent handling",
      "Owners unwilling to invest time in socialisation, recall, and calm behaviour",
      "People expecting guarding instincts to replace training, supervision, and responsible management",
    ],
  },
  funFacts: [
    "The nickname Bas Rouge means 'red stocking' and refers to the breed's reddish-tan lower-leg markings.",
    "The Beauceron is one of France's traditional plains sheepdogs and was selected for flock herding and guarding.",
    "The recognised harlequin coat combines grey and black mottling with tan markings.",
    "Double dewclaws on the hind legs are a distinctive feature specified by the breed standard.",
    "The FCI standard recognises the Beauceron as a working sheepdog and requires a working trial in its classification.",
  ],
  faq: [
    {
      question: "Where does the Beauceron come from?",
      answer:
        "The Beauceron originates in France and is associated historically with the plains around Beauce. It developed as a working sheepdog.",
    },
    {
      question: "What was the Beauceron bred to do?",
      answer:
        "It was developed to herd and guard sheep flocks. Today, it can also take part in structured training, working activities, and dog sports.",
    },
    {
      question: "How tall is a Beauceron?",
      answer:
        "The FCI standard gives a height of 65–70 cm for males and 61–68 cm for females.",
    },
    {
      question: "How much does a Beauceron weigh?",
      answer:
        "The FCI standard used for this record does not specify a weight range, so a breed-standard weight is not recorded here.",
    },
    {
      question: "What colours can a Beauceron have?",
      answer:
        "The two recognised patterns are black and tan, traditionally called Bas Rouge, and harlequin, which combines grey and black mottling with tan markings.",
    },
    {
      question: "Is the Beauceron easy to train?",
      answer:
        "The Beauceron is intelligent and can learn a wide range of tasks, but its energy, size, and working instincts make consistent reward-based training and early socialisation important.",
    },
    {
      question: "Is the Beauceron suitable for first-time dog owners?",
      answer:
        "There is no universal answer. This is a large, active working breed that needs consistent training and daily engagement. Prospective owners should consider their experience, time, environment, and access to qualified training support.",
    },
    {
      question: "What health checks should Beauceron breeders consider?",
      answer:
        "Breed-club guidance highlights hip evaluation, eye examination, and cardiac assessment for breeding stock. Discuss documented results with the breeder and a veterinarian; some other conditions are mentioned in breed-club guidance, but their prevalence is not clearly established.",
    },
    {
      question: "Does the Beauceron need a lot of exercise?",
      answer:
        "The breed was developed for sustained herding and guarding work, so most healthy adults benefit from regular physical activity plus training and mental enrichment. The appropriate amount varies by age, health, and the individual dog.",
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
      ],
      verifiedOn: "2026-10-27",
      note:
        "Alternate names are drawn from official breed nomenclature and the breed standard.",
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
          locator: "FCI classification",
        },
      ],
      verifiedOn: "2026-10-27",
      note:
        "Group and section follow the official FCI classification.",
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
      ],
      verifiedOn: "2026-10-27",
      note:
        "France is the official country of origin. The regional reference is based on the breed's name and historical context.",
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
      ],
      verifiedOn: "2026-10-27",
      note:
        "Descriptions are original paraphrases of breed-standard and kennel-club material.",
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
        "Contemporary activities are practical suggestions based on the breed's documented working background, not claims that every Beauceron performs these roles.",
    },
    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-beauceron-standard-44",
          role: "verified",
          locator: "General appearance, proportions, coat, colour, hind dewclaws, tail, and size",
        },
      ],
      verifiedOn: "2026-10-27",
      note:
        "Height and conformation details follow FCI Standard No. 44. Measurements are retained in the units published by the source.",
    },
    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The FCI standard used for this record does not specify a weight range. A separate general weight range is not assigned to both sexes because that would imply unsupported sex-specific data.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-beauceron-breed-profile",
          role: "verified",
          locator: "Breed size and life expectancy",
        },
      ],
      verifiedOn: "2026-10-27",
      note:
        "The range is reported by the kennel-club breed profile; it is a population-level expectation, not a guarantee for an individual dog.",
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
        "Shedding level is a practical estimate from coat characteristics and grooming guidance, not an official numerical rating.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A reliable breed-specific drooling level was not established.",
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
      ],
      verifiedOn: "2026-10-27",
      note:
        "Traits are paraphrased from breed-standard and kennel-club information and are not guarantees of individual behaviour.",
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
        "Scores are editorial estimates on the app's 1–5 scale, not official ratings or validated behavioural measurements.",
    },
    care: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General canine care guidance adapted to the needs of a large, active working dog.",
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
        "High activity is an owner-oriented estimate based on the breed's working background, not a formal standard rating.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A dependable breed-specific daily exercise duration in minutes was not established.",
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
        "Training difficulty is a practical estimate based on size, activity, and working instincts; the standard does not assign a difficulty score.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The sources reviewed do not establish a reliable binary apartment-suitability value for the breed.",
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
        "A secure yard may be useful for an active large dog, but it is not a formal breed requirement and does not replace exercise or training.",
    },
    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General weather-safety guidance; not a verified breed-specific climate-tolerance assessment.",
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A dependable breed-specific alone-time tolerance value was not established.",
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
        "General canine nutrition guidance; this is not a breed-specific veterinary prescription.",
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
      verifiedOn: "2026-10-27",
      note:
        "The overview distinguishes documented concerns and screening advice from conditions whose prevalence is not established.",
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
      verifiedOn: "2026-10-27",
      note:
        "The list reflects conditions and considerations discussed in breed-club guidance. It does not claim that every condition is common or that every Beauceron will develop one.",
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
        "General preventive-care advice with breed-relevant topics flagged for discussion with a veterinarian.",
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
      verifiedOn: "2026-10-27",
      note:
        "Screenings are recommendations for breeding stock from breed-club guidance, not a substitute for veterinary advice about an individual pet.",
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
        "General veterinary dental-care advice; no breed-specific dental disease claim is made.",
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
        "Routine inspection is general care advice, not a claim of a breed-specific ear-disease prevalence.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Routine coat and skin checks are general canine care advice.",
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
        "Owner-fit guidance is a practical estimate, not a universal behavioural guarantee.",
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
        "A universal family-with-children rating was not established; suitability depends on the individual dog, children, supervision, and household circumstances.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A universal suitability rating for senior owners was not established.",
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
      verifiedOn: "2026-10-27",
      note:
        "Facts are original paraphrases of the breed standard and official nomenclature.",
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
      ],
      verifiedOn: "2026-10-27",
      note:
        "Answers are original paraphrases. Unsupported weight claims and unqualified health predictions are deliberately avoided.",
    },
  },
  updatedOn: "2026-10-27",
};
