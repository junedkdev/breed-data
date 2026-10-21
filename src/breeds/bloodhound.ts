import type { Breed } from "../schema/breed.types";

export const bloodhound: Breed = {
  slug: "bloodhound",
  name: "Bloodhound",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Chien de Saint-Hubert",
    "St. Hubert Hound",
    "Sleuth Hound",
    "Sleuth-Hound",
    "Bluthund",
    "Perro de San Huberto"
  ],

  group:
    "Scent Hounds and Related Breeds; Section 1.1 — Large-sized Scent Hounds (also classified in the Hound Group)",

  origin: {
    country: "Belgium",
    region: "Ardennes region, historically associated with the Abbey of Saint-Hubert"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bloodhound_Puppy.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Bloodhound_Puppy.jpg",
      title: "Bloodhound Puppy.jpg",
      description: "A Bloodhound puppy.",
      creator: "Meagan (Flickr account: Jakey Face)",
      uploader: "Ltshears, via Flickr Upload Bot",
      capturedOn: "2009-03-07",
      uploadedOn: "2012-09-13",
      width: 873,
      height: 1100,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Meagan (Flickr account: Jakey Face), via Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:Bloodhound_Puppy.jpg. License: https://creativecommons.org/licenses/by/2.0/. Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bloodhound_black_and_tan.JPG",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Bloodhound_black_and_tan.JPG",
      title: "Bloodhound black and tan.JPG",
      description: "A male black-and-tan Bloodhound.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2013-09-21",
      uploadedOn: "2013-10-23",
      width: 630,
      height: 442,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Bloodhound_black_and_tan.JPG. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21"
    }
  ],

  overview: {
    summary:
      "A massive, noble, and powerfully built scent hound originating from the Ardennes of Belgium, world-renowned for its unmatched cold-trail scenting ability, long velvety curling ears, abundant head and neck folds, and gentle, sensitive nature at home.",

    description:
      "The Bloodhound—officially known in continental Europe as the Chien de Saint-Hubert and historically celebrated as the 'Sleuth Hound'—is the most powerful and substantial of all scent hounds. Built on a harmonious rectangular outline (roughly a 10:9 ratio of body length to withers height, with chest depth equal to half the withers height), it combines heavy, round bone and strong muscle with a solemn, dignified bearing and a free, elastic, slightly rolling trot capable of covering ground effortlessly for hours. Its majestic head—measuring 30 cm (12 inches) or more in adult males and 28 cm (11 inches) or more in females—is narrow relative to its length, crowned by a pronounced occipital peak, and draped in thin, supple skin that falls into deep forehead and cheek ridges and a pronounced double dewlap when the nose is lowered to the ground. Extremely long, low-set, velvety ears curl inward and backward past the tip of the nose, working alongside the loose facial folds to funnel and trap scent particles. Off duty, the Bloodhound is a gentle, placid, and affectionate companion that gets along well with people and other dogs, yet on a trail it becomes single-minded and unstoppable. Prospective owners must be prepared for heavy drooling (including 15-foot 'slobber missiles' when the dog shakes its head), a resonant baying voice, a high physical fence, leashed exercise, and daily cleaning of the ears and facial folds.",

    history:
      "One of the oldest scent-hunting breeds, the modern Bloodhound traces its primary lineage to the Ardennes forest region of Belgium, where black and black-and-tan pack hounds were bred from the seventh century onward by the monk Hubert (later Bishop of Liège and canonised as Saint Hubert, the patron saint of hunters) and maintained for centuries by monks at the Abbey of Saint-Hubert to hunt wild boar and stag. In 1066, William the Conqueror brought Saint-Hubert hounds—alongside white hounds of similar type known as Talbots—to England, where the breed was recorded by around 1300 and acquired the English name 'Bloodhound', derived from 'blooded hound' (meaning a hound of pure, aristocratic breeding kept carefully recorded) or from its skill in tracking wounded, bleeding game. Along the Anglo-Scottish border through the sixteenth century, these hounds were known as 'sleuth hounds' and were used to track cattle raiders ('reivers'), with law dictating that anyone who barred a sleuth hound on a hot trail was deemed an accomplice. By the seventeenth century, scientist Robert Boyle documented a Bloodhound trailing a quarry seven miles along busy thoroughfares to an upstairs room, and in 1805 the Thrapston Association for the Prevention of Felons in England recorded the first organized law-enforcement use of a Bloodhound to catch poachers and thieves. Exported to North America by the nineteenth century (where the breed was formally registered in 1885 and where trailing evidence from a proven Bloodhound is accepted in courts of law, though historical records also note its misuse in the antebellum American South), North American and continental lines later helped replenish British stock after the breed nearly died out in Britain during the Second World War.",

    originalPurpose:
      "Trailing large game (such as wild boar and deer) and tracking wounded animals as a leash hound, as well as long-distance human scent-trailing (mantrailing) in law-enforcement and search-and-rescue operations.",

    currentRoles: [
      "Law-enforcement, search-and-rescue, and forensic human mantrailing dog",
      "Leash hound for tracking wounded game and blood-scenting trials",
      "Competitive mantrailing, tracking, and scent-work participant",
      "Devoted family and household companion",
      "Active leashed hiking and walking partner"
    ]
  },

  physical: {
    sizeCategory: "Large to Giant",

    height: {
      unit: "cm",
      male: {
        min: 64,
        max: 72
      },
      female: {
        min: 58,
        max: 66
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 46,
        max: 54
      },
      female: {
        min: 40,
        max: 48
      }
    },

    lifespanYears: {
      min: 10,
      max: 12
    },

    coatType:
      "Short, dense, close-lying, and weatherproof single coat that is quite harsh on the body, very short, soft, and velvety on the head and ears, and slightly longer and coarser (about 5 cm / 2 inches) along the underside of the tapering tail.",

    coatLength: "Short",

    coatColors: [
      "Black and tan (bicolour with either a predominant black mantle or a more limited dorsal black saddle, sometimes interspersed with lighter or badger-coloured hairs)",
      "Liver and tan (bicolour in mantle or saddle pattern with brown/liver nose and lip pigment, sometimes interspersed with lighter or badger-coloured hairs)",
      "Red (unicolour ranging from light red/blond to deep red; across all three colours, a small amount of white on the forechest, toes/feet, and tip of the tail is permissible, whereas widespread white reaching the wrists/hocks or white patches on the muzzle or blaze are disqualifying faults)"
    ],

    sheddingLevel:
      "Moderate year-round, with heavier seasonal shedding twice a year in late spring and late autumn.",

    droolingLevel: "High",

    distinctiveFeatures: [
      "Most powerful and massive of all scent hounds, built on a rectangular 10:9 body-length-to-height ratio with a deep, oval chest forming a prominent keel between the forelegs (chest depth equal to half the withers height)",
      "Majestic, narrow, flat-sided head (measuring 3/7 of body length, or at least 30 cm [12 in] in males and 28 cm [11 in] in females) with a very pronounced occipital peak ('cone head'), slight stop, and deep, square-profiled muzzle equal in length to the skull",
      "Abundant, thin, supple skin over the forehead and cheeks that falls into deep pendulous ridges and wrinkles when the head is carried low, blending into long upper lips (hanging about 5 cm below the lower jaw) and a pronounced double dewlap (less marked in females)",
      "Extremely long, thin, velvety ears ('leathers') set at or below eye level, falling in graceful inward- and backward-curling folds that reach well beyond the tip of the nose",
      "Moderate-sized, oval dark brown or hazel eyes (amber to yellow in liver-and-tan or red hounds without a black saddle/mantle) conveying a solemn, wise, and dignified expression; conformation standards emphasize that loose skin and eyelid shape must never obscure vision or allow eyelashes to irritate the cornea",
      "High-set, thick, tapering tail ('stern') furnished with ~5 cm harsher hair underneath and carried high in a graceful sabre/scimitar curve on the move without curling over the back",
      "Elastic, swinging, ground-covering trot with a characteristic slight roll, strong rear drive, and straight, heavy-boned legs ending in compact, well-knuckled cat feet",
      "Adult withers height of 68 cm ideal (64–72 cm with ±4 cm tolerance) for males and 62 cm ideal (58–66 cm with ±4 cm tolerance) for females in international standards—or 63–69 cm (25–27 in, average 66 cm / 26 in) for males and 58–63 cm (23–25 in, average 61 cm / 24 in) in British and American standards—with weights of 46–54 kg (101–119 lbs) for males and 40–48 kg (88–106 lbs) for females internationally (41–50 kg [90–110 lbs] for males and 36–45.5 kg [80–100 lbs] for females in British and American standards, and tall individuals occasionally exceeding 55–60 kg / 120–130+ lbs)"
    ]
  },

  temperament: {
    traits: [
      "Gentle, placid, and kind-hearted ('nature's gentleman') indoors",
      "Deeply affectionate and strongly bonded to its owner and family",
      "Sociable, courteous, and non-quarrelsome with people, kennelmates, and other dogs",
      "Relentless, single-minded, and independent once locked onto a scent trail",
      "Equally sensitive to praise and correction",
      "Somewhat reserved or shy, yet never aggressive",
      "Stubborn and inclined to test boundaries if not guided with patient consistency",
      "Rarely barks like a guard dog, but communicates with a resonant, melodious bay or howl ('rooooo')",
      "Curious mouth-explorer and counter-surfer capable of reaching standard kitchen tables without lifting its paws"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: 2,
      independence: 4,
      trainability: 3,
      barking: 4,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "Moderate to high. Despite a laid-back indoor demeanour, the Bloodhound was bred to follow a scent trail for hours and requires daily sustained leashed walks, safe enclosed play, and regular nose-work enrichment.",

      minutesPerDay: null,

      activities: [
        "Long daily walks and hikes on a strong leash and harness where the dog can safely sniff",
        "Mantrailing (human scent trailing), tracking trials, and blood-scenting games",
        "Structured nose work and hidden-scent search games in the yard or home",
        "Supervised play and romping with other dogs in a securely fenced enclosure",
        "Jogging, swimming, or rally/obedience exercises for skeletally mature adult hounds"
      ]
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush weekly with a rubber grooming mitt, hound glove, or medium-bristle brush to remove dead hair and distribute natural skin oils; increase brushing frequency during spring and autumn coat sheds.",

      bathing:
        "Bathe as needed (every few weeks to months, or when smelly) using a mild dog-safe shampoo, rinse thoroughly, and dry all facial, neck, and dewlap folds completely so moisture is never trapped against the skin.",

      notes: [
        "Inspect and wipe the facial wrinkles, lip folds, and neck dewlap daily with a warm damp cloth or pet-safe wipe, then dry thoroughly to prevent moisture, food debris, and skin-fold dermatitis.",
        "Check the long, heavy hanging ears ('leathers') daily—and clean them regularly with a veterinarian-approved ear cleanser—because they dip into food and water bowls, sweep the ground, and trap warmth and moisture.",
        "Keep 'slobber cloths' (towels) handy around the house and when travelling: a head shake can fling ropes of saliva 15 feet across furniture, walls, and clothing.",
        "Check the eyes daily for dust, debris, redness, or irritation from eyelid folds.",
        "Trim toenails regularly and inspect the compact cat feet after outdoor walks.",
        "Brush the teeth regularly with dog-specific toothpaste."
      ]
    },

    training: {
      difficulty:
        "Moderate to challenging. Affectionate and capable of remarkable focus in scent work, yet independent-minded, quick to become set in its ways, and deeply sensitive to harsh handling.",

      tips: [
        "Start puppy socialization and basic obedience classes early so polite leash manners and household rules are established before the dog reaches 40 to 54+ kg.",
        "Be firm, patient, and kind, using positive reinforcement (high-value food rewards and warm praise); Bloodhounds are equally sensitive to kindness and correction and will shut down or resist under harsh methods.",
        "Never trust a Bloodhound off-leash in an unenclosed area—even obedience-titled hounds will ignore recall when they strike a compelling scent and have no road or traffic sense.",
        "Enclose yards with a sturdy 5- to 6-foot (1.5–1.8 m) above-ground fence and guard against digging under the fence line.",
        "Do not rely on electronic ('invisible') underground fences: a Bloodhound's high pain threshold, thick loose neck skin, and intense scent drive allow it to charge right through the shock zone and never return.",
        "Dog-proof counters, tables, and rubbish bins: an adult Bloodhound stands tall enough to rest its chin on a 29-inch dining table with all four feet on the floor and is notorious for swallowing non-food items.",
        "Channel the dog's natural nose into mantrailing or tracking games, which build a strong cooperative bond between handler and hound."
      ],

      socialization:
        "Provide early, calm, positive exposure to varied people, friendly dogs, children, surfaces, and veterinary/grooming handling. Because Bloodhounds are gentle pack hounds that enjoy canine company but are often unaware of their own bulk, supervise interactions with young children (particularly toddlers under 5 years old who can be accidentally knocked over by a wagging tail or playful nudge)."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [],

      aloneTimeTolerance:
        "Low to moderate. As pack-oriented hounds that bond closely with their families, Bloodhounds left isolated alone for long periods often become bored, bay loudly enough to disturb neighbours, or chew furniture and household objects."
    }
  },

  nutrition: {
    dietType:
      "Complete and balanced, high-quality large-breed dog food (commercial or veterinarian-formulated home-prepared diet) matched to life stage (large-breed puppy, adult, or senior), body condition, and workload.",

    feedingFrequency: {
      puppy:
        "Several smaller measured meals daily using a large-breed puppy formula to support steady, controlled skeletal growth, adjusted with veterinary guidance.",
      adult:
        "Two to three smaller meals daily rather than a single large meal to help reduce the risk of life-threatening gastric dilatation-volvulus (bloat).",
      senior:
        "Two to three smaller daily meals tailored to body condition, mobility, dental health, and veterinary advice."
    },

    guidelines:
      "Feed measured portions appropriate for a large, deep-chested hound (typically 4 to 8 cups of dry food daily for an 80- to 110-pound adult depending on calorie density, age, and activity level, confirmed with a veterinarian). Divide the daily ration into two or three smaller meals, avoid elevated food bowls unless specifically directed by a veterinarian, and restrict vigorous exercise for at least an hour before and after mealtimes to help minimize gastric dilatation-volvulus (GDV) risk. Keep clean, fresh water available at all times (wiping the ears and flews after drinking).",

    considerations: [
      "Feed a dedicated large-breed puppy diet during growth so bone and joint development proceed at a steady pace without excess weight.",
      "Divide daily food into two or three smaller meals and avoid strenuous exercise immediately before or after eating to reduce bloat (GDV) risk.",
      "Discuss prophylactic gastropexy ('stomach tacking' surgery, often performed during spaying or neutering) with your veterinarian, as epidemiological studies rank the Bloodhound among the breeds at highest risk of GDV.",
      "Keep all non-food objects, socks, rocks, corn cobs, and rubbish strictly out of reach; Bloodhounds are notorious for indiscriminate ingestion leading to gastrointestinal foreign-body obstruction.",
      "Monitor body condition score regularly and deduct training treats from the daily food ration so excess weight does not overload the hips and elbows.",
      "Consult a veterinarian before adding joint supplements (such as omega-3 fatty acids, glucosamine, or chondroitin)."
    ],

    note:
      "Exact caloric needs vary widely across individuals ranging from 36 to over 54 kg (80 to 130+ lbs) and between working mantrailing hounds and family companions; establish portion sizes and bloat-prevention routines with a veterinarian."
  },

  health: {
    overview:
      "The Bloodhound has an average life expectancy of 10 to 12 years, and health priorities centre on risks linked to its large, deep-chested build, heavy bone, abundant skin folds, and long pendulous ears. In both British breed-health surveys and a peer-reviewed UK epidemiological study of 15,881 deceased and 36,006 living pedigree dogs across 165–169 breeds (Evans & Adams, 2010), gastric dilatation-volvulus (GDV / bloat) and cancer were identified as the two leading causes of mortality, with the Bloodhound ranking among the breeds at greatest risk of both GDV mortality and GDV morbidity. Orthopaedic, cardiac, ocular, and neurological screening data are tracked in North American and British health registries: in cumulative North American orthopaedic registry evaluations through December 2014, 25.4% of 2,941 hip evaluations were graded abnormal (72.6% normal), 14.2% of 1,224 elbow evaluations were abnormal (85.3% normal), 0.7% of 732 cardiac evaluations were abnormal (98.1% normal), 2.7% of 150 patellar evaluations were abnormal (97.3% normal), 5.7% of 159 thyroid panels were abnormal with 19.5% equivocal, and among 311 dogs DNA-tested for degenerative myelopathy (SOD1), 49.5% tested clear/normal, 44.1% carriers, and 6.4% genetically at-risk/affected (figures reflecting tested cohorts rather than random population prevalence). Conformation-related concerns include eyelid abnormalities (entropion, ectropion, prolapsed third-eyelid gland ['cherry eye'], and keratoconjunctivitis sicca ['dry eye']), recurrent otitis externa, and skin-fold dermatitis or atopic dermatitis, though careful selective breeding has reduced severe skin and eyelid exaggerations (reflected in the breed's reclassification from Category 3 to Category 2 in the United Kingdom effective 1 January 2025, alongside a reported breed-average inbreeding coefficient of 10.0%).",

    commonConditions: [
      "Gastric dilatation-volvulus (GDV / gastric torsion / bloat) — a sudden, life-threatening emergency in which the stomach distends with gas and twists on its axis; UK epidemiological research (Evans & Adams, 2010) and breed mortality surveys identify the Bloodhound as one of the breeds at highest risk of GDV morbidity and mortality.",
      "Hip dysplasia and elbow dysplasia — developmental joint malformations causing osteoarthritic pain and lameness; in North American registry statistics, 25.4% of 2,941 tested Bloodhounds showed hip dysplasia and 14.2% of 1,224 showed elbow dysplasia.",
      "Eyelid and ocular surface disorders — entropion (inward-rolling eyelid causing eyelashes to rub the cornea), ectropion (outward-sagging lower lid exposing the conjunctiva), prolapsed gland of the third eyelid ('cherry eye'), and keratoconjunctivitis sicca ('dry eye') linked to loose facial skin and heavy flews.",
      "Recurrent otitis externa (ear canal infections) — the long, heavy, low-set ears ('leathers') restrict airflow and trap moisture, wax, and debris, predisposing the ear canals to bacterial and yeast overgrowth.",
      "Skin-fold dermatitis (intertrigo), atopic dermatitis, and eczema — trapped moisture, saliva, and friction within the deep forehead, cheek, lip, and neck folds can cause bacterial or yeast skin infections.",
      "Gastrointestinal foreign-body ingestion and obstruction — Bloodhounds are notorious for swallowing non-food objects, rocks, clothing, or household items, frequently requiring emergency veterinary intervention.",
      "Neoplasia (cancer) — identified alongside gastric torsion as one of the two leading causes of death in British breed health surveys, a risk shared across many large and giant breeds.",
      "Degenerative myelopathy (DM) — a late-onset (typically 8+ years) progressive spinal cord neuropathy associated with the SOD1 gene; in North American DNA-testing statistics of 311 Bloodhounds, 44.1% were carriers and 6.4% tested genetically at risk.",
      "Congenital cardiac disease, autoimmune thyroiditis (hypothyroidism), and patellar luxation — monitored through pre-breeding cardiac auscultation/echocardiography, thyroid antibody panels, and knee examinations."
    ],

    preventiveCare: [
      "Learn the emergency warning signs of gastric dilatation-volvulus (GDV)—distended or tight abdomen, unproductive retching, restlessness, stretching in pain, pale gums, or sudden collapse—and seek immediate emergency veterinary care if suspected.",
      "Feed two to three smaller meals daily rather than one large meal, avoid vigorous exercise before and after eating, and discuss prophylactic gastropexy ('stomach tacking') with your veterinarian.",
      "Inspect and clean the hanging ears and wipe and thoroughly dry the facial, lip, and neck folds daily, especially after drinking, eating, bathing, or swimming.",
      "Verify documented pre-breeding health clearances for both parents before acquiring a puppy, including hip and elbow radiographs, veterinary cardiac evaluation, eye examination, and degenerative myelopathy (SOD1) DNA status (as well as low pedigree inbreeding coefficient).",
      "Keep counters, rubbish bins, laundry, and yard areas clear of swallowable objects to prevent foreign-body intestinal obstructions.",
      "Maintain a lean, well-muscled body condition and avoid over-exercising or jogging growing puppies before skeletal maturity to protect the hips and elbows."
    ],

    recommendedScreenings: [
      "Hip dysplasia radiographic evaluation (core pre-breeding requirement; distraction-index hip evaluation is also used as an optional screening tool).",
      "Elbow dysplasia radiographic evaluation (core pre-breeding requirement).",
      "Cardiac evaluation by a qualified veterinarian—preferably a board-certified veterinary cardiologist or specialist, with echocardiography when indicated (core pre-breeding requirement).",
      "Ophthalmic examination by a board-certified veterinary ophthalmologist or accredited eye-scheme examiner (recommended in British breeding guidance and optional in North American health certification).",
      "Degenerative myelopathy (DM / SOD1) DNA test from an approved laboratory (optional pre-breeding test in North American and British health programs).",
      "Patellar luxation veterinary evaluation and laboratory thyroid panel (optional pre-breeding evaluations, alongside permanent microchip or tattoo identification and pedigree inbreeding-coefficient review)."
    ],

    dentalCare:
      "Brush the teeth regularly with dog-specific toothpaste and schedule periodic veterinary dental assessments. Conformation standards require strong jaws with complete dentition in a regular scissor bite (a pincer/level bite is also tolerated, whereas overshot, undershot, or wry jaws are disqualifying faults).",

    earCare:
      "Inspect the long, velvety, low-set ears daily for redness, foul odour, excess wax, or discharge, and wipe them clean after meals and drinks. Clean the ear canals routinely—and after every bath or swim—using a veterinarian-approved ear cleanser, drying carefully without inserting cotton swabs deep into the canal.",

    skinCare:
      "Check and wipe the facial wrinkles, hanging flews, and double dewlap daily with a damp cloth or pet-safe facial wipe, then dry every fold thoroughly so trapped saliva or water cannot cause skin-fold dermatitis. Monitor the rest of the short coat for parasites, hot spots, or allergic irritation."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Active, patient owners and handlers who enjoy mantrailing, tracking, scent work, and long daily leashed hikes",
      "Households with a securely fenced yard (5 to 6 feet high) and ample indoor space for a 40- to 54+ kg hound",
      "People who are relaxed about housekeeping and comfortable with heavy drooling ('slobber cloths') and daily ear and wrinkle care",
      "Families with children (ideally aged 5 and older, with adult supervision) or multi-dog homes seeking a gentle, pack-friendly companion",
      "Owners financially prepared for the food, preventive gastropexy, and veterinary care costs of a large-to-giant breed"
    ],

    notIdealFor: [
      "Fastidious or house-proud owners bothered by ropes of drool on walls, ceilings, furniture, and clothing",
      "Apartment dwellers or densely packed urban neighbourhoods sensitive to deep, resonant baying and howling",
      "Owners seeking reliable off-leash recall in unfenced areas or expecting an Electronic/Invisible fence to contain a scent hound",
      "People who want an aggressive property guard dog rather than a friendly, non-quarrelsome pack hound",
      "Sedentary households or homes where the dog is left isolated alone for long workdays"
    ]
  },

  funFacts: [
    "The word 'blood' in Bloodhound does not refer to bloodthirstiness: it derives from 'blooded hound', meaning a hound of pure, aristocratic breeding whose lineage was carefully preserved (along with its historic work tracking wounded game).",
    "So legendary is the breed's nose—estimated to contain roughly 250 to 300 million olfactory receptors—that trailing evidence from a proven Bloodhound is admissible in courts of law.",
    "The Bloodhound's long, velvety ears ('leathers') and loose facial wrinkles are functional scent-tracking tools: as the dog lowers its head, the ears sweep scent particles up from the ground while the skin folds trap them near the nostrils.",
    "In 1805, the Thrapston Association for the Prevention of Felons in England recorded the first organized law-enforcement use of a Bloodhound, acquiring a hound to track down poachers and thieves.",
    "Along the Scottish border up to the late sixteenth century, the Bloodhound was known as the 'sleuth hound' (the origin of the modern word 'sleuth' for a detective), and anyone who refused entry to a sleuth hound pursuing a cattle thief was legally considered an accomplice.",
    "In the seventeenth century, pioneering chemist Robert Boyle documented a trial in which a Bloodhound followed a person's scent trail for seven miles along busy footpaths and located the quarry in an upstairs room.",
    "Standing up to 68–72 cm (27+ inches) at the shoulder, an adult male Bloodhound can rest its chin directly on a standard 29-inch dining table and help itself to dinner without lifting a single paw off the floor.",
    "In 2022, a Bloodhound named Trumpet made dog-show history by winning Best in Show at the 146th Westminster Dog Show—the first Bloodhound ever to take the top prize."
  ],

  faq: [
    {
      question: "Where does the Bloodhound originate, and why is it also called the Chien de Saint-Hubert?",
      answer:
        "The breed originates from the Ardennes region of Belgium, where black and black-and-tan scent hounds were bred from the seventh century onward by the monk Hubert (later Bishop of Liège and canonised as Saint Hubert, patron saint of hunters) and maintained for centuries at the Abbey of Saint-Hubert. In French-speaking Europe and international standards, the breed is still officially named the Chien de Saint-Hubert."
    },
    {
      question: "Where do the names 'Bloodhound' and 'Sleuth Hound' come from?",
      answer:
        "After Saint-Hubert hounds were brought to Britain following the Norman Conquest of 1066, their descendants became known as 'blooded hounds'—meaning hounds of pure, aristocratic blood—as well as hounds used to track wounded, bleeding game. In medieval Scotland and northern England, they were called 'sleuth hounds' (from the Old Norse word slóð, meaning 'trail' or 'track'), which gave English the modern word 'sleuth' for a detective."
    },
    {
      question: "How big does an adult Bloodhound get?",
      answer:
        "International conformation standards specify an ideal withers height of 68 cm for males and 62 cm for females, with a tolerance of ±4 cm (64 to 72 cm for males; 58 to 66 cm for females), and typical weights of 46 to 54 kg (101–119 lbs) for males and 40 to 48 kg (88–106 lbs) for females. British and American standards specify a height range of 25 to 27 inches (63–69 cm, average 26 in / 66 cm) for males and 23 to 25 inches (58–63 cm, average 24 in / 61 cm) for females, and weights of 90 to 110 pounds (41–50 kg) for males and 80 to 100 pounds (36–45.5 kg) for females, though large individuals frequently reach 120 to 130+ pounds (54–59+ kg)."
    },
    {
      question: "What coat colours are accepted in the Bloodhound?",
      answer:
        "Three colours are recognized: black and tan, liver and tan, and solid red. In the bicolour varieties (black and tan or liver and tan), the darker colour may form either a full mantle (where black or liver predominates) or a smaller dorsal saddle with more extensive tan, and darker areas may be interspersed with lighter or badger-coloured hairs. Red dogs range from light golden-blond red to deep red. A small amount of white is permitted on the forechest, toes/feet, and tip of the tail."
    },
    {
      question: "How long does a Bloodhound typically live?",
      answer:
        "The average lifespan is 10 to 12 years."
    },
    {
      question: "Does a Bloodhound drool and make a lot of noise?",
      answer:
        "Yes to both. Because of its square muzzle, long hanging upper lips (flews), and loose neck folds, the Bloodhound drools heavily—especially after drinking, eating, or sniffing—and a single head shake can fling saliva 15 feet across a room. While Bloodhounds rarely bark like guard dogs, they have a deep, resonant, melodious bay ('rooooo') when excited or on a scent trail."
    },
    {
      question: "Is a Bloodhound a good family dog or guard dog?",
      answer:
        "Bloodhounds are gentle, placid, and deeply affectionate with their families and get along well with other dogs and children. Because of their sheer size and wagging tails, interactions with toddlers and children under 5 years old should always be supervised. However, they are terrible guard dogs: they may bay when someone approaches, but their friendly, non-aggressive nature means they are more likely to welcome an intruder than guard property."
    },
    {
      question: "Can a Bloodhound be let off-leash or kept behind an electronic ('invisible') fence?",
      answer:
        "No. Once a Bloodhound catches an interesting scent, its tracking instinct overrides recall commands and road awareness—even in obedience-titled dogs. Electronic underground fences are ineffective because the breed's high pain threshold, thick loose neck skin, and scent drive allow it to bolt right through the shock boundary. Always walk a Bloodhound on a leash and enclose yards with a sturdy 5- to 6-foot physical fence."
    },
    {
      question: "How much daily grooming and ear care does a Bloodhound need?",
      answer:
        "The short coat needs only a weekly brushing with a hound glove or rubber mitt (more often during spring and autumn sheds), but the ears and facial wrinkles require daily attention. Because the long ears dip into food and water bowls and trap warm moisture, inspect them daily and clean them regularly with a veterinary ear cleanser. Wipe the facial, lip, and neck folds daily with a damp cloth and dry them thoroughly to prevent skin-fold dermatitis."
    },
    {
      question: "Why is bloat (GDV) such an important concern in Bloodhounds, and how can risk be reduced?",
      answer:
        "Gastric dilatation-volvulus (GDV, or gastric torsion/bloat) occurs when the deep, narrow stomach fills with gas and twists, cutting off blood flow. Epidemiological studies in pedigree dogs rank the Bloodhound among the breeds at highest risk of GDV morbidity and mortality. Owners can help reduce risk by feeding two to three smaller meals daily instead of one large meal, avoiding vigorous exercise around mealtimes, avoiding elevated food bowls unless advised by a vet, discussing prophylactic gastropexy ('stomach tacking' surgery) with their veterinarian, and seeking immediate emergency care if abdominal swelling, unproductive retching, or restlessness occurs."
    },
    {
      question: "What pre-breeding health screenings should I ask a breeder for?",
      answer:
        "Ask for documented results of the three core pre-breeding evaluations—hip dysplasia radiographs, elbow dysplasia radiographs, and a veterinary cardiac examination (ideally by a veterinary cardiologist)—along with optional screenings such as a board-certified veterinary ophthalmologist eye exam, patellar luxation check, thyroid panel, and DNA testing for degenerative myelopathy (SOD1)."
    }
  ],

  references: [
    "fci-bloodhound-official-standard",
    "american-bloodhound-club-breed-history-standard",
    "bloodhound-club-uk-breed-standard",
    "royal-kennel-club-bloodhound-standard",
    "american-kennel-club-bloodhound",
    "american-bloodhound-club-faq",
    "bloodhound-club-uk-considering-a-bloodhound",
    "bloodhound-club-uk-breed-history",
    "akc-hound-group-health-testing-requirements",
    "american-bloodhound-club-recommended-health-tests",
    "american-bloodhound-club-ofa-statistics",
    "bloodhound-club-uk-health-information",
    "bloodhound-gdv-mortality-morbidity-uk-2010",
    "vcahospitals-bloodhound-profile",
    "petmd-bloodhound-health-care",
    "wikimedia-bloodhound-puppy-meagan",
    "wikimedia-bloodhound-black-and-tan-canarian"
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
          id: "fci-bloodhound-official-standard",
          role: "verified",
          locator: "Title: CHIEN DE SAINT-HUBERT (Bloodhound)"
        },
        {
          id: "american-bloodhound-club-breed-history-standard",
          role: "verified",
          locator: "History of the Bloodhound: St. Hubert hounds"
        },
        {
          id: "american-kennel-club-bloodhound",
          role: "verified",
          locator: "About the Breed: 'Sleuth Hound'"
        },
        {
          id: "bloodhound-club-uk-breed-history",
          role: "verified",
          locator: "The History of the Bloodhound: sleuth hound"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded from reliable_source to official_standard: Chien de Saint-Hubert and Bloodhound are the official titles in FCI Standard No. 84, and St. Hubert Hound and Sleuth Hound are verified in the American and UK parent-club standards and AKC profile."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bloodhound-official-standard",
          role: "verified",
          locator: "FCI-CLASSIFICATION: Group 6 Scent hound and related breeds. Section 1 Scent hounds. 1.1 Large sized hounds. With working trial."
        },
        {
          id: "american-kennel-club-bloodhound",
          role: "cited",
          locator: "Hound Group"
        },
        {
          id: "bloodhound-club-uk-breed-standard",
          role: "cited",
          locator: "Hound Group"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Removed 'FCI Group 6 —' from user-facing text to comply with Rule 5. Classified in FCI Group 6, Section 1.1 (Large-sized Scent Hounds, with working trial) and in the AKC and UK Kennel Club Hound Group."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bloodhound-official-standard",
          role: "verified",
          locator: "ORIGIN: Belgium; BRIEF HISTORICAL SUMMARY: bred in the Ardennes by the monks of the Abbaye de Saint-Hubert"
        },
        {
          id: "bloodhound-club-uk-breed-history",
          role: "verified",
          locator: "St Hubert's Abbey, in what is now known as Belgium"
        }
      ],
      verifiedOn: "2026-10-21",
      note: "Belgium (Ardennes / Abbey of Saint-Hubert) is the official country and region of origin recorded in FCI Standard No. 84."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bloodhound-official-standard",
          role: "verified",
          locator: "Utilization, Brief Historical Summary (7th-c. monk Hubert, Abbey of Saint-Hubert, 11th-c. William the Conqueror, white Talbots, 'blooded hound'), General Appearance, Important Proportions (10:9, 1:2, 3:7, 1:2), Behaviour/Temperament"
        },
        {
          id: "american-bloodhound-club-breed-history-standard",
          role: "verified",
          locator: "History of the Bloodhound (St. Hubert, courtroom admissibility of mantrailing evidence) & Official Breed Standard (head length ≥12 in dogs / ≥11 in bitches)"
        },
        {
          id: "bloodhound-club-uk-breed-standard",
          role: "verified",
          locator: "General Appearance, Temperament, Head and Skull (≥30 cm / 12 in in dogs, ≥28 cm / 11 in in bitches)"
        },
        {
          id: "bloodhound-club-uk-breed-history",
          role: "verified",
          locator: "The History of the Bloodhound (c. 1300 British records, Scottish border 'sleuth hound' tracking cattle reivers, accomplice law, 17th-c. Robert Boyle 7-mile trial, WWII population bottleneck)"
        },
        {
          id: "bloodhound-club-uk-considering-a-bloodhound",
          role: "verified",
          locator: "15-foot slobber missile, 29-inch table reach, 2 hours minimum daily exercise"
        },
        {
          id: "american-kennel-club-bloodhound",
          role: "verified",
          locator: "About the Breed, History, and Did You Know? (1885 AKC recognition, 1805 Thrapston Association for the Prevention of Felons, 2022 Westminster Best in Show)"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded from reliable_source to official_standard: synthesizes FCI Standard No. 84, the American and British Official Breed Standards, UK/US parent-club historical accounts, and the AKC breed profile in original wording."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bloodhound-official-standard",
          role: "verified",
          locator: "General Appearance, Important Proportions (10:9 body, 1:2 chest, 3:7 head, 1:2 muzzle), Head (lips ~5 cm below jaw), Eyes, Ears, Neck (double dewlap), Body, Tail (~5 cm underside hair), Limbs (cat feet), Gait, Skin, Coat, Colour, Size and Weight (ideal 68 cm / 62 cm ± 4 cm; 46–54 kg / 40–48 kg), Disqualifying Faults"
        },
        {
          id: "american-bloodhound-club-breed-history-standard",
          role: "conflicting",
          locator: "Height (25–27 in [average 26 in] dogs; 23–25 in [average 24 in] bitches), Weight (90–110 lbs [average 90 lbs] dogs; 80–100 lbs [average 80 lbs] bitches), Head (≥12 in dogs, ≥11 in bitches), Mouth (scissors preferred, level accepted), Color"
        },
        {
          id: "bloodhound-club-uk-breed-standard",
          role: "conflicting",
          locator: "Head and Skull (≥30 cm / 12 in dogs, ≥28 cm / 11 in bitches), Mouth (complete scissor bite), Size (63–69 cm [25–27 in], ideal 66 cm [26 in] dogs; 58–63 cm [23–25 in], ideal 61 cm [24 in] bitches; mean weight 41 kg [90 lbs] / 36 kg [80 lbs], attaining 50 kg [110 lbs] / 45.5 kg [100 lbs])"
        },
        {
          id: "royal-kennel-club-bloodhound-standard",
          role: "conflicting",
          locator: "Size and weight (UK standard)"
        },
        {
          id: "american-bloodhound-club-faq",
          role: "cited",
          locator: "How big do they get? (individuals in the 120 to 130+ lb range) & What colors do they come in?"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Removed 'under breed-standard descriptions' from coatColors to comply with Rule 5. Stored physical.height (males 64–72 cm, females 58–66 cm) and physical.weight (males 46–54 kg, females 40–48 kg) follow FCI Standard No. 84 (ideal 68 cm / 62 cm ± 4 cm), while the UK/US standard ranges (63–69 cm [25–27 in] / 58–63 cm [23–25 in] and 41–50 kg [90–110 lbs] / 36–45.5 kg [80–100 lbs]) are documented in distinctiveFeatures and FAQ."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bloodhound",
          role: "verified",
          locator: "Life Expectancy: 10-12 years"
        },
        {
          id: "petmd-bloodhound-health-care",
          role: "verified",
          locator: "Bloodhound Health Issues: 'The average Bloodhound lifespan is 10-12 years.'"
        }
      ],
      verifiedOn: "2026-10-21",
      note: "Verified at 10–12 years from both the AKC breed profile and PetMD."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bloodhound",
          role: "verified",
          locator: "Grooming: 'The Bloodhound has a short, dense coat that is shed once or twice a year.'"
        },
        {
          id: "american-bloodhound-club-faq",
          role: "verified",
          locator: "Do they shed?: 'Yes. Usually twice a year in the late spring and late fall, but others with a thicker undercoat may shed year round.'"
        },
        {
          id: "petmd-bloodhound-health-care",
          role: "verified",
          locator: "Coat Care: 'Bloodhounds have a short, dense coat and are moderate shedders... Bloodhounds shed more heavily twice a year'"
        }
      ],
      verifiedOn: "2026-10-21",
      note: "Verified across AKC, the American Bloodhound Club FAQ, and PetMD."
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bloodhound-official-standard",
          role: "verified",
          locator: "HEAD - Lips: Very long and limp... fleshy flews... edge of the upper lips comes down about 5 cm below the lower jaw"
        },
        {
          id: "american-kennel-club-bloodhound",
          role: "verified",
          locator: "Breed Traits & Characteristics: Drooling Level (Always Have a Towel) & About the Breed ('Bloodhounds are droolers')"
        },
        {
          id: "american-bloodhound-club-faq",
          role: "verified",
          locator: "FAQ2 Do they drool?: 'Yes... Bloodhound owners commonly carry a drool towel'"
        },
        {
          id: "bloodhound-club-uk-considering-a-bloodhound",
          role: "verified",
          locator: "'A good shake of a Bloodhounds magnificent head can send a slobber missile fifteen feet or more.'"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded to official_standard: grounded in FCI Standard No. 84's anatomical description of long, limp lips hanging 5 cm below the lower jaw and verified across AKC, ABC, and The Bloodhound Club (UK)."
    },

    temperament: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bloodhound-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Gentle, placid, kind and sociable with people. Particularly attached to its owner. Tolerant of kennel companions and other domestic animals. Somewhat reserved and stubborn. Just as sensitive to compliments as to corrections. Never aggressive. Its voice is deep but it rarely barks."
        },
        {
          id: "american-bloodhound-club-breed-history-standard",
          role: "verified",
          locator: "Temperament: extremely affectionate, neither quarrelsome with companions nor with other dogs. His nature is somewhat shy, and equally sensitive to kindness or correction by his master."
        },
        {
          id: "bloodhound-club-uk-breed-standard",
          role: "verified",
          locator: "Temperament: Affectionate, neither quarrelsome with companions nor with other dogs. Somewhat reserved and sensitive."
        },
        {
          id: "american-bloodhound-club-faq",
          role: "verified",
          locator: "Do they bark? ('rooooo' bay), Are they a guard dog? (No), Are they good with children?, Are they good with other dogs?"
        },
        {
          id: "bloodhound-club-uk-considering-a-bloodhound",
          role: "verified",
          locator: "'natures Gentlemen, courteous to humans and other dogs', melodious bay, 29-inch table theft"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded from reliable_source to official_standard: verified across FCI Standard No. 84, the American and British Official Breed Standards, and US/UK parent-club guides."
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-bloodhound-official-standard",
          role: "cited",
          locator: "Behaviour / temperament"
        },
        {
          id: "american-kennel-club-bloodhound",
          role: "cited",
          locator: "Breed traits and characteristics"
        },
        {
          id: "american-bloodhound-club-faq",
          role: "cited",
          locator: "Activity, baying, watchdog vs guard dog, children, other dogs"
        }
      ],
      verifiedOn: null,
      note:
        "The 1–5 ratings are editorial estimates summarizing official standard and parent-club descriptions; energy is set to 4/5 to reflect the breed's active working endurance and need for daily sustained exercise."
    },

    care: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bloodhound",
          role: "verified",
          locator: "Health (daily ear and skin-wrinkle checks), Grooming (weekly brushing with hound glove/rubber mitt), Exercise (long daily walks on leash, securely fenced yard for diggers/escape artists), Training"
        },
        {
          id: "american-bloodhound-club-faq",
          role: "verified",
          locator: "Are they active?, Do they dig?, Do they jump or climb? (5–6 ft fence), Do they need above ground fencing?, What about invisible fencing? (ineffective due to high pain threshold and loose neck skin)"
        },
        {
          id: "bloodhound-club-uk-considering-a-bloodhound",
          role: "verified",
          locator: "Considering A Bloodhound (couple of hours minimum daily exercise, slobber cloths, ear cleaning, not leaving home alone)"
        },
        {
          id: "petmd-bloodhound-health-care",
          role: "verified",
          locator: "Behavior, Training, and Grooming Guide (6-foot fence, daily facial-fold wiping, ear cleaning after water)"
        },
        {
          id: "vcahospitals-bloodhound-profile",
          role: "verified",
          locator: "Exercise Needs, Grooming and Coat Care, Ideal Home Environment (caution with heat overexertion)"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Verified across AKC, American Bloodhound Club FAQ, The Bloodhound Club (UK), PetMD, and VCA Animal Hospitals."
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "While UK breed-club guidance mentions a minimum of a couple of hours of daily activity for adults, consulted standards and veterinary sources do not establish a single universal minute range across all ages and climates."
    },

    "care.livingEnvironment.climates": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "VCA notes caution against overexertion in hot weather, but consulted sources do not define a fixed breed-level climate classification list."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-bloodhound-club-faq",
          role: "verified",
          locator: "Can they live in an apartment?: 'Rarely... If you currently live in an apartment, please consider a breed that does not require as much exercise and activity and/or wait to get a bloodhound when you are in a house with a fenced backyard.'"
        },
        {
          id: "vcahospitals-bloodhound-profile",
          role: "verified",
          locator: "Ideal Home Environment: 'Living Space: Best with secure outdoor space'"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded from estimate to reliable_source: directly verified from the American Bloodhound Club FAQ and VCA Animal Hospitals."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-bloodhound-club-faq",
          role: "verified",
          locator: "Can they live in an apartment? & Do they need above ground fencing? (house with a 5–6 ft fenced backyard)"
        },
        {
          id: "american-kennel-club-bloodhound",
          role: "verified",
          locator: "Exercise (securely fenced backyard)"
        },
        {
          id: "vcahospitals-bloodhound-profile",
          role: "verified",
          locator: "Ideal Home Environment: 'Living Space: Best with secure outdoor space'"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded from estimate to reliable_source: directly verified across the American Bloodhound Club FAQ, AKC, and VCA."
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "reliable_source",
      sources: [
        {
          id: "bloodhound-club-uk-considering-a-bloodhound",
          role: "verified",
          locator: "'are not a breed that should be left home alone to its own devices. They tend to be lifelong chewers of furniture'"
        },
        {
          id: "vcahospitals-bloodhound-profile",
          role: "verified",
          locator: "Ideal Home Environment: 'Time Alone: Moderate tolerance but prefers companionship'"
        },
        {
          id: "petmd-bloodhound-health-care",
          role: "verified",
          locator: "Bloodhound Behavior (baying when separated or lonely)"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded from estimate to reliable_source: verified from The Bloodhound Club (UK), VCA Animal Hospitals, and PetMD."
    },

    nutrition: {
      reliability: "reliable_source",
      sources: [
        {
          id: "petmd-bloodhound-health-care",
          role: "verified",
          locator: "What To Feed a Bloodhound, How To Feed a Bloodhound (2–3 smaller meals daily, avoid elevated bowls, avoid vigorous exercise around mealtimes), How Much Should You Feed a Bloodhound? (4–8 cups dry food/day for 80–110 lb adults)"
        },
        {
          id: "american-kennel-club-bloodhound",
          role: "verified",
          locator: "Nutrition (high-quality commercial or vet-supervised home-prepared diet appropriate to puppy, adult, or senior stage; watch calorie and treat intake; fresh water) & Health ('notorious for eating anything and everything')"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded from general_guidance to reliable_source: directly verified from Dr. Teresa Kho-Pelfrey's veterinary feeding guide on PetMD and the AKC Bloodhound Nutrition section."
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "bloodhound-gdv-mortality-morbidity-uk-2010",
          role: "verified",
          locator: "Evans & Adams (J Small Anim Pract 2010;51(7):376–381, PMID 20626784): Bloodhound identified among breeds at greatest risk of both GDV mortality and GDV morbidity in UK pedigree dogs"
        },
        {
          id: "american-bloodhound-club-recommended-health-tests",
          role: "verified",
          locator: "Required CHIC tests (OFA Hip, OFA Elbow, OFA Cardiac) & Optional tests (ACVO Eye, Patellar Luxation, PennHIP, DM DNA test) & OFA Statistics table"
        },
        {
          id: "american-bloodhound-club-ofa-statistics",
          role: "verified",
          locator: "OFA-CHIC Requirements (including permanent microchip/tattoo) & Evaluations through Dec 2014 (Hips 25.4% abnormal of 2,941; Elbows 14.2% abnormal of 1,224; Cardiac 0.7% abnormal of 732; Patella 2.7% abnormal of 150; Thyroid 5.7% abnormal / 19.5% equivocal of 159; DM 6.4% affected / 44.1% carrier / 49.5% clear of 311)"
        },
        {
          id: "bloodhound-club-uk-health-information",
          role: "verified",
          locator: "Overall Breed Health (cancer and gastric torsion biggest causes of death in breed surveys), Skin (atopic dermatitis, eczema), Musculoskeletal, Eyes, Heart, COI (10.00%), and 1 Jan 2025 Category 2 reclassification"
        },
        {
          id: "bloodhound-club-uk-considering-a-bloodhound",
          role: "verified",
          locator: "KC/BVA hip, elbow, eye, heart, and DM testing; gastric torsion; entropion reduction"
        },
        {
          id: "vcahospitals-bloodhound-profile",
          role: "verified",
          locator: "Health Considerations (hip/elbow dysplasia, patellar luxation, entropion, ectropion, cherry eye, KCS/dry eye, skin fold infections, congenital heart valve disease, GDV, chronic ear infections, degenerative myelopathy)"
        },
        {
          id: "petmd-bloodhound-health-care",
          role: "verified",
          locator: "Bloodhound Health Issues (10–12 yr lifespan, foreign-body ingestion, hip/elbow dysplasia, otitis, GDV and prophylactic gastropexy)"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Removed all 'OFA', 'breed-club', and 'breed club' mentions from user-facing health strings to comply with Rule 5, and added peer-reviewed UK GDV epidemiology (Evans & Adams, 2010) and exact American and British parent-club registry data."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "bloodhound-gdv-mortality-morbidity-uk-2010",
          role: "verified",
          locator: "Abstract: Bloodhound among breeds at greatest risk of GDV mortality and morbidity"
        },
        {
          id: "american-bloodhound-club-ofa-statistics",
          role: "verified",
          locator: "OFA disease statistics table (hips, elbows, cardiac, patella, thyroid, degenerative myelopathy)"
        },
        {
          id: "bloodhound-club-uk-health-information",
          role: "verified",
          locator: "Cancer, gastric torsion, atopic dermatitis/eczema, hip/elbow dysplasia, multi-ocular eyelid issues, heart issues"
        },
        {
          id: "vcahospitals-bloodhound-profile",
          role: "verified",
          locator: "Health Considerations table (entropion, ectropion, cherry eye, keratoconjunctivitis sicca, skin fold infections, congenital heart valve disease, GDV, chronic ear infections, degenerative myelopathy)"
        },
        {
          id: "petmd-bloodhound-health-care",
          role: "verified",
          locator: "Foreign-body ingestion, hip/elbow dysplasia, otitis, GDV"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Stratifies peer-reviewed epidemiological GDV risk, registry-quantified orthopaedic/cardiac/thyroid/DM screening rates, conformation-linked ocular/otic/dermatologic conditions, and survey-reported neoplasia."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-hound-group-health-testing-requirements",
          role: "verified",
          locator: "Bloodhound recommended health tests: Hip Evaluation, Elbow Evaluation, Cardiac Exam"
        },
        {
          id: "american-bloodhound-club-recommended-health-tests",
          role: "verified",
          locator: "Required (Hip, Elbow, Cardiac) and Optional (ACVO Eye, Patellar Luxation, PennHIP, DM DNA test)"
        },
        {
          id: "american-bloodhound-club-ofa-statistics",
          role: "verified",
          locator: "OFA-CHIC Health Testing Requirements (including permanent microchip/tattoo)"
        },
        {
          id: "bloodhound-club-uk-considering-a-bloodhound",
          role: "verified",
          locator: "KC/BVA Hip and Elbow scoring, Eye testing, Heart testing, DM testing, and COI check (≤10.00%)"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Removed 'OFA' and 'breed club' from user-facing strings to comply with Rule 5, while documenting all required and optional US (CHIC) and UK (KC/BVA) pre-breeding screenings here."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "petmd-bloodhound-health-care",
          role: "cited",
          locator: "GDV recognition, gastropexy, feeding, and daily fold/ear care"
        },
        {
          id: "american-kennel-club-bloodhound",
          role: "cited",
          locator: "Health (bloat symptoms, foreign-body ingestion, daily ear and wrinkle checks)"
        },
        {
          id: "vcahospitals-bloodhound-profile",
          role: "cited",
          locator: "Ear, skin-fold, and joint health"
        }
      ],
      verifiedOn: null,
      note:
        "Synthesizes emergency GDV recognition, prophylactic gastropexy discussion, foreign-body prevention, and daily ear/fold hygiene."
    },

    "health.dentalCare": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bloodhound-official-standard",
          role: "verified",
          locator: "FACIAL REGION - Jaws/Teeth: Complete dentition, in correct scissor bite; strong white teeth, set regularly in well-developed jaws. A pincer bite is tolerated. DISQUALIFYING FAULTS: Over or under shot; wry jaw; crooked mouth."
        },
        {
          id: "american-bloodhound-club-breed-history-standard",
          role: "verified",
          locator: "Mouth: A scissors bite is preferred, level bite accepted."
        },
        {
          id: "american-kennel-club-bloodhound",
          role: "verified",
          locator: "Health: 'As with all breeds, a Bloodhound's teeth should be brushed regularly.'"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded from general_guidance to official_standard: verified from FCI Standard No. 84 and the American/British Official Standards' dentition rules and AKC Health dental-brushing guidance."
    },

    "health.earCare": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bloodhound",
          role: "verified",
          locator: "Health: 'The Bloodhound's low-hanging ears should be checked daily for any sign of infection.'"
        },
        {
          id: "petmd-bloodhound-health-care",
          role: "verified",
          locator: "Ear Care: routine cleaning with a veterinary-approved ear cleanser, especially after swimming or bathing"
        },
        {
          id: "bloodhound-club-uk-considering-a-bloodhound",
          role: "verified",
          locator: "Ears dipping into food/water bowls and sweeping the ground; need regular internal cleaning"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded from general_guidance to reliable_source: directly verified across AKC, PetMD, and The Bloodhound Club (UK)."
    },

    "health.skinCare": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bloodhound",
          role: "verified",
          locator: "Health: 'check the Bloodhound's skin wrinkles daily for odor or irritation, and if needed wipe with a warm, wet cloth and then dry thoroughly.'"
        },
        {
          id: "petmd-bloodhound-health-care",
          role: "verified",
          locator: "Skin Care: wipe facial folds daily with a pet-safe facial wipe or damp paper towel to prevent dermatitis"
        },
        {
          id: "bloodhound-club-uk-health-information",
          role: "verified",
          locator: "Skin Conditions"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded from general_guidance to reliable_source: directly verified across AKC, PetMD, and The Bloodhound Club (UK)."
    },

    suitability: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-bloodhound-club-faq",
          role: "verified",
          locator: "Apartment living, children (≥5 yrs rule of thumb), other dogs, 5–6 ft physical fencing, invisible fencing failure, drooling, baying"
        },
        {
          id: "bloodhound-club-uk-considering-a-bloodhound",
          role: "verified",
          locator: "Why A Bloodhound? (not for house-proud owners, 15-ft slobber, 2 hrs exercise, food/insurance costs)"
        },
        {
          id: "vcahospitals-bloodhound-profile",
          role: "verified",
          locator: "Ideal Home Environment (best for patient or experienced owners, secure outdoor space, good with children with supervision)"
        },
        {
          id: "american-kennel-club-bloodhound",
          role: "verified",
          locator: "About the Breed, Exercise, Grooming, and Training"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded from estimate to reliable_source: suitability flags and lists are directly grounded in the American Bloodhound Club FAQ, The Bloodhound Club (UK), VCA Animal Hospitals, and AKC."
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No blanket breed-level boolean is recorded because suitability depends on the individual owner's physical strength, mobility, and support in handling a 40–54+ kg hound."
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bloodhound-official-standard",
          role: "verified",
          locator: "Brief Historical Summary ('blooded hound') & Size"
        },
        {
          id: "american-kennel-club-bloodhound",
          role: "verified",
          locator: "Did You Know? (1805 Thrapston Association for the Prevention of Felons, 2022 Westminster Best in Show, courtroom admissibility, 'blooded hound')"
        },
        {
          id: "american-bloodhound-club-breed-history-standard",
          role: "verified",
          locator: "History of the Bloodhound (courtroom admissibility, 'blooded' etymology)"
        },
        {
          id: "bloodhound-club-uk-breed-history",
          role: "verified",
          locator: "Scottish border 'sleuth hound', accomplice law, 17th-century Robert Boyle 7-mile trial"
        },
        {
          id: "bloodhound-club-uk-considering-a-bloodhound",
          role: "verified",
          locator: "27-inch shoulder height reaching a 29-inch table without lifting a foot"
        },
        {
          id: "vcahospitals-bloodhound-profile",
          role: "verified",
          locator: "Appearance: loose skin and long pendulous ears trap scent particles"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Upgraded to official_standard: all fun facts are verified across FCI Standard No. 84, AKC, the American Bloodhound Club, The Bloodhound Club (UK), and VCA."
    },

    faq: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bloodhound-official-standard",
          role: "verified",
          locator: "Origin, Brief Historical Summary, Coat, Colour, Size and Weight (68 cm / 62 cm ± 4 cm; 46–54 kg / 40–48 kg)"
        },
        {
          id: "american-bloodhound-club-breed-history-standard",
          role: "verified",
          locator: "Height (25–27 in / 23–25 in), Weight (90–110 lbs / 80–100 lbs), Color"
        },
        {
          id: "bloodhound-club-uk-breed-standard",
          role: "verified",
          locator: "Size (63–69 cm / 58–63 cm; 41–50 kg / 36–45.5 kg) & Colour"
        },
        {
          id: "american-bloodhound-club-faq",
          role: "verified",
          locator: "Size (120–130+ lb individuals), Colours, Drooling, Baying, Guard dog, Children (≥5 yrs), 5–6 ft physical fencing, Invisible fence failure"
        },
        {
          id: "bloodhound-club-uk-considering-a-bloodhound",
          role: "verified",
          locator: "15-ft slobber throws, ear cleaning, KC/BVA health tests"
        },
        {
          id: "bloodhound-club-uk-breed-history",
          role: "verified",
          locator: "Sleuth hound history"
        },
        {
          id: "bloodhound-gdv-mortality-morbidity-uk-2010",
          role: "verified",
          locator: "GDV mortality and morbidity risk in UK pedigree dogs"
        },
        {
          id: "american-bloodhound-club-recommended-health-tests",
          role: "verified",
          locator: "Required (Hip, Elbow, Cardiac) and Optional (Eye, Patella, PennHIP, DM) screenings"
        },
        {
          id: "petmd-bloodhound-health-care",
          role: "verified",
          locator: "Lifespan (10–12 years), GDV prevention (2–3 meals, gastropexy), daily ear and fold care"
        }
      ],
      verifiedOn: "2026-10-21",
      note:
        "Removed 'The FCI standard gives...' from FAQ #3 and 'breed club' from FAQ #11 to comply with Rule 5, and rewrote all FAQs in self-contained original wording."
    }
  },

  updatedOn: "2026-10-21"
};
