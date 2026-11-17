import type { Breed } from "../schema/breed.types";

export const finnish_spitz: Breed = {
  slug: "finnish-spitz",
  name: "Finnish Spitz",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Suomenpystykorva",
    "Finsk Spets",
    "Finkie",
    "Finnish Barking Bird Dog",
    "Barking Bird Dog",
    "Spitz Finlandais",
    "Finnen-Spitz",
    "Spitz Finlandés"
  ],

  group:
    "Spitz and Primitive Types; Section 2: Nordic Hunting Dogs (Non-Sporting or Hound group in some registries)",

  origin: {
    country: "Finland",
    region: null
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Finnish_Spitz.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Finnish_Spitz.jpg",
      title: "Finnish Spitz.jpg",
      description: "An adult Finnish Spitz photographed at the 2006 World Dog Show in Poznań.",
      creator: "PrzemekL",
      uploader: "PrzemekL",
      capturedOn: "2006-11-09",
      uploadedOn: "2006-11-14",
      width: 2048,
      height: 1536,
      licenseId: "public-domain",
      attribution: "Photo by PrzemekL, Wikimedia Commons, public domain.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Finnish_Spitz_-_GCH_Dv9k9%27s_Red_Hot_Star_aka_Rocket_2_(16576435166).jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Finnish_Spitz_-_GCH_Dv9k9%27s_Red_Hot_Star_aka_Rocket_2_(16576435166).jpg",
      title: "Finnish Spitz - GCH Dv9k9's Red Hot Star aka Rocket 2 (16576435166).jpg",
      description: "A Finnish Spitz show champion photographed in February 2015.",
      creator: "Pets Adviser",
      uploader: "Томасина",
      capturedOn: "2015-02-16",
      uploadedOn: "2015-03-21",
      width: 3008,
      height: 2000,
      licenseId: "cc-by-2.0",
      attribution: "Photo by Pets Adviser, Wikimedia Commons, CC BY 2.0. Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08"
    }
  ],

  overview: {
    summary:
      "Finland's national dog: a square, fox-like red spitz bred to find forest birds and hold them in place by barking, lively and brave in the field and friendly at home.",

    description:
      "The Finnish Spitz is a square-built Nordic hunting dog whose body is as long as it is tall, with a chest reaching just under half its height. Its fox-like head carries small, pointed, very mobile ears that stand erect, dark almond-shaped eyes with a bright, alert look, and a small jet-black nose. The stand-off coat is bright red or golden red over the back, paler on the cheeks, chest, belly and inner legs, with a short, soft, light-coloured undercoat; the hair is stiffer and longer over the neck and shoulders, most noticeably in males. A plumed tail curls forward over the back and drops against the thigh. In the forest it works independently, locating game and announcing it with persistent barking. At home it is lively, energetic and sociable with its family, a little reserved with strangers but never vicious, and quick to learn, though its independent streak calls for consistent training.",

    history:
      "Dogs of this type were used for hunting all kinds of game throughout Finland for hundreds of years. When the Finnish kennel club was founded in 1889, the forester Hugo Sandberg wrote a description of the native barking bird dog and proposed its breed characteristics, while fellow forester Hugo Roos set about breeding the dogs and testing their hunting ability in Lapland and Kainuu. The first breed standard and the first show for the breed followed in 1892, with a revised standard and the name Finnish Spitz adopted in 1897, the same year as the first bird-hunting trial. The breed was declared Finland's national dog in 1979. In 2006 the Finnish and Russian kennel organisations agreed to treat the Karelian-Finnish Laika and the Finnish Spitz as one breed under a shared standard.",

    originalPurpose:
      "Hunting forest game birds by locating them and marking their position with barking; also used on small predators, waterfowl, elk and even bear.",

    currentRoles: [
      "Hunting dog for forest birds and elk",
      "Competitor in bird- and elk-barking trials",
      "Family and hobby dog",
      "Rally, agility and nose-work competitor"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 44,
        max: 50
      },
      female: {
        min: 39,
        max: 45
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 15,
        max: 17
      },
      female: {
        min: 10,
        max: 12
      }
    },

    lifespanYears: {
      min: 12,
      max: 15
    },

    coatType:
      "Stand-off double coat: a short, soft, dense, light-coloured undercoat under straight guard hair that stands semi or fully off the body; stiffer on the neck, shoulders and back, with long, dense hair on the trousers and tail",

    coatLength:
      "Moderately long on the body, short and close on the head and legs, longest on the shoulders of males, the trousers and the tail",

    coatColors: ["Bright red", "Golden red"],

    sheddingLevel: "Moderate, with heavier seasonal sheds of the undercoat",

    droolingLevel: "Low",

    distinctiveFeatures: [
      "Square body: length equals height at the withers",
      "Ideal height 47 cm for males and 42 cm for females",
      "Muzzle about three-quarters the length of the skull",
      "Small, pointed, erect ears that are very mobile",
      "Medium, almond-shaped, slightly slanting eyes, preferably dark",
      "Jet-black nose and black foot pads",
      "Full set of 42 teeth in a scissor bite",
      "Tail curving forward over the back and pressing down against the thigh, with the tip reaching mid-thigh",
      "Lighter shading inside the ears and on the cheeks, chest, belly, inner legs, back of the thighs and tail",
      "A small white spot on the chest and small white marks on the feet are allowed",
      "Puppies may carry more black hairs, which fade as they mature"
    ]
  },

  temperament: {
    traits: [
      "Lively and energetic",
      "Brave and persistent",
      "Sociable and friendly with its family",
      "A little reserved with strangers but never vicious",
      "Intelligent and quick to learn",
      "Independent minded",
      "Strong drive to hunt",
      "Naturally vocal"
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 3,
      independence: 4,
      trainability: 3,
      barking: 5,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High. A hunting breed that needs plenty of daily exercise plus tasks that use its nose and brain.",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Long daily walks or forest hikes on a lead",
        "Off-lead running only in securely fenced areas",
        "Nose work and tracking games",
        "Rally and agility",
        "Hunting or barking trials where available"
      ]
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush once or twice a week, and daily while the undercoat is shedding, using a slicker brush and a comb or undercoat rake.",

      bathing:
        "Only occasionally, when the dog is dirty; the harsh outer coat sheds dirt well once dry.",

      notes: [
        "Do not shave or clip the double coat.",
        "Show dogs are not trimmed apart from tidying the feet.",
        "Trim nails every few weeks if they do not wear down naturally.",
        "Check the ears and feet for dirt, ticks and grass seeds after outdoor trips."
      ]
    },

    training: {
      difficulty:
        "Moderate. Learns quickly but thinks for itself, so training needs patience and consistency.",

      tips: [
        "Use rewards, play and praise rather than force.",
        "Keep sessions short and varied.",
        "Start barking management early; the breed was selected to bark.",
        "Practise recall in safe areas, but expect the hunting drive to win when birds or squirrels appear.",
        "Give the dog regular jobs such as scent games."
      ],

      socialization:
        "Introduce the puppy calmly to many people, friendly dogs, traffic, household sounds and new places. Good early socialisation, together with training for its barking, helps it settle into family life, including in town."
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
        "Moderate. Copes with some time alone if well exercised, but boredom often comes out as barking."
    }
  },

  nutrition: {
    dietType:
      "A complete and balanced diet for a medium-sized active dog, adjusted for age and how much it works.",

    feedingFrequency: {
      puppy: "Three to four small meals a day, dropping to two by about six months.",
      adult: "Two measured meals a day.",
      senior: "Two smaller meals a day, adjusted to keep the dog lean."
    },

    guidelines:
      "Weigh or measure meals and feel for the ribs under the thick coat, which can hide weight gain. Feed more during active hunting seasons and less in quiet periods, and keep fresh water available.",

    considerations: [
      "Keep the dog lean.",
      "Count training treats in the daily ration.",
      "Avoid fatty table scraps.",
      "Change foods gradually over about a week."
    ],

    note: "Energy needs vary with age, neutering and activity; a veterinarian can help set the right amount."
  },

  health: {
    overview:
      "Finland's national kennel club regards this as one of the healthiest breeds and has run a compulsory knee and eye screening scheme for it since 1994. Epilepsy is the condition most studied in the breed. A large Finnish survey of owners in 2003–2004 found that about 5% of dogs were affected; the seizures usually started on one side of the brain, most dogs did not get worse over time, and most were easily controlled with medication. Inheritance appears to involve many genes, one of which, ADAM23, raises risk only modestly. Current estimates put the rate at roughly 1–2%. Diabetes, missing teeth or bite faults, and bloody diarrhoea are also noted in the breed.",

    commonConditions: [
      "Idiopathic epilepsy: recurring seizures with no other cause found; about 5% of dogs in a 2003–2004 survey, now estimated at 1–2%",
      "Patellar luxation: a kneecap that slips out of place; screened before breeding, with about 96% of recently tested dogs free of it",
      "Hereditary eye disease such as cataract or progressive retinal atrophy: screened before breeding, with about 94% of recently examined dogs clear",
      "Diabetes mellitus",
      "Missing teeth and bite faults",
      "Bloody diarrhoea"
    ],

    preventiveCare: [
      "Ask breeders for current knee and eye results on both parents and about epilepsy in the pedigree.",
      "Keep the dog lean and fit.",
      "Learn what a seizure looks like and see a vet if one happens.",
      "Brush the teeth several times a week.",
      "Book a yearly veterinary check-up."
    ],

    recommendedScreenings: [
      "Patellar luxation examination at 12 months of age or older",
      "Eye examination for hereditary eye disease (repeat every two years for dogs examined under age 3)",
      "Review of epilepsy in the pedigree before mating"
    ],

    dentalCare:
      "Brush several times a week with a dog toothpaste, and ask the vet to check for missing or misaligned teeth.",

    earCare: "Check the erect ears weekly and wipe away visible dirt if needed.",

    skinCare:
      "Part the coat while brushing to check for ticks and skin irritation, especially after time in the forest."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Families who spend a lot of time outdoors",
      "Hunters who want a barking bird dog",
      "First-time or experienced owners prepared to train consistently",
      "People interested in nose work, rally or agility"
    ],

    notIdealFor: [
      "Close-quarters living where barking would disturb neighbours",
      "Owners wanting a quiet or low-energy dog",
      "Homes without secure fencing",
      "Anyone expecting reliable off-lead recall near wildlife"
    ]
  },

  funFacts: [
    "It was named Finland's national dog in 1979.",
    "The breed's first show, held in Oulu in 1892, drew 93 dogs.",
    "Its original Finnish name translates as 'Finnish barking bird dog'; it took the name Finnish Spitz in 1897.",
    "In the forest it pins a bird in a treetop by barking until the hunter arrives.",
    "Since 2006 the Karelian-Finnish Laika has been treated as the same breed.",
    "Finland's Finnish Spitz club made the first Saturday of August the breed's own flag day, first celebrated in 2023."
  ],

  faq: [
    {
      question: "Why does the Finnish Spitz bark so much?",
      answer:
        "It was bred to find birds and hold them in place by barking until the hunter arrives, so barking is part of its job. Early training helps keep it under control at home."
    },
    {
      question: "How big is a Finnish Spitz?",
      answer:
        "Males stand 44 to 50 cm at the withers and females 39 to 45 cm. In Finland males usually weigh 15 to 17 kg and females 10 to 12 kg."
    },
    {
      question: "How long does it live?",
      answer: "Typically 12 to 15 years."
    },
    {
      question: "What colour is it?",
      answer:
        "Bright red or golden red on the back, paler underneath. A small white chest spot and small white marks on the feet are allowed."
    },
    {
      question: "Is it a good family dog?",
      answer:
        "Yes. It is sociable with its own people and suits families, including first-time owners who are ready to train it, especially those who enjoy outdoor life."
    },
    {
      question: "Can it live in a town?",
      answer:
        "It can, if its barking is trained and it is well socialised from puppyhood. It still needs plenty of daily exercise."
    },
    {
      question: "What health problems should I ask about?",
      answer:
        "Ask breeders for knee and eye results on both parents and about epilepsy in the family line. Epilepsy is the condition most studied in the breed, and most affected dogs respond well to treatment."
    }
  ],

  references: [
    "fci-finnish-spitz-official-standard",
    "fci-finnish-spitz-nomenclature",
    "suomen-kennelliitto-suomenpystykorva-profile",
    "koiramuseo-finnish-spitz-history",
    "kennelliitto-suomenpystykorva-flag-day-2023",
    "akc-finnish-spitz-breed-standard",
    "akc-finnish-spitz-breed-profile",
    "the-kennel-club-finnish-spitz-breed-standard",
    "finnish-spitz-epilepsy-phenotype-study-2006",
    "finnish-spitz-epilepsy-adam23-study-2015",
    "the-dog-api",
    "wikimedia-finnish-spitz-przemekl",
    "wikimedia-finnish-spitz-gch-rocket-pets-adviser"
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
        { id: "fci-finnish-spitz-nomenclature", role: "verified", locator: "Suomenpystykorva; Spitz Finlandais; Finnen-Spitz; Spitz Finlandés" },
        { id: "koiramuseo-finnish-spitz-history", role: "verified", locator: "Original name 'suomalainen haukkuva lintukoira' (Finnish Barking Bird Dog)" },
        { id: "the-dog-api", role: "verified", locator: "breed.alt_names: Suomenpystykorva, Finsk Spets, Barking Bird Dog, Finnish Barking Birddog" },
        { id: "akc-finnish-spitz-breed-profile", role: "cited", locator: "Nickname 'Finkie'" }
      ],
      verifiedOn: "2026-11-17",
      note: "'Finnischer Spitz' was corrected to FCI's German name 'Finnen-Spitz'. 'Finkie' is a common English nickname, cited but not checked against a kennel club page."
    },

    group: {
      reliability: "official_standard",
      sources: [
        { id: "fci-finnish-spitz-official-standard", role: "verified", locator: "FCI classification: Group 5, Section 2 Nordic Hunting Dogs, working trial in Nordic countries" },
        { id: "fci-finnish-spitz-nomenclature", role: "verified", locator: "Group 5, Section Nordic Hunting Dogs" },
        { id: "the-kennel-club-finnish-spitz-breed-standard", role: "cited", locator: "Listed under Hound" },
        { id: "akc-finnish-spitz-breed-profile", role: "cited", locator: "Non-Sporting Group" }
      ],
      verifiedOn: "2026-11-17",
      note: "'Northern Breed group' in the earlier record was not checked against any source and was removed."
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        { id: "fci-finnish-spitz-official-standard", role: "verified", locator: "Origin: Finland" },
        { id: "fci-finnish-spitz-nomenclature", role: "verified", locator: "Country of origin: Finland" }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The standard says dogs of this type were used across the whole country; 'Central and Northern Finland' was not supported and was removed."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        { id: "fci-finnish-spitz-official-standard", role: "verified", locator: "Utilization; Behaviour/temperament; Proportions; Head; Coat; Colour" },
        { id: "suomen-kennelliitto-suomenpystykorva-profile", role: "verified", locator: "Character: lively, energetic, brave, persistent, social, intelligent, independent" }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "overview.history": {
      reliability: "reliable_source",
      sources: [
        { id: "fci-finnish-spitz-official-standard", role: "verified", locator: "Brief history: 1892 standard and show; 1897 bird trial; national dog 1979; 2006 Laika agreement" },
        { id: "koiramuseo-finnish-spitz-history", role: "verified", locator: "Kennel club 1889; Sandberg's description; Roos breeding in Lapland and Kainuu; 1897 rename" }
      ],
      verifiedOn: "2026-11-17",
      note: "The Finno-Ugric migration story, the near-extinction narrative and the claim that a studbook was established in 1892 by Roos and Sandberg were not supported by the sources checked and were removed."
    },

    "overview.originalPurpose": {
      reliability: "official_standard",
      sources: [
        { id: "fci-finnish-spitz-official-standard", role: "verified", locator: "Utilization: forest game birds, small predators, waterfowl, elk; marks game by barking" },
        { id: "suomen-kennelliitto-suomenpystykorva-profile", role: "verified", locator: "Hunting use includes bear" }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "overview.currentRoles": {
      reliability: "reliable_source",
      sources: [
        { id: "suomen-kennelliitto-suomenpystykorva-profile", role: "verified", locator: "Bird and elk barking trials; family hobby dog; rally-tokko, agility, nose work" }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial label based on the standard's height range."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        { id: "fci-finnish-spitz-official-standard", role: "verified", locator: "Proportions; Head; Eyes; Ears; Teeth (42); Tail; Coat; Colour; Size" },
        { id: "the-kennel-club-finnish-spitz-breed-standard", role: "cited", locator: "Colour: puppies may have more black hairs that fade with age" }
      ],
      verifiedOn: "2026-11-17",
      note: "Colours follow FCI (bright red or golden red). The Dog API colour list was not used."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        { id: "fci-finnish-spitz-official-standard", role: "verified", locator: "Height at withers: males 44-50 cm (ideal 47), females 39-45 cm (ideal 42)" },
        { id: "suomen-kennelliitto-suomenpystykorva-profile", role: "verified", locator: "Males 44-50 cm, ideal 47; females 39-45 cm, ideal 42" },
        { id: "akc-finnish-spitz-breed-standard", role: "conflicting", locator: "Dogs 17½ to 20 inches; bitches 15½ to 18 inches" },
        { id: "the-kennel-club-finnish-spitz-breed-standard", role: "conflicting", locator: "Dogs 43-50 cm; bitches 39-45 cm" },
        { id: "the-dog-api", role: "conflicting", locator: "breed.height.metric: 44.5-51 / 39-46 cm" }
      ],
      verifiedOn: "2026-11-17",
      note: "Stored in centimetres as FCI publishes. AKC gives inches; the Royal Kennel Club allows males from 43 cm."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        { id: "suomen-kennelliitto-suomenpystykorva-profile", role: "verified", locator: "Males 15-17 kg; females 10-12 kg" },
        { id: "the-kennel-club-finnish-spitz-breed-standard", role: "conflicting", locator: "Weight 14-16 kg (one range for both sexes)" },
        { id: "akc-finnish-spitz-breed-profile", role: "conflicting", locator: "Males 25-33 lb; females 20-28 lb (as widely attributed)" },
        { id: "the-dog-api", role: "conflicting", locator: "breed.weight.metric: 11-15 / 9-13 kg" }
      ],
      verifiedOn: "2026-11-17",
      note: "The FCI standard gives no weight. Stored as the Finnish Kennel Club publishes it. The earlier combined 14-17 / 10-13 kg ranges mixed sources and were replaced."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        { id: "suomen-kennelliitto-suomenpystykorva-profile", role: "verified", locator: "Average lifespan 12-15 years" }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial estimate for a double coat; no source checked gives a shedding level."
    },

    "physical.droolingLevel": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial estimate; no source checked gives a drooling level."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        { id: "fci-finnish-spitz-official-standard", role: "verified", locator: "Lively, vigorous, brave and determined; may be a little reserved with strangers but never vicious" },
        { id: "suomen-kennelliitto-suomenpystykorva-profile", role: "verified", locator: "Social, strong game drive, intelligent, independent, learns quickly, bred to bark" },
        { id: "akc-finnish-spitz-breed-standard", role: "cited", locator: "Temperament: active, friendly, lively, eager, faithful; brave but cautious" }
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
      note: "General care advice for an active double-coated hunting spitz."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        { id: "suomen-kennelliitto-suomenpystykorva-profile", role: "verified", locator: "Needs much exercise and activity" }
      ],
      verifiedOn: "2026-11-17",
      note: null
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
        { id: "suomen-kennelliitto-suomenpystykorva-profile", role: "cited", locator: "Can live in town if barking is trained and the dog is socialised" }
      ],
      verifiedOn: null,
      note: "Editorial judgement; apartment living is marked unsuitable because of the breed's barking."
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
        { id: "suomen-kennelliitto-suomenpystykorva-profile", role: "verified", locator: "PEVISA since 1994 (knees, eyes); epilepsy 5-6% early 2000s, now est. 1-2%; diabetes; tooth and bite faults; bloody diarrhoea" },
        { id: "finnish-spitz-epilepsy-phenotype-study-2006", role: "verified", locator: "2,141 dogs; prevalence 5.36%; 85% focal onset; heritability 0.22, polygenic; 78.9% easily controlled" },
        { id: "finnish-spitz-epilepsy-adam23-study-2015", role: "verified", locator: "Common ADAM23 risk haplotype in four breeds including Finnish Spitz; low-penetrance risk gene" }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        { id: "suomen-kennelliitto-suomenpystykorva-profile", role: "verified", locator: "Epilepsy; knees 94% healthy (2015-2020) to 96% (2020-2025); eyes 91.8% to 93.8% healthy; diabetes; tooth and bite faults; bloody diarrhoea" },
        { id: "finnish-spitz-epilepsy-phenotype-study-2006", role: "verified", locator: "Prevalence 5.36% (111 of 2,069 living dogs)" }
      ],
      verifiedOn: "2026-11-17",
      note: "Hip dysplasia was removed; it is not named by the Finnish Kennel Club and is not part of the breed's compulsory screening. 'Diabetes at elevated rates in Finnish registries' was not supported and was reduced to a plain mention."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        { id: "suomen-kennelliitto-suomenpystykorva-profile", role: "verified", locator: "PEVISA: knee exam from 12 months; eye exams valid 2 years if under 3; inbreeding limit 6.25% over 7 generations" }
      ],
      verifiedOn: "2026-11-17",
      note: "The hip X-ray recommendation was removed. Epilepsy pedigree review is not a formal requirement but follows the breed's documented epilepsy risk."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        { id: "suomen-kennelliitto-suomenpystykorva-profile", role: "cited", locator: "Suits whole family, first-time and experienced owners, families with children" }
      ],
      verifiedOn: null,
      note: "Editorial judgement informed by the Finnish Kennel Club profile."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        { id: "fci-finnish-spitz-official-standard", role: "verified", locator: "Brief history: national dog 1979; 2006 Laika agreement; utilization" },
        { id: "koiramuseo-finnish-spitz-history", role: "verified", locator: "1892 show in Oulu with 93 dogs; original name; 1897 rename" },
        { id: "kennelliitto-suomenpystykorva-flag-day-2023", role: "verified", locator: "First Saturday of August declared the breed's flag day; first held 5 August 2023" }
      ],
      verifiedOn: "2026-11-17",
      note: "Removed for lack of a reliable source: 'King of the Barkers' title, '160 barks per minute', Lady Kitty Ritson coining 'Finkie', and the folklore claim about the red coat."
    },

    faq: {
      reliability: "estimate",
      sources: [
        { id: "fci-finnish-spitz-official-standard", role: "cited", locator: "Size; Colour; Utilization" },
        { id: "suomen-kennelliitto-suomenpystykorva-profile", role: "cited", locator: "Weight; lifespan; suitability; health programme" }
      ],
      verifiedOn: null,
      note: "Factual answers follow the cited sources; family, town-living and training answers are editorial, so the FAQ as a whole is labelled estimate."
    }
  },

  updatedOn: "2026-11-17"
};
