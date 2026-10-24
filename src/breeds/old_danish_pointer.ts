import type { Breed } from "../schema/breed.types";

export const old_danish_pointer: Breed = {
  slug: "old-danish-pointer",
  name: "Old Danish Pointer",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Old Danish Pointing Dog",
    "Gammel Dansk Hønsehund",
    "Old Danish Bird Dog",
    "Bakhound",
    "Bak Dog",
    "Chien d'arrêt danois ancestral",
    "Altdänischer Vorstehhund",
    "Antiguo Perro de Muestra Danés",
    "Gammel dansk hönsehund",
    "Vanhatanskankanakoira"
  ],

  group:
    "Pointing Dogs; Section 1.1 — Continental Pointing Dogs, 'Braque' Type (with working trial; also classified in the Gun Dog Group)",

  origin: {
    country: "Denmark",
    region: "Glenstrup (between Randers and Hobro) in Jutland, Denmark"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Wy%C5%BCe%C5%82_du%C5%84ski_123.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Wy%C5%BCe%C5%82_du%C5%84ski_123.jpg",
      title: "Wyżeł duński 123.jpg",
      description:
        "An Old Danish Pointer (Gammel Dansk Hønsehund) at the 2006 World Dog Show in Poznań.",
      creator: "Pleple2000",
      uploader: "Pleple2000",
      capturedOn: "2006-11-12",
      uploadedOn: "2006-11-22",
      width: 2118,
      height: 2082,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Pleple2000, Wikimedia Commons, CC BY-SA 3.0 (also dual-licensed under CC BY-SA 2.5 and GFDL 1.2+). Source: https://commons.wikimedia.org/wiki/File:Wy%C5%BCe%C5%82_du%C5%84ski_123.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-23"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Old_Danish_Pointer.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Old_Danish_Pointer.jpg",
      title: "Old Danish Pointer.jpg",
      description: "An Old Danish Pointer (Gammel Dansk Hønsehund) outdoors.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2008-10-31",
      uploadedOn: "2013-10-23",
      width: 496,
      height: 319,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Old_Danish_Pointer.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-23"
    }
  ],

  overview: {
    summary:
      "Scandinavia's only native pointing breed—a sturdy, rectangular Danish gundog with a short white-and-brown coat, pronounced sexual dimorphism, an unhurried close-working hunting style, and a calm, devoted nature at home.",

    description:
      "The Old Danish Pointer (Gammel Dansk Hønsehund, officially the Old Danish Pointing Dog) is a medium-sized, powerfully built continental pointing dog and the only native pointing breed of the Nordic countries. Built on a rectangular 8:9 ratio of withers height to body length, one of its most characteristic hallmarks is the marked difference between the sexes: the male (54–60 cm, above 56 cm preferred; 30–35 kg) is powerful and substantial, whereas the female (50–56 cm, above 52 cm preferred; 26–31 kg) is lighter, livelier, and more spirited without ever appearing finely boned. Its short, wide head features a rounded skull with a prominent occiput and no pronounced stop, a fleshy liver-coloured nose, deep overhanging flews, low-set broad ears with rounded tips, and a muscular neck with a characteristic throat dewlap. Covered in a short, dense, somewhat hard white coat marked with large brown patches or small brown speckles (with darker brown preferred), it works at a deliberate, unhurried pace that keeps constant contact with the hunter without disturbing the ground, making it equally suited to small and large hunting estates as well as wounded-game tracking. Indoors, it is peaceful, patient with children, sociable with strangers and other dogs, and deeply attached to its family.",

    history:
      "The breed traces its documented origins to around 1710 in Glenstrup, a village between Randers and Hobro in Jutland, Denmark. Over eight generations, a man named Morten Bak crossed dogs kept by travelling Romani people ('gypsy dogs') with local farm dogs to establish a pure breeding stock of piebald white-and-brown pointing dogs known as Bakhounds (Bakhunde) or Old Danish Pointing Dogs. Although local farmers called their farm dogs 'bloodhounds', historical and cynological records indicate they were likely descendants of estate scent hounds carrying strong Saint-Hubert Hound (Bloodhound) ancestry, while the Romani dogs—used for hunting as well as draught and pack work—likely carried Spanish Pointer and scent-hound blood. Thanks to its exceptional nose and close-working bond with the hunter, the breed became Denmark's most popular hunting dog during the nineteenth century. After nearly vanishing around the mid-twentieth century, the breed was revived by dedicated Danish enthusiasts, received definitive international recognition on 2 April 1969 (with the current valid standard dated 8 January 1998 and published 12 October 1998), and gained North American gun-dog recognition on 1 January 2006. Today its population is concentrated primarily in Denmark, with smaller numbers in Sweden and Germany.",

    originalPurpose:
      "Versatile bird-hunting gundog bred to search methodically, maintain close contact with the hunter, and point game birds staunchly on both small and large hunting grounds, as well as to track wounded game.",

    currentRoles: [
      "Versatile pointing and retrieving bird dog for small and large hunting grounds",
      "Blood-tracking (schweiss) and wounded-game recovery dog",
      "Field-trial and hunting-aptitude test competitor",
      "Active family companion for outdoor-oriented households"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: { min: 54, max: 60 },
      female: { min: 50, max: 56 }
    },

    weight: {
      unit: "kg",
      male: { min: 30, max: 35 },
      female: { min: 26, max: 31 }
    },

    lifespanYears: null,

    coatType:
      "Short, dense, close-lying single coat that feels somewhat hard to the touch and covers the entire body over rather tight-fitting body skin and looser head and neck skin.",

    coatLength: "Short",

    coatColors: [
      "White with brown markings, carried either as a few large brown patches or as many small brown specks (freckles / brown roan) on a white ground",
      "Brown markings may vary in shade from lighter brown to dark brown, with brown to dark brown preferred"
    ],

    sheddingLevel:
      "Moderate; daily wiping with a rubber brush or damp chamois is recommended because shed white hairs show conspicuously on dark furniture and carpets.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Rectangular, strongly built medium-sized frame with an 8:9 ratio of withers height to body length and chest depth equal to half the height at the withers",
      "Pronounced sexual dimorphism: the male is powerful, heavy, and substantial, while the female is lighter, livelier, and more spirited (though both sexes must retain strong bone)",
      "Short, wide head without a pronounced stop, crowned by a wide, distinctly rounded skull and a prominent occiput clearly visible from every angle",
      "Wide nasal bridge, fleshy liver-coloured nose with wide-open nostrils, and deep overhanging flews from the nose to the corners of the mouth that give the head its characteristic depth",
      "Muscular, well-furnished neck with a characteristic throat dewlap ('throatiness' is a hallmark of the breed, though never exaggerated) and lip-corner fold",
      "Medium-sized dark brown (or amber-brown) eyes that are neither sunken nor prominent, and low-set, broad, slightly rounded hanging ears whose front edges lie close to the cheeks and leave just over the outer third of the muzzle free when drawn forward",
      "Powerful jaws with a complete scissor bite of 42 teeth (20 upper and 22 lower; pincer bite is a severe fault, and overshot, undershot, wry bite, or missing more than two PM1 plus one other tooth is a disqualification)",
      "Deep, wide chest reaching the elbows with a well-developed forechest, firm muscular back sloping slightly from well-defined withers to a broad croup, and a medium-length tapering tail carried naturally drooping almost to the hocks (tail docking is forbidden)",
      "Adult height of 54 to 60 cm (above 56 cm preferred; 21–23.5 in) and weight of 30 to 35 kg (66–77 lbs) for males, and 50 to 56 cm (above 52 cm preferred; 19.5–22 in) and 26 to 31 kg (57–68 lbs) for females, with size deviations of more than 2 cm (or 1 inch) outside the standard limits disqualified"
    ]
  },

  temperament: {
    traits: [
      "Quiet, calm, and emotionally stable indoors",
      "Determined, solid, and courageous in the field",
      "Methodical, unhurried searcher that stays in constant contact with the hunter and rarely strays",
      "Exceptionally keen nose suited to both bird finding and tracking wounded game",
      "Attentive, eager to learn, and happy to cooperate with its handler",
      "Deeply loyal and closely bonded to the entire family",
      "Patient and tolerant toward children and sociable with strangers and other dogs",
      "Spirited and lively (especially in females), yet never aggressive or overly shy"
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: null,
      independence: 3,
      trainability: 4,
      barking: null,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High. A working gundog that needs substantial daily physical activity, opportunities to run freely in safe areas, retrieving tasks, and scent-tracking outlets alongside close human contact.",

      minutesPerDay: null,

      activities: [
        "Bird hunting, pointing, and field-trial work across small or large terrains",
        "Blood-tracking (schweiss), scent games, and wounded-game trailing exercises",
        "Dummy and game retrieving on land and in varied cover",
        "Long, brisk daily country walks, hikes, and supervised free running in secure areas",
        "Varied, reward-based obedience and handler-cooperation drills in changing environments"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Wipe or brush daily with a rubber grooming brush or a damp chamois cloth to remove dust and loose hairs; daily upkeep prevents shed white hairs from accumulating visibly on furniture and carpets.",

      bathing:
        "Bathe only as needed using a mild dog-safe shampoo, drying the coat, hanging ears, and throat folds thoroughly afterward.",

      notes: [
        "Although the short, dense, hard-feeling coat offers limited weather insulation on its own, the dog is sturdy and not overly sensitive to cold when active.",
        "Inspect the low-set hanging ears regularly—especially after wet or brushy field work—and keep them clean and dry.",
        "Check the deep flews, lip folds, throat dewlap, and tough paw pads after hunting outings for seeds, burrs, or ticks.",
        "Keep nails trimmed and brush the teeth regularly with dog-specific toothpaste."
      ]
    },

    training: {
      difficulty:
        "Easy to moderate. Attentive, eager to please, and naturally inclined to stay in contact with its handler, learning fastest and most durably through thoughtful, kind, and motivating consistency.",

      tips: [
        "Use thoughtful, friendly, reward-based consistency, delivering rewards promptly and varying the types of rewards used.",
        "Change training locations and environments frequently so the dog stays engaged and generalizes cues reliably.",
        "Capitalize on the breed's natural handler proximity and eagerness to cooperate rather than using harsh or repetitive pressure.",
        "Incorporate nose work, laid scent trails, and retrieving exercises into daily routines to satisfy its strong hunting instincts.",
        "Condition puppies early to calm show and veterinary handling, including mouth and tooth inspection."
      ],

      socialization:
        "Naturally peaceful, patient with children, and sociable toward strangers and other dogs, the Old Danish Pointer benefits from early, positive exposure to varied people, dogs, sights, and sounds, and thrives when included closely in family life."
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [],

      aloneTimeTolerance:
        "Low to moderate. Nordic breed guidance emphasizes that close human contact is essential to the Old Danish Pointer's wellbeing, making it poorly suited to long periods of isolation or kennel-only living."
    }
  },

  nutrition: {
    dietType:
      "Complete and balanced, high-quality diet appropriate to the dog's life stage, body condition, and hunting or exercise workload.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null
    },

    guidelines:
      "Feed a nutritionally complete diet suited to age and activity level, adjusting portions according to body condition score, weight trends (30–35 kg in mature males and 26–31 kg in mature females), and seasonal hunting demands. Increase energy intake during active field-work periods and moderate portions during quieter periods to prevent excess weight. Keep clean, fresh water available at all times.",

    considerations: [
      "Adjust caloric intake between active autumn/winter hunting seasons and lighter off-season routines.",
      "Maintain a muscular, well-conditioned frame without excess weight that could burden the hips.",
      "Factor training rewards—used frequently for prompt reinforcement—into the total daily energy allowance.",
      "Allow rest before and after meals rather than feeding immediately before or after strenuous field work."
    ],

    note:
      "No universal breed-specific meal schedule is mandated across life stages; individualize daily meal counts and portion sizes with a veterinarian."
  },

  health: {
    overview:
      "The Old Danish Pointer is a sturdy, functional gundog whose small population—descended from a mid-twentieth-century genetic bottleneck and concentrated mainly in Denmark, Sweden, and Germany—is actively managed through mandatory Danish pre-breeding health regulations. Danish breeding rules and peer-reviewed veterinary genetics research document three primary hereditary focuses: hip dysplasia (HD), late-onset autosomal recessive progressive retinal atrophy (rcd4/PRA, caused by a C17H2orf71 frameshift insertion), and autosomal recessive congenital myasthenic syndrome ('muskeltræthed' / hereditary muscle fatigue, caused by a CHAT exon 6 missense mutation). In Denmark, puppies can only be registered in the national studbook if both parents have an official pre-mating hip status of HD A or B (or HD C only when paired with an HD A partner) and an official rcd4/PRA DNA test status, while Danish breeding approval also verifies DNA clearance for congenital myasthenic syndrome, a minimum 'Good' conformation rating at 15 months or older, and a hunting evaluation. In addition, conformation rules disqualify cleft palate/hare lip, entropion, ectropion, distichiasis, ribcage/sternum malformation, cryptorchidism, and jaw/dental malocclusions.",

    commonConditions: [
      "Hip dysplasia (HD) — a developmental malformation of the coxofemoral joint; Danish studbook rules require both parents to hold official pre-mating hip scores of HD A or B (or HD C mated exclusively to HD A).",
      "Progressive retinal atrophy (rcd4-PRA) — a late-onset autosomal recessive retinal degeneration diagnosed in the breed since the late 1990s; a 2018 Danish whole-genome sequencing study (Karlskov-Mortensen et al., 2018) identified a single-base insertion (c.3149_3150insC) in exon 1 of the C17H2orf71 (C2orf71 / PCARE) gene, and pre-mating rcd4/PRA DNA testing is now mandatory for studbook registration in Denmark.",
      "Congenital myasthenic syndrome (CMS / 'muskeltræthed') — an autosomal recessive presynaptic neuromuscular junction disorder characterized clinically by severe exercise-induced muscle weakness in young dogs that does not respond to anticholinesterase drugs and lacks acetylcholine-receptor antibodies (Flagstad et al., 1989); a 2007 Danish study (Proschowsky et al., 2007) identified a G-to-A missense mutation (valine-to-methionine substitution) in exon 6 of the choline acetyltransferase (CHAT) gene, enabling targeted DNA testing that has largely eliminated affected litters in registered Danish stock.",
      "Conformation-monitored ocular, oral, and skeletal defects — entropion, ectropion, distichiasis (double row of eyelashes), cleft palate or hare lip, overshot/undershot/wry bite, and sternum/ribcage malformations are explicitly listed as disqualifying faults to protect breed health."
    ],

    preventiveCare: [
      "Verify before acquiring a puppy that both parents meet mandatory Danish pre-breeding requirements: official hip scores of HD A or B (or HD C paired with HD A), documented rcd4/PRA (C17H2orf71) DNA status, and clearance for congenital myasthenic syndrome (CHAT).",
      "Inspect and dry the low-set hanging ears, deep flews, and throat dewlap after wet or brushy field work to prevent moisture buildup and skin or ear irritation.",
      "Check the coat, interdigital spaces, and tough paw pads after hunting outings for thorns, grass awns, cuts, or ticks.",
      "Maintain a lean, muscular body weight (30–35 kg for males; 26–31 kg for females) and keep routine vaccinations, parasite control, and dental care up to date.",
      "Monitor adult dogs for any dim-light visual impairment (a sign of late-onset PRA) and young puppies for abnormal exercise-induced limb weakness."
    ],

    recommendedScreenings: [
      "Hip dysplasia (HD) official radiographic evaluation prior to breeding (mandatory for Danish studbook registration: parents must be graded HD A or B, or HD C only if mated to an HD A partner; minimum age 15 months for Danish breeding approval).",
      "Progressive Retinal Atrophy (rcd4/PRA — C17H2orf71 c.3149_3150insC mutation) DNA test prior to breeding (mandatory for Danish studbook registration unless documented hereditary clear via DNA-tested parents).",
      "Congenital Myasthenic Syndrome (CMS / 'muskeltræthed' — CHAT exon 6 G>A missense mutation) DNA test or verified hereditary-clear pedigree status prior to breeding (required under Danish breeding approval rules).",
      "Pre-breeding conformation, dentition (full 42-tooth scissor bite), eyelid (absence of entropion, ectropion, or distichiasis), and testicular examination (minimum 'Good' show rating at ≥15 months of age plus field/hunting evaluation for Danish breeding approval)."
    ],

    dentalCare:
      "Brush the teeth regularly with dog-specific toothpaste and schedule routine veterinary oral checks. Conformation rules emphasize powerful jaws with a complete, regular scissor bite of 42 teeth (20 in the upper jaw and 22 in the lower jaw); a pincer (level) bite is a severe fault, and an overshot, undershot, or wry bite—or missing more than two PM1 premolars plus one other tooth—is a disqualifying fault.",

    earCare:
      "Inspect the broad, low-set hanging ears regularly and dry them thoroughly after swimming or wet field work. Seek veterinary advice before applying ear cleaners or medications if redness, discharge, or odour develops.",

    skinCare:
      "Brush or wipe the short, dense coat daily with a rubber brush or damp chamois, and inspect the looser skin of the deep flews, lip-corner folds, and throat dewlap after field activity to keep them clean, dry, and free of debris."
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Upland bird hunters and handlers seeking a calm, close-working pointing dog and wounded-game tracker",
      "Active families and outdoor enthusiasts who spend abundant time in nature and want a peaceful, child-patient household companion",
      "Owners who enjoy scent work, blood tracking, retrieving, and reward-based training",
      "Households able to provide close daily human companionship rather than leaving a dog isolated"
    ],

    notIdealFor: [
      "Sedentary owners unwilling to provide substantial daily outdoor exercise, free running, and nose-work outlets",
      "Households where a dog would be left alone for long hours without human contact",
      "Handlers seeking a wide-ranging, high-speed field-trial sprinter rather than a methodical, close-working pointer",
      "Fastidious indoor housekeepers unwilling to wipe the coat daily to manage visible white hairs on dark furnishings"
    ]
  },

  funFacts: [
    "The Old Danish Pointer (Gammel Dansk Hønsehund) is the only native pointing dog breed originating in Scandinavia.",
    "Around 1710 in Glenstrup—between Randers and Hobro in Jutland—Morten Bak created the breed by crossing the sturdy hunting and pack dogs of travelling Romani people with local Saint-Hubert-type farm hounds over eight generations, earning the dogs the original name 'Bakhounds' (Bakhunde).",
    "One of the breed's most celebrated features is its dramatic sexual dimorphism: the male is heavy, powerful, and substantial (30–35 kg), whereas the female is distinctly lighter (26–31 kg), livelier, and described as more spirited and 'capricious'.",
    "Unlike high-speed pointers that range far ahead, the Old Danish Pointer works at a deliberate, measured pace and naturally maintains close contact with the hunter without disturbing the ground, making it equally effective on small holdings and large estates.",
    "In 2007 and 2018, Danish geneticists solved two major inherited diseases in the breed—identifying a CHAT gene mutation for congenital myasthenic syndrome ('muskeltræthed') and a C17H2orf71 mutation for late-onset progressive retinal atrophy (rcd4/PRA)—allowing DNA testing to protect the breed's small gene pool."
  ],

  faq: [
    {
      question: "Where does the Old Danish Pointer come from, and why was it called the Bakhound?",
      answer:
        "The breed originated around 1710 in Glenstrup, between the towns of Randers and Hobro in Jutland, Denmark. There, Morten Bak crossed dogs kept by travelling Romani people (believed to carry Spanish Pointer and scent-hound blood) with local farm hounds (descended from Saint-Hubert Hounds / Bloodhounds) over eight generations, producing a white-and-brown pointing dog originally known as the Bakhound (Bakhund)."
    },
    {
      question: "How big is an adult Old Danish Pointer, and how do males and females differ?",
      answer:
        "The breed shows pronounced sexual dimorphism. Males stand 54 to 60 cm at the withers (above 56 cm preferred; 21–23.5 inches) and weigh 30 to 35 kg (66–77 pounds), presenting a powerful, substantial build. Females stand 50 to 56 cm (above 52 cm preferred; 19.5–22 inches) and weigh 26 to 31 kg (57–68 pounds), with a lighter, livelier, and more spirited expression while still remaining strongly boned."
    },
    {
      question: "What does the Old Danish Pointer's hunting style look like?",
      answer:
        "Unlike wide-ranging, high-speed pointers, the Old Danish Pointer searches methodically at an average, measured pace while keeping constant contact with the hunter and avoiding unnecessary disturbance of the ground. Combined with its exceptional nose, this makes it suited to both small and large hunting grounds, as well as to tracking wounded game."
    },
    {
      question: "How should the short white-and-brown coat be cared for?",
      answer:
        "Grooming is very simple: wipe or brush the short, dense, hard-feeling coat daily with a rubber grooming brush or a damp chamois cloth to lift dust and loose hairs. Daily wiping is recommended because shed white hairs are otherwise very noticeable on carpets and furniture."
    },
    {
      question: "Is the Old Danish Pointer a good family dog?",
      answer:
        "Yes, for an active, outdoor-oriented household. Indoors, the breed is calm, quiet, and deeply devoted to its family, patient with children, and friendly toward strangers and other dogs. However, it requires abundant daily outdoor exercise, scent and retrieving outlets, and close human companionship."
    },
    {
      question: "What hereditary health conditions and pre-breeding tests are established for the breed?",
      answer:
        "Three specific hereditary conditions are actively managed in Denmark through mandatory pre-breeding screening: hip dysplasia (HD), late-onset progressive retinal atrophy (rcd4/PRA, caused by a C17H2orf71 gene insertion identified in 2018), and congenital myasthenic syndrome ('muskeltræthed', an autosomal recessive neuromuscular disorder caused by a CHAT gene mutation identified in 2007). For puppies to be registered in the Danish studbook, both parents must have official pre-mating hip scores of HD A or B (or HD C paired with an HD A partner) and official rcd4/PRA DNA test status, alongside verification of CHAT clearance."
    }
  ],

  references: [
    "fci-old-danish-pointing-dog-standard",
    "fci-old-danish-pointing-dog-nomenclature",
    "fci-old-danish-pointing-dog-judges-compendium",
    "danish-kennel-club-old-danish-pointing-dog",
    "old-danish-pointing-dog-danish-breed-club",
    "danish-breed-club-breeding-approval",
    "nordic-kennel-union-old-danish-pointing-dog",
    "united-kennel-club-old-danish-pointing-dog",
    "old-danish-pointing-dog-pra-c17h2orf71-study",
    "old-danish-pointing-dog-cms-chat-study",
    "old-danish-pointing-dog-cms-clinical-study",
    "danish-dog-breeds-genetic-profile-study",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
    "wikimedia-old-danish-pointer-pleple2000",
    "wikimedia-old-danish-pointer-canarian"
  ],

  evidence: {
    scientificName: {
      reliability: "unverified",
      sources: [],
      verifiedOn: null,
      note:
        "Canis lupus familiaris is the domestic-dog taxonomic name used across the catalog; the breed standard does not state a separate breed-level scientific name."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "Title and Brief Historical Summary: Gammel Dansk Hønsehund, Old Danish Pointing Dog, Bakhounds"
        },
        {
          id: "fci-old-danish-pointing-dog-nomenclature",
          role: "verified",
          locator: "FCI Nomenclature No. 281: Gammel Dansk Hønsehund, Old Danish Pointing Dog, Chien d'arrêt danois ancestral, Altdänischer Vorstehhund, Antiguo Perro de Muestra Danés"
        },
        {
          id: "old-danish-pointing-dog-danish-breed-club",
          role: "verified",
          locator: "Old Danish Pointer, Bak dogs"
        },
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "verified",
          locator: "Also known as: Gammel Dansk Hønsehund, Gammel dansk hönsehund, Vanhatanskankanakoira"
        }
      ],
      verifiedOn: "2026-10-23",
      note:
        "Upgraded from reliable_source to official_standard and added verified FCI, NKU, and Danish breed-club names."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "FCI Classification: Group 7 Pointing Dogs, Section 1.1 Continental Pointing Dogs, 'Braque' type, With working trial"
        },
        {
          id: "fci-old-danish-pointing-dog-nomenclature",
          role: "verified",
          locator: "Group n°7 - Pointing Dogs, Section Continental Pointing Dogs, Subsection «Braque»Type, Subject to a working trial"
        },
        {
          id: "united-kennel-club-old-danish-pointing-dog",
          role: "cited",
          locator: "Gun Dog Group"
        }
      ],
      verifiedOn: "2026-10-23",
      note:
        "Removed 'FCI Group 7 —' from user-facing text to comply with Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "Origin: Denmark; Brief Historical Summary: Glenstrup near the towns of Randers and Hobro"
        },
        {
          id: "old-danish-pointing-dog-danish-breed-club",
          role: "verified",
          locator: "History: Glenstrup, between Randers and Hobro in Jutland"
        }
      ],
      verifiedOn: "2026-10-23",
      note: null
    },

    "overview.summary": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "Utilization, General Appearance, Behaviour/Character, Coat"
        },
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "verified",
          locator: "Lead & About the breed: 'The Old Danish Pointing Dog (Gammel Dansk Hønsehund) is the only Scandinavian pointer.'"
        },
        {
          id: "danish-kennel-club-old-danish-pointing-dog",
          role: "verified",
          locator: "Oprindelse: 'Nordens eneste stående jagthunderace'"
        }
      ],
      verifiedOn: "2026-10-23",
      note: "Upgraded from reliable_source to official_standard."
    },

    "overview.description": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "General Appearance, Important Proportions (8:9), Behaviour/Character, Head, Neck, Body, Coat, Size and Weight"
        },
        {
          id: "fci-old-danish-pointing-dog-judges-compendium",
          role: "verified",
          locator: "Pages 6–19: sexual dimorphism, head/ear/dewlap hallmarks, coat, and size"
        },
        {
          id: "danish-kennel-club-old-danish-pointing-dog",
          role: "verified",
          locator: "Mentalitet, Behov, Aktivitetsniveau og handleradius"
        },
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "verified",
          locator: "Appearance, Personality and activity level, Activity level and handler proximity"
        },
        {
          id: "old-danish-pointing-dog-danish-breed-club",
          role: "verified",
          locator: "The breed & Temperament"
        }
      ],
      verifiedOn: "2026-10-23",
      note:
        "Upgraded from reliable_source to official_standard, and removed 'breed-club and Nordic kennel-club descriptions portray it as...' from user-facing text to comply with Rule 5."
    },

    "overview.history": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "Brief Historical Summary (~1710 Morten Bak in Glenstrup near Randers and Hobro, 8 generations of gypsy dogs x local farmdogs / St. Hubert Hounds / Spanish pointing dogs)"
        },
        {
          id: "fci-old-danish-pointing-dog-nomenclature",
          role: "verified",
          locator: "Definitive acceptance 1969-04-02; valid standard 1998-01-08 (published 1998-10-12)"
        },
        {
          id: "danish-kennel-club-old-danish-pointing-dog",
          role: "verified",
          locator: "Oprindelse (Romani dogs used as hunting, draught, and pack animals; Denmark's most used hunting dog in the 19th century)"
        },
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "verified",
          locator: "History"
        },
        {
          id: "united-kennel-club-old-danish-pointing-dog",
          role: "verified",
          locator: "History: recognized January 1, 2006"
        },
        {
          id: "old-danish-pointing-dog-pra-c17h2orf71-study",
          role: "cited",
          locator: "Abstract: 'Seventy years ago the breed almost vanished, but today a population still exists, primarily in Denmark but with some dogs in Germany and Sweden.'"
        }
      ],
      verifiedOn: "2026-10-23",
      note:
        "Removed 'The FCI history notes that...' from user-facing text to comply with Rule 5, and added verified recognition dates and historical context from FCI, DKK, NKU, UKC, and Karlskov-Mortensen et al. (2018)."
    },

    "overview.originalPurpose": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "Utilization ('Versatile gundog for birds') & Behaviour/Character"
        },
        {
          id: "old-danish-pointing-dog-danish-breed-club",
          role: "verified",
          locator: "The breed: 'passionate bird finder with an alert and strong point... also highly qualified to track wounded game.'"
        }
      ],
      verifiedOn: "2026-10-23",
      note: null
    },

    "overview.currentRoles": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "Utilization & Classification (With working trial)"
        },
        {
          id: "old-danish-pointing-dog-danish-breed-club",
          role: "verified",
          locator: "The breed (bird hunting, wounded-game tracking, family dog)"
        },
        {
          id: "danish-kennel-club-old-danish-pointing-dog",
          role: "verified",
          locator: "Mentalitet & Behov"
        }
      ],
      verifiedOn: "2026-10-23",
      note: "Upgraded from reliable_source to official_standard."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "General Appearance, Important Proportions (8:9), Head, Eyes, Ears, Neck, Body, Tail (docking not allowed), Limbs, Gait, Skin, Coat, Colour, Size and Weight (Males 54–60 cm [>56 cm preferred], 30–35 kg; Females 50–56 cm [>52 cm preferred], 26–31 kg), Faults & Disqualifying Faults"
        },
        {
          id: "fci-old-danish-pointing-dog-judges-compendium",
          role: "verified",
          locator: "Pages 6–21: complete 42-tooth dentition (20 upper, 22 lower), ear length leaving >1/3 of muzzle free, throat dewlap hallmark, 50% chest depth, angulation, and faults"
        },
        {
          id: "united-kennel-club-old-danish-pointing-dog",
          role: "verified",
          locator: "Height and Weight (21–23.5 in / 66–77 lbs males; 19.5–22 in / 57–68 lbs females; >1 in deviation disqualified), Color (white with brown markings or brown roan)"
        }
      ],
      verifiedOn: "2026-10-23",
      note:
        "Removed 'by the standard' from coatColors[3] to comply with Rule 5, and enriched distinctiveFeatures with exact anatomical proportions and dentition from FCI Standard No. 281 and the 2026 FCI Judges' Compendium."
    },

    "physical.lifespanYears": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "FCI Standard No. 281, Dansk Kennel Klub, Nordic Kennel Union, and Klubben for Gamle Danske Hønsehunde do not publish an official numerical lifespan range."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "verified",
          locator: "Coat and grooming: 'Loose hair and dust is easily removed with a rubber brush or a damp chamois. Do it daily or white hair will be very visible on furniture and carpets.'"
        },
        {
          id: "danish-kennel-club-old-danish-pointing-dog",
          role: "verified",
          locator: "Pels og pleje: 'Løse hår og støv fjernes let med en gummibørste eller et fugtigt vaskeskind. Gør det dagligt, ellers ses navnlig de hvide hår tydeligt på møbler og tæpper.'"
        }
      ],
      verifiedOn: "2026-10-23",
      note:
        "Populated from null: directly verified from both the Danish Kennel Club and Nordic Kennel Union breed profiles."
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "While FCI Standard No. 281 describes deep overhanging flews and a throat dewlap, consulted sources do not state a categorical drooling level."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "General Appearance (spirited female), Behaviour/Character (quiet, stable, determination and courage, slow/thorough search, maintaining contact with hunter), Disqualifying Faults (aggressive or overly shy)"
        },
        {
          id: "old-danish-pointing-dog-danish-breed-club",
          role: "verified",
          locator: "The breed (legendary nose, wounded-game tracking, easy to train, strong desire to please, bonds closely to entire family) & Temperament"
        },
        {
          id: "danish-kennel-club-old-danish-pointing-dog",
          role: "verified",
          locator: "Mentalitet (rolig og stilfærdig i familien, overbærende og tålmodig over for familiens børn og omgængelig i forhold til fremmede og andre hunde) & Aktivitetsniveau og handleradius (sjældent tilbøjelig til at gå sine egne veje)"
        },
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "verified",
          locator: "Personality and activity level & Activity level and handler proximity"
        }
      ],
      verifiedOn: "2026-10-23",
      note: "Upgraded from reliable_source to official_standard."
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "danish-kennel-club-old-danish-pointing-dog",
          role: "cited",
          locator: "Om racen & Leksikon (Mentalitet, Behov, Tips og trick)"
        },
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "cited",
          locator: "Personality and activity level, Activity level and handler proximity, Tips and tricks"
        },
        {
          id: "old-danish-pointing-dog-danish-breed-club",
          role: "cited",
          locator: "The breed & Temperament"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates derived from Danish Kennel Club, Nordic Kennel Union, and Danish breed-club descriptions."
    },

    "temperament.scores.protectiveness": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No official source establishes a protectiveness score for the breed."
    },

    "temperament.scores.barking": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No official source establishes a barking score for the breed."
    },

    care: {
      reliability: "reliable_source",
      sources: [
        {
          id: "danish-kennel-club-old-danish-pointing-dog",
          role: "verified",
          locator: "Behov, Tips og trick til indlæring og håndtering, Aktivitetsniveau og handleradius, Pels og pleje"
        },
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "verified",
          locator: "Coat and grooming (daily rubber brush or damp chamois; sturdy and not sensitive to cold), Needs (free roaming, sense of smell, retrieving, close human contact), Tips and tricks (reward quickly and change training scenery often)"
        },
        {
          id: "old-danish-pointing-dog-danish-breed-club",
          role: "verified",
          locator: "The breed (requires daily activity and exercise; easy to train)"
        }
      ],
      verifiedOn: "2026-10-23",
      note:
        "Populated care.livingEnvironment.aloneTimeTolerance from null based on DKK and NKU ('Close human contact is also very important for its wellbeing')."
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Sources describe substantial daily activity but do not establish a fixed numerical minutes-per-day range."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No explicit yes/no apartment-suitability rating is published in the consulted Danish or Nordic kennel-club sources."
    },

    "care.livingEnvironment.climates": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "While DKK and NKU note that the short coat provides limited weather protection yet the dog is sturdy and not sensitive to cold, no categorical climate list is established."
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Nutritional assessment and body-condition monitoring"
        },
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "cited",
          locator: "Size and Weight (30–35 kg males, 26–31 kg females)"
        }
      ],
      verifiedOn: null,
      note: "General veterinary nutrition guidance tailored to the breed's 26–35 kg working build."
    },

    "nutrition.feedingFrequency": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal breed-specific meal frequency is established across life stages."
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "danish-kennel-club-old-danish-pointing-dog",
          role: "verified",
          locator: "Avlskrav: mandatory pre-mating HD A or B (or HD C mated to HD A), mandatory pre-mating rcd4/PRA DNA test status, normal testicles, and Basis+ GDH breeding permit (introduced 1 September 2017)"
        },
        {
          id: "danish-breed-club-breeding-approval",
          role: "verified",
          locator: "5-part breeding approval checklist: (1) ≥Good show rating at ≥15 months, (2) DKK HD A, B, or C, (3) DNA status for muskeltræthed (CMS), (4) hunting evaluation, (5) DNA test for PRA"
        },
        {
          id: "old-danish-pointing-dog-pra-c17h2orf71-study",
          role: "verified",
          locator: "Karlskov-Mortensen et al. (Anim Genet. 2018;49(3):237-241, PMID 29624701): autosomal recessive c.3149_3150insC frameshift insertion in exon 1 of C17H2orf71 (rcd4-PRA) causing late-onset PRA in Old Danish Pointing Dogs"
        },
        {
          id: "old-danish-pointing-dog-cms-chat-study",
          role: "verified",
          locator: "Proschowsky et al. (J Hered. 2007;98(5):539-543, PMID 17586598): autosomal recessive exon 6 G>A missense mutation (Val->Met) in CHAT causing congenital myasthenic syndrome in Old Danish Pointing Dogs"
        },
        {
          id: "old-danish-pointing-dog-cms-clinical-study",
          role: "verified",
          locator: "Flagstad et al. (Acta Vet Scand. 1989;30(1):89-102, PMID 2782236): presynaptic congenital myasthenic syndrome clinical and electrophysiological characterization"
        },
        {
          id: "danish-dog-breeds-genetic-profile-study",
          role: "verified",
          locator: "Pertoldi et al. (J Anim Sci. 2013;91(11):5122-5127, PMID 23989866): genetic variation and bottleneck history in Old Danish Pointing Dogs"
        },
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "Disqualifying Faults: cleft palate or hare lip, ectropion, entropion, distichiasis, malformation of chest/ribcage, undershot/overshot/faulty bite, missing >2 PM1 + 1 other tooth"
        }
      ],
      verifiedOn: "2026-10-23",
      note:
        "Major factual upgrade: replaced the placeholder claim that no breed-specific health conditions or screenings exist with the official Dansk Kennel Klub (DKK) and Klubben for Gamle Danske Hønsehunde (GDH) mandatory pre-breeding screening requirements (HD A/B or C+A, rcd4/PRA DNA test, and CHAT congenital myasthenic syndrome DNA clearance) and peer-reviewed PubMed studies (Karlskov-Mortensen et al., 2018; Proschowsky et al., 2007; Flagstad et al., 1989; Pertoldi et al., 2013)."
    },

    "health.dentalCare": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "Jaws/Teeth: 'Powerful jaws with regular scissor bite. Full dentition wanted.' & Faults/Disqualifying Faults: pincer bite (severe fault); missing >2 PM1 + 1 other tooth or overshot/undershot/faulty bite (disqualifying)"
        },
        {
          id: "fci-old-danish-pointing-dog-judges-compendium",
          role: "verified",
          locator: "Page 8: Complete dentition of 42 teeth (20 in upper jaw and 22 in lower jaw)"
        },
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "Routine home tooth brushing and veterinary oral exams"
        }
      ],
      verifiedOn: "2026-10-23",
      note:
        "Upgraded from general_guidance to official_standard: combines FCI Standard No. 281 and the 2026 FCI Judges' Compendium 42-tooth scissor-bite rules with AVMA dental hygiene guidance."
    },

    "health.earCare": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "Ears: set rather low, broad and slightly rounded at the ends, front edge hanging close to the cheek"
        },
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "verified",
          locator: "Appearance and Coat & grooming"
        }
      ],
      verifiedOn: "2026-10-23",
      note: "Upgraded from general_guidance to reliable_source."
    },

    "health.skinCare": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "Skin ('Not too fine, rather tight fitting on body and limbs. On head and neck the skin is looser, forming dewlap and fold at the corners of the lips.') & Coat ('Short and dense, somewhat hard to the touch')"
        },
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "verified",
          locator: "Coat and grooming: daily rubber brush or damp chamois"
        }
      ],
      verifiedOn: "2026-10-23",
      note: "Upgraded from general_guidance to official_standard."
    },

    suitability: {
      reliability: "reliable_source",
      sources: [
        {
          id: "danish-kennel-club-old-danish-pointing-dog",
          role: "verified",
          locator: "Mentalitet ('velegnet som familiehund - dog helst hos aktive mennesker med interesse for og lyst til at færdes meget i naturen; overbærende og tålmodig over for familiens børn') & Behov ('Nær menneskelig kontakt er også vigtigt for dens trivsel')"
        },
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "verified",
          locator: "Personality and activity level ('patient towards children and sociable towards strangers and other dogs. Its appealing nature makes it a great family dog, though preferably with active people with an interest in spending lots of time outdoors.') & Needs"
        },
        {
          id: "old-danish-pointing-dog-danish-breed-club",
          role: "verified",
          locator: "The breed ('wonderful family dog as it easily adapts to home life with its calm, stable mentality')"
        }
      ],
      verifiedOn: "2026-10-23",
      note:
        "Upgraded suitability, suitability.familiesWithChildren, and suitability.activeOwners from estimate to reliable_source based on direct statements in the Danish Kennel Club, Nordic Kennel Union, and Danish breed-club profiles."
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No authoritative source establishes a universal boolean rating for first-time owners."
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No authoritative source establishes a universal boolean rating for senior owners."
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No authoritative source establishes a universal boolean rating for apartment living."
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "Brief Historical Summary (~1710 Morten Bak in Glenstrup, Bakhounds), General Appearance (sexual dimorphism: substantial male vs lighter, spirited, capricious female), Behaviour/Character (slow/measured hunting style maintaining contact with hunter)"
        },
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "verified",
          locator: "Lead: 'The Old Danish Pointing Dog (Gammel Dansk Hønsehund) is the only Scandinavian pointer.'"
        },
        {
          id: "old-danish-pointing-dog-cms-chat-study",
          role: "verified",
          locator: "Proschowsky et al. (2007): CHAT exon 6 mutation discovery and DNA test"
        },
        {
          id: "old-danish-pointing-dog-pra-c17h2orf71-study",
          role: "verified",
          locator: "Karlskov-Mortensen et al. (2018): C17H2orf71 c.3149_3150insC rcd4-PRA mutation discovery"
        }
      ],
      verifiedOn: "2026-10-23",
      note:
        "Upgraded from reliable_source to official_standard, and removed 'The FCI standard describes...' from funFacts[2] to comply with Rule 5."
    },

    faq: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-old-danish-pointing-dog-standard",
          role: "verified",
          locator: "Brief Historical Summary, General Appearance, Behaviour/Character, Coat, Size and Weight (54–60 cm [>56 cm preferred], 30–35 kg males; 50–56 cm [>52 cm preferred], 26–31 kg females)"
        },
        {
          id: "danish-kennel-club-old-danish-pointing-dog",
          role: "verified",
          locator: "Mentalitet, Behov, Pels og pleje, Avlskrav (HD A/B or C+A, rcd4/PRA DNA test)"
        },
        {
          id: "danish-breed-club-breeding-approval",
          role: "verified",
          locator: "5-part breeding approval checklist (show rating, HD, muskeltræthed/CMS, hunting evaluation, PRA)"
        },
        {
          id: "nordic-kennel-union-old-danish-pointing-dog",
          role: "verified",
          locator: "Coat and grooming (daily rubber brush or damp chamois), Personality, Needs"
        },
        {
          id: "old-danish-pointing-dog-pra-c17h2orf71-study",
          role: "verified",
          locator: "C17H2orf71 c.3149_3150insC rcd4/PRA mutation"
        },
        {
          id: "old-danish-pointing-dog-cms-chat-study",
          role: "verified",
          locator: "CHAT exon 6 missense mutation causing congenital myasthenic syndrome"
        }
      ],
      verifiedOn: "2026-10-23",
      note:
        "Upgraded from reliable_source to official_standard, removed 'The FCI standard gives...', 'The standard describes...', 'Breed sources describe...', and 'The sources used here...' from FAQ answers to comply with Rule 5, and updated the health FAQ with the verified DKK/GDH pre-breeding screening requirements and PubMed genetic discoveries."
    }
  },

  updatedOn: "2026-10-23"
};
