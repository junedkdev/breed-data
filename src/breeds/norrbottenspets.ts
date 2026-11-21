import type { Breed } from "../schema/breed.types";

export const norrbottenspets: Breed = {
  slug: "norrbottenspets",
  name: "Norrbottenspets",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Nordic Spitz",
    "Pohjanpystykorva",
    "Norrbottenspitz",
    "Spitz de Norrbotten",
    "Nob"
  ],

  group: "Nordic Hunting Spitz (Northern Hunting Dog)",

  origin: {
    country: "Sweden",
    region: "Norrbotten, northern Sweden, and northern Finland"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Nordicspitz1.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Nordicspitz1.jpg",
      title: "Nordicspitz1.jpg",
      description:
        "An adult Norrbottenspets outdoors showing its white coat with warm patches, erect triangular ears, and curled tail.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2022-12-02",
      uploadedOn: "2025-07-31",
      width: 1250,
      height: 1300,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Nordicspitz1.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Nordic_Spitz.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Nordic_Spitz.jpg",
      title: "Nordic Spitz.jpg",
      description:
        "A Norrbottenspets (Pohjanpystykorva) photographed outdoors in profile.",
      creator: "Kaisa Kotajärvi",
      uploader: "Jotsio~commonswiki",
      capturedOn: null,
      uploadedOn: "2006-12-24",
      width: 738,
      height: 629,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Kaisa Kotajärvi, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Nordic_Spitz.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    }
  ],

  overview: {
    summary:
      "A small, agile Scandinavian hunting spitz from northern Sweden and Finland, distinguished by its crisp white coat with reddish-yellow patches, erect ears, loosely curled tail, fearless field drive, and warm, gentle home manner.",

    description:
      "The Norrbottenspets is a compact, slightly rectangular spitz built with lean, sinewy muscle and no physical exaggerations, enabling effortless movement over rough forest ground and deep snow. Its weatherproof double coat combines a hard, short, straight outer coat with a fine, dense undercoat, typically displaying a clean white ground broken by distinct patches in shades of red or yellow covering the ears and sides of the head. A wedge-shaped head carries a moderately marked stop, dark brown almond-shaped eyes set obliquely, thin tight-fitting lips, and high-set, stiffly erect ears with slightly rounded tips. The high-set tail curves in a loose arch with its tip resting against the thigh. Bold, keen, and vocal when locating forest game birds, it shifts easily into a calm, friendly, and affectionate family companion indoors.",

    history:
      "Descended from small northern laika-type hunting spitzes that lived alongside prehistoric hunters near the northern reaches of Scandinavia, the Norrbottenspets served homesteaders in northern Sweden and Finland for generations. Valued for hunting forest grouse, small fur-bearing animals such as marten and squirrel, and even alerting hunters to moose, the breed suffered a sharp drop after World War II when fur prices collapsed and registrations ceased. National authorities declared the breed extinct in 1948, until enthusiasts discovered surviving pure-type working dogs on remote farms in northern Bothnia about a decade later. Through dedicated recovery efforts, the breed was formally re-registered in 1967 and remains a prized working bird dog and family companion across Scandinavia and beyond.",

    originalPurpose:
      "Locating and bark-pointing forest grouse (such as capercaillie and black grouse), hunting small fur game, baying moose, and serving as an alert farm dog.",

    currentRoles: [
      "Bark-pointing forest bird and small-game hunting dog",
      "Field trial, hunting test, and tracking competitor",
      "Affectionate, active household companion",
      "Canine athlete in agility, obedience, rally, and nosework"
    ]
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "cm",
      male: {
        min: 43,
        max: 47
      },
      female: {
        min: 40,
        max: 44
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 9,
        max: 14
      },
      female: {
        min: 8,
        max: 14
      }
    },

    lifespanYears: {
      min: 12,
      max: 16
    },

    coatType:
      "Short, hard, straight, fairly close-lying outer coat over a fine, dense undercoat; shortest on the skull, muzzle, ears, and fronts of legs, and longer on the neck, backs of thighs, and underside of the tail.",

    coatLength: "Short",

    coatColors: [
      "White with red or yellow patches (preferred)",
      "White with tan, fawn, or orange markings",
      "White with black or agouti patches (tolerated)"
    ],

    sheddingLevel:
      "Moderate year-round, with heavier seasonal undercoat shedding in spring and autumn",

    droolingLevel:
      "Low; thin, dry, tight-fitting lips produce minimal slobber",

    distinctiveFeatures: [
      "Small, slightly rectangular, sinewy spitz frame built for agility in northern forests",
      "Ideal height at the withers of 45 cm in males (acceptable range 43 to 47 cm) and 42 cm in females (acceptable range 40 to 44 cm)",
      "Adult working weight typically 9 to 14 kg in males and 8 to 14 kg in females",
      "Clean white ground coat with fairly large, clearly defined patches—ideally in shades of red or yellow covering the sides of the head and ears",
      "Wedge-shaped head tapering smoothly to a black nose, with a flat skull, slightly arched forehead, and moderate stop",
      "Well-developed jaws with a complete scissor bite and thin, tight lips",
      "Medium-sized, dark brown, almond-shaped eyes set obliquely with a calm, alert gaze",
      "High-set, stiffly erect ears slightly above medium size with firm leather and gently rounded tips",
      "High-set tail carried in a high, loose curl with the tip touching the side of the thigh",
      "Small, strong, forward-pointing feet with tight, well-arched toes and tough pads"
    ]
  },

  temperament: {
    traits: [
      "Attentive, alert, and keenly aware of sights and sounds",
      "Fearless, bold, and energetic in the field",
      "Friendly, kind, and deeply affectionate with family",
      "Self-confident and lively without shyness or aggression",
      "Calm and quiet indoors when adequately exercised",
      "Playful and gentle with familiar children",
      "Generally sociable with other dogs",
      "Strong natural hunting drive toward birds and small wildlife",
      "Clever, quick to learn, and responsive to positive guidance"
    ],

    scores: {
      affection: 5,
      withChildren: 5,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: 2,
      independence: 3,
      trainability: 4,
      barking: 3,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; an energetic, agile hunting spitz that needs daily brisk exercise and mental outlets to stay settled indoors",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Daily brisk walks, forest trail hikes, and cold-weather treks",
        "Secure fenced-yard play, fetch, and scent-tracking games",
        "Traditional bark-pointing bird hunts and field trials",
        "Canine sports such as agility, rally, obedience, and nosework",
        "Indoor trick training and hide-and-seek games on bad-weather days"
      ]
    },

    grooming: {
      level: "Low to moderate",

      brushing:
        "Brush once a week with a slicker brush or metal comb to lift loose undercoat, stepping up to daily brushing during spring and autumn sheds.",

      bathing:
        "Bathe only occasionally when muddy; the coat is naturally clean, repels dried dirt well, and has little doggy odor.",

      notes: [
        "Never shave the double coat, as it insulates against both cold and heat.",
        "Check the erect ears weekly for wax or forest debris and clean gently as needed.",
        "Trim strong nails regularly with clippers or a grinder to prevent cracking.",
        "Inspect paws and pads for thorns or ice buildup after woodland walks."
      ]
    },

    training: {
      difficulty:
        "Moderate; bright, eager, and cooperative, yet independent enough around wildlife scents to require engaging, reward-based training",

      tips: [
        "Use upbeat positive reinforcement, food rewards, and short, varied sessions.",
        "Build reliable recall early on a long line, remembering that birds and squirrels can override loose off-leash focus.",
        "Avoid harsh scolding or heavy corrections, which can dampen enthusiasm in this sensitive spitz.",
        "Teach a polite quiet cue early to manage alert barking while respecting its natural vocal style.",
        "Channel keen hunting curiosity into nosework, agility, or structured retrieving games."
      ],

      socialization:
        "Introduce puppies early and positively to varied people, calm dogs, traffic, and household sounds so their natural confidence matures into friendly composure."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cold, snowy northern climates where the dense double coat excels",
        "Temperate climates",
        "Warm climates when shade, fresh water, indoor cooling, and cooler-hour walks are provided"
      ],

      aloneTimeTolerance:
        "Moderate once thoroughly exercised, though long daily isolation without company or enrichment can lead to nuisance barking."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced food formulated for small active breeds, matched to life stage, body condition, and seasonal workload.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals per day until about six months old, then two meals daily.",
      adult:
        "Two measured meals per day to sustain steady energy.",
      senior:
        "Two portion-controlled meals per day adjusted for lower calorie needs while maintaining muscle."
    },

    guidelines:
      "Measure every meal consistently and adjust portions to keep a trim, athletic waistline with easily felt ribs. Count training treats within the daily calorie budget and provide fresh drinking water at all times.",

    considerations: [
      "Watch portion sizes closely during quieter winter months, as some individuals gain weight easily.",
      "Increase energy intake during active hunting or heavy hiking seasons.",
      "Avoid fatty table scraps and switch diets gradually over five to seven days."
    ],

    note:
      "Discuss specific calorie amounts and seasonal adjustments with a veterinarian based on your dog's age and activity level."
  },

  health: {
    overview:
      "The Norrbottenspets is generally a very hardy, long-lived hunting breed with a typical lifespan of 12 to 16 years. A 2017 peer-reviewed genetic study found that despite its small population and near-extinction in the mid-twentieth century, the breed retains high genetic diversity (comparable to mixed-breed dogs), supported by careful management and open-registry practices. Mandatory and recommended breeding health programs primarily monitor patellar luxation and inherited eye disorders (such as hereditary cataracts, retinal dysplasia, PRA, and PHTVL/PHPV), along with hip evaluations, epilepsy tracking, and hereditary ataxia screening in suspected lines. A 2008 veterinary study also noted that Nordic Spitz breeds were overrepresented among middle-aged pregnant females diagnosed with gestational diabetes mellitus.",

    commonConditions: [
      "Patellar luxation — monitored kneecap displacement graded clinically before breeding; dogs with mild grade 1 are paired only with clear grade 0 mates in Nordic breeding programs",
      "Inherited eye disorders (hereditary cataracts, progressive retinal atrophy, retinal dysplasia, and PHTVL/PHPV) — monitored through mandatory periodic veterinary ophthalmologist exams",
      "Hip dysplasia — monitored orthopedic condition screened via pre-breeding radiographic evaluation",
      "Epilepsy — tracked in Nordic breed health databases to avoid breeding affected dogs or close relatives",
      "Hereditary ataxia — monitored neurological condition for which carrier testing is recommended when suspected in a pedigree",
      "Gestational diabetes mellitus (GDM) — reported in a peer-reviewed retrospective study showing overrepresentation among middle-aged pregnant Nordic Spitz females"
    ],

    preventiveCare: [
      "Choose puppies from parents with current patella, eye, and hip clearances and documented low inbreeding.",
      "Keep weight lean and muscles conditioned to reduce strain on knees and hips.",
      "Monitor pregnant females closely with veterinary care during the second half of gestation for signs of elevated thirst or blood sugar.",
      "Check ears, teeth, and paws regularly, especially after woodland hunts or deep snow outings.",
      "Schedule annual veterinary wellness exams and age-appropriate bloodwork as the dog reaches its senior years."
    ],

    recommendedScreenings: [
      "Clinical patellar luxation grading prior to breeding",
      "Periodic eye examination by a board-certified veterinary ophthalmologist (screening for cataracts, PRA, RD, and PHTVL/PHPV)",
      "Radiographic hip dysplasia evaluation prior to breeding",
      "Pedigree review for epilepsy risk and genetic testing for hereditary ataxia when indicated by family history"
    ],

    dentalCare:
      "Brush teeth several times a week with dog-safe toothpaste and schedule routine dental checks during annual veterinary visits.",

    earCare:
      "Check the erect ears weekly for wax, dirt, or irritation and clean gently with a vet-recommended ear wash when needed.",

    skinCare:
      "Inspect the skin beneath the dense double coat during weekly brushing for ticks, burrs, or small scratches from forest brush."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Hunters, hikers, and active households who spend daily time outdoors in all seasons",
      "Families wanting a cheerful, gentle, and affectionate small-to-medium companion",
      "Homes with a securely fenced yard in suburban or rural settings",
      "Dog sport enthusiasts interested in agility, rally, tracking, or nosework"
    ],

    notIdealFor: [
      "Sedentary owners looking for a low-exercise lap dog",
      "Quiet apartment buildings where alert barking could disturb neighbors",
      "Households with free-roaming pet birds, rabbits, or rodents",
      "Owners expecting reliable off-leash walking in unfenced areas with wildlife"
    ]
  },

  funFacts: [
    "After post-war fur prices fell and registrations stopped, the Norrbottenspets was declared extinct in 1948—only to be rediscovered on remote farms in northern Bothnia and officially revived in 1967.",
    "In Finland, the breed is known as the Pohjanpystykorva and is prized for quietly locating forest grouse and barking steadily beneath the tree to hold the bird's focus for the hunter.",
    "Despite once nearing extinction, a 2017 genetic study showed the breed still maintains heterozygosity levels similar to mixed-breed dogs, aided by an open breeding registry.",
    "Its piebald white coat with crisp red or yellow patches makes it easy to distinguish from the solid red-gold Finnish Spitz.",
    "Though small enough to ride comfortably in a backpack or canoe, a Norrbottenspets is fearless enough to bay moose as well as forest birds.",
    "With regular daily exercise, these lively outdoor hunters are known for settling down quietly and cleanly inside the home."
  ],

  faq: [
    {
      question: "What is a Norrbottenspets?",
      answer:
        "The Norrbottenspets (also called Nordic Spitz or Pohjanpystykorva) is a small, agile Scandinavian hunting spitz from northern Sweden and Finland, known for its white coat with red-yellow patches, erect ears, curled tail, and gentle family nature."
    },
    {
      question: "How does the Norrbottenspets differ from the Finnish Spitz?",
      answer:
        "Both are Nordic bark-pointing bird dogs, but the Norrbottenspets is typically slightly smaller and wears a white base coat with distinct red or yellow patches, whereas the Finnish Spitz has a solid red-gold coat."
    },
    {
      question: "How big does a Norrbottenspets get?",
      answer:
        "Males ideally stand 45 cm at the withers (acceptable range 43 to 47 cm) and typically weigh 9 to 14 kg, while females ideally stand 42 cm (acceptable range 40 to 44 cm) and typically weigh 8 to 14 kg."
    },
    {
      question: "How long do Norrbottenspets live?",
      answer:
        "They are a notably long-lived breed, typically living 12 to 16 years (and sometimes longer) with good nutrition, exercise, and preventive veterinary care."
    },
    {
      question: "How much grooming does a Norrbottenspets need?",
      answer:
        "Weekly brushing keeps the short double coat neat, with daily brushing during spring and autumn undercoat sheds. The coat naturally sheds dirt, carries little odor, and should never be shaved."
    },
    {
      question: "Can a Norrbottenspets live in an apartment?",
      answer:
        "Generally no. While they settle quietly indoors after exercise, their high energy and alert barking make a house with a securely fenced yard a much better fit."
    },
    {
      question: "Are Norrbottenspets good with children and other dogs?",
      answer:
        "Yes. They are typically friendly, gentle, and playful with family children and get along well with other dogs when properly socialized, though small pet rodents or birds are unsafe around their hunting instincts."
    },
    {
      question: "Do Norrbottenspets bark a lot?",
      answer:
        "Barking is part of their bird-hunting heritage, so they naturally alert to unusual sights or wildlife. Adequate daily exercise and early training on a quiet cue keep indoor barking modest."
    },
    {
      question: "How much exercise does a Norrbottenspets need?",
      answer:
        "Plan on about 60 to 90 minutes of daily activity—such as brisk walks, trail hikes, fetch, scent work, or agility—to keep this agile hunter happy and relaxed."
    },
    {
      question: "What health screenings are recommended for Norrbottenspets?",
      answer:
        "Key pre-breeding checks include clinical patellar luxation grading, periodic veterinary ophthalmologist eye exams, radiographic hip evaluations, and pedigree screening for epilepsy or hereditary ataxia where indicated."
    }
  ],

  references: [
    "natureserve-canis-lupus-familiaris",
    "fci-norrbottenspets-official-standard",
    "fci-norrbottenspets-nomenclature",
    "skk-norrbottenspets-breed-standard",
    "suomen-kennelliitto-pohjanpystykorva-profile",
    "spj-pohjanpystykorva-pevisa",
    "akc-norrbottenspets-breed-profile",
    "ukc-norrbottenspets-breed-standard",
    "pubmed-kumpulainen-2017-nordic-spitz-diversity",
    "pubmed-fall-2008-gdm-nordic-spitz",
    "the-dog-api",
    "wikimedia-norrbottenspets-lilly-m",
    "wikimedia-norrbottenspets-600-tomasz-sienicki"
  ],

  evidence: {
    scientificName: {
      reliability: "reliable_source",
      sources: [
        {
          id: "natureserve-canis-lupus-familiaris",
          role: "verified",
          locator: "Taxon record: Canis lupus familiaris (ITIS TSN 726821)"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Verified domestic dog taxonomic name via NatureServe Explorer (ITIS TSN 726821)."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-norrbottenspets-nomenclature",
          role: "verified",
          locator: "Official nomenclature: NORRBOTTENSPETS (276), NORRBOTTENSPITZ, SPITZ DE NORRBOTTEN"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names: Norrbottenspitz, Nordic Spitz, Pohjanpystykorva"
        },
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "verified",
          locator: "About the Breed: Nob"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Verified across FCI Nomenclature, AKC, and The Dog API."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-norrbottenspets-nomenclature",
          role: "verified",
          locator: "Group 5 Spitz and primitive types, Section 2 Nordic Hunting Dogs, subject to working trial"
        },
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "verified",
          locator: "Miscellaneous Class; Hound Group designation"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Written without registry names or numbered section labels in user-facing text."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-norrbottenspets-nomenclature",
          role: "verified",
          locator: "Country of origin: Sweden; definitive acceptance 1968-09-20"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin: Norrbotten, Sweden"
        },
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "verified",
          locator: "About the Breed: northern parts of Sweden and Finland"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-norrbottenspets-official-standard",
          role: "verified",
          locator: "FCI Standard No. 276 (valid 2009-07-28, published 2009-10-21): Brief Historical Summary (post-WWII decline, 1967 reinstatement), General Appearance, Behaviour/Temperament"
        },
        {
          id: "skk-norrbottenspets-breed-standard",
          role: "verified",
          locator: "SKK Norrbottenspets breed overview: forest game birds (capercaillie, black grouse)"
        },
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "verified",
          locator: "About the Breed: agile, sinewy, holds large game like moose, kind home companion"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Rewritten in original prose synthesizing FCI Standard No. 276, SKK, and AKC records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-norrbottenspets-official-standard",
          role: "verified",
          locator: "Head (wedge-shaped, almond dark brown eyes, scissor bite, thin tight lips), Ears, Tail (loose curl touching thigh), Coat (double coat, hard short straight), Colour (pure white with red/yellow patches preferred; black/fawn/agouti tolerated)"
        },
        {
          id: "skk-norrbottenspets-breed-standard",
          role: "verified",
          locator: "Conformation, coat, and ideal height"
        },
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "verified",
          locator: "Breed Colors & Markings: White with Fawn, Orange, Red, Sable, Tan, Cream markings"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Filtered out generic non-breed colors from The Dog API list; preserved FCI color hierarchy."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "skk-norrbottenspets-breed-standard",
          role: "verified",
          locator: "Ideal height at withers: males 45 cm, females 42 cm, acceptable variation ±2 cm (43-47 cm males, 40-44 cm females)"
        },
        {
          id: "fci-norrbottenspets-official-standard",
          role: "verified",
          locator: "Size: Ideal height males 45 cm, females 42 cm (±2 cm tolerance)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric: male 42-46 cm, female 40-44 cm"
        },
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "cited",
          locator: "Height: 16.5-18 inches"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Corrected from earlier draft's ±3 cm (42-48 / 39-45 cm) to official FCI/SKK ±2 cm tolerance (43-47 cm males, 40-44 cm females). Kept official standard over The Dog API's 42-46 cm male range."
    },

    "physical.height.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "skk-norrbottenspets-breed-standard",
          role: "verified",
          locator: "Ideal 45 cm ±2 cm -> max 47 cm"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.height.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "skk-norrbottenspets-breed-standard",
          role: "verified",
          locator: "Ideal 42 cm ±2 cm -> max 44 cm"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric: male 9-14 kg, female 8-14 kg"
        },
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "cited",
          locator: "Weight: 20-30 pounds"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "FCI Standard No. 276 does not publish numerical weight limits. Uses The Dog API verified metric ranges (9-14 kg males, 8-14 kg females), consistent with AKC's 20-30 pounds."
    },

    "physical.weight.male.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric: male max 14 kg"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.weight.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric: female max 14 kg"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span: 12-16 years"
        },
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "cited",
          locator: "Life Expectancy: 14-17 years"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Uses The Dog API's 12-16 years range; AKC notes 14-17 years."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-norrbottenspets-official-standard",
          role: "verified",
          locator: "Coat: double coat with fine dense undercoat"
        },
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "verified",
          locator: "Grooming: double-coated, weekly brushing"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-norrbottenspets-official-standard",
          role: "verified",
          locator: "Lips: thin, dry and tightly fitting"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-norrbottenspets-official-standard",
          role: "verified",
          locator: "Behaviour/Temperament: attentive, bold, keen, lively, self-confident, kind disposition; never nervous, shy or aggressive"
        },
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "verified",
          locator: "About the Breed & Did You Know: fearless, agile, attentive, quiet indoors with daily exercise"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament: Alert, energetic, intelligent, courageous, confident, independent"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics"
        },
        {
          id: "fci-norrbottenspets-official-standard",
          role: "cited",
          locator: "Behaviour/Temperament"
        }
      ],
      verifiedOn: null,
      note: "Editorial 1-5 estimates reflecting documented Nordic spitz friendliness, energy, and alertness."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "cited",
          locator: "Grooming (weekly brushing, clean coat with no odor, nails, ears, teeth), Exercise, Nutrition"
        }
      ],
      verifiedOn: null,
      note: "Practical care guidance tailored to small Nordic hunting spitzes."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "verified",
          locator: "Exercise: vivacious, energetic, playful; daily walks, fenced yard, hiking, dog sports"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "cited",
          locator: "Daily active exercise guidance"
        }
      ],
      verifiedOn: null,
      note: "Estimated 60-90 minutes daily reflects the stamina of an active hunting spitz."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "cited",
          locator: "Exercise and fenced backyard preference; active hunting background"
        }
      ],
      verifiedOn: null,
      note: "Editorial evaluation: high energy and alert barking generally favor a fenced yard over apartment living."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "verified",
          locator: "Exercise: fenced backyard recommended"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-norrbottenspets-official-standard",
          role: "verified",
          locator: "Double coat adapted to harsh northern Scandinavian climates"
        },
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "verified",
          locator: "About the Breed: weatherproof coat built for harsh Scandinavian terrain and climates"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "cited",
          locator: "Active, companionable hunting spitz behavior"
        }
      ],
      verifiedOn: null,
      note: "Moderate alone-time tolerance when adequately exercised beforehand."
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "cited",
          locator: "Nutrition: age-appropriate diet, weight watch, limit treats"
        }
      ],
      verifiedOn: null,
      note: "Standard nutritional guidance for small active hunting breeds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "cited",
          locator: "Life-stage nutrition"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage meal scheduling."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "spj-pohjanpystykorva-pevisa",
          role: "verified",
          locator: "PEVISA 2025-2029: mandatory patellar luxation and eye exams, epilepsy epi-index monitoring, hereditary ataxia carrier testing advice"
        },
        {
          id: "pubmed-kumpulainen-2017-nordic-spitz-diversity",
          role: "verified",
          locator: "J Anim Breed Genet 2017 (PMID 28295678): high SNP heterozygosity (mean Hz = 0.409) despite small population"
        },
        {
          id: "pubmed-fall-2008-gdm-nordic-spitz",
          role: "verified",
          locator: "J Vet Intern Med 2008 (PMID 18976285): Nordic Spitz breeds overrepresented (11/13) in canine gestational diabetes mellitus"
        },
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "verified",
          locator: "Recommended National Breed Club Health Tests: Hip Evaluation, Ophthalmologist Evaluation"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Synthesizes Nordic PEVISA rules, AKC national club recommendations, and peer-reviewed PubMed genetic/veterinary studies."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "spj-pohjanpystykorva-pevisa",
          role: "verified",
          locator: "Patellar luxation, hereditary cataracts, PRA, gRD/tRD, PHTVL/PHPV, epilepsy, hereditary ataxia"
        },
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "verified",
          locator: "Hip and ophthalmologist evaluations"
        },
        {
          id: "pubmed-fall-2008-gdm-nordic-spitz",
          role: "verified",
          locator: "Gestational diabetes mellitus (GDM) retrospective case series"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Clearly distinguishes actively screened conditions under PEVISA/AKC from retrospective veterinary reports (GDM)."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "spj-pohjanpystykorva-pevisa",
          role: "cited",
          locator: "Pre-breeding patella, eye, and inbreeding checks"
        },
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "cited",
          locator: "Routine weight, ear, nail, and dental care"
        }
      ],
      verifiedOn: null,
      note: "General preventive care recommendations for active Nordic spitzes."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "spj-pohjanpystykorva-pevisa",
          role: "verified",
          locator: "Mandatory PEVISA patellar luxation and official eye exams (cataracts, PRA, gRD/tRD, PHTVL/PHPV); epilepsy and ataxia pedigree guidance"
        },
        {
          id: "suomen-kennelliitto-pohjanpystykorva-profile",
          role: "verified",
          locator: "Suomen Kennelliitto PEVISA program (eye exam renewed every 3 years, patella exam)"
        },
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "verified",
          locator: "Recommended National Breed Club Tests: Hip Evaluation, Ophthalmologist Evaluation"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Combines Finnish PEVISA mandatory screenings (patellas, eyes) with AKC breed club recommendations (hips, eyes)."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "cited",
          locator: "Grooming: regular teeth brushing"
        }
      ],
      verifiedOn: null,
      note: "Standard canine dental hygiene guidance."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "cited",
          locator: "Grooming: regular ear checks for wax and debris"
        }
      ],
      verifiedOn: null,
      note: "Standard erect-ear care guidance."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "cited",
          locator: "Weekly double-coat grooming"
        }
      ],
      verifiedOn: null,
      note: "General skin and coat inspection guidance."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "cited",
          locator: "Temperament, exercise, and home life"
        }
      ],
      verifiedOn: null,
      note: "Editorial suitability assessment based on energy, prey drive, and affectionate home disposition."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-norrbottenspets-official-standard",
          role: "verified",
          locator: "Post-WWII extinction declaration, rediscovery in northern Bothnia, 1967 reinstatement, grouse/fur/moose hunting"
        },
        {
          id: "pubmed-kumpulainen-2017-nordic-spitz-diversity",
          role: "verified",
          locator: "High SNP heterozygosity (Hz = 0.409) despite near-extinction"
        },
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "verified",
          locator: "Quiet indoors with daily exercise; holds moose and forest game"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Removed 'Swedish Kennel Club' mention from user-facing funFact per Rule 5 and replaced unverified 100-barks/min claim with verified 2017 genetic diversity finding."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "skk-norrbottenspets-breed-standard",
          role: "verified",
          locator: "Height (45 cm ±2 cm / 42 cm ±2 cm), coat, colors"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "Weight (9-14 kg / 8-14 kg), lifespan (12-16 years)"
        },
        {
          id: "akc-norrbottenspets-breed-profile",
          role: "verified",
          locator: "Grooming, exercise, family life, health tests"
        },
        {
          id: "spj-pohjanpystykorva-pevisa",
          role: "verified",
          locator: "PEVISA patella, eye, epilepsy, and ataxia screening"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "All FAQ answers written in original wording without registry names."
    }
  },

  updatedOn: "2026-11-21"
};
