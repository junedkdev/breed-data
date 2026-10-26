import type { Breed } from "../schema/breed.types";

export const bulldog: Breed = {
  slug: "bulldog",
  name: "Bulldog",
  scientificName: null,
  alternateNames: ["English Bulldog"],
  group:
    "FCI Group 2: Pinscher and Schnauzer - Molossoid and Swiss Mountain and Cattle Dogs; Section 2.1: Molossoid breeds, Mastiff type",
  origin: {
    country: "Great Britain",
    region: null,
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/English_Bulldog.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:English_Bulldog.jpg",
      title: "English Bulldog.jpg",
      description: "Snoring English Bulldog",
      creator: "Oxfordian Kissuth",
      uploader: "Oxfordian Kissuth",
      capturedOn: "2010-05-22",
      uploadedOn: "2010-05-22",
      width: 2866,
      height: 2157,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Oxfordian Kissuth, Wikimedia Commons, CC BY-SA 3.0. Changes, if any, must be indicated; adaptations must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-26",
    },
  ],
  overview: {
    summary:
      "A compact, muscular British companion breed recognised for its broad head, short smooth coat, distinctive face, and generally calm, affectionate character.",
    description:
      "The Bulldog is a low-set, sturdy dog with a broad chest, strong limbs, a short smooth coat, and a large head with a short muzzle. Its loose facial skin, undershot jaw, small rose-shaped ears, and characteristic rolling movement make it easy to recognise. Well-socialised Bulldogs are often steady, loyal companions that enjoy being close to their families. Their body shape also requires thoughtful care: breathing, heat tolerance, skin-fold hygiene, body condition, and sound movement deserve particular attention. Choose a dog for health and functional comfort rather than exaggerated facial or body features.",
    history:
      "The Bulldog developed in Great Britain and was historically used in bull-baiting. After that practice was outlawed in the nineteenth century, breeders increasingly developed the dog as a companion and show breed. Its appearance and role changed substantially over time, and modern breed standards emphasise a balanced body, sound movement, and the importance of health and welfare.",
    originalPurpose:
      "Historically used in bull-baiting; later developed as a companion and show dog.",
    currentRoles: [
      "Family companion",
      "Companion for households seeking a generally calm dog",
      "Conformation and breed events",
    ],
  },
  physical: {
    sizeCategory: "Medium",
    height: {
      unit: null,
      male: null,
      female: null,
    },
    weight: {
      unit: "kg",
      male: {
        min: 25,
        max: 25,
      },
      female: {
        min: 23,
        max: 23,
      },
    },
    lifespanYears: {
      min: 8,
      max: 10,
    },
    coatType: "Short, smooth, close-lying coat with a fine texture.",
    coatLength: "Short and smooth across the body.",
    coatColors: [
      "Red",
      "Fawn",
      "White",
      "Red and white",
      "Fawn and white",
      "Red brindle",
      "Fawn brindle",
      "Red brindle and white",
      "Fawn brindle and white",
      "Pied patterns using accepted colours",
    ],
    sheddingLevel:
      "Regular shedding; brushing several times a week helps remove loose hair and keep the coat in good condition.",
    droolingLevel: null,
    distinctiveFeatures: [
      "Broad, square head with prominent cheeks.",
      "Short, broad muzzle and an undershot lower jaw.",
      "Large, broad, black nose with open nostrils preferred by the breed standard.",
      "Small, thin rose-shaped ears.",
      "Round, wide-set, very dark eyes.",
      "Broad chest, compact body, and strong, muscular limbs.",
      "Loose skin and facial folds that need regular checking and careful drying.",
      "Short, smooth coat with a range of recognised solid, brindle, and pied colours.",
      "Distinctive short-stepped movement; soundness of movement is important.",
    ],
  },
  temperament: {
    traits: [
      "Generally affectionate with familiar people",
      "Often calm and companionable",
      "Alert and courageous",
      "Loyal and dependable",
      "Can be determined or strong-willed",
      "May be less tolerant of heat and strenuous exercise than many longer-muzzled breeds",
      "Individual temperament varies with genetics, health, socialisation, and experience",
    ],
    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 3,
      independence: 3,
      trainability: 3,
      barking: 2,
      energy: 2,
    },
  },
  care: {
    exercise: {
      level:
        "Low to moderate. Provide regular, gentle activity suited to the individual dog. Avoid forcing exercise in hot or humid conditions, and stop if breathing becomes difficult or the dog shows signs of overheating.",
      minutesPerDay: null,
      activities: [
        "Short, relaxed walks in cool conditions",
        "Gentle play with frequent opportunities to rest",
        "Reward-based indoor training games",
        "Low-impact enrichment and food-puzzle activities",
        "Calm sniffing walks adapted to the dog's breathing and fitness",
      ],
    },
    grooming: {
      level:
        "Low coat-maintenance needs, with extra routine attention required for skin folds, paws, and the area beneath the tail.",
      brushing:
        "Brush the short coat several times a week with a soft brush or grooming mitt, increasing as needed during shedding.",
      bathing:
        "Bathe when necessary using a dog-appropriate shampoo. Dry the skin thoroughly afterward, especially in skin folds.",
      notes: [
        "Inspect facial folds and other skin creases regularly; gently clean and dry them as needed.",
        "Moisture and debris trapped in skin folds can contribute to irritation and infection.",
        "Check the area around and beneath the tail for trapped moisture, redness, or soreness.",
        "Keep nails at a comfortable length and check paws for redness or interdigital irritation.",
        "Brush teeth regularly with dog-safe dental products.",
        "Avoid heavy exercise in heat and humidity, and provide shade, ventilation, and fresh water.",
      ],
    },
    training: {
      difficulty:
        "Moderate. Consistent, patient, reward-based sessions are preferable to long or physically demanding drills.",
      tips: [
        "Start with short, positive sessions and reward calm, useful behaviour.",
        "Practise basic cues, gentle handling, and cooperative grooming from an early age.",
        "Use food rewards or play when appropriate, while monitoring body condition and total daily food intake.",
        "Avoid training in hot or humid conditions.",
        "Do not force exercise or continued activity when breathing becomes noisy, laboured, or unusually rapid.",
        "Ask a veterinarian about exercise limits if the dog has breathing, joint, cardiac, or other health problems.",
      ],
      socialization:
        "Use gradual, positive introductions to people, places, sounds, and suitable dogs. Supervise interactions with children and other animals, and allow the dog to rest or disengage.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: null,
      climates: [
        "Heat and humidity require particular caution because short-muzzled dogs may have difficulty cooling themselves through panting.",
        "Provide shade, fresh water, good ventilation, and access to a cool indoor space.",
        "Avoid leaving the dog in a parked vehicle, even for a short period in warm conditions.",
        "Adjust walks and outdoor activity to the weather and the individual dog's breathing and fitness.",
      ],
      aloneTimeTolerance: null,
    },
  },
  nutrition: {
    dietType:
      "A complete and balanced diet appropriate to the dog's life stage, body condition, and activity level.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Measure portions and adjust them according to body condition, age, activity, and veterinary advice. Avoid overfeeding and monitor weight regularly, as excess body weight can add strain and complicate mobility and breathing. Fresh drinking water should always be available.",
    considerations: [
      "Bulldogs can gain excess weight if food portions and treats are not managed carefully.",
      "Count treats as part of the daily food allowance.",
      "Discuss persistent digestive symptoms, food reactions, or unexplained weight changes with a veterinarian.",
      "Ask a veterinarian to recommend a suitable diet for puppies, older dogs, or dogs with diagnosed health conditions.",
    ],
    note:
      "A single calorie target or meal schedule cannot be reliably assigned to every Bulldog. Needs vary with age, body condition, health, and activity.",
  },
  health: {
    overview:
      "Bulldogs have important health and welfare considerations associated with their short muzzle and compact body shape. Research on UK veterinary records has reported increased odds of several disorders in English Bulldogs, including brachycephalic obstructive airway syndrome (BOAS), skin-fold dermatitis, cherry eye, entropion, dry eye, and interdigital cysts. These are population-level findings, not a diagnosis for an individual dog. Breathing comfort, heat tolerance, skin condition, eyes, paws, mobility, and body condition deserve particular attention. Seek veterinary advice early if breathing is noisy or laboured, exercise tolerance changes, or skin and eye problems recur.",
    commonConditions: [
      "Brachycephalic obstructive airway syndrome (BOAS), which can impair breathing and heat regulation.",
      "Skin-fold dermatitis, particularly where skin remains damp or irritated.",
      "Cherry eye (prolapse of the gland of the third eyelid).",
      "Entropion and other eyelid or eye-surface problems, including dry eye.",
      "Interdigital cysts or inflammation between the toes.",
      "Tracheal hypoplasia is a recognised breed-club screening concern.",
      "Patellar luxation and cardiac conditions are included in breed-club screening recommendations.",
    ],
    preventiveCare: [
      "Arrange regular veterinary examinations and discuss breathing, eyes, skin folds, mobility, and body condition.",
      "Seek veterinary advice for persistent snoring with effort, noisy breathing, fainting, blue or grey gums, or reduced exercise tolerance.",
      "Avoid heat exposure and never leave the dog in a parked vehicle.",
      "Keep skin folds and the area beneath the tail clean and dry.",
      "Maintain a healthy body condition and avoid strenuous exercise in warm or humid weather.",
      "Keep vaccinations and parasite prevention appropriate to the dog's location and lifestyle.",
      "Seek veterinary care for recurring skin inflammation, eye discharge, lameness, or paw lesions.",
    ],
    recommendedScreenings: [
      "Patella evaluation.",
      "Cardiac examination.",
      "Radiographic evaluation for tracheal hypoplasia.",
    ],
    dentalCare:
      "Brush the teeth regularly with dog-safe toothpaste and arrange veterinary dental checks as recommended. Seek advice about difficulty chewing, oral pain, or changes in eating.",
    earCare:
      "Check the ears routinely for redness, odour, discharge, or persistent scratching. Use only a suitable ear-cleaning product as advised by a veterinarian.",
    skinCare:
      "Check facial folds, other skin creases, paws, and the area beneath the tail. Keep affected areas clean and dry, and consult a veterinarian for redness, odour, soreness, discharge, or recurrent irritation.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: null,
    apartmentLiving: null,
    idealFor: [
      "Households looking for a companion that enjoys being near its people",
      "Owners able to maintain regular skin-fold and general health care",
      "People who can provide gentle, consistent exercise and manage hot-weather risks",
      "Households prepared for potentially significant veterinary needs",
    ],
    notIdealFor: [
      "People seeking a dog for running, strenuous hiking, or sustained outdoor exercise",
      "Households unable to provide a cool, well-ventilated environment in hot weather",
      "Owners unable to manage routine skin-fold hygiene and veterinary follow-up",
      "Anyone selecting primarily for an extremely flat face, exaggerated wrinkles, or other features that compromise comfort or function",
    ],
  },
  funFacts: [
    "The Bulldog was historically associated with bull-baiting; after the practice was outlawed, the breed's role shifted toward companionship and showing.",
    "Its distinctive short-stepped movement is often described as a rolling gait, but sound and comfortable movement remain important.",
    "The breed's facial folds need practical care rather than being treated as purely decorative features.",
  ],
  faq: [
    {
      question: "How much does a Bulldog weigh?",
      answer:
        "The FCI standard lists a weight of 25 kg for males and 23 kg for females. These are standard figures, not a guarantee that every individual dog will have that weight.",
    },
    {
      question: "How long does a Bulldog usually live?",
      answer:
        "The published breed profile gives a life expectancy of 8–10 years. Individual lifespan varies with health, genetics, care, and other factors.",
    },
    {
      question: "Does a Bulldog need a lot of exercise?",
      answer:
        "Most need regular gentle activity rather than sustained strenuous exercise. Adjust activity to the individual dog and avoid heat, humidity, and any exercise that causes breathing difficulty.",
    },
    {
      question: "Why is Bulldog health screening important?",
      answer:
        "The breed has documented health concerns involving breathing, skin folds, eyes, and other conditions. Breed-club screening recommendations include a patella evaluation, cardiac examination, and radiographic evaluation for tracheal hypoplasia. Discuss the individual dog's health with a veterinarian.",
    },
    {
      question: "How should I care for a Bulldog's facial wrinkles?",
      answer:
        "Check the folds regularly and keep them clean and dry. Persistent redness, odour, moisture, discharge, or soreness should be assessed by a veterinarian rather than treated only with home cleaning.",
    },
    {
      question: "Can Bulldogs live in hot climates?",
      answer:
        "They need careful heat management. Short-muzzled dogs can struggle to cool themselves, especially in hot or humid weather. Provide shade, fresh water, ventilation, and a cool indoor area, and avoid strenuous outdoor activity during heat.",
    },
    {
      question: "Are Bulldogs good with children?",
      answer:
        "Some are affectionate family companions, but no breed is automatically suitable for every child or household. Supervise all interactions and consider the individual dog's health, temperament, and comfort around children.",
    },
  ],
  references: [
    "fci-bulldog-standard-149",
    "fci-bulldog-nomenclature-149",
    "royal-kennel-club-bulldog-standard",
    "american-kennel-club-bulldog",
    "akc-coton-de-tulear-health-testing-recommendations",
    "bulldog-club-of-america-health-testing",
    "rvc-vetcompass-english-bulldog-study",
    "wikimedia-english-bulldog-oxfordian-kissuth",
  ],
  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bulldog",
          role: "verified",
          locator: "Breed profile: English Bulldog alternate name",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Uses a documented alternate name.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific scientific name is recorded in the selected breed sources.",
    },
    group: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-bulldog-nomenclature-149",
          role: "verified",
          locator: "Group 2, Section 2.1, Mastiff type",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Uses the FCI classification.",
    },
    origin: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-bulldog-standard-149",
          role: "verified",
          locator: "Origin and brief historical summary",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The standard identifies Great Britain as the origin.",
    },
    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The selected official standard does not specify a more precise region of origin.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-bulldog-standard-149",
          role: "verified",
          locator: "General appearance, temperament, historical summary, and utilisation",
        },
        {
          id: "american-kennel-club-bulldog",
          role: "verified",
          locator: "About the Breed and History",
        },
        {
          id: "royal-kennel-club-bulldog-standard",
          role: "verified",
          locator: "General appearance, temperament, movement, and coat",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "User-facing descriptions are original summaries of the breed's history and characteristics.",
    },
    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bulldog-standard-149",
          role: "verified",
          locator: "General appearance, head, body, coat, colour, movement, and weight",
        },
        {
          id: "royal-kennel-club-bulldog-standard",
          role: "verified",
          locator: "General appearance, coat, colours, and size",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Standard-based physical description; unavailable and estimated fields are overridden below.",
    },
    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-bulldog-standard-149",
          role: "cited",
          locator: "General appearance and weight",
        },
      ],
      verifiedOn: null,
      note: "Editorial category inferred from the compact build and standard weight figures.",
    },
    "physical.height": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The FCI standard gives no height measurement. The general height range on the AKC profile is not sex-specific, so it is not forced into the schema's male/female measurement fields.",
    },
    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bulldog-standard-149",
          role: "verified",
          locator: "WEIGHT: Males 25 kgs; Females 23 kgs",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The standard's exact kilogram figures are stored as single-value ranges without unit conversion.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bulldog",
          role: "verified",
          locator: "Average sizes and life expectancy",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Published life expectancy is 8–10 years; individual lifespan varies.",
    },
    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bulldog",
          role: "verified",
          locator: "Grooming: brushing and heavier shedding periods",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Describes routine coat shedding and grooming needs.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling level was established from the selected sources.",
    },
    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-bulldog-standard-149",
          role: "verified",
          locator: "Behaviour and temperament",
        },
        {
          id: "american-kennel-club-bulldog",
          role: "verified",
          locator: "Breed profile and temperament summary",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Temperament traits describe common breed tendencies, not guaranteed individual behaviour.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-bulldog",
          role: "cited",
          locator: "Breed traits and characteristics",
        },
        {
          id: "fci-bulldog-standard-149",
          role: "cited",
          locator: "Behaviour and temperament",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1–5 scores based on general breed descriptions, not official measurements or predictions for an individual dog.",
    },
    care: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bulldog",
          role: "verified",
          locator: "Exercise, heat precautions, grooming, and skin-fold care",
        },
        {
          id: "bulldog-club-of-america-health-testing",
          role: "verified",
          locator: "Breed health resources and screening recommendations",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Breed-specific care advice is combined with cautious, practical guidance.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No single daily minute range is assigned because exercise tolerance varies and can be limited by breathing, heat, age, and health.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable universal apartment-suitability verdict was established.",
    },
    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A yard alone does not establish suitability; the individual dog's health, supervision, and environment matter.",
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific tolerance for time alone was established.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-bulldog",
          role: "cited",
          locator: "Nutrition and maintaining a healthy body condition",
        },
        {
          id: "bulldog-club-of-america-health-testing",
          role: "cited",
          locator: "Breed health and welfare resources",
        },
      ],
      verifiedOn: null,
      note: "General feeding advice is not a breed-specific prescription.",
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal puppy feeding frequency is not assigned; follow age-appropriate veterinary guidance.",
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal adult feeding frequency is not assigned; follow the dog's individual needs and veterinary advice.",
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal senior feeding frequency is not assigned; follow the dog's individual needs and veterinary advice.",
    },
    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "rvc-vetcompass-english-bulldog-study",
          role: "verified",
          locator: "Results and discussion: disorder predispositions in English Bulldogs",
        },
        {
          id: "bulldog-club-of-america-health-testing",
          role: "verified",
          locator: "Health testing recommendations",
        },
        {
          id: "american-kennel-club-bulldog",
          role: "verified",
          locator: "Health and heat precautions",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Separates population-level disorder associations and breeding-screening recommendations from an individual dog's diagnosis.",
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rvc-vetcompass-english-bulldog-study",
          role: "verified",
          locator: "Disorder predispositions: BOAS, skin-fold dermatitis, cherry eye, entropion, dry eye, and interdigital cysts",
        },
        {
          id: "bulldog-club-of-america-health-testing",
          role: "verified",
          locator: "Patella, cardiac, and tracheal hypoplasia screening",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The study reports population-level associations; it does not imply that every Bulldog will develop these conditions.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-bulldog",
          role: "cited",
          locator: "Heat precautions and grooming",
        },
        {
          id: "bulldog-club-of-america-health-testing",
          role: "cited",
          locator: "Breed health and screening resources",
        },
      ],
      verifiedOn: null,
      note: "Practical preventive advice; veterinary care should be tailored to the individual dog.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-coton-de-tulear-health-testing-recommendations",
          role: "verified",
          locator: "Bulldog: patella evaluation, cardiac exam, and tracheal hypoplasia radiographic evaluation",
        },
        {
          id: "bulldog-club-of-america-health-testing",
          role: "verified",
          locator: "Recommended Bulldog health tests",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Lists breed-club screening recommendations; discuss individual testing decisions with a veterinarian.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-bulldog",
          role: "cited",
          locator: "General care and health guidance",
        },
      ],
      verifiedOn: null,
      note: "General canine dental-care guidance.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-bulldog",
          role: "cited",
          locator: "Grooming and general care",
        },
      ],
      verifiedOn: null,
      note: "General canine ear-care guidance.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-bulldog",
          role: "cited",
          locator: "Facial wrinkle and skin-fold care",
        },
        {
          id: "rvc-vetcompass-english-bulldog-study",
          role: "cited",
          locator: "Skin-fold dermatitis findings",
        },
      ],
      verifiedOn: null,
      note: "General skin-care advice informed by documented skin-fold concerns.",
    },
    suitability: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bulldog",
          role: "verified",
          locator: "About the Breed, exercise, and care",
        },
        {
          id: "bulldog-club-of-america-health-testing",
          role: "verified",
          locator: "Health and welfare resources",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Suitability lists reflect care demands and welfare considerations rather than a guarantee about any individual dog.",
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable universal first-time-owner suitability rating was established.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal yes/no rating can capture the child's age, supervision, and individual dog's temperament.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable universal suitability rating for senior owners was established.",
    },
    "suitability.activeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "An active owner's plans may involve activity levels that are unsuitable for some Bulldogs; no universal rating was established.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable universal apartment-living rating was established.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-bulldog-standard-149",
          role: "verified",
          locator: "Historical summary and movement",
        },
        {
          id: "american-kennel-club-bulldog",
          role: "verified",
          locator: "History and breed profile",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Facts are paraphrased in original wording.",
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-bulldog-standard-149",
          role: "verified",
          locator: "Weight, origin, and historical summary",
        },
        {
          id: "american-kennel-club-bulldog",
          role: "verified",
          locator: "Life expectancy, care, and heat precautions",
        },
        {
          id: "bulldog-club-of-america-health-testing",
          role: "verified",
          locator: "Recommended health tests",
        },
        {
          id: "rvc-vetcompass-english-bulldog-study",
          role: "verified",
          locator: "Health findings and population-level limitations",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Answers are original summaries of the referenced standards, health guidance, and research.",
    },
  },
  updatedOn: "2026-10-26",
};
