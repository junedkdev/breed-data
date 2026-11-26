import type { Breed } from "../schema/breed.types";

export const australian_kelpie: Breed = {
  slug: "australian-kelpie",
  name: "Australian Kelpie",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Kelpie",
    "Barb",
    "Kelpie Australien",
    "Australiankelpie"
  ],

  group:
    "Sheepdogs and Cattledogs (except Swiss Cattledogs); Section 1 — Sheepdogs (without working trial; also classified in the Working Dogs and Herding groups)",

  origin: {
    country: "Australia",
    region: "Victoria and New South Wales"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/AustralianKelpieRed.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:AustralianKelpieRed.jpg",
      title: "AustralianKelpieRed.jpg",
      description:
        "An adult red Australian Kelpie outdoors, clearly showing its lithe, muscular, slightly elongated build, flat rain-resisting double coat, pointed erect ears, and alert fox-like expression.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2021-07-03",
      uploadedOn: "2021-07-05",
      width: 1222,
      height: 1038,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:AustralianKelpieRed.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Australian_Kelpie_portrait.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Australian_Kelpie_portrait.jpg",
      title: "Australian Kelpie portrait.jpg",
      description:
        "A close-up outdoor portrait of a purebred Australian Kelpie named Diesel, highlighting its wide-set fine pointed prick ears, expressive almond brown eyes, cleanly chiselled muzzle, and tight lips.",
      creator: "davepaku",
      uploader: "Pharaoh Hound",
      capturedOn: "2007-05-13",
      uploadedOn: "2007-05-16",
      width: 2592,
      height: 3872,
      licenseId: "cc-by-sa-2.0",
      attribution:
        "Photo by davepaku, Wikimedia Commons, CC BY-SA 2.0. Source: https://commons.wikimedia.org/wiki/File:Australian_Kelpie_portrait.jpg. License: https://creativecommons.org/licenses/by-sa/2.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    }
  ],

  overview: {
    summary:
      "A lithe, athletic, and seemingly tireless medium-sized Australian sheepdog prized for razor-sharp independent livestock control, effortless sudden turns at full speed, and loyal, eager devotion to an active handler.",

    description:
      "The Australian Kelpie is a supple, hard-muscled, medium-sized herding dog built for relentless all-day work across sprawling, sun-baked pastures and crowded livestock yards alike. Slightly longer than tall in a classic 10:9 ratio, its clean, refined bone and deep, muscular chest carry zero coarseness or bulk, allowing it to pivot sharply at full speed and leap effortlessly across the backs of tightly packed sheep. Its cleanly chiselled, slightly fox-like head pairs a broad, gently rounded skull and pronounced stop with tight lips, a strong scissor bite, eager almond-shaped brown eyes, and wide-set, fine-tipped prick ears angled outward. Cloaked in a short, dense, rain-resisting double coat—measuring 2 to 3 cm over the body with a protective neck ruff, light thigh breeching, and a well-brushed low-set tail reaching the hock—it appears in black, black and tan, red, red and tan, fawn, chocolate, or smoke blue. Mild, tractable, and deeply devoted to its owner, the Kelpie flourishes when given purposeful daily physical and mental tasks, settling peacefully indoors after hard work yet growing restless or stressed in an under-stimulated home.",

    history:
      "As nineteenth-century pastoral expansion opened vast sheep stations across New South Wales and Victoria—some spanning millions of acres with flocks numbering in the hundreds of thousands—Australian graziers required a tough, heat-tolerant herder able to work huge mobs of sheep with minimal human direction. Early settlers drew on black-and-tan working collies imported from Scotland, selectively breeding for endurance, independence, and grit. Around 1872, stockman Jack Gleeson acquired a black-and-tan female puppy from George Robertson's Warrock Station near Casterton, Victoria, naming her 'Kelpie' after the water spirit of Celtic folklore. Mated to Caesar, a son of imported Scottish collies Brutus and Jennie, Gleeson's Kelpie produced a black-and-tan daughter known as King's Kelpie, who famously won or tied the prestigious Forbes sheepdog trial in New South Wales during the 1870s. Demand for 'Kelpie's pups' swept rural Australia, while a standout black descendant named Barb inspired the longtime nickname 'Barb' for solid black Kelpies. The breed's first written blueprint appeared in 1902, and definitive international recognition arrived in September 1973. Over the twentieth century, Australian Kelpies diverged into exhibition/companion lines and dedicated Working Kelpie strains, while gaining widespread international acclaim—especially in Scandinavia—as elite herding, tracking, rescue, obedience, and agility dogs.",

    originalPurpose:
      "Mustering, droving, and controlling vast flocks of sheep independently across open Australian outback plains and tightly packed stockyards.",

    currentRoles: [
      "Working sheep, cattle, and goat herding dog on farms and ranches",
      "Elite canine-sports competitor (agility, obedience, rally, flyball, disc, and herding trials)",
      "Tracking, guarding, and search-and-rescue service dog",
      "Devoted rural or active-household companion for dedicated trainers"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 46,
        max: 51
      },
      female: {
        min: 43,
        max: 48
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 35,
        max: 50
      },
      female: {
        min: 35,
        max: 50
      }
    },

    lifespanYears: {
      min: 10,
      max: 13
    },

    coatType:
      "Weather-resistant short double coat combining a short, dense undercoat with a close, straight, hard, flat-lying rain-repelling outer coat measuring 2 to 3 cm on average over the body. Hair grows shorter on the head, inside the ears, and down the fronts of the legs and feet, and longer and thicker along the neck to form a ruff, behind the legs into mild thigh breeching, and along the tail in a good brush.",

    coatLength: "Short",

    coatColors: [
      "Black",
      "Black and tan",
      "Red",
      "Red and tan",
      "Fawn",
      "Chocolate",
      "Smoke blue"
    ],

    sheddingLevel:
      "Moderate; the short, dense double coat sheds lightly throughout the year with moderate seasonal undercoat moults",

    droolingLevel:
      "Low; tight, clean lips completely free of looseness and a throatiness-free neck prevent drooling",

    distinctiveFeatures: [
      "Lithe, athletic, hard-muscled medium frame completely free of coarseness or weediness, with a body-length-to-height ratio of 10:9",
      "Height at the withers of 46 to 51 cm for males and 43 to 48 cm for females",
      "Adult weight typically ranging from 35 to 50 pounds",
      "Cleanly chiselled, slightly fox-like head with a slightly rounded skull broad between the ears, straight forehead, pronounced stop, and muzzle slightly shorter than the skull",
      "Nose pigment harmonizing with body coat colour, tight clean lips, and sound evenly spaced teeth in a scissor bite",
      "Medium-sized, clearly defined almond-shaped brown eyes harmonizing with coat colour (lighter eyes permissible in blue dogs) softening the fox-like head with an eager, intelligent gaze",
      "Moderate-sized, fine-leather pricked ears set wide apart, inclining outward, slightly curved along the outer edge, tapering to a fine point, and well furnished with hair inside",
      "Strong slightly arched neck with a noticeable ruff, firm level topline, deep chest (deeper rather than wide) with well-sprung ribs, strong muscled loins, and long sloping croup",
      "Right-angled shoulder-to-upper-arm assembly, straight refined-boned limbs, slightly sloped pasterns for rapid turns, and round compact deep-padded feet with tight arched toes and strong short nails",
      "Low-set, well-brushed tail reaching approximately to the hock—hanging in a gentle curve at rest and never rising past a vertical line drawn through its root when moving",
      "Free, tireless, single-tracking trot at speed that settles four-square at rest, paired with a flat 2 to 3 cm weatherproof double coat"
    ]
  },

  temperament: {
    traits: [
      "Extremely alert, lively, eager, and intensely intelligent with a mild, tractable disposition",
      "Possesses almost inexhaustible working energy paired with an 'off switch' indoors once thorough daily exercise and mental tasks are completed",
      "Deeply loyal, responsive, and devoted to its handler while retaining independent initiative to anticipate livestock or task demands",
      "Benevolent and generally friendly toward people—biting or human aggression is foreign to the breed",
      "Carries a powerful natural herding instinct that can prompt circling or heel-nipping toward running children, other dogs, or household pets if unguided",
      "Can grow stressed, restless, or overly reactive if mismanaged or kept purely as an under-stimulated house pet",
      "Barks primarily to alert or when working livestock in yards"
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 4,
      protectiveness: 3,
      independence: 4,
      trainability: 5,
      barking: 3,
      energy: 5
    }
  },

  care: {
    exercise: {
      level:
        "Very high; an extraordinarily athletic herding breed with near-limitless stamina that needs vigorous daily physical conditioning paired with challenging mental work or dog sports",

      minutesPerDay: {
        min: 60,
        max: 120
      },

      activities: [
        "Structured livestock herding and herding trials",
        "Long daily runs, trail hikes, or energetic jogging combined with obedience exercises",
        "High-tempo canine sports including agility, obedience, rally, flyball, disc, tracking, and search-and-rescue",
        "Interactive nosework, trick training, and structured off-switch relaxation training"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Very easy-care, rain-repelling short double coat—brush or comb once a week with a rubber mitt or firm bristle brush to remove dead hairs, increasing briefly during seasonal undercoat shedding.",

      bathing:
        "Bathe only occasionally when visibly muddy or odorous after fieldwork, using a mild canine shampoo.",

      notes: [
        "Inspect the wide-set, hair-furnished erect ears weekly for wax buildup, dust, or grass seeds.",
        "Check the round, deep-padded feet and tight toes after rough pasture or trail runs for thorns, cuts, or ticks.",
        "Trim strong, short nails regularly if hard terrain does not wear them down naturally.",
        "Brush teeth several times weekly using canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Easy to moderate; exceptionally sharp, eager to work, and fast to learn—requiring an engaged owner because it learns unwanted habits just as quickly as polished cues",

      tips: [
        "Use upbeat, fast-paced, reward-based training paired with purposeful jobs such as agility, obedience, rally, or scent work to satisfy its busy mind.",
        "Explicitly teach a calm 'settle' cue and off-switch habits from early puppyhood so high drive does not spiral into chronic stress.",
        "Tailor puppy walks to age-appropriate lengths even though agile Kelpie puppies look like miniature adults.",
        "Redirect instinctive herding impulses around running children, cyclists, or pets early into structured games and rock-solid recall."
      ],

      socialization:
        "Early, calm, structured exposure to busy environments, unfamiliar people, friendly dogs, children, and quiet resting drills helps build a confident, stress-resilient adult partner."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Warm, dry, and sun-exposed climates—engineered for long working days across Australia's hot pastoral plains (still requiring shade, rest breaks, and cool water during peak heat)",
        "Temperate four-season climates with active outdoor access",
        "Cool, rainy climates are handled well during active work thanks to its flat rain-resisting double coat, though warm indoor shelter is needed in freezing rest periods"
      ],

      aloneTimeTolerance:
        "Low to moderate; prefers active partnership and company over spending entire days locked alone indoors, quickly developing restlessness or stress when left isolated without daily jobs."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for medium-sized, high-energy working and herding breeds.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until roughly six months of age to support steady, lean skeletal and muscular growth.",
      adult:
        "Two measured meals daily to sustain high daily energy and steady digestion.",
      senior:
        "Two portion-controlled meals daily tailored for reduced activity and joint and cardiac wellness."
    },

    guidelines:
      "Measure every meal accurately to maintain the Kelpie's hard, lithe, athletic working build without excess fat over its joints. High-output working farm dogs and agility competitors require higher caloric and protein density than moderately active household dogs. Divide adult food into two daily meals, monitor training-treat calories closely, and keep clean, fresh drinking water continuously available.",

    considerations: [
      "Count all training rewards inside the daily calorie budget to prevent weight gain during intensive obedience or agility training.",
      "Keep growing puppies lean on a balanced medium-breed growth formula to support sound hip and elbow development.",
      "Puppies diagnosed with inborn lipid malabsorption (ILM / lipase 1 deficiency) require specialized veterinary nutritional support and pancreatic enzyme supplementation during early growth.",
      "Transition gradually between diet formulas over five to seven days to avoid digestive upset."
    ],

    note:
      "Caloric demands differ substantially between working station sheepdogs and sport-companion Kelpies. Consult a veterinarian to establish individual feeding quantities."
  },

  health: {
    overview:
      "The Australian Kelpie is widely regarded as a hardy, athletic, and generally healthy medium-sized herding breed with a typical life expectancy of 10 to 13 years (and working lines often reaching 12 to 15 years). Peer-reviewed veterinary genetics research and European breed-health monitoring identify three key hereditary priorities for breeding stock: autosomal-recessive Cerebellar Abiotrophy (CA, linked in 2022 research to two major risk loci on CFA20 and CFA9 including a VMP1 candidate variant), congenital Inborn Lipid Malabsorption (ILM / lipase 1 deficiency in young puppies, with a validated Kelpie DNA test), and Collie Eye Anomaly (CEA / NHEJ1 deletion confirmed in certain European lines). Routine breeding oversight also tracks hip dysplasia (low-to-moderate incidence, averaging roughly 12% in Swedish 2011–2015 screened cohorts and mostly mild), occasional elbow dysplasia and patellar luxation, and acquired adult mitral valve heart disease.",

    commonConditions: [
      "Cerebellar Abiotrophy (CA) — a progressive, incurable autosomal-recessive neurodegenerative disorder causing cerebellar neuron loss, tremors, and severe ataxia/loss of balance; a 2022 University of Sydney genomic study identified two major risk loci in Working Kelpies—an early-onset form on CFA20 visible within days to weeks of birth and a later-onset form on CFA9 associated with a candidate VMP1 missense variant (p.P160Q)—with marker/risk DNA testing used to guide breeding in both Working and Australian Kelpies",
      "Inborn Lipid Malabsorption (ILM / Lipase 1 deficiency) — a congenital autosomal-recessive digestive defect documented in Australian Kelpies in Australia and Europe where newborn puppies lack functional lipase 1 for early fat absorption, causing stunted growth until lipase 2 activates around 12 weeks of age; preventable via a breed-validated DNA test and often manageable with early veterinary enzyme and dietary support",
      "Collie Eye Anomaly (CEA, NHEJ1-related) — a congenital developmental eye defect (choroidal hypoplasia) confirmed via DNA testing for the 7.8-kb NHEJ1 deletion in a Polish Australian Kelpie breeding line, underscoring the value of puppy eye exams and DNA screening in international lines",
      "Hip dysplasia (HD), elbow dysplasia (ED), and patellar luxation — developmental orthopaedic conditions occurring at relatively low rates (Swedish 2011–2015 screened cohorts averaged ~12% HD, mostly mild, with isolated ED and patellar luxation cases), monitored through pre-breeding radiographic evaluations",
      "Acquired cardiac disease (myxomatous mitral valve insufficiency / endocardiosis) — Swedish veterinary insurance data notes slightly above-average heart-disease diagnoses in Australian Kelpies (though lower cardiac mortality than average), supporting routine veterinary auscultation in adult and senior years",
      "Fieldwork trauma and heat stress — paw pad wear, thorn injuries, sprains, and overexertion during intense hot-weather herding or dog sports"
    ],

    preventiveCare: [
      "Ask breeders for documented parental health records, including official radiographic hip (and ideally elbow) evaluations, specialist veterinary ophthalmologist eye exams, and breed-validated DNA testing for Cerebellar Abiotrophy (CA), Inborn Lipid Malabsorption (ILM), and Collie Eye Anomaly (CEA).",
      "Be cautious with unvalidated multi-breed commercial DNA panels that test markers not established in Kelpies; prioritize tests validated specifically for the breed.",
      "Keep the dog lean, build sports and running fitness gradually, and avoid over-exercising young puppies while joints mature.",
      "Schedule annual veterinary wellness exams (including cardiac auscultation in middle-aged and senior dogs) and keep vaccinations and year-round parasite prevention current."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation (and elective elbow dysplasia evaluation) prior to breeding",
      "Ophthalmic examination by a board-certified veterinary ophthalmologist",
      "DNA test for Inborn Lipid Malabsorption (ILM / lipase 1 deficiency)",
      "DNA marker/risk test for Cerebellar Abiotrophy (CA)",
      "DNA test for Collie Eye Anomaly (CEA / NHEJ1 deletion), particularly in European or internationally imported lines"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste and schedule regular veterinary dental checks to keep the sound, evenly spaced scissor bite and gums healthy.",

    earCare:
      "Inspect the wide-set, hair-furnished erect ears weekly for dust, excess wax, grass seeds, or redness, cleaning gently with a veterinarian-approved solution when needed.",

    skinCare:
      "Run hands over the short, flat double coat after pasture or woodland outings to catch ticks, burrs, thorns, or minor scrapes early."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Sheep, cattle, and livestock farmers needing a tough, independent, heat-hardy herding dog capable of working open plains and crowded yards",
      "Highly active runners, hikers, and dog-sport enthusiasts competing in agility, obedience, rally, flyball, disc, tracking, or search-and-rescue",
      "Committed active families with spacious fenced yards and older, respectful children who enjoy daily structured training and exercise",
      "Handlers who value a low-grooming, weatherproof short double coat and an intensely loyal, razor-sharp working partner"
    ],

    notIdealFor: [
      "Apartment dwellers or sedentary households hoping for a low-energy casual pet—the breed requires space and real daily jobs",
      "First-time or passive owners unprepared to teach calm off-switch habits and channel relentless herding drive",
      "Households leaving an active dog confined alone all day without physical or mental engagement",
      "Families with unsupervised toddlers or loose small pets that may trigger strong herding and chasing instincts"
    ]
  },

  funFacts: [
    "One of the Kelpie's signature livestock-yard manoeuvres is 'backing': leaping effortlessly onto the backs of tightly packed sheep and running right across the flock to break up jams from the far side.",
    "The breed takes its name from 'Kelpie,' a black-and-tan puppy acquired around 1872 in Victoria and named after the shapeshifting water spirit of Scottish folklore—and her daughter, King's Kelpie, launched the breed's fame by excelling at the prestigious Forbes sheepdog trial in New South Wales.",
    "Solid black Kelpies were long nicknamed 'Barbs' after a celebrated early black male named for The Barb, a champion black racehorse that won Australia's Melbourne Cup in 1866.",
    "Despite a persistent nineteenth-century legend claiming Kelpies carried Australian Dingo blood for their upright ears and tawny-red coats, a 2019 University of Sydney genomic study of external morphology traits found no shared dingo genetic basis for those coat and ear features.",
    "In rural Australia, a classic tribute sums up the breed's economic value to the wool industry: a single skilled Kelpie working a sheep mob is said to do the work of two riders on horseback."
  ],

  faq: [
    {
      question: "What is an Australian Kelpie?",
      answer:
        "The Australian Kelpie is a lithe, tireless medium-sized herding dog developed in nineteenth-century Australia from working Scottish collies to muster and control massive sheep flocks across open plains and stockyards."
    },
    {
      question: "How tall and heavy is an Australian Kelpie?",
      answer:
        "Adult males stand 46 to 51 cm at the withers and adult females stand 43 to 48 cm, with adults typically weighing between 35 and 50 pounds."
    },
    {
      question: "How long does an Australian Kelpie live?",
      answer:
        "With balanced nutrition, vigorous daily exercise, and routine veterinary care, the Australian Kelpie has a typical life expectancy of 10 to 13 years."
    },
    {
      question: "Can an Australian Kelpie live in an apartment or purely as a casual pet?",
      answer:
        "No. Although a well-exercised Kelpie has a calm indoor 'off switch,' its almost limitless working stamina and intense need for daily physical and mental jobs make it unsuited to apartment living or sedentary companion-only homes."
    },
    {
      question: "Are Australian Kelpies good family dogs?",
      answer:
        "They are loyal, mild-tempered, and affectionate in very active families who love training and outdoor sports. Supervision is important around young children and other pets because strong herding instincts can prompt circling or nipping at running heels."
    },
    {
      question: "How much grooming and shedding should I expect from an Australian Kelpie?",
      answer:
        "Grooming is minimal: weekly brushing or combing clears dead hair from its short, flat, rain-resisting double coat (which sheds moderately), paired with occasional baths, nail trims, and weekly ear checks."
    },
    {
      question: "Are Australian Kelpies easy to train?",
      answer:
        "Yes—they are exceptionally intelligent, responsive, and eager for a job in agility, obedience, rally, tracking, or herding. Because they learn so quickly and can grow stressed if mismanaged, consistent positive training and early calm-relaxation habits are essential."
    },
    {
      question: "What are the main health concerns for an Australian Kelpie?",
      answer:
        "Generally a healthy, rugged breed, its main documented hereditary priorities include Cerebellar Abiotrophy (CA), congenital Inborn Lipid Malabsorption (ILM / lipase 1 deficiency in puppies), Collie Eye Anomaly (CEA) in certain European lines, mild-to-moderate hip dysplasia, isolated elbow or patella issues, and adult mitral valve heart monitoring."
    }
  ],

  references: [
    "fci-australian-kelpie-official-standard",
    "fci-australian-kelpie-nomenclature",
    "fci-australian-kelpie-extended-standard",
    "dogs-australia-australian-kelpie-standard",
    "akc-australian-kelpie-breed-profile",
    "skk-australian-kelpie-profile",
    "svekk-australian-kelpie-health",
    "scc-kelpie-australien-profile",
    "pmc-wade-2022-kelpie-cerebellar-abiotrophy",
    "pmc-kucharczyk-2019-kelpie-cea-nhej1",
    "pmc-chew-2019-kelpie-morphology-dingo",
    "pmc-kelpie-herding-personality-2022",
    "wikimedia-australian-kelpie-red-canarian",
    "wikimedia-australian-kelpie-portrait-davepaku"
  ],

  evidence: {
    scientificName: {
      reliability: "unverified",
      sources: [],
      verifiedOn: null,
      note:
        "Canis lupus familiaris is used as the standard domestic-dog taxonomic label across the catalog; it is not stated in breed standards."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-australian-kelpie-nomenclature",
          role: "verified",
          locator: "Official multilingual names: AUSTRALIAN KELPIE (EN), KELPIE AUSTRALIEN (FR)"
        },
        {
          id: "fci-australian-kelpie-extended-standard",
          role: "verified",
          locator: "Documents short name 'Kelpie' and historical name 'Barb' for black Kelpies"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified across FCI Nomenclature No. 293 and FCI Extended Standard No. 293; Australiankelpie is the standard Finnish/Nordic compound spelling."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-australian-kelpie-nomenclature",
          role: "verified",
          locator: "Group 1 Sheepdogs and Cattledogs (except Swiss Cattledogs); Section 1 Sheepdogs; Without working trial"
        },
        {
          id: "dogs-australia-australian-kelpie-standard",
          role: "verified",
          locator: "Dogs Australia Group 5 (Working Dogs)"
        },
        {
          id: "akc-australian-kelpie-breed-profile",
          role: "verified",
          locator: "AKC Foundation Stock Service (Herding Group)"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "dogs-australia-australian-kelpie-standard",
          role: "verified",
          locator: "Country of Origin: Australia"
        },
        {
          id: "fci-australian-kelpie-extended-standard",
          role: "verified",
          locator: "HISTORY OF THE BREED: Warrock Station and Murray Dunrobin Station in Victoria; Forbes, Albury, and Burrangong Station in New South Wales"
        },
        {
          id: "akc-australian-kelpie-breed-profile",
          role: "verified",
          locator: "History: Opening of vast sheep lands in the Australian states of New South Wales and Victoria"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Country (Australia) and founding states (Victoria and New South Wales) verified from Dogs Australia, FCI Extended Standard, and AKC."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-australian-kelpie-official-standard",
          role: "verified",
          locator: "GENERAL APPEARANCE, HEAD, COAT, COLOUR, TAIL, MOVEMENT"
        },
        {
          id: "fci-australian-kelpie-extended-standard",
          role: "verified",
          locator: "HISTORY OF THE BREED: George Robertson of Warrock Station, Jack Gleeson's Kelpie, Brutus & Jennie, Caesar, King's Kelpie, Forbes trial, Barb, John Quinn, King & McLeod"
        },
        {
          id: "fci-australian-kelpie-nomenclature",
          role: "verified",
          locator: "Date of acceptance on a definitive basis by the FCI: 1973-09-03"
        },
        {
          id: "skk-australian-kelpie-profile",
          role: "verified",
          locator: "Historik (1902 first standard), modern roles in herding, working trials, agility, obedience, guarding, and rescue"
        },
        {
          id: "scc-kelpie-australien-profile",
          role: "verified",
          locator: "Divergence of Working Kelpie and Show Kelpie lines and backing across sheep's backs"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Synthesized in original prose from FCI Standard No. 293, FCI Extended Standard, FCI Nomenclature, SKK, and SCC."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-australian-kelpie-official-standard",
          role: "verified",
          locator: "HEAD (fox-like expression, pronounced stop, tight clean lips, scissor bite), EYES (almond brown; lighter permissible in blue dogs), EARS (pricked fine point, well furnished inside), NECK (ruff, no throatiness), BODY, TAIL (hangs slight curve, never past vertical line, brush to hock), LIMBS (right-angle shoulder/upper arm, slightly sloped pasterns, round deep-padded feet), MOVEMENT (single-tracking at trot, four-square at rest), COAT (double coat, 2-3 cm body hair), COLOUR (black, black and tan, red, red and tan, fawn, chocolate, smoke blue)"
        },
        {
          id: "dogs-australia-australian-kelpie-standard",
          role: "verified",
          locator: "Body length-to-withers-height proportion of 10:9; chest deep rather than wide"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "All proportions (10:9), fox-like head, right-angle forequarters, low-set non-curling tail, 2 to 3 cm rain-resisting double coat, and seven accepted colours follow FCI Standard No. 293 and Dogs Australia Standard."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-australian-kelpie-extended-standard",
          role: "verified",
          locator: "SIZE: Height: Dogs 46-51 cms at withers. Bitches 43-48 cms at withers."
        },
        {
          id: "skk-australian-kelpie-profile",
          role: "verified",
          locator: "Storlek och utseende: Mankhöjden hos australian kelpie är för hanar 46–51 cm och för tikar 43–48 cm."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Preserved verbatim in published unit of centimetres (46 to 51 cm males, 43 to 48 cm females) from FCI Standard No. 293 / Dogs Australia and SKK. (AKC separately publishes 17 to 20 inches overall)."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-australian-kelpie-breed-profile",
          role: "verified",
          locator: "Weight: 35-50 lbs."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "FCI Standard No. 293, Dogs Australia Standard, and SCC (Poids: NP) omit numerical weight limits; stored verbatim in published unit of pounds (35 to 50 lb) from the AKC breed profile."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-australian-kelpie-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 10-13 years."
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified from AKC Australian Kelpie breed profile (note: AKC separately lists 12–15 years on its Working Kelpie profile)."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-australian-kelpie-breed-profile",
          role: "verified",
          locator: "Shedding: Moderate; weekly brushing or combing removes dead hairs."
        },
        {
          id: "fci-australian-kelpie-official-standard",
          role: "verified",
          locator: "COAT: Double coat with short dense undercoat and close, flat, rain-resisting outer coat (2-3 cm)."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-australian-kelpie-official-standard",
          role: "verified",
          locator: "Lips: Tight and clean, free from looseness; NECK: Free from throatiness."
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Tight, clean lips and throatiness-free neck prevent drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "dogs-australia-australian-kelpie-standard",
          role: "verified",
          locator: "Characteristics: Extremely alert, eager and highly intelligent, with a mild, tractable disposition and an almost inexhaustible energy, with marked loyalty and devotion to duty."
        },
        {
          id: "fci-australian-kelpie-extended-standard",
          role: "verified",
          locator: "Biting is a serious fault and foreign to the breed."
        },
        {
          id: "skk-australian-kelpie-profile",
          role: "verified",
          locator: "Egenskaper och mentalitet: Independent yet responsive to handler, benevolent toward people, strong willingness to cooperate; tends to become stressed if mismanaged."
        },
        {
          id: "akc-australian-kelpie-breed-profile",
          role: "verified",
          locator: "Strong herding instinct (may try to herd other dogs, pets, or children), indoor 'off switch' after heavy exercise, barks mainly to alert."
        },
        {
          id: "pmc-kelpie-herding-personality-2022",
          role: "verified",
          locator: "PLOS ONE 2022 (PMC9041829): Study of 228 working Kelpies highlighting calmness, intelligence, patience, persistence, and stamina as core working traits."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-australian-kelpie-breed-profile",
          role: "cited",
          locator: "High energy, Trainability (4/5), Only To Alert barking, supervision advised with young children and other dogs"
        },
        {
          id: "skk-australian-kelpie-profile",
          role: "cited",
          locator: "Benevolent toward people, highly trainable, independent initiative, almost inexhaustible energy"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates reflecting documented extreme working stamina, high trainability, independent herding drive, and friendly handler devotion."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-australian-kelpie-breed-profile",
          role: "cited",
          locator: "Weekly brushing, occasional bath, daily jog/long workout plus mental obedience training, agility/rally"
        },
        {
          id: "skk-australian-kelpie-profile",
          role: "cited",
          locator: "Easy-care coat, teach puppy to relax in stressful settings, age-appropriate puppy walk lengths"
        }
      ],
      verifiedOn: null,
      note:
        "General working-herder care combining very high daily physical and mental work with low-maintenance double-coat brushing and off-switch training."
    },

    "care.exercise.level": {
      reliability: "official_standard",
      sources: [
        {
          id: "dogs-australia-australian-kelpie-standard",
          role: "verified",
          locator: "Characteristics: Almost inexhaustible energy; capability of untiring work."
        },
        {
          id: "akc-australian-kelpie-breed-profile",
          role: "verified",
          locator: "Exercise: Needs a lot of exercise—a daily jog or long workout combined with mental obedience lessons."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "Editorial daily activity range (60 to 120 minutes) matching a high-drive working sheepdog."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-australian-kelpie-breed-profile",
          role: "verified",
          locator: "Exercise: Kelpies are not suited to apartment living as they need space for their limitless energy."
        },
        {
          id: "scc-kelpie-australien-profile",
          role: "cited",
          locator: "Notes it dislikes spending entire days shut inside an apartment without active outings."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-australian-kelpie-breed-profile",
          role: "verified",
          locator: "Requires space and daily physical/mental outlets suited to a home with a yard."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-australian-kelpie-official-standard",
          role: "verified",
          locator: "Rain-resisting flat double coat (2-3 cm) with short dense undercoat."
        },
        {
          id: "fci-australian-kelpie-extended-standard",
          role: "verified",
          locator: "Bred to drive and herd large flocks of sheep under hard Australian conditions."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-kelpie-australien-profile",
          role: "verified",
          locator: "Vivre en ville: Prefers company over solitude and dislikes staying shut alone all day."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-kelpie-australien-profile",
          role: "cited",
          locator: "Alimentation & Santé: Balanced commercial or home-prepared diet fed in two daily meals with continuous water."
        },
        {
          id: "svekk-australian-kelpie-health",
          role: "cited",
          locator: "Specialized dietary and enzyme support required in puppies affected by Inborn Lipid Malabsorption (ILM)."
        }
      ],
      verifiedOn: null,
      note:
        "General working-breed veterinary nutrition guidance emphasizing lean athletic condition and divided adult meals."
    },

    "nutrition.feedingFrequency": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-kelpie-australien-profile",
          role: "verified",
          locator: "Alimentation & Santé: Il vaut mieux donner en deux fois les repas (better to divide adult food into two daily meals)."
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Twice-daily adult feeding verified from SCC; puppy and senior schedules follow standard life-stage guidance."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "skk-australian-kelpie-profile",
          role: "verified",
          locator: "Hälsa: Considered relatively healthy overall; low proportion of HD (mostly mild), isolated ED and patellar luxation."
        },
        {
          id: "svekk-australian-kelpie-health",
          role: "verified",
          locator: "Documents CA (marker/risk DNA test), ILM / lipase 1 deficiency (breed-validated DNA test), CEA, 2011-2015 HD average ~12% (range 7-14%), and Agria Breed Profile heart-disease notes (endocardiosis / mitral insufficiency)."
        },
        {
          id: "pmc-wade-2022-kelpie-cerebellar-abiotrophy",
          role: "verified",
          locator: "Genes 2022 (PMC9602046, PMID 36292596): Maps Cerebellar Abiotrophy in Working Kelpies to two major risk loci on CFA20 (early onset) and CFA9 (later onset, VMP1 p.P160Q)."
        },
        {
          id: "pmc-kucharczyk-2019-kelpie-cea-nhej1",
          role: "verified",
          locator: "BMC Vet Res 2019 (PMC6829813, PMID 31684941): Confirms NHEJ1 7.8-kb deletion Collie Eye Anomaly (choroidal hypoplasia) in a Polish Australian Kelpie line."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Synthesizes SKK, Svenska Kelpieklubben, and peer-reviewed genetics studies without naming clubs or registries in user-facing prose."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pmc-wade-2022-kelpie-cerebellar-abiotrophy",
          role: "verified",
          locator: "Cerebellar Abiotrophy (CA) — CFA20 early-onset locus and CFA9 later-onset locus (VMP1 p.P160Q)"
        },
        {
          id: "svekk-australian-kelpie-health",
          role: "verified",
          locator: "Inborn Lipid Malabsorption (ILM / lipase 1 deficiency), CA DNA marker test, HD (~12% 2011-2015 screened average), and adult mitral valve endocardiosis"
        },
        {
          id: "pmc-kucharczyk-2019-kelpie-cea-nhej1",
          role: "verified",
          locator: "Collie Eye Anomaly (CEA / NHEJ1 7.8-kb deletion) confirmed in Polish Australian Kelpies"
        },
        {
          id: "skk-australian-kelpie-profile",
          role: "verified",
          locator: "Low-rate mild HD and isolated ED and patellar luxation cases"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Explicitly stratifies peer-reviewed neurological/ocular conditions (CA, CEA), club-documented ILM, screened orthopaedic rates, and Swedish insurance cardiac data from general fieldwork precautions."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "svekk-australian-kelpie-health",
          role: "cited",
          locator: "Breed-validated DNA testing (ILM, CA, CEA), caution with unvalidated multi-breed panels, and hip screening"
        }
      ],
      verifiedOn: null,
      note: "General preventive veterinary care protocol tailored to Australian Kelpies."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "svekk-australian-kelpie-health",
          role: "verified",
          locator: "Breed-club recommended breeding screenings: hip radiographs, specialist eye exams, breed-validated ILM DNA test, CA DNA marker test, and CEA (NHEJ1) DNA test."
        },
        {
          id: "pmc-kucharczyk-2019-kelpie-cea-nhej1",
          role: "verified",
          locator: "Supports NHEJ1 DNA testing alongside ophthalmoscopy in adult Kelpies due to 'go normal' masking."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Summarizes Svenska Kelpieklubben and peer-reviewed diagnostic screening priorities without naming clubs or registries in user-facing text."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-australian-kelpie-official-standard",
          role: "cited",
          locator: "Jaws/Teeth: Sound, strong, evenly spaced teeth in a scissor bite."
        }
      ],
      verifiedOn: null,
      note: "Standard home and veterinary dental care guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-australian-kelpie-official-standard",
          role: "cited",
          locator: "Ears: Pricked, fine-pointed, wide-set, inside well furnished with hair."
        }
      ],
      verifiedOn: null,
      note: "Routine erect-ear inspection and cleaning guidance."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-australian-kelpie-official-standard",
          role: "cited",
          locator: "Short, dense, flat, rain-resisting double coat (2-3 cm)."
        }
      ],
      verifiedOn: null,
      note: "General skin and tick inspection guidance after pasture or trail work."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "skk-australian-kelpie-profile",
          role: "cited",
          locator: "Not suited solely as a companion dog; wants an active training-oriented family; prone to stress if mismanaged"
        },
        {
          id: "akc-australian-kelpie-breed-profile",
          role: "cited",
          locator: "Not suited to apartment living; needs daily intense exercise and mental work; supervises well with children and dogs"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability evaluations balancing trainability, loyalty, and low-maintenance coat against extreme daily exercise and mental-stimulation demands."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-kelpie-australien-profile",
          role: "verified",
          locator: "Walking across sheep's backs ('backing') and classic saying that one Kelpie equals two riders on horseback"
        },
        {
          id: "fci-australian-kelpie-extended-standard",
          role: "verified",
          locator: "Gleeson's Kelpie, King's Kelpie at the Forbes sheepdog trial, and 'Barb' named after the Melbourne Cup winning horse"
        },
        {
          id: "pmc-chew-2019-kelpie-morphology-dingo",
          role: "verified",
          locator: "Genes 2019 (PMC6563003, PMID 31058880): Genomic characterization of external morphology traits (ears and coat colour) in Kelpies does not support common ancestry with the Australian Dingo"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified working-behaviour, historical, and peer-reviewed genomic facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-australian-kelpie-extended-standard",
          role: "verified",
          locator: "Origin (Australia, Scottish collie roots), height (46-51 cm males / 43-48 cm females), coat (2-3 cm)"
        },
        {
          id: "akc-australian-kelpie-breed-profile",
          role: "verified",
          locator: "Weight (35-50 lb), lifespan (10-13 years), apartment unsuitability, indoor off switch, weekly brushing, herding impulses around children/pets"
        },
        {
          id: "skk-australian-kelpie-profile",
          role: "verified",
          locator: "Trainability, stress sensitivity if mismanaged, mild HD / isolated ED and patella"
        },
        {
          id: "svekk-australian-kelpie-health",
          role: "verified",
          locator: "CA, ILM (lipase 1 deficiency), and adult mitral valve heart monitoring"
        },
        {
          id: "pmc-kucharczyk-2019-kelpie-cea-nhej1",
          role: "verified",
          locator: "CEA (NHEJ1) in European lines"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "FAQ answers synthesize FCI Standard No. 293, Dogs Australia, AKC, SKK, Svenska Kelpieklubben, and peer-reviewed studies without naming clubs or registries in user-facing prose."
    }
  },

  updatedOn: "2026-11-26"
};
