import type { Breed } from "../schema/breed.types";

export const polish_lowland_sheepdog: Breed = {
  slug: "polish-lowland-sheepdog",
  name: "Polish Lowland Sheepdog",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Polski Owczarek Nizinny",
    "PON",
    "Berger polonais de plaine",
    "Polnischer Niederungshütehund",
    "Perro de pastor polaco de las llanuras"
  ],

  group: "Sheepdogs and Cattledogs (Group 1, Section 1: Sheepdogs)",

  origin: {
    country: "Poland",
    region: null
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Polski_owczarek_nizinny_rybnik-kamien_pl.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Polski_owczarek_nizinny_rybnik-kamien_pl.jpg",
      title: "Polski owczarek nizinny rybnik-kamien pl.jpg",
      description: "Polish Lowland Sheepdog during show of dogs in Rybnik - Kamień, Poland",
      creator: "Pleple2000",
      uploader: null,
      capturedOn: null,
      uploadedOn: null,
      width: 2468,
      height: 2172,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Pleple2000, via Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Polski_owczarek_nizinny_rybnik-kamien_pl.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Storalvens_Dione.JPG",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Storalvens_Dione.JPG",
      title: "Storalvens Dione.JPG",
      description: "Storalvens Dione Polish Lowland Sheepdog",
      creator: "Beltapar",
      uploader: "Beltapar",
      capturedOn: null,
      uploadedOn: "2009-02-03",
      width: 3264,
      height: 2448,
      licenseId: "cc-by-3.0",
      attribution:
        "Photo by Beltapar, via Wikimedia Commons, CC BY 3.0. Source: https://commons.wikimedia.org/wiki/File:Storalvens_Dione.JPG. License: https://creativecommons.org/licenses/by/3.0/. Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17"
    }
  ],

  overview: {
    summary:
      "A sturdy, medium-sized Polish herding dog hidden under a long, shaggy coat, known for its sharp memory, watchful nature and lively but level-headed temperament.",

    description:
      "The Polish Lowland Sheepdog is a compact, muscular herder built slightly longer than it is tall, which gives it an agile, rectangular outline. Its whole body is covered in a long, dense, rough-textured coat over a soft undercoat, and the hair falling over the forehead often hides the oval, hazel eyes. The ears hang close to the head and are heart-shaped, and many dogs are born with a very short tail or none at all. Any coat colour is possible. In temperament the breed is alert and lively yet self-controlled, quick to learn and notably good at remembering people, places and routines. Bred to handle flocks and warn of intruders, it is still a capable working and watch dog, and with enough activity it settles well into family life, including in towns.",

    history:
      "Shaggy herding dogs have worked on the plains of Poland for centuries, and the breed is generally thought to descend from long-coated sheepdogs that reached Europe from Central Asia. A long-standing tradition says Polish traders took several of these dogs to Scotland in the early 1500s and exchanged some of them for sheep, and that they may have influenced British herding breeds such as the Bearded Collie, though this story cannot be confirmed. Interest in the breed grew after Poland regained independence following the First World War, and dogs were being shown in Warsaw by 1924. The Second World War halted breeding, and the population came close to disappearing. Afterwards, breeders searched farms for surviving dogs, and the veterinarian Danuta Hryniewicz played a central part in the recovery. Her male, Smok, sired the first ten litters of the 1950s, and every modern dog of the breed traces back to him. A breed standard was approved in Poland in 1959, the breed gained definitive international recognition in 1963, and it later spread across Europe and North America, being recognised in the United States in 2001. Because the breed was rebuilt from so few dogs, its genetic diversity remains among the lowest measured in any breed.",

    originalPurpose:
      "Herding and guarding sheep on Polish farms, and warning of strangers or predators.",

    currentRoles: [
      "Family companion",
      "Watchdog",
      "Herding and stock work",
      "Dog sports such as herding trials, agility and obedience",
      "Show dog"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 45,
        max: 50
      },
      female: {
        min: 42,
        max: 47
      }
    },

    weight: {
      unit: null,
      male: null,
      female: null
    },

    lifespanYears: {
      min: 10,
      max: null
    },

    coatType:
      "Long, dense, shaggy double coat: rough, thick outer hair, straight or slightly wavy, over a soft undercoat",

    coatLength: "Long",

    coatColors: [
      "All colours and patches are accepted",
      "Merle is not accepted under the UK standard"
    ],

    sheddingLevel: "Sheds",

    droolingLevel: null,

    distinctiveFeatures: [
      "Height at the withers of 45–50 cm in males and 42–47 cm in females",
      "Body slightly longer than tall, with a height-to-length ratio of 9 to 10",
      "Long, shaggy coat that covers the whole body and often falls over the eyes",
      "Medium-sized, oval hazel eyes with a lively, piercing look",
      "Heart-shaped hanging ears, set fairly high and wide at the base",
      "Many dogs are born with a very short tail or no tail",
      "Compact, strong and muscular medium-sized frame"
    ]
  },

  temperament: {
    traits: [
      "Lively but self-controlled",
      "Watchful and alert",
      "Agile",
      "Intelligent and perceptive",
      "Excellent memory",
      "Steady and self-confident"
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 4,
      independence: 4,
      trainability: 4,
      barking: 4,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; a working herder that needs plenty of daily exercise plus training or tasks to occupy its mind",

      minutesPerDay: {
        min: 120,
        max: null
      },

      activities: [
        "Long daily walks and hikes",
        "Herding lessons or herding trials",
        "Agility, obedience and rally",
        "Fetch and running games in a secure area",
        "Scent work and problem-solving toys",
        "Learning new tricks and household jobs"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Brush and comb through to the skin every day, working in sections so mats do not form close to the skin, especially behind the ears, under the legs and on the belly.",

      bathing:
        "Bathe when dirty, then dry the coat thoroughly; a damp, thick coat tangles quickly and can irritate the skin.",

      notes: [
        "The natural shaggy outline is part of the breed; show dogs are not trimmed to change their shape.",
        "Pet owners often keep the hair around the feet, hygiene areas and eyes tidy for comfort.",
        "Hair over the eyes is normal, but keep the eye area clean.",
        "Trim the nails regularly and check between the pads for knotted hair or debris.",
        "Expect extra grooming during seasonal coat changes."
      ]
    },

    training: {
      difficulty:
        "Moderate; learns quickly and remembers well, but has an independent, self-assured streak and needs consistent, fair rules",

      tips: [
        "Keep sessions varied and use food, toys and praise as rewards.",
        "Set clear routines early; this breed remembers both good and bad habits.",
        "Teach calm greetings and a 'quiet' cue to manage watchdog barking.",
        "Redirect herding behaviours such as circling or nipping at heels into games or herding classes.",
        "Avoid harsh corrections, which tend to make a confident dog more stubborn."
      ],

      socialization:
        "As a natural guard that is reserved with strangers, the puppy benefits from meeting many friendly people, children, calm dogs and new places from an early age. Regular positive outings help keep its watchfulness balanced rather than suspicious."
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Temperate and cold climates",
        "Hot weather with shade, water, rest and exercise in the cooler hours; the thick coat holds heat"
      ],

      aloneTimeTolerance:
        "Low to moderate; a bored dog left alone for long periods may bark, chew or dig."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced diet suited to a medium-sized, active adult dog, adjusted for age and workload.",

    feedingFrequency: {
      puppy:
        "Three to four meals a day until about six months old, then two meals a day.",
      adult: "Two measured meals a day.",
      senior:
        "Two smaller meals a day, adjusted for activity and body condition."
    },

    guidelines:
      "Measure meals and adjust portions so the dog stays lean. A thick coat can hide weight gain, so feel for the ribs and waist rather than relying on looks. Keep fresh water available at all times.",

    considerations: [
      "Extra weight adds strain to the hips, which matters in a breed where hip dysplasia occurs.",
      "Count training treats as part of the daily food.",
      "Change foods gradually over about a week.",
      "Unexplained weight gain or coat changes are worth discussing with a vet."
    ],

    note:
      "Calorie needs vary with age, neutering status and activity. A vet can recommend a target weight and portion size."
  },

  health: {
    overview:
      "The Polish Lowland Sheepdog is a fairly hardy breed with a typical lifespan of more than 10 years. Hip dysplasia and a late-onset form of progressive retinal atrophy are the main inherited concerns, and breeders are advised to screen hips and eyes. Most cases of the eye disease studied in the breed carry the rcd4 gene variant, for which a DNA test is available. A rare but serious neurological disease, neuronal ceroid lipofuscinosis, has been described in the breed. Because the modern population descends from very few dogs, genetic diversity is low, and breeding the least related dogs is recommended to protect future health.",

    commonConditions: [
      "Hip dysplasia: abnormal hip development that can lead to arthritis; about 16% of dogs in one screening registry sample were dysplastic",
      "Progressive retinal atrophy (late-onset, mostly linked to the rcd4 variant): slow loss of night vision, then day vision, usually starting in middle age; a DNA test identifies affected and carrier dogs",
      "Neuronal ceroid lipofuscinosis: a rare inherited storage disease causing behaviour changes, poor coordination and blindness in young adult dogs",
      "Other conditions reported in the breed: hypothyroidism, cataracts and patent ductus arteriosus (a congenital heart defect)"
    ],

    preventiveCare: [
      "Ask breeders for hip scores and current eye examination results for both parents.",
      "Ask for rcd4 PRA DNA results, and avoid pairing two carriers.",
      "Prefer breeders who consider genetic diversity and relatedness when choosing mates.",
      "Keep the dog lean and avoid heavy, repetitive jumping while the puppy is growing.",
      "Report night blindness, bumping into objects or clumsy movement to a vet promptly.",
      "Keep up yearly health checks, vaccinations and parasite control; check under the thick coat for skin problems."
    ],

    recommendedScreenings: [
      "Hip evaluation (official hip dysplasia scheme)",
      "Eye examination under an official eye scheme or by a veterinary ophthalmologist",
      "DNA test for progressive retinal atrophy (rcd4)"
    ],

    dentalCare:
      "Brush the teeth several times a week with dog toothpaste and have the mouth checked at each vet visit.",

    earCare:
      "Check the hanging ears weekly for wax, smell or redness, and keep the hair around the ear opening free of mats so air can circulate.",

    skinCare:
      "Part the coat to the skin while grooming to look for mats, redness, hot spots or parasites. Dense mats trap moisture against the skin and should be worked out or carefully trimmed."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Active owners who enjoy long walks, training and outdoor activity",
      "Families who want a watchful, devoted companion",
      "People ready to brush a long coat every day",
      "Owners interested in herding, agility or obedience"
    ],

    notIdealFor: [
      "Owners with little time for daily exercise or grooming",
      "People wanting a dog that is friendly to every stranger",
      "Homes where the dog would be left alone for most of the day",
      "Owners who want a quiet dog"
    ]
  },

  funFacts: [
    "According to a long-told story, Polish traders brought these dogs to Scotland in the early 1500s and swapped some of them for sheep, and they may have helped shape the Bearded Collie.",
    "Every Polish Lowland Sheepdog alive today traces back to Smok, the dog who sired the breed's first ten litters after the Second World War.",
    "A wartime legend tells of a PON named Psyche who barked before air raids on Warsaw, warning people to take shelter.",
    "The first international show to include the breed took place in Czechoslovakia in 1965.",
    "Many puppies of this breed are born with only a stub of a tail, or none at all.",
    "Genetic testing has shown the breed's diversity to be among the lowest of all breeds studied, a legacy of its near-disappearance."
  ],

  faq: [
    {
      question: "How big is a Polish Lowland Sheepdog?",
      answer:
        "Males stand 45–50 cm at the withers and females 42–47 cm. The breed standards do not set a weight."
    },
    {
      question: "How long do Polish Lowland Sheepdogs live?",
      answer:
        "They usually live more than 10 years with good care."
    },
    {
      question: "How much grooming does the coat need?",
      answer:
        "A lot. The long, dense coat should be brushed through to the skin every day to prevent mats, and it needs thorough drying after baths."
    },
    {
      question: "Do Polish Lowland Sheepdogs shed?",
      answer:
        "Yes. Daily brushing removes loose hair before it mats or ends up around the house, and shedding increases during coat changes."
    },
    {
      question: "How much exercise do they need?",
      answer:
        "This is an active working breed that can need more than two hours of exercise a day, along with training or jobs that keep its mind busy."
    },
    {
      question: "Are they good family dogs?",
      answer:
        "They are devoted to their family and usually good with children they are raised with. They are naturally watchful with strangers, so early socialisation is important."
    },
    {
      question: "Are they easy to train?",
      answer:
        "They learn quickly and have an excellent memory, but they are also independent. Consistent, reward-based training works best."
    },
    {
      question: "What health tests should a breeder do?",
      answer:
        "Responsible breeders screen hips and eyes and use a DNA test for the rcd4 form of progressive retinal atrophy. Choosing less related mates also helps, because genetic diversity in the breed is low."
    },
    {
      question: "What colours do they come in?",
      answer:
        "Any colour or combination of patches is acceptable, although merle is not accepted under the UK standard."
    }
  ],

  references: [
    "fci-polish-lowland-sheepdog-official-standard",
    "fci-polish-lowland-sheepdog-nomenclature",
    "royal-kennel-club-polish-lowland-sheepdog-breed-standard",
    "royal-kennel-club-polish-lowland-sheepdog-breed-information",
    "akc-polish-lowland-sheepdog-breed-standard",
    "akc-polish-lowland-sheepdog-health-testing",
    "akc-polish-lowland-sheepdog-history-article",
    "ucdavis-vgl-polish-lowland-sheepdog-genetic-diversity",
    "svensson-2016-pon-progressive-retinal-atrophy",
    "narfstrom-2007-pon-neuronal-ceroid-lipofuscinosis",
    "wikimedia-polish-lowland-sheepdog-pleple2000-rybnik",
    "wikimedia-polish-lowland-sheepdog-beltapar-storalvens-dione"
  ],

  evidence: {
    scientificName: {
      reliability: "unverified",
      sources: [],
      verifiedOn: null,
      note:
        "Canis lupus familiaris is the domestic-dog label used across the catalog; breed standards do not state it."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-lowland-sheepdog-nomenclature",
          role: "verified",
          locator: "Official names: POLSKI OWCZAREK NIZINNY; BERGER POLONAIS DE PLAINE; POLNISCHER NIEDERUNGSHÜTEHUND; PERRO DE PASTOR POLACO DE LAS LLANURAS"
        },
        {
          id: "akc-polish-lowland-sheepdog-history-article",
          role: "verified",
          locator: "Also known as the Polski Owczarek Nizinny, or PON"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Official names written in normal case rather than the nomenclature page's capitals."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-lowland-sheepdog-official-standard",
          role: "verified",
          locator: "FCI-CLASSIFICATION: Group 1 Sheepdogs and Cattle Dogs (except Swiss Cattle Dogs); Section 1 Sheepdogs; without working trial"
        },
        {
          id: "fci-polish-lowland-sheepdog-nomenclature",
          role: "verified",
          locator: "Group n°1; Section: Sheepdogs"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-lowland-sheepdog-official-standard",
          role: "verified",
          locator: "ORIGIN: Poland"
        },
        {
          id: "fci-polish-lowland-sheepdog-nomenclature",
          role: "verified",
          locator: "Country of origin: Poland"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The standards name only Poland; no specific region was confirmed."
    },

    "overview.summary": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-lowland-sheepdog-official-standard",
          role: "verified",
          locator: "GENERAL APPEARANCE; BEHAVIOUR/TEMPERAMENT; HAIR"
        },
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-standard",
          role: "verified",
          locator: "Characteristics; Temperament; Coat"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "overview.description": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-lowland-sheepdog-official-standard",
          role: "verified",
          locator: "GENERAL APPEARANCE; IMPORTANT PROPORTIONS; BEHAVIOUR/TEMPERAMENT; EYES; EARS; TAIL; HAIR; COLOUR; UTILIZATION"
        },
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-standard",
          role: "verified",
          locator: "Characteristics; Coat; Colour; Tail"
        },
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-information",
          role: "verified",
          locator: "History: often born without a tail"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Written in original wording from the standards."
    },

    "overview.history": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-polish-lowland-sheepdog-history-article",
          role: "verified",
          locator: "Central Asian ancestry; 1514 Scotland story; 1924 Warsaw show; WWII; Hryniewicz and Smok; 1959 Polish standard; 2001 AKC recognition"
        },
        {
          id: "ucdavis-vgl-polish-lowland-sheepdog-genetic-diversity",
          role: "verified",
          locator: "Breed history: Smok sired the first ten litters in the 1950s; all modern dogs trace to him; diversity among the lowest of breeds tested"
        },
        {
          id: "fci-polish-lowland-sheepdog-nomenclature",
          role: "verified",
          locator: "Date of acceptance on a definitive basis: 1963"
        },
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-information",
          role: "verified",
          locator: "History: dogs in Scotland from the 16th century"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "The AKC article gives 1959 for FCI recognition; the FCI nomenclature gives definitive acceptance in 1963, which is used here. The Scotland trade story is presented as tradition."
    },

    "overview.originalPurpose": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-lowland-sheepdog-official-standard",
          role: "verified",
          locator: "UTILIZATION: works like a sheepdog and guard dog"
        },
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-standard",
          role: "verified",
          locator: "Characteristics: herding and watch dog"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "overview.currentRoles": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-polish-lowland-sheepdog-official-standard",
          role: "cited",
          locator: "UTILIZATION: sheepdog, guard dog, companion in town"
        }
      ],
      verifiedOn: null,
      note: "Editorial summary of present-day uses."
    },

    "physical.sizeCategory": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-information",
          role: "verified",
          locator: "Breed characteristics: Size: Medium"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-lowland-sheepdog-official-standard",
          role: "verified",
          locator: "SIZE: Males 45 - 50 cm; Females 42 - 47 cm"
        },
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-standard",
          role: "verified",
          locator: "Size: Dogs 45-50 cm; bitches 42-47 cm"
        },
        {
          id: "akc-polish-lowland-sheepdog-breed-standard",
          role: "cited",
          locator: "Size, Proportion, Substance: 18 to 20 inches (dog), 17 to 19 inches (bitch)"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Stored in centimetres as published by the FCI and the Royal Kennel Club."
    },

    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The FCI, Royal Kennel Club and AKC standards publish no weight."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-information",
          role: "verified",
          locator: "Breed characteristics: Lifespan: Over 10 years"
        },
        {
          id: "ucdavis-vgl-polish-lowland-sheepdog-genetic-diversity",
          role: "cited",
          locator: "Health: average lifespan 12 to 14 years"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Stored as a lower bound of 10 years; the genetics laboratory report gives an average of 12 to 14 years."
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-lowland-sheepdog-official-standard",
          role: "verified",
          locator: "HAIR: coarse, dense, thick and profuse; soft undercoat; straight or slightly wavy"
        },
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-standard",
          role: "verified",
          locator: "Coat: long dense, shaggy thick coat of harsh texture with soft undercoat"
        },
        {
          id: "akc-polish-lowland-sheepdog-breed-standard",
          role: "verified",
          locator: "Coat: double coated"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "physical.coatLength": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-information",
          role: "verified",
          locator: "Breed characteristics: Coat length: Long"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-lowland-sheepdog-official-standard",
          role: "verified",
          locator: "COLOUR: All colours and patches are acceptable"
        },
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-standard",
          role: "verified",
          locator: "Colour: All colours other than merle, which is unacceptable"
        },
        {
          id: "akc-polish-lowland-sheepdog-breed-standard",
          role: "verified",
          locator: "Color: All coat colors are acceptable"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-information",
          role: "verified",
          locator: "Breed characteristics: Sheds: Yes"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "The source states only that the breed sheds; no level is graded."
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No standard or kennel-club source checked rates drooling for this breed."
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-lowland-sheepdog-official-standard",
          role: "verified",
          locator: "GENERAL APPEARANCE; IMPORTANT PROPORTIONS; EYES; EARS; TAIL; HAIR; SIZE"
        },
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-information",
          role: "verified",
          locator: "History: often born without a tail"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-polish-lowland-sheepdog-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-standard",
          role: "verified",
          locator: "Characteristics; Temperament"
        },
        {
          id: "akc-polish-lowland-sheepdog-breed-standard",
          role: "verified",
          locator: "Temperament: stable and self confident"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Traits paraphrased from the standards' temperament wording."
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-polish-lowland-sheepdog-official-standard",
          role: "cited",
          locator: "BEHAVIOUR/TEMPERAMENT; UTILIZATION"
        }
      ],
      verifiedOn: null,
      note: "Editorial 1–5 estimates. No published trait ratings were checked for this record."
    },

    "care.exercise.level": {
      reliability: "estimate",
      sources: [
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-information",
          role: "cited",
          locator: "Breed characteristics: Exercise: More than 2 hours per day"
        }
      ],
      verifiedOn: null,
      note: "Editorial description of exercise needs."
    },

    "care.exercise.minutesPerDay": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-information",
          role: "verified",
          locator: "Breed characteristics: Exercise: More than 2 hours per day"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Stored as a lower bound of 120 minutes; the source gives no maximum."
    },

    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General activity ideas for an active herding breed."
    },

    "care.grooming.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-information",
          role: "verified",
          locator: "Breed characteristics: Grooming: Every day"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.grooming.brushing": {
      reliability: "general_guidance",
      sources: [
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-information",
          role: "cited",
          locator: "Breed characteristics: Grooming: Every day"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.grooming.bathing": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General care advice for long, dense coats."
    },

    "care.grooming.notes": {
      reliability: "general_guidance",
      sources: [
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-standard",
          role: "cited",
          locator: "Coat: trimming to alter the natural outline not permitted"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.training": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-polish-lowland-sheepdog-official-standard",
          role: "cited",
          locator: "BEHAVIOUR/TEMPERAMENT; UTILIZATION"
        }
      ],
      verifiedOn: null,
      note: "Training guidance for a watchful, independent herding breed."
    },

    "care.training.difficulty": {
      reliability: "estimate",
      sources: [
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-standard",
          role: "cited",
          locator: "Characteristics: easy to train"
        }
      ],
      verifiedOn: null,
      note: "Editorial judgement."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No source checked rates flat or apartment living. The Royal Kennel Club lists a small house and a large garden."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-information",
          role: "verified",
          locator: "Breed characteristics: Size of home: Small house; Size of garden: Large garden"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General weather advice for a heavily coated dog."
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial judgement."
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General feeding advice for medium-sized, active adult dogs."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ucdavis-vgl-polish-lowland-sheepdog-genetic-diversity",
          role: "verified",
          locator: "Health conditions; genetic diversity conclusions and breeding recommendations"
        },
        {
          id: "svensson-2016-pon-progressive-retinal-atrophy",
          role: "verified",
          locator: "Conclusions: late-onset PRA; rcd4 mutation in the majority of cases tested"
        },
        {
          id: "narfstrom-2007-pon-neuronal-ceroid-lipofuscinosis",
          role: "verified",
          locator: "NCL described in nine Swedish PON dogs"
        },
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-information",
          role: "verified",
          locator: "Breed characteristics: Lifespan: Over 10 years; pre-breeding health screening"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ucdavis-vgl-polish-lowland-sheepdog-genetic-diversity",
          role: "verified",
          locator: "Health: hip dysplasia 16% (OFA, n=114); PRA; other conditions: hypothyroidism, cataracts, NCL, PDA"
        },
        {
          id: "svensson-2016-pon-progressive-retinal-atrophy",
          role: "verified",
          locator: "Late-onset PRA with slow progression; rcd4 in C2ORF71"
        },
        {
          id: "narfstrom-2007-pon-neuronal-ceroid-lipofuscinosis",
          role: "verified",
          locator: "Behavioural abnormalities, motor disturbances and visual impairment in affected dogs"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "The hip figure comes from dogs submitted to a screening registry and may not represent the whole breed. Hypothyroidism, cataracts and PDA are listed as reported only; no prevalence was found."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "ucdavis-vgl-polish-lowland-sheepdog-genetic-diversity",
          role: "cited",
          locator: "Breeding recommendations"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-information",
          role: "verified",
          locator: "Best Practice: BVA/KC/ISDS Eye Scheme; BVA/KC Hip Dysplasia Scheme; PRA (rcd4) DNA test recognised May 2026"
        },
        {
          id: "akc-polish-lowland-sheepdog-health-testing",
          role: "verified",
          locator: "Polish Lowland Sheepdog: Hip Evaluation; Ophthalmologist Evaluation"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "The rcd4 DNA test joins the UK Best Practice guidance from December 2026."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General dental care advice."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General ear care advice for hanging, heavily coated ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General skin care advice for dense coats."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-information",
          role: "cited",
          locator: "Breed characteristics: exercise, grooming, home and garden size"
        },
        {
          id: "fci-polish-lowland-sheepdog-official-standard",
          role: "cited",
          locator: "BEHAVIOUR/TEMPERAMENT; UTILIZATION"
        }
      ],
      verifiedOn: null,
      note: "Editorial suitability judgements."
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Depends heavily on the individual owner; no source checked gives a rating."
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No source checked rates flat or apartment living for this breed."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-polish-lowland-sheepdog-history-article",
          role: "verified",
          locator: "1514 Scotland voyage story; Psyche legend; 1965 first international show in Czechoslovakia"
        },
        {
          id: "ucdavis-vgl-polish-lowland-sheepdog-genetic-diversity",
          role: "verified",
          locator: "Smok sired the first ten litters; diversity among the lowest of breeds tested"
        },
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-information",
          role: "verified",
          locator: "Often born without a tail; dogs in Scotland from the 16th century"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "The Scotland trade story and the Psyche account are presented to users as tradition and legend, not as established fact."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-polish-lowland-sheepdog-official-standard",
          role: "verified",
          locator: "SIZE; COLOUR; BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-information",
          role: "verified",
          locator: "Breed characteristics; pre-breeding health screening"
        },
        {
          id: "royal-kennel-club-polish-lowland-sheepdog-breed-standard",
          role: "verified",
          locator: "Colour: merle unacceptable"
        },
        {
          id: "ucdavis-vgl-polish-lowland-sheepdog-genetic-diversity",
          role: "verified",
          locator: "Genetic diversity conclusions"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Family-life and training answers include general guidance alongside verified facts."
    }
  },

  updatedOn: "2026-11-17"
};
