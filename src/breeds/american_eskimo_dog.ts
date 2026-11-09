import type { Breed } from "../schema/breed.types";

export const american_eskimo_dog: Breed = {
  slug: "american-eskimo-dog",
  name: "American Eskimo Dog",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Eskie",
    "American Spitz",
    "German Spitz",
    "White German Spitz",
    "Spitz"
  ],

  group:
    "Non-Sporting Dogs; also classified in the Northern Breed and Companion Dog groups",

  origin: {
    country: "United States",
    region:
      "Midwestern United States (developed from German Spitz dogs brought by German immigrants to Ohio, Indiana, and Wisconsin)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/American_Eskimo_Dog_1.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:American_Eskimo_Dog_1.jpg",
      title: "American Eskimo Dog 1.jpg",
      description: "An adult American Eskimo Dog standing outdoors in grass.",
      creator: "timquinn",
      uploader: "Flickr upload bot",
      capturedOn: "2007-06-10",
      uploadedOn: "2007-07-28",
      width: 2816,
      height: 2112,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by timquinn, Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:American_Eskimo_Dog_1.jpg. License: https://creativecommons.org/licenses/by/2.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/American_Eskimo_Dog_2.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:American_Eskimo_Dog_2.jpg",
      title: "American Eskimo Dog 2.jpg",
      description: "An adult American Eskimo Dog in profile outdoors.",
      creator: "timquinn",
      uploader: "Flickr upload bot",
      capturedOn: "2007-06-10",
      uploadedOn: "2007-07-28",
      width: 2816,
      height: 2112,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by timquinn, Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:American_Eskimo_Dog_2.jpg. License: https://creativecommons.org/licenses/by/2.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08"
    }
  ],

  overview: {
    summary:
      "A bright, agile, and alert white Nordic spitz companion developed in the American Midwest, celebrated for its stand-off double coat, keen intelligence, watchdog vigilance, and history as a celebrated trick performer.",

    description:
      "The American Eskimo Dog is a well-balanced, agile spitz-type companion that combines beauty with athletic versatility. Built with a compact, rectangular frame, the dog presents an alert and proud carriage. Its striking stand-off double coat consists of a dense, woolly undercoat beneath a straight, harsh outer coat that forms a pronounced lion-like ruff around the neck and chest, feathering along the legs, and a profusely plumed tail curled over the back. The wedge-shaped, fox-like head is accentuated by jet-black pigment on the nose, lips, and eye rims, contrasting brilliantly with the glistening white or biscuit-cream fur. Occurring in three distinct size categories that share identical proportions, the dog is famously affectionate, eager to please, and deeply devoted to its family, possessing remarkable agility, quick learning ability, and a natural instinct to sound a warning bark when visitors approach.",

    history:
      "The breed descends from the German Spitz, brought to the United States during the nineteenth century by German immigrants settling across the agricultural communities of Ohio, Indiana, Wisconsin, and the Midwest. These versatile white spitz dogs served on farms as watchful multi-purpose farm dogs, ratters, and devoted companions. In the early twentieth century, their exceptional intelligence and dazzling appearance caught the attention of traveling circuses, vaudeville troupes, and the entertainment industry. Prominent among these performers was a dog named Pierre, who gained nationwide fame with the Barnum and Bailey Circus as a tightrope walker. Following anti-German sentiment during the First World War, American breeders and dog enthusiasts renamed the breed the American Eskimo Dog after a prominent kennel in Ohio, despite having no historical connection to indigenous northern peoples. The breed achieved formal recognition in three size varieties, flourishing as a beloved companion and competitive dog sports participant.",

    originalPurpose:
      "All-around farm watchdog, ratter, family companion, and theatrical circus trick performer.",

    currentRoles: [
      "Devoted household companion and family pet",
      "Alert watchdog for home and property",
      "Canine athlete in agility, trick dog, rally, and obedience trials",
      "Therapy and emotional support visiting dog",
      "Fast-running and scent-work participant"
    ]
  },

  physical: {
    sizeCategory: "Small to medium",

    height: {
      unit: "in",
      male: {
        min: 9,
        max: 19
      },
      female: {
        min: 9,
        max: 19
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 6,
        max: 35
      },
      female: {
        min: 6,
        max: 35
      }
    },

    lifespanYears: {
      min: 13,
      max: 15
    },

    coatType:
      "Thick, stand-off double coat with a dense, soft undercoat and a straight, harsh outer coat that stands out from the body without wave or curl; abundant ruff around the neck and chest, feathering on forelegs and thighs, and a profusely plumed tail.",

    coatLength: "Medium",

    coatColors: [
      "Pure white",
      "White with biscuit cream"
    ],

    sheddingLevel:
      "High year-round shedding with heavy seasonal coat blowing in spring and autumn",

    droolingLevel:
      "Low; thin, tightly fitting lips minimize drooling",

    distinctiveFeatures: [
      "Compact, agile, and well-balanced Nordic spitz silhouette",
      "Three distinct size varieties sharing identical bodily proportions: Toy, Miniature, and Standard",
      "Height at the shoulder ranging from 9 to 19 inches across the three varieties",
      "Weight ranging from 6 to 35 pounds depending on size classification",
      "Pure white or white with biscuit-cream stand-off double coat with a pronounced lion-like neck ruff",
      "Fox-like, wedge-shaped head with a soft, keen, alert expression",
      "Jet-black pigmentation on the nose, lips, and eye rims contrasting with the white coat",
      "Dark brown, slightly oval eyes with black halos",
      "Small, triangular, slightly rounded-tip erect ears set high and well apart",
      "Profusely plumed tail carried loosely curled over the back or resting on the hip",
      "Firm, well-knit oval feet with thick black pads and white nails",
      "Agile, springy, and effortless trot with good reach and drive"
    ]
  },

  temperament: {
    traits: [
      "Cheerful, affectionate, and deeply bonded to family",
      "Keenly intelligent and eager to learn complex tricks",
      "Alert and inquisitive with a strong watchdog instinct",
      "Friendly and outgoing once introduced by family members",
      "Playful and energetic with children and household pets",
      "Sensitive to handler voice tone and responsive to positive coaching",
      "Vocal and communicative, using barks to sound alarms or express excitement",
      "Agile problem-solver with natural curiosity",
      "Prone to boredom barking or separation anxiety if isolated for long stretches"
    ],

    scores: {
      affection: 5,
      withChildren: 5,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 3,
      independence: 2,
      trainability: 5,
      barking: 4,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "Moderate to high; requires daily physical exercise and regular mental stimulation through training or puzzle games to maintain indoor calm",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Daily brisk walks and neighborhood exploration",
        "Interactive fetch and yard play sessions",
        "Trick training, clicker games, and cognitive puzzle solving",
        "Canine sports such as agility, rally, flyball, and scent work",
        "Jogging or brisk hiking in cool weather once skeletally mature",
        "Structured obedience and impulse-control practice"
      ]
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush two to three times weekly using a pin brush and slicker brush to prevent mats and lift loose undercoat; increase to daily brushing during seasonal shedding periods in spring and autumn.",

      bathing:
        "Bathe every four to eight weeks or when soiled, using a moisturizing dog shampoo that preserves the coat's natural dirt-repelling texture.",

      notes: [
        "Never shave the double coat; the fur provides essential insulation against winter cold and radiant summer heat, and shaving can permanently alter coat texture.",
        "Wipe the area beneath the inner eye corners regularly to manage tear staining on white fur.",
        "Inspect the small erect ears weekly for wax, dust, or irritation.",
        "Trim nails every two to three weeks to maintain proper paw structure and joint posture.",
        "Brush teeth daily or multiple times weekly with canine-formulated toothpaste.",
        "Ensure thorough drying down to the skin after bathing to prevent moisture-trapped skin irritation."
      ]
    },

    training: {
      difficulty:
        "Easy to moderate; highly trainable, remarkably quick to learn, and motivated by rewards, but requires gentle consistency to prevent independent mischief",

      tips: [
        "Employ positive reinforcement, praise, and small training treats.",
        "Keep sessions varied, fast-paced, and engaging to leverage high intelligence.",
        "Teach a reliable quiet cue early to manage natural watchdog barking tendencies.",
        "Incorporate trick training and puzzle solving into everyday routines.",
        "Avoid harsh corrections or intimidation, which cause this sensitive spitz to lose confidence and withdraw.",
        "Maintain crate training and independent enrichment toys to prevent separation distress."
      ],

      socialization:
        "Expose the puppy early and positively to a wide variety of friendly people, vaccinated dogs, household appliances, novel surfaces, and busy environments. Early socialization fosters a confident, polite adult dog that welcomes guests and handles new situations with poise."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Cold and snowy winter climates, where the dense double coat provides outstanding thermal protection",
        "Temperate climates",
        "Warm climates, provided air-conditioned indoor shelter, shade, and fresh water are available and exercise is scheduled during cooler hours"
      ],

      aloneTimeTolerance:
        "Low to moderate; intensely people-oriented and can develop separation anxiety, destructive chewing, or persistent barking if left alone for extended periods without mental engagement."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for small-to-medium active dogs, tailored to the specific size variety (Toy, Miniature, or Standard).",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age, transitioning to two meals daily thereafter on a growth diet supporting controlled development.",
      adult:
        "Two measured meals daily to support steady energy and comfortable digestion.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output, joint support, and lean muscle retention."
    },

    guidelines:
      "Measure daily portions accurately using a digital kitchen scale or standard measuring cup, adjusting amounts to maintain a lean, athletic body silhouette where the ribs are easily felt through the thick coat. Divide daily food into two distinct meals, restrict vigorous exercise immediately before and after eating, and provide cool, clean drinking water continuously.",

    considerations: [
      "Keep the dog lean; excess body weight increases mechanical strain on knees and hips, particularly in Toy and Miniature varieties.",
      "Account for training treats within the daily caloric budget to prevent gradual weight gain.",
      "Select kibble size appropriate to the specific variety (small bites for Toy and Miniature dogs).",
      "Avoid feeding high-fat table scraps that can trigger digestive upset or pancreatitis.",
      "Provide fresh, cool water at all times to support hydration.",
      "Transition between diet formulas gradually over five to seven days."
    ],

    note:
      "Caloric needs vary significantly based on size category, age, sterilization status, and daily activity. Work with a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The American Eskimo Dog is a hardy, long-lived spitz companion with a typical life expectancy of 13 to 15 years. Developed from robust northern farm stock and maintained with functional athletic conformation, it enjoys solid overall constitutional vitality. Hereditary health priorities include progressive retinal atrophy (specifically prcd-PRA), primary lens luxation, patellar luxation (predominantly in Toy and Miniature varieties), hip dysplasia (in Standard and larger Miniature dogs), and autoimmune thyroiditis.",

    commonConditions: [
      "Progressive retinal atrophy (prcd-PRA) — an inherited neurodegenerative eye disease caused by an autosomal recessive mutation in the PRCD gene on chromosome 9, causing progressive loss of night vision and eventual blindness, fully preventable through DNA testing of breeding stock",
      "Primary lens luxation (PLL) — an inherited condition caused by an ADAMTS17 gene mutation leading to weakening of the zonular fibers supporting the ocular lens, resulting in lens displacement and painful secondary glaucoma",
      "Patellar luxation — kneecap displacement from the femoral groove causing intermittent hopping or hind-limb lameness, commonly seen in smaller toy and miniature sizes",
      "Hip dysplasia — developmental laxity and malformation of the hip joints leading to osteoarthritis and stiffness, evaluated radiographically in standard and miniature breeding dogs",
      "Juvenile and adult cataracts — clouding of the ocular lens that can impair vision if untreated",
      "Autoimmune thyroiditis — immune-mediated inflammation of the thyroid gland resulting in hypothyroidism, weight gain, and skin changes",
      "Tear staining (epiphora) — reddish-brown facial staining beneath the eyes caused by tear overflow on white fur",
      "Diabetes mellitus — metabolic endocrine disorder monitored through veterinary clinical bloodwork"
    ],

    preventiveCare: [
      "Confirm that breeding parents possess certified DNA clearances for prcd-PRA and PLL, clinical patella evaluations, and specialist eye clearances.",
      "Maintain a lean body condition to avoid placing excess mechanical load on stifle joints and hips.",
      "Wipe eye corners regularly with a soft damp cloth to prevent tear crusting and reduce facial staining.",
      "Inspect the erect ears weekly for wax or dust buildup and clean gently with a veterinary-approved ear wash.",
      "Brush teeth daily or multiple times weekly with canine toothpaste to protect against periodontal disease.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine dental cleanings."
    ],

    recommendedScreenings: [
      "DNA marker test for progressive retinal atrophy (prcd-PRA) prior to breeding",
      "DNA marker test for primary lens luxation (PLL) prior to breeding",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist",
      "Patellar luxation clinical orthopedic evaluation and grading",
      "Radiographic hip dysplasia evaluation (for Standard and Miniature varieties) prior to breeding",
      "Autoimmune thyroiditis blood panel"
    ],

    dentalCare:
      "Brush teeth multiple times weekly using canine enzymatic toothpaste. The breed has strong jaws with a complete 42-tooth scissor bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the small erect ears weekly for wax accumulation, moisture, or redness. Clean gently using a veterinarian-recommended ear solution, drying the leather thoroughly.",

    skinCare:
      "Part the dense double coat weekly to inspect the skin for external parasites, dryness, or irritation. Never shave the double coat; regular brushing preserves skin aeration and coat insulation."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Families with children seeking a playful, sturdy, and affectionate companion",
      "First-time dog owners committed to positive training, mental enrichment, and regular brushing",
      "Apartment, condominium, or house dwellers who provide daily walks, play, and indoor inclusion",
      "Active seniors or retirees seeking a devoted companion (especially in the Toy or Miniature size)",
      "Agility, trick training, and dog sport enthusiasts who appreciate a fast, eager learner",
      "Households wanting a vigilant watchdog that barks to sound alarms without being aggressive"
    ],

    notIdealFor: [
      "Households intolerant of regular white dog hair shedding on furniture and clothing",
      "Owners who leave a dog home alone in isolation for long workdays without company",
      "People seeking a quiet, non-vocal pet, as the breed naturally barks to announce visitors and unusual sounds",
      "Owners unwilling to brush a double coat two to three times weekly",
      "Households looking for an outdoor-only yard dog"
    ]
  },

  funFacts: [
    "In the early twentieth century, the breed was a star performer in American circuses; an American Eskimo Dog named Pierre became a national sensation walking the tightrope with the Barnum and Bailey Circus.",
    "Originally called the German Spitz, the breed was renamed the American Eskimo Dog in 1917 during the First World War due to anti-German sentiment, taking its name from an Ohio kennel named American Eskimo.",
    "Admirers historically nicknamed the breed 'The Dog Beautiful' because of its gleaming white coat, proud carriage, dark eyes, and plumed tail.",
    "Many American Eskimo Dogs exhibit a charming habit known as the 'Eskie smile', pulling back their upper lips to reveal their front teeth in a submissive, joyful grin when greeting familiar people.",
    "The breed is officially judged in three size varieties—Toy, Miniature, and Standard—which all share identical physical proportions and temperament standards.",
    "The jet-black rims around their dark eyes are affectionately called 'spectacles' or 'halos', creating a striking contrast against their snowy white fur.",
    "Despite their name, they have no historical connection to indigenous Alaskan Eskimo or Inuit cultures, tracing their ancestry entirely to European spitz breeds."
  ],

  faq: [
    {
      question: "What is an American Eskimo Dog?",
      answer:
        "The American Eskimo Dog is a white Nordic-type spitz companion originating in the American Midwest from German Spitz ancestors, known for its glistening double coat, erect triangular ears, keen intelligence, and watchdog vigilance."
    },
    {
      question: "How big does an American Eskimo Dog get, and what are the three sizes?",
      answer:
        "The breed is divided into three distinct size varieties that share identical proportions: the Toy stands 9 to 12 inches at the shoulder, the Miniature stands over 12 to 15 inches, and the Standard stands over 15 to 19 inches."
    },
    {
      question: "How much does an American Eskimo Dog weigh?",
      answer:
        "Weight corresponds directly to size variety: Toy dogs typically weigh 6 to 10 pounds, Miniature dogs weigh 10 to 20 pounds, and Standard dogs weigh 25 to 35 pounds."
    },
    {
      question: "How long does an American Eskimo Dog live?",
      answer:
        "The breed is known for exceptional longevity, typically enjoying a healthy lifespan of 13 to 15 years with proper care and nutrition."
    },
    {
      question: "Do American Eskimo Dogs shed a lot, and how are they groomed?",
      answer:
        "Yes. They have a thick double coat that sheds moderately year-round and blows heavily during spring and autumn. They require brushing two to three times a week with a slicker or pin brush to remove loose undercoat, and they should never be shaved."
    },
    {
      question: "Are American Eskimo Dogs good with children and other pets?",
      answer:
        "Yes. They are famously playful, gentle, and affectionate with children in their family, and they generally coexist harmoniously with other dogs and household cats when properly socialized."
    },
    {
      question: "Can an American Eskimo Dog live in an apartment?",
      answer:
        "Yes. The Toy and Miniature varieties in particular adapt well to apartment living provided they receive daily walks, play sessions, and indoor companionship; teaching a quiet cue early is helpful to manage watchdog barking."
    },
    {
      question: "Are American Eskimo Dogs easy to train?",
      answer:
        "They are exceptionally intelligent, quick to learn, and eager to please, having earned fame as circus trick dogs. They excel when trained using positive reinforcement, games, and reward-based methods."
    },
    {
      question: "Do American Eskimo Dogs bark a lot?",
      answer:
        "They are natural watchdogs that will bark to announce visitors, unusual sounds, or perceived intrusions; early training to teach a reliable quiet command helps keep vocalization manageable."
    },
    {
      question: "Can an American Eskimo Dog tolerate hot weather?",
      answer:
        "Their double coat insulates against heat as well as cold, but they must be provided with air conditioning, shade, and fresh water during summer, avoiding strenuous exercise during hot midday hours."
    },
    {
      question: "What health tests are recommended for the American Eskimo Dog?",
      answer:
        "Recommended pre-breeding screenings include DNA testing for progressive retinal atrophy (prcd-PRA) and primary lens luxation (PLL), annual ophthalmologist eye exams, patellar luxation checks, and hip evaluations for Standard and Miniature dogs."
    },
    {
      question: "What is the 'Eskie smile'?",
      answer:
        "The 'Eskie smile' is a submissive grin unique to the breed, where a happy or excited dog pulls back its lips to display its front teeth in greeting without any aggression."
    }
  ],

  references: [
    "akc-american-eskimo-dog-breed-standard",
    "akc-american-eskimo-dog-breed-profile",
    "ukc-american-eskimo-dog-breed-standard",
    "american-eskimo-dog-club-of-america-health",
    "ofa-american-eskimo-dog-chic-requirements",
    "american-eskimo-dog-prcd-pra-study-2006",
    "wikimedia-american-eskimo-dog-1-timquinn",
    "wikimedia-american-eskimo-dog-2-timquinn"
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
          id: "akc-american-eskimo-dog-breed-standard",
          role: "verified",
          locator: "Standard heading: American Eskimo Dog"
        },
        {
          id: "ukc-american-eskimo-dog-breed-standard",
          role: "verified",
          locator: "History: American Spitz (renamed in 1917), Eskie"
        },
        {
          id: "akc-american-eskimo-dog-breed-profile",
          role: "verified",
          locator: "History: German Spitz, American Spitz, Eskie"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Verified across official breed standards and kennel club records."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-standard",
          role: "verified",
          locator: "Non-Sporting Group"
        },
        {
          id: "ukc-american-eskimo-dog-breed-standard",
          role: "verified",
          locator: "Northern Breed Group"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Formulated without prohibited registry labels in user-facing text to comply with Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-standard",
          role: "verified",
          locator: "General Appearance and history"
        },
        {
          id: "akc-american-eskimo-dog-breed-profile",
          role: "verified",
          locator: "History: German immigrant communities in the American Midwest (Ohio, Indiana, Wisconsin)"
        },
        {
          id: "ukc-american-eskimo-dog-breed-standard",
          role: "verified",
          locator: "History: Developed in the United States from immigrant German Spitz dogs"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-standard",
          role: "verified",
          locator: "General Appearance, Size varieties, Temperament"
        },
        {
          id: "akc-american-eskimo-dog-breed-profile",
          role: "verified",
          locator: "About the Breed, History (circus performers, 1917 name change), and Roles"
        },
        {
          id: "ukc-american-eskimo-dog-breed-standard",
          role: "verified",
          locator: "History and Characteristics"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Synthesized in original phrasing without source or registry names in user-facing text."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-standard",
          role: "verified",
          locator: "Size, Proportion, Substance, Head, Neck, Topline, Body, Tail, Forequarters, Hindquarters, Coat, Color"
        },
        {
          id: "ukc-american-eskimo-dog-breed-standard",
          role: "verified",
          locator: "General Appearance, Head, Body, Coat, Color, Size Varieties"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Conformation, coat, colors, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-standard",
          role: "verified",
          locator: "Size: Toy: 9 to 12 inches; Miniature: over 12 to 15 inches; Standard: over 15 to 19 inches; Disqualification under 9 inches or over 19 inches"
        },
        {
          id: "ukc-american-eskimo-dog-breed-standard",
          role: "verified",
          locator: "Height: Toy: 9 to 12 inches; Miniature: 12 to 15 inches; Standard: 15 to 19 inches"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Preserved in published unit of inches (9 to 19 inches across Toy, Miniature, and Standard varieties) as specified in official standards."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-profile",
          role: "verified",
          locator: "Weight: 6-10 pounds (toy), 10-20 pounds (miniature), 25-35 pounds (standard)"
        },
        {
          id: "american-eskimo-dog-club-of-america-health",
          role: "verified",
          locator: "Weight ranges across size varieties (6–10 lbs, 10–20 lbs, 25–35 lbs)"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Standards require weight to be in proportion to height. The stored range of 6 to 35 pounds reflects the published weight span across the three varieties, preserved in pounds."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 13-15 years"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Supported by kennel club and breed club life expectancy publications."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (4/5)"
        },
        {
          id: "akc-american-eskimo-dog-breed-standard",
          role: "verified",
          locator: "Coat: Stand-off double coat with dense undercoat"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (1/5)"
        },
        {
          id: "akc-american-eskimo-dog-breed-standard",
          role: "verified",
          locator: "Lips: Thin, tight, and cleanly cut with black pigmentation"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Thin, tightly fitting lips result in low drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-standard",
          role: "verified",
          locator: "General Impression and Temperament: affectionate, loving, hardy, alert, friendly, keen watchdog, eager to please"
        },
        {
          id: "ukc-american-eskimo-dog-breed-standard",
          role: "verified",
          locator: "Characteristics: Highly intelligent, alert, friendly, excellent watchdog, devoted to family"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
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
          id: "akc-american-eskimo-dog-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        },
        {
          id: "american-eskimo-dog-club-of-america-health",
          role: "cited",
          locator: "Care, grooming, and mental stimulation guidelines"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active spitz care guidelines with double-coat grooming and positive training protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-profile",
          role: "verified",
          locator: "Energy Level (4/5); Exercise Needs (3/5)"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-profile",
          role: "cited",
          locator: "Exercise: moderate daily walks and active play"
        }
      ],
      verifiedOn: null,
      note:
        "An estimated range of 45 to 60 minutes reflects the exercise demands of an energetic companion spitz."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-profile",
          role: "verified",
          locator: "Adaptability: Adapts Well to Apartment Living (4/5) with adequate daily exercise"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-profile",
          role: "verified",
          locator: "Exercise and secure fenced-yard recommendations"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-standard",
          role: "verified",
          locator: "Coat: Nordic stand-off double coat providing cold weather protection"
        },
        {
          id: "akc-american-eskimo-dog-breed-profile",
          role: "verified",
          locator: "Weather tolerance: thriving in cold climates, requiring cooling in heat"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-profile",
          role: "verified",
          locator: "Tolerates Being Alone: Low to moderate; deeply people-oriented"
        }
      ],
      verifiedOn: "2026-11-08",
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-profile",
          role: "cited",
          locator: "Nutrition: high-quality food, portion control, treat budgeting"
        }
      ],
      verifiedOn: null,
      note: "Standard feeding and weight-management recommendations for active spitz breeds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance"
        }
      ],
      verifiedOn: null,
      note: "General canine feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-eskimo-dog-prcd-pra-study-2006",
          role: "verified",
          locator: "PRCD gene mutation and progressive retinal atrophy across canine breeds including the American Eskimo Dog"
        },
        {
          id: "ofa-american-eskimo-dog-chic-requirements",
          role: "verified",
          locator: "CHIC testing requirements: prcd-PRA DNA test, CAER eye exam, Patellar luxation, Hip evaluation"
        },
        {
          id: "american-eskimo-dog-club-of-america-health",
          role: "verified",
          locator: "Health and genetics overview: PRA, PLL, patellar luxation, hips, and thyroid"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Synthesizes peer-reviewed genetics research on progressive retinal atrophy with health registry screening protocols."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-eskimo-dog-prcd-pra-study-2006",
          role: "verified",
          locator: "Progressive retinal atrophy (prcd-PRA) genetic basis and clinical progression"
        },
        {
          id: "ofa-american-eskimo-dog-chic-requirements",
          role: "verified",
          locator: "Patellar luxation, hip dysplasia, and ocular diseases"
        },
        {
          id: "american-eskimo-dog-club-of-america-health",
          role: "verified",
          locator: "Primary lens luxation, juvenile cataracts, tear staining, and diabetes"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Details documented genetic and conformational conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-eskimo-dog-club-of-america-health",
          role: "cited",
          locator: "Preventive health care and grooming recommendations"
        },
        {
          id: "akc-american-eskimo-dog-breed-profile",
          role: "cited",
          locator: "General health and routine care"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to white double-coated spitz breeds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-american-eskimo-dog-chic-requirements",
          role: "verified",
          locator: "CHIC program required screenings: PRA-prcd DNA test, CAER eye examination, Patellar luxation, Hip evaluation"
        },
        {
          id: "american-eskimo-dog-club-of-america-health",
          role: "verified",
          locator: "Pre-breeding health screening protocol: DNA testing, eye exams, orthopedic evaluations"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "Screenings summarize published parent club and health registry protocols."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-standard",
          role: "cited",
          locator: "Jaws and teeth: complete 42-tooth scissor bite"
        },
        {
          id: "akc-american-eskimo-dog-breed-profile",
          role: "cited",
          locator: "Routine grooming and dental care"
        }
      ],
      verifiedOn: null,
      note: "Standard canine dental care guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-standard",
          role: "cited",
          locator: "Ears: small, triangular, erect, slightly rounded tips"
        },
        {
          id: "akc-american-eskimo-dog-breed-profile",
          role: "cited",
          locator: "Weekly ear inspections"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for small erect ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-standard",
          role: "cited",
          locator: "Skin and double coat structure"
        },
        {
          id: "akc-american-eskimo-dog-breed-profile",
          role: "cited",
          locator: "Double coat care, brushing, avoiding shaving"
        }
      ],
      verifiedOn: null,
      note: "Skin and coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
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
          id: "akc-american-eskimo-dog-breed-profile",
          role: "verified",
          locator: "Circus history (Barnum & Bailey tightrope walking Pierre), 1917 name change from German Spitz, 'The Dog Beautiful', 'Eskie smile'"
        },
        {
          id: "ukc-american-eskimo-dog-breed-standard",
          role: "verified",
          locator: "1913 American Spitz recognition and variety history"
        }
      ],
      verifiedOn: "2026-11-08",
      note: "Verified historical folklore and cultural heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-eskimo-dog-breed-standard",
          role: "verified",
          locator: "Size varieties (toy, miniature, standard), coat, colors, and temperament"
        },
        {
          id: "akc-american-eskimo-dog-breed-profile",
          role: "verified",
          locator: "Lifespan, weight, grooming, shedding, and exercise"
        },
        {
          id: "ofa-american-eskimo-dog-chic-requirements",
          role: "verified",
          locator: "Health screening recommendations"
        },
        {
          id: "american-eskimo-dog-prcd-pra-study-2006",
          role: "verified",
          locator: "prcd-PRA genetics and prevention"
        }
      ],
      verifiedOn: "2026-11-08",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and genetics research without naming registries in prose."
    }
  },

  updatedOn: "2026-11-08"
};
