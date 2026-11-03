import type { Breed } from "../schema/breed.types";

export const skye_terrier: Breed = {
  slug: "skye-terrier",
  name: "Skye Terrier",
  scientificName: null,
  alternateNames: ["Cloak Terrier"],
  group: "Terriers; Small Working Terriers",

  origin: {
    country: "United Kingdom",
    region: "Isle of Skye, Inner Hebrides, Scotland",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Skye_terrier_865.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Skye_terrier_865.jpg",
      title: "Skye terrier 865.jpg",
      description: "Skye Terrier photographed at a dog show in Katowice, Poland.",
      creator: "Pleple2000",
      uploader: "Pleple2000",
      capturedOn: "2007-03-16",
      uploadedOn: "2007-03-27",
      width: 1804,
      height: 1012,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Pleple2000, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Indicate any changes made; adaptations must comply with applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-03",
    },
  ],

  overview: {
    summary:
      "A distinguished, low-set Scottish earthdog native to the Isle of Skye, the Skye Terrier is renowned for its long, parting double coat, lavishly fringed ears, and fiercely loyal disposition. Despite its short stature, this courageous working terrier possesses immense bone strength, a long back, and a substantial, muscular frame historically built to pursue foxes and badgers into rocky dens.",

    description:
      "Exhibiting an unmistakable long-and-low silhouette, the Skye Terrier stands twice as long as it is tall, with short, powerful limbs, a deep chest, and an elegant flat-falling coat that parts cleanly along the spine. The head features abundant hair forming a protective veil across the eyes and forehead, while symmetrical ears are carried either in an alert prick posture or flat against the skull in the drop-ear variety. Deeply devoted and protective with its immediate human family, the breed is naturally reserved and cautious around unfamiliar people. Responsible ownership involves gentle, reward-based training, regular coat line-brushing, and strict precautions against high-impact jumping during puppyhood to protect the elongated spine.",

    history:
      "Originating in the rugged terrain of the Isle of Skye in Scotland's Inner Hebrides, this ancient terrier was developed as a formidable earthdog to flush badgers, otters, and foxes from rocky cairns and subterranean burrows. Its dense, weather-resistant double coat and low center of gravity provided vital protection against harsh Hebridean weather and abrasive rocks. In the nineteenth century, the breed gained international aristocratic acclaim after Queen Victoria became an avid fancier, and its legendary fidelity was epitomised by Greyfriars Bobby, who guarded his deceased master's grave in Edinburgh for fourteen years. Today, it remains a rare and treasured heritage companion.",

    originalPurpose:
      "Earthdog work, tracking and bolting foxes, otters, badgers, and vermin among rocky Highland cairns and burrows.",

    currentRoles: [
      "Family companion",
      "Conformation show dog",
      "Obedience and rally participant",
      "Scent work and earthdog sports partner",
      "Heritage preservation breed",
    ],
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "in",
      male: {
        min: 10,
        max: 10,
      },
      female: {
        min: 9.5,
        max: 9.5,
      },
    },

    weight: {
      unit: "lb",
      male: {
        min: 35,
        max: 45,
      },
      female: null,
    },

    lifespanYears: {
      min: 12,
      max: 14,
    },

    coatType:
      "Harsh, straight, flat-falling outer coat over a short, soft, woolly undercoat, providing comprehensive weatherproofing and thermal insulation.",

    coatLength:
      "Long, straight coat falling flat along each side of the body, featuring a veiling fringe across the forehead and lavish feathering on the ears and tail.",

    coatColors: [
      "Black",
      "Blue",
      "Dark grey",
      "Light grey",
      "Silver platinum",
      "Fawn",
      "Cream",
    ],

    sheddingLevel:
      "Moderate; regular seasonal shedding requiring consistent combing to manage undercoat and prevent matting.",

    droolingLevel:
      "Low; tight flews and clean muzzle prevent noticeable drooling.",

    distinctiveFeatures: [
      "Elongated, low-slung silhouette measuring twice as long as its shoulder height",
      "Heavily boned, muscular frame with short forelegs slightly curving around a deep chest",
      "Straight, flowing double coat that parts symmetrically along the spine",
      "Head crowned with a veiling topknot of long hair framing the eyes and muzzle",
      "Symmetrical ears presented in either erect prick or flat drop varieties with lavish feathering",
      "Long, well-feathered tail carried in alignment with the topline",
    ],
  },

  temperament: {
    traits: [
      "Fiercely loyal and intensely bonded to family members",
      "Courageous, confident, and fearless",
      "Dignified, calm, and composed indoors",
      "Independent-minded with strong terrier tenacity",
      "Politely reserved and observant with unfamiliar people",
      "Sensitive to voice inflection and harsh handling",
      "Alert with enduring predatory drive toward small burrowing animals",
      "Requires patient, reward-based training and consistent leadership",
    ],

    scores: {
      affection: 5,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 4,
      independence: 4,
      trainability: 3,
      barking: 3,
      energy: 3,
    },
  },

  care: {
    exercise: {
      level:
        "Moderate. Daily leashed walks and structured indoor or yard play provide sufficient exercise, with care taken to avoid high-impact jumping during growth.",

      minutesPerDay: null,

      activities: [
        "Daily leashed neighborhood walks on level surfaces",
        "Supervised indoor retrieval and interactive toy play",
        "Reward-based obedience and trick training sessions",
        "Gentle scent games and problem-solving puzzles",
        "Low-impact exploratory sniff sessions in secure areas",
      ],
    },

    grooming: {
      level:
        "Moderate to high. The long double coat requires regular line-brushing to prevent matting, especially in friction areas.",

      brushing:
        "Comb thoroughly two to three times weekly with a wide-toothed metal comb and pin brush, parting the coat in sections to reach down to the skin and prevent undercoat tangles.",

      bathing:
        "Bathe every three to six weeks with gentle canine shampoo and conditioner, pressing the water out gently and blow-drying flat without friction that encourages mats.",

      notes: [
        "Inspect friction zones behind the ears, armpits, and groin weekly for early knot formation.",
        "Check erect or dropped ears routinely for moisture, wax accumulation, or debris hidden by long feathering.",
        "Keep toenails clipped short to maintain proper paw structure on short, heavy-boned legs.",
        "Never clip or shave the coat unless medically required, as clipping alters the straight texture.",
        "Brush teeth regularly with pet-safe enzymatic toothpaste.",
      ],
    },

    training: {
      difficulty:
        "Moderate. Quick to learn and devoted, but exhibits an independent streak and sensitive nature that shuts down under harsh corrections.",

      tips: [
        "Utilise positive reinforcement with small treats, gentle praise, and play rewards.",
        "Keep training sessions short, focused, and predictable to avoid stubborn disinterest.",
        "Teach early cooperative handling for brushing, paw wiping, and ear cleaning.",
        "Instil reliable recall in enclosed areas, bearing in mind that prey drive can compete with focus.",
        "Reward calm, neutral behavior when encountering unfamiliar people.",
        "Strictly avoid harsh reprimands, which foster distrust in sensitive terriers.",
      ],

      socialization:
        "Introduce puppies gradually and positively to diverse people, sounds, novel environments, and calm dogs. Thoughtful exposure fosters quiet self-confidence and prevents excessive aloofness or wariness.",
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Adapts well to temperate and cool-weather climates where its double coat provides protection.",
        "In warm weather, provide shade, ventilation, air-conditioning, and fresh water, exercising during cool dawn or dusk hours.",
        "Avoid prolonged exposure to extreme heat and humidity, monitoring for signs of overheating.",
      ],

      aloneTimeTolerance:
        "Moderate. They settle calmly as adults, but build alone-time tolerance gradually to prevent separation distress.",
    },
  },

  nutrition: {
    dietType:
      "A high-quality, complete and balanced commercial or veterinary-formulated diet tailored to small-breed adult or puppy life stages.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Measure daily portions precisely with a standard measuring cup or kitchen scale, adjusting amounts based on age, metabolism, and activity level. Avoid overfeeding, as excess body weight places unnecessary mechanical load on the elongated spine and low-set joints. Ensure clean, fresh water is available at all times.",

    considerations: [
      "Monitor body condition score closely to prevent excess weight gain that stresses the back.",
      "Factor all training rewards and treats into daily caloric intake totals.",
      "Use low-rimmed feeding dishes to accommodate facial hair and mustache comfortably.",
      "Transition between diets gradually across 7 to 10 days to avert gastrointestinal upset.",
      "Consult a veterinarian before introducing any joint or dietary supplements.",
    ],

    note:
      "Feeding requirements should be customized to the individual dog's life stage, body condition, and activity level.",
  },

  health: {
    overview:
      "A hardy and historically robust breed with an average lifespan of 12 to 14 years. However, its unique chondrodysplastic, long-and-low conformation and small gene pool require careful attention to juvenile growth-plate health, spinal integrity, renal function, and hepatic conditions.",

    commonConditions: [
      "Puppy limp (painful distal radial/ulnar physeal growth disturbance during rapid juvenile development, often termed Skye limp)",
      "Intervertebral disc disease (IVDD) and spinal strain associated with the elongated, low-slung frame",
      "Renal dysplasia, a developmental malformation of the renal cortex monitored in breed health registries",
      "Chronic hepatitis and copper-associated liver disease",
      "Mammary neoplasia and hemangiosarcoma",
      "Hypothyroidism and autoimmune thyroiditis",
    ],

    preventiveCare: [
      "Strictly prohibit puppies from jumping off furniture or navigating steep stairs during their first year of skeletal growth.",
      "Schedule regular veterinary wellness exams, including periodic renal and hepatic blood panels.",
      "Seek veterinary evaluation immediately for persistent lameness, reluctance to move, or spinal discomfort.",
      "Review prospective breeding pedigrees for family histories of juvenile lameness and renal dysplasia.",
      "Maintain a lean, muscular body condition to prevent downward mechanical torque on the spine.",
      "Perform routine tooth brushing and inspect skin beneath long coat hair.",
    ],

    recommendedScreenings: [
      "Inquire with breeders about multi-generational family histories of puppy limp, renal dysplasia, hepatitis, and neoplasia",
      "Annual comprehensive physical examination assessing spinal flexibility and orthopaedic comfort",
      "Baseline biochemical screening and urinalysis to monitor kidney and liver values",
    ],

    dentalCare:
      "Brush teeth regularly with dog-safe enzymatic toothpaste and arrange routine professional cleanings to prevent tartar buildup and periodontal disease.",

    earCare:
      "Inspect prick or dropped ears weekly for trapped dirt, wax accumulation, or irritation concealed beneath the lavish feathering.",

    skinCare:
      "Part the long coat to inspect the skin for mats pulling on tissue, localized dermatitis, or external parasites during routine grooming.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Owners who appreciate profound one-family loyalty and practice patient, gentle training methods",
      "Households committed to regular line-combing and dedicated long-coat maintenance",
      "Apartment or home dwellers able to provide daily moderate walks without high-impact jumping",
      "Families who respect a terrier's reserved dignity with strangers and provide calm domestic routines",
    ],

    notIdealFor: [
      "Owners seeking a low-maintenance 'wash-and-wear' coat",
      "Households encouraging frequent high-impact jumping from heights during puppyhood",
      "Handlers expecting immediate, unreserved sociability with all strangers and strange animals",
      "Owners who use harsh verbal reprimands or physical corrections",
    ],
  },

  funFacts: [
    "The breed takes its name from the rugged Isle of Skye in Scotland's Inner Hebrides, where it was developed nearly four centuries ago.",
    "Skye Terriers occur in two distinct ear carriage varieties—erect prick ears and flat drop ears—both having lavish feathering.",
    "The breed became an international sensation during the Victorian era after Queen Victoria kept and bred Skye Terriers at Windsor Castle.",
    "Edinburgh's most famous canine legend, Greyfriars Bobby, was a faithful Skye Terrier who spent 14 years guarding his deceased master's grave in Greyfriars Kirkyard.",
  ],

  faq: [
    {
      question: "Is the Skye Terrier a good family dog?",
      answer:
        "Yes. They are extraordinarily loyal and devoted to their family, though children should be taught respectful handling and adult supervision should be maintained.",
    },
    {
      question: "How tall and heavy is a Skye Terrier?",
      answer:
        "The ideal shoulder height is 10 inches for adult males and 9.5 inches for adult females. Adult males typically weigh 35 to 45 pounds, with females weighing slightly less in proportion.",
    },
    {
      question: "What is the typical lifespan of a Skye Terrier?",
      answer:
        "The breed typically enjoys a life expectancy of 12 to 14 years when provided with conscientious preventive healthcare, proper nutrition, and careful musculoskeletal management.",
    },
    {
      question: "How demanding is the grooming routine?",
      answer:
        "Grooming requires a moderate to high commitment. The straight, flowing double coat should be thoroughly brushed and combed two to three times a week down to the skin to prevent matting and remove debris.",
    },
    {
      question: "Why is puppy exercise management so important?",
      answer:
        "Because of their long back and short legs, puppies are susceptible to juvenile growth-plate strain (often termed puppy limp) and spinal injury. Jumping from furniture, bounding down steep stairs, and high-impact agility should be strictly avoided until bone growth is complete.",
    },
    {
      question: "Can a Skye Terrier live in an apartment?",
      answer:
        "Yes. Due to their compact height and calm indoor manners, they adapt well to apartment living provided they receive daily leashed walks and mental enrichment.",
    },
    {
      question: "What is the temperament of a Skye Terrier like?",
      answer:
        "They are renowned for profound loyalty and affection toward their family, paired with a calm, dignified nature. They tend to be reserved with strangers and sensitive to their handler's moods, responding best to gentle, consistent guidance.",
    },
  ],

  references: [
    "american-kennel-club-skye-terrier",
    "american-kennel-club-skye-terrier-history",
    "united-kennel-club-skye-terrier-standard",
    "skye-terrier-club-uk-health",
    "the-dog-api",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names: Cloak Terrier",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Historical alternative designation recorded in baseline breed reference datasets.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No distinct breed-specific scientific name was established in the consulted references.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-skye-terrier-standard",
          role: "verified",
          locator: "Terrier Group",
        },
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Breed group: Terrier Group",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Classified under working terriers and earthdogs.",
    },

    origin: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier-history",
          role: "verified",
          locator: "Opening section on the Isle of Skye",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "The breed originated on the Isle of Skye in Scotland, part of the United Kingdom.",
    },

    "origin.country": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier-history",
          role: "verified",
          locator: "Historical overview of the breed's origin",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Origin is documented in Scotland within the United Kingdom.",
    },

    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier-history",
          role: "verified",
          locator: "Opening section on the Isle of Skye",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Specifically associated with the Isle of Skye in Scotland's Inner Hebrides.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "About the Breed; care sections",
        },
        {
          id: "american-kennel-club-skye-terrier-history",
          role: "verified",
          locator: "Breed history",
        },
        {
          id: "united-kennel-club-skye-terrier-standard",
          role: "verified",
          locator: "General Appearance; Characteristics",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Original narrative synthesising historical earthdog origins, physical conformation, and domestic temperament.",
    },

    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "cited",
          locator: "Height and weight",
        },
        {
          id: "united-kennel-club-skye-terrier-standard",
          role: "cited",
          locator: "Height, weight and proportions",
        },
      ],
      verifiedOn: null,
      note: "Classified as small based on adult wither height of 9.5 to 10 inches.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-skye-terrier-standard",
          role: "verified",
          locator: "Height, Weight and Proportions: males 10 inches; bitches 9.5 inches",
        },
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Height: 10 inches (male), 9.5 inches (female)",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Stored in published source inches: ideal height is 10 inches for males and 9.5 inches for females.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Weight: 35-45 pounds (male), slightly lighter (female)",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Stored in published source pounds: males 35 to 45 pounds; females are described as slightly lighter without a fixed numeric range.",
    },

    "physical.weight.female.max": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Consulted standards state females are slightly lighter in proportion without specifying a numeric maximum weight; no number is inferred.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Life Expectancy: 12–14 years",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span: 12 - 14 years",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Published life expectancy range of 12 to 14 years.",
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-skye-terrier-standard",
          role: "verified",
          locator: "Coat: soft, woolly undercoat and hard, straight outer coat",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Standard describes a short, soft undercoat and a long, hard, straight, flat outer coat.",
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-skye-terrier-standard",
          role: "verified",
          locator: "Coat: long, straight body coat with veil over forehead and feathering on ears and tail",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Long coat falling flat along either side with characteristic facial veiling.",
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-skye-terrier-standard",
          role: "verified",
          locator: "Color: black, blue, dark or light gray, silver platinum, fawn and cream; all with dark points",
        },
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Colors and markings",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Standard colours include black, blue, dark grey, light grey, silver platinum, fawn, and cream, all with dark points.",
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "cited",
          locator: "Grooming",
        },
      ],
      verifiedOn: null,
      note: "Qualitative estimate of moderate shedding requiring regular line-brushing to manage undercoat.",
    },

    "physical.droolingLevel": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Tight lip conformation prevents noticeable drooling.",
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-skye-terrier-standard",
          role: "verified",
          locator: "General Appearance; Coat; Characteristics",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Features synthesised from standard: 2:1 length-to-height ratio, heavy bone, parted coat, facial veil, and prick or drop ears.",
    },

    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Breed traits and training",
        },
        {
          id: "united-kennel-club-skye-terrier-standard",
          role: "verified",
          locator: "Characteristics",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Documented traits highlighting deep family loyalty, courage, reserved dignity with strangers, and independence.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "cited",
          locator: "Breed traits and characteristics",
        },
      ],
      verifiedOn: null,
      note: "Comparative scores reflecting high family affection, protective instincts, and independent working disposition.",
    },

    "temperament.scores.withChildren": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "cited",
          locator: "Family Life",
        },
      ],
      verifiedOn: null,
      note: "Tolerant with family children when respectful handling is maintained.",
    },

    "temperament.scores.withDogs": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "cited",
          locator: "Family Life",
        },
      ],
      verifiedOn: null,
      note: "Moderate score reflecting natural terrier assertiveness around unfamiliar dogs.",
    },

    care: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Care guidance tailored to a long-backed, low-set terrier requiring spinal protection and regular coat care.",
    },

    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Exercise",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Moderate daily exercise requirements reflecting steady endurance rather than high-intensity jumping.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal daily minute target is established across official breed documentation.",
    },

    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "cited",
          locator: "Exercise and training",
        },
      ],
      verifiedOn: null,
      note: "Practical activity suggestions including leashed walking on level ground and mental enrichment.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Grooming",
        },
        {
          id: "united-kennel-club-skye-terrier-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Regular thorough line-brushing is confirmed to keep the long double coat free of mats and debris.",
    },

    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Training",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Positive, reward-based training is essential for this intelligent, sensitive, and independent terrier.",
    },

    "care.livingEnvironment": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "cited",
          locator: "Exercise and care guidance",
        },
      ],
      verifiedOn: null,
      note: "Practical environmental guidance emphasizing indoor companionship, temperature management, and avoidance of stairs.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "cited",
          locator: "Breed profile and exercise",
        },
      ],
      verifiedOn: null,
      note: "Well-suited to apartment life provided daily outdoor walking needs are fulfilled.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "A securely fenced yard provides safe exploration opportunities but does not substitute for structured walks.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Moderate alone-time tolerance; build tolerance gradually to prevent separation distress.",
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
      note: "General canine nutritional guidelines; portion sizes should be adapted to prevent obesity that stresses the elongated spine.",
    },

    "nutrition.dietType": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Complete and balanced canine diet appropriate for life stage, body condition, and metabolic health.",
    },

    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No single breed-specific puppy feeding frequency is established across consulted breed sources.",
    },

    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No single breed-specific adult feeding frequency is established across consulted breed sources.",
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No single breed-specific senior feeding frequency is established across consulted breed sources.",
    },

    "nutrition.guidelines": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "cited",
          locator: "Nutrition",
        },
      ],
      verifiedOn: null,
      note: "Portion control is emphasized to prevent weight gain that exacerbates intervertebral disc stress.",
    },

    "nutrition.considerations": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Practical dietary considerations including treat accounting and low-rimmed bowl usage.",
    },

    "nutrition.note": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Nutrition",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Feeding amounts should be customized to the individual dog's metabolic rate and condition.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Health",
        },
        {
          id: "skye-terrier-club-uk-health",
          role: "verified",
          locator: "Conditions currently being monitored",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Breed health concerns reflect conditions monitored by parent breed clubs, including puppy limp, renal dysplasia, and hepatitis.",
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Health",
        },
        {
          id: "skye-terrier-club-uk-health",
          role: "verified",
          locator: "Conditions currently being monitored",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Health summary emphasizing the breed's achondroplastic spinal risks, juvenile lameness, and monitoring registries.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Health",
        },
        {
          id: "skye-terrier-club-uk-health",
          role: "verified",
          locator: "Puppy Limp; Renal Dysplasia; Hepatitis; Other Research",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Documented health vulnerabilities verified across parent-club and kennel-club health committees.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "cited",
          locator: "Health and care guidance",
        },
        {
          id: "skye-terrier-club-uk-health",
          role: "cited",
          locator: "Breed health information",
        },
      ],
      verifiedOn: null,
      note: "Preventive care recommendations highlighting restricted jumping during growth to protect developing growth plates.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Recommended Health Tests From the National Breed Club",
        },
        {
          id: "skye-terrier-club-uk-health",
          role: "verified",
          locator: "Renal Dysplasia; Finnish Skye Elbow Project; Health Committee",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Recommended screenings focus on pedigree verification for renal and hepatic disease, along with orthopaedic evaluation.",
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
      note: "Routine tooth brushing with enzymatic toothpaste to preserve oral health.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine weekly ear checks for wax or debris concealed beneath heavy ear feathering.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Skin checks beneath long double coat to detect mats, localized dermatitis, or parasites early.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "cited",
          locator: "Breed traits, grooming, exercise, and training",
        },
      ],
      verifiedOn: null,
      note: "Editorial suitability assessment based on independent temperament and coat care commitments.",
    },

    "suitability.firstTimeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "cited",
          locator: "Breed traits and training",
        },
      ],
      verifiedOn: null,
      note: "Not generally recommended for novice owners due to independent nature, sensitivity, and grooming demands.",
    },

    "suitability.familiesWithChildren": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "cited",
          locator: "Family Life",
        },
      ],
      verifiedOn: null,
      note: "Affectionate and devoted with family children when respectful handling is taught and practiced.",
    },

    "suitability.seniorOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "cited",
          locator: "Exercise and temperament",
        },
      ],
      verifiedOn: null,
      note: "Well-suited for active seniors who can manage moderate walks and regular coat brushing.",
    },

    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Appeals to active owners who appreciate a dedicated, courageous companion on moderate outings.",
    },

    "suitability.apartmentLiving": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "cited",
          locator: "Size and exercise",
        },
      ],
      verifiedOn: null,
      note: "Adapts well to apartment life when daily walking and mental enrichment are provided.",
    },

    "suitability.idealFor": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial assessment reflecting loyalty, low-impact exercise, and dedicated coat maintenance.",
    },

    "suitability.notIdealFor": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Identifies environments conflicting with breed needs, including homes encouraging rough high-impact jumping.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier-history",
          role: "verified",
          locator: "Historical overview",
        },
        {
          id: "united-kennel-club-skye-terrier-standard",
          role: "verified",
          locator: "General Appearance; Coat",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Historical Hebridean origins, prick/drop ear varieties, royal patronage, and Greyfriars Bobby verified.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Breed profile and care sections",
        },
        {
          id: "skye-terrier-club-uk-health",
          role: "verified",
          locator: "Breed health information",
        },
        {
          id: "united-kennel-club-skye-terrier-standard",
          role: "verified",
          locator: "Height, Weight and Proportions",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "FAQ responses synthesize standard dimensions, coat care, puppy growth-plate precautions, and temperament.",
    },

    "physical.weight.male.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-skye-terrier",
          role: "verified",
          locator: "Weight: 35-45 pounds (male)",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Maximum male weight recorded as 45 lb (20 kg in metric references).",
    },
  },

  updatedOn: "2026-11-03",
};
