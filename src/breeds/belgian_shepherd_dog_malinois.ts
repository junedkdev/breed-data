import type { Breed } from "../schema/breed.types";

export const belgian_shepherd_dog_malinois: Breed = {
  slug: "belgian-shepherd-dog-malinois",
  name: "Belgian Shepherd Dog (Malinois)",
  scientificName: null,
  alternateNames: [
    "Belgian Malinois",
    "Malinois",
    "Belgian Shepherd Malinois",
    "Chien de Berger Belge - Malinois",
  ],
  group: "Sheepdogs and Cattledogs; Sheepdogs",
  origin: {
    country: "Belgium",
    region: "Mechelen (historically Malines), Belgium",
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chien_de_Berger_Belge_Malinois.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Chien_de_Berger_Belge_Malinois.jpg",
      title: "Chien de Berger Belge Malinois",
      description: "Male Belgian Shepherd Dog (Malinois).",
      creator: "Elevage du Champ des Merles",
      uploader: "Jacklinkers",
      capturedOn: "2019-06-01",
      uploadedOn: "2019-06-01",
      width: 2048,
      height: 1365,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Elevage du Champ des Merles (uploaded by Jacklinkers), Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Changes, if any, must be indicated; adaptations must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-11",
    },
  ],
  overview: {
    summary:
      "The Belgian Shepherd Dog (Malinois) is a highly driven, athletic European pastoral dog celebrated for its acute intelligence, remarkable stamina, and intense focus. Characterised by a square build, erect ears, and a short fawn-to-mahogany coat with an expressive black mask, it excels in complex working disciplines, requiring dedicated training, mental challenges, and experienced handling.",
    description:
      "Squarely proportioned, muscular, and exceptionally agile, the Malinois moves with proud carriage and effortless, ground-covering reach. Its weather-resistant double coat features a harsh, straight outer layer over a dense undercoat, displaying rich fawn to dark mahogany colouration with charcoal tipping and an unmistakable black mask enveloping the muzzle and eye rims. Possessing rapid reflexes and intense environmental awareness, the breed forms a close, deeply devoted bond with its primary handler. This extreme working motivation and high sensitivity mean the Malinois demands substantial daily physical exertion, advanced cognitive tasks, and consistent positive reinforcement to thrive in an active home.",
    history:
      "The Malinois represents the short-coated variety of the native Belgian sheepdog family, tracing its heritage to the agricultural region surrounding the city of Mechelen (historically known in French as Malines). During the late nineteenth century, veterinary professors and dedicated pastoral enthusiasts systematically categorised regional working flock dogs, standardising four distinct coat varieties by colour, length, and texture. Renowned for their quick obedience, exceptional agility, and vigilant territorial instincts, Malinois dogs rapidly transitioned from pastoral livestock management to military, law enforcement, and search-and-rescue roles across the globe.",
    originalPurpose:
      "Herding, driving, and protecting livestock flocks, with rapid historic evolution into personal defence, tracking, and sentry work.",
    currentRoles: [
      "Specialised police, military, and detection service",
      "Search and rescue operations",
      "High-level canine sports including Schutzhund/IGP, French Ring, and agility",
      "Active pastoral and livestock management",
      "Competitive tracking and obedience trials",
      "Dedicated companion for experienced, highly active handlers",
    ],
  },
  physical: {
    sizeCategory: "Large",
    height: {
      unit: "cm",
      male: {
        min: 60,
        max: 66,
      },
      female: {
        min: 56,
        max: 62,
      },
    },
    weight: {
      unit: "kg",
      male: {
        min: 25,
        max: 30,
      },
      female: {
        min: 20,
        max: 25,
      },
    },
    lifespanYears: {
      min: 14,
      max: 16,
    },
    coatType:
      "Short, straight, weather-resistant outer coat with a dense undercoat.",
    coatLength:
      "Short overall; very short on the head, ears, and lower legs, with somewhat longer hair around the neck, tail, and backs of the thighs.",
    coatColors: [
      "Rich fawn with black overlay and a pronounced black mask",
      "Mahogany with black overlay and a pronounced black mask",
    ],
    sheddingLevel:
      "Regular shedding, with heavier seasonal shedding; more frequent brushing helps remove loose coat during these periods.",
    droolingLevel: null,
    distinctiveFeatures: [
      "Alert, upright, distinctly triangular ears",
      "A long, well-chiselled head with a tapered muzzle and dark nose",
      "Medium-sized, slightly almond-shaped brown eyes, preferably dark brown",
      "A square, well-balanced outline with strong but not bulky musculature",
      "A short double coat with a weather-resistant outer layer and dense undercoat",
      "Fawn-to-mahogany colouring, dark hair overlay, and a pronounced black mask",
      "Free, efficient movement suited to sustained activity",
    ],
  },
  temperament: {
    traits: [
      "Vigilant and alert",
      "Highly intelligent and quick-witted",
      "Confident and self-assured",
      "Intensely energetic",
      "Deeply devoted to familiar handlers",
      "Protective instinct",
      "Reserved toward strangers",
      "Strong prey and herding drive",
    ],
    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 5,
      independence: 3,
      trainability: 5,
      barking: 4,
      energy: 5,
    },
  },
  care: {
    exercise: {
      level:
        "Very high. Plan for substantial daily physical activity and structured mental work. Ordinary short walks alone are unlikely to meet the needs of many dogs of this variety.",
      minutesPerDay: null,
      activities: [
        "Brisk walks and running with a suitably conditioned dog",
        "Reward-based obedience and advanced training",
        "Tracking and scent-work games",
        "Agility and other structured dog sports",
        "Herding activities with suitable instruction",
        "Problem-solving games and supervised interactive play",
      ],
    },
    grooming: {
      level:
        "Low to moderate for routine coat maintenance, increasing during heavy shedding.",
      brushing:
        "Brush regularly to remove loose hair and inspect the skin; increase brushing during seasonal shedding.",
      bathing:
        "Bathe when needed with a dog-appropriate shampoo, avoiding unnecessarily frequent baths that may irritate the skin.",
      notes: [
        "The short coat is comparatively easy to maintain but still sheds.",
        "Check the skin during brushing for irritation, wounds, parasites, or unusual changes.",
        "Trim nails regularly and check the paws after vigorous activity.",
        "Brush the teeth routinely using dog-safe dental products.",
        "Inspect the ears regularly and seek veterinary advice for redness, odour, discharge, or persistent scratching.",
      ],
    },
    training: {
      difficulty:
        "Demanding for an inexperienced owner because the breed combines high energy, quick learning, strong working motivation, and a need for consistent handling.",
      tips: [
        "Begin reward-based training and age-appropriate socialisation early.",
        "Teach calm behaviour and settling skills alongside active tasks.",
        "Use short, engaging sessions that build reliable everyday skills.",
        "Provide suitable outlets for chasing, tracking, and other working drives rather than allowing unsafe rehearsal.",
        "Use secure management around roads, livestock, wildlife, and unfamiliar dogs.",
        "Avoid harsh or confrontational methods; seek a qualified professional if behaviour becomes difficult to manage.",
      ],
      socialization:
        "Introduce the dog gradually and positively to different people, environments, sounds, surfaces, and suitable dogs. Socialisation should build calm, safe behaviour rather than force interaction.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,
      climates: [
        "Can live in a range of conditions with suitable shelter and management.",
        "Provide shade, fresh water, rest, and exercise timing that reduces heat stress in hot weather.",
        "Adjust activity to the individual dog's fitness, age, health, and environmental conditions.",
      ],
      aloneTimeTolerance:
        "Often a poor fit for long periods of isolation without preparation, companionship, activity, and appropriate enrichment.",
    },
  },
  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate to the dog's life stage, body condition, and activity level.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Choose food that meets recognised nutritional adequacy standards and match portions to age, workload, body condition, and veterinary advice. Monitor weight and adjust the amount as activity changes. If feeding a home-prepared diet, develop it with a veterinarian or qualified veterinary nutrition professional.",
    considerations: [
      "Working and sport dogs may have different energy needs depending on the intensity and duration of activity.",
      "Measure meals and account for training treats when managing total calorie intake.",
      "Keep clean drinking water available at all times.",
      "Avoid strenuous exercise immediately around meals if your veterinarian advises precautions for the individual dog.",
      "Discuss persistent digestive problems, unexplained weight changes, or a special diet with a veterinarian.",
    ],
    note:
      "There is no single portion size suitable for every Malinois. Adjust feeding to the individual dog rather than assuming all dogs of this variety have the same workload or energy requirement.",
  },
  health: {
    overview:
      "While generally a hardy and vigorous working breed, health monitoring protocols emphasise routine screening for hip and elbow dysplasia alongside hereditary eye disorders. Additional clinical concerns noted in veterinary literature, such as idiopathic epilepsy, hemangiosarcoma, and thyroid dysfunction, warrant discussion with responsible breeders and veterinary clinicians. Pre-breeding diagnostic evaluations provide actionable health context without implying that any single dog will develop these disorders.",
    commonConditions: [
      "Hip dysplasia — developmental malformation of the coxofemoral joint that can lead to osteoarthritis.",
      "Elbow dysplasia — inherited joint incongruity and articular cartilage fragmentation affecting the forelimbs.",
      "Hereditary eye conditions — including progressive retinal atrophy (PRA) and cataracts, monitored through clinical ophthalmic screening.",
    ],
    preventiveCare: [
      "Keep routine veterinary examinations and vaccinations up to date.",
      "Maintain an appropriate body condition and a gradual, safe exercise programme.",
      "Use parasite prevention suited to the dog's location and exposure.",
      "Discuss the family health history and recommended screening results when choosing a puppy.",
      "Seek veterinary advice for persistent lameness, vision changes, exercise intolerance, or other new symptoms.",
    ],
    recommendedScreenings: [
      "Radiographic hip evaluation to assess joint conformation.",
      "Radiographic elbow evaluation for articular soundness.",
      "Comprehensive ophthalmic evaluation by a board-certified veterinary ophthalmologist.",
      "Careful review of familial medical histories for epilepsy, cardiac anomalies, and thyroid disease with the breeder and veterinarian.",
    ],
    dentalCare:
      "Brush regularly with dog-safe toothpaste and arrange veterinary dental assessment when indicated. Do not use human toothpaste for dogs.",
    earCare:
      "Check the ears routinely and clean only as advised with a suitable veterinary product. Pain, discharge, odour, or persistent head shaking warrants veterinary assessment.",
    skinCare:
      "Inspect the coat and skin while brushing. Seek advice for persistent itching, redness, hair loss, sores, or recurrent skin problems.",
  },
  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "Experienced handlers passionate about active training and canine sports",
      "Households capable of providing multiple hours of daily physical activity and mental stimulation",
      "Handlers working in canine detection, tracking, search and rescue, or IGP sports",
      "Active homes with secure outdoor boundaries and strict management protocols",
    ],
    notIdealFor: [
      "First-time dog owners seeking an easygoing, low-maintenance pet",
      "Sedentary households unable to fulfill intense physical and mental requirements",
      "Owners expecting a self-exercising dog that stays in a yard without structured human engagement",
      "Homes unable to safely manage high prey drive, intense territorial vigilance, or sudden arousal",
    ],
  },
  funFacts: [
    "The Malinois takes its name from the city of Mechelen in northern Belgium, historically known as Malines in French.",
    "It is one of four distinct coat varieties of the native Belgian Shepherd Dog family, sharing its lineage with the Groenendael, Tervueren, and Laekenois.",
    "Due to its exceptional agility, light frame, and relentless drive, the Malinois has become one of the premier breeds chosen worldwide for elite military and search-and-rescue units.",
  ],
  faq: [
    {
      question: "Is the Belgian Malinois a distinct breed or a variety?",
      answer:
        "In its country of origin and under international cynological classifications, the Malinois is recognized as the short-haired variety of the Belgian Shepherd Dog, alongside the Groenendael, Tervueren, and wire-haired Laekenois.",
    },
    {
      question: "How much exercise does a Belgian Malinois require?",
      answer:
        "The Malinois requires substantial daily physical activity—often one to two hours or more of running, agility, or working drills—coupled with focused mental challenges like scent detection or advanced obedience.",
    },
    {
      question: "Is the Belgian Malinois suitable for a novice dog owner?",
      answer:
        "Generally no. The breed's intense drive, rapid speed, sensitive nature, and vigilance make it a demanding companion that requires experienced handling, consistent boundaries, and structured training outlets.",
    },
    {
      question: "What health tests should prospective puppy buyers verify?",
      answer:
        "Reputable breeders provide documented screening certificates for hip dysplasia, elbow dysplasia, and clinical ophthalmic examinations, while screening bloodlines for family histories of epilepsy and cardiac health.",
    },
    {
      question: "Does the Belgian Malinois shed heavily?",
      answer:
        "Yes. The short double coat sheds continuously at a moderate rate, with extensive undercoat shedding occurring during seasonal coat blowouts in the spring and autumn.",
    },
    {
      question: "Can a Belgian Malinois live harmoniously with children?",
      answer:
        "They can live successfully with children in structured, well-managed households where the dog is thoroughly socialised and interactions are closely supervised to prevent herding, heel-nipping, or over-arousal.",
    },
  ],
  references: [
    "fci-belgian-shepherd-dog-standard-15",
    "fci-belgian-shepherd-dog-nomenclature",
    "american-kennel-club-belgian-malinois",
    "american-kennel-club-malinois-right-for-you",
    "american-belgian-malinois-club-health-statement",
    "wikimedia-belgian-malinois-jacklinkers",
    "the-dog-api",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
  ],
  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-nomenclature",
          role: "verified",
          locator: "Varieties: Groenendael, Laekenois, Malinois, Tervueren",
        },
        {
          id: "american-kennel-club-belgian-malinois",
          role: "verified",
          locator: "Breed profile and history",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names: Belgian Malinois, Malinois",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Names are based on the breed variety's official nomenclature and established usage.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific scientific name is recorded in the consulted breed standards.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "FCI classification: Group 1 Sheepdogs and Cattle Dogs, Section 1 Sheepdogs",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Uses the Sheepdogs and Cattledogs classification.",
    },
    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Origin and brief historical summary",
        },
        {
          id: "american-kennel-club-belgian-malinois",
          role: "verified",
          locator: "History: origin around Malines",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Country and regional association are supported by the standard and breed history.",
    },
    "origin.region": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Origin and brief historical summary",
        },
        {
          id: "american-kennel-club-belgian-malinois",
          role: "verified",
          locator: "History: region around Malines",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Regional origin around Mechelen (Malines).",
    },
    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Utilisation, brief historical summary, coat and temperament sections",
        },
        {
          id: "american-kennel-club-belgian-malinois",
          role: "verified",
          locator: "About the Breed, History, Exercise, Training, and working activities",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "User-facing prose is an original summary of the documented history, function, and characteristics.",
    },
    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Size, weight, coat, colour, head, body, and movement",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Standard-based physical characteristics.",
    },
    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "cited",
          locator: "Size and weight",
        },
        {
          id: "american-kennel-club-belgian-malinois",
          role: "cited",
          locator: "Height and weight profile",
        },
      ],
      verifiedOn: null,
      note: "Editorial size category inferred from published adult measurements.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "SIZE, WEIGHT AND MEASUREMENTS: Height at withers: males 62 cm (limits 60–66 cm), females 58 cm (limits 56–62 cm)",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Stored in centimeters as published by the official standard.",
    },
    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "SIZE, WEIGHT AND MEASUREMENTS: Weight: males about 25–30 kg, females about 20–25 kg",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Stored in kilograms as published by the official standard.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-belgian-malinois",
          role: "verified",
          locator: "Average size and life expectancy: 14–16 years",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "The published breed-profile life expectancy is 14–16 years; individual lifespan varies.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Coat section: short coat with dense undercoat",
        },
      ],
      verifiedOn: "2026-11-11",
      note: null,
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Coat colours for Malinois: fawn with black overlay and black mask",
        },
      ],
      verifiedOn: "2026-11-11",
      note: null,
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No sufficiently clear breed-specific value was established from the selected sources.",
    },
    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-belgian-malinois",
          role: "verified",
          locator: "Grooming: seasonal shedding and brushing",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Shedding information is taken from breed-care guidance, not inferred from the breed standard.",
    },
    temperament: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Temperament: watchful, active, bursting with energy",
        },
        {
          id: "american-kennel-club-belgian-malinois",
          role: "verified",
          locator: "Breed traits, exercise, training, and social behaviour",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Traits summarise the standard and breed guidance without implying every dog behaves identically.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "cited",
          locator: "Temperament and working character",
        },
        {
          id: "american-kennel-club-belgian-malinois",
          role: "cited",
          locator: "Breed traits, energy, training, and protective tendencies",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1–5 scores, not official measurements or individual-dog predictions.",
    },
    care: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-belgian-malinois",
          role: "verified",
          locator: "Exercise, grooming, training, and nutrition",
        },
        {
          id: "american-kennel-club-malinois-right-for-you",
          role: "verified",
          locator: "Temperament, activity, children, and time-alone considerations",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Breed-specific care guidance is combined with cautious practical recommendations.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The selected authoritative sources describe high activity needs but do not establish a universal daily minute count.",
    },
    "care.training.tips": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-belgian-malinois",
          role: "cited",
          locator: "Training and exercise",
        },
        {
          id: "american-kennel-club-malinois-right-for-you",
          role: "cited",
          locator: "Training and behaviour guidance",
        },
      ],
      verifiedOn: null,
      note: "Practical training recommendations; adapt methods to the individual dog's behaviour and needs.",
    },
    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-belgian-malinois",
          role: "cited",
          locator: "Exercise: a yard alone does not meet the breed's needs",
        },
      ],
      verifiedOn: null,
      note: "An editorial suitability estimate; a yard is not a substitute for daily exercise, training, and interaction.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable binary apartment-suitability verdict was established; suitability depends on management, exercise, and the individual dog.",
    },
    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "cited",
          locator: "General appearance and coat",
        },
      ],
      verifiedOn: null,
      note: "Practical climate-management advice, not a claim that the breed is safe in every temperature.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Nutritional assessment guidelines and body condition scoring",
        },
      ],
      verifiedOn: null,
      note: "General nutritional advice following WSAVA guidelines; diet should be matched to the individual dog.",
    },
    "nutrition.dietType": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-belgian-malinois",
          role: "cited",
          locator: "Nutrition",
        },
      ],
      verifiedOn: null,
      note: "General canine nutrition guidance; diet should be matched to the individual dog.",
    },
    "nutrition.feedingFrequency": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal meal frequency was not established; feeding should reflect age, condition, and veterinary advice.",
    },
    "nutrition.guidelines": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-belgian-malinois",
          role: "cited",
          locator: "Nutrition",
        },
      ],
      verifiedOn: null,
      note: "General feeding guidance rather than a breed-specific prescription.",
    },
    "nutrition.considerations": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-belgian-malinois",
          role: "cited",
          locator: "Nutrition and exercise",
        },
      ],
      verifiedOn: null,
      note: "General nutrition and activity advice; individual needs vary.",
    },
    "nutrition.note": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-belgian-malinois",
          role: "cited",
          locator: "Nutrition",
        },
      ],
      verifiedOn: null,
      note: "Avoids prescribing a fixed portion or feeding schedule without individual information.",
    },
    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-belgian-malinois-club-health-statement",
          role: "verified",
          locator: "Required evaluations and additional health-history topics",
        },
        {
          id: "american-kennel-club-belgian-malinois",
          role: "verified",
          locator: "Health and recommended health tests",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Screening recommendations are distinguished from conditions that an individual dog is certain to develop.",
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-belgian-malinois-club-health-statement",
          role: "verified",
          locator: "Health statement: hip, elbow, and ocular health concerns",
        },
        {
          id: "american-kennel-club-belgian-malinois",
          role: "verified",
          locator: "Health section: hip, elbow, and eye evaluations",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Recognised health screening concerns documented by national breed organisations.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-belgian-malinois-club-health-statement",
          role: "verified",
          locator: "Required health evaluations: hip, elbow, eye, and family history",
        },
        {
          id: "american-kennel-club-belgian-malinois",
          role: "verified",
          locator: "Health testing recommendations",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Parent club screening criteria for breeding dogs and clinical monitoring.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-belgian-malinois",
          role: "cited",
          locator: "Health, grooming, and nutrition",
        },
      ],
      verifiedOn: null,
      note: "Routine preventive-care advice; individual care should be set with a veterinarian.",
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
      note: "General canine dental-care guidance.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-belgian-malinois",
          role: "cited",
          locator: "Routine ear checks",
        },
      ],
      verifiedOn: null,
      note: "General canine ear-care guidance.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-belgian-malinois",
          role: "cited",
          locator: "Coat and grooming guidance",
        },
      ],
      verifiedOn: null,
      note: "General skin and coat care guidance.",
    },
    suitability: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-malinois-right-for-you",
          role: "verified",
          locator: "Experience, activity, children, socialisation, and time-alone guidance",
        },
        {
          id: "american-kennel-club-belgian-malinois",
          role: "verified",
          locator: "Exercise, training, and breed traits",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Suitability guidance is conditional; individual temperament, household experience, and management matter.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable blanket suitability verdict for senior owners was established.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable blanket yes/no rating was established; suitability depends on the dog, children's ages, supervision, and household management.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable blanket apartment-living verdict was established.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-nomenclature",
          role: "verified",
          locator: "Recognised varieties",
        },
        {
          id: "american-kennel-club-belgian-malinois",
          role: "verified",
          locator: "History and origin of the Malinois name",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Facts are rewritten in original wording.",
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Utilisation, size, coat, temperament, and history",
        },
        {
          id: "fci-belgian-shepherd-dog-nomenclature",
          role: "verified",
          locator: "Official variety list and classification",
        },
        {
          id: "american-kennel-club-belgian-malinois",
          role: "verified",
          locator: "Life expectancy, care, exercise, training, and health",
        },
        {
          id: "american-belgian-malinois-club-health-statement",
          role: "verified",
          locator: "Health screening recommendations",
        },
      ],
      verifiedOn: "2026-11-11",
      note: "Answers use the referenced breed standards and care guidance without copying source prose.",
    },
  },
  updatedOn: "2026-11-11",
};
