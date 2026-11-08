import type { Breed } from "../schema/breed.types";

export const kuvasz: Breed = {
  slug: "kuvasz",
  name: "Kuvasz",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Hungarian Kuvasz",
    "Kuvaszok",
    "Magyar Kuvasz",
    "Chien de berger hongrois Kuvasz",
    "Ungarischer Kuvasz"
  ],

  group:
    "Sheepdogs and Cattledogs (except Swiss Cattle Dogs); Section 1 — Sheepdogs (without working trial; also classified in the Working and Guardian Dog groups)",

  origin: {
    country: "Hungary",
    region: "Carpathian Basin and the Hungarian Plains"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kuvasz_-_1.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Kuvasz_-_1.jpg",
      title: "Kuvasz - 1.jpg",
      description: "Female Kuvasz in Ópusztaszer, Hungary.",
      creator: "DenesFeri",
      uploader: "DenesFeri",
      capturedOn: "2019-09-11",
      uploadedOn: "2019-09-23",
      width: 1685,
      height: 2246,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by DenesFeri, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Kuvasz_-_1.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-24"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/DocFile_Kuvasz.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:DocFile_Kuvasz.jpg",
      title: "DocFile Kuvasz.jpg",
      description: "An adult Kuvasz dog standing in a field.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2004-09-12",
      uploadedOn: "2019-02-11",
      width: 959,
      height: 772,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:DocFile_Kuvasz.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-24"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kuvasz_-_3.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Kuvasz_-_3.jpg",
      title: "Kuvasz - 3.jpg",
      description: "Female Kuvasz outdoors in Ópusztaszer, Hungary.",
      creator: "DenesFeri",
      uploader: "DenesFeri",
      capturedOn: "2019-09-11",
      uploadedOn: "2019-09-23",
      width: 1642,
      height: 2189,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by DenesFeri, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Kuvasz_-_3.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-24"
    }
  ],

  overview: {
    summary:
      "A majestic, ancient Hungarian livestock guardian dog characterized by its large, well-muscled frame, dense wavy white double coat, keen intelligence, and unwavering devotion to protecting its family and flock.",

    description:
      "The Kuvasz is an ancient, large-sized Hungarian flock guardian defined by an imposing, noble stature, robust bone structure, and a dense, wavy white or ivory double coat. Its body is slightly longer than tall, presenting a harmonious rectangular silhouette combining strength, agility, and lightfooted movement without any heaviness or lethargy. The head is lean, noble, and wedge-shaped with dark, almond-shaped eyes, tightly fitting black lips, and V-shaped dropped ears. Developed over centuries to guard sheep and cattle against apex predators on the Hungarian plains, the Kuvasz exhibits a dual character: gentle, patient, and deeply affectionate with its household, yet unyielding, fearless, and naturally suspicious when evaluating unfamiliar people or potential threats.",

    history:
      "The Kuvasz is an ancient livestock guardian of the Carpathian Basin, accompanying the Magyar tribes into Hungary during the ninth century. The breed's name likely traces to the ancient Cuman or Turkish word 'kawasz', meaning an armed escort of the nobility or trusted guardian. In the fifteenth century, King Matthias Corvinus maintained large packs of Kuvasz dogs at his royal court at Visegrád, utilizing them as personal royal bodyguards and hunting companions for wild boar, bear, and wolf; historical lore recounts that the monarch trusted his dogs far more than his human courtiers. Over following centuries, the breed returned primarily to the vast grasslands of the Hungarian Puszta, guarding flocks of sheep and cattle against wolves, bears, and bandits. The white coat was intentionally selected so shepherds could distinguish their guardians from wolves in dim light. The breed suffered catastrophic losses during World War II, when invading troops targeted these resolute estate defenders, reducing the Hungarian population to fewer than thirty registered dogs. Through the dedicated recovery efforts of passionate Hungarian breeders in the postwar era, the breed was preserved and restored as a proud national treasure.",

    originalPurpose:
      "Guarding flocks of sheep and herds of cattle against wolves, bears, lynx, and thieves on the Hungarian plains, and serving as royal estate and personal bodyguards.",

    currentRoles: [
      "Working livestock guardian for sheep, goats, and cattle",
      "Estate and rural property guardian",
      "Loyal family guardian and companion for experienced handlers",
      "Hiking and cold-weather outdoor tracking partner",
      "Competitive obedience, rally, and working assessment participant"
    ]
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "cm",
      male: {
        min: 71,
        max: 76
      },
      female: {
        min: 66,
        max: 70
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 48,
        max: 62
      },
      female: {
        min: 37,
        max: 50
      }
    },

    lifespanYears: {
      min: 10,
      max: 12
    },

    coatType:
      "Dense, weather-resistant double coat with a moderately harsh, wavy outer coat forming crests and whorls over a fine, woolly undercoat; short and straight on the head and front of limbs, with an abundant mane around the neck and full breeches on the thighs.",

    coatLength: "Medium",

    coatColors: [
      "White",
      "Ivory"
    ],

    sheddingLevel:
      "High shedding year-round, with intense seasonal shedding in spring and autumn when blowing the dense undercoat",

    droolingLevel:
      "Low to moderate; the lips are tight and dry with black edges, preventing excessive drooling",

    distinctiveFeatures: [
      "Imposing, harmonious, and noble stature combining muscular strength with athletic mobility",
      "Lean, wedge-shaped head with a gently sloping stop and no coarseness",
      "Dark almond-shaped, slightly slanting eyes with tightly adhering black eye rims",
      "Thick, V-shaped ears with rounded tips, set at medium height and hanging close to the head",
      "Tightly fitting, dry lips with deep black pigmentation",
      "Strong jaws with a regular and complete scissor bite",
      "Solid white or ivory wavy double coat forming an abundant neck mane and full thigh breeches",
      "Slate-grey to black skin pigmentation on the palate, lips, eye rims, nose, and paw pads",
      "Long, low-set tail reaching at least to the hock, slightly curled upward at the tip when at rest",
      "Deep, broad chest with well-sprung ribs reaching down to the elbows",
      "Height at the withers of 71 to 76 cm for males and 66 to 70 cm for females",
      "Weight of 48 to 62 kg for males and 37 to 50 kg for females"
    ]
  },

  temperament: {
    traits: [
      "Courageous, bold, and fearless when defending family and flock",
      "Deeply loyal, affectionate, and protective toward household members",
      "Reserved, aloof, and discerning with unfamiliar people",
      "Intelligent and independent decision-maker",
      "Patient and gentle with familiar children",
      "Alert, vigilant, and watchful day and night",
      "Confident and dignified bearing",
      "Proud and sensitive to human tone of voice",
      "Low predatory drive toward domestic livestock",
      "Territorial and protective of household boundaries"
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 2,
      withStrangers: 2,
      protectiveness: 5,
      independence: 4,
      trainability: 3,
      barking: 3,
      energy: 3
    }
  },

  care: {
    exercise: {
      level:
        "Moderate; requires regular daily purposeful exercise, patrolling opportunities in a secure enclosure, and mental engagement suited to an athletic flock guardian",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Daily long walks and trail hikes on varied terrain",
        "Supervised patrolling and free movement in a securely fenced perimeter",
        "Livestock protection and pastoral guardian work",
        "Reward-based obedience, rally, and attention exercises",
        "Scent enrichment, tracking games, and search puzzles",
        "Outdoor cold-weather exercise and winter excursions"
      ]
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush thoroughly once or twice weekly using a sturdy pin brush and slicker brush to remove loose undercoat and prevent tangles; increase to daily brushing during seasonal shedding in spring and autumn.",

      bathing:
        "Bathe only when dirty using a gentle canine shampoo; the harsh outer coat naturally sheds dried dirt and mud, and frequent bathing can soften the water-repellent texture.",

      notes: [
        "Never shave the double coat; the dense fur provides thermal insulation against both winter freezing and summer heat.",
        "Check behind the ears, in the neck mane, and through the thigh breeches for burrs, mats, or ticks after outdoor walks.",
        "Use an undercoat rake during seasonal shedding to lift dead hair from the deep woolly undercoat.",
        "Inspect the thick V-shaped ears weekly for wax accumulation, moisture, or redness.",
        "Trim nails every two to three weeks if they are not naturally worn down on hard ground.",
        "Brush teeth multiple times weekly using canine-formulated enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Challenging to moderate; highly intelligent and discerning, but possesses an independent streak and will ignore repetitive drills or harsh handling",

      tips: [
        "Start early using positive reinforcement, high-value rewards, and clear, fair leadership.",
        "Keep training sessions brief, varied, and purposeful to prevent boredom.",
        "Teach reliable recall and leash manners early, before the dog reaches its full adult power.",
        "Avoid harsh verbal corrections or forceful methods, which damage mutual trust and cause this proud breed to withdraw.",
        "Teach the dog to observe handler cues when welcoming approved guests onto the property.",
        "Install sturdy, secure boundary fencing at least five to six feet high to prevent wandering beyond assigned territory."
      ],

      socialization:
        "Introduce the puppy calmly and systematically to diverse people, friendly dogs, handling routines, sounds, and novel environments from eight weeks of age onward. Because natural guardian instincts awaken as the dog matures, early social exposure fosters calm confidence and discernment rather than indiscriminate suspicion."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cold and snowy winter climates",
        "Temperate climates",
        "Warm climates provided there is abundant shade, air conditioning, and fresh water during hot weather"
      ],

      aloneTimeTolerance:
        "Moderate when provided with a secure yard to patrol or livestock to guard, but requires regular family interaction and should not be isolated for long workdays"
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for large- or giant-breed dogs, adjusted for age, activity level, and working demands.",

    feedingFrequency: {
      puppy:
        "Three to four measured meals daily up to six months of age, then transitioning to two meals daily on a dedicated large-breed puppy formula to support steady, controlled skeletal growth.",
      adult:
        "Two measured meals daily to support consistent digestion and help mitigate the risk of gastric dilatation-volvulus.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output, joint mobility, and lean muscle maintenance."
    },

    guidelines:
      "Measure food portions carefully using a digital kitchen scale or standard measuring cup, adjusting rations to maintain a lean, athletic body condition. Divide the daily allowance into two distinct meals, avoid vigorous exercise for at least one hour before and after feeding to lower the risk of gastric dilatation-volvulus, and ensure fresh drinking water is accessible at all times.",

    considerations: [
      "Maintain a lean body condition to avoid overloading developing or mature joints.",
      "Feed a dedicated large-breed puppy formula with controlled calcium and phosphorus ratios to foster slow, steady bone development.",
      "Incorporate training treats into the daily caloric calculation to prevent unwanted weight gain.",
      "Avoid free-feeding and restrict strenuous activity around meal times to manage bloat risks.",
      "Adjust daily caloric portions upward for dogs working outdoors in winter and downward during sedentary summer periods.",
      "Transition between diets gradually over five to seven days to protect digestive balance."
    ],

    note:
      "Caloric demands vary according to age, living climate, and working workload. Work with a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Kuvasz is generally a robust, hardy livestock guardian with a typical lifespan of 10 to 12 years. Developed over centuries of demanding outdoor pastoral work across the Hungarian plains, it possesses solid constitutional stamina. As with other large and giant working breeds, health considerations center on musculoskeletal development, ocular health, and deep-chested anatomy, notably canine hip dysplasia, elbow dysplasia, osteochondritis dissecans (OCD), gastric dilatation-volvulus (GDV / bloat), autoimmune thyroiditis, and progressive retinal atrophy.",

    commonConditions: [
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joint that can cause lameness and secondary osteoarthritis",
      "Elbow dysplasia — developmental abnormalities of the elbow joint leading to forelimb lameness and joint stiffness",
      "Gastric dilatation-volvulus (GDV / bloat) — a rapid, life-threatening emergency in deep-chested dogs where the stomach distends with gas and twists on its axis",
      "Osteochondritis dissecans (OCD) — a developmental cartilage condition affecting large joints in rapidly growing adolescent dogs",
      "Autoimmune thyroiditis — immune-mediated inflammation of the thyroid gland resulting in hypothyroidism, lethargy, and weight changes",
      "Progressive retinal atrophy (PRA) and hereditary cataracts — degenerative or clouding conditions of the eye that can impair vision",
      "Canine multifocal retinopathy (cmr2) — an inherited retinal condition causing discrete blister-like retinal elevations",
      "Panosteitis — temporary, self-limiting inflammation of the long leg bones in growing young dogs causing intermittent lameness"
    ],

    preventiveCare: [
      "Acquire puppies from breeding stock with certified pre-breeding hip, elbow, eye, and thyroid evaluations.",
      "Feed a balanced large-breed puppy food and avoid supplemental calcium or excessive calories during the rapid growth phase.",
      "Rest the dog for at least one hour before and after meals, discourage rapid eating, and learn the emergency signs of bloat.",
      "Maintain a lean, muscular body condition throughout life to minimize stress on large joints.",
      "Inspect the ears and skin weekly for wax buildup, moisture, or hot spots, and dry the dense undercoat thoroughly after wetting.",
      "Maintain regular veterinary wellness exams, dental cleanings, and up-to-date parasite prevention."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation through an accredited national screening program prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "Ophthalmic examination by a board-certified veterinary ophthalmologist",
      "Autoimmune thyroiditis serum panel (FT4, cTSH, and TgAA)",
      "DNA screening for known mutations where available (including prcd-PRA and cmr2)"
    ],

    dentalCare:
      "Brush teeth multiple times weekly using canine enzymatic toothpaste. The breed has powerful jaws with a complete, regular scissor bite; periodic professional veterinary cleanings preserve gum and tooth health.",

    earCare:
      "Check the thick V-shaped pendant ears weekly for wax accumulation, moisture, debris, or redness. Clean gently using a veterinarian-recommended ear solution, drying the ear leather carefully.",

    skinCare:
      "Part the dense wavy double coat during weekly grooming to inspect the skin for hot spots, ticks, or irritation. Ensure the thick undercoat dries completely after baths or swimming to prevent moisture-trapped skin irritation."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Experienced dog owners familiar with large livestock guardian breeds and their independent protective instincts",
      "Rural or semi-rural properties with spacious, securely fenced yards or working pastures",
      "Livestock owners seeking a traditional, dedicated protector for sheep, goats, or cattle",
      "Active outdoor households that enjoy hiking and cold-weather activities",
      "Owners who value a calm, self-thinking guardian that forms a deep bond with its household"
    ],

    notIdealFor: [
      "First-time dog owners unprepared for managing a powerful, territorial guardian breed",
      "Apartment, condominium, or dense urban living environments without private land",
      "Households without tall, secure perimeter fencing (at least five to six feet high)",
      "Owners who expect an indiscriminately social dog that warmly greets all strangers",
      "Sedentary individuals unable to provide regular outdoor exercise and mental stimulation",
      "Homes with constant uncontrolled visitor traffic where a guardian dog cannot be safely managed"
    ]
  },

  funFacts: [
    "In fifteenth-century Hungary, King Matthias Corvinus trusted his Kuvasz dogs so completely that he kept a pack of them guarding his royal bedchamber and palace corridors, famously stating that he trusted his dogs more than his human courtiers.",
    "The breed's white coat was deliberately selected by centuries of shepherds so they could easily distinguish their guardian dogs from dark-coated wolves attacking the flock at dusk or in bad weather.",
    "The name 'Kuvasz' is believed to derive from an ancient Cuman or Turkish term, 'kawasz', meaning 'armed guard' or 'noble protector', or from the Sumerian 'ku-assa', meaning a dog of the horsemen.",
    "Despite weighing up to 62 kg, the Kuvasz is surprisingly agile, capable of reaching high speeds and leaping obstacles with great feline grace when pursuing predators.",
    "The breed faced near-extinction during World War II when invading soldiers systematically killed these fearless guard dogs to enter farms; fewer than thirty registered dogs remained in Hungary by 1945.",
    "In Hungarian folklore, a Kuvasz puppy given as a gift was considered one of the highest tokens of royal favor and esteem.",
    "The Kuvasz is celebrated alongside the Komondor, Puli, Pumi, and Mudi as one of Hungary's nine national dog breeds officially designated as national treasures."
  ],

  faq: [
    {
      question: "What is a Kuvasz?",
      answer:
        "The Kuvasz is an ancient, large-sized Hungarian livestock guardian dog known for its wavy white double coat, muscular build, keen intelligence, and fearless protective nature."
    },
    {
      question: "Where does the Kuvasz originate and what was its original purpose?",
      answer:
        "The breed originates from the Hungarian Plains and the Carpathian Basin, where it guarded sheep and cattle against wolves, bears, and thieves, and served as royal bodyguards for Hungarian monarchs."
    },
    {
      question: "How tall and heavy is a Kuvasz?",
      answer:
        "Adult males stand 71 to 76 cm at the withers and weigh 48 to 62 kg, while adult females stand 66 to 70 cm and weigh 37 to 50 kg, presenting an imposing, well-muscled frame."
    },
    {
      question: "How long does a Kuvasz usually live?",
      answer:
        "With proper nutrition, regular exercise, and conscientious preventive veterinary care, the breed typically enjoys a lifespan of 10 to 12 years."
    },
    {
      question: "What is the difference between a Kuvasz and a Great Pyrenees or Komondor?",
      answer:
        "While all three are large white livestock guardians, the Kuvasz has a wavy double coat rather than the corded coat of the Komondor or the flatter coat of the Great Pyrenees; it also has a leaner, more wedge-shaped head, darker skin pigmentation, and a slightly lighter, more agile build."
    },
    {
      question: "What is the Kuvasz coat like, and what colours are recognized?",
      answer:
        "The coat is a dense, wavy double coat with hair 4 to 12 cm long forming a neck mane and full thigh breeches; recognized colours are solid white and ivory, accompanied by dark slate-grey or black skin pigmentation."
    },
    {
      question: "Do Kuvaszok shed a lot?",
      answer:
        "Yes. The breed sheds moderately year-round and experiences heavy seasonal shedding in spring and autumn when it blows its dense undercoat, requiring frequent brushing during molting periods."
    },
    {
      question: "Is a Kuvasz a good family dog?",
      answer:
        "With its own family, the Kuvasz is gentle, patient, and deeply affectionate, displaying strong natural protectiveness toward household children. However, because it is an independent guardian that is reserved with strangers, it requires an experienced home, proper socialization, and supervision around visiting guests."
    },
    {
      question: "Can a Kuvasz live in an apartment?",
      answer:
        "No. Due to its large size, protective barking tendencies, and need for open outdoor space to patrol, the breed is poorly suited to apartment living and thrives best in a rural or suburban home with a securely fenced yard."
    },
    {
      question: "Is a Kuvasz easy to train?",
      answer:
        "The breed is highly intelligent and learns quickly, but it has an independent working nature and will not tolerate harsh corrections or endless mechanical drills; it responds best to calm, consistent, reward-based leadership."
    },
    {
      question: "Does a Kuvasz drool a lot?",
      answer:
        "No. Unlike some other large guardian breeds with loose, pendulous flews, the Kuvasz has tight-fitting, dry lips that produce relatively little drool."
    },
    {
      question: "What major health conditions affect the Kuvasz?",
      answer:
        "Primary health considerations include hip dysplasia, elbow dysplasia, osteochondritis dissecans (OCD), gastric dilatation-volvulus (bloat), autoimmune thyroiditis, and progressive retinal atrophy; prospective owners should verify that breeding parents have completed certified health screenings."
    }
  ],

  references: [
    "fci-kuvasz-official-standard",
    "fci-kuvasz-nomenclature",
    "akc-kuvasz-breed-profile",
    "kuvasz-club-of-america-official-standard",
    "kuvasz-club-of-america-judges-education",
    "ofa-kuvasz-chic-requirements",
    "wikimedia-kuvasz-1-denesferi",
    "wikimedia-docfile-kuvasz-canarian",
    "wikimedia-kuvasz-3-denesferi"
  ],

  evidence: {
    scientificName: {
      reliability: "unverified",
      sources: [],
      verifiedOn: null,
      note:
        "Canis lupus familiaris is used as the domestic-dog taxonomic label across the catalog; it is not stated in breed standards."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "Standard header and breed name: KUVASZ"
        },
        {
          id: "fci-kuvasz-nomenclature",
          role: "verified",
          locator: "Official nomenclature: KUVASZ (54)"
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Hungarian Kuvasz and historical name variants"
        }
      ],
      verifiedOn: "2026-10-24",
      note: "Verified across FCI Standard No. 54, FCI Nomenclature, and AKC breed documentation."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "FCI CLASSIFICATION: Group 1 Sheepdogs and Cattledogs (except Swiss Cattledogs). Section 1 Sheepdogs. Without working trial."
        },
        {
          id: "fci-kuvasz-nomenclature",
          role: "verified",
          locator: "Group 1, Section 1 Sheepdogs, without working trial"
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Working Group"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Formulated without prohibited registry prefixes in user-facing text to comply with Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "ORIGIN: Hungary; BRIEF HISTORICAL SUMMARY"
        },
        {
          id: "fci-kuvasz-nomenclature",
          role: "verified",
          locator: "Country of origin: Hungary"
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "History: Origin in Hungary, Carpathian Basin"
        }
      ],
      verifiedOn: "2026-10-24",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, IMPORTANT PROPORTIONS, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "About the Breed, History (King Matthias Corvinus, Hungarian plains), and Roles"
        },
        {
          id: "kuvasz-club-of-america-official-standard",
          role: "verified",
          locator: "General Appearance and working guardian background"
        },
        {
          id: "kuvasz-club-of-america-judges-education",
          role: "verified",
          locator: "History, King Matthias Corvinus court history, and functional utility"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Synthesized in original phrasing from FCI Standard No. 54, AKC, and Kuvasz Club of America documentation."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS, HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE AND WEIGHT"
        },
        {
          id: "kuvasz-club-of-america-official-standard",
          role: "verified",
          locator: "General Appearance, Size/Proportion/Substance, Head, Coat, Color"
        },
        {
          id: "kuvasz-club-of-america-judges-education",
          role: "verified",
          locator: "Proportions, Head, Eyes, Bite, Coat, Color, and Pigmentation"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Conformation, head, wavy coat, pigmentation, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: HEIGHT AT WITHERS: Dogs: 71 – 76 cm. Bitches: 66 – 70 cm."
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Preserved in published unit of centimetres (71–76 cm for males, 66–70 cm for females) exactly as specified in the official FCI standard of the country of origin."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "WEIGHT: Dogs: 48 – 62 kg. Bitches: 37 – 50 kg."
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Preserved in published unit of kilograms (48–62 kg for males, 37–50 kg for females) exactly as specified in the official FCI standard."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 10-12 years"
        }
      ],
      verifiedOn: "2026-10-24",
      note: "Supported by kennel club and breed club life expectancy publications."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (4/5), seasonal shedding of double coat"
        },
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "COAT: Coarser topcoat with finer woolly undercoat"
        }
      ],
      verifiedOn: "2026-10-24",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "Lips: Black, tightly fitting; edges of lips jagged, black"
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (2/5)"
        }
      ],
      verifiedOn: "2026-10-24",
      note: "Tight-fitting dry lips prevent excessive drooling typical of loose-flew flock guardians."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Brave, very protective, faithful, reliable, loves master and territory, bold and courageous"
        },
        {
          id: "kuvasz-club-of-america-official-standard",
          role: "verified",
          locator: "Temperament: Spirited, keen intelligence, courageous, primarily a one-family dog, unexcelled guard, bold and fearless"
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Temperament: Loyal, independent, courageous, protective"
        }
      ],
      verifiedOn: "2026-10-24",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        },
        {
          id: "kuvasz-club-of-america-official-standard",
          role: "cited",
          locator: "Temperament and guardian behavior"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented breed temperament traits."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        },
        {
          id: "kuvasz-club-of-america-judges-education",
          role: "cited",
          locator: "Coat care, exercise, and socialization requirements"
        }
      ],
      verifiedOn: null,
      note:
        "Combines flock guardian management with double-coat grooming and positive training protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Energy Level (3/5); Exercise Needs (3/5); daily activity for health and happiness"
        },
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "UTILIZATION: Herding and guard dog with tireless working ability"
        }
      ],
      verifiedOn: "2026-10-24",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "cited",
          locator: "Exercise: daily walks and secure yard roaming"
        }
      ],
      verifiedOn: null,
      note:
        "An estimated range of 45 to 60 minutes reflects the exercise needs of an athletic, working pastoral guardian."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Adaptability: Adapts Well to Apartment Living (1/5) - Not Recommended"
        },
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "Large flock and territory guardian requiring space to patrol"
        }
      ],
      verifiedOn: "2026-10-24",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Exercise: A fenced yard is essential for this large and agile dog"
        },
        {
          id: "kuvasz-club-of-america-judges-education",
          role: "verified",
          locator: "Living environment: secure fencing and outdoor space"
        }
      ],
      verifiedOn: "2026-10-24",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "COAT: Weather-resistant double coat with dense undercoat protecting against harsh winter cold"
        },
        {
          id: "kuvasz-club-of-america-official-standard",
          role: "verified",
          locator: "Coat: Able to withstand harsh temperatures and shed water and dirt"
        }
      ],
      verifiedOn: "2026-10-24",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "cited",
          locator: "Tolerates Being Alone: Moderate rating"
        },
        {
          id: "fci-kuvasz-official-standard",
          role: "cited",
          locator: "Independent guardian character and loyalty to family"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "cited",
          locator: "Nutrition: High quality food, calorie monitoring, weight management"
        },
        {
          id: "kuvasz-club-of-america-judges-education",
          role: "cited",
          locator: "Nutrition, steady growth, and bloat precautions"
        }
      ],
      verifiedOn: null,
      note: "Standard feeding and weight-management recommendations for large working dogs."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "cited",
          locator: "Life-stage feeding and portion control"
        }
      ],
      verifiedOn: null,
      note: "General large-breed feeding schedule to support digestion and mitigate bloat risks."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Health: Bloat (GDV), Hip Evaluation, Elbow Evaluation, Thyroid Evaluation"
        },
        {
          id: "ofa-kuvasz-chic-requirements",
          role: "verified",
          locator: "CHIC Program requirements: Hip Dysplasia, Elbow Dysplasia, Autoimmune Thyroiditis, Eye Examination"
        },
        {
          id: "kuvasz-club-of-america-judges-education",
          role: "verified",
          locator: "Health, longevity, and orthopedic screening"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Synthesizes breed health registry screening protocols and parent-club recommendations."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-kuvasz-chic-requirements",
          role: "verified",
          locator: "Documented conditions: Hip Dysplasia, Elbow Dysplasia, Thyroiditis, Eye Disease"
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Health section: Gastric dilatation-volvulus (bloat) and orthopedic concerns"
        },
        {
          id: "kuvasz-club-of-america-judges-education",
          role: "verified",
          locator: "Health concerns: OCD, bloat, panosteitis, and joint health"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Identifies documented orthopedic, gastrointestinal, and ocular conditions without using prohibited registry labels in prose."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "cited",
          locator: "Health and bloat prevention guidelines"
        },
        {
          id: "kuvasz-club-of-america-judges-education",
          role: "cited",
          locator: "Puppy growth management and health precautions"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to large deep-chested guardian breeds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-kuvasz-chic-requirements",
          role: "verified",
          locator: "CHIC required screenings: Hip Dysplasia, Elbow Dysplasia, Autoimmune Thyroiditis, Eye Examination"
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Recommended Health Tests: Hip, Elbow, and Thyroid Evaluations"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Screenings summarize published parent club and health registry protocols."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "cited",
          locator: "Jaws/teeth: complete, regular scissor bite"
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "cited",
          locator: "General routine grooming and dental maintenance"
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "cited",
          locator: "Ears: V-shaped, rounded tips, hanging close to the head"
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "cited",
          locator: "Ear checks and routine hygiene"
        }
      ],
      verifiedOn: null,
      note: "Ear maintenance protocol for medium-set pendant ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "cited",
          locator: "Skin contains much pigment; slate-grey or black pigmentation"
        },
        {
          id: "kuvasz-club-of-america-official-standard",
          role: "cited",
          locator: "Skin and coat texture care"
        }
      ],
      verifiedOn: null,
      note: "Skin and coat maintenance guidelines for a dense, water-repellent double coat."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "cited",
          locator: "About the Breed, Temperament, and Family Life ratings"
        },
        {
          id: "kuvasz-club-of-america-official-standard",
          role: "cited",
          locator: "Temperament and working utility"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, guardian drive, and living space needs."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "Brief historical summary: King Matthias Corvinus history and white coat selection"
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "History: King Matthias Corvinus court history, World War II near-extinction, and Cuman 'kawasz' etymology"
        },
        {
          id: "kuvasz-club-of-america-judges-education",
          role: "verified",
          locator: "Hungarian heritage, national treasure designation, and agility facts"
        }
      ],
      verifiedOn: "2026-10-24",
      note: "Verified historical folklore and cultural heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "Origin, purpose, size (71-76 cm / 66-70 cm), weight (48-62 kg / 37-50 kg), and coat"
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Lifespan (10-12 years), temperament, grooming, and health screenings"
        },
        {
          id: "ofa-kuvasz-chic-requirements",
          role: "verified",
          locator: "Health screening protocols"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and health testing requirements without citing prohibited registry names."
    }
  },

  updatedOn: "2026-10-24"
};
