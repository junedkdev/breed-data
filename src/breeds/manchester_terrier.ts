import type { Breed } from "../schema/breed.types";

export const manchester_terrier: Breed = {
  slug: "manchester-terrier",
  name: "Manchester Terrier",
  scientificName: null,
  alternateNames: [
    "Black and Tan Terrier",
    "Gentleman's Terrier",
  ],
  group: "Terrier Group; Medium and Large Terriers",
  origin: {
    country: "Great Britain",
    region: "Manchester, England",
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_Terrier.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Manchester_Terrier.jpg",
      title: "Manchester Terrier.jpg",
      description:
        "Manchester Terrier standing alertly, showing sleek black coat and mahogany-tan markings.",
      creator: "Jon Ovington",
      uploader: "Ltshears",
      capturedOn: "2008-12-02",
      uploadedOn: "2012-07-18",
      width: 900,
      height: 1200,
      licenseId: "cc-by-sa-2.0",
      attribution:
        "Photo by Jon Ovington, via Wikimedia Commons, CC BY-SA 2.0. Changes, if any, must be indicated. Adapted versions must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-09",
    },
  ],
  overview: {
    summary:
      "A sleek, agile, and athletic British terrier recognized for its glossy jet-black coat, rich mahogany markings, keen vermin-hunting drive, and devoted companionship.",
    description:
      "The Manchester Terrier is an elegant, compact canine with a long, wedge-shaped head, keen almond eyes, and a smooth, reflective single coat. Developed through crosses between ancient black-and-tan ratters and coursing Whippets, it pairs blistering speed and acute sensory awareness with an affectionate, graceful indoor presence. While spirited and intensely curious about moving prey outdoors, it settles comfortably at home alongside an active family. Fostering a confident, well-mannered companion requires regular exercise, constructive mental games, and early positive socialization.",
    history:
      "The Manchester Terrier originated in nineteenth-century England amidst the burgeoning textile communities of Lancashire, where mill owners and workers sought swift, effective vermin hunters. Bred by crossing traditional black-and-tan ratting terriers with Whippets, the resulting dog gained speed, athletic refinement, and coursing agility. Known historically as the 'Gentleman's Terrier' and prized in rat pits and rabbit coursing, the breed saw declining numbers by the mid-twentieth century before devoted preservationists stabilized its lineage. Conformation classifications sometimes recognize both Standard and Toy size varieties, while other traditions maintain them as distinct breeds.",
    originalPurpose:
      "Ratting, vermin eradication, rabbit coursing, and gentleman's companion dog.",
    currentRoles: [
      "Devoted household companion",
      "Agility, rally, and obedience competitor",
      "Barn hunt and scent work participant",
      "Attentive alert and watchdog companion",
    ],
  },
  physical: {
    sizeCategory: "small",
    height: {
      unit: "cm",
      male: {
        min: 41,
        max: 41,
      },
      female: {
        min: 38,
        max: 38,
      },
    },
    weight: {
      unit: "lb",
      male: {
        min: 12,
        max: 22,
      },
      female: {
        min: 12,
        max: 22,
      },
    },
    lifespanYears: {
      min: 15,
      max: 17,
    },
    coatType: "Short, smooth, close-lying, firm, and glossy.",
    coatLength: "Short and close to the body.",
    coatColors: [
      "Jet black with rich mahogany-tan markings",
    ],
    sheddingLevel: "low to moderate",
    droolingLevel: "low",
    distinctiveFeatures: [
      "Long, narrow, wedge-shaped head with a flat skull",
      "Bright, keen and observant expression",
      "Small, dark, almond-shaped eyes",
      "Small, V-shaped ears carried naturally folded above the skull or erect depending on variety",
      "Compact, muscular body with an elegant, athletic outline",
      "Short, glossy coat requiring little routine grooming",
      "Distinct black-and-tan markings with clearly defined colour boundaries",
      "Tapering tail carried in line with the back rather than curled over it",
    ],
  },
  temperament: {
    traits: [
      "Alert",
      "Keen",
      "Affectionate",
      "Devoted",
      "Energetic",
      "Intelligent",
      "Curious",
      "Spirited",
    ],
    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 3,
      independence: 3,
      trainability: 4,
      barking: 3,
      energy: 4,
    },
  },
  care: {
    exercise: {
      level: "moderate to high",
      minutesPerDay: {
        min: 45,
        max: 60,
      },
      activities: [
        "Brisk daily neighborhood walks and exploratory jogs",
        "Interactive fetch and chase sessions in securely fenced areas",
        "Reward-based obedience drills and trick training",
        "Agility obstacle courses and flyball",
        "Scent work, barn hunt trials, and food puzzle challenges",
      ],
    },
    grooming: {
      level: "low",
      brushing:
        "Wipe weekly with a rubber hound mitt or soft chamois cloth to remove stray hairs and maintain a glossy finish.",
      bathing:
        "Bathe periodically as required using a gentle canine shampoo, avoiding excessive washings that strip natural coat oils.",
      notes: [
        "The short smooth coat requires minimal maintenance and dries quickly.",
        "Inspect drop or erect ears weekly for wax buildup or irritation.",
        "Trim claws regularly to support correct upright foot structure.",
        "Brush teeth daily with dog-safe enzymatic toothpaste to combat tartar.",
        "Provide warm clothing during winter walks, as the single short coat provides minimal insulation.",
      ],
    },
    training: {
      difficulty: "moderate",
      tips: [
        "Employ positive, reward-based methods with high-value treats and lively play.",
        "Keep sessions brief, dynamic, and engaging to prevent boredom.",
        "Establish dependable recall early, while maintaining long-line safety around wildlife.",
        "Reinforce calm leash manners when passing small moving animals to counter prey drive.",
        "Acclimate puppies early to gentle handling and cooperative nail trims.",
      ],
      socialization:
        "Introduce puppies gradually to various people, friendly dogs, urban sounds, and new environments to prevent excessive wariness.",
    },
    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: [
        "Well-suited to temperate and indoor home environments",
        "Cool or wet weather requires protective canine coats outdoors",
        "Ensure shade and fresh water during hot weather, avoiding midday exertion",
      ],
      aloneTimeTolerance:
        "Individual tolerance varies. Teach alone time gradually and provide exercise and enrichment; avoid routinely leaving the dog alone for long periods.",
    },
  },
  nutrition: {
    dietType:
      "Nutritionally complete commercial or veterinary-formulated diet suited for active small-to-medium terriers.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Provide measured rations divided into two daily meals. Scale caloric intake to match activity levels and maintain a lean, tuck-up profile.",
    considerations: [
      "Avoid excess calorie consumption to prevent weight gain that compromises agility.",
      "Incorporate training treats into the calculated daily food allowance.",
      "Ensure continuous access to clean drinking water.",
    ],
    note:
      "This is general canine nutrition guidance, not an individual feeding prescription. Portion size depends on age, metabolism, activity and health.",
  },
  health: {
    overview:
      "The Manchester Terrier is a robust, long-lived breed with an average lifespan of 15 to 17 years. National parent club health protocols emphasize pre-breeding screening for von Willebrand disease type 1, autoimmune thyroiditis, cardiac conditions, patellar luxation, and congenital deafness.",
    commonConditions: [
      "Von Willebrand disease type 1 (inherited bleeding disorder managed via DNA testing)",
      "Autoimmune thyroiditis (hypothyroidism)",
      "Patellar luxation (slipping kneecaps)",
      "Juvenile dilated cardiomyopathy (JDCM)",
      "Legg-Calvé-Perthes disease (avascular necrosis of the femoral head)",
      "Xanthinuria type 2A (metabolic enzyme deficiency predisposing to urinary calculi)",
      "Congenital sensorineural deafness evaluated via BAER testing",
    ],
    preventiveCare: [
      "Verify parental DNA testing for von Willebrand disease and xanthinuria before acquiring a puppy.",
      "Obtain veterinary clearances for thyroid, cardiac, and patellar health.",
      "Maintain active dental hygiene with daily brushing to prevent periodontal disease.",
      "Inform veterinary surgeons of the dog's von Willebrand status prior to surgical procedures.",
    ],
    recommendedScreenings: [
      "Von Willebrand disease type 1 DNA test",
      "Thyroid evaluation (free T4, cTSH, and autoantibodies)",
      "Veterinary cardiac evaluation",
      "Ophthalmologist eye examination",
      "BAER hearing test for congenital deafness",
      "Patellar luxation clinical evaluation",
    ],
    dentalCare:
      "Brush regularly with dog toothpaste and arrange veterinary dental checks. Ask a veterinarian about persistent bad breath, gum inflammation, broken teeth or difficulty eating.",
    earCare:
      "Check the ears regularly for redness, odour, discharge or discomfort. Clean only as needed with a dog-safe product and seek veterinary advice if symptoms persist.",
    skinCare:
      "Inspect the short coat and skin during grooming. Seek veterinary advice for persistent itching, redness, lumps, hair loss or recurrent irritation.",
  },
  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,
    idealFor: [
      "Active individuals and families seeking an athletic, compact indoor companion",
      "Apartment or townhouse residents who provide dedicated daily exercise and mental enrichment",
      "Owners who enjoy agility, trick training, and canine sports",
      "Handlers who appreciate a low-maintenance, clean-coated companion",
    ],
    notIdealFor: [
      "Homes with free-roaming rodents or pocket pets where prey drive poses risks",
      "Households seeking a placid, low-energy lap pet requiring minimal activity",
      "Handlers who rely on harsh or punitive correction methods",
      "Owners unwilling to supervise outdoor areas against tunneling or small-animal chasing",
    ],
  },
  funFacts: [
    "The breed takes its name from Manchester, England, where it became associated with ratting and urban working life.",
    "The breed's history combines traditional black-and-tan terrier ancestry with a likely influence from Whippet-type dogs.",
    "Certain canine organizations classify the Manchester Terrier in two distinct size divisions—Standard and Toy—while others recognize the toy variety as an independent breed.",
    "Its distinct tan markings include small spots above the eyes and clearly separated markings on the muzzle and legs.",
  ],
  faq: [
    {
      question: "Where does the Manchester Terrier come from?",
      answer:
        "The Manchester Terrier originated in England, particularly around Manchester, where it was developed as a fast and effective vermin-catching dog.",
    },
    {
      question: "What colours are accepted for the Manchester Terrier?",
      answer:
        "The accepted coat coloration is jet black with rich mahogany-tan points. The boundaries between the black and tan hairs must remain sharply defined without smudging.",
    },
    {
      question: "How much exercise does a Manchester Terrier need?",
      answer:
        "Many adults benefit from daily walks and additional play or training. Around 45–60 minutes is a practical starting estimate, but age, fitness and individual energy levels should guide the routine.",
    },
    {
      question: "Is the Manchester Terrier easy to groom?",
      answer:
        "Yes, its short, smooth coat is relatively low-maintenance. Regular wiping or brushing, nail trimming, ear checks and dental care are still important.",
    },
    {
      question: "Can a Manchester Terrier live with cats or small pets?",
      answer:
        "Some can, particularly with careful introductions, but prey drive varies and small animals may trigger chasing. Supervise interactions and use secure separation whenever needed.",
    },
    {
      question: "Which health tests should I ask a breeder about?",
      answer:
        "Ask for records of the parent club's recommended tests, including von Willebrand disease, thyroid, eye, cardiac and congenital-deafness assessments. Ask which additional tests are appropriate for the parents and current breeding programme.",
    },
  ],
  references: [
    "fci-manchester-terrier-standard",
    "akc-manchester-terrier-standard",
    "akc-manchester-terrier-profile",
    "royal-kennel-club-manchester-terrier-profile",
    "american-manchester-terrier-health",
    "wikimedia-manchester-terrier-photo",
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
          locator: "breed.alt_names",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Traditional names documented across reference databases.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific scientific name is established in the consulted breed standards; therefore no taxonomic label is asserted.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "FCI classification",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "FCI classification is used; kennel-club grouping systems can differ.",
    },
    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "Origin",
        },
      ],
      verifiedOn: "2026-11-09",
      note: null,
    },
    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "Origin",
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
          id: "fci-manchester-terrier-standard",
          role: "cited",
          locator: "Historical summary",
        },
        {
          id: "royal-kennel-club-manchester-terrier-profile",
          role: "verified",
          locator: "Breed history",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Manchester, England is the historically associated region and city; this is not a claim that the breed originated exclusively within modern city boundaries.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "Historical summary, general appearance, behaviour and temperament",
        },
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "About the breed and care guidance",
        },
        {
          id: "royal-kennel-club-manchester-terrier-profile",
          role: "cited",
          locator: "Breed history and characteristics",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.description",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Descriptions are original summaries of breed history and standard characteristics.",
    },
    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "Size, coat and colour",
        },
        {
          id: "akc-manchester-terrier-standard",
          role: "verified",
          locator: "Size, proportion and substance",
        },
      ],
      verifiedOn: "2026-11-09",
      note: null,
    },
    "physical.sizeCategory": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-manchester-terrier-profile",
          role: "verified",
          locator: "Breed characteristics: size",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "The Royal Kennel Club categorises the breed as small.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "Size: Dogs 41 cm, Bitches 38 cm",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "The FCI standard gives 41 cm for dogs and 38 cm for bitches as standard heights. Equal bounds represent the stated target values, not guaranteed individual heights.",
    },
    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-manchester-terrier-standard",
          role: "verified",
          locator: "Size, proportion and substance: Standard variety over 12 lb and not exceeding 22 lb",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "The AKC standard specifies the Standard variety as over 12 lb and not exceeding 22 lb.",
    },
    "physical.weight.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-manchester-terrier-standard",
          role: "verified",
          locator: "Size, proportion and substance: Standard variety weight not exceeding 22 lb",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Maximum weight bound of 22 pounds established by official standard.",
    },
    "physical.weight.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-manchester-terrier-standard",
          role: "verified",
          locator: "Size, proportion and substance: Standard variety weight not exceeding 22 lb",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Maximum weight bound of 22 pounds established by official standard.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-manchester-terrier-profile",
          role: "verified",
          locator: "Average sizes and life expectancy",
        },
        {
          id: "royal-kennel-club-manchester-terrier-profile",
          role: "cited",
          locator: "Breed characteristics: lifespan",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "The AKC lists 15-17 years; the Royal Kennel Club describes lifespan as over 12 years. Individual longevity varies.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-11-09",
      note: null,
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-11-09",
      note: null,
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "Colour",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Only the standard black-and-tan colour is recorded.",
    },
    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "royal-kennel-club-manchester-terrier-profile",
          role: "cited",
          locator: "Breed characteristics: sheds and coat length",
        },
      ],
      verifiedOn: null,
      note: "Low to moderate is an editorial estimate; the source confirms shedding but does not provide a measured shedding rate.",
    },
    "physical.droolingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "cited",
          locator: "Head and lips",
        },
      ],
      verifiedOn: null,
      note: "Low is an editorial estimate based on the breed's close-fitting lips and refined head, not a measured breed statistic.",
    },
    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "General appearance, head, eyes, ears, body, tail and coat",
        },
        {
          id: "akc-manchester-terrier-standard",
          role: "cited",
          locator: "General appearance",
        },
      ],
      verifiedOn: "2026-11-09",
      note: null,
    },
    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "Behaviour and temperament",
        },
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Breed traits and about the breed",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Traits describe typical breed tendencies, not guaranteed behaviour in every individual.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Breed traits and personality",
        },
        {
          id: "fci-manchester-terrier-standard",
          role: "cited",
          locator: "Behaviour and temperament",
        },
      ],
      verifiedOn: null,
      note: "All 1-5 scores are editorial estimates for app comparison, not validated behavioural measurements.",
    },
    "care.exercise": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Exercise",
        },
        {
          id: "royal-kennel-club-manchester-terrier-profile",
          role: "cited",
          locator: "Breed characteristics: exercise",
        },
      ],
      verifiedOn: null,
      note: "Exercise level and duration are practical guidance, not an official standard requirement; adjust to the individual dog.",
    },
    "care.grooming": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Grooming",
        },
        {
          id: "royal-kennel-club-manchester-terrier-profile",
          role: "cited",
          locator: "Breed characteristics: grooming and coat",
        },
      ],
      verifiedOn: null,
      note: "Routine grooming guidance is based on the short coat and general dog-care practice.",
    },
    "care.training": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Training and socialisation",
        },
      ],
      verifiedOn: null,
      note: "Training advice is general guidance tailored to an active terrier with prey drive.",
    },
    "care.livingEnvironment": {
      reliability: "estimate",
      sources: [
        {
          id: "royal-kennel-club-manchester-terrier-profile",
          role: "cited",
          locator: "Breed characteristics: size of home, town or country and garden",
        },
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Exercise and care",
        },
      ],
      verifiedOn: null,
      note: "Suitability is an editorial assessment and depends on exercise, enrichment, local conditions and the individual dog.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Nutrition",
        },
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Global nutrition guidelines",
        },
      ],
      verifiedOn: null,
      note: "Feeding guidance is general canine nutrition advice, not an individual prescription.",
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
          id: "american-manchester-terrier-health",
          role: "verified",
          locator: "Health and Research: Standard Manchester Terrier screening",
        },
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Health and recommended health tests",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "The overview summarises screening guidance and does not imply that an individual dog has any listed condition.",
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-manchester-terrier-health",
          role: "verified",
          locator: "Required and recommended health screening lists for Standard Manchester Terriers",
        },
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Health and recommended health tests",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Conditions are included because they appear in breed-club screening guidance or health information. The list does not establish prevalence or mean every dog is affected.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive-care guidance for dogs.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-manchester-terrier-health",
          role: "verified",
          locator: "Health and Research: required and recommended screening",
        },
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Recommended health tests from the national breed club",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Screening lists may differ by variety and national breeding programme. Confirm current requirements with the responsible breed club and veterinarian.",
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
      note: "General canine dental-care guidance.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine ear-care guidance.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General skin-care guidance.",
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Breed traits, exercise, training and care",
        },
        {
          id: "royal-kennel-club-manchester-terrier-profile",
          role: "cited",
          locator: "Size of home, exercise and town or country",
        },
      ],
      verifiedOn: null,
      note: "Suitability flags are editorial guidance, not universal rules. Household setup, training, supervision and the individual dog's temperament matter.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "Historical summary and classification",
        },
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "About the breed and Standard/Toy varieties",
        },
      ],
      verifiedOn: "2026-11-09",
      note: null,
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "Origin, history, size, coat and temperament",
        },
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Exercise, grooming, nutrition and health",
        },
        {
          id: "american-manchester-terrier-health",
          role: "cited",
          locator: "Health screening guidance",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.height.metric, breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-09",
      note: "Answers are original summaries; individual needs and outcomes vary.",
    },
  },
  updatedOn: "2026-11-09",
};
