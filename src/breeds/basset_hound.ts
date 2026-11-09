import type { Breed } from "../schema/breed.types";

export const basset_hound: Breed = {
  slug: "basset-hound",
  name: "Basset Hound",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Basset",
    "Hush Puppy Dog",
    "Norman Basset",
    "Chien Basset",
    "Basset Hound Inglés"
  ],

  group:
    "Scenthounds and Related Breeds; Section 1.3 — Small-sized Hounds (with working trial; also classified in the Hound and Scenthound groups)",

  origin: {
    country: "Great Britain",
    region:
      "Great Britain (developed from nineteenth-century imports of French bassets, specifically the Basset d'Artois and Basset Artésien Normand, crossed with Bloodhounds in England)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Basset_Hound.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Basset_Hound.jpg",
      title: "Basset Hound.jpg",
      description: "A tricolour Basset Hound standing outdoors.",
      creator: "Lilly M",
      uploader: "Lilly M",
      capturedOn: "2007-06-16",
      uploadedOn: "2007-06-25",
      width: 2592,
      height: 1944,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Lilly M, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Basset_Hound.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Basset_hound.JPG",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Basset_hound.JPG",
      title: "Basset hound.JPG",
      description: "A Basset Hound at a dog show.",
      creator: "Pleple2000",
      uploader: "Pleple2000",
      capturedOn: "2008-10-05",
      uploadedOn: "2008-10-18",
      width: 2400,
      height: 1800,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Pleple2000, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Basset_hound.JPG. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08"
    }
  ],

  overview: {
    summary:
      "A short-legged, heavy-boned scenthound of French heritage developed in Great Britain, renowned for its low-slung rectangular frame, loose elastic skin, soulful brown eyes, long velvety ears, and remarkable trailing scenting power second only to the Bloodhound.",

    description:
      "The Basset Hound is a remarkably heavy-boned, low-slung scent hound possessing an elongated, rectangular silhouette that holds an extraordinary amount of substance in a dwarf stature. Characterized by short, stout legs with substantial bone density and a deep chest that clears the ground with deliberate balance, the hound is built for slow, methodical endurance tracking rather than speed. Its smooth, dense coat is smooth and weather-resistant, traditionally appearing in tricolour or lemon-and-white patterns over loose, pliable skin that forms gentle folds along the forehead, muzzle, and ankles. The head is large, domed, and noble with a prominent occiput, deep pendulous flews, long velvety drop ears that extend well past the nose, and sunken dark eyes that convey a dignified, mournful expression. Placid, calm, and deeply affectionate in the home, it transforms on the trail into a tenacious, unyielding tracker possessing a booming, melodious bay.",

    history:
      "The ancestry of the Basset Hound traces back to the ancient St. Hubert hounds of monastic France, where dwarfed, low-set hunting hounds ('bassets', from the French 'bas' meaning low) were selectively bred to trail game through dense brush at a pace easily followed by hunters on foot. In the 1860s and 1870s, French aristocrats gifted breeding pairs of Basset d'Artois and Basset Artésien Normand to British nobility, including Lord Galway and Sir Everett Millais. Working in England, Millais and fellow breeders crossed these French lines with Bloodhounds to increase bone substance, enhance head type, and strengthen scenting capacity, establishing a heavier, distinctive hound. Formal registration was achieved in England in 1880, followed by American recognition in 1885. Throughout the twentieth century, the breed attained worldwide fame as an iconic companion, pop-culture symbol, and formidable tracking competitor.",

    originalPurpose:
      "Methodical trailing and flushing of small game, predominantly European hare and rabbit, across thick brush, briars, and rough countryside at a pace suited for hunters walking on foot.",

    currentRoles: [
      "Traditional hare and rabbit tracking hound",
      "Field trial and competitive scent tracking dog",
      "Affectionate and loyal family companion",
      "Search, rescue, and scent detection participant",
      "Therapy visiting dog"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 33,
        max: 38
      },
      female: {
        min: 33,
        max: 38
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 25,
        max: 30
      },
      female: {
        min: 20,
        max: 25
      }
    },

    lifespanYears: {
      min: 10,
      max: 12
    },

    coatType:
      "Smooth, short, dense, and close-fitting without being too fine; smooth in outline and free from feathering, with a firm texture that provides natural resistance to rain and briars over loose, elastic skin.",

    coatLength: "Short",

    coatColors: [
      "Tricolour (black, white, and tan)",
      "Bicolour (lemon and white)",
      "Red and white",
      "Brown and white (hare pied)"
    ],

    sheddingLevel:
      "Moderate to high; sheds short hairs continuously throughout the year with heavier seasonal shedding during spring and autumn",

    droolingLevel:
      "High; deep pendulous flews and loose lower lips result in regular drooling, particularly around food, water, and exercise",

    distinctiveFeatures: [
      "Short-legged hound of considerable bone, substance, and weight for its stature",
      "Height at the withers of 33 to 38 cm for both males and females",
      "Weight of 25 to 30 kg for males and 20 to 25 kg for females in lean working condition",
      "Domed head with a prominent occipital peak, flat cheeks, and loose elastic skin forming wrinkles on the forehead and beside the eyes",
      "Deep, square muzzle with heavy, pendulous flews and loose lower lips",
      "Complete, regular scissor bite with strong jaws and large teeth",
      "Lozenge-shaped, slightly sunken dark brown eyes displaying visible red conjunctiva on the lower eyelid (haw)",
      "Long, velvety, narrow drop ears set very low on the skull, curling inward in a roll and extending past the tip of the muzzle",
      "Muscular, arched neck with a pronounced, double loose dewlap",
      "Deep, broad chest with a prominent breastbone (sternum) protruding well ahead of the forelegs",
      "Forelegs short and heavy-boned, curving slightly inward around the brisket with wrinkles on the wrists",
      "Massive, round cat-like feet with heavy pads that distribute weight evenly across hard terrain",
      "Long, thick sabre tail carried merrily in an upward arch with a distinct white tip (stern)"
    ]
  },

  temperament: {
    traits: [
      "Placid, composed, and gentle in the home",
      "Deeply affectionate, loyal, and friendly with family",
      "Exceptional patience and tolerance around children",
      "Highly sociable and peaceful in packs with other dogs",
      "Tenacious, relentless, and stubborn when following a scent trail",
      "Mild-mannered and welcoming with unfamiliar humans",
      "Independent problem-solver with strong scent-driven focus",
      "Low territoriality and minimal watchdog aggression",
      "Sensitive to handler emotional tone and unresponsive to harsh corrections",
      "Deep, melodious, and resonant baying voice that carries over vast distances"
    ],

    scores: {
      affection: 5,
      withChildren: 5,
      withDogs: 5,
      withStrangers: 4,
      protectiveness: 1,
      independence: 4,
      trainability: 3,
      barking: 4,
      energy: 2
    }
  },

  care: {
    exercise: {
      level:
        "Moderate; requires daily walking and olfactory stimulation to maintain muscular fitness and prevent obesity, but not suited for high-speed running, jumping, or sustained jogging",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Daily leashed neighborhood strolls and scent-investigation walks",
        "Structured scent tracking and trailing games in secure enclosures",
        "Supervised exploration and play in a securely fenced yard",
        "Low-impact canine scent trials and nosework games",
        "Gentle puzzle-toy foraging and snuffle-mat enrichment"
      ]
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush two to three times weekly with a rubber curry comb or firm hound glove to remove loose dead hair and stimulate natural skin oils; increase during seasonal spring and autumn coat shedding.",

      bathing:
        "Bathe every four to six weeks or when soiled, using a gentle moisturizing dog shampoo; ensure thorough rinsing and dry skin folds completely.",

      notes: [
        "Inspect and clean the long pendant ears two to three times weekly using a veterinary-approved ear solution, drying the canal entrance thoroughly to prevent yeast and bacterial otitis.",
        "Wipe facial wrinkles, muzzle folds, and neck dewlap daily with a soft damp cloth, followed immediately by drying to prevent bacterial intertrigo.",
        "Wipe drool from the chin and flews after meals and drinking.",
        "Inspect the sunken eyes daily for dust, trapped discharge, or irritation in the lower conjunctival pouch.",
        "Trim heavy, fast-growing nails every two to three weeks to prevent splayed toes and painful joint misalignment.",
        "Brush teeth several times weekly with canine enzymatic toothpaste.",
        "Prevent puppies and adults from jumping off furniture, beds, or vehicles, and avoid steep stairs to protect the elongated spine and dwarf front limbs."
      ]
    },

    training: {
      difficulty:
        "Challenging to moderate; intelligent and willing, but highly scent-driven and independent, easily distracted by ground odors and unresponsive to repetitive mechanical drills",

      tips: [
        "Use positive reinforcement, high-value food rewards, and enthusiastic praise.",
        "Keep instructional sessions short, varied, and upbeat (5 to 10 minutes) to maintain focus.",
        "Always exercise on a sturdy leash or within a securely fenced area, as an enticing scent will override recall commands.",
        "Practice crate training and calm departure routines early to prevent separation distress and mournful baying.",
        "Never use harsh verbal reprimands or physical coercion, which cause this sensitive hound to become stubborn and shut down.",
        "Channel natural scenting instincts into nosework, tracking games, and search-and-find tasks."
      ],

      socialization:
        "Introduce the puppy early and calmly to a wide variety of friendly people, vaccinated dogs of all sizes, household sounds, traffic, and grooming handling routines. Broad early exposure builds a self-assured, polite companion that welcomes visitors and remains unfazed in public environments."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool climates, provided indoor living and warmth are maintained",
        "Warm climates, provided indoor air conditioning, shade, and fresh water are available and exercise is scheduled during cooler morning or evening hours"
      ],

      aloneTimeTolerance:
        "Low to moderate; a gregarious pack hound that thrives in the company of family or other dogs, prone to mournful howling and distress if left isolated for extended workdays."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for medium-to-large breeds, with strict caloric portioning to prevent excess weight gain.",

    feedingFrequency: {
      puppy:
        "Three to four measured meals daily until six months of age, transitioning to two meals daily on a growth formula supporting controlled bone development.",
      adult:
        "Two measured meals daily to support steady digestion and help reduce the risk of gastric dilatation-volvulus.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output, joint support, and lean muscle retention."
    },

    guidelines:
      "Measure food portions precisely using a digital kitchen scale or standard measuring cup, as the breed has an efficient metabolism and gains weight easily. Excess body fat places catastrophic strain on the elongated spine and dwarf front limbs. Divide daily food into two distinct meals, restrict vigorous exercise for at least one hour before and after eating, use narrow or elevated bowls to keep long ears clean and dry, and provide fresh drinking water at all times.",

    considerations: [
      "Maintain a lean, muscular body condition where the ribs are easily felt; obesity dramatically elevates the risk of spinal disc herniation and joint lameness.",
      "Budget training treats into the total daily caloric allowance to avoid creeping weight gain.",
      "Use narrow spaniel-type food and water dishes or elevated bowls to prevent long pendant ears from dragging in food and water.",
      "Avoid high-fat foods and rich table scraps that can trigger acute pancreatitis.",
      "Rest the hound before and after meals to mitigate the risk of bloat (gastric dilatation-volvulus).",
      "Transition between diet formulas gradually over five to seven days."
    ],

    note:
      "Caloric needs vary significantly based on age, sterilization status, and daily exercise. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Basset Hound is an achondroplastic (dwarf) scenthound with a typical life expectancy of 10 to 12 years. Its unique conformation—characterized by shortened limbs, heavy bone density, an elongated spine, deep chest, loose elastic skin, and long pendant ears—predisposes it to specific structural and hereditary health conditions. Primary concerns include intervertebral disc disease (IVDD), primary closed-angle glaucoma (associated with an inherited ADAMTS17 gene mutation), canine thrombopathia (an inherited bleeding disorder linked to a RASGRP1 gene mutation), gastric dilatation-volvulus (GDV / bloat), elbow dysplasia, eyelid abnormalities (entropion/ectropion), chronic otitis externa, and skin fold dermatitis.",

    commonConditions: [
      "Intervertebral disc disease (IVDD) — degenerative disc herniation or extrusion associated with chondrodystrophy, causing back pain, spinal cord compression, rear-limb ataxia, or paralysis",
      "Primary closed-angle glaucoma (PCAG) — an inherited, painful intraocular pressure elevation caused by a 19-bp deletion in the ADAMTS17 gene, resulting in optic nerve damage and rapid blindness if untreated",
      "Canine thrombopathia (CTP) — an autosomal recessive bleeding disorder caused by an identified mutation in the RASGRP1 gene that disrupts platelet activation, leading to excessive bleeding from minor wounds or mucous membranes",
      "Gastric dilatation-volvulus (GDV / bloat) — an acute, life-threatening emergency in deep-chested hounds where the stomach distends with gas and twists on its axis",
      "Elbow dysplasia and ununited anconeal process (UAP) — developmental abnormalities of the elbow joints common in chondrodysplastic front assemblies, causing forelimb lameness and osteoarthritis",
      "Entropion, ectropion, and 'diamond eye' — eyelid margin malformations caused by loose facial skin, where lids roll inward against the cornea or sag outward, causing chronic irritation and conjunctivitis",
      "Chronic otitis externa — bacterial and yeast ear infections promoted by heavy, pendant ear flaps that restrict ventilation and trap moisture within the canal",
      "Malassezia dermatitis and skin fold intertrigo — yeast and bacterial proliferation in warm, moist skin folds around the face, neck, and toes"
    ],

    preventiveCare: [
      "Verify that breeding parents hold certified DNA clearances for thrombopathia (RASGRP1) and primary closed-angle glaucoma (ADAMTS17), alongside certified ophthalmologist and orthopedic evaluations.",
      "Prevent jumping on and off furniture, beds, or car boots, and install ramps or assist the dog to protect the elongated spine.",
      "Maintain a strictly controlled, lean body weight to minimize mechanical stress on intervertebral discs and dwarf joints.",
      "Inspect, clean, and thoroughly dry the long pendant ears two to three times weekly.",
      "Clean and thoroughly dry facial wrinkles and neck dewlap daily to prevent bacterial and yeast intertrigo.",
      "Feed two smaller meals daily and avoid vigorous running before or after eating to mitigate bloat risk.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine dental cleanings."
    ],

    recommendedScreenings: [
      "DNA marker test for Canine Thrombopathia (RASGRP1 gene mutation) prior to breeding",
      "DNA marker test for Primary Closed-Angle Glaucoma (ADAMTS17 gene mutation) prior to breeding",
      "Annual gonioscopy and ophthalmic examination by a board-certified veterinary ophthalmologist",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "Radiographic hip dysplasia evaluation prior to breeding"
    ],

    dentalCare:
      "Brush teeth several times weekly using dog-specific enzymatic toothpaste. The breed has strong, well-developed jaws with a complete 42-tooth scissor bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the long pendant ears two to three times weekly for wax accumulation, moisture, redness, or odor. Clean gently using a veterinarian-recommended ear solution, drying the leather and canal opening thoroughly without inserting swabs deep into the canal.",

    skinCare:
      "Part the short coat weekly to inspect the skin for external parasites, redness, or irritation. Clean facial wrinkles, neck folds, and feet weekly with a gentle damp cloth or antiseptic wipe and dry completely."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Families with children seeking a gentle, patient, and deeply affectionate household pet",
      "Owners who appreciate a calm, relaxed companion indoors paired with leisurely outdoor walking",
      "Scent tracking and trailing enthusiasts who value an authentic working hound nose",
      "Apartment or house dwellers prepared to manage vocal baying and lift a heavy, short-legged dog when necessary",
      "Committed owners willing to maintain consistent ear cleaning, wrinkle hygiene, and drool management"
    ],

    notIdealFor: [
      "Jogging or running enthusiasts seeking a high-speed athletic distance partner",
      "Owners who demand instant, off-leash obedience in unfenced, wildlife-rich areas",
      "Individuals intolerant of heavy drooling, continuous shedding, or loud hound baying",
      "Homes with multiple flights of stairs and no elevator, as carrying a 25 to 30 kg dog is physically demanding",
      "Owners unwilling to manage chronic ear and skin fold hygiene"
    ]
  },

  funFacts: [
    "The Basset Hound's scenting ability is second only to the Bloodhound; its nasal cavity contains more than 220 million olfactory receptors, and its long, dragging ears and loose facial wrinkles physically stir up and channel scent molecules toward its nose as it walks.",
    "The breed name derives from the French word 'bas', meaning 'low' or 'short', perfectly describing this heavy-boned dwarf hound.",
    "In 1963, a Basset Hound named Jason became the world-famous advertising icon for Hush Puppies shoes, making the breed an enduring global symbol of comfortable, relaxed style.",
    "Despite standing only 33 to 38 cm tall, the Basset Hound has more bone density per pound of body weight than almost any other dog breed.",
    "The white tip on the Basset Hound's tail—historically referred to by huntsmen as the 'stern' or 'flag'—was deliberately bred so hunters could easily locate the low-slung dog tracking game through tall brush and crops.",
    "The breed famously inspired beloved pop-culture characters, including Tex Avery's unflappable cartoon hound Droopy in 1943 and Lieutenant Columbo's lethargic companion simply named 'Dog'.",
    "Basset Hounds possess a rich, deep, and resonant voice consisting of a musical trailing bay and a booming bark that carries for miles across rolling countryside."
  ],

  faq: [
    {
      question: "What is a Basset Hound?",
      answer:
        "The Basset Hound is an ancient, short-legged scent hound of French ancestry refined in Great Britain, known for its heavy bone, long ears, loose skin, soulful eyes, and extraordinary trailing ability."
    },
    {
      question: "Where does the Basset Hound originate?",
      answer:
        "The breed originates from Great Britain, where it was developed in the late nineteenth century by crossing imported French bassets (Basset d'Artois and Basset Artésien Normand) with Bloodhounds to increase bone, head size, and scenting power."
    },
    {
      question: "Why are Basset Hounds so short and long?",
      answer:
        "Basset Hounds are an achondroplastic (dwarf) breed whose shortened limbs and heavy bone were selectively cultivated so hunters on foot could easily keep pace with the pack as it trailed hare and rabbit through dense cover."
    },
    {
      question: "How tall and heavy is a Basset Hound?",
      answer:
        "Adult males and females stand 33 to 38 cm at the withers, with males typically weighing 25 to 30 kg and females weighing 20 to 25 kg in lean, athletic condition."
    },
    {
      question: "How long does a Basset Hound usually live?",
      answer:
        "With proper nutrition, strict weight control, and conscientious preventive veterinary care, the breed typically enjoys a lifespan of 10 to 12 years."
    },
    {
      question: "Do Basset Hounds drool and shed a lot?",
      answer:
        "Yes. Their loose, pendulous flews and deep lips result in regular drooling after eating or drinking, and their smooth, dense coat sheds short hairs continuously throughout the year, requiring weekly brushing."
    },
    {
      question: "Are Basset Hounds good family pets and good with children?",
      answer:
        "Yes. They are famously gentle, patient, and good-natured with children, and as natural pack hounds, they get along exceptionally well with other dogs."
    },
    {
      question: "Why are jumping and stairs dangerous for Basset Hounds?",
      answer:
        "Their long spine and short, dwarf legs make them prone to intervertebral disc disease (IVDD); jumping off furniture or navigating steep stairs places severe mechanical strain on spinal discs and can cause disc herniation."
    },
    {
      question: "How much exercise does a Basset Hound need each day?",
      answer:
        "The breed requires 45 to 60 minutes of daily physical activity, including leashed walks and scent-tracking games, to maintain lean muscle and prevent obesity."
    },
    {
      question: "Is a Basset Hound easy to train?",
      answer:
        "They are intelligent and food-motivated, but possess an independent hunting mindset; they respond best to patient, reward-based training and must be kept on a leash in unfenced areas because scent trails will override commands."
    },
    {
      question: "Why do Basset Hounds have long ears and loose skin?",
      answer:
        "Their long ears sweep the ground to stir up scent particles, while the loose skin folds on their head and neck help trap and funnel those scent molecules directly toward their powerful nose."
    },
    {
      question: "What health problems are known in Basset Hounds?",
      answer:
        "Primary health priorities include spinal disc disease (IVDD), primary closed-angle glaucoma (associated with the ADAMTS17 gene), canine thrombopathia (a platelet bleeding disorder linked to the RASGRP1 gene), bloat (GDV), elbow dysplasia, and chronic ear infections."
    }
  ],

  references: [
    "fci-basset-hound-official-standard",
    "fci-basset-hound-nomenclature",
    "the-kennel-club-basset-hound-breed-standard",
    "akc-basset-hound-breed-standard",
    "akc-basset-hound-breed-profile",
    "basset-hound-club-of-america-health",
    "ofa-basset-hound-chic-requirements",
    "basset-hound-thrombopathia-rasgrp1-study-2006",
    "basset-hound-glaucoma-adamts17-study-2015",
    "wikimedia-basset-hound-lilly-m",
    "wikimedia-basset-hound-pleple2000"
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
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "Standard heading: BASSET HOUND"
        },
        {
          id: "fci-basset-hound-nomenclature",
          role: "verified",
          locator: "Official nomenclature: BASSET HOUND (163)"
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "verified",
          locator: "History: Basset, Norman Basset, Hush Puppy Dog"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Verified across FCI Standard No. 163, FCI Nomenclature, and AKC breed profile."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 6 Scenthounds and related breeds, Section 1.3 Small-sized Hounds, with working trial"
        },
        {
          id: "fci-basset-hound-nomenclature",
          role: "verified",
          locator: "Group 6, Section 1.3 Small-sized Hounds, with working trial"
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "Hound Group"
        },
        {
          id: "akc-basset-hound-breed-standard",
          role: "verified",
          locator: "Hound Group"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "ORIGIN: Great Britain; BRIEF HISTORICAL SUMMARY"
        },
        {
          id: "fci-basset-hound-nomenclature",
          role: "verified",
          locator: "Country of origin: Great Britain"
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "Origin and development in Great Britain"
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "verified",
          locator: "History: French basset ancestry refined in England by Lord Galway and Sir Everett Millais"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "General Appearance, Characteristics, Temperament"
        },
        {
          id: "akc-basset-hound-breed-standard",
          role: "verified",
          locator: "General Appearance, Characteristics, History"
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "verified",
          locator: "About the Breed, History (1880 recognition, Everett Millais, Bloodhound crosses), and Roles"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Synthesized in original prose from FCI Standard No. 163, The Royal Kennel Club, and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "HEAD, BODY, LIMBS, TAIL, COAT, COLOUR, SIZE"
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "Head and Skull, Eyes, Ears, Body, Tail, Coat, Colour, Size"
        },
        {
          id: "akc-basset-hound-breed-standard",
          role: "verified",
          locator: "Head, Skull, Eyes, Ears, Body, Forelegs, Hindquarters, Coat, Color, Size"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Conformation, low-slung achondroplastic build, loose skin, coat, colours, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "SIZE: Height at withers: 33 - 38 cm (13 - 15 ins)."
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "Height at withers: 33-38 cms (13-15 ins)"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Preserved in published unit of centimetres (33 to 38 cm for both males and females) exactly as specified in the official FCI Standard No. 163 and The Royal Kennel Club standard."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "Weight: Dogs 25-30 kg (55-66 lbs); Bitches 20-25 kg (44-55 lbs)"
        },
        {
          id: "basset-hound-club-of-america-health",
          role: "verified",
          locator: "Adult working weight guidance and healthy body condition"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "FCI Standard No. 163 states that weight should be in proportion to size. The stored 25 to 30 kg for males and 20 to 25 kg for females are the canonical weights published by The Royal Kennel Club in the country of origin, preserved in kilograms."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "Longevity and health actuarial profile (10-12 years)"
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12-13 years"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Supported by kennel club actuarial profiles and primary-care veterinary longevity surveys."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-basset-hound-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (3/5)"
        },
        {
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "COAT: Smooth, short and close without being too fine"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-basset-hound-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (4/5)"
        },
        {
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "Lips: Flews of upper lip overlap lower lip considerably"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Deep pendulous flews result in regular drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Placid hound, never aggressive or timid. Affectionate."
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "Characteristics: Placid, affectionate, never aggressive or timid; melodious voice"
        },
        {
          id: "akc-basset-hound-breed-standard",
          role: "verified",
          locator: "Temperament: Placid, never sharp or timid, great endurance and devotion"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-basset-hound-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "cited",
          locator: "Temperament and behavior guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented hound temperament and low watchdog protectiveness."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "cited",
          locator: "Care, exercise, ear maintenance, and skin hygiene"
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        },
        {
          id: "basset-hound-club-of-america-health",
          role: "cited",
          locator: "Health, spinal precautions, and grooming"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active scenthound management with dwarf spine protection and skin fold hygiene protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "Exercise: Moderate daily exercise needed; up to 1 hour per day"
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "verified",
          locator: "Energy Level (2/5); Exercise Needs (2/5)"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "cited",
          locator: "Exercise: Up to 1 hour per day"
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "cited",
          locator: "Exercise recommendations"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 45 to 60 minutes of daily activity reflects the moderate exercise demands of a heavy, dwarf scenthound."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "Living environment: Flat/Apartment suitable with regular outdoor walks"
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "verified",
          locator: "Adaptability: Adapts Well to Apartment Living (4/5)"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-basset-hound-breed-profile",
          role: "verified",
          locator: "Exercise and secure fenced-yard recommendations"
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "Living environment: Small garden suitable"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "COAT: Smooth, dense weather-resistant coat"
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "verified",
          locator: "Weather sensitivity: heat sensitivity due to heavy build and loose skin"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-basset-hound-breed-profile",
          role: "cited",
          locator: "Tolerates Being Alone: Moderate; pack-oriented hound"
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "cited",
          locator: "Pack nature and companion needs"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-basset-hound-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food, portion control, strict weight management"
        },
        {
          id: "basset-hound-club-of-america-health",
          role: "cited",
          locator: "Obesity prevention, spinal protection, and bloat management"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for deep-chested, chondrodysplastic breeds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-basset-hound-breed-profile",
          role: "cited",
          locator: "Life-stage nutrition and divided meal schedules"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "basset-hound-thrombopathia-rasgrp1-study-2006",
          role: "verified",
          locator: "RASGRP1 gene mutation causing inherited thrombopathia in Basset Hounds"
        },
        {
          id: "basset-hound-glaucoma-adamts17-study-2015",
          role: "verified",
          locator: "ADAMTS17 mutation associated with primary closed-angle glaucoma in Basset Hounds"
        },
        {
          id: "ofa-basset-hound-chic-requirements",
          role: "verified",
          locator: "Required screenings: Thrombopathia DNA test, Glaucoma DNA test/eye exam"
        },
        {
          id: "basset-hound-club-of-america-health",
          role: "verified",
          locator: "Health priorities: IVDD, CTP, glaucoma, GDV, and elbow dysplasia"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Synthesizes peer-reviewed genetics studies on thrombopathia and glaucoma with national health screening requirements."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "basset-hound-thrombopathia-rasgrp1-study-2006",
          role: "verified",
          locator: "Canine thrombopathia pathology, platelet dysfunction, and RASGRP1 mutation"
        },
        {
          id: "basset-hound-glaucoma-adamts17-study-2015",
          role: "verified",
          locator: "Primary closed-angle glaucoma pathology and ADAMTS17 19-bp deletion"
        },
        {
          id: "basset-hound-club-of-america-health",
          role: "verified",
          locator: "Intervertebral disc disease (IVDD), bloat (GDV), elbow dysplasia, and eyelid conditions"
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "Breed health concerns: Breed Watch category points (eyes, ears, skin, weight)"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Details documented genetic and conformational conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "basset-hound-club-of-america-health",
          role: "cited",
          locator: "Preventive care, spinal protection, ramp usage, and ear hygiene"
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "cited",
          locator: "Routine care, weight control, and ear inspection"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to chondrodysplastic, drop-eared hounds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-basset-hound-chic-requirements",
          role: "verified",
          locator: "CHIC program requirements: Thrombopathia DNA test, Glaucoma DNA/eye exam, optional elbows and hips"
        },
        {
          id: "basset-hound-club-of-america-health",
          role: "verified",
          locator: "Pre-breeding testing protocols: CTP, glaucoma, gonioscopy, elbows, hips"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Screenings summarize published parent club and health registry protocols."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "cited",
          locator: "Jaws/teeth: complete, regular scissor bite"
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "cited",
          locator: "Routine dental care"
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "cited",
          locator: "Ears: set low, long, velvety, folding in inward roll"
        },
        {
          id: "basset-hound-club-of-america-health",
          role: "cited",
          locator: "Ear canal cleaning and infection prevention"
        }
      ],
      verifiedOn: null,
      note: "Ear maintenance protocol for heavy, folded pendant ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "cited",
          locator: "Skin: loose and elastic, forming folds on head, neck and limbs"
        },
        {
          id: "basset-hound-club-of-america-health",
          role: "cited",
          locator: "Wrinkle cleaning and intertrigo prevention"
        }
      ],
      verifiedOn: null,
      note: "Dermatological care protocol for breeds with deep skin folds."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-basset-hound-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "cited",
          locator: "Characteristics, lifestyle suitability, and exercise"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, physical mass, and household adaptability."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-basset-hound-breed-profile",
          role: "verified",
          locator: "Olfactory power (220M scent receptors, second to Bloodhound), Hush Puppies mascot (Jason, 1963), Columbo's dog, Droopy"
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "History, heavy bone density, white tail flag (stern)"
        },
        {
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "Brief historical summary: French basset derivation, low-slung hunting adaptation"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Verified historical folklore and cultural heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "Origin, size (33-38 cm), coat, colors, and physical build"
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "Weight (25-30 kg males, 20-25 kg females), lifespan (10-12 years), temperament"
        },
        {
          id: "basset-hound-club-of-america-health",
          role: "verified",
          locator: "Health conditions, IVDD spinal precautions, CTP and glaucoma testing"
        },
        {
          id: "ofa-basset-hound-chic-requirements",
          role: "verified",
          locator: "Recommended health screening panel"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and genetics research without naming registries in prose."
    }
  },

  updatedOn: "2026-11-08"
};
