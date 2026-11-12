import type { Breed } from "../schema/breed.types";

export const lhasa_apso: Breed = {
  slug: "lhasa-apso",
  name: "Lhasa Apso",
  scientificName: null,

  alternateNames: [
    "Apso Seng-Kye",
    "Tibetan Apso",
  ],

  group: "Companion and Toy Dogs; Tibetan breeds",

  origin: {
    country: "Tibet (China)",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lhasaapso.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Lhasaapso.jpg",
      title: "Lhasaapso.jpg",
      description: "Lhasa apso dog",
      creator: "Lhasaapso",
      uploader: "Lhasaapso~commonswiki",
      capturedOn: "2011-12-26",
      uploadedOn: "2011-12-26",
      width: 1200,
      height: 800,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Lhasaapso, Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-11-12",
    },
  ],

  overview: {
    summary:
      "A compact, self-assured Tibetan companion dog celebrated for its long, weather-resistant coat, independent spirit, and keen indoor sentinel instincts.",

    description:
      "The Lhasa Apso is a sturdy, slightly rectangular small dog featuring dark oval eyes, heavily feathered pendant ears, and a plumed tail carried gracefully over its back. Its hallmark straight, heavy, hard-textured outer coat and moderate undercoat require consistent brushing and combing to remain free of tangles. Confident and playful around trusted household members, this ancient breed tends to remain aloof and watchful toward strangers, echoing centuries spent alerting owners to visitors inside Himalayan residences. Despite its modest stature, the Lhasa Apso appreciates daily walks, interactive puzzle play, patient reward-based guidance, and respectful handling.",

    history:
      "Originating in the high-altitude climate of Tibet, the Lhasa Apso developed its dense, protective coat and hardy constitution to endure harsh mountain winters and intense sunlight. Revered for centuries as an indoor sentinel inside Tibetan monasteries, palaces, and private homes, these dogs worked alongside larger outdoor mastiffs by sounding sharp alarms at unfamiliar arrivals. Rarely leaving their homeland until the early twentieth century, breeding pairs arrived in Britain during the 1920s, where they were initially grouped under the umbrella label Lhasa Terrier. Clearer breed distinctions emerged over the following decade, leading to dedicated breed clubs in Britain by 1933 and formal recognition in North America by 1935.",

    originalPurpose:
      "Indoor sentinel and cherished companion within Tibetan households, palaces, and monasteries.",

    currentRoles: [
      "Household companion",
      "Alert indoor watchdog",
      "Companion for owners committed to regular coat care",
      "Participant in obedience, rally, and scent-work games",
      "Visiting or therapy dog when temperament and training suit the setting",
    ],
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "in",
      male: {
        min: 10,
        max: 11,
      },
      female: null,
    },

    weight: {
      unit: "lb",
      male: {
        min: 12,
        max: 18,
      },
      female: {
        min: 12,
        max: 18,
      },
    },

    lifespanYears: {
      min: 12,
      max: 15,
    },

    coatType:
      "Long, heavy, straight, hard-textured double coat with a moderate undercoat; neither woolly nor silky",

    coatLength:
      "Long and dense, featuring facial hair falling over the eyes, a beard and moustache, heavily feathered ears and legs, and a plumed tail that does not impede movement",

    coatColors: [
      "Golden",
      "Sandy",
      "Honey",
      "Dark grizzle",
      "Slate",
      "Smoke",
      "Parti-colour",
      "Black",
      "White",
      "Brown",
    ],

    sheddingLevel:
      "Low compared with many double-coated breeds, though loose hair traps easily within the long coat and requires regular brushing",

    droolingLevel: null,

    distinctiveFeatures: [
      "Compact, balanced body slightly longer than its height at the withers",
      "Straight, heavy, hard-textured outer coat parting naturally down the back",
      "Abundant facial furnishings forming a distinct beard and moustache",
      "Medium-sized, dark oval eyes without visible white sclera",
      "Pendant ears covered in dense, long feathering",
      "High-set, well-feathered tail carried over the back, frequently with a slight kink near the tip",
      "Round, cat-like feet with firm pads and protective hair",
    ],
  },

  temperament: {
    traits: [
      "Alert and observant",
      "Confident and self-possessed",
      "Independent-minded and clever",
      "Playful and affectionate with family members",
      "Reserved or cautious around unfamiliar visitors",
      "Persistent when motivated",
      "Vocal when announcing unusual sounds or arrivals",
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 4,
      independence: 5,
      trainability: 3,
      barking: 4,
      energy: 3,
    },
  },

  care: {
    exercise: {
      level:
        "Moderate. Daily walks, indoor play, and engaging mental puzzles satisfy physical and behavioral needs.",
      minutesPerDay: null,
      activities: [
        "Daily leashed walks matched to age and fitness",
        "Short, varied reward-based training drills",
        "Interactive food puzzles and indoor scent games",
        "Gentle fetch and structured household play",
      ],
    },

    grooming: {
      level:
        "High when maintained in a full floor-length coat; moderate if clipped into a shorter pet trim.",
      brushing:
        "Brush and comb thoroughly in sections down to the skin multiple times per week for full coats, paying close attention behind the ears, under the legs, and around facial furnishings; use a conditioning spray before brushing to prevent breakage.",
      bathing:
        "Bathe roughly every two weeks for full-coated adults or every two to three weeks for clipped coats using a gentle canine shampoo, rinsing completely and drying thoroughly while brushing to prevent matting.",
      notes: [
        "Decide between maintaining a full traditional coat or a practical shorter trim based on available grooming time.",
        "Never brush only the top layer of a long coat, as tight mats frequently form near the skin.",
        "Keep facial hair clean and neatly parted or tied away from the eyes to prevent irritation.",
        "Check ears, nails, paw pads, and hair between toes during each session.",
        "Introduce brushing and handling early in puppyhood using positive reinforcement.",
      ],
    },

    training: {
      difficulty:
        "Moderate — intelligent and capable, yet independent and easily bored by repetitive drills.",
      tips: [
        "Keep training sessions brief, upbeat, and reinforced with high-value treats or play.",
        "Maintain consistent household expectations from day one.",
        "Avoid harsh corrections or forceful handling, which can prompt stubbornness or withdrawal.",
        "Teach a quiet cue early to manage sentinel barking at household noises.",
        "Practise recall inside securely enclosed spaces before allowing off-lead freedom.",
        "Pair routine brushing and nail trimming with calm rewards to build lifelong handling tolerance.",
      ],
      socialization:
        "Expose puppies gradually and positively to diverse people, sounds, surfaces, and calm dogs. Allow wary individuals to observe new visitors at their own pace without forcing physical contact.",
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: [
        "Cool and temperate climates where the insulating double coat provides natural protection",
        "Warm climates with air-conditioned indoor resting spaces, shade, fresh water, and walks scheduled during cooler hours",
      ],
      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced commercial or veterinarian-formulated diet suited to small-breed life stage, body condition, and activity level.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Select a nutritionally complete small-breed diet appropriate to the dog's life stage. Measure daily portions accurately rather than free-feeding, factor training treats into total daily calories, and ensure fresh water is always accessible.",

    considerations: [
      "Avoid overfeeding, as excess weight strains small joints and can upset sensitive digestion.",
      "Transition gradually over several days whenever switching food formulas.",
      "Monitor water intake and urination closely, consulting a veterinarian promptly if unusual increases occur.",
      "Seek veterinary guidance before adding dietary supplements or switching to therapeutic formulas.",
    ],

    note:
      "Caloric targets and meal counts depend on age, activity, and metabolism; consult a veterinarian for an individualized feeding plan.",
  },

  health: {
    overview:
      "Although renowned for hardiness and longevity, the Lhasa Apso carries documented predispositions to hereditary renal dysplasia, specific ocular disorders such as dry eye and progressive retinal atrophy, patellar luxation, and bladder stones. Discussing parental health histories and monitoring clinical signs with a veterinarian supports early intervention, though no screening eliminates all individual risk.",

    commonConditions: [
      "Hereditary renal dysplasia (kidney dysfunction)",
      "Keratoconjunctivitis sicca (dry eye)",
      "Progressive retinal atrophy (PRA)",
      "Patellar luxation",
      "Hip dysplasia",
      "Cherry eye (prolapsed third eyelid gland)",
      "Corneal ulcers",
      "Bladder calculi (stones)",
      "Umbilical or inguinal hernias",
      "Allergies and chronic skin irritation",
    ],

    preventiveCare: [
      "Schedule regular veterinary wellness checks and maintain recommended vaccinations and parasite control.",
      "Watch closely for excessive thirst, frequent urination, appetite shifts, cloudiness in the eyes, or limping.",
      "Maintain routine dental, ear, and coat hygiene alongside regular weight monitoring.",
      "Request documented parental health histories from breeders before acquiring a puppy.",
    ],

    recommendedScreenings: [
      "Current national parent-club listings specify no mandatory breed-wide breeder testing requirements.",
      "Veterinarians and conscientious breeders commonly recommend discussing eye examinations, patella and hip evaluations, and familial kidney history prior to breeding or purchase.",
    ],

    dentalCare:
      "Brush teeth regularly using dog-safe enzymatic toothpaste and schedule professional dental cleanings as advised by a veterinarian.",

    earCare:
      "Inspect the feathered pendant ears weekly for redness, odour, or discharge, drying them gently after baths and cleaning only with veterinarian-approved solutions.",

    skinCare:
      "Part the dense coat during brushing to check for redness, parasites, or hidden mats, consulting a veterinarian for persistent scratching or skin inflammation.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: null,
    apartmentLiving: true,

    idealFor: [
      "Households seeking a compact, confident companion with an independent streak",
      "Owners willing to commit to regular brushing, bathing, or scheduled professional trims",
      "Apartment or house dwellers able to provide daily walks, enrichment, and patient guidance",
    ],

    notIdealFor: [
      "People unwilling to maintain a demanding long coat or budget for regular grooming",
      "Owners expecting instant, effortless obedience or indiscriminate friendliness toward strangers",
      "Households where young children and dogs would interact without adult supervision",
    ],
  },

  funFacts: [
    "The breed's long, coarse outer coat and insulating undercoat evolved to withstand harsh winters and glare in the Tibetan Himalayas.",
    "Historically, Lhasa Apsos served as indoor sentinels inside monasteries and homes while larger dogs guarded the exterior grounds.",
    "When first introduced to Britain in the early 1920s, they were grouped with other shaggy Himalayan breeds under the name Lhasa Terrier.",
    "Their feathered tail curls over the back and frequently displays a characteristic kink near the tip.",
    "Despite their compact size, Lhasa Apsos are naturally watchful and reserved rather than indiscriminately outgoing with strangers.",
  ],

  faq: [
    {
      question: "How big is a Lhasa Apso?",
      answer:
        "Adult males typically stand 10 to 11 inches at the shoulder, with females slightly smaller, and adult weights generally range from 12 to 18 pounds.",
    },
    {
      question: "How long does a Lhasa Apso usually live?",
      answer:
        "Expected lifespan commonly ranges from 12 to 15 years, depending on genetics, nutrition, weight control, and preventive veterinary care.",
    },
    {
      question: "Does a Lhasa Apso need a lot of grooming?",
      answer:
        "Yes, especially when kept in a full-length coat. Thorough brushing, periodic bathing, complete drying, and careful combing around the face and legs prevent painful mats; many owners choose a shorter trim for easier upkeep.",
    },
    {
      question: "Is a Lhasa Apso suitable for an apartment?",
      answer:
        "Yes, provided the dog receives daily walks, mental stimulation, and consistent training to guide its natural alert barking.",
    },
    {
      question: "Are Lhasa Apsos friendly with strangers?",
      answer:
        "They are typically affectionate and playful with family members while remaining cautious or aloof toward unfamiliar people, benefiting from calm, gradual socialization.",
    },
    {
      question: "Which health problems should prospective owners ask about?",
      answer:
        "Prospective owners should ask about familial kidney health (renal dysplasia), eye conditions such as dry eye and progressive retinal atrophy, and joint issues like patellar luxation.",
    },
  ],

  references: [
    "fci-lhasa-apso-standard",
    "american-kennel-club-lhasa-apso",
    "american-lhasa-apso-club-faqs",
    "american-lhasa-apso-club-health-statement",
    "commons-lhasaapso-photo-2011",
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
      verifiedOn: "2026-11-12",
      note: "Traditional Tibetan designations documented in breed reference datasets.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The breed standards and breed profiles consulted do not establish a breed-specific scientific name. No taxonomic value has been inferred.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lhasa-apso-standard",
          role: "verified",
          locator: "FCI classification: Group 9, Companion and Toy Dogs; Section 5, Tibetan breeds",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Uses the FCI Group 9 Section 5 classification.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lhasa-apso-standard",
          role: "verified",
          locator: "Origin: Tibet (China)",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "The standard states Tibet (China) as the origin.",
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The standard identifies Tibet (China) as the origin without specifying a narrower administrative region.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-lhasa-apso-standard",
          role: "verified",
          locator: "Brief Historical Summary, Utilization, General Appearance, and Behaviour/Temperament",
        },
        {
          id: "american-kennel-club-lhasa-apso",
          role: "verified",
          locator: "About the Breed, History, Exercise, and Training",
        },
        {
          id: "american-lhasa-apso-club-faqs",
          role: "verified",
          locator: "Frequently Asked Questions: watchdog barking and temperament",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Overview is an original synthesis of the breed standard and kennel-club/parent-club profiles.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lhasa-apso-standard",
          role: "verified",
          locator: "General Appearance, Important Proportions, Head, Ears, Tail, Feet, Coat, and Colour",
        },
        {
          id: "american-kennel-club-lhasa-apso",
          role: "verified",
          locator: "Height, Weight, Life Expectancy, Breed Colors & Markings, and About the Breed",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Standard-based physical features are verified against FCI Standard No. 227; lifespan, weight range, and shedding notes are supported by the AKC profile.",
    },

    "physical.sizeCategory": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-lhasa-apso",
          role: "verified",
          locator: "General appearance and size",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },

    "physical.height": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-lhasa-apso",
          role: "verified",
          locator: "Average sizes and life expectancy: Height 10–11 inches (male), slightly smaller (female)",
        },
        {
          id: "fci-lhasa-apso-standard",
          role: "cited",
          locator: "Size: Ideal height at the withers: Males 25 cm, females slightly smaller",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Retained in published inches (10–11 in for males, female numeric range uncodified). FCI lists an ideal male height of 25 cm.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-lhasa-apso",
          role: "verified",
          locator: "Average sizes and life expectancy: Weight 12–18 pounds",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "The source gives a breed-wide range (12–18 lb) rather than separate male and female ranges; stored in pounds as published.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-lhasa-apso",
          role: "verified",
          locator: "Average sizes and life expectancy: Life Expectancy 12–15 years",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Published life-expectancy range of 12–15 years.",
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lhasa-apso-standard",
          role: "verified",
          locator: "Coat — Hair",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lhasa-apso-standard",
          role: "verified",
          locator: "Coat — Hair",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lhasa-apso-standard",
          role: "verified",
          locator: "Coat — Colour",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "All colors listed are acceptable except merle, which is unacceptable under the FCI standard.",
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-lhasa-apso",
          role: "verified",
          locator: "Grooming and coat-care guidance",
        },
        {
          id: "american-lhasa-apso-club-faqs",
          role: "verified",
          locator: "FAQ: suitability for people with allergies or asthma",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Described as low-shedding, though regular brushing is essential to prevent trapped loose hair and mats.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The sources consulted did not provide a sufficiently reliable drooling-level rating.",
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-lhasa-apso-standard",
          role: "verified",
          locator: "General Appearance, Important Proportions, Head, Ears, Tail, Feet, Coat",
        },
      ],
      verifiedOn: "2026-11-12",
      note: null,
    },

    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-lhasa-apso-standard",
          role: "verified",
          locator: "Behaviour/Temperament",
        },
        {
          id: "american-kennel-club-lhasa-apso",
          role: "verified",
          locator: "About the Breed and Breed Traits & Characteristics",
        },
        {
          id: "american-lhasa-apso-club-faqs",
          role: "verified",
          locator: "FAQs on barking and personality",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Traits reflect the standard's confident, alert temperament and parent-club descriptions.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-lhasa-apso",
          role: "cited",
          locator: "Breed Traits & Characteristics and About the Breed",
        },
        {
          id: "american-lhasa-apso-club-faqs",
          role: "cited",
          locator: "FAQs on personality and barking",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1–5 estimates derived from qualitative breed descriptions.",
    },

    care: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-lhasa-apso",
          role: "verified",
          locator: "Grooming, Exercise, Training, and Nutrition",
        },
        {
          id: "american-lhasa-apso-club-faqs",
          role: "verified",
          locator: "FAQs on barking, personality, and grooming",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Care guidance synthesizes breed profile and parent-club recommendations.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Authoritative sources recommend daily walks and play without prescribing a rigid minute quota.",
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-lhasa-apso",
          role: "cited",
          locator: "Exercise and coat information",
        },
      ],
      verifiedOn: null,
      note: "Climate guidance reflects coat insulation and standard warm-weather welfare precautions.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific alone-time duration was established.",
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
          id: "american-kennel-club-lhasa-apso",
          role: "cited",
          locator: "Nutrition",
        },
      ],
      verifiedOn: null,
      note: "General canine nutrition guidance; individual portions should be tailored with a veterinarian.",
    },

    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific puppy meal frequency was established.",
    },

    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific adult meal frequency was established.",
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific senior meal frequency was established.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-lhasa-apso",
          role: "verified",
          locator: "Health and What to Expect When Caring for a Lhasa Apso",
        },
        {
          id: "american-lhasa-apso-club-faqs",
          role: "verified",
          locator: "FAQ: hereditary diseases",
        },
        {
          id: "american-lhasa-apso-club-health-statement",
          role: "verified",
          locator: "Health statement: reported conditions",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Conditions represent documented breed risks rather than a guarantee of occurrence in any individual dog.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-lhasa-apso",
          role: "cited",
          locator: "Health and Grooming",
        },
      ],
      verifiedOn: null,
      note: "General preventive care guidance.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-lhasa-apso",
          role: "verified",
          locator: "Recommended Health Tests From the National Breed Club",
        },
        {
          id: "american-lhasa-apso-club-health-statement",
          role: "verified",
          locator: "Health statement: no mandatory breeder testing requirements",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Documents that the parent club does not currently mandate formal breed-wide testing, while noting conditions worth discussing with a veterinarian.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "Routine teeth-brushing and professional prophylaxis advice",
        },
      ],
      verifiedOn: null,
      note: "Routine canine dental-care guidance.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine ear inspection guidance.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine coat and skin inspection guidance.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-lhasa-apso",
          role: "cited",
          locator: "Exercise, Training, and About the Breed",
        },
        {
          id: "american-lhasa-apso-club-faqs",
          role: "cited",
          locator: "FAQs on personality and barking",
        },
      ],
      verifiedOn: null,
      note: "Editorial suitability guidance based on independence, watchdog nature, and grooming requirements.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The sources consulted do not establish a reliable universal yes/no rating for first-time owners.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Family suitability depends on the individual dog, children's ages, supervision, and training.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal yes/no suitability rating for senior owners was established.",
    },

    "suitability.activeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal yes/no suitability rating for active owners was established.",
    },

    "suitability.apartmentLiving": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-lhasa-apso",
          role: "cited",
          locator: "Exercise and lifestyle adaptability",
        },
      ],
      verifiedOn: null,
      note: "Small size suits apartment living provided exercise and barking are managed.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-lhasa-apso-standard",
          role: "verified",
          locator: "Brief Historical Summary, Utilization, Tail, and Coat",
        },
        {
          id: "american-kennel-club-lhasa-apso",
          role: "verified",
          locator: "History, About the Breed, and breed characteristics",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "Verified against the breed standard and kennel-club history.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-lhasa-apso-standard",
          role: "verified",
          locator: "Origin, Size, Coat, and Behaviour/Temperament",
        },
        {
          id: "american-kennel-club-lhasa-apso",
          role: "verified",
          locator: "Height, Weight, Life Expectancy, Grooming, Exercise, and Health",
        },
        {
          id: "american-lhasa-apso-club-faqs",
          role: "verified",
          locator: "Frequently Asked Questions: temperament, barking, and hereditary health",
        },
        {
          id: "american-lhasa-apso-club-health-statement",
          role: "verified",
          locator: "Health statement: reported breed health concerns",
        },
      ],
      verifiedOn: "2026-11-12",
      note: "FAQ answers summarize verified breed facts and conservative health risks in original wording.",
    },
  },

  updatedOn: "2026-11-12",
};
