import type { Breed } from "../schema/breed.types";

export const dachshund: Breed = {
  slug: "dachshund",
  name: "Dachshund",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Dackel",
    "Teckel",
    "Weiner Dog",
    "Sausage Dog",
    "Badger Dog"
  ],

  group:
    "Dachshunds (with working trial; also classified in the Hound group)",

  origin: {
    country: "Germany",
    region: "Central Europe"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Wire-haired_Dachshund_R_01.JPG",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Wire-haired_Dachshund_R_01.JPG",
      title: "Wire-haired Dachshund R 01.JPG",
      description:
        "An adult wire-haired Dachshund standing outdoors, displaying the breed's distinct elongated body, short legs, and harsh, bristly coat.",
      creator: "Lilly M",
      uploader: "Lilly M",
      capturedOn: "2007-06-10",
      uploadedOn: "2007-06-27",
      width: 2592,
      height: 1814,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Lilly M, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Wire-haired_Dachshund_R_01.JPG. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-16"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dachshund_smooth-coated_Dachshund.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Dachshund_smooth-coated_Dachshund.jpg",
      title: "Dachshund smooth-coated Dachshund.jpg",
      description:
        "A smooth-coated brown Dachshund sitting on grass, highlighting the short, sleek coat and alert expression.",
      creator: "kmoney56",
      uploader: "Pharaoh Hound",
      capturedOn: "2007-02-04",
      uploadedOn: "2007-02-27",
      width: 1280,
      height: 851,
      licenseId: "cc-by-sa-2.0",
      attribution:
        "Photo by kmoney56, Wikimedia Commons, CC BY-SA 2.0. Source: https://commons.wikimedia.org/wiki/File:Dachshund_smooth-coated_Dachshund.jpg. License: https://creativecommons.org/licenses/by-sa/2.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-16"
    }
  ],

  overview: {
    summary:
      "An iconic, short-legged, and long-bodied German hunting dog, celebrated for its fierce determination, cleverness, and unmatched ability to scent and flush out burrow-dwelling badgers.",

    description:
      "The Dachshund is an instantly recognizable, low-to-the-ground hunting hound characterized by a remarkably elongated body and short, powerfully muscled legs. Designed specifically for subterranean work, its unique anatomy allows it to confidently enter narrow tunnels and badger setts with astonishing agility. The breed comes in three distinct coat varieties: smooth (short and gleaming), long-haired (silky and slightly wavy), and wire-haired (harsh, dense, and accompanied by a distinctive beard and eyebrows). The head is elongated and tapers uniformly to the tip of the nose, housing dark, almond-shaped eyes that express a bold, intelligent, and pleasantly energetic spirit. Despite their small stature, Dachshunds possess the fearless heart of a much larger working hound, combining independence and a famously loud bark with deep, comical affection for their families.",

    history:
      "The Dachshund, whose name directly translates from German to 'badger dog', has been carefully cultivated since the Middle Ages. German foresters and hunters required a specialized, low-slung hound capable of digging into burrows to confront ferocious badgers, foxes, and other subterranean prey on their own territory. Early breeding efforts crossed small pointers and terriers with taller, deep-chested hounds to slowly shorten the legs while preserving immense lung capacity, strong jaws, and scenting ability. Over the centuries, the breed was refined into specific sizes and coat types to tackle varying climates and quarry—the wire-haired variety, for example, was developed for harsh, thorny brush, while the miniature varieties were tailored to hunt smaller prey like rabbits. By the late nineteenth century, the breed had secured international acclaim, quickly transitioning from a dedicated forest hunter to one of the world's most enduringly popular and beloved household companions.",

    originalPurpose:
      "Scenting, tracking, digging, and flushing out badgers, foxes, and rabbits from their subterranean burrows.",

    currentRoles: [
      "Vigilant alarm watchdog",
      "Earthdog and tracking trial competitor",
      "Devoted household companion",
      "Specialized hunting dog (primarily in Europe)"
    ]
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "in",
      male: {
        min: 5,
        max: 9
      },
      female: {
        min: 5,
        max: 9
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 11,
        max: 32
      },
      female: {
        min: 11,
        max: 32
      }
    },

    lifespanYears: {
      min: 12,
      max: 16
    },

    coatType:
      "Varies by variety: Smooth (short, dense, and shining), Long-haired (soft, straight or slightly wavy with feathering), or Wire-haired (dense, harsh, wiry topcoat with a softer undercoat, distinct beard, and bushy eyebrows).",

    coatLength: "Varies",

    coatColors: [
      "Red (from clear red to dark reddish-brown)",
      "Black and tan",
      "Chocolate and tan",
      "Wild boar (primarily in wire-haired dogs)",
      "Dapple (merle pattern with lighter irregular patches)",
      "Brindle (dark stripes over a solid base color)",
      "Piebald (white body with patches of solid color, where permitted)"
    ],

    sheddingLevel:
      "Moderate; shedding varies by coat type, with smooth coats shedding consistently, long coats requiring daily maintenance, and wire coats needing periodic hand-stripping",

    droolingLevel:
      "Low; tightly stretched lips well-covering the lower jaw prevent excess drooling",

    distinctiveFeatures: [
      "Exceptionally long, fully muscled trunk supported by very short, robust legs",
      "Height typically ranges from 5 to 6 inches for miniatures, and 8 to 9 inches for standard sizes",
      "Weight ranges from 11 pounds and under for miniatures, and usually between 16 and 32 pounds for standard sizes",
      "Elongated, wedge-shaped head tapering uniformly toward the nose without being overly pointed",
      "Complete, powerful scissor bite with strongly developed jaw bones",
      "Medium-sized, almond-shaped eyes with a pleasant, energetic expression",
      "Ears set high, rounded, mobile, and hanging with the front edge lying close to the cheek",
      "Long, muscular, clean-cut neck without dewlap, sloping gracefully into the shoulders",
      "Prominent sternum forming distinct depressions on either side of the deep chest",
      "Broad, well-muscled croup sinking slightly toward a tail set in continuation of the spine",
      "Large, tight, and compact front paws featuring a pronounced arch, explicitly adapted for intense digging"
    ]
  },

  temperament: {
    traits: [
      "Spunky, lively, and determined, possessing a fearless hunting spirit",
      "Highly intelligent and clever, but famously stubborn when following a scent",
      "Deeply affectionate and loyal to its primary handler and family",
      "Alert, watchful, and highly vocal, making an excellent alarm barker",
      "Independent problem-solver, originally bred to make autonomous decisions underground",
      "Playful and comical in domestic settings",
      "Suspicious or aloof toward strangers until properly introduced",
      "Strong prey drive toward small running animals and rodents",
      "Possesses a surprisingly deep, loud bark for its small size"
    ],

    scores: {
      affection: 5,
      withChildren: 3,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 4,
      independence: 4,
      trainability: 3,
      barking: 5,
      energy: 3
    }
  },

  care: {
    exercise: {
      level:
        "Moderate; requires regular daily activity to build the core and back muscles that support the long spine, while avoiding high-impact vertical jumping",

      minutesPerDay: {
        min: 30,
        max: 60
      },

      activities: [
        "Daily brisk, moderately paced neighborhood walks on a leash",
        "Interactive scent games, tracking, and nosework",
        "Earthdog trials and supervised tunneling games",
        "Short fetch sessions on soft, level ground",
        "Controlled indoor play avoiding stairs and steep furniture"
      ]
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush smooth coats weekly using a hound glove; brush long-haired coats daily with a pin brush and metal comb to prevent tangles; brush wire-haired coats several times a week.",

      bathing:
        "Bathe every four to six weeks or when soiled, taking care to use appropriate texturizing shampoos for wire-haired varieties.",

      notes: [
        "Wire-haired coats require periodic hand-stripping of dead hairs to maintain their harsh, protective texture.",
        "Check the drop ears weekly for moisture, dirt, or wax accumulation, cleaning gently to prevent infections.",
        "Trim fast-growing nails every two weeks to maintain correct, compact foot alignment and support the short legs.",
        "Brush teeth daily with canine enzymatic toothpaste.",
        "Use a well-fitted body harness rather than a neck collar to protect the neck and spine during walks."
      ]
    },

    training: {
      difficulty:
        "Moderate to challenging; highly intelligent and capable, but fiercely independent, easily distracted by scents, and notoriously stubborn",

      tips: [
        "Use positive reinforcement, patience, and highly motivating treats; they will actively ignore harsh corrections or repetitive drilling.",
        "Housebreaking can be slow, especially in wet or cold weather; use strict crate training schedules and constant indoor supervision.",
        "Train them early to accept handling of their paws, as many are sensitive about having their feet touched.",
        "Implement rules strictly prohibiting jumping on and off high furniture to protect their vulnerable spines.",
        "Teach a 'quiet' command early to manage their naturally loud and frequent barking."
      ],

      socialization:
        "Introduce the puppy early, gradually, and positively to varied people, friendly dogs, and novel sounds. Proper socialization ensures their natural alertness does not escalate into sharp reactivity or snappy behavior toward strangers."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Warm climates, provided adequate shade and fresh water are available",
        "Cool climates, though smooth-coated varieties lack insulation and require a fitted coat or sweater in freezing weather"
      ],

      aloneTimeTolerance:
        "Low to moderate; strongly bonded to its owners and prone to separation anxiety, destructive chewing, or excessive howling if left isolated for long workdays."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated specifically for small or medium breeds, heavily portion-controlled to prevent obesity.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age.",
      adult:
        "Two measured meals daily to support steady digestion and energy.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output and joint support."
    },

    guidelines:
      "Measure daily rations strictly using a digital kitchen scale or standard measuring cup. Obesity is the single greatest threat to this breed, as even minimal excess weight places devastating mechanical stress on their long back and short joints. Do not allow free-feeding, and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a strictly lean, well-muscled body condition; you should easily feel the ribs without pressing hard.",
      "Account for all training treats within the total daily caloric allowance.",
      "Monitor closely for sudden weight gain, especially after spaying or neutering.",
      "Ensure food bowls are placed at a comfortable height that does not require the dog to strain its neck downward."
    ],

    note:
      "Caloric needs vary significantly based on age, metabolism, and daily activity. Consult a veterinarian to establish strictly tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Dachshund is a generally robust and long-lived breed with a typical lifespan of 12 to 16 years. However, its unique chondrodysplastic anatomy (short legs and a long back) makes it highly susceptible to spinal injuries. Primary health priorities focus on lifelong weight management and preventing Intervertebral Disc Disease (IVDD), as well as screening for patellar luxation, cardiac conditions, and hereditary eye anomalies like Progressive Retinal Atrophy (PRA).",

    commonConditions: [
      "Intervertebral Disc Disease (IVDD) — degeneration or herniation of spinal discs exacerbated by the breed's long back and short legs, frequently causing extreme pain, nerve damage, or sudden paralysis",
      "Progressive Retinal Atrophy (PRA) — a group of inherited degenerative diseases of the retina leading to progressive vision loss and blindness, screenable via DNA testing",
      "Patellar luxation — intermittent displacement of the kneecap from the femoral groove, causing a 'skipping' gait and potential arthritis",
      "Cardiac conditions — occasional reports of degenerative mitral valve disease or murmurs, monitored through veterinary auscultation",
      "Obesity — highly detrimental to the breed's spinal health, requiring strict dietary control",
      "Canine Multifocal Retinopathy (CMR) — an inherited retinal disease causing lesions, usually mild and non-progressive",
      "Dental disease — heavy tartar buildup and gingivitis requiring vigilant lifelong dental hygiene"
    ],

    preventiveCare: [
      "Strictly prohibit the dog from jumping on and off furniture or running up and down long, steep flights of stairs; use pet ramps to protect the spine.",
      "Maintain a strictly lean body weight to minimize mechanical stress on the intervertebral discs.",
      "Use a well-fitted body harness rather than a neck collar to prevent dangerous traction on the cervical spine during walks.",
      "Support the dog's chest and hindquarters simultaneously whenever lifting or carrying it; never pick a Dachshund up by its front legs alone.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "Clinical patellar luxation orthopedic evaluation by a veterinarian",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist (CAER)",
      "Basic cardiac evaluation (auscultation or echocardiogram)",
      "DNA marker test for Progressive Retinal Atrophy (PRA)"
    ],

    dentalCare:
      "Brush teeth daily using canine enzymatic toothpaste. The breed is prone to plaque accumulation; schedule regular professional veterinary dental cleanings.",

    earCare:
      "Inspect the large drop ears weekly for wax buildup, moisture, or yeast, as the heavy flaps restrict airflow to the ear canal. Clean gently using a veterinarian-recommended ear solution.",

    skinCare:
      "Part the coat weekly during brushing to inspect the skin for external parasites or irritation. Smooth and long coats require gentle maintenance, while wire coats need periodic stripping to maintain skin and hair health."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: false,
    apartmentLiving: true,

    idealFor: [
      "Individuals, couples, and seniors seeking a deeply affectionate, comical, and alert indoor companion",
      "Apartment or condominium dwellers looking for an excellent watchdog with moderate outdoor exercise needs",
      "Owners willing to strictly enforce spinal protection rules, such as using ramps and preventing furniture jumping",
      "Those who appreciate an independent, stubborn, yet highly entertaining canine personality",
      "Canine sports enthusiasts interested in tracking, nosework, or earthdog trials"
    ],

    notIdealFor: [
      "Families with boisterous toddlers or young children who might play roughly, drop the dog, or accidentally injure its fragile back",
      "Highly active individuals seeking a long-distance jogging, hiking, or strenuous outdoor sporting partner",
      "Apartment dwellers highly sensitive to loud, frequent, and resonant barking",
      "Owners unwilling or unable to rigorously manage the dog's diet to prevent obesity",
      "Households with many steep, uncarpeted stairs"
    ]
  },

  funFacts: [
    "The name 'Dachshund' directly translates from German as 'badger dog' ('Dachs' meaning badger, and 'Hund' meaning dog).",
    "Because of their distinct shape, they have earned numerous affectionate nicknames globally, including 'Weiner Dog', 'Sausage Dog', and 'Doxie'.",
    "The Dachshund is famously vocal; because their deep, capacious chests were bred for maximum lung capacity underground, their bark sounds like it belongs to a much larger dog.",
    "During World War I and World War II, the breed's popularity in the United States plummeted due to its strong association with Germany; however, their immense charm allowed them to quickly recover their status as one of America's favorite breeds.",
    "Wire-haired Dachshunds were developed by crossing smooth Dachshunds with terriers to create a tough, brush-resistant coat that protected them from thorny thickets and harsh weather.",
    "Despite their small size and comical shape, a Dachshund is a true hunting hound, originally bred to bravely enter dark tunnels and confront the ferocious badger face-to-face."
  ],

  faq: [
    {
      question: "What is a Dachshund?",
      answer:
        "The Dachshund is an iconic, short-legged, long-bodied German hunting hound originally developed to dig into burrows and flush out badgers, known today as an intelligent, stubborn, and deeply affectionate family companion."
    },
    {
      question: "How tall and heavy is a Dachshund?",
      answer:
        "They are bred in two primary sizes: Standards weigh 16 to 32 pounds and stand about 8 to 9 inches tall, while Miniatures weigh 11 pounds and under, standing 5 to 6 inches tall."
    },
    {
      question: "How long does a Dachshund live?",
      answer:
        "With strict weight management, spine protection, and preventive veterinary care, the breed is very long-lived, typically enjoying a healthy lifespan of 12 to 16 years."
    },
    {
      question: "Do Dachshunds shed a lot, and how are they groomed?",
      answer:
        "They are moderate shedders. Grooming depends on the coat: smooth coats require minimal brushing, long-haired coats need daily combing to prevent tangles, and wire-haired coats require regular brushing and occasional hand-stripping."
    },
    {
      question: "Can a Dachshund live in an apartment?",
      answer:
        "Yes, their size and moderate exercise needs make them excellent apartment dogs. However, they are naturally loud, persistent barkers, so early training to manage their vocalization is important for close-quarters living."
    },
    {
      question: "Are Dachshunds good with children?",
      answer:
        "They can be good with older, respectful children. However, because their long backs are highly vulnerable to injury, they are generally not recommended for households with toddlers who might accidentally drop or step on them."
    },
    {
      question: "Are Dachshunds hard to housebreak?",
      answer:
        "Yes, they can be famously stubborn to potty train, especially in cold or wet weather when their low-slung bellies touch the damp ground. Patience, consistency, and crate training are essential."
    },
    {
      question: "What are the main health concerns for a Dachshund?",
      answer:
        "The most critical health concern is Intervertebral Disc Disease (IVDD), which can cause paralysis. Protecting their back by preventing obesity, avoiding stairs, and using ramps is absolutely mandatory. They are also prone to eye issues (PRA), heart disease, and slipping kneecaps."
    }
  ],

  references: [
    "fci-dachshund-official-standard",
    "fci-dachshund-nomenclature",
    "akc-dachshund-breed-standard",
    "akc-dachshund-breed-profile",
    "dca-health-statement",
    "ofa-dachshund-chic-requirements",
    "wikimedia-dachshund-wire-haired-lilly-m",
    "wikimedia-dachshund-smooth-coated-kmoney56"
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
          id: "fci-dachshund-official-standard",
          role: "verified",
          locator: "Standard heading: DACHSHUND; BRIEF HISTORICAL SUMMARY: also called Dackel or Teckel"
        },
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "History: Weiner Dog, Sausage Dog, Badger Dog"
        }
      ],
      verifiedOn: "2026-11-16",
      note: "Verified across FCI Standard No. 148 and AKC profile."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dachshund-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 4 Dachshunds; With working trial"
        },
        {
          id: "akc-dachshund-breed-standard",
          role: "verified",
          locator: "Hound Group"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dachshund-official-standard",
          role: "verified",
          locator: "ORIGIN: Germany; BRIEF HISTORICAL SUMMARY"
        }
      ],
      verifiedOn: "2026-11-16",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dachshund-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "About the Breed, History, and Roles"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "Synthesized in original prose from FCI Standard No. 148 and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dachshund-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS, HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE AND WEIGHT"
        },
        {
          id: "akc-dachshund-breed-standard",
          role: "verified",
          locator: "General Appearance, Size, Proportion, Substance, Head, Coat, Color, Gait"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "Conformation, elongated build, short legs, digging paws, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Height: 8-9 inches (standard), 5-6 inches (miniature)"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "Preserved in published unit of inches (5 to 9 inches combining miniature and standard limits) as specified in AKC breed profiles and marketplace records. (FCI Standard No. 148 measures size exclusively by chest circumference, not withers height)."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-dachshund-breed-standard",
          role: "verified",
          locator: "Size, Proportion, Substance: Weight of the standard size is usually between 16 and 32 pounds. Miniatures are... '11 pounds and under'."
        },
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Weight: 16-32 pounds (standard), 11 pounds & under (miniature)"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "Preserved in published unit of pounds (11 to 32 pounds combining miniature and standard ranges) exactly as specified in the official AKC standard and weight charts."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12-16 years"
        }
      ],
      verifiedOn: "2026-11-16",
      note: "Supported by kennel club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (2/5)"
        },
        {
          id: "fci-dachshund-official-standard",
          role: "verified",
          locator: "COAT: Varies by variety (Smooth, Long-haired, Wire-haired)"
        }
      ],
      verifiedOn: "2026-11-16",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dachshund-official-standard",
          role: "verified",
          locator: "Lips: Taut fitting, covering the lower jaw well."
        },
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (1/5)"
        }
      ],
      verifiedOn: "2026-11-16",
      note: "Taut lips prevent excessive drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dachshund-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Friendly by nature, neither fearful nor aggressive, with even temperament. Passionate, persistent and fast hunting dog with an excellent nose."
        },
        {
          id: "akc-dachshund-breed-standard",
          role: "verified",
          locator: "General Appearance: intelligent, alert facial expression... bold and confident head carriage."
        }
      ],
      verifiedOn: "2026-11-16",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented hound temperament, loud barking tendencies, high family affection, and stubborn independence."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        },
        {
          id: "dca-health-statement",
          role: "cited",
          locator: "IVDD precautions, weight control, harness usage"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active small hound management with intense spinal injury prevention and weight control protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Energy Level (3/5); Exercise Needs (3/5)"
        },
        {
          id: "fci-dachshund-official-standard",
          role: "verified",
          locator: "UTILIZATION: Hunting dog above and below ground"
        }
      ],
      verifiedOn: "2026-11-16",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "cited",
          locator: "Daily exercise recommendations for small active hounds"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 30 to 60 minutes of daily activity reflects the moderate exercise demands required to build strong core muscles while avoiding spinal impact."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Adaptability: Adapts Well to Apartment Living (4/5 to 5/5); highly suited for indoor life"
        }
      ],
      verifiedOn: "2026-11-16",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Exercise and indoor supervision recommendations"
        }
      ],
      verifiedOn: "2026-11-16",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Weather adaptation: smooth coats require sweaters in freezing weather"
        }
      ],
      verifiedOn: "2026-11-16",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "cited",
          locator: "Tolerates Being Alone: Low to moderate; prone to vocalization if lonely"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food, strict portion control to prevent obesity"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for chondrodysplastic breeds highly vulnerable to obesity and spinal stress."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance and divided meals"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-dachshund-chic-requirements",
          role: "verified",
          locator: "CHIC Program requirements: Eye Examination, Patellar Luxation, Cardiac"
        },
        {
          id: "dca-health-statement",
          role: "verified",
          locator: "Health Guidelines: Patella Luxation, Eye examination (CAER), Basic Cardiac. Mentions IVDD and PRA monitoring."
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "Synthesizes parent club veterinary health records, national health registry screening protocols, and chondrodysplastic clinical data."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "dca-health-statement",
          role: "verified",
          locator: "Patella Luxation, Eye disorders, Cardiac, Intervertebral Disk Disease (IVDD), Progressive Retinal Atrophy (PRA)"
        },
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "IVDD, dental issues, obesity"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "Details documented genetic and conformational conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "dca-health-statement",
          role: "cited",
          locator: "Strict weight management, spinal protection, harness usage, avoiding stairs"
        },
        {
          id: "akc-dachshund-breed-profile",
          role: "cited",
          locator: "Dental hygiene and routine wellness checks"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to elongated, short-legged breeds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-dachshund-chic-requirements",
          role: "verified",
          locator: "CHIC Program required screenings: CAER Eye examination, Clinical Patellar Luxation, Basic Cardiac"
        },
        {
          id: "dca-health-statement",
          role: "verified",
          locator: "Recommended health testing from parent club: Patellas, CAER Eyes, Cardiac, PRA awareness"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "Screenings summarize published parent club and health registry protocols."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-dachshund-official-standard",
          role: "cited",
          locator: "Jaws/teeth: Powerful canine teeth; teeth fit closely together in a scissors bite."
        },
        {
          id: "akc-dachshund-breed-profile",
          role: "cited",
          locator: "Routine dental care to prevent tartar buildup"
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-dachshund-official-standard",
          role: "cited",
          locator: "Ears: Set on high, not too forward... front edge lying close to cheek."
        },
        {
          id: "akc-dachshund-breed-profile",
          role: "cited",
          locator: "Ear hygiene and weekly inspection"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for drop ears that restrict airflow."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-dachshund-official-standard",
          role: "cited",
          locator: "Skin: Tight fitting, well pigmented."
        }
      ],
      verifiedOn: null,
      note: "General skin and coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, extreme independence, back vulnerabilities, and high vocalization."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Weiner Dog nickname, badger dog translation, loud bark for size, drop in WWII popularity"
        }
      ],
      verifiedOn: "2026-11-16",
      note: "Verified historical folklore and foundation facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dachshund-breed-standard",
          role: "verified",
          locator: "Origin, height (5-9 in), weight (11-32 lbs), coat, and colors"
        },
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Lifespan (12-16 years), apartment living, housebreaking difficulty, child suitability, and grooming"
        },
        {
          id: "dca-health-statement",
          role: "verified",
          locator: "Main health concerns (IVDD, Eyes, Patellas) and recommended health screening panel"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and veterinary data without naming registries in prose."
    }
  },

  updatedOn: "2026-11-16"
};
