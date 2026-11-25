import type { Breed } from "../schema/breed.types";

export const newfoundland: Breed = {
  slug: "newfoundland",
  name: "Newfoundland",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Newf",
    "Newfie",
    "Chien de Terre-Neuve",
    "Neufundländer",
    "Terranova"
  ],

  group:
    "Pinscher and Schnauzer Type, Molossoid Breeds, and Swiss Mountain and Cattle Dogs; Section 2.2 — Mountain-type Molossoids (without working trial; also classified in the Working group)",

  origin: {
    country: "Canada",
    region: "Newfoundland"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Newfoundland_dog_001.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Newfoundland_dog_001.jpg",
      title: "Newfoundland dog 001.jpg",
      description:
        "An adult Newfoundland dog photographed outdoors, displaying its massive broad head, soft gentle expression, small close-lying triangular drop ears, and dense water-resistant coat.",
      creator: "illryion",
      uploader: "Ltshears",
      capturedOn: "2008-09-28",
      uploadedOn: "2008-11-02",
      width: 3292,
      height: 2466,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by illryion, Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:Newfoundland_dog_001.jpg. License: https://creativecommons.org/licenses/by/2.0/. Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-11-25"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Newfoundland_brown_2.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Newfoundland_brown_2.jpg",
      title: "Newfoundland brown 2.jpg",
      description:
        "An adult brown male Newfoundland standing outdoors in profile, showcasing its heavy-boned deep-bodied silhouette, feathered muscular limbs, and broad rudder-like tail.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2020-09-13",
      uploadedOn: "2020-09-15",
      width: 1615,
      height: 1351,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Newfoundland_brown_2.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-25"
    }
  ],

  overview: {
    summary:
      "A colossal, heavy-boned, and extraordinarily sweet-tempered working water dog from Newfoundland, Canada, celebrated for its oily water-resistant double coat, webbed feet, natural lifesaving swimming prowess, and patient devotion to children.",

    description:
      "The Newfoundland is a majestic, deeply built giant working dog that combines impressive bone, broad muscular power, and a calm, benevolent expression with effortless agility both on land and in icy seas. Slightly longer than tall with a level topline, wide well-sprung ribcage, and strong, heavily feathered limbs, it carries a massive broad head featuring a slightly arched crown, clean-cut square muzzle, small deep-set dark brown eyes, and small rounded triangular ears lying close against the cheeks. Every element of its anatomy reflects centuries of coastal labour: a flat, oily, water-resistant double coat that springs back into place when rubbed against the grain, large webbed cat-like feet that propel a powerful breaststroke rather than a frantic dog paddle, and a broad, strong tail functioning as an underwater rudder. Moving smoothly with a characteristic slight roll of the skin, the Newfoundland is prized above all for sweetness of temperament—dignified, serene, quiet, and famously gentle with children, yet capable of fearless, instinctual water rescues and heavy cart-pulling work.",

    history:
      "Developed on the rugged North Atlantic island of Newfoundland in eastern Canada, the breed evolved alongside coastal fishermen who needed a hardy, cold-water partner able to haul heavy fishing nets, retrieve dropped gear, pull timber carts ashore, and rescue sailors from frigid swells. While its exact remote ancestors remain debated—with historical accounts pointing to indigenous island dogs blended with giant working mastiffs and maritime dogs brought by early European and Viking visitors—the breed took shape in relative island isolation before gaining international acclaim in Europe during the nineteenth century. In Britain, the striking white-and-black variety became widely known as the 'Landseer' after Victorian painter Sir Edwin Landseer immortalized it in works such as 'A Distinguished Member of the Humane Society.' Newfoundlands even contributed to reviving the St. Bernard alpine rescue line after a distemper outbreak decimated hospice kennels. Recognized internationally in the mid-twentieth century, the Newfoundland remains an iconic water-rescue athlete, draught dog, and cherished gentle giant family companion worldwide.",

    originalPurpose:
      "Assisting coastal fishermen in Newfoundland by hauling nets, pulling heavy draught carts on land, and performing lifesaving rescues in frigid North Atlantic waters.",

    currentRoles: [
      "Gentle, devoted family companion",
      "Water-rescue and maritime-lifesaving working dog",
      "Draught-work and carting competitor",
      "Therapy dog and search-and-rescue partner"
    ]
  },

  physical: {
    sizeCategory: "Giant",

    height: {
      unit: "in",
      male: {
        min: 28,
        max: 28
      },
      female: {
        min: 26,
        max: 26
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 130,
        max: 150
      },
      female: {
        min: 100,
        max: 120
      }
    },

    lifespanYears: {
      min: 9,
      max: 10
    },

    coatType:
      "Flat, dense, oily, water-resistant double coat that naturally falls back into place when rubbed against the nap. The moderately long, coarse outer coat is straight or slightly wavy (never curly) over a soft, dense undercoat that thickens in winter and lightens in summer. Hair on the face, muzzle, and ears is short and fine, with full feathering down the backs of all legs and dense long hair covering the tail.",

    coatLength: "Medium",

    coatColors: [
      "Solid black (traditional colour; slight sunburn bronze tinge and small white markings on the chest, toes, and tip of the tail are permissible)",
      "Brown (ranging from chocolate to rich bronze, with matching brown nose pigment)",
      "White and black (historically known as Landseer: white base with a black head—preferably carrying a white blaze—black saddle, and black croup and upper tail, with minimal ticking)",
      "Solid grey (recognized in North America; lighter brown eyes permitted in brown and grey dogs)"
    ],

    sheddingLevel:
      "High; the heavy double coat sheds continuously throughout the year and blows its dense soft undercoat profusely during spring and autumn seasonal changes",

    droolingLevel:
      "High; soft flews and deep jowls produce copious drool and slobber—especially after drinking, eating, excitement, or warm weather—making a drool towel a daily household staple",

    distinctiveFeatures: [
      "Massive, heavy-boned, deep-bodied giant build slightly longer from shoulder point to buttock than tall at the withers, showing effortless power rather than sluggishness",
      "Average adult height at the withers of 28 inches for males and 26 inches for females",
      "Approximate adult weight of 130 to 150 pounds for males and 100 to 120 pounds for females",
      "Massive broad head (less heavy in females) with a slightly arched crown, prominent occipital bone, gradual stop, square deep wrinkle-free muzzle, soft flews, and a scissor or level bite",
      "Relatively small, wide-set, moderately deep-set dark brown eyes showing no haw (lighter brown permitted in brown and grey dogs) reflecting softness and benevolence",
      "Relatively small, rounded-tip triangular drop ears set level with or slightly above the brow, lying close to the head and reaching the inner eye corner when drawn forward",
      "Broad, deep chest with well-sprung ribs reaching at least to the elbow (elbow-to-ground equals roughly half the dog's height) and an almost level underline never tucked up",
      "Large, rounded, compact webbed cat feet built for powerful swimming propulsion",
      "Broad-rooted, strong tail reaching to or slightly below the hock that serves as a swimming rudder—hanging with a gentle curve at rest and extending out in motion without curling over the back",
      "Smooth, rhythmic, single-tracking gait accompanied by a characteristic slight roll of the skin"
    ]
  },

  temperament: {
    traits: [
      "Exceptionally sweet-dispositioned, gentle, serene, and benevolent—sweetness of temperament is the breed's single most prized hallmark",
      "Famously patient, watchful, and devoted around children, earning a long-standing reputation as a gentle family protector",
      "Calm, dignified, and easygoing indoors, yet joyful, playful, and creative when engaged",
      "Naturally welcoming and friendly toward polite visitors while staying instinctively watchful over its household without unprovoked aggression",
      "Deeply loyal, sensitive to human tone, and eager to please its family",
      "Possesses a powerful, hardwired swimming and water-retrieving instinct that makes puddles, lakes, and seas irresistible",
      "Generally quiet indoors, typically barking only when genuinely excited or alerting the household"
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
        "Moderate; an easygoing giant indoors that thrives on steady daily walks, draught work, and joint-friendly swimming—while growing puppies require strict exercise moderation to protect developing giant bones and ligaments",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Swimming, water retrieving, and structured water-rescue training (ideal low-impact giant-breed conditioning)",
        "Steady daily leashed walks during cool morning or evening hours",
        "Carting, wagon pulling, and organised draught-work trials for fully mature adults",
        "Calm obedience, rally, therapy visits, and outdoor yard time in cool weather"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Line-brush and comb thoroughly down to the skin several times a week—and daily during spring and autumn coat blows—using a long-pin slicker brush, undercoat rake, and wide-toothed metal comb, paying close attention behind the ears, chest, armpits, belly, and hindquarter feathering to prevent dense felted mats.",

      bathing:
        "Bathe every four to eight weeks (or after muddy swims) using a gentle canine shampoo; always comb out every tangle before bathing and dry completely down to the skin with a high-velocity dryer so trapped moisture does not trigger hot spots.",

      notes: [
        "Never shave the oily, water-resistant double coat short; clipping damages coat texture, removes sun and insect protection, and impairs temperature regulation. Limit neatening trims to excess hair around the webbed feet, hocks, and sanitary areas.",
        "Keep clean drool towels handy to wipe the soft flews, chin, and chest after drinking and meals.",
        "Inspect and thoroughly dry the close-lying triangular drop ears weekly—and after every swim—to prevent moisture-driven ear infections.",
        "Keep nails neatly trimmed and brush teeth several times weekly using canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Easy to moderate; intelligent, willing, and eager to please, making it responsive to gentle positive training—though early leash manners are vital because puppies grow rapidly toward 100 to 150 pounds",

      tips: [
        "Start loose-leash walking, polite greeting, and reliable recall immediately in puppyhood before giant adult strength makes pulling unsafe.",
        "Use warm, calm, reward-based training with praise and measured food treats; harsh scolding or heavy corrections crush confidence in this sensitive gentle giant.",
        "Teach calm self-control around lakes, pools, and streams so its powerful water-rescue instinct stays safe and responsive to handler cues.",
        "Introduce grooming tables, high-velocity dryers, paw handling, and vehicle ramps early while the puppy is easy to lift and guide."
      ],

      socialization:
        "Early, calm, positive exposure to varied people, friendly dogs, slick indoor floors, veterinary clinics, and grooming routines reinforces its famously serene, confident character."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cold, snowy, and cool maritime climates—evolved to withstand freezing North Atlantic winters and icy seawater",
        "Temperate four-season climates with air-conditioned indoor shelter during summer months",
        "Hot, humid climates pose a serious overheating risk; keep the dog indoors in cool air conditioning during midday heat, provide constant cold water, and walk only at dawn or dusk"
      ],

      aloneTimeTolerance:
        "Low to moderate; calm and napping indoors once exercised, yet deeply bonded to its family and unhappy if isolated outside in a yard or left alone for long workdays."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced giant-breed dog food, strictly using a controlled-calcium, moderate-calorie large/giant-breed puppy diet throughout skeletal growth.",

    feedingFrequency: {
      puppy:
        "Three to four measured meals daily during rapid first-year growth on a controlled giant-breed puppy formula designed to keep growth slow, steady, and lean.",
      adult:
        "Two measured meals daily to sustain condition and help reduce acute stomach distension.",
      senior:
        "Two portion-controlled meals daily tailored for slower giant-breed metabolism, cardiac support, and joint comfort."
    },

    guidelines:
      "Weigh or measure every meal accurately and feel beneath the dense double coat weekly to ensure the ribs remain easily palpable without excess fat. Because carrying even 10 to 15 extra pounds dramatically accelerates hip dysplasia, elbow arthritis, and cruciate ligament tears in a 100- to 150-pound dog, strict weight control is critical from puppyhood onward. Divide adult rations into two smaller meals, enforce calm rest before and after eating, and provide cool, fresh drinking water continuously.",

    considerations: [
      "Feed growing puppies a balanced giant-breed growth formula with controlled energy and calcium—never add unprescribed calcium supplements, which can worsen developmental bone and elbow disorders.",
      "Because this broad, deep-chested giant is vulnerable to life-threatening gastric dilatation-volvulus (GDV / bloat), feed two smaller daily meals, avoid vigorous exertion for at least an hour around mealtimes, and discuss prophylactic gastropexy with a veterinarian.",
      "Count all training treats inside the daily calorie budget.",
      "Transition gradually between diet formulas over five to seven days to prevent digestive upset."
    ],

    note:
      "Giant-breed puppy growth nutrition and adult joint/cardiac dietary plans should always be individualized with a veterinarian."
  },

  health: {
    overview:
      "The Newfoundland is a beloved giant working breed with a typical life expectancy of 9 to 10 years, carrying several well-documented hereditary cardiac, metabolic, and orthopaedic priorities that conscientious breeders actively screen for. Foremost among these are congenital Subvalvular Aortic Stenosis (SAS), autosomal-recessive Type I-A Cystinuria caused by a nonsense mutation (C663T) in the SLC3A1 gene—completely preventable via DNA testing—and high giant-breed susceptibility to hip dysplasia, elbow dysplasia, and heritable cranial cruciate ligament rupture (CCLR). Additional breed concerns include Dilated Cardiomyopathy (DCM), acute gastric dilatation-volvulus (bloat), eyelid conformation faults (entropion/ectropion), heatstroke susceptibility, and moist dermatitis beneath its thick double coat.",

    commonConditions: [
      "Subvalvular Aortic Stenosis (SAS) — an inherited congenital narrowing of the left ventricular outflow tract below the aortic valve that increases cardiac workload and risks arrhythmias, exercise intolerance, congestive heart failure, or sudden death in early adulthood; requires cardiologist auscultation and Doppler echocardiography (a 14-year French screening study of 921 Newfoundlands demonstrated that disciplined echocardiographic screening kept screened-cohort prevalence below 1%)",
      "Cystinuria Type I-A (SLC3A1-related) — an autosomal-recessive renal tubular amino-acid reabsorption defect caused by a nonsense mutation (C663T) in exon 2 of the SLC3A1 gene, leading to urinary cystine stones and potentially fatal urinary tract obstruction (particularly in males); fully preventable via pre-breeding DNA screening",
      "Hip dysplasia and elbow dysplasia — developmental joint laxity and malformation leading to painful osteoarthritis in giant heavy-boned breeds; monitored through mandatory pre-breeding radiographic evaluations",
      "Cranial Cruciate Ligament Rupture (CCLR) — partial or complete tearing of the stabilizing knee ligament causing hind-limb lameness and stifle osteoarthritis; peer-reviewed pedigree research in Newfoundlands confirmed a clear genetic basis alongside weight and mechanical load factors",
      "Gastric dilatation-volvulus (GDV / bloat) — sudden, life-threatening gas distension and twisting of the stomach requiring immediate emergency surgery, a major deep-chested giant-breed risk",
      "Dilated Cardiomyopathy (DCM) and eyelid conformation disorders (entropion / ectropion) — acquired heart-muscle weakening and inward- or outward-rolling eyelids warranting veterinary cardiac and ophthalmic monitoring",
      "Otitis externa (ear infections), acute moist dermatitis ('hot spots'), and heatstroke — conformation- and coat-linked risks associated with close-lying drop ears, heavy moisture-retaining fur after swimming, and dense double-coat insulation in warm weather"
    ],

    preventiveCare: [
      "Insist on documented public pre-breeding clearances for both parents: radiographic hip and elbow evaluations, board-certified veterinary cardiologist cardiac clearance (ideally including Doppler echocardiography), DNA clearance for SLC3A1 cystinuria, and veterinary ophthalmologist eye examination.",
      "Protect developing giant joints by avoiding forced running, high jumping, and repetitive stair climbing until growth plates close around 18 to 24 months, and provide non-slip flooring and vehicle ramps.",
      "Keep the dog strictly lean throughout life, feed two divided adult meals with calm post-meal rest, and learn emergency signs of bloat (unproductive retching, swollen tight abdomen), heatstroke, and urinary obstruction in males.",
      "Dry the close-lying drop ears and thick undercoat completely down to the skin after every swim to prevent ear infections and moist hot spots.",
      "Schedule annual veterinary wellness exams (including cardiac auscultation) and maintain core vaccinations and year-round parasite prevention."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "Congenital cardiac evaluation by a board-certified veterinary cardiologist (echocardiogram recommended for all breeding stock to screen for SAS)",
      "DNA test for Cystinuria Type I-A (SLC3A1 C663T nonsense mutation)",
      "Ophthalmic examination by a board-certified veterinary ophthalmologist"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste and schedule regular veterinary dental evaluations to keep the strong jaws and scissor or level bite healthy.",

    earCare:
      "Check and thoroughly dry the small, close-lying triangular drop ears weekly—and after every swimming session—to clear moisture, wax, or debris and prevent ear infections.",

    skinCare:
      "Dry the dense double coat completely to the skin after swimming or bathing and part the fur weekly during line-brushing to catch trapped mats, ticks, or moist dermatitis ('hot spots') early."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Families with spacious homes and fenced yards seeking a serene, famously patient, child-loving gentle giant",
      "Owners in cool or temperate climates who have safe access to lakes, beaches, or trails for swimming and steady walks",
      "People willing to embrace heavy seasonal shedding, copious drool, thorough weekly line-brushing, and giant-breed food and veterinary budgets",
      "Handlers interested in water-rescue training, draught carting, or therapy-dog work"
    ],

    notIdealFor: [
      "Small apartments, homes with steep unavoidable staircases, or households with compact vehicles unable to transport a 100- to 150-pound dog",
      "Fastidious housekeepers bothered by drool on walls and furniture or abundant drifting fur",
      "Hot, humid outdoor lifestyles lacking reliable air-conditioned indoor refuge",
      "Owners unable to commit to early leash training, slow-growth puppy joint care, and giant-breed healthcare expenses"
    ]
  },

  funFacts: [
    "Newfoundlands do not swim with a typical rapid dog paddle—thanks to large webbed feet, deep lung capacity, and a broad rudder-like tail, they swim using a powerful, rhythmic down-and-out breaststroke capable of towing adults or small boats to shore.",
    "The black-and-white Newfoundland variety became known as the 'Landseer' after famed nineteenth-century British artist Sir Edwin Landseer, who painted them repeatedly—most famously in his 1838 canvas 'A Distinguished Member of the Humane Society.'",
    "A Newfoundland named Seaman accompanied Meriwether Lewis and William Clark throughout their historic 1804–1806 Corps of Discovery expedition across North America, hunting game and guarding camp.",
    "In 1919, a heroic Newfoundland aboard the wrecked coastal steamer SS Ethie off the coast of Newfoundland swam through towering surf to carry a lifeline ashore, enabling the rescue of 92 passengers and crew.",
    "In the nineteenth century, Newfoundlands were even brought to the Great St. Bernard Hospice in the Swiss Alps to help rebuild the St. Bernard alpine rescue line after a devastating distemper outbreak."
  ],

  faq: [
    {
      question: "What is a Newfoundland dog?",
      answer:
        "The Newfoundland is a giant, heavy-boned working water dog originating on the Canadian island of Newfoundland, prized for its oily water-resistant double coat, webbed feet, natural lifesaving instincts, and famously sweet, serene family temperament."
    },
    {
      question: "How tall and heavy is a Newfoundland?",
      answer:
        "Adult males average 28 inches at the withers and typically weigh 130 to 150 pounds, while adult females average 26 inches and typically weigh 100 to 120 pounds."
    },
    {
      question: "How long does a Newfoundland live?",
      answer:
        "Like most giant breeds, the Newfoundland has an average life expectancy of 9 to 10 years, supported by lean weight management, joint protection, and preventive veterinary care."
    },
    {
      question: "Do Newfoundlands shed and drool a lot?",
      answer:
        "Yes—both shedding and drooling are high. Their thick double coat sheds year-round with heavy seasonal blows requiring thorough line-brushing several times a week, and their soft flews produce generous drool after drinking, eating, or warm activity."
    },
    {
      question: "Can a Newfoundland live in an apartment?",
      answer:
        "No. Although calm, quiet, and easygoing indoors, their massive 100- to 150-pound frame, giant-breed stair limitations, and love of cool outdoor space make a large house with a securely fenced yard far better suited."
    },
    {
      question: "Are Newfoundlands good with children and first-time owners?",
      answer:
        "They are renowned as one of the gentlest, most patient family dogs around children (with adult supervision so toddlers are not accidentally bumped). Committed first-time owners can succeed with one if they start positive leash training early and are ready for giant-breed grooming, drool, and healthcare costs."
    },
    {
      question: "How much exercise does a Newfoundland need?",
      answer:
        "Adults have moderate exercise needs—roughly 45 to 60 minutes daily of steady cool-weather walks, swimming, or draught work. Growing puppies must avoid forced running and jumping until 18 to 24 months of age to protect their developing hips, elbows, and knees."
    },
    {
      question: "What are the main health concerns for a Newfoundland?",
      answer:
        "Key breed-associated health priorities include Subvalvular Aortic Stenosis (SAS, a congenital heart defect screened by cardiologist echocardiography), autosomal-recessive SLC3A1 Cystinuria (urinary stones, preventable via DNA testing), hip and elbow dysplasia, cranial cruciate ligament rupture, bloat (GDV), Dilated Cardiomyopathy (DCM), and ear or skin infections after swimming."
    }
  ],

  references: [
    "fci-newfoundland-official-standard",
    "fci-newfoundland-nomenclature",
    "akc-newfoundland-official-standard",
    "akc-newfoundland-breed-profile",
    "ckc-newfoundland-profile",
    "rkc-newfoundland-breed-standard",
    "rkc-newfoundland-breed-profile",
    "nca-newfoundland-clearances",
    "pubmed-newfoundland-cystinuria-slc3a1-2006",
    "pubmed-reist-marti-2012-newfoundland-sas",
    "pmc-chetboul-2025-newfoundland-cardiac-screening",
    "pubmed-wilke-2006-newfoundland-cclr",
    "wikimedia-newfoundland-dog-001-illryion",
    "wikimedia-newfoundland-brown-2-canarian"
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
          id: "fci-newfoundland-nomenclature",
          role: "verified",
          locator: "Official multilingual names: NEWFOUNDLAND (EN), CHIEN DE TERRE-NEUVE (FR), NEUFUNDLÄNDER (DE), TERRANOVA (ES)"
        },
        {
          id: "ckc-newfoundland-profile",
          role: "verified",
          locator: "Uses common short name 'Newf' and French name 'Terre-Neuve'"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified across FCI Nomenclature No. 50 and CKC; Newfie is a widely used informal nickname."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-newfoundland-nomenclature",
          role: "verified",
          locator: "Group 2 Pinscher and Schnauzer - Molossoid and Swiss Mountain and Cattledogs; Section 2.2 Molossian type, Mountain type; Not subject to a working trial"
        },
        {
          id: "akc-newfoundland-official-standard",
          role: "verified",
          locator: "AKC Working Group official standard"
        },
        {
          id: "rkc-newfoundland-breed-standard",
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
          id: "fci-newfoundland-nomenclature",
          role: "verified",
          locator: "Country of origin of the breed: CANADA"
        },
        {
          id: "ckc-newfoundland-profile",
          role: "verified",
          locator: "Canadian island province of Newfoundland heritage"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Country (Canada) and island province (Newfoundland) verified from FCI Nomenclature No. 50 and CKC."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-newfoundland-official-standard",
          role: "verified",
          locator: "General Appearance (sweet-dispositioned, multipurpose land/water, draft work, natural lifesaving abilities), Coat, Gait (slight roll of skin)"
        },
        {
          id: "fci-newfoundland-official-standard",
          role: "verified",
          locator: "BEHAVIOUR AND TEMPERAMENT, HEAD, TAIL (rudder), COAT, COLOUR"
        },
        {
          id: "fci-newfoundland-nomenclature",
          role: "verified",
          locator: "Date of acceptance on a definitive basis by the FCI: 1954-08-04"
        },
        {
          id: "ckc-newfoundland-profile",
          role: "verified",
          locator: "Origin and history (fishermen's helper, water rescues, Landseer painting by Sir Edwin Landseer, St. Bernard hospice revival)"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Synthesized in original prose from AKC Official Standard, FCI Standard No. 50, FCI Nomenclature, and CKC profile."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-newfoundland-official-standard",
          role: "verified",
          locator: "Head, Eyes, Ears (reach inner eye corner), Teeth (scissor/level), Neck/Topline/Body, Tail, Forequarters (elbow-to-ground ~1/2 height, webbed cat feet), Hindquarters, Coat (falls back when rubbed against nap), Color (black, brown, gray, white and black), Gait"
        },
        {
          id: "fci-newfoundland-official-standard",
          role: "verified",
          locator: "Croup angle (~30°), soft flews, webbing between toes, tail as rudder, water-resistant double coat, FCI colour definitions (black, white and black, brown)"
        },
        {
          id: "rkc-newfoundland-breed-standard",
          role: "verified",
          locator: "Oily water-resistant outer coat, well-sprung ribs, level underline never tucked up"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "All anatomical proportions, webbed cat feet, rudder tail, oily flat double coat, and colour varieties follow AKC, FCI Standard No. 50, and RKC standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-newfoundland-official-standard",
          role: "verified",
          locator: "Average height for adult dogs is 28 inches, for adult bitches 26 inches."
        },
        {
          id: "fci-newfoundland-official-standard",
          role: "cited",
          locator: "Separately publishes average height in metric first: 71 cm (28 inches) for adult males, 66 cm (26 inches) for adult bitches."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Preserved verbatim in published unit of inches (28 in average male, 26 in average female) from the AKC Official Standard, consistent with CKC's 26–28 in range."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-newfoundland-official-standard",
          role: "verified",
          locator: "Approximate weight of adult dogs ranges from 130 to 150 pounds, adult bitches from 100 to 120 pounds."
        },
        {
          id: "fci-newfoundland-official-standard",
          role: "cited",
          locator: "Separately states average weights of approximately 68 kg for males and approximately 54 kg for bitches."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Preserved verbatim in published unit of pounds (130 to 150 lb males, 100 to 120 lb females) from the AKC Official Standard."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-newfoundland-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 9-10 years"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified from AKC breed profile."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-newfoundland-breed-profile",
          role: "verified",
          locator: "Heavy double-coat shedding throughout the year with seasonal blows"
        },
        {
          id: "rkc-newfoundland-breed-profile",
          role: "verified",
          locator: "Breed characteristics: Sheds Yes; daily grooming recommended"
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-newfoundland-official-standard",
          role: "verified",
          locator: "Flews: Soft; corners of the mouth evident."
        },
        {
          id: "akc-newfoundland-breed-profile",
          role: "verified",
          locator: "High drooling level characteristic of soft-flewed giant water dogs"
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-newfoundland-official-standard",
          role: "verified",
          locator: "BEHAVIOUR AND TEMPERAMENT: Expression reflects benevolence and softness. Dignified, joyful and creative, known for sterling gentleness and serenity."
        },
        {
          id: "akc-newfoundland-official-standard",
          role: "verified",
          locator: "General Appearance: Sweet-dispositioned dog, acts neither dull nor ill-tempered, devoted companion, natural lifesaving abilities."
        },
        {
          id: "ckc-newfoundland-profile",
          role: "verified",
          locator: "Friendly around strangers, barks mainly when excited, excellent with children."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "ckc-newfoundland-profile",
          role: "cited",
          locator: "Friendly, intelligent, loyal, gentle with children, barking mainly when excited"
        },
        {
          id: "akc-newfoundland-breed-profile",
          role: "cited",
          locator: "Sweet, patient, devoted family traits and moderate indoor energy"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates reflecting documented sterling gentleness, high child compatibility, low barking, and moderate daily energy."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "ckc-newfoundland-profile",
          role: "cited",
          locator: "Fast-growing breed needing early training, regular coat raking/brushing, water access"
        },
        {
          id: "rkc-newfoundland-breed-profile",
          role: "cited",
          locator: "Daily grooming guidance, large house requirement, up to 1 hour daily exercise"
        }
      ],
      verifiedOn: null,
      note:
        "General giant water-dog care combining joint-friendly moderate exercise with intensive double-coat line-brushing, drool management, and heat precautions."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-newfoundland-breed-profile",
          role: "verified",
          locator: "Breed characteristics: Exercise up to 1 hour per day."
        },
        {
          id: "ckc-newfoundland-profile",
          role: "verified",
          locator: "Activity Level: Excellent swimmer, draught work, up to 1-2 hours daily outdoor activity depending on age and conditioning."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "rkc-newfoundland-breed-profile",
          role: "cited",
          locator: "Up to 1 hour daily baseline for mature adults"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial daily activity range (45 to 60 minutes) for mature adults; growing giant-breed puppies require strictly moderated low-impact activity."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-newfoundland-breed-profile",
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
          id: "rkc-newfoundland-breed-profile",
          role: "verified",
          locator: "Size of home: Large house."
        },
        {
          id: "ckc-newfoundland-profile",
          role: "verified",
          locator: "Loves the outdoors and country living, especially near water."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "official_standard",
      sources: [
        {
          id: "rkc-newfoundland-breed-standard",
          role: "verified",
          locator: "Characteristics: Evolved to withstand the rigours of extreme climate and the sea's adversity."
        },
        {
          id: "fci-newfoundland-official-standard",
          role: "verified",
          locator: "Water-resistant double coat with soft, dense undercoat thicker in winter than summer."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-newfoundland-official-standard",
          role: "cited",
          locator: "Devoted companion deeply bonded to its family"
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
          id: "nca-newfoundland-clearances",
          role: "verified",
          locator: "CHIC screening panel: Hip Dysplasia (OFA/PennHIP), Elbow Dysplasia (OFA), Congenital Cardiac Clearance (cardiologist echocardiogram recommended), and Cystinuria DNA test."
        },
        {
          id: "pubmed-newfoundland-cystinuria-slc3a1-2006",
          role: "verified",
          locator: "J Vet Diagn Invest 2006;18(1):102-105 (PMID 16566266): Autosomal-recessive cystinuria-related C663T SLC3A1 nonsense mutation in Newfoundland dogs."
        },
        {
          id: "pubmed-reist-marti-2012-newfoundland-sas",
          role: "verified",
          locator: "Vet Rec 2012;170(23):597 (PMID 22645160): Genetic evidence of inherited subaortic stenosis (SAS) in Newfoundland dogs."
        },
        {
          id: "pmc-chetboul-2025-newfoundland-cardiac-screening",
          role: "verified",
          locator: "PMC11781725 (2025): 14-year French cardiovascular screening program of 921 adult Newfoundlands documenting 0.9% AS and 0.2% PS in screened dogs and emphasizing ongoing screening."
        },
        {
          id: "pubmed-wilke-2006-newfoundland-cclr",
          role: "verified",
          locator: "JAVMA 2006;228(1):61-64 (PMID 16426167): Genetic basis of naturally occurring cranial cruciate ligament rupture (CCLR) in Newfoundlands."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Synthesizes parent-club/kennel-club screening protocols and peer-reviewed genetics and cardiology research without naming clubs or registries in user-facing text."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pubmed-reist-marti-2012-newfoundland-sas",
          role: "verified",
          locator: "Inherited subvalvular aortic stenosis (SAS) in Newfoundlands"
        },
        {
          id: "pmc-chetboul-2025-newfoundland-cardiac-screening",
          role: "verified",
          locator: "14-year echocardiographic screening results in 921 adult Newfoundlands (0.9% AS, 0.2% PS)"
        },
        {
          id: "pubmed-newfoundland-cystinuria-slc3a1-2006",
          role: "verified",
          locator: "C663T SLC3A1 nonsense mutation causing Type I-A cystinuria in Newfoundlands"
        },
        {
          id: "pubmed-wilke-2006-newfoundland-cclr",
          role: "verified",
          locator: "Inherited cranial cruciate ligament rupture (CCLR) in Newfoundlands"
        },
        {
          id: "rkc-newfoundland-breed-profile",
          role: "verified",
          locator: "Significant breed health concerns: cystinuria, hip dysplasia, elbow dysplasia, and ocular checks (Breed Watch Category 2)"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Explicitly stratifies molecularly characterized SLC3A1 cystinuria, peer-reviewed inherited SAS and CCLR, and screened hip/elbow dysplasia from giant-breed bloat, DCM, and moisture-linked ear/skin precautions."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "nca-newfoundland-clearances",
          role: "cited",
          locator: "Pre-breeding hip, elbow, cardiologist cardiac, and cystinuria DNA screening"
        },
        {
          id: "rkc-newfoundland-breed-profile",
          role: "cited",
          locator: "Pre-breeding cystinuria DNA, hip, elbow, and eye testing"
        }
      ],
      verifiedOn: null,
      note: "General preventive veterinary care protocol tailored to Newfoundlands."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "nca-newfoundland-clearances",
          role: "verified",
          locator: "Required CHIC screenings: Hip Dysplasia (OFA or PennHIP), Elbow Dysplasia (OFA), Congenital Cardiac Clearance (cardiologist echocardiogram recommended), and Cystinuria DNA test."
        },
        {
          id: "rkc-newfoundland-breed-profile",
          role: "verified",
          locator: "Good Practice tests (Cystinuria DNA, BVA/KC Hips, BVA/KC Elbows) and Best Practice test (BVA/KC/ISDS Eye Scheme)."
        },
        {
          id: "pmc-chetboul-2025-newfoundland-cardiac-screening",
          role: "verified",
          locator: "Supports continued transthoracic echocardiographic screening for congenital aortic and pulmonic stenosis in breeding Newfoundlands."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Summarizes NCA/OFA CHIC and Royal Kennel Club health screening panels without naming registries or clubs in user-facing text."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-newfoundland-official-standard",
          role: "cited",
          locator: "Teeth meet in a scissors or level bite."
        }
      ],
      verifiedOn: null,
      note: "Standard home and veterinary dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-newfoundland-official-standard",
          role: "cited",
          locator: "Ears: Relatively small and triangular with rounded tips, lying close to the head."
        }
      ],
      verifiedOn: null,
      note: "Routine drop-ear drying and inspection protocol for swimming dogs."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "rkc-newfoundland-breed-standard",
          role: "cited",
          locator: "Double, flat, dense oily outer coat over soft dense undercoat."
        }
      ],
      verifiedOn: null,
      note: "General skin drying and hot-spot prevention guidance for heavy double-coated water dogs."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "rkc-newfoundland-breed-profile",
          role: "cited",
          locator: "Large house requirement, daily grooming, shedding, gentle loyal family companion"
        },
        {
          id: "ckc-newfoundland-profile",
          role: "cited",
          locator: "Excellent with children, loves outdoors and water, fast-growing giant needing early training"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability evaluations balancing serene, child-friendly gentle-giant temperament against massive space needs, drool, heavy shedding, heat sensitivity, and giant-breed expenses."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-newfoundland-official-standard",
          role: "verified",
          locator: "Webbed toes and broad tail acting as a swimming rudder"
        },
        {
          id: "ckc-newfoundland-profile",
          role: "verified",
          locator: "Sir Edwin Landseer painting 'A Distinguished Member of the Humane Society' and St. Bernard hospice revival"
        },
        {
          id: "akc-newfoundland-breed-profile",
          role: "verified",
          locator: "Historic water-rescue heritage including Seaman (Lewis and Clark) and SS Ethie rescue lore"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified anatomical, artistic, and historical breed facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-newfoundland-official-standard",
          role: "verified",
          locator: "Average height (28 in males / 26 in females), weight (130-150 lb males / 100-120 lb females), coat, sweet temperament"
        },
        {
          id: "akc-newfoundland-breed-profile",
          role: "verified",
          locator: "Lifespan (9-10 years), shedding, drooling, training"
        },
        {
          id: "rkc-newfoundland-breed-profile",
          role: "verified",
          locator: "Large house requirement, daily grooming, exercise guidance, hip/elbow/cystinuria/eye screening"
        },
        {
          id: "nca-newfoundland-clearances",
          role: "verified",
          locator: "SAS cardiac echocardiogram, SLC3A1 cystinuria DNA, hip and elbow screening"
        },
        {
          id: "pubmed-wilke-2006-newfoundland-cclr",
          role: "verified",
          locator: "Cranial cruciate ligament rupture predisposition"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "FAQ answers synthesize AKC Official Standard, FCI Standard No. 50, CKC, RKC, NCA, and peer-reviewed veterinary research without naming clubs or registries in user-facing prose."
    }
  },

  updatedOn: "2026-11-25"
};
