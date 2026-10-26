import type { Breed } from "../schema/breed.types";

export const german_longhaired_pointer: Breed = {
  slug: "german-longhaired-pointer",
  name: "German Longhaired Pointer",
  scientificName: null,
  alternateNames: [
    "Deutsch Langhaar",
    "German Long-haired Pointing Dog",
    "German Longhaired Pointing Dog",
    "German Longhair",
  ],
  group:
    "FCI Group 7 — Pointing Dogs; Section 1.2 — Continental Pointing Dogs, Spaniel type; working trial required",
  origin: {
    country: "Germany",
    region: "Germany; the breed was developed as a versatile long-coated hunting dog",
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/German_Longhaired_Pointer.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:German_Longhaired_Pointer.jpg",
      title: "German Longhaired Pointer.jpg",
      description: "Photograph captioned as a German Longhaired Pointer.",
      creator: "NLVince91",
      uploader: "NLVince91",
      capturedOn: "2021-05-20",
      uploadedOn: "2021-11-01",
      width: 12000,
      height: 9000,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by NLVince91, via Wikimedia Commons, licensed under CC BY-SA 4.0. https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-26",
    },
  ],
  overview: {
    summary:
      "The German Longhaired Pointer is a powerful, athletic German gundog developed to search, point and retrieve game across fields, woodland and water. It combines a calm, generally biddable temperament with substantial exercise needs and a dense, feathered coat.",
    description:
      "This medium-to-large working dog has a strong, muscular outline, brown eyes, hanging ears and a close-fitting coat that is smooth or slightly wavy. Longer feathering appears on the ears, backs of the legs and tail, while the hair below the hocks is shorter. The breed was developed for versatile hunting work rather than a single task, so it typically benefits from regular outdoor activity, scent-based games and structured training. Individual temperament, sociability and exercise needs still vary, and a working-bred dog may be a poor match for a household unable to provide sustained activity and engagement.",
    history:
      "The breed developed in Germany from several types of hunting dog, including bird, hawk and water dogs and scent hounds. Pure breeding was established from 1879, and Baron von Schorlemer prepared an early breed standard in 1897. The breed remains classified as a versatile pointing gundog, with work expected in fields, woodland and water.",
    originalPurpose:
      "Versatile hunting work, including searching for, pointing and retrieving game on land and in water.",
    currentRoles: [
      "Versatile hunting and field work",
      "Pointing and retrieving",
      "Scent work and other structured dog activities",
      "Active companion in a home able to meet its working-dog needs",
    ],
  },
  physical: {
    sizeCategory: "Medium to large",
    height: {
      unit: "cm",
      male: { min: 60, max: 70 },
      female: { min: 58, max: 66 },
    },
    weight: {
      unit: null,
      male: null,
      female: null,
    },
    lifespanYears: { min: 10, max: 14 },
    coatType:
      "Dense double coat with a close-fitting, firm outer coat that is smooth or slightly wavy; the undercoat is well developed.",
    coatLength:
      "On the back and sides, the coat is typically 3–5 cm long. Hair may be longer under the neck, on the chest and belly, with feathering on the ears, backs of the legs and tail.",
    coatColors: [
      "Solid brown",
      "Brown with white or speckled markings, especially on the chest and feet",
      "Dark roan with dark-brown patches",
      "Pale roan with pale-brown patches",
      "Mottled or flecked roan with small brown spots on a white background",
      "Brown and white, including large patches or saddle/blanket markings",
      "Fawn markings may occur occasionally",
    ],
    sheddingLevel:
      "Sheds; the dense coat and feathering require regular brushing, especially after outdoor work.",
    droolingLevel: null,
    distinctiveFeatures: [
      "Strong, muscular, balanced build suited to sustained field work",
      "Brown eyes and hanging ears with wavy feathering",
      "Dense, close-fitting coat with a good undercoat",
      "Feathering on the backs of the legs and a plumed tail",
      "Coat colours based on brown, white and roan patterns",
      "Ground-covering movement with drive from the hindquarters",
    ],
  },
  temperament: {
    traits: [
      "Generally calm and even-tempered",
      "Good-natured and usually responsive to consistent training",
      "Alert and closely engaged with its handler",
      "Energetic, with a strong instinct for hunting and searching",
      "Often people-oriented, though individual sociability varies",
      "Can become restless or develop unwanted behaviours without sufficient activity",
    ],
    scores: {
      affection: 4,
      withChildren: null,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 3,
      independence: 3,
      trainability: 4,
      barking: null,
      energy: 5,
    },
  },
  care: {
    exercise: {
      level:
        "Very high; this is a working gundog that needs substantial daily physical activity and mental work. The UK Kennel Club describes its exercise requirement as more than two hours per day.",
      minutesPerDay: { min: 120, max: null },
      activities: [
        "Long, purposeful walks and hikes appropriate to age and fitness",
        "Supervised retrieving and field-style games",
        "Scent work, tracking and search games",
        "Swimming where safe and suitable",
        "Reward-based obedience and other structured dog sports",
        "Securely managed exercise while recall and hunting-drive control are being trained",
      ],
    },
    grooming: {
      level: "Moderate; brush more often after field work or when the coat tangles.",
      brushing:
        "Brush thoroughly at least several times each week, checking the feathering, tail and the hair around and behind the ears for knots, burrs and debris. Increase grooming after walks through dense vegetation.",
      bathing:
        "Bathe when needed with a dog-appropriate shampoo, rinse thoroughly and dry the dense coat well.",
      notes: [
        "Inspect the ears regularly for wax, moisture, debris or irritation.",
        "Check the feathering and tail for burrs, tangles and abrasions after outdoor activity.",
        "Trim nails as needed and maintain routine dental care.",
        "Do not shave the coat routinely; ask a professional groomer or veterinarian about any coat or skin concern.",
      ],
    },
    training: {
      difficulty:
        "Moderate; the breed is described as trainable and biddable, but its stamina and hunting motivation require consistent handling and meaningful daily work.",
      tips: [
        "Use reward-based training with clear, consistent cues.",
        "Teach recall progressively in controlled settings before considering greater freedom outdoors.",
        "Channel searching and retrieving instincts into structured games.",
        "Introduce calm, positive exposure to people, dogs, surfaces and environments from an early age.",
        "Keep sessions engaging and appropriate to the dog's age, health and arousal level.",
      ],
      socialization:
        "Provide early, ongoing positive socialisation and practise calm behaviour in varied environments. Do not assume that a generally good-natured breed description guarantees how an individual dog will respond.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,
      climates: [
        "Provide shade, ventilation and fresh water in warm weather.",
        "Avoid strenuous exercise during hot or humid periods and adjust activity to the individual dog.",
        "A secure outdoor area is useful, but a yard does not replace structured exercise and training.",
      ],
      aloneTimeTolerance:
        "A reliable breed-wide duration is not established. Build alone time gradually and provide adequate exercise and enrichment; avoid routinely leaving the dog alone for long periods.",
    },
  },
  nutrition: {
    dietType:
      "Complete and balanced dog food suitable for the dog's life stage, body condition, activity and health.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Set portions according to the food's feeding guidance, body condition and the dog's workload. Keep clean water available and review diet and body condition with a veterinarian as activity or life stage changes.",
    considerations: [
      "Working dogs may need different energy intake on active days, but portions should be adjusted to body condition rather than assumed from breed alone.",
      "Avoid vigorous exercise immediately around meals when advised by the veterinarian, particularly for a large, deep-chested dog.",
      "Introduce dietary changes gradually and seek veterinary advice for persistent gastrointestinal signs, itching or suspected food reactions.",
      "Discuss supplements and special diets with a veterinarian.",
    ],
    note:
      "No universal calorie target or breed-specific meal schedule is recorded; needs depend on age, workload, body condition and health.",
  },
  health: {
    overview:
      "The breed club recommends pre-breeding hip scoring, eye examination including gonioscopy for goniodysgenesis, and a heart check. It also recommends DNA testing for the E locus associated with undesirable yellow/red coat colour and genetic markers associated with familial thyroid follicular cell carcinoma (FTFC). These are screening recommendations, not evidence that every dog will develop a condition. The club states that no FTFC cases had been identified in the UK breed population at the time of its page review, while cases have been reported in Europe.",
    commonConditions: [],
    preventiveCare: [
      "Ask breeders for documented results of the health tests recommended by the breed club.",
      "Maintain routine veterinary examinations, vaccinations and parasite prevention.",
      "Keep the dog lean and physically conditioned, increasing exercise gradually.",
      "Seek veterinary advice for changes in vision, persistent lameness, exercise intolerance or other new symptoms.",
      "Review any health-screening or genetic-testing advice with a veterinarian and the breeder, as recommendations can change.",
    ],
    recommendedScreenings: [
      "Hip scoring for breeding stock",
      "Eye examination including gonioscopy to screen for goniodysgenesis",
      "A veterinary heart check before breeding",
      "E-locus DNA testing, as recommended by the breed club",
      "DNA testing for familial thyroid follicular cell carcinoma-associated markers, subject to the relevant national programme and veterinary/breeder advice",
    ],
    dentalCare:
      "Brush the teeth regularly with dog-specific toothpaste and arrange veterinary dental checks.",
    earCare:
      "Check the hanging, feathered ears regularly for wax, moisture, odour, discharge or irritation; seek veterinary advice if symptoms occur.",
    skinCare:
      "Inspect skin and coat while brushing, especially after field work. Persistent itching, redness, hair loss or sores warrant veterinary assessment.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "Active households able to provide substantial daily exercise and mental enrichment",
      "People interested in gundog work, retrieving, scent work or structured outdoor activities",
      "Handlers willing to train recall and manage hunting instincts responsibly",
      "Homes prepared for regular coat, ear and feathering care",
    ],
    notIdealFor: [
      "Households seeking a low-energy dog with minimal exercise needs",
      "People unable to provide daily activity, training and companionship",
      "Owners expecting reliable off-leash behaviour around wildlife without gradual training",
      "Homes where the dog would routinely be left alone for long periods without enrichment",
    ],
  },
  funFacts: [
    "The breed is listed by the FCI as Deutsch Langhaar, with standard number 117.",
    "The breed standard records pure breeding from 1879 and an early written standard from 1897.",
    "Its traditional work spans fields, woodland and water rather than a single hunting environment.",
    "The coat is meant to be close-fitting and functional, with feathering but not excessive hair.",
  ],
  faq: [
    {
      question: "What was the German Longhaired Pointer bred to do?",
      answer:
        "It was developed as a versatile hunting dog for work in fields, woodland and water, including searching for, pointing and retrieving game.",
    },
    {
      question: "How tall is a German Longhaired Pointer?",
      answer:
        "The FCI standard gives a height of 60–70 cm for males and 58–66 cm for females. Its preferred height ranges are narrower than those full limits.",
    },
    {
      question: "How much does a German Longhaired Pointer weigh?",
      answer:
        "The FCI standard gives an average weight of 30 kg, not a sex-specific weight range. This catalogue's weight-range field is therefore left unrecorded rather than turning the average into a minimum or maximum.",
    },
    {
      question: "How much exercise does the breed need?",
      answer:
        "It needs substantial daily activity. The UK Kennel Club lists more than two hours per day; the right amount and intensity still depend on age, health, fitness and workload.",
    },
    {
      question: "What grooming does the coat need?",
      answer:
        "Brush regularly and check the feathering, ears and tail for tangles and burrs, especially after walks or work in dense vegetation. Routine ear, nail and dental care is also important.",
    },
    {
      question: "Which health tests should I ask a breeder about?",
      answer:
        "Ask about hip scoring, an eye examination that includes gonioscopy, a heart check and the breed club's recommended DNA tests. Discuss the meaning of each result with a veterinarian; screening recommendations do not mean a dog will necessarily develop a condition.",
    },
    {
      question: "Is a German Longhaired Pointer suitable for apartment living?",
      answer:
        "There is no universal yes-or-no answer supported by the sources reviewed. Its substantial exercise and enrichment needs may be difficult to meet in some apartments, so suitability depends on the individual dog and the household's daily routine.",
    },
  ],
  references: [
    "fci-german-longhaired-pointer-standard-117",
    "american-kennel-club-german-longhaired-pointer",
    "german-longhaired-pointer-club-uk-characteristics-standard",
    "german-longhaired-pointer-club-uk-health-testing",
    "royal-kennel-club-german-longhaired-pointer",
    "commons-german-longhaired-pointer-nlvince91",
  ],
  evidence: {
    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "Title: Deutsch Langhaar; FCI Standard No. 117",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Alternate names are limited to names used by the standard and reputable breed references.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific scientific name is used; this field is left null rather than asserting a taxonomic label.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "FCI classification: Group 7, Section 1.2, with working trial",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Classification follows the FCI standard.",
    },
    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "Origin and brief historical summary",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Germany is the stated country of origin; the regional description is kept broad.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "Utilization, brief historical summary, general appearance, coat and temperament",
        },
        {
          id: "german-longhaired-pointer-club-uk-characteristics-standard",
          role: "verified",
          locator: "Breed overview, temperament, characteristics and exercise",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Original summary of the breed's working purpose, history and general characteristics.",
    },
    "physical.sizeCategory": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-german-longhaired-pointer",
          role: "verified",
          locator: "Breed profile: height and weight overview",
        },
        {
          id: "german-longhaired-pointer-club-uk-characteristics-standard",
          role: "verified",
          locator: "General appearance",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Size category is a broad editorial label supported by kennel-club and breed-club profiles.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "Size and weight: height at the withers, males and females",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Values and unit are copied from the published FCI standard without conversion.",
    },
    "physical.weight": {
      reliability: "unavailable",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "cited",
          locator: "Size and weight: average weight 30 kg",
        },
      ],
      verifiedOn: null,
      note: "The standard publishes an average of 30 kg, not sex-specific minimum/maximum ranges. The schema stores ranges only, so no range is recorded.",
    },
    "physical.lifespanYears": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-german-longhaired-pointer",
          role: "cited",
          locator: "Breed profile: life expectancy 12–14 years",
        },
        {
          id: "german-longhaired-pointer-club-uk-characteristics-standard",
          role: "conflicting",
          locator: "Average lifespan: 10–12 years",
        },
      ],
      verifiedOn: null,
      note: "Published profile estimates differ. The stored 10–14 year span reflects the outer limits of the cited estimates, not a measured population range.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "Coat: smooth or slightly wavy, close-fitting hair and dense undercoat",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Coat texture and undercoat follow the official standard.",
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "Coat: hair on back and sides 3–5 cm; feathering and coat on other regions",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The published coat length is retained in its original unit.",
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "Coat colour",
        },
        {
          id: "german-longhaired-pointer-club-uk-characteristics-standard",
          role: "verified",
          locator: "Colour section; UK standard update noted as effective 1 August 2025",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Colour names are paraphrased from the breed standard; regional wording may vary.",
    },
    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-german-longhaired-pointer",
          role: "verified",
          locator: "Breed characteristics: sheds and grooming more than once a week",
        },
        {
          id: "american-kennel-club-german-longhaired-pointer",
          role: "verified",
          locator: "Grooming: coat upkeep and regular brushing",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The text describes shedding and grooming needs without claiming a measured shedding quantity.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling measure was established in the sources reviewed.",
    },
    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "General appearance, ears, coat, tail and gait",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Features are original summaries of the standard's appearance description.",
    },
    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "Behaviour and temperament",
        },
        {
          id: "german-longhaired-pointer-club-uk-characteristics-standard",
          role: "verified",
          locator: "Temperament and characteristics",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Breed-level descriptions are not guarantees about an individual dog's behaviour.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "cited",
          locator: "Behaviour and temperament",
        },
        {
          id: "american-kennel-club-german-longhaired-pointer",
          role: "cited",
          locator: "Breed traits and characteristics",
        },
        {
          id: "german-longhaired-pointer-club-uk-characteristics-standard",
          role: "cited",
          locator: "Temperament, trainability and exercise",
        },
      ],
      verifiedOn: null,
      note: "Non-standardised editorial 1–5 estimates based on descriptions; they are not results of a validated temperament test.",
    },
    "temperament.scores.withChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A reliable breed-wide numeric score for behaviour with children was not established.",
    },
    "temperament.scores.barking": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A reliable breed-wide numeric barking score was not established.",
    },
    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-german-longhaired-pointer",
          role: "verified",
          locator: "Breed characteristics: more than 2 hours of exercise per day",
        },
        {
          id: "american-kennel-club-german-longhaired-pointer",
          role: "verified",
          locator: "Exercise, working-dog needs and activity options",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The 120-minute lower bound reflects the UK Kennel Club's published more-than-two-hours recommendation; individual needs vary.",
    },
    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-german-longhaired-pointer",
          role: "verified",
          locator: "Grooming: regular coat upkeep, burrs, ear knots and tail care",
        },
        {
          id: "royal-kennel-club-german-longhaired-pointer",
          role: "verified",
          locator: "Breed characteristics: grooming more than once a week",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Practical grooming guidance reflects the coat and feathering.",
    },
    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-german-longhaired-pointer",
          role: "verified",
          locator: "Training and exercise",
        },
        {
          id: "german-longhaired-pointer-club-uk-characteristics-standard",
          role: "verified",
          locator: "Trainability, sensitivity and early consistent training",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Training advice is based on breed descriptions and general reward-based practice.",
    },
    "care.livingEnvironment": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General welfare guidance adapted for an energetic working dog; housing suitability depends on the individual and household.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a universal apartment-suitability answer for all dogs of this breed.",
    },
    "nutrition": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine nutrition guidance; no universal breed-specific calorie prescription is asserted.",
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal breed-specific puppy meal schedule was not established.",
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal breed-specific adult meal schedule was not established.",
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal breed-specific senior meal schedule was not established.",
    },
    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "german-longhaired-pointer-club-uk-health-testing",
          role: "verified",
          locator: "Health testing: hip scoring, gonioscopy, heart checks and DNA testing recommendations",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The overview distinguishes screening recommendations from disease prevalence and includes the club's stated limitation about UK FTFC cases.",
    },
    "health.commonConditions": {
      reliability: "unavailable",
      sources: [
        {
          id: "german-longhaired-pointer-club-uk-health-testing",
          role: "cited",
          locator: "The page describes screening priorities but does not establish a population-level common-condition list",
        },
      ],
      verifiedOn: null,
      note: "A reliable breed-wide prevalence list was not established; screening targets are listed separately rather than labelled common diseases.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive veterinary guidance, informed by the screening priorities described by the breed club.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "german-longhaired-pointer-club-uk-health-testing",
          role: "verified",
          locator: "Health testing: required and strongly recommended tests for breeding stock",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Recommendations are attributed to the breed club and should be reconfirmed with the relevant local programme.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine dental care guidance for dogs.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine ear care guidance, particularly relevant to hanging ears and feathering.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General skin and coat monitoring guidance.",
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "german-longhaired-pointer-club-uk-characteristics-standard",
          role: "cited",
          locator: "Exercise requirements, space and working-dog temperament",
        },
        {
          id: "royal-kennel-club-german-longhaired-pointer",
          role: "cited",
          locator: "Exercise, home and garden recommendations",
        },
      ],
      verifiedOn: null,
      note: "Suitability statements are editorial guidance based on exercise and working-dog needs, not a validated household assessment.",
    },
    "suitability.firstTimeOwners": {
      "reliability": "unavailable",
      "sources": [],
      "verifiedOn": null,
      "note": "Experience alone does not determine suitability; owner support, training and exercise capacity vary too widely for a reliable universal value."
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal family-with-children rating is not established by the sources reviewed.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal suitability rating for senior owners is not established by the sources reviewed.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal apartment-living rating is not established by the sources reviewed.",
    },
    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "Brief historical summary and FCI classification",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Facts are paraphrased from the official standard.",
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-german-longhaired-pointer-standard-117",
          role: "verified",
          locator: "Origin, classification, historical summary, coat and size/weight",
        },
        {
          id: "american-kennel-club-german-longhaired-pointer",
          role: "verified",
          locator: "Breed profile: lifespan, grooming and exercise",
        },
        {
          id: "german-longhaired-pointer-club-uk-health-testing",
          role: "verified",
          locator: "Health testing recommendations",
        },
        {
          id: "royal-kennel-club-german-longhaired-pointer",
          role: "verified",
          locator: "Breed characteristics and exercise",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "FAQ answers are original summaries and qualify estimates and screening information.",
    },
  },
  updatedOn: "2026-10-26",
};
