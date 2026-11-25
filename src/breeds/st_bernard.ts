import type { Breed } from "../schema/breed.types";

export const st_bernard: Breed = {
  slug: "st-bernard",
  name: "St. Bernard",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Saint Bernard",
    "St. Bernhardshund",
    "Bernhardiner",
    "Chien du Mont Saint-Bernard",
    "Cane di San Bernardo",
    "Barry-dog"
  ],

  group:
    "Pinscher and Schnauzer Type, Molossoid Breeds, and Swiss Mountain and Cattle Dogs; Section 2.2 — Mountain-type Molossoids (without working trial; also classified in the Working group)",

  origin: {
    country: "Switzerland",
    region: "Great St. Bernard Pass (Valais, Swiss Alps)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/St_Bernard_Dog_001.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:St_Bernard_Dog_001.jpg",
      title: "St Bernard Dog 001.jpg",
      description:
        "An adult long-haired St. Bernard outdoors, displaying its massive broad head, dark facial mask with white blaze, kindly dark brown eyes, and plush red-and-white coat.",
      creator: "Cassie J",
      uploader: "Ltshears",
      capturedOn: "2008-10-04",
      uploadedOn: "2008-11-02",
      width: 1024,
      height: 768,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Cassie J, Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:St_Bernard_Dog_001.jpg. License: https://creativecommons.org/licenses/by/2.0/. Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-11-25"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bernardyn_kr%C3%B3tkow%C5%82osy_339.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Bernardyn_kr%C3%B3tkow%C5%82osy_339.jpg",
      title: "Bernardyn krótkowłosy 339.jpg",
      description:
        "An adult short-haired (Stockhaar) St. Bernard standing in profile, highlighting its powerful giant build, smooth dense double coat, red mantle with white collar and paws, and heavy low-carried tail.",
      creator: "Pleple2000",
      uploader: "Pleple2000",
      capturedOn: "2006-11-11",
      uploadedOn: "2006-11-21",
      width: 2502,
      height: 1764,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Pleple2000, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Bernardyn_kr%C3%B3tkow%C5%82osy_339.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-25"
    }
  ],

  overview: {
    summary:
      "The iconic gentle giant of the Swiss Alps and national dog of Switzerland, renowned for centuries of snow-rescue heroism at the Great St. Bernard Pass alongside a serene, patient, and deeply affectionate family temperament.",

    description:
      "The St. Bernard is an imposing, powerfully muscled giant Alpine mountain dog existing in two distinct coat varieties—a dense, smooth short-haired variety ('Stockhaar') and a straight, medium-length long-haired variety—both carrying heavy bone, harmonious balance, and a deeply benevolent expression. Slightly longer than tall in an ideal 9:10 height-to-length ratio, it pairs a broad, massive head, abrupt stop, broad black square nose, and well-developed neck dewlap with medium-sized dark brown eyes and supple triangular drop ears framing the cheeks. Its iconic coat combines crisp white markings on the chest, feet, tail tip, muzzle band, blaze, and neck collar with clear red, dark red, or reddish-brown brindle mantle or splash patches, ideally accented by dark shading around the face and ears. Despite its colossal strength and booming watchdog presence, the St. Bernard is famously calm, tender, sensitive, and patient around children—moving with an unhurried, far-reaching stride outdoors while happily curling beside its family inside the home.",

    history:
      "At the 2,473-metre summit of the Great St. Bernard Pass in the Swiss Alps, Augustinian monks founded a mountain hospice in the eleventh century to shelter pilgrims and travellers crossing treacherous snowbound trails between Switzerland and Italy. From at least the mid-seventeenth century—documented visually by 1695 and in hospice archives by 1707—the monks kept large regional Alpine farm dogs to guard the monastery and track travellers lost in blizzards and avalanches. Word of these remarkable 'Barry-dogs' spread across Europe after Napoleon Bonaparte's army crossed the pass in 1800, immortalized by the legendary hospice dog Barry (who died in Bern in 1814 and is credited with saving more than forty lives). When Switzerland opened its national dog studbook in February 1884, entry number one was a St. Bernard named Léon, followed by twenty-eight more St. Bernards; the Swiss St. Bernard club was founded in Basel on March 15, 1884, and an international canine congress on June 2, 1887 officially recognized the St. Bernard as Switzerland's national dog. Definitive international recognition followed in August 1954. While today's heavier St. Bernard is less suited to deep-snow avalanche rescues than its leaner hospice forebears, it remains one of the world's most beloved family companions, carting athletes, and therapy dogs.",

    originalPurpose:
      "Guarding the Great St. Bernard Pass hospice and locating and rescuing travellers trapped in Alpine snowdrifts and avalanches, alongside farm guarding and draught work.",

    currentRoles: [
      "Gentle, devoted family companion",
      "Carting, drafting, and weight-pulling working competitor",
      "Mantrailing, scent-work, mobility, and therapy dog",
      "Watchful, reassuring homestead presence"
    ]
  },

  physical: {
    sizeCategory: "Giant",

    height: {
      unit: "cm",
      male: {
        min: 70,
        max: 90
      },
      female: {
        min: 65,
        max: 80
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 140,
        max: 180
      },
      female: {
        min: 120,
        max: 140
      }
    },

    lifespanYears: {
      min: 8,
      max: 10
    },

    coatType:
      "Occurs in two distinct double-coated varieties: the Short-haired variety ('Stockhaar') features a dense, smooth, close-lying coarse topcoat with abundant undercoat, slight breeches on the thighs, and a densely furred tail; the Long-haired variety features a straight, medium-length topcoat with plentiful undercoat, short hair on the face and ears, slight wave over the haunches and croup, feathered forelegs, full thigh breeches, and a bushy tail.",

    coatLength: "Medium",

    coatColors: [
      "White with clear red to dark red unbroken mantle covering the back and flanks (mantle dogs) or smaller to larger red patches (splash-coated dogs)",
      "White with a broken reddish-brown mantle or reddish-brown brindle patches (brownish-yellow tolerated)",
      "Mandatory white markings on the chest, feet, tip of the tail, nose band, blaze, and neck patch (white collar and symmetrical dark shading/mask on the head and ears are highly desired)"
    ],

    sheddingLevel:
      "Moderate to high; both short-haired and long-haired double coats shed steadily year-round and blow their dense undercoat heavily twice a year",

    droolingLevel:
      "High; deep, heavily developed upper lips and well-pronounced neck and throat dewlaps produce copious drool—especially after drinking, eating, excitement, or warm weather",

    distinctiveFeatures: [
      "Impressive, strongly boned, harmonious giant mountain build existing in both Short-haired ('Stockhaar') and Long-haired varieties",
      "Height at the withers of 70 to 90 cm for males and 65 to 80 cm for females (harmonious, sound dogs exceeding the upper limit are not penalized)",
      "Adult weight typically ranging from 140 to 180 pounds for males and 120 to 140 pounds for females",
      "Ideal height-to-body-length proportion of 9:10 with a broad firm horizontal back, moderately deep chest never projecting below elbow level, and slight abdominal tuck-up",
      "Massive, imposing head measuring slightly over one-third of height at the withers, with an abrupt stop, slight forehead wrinkles converging when alert, and a short deep square muzzle (depth-to-length ratio nearly 2:1)",
      "Broad square black nose, dark-pigmented deep upper lips, well-pronounced throat dewlap, and strong jaws meeting in a regular scissor or level bite",
      "Medium-sized, moderately deep-set dark brown to nut-brown eyes with a friendly, benevolent expression and reasonably tight lids (excessive loose brow skin or heavy haw is undesirable)",
      "Medium-sized, high- and broad-set supple triangular drop ears with rounded tips and strongly developed ear burrs, lying close to the cheeks along the front edge",
      "Broad, heavy, long tail reaching at least to the hock joint, hanging straight or slightly upturned at the tip at rest and lifting smoothly in motion without curling over the back",
      "Broad, compact feet with strong, tight, well-arched toes supporting an unhurried, harmonious, far-reaching stride"
    ]
  },

  temperament: {
    traits: [
      "Friendly, kindly, serene, and remarkably gentle—radiating calm composure indoors",
      "Famously patient, watchful, and careful around children when properly raised and supervised",
      "Deeply affectionate and people-oriented, thriving on constant togetherness with its family",
      "Naturally benevolent and trustworthy even around polite strangers, while retaining an alert, reassuring protective instinct",
      "Intelligent and eager to please once it understands a request, yet emotionally sensitive and occasionally strong-willed enough to selectively ignore commands",
      "Generally quiet indoors, typically barking mainly to alert the household",
      "Needs consistent human and canine social contact rather than solitary confinement"
    ],

    scores: {
      affection: 5,
      withChildren: 5,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: 4,
      independence: 2,
      trainability: 3,
      barking: 2,
      energy: 2
    }
  },

  care: {
    exercise: {
      level:
        "Moderate; despite colossal size and strength, adult St. Bernards have modest daily exercise needs and enjoy unhurried walks, cool-weather hikes, or carting—while growing puppies need strict exercise moderation to protect developing giant joints",

      minutesPerDay: {
        min: 30,
        max: 60
      },

      activities: [
        "Unhurried daily leashed walks during cool morning or evening hours",
        "Carting, wagon pulling, and organised drafting or weight-pulling for fully mature adults",
        "Mantrailing, scent-search games, and calm obedience or therapy visits",
        "Cool-weather rambling and supervised outdoor lounging in a spacious fenced yard"
      ]
    },

    grooming: {
      level: "Moderate to high",

      brushing:
        "Brush thoroughly two to three times weekly—and daily during spring and autumn coat blows—using a slicker brush, undercoat rake, and metal comb. Long-haired St. Bernards need extra attention to clear twigs, burrs, and mats behind the ears, chest, feathering, and thigh breeches.",

      bathing:
        "Bathe every six to eight weeks (or when muddy) using a mild canine shampoo; comb out all tangles before bathing and dry completely down to the skin to prevent damp hot spots.",

      notes: [
        "Keep absorbent drool towels handy to wipe the deep flews, chin, and neck dewlaps after drinking and meals so constant moisture does not irritate skin folds.",
        "Inspect the medium-sized, close-lying drop ears weekly for wax buildup, moisture, or odour.",
        "Check eyes daily for discharge or eyelid irritation, wiping gently with a clean damp cloth.",
        "Provide thick, supportive orthopaedic bedding to protect giant elbows and hocks from pressure calluses, trim nails regularly, and brush teeth several times weekly using canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Moderate; kind-hearted, smart, and eager to please, yet sensitive and occasionally stubborn—early puppy manners are essential long before the dog reaches 120 to 180 pounds",

      tips: [
        "Begin loose-leash walking, polite non-jumping greetings, and calm doorway manners during early puppyhood while the dog is still manageable in size.",
        "Use patient, upbeat, reward-based training with praise and measured treats; harsh corrections shut down this emotionally sensitive giant and invite stubbornness.",
        "Keep sessions brief and engaging—St. Bernards learn thoughtfully and work best as collaborative partners alongside their owner.",
        "Accustom puppies early to grooming, paw handling, ear cleaning, eye wiping, and walking up sturdy vehicle ramps."
      ],

      socialization:
        "Broad, positive early socialization with varied people, friendly dogs, children, indoor surfaces, and everyday sights nurtures a calm, confident, easily handled adult giant."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cold, snowy, and Alpine mountain climates, where the thick double coat and plush undercoat thrive outdoors",
        "Cool temperate climates with spacious indoor resting areas",
        "Hot, humid climates carry a high risk of overheating and heatstroke; keep the dog indoors with air conditioning during midday heat, provide constant cold water, and walk only in the coolest dawn or evening hours"
      ],

      aloneTimeTolerance:
        "Low; deeply attached to its human household, a St. Bernard left alone for long stretches frequently develops anxiety or unwanted behaviours."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced giant-breed dog food, strictly using a controlled-calcium, moderate-calorie large/giant-breed puppy formula during rapid skeletal growth.",

    feedingFrequency: {
      puppy:
        "Three to four measured meals daily during rapid first-year growth on a controlled giant-breed puppy diet designed to keep growth slow, steady, and lean.",
      adult:
        "Two measured meals daily to sustain steady condition and reduce acute stomach distension.",
      senior:
        "Two portion-controlled meals daily tailored for slower giant-breed metabolism, cardiac support, and joint comfort."
    },

    guidelines:
      "Measure every meal accurately and feel beneath the thick double coat weekly to confirm easily palpable ribs without excess fat. Carrying even modest extra weight sharply accelerates hip and elbow arthritis in a 120- to 180-pound giant. Divide daily adult rations into at least two smaller meals, enforce calm rest for an hour before and after eating, and keep clean cool water continuously available.",

    considerations: [
      "Because St. Bernards are a deep-chested giant breed at high risk for life-threatening gastric dilatation-volvulus (GDV / bloat), divide food into two or more meals, restrict vigorous activity around mealtimes, and discuss prophylactic gastropexy with a veterinarian.",
      "Feed growing puppies a balanced giant-breed puppy formula with controlled energy and calcium—never add unprescribed calcium supplements.",
      "Avoid high-impact jumping, forced jogging, or constant steep stair climbing until giant growth plates close around 18 to 24 months.",
      "Transition gradually between diet formulas over five to seven days."
    ],

    note:
      "Giant-breed puppy growth nutrition and adult joint/bloat feeding routines should always be tailored with a veterinarian."
  },

  health: {
    overview:
      "The St. Bernard is a beloved giant working breed with a typical life expectancy of 8 to 10 years, carrying several well-documented orthopaedic, cardiac, ocular, neurological, and emergency health risks that demand conscientious breeding and proactive veterinary care. Major breed priorities include developmental hip dysplasia and elbow dysplasia, eyelid conformation defects (entropion and ectropion), acute gastric dilatation-volvulus (bloat), inherited Dilated Cardiomyopathy (DCM) and congenital heart defects, osteosarcoma (bone cancer, with peer-reviewed studies showing elevated familial risk), epilepsy, and two molecularly characterized hereditary polyneuropathies shared with the Leonberger—juvenile-onset ARHGEF10-related polyneuropathy (LPN1) and CNTNAP1-related laryngeal paralysis and polyneuropathy (LPPN3)—alongside Degenerative Myelopathy (DM) DNA screening.",

    commonConditions: [
      "Hip dysplasia and elbow dysplasia — developmental laxity and malformation of the hip and elbow joints causing pain and osteoarthritis in heavy-boned giants; monitored through mandatory pre-breeding radiographic evaluations",
      "Gastric dilatation-volvulus (GDV / bloat) — sudden, life-threatening gas distension and twisting of the stomach requiring immediate emergency surgery, a premier emergency risk in giant deep-chested breeds",
      "Eyelid conformation disorders (entropion and ectropion) and hereditary eye disease — inward or outward rolling of the eyelids irritating the cornea, alongside ocular conditions monitored via pre-breeding specialist ophthalmologist exams",
      "Dilated Cardiomyopathy (DCM) and congenital heart defects — progressive weakening of the heart muscle and structural cardiac abnormalities monitored via board-certified veterinary cardiologist examinations",
      "Osteosarcoma (bone cancer) — aggressive malignant bone tumour of giant breeds, with peer-reviewed pedigree research documenting significantly elevated familial aggregation among first-degree St. Bernard relatives",
      "Inherited polyneuropathies (LPN1 / ARHGEF10 and LPPN3 / CNTNAP1) and Degenerative Myelopathy (DM) — progressive peripheral-nerve and laryngeal-paralysis disorders genetically mapped in Saint Bernards to a 10-bp ARHGEF10 deletion (c.1955_1958+6del) and a CNTNAP1 missense variant (c.2810G>A; p.Gly937Glu), alongside SOD1-linked Degenerative Myelopathy, all screenable via DNA testing",
      "Epilepsy, autoimmune thyroiditis, heatstroke susceptibility, lip-fold dermatitis, and otitis externa — neurological, endocrine, heat-intolerance, and skin/ear moisture concerns requiring routine preventive care"
    ],

    preventiveCare: [
      "Verify documented pre-breeding health clearances for both parents: radiographic hip and elbow evaluations (at 24+ months), specialist veterinary ophthalmologist eye examination, board-certified veterinary cardiologist heart clearance, DNA test for Degenerative Myelopathy (and consider LPN1/LPPN3 polyneuropathy DNA tests), and thyroid screening.",
      "Protect developing giant joints by avoiding forced running, jumping, and constant staircases until 18 to 24 months, keeping body condition strictly lean throughout life.",
      "Divide daily adult meals into two or more portions, enforce calm rest around mealtimes, know emergency bloat warning signs (unproductive retching, swollen tight abdomen, restlessness), and discuss prophylactic gastropexy with a veterinarian.",
      "Keep the dog cool in warm weather to prevent heatstroke, wipe drool from lip folds daily, dry the double coat thoroughly after baths, and check drop ears weekly.",
      "Schedule annual veterinary wellness check-ups (semi-annually in senior years) and keep vaccinations and parasite prevention current."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation prior to breeding (at 24 months of age or older)",
      "Radiographic elbow dysplasia evaluation prior to breeding (at 24 months of age or older)",
      "Ophthalmic examination by a board-certified veterinary ophthalmologist",
      "Cardiac evaluation by a board-certified veterinary cardiologist (at 24 months of age or older)",
      "DNA test for Degenerative Myelopathy (DM), plus optional DNA screening for ARHGEF10 (LPN1) and CNTNAP1 (LPPN3) polyneuropathies and autoimmune thyroiditis panel"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste and schedule regular veterinary dental checks to keep the strong scissor or level bite and gums healthy.",

    earCare:
      "Inspect the medium-sized, close-lying triangular drop ears weekly for moisture, wax buildup, odour, or redness, cleaning gently with a veterinarian-approved solution when needed.",

    skinCare:
      "Wipe drool from lip folds and neck dewlaps daily to prevent moist skin-fold dermatitis, dry the thick coat completely after baths, and check giant elbows and hocks for pressure calluses."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Families living in spacious ground-level or rural homes with fenced yards seeking a serene, famously patient, child-loving gentle giant",
      "Owners in cool or temperate climates who want a calm, moderate-energy companion and enjoy cool-weather walks or draught carting",
      "People who cheerfully accept generous drool, heavy seasonal shedding, regular brushing, and substantial giant-breed food and veterinary budgets",
      "Handlers committed to early positive puppy training and slow-growth joint care"
    ],

    notIdealFor: [
      "Small city apartments, walk-ups with frequent staircases, or households with compact vehicles unable to transport a 120- to 180-pound dog",
      "Neat-freak households unwilling to live with daily drool towels and abundant drifting fur",
      "Hot, humid outdoor lifestyles lacking reliable air-conditioned indoor refuge",
      "Owners who leave a family-oriented dog alone for long workdays or are unprepared for an 8- to 10-year lifespan and giant-breed healthcare costs"
    ]
  },

  funFacts: [
    "Despite countless cartoons and postcards, the rescue dogs of the Great St. Bernard Pass never carried little casks of brandy around their necks—that romantic myth was invented by nineteenth-century Victorian painter Sir Edwin Landseer in an 1820 painting.",
    "The most famous St. Bernard in history, a hospice rescue dog named Barry who died in Bern in 1814, is credited with saving more than forty people lost in Alpine ice and snow; his preserved mount remains on permanent display at the Natural History Museum in Bern.",
    "When Switzerland opened its national dog studbook in February 1884, the very first dog entered was a St. Bernard named Léon—and the next twenty-eight entries were also St. Bernards.",
    "On June 2, 1887, an international canine congress officially recognized the St. Bernard as a Swiss breed, establishing it ever since as the national dog of Switzerland.",
    "The breed exists in two equally recognized coat types—smooth short-haired ('Stockhaar') and long-haired—and early hospice rescuers actually preferred the short-haired coat because heavy wet snow did not clump and freeze onto it."
  ],

  faq: [
    {
      question: "What is a St. Bernard?",
      answer:
        "The St. Bernard (St. Bernhardshund or Bernhardiner) is a giant Alpine mountain dog from Switzerland—the country's national dog—famous for centuries of snow rescues at the Great St. Bernard Pass and cherished today as a serene, affectionate family companion."
    },
    {
      question: "How tall and heavy is a St. Bernard?",
      answer:
        "Adult males stand 70 to 90 cm at the withers and typically weigh 140 to 180 pounds, while adult females stand 65 to 80 cm and typically weigh 120 to 140 pounds."
    },
    {
      question: "How long does a St. Bernard live?",
      answer:
        "Like most giant breeds, the St. Bernard has a typical life expectancy of 8 to 10 years, supported by lean weight management, joint protection, and proactive veterinary care."
    },
    {
      question: "Did St. Bernards really carry brandy barrels around their necks?",
      answer:
        "No. That famous image is a romantic legend popularized by nineteenth-century painter Sir Edwin Landseer; real hospice dogs at the Great St. Bernard Pass worked without brandy casks."
    },
    {
      question: "Can a St. Bernard live in an apartment?",
      answer:
        "No. Although quiet and calm indoors, its massive 120- to 180-pound frame, avoidance of frequent stairs during giant growth, and need for room to stretch make a spacious ground-level house with a fenced yard far more suitable."
    },
    {
      question: "Do St. Bernards drool and shed a lot?",
      answer:
        "Yes. Both short-haired and long-haired varieties shed steadily with heavy twice-yearly undercoat blows requiring regular brushing (daily during moulting), and their deep flews produce generous drool after drinking, eating, or excitement."
    },
    {
      question: "Are St. Bernards good with children and easy to train?",
      answer:
        "They are famously patient, gentle, and watchful with children (always supervised so toddlers are not accidentally bumped). They are smart and eager to please with calm positive training, though occasionally strong-willed—making early puppy leash training essential before they reach giant size."
    },
    {
      question: "What are the main health concerns for a St. Bernard?",
      answer:
        "Major breed health priorities include hip and elbow dysplasia, acute bloat (gastric dilatation-volvulus), eyelid issues (entropion/ectropion), heart disease (such as Dilated Cardiomyopathy), osteosarcoma (bone cancer), epilepsy, Degenerative Myelopathy (DM), and DNA-screenable inherited polyneuropathies (ARHGEF10 and CNTNAP1)."
    }
  ],

  references: [
    "fci-st-bernard-official-standard",
    "fci-st-bernard-nomenclature",
    "skg-st-bernhardshund-profile",
    "akc-st-bernard-official-standard",
    "akc-st-bernard-breed-profile",
    "rkc-st-bernard-breed-standard",
    "rkc-st-bernard-breed-profile",
    "sbca-breeder-referral-health-2024",
    "pmc-letko-2020-st-bernard-cntnap1-lppn3",
    "pubmed-ekenstedt-2014-st-bernard-arhgef10-lpn1",
    "pubmed-bech-nielsen-1978-st-bernard-osteosarcoma",
    "wikimedia-st-bernard-dog-001-cassie-j",
    "wikimedia-bernardyn-krotkowlosy-339-pleple2000"
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
          id: "fci-st-bernard-nomenclature",
          role: "verified",
          locator: "Official multilingual names: ST. BERNHARDSHUND - BERNHARDINER, ST. BERNARD, CHIEN DU MONT SAINT-BERNARD - SAINT-BERNARD"
        },
        {
          id: "fci-st-bernard-official-standard",
          role: "verified",
          locator: "Historic 19th-century name: Barry-dog"
        },
        {
          id: "akc-st-bernard-official-standard",
          role: "verified",
          locator: "Official AKC name: Saint Bernard"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified across FCI Standard No. 61, FCI Nomenclature No. 61, and AKC; Cane di San Bernardo is the official Italian Swiss Kennel Club name."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-st-bernard-nomenclature",
          role: "verified",
          locator: "Group 2 Pinscher and Schnauzer - Molossoid and Swiss Mountain and Cattledogs; Section 2.2 Molossian type, Mountain type; Without working trial"
        },
        {
          id: "rkc-st-bernard-breed-standard",
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
          id: "fci-st-bernard-official-standard",
          role: "verified",
          locator: "ORIGIN: Switzerland; BRIEF HISTORICAL SUMMARY: Great St. Bernard Pass hospice"
        },
        {
          id: "skg-st-bernhardshund-profile",
          role: "verified",
          locator: "Switzerland (Great St. Bernard Pass at 2,473 m altitude in the Alps)"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Country (Switzerland) and Alpine Great St. Bernard Pass origin verified directly from FCI Standard No. 61 and SKG."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-st-bernard-official-standard",
          role: "verified",
          locator: "BRIEF HISTORICAL SUMMARY (11th-century hospice, 1800 Bonaparte pass crossing, Barry, February 1884 SHSB #1 Léon + 28 registrations, March 15 1884 Basel club, June 2 1887 Swiss national dog recognition), GENERAL APPEARANCE (short-haired and long-haired varieties), IMPORTANT PROPORTIONS (9:10)"
        },
        {
          id: "skg-st-bernhardshund-profile",
          role: "verified",
          locator: "2,473 m hospice altitude, 1695 pictorial and 1707 archival hospice records, Barry (>40 lives saved, died 1814 in Bern), definitive FCI recognition 1954-08-28, modern sport roles (mobility, search, mantrailing)"
        },
        {
          id: "akc-st-bernard-breed-profile",
          role: "verified",
          locator: "Patient, watchful family companion and carting/drafting abilities"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Synthesized in original prose from FCI Standard No. 61, SKG, and AKC records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-st-bernard-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS (9:10 height:length, head >1/3 height, muzzle depth:length ~2:1), HEAD, EYES, EARS, BODY (chest not below elbow), TAIL, LIMBS, GAIT, COAT (Short-haired Stockhaar & Long-haired varieties), COLOUR (mantle and splash-coated with required white markings), SIZE"
        },
        {
          id: "akc-st-bernard-official-standard",
          role: "verified",
          locator: "Scissors or even bite (scissors preferred), well-pronounced dewlap, bushy tail without flag, short-haired and long-haired coat varieties"
        },
        {
          id: "rkc-st-bernard-breed-standard",
          role: "verified",
          locator: "Confirming chest never below elbows, reasonably tight lids without excessive haw, and sound unhurried gait"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "All proportions, dual coat varieties, required white markings, head geometry, and anatomical details follow FCI Standard No. 61, AKC Standard, and RKC Standard."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-st-bernard-official-standard",
          role: "verified",
          locator: "SIZE: Height at the withers: For males minimum 70 cm, maximum 90 cm; For females minimum 65 cm, maximum 80 cm."
        },
        {
          id: "skg-st-bernhardshund-profile",
          role: "verified",
          locator: "Die Widerristhöhe beträgt bei Hündinnen 65 bis 80 cm und bei Rüden 70 bis 90 cm."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Preserved verbatim in published unit of centimetres (70 to 90 cm males, 65 to 80 cm females) from FCI Standard No. 61 and SKG. (AKC profile separately publishes 28–30 in males / 26–28 in females; RKC sets minimums of 75 cm / 70 cm)."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-st-bernard-breed-profile",
          role: "verified",
          locator: "Weight: 140-180 pounds (male), 120-140 pounds (female)."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "FCI Standard No. 61, SKG, and RKC do not publish a numerical weight range; stored verbatim in published unit of pounds (140 to 180 lb males, 120 to 140 lb females) from the AKC breed profile."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-st-bernard-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 8-10 years."
        },
        {
          id: "rkc-st-bernard-breed-profile",
          role: "verified",
          locator: "Breed characteristics: Lifespan: Under 10 years."
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified from AKC breed profile and consistent with Royal Kennel Club guidance (SKG separately cites approx. 8–12 years)."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-st-bernard-breed-profile",
          role: "verified",
          locator: "Breed characteristics: Sheds Yes; Grooming more than once a week."
        },
        {
          id: "skg-st-bernhardshund-profile",
          role: "verified",
          locator: "Daily brushing necessary during seasonal shedding (Fellwechsel) for both short- and long-haired varieties."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-st-bernard-breed-profile",
          role: "verified",
          locator: "High drooling level characteristic of heavy-flewed St. Bernards."
        },
        {
          id: "akc-st-bernard-official-standard",
          role: "verified",
          locator: "Well-developed flews and pronounced throat/neck dewlap."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "rkc-st-bernard-breed-standard",
          role: "verified",
          locator: "Temperament: Steady, kindly, intelligent, courageous, trustworthy and benevolent."
        },
        {
          id: "skg-st-bernhardshund-profile",
          role: "verified",
          locator: "Friendly, calm to lively, balanced, sensitive, gentle, occasionally stubborn ('Dickkopf'), trustworthy with strangers yet carries an alert protective instinct, strongly people- and dog-oriented."
        },
        {
          id: "akc-st-bernard-breed-profile",
          role: "verified",
          locator: "Playful, charming, inquisitive, watchful, patient, careful with children, barks mainly to alert."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-st-bernard-breed-profile",
          role: "cited",
          locator: "Good with children, affectionate with family, alert watchdog barking, moderate exercise level"
        },
        {
          id: "skg-st-bernhardshund-profile",
          role: "cited",
          locator: "Gentle, sensitive, occasionally stubborn, strong protective instinct, affectionate"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates reflecting documented gentle child-friendly devotion, low barking, modest energy, and occasional giant-breed stubbornness."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "skg-st-bernhardshund-profile",
          role: "cited",
          locator: "Daily brushing during coat changes, extra brushing for long-haired variety, spacious rural/garden living rather than stair-heavy apartments"
        },
        {
          id: "akc-st-bernard-breed-profile",
          role: "cited",
          locator: "Moderate exercise, carting/drafting activities, family togetherness, early training"
        }
      ],
      verifiedOn: null,
      note:
        "General giant mountain-dog care combining moderate cool-weather exercise and puppy joint protection with regular double-coat brushing and drool/fold hygiene."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-st-bernard-breed-profile",
          role: "verified",
          locator: "Exercise: Despite being a large and powerful breed, the St. Bernard only requires a moderate amount of exercise."
        },
        {
          id: "rkc-st-bernard-breed-profile",
          role: "verified",
          locator: "Breed characteristics: Exercise: Up to 1 hour per day."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "rkc-st-bernard-breed-profile",
          role: "cited",
          locator: "Up to 1 hour per day exercise baseline for mature adults"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial daily activity range (30 to 60 minutes) for mature adults; growing giant-breed puppies require strictly moderated low-impact activity."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "skg-st-bernhardshund-profile",
          role: "verified",
          locator: "Un appartement urbain étroit avec beaucoup d'escaliers n'est pas adapté (narrow city apartments with many stairs are unsuitable)."
        },
        {
          id: "rkc-st-bernard-breed-profile",
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
          id: "skg-st-bernhardshund-profile",
          role: "verified",
          locator: "Recommends a house in the countryside with sufficient space and a garden."
        },
        {
          id: "rkc-st-bernard-breed-profile",
          role: "verified",
          locator: "Size of home: Large house."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-st-bernard-official-standard",
          role: "verified",
          locator: "Swiss Alpine Great St. Bernard Pass heritage and dense double coat with abundant undercoat."
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Dense Alpine double coat provides exceptional cold insulation and requires strict heat protection in hot, humid climates."
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-st-bernard-breed-profile",
          role: "verified",
          locator: "A Saint wants to be with his family, and undesirable behaviors can result if he is regularly left alone for long periods of time."
        },
        {
          id: "skg-st-bernhardshund-profile",
          role: "verified",
          locator: "Affectionate dog needing abundant contact with people and other dogs."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-st-bernard-breed-profile",
          role: "cited",
          locator: "Large, deep-chested bloat risk awareness"
        }
      ],
      verifiedOn: null,
      note:
        "General giant-breed veterinary nutrition guidance emphasizing slow controlled puppy growth, lean adult weight, and bloat precautions."
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
          id: "sbca-breeder-referral-health-2024",
          role: "verified",
          locator: "Lists common hereditary defects (hip and elbow dysplasia, entropion, epilepsy, heart defects) and CHIC screening requirements (hips, elbows, eyes, cardiac, DM DNA test, optional thyroid)."
        },
        {
          id: "rkc-st-bernard-breed-profile",
          role: "verified",
          locator: "Good Practice tests (BVA/KC Elbow Dysplasia, Eye Scheme, Hip Dysplasia) and Breed Watch Category 3 conformation monitoring."
        },
        {
          id: "pmc-letko-2020-st-bernard-cntnap1-lppn3",
          role: "verified",
          locator: "Genes 2020 (PMC7761076, PMID 33261176): CNTNAP1 missense variant (c.2810G>A; p.Gly937Glu) associated with LPPN3 in Saint Bernards and Leonbergers."
        },
        {
          id: "pubmed-ekenstedt-2014-st-bernard-arhgef10-lpn1",
          role: "verified",
          locator: "PLOS Genetics 2014 (PMID 25275565): ARHGEF10 10-bp deletion (c.1955_1958+6del) associated with juvenile-onset inherited polyneuropathy (LPN1) in Leonbergers and Saint Bernards."
        },
        {
          id: "pubmed-bech-nielsen-1978-st-bernard-osteosarcoma",
          role: "verified",
          locator: "J Natl Cancer Inst 1978 (PMID 271748): Elevated familial frequency of osteosarcoma among first-degree relatives of St. Bernard dogs."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Synthesizes SBCA/CHIC and RKC screening protocols alongside peer-reviewed genetics and oncology publications without naming clubs or registries in user-facing text."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "sbca-breeder-referral-health-2024",
          role: "verified",
          locator: "Hip dysplasia, elbow dysplasia, entropion, epilepsy, heart defects, Degenerative Myelopathy (DM), autoimmune thyroiditis"
        },
        {
          id: "akc-st-bernard-breed-profile",
          role: "verified",
          locator: "Bloat (GDV), hip dysplasia, and eye disease"
        },
        {
          id: "pmc-letko-2020-st-bernard-cntnap1-lppn3",
          role: "verified",
          locator: "CNTNAP1-related laryngeal paralysis and polyneuropathy (LPPN3)"
        },
        {
          id: "pubmed-ekenstedt-2014-st-bernard-arhgef10-lpn1",
          role: "verified",
          locator: "ARHGEF10-related juvenile-onset inherited polyneuropathy (LPN1)"
        },
        {
          id: "pubmed-bech-nielsen-1978-st-bernard-osteosarcoma",
          role: "verified",
          locator: "Familial osteosarcoma predisposition in St. Bernards"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Stratifies molecularly characterized polyneuropathies (ARHGEF10, CNTNAP1), familial osteosarcoma, and CHIC-screened orthopaedic/ocular/cardiac/DM conditions from conformation-linked heat, drool-fold, and ear precautions."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "sbca-breeder-referral-health-2024",
          role: "cited",
          locator: "Pre-breeding hip, elbow, eye, cardiac, DM DNA, and thyroid clearances"
        },
        {
          id: "akc-st-bernard-breed-profile",
          role: "cited",
          locator: "Bloat warning-sign readiness"
        }
      ],
      verifiedOn: null,
      note: "General preventive veterinary care protocol tailored to St. Bernards."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "sbca-breeder-referral-health-2024",
          role: "verified",
          locator: "SBCA/CHIC basic requirements: Hip Dysplasia (min 24 mo, OFA/PennHIP), Elbow Dysplasia (min 24 mo, OFA), ACVO Eye Exam (min 22 mo), Boarded Cardiologist Cardiac Exam (min 24 mo), DM DNA test; optional Autoimmune Thyroiditis."
        },
        {
          id: "rkc-st-bernard-breed-profile",
          role: "verified",
          locator: "Good Practice tests: BVA/KC Elbow Dysplasia, Eye Scheme, and Hip Dysplasia."
        },
        {
          id: "pmc-letko-2020-st-bernard-cntnap1-lppn3",
          role: "verified",
          locator: "Supports DNA testing for CNTNAP1 (LPPN3) alongside ARHGEF10 (LPN1) in Saint Bernards."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Summarizes SBCA/OFA CHIC, Royal Kennel Club, and peer-reviewed polyneuropathy DNA screenings without naming clubs or registries in user-facing text."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-st-bernard-official-standard",
          role: "cited",
          locator: "Sound strong teeth meeting in a scissors or even bite (scissors preferable)."
        }
      ],
      verifiedOn: null,
      note: "Standard home and veterinary dental care guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-st-bernard-official-standard",
          role: "cited",
          locator: "Medium-sized, high- and broad-set triangular drop ears with rounded tips lying close to the cheeks."
        }
      ],
      verifiedOn: null,
      note: "Routine drop-ear inspection and drying guidance."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-st-bernard-official-standard",
          role: "cited",
          locator: "Well-pronounced throat/neck dewlap and deep upper lips."
        }
      ],
      verifiedOn: null,
      note: "General skin-fold hygiene, moisture drying, and giant-breed pressure-callus prevention guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "skg-st-bernhardshund-profile",
          role: "cited",
          locator: "Unsuited to stair-heavy apartments; thrives in spacious homes with gardens"
        },
        {
          id: "akc-st-bernard-breed-profile",
          role: "cited",
          locator: "Watchful, patient with children, moderate exercise, dislikes long isolation, heavy drool/shedding"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability evaluations balancing serene child-friendly affection against massive space needs, drool, shedding, heat sensitivity, and giant-breed costs."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-st-bernard-breed-profile",
          role: "verified",
          locator: "Brandy-cask myth created by Victorian artist Sir Edwin Landseer"
        },
        {
          id: "skg-st-bernhardshund-profile",
          role: "verified",
          locator: "Barry (>40 lives saved, died 1814, Natural History Museum Bern display); February 1884 SHSB Entry #1 Léon + 28 St. Bernards; June 2 1887 Swiss national dog recognition"
        },
        {
          id: "fci-st-bernard-official-standard",
          role: "verified",
          locator: "Two equally recognized varieties (Short-haired Stockhaar and Long-haired)"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified historical, museum, cultural, and coat-variety facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-st-bernard-official-standard",
          role: "verified",
          locator: "Origin (Switzerland), height (70-90 cm males / 65-80 cm females), two coat varieties"
        },
        {
          id: "akc-st-bernard-breed-profile",
          role: "verified",
          locator: "Weight (140-180 lb males / 120-140 lb females), lifespan (8-10 years), brandy-cask myth debunked, child friendliness, bloat/hip/eye awareness"
        },
        {
          id: "skg-st-bernhardshund-profile",
          role: "verified",
          locator: "Unsuitability for narrow stair-heavy apartments, daily shedding-season brushing"
        },
        {
          id: "sbca-breeder-referral-health-2024",
          role: "verified",
          locator: "Hip/elbow dysplasia, entropion, epilepsy, heart defects, DM"
        },
        {
          id: "pmc-letko-2020-st-bernard-cntnap1-lppn3",
          role: "verified",
          locator: "CNTNAP1 polyneuropathy"
        },
        {
          id: "pubmed-ekenstedt-2014-st-bernard-arhgef10-lpn1",
          role: "verified",
          locator: "ARHGEF10 polyneuropathy"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "FAQ answers synthesize FCI Standard No. 61, SKG, AKC, RKC, SBCA, and peer-reviewed genetics research without naming clubs or registries in user-facing prose."
    }
  },

  updatedOn: "2026-11-25"
};
