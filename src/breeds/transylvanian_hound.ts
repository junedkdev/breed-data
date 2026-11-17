import type { Breed } from "../schema/breed.types";

export const transylvanian_hound: Breed = {
  slug: "transylvanian-hound",
  name: "Transylvanian Hound",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Erdélyi Kopó",
    "Hungarian Hound",
    "Transylvanian Scent Hound",
    "Chien Courant de Transylvanie",
    "Ungarische Bracke",
    "Transylvanischer Laufhund",
    "Sabueso Húngaro",
    "Sabueso de Transilvania"
  ],

  group:
    "Scent Hounds and Related Breeds; Section 1.2: Medium-sized Hounds (Scenthound or Hound group in some registries)",

  origin: {
    country: "Hungary",
    region: "Forests of the Carpathian Mountains, in historic Transylvania"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Erd%C3%A9lyi_kop%C3%B3.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Erd%C3%A9lyi_kop%C3%B3.jpg",
      title: "Erdélyi kopó.jpg",
      description: "An adult Transylvanian Hound standing side-on outdoors.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2013-05-18",
      uploadedOn: "2013-05-18",
      width: 1478,
      height: 1157,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 3.0. Changes, if any, must be indicated; adaptations must be shared under the same license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Erd%C3%A9lyi_kop%C3%B3_-_1.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Erd%C3%A9lyi_kop%C3%B3_-_1.jpg",
      title: "Erdélyi kopó - 1.jpg",
      description: "A Transylvanian Hound photographed outdoors at Ópusztaszer, Hungary.",
      creator: "DenesFeri",
      uploader: "DenesFeri",
      capturedOn: "2019-09-11",
      uploadedOn: "2019-09-23",
      width: 1728,
      height: 2304,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by DenesFeri, Wikimedia Commons, CC BY-SA 4.0. Changes, if any, must be indicated; adaptations must be shared under the same license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08"
    }
  ],

  overview: {
    summary:
      "An old Hungarian scent hound from the Carpathian forests: black with tan points, built for long days on rough ground, calm by nature and loud and high-voiced on the trail.",

    description:
      "The Transylvanian Hound is a medium-sized scent hound, a little longer than it is tall, with a lean, muscular frame suited to steep, wooded country. Its head is long without being pointed, with a barely marked stop, a straight muzzle about as long as the skull, a black nose and dark brown almond-shaped eyes. The ears hang flat against the cheeks and, drawn forward, just cover the eyes. The short, dense, coarse coat has an undercoat and a natural shine; it is black with tan on the muzzle and legs and a tan spot over each eye, and white may appear on the face, neck, chest, feet and tail tip. Temperamentally it is good-natured, brave and tough, with a calm, steady core that turns determined and lively when it is hunting. It copes well with harsh weather and works independently, often far from the hunter.",

    history:
      "This is an ancient Hungarian breed, shaped by the climate, terrain and hunting conditions of its homeland. It reached its height in the Middle Ages as a favourite hound of the nobility. As farming and forestry changed, it was pushed back into the remote forests of the Carpathians, where two types developed and were kept side by side: a long-legged hound for big game such as bison, and later bear, boar and lynx, and a short-legged hound for foxes and hares in thick cover and chamois on rocky ground. The breed was close to extinction early in the twentieth century and declined again after the Second World War. Planned breeding resumed in 1968, and the long-legged type now has a sizeable population in Hungary and neighbouring Romania, while the short-legged type has died out. Hungary declared its native dog breeds, this one included, national treasures in 2004.",

    originalPurpose:
      "Finding, following and driving game, working alone or in pairs, including big game such as bear, boar and lynx in mountain forest.",

    currentRoles: ["Hunting hound for trailing and driving game", "Companion for active rural households"]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 55,
        max: 65
      },
      female: {
        min: 55,
        max: 65
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 25,
        max: null
      },
      female: {
        min: 25,
        max: null
      }
    },

    lifespanYears: {
      min: 10,
      max: 14
    },

    coatType:
      "Short, straight, dense, flat-lying and coarse, with a shine and an undercoat; longer on the neck, withers, back of the thighs and underside of the tail, where whorls and ridges may form",

    coatLength: "Short",

    coatColors: ["Black and tan", "Black and tan with white markings"],

    sheddingLevel: "Moderate",

    droolingLevel: "Low",

    distinctiveFeatures: [
      "Height at the withers to body length in a ratio of about 10 to 11",
      "Skull and muzzle about equal in length",
      "Slightly domed skull with a barely marked stop and a straight nasal bridge",
      "Black nose with wide, mobile nostrils",
      "Dark brown, almond-shaped, slightly slanting eyes",
      "Ears set medium-high, hanging flat to the cheeks and just covering the eyes when drawn forward",
      "Tan spot over each eye, tan on the muzzle and legs, all clearly separated from the black",
      "White may appear on the face, neck, chest, lower legs and tail tip, ideally on no more than a fifth of the body",
      "Strong tail reaching 1 to 2 cm past the hock, slightly upturned at the end at rest and carried over the back when excited",
      "Yelps when it first picks up a fresh scent and gives a loud, high, ringing voice while hunting"
    ]
  },

  temperament: {
    traits: [
      "Good-natured",
      "Courageous",
      "Tough and enduring",
      "Calm and even-tempered at home",
      "Determined and lively when working",
      "Independent worker that ranges far from the hunter",
      "Strong hunting drive"
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 3,
      independence: 4,
      trainability: 3,
      barking: 4,
      energy: 4
    }
  },

  care: {
    exercise: {
      level: "High. A working hound that needs long daily outings and regular use of its nose.",

      minutesPerDay: {
        min: 60,
        max: 120
      },

      activities: [
        "Long walks or hikes on a lead",
        "Free running only in large, securely fenced areas",
        "Scent trailing and tracking games",
        "Hunting or hound working trials where available"
      ]
    },

    grooming: {
      level: "Low",

      brushing: "A weekly rub with a hound mitt or firm bristle brush keeps the short coat clean.",

      bathing: "Only when dirty; the coarse coat sheds mud well once dry.",

      notes: [
        "Check feet, skin and coat for thorns, cuts and ticks after time in the woods.",
        "Trim nails if they do not wear down naturally.",
        "Look inside the hanging ears weekly and dry them after wet walks."
      ]
    },

    training: {
      difficulty:
        "Moderate. Good-natured and willing, but bred to work independently on scent, so recall away from home is hard to make reliable.",

      tips: [
        "Use food rewards and praise rather than force.",
        "Keep sessions short and varied.",
        "Train recall on a long line and do not rely on it near game.",
        "Give its nose regular work through tracking or scent games."
      ],

      socialization:
        "Introduce the puppy to many people, friendly dogs, traffic and household sounds. Early, calm experiences help the naturally steady temperament carry over into everyday life away from the hunt."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cold and snowy climates",
        "Temperate climates",
        "Warm climates if shade, water and exercise in the cooler hours are provided"
      ],

      aloneTimeTolerance:
        "Moderate. Usually settles if well exercised, but a bored hound may bay or dig."
    }
  },

  nutrition: {
    dietType:
      "A complete and balanced diet for a medium-sized active dog, adjusted for workload and season.",

    feedingFrequency: {
      puppy: "Three to four meals a day, dropping to two by about six months.",
      adult: "Two measured meals a day.",
      senior: "Two smaller meals a day, adjusted to keep the dog lean."
    },

    guidelines:
      "Measure meals and adjust portions so the ribs are easy to feel. Increase food during hunting season or hard work and cut back in quiet months. Keep fresh water available.",

    considerations: [
      "Keep the dog lean and muscular.",
      "Count treats as part of the daily ration.",
      "Let the dog rest around mealtimes.",
      "Change foods gradually over about a week."
    ],

    note: "Energy needs vary widely between a working hound and a pet; a veterinarian can help set the right amount."
  },

  health: {
    overview:
      "Little published health information exists for this rare breed, and no condition has been shown to be common in it. Owners should give it the routine care any active medium-sized hound needs: joint-friendly feeding and weight control, regular ear checks for the hanging ears, and tick and parasite prevention for a dog that spends time in the woods. Ask breeders what health checks they carry out on their breeding dogs.",

    commonConditions: [],

    preventiveCare: [
      "Ask breeders about hip and elbow checks on the parents.",
      "Keep the dog lean.",
      "Check and dry the ears weekly.",
      "Use year-round tick and flea prevention, especially in forest areas.",
      "Check for cuts and thorns after outings.",
      "Book a yearly veterinary check-up."
    ],

    recommendedScreenings: [],

    dentalCare: "Brush the teeth several times a week and have them checked at routine vet visits.",

    earCare:
      "Check the hanging ears weekly for wax, moisture or smell, and clean the visible part with a vet-approved cleaner if needed.",

    skinCare: "Run a hand over the coat after walks to find ticks, scratches or sore spots."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Hunters wanting a hound that trails and drives game",
      "Experienced owners used to independent scent hounds",
      "Rural homes with secure fencing",
      "Active people who walk long distances every day"
    ],

    notIdealFor: [
      "Apartment living",
      "Owners wanting reliable off-lead recall",
      "Homes with free-roaming small pets",
      "People who cannot give long daily exercise"
    ]
  },

  funFacts: [
    "It is one of nine dog breeds that Hungarian law recognises as native Hungarian breeds.",
    "Two types once existed side by side: a long-legged hound for big game and a short-legged one for fox, hare and chamois. Only the long-legged type survives.",
    "Its working voice changes with the job: a whining yelp on a fresh scent, then a loud, high, ringing bark during the chase.",
    "In 2004 Hungary's parliament declared the country's native dog breeds, this one included, national treasures.",
    "In 2023 Hungary's central bank issued a collector coin featuring the breed."
  ],

  faq: [
    {
      question: "Where does the Transylvanian Hound come from?",
      answer:
        "It is a Hungarian breed that developed in the Carpathian forests of historic Transylvania. Today it is found mainly in Hungary and Romania."
    },
    {
      question: "How big is it?",
      answer:
        "It stands 55 to 65 cm at the withers, with no separate figures for males and females. The minimum weight is 25 kg."
    },
    {
      question: "What colour is it?",
      answer:
        "Black with tan on the muzzle and legs and a tan spot over each eye. White markings on the face, neck, chest, feet and tail tip are allowed."
    },
    {
      question: "Is it a good family dog?",
      answer:
        "It is good-natured and calm at home, but it is a working hound with a strong hunting drive. It suits experienced, active owners best."
    },
    {
      question: "Can it live in an apartment?",
      answer:
        "Not well. It needs long daily exercise and secure outdoor space, and its hunting voice is loud."
    },
    {
      question: "Are there known health problems?",
      answer:
        "Breed-specific health data is very limited, and no condition is known to be common. Routine care for an active hound, plus questions to the breeder about health checks, is the sensible approach."
    }
  ],

  references: [
    "fci-transylvanian-hound-official-standard",
    "fci-transylvanian-hound-nomenclature",
    "ukc-transylvanian-hound-breed-standard",
    "akc-transylvanian-hound-breed-profile",
    "mnb-erdelyi-kopo-collector-coin-2023",
    "hungarian-native-dog-breeds-decree-2016",
    "petmd-transylvanian-hound",
    "meoesz-erdelyi-kopo-breed-profile",
    "the-dog-api",
    "wikimedia-erdelyi-kopo-canarian",
    "wikimedia-transylvanian-hound-denesferi"
  ],

  evidence: {
    scientificName: {
      reliability: "unverified",
      sources: [],
      verifiedOn: null,
      note: "Canis lupus familiaris is the domestic-dog name used across the catalog; breed standards do not state it."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-transylvanian-hound-nomenclature",
          role: "verified",
          locator: "EN Hungarian Hound - Transylvanian Scent Hound; FR Chien Courant de Transylvanie; DE Ungarische Bracke - Transylvanischer Laufhund; ES Sabueso Húngaro - Sabueso de Transilvania"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Corrected 'Chien Courant Transylvanien' to FCI's 'Chien Courant de Transylvanie'. Removed 'Siebenbürgen Bracke', which no source checked uses."
    },

    group: {
      reliability: "official_standard",
      sources: [
        { id: "fci-transylvanian-hound-official-standard", role: "verified", locator: "FCI classification: Group 6, Section 1.2 Medium-sized Hounds, with working trial" },
        { id: "ukc-transylvanian-hound-breed-standard", role: "verified", locator: "Scenthound Group" }
      ],
      verifiedOn: "2026-11-17",
      note: "The AKC profile page read on 2026-11-17 did not show a group."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        { id: "fci-transylvanian-hound-official-standard", role: "verified", locator: "Origin: Hungary; Brief history: Carpathian Mountain forests" },
        { id: "fci-transylvanian-hound-nomenclature", role: "verified", locator: "Country of origin: Hungary" }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        { id: "fci-transylvanian-hound-official-standard", role: "verified", locator: "Utilization; Brief history; Behaviour/temperament; Proportions; Head; Ears; Coat; Colour" },
        { id: "ukc-transylvanian-hound-breed-standard", role: "verified", locator: "History; Characteristics" }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "overview.history": {
      reliability: "reliable_source",
      sources: [
        { id: "fci-transylvanian-hound-official-standard", role: "verified", locator: "Brief history: Middle Ages; two varieties; near extinction early 20th century; breeding resumed 1968; short-legged variety disappeared" },
        { id: "mnb-erdelyi-kopo-collector-coin-2023", role: "verified", locator: "Post-WWII decline; bred again from 1968; national treasure declaration 2004" }
      ],
      verifiedOn: "2026-11-17",
      note: "Removed for lack of a reliable source: Magyar tribes and Celtic hounds in the ninth century, royal courts, Transylvanian princes, and survivors 'recovered from isolated valleys'."
    },

    "overview.currentRoles": {
      reliability: "estimate",
      sources: [
        { id: "fci-transylvanian-hound-official-standard", role: "cited", locator: "Utilization" }
      ],
      verifiedOn: null,
      note: "Search-and-rescue and detection roles in the earlier record were not supported and were removed."
    },

    "physical.sizeCategory": {
      reliability: "official_standard",
      sources: [
        { id: "fci-transylvanian-hound-official-standard", role: "verified", locator: "FCI classification: Medium-sized Hounds" }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    physical: {
      reliability: "official_standard",
      sources: [
        { id: "fci-transylvanian-hound-official-standard", role: "verified", locator: "Proportions; Head; Eyes; Ears; Tail; Coat; Colour" },
        { id: "ukc-transylvanian-hound-breed-standard", role: "cited", locator: "Color" }
      ],
      verifiedOn: "2026-11-17",
      note: "The standard does not state a tooth count, so the earlier '42 teeth' was removed. Ears reach the eyes, not the mouth."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        { id: "fci-transylvanian-hound-official-standard", role: "verified", locator: "Size: height at withers 55 to 65 cm; no separate figures by sex" },
        { id: "ukc-transylvanian-hound-breed-standard", role: "verified", locator: "Height at the withers is 21.5 to 25.5 inches" },
        { id: "the-dog-api", role: "conflicting", locator: "breed.height.metric: males 55-66, females 51-62 cm" }
      ],
      verifiedOn: "2026-11-17",
      note: "Stored in centimetres as FCI publishes. The 'ideal 58 to 62 cm' in the earlier record is not in the FCI standard and was removed."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        { id: "fci-transylvanian-hound-official-standard", role: "verified", locator: "Weight: minimum 25 kg" },
        { id: "ukc-transylvanian-hound-breed-standard", role: "verified", locator: "Minimum weight is 55 pounds" }
      ],
      verifiedOn: "2026-11-17",
      note: "Only a minimum is published. The earlier 35 kg maximum was not found in any standard and was removed."
    },

    "physical.weight.male.max": {
      reliability: "unavailable",
      sources: [
        { id: "the-dog-api", role: "conflicting", locator: "breed.weight.metric: 25-35 kg" }
      ],
      verifiedOn: null,
      note: "No standard gives a maximum weight."
    },

    "physical.weight.female.max": {
      reliability: "unavailable",
      sources: [
        { id: "the-dog-api", role: "conflicting", locator: "breed.weight.metric: 25-30 kg" }
      ],
      verifiedOn: null,
      note: "No standard gives a maximum weight."
    },

    "physical.lifespanYears": {
      reliability: "unverified",
      sources: [
        { id: "the-dog-api", role: "cited", locator: "breed.life_span: 10-14 years" },
        { id: "petmd-transylvanian-hound", role: "conflicting", locator: "Average 10 to 12 years" }
      ],
      verifiedOn: null,
      note: "No kennel club, breed club or scientific source checked gives a lifespan."
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        { id: "petmd-transylvanian-hound", role: "cited", locator: "Sheds an average amount" }
      ],
      verifiedOn: null,
      note: null
    },

    "physical.droolingLevel": {
      reliability: "estimate",
      sources: [
        { id: "fci-transylvanian-hound-official-standard", role: "cited", locator: "Lips: dry and tight-fitting" }
      ],
      verifiedOn: null,
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        { id: "fci-transylvanian-hound-official-standard", role: "verified", locator: "Behaviour/temperament; Utilization (works independently, far from handler)" },
        { id: "ukc-transylvanian-hound-breed-standard", role: "verified", locator: "Good natured and courageous, quiet but determined" },
        { id: "akc-transylvanian-hound-breed-profile", role: "cited", locator: "Good-natured, courageous, enduring; quiet and even, determined and lively" }
      ],
      verifiedOn: "2026-11-17",
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
      note: "General care advice for an active, short-coated scent hound."
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
        { id: "fci-transylvanian-hound-official-standard", role: "cited", locator: "Tolerates extreme weather" }
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
      sources: [
        { id: "petmd-transylvanian-hound", role: "cited", locator: "Generally healthy; hip and elbow dysplasia mentioned as issues to be aware of" }
      ],
      verifiedOn: null,
      note: "General preventive care for an active hound."
    },

    "health.commonConditions": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific prevalence data was found. Hip and elbow dysplasia, bloat, ear infections, field injuries and tick-borne disease were listed before without a breed-specific source; they are now covered only as general preventive advice."
    },

    "health.recommendedScreenings": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The earlier claim of a Hungarian hip-screening requirement could not be confirmed; the cited MEOESZ URL opens the club's homepage, not a breed page."
    },

    suitability: {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial judgement."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        { id: "hungarian-native-dog-breeds-decree-2016", role: "verified", locator: "List of Hungarian dog breeds: (b) erdélyi kopó, among nine" },
        { id: "fci-transylvanian-hound-official-standard", role: "verified", locator: "Brief history (two varieties); Utilization (voice)" },
        { id: "mnb-erdelyi-kopo-collector-coin-2023", role: "verified", locator: "2004 national treasure declaration; 2023 collector coin" }
      ],
      verifiedOn: "2026-11-17",
      note: "Removed for lack of a reliable source: royal tapestries and chronicles, 'four-eyes' folklore, and handlers hearing the dog several kilometres away."
    },

    faq: {
      reliability: "estimate",
      sources: [
        { id: "fci-transylvanian-hound-official-standard", role: "cited", locator: "Origin; Size; Colour" }
      ],
      verifiedOn: null,
      note: "Factual answers follow the FCI standard; suitability and health answers are editorial."
    }
  },

  updatedOn: "2026-11-17"
};
