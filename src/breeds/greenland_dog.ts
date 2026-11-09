import type { Breed } from "../schema/breed.types";

export const greenland_dog: Breed = {
  slug: "greenland-dog",
  name: "Greenland Dog",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Grønlandshund",
    "Kalaallit Qimmiat",
    "Greenland Sledge Dog",
    "Greenland Husky",
    "Chien du Groenland",
    "Grönlandhund",
    "Perro de Groenlandia",
    "Esquimau Dog"
  ],

  group:
    "Spitz and Primitive Types; Section 1 — Nordic Sledge Dogs (without working trial; also classified in the Working and Northern Breed groups)",

  origin: {
    country: "Greenland",
    region:
      "Coastal regions of Greenland (specifically the Arctic sledge dog districts north of the Arctic Circle and East Greenland)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Gr%C3%B8nlandshund.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Gr%C3%B8nlandshund.jpg",
      title: "Grønlandshund.jpg",
      description: "An adult Greenland Dog (Grønlandshund) standing outdoors.",
      creator: "Lilly M",
      uploader: "Lilly M",
      capturedOn: "2007-06-16",
      uploadedOn: "2007-06-25",
      width: 2472,
      height: 1854,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Lilly M, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Gr%C3%B8nlandshund.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Greenland_Dog.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Greenland_Dog.jpg",
      title: "Greenland Dog.jpg",
      description: "A Greenland Dog standing in the snow.",
      creator: "Thomas Schoch",
      uploader: "Thomas Schoch",
      capturedOn: "2006-03-20",
      uploadedOn: "2006-04-12",
      width: 2048,
      height: 1536,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Thomas Schoch, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Greenland_Dog.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08"
    }
  ],

  overview: {
    summary:
      "One of the world's most ancient and powerful Arctic sledge dogs, originating in Greenland and celebrated for its heavy-boned endurance frame, weather-armored double coat, wolf-like pack communication, and monumental freighting stamina in polar conditions.",

    description:
      "The Greenland Dog is an exceptionally strong, heavy-boned Nordic spitz built specifically for hauling freight across frozen sea ice and hunting polar game under extreme Arctic conditions. The body is athletic, muscular, and slightly rectangular in silhouette, with a deep chest, powerful loin, and heavily boned limbs that provide immense pulling leverage. Covered in a dense, weather-resistant double coat consisting of a soft, woolly undercoat and a coarse, straight outer coat, the dog can withstand sub-zero blizzards without shelter. The head is broad and wedge-shaped with a proud carriage, slightly slanting dark eyes radiating fearless energy, small triangular erect ears, and a profusely plumed tail curled firmly over the back. Driven by powerful pack instincts, it possesses great affection and loyalty toward humans, but requires experienced, active handling and ample physical work.",

    history:
      "The Greenland Dog is an ancient aboriginal landrace whose lineage has lived alongside the Thule and Inuit peoples of Greenland for thousands of years. Archaeological and genomic research shows that Arctic sled dogs developed over 9,500 years ago, demonstrating direct genetic continuity between ancient Holocene Siberian canines and modern Greenland Dogs. In Greenland, these dogs were indispensable for human survival, pulling heavy sledges loaded with seal and walrus meat across treacherous ice and baying polar bears during winter hunts. The breed played a pivotal role in polar exploration, famously chosen by Roald Amundsen for his victorious expedition to the South Pole in 1911 due to its superior endurance and cold tolerance. To protect the breed's genetic purity and working traits, strict territorial laws in Greenland prohibit the importation of any other domestic dog breeds into the sled dog districts north of the Arctic Circle and on the east coast.",

    originalPurpose:
      "Heavy-freight sledge pulling, winter transportation across Arctic sea ice, and baying large game including polar bears and seals.",

    currentRoles: [
      "Traditional subsistence and expedition sledge pulling dog",
      "Competitive long-distance sled dog racing athlete",
      "Winter sports partner in ski-joring, bike-joring, and weight pulling",
      "Endurance hiking and packing companion for experienced Arctic outdoor handlers"
    ]
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "cm",
      male: {
        min: 60,
        max: 68
      },
      female: {
        min: 55,
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
      min: 12,
      max: 14
    },

    coatType:
      "Dense, thick, weather-resistant double coat with a rich, soft, woolly undercoat and a harsh, straight, coarse outer coat without curl or wave; short on the head and front of legs, longer on the body, with a thick neck ruff and a bushy tail.",

    coatLength: "Medium",

    coatColors: [
      "All colors and color combinations are permitted, including solid, particolor, and shaded coats (such as black, grey, red, sable, and white patches), with the sole exception that albino dogs are disqualified"
    ],

    sheddingLevel:
      "High year-round shedding with heavy seasonal coat blowing in spring and autumn",

    droolingLevel:
      "Low; tight, dry lips without pendulous flews result in minimal drooling",

    distinctiveFeatures: [
      "Powerful, heavy-boned Arctic sledge dog with an athletic, slightly rectangular profile",
      "Height at the withers of 60 cm and upwards for males (typically 60 to 68 cm) and 55 cm and upwards for females (typically 55 to 65 cm)",
      "Working weight of 30 to 40 kg for males and 25 to 35 kg for females in lean, conditioned state",
      "Broad, wedge-shaped head with a slightly arched skull and a moderate stop",
      "Straight, broad nasal bridge tapering slightly to a large, well-developed black nose (flesh-colored snow nose permitted in winter)",
      "Medium-sized, slightly slanting dark eyes with tight, black lids expressing a frank, courageous outlook",
      "Small, triangular, erect ears with rounded tips, carried firmly and capable of swiveling to sound",
      "Deep, broad, muscular chest reaching down to the elbows with well-sprung ribs",
      "Strong, straight back with a broad, muscular loin and slightly sloping croup",
      "Thick, high-set tail carried densely plumed, curled or arched forward over the back",
      "Large, powerful, rounded paws with thick, tough pads and strong nails, equipped with dense hair between the toes for grip on ice",
      "Relentless, rhythmic, and ground-covering working trot powered by strong hindquarters"
    ]
  },

  temperament: {
    traits: [
      "Hardy, tireless, and passionately devoted to pulling work",
      "Friendly, outgoing, and good-natured with humans",
      "Calm and affectionate with familiar handlers",
      "Strong pack hierarchy instinct with assertive tendencies toward unfamiliar dogs",
      "Fearless and resolute in the face of harsh environmental conditions",
      "Independent problem-solver with ancient primitive survival intelligence",
      "High predatory drive toward small animals and marine game",
      "Extremely vocal, communicating through deep, wolf-like howling choruses rather than watchdog barking",
      "Free of territorial watchdog suspicion toward humans"
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 2,
      withStrangers: 4,
      protectiveness: 1,
      independence: 5,
      trainability: 3,
      barking: 4,
      energy: 5
    }
  },

  care: {
    exercise: {
      level:
        "Very high; an endurance working sledge dog requiring vigorous daily physical exertion, heavy pulling work, or long-distance running in cool weather",

      minutesPerDay: {
        min: 90,
        max: 120
      },

      activities: [
        "Sledding, freight pulling, and mushing in winter snow",
        "Ski-joring, bike-joring, and canicross running with a pulling harness",
        "Long-distance wilderness hiking and weighted dog-packing in cool climates",
        "Supervised free exercise in a large, escape-proof fenced paddock",
        "Tracking and interactive outdoor scent games"
      ]
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush two to three times weekly using an undercoat rake and slicker brush to remove loose undercoat and maintain skin aeration; increase to daily brushing during seasonal undercoat blowing in spring and autumn.",

      bathing:
        "Bathe only when heavily soiled, as the coarse outer guard coat naturally sheds mud, snow, and trail dirt.",

      notes: [
        "Never shave the double coat; the outer guard hairs and dense woolly undercoat provide essential thermal insulation against extreme cold and summer heat.",
        "Use an undercoat rake during the heavy spring molt to extract dense dead underfur without cutting guard hairs.",
        "Inspect paw pads regularly for ice buildup, cracking, or cuts after heavy sledding over sea ice or rough terrain.",
        "Check ears weekly for dirt or moisture and clean gently with an approved cleanser.",
        "Trim nails every two to three weeks if they are not naturally worn down on ice or granite rock.",
        "The coat possesses negligible natural doggy odor and sheds dried dirt naturally when brushed."
      ]
    },

    training: {
      difficulty:
        "Challenging; highly intelligent and capable of learning complex sledding commands, but possesses strong primitive instincts, pack hierarchy focus, and an independent working mindset",

      tips: [
        "Establish clear, calm, and fair pack leadership through positive reinforcement and structured routines.",
        "Begin harness conditioning, directional voice commands, and leash manners during early puppyhood.",
        "Keep sessions engaging, physical, and purposeful, as mechanical obedience drills cause fast boredom.",
        "Maintain escape-proof fencing at least six feet high, secure against digging and climbing.",
        "Never exercise off-leash in open or unfenced areas, as predatory drive and wandering stamina will prompt far-ranging exploration.",
        "Avoid harsh physical punishment, which destroys trust and promotes defensiveness in primitive northern dogs."
      ],

      socialization:
        "Provide thorough, early, and positive exposure to diverse people, veterinary handling, household noises, and calm dogs. Ongoing social guidance ensures the dog remains confident and manageable in public while maintaining natural pack working harmony."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Arctic, sub-Arctic, and snowy winter climates, where the dense double coat provides optimal comfort",
        "Cool temperate climates",
        "Not suited to hot or humid tropical climates due to dense polar double coat and high risk of thermal distress"
      ],

      aloneTimeTolerance:
        "Low to moderate; intensely pack-oriented and thrives best in the company of humans or fellow sledge dogs, developing vocal howling or destructive digging if confined in isolated indoor quarters."
    }
  },

  nutrition: {
    dietType:
      "High-protein, high-fat complete and balanced diet formulated for active working sled dogs, tailored to outdoor temperature and working exertion.",

    feedingFrequency: {
      puppy:
        "Three to four measured meals daily until six months of age, transitioning to two meals daily on a large-breed growth diet supporting steady skeletal development.",
      adult:
        "One to two measured meals daily, timing larger meals after the day's pulling work is completed.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output, joint support, and lean muscle retention."
    },

    guidelines:
      "Caloric requirements vary dramatically between sedentary warm months and active winter freighting seasons, where working sled dogs can require two to three times their normal caloric intake. Measure food portions carefully, divide rations into scheduled meals, refrain from heavy running immediately before or after feeding to minimize bloat risk, and ensure fresh, unfrozen drinking water is constantly accessible.",

    considerations: [
      "Increase dietary fat and animal protein density during winter sledding and sub-zero outdoor work.",
      "Maintain a lean, muscular body condition where the ribs are easily felt through the thick coat.",
      "Avoid strenuous pulling or running for at least one hour before and after meals.",
      "Ensure access to unfrozen drinking water in sub-zero winter environments to prevent dehydration.",
      "Transition between diet formulas gradually over five to seven days."
    ],

    note:
      "Caloric demands vary widely depending on ambient temperature and pulling workload. Work with a veterinarian or sled dog nutritionist to establish tailored seasonal feeding schedules."
  },

  health: {
    overview:
      "The Greenland Dog is an exceptionally hardy, robust primitive working landrace with a typical lifespan of 12 to 14 years. Shaped by millennia of natural selection in the unforgiving Arctic climate, it has largely escaped the complex hereditary disorders and artificial exaggerations seen in many modern companion breeds. Primary health considerations focus on orthopedic screening for hip and elbow dysplasia, managing bloat in deep-chested active dogs, treating field injuries from ice and rocks, and preventing heatstroke in warm environments.",

    commonConditions: [
      "Hip dysplasia — developmental laxity and malformation of the hip joints, monitored through pre-breeding radiographic screening programs",
      "Elbow dysplasia — developmental abnormalities of the elbow joint that can cause forelimb lameness and secondary arthritis",
      "Gastric dilatation-volvulus (GDV / bloat) — an acute, life-threatening emergency in deep-chested dogs where the stomach distends with gas and twists on its axis",
      "Thermal stress and heatstroke — high vulnerability to hyperthermia if exercised in warm, humid climates due to heavy Arctic coat insulation",
      "Field injuries — paw pad cuts, split nails, frostbite on extremities in severe blizzards, and muscle strains sustained during heavy sled pulling",
      "Eye conditions — occasional reports of cataracts or corneal dystrophy monitored through routine ophthalmology checks"
    ],

    preventiveCare: [
      "Verify that breeding parents have official radiographic hip and elbow evaluation clearances.",
      "Never exercise vigorously in warm or humid temperatures; restrict hard pulling to temperatures below 15°C (ideally below freezing).",
      "Inspect paw pads regularly for cuts, fissures, or ice packing, using dog booties during extreme ice-crust running.",
      "Feed two smaller meals daily and avoid vigorous running immediately before or after eating to mitigate bloat risk.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine parasite prevention."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia screening prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "Clinical veterinary ophthalmic examination"
    ],

    dentalCare:
      "Brush teeth several times weekly using dog-specific enzymatic toothpaste. The breed has powerful jaws with a complete 42-tooth scissor bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the small erect ears weekly for dust, wax, or foreign matter, wiping the outer leather gently with an approved cleanser.",

    skinCare:
      "Part the dense double coat weekly during brushing to inspect the skin for external parasites, dryness, or irritation. The coat naturally sheds dirt and requires minimal skin intervention beyond regular brushing."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: false,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Experienced sled dog mushers, polar expeditions, and long-distance winter sports enthusiasts",
      "Active outdoor handlers living in cold, snowy rural or mountainous regions",
      "Households with large, securely fenced acreage prepared for high-energy working sled dogs",
      "Owners who understand northern primitive pack behavior, hierarchy, and howling vocalizations",
      "People dedicated to providing strenuous daily physical exercise and mental engagement"
    ],

    notIdealFor: [
      "First-time dog owners or casual pet seekers",
      "Apartment, condominium, or urban dwellers with shared walls and small yards",
      "Residents of warm, humid, or tropical climates",
      "Sedentary individuals looking for a low-exercise family lap pet",
      "Households with loose small animals or cats vulnerable to high predatory drive",
      "Owners who expect an off-leash park dog that greets unfamiliar dogs politely"
    ]
  },

  funFacts: [
    "Roald Amundsen selected Greenland Dogs to pull his sledges on his historic 1911 expedition to the South Pole, relying on their unmatched endurance and resilience to successfully become the first human to reach the pole.",
    "In Greenland, the breed is legally protected: by law, no other dog breeds may be brought into the sledge dog districts north of the Arctic Circle on the west coast and on the entire east coast, preserving the pure genetic line from dilution.",
    "A landmark genomic study published in the journal Science in 2020 revealed that the Greenland Dog shares genetic continuity with a 9,500-year-old ancient sled dog from Zhokhov Island in Siberia, possessing ancient genetic adaptations for a high-fat diet and oxygen efficiency in the cold.",
    "Rather than barking to defend territory like typical domestic dogs, Greenland Dogs communicate through haunting, wolf-like howling choruses known in northern communities as the 'Greenland serenade'.",
    "Its traditional Greenlandic Inuit name is Kalaallit Qimmiat, simply meaning 'the dog of the Greenlanders'.",
    "A team of Greenland Dogs can haul heavy wooden sledges laden with hundreds of kilograms of freight over sea ice for 50 kilometers or more in a single day at temperatures below -30°C."
  ],

  faq: [
    {
      question: "What is a Greenland Dog?",
      answer:
        "The Greenland Dog (Grønlandshund or Kalaallit Qimmiat) is an ancient, heavy-boned Arctic sledge dog native to Greenland, known for its extraordinary endurance, weather-armored double coat, and wolf-like howling."
    },
    {
      question: "Where does the Greenland Dog originate?",
      answer:
        "The breed originates from Greenland, where it has served the indigenous Inuit peoples for thousands of years as a freighting sledge dog and hunting companion for seal and polar bear."
    },
    {
      question: "How tall and heavy is a Greenland Dog?",
      answer:
        "Adult males stand 60 cm and upwards (typically 60 to 68 cm) at the shoulder and weigh 30 to 40 kg, while females stand 55 cm and upwards (typically 55 to 65 cm) and weigh 25 to 35 kg."
    },
    {
      question: "How does a Greenland Dog differ from a Siberian Husky or Alaskan Malamute?",
      answer:
        "The Greenland Dog is heavier-boned, stockier, and more rugged than the faster, lighter Siberian Husky. While similar in power to the Alaskan Malamute, the Greenland Dog has retained its primitive working landrace traits with virtually no modern cosmetic breeding, and all coat colors except albino are accepted."
    },
    {
      question: "How long does a Greenland Dog live?",
      answer:
        "The breed is remarkably robust and long-lived for a large working dog, typically enjoying a healthy lifespan of 12 to 14 years with proper nutrition and care."
    },
    {
      question: "Can a Greenland Dog live in an apartment or warm climate?",
      answer:
        "No. Due to its massive exercise needs, powerful howling voice, and heavy Arctic coat, the breed is completely unsuited to apartment living and suffers severe thermal stress in warm or tropical climates; it thrives best in cold, rural, or snowy environments."
    },
    {
      question: "Are Greenland Dogs good family pets?",
      answer:
        "They are friendly, loyal, and good-natured with humans, but they are working sled dogs with immense strength, strong pack hierarchy instincts, and high prey drive, making them suited only to experienced, highly active outdoor owners rather than typical suburban family households."
    },
    {
      question: "Does the Greenland Dog bark a lot?",
      answer:
        "Greenland Dogs rarely bark like typical watchdogs; instead, they communicate through expressive, musical howling choruses that can carry for miles across the landscape."
    },
    {
      question: "How much exercise does a Greenland Dog need each day?",
      answer:
        "The breed requires at least 90 to 120 minutes of vigorous daily physical exertion, ideally through sled pulling, bike-joring, ski-joring, or long-distance mountain hiking in cool weather."
    },
    {
      question: "Does the Greenland Dog shed a lot, and how is it groomed?",
      answer:
        "Yes. It has a thick Arctic double coat that sheds year-round and blows its dense undercoat heavily twice a year. It requires brushing two to three times a week with an undercoat rake, and it should never be shaved."
    },
    {
      question: "What special legal status does the Greenland Dog have in Greenland?",
      answer:
        "To preserve the breed's ancient genetic integrity and working heritage, Greenland law strictly forbids the importation of any other domestic dog breeds into the sled dog regions north of the Arctic Circle and on the east coast."
    },
    {
      question: "What health problems affect the Greenland Dog?",
      answer:
        "The breed is exceptionally hardy with few genetic diseases; primary health considerations include hip dysplasia, elbow dysplasia, bloat (gastric dilatation-volvulus), and minor working injuries from ice and rocks."
    }
  ],

  references: [
    "fci-greenland-dog-official-standard",
    "fci-greenland-dog-nomenclature",
    "dansk-kennel-klub-groenlandshund-breed-standard",
    "the-kennel-club-greenland-dog-breed-standard",
    "ukc-greenland-dog-breed-standard",
    "greenland-dog-holocene-origins-study-2020",
    "wikimedia-groenlandshund-lilly-m",
    "wikimedia-greenland-dog-thomas-schoch"
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
          id: "fci-greenland-dog-official-standard",
          role: "verified",
          locator: "Standard heading: GREENLAND DOG (Grønlandshund)"
        },
        {
          id: "fci-greenland-dog-nomenclature",
          role: "verified",
          locator: "Official nomenclature: GRØNLANDSHUND (274), Chien du Groenland, Grönlandhund, Perro de Groenlandia"
        },
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "verified",
          locator: "Racebeskrivelse: Grønlandshund, Kalaallit Qimmiat"
        },
        {
          id: "the-kennel-club-greenland-dog-breed-standard",
          role: "verified",
          locator: "Breed name: Greenland Dog (historic name Esquimau Dog)"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Verified across FCI Standard No. 274, FCI Nomenclature, DKK, and The Royal Kennel Club."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greenland-dog-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 5 Spitz and primitive types, Section 1 Nordic Sledge Dogs, without working trial"
        },
        {
          id: "fci-greenland-dog-nomenclature",
          role: "verified",
          locator: "Group 5, Section 1 Nordic Sledge Dogs, without working trial"
        },
        {
          id: "the-kennel-club-greenland-dog-breed-standard",
          role: "verified",
          locator: "Working Group"
        },
        {
          id: "ukc-greenland-dog-breed-standard",
          role: "verified",
          locator: "Northern Breed Group"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greenland-dog-official-standard",
          role: "verified",
          locator: "ORIGIN: Greenland; PATRONAGE: Denmark; BRIEF HISTORICAL SUMMARY"
        },
        {
          id: "fci-greenland-dog-nomenclature",
          role: "verified",
          locator: "Country of origin: Greenland; Patronage: Denmark"
        },
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "verified",
          locator: "Oprindelse: Grønland (slædehundedistriktet nord for polarcirklen og Østgrønland)"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greenland-dog-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, IMPORTANT PROPORTIONS, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "verified",
          locator: "Historie, Amundsen sydpolsekspedition, slædehundeanvendelse og adfærd"
        },
        {
          id: "greenland-dog-holocene-origins-study-2020",
          role: "verified",
          locator: "9,500-year genomic lineage from Zhokhov Island to modern Greenland dogs and metabolic adaptations"
        },
        {
          id: "the-kennel-club-greenland-dog-breed-standard",
          role: "cited",
          locator: "General appearance and working characteristics"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Synthesized in original prose from FCI Standard No. 274, DKK, and peer-reviewed genomics research without naming prohibited sources."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greenland-dog-official-standard",
          role: "verified",
          locator: "HEAD, BODY, LIMBS, TAIL, COAT, COLOUR, SIZE"
        },
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "verified",
          locator: "Morfologi, krop, pels, farver og størrelse"
        },
        {
          id: "the-kennel-club-greenland-dog-breed-standard",
          role: "verified",
          locator: "Head and Skull, Body, Coat, Colour, Size"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Conformation, sled dog proportions (10:11 height to length), double coat, plumed tail, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greenland-dog-official-standard",
          role: "verified",
          locator: "SIZE: Height at withers: Males: 60 cm and upwards. Females: 55 cm and upwards."
        },
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "verified",
          locator: "Størrelse: Hanhunde: 60 cm og derover (typisk 60-68 cm); Tæver: 55 cm og derover (typisk 55-65 cm)"
        },
        {
          id: "the-kennel-club-greenland-dog-breed-standard",
          role: "verified",
          locator: "Height: dogs: 60 cms (23.5 ins) minimum; bitches: 55 cms (21.5 ins) minimum"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Preserved in published unit of centimetres (60–68 cm for males, 55–65 cm for females, with 60 cm and 55 cm minimums) exactly as specified in FCI Standard No. 274 and DKK."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "verified",
          locator: "Vægt: Hanhunde typisk 30-40 kg; Tæver typisk 25-35 kg"
        },
        {
          id: "the-kennel-club-greenland-dog-breed-standard",
          role: "verified",
          locator: "Weight: dogs approximately 34-47.5 kgs (75-105 lbs); bitches approximately 27-41 kgs (60-90 lbs)"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "FCI Standard No. 274 states weight must be in proportion to height. The stored 30 to 40 kg for males and 25 to 35 kg for females represent canonical weights published by the Danish breed authority, preserved in kilograms."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "verified",
          locator: "Levealder: typisk 12-14 år"
        },
        {
          id: "the-kennel-club-greenland-dog-breed-standard",
          role: "verified",
          locator: "Longevity and health actuarial profile (12-14 years)"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Supported by Danish and British kennel club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-greenland-dog-official-standard",
          role: "verified",
          locator: "COAT: Double coat: soft, dense undercoat and coarse, straight outer coat"
        },
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "verified",
          locator: "Pelspleje: kraftig fældning af underulden to gange årligt"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greenland-dog-official-standard",
          role: "verified",
          locator: "Lips: Close fitting, tight and dry"
        },
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "verified",
          locator: "Læber: Stramme og tørre"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Tight, dry lips result in minimal drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-greenland-dog-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Hard-working, passionate sledge dog, friendly with people, no watchdog instinct; bold and fearless"
        },
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "verified",
          locator: "Temperament: Venlig over for mennesker, stærkt flokinstinkt, jagtlyst, utrættelig arbejdsvilje"
        },
        {
          id: "ukc-greenland-dog-breed-standard",
          role: "verified",
          locator: "Characteristics: Devoted working companion, independent, friendly, vocal howling"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-greenland-dog-official-standard",
          role: "cited",
          locator: "Temperament and working characteristics"
        },
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "cited",
          locator: "Flokadfærd og sociale egenskaber"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented sled dog pack temperament and working drive."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "cited",
          locator: "Hold af slædehunde, motion, pelspleje og fodring"
        },
        {
          id: "the-kennel-club-greenland-dog-breed-standard",
          role: "cited",
          locator: "Care, exercise, and management"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active sled dog management with Arctic double-coat care protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-greenland-dog-official-standard",
          role: "verified",
          locator: "UTILIZATION: Sledge dog built for sustained heavy endurance hauling"
        },
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "verified",
          locator: "Aktivitetsniveau: Meget højt; kræver hårdt fysisk arbejde som træk"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "cited",
          locator: "Daglig træning og trækaktiviteter"
        },
        {
          id: "the-kennel-club-greenland-dog-breed-standard",
          role: "cited",
          locator: "Exercise requirements: More than 2 hours per day"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 90 to 120 minutes of daily activity reflects the intense exercise demands of a heavy Arctic sled dog."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-greenland-dog-official-standard",
          role: "cited",
          locator: "High stamina sled dog with pack-howling voice"
        },
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "cited",
          locator: "Uegnet til lejligheder; kræver stor udendørs plads og koldt klima"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial evaluation that high endurance, vocal howling, and cold-climate adaptation make apartment living completely unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "verified",
          locator: "Boligforhold: Kræver stor, flugtsikker indhegnet grund"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-greenland-dog-official-standard",
          role: "verified",
          locator: "COAT: Heavy double coat designed for Arctic blizzards and extreme cold"
        },
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "verified",
          locator: "Klimatilpasning: Optimalt i arktisk/nordisk klima; uegnet til varme"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "cited",
          locator: "Flokdyr; mistrives ved isolation"
        }
      ],
      verifiedOn: null,
      note:
        "Sled dogs are intensely pack-oriented and develop severe frustration and howling if isolated from their pack."
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "greenland-dog-holocene-origins-study-2020",
          role: "cited",
          locator: "Genetic adaptations to high-fat and high-protein Arctic marine diet"
        },
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "cited",
          locator: "Fodring af arbejdende slædehunde"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for endurance sled dogs."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "cited",
          locator: "Måltidsrutiner for slædehunde"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "verified",
          locator: "Sundhed, HD-screening og racens generelle robusthed"
        },
        {
          id: "greenland-dog-holocene-origins-study-2020",
          role: "verified",
          locator: "Genomic health, ancestral hardiness, and cold adaptations"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Documents high overall constitutional hardiness alongside routine orthopedic screening programs."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "verified",
          locator: "Höftledsdysplasi (HD), mavedrejning (GDV) og skader under slædekørsel"
        },
        {
          id: "the-kennel-club-greenland-dog-breed-standard",
          role: "verified",
          locator: "Breed health concerns: Watch categories (eyes and heat stress)"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Identifies documented breed considerations without using prohibited registry labels in prose."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "cited",
          locator: "Potevård, varmebeskyttelse og sundhedsråd"
        }
      ],
      verifiedOn: null,
      note: "Field hygiene protocol tailored to working sled dogs."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "verified",
          locator: "Avelskrav: HD-røntgen og øjenlysning"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Pre-breeding evaluations recommended by the national breed authority."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-greenland-dog-official-standard",
          role: "cited",
          locator: "Jaws/teeth: complete, powerful 42-tooth scissor bite"
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-greenland-dog-official-standard",
          role: "cited",
          locator: "Ears: small, triangular, erect with rounded tips"
        }
      ],
      verifiedOn: null,
      note: "Ear maintenance protocol for small erect ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-greenland-dog-official-standard",
          role: "cited",
          locator: "Skin and coat structure"
        }
      ],
      verifiedOn: null,
      note: "General skin and coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "cited",
          locator: "Krav til hundeejeren: Erfaring med slædehunde og flokdynamik påkrævet"
        },
        {
          id: "fci-greenland-dog-official-standard",
          role: "cited",
          locator: "Utilization and working temperament"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability flags and lists reflect editorial evaluations of sled dog exercise needs and pack drives."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "verified",
          locator: "Amundsen 1911 sydpolsekspedition, lovbeskyttelse i Grønland mod andre racer, slædefart"
        },
        {
          id: "greenland-dog-holocene-origins-study-2020",
          role: "verified",
          locator: "9,500-year Zhokhov island sled dog genetic continuity, high-fat diet adaptations"
        },
        {
          id: "fci-greenland-dog-official-standard",
          role: "verified",
          locator: "Brief historical summary: Ancient Inuit Arctic survival role"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Verified historical and functional facts written without prohibited names."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-greenland-dog-official-standard",
          role: "verified",
          locator: "Origin, size (60+ cm / 55+ cm), coat, and colors"
        },
        {
          id: "dansk-kennel-klub-groenlandshund-breed-standard",
          role: "verified",
          locator: "Vægt (30-40 kg / 25-35 kg), levealder (12-14 år), slædehundehold og lovbeskyttelse"
        },
        {
          id: "greenland-dog-holocene-origins-study-2020",
          role: "verified",
          locator: "Arctic genetics and dietary physiology"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "FAQ answers synthesize verified standards and parent-club guidance without naming registries in prose."
    }
  },

  updatedOn: "2026-11-08"
};
