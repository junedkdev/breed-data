import type { Breed } from "../schema/breed.types";

export const welsh_terrier: Breed = {
  slug: "welsh-terrier",
  name: "Welsh Terrier",
  scientificName: null,
  alternateNames: [
    "Old English Terrier",
    "Welsh Black and Tan Rough-Coated Terrier",
  ],
  group: "Terriers; Large and Medium-Sized Terriers",

  origin: {
    country: "Great Britain",
    region: "Wales",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Welsh_Terrier.JPG",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Welsh_Terrier.JPG",
      title: "Welsh Terrier.JPG",
      description: "An alert adult Welsh Terrier standing on grass.",
      creator: "Shleiderbmx",
      uploader: "Shleiderbmx",
      capturedOn: "2009-05-24",
      uploadedOn: "2009-06-17",
      width: 4752,
      height: 3168,
      licenseId: "cc-by-3.0",
      attribution:
        "Photo by Shleiderbmx, via Wikimedia Commons, CC BY 3.0 (https://creativecommons.org/licenses/by/3.0/). Indicate changes, if any; attribution does not imply endorsement.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Welshterrier.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Welshterrier.jpg",
      title: "Welshterrier.jpg",
      description: "A Welsh Terrier named Fracas Madame Butterfly.",
      creator: "Ebba Persson",
      uploader: "Ebbsson (original Swedish Wikipedia uploader); later transferred to Wikimedia Commons",
      capturedOn: "2004-09-20",
      uploadedOn: "2006-12-10",
      width: 398,
      height: 320,
      licenseId: "cc-by-sa-2.5",
      attribution:
        "Photo by Ebba Persson, via Wikimedia Commons, CC BY-SA 2.5 (https://creativecommons.org/licenses/by-sa/2.5/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Welsh_Terrier_Image.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Welsh_Terrier_Image.jpg",
      title: "Welsh Terrier Image.jpg",
      description: "A Welsh Terrier photographed outdoors.",
      creator: "cameille",
      uploader: "Ltshears (Flickr upload bot)",
      capturedOn: "2008-01-10",
      uploadedOn: "2008-10-05",
      width: 1024,
      height: 768,
      licenseId: "cc-by-sa-2.0",
      attribution:
        "Photo by cameille, via Wikimedia Commons, CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08",
    },
  ],

  overview: {
    summary:
      "A sturdy, medium-sized earthdog from Wales, the Welsh Terrier is admired for its dense wiry black-and-tan jacket, squared-off muzzle, and spirited expression. It combines a bold hunting heritage with a friendly, self-controlled demeanor that makes it an engaging companion for active households.",

    description:
      "Built with compact substance and a level topline, the Welsh Terrier presents a balanced, rugged profile. Its weatherproof double coat features a hard, wiry outer jacket and a soft undercoat, displaying a rich tan head, legs, and underbody framed by a crisp black or grizzle saddle. Historically developed to bolt badgers, otters, and foxes from subterranean dens, this hardy breed retains keen curiosity, high prey drive, and tireless stamina. While somewhat calmer and less quarrelsome than certain other terriers, it is nonetheless full of playful spirit and thrives when provided with daily physical exercise, scent puzzles, and consistent reward-based training. Routine brushing and periodic hand-stripping or pet clipping keep its dense coat healthy and free of mats.",

    history:
      "Rooted in Wales as one of the oldest sporting earthdogs, the breed was bred by farmers and sportsmen to pursue foxes, badgers, and otters across rugged hills and riverbanks, frequently working alongside otterhound packs. Originally known as the Old English Terrier or the Welsh Black and Tan Rough-Coated Terrier, the breed was systematically refined during the late nineteenth century and achieved formal kennel recognition in Great Britain and North America by the late 1880s. Today it maintains its traditional working tenacity while serving predominantly as an affectionate household pet, dog sport participant, and conformation show competitor.",

    originalPurpose:
      "Working subterranean quarry—including badgers, foxes, and otters—and controlling rural vermin across Welsh hills and waterways.",

    currentRoles: [
      "Loyal family companion",
      "Earthdog, scent-work, and barn hunt competitor",
      "Agility, rally, and trick dog athlete",
      "Conformation show competitor",
      "Active outdoor hiking partner",
    ],
  },

  physical: {
    sizeCategory: "Medium-small, compact and squarely proportioned terrier",

    height: {
      unit: "cm",
      male: { min: 38, max: 39 },
      female: { min: 35, max: 39 },
    },

    weight: {
      unit: "kg",
      male: { min: 9, max: 9.5 },
      female: { min: 9, max: 9.5 },
    },

    lifespanYears: {
      min: 12,
      max: 15,
    },

    coatType:
      "Hard, dense, and wiry outer coat forming a close-fitting thick jacket, paired with a short, soft insulating undercoat, and neat wiry furnishings on the muzzle, legs, and quarters.",

    coatLength: "Medium-short, dense and harsh over the body, with protective facial whiskers and leg furnishings",

    coatColors: [
      "Black and Tan",
      "Grizzle and Tan",
    ],

    sheddingLevel:
      "Low visible hair fallout; wiry outer coat and soft undercoat remain caught in the jacket until removed through routine brushing, rolling, or hand-stripping.",

    droolingLevel: "Low",

    distinctiveFeatures: [
      "Compact, squarely built body with strong bone and deep brisket",
      "Flat skull with a strong, squared-off muzzle forming a balanced rectangular head",
      "Small, dark, deep-set eyes conveying a keen and spirited terrier expression",
      "Small, V-shaped ears folded neatly forward and carried close to the cheeks",
      "Harsh wiry black or grizzle jacket paired with rich tan on the head, legs, and underbody",
      "Upright tail set high on a level back and carried gaily",
    ],
  },

  temperament: {
    traits: [
      "Alert",
      "Spirited",
      "Playful",
      "Intelligent",
      "Friendly",
      "Courageous",
      "Self-controlled",
      "Persistent",
      "Naturally curious",
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 4,
      protectiveness: 3,
      independence: 4,
      trainability: 3,
      barking: 4,
      energy: 4,
    },
  },

  care: {
    exercise: {
      level: "High",

      minutesPerDay: {
        min: 45,
        max: 75,
      },

      activities: [
        "Daily brisk leash walks with ample time for investigative sniffing",
        "Interactive fetch and tug sessions in securely fenced areas",
        "Scent-tracking trails, search games, and barn hunt practice",
        "Agility, rally obedience, and lure coursing",
        "Food puzzle toys and interactive mental problem-solving indoors",
      ],
    },

    grooming: {
      level: "High",

      brushing:
        "Brush and comb the wiry jacket two to three times weekly using a pin brush and metal greyhound comb to eliminate debris, prevent mats in the beard and leg furnishings, and remove dead undercoat.",

      bathing:
        "Bathe every 6 to 8 weeks or as needed using a texturizing canine shampoo, ensuring thorough rinsing and drying to preserve skin health.",

      notes: [
        "Comb the beard and muzzle furnishings after wet or messy meals to prevent food staining and skin irritation.",
        "Maintain the traditional harsh texture through periodic hand-stripping every 8 to 12 weeks, or opt for neat clipping for companion upkeep.",
        "Check folded ears weekly for moisture, wax accumulation, or debris, cleaning gently with veterinarian-approved cleansers.",
        "Keep nails trimmed short to support upright pasterns and healthy foot structure.",
      ],
    },

    training: {
      difficulty:
        "Moderate; quick to grasp new concepts and eager for fun, but possesses typical terrier persistence, independent initiative, and strong prey drive toward small critters.",

      tips: [
        "Employ positive, reward-based training with treats, toys, and praise; avoid repetitive drills that prompt disinterest.",
        "Teach reliable recall inside secure enclosures early, but keep the dog leashed in open areas where darting squirrels or cats could trigger a chase.",
        "Incorporate impulse-control exercises like settle cues and calm doorway waits from puppyhood.",
        "Socialize to handling and grooming tools early to make clipping, stripping, and nail trimming cooperative and stress-free.",
      ],

      socialization:
        "Expose puppies gradually and positively to diverse environments, polite dogs, different people, and household noises to build an outgoing, confident, and steady adult demeanor.",
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate and cool climates",
        "Warm climates with air conditioning, shaded areas, and exercise scheduled during cooler morning or evening hours",
      ],

      aloneTimeTolerance:
        "Moderate when adequate physical activity and interactive toys are provided, though extended isolation can lead to nuisance barking or digging.",
    },
  },

  nutrition: {
    dietType:
      "Complete and balanced commercial dry kibble, wet ration, or veterinary-formulated diet suited to active medium-small terriers.",

    feedingFrequency: {
      puppy: "3 to 4 measured meals daily during growth, transitioning to 2 meals daily around six months of age",
      adult: "2 measured meals per day to maintain stable energy and prevent excess weight",
      senior: null,
    },

    guidelines:
      "Weigh food portions accurately according to the dog's activity level and body condition score, regularly feeling for the ribs and waist beneath the dense wiry coat.",

    considerations: [
      "Avoid overfeeding, as extra body weight puts unnecessary stress on joints and diminishes agile working mobility.",
      "Count all training treats within the total daily caloric allotment.",
      "Ensure cool, fresh water is available at all times, checking that beard furnishings do not foul the dish.",
      "Consult a veterinarian if unexplained weight shifts or digestive sensitivities develop.",
    ],

    note: "Caloric requirements vary based on age, metabolism, and activity; consult a veterinarian for individualized feeding amounts.",
  },

  health: {
    overview:
      "The Welsh Terrier is generally a hardy, long-lived breed with a typical lifespan of 12 to 15 years. The parent club emphasizes DNA testing for Primary Lens Luxation (PLL), an inherited eye condition, while monitoring for glaucoma, allergies, hypothyroidism, and occasional orthopedic concerns.",

    commonConditions: [
      "Primary Lens Luxation (PLL): an inherited ocular condition causing displacement of the lens; detectable via a reliable DNA test.",
      "Secondary glaucoma and cataracts: ocular complications that can develop following lens instability.",
      "Allergies and atopic dermatitis: allergic sensitivities that can lead to itching, hot spots, or recurring ear irritation.",
      "Hypothyroidism: reduced thyroid hormone production affecting coat health, energy, and weight.",
      "Epilepsy: recurring idiopathic seizures requiring veterinary diagnosis and medical management.",
      "Hip dysplasia and Legg-Calve-Perthes disease: orthopedic conditions occasionally documented in small-to-medium terriers.",
    ],

    preventiveCare: [
      "Confirm that prospective puppy parents have documented PLL DNA testing.",
      "Schedule yearly veterinary health exams, core vaccinations, and routine parasite control.",
      "Seek prompt veterinary care for any signs of eye squinting, cloudiness, tearing, or sudden redness.",
      "Maintain a lean, muscular body condition through portion control and structured exercise.",
      "Inspect folded ears weekly for redness, odor, or wax buildup.",
    ],

    recommendedScreenings: [
      "Primary Lens Luxation (PLL) DNA test — recommended by the national parent breed club",
      "Veterinary ophthalmologist examination when clinically indicated or advised by family history",
      "Thyroid evaluation if symptoms or clinical findings warrant investigation",
      "Orthopedic evaluation if gait irregularities or mobility concerns arise",
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic paste and arrange veterinary dental checks to preserve healthy gums.",

    earCare:
      "Check folded ears weekly for dirt, discharge, or signs of inflammation, wiping gently with veterinarian-approved cleansers.",

    skinCare:
      "Part the dense wiry coat during brushing to inspect for dryness, parasites, or hot spots; keep the beard clean and dry after meals.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Active individuals and families who enjoy daily outdoor walks, hikes, and interactive games",
      "Households committed to regular coat brushing and periodic hand-stripping or clipping",
      "Homes with a securely fenced yard to safely contain natural digging and chasing instincts",
      "Owners who appreciate spirited, bold, and intelligent terrier personality",
      "Handlers willing to provide consistent, positive training and mental enrichment",
    ],

    notIdealFor: [
      "Sedentary households looking for a quiet, low-energy lap dog",
      "Owners unwilling to dedicate time or resources to routine coat care",
      "Unfenced yards where strong prey drive could lead to chasing neighborhood wildlife or cats",
      "Homes expecting complete off-leash reliability without dedicated recall training",
    ],
  },

  funFacts: [
    "Originally bred in Wales to hunt badger, fox, and otter in rugged underground dens, the Welsh Terrier is among the oldest native sporting terriers of the British Isles.",
    "Though sharing the classic black-and-tan wiry jacket of the Airedale Terrier, the Welsh Terrier is a distinctly smaller, ancient breed rather than a miniaturized version.",
    "Known for being somewhat calmer and more level-headed around other dogs than many traditional working terriers, it exhibits remarkable self-control.",
    "A famous Welsh Terrier named Charlie lived in the White House during President John F. Kennedy's administration, often swimming and jogging alongside the family.",
    "The harsh wiry double coat was bred to resist thorny Welsh riverbanks and shed water, keeping the dog warm and dry in wet weather.",
  ],

  faq: [
    {
      question: "How big do Welsh Terriers get?",
      answer:
        "Official measurements describe males standing approximately 38 to 39 cm at the withers and females measuring 35 to 39 cm, with typical weights of 9 to 9.5 kg (or about 20 pounds).",
    },
    {
      question: "Do Welsh Terriers shed a lot?",
      answer:
        "They are considered low shedders. Their dense wiry coat holds loose hairs rather than dropping them, requiring regular brushing and periodic hand-stripping or clipping to remove dead undercoat.",
    },
    {
      question: "Are Welsh Terriers good family dogs?",
      answer:
        "Yes, they are affectionate, spirited, and playful companions that generally get along well with children when raised with proper socialisation and respectful boundaries.",
    },
    {
      question: "How much exercise does a Welsh Terrier need daily?",
      answer:
        "A healthy adult needs roughly 45 to 75 minutes of daily physical exercise and mental stimulation. Combining brisk walks with fetch, scent-tracking games, and obedience keeps them happy and balanced.",
    },
    {
      question: "Are Welsh Terriers easy to train?",
      answer:
        "They are intelligent and learn quickly, but they possess an independent, persistent terrier streak. Varied, reward-based sessions with positive reinforcement work much better than repetitive drills.",
    },
    {
      question: "What health test is most important for Welsh Terriers?",
      answer:
        "Primary Lens Luxation (PLL) DNA testing is the primary screening recommended by the breed club to prevent inherited dislocation of the eye lens.",
    },
    {
      question: "What colors do Welsh Terriers come in?",
      answer:
        "The classic colors are black and tan or black grizzle and tan, featuring a dark jacket over the back and neck with deep reddish-tan markings on the head, legs, and underbody.",
    },
    {
      question: "How long do Welsh Terriers typically live?",
      answer:
        "The breed is robust and long-lived, with an average life expectancy of 12 to 15 years under quality veterinary care and proper nutrition.",
    },
    {
      question: "Can a Welsh Terrier live in an apartment?",
      answer:
        "While adaptable, their energetic nature, prey drive, and alert barking tendency make them best suited to homes with secure yards unless owners can commit to extensive daily outdoor exercise.",
    },
  ],

  references: [
    "fci-welsh-terrier-nomenclature",
    "royal-kennel-club-welsh-terrier-standard",
    "american-kennel-club-welsh-terrier",
    "american-kennel-club-terrier-group-health-testing-requirements",
    "welsh-terrier-club-america-health-statement",
    "vcahospitals-welsh-terrier",
    "wikimedia-welsh-terrier-shleiderbmx",
    "wikimedia-welshterrier-ebba-persson",
    "wikimedia-welsh-terrier-image-cameille",
    "the-dog-api",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Left null in accordance with repository schema conventions when no formal taxonomy name is assigned.",
    },

    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names",
        },
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "Breed history: former names (Old English Terrier, Welsh Black and Tan Rough-Coated Terrier)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Historical names verified from breed-history and reference records.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-welsh-terrier-nomenclature",
          role: "verified",
          locator: "FCI nomenclature: Group 3 Terriers, Section 1 Large and medium-sized Terriers",
        },
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "Breed profile: Terrier Group",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.breed_group",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Combines official Terrier Group and Large/Medium Terrier classifications without naming registry acronyms in user-facing text.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-welsh-terrier-nomenclature",
          role: "verified",
          locator: "FCI nomenclature: country of origin Great Britain",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin (Wales)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "origin.region": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "verified",
          locator: "Standard history: developed in Wales",
        },
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "Breed history: Welsh origins",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Wales is the documented historical region of origin within Great Britain.",
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-welsh-terrier-nomenclature",
          role: "verified",
          locator: "FCI breed classification and nomenclature",
        },
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "verified",
          locator: "Standard: general appearance, characteristics, coat, and movement",
        },
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "About the Breed, History, and Traits sections",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "All overview text is synthesized in original phrasing from standard and kennel-club references.",
    },

    "physical.sizeCategory": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "verified",
          locator: "Standard: size and weight",
        },
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "About the Breed: compact, medium-small terrier",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "verified",
          locator: "Standard: Height at shoulder not exceeding 39 cm (15 1/2 ins)",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.height.metric (38-39 cm for both sexes)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Stored in exact published metric centimetres (males 38-39 cm, females 35-39 cm) reflecting the 39 cm standard ceiling and proportionately smaller females.",
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "verified",
          locator: "Standard: Weight 9-9.5 kg (20-21 lbs)",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight.metric (9-10 kg)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Stored in exact published metric kilograms (9-9.5 kg) from the official breed standard. Repeated in both sex slots because the standard specifies a breed weight range.",
    },

    "physical.weight.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "verified",
          locator: "Standard: Weight 9-9.5 kg",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight.metric (10 kg)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Retains the official standard maximum of 9.5 kg; The Dog API reports 10 kg.",
    },

    "physical.weight.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "verified",
          locator: "Standard: Weight 9-9.5 kg",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight.metric (10 kg)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Retains the official standard maximum of 9.5 kg; The Dog API reports 10 kg.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "Breed profile — Life Expectancy: 12-15 years",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span (12-15 years)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "verified",
          locator: "Standard — Coat: Wiry, hard, very close and abundant; single coat objectionable",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "verified",
          locator: "Standard — Coat section",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "verified",
          locator: "Standard — Colour: Black and tan for preference, or black grizzle and tan, free from black speckling on toes",
        },
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "Colors & Markings: Black and Tan, Grizzle and Tan",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "GET /breeds/{id}/colours",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Restricted to the two standard colour combinations (Black and Tan, Grizzle and Tan); non-standard endpoint options are excluded.",
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vcahospitals-welsh-terrier",
          role: "verified",
          locator: "Coat care and shedding profile",
        },
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile: shedding level",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "Breed profile — Drooling Level",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "verified",
          locator: "Standard: head, eyes, ears, body, tail, and coat sections",
        },
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "About the Breed: physical characteristics",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "verified",
          locator: "Standard: Characteristics and Temperament: Affectionate, obedient and easily controlled; happy and volatile, rarely of shy nature; game and fearless but definitely not aggressive although at all times able to hold his own when necessary",
        },
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "Breed profile — Personality & Temperament",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile — Trait ratings and temperament descriptions",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1-5 ratings based on documented breed characteristics.",
    },

    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "Breed profile — Exercise section",
        },
        {
          id: "vcahospitals-welsh-terrier",
          role: "cited",
          locator: "Exercise and activity guidelines",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Daily exercise requirements (45-75 minutes) reflecting an active sporting terrier.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "Breed profile — Grooming section",
        },
        {
          id: "vcahospitals-welsh-terrier",
          role: "cited",
          locator: "Grooming and maintenance overview",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Routine brushing, hand-stripping, and clipping guidance for a wiry double coat.",
    },

    "care.training": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile — Training and socialization guidance",
        },
      ],
      verifiedOn: null,
      note: "Positive, reward-based training guidance adapted to an intelligent terrier with high prey drive.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile — Exercise and activity requirements",
        },
      ],
      verifiedOn: null,
      note: "Boolean assessment; high energy, alert vocalising, and exercise needs make standard apartments less suitable than houses with secure yards.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile — Exercise and activity requirements",
        },
      ],
      verifiedOn: null,
      note: "A securely fenced yard facilitates necessary daily exercise and off-leash play.",
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "cited",
          locator: "Standard — Coat: weather-resistant wiry double jacket",
        },
      ],
      verifiedOn: null,
      note: "General climate guidance adapted to a weather-resistant wiry double-coated breed.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile — Temperament: active, people-oriented",
        },
      ],
      verifiedOn: null,
      note: "Guidance on managing alone time for an active working terrier.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile — Nutrition section",
        },
      ],
      verifiedOn: null,
      note: "General canine nutritional recommendations suited to an active, medium-small terrier.",
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific senior feeding frequency was established.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "welsh-terrier-club-america-health-statement",
          role: "verified",
          locator: "Health statement: Primary Lens Luxation (PLL) testing",
        },
        {
          id: "american-kennel-club-terrier-group-health-testing-requirements",
          role: "verified",
          locator: "Welsh Terrier: PLL DNA test",
        },
        {
          id: "vcahospitals-welsh-terrier",
          role: "verified",
          locator: "Health considerations: glaucoma, allergies, thyroid, and orthopedic conditions",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Synthesises parent-club health testing recommendations and veterinary clinical documentation.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "welsh-terrier-club-america-health-statement",
          role: "cited",
          locator: "Health screening recommendations",
        },
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile — Health and preventive care",
        },
      ],
      verifiedOn: null,
      note: "General veterinary preventive care, PLL screening, and ocular monitoring guidance.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "welsh-terrier-club-america-health-statement",
          role: "verified",
          locator: "Primary Lens Luxation (PLL) DNA test recommendation",
        },
        {
          id: "american-kennel-club-terrier-group-health-testing-requirements",
          role: "verified",
          locator: "Welsh Terrier: PLL DNA test",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine canine dental hygiene advice.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine ear hygiene for folded terrier ears.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Skin inspection and beard hygiene advice for a wiry double coat.",
    },

    "suitability.firstTimeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile — Temperament, training, and exercise needs",
        },
      ],
      verifiedOn: null,
      note: "Editorial assessment; energetic drive, prey drive, and coat maintenance make the breed better suited to experienced terrier owners.",
    },

    "suitability.familiesWithChildren": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile — Traits: Good with Young Children",
        },
      ],
      verifiedOn: null,
      note: "Boolean assessment; playful and affectionate with children under responsible adult supervision.",
    },

    "suitability.seniorOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile — Energy level and exercise needs",
        },
      ],
      verifiedOn: null,
      note: "Editorial assessment; high energy, fast movement, and persistent prey drive can be demanding for seniors without active support.",
    },

    "suitability.activeOwners": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "Breed profile — Exercise section",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "suitability.apartmentLiving": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile — Exercise and living needs",
        },
      ],
      verifiedOn: null,
      note: "Aligned with care.livingEnvironment.apartmentSuitable.",
    },

    "suitability.idealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile — Temperament, exercise, and grooming sections",
        },
      ],
      verifiedOn: null,
      note: "Synthesised owner-matching guidance based on activity level, coat upkeep, and terrier drive.",
    },

    "suitability.notIdealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-welsh-terrier",
          role: "cited",
          locator: "Breed profile — Temperament, exercise, and grooming sections",
        },
      ],
      verifiedOn: null,
      note: "Synthesised owner-matching caveats.",
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "verified",
          locator: "Standard history: working earthdog in Wales, badger and otter hunting",
        },
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "About the Breed (JFK's White House dog Charlie, distinct ancient breed)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-welsh-terrier-standard",
          role: "verified",
          locator: "Size, Weight, Coat, Colour, and Temperament sections",
        },
        {
          id: "american-kennel-club-welsh-terrier",
          role: "verified",
          locator: "Breed profile — Weight, Lifespan, Exercise, Grooming, Training, and Health",
        },
        {
          id: "welsh-terrier-club-america-health-statement",
          role: "verified",
          locator: "Primary Lens Luxation (PLL) screening recommendation",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },
  },

  updatedOn: "2026-11-08",
};
