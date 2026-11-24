import type { Breed } from "../schema/breed.types";

export const irish_wolfhound: Breed = {
  slug: "irish-wolfhound",
  name: "Irish Wolfhound",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Cú Faoil",
    "Wolfhound",
    "Lévrier Irlandais",
    "Irischer Wolfshund"
  ],

  group:
    "Sighthounds; Section 2 — Rough-haired Sighthounds (without working trial; also classified in the Hound group)",

  origin: {
    country: "Ireland",
    region: null
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Irish_Wolfhound_brindle_1.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Irish_Wolfhound_brindle_1.jpg",
      title: "Irish Wolfhound brindle 1.jpg",
      description:
        "An adult brindle male Irish Wolfhound standing outdoors, clearly showing its commanding giant sighthound build, rough harsh coat, arched loin, and deep chest.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2020-08-23",
      uploadedOn: "2020-08-24",
      width: 1907,
      height: 1432,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Irish_Wolfhound_brindle_1.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Irish_Wolfhound.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Irish_Wolfhound.jpg",
      title: "Irish Wolfhound.jpg",
      description:
        "An Irish Wolfhound outdoors, highlighting its long noble head carried high, wiry eyebrows and underjaw beard, dark oval eyes, and small rose-shaped ears.",
      creator: "D.Schoen",
      uploader: "Connection reset by peer",
      capturedOn: "2007-09-02",
      uploadedOn: "2007-12-28",
      width: 1410,
      height: 1910,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by D.Schoen, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Irish_Wolfhound.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    }
  ],

  overview: {
    summary:
      "The tallest of all sighthounds and a towering yet deeply serene Irish giant, uniting rough-coated athletic grace and historic wolf-coursing power with a famously gentle, patient, and dignified home temperament.",

    description:
      "The Irish Wolfhound is a commanding, colossal rough-coated sighthound built on the graceful, aerodynamic lines of a Greyhound—combining immense height and substantial muscle with effortless speed and agility rather than heavy mastiff bulk. Its long, level head is carried proudly atop a strong, muscular, dewlap-free arched neck, featuring dark oval eyes beneath wiry eyebrows, a coarse underjaw beard, a black nose and lips, and small, fine velvet rose ears folded neatly back. A remarkably deep chest, broad breast, long back, arched loins, and well-tucked belly flow into long, heavily boned straight forelegs and powerful hindquarters that drive an easy, ground-covering stride. Cloaked in a harsh, rough weatherproof coat in shades of grey, brindle, red, black, fawn, wheaten, or pure white, the Irish Wolfhound belies its intimidating size indoors: calm, sweet-natured, quiet, and devoted to its household, it embodies the classic 'gentle giant'—though its keen sighthound instinct to chase swift movement outdoors never fully sleeps.",

    history:
      "Few breeds boast a documented heritage as ancient as the Irish Wolfhound. Bred by Celtic peoples in Ireland to course wolves, Irish elk, and large game—and even to pull combatants from chariots in early warfare—giant Irish hounds entered recorded history in 391 AD, when Roman consul Quintus Aurelius Symmachus wrote of the astonishment in Rome upon receiving seven Irish hounds as a gift. Prized across medieval Europe as royal diplomatic presents, their numbers collapsed after wolves were hunted to extinction in Ireland by the late eighteenth century, compounded by widespread famine in the 1840s. By the mid-nineteenth century, the ancient breed stood on the brink of vanishing entirely. Beginning in 1862, Scottish army officer Captain George Augustus Graham dedicated decades to reviving the type by locating the last surviving Irish strains and carefully outcrossing them with Scottish Deerhounds, Great Danes, Borzois, and a Tibetan Mastiff-type wolfdog before line-breeding back to traditional form. The first formal breed description appeared in 1885, followed by international recognition in the mid-twentieth century. Today, the Irish Wolfhound is treasured worldwide as a serene family companion and lure-coursing athlete.",

    originalPurpose:
      "Coursing and bringing down wolves and large game by sight across Ireland, while also serving historically as a battlefield war hound and estate guardian.",

    currentRoles: [
      "Serene, devoted family companion",
      "Lure-coursing and sighthound-sports competitor",
      "Therapy dog",
      "Deterrent household presence through imposing stature"
    ]
  },

  physical: {
    sizeCategory: "Giant",

    height: {
      unit: "cm",
      male: {
        min: 79,
        max: null
      },
      female: {
        min: 71,
        max: null
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 54.5,
        max: null
      },
      female: {
        min: 40.5,
        max: null
      }
    },

    lifespanYears: {
      min: 6,
      max: 8
    },

    coatType:
      "Rough, hard, wiry weatherproof coat covering the body, legs, and head, growing especially long and wiry over the eyes (eyebrows) and under the jaw (beard).",

    coatLength: "Medium",

    coatColors: [
      "Grey and steel grey",
      "Brindle (from light to dark black-brindle)",
      "Red and wheaten",
      "Fawn",
      "Black",
      "Pure white"
    ],

    sheddingLevel:
      "Moderate; the harsh, wiry coat sheds moderately throughout the year and benefits from regular brushing and periodic hand-stripping of dead hair",

    droolingLevel:
      "Low; tight black lips and a strong, arched neck completely free of dewlap or loose throat skin keep drooling minimal, though the wiry beard easily drips water after drinking",

    distinctiveFeatures: [
      "Tallest of all coursing sighthounds, pairing colossal height and commanding presence with graceful, muscular Greyhound-like symmetry",
      "Minimum height at the withers of 79 cm for males (desired average 81 to 86 cm) and 71 cm for females, with no formal upper height limit",
      "Minimum expected weight of 54.5 kg for a 79 cm male and 40.5 kg for a 71 cm female, scaling proportionally upward with greater height",
      "Long, level head carried high with a barely raised brow, minimal indentation between the eyes, a moderately pointed muzzle, black nose and lips, and a complete scissor bite",
      "Dark, full, elliptical oval eyes framed by black rims and long, wiry eyebrows",
      "Small, fine velvet-textured rose-shaped ears carried folded back like a Greyhound's",
      "Rather long, very strong, muscular, well-arched neck completely free of dewlap or loose throat skin",
      "Very deep chest, wide breast, long back, arched muscular loins, great breadth across the hips, and well-drawn-up belly",
      "Long, slightly curved, well-coated tail of moderate thickness carried low with a gentle upward sweep near the tip",
      "Heavily boned straight forelegs, long muscular thighs and second thighs, well-let-down hocks, and moderately large round feet with arched closed toes and strong curved nails"
    ]
  },

  temperament: {
    traits: [
      "Calm, dignified, gentle, and sweet-tempered indoors",
      "Deeply devoted, loyal, and affectionate toward its human family",
      "Remarkably quiet at home, rarely barking without good reason",
      "Kind, patient, and tolerant around people, making a poor aggressive guard dog despite its intimidating presence",
      "Sensitive and responsive to gentle guidance rather than harsh handling",
      "Good-natured with respectful children, though its massive frame and swinging tail can easily bump toddlers unintentionally",
      "Retains a powerful sighthound chasing instinct outdoors toward fleeing rabbits, wildlife, or small running animals"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: 3,
      independence: 3,
      trainability: 3,
      barking: 1,
      energy: 3
    }
  },

  care: {
    exercise: {
      level:
        "Moderate; calm and lounging indoors, adult Irish Wolfhounds need generous daily walks and safe opportunities to stretch their long strides in large fenced spaces—while puppies require strict exercise moderation to protect developing giant joints",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Long, steady daily walks on a sturdy leash across level ground or open countryside",
        "Occasional free galloping inside a very large, securely fenced paddock or yard",
        "Lure coursing and sighthound straight-racing for fit, fully mature adults",
        "Calm obedience, therapy-dog visits, and mental enrichment"
      ]
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush thoroughly once or twice weekly with a stiff bristle brush and metal comb to remove dead wiry hair and prevent mats in the beard, eyebrows, and leg furnishings, hand-stripping dead coat twice a year if desired.",

      bathing:
        "Bathe only occasionally when visibly soiled using a mild canine shampoo; wipe the wiry beard clean after meals and drinking.",

      notes: [
        "Provide thick, supportive orthopaedic bedding to prevent painful pressure sores and elbow calluses on bony giant joints.",
        "Inspect the small rose ears weekly for wax buildup or debris.",
        "Keep the strong, curved nails trimmed regularly so the round feet stay properly aligned under giant body weight.",
        "Brush teeth several times weekly using canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Moderate; eager to please and gentle-natured, though somewhat slower and more deliberate in responding to repetitive obedience drills than herding breeds—early leash manners are vital before the dog reaches giant size",

      tips: [
        "Begin loose-leash walking, polite greeting, and calm handling training immediately in puppyhood while the dog is still small enough to guide effortlessly.",
        "Use warm, patient, reward-based methods with calm praise and food rewards; harsh scolding hurts this emotionally sensitive giant.",
        "Never trust off-leash recall near unfenced roads or open wildlife areas—when a sighthound spots swift distant movement, coursing instinct can override verbal commands in seconds.",
        "Practice calm counter-manners early, as an adult Irish Wolfhound can effortlessly reach kitchen countertops without even standing on its hind legs."
      ],

      socialization:
        "Early, calm, positive exposure to varied people, friendly dogs, slippery indoor floors, vehicles, and veterinary clinics builds a composed, easily handled giant adult."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cool and temperate maritime climates, mirroring Ireland's damp, breezy weather where its rough wiry coat provides dependable protection",
        "Cold winters are handled comfortably during active walks, though dry, draft-free indoor resting space with thick bedding is essential",
        "Hot, humid summer weather requires shifting exercise to cool early-morning or evening hours with air-conditioned indoor rest and plenty of fresh water"
      ],

      aloneTimeTolerance:
        "Moderate; serene and content napping indoors once exercised, though deeply attached to its family and unhappy if isolated outside in a kennel away from household company."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced giant-breed dog food, strictly using a controlled-calcium, moderate-calorie large/giant-breed puppy diet during rapid growth.",

    feedingFrequency: {
      puppy:
        "Three to four measured meals daily during rapid skeletal growth, carefully moderated so puppies grow slowly and leanly without joint overload.",
      adult:
        "Two (or three) measured smaller meals daily to support steady energy and help reduce acute stomach distension.",
      senior:
        "Two portion-controlled meals daily tailored for older giant-breed cardiac, joint, and metabolic support."
    },

    guidelines:
      "Measure every meal accurately—avoid overfeeding puppies in pursuit of maximum height, because excessive growth rates heighten developmental bone and elbow disorders. Keep mature adults lean and athletically muscled with ribs easily felt beneath the rough coat. Divide daily food into at least two smaller meals, enforce strict calm rest for an hour before and after eating, and keep clean water freely available without encouraging rapid gulping right after intense running.",

    considerations: [
      "Because Irish Wolfhounds are among the highest-risk giant breeds for life-threatening gastric dilatation-volvulus (GDV / bloat), divide daily rations into two or more meals, restrict vigorous running around mealtimes, and discuss prophylactic gastropexy with a veterinarian.",
      "Feed growing puppies a balanced giant-breed growth diet with controlled calcium and phosphorus—never add unprescribed calcium supplements.",
      "Avoid high-impact jumping, long forced runs, or repetitive stair climbing until growth plates close around 18 to 24 months of age.",
      "Transition gradually between diet formulas over five to seven days to avoid digestive upset."
    ],

    note:
      "Giant-breed puppy growth nutrition and adult cardiac/bloat feeding strategies should always be tailored with a veterinarian familiar with giant sighthounds."
  },

  health: {
    overview:
      "The Irish Wolfhound is a beloved giant breed whose greatest heartbreak is its short life expectancy—typically 6 to 8 years (with peer-reviewed UK demographic data reporting a median age at death of 7.04 years). Major veterinary-documented causes of morbidity and mortality include inherited Dilated Cardiomyopathy (DCM) and atrial fibrillation (AF), highly heritable bone cancer (osteosarcoma, estimated heritability 0.65), acute gastric dilatation-volvulus (bloat), recurrent bacterial pneumonia and rhinitis/bronchopneumonia syndrome, and congenital intrahepatic portosystemic liver shunts in puppies. Responsible breeding and veterinary care rely on early puppy serum bile acid screening, annual adult cardiac evaluations (ECG and echocardiography), radiographic hip and elbow screening, specialist eye exams, and careful sighthound anesthetic protocols.",

    commonConditions: [
      "Dilated Cardiomyopathy (DCM) and Atrial Fibrillation (AF) — the leading specific cause of cardiac death in Irish Wolfhounds, involving complex polygenic inheritance and weakened heart-muscle pumping; peer-reviewed clinical trials demonstrate that early preclinical detection via routine ECG/echocardiography and medical therapy (such as pimobendan) significantly delays congestive heart failure and sudden death",
      "Osteosarcoma (bone cancer) — an aggressive malignant bone tumour primarily affecting the long leg bones, with a 2021 pedigree study of 5,110 Irish Wolfhounds estimating high heritability (0.65) and noting that 93% of osteosarcoma-related deaths occur before age 10",
      "Gastric dilatation-volvulus (GDV / bloat) — sudden, life-threatening gas distension and twisting of the stomach requiring immediate emergency surgery; a major risk in deep-chested giant hounds",
      "Congenital intrahepatic portosystemic shunt (liver shunt) — an abnormal blood vessel allowing digestive-tract blood to bypass liver filtration, causing stunted growth and neurological signs; puppies should be screened via a dynamic (pre- and post-meal) serum bile acids blood test before placement",
      "Rhinitis / bronchopneumonia syndrome and recurrent bacterial pneumonia — a well-documented breed predisposition to acute, rapidly progressing bacterial pneumonia (requiring prompt, prolonged antibiotic therapy) and young-dog nasal/respiratory inflammation",
      "Hip dysplasia, elbow dysplasia, and developmental bone disorders — giant-breed orthopedic conditions monitored through pre-breeding radiographic hip and elbow evaluations",
      "Hereditary eye disorders (including Progressive Retinal Atrophy / PRA), lymphoma, von Willebrand disease, and sighthound anesthetic sensitivity — requiring periodic specialist eye checks, awareness of lower anesthetic induction dosing requirements (often one-half to two-thirds standard calculated doses), and monitoring for delayed post-operative bleeding"
    ],

    preventiveCare: [
      "Insist on puppy dynamic serum bile acid test clearance for liver shunt prior to bringing a puppy home, and verify parental cardiac, eye, hip, and elbow screening clearances.",
      "Schedule annual (or semi-annual in older adults) veterinary cardiac evaluations including an electrocardiogram (ECG) and board-certified cardiologist echocardiography to catch preclinical atrial fibrillation or DCM early.",
      "Learn emergency warning signs of both bloat (unproductive retching, swollen tight abdomen, restlessness) and acute pneumonia (sudden high fever, laboured breathing, standing with head and neck extended), and discuss prophylactic gastropexy with your veterinarian.",
      "Remind your veterinarian of giant sighthound physiology before surgery—Irish Wolfhounds typically require lower anesthetic induction doses and monitoring for post-operative bleeding.",
      "Protect developing puppy joints from forced running and jumping until 18 to 24 months of age, maintain a lean body weight, and keep vaccinations and parasite prevention current."
    ],

    recommendedScreenings: [
      "Dynamic (fasting and postprandial) serum bile acids test in puppies to screen for congenital intrahepatic portosystemic liver shunt",
      "Cardiac evaluation by a board-certified veterinary cardiologist (echocardiogram and annual ECG screening for DCM and atrial fibrillation)",
      "Ophthalmic examination by a board-certified veterinary ophthalmologist (annual screening including PRA)",
      "Radiographic hip dysplasia evaluation prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste and schedule regular veterinary dental checks to keep the strong scissor bite and gums healthy.",

    earCare:
      "Inspect the small velvet rose ears weekly for wax buildup, dirt, or redness, cleaning gently with a veterinarian-approved solution when needed.",

    skinCare:
      "Check elbows, hocks, and bony pressure points regularly for calluses or sores (prevented by thick supportive bedding), and part the rough coat during brushing to check for ticks or skin irritation."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Spacious rural or suburban homes with a large, securely fenced yard and room for a giant sofa-sized companion",
      "Calm, affectionate families seeking a serene, quiet, gentle-natured dog who are prepared for higher giant-breed food and veterinary costs",
      "Owners willing to invest in early puppy leash manners, slow-growth joint protection, and proactive annual cardiac monitoring",
      "People who love the dignified, noble presence of a classic rough-coated giant sighthound"
    ],

    notIdealFor: [
      "Small apartments, homes with steep unavoidable staircases, or households with compact vehicles unable to transport a 55+ kg dog safely",
      "Anyone seeking an aggressive, sharp-barking guard dog",
      "Owners wanting reliable off-leash walks near unfenced roads or open areas with small wildlife or loose small pets",
      "Prospective owners unprepared for a relatively short 6- to 8-year lifespan and potentially significant giant-breed medical expenses"
    ]
  },

  funFacts: [
    "In 391 AD, Roman consul Quintus Aurelius Symmachus wrote to his brother thanking him for a gift of seven Irish hounds, reporting that all of Rome gazed at them in amazement and imagined they must have been transported in iron cages.",
    "Standing taller than any other coursing sighthound—with males desired to average 81 to 86 cm at the shoulder—an adult Irish Wolfhound can easily rest its chin on a dining table or reach over six feet tall when standing on its hind legs.",
    "By the mid-nineteenth century the breed was nearly extinct after wolves vanished from Ireland; starting in 1862, Captain George Augustus Graham spent decades painstakingly rebuilding the breed using the last surviving Irish lines alongside Scottish Deerhound and Great Dane outcrosses.",
    "A traditional motto long linked to the breed captures its dual nature: 'Gentle when stroked, fierce when provoked'—though modern Irish Wolfhounds are overwhelmingly serene, quiet, and friendly companions indoors.",
    "The Irish Guards regiment of the British Army has maintained an Irish Wolfhound as its ceremonial regimental mascot since 1902, marching proudly at the head of parades."
  ],

  faq: [
    {
      question: "What is an Irish Wolfhound?",
      answer:
        "The Irish Wolfhound is an ancient, colossal rough-coated sighthound from Ireland—the tallest of all coursing hounds—originally bred to hunt wolves and large game and prized today as a calm, quiet, affectionate 'gentle giant.'"
    },
    {
      question: "How tall and heavy is an Irish Wolfhound?",
      answer:
        "Adult males stand at least 79 cm at the withers (with an average of 81 to 86 cm desired) and weigh at least 54.5 kg, while adult females stand at least 71 cm and weigh at least 40.5 kg, with weight increasing proportionally with greater height and no formal upper limit."
    },
    {
      question: "How long does an Irish Wolfhound live?",
      answer:
        "Like many giant breeds, the Irish Wolfhound has a relatively short life expectancy of 6 to 8 years (with peer-reviewed UK studies reporting a median lifespan around 7 years)."
    },
    {
      question: "Can an Irish Wolfhound live in an apartment?",
      answer:
        "Generally no. Although remarkably calm and quiet indoors, its colossal size, long stride, need for spacious stretching room, and avoidance of repetitive stairs during giant growth make a large house with a big securely fenced yard far more practical."
    },
    {
      question: "Are Irish Wolfhounds good family dogs and good guard dogs?",
      answer:
        "They are wonderful, gentle, patient family dogs (with supervision around small toddlers who could be bumped by a giant body or tail). However, they are typically too friendly and serene to serve as aggressive guard dogs, relying mainly on their imposing size as a deterrent."
    },
    {
      question: "How much grooming and shedding should I expect from an Irish Wolfhound?",
      answer:
        "They shed moderately and have a rough, wiry coat that is fairly straightforward to maintain: thorough brushing once or twice a week, occasional beard wiping, periodic hand-stripping of dead hair, and regular nail trims keep them tidy."
    },
    {
      question: "Are Irish Wolfhounds easy to train?",
      answer:
        "They are gentle, sensitive, and willing to please with warm, patient positive training, though they can respond more deliberately than fast-paced herding breeds. Early loose-leash training is essential, and off-leash reliability near unfenced wildlife or roads should never be assumed."
    },
    {
      question: "What are the main health concerns for an Irish Wolfhound?",
      answer:
        "Major breed health priorities include inherited heart disease (Dilated Cardiomyopathy and atrial fibrillation), osteosarcoma (bone cancer), acute bloat (gastric dilatation-volvulus), congenital liver shunts in puppies (screened via serum bile acids), recurrent bacterial pneumonia, hip and elbow dysplasia, and hereditary eye conditions such as PRA."
    }
  ],

  references: [
    "fci-irish-wolfhound-official-standard",
    "fci-irish-wolfhound-nomenclature",
    "rkc-irish-wolfhound-breed-standard",
    "akc-irish-wolfhound-official-standard",
    "akc-irish-wolfhound-breed-profile",
    "iwca-chic-health-testing",
    "iwca-adult-health-issues",
    "pmc-simpson-2016-iw-dcm-genetics",
    "pmc-vollmar-2016-iw-dcm-clinical-trial",
    "pmc-iw-osteosarcoma-heritability-2021",
    "pubmed-kerr-1999-iw-portosystemic-shunt",
    "pubmed-urfer-2007-iw-lifespan-diseases",
    "wikimedia-irish-wolfhound-brindle-1-canarian",
    "wikimedia-irish-wolfhound-dschoen"
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
          id: "fci-irish-wolfhound-nomenclature",
          role: "verified",
          locator: "Official multilingual names: IRISH WOLFHOUND, LEVRIER IRLANDAIS, IRISCHER WOLFSHUND"
        },
        {
          id: "fci-irish-wolfhound-official-standard",
          role: "verified",
          locator: "Standard heading: IRISH WOLFHOUND"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Verified across FCI Nomenclature No. 160 and FCI Standard No. 160; Cú Faoil is the traditional Irish Gaelic name and Wolfhound is a common short name."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-irish-wolfhound-nomenclature",
          role: "verified",
          locator: "Group 10 Sighthounds; Section 2 Rough-haired Sighthounds; Not subject to a working trial"
        },
        {
          id: "akc-irish-wolfhound-official-standard",
          role: "verified",
          locator: "AKC Hound Group classification"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-irish-wolfhound-nomenclature",
          role: "verified",
          locator: "Country of origin of the breed: IRELAND"
        },
        {
          id: "fci-irish-wolfhound-official-standard",
          role: "verified",
          locator: "ORIGIN: Ireland"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Country of origin (Ireland) verified from FCI Nomenclature No. 160 and FCI Standard No. 160."
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "FCI Standard No. 160, RKC, and AKC specify Ireland as a whole without attributing the breed to a single founding county or province."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-irish-wolfhound-official-standard",
          role: "verified",
          locator: "GENERAL APPEARANCE, CHARACTERISTICS, TEMPERAMENT, COAT, SIZE"
        },
        {
          id: "rkc-irish-wolfhound-breed-standard",
          role: "verified",
          locator: "General appearance, Characteristics, Temperament (gentle, kind and friendly nature), Size (average 81-86 cm desired in dogs)"
        },
        {
          id: "fci-irish-wolfhound-nomenclature",
          role: "verified",
          locator: "Definitive FCI acceptance date: 1955-04-26"
        },
        {
          id: "akc-irish-wolfhound-breed-profile",
          role: "verified",
          locator: "Ancient Irish heritage (391 AD Symmachus record, Captain George Augustus Graham 1862 revival, 1885 standard, 1897 AKC recognition)"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "Synthesized in original prose from FCI Standard No. 160, RKC Standard, FCI Nomenclature, and AKC profile."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "rkc-irish-wolfhound-breed-standard",
          role: "verified",
          locator: "Head and skull, Eyes (dark, elliptical oval, black rims), Ears (small rose-shaped, fine velvet), Mouth (complete scissor bite), Neck (no dewlap), Forequarters, Body, Hindquarters, Feet, Tail, Gait, Coat (rough and harsh, wiry over eyes and under jaw), Colour (grey, brindle, red, black, pure white, fawn, wheaten, steel grey), Size (81-86 cm desired average in dogs)"
        },
        {
          id: "akc-irish-wolfhound-official-standard",
          role: "verified",
          locator: "General Appearance, Head, Neck, Chest, Back, Loins, Tail, Limbs, Feet, Hair, Color and Markings, List of Points in Order of Merit"
        },
        {
          id: "fci-irish-wolfhound-official-standard",
          role: "verified",
          locator: "Size and minimum height/weight requirements (79 cm / 54.5 kg males; 71 cm / 40.5 kg females)"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "All conformation proportions, rose ears, dewlap-free neck, rough wiry coat, and accepted colours follow FCI Standard No. 160, RKC Standard, and AKC Standard."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-irish-wolfhound-official-standard",
          role: "verified",
          locator: "SIZE: Minimum height: males 79 cm, females 71 cm."
        },
        {
          id: "rkc-irish-wolfhound-breed-standard",
          role: "verified",
          locator: "Size: Minimum height for dogs: 79 cms (31 ins), bitches: 71 cms (28 ins); desired to average from 81-86 cms in dogs."
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "Minimum heights preserved verbatim in centimetres (79 cm males, 71 cm females) from FCI Standard No. 160 and RKC Standard. (AKC separately publishes minimums of 32 inches for dogs and 30 inches for bitches)."
    },

    "physical.height.male.max": {
      reliability: "unavailable",
      sources: [
        {
          id: "fci-irish-wolfhound-official-standard",
          role: "cited",
          locator: "Specifies minimum height (79 cm) with no upper height limit"
        }
      ],
      verifiedOn: null,
      note:
        "Neither FCI Standard No. 160, RKC, nor AKC sets an upper height limit for males."
    },

    "physical.height.female.max": {
      reliability: "unavailable",
      sources: [
        {
          id: "fci-irish-wolfhound-official-standard",
          role: "cited",
          locator: "Specifies minimum height (71 cm) with no upper height limit"
        }
      ],
      verifiedOn: null,
      note:
        "Neither FCI Standard No. 160, RKC, nor AKC sets an upper height limit for females."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-irish-wolfhound-official-standard",
          role: "verified",
          locator: "Minimum weight expected: males 54.5 kg for 79 cm of size; females 40.5 kg for 71 cm of size. Weight must increase proportionally with height."
        },
        {
          id: "rkc-irish-wolfhound-breed-standard",
          role: "cited",
          locator: "Minimum weight: 54.5 kgs (120 lbs) for dogs, 40.9 kgs (90 lbs) for bitches."
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "Minimum weights preserved verbatim in kilograms (54.5 kg males, 40.5 kg females) from FCI Standard No. 160. (RKC specifies 54.5 kg / 40.9 kg; AKC specifies minimums of 120 lb / 105 lb)."
    },

    "physical.weight.male.max": {
      reliability: "unavailable",
      sources: [
        {
          id: "fci-irish-wolfhound-official-standard",
          role: "cited",
          locator: "Specifies minimum weight (54.5 kg) increasing proportionally with size, with no upper weight limit"
        }
      ],
      verifiedOn: null,
      note:
        "Neither FCI Standard No. 160, RKC, nor AKC sets an upper weight limit for males."
    },

    "physical.weight.female.max": {
      reliability: "unavailable",
      sources: [
        {
          id: "fci-irish-wolfhound-official-standard",
          role: "cited",
          locator: "Specifies minimum weight (40.5 kg) increasing proportionally with size, with no upper weight limit"
        }
      ],
      verifiedOn: null,
      note:
        "Neither FCI Standard No. 160, RKC, nor AKC sets an upper weight limit for females."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-irish-wolfhound-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 6-8 years"
        },
        {
          id: "pmc-simpson-2016-iw-dcm-genetics",
          role: "verified",
          locator: "Reports UK median age at death of 7.04 years (maximum reported 11.83 years)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Verified from AKC breed profile and consistent with peer-reviewed UK demographic longevity data (median 7.04 years)."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-irish-wolfhound-breed-profile",
          role: "verified",
          locator: "Shedding rating: 3/5 (Moderate)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "rkc-irish-wolfhound-breed-standard",
          role: "verified",
          locator: "Neck: without dewlap or loose skin about throat; Head: clean black lips."
        },
        {
          id: "akc-irish-wolfhound-official-standard",
          role: "verified",
          locator: "Neck: without dewlap or loose skin about the throat."
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Clean lips and dewlap-free throat keep drooling low."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "rkc-irish-wolfhound-breed-standard",
          role: "verified",
          locator: "Temperament: Gentle, kind and friendly nature."
        },
        {
          id: "akc-irish-wolfhound-breed-profile",
          role: "verified",
          locator: "Dignified, courageous, calm; Vocalization rating 1/5 (very quiet); strong family affection."
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-irish-wolfhound-breed-profile",
          role: "cited",
          locator: "Breed Traits: Affection (5/5), Energy (3/5), Trainability (3/5), Vocalization (1/5), Openness to Strangers (3/5)"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates reflecting documented serene, quiet, affectionate gentle-giant nature and moderate indoor energy."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-irish-wolfhound-breed-profile",
          role: "cited",
          locator: "Grooming frequency (2/5), moderate daily exercise, gentle positive training, secure fencing for sighthounds"
        }
      ],
      verifiedOn: null,
      note:
        "General giant-sighthound care combining steady daily exercise, strict puppy joint protection, thick orthopaedic bedding, and rough-coat brushing."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-irish-wolfhound-breed-profile",
          role: "verified",
          locator: "Energy Level: 3/5 (Moderate); calm indoors with daily outdoor walks and safe fenced running."
        },
        {
          id: "rkc-irish-wolfhound-breed-standard",
          role: "verified",
          locator: "Characteristics: Of great power, activity, speed and courage; Gait: Easy and active."
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "Editorial daily activity range (60 to 90 minutes) for fully mature adults, noting puppies require strict exercise moderation during rapid skeletal growth."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "Editorial assessment that colossal adult size, long stride, and stair-avoidance during giant growth make apartments impractical."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-irish-wolfhound-breed-profile",
          role: "verified",
          locator: "Best suited to spacious homes with large, securely fenced yards for safe sighthound movement."
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "rkc-irish-wolfhound-breed-standard",
          role: "cited",
          locator: "Rough and harsh weatherproof coat; Irish maritime origin"
        }
      ],
      verifiedOn: null,
      note: "General climate guidance inferred from Irish origin, rough coat, and giant-breed heat-dissipation needs."
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-irish-wolfhound-breed-profile",
          role: "cited",
          locator: "Deeply people-bonded household companion"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "iwca-adult-health-issues",
          role: "cited",
          locator: "GDV/bloat risk awareness in adult Irish Wolfhounds"
        }
      ],
      verifiedOn: null,
      note:
        "General giant-breed veterinary nutrition guidance emphasizing slow controlled puppy growth and mealtime bloat precautions."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Standard giant-breed life-stage feeding schedule dividing adult food into two or more smaller meals."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pmc-simpson-2016-iw-dcm-genetics",
          role: "verified",
          locator: "BioMed Res Int 2016 (PMC5187458): UK median age at death 7.04 years; DCM as most common cardiac cause of death alongside osteosarcoma, bronchopneumonia, and GDV; polygenic DCM associations."
        },
        {
          id: "pmc-iw-osteosarcoma-heritability-2021",
          role: "verified",
          locator: "Canine Med Genet 2021 (PMC8502365): Pedigree analysis of 5,110 Irish Wolfhounds estimating osteosarcoma heritability at 0.65 (93% of OSA deaths before age 10)."
        },
        {
          id: "pubmed-kerr-1999-iw-portosystemic-shunt",
          role: "verified",
          locator: "Vet Rec 1999 (PMID 10420483): Mass screening of Irish Wolfhound puppies for congenital portosystemic shunts via dynamic bile acid testing."
        },
        {
          id: "pubmed-urfer-2007-iw-lifespan-diseases",
          role: "verified",
          locator: "Vet Q 2007 (PMID 17970287): Review of lifespan and breed predispositions (DCM, OSA, GDV, intrahepatic portosystemic shunt, rhinitis, PRA, vWD)."
        },
        {
          id: "iwca-chic-health-testing",
          role: "verified",
          locator: "CHIC screening panel: hereditary heart disease (cardiologist echo + annual ECG), hereditary eye disease (PRA), hip dysplasia, elbow dysplasia."
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "Synthesizes peer-reviewed veterinary studies and parent-club screening protocols without naming clubs or registries in user-facing text."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pmc-simpson-2016-iw-dcm-genetics",
          role: "verified",
          locator: "Polygenic Dilated Cardiomyopathy (DCM), osteosarcoma, bronchopneumonia, and GDV"
        },
        {
          id: "pmc-vollmar-2016-iw-dcm-clinical-trial",
          role: "verified",
          locator: "Preclinical DCM and Atrial Fibrillation clinical trial showing significant delay to CHF/sudden death with early pimobendan therapy (1,991 days vs. 858 days benazepril, P = 0.002)"
        },
        {
          id: "pmc-iw-osteosarcoma-heritability-2021",
          role: "verified",
          locator: "Osteosarcoma high heritability (h² = 0.65) in 5,110 Irish Wolfhounds"
        },
        {
          id: "pubmed-kerr-1999-iw-portosystemic-shunt",
          role: "verified",
          locator: "Congenital intrahepatic portosystemic liver shunt in puppies"
        },
        {
          id: "iwca-adult-health-issues",
          role: "verified",
          locator: "GDV/bloat, acute rapid-onset pneumonia, lymphoma, and lower anesthetic induction dosing (1/2 to 2/3 standard calculated dose)"
        },
        {
          id: "pubmed-urfer-2007-iw-lifespan-diseases",
          role: "verified",
          locator: "Rhinitis, PRA, von Willebrand disease"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "Stratifies leading peer-reviewed causes of mortality (DCM/AF, osteosarcoma, GDV, pneumonia, congenital liver shunt) alongside orthopedic, ocular, and sighthound surgical precautions."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "iwca-adult-health-issues",
          role: "cited",
          locator: "Annual/semi-annual ECG monitoring, prompt pneumonia recognition, bloat emergency readiness, anesthetic dosing awareness"
        },
        {
          id: "iwca-chic-health-testing",
          role: "cited",
          locator: "Pre-breeding cardiac, eye, hip, and elbow screening"
        },
        {
          id: "pubmed-kerr-1999-iw-portosystemic-shunt",
          role: "cited",
          locator: "Puppy dynamic serum bile acids screening"
        }
      ],
      verifiedOn: null,
      note: "General preventive veterinary care protocol tailored to Irish Wolfhounds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "iwca-chic-health-testing",
          role: "verified",
          locator: "Four required adult CHIC screenings: cardiologist echocardiogram (+ recommended annual ECG), board-certified ophthalmologist eye exam (PRA), hip dysplasia radiograph, and elbow dysplasia radiograph."
        },
        {
          id: "akc-irish-wolfhound-breed-profile",
          role: "verified",
          locator: "Recommended screenings: Hip Evaluation, Elbow Evaluation, Cardiac Exam, Ophthalmologist Evaluation, and Serum Bile Acids."
        },
        {
          id: "pubmed-kerr-1999-iw-portosystemic-shunt",
          role: "verified",
          locator: "Supports dynamic serum bile acid testing in puppies for congenital portosystemic shunts."
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "Summarizes IWCA/OFA CHIC health screening panel and puppy serum bile acids testing without naming registries or clubs in user-facing text."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "rkc-irish-wolfhound-breed-standard",
          role: "cited",
          locator: "Mouth: Strong jaws with a perfect, regular and complete scissor bite."
        }
      ],
      verifiedOn: null,
      note: "Standard home and veterinary dental care guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "rkc-irish-wolfhound-breed-standard",
          role: "cited",
          locator: "Ears: Small, rose shaped, of fine velvet texture."
        }
      ],
      verifiedOn: null,
      note: "Routine rose-ear inspection and cleaning guidance."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "rkc-irish-wolfhound-breed-standard",
          role: "cited",
          locator: "Coat: Rough and harsh on body, legs and head."
        }
      ],
      verifiedOn: null,
      note: "General giant-breed pressure-point/callus prevention and skin inspection guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-irish-wolfhound-breed-profile",
          role: "cited",
          locator: "Colossal size, gentle calm home nature, poor aggressive guard dog, large fenced yard needs, short 6-8 year lifespan"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability evaluations balancing serene gentle-giant devotion against colossal space/cost requirements, sighthound prey drive, and short lifespan."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-irish-wolfhound-breed-profile",
          role: "verified",
          locator: "391 AD Quintus Aurelius Symmachus gift of seven Irish hounds to Rome; 1862 Captain George Augustus Graham revival; traditional motto; Irish Guards regimental mascot since 1902"
        },
        {
          id: "rkc-irish-wolfhound-breed-standard",
          role: "verified",
          locator: "Desired average height of 81 to 86 cm in males; tallest coursing sighthound"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Verified historical, anatomical, and cultural facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-irish-wolfhound-official-standard",
          role: "verified",
          locator: "Origin (Ireland), minimum height (79 cm males / 71 cm females), minimum weight (54.5 kg males / 40.5 kg females)"
        },
        {
          id: "rkc-irish-wolfhound-breed-standard",
          role: "verified",
          locator: "Desired male average 81-86 cm; gentle, kind, friendly temperament"
        },
        {
          id: "akc-irish-wolfhound-breed-profile",
          role: "verified",
          locator: "Lifespan (6-8 years), moderate shedding, training, space needs"
        },
        {
          id: "pmc-simpson-2016-iw-dcm-genetics",
          role: "verified",
          locator: "DCM, osteosarcoma, GDV, pneumonia, and 7.04-year UK median lifespan"
        },
        {
          id: "iwca-chic-health-testing",
          role: "verified",
          locator: "Heart, eye (PRA), hip, elbow, and liver-shunt screening priorities"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "FAQ answers synthesize FCI Standard No. 160, RKC, AKC, IWCA, and peer-reviewed veterinary studies without naming clubs or registries in user-facing prose."
    }
  },

  updatedOn: "2026-11-21"
};
