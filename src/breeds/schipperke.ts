import type { Breed } from "../schema/breed.types";

export const schipperke: Breed = {
  slug: "schipperke",
  name: "Schipperke",
  scientificName: "Canis lupus familiaris",
  alternateNames: [],
  group: "Spitz-like small sheepdog; FCI Group 1, Section 1 (Sheepdogs)",
  origin: {
    country: "Belgium",
    region: null
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Schipperke.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Schipperke.jpg",
      title: "Schipperke.jpg",
      description: "Photograph of a Schipperke.",
      creator: "Jurriaan Schulman",
      uploader: "Denniss",
      capturedOn: null,
      uploadedOn: "2006-03-17",
      width: 600,
      height: 579,
      licenseId: "cc-by-sa-3.0",
      attribution: "Photo by Jurriaan Schulman, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-10-24"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Schipperke_dogs-pair.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Schipperke_dogs-pair.jpg",
      title: "Schipperke dogs-pair.jpg",
      description: "Two Schipperkes.",
      creator: "Pleple2000",
      uploader: "Masur",
      capturedOn: null,
      uploadedOn: "2009-09-25",
      width: 2250,
      height: 1780,
      licenseId: "cc-by-sa-3.0",
      attribution: "Photo by Pleple2000, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-10-24"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Schipperke_puppies.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Schipperke_puppies.jpg",
      title: "Schipperke puppies.jpg",
      description: "Schipperke puppies.",
      creator: "Cinvic",
      uploader: "Cinvic",
      capturedOn: "2023-06-11",
      uploadedOn: "2023-06-12",
      width: 2048,
      height: 2048,
      licenseId: "cc-by-sa-4.0",
      attribution: "Photo by Cinvic, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-10-24"
    }
  ],
  overview: {
    summary:
      "The Schipperke is a small, sturdy Belgian dog with a dense black coat, a distinctive neck ruff, a lively personality and a strong instinct to watch over its surroundings.",
    description:
      "Compact and nearly square in outline, the Schipperke combines the build of a small working sheepdog with the alert expression and energetic manner of a keen watchdog. Its pointed ears, wedge-shaped head, thick double coat and prominent ruff give it a recognisable silhouette. It is curious, quick to react to movement and often vocal when something unusual happens. Although small enough to fit many homes, it is an active dog that benefits from daily physical exercise, training and tasks that engage its mind.",
    history:
      "The breed developed in Belgium and has documented roots reaching back to the seventeenth century. Historical accounts associate it with working people in Brussels and describe its usefulness in catching rats and other vermin. It was exhibited in Spa in 1882, reached Britain and the United States in 1887, and had a breed standard drawn up in 1888. Its history connects small-scale guarding and vermin control with its later role as a household companion.",
    originalPurpose:
      "Small watchdog and companion, with a longstanding reputation for catching rats and other vermin.",
    currentRoles: [
      "Companion dog",
      "Watchdog and alert dog",
      "Agility and other dog sports",
      "Scent-based games and training activities",
      "Household vermin hunter where appropriate"
    ]
  },
  physical: {
    sizeCategory: "Small",
    height: {
      unit: "cm",
      male: {
        min: 27.9,
        max: 33.0
      },
      female: {
        min: 25.4,
        max: 30.5
      }
    },
    weight: {
      unit: null,
      male: null,
      female: null
    },
    lifespanYears: {
      min: 12,
      max: 16
    },
    coatType:
      "Dense double coat with a straight, firm outer coat and a thick, soft undercoat.",
    coatLength:
      "Short on the head and ears; medium and close-lying on the body, with longer hair forming a ruff, mane, frill and breeches.",
    coatColors: [
      "Black (the FCI breed standard colour)"
    ],
    sheddingLevel:
      "Seasonal shedding; shedding can become heavy once or twice a year.",
    droolingLevel: null,
    distinctiveFeatures: [
      "Small, upright, triangular ears",
      "Wedge-shaped head and alert expression",
      "Compact, sturdy, nearly square body",
      "Prominent ruff, mane and frill around the neck and chest",
      "Longer coat over the hindquarters forming breeches",
      "Natural tails may vary; some dogs are born with a short or absent tail"
    ]
  },
  temperament: {
    traits: [
      "Alert and watchful",
      "Curious and inquisitive",
      "Lively and energetic",
      "Confident and independent-minded",
      "Reserved with unfamiliar people",
      "Often vocal when alerting to activity",
      "Affectionate with familiar household members",
      "May chase small animals because of its vermin-hunting background"
    ],
    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 5,
      independence: 4,
      trainability: 3,
      barking: 5,
      energy: 4
    }
  },
  care: {
    exercise: {
      level: "Moderate to high for a small breed",
      minutesPerDay: null,
      activities: [
        "Daily walks with opportunities to explore",
        "Short training sessions and reward-based games",
        "Agility or other suitable dog sports",
        "Scent work and supervised search games",
        "Trick training and interactive enrichment",
        "Secure, supervised play"
      ]
    },
    grooming: {
      level: "Moderate; easy to maintain between seasonal sheds",
      brushing:
        "Brush at least weekly and more often when seasonal shedding increases. Check the ruff, breeches and undercoat for loose hair or tangles.",
      bathing:
        "Bathe when needed rather than on a rigid schedule, using a dog-appropriate shampoo and rinsing thoroughly.",
      notes: [
        "The coat's natural texture should be maintained; routine brushing is preferable to unnecessary trimming.",
        "Check nails regularly and trim them when needed.",
        "Inspect ears, teeth, skin and paw pads during routine grooming.",
        "Expect more loose coat during seasonal shedding periods."
      ]
    },
    training: {
      difficulty: "Moderate; the breed can be clever but independent",
      tips: [
        "Use short, consistent, reward-based sessions.",
        "Teach recall early and practise it in controlled environments before allowing greater freedom.",
        "Train a reliable quiet or settle cue to help manage alert barking.",
        "Provide puzzle games and tasks so the dog has appropriate outlets for its curiosity.",
        "Use secure fencing and a leash where small-animal chasing could create a risk.",
        "Avoid harsh handling; build cooperation through predictable, positive training."
      ],
      socialization:
        "Introduce the dog gradually and positively to different people, calm dogs, household sounds and everyday environments. Supervise interactions with children and small animals, and allow the dog space when it appears uncomfortable."
    },
    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: [
        "Can live in a range of climates with suitable shelter and care.",
        "In hot weather, provide shade, fresh water, ventilation and exercise during cooler parts of the day.",
        "In cold weather, provide a dry, sheltered resting place and monitor comfort during outdoor activity."
      ],
      aloneTimeTolerance: null
    }
  },
  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate to the dog's life stage, body condition and individual health needs.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null
    },
    guidelines:
      "Choose food labelled complete and balanced for the appropriate life stage. Measure portions, monitor body condition and adjust intake to maintain a healthy weight. Fresh water should always be available. Ask a veterinarian for individual guidance if the dog has a medical condition, changes weight unexpectedly or needs a therapeutic diet.",
    considerations: [
      "Adjust portions to activity level, age and body condition rather than relying on a generic amount.",
      "Use treats in moderation and account for them in daily intake.",
      "Introduce diet changes gradually unless a veterinarian advises otherwise.",
      "Discuss any persistent digestive problems, appetite changes or weight changes with a veterinarian."
    ],
    note:
      "The sources consulted do not establish a unique Schipperke-specific feeding formula or universal meal schedule. Individual calorie needs vary."
  },
  health: {
    overview:
      "Schipperkes can live into their teens, but breed health resources identify several inherited or monitored conditions. These include mucopolysaccharidosis type IIIB (MPS IIIB), epilepsy and Legg-Calve-Perthes disease; breed-club resources also discuss von Willebrand disease type 1 and the bobtail-associated mutation. Listing a condition does not mean it is common in every line or that an individual dog is affected. Ask for relevant health records and consult a veterinarian about screening appropriate to the dog's age and family history.",
    commonConditions: [
      "Mucopolysaccharidosis type IIIB (MPS IIIB), a serious inherited condition for which DNA testing is available",
      "Epilepsy, reported in breed health resources",
      "Legg-Calve-Perthes disease, a hip-joint condition discussed in breed health resources",
      "Patellar luxation, a condition for which screening is recommended",
      "Eye and thyroid disorders, addressed by breed screening guidance",
      "Von Willebrand disease type 1, discussed in breed-club health information",
      "Brachyury or bobtail-associated genetic variation, relevant to some breeding decisions"
    ],
    preventiveCare: [
      "Arrange routine veterinary examinations and age-appropriate preventive care.",
      "Discuss breed-relevant eye, patella, thyroid and hip screening with the breeder and veterinarian.",
      "Ask about MPS IIIB testing and the parents' results when considering a puppy or breeding dog.",
      "Maintain dental hygiene, nail care, parasite prevention and a healthy body condition.",
      "Seek veterinary advice promptly for changes in coordination, recurrent seizures, persistent lameness or unusual bleeding."
    ],
    recommendedScreenings: [
      "Eye examination by a qualified veterinary eye specialist",
      "Patella evaluation",
      "Thyroid evaluation",
      "Hip evaluation",
      "MPS IIIB DNA testing, particularly for breeding decisions",
      "Discuss cardiac evaluation and broader genetic testing with the breeder and veterinarian where appropriate"
    ],
    dentalCare:
      "Brush the teeth regularly with dog-specific toothpaste and arrange veterinary dental checks. Ask a veterinarian for a dental-care plan if there is persistent bad breath, gum redness, pain or difficulty eating.",
    earCare:
      "Check the ears regularly for redness, odour, discharge or irritation. Clean only when needed with a veterinarian-approved product, and seek advice if signs of discomfort or infection appear.",
    skinCare:
      "During brushing, check the skin and coat for irritation, parasites, lumps, debris or unusual hair loss. Seek veterinary advice for persistent itching, sores or changes in the coat."
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: true,
    idealFor: [
      "People who enjoy an alert, interactive and energetic small dog",
      "Households able to provide daily walks, training and mental enrichment",
      "Owners interested in agility, scent games or trick training",
      "People who appreciate a watchdog and can manage alert barking",
      "Homes prepared to manage a small dog's interest in chasing vermin"
    ],
    notIdealFor: [
      "People who require a consistently quiet dog and cannot work on barking",
      "Households expecting a highly compliant dog without consistent training",
      "Owners who cannot provide regular activity or mental stimulation",
      "Homes where small pets cannot be safely separated from a dog with chasing instincts",
      "People who plan to leave a dog alone for long periods without suitable care"
    ]
  },
  funFacts: [
    "The breed's history reaches back to seventeenth-century Belgium.",
    "Schipperkes were historically valued for catching rats and other vermin as well as guarding.",
    "The characteristic neck ruff, mane, frill and breeches create much of the breed's distinctive outline.",
    "Some Schipperkes are naturally born with a short or absent tail.",
    "The FCI standard classifies the Schipperke as a sheepdog, even though it is small in stature."
  ],
  faq: [
    {
      question: "How big does a Schipperke get?",
      answer:
        "The AKC lists typical heights of 11–13 inches for males and 10–12 inches for females, equivalent to approximately 27.9–33.0 cm and 25.4–30.5 cm. The FCI standard gives an overall weight range of 3–9 kg, with 4–7 kg sought after, but does not provide separate male and female weight ranges."
    },
    {
      question: "Are Schipperkes good family dogs?",
      answer:
        "They can be affectionate and engaging with their household, and the FCI standard describes them as gentle with children. As with any breed, children and dogs should be supervised together, children should be taught respectful handling, and the individual dog's temperament should guide introductions."
    },
    {
      question: "Do Schipperkes bark a lot?",
      answer:
        "They are naturally alert watchdogs and can bark readily when they notice movement or unfamiliar activity. Early training, appropriate enrichment and teaching a calm response to triggers can help, but prospective owners should be comfortable living with a vocal dog."
    },
    {
      question: "How much grooming does a Schipperke need?",
      answer:
        "Regular brushing, at least weekly, helps remove loose hair and maintain the double coat. Brushing more frequently during seasonal shedding can help manage the extra hair. Bathe when needed and check nails, ears, teeth and skin routinely."
    },
    {
      question: "What health tests should I ask a breeder about?",
      answer:
        "Ask for documented eye, patella, thyroid and hip screening, and discuss MPS IIIB DNA testing. Breed-club health resources also discuss other inherited concerns. Recommendations can change, so confirm current requirements with the relevant breed club and your veterinarian."
    },
    {
      question: "Can a Schipperke live in an apartment?",
      answer:
        "It can adapt to apartment life if its exercise, training and enrichment needs are met. Alert barking may be challenging in shared buildings, so work on calm behaviour and consider neighbours when deciding whether this environment is suitable."
    }
  ],
  references: [
    "fci-schipperke-standard",
    "fci-schipperke-nomenclature",
    "american-kennel-club-schipperke",
    "american-kennel-club-schipperke-health-statement",
    "schipperke-club-of-america-health-foundation",
    "schipperke-club-uk-health",
    "vdh-schipperke",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
    "wikimedia-schipperke-jurriaan-schulman",
    "wikimedia-schipperke-pair-pleple2000",
    "wikimedia-schipperke-puppies-cinvic"
  ],
  evidence: {
    alternateNames: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No separate alternate breed name was recorded because a sufficiently consistent alternate name was not established from the sources consulted."
    },
    scientificName: {
      reliability: "unverified",
      sources: [],
      verifiedOn: null,
      note:
        "Canis lupus familiaris is used as the general domestic-dog taxonomic name in this catalog; it is not a Schipperke-specific taxonomic designation."
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schipperke-standard",
          role: "verified",
          locator: "FCI classification"
        },
        {
          id: "fci-schipperke-nomenclature",
          role: "verified",
          locator: "Group 1, Section 1: Sheepdogs"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "The FCI classifies the Schipperke in Group 1, Sheepdogs and Cattledogs (except Swiss Cattledogs), Section 1, Sheepdogs, without a working trial."
    },
    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schipperke-standard",
          role: "verified",
          locator: "Origin"
        }
      ],
      verifiedOn: "2026-10-24",
      note: "The official standard states Belgium as the country of origin."
    },
    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The official standard identifies Belgium but does not establish a single precise region of origin."
    },
    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schipperke-standard",
          role: "verified",
          locator: "Utilization, Brief Historical Summary, General Appearance and Behaviour/Temperament"
        },
        {
          id: "american-kennel-club-schipperke",
          role: "verified",
          locator: "Breed profile and historical summary"
        },
        {
          id: "vdh-schipperke",
          role: "verified",
          locator: "Breed profile, personality, care and activity"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "The overview combines the FCI standard's historical, physical and temperament descriptions with kennel-club information about the breed's working history and current activities."
    },
    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schipperke-standard",
          role: "verified",
          locator: "General Appearance, Tail, Coat and Size and Weight"
        },
        {
          id: "american-kennel-club-schipperke",
          role: "verified",
          locator: "Height, weight, life expectancy and grooming"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "The overall conformation, coat and FCI-standard colour are based on Standard No. 83. Registry standards can differ on accepted colours, so the colour field explicitly describes the FCI standard."
    },
    "physical.height": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-schipperke",
          role: "verified",
          locator: "Average sizes: males 11–13 inches, females 10–12 inches"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "The AKC height ranges have been converted from inches to centimetres and rounded to one decimal place."
    },
    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The FCI gives a general range of 3–9 kg and says 4–7 kg is sought after, but does not give sex-specific ranges. The schema requires sex-specific ranges, so male and female values are left null rather than inferred."
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-schipperke",
          role: "verified",
          locator: "Life expectancy"
        }
      ],
      verifiedOn: "2026-10-24",
      note: "The AKC profile lists a life expectancy of 12–16 years."
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No sufficiently specific, reliable breed-level drooling assessment was established in the sources consulted."
    },
    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-schipperke",
          role: "verified",
          locator: "Grooming"
        },
        {
          id: "vdh-schipperke",
          role: "verified",
          locator: "Care and coat"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "The sources describe regular coat care and heavier seasonal shedding."
    },
    temperament: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-schipperke-standard",
          role: "verified",
          locator: "Behaviour/Temperament"
        },
        {
          id: "american-kennel-club-schipperke",
          role: "verified",
          locator: "Breed profile"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Traits reflect the standard's descriptions of an alert, active, inquisitive watchdog that is reserved with strangers and gentle with children, alongside the AKC's general breed profile."
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-schipperke-standard",
          role: "cited",
          locator: "Behaviour/Temperament"
        },
        {
          id: "american-kennel-club-schipperke",
          role: "cited",
          locator: "Breed traits and description"
        }
      ],
      verifiedOn: null,
      note:
        "The 1–5 scores are editorial estimates informed by breed descriptions, not measured scientific values. Individual dogs may differ."
    },
    care: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-schipperke",
          role: "verified",
          locator: "Grooming and breed description"
        },
        {
          id: "vdh-schipperke",
          role: "verified",
          locator: "Preferences, training, activity and coat care"
        },
        {
          id: "schipperke-club-of-america-health-foundation",
          role: "cited",
          locator: "Health and responsible ownership resources"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Breed-specific activity and grooming recommendations are informed by kennel-club descriptions. General care advice is identified separately where appropriate."
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted breed sources describe the Schipperke as active and needing regular activity, but do not establish a reliable universal daily minute range."
    },
    "care.livingEnvironment": {
      reliability: "general_guidance",
      sources: [
        {
          id: "vdh-schipperke",
          role: "cited",
          locator: "Activity, personality and care"
        },
        {
          id: "american-kennel-club-schipperke",
          role: "cited",
          locator: "Breed description"
        }
      ],
      verifiedOn: null,
      note:
        "Environmental suitability is practical guidance based on the breed's size, activity and alert barking, not a guarantee that every Schipperke will suit a particular home."
    },
    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-schipperke-standard",
          role: "cited",
          locator: "Coat"
        }
      ],
      verifiedOn: null,
      note:
        "Climate advice is general canine-care guidance informed by the breed's double coat; a breed-specific temperature tolerance was not established."
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A reliable breed-specific tolerance for time spent alone was not established in the sources consulted."
    },
    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-schipperke",
          role: "verified",
          locator: "Grooming"
        },
        {
          id: "vdh-schipperke",
          role: "verified",
          locator: "Coat care"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Grooming guidance follows kennel-club descriptions of the coat and regular brushing needs."
    },
    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vdh-schipperke",
          role: "verified",
          locator: "Activity, training and personality"
        },
        {
          id: "american-kennel-club-schipperke",
          role: "verified",
          locator: "Breed profile"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Training guidance accounts for the breed's activity, alertness and independent character. Specific techniques are practical recommendations rather than requirements in the breed standard."
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Global nutrition guidelines"
        }
      ],
      verifiedOn: null,
      note:
        "Nutrition guidance is general veterinary nutrition advice; no unique Schipperke-specific diet or universal portion amount was established."
    },
    "nutrition.feedingFrequency": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No breed-specific puppy, adult or senior meal frequency was established. Individual feeding schedules depend on age, health, food and veterinary advice."
    },
    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-schipperke",
          role: "verified",
          locator: "Health and recommended tests"
        },
        {
          id: "american-kennel-club-schipperke-health-statement",
          role: "verified",
          locator: "Health Testing Schipperkes"
        },
        {
          id: "schipperke-club-of-america-health-foundation",
          role: "verified",
          locator: "Health Testing Guidance and MPS IIIB Testing"
        },
        {
          id: "schipperke-club-uk-health",
          role: "verified",
          locator: "General Health Information and listed health conditions"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Health information distinguishes conditions reported by breed-health resources from recommended screening. No prevalence estimates are inferred from the presence of a condition on a list."
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-schipperke",
          role: "cited",
          locator: "Health and recommended health tests"
        },
        {
          id: "schipperke-club-of-america-health-foundation",
          role: "cited",
          locator: "Health Testing Guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Routine preventive-care suggestions combine general veterinary practice with breed-club screening information."
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "schipperke-club-of-america-health-foundation",
          role: "verified",
          locator: "Health Testing Guidance: eyes, patellas, thyroid, hips; MPS IIIB and cardiac testing"
        },
        {
          id: "american-kennel-club-schipperke",
          role: "verified",
          locator: "Recommended Health Tests From the National Breed Club"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "The list reflects current breed-health guidance consulted for this record. Older health statements may differ in which tests they list as required or recommended; breeders should confirm current requirements."
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "Pet dental care"
        }
      ],
      verifiedOn: null,
      note:
        "General preventive dental-care advice, not a Schipperke-specific dental diagnosis or risk claim."
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-schipperke",
          role: "cited",
          locator: "Grooming"
        }
      ],
      verifiedOn: null,
      note:
        "Routine ear inspection and veterinary-approved cleaning guidance; no breed-specific ear-disease prevalence is claimed."
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "vdh-schipperke",
          role: "cited",
          locator: "Coat care"
        }
      ],
      verifiedOn: null,
      note:
        "Routine skin and coat checks are general grooming guidance."
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "fci-schipperke-standard",
          role: "cited",
          locator: "Behaviour/Temperament and Utilization"
        },
        {
          id: "vdh-schipperke",
          role: "cited",
          locator: "Personality, activity and care"
        },
        {
          id: "american-kennel-club-schipperke",
          role: "cited",
          locator: "Breed profile"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability values are practical editorial assessments based on the breed's size, activity, alert barking and independence; they are not guarantees for individual dogs."
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted sources do not provide a definitive first-time-owner suitability rating."
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted sources do not provide a definitive suitability rating for senior owners."
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-schipperke-standard",
          role: "verified",
          locator: "Brief Historical Summary, Utilization, Coat and Tail"
        },
        {
          id: "vdh-schipperke",
          role: "verified",
          locator: "Breed profile"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "The listed facts are grounded in the FCI history, standard description and kennel-club breed information."
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-schipperke-standard",
          role: "verified",
          locator: "Size and Weight, Behaviour/Temperament, Coat and Brief Historical Summary"
        },
        {
          id: "american-kennel-club-schipperke",
          role: "verified",
          locator: "Height, life expectancy, grooming and health"
        },
        {
          id: "schipperke-club-of-america-health-foundation",
          role: "verified",
          locator: "Health Testing Guidance"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "FAQ answers synthesise the cited standard and breed-health resources; advice about individual dogs remains subject to veterinary guidance."
    }
  },
  updatedOn: "2026-10-24"
};
