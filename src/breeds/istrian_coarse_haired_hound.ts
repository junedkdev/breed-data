import type { Breed } from "../schema/breed.types";

export const istrian_coarse_haired_hound: Breed = {
  slug: "istrian-coarse-haired-hound",
  name: "Istrian Coarse-haired Hound",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Istarski oštrodlaki gonič",
    "Istrian Wire-haired Hound",
    "Istarski resasti gonič",
    "Chien courant d'Istrie à poil dur",
    "Rauhhaarige Istrianer Bracke",
    "Sabueso de Istria de pelo duro"
  ],

  group: "Scent Hounds and Related Breeds; Section 1.2: Medium-sized Hounds (Scenthound group in some registries)",

  origin: {
    country: "Croatia",
    region: "Istria"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Istrian_Coarse-haired_Hound.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Istrian_Coarse-haired_Hound.jpg",
      title: "Istrian Coarse-haired Hound.jpg",
      description: "A female Istrian Coarse-haired Hound, white with orange markings.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2016-12-11",
      uploadedOn: "2016-12-11",
      width: 600,
      height: 585,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Changes, if any, must be indicated; adaptations must be shared under the same license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-09"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/IstrianCoarseHairedHound.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:IstrianCoarseHairedHound.jpg",
      title: "IstrianCoarseHairedHound.jpg",
      description: "An Istrian Coarse-haired Hound outdoors at a dog show in Zadar, Croatia.",
      creator: "Mirta12",
      uploader: "Mirta12",
      capturedOn: "2006-04-29",
      uploadedOn: "2012-01-25",
      width: 2048,
      height: 1536,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Mirta12, Wikimedia Commons, CC BY-SA 3.0. Changes, if any, must be indicated; adaptations must be shared under the same license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-09"
    }
  ],

  overview: {
    summary:
      "A rough-coated Croatian scent hound, white with orange markings, built to hunt hare, fox and boar over stony, hilly ground in any weather, and gentle and devoted at home.",

    description:
      "The Istrian Coarse-haired Hound is a medium-sized, strongly built scent hound whose body is clearly longer than it is tall. Its most obvious feature is the coat: a harsh, dull, slightly wavy topcoat about 5 to 8 cm long over a shorter, dense undercoat that thickens in winter. The coat is snow white with even orange markings on the head and body, covering no more than about a third of the dog. The head is well proportioned, with a muzzle a little shorter than the skull, a black or brown nose, oval dark brown eyes with a serious look, and triangular ears that hang at eye level. By nature it is gentle and even-tempered, closely attached to its owner, and easy to train, yet keen and persistent in the field. It works its quarry from further away than the smooth-coated Istrian hound and gives a medium-toned voice with some deeper notes while trailing.",

    history:
      "The Istrian hounds are among Croatia's native hound breeds, shaped over centuries by practical hunting work. A manuscript written in 1719 by Bishop Petar Bakić describes these hounds as already known before the fourteenth century, and the earliest known picture of the breed is in the cathedral of St Mark in Makarska. The coarse-haired type shares its history with the smooth-coated Istrian hound but has always been depicted less often. Its rough coat made it the better choice for colder hunting grounds. The breed's first international standard was approved in 1955.",

    originalPurpose: "Hunting hare, fox and wild boar, and tracking wounded game on a leash.",

    currentRoles: ["Hunting hound for hare, fox and boar", "Leash tracker for wounded game"]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 50,
        max: 54
      },
      female: {
        min: 48,
        max: 52
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 16,
        max: 24
      },
      female: {
        min: 15,
        max: 21
      }
    },

    lifespanYears: {
      min: 12,
      max: 15
    },

    coatType:
      "Harsh, wiry, dull and slightly wavy topcoat over a shorter, dense undercoat that is fuller in winter",

    coatLength: "Medium; about 5 to 8 cm on the body",

    coatColors: ["White with orange markings"],

    sheddingLevel: "Moderate, with more undercoat lost seasonally",

    droolingLevel: "Low",

    distinctiveFeatures: [
      "Rectangular body, clearly longer than tall, with the elbow at about half the height at the withers",
      "Height at the withers 50 to 54 cm for males and 48 to 52 cm for females, with 3 cm either way allowed for excellent dogs",
      "Skull slightly longer than the muzzle, with a moderate stop and straight nasal bridge",
      "Oval, dark brown eyes with a serious expression",
      "Triangular drop ears with rounded tips, set at eye level and reaching the corner of the mouth when drawn forward",
      "Black or brown nose with matching lip pigment",
      "Sabre-shaped tail reaching at least the hock, carried below the topline",
      "Harsh, slightly wavy, dull coat about 5 to 8 cm long",
      "Snow-white coat with even orange patches, never a fully orange head",
      "Medium-toned hunting voice with some deeper notes"
    ]
  },

  temperament: {
    traits: [
      "Gentle and even-tempered",
      "Devoted to its owner",
      "Easy to train",
      "Persistent and keen when hunting",
      "Works game at a distance from the hunter",
      "Copes with any weather and rough terrain"
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 2,
      independence: 4,
      trainability: 3,
      barking: 4,
      energy: 4
    }
  },

  care: {
    exercise: {
      level: "High. A working hound that needs long daily outings and regular scent work.",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Long walks or hikes on a lead",
        "Free running only in securely fenced areas",
        "Tracking and scent games",
        "Hunting or tracking trials where available"
      ]
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush once or twice a week to remove loose undercoat, seeds and burrs. Pluck out dead topcoat by hand a few times a year rather than clipping, which softens the harsh texture.",

      bathing: "Only when dirty; the harsh coat sheds mud well once dry.",

      notes: [
        "Wipe the face after meals and muddy walks.",
        "Check feet, skin and coat for thorns and ticks after time outdoors.",
        "Trim nails if they do not wear down naturally.",
        "Look inside the drop ears weekly and dry them after wet walks."
      ]
    },

    training: {
      difficulty:
        "Moderate. Learns readily and is attached to its owner, but its nose can override commands outdoors.",

      tips: [
        "Use rewards and praise rather than harsh corrections.",
        "Keep sessions short and varied.",
        "Train recall on a long line and do not rely on it near game.",
        "Give its nose regular work through tracking or scent games."
      ],

      socialization:
        "Introduce the puppy to many people, friendly dogs, traffic and household sounds. Early, calm experiences help its gentle nature carry into everyday family life."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cool and cold climates",
        "Temperate and Mediterranean climates",
        "Warm climates if shade, water and exercise in the cooler hours are provided"
      ],

      aloneTimeTolerance:
        "Moderate. Usually settles if well exercised, but a bored hound may bay or dig."
    }
  },

  nutrition: {
    dietType: "A complete and balanced diet for a medium-sized active dog, adjusted for workload.",

    feedingFrequency: {
      puppy: "Three to four meals a day, dropping to two by about six months.",
      adult: "Two measured meals a day.",
      senior: "Two smaller meals a day, adjusted to keep the dog lean."
    },

    guidelines:
      "Measure meals and feel for the ribs under the rough coat, which can hide weight gain. Feed more in hunting season and less in quiet months, and keep fresh water available.",

    considerations: [
      "Keep the dog lean and muscular.",
      "Count treats as part of the daily ration.",
      "Change foods gradually over about a week."
    ],

    note: "Energy needs vary a lot between a working hound and a pet; a veterinarian can help set the right amount."
  },

  health: {
    overview:
      "Little published health information exists for this breed, and no condition has been shown to be common in it. It benefits from the routine care any active hunting hound needs: weight control, weekly ear checks for its hanging ears, and tick and parasite prevention. Dogs living around the Mediterranean may also need protection against sandfly-borne disease. Ask breeders what health checks they carry out.",

    commonConditions: [],

    preventiveCare: [
      "Ask breeders about hip checks on the parents.",
      "Keep the dog lean.",
      "Check and dry the ears weekly.",
      "Use year-round tick and flea prevention; ask your vet about sandfly protection in Mediterranean areas.",
      "Check for cuts and thorns after outings.",
      "Book a yearly veterinary check-up."
    ],

    recommendedScreenings: [],

    dentalCare: "Brush the teeth several times a week and have them checked at routine vet visits.",

    earCare:
      "Check the drop ears weekly for wax, moisture or smell, and clean the visible part with a vet-approved cleaner if needed.",

    skinCare: "Part the coat while brushing to look for ticks, scratches or sore spots."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Hunters wanting a hound for hare, fox or boar",
      "Experienced owners used to scent hounds",
      "Rural homes with secure fencing",
      "Active people who walk long distances daily"
    ],

    notIdealFor: [
      "Apartment living",
      "Owners wanting reliable off-lead recall",
      "Homes with free-roaming small pets",
      "People who cannot give long daily exercise"
    ]
  },

  funFacts: [
    "A manuscript from 1719 by Bishop Petar Bakić already described these hounds as known before the fourteenth century.",
    "The oldest known picture of the breed is in the cathedral of St Mark in Makarska, Croatia.",
    "Artists rarely painted the coarse-haired type, preferring the sleeker outline of its smooth-coated cousin.",
    "It is one of three native Croatian hound breeds, alongside the smooth-coated Istrian hound and the Posavina hound.",
    "Lemon-yellow markings are a disqualifying fault; the patches must be orange."
  ],

  faq: [
    {
      question: "Where does the breed come from?",
      answer: "Croatia, specifically the Istria region. It is one of the country's native hound breeds."
    },
    {
      question: "How big is it?",
      answer:
        "Males stand 50 to 54 cm at the withers and females 48 to 52 cm, with 3 cm either way allowed for excellent dogs."
    },
    {
      question: "How is it different from the smooth-coated Istrian hound?",
      answer:
        "It has a harsh, slightly wavy coat about 5 to 8 cm long, which suits colder hunting grounds. It also tends to work game further from the hunter and has a deeper voice."
    },
    {
      question: "What colour is it?",
      answer:
        "Snow white with even orange patches on the head and body. Orange should cover no more than about a third of the dog, and lemon-yellow markings are not allowed."
    },
    {
      question: "Is it a good family dog?",
      answer:
        "It is gentle and devoted at home, but it is a working hound with a strong hunting drive and suits experienced, active owners best."
    },
    {
      question: "Are there known health problems?",
      answer:
        "Breed-specific health data is very limited, and no condition is known to be common. Routine care for an active hound, plus questions to the breeder about health checks, is the sensible approach."
    }
  ],

  references: [
    "fci-istrian-wire-haired-hound-official-standard",
    "fci-istrian-wire-haired-hound-nomenclature",
    "hks-istarski-ostrodlaki-gonic-breed-profile",
    "ukc-istrian-coarse-haired-hound-standard",
    "the-dog-api",
    "wikimedia-istrian-coarse-haired-hound-canarian",
    "wikimedia-istrian-coarse-haired-hound-mirta12"
  ],

  evidence: {
    scientificName: {
      reliability: "unverified",
      sources: [],
      verifiedOn: null,
      note: "Canis lupus familiaris is the domestic-dog name used across the catalog; breed standards do not state it."
    },

    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-istrian-wire-haired-hound-nomenclature",
          role: "verified",
          locator: "Istarski oštrodlaki gonič; EN Istrian Wire-haired Hound; FR Chien courant d'Istrie à poil dur; DE Rauhhaarige Istrianer Bracke; ES Sabueso de Istria de pelo duro"
        },
        { id: "the-dog-api", role: "verified", locator: "breed.alt_names: Istarski Resasti Gonič" }
      ],
      verifiedOn: "2026-11-18",
      note: "Corrected the German name to FCI's 'Rauhhaarige Istrianer Bracke'. Removed 'Istrian Rough-coated Hound', the Italian name and 'Barbin', which no source checked uses."
    },

    group: {
      reliability: "official_standard",
      sources: [
        { id: "fci-istrian-wire-haired-hound-official-standard", role: "verified", locator: "FCI classification: Group 6, Section 1.2, with working trial" },
        { id: "ukc-istrian-coarse-haired-hound-standard", role: "verified", locator: "Scenthound Group" }
      ],
      verifiedOn: "2026-11-18",
      note: null
    },

    origin: {
      reliability: "official_standard",
      sources: [
        { id: "fci-istrian-wire-haired-hound-official-standard", role: "verified", locator: "Origin: Croatia" },
        { id: "fci-istrian-wire-haired-hound-nomenclature", role: "verified", locator: "Country of origin: Croatia" },
        { id: "the-dog-api", role: "verified", locator: "breed.origin: Istria Peninsula, Croatia" }
      ],
      verifiedOn: "2026-11-18",
      note: "Region reduced to 'Istria'; 'northern Adriatic coastal mountain regions' was not supported."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        { id: "fci-istrian-wire-haired-hound-official-standard", role: "verified", locator: "Utilization; Behaviour/temperament; Proportions; Head; Coat; Colour" },
        { id: "hks-istarski-ostrodlaki-gonic-breed-profile", role: "verified", locator: "Works game at greater distance; deeper voice; suited to colder ground; hare, fox, boar; good blood tracker" }
      ],
      verifiedOn: "2026-11-18",
      note: null
    },

    "overview.history": {
      reliability: "official_standard",
      sources: [
        { id: "fci-istrian-wire-haired-hound-official-standard", role: "verified", locator: "Brief history: 1719 Bakić manuscript; earliest picture in St Mark's cathedral, Makarska; first FCI standard 6 April 1955" },
        { id: "ukc-istrian-coarse-haired-hound-standard", role: "verified", locator: "History parallels the Smooth-Haired hound; rarely depicted by artists" },
        { id: "hks-istarski-ostrodlaki-gonic-breed-profile", role: "cited", locator: "Autochthonous Croatian hounds shaped by centuries of work" }
      ],
      verifiedOn: "2026-11-18",
      note: "Removed for lack of a reliable source: the 1474 Beram fresco (usually linked to the smooth-coated breed), the 1866 Vienna show, the 'Barbin' nickname in Pazin and Buzet, and 'Balkan white scenthound' ancestry."
    },

    "physical.sizeCategory": {
      reliability: "official_standard",
      sources: [
        { id: "fci-istrian-wire-haired-hound-official-standard", role: "verified", locator: "Section 1.2 Medium-sized hounds" }
      ],
      verifiedOn: "2026-11-18",
      note: null
    },

    physical: {
      reliability: "official_standard",
      sources: [
        { id: "fci-istrian-wire-haired-hound-official-standard", role: "verified", locator: "Proportions; Head; Eyes; Ears; Lips; Tail; Coat; Colour; Disqualifying faults" },
        { id: "ukc-istrian-coarse-haired-hound-standard", role: "cited", locator: "Color: snow white with lemon-orange markings; Coat" }
      ],
      verifiedOn: "2026-11-18",
      note: "Lemon-yellow markings are a disqualifying fault under FCI, so 'lemon to orange' and the unsourced 'pure white' variant were removed. UKC words the colour as lemon-orange."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        { id: "fci-istrian-wire-haired-hound-official-standard", role: "verified", locator: "Males 50-54 cm; females 48-52 cm; +/- 3 cm tolerance" },
        { id: "ukc-istrian-coarse-haired-hound-standard", role: "conflicting", locator: "Ideal height males 20.5 in, females 19.5 in" },
        { id: "the-dog-api", role: "conflicting", locator: "breed.height.metric: 46-58 / 44-56 cm" }
      ],
      verifiedOn: "2026-11-18",
      note: "Stored in centimetres as FCI publishes."
    },

    "physical.weight": {
      reliability: "unverified",
      sources: [
        { id: "the-dog-api", role: "cited", locator: "breed.weight.metric: males 16-24, females 15-21 kg" },
        { id: "ukc-istrian-coarse-haired-hound-standard", role: "conflicting", locator: "Ideal average weight about 44 pounds" }
      ],
      verifiedOn: null,
      note: "FCI gives no weight. Neither the Croatian Kennel Club page nor UKC gives the 16-24 kg range the earlier record attributed to them."
    },

    "physical.lifespanYears": {
      reliability: "unverified",
      sources: [
        { id: "the-dog-api", role: "cited", locator: "breed.life_span: 12-15 years" }
      ],
      verifiedOn: null,
      note: "No kennel club, breed club or scientific source checked gives a lifespan; the Croatian Kennel Club page cited earlier does not."
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial estimate for a wiry coat with seasonal undercoat."
    },

    "physical.droolingLevel": {
      reliability: "estimate",
      sources: [
        { id: "fci-istrian-wire-haired-hound-official-standard", role: "cited", locator: "Lips: close-fitting" }
      ],
      verifiedOn: null,
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        { id: "fci-istrian-wire-haired-hound-official-standard", role: "verified", locator: "Behaviour/temperament: easy to train; any weather and terrain; gentle, even; devoted to owner" },
        { id: "hks-istarski-ostrodlaki-gonic-breed-profile", role: "verified", locator: "Works game at a greater distance than the smooth-coated hound" },
        { id: "ukc-istrian-coarse-haired-hound-standard", role: "cited", locator: "Gentle, docile, calm, attached to owner, enthusiastic hunter" }
      ],
      verifiedOn: "2026-11-18",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial 1-5 scores."
    },

    care: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General care advice for an active wire-coated scent hound."
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial estimate; no source checked gives minutes per day."
    },

    "care.livingEnvironment": {
      reliability: "estimate",
      sources: [
        { id: "hks-istarski-ostrodlaki-gonic-breed-profile", role: "cited", locator: "Suited to colder hunting grounds" }
      ],
      verifiedOn: null,
      note: "Editorial judgement."
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General feeding advice; not breed-specific."
    },

    health: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive care for an active hound in Mediterranean regions."
    },

    "health.commonConditions": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific health data was found. Ear infections, field injuries, hip dysplasia, vector-borne disease and bloat were listed before without a breed-specific source; they are now covered only as general advice."
    },

    "health.recommendedScreenings": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed screening programme was found; the Croatian Kennel Club page cited earlier has no health content."
    },

    suitability: {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial judgement."
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        { id: "fci-istrian-wire-haired-hound-official-standard", role: "verified", locator: "Brief history (1719 Bakić; Makarska); Disqualifying faults (lemon yellow markings)" },
        { id: "ukc-istrian-coarse-haired-hound-standard", role: "verified", locator: "History: rarely depicted by artists" },
        { id: "hks-istarski-ostrodlaki-gonic-breed-profile", role: "verified", locator: "Three autochthonous Croatian hound breeds" }
      ],
      verifiedOn: "2026-11-18",
      note: "Removed: Beram fresco, 'Barbin' nickname, 'voice carries for miles' and lowland/upland preference claims."
    },

    faq: {
      reliability: "estimate",
      sources: [
        { id: "fci-istrian-wire-haired-hound-official-standard", role: "cited", locator: "Origin; Size; Coat; Colour" },
        { id: "hks-istarski-ostrodlaki-gonic-breed-profile", role: "cited", locator: "Comparison with the smooth-coated hound" }
      ],
      verifiedOn: null,
      note: "Factual answers follow the cited sources; suitability and health answers are editorial."
    }
  },

  updatedOn: "2026-11-18"
};
