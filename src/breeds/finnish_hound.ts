import type { Breed } from "../schema/breed.types";

export const finnish_hound: Breed = {
  slug: "finnish-hound",
  name: "Finnish Hound",
  scientificName: null,
  alternateNames: [
    "Suomenajokoira",
    "Chien courant finlandais",
    "Finnischer Laufhund",
    "Finsk stovare",
    "Sabueso finlandes",
  ],
  group: "Scent Hounds; Medium-Sized Hounds",

  origin: {
    country: "Finland",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/FinnishHound.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:FinnishHound.jpg",
      title: "FinnishHound.jpg",
      description: "Finnish Hound standing alert outdoors showing classic tricolour markings.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2021-08-01",
      uploadedOn: "2021-08-01",
      width: 1792,
      height: 1415,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Finnish_Hound.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Finnish_Hound.jpg",
      title: "Finnish Hound.jpg",
      description: "Finnish Hound, known natively as Suomenajokoira, in a natural outdoor setting.",
      creator: "EtäKärppä",
      uploader: "EtäKärppä",
      capturedOn: "2009-04-05",
      uploadedOn: "2009-07-20",
      width: 3648,
      height: 2736,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by EtäKärppä, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Finnishhoundsuomenajo6.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Finnishhoundsuomenajo6.jpg",
      title: "Finnishhoundsuomenajo6.jpg",
      description: "Male Finnish Hound displaying typical hound proportions and long hanging ears.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2025-05-04",
      uploadedOn: null,
      width: 1998,
      height: 1460,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08",
    },
  ],

  overview: {
    summary:
      "The Finnish Hound, known natively as the Suomenajokoira, is a medium-sized tricoloured scent hound bred in Finland to track hare and fox across rugged Nordic woodlands and snow. Celebrated for exceptional scenting ability, stamina, and a melodious hunting voice, it pairs a passionate working drive in the field with a peaceful, calm demeanor at home.",

    description:
      "Noticeably longer in body than it is tall at the withers, the Finnish Hound combines athletic substance with clean, efficient movement. A dense, weatherproof double coat carries a bold black saddle over rich tan shading, accented by crisp white markings on the muzzle, chest, feet, and tail tip. Long, hanging ears, dark expressive eyes, and a purposeful ground-scenting style reflect its deep working background. In the field, it is renowned for hunting independently over long distances, using resonant baying to signal the quarry's path. At home, once given sufficient physical exercise and scent-tracking outlets, it is gentle, composed, and affectionate with its family, though its powerful hunting instinct requires secure fencing and reliable leash management around small wildlife.",

    history:
      "Systematic breeding of the Finnish Hound began following the establishment of a national kennel club in Finland in 1889, driven by hunters seeking a tracking hound uniquely adapted to deep snow and cold Nordic terrain. By interbreeding regional Finnish hounds with selected Russian, French, German, and Swedish scent hounds, breeders crafted a sturdy dog possessing both endurance and a clear, carrying bark. The breed's distinct tricolour pattern and physical conformation were consolidated in the early twentieth century, establishing the hound as one of the most popular and culturally cherished working breeds in Finland and Scandinavia.",

    originalPurpose:
      "Tracking and pursuing hare and fox by scent over snowy and forested Nordic terrain, working independently and baying to guide the hunter.",

    currentRoles: [
      "Traditional hare and fox hunting hound",
      "Field tracking and blood tracking athlete",
      "Scent-work and nosework competitor",
      "Active outdoor hiking companion for dedicated sporting households",
      "Conformation show competitor",
    ],
  },

  physical: {
    sizeCategory: "Medium-sized, strongly built, rectangular scent hound",

    height: {
      unit: "cm",
      male: { min: 55, max: 61 },
      female: { min: 52, max: 58 },
    },

    weight: {
      unit: "kg",
      male: { min: 20, max: 29 },
      female: { min: 20, max: 25 },
    },

    lifespanYears: {
      min: 11,
      max: 14,
    },

    coatType:
      "Dense, close-fitting double coat consisting of a straight, dense, harsh outer jacket and a short, soft, protective undercoat built for cold Nordic weather.",

    coatLength: "Short to medium-short, straight and close-lying over the entire body",

    coatColors: [
      "Tricolour",
    ],

    sheddingLevel:
      "Moderate seasonal shedding; short double coat sheds hair continuously and benefits from weekly brushing with a rubber curry glove or bristle brush, especially during spring and autumn coat transitions.",

    droolingLevel: "Low",

    distinctiveFeatures: [
      "Rectangular body outline with length clearly exceeding height at the withers (ratio approximately 1.1 to 1)",
      "Striking tricolour pattern featuring a solid black saddle, rich tan on the head and limbs, and white markings on the blaze, neck, chest, feet, and tail tip",
      "Long, supple drop ears set at eye level and hanging close to the cheeks",
      "Dark brown, almond-shaped eyes with a calm, keen, and intelligent expression",
      "Strong, straight legs and oval cat-like paws providing steady traction over rock and snow",
      "Strong tail reaching the hocks, carried level or in a gentle downward curve",
    ],
  },

  temperament: {
    traits: [
      "Calm and gentle indoors",
      "Friendly and good-tempered",
      "Energetic and tireless in the field",
      "Strongly scent-driven",
      "Independent problem-solver",
      "Persistent tracker",
      "Resonant and melodious barker during pursuit",
      "Alert and attentive",
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: 2,
      independence: 4,
      trainability: 3,
      barking: 4,
      energy: 5,
    },
  },

  care: {
    exercise: {
      level: "High",

      minutesPerDay: {
        min: 60,
        max: 120,
      },

      activities: [
        "Long daily cross-country walks and hikes on long tracking lines",
        "Structured scent-trailing, blood tracking, and nosework games",
        "Free running in tall, securely enclosed paddocks or training fields",
        "Canicross or steady jogging with conditioned adult dogs in cool weather",
        "Interactive food puzzles and cognitive scent-enrichment games indoors",
      ],
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush once or twice weekly with a rubber curry comb or firm bristle brush to clear loose undercoat, increase circulation, and remove field debris after outdoor excursions.",

      bathing:
        "Bathe only when dirty or after muddy tracking work, using a gentle canine shampoo that preserves the natural protective oils of the weatherproof coat.",

      notes: [
        "Check long drop ears weekly for moisture, wax, or seeds, cleaning with a veterinarian-recommended ear solution.",
        "Inspect the paws, pads, and between the toes after runs through brambles, frozen crust, or rocky ground.",
        "Trim nails regularly to prevent toe splay and maintain sound footing.",
        "Brush teeth multiple times weekly using canine-formulated toothpaste.",
      ],
    },

    training: {
      difficulty:
        "Moderate to challenging; very friendly and cooperative, but selective hearing can emerge once an enticing scent trail is picked up.",

      tips: [
        "Use positive, high-value reward-based methods and avoid harsh reprimands that diminish enthusiasm.",
        "Establish reliable recall foundation early, keeping the hound on lead or long line in unenclosed rural areas where game scent abounds.",
        "Channel instinctual tracking drive into organized nosework and search activities rather than attempting to suppress it.",
        "Teach polite leash manners early to counter strong pulling when following scent lines.",
      ],

      socialization:
        "Provide early and varied exposure to diverse environments, livestock, friendly dogs, and household visitors to cultivate an unshakeable, friendly adult demeanor.",
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cool and cold climates with snowy winters",
        "Temperate climates",
        "Warm climates with air conditioning, shaded yards, and exercise scheduled during cool morning and evening hours",
      ],

      aloneTimeTolerance:
        "Moderate when adequate daily physical exercise and mental tracking enrichment are provided; under-stimulated hounds may bay or dig out of boredom.",
    },
  },

  nutrition: {
    dietType:
      "High-quality commercial dry kibble, wet food, or veterinary-formulated working dog diet rich in protein and healthy fats for endurance.",

    feedingFrequency: {
      puppy: "3 to 4 measured meals daily during growth, transitioning to 2 meals daily around six months of age",
      adult: "2 measured meals per day, adjusted upward during rigorous hunting seasons and downward during rest periods",
      senior: null,
    },

    guidelines:
      "Measure daily portions based on workload and body condition score, regularly feeling for the ribs beneath the dense coat to ensure the hound stays lean and athletic.",

    considerations: [
      "Increase calorie and fat intake during active hunting autumn and winter months, reducing portions in the off-season to avoid excess weight.",
      "Account for all training rewards within the daily calorie allowance.",
      "Ensure continuous access to fresh, clean drinking water, especially after arduous outdoor tracking sessions.",
      "Avoid feeding large meals immediately before or after strenuous field work.",
    ],

    note: "Calorie needs vary dramatically between working hunting hounds and companion pets; consult a veterinarian for individualized feeding guidelines.",
  },

  health: {
    overview:
      "The Finnish Hound is generally a robust and healthy working breed with a typical lifespan of 11 to 14 years. Breed-health programs in Finland focus on radiographic hip evaluation via breeding indices, alongside DNA screening for hereditary cerebellar ataxia (a severe neurodegenerative condition caused by an autosomal recessive SEL1L mutation).",

    commonConditions: [
      "Hip dysplasia: developmental laxity of the hip joints monitored closely through national hip-index breeding databases.",
      "Cerebellar ataxia (Finnish Hound type): an autosomal recessive neurodegenerative disorder caused by a mutation in the SEL1L gene, causing early-onset progressive incoordination; detectable via DNA testing.",
      "Ear canal irritation (otitis externa): inflammation related to moisture retention beneath long hanging ear leather.",
      "Hunting-related field injuries: minor pad abrasions, bramble cuts, or sprains sustained while traversing rough terrain.",
    ],

    preventiveCare: [
      "Confirm that breeding stock has been DNA-tested for cerebellar ataxia (SEL1L gene) and evaluated for hip dysplasia.",
      "Schedule annual veterinary wellness examinations, core vaccinations, and appropriate parasite control.",
      "Inspect ears, eyes, and foot pads thoroughly after tracking through brush or snow crust.",
      "Maintain a lean, muscular body condition to prevent unnecessary joint stress.",
    ],

    recommendedScreenings: [
      "Cerebellar ataxia (SEL1L gene) DNA test",
      "Radiographic hip dysplasia evaluation through an accepted screening scheme",
      "Regular veterinary ear and ocular examinations",
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic paste to prevent tartar and maintain healthy oral tissues.",

    earCare:
      "Lift and inspect the hanging ears weekly, wiping clean and ensuring the canals dry completely after outdoor rain or wet snow.",

    skinCare:
      "Examine the skin and coat after field work for ticks, grass burrs, or scratches; treat any minor cuts promptly.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Hunters and outdoor sportsmen seeking an exceptional, cold-hardy scent tracking partner",
      "Active rural or suburban households with a securely fenced yard and time for long daily hikes",
      "Enthusiasts of blood tracking, search-and-rescue, and competitive nosework sports",
      "Families looking for an affectionate, even-tempered, and calm indoor companion between adventures",
    ],

    notIdealFor: [
      "Sedentary owners seeking a low-energy lap dog or apartment pet",
      "Households expecting 100% off-leash reliability in open country near wildlife",
      "Homes unwilling to provide substantial daily physical exercise and mental scent stimulation",
      "Dense urban environments sensitive to loud, carrying baying barks",
    ],
  },

  funFacts: [
    "The Finnish Hound, or Suomenajokoira, consistently ranks among the most registered and beloved native dog breeds in Finland.",
    "Bred specifically to navigate thick snow, the hound possesses tight, arched cat-like paws that minimize snow clumping between the toes.",
    "While tracking hare and fox, Finnish Hounds produce a melodious, carrying bay that echoes across dense Nordic forests, allowing handlers to track their progress from miles away.",
    "Despite their fierce determination on a scent trail, Finnish Hounds are famously gentle, friendly, and placid family companions indoors.",
    "Breed development began formally in 1889 following the founding of the Finnish Kennel Club, creating a hound capable of withstanding sub-zero Scandinavian winters.",
  ],

  faq: [
    {
      question: "What was the Finnish Hound originally bred to do?",
      answer:
        "The Finnish Hound was developed in Finland to hunt hare and fox by scent, following trails independently across forests and deep snow while baying melodiously to guide the hunter.",
    },
    {
      question: "How big do Finnish Hounds get?",
      answer:
        "According to official measurements, males stand 55 to 61 cm at the withers and weigh about 20 to 29 kg, while females measure 52 to 58 cm and weigh about 20 to 25 kg.",
    },
    {
      question: "Are Finnish Hounds good family pets?",
      answer:
        "Yes, they are known for their calm, affectionate, and friendly nature in the home. They get along well with children and other dogs, provided their high exercise and scent-tracking needs are met daily.",
    },
    {
      question: "How much exercise does a Finnish Hound need daily?",
      answer:
        "A healthy adult Finnish Hound needs 60 to 120 minutes of vigorous daily physical activity. Long walks on tracking lines, hiking, and nosework games are ideal for keeping their minds and bodies engaged.",
    },
    {
      question: "What health tests should I look for in a Finnish Hound?",
      answer:
        "Prospective owners should ensure that both parent dogs have documented DNA testing for cerebellar ataxia (SEL1L gene) and certified hip evaluations.",
    },
    {
      question: "Can a Finnish Hound live in an apartment?",
      answer:
        "Generally no. Their high energy, intense scent drive, and loud carrying bay make apartment living challenging, and they thrive best in homes with a securely fenced yard.",
    },
    {
      question: "Do Finnish Hounds shed a lot?",
      answer:
        "They are moderate shedders. Their dense double coat sheds hair continuously and blows coat seasonally, requiring weekly brushing with a rubber curry mitt to remove loose undercoat.",
    },
    {
      question: "What colors do Finnish Hounds come in?",
      answer:
        "The classic coloration is tricolour, consisting of a rich black saddle over the back and neck, warm tan on the head and limbs, and white markings on the muzzle, chest, feet, and tail tip.",
    },
    {
      question: "How long do Finnish Hounds typically live?",
      answer:
        "The typical life expectancy for a healthy Finnish Hound is 11 to 14 years when supported by proper nutrition, regular exercise, and preventive veterinary care.",
    },
  ],

  references: [
    "fci-finnish-hound-official-standard",
    "finnish-kennel-club-finnish-hound",
    "united-kennel-club-finnish-hound-standard",
    "zoetis-finnish-hound-profile",
    "wikimedia-finnish-hound-canarian-2021",
    "wikimedia-finnish-hound-etakarppa-2009",
    "wikimedia-finnish-hound-canarian-2025",
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
          id: "fci-finnish-hound-official-standard",
          role: "verified",
          locator: "FCI Standard N° 51 nomenclature: Suomenajokoira, Chien courant finlandais, Finnischer Laufhund, Finsk stovare, Sabueso finlandes",
        },
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "verified",
          locator: "Breed name and history: Suomenajokoira",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Alternate international and Finnish names verified across official standards and reference records.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "verified",
          locator: "FCI classification: Group 6 Scent hounds and related breeds, Section 1.2 Medium-sized Hounds",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.breed_group",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Classified under Scent Hounds and Medium-sized Hounds without citing registry acronyms in user-facing text.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "verified",
          locator: "Origin: Finland",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No specific subnational province is asserted in the official standard; country of origin is Finland broadly.",
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "verified",
          locator: "Brief Historical Summary, General Appearance, Behaviour/Temperament, and Utilisation sections",
        },
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "verified",
          locator: "Breed overview and history",
        },
        {
          id: "united-kennel-club-finnish-hound-standard",
          role: "cited",
          locator: "Characteristics and general appearance",
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
          id: "fci-finnish-hound-official-standard",
          role: "verified",
          locator: "General Appearance and Size sections",
        },
        {
          id: "united-kennel-club-finnish-hound-standard",
          role: "verified",
          locator: "General appearance: medium-sized scent hound",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "verified",
          locator: "Size — Height at withers: Males 55-61 cm, Bitches 52-58 cm",
        },
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "verified",
          locator: "Size: Males 55-61 cm, females 52-58 cm",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.height.metric (male 55-61 cm, female 52-58 cm)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Stored in exact published metric centimetres (males 55-61 cm, females 52-58 cm).",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (male 20-29 kg, female 20-25 kg)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Stored in exact published metric kilograms (males 20-29 kg, females 20-25 kg) from the structured reference record, as official standards describe height and substance without bounding a weight range.",
    },

    "physical.weight.male.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (29 kg)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Max male weight of 29 kg verified from structured reference data.",
    },

    "physical.weight.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (25 kg)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Max female weight of 25 kg verified from structured reference data.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "zoetis-finnish-hound-profile",
          role: "verified",
          locator: "Life span (11-14 years)",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.life_span (11-13 years)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Retains the 11-14 year lifespan range supported by veterinary documentation; The Dog API lists 11-13 years.",
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "verified",
          locator: "Coat — Hair: Undercoat short, dense, soft in texture. Topcoat medium in length, close-lying, straight, dense and rather harsh",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "verified",
          locator: "Coat — Hair section",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "verified",
          locator: "Colour: Tricolour. Black mantle, rich tan colour on head, lower parts of body, shoulders, thighs and elsewhere on legs. White markings usually on head, neck, forechest, lower parts of legs and on tip of tail",
        },
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "verified",
          locator: "Coat and colours: Tricolour",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "GET /breeds/{id}/colours",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Restricted to the official tricolour coat pattern; non-standard endpoint options are excluded.",
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "cited",
          locator: "Coat description: double coat with dense undercoat",
        },
      ],
      verifiedOn: null,
      note: "Editorial estimate based on the dense double coat; shedding occurs year-round with seasonal coat blows.",
    },

    "physical.droolingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "cited",
          locator: "Head — Lips: well developed, tight and well pigmented",
        },
      ],
      verifiedOn: null,
      note: "Editorial estimate reflecting tight lips and dry mouth structure described in the standard.",
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "verified",
          locator: "General Appearance, Head, Ears, Body, Tail, and Coat sections",
        },
        {
          id: "united-kennel-club-finnish-hound-standard",
          role: "verified",
          locator: "General appearance, head, and body proportions",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "verified",
          locator: "Behaviour / Temperament: Calm, friendly, never aggressive. Energetic when hunting",
        },
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "verified",
          locator: "Temperament: calm and friendly indoors, passionate and independent hunter in the field",
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
          id: "fci-finnish-hound-official-standard",
          role: "cited",
          locator: "Temperament: calm, friendly, energetic in hunting",
        },
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "cited",
          locator: "Working characteristics and hunting instinct",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1-5 ratings based on documented working and household characteristics.",
    },

    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "verified",
          locator: "Hunting purpose and stamina",
        },
        {
          id: "fci-finnish-hound-official-standard",
          role: "cited",
          locator: "Utilisation: scent hound for hare and fox",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Daily exercise requirements (60-120 minutes) reflecting an active endurance hunting hound.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "verified",
          locator: "Coat — Hair: short, dense double coat",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Low grooming requirement for a short, dense double coat, alongside ear, nail, and dental care.",
    },

    "care.training": {
      reliability: "general_guidance",
      sources: [
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "cited",
          locator: "Hunting instinct and independent tracking style",
        },
      ],
      verifiedOn: null,
      note: "Reward-based training guidance adapted to an independent, scent-driven hound.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "cited",
          locator: "Hunting purpose, baying voice, and exercise needs",
        },
      ],
      verifiedOn: null,
      note: "Boolean assessment; high energy, strong scent drive, and carrying baying bark make apartments unsuitable.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "cited",
          locator: "Exercise and hunting background",
        },
      ],
      verifiedOn: null,
      note: "A securely fenced yard facilitates safe outdoor activity and containment of scent-tracking drives.",
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "cited",
          locator: "Brief Historical Summary: adapted to snowy Nordic hunting conditions",
        },
      ],
      verifiedOn: null,
      note: "Climate guidance reflecting adaptation to cold northern environments with snow.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "cited",
          locator: "Temperament: calm and friendly indoors",
        },
      ],
      verifiedOn: null,
      note: "Guidance on managing alone time for an energetic hound when physical and mental needs are met.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine nutritional guidance suited to an active, medium-sized endurance hound.",
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
          id: "finnish-kennel-club-finnish-hound",
          role: "verified",
          locator: "Hip-index breeding objective",
        },
        {
          id: "zoetis-finnish-hound-profile",
          role: "verified",
          locator: "Health overview",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Synthesises Finnish Kennel Club breeding guidance on hip dysplasia with peer-reviewed genetic documentation on cerebellar ataxia.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "verified",
          locator: "Hip dysplasia and breeding indices",
        },
        {
          id: "zoetis-finnish-hound-profile",
          role: "verified",
          locator: "Breed health concerns",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Includes documented conditions such as hip dysplasia and cerebellar ataxia (SEL1L gene).",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "cited",
          locator: "Hip index objective in breeding",
        },
      ],
      verifiedOn: null,
      note: "Proactive veterinary preventive care, DNA testing, and post-hunt field checks.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "verified",
          locator: "Hip-index breeding program recommendations",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Screening recommendations for cerebellar ataxia DNA testing and radiographic hip evaluation.",
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
      note: "Routine ear hygiene for hanging hound ears.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Skin inspection and post-hunting brush checks.",
    },

    "suitability.firstTimeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "cited",
          locator: "Hunting instinct and working drive",
        },
      ],
      verifiedOn: null,
      note: "Editorial assessment; high scent drive, stamina, and independent tracking nature make the breed better suited to experienced owners.",
    },

    "suitability.familiesWithChildren": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "cited",
          locator: "Behaviour / Temperament: calm, friendly, never aggressive",
        },
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "cited",
          locator: "Temperament in the home",
        },
      ],
      verifiedOn: null,
      note: "Boolean assessment; calm, friendly, and non-aggressive with household children under responsible supervision.",
    },

    "suitability.seniorOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "cited",
          locator: "Exercise needs and hunting drive",
        },
      ],
      verifiedOn: null,
      note: "Editorial assessment; high exercise demands and pulling on scent trails can be challenging for seniors without dedicated support.",
    },

    "suitability.activeOwners": {
      reliability: "reliable_source",
      sources: [
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "verified",
          locator: "Hunting purpose and active lifestyle",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "suitability.apartmentLiving": {
      reliability: "estimate",
      sources: [
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "cited",
          locator: "Hunting drive and baying bark",
        },
      ],
      verifiedOn: null,
      note: "Aligned with care.livingEnvironment.apartmentSuitable.",
    },

    "suitability.idealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "cited",
          locator: "Hunting purpose and active outdoor life",
        },
      ],
      verifiedOn: null,
      note: "Synthesised owner-matching guidance based on stamina, scenting drive, and working needs.",
    },

    "suitability.notIdealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "cited",
          locator: "Hunting purpose and exercise demands",
        },
      ],
      verifiedOn: null,
      note: "Synthesised owner-matching caveats.",
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "verified",
          locator: "Brief Historical Summary and Utilisation",
        },
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "verified",
          locator: "Breed history, name, and popularity in Finland",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-finnish-hound-official-standard",
          role: "verified",
          locator: "Size, Coat, Colour, and Utilisation sections",
        },
        {
          id: "finnish-kennel-club-finnish-hound",
          role: "verified",
          locator: "Breed overview, history, and health indices",
        },
        {
          id: "zoetis-finnish-hound-profile",
          role: "verified",
          locator: "Lifespan and health",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },
  },

  updatedOn: "2026-11-08",
};
