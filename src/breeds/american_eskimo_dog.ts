import type { Breed } from "../schema/breed.types";

export const american_eskimo_dog: Breed = {
  slug: "american-eskimo-dog",
  name: "American Eskimo Dog",
  scientificName: "Canis lupus familiaris",

  alternateNames: ["Eskie"],

  group: "Non-Sporting Group; Northern Breed Group in some registries",

  origin: {
    country: "United States",
    region: null
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/American_Eskimo_Dog_1.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:American_Eskimo_Dog_1.jpg",
      title: "American Eskimo Dog 1.jpg",
      description: "An adult American Eskimo Dog standing outdoors on grass.",
      creator: "timquinn",
      uploader: "Flickr upload bot",
      capturedOn: "2007-06-10",
      uploadedOn: "2007-07-28",
      width: 2816,
      height: 2112,
      licenseId: "cc-by-2.0",
      attribution: "Photo by timquinn, Wikimedia Commons, CC BY 2.0. Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/American_Eskimo_Dog_2.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:American_Eskimo_Dog_2.jpg",
      title: "American Eskimo Dog 2.jpg",
      description: "An adult American Eskimo Dog seen side-on outdoors.",
      creator: "timquinn",
      uploader: "Flickr upload bot",
      capturedOn: "2007-06-10",
      uploadedOn: "2007-07-28",
      width: 2816,
      height: 2112,
      licenseId: "cc-by-2.0",
      attribution: "Photo by timquinn, Wikimedia Commons, CC BY 2.0. Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08"
    }
  ],

  overview: {
    summary:
      "A white spitz companion bred in the United States from German stock, sized from toy to standard, with a thick stand-off coat, a quick mind and a watchful but non-aggressive nature.",

    description:
      "The American Eskimo Dog is a compact, well-balanced spitz of northern type, always white or white with biscuit cream. Its body is a touch longer than it is tall, and it moves at a light, effortless trot. A wedge-shaped head carries erect triangular ears and oval brown eyes set off by dark rims, dark lips and a dark nose. The straight double coat stands away from the body and is fullest around the neck and chest, especially in males, while the well-feathered tail is carried loosely over the back. The breed comes in three height divisions that share the same build. By temperament it is bright, alert and friendly with its family, a little reserved with strangers at first, and quick to sound the alarm without being inclined to bite. It learns fast and generally enjoys working for its people.",

    history:
      "The breed's roots lie in the white spitz dogs of Germany, which were kept there as all-purpose farm dogs and household watchdogs. Immigrants brought these dogs to the United States, where the white variety became popular. Once known as the German Spitz, the breed took on the name American Eskimo around the time of the First World War, when anything German had fallen out of favour; the new name matched the kennel name used by an early breeding couple who registered their dogs with a US registry. In the 1930s these white spitz dogs were crowd-pleasers in travelling circuses, which also sold many puppies, so a large share of today's dogs descend from circus lines. A breed club formed when the studbook closed in 1969, and full recognition by the largest US registry followed in the mid-1990s.",

    originalPurpose: "Farm dog, household watchdog and companion.",

    currentRoles: ["Family companion", "Watchdog"]
  },

  physical: {
    sizeCategory: "Small to medium",

    height: {
      unit: "in",
      male: {
        min: 9,
        max: 19
      },
      female: {
        min: 9,
        max: 19
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 6,
        max: 35
      },
      female: {
        min: 6,
        max: 35
      }
    },

    lifespanYears: {
      min: 13,
      max: 15
    },

    coatType:
      "Stand-off double coat: a dense undercoat beneath longer, straight guard hair with no curl or wave; a ruff at the neck that is fuller in males, feathered legs and a heavily plumed tail",

    coatLength: "Medium",

    coatColors: ["White", "White with biscuit cream"],

    sheddingLevel: "High, with heavier seasonal sheds",

    droolingLevel: "Low",

    distinctiveFeatures: [
      "Three height divisions with the same build: Toy 9 to 12 inches, Miniature over 12 to 15 inches, Standard over 15 to 19 inches",
      "Body slightly longer than tall, about 1.1 to 1",
      "Wedge-shaped head with erect, triangular ears that are slightly blunt at the tips",
      "Slightly oval, dark to medium brown eyes with black to dark brown rims and white lashes",
      "Black to dark brown nose and lips against the white coat",
      "Ruff around the neck and chest, more pronounced in males",
      "Plumed tail carried loosely over the back, often dropped at rest",
      "Agile, balanced trot that converges toward a single track at speed"
    ]
  },

  temperament: {
    traits: [
      "Intelligent and quick to learn",
      "Alert and energetic",
      "Friendly and loyal with its family",
      "Somewhat reserved with strangers at first",
      "Keen watchdog that is protective without being aggressive",
      "Eager to please"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 3,
      independence: 2,
      trainability: 5,
      barking: 4,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "Moderate to high. Needs daily exercise plus regular training or games to keep its busy mind occupied.",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Brisk daily walks",
        "Fetch and active play in a secure area",
        "Trick training and puzzle games",
        "Dog sports such as agility, rally and obedience",
        "Scent games"
      ]
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush right down to the skin two or three times a week, and daily while the dog is shedding heavily, so loose undercoat does not mat.",

      bathing:
        "Bathe every month or two, or when dirty, and dry the coat thoroughly to the skin afterwards.",

      notes: [
        "Do not shave the double coat; it insulates against both cold and sun.",
        "Wipe under the eyes regularly if tear staining shows on the white fur.",
        "Trim nails every few weeks and tidy the hair between the paw pads.",
        "Check the erect ears weekly for dirt or redness."
      ]
    },

    training: {
      difficulty:
        "Easy to moderate. Learns quickly and likes rewards, but gets bored with repetition and may invent its own entertainment.",

      tips: [
        "Use praise, play and small treats as rewards.",
        "Keep sessions short, upbeat and varied.",
        "Teach a 'quiet' cue early to manage alert barking.",
        "Avoid harsh corrections, which can make a sensitive dog lose confidence.",
        "Give chew toys and food puzzles for time alone."
      ],

      socialization:
        "Introduce the puppy calmly to many kinds of people, friendly vaccinated dogs, household noises and new places. Because the breed tends to be reserved with strangers, steady early exposure helps it grow into a confident adult that accepts visitors politely."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Cold and snowy climates",
        "Temperate climates",
        "Warm climates if the dog has shade, cool indoor rest and water, and exercises in the cooler hours"
      ],

      aloneTimeTolerance:
        "Low to moderate. A people-oriented dog that may bark or chew if often left alone for long periods without something to do."
    }
  },

  nutrition: {
    dietType:
      "A complete and balanced diet suited to the dog's size division, age and activity level.",

    feedingFrequency: {
      puppy: "Three to four small meals a day, dropping to two meals by about six months.",
      adult: "Two measured meals a day.",
      senior: "Two smaller meals a day, adjusted to keep the dog lean."
    },

    guidelines:
      "Measure each meal and feel for the ribs under the thick coat to judge body condition, since the fur can hide weight gain. Adjust portions to keep the dog trim, and keep fresh water available at all times.",

    considerations: [
      "Keep the dog lean; extra weight strains joints, and the coat can hide it.",
      "Count training treats as part of the daily ration.",
      "Choose kibble size to suit Toy and Miniature dogs.",
      "Avoid fatty table scraps.",
      "Change foods gradually over about a week."
    ],

    note:
      "Daily needs vary a lot between a 6 lb Toy and a 35 lb Standard. A veterinarian can help set the right amount."
  },

  health: {
    overview:
      "The breed is generally long-lived, often reaching its early to mid teens. The national breed club asks breeders to check hips and eyes and to DNA-test for an inherited form of progressive retinal atrophy. Diabetes has been studied specifically in this breed and appears to have a strong inherited component. A genetic diversity study found that Standard-sized dogs carry noticeably less diversity than Toy and Miniature dogs, which makes careful mate selection important.",

    commonConditions: [
      "Progressive retinal atrophy (prcd type): an inherited, recessive eye disease that slowly destroys the retina and leads to blindness; breeding dogs are DNA-tested for it",
      "Hip dysplasia: a malformed hip joint that can cause arthritis; breeding dogs are screened by X-ray",
      "Diabetes mellitus: studied in this breed, where it appears heritable and influenced by many genes"
    ],

    preventiveCare: [
      "Ask breeders for hip, eye and prcd-PRA DNA results on both parents.",
      "Keep the dog at a lean weight.",
      "Watch for increased thirst, frequent urination or weight loss, and see a vet promptly if they appear.",
      "Have the eyes checked if the dog seems to struggle in dim light.",
      "Brush the teeth several times a week and book a yearly vet check-up."
    ],

    recommendedScreenings: [
      "Hip evaluation by X-ray after 24 months of age",
      "Eye examination by a veterinary ophthalmologist after 24 months of age",
      "DNA test for progressive retinal atrophy (prcd-PRA), at any age"
    ],

    dentalCare:
      "Brush several times a week with a dog toothpaste; small dogs in particular build up tartar quickly, so include the teeth in routine vet checks.",

    earCare:
      "Look inside the erect ears weekly and wipe away visible dirt with a vet-approved cleaner if needed.",

    skinCare:
      "Part the dense coat when brushing to check the skin for parasites, dryness or hot spots, and make sure the coat is fully dry after baths."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Families who want a bright, people-focused companion",
      "First-time owners willing to train consistently and brush regularly",
      "Apartment or house dwellers who provide daily walks and play",
      "Older owners suited to a Toy or Miniature dog",
      "People interested in trick training or dog sports"
    ],

    notIdealFor: [
      "Homes that cannot tolerate white dog hair",
      "Owners away for long hours every day",
      "People who need a quiet dog",
      "Anyone wanting an outdoor-only dog"
    ]
  },

  funFacts: [
    "Despite its name, the breed has no link to Arctic peoples; it descends from German white spitz dogs.",
    "The name 'American Eskimo' came from the kennel name of an early breeding couple.",
    "In the 1930s these dogs were popular circus acts, and many of today's dogs trace back to circus-bred puppies.",
    "It is shown in three sizes, Toy, Miniature and Standard, that differ only in height.",
    "A US registry recognised the breed back in 1913, decades before the largest US registry approved its standard in 1994."
  ],

  faq: [
    {
      question: "Where does the American Eskimo Dog come from?",
      answer:
        "It was developed in the United States from white German spitz dogs brought over by immigrants. It took its current name around the First World War."
    },
    {
      question: "How big does it get?",
      answer:
        "There are three size divisions measured at the shoulder: Toy is 9 to 12 inches, Miniature is over 12 to 15 inches, and Standard is over 15 to 19 inches. Weight follows height, from about 6 lb in the smallest Toys to around 35 lb in the largest Standards."
    },
    {
      question: "What colours does it come in?",
      answer: "White is preferred; white with biscuit cream is also accepted."
    },
    {
      question: "How long does it live?",
      answer: "Most live into their early to mid teens, commonly around 13 to 15 years."
    },
    {
      question: "Does it shed much?",
      answer:
        "Yes. The thick double coat sheds steadily and more heavily in seasonal bursts. Brushing two or three times a week, and daily during heavy sheds, keeps it under control. Don't shave it."
    },
    {
      question: "Is it good with children?",
      answer:
        "It is usually affectionate and playful with its own family. Supervise young children with Toy dogs, which are small and easily hurt."
    },
    {
      question: "Can it live in an apartment?",
      answer:
        "Yes, especially the smaller sizes, as long as it gets daily exercise and mental work. Teach a 'quiet' cue early, because it is quick to bark at noises."
    },
    {
      question: "Is it easy to train?",
      answer:
        "It is clever and keen to please, so it learns fast with rewards and games. Short, varied sessions keep it interested."
    },
    {
      question: "What health tests should a breeder do?",
      answer:
        "Look for a hip X-ray result and a specialist eye examination on both parents, each done after two years of age, plus a DNA test for progressive retinal atrophy (prcd-PRA)."
    }
  ],

  references: [
    "akc-american-eskimo-dog-breed-standard",
    "ukc-american-eskimo-dog-breed-standard",
    "american-eskimo-dog-club-of-america-health",
    "akc-coton-de-tulear-health-testing-recommendations",
    "ucdavis-vgl-american-eskimo-dog-genetic-diversity-2021",
    "cai-2019-american-eskimo-dog-diabetes-heritability",
    "american-eskimo-dog-prcd-pra-study-2006",
    "akc-american-eskimo-dog-breed-profile",
    "healthy-paws-american-eskimo-dog",
    "hills-american-eskimo-dog",
    "the-dog-api",
    "wikimedia-american-eskimo-dog-1-timquinn",
    "wikimedia-american-eskimo-dog-2-timquinn"
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
        { id: "the-dog-api", role: "verified", locator: "breed.alt_names: Eskie" }
      ],
      verifiedOn: "2026-11-17",
      note:
        "'German Spitz', 'White German Spitz', 'American Spitz' and 'Spitz' were removed. German Spitz is the breed's former name in its history, but it is also a separate FCI breed, so listing it as an alternate name would mislead search."
    },

    group: {
      reliability: "official_standard",
      sources: [
        { id: "akc-american-eskimo-dog-breed-standard", role: "cited", locator: "Non-Sporting Group (AKC breed standard)" },
        { id: "ukc-american-eskimo-dog-breed-standard", role: "verified", locator: "Northern Breed Group" },
        { id: "akc-coton-de-tulear-health-testing-recommendations", role: "verified", locator: "Breed listed under Non-Sporting Group" }
      ],
      verifiedOn: "2026-11-17",
      note: "AKC Non-Sporting Group; UKC Northern Breed Group. 'Companion Dog group' in the earlier record was not found in any source checked."
    },

    "origin.country": {
      reliability: "reliable_source",
      sources: [
        { id: "ucdavis-vgl-american-eskimo-dog-genetic-diversity-2021", role: "verified", locator: "Breed history: German Spitz brought to the US by immigrants; renamed on UKC registration" },
        { id: "ukc-american-eskimo-dog-breed-standard", role: "verified", locator: "History" }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The earlier 'Ohio, Indiana and Wisconsin' was not found in any source checked."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        { id: "akc-american-eskimo-dog-breed-standard", role: "verified", locator: "General Appearance; Size, Proportion; Head; Coat; Color; Gait; Temperament" },
        { id: "ukc-american-eskimo-dog-breed-standard", role: "verified", locator: "Characteristics; History" }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "overview.history": {
      reliability: "reliable_source",
      sources: [
        { id: "ukc-american-eskimo-dog-breed-standard", role: "verified", locator: "History: German Spitz; immigrants; renamed American Eskimo in 1917 during WWI" },
        { id: "ucdavis-vgl-american-eskimo-dog-genetic-diversity-2021", role: "verified", locator: "Breed History: farm dog in Germany; Hall kennel name 'American Eskimo'; 1930s circuses; studbook closed 1969; AKC 1995" }
      ],
      verifiedOn: "2026-11-17",
      note:
        "UKC dates the rename to 1917; UC Davis places it after WWI. The circus dog 'Pierre' was removed because no reliable source for it was found."
    },

    "overview.originalPurpose": {
      reliability: "reliable_source",
      sources: [
        { id: "ucdavis-vgl-american-eskimo-dog-genetic-diversity-2021", role: "verified", locator: "Originally bred in Germany as a multipurpose farm dog" },
        { id: "ukc-american-eskimo-dog-breed-standard", role: "verified", locator: "History: watchdogs and family pets" }
      ],
      verifiedOn: "2026-11-17",
      note: "'Ratter' and 'circus trick performer' were removed as original purposes."
    },

    "physical.sizeCategory": {
      reliability: "official_standard",
      sources: [
        { id: "akc-american-eskimo-dog-breed-standard", role: "verified", locator: "General Appearance: small to medium size Nordic type dog" }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    physical: {
      reliability: "official_standard",
      sources: [
        { id: "akc-american-eskimo-dog-breed-standard", role: "verified", locator: "Size, Proportion; Head; Tail; Coat; Color; Gait" },
        { id: "ukc-american-eskimo-dog-breed-standard", role: "cited", locator: "Coat; Color (also permits cream); Eyes; Ears; Tail" }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Colours follow AKC: pure white preferred, white with biscuit cream permissible. UKC also permits solid cream. The Dog API colour list was not used."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        { id: "akc-american-eskimo-dog-breed-standard", role: "verified", locator: "Size: Toy 9-12 in; Miniature over 12-15 in; Standard over 15-19 in; under 9 or over 19 in disqualified" },
        { id: "ukc-american-eskimo-dog-breed-standard", role: "conflicting", locator: "Height: Miniature males 9-15 in, females 9-14 in; Standard males over 15-19 in, females over 14-18 in" },
        { id: "the-dog-api", role: "conflicting", locator: "breed.height.metric: 23-48 cm" }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Stored in inches as the AKC standard publishes, which does not separate the sexes. UKC recognises only Miniature and Standard and sets a lower top height for females (18 in)."
    },

    "physical.weight": {
      reliability: "unverified",
      sources: [
        { id: "akc-american-eskimo-dog-breed-profile", role: "cited", locator: "Weight: Toy 6-10 lb, Miniature 10-20 lb, Standard 25-35 lb (as widely attributed)" },
        { id: "healthy-paws-american-eskimo-dog", role: "cited", locator: "Toy 6-10 lb; Miniature 10-20 lb; Standard 25-35 lb" },
        { id: "hills-american-eskimo-dog", role: "conflicting", locator: "Males: Toy 8-11, Miniature 12-21, Standard 22-40 lb; Females: Toy 6-9, Miniature 10-19, Standard 20-35 lb" }
      ],
      verifiedOn: null,
      note:
        "Neither breed standard gives weight. The AKC profile page could not be read on 2026-11-17, so the 6-35 lb span is recorded but not verified."
    },

    "physical.lifespanYears": {
      reliability: "unverified",
      sources: [
        { id: "akc-american-eskimo-dog-breed-profile", role: "cited", locator: "Life expectancy 13-15 years (as widely attributed)" },
        { id: "healthy-paws-american-eskimo-dog", role: "cited", locator: "Average life expectancy 13 to 15 years" },
        { id: "hills-american-eskimo-dog", role: "conflicting", locator: "Longevity 12-14 yrs" }
      ],
      verifiedOn: null,
      note: "The AKC profile page could not be read on 2026-11-17."
    },

    "physical.coatLength": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial label; the standards describe the coat but give no length category."
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        { id: "healthy-paws-american-eskimo-dog", role: "cited", locator: "Amount of shedding: High" }
      ],
      verifiedOn: null,
      note: null
    },

    "physical.droolingLevel": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial estimate; no source checked states a drooling level."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        { id: "akc-american-eskimo-dog-breed-standard", role: "verified", locator: "Temperament: intelligent, alert, friendly, slightly conservative; excellent watchdog; learns quickly, eager to please" },
        { id: "ukc-american-eskimo-dog-breed-standard", role: "verified", locator: "Characteristics: intelligent, alert, energetic, loyal, friendly, conservative with strangers" }
      ],
      verifiedOn: "2026-11-17",
      note: "'Eskie smile' and separation-anxiety claims were removed because no reliable source for them was found."
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        { id: "akc-american-eskimo-dog-breed-standard", role: "cited", locator: "Temperament" }
      ],
      verifiedOn: null,
      note: "Editorial 1-5 scores."
    },

    care: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General care advice for small to medium double-coated spitz dogs."
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial estimate; no source checked gives minutes per day."
    },

    "care.livingEnvironment": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial judgement from size, coat and watchdog barking."
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
      note: "General preventive care advice."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        { id: "american-eskimo-dog-club-of-america-health", role: "verified", locator: "Recommended tests: OFA hips and OFA/CERF eyes after 24 months; prcd-PRA DNA at any age" },
        { id: "cai-2019-american-eskimo-dog-diabetes-heritability", role: "verified", locator: "Abstract: heritability 0.62, polygenic, no single gene of large effect" },
        { id: "ucdavis-vgl-american-eskimo-dog-genetic-diversity-2021", role: "verified", locator: "Conclusions: low overall diversity; Standards most inbred (mean ~6.8%); Toy and Miniature more diverse" },
        { id: "healthy-paws-american-eskimo-dog", role: "cited", locator: "Life expectancy 13 to 15 years" }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        { id: "american-eskimo-dog-club-of-america-health", role: "verified", locator: "prcd-PRA DNA test and OFA hip exam required" },
        { id: "akc-coton-de-tulear-health-testing-recommendations", role: "verified", locator: "American Eskimo Dog: Hip Evaluation; Ophthalmologist Evaluation; PRA-prcd DNA Test" },
        { id: "cai-2019-american-eskimo-dog-diabetes-heritability", role: "verified", locator: "Diabetes mellitus in AED: heritable, polygenic" },
        { id: "american-eskimo-dog-prcd-pra-study-2006", role: "cited", locator: "PRCD mutation causes autosomal recessive progressive rod-cone degeneration" }
      ],
      verifiedOn: "2026-11-17",
      note:
        "These are conditions screened for or studied in the breed; no source gives breed prevalence, so the wording avoids calling them common. Removed for lack of a reliable breed-specific source: primary lens luxation, patellar luxation, cataracts, autoimmune thyroiditis and tear staining as a disease. The breed club statement checked does not name PLL, patellar luxation or thyroid disease."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        { id: "american-eskimo-dog-club-of-america-health", role: "verified", locator: "OFA hip exam after 24 months; OFA or CERF eye exam after 24 months; prcd-PRA genetic test at any age" },
        { id: "akc-coton-de-tulear-health-testing-recommendations", role: "verified", locator: "Hip Evaluation; Ophthalmologist Evaluation; PRA-prcd DNA Test" }
      ],
      verifiedOn: "2026-11-17",
      note: "Patella evaluation, PLL DNA test and thyroid panel were removed; neither the breed club statement nor the AKC page lists them."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        { id: "akc-american-eskimo-dog-breed-standard", role: "cited", locator: "Temperament" }
      ],
      verifiedOn: null,
      note: "Editorial judgement."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        { id: "ukc-american-eskimo-dog-breed-standard", role: "verified", locator: "History; recognised by UKC in 1913" },
        { id: "ucdavis-vgl-american-eskimo-dog-genetic-diversity-2021", role: "verified", locator: "Breed History: Hall kennel name; 1930s circuses and puppy sales" },
        { id: "akc-american-eskimo-dog-breed-standard", role: "verified", locator: "Size divisions; standard approved October 11, 1994" }
      ],
      verifiedOn: "2026-11-17",
      note: "'The Dog Beautiful', 'Eskie smile', 'spectacles' and the Pierre tightrope story were removed because no reliable source for them was found."
    },

    faq: {
      reliability: "estimate",
      sources: [
        { id: "akc-american-eskimo-dog-breed-standard", role: "cited", locator: "Size; Color" },
        { id: "american-eskimo-dog-club-of-america-health", role: "cited", locator: "Recommended health tests" }
      ],
      verifiedOn: null,
      note: "Size, colour and health-test answers follow the cited sources; lifespan, weight and care answers are unverified or editorial, so the FAQ as a whole is labelled estimate."
    }
  },

  updatedOn: "2026-11-17"
};
