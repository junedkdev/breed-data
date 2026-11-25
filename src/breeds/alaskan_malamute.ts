import type { Breed } from "../schema/breed.types";

export const alaskan_malamute: Breed = {
  slug: "alaskan-malamute",
  name: "Alaskan Malamute",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Malamute",
    "Mal",
    "Mally",
    "Mahlemut",
    "Alaskan Sled Dog"
  ],

  group: "Nordic Sledge Dog (Working Spitz)",

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
        "An adult Alaskan Malamute standing outdoors on grass.",
      creator: "SCMW",
      uploader: "SCMW",
      capturedOn: "2008-01-03",
      uploadedOn: "2008-01-03",
      width: 640,
      height: 519,
      licenseId: "cc-by-3.0",
      attribution:
        "Photo by SCMW, Wikimedia Commons, CC BY 3.0. Source: https://commons.wikimedia.org/wiki/File:Alaskan_Malamute.jpg. License: https://creativecommons.org/licenses/by/3.0/. Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-11-25"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Alaskan_Malamute_600.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Alaskan_Malamute_600.jpg",
      title: "Alaskan Malamute 600.jpg",
      description:
        "An adult Alaskan Malamute photographed at the City of Birmingham Championship Dog Show.",
      creator: "sannse",
      uploader: "Muu-karhu",
      capturedOn: "2003-08-30",
      uploadedOn: "2006-05-07",
      width: 600,
      height: 500,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by sannse, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Alaskan_Malamute_600.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-25"
    }
  ],

  overview: {
    summary:
      "A powerful, heavy-boned Arctic freighting dog from northwestern Alaska, known for its dense waterproof double coat, plumed tail carried over the back, almond brown eyes, and loyal, playful, dignified pack nature.",

    description:
      "The Alaskan Malamute is one of the oldest Arctic sled dogs, shaped by heavy-duty hauling rather than short-distance racing. Its substantial bone, deep chest, broad shoulders, and steady, balanced stride deliver tremendous pulling power across snow and ice. A coarse, thick outer coat stands off from a dense, woolly undercoat, coming in shades from light grey and silver through black, seal, sable, and red—always paired with white underparts and distinctive facial cap or mask markings—or solid white. The broad head carries medium triangular erect ears, obliquely set almond brown eyes (blue eyes are never accepted), and a heavily furred tail that waves gracefully over the back. Friendly, affectionate, and dignified indoors, it thrives in active homes that provide clear leadership and daily purposeful exercise.",

    history:
      "The breed takes its name from the Mahlemut (Mahlemiut), an indigenous Inuit people who settled along Kotzebue Sound in northwestern Alaska. For centuries, their powerful dogs hauled heavy supplies across frozen tundra and sea ice, assisted with seal and caribou hunting, and helped guard camps against Arctic predators. During the late-nineteenth-century gold rush, heavy demand led to widespread crossbreeding until twentieth-century breeders gathered native stock in the 1920s and 1930s to preserve the pure Arctic type. In 1933, Malamutes were chosen to support Admiral Richard Byrd's Antarctic expedition; formal recognition followed in the United States in 1935 and internationally in 1963. Today the breed remains a cherished companion and recreational pulling athlete.",

    originalPurpose:
      "Hauling heavy freight sleds across Arctic snow and ice, assisting in seal and caribou hunting, and serving as a hardy camp partner for the Mahlemut people.",

    currentRoles: [
      "Recreational and competitive sledding, weight-pulling, and skijoring athlete",
      "Backpacking, hiking, and carting companion",
      "Affectionate, loyal family dog for active households",
      "Participant in agility, obedience, and working-dog events"
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
      "Thick, coarse, stand-off waterproof double coat (never long and soft) backed by a dense, oily, woolly undercoat 1 to 2 inches deep for sub-zero insulation.",

    coatLength: "Medium",

    coatColors: [
      "Light grey, silver, and agouti through black with white underparts",
      "Seal and white",
      "Sable and shadings of sable to red with white underparts",
      "Blue and white",
      "Solid white (the only acceptable solid colour)",
      "Characteristic white lower legs, feet, and facial cap, bar, or mask markings"
    ],

    sheddingLevel:
      "High; sheds steadily through the year and blows its dense undercoat heavily twice a year during seasonal changes",

    droolingLevel:
      "Low; tight-fitting, darkly pigmented lips keep slobbering minimal",

    distinctiveFeatures: [
      "Substantial, heavy-boned Arctic spitz build designed for heavy freight hauling rather than high-speed racing",
      "Desirable freighting size of 25 inches at the shoulder and 85 pounds for males, and 23 inches and 75 pounds for females (typical working ranges 24 to 26 inches / 80 to 95 pounds for males and 22 to 24 inches / 70 to 85 pounds for females)",
      "Dense, coarse waterproof double coat with a thick woolly undercoat",
      "Broad, deep head with strong jaws and a complete scissor bite",
      "Almond-shaped brown eyes set obliquely with an affectionate, alert expression; blue eyes are a disqualification",
      "Medium-sized, triangular prick ears with slightly rounded tips set wide on the skull",
      "Deep chest, powerful shoulders, and level back built for sustained pulling",
      "Profusely furred plumed tail carried waving gracefully over the back",
      "Large, compact snowshoe-like feet with thick pads and protective hair between the toes"
    ]
  },

  temperament: {
    traits: [
      "Loyal, affectionate, and deeply pack-oriented with its family",
      "Playful and exuberant when invited to work or play, yet dignified in maturity",
      "Friendly and outgoing with most strangers, making a poor guard dog",
      "Highly intelligent, independent, and strong-willed to the point of stubbornness",
      "Generally gentle and good-natured with familiar children when properly trained and supervised",
      "Can be assertive toward unfamiliar dogs, particularly of the same sex, and has a strong prey drive toward small animals",
      "Rarely barks, preferring expressive 'woo-woo' talking and howling—especially when bored or hearing sirens"
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
        "High; a strong, endurance-bred worker that requires substantial daily exercise and purposeful pulling, hiking, or play outlets",

      minutesPerDay: {
        min: 90,
        max: 120
      },

      activities: [
        "Daily brisk hikes, long walks, and trail outings in cool weather",
        "Supervised romping inside a tall, securely fenced yard",
        "Backpacking, weight-pulling, carting, recreational sledding, and skijoring",
        "Swimming, agility, obedience trials, and interactive puzzle toys"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Brush daily with a pin brush and metal comb to prevent mats and catch hot spots early, adding an undercoat rake during twice-yearly seasonal coat blows.",

      bathing:
        "Bathe pet dogs roughly every six to eight weeks (or when soiled) with a mild canine shampoo and light conditioner if dry, drying the dense undercoat thoroughly to the skin.",

      notes: [
        "Never shave the double coat; it protects against both freezing cold and summer sun.",
        "Check the erect ears regularly for wax or foreign matter and wipe gently with a veterinary cleanser.",
        "Trim strong nails regularly to keep the snowshoe feet compact and comfortable.",
        "Brush teeth regularly with dog-safe enzymatic toothpaste.",
        "Inspect between the toes for ice balls, burrs, or small cuts after outdoor adventures."
      ]
    },

    training: {
      difficulty:
        "Moderate to challenging; very smart yet independent and willful, requiring early, firm, fair, reward-based leadership so the dog respects household rules",

      tips: [
        "Start puppy socialization and obedience early before heavy adult pulling strength develops.",
        "Use positive reinforcement, high-value treats, and varied, purposeful sessions rather than repetitive drills.",
        "Establish calm, consistent pack leadership; harsh force backfires, while permissiveness invites pushiness.",
        "Extend yard fencing into the ground because digging is an ingrained habit that is difficult to train out—or provide a designated digging pit.",
        "Keep on-leash in unfenced areas due to strong prey drive and roaming instincts."
      ],

      socialization:
        "Consistent, positive early exposure to diverse people, calm vaccinated dogs, household routines, and outdoor sights helps prevent pushiness around children and tempers same-sex dog assertiveness."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cold, snowy winter climates, where the waterproof double coat thrives",
        "Temperate climates",
        "Warm climates only with reliable indoor air conditioning, deep shade, abundant fresh water, and exercise restricted to cool morning or evening hours"
      ],

      aloneTimeTolerance:
        "Low to moderate; deeply pack-oriented and prone to howling or destructive digging when bored or left isolated for long stretches."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced commercial dog food—or a veterinarian-approved home-prepared diet—formulated for large active working breeds and matched to life stage.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until about six months of age, then shifting to two measured meals per day.",
      adult:
        "Two measured meals per day to support comfortable digestion and lower bloat risk.",
      senior:
        "Two portion-controlled meals daily adjusted for lower calorie burn and joint care."
    },

    guidelines:
      "Measure every meal and watch total calories closely—despite their heavy-duty working frame, some Malamutes gain weight easily if overfed or given too many training treats. Divide daily rations into two meals, allow quiet rest before and after eating as a precaution against bloat, and keep fresh water available at all times.",

    considerations: [
      "Keep weight lean to protect hip and elbow joints from unnecessary wear.",
      "Count training treats within the daily calorie allowance.",
      "Schedule calm rest before and after meals to help mitigate bloat risk.",
      "Consult a veterinarian about zinc nutrition if crusting skin lesions appear, as some Arctic breeds are prone to zinc-responsive dermatosis."
    ],

    note:
      "Daily calorie needs rise sharply during active winter sledding or backpacking and drop during warmer, quieter periods. Work with a veterinarian to set exact portions."
  },

  health: {
    overview:
      "The Alaskan Malamute is generally a robust, hardy Arctic worker with a typical lifespan of 10 to 14 years. Responsible breeding centers on radiographic hip and elbow screening, periodic specialist eye exams, and DNA testing for scientifically established breed-specific disorders—especially Alaskan Malamute Polyneuropathy (AMPN, caused by a Gly98Val mutation in the NDRG1 gene) and Cone Degeneration (day blindness, caused by a complete genomic deletion of the CNGB3 gene)—alongside monitoring for chondrodysplasia, hypothyroidism, clotting disorders, bloat, and zinc-responsive dermatosis.",

    commonConditions: [
      "Alaskan Malamute Polyneuropathy (AMPN) — a scientifically established autosomal recessive neuromuscular disorder caused by a Gly98Val missense mutation in the NDRG1 gene, leading to progressive hind-limb weakness, exercise intolerance, laryngeal paralysis, and muscle atrophy; preventable via DNA testing",
      "Cone Degeneration (CD / Day Blindness / Hemeralopia) — an established autosomal recessive retinal disorder caused by a complete genomic deletion removing all exons of the CNGB3 gene, resulting in loss of cone photoreceptor function and vision impairment in bright daylight; screenable via DNA testing",
      "Hip dysplasia — developmental malformation of the hip joint that can lead to osteoarthritis, screened via pre-breeding radiographic evaluations",
      "Elbow dysplasia — developmental elbow joint abnormality screened radiographically in breeding stock",
      "Chondrodysplasia (dwarfism) — an inherited skeletal disorder producing shortened, bowed forelimbs",
      "Hypothyroidism and bleeding disorders (thrombopathia, von Willebrand's disease) — endocrine and clotting conditions monitored by responsible breeders",
      "Hereditary cataracts and eye conditions — monitored through periodic examinations by a board-certified veterinary ophthalmologist",
      "Gastric dilatation-volvulus (GDV / bloat) and zinc-responsive dermatosis — deep-chested emergency stomach-twisting risk and Arctic-breed zinc absorption skin crusting"
    ],

    preventiveCare: [
      "Verify that breeding parents have completed radiographic hip evaluations, specialist eye exams, and AMPN DNA testing (plus Cone Degeneration and elbow screenings).",
      "Feed two measured meals daily and rest quietly around mealtimes to reduce bloat risk.",
      "Keep body weight lean to protect joints and reduce heat stress during warm weather.",
      "Brush daily to catch mats or hot spots early, check ears regularly, and brush teeth routinely.",
      "Schedule annual veterinary wellness exams, core vaccinations, and year-round parasite prevention."
    ],

    recommendedScreenings: [
      "Radiographic hip evaluation prior to breeding",
      "Periodic eye examination by a board-certified veterinary ophthalmologist",
      "DNA test for Alaskan Malamute Polyneuropathy (AMPN / NDRG1 Gly98Val mutation)",
      "DNA test for Cone Degeneration (CD / CNGB3 genomic deletion) and radiographic elbow evaluation"
    ],

    dentalCare:
      "Brush teeth regularly with dog-safe enzymatic toothpaste and schedule routine veterinary oral checks to keep gums and teeth healthy.",

    earCare:
      "Inspect the erect triangular ears regularly for wax buildup or foreign matter, wiping gently with a veterinarian-approved cleanser as needed.",

    skinCare:
      "Brush down to the skin daily to spot mats, fungal irritation, or hot spots; consult a veterinarian if scaly crusting develops around the eyes, muzzle, or paw pads."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Active outdoor households, hikers, and winter-sports fans ready for daily exercise and heavy coat upkeep",
      "Experienced, consistent handlers comfortable leading a strong-willed, independent Arctic pack dog",
      "Homes with a tall, securely fenced yard featuring underground dig protection",
      "Families with children who are committed to early obedience training and supervised interaction"
    ],

    notIdealFor: [
      "First-time or passive owners unprepared for immense pulling strength, daily brushing, and stubborn independence",
      "Apartments or small urban homes without secure outdoor space",
      "Hot, humid climates lacking reliable indoor air conditioning",
      "Owners wanting a silent, non-digging yard dog or an aggressive guard dog"
    ]
  },

  funFacts: [
    "The breed is named after the Mahlemut (Mahlemiut), an Inuit people of Kotzebue Sound in northwestern Alaska who relied on these powerful dogs for heavy Arctic freighting.",
    "In 1933, Alaskan Malamutes were chosen to assist Admiral Richard Byrd on his Antarctic expedition.",
    "The Alaskan Malamute was one of four purebred dogs featured on U.S. Postal Service centennial stamps in 1984 and has appeared on postage stamps in at least 14 countries.",
    "Rather than barking constantly, Malamutes are famous for expressive 'woo-woo' talking and howling—often triggered by sirens or boredom.",
    "Digging is so deeply ingrained in most Malamutes that owners are advised to extend yard fencing underground or set aside a dedicated digging area."
  ],

  faq: [
    {
      question: "What is an Alaskan Malamute?",
      answer:
        "The Alaskan Malamute is a large, heavy-boned Arctic sled dog from northwestern Alaska, known for its freight-hauling strength, waterproof double coat, plumed tail, almond brown eyes, and loyal, playful, dignified temperament."
    },
    {
      question: "How does an Alaskan Malamute differ from a Siberian Husky?",
      answer:
        "Malamutes are substantially larger and heavier (desirable freighting size 23 to 25 inches and 75 to 85 pounds), built for pulling heavy loads rather than racing speed, and always have brown eyes—never the blue eyes common in Siberian Huskies."
    },
    {
      question: "Can a purebred Alaskan Malamute have blue eyes?",
      answer:
        "No. Genuine Alaskan Malamutes have brown almond-shaped eyes (dark brown preferred), and blue eyes are a disqualification."
    },
    {
      question: "How tall and heavy is an Alaskan Malamute?",
      answer:
        "Desirable freighting size is 25 inches and 85 pounds for males and 23 inches and 75 pounds for females, with typical working ranges of 24 to 26 inches (80 to 95 pounds) for males and 22 to 24 inches (70 to 85 pounds) for females."
    },
    {
      question: "How long does an Alaskan Malamute live?",
      answer:
        "With balanced nutrition, regular exercise, and preventive veterinary care, Alaskan Malamutes typically live 10 to 14 years."
    },
    {
      question: "How much grooming does an Alaskan Malamute need?",
      answer:
        "Expect daily brushing with a pin brush and metal comb—plus an undercoat rake during twice-yearly coat blows—along with baths every six to eight weeks, regular nail trims, ear checks, and tooth brushing. Never shave the double coat."
    },
    {
      question: "Can an Alaskan Malamute live in an apartment?",
      answer:
        "No. Their large size, daily working-dog exercise needs, howling tendencies, and love of digging make a house with a securely fenced, dig-proofed yard far more appropriate."
    },
    {
      question: "Are Alaskan Malamutes good family pets and good with children?",
      answer:
        "Yes, when raised with early socialization and firm, fair obedience training. Well-trained Malamutes are affectionate, playful, and gentle with familiar children, though their size calls for supervision around toddlers."
    },
    {
      question: "How much exercise does an Alaskan Malamute need each day?",
      answer:
        "Plan on roughly 90 to 120 minutes of daily activity—such as brisk hikes, secure yard play, backpacking, skijoring, carting, or weight pulling—timed for cool hours in warm weather."
    },
    {
      question: "Which health screenings are recommended for breeding Alaskan Malamutes?",
      answer:
        "Core pre-breeding screenings include radiographic hip evaluation, specialist ophthalmologist eye examination, and DNA testing for Alaskan Malamute Polyneuropathy (AMPN / NDRG1), alongside Cone Degeneration (CNGB3) DNA testing and elbow evaluation."
    }
  ],

  references: [
    "natureserve-canis-lupus-familiaris",
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
    "wikimedia-alaskan-malamute-600-tomasz-sienicki",
    "the-dog-api"
  ],

  evidence: {
    scientificName: {
      reliability: "reliable_source",
      sources: [
        {
          id: "natureserve-canis-lupus-familiaris",
          role: "verified",
          locator: "Scientific Name: Canis lupus familiaris (Domestic Dog)"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Verified standard domestic-dog trinomial taxonomy across the catalog."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-alaskan-malamute-nomenclature",
          role: "verified",
          locator: "Official nomenclature: ALASKAN MALAMUTE (243)"
        },
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "About the Breed & History: Mal, Mahlemut / Mahlemiut"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "alternateNames: Mally"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Added 'Mally' from The Dog API alongside verified names from FCI and AKC."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-alaskan-malamute-nomenclature",
          role: "verified",
          locator: "Group 5 Spitz and primitive types; Section 1 Nordic Sledge Dogs; Not subject to a working trial"
        },
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "Working Group (recognized 1935)"
        },
        {
          id: "ukc-alaskan-malamute-breed-standard",
          role: "cited",
          locator: "Northern Breed Group"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "group: Working"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "User-facing group omits kennel-club names and numeric section labels per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-alaskan-malamute-nomenclature",
          role: "verified",
          locator: "Country of origin of the breed: UNITED STATES OF AMERICA; definitive acceptance 1963-05-13"
        },
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "History & Did You Know: Mahlemut Inuit tribe along Kotzebue Sound, northwestern Alaska"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "origin.country: Alaska, United States"
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-alaskan-malamute-official-standard",
          role: "verified",
          locator: "FCI Standard No. 243 (valid 2023-03-09, English PDF 2023-03-10): heavy freighting function, strong propelling legs, functional summary"
        },
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "About the Breed, History, 1933 Byrd expedition, 1935 AKC recognition, working sports"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "description and history"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Rewritten in completely original prose grounded in FCI Standard No. 243 and AKC."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-alaskan-malamute-official-standard",
          role: "verified",
          locator: "FCI Standard No. 243: heavy freighting build, sound legs/feet, double coat, plumed tail, brown eyes"
        },
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "Breed Colors & Markings (Gray & White, Black & White, Red & White, Seal & White, Silver & White, White, Sable & White, Blue & White, Agouti & White; Black/Gray Mask)"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "coatColors lists 17 generic canine colours including Brindle, Cream, Liver, Merle, and Tricolour; non-standard colours excluded"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Excluded non-standard colours from The Dog API while retaining verified standard colours from FCI 243 and AKC."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-alaskan-malamute-official-standard",
          role: "verified",
          locator: "Desirable freighting sizes: Males 25 inches (63.5 cm), Females 23 inches (58.5 cm) — inches stated first"
        },
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "Height: 25 inches (male), 23 inches (female)"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "height: male 61–66 cm, female 56–61 cm (metric conversion of ~24–26 in / 22–24 in; official standards state inches first)"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Preserved in exact published inches per Rule 9 (desirable 25 in males / 23 in females; working range 24–26 in / 22–24 in) as stated first in FCI 243 and AKC."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-alaskan-malamute-official-standard",
          role: "verified",
          locator: "Desirable freighting weights: Males 85 pounds (38 kg), Females 75 pounds (34 kg) — pounds stated first"
        },
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "Weight: 85 pounds (male), 75 pounds (female)"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "weight: male 36–41 kg, female 32–36 kg (metric range; official standards state pounds first)"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Preserved in exact published pounds per Rule 9 (desirable 85 lb males / 75 lb females; working range 80–95 lb / 70–85 lb) as stated first in FCI 243 and AKC."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 10–14 years"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "lifespanYears: 10–14"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Consistent across AKC and The Dog API."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "Grooming: daily brushing with pin brush and metal comb; undercoat rake twice a year during shedding season"
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-alaskan-malamute-official-standard",
          role: "verified",
          locator: "Tight-fitting, darkly pigmented lips"
        },
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level"
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "About the Breed, Training, Did You Know: loyal, playful, affectionate, dignified, independent/stubborn, friendly with strangers, talks/howls, digs"
        },
        {
          id: "fci-alaskan-malamute-official-standard",
          role: "verified",
          locator: "Affectionate, friendly, loyal companion, dignified in maturity"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "temperament.traits: Affectionate, friendly, loyal, playful, intelligent, energetic, outgoing"
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "cited",
          locator: "Breed Traits, Training, and About the Breed"
        }
      ],
      verifiedOn: null,
      note: "Editorial 1–5 estimates synthesized from AKC and FCI profiles."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "cited",
          locator: "Grooming (daily brushing), Exercise, Training (underground fencing for digging), and Nutrition"
        }
      ],
      verifiedOn: null,
      note: "Updated grooming.level to High to reflect AKC's daily brushing recommendation."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "Exercise: strong athletic dog with tremendous endurance; hiking, running, swimming, weight-pulling, backpacking, sledding, skijoring"
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "cited",
          locator: "Daily working-dog exercise recommendations"
        }
      ],
      verifiedOn: null,
      note: "Editorial estimate of 90 to 120 minutes daily for an endurance Arctic sled dog."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "cited",
          locator: "Large size, well-fenced yard with underground dig barriers, howling tendencies"
        }
      ],
      verifiedOn: null,
      note: "Editorial evaluation that large size, digging/howling instincts, and exercise needs make apartments unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "Exercise & Training: well-fenced yard extending into the ground"
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "Grooming: thick, waterproof double coat adapted to harsh Arctic life"
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "cited",
          locator: "Did You Know & About the Breed: pack animals; lonely or bored Malamutes often howl"
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
          locator: "Nutrition: high-quality age-appropriate food, watch calorie intake and weight"
        }
      ],
      verifiedOn: null,
      note: "Standard nutritional guidance for large active Arctic working breeds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage meal schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "alaskan-malamute-polyneuropathy-ndrg1-study-2013",
          role: "verified",
          locator: "Bruun et al. (PLoS ONE 2013, PMID 23393557): Gly98Val mutation in exon 4 of NDRG1 causing AMPN across 102 genotyped Alaskan Malamutes"
        },
        {
          id: "alaskan-malamute-cone-degeneration-cngb3-study-2006",
          role: "verified",
          locator: "Sidjanin et al. (Hum Mol Genet 2002, PMID 12140185): complete genomic deletion removing all exons of CNGB3 causing cone degeneration (day blindness) in Alaskan Malamutes"
        },
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "Health: hip/elbow dysplasia, thrombopathia, chondrodysplasia, hypothyroidism, AMPN, von Willebrand's disease, day blindness; recommended tests Hip, Ophthalmologist, AMPN DNA"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Corrected both PubMed citations to verified PMIDs (23393557 for NDRG1 AMPN; 12140185 for CNGB3 complete genomic deletion, correcting the earlier draft's misattribution of the GSP missense mutation to Alaskan Malamutes)."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "alaskan-malamute-polyneuropathy-ndrg1-study-2013",
          role: "verified",
          locator: "NDRG1 Gly98Val mutation causing AMPN"
        },
        {
          id: "alaskan-malamute-cone-degeneration-cngb3-study-2006",
          role: "verified",
          locator: "Complete genomic deletion of CNGB3 causing day blindness (cone degeneration)"
        },
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "Hip/elbow dysplasia, chondrodysplasia, hypothyroidism, thrombopathia, von Willebrand's disease"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Distinguishes molecularly established autosomal recessive disorders from orthopedic, endocrine, and deep-chest risks."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "cited",
          locator: "Health & Grooming: pre-breeding screening, daily brushing, ear checks, tooth brushing"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care tailored to heavy Arctic sled dogs."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "Recommended Health Tests From the National Breed Club: Hip Evaluation, Ophthalmologist Evaluation, Alaskan Malamute Polyneuropathy (AMPN) DNA Test"
        },
        {
          id: "ofa-alaskan-malamute-chic-requirements",
          role: "verified",
          locator: "OFA CHIC portal for Alaskan Malamute (AM)"
        },
        {
          id: "amca-alaskan-malamute-health-statement",
          role: "cited",
          locator: "Additional parent-club screening for Cone Degeneration and elbows"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Aligned with published National Breed Club and OFA CHIC screening panels."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "cited",
          locator: "Health: regular tooth brushing"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "cited",
          locator: "Health: check ears regularly for foreign matter and wax buildup"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "cited",
          locator: "Grooming: daily brushing to check for mats (fungus) and hot spots"
        }
      ],
      verifiedOn: null,
      note: null
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "cited",
          locator: "About the Breed, Exercise, Training: needs pack leadership, dig-proof fencing, high exercise, daily brushing"
        }
      ],
      verifiedOn: null,
      note: "Editorial suitability ratings based on AKC temperament, grooming, and exercise profile."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "Did You Know: Mahlemut tribe, 1933 Byrd Antarctic expedition, 1984 USPS centennial stamp (14+ countries), woo-woo talking/howling, ingrained digging"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified historical and behavioural facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-alaskan-malamute-official-standard",
          role: "verified",
          locator: "Desirable freighting sizes (25 in / 85 lb males; 23 in / 75 lb females), brown eye rule"
        },
        {
          id: "akc-alaskan-malamute-breed-profile",
          role: "verified",
          locator: "Lifespan (10–14 years), daily brushing, exercise, family life, recommended health tests"
        },
        {
          id: "alaskan-malamute-polyneuropathy-ndrg1-study-2013",
          role: "verified",
          locator: "AMPN / NDRG1 DNA testing"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Original FAQ answers grounded in FCI 243, AKC, and peer-reviewed genetics studies without Rule 5 registry names."
    }
  },

  updatedOn: "2026-11-25"
};
