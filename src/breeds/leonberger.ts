import type { Breed } from "../schema/breed.types";

export const leonberger: Breed = {
  slug: "leonberger",
  name: "Leonberger",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Leo",
    "Chien de Leonberg",
    "Gentle Lion"
  ],

  group:
    "Pinscher and Schnauzer Type, Molossoid Breeds, and Swiss Mountain and Cattle Dogs; Section 2.2 — Mountain-type Molossoids (without working trial; also classified in the Working group)",

  origin: {
    country: "Germany",
    region: "Leonberg (Baden-Württemberg)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Leonberger_dog_001.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Leonberger_dog_001.jpg",
      title: "Leonberger dog 001.jpg",
      description:
        "An adult Leonberger bounding outdoors, showing its massive yet graceful lion-yellow coat, pronounced black facial mask, feathered forelegs, and lush plumed tail.",
      creator: "t f",
      uploader: "Ltshears",
      capturedOn: "2008-09-14",
      uploadedOn: "2008-11-02",
      width: 3008,
      height: 2000,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by t f, Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:Leonberger_dog_001.jpg. License: https://creativecommons.org/licenses/by/2.0/. Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-11-25"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Leonberger_g%C5%82owa40tt.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Leonberger_g%C5%82owa40tt.jpg",
      title: "Leonberger głowa40tt.jpg",
      description:
        "A detailed portrait of a Leonberger displaying its wrinkle-free rectangular head, deep black mask extending over kind brown oval eyes, close-fitting black lips, high-set fleshy drop ears, and thick neck mane.",
      creator: "Pleple2000",
      uploader: "Pleple2000",
      capturedOn: "2006-10-01",
      uploadedOn: "2006-10-04",
      width: 2628,
      height: 2040,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Pleple2000, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Leonberger_g%C5%82owa40tt.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-25"
    }
  ],

  overview: {
    summary:
      "A majestic, lion-maned giant German mountain dog from Leonberg, Baden-Württemberg, uniting water-rescue athleticism, webbed paws, and unmistakable masculine-feminine elegance with a famously gentle, steady, child-loving companion temperament.",

    description:
      "The Leonberger—affectionately nicknamed the 'Leo'—is a colossal, strongly muscled yet remarkably graceful working giant instantly recognized by its warm lion-yellow, golden, red-brown, or sandy double coat and dramatic black facial mask. Slightly longer than tall in a balanced 9:10 height-to-body ratio, the breed exhibits strong sexual dimorphism: mature males carry commanding power and a rich lion-like mane framing the neck and chest, while females remain distinctly lighter and unmistakably feminine. Its elongated, rectangular, wrinkle-free head balances equal skull and muzzle lengths with a slightly arched nasal bridge, tight dry black lips free of heavy flews, a dewlap-free muscular neck, warm medium-to-dark brown oval eyes with close-fitting lids, and fleshy high-set drop ears hanging neatly beside the cheeks. Built for effortless, ground-covering movement on land and buoyant breaststroke swimming through webbed feet and a water-resistant double coat, the Leonberger shines most brightly as a serene, self-assured, and deeply affectionate family companion—patient with children, discerning yet friendly with polite strangers, and versatile in water rescue, drafting, therapy, and obedience.",

    history:
      "Created in the late 1830s and early 1840s in the German town of Leonberg near Stuttgart (in modern-day Baden-Württemberg), the Leonberger was the deliberate vision of local town councillor and entrepreneur Heinrich Essig. Seeking a majestic companion dog resembling the lion on Leonberg's town coat of arms, Essig crossed a black-and-white Landseer-type Newfoundland female with a 'Barry' mountain dog from the Great St. Bernard hospice, later introducing Pyrenean Mountain Dog blood. The first litters formally named 'Leonbergers' were born in 1846. Initially often white and marketed enthusiastically by Essig across Europe as prestigious companions for royalty and prominent figures, the breed later became standardized around its iconic tawny, black-masked, lion-maned appearance after Essig's death—and was prized across late-nineteenth-century Baden-Württemberg as an all-around farm watchdog and draught dog. Both World Wars devastated German breeding stocks, reducing survivors to only a handful of dogs before dedicated post-war breeders rebuilt the population. Definitive international recognition followed in February 1955, with full Working Group admission in the United States arriving in January 2010. Today, the Leonberger is cherished worldwide as a gentle giant companion, therapy partner, and water-rescue and drafting athlete.",

    originalPurpose:
      "Serving as a majestic royal and household companion alongside all-around German farm guarding, draught carting, and coastal water-rescue work.",

    currentRoles: [
      "Gentle, devoted family companion",
      "Water-rescue and swimming work dog",
      "Draught-carting, agility, obedience, and tracking competitor",
      "Therapy dog and calm household watchdog"
    ]
  },

  physical: {
    sizeCategory: "Giant",

    height: {
      unit: "cm",
      male: {
        min: 72,
        max: 80
      },
      female: {
        min: 65,
        max: 75
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 110,
        max: 170
      },
      female: {
        min: 90,
        max: 140
      }
    },

    lifespanYears: {
      min: 8,
      max: 10
    },

    coatType:
      "Medium-soft to coarse, profusely long, close-fitting water-resistant double coat that lies straight (a slight wave is permitted) without parting down the back and without hiding body contours beneath its thick, soft undercoat. Mature males develop a prominent lion-like mane across the neck and chest, balanced by distinct foreleg feathering, ample hindquarter breeches, short coat on the face and front legs, and a richly furnished tail. Presented completely natural without sculpting or trimming.",

    coatLength: "Long",

    coatColors: [
      "Lion yellow, golden, red, and reddish brown, always with a black facial mask",
      "Sandy (pale yellow or cream) and all intermediate combinations, always with a black facial mask",
      "Black outer-coat hair tips are permitted provided black never becomes the dog's basic colour; a small white patch or stripe on the chest and white hairs on the toes are tolerated (solid black, black-and-tan, brown with brown nose, white, silver, or complete lack of mask are unacceptable)"
    ],

    sheddingLevel:
      "High; sheds generously throughout the year and blows its thick, soft undercoat heavily twice a year",

    droolingLevel:
      "Low; unlike heavier-flewed alpine giants, close-fitting, tight, dry black lips with closed corners and a dewlap-free neck keep drooling remarkably modest",

    distinctiveFeatures: [
      "Strongly dimorphic, muscular yet elegant giant build combining commanding male substance (with lion-like neck and chest mane) and unmistakably feminine females",
      "Height at the withers of 72 to 80 cm for males (recommended average 76 cm) and 65 to 75 cm for females (recommended average 70 cm)",
      "Adult weight typically ranging from 110 to 170 pounds for males and 90 to 140 pounds for females",
      "Balanced 9:10 height-to-body-length ratio with chest depth nearly 50 percent of withers height reaching at least to the elbows, firm level back, broad oval ribcage, and slight abdominal tuck-up",
      "Elongated, deeper-than-broad rectangular wrinkle-free head with equal 1:1 skull-to-muzzle length, moderately defined stop, even slightly arched nasal bridge, and full black mask extending over the eyes",
      "Always-black nose, tight dry black lips with closed corners, strong dewlap-free neck, and strong jaws meeting in a complete 42-tooth scissor bite (pincer bite accepted; missing M3 tolerated)",
      "Medium-sized oval light-to-dark brown eyes with close-fitting eyelids showing no conjunctiva or haw and a kind, steady expression",
      "High-set, fleshy, medium-sized triangular drop ears hanging flat and close to the cheeks",
      "Richly feathered tail reaching at least to the hock—hanging straight at rest and carried gently curved never above back level in motion",
      "Tight, rounded, well-arched cat-like webbed feet with black pads supporting an elastic, ground-covering, single-tracking gait"
    ]
  },

  temperament: {
    traits: [
      "Gentle, serene, self-assured, and remarkably even-tempered indoors—prized above all as a devoted family companion",
      "Notably friendly, patient, and tolerant around children (though its massive bulk can easily knock toddlers over accidentally)",
      "Neither shy nor aggressive; confident, calm, playful, and insensitive to sudden everyday noises",
      "Intelligent, alert, and eager to please with sound judgement, making a reassuring, discriminating watchdog",
      "Deeply people-oriented and thrives on constant integration into family activities rather than solitary yard life",
      "Generally sociable with other dogs when properly socialized, while puppies and adolescents are notably exuberant and energetic",
      "Natural swimmer drawn enthusiastically to lakes, rivers, and water-rescue tasks"
    ],

    scores: {
      affection: 5,
      withChildren: 5,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: 3,
      independence: 2,
      trainability: 4,
      barking: 2,
      energy: 3
    }
  },

  care: {
    exercise: {
      level:
        "Moderate to high; calm and relaxed inside the house, adult Leonbergers still require vigorous daily outdoor exercise, swimming, or working tasks—while fast-growing puppies need strictly moderated low-impact activity to protect developing giant joints",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Brisk daily walks, trail hikes, or steady cool-weather jogging for fully mature adults",
        "Swimming and structured water-rescue training (ideal joint-friendly exercise)",
        "Draught carting, agility, obedience, rally, and tracking sports",
        "Supervised romping inside a large, tall, securely fenced yard"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Line-brush and comb thoroughly down to the skin several times a week—and daily during spring and autumn coat blows—using a long-pin brush, slicker brush, undercoat rake, and metal comb, concentrating behind the ears, chest mane, armpits, belly, and hindquarter breeches to prevent dense felted mats.",

      bathing:
        "Bathe every six to eight weeks (or after muddy swims) using a mild canine shampoo; always comb out every tangle before bathing and blow-dry thoroughly down to the skin to prevent damp hot spots.",

      notes: [
        "Never clip or shave the water-resistant double coat short; present the coat naturally untrimmed, limiting neatening only to stray hairs around the webbed feet and sanitary areas.",
        "Inspect and dry the fleshy, close-hanging drop ears weekly—and after every swimming session—to prevent moisture-related ear infections.",
        "Trim strong nails every two weeks so the rounded cat feet stay tight and balanced under giant weight.",
        "Brush teeth several times weekly using canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Easy to moderate; intelligent, sensitive, and eager to please, making it highly trainable with upbeat positive reinforcement—though early leash manners are mandatory because exuberant adolescents rapidly outweigh their handlers",

      tips: [
        "Enrol in group puppy socialization and obedience classes early so your Leonberger masters loose-leash walking, polite non-jumping greetings, and calm focus long before reaching 90 to 170 pounds.",
        "Use calm, warm, reward-based training with praise and measured treats; harsh corrections damage trust in this sensitive giant.",
        "Keep training engaging through real working jobs such as carting, water rescue, rally, or therapy work.",
        "Accustom puppies early to grooming tables, high-velocity dryers, paw handling, ear checks, and vehicle ramps."
      ],

      socialization:
        "Broad, positive early socialization across varied people, friendly dogs, children, indoor surfaces, and busy public places reinforces its confident, noise-steady, universally amiable character."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cold, snowy, and cool temperate climates, where its thick water-resistant double coat and dense undercoat excel outdoors",
        "Four-season climates with air-conditioned indoor space during summer months",
        "Hot, humid climates are ill-suited and pose a real overheating risk; schedule exercise for dawn or dusk, keep cool air conditioning available indoors, and supply continuous cold drinking water"
      ],

      aloneTimeTolerance:
        "Low; developed first and foremost as a family companion, a Leonberger thrives on daily togetherness and becomes lonely or restless if left isolated outside or alone for long workdays."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced giant-breed dog food, strictly using a controlled-calcium, moderate-calorie large/giant-breed puppy diet throughout skeletal growth.",

    feedingFrequency: {
      puppy:
        "Three to four measured meals daily during rapid growth on a controlled giant-breed puppy diet designed to promote slow, steady, lean bone development.",
      adult:
        "Two measured meals daily to sustain condition and reduce acute stomach distension.",
      senior:
        "Two portion-controlled meals daily adjusted for slower giant-breed metabolism, cardiac support, and joint comfort."
    },

    guidelines:
      "Weigh or measure every meal accurately and feel beneath the thick double coat weekly to verify easily palpable ribs without excess fat. Keeping a Leonberger lean is one of the most effective safeguards against hip dysplasia, elbow arthritis, and joint strain across a 90- to 170-pound frame. Divide daily adult food into two smaller meals, enforce calm rest for an hour before and after eating, and provide cool fresh water continuously.",

    considerations: [
      "Because this deep-chested giant is vulnerable to life-threatening gastric dilatation-volvulus (GDV / bloat), divide daily rations into two meals, avoid vigorous running around mealtimes, and discuss prophylactic gastropexy with a veterinarian.",
      "Feed growing puppies a balanced giant-breed growth diet with controlled calcium and energy—never add unprescribed calcium supplements.",
      "Avoid high-impact jumping, forced jogging, and frequent steep staircases until giant growth plates close around 18 to 24 months.",
      "Transition gradually between diet formulas over five to seven days to avoid digestive upset."
    ],

    note:
      "Giant-breed puppy growth nutrition and adult joint/bloat dietary routines should always be tailored with a veterinarian."
  },

  health: {
    overview:
      "The Leonberger is a deeply loved giant breed with a relatively short life expectancy—typically 8 to 10 years according to breed guides, while peer-reviewed demographic mortality studies report median ages at death between 7 and 8 years, driven heavily by giant-breed cancers (such as osteosarcoma and hemangiosarcoma) and cardiac disease. Because twentieth-century wartime bottlenecks narrowed the breed's gene pool, veterinary geneticists have mapped four key DNA-screenable hereditary neurological disorders in Leonbergers: three distinct forms of Leonberger polyneuropathy / laryngeal paralysis (LPN1 via ARHGEF10, LPN2 via GJA9, and LPPN3 via CNTNAP1) and juvenile-onset Leukoencephalomyelopathy (LEMP via NAPEPLD). Responsible breeding programmes combine all four neurological DNA tests with pre-breeding radiographic hip and elbow evaluations, specialist eye exams (including gonioscopy where advised), thyroid panels, and cardiologist heart clearances.",

    commonConditions: [
      "Inherited Leonberger Polyneuropathy and Laryngeal Paralysis (LPN1, LPN2, and LPPN3) — progressive peripheral-nerve degeneration causing exercise intolerance, noisy breathing or voice change from laryngeal paralysis, hind-limb weakness, and high-stepping gait; genetically linked to a 10-bp deletion in ARHGEF10 (LPN1, juvenile onset), an autosomal incomplete-dominant frameshift variant in GJA9 (LPN2, c.1107_1108delAG), and an autosomal-recessive missense variant in CNTNAP1 (LPPN3, c.2810G>A), all screenable via DNA testing",
      "Leukoencephalomyelopathy (LEMP, NAPEPLD-related) — a severe juvenile-onset autosomal-recessive neurodegenerative white-matter disorder (onset typically between 1 and 4 years of age) causing progressive ataxia and loss of coordination, linked in Leonbergers to a missense variant in NAPEPLD (c.538G>C; p.A180P) and fully preventable via pre-breeding DNA screening",
      "Cancers (including osteosarcoma and hemangiosarcoma) — major giant-breed causes of premature mortality documented in peer-reviewed demographic surveys (with cancer accounting for over 40% of recorded deaths in UK pedigree cohorts)",
      "Hip dysplasia and elbow dysplasia — developmental joint laxity and malformation leading to painful osteoarthritis in heavy-boned giants; monitored through mandatory pre-breeding radiographic evaluations",
      "Gastric dilatation-volvulus (GDV / bloat) — acute, life-threatening gas distension and twisting of the stomach requiring immediate emergency surgery in deep-chested giants",
      "Dilated Cardiomyopathy (DCM), hypothyroidism, and Addison's disease — acquired heart-muscle weakening and autoimmune endocrine disorders monitored via veterinary cardiac and thyroid evaluations",
      "Hereditary eye disorders (including cataracts, entropion/ectropion, and pectinate ligament abnormality) and moisture-related ear or skin infections — monitored via periodic specialist ophthalmologist examinations, thorough post-swim drying, and weekly ear hygiene"
    ],

    preventiveCare: [
      "Insist on documented pre-breeding clearances for both parents: radiographic hip and elbow evaluations, specialist veterinary ophthalmologist eye examination, thyroid panel, cardiac evaluation, and DNA tests for LPN1 (ARHGEF10), LPN2 (GJA9), LPPN3 (CNTNAP1), and LEMP (NAPEPLD).",
      "Protect developing giant joints during the first 18 to 24 months by avoiding forced running, high jumping, and repetitive stair climbing while keeping the dog strictly lean.",
      "Divide daily adult meals into two portions, enforce calm post-meal rest, know emergency warning signs of bloat (unproductive retching, swollen tight abdomen, restlessness), and discuss prophylactic gastropexy with a veterinarian.",
      "Dry the dense double coat and fleshy drop ears thoroughly after every swim to prevent ear infections and moist hot spots, and guard carefully against heatstroke in warm weather.",
      "Schedule annual veterinary wellness exams (semi-annually from age 6 onward) to watch early for subtle lameness, breathing changes, or cardiac murmurs."
    ],

    recommendedScreenings: [
      "DNA test for Leonberger Polyneuropathy Type 1 (LPN1 / ARHGEF10)",
      "DNA test for Leonberger Polyneuropathy Type 2 (LPN2 / GJA9)",
      "DNA test for Laryngeal Paralysis and Polyneuropathy Type 3 (LPPN3 / CNTNAP1)",
      "DNA test for Leukoencephalomyelopathy (LEMP / NAPEPLD)",
      "Radiographic hip dysplasia evaluation and radiographic elbow dysplasia evaluation prior to breeding",
      "Ophthalmic examination by a board-certified veterinary ophthalmologist (including gonioscopy where regionally advised), plus thyroid panel and cardiac evaluation"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste and schedule regular veterinary dental checks to keep the strong 42-tooth scissor or level bite and gums healthy.",

    earCare:
      "Inspect and thoroughly dry the high-set, fleshy, close-hanging drop ears weekly—and after every swimming outing—to clear moisture, wax, or debris and prevent ear infections.",

    skinCare:
      "Dry the lush water-resistant double coat completely down to the skin after bathing or swimming and check beneath the thick mane and breeches during frequent line-brushing for mats, ticks, or moist dermatitis ('hot spots')."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Active families living in spacious houses with large, tall, securely fenced yards seeking a serene, patient, child-loving gentle giant",
      "Owners in cool or temperate climates who enjoy daily outdoor walks, hiking, swimming, water rescue, or draught carting",
      "Committed handlers willing to dedicate significant weekly time to brushing a lush double coat, invest in early group obedience classes, and budget for giant-breed care",
      "People seeking a friendly, non-aggressive giant with noticeably less drool than heavier-flewed alpine mastiffs"
    ],

    notIdealFor: [
      "City apartment dwellers, small-lot homes, or households lacking room and vehicle capacity for a 90- to 170-pound giant",
      "Fastidious housekeepers unwilling to manage heavy year-round shedding and dramatic twice-yearly undercoat blows",
      "Hot, humid outdoor lifestyles lacking reliable air-conditioned indoor refuge",
      "Owners who leave a family-oriented companion alone all day or are unprepared for a relatively short lifespan and rigorous genetic health screening research"
    ]
  },

  funFacts: [
    "Town councillor Heinrich Essig created the Leonberger in the 1840s specifically to resemble the lion on the coat of arms of Leonberg, Germany—and promoted the first litters (born in 1846) so masterfully that European royalty and celebrities soon prized them as status companions.",
    "Although its iconic tawny, black-masked, lion-maned coat is famous today, Essig's earliest Leonbergers were predominantly white—the modern golden-red colour with a mandatory black mask was standardized only after his death in 1899.",
    "Unlike heavily flewed giant mountain dogs, the Leonberger has tight, dry black lips and a dewlap-free neck—giving it the presence of a giant alpine lion with surprisingly modest drooling.",
    "Thanks to webbed feet and a water-resistant double coat that traps buoyant air, Leonbergers are extraordinary natural swimmers actively trained for maritime water-rescue work across Europe and North America.",
    "Between 2014 and 2020, collaborative international veterinary genetics teams unlocked four separate causal gene variants in Leonbergers—ARHGEF10 (LPN1), GJA9 (LPN2), NAPEPLD (LEMP), and CNTNAP1 (LPPN3)—transforming breeding safety through simple DNA tests."
  ],

  faq: [
    {
      question: "What is a Leonberger?",
      answer:
        "The Leonberger ('Leo') is a giant, lion-maned German mountain dog created in Leonberg in 1846 to resemble the town's heraldic lion, renowned for its lush tawny coat, black facial mask, webbed swimming feet, and extraordinarily gentle family nature."
    },
    {
      question: "How tall and heavy is a Leonberger?",
      answer:
        "Adult males stand 72 to 80 cm at the withers (averaging 76 cm) and typically weigh 110 to 170 pounds, while adult females stand 65 to 75 cm (averaging 70 cm) and typically weigh 90 to 140 pounds."
    },
    {
      question: "How long does a Leonberger live?",
      answer:
        "Like most giant breeds, the Leonberger has a relatively short life expectancy—commonly cited as 8 to 10 years in breed guides, while large veterinary demographic studies report median lifespans around 7 to 8 years."
    },
    {
      question: "Do Leonbergers shed and drool a lot?",
      answer:
        "They are heavy shedders—shedding generously year-round and blowing their thick undercoat dramatically twice a year—requiring thorough line-brushing several times a week (and daily during moults). However, thanks to tight dry lips and no dewlap, they drool far less than heavier-flewed giants like St. Bernards or Newfoundlands."
    },
    {
      question: "Can a Leonberger live in an apartment?",
      answer:
        "No. Their colossal 90- to 170-pound size, exuberant puppy energy, avoidance of constant staircases during giant growth, and daily exercise needs make a large house with a big, strongly fenced yard essential."
    },
    {
      question: "Are Leonbergers good family dogs and easy to train?",
      answer:
        "Yes. Bred first and foremost as family companions, they are famously gentle, patient, playful, and child-friendly (always supervised so toddlers are not accidentally toppled). They are intelligent and eager to please with positive group obedience training started early before they reach giant adult strength."
    },
    {
      question: "What coat colours do Leonbergers come in?",
      answer:
        "Accepted colours are lion yellow, golden, red, reddish brown, and sandy (pale yellow or cream) in any intermediate blend—always paired with a mandatory black facial mask (black hair tips and small white chest or toe hairs are permitted)."
    },
    {
      question: "What are the main health concerns for a Leonberger?",
      answer:
        "Key breed-associated health priorities include four DNA-screenable inherited neurological disorders—Leonberger Polyneuropathy types LPN1 (ARHGEF10), LPN2 (GJA9), and LPPN3 (CNTNAP1), plus Leukoencephalomyelopathy (LEMP / NAPEPLD)—alongside hip and elbow dysplasia, giant-breed cancers (osteosarcoma and hemangiosarcoma), acute bloat (GDV), Dilated Cardiomyopathy, hypothyroidism, and hereditary eye conditions."
    }
  ],

  references: [
    "fci-leonberger-official-standard",
    "fci-leonberger-nomenclature",
    "akc-leonberger-official-standard",
    "akc-leonberger-breed-profile",
    "rkc-leonberger-breed-standard",
    "rkc-leonberger-breed-profile",
    "lca-leonberger-health-glossary",
    "lca-leonberger-find-a-leo",
    "pubmed-ekenstedt-2014-st-bernard-arhgef10-lpn1",
    "pmc-becker-2017-leonberger-gja9-lpn2",
    "pmc-minor-2018-leonberger-napepld-lemp",
    "pmc-letko-2020-st-bernard-cntnap1-lppn3",
    "pmc-letko-2020-leonberger-genomic-diversity",
    "wikimedia-leonberger-dog-001-tf",
    "wikimedia-leonberger-glowa40tt-pleple2000"
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
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-leonberger-breed-profile",
          role: "verified",
          locator: "Uses common short name 'Leo' and pronunciation 'Lee-uhn-berger'"
        },
        {
          id: "fci-leonberger-nomenclature",
          role: "verified",
          locator: "Official breed name: LEONBERGER"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Leo verified via AKC and LCA; Chien de Leonberg and Gentle Lion are widely used French and English nicknames."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-leonberger-official-standard",
          role: "verified",
          locator: "CLASSIFICATION F.C.I.: Group 2 Pinscher and Schnauzer, Molossoid breeds, Swiss Mountain and Cattle Dogs. Section 2.2 Molossoid breeds, Mountain type. Without working trial."
        },
        {
          id: "akc-leonberger-official-standard",
          role: "verified",
          locator: "AKC Working Group official standard"
        },
        {
          id: "rkc-leonberger-breed-standard",
          role: "verified",
          locator: "Royal Kennel Club Working Group breed standard"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-leonberger-official-standard",
          role: "verified",
          locator: "ORIGIN: Germany; BRIEF HISTORICAL SUMMARY: Leonberg near Stuttgart, Baden-Württemberg"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Country (Germany) and region (Leonberg, Baden-Württemberg) verified directly from FCI Standard No. 145."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-leonberger-official-standard",
          role: "verified",
          locator: "BRIEF HISTORICAL SUMMARY (late 1830s/early 1840s Heinrich Essig cross of black-and-white Newfoundland bitch, Grand St. Bernard 'Barry' male, and Pyrenean Mountain Dog; first Leonbergers born 1846; town lion heraldry; Baden-Württemberg farm watch/draft dog; World War bottlenecks), GENERAL APPEARANCE, IMPORTANT PROPORTIONS (9:10)"
        },
        {
          id: "fci-leonberger-nomenclature",
          role: "verified",
          locator: "Definitive FCI acceptance date: 1955-02-17"
        },
        {
          id: "akc-leonberger-official-standard",
          role: "verified",
          locator: "Strong sexual dimorphism, lion-like male mane, untrimmed natural coat, gentle family companion temperament"
        },
        {
          id: "akc-leonberger-breed-profile",
          role: "verified",
          locator: "2010 AKC Working Group recognition, drafting/agility/therapy versatility"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Synthesized in original prose from FCI Standard No. 145, FCI Nomenclature No. 145, AKC Standard, and AKC profile."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-leonberger-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS (9:10 height:length, chest ~50% height, 1:1 muzzle:skull), HEAD (wrinkle-free, slightly arched nasal bridge, close-fitting black lips, 42-tooth scissor bite / pincer accepted), EYES (close-fitting lids, no conjunctiva), EARS (high-set fleshy drop), NECK (no dewlap), BODY, LIMBS, FEET, GAIT, COAT (medium-soft to coarse, never parted, male mane), COLOUR (lion yellow/red/red-brown/sandy with mandatory black mask; small white chest/toe hairs tolerated), SIZE"
        },
        {
          id: "akc-leonberger-official-standard",
          role: "verified",
          locator: "Sexual dimorphism, untrimmed natural presentation (no sculpting), cat feet, chest white patch <=5 in limit, single-tracking convergence at speed"
        },
        {
          id: "rkc-leonberger-breed-standard",
          role: "verified",
          locator: "Confirming all conformation details, 9:10 ratio, tight dry lips, and dewlap-free neck"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "All proportions, wrinkle-free head, tight dry black lips, dewlap-free neck, mandatory black mask, natural untrimmed coat, and colour disqualifications follow FCI Standard No. 145, AKC Official Standard, and 2025 RKC Standard."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-leonberger-official-standard",
          role: "verified",
          locator: "SIZE: Height at the withers: Dogs 72 to 80 cm (recommended average 76 cm). Bitches 65 to 75 cm (recommended average 70 cm)."
        },
        {
          id: "rkc-leonberger-breed-standard",
          role: "verified",
          locator: "Size: Height at withers: dogs 72-80cms; bitches 65-75cms."
        },
        {
          id: "akc-leonberger-official-standard",
          role: "cited",
          locator: "Separately publishes height in inches: males 28 to 31.5 inches (30 in preferred), females 25.5 to 29.5 inches (27.5 in preferred)."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Preserved verbatim in published unit of centimetres (72 to 80 cm males, 65 to 75 cm females) from country-of-origin FCI Standard No. 145 and RKC Standard."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-leonberger-breed-profile",
          role: "verified",
          locator: "Weight: 110-170 pounds (male), 90-140 pounds (female)."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "FCI Standard No. 145 and RKC do not publish numerical weight bounds; stored verbatim in published unit of pounds (110 to 170 lb males, 90 to 140 lb females) from the AKC breed profile."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "lca-leonberger-find-a-leo",
          role: "verified",
          locator: "Leonbergers average lifespan is 8 to 10 years."
        },
        {
          id: "rkc-leonberger-breed-profile",
          role: "verified",
          locator: "Breed characteristics: Lifespan: Under 10 years."
        },
        {
          id: "akc-leonberger-breed-profile",
          role: "cited",
          locator: "AKC profile lists Life Expectancy: 7 years (single figure)."
        },
        {
          id: "pmc-letko-2020-leonberger-genomic-diversity",
          role: "cited",
          locator: "Peer-reviewed longevity data reporting mean male lifespan 7.9 years (females higher)."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Stored verbatim as 8 to 10 years from the Leonberger Club of America, with peer-reviewed median lifespans (~7–8 years) and AKC's 7-year figure transparently explained in health and FAQ text."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-leonberger-breed-profile",
          role: "verified",
          locator: "Grooming: Leonbergers shed a lot—and twice a year, they shed even more."
        },
        {
          id: "rkc-leonberger-breed-profile",
          role: "verified",
          locator: "Breed characteristics: Sheds Yes."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-leonberger-official-standard",
          role: "verified",
          locator: "Lips: Close fitting, black, corners of lips closed; NECK: without throatiness or dewlap."
        },
        {
          id: "akc-leonberger-official-standard",
          role: "verified",
          locator: "Lips: Tight, corners closed and dry, outer lips black in color."
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Tight, dry, closed-corner lips and a dewlap-free neck keep drooling noticeably lower than heavier-flewed alpine giants."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-leonberger-official-standard",
          role: "verified",
          locator: "BEHAVIOUR / TEMPERAMENT: Marked friendliness towards children, neither shy nor aggressive, agreeable, obedient and fearless in all situations, insensitive to noise."
        },
        {
          id: "akc-leonberger-official-standard",
          role: "verified",
          locator: "Temperament: Gentle character and even temperament of utmost importance; confident, steady, playful, willing to please, good capacity for learning."
        },
        {
          id: "akc-leonberger-breed-profile",
          role: "verified",
          locator: "Friendly yet discriminating watchdog; exuberant puppies/adolescents; calm subdued adults; strong therapy-dog potential."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-leonberger-breed-profile",
          role: "cited",
          locator: "Gentle serene family affection, high child friendliness, good dog/stranger sociability, willing trainability, moderate adult energy"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates reflecting documented family devotion, steady confidence, low nuisance barking, and moderate-to-high working energy."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-leonberger-breed-profile",
          role: "cited",
          locator: "Frequent brushing with metal comb, undercoat rake, pin and slicker brush; biweekly nail trims; daily vigorous adult exercise; drafting/agility; group obedience classes"
        },
        {
          id: "rkc-leonberger-breed-profile",
          role: "cited",
          locator: "Large house requirement, shedding, and active exercise needs"
        }
      ],
      verifiedOn: null,
      note:
        "General giant mountain-dog care combining daily adult exercise and puppy joint protection with intensive double-coat line-brushing and early group obedience."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-leonberger-breed-profile",
          role: "verified",
          locator: "Exercise: Adult Leonbergers are calm indoors yet need vigorous daily exercise—hiking, jogging, cycling, drafting, or agility—and a large securely fenced yard."
        },
        {
          id: "rkc-leonberger-breed-profile",
          role: "verified",
          locator: "Breed characteristics: High outdoor exercise capacity (up to/over 2 hours daily for fit adults)."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-leonberger-breed-profile",
          role: "cited",
          locator: "Daily vigorous adult exercise paired with puppy joint moderation"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial daily activity range (60 to 90 minutes) for fully mature adults; growing giant puppies require strictly moderated low-impact exercise."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-leonberger-breed-profile",
          role: "verified",
          locator: "Exercise: If you live in a city apartment or a house on a small suburban lot, this may not be the breed for you."
        },
        {
          id: "rkc-leonberger-breed-profile",
          role: "verified",
          locator: "Breed characteristics: Size of home: Large house."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-leonberger-breed-profile",
          role: "verified",
          locator: "A large yard with a tall, strong fence is the ideal place for a Leo to run around."
        },
        {
          id: "rkc-leonberger-breed-profile",
          role: "verified",
          locator: "Size of home: Large house; Town or country: Country."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-leonberger-official-standard",
          role: "verified",
          locator: "Water-resistant double coat with soft, dense undercoat (lighter in summer/warmer climates); German mountain-dog heritage."
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Dense double coat excels in cool/cold climates and requires air-conditioned indoor refuge in hot, humid weather."
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-leonberger-breed-profile",
          role: "cited",
          locator: "Developed first and foremost as companions relishing the company of the whole family"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General giant-breed veterinary nutrition guidance emphasizing slow controlled puppy growth, lean adult body condition, and bloat precautions."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Standard giant-breed life-stage feeding schedule dividing adult rations into two smaller meals."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pubmed-ekenstedt-2014-st-bernard-arhgef10-lpn1",
          role: "verified",
          locator: "PLOS Genetics 2014 (PMID 25275565): ARHGEF10 10-bp deletion causing juvenile-onset Leonberger Polyneuropathy Type 1 (LPN1)."
        },
        {
          id: "pmc-becker-2017-leonberger-gja9-lpn2",
          role: "verified",
          locator: "BMC Genomics 2017 (PMC5574090, PMID 28841859): GJA9 frameshift variant (c.1107_1108delAG) causing autosomal incomplete-dominant Leonberger Polyneuropathy Type 2 (LPN2)."
        },
        {
          id: "pmc-letko-2020-st-bernard-cntnap1-lppn3",
          role: "verified",
          locator: "Genes 2020 (PMC7761076, PMID 33261176): CNTNAP1 missense variant (c.2810G>A) causing autosomal-recessive LPPN3 in Leonbergers and Saint Bernards."
        },
        {
          id: "pmc-minor-2018-leonberger-napepld-lemp",
          role: "verified",
          locator: "Sci Rep 2018 (PMC5895582, PMID 29643404): NAPEPLD missense variant (c.538G>C; p.A180P) causing autosomal-recessive juvenile Leukoencephalomyelopathy (LEMP, onset ages 1–4) in Leonbergers."
        },
        {
          id: "pmc-letko-2020-leonberger-genomic-diversity",
          role: "verified",
          locator: "PMC7557023 (2020): Genomic diversity, wartime bottleneck history, and longevity in Leonbergers."
        },
        {
          id: "lca-leonberger-health-glossary",
          role: "verified",
          locator: "LCA/CHIC required pre-breeding screenings: hips, elbows, eyes, thyroid, LPN1, LPN2, and LEMP, plus recommended cardiac."
        },
        {
          id: "rkc-leonberger-breed-profile",
          role: "verified",
          locator: "Good Practice tests (Elbows, Eyes with gonioscopy for PLA, Hips) and Best Practice DNA tests (LPPN3, LPN1, LPN2, LEMP)."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Synthesizes four molecularly mapped neurological DNA disorders, population-longevity research, and LCA/RKC screening schemes without naming clubs or registries in user-facing text."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pubmed-ekenstedt-2014-st-bernard-arhgef10-lpn1",
          role: "verified",
          locator: "LPN1 (ARHGEF10 10-bp deletion)"
        },
        {
          id: "pmc-becker-2017-leonberger-gja9-lpn2",
          role: "verified",
          locator: "LPN2 (GJA9 c.1107_1108delAG frameshift)"
        },
        {
          id: "pmc-letko-2020-st-bernard-cntnap1-lppn3",
          role: "verified",
          locator: "LPPN3 (CNTNAP1 c.2810G>A missense)"
        },
        {
          id: "pmc-minor-2018-leonberger-napepld-lemp",
          role: "verified",
          locator: "LEMP (NAPEPLD c.538G>C; p.A180P, onset ages 1–4)"
        },
        {
          id: "rkc-leonberger-breed-profile",
          role: "verified",
          locator: "Hip dysplasia, elbow dysplasia, hereditary eye disease (including gonioscopy for PLA), and Breed Watch Category 2"
        },
        {
          id: "lca-leonberger-health-glossary",
          role: "verified",
          locator: "Hips, elbows, eyes, thyroid, cardiac, LPN1, LPN2, LEMP"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Explicitly stratifies the four molecularly mapped neurological conditions (LPN1, LPN2, LPPN3, LEMP) and CHIC/RKC-screened orthopaedic/ocular/thyroid/cardiac conditions from giant-breed cancer, bloat, and moisture-linked ear/skin precautions."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "lca-leonberger-health-glossary",
          role: "cited",
          locator: "Pre-breeding hip, elbow, eye, thyroid, cardiac, and neurological DNA clearances"
        },
        {
          id: "rkc-leonberger-breed-profile",
          role: "cited",
          locator: "Good Practice and Best Practice pre-breeding tests"
        }
      ],
      verifiedOn: null,
      note: "General preventive veterinary care protocol tailored to Leonbergers."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-leonberger-breed-profile",
          role: "verified",
          locator: "Good Practice tests (BVA/KC Elbows, BVA/KC/ISDS Eye Scheme with gonioscopy for PLA, BVA/KC Hips) and Best Practice DNA tests (LPPN3, LPN1, LPN2, LEMP)."
        },
        {
          id: "lca-leonberger-health-glossary",
          role: "verified",
          locator: "LCA/CHIC required tests (OFA/PennHIP hips, OFA elbows, OFA/CERF eye exam, OFA thyroid, LPN1, LPN2, LEMP) and recommended OFA cardiac evaluation."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Summarizes Royal Kennel Club and LCA/OFA CHIC health screening panels without naming registries or clubs in user-facing prose."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-leonberger-official-standard",
          role: "cited",
          locator: "Jaws/Teeth: Strong jaws with perfect, regular and complete scissor bite (42 sound teeth; missing M3 tolerated; pincer bite accepted)."
        }
      ],
      verifiedOn: null,
      note: "Standard home and veterinary dental care guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-leonberger-official-standard",
          role: "cited",
          locator: "EARS: Set on high and not far back, pendant, of medium size, hanging close to the head, fleshy."
        }
      ],
      verifiedOn: null,
      note: "Routine drop-ear inspection and drying protocol for swimming dogs."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-leonberger-official-standard",
          role: "cited",
          locator: "Medium-soft to coarse, profusely long, close-fitting coat with thick undercoat."
        }
      ],
      verifiedOn: null,
      note: "General skin drying, mat-prevention, and hot-spot prevention guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-leonberger-breed-profile",
          role: "cited",
          locator: "Unsuited to city apartments or small lots; needs frequent brushing, large fenced yard, early obedience, and constant family companionship"
        },
        {
          id: "rkc-leonberger-breed-profile",
          role: "cited",
          locator: "Large house, country environment, high exercise capacity, shedding"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability evaluations balancing serene child-friendly affection and modest drool against colossal size, heavy shedding, intensive brushing, heat sensitivity, and short giant-breed lifespan."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-leonberger-official-standard",
          role: "verified",
          locator: "Heinrich Essig 1846 creation resembling Leonberg's heraldic lion; earliest dogs predominantly white; tight dry black lips and dewlap-free neck"
        },
        {
          id: "pubmed-ekenstedt-2014-st-bernard-arhgef10-lpn1",
          role: "verified",
          locator: "2014 discovery of ARHGEF10 (LPN1)"
        },
        {
          id: "pmc-becker-2017-leonberger-gja9-lpn2",
          role: "verified",
          locator: "2017 discovery of GJA9 (LPN2)"
        },
        {
          id: "pmc-minor-2018-leonberger-napepld-lemp",
          role: "verified",
          locator: "2018 discovery of NAPEPLD (LEMP)"
        },
        {
          id: "pmc-letko-2020-st-bernard-cntnap1-lppn3",
          role: "verified",
          locator: "2020 discovery of CNTNAP1 (LPPN3)"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified historical, anatomical, water-work, and veterinary-genetics facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-leonberger-official-standard",
          role: "verified",
          locator: "Origin (Leonberg, Germany, 1846), height (72-80 cm males / 65-75 cm females), colours with mandatory black mask, tight dry lips"
        },
        {
          id: "akc-leonberger-breed-profile",
          role: "verified",
          locator: "Weight (110-170 lb males / 90-140 lb females), heavy shedding, apartment unsuitability, family friendliness, group obedience"
        },
        {
          id: "lca-leonberger-find-a-leo",
          role: "verified",
          locator: "Average lifespan 8 to 10 years"
        },
        {
          id: "pmc-becker-2017-leonberger-gja9-lpn2",
          role: "verified",
          locator: "LPN2 (GJA9) polyneuropathy"
        },
        {
          id: "pmc-minor-2018-leonberger-napepld-lemp",
          role: "verified",
          locator: "LEMP (NAPEPLD) leukoencephalomyelopathy"
        },
        {
          id: "rkc-leonberger-breed-profile",
          role: "verified",
          locator: "LPN1, LPN2, LPPN3, LEMP, hips, elbows, and eye screenings"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "FAQ answers synthesize FCI Standard No. 145, AKC, RKC, LCA, and peer-reviewed genetics studies without naming clubs or registries in user-facing prose."
    }
  },

  updatedOn: "2026-11-25"
};
