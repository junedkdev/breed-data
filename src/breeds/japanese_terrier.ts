import type { Breed } from "../schema/breed.types";

export const japanese_terrier: Breed = {
  slug: "japanese-terrier",
  name: "Japanese Terrier",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Nihon Teria",
    "Oyuki Terrier",
    "Mikado Terrier",
    "Kobe Terrier",
    "Terrier Japonais",
    "Japanischer Terrier",
    "日本テリア"
  ],

  group:
    "Terriers; Section 2 — Small-sized Terriers (without working trial)",

  origin: {
    country: "Japan",
    region: "Nagasaki, Kobe, and Yokohama"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Japanese_Terrier_22.04.2012_2pl.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Japanese_Terrier_22.04.2012_2pl.jpg",
      title: "Japanese Terrier 22.04.2012 2pl.jpg",
      description:
        "An adult Japanese Terrier photographed outdoors in Poland, clearly showing its compact square outline, ultra-short glossy white coat with black body markings, tricolour head, dark oval eyes, and high-set V-shaped forward-dropping ears.",
      creator: "Pleple2000",
      uploader: "Pleple2000",
      capturedOn: "2012-04-22",
      uploadedOn: "2012-05-07",
      width: 2012,
      height: 2016,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Pleple2000, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Japanese_Terrier_22.04.2012_2pl.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Nihon_teria_aka_Japanese_Terrier.JPG",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Nihon_teria_aka_Japanese_Terrier.JPG",
      title: "Nihon teria aka Japanese Terrier.JPG",
      description:
        "An adult female Japanese Terrier displaying her sleek, crisp black-and-tan-marked head, fine straight limbs, well-tucked underline, and glossy white body coat.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2013-12-14",
      uploadedOn: "2014-04-16",
      width: 530,
      height: 483,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Nihon_teria_aka_Japanese_Terrier.JPG. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    }
  ],

  overview: {
    summary:
      "A rare, crisp, and sleekly elegant small companion terrier—the only terrier breed native to Japan—instantly recognized by its velvety 2 mm glossy coat, square outline, tricolour head over a white spotted body, and devoted, vigilant one-person loyalty.",

    description:
      "The Japanese Terrier (Nihon Teria) is a refined, compact, and lightly stepping small companion terrier whose sharply defined silhouette balances nimble athleticism with unmistakable lapdog elegance. Squarely built in a 1:1 height-to-length proportion with slender, straight bone, a deep narrow chest, and a well-tucked belly, it carries a flat, moderately narrow skull and an equal-length straight muzzle finished by a black nose, thin tight lips, lean cheeks, dark oval eyes, and small, thin V-shaped ears set high and dropping forward (or folded neatly outward from the skull). Its most remarkable hallmark is its ultra-short, dense, lustrous coat—measuring roughly 2 mm across the body—wearing a rich black, tan, and white tricolour head above a predominantly white body dotted with black or tan spots and markings. Unlike harsh, rough-and-tumble earthworking terriers, the Japanese Terrier was cherished primarily as an urban ladies' lapdog and keen household sentinel: bright, swift, cheerful, and deeply affectionate toward its chosen owner, while staying alert, curious, and politely reserved around unfamiliar strangers.",

    history:
      "The only terrier breed developed in Japan, the Japanese Terrier traces its origins to the seventeenth-century Edo period, when Dutch merchant ships brought early Smooth Fox Terriers into the port of Nagasaki. Crossed with small-sized pointers or small native Japanese dogs to fill urban households' demand for a compact companion—at a time when most native Japanese breeds were medium or large—these nimble little dogs flourished in cosmopolitan port cities such as Kobe and Yokohama, earning affectionate regional nicknames including 'Kobe Terrier,' 'Oyuki Terrier,' and 'Mikado Terrier.' Around 1916 in the Nada district of Hyogo, a notable foundation dog named Kuro-Go bred with local Kobe Terriers helped refine the modern short-coated type; planned close breeding followed primarily around Osaka from about 1920, fixing the breed's distinct character and appearance by 1930. World War II and a post-war surge in fashionable imported Western toy breeds pushed the Japanese Terrier dangerously close to extinction twice—first during the 1940s and again by the 1980s. Definitive international recognition arrived in April 1964, followed by US development-registry admission in October 2020. Today, the Japanese Terrier remains exceedingly rare worldwide, with only several dozen puppies typically born and registered in Japan each year.",

    originalPurpose:
      "Serving primarily as an affectionate urban lapdog and vigilant small household watchdog in Japanese port cities, with modest historical vermin-catching duties.",

    currentRoles: [
      "Devoted, affectionate indoor companion and lapdog",
      "Keen, sensitive household watchdog",
      "Rare heritage companion and occasional agility or rally partner"
    ]
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "cm",
      male: {
        min: 30,
        max: 33
      },
      female: {
        min: 30,
        max: 33
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 10,
        max: 12
      },
      female: {
        min: 10,
        max: 12
      }
    },

    lifespanYears: {
      min: 13,
      max: 15
    },

    coatType:
      "Extremely short, smooth, dense, glossy single-style coat measuring approximately 2 mm in length across the body, offering minimal cold-weather insulation. Long hair is strictly disqualified.",

    coatLength: "Short",

    coatColors: [
      "Tricolour head (black, tan, and white) paired with a predominantly white body carrying black spots, black markings, or tan markings",
      "Solid-body or bicolour patterns without the defining tricolour head are faulted"
    ],

    sheddingLevel:
      "Moderate; the ultra-short 2 mm smooth coat sheds fine short hairs steadily throughout the year",

    droolingLevel:
      "Low; thin, tight lips on lean cheeks and a clean dewlap-free neck keep drooling minimal",

    distinctiveFeatures: [
      "Small, smart, compact square terrier with an exact 1:1 height-to-body-length ratio and light, agile, lively movement",
      "Height at the withers of approximately 30 to 33 cm for both males and females",
      "Adult weight typically ranging from 10 to 12 pounds",
      "Ultra-short, dense, glossy coat measuring approximately 2 mm across the body",
      "Distinctive tricolour head (black, tan, and white) contrasted with a white body accented by black spots or black or tan markings",
      "Equal 1:1 skull-to-nasal-bridge length with a flat moderately narrow skull, subtle stop, straight nasal bridge, black nose, lean cheeks, thin tight lips, and strong white teeth in a scissor bite",
      "Moderately sized, dark, oval eyes projecting a keen, lively expression",
      "High-set, moderately small, thin V-shaped ears dropping forward—or folded and carried standing outward from the sides of the skull",
      "Strong, moderate-length dewlap-free neck widening gradually into lightly sloping shoulders, high withers, short firm back, slightly arched loin, deep narrow chest, and well-tucked belly",
      "Moderately thin tail carried moderately high in motion—traditionally docked in Japan, or left natural with a slight curve tapering to the tip where docking is restricted",
      "Straight fine-boned forelegs, long thighs, moderately angulated hind legs, and tightly closed feet with elastic pads and hard preferably dark nails"
    ]
  },

  temperament: {
    traits: [
      "Swift, lively, cheerful, bright, and intensely alert indoors and outdoors",
      "Deeply devoted, affectionate, and often strongly bonded as a 'one-person' or close-family lapdog",
      "Naturally reserved, discerning, or cautious around unfamiliar strangers without nervous shyness",
      "Exceptionally keen hearing that promptly announces approaching visitors or unusual noises, barking primarily to alert",
      "Independent, curious, and slightly self-willed in classic terrier fashion while remaining sensitive to its owner's mood",
      "Typically gets along well with respectful children and other dogs under supervision, though small-prey chasing instincts remain present"
    ],

    scores: {
      affection: 5,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 3,
      independence: 4,
      trainability: 3,
      barking: 3,
      energy: 3
    }
  },

  care: {
    exercise: {
      level:
        "Moderate; a lively, agile small terrier that stays fit and happy with a couple of brisk daily walks or fenced yard play sessions before curling up contentedly beside its owner",

      minutesPerDay: {
        min: 30,
        max: 45
      },

      activities: [
        "Two brisk daily neighbourhood walks on a secure leash (wearing a warm sweater in chilly weather)",
        "Supervised play and zoomies inside a securely fenced yard",
        "Interactive indoor fetch, trick training, and mental enrichment puzzles",
        "Light canine sports such as rally, obedience, or small-dog agility"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Virtually fuss-free 2 mm glossy coat—wipe down or brush once a week with a soft bristle brush, hound glove, or damp chamois cloth to lift loose short hairs and keep the coat gleaming.",

      bathing:
        "Bathe only occasionally when visibly soiled using a gentle canine shampoo, drying promptly afterward so this ultra-short-coated terrier does not chill.",

      notes: [
        "Trim hard dark nails frequently to keep them short and neat, as overly long nails quickly cause discomfort on small tight feet.",
        "Brush teeth daily—or several times weekly at minimum—using canine enzymatic toothpaste, as small breeds accumulate dental tartar rapidly.",
        "Inspect the high-set thin V-shaped ears weekly for wax buildup, dirt, or allergy-related redness.",
        "Protect the thin 2 mm coat in winter with a well-fitted dog sweater or jacket, and guard pale white skin areas against strong midday sunburn."
      ]
    },

    training: {
      difficulty:
        "Moderate; bright, keen, and quick to learn, yet independent and self-willed enough to require upbeat, patient consistency rather than rigid drills",

      tips: [
        "Use short, joyful, reward-based sessions with small soft treats and warm praise; harsh corrections can trigger wariness or stubbornness in this sensitive companion.",
        "Begin polite visitor greetings and a calm 'quiet' cue early in puppyhood to balance its alert watchdog instinct.",
        "Keep the dog leashed in unfenced areas or provide a secure fence, as terrier curiosity and agility can quickly lure it after passing scents or small animals.",
        "Acclimate puppies gently to nail trims, toothbrushing, and wearing cosy winter sweaters."
      ],

      socialization:
        "Early, calm, positive exposure to varied visitors, respectful children, friendly dogs, and everyday urban sounds ensures its natural stranger reserve stays poised and confident rather than timid."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Mild, temperate, and warm indoor-oriented climates—well suited to urban apartments and homes",
        "Warm sunny climates require shade and careful sun protection over white-coated areas with minimal 2 mm hair cover",
        "Cold and winter climates require a warming dog sweater or insulated coat outdoors, as the ultra-short 2 mm coat offers almost no natural cold insulation"
      ],

      aloneTimeTolerance:
        "Low to moderate; deeply bonded to its family and cherished historically as a close lapdog, a Japanese Terrier prefers being near its household members and can grow anxious or vocal if isolated for long workdays."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced small-breed dog food formulated for active small companions.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until roughly six months of age to maintain steady blood sugar and balanced growth.",
      adult:
        "Two measured meals daily on a consistent schedule to sustain lively energy without weight gain.",
      senior:
        "Two portion-controlled meals daily tailored for slower metabolism, dental comfort, and joint wellness."
    },

    guidelines:
      "Measure every meal accurately with a kitchen scale or measuring cup—on a slender 10- to 12-pound frame, even a single extra pound places noticeable stress on the kneecaps and heart. Count all training treats inside the daily caloric budget, avoid fatty human table scraps, and provide clean fresh drinking water continuously.",

    considerations: [
      "Choose small-breed kibble appropriately sized for narrow terrier jaws.",
      "Watch for skin itchiness or digestive sensitivity, as minor-to-moderate food allergies are occasionally reported by owners; consult a veterinarian if an elimination diet is needed.",
      "Transition gradually between diet formulas over five to seven days to prevent stomach upset."
    ],

    note:
      "Caloric needs vary with age, metabolism, and daily activity. Consult a veterinarian to establish exact daily portions."
  },

  health: {
    overview:
      "Because the Japanese Terrier is an exceedingly rare breed worldwide—with only several dozen puppies registered each year in Japan and tiny populations across Europe and North America—no large-scale peer-reviewed epidemiological surveys or breed-specific genetic mutations have been established to date, and national registries note insufficient population size for broad statistical assessment. Owner reports and small-breed veterinary oversight indicate a generally hardy, long-lived companion (13 to 15 years) with occasional observations of minor-to-moderate food or environmental allergies, umbilical hernias, cataracts, and small-breed patellar luxation, alongside heightened dental-care needs and cold sensitivity from its 2 mm coat.",

    commonConditions: [
      "Food and environmental allergies — minor-to-moderate allergic sensitivities reported by owners, managed through veterinary diet trials and skin care",
      "Patellar luxation — intermittent slipping of the kneecap out of the femoral groove, a classic small-breed orthopaedic concern actively recommended for pre-breeding clinical screening",
      "Hereditary eye disorders (including cataracts and Progressive Retinal Atrophy / PRA) — cataracts appear in owner health reports, and periodic specialist ophthalmologist exams plus PRA screening are advised for breeding stock",
      "Umbilical hernia — small congenital abdominal-wall openings noted in owner reports, evaluated by veterinarians during puppy check-ups",
      "Small-breed periodontal disease and cold sensitivity — rapid tartar accumulation on compact jaws and rapid chilling in winter weather due to the 2 mm coat",
      "Small-population genetic-diversity vulnerability — with historically tiny global numbers and multiple twentieth-century bottlenecks, careful multi-generation pedigree planning is vital to preserve breed vitality"
    ],

    preventiveCare: [
      "Ask breeders for documented parental health evaluations—specifically specialist veterinary ophthalmologist eye exams, clinical patellar luxation evaluations, PRA screening, and multi-generation pedigree diversity details.",
      "Brush teeth daily (or several times weekly) with canine enzymatic toothpaste and schedule regular veterinary dental cleanings.",
      "Keep the dog lean to minimise stress on small kneecaps and joints.",
      "Dress the dog in a warm sweater during cold walks and schedule annual veterinary wellness check-ups with consistent vaccinations and parasite prevention."
    ],

    recommendedScreenings: [
      "Clinical patellar luxation orthopedic evaluation prior to breeding",
      "Ophthalmic examination by a board-certified veterinary ophthalmologist",
      "Progressive Retinal Atrophy (PRA) screening for breeding stock",
      "Elective baseline radiographic hip and elbow evaluations and careful multi-generation pedigree review to protect genetic diversity"
    ],

    dentalCare:
      "Brush teeth daily if possible (or several times weekly) using canine enzymatic toothpaste and schedule routine veterinary dental exams to keep the strong white scissor bite and gums healthy.",

    earCare:
      "Inspect the high-set, thin V-shaped ears weekly for wax buildup, dirt, or allergy-related redness, cleaning gently with a veterinarian-approved solution when needed.",

    skinCare:
      "Check the thin skin beneath the 2 mm coat regularly for allergic redness, dry flakes, minor scratches, cold chapping, or sunburn on exposed white areas."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Apartment or house dwellers seeking a rare, ultra-clean, compact lapdog with moderate exercise needs and virtually fuss-free coat care",
      "Singles, couples, active seniors, and calm families with respectful children wanting an affectionate, loyal 'one-person' companion and alert watchdog",
      "Committed first-time owners willing to provide gentle, consistent training, winter sweaters, and regular dental care",
      "Heritage-breed enthusiasts interested in helping safeguard one of Japan's rarest native dogs"
    ],

    notIdealFor: [
      "Outdoor-only or cold-kennel lifestyles—this 2 mm-coated lapdog must live indoors and needs warm clothing in cold weather",
      "Boisterous households with unsupervised roughhousing toddlers or free-roaming pet rodents",
      "Owners who leave a deeply bonded companion isolated alone all day",
      "People expecting an indiscriminately outgoing dog that immediately jumps into every stranger's arms"
    ]
  },

  funFacts: [
    "The Japanese Terrier is the only terrier breed ever developed in Japan, descending from seventeenth-century Smooth Fox Terriers brought by Dutch ships to Nagasaki and blended with small local dogs.",
    "Its extraordinarily short, velvety, glossy coat measures only about 2 mm across the body—making it one of the shortest-coated dog breeds in the world and meaning it often needs a cosy sweater on cold winter walks.",
    "Before the name 'Japanese Terrier' became standard around 1930, port-city residents in Kobe and Yokohama fondly called these cherished lapdogs 'Oyuki Terriers,' 'Mikado Terriers,' and 'Kobe Terriers.'",
    "World War II and a subsequent boom in Western toy breeds pushed the Japanese Terrier to the brink of extinction twice—and it remains so rare today that typically only around 50 to 80 puppies are registered in Japan each year.",
    "Unlike rugged earthworking terriers bred to dive underground after foxes and badgers, the Japanese Terrier is classified officially as a companion dog, prized for centuries as a devoted indoor lapdog and keen household sentinel."
  ],

  faq: [
    {
      question: "What is a Japanese Terrier?",
      answer:
        "The Japanese Terrier (Nihon Teria) is a rare, sleek, compact small companion terrier—the only terrier breed native to Japan—famous for its velvety 2 mm glossy coat, tricolour head, white spotted body, and devoted lapdog personality."
    },
    {
      question: "How tall and heavy is a Japanese Terrier?",
      answer:
        "Both adult males and females stand approximately 30 to 33 cm at the withers and typically weigh 10 to 12 pounds."
    },
    {
      question: "How long does a Japanese Terrier live?",
      answer:
        "With balanced nutrition, diligent dental care, and routine veterinary check-ups, the Japanese Terrier typically lives 13 to 15 years."
    },
    {
      question: "Can a Japanese Terrier live in an apartment?",
      answer:
        "Yes. Its compact 30 to 33 cm square frame, moderate daily exercise needs (30 to 45 minutes), and quiet indoor lapdog nature make it very adaptable to apartment living—provided it gets daily walks and gentle training to manage alert watchdog barking."
    },
    {
      question: "How much grooming does a Japanese Terrier need, and does it get cold easily?",
      answer:
        "Grooming is minimal—weekly wiping or soft brushing keeps its ultra-short 2 mm coat gleaming, paired with frequent nail trims and daily toothbrushing. Because its coat is so short and sleek, it chills quickly in cold weather and benefits from a warm sweater or jacket outdoors."
    },
    {
      question: "Are Japanese Terriers good with children and other pets?",
      answer:
        "They generally get along well with respectful children and other dogs under supervision, though rough handling does not suit their slender 10- to 12-pound frame and early socialization helps temper their natural reserve around strangers."
    },
    {
      question: "Are Japanese Terriers easy to train?",
      answer:
        "They are bright, observant, and quick learners in short, positive, reward-based sessions, though they carry a classic independent terrier streak and can become wary under harsh corrections."
    },
    {
      question: "What are the main health concerns for a Japanese Terrier?",
      answer:
        "Tiny global numbers prevent large epidemiological studies, though the breed is generally considered hardy. Owner reports and small-breed care highlight minor-to-moderate allergies, cataracts, umbilical hernias, patellar luxation, PRA screening, dental tartar, and winter cold sensitivity."
    }
  ],

  references: [
    "fci-japanese-terrier-official-standard",
    "fci-japanese-terrier-nomenclature",
    "jkc-japanese-terrier-breed-standard",
    "akc-japanese-terrier-breed-profile",
    "jtca-japanese-terrier-health",
    "jtca-japanese-terrier-history",
    "skk-nihon-teria-profile",
    "scc-terrier-japonais-profile",
    "wikimedia-japanese-terrier-22-04-2012-2pl-pleple2000",
    "wikimedia-nihon-teria-canarian"
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
          id: "fci-japanese-terrier-nomenclature",
          role: "verified",
          locator: "Official multilingual names: NIHON TERIA, JAPANESE TERRIER, TERRIER JAPONAIS, JAPANISCHER TERRIER"
        },
        {
          id: "jkc-japanese-terrier-breed-standard",
          role: "verified",
          locator: "Japanese title 日本テリア and historic names 'Oyuki Terrier' (お雪テリア) and 'Mikado Terrier' (ミカド・テリア)"
        },
        {
          id: "jtca-japanese-terrier-history",
          role: "verified",
          locator: "Documents historic regional name 'Kobe Terrier'"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified across FCI Nomenclature No. 259, JKC, and JTCA."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-japanese-terrier-official-standard",
          role: "verified",
          locator: "FCI-CLASSIFICATION: Group 3 Terriers. Section 2 Small-sized Terriers. Without working trial."
        },
        {
          id: "fci-japanese-terrier-nomenclature",
          role: "verified",
          locator: "Group 3 - Terriers; Section: Small sized Terriers"
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
          id: "fci-japanese-terrier-official-standard",
          role: "verified",
          locator: "ORIGIN: Japan; BRIEF HISTORICAL SUMMARY: Nagasaki (17th-century Dutch Smooth Fox Terrier imports), Kobe, and Yokohama"
        },
        {
          id: "jkc-japanese-terrier-breed-standard",
          role: "verified",
          locator: "Origin: Japan; Nagasaki, Kobe, and Yokohama port-city heritage"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Country (Japan) and historic port cities (Nagasaki, Kobe, and Yokohama) verified directly from FCI Standard No. 259 and JKC."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-japanese-terrier-official-standard",
          role: "verified",
          locator: "UTILIZATION (Companion dog), BRIEF HISTORICAL SUMMARY (17th-century Dutch Smooth Fox Terrier imports to Nagasaki crossed with small pointers/native dogs, Kobe & Yokohama lapdogs, ~1920 planned breeding, ~1930 type established), GENERAL APPEARANCE (approx. 2 mm coat)"
        },
        {
          id: "fci-japanese-terrier-nomenclature",
          role: "verified",
          locator: "Date of acceptance on a definitive basis by the FCI: 1964-04-01"
        },
        {
          id: "jkc-japanese-terrier-breed-standard",
          role: "verified",
          locator: "Oyuki Terrier / Mikado Terrier lapdog heritage in Kobe and Yokohama"
        },
        {
          id: "akc-japanese-terrier-breed-profile",
          role: "verified",
          locator: "Only terrier breed originating in Japan; WWII and ~1948 near-extinction bottlenecks; October 2020 AKC FSS acceptance"
        },
        {
          id: "jtca-japanese-terrier-history",
          role: "verified",
          locator: "1916 Nada/Hyogo foundation dog Kuro-Go, Osaka close breeding, 1980s near-extinction, ~50-80 annual registrations in Japan"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Synthesized in original prose from FCI Standard No. 259, FCI Nomenclature No. 259, JKC, AKC, and JTCA."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-japanese-terrier-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS (1:1 height:body length; 1:1 skull:nasal bridge), HEAD (flat narrow skull, subtle stop, black nose, thin tight lips, lean cheeks, scissor bite), EYES (dark oval), EARS (high-set V-shaped forward drop or folded outward), NECK (dewlap-free), BODY, TAIL (traditionally docked in origin country; natural tail slightly curved), LIMBS, MOVEMENT (light and agile), COAT (short smooth dense glossy ~2 mm; long coat disqualified), COLOUR (tricolour head, white body with black spots/black or tan markings; bicolour faulted), SIZE"
        },
        {
          id: "jkc-japanese-terrier-breed-standard",
          role: "verified",
          locator: "Confirms ~2 mm coat length, tricolour head, white body with markings, and 30–33 cm height"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "All proportions, ~2 mm glossy coat, tricolour-head colour pattern, ear carriage options, and disqualifications follow FCI Standard No. 259 (2016) and JKC."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-japanese-terrier-official-standard",
          role: "verified",
          locator: "SIZE: Height at the withers for both males and females: approximately 30 to 33 cm."
        },
        {
          id: "jkc-japanese-terrier-breed-standard",
          role: "verified",
          locator: "体高 牡牝とも約30～33cm (both males and females approx. 30 to 33 cm)."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Preserved verbatim in published unit of centimetres (30 to 33 cm for both males and females) from country-of-origin JKC and FCI Standard No. 259. (AKC separately publishes 10 to 13 inches)."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-japanese-terrier-breed-profile",
          role: "verified",
          locator: "AKC breed record: Weight 10-12 lbs."
        },
        {
          id: "scc-terrier-japonais-profile",
          role: "cited",
          locator: "SCC lists weight as unspecified (NP), mirroring FCI Standard No. 259."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "FCI Standard No. 259, JKC, and SCC omit weight; stored verbatim in published unit of pounds (10 to 12 lb) from AKC."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-japanese-terrier-breed-profile",
          role: "verified",
          locator: "AKC breed record: Life Expectancy 13-15 years."
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified from AKC breed record; FCI Standard No. 259 and JKC omit lifespan."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-japanese-terrier-breed-profile",
          role: "verified",
          locator: "AKC breed traits: Shedding: Moderate; minimal grooming care."
        },
        {
          id: "fci-japanese-terrier-official-standard",
          role: "verified",
          locator: "COAT: Very short (~2 mm), smooth, dense, and glossy."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-japanese-terrier-official-standard",
          role: "verified",
          locator: "Lips: Thin and tight; Cheeks: Lean, not full; NECK: Without dewlap."
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Thin tight lips, lean cheeks, and a dewlap-free neck keep drooling low."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-japanese-terrier-official-standard",
          role: "verified",
          locator: "BEHAVIOUR / TEMPERAMENT: Swift and lively in temperament; lively and cheerful character."
        },
        {
          id: "akc-japanese-terrier-breed-profile",
          role: "verified",
          locator: "Reserved, independent, curious; highly intelligent one-person dog often reserved with strangers; keen alert watchdog warning of strangers; good with respectful children and other dogs under supervision."
        },
        {
          id: "skk-nihon-teria-profile",
          role: "verified",
          locator: "Lively, springy, positive, attentive, enjoys staying close to family members."
        },
        {
          id: "scc-terrier-japonais-profile",
          role: "verified",
          locator: "Lively, vigilant, joyful, and very affectionate pleasant companion."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-japanese-terrier-breed-profile",
          role: "cited",
          locator: "Reserved with strangers, independent/self-willed trainability, alert watchdog barking, moderate exercise, supervision with children and dogs"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates reflecting documented affectionate family devotion, stranger reserve, self-willed terrier curiosity, and moderate energy."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-japanese-terrier-breed-profile",
          role: "cited",
          locator: "Minimal smooth-coat care, frequent nail trims, daily/frequent toothbrushing, moderate exercise (walks + fenced yard), couch companionship"
        },
        {
          id: "skk-nihon-teria-profile",
          role: "cited",
          locator: "Very easy-care short glossy coat; warming coat or sweater may be needed in cold weather"
        }
      ],
      verifiedOn: null,
      note:
        "General small companion-terrier care combining moderate daily exercise and warm winter apparel with minimal coat care and diligent dental hygiene."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-japanese-terrier-breed-profile",
          role: "verified",
          locator: "Exercise: Moderate exercise needs—a couple of good walks or daily fenced-yard sessions while happily curling up on the couch next to its owner."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-japanese-terrier-breed-profile",
          role: "cited",
          locator: "Moderate exercise (a couple of good daily walks or fenced-yard sessions)"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial daily activity range (30 to 45 minutes) suited to a compact, moderate-energy companion terrier."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-japanese-terrier-breed-profile",
          role: "verified",
          locator: "Adaptable to most living conditions (noting a fenced yard is a bonus) and happy curling indoors beside its owner."
        },
        {
          id: "fci-japanese-terrier-official-standard",
          role: "verified",
          locator: "UTILIZATION: Companion dog; historically kept as urban lapdogs in Kobe and Yokohama."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-japanese-terrier-breed-profile",
          role: "verified",
          locator: "Does very well with a securely fenced yard for daily play sessions."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "skk-nihon-teria-profile",
          role: "verified",
          locator: "Pälsen är kort. Ett värmande täcke eller tröja kan behövas vid kall väderlek (warming coat or sweater may be needed in cold weather)."
        },
        {
          id: "fci-japanese-terrier-official-standard",
          role: "verified",
          locator: "Ultra-short ~2 mm single-style coat."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "skk-nihon-teria-profile",
          role: "cited",
          locator: "Enjoys staying close to family members as a pronounced companion dog"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-japanese-terrier-breed-profile",
          role: "cited",
          locator: "Nutrition: Limit treats to prevent obesity, verify safe human foods, and provide fresh water continuously."
        }
      ],
      verifiedOn: null,
      note:
        "General small-breed veterinary nutrition guidance emphasizing lean body weight and awareness of occasional owner-reported food allergies."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Standard small-breed canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "jtca-japanese-terrier-health",
          role: "verified",
          locator: "Owner-reported health concerns include minor to moderate food/environmental allergies, umbilical hernia, and cataracts, plus general small-breed patellar luxation; recommends PRA, OFA CAER eye, and OFA Patellar Luxation testing (with additional hip/elbow testing)."
        },
        {
          id: "skk-nihon-teria-profile",
          role: "verified",
          locator: "Hälsa: Very few individuals prevent reliable national breed-wide health assessment."
        },
        {
          id: "akc-japanese-terrier-breed-profile",
          role: "verified",
          locator: "Regular veterinary check-ups, dental brushing, parasite control, and no formal AKC CHIC panel yet established."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Synthesizes parent-club owner reports, SKK rarity caveats, and AKC preventive guidance without overclaiming unverified disease prevalence or naming clubs/registries in user-facing text."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "jtca-japanese-terrier-health",
          role: "verified",
          locator: "Owner-reported allergies (food/environmental), umbilical hernia, cataracts, and general small-breed luxating patella plus PRA screening"
        },
        {
          id: "skk-nihon-teria-profile",
          role: "verified",
          locator: "Cold sensitivity due to ultra-short coat and rarity limitation on population-wide health data"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Explicitly distinguishes owner-reported concerns and recommended screenings from general small-breed dental, cold-weather, and small-population genetic-diversity precautions."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "jtca-japanese-terrier-health",
          role: "cited",
          locator: "Pre-breeding CAER eye, patellar luxation, and PRA screening"
        },
        {
          id: "akc-japanese-terrier-breed-profile",
          role: "cited",
          locator: "Frequent dental brushing, nail trims, routine check-ups, and parasite control"
        }
      ],
      verifiedOn: null,
      note: "General preventive veterinary care protocol tailored to Japanese Terriers."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "jtca-japanese-terrier-health",
          role: "verified",
          locator: "JTCA Recommended Testing: Progressive Retinal Atrophy (PRA), OFA CAER eye exam, and OFA Patellar Luxation; Additional Testings: OFA Elbows and OFA Hips."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Summarizes Japanese Terrier Club of America recommended and elective screenings without naming registries or clubs in user-facing prose."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-japanese-terrier-breed-profile",
          role: "cited",
          locator: "Teeth should be brushed daily if possible using dog toothpaste."
        },
        {
          id: "fci-japanese-terrier-official-standard",
          role: "cited",
          locator: "Jaws/Teeth: Strong white teeth meeting in a scissor bite."
        }
      ],
      verifiedOn: null,
      note: "Standard small-breed home and veterinary dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-japanese-terrier-official-standard",
          role: "cited",
          locator: "EARS: Set high, moderately small, thin, V-shaped, dropping forward or folded outward."
        }
      ],
      verifiedOn: null,
      note: "Routine ear inspection and cleaning guidance."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-japanese-terrier-official-standard",
          role: "cited",
          locator: "Ultra-short (~2 mm) smooth glossy coat."
        },
        {
          id: "jtca-japanese-terrier-health",
          role: "cited",
          locator: "Owner-reported minor to moderate food/environmental allergies."
        }
      ],
      verifiedOn: null,
      note: "General skin, allergy, cold, and sun-protection guidelines for an ultra-short-coated breed."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-japanese-terrier-breed-profile",
          role: "cited",
          locator: "Adaptable moderate-exercise companion, minimal grooming, reserved with strangers, supervision with children and other dogs"
        },
        {
          id: "skk-nihon-teria-profile",
          role: "cited",
          locator: "Pronounced indoor companion dog needing cold-weather sweater protection"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability evaluations balancing compact apartment adaptability and easy coat care against cold sensitivity, stranger reserve, and desire for close human company."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-japanese-terrier-breed-profile",
          role: "verified",
          locator: "Only terrier breed originating in Japan; WWII and ~1948 near-extinction bottlenecks"
        },
        {
          id: "fci-japanese-terrier-official-standard",
          role: "verified",
          locator: "Approx. 2 mm ultra-short glossy coat; classified as companion dog; 17th-century Nagasaki Dutch Smooth Fox Terrier origins"
        },
        {
          id: "jkc-japanese-terrier-breed-standard",
          role: "verified",
          locator: "Historic port-city nicknames Oyuki Terrier and Mikado Terrier"
        },
        {
          id: "jtca-japanese-terrier-history",
          role: "verified",
          locator: "Kobe Terrier name and ~50-80 annual registrations in Japan"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified historical, anatomical, demographic, and cultural facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-japanese-terrier-official-standard",
          role: "verified",
          locator: "Origin (Japan), height (30-33 cm), ~2 mm coat, tricolour head over white body"
        },
        {
          id: "akc-japanese-terrier-breed-profile",
          role: "verified",
          locator: "Weight (10-12 lb), lifespan (13-15 years), moderate exercise, apartment adaptability, dental/nail care, supervision with children and dogs"
        },
        {
          id: "skk-nihon-teria-profile",
          role: "verified",
          locator: "Winter sweater/coat need and minimal grooming"
        },
        {
          id: "jtca-japanese-terrier-health",
          role: "verified",
          locator: "Owner-reported allergies, cataracts, umbilical hernia, patellar luxation, and PRA screening"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "FAQ answers synthesize FCI Standard No. 259, JKC, AKC, JTCA, and SKK records without naming clubs or registries in user-facing prose."
    }
  },

  updatedOn: "2026-11-26"
};
