import type { Breed } from "../schema/breed.types";

export const nova_scotia_duck_tolling_retriever: Breed = {
  slug: "nova-scotia-duck-tolling-retriever",
  name: "Nova Scotia Duck Tolling Retriever",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Toller",
    "Little River Duck Dog",
    "Yarmouth Toller",
    "Decoy Dog",
    "Duck Tolling Retriever"
  ],

  group:
    "Retrievers, Flushing Dogs and Water Dogs; Section 1 — Retrievers (also classified in the Sporting Dog and Gundog groups)",

  origin: {
    country: "Canada",
    region: "Southwestern Nova Scotia, particularly Little River Harbour in Yarmouth County"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Nova_Scotia_Duck_Tolling_Retriever_portrait.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Nova_Scotia_Duck_Tolling_Retriever_portrait.jpg",
      title: "Nova Scotia Duck Tolling Retriever portrait",
      description: "A young Nova Scotia Duck Tolling Retriever.",
      creator: "Christopher Woo",
      uploader: "Pharaoh Hound",
      capturedOn: "2006-04-30",
      uploadedOn: "2007-05-01",
      width: 1024,
      height: 768,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Christopher Woo, originally shared on Flickr as 'Happy Deks', via Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:Nova_Scotia_Duck_Tolling_Retriever_portrait.jpg. License: https://creativecommons.org/licenses/by/2.0/. Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Nova_Scotia_Duck-Tolling_Retriever.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Nova_Scotia_Duck-Tolling_Retriever.jpg",
      title: "Nova Scotia Duck-Tolling Retriever",
      description:
        "A 12-week-old male Nova Scotia Duck Tolling Retriever playing with a stick.",
      creator: "Jarle Nystuen",
      uploader: "Minto",
      capturedOn: "2005-07-25",
      uploadedOn: "2005-07-25",
      width: 800,
      height: 599,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Jarle Nystuen, via Wikimedia Commons, CC BY-SA 3.0 / GFDL 1.2+. Source: https://commons.wikimedia.org/wiki/File:Nova_Scotia_Duck-Tolling_Retriever.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adapted versions must comply with the applicable share-alike terms.",
      restrictions:
        "Originally uploaded to Wikimedia Commons on 2005-07-25 under the Attribution and GNU Free Documentation License (GFDL 1.2+) tags and subsequently migrated to CC BY-SA 3.0 during the Wikimedia GFDL licensing update; preserve attribution to Jarle Nystuen and comply with CC BY-SA 3.0 ShareAlike terms on any adaptations.",
      metadataCheckedOn: "2026-10-21"
    }
  ],

  overview: {
    summary:
      "A compact, athletic, and intelligent Canadian retriever bred in southwestern Nova Scotia, celebrated for its red-to-orange water-repellent double coat, tireless love of swimming and retrieving, and fox-like shoreline play that lures curious waterfowl within gunshot range.",

    description:
      "The Nova Scotia Duck Tolling Retriever—universally nicknamed the Toller—is the smallest of the retriever breeds, built with a muscular, compact, and well-boned frame that is slightly longer than tall (roughly a 10:9 ratio) without ever appearing heavy or clunky. Protected against icy maritime waters by a medium-length, water-repellent double coat in shades of golden red to dark coppery red (often accented by white markings on the tail tip, feet, chest, or blaze), it features a clean, wedge-shaped head, alert almond-shaped amber-to-brown eyes, high-set triangular drop ears, a heavily feathered tail that waves incessantly above the back when working, and strongly webbed feet. In the field, the Toller performs a dual job: darting, leaping, and retrieving sticks or balls silently along the shoreline so its flashing red coat and feathered tail arouse the curiosity of offshore ducks and geese, then plunging into frigid water to retrieve downed birds on command. At home, Tollers are deeply affectionate, playful, and attuned to their families, though they can be reserved with strangers, strong-willed if training becomes repetitive, and prone to an unmistakable high-pitched vocalisation ('the Toller scream') when brimming with excitement.",

    history:
      "Developed at the beginning of the nineteenth century in the coastal community of Little River Harbour in Yarmouth County, southwestern Nova Scotia, the breed was originally called the Little River Duck Dog or the Yarmouth Toller. Local hunters—drawing on Indigenous Mi'kmaq traditions and European observations of red foxes playing near the water's edge to entice rafting waterfowl toward shore—bred a small, fox-coloured dog that could both lure ('toll', from the Middle English tolian, meaning 'to entice or decoy') and retrieve waterfowl from icy tidal waters. Although exact early breeding records were not preserved, foundation stock is thought to have combined small European decoy spaniels (similar to the Nederlandse Kooikerhondje) with retrievers (including early Golden, Chesapeake Bay, or Flat-Coated Retriever stock and the extinct St. John's Water Dog), setters, spaniels, and local farm collies. After more than a century of regional breeding in Nova Scotia, the first 15 dogs were admitted to national studbook registration in Canada in 1945. When breed numbers dropped dangerously low in the 1970s, dedicated North American and European fanciers—including American pioneer Sue Van Sloun, who imported her first pair in 1978 and helped establish organized preservation in the United States in 1984—expanded preservation efforts. International recognition followed in 1987, the province of Nova Scotia proclaimed the Toller its official Provincial Dog in 1995, and full sporting-group recognition in the United States was granted in 2003.",

    originalPurpose:
      "Enticing ('tolling') offshore ducks and geese within gunshot range through silent, playful shoreline movement and retrieving downed waterfowl from icy water and land.",

    currentRoles: [
      "Active family and outdoor companion",
      "Waterfowl tolling and retrieving gundog",
      "Field trial and retriever hunt-test competitor",
      "Agility, flyball, and dock-diving competitor",
      "Obedience, rally, and trick-training participant",
      "Tracking, nose work, and scent-detection participant",
      "Search-and-rescue or therapy dog where individually trained and temperament-suited"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 48,
        max: 51
      },
      female: {
        min: 45,
        max: 48
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 20,
        max: 23
      },
      female: {
        min: 17,
        max: 20
      }
    },

    lifespanYears: {
      min: 12,
      max: 14
    },

    coatType:
      "Water-repellent double coat consisting of a medium-length, moderately soft straight outer coat (a slight wave along the back and a loose curl at the throat in winter coat are permissible) over a denser, even softer insulating undercoat, with soft feathering at the throat, behind the ears, on the backs of the thighs, and moderately on the forelegs and underside of the tail.",

    coatLength: "Medium",

    coatColors: [
      "Red (ranging from golden red to dark coppery red, with lighter shadings on the feathering and underside of the tail)",
      "Orange (various shades of orange, with pigment on the nose, lips, and eye rims matching the coat in flesh/liver or black)",
      "Red or orange with at least one white marking on the tip of the tail, feet (not extending above the pasterns), chest, or facial blaze (solid red/orange without any white is also acceptable, whereas buff/silver dilution, brown, black, pinto, tricolor, or white on the shoulders, around the ears, on the back of the neck, or across the back/flanks are disqualifying faults)"
    ],

    sheddingLevel:
      "Moderate year-round, with heavier seasonal shedding twice a year during spring and autumn coat changes.",

    droolingLevel: "Low",

    distinctiveFeatures: [
      "Smallest of the retriever breeds, built on a compact, muscular, slightly rectangular outline (approximately 10:9 body length to withers height) with a deep chest reaching the elbows and a level topline",
      "Clean-cut, slightly wedge-shaped head (measuring roughly 14 cm [5.5 in] between the ears tapering to 3.8 cm [1.5 in] at the nose bridge, and about 23 cm [9 in] from nose to occiput in a typical adult male, scaling with body size) with a flat-to-slightly-rounded skull and moderate stop",
      "Almond-shaped, medium-sized eyes set well apart in amber to brown shades that harmonize with the coat, paired with flesh-coloured or black nose leather, tight-fitting lips, and eye rims",
      "Triangular, medium-sized drop ears with rounded tips set high and well back on the skull, carried slightly raised at the base when alert and well feathered at the back of the fold",
      "Broad-based, heavily feathered tail reaching at least to the hocks, carried below the level of the back only when standing at rest and curving high in continuous motion above the topline when alert or working (never touching the body)",
      "Strong, round-to-oval, tightly webbed feet with thick pads and trimmed interdigital hair, functioning like paddles in cold water",
      "Springy, effortless, ground-covering gait with strong rear drive and a level backline",
      "Distinctive high-pitched, trembling vocalisation ('the Toller scream') expressed by many individuals when eager to retrieve or work",
      "Ideal adult withers height of 48–51 cm (19–20 in) for males and 45–48 cm (18–19 in) for females over 18 months of age (with a ±2.5 to 3 cm [±1 in] allowance, or 18–21 in and 17–20 in in American standards), and substance-proportionate adult weight guidelines of 20–23 kg (45–51 lbs) for males and 17–20 kg (37–43 lbs; 35–50 lbs across both sexes in American profiles)"
    ]
  },

  temperament: {
    traits: [
      "Highly intelligent, observant, and quick to learn",
      "Affectionate, loving, and playful with family members and familiar children",
      "Outgoing, exuberant, and tireless when working or playing",
      "Intensely driven to retrieve on land and in water",
      "Alert, attentive, and determined",
      "Patient with children when properly socialized and supervised",
      "Often reserved or aloof (never aggressive or shy) toward unfamiliar people",
      "Sensitive to handler tone yet persistent and capable of independent or strong-willed behaviour if bored",
      "Expressive and vocal when excited (including the high-pitched 'Toller scream')"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 2,
      independence: 3,
      trainability: 4,
      barking: 4,
      energy: 5
    }
  },

  care: {
    exercise: {
      level: "High",
      minutesPerDay: null,

      activities: [
        "Daily brisk walks, jogging, or trail hikes suited to the dog's age and conditioning",
        "Structured retrieving games and field bumper work on land and in water",
        "Swimming and dock diving in safe, supervised bodies of water",
        "Canine sports such as agility, flyball, rally, and obedience",
        "Tracking, nose work, and scent-detection games",
        "Problem-solving puzzle toys and short, varied mental-enrichment drills"
      ]
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush thoroughly at least once a week with a pin brush, slicker brush, and metal comb to remove loose hair and prevent matting in the soft feathering behind the ears, around the throat, and on the hindquarters. Increase to daily brushing during seasonal spring and autumn coat sheds.",

      bathing:
        "Bathe only as needed when dirty or after muddy or saltwater swims, using a mild dog-safe shampoo that preserves the natural oils of the water-repellent double coat, and rinse and dry thoroughly.",

      notes: [
        "The weatherproof double coat insulates against both icy water and summer heat; it should never be shaved, and show trimming is restricted to neatening the ears, feet, pasterns, and hocks.",
        "Pay close attention to the fine, silky hair behind and under the ears, which tangles more easily than the body coat.",
        "Trim excess hair between the paw pads and on the feet to maintain traction and prevent mud or ice buildup.",
        "Rinse and dry the coat and inspect the drop ears after swimming in lakes, marshes, or the ocean.",
        "Check toenails weekly and trim them regularly so they remain short and compact.",
        "Brush the teeth regularly with dog-specific toothpaste and accustom puppies early to calm grooming and handling."
      ]
    },

    training: {
      difficulty:
        "Moderate. Highly intelligent, eager to work, and quick to grasp new concepts, yet sensitive to heavy-handed methods and quick to invent its own rules if drills become monotonous.",

      tips: [
        "Use upbeat, reward-based positive reinforcement—combining food rewards with brief retrieving or tug play—and avoid harsh corrections.",
        "Keep training sessions short, varied, and mentally challenging so this quick-thinking retriever does not become bored or self-employed.",
        "Channel the breed's intense retrieving instinct as a high-value life reward for recall, impulse control, and obedience.",
        "Teach calm steadiness and an 'off switch' indoors so the dog learns to settle quietly after high-arousal work or play.",
        "Manage and redirect high-pitched excitement vocalisations ('the Toller scream') early by rewarding quiet focus before throwing a toy or releasing the dog to water.",
        "Practise reliable recall in securely enclosed spaces and keep the dog on a leash or long line around wild waterfowl, small animals, and open water currents."
      ],

      socialization:
        "Begin positive, unhurried socialization early in puppyhood across diverse people, friendly dogs, children, surfaces, sounds, and environments. Because many Tollers are naturally reserved or discerning with strangers, allow the dog to observe and greet unfamiliar people without pressure so it matures into a confident, well-mannered adult. Supervise introductions to cats and small pets carefully due to the breed's innate bird- and small-game drive."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [],

      aloneTimeTolerance:
        "Low to moderate. Tollers bond closely with their families and thrive on daily interaction, training, and outdoor activity. Leaving a Toller isolated for long workdays without adequate physical and mental outlets can lead to boredom, vocalising, or destructive chewing."
    }
  },

  nutrition: {
    dietType:
      "High-quality, complete and balanced dog food (commercial or veterinarian-formulated home-prepared diet) appropriate for the dog's life stage, workload, and health status.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null
    },

    guidelines:
      "Feed measured portions of a nutritionally complete diet suited to the dog's age (puppy, adult, or senior) and daily activity level. Because Tollers are medium-sized athletic dogs whose caloric needs vary widely between active field/agility competitors and family companions, monitor body condition score regularly so the waist remains defined and the ribs are easily felt beneath a light layer of muscle. Keep clean, fresh water available at all times.",

    considerations: [
      "Adjust daily calorie intake to match seasonal training, hunting, or sport workloads.",
      "Count training treats within the total daily caloric allowance to prevent excess weight and unnecessary joint strain.",
      "Transition between diets gradually over several days unless a veterinarian directs otherwise.",
      "Consult a veterinarian promptly if unexplained weight loss, lethargy, intermittent vomiting, diarrhoea, or increased thirst/urination occur (which can also be early signs of endocrine or immune-mediated conditions).",
      "Home-prepared diets should be formulated with a veterinarian or board-certified veterinary nutritionist to ensure complete micronutrient balance."
    ],

    note:
      "No single daily meal count is prescribed across all puppies, adults, or seniors because optimal feeding schedules depend on age, caloric density, and individual metabolism; confirm meal frequency and portion sizes with a veterinarian."
  },

  health: {
    overview:
      "The Nova Scotia Duck Tolling Retriever is an energetic, hardy sporting dog with a typical lifespan of 12 to 14 years, but its historical population bottlenecks have led to several well-characterized autosomal recessive genetic variants as well as an elevated predisposition to immune-mediated and endocrine disorders. Epidemiological research in insured Swedish Tollers (2015) documented significantly higher relative risks than in the general dog population for steroid-responsive meningitis-arteritis (SRMA; incidence 20 per 10,000 dog-years at risk, relative risk 12) and immune-mediated rheumatic disease (IMRD; 6.8 per 10,000 dog-years at risk, relative risk 18), alongside a higher risk of lymphoma but lower overall rates of ear and heart disease. A follow-up 2024 Swedish owner-questionnaire survey (935 living and 177 deceased Tollers) estimated lifetime prevalence in living dogs at 3.0% for IMRD and 3.5% for SRMA, and reported neoplasia of any kind (benign or malignant, most commonly mammary and mast cell tumours) in 14% of living dogs and as the cause of death in 38.4% of deceased dogs—figures specific to that surveyed cohort rather than universal cancer rates. In 2026, a peer-reviewed genomic study identified an autosomal recessive missense variant in the RESF1 gene (c.3170C>T / p.Pro1057Leu on chromosome 27) associated with juvenile-onset Addison's disease (JADD) with incomplete (~75%–76%) penetrance by 1 year of age (average diagnosis 5 months) and multiple autoimmune syndrome (41.7%–70.8% of juvenile cases developing concurrent immune-mediated eye, blood, joint, gut, or thyroid disorders); this DNA test does not account for adult-onset Addison's disease. Earlier in 2023, researchers also identified an autosomal recessive frameshift variant in the LMNA gene (p.Asp576ThrfsTer124) causing fatal juvenile/young-adult cardiac laminopathy (CLAM, dilated and fibrosing cardiomyopathy). Validated DNA tests are likewise available for PRCD-progressive retinal atrophy (PRA-prcd), Collie eye anomaly (CEA/CH), cleft palate 1 (CP1 / DLX6), cleft lip/palate/syndactyly (CLPS / ADAMTS20), cerebellar degeneration-myositis complex (CDMC / SNX14), degenerative encephalopathy (DE), degenerative myelopathy (DM / SOD1), and FGF4 retrogene chondrodystrophy (CDDY/IVDD).",

    commonConditions: [
      "Hypoadrenocorticism (Addison's disease) and multiple autoimmune syndrome — occurs in both an adult-onset form (average onset ~2.6–4 years) and a juvenile-onset form (JADD, average onset 5 months, range 8 weeks to 12 months) associated with an autosomal recessive RESF1 missense variant (c.3170C>T / p.Pro1057Leu) showing ~75%–76% penetrance and frequent concurrent autoimmune manifestations (such as corneal edema, conjunctivitis, uveitis, immune-mediated hemolytic anemia, thrombocytopenia, polyarthritis, or inflammatory bowel disease).",
      "Steroid-responsive meningitis-arteritis (SRMA, sometimes historically called 'Toller disease') — a non-infectious immune-mediated inflammation of the meninges and meningeal arteries affecting primarily young dogs (roughly 70% presenting before 18 months of age; 3.5% living prevalence in a 2024 Swedish survey), causing acute neck pain, stiffness, high fever, and depression that require prompt veterinary diagnosis and immunosuppressive therapy.",
      "Immune-mediated rheumatic disease (IMRD) — a systemic lupus erythematosus-related non-erosive polyarthritis (3.0% living prevalence and median onset 5 years in a 2024 Swedish survey, often ANA-positive) causing cyclic joint stiffness, shifting leg lameness, pain after rest, and sometimes skin lesions or fever.",
      "Cardiac laminopathy (CLAM) — a fatal autosomal recessive dilated and fibrosing cardiomyopathy caused by a frameshift deletion in the LMNA gene (p.Asp576ThrfsTer124), typically resulting in myocarditis, arrhythmias, heart failure, or sudden cardiac death before 1.5 to 2 years of age (with myocardial fibrosis also reported in a 5-year-old heterozygous carrier); preventable via pre-breeding DNA screening.",
      "Progressive retinal atrophy, photoreceptor rod-cone degeneration (PRA-prcd) and Collie eye anomaly / choroidal hypoplasia (CEA/CH) — autosomal recessive inherited retinal and choroidal eye disorders for which validated DNA tests and annual veterinary ophthalmologist examinations are core screening tools.",
      "Cleft palate 1 (CP1, DLX6 insertion) and cleft lip/palate/syndactyly (CLPS, ADAMTS20 deletion) — two distinct autosomal recessive congenital craniofacial malformation syndromes in the breed, both preventable through pre-breeding DNA carrier testing.",
      "Cerebellar degeneration-myositis complex (CDMC) and degenerative encephalopathy (DE) — rare autosomal recessive neurological disorders in the breed; CDMC (caused by an SNX14 frameshift variant) produces cerebellar ataxia, tremors, and masticatory/generalized muscle inflammation between 10 weeks and 6 months of age, while DE causes progressive neurological dysfunction.",
      "Hip dysplasia, elbow dysplasia, and patellar luxation — developmental orthopaedic conditions monitored through pre-breeding radiographic and clinical evaluations.",
      "Chondrodystrophy (CDDY) and intervertebral disc disease (IVDD) risk — associated with the semi-dominant chromosome 12 FGF4 retrogene insertion that predisposes discs to premature calcification and herniation.",
      "Autoimmune thyroiditis (hypothyroidism) — an immune-mediated endocrine disorder monitored via periodic veterinary thyroid antibody panels.",
      "Neoplasia (tumours) — population studies in Swedish Tollers have documented increased relative risk of lymphoma in insured dogs and reported benign or malignant tumours (most frequently mammary and mast cell tumours) in 14% of surveyed living dogs; tumour rates vary by age, sex, and spay/neuter status and do not represent a uniform breed-wide cancer probability."
    ],

    preventiveCare: [
      "Verify documented pre-breeding health clearances for both parents before acquiring a puppy, including hip radiographs, current annual board-certified veterinary ophthalmologist eye exams, and breed-specific DNA test results.",
      "Understand the scope of genetic testing: a Clear result on the RESF1 juvenile Addison's disease (JADD) DNA test rules out that specific juvenile-onset variant (which itself has ~75%–76% penetrance in homozygotes), but does not rule out adult-onset Addison's disease or other immune-mediated disorders.",
      "Seek prompt veterinary evaluation if a young or adult dog develops acute neck pain, spinal stiffness, fever, shifting leg lameness after rest, waxing-and-waning lethargy, vomiting, diarrhoea, or increased drinking and urination, as early treatment is critical for SRMA, IMRD, and Addisonian crises.",
      "Maintain a lean, well-muscled body condition and avoid excessive high-impact jumping in growing puppies to protect the hips, elbows, knees, and intervertebral discs.",
      "Inspect, rinse, and dry the coat and drop ears after swimming to prevent moisture-related skin or ear irritation.",
      "Keep routine veterinary wellness examinations, dental care, nail trimming, and regionally appropriate parasite prevention and vaccination schedules up to date (working with your veterinarian to tailor vaccination protocols for dogs with personal or family histories of immune-mediated disease)."
    ],

    recommendedScreenings: [
      "Hip dysplasia radiographic evaluation (core pre-breeding requirement).",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist (core pre-breeding requirement).",
      "Progressive retinal atrophy (PRA-prcd) DNA test (core pre-breeding requirement).",
      "Juvenile Addison's disease (JADD / RESF1 c.3170C>T) DNA test — recommended to identify carriers and prevent homozygous matings while preserving genetic diversity.",
      "Cardiac laminopathy (CLAM / LMNA p.Asp576ThrfsTer124) DNA test and clinical veterinary cardiac evaluation.",
      "Cleft palate 1 (CP1 / DLX6) and cleft lip/palate/syndactyly (CLPS / ADAMTS20) DNA tests.",
      "Cerebellar degeneration-myositis complex (CDMC / SNX14), Collie eye anomaly (CEA/CH / NHEJ1), degenerative encephalopathy (DE), degenerative myelopathy (DM / SOD1), and chondrodystrophy (CDDY / FGF4) DNA tests.",
      "Elbow dysplasia radiographic evaluation, patellar luxation veterinary examination, and laboratory thyroid panel (including thyroglobulin autoantibodies).",
      "Optional coat-colour dilution (Buff / D-locus MLPH) DNA test for breeding planning (identifies recessive buff coat dilution, which is a conformation disqualification rather than a medical disorder; note also that Tollers tested to date have not carried the MDR1 drug-sensitivity mutation)."
    ],

    dentalCare:
      "Brush the teeth several times a week—ideally daily—using dog-specific toothpaste, and schedule regular veterinary dental assessments. Conformation standards require strong jaws with a complete, tight scissor bite.",

    earCare:
      "Check the high-set triangular drop ears weekly and after every swim or muddy outing. Gently clean and dry the outer ear and keep the feathering behind the ears free of mats, seeking veterinary advice if redness, foul odour, discharge, or head shaking occurs.",

    skinCare:
      "Part the dense, water-repellent double coat during weekly brushing to check the skin for ticks, burrs, hot spots (acute moist dermatitis), or uncharacteristic hair loss. Rinse off salt or marsh water after swimming and dry the thick undercoat thoroughly."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Active individuals and families who enjoy daily outdoor exercise, hiking, running, swimming, or canine sports",
      "Handlers interested in retriever field work, agility, flyball, dock diving, obedience, rally, or scent work",
      "Experienced or dedicated owners who use upbeat, varied, reward-based training and teach calm indoor settling",
      "Families with children who supervise interactions and teach respectful handling",
      "Households prepared for weekly brushing, twice-yearly seasonal coat sheds, and expressive excitement vocalisations"
    ],

    notIdealFor: [
      "Sedentary households or owners seeking a low-energy companion satisfied with brief casual walks",
      "People who leave a dog isolated alone for long workdays without daily physical and mental engagement",
      "Noise-sensitive households intolerant of a high-pitched, exuberant 'Toller scream' when the dog is excited",
      "Handlers who use harsh, repetitive, or heavy-handed training methods",
      "Owners expecting effortless off-leash reliability around waterfowl and wildlife without training and secure management"
    ]
  },

  funFacts: [
    "The Nova Scotia Duck Tolling Retriever is the smallest of all recognized retriever breeds, yet it has the strength and endurance to retrieve heavy geese from icy tidal waters.",
    "The word 'toll' comes from the Middle English tolian ('to entice' or 'lure'): hunters patterned the breed's shoreline work after wild red foxes, which dart and play along the water's edge to lure curious ducks within range.",
    "Developed in early nineteenth-century Little River Harbour in Yarmouth County, Nova Scotia, the breed was historically known as the Little River Duck Dog and the Yarmouth Toller before adopting its current name when registered in 1945.",
    "In 1995, Nova Scotia declared the Nova Scotia Duck Tolling Retriever its official Provincial Dog—making it the first Canadian dog breed honoured as a provincial symbol.",
    "At the thirty-three-letter mark (excluding spaces), 'Nova Scotia Duck Tolling Retriever' is the longest official breed name in North American studbooks.",
    "When eager to retrieve or work, many Tollers let out a famous high-pitched, trembling howl of pure anticipation known as the 'Toller scream' or 'Toller singing'.",
    "Unlike most dogs whose tails hang or wag level with the spine, an alert or working Toller carries its heavily feathered tail curving high over its back like a waving flag so offshore ducks can spot it through shoreline reeds.",
    "Tollers have strongly webbed, paddle-like feet and a water-repellent double coat so dense that icy water rarely reaches the skin."
  ],

  faq: [
    {
      question: "Where does the Nova Scotia Duck Tolling Retriever come from, and what were its early names?",
      answer:
        "The breed originated at the beginning of the nineteenth century in southwestern Nova Scotia, Canada—specifically around Little River Harbour in Yarmouth County. Before receiving its modern name upon national registration in 1945, it was known locally as the Little River Duck Dog and the Yarmouth Toller."
    },
    {
      question: "What does 'tolling' mean, and how does a Toller hunt?",
      answer:
        "Tolling comes from a Middle English word meaning 'to entice' or 'lure'. Modeled on the behaviour of wild red foxes, the dog runs, leaps, and fetches sticks or balls thrown from a hunter's blind along the shoreline while remaining completely silent. Its flashing red coat and waving feathered tail arouse the curiosity of ducks and geese swimming offshore, drawing them within gunshot range; once the birds are downed, the dog swims out to retrieve them."
    },
    {
      question: "How big is an adult Nova Scotia Duck Tolling Retriever?",
      answer:
        "It is the smallest of the retrievers. International and Canadian standards specify an ideal withers height for dogs over 18 months of 48 to 51 cm (19–20 inches) for males and 45 to 48 cm (18–19 inches) for females, with a tolerance of ±2.5 to 3 cm (±1 inch), and weight guidelines of 20 to 23 kg (45–51 pounds) for males and 17 to 20 kg (37–43 pounds) for females. American standards specify 18 to 21 inches (ideal 19 inches) for males, 17 to 20 inches (ideal 18 inches) for females, and typical weights of 35 to 50 pounds (16–23 kg) in proportion to bone and substance."
    },
    {
      question: "What coat colours and white markings are allowed?",
      answer:
        "The coat comes in shades of red and orange ranging from golden red to dark coppery red, with lighter shading on the feathering and the underside of the tail. Dogs commonly have at least one white marking on the tip of the tail, the feet (not extending above the pasterns), the chest, or as a facial blaze, though an otherwise sound dog without white markings is also accepted. Nose, lips, and eye rims must be flesh-coloured (blending with the coat) or black. Buff/silver dilution, solid brown/liver coat, black coat, pinto/tricolor patterning, or white on the shoulders, back, flanks, or around the ears are disqualifying faults."
    },
    {
      question: "What is the 'Toller scream'?",
      answer:
        "The 'Toller scream' (sometimes called 'Toller singing') is a piercing, high-pitched, trembling vocalisation that many Tollers make when they are intensely excited—most often when they see water, birds, or a retrieving dummy. Not every Toller screams to the same degree, and handlers avoid reinforcing it in hunting blinds or quiet neighbourhoods by rewarding calm, quiet focus before releasing the dog."
    },
    {
      question: "Is the Nova Scotia Duck Tolling Retriever a good family dog?",
      answer:
        "Yes, for active households. Tollers are deeply affectionate, playful, and patient with their own families and children when properly socialized and supervised. However, they are high-drive working dogs—not scaled-down Golden Retrievers—and can be reserved with unfamiliar people and restless if their daily physical and mental exercise needs are neglected."
    },
    {
      question: "How much exercise and grooming does a Toller need?",
      answer:
        "Tollers have high energy and need daily brisk walks or runs paired with purposeful mental work such as retrieving drills, swimming, agility, flyball, or scent work. Their medium-length, water-repellent double coat is relatively easy to maintain with a thorough weekly brushing (paying extra attention to the fine hair behind the ears and feathering) and daily brushing during spring and autumn coat sheds. The double coat should never be shaved."
    },
    {
      question: "Can a Toller live in an apartment?",
      answer:
        "Apartment living can succeed if the owner provides substantial daily outdoor exercise, retrieving and mental enrichment, and training to manage the breed's excitement vocalisations. Without committed daily activity and companionship, however, an apartment lifestyle is a poor fit."
    },
    {
      question: "What health conditions are researched or reported in the breed?",
      answer:
        "Key health concerns include hypoadrenocorticism (Addison's disease, both adult-onset and juvenile-onset), steroid-responsive meningitis-arteritis (SRMA), immune-mediated rheumatic disease (IMRD), juvenile cardiac laminopathy (CLAM), inherited eye conditions (PRA-prcd and Collie eye anomaly), congenital cleft palate syndromes (CP1 and CLPS), cerebellar degeneration-myositis complex (CDMC), hip dysplasia, intervertebral disc disease predisposition (CDDY), and autoimmune thyroiditis. Swedish population studies estimated living lifetime prevalence at 3.0% for IMRD and 3.5% for SRMA, and reported tumours of any type (benign or malignant) in 14% of surveyed living dogs."
    },
    {
      question: "What does the juvenile Addison's disease (JADD / RESF1) DNA test tell breeders and owners?",
      answer:
        "In 2026, researchers identified an autosomal recessive missense variant in the RESF1 gene (c.3170C>T / p.Pro1057Leu) associated with juvenile-onset Addison's disease (average onset 5 months, range 8 weeks to 12 months) and concurrent multiple autoimmune disorders. The variant has incomplete penetrance—approximately 75% to 76% of dogs with two copies (N/N -> JADD/JADD) develop Addison's disease by 1 year of age—and a carrier frequency of roughly 20% to 23% in tested cohorts. The DNA test allows breeders to avoid mating two carriers, but a Clear result does not prevent adult-onset Addison's disease."
    },
    {
      question: "What is cardiac laminopathy (CLAM) in Tollers?",
      answer:
        "Cardiac laminopathy (CLAM) is a fatal autosomal recessive dilated and fibrosing cardiomyopathy caused by a frameshift variant in the LMNA gene (identified in 2023). Affected puppies and young dogs typically suffer heart failure or sudden cardiac death before 1.5 to 2 years of age. A validated DNA test allows breeders to screen breeding stock and prevent affected litters."
    },
    {
      question: "Which health screenings should I ask a breeder for?",
      answer:
        "Ask for documented results of core pre-breeding evaluations—hip radiographs, a current annual examination by a board-certified veterinary ophthalmologist, and DNA testing for PRA-prcd—along with DNA panel results for juvenile Addison's disease (JADD / RESF1), cardiac laminopathy (CLAM / LMNA), cleft palate 1 (CP1), cleft lip/palate/syndactyly (CLPS), cerebellar degeneration-myositis complex (CDMC), Collie eye anomaly (CEA/CH), degenerative encephalopathy (DE), degenerative myelopathy (DM), and chondrodystrophy (CDDY), as well as elbow, patellar, cardiac, and thyroid evaluations where appropriate."
    }
  ],

  references: [
    "fci-nova-scotia-duck-tolling-retriever-standard",
    "nsdtr-club-canada-ckc-standard",
    "nsdtr-club-usa-breed-standard",
    "american-kennel-club-nova-scotia-duck-tolling-retriever",
    "american-kennel-club-nsdtr-history",
    "canadian-kennel-club-nova-scotia-duck-tolling-retriever",
    "nsdtr-club-canada-about-tollers",
    "nsdtr-club-canada-health",
    "american-kennel-club-sporting-group-health-testing",
    "nsdtr-club-usa-health-statement",
    "nsdtr-club-usa-health-overview",
    "nsdtr-immune-mediated-disease-patterns-2015",
    "nsdtr-immune-mediated-health-survey-2024",
    "nsdtr-resf1-jadd-study-2026",
    "uc-davis-vgl-jadd-nsdtr",
    "uc-davis-vgl-nsdtr-health-panel",
    "uc-davis-vgl-clam-nsdtr",
    "wikimedia-nsdtr-portrait-christopher-woo",
    "wikimedia-nsdtr-puppy-jarle-nystuen"
  ],

  evidence: {
    scientificName: {
      reliability: "unverified",
      sources: [],
      verifiedOn: null,
      note:
        "Canis lupus familiaris is the domestic-dog taxonomic designation used across the catalog; it is not stated as a breed-specific name in the conformation standards."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-nova-scotia-duck-tolling-retriever-standard",
          role: "verified",
          locator: "Brief Historical Summary: Little River Duck Dog, Toller"
        },
        {
          id: "nsdtr-club-canada-ckc-standard",
          role: "verified",
          locator: "Origin & Purpose: Little River Duck Dog, Yarmouth Toller, Toller"
        },
        {
          id: "nsdtr-club-canada-about-tollers",
          role: "verified",
          locator: "Toller Background and History: Little River Duck Dog, Yarmouth Toller, Toller"
        },
        {
          id: "canadian-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "Origin: Little River Duck Dog, Yarmouth Toller"
        },
        {
          id: "american-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "About the Breed & History: Toller, Little River Duck Dog"
        },
        {
          id: "american-kennel-club-nsdtr-history",
          role: "verified",
          locator: "Behind the 'Little River Duck Dog': Toller, Little River Duck Dog, Yarmouth Toller, decoy dog"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded to official_standard: FCI Standard No. 312 and the CKC Official Standard explicitly record the historical and common names Little River Duck Dog, Yarmouth Toller, and Toller."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-nova-scotia-duck-tolling-retriever-standard",
          role: "verified",
          locator: "CLASSIFICATION F.C.I.: Group 8 Retrievers, Flushing Dogs, Water Dogs. Section 1 Retrievers. With working trial."
        },
        {
          id: "nsdtr-club-canada-ckc-standard",
          role: "verified",
          locator: "Group 1: Sporting Dogs"
        },
        {
          id: "nsdtr-club-usa-breed-standard",
          role: "verified",
          locator: "Sporting Group"
        },
        {
          id: "american-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "cited",
          locator: "Sporting Group"
        },
        {
          id: "canadian-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "cited",
          locator: "Group 1 - Sporting Dogs"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Removed 'FCI Group 8 —' from user-facing text to comply with Rule 5. Classified in FCI Group 8, Section 1 (Retrievers, with working trial), in the CKC and AKC Sporting Group, and in the UK Gundog Group."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-nova-scotia-duck-tolling-retriever-standard",
          role: "verified",
          locator: "ORIGIN: Canada; BRIEF HISTORICAL SUMMARY:Nova Scotia in the beginning of the 19th Century"
        },
        {
          id: "nsdtr-club-canada-ckc-standard",
          role: "verified",
          locator: "Origin & Purpose: Little River Harbour in Yarmouth County, Nova Scotia"
        },
        {
          id: "nsdtr-club-usa-breed-standard",
          role: "verified",
          locator: "General Appearance: Yarmouth County, Nova Scotia"
        },
        {
          id: "nsdtr-club-canada-about-tollers",
          role: "verified",
          locator: "Toller Background and History: community of Little River Harbour in Yarmouth County, at the southwestern tip of Nova Scotia"
        },
        {
          id: "canadian-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "Origin: Little River district of Yarmouth County, Nova Scotia"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded to official_standard: verified across FCI Standard No. 312, the CKC Official Standard, the AKC/NSDTRC-USA Official Standard, and NSDTRCC."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-nova-scotia-duck-tolling-retriever-standard",
          role: "verified",
          locator: "Utilization, Brief Historical Summary, General Appearance, Behaviour/Temperament"
        },
        {
          id: "nsdtr-club-canada-ckc-standard",
          role: "verified",
          locator: "Origin & Purpose, General Appearance, Temperament"
        },
        {
          id: "nsdtr-club-usa-breed-standard",
          role: "verified",
          locator: "General Appearance, Size/Proportion/Substance (10:9 length-to-height), Temperament"
        },
        {
          id: "nsdtr-club-canada-about-tollers",
          role: "verified",
          locator: "Toller Background and History (1945 registration, 1995 Provincial Dog of Nova Scotia, tolling origin), Use in Hunting, Appearance, and Temperament"
        },
        {
          id: "american-kennel-club-nsdtr-history",
          role: "verified",
          locator: "Mi'kmaq and red-fox tolling origin, Middle English 'tolian', Kooikerhondje and St. John's Water Dog links, 1945 registration of 15 dogs, Sue Van Sloun 1978 imports, 1984 US club, 2003 recognition as 150th breed"
        },
        {
          id: "american-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "About the Breed, History, Exercise, and Training"
        },
        {
          id: "canadian-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "Origin, Temperament, and Activity Level"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Removed 'The Canadian Kennel Club admitted the breed in 1945' from overview.history to comply with Rule 5, and rewrote summary, description, history, originalPurpose, and currentRoles in original wording enriched with verified historical and anatomical details."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-nova-scotia-duck-tolling-retriever-standard",
          role: "verified",
          locator: "General Appearance, Head (male skull 14 cm between ears tapering to 3.8 cm at nose bridge, length ~23 cm nose to occiput), Eyes, Ears, Body, Tail, Limbs (strongly webbed feet), Gait, Coat, Colour, Size and Weight (48–51 cm / 45–48 cm ± 2.5 cm; 20–23 kg / 17–20 kg), Disqualifying Faults"
        },
        {
          id: "nsdtr-club-canada-ckc-standard",
          role: "verified",
          locator: "Size (48–51 cm / 19–20 in males, 45–48 cm / 18–19 in females, ±3 cm / 1 in allowed; 20–23 kg / 45–51 lb males, 17–20 kg / 37–43 lb females), Coat and Colour, Head, Tail, Gait, Disqualifications"
        },
        {
          id: "nsdtr-club-usa-breed-standard",
          role: "conflicting",
          locator: "Size, Proportion, Substance (18–21 in [ideal 19 in] males, 17–20 in [ideal 18 in] females; ±1 in over/under ideal is a fault; slightly rectangular 10:9 length-to-height ratio), Color, Disqualifications"
        },
        {
          id: "american-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "conflicting",
          locator: "Height (18–20 in male, 17–19 in female), Weight (35–50 pounds [15.9–22.7 kg])"
        },
        {
          id: "canadian-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "conflicting",
          locator: "Size: Males 48–51 cm (19–20 in) and 20–23 kg (45–51 lb); Females 45–48 cm (18–19 in) and 17–19.5 kg (37–43 lb)"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Stored physical.height (males 48–51 cm, females 45–48 cm) and physical.weight (males 20–23 kg, females 17–20 kg) follow FCI Standard No. 312 and the CKC Official Standard (Dec 1997). FCI/CKC height tolerances (±2.5 cm / ±3 cm [±1 in]) and the AKC/NSDTRC-USA standard ranges (18–21 in [ideal 19 in] / 17–20 in [ideal 18 in]; profile weight 35–50 lbs) are documented in distinctiveFeatures and FAQ."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "Life Expectancy: 12-14 years"
        }
      ],
      verifiedOn: "2026-10-21",
      note: "Verified at 12–14 years from the AKC breed profile."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "nsdtr-club-canada-about-tollers",
          role: "verified",
          locator: "Appearance: 'Because of the Toller's thick waterproof coat, some seasonal shedding is to be expected.'"
        },
        {
          id: "american-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "Breed Traits & Characteristics: Shedding Level (3/5) & Grooming ('Moderate seasonal shedding can be expected')"
        },
        {
          id: "canadian-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "Grooming: 'During shedding season, a daily brushing will help keep hair under control.'"
        }
      ],
      verifiedOn: "2026-10-21",
      note: "Verified across NSDTRCC, AKC, and CKC."
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-nova-scotia-duck-tolling-retriever-standard",
          role: "verified",
          locator: "FACIAL REGION - Lips: Fit fairly tightly, forming a gentle curve in profile, with no heaviness in flews; NECK: no indication of throatiness"
        },
        {
          id: "nsdtr-club-canada-ckc-standard",
          role: "verified",
          locator: "Head - Lips: Fit fairly tightly, forming a gentle curve in profile, with no heaviness in flews"
        },
        {
          id: "nsdtr-club-usa-breed-standard",
          role: "verified",
          locator: "Head - Lips: Fitting fairly tightly, forming a gentle curve in profile, with no heaviness in flews"
        },
        {
          id: "american-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "Breed Traits & Characteristics: Drooling Level (Less Likely to Drool)"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Populated from null: FCI Standard No. 312, the CKC Official Standard, and the AKC/NSDTRC-USA Official Standard all specify fairly tight-fitting lips with no heaviness in the flews and no throatiness, and the AKC breed profile rates Drooling Level at the lowest end ('Less Likely to Drool')."
    },

    temperament: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-nova-scotia-duck-tolling-retriever-standard",
          role: "verified",
          locator: "BEHAVIOUR / TEMPERAMENT: highly intelligent, easy to train, great endurance, strong and able swimmer, natural and tenacious retriever on land and from water"
        },
        {
          id: "nsdtr-club-canada-ckc-standard",
          role: "verified",
          locator: "Temperament: loving and playful to his family; can be reserved with strangers without being aggressive or overly shy; alert and determined"
        },
        {
          id: "nsdtr-club-usa-breed-standard",
          role: "verified",
          locator: "Temperament: highly intelligent, alert, outgoing, affectionate and eager to please; some reserve with strangers is acceptable"
        },
        {
          id: "nsdtr-club-canada-about-tollers",
          role: "verified",
          locator: "Temperament & Socialization (patient with children, reserved with strangers, strong-willed, Toller scream)"
        },
        {
          id: "american-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "About the Breed, Breed Traits & Characteristics, and Training ('Toller scream')"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded to official_standard: verified across FCI Standard No. 312, CKC Official Standard, AKC/NSDTRC-USA Official Standard, NSDTRCC, and AKC."
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-nova-scotia-duck-tolling-retriever-standard",
          role: "cited",
          locator: "Behaviour / temperament"
        },
        {
          id: "nsdtr-club-canada-about-tollers",
          role: "cited",
          locator: "Temperament and socialisation"
        },
        {
          id: "american-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "cited",
          locator: "Breed traits and characteristics"
        }
      ],
      verifiedOn: null,
      note:
        "The 1–5 scores are editorial estimates that summarize official standard and kennel/breed-club descriptions."
    },

    care: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "Grooming (weekly brushing, daily during shedding season, fine hair behind ears, weekly nail checks, regular tooth brushing), Exercise, and Training"
        },
        {
          id: "nsdtr-club-canada-about-tollers",
          role: "verified",
          locator: "Appearance (coat care and seasonal shedding), Temperament, and Socialization (caution with cats and small furry animals)"
        },
        {
          id: "canadian-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "Activity Level and Grooming"
        },
        {
          id: "nsdtr-club-usa-breed-standard",
          role: "verified",
          locator: "Coat: 'While the Toller is shown in natural coat, trimming is permitted on the ears, feet, pasterns and hocks to give a neat appearance.'"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Verified across AKC, NSDTRCC, CKC, and the NSDTRC-USA Official Standard."
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Consulted standards and kennel/breed-club profiles emphasize high daily physical and mental exercise requirements but do not establish a single universal daily minute range."
    },

    "care.livingEnvironment.climates": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Consulted sources describe a cold-water-repellent double coat and maritime heritage without defining a fixed climate classification list."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "canadian-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "Activity Level: 'Adapts well to most home environments, provided it is exercised daily. Because of its size, it can enjoy apartment life as long as regular outdoor activity is provided.'"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded from estimate to reliable_source: directly verified from the Canadian Kennel Club breed profile ('Because of its size, it can enjoy apartment life as long as regular outdoor activity is provided')."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "canadian-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "Activity Level: 'Adapts well to most home environments, provided it is exercised daily.'"
        },
        {
          id: "nsdtr-club-canada-about-tollers",
          role: "verified",
          locator: "Temperament & Exercise"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded from estimate to reliable_source: verified from CKC and NSDTRCC."
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "reliable_source",
      sources: [
        {
          id: "nsdtr-club-canada-about-tollers",
          role: "verified",
          locator: "Temperament: 'require enough daily physical stimulation to keep them happily tired; a bored Toller can become destructive'"
        },
        {
          id: "american-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "Exercise & Training"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded from estimate to reliable_source: verified from NSDTRCC ('a bored Toller can become destructive') and AKC."
    },

    nutrition: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "Nutrition: high-quality commercial or vet-supervised home-prepared diet appropriate to age (puppy, adult, senior) and activity level; monitor calorie consumption and training treats; clean, fresh water"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded from general_guidance to reliable_source: directly verified from the AKC Nova Scotia Duck Tolling Retriever Nutrition section."
    },

    "nutrition.feedingFrequency": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal puppy, adult, or senior daily meal count is prescribed by the consulted breed standards or kennel-club profiles."
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "nsdtr-club-canada-health",
          role: "verified",
          locator: "Health & DNA testing (PRA-prcd, CEA/CH, JADD, CP1, CLPS, DM, CDDY/IVDD, CDMC, CLAM, DE, Buff/Dilute; MDR1 negative note)"
        },
        {
          id: "nsdtr-club-usa-health-statement",
          role: "verified",
          locator: "CHIC required (Hip, ACVO Eye, prcd-PRA) and optional health screenings"
        },
        {
          id: "nsdtr-club-usa-health-overview",
          role: "verified",
          locator: "Required and recommended health testing and disease overview"
        },
        {
          id: "nsdtr-immune-mediated-disease-patterns-2015",
          role: "verified",
          locator: "Bremer et al. (Vet Rec 2015;177:74): n=2,890 insured Swedish Tollers; SRMA incidence 20/10,000 DYAR (RR 12 vs all breeds, RR 21 vs retrievers), IMRD 6.8/10,000 DYAR (RR 18 vs all breeds, RR 30 vs retrievers), lymphoma 15/10,000 DYAR (RR 2.8), lower ear and heart disease rates"
        },
        {
          id: "nsdtr-immune-mediated-health-survey-2024",
          role: "verified",
          locator: "Nilsson et al. (Acta Vet Scand 2024;66:39): n=935 living & 177 deceased Swedish Tollers; living prevalence IMRD 3.0% (median onset 5 yrs, 54% relapse) and SRMA 3.5% (70% onset <18 mos, 48% relapse); neoplasia of any type in 14% of living dogs (mammary 22%, mast cell 15%) and 38.4% of deceased dogs"
        },
        {
          id: "nsdtr-resf1-jadd-study-2026",
          role: "verified",
          locator: "Brown et al. (Sci Rep 2026;16:13194): RESF1 Chr27:29,736,795 c.3170C>T (p.Pro1057Leu) autosomal recessive variant with ~75% penetrance by 1 yr (mean/median onset 5 mos), 41.7%–70.8% concurrent autoimmune comorbidities, median survival 2.0 yrs"
        },
        {
          id: "uc-davis-vgl-jadd-nsdtr",
          role: "verified",
          locator: "JADD RESF1 test details (~75.9% penetrance, ~20–23% carrier rate, concurrent eye/immune signs)"
        },
        {
          id: "uc-davis-vgl-clam-nsdtr",
          role: "verified",
          locator: "Cardiac Laminopathy (CLAM): autosomal recessive LMNA p.Asp576ThrfsTer124 frameshift variant causing fatal juvenile/young-adult dilated and fibrosing cardiomyopathy (<1.5–2 yrs)"
        },
        {
          id: "uc-davis-vgl-nsdtr-health-panel",
          role: "verified",
          locator: "NSDTR Health Panel: CDMC (SNX14), CLAM (LMNA), CP1 (DLX6), CLPS (ADAMTS20), JADD (RESF1), CDDY (FGF4), DM (SOD1)"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Removed all 'OFA', 'OVC', 'PennHIP', 'breed-club', and 'breed-health resources' mentions from user-facing health strings to comply with Rule 5, and added the validated 2023 LMNA Cardiac Laminopathy (CLAM) mutation alongside full molecular and epidemiological stratification."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "nsdtr-club-canada-health",
          role: "verified",
          locator: "Health conditions and DNA tests"
        },
        {
          id: "nsdtr-club-usa-health-overview",
          role: "verified",
          locator: "Health & Genetics Overview"
        },
        {
          id: "nsdtr-immune-mediated-disease-patterns-2015",
          role: "verified",
          locator: "Incidence of SRMA, IMRD, and lymphoma in insured Swedish Tollers"
        },
        {
          id: "nsdtr-immune-mediated-health-survey-2024",
          role: "verified",
          locator: "Lifetime prevalence estimates for IMRD (3.0%), SRMA (3.5%), and neoplasia (14% living)"
        },
        {
          id: "nsdtr-resf1-jadd-study-2026",
          role: "verified",
          locator: "RESF1 c.3170C>T (p.Pro1057Leu) in juvenile Addison's disease and multiple autoimmune syndrome"
        },
        {
          id: "uc-davis-vgl-jadd-nsdtr",
          role: "verified",
          locator: "JADD test and incomplete penetrance"
        },
        {
          id: "uc-davis-vgl-clam-nsdtr",
          role: "verified",
          locator: "LMNA p.Asp576ThrfsTer124 in Cardiac Laminopathy (CLAM)"
        },
        {
          id: "uc-davis-vgl-nsdtr-health-panel",
          role: "verified",
          locator: "CDMC (SNX14), CLAM (LMNA), CP1 (DLX6), CLPS (ADAMTS20), JADD (RESF1), CDDY (FGF4), DM (SOD1)"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Stratifies molecularly characterized autosomal recessive variants (RESF1 JADD/MAS, LMNA CLAM, PRCD PRA, NHEJ1 CEA/CH, DLX6 CP1, ADAMTS20 CLPS, SNX14 CDMC, DE, SOD1 DM), semi-dominant FGF4 CDDY, immune-mediated syndromes (SRMA, IMRD, autoimmune thyroiditis), orthopaedic screening targets, and Swedish epidemiological survey data."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "cited",
          locator: "Health and general care"
        },
        {
          id: "nsdtr-club-canada-health",
          role: "cited",
          locator: "Breeding health tests and vaccination/health precautions"
        },
        {
          id: "uc-davis-vgl-jadd-nsdtr",
          role: "cited",
          locator: "JADD test interpretation"
        },
        {
          id: "nsdtr-immune-mediated-health-survey-2024",
          role: "cited",
          locator: "Clinical signs and relapse monitoring for IMRD and SRMA"
        }
      ],
      verifiedOn: null,
      note:
        "Synthesizes pre-breeding test verification, JADD penetrance interpretation, early recognition of SRMA/IMRD/Addisonian signs, and routine preventive veterinary care."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-sporting-group-health-testing",
          role: "verified",
          locator: "Nova Scotia Duck Tolling Retriever recommended health tests"
        },
        {
          id: "nsdtr-club-usa-health-statement",
          role: "verified",
          locator: "CHIC required (Hip, ACVO Eye, prcd-PRA) and optional screenings"
        },
        {
          id: "nsdtr-club-usa-health-overview",
          role: "verified",
          locator: "Required and recommended health screenings"
        },
        {
          id: "nsdtr-club-canada-health",
          role: "verified",
          locator: "Orthopaedic, eye, cardiac, thyroid, and DNA test recommendations (including CLAM, DE, Buff/Dilute, and MDR1 negative status)"
        },
        {
          id: "uc-davis-vgl-jadd-nsdtr",
          role: "verified",
          locator: "RESF1 JADD DNA test"
        },
        {
          id: "uc-davis-vgl-clam-nsdtr",
          role: "verified",
          locator: "LMNA CLAM DNA test"
        },
        {
          id: "uc-davis-vgl-nsdtr-health-panel",
          role: "verified",
          locator: "UC Davis VGL NSDTR Health Panel"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Removed 'OFA, OVC or PennHIP' and 'breed-club' from user-facing strings to comply with Rule 5, while documenting core (hip radiographs, annual ophthalmologist exam, PRA-prcd DNA test) and recommended DNA/clinical screenings here."
    },

    "health.dentalCare": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-nova-scotia-duck-tolling-retriever-standard",
          role: "verified",
          locator: "FACIAL REGION - Jaws/Teeth: Strong enough to carry a sizeable bird; tight scissor bite; complete dentition required"
        },
        {
          id: "american-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "Grooming: 'The teeth should be brushed regularly.'"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded from general_guidance to official_standard: verified from FCI Standard No. 312 dentition rules (complete dentition, tight scissor bite) and AKC Grooming dental-brushing guidance."
    },

    "health.earCare": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "Grooming: 'Pay particular attention to the fine hair behind and under the ears, which has a greater tendency to mat.'"
        },
        {
          id: "nsdtr-club-canada-about-tollers",
          role: "verified",
          locator: "Appearance & Grooming"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded from general_guidance to reliable_source: verified from AKC and NSDTRCC grooming guidance."
    },

    "health.skinCare": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "Grooming (weekly brushing, seasonal shedding)"
        },
        {
          id: "nsdtr-club-canada-about-tollers",
          role: "verified",
          locator: "Appearance (thick water-repellent double coat)"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded from general_guidance to reliable_source: verified from AKC and NSDTRCC coat and skin care guidance."
    },

    suitability: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "About the Breed, Breed Traits & Characteristics, Exercise, Grooming, and Training"
        },
        {
          id: "nsdtr-club-canada-about-tollers",
          role: "verified",
          locator: "Temperament, Exercise, and Socialization"
        },
        {
          id: "canadian-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "Temperament and Activity Level (apartment and home adaptability with daily exercise)"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded from estimate to reliable_source: suitability flags and lists are grounded in AKC, NSDTRCC, and CKC guidance."
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Suitability depends on the individual owner's physical activity level and support network, so a blanket breed-level boolean is not recorded."
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-nova-scotia-duck-tolling-retriever-standard",
          role: "verified",
          locator: "Utilization, Brief Historical Summary, Tail, and Limbs (strongly webbed feet)"
        },
        {
          id: "nsdtr-club-canada-about-tollers",
          role: "verified",
          locator: "Toller Background and History (1945 CKC registration, 1995 Provincial Dog of Nova Scotia, red-fox tolling behaviour, Toller scream)"
        },
        {
          id: "american-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "About the Breed & Did You Know? (smallest of the retrievers, longest AKC breed name, Toller scream, webbed feet)"
        },
        {
          id: "american-kennel-club-nsdtr-history",
          role: "verified",
          locator: "Middle English 'tolian', Mi'kmaq and red-fox tolling tradition, 1945 registration, 2003 AKC recognition"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded to official_standard: all fun facts are verified across FCI Standard No. 312, NSDTRCC, and AKC, and written with zero source/registry name mentions."
    },

    faq: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-nova-scotia-duck-tolling-retriever-standard",
          role: "verified",
          locator: "Origin, Utilization, Coat, Colour, Size and Weight (48–51 cm / 45–48 cm ± 2.5 cm; 20–23 kg / 17–20 kg), Disqualifying Faults"
        },
        {
          id: "nsdtr-club-canada-ckc-standard",
          role: "verified",
          locator: "Origin & Purpose, Size (±3 cm / 1 in tolerance), Coat and Colour, Disqualifications"
        },
        {
          id: "nsdtr-club-usa-breed-standard",
          role: "verified",
          locator: "Size (18–21 in [ideal 19 in] / 17–20 in [ideal 18 in]), Color, Disqualifications"
        },
        {
          id: "american-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "Weight (35–50 lbs), Life Expectancy (12–14 years), Exercise, Grooming, Training ('Toller scream')"
        },
        {
          id: "canadian-kennel-club-nova-scotia-duck-tolling-retriever",
          role: "verified",
          locator: "Apartment suitability and activity level"
        },
        {
          id: "nsdtr-immune-mediated-health-survey-2024",
          role: "verified",
          locator: "Living prevalence estimates (IMRD 3.0%, SRMA 3.5%, neoplasia 14%)"
        },
        {
          id: "nsdtr-resf1-jadd-study-2026",
          role: "verified",
          locator: "RESF1 c.3170C>T (p.Pro1057Leu) JADD penetrance (~75%) and multiple autoimmune syndrome"
        },
        {
          id: "uc-davis-vgl-jadd-nsdtr",
          role: "verified",
          locator: "JADD RESF1 test interpretation (~75.9% penetrance, ~20–23% carrier frequency)"
        },
        {
          id: "uc-davis-vgl-clam-nsdtr",
          role: "verified",
          locator: "LMNA p.Asp576ThrfsTer124 Cardiac Laminopathy (CLAM)"
        },
        {
          id: "nsdtr-club-canada-health",
          role: "verified",
          locator: "Recommended orthopaedic, eye, cardiac, thyroid, and DNA tests"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Removed 'parent-club' from FAQ #12 to comply with Rule 5, and rewrote all 12 FAQs in self-contained original wording."
    }
  },

  updatedOn: "2026-10-21"
};
