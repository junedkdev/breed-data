import type { Breed } from "../schema/breed.types";

export const spinone_italiano: Breed = {
  slug: "spinone-italiano",
  name: "Spinone Italiano",
  scientificName: null,
  alternateNames: [
    "Italian Spinone",
    "Spinone",
    "Spinoni Italiani",
    "Italian Griffon",
  ],
  group: "Pointing Dogs; Continental Pointing Dogs, Griffon Type",
  origin: {
    country: "Italy",
    region: "Northern Italy, including the Piedmont region in historical accounts",
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Spinone_Italiano.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Spinone_Italiano.jpg",
      title: "Spinone Italiano.jpg",
      description: "Adult Spinone Italiano displaying wiry coat, characteristic beard, and sturdy bone structure.",
      creator: "Caroline Granycome",
      uploader: "Ltshears",
      capturedOn: "2012-06-09",
      uploadedOn: "2012-09-13",
      width: 4288,
      height: 2848,
      licenseId: "cc-by-sa-2.0",
      attribution:
        "Photo by Caroline Granycome, via Wikimedia Commons, CC BY-SA 2.0. Changes, if any, must be indicated. https://creativecommons.org/licenses/by-sa/2.0/",
      restrictions: null,
      metadataCheckedOn: "2026-11-09",
    },
  ],
  overview: {
    summary:
      "A rugged, patient Italian pointing gundog distinguished by a harsh wiry coat, expressive bearded face, robust bone structure, and steady all-terrain hunting endurance.",
    description:
      "The Spinone Italiano is an ancient, large-bodied hunting companion developed to hunt, point, and retrieve across challenging briars, marshes, and deep water. Its nearly square outline features heavy bone, a deep chest, and an effortless, ground-covering trot driven by powerful hindquarters. A distinctive wiry coat, thick skin, stiff eyebrows, and a soft beard protect the dog in thorny scrub, while large ochre eyes lend an intelligent, human-like expression. Naturally sociable, docile, and cooperative, the Spinone integrates gently into household life when afforded regular outdoor activity and scent-based enrichment.",
    history:
      "Historical records of rough-haired pointing dogs in northern Italy date back to classical antiquity and Renaissance art, with modern roots firmly anchored in the Piedmont and Lombardy regions. Renowned for tracking through dense alpine vegetation and retrieving from water, the breed faced severe population decline during the Second World War before dedicated Italian sportsmen successfully revived bloodlines in the 1950s. Today, it remains celebrated internationally as a versatile gundog and devoted family companion.",
    originalPurpose:
      "Versatile pointing, tracking, and retrieving on land and in water through dense thorn cover.",
    currentRoles: [
      "Pointing and retrieving gundog",
      "Field trial competitor",
      "Scent work and tracking partner",
      "Affectionate family companion",
    ],
  },
  physical: {
    sizeCategory: "large",
    height: {
      unit: "cm",
      male: {
        min: 60,
        max: 70,
      },
      female: {
        min: 58,
        max: 65,
      },
    },
    weight: {
      unit: "kg",
      male: {
        min: 34,
        max: 39,
      },
      female: {
        min: 29,
        max: 34,
      },
    },
    lifespanYears: {
      min: 10,
      max: 12,
    },
    coatType:
      "Dense, coarse, hard-textured, and slightly wiry coat lying close to the body, free of undercoat.",
    coatLength:
      "Short to medium on most of the body. Longer, stiffer hair forms eyebrows, while softer, longer hair on the cheeks and upper lips creates a moustache and beard.",
    coatColors: [
      "White",
      "White and orange",
      "Orange roan",
      "White and brown",
      "Brown roan",
    ],
    sheddingLevel:
      "Moderate; individual shedding varies with coat condition and grooming routine.",
    droolingLevel:
      "May drool around the mouth, particularly after drinking or eating; the amount varies between individuals.",
    distinctiveFeatures: [
      "Strong, substantial frame with well-developed bone and musculature",
      "Body proportions tending toward a square outline",
      "Broad, voluminous nose with a distinctive rounded upper edge",
      "Long facial hair forming eyebrows, moustache and beard",
      "Large, nearly round eyes with an ochre-coloured iris",
      "Low-set, roughly triangular ears",
      "Rough coat designed for practical work in brush and varied terrain",
      "A strong, extended trot suited to covering ground efficiently",
    ],
  },
  temperament: {
    traits: [
      "Sociable",
      "Patient",
      "Docile",
      "Affectionate",
      "Enduring",
      "Cooperative",
      "Gentle",
      "Work-focused",
    ],
    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: 2,
      independence: 3,
      trainability: 4,
      barking: 2,
      energy: 4,
    },
  },
  care: {
    exercise: {
      level: "Moderate to high",
      minutesPerDay: {
        min: 60,
        max: 90,
      },
      activities: [
        "Brisk daily countryside walks and trail hikes",
        "Controlled scent-trailing exercises and tracking drills",
        "Water retrieving and supervised swimming",
        "Field training or other structured gundog sports",
        "Reward-based obedience drills and brain games",
        "Free galloping in safely enclosed outdoor paddocks",
      ],
    },
    grooming: {
      level: "Moderate",
      brushing:
        "Brush or comb regularly to remove loose hair, debris and small tangles. Pay particular attention to the beard, eyebrows, ears and areas where friction can cause matting.",
      bathing:
        "Bathe when needed with a dog-appropriate shampoo. Rinse and dry thoroughly, particularly around the beard and ears.",
      notes: [
        "Inspect the coat after walks through dense vegetation and remove burrs or other debris.",
        "The traditional coat may benefit from occasional hand-stripping to maintain its texture; ask an experienced groomer to demonstrate the technique.",
        "Avoid unnecessary shaving if preserving the natural coat texture is important.",
        "Check nails, paws, skin and ears regularly.",
        "Clean and dry the beard after meals or drinking when needed to avoid sour odors.",
      ],
    },
    training: {
      difficulty:
        "Moderate; a patient, consistent approach is usually more effective than harsh or repetitive drills.",
      tips: [
        "Use reward-based training with food, toys, praise or access to activities the dog enjoys.",
        "Keep sessions engaging and gradually increase distractions.",
        "Teach reliable recall before allowing off-leash activity in safe areas.",
        "Practise calm greetings and polite leash walking from an early age.",
        "Use scent games and retrieving tasks to provide appropriate mental stimulation.",
        "Keep training age-appropriate, particularly while joints are developing.",
      ],
      socialization:
        "Introduce the dog gradually and positively to varied people, friendly dogs, surfaces, sounds, travel and everyday environments. Prioritise calm, safe experiences rather than forcing interaction.",
    },
    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: [
        "Temperate climates",
        "Cool climates",
        "Warm climates with shade, water and activity adjusted for heat",
      ],
      aloneTimeTolerance:
        "Individual-dependent. Build alone time gradually and provide exercise, enrichment and a predictable routine; long, frequent periods alone may not suit a dog that expects substantial interaction.",
    },
  },
  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate to the dog's life stage, body condition, activity level and individual health needs.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Measure food portions, keep fresh water available and monitor body condition rather than relying only on package portions. Make diet changes gradually. Treats should be included in the daily energy intake, and any therapeutic diet should be chosen with a veterinarian.",
    considerations: [
      "Avoid overfeeding and monitor weight as activity changes.",
      "Use a complete diet formulated for the dog's life stage.",
      "Discuss growth and feeding amounts with a veterinarian while the dog is a puppy.",
      "Ask a veterinarian before adding supplements or making major dietary changes.",
      "For dogs that eat quickly or have individual digestive concerns, discuss an appropriate feeding routine with a veterinarian.",
    ],
    note:
      "These are general feeding principles, not a breed-specific prescription. Calorie needs vary with age, neuter status, health, metabolism and workload.",
  },
  health: {
    overview:
      "The Spinone Italiano is generally a hardy, robust hunting breed with an average life expectancy of 10 to 12 years. Recognized genetic and orthopedic screening priorities include hip dysplasia, elbow dysplasia, ophthalmic conditions such as ectropion and cataracts, autoimmune thyroiditis, and cerebellar ataxia (CA), a rare but severe inherited neurodegenerative condition.",
    commonConditions: [
      "Hip dysplasia and elbow dysplasia",
      "Ocular disorders, including ectropion, entropion, and juvenile cataracts",
      "Autoimmune thyroiditis (hypothyroidism)",
      "Cerebellar ataxia (CA), an inherited autosomal recessive neurological disorder managed via DNA testing",
      "Gastric dilatation-volvulus (bloat) related to deep chest conformation",
      "Cruciate ligament tears and sports-related joint sprains",
    ],
    preventiveCare: [
      "Verify parental DNA status for cerebellar ataxia before obtaining a puppy.",
      "Review official orthopedic clearances for hips and elbows on both parents.",
      "Maintain active ear and beard hygiene to prevent bacterial or fungal dermatitis.",
      "Avoid strenuous galloping or high-impact exercise immediately before or after heavy meals.",
    ],
    recommendedScreenings: [
      "Hip dysplasia radiographic evaluation",
      "Elbow dysplasia radiographic evaluation",
      "Ophthalmologist eye examination",
      "Cerebellar ataxia (CA) DNA test",
      "Thyroid evaluation (free T4, cTSH, and autoantibodies)",
    ],
    dentalCare:
      "Brush the teeth regularly with dog-specific dental products and arrange veterinary dental assessments as needed. Seek veterinary advice for persistent bad breath, oral pain, bleeding or difficulty eating.",
    earCare:
      "Check the ears regularly for redness, odour, discharge or persistent scratching. Keep them dry after swimming or bathing and use only ear-cleaning products recommended by a veterinarian.",
    skinCare:
      "Inspect the skin under the coat and around the ears, paws and beard for irritation, parasites, wounds or persistent redness. Seek veterinary advice if itching, hair loss or skin changes persist.",
  },
  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: true,
    idealFor: [
      "People who enjoy regular walks and outdoor activities",
      "Households able to provide daily exercise and mental enrichment",
      "Owners interested in scent work, retrieving or other cooperative activities",
      "Families willing to supervise dog-child interactions and teach respectful handling",
      "Owners prepared to maintain a rough coat, beard and ears",
    ],
    notIdealFor: [
      "People seeking a very low-activity dog",
      "Households unable to provide regular companionship or enrichment",
      "Owners expecting reliable off-leash behaviour without training",
      "People unwilling to manage coat care and post-outing checks",
      "Homes where the dog's size and exercise needs cannot be accommodated",
    ],
  },
  funFacts: [
    "The breed's name is associated with the Italian expression 'bracco spinoso', often linked to its rough coat or the thorny cover where game may hide.",
    "The Spinone is a pointing dog that can also retrieve, including from water.",
    "Historical descriptions of rough-haired Italian hunting dogs appear in accounts dating back to the seventeenth century.",
    "Its eyebrows, moustache and beard are among its most recognisable physical features.",
  ],
  faq: [
    {
      question: "Is the Spinone Italiano a family dog?",
      answer:
        "It is generally described as sociable and patient and can be a good family companion. As with any dog, suitability depends on the individual, supervision, training and how children interact with the dog.",
    },
    {
      question: "How much exercise does a Spinone Italiano need?",
      answer:
        "Plan for regular daily exercise of about 60 to 90 minutes, incorporating brisk walking, free running in secure areas, and scent-based tracking. Adjust activity levels to the individual dog's age, physical condition, and veterinary guidance.",
    },
    {
      question: "Does the Spinone Italiano shed?",
      answer:
        "Yes, Spinoni can shed. Regular brushing and suitable coat maintenance help manage loose hair and debris, but the amount varies between dogs.",
    },
    {
      question: "What health checks should I ask a breeder about?",
      answer:
        "Ask about hip and elbow evaluations and eye examinations. You can also discuss thyroid, cardiac and cerebellar ataxia testing with the breeder and your veterinarian. Screening recommendations and results should be interpreted with professional guidance.",
    },
    {
      question: "Is the Spinone Italiano easy to train?",
      answer:
        "Many are cooperative and respond well to patient, reward-based training. Keep sessions engaging, practise recall consistently and use activities that make good use of the dog's nose and retrieving instincts.",
    },
    {
      question: "Can a Spinone Italiano live in an apartment?",
      answer:
        "It can be possible if the dog receives sufficient exercise, enrichment and companionship. Access to a yard can be convenient, but a yard alone does not replace walks, training and interaction.",
    },
  ],
  references: [
    "fci-spinone-italiano-standard",
    "the-kennel-club-italian-spinone-standard",
    "american-kennel-club-spinone-italiano",
    "spinone-club-of-america-about-spinoni",
    "spinone-club-of-america-health",
    "wikimedia-spinone-italiano-photo",
    "the-dog-api",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
  ],
  evidence: {
    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator: "Title: Spinone Italiano (Italian Spinone)",
        },
        {
          id: "spinone-club-of-america-about-spinoni",
          role: "verified",
          locator: "About the Spinone Italiano; singular and plural forms",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Includes the English alternate name, Italian plural, and common designations.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No separate subspecies classification applies; Canis lupus familiaris covers all domestic dogs.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator: "FCI classification: Group 7, Section 1.3, Griffon type",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Uses the FCI classification; kennel-club grouping systems can differ.",
    },
    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator: "Origin: Italy; Brief Historical Summary",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Italy is the stated country of origin. Northern Italy/Piedmont is presented as historical context, not a precisely established exclusive origin.",
    },
    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator: "Origin: Italy",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-09",
      note: null,
    },
    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator: "Brief Historical Summary",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Historical associations link the breed with Piedmont and northern Italy.",
    },
    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator: "Utilization, Brief Historical Summary, General Appearance, Behaviour/Temperament",
        },
        {
          id: "the-kennel-club-italian-spinone-standard",
          role: "verified",
          locator: "General appearance, characteristics, temperament and coat",
        },
        {
          id: "spinone-club-of-america-about-spinoni",
          role: "verified",
          locator: "About Spinoni; Origins; Find an Activity",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.description",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "User-facing history and descriptions are original summaries. Historical ancestry beyond the documented accounts is not asserted as certain.",
    },
    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator: "General Appearance, Important Proportions, Eyes, Ears, Coat, Colour and Utilization",
        },
        {
          id: "the-kennel-club-italian-spinone-standard",
          role: "verified",
          locator: "Coat, Colour and Size",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Height and weight are stored in the published units: centimetres and kilograms.",
    },
    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "cited",
          locator: "Size and weight",
        },
      ],
      verifiedOn: null,
      note: "Large size category inferred from height and weight parameters.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator: "Size: withers height males 60-70 cm, females 58-65 cm",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.height.metric",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Official FCI Standard No. 165 specifies male height 60-70 cm and female height 58-65 cm. The Dog API reported 58-69 cm for males and 56-64 cm for females.",
    },
    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator: "Weight: males 34-39 kg, females 29-34 kg",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Official FCI Standard No. 165 specifies males 34-39 kg and females 29-34 kg. The Dog API reported 32-37 kg for males and 28-32 kg for females.",
    },
    "physical.weight.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator: "Weight: males 34-39 kg",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Maximum male weight bound of 39 kg established by official standard.",
    },
    "physical.weight.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator: "Weight: females 29-34 kg",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Maximum female weight bound of 34 kg established by official standard.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-spinone-italiano",
          role: "verified",
          locator: "Average sizes and life expectancy: 10–12 years",
        },
        {
          id: "spinone-club-of-america-about-spinoni",
          role: "verified",
          locator: "Health & Longevity: average lifespan 10–12 years",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Published breed-profile estimate; individual lifespan varies.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator: "Coat - Hair",
        },
      ],
      verifiedOn: "2026-11-09",
      note: null,
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator: "Coat - Hair",
        },
      ],
      verifiedOn: "2026-11-09",
      note: null,
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator: "Coat - Colour",
        },
      ],
      verifiedOn: "2026-11-09",
      note: null,
    },
    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "spinone-club-of-america-about-spinoni",
          role: "cited",
          locator: "A Well-Groomed Dog Is a Healthy Dog",
        },
      ],
      verifiedOn: null,
      note: "Qualitative editorial estimate. The source confirms that Spinoni shed but does not define a standard shedding scale.",
    },
    "physical.droolingLevel": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "No sufficiently reliable breed-specific drooling scale was established; this is a cautious qualitative estimate, not a verified breed statistic.",
    },
    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator: "General appearance, head, eyes, ears, coat, and movement",
        },
      ],
      verifiedOn: "2026-11-09",
      note: null,
    },
    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator: "Behaviour/Temperament",
        },
        {
          id: "the-kennel-club-italian-spinone-standard",
          role: "verified",
          locator: "Characteristics and Temperament",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Traits summarise the standard's description. Individual dogs can differ in temperament and behaviour.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "cited",
          locator: "Behaviour/Temperament",
        },
        {
          id: "american-kennel-club-spinone-italiano",
          role: "cited",
          locator: "Breed Traits & Characteristics",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1–5 ratings for app presentation, not measurements published by a kennel club or a validated behavioural test.",
    },
    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "spinone-club-of-america-about-spinoni",
          role: "cited",
          locator: "Find an Activity; A Well-Groomed Dog Is a Healthy Dog",
        },
        {
          id: "fci-spinone-italiano-standard",
          role: "cited",
          locator: "Utilization and Behaviour/Temperament",
        },
      ],
      verifiedOn: null,
      note: "Practical care guidance informed by the breed's working role and coat. It is not a formal standard or a substitute for individual veterinary advice.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "spinone-club-of-america-about-spinoni",
          role: "cited",
          locator: "Find an Activity",
        },
      ],
      verifiedOn: null,
      note: "The 60–90 minute range is an editorial planning estimate, not a published breed-specific requirement. Adjust for age, health and fitness.",
    },
    "care.grooming": {
      reliability: "general_guidance",
      sources: [
        {
          id: "spinone-club-of-america-about-spinoni",
          role: "cited",
          locator: "A Well-Groomed Dog Is a Healthy Dog",
        },
      ],
      verifiedOn: null,
      note: "Grooming guidance reflects wiry coat and beard care.",
    },
    "care.training": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Training advice accounts for cooperative, docile pointing dog temperament.",
    },
    "care.livingEnvironment": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Living environment suitability is practical editorial guidance.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Global nutrition guidelines",
        },
      ],
      verifiedOn: null,
      note: "General canine feeding guidance. No breed-specific daily calorie or portion requirement is asserted.",
    },
    "nutrition.feedingFrequency": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No single puppy, adult, and senior meal frequency was established.",
    },
    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "spinone-club-of-america-health",
          role: "verified",
          locator: "The Skeletal System, Eye Conditions, Thyroid Conditions, Cerebellar Ataxia, Testing & Clearances",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Breed-club health information supports the listed concerns and screening topics. It does not mean every Spinone will develop these conditions.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "Pet dental care",
        },
      ],
      verifiedOn: null,
      note: "General canine dental-care advice, not a Spinone-specific health finding.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General ear-care guidance; seek veterinary advice for signs of disease.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General skin-care guidance, not a breed-specific diagnosis or risk estimate.",
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "cited",
          locator: "Utilization and Behaviour/Temperament",
        },
        {
          id: "spinone-club-of-america-about-spinoni",
          role: "cited",
          locator: "Find an Activity; family companion and working roles",
        },
      ],
      verifiedOn: null,
      note: "Editorial suitability guidance. Individual temperament, household routines, training and access to exercise determine real-world fit.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator: "Brief Historical Summary and Utilization",
        },
        {
          id: "spinone-club-of-america-about-spinoni",
          role: "verified",
          locator: "About the Spinone Italiano; Origins of the Spinone",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Facts are paraphrased from breed-history and working-role references.",
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-spinone-italiano-standard",
          role: "verified",
          locator: "Utilization and Behaviour/Temperament",
        },
        {
          id: "spinone-club-of-america-health",
          role: "verified",
          locator: "Recommended health testing and health information",
        },
        {
          id: "spinone-club-of-america-about-spinoni",
          role: "verified",
          locator: "Activity, grooming and family-companion information",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Answers combine sourced breed information with general care guidance.",
    },
  },
  updatedOn: "2026-11-09",
};
