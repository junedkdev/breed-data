import type { Breed } from "../schema/breed.types";

export const billy: Breed = {
  slug: "billy",
  name: "Billy",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Chien de Billy"
  ],

  group:
    "Scenthounds and related breeds; Section 1.1 — Large-sized Hounds (with working trial)",

  origin: {
    country: "France",
    region: "Poitou"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tivoli_au_Rallye_Gaillardet_en_2023.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Tivoli_au_Rallye_Gaillardet_en_2023.jpg",
      title: "Tivoli au Rallye Gaillardet en 2023.jpg",
      description:
        "An adult Billy hound photographed outdoors in France, showing its lean, athletic white coat with pale lemon-orange shading, alert dark eyes, and moderately high-set flat drop ears.",
      creator: "MylèneTM",
      uploader: "MylèneTM",
      capturedOn: "2023-10-21",
      uploadedOn: "2023-10-21",
      width: 634,
      height: 636,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by MylèneTM, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Tivoli_au_Rallye_Gaillardet_en_2023.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-25"
    }
  ],

  overview: {
    summary:
      "A rare, noble, and tirelessly athletic large French pack scenthound from Poitou, bred to gallop effortlessly for 40 to 50 km across open countryside in pursuit of deer and wild boar while wearing a crisp white or pale lemon-and-orange coat.",

    description:
      "The Billy is a refined, strongly built yet light-footed large French scenthound whose silhouette balances muscular forequarter power with sleek galloping grace. Its clean, lean, medium-length head displays a slightly domed narrow skull, perceptible occiput, well-defined stop, and a rather square muzzle topped by a broad nasal bridge that curves subtly near the tip. Alert, wide-open dark eyes framed by black or brown rims pair with flat, medium-sized drop ears set relatively high for a French hound and turning slightly inward near the tips. A deep, narrow chest with flat ribs, wide slightly arched back and loin, sloping croup, and strong vertical flat-boned forelegs enable an effortless, sustained gallop over long hunting days. Clad in a short, harsh, slightly coarse coat in pure white, café-au-lait white, or white accented with pale orange or lemon patches over supple white skin, the Billy is a consummate outdoor pack hunter—vigorous, intelligent, and deeply shaped by collective kennel life, making it fundamentally unsuited to solitary urban living.",

    history:
      "Created in the late nineteenth century in the Poitou region of western France, the Billy owes its existence to French master of hounds Gaston Hublot du Rivault, who named the breed after his estate, Château de Billy. Hublot du Rivault set out to revive the storied royal white packs—the 'Chiens Blancs du Roy' (originally called 'Chiens Blancs Greffiers'), founded under King Louis XII and celebrated in French royal hunts for over two centuries before disappearing after the French Revolution. To reconstruct their speed, colour, and noble bearing, he carefully blended three regional Poitou hound strains that have since vanished—the Céris, Montemboeuf, and Larye—drafting an initial written description in 1886. Like several French pack-hound breeds, the Billy suffered catastrophic losses during the twentieth-century World Wars, surviving only through painstaking post-war preservation by dedicated French pack-hunting masters. Definitive international recognition followed in October 1963, with the current written blueprint established in December 1973. Today, the Billy remains very rare outside France, where a small number of traditional big-game packs keep its aristocratic working heritage alive.",

    originalPurpose:
      "Pack hunting large game—especially roe deer, red deer, and wild boar—at a sustained gallop across open French forests and countryside.",

    currentRoles: [
      "Working pack-hunting scenthound for deer and wild boar",
      "Rural countryside tracking and trailing hound",
      "Heritage sporting breed preserved primarily by traditional French pack-hunting kennels"
    ]
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "cm",
      male: {
        min: 60,
        max: 70
      },
      female: {
        min: 58,
        max: 62
      }
    },

    weight: {
      unit: null,
      male: null,
      female: null
    },

    lifespanYears: null,

    coatType:
      "Short, harsh to the touch, and often slightly coarse single coat lying smoothly over fine, supple white skin (which may show deep brown or almost black skin spots beneath the coat).",

    coatLength: "Short",

    coatColors: [
      "Pure white",
      "Milk-coffee white (off-white / café-au-lait tint)",
      "White with light orange patches or mantle",
      "White with lemon patches or mantle",
      "Black or red hair in the coat is strictly inadmissible"
    ],

    sheddingLevel:
      "Moderate; the short, harsh, slightly coarse coat sheds lightly throughout the year with moderate seasonal increases",

    droolingLevel:
      "Low; clean lips with minimal or no pendulous flews (upper lip covering the lower without overhanging fleshiness) and only a slight permitted dewlap keep drooling minimal",

    distinctiveFeatures: [
      "Well-constructed, strong yet light-framed large French pack hound with forequarters noticeably more powerful than the hindquarters",
      "Height at the withers of 60 to 70 cm for males and 58 to 62 cm for females",
      "Fairly fine, lean, medium-length head with a slightly domed, narrow skull, perceptible occiput, and well-defined stop",
      "Well-developed black or red-brown nose, rather square muzzle with a fairly broad nasal bridge (straight at first, then slightly arched), and clean non-fleshy lips",
      "Alert, wide-open dark eyes framed by black or brown eyelid rims",
      "Medium-sized, rather flat drop ears set relatively high for a French hound, turning slightly inward along the lower section",
      "Medium-length, rounded, strong neck permitting only a slight dewlap",
      "Very deep, quite narrow chest with flat ribs, wide slightly arched back and loin, sloping croup, and fairly long flanks with a gentle tuck-up",
      "Long, strong tail that may carry slight feathering",
      "Strong vertical forelegs with flat bones, fairly long shoulders lying close to the chest, moderately muscled thighs, wide strong slightly bent hocks, and well-developed round tight-toed feet built for effortless galloping",
      "Fine, supple white skin (sometimes spotted with deep brown or near-black pigment) under a short harsh coat strictly free of black or red hairs"
    ]
  },

  temperament: {
    traits: [
      "Energetic, tireless, and driven outdoors—capable of galloping 40 to 50 km in a single hunting day",
      "Deeply shaped by collective pack-hunting instincts, requiring structured early training in group discipline and obedience",
      "Intelligent, alert, and responsive to consistent human leadership when educated from puppyhood",
      "Thrives on outdoor freedom and active companionship with its handler or pack, becoming deeply unhappy if confined alone in a city",
      "Possesses an overpowering scent-trailing and wildlife-chasing drive typical of large French hunting hounds",
      "Vocal during pursuit, sounding a carrying hound cry on a trail"
    ],

    scores: {
      affection: 3,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 2,
      independence: 4,
      trainability: 3,
      barking: 4,
      energy: 5
    }
  },

  care: {
    exercise: {
      level:
        "Very high; an elite galloping pack hound capable of covering 40 to 50 km in a hunting day that demands expansive rural space, vigorous daily running, and purposeful scent work",

      minutesPerDay: {
        min: 90,
        max: 120
      },

      activities: [
        "Organized countryside pack hunting and deer or boar trailing",
        "Long-distance trail running, countryside hikes, or bikejoring in safe rural settings",
        "Structured scent tracking, mantrailing, and organized scenthound working trials",
        "Free vigorous movement inside a very large, securely fenced rural enclosure"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush once a week with a rubber hound mitt or firm bristle brush to remove dead hair and dust from the short, harsh coat.",

      bathing:
        "Bathe only occasionally when visibly muddy or odorous after countryside runs, using a mild canine shampoo.",

      notes: [
        "Inspect the medium-sized, slightly inward-turning drop ears weekly—and after every wet forest outing—for moisture, wax buildup, ticks, or grass seeds.",
        "Check the round, tight-toed feet, pads, and fine supple skin thoroughly after long woodland gallops for cuts, thorns, or burrs.",
        "Trim strong nails regularly if rough outdoor ground does not wear them down naturally.",
        "Brush teeth several times weekly using canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Challenging; smart and capable of learning dependable voice discipline when started very young, yet governed by intense pack-hunting and scenting instincts that make casual pet obedience difficult",

      tips: [
        "Begin daily discipline exercises in early puppyhood—traditional French kennel routines teach puppies to answer their name, walk calmly in a group, and stop promptly on voice command before meals.",
        "Use calm, firm, consistent reward-based leadership; erratic or harsh handling undermines trust and steadiness.",
        "Never trust casual off-leash recall near roads or unfenced suburban areas, as this galloping hound can cover huge distances rapidly once locked onto a deer or boar scent.",
        "Provide regular structured scent work or pack exercise so pent-up hunting energy does not spill into restlessness or vocalizing."
      ],

      socialization:
        "Early, structured, positive exposure to varied people, other dogs, livestock, and handling routines is crucial from puppyhood to cultivate reliable group manners and steady everyday behaviour."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate maritime and four-season countryside climates, mirroring western France",
        "Warm climates require scheduling long runs during cooler morning or evening hours with reliable shade and fresh drinking water",
        "Cold winter weather is tolerated well during vigorous movement, though its short, harsh single coat and fine skin require warm, dry, draft-free shelter during freezing rest periods"
      ],

      aloneTimeTolerance:
        "Low; bred to live and hunt in outdoor packs, a Billy left isolated alone—especially indoors in a city environment—can quickly become stressed and deeply depressed."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for large, high-endurance sporting breeds, adjusted seasonally between working and rest periods.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until roughly six months of age on a controlled large-breed growth formula to support healthy skeletal and joint development.",
      adult:
        "Two measured meals daily to sustain endurance and reduce acute stomach distension.",
      senior:
        "Two portion-controlled meals daily tailored for reduced activity and joint health."
    },

    guidelines:
      "Tailor diet density directly to the dog's seasonal workload. During active hunting seasons when a Billy may gallop 40 to 50 km in a day, feed a complete high-energy diet richer in quality fats (such as fish oil) and protein, with appropriate vitamin E support as guided by a veterinarian. Outside hunting season, transition to a leaner maintenance ration lower in fat and protein and higher in fibre—avoiding unnecessary vitamin or mineral supplementation, since overly rich off-season rations can do more harm than good. Divide daily food into two meals, allow calm rest around mealtimes, and provide cool fresh water continuously.",

    considerations: [
      "Because the Billy has a very deep, narrow chest, divide daily adult rations into two smaller meals and avoid intense galloping immediately before or after eating as a precaution against gastric dilatation-volvulus (bloat).",
      "Feed growing puppies a balanced, controlled-calcium large-breed puppy formula to minimise developmental joint stress.",
      "Do not keep off-season dogs on high-fat working rations; adjust calories downward promptly when activity drops.",
      "Transition gradually between high-energy and maintenance formulas over five to seven days to avoid digestive upset."
    ],

    note:
      "Seasonal caloric needs differ dramatically between active hunting-pack hounds and off-season rural dogs. Consult a veterinarian to balance working and maintenance rations."
  },

  health: {
    overview:
      "Because the Billy is a very rare breed kept primarily in small French hunting packs, no peer-reviewed breed-specific epidemiological health surveys, mandatory genetic test panels, or verified actuarial lifespan datasets have been published to date. Practical health management therefore centres on preserving genetic diversity within a historically small population alongside general veterinary precautions for large, very deep-chested, short-coated drop-eared running hounds—specifically bloat (gastric dilatation-volvulus) awareness, developmental hip monitoring, drop-ear hygiene, and fieldwork injury and parasite protection.",

    commonConditions: [
      "Gastric dilatation-volvulus (GDV / bloat) — general acute, life-threatening stomach distension and twisting precaution relevant to large hounds with very deep, narrow chests",
      "Hip dysplasia — general developmental orthopedic precaution recommended for large, fast-galloping hounds standing 58 to 70 cm at the withers",
      "Otitis externa (outer ear infections) — general conformation-linked precaution associated with drop ears that turn slightly inward and can retain moisture or woodland debris",
      "Small-population genetic-diversity vulnerability — historical twentieth-century population bottlenecks make careful pedigree planning important to avoid inbreeding depression",
      "Fieldwork trauma and cold-weather exposure — paw pad injuries, brush scratches on fine white skin, tick-borne exposure, and chill during freezing inactive spells due to its short coat"
    ],

    preventiveCare: [
      "Ask breeders for documented multi-generation pedigrees, parental veterinary health records, and any available orthopedic hip evaluations.",
      "Divide adult rations into two meals, enforce calm rest before and after eating, and know emergency warning signs of bloat (unproductive retching, swollen abdomen, restlessness).",
      "Inspect and dry the drop ears weekly—and after every wet hunting outing—to reduce ear infection risk.",
      "Provide dry, warm, draft-free shelter during cold weather and inspect the fine white skin and paws after every woodland run for thorns, cuts, or ticks.",
      "Maintain strict year-round protection against ticks, fleas, heartworm, and internal parasites alongside annual veterinary wellness examinations."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation prior to breeding (general large working-hound orthopedic precaution)",
      "Careful multi-generation pedigree analysis to manage inbreeding within a small global population",
      "Routine veterinary cardiac, ophthalmic, and ear checks during annual wellness visits"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste and schedule regular veterinary dental checks to keep teeth and gums sound.",

    earCare:
      "Inspect the medium-sized, slightly inward-turning drop ears weekly for moisture, wax buildup, grass seeds, odour, or redness, cleaning gently with a veterinarian-approved solution when needed.",

    skinCare:
      "Run hands over the fine, supple white skin and short harsh coat after every countryside outing to catch ticks, burrs, thorns, sunburn on pale pink areas, or minor cuts early."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: false,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Traditional countryside hunters and pack-hunting kennels with access to expansive hunting terrain",
      "Highly active rural sportsmen able to provide 90 to 120 minutes of vigorous daily countryside exercise and scent work",
      "Experienced scenthound handlers confident in early structured discipline and secure rural containment",
      "Conservation-minded working-hound enthusiasts supporting a rare heritage French breed"
    ],

    notIdealFor: [
      "City or apartment dwellers—solitary urban confinement causes severe stress and unhappiness in this pack hound",
      "First-time dog owners or households seeking a casual, low-energy indoor family pet",
      "Owners wanting effortless off-leash walks in unfenced parks or neighbourhoods near roads and wildlife",
      "Homes with free-roaming small pets such as rabbits or outdoor poultry"
    ]
  },

  funFacts: [
    "Despite its English-sounding name, the Billy is 100 percent French—named after Château de Billy, the Poitou estate of nineteenth-century master of hounds Gaston Hublot du Rivault.",
    "Hublot du Rivault created the breed in the late 1800s in an effort to resurrect the legendary 'Chiens Blancs du Roy' (Royal White Hounds) established by King Louis XII that served French royal hunts for over two centuries.",
    "Built for sustained speed across open French forests, a fit working Billy gallops effortlessly and can cover 40 to 50 km over the course of a single hunting day.",
    "Its crisp white, café-au-lait, or pale orange-and-lemon coat sits over fine white skin that can display dark brown or almost black skin spots—yet any black or red hair in the coat itself is strictly prohibited.",
    "In an unusual conformation quirk, a pronounced overshot bite is strictly disqualified, whereas a very slight overshot bite of up to 0.5 cm is still tolerated without elimination."
  ],

  faq: [
    {
      question: "What is a Billy dog?",
      answer:
        "The Billy is a rare, large, athletic French pack scenthound created in Poitou in the late nineteenth century to hunt deer and wild boar at a sustained gallop, known for its sleek white or pale orange-and-lemon coat."
    },
    {
      question: "How tall and heavy is a Billy?",
      answer:
        "Adult males stand 60 to 70 cm at the withers and adult females stand 58 to 62 cm. No official weight range is published, as healthy working hounds maintain a strong yet light, lean galloping frame proportionate to their height."
    },
    {
      question: "How long does a Billy live?",
      answer:
        "No official lifespan range or peer-reviewed actuarial longevity study is published for the Billy, as the breed has a very small global population concentrated mainly in French hunting kennels."
    },
    {
      question: "Can a Billy live in a city or apartment?",
      answer:
        "No. The Billy is a dedicated outdoor pack hound built to gallop 40 to 50 km across open countryside; living alone indoors in a city or apartment makes it deeply unhappy and stressed."
    },
    {
      question: "What coat colours do Billy hounds come in?",
      answer:
        "Accepted colours are pure white, milk-coffee white, or white with light orange or lemon patches or a mantle. Black or red hairs in the coat are not permitted."
    },
    {
      question: "How much grooming does a Billy need?",
      answer:
        "Coat care is minimal: weekly brushing with a rubber mitt or firm brush keeps its short, harsh coat clean, paired with occasional baths, nail trims, and weekly checks of its drop ears."
    },
    {
      question: "Are Billy hounds easy to train?",
      answer:
        "They are intelligent and responsive when taught group manners and voice commands daily from early puppyhood, but their intense pack-hunting drive makes casual pet obedience and off-leash recall around wildlife very challenging."
    },
    {
      question: "What health precautions should Billy owners keep in mind?",
      answer:
        "No breed-specific genetic diseases are formally documented due to the breed's rarity, so care focuses on general large deep-chested hound precautions: bloat (GDV) mealtime safety, hip joint care, drop-ear hygiene, seasonal nutrition adjustments, and preserving genetic diversity."
    }
  ],

  references: [
    "fci-billy-official-standard",
    "fci-billy-nomenclature",
    "scc-billy-profile",
    "scc-club-du-chien-d-ordre-billy",
    "canine-chronicle-billy-ria-horter",
    "wikimedia-billy-tivoli-rallye-gaillardet-mylenetm"
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
          id: "scc-club-du-chien-d-ordre-billy",
          role: "verified",
          locator: "French breed designation: chien de Billy"
        },
        {
          id: "fci-billy-nomenclature",
          role: "verified",
          locator: "Official multilingual name across EN/FR/DE/ES: BILLY"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified from FCI Nomenclature No. 25 and Club du Chien d'Ordre (SCC)."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-billy-official-standard",
          role: "verified",
          locator: "FCI-CLASSIFICATION: Group 6 Scenthounds and related breeds. Section 1.1 Large sized hounds. With working trial."
        },
        {
          id: "fci-billy-nomenclature",
          role: "verified",
          locator: "Group n°6 - Scent hounds and related breeds; Section Scent hounds; Subsection Large-sized Hounds"
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
          id: "fci-billy-official-standard",
          role: "verified",
          locator: "ORIGIN: France"
        },
        {
          id: "scc-billy-profile",
          role: "verified",
          locator: "Historique: Created in the late 19th century by Poitou master of hounds M. Hublot du Rivault, named after his Poitou estate"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Country (France) verified from FCI Standard No. 25; Poitou regional origin verified from SCC."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-billy-official-standard",
          role: "verified",
          locator: "UTILIZATION (Hound), GENERAL APPEARANCE, HEAD, EARS, BODY, GAIT, COAT, COLOUR, SIZE"
        },
        {
          id: "fci-billy-nomenclature",
          role: "verified",
          locator: "Definitive FCI acceptance date: 1963-10-14; valid standard date: 1973-12-28"
        },
        {
          id: "scc-billy-profile",
          role: "verified",
          locator: "Historique (late 19th-century Poitou creation by Hublot du Rivault recreating Louis XII's Chiens Blancs du Roy / Chiens Blancs Greffiers), 40-50 km daily hunting gallop, pack discipline"
        },
        {
          id: "canine-chronicle-billy-ria-horter",
          role: "verified",
          locator: "Grande vènerie French pack-hunting heritage (deer and wild boar)"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Synthesized in original prose from FCI Standard No. 25, FCI Nomenclature No. 25, SCC, and published canine history."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-billy-official-standard",
          role: "verified",
          locator: "GENERAL APPEARANCE (forequarters more powerful than hindquarters), HEAD, EYES, EARS, NECK (slight dewlap permitted), BODY (very deep quite narrow chest, flat ribs), TAIL, LIMBS, GAIT (gallops easily), SKIN (white, fine, supple, optional dark spots), COAT (short, harsh, slightly coarse), COLOUR (pure white, milk-coffee white, light orange or lemon patches/mantle; black or red hair disqualified), DISQUALIFYING FAULTS (overshot mouth >0.5 cm)"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "All anatomical traits, coat texture, colour rules, skin pigmentation, and disqualifications follow FCI Standard No. 25."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-billy-official-standard",
          role: "verified",
          locator: "SIZE: For dogs : 60-70 cm. For bitches : 58-62 cm."
        },
        {
          id: "scc-billy-profile",
          role: "verified",
          locator: "Taille: 58 à 70 cm."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Preserved verbatim in published unit of centimetres (60 to 70 cm males, 58 to 62 cm females) from FCI Standard No. 25."
    },

    "physical.weight": {
      reliability: "unavailable",
      sources: [
        {
          id: "fci-billy-official-standard",
          role: "cited",
          locator: "SIZE section specifies height at withers only and omits weight"
        },
        {
          id: "scc-billy-profile",
          role: "cited",
          locator: "Caractéristiques: Poids: NP (non précisé)"
        }
      ],
      verifiedOn: null,
      note:
        "Neither FCI Standard No. 25 nor the Société Centrale Canine (SCC) breed profile publishes an official weight range."
    },

    "physical.lifespanYears": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Neither FCI Standard No. 25, SCC, nor peer-reviewed actuarial lifespan surveys publish a verified lifespan range for the Billy, and secondary websites report conflicting estimates."
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-billy-official-standard",
          role: "cited",
          locator: "COAT: Short, harsh to the touch, often slightly coarse."
        }
      ],
      verifiedOn: null,
      note:
        "Editorial estimate inferred from the short, harsh single coat specified in FCI Standard No. 25."
    },

    "physical.droolingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-billy-official-standard",
          role: "cited",
          locator: "Lips: Slightly or not at all in form of flews, upper lip covering lower without overhanging fleshiness; NECK: slight dewlap permitted."
        }
      ],
      verifiedOn: null,
      note:
        "Editorial estimate inferred from clean non-fleshy lips and minimal dewlap in FCI Standard No. 25."
    },

    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-billy-profile",
          role: "verified",
          locator: "Comportement & Vivre en ville: Pack hound requiring early training in collective life and obedience to humans; built to live outdoors in groups and gallop 40-50 km daily; becomes deeply depressed if kept alone in a city."
        },
        {
          id: "fci-billy-official-standard",
          role: "verified",
          locator: "GAIT/MOVEMENT (gallops easily) and DISQUALIFYING FAULTS (aggressive or overly shy)"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "FCI Standard No. 25 does not include a separate temperament paragraph; behavioural traits are verified from SCC."
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "scc-billy-profile",
          role: "cited",
          locator: "High-energy outdoor pack hound requiring structured obedience and wide running space"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates reflecting documented 40–50 km galloping energy, pack-hunting independence, and vocal scenthound nature."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-billy-profile",
          role: "cited",
          locator: "Early kennel/group obedience exercises before meals, expansive outdoor exercise, and seasonal dietary transitions"
        },
        {
          id: "fci-billy-official-standard",
          role: "cited",
          locator: "Short harsh coat, fine white skin, and medium-sized slightly inward-turning drop ears"
        }
      ],
      verifiedOn: null,
      note:
        "General working pack-scenthound care combining very high daily exercise and early voice-command discipline with simple short-coat upkeep."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-billy-profile",
          role: "verified",
          locator: "Le Billy est un chien qui galope aisément et peut parcourir de 40 à 50 km au cours d'une journée de chasse; built to run freely outdoors."
        },
        {
          id: "fci-billy-official-standard",
          role: "verified",
          locator: "GAIT/MOVEMENT: Gallops easily; UTILIZATION: Large-sized pack hound with working trial."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "scc-billy-profile",
          role: "cited",
          locator: "40 to 50 km daily hunting endurance"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial daily activity range (90 to 120 minutes) reflecting the stamina of a large galloping French pack hound."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-billy-profile",
          role: "verified",
          locator: "Vivre en ville: Le Billy n'est pas un chien de ville. On le rendrait très dépressif si on le faisait vivre seul en ville."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-billy-profile",
          role: "verified",
          locator: "Vivre en ville: Built to live outdoors in open countryside with ample room to run."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-billy-official-standard",
          role: "cited",
          locator: "French origin (Poitou), short harsh single coat, and fine supple skin"
        }
      ],
      verifiedOn: null,
      note: "General climate guidance inferred from Poitou origin and short single coat."
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-billy-profile",
          role: "verified",
          locator: "Vivre en ville: Bred to live in a group outdoors; keeping a Billy alone in a city causes severe depression."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    nutrition: {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-billy-profile",
          role: "verified",
          locator: "Alimentation & Santé: High-energy fat- and protein-rich diet (e.g., fish oil, vitamin E support) during hunting season; reduced fat/protein and higher fibre maintenance ration without extra supplements off-season."
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Seasonal working-versus-maintenance dietary guidance verified from SCC, paired with general large deep-chested bloat precautions."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Standard large-breed canine life-stage feeding schedule dividing adult food into two daily meals."
    },

    "health.overview": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "No peer-reviewed breed-specific disease prevalence studies or official genetic screening panels exist for the Billy; guidance transparently reflects general large, very deep-chested, drop-eared hound precautions."
    },

    "health.commonConditions": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Lists general large deep-chested scenthound precautions (GDV, hip dysplasia, drop-ear infections, small-population genetic management, fieldwork/cold exposure) rather than established breed-specific disease prevalence."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive veterinary care protocol tailored to large working French pack hounds."
    },

    "health.recommendedScreenings": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General large-breed orthopedic, pedigree-diversity, and annual wellness precautions; no mandatory breed-specific DNA test panel is established."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-billy-official-standard",
          role: "cited",
          locator: "DISQUALIFYING FAULTS: Pronounced overshot mouth strictly disqualified (slight overshot up to 1/2 cm not eliminated)."
        }
      ],
      verifiedOn: null,
      note: "Standard home and veterinary dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-billy-official-standard",
          role: "cited",
          locator: "EARS: Medium size, set relatively high for a French hound, rather flat, turning slightly inwards in the lower section."
        }
      ],
      verifiedOn: null,
      note: "Routine drop-ear inspection and drying protocol."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-billy-official-standard",
          role: "cited",
          locator: "SKIN: White, sometimes with deep brown or almost black spots; supple and fine."
        }
      ],
      verifiedOn: null,
      note: "General skin, tick, and brush-scratch inspection guidance for fine white skin."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "scc-billy-profile",
          role: "cited",
          locator: "Not a city dog; bred to live outdoors in groups, gallop 40-50 km in hunting days, and receive early structured discipline"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability evaluations based on documented pack-hunting specialization, extreme exercise stamina, and unsuitability for urban or solitary pet life."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-billy-profile",
          role: "verified",
          locator: "Named after Hublot du Rivault's Poitou property; created to recreate Louis XII's Chiens Blancs du Roy (Chiens Blancs Greffiers); 40-50 km daily hunting gallop"
        },
        {
          id: "fci-billy-official-standard",
          role: "verified",
          locator: "White skin with optional dark spots, black/red hair strictly disqualified, 1/2 cm overshot mouth tolerance"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified historical, working-endurance, pigmentation, and conformation facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-billy-official-standard",
          role: "verified",
          locator: "Origin (France), height (60-70 cm males / 58-62 cm females), coat colours, absence of published weight"
        },
        {
          id: "scc-billy-profile",
          role: "verified",
          locator: "Poitou origin, 40-50 km hunting gallop, unsuitability for city/apartment life, early pack discipline, weight unspecified (NP)"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "FAQ answers synthesize FCI Standard No. 25 and SCC records, transparently noting unavailable weight, lifespan, and breed-specific health statistics without naming clubs or registries in user-facing prose."
    }
  },

  updatedOn: "2026-11-25"
};
