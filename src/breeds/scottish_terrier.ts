import type { Breed } from "../schema/breed.types";

export const scottish_terrier: Breed = {
  slug: "scottish-terrier",
  name: "Scottish Terrier",
  scientificName: null,

  alternateNames: [
    "Scottie",
    "Aberdeen Terrier",
    "Diehard",
    "Scotch Terrier",
    "Terrier Écossais",
    "Schottischer Terrier"
  ],

  group: "Small-sized Terriers",

  origin: {
    country: "Great Britain",
    region: "Highlands of Scotland (notably Aberdeen and surrounding areas)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/ScottishTerrier.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:ScottishTerrier.jpg",
      title: "ScottishTerrier.jpg",
      description:
        "A black Scottish Terrier standing in profile on grass.",
      creator: "Matthew MacKenzie",
      uploader: "Svencb",
      capturedOn: "2003-02-09",
      uploadedOn: "2006-12-27",
      width: 400,
      height: 327,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Matthew MacKenzie (Ogmios at the English Wikipedia), Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:ScottishTerrier.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-20"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Scottish_terrier_.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Scottish_terrier_.jpg",
      title: "Scottish terrier .jpg",
      description:
        "A Scottish Terrier sitting outdoors showing its wiry beard and leg furnishings.",
      creator: "Cheryl Brind",
      uploader: "Ltshears",
      capturedOn: "2012-05-24",
      uploadedOn: "2012-07-18",
      width: 1536,
      height: 2048,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Cheryl Brind (Flickr / uploaded by Ltshears), Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:Scottish_terrier_.jpg. License: https://creativecommons.org/licenses/by/2.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-20"
    }
  ],

  overview: {
    summary:
      "A short-legged, heavy-boned Scottish earthdog recognized for its long bearded head, pointed erect ears, weather-resistant wiry coat, and dignified, independent spirit.",

    description:
      "The Scottish Terrier packs remarkable bone, muscle, and determination into a compact, low-slung frame. Its unmistakable outline combines a long, cleanly shaped head, bushy eyebrows, and a full chin beard with small, sharply pointed erect ears and an upright, tapering tail. Underneath the close-lying, harsh wiry outer coat sits a short, dense, soft undercoat that shields the dog from rough ground and wet weather. Deep, dark almond-shaped eyes convey steady alertness and poise. Reserved with strangers yet steadfastly devoted to its own household, this small terrier brings together the businesslike grit of a traditional underground hunter and the composed, self-reliant charm of a household companion.",

    history:
      "Bred in the rugged Highlands of Scotland to pursue foxes, badgers, and other vermin into burrows and rocky dens, the Scottish Terrier shares early roots with several native Scottish earthdogs. Early dogs proliferated around Aberdeen and were widely called Aberdeen Terriers before Captain Gordon Murray helped formalize the modern type and name in 1879, followed by the formation of the first breed club in 1882. Known affectionately as 'the Diehard' for its stubborn tenacity, the breed surged in popularity through the 1930s and 1940s and became a familiar cultural icon in art, advertising, board games, and even the American White House. Although annual registrations in Britain have fallen steeply since its mid-twentieth-century peak, dedicated breeders continue to preserve this distinctive heritage terrier.",

    originalPurpose:
      "Going to ground in rocky dens and rough Highland terrain to locate, bolt, and dispatch foxes, badgers, and vermin.",

    currentRoles: [
      "Loyal household companion",
      "Alert home watchdog",
      "Earthdog, barn hunt, and scent-work competitor",
      "Conformation and companion-sport participant"
    ]
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "cm",
      male: {
        min: 25,
        max: 28
      },
      female: {
        min: 25,
        max: 28
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 8.5,
        max: 10.5
      },
      female: {
        min: 8.5,
        max: 10.5
      }
    },

    lifespanYears: {
      min: 12,
      max: 15
    },

    coatType:
      "Close-lying, weather-resistant double coat made up of a short, dense, soft undercoat and a harsh, dense, wiry outer coat, with longer furnishings on the beard, eyebrows, legs, and lower body.",

    coatLength: "Medium",

    coatColors: [
      "Black",
      "Wheaten",
      "Brindle (including black brindle, red brindle, silver brindle, and other shades)"
    ],

    sheddingLevel:
      "Low to moderate; dead wiry hairs stay caught in the coat until removed through regular brushing and hand-stripping or trimming",

    droolingLevel:
      "Low; clean, tight lips keep drool minimal, though the beard can hold water after drinking",

    distinctiveFeatures: [
      "Thick-set, short-legged, heavy-boned frame suggesting substantial power in a compact body",
      "Height at the withers of 25 to 28 cm and adult weight of 8.5 to 10.5 kg",
      "Long head in proportion to body size with a nearly flat skull, equal-length foreface, and slight but distinct stop",
      "Large black nose whose profile slopes gently backward toward the chin",
      "Large teeth meeting in a regular scissor bite",
      "Almond-shaped, dark brown eyes set fairly wide apart beneath prominent eyebrows",
      "Neat, fine-textured, sharply pointed erect ears placed high on the skull",
      "Short, muscular back with a straight, level topline and deep, well-rounded ribs",
      "Moderately long tail that is thick at the base, tapers toward the tip, and is carried upright or with a gentle curve",
      "Well-padded, close-knit feet with forefeet slightly larger than hindfeet",
      "Harsh, dense, wiry double coat with distinctive beard, eyebrows, and lower-body furnishings"
    ]
  },

  temperament: {
    traits: [
      "Independent, self-assured, and dignified",
      "Loyal and deeply attached to its household",
      "Bold, courageous, and spirited without unprovoked aggression",
      "Reserved and observant around unfamiliar people",
      "Intelligent and observant problem-solver with a stubborn streak",
      "Strong hunting instinct toward rodents, small wildlife, and unfamiliar cats",
      "Can be assertive or prickly with unfamiliar dogs"
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 2,
      withStrangers: 2,
      protectiveness: 4,
      independence: 4,
      trainability: 3,
      barking: 3,
      energy: 3
    }
  },

  care: {
    exercise: {
      level:
        "Moderate; needs daily brisk walks and energetic bursts of play, though its heavy bone and short legs make it poorly suited to long-distance running or deep-water swimming",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Daily brisk leashed walks with time to investigate scents",
        "Short, upbeat games of fetch or tug in a securely fenced yard",
        "Earthdog trials, barn hunt, and structured scent-searching games",
        "Interactive puzzle toys and nose-work foraging indoors",
        "Supervised digging in a designated garden patch"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Brush and comb weekly—and more often in the beard, legs, and lower-body furnishings—to remove tangles and keep the skin healthy.",

      bathing:
        "Bathe periodically during routine grooming using a gentle moisturizing canine shampoo.",

      notes: [
        "Hand-stripping on a regular schedule (starting in puppyhood, often weekly or monthly once established) preserves the harsh, weather-resistant wire texture and rich coat pigment.",
        "Machine clipping every six to eight weeks is a practical option for pet dogs, though clipping gradually softens the coat as the undercoat becomes dominant.",
        "Clean and comb the beard regularly after meals to prevent food buildup and matting.",
        "Check the small erect ears weekly for wax or debris and trim nails routinely.",
        "Brush teeth multiple times a week with canine toothpaste.",
        "Use strict supervision near pools and deep water because this breed's heavy front build and short legs make swimming difficult."
      ]
    },

    training: {
      difficulty:
        "Moderate to challenging; clever and quick to grasp concepts, yet independent enough to tune out repetitive drills",

      tips: [
        "Keep training sessions brief (under 15 minutes) and varied so this independent thinker does not get bored.",
        "Use upbeat praise, food rewards, and creative games that make cooperation feel rewarding.",
        "Speak calmly and firmly—Scotties pick up quickly on vocal tone and resist harsh or forceful handling.",
        "Keep the dog on a leash or inside a secure fence outdoors, as its hunting drive can override recall around squirrels or small pets.",
        "Practice calm, polite leash greetings early to manage dog-directed assertiveness."
      ],

      socialization:
        "Introduce puppies early and steadily to varied people, calm dogs, household sounds, and grooming handling so their natural reserve stays balanced and confident rather than defensive."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool and damp climates suited to its weather-resistant double coat",
        "Warm climates when indoor cooling, shade, fresh water, and cooler-hour walks are provided"
      ],

      aloneTimeTolerance:
        "Moderate; its independent streak helps it settle for reasonable stretches when exercised, though long daily isolation can trigger boredom barking or digging."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced dog food formulated for small active breeds and matched to life stage; many experienced owners favor a moderate-protein formula (around the mid-20 percent range) that supports healthy skin and coat growth.",

    feedingFrequency: {
      puppy: "Three to four small measured meals per day until six months of age",
      adult: "Two measured meals per day",
      senior: "Two portion-controlled meals per day adjusted for lower activity"
    },

    guidelines:
      "Measure meals carefully and check body condition by feeling the ribs beneath the dense coat rather than judging by appearance alone. Keep fresh drinking water available at all times.",

    considerations: [
      "Keep weight lean to protect the spine and short legs from unnecessary joint strain.",
      "Count training treats within daily calories to prevent gradual weight gain.",
      "Under veterinary guidance, adding dog-safe green leafy or yellow-orange vegetables several times a week may be worth discussing, as a peer-reviewed case-control study linked regular vegetable intake to lower bladder cancer risk in this breed.",
      "Watch coat shine, even hair growth, and skin comfort as everyday signs that a diet suits the individual dog.",
      "Transition gradually over five to seven days when changing formulas."
    ],

    note:
      "Calorie needs vary with age, neuter status, and daily exercise; consult a veterinarian before making major dietary changes or adding supplements."
  },

  health: {
    overview:
      "Scottish Terriers are generally sturdy dogs with a typical lifespan of 12 to 15 years (with average estimates around 12 years). Several hereditary and medical conditions are well documented in scientific literature and breed health programs. Most notably, the breed has a markedly elevated risk of urinary bladder transitional cell carcinoma (urothelial carcinoma); peer-reviewed case-control studies have linked higher risk to lawn herbicide exposure and lower risk to regular vegetable intake. Recognized inherited disorders include von Willebrand's disease (Type III), craniomandibular osteopathy (CMO), patellar luxation, and Scottie Cramp (an exercise- or excitement-triggered movement disorder linked to serotonin regulation). Additional conditions monitored in some lines include elevated liver alkaline phosphatase (ALP) / vacuolar hepatopathy, autoimmune thyroiditis, kidney protein loss, eye disorders, Legg-Calvé-Perthes disease, and skin allergies.",

    commonConditions: [
      "Bladder transitional cell carcinoma (urothelial carcinoma) — a well-established malignancy occurring at much higher rates in Scottish Terriers than in most breeds; peer-reviewed studies associate lawn herbicide exposure with increased risk and regular dietary vegetable intake with reduced risk, making adult veterinary urinary monitoring important.",
      "Von Willebrand's disease (Type III) — a severe inherited clotting disorder caused by deficiency of von Willebrand factor; preventable in breeding programs through pre-breeding DNA testing.",
      "Craniomandibular osteopathy (CMO) — a painful, typically self-limiting proliferative bone condition of the jaw and skull in young puppies (around 4 to 8 months of age) with an available pre-breeding DNA test.",
      "Scottie Cramp — an inherited, non-painful hyperkinetic movement disorder linked to serotonin neurotransmission that causes temporary hind-limb stiffness, arched back, and a hopping gait during excitement or exercise, resolving with rest.",
      "Patellar luxation — slipping of the kneecap out of its normal groove, causing intermittent hind-leg skipping or lameness; screened via veterinary orthopedic evaluation.",
      "Elevated alkaline phosphatase (ALP) and vacuolar hepatopathy — persistently high liver enzyme levels recognized in adult Scottish Terriers that warrant veterinary monitoring and bile-acid or liver evaluation when indicated.",
      "Additional monitored conditions (less uniform or line-dependent) — autoimmune thyroiditis, protein-losing kidney issues, Legg-Calvé-Perthes disease, cataracts or other eye conditions, and allergic skin irritation."
    ],

    preventiveCare: [
      "Ask breeders for documented pre-breeding DNA test results for von Willebrand's disease and craniomandibular osteopathy, plus veterinary patella evaluations.",
      "Avoid exposing Scottish Terriers to herbicide-treated lawns and gardens whenever possible, as peer-reviewed case-control research linked herbicide exposure to substantially higher bladder cancer risk.",
      "Discuss periodic urinary tract and bladder screening (such as urinalysis or veterinary ultrasound) for adults aged six years and older, and seek prompt care for straining, frequent urination, or blood in the urine.",
      "Keep body weight lean to reduce stress on knees, hips, and the spine.",
      "Maintain regular coat grooming, ear checks, nail trims, dental brushing, and annual veterinary wellness exams."
    ],

    recommendedScreenings: [
      "DNA test for von Willebrand's disease (Type III) before breeding",
      "DNA test for craniomandibular osteopathy (CMO) before breeding",
      "Veterinary patellar luxation evaluation at 12 months of age or older",
      "Elective breed-recommended screenings include autoimmune thyroiditis panel, board-certified veterinary ophthalmologist eye examination, serum bile acid test, urine protein:creatinine ratio kidney screen, and Legg-Calvé-Perthes hip radiographs",
      "Periodic veterinary urinary and bladder health checks in middle-aged and senior adults"
    ],

    dentalCare:
      "Brush teeth several times per week using canine enzymatic toothpaste, and pair home brushing with regular veterinary dental checks to keep the large teeth and gums healthy.",

    earCare:
      "Check the small, upright prick ears weekly for wax, redness, or debris, and clean gently with a veterinarian-approved cleanser only when needed.",

    skinCare:
      "Part the dense double coat weekly while brushing to inspect the skin for dryness, fleas, redness, or irritation, using gentle moisturizing shampoos and parasite prevention as recommended by a veterinarian."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Owners who appreciate a dignified, independent terrier with a strong personality",
      "Adult households or families with older, respectful children who give dogs space",
      "Apartment or small-home residents able to provide daily brisk walks and interactive play",
      "Active retirees looking for a compact, loyal watchdog",
      "Handlers interested in earthdog, barn hunt, or scent-work activities"
    ],

    notIdealFor: [
      "First-time owners wanting an automatically eager-to-please, low-maintenance pet",
      "Homes with boisterous toddlers who may pull ears or crowd a reserved dog",
      "Households with free-roaming small pets such as rodents or rabbits",
      "Owners expecting an off-leash dog-park companion that loves every unfamiliar dog",
      "People unwilling to commit to routine brushing, hand-stripping, or regular clipping"
    ]
  },

  funFacts: [
    "Scottish Terriers have lived in the White House under multiple U.S. presidents, including Franklin D. Roosevelt's famous companion Fala, Dwight D. Eisenhower's Caacie and Telek, and George W. Bush's Barney and Miss Beazley.",
    "The breed's boxy silhouette with prick ears and upright tail became one of the original iconic metal game tokens in Monopoly.",
    "Early enthusiasts nicknamed the breed 'the Diehard' in tribute to its stubborn courage and persistence.",
    "The first dog show class for Scottish Terriers was held in 1860, and the breed's modern name was formalized in 1879 before the first breed club formed in 1882.",
    "Their heavy-boned, deep-chested, short-legged frame makes them awkward swimmers, so careful supervision around pools and deep water is essential."
  ],

  faq: [
    {
      question: "How big is a Scottish Terrier?",
      answer:
        "Adult Scottish Terriers typically stand 25 to 28 cm tall at the withers and weigh 8.5 to 10.5 kg, combining a compact height with surprisingly solid bone and muscle."
    },
    {
      question: "How long do Scottish Terriers usually live?",
      answer:
        "Most Scottish Terriers live around 12 to 15 years, with average life expectancy often cited near 12 years when supported by healthy weight management and regular veterinary care."
    },
    {
      question: "Do Scottish Terriers shed a lot?",
      answer:
        "They shed lightly to moderately compared with smooth-coated breeds because dead wiry hairs stay trapped in the coat. Weekly brushing and periodic hand-stripping or clipping every six to eight weeks keep the coat tidy and mat-free."
    },
    {
      question: "Are Scottish Terriers good for apartments?",
      answer:
        "Yes. Their small footprint and moderate exercise requirements fit apartment or small-house living well, as long as they get daily brisk walks, mental games, and active bursts of play."
    },
    {
      question: "Are Scottish Terriers easy to train?",
      answer:
        "They are sharp, independent thinkers rather than automatic pleasers. Short, varied, reward-based sessions under 15 minutes work much better than repetitive drills or harsh corrections."
    },
    {
      question: "What makes bladder cancer such an important health topic for this breed?",
      answer:
        "Scottish Terriers have a well-documented predisposition to bladder transitional cell carcinoma. Peer-reviewed studies have linked lawn herbicide exposure to higher risk and regular vegetable intake to lower risk, so avoiding treated lawns and discussing adult urinary screening with a veterinarian are practical precautions."
    },
    {
      question: "What pre-breeding health tests are recommended for Scottish Terriers?",
      answer:
        "Core pre-breeding screenings include DNA tests for von Willebrand's disease (Type III) and craniomandibular osteopathy (CMO), along with a veterinary patellar luxation evaluation. Breeders may also screen for thyroid health, eye disease, liver bile acids, kidney protein loss, or hip conditions."
    }
  ],

  references: [
    "the-kennel-club-scottish-terrier-breed-standard",
    "rkc-scottish-terrier-breed-profile",
    "fci-scottish-terrier-official-standard",
    "fci-scottish-terrier-nomenclature",
    "akc-scottish-terrier-breed-standard",
    "akc-scottish-terrier-breed-profile",
    "scottish-terrier-club-of-america-health",
    "ofa-scottish-terrier-chic-requirements",
    "scottish-terrier-bladder-cancer-study-2005",
    "scottish-terrier-herbicide-bladder-cancer-study-2004",
    "the-dog-api",
    "wikimedia-scottish-terrier-matthew-mackenzie",
    "wikimedia-scottish-terrier-cheryl-brind"
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Left null because official breed standards do not publish a formal taxonomic scientific name."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-scottish-terrier-nomenclature",
          role: "verified",
          locator: "SCOTTISH TERRIER (73), TERRIER ECOSSAIS, SCHOTTISCHER TERRIER"
        },
        {
          id: "rkc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "About this breed: Aberdeen terrier, Scottie"
        },
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "About the Breed: Scottie, 'the Diehard'"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "alternateNames: Scottie, Aberdeen Terrier"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-scottish-terrier-nomenclature",
          role: "verified",
          locator:
            "Group 3 Terriers, Section 2 Small sized Terriers, not subject to working trial"
        },
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator: "Terrier Group"
        },
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "Terrier Group"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "group: Terrier"
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
          id: "fci-scottish-terrier-nomenclature",
          role: "verified",
          locator: "Country of origin: GREAT BRITAIN"
        },
        {
          id: "rkc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "About this breed: native Scottish breed, Aberdeen area"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "origin.country: Scotland (sub-national constituent country of Great Britain)"
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "Kept Great Britain as country of origin per FCI Nomenclature No. 73 and recorded Scotland in region."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator: "General appearance, Characteristics, Temperament"
        },
        {
          id: "rkc-scottish-terrier-breed-profile",
          role: "verified",
          locator:
            "About this breed: Aberdeen terrier, 1879 Captain Gordon Murray, 1882 first breed club"
        },
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "About the Breed, History, Did You Know"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator:
            "Head and skull, Eyes, Ears, Mouth, Body, Hindquarters, Feet, Tail, Coat, Colour, Size"
        },
        {
          id: "fci-scottish-terrier-official-standard",
          role: "verified",
          locator: "FCI Standard No. 73 (valid 2026-09-08, published 2026-10-06)"
        },
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "Breed Colors & Markings (Black, Black Brindle, Brindle, Red Brindle, Silver Brindle, Wheaten)"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator: "Size: Height at withers 25-28 cms (10-11 ins)"
        },
        {
          id: "fci-scottish-terrier-official-standard",
          role: "verified",
          locator: "SIZE: Height at withers 25-28 cm"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "height (cm): male 25-28, female 25-28"
        },
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "conflicting",
          locator: "Height: 10 inches (single figure published in inches)"
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "Stored 25–28 cm from the country-of-origin Royal Kennel Club standard and FCI Standard No. 73 (matching The Dog API); AKC's 10 inches is noted as a differing unit/range."
    },

    "physical.height.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator: "Size: 25-28 cms"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "height.male.max: 28 cm"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "physical.height.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator: "Size: 25-28 cms"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "height.female.max: 28 cm"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator: "Size: weight 8.5-10.5 kgs (19-23 lbs)"
        },
        {
          id: "fci-scottish-terrier-official-standard",
          role: "verified",
          locator: "SIZE: weight 8.5-10.5 kg"
        },
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "conflicting",
          locator: "Weight: 19-22 pounds (male), 18-21 pounds (female)"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "weight (kg): male 8.5-10, female 8-9.5"
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "Stored 8.5–10.5 kg from the country-of-origin Royal Kennel Club standard and FCI Standard No. 73 (first stated unit); AKC (19–22 lb / 18–21 lb) and The Dog API (8.5–10 kg / 8–9.5 kg) are recorded as conflicting."
    },

    "physical.weight.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator: "Size: weight 8.5-10.5 kgs"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "weight.male.max: 10 kg"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "physical.weight.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator: "Size: weight 8.5-10.5 kgs"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "weight.female.max: 9.5 kg"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "lifespanYears: 12-15"
        },
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "conflicting",
          locator: "Life Expectancy: 12 years"
        },
        {
          id: "rkc-scottish-terrier-breed-profile",
          role: "cited",
          locator: "Lifespan: Over 10 years"
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "Retained 12–15 years from The Dog API while noting AKC's 12-year average figure in prose and evidence."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "Breed characteristics: Sheds: Yes"
        },
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level; Grooming (double coat)"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (low)"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator:
            "Characteristics & Temperament: Loyal and faithful, dignified, independent and reserved, courageous and highly intelligent; bold, never aggressive"
        },
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "verified",
          locator:
            "independent / confident / spirited; aloof toward strangers; strong hunting instinct; cantankerous around other dogs"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "temperament.traits: Confident, independent, alert, intelligent, loyal"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics"
        },
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "cited",
          locator: "Characteristics and Temperament"
        }
      ],
      verifiedOn: null,
      note: "Editorial 1–5 ratings synthesized from kennel club descriptions."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, Nutrition"
        },
        {
          id: "rkc-scottish-terrier-breed-profile",
          role: "cited",
          locator: "Breed characteristics: Exercise, Grooming, Home/Garden"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "Exercise: Up to 1 hour per day"
        },
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "Exercise: good walk plus bursts of playtime"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "rkc-scottish-terrier-breed-profile",
          role: "cited",
          locator: "Exercise: Up to 1 hour per day"
        }
      ],
      verifiedOn: null,
      note: "Editorial estimate of 45–60 minutes/day based on RKC and AKC guidance."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "Exercise: great dogs for a small home or apartment living"
        },
        {
          id: "rkc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "Size of home: Small house; Town or country: Either"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "Size of garden: Small/medium garden"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator: "Coat: close-lying double coat making a weather-resisting covering"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "cited",
          locator: "Independent temperament profile"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "cited",
          locator: "Nutrition: moderate-protein diet (mid-20% protein) and coat/skin monitoring"
        },
        {
          id: "scottish-terrier-bladder-cancer-study-2005",
          role: "cited",
          locator: "Dietary vegetable intake (>=3 times/week) inversely associated with TCC (OR 0.30)"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "cited",
          locator: "General small-breed feeding guidance"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scottish-terrier-bladder-cancer-study-2005",
          role: "verified",
          locator: "JAVMA 2005 (PMID 16013542): 92 TCC cases vs 83 controls; vegetable intake OR 0.30"
        },
        {
          id: "scottish-terrier-herbicide-bladder-cancer-study-2004",
          role: "verified",
          locator: "JAVMA 2004 (PMID 15112777): 83 TCC cases vs 83 controls; herbicide exposure OR 3.62, herbicide+insecticide OR 7.19"
        },
        {
          id: "scottish-terrier-club-of-america-health",
          role: "verified",
          locator: "STCA Health & Jan 1, 2025 CHIC requirements (vWD, CMO, Patellar Luxation; optional Thyroid, Eyes, Serum Bile Acid, Kidney UPC, Legg-Calvé-Perthes)"
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "Distinguishes peer-reviewed oncology findings and required DNA/orthopedic screenings from elective/monitored conditions per Rule 8."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scottish-terrier-bladder-cancer-study-2005",
          role: "verified",
          locator: "Bladder TCC case-control study (PMID 16013542)"
        },
        {
          id: "scottish-terrier-herbicide-bladder-cancer-study-2004",
          role: "verified",
          locator: "Herbicide exposure and bladder TCC case-control study (PMID 15112777)"
        },
        {
          id: "scottish-terrier-club-of-america-health",
          role: "verified",
          locator: "vWD, CMO, patellar luxation, thyroid, eye, liver bile acid, kidney, Legg-Calvé-Perthes"
        },
        {
          id: "ofa-scottish-terrier-chic-requirements",
          role: "verified",
          locator: "OFA CHIC Scottish Terrier program"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "scottish-terrier-herbicide-bladder-cancer-study-2004",
          role: "cited",
          locator: "Minimizing lawn herbicide exposure (PMID 15112777)"
        },
        {
          id: "scottish-terrier-club-of-america-health",
          role: "cited",
          locator: "Pre-breeding testing and health monitoring"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scottish-terrier-club-of-america-health",
          role: "verified",
          locator:
            "Effective Jan 1, 2025 CHIC requirements: Required (vWD DNA, CMO DNA, Patellar Luxation); Optional choose one (Autoimmune Thyroiditis, ACVO Eye Exam, Serum Bile Acid, Kidney UPC, Legg-Calvé-Perthes)"
        },
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "verified",
          locator:
            "Recommended Health Tests: Patella Evaluation, Von Willebrand Disease III DNA Test, Craniomandibular Osteopathy"
        },
        {
          id: "ofa-scottish-terrier-chic-requirements",
          role: "verified",
          locator: "OFA CHIC Scottish Terrier testing registry"
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "Updated to reflect STCA's January 1, 2025 CHIC panel making CMO DNA required alongside vWD DNA and Patellar Luxation."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "cited",
          locator: "Mouth: large teeth with perfect, regular scissor bite"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "cited",
          locator: "Ears: neat, fine texture, pointed, erect"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "cited",
          locator: "Grooming & Nutrition: weekly brushing/comb-out and monitoring for dry, flaky skin or itching"
        }
      ],
      verifiedOn: null,
      note: null
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "cited",
          locator: "About the Breed, Exercise, Training, Grooming"
        },
        {
          id: "rkc-scottish-terrier-breed-profile",
          role: "cited",
          locator: "Breed characteristics"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability summary based on independent terrier temperament, grooming upkeep, and compact size."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "verified",
          locator:
            "Did You Know: Fala (FDR), Caacie & Telek (Eisenhower), 1860 first show class, 'the Diehard'"
        },
        {
          id: "rkc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "About this breed: 1879 name formalized, 1882 first breed club"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator: "Size (25–28 cm, 8.5–10.5 kg)"
        },
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "Lifespan, grooming, apartment suitability, training"
        },
        {
          id: "scottish-terrier-bladder-cancer-study-2005",
          role: "verified",
          locator: "Bladder cancer and vegetable intake (PMID 16013542)"
        },
        {
          id: "scottish-terrier-herbicide-bladder-cancer-study-2004",
          role: "verified",
          locator: "Bladder cancer and lawn herbicides (PMID 15112777)"
        },
        {
          id: "scottish-terrier-club-of-america-health",
          role: "verified",
          locator: "2025 CHIC pre-breeding health screenings"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    }
  },

  updatedOn: "2026-11-20"
};
