import type { Breed } from "../schema/breed.types";

export const bloodhound: Breed = {
  slug: "bloodhound",
  name: "Bloodhound",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Chien de Saint-Hubert",
    "St. Hubert Hound",
    "Sleuth Hound"
  ],

  group:
    "FCI Group 6 — Scent Hounds and Related Breeds, Section 1.1 — Large-sized Hounds (working trial required)",

  origin: {
    country: "Belgium",
    region: "Ardennes, associated with the Abbey of Saint-Hubert"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bloodhound_Puppy.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Bloodhound_Puppy.jpg",
      title: "Bloodhound Puppy.jpg",
      description: "A Bloodhound puppy.",
      creator: "Meagan (Flickr account: Jakey Face)",
      uploader: "Ltshears, via Flickr Upload Bot",
      capturedOn: "2009-03-07",
      uploadedOn: "2012-09-13",
      width: 873,
      height: 1100,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Meagan (Flickr account: Jakey Face), via Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:Bloodhound_Puppy.jpg. License: https://creativecommons.org/licenses/by/2.0/. Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-10-19"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bloodhound_black_and_tan.JPG",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Bloodhound_black_and_tan.JPG",
      title: "Bloodhound black and tan.JPG",
      description: "A black-and-tan Bloodhound.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: null,
      uploadedOn: "2013-10-23",
      width: 630,
      height: 442,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Bloodhound_black_and_tan.JPG. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-19"
    }
  ],

  overview: {
    summary:
      "A large, powerful scent hound recognised for its exceptional tracking ability, long drooping ears, loose facial skin and calm, affectionate temperament.",

    description:
      "The Bloodhound is a large, substantial dog with a long head, deeply hanging ears, loose skin and a short, weather-resistant coat. Its exceptional ability to follow human and animal scent trails over long distances has made it valuable in tracking, search and recovery work. At home, it is often gentle and affectionate with people, but its independent scent-driven nature can make it difficult to recall when an interesting trail is found. Bloodhounds benefit from patient reward-based training, regular walks that allow safe sniffing, and a securely enclosed outdoor area. Owners should also be prepared for considerable drooling, vocal baying, large-dog food and care requirements, and daily hygiene around the ears and facial folds.",

    history:
      "The modern Bloodhound is closely associated with the Saint-Hubert hounds developed in the Ardennes region of Belgium. Historical accounts describe these dogs as scent hounds maintained by monks at the Abbey of Saint-Hubert for tracking and hunting. Hounds of this type later became established in England, where the breed developed further and became known for its ability to follow difficult scent trails. Bloodhounds have been used to track wounded game and to search for missing people. Although the breed has ancient historical roots, claims about its exact early ancestry are not fully documented.",

    originalPurpose:
      "A scent hound for following game trails and tracking wounded animals, with a long-established role in human scent trailing and search work.",

    currentRoles: [
      "Search and tracking work",
      "Human scent-trailing and missing-person searches where properly trained",
      "Tracking and trailing dog sports",
      "Scent-work and enrichment activities",
      "Hunting and trailing activities where lawful",
      "Family companion",
      "Supervised outdoor walking and exploration"
    ]
  },

  physical: {
    sizeCategory: "Large to Giant",

    height: {
      unit: "cm",
      male: {
        min: 64,
        max: 72
      },
      female: {
        min: 58,
        max: 66
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 46,
        max: 54
      },
      female: {
        min: 40,
        max: 48
      }
    },

    lifespanYears: {
      min: 10,
      max: 12
    },

    coatType:
      "Short, dense, close-lying and weather-resistant. The hair is softer and shorter around the head and ears, with somewhat coarser, slightly longer hair under the tail.",

    coatLength: "Short",

    coatColors: [
      "Black and tan",
      "Liver and tan",
      "Solid red",
      "A small amount of white may appear on the chest, toes or tail tip under breed-standard descriptions"
    ],

    sheddingLevel: "Moderate, with heavier seasonal shedding periods",

    droolingLevel: "High",

    distinctiveFeatures: [
      "Very long head that is narrow relative to its length",
      "Long, low-set, pendulous ears",
      "Loose, supple skin forming folds around the head and neck",
      "Deeply developed lips and hanging flews",
      "Large, powerful body with a rectangular outline",
      "Deep chest and strong bone structure",
      "Dark brown or hazel eyes, sometimes lighter depending on coat pattern",
      "Long tail carried in a sabre-like curve",
      "Short, dense, weather-resistant coat",
      "Exceptionally developed sense of smell and strong trailing instinct"
    ]
  },

  temperament: {
    traits: [
      "Gentle",
      "Affectionate",
      "Sociable",
      "Calm at home when appropriately exercised",
      "Patient with familiar people",
      "Strongly attached to family",
      "Independent",
      "Persistent when following a scent",
      "Sensitive to training methods",
      "Potentially stubborn",
      "Vocal, with a deep baying or howling voice",
      "Generally tolerant of other dogs when well socialised"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: 2,
      independence: 4,
      trainability: 3,
      barking: 4,
      energy: 3
    }
  },

  care: {
    exercise: {
      level: "Moderate, with daily sustained activity and scent enrichment",

      minutesPerDay: null,

      activities: [
        "Daily walks on a secure leash",
        "Longer walks suited to age, health and fitness",
        "Supervised sniffing and scent-exploration activities",
        "Structured tracking and trailing games",
        "Scent-work activities",
        "Calm outdoor exploration in safe areas",
        "Reward-based obedience exercises",
        "Secure-yard play and enrichment"
      ]
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush approximately weekly using a rubber grooming mitt, hound glove or suitable soft-to-medium bristle brush. Increase brushing during seasonal shedding. Grooming should also include regular checks of the ears, eyes, skin folds, paws and nails.",

      bathing:
        "Bathe when needed to remove dirt and manage coat odour. Use a dog-safe shampoo and rinse thoroughly. Clean facial and neck folds as appropriate and dry them carefully so moisture does not remain trapped against the skin.",

      notes: [
        "The short coat is relatively easy to maintain, but seasonal shedding can require more frequent brushing.",
        "Inspect the long, hanging ears regularly for redness, odour, wax build-up or discharge.",
        "Check the facial and neck folds frequently, gently clean soiled areas and dry thoroughly.",
        "Pay attention to damp skin around the lips, jowls and loose facial folds.",
        "Trim nails when needed and check the paws after outdoor exercise.",
        "Keep fresh water and suitable clean-up materials available because many Bloodhounds drool heavily.",
        "Brush teeth regularly with dog-specific toothpaste.",
        "Introduce grooming and handling calmly from an early age."
      ]
    },

    training: {
      difficulty:
        "Moderate to challenging. Bloodhounds can learn well with patient reward-based training, but scent-driven independence may compete with recall and obedience.",

      tips: [
        "Use positive reinforcement, food rewards and praise.",
        "Start puppy socialisation and basic training early.",
        "Practise recall consistently, but do not rely on it alone near wildlife or interesting scent trails.",
        "Use a secure leash and enclosed areas for exercise.",
        "Include scent games and tracking activities to channel natural abilities.",
        "Keep training sessions patient, clear and consistent.",
        "Reward attention to the handler before introducing stronger distractions.",
        "Teach calm behaviour and settling routines at home.",
        "Avoid harsh corrections; sensitive dogs may respond poorly to intimidating methods.",
        "Prepare for baying and howling by managing triggers and reinforcing appropriate quiet behaviours."
      ],

      socialization:
        "Provide gradual, positive exposure to different people, dogs, places, sounds and everyday handling. Supervise introductions to unfamiliar animals and children. Continue socialisation throughout adulthood while respecting the dog's individual response to new experiences."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [],

      aloneTimeTolerance:
        "Moderate, but many Bloodhounds prefer companionship. Teach alone-time skills gradually, ensure the dog has appropriate activity and enrichment, and avoid routinely leaving it isolated for long periods."
    }
  },

  nutrition: {
    dietType:
      "Complete and balanced dog food suited to a large-breed dog's life stage, body condition, activity level and individual health needs.",

    feedingFrequency: {
      puppy:
        "Several smaller meals daily, with frequency adjusted to the puppy's age, growth and veterinary guidance.",
      adult:
        "Two or three smaller meals daily may be preferable to one large meal, particularly because deep-chested dogs are at risk of gastric dilatation-volvulus.",
      senior:
        "Individualise meal frequency and portion size according to appetite, weight, activity, dental health and veterinary advice."
    },

    guidelines:
      "Measure food portions and use the food's feeding guidance as a starting point. Adjust the amount to maintain a healthy body condition, taking age, activity, food energy density and medical needs into account. Keep fresh water available. Because Bloodhounds are large and deep-chested, discuss ways to reduce gastric dilatation-volvulus risk with a veterinarian; avoid vigorous exercise around meals.",

    considerations: [
      "Avoid overfeeding and monitor body condition regularly.",
      "Use a nutritionally appropriate large-breed puppy diet during growth.",
      "Divide adult food into smaller meals rather than feeding one very large meal.",
      "Avoid vigorous exercise immediately before or after meals.",
      "Ask a veterinarian about gastric dilatation-volvulus risk and whether preventive gastropexy is appropriate for the individual dog.",
      "Count training treats as part of the daily food allowance.",
      "Prevent access to rubbish, unsafe food and objects the dog might swallow.",
      "Do not add supplements or change diets for joint health without veterinary advice.",
      "Adjust nutrition to the dog's actual body condition and health rather than relying only on a breed-average weight."
    ],

    note:
      "No universal daily food quantity is given because calorie needs vary by age, body condition, food energy density, activity and medical history. A veterinarian can help individualise portions and feeding practices."
  },

  health: {
    overview:
      "Bloodhounds can be affected by several health concerns associated with large size, deep chest, loose facial skin and hanging ears. Important issues include gastric dilatation-volvulus (GDV or bloat), hip and elbow dysplasia, ear infections and irritation within skin folds. Breed-club health surveys have also identified cancer among reported causes of death, although exact risks vary and some surveys involve limited numbers of dogs. Eye problems related to eyelid shape can occur as well. Health screening of breeding dogs and appropriate daily care help manage some risks, but neither guarantees that an individual dog will remain free of disease. GDV is a life-threatening emergency: a swollen abdomen, unproductive retching, restlessness or sudden abdominal discomfort requires immediate veterinary care.",

    commonConditions: [
      "Gastric dilatation-volvulus (GDV or bloat) — a life-threatening emergency in which the stomach expands and may twist. Large, deep-chested dogs are at risk.",
      "Hip dysplasia — a developmental abnormality of the hip joint that can contribute to pain, arthritis and impaired mobility.",
      "Elbow dysplasia — a group of developmental elbow-joint abnormalities that can cause pain, lameness and arthritis.",
      "Recurrent ear infections (otitis) — the hanging ears can reduce ventilation and retain moisture, creating conditions that favour inflammation and infection.",
      "Skin-fold dermatitis — moisture, friction and debris around the facial folds, lips and neck can contribute to irritation or infection.",
      "Eyelid abnormalities, including entropion or ectropion — eyelid position and loose surrounding skin can cause irritation or expose the eye surface.",
      "Cancer or neoplasia — reported in Bloodhound health surveys among important causes of death, but specific tumour types and the population-wide prevalence are not established by this record.",
      "Eye disorders associated with the structure of the eyelids and surrounding tissues; the exact condition and treatment depend on veterinary examination."
    ],

    preventiveCare: [
      "Schedule regular veterinary wellness checks and ask about the individual dog's joint, heart, eye and body-condition needs.",
      "Learn the warning signs of GDV, including abdominal enlargement, unproductive retching, restlessness and abdominal pain; seek emergency veterinary help immediately if suspected.",
      "Discuss feeding practices and preventive gastropexy with a veterinarian when appropriate for the individual dog.",
      "Maintain a healthy body weight to reduce avoidable stress on joints.",
      "Keep the ears clean and dry as advised by a veterinarian, especially after bathing or swimming.",
      "Inspect and gently clean facial and neck folds as needed, drying them thoroughly.",
      "Seek veterinary care for persistent ear odour, discharge, redness, squinting, eye discharge, skin irritation or lameness.",
      "Provide regular physical activity suited to age and health and avoid pushing an overweight or unfit dog into strenuous exercise.",
      "Keep vaccinations, parasite prevention and dental care appropriate to the dog's location, age and veterinary advice.",
      "Ask breeders for documented hip, elbow and cardiac evaluation results rather than relying only on verbal assurances."
    ],

    recommendedScreenings: [
      "Hip dysplasia evaluation for breeding dogs through an accepted programme such as OFA or an appropriate national equivalent.",
      "Elbow dysplasia evaluation for breeding dogs.",
      "Cardiac examination for breeding dogs, with the examiner and method selected according to current programme requirements and veterinary advice.",
      "Veterinary ophthalmic examination of breeding stock is encouraged in some national breed-health guidance; confirm the current local recommendation.",
      "Optional eye examination by a qualified veterinary ophthalmologist where indicated by breeding plans, family history or current guidance.",
      "Optional patellar luxation evaluation where indicated by the breeding-health programme.",
      "Optional degenerative myelopathy (DM) DNA testing may be considered within an appropriate breeding programme; discuss interpretation and relevance with a veterinarian or veterinary genetic counsellor.",
      "Screening recommendations differ by country and programme. Confirm the latest requirements with the relevant breed club or health-testing organisation before making breeding decisions."
    ],

    dentalCare:
      "Brush the teeth regularly with dog-specific toothpaste and an appropriate toothbrush. Large dogs still need routine oral care. Ask a veterinarian to assess persistent bad breath, gum inflammation, tartar, oral discomfort or changes in eating. Home brushing does not replace professional dental examinations.",

    earCare:
      "Check the ears regularly for redness, discharge, excess wax, odour or discomfort. Keep the ears clean and dry using a suitable veterinary-approved product when appropriate. Ask a veterinarian for guidance if infections recur, and do not insert cotton swabs or other objects deep into the ear canal.",

    skinCare:
      "Inspect facial folds, the lips, jowls and neck routinely. Gently remove dirt or moisture with an appropriate soft cloth or pet-safe product, then dry the area thoroughly. Look for redness, odour, sores or persistent irritation and seek veterinary advice if changes continue. Check the rest of the short coat for parasites, lumps or unusual hair loss."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Owners who enjoy scent games, tracking and outdoor walks",
      "Households able to manage a very large dog",
      "People who can provide a secure yard or other secure exercise options",
      "Owners who are comfortable with drooling, baying and a strong scent drive",
      "Families willing to supervise interactions with children",
      "People prepared for patient, consistent training and daily care of ears and facial folds",
      "Owners able to manage long-term food, veterinary and general care costs"
    ],

    notIdealFor: [
      "People seeking a small, quiet or low-drool companion",
      "Households unable to provide secure outdoor exercise",
      "Owners expecting reliable off-leash recall around interesting scents",
      "People who cannot manage a large, strong dog on a leash",
      "Homes where persistent baying or howling would create serious difficulties",
      "Owners unwilling to provide regular ear and skin-fold care",
      "Households routinely leaving the dog alone for long periods without adequate training or enrichment"
    ]
  },

  funFacts: [
    "The Bloodhound is also known as the Chien de Saint-Hubert.",
    "Its long ears and loose facial skin are among its most recognisable physical features.",
    "The breed is known for methodically following scent trails over long distances.",
    "Bloodhounds have been used for both animal tracking and human scent-trailing.",
    "Their deep voice can be expressed as baying or howling, not only ordinary barking.",
    "The coat is short, dense and weather-resistant rather than long or heavily feathered.",
    "Although commonly calm with familiar people, Bloodhounds can become highly persistent when following a scent.",
    "Its distinctive head and neck folds require regular attention to cleanliness and dryness."
  ],

  faq: [
    {
      question: "Where does the Bloodhound originate?",
      answer:
        "The breed is associated with Belgium, particularly the Ardennes region and the historic hounds linked with the Abbey of Saint-Hubert."
    },
    {
      question: "Why is the Bloodhound famous?",
      answer:
        "The breed is known for its exceptional sense of smell and ability to follow scent trails over long distances. It has been used to track animals and people and in properly trained search work."
    },
    {
      question: "How big does a Bloodhound get?",
      answer:
        "The FCI standard gives ideal heights of 68 cm for males and 62 cm for females, with a tolerance of 4 cm in either direction. It lists male weight at about 46–54 kg and female weight at 40–48 kg. Other kennel-club standards may give somewhat different ranges."
    },
    {
      question: "How long does a Bloodhound live?",
      answer:
        "A commonly published breed-level estimate is 10–12 years. Individual lifespan varies with genetics, health, environment and veterinary care."
    },
    {
      question: "Is a Bloodhound a good family dog?",
      answer:
        "Bloodhounds are often gentle and affectionate with familiar people and can live successfully with children when well socialised. Because they are very large and powerful, interactions with children should always be supervised."
    },
    {
      question: "How much exercise does a Bloodhound need?",
      answer:
        "It needs daily walks and opportunities to use its nose, explore safely and receive mental enrichment. Exercise should be adapted to age, fitness and medical condition; no single daily minute target is suitable for every Bloodhound."
    },
    {
      question: "Does a Bloodhound drool a lot?",
      answer:
        "Yes, heavy drooling is common for this breed. Owners should be prepared for saliva around the mouth, bedding, furniture and after drinking or eating."
    },
    {
      question: "Does a Bloodhound need a lot of grooming?",
      answer:
        "The short coat is relatively easy to maintain with regular brushing, but the ears and facial folds need frequent inspection and cleaning. Areas that become damp should be dried thoroughly."
    },
    {
      question: "Can a Bloodhound live in an apartment?",
      answer:
        "Apartment living can be challenging because of the dog's size, vocal baying, drooling and exercise needs. A secure outdoor area and a household prepared for these requirements are generally a better fit."
    },
    {
      question: "What health conditions should owners know about?",
      answer:
        "Important concerns include bloat or GDV, hip and elbow dysplasia, ear infections, skin-fold irritation and some eye disorders. Cancer has also been reported among important causes of death in breed surveys. These are risks to discuss with a veterinarian, not predictions that an individual dog will develop a disease."
    },
    {
      question: "What health checks should I ask a breeder about?",
      answer:
        "Ask for documented hip, elbow and cardiac evaluation results for breeding dogs. Depending on the programme, eye evaluations, patellar checks or degenerative myelopathy DNA testing may also be considered. Confirm current recommendations with the relevant breed club and veterinarian."
    },
    {
      question: "How can I reduce the risk of bloat?",
      answer:
        "Discuss feeding routines and risk-reduction options with a veterinarian. Smaller meals, avoiding vigorous exercise around mealtimes and learning the emergency signs can be helpful. If GDV is suspected, seek emergency veterinary care immediately."
    },
    {
      question: "Can a Bloodhound be trained to walk off-leash?",
      answer:
        "A Bloodhound may follow an interesting scent instead of responding to recall, even after training. Use a leash in unsecured areas and reserve off-leash activity for safely enclosed places."
    },
    {
      question: "What kind of food is suitable for a Bloodhound?",
      answer:
        "Choose complete and balanced food appropriate for a large-breed dog and its life stage. Portion size should be adapted to body condition, activity and health. Ask a veterinarian about feeding routine and GDV risk."
    }
  ],

  references: [
    "fci-bloodhound-official-standard",
    "american-kennel-club-bloodhound",
    "royal-kennel-club-bloodhound-standard",
    "akc-hound-group-health-testing-requirements",
    "american-bloodhound-club-recommended-health-tests",
    "american-bloodhound-club-ofa-statistics",
    "bloodhound-club-uk-health-information",
    "vcahospitals-bloodhound-profile",
    "petmd-bloodhound-health-care",
    "wikimedia-bloodhound-puppy-meagan",
    "wikimedia-bloodhound-black-and-tan-canarian"
  ],

  evidence: {
    scientificName: {
      reliability: "unverified",
      sources: [],
      verifiedOn: null,
      note:
        "Canis lupus familiaris is used as the general domestic-dog taxonomic label, not as a Bloodhound-specific scientific name. It was not independently checked against a taxonomy reference in this record."
    },

    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-bloodhound-official-standard",
          role: "verified",
          locator: "Title and historical summary"
        },
        {
          id: "american-kennel-club-bloodhound",
          role: "cited",
          locator: "Breed profile and common description"
        }
      ],
      verifiedOn: "2026-10-19",
      note: "Chien de Saint-Hubert is the official FCI name. Other names are historical or informal."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bloodhound-official-standard",
          role: "verified",
          locator: "FCI classification"
        }
      ],
      verifiedOn: "2026-10-19",
      note: "Uses the FCI classification; national kennel clubs may place the breed in differently named groups."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bloodhound-official-standard",
          role: "verified",
          locator: "Origin and brief historical summary"
        }
      ],
      verifiedOn: "2026-10-19",
      note: "Belgium is the country of origin recorded in the FCI standard."
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-bloodhound-official-standard",
          role: "verified",
          locator: "Utilization, historical summary, general appearance and temperament"
        },
        {
          id: "american-kennel-club-bloodhound",
          role: "cited",
          locator: "About the Breed, History and Care"
        },
        {
          id: "royal-kennel-club-bloodhound-standard",
          role: "cited",
          locator: "General appearance and temperament"
        }
      ],
      verifiedOn: "2026-10-19",
      note: "Historical ancestry is described conservatively because the exact early lineage is not fully documented."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bloodhound-official-standard",
          role: "verified",
          locator: "General appearance, coat, colour, size and weight"
        }
      ],
      verifiedOn: "2026-10-19",
      note: "The height ranges use the FCI ideal heights with the stated 4 cm tolerance. Weight ranges follow the FCI standard."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "petmd-bloodhound-health-care",
          role: "verified",
          locator: "Bloodhound lifespan"
        },
        {
          id: "american-kennel-club-bloodhound",
          role: "cited",
          locator: "Breed profile and care"
        }
      ],
      verifiedOn: "2026-10-19",
      note: "Published breed-level estimate, not a guarantee for an individual dog."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "petmd-bloodhound-health-care",
          role: "verified",
          locator: "Coat care and seasonal shedding"
        },
        {
          id: "american-kennel-club-bloodhound",
          role: "cited",
          locator: "Grooming"
        }
      ],
      verifiedOn: "2026-10-19",
      note: "Moderate shedding can increase during seasonal coat changes."
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bloodhound",
          role: "verified",
          locator: "About the Breed and drooling characteristics"
        },
        {
          id: "petmd-bloodhound-health-care",
          role: "cited",
          locator: "General breed characteristics"
        }
      ],
      verifiedOn: "2026-10-19",
      note: "High is a qualitative breed-trait rating, not a measured volume."
    },

    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-bloodhound-official-standard",
          role: "verified",
          locator: "Behaviour / temperament"
        },
        {
          id: "royal-kennel-club-bloodhound-standard",
          role: "cited",
          locator: "Temperament"
        },
        {
          id: "petmd-bloodhound-health-care",
          role: "cited",
          locator: "Personality and behaviour"
        }
      ],
      verifiedOn: "2026-10-19",
      note: "Breed tendencies do not guarantee the temperament of an individual dog."
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-bloodhound-official-standard",
          role: "cited",
          locator: "Behaviour / temperament"
        },
        {
          id: "american-kennel-club-bloodhound",
          role: "cited",
          locator: "Breed traits and characteristics"
        },
        {
          id: "petmd-bloodhound-health-care",
          role: "cited",
          locator: "Personality, training and vocalisation"
        }
      ],
      verifiedOn: null,
      note:
        "The 1–5 ratings are editorial estimates, not scientific measurements. The barking score reflects vocalisation including baying/howling; the official standard notes that the voice is deep but ordinary barking is relatively infrequent."
    },

    care: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bloodhound",
          role: "verified",
          locator: "Exercise, Training, Grooming and Nutrition"
        },
        {
          id: "petmd-bloodhound-health-care",
          role: "cited",
          locator: "Care guide, training, grooming and feeding"
        },
        {
          id: "vcahospitals-bloodhound-profile",
          role: "cited",
          locator: "Ideal home environment and daily care"
        }
      ],
      verifiedOn: "2026-10-19",
      note: "Care requirements are breed-oriented general guidance; individual needs vary with age and health."
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The sources support daily sustained walks and scent enrichment but do not provide a single reliable minute range suitable for all Bloodhounds."
    },

    "care.livingEnvironment.climates": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted breed-specific references do not establish a validated breed-level climate suitability list."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "vcahospitals-bloodhound-profile",
          role: "cited",
          locator: "Ideal home environment"
        },
        {
          id: "petmd-bloodhound-health-care",
          role: "cited",
          locator: "Vocal behaviour, exercise and secure outdoor space"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial estimate reflecting the breed's large size, vocalisation, need for activity and preference for secure outdoor space. Apartment suitability depends on the specific dog and household."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-bloodhound",
          role: "cited",
          locator: "Exercise and secure fencing"
        },
        {
          id: "vcahospitals-bloodhound-profile",
          role: "cited",
          locator: "Ideal home environment"
        }
      ],
      verifiedOn: null,
      note:
        "A secure yard provides space for supervised activity but cannot replace walks, training and human interaction."
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "estimate",
      sources: [
        {
          id: "vcahospitals-bloodhound-profile",
          role: "cited",
          locator: "Time-alone tolerance and preference for companionship"
        }
      ],
      verifiedOn: null,
      note: "Qualitative estimate, not a standardised behavioural measurement."
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "petmd-bloodhound-health-care",
          role: "cited",
          locator: "Nutrition, feeding frequency and GDV prevention"
        },
        {
          id: "american-kennel-club-bloodhound",
          role: "cited",
          locator: "Nutrition"
        }
      ],
      verifiedOn: null,
      note:
        "General canine nutrition guidance tailored to a large, deep-chested breed. It does not replace an individual veterinary feeding plan."
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "petmd-bloodhound-health-care",
          role: "verified",
          locator: "Bloodhound health issues"
        },
        {
          id: "vcahospitals-bloodhound-profile",
          role: "cited",
          locator: "Health considerations"
        },
        {
          id: "bloodhound-club-uk-health-information",
          role: "cited",
          locator: "Overall breed health, skin, musculoskeletal and eye health"
        }
      ],
      verifiedOn: "2026-10-19",
      note:
        "Health risks are described as reported or recognised concerns and not as diagnoses or guarantees for an individual dog."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "petmd-bloodhound-health-care",
          role: "verified",
          locator: "Hip and elbow dysplasia, ear infections, GDV and skin-fold dermatitis"
        },
        {
          id: "vcahospitals-bloodhound-profile",
          role: "verified",
          locator: "Health considerations"
        },
        {
          id: "bloodhound-club-uk-health-information",
          role: "verified",
          locator: "Overall breed health, cancer, gastric torsion, skin and eye conditions"
        }
      ],
      verifiedOn: "2026-10-19",
      note:
        "The list covers recognised or reported risks. Health-survey findings may be based on limited samples and should not be interpreted as universal prevalence."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-hound-group-health-testing-requirements",
          role: "verified",
          locator: "Bloodhound recommended health tests"
        },
        {
          id: "american-bloodhound-club-recommended-health-tests",
          role: "verified",
          locator: "Required and optional screening"
        },
        {
          id: "bloodhound-club-uk-health-information",
          role: "cited",
          locator: "Hip, elbow and eye-health testing"
        }
      ],
      verifiedOn: "2026-10-19",
      note:
        "Hip, elbow and cardiac evaluations are the basic US parent-club recommendations. Other evaluations depend on national guidance, the breeding plan and veterinary advice."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "petmd-bloodhound-health-care",
          role: "cited",
          locator: "GDV prevention and general health care"
        },
        {
          id: "vcahospitals-bloodhound-profile",
          role: "cited",
          locator: "Ear, skin-fold and joint health"
        }
      ],
      verifiedOn: null,
      note:
        "General preventive-care recommendations. They do not replace an examination or an individual veterinary treatment plan."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-bloodhound",
          role: "cited",
          locator: "Routine grooming and dental care"
        }
      ],
      verifiedOn: null,
      note: "General canine dental-care guidance."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "petmd-bloodhound-health-care",
          role: "cited",
          locator: "Ear infection risk and ear care"
        },
        {
          id: "american-kennel-club-bloodhound",
          role: "cited",
          locator: "Daily ear inspection"
        }
      ],
      verifiedOn: null,
      note: "General ear-care guidance tailored to the breed's long, hanging ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "petmd-bloodhound-health-care",
          role: "cited",
          locator: "Skin-fold care"
        },
        {
          id: "bloodhound-club-uk-health-information",
          role: "cited",
          locator: "Skin conditions"
        }
      ],
      verifiedOn: null,
      note: "General care guidance. Persistent irritation or infection requires veterinary advice."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-bloodhound",
          role: "cited",
          locator: "Temperament, exercise and training"
        },
        {
          id: "petmd-bloodhound-health-care",
          role: "cited",
          locator: "Family suitability, voice, exercise and training"
        },
        {
          id: "vcahospitals-bloodhound-profile",
          role: "cited",
          locator: "Ideal home environment and owner experience"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability is an editorial estimate. Space, vocal behaviour, size, training, health and the owner's capacity to provide care all affect the fit."
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No blanket breed-level yes/no rating is recorded because the fit depends on the individual's mobility, strength, experience and support."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-bloodhound-official-standard",
          role: "verified",
          locator: "Name, origin, history, utilisation and general appearance"
        },
        {
          id: "american-kennel-club-bloodhound",
          role: "cited",
          locator: "About the Breed"
        }
      ],
      verifiedOn: "2026-10-19",
      note: null
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-bloodhound-official-standard",
          role: "verified",
          locator: "Origin, utilisation, measurements, coat and temperament"
        },
        {
          id: "american-kennel-club-bloodhound",
          role: "verified",
          locator: "Life expectancy, care, exercise, grooming and nutrition"
        },
        {
          id: "petmd-bloodhound-health-care",
          role: "cited",
          locator: "Health issues, bloat prevention and feeding guidance"
        },
        {
          id: "american-bloodhound-club-recommended-health-tests",
          role: "cited",
          locator: "Breeding-health screening"
        }
      ],
      verifiedOn: "2026-10-19",
      note:
        "The FAQ uses standard and veterinary guidance while keeping measurement ranges tied to the stated registry standard and treating health concerns as risks rather than certainties."
    }
  },

  updatedOn: "2026-10-19"
};