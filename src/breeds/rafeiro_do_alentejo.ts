import type { Breed } from "../schema/breed.types";

export const rafeiro_do_alentejo: Breed = {
  slug: "rafeiro-do-alentejo",
  name: "Rafeiro do Alentejo",
  scientificName: null,
  alternateNames: [
    "Alentejo Mastiff",
    "Portuguese Mastiff",
    "Rafeiro of Alentejo",
    "Rafeiro Alentejano",
    "Alentejo Watchdog",
  ],

  group: "Pinscher and Schnauzer, Molossoid and Swiss Mountain and Cattle Dogs; Mountain type Molossoids",

  origin: {
    country: "Portugal",
    region: "Alentejo",
  },

  images: [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/4/42/Alentejonk3.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Alentejonk3.jpg",
      title: "Alentejonk3.jpg",
      description:
        "Female Rafeiro do Alentejo demonstrating powerful bone structure and calm presence.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2021-12-18",
      uploadedOn: "2021-12-22",
      width: 1744,
      height: 1806,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, CC BY-SA 4.0. Changes, if any, must be indicated. Adapted versions must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/7/75/RafeiroAlentejo-whitegrey1.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:RafeiroAlentejo-whitegrey1.jpg",
      title: "RafeiroAlentejo-whitegrey1.jpg",
      description:
        "Light-coated female Rafeiro do Alentejo resting outdoors.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2021-08-01",
      uploadedOn: null,
      width: 3565,
      height: 2598,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, CC BY-SA 4.0. Changes, if any, must be indicated. Adapted versions must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/RafeiroAlentejo-whitegrey2.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:RafeiroAlentejo-whitegrey2.jpg",
      title: "RafeiroAlentejo-whitegrey2.jpg",
      description:
        "Adult female Rafeiro do Alentejo photographed in a standing profile.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2021-08-01",
      uploadedOn: null,
      width: 3617,
      height: 2545,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, CC BY-SA 4.0. Changes, if any, must be indicated. Adapted versions must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10",
    },
  ],

  overview: {
    summary:
      "The Rafeiro do Alentejo is a massive, self-assured Portuguese livestock guardian native to the sun-drenched plains of the Alentejo. Revered for its imposing bone, deliberate demeanor, and innate defensive vigilance, this ancient guardian combines quiet domestic tranquility with unyielding territorial dedication.",

    description:
      "Substantial, rustic, and powerfully proportioned, the Rafeiro do Alentejo carries a broad head with a gentle convex profile, small folded ears, and a dense, straight protective coat. Its rectangular frame, deep chest, and low-set tail convey formidable strength. Despite its imposing physical stature, it projects a self-assured, tranquil demeanor rather than nervous aggression or timidity. While peaceful and tolerant around familiar charges, its profound territorial awareness prompts immediate vigilance when strange animals or unfamiliar visitors approach. The breed possesses an independent intellect shaped by centuries of autonomous decision-making in the field. Consequently, successful stewardship demands extensive secure fencing, early desensitization, and patient, positive handling by experienced guardian-breed caretakers.",

    history:
      "Rooted in the agricultural heritage of southern Portugal, the Rafeiro do Alentejo descended from ancient Iberian pastoral molossers that accompanied nomadic herds along transhumance trails. Flocks shifted seasonally between highland summer pastures in central Portugal and winter plains in the Alentejo, exposing traveling livestock to wolves and large predators. Large guardian dogs guarded these trekking herds, establishing a unified rustic type along regional migration routes. By the late nineteenth century, rural estate owners formalized the regional name, valuing the dogs as night sentinels and flock protectors. Formal breed documentation confirms Portugal as its country of origin and celebrates its enduring role as a steadfast protector of livestock and rural estates.",

    originalPurpose:
      "Protecting traveling sheep and cattle herds along transhumance trails, defending agricultural estates, and serving as nocturnal farm guardians.",

    currentRoles: [
      "Livestock and flock guardian",
      "Rural estate and property watch sentinel",
      "Companion for experienced rural households",
    ],
  },

  physical: {
    sizeCategory: "Giant",

    height: {
      unit: "cm",
      male: {
        min: 66,
        max: 74,
      },
      female: {
        min: 64,
        max: 70,
      },
    },

    weight: {
      unit: "kg",
      male: {
        min: 45,
        max: 60,
      },
      female: {
        min: 35,
        max: 50,
      },
    },

    lifespanYears: {
      min: 12,
      max: 14,
    },

    coatType: "Short or medium-length, straight, thick, dense coat.",
    coatLength: "Short to medium length, with medium length preferred.",

    coatColors: [
      "Black with white markings",
      "Wolf grey with white markings",
      "Fawn with white markings",
      "Yellow with white markings",
      "Brindled black, wolf grey, fawn, or yellow with white markings",
      "White with patches of black, wolf grey, fawn, or yellow",
    ],

    sheddingLevel: "Moderate",
    droolingLevel: "Moderate",

    distinctiveFeatures: [
      "Powerful, rustic, and slightly rectangular skeletal frame",
      "Substantial bear-like head with a slightly arched skull and discreet stop",
      "Small, dark, oval-shaped eyes with calm and thoughtful gaze",
      "Small, triangular, folding pendant ears set at medium height",
      "Strong, thick neck featuring a single longitudinal dewlap",
      "Broad, deep chest reaching down to the elbow level",
      "Long, heavily coated tail carried low with a gentle curve at rest",
      "Dense, weather-resistant straight double coat covering the skin down between the toes",
      "Deliberate, heavy gait characterized by an effortless rolling rhythm",
    ],
  },

  temperament: {
    traits: [
      "Calm",
      "Confident",
      "Independent",
      "Protective",
      "Vigilant",
      "Loyal",
      "Alert",
      "Sober",
      "Territorial",
      "Reserved with strangers",
    ],

    scores: {
      affection: 3,
      withChildren: null,
      withDogs: null,
      withStrangers: 2,
      protectiveness: 5,
      independence: 5,
      trainability: 3,
      barking: null,
      energy: 3,
    },
  },

  care: {
    exercise: {
      level: "Moderate",
      minutesPerDay: {
        min: 45,
        max: 60,
      },
      activities: [
        "Leashed neighborhood strolls on level, shock-absorbing ground",
        "Self-paced exploration and patrolling within securely fenced perimeter acreage",
        "Calm scent tracking and puzzle enrichment",
        "Gentle, reward-oriented obedience drills in distraction-free settings",
      ],
    },

    grooming: {
      level: "Low to moderate",
      brushing:
        "Brush thoroughly once or twice weekly using a slicker brush and undercoat rake to clear shed undercoat and external debris. Increase combing frequency during seasonal shedding surges.",
      bathing:
        "Bathe infrequently—typically once every two to three months or when visibly soiled—using a gentle, lipid-sparing dog shampoo to safeguard natural weather-resistant skin oils.",
      notes: [
        "Routinely inspect the thick coat, paw webbing, and dewlap for burs, seeds, and ticks following pasture roaming.",
        "Check hanging ear flaps weekly for moisture, wax accumulation, or odor, wiping clean with veterinary solution.",
        "Trim thick claws regularly to maintain upright digit posture and prevent tendon strain.",
        "Maintain frequent toothbrushing with dog-safe enzymatic paste to limit plaque mineralization.",
      ],
    },

    training: {
      difficulty: "Experienced",
      tips: [
        "Initiate structured, positive reinforcement training during early puppyhood before rapid physical growth creates management challenges.",
        "Focus on impeccable loose-leash walking, reliable emergency recalls, and calm stationary manners.",
        "Acknowledge the dog's autonomous decision-making heritage rather than expecting instantaneous, repetitive trick performance.",
        "Avoid harsh corrections or intimidation, which induce stubborn defensiveness and erode trust.",
        "Introduce household guests under controlled, calm protocols without allowing unmonitored territorial entry.",
      ],
      socialization:
        "Implement comprehensive, gentle socialization across early development, acquainting the pup with diverse sounds, footing surfaces, livestock, vehicles, and peaceful neutral strangers to nurture stable confidence without degrading legitimate guardian discernment.",
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,
      climates: [
        "Temperate climates",
        "Cool climates",
        "Warm Mediterranean climates with adequate shaded resting sanctuaries and unrestricted fresh drinking water",
      ],
      aloneTimeTolerance:
        "Moderate; functions well when provided with ample space and purposeful farm watch tasks, but unmanaged confinement without mental purpose may provoke perimeter digging or alarm barking.",
    },
  },

  nutrition: {
    dietType:
      "Complete and balanced large-breed commercial diet or professionally balanced ration tailored to body mass, age, and individual activity.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Divide the daily caloric ration into two measured meals for adults to reduce gastric expansion risks. Provide fresh, clean drinking water at all times. Regulate portions according to body condition scoring rather than arbitrary package charts to avoid excess joint strain, adjusting intake under veterinary guidance.",

    considerations: [
      "Feed growing puppies diets formulated specifically for giant breeds to moderate growth velocity and support healthy skeletal mineralization.",
      "Avoid feeding immediately before or after heavy physical activity to mitigate gastric dilatation-volvulus hazards.",
      "Refrain from unprescribed calcium or mineral supplementation when feeding complete commercial rations.",
      "Monitor adult weight vigilantly to preserve lean body condition and protect hip and elbow joints.",
    ],

    note:
      "Nutritional recommendations represent general canine wellness principles rather than a rigid prescription; individual requirements depend on metabolism, health, and workload.",
  },

  health: {
    overview:
      "The Rafeiro do Alentejo is an unexaggerated, robust working breed with an average lifespan of 12 to 14 years. As with other giant, deep-chested pastoral breeds, developmental joint conditions such as hip and elbow dysplasia, as well as acute gastric dilatation-volvulus (bloat), represent primary clinical considerations. Dedicated screening of breeding stock promotes long-term orthopedic soundness.",

    commonConditions: [
      "Hip dysplasia",
      "Elbow dysplasia",
      "Gastric dilatation-volvulus (bloat)",
    ],

    preventiveCare: [
      "Schedule yearly wellness checkups, advancing to semiannual veterinary exams during senior years.",
      "Ensure puppies maintain slow, steady growth on controlled-energy diets to safeguard developing joints.",
      "Discuss preventative gastropexy surgery with a veterinarian to protect against fatal gastric volvulus.",
      "Seek emergency veterinary attention immediately if non-productive retching, abdominal distension, restlessness, or sudden collapse appears.",
      "Maintain active parasite control, routine core immunizations, and oral dental prophylaxis.",
    ],

    recommendedScreenings: [
      "Hip radiographic evaluation",
      "Elbow radiographic evaluation",
      "Cardiovascular examination",
      "Comprehensive ophthalmologist evaluation",
    ],

    dentalCare:
      "Brush teeth several times weekly using pet-safe enzymatic toothpaste, scheduling periodic professional ultrasonic scaling during routine physical exams.",

    earCare:
      "Examine folded ear canals weekly for redness, trapped plant matter, or yeasty odors, cleansing with an approved canine drying rinse as necessary.",

    skinCare:
      "Part the dense coat regularly during grooming to check skin condition, inspecting for hot spots, ticks, or irritation after time in high pasture grass.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: null,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Experienced handlers well-versed in livestock guardian instincts and large-dog dynamics",
      "Sprawling rural properties, farms, and acreage with sturdy perimeter fencing",
      "Households seeking an authentic, autonomous estate or flock guardian",
      "Families capable of providing ongoing socialization and patient guidance",
    ],

    notIdealFor: [
      "Urban apartments or compact suburban residences lacking dedicated land",
      "Novice dog owners unprepared for substantial physical strength and independent judgment",
      "Dwellings without robust, secure perimeter containment",
      "Households desiring an effusive, universally outgoing social companion",
    ],
  },

  funFacts: [
    "The breed derives its name from the Alentejo province, a sweeping agricultural region occupying south-central Portugal.",
    "Historically, these dogs accompanied livestock along seasonal migration routes called transhumance trails, defending flocks from wolves and bandits.",
    "Unlike many herd-driving dogs that run constantly, this guardian conserves energy by resting quietly during daylight and assuming heightened alert vigilance after sunset.",
    "Its characteristic gait is heavy and measured, displaying a distinctive rolling motion without exaggerated looseness.",
    "The head possesses a distinctly convex profile and small folded ears, leading local shepherds to affectionately compare its profile to that of a bear.",
  ],

  faq: [
    {
      question: "Where did the Rafeiro do Alentejo originate?",
      answer:
        "The breed originated in Portugal, particularly across the southern Alentejo plains, where it guarded moving flocks along historical transhumance routes between mountains and lowlands.",
    },
    {
      question: "How large does a Rafeiro do Alentejo get?",
      answer:
        "Adult males stand 66–74 cm at the withers and weigh 45–60 kg, while adult females measure 64–70 cm and weigh 35–50 kg.",
    },
    {
      question: "What was the breed's traditional working role?",
      answer:
        "It was bred as a steadfast livestock and property guardian, defending herds against apex predators such as wolves and guarding rural estates against nocturnal intruders.",
    },
    {
      question: "Can a Rafeiro do Alentejo thrive in an apartment?",
      answer:
        "No, this giant guardian is unsuited to apartment life; it requires substantial outdoor space, secure fencing, and a tranquil environment appropriate for its protective instincts.",
    },
    {
      question: "How does the breed react to strangers?",
      answer:
        "Naturally sober, watchful, and reserved, the breed assesses unfamiliar people with detached vigilance; it requires controlled introductions and does not welcome unannounced trespassers into its territory.",
    },
    {
      question: "How much exercise does it require each day?",
      answer:
        "A steady routine of approximately 45 to 60 minutes of low- to moderate-impact daily activity—such as leashed neighborhood walks and perimeter patrols around a securely enclosed acreage—helps maintain joint health and muscle tone without overtaxing heavy bones.",
    },
    {
      question: "What coat colors are typical for this breed?",
      answer:
        "Recognised coat shades include black, wolf grey, fawn, and yellow—either solid or brindled—always complemented by white markings, as well as white coats marked with patches of these colors.",
    },
    {
      question: "What health considerations should owners monitor?",
      answer:
        "Primary health priorities include screening for developmental hip and elbow dysplasia, managing bloat risk through proper feeding routines, and maintaining a lean, healthy adult body weight.",
    },
  ],

  references: [
    "fci-rafeiro-do-alentejo-standard",
    "portuguese-kennel-club-rafeiro-do-alentejo",
    "american-kennel-club-rafeiro-do-alentejo",
    "petmd-rafeiro-do-alentejo",
    "wikimedia-rafeiro-alentejo-female-canarian",
    "wikimedia-rafeiro-alentejo-female-light-canarian",
    "wikimedia-rafeiro-alentejo-female-whitegrey-canarian",
    "the-dog-api",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "verified",
          locator: "Breed heading and official English name",
        },
        {
          id: "portuguese-kennel-club-rafeiro-do-alentejo",
          role: "verified",
          locator: "Breed profile and name variants",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Encompasses official designations and traditional Portuguese and English regional aliases.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Canis lupus familiaris covers all domestic dogs; no breed-specific taxonomic designation applies.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "verified",
          locator: "FCI classification, Group 2, Section 2.2",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.breed_group",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Classified within Molossoid mountain breeds.",
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "verified",
          locator: "Origin: Portugal",
        },
        {
          id: "portuguese-kennel-club-rafeiro-do-alentejo",
          role: "verified",
          locator: "História da raça",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Portugal is the verified country of origin, with roots closely tied to the Alentejo province.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "verified",
          locator: "Origin: Portugal",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Portugal is the verified country of origin.",
    },

    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "portuguese-kennel-club-rafeiro-do-alentejo",
          role: "verified",
          locator: "Historical summary and breed name",
        },
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "verified",
          locator: "Brief historical summary",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "The Alentejo plains represent the established historical region of origin.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "verified",
          locator: "Utilization, history, general appearance, coat, and temperament",
        },
        {
          id: "portuguese-kennel-club-rafeiro-do-alentejo",
          role: "verified",
          locator: "Official breed profile",
        },
        {
          id: "american-kennel-club-rafeiro-do-alentejo",
          role: "cited",
          locator: "About the Breed",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Synthesizes official standard descriptions, regional pastoral history, and estate guardian utility.",
    },

    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "cited",
          locator: "General appearance and height",
        },
        {
          id: "american-kennel-club-rafeiro-do-alentejo",
          role: "cited",
          locator: "Breed dimensions",
        },
      ],
      verifiedOn: null,
      note: "Giant represents an editorial categorization reflecting heavy skeletal mass and adult weight.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "verified",
          locator: "Height at withers: Males: 66-74 cm, Females: 64-70 cm",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.height.metric",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Height is published in centimetres: males 66–74 cm, females 64–70 cm.",
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "verified",
          locator: "Weight: Males: 45-60 Kg, Females: 35-50 Kg",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "The FCI standard specifies adult weights of 45–60 kg for males and 35–50 kg for females. The Dog API reports a narrower female range of 40–50 kg.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-rafeiro-do-alentejo",
          role: "verified",
          locator: "Life Expectancy: 12-14 years",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span",
        },
        {
          id: "petmd-rafeiro-do-alentejo",
          role: "cited",
          locator: "average Rafeiro do Alentejo lifespan is 12–14 years",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Kennel club and veterinary profiles establish an expected lifespan of 12 to 14 years.",
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "verified",
          locator: "Coat: hair",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Documented coat texture is short to medium, straight, thick, and dense.",
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "verified",
          locator: "Coat: hair",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Short to medium coat length, with medium length preferred.",
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "verified",
          locator: "Coat: colour",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Coat coloration and white markings follow the official standard specifications.",
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "cited",
          locator: "Coat: hair",
        },
        {
          id: "petmd-rafeiro-do-alentejo",
          role: "cited",
          locator: "Caring for a Rafeiro do Alentejo - Grooming",
        },
      ],
      verifiedOn: null,
      note: "Editorial rating reflecting dense double-coat shedding patterns.",
    },

    "physical.droolingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "petmd-rafeiro-do-alentejo",
          role: "cited",
          locator: "Caring for a Rafeiro do Alentejo",
        },
      ],
      verifiedOn: null,
      note: "Moderate rating reflects typical flews and facial conformation in large mastiff-type dogs.",
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "verified",
          locator: "General appearance, head, eyes, ears, neck, body, tail, limbs, coat, and gait",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Key morphological characteristics verified against the official breed standard.",
    },

    temperament: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "verified",
          locator: "Behaviour and temperament",
        },
        {
          id: "portuguese-kennel-club-rafeiro-do-alentejo",
          role: "verified",
          locator: "Behaviour and character",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Temperament reflects traditional independent flock and estate guardian heritage.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "cited",
          locator: "Behaviour and temperament",
        },
      ],
      verifiedOn: null,
      note: "Editorial scores for comparative application display; unsupported metrics are kept null.",
    },

    "temperament.scores.withChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable evidence supports a standardized numerical score for compatibility with children.",
    },

    "temperament.scores.withDogs": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No verified empirical data exists to assign a dog-compatibility rating.",
    },

    "temperament.scores.barking": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific vocalization rating is established.",
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "cited",
          locator: "General appearance and traditional guarding role",
        },
        {
          id: "petmd-rafeiro-do-alentejo",
          role: "cited",
          locator: "Caring for a Rafeiro do Alentejo",
        },
      ],
      verifiedOn: null,
      note: "Care protocols reflect husbandry principles tailored to large livestock guardian canines.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "petmd-rafeiro-do-alentejo",
          role: "cited",
          locator: "How much exercise does a Rafeiro do Alentejo need?",
        },
      ],
      verifiedOn: null,
      note: "The 45–60 minute guideline represents a daily planning target rather than a rigid rule.",
    },

    "care.grooming": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "cited",
          locator: "Coat: hair",
        },
        {
          id: "petmd-rafeiro-do-alentejo",
          role: "cited",
          locator: "Skin Care and Grooming",
        },
      ],
      verifiedOn: null,
      note: "Grooming advice based on maintaining dense double-coat hygiene without stripping natural skin oils.",
    },

    "care.training": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "cited",
          locator: "Behaviour and temperament; guarding role",
        },
        {
          id: "petmd-rafeiro-do-alentejo",
          role: "cited",
          locator: "Rafeiro do Alentejo Behavior and Training",
        },
      ],
      verifiedOn: null,
      note: "Training advice emphasizes patient, reward-based methods and early social exposure for powerful guardians.",
    },

    "care.livingEnvironment": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "cited",
          locator: "General appearance, traditional use, and guarding temperament",
        },
        {
          id: "petmd-rafeiro-do-alentejo",
          role: "cited",
          locator: "Caring for a Rafeiro do Alentejo",
        },
      ],
      verifiedOn: null,
      note: "Housing advice is editorial guidance emphasizing spacious rural grounds and secure containment.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Nutritional Assessment Guidelines",
        },
        {
          id: "petmd-rafeiro-do-alentejo",
          role: "cited",
          locator: "How To Feed a Rafeiro do Alentejo",
        },
      ],
      verifiedOn: null,
      note: "General canine nutritional framework emphasizing portion control and bloat mitigation.",
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
          id: "petmd-rafeiro-do-alentejo",
          role: "verified",
          locator: "Rafeiro do Alentejo Health Issues",
        },
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "cited",
          locator: "Breed size and general conformation",
        },
        {
          id: "american-kennel-club-rafeiro-do-alentejo",
          role: "cited",
          locator: "Health considerations",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Health information reflects recognized veterinary risks associated with giant, deep-chested pastoral dogs.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "cited",
          locator: "General appearance, temperament, and traditional guarding role",
        },
        {
          id: "portuguese-kennel-club-rafeiro-do-alentejo",
          role: "cited",
          locator: "Behaviour and character",
        },
      ],
      verifiedOn: null,
      note: "Suitability flags represent practical editorial guidance for prospective owners.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No authoritative source establishes a universal compatibility rating for households with children.",
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "verified",
          locator: "Brief historical summary, utilization, gait, and classification",
        },
        {
          id: "portuguese-kennel-club-rafeiro-do-alentejo",
          role: "verified",
          locator: "História da raça",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "Summarizes authentic pastoral history, transhumance heritage, and gait characteristics.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-rafeiro-do-alentejo-standard",
          role: "verified",
          locator: "Origin, utilization, history, height and weight, coat, and temperament",
        },
        {
          id: "portuguese-kennel-club-rafeiro-do-alentejo",
          role: "cited",
          locator: "Official breed profile",
        },
        {
          id: "petmd-rafeiro-do-alentejo",
          role: "cited",
          locator: "Rafeiro do Alentejo FAQs",
        },
      ],
      verifiedOn: "2026-11-10",
      note: "FAQ responses synthesize standard metrics, exercise advice, and veterinary wellness considerations.",
    },
  },

  updatedOn: "2026-11-10",
};
