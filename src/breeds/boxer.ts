import type { Breed } from "../schema/breed.types";

export const boxer: Breed = {
  slug: "boxer",
  name: "Boxer",
  scientificName: null,

  alternateNames: [
    "Deutscher Boxer",
    "German Boxer",
  ],

  group:
    "FCI Group 2 — Pinscher and Schnauzer type, Molossoid breeds, Swiss Mountain and Cattle Dogs; Section 2.1 — Molossoid breeds, mastiff type; with working trial",

  origin: {
    country: "Germany",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chata_the_Boxer.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Chata_the_Boxer.jpg",
      title: "Chata the Boxer.jpg",
      description: "A female Boxer named Chata.",
      creator: "Tomascastelazo",
      uploader: "Tomascastelazo",
      capturedOn: "2015-09-27",
      uploadedOn: "2015-09-28",
      width: 3164,
      height: 3812,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "© Tomas Castelazo, www.tomascastelazo.com / Wikimedia Commons / CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Photo: “Chata the Boxer.jpg” by Tomascastelazo. No changes made.",
      restrictions: null,
      metadataCheckedOn: "2026-11-16",
    },
  ],

  overview: {
    summary:
      "The Boxer is a medium-sized, square-built German working dog distinguished by its muscular frame, sleek short coat, broad blunt muzzle, and expressive dark eyes. Playful and deeply affectionate with its household yet self-assured and watchful around strangers, the breed descends from central European hunting dogs bred to grip and hold large game. It thrives on daily physical activity, close family companionship, and careful protection from hot or humid weather.",

    description:
      "Built on a compact, square outline, the Boxer combines sturdy bone with lean, sharply defined musculature and energetic, ground-covering movement. Its short, hard, glossy coat lies tight against the body in shades of fawn or brindle, always paired with a dark facial mask and sometimes accented by white markings. A broad, powerful muzzle with an undershot lower jaw and dark-rimmed eyes creates an alert, animated expression. Naturally drop-eared with folded tips that turn forward when attentive and carrying a full-length natural tail, the breed retains an exuberant, people-focused temperament well into adulthood and benefits from early manners training, steady impulse control, and temperature-aware exercise.",

    history:
      "Developed in late nineteenth-century Germany, the Boxer traces its direct ancestry to the small Brabant Bullenbeisser, a traditional hunting dog used by huntsmen to catch and hold wild boar and other large game until the hunter arrived. Early breeders crossed these working dogs with Bulldog-type stock, selecting for a wide, gripping muzzle, clean athleticism, and steadfast courage. As large-game estates declined, the breed transitioned into a versatile guardian, service dog, and devoted household companion classified among the mastiff-type Molossoid working dogs.",

    originalPurpose:
      "Catching and holding large game on hunts, later transitioning into household guarding, utility work, and companionship.",

    currentRoles: [
      "Devoted household companion",
      "Obedience and rally competition",
      "Agility and canine athletic sports",
      "Tracking and recreational nose work",
      "Conformation exhibition",
      "Service, assistance, and working roles where individually suited",
    ],
  },

  physical: {
    sizeCategory: "Medium-sized, muscular, square-built working dog",

    height: {
      unit: "cm",
      male: { min: 57, max: 63 },
      female: { min: 53, max: 59 },
    },

    weight: {
      unit: "kg",
      male: { min: 30, max: null },
      female: { min: null, max: 25 },
    },

    lifespanYears: { min: 10, max: 12 },

    coatType:
      "Short, hard, glossy single coat lying flat and tight against the body.",

    coatLength:
      "Short and smooth-fitting throughout.",

    coatColors: [
      "Fawn, ranging from pale yellow-fawn to deep deer-red",
      "Brindle with dark or black stripes on a fawn background",
      "Fawn or brindle accompanied by a black facial mask",
      "Fawn or brindle with white markings covering up to one-third of the coat",
    ],

    sheddingLevel: null,

    droolingLevel: null,

    distinctiveFeatures: [
      "Compact, square body profile with equal height and body length",
      "Clean, strongly developed musculature over sturdy bone",
      "Broad, deep, powerful muzzle with a black nasal pad",
      "Undershot lower jaw curving slightly upward",
      "Dark, expressive eyes bordered by dark eyelid rims",
      "Short, hard, glossy coat in fawn or brindle with a black mask",
      "Deep chest extending down to the elbows",
      "High-set natural ears lying flat against the cheeks when relaxed",
      "High-set tail left at its natural length and carried cheerfully",
      "Elastic, powerful stride with strong rear drive",
    ],
  },

  temperament: {
    traits: [
      "Affectionate and deeply attached to family members",
      "Faithful and protective toward its household",
      "Alert and observant",
      "Self-assured and steady-nerved",
      "Fearless and courageous when challenged",
      "Playful and exuberant in daily interaction",
      "Even-tempered and composed when well socialised",
      "Reserved or watchful toward unfamiliar people",
      "Bright and responsive to reward-based training",
      "Energetic and athletic",
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 4,
      independence: 2,
      trainability: 4,
      barking: 3,
      energy: 5,
    },
  },

  care: {
    exercise: {
      level:
        "High. Energetic and playful well into maturity, Boxers need daily physical workouts paired with mental problem-solving, scaled carefully to age, health, and outdoor temperature.",

      minutesPerDay: null,

      activities: [
        "Brisk daily walks with time for sniffing and exploration",
        "Reward-based obedience and impulse-control drills",
        "Structured fetch and tug games",
        "Age-appropriate agility and conditioning exercises",
        "Tracking, scent games, and hidden-toy searches",
        "Food-dispensing puzzles and indoor enrichment",
        "Supervised play sessions with well-matched dogs",
      ],
    },

    grooming: {
      level: "Low",

      brushing:
        "Go over the sleek coat once or twice weekly with a rubber grooming mitt or soft bristle brush to lift loose hairs and surface dust while inspecting the skin and muzzle folds.",

      bathing:
        "Bathe only as needed with a mild canine shampoo, rinsing thoroughly and drying the coat and facial wrinkles completely so moisture does not linger.",

      notes: [
        "Weekly brushing keeps the short, glossy coat clean and tidy.",
        "Inspect and gently wipe facial wrinkles so moisture or debris does not irritate the skin.",
        "Keep nails trimmed short to support sound foot posture.",
        "Brush teeth several times a week using canine toothpaste.",
        "Inspect ears weekly for redness, wax build-up, or unpleasant odour.",
        "Provide shade, cool flooring, and fresh water during warm weather.",
        "Restrict vigorous running during hot or humid hours.",
      ],
    },

    training: {
      difficulty:
        "Moderate. Intelligent and eager to engage with their people, Boxers learn quickly when sessions are upbeat, though their physical strength and bouncy enthusiasm require early manners and consistent boundaries.",

      tips: [
        "Use upbeat, reward-based methods with clear, consistent household rules.",
        "Begin polite greeting habits and loose-lead walking in early puppyhood.",
        "Reinforce four-paws-on-the-floor greetings to curb exuberant jumping.",
        "Build reliable lead manners before the youngster reaches full adult strength.",
        "Keep training sessions short, varied, and engaging rather than repetitive.",
        "Practise recall in enclosed or long-line settings before off-lead freedom.",
        "Reward calm settling on a mat when guests arrive or activity winds down.",
        "Channel working drive into scent games, trick training, and puzzle toys.",
        "Move training indoors during hot or humid weather.",
        "Supervise play closely and build scheduled rest breaks into busy days.",
      ],

      socialization:
        "Expose puppies gradually and positively to varied people, polite dogs, gentle body handling, household noises, and novel surfaces. Reinforce calm curiosity without forcing contact, and continue structured manners practice through adolescence. Always supervise interactions around children and unfamiliar dogs, giving the dog quiet downtime when excited.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: null,

      climates: [
        "Best suited to temperate conditions with climate-controlled indoor living.",
        "Vulnerable to overheating in hot or humid weather due to its shortened muzzle.",
        "Needs protection from freezing cold because its short single coat lacks an insulating undercoat.",
        "Requires reliable shade, airflow, and fresh drinking water outdoors.",
        "Schedule walks and energetic play for early morning or evening during summer.",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "Complete, balanced canine diet formulated for the dog's life stage, body condition, activity output, and veterinary needs.",

    feedingFrequency: {
      puppy:
        "Feed a complete growth formula split into multiple age-appropriate meals daily, adjusting portions steadily as the puppy develops.",

      adult:
        "Offer measured meals on a regular daily schedule, adjusting intake to preserve a visible waist and lean muscular condition.",

      senior:
        "Tailor calorie density and portion size to changes in metabolism, mobility, and veterinary health recommendations.",
    },

    guidelines:
      "Measure daily rations rather than free-feeding, monitor rib cover and waist tuck regularly, and deduct training treats from the daily calorie budget. Transition between foods gradually over several days unless directed otherwise by a veterinarian, and keep clean water available at all times.",

    considerations: [
      "Keep body weight lean to reduce strain on hips, elbows, and the cardiovascular system.",
      "Scale portions to match seasonal exercise levels and individual metabolism.",
      "Ensure fresh drinking water is always accessible, particularly after play.",
      "Include training rewards and dental chews within total daily calorie intake.",
      "Select a complete diet matched to puppy, adult, or senior life stage.",
      "Consult a veterinarian promptly for unexplained weight loss, digestive upset, or appetite changes.",
    ],

    note:
      "General canine feeding guidance; exact ration sizes depend on individual age, calorie density of the food, workload, and medical status.",
  },

  health: {
    overview:
      "Boxers have several well-documented health priorities, most notably inherited cardiac conditions and a heightened predisposition to neoplasia (cancer). Primary-care veterinary studies also identify ear infections (otitis externa), gingival growths (epulis), corneal ulcers, and periodontal disease among the most frequently diagnosed disorders in the breed. In addition, the shortened muzzle can make some individuals more susceptible to heat stress and upper-airway resistance. Responsible breeding programmes screen prospective parents for cardiac, orthopaedic, thyroid, and specific genetic disorders, while owners should prioritise routine veterinary auscultation, prompt lump checks, and careful heat management.",

    commonConditions: [
      "Cardiac disorders, including aortic or subaortic stenosis and arrhythmogenic right ventricular cardiomyopathy (ARVC / Boxer cardiomyopathy).",
      "Cutaneous and systemic neoplasms, including mast cell tumours and lymphoma.",
      "Otitis externa (ear canal inflammation and infection) and gingival epulis.",
      "Corneal ulceration and related ocular surface disorders.",
      "Canine hip dysplasia and elbow dysplasia.",
      "Upper-airway resistance or heat intolerance associated with a shortened muzzle.",
      "Autoimmune thyroiditis and hypothyroidism.",
      "Degenerative myelopathy.",
    ],

    preventiveCare: [
      "Schedule regular veterinary wellness checks, including careful cardiac auscultation at every visit.",
      "Discuss specialist cardiology evaluation or Holter monitoring if a murmur, arrhythmia, or fainting episode occurs.",
      "Verify that breeding parents hold documented hip, elbow, thyroid, cardiac, and genetic test clearances.",
      "Review DNA test results for ARVC and degenerative myelopathy with a veterinarian when selecting breeding stock.",
      "Inspect the skin and gums monthly for new lumps, growths, or slow-healing sores and have them evaluated early.",
      "Seek prompt veterinary care for squinting, eye redness, tearing, or corneal cloudiness.",
      "Protect against heat exhaustion by limiting warm-weather exertion and watching breathing effort closely.",
      "Keep the dog at a lean, athletic weight throughout life.",
    ],

    recommendedScreenings: [
      "Radiographic hip evaluation for breeding stock.",
      "Radiographic elbow evaluation for breeding stock.",
      "Autoimmune thyroiditis laboratory panel for breeding stock.",
      "Specialist cardiologist auscultation and echocardiographic screening for aortic/subaortic stenosis.",
      "Congenital aortic valve disease cardiac evaluation.",
      "Arrhythmogenic right ventricular cardiomyopathy (ARVC) DNA test.",
      "Annual 24-hour Holter electrocardiogram monitoring for breeding dogs.",
      "Degenerative myelopathy (SOD1 common variant) DNA test.",
    ],

    dentalCare:
      "Brush teeth several times per week with canine enzymatic toothpaste and inspect the gums regularly for benign gingival overgrowths (epulides), tartar, or oral discomfort during veterinary visits.",

    earCare:
      "Inspect the drop ears weekly for redness, odour, excess wax, or head shaking, and clean gently with a veterinarian-recommended ear solution when needed.",

    skinCare:
      "Check the coat, skin, and facial folds during weekly brushing for lumps, hives, fold moisture, or persistent sores, having any new or changing mass examined promptly by a veterinarian.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Active individuals and families who enjoy daily walks, play, and training",
      "Handlers who appreciate an expressive, people-oriented working companion",
      "Households committed to supervising interactions between dogs and children",
      "Owners who use upbeat, reward-based training and clear boundaries",
      "People attentive to warm-weather safety and indoor climate comfort",
      "Owners proactive about routine veterinary screenings and lump checks",
    ],

    notIdealFor: [
      "Sedentary households seeking a low-energy dog",
      "Homes where the dog would be left isolated for long periods each day",
      "Handlers uncomfortable managing a strong, athletic dog on lead",
      "Owners expecting an outdoor working dog in hot or freezing climates",
      "People unwilling to budget for proactive veterinary monitoring",
    ],
  },

  funFacts: [
    "Developed in Germany during the late nineteenth century, the breed takes its German name, Deutscher Boxer, from its homeland.",
    "Its immediate forebear was the small Brabant Bullenbeisser, a historical hunting dog bred to grip and hold large game.",
    "Early selection focused heavily on a wide, powerful muzzle and upturned lower jaw capable of holding quarry securely.",
    "Internationally, the Boxer is grouped among the mastiff-type Molossoid working breeds and competes in working trials.",
    "Recognised coat colours are restricted to shades of fawn and brindle, each accented by a dark facial mask.",
    "Many Boxers retain their signature exuberant, puppy-like playfulness well into their adult years.",
    "Alongside its role as a spirited family companion, the Boxer has served as a courier, guard, and utility working dog.",
  ],

  faq: [
    {
      question: "Where did the Boxer originate?",
      answer:
        "The Boxer originated in Germany in the late nineteenth century, descending directly from the small Brabant Bullenbeisser hunting dog crossed with Bulldog-type stock.",
    },
    {
      question: "What is a Boxer's typical temperament?",
      answer:
        "Boxers are self-assured, alert, playful, and deeply devoted to their households. While exuberant and affectionate with family members, they can be watchful around strangers, and individual behaviour is shaped by genetics, early socialisation, and reward-based training.",
    },
    {
      question: "How tall does a Boxer grow?",
      answer:
        "Adult males measure 57–63 cm at the withers, while adult females measure 53–59 cm.",
    },
    {
      question: "How much does an adult Boxer weigh?",
      answer:
        "Reference weights are over 30 kg for a male standing around 60 cm at the withers and approximately 25 kg for a female standing around 56 cm.",
    },
    {
      question: "What coat colours are recognised in the Boxer?",
      answer:
        "The recognised ground colours are fawn (from pale yellow to dark deer-red) and brindle (dark or black stripes on a fawn base), both featuring a black mask and sometimes white markings covering up to one-third of the body.",
    },
    {
      question: "What is the life expectancy of a Boxer?",
      answer:
        "Typical life expectancy is 10–12 years, while primary-care veterinary research in the UK has recorded an overall median/average lifespan of around 10.5 years.",
    },
    {
      question: "How much exercise does a Boxer need?",
      answer:
        "Boxers are energetic, athletic dogs that need daily brisk walks, interactive play, and mental enrichment, with intensity scaled back during hot or humid weather.",
    },
    {
      question: "Are Boxers easy to train?",
      answer:
        "They are bright and eager to engage with their handlers, responding well to short, varied, reward-based sessions, though early lead manners and impulse-control training are essential given their strength and enthusiasm.",
    },
    {
      question: "Do Boxers make good family companions?",
      answer:
        "Yes, they are renowned for their affectionate, patient, and playful bond with family members, provided interactions with children are supervised and polite greeting manners are taught early.",
    },
    {
      question: "What health conditions are most common in Boxers?",
      answer:
        "Key health concerns include cardiac diseases (such as aortic stenosis and Boxer cardiomyopathy/ARVC), mast cell tumours and other cancers, ear infections, gingival growths (epulides), corneal ulcers, hip dysplasia, and heat sensitivity.",
    },
    {
      question: "Which health screenings are recommended before breeding a Boxer?",
      answer:
        "Recommended pre-breeding evaluations include hip and elbow radiographs, thyroid panels, specialist cardiac auscultation and echocardiography, annual 24-hour Holter monitoring, and DNA testing for ARVC and degenerative myelopathy.",
    },
    {
      question: "How well do Boxers tolerate hot or cold weather?",
      answer:
        "Because of their shortened muzzle and single coat without undercoat, Boxers tolerate neither extreme heat nor freezing cold well; keep them indoors in climate-controlled comfort and schedule warm-weather walks for cooler morning or evening hours.",
    },
  ],

  references: [
    "fci-boxer-standard-144",
    "akc-boxer-breed-profile",
    "american-boxer-club-health-screening",
    "rvc-vetcompass-boxer-study-2023",
    "rvc-boxer-health-study-summary-2023",
    "pdsa-boxer-breed-health",
    "wikimedia-chata-boxer-photo",
    "the-dog-api",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator: "Breed title: Deutscher Boxer (Boxer)",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Follows the official German and English breed titles.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Reviewed breed standards and veterinary references do not establish a separate scientific name for the Boxer.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator: "FCI classification: Group 2, Section 2.1, with working trial",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group (Working)",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Uses the full FCI group and section classification; The Dog API lists Working.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator: "Origin: Germany",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-16",
      note: null,
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The official standard identifies Germany as the country of origin without designating a single sub-region.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator:
            "Utilization, historical summary, general appearance and behaviour/temperament",
        },
        {
          id: "akc-boxer-breed-profile",
          role: "cited",
          locator: "Breed overview, temperament and care",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history",
        },
      ],
      verifiedOn: "2026-11-16",
      note:
        "All overview text is newly written original prose synthesising the breed's documented history, conformation, and working roles.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator:
            "General appearance, proportions, head, body, coat, colour, size and weight",
        },
        {
          id: "akc-boxer-breed-profile",
          role: "cited",
          locator: "Breed size and lifespan information",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "GET /breeds/{id}/colours (lists 17 generic species colours)",
        },
      ],
      verifiedOn: "2026-11-16",
      note:
        "Physical traits and recognised coat colours follow FCI Standard No. 144 (fawn and brindle with black mask and permitted white markings) rather than The Dog API's generic 17-colour list.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator: "Size and weight: height at the withers, males 57–63 cm and females 53–59 cm",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.height.metric (males 58–64 cm, females 55–60 cm)",
        },
      ],
      verifiedOn: "2026-11-16",
      note:
        "Retains the official FCI Standard No. 144 centimetre ranges (57–63 cm male, 53–59 cm female) without conversion; The Dog API reports 58–64 cm for males and 55–60 cm for females.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator:
            "Size and weight: males over 30 kg at approximately 60 cm; females about 25 kg at approximately 56 cm",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight.metric (males 29–36 kg, females 23–29 kg)",
        },
      ],
      verifiedOn: "2026-11-16",
      note:
        "Retains the official FCI Standard No. 144 reference weights in kilograms (males over 30 kg, females about 25 kg); The Dog API lists broader metric ranges of 29–36 kg for males and 23–29 kg for females.",
    },

    "physical.weight.male.max": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "FCI Standard No. 144 specifies a minimum reference of over 30 kg for males (at ~60 cm height) without setting an upper weight ceiling.",
    },

    "physical.weight.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator:
            "Size and weight: females about 25 kg at approximately 56 cm",
        },
      ],
      verifiedOn: "2026-11-16",
      note:
        "Represents the approximate 25 kg benchmark published in FCI Standard No. 144 for a female of around 56 cm height.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boxer-breed-profile",
          role: "verified",
          locator: "Life expectancy: 10–12 years",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span (10–12 years)",
        },
        {
          id: "rvc-vetcompass-boxer-study-2023",
          role: "cited",
          locator: "UK primary-care cohort average lifespan of 10.46 years",
        },
      ],
      verifiedOn: "2026-11-16",
      note:
        "Matches the 10–12 year lifespan range in AKC and The Dog API, supported by the 10.46-year average reported in UK VetCompass data.",
    },

    "physical.sheddingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Reviewed official standards and veterinary sources describe the short coat without establishing a standardised shedding category.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A standardised breed-wide drooling rating was not established across the verified primary sources.",
    },

    temperament: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator: "Behaviour and temperament",
        },
        {
          id: "akc-boxer-breed-profile",
          role: "cited",
          locator: "Breed traits and personality",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-16",
      note:
        "Breed-level temperament characteristics; individual dogs vary with genetics, training, and socialisation.",
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator: "Behaviour and temperament",
        },
        {
          id: "akc-boxer-breed-profile",
          role: "cited",
          locator: "Breed personality and temperament",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-16",
      note:
        "Traits are rewritten in original wording from the official standard, kennel-club profile, and reference dataset.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "cited",
          locator: "Behaviour and temperament",
        },
        {
          id: "akc-boxer-breed-profile",
          role: "cited",
          locator: "Breed traits and characteristics",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial scores on a 1–5 scale, not results from standardised behavioural testing.",
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-boxer-breed-profile",
          role: "cited",
          locator: "Exercise, grooming and climate-related care",
        },
        {
          id: "pdsa-boxer-breed-health",
          role: "cited",
          locator: "Exercise, health and general care information",
        },
      ],
      verifiedOn: null,
      note:
        "Care recommendations combine Boxer-specific climate and activity guidance with general canine husbandry.",
    },

    "care.exercise.level": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-boxer-breed-profile",
          role: "cited",
          locator: "Exercise: playful, high-energy breed needing ample daily activity",
        },
        {
          id: "pdsa-boxer-breed-health",
          role: "cited",
          locator: "Exercise needs and activity level",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial activity-level assessment; daily exercise should be adjusted to age, health, and ambient temperature.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Reviewed sources do not establish a single universal daily minute requirement for every Boxer.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boxer-breed-profile",
          role: "verified",
          locator: "Grooming: short coat and routine brushing guidance",
        },
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator: "Coat: short, hard, glossy and close-fitting",
        },
      ],
      verifiedOn: "2026-11-16",
      note:
        "Coat texture and low-maintenance brushing needs are source-verified; nail, ear, and dental notes follow general care best practices.",
    },

    "care.training": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "cited",
          locator: "Behaviour and temperament: trainability and working character",
        },
        {
          id: "akc-boxer-breed-profile",
          role: "cited",
          locator: "Training and breed characteristics",
        },
      ],
      verifiedOn: null,
      note:
        "Breed-informed training guidance tailored to an energetic, powerful working dog.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Reviewed sources do not establish a universal boolean apartment-suitability rating.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Reviewed sources do not establish a universal boolean house-with-yard rating.",
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boxer-breed-profile",
          role: "verified",
          locator: "Care: limited tolerance for extreme heat or cold",
        },
        {
          id: "pdsa-boxer-breed-health",
          role: "cited",
          locator: "Brachycephalic health and heat-management advice",
        },
      ],
      verifiedOn: "2026-11-16",
      note:
        "Reflects documented sensitivity to both heat/humidity (shortened muzzle) and cold (short single coat without undercoat).",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No standardised breed-wide alone-time tolerance rating was established.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General canine nutrition guidance; no breed-specific dietary formula is prescribed.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "rvc-vetcompass-boxer-study-2023",
          role: "verified",
          locator:
            "Demography, common disorders and mortality of Boxer dogs under primary veterinary care in the UK",
        },
        {
          id: "rvc-boxer-health-study-summary-2023",
          role: "verified",
          locator:
            "Summary of leading disorders (otitis externa, epulis, corneal ulceration) and cancer mortality in UK Boxers",
        },
        {
          id: "pdsa-boxer-breed-health",
          role: "cited",
          locator: "Boxer breed health overview",
        },
      ],
      verifiedOn: "2026-11-16",
      note:
        "Synthesises peer-reviewed UK primary-care veterinary findings and breed-club health screening priorities.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rvc-vetcompass-boxer-study-2023",
          role: "verified",
          locator: "Most common specific disorders: otitis externa, epulis, corneal ulceration, periodontal disease, and neoplasia",
        },
        {
          id: "rvc-boxer-health-study-summary-2023",
          role: "verified",
          locator: "Summary of ear disorders, tumours and eye ulcers",
        },
        {
          id: "american-boxer-club-health-screening",
          role: "verified",
          locator: "Breeding health screening: cardiac (AS/SAS, ARVC), thyroid, hip, elbow and degenerative myelopathy",
        },
        {
          id: "pdsa-boxer-breed-health",
          role: "cited",
          locator: "Potential breathing, hip, eye and heart conditions",
        },
      ],
      verifiedOn: "2026-11-16",
      note:
        "Combines disorders documented in RVC VetCompass primary-care research with hereditary conditions targeted by breed-club screening.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-boxer-club-health-screening",
          role: "verified",
          locator:
            "Testing and Reporting Guidelines: hip/elbow, thyroid, aortic valve, AS/SAS, Holter, ARVC and DM",
        },
      ],
      verifiedOn: "2026-11-16",
      note:
        "Reflects pre-breeding health evaluation recommendations published for active breeding stock.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-boxer-club-health-screening",
          role: "cited",
          locator:
            "Recommendation for heart auscultation at veterinary visits and specialist assessment of abnormal findings",
        },
        {
          id: "pdsa-boxer-breed-health",
          role: "cited",
          locator: "Health concerns and veterinary screening advice",
        },
      ],
      verifiedOn: null,
      note:
        "General preventive veterinary care informed by breed-specific cardiac, neoplastic, and heat-safety priorities.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-boxer-breed-profile",
          role: "cited",
          locator: "Grooming: regular dental care",
        },
        {
          id: "rvc-vetcompass-boxer-study-2023",
          role: "cited",
          locator: "Epulis and periodontal disease among top recorded disorders",
        },
      ],
      verifiedOn: null,
      note: "General canine dental care with attention to gingival growths (epulides) recorded in the breed.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "rvc-boxer-health-study-summary-2023",
          role: "cited",
          locator: "Otitis externa among the most frequently recorded Boxer disorders",
        },
      ],
      verifiedOn: null,
      note:
        "Routine ear checks are emphasised because otitis externa is a leading primary-care diagnosis in Boxers.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "rvc-vetcompass-boxer-study-2023",
          role: "cited",
          locator: "Cutaneous masses and tumour-related findings",
        },
        {
          id: "pdsa-boxer-breed-health",
          role: "cited",
          locator: "Skin problems and facial-fold care",
        },
      ],
      verifiedOn: null,
      note:
        "General skin and wrinkle care with emphasis on early veterinary evaluation of cutaneous lumps.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-boxer-breed-profile",
          role: "cited",
          locator: "Family, activity and care characteristics",
        },
        {
          id: "pdsa-boxer-breed-health",
          role: "cited",
          locator: "Exercise needs and family companion information",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial lifestyle suitability estimates based on energy level, strength, and climate sensitivity.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Suitability for a first-time owner depends on individual commitment to reward-based training, exercise, and health monitoring.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Suitability for senior owners depends on the handler's physical strength, activity level, and support network.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal apartment-living rating is established across the reviewed sources.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator: "Historical summary, origin, classification, head and coat colour",
        },
        {
          id: "akc-boxer-breed-profile",
          role: "cited",
          locator: "Playful character and working history",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "All fun facts are rewritten in original wording without naming registries in user-facing text.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-boxer-standard-144",
          role: "verified",
          locator:
            "Origin, history, classification, temperament, coat, colour, height and weight",
        },
        {
          id: "akc-boxer-breed-profile",
          role: "verified",
          locator: "Life expectancy and breed-care information",
        },
        {
          id: "american-boxer-club-health-screening",
          role: "verified",
          locator: "Breeding health-screening recommendations",
        },
        {
          id: "rvc-vetcompass-boxer-study-2023",
          role: "verified",
          locator: "Common disorders and 10.46-year average lifespan in UK primary care",
        },
      ],
      verifiedOn: "2026-11-16",
      note:
        "FAQ answers are written in original wording and omit registry/source names from user-facing text.",
    },
  },

  updatedOn: "2026-11-16",
};
