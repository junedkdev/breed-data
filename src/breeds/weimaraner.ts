import type { Breed } from "../schema/breed.types";

export const weimaraner: Breed = {
  slug: "weimaraner",
  name: "Weimaraner",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Grey Ghost",
    "Weim",
    "Weimaraner Vorstehhund",
    "Braque de Weimar",
    "Braco de Weimar"
  ],

  group: "Pointing Dogs",

  origin: {
    country: "Germany",
    region:
      "Thuringia, central Germany (developed at the Grand Ducal Court of Weimar)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Weimaraner_Dog.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Weimaraner_Dog.jpg",
      title: "Weimaraner Dog.jpg",
      description: "An adult male short-haired Weimaraner outdoors.",
      creator: "Sciencia58",
      uploader: "Sciencia58",
      capturedOn: "2021-12-04",
      uploadedOn: "2021-12-04",
      width: 2640,
      height: 1856,
      licenseId: "cc0-1.0",
      attribution:
        "Photo by Sciencia58, Wikimedia Commons, CC0 1.0 Public Domain Dedication. Source: https://commons.wikimedia.org/wiki/File:Weimaraner_Dog.jpg. License: https://creativecommons.org/publicdomain/zero/1.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-20"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Weimaraner_in_der_Welt.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Weimaraner_in_der_Welt.jpg",
      title: "Weimaraner in der Welt.jpg",
      description:
        "A short-haired female Weimaraner sitting in a wooded forest.",
      creator: "Bretos",
      uploader: "Bretos",
      capturedOn: "2025-01-19",
      uploadedOn: "2025-02-09",
      width: 3072,
      height: 4080,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Bretos, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Weimaraner_in_der_Welt.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-20"
    }
  ],

  overview: {
    summary:
      "A sleek, sinewy German pointing gundog famed for its monochrome silver-grey coat, light amber or blue-grey eyes, tireless hunting stamina, and close, shadow-like attachment to its owner.",

    description:
      "The Weimaraner is a medium-to-large, streamlined pointing dog built for speed, endurance, and all-terrain fieldwork. Lean, muscular, and well balanced, it stands on sturdy legs with a deep chest, long velvety drop ears, and round amber or blue-grey eyes that give an alert, intelligent expression. Its unmistakable solid grey coat appears in silver, roe, or mouse shades—in both the classic smooth short-haired form and a less common feathered long-haired variety—earning the breed its nickname 'the Grey Ghost.' Bred to work closely beside hunters in woods, fields, and water, the Weimaraner is friendly, fearless, and intensely people-focused, thriving in active households that can match its high energy and craving for human company.",

    history:
      "Developed in the early nineteenth century at the court of Grand Duke Karl August in Weimar, Germany, the Weimaraner was bred as an elite all-around hunting dog for nobility, originally used on large game before shifting to upland game birds and water retrieving. Systematic studbook breeding began around 1890—making it one of the oldest pure-bred German pointing breeds, largely free of later outcrosses—with a less common long-haired variety already appearing before 1900. Early German club members tightly restricted ownership and breeding to preserve field quality. After exports to the United States and the United Kingdom around the mid-twentieth century, the breed gained international popularity as both a versatile gundog and a striking, athletic companion.",

    originalPurpose:
      "Versatile hunting in field, forest, and water—tracking, pointing, flushing, and retrieving game before and after the shot.",

    currentRoles: [
      "Versatile pointing, tracking, and water-retrieving gundog",
      "Active family companion and running partner",
      "Competitor in field trials, agility, obedience, tracking, and dock diving",
      "Search-and-rescue and scent-detection dog"
    ]
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "cm",
      male: {
        min: 59,
        max: 70
      },
      female: {
        min: 57,
        max: 65
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 30,
        max: 40
      },
      female: {
        min: 25,
        max: 35
      }
    },

    lifespanYears: {
      min: 10,
      max: 13
    },

    coatType:
      "Two recognized varieties: short-haired (short, strong, very dense, smooth-lying topcoat with little or no undercoat) and long-haired (soft, long, smooth or slightly wavy coat 3 to 5 cm on the sides with feathering on the ears, legs, underside, and tail).",

    coatLength: "Short",

    coatColors: [
      "Silver-grey",
      "Roe-grey",
      "Mouse-grey",
      "Intermediate shades of grey (often slightly lighter on head and ears; small white marks allowed only on chest and toes; occasional dark dorsal stripe)"
    ],

    sheddingLevel:
      "Moderate year-round; the sleek short coat sheds fine hairs that brush away easily",

    droolingLevel:
      "Low to moderate; moderately deep flesh-toned lips produce minimal drool outside meals or heavy exertion",

    distinctiveFeatures: [
      "Lean, sinewy, muscular pointing dog frame built for speed and stamina",
      "Height at the withers of 59 to 70 cm in males (ideal 62 to 67 cm) and 57 to 65 cm in females (ideal 59 to 63 cm)",
      "Adult weight of 30 to 40 kg in males and 25 to 35 kg in females",
      "Solid silver-grey, roe-grey, or mouse-grey coat in either short-haired or feathered long-haired varieties",
      "Round, intelligent eyes in shades of amber (or blue-grey) as adults, starting sky-blue in puppies",
      "Long, strong, nearly square-profile muzzle with a large dark flesh-coloured nose shading into grey toward the bridge",
      "Complete, regular, strong scissor bite",
      "High-set, broad, fairly long folded drop ears with rounded tips reaching roughly to the corner of the mouth",
      "Deep, well-ribbed chest reaching nearly to the elbows without appearing barrel-chested",
      "Strong, well-haired tail set slightly below the topline, carried hanging at rest and horizontal or higher when alert",
      "Compact, well-arched feet with thick pads and grey or amber nails"
    ]
  },

  temperament: {
    traits: [
      "Friendly, fearless, and deeply devoted to its household",
      "Alert, watchful, and naturally protective without unprovoked aggression",
      "Intelligent, quick to learn, and eager for active engagement",
      "Passionate, systematic, and tireless field hunter with a keen nose",
      "Highly people-oriented and prone to separation distress if routinely isolated",
      "High prey drive toward small animals and running wildlife"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 4,
      independence: 2,
      trainability: 4,
      barking: 3,
      energy: 5
    }
  },

  care: {
    exercise: {
      level:
        "Very high; a swift, endurance-bred gundog that needs generous daily running and mental work to stay settled indoors",

      minutesPerDay: {
        min: 90,
        max: 120
      },

      activities: [
        "Off-leash running in large, securely fenced areas and brisk trail runs",
        "Pointing, tracking, and upland or water retrieving drills",
        "Hiking, jogging, or cycling once skeletally mature",
        "Agility, dock diving, obedience, and scent-work sports",
        "Interactive fetch and challenging food-puzzle enrichment"
      ]
    },

    grooming: {
      level: "Low to moderate",

      brushing:
        "Brush the short coat weekly with a rubber curry brush or soft bristle mitt to lift loose dead hair; comb the long-haired variety two to three times weekly to prevent tangles in the feathering.",

      bathing:
        "Bathe occasionally when muddy or soiled using a mild canine shampoo.",

      notes: [
        "Keep fast-growing nails trimmed short—if they click on hard floors, they are overdue and can become difficult to shorten back.",
        "Clean and inspect the long drop ears regularly because limited airflow can encourage wax buildup and ear infections.",
        "Check paws and skin after running through brush for minor cuts, scrapes, or burrs.",
        "Brush teeth several times weekly and provide cushioned bedding to protect lean elbows from calluses."
      ]
    },

    training: {
      difficulty:
        "Moderate; quick-witted and capable of learning rapidly, which means it picks up bad habits just as fast as good ones without steady, creative guidance",

      tips: [
        "Start puppy obedience and socialization early with consistent household rules.",
        "Use upbeat, reward-based training and creative games—Weimaraners respond best when cooperation feels rewarding.",
        "Keep sessions brisk and varied so this clever pointer does not invent its own mischievous projects.",
        "Practice calm alone-time and crate routines early to reduce separation anxiety.",
        "Use a secure fence or reliable leash outdoors because strong hunting instincts can trigger sudden chases."
      ],

      socialization:
        "Expose puppies early and positively to unfamiliar people, calm dogs, children, and everyday noises so their protective alertness stays friendly and well-mannered."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Warm climates when shade, hydration, and cooler-hour exercise are provided",
        "Cool climates when housed indoors with a warm coat during freezing weather (especially for short-haired dogs)"
      ],

      aloneTimeTolerance:
        "Low; craves close daily involvement with its people and can become vocal or destructive if left alone for long stretches."
    }
  },

  nutrition: {
    dietType:
      "High-quality, complete and balanced dog food formulated for large active breeds—often with a moderately high protein level—matched to life stage.",

    feedingFrequency: {
      puppy:
        "Three to four small measured meals daily until six months of age on a large-breed growth diet",
      adult: "Two measured meals per day",
      senior: "Two portion-controlled meals per day adjusted for lower activity"
    },

    guidelines:
      "Weimaraners are typically enthusiastic eaters; measure daily portions carefully to keep a lean, athletic waist, split food into two meals, and avoid vigorous running right before or after eating to help reduce bloat risk. Avoid overdoing rich table scraps that can upset digestion.",

    considerations: [
      "Rest the dog before and after meals to help lower the risk of gastric torsion (bloat).",
      "Supervise chew toys closely, as eager chewers can injure their mouths or swallow foreign objects.",
      "Keep weight lean to minimize stress on hips and elbows.",
      "Adjust calories up during heavy hunting or running seasons and down during quieter periods.",
      "Provide clean, fresh water at all times."
    ],

    note:
      "Discuss ideal feeding amounts, bloat precautions, and whether prophylactic gastropexy makes sense for your dog with a veterinarian."
  },

  health: {
    overview:
      "The Weimaraner is generally an athletic, hardy sporting breed with a typical lifespan of 10 to 13 years. The single most urgent life-threatening risk is gastric dilatation-volvulus (GDV / gastric torsion / bloat), common to deep-chested large breeds. Scientifically established inherited conditions with available DNA tests include three distinct autosomal recessive disorders: hypomyelination ('shaking puppy' syndrome, caused by a frameshift mutation in FNIP2), spinal dysraphism (a neural tube defect caused by a frameshift mutation in NKX2-8), and hyperuricosuria (HUU). Orthopedic and systemic conditions actively screened or researched in the breed include hip dysplasia, elbow dysplasia, hypertrophic osteodystrophy (HOD) and panosteitis in rapidly growing puppies, ocular conditions, autoimmune thyroiditis, and cardiac disease.",

    commonConditions: [
      "Gastric dilatation-volvulus (GDV / bloat) — the most serious emergency risk in the breed, where the deep-chested stomach distends and twists; requires immediate emergency veterinary surgery, and owners often discuss preventive gastropexy with their veterinarian.",
      "Hip dysplasia and elbow dysplasia — recognized developmental joint disorders screened via pre-breeding radiographic evaluations.",
      "Hypomyelination ('shaking puppy' syndrome) — a scientifically established autosomal recessive disorder caused by a frameshift mutation in the FNIP2 gene, causing early puppy tremors that typically improve over time; preventable via pre-breeding DNA testing.",
      "Spinal dysraphism — a distinct autosomal recessive neural tube defect caused by a frameshift mutation in the NKX2-8 gene (separate from hypomyelination); preventable via pre-breeding DNA testing.",
      "Hyperuricosuria (HUU) — an inherited uric-acid metabolism trait that can predispose affected dogs to urinary stones; screenable via DNA testing.",
      "Hypertrophic osteodystrophy (HOD) and panosteitis — painful developmental long-bone conditions seen in rapidly growing Weimaraner puppies, with HOD actively researched as a complex breed-associated inflammatory bone disorder.",
      "Ocular, thyroid, and cardiac conditions (screened) — eye disorders, autoimmune thyroiditis, and heart conditions monitored through specialist exams and blood panels, alongside ear infections linked to long drop ears and accidental field/chewing injuries."
    ],

    preventiveCare: [
      "Choose puppies from breeders who complete hip, eye, cardiac, and thyroid evaluations plus DNA tests for spinal dysraphism (NKX2-8), hypomyelination (FNIP2), and hyperuricosuria (HUU).",
      "Feed two smaller meals daily, avoid intense exercise around mealtimes, learn emergency signs of bloat, and discuss prophylactic gastropexy with a veterinarian.",
      "Monitor growing puppies closely for sudden limping, fever, or swollen leg joints (signs of HOD or panosteitis) and seek prompt veterinary care.",
      "Keep nails trimmed short, clean drop ears regularly, and supervise heavy chewers to prevent foreign-body ingestion.",
      "Maintain lean body weight, parasite prevention, and annual veterinary checkups."
    ],

    recommendedScreenings: [
      "Radiographic hip evaluation prior to breeding (and elbow evaluation in programs recommending both)",
      "Board-certified veterinary ophthalmologist eye examination",
      "Autoimmune thyroiditis blood evaluation",
      "Veterinary cardiac examination",
      "DNA tests for spinal dysraphism (NKX2-8), hypomyelination (FNIP2), and hyperuricosuria (HUU)"
    ],

    dentalCare:
      "Brush teeth several times a week with canine enzymatic toothpaste and inspect gums periodically, as enthusiastic chewers can chip teeth or irritate mouth tissue.",

    earCare:
      "Check and clean the long, folded drop ears weekly and after water outings, drying carefully to discourage moisture-related ear infections.",

    skinCare:
      "Brush weekly to remove dead hair and inspect the short coat for minor brush cuts, scrapes, or ticks; provide padded bedding to prevent elbow calluses."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Runners, hikers, and active families able to provide generous daily off-leash or vigorous exercise",
      "Hunters and dog-sport enthusiasts interested in pointing, retrieving, agility, or tracking",
      "Households where people are around frequently to satisfy its strong need for companionship",
      "Homes with a large, securely fenced yard"
    ],

    notIdealFor: [
      "Sedentary households or first-time owners unprepared for very high energy and strong drive",
      "Apartment dwellers without daily access to large running spaces",
      "Owners who leave a dog alone for long workdays on a routine basis",
      "Homes with unsupervised small pets such as rabbits or rodents"
    ]
  },

  funFacts: [
    "Its sleek silver-grey coat and quiet, gliding movement in the field earned the breed the nickname 'the Grey Ghost.'",
    "Weimaraner puppies are born with striking sky-blue eyes that gradually shift to shades of amber or blue-grey as they grow.",
    "Artist William Wegman brought the breed worldwide pop-culture fame through his whimsical portraits and Sesame Street video segments starting in 1989.",
    "U.S. President Dwight D. Eisenhower kept a Weimaraner named Heidi in the White House.",
    "Alongside the familiar smooth short-haired coat, a feathered long-haired Weimaraner variety has existed in Germany since before 1900."
  ],

  faq: [
    {
      question: "How big is an adult Weimaraner?",
      answer:
        "Adult males stand 59 to 70 cm at the withers (ideally 62 to 67 cm) and weigh 30 to 40 kg, while females stand 57 to 65 cm (ideally 59 to 63 cm) and weigh 25 to 35 kg."
    },
    {
      question: "How long do Weimaraners usually live?",
      answer:
        "Most Weimaraners live about 10 to 13 years with balanced nutrition, lean body weight, and routine veterinary care."
    },
    {
      question: "Are there long-haired Weimaraners?",
      answer:
        "Yes. While the smooth short-haired coat is far more common, a feathered long-haired variety has existed since before 1900 and is recognized in international and UK registries."
    },
    {
      question: "How much exercise does a Weimaraner need?",
      answer:
        "Plan on 90 to 120 minutes or more of real daily exercise—ideally including brisk running, retrieving, hiking, or training sports rather than casual leash strolls alone."
    },
    {
      question: "Can a Weimaraner live in an apartment?",
      answer:
        "Generally no. Their size, high stamina, and need to stretch their legs at a full run fit a house with a large, securely fenced yard much better than apartment life."
    },
    {
      question: "What are the most important health concerns in Weimaraners?",
      answer:
        "Bloat (gastric torsion) is the top emergency risk. Responsible breeders also screen for hip and elbow dysplasia, eye, thyroid, and heart conditions, and run DNA tests for three separate recessive traits: spinal dysraphism (NKX2-8), hypomyelination (FNIP2), and hyperuricosuria (HUU)."
    }
  ],

  references: [
    "natureserve-canis-lupus-familiaris",
    "fci-weimaraner-official-standard",
    "fci-weimaraner-nomenclature",
    "vdh-weimaraner-breed-standard",
    "weimaraner-klub-ev-breed-profile",
    "akc-weimaraner-breed-standard",
    "akc-weimaraner-breed-profile",
    "the-kennel-club-weimaraner-breed-standard",
    "rkc-weimaraner-breed-profile",
    "ukc-weimaraner-breed-standard",
    "weimaraner-club-of-america-health",
    "ofa-weimaraner-chic-requirements",
    "weimaraner-spinal-dysraphism-nkx2-8-2013",
    "weimaraner-hypomyelination-fnip2-2014",
    "the-dog-api",
    "wikimedia-weimaraner-female-pleple2000",
    "wikimedia-weimaraner-600-tomasz-sienicki"
  ],

  evidence: {
    scientificName: {
      reliability: "reliable_source",
      sources: [
        {
          id: "natureserve-canis-lupus-familiaris",
          role: "verified",
          locator:
            "Related ITIS Names: Canis lupus familiaris Linnaeus, 1758 (TSN 726821); Wilson and Reeder 2005"
        }
      ],
      verifiedOn: "2026-11-20",
      note: "Standard domestic dog subspecies taxonomy verified via NatureServe Explorer / ITIS."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-weimaraner-nomenclature",
          role: "verified",
          locator: "WEIMARANER (99), BRAQUE DE WEIMAR"
        },
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "About the Breed: 'Gray Ghost'"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "alternateNames: Weim, Grey Ghost"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator:
            "Group 7 Pointing Dogs, Section 1.1 Continental Pointing Dogs, Type Braque, with working trial"
        },
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "Sporting Group (recognized 1943)"
        },
        {
          id: "the-kennel-club-weimaraner-breed-standard",
          role: "verified",
          locator: "Gundog Group"
        },
        {
          id: "ukc-weimaraner-breed-standard",
          role: "verified",
          locator: "Gun Dog Group"
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "User-facing group label avoids registry acronyms and group numbers per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "ORIGIN: Germany"
        },
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "History: Grand Duke Karl August, court in Weimar, Germany"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "origin.country: Weimar, Germany"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator:
            "UTILIZATION, BRIEF HISTORICAL SUMMARY (pure-bred since ~1890/1900, long-haired variety before 1900), GENERAL APPEARANCE"
        },
        {
          id: "rkc-weimaraner-breed-profile",
          role: "verified",
          locator: "About this breed (Grand Duke Karl August, exclusive club, UK 1950s, long-haired variety)"
        },
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "About the Breed, History"
        },
        {
          id: "weimaraner-klub-ev-breed-profile",
          role: "cited",
          locator: "German parent club heritage"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator:
            "HEAD, EYES (amber, sky-blue in puppies, round), EARS, BODY, TAIL, COAT (short-haired and long-haired 3–5 cm), COLOUR (silver/roe/mouse grey, optional dorsal stripe)"
        },
        {
          id: "the-kennel-club-weimaraner-breed-standard",
          role: "verified",
          locator: "General appearance, Eyes (amber or blue-grey), Coat, Feet (updated 2025-08-01)"
        },
        {
          id: "vdh-weimaraner-breed-standard",
          role: "verified",
          locator: "German VDH FCI No. 99 standard"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "SIZE: Males 59–70 cm (ideal 62–67 cm); Females 57–65 cm (ideal 59–63 cm)"
        },
        {
          id: "akc-weimaraner-breed-profile",
          role: "conflicting",
          locator: "Height: 25–27 inches (male), 23–25 inches (female)"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "height (cm): male 64–69, female 58–64"
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "Kept FCI Standard No. 99 metric heights (59–70 cm males, 57–65 cm females) over The Dog API (64–69 / 58–64 cm) and AKC inch ranges."
    },

    "physical.height.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "SIZE: Males 59–70 cm"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "height.male.max: 69 cm"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "physical.height.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "SIZE: Females 57–65 cm"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "height.female.max: 64 cm"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "WEIGHT: Males 30–40 kg; Females 25–35 kg"
        },
        {
          id: "akc-weimaraner-breed-profile",
          role: "conflicting",
          locator: "Weight: 70–90 pounds (male), 55–75 pounds (female)"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "weight (kg): male 32–41, female 25–34"
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "Kept FCI Standard No. 99 metric weights (30–40 kg males, 25–35 kg females) over The Dog API (32–41 / 25–34 kg) and AKC pound ranges."
    },

    "physical.weight.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "WEIGHT: Males 30–40 kg"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "weight.male.max: 41 kg"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "physical.weight.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "WEIGHT: Females 25–35 kg"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "weight.female.max: 34 kg"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 10–13 years"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "lifespanYears: 10–13"
        },
        {
          id: "rkc-weimaraner-breed-profile",
          role: "cited",
          locator: "Lifespan: Over 10 years"
        }
      ],
      verifiedOn: "2026-11-20",
      note: "Updated from 11–14 to 10–13 years to match both AKC and The Dog API."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-weimaraner-breed-profile",
          role: "verified",
          locator: "Breed characteristics: Sheds: Yes"
        },
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "Grooming: brush short coat to remove dead hair"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "Lips: moderately overhanging, flesh-coloured"
        },
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator:
            "BEHAVIOUR/TEMPERAMENT: versatile, easily trained, steady, passionate hunter, watchful but not aggressive"
        },
        {
          id: "the-kennel-club-weimaraner-breed-standard",
          role: "verified",
          locator: "Temperament: Fearless, friendly, protective, obedient and alert"
        },
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "friendly / fearless / obedient"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "temperament.traits: Energetic, intelligent, loyal, friendly, alert, courageous, athletic"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics"
        },
        {
          id: "rkc-weimaraner-breed-profile",
          role: "cited",
          locator: "Breed characteristics"
        }
      ],
      verifiedOn: null,
      note: "Editorial 1–5 ratings synthesized from kennel club descriptions."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "cited",
          locator: "Grooming (nail length, ear cleaning), Exercise, Training, Nutrition"
        },
        {
          id: "rkc-weimaraner-breed-profile",
          role: "cited",
          locator: "Breed characteristics (More than 2 hours/day exercise, once a week grooming, large house/garden)"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-weimaraner-breed-profile",
          role: "verified",
          locator: "Exercise: More than 2 hours per day"
        },
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "Exercise: high exercise requirements; loves a good run"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "rkc-weimaraner-breed-profile",
          role: "cited",
          locator: "Exercise: More than 2 hours per day"
        }
      ],
      verifiedOn: null,
      note: "Editorial estimate of 90–120 minutes/day reflecting very high sporting exercise needs."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "rkc-weimaraner-breed-profile",
          role: "cited",
          locator: "Size of home: Large house; Size of garden: Large garden"
        },
        {
          id: "akc-weimaraner-breed-profile",
          role: "cited",
          locator: "Exercise: high running and space needs"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-weimaraner-breed-profile",
          role: "verified",
          locator: "Size of home: Large house; Size of garden: Large garden"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "COAT: short smooth topcoat with little or no undercoat (short-haired variety)"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "About the Breed: yearns to be a full-fledged family member with lots of quality time"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "cited",
          locator: "Nutrition: good eaters, moderately high protein food, avoid excess rich scraps"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "cited",
          locator: "Health & Nutrition: gastric torsion precautions and life-stage feeding"
        }
      ],
      verifiedOn: null,
      note: "Standard large-breed life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator:
            "Health: gastric torsion (most serious risk), chewing/field injuries; Recommended tests: Hip, Cardiac, Ophthalmologist, Thyroid, SD DNA, HYM DNA, HUU DNA"
        },
        {
          id: "weimaraner-spinal-dysraphism-nkx2-8-2013",
          role: "verified",
          locator: "PLoS Genet 2013 (PMID 23874236): NKX2-8 exon 2 frameshift mutation causing spinal dysraphism"
        },
        {
          id: "weimaraner-hypomyelination-fnip2-2014",
          role: "verified",
          locator: "Glia 2014 (PMID 24272703): FNIP2 frameshift mutation causing hypomyelination ('shaking puppy')"
        },
        {
          id: "weimaraner-club-of-america-health",
          role: "verified",
          locator: "WCA Health research on HOD, panosteitis, spinal dysraphism, hypomyelination, and HUU"
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "Separated hypomyelination (FNIP2) and spinal dysraphism (NKX2-8) as two distinct autosomal recessive disorders per peer-reviewed genetics studies (Rule 8)."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "Gastric torsion, recommended tests (SD, HYM, HUU, hips, heart, eyes, thyroid)"
        },
        {
          id: "weimaraner-spinal-dysraphism-nkx2-8-2013",
          role: "verified",
          locator: "Spinal dysraphism (NKX2-8, PMID 23874236)"
        },
        {
          id: "weimaraner-hypomyelination-fnip2-2014",
          role: "verified",
          locator: "Hypomyelination (FNIP2, PMID 24272703)"
        },
        {
          id: "weimaraner-club-of-america-health",
          role: "verified",
          locator: "Hypertrophic osteodystrophy (HOD) and panosteitis"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "cited",
          locator: "Health (gastric torsion, chewing hazards) & Grooming (nails, ears)"
        },
        {
          id: "weimaraner-club-of-america-health",
          role: "cited",
          locator: "CHIC screening and HOD monitoring"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator:
            "Recommended Health Tests: Hip Evaluation, Cardiac Exam, Ophthalmologist Evaluation, Thyroid Evaluation, Spinal Dysraphism (SD) DNA, Hypomyelination (HYM) DNA, Hyperuricosuria (HUU) DNA"
        },
        {
          id: "ofa-weimaraner-chic-requirements",
          role: "verified",
          locator: "OFA CHIC Weimaraner program"
        },
        {
          id: "rkc-weimaraner-breed-profile",
          role: "verified",
          locator: "Best Practice: BVA/KC Hip, BVA/KC Elbow, BVA/KC/ISDS Eye"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "cited",
          locator: "Health: chewing and mouth/gum injury awareness"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "cited",
          locator: "Grooming: clean ears regularly as ear structure impedes airflow"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "cited",
          locator: "Health & Grooming: short coat brushing and field scrapes"
        }
      ],
      verifiedOn: null,
      note: null
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "cited",
          locator: "About the Breed, Exercise, Training"
        },
        {
          id: "rkc-weimaraner-breed-profile",
          role: "cited",
          locator: "Breed characteristics"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability summary based on very high exercise, strong hunting drive, and close family attachment."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "Did You Know: Eisenhower's Heidi, William Wegman (Sesame Street since 1989), 'Gray Ghost'"
        },
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "EYES (sky-blue in puppies) & BRIEF HISTORICAL SUMMARY (long-haired variety before 1900)"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "Size (59–70 cm / 57–65 cm), Weight (30–40 kg / 25–35 kg), coat varieties"
        },
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "Lifespan (10–13 years), exercise, health tests, gastric torsion"
        },
        {
          id: "weimaraner-spinal-dysraphism-nkx2-8-2013",
          role: "verified",
          locator: "Spinal dysraphism (NKX2-8, PMID 23874236)"
        },
        {
          id: "weimaraner-hypomyelination-fnip2-2014",
          role: "verified",
          locator: "Hypomyelination (FNIP2, PMID 24272703)"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    }
  },

  updatedOn: "2026-11-20"
};
