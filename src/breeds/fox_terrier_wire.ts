import type { Breed } from "../schema/breed.types";

export const fox_terrier_wire: Breed = {
  slug: "fox-terrier-wire",
  name: "Fox Terrier (Wire)",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Wire Fox Terrier",
    "Fox-Terrier à poil dur",
    "Fox Terrier (Drahthaar)",
    "Fox Terrier de pelo alambre"
  ],

  group: "Terriers (Group 3, Section 1: Large and medium-sized Terriers)",

  origin: {
    country: "Great Britain",
    region: null
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/01_Wire_Fox_terrier.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:01_Wire_Fox_terrier.jpg",
      title: "01 Wire Fox terrier.jpg",
      description: "Fox Terrier",
      creator: "State Farm",
      uploader: "Frei sein",
      capturedOn: "2013-02-23",
      uploadedOn: "2014-03-08",
      width: 2307,
      height: 1656,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by State Farm, via Wikimedia Commons (originally posted to Flickr), CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:01_Wire_Fox_terrier.jpg. License: https://creativecommons.org/licenses/by/2.0/. Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fox_Terrier_Wire_R_01.JPG",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Fox_Terrier_Wire_R_01.JPG",
      title: "Fox Terrier Wire R 01.JPG",
      description: "Fox Terrier Wire dog show Racibórz",
      creator: "Małgorzata Miłaszewska (Lilly M)",
      uploader: "Lilly M",
      capturedOn: "2007-06-10",
      uploadedOn: "2007-06-27",
      width: 2710,
      height: 1814,
      licenseId: "cc-by-sa-2.5",
      attribution:
        "Photo by Małgorzata Miłaszewska (Lilly M), via Wikimedia Commons, CC BY-SA 2.5. Source: https://commons.wikimedia.org/wiki/File:Fox_Terrier_Wire_R_01.JPG. License: https://creativecommons.org/licenses/by-sa/2.5/. Changes, if any, must be indicated; adaptations must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17"
    }
  ],

  overview: {
    summary:
      "A compact, sharp-witted British terrier with a crisp, broken wire coat, a mostly white body with darker patches, and an eager, ready-for-anything attitude.",

    description:
      "The Wire Fox Terrier is a small, square-built working terrier that packs plenty of bone and muscle into a neat frame. Seen from the side it should look short in the back and balanced, with the height at the shoulder roughly matching the length of the body. Its signature feature is the coat: a dense, harsh, twisting outer layer over a shorter, softer undercoat, longest along the back and quarters and shortest on the shoulders, with crisp hair on the muzzle that gives the face a strong, bearded look. White is the main colour, broken up by black, tan, or black-and-tan patches. Small folded ears, dark keen eyes, a nearly flat skull and a high, upright tail complete the picture. At home it is friendly, outgoing and full of energy, but it keeps the quick reactions, curiosity and courage that suited it to hunting work.",

    history:
      "The breed grew out of the rough-coated working terriers used by British fox hunts, dogs expected to keep pace with the hounds and push a fox out of its earth. In the early days of dog shows, fox terriers of different coat types were exhibited together. During the 1870s wire-coated dogs were given their own classes, and breeding between the wire and smooth coats was discouraged from then on. Early breeders had sometimes used smooth-coated dogs to bring more white and a cleaner head into the wire line, but that practice ended long ago. The smooth type was established first and was the more popular of the two until around 1920, after which the Wire overtook it. In the 1930s a Wire Fox Terrier playing the dog Asta in the Thin Man films made the breed a fashionable family pet. The breed was accepted on a definitive basis by the international federation in 1955, and in the United States the Smooth and Wire were formally recognised as separate breeds in 1985. Today the Wire is best known as a companion and as a highly successful show dog, though the work involved in keeping its coat in show trim has made it less common than it once was.",

    originalPurpose:
      "Running with fox hunts and going to ground to bolt foxes from their earths.",

    currentRoles: [
      "Family companion",
      "Show dog",
      "Watchdog that announces visitors",
      "Partner for dog sports such as agility and earthdog-style tunnel work"
    ]
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "cm",
      male: {
        min: null,
        max: 39
      },
      female: null
    },

    weight: {
      unit: "kg",
      male: {
        min: 8.25,
        max: 8.25
      },
      female: null
    },

    lifespanYears: {
      min: 12,
      max: null
    },

    coatType:
      "Wire (broken) coat: a dense, very wiry outer coat with a shorter, softer undercoat; harsher on the back and quarters than on the sides",

    coatLength: "Medium",

    coatColors: [
      "White with black markings",
      "White with tan markings",
      "White with black and tan markings"
    ],

    sheddingLevel: "Sheds",

    droolingLevel: null,

    distinctiveFeatures: [
      "Height at the withers of no more than 39 cm in males; females slightly smaller",
      "Square, short-backed outline with height at the withers about equal to body length",
      "Wiry coat about 2 cm long on the shoulders, lengthening to about 4 cm on the withers, back, ribs and quarters",
      "Crisp hair on the jaws that gives the foreface a strong, bearded appearance",
      "Nearly flat topline of the skull, narrowing gradually towards the eyes",
      "Dark, fairly small eyes with a lively, intelligent expression",
      "Small V-shaped ears that fold over and drop forward close to the cheeks",
      "Strong jaws with a complete scissor bite",
      "Tail set high and carried upright, never curled over the back",
      "Round, compact feet with tough, well-cushioned pads"
    ]
  },

  temperament: {
    traits: [
      "Alert and quick to react",
      "Keen, eager expression",
      "Always ready for action",
      "Friendly",
      "Outgoing",
      "Fearless"
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 2,
      withStrangers: 3,
      protectiveness: 3,
      independence: 4,
      trainability: 3,
      barking: 4,
      energy: 5
    }
  },

  care: {
    exercise: {
      level:
        "High for its size; needs daily activity plus mental challenges to stay calm at home",

      minutesPerDay: {
        min: null,
        max: 60
      },

      activities: [
        "Brisk on-lead walks with time to sniff",
        "Fetch and tug games in a securely fenced area",
        "Agility, rally or trick training",
        "Scent games and food puzzles",
        "Tunnel or earthdog-style activities that use its hunting instincts",
        "A dedicated digging spot in the garden"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Brush and comb through the coat more than once a week, paying attention to the beard and leg hair where knots form.",

      bathing:
        "Bathe only when needed; frequent washing softens the harsh coat. Wipe the beard after meals to keep it clean.",

      notes: [
        "The traditional wire texture is kept by hand-stripping, which pulls out dead outer hair so new harsh coat can grow.",
        "Clipping is easier but leaves the coat softer and can change its colour and texture over time.",
        "Many owners use a professional groomer who knows terrier stripping, especially for a show-style outline.",
        "Trim the nails every few weeks and check the pads after outdoor play.",
        "Check the folded ears each week for dirt, wax or redness."
      ]
    },

    training: {
      difficulty:
        "Moderate to challenging; bright and quick to learn but independent, easily distracted by movement and prone to testing boundaries",

      tips: [
        "Use rewards, play and short, varied sessions rather than repetition.",
        "Start recall training early, but keep the dog on a lead or in a fenced area near wildlife and roads.",
        "Teach a calm 'quiet' cue to manage alert barking.",
        "Give digging and chasing urges a legal outlet such as tunnel games or a sand pit.",
        "Stay consistent with household rules; terriers notice and use any gaps.",
        "Avoid harsh handling, which tends to make a terrier more stubborn, not more cooperative."
      ],

      socialization:
        "Introduce the puppy to many people, calm adult dogs, everyday noises and handling from an early age. Supervised, positive meetings with other dogs help reduce the scrappy reactions some terriers show towards dogs they do not know."
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cold weather, with indoor living and extra protection soon after stripping or clipping",
        "Hot weather, with shade, fresh water and exercise in the cooler hours"
      ],

      aloneTimeTolerance:
        "Moderate for a well-exercised adult; long periods alone can lead to barking, digging or chewing."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced commercial or vet-formulated diet suited to a small, active adult dog, adjusted for age and activity.",

    feedingFrequency: {
      puppy:
        "Three to four small meals a day until about six months old, then two meals a day.",
      adult: "Two measured meals a day.",
      senior:
        "Two smaller meals a day, adjusted for lower activity and body condition."
    },

    guidelines:
      "Weigh or measure each meal and adjust the amount to keep a lean, fit shape where the ribs are easy to feel. Count training treats as part of the daily total and keep fresh water available at all times.",

    considerations: [
      "Avoid fatty table scraps and sudden high-fat treats, which can trigger stomach upsets.",
      "If itching, ear problems or loose stools come and go, ask a vet about a diet trial before changing foods repeatedly.",
      "Change foods gradually over about a week.",
      "Extra weight puts more strain on the knees."
    ],

    note:
      "Daily calorie needs vary with age, neutering status and activity. A vet can set a target weight and portion size for the individual dog."
  },

  health: {
    overview:
      "The Wire Fox Terrier is generally a sturdy, long-lived small breed, with a typical lifespan of more than 12 years. In a large owner survey from the UK, skin, coat and ear problems were the most frequently reported issues, mostly allergic skin disease, followed by lumps and tumours, digestive problems and eye conditions. Cancer was the most common cause of death in that survey, and degenerative myelopathy, a progressive disease of the spinal cord in older dogs, was also an important cause. Breed-specific inherited conditions include van den Ende-Gupta syndrome, a skeletal disorder present from birth, and primary lens luxation. DNA tests exist for both, and for the gene variant linked to degenerative myelopathy. Kneecap problems and heart checks are also part of recommended screening for breeding dogs.",

    commonConditions: [
      "Allergic skin disease (atopic dermatitis): itchy, inflamed skin, often with recurring ear infections; the most reported problem in a UK breed survey",
      "Ear inflammation (otitis externa), frequently linked with skin allergies",
      "Lumps and tumours, including benign fatty lumps (lipomas) and cancers; cancer was the leading cause of death in the UK survey, with the bladder the most often reported tumour site",
      "Degenerative myelopathy: a slowly progressive spinal cord disease of older dogs causing hind-limb weakness; a DNA test identifies dogs carrying the SOD1 risk variant, but not every at-risk dog develops the disease",
      "Van den Ende-Gupta syndrome: an inherited (autosomal recessive) skeletal disorder caused by a SCARF2 mutation, seen in puppies as a severe underbite and severe kneecap displacement",
      "Patellar luxation: the kneecap slips out of place, causing skipping or lameness",
      "Primary lens luxation: an inherited eye condition in which the lens moves out of position and can cause painful glaucoma; reported rarely in recent testing of the breed",
      "Digestive problems, including food intolerance and pancreatitis",
      "Arthritis in older dogs",
      "Dental disease"
    ],

    preventiveCare: [
      "Ask breeders for DNA results for van den Ende-Gupta syndrome, primary lens luxation and degenerative myelopathy, and for kneecap, heart and eye checks on the parents.",
      "Book an urgent vet visit for a suddenly red, painful or cloudy eye, which can signal lens luxation.",
      "Treat itching and ear problems early, and work with a vet to find allergy triggers.",
      "Check the skin regularly for new lumps and have any new or growing lump examined.",
      "Keep the dog lean to protect the knees and joints.",
      "Brush the teeth regularly and schedule dental checks.",
      "Keep up yearly health checks, vaccinations and parasite control."
    ],

    recommendedScreenings: [
      "Patella (kneecap) evaluation",
      "Cardiac examination",
      "Eye examination under an official eye scheme or by a veterinary ophthalmologist",
      "DNA test for van den Ende-Gupta syndrome (SCARF2)",
      "DNA test for primary lens luxation (ADAMTS17)",
      "DNA test for degenerative myelopathy risk (SOD1)"
    ],

    dentalCare:
      "Brush the teeth several times a week with dog toothpaste and have the mouth checked at each vet visit. Watch for a puppy whose lower jaw is clearly longer than the upper, which should be checked by a vet.",

    earCare:
      "Check the small folded ears weekly for wax, smell or redness and clean only with a vet-approved cleaner. Repeated ear infections are often a sign of an underlying skin allergy.",

    skinCare:
      "Part the coat during grooming to look for redness, scratching marks, lumps or parasites. Ongoing itching, licking of the paws or recurring hot spots are worth discussing with a vet, as allergic skin disease is common in the breed."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Active owners who enjoy daily walks, play and training",
      "Families with older, dog-savvy children",
      "People prepared to pay for, or learn, regular coat stripping",
      "Owners interested in dog sports or showing"
    ],

    notIdealFor: [
      "Homes with pet rodents, rabbits or other small animals",
      "Owners who want a quiet dog that rarely barks",
      "People who want reliable off-lead behaviour in open country",
      "Owners looking for a low-grooming dog",
      "Households where the dog would be alone for most of the day"
    ]
  },

  funFacts: [
    "The Wire Fox Terrier has won Best in Show at Westminster 15 times, more than any other breed; the first Wire winner was Ch. Matford Vic in 1915.",
    "A Wire Fox Terrier named Caesar, owned by King Edward VII of Britain, walked in the king's funeral procession in 1910.",
    "A Wire Fox Terrier played Asta in the 1930s Thin Man films, and the breed's popularity as a family pet soared as a result.",
    "In post-war Britain, many toddlers learned to walk holding a toy Wire Fox Terrier on a wheeled frame.",
    "In the United States, Smooth and Wire Fox Terriers were registered as one breed for a century before being recognised as separate breeds in 1985."
  ],

  faq: [
    {
      question: "How big does a Wire Fox Terrier get?",
      answer:
        "Males should stand no more than 39 cm at the withers, with females slightly smaller. The ideal show weight for a male is 8.25 kg, and females are a little lighter."
    },
    {
      question: "How long do Wire Fox Terriers live?",
      answer:
        "They are a long-lived breed, typically living more than 12 years with good care."
    },
    {
      question: "What is the difference between the Wire and Smooth Fox Terrier?",
      answer:
        "They share the same build, size and character. The Wire has a harsh, broken coat with a beard and leg furnishings that needs regular stripping, while the Smooth has a short, flat coat that is much easier to care for."
    },
    {
      question: "Does a Wire Fox Terrier need professional grooming?",
      answer:
        "The coat needs brushing more than once a week, plus stripping every so often to remove dead hair. Many owners use a groomer experienced with terriers. Clipping is simpler but softens the coat and can fade its colour."
    },
    {
      question: "Do Wire Fox Terriers shed?",
      answer:
        "Yes, they do shed. Regular brushing and stripping remove dead hair before it ends up around the house."
    },
    {
      question: "Are Wire Fox Terriers good with children?",
      answer:
        "They are friendly and playful and can be great with respectful older children. Their energy and quick reactions mean play with toddlers should always be supervised."
    },
    {
      question: "Can a Wire Fox Terrier live with cats or small pets?",
      answer:
        "They were bred to hunt, so most have a strong urge to chase. Some live peacefully with a cat they were raised with, but they are not a safe match for rodents, rabbits or birds."
    },
    {
      question: "How much exercise does a Wire Fox Terrier need?",
      answer:
        "Plan on up to about an hour of activity a day, combined with training games or puzzles to keep the mind busy."
    },
    {
      question: "What health tests should a breeder do?",
      answer:
        "Good breeders check the kneecaps, heart and eyes of parent dogs and use DNA tests for van den Ende-Gupta syndrome, primary lens luxation and degenerative myelopathy."
    },
    {
      question: "What health problems are most common in the breed?",
      answer:
        "Itchy, allergic skin and ear problems are the issues owners report most. Lumps and tumours, digestive upsets, eye conditions and spinal cord disease in older age also occur."
    }
  ],

  references: [
    "fci-fox-terrier-wire-official-standard",
    "fci-fox-terrier-wire-nomenclature",
    "royal-kennel-club-fox-terrier-wire-breed-standard",
    "royal-kennel-club-fox-terrier-wire-breed-information",
    "akc-wire-fox-terrier-breed-standard",
    "akc-wire-fox-terrier-health-testing",
    "wire-fox-terrier-breed-health-conservation-plan-2020",
    "hytonen-2016-canine-rare-bone-diseases-vdegs",
    "american-fox-terrier-club-breed-standards-history",
    "akc-westminster-fun-facts",
    "wikimedia-fox-terrier-wire-state-farm-01",
    "wikimedia-fox-terrier-wire-lilly-m-r01"
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
          id: "fci-fox-terrier-wire-nomenclature",
          role: "verified",
          locator: "Official names: FOX-TERRIER A POIL DUR; FOX TERRIER (DRAHTHAAR); FOX TERRIER DE PELO ALAMBRE"
        },
        {
          id: "akc-wire-fox-terrier-breed-standard",
          role: "verified",
          locator: "Title: Official Standard of the Wire Fox Terrier"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Official names are written in normal title case rather than the nomenclature page's capitals."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-fox-terrier-wire-official-standard",
          role: "verified",
          locator: "FCI-CLASSIFICATION: Group 3 Terriers, Section 1 Large and medium-sized Terriers"
        },
        {
          id: "fci-fox-terrier-wire-nomenclature",
          role: "verified",
          locator: "Group n°3 Terriers; Section: Large and medium sized Terriers"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "FCI lists a working trial only for countries that have applied for one."
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-fox-terrier-wire-official-standard",
          role: "verified",
          locator: "ORIGIN: Great Britain"
        },
        {
          id: "fci-fox-terrier-wire-nomenclature",
          role: "verified",
          locator: "Country of origin: Great Britain"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No standard names a region. The parent club says ancestors were likely rough-coated terriers from Wales, Derbyshire and Durham, but presents this as probable, not established."
    },

    "overview.summary": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-fox-terrier-wire-official-standard",
          role: "verified",
          locator: "GENERAL APPEARANCE; COAT; COLOUR; BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-standard",
          role: "verified",
          locator: "Characteristics; Temperament; Coat; Colour"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "overview.description": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-fox-terrier-wire-official-standard",
          role: "verified",
          locator: "GENERAL APPEARANCE; HEAD; EYES; EARS; TAIL; COAT; COLOUR; BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-standard",
          role: "verified",
          locator: "General Appearance; Coat; Colour; Ears; Tail; Temperament"
        },
        {
          id: "akc-wire-fox-terrier-breed-standard",
          role: "cited",
          locator: "Coat; Temperament"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Written in original wording from the standards' descriptions."
    },

    "overview.history": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-information",
          role: "verified",
          locator: "History: early classes shown together; separate Wire classes in the 1870s; Smooth more popular until 1920; trimming demands"
        },
        {
          id: "american-fox-terrier-club-breed-standards-history",
          role: "verified",
          locator: "History: Smooth crosses for white and cleaner head; Thin Man and Asta in the 1930s; separate AKC recognition in 1985"
        },
        {
          id: "fci-fox-terrier-wire-nomenclature",
          role: "verified",
          locator: "Date of acceptance on a definitive basis by the FCI: 1955"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "overview.originalPurpose": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-information",
          role: "verified",
          locator: "History: hunt terrier ancestry"
        },
        {
          id: "american-fox-terrier-club-breed-standards-history",
          role: "verified",
          locator: "History: work with foxhound packs"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "overview.currentRoles": {
      reliability: "estimate",
      sources: [
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-information",
          role: "cited",
          locator: "History: companion and show presentation"
        },
        {
          id: "akc-westminster-fun-facts",
          role: "cited",
          locator: "Wire Fox Terrier Best in Show record"
        }
      ],
      verifiedOn: null,
      note: "Editorial summary of the breed's present-day uses."
    },

    "physical.sizeCategory": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-information",
          role: "verified",
          locator: "Breed characteristics: Size: Small"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-fox-terrier-wire-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Height at the withers not exceeding 39 cm in dogs, females slightly less"
        },
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-standard",
          role: "verified",
          locator: "Size: Height at withers not exceeding 39 cms (15½ ins) in dogs, bitches slightly less"
        },
        {
          id: "akc-wire-fox-terrier-breed-standard",
          role: "cited",
          locator: "Size, Proportion, Substance: should not exceed 15½ inches at the withers"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Male maximum stored in centimetres as published by the FCI. No standard sets a minimum height."
    },

    "physical.height.female.max": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The standards say only that females are slightly less than 39 cm; no number is published."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-fox-terrier-wire-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Ideal weight in show condition 8,25 kg for males, females slightly less"
        },
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-standard",
          role: "conflicting",
          locator: "Size: Ideal weight in show condition 8 kgs (18 lbs) for dogs, bitches slightly less"
        },
        {
          id: "akc-wire-fox-terrier-breed-standard",
          role: "cited",
          locator: "Size, Proportion, Substance: 18 pounds in show condition; bitch some two pounds less, with a margin of one pound either way"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "A single ideal show weight for males (8.25 kg) is stored as both min and max. The Royal Kennel Club standard gives 8 kg instead."
    },

    "physical.weight.female.max": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The FCI and Royal Kennel Club standards say only that females are slightly lighter; no kilogram value is published."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-information",
          role: "verified",
          locator: "Breed characteristics: Lifespan: Over 12 years"
        },
        {
          id: "wire-fox-terrier-breed-health-conservation-plan-2020",
          role: "cited",
          locator: "2020 survey: average age at death 11.3 years (range 2–18); 2004 survey (both Fox Terrier breeds): median 13 years 2 months"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Stored as a lower bound only; no reliable upper value was found."
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-fox-terrier-wire-official-standard",
          role: "verified",
          locator: "HAIR: dense, very wiry texture; short, softer undercoat; back and quarters harsher than sides"
        },
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-standard",
          role: "verified",
          locator: "Coat"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "physical.coatLength": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-information",
          role: "verified",
          locator: "Breed characteristics: Coat length: Medium"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-fox-terrier-wire-official-standard",
          role: "verified",
          locator: "COLOUR: White predominates with black, black and tan or tan markings"
        },
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-standard",
          role: "verified",
          locator: "Colour: White predominates with black, tan, or black and tan markings"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Brindle, red, liver or slate-blue markings are undesirable under both standards."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-information",
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
          id: "fci-fox-terrier-wire-official-standard",
          role: "verified",
          locator: "GENERAL APPEARANCE; HEAD; EYES; EARS; JAWS/TEETH; TAIL; FEET; HAIR; SIZE AND WEIGHT"
        },
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-standard",
          role: "verified",
          locator: "Ears; Tail; Coat; Size"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-fox-terrier-wire-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-standard",
          role: "verified",
          locator: "Characteristics; Temperament"
        },
        {
          id: "akc-wire-fox-terrier-breed-standard",
          role: "verified",
          locator: "Temperament"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Traits paraphrased from the standards' temperament wording."
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-fox-terrier-wire-official-standard",
          role: "cited",
          locator: "BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-information",
          role: "cited",
          locator: "Breed characteristics: exercise"
        }
      ],
      verifiedOn: null,
      note: "Editorial 1–5 estimates. No published trait ratings were checked for this record."
    },

    "care.exercise.level": {
      reliability: "estimate",
      sources: [
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-information",
          role: "cited",
          locator: "Breed characteristics: Exercise: Up to 1 hour per day"
        }
      ],
      verifiedOn: null,
      note: "Editorial description of exercise needs."
    },

    "care.exercise.minutesPerDay": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-information",
          role: "verified",
          locator: "Breed characteristics: Exercise: Up to 1 hour per day"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Stored as an upper bound of 60 minutes; the source gives no minimum."
    },

    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General activity ideas for an energetic small terrier."
    },

    "care.grooming.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-information",
          role: "verified",
          locator: "Breed characteristics: Grooming: More than once a week"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Rated High because grooming is needed more than once a week plus coat stripping."
    },

    "care.grooming.brushing": {
      reliability: "general_guidance",
      sources: [
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-information",
          role: "cited",
          locator: "Breed characteristics: Grooming: More than once a week"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "care.grooming.bathing": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General care advice for harsh wire coats."
    },

    "care.grooming.notes": {
      reliability: "general_guidance",
      sources: [
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-information",
          role: "cited",
          locator: "History: demands of trimming and presentation"
        }
      ],
      verifiedOn: null,
      note: "Hand-stripping versus clipping is general wire-coat grooming practice."
    },

    "care.training": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-fox-terrier-wire-official-standard",
          role: "cited",
          locator: "BEHAVIOUR/TEMPERAMENT"
        }
      ],
      verifiedOn: null,
      note: "Training guidance for an alert, independent hunting terrier."
    },

    "care.training.difficulty": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial judgement."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No source checked rates flat or apartment living. The Royal Kennel Club lists the smallest suitable home as a small house."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-information",
          role: "verified",
          locator: "Breed characteristics: Size of home: Small house; Size of garden: Small/medium garden"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General weather advice for a small, wire-coated dog."
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
      note: "General feeding advice for small, active adult dogs."
    },

    "nutrition.considerations": {
      reliability: "general_guidance",
      sources: [
        {
          id: "wire-fox-terrier-breed-health-conservation-plan-2020",
          role: "cited",
          locator: "2020 survey: digestive conditions (food intolerance, pancreatitis); musculoskeletal (luxating patella)"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "wire-fox-terrier-breed-health-conservation-plan-2020",
          role: "verified",
          locator: "Breed-specific health survey 2020: condition categories, causes of death; DNA tests listed"
        },
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-information",
          role: "verified",
          locator: "Breed characteristics: Lifespan: Over 12 years"
        },
        {
          id: "hytonen-2016-canine-rare-bone-diseases-vdegs",
          role: "verified",
          locator: "Van den Ende-Gupta syndrome in Wire Fox Terriers (SCARF2)"
        },
        {
          id: "akc-wire-fox-terrier-health-testing",
          role: "verified",
          locator: "Wire Fox Terrier: Patella Evaluation; Cardiac Exam"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "wire-fox-terrier-breed-health-conservation-plan-2020",
          role: "verified",
          locator: "2020 survey (1,070 dogs) and 2014 survey results; causes of death; MyDogDNA results for VDEGS, DM and PLL"
        },
        {
          id: "hytonen-2016-canine-rare-bone-diseases-vdegs",
          role: "verified",
          locator: "Wire Fox Terrier skeletal syndrome: SCARF2 deletion, severe underbite and patellar luxation"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Survey data are owner-reported and come from UK dogs. The list name follows the schema; it does not mean every condition is common."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "wire-fox-terrier-breed-health-conservation-plan-2020",
          role: "cited",
          locator: "Health priorities and DNA tests"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-wire-fox-terrier-health-testing",
          role: "verified",
          locator: "Wire Fox Terrier: Patella Evaluation; Cardiac Exam"
        },
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-information",
          role: "verified",
          locator: "Pre-breeding health screening: Eye testing using the BVA/KC/ISDS Eye Scheme"
        },
        {
          id: "wire-fox-terrier-breed-health-conservation-plan-2020",
          role: "verified",
          locator: "DNA tests available: VDEGS, PLL, DM (none Kennel Club recognised)"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "The three DNA tests are available from commercial laboratories but are not Kennel Club recognised tests."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "hytonen-2016-canine-rare-bone-diseases-vdegs",
          role: "cited",
          locator: "Severe underbite as an early sign of van den Ende-Gupta syndrome"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "wire-fox-terrier-breed-health-conservation-plan-2020",
          role: "cited",
          locator: "2014 survey: otitis externa; allergic skin disease"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "wire-fox-terrier-breed-health-conservation-plan-2020",
          role: "cited",
          locator: "Allergic skin disease as a breed health concern"
        }
      ],
      verifiedOn: null,
      note: null
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "fci-fox-terrier-wire-official-standard",
          role: "cited",
          locator: "BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-information",
          role: "cited",
          locator: "Breed characteristics: exercise, grooming, home size"
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
          id: "akc-westminster-fun-facts",
          role: "verified",
          locator: "Wire Fox Terriers have won Best In Show at Westminster 15 times; first winner Ch Matford Vic, 1915"
        },
        {
          id: "american-fox-terrier-club-breed-standards-history",
          role: "verified",
          locator: "History: Caesar and King Edward VII's 1910 funeral; Thin Man and Asta; 1885 first registration; 1985 separate recognition"
        },
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-information",
          role: "verified",
          locator: "Post-war toy Wire Fox Terrier on a wheeled frame"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "The breed club history page gives 13 Westminster wins; the more recently updated kennel-club article gives 15, which is used here."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-fox-terrier-wire-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT; HAIR"
        },
        {
          id: "royal-kennel-club-fox-terrier-wire-breed-information",
          role: "verified",
          locator: "Breed characteristics: lifespan, exercise, grooming, sheds"
        },
        {
          id: "akc-wire-fox-terrier-health-testing",
          role: "verified",
          locator: "Patella Evaluation; Cardiac Exam"
        },
        {
          id: "wire-fox-terrier-breed-health-conservation-plan-2020",
          role: "verified",
          locator: "Survey findings and DNA tests"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Grooming method and child or small-pet answers include general guidance alongside verified facts."
    }
  },

  updatedOn: "2026-11-17"
};
