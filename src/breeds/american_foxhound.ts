import type { Breed } from "../schema/breed.types";

export const american_foxhound: Breed = {
  slug: "american-foxhound",
  name: "American Foxhound",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Foxhound Américain",
    "Amerikanischer Foxhound",
    "Virginia Hound"
  ],

  group:
    "Scenthounds and related breeds; Section 1.1 — Large-sized Hounds (with working trial; also classified in the Hound group)",

  origin: {
    country: "United States",
    region: "Maryland and Virginia"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/American_Foxhound.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:American_Foxhound.jpg",
      title: "American Foxhound.jpg",
      description:
        "An adult tricolour American Foxhound outdoors, clearly showing its sleek athletic build, long slightly domed head, soft pleading dark eyes, low-set broad drop ears, and close hard medium-length coat.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2017-12-09",
      uploadedOn: "2018-01-27",
      width: 1787,
      height: 1744,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:American_Foxhound.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/AmericanFoxhound.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:AmericanFoxhound.jpg",
      title: "AmericanFoxhound.jpg",
      description:
        "A portrait of an American Foxhound named Sobe outdoors, highlighting its gentle houndlike expression, straight square-cut muzzle, fine long drop ears, and clean throat.",
      creator: "Peepe",
      uploader: "Caronna",
      capturedOn: "2005-10-06",
      uploadedOn: "2005-12-22",
      width: 1932,
      height: 2576,
      licenseId: "public-domain",
      attribution:
        "Photo by Peepe, Wikimedia Commons, Public Domain. Source: https://commons.wikimedia.org/wiki/File:AmericanFoxhound.jpg.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    }
  ],

  overview: {
    summary:
      "A sleek, long-legged, and tirelessly melodic large American scenthound forged in colonial Maryland and Virginia, celebrated for blistering cross-country stamina, a musical hunting cry, and an easygoing, sweet-tempered, independent household nature.",

    description:
      "The American Foxhound is a leaner, taller, and slightly lighter-boned cousin of the English Foxhound, crafted specifically for open speed, agility, and relentless endurance across rugged North American terrain. Built on clean, muscular, long-legged lines with a deep chest that is narrower in proportion to its depth than its British forebear, it carries a moderately long strong back, a broad slightly arched loin, and compact foxlike feet designed for hours of galloping. Its fairly long, cleanly sculpted head displays a broad full skull slightly domed at the occiput, a moderately defined stop, a straight square-cut muzzle, a clean throat free of heavy dewlap, large wide-set brown or hazel eyes beaming with a soft, pleading gaze, and long, fine, moderately low-set ears reaching nearly to the nose tip. Dressed in a close, hard, medium-length weather-resistant coat in any hound colour—most famously crisp tricolour—and topped by a gaily carried, slightly curved tail with a light brush, the American Foxhound is a quintessential pack hunter. Raised indoors, it becomes a remarkably sweet, mild-tempered, and amiable companion for children and other dogs, yet its intense exercise demands, resonant baying voice, and single-minded nose require an active, patient, securely fenced home.",

    history:
      "One of the earliest distinct dog breeds shaped in North America, the American Foxhound traces its roots to 1650, when English gentleman Robert Brooke sailed to colonial Maryland with his family and a pack of British hunting hounds—establishing early colonial lines that spread southward across Maryland and Virginia. Following the Revolutionary War, President George Washington—widely celebrated as the father of the American Foxhound—kept extensive breeding diaries at his Mount Vernon estate in Virginia; in 1785 he crossed his colonial hounds with French staghounds gifted by the Marquis de Lafayette and added imported Irish hounds to forge faster, lighter, keener-nosed 'Virginia hounds' suited to American forests and hills. Over the nineteenth century, regional hunting families refined celebrated field strains such as Walker, Trigg, July, and Birdsong hounds, which also helped shape modern American coonhound breeds. Formally recognized in the United States in 1886—and designated the official state dog of Virginia in 1966—the breed received definitive international recognition in November 1979. Today, American Foxhounds continue to work in traditional mounted hunts and field trials while serving devoted, energetic families as low-maintenance companions.",

    originalPurpose:
      "Trailing and running foxes (and historically larger game) at sustained speed over rugged North American terrain, both in packs and individually, while announcing the trail with a musical carrying cry.",

    currentRoles: [
      "Working pack-hunting and field-trial scenthound",
      "Active family companion for runners, hikers, and rural households",
      "Canine-sports competitor in tracking, rally, and coursing ability tests"
    ]
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "in",
      male: {
        min: 23,
        max: 28
      },
      female: {
        min: 21,
        max: 26
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 65,
        max: 70
      },
      female: {
        min: 60,
        max: 65
      }
    },

    lifespanYears: {
      min: 11,
      max: 13
    },

    coatType:
      "Close, hard, dense, weather-resistant hound coat of medium length lying smoothly over the body with a softer protective undercoat suited to forest and brush hunting. Thin, overly short, or soft coats are faulted.",

    coatLength: "Short",

    coatColors: [
      "Any colour is accepted",
      "Classic tricolour (black, tan, and white)",
      "Red and white, lemon and white, black and tan, blue tick, and red tick patterns"
    ],

    sheddingLevel:
      "Moderate; the close, hard hound coat sheds steadily throughout the year with moderate seasonal increases",

    droolingLevel:
      "Low; a clean throat free of folds or heavy dewlap (only a slight wrinkle below the jaw angle is permitted) and tidy hound lips keep drooling minimal",

    distinctiveFeatures: [
      "Lean, athletic, long-legged large scenthound built taller and slightly lighter-framed than the English Foxhound for open speed and stamina",
      "Height at the withers of 23 to 28 inches for males and 21 to 26 inches for females",
      "Adult weight typically ranging from 65 to 70 pounds for males and 60 to 65 pounds for females",
      "Deep chest for generous lung capacity—narrower in proportion to depth than the English Foxhound (a 28-inch girth in a 23-inch hound is considered good)—paired with well-sprung ribs extending far back and a 3-inch flank allowing springiness",
      "Fairly long head slightly domed at the occiput with a broad full skull, moderately defined stop, and straight square-cut muzzle of fair length",
      "Large, wide-set brown or hazel eyes conveying a remarkably soft, gentle, pleading hound expression",
      "Moderately low-set, long, fine-textured, fairly broad drop ears reaching nearly or quite to the tip of the nose when drawn forward",
      "Medium-length neck rising free and light from sloping muscular shoulders with a clean throat free of dewlap",
      "Moderately long strong muscular back, broad slightly arched loin, and moderately high-set tail carried gaily with a slight curve and light brush (never curled forward over the back)",
      "Straight, well-boned muscular forelegs with strong slightly sloping pasterns, powerful muscular hindquarters, and compact foxlike feet with full hard pads, well-arched toes, and strong nails"
    ]
  },

  temperament: {
    traits: [
      "Sweet-tempered, kind, mild-mannered, and easygoing indoors when properly exercised",
      "Remarkably sociable and amiable with children, other dogs, and often even household cats when raised together",
      "Deeply loyal and devoted to its household yet retains an independent, self-directed scenthound streak",
      "Possesses an overpowering, single-minded scent-trailing and prey-chasing drive outdoors that overrides casual recall",
      "Renowned for a loud, carrying, musical baying and howling voice that can be heard for miles on a trail",
      "Energetic, tireless, and driven—prone to boredom, depression, or destructive behaviour if deprived of vigorous daily exercise",
      "Can be mildly stubborn during routine obedience, rewarding patient, consistent, upbeat handling"
    ],

    scores: {
      affection: 4,
      withChildren: 5,
      withDogs: 5,
      withStrangers: 4,
      protectiveness: 2,
      independence: 4,
      trainability: 3,
      barking: 5,
      energy: 5
    }
  },

  care: {
    exercise: {
      level:
        "Very high; bred to gallop after game for hours across open country, an adult American Foxhound demands at least one to two hours of vigorous daily exercise and scent work to avoid boredom and destructiveness",

      minutesPerDay: {
        min: 60,
        max: 120
      },

      activities: [
        "Long daily distance running, brisk trail hikes, or cycling alongside a leashed hound",
        "Pack hunting, organised field trials, and structured scent-tracking work",
        "Canine sports including tracking, rally, and coursing ability tests",
        "Free vigorous running inside a very large, tall, securely fenced rural yard"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Virtually fuss-free coat—a brief weekly session with a firm bristle brush, rubber grooming mitt, or hound glove lifts dead hair and keeps the close, hard coat glossy.",

      bathing:
        "Bathe only occasionally when the dog gets visibly muddy or into something smelly outdoors, using a mild canine shampoo.",

      notes: [
        "Inspect the long, low-set, broad drop ears weekly—and after every wet woodland outing—to clear wax buildup, moisture, burrs, or grass seeds and help prevent ear infections.",
        "Check the compact foxlike feet, hard pads, and arched toes after long trails for thorns, cuts, or ticks.",
        "Trim strong nails regularly whenever rough outdoor surfaces do not wear them down naturally.",
        "Brush teeth several times weekly using canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Moderate to challenging; good-natured and intelligent, yet independent, mildly stubborn, and ruled by an acute nose—requiring patience, consistency, and strict on-leash safety",

      tips: [
        "Enrol in upbeat, reward-based obedience classes early using appealing food treats and steady patience; harshness creates resistance without improving reliability.",
        "Never trust an American Foxhound off-leash in unfenced parks, roadsides, or open suburbs—once a compelling scent catches its nose, it will follow the trail single-mindedly for miles.",
        "Channel its intense trailing drive into structured tracking, nosework, or coursing ability tests alongside daily running.",
        "Teach calm household settling and a polite quiet cue early to help manage its resonant, musical baying."
      ],

      socialization:
        "Early, positive exposure to varied people, friendly dogs, children, and everyday noises builds poised confidence and reinforces its naturally gentle, easygoing temperament."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate four-season countryside climates, mirroring Maryland, Virginia, and the eastern United States",
        "Cool autumn and winter hunting seasons are handled enthusiastically during active running, though warm dry indoor shelter is needed when resting in freezing weather",
        "Hot, humid summer weather requires shifting long runs to cool dawn or evening hours with reliable shade and cool drinking water"
      ],

      aloneTimeTolerance:
        "Low to moderate; shaped by centuries of collective pack living, an American Foxhound often thrives with compatible canine company and can become stressed, vocal, or destructive if left isolated and under-exercised for long stretches."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for large, high-endurance sporting and hunting breeds.",

    feedingFrequency: {
      puppy:
        "Three to four measured meals daily until roughly six months of age on a controlled large-breed growth formula to support healthy skeletal and joint development.",
      adult:
        "Two measured meals daily to sustain running endurance and help reduce acute stomach distension.",
      senior:
        "Two portion-controlled meals daily tailored for reduced caloric needs and joint comfort."
    },

    guidelines:
      "Measure every meal accurately to keep the American Foxhound lean, hard-muscled, and light on its feet—carrying excess weight impairs stamina and adds stress to hip joints. Active working pack hounds and daily distance-running partners need richer protein and fat density than lower-activity househounds. Divide daily adult food into two smaller meals, allow calm rest before and after eating, and keep clean fresh water available continuously.",

    considerations: [
      "Because this large hound has a deep chest built for generous lung capacity, divide adult rations into two meals and avoid vigorous running immediately before or after eating as a precaution against gastric dilatation-volvulus (GDV / bloat).",
      "Feed growing puppies a balanced large-breed puppy formula with controlled energy and calcium to support sound hip development.",
      "Count all training treats inside the daily calorie allowance and transition gradually between diets over five to seven days."
    ],

    note:
      "Caloric demands differ substantially between active pack-hunting hounds and companion dogs. Consult a veterinarian to establish individual feeding portions."
  },

  health: {
    overview:
      "The American Foxhound is widely regarded as a hardy, sound, athletically built breed with a typical life expectancy of 11 to 13 years and no mandatory national pre-breeding health test panel currently published. Documented breed health considerations include developmental hip dysplasia, thrombocytopathy (an inherited platelet-function bleeding disorder noted in breed health guidance), and conformation-linked drop-ear infections. In North American working kennel lines, veterinary infectious-disease research has also documented endemic canine visceral leishmaniasis (Leishmania infantum)—maintained largely via vertical transplacental transmission from infected dams to puppies rather than being an inherited genetic defect—making Leishmania screening prudent when acquiring or breeding kennel-line hounds. Additionally, peer-reviewed haematology research has documented the benign inherited Pelger-Huët white-blood-cell anomaly in Foxhounds, important for veterinarians to recognize on routine blood smears.",

    commonConditions: [
      "Hip dysplasia — developmental laxity and malformation of the hip joints that can progress to osteoarthritis in active large hounds; monitored through elective pre-breeding radiographic evaluations",
      "Thrombocytopathy (platelet function disorder) — an inherited bleeding tendency affecting normal blood-platelet clumping noted in breed health guidance, warranting veterinary awareness prior to surgery or after trauma",
      "Canine Visceral Leishmaniasis (Leishmania infantum — infectious kennel-line concern) — an obligate intracellular protozoal infection documented as endemic in certain North American Foxhound hunting kennels since a 1999 New York outbreak (with a 2000–2003 serosurvey reporting 8.9% seroprevalence and a 2011 study confirming transplacental mother-to-puppy transmission in 10 of 12 pups from an infected dam); not a genetic disorder, though screening is valuable for breeding or imported/kennel-origin Foxhounds",
      "Pelger-Huët anomaly — an inherited, typically benign white-blood-cell nuclear-segmentation anomaly documented in peer-reviewed Foxhound studies; important for veterinarians to distinguish from severe bacterial infection on blood counts",
      "Otitis externa (outer ear infections) — conformation-linked risk associated with long, broad, low-set drop ears that can retain moisture, wax, or woodland debris",
      "Gastric dilatation-volvulus (GDV / bloat) and fieldwork trauma — general large deep-chested hunting-hound precautions alongside paw abrasions, brush scratches, and tick-borne exposure"
    ],

    preventiveCare: [
      "Work with responsible breeders who provide documented parental veterinary wellness records, elective radiographic hip evaluations, and—for working kennel lines or breeding stock—serological or PCR screening for Leishmania infantum.",
      "Inspect and gently dry the long, low-set drop ears weekly—and after every wet outdoor outing—to prevent wax buildup and ear infections.",
      "Divide daily adult meals into two portions, allow calm rest before and after eating, and know emergency warning signs of bloat (unproductive retching, swollen tight abdomen, restlessness).",
      "Inform your veterinarian about potential thrombocytopathy or benign Pelger-Huët blood-smear traits prior to surgical procedures or laboratory interpretation, and maintain strict year-round tick, flea, heartworm, and internal parasite protection."
    ],

    recommendedScreenings: [
      "No mandatory national pre-breeding health test panel is currently established; discuss elective baseline radiographic hip dysplasia evaluation and routine veterinary ophthalmic and cardiac checks for breeding stock",
      "Serological or PCR screening for Leishmania infantum prior to breeding or adoption from working North American Foxhound kennel populations"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste and schedule regular veterinary dental checks to keep teeth and gums healthy.",

    earCare:
      "Inspect the long, fine, moderately low-set drop ears weekly for excess wax, trapped moisture, burrs, grass seeds, or redness, cleaning gently with a veterinarian-approved solution when needed.",

    skinCare:
      "Run hands over the close, hard medium-length coat after every trail run or forest outing to catch ticks, burrs, thorns, or minor scrapes early."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Distance runners, hikers, and active rural families with large, securely fenced yards able to provide 60 to 120 minutes of vigorous daily exercise",
      "Traditional foxhunters, field-trial enthusiasts, and scent-tracking sports handlers",
      "Multi-dog rural households wanting a sweet-tempered, easygoing, pack-friendly hound that gets along smoothly with children and other dogs",
      "Owners seeking a remarkably low-grooming, hard-coated large dog who enjoy a carrying musical hound voice"
    ],

    notIdealFor: [
      "Apartment or dense-city dwellers where a resonant, carrying baying voice and very high exercise demands cause constant friction",
      "Sedentary households unable to provide one to two hours of vigorous daily activity",
      "Owners wanting an off-leash park walker or instant, unquestioning obedience around woodland scents",
      "Homes with free-roaming outdoor small prey animals such as rabbits or poultry"
    ]
  },

  funFacts: [
    "President George Washington is celebrated as the father of the American Foxhound—he kept detailed breeding diaries at Mount Vernon, crossed colonial hounds with French staghounds gifted by the Marquis de Lafayette in 1785, and gave his favourite hounds charming names like Sweet Lips, Truelove, Venus, and Music.",
    "The breed's American story begins in 1650, when Maryland-bound English settler Robert Brooke sailed across the Atlantic with his family and a full pack of hunting hounds.",
    "In 1966—eight decades after its first national recognition in 1886—Virginia officially designated the American Foxhound as its State Dog.",
    "Compared with its British cousin the English Foxhound, the American Foxhound is taller on the leg, sleeker, and narrower in the chest—engineered for higher cross-country speed over rugged American terrain.",
    "Its resonant, musical baying voice—prized by hunters for carrying miles across hills and woods—actually inspired traditional American folk songs and hound-calling lore."
  ],

  faq: [
    {
      question: "What is an American Foxhound?",
      answer:
        "The American Foxhound is a tall, sleek, long-legged large scenthound developed in colonial Maryland and Virginia—shaped closely by George Washington—to hunt foxes at sustained speed, known for its musical voice and sweet, easygoing nature."
    },
    {
      question: "How tall and heavy is an American Foxhound?",
      answer:
        "Adult males stand 23 to 28 inches at the withers and typically weigh 65 to 70 pounds, while adult females stand 21 to 26 inches and typically weigh 60 to 65 pounds."
    },
    {
      question: "How long does an American Foxhound live?",
      answer:
        "Generally a hardy, athletic scenthound, the American Foxhound has a typical life expectancy of 11 to 13 years with lean nutrition, vigorous daily exercise, and routine veterinary care."
    },
    {
      question: "Can an American Foxhound live in an apartment?",
      answer:
        "No. Although sweet and mild-tempered indoors after hard exercise, its requirement for one to two hours of vigorous daily running and its loud, musical baying voice make a rural or spacious home with a tall, securely fenced yard far more suitable."
    },
    {
      question: "Are American Foxhounds good with children, other dogs, and cats?",
      answer:
        "Yes. Bred to live harmoniously in packs, American Foxhounds raised indoors are notably gentle, patient, and friendly with children and other dogs—and many even coexist well with indoor cats when raised together—though small wild animals outdoors will trigger strong chasing instincts."
    },
    {
      question: "How much grooming and shedding should I expect from an American Foxhound?",
      answer:
        "Grooming is minimal: a quick weekly brush with a bristle brush or rubber hound mitt manages moderate shedding and keeps its close, hard coat clean, with baths only when messy, paired with regular nail trims, toothbrushing, and weekly checks of its long drop ears."
    },
    {
      question: "Are American Foxhounds easy to train?",
      answer:
        "They are amiable and bright, but independent, mildly stubborn, and governed by a powerful nose—making patience, consistency, and positive obedience classes essential. Outside secure fences, they should always remain on a leash because compelling scents easily override recall."
    },
    {
      question: "What are the main health concerns for an American Foxhound?",
      answer:
        "Overall a hardy breed with no mandatory national screening panel, its main documented considerations include hip dysplasia, thrombocytopathy (a platelet bleeding tendency), drop-ear infections, deep-chested bloat precautions, benign Pelger-Huët blood-cell anomaly, and infectious canine visceral leishmaniasis (Leishmania infantum) in certain North American working kennel populations."
    }
  ],

  references: [
    "akc-american-foxhound-official-standard",
    "akc-american-foxhound-breed-profile",
    "akc-hound-group-health-testing-requirements",
    "akc-george-washington-foxhounds-2020",
    "akc-state-dogs-virginia-2021",
    "fci-american-foxhound-official-standard",
    "fci-american-foxhound-nomenclature",
    "skk-american-foxhound-profile",
    "scc-foxhound-americain-profile",
    "pmc-boggiatto-2011-foxhound-leishmania",
    "pmc-mahachi-2021-foxhound-leishmania",
    "pubmed-foxhound-pelger-huet-1979",
    "wikimedia-american-foxhound-canarian",
    "wikimedia-americanfoxhound-peepe"
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
          id: "fci-american-foxhound-nomenclature",
          role: "verified",
          locator: "Official multilingual names: AMERICAN FOXHOUND (EN/FR/DE)"
        },
        {
          id: "scc-foxhound-americain-profile",
          role: "verified",
          locator: "Official French Kennel Club name: Foxhound américain"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified across FCI Nomenclature No. 303 and SCC; Amerikanischer Foxhound and historic Virginia Hound are established German and historical American names."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-american-foxhound-official-standard",
          role: "verified",
          locator: "FCI-CLASSIFICATION: Group 6 Scenthounds and related breeds. Section 1.1 Large-sized hounds. With working trial."
        },
        {
          id: "akc-american-foxhound-official-standard",
          role: "verified",
          locator: "AKC Hound Group official breed standard"
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
          id: "fci-american-foxhound-official-standard",
          role: "verified",
          locator: "ORIGIN: U.S.A."
        },
        {
          id: "akc-american-foxhound-breed-profile",
          role: "verified",
          locator: "United States origin associated with Revolutionary heroes and old Virginia"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Country of origin (United States) verified from FCI Standard No. 303 and AKC."
    },

    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-george-washington-foxhounds-2020",
          role: "verified",
          locator: "1650 Robert Brooke Maryland hound arrival and George Washington's Mount Vernon, Virginia breeding program"
        },
        {
          id: "akc-american-foxhound-breed-profile",
          role: "verified",
          locator: "Closely associated with Revolutionary heroes and the estates of old Virginia"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Maryland and Virginia founding regional heritage verified from AKC historical profiles."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-american-foxhound-official-standard",
          role: "verified",
          locator: "Head, Ears, Neck, Chest (narrower than English Hound), Back/Loins, Tail, Coat, Color, Height"
        },
        {
          id: "fci-american-foxhound-nomenclature",
          role: "verified",
          locator: "Date of acceptance on a definitive basis by the FCI: 1979-11-02"
        },
        {
          id: "akc-george-washington-foxhounds-2020",
          role: "verified",
          locator: "1650 Robert Brooke arrival in Maryland; George Washington's Mount Vernon breeding program (1785 Lafayette French staghounds and Irish hounds)"
        },
        {
          id: "akc-state-dogs-virginia-2021",
          role: "verified",
          locator: "1886 AKC recognition and 1966 Virginia State Dog designation"
        },
        {
          id: "akc-american-foxhound-breed-profile",
          role: "verified",
          locator: "Good-natured mild-tempered home companion requiring vigorous exercise; tracking, rally, and coursing ability tests"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Synthesized in original prose from AKC Official Standard (2011), FCI Standard No. 303, FCI Nomenclature, and AKC historical profiles."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-american-foxhound-official-standard",
          role: "verified",
          locator: "Head (fairly long, slightly domed at occiput, broad full skull, moderate stop, straight square-cut muzzle), Ears (moderately low, long reaching nearly to nose tip, fine broad), Back/Loins, Forelegs/Feet (foxlike, full hard pads, well-arched toes), Hindquarters, Tail (moderately high, gaily carried, slight curve, slight brush), Coat (close hard medium-length hound coat), Color (any color), Height (dogs 23-28 in, bitches 21-26 in)"
        },
        {
          id: "fci-american-foxhound-official-standard",
          role: "verified",
          locator: "Eyes (large, wide apart, soft houndlike, brown or hazel, gentle pleading expression), Neck (clean throat free of folds, slight wrinkle below jaw angle allowable), Chest (28 in girth in a 23 in hound; 3-in flank)"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "All anatomical proportions, chest girth and flank benchmarks, foxlike feet, close hard coat, and any-colour allowance follow the AKC Official Standard (2011) and FCI Standard No. 303."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-american-foxhound-official-standard",
          role: "verified",
          locator: "Height: Dogs should not be under 23 or over 28 inches. Bitches should not be under 21 or over 26 inches measured across the back at the point of the withers."
        },
        {
          id: "fci-american-foxhound-official-standard",
          role: "cited",
          locator: "FCI Standard No. 303 (based on the 1979 US standard) and the AKC web summary box still print the older 22-25 inches (males) and 21-24 inches (females) bounds."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Preserved verbatim in published unit of inches (males 23 to 28 in, females 21 to 26 in) from the current country-of-origin AKC Official Standard (effective 2011-03-01). FCI Standard No. 303 (1979/1998) and the AKC web overview still display the earlier 22–25 in / 21–24 in range."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-foxhound-breed-profile",
          role: "verified",
          locator: "Weight: 65-70 pounds (male), 60-65 pounds (female)."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Neither the AKC Official Standard nor FCI Standard No. 303 publishes weight; preserved verbatim in published unit of pounds (65 to 70 lb males, 60 to 65 lb females) from the AKC breed profile."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-foxhound-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 11-13 years."
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified from AKC breed profile."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-foxhound-breed-profile",
          role: "verified",
          locator: "Weekly bristle brush or rubber hound mitt grooming for close short-to-medium hound coat."
        },
        {
          id: "skk-american-foxhound-profile",
          role: "verified",
          locator: "Skötsel: Short hard outer hairs closing tightly over softer undercoat; easy-care coat bathed as needed."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-american-foxhound-official-standard",
          role: "verified",
          locator: "NECK: The throat clean and free from folds of skin, a slight wrinkle below the angle of the jaw allowable; FAULTS: throat showing dewlap and folds of skin ('throatiness')."
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Clean, dewlap-free throat and tidy hound lips keep drooling low."
    },

    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-foxhound-breed-profile",
          role: "verified",
          locator: "Independent, easy-going, sweet-tempered; good with children, other dogs, and often cats; single-minded prey drive; stubborn and independent in training; destructive if under-exercised."
        },
        {
          id: "skk-american-foxhound-profile",
          role: "verified",
          locator: "Egenskaper och mentalitet: Energetic, friendly, attentive, strong hunting instinct driving game by barking or howling, affectionate with family, good with children and other dogs, can be stubborn."
        },
        {
          id: "scc-foxhound-americain-profile",
          role: "verified",
          locator: "Comportement: Musical singing voice ('voix chantante'), keen nose, fast and lighter than English Foxhound, excellent companion."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-american-foxhound-breed-profile",
          role: "cited",
          locator: "Sweet-tempered, easygoing, good with children and dogs, independent, self-willed trainability, high energy"
        },
        {
          id: "skk-american-foxhound-profile",
          role: "cited",
          locator: "Vocal barking/howling trailing drive, friendly family character, high activity demands"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates reflecting documented pack sociability with children and dogs, carrying baying voice, independent hunting drive, and high energy."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-american-foxhound-breed-profile",
          role: "cited",
          locator: "Weekly brushing with bristle brush/hound glove, rare baths, regular ear checks and nail trims, toothbrushing, 1–2 hours daily exercise, never off-leash, obedience classes"
        },
        {
          id: "skk-american-foxhound-profile",
          role: "cited",
          locator: "Easy-care coat, strong hunting passion requiring extensive daily exercise and stimulation"
        }
      ],
      verifiedOn: null,
      note:
        "General large-scenthound care combining 1 to 2 hours of vigorous daily exercise and strict leash safety with minimal weekly coat brushing and drop-ear care."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-foxhound-breed-profile",
          role: "verified",
          locator: "Exercise: Needs at least a solid hour or two of exercise every day; bred specifically to spend long hours chasing after prey; bored and destructive if under-exercised."
        },
        {
          id: "skk-american-foxhound-profile",
          role: "verified",
          locator: "Requires abundant exercise, training, and stimulation ('kräver mycket motion, träning och stimulans')."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-foxhound-breed-profile",
          role: "verified",
          locator: "Needs at least a solid hour or two of exercise every day (60 to 120 minutes)."
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified directly from AKC breed profile (1 to 2 hours daily)."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "skk-american-foxhound-profile",
          role: "verified",
          locator: "Allmänt: Driving hunting hound not suitable solely as a companion dog ('trivs inte enbart som sällskapshund'); built for forest and field hunting."
        },
        {
          id: "akc-american-foxhound-breed-profile",
          role: "cited",
          locator: "Requires 1–2 hours daily exercise and has a loud carrying baying voice."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-american-foxhound-breed-profile",
          role: "cited",
          locator: "Active scenthound requiring secure containment and vigorous daily exercise"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial assessment that a rural or spacious home with a tall, securely fenced yard suits this breed well."
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-american-foxhound-official-standard",
          role: "cited",
          locator: "US origin and close, hard medium-length hound coat"
        }
      ],
      verifiedOn: null,
      note: "General climate guidance inferred from Mid-Atlantic/Eastern US origin and close hard coat."
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-american-foxhound-breed-profile",
          role: "cited",
          locator: "Pack-oriented hound prone to depression or destructiveness when under-exercised or bored"
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
        "General large sporting-hound veterinary nutrition guidance emphasizing lean athletic condition and deep-chested bloat precautions."
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
          id: "akc-american-foxhound-breed-profile",
          role: "verified",
          locator: "Notes hip dysplasia, thrombocytopathy (platelet disorder), and long-eared ear infections."
        },
        {
          id: "akc-hound-group-health-testing-requirements",
          role: "verified",
          locator: "American Foxhound — Recommended Health Tests from the National Breed Club: No recommended health tests."
        },
        {
          id: "pmc-boggiatto-2011-foxhound-leishmania",
          role: "verified",
          locator: "PLoS Negl Trop Dis 2011 (PMC3075227): Documents transplacental (vertical) transmission of Leishmania infantum in US Foxhounds (10 of 12 pups positive by kqPCR; Midwest kennel incidence ~12%)."
        },
        {
          id: "pmc-mahachi-2021-foxhound-leishmania",
          role: "verified",
          locator: "JVIM (PMC7995368): Summarizes US/Canada Foxhound Leishmania infantum epidemiology (8.9% seroprevalence in 2000–2003 survey; 20% average in 9-year hunting-hound PCR survey)."
        },
        {
          id: "pubmed-foxhound-pelger-huet-1979",
          role: "verified",
          locator: "Am J Pathol 1979;96(1):237-248 (PMID 464021): Documents inherited Pelger-Huët neutrophil anomaly in Foxhounds."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Synthesizes AKC health guidance, peer-reviewed Leishmania infantum infectious-disease studies (explicitly distinguishing kennel-line vertical transmission from genetic disease), and Pelger-Huët haematology literature without naming clubs or registries in user-facing text."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-foxhound-breed-profile",
          role: "verified",
          locator: "Hip dysplasia, thrombocytopathy, and long-eared ear infections"
        },
        {
          id: "pmc-boggiatto-2011-foxhound-leishmania",
          role: "verified",
          locator: "Endemic canine visceral leishmaniasis (Leishmania infantum) via vertical transmission in US Foxhound kennels"
        },
        {
          id: "pmc-mahachi-2021-foxhound-leishmania",
          role: "verified",
          locator: "2000–2003 seroprevalence (8.9%) and 9-year hunting-hound PCR survey (~20%) in US/Canada Foxhounds"
        },
        {
          id: "pubmed-foxhound-pelger-huet-1979",
          role: "verified",
          locator: "Pelger-Huët anomaly in Foxhounds"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Explicitly stratifies documented breed conditions (hip dysplasia, thrombocytopathy, Pelger-Huët anomaly) and infectious kennel-line canine visceral leishmaniasis from general deep-chested GDV and drop-ear precautions."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-american-foxhound-breed-profile",
          role: "cited",
          locator: "Regular drop-ear checks, toothbrushing, and nail trimming"
        },
        {
          id: "pmc-mahachi-2021-foxhound-leishmania",
          role: "cited",
          locator: "Leishmania surveillance in US/Canadian hunting Foxhound kennels"
        }
      ],
      verifiedOn: null,
      note: "General preventive veterinary care protocol tailored to American Foxhounds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-hound-group-health-testing-requirements",
          role: "verified",
          locator: "Confirms no mandatory national parent-club recommended health tests are currently published."
        },
        {
          id: "pmc-boggiatto-2011-foxhound-leishmania",
          role: "verified",
          locator: "Supports Leishmania infantum screening in breeding or kennel-origin North American Foxhounds."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Transparently states that no mandatory national screening panel exists while noting elective baseline orthopaedic/wellness checks and Leishmania testing for kennel-origin stock."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-american-foxhound-breed-profile",
          role: "cited",
          locator: "Regular brushing keeps the hound's teeth healthy."
        }
      ],
      verifiedOn: null,
      note: "Standard home and veterinary dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-american-foxhound-breed-profile",
          role: "cited",
          locator: "Long-eared breeds can develop ear infections; check regularly to remove foreign matter and prevent wax buildup."
        },
        {
          id: "akc-american-foxhound-official-standard",
          role: "cited",
          locator: "Ears set on moderately low, long reaching nearly to nose tip, fine and fairly broad."
        }
      ],
      verifiedOn: null,
      note: "Routine drop-ear inspection and drying protocol."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-american-foxhound-official-standard",
          role: "cited",
          locator: "Close, hard hound coat of medium length."
        }
      ],
      verifiedOn: null,
      note: "General skin and woodland-tick inspection guidance after outdoor outings."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-american-foxhound-breed-profile",
          role: "cited",
          locator: "Good with kids, dogs, even cats; requires 1–2 hours daily exercise; never safe off-leash; stubborn independent training"
        },
        {
          id: "skk-american-foxhound-profile",
          role: "cited",
          locator: "Driving hunting hound unsuitable solely as a low-activity companion dog"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability evaluations balancing gentle family friendliness and minimal grooming against very high daily running needs, loud baying, and strict on-leash limits."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-george-washington-foxhounds-2020",
          role: "verified",
          locator: "1650 Robert Brooke Maryland arrival; George Washington's Mount Vernon breeding diaries, 1785 Lafayette French staghounds, and hound names (Sweet Lips, Truelove, Venus, Music)"
        },
        {
          id: "akc-state-dogs-virginia-2021",
          role: "verified",
          locator: "1886 AKC recognition and 1966 Virginia State Dog designation"
        },
        {
          id: "fci-american-foxhound-official-standard",
          role: "verified",
          locator: "Narrower chest in proportion to depth and longer legs than English Foxhound"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified historical, political, anatomical, and cultural facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-foxhound-official-standard",
          role: "verified",
          locator: "Height (23-28 in males / 21-26 in females), coat"
        },
        {
          id: "akc-american-foxhound-breed-profile",
          role: "verified",
          locator: "Weight (65-70 lb males / 60-65 lb females), lifespan (11-13 years), 1–2 hours daily exercise, family/pet friendliness, weekly brushing, off-leash warning, hip dysplasia and thrombocytopathy"
        },
        {
          id: "pmc-boggiatto-2011-foxhound-leishmania",
          role: "verified",
          locator: "Canine visceral leishmaniasis in US Foxhound kennels"
        },
        {
          id: "pubmed-foxhound-pelger-huet-1979",
          role: "verified",
          locator: "Benign Pelger-Huët anomaly in Foxhounds"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "FAQ answers synthesize AKC Official Standard (2011), AKC breed profile, FCI Standard No. 303, SKK, SCC, and peer-reviewed veterinary studies without naming clubs or registries in user-facing prose."
    }
  },

  updatedOn: "2026-11-26"
};
