import type { Breed } from "../schema/breed.types";

export const basset_fauve_de_bretagne: Breed = {
  slug: "basset-fauve-de-bretagne",
  name: "Basset Fauve de Bretagne",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Fawn Brittany Basset",
    "Fawn Basset of Brittany",
    "Fawn Colored Brittany Basset",
    "Brittany Basset",
    "Basset Fauve",
    "Fauve de Bretagne",
    "Basset Leonado de Bretaña"
  ],

  group: "Small-sized scenthounds (with working trial)",

  origin: {
    country: "France",
    region: "Brittany (Bretagne), northwestern France"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Basset_Fauve_de_Bretagne_Chester.JPG",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Basset_Fauve_de_Bretagne_Chester.JPG",
      title: "Basset Fauve de Bretagne Chester.JPG",
      description:
        "A Basset Fauve de Bretagne showing its rough fawn wiry coat, dark expressive eyes, and folded drop ears.",
      creator: "Kallewirsch",
      uploader: "Kallewirsch",
      capturedOn: null,
      uploadedOn: "2019-10-08",
      width: 1776,
      height: 1804,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Kallewirsch, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Basset_Fauve_de_Bretagne_Chester.JPG. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-25"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Basset_fauve_de_bretagne_with_a_bone.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Basset_fauve_de_bretagne_with_a_bone.jpg",
      title: "Basset fauve de bretagne with a bone.jpg",
      description:
        "A Basset Fauve de Bretagne resting with a bone, displaying its coarse reddish-fawn wire coat and compact frame.",
      creator: "Trogain",
      uploader: "Trogain",
      capturedOn: "2018-12-24",
      uploadedOn: "2020-07-25",
      width: 4608,
      height: 3456,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Trogain, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Basset_fauve_de_bretagne_with_a_bone.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-25"
    }
  ],

  overview: {
    summary:
      "A nimble, short-legged French scenthound from Brittany with a harsh fawn wire coat, cheerful family temperament, and tireless drive on rabbit and small-game trails.",

    description:
      "Built for speed and endurance across thorny coastal scrub, the Basset Fauve de Bretagne is lighter, shorter-backed, and brisker on its feet than heavier basset types. It carries solid bone and firm muscle without loose skin or sluggish weight. Its defining coat is dry, dense, and noticeably harsh to the touch, appearing in warm shades from golden wheaten to brick red, with moderate facial whiskers that never hide its lively dark brown eyes. Fine, inward-folding drop ears hang level with the eyes and taper cleanly toward the nose. Driven and vocal when working a fresh trail, the breed settles into an upbeat, affectionate, and sociable companion indoors.",

    history:
      "The breed traces its ancestry to the extinct Grand Fauve de Bretagne, a large rough-coated wolf and stag hound kept by French royalty and Breton nobles from the 1500s. After the French Revolution, rural hunters who tracked game on foot rather than horseback favored a shorter-legged descendant derived from the Griffon Fauve de Bretagne that could push through thick gorse and brambles after rabbits and hares. Popular across Brittany during the nineteenth century, the breed expanded nationwide in France during the late twentieth century after enthusiasts formed a dedicated breed club in 1949 and rebuilt post-war numbers using surviving lines and wire-coated basset crosses. Repeated wins in French rabbit-hunting competitions cemented its reputation, making it one of France's most numerous working bassets and an increasingly popular companion abroad.",

    originalPurpose:
      "Tracking and flushing rabbits, hares, foxes, roe deer, and wild boar on foot through dense Breton gorse, brambles, and woodland.",

    currentRoles: [
      "Solo or small-pack hunting hound for rabbits, hares, and upland game",
      "Scent-tracking, nosework, and barn-hunt participant",
      "Cheerful, adaptable family companion",
      "Competitor in agility, obedience, and rally"
    ]
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "cm",
      male: {
        min: 32,
        max: 38
      },
      female: {
        min: 32,
        max: 38
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 23,
        max: 39
      },
      female: {
        min: 23,
        max: 39
      }
    },

    lifespanYears: {
      min: 13,
      max: 16
    },

    coatType:
      "Very rough, harsh, dry, and fairly short wiry coat that repels dirt and resists matting, never woolly or curly; light facial furnishings without an overly bushy face.",

    coatLength: "Short",

    coatColors: [
      "Fawn (from golden wheaten to brick red)",
      "Fawn with scattered black hairs on the back and ears (tolerated)",
      "Fawn with a small white chest star (tolerated but not preferred)"
    ],

    sheddingLevel:
      "Low to moderate; seasonal shedding with dead wiry hairs largely held in the coat until combed or hand-stripped out",

    droolingLevel:
      "Low; clean, well-fitting lips with no excess droop",

    distinctiveFeatures: [
      "Compact, stocky, low-set hound frame that is longer than tall yet shorter-backed and faster than heavier bassets",
      "Withers height of 32 to 38 cm for both males and females (with a 2 cm allowance for standout individuals)",
      "Working weight typically between 23 and 39 lb in trim, athletic condition",
      "Very harsh, dry, rather short fawn wiry coat spanning golden wheaten to brick red",
      "Slightly elongated skull with a clear occiput, moderate stop, and gently tapering muzzle",
      "Strong jaws closing in an even scissor bite",
      "Dark brown, lively eyes framed by modest eyebrows that leave vision unobstructed",
      "Fine drop ears set level with the eye, folding slightly inward to a point and covered in shorter, finer, darker hair",
      "Short, muscular neck free of throatiness, joining well-angled shoulders",
      "Deep, broad chest, rounded ribs, short firm back, and muscular loin",
      "Medium-length tapered tail carried above the topline in a gentle sickle curve when active",
      "Good-boned straight or barely crooked forelegs, muscular parallel hindquarters, and tight arched feet with hard pads"
    ]
  },

  temperament: {
    traits: [
      "Cheerful, lively, and affectionate at home",
      "Sociable and peaceful with other dogs and family members",
      "Bold, persistent, and enthusiastic when tracking a scent",
      "Intelligent and quick to engage in play or training",
      "Friendly and outgoing with visitors rather than territorial",
      "Sturdy and patient around respectful children",
      "Adaptable to varied routines and living settings",
      "Strong instinct to chase rabbits and small wildlife once a trail is caught",
      "Gives a clear, carrying hound voice when excited by game"
    ],

    scores: {
      affection: 5,
      withChildren: 5,
      withDogs: 5,
      withStrangers: 4,
      protectiveness: 2,
      independence: 4,
      trainability: 4,
      barking: 3,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "Moderate to high; an energetic, quick-moving small hound that needs brisk daily walks, secure play, and regular mental or scent challenges",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Daily leashed walks and trail outings with time to explore scents",
        "Securely fenced yard play, ball rolling, and indoor hide-and-seek games",
        "Dog sports including agility, obedience, rally, tracking, and nosework",
        "Supervised playdates with other friendly dogs",
        "Puzzle feeders and trick training to keep a sharp mind occupied"
      ]
    },

    grooming: {
      level: "Low to moderate",

      brushing:
        "Comb weekly with a fine-toothed comb followed by a stiff-bristled brush to clear loose hair and keep the harsh coat tidy.",

      bathing:
        "Bathe only occasionally when muddy or soiled, using a gentle dog shampoo that does not soften the natural dirt-repelling wire texture.",

      notes: [
        "Hand-strip or pluck dead outer coat roughly twice a year—especially on heavier-coated dogs—to preserve the harsh texture and rich fawn color.",
        "Check drop ears regularly for wax, moisture, or odor and wipe gently with a veterinarian-approved ear cleanser.",
        "Inspect paws and coat for burrs or thorns after walks through brush.",
        "Trim nails regularly to prevent overgrowth or splitting.",
        "Brush teeth several times a week with enzymatic canine toothpaste."
      ]
    },

    training: {
      difficulty:
        "Moderate; bright and eager to work with its person, but a powerful nose can override recall if training does not start early",

      tips: [
        "Use upbeat positive reinforcement, tasty food rewards, and engaging games.",
        "Begin attention, recall, and loose-leash training in early puppyhood before independent scent-chasing habits set in.",
        "Always walk on a leash and restrict off-leash play to securely fenced spaces, as a fresh rabbit scent can trigger immediate pursuit.",
        "Pair physical outings with daily mental puzzles and short, varied trick sessions to prevent mischief.",
        "Avoid harsh corrections, which can dampen cooperation in this cheerful hound."
      ],

      socialization:
        "Introduce puppies early and calmly to varied people, friendly dogs, street noises, car rides, and routine handling so their naturally outgoing temperament stays confident and well-mannered."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool and damp climates, where the dense wire coat offers natural weather protection",
        "Warmer climates with indoor cooling, shade, fresh water, and walks timed for cooler hours"
      ],

      aloneTimeTolerance:
        "Moderate once daily exercise and mental engagement are satisfied, though this sociable hound thrives on regular human or canine company."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced commercial or veterinarian-approved home-prepared diet matched to the dog's life stage (puppy, adult, or senior).",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until about six months old, then two daily meals on a balanced growth formula.",
      adult:
        "Two measured meals daily to sustain active energy while preventing overeating.",
      senior:
        "Two portion-controlled meals daily adjusted for lower calorie burn and healthy joint support."
    },

    guidelines:
      "Measure every meal and monitor waist and rib feel regularly, since this breed can put on excess weight easily if overfed or given too many training treats. Split daily rations into two meals and keep clean, fresh water available at all times.",

    considerations: [
      "Keep weight lean so extra pounds do not strain the low-set back and joints.",
      "Count training treats toward the daily calorie budget to prevent gradual obesity.",
      "Avoid high-fat table scraps and unsafe human foods.",
      "Transition between food formulas gradually over five to seven days."
    ],

    note:
      "Calorie requirements shift with age and daily hunting or exercise output. Consult a veterinarian if you notice weight gain or dietary sensitivities."
  },

  health: {
    overview:
      "The Basset Fauve de Bretagne is generally hardy and long-lived, with a typical life expectancy of 13 to 16 years and many individuals remaining vigorous into old age. A scientifically established breed-specific mutation in the ADAMTS17 gene causes primary open angle glaucoma (POAG) in affected dogs, for which a reliable DNA test is available. Other health considerations monitored by breeders and veterinarians include patellar luxation, cardiac disorders such as cardiomyopathies, progressive retinal atrophy (PRA), epilepsy, skin allergies, age-related thyroid issues, and drop-ear infections.",

    commonConditions: [
      "Primary open angle glaucoma (POAG) — a scientifically established inherited eye disorder linked to a breed-specific ADAMTS17 mutation that raises intraocular pressure and can cause vision loss; carriers and at-risk pairings can be avoided via DNA testing",
      "Progressive retinal atrophy (PRA) — an inherited retinal degeneration monitored through specialist veterinary eye exams",
      "Patellar luxation — intermittent slipping of the kneecap evaluated by veterinary orthopedic examination",
      "Cardiomyopathies — heart muscle conditions monitored via veterinary cardiac exams",
      "Epilepsy — seizure disorders reported in the breed and tracked by responsible breeding programs",
      "Skin allergies and age-related thyroid issues — dermatological sensitivities and declining thyroid function seen in some individuals, manageable with veterinary care",
      "Otitis externa (ear infections) — moisture and wax buildup inside folded drop ears, largely preventable with routine weekly checks"
    ],

    preventiveCare: [
      "Verify that breeding parents have completed DNA testing for primary open angle glaucoma along with patella, cardiac, and veterinary ophthalmologist evaluations.",
      "Check drop ears regularly for redness, wax, or odor and keep canals clean and dry.",
      "Maintain a lean body weight to reduce strain on the spine and knees.",
      "Keep up with annual veterinary wellness exams, parasite prevention, and dental care."
    ],

    recommendedScreenings: [
      "DNA test for primary open angle glaucoma (ADAMTS17 variant)",
      "Veterinary patella evaluation prior to breeding",
      "Veterinary cardiac examination prior to breeding",
      "Specialist veterinary ophthalmologist eye examination"
    ],

    dentalCare:
      "Brush teeth several times weekly with enzymatic canine toothpaste and schedule periodic veterinary dental exams to keep the strong scissor bite and gums healthy.",

    earCare:
      "Check the folded drop ears each week for wax, debris, or redness. Wipe gently with a veterinarian-recommended cleanser and dry the ear flaps thoroughly.",

    skinCare:
      "Inspect the skin beneath the wiry coat during weekly combing for parasites, burrs, or allergy-related irritation; periodic hand-stripping keeps dead hair from trapping moisture."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Active singles, couples, and families wanting a cheerful, affectionate small hound",
      "House or apartment residents who provide brisk daily walks and mental enrichment",
      "Multi-dog homes that value friendly, pack-oriented sociability",
      "First-time owners ready to commit to consistent early training and leash safety",
      "Dog-sport enthusiasts interested in nosework, tracking, agility, rally, or barn hunt"
    ],

    notIdealFor: [
      "Owners expecting reliable off-leash walking in unfenced areas with wildlife",
      "Homes with free-roaming pet rabbits or small rodents",
      "People looking for a wary or protective watchdog",
      "Households where a dog would be left alone for long hours every day"
    ]
  },

  funFacts: [
    "The French word 'bas' means 'low,' reflecting how shorter-legged bassets were developed from taller French hounds so foot-hunters could keep pace through thick brush.",
    "Brittany produced three closely linked fawn hunting hounds: the extinct Grand Fauve de Bretagne, the medium Griffon Fauve de Bretagne, and the compact Basset Fauve de Bretagne.",
    "Despite its short legs, the Basset Fauve de Bretagne is built lighter and shorter in the back than heavier bassets, letting it scramble quickly over rocky terrain and dense gorse.",
    "Its rough, dirt-repelling wire coat makes it almost wash-and-wear, needing only weekly combing and occasional hand-stripping rather than frequent baths.",
    "Normally quiet indoors, the breed switches immediately into a carrying hound voice when a rabbit darts across the yard."
  ],

  faq: [
    {
      question: "What kind of dog is a Basset Fauve de Bretagne?",
      answer:
        "It is a small, agile French scenthound from Brittany with a harsh fawn wire coat, folded drop ears, and an affectionate, upbeat personality both in the field and at home."
    },
    {
      question: "How tall and heavy does a Basset Fauve de Bretagne get?",
      answer:
        "Both males and females stand 32 to 38 cm at the withers and typically weigh 23 to 39 lb in lean, active condition."
    },
    {
      question: "What is the average lifespan of a Basset Fauve de Bretagne?",
      answer:
        "Most Basset Fauve de Bretagnes live 13 to 16 years, and many remain lively well into their mid-teens with good weight management and routine veterinary care."
    },
    {
      question: "How much grooming does a Basset Fauve de Bretagne need?",
      answer:
        "Grooming is straightforward: go through the coat weekly with a fine-toothed comb and a stiff brush, hand-strip dead outer hairs roughly twice a year, trim nails regularly, and check the drop ears every week."
    },
    {
      question: "Can a Basset Fauve de Bretagne live in an apartment?",
      answer:
        "Yes. Its compact size and calm, adaptable indoor demeanor suit apartment life well as long as it gets several brisk daily walks and regular mental or scent-based play."
    },
    {
      question: "Are Basset Fauve de Bretagnes good with children and other dogs?",
      answer:
        "Yes. They are typically cheerful, sturdy, and gentle with respectful children, and their pack-hunting heritage makes them very sociable with other dogs, though small pet rodents or rabbits can trigger chase instincts."
    },
    {
      question: "Can a Basset Fauve de Bretagne be walked off-leash?",
      answer:
        "Only inside a securely fenced area. As a keen scenthound bred to find rabbits, an interesting scent trail can quickly override recall."
    },
    {
      question: "How much daily exercise does a Basset Fauve de Bretagne need?",
      answer:
        "Plan for roughly 45 to 60 minutes of daily activity—combining brisk leashed walks, fenced play, and brain-engaging games like hide-and-seek, nosework, or rally."
    },
    {
      question: "What health tests are recommended for Basset Fauve de Bretagne breeding dogs?",
      answer:
        "Key pre-breeding checks include a DNA test for primary open angle glaucoma (ADAMTS17 variant), a patella evaluation, a cardiac exam, and a specialist veterinary ophthalmologist eye exam."
    }
  ],

  references: [
    "natureserve-canis-lupus-familiaris",
    "fci-basset-fauve-de-bretagne-official-standard",
    "fci-basset-fauve-de-bretagne-nomenclature",
    "scc-basset-fauve-de-bretagne-standard",
    "club-du-fauve-de-bretagne-profile",
    "the-kennel-club-basset-fauve-de-bretagne-standard",
    "akc-basset-fauve-de-bretagne-breed-profile",
    "ukc-basset-fauve-de-bretagne-breed-standard",
    "pubmed-adamts17-poag-basset-fauve-de-bretagne",
    "wikimedia-basset-fauve-de-bretagne-lilly-m",
    "wikimedia-basset-fauve-de-bretagne-600-tomasz-sienicki",
    "the-dog-api"
  ],

  evidence: {
    scientificName: {
      reliability: "reliable_source",
      sources: [
        {
          id: "natureserve-canis-lupus-familiaris",
          role: "verified",
          locator: "Canis lupus familiaris (Domestic Dog) taxonomic record"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Domestic dog taxonomic name verified via NatureServe Explorer."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-fauve-de-bretagne-official-standard",
          role: "verified",
          locator: "Standard heading: BASSET FAUVE DE BRETAGNE"
        },
        {
          id: "fci-basset-fauve-de-bretagne-nomenclature",
          role: "verified",
          locator: "Official nomenclature (No. 36): BASSET FAUVE DE BRETAGNE, BASSET LEONADO DE BRETAÑA"
        },
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "verified",
          locator: "About the Breed: Fawn Colored Brittany Basset, Fauve"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names: Fawn Basset of Brittany, Basset Fauve"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified across FCI Standard No. 36, FCI Nomenclature, AKC breed profile, and The Dog API."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-fauve-de-bretagne-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 6 Scenthounds and related breeds, Section 1.3 Small-sized Hounds, with working trial"
        },
        {
          id: "fci-basset-fauve-de-bretagne-nomenclature",
          role: "verified",
          locator: "Group 6, Section 1 Scent hounds, Subsection Small-sized Hounds, with working trial"
        },
        {
          id: "the-kennel-club-basset-fauve-de-bretagne-standard",
          role: "verified",
          locator: "Hound Group"
        },
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "verified",
          locator: "Hound Group (fully recognized effective December 31, 2025 / 2026)"
        },
        {
          id: "ukc-basset-fauve-de-bretagne-breed-standard",
          role: "cited",
          locator: "Scenthound Group"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group: Hound"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "User-facing group label omits registry names per Rule 5; AKC status updated from Foundation Stock Service to full Hound Group recognition."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-fauve-de-bretagne-official-standard",
          role: "verified",
          locator: "ORIGIN: France; BRIEF HISTORICAL SUMMARY (Brittany)"
        },
        {
          id: "fci-basset-fauve-de-bretagne-nomenclature",
          role: "verified",
          locator: "Country of origin: FRANCE"
        },
        {
          id: "scc-basset-fauve-de-bretagne-standard",
          role: "verified",
          locator: "Origine: France (Bretagne)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: Brittany, France"
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-fauve-de-bretagne-official-standard",
          role: "verified",
          locator: "UTILIZATION (hare, fox, roe deer, wild boar), BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "scc-basset-fauve-de-bretagne-standard",
          role: "verified",
          locator: "Historique (Grand Fauve de Bretagne, Griffon Fauve de Bretagne, 1949 Club du Fauve de Bretagne), comportement et chasse"
        },
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "verified",
          locator: "About the Breed and History"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Written in original prose grounded in FCI Standard No. 36, SCC, and AKC records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-fauve-de-bretagne-official-standard",
          role: "verified",
          locator: "HEAD, BODY, TAIL, LIMBS, COAT (very rough, harsh, rather short), COLOUR (golden wheaten to red brick; few black hairs on back/ears and small white chest star tolerated), SIZE"
        },
        {
          id: "the-kennel-club-basset-fauve-de-bretagne-standard",
          role: "verified",
          locator: "General Appearance, Head and skull, Ears, Characteristics"
        },
        {
          id: "scc-basset-fauve-de-bretagne-standard",
          role: "verified",
          locator: "Morphologie, poil dur fauve, proportions"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.coat_colors (lists broad unstandardized colour set; excluded in favor of FCI fawn range)"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Coat colours follow FCI Standard No. 36 (golden wheaten to brick red with tolerated scattered black hairs on back/ears and small white chest star), excluding The Dog API's broad unstandardized colour list."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-fauve-de-bretagne-official-standard",
          role: "verified",
          locator: "SIZE: Height at withers 32-38 cm for males and females (with a tolerance of 2 cm for exceptional specimens)"
        },
        {
          id: "the-kennel-club-basset-fauve-de-bretagne-standard",
          role: "verified",
          locator: "Size: 32-38 cms"
        },
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "cited",
          locator: "Height: 12.5-15.5 inches"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height: 32-39 cm"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Preserved in published centimetres from FCI Standard No. 36 (32-38 cm for both sexes), which supersedes The Dog API's 32-39 cm range."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "verified",
          locator: "Weight: 23-39 pounds"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.weight: male 12-18 kg, female 12-17 kg"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "FCI Standard No. 36 does not specify a numerical weight. Preserved in published pounds (23-39 lb) directly from the AKC breed profile without unit conversion; The Dog API lists 12-18 kg (males) and 12-17 kg (females)."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 13-16 years (Health section also notes many live to 16+ years)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span: 11-15 years"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Uses AKC's published 13-16 year life expectancy; The Dog API lists 11-15 years."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "verified",
          locator: "Grooming: Shedding is seasonal; coarse wiry coat"
        },
        {
          id: "fci-basset-fauve-de-bretagne-official-standard",
          role: "verified",
          locator: "COAT: Very rough, harsh, rather short"
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-fauve-de-bretagne-official-standard",
          role: "verified",
          locator: "Lips: Well covering the lower jaw without excess"
        },
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (low)"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Clean, tight-fitting lips minimize drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-fauve-de-bretagne-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Passionate hunters yet sociable, affectionate, and well-balanced companions"
        },
        {
          id: "the-kennel-club-basset-fauve-de-bretagne-standard",
          role: "verified",
          locator: "Characteristics: Courageous, hardy, good nose, very nimble"
        },
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "verified",
          locator: "Affectionate, Alert, Cheerful; smart, courageous, determined, eager to please"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament: Friendly, energetic, intelligent, courageous, alert, happy, outgoing, loyal, affectionate"
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics ratings"
        },
        {
          id: "scc-basset-fauve-de-bretagne-standard",
          role: "cited",
          locator: "Comportement: sociable, équilibré, jamais agressif, passionné de chasse"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1-5 scores reflecting verified small scenthound sociability, high scent drive, and cheerful disposition."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "cited",
          locator: "Grooming (weekly fine-toothed comb + stiff brush, seasonal shedding, hand-stripping), Exercise, Training"
        },
        {
          id: "scc-basset-fauve-de-bretagne-standard",
          role: "cited",
          locator: "Vivre en ville: at least three daily outdoor outings"
        }
      ],
      verifiedOn: null,
      note:
        "Combines kennel club grooming, leash safety, and daily activity guidance."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "verified",
          locator: "Exercise: energetic, loves to play, needs leashed walks or fenced play plus mental stimulation"
        },
        {
          id: "fci-basset-fauve-de-bretagne-official-standard",
          role: "verified",
          locator: "GENERAL APPEARANCE: Remarkable energy coupled with hardiness"
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "cited",
          locator: "Daily exercise and indoor/outdoor play guidance"
        },
        {
          id: "scc-basset-fauve-de-bretagne-standard",
          role: "cited",
          locator: "Vivre en ville: at least three regular outings per day"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial estimate of 45 to 60 minutes daily for a healthy adult small hunting hound."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-basset-fauve-de-bretagne-standard",
          role: "verified",
          locator: "Vivre en ville: adapts well to city and apartment living when given regular outdoor outings"
        },
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "verified",
          locator: "Compact adaptable hound happy indoors after outdoor activity"
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "verified",
          locator: "Exercise: fenced yard recommended for safe play"
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-basset-fauve-de-bretagne-official-standard",
          role: "verified",
          locator: "COAT: Rough, harsh weather-resistant coat adapted to Brittany"
        },
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "verified",
          locator: "Hardy all-weather hunting hound"
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "cited",
          locator: "Sociable, people-oriented hound traits"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "cited",
          locator: "Nutrition: age-appropriate diet, watch calorie intake and treats as some dogs are prone to overweight"
        }
      ],
      verifiedOn: null,
      note: "Reflects AKC nutrition and weight-control guidance."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "cited",
          locator: "Life-stage nutrition guidance"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pubmed-adamts17-poag-basset-fauve-de-bretagne",
          role: "verified",
          locator: "Forman et al. (PLoS One, 2015): ADAMTS17 mutation strongly associated with primary open angle glaucoma (POAG) in Basset Fauve de Bretagne"
        },
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "verified",
          locator: "Health: POAG DNA test, PRA, epilepsy, cardiomyopathies, skin allergies, age-related thyroid issues; Patella, Cardiac, Ophthalmologist evaluations"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Distinguishes scientifically established ADAMTS17 primary open angle glaucoma from broader monitored breed conditions and drop-ear hygiene."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pubmed-adamts17-poag-basset-fauve-de-bretagne",
          role: "verified",
          locator: "Primary open angle glaucoma (POAG) linked to ADAMTS17 variant"
        },
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "verified",
          locator: "Health: PRA, epilepsy, cardiomyopathies, skin allergies, age-related thyroid issues, patella evaluation"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Grounded in peer-reviewed genetics and AKC health screening documentation."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "cited",
          locator: "Health, Grooming (ear and nail care), and Nutrition (weight control)"
        }
      ],
      verifiedOn: null,
      note: "Preventive care tailored to drop-eared, low-set hounds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "verified",
          locator: "Recommended Health Tests From the National Breed Club: Patella Evaluation, Cardiac Exam, Ophthalmologist Evaluation; plus POAG DNA test"
        },
        {
          id: "pubmed-adamts17-poag-basset-fauve-de-bretagne",
          role: "verified",
          locator: "Genetic testing for ADAMTS17-associated POAG"
        },
        {
          id: "club-du-fauve-de-bretagne-profile",
          role: "cited",
          locator: "Parent breed club health monitoring"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Reflects AKC National Breed Club recommended screenings (patella, cardiac, ophthalmologist) plus established POAG DNA testing."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-basset-fauve-de-bretagne-official-standard",
          role: "cited",
          locator: "Jaws/teeth: strong jaws with even scissor bite"
        },
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "cited",
          locator: "Grooming: brush teeth regularly"
        }
      ],
      verifiedOn: null,
      note: "Standard canine dental hygiene guidance."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "the-kennel-club-basset-fauve-de-bretagne-standard",
          role: "cited",
          locator: "Ears: set level with eye, folding inwards ending in a point"
        },
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "cited",
          locator: "Grooming: check ears regularly"
        }
      ],
      verifiedOn: null,
      note: "Routine drop-ear inspection and cleaning guidance."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-basset-fauve-de-bretagne-official-standard",
          role: "cited",
          locator: "Skin: rather thick, supple; rough harsh coat"
        },
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "cited",
          locator: "Health: skin allergies; Grooming: weekly combing and hand-stripping"
        }
      ],
      verifiedOn: null,
      note: "General skin and wire-coat care guidance."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "cited",
          locator: "About the Breed, Temperament, Exercise, and Training"
        },
        {
          id: "scc-basset-fauve-de-bretagne-standard",
          role: "cited",
          locator: "Comportement et vie en ville"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability assessment based on compact size, sociability, and strong scenthound prey drive."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "verified",
          locator: "Did You Know ('bas' means low; three Brittany fawn hounds: Grand, Griffon, Basset), About the Breed (hound voice for rabbits), Grooming (wash-and-wear wire coat)"
        },
        {
          id: "fci-basset-fauve-de-bretagne-official-standard",
          role: "verified",
          locator: "General appearance and Brittany hunting heritage"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified breed history, coat, and behavioral facts written in original prose."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-basset-fauve-de-bretagne-official-standard",
          role: "verified",
          locator: "Origin, height (32-38 cm), coat, and colours"
        },
        {
          id: "akc-basset-fauve-de-bretagne-breed-profile",
          role: "verified",
          locator: "Weight (23-39 lb), lifespan (13-16 years), grooming, leash safety, recommended health tests"
        },
        {
          id: "scc-basset-fauve-de-bretagne-standard",
          role: "verified",
          locator: "Apartment adaptability and sociability"
        },
        {
          id: "pubmed-adamts17-poag-basset-fauve-de-bretagne",
          role: "verified",
          locator: "ADAMTS17 POAG genetic test"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "FAQ answers synthesize verified kennel club standards and peer-reviewed genetics in original prose without naming registries."
    }
  },

  updatedOn: "2026-11-25"
};
