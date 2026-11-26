import type { Breed } from "../schema/breed.types";

export const chesapeake_bay_retriever: Breed = {
  slug: "chesapeake-bay-retriever",
  name: "Chesapeake Bay Retriever",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Chessie",
    "CBR",
    "Retriever (Chesapeake Bay)",
    "Retriever de la Baie de Chesapeake"
  ],

  group:
    "Retrievers, Flushing Dogs, and Water Dogs; Section 1 — Retrievers (with working trial; also classified in the Sporting and Gundog groups)",

  origin: {
    country: "United States",
    region: "Chesapeake Bay (Maryland and Virginia)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chesapeake_Bay_Retriever1.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Chesapeake_Bay_Retriever1.jpg",
      title: "Chesapeake Bay Retriever1.jpg",
      description:
        "An adult Chesapeake Bay Retriever standing alert in a marshland wetland, showcasing its short wavy oily water-resistant coat, broad round skull, clear amber eyes, and powerful swimming build.",
      creator: "Keith Rousseau (Roussk)",
      uploader: "Pharaoh Hound",
      capturedOn: "2007-06-16",
      uploadedOn: "2007-08-23",
      width: 3324,
      height: 2544,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Keith Rousseau (Roussk), Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Chesapeake_Bay_Retriever1.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chesapeake_Bay_Retriever_in_the_snow.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Chesapeake_Bay_Retriever_in_the_snow.jpg",
      title: "Chesapeake Bay Retriever in the snow.jpg",
      description:
        "A brown Chesapeake Bay Retriever outdoors in winter snow carrying a branch in its mouth, highlighting its thick insulating double coat, strong deep chest, and rugged cold-weather stamina.",
      creator: "Will Thomas",
      uploader: "A11w1ss3nd",
      capturedOn: "2017-03-13",
      uploadedOn: "2019-10-11",
      width: 4489,
      height: 3304,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Will Thomas, Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:Chesapeake_Bay_Retriever_in_the_snow.jpg. License: https://creativecommons.org/licenses/by/2.0/. Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    }
  ],

  overview: {
    summary:
      "A rugged, powerfully built, and oil-coated American waterfowl retriever forged along the icy marshes of the Chesapeake Bay, combining fearless cold-water stamina and unmatched duck-retrieving grit with deep, protective loyalty to its family.",

    description:
      "The Chesapeake Bay Retriever—fondly nicknamed the 'Chessie'—is a muscular, heavily boned, and remarkably resilient large sporting retriever engineered to break through ice and haul waterfowl from freezing coastal swells all day long. More substantial than its retriever cousins, it displays a signature topline where the powerful hindquarters stand as high as or a trifle higher than the shoulders, driving an effortless swimming stroke assisted by large, well-webbed hare feet. Its broad, round skull breaks at a medium stop into a tapering muzzle of matching length, set with thin tight lips, small loosely hanging ears, and strikingly clear, wide-set yellowish or amber eyes. No feature defines the breed more unmistakably than its harsh, short, naturally oily double coat—measuring no more than 1.5 inches long over a dense woolly undercoat, tending to wave across the shoulders, neck, back, and loins while shedding freezing water like duck feathers and blending seamlessly into marshland hues of brown, sedge, and deadgrass. Bright, sensitive, and fiercely devoted to its household, the Chessie is notably more independent, strong-minded, and protective of family and territory than more outgoing retrievers, rewarding firm, steady, experienced leadership.",

    history:
      "An iconic American original born along the tidal estuaries of Maryland and Virginia, the Chesapeake Bay Retriever traces its famous founding legend to 1807, when an American vessel named the Canton rescued the crew of a shipwrecked English brig off the Maryland coast along with two St. John's Water Dog (Lesser Newfoundland) puppies bound for England. George Law, nephew of the rescuing ship's owner, bought both pups for a guinea each: a dingy-red, short-thick-coated male named Sailor and a black female named Canton. Placed on opposite shores of the Chesapeake Bay—Canton with Dr. James Stewart at Sparrow's Point and Sailor on Maryland's Eastern Shore—both dogs earned legendary reputations among market duck hunters and were crossed with local retrievers, hounds, setters, and water spaniels to forge an unstoppable cold-water retriever that also guarded hunters' boats, gear, and catch from thieves. The breed made its first Baltimore exhibition appearance in 1876, received its earliest written blueprint in 1890, gained its dedicated American society in 1918, earned definitive international recognition in September 1964, and reached Sweden in 1973. Today, it remains America's premier harsh-weather waterfowl dog and a devoted guardian-companion for active outdoor households.",

    originalPurpose:
      "Retrieving waterfowl relentlessly through icy coastal waters, rough surf, and frozen marshes of the Chesapeake Bay while guarding hunters' boats, gear, and catch.",

    currentRoles: [
      "Working waterfowl and upland-bird retrieving gundog",
      "Hunt-test, field-trial, obedience, rally, agility, and dock-diving competitor",
      "Devoted rural or active-family companion and vigilant household watchdog"
    ]
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "in",
      male: {
        min: 23,
        max: 26
      },
      female: {
        min: 21,
        max: 24
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 65,
        max: 80
      },
      female: {
        min: 55,
        max: 70
      }
    },

    lifespanYears: {
      min: 10,
      max: 13
    },

    coatType:
      "Thick, short, naturally oily, weather-resistant double coat—nowhere exceeding 1.5 inches long—consisting of a harsh outer guard coat over a dense, fine, woolly undercoat. Coat tends to wave on the shoulders, neck, back, and loins only (never curly all over), while hair on the face and legs stays very short and straight and feathering on the tail or legs never exceeds 1.75 inches. Water rolls off readily so the dog resists freezing and shrugs off briars.",

    coatLength: "Short",

    coatColors: [
      "Brown in all shades from light brown to dark brown",
      "Sedge (ranging from reddish-gold to bright red-brown)",
      "Deadgrass (varying from faded tan to dull straw, matching marshland reeds and ash shades)",
      "Self-coloured with one shade preferred over none; a small white spot on the breast, belly, toes, or back of feet is permissible (black coats and white markings anywhere else on the body are disqualified)"
    ],

    sheddingLevel:
      "Moderate; the dense oily double coat sheds moderately throughout the year and blows its woolly undercoat heavily a couple of times a year",

    droolingLevel:
      "Low; thin, clean, non-pendulous lips keep drooling minimal",

    distinctiveFeatures: [
      "Powerful, strongly boned, medium-length large retriever built for icy-water stamina—with hindquarters standing as high as or a trifle higher than the shoulders",
      "Height at the withers of 23 to 26 inches for males and 21 to 24 inches for females",
      "Adult working weight of 65 to 80 pounds for males and 55 to 70 pounds for females",
      "Depth of body extends at least to the elbow (shoulder-to-elbow equals elbow-to-ground), paired with a strong deep barrel-round ribcage, short powerful back, and well-tucked flanks",
      "Broad, round skull with a medium stop, medium-short nose, tapering non-sharp muzzle matching skull length, thin non-pendulous lips, and scissor bite preferred (level bite acceptable; overshot or undershot disqualified)",
      "Medium-large, wide-set, very clear yellowish or amber eyes radiating keen intelligence",
      "Small, medium-leather ears set well up on the head and hanging loosely",
      "Strong muscular neck tapering cleanly into sloping powerful shoulders, straight muscular limbs, well-angulated stifles, and large well-webbed hare feet with rounded close toes (hind dewclaws must be removed)",
      "Medium-length tail heavy at the base, carried straight or slightly curved without curling over the back or kinking",
      "Unique short, harsh, naturally oily double coat (maximum 1.5 inches long) waving only across the neck, shoulders, back, and loins in camouflaging brown, sedge, or deadgrass shades (honourable working scars are never penalized)"
    ]
  },

  temperament: {
    traits: [
      "Bright, courageous, tireless, and intensely driven to work—especially in water and marshland",
      "Deeply affectionate, sensitive, and fiercely loyal to its primary handler and family household",
      "Notably more independent, strong-willed, and self-directed than more effusive retrievers",
      "Naturally watchful, territorial, and protective of its family, home, and gear—often polite yet reserved or neutral around unfamiliar strangers",
      "Calm, settled, and relaxed indoors once its substantial daily physical and mental working needs are met",
      "Barks primarily to alert rather than noisily without reason",
      "Extreme shyness or extreme aggression is untypical, though firm early socialization is essential around unfamiliar dogs and visitors"
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 4,
      independence: 4,
      trainability: 4,
      barking: 2,
      energy: 5
    }
  },

  care: {
    exercise: {
      level:
        "Very high; a powerhouse cold-water retriever with extraordinary endurance that demands vigorous daily outdoor activity, swimming, and structured retrieving work to remain calm and content indoors",

      minutesPerDay: {
        min: 90,
        max: 120
      },

      activities: [
        "Waterfowl hunting, water-retrieving drills, and vigorous swimming in all safe seasons",
        "Long brisk daily hikes, trail running, or structured retrieve sessions",
        "Canine sports including hunt tests, field trials, dock diving, obedience, rally, and agility",
        "Supervised vigorous play inside a large, securely fenced yard"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Minimal routine grooming—brush once weekly with a rubber curry brush or firm bristle brush to remove loose hair and distribute natural protective oils, combing more thoroughly during the twice-yearly undercoat sheds.",

      bathing:
        "Shampoo only very rarely when genuinely soiled—frequent bathing strips the natural skin and coat oils that keep the Chessie waterproof and insulated in cold water; rinse muddy coats with plain water instead.",

      notes: [
        "Inspect and gently dry the small, loosely hanging drop ears weekly—and thoroughly after every swim—to prevent trapped moisture, wax buildup, and ear infections.",
        "Check the large webbed hare feet and tight toes after marsh or woodland work for thorns, ice cuts, or ticks, and trim strong nails regularly.",
        "Brush teeth several times weekly using canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Moderate; bright, eager to work, and capable of top-level retrieving and obedience titles, yet sensitive and noticeably more independent and strong-minded than softer retrievers—requiring firm, fair, consistent leadership",

      tips: [
        "Begin firm yet upbeat, reward-based training from early puppyhood; Chessies respect calm, unwavering consistency and fair boundaries rather than harshness or indecisiveness.",
        "Keep training engaging through real retrieving tasks, marking drills, obedience, or dock diving so its active mind stays focused.",
        "Channel protective watchdog instincts early by teaching polite guest greetings and dependable recall around unfamiliar people and dogs.",
        "Protect developing large-breed joints by avoiding forced repetitive jumping or long pavement runs until skeletal maturity."
      ],

      socialization:
        "Thorough, positive early socialization across varied strangers, visitors, friendly dogs, children, and busy public settings is vital so its natural protective reserve stays poised, neutral, and trustworthy."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cold, icy, wet, and coastal four-season climates—engineered to swim through freezing Atlantic marshes without chilling thanks to its oily double coat",
        "Temperate countryside settings with water, woodland, and trail access",
        "Hot, humid summer weather requires scheduling vigorous runs and retrieves for cool dawn or evening hours with reliable shade, cool swimming water, and air-conditioned indoor refuge"
      ],

      aloneTimeTolerance:
        "Low to moderate; deeply bonded to its human companions, a Chesapeake Bay Retriever settles calmly indoors when thoroughly exercised and included in family life, rather than being left isolated for long stretches."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for large, high-endurance sporting and working breeds, using a controlled large-breed puppy formula during skeletal growth.",

    feedingFrequency: {
      puppy:
        "Three to four measured meals daily until roughly six months of age on a controlled large-breed puppy diet to support steady, lean bone and joint development.",
      adult:
        "Two measured meals daily to sustain cold-water stamina and help reduce acute stomach distension.",
      senior:
        "Two portion-controlled meals daily tailored for reduced caloric demands and joint comfort."
    },

    guidelines:
      "Measure every meal accurately to preserve a lean, hard-muscled working condition without excess fat over the hips and elbows. Active hunting dogs swimming in freezing winter waters burn substantially more calories than off-season household dogs and require energy-dense nutrition during hunting months. Divide adult food into two daily meals, allow calm rest before and after eating, and provide fresh drinking water continuously.",

    considerations: [
      "Because this large, barrel-chested retriever is vulnerable to gastric dilatation-volvulus (GDV / bloat), divide daily adult rations into two smaller meals and avoid strenuous running right before or after eating.",
      "Feed growing puppies a balanced large-breed growth diet with controlled calcium and calories to help minimise developmental hip and elbow stress.",
      "Count all training treats inside the daily calorie allowance and transition gradually between diet formulas over five to seven days."
    ],

    note:
      "Caloric needs differ markedly between hard-working waterfowl retrievers and moderately active companions. Consult a veterinarian to tailor daily portions."
  },

  health: {
    overview:
      "The Chesapeake Bay Retriever is generally a robust, athletic, hard-working breed with a typical life expectancy of 10 to 13 years. Responsible breeding programmes across North America, Britain, and Scandinavia emphasize comprehensive pre-breeding screening for both orthopaedic and molecularly mapped hereditary conditions. Core priorities include developmental hip dysplasia (documented as the breed's most frequent orthopaedic issue) and elbow dysplasia, hereditary eye disorders (Progressive Retinal Atrophy prcd-PRA and cataracts), Degenerative Myelopathy (DM / SOD1), Exercise-Induced Collapse (EIC / DNM1, confirmed in peer-reviewed research in Chesapeake Bay Retrievers), and the breed-specific autosomal-recessive Ectodermal Dysplasia–Skin Fragility Syndrome (ED-SFS, mapped in 2012 to a PKP1 splice-site mutation). Chondrodystrophy/IVDD screening, cardiac checks, bloat precautions, and post-swim ear hygiene complete responsible care.",

    commonConditions: [
      "Hip dysplasia (HD) and elbow dysplasia (ED) — developmental joint laxity and malformation leading to osteoarthritis; hip dysplasia is documented as the most common orthopaedic concern in the breed, and both hips and elbows are actively screened via pre-breeding radiographs",
      "Progressive Retinal Atrophy (prcd-PRA) and hereditary cataracts — progressive retinal degeneration and lens opacities monitored through pre-breeding prcd-PRA DNA testing and periodic specialist veterinary ophthalmologist examinations",
      "Degenerative Myelopathy (DM, SOD1-related) — a late-onset, progressive, painless spinal cord degeneration screened via DNA testing in North American and British breeding programmes",
      "Exercise-Induced Collapse (EIC, DNM1-related) — an autosomal-recessive neuromuscular disorder with incomplete penetrance causing non-painful hind-limb weakness, incoordination, and collapse after 5 to 20 minutes of intense exercise or excitement (confirmed in peer-reviewed studies in Chesapeake Bay Retrievers); preventable via pre-breeding DNA testing",
      "Ectodermal Dysplasia–Skin Fragility Syndrome (ED-SFS, PKP1-related) — a severe neonatal autosomal-recessive blistering and skin-fragility disorder first characterized in any animal species in Chesapeake Bay Retrievers in 2012, caused by a PKP1 splice-site mutation (c.202+1G>C) leading to absent plakophilin-1; completely preventable via pre-breeding DNA testing",
      "Chondrodystrophy (CDDY) / Intervertebral Disc Disease (IVDD) and Chondrodysplasia (CDPA) — skeletal and spinal-disc genetic risk factors tracked in North American breed health guidance",
      "Gastric dilatation-volvulus (GDV / bloat) and otitis externa (outer ear infections) — conformation- and lifestyle-linked risks tied to its deep barrel-round chest and frequent cold-water swimming with drop ears"
    ],

    preventiveCare: [
      "Insist on documented public pre-breeding health clearances for both parents: official radiographic hip and elbow evaluations, periodic board-certified veterinary ophthalmologist eye examination, and DNA test results for prcd-PRA, Degenerative Myelopathy (DM), Exercise-Induced Collapse (EIC), and Ectodermal Dysplasia–Skin Fragility Syndrome (ED-SFS / PKP1), plus optional CDDY/IVDD and cardiac checks.",
      "Keep puppies lean on a large-breed growth formula and avoid repetitive high-impact jumping until skeletal growth plates close to protect hips and elbows.",
      "Divide daily adult rations into two meals, enforce calm rest around mealtimes, and know emergency bloat warning signs (unproductive retching, swollen tight abdomen, restlessness).",
      "Dry the loosely hanging drop ears thoroughly after every swim, avoid over-shampooing the oily waterproof coat, and schedule annual veterinary wellness exams with consistent vaccinations and parasite prevention."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation and radiographic elbow dysplasia evaluation prior to breeding",
      "Periodic ophthalmic examination by a board-certified veterinary ophthalmologist",
      "DNA test for Progressive Retinal Atrophy (prcd-PRA)",
      "DNA test for Degenerative Myelopathy (DM / SOD1)",
      "DNA test for Exercise-Induced Collapse (EIC / DNM1) and DNA test for Ectodermal Dysplasia–Skin Fragility Syndrome (ED-SFS / PKP1), plus elective CDDY/IVDD and cardiac screening"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste and schedule regular veterinary dental checks to keep the scissor or level bite and gums healthy.",

    earCare:
      "Inspect and thoroughly dry the small, loosely hanging drop ears weekly—and after every swimming or wet marsh session—to clear moisture, wax, or debris and help prevent ear infections.",

    skinCare:
      "Preserve the coat's natural protective oils by rinsing muddy water off cleanly rather than frequent shampooing, and check beneath the dense woolly undercoat after brush hunts for ticks, burrs, hot spots, or minor scrapes."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Waterfowl and upland hunters seeking an unstoppable, cold-water retrieving partner built for harsh marsh conditions",
      "Experienced, active outdoor families living in spacious houses with large fenced yards who enjoy daily swimming, hiking, dock diving, or hunt tests",
      "Handlers who appreciate a deeply devoted, protective, low-grooming retriever and welcome firm, consistent training leadership",
      "Rural or coastal households wanting both an affectionate indoor companion and a vigilant, discriminating watchdog"
    ],

    notIdealFor: [
      "First-time dog owners or passive handlers expecting the soft, everybody's-best-friend compliance of less independent retrievers",
      "City apartment dwellers or sedentary households unable to supply 90 to 120 minutes of vigorous daily outdoor exercise",
      "Owners bothered by a naturally oily coat texture, seasonal undercoat shedding, or wet-dog marsh outings",
      "Households leaving a devoted working partner isolated alone all day without mental or physical engagement"
    ]
  },

  funFacts: [
    "Every modern Chesapeake Bay Retriever traces back to a dramatic 1807 shipwreck off the Maryland coast, when an American vessel named the Canton rescued two Newfoundland-type water-dog puppies—Sailor and Canton—purchased for a single guinea apiece.",
    "Because nineteenth-century Chesapeake Bay market hunters left their retrievers to watch over boats, decoys, and the day's duck harvest, the breed developed a far stronger protective and independent guarding instinct than other retrievers.",
    "Its unique short, wavy, naturally oily double coat works much like duck feathers—repelling icy coastal water so effectively that frequent shampooing actually harms its natural insulation.",
    "The breed's official blueprint explicitly states that 'honourable scars are not to be penalized,' celebrating its rugged working heritage in frozen marshes and dense briars.",
    "In 2012, veterinary dermatologists studying Chesapeake Bay Retrievers published the first documented animal model of human Ectodermal Dysplasia–Skin Fragility Syndrome, mapping it to a PKP1 gene mutation now easily prevented through DNA screening."
  ],

  faq: [
    {
      question: "What is a Chesapeake Bay Retriever?",
      answer:
        "The Chesapeake Bay Retriever ('Chessie') is a large, powerfully built, oil-coated American waterfowl retriever developed in nineteenth-century Maryland and Virginia to retrieve ducks relentlessly from icy coastal waters while guarding hunters' gear and families."
    },
    {
      question: "How tall and heavy is a Chesapeake Bay Retriever?",
      answer:
        "Adult males stand 23 to 26 inches at the withers and weigh 65 to 80 pounds, while adult females stand 21 to 24 inches and weigh 55 to 70 pounds."
    },
    {
      question: "How long does a Chesapeake Bay Retriever live?",
      answer:
        "Generally a rugged, hardy working breed, the Chesapeake Bay Retriever has a typical life expectancy of 10 to 13 years with lean nutrition, vigorous exercise, and routine veterinary care."
    },
    {
      question: "How is a Chesapeake Bay Retriever different from a Labrador Retriever?",
      answer:
        "While both share distant St. John's Water Dog roots, the Chesapeake Bay Retriever is generally more substantial with hindquarters as high as or slightly higher than its shoulders, clear yellowish-amber eyes, a uniquely wavy oily coat in brown, sedge, or deadgrass (never black), and a noticeably more independent, reserved, and protective guarding temperament."
    },
    {
      question: "Can a Chesapeake Bay Retriever live in an apartment or with first-time owners?",
      answer:
        "Generally no. Its substantial 55- to 80-pound size and need for 90 to 120 minutes of vigorous daily exercise and swimming suit a large house with a yard far better than an apartment, and its strong-minded, protective independence makes it a better match for experienced handlers than first-time owners."
    },
    {
      question: "How do you care for a Chesapeake Bay Retriever's oily double coat?",
      answer:
        "Grooming is minimal: brush weekly with a rubber or firm bristle brush (and comb thoroughly during twice-yearly heavy undercoat sheds), and shampoo only rarely—frequent bathing strips the natural oils that make the coat waterproof."
    },
    {
      question: "Are Chesapeake Bay Retrievers good family dogs and easy to train?",
      answer:
        "Yes, in active, consistent homes. They are deeply loyal, sensitive, affectionate with family and children, and very bright workers—provided they receive broad early socialization and firm, fair, positive training to channel their independent and protective streak."
    },
    {
      question: "What are the main health concerns for a Chesapeake Bay Retriever?",
      answer:
        "Key documented health priorities include hip dysplasia, elbow dysplasia, hereditary eye conditions (prcd-PRA and cataracts), Degenerative Myelopathy (DM), Exercise-Induced Collapse (EIC / DNM1), Ectodermal Dysplasia–Skin Fragility Syndrome (ED-SFS / PKP1), CDDY/IVDD, bloat (GDV) precautions, and post-swim drop-ear infections."
    }
  ],

  references: [
    "akc-chesapeake-bay-retriever-official-standard",
    "akc-chesapeake-bay-retriever-breed-profile",
    "akc-chesapeake-bay-retriever-history-2024",
    "fci-chesapeake-bay-retriever-official-standard",
    "fci-chesapeake-bay-retriever-nomenclature",
    "acc-chesapeake-bay-retriever-health",
    "rkc-retriever-chesapeake-bay-profile",
    "skk-chesapeake-bay-retriever-profile",
    "scc-retriever-de-la-baie-de-chesapeake-profile",
    "pmc-olivry-2012-cbr-pkp1-ed-sfs",
    "boykin-spaniel-eic-dnm1-study-2011",
    "wikimedia-chesapeake-bay-retriever1-roussk",
    "wikimedia-chesapeake-bay-retriever-snow-thomas"
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
          id: "rkc-retriever-chesapeake-bay-profile",
          role: "verified",
          locator: "Official Royal Kennel Club designation: Retriever (Chesapeake Bay)"
        },
        {
          id: "fci-chesapeake-bay-retriever-nomenclature",
          role: "verified",
          locator: "Official French name: RETRIEVER DE LA BAIE DE CHESAPEAKE"
        },
        {
          id: "acc-chesapeake-bay-retriever-health",
          role: "verified",
          locator: "Uses common nickname 'Chessie' and official abbreviation 'CBR'"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified across The Royal Kennel Club, FCI Nomenclature No. 263, and American Chesapeake Club."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chesapeake-bay-retriever-nomenclature",
          role: "verified",
          locator: "Group 8 Retrievers - Flushing Dogs - Water Dogs; Section 1 Retrievers; With working trial"
        },
        {
          id: "akc-chesapeake-bay-retriever-official-standard",
          role: "verified",
          locator: "AKC Sporting Group official breed standard"
        },
        {
          id: "rkc-retriever-chesapeake-bay-profile",
          role: "verified",
          locator: "Royal Kennel Club Gundog Group"
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
          id: "fci-chesapeake-bay-retriever-official-standard",
          role: "verified",
          locator: "ORIGIN: U.S.A."
        },
        {
          id: "akc-chesapeake-bay-retriever-history-2024",
          role: "verified",
          locator: "Chesapeake Bay region (Maryland and Virginia; 1807 Canton rescue of Sailor and Canton)"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Country (United States) and Chesapeake Bay regional heritage (Maryland and Virginia) verified from FCI Standard No. 263 and AKC."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-chesapeake-bay-retriever-official-standard",
          role: "verified",
          locator: "General Appearance, Topline (hindquarters as high or trifle higher than shoulders), Eyes (clear yellowish/amber), Coat (thick short <=1.5 in waving only on shoulders/neck/back/loins), Courage/Disposition"
        },
        {
          id: "fci-chesapeake-bay-retriever-nomenclature",
          role: "verified",
          locator: "Date of acceptance on a definitive basis by the FCI: 1964-09-15"
        },
        {
          id: "akc-chesapeake-bay-retriever-history-2024",
          role: "verified",
          locator: "1807 Canton shipwreck rescue of Sailor (dingy-red male) and Canton (black female) bought by George Law for a guinea each; Dr. James Stewart of Sparrow's Point; boat/catch guarding shaping protective independence"
        },
        {
          id: "scc-retriever-de-la-baie-de-chesapeake-profile",
          role: "verified",
          locator: "1876 first Baltimore exhibition, 1890 first standard, 1918 parent club founding"
        },
        {
          id: "skk-chesapeake-bay-retriever-profile",
          role: "verified",
          locator: "1973 first Swedish registration; guarding and waterfowl hunting heritage"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Synthesized in original prose from AKC Official Standard (1993), FCI Standard No. 263, FCI Nomenclature, AKC history, SCC, and SKK."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-chesapeake-bay-retriever-official-standard",
          role: "verified",
          locator: "Size/Proportion (body depth to elbow; shoulder-to-elbow = elbow-to-ground), Head (broad round skull, medium stop, tapering non-sharp muzzle, thin non-pendulous lips, scissor preferred / level acceptable; over-/undershot disqualified), Eyes (clear yellowish/amber), Ears (small set well up, hanging loosely), Topline (hindquarters >= shoulders), Barrel-round deep ribcage, Tail (straight/slightly curved), Webbed hare feet (hind dewclaws disqualified), Coat (<=1.5 in, dense woolly undercoat, waving only on neck/shoulders/back/loins; curly all over or feathering >1.75 in disqualified), Colour (brown, sedge, deadgrass; black or white outside breast/belly/toes/back of feet disqualified; honourable scars not penalized)"
        },
        {
          id: "fci-chesapeake-bay-retriever-official-standard",
          role: "verified",
          locator: "Identical morphological specifications, coat rules, disqualifications, and approximate measurements in inches"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "All proportions, clear amber eyes, hindquarters-high topline, webbed hare feet, oily double coat (max 1.5 in), brown/sedge/deadgrass colours, and disqualifications follow the AKC Official Standard (1993) and FCI Standard No. 263 (1999)."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-chesapeake-bay-retriever-official-standard",
          role: "verified",
          locator: "Height: Males should measure 23 to 26 inches; females should measure 21 to 24 inches."
        },
        {
          id: "fci-chesapeake-bay-retriever-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Height at the withers: Males should measure 23 to 26 inches (58–66 cm). Females should measure 21 to 24 inches (53–61 cm)."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Preserved verbatim in published unit of inches (males 23 to 26 in, females 21 to 24 in) from the country-of-origin AKC Official Standard and first-stated unit in FCI Standard No. 263."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-chesapeake-bay-retriever-official-standard",
          role: "verified",
          locator: "Weight: Males should weigh 65 to 80 pounds; females should weigh 55 to 70 pounds."
        },
        {
          id: "fci-chesapeake-bay-retriever-official-standard",
          role: "verified",
          locator: "Weight: Males should weigh 65 to 80 pounds (29.5–36.5 kg); females should weigh 55 to 70 pounds (25–32 kg)."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Preserved verbatim in published unit of pounds (males 65 to 80 lb, females 55 to 70 lb) from the country-of-origin AKC Official Standard and first-stated unit in FCI Standard No. 263."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-chesapeake-bay-retriever-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 10-13 years."
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified from AKC breed profile; AKC Official Standard and FCI Standard No. 263 omit lifespan."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-chesapeake-bay-retriever-breed-profile",
          role: "verified",
          locator: "Shedding: Moderate; Grooming: Weekly."
        },
        {
          id: "skk-chesapeake-bay-retriever-profile",
          role: "verified",
          locator: "Skötsel: Sheds its undercoat a couple of times a year; minimal coat care."
        },
        {
          id: "rkc-retriever-chesapeake-bay-profile",
          role: "verified",
          locator: "Breed characteristics: Sheds Yes; Grooming Once a week."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-chesapeake-bay-retriever-official-standard",
          role: "verified",
          locator: "Lips: Thin, not pendulous."
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Thin, non-pendulous lips keep drooling minimal."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-chesapeake-bay-retriever-official-standard",
          role: "verified",
          locator: "Courage, willingness to work, alertness, nose, intelligence, love of water, and disposition primary; extreme shyness or extreme aggression undesirable."
        },
        {
          id: "akc-chesapeake-bay-retriever-breed-profile",
          role: "verified",
          locator: "Bright, affectionate, sensitive; loyal and relaxed indoors with plenty of exercise; more independent and protective of family than some hunting dogs; occasional barking."
        },
        {
          id: "skk-chesapeake-bay-retriever-profile",
          role: "verified",
          locator: "Egenskaper och mentalitet: Strong will to work, enduring, tough, hunting and guarding instincts intact, commonly neutral or reserved with strangers while fiercely loyal to handler and family."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-chesapeake-bay-retriever-breed-profile",
          role: "cited",
          locator: "Affectionate, protective, independent, eager to please, occasional barking, high outdoor activity"
        },
        {
          id: "skk-chesapeake-bay-retriever-profile",
          role: "cited",
          locator: "Reserved/neutral with strangers, loyal to family, high working endurance"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates reflecting documented family devotion, guarding protectiveness, stranger reserve, independence, and vigorous working energy."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "skk-chesapeake-bay-retriever-profile",
          role: "cited",
          locator: "Minimal weekly brushing, comb during twice-yearly sheds, shampoo only rarely to preserve natural waterproofing oils"
        },
        {
          id: "rkc-retriever-chesapeake-bay-profile",
          role: "cited",
          locator: "Over 2 hours daily exercise, large house, weekly grooming"
        },
        {
          id: "scc-retriever-de-la-baie-de-chesapeake-profile",
          role: "cited",
          locator: "Firm, consistent education ('son éducation sera très ferme') and vigorous swimming/hunting exercise"
        }
      ],
      verifiedOn: null,
      note:
        "General cold-water retriever care combining high daily outdoor exercise and firm positive training with oil-preserving minimal bathing and post-swim ear care."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-retriever-chesapeake-bay-profile",
          role: "verified",
          locator: "Breed characteristics: Exercise: More than 2 hours per day; renowned for strength, stamina, and love of working."
        },
        {
          id: "akc-chesapeake-bay-retriever-breed-profile",
          role: "verified",
          locator: "Athletic companion requiring plenty of exercise and outdoor activities."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "rkc-retriever-chesapeake-bay-profile",
          role: "cited",
          locator: "High daily outdoor exercise benchmark (>2 hours/day for active working adults)"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial daily activity range (90 to 120 minutes) suited to a powerhouse waterfowl retriever."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-retriever-chesapeake-bay-profile",
          role: "verified",
          locator: "Breed characteristics: Size of home: Large house; Exercise: More than 2 hours per day."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-retriever-chesapeake-bay-profile",
          role: "verified",
          locator: "Size of home: Large house."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-chesapeake-bay-retriever-official-standard",
          role: "verified",
          locator: "Short oily water-resistant double coat with dense fine woolly undercoat built for icy water retrieving."
        },
        {
          id: "rkc-retriever-chesapeake-bay-profile",
          role: "verified",
          locator: "Strong retriever bred to work in icy Atlantic waters."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "scc-retriever-de-la-baie-de-chesapeake-profile",
          role: "cited",
          locator: "Devoted to its master and thrives when spending substantial time with its human companions"
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
        "General large sporting-retriever veterinary nutrition guidance emphasizing controlled puppy growth, lean working weight, and deep-chested bloat precautions."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Standard large deep-chested breed life-stage feeding schedule dividing adult rations into two meals."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "acc-chesapeake-bay-retriever-health",
          role: "verified",
          locator: "ACC Breed Health Statement (approved 2016-09-11): Lists Hip Dysplasia, Elbow Dysplasia, Eyes, Progressive Retinal Atrophy (prcd), Degenerative Myelopathy, Exercise-Induced Collapse, Ectodermal Dysplasia–Skin Fragility Syndrome, Chondrodysplasia, and Chondrodystrophy & IVDD."
        },
        {
          id: "rkc-retriever-chesapeake-bay-profile",
          role: "verified",
          locator: "Good Practice tests (BVA/RKC Elbows, BVA/RKC Hips, DM DNA) and Best Practice tests (prcd-PRA DNA, BVA/RKC/ISDS Eye Scheme); Breed Watch Category 1."
        },
        {
          id: "skk-chesapeake-bay-retriever-profile",
          role: "verified",
          locator: "Hälsa: Hip dysplasia (HD) is the most common health problem; elbow dysplasia (ED), few cataract cases, and rare PRA also noted."
        },
        {
          id: "pmc-olivry-2012-cbr-pkp1-ed-sfs",
          role: "verified",
          locator: "PLoS One 2012;7(2):e32072 (PMID 22384142, PMC3284538): Autosomal-recessive PKP1 splice-site mutation causing Ectodermal Dysplasia–Skin Fragility Syndrome (ED-SFS) in 9 of 28 CBR puppies across 4 related litters."
        },
        {
          id: "boykin-spaniel-eic-dnm1-study-2011",
          role: "verified",
          locator: "Vet J 2011;189(2):214-219 (PMID 21782486): Confirms DNM1 Exercise-Induced Collapse (EIC) carriers and homozygous affected dogs with collapse phenotype in Chesapeake Bay Retrievers."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Synthesizes ACC Health Statement, RKC, SKK, and peer-reviewed genetics studies (PKP1 ED-SFS, DNM1 EIC) without naming clubs or registries in user-facing text."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "acc-chesapeake-bay-retriever-health",
          role: "verified",
          locator: "Hip dysplasia, elbow dysplasia, prcd-PRA, eye disease, DM, EIC, ED-SFS, CDPA, and CDDY/IVDD"
        },
        {
          id: "pmc-olivry-2012-cbr-pkp1-ed-sfs",
          role: "verified",
          locator: "PKP1 Ectodermal Dysplasia–Skin Fragility Syndrome (ED-SFS)"
        },
        {
          id: "boykin-spaniel-eic-dnm1-study-2011",
          role: "verified",
          locator: "DNM1 Exercise-Induced Collapse (EIC)"
        },
        {
          id: "skk-chesapeake-bay-retriever-profile",
          role: "verified",
          locator: "HD as most common orthopaedic problem, plus ED, cataracts, and rare PRA"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Explicitly stratifies screened orthopaedic/ocular conditions and molecularly characterized recessive disorders (PKP1 ED-SFS, DNM1 EIC, PRCD, SOD1 DM, CDDY/IVDD) from barrel-chested GDV and water-working ear precautions."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "acc-chesapeake-bay-retriever-health",
          role: "cited",
          locator: "Pre-breeding hip, elbow, eye, prcd-PRA, DM, EIC, and ED-SFS clearances"
        },
        {
          id: "skk-chesapeake-bay-retriever-profile",
          role: "cited",
          locator: "Avoid frequent shampooing to preserve waterproofing oils"
        }
      ],
      verifiedOn: null,
      note: "General preventive veterinary care protocol tailored to Chesapeake Bay Retrievers."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-retriever-chesapeake-bay-profile",
          role: "verified",
          locator: "Good Practice tests (Hips, Elbows, DM DNA) and Best Practice tests (prcd-PRA DNA, Eye Scheme)."
        },
        {
          id: "acc-chesapeake-bay-retriever-health",
          role: "verified",
          locator: "ACC Breed Health Statement covering Hips, Elbows, Eyes, prcd-PRA, DM, EIC, ED-SFS, CDPA, and CDDY/IVDD."
        },
        {
          id: "pmc-olivry-2012-cbr-pkp1-ed-sfs",
          role: "verified",
          locator: "DNA screening for PKP1 ED-SFS."
        },
        {
          id: "boykin-spaniel-eic-dnm1-study-2011",
          role: "verified",
          locator: "DNA screening for DNM1 EIC."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Summarizes Royal Kennel Club and American Chesapeake Club screening panels alongside peer-reviewed DNA tests without naming registries or clubs in user-facing prose."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-chesapeake-bay-retriever-official-standard",
          role: "cited",
          locator: "Bite: Scissors is preferred, but a level bite is acceptable (overshot or undershot disqualified)."
        }
      ],
      verifiedOn: null,
      note: "Standard home and veterinary dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-chesapeake-bay-retriever-official-standard",
          role: "cited",
          locator: "Ears: Small, set well up on the head, hanging loosely, and of medium leather."
        }
      ],
      verifiedOn: null,
      note: "Routine drop-ear inspection and thorough post-swim drying protocol."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "skk-chesapeake-bay-retriever-profile",
          role: "cited",
          locator: "Naturally oily waterproof double coat should be shampooed only rarely so natural oil protection is not disrupted."
        }
      ],
      verifiedOn: null,
      note: "General skin, natural-oil preservation, and woodland-tick inspection guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-chesapeake-bay-retriever-history-2024",
          role: "cited",
          locator: "Protective and independent personality makes the breed a less-than-ideal fit for first-time dog owners"
        },
        {
          id: "rkc-retriever-chesapeake-bay-profile",
          role: "cited",
          locator: "Large house requirement, over 2 hours daily exercise, weekly grooming"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability evaluations balancing fierce family loyalty and low-maintenance coat against very high exercise needs, strong-minded independence, and protective territoriality."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-chesapeake-bay-retriever-history-2024",
          role: "verified",
          locator: "1807 Canton shipwreck rescue of Sailor and Canton (bought for a guinea each) and guarding hunters' catch/gear"
        },
        {
          id: "skk-chesapeake-bay-retriever-profile",
          role: "verified",
          locator: "Naturally oily waterproof coat should be shampooed only rarely"
        },
        {
          id: "akc-chesapeake-bay-retriever-official-standard",
          role: "verified",
          locator: "'Honorable scars are not to be penalized'"
        },
        {
          id: "pmc-olivry-2012-cbr-pkp1-ed-sfs",
          role: "verified",
          locator: "2012 first documented animal model of human ED-SFS caused by PKP1 mutation"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified historical, grooming, working-tradition, and veterinary-genetics facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-chesapeake-bay-retriever-official-standard",
          role: "verified",
          locator: "Height (23-26 in males / 21-24 in females), weight (65-80 lb males / 55-70 lb females), hindquarters-high topline, clear amber eyes, brown/sedge/deadgrass oily coat (no black)"
        },
        {
          id: "akc-chesapeake-bay-retriever-breed-profile",
          role: "verified",
          locator: "Lifespan (10-13 years), independent/protective vs. affectionate family nature"
        },
        {
          id: "rkc-retriever-chesapeake-bay-profile",
          role: "verified",
          locator: "Large house, >2 hours daily exercise, hips/elbows/eyes/prcd-PRA/DM screenings"
        },
        {
          id: "skk-chesapeake-bay-retriever-profile",
          role: "verified",
          locator: "Rare shampooing to protect natural coat oils"
        },
        {
          id: "pmc-olivry-2012-cbr-pkp1-ed-sfs",
          role: "verified",
          locator: "PKP1 ED-SFS DNA screening"
        },
        {
          id: "boykin-spaniel-eic-dnm1-study-2011",
          role: "verified",
          locator: "DNM1 EIC DNA screening"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "FAQ answers synthesize AKC Official Standard, FCI Standard No. 263, ACC, RKC, SKK, SCC, and peer-reviewed genetics studies without naming clubs or registries in user-facing prose."
    }
  },

  updatedOn: "2026-11-26"
};
