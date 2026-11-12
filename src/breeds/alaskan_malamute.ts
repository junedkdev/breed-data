import type { Breed } from "../schema/breed.types";

export const alaskan_malamute: Breed = {
  slug: "alaskan-malamute",
  name: "Alaskan Malamute",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Malamute",
    "Mal",
    "Mahlemut",
    "Alaskan Sled Dog"
  ],

  group:
    "Spitz and Primitive Types; Section 1 — Nordic Sledge Dogs (without working trial; also classified in the Working and Northern Breed groups)",

  origin: {
    country: "United States",
    region:
      "Kotzebue Sound and Seward Peninsula, northwestern Alaska"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Alaskan_Malamute.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Alaskan_Malamute.jpg",
      title: "Alaskan Malamute.jpg",
      description:
        "An adult Alaskan Malamute standing in profile outdoors.",
      creator: "Lilly M",
      uploader: "Lilly M",
      capturedOn: "2007-06-16",
      uploadedOn: "2007-06-25",
      width: 2592,
      height: 1944,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Lilly M, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Alaskan_Malamute.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-11"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Alaskan_Malamute_600.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Alaskan_Malamute_600.jpg",
      title: "Alaskan Malamute 600.jpg",
      description:
        "An Alaskan Malamute standing outdoors at a dog show.",
      creator: "Tomasz Sienicki",
      uploader: "Pmg",
      capturedOn: "2006-05-20",
      uploadedOn: "2006-05-21",
      width: 600,
      height: 489,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Tomasz Sienicki, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Alaskan_Malamute_600.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-11"
    }
  ],

  overview: {
    summary:
      "A monumental, powerful, and deep-chested Arctic sledge dog native to northwestern Alaska, celebrated for hauling heavy freight across frozen polar terrain, wolf-like facial cap markings, plumed tail, and affectionate, dignified pack loyalty.",

    description:
      "The Alaskan Malamute is one of the oldest Arctic sledge dogs, defined by immense physical power, heavy bone substance, broad shoulders, and an unyielding capacity for sustained heavy freight draft work. Engineered for endurance and load capacity rather than racing speed, the dog possesses a solid, well-muscled frame balanced by a proud, upright carriage. Its weather-resistant double coat consists of a thick, coarse guard coat over an insulating, woolly undercoat, presenting in shades from light silver-grey to black, sable, or red, always set off by white underparts and characteristic facial cap, bar, or mask markings. The broad head is strong and dignified with alert, medium triangular ears set wide on the skull, dark almond-shaped eyes expressing warm interest, and a profusely plumed tail carried gracefully over the back like a waving plume. In the home, it is exceptionally gentle, friendly, and pack-oriented, bonding closely with its human family while remaining a dignified, quiet athlete.",

    history:
      "The breed was developed over millennia by the Mahlemuts, an indigenous Inuit tribe residing along Kotzebue Sound in northwestern Alaska. Unlike lighter racing sled dogs, these substantial dogs were cultivated to haul heavy sledges laden with seal meat, caribou, and family possessions across frozen tundra and sea ice, as well as assisting hunters in locating seal breathing holes and deterring polar bears. During the nineteenth-century Klondike Gold Rush, prospectors paid exorbitant sums for authentic freighting dogs, leading to widespread crossbreeding with European working dogs. Dedicated conservationists gathered pure native stock from remote coastal settlements during the 1920s and 1930s, establishing the foundation Kotzebue and M'Loot strains that preserved the breed's authentic Arctic morphology. Alaskan Malamutes served valiantly in polar expeditions with Admiral Richard Byrd in Antarctica and rendered invaluable search-and-rescue service in Greenland during the Second World War.",

    originalPurpose:
      "Heavy freight sledge hauling over Arctic snow and ice, hunting companion for seal and caribou, and protective camp companion for the Mahlemut Inuit people.",

    currentRoles: [
      "Recreational sledding, heavy weight-pulling, and skijoring competitor",
      "Canine athlete in packing, backpacking, and carting",
      "Devoted household companion and active family pet",
      "Search, rescue, and cold-weather wilderness tracking partner"
    ]
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "in",
      male: {
        min: 24,
        max: 26
      },
      female: {
        min: 22,
        max: 24
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 80,
        max: 95
      },
      female: {
        min: 70,
        max: 85
      }
    },

    lifespanYears: {
      min: 10,
      max: 14
    },

    coatType:
      "Thick, coarse guard coat, never long and soft, standing off from the body; accompanied by a dense, oily, woolly undercoat 1 to 2 inches in depth, providing superior thermal insulation against extreme sub-zero blizzards and polar moisture.",

    coatLength: "Medium",

    coatColors: [
      "Light grey through intermediate shadings to black with white underparts",
      "Sable and shadings of sable to red with white underparts",
      "Solid white (the only solid color permitted)",
      "White markings on lower legs, feet, parts of legs, and face markings forming a cap or mask"
    ],

    sheddingLevel:
      "High; sheds moderate amounts year-round and blows its dense undercoat heavily twice a year during seasonal weather transitions",

    droolingLevel:
      "Low; tight, dry, cleanly chiselled lips prevent drooling",

    distinctiveFeatures: [
      "Substantial, powerful, and heavy-boned Arctic sledge dog build engineered for heavy freight hauling rather than racing speed",
      "Desirable freighting size of 25 inches at the shoulder and 85 pounds for males, and 23 inches at the shoulder and 75 pounds for females",
      "Working height range of 24 to 26 inches for males and 22 to 24 inches for females, with weight typically 80 to 95 pounds for males and 70 to 85 pounds for females",
      "Dense, coarse stand-off double coat with an abundant insulating undercoat",
      "Broad, deep head with a moderately flat skull, slight furrow between the eyes, and a bulky muzzle",
      "Complete scissor bite with large, strong jaws and sound teeth",
      "Medium-sized, almond-shaped brown eyes set obliquely, with dark brown preferred; blue eyes are an elimination fault",
      "Medium-sized, triangular prick ears with slightly rounded tips, set wide on the skull and angled forward when alert",
      "Deep chest reaching at least to the elbows with well-sprung oval ribs and a firm, level back",
      "Moderately set tail following the line of the spine at the base, heavily plumed and carried curled gracefully over the back like a waving feather",
      "Large, snowshoe-like compact feet with well-arched toes, thick tough pads, and protective webbing of hair between toes"
    ]
  },

  temperament: {
    traits: [
      "Affectionate, friendly, and deeply loyal companion",
      "Dignified, calm, and composed in home surroundings",
      "Playful and high-spirited when invited to engage in outdoor work",
      "Strong-willed, independent problem-solver requiring confident leadership",
      "Intensely pack-oriented, thriving on inclusion in household family life",
      "Patient and good-natured with familiar children",
      "Friendly and welcoming with unfamiliar strangers, making an ineffective guard dog",
      "High prey drive toward small wild animals, cats, and livestock",
      "Can be assertive or competitive with unfamiliar dogs of the same sex",
      "Vocal communicator using expressive woo-woo vocalizations and howling rather than nuisance barking"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 4,
      protectiveness: 2,
      independence: 4,
      trainability: 3,
      barking: 2,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; an endurance working athlete requiring substantial daily physical exertion and purposeful pulling or packing activities",

      minutesPerDay: {
        min: 90,
        max: 120
      },

      activities: [
        "Daily long trail hikes and power walking in cool or cold weather",
        "Recreational sledding, carting, and urban mushing with a working harness",
        "Weight-pulling and backpack hiking carrying trail supplies",
        "Free running and play sessions in a securely fenced paddock or yard",
        "Canicross, bikejoring, or skijoring on dirt trails or snow",
        "Interactive fetch, tug games, and cognitive food puzzle foraging"
      ]
    },

    grooming: {
      level: "Moderate to high",

      brushing:
        "Brush thoroughly two to three times weekly using an undercoat rake, slicker brush, and wide metal comb down to the skin to remove loose undercoat and prevent mats; increase to daily line-brushing during heavy seasonal shedding when blowing coat in spring and autumn.",

      bathing:
        "Bathe every two to three months or when soiled, using a clarifying canine shampoo; ensure the dense undercoat is completely dried with a high-velocity canine dryer down to the skin to prevent moisture eczema.",

      notes: [
        "Never shave the double coat; the outer guard hairs and dense undercoat provide thermal insulation against freezing winter winds and protect skin from summer solar radiation.",
        "Inspect the erect ears weekly for dust, wax, or foreign matter, wiping gently with an approved veterinary cleanser.",
        "Check paw pads, toes, and hair webbing for ice balls, burrs, or cuts after snow pulling or rocky trail hikes.",
        "Trim hard, fast-growing nails every two to three weeks to preserve correct compact foot structure.",
        "Brush teeth several times weekly with canine enzymatic toothpaste.",
        "The coat possesses virtually no natural dog odor and sheds dried mud naturally when brushed."
      ]
    },

    training: {
      difficulty:
        "Moderate to challenging; exceptionally intelligent and capable of learning complex tasks, but independent and easily bored by repetitive drills, requiring patient, reward-based leadership",

      tips: [
        "Use positive reinforcement, high-value food rewards, and enthusiastic play praise.",
        "Begin obedience, loose-leash manners, and impulse-control training from early puppyhood before heavy adult pulling power develops.",
        "Establish fair, clear, and consistent household leadership without physical confrontation.",
        "Keep instructional lessons varied, purposeful, and engaging to prevent boredom.",
        "Always exercise within a securely fenced area of at least six feet in height with buried anti-dig wire; high prey drive and wanderlust prompt escape attempts.",
        "Channel natural heavy-freight hauling drives into structured pulling sports with an appropriate draft harness."
      ],

      socialization:
        "Introduce the puppy early, gradually, and positively to diverse people, friendly vaccinated dogs of varying sizes, livestock, household noises, vehicles, and novel outdoor environments. Early structured socialization tempers natural same-sex dog assertiveness and ensures the dog matures into a poised, self-assured companion."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cold, snowy, and sub-zero winter climates, where the dense double coat provides peerless thermal protection",
        "Temperate climates",
        "Warm climates are challenging; requires indoor air conditioning, cool shaded shelter, and fresh water constantly, with exercise strictly restricted to early morning or late night"
      ],

      aloneTimeTolerance:
        "Low to moderate; deeply pack-oriented and prone to separation distress, boredom howling, or destructive digging if left isolated for long workdays without company."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for large active working breeds, with balanced protein and healthy fats adjusted for seasonal working output.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age, transitioning to two meals daily on a growth formula supporting steady development.",
      adult:
        "Two measured meals daily to support steady metabolism and minimize digestive discomfort.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output, joint support, and lean muscle retention."
    },

    guidelines:
      "Measure food portions carefully using a digital kitchen scale or standard measuring cup, adjusting amounts to maintain a lean, athletic body condition where the ribs are easily felt through the thick coat. Arctic breeds are efficient metabolizers that require fewer calories per pound than many sporting breeds, but working dogs pulling sledges in winter require significantly increased caloric and fat density. Divide daily rations into two distinct meals, restrict vigorous running for at least one hour before and after eating to reduce bloat risk, and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a lean, muscular body condition; excess weight places severe mechanical stress on hips and stifles.",
      "Account for training treats within the total daily caloric allowance to avoid creeping weight gain.",
      "Rest the dog before and after meals to mitigate the risk of bloat (gastric dilatation-volvulus).",
      "Monitor zinc intake; some Arctic breeds exhibit zinc-responsive dermatosis requiring veterinary dietary adjustment.",
      "Provide clean drinking water, especially during warm-weather exercise or winter pulling.",
      "Transition between diet formulas gradually over five to seven days."
    ],

    note:
      "Caloric needs vary significantly based on outdoor temperature, winter sledding workload, and daily exercise. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Alaskan Malamute is an ancient, robust, and generally hardy Arctic breed with a typical life expectancy of 10 to 14 years. Having evolved through generations of practical functional selection in harsh sub-zero wilderness, it enjoys strong constitutional vitality. Primary health priorities include orthopedic screening for hip and elbow dysplasia, DNA testing for hereditary polyneuropathy (AMPN) and cone degeneration (day blindness), ophthalmic evaluations for hereditary cataracts, monitoring for gastric dilatation-volvulus (bloat), and evaluating zinc-responsive dermatosis.",

    commonConditions: [
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints leading to osteoarthritis and hind-limb stiffness, monitored through pre-breeding radiographic screening",
      "Elbow dysplasia — developmental abnormalities of the elbow joints that can cause forelimb lameness and secondary arthritis",
      "Alaskan Malamute Polyneuropathy (AMPN) — an inherited autosomal recessive neuromuscular disorder caused by a mutation in the NDRG1 gene, causing progressive pelvic limb weakness, exercise intolerance, muscle atrophy, and laryngeal paralysis, preventable via DNA testing",
      "Cone Degeneration (CD / Day Blindness / Hemeralopia) — an inherited autosomal recessive retinal disorder caused by a mutation in the CNGB3 gene, causing loss of cone photoreceptor function and blindness in bright daylight, screenable via DNA testing",
      "Chondrodysplasia (CHD / Alaskan Malamute Dwarfism) — an inherited skeletal dysplasia causing shortened, bowed limbs and abnormal joint development, monitored through pedigree tracking and clinical screening",
      "Gastric dilatation-volvulus (GDV / bloat) — an acute, life-threatening twisting and distension of the stomach in deep-chested breeds, requiring emergency veterinary care",
      "Hereditary cataracts and progressive retinal atrophy (PRA) — ocular conditions monitored through annual certified ophthalmologist examinations",
      "Zinc-responsive dermatosis (Type 1) — defective intestinal absorption of zinc leading to crusting, scaling, and hair loss around the eyes, muzzle, and footpads, manageable with zinc supplementation"
    ],

    preventiveCare: [
      "Confirm that breeding stock has certified clearances for hips and elbows, annual certified eye examinations, and DNA clearances for AMPN and Cone Degeneration.",
      "Feed two smaller meals daily and avoid vigorous running for at least one hour before and after eating to mitigate bloat risk.",
      "Maintain a lean, muscular body condition throughout life to minimize mechanical wear on joints and ligaments.",
      "Inspect the erect ears weekly for dust, wax, or foreign matter, wiping gently with an approved cleanser.",
      "Protect against heat stress in warm climates by exercising only during cool morning hours and providing indoor air conditioning.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation through an accredited national screening program prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist",
      "DNA marker test for Alaskan Malamute Polyneuropathy (AMPN / NDRG1 gene)",
      "DNA marker test for Cone Degeneration (CD / CNGB3 gene)",
      "Clinical evaluation for Chondrodysplasia (dwarfism)"
    ],

    dentalCare:
      "Brush teeth several times weekly using dog-specific enzymatic toothpaste. The breed has powerful jaws with a complete 42-tooth scissor bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the erect prick ears weekly for wax buildup, moisture, or dirt. Clean gently using a veterinarian-recommended ear solution, drying the leather thoroughly.",

    skinCare:
      "Part the dense coat weekly during brushing to inspect the skin for external parasites, hot spots, or crusting. If crusting occurs around the muzzle or eyes, consult a veterinarian for zinc-responsive dermatosis evaluation."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Active outdoor households, winter sports enthusiasts, and hikers who enjoy year-round cold-weather activities",
      "Experienced dog owners familiar with independent, strong-willed Arctic spitz breeds and positive leadership",
      "Homes with a large, securely fenced yard of at least six feet in height with buried perimeter dig guards",
      "Sportsmen interested in recreational sledding, urban mushing, weight pulling, or skijoring",
      "Families seeking a gentle, loyal, and friendly giant companion with dignified household manners"
    ],

    notIdealFor: [
      "First-time dog owners or passive handlers unprepared for substantial physical strength and independent decision-making",
      "Apartment or condominium dwellers without extensive outdoor space and heavy exercise outlets",
      "Households located in hot, humid climates without continuous indoor air conditioning",
      "Owners who leave a dog home alone in isolation for long workdays without company",
      "People seeking an aggressive guard dog that barks at strangers"
    ]
  },

  funFacts: [
    "The Alaskan Malamute is named after the Mahlemuts, an indigenous Inuit tribe of northwestern Alaska that developed these massive dogs to haul heavy freight across sea ice and help locate seal breathing holes.",
    "Unlike the Siberian Husky, which was engineered as a lighter, high-speed sled racing dog, the Alaskan Malamute is built like a freight train, designed to pull heavy loads over vast distances at a steady, tireless pace.",
    "During the Klondike Gold Rush of 1896, demand for heavy freighting dogs was so intense that prospectors paid as much as $500 for a single authentic Malamute—an extraordinary fortune at the time.",
    "Alaskan Malamutes played a crucial role in polar exploration history, serving as the primary freight haulers for Admiral Richard Byrd's historic Antarctic expeditions in the 1920s and 1930s.",
    "Malamutes rarely bark; instead, they communicate through a distinctive, musical vocalization known as the 'woo-woo' talk, chattering enthusiastically with family members to express excitement or greet arrivals.",
    "The breed's snowshoe-like feet feature thick, tough pads and specialized fur webbing between the toes that prevents snow from balling up and provides superior traction on slick ice."
  ],

  faq: [
    {
      question: "What is an Alaskan Malamute?",
      answer:
        "The Alaskan Malamute is a large, powerful Arctic sledge dog native to northwestern Alaska, known for its heavy freight-hauling strength, thick double coat, wolf-like face markings, plumed tail, and affectionate, pack-oriented personality."
    },
    {
      question: "What is the difference between an Alaskan Malamute and a Siberian Husky?",
      answer:
        "The Alaskan Malamute is significantly larger and heavier (standing 23 to 25 inches and weighing 75 to 85 pounds) and built for heavy freight pulling with brown eyes, whereas the Siberian Husky is smaller, lighter, and leaner (standing 20 to 23.5 inches and weighing 35 to 60 pounds), built for high-speed racing, and often has blue or bi-colored eyes."
    },
    {
      question: "Can an Alaskan Malamute have blue eyes?",
      answer:
        "No. Blue eyes are a severe disqualification in the Alaskan Malamute; genuine purebred Malamutes have dark brown, almond-shaped eyes."
    },
    {
      question: "How tall and heavy is an Alaskan Malamute?",
      answer:
        "Desirable freighting size is 25 inches at the shoulder and 85 pounds for adult males, and 23 inches at the shoulder and 75 pounds for adult females, with typical working ranges of 24 to 26 inches (80 to 95 pounds) for males and 22 to 24 inches (70 to 85 pounds) for females."
    },
    {
      question: "How long does an Alaskan Malamute live?",
      answer:
        "With proper nutrition, regular exercise, joint support, and preventive veterinary care, the breed typically enjoys a healthy lifespan of 10 to 14 years."
    },
    {
      question: "Do Alaskan Malamutes shed a lot, and how are they groomed?",
      answer:
        "Yes, they shed heavily twice a year during seasonal coat blows and shed moderately year-round. They require thorough brushing two to three times a week down to the skin with an undercoat rake, increasing to daily brushing during shedding seasons; their double coat should never be shaved."
    },
    {
      question: "Can an Alaskan Malamute live in an apartment?",
      answer:
        "No. Due to their large size, heavy exercise requirements, and instinct to dig or howl when under-stimulated, they are not suited to apartment living and thrive best in a home with a large, securely fenced yard."
    },
    {
      question: "Are Alaskan Malamutes good family pets and good with children?",
      answer:
        "Yes, with active families. Within their household, they are famously friendly, patient, and gentle with familiar children; however, because of their large size and strength, interactions with toddlers should be supervised."
    },
    {
      question: "How much exercise does an Alaskan Malamute need each day?",
      answer:
        "The breed requires 90 to 120 minutes of daily physical activity, including brisk hikes, pack walking, carting, sledding, or structured weight pulling, particularly during cool or cold weather."
    },
    {
      question: "What health screenings are recommended for breeding dogs?",
      answer:
        "Recommended pre-breeding screenings include radiographic evaluations for hip and elbow dysplasia, annual veterinary ophthalmologist eye exams, and DNA tests for Alaskan Malamute Polyneuropathy (AMPN) and Cone Degeneration (day blindness)."
    }
  ],

  references: [
    "fci-alaskan-malamute-official-standard",
    "fci-alaskan-malamute-nomenclature",
    "akc-alaskan-malamute-breed-standard",
    "akc-alaskan-malamute-breed-profile",
    "ukc-alaskan-malamute-breed-standard",
    "amca-alaskan-malamute-health-statement",
    "ofa-alaskan-malamute-chic-requirements",
    "alaskan-malamute-polyneuropathy-ndrg1-study-2013",
    "alaskan-malamute-cone-degeneration-cngb3-study-2006",
    "wikimedia-alaskan-malamute-lilly-m",
    "wikimedia-alaskan-malamute-600-tomasz-sienicki"
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
          id: "fci-alaskan-malamute-official-standard",
          role: "verified",
          locator: "Standard heading: ALASKAN MALAMUTE"
        },
        {
          id: "fci-alaskan-malamute-nomenclature",
          role: "verified",
          locator: "Official nomenclature: ALASKAN MALAMUTE (243)"
        },
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "History: Malamute, Mal, Mahlemut, Alaskan Sled Dog"
        }
      ],
      verifiedOn: "2026-11-11",
      note: "Verified across FCI Standard No. 243, FCI Nomenclature, and AKC."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-alaskan-malamute-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 5 Spitz and primitive types, Section 1 Nordic Sledge Dogs, without working trial"
        },
        {
          id: "fci-alaskan-malamute-nomenclature",
          role: "verified",
          locator: "Group 5, Section 1 Nordic Sledge Dogs, without working trial"
        },
        {
          id: "akc-alaskan-malamute-breed-standard",
          role: "verified",
          locator: "Working Group"
        },
        {
          id: "ukc-alaskan-malamute-breed-standard",
          role: "verified",
          locator: "Northern Breed Group"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-alaskan-malamute-official-standard",
          role: "verified",
          locator: "ORIGIN: U.S.A.; BRIEF HISTORICAL SUMMARY"
        },
        {
          id: "fci-alaskan-malamute-nomenclature",
          role: "verified",
          locator: "Country of origin: United States"
        },
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "History: Developed by Mahlemut Inuit tribe along Kotzebue Sound in northwestern Alaska"
        }
      ],
      verifiedOn: "2026-11-11",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-alaskan-malamute-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, IMPORTANT PROPORTIONS, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "About the Breed, History, Byrd Antarctic expeditions, and Roles"
        },
        {
          id: "amca-alaskan-malamute-health-statement",
          role: "verified",
          locator: "Breed overview and functional heritage"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "Synthesized in original prose from FCI Standard No. 243, AKC, and AMCA official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-alaskan-malamute-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS, HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE AND WEIGHT"
        },
        {
          id: "akc-alaskan-malamute-breed-standard",
          role: "verified",
          locator: "General Appearance, Size, Proportion, Substance, Head, Coat, Color"
        },
        {
          id: "ukc-alaskan-malamute-breed-standard",
          role: "verified",
          locator: "General Appearance, Head, Body, Coat, Color, Height and Weight"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "Conformation, heavy bone, stand-off double coat, plumed tail, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-standard",
          role: "verified",
          locator: "Size: The desirable freighting sizes are: Dogs 25 inches at the shoulders; Bitches 23 inches at the shoulders (approx. 24-26 in males, 22-24 in females)"
        },
        {
          id: "fci-alaskan-malamute-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Desirable freighting sizes: Dogs: 25 inches (63.5 cm) at the shoulders; Bitches: 23 inches (58.5 cm) at the shoulders"
        },
        {
          id: "ukc-alaskan-malamute-breed-standard",
          role: "verified",
          locator: "Height: Desirable freighting size: Males, 25 inches at the withers; Females, 23 inches at the withers"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "Preserved in published unit of inches (desirable freighting size 25 in for males and 23 in for females, typical working range 24–26 in for males and 22–24 in for females) exactly as specified first in the official standards."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-standard",
          role: "verified",
          locator: "Weight: Dogs 85 pounds; Bitches 75 pounds (working range 80-95 lbs males, 70-85 lbs females)"
        },
        {
          id: "fci-alaskan-malamute-official-standard",
          role: "verified",
          locator: "Weight: Dogs: 85 pounds (38 kg); Bitches: 75 pounds (34 kg)"
        },
        {
          id: "ukc-alaskan-malamute-breed-standard",
          role: "verified",
          locator: "Weight: Males, weighing approximately 85 pounds; Females, weighing approximately 75 pounds"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "Preserved in published unit of pounds (desirable freighting size 85 lb for males and 75 lb for females, typical working range 80–95 lb for males and 70–85 lb for females) exactly as specified first in the official standards."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 10-14 years"
        },
        {
          id: "amca-alaskan-malamute-health-statement",
          role: "verified",
          locator: "Longevity and health actuarial profile (10-14 years)"
        }
      ],
      verifiedOn: "2026-11-11",
      note: "Supported by kennel club and parent breed club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (4/5)"
        },
        {
          id: "fci-alaskan-malamute-official-standard",
          role: "verified",
          locator: "COAT: Thick coarse guard coat with dense woolly undercoat"
        }
      ],
      verifiedOn: "2026-11-11",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-alaskan-malamute-official-standard",
          role: "verified",
          locator: "Lips: Tight fitting lips; dark pigmentation"
        },
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (1/5 to 2/5)"
        }
      ],
      verifiedOn: "2026-11-11",
      note: "Tight-fitting lips result in low drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-alaskan-malamute-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Affectionate, friendly, not a one-man dog, loyal companion, dignified"
        },
        {
          id: "akc-alaskan-malamute-breed-standard",
          role: "verified",
          locator: "Temperament: Affectionate, friendly, loyal, playful, dignified in maturity"
        },
        {
          id: "ukc-alaskan-malamute-breed-standard",
          role: "verified",
          locator: "Temperament: Friendly, affectionate, loyal, playful when invited, dignified"
        }
      ],
      verifiedOn: "2026-11-11",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        },
        {
          id: "amca-alaskan-malamute-health-statement",
          role: "cited",
          locator: "Temperament and behavior guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented Arctic sledge dog temperament, high family affection, and friendly stranger response."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        },
        {
          id: "amca-alaskan-malamute-health-statement",
          role: "cited",
          locator: "Care, double-coat management, and exercise protocols"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active sledge dog management with heavy double-coat grooming and heat-safety protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "Energy Level (4/5); Exercise Needs (4/5 to 5/5)"
        },
        {
          id: "fci-alaskan-malamute-official-standard",
          role: "verified",
          locator: "UTILIZATION: Sledge dog for heavy freight"
        }
      ],
      verifiedOn: "2026-11-11",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "cited",
          locator: "Exercise recommendations for working sled dogs"
        },
        {
          id: "amca-alaskan-malamute-health-statement",
          role: "cited",
          locator: "Working activities, carting, and weight pulling"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 90 to 120 minutes of daily activity reflects the exercise demands of an athletic, heavy freight Arctic working dog."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "cited",
          locator: "Large size, exercise needs, and need for open movement"
        },
        {
          id: "amca-alaskan-malamute-health-statement",
          role: "cited",
          locator: "Housing requirements and secure fencing"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial evaluation that large size, high exercise needs, and vocal tendencies make apartment living generally unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "Exercise and secure fenced-yard recommendations (minimum six-foot fence with anti-dig measures)"
        }
      ],
      verifiedOn: "2026-11-11",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-alaskan-malamute-official-standard",
          role: "verified",
          locator: "COAT: Dense insulating double coat adapted to Arctic climate"
        },
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "Weather adaptation: excels in cold weather; highly sensitive to heat stress in hot climates"
        }
      ],
      verifiedOn: "2026-11-11",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "cited",
          locator: "Tolerates Being Alone: Low to moderate; pack-oriented companion"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food, portion control, treat budgeting"
        },
        {
          id: "amca-alaskan-malamute-health-statement",
          role: "cited",
          locator: "Dietary management and zinc nutrition in Arctic breeds"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for active large working breeds with Arctic metabolic efficiency."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance and divided meals to mitigate bloat"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "alaskan-malamute-polyneuropathy-ndrg1-study-2013",
          role: "verified",
          locator: "NDRG1 mutation causing inherited polyneuropathy (AMPN) in Alaskan Malamutes"
        },
        {
          id: "alaskan-malamute-cone-degeneration-cngb3-study-2006",
          role: "verified",
          locator: "CNGB3 mutation causing cone degeneration (day blindness / hemeralopia) in Alaskan Malamutes"
        },
        {
          id: "ofa-alaskan-malamute-chic-requirements",
          role: "verified",
          locator: "CHIC Program requirements: Hip Dysplasia, Eye Examination, AMPN DNA test, Cone Degeneration DNA test"
        },
        {
          id: "amca-alaskan-malamute-health-statement",
          role: "verified",
          locator: "Health priorities: Hip dysplasia, elbow dysplasia, AMPN, CD, cataracts, and bloat"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "Synthesizes peer-reviewed genetics research with national health registry screening protocols."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "alaskan-malamute-polyneuropathy-ndrg1-study-2013",
          role: "verified",
          locator: "Polyneuropathy (AMPN) clinical description and genetics"
        },
        {
          id: "alaskan-malamute-cone-degeneration-cngb3-study-2006",
          role: "verified",
          locator: "Cone degeneration (CD / day blindness) pathology and genetics"
        },
        {
          id: "ofa-alaskan-malamute-chic-requirements",
          role: "verified",
          locator: "Hip dysplasia, elbow dysplasia, eye disorders"
        },
        {
          id: "amca-alaskan-malamute-health-statement",
          role: "verified",
          locator: "Chondrodysplasia, bloat (GDV), and zinc-responsive dermatosis"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "Details documented genetic and conformational conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "amca-alaskan-malamute-health-statement",
          role: "cited",
          locator: "Preventive health, DNA testing verification, and bloat precautions"
        },
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "cited",
          locator: "Routine care, wellness checks, and heat stress prevention"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to heavy Arctic sledge dogs."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-alaskan-malamute-chic-requirements",
          role: "verified",
          locator: "CHIC Program required screenings: Radiographic Hip Dysplasia evaluation, CAER Eye examination, AMPN DNA test, Cone Degeneration (CD) DNA test"
        },
        {
          id: "amca-alaskan-malamute-health-statement",
          role: "verified",
          locator: "Recommended pre-breeding panel: Hips, eyes, AMPN, CD, elbows, and thyroid"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "Screenings summarize published parent club and health registry protocols."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-alaskan-malamute-official-standard",
          role: "cited",
          locator: "Jaws/teeth: large, strong with complete scissor bite"
        },
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "cited",
          locator: "Routine dental care"
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-alaskan-malamute-official-standard",
          role: "cited",
          locator: "Ears: medium size, triangular, erect"
        },
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "cited",
          locator: "Ear hygiene and moisture inspection"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for erect prick ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-alaskan-malamute-official-standard",
          role: "cited",
          locator: "Dense double coat care and skin aeration"
        },
        {
          id: "amca-alaskan-malamute-health-statement",
          role: "cited",
          locator: "Skin evaluation and zinc-responsive dermatosis monitoring"
        }
      ],
      verifiedOn: null,
      note: "General skin and coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        },
        {
          id: "ukc-alaskan-malamute-breed-standard",
          role: "cited",
          locator: "Characteristics and working lifestyle suitability"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, exercise demands, and household adaptability."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "Mahlemut Inuit tribe origin, Klondike Gold Rush values ($500 per dog), Admiral Byrd Antarctic expeditions, woo-woo vocalizations, snowshoe feet"
        },
        {
          id: "fci-alaskan-malamute-official-standard",
          role: "verified",
          locator: "Brief historical summary: Ancient Arctic freight sledge dog"
        }
      ],
      verifiedOn: "2026-11-11",
      note: "Verified historical folklore and working heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-alaskan-malamute-official-standard",
          role: "verified",
          locator: "Origin, desirable freighting sizes (25 in / 85 lb and 23 in / 75 lb), coat, and brown eye rule"
        },
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "Comparison with Siberian Husky, exercise needs, family suitability, and grooming"
        },
        {
          id: "ofa-alaskan-malamute-chic-requirements",
          role: "verified",
          locator: "Recommended health screening panel (AMPN, CD, hips, eyes)"
        }
      ],
      verifiedOn: "2026-11-11",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and genetics research without naming registries in prose."
    }
  },

  updatedOn: "2026-11-11"
};
