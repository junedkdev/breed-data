import type { Breed } from "../schema/breed.types";

export const gordon_setter: Breed = {
  slug: "gordon-setter",
  name: "Gordon Setter",
  scientificName: null,
  alternateNames: ["Black and Tan Setter", "Scottish Setter"],
  group: "Sporting Dogs; Gundogs (Pointing Dogs and Setters)",

  origin: {
    country: "United Kingdom",
    region: "Scotland",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/SeterSzkockiGordon.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:SeterSzkockiGordon.jpg",
      title: "SeterSzkockiGordon.jpg",
      description: "Gordon Setter photographed by Adam Ziaja.",
      creator: "Adam Ziaja",
      uploader: null,
      capturedOn: null,
      uploadedOn: null,
      width: 812,
      height: 1024,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Adam Ziaja, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-07",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Wet-Gordon-Setter.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Wet-Gordon-Setter.jpg",
      title: "Wet-Gordon-Setter.jpg",
      description: "A wet Gordon Setter.",
      creator: "Robert Breuer",
      uploader: "Net-breuer",
      capturedOn: "2004-07-01",
      uploadedOn: "2006-07-12",
      width: 1107,
      height: 1260,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Robert Breuer (Net-breuer), via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-07",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Gordon_Setter.JPG",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Gordon_Setter.JPG",
      title: "Gordon Setter.JPG",
      description: "Gordon Setter photographed in a field-working setting.",
      creator: "Nordic-Gordon-Hunters",
      uploader: "Nordic-Gordon-Hunters",
      capturedOn: "2006-04-20",
      uploadedOn: "2011-06-28",
      width: 1536,
      height: 1024,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Nordic-Gordon-Hunters, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-07",
    },
  ],

  overview: {
    summary:
      "The largest and most substantial of the setter breeds, the Gordon Setter is a Scottish pointing gundog prized for its gleaming coal-black and chestnut-tan coat, tireless field stamina, and deep family devotion. Built like a weight-carrying hunter with galloping lines, this dignified and intelligent bird dog thrives in active homes that provide vigorous daily exercise, purposeful training, and close human companionship.",

    description:
      "Combining muscular substance with aristocratic elegance, the Gordon Setter features a deep, cleanly chiseled head, expressive dark-brown eyes, and a flat-lying, glossy black coat accented by sharply defined rich chestnut-red markings. Silky feathering adorns the low-set ears, chest, belly, backs of the limbs, and tapering scimitar tail. Bred for steady endurance across rugged Scottish moors rather than explosive short-distance sprinting, the breed works methodically with an acute nose and remarkable determination. In the home, it forms an intense, protective bond with its immediate family while often remaining politely aloof with strangers. Regular aerobic outlets, reward-based training, and weekly feathering care are essential for a balanced companion.",

    history:
      "While black-and-tan bird-setting dogs worked across Great Britain as early as the seventeenth century, the breed was formally established in the late eighteenth and early nineteenth centuries at Gordon Castle in Banffshire, Scotland, by Alexander, the fourth Duke of Gordon. Selecting for exceptional scenting power, heavy bone, and unflagging stamina suited to the harsh Highland moors, the Duke refined a durable, one-hunter gundog capable of locating red grouse and partridge from dawn until dusk. Known historically as the Black and Tan Setter or Scottish Setter, the breed was officially designated the Gordon Setter in 1924 in lasting tribute to its founding patron.",

    originalPurpose:
      "Locating, pointing, and retrieving upland game birds—particularly red grouse, ptarmigan, and partridge—across rugged Scottish Highland moors.",

    currentRoles: [
      "Upland hunting and pointing gundog",
      "Field trial and hunt test competitor",
      "Devoted family companion",
      "Tracking, scent work, and agility participant",
      "Conformation show dog",
    ],
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "cm",
      male: { min: 66, max: 66 },
      female: { min: 62, max: 62 },
    },

    weight: {
      unit: "kg",
      male: { min: 29.5, max: 29.5 },
      female: { min: 25.5, max: 25.5 },
    },

    lifespanYears: {
      min: 12,
      max: 13,
    },

    coatType:
      "Soft, shining, flat-lying single-to-light-double coat that is straight or slightly waved without curl, paired with long, fine, silky feathering.",

    coatLength:
      "Short and fine on the head, ear tips, and fronts of the limbs; medium length on the torso; long and silky on the upper ears, chest, abdomen, backs of legs, and tail flag.",

    coatColors: [
      "Deep, shining coal black with lustrous chestnut-red (tan) markings",
    ],

    sheddingLevel:
      "Moderate; regular seasonal shedding managed through consistent brushing and combing.",

    droolingLevel:
      "Low to moderate; clean lip structure produces minimal drool, though water may drip after drinking.",

    distinctiveFeatures: [
      "Heaviest, most substantial build among the setter breeds, comparable to a weight-carrying hunter",
      "Deep, shining coal-black coat contrasted with sharply defined chestnut-red tan points over the eyes, muzzle, chest, and legs",
      "Deep, finely chiseled head with a clearly defined stop and broad black nose",
      "Low-set, thin, medium-sized ears lying close against the cheeks",
      "Abundant, silky feathering along the ears, chest, belly, and backs of the fore and hind legs",
      "Straight or slightly scimitar tail carried horizontally with a triangular feathered flag",
    ],
  },

  temperament: {
    traits: [
      "Deeply devoted, loyal, and affectionate with family members",
      "Intelligent, observant, and capable in field and home tasks",
      "Dignified, calm, and even-tempered indoors once mature",
      "Bold, outgoing, and tireless when working outdoors",
      "Politely reserved and discerning around unfamiliar people",
      "Slow to mature mentally and physically, retaining puppyish exuberance for several years",
      "Strong, persistent bird-finding and pointing instincts",
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 3,
      independence: 3,
      trainability: 4,
      barking: 3,
      energy: 5,
    },
  },

  care: {
    exercise: {
      level:
        "High. Engineered for all-day endurance over rough country, this athletic gundog requires substantial daily aerobic exercise and purposeful fieldwork or scenting tasks.",
      minutesPerDay: {
        min: 60,
        max: 90,
      },
      activities: [
        "Brisk daily trail hikes, long walks, and jogging sessions for mature dogs",
        "Free-running and retrieving games in securely enclosed fields",
        "Upland bird fieldwork, pointing drills, and hunt tests",
        "Scent tracking, nosework, and advanced obedience training",
        "Agility and rally courses suited to large sporting dogs",
      ],
    },

    grooming: {
      level:
        "Moderate to high. The long, silky feathering tangles easily and collects field debris, requiring thorough brushing several times weekly.",
      brushing:
        "Brush and comb the coat two to three times a week using a pin brush and metal comb, working carefully through the silky feathering behind the ears, under the armpits, along the breeches, and on the tail.",
      bathing:
        "Bathe every four to six weeks or when muddy using a mild canine shampoo and conditioner, drying the coat and ear canals thoroughly afterward.",
      notes: [
        "Inspect feathering and interdigital paw hair after every outdoor outing to remove burrs, foxtails, twigs, and ticks.",
        "Trim excess hair between the foot pads and around the lower ear canal opening to promote hygiene and airflow.",
        "Check the low-set, pendulous ears weekly for trapped moisture, wax buildup, or signs of otitis.",
        "Trim strong nails every two to three weeks and brush teeth regularly with dog-safe enzymatic toothpaste.",
      ],
    },

    training: {
      difficulty:
        "Moderate. Highly intelligent and eager to cooperate with a trusted handler, though slow maturity and a sensitive, independent streak require patient, consistent guidance.",
      tips: [
        "Use positive reinforcement with praise, play, and high-value food rewards; avoid harsh corrections that cause mental shutdown.",
        "Begin recall and impulse-control conditioning early, as strong bird scenting drive can override commands outdoors.",
        "Channel adolescent exuberance into structured nose-work, retrieving, and obedience games.",
        "Avoid repetitive, high-impact jumping before 18 to 24 months of age while growth plates close.",
        "Keep training sessions varied and purposeful to hold the interest of a thinking gundog.",
      ],
      socialization:
        "Provide broad, positive exposure to unfamiliar people, varied environments, and calm dogs throughout puppyhood and adolescence. Early socialisation helps counter natural reserve toward strangers and fosters confident, steady public manners.",
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,
      climates: [
        "Thrives in cool and temperate climates; built to withstand damp, windy Highland conditions.",
        "Sensitive to intense heat due to its heat-absorbing black coat; restrict summer exercise to cool dawn or dusk hours and provide shaded, air-conditioned rest.",
      ],
      aloneTimeTolerance:
        "Low to moderate. Deeply people-oriented and prone to separation distress or destructive chewing if left isolated for long daily hours.",
    },
  },

  nutrition: {
    dietType:
      "A high-quality, complete and balanced commercial or veterinary-formulated diet designed for large, active sporting breeds across their life stages.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Divide daily rations into two or more measured meals rather than feeding a single large portion to reduce the risk of gastric dilatation-volvulus (bloat). Maintain a lean, muscular working physique where ribs are easily palpable under the coat, and keep fresh water available at all times.",
    considerations: [
      "Strictly prohibit vigorous running, rolling, or heavy exercise for at least one hour before and after meals to mitigate bloat risk.",
      "Feed a controlled-growth large-breed puppy formula to prevent rapid skeletal growth that stresses developing hips and elbows.",
      "Adjust caloric intake upward during active hunting seasons and downward during quieter winter or summer periods.",
      "Count training treats within the daily caloric allowance.",
    ],
    note:
      "Individual energy requirements vary significantly based on age, metabolism, ambient temperature, and field workload.",
  },

  health: {
    overview:
      "Generally a sturdy and resilient gundog with an average lifespan of 12 to 13 years. Responsible breeding programs prioritize orthopaedic evaluations, comprehensive ophthalmic exams, and genetic testing for late-onset progressive retinal atrophy, while owners must remain vigilant against acute gastric torsion.",

    commonConditions: [
      "Gastric dilatation-volvulus (GDV / bloat), a life-threatening emergency involving rapid stomach distension and rotation in deep-chested breeds",
      "Hip dysplasia and elbow dysplasia, developmental joint malformations leading to osteoarthritis and lameness",
      "Progressive retinal atrophy (PRA-rcd4), an inherited late-onset photoreceptor degeneration causing night blindness and eventual vision loss",
      "Cataracts, retinal dysplasia, and entropion or ectropion",
      "Autoimmune thyroiditis and hypothyroidism",
      "Otitis externa, promoted by low-set, feathered ears that retain moisture",
      "Cerebellar abiotrophy (neonatal/juvenile ataxia), a rare inherited neurological disorder monitored via genetic testing",
    ],

    preventiveCare: [
      "Educate all family members on the emergency signs of bloat: unproductive retching, distended abdomen, pacing, and salivation.",
      "Discuss prophylactic gastropexy with a veterinarian if the dog undergoes spay, neuter, or abdominal surgery.",
      "Verify parentage health clearances for hips, elbows, eyes, and PRA-rcd4 DNA status prior to acquiring a puppy.",
      "Clean and dry the pendulous ear canals weekly, particularly after swimming or hunting in wet cover.",
      "Maintain a lean body weight and avoid over-exercising young dogs on hard surfaces during skeletal maturation.",
    ],

    recommendedScreenings: [
      "Radiographic hip evaluation through a recognized orthopaedic screening scheme to screen for hip dysplasia",
      "Radiographic elbow evaluation to screen for elbow dysplasia",
      "Annual clinical eye examination by a board-certified veterinary ophthalmologist",
      "DNA genetic test for rod-cone dysplasia type 4 (PRA-rcd4) to identify carrier or affected status",
      "Comprehensive thyroid panel including thyroglobulin autoantibodies (TgAA) for breeding stock",
    ],

    dentalCare:
      "Brush teeth several times weekly with enzymatic canine toothpaste and schedule professional veterinary dental cleanings as needed to prevent periodontal disease.",

    earCare:
      "Inspect the low-set, heavily feathered ears weekly for redness, debris, grass awns, or foul odor. Trim excess hair inside the ear flap to improve ventilation and clean gently with a veterinarian-approved solution.",

    skinCare:
      "Part the dense coat during brushing to check the skin for ticks, burrs, field abrasions, or hot spots, drying the underlayer thoroughly after wet outings.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Active families, runners, hikers, and upland hunters who can provide 60 to 90 minutes of daily outdoor exercise",
      "Owners seeking a deeply loyal, affectionate, and dignified household companion",
      "Homes with a spacious, securely fenced yard and commitment to regular coat brushing",
      "Handlers interested in field trials, hunt tests, tracking, scent work, or obedience",
    ],

    notIdealFor: [
      "Sedentary households or owners who can only offer brief neighborhood strolls",
      "Apartment dwellers or cramped urban environments lacking safe running space",
      "People who leave their dog isolated alone for long workdays without companionship",
      "Owners unwilling to manage regular grooming, burrs, and preventative bloat precautions",
    ],
  },

  funFacts: [
    "Established at Gordon Castle in Scotland by Alexander, the fourth Duke of Gordon, the breed was historically known simply as the Black and Tan Setter until 1924.",
    "It is the heaviest and most heavily boned of the four main setter breeds, built deliberately for endurance over rugged heather moors rather than sheer speed.",
    "Historical accounts note that the Duke of Gordon also kept tri-coloured black, white, and tan setters at his castle because they were easier to spot against dark Highland heather.",
    "Known as a 'one-family dog', the breed is famous for its intense devotion to its household while remaining dignified and reserved with strangers.",
  ],

  faq: [
    {
      question: "How large does an adult Gordon Setter get?",
      answer:
        "Standard height at the withers is 66 cm for adult males and 62 cm for adult females, with benchmark weights of 29.5 kg for males and 25.5 kg for females.",
    },
    {
      question: "What is the average lifespan of a Gordon Setter?",
      answer:
        "The breed typically lives 12 to 13 years when supported by conscientious preventive care, a lean diet, and regular exercise.",
    },
    {
      question: "What coat colour is accepted in the Gordon Setter?",
      answer:
        "The signature coat is a deep, shining coal black with clearly defined, lustrous chestnut-red tan markings over the eyes, sides of the muzzle, throat, chest, and legs. A very small white spot on the chest is permissible.",
    },
    {
      question: "How much daily exercise does a Gordon Setter require?",
      answer:
        "As an energetic working gundog, it requires 60 to 90 minutes of vigorous daily exercise, combining brisk walks or hikes with opportunities for free running, retrieving, and scent work.",
    },
    {
      question: "What health screenings should I ask a breeder about?",
      answer:
        "Prospective owners should request documented clearances for hip and elbow dysplasia, annual eye exams by a veterinary ophthalmologist, and DNA test results for progressive retinal atrophy (PRA-rcd4).",
    },
    {
      question: "Why is bloat a serious concern for Gordon Setters?",
      answer:
        "Because of its deep, narrow chest, the breed is susceptible to gastric dilatation-volvulus (GDV), where the stomach fills with gas and twists. Owners should feed divided meals, restrict vigorous exercise around mealtime, and learn the emergency symptoms.",
    },
  ],

  references: [
    "american-kennel-club-gordon-setter",
    "fci-gordon-setter-standard",
    "gordon-setter-club-of-america-health-statement",
    "american-kennel-club-sporting-group-health-testing",
    "the-dog-api",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
    "wikimedia-gordon-setter-adam-ziaja",
    "wikimedia-gordon-setter-robert-breuer",
    "wikimedia-gordon-setter-nordic-hunters",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No distinct breed-specific scientific name was established in the consulted references.",
    },

    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "History: known as the Black and Tan Setter or Scottish Setter",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Black and Tan Setter and Scottish Setter are documented historical names used prior to 1924.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "FCI classification: Group 7 Pointing Dogs, Section 2.2 Setters",
        },
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "Sporting Group classification",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Classified under sporting gundogs, pointing dogs, and setters.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Origin: Great Britain",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Official breed standard identifies Great Britain (United Kingdom) as the country of origin.",
    },

    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "Breed history and association with Scotland",
        },
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Origin and historical context",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Specifically developed in Scotland at Gordon Castle in Banffshire.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "About the breed, history, exercise, training, and grooming",
        },
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Utilization, general appearance, and temperament",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Original narrative synthesising Scottish Highland origins, Duke of Gordon history, and pointing gundog conformation.",
    },

    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "cited",
          locator: "Average size and build",
        },
        {
          id: "fci-gordon-setter-standard",
          role: "cited",
          locator: "General appearance and size",
        },
      ],
      verifiedOn: null,
      note: "Categorised as large based on adult height of 62 to 66 cm and substantial bone.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Size and weight: Height at the withers: Males 66 cm, Females 62 cm",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Stored in exact published centimetres from the official standard: 66 cm for males and 62 cm for females.",
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Size and weight: Weight: Males 29.5 kg, Females 25.5 kg",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Stored in exact published kilograms from the official standard: 29.5 kg for males and 25.5 kg for females.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "Life Expectancy: 12–13 years",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span: 12 - 13 years",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Published typical life expectancy range of 12 to 13 years.",
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Coat, hair: soft and shining, straight or slightly waved",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Official standard specifies soft, shining, flat-lying hair without curl, accompanied by silky feathering.",
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Coat, hair: short and fine on head and front of legs; moderate on body; long and fine feathering",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Preserves the standard distinction between short head/front-limb hair, medium body coat, and long feathering.",
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Coat, colour: Deep, shining coal black, without rustiness, with markings of chestnut red",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Official standard permits only deep coal black with clearly defined lustrous chestnut-red tan markings.",
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "Grooming and shedding",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Moderate seasonal shedding managed through regular weekly brushing.",
    },

    "physical.droolingLevel": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Clean lip line results in low to moderate drooling compared to heavy-jowled breeds.",
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "General appearance, head, ears, tail, coat, and movement",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Synthesises standard-defined features: weight-carrying hunter build, coal-black/chestnut coat, deep head, and scimitar feathered tail.",
    },

    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "About the breed, temperament, and training",
        },
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Behaviour and temperament: Intelligent, able and dignified; bold, outgoing, kindly even disposition",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Official standard and breed profiles establish a dignified, intelligent, loyal, and field-driven temperament.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "cited",
          locator: "Breed traits, energy, sociability, and training",
        },
      ],
      verifiedOn: null,
      note: "Comparative scores reflecting high family devotion, high stamina, and moderate reserve with strangers.",
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "Exercise and breed purpose",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "High daily exercise requirements reflecting upland hunting endurance.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "cited",
          locator: "Exercise needs",
        },
      ],
      verifiedOn: null,
      note: "Estimated 60 to 90 minutes of vigorous daily exercise and scenting work.",
    },

    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "cited",
          locator: "Exercise and training",
        },
      ],
      verifiedOn: null,
      note: "Recommended activities tailored to pointing gundog instincts, including hiking, retrieving, and fieldwork.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "Grooming",
        },
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Coat, hair",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Regular brushing and combing two to three times weekly to prevent mats in long silky feathering.",
    },

    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "Training and exercise",
        },
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Behaviour and temperament",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Patient, reward-based training is essential to guide a slow-maturing, intelligent gundog.",
    },

    "care.livingEnvironment": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "cited",
          locator: "Exercise, family attachment, and living environment",
        },
      ],
      verifiedOn: null,
      note: "Practical environmental guidance highlighting need for outdoor running space, companionship, and summer heat precautions.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Global Nutrition Guidelines",
        },
      ],
      verifiedOn: null,
      note: "Nutritional guidance follows global veterinary standards, emphasizing divided meals and rest around eating to mitigate bloat.",
    },

    "nutrition.feedingFrequency": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal breed-specific meal frequency was established in the consulted sources.",
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "Health and recommended health tests",
        },
        {
          id: "gordon-setter-club-of-america-health-statement",
          role: "verified",
          locator: "Hip and elbow evaluations, eye examination, and PRA-rcd4 testing",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Summarises parent-club health testing priorities and deep-chested bloat risk.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "Health; bloat and screening recommendations",
        },
        {
          id: "gordon-setter-club-of-america-health-statement",
          role: "verified",
          locator: "Hip dysplasia, elbow dysplasia, eye evaluation, and PRA-rcd4",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Documented health concerns including GDV, hip and elbow dysplasia, PRA-rcd4, hypothyroidism, and otitis externa.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "cited",
          locator: "Health and exercise guidance",
        },
        {
          id: "gordon-setter-club-of-america-health-statement",
          role: "cited",
          locator: "Recommended health evaluations",
        },
      ],
      verifiedOn: null,
      note: "Preventive care recommendations combining bloat awareness, orthopaedic protection during growth, and routine ear drying.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-sporting-group-health-testing",
          role: "verified",
          locator: "Gordon Setter recommended health tests",
        },
        {
          id: "gordon-setter-club-of-america-health-statement",
          role: "verified",
          locator: "Hips, elbows, eyes, and PRA-rcd4",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Parent-club recommended screenings: hip and elbow radiographs, annual ophthalmologist exam, PRA-rcd4 DNA test, and thyroid panel.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "Pet Dental Care",
        },
      ],
      verifiedOn: null,
      note: "Regular tooth brushing with enzymatic canine toothpaste and routine veterinary dental checks.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Weekly inspection and cleaning of low-set, feathered ear canals to prevent moisture accumulation and otitis.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Skin inspection beneath long feathering for burrs, ticks, or field abrasions.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "cited",
          locator: "Exercise, temperament, grooming, and training",
        },
      ],
      verifiedOn: null,
      note: "Editorial suitability assessment based on high exercise demands, size, and close family attachment.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "History and breed characteristics",
        },
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Origin, utilization, coat colour, and general appearance",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Duke of Gordon history, heaviest setter status, historical colour variations, and one-family loyalty verified.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-gordon-setter",
          role: "verified",
          locator: "Breed profile, exercise, grooming, nutrition, and health",
        },
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Size, colour, origin, and working purpose",
        },
        {
          id: "gordon-setter-club-of-america-health-statement",
          role: "verified",
          locator: "Recommended health testing",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "FAQ answers synthesize standard size and weight, lifespan, coat markings, exercise, health testing, and bloat prevention.",
    },

    "physical.weight.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Size and weight: Weight: Males 29.5 kg",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Standard male weight benchmark recorded as 29.5 kg.",
    },

    "physical.weight.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-gordon-setter-standard",
          role: "verified",
          locator: "Size and weight: Weight: Females 25.5 kg",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Standard female weight benchmark recorded as 25.5 kg.",
    },
  },

  updatedOn: "2026-11-07",
};
