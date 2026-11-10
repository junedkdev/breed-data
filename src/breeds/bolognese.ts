import type { Breed } from "../schema/breed.types";

export const bolognese: Breed = {
  slug: "bolognese",
  name: "Bolognese",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Bichon Bolognese",
    "Bologneser",
    "Bolo",
    "Bolognais",
    "Botoli"
  ],

  group:
    "Companion and Toy Dogs; Section 1 — Bichons and Related Breeds (without working trial; also classified in the Toy and Companion groups)",

  origin: {
    country: "Italy",
    region:
      "Bologna and the Emilia-Romagna region, northern Italy"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bolognese_1.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Bolognese_1.jpg",
      title: "Bolognese 1.jpg",
      description: "An adult white Bolognese standing outdoors.",
      creator: "Lilly M",
      uploader: "Lilly M",
      capturedOn: "2007-06-16",
      uploadedOn: "2007-06-25",
      width: 1780,
      height: 1856,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Lilly M, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Bolognese_1.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bolognese_600.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Bolognese_600.jpg",
      title: "Bolognese 600.jpg",
      description: "An adult Bolognese standing outdoors in profile.",
      creator: "Tomasz Sienicki",
      uploader: "Pmg",
      capturedOn: "2006-05-20",
      uploadedOn: "2006-05-21",
      width: 600,
      height: 489,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Tomasz Sienicki, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Bolognese_600.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10"
    }
  ],

  overview: {
    summary:
      "An enchanting, small Italian toy companion belonging to the ancient bichon family, distinguished by its pure white flocky coat, dark expressive eyes, square silhouette, serene dignity, and deeply devoted domestic loyalty.",

    description:
      "The Bolognese is a small, compact, and square-built companion dog whose body length equals its height at the withers. Known for centuries as an aristocratic lapdog of Italian noble courts, the dog carries a distinctive cloud-like silhouette created by a long, airy, flocky coat that falls in open ringlet tufts rather than forming straight fringes. Its pure snow-white fur is set off by a jet-black nose, dark-rimmed lips, and large, luminous dark ochre eyes that radiate calm intelligence and steady affection. In domestic life, the dog is markedly quiet, composed, and non-hyperactive, forming an exceptionally tight emotional attachment to its human family while greeting new situations with quiet observation and gentle charm.",

    history:
      "The origins of the breed trace back to antiquity along the Mediterranean basin, where small white lapdogs were mentioned by Aristotle as early as the fourth century BCE under the Latin designation Canes Melitenses. During the Renaissance, the breed was refined in the northern Italian city of Bologna, becoming the prized status symbol and diplomatic gift of noble dynasties including the Medici, Gonzaga, and d'Este families. Renaissance masters, including Titian, Pieter Bruegel the Elder, and Francisco Goya, immortalized these dogs in royal portraits, and historical letters record Cosimo de' Medici transporting eight puppies to Brussels as gifts for Belgian noblemen. In the eighteenth century, Madame de Pompadour and Empress Catherine the Great of Russia were passionate patrons. Following the political upheavals of the nineteenth and early twentieth centuries, the breed neared extinction, but dedicated Italian breeders successfully gathered foundation stock in the mid-twentieth century to safeguard its authentic historical type.",

    originalPurpose:
      "Companionship, lap-warming, and comforting presence in Italian aristocratic households and noble palaces.",

    currentRoles: [
      "Devoted household companion and family lapdog",
      "Therapy and emotional support visiting dog",
      "Gentle companion for apartment dwellers and retirees",
      "Canine athlete in trick training and rally obedience"
    ]
  },

  physical: {
    sizeCategory: "Toy",

    height: {
      unit: "cm",
      male: {
        min: 27,
        max: 30
      },
      female: {
        min: 25,
        max: 28
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 2.5,
        max: 4
      },
      female: {
        min: 2.5,
        max: 4
      }
    },

    lifespanYears: {
      min: 12,
      max: 14
    },

    coatType:
      "Long all over the body from head to tail and from topline to feet, shorter on the muzzle; rather flocky and airy, not lying flat but falling in loose tufts and ringlet flocks without forming straight fringes; single coat without a dense undercoat.",

    coatLength: "Long",

    coatColors: [
      "Pure white (solid, without any spots or shading)"
    ],

    sheddingLevel:
      "Low; hair sheds into the flocky coat rather than onto household furnishings, requiring regular brushing to prevent tangles",

    droolingLevel:
      "Low; tight, dry lips with dark black pigmentation prevent drooling",

    distinctiveFeatures: [
      "Square, compact body outline with height at withers exactly equal to the length of the torso",
      "Height at withers of 27 to 30 cm for males and 25 to 28 cm for females",
      "Weight of 2.5 to 4 kg in lean, well-balanced condition",
      "Solid pure white, flocky, and airy coat draped in open locks across the body without undercoat",
      "Medium-length head with flat skull, slightly convex profile, and a clearly defined, abrupt stop",
      "Large, jet-black nose set in line with the straight nasal bridge",
      "Complete scissor bite with strong jaws and evenly aligned white teeth",
      "Large, round, luminous dark ochre eyes set well forward, framed by black-pigmented eye rims",
      "Long, high-set drop ears hanging close to the skull with bases slightly raised, covered in long flocky hair",
      "Straight, level back with a slightly arched loin and wide, gently sloping croup",
      "High-set tail carried curved smoothly over the back, furnished with profuse flocky hair",
      "Straight forelegs with small, oval cat-like feet featuring black pads and dark nails"
    ]
  },

  temperament: {
    traits: [
      "Calm, serene, and dignified in everyday demeanor",
      "Deeply affectionate, loyal, and devoted to family members",
      "Docile, gentle, and cooperative to live with",
      "Enterprising and curious during playtime",
      "Quiet and non-yappy indoors, barking primarily to announce arrivals",
      "Reserved and observant with unfamiliar strangers without timidity or aggression",
      "Patient and sweet-natured with familiar, respectful children",
      "Sociable and peaceful with other dogs and household pets",
      "Sensitive to household tone and human emotional states",
      "Forms an intense, shadow-like bond with its primary caregiver"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 2,
      independence: 2,
      trainability: 4,
      barking: 2,
      energy: 2
    }
  },

  care: {
    exercise: {
      level:
        "Moderate; requires daily leisurely walking, playful interaction, and mental engagement, but possesses modest athletic demands",

      minutesPerDay: {
        min: 30,
        max: 45
      },

      activities: [
        "Daily leashed neighborhood strolls and sensory sniff walks",
        "Interactive indoor fetch and soft toy play sessions",
        "Reward-based trick training and learning household cues",
        "Supervised exploration in a secure garden or yard",
        "Gentle puzzle toys, snuffle mats, and foraging games",
        "Social companion visits and therapy dog activities"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Brush and line-comb thoroughly three to four times weekly using a wide-toothed metal comb and pin brush down to the skin to prevent the flocky locks from felting into mats; avoid slicker brushes that break the delicate curls.",

      bathing:
        "Bathe every three to six weeks using a gentle, whitening or moisturizing canine shampoo and conditioner; allow the coat to air-dry naturally or dry with gentle warm air, gently fluffing the locks with fingers to preserve the natural flocky ringlet texture.",

      notes: [
        "The coat must not be sheared, sculpted, or clipped in artificial patterns; it should be kept in its natural, flocky, fluffy state, with only sanitary and pad trims.",
        "Wipe tear stains from the eye corners daily with a damp cotton pad to preserve gleaming white facial hair.",
        "Wipe and dry the muzzle hair after meals and drinking to prevent food crusting and moisture discoloration.",
        "Inspect the drop ears weekly for moisture, wax buildup, or debris, cleaning gently with a veterinary ear solution.",
        "Trim nails every two to three weeks to prevent splayed toes and preserve correct cat-like foot posture.",
        "Brush teeth daily with canine enzymatic toothpaste to prevent periodontal tartar buildup common in toy breeds."
      ]
    },

    training: {
      difficulty:
        "Easy to moderate; exceptionally intelligent, docile, and eager to please, learning cues and household routines rapidly under positive reinforcement",

      tips: [
        "Use positive reinforcement, gentle praise, and small high-value treats.",
        "Keep sessions brief, cheerful, and interactive (5 to 10 minutes) to match toy attention spans.",
        "Start consistent house-training early on a predictable outdoor schedule, as small toy bladders require patience.",
        "Never use harsh verbal reprimands or physical coercion, which deeply distress this sensitive companion.",
        "Practice calm, gradual departure routines from puppyhood to prevent excessive clinginess or separation anxiety.",
        "Accustom the puppy early to gentle handling of feet, teeth, ears, and coat during daily cuddle sessions."
      ],

      socialization:
        "Introduce the puppy early, gently, and positively to diverse people, friendly vaccinated dogs, household appliances, traffic sounds, and novel surfaces. Early structured social guidance ensures its natural reservedness develops into calm, dignified composure in public."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Warm climates, provided indoor air conditioning, shade, and fresh water are available and exercise is scheduled during cooler hours",
        "Cold climates, provided the dog lives indoors in a heated home and wears a warm sweater during freezing winter outings"
      ],

      aloneTimeTolerance:
        "Low; intensely bonded to its human family and prone to separation distress, whimpering, or sadness if left isolated for long workdays without companionship."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for toy or small companion breeds, adjusted for age, activity level, and metabolic rate.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age, transitioning to two meals daily on a small-breed growth diet to support steady blood sugar levels.",
      adult:
        "Two measured meals daily to support steady energy and comfortable digestion.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output, joint support, and dental health."
    },

    guidelines:
      "Measure food portions carefully using a digital kitchen scale or standard measuring cup, adjusting amounts to maintain a lean, square body condition where ribs are easily felt through the flocky coat. Select small, easily chewed kibble designed for toy jaws, use narrow food dishes to keep ear furnishings clean, and provide fresh drinking water continuously in a shallow bowl.",

    considerations: [
      "Maintain a lean body condition; excess weight places unnecessary mechanical strain on delicate stifle and hip joints.",
      "Account for training treats within the total daily caloric allowance to avoid creeping weight gain.",
      "Select small-bite kibbles designed for toy mouths to promote chewing and reduce tartar formation.",
      "Avoid feeding high-fat table scraps that can trigger digestive upset or acute pancreatitis.",
      "Provide clean drinking water in accessible shallow dishes.",
      "Transition between diet formulas gradually over five to seven days."
    ],

    note:
      "Caloric needs vary based on age, sterilization status, and daily exercise. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Bolognese is a remarkably healthy, robust, and long-lived toy breed with a typical lifespan of 12 to 14 years. Having been preserved through centuries without extreme conformational exaggeration or flat-faced brachycephaly, it enjoys strong overall vitality. Primary health priorities focus on orthopedic and ocular conditions seen across small toy dogs, including patellar luxation, progressive retinal atrophy (PRA), hereditary cataracts, Legg-Calvé-Perthes disease, and premature periodontal disease.",

    commonConditions: [
      "Patellar luxation — displacement of the kneecap from the femoral groove causing intermittent hopping or hind-limb lameness, monitored through clinical orthopedic grading",
      "Progressive retinal atrophy (PRA) — an inherited neurodegenerative eye disorder causing gradual photoreceptor deterioration and eventual blindness, screenable through veterinary ophthalmic examinations",
      "Hereditary cataracts — clouding of the eye lens that can impair vision, monitored through annual certified ophthalmologist examinations",
      "Legg-Calvé-Perthes disease — aseptic necrosis of the femoral head occurring in young toy dogs, leading to hip pain, lameness, and secondary osteoarthritis",
      "Periodontal disease — tartar buildup, gingivitis, and premature tooth loss common in small jaws, preventable through daily home tooth brushing",
      "Epiphora (tear staining) — excessive tear production or shallow tear ducts causing reddish-brown facial staining, managed with daily wiping and gentle hygiene",
      "Hypoglycemia in tiny puppies — transient drops in blood glucose during periods of stress or missed meals in young toy puppies"
    ],

    preventiveCare: [
      "Confirm that breeding stock has certified clinical patellar luxation clearances and annual certified veterinary ophthalmologist eye clearances.",
      "Maintain a lean body condition throughout life to minimize mechanical wear on stifles and hips.",
      "Wipe facial eye corners daily with a damp cotton pad to prevent tear staining and skin irritation.",
      "Brush teeth daily with dog-specific enzymatic toothpaste to counter dental plaque and tartar.",
      "Inspect the drop ears weekly for wax buildup, moisture, or dirt, wiping gently with an approved cleanser.",
      "Administer consistent year-round parasite prevention against fleas, ticks, and heartworms.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "Clinical patellar luxation orthopedic evaluation and grading prior to breeding",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist",
      "Radiographic hip evaluation for Legg-Calvé-Perthes disease and hip dysplasia",
      "Cardiac examination including auscultation by a veterinary specialist"
    ],

    dentalCare:
      "Brush teeth daily with canine enzymatic toothpaste. Small toy mouths have crowded dentition that easily accumulates tartar; routine professional dental cleanings preserve gum health.",

    earCare:
      "Inspect the flocky drop ears weekly for wax accumulation, moisture, or redness. Clean gently using a veterinarian-recommended ear solution, drying the leather thoroughly.",

    skinCare:
      "Part the flocky coat weekly during combing to inspect the skin for external parasites, redness, or mats. Avoid shaving the coat, as regular combing preserves skin aeration and the natural tufted coat texture."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: false,
    apartmentLiving: true,

    idealFor: [
      "First-time dog owners seeking an easy-to-train, gentle, and quiet toy companion",
      "Apartment, condominium, or urban dwellers wanting a calm indoor pet that rarely barks",
      "Retirees, seniors, or remote workers who spend substantial time at home",
      "Families with gentle children who treat small toy dogs with respect and care",
      "Owners committed to regular coat line-combing and daily indoor companionship"
    ],

    notIdealFor: [
      "Owners who leave a dog home alone in isolation for long workdays without company",
      "Households with rough toddlers who might accidentally drop or injure a small toy dog",
      "Outdoor enthusiasts seeking an endurance distance-running partner",
      "People seeking an aggressive guard dog that barks loudly at boundaries",
      "Owners unwilling to dedicate time to weekly coat brushing and tear-stain maintenance"
    ]
  },

  funFacts: [
    "During the Renaissance, the Bolognese was so prized by Italian royalty that Cosimo de' Medici transported eight puppies to Brussels as diplomatic gifts for Flemish noblemen, praising them as 'the most royal gift one can bestow'.",
    "World-famous historical masters, including Titian, Francisco Goya, and Pieter Bruegel the Elder, depicted Bolognese dogs in royal portraits, often resting comfortably on velvet cushions or in ladies' laps.",
    "Madame de Pompadour, the influential mistress of King Louis XV of France, owned a beloved Bolognese that accompanied her to court salons and political meetings in Versailles.",
    "Unlike the Bichon Frise, whose coat is typically blown out and sculpted with scissors into a spherical profile, the Bolognese standard strictly requires the coat to be presented in its natural, flocky, and airy tufts without trimming.",
    "Despite their delicate, cloud-like appearance, Bolognese dogs possess a calm, steady dignity and are famously described as 'small philosophers' due to their thoughtful, observant gaze.",
    "Bolognese dogs are known as 'velcro dogs' because they prefer to remain within physical contact of their owners, following them silently from room to room throughout the day."
  ],

  faq: [
    {
      question: "What is a Bolognese?",
      answer:
        "The Bolognese is an ancient Italian toy companion belonging to the bichon family, known for its solid white flocky coat, square build, dark eyes, and calm, affectionate personality."
    },
    {
      question: "What is the difference between a Bolognese and a Bichon Frise?",
      answer:
        "While both are white toy companions of the bichon family, the Bolognese has a distinct flocky, tufted single coat that is left in its natural ringlet texture without sculpting, whereas the Bichon Frise has a dense double coat that is blown out and scissored into rounded, plush contours."
    },
    {
      question: "How big does a Bolognese get, and what is its weight?",
      answer:
        "Adult males stand 27 to 30 cm at the withers and females stand 25 to 28 cm, with both sexes typically weighing between 2.5 and 4 kg in balanced, healthy condition."
    },
    {
      question: "How long does a Bolognese live?",
      answer:
        "With proper nutrition, indoor care, and conscientious preventive veterinary care, the breed typically enjoys a healthy lifespan of 12 to 14 years."
    },
    {
      question: "Do Bolognese dogs shed a lot, and how are they groomed?",
      answer:
        "They shed very little, making them popular with people seeking low-dander companions. Their flocky white coat requires line-combing three to four times a week down to the skin to prevent mats, daily eye wiping, and an occasional bath, but the coat should not be clipped."
    },
    {
      question: "Can a Bolognese live in an apartment?",
      answer:
        "Yes. Their small size, calm indoor temperament, and low tendency to bark make them exceptional apartment pets, provided they receive daily walks and close companionship."
    },
    {
      question: "Are Bolognese dogs good with children and other pets?",
      answer:
        "Yes. They are gentle, affectionate, and patient with children who handle them respectfully, and they coexist peacefully with other dogs and household cats."
    },
    {
      question: "Is the Bolognese easy to train?",
      answer:
        "They are very intelligent, docile, and eager to please, learning household manners and tricks quickly under gentle, reward-based training; harsh methods should never be used on this sensitive breed."
    },
    {
      question: "Can a Bolognese be left alone for long periods?",
      answer:
        "No. The breed is deeply attached to its human family and dislikes extended isolation; leaving them alone for long workdays can lead to separation distress and sadness."
    },
    {
      question: "What health tests are recommended for breeding Bolognese dogs?",
      answer:
        "Recommended pre-breeding screenings include clinical evaluations for patellar luxation, annual certified veterinary ophthalmologist eye exams, and cardiac evaluations."
    }
  ],

  references: [
    "fci-bolognese-official-standard",
    "fci-bolognese-nomenclature",
    "enci-bolognese-breed-standard",
    "akc-bolognese-breed-profile",
    "the-kennel-club-bolognese-breed-standard",
    "ukc-bolognese-breed-standard",
    "ofa-bolognese-health-screenings",
    "wikimedia-bolognese-1-lilly-m",
    "wikimedia-bolognese-600-tomasz-sienicki"
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
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "Standard heading: BOLOGNESE"
        },
        {
          id: "fci-bolognese-nomenclature",
          role: "verified",
          locator: "Official nomenclature: BOLOGNESE (196), Bologneser"
        },
        {
          id: "enci-bolognese-breed-standard",
          role: "verified",
          locator: "Denominazione ufficiale: Bolognese"
        },
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "History: Bichon Bolognese, Bolo, Botoli"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Verified across FCI Standard No. 196, FCI Nomenclature, ENCI, and AKC."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 9 Companion and Toy Dogs, Section 1 Bichons and related breeds, without working trial"
        },
        {
          id: "fci-bolognese-nomenclature",
          role: "verified",
          locator: "Group 9, Section 1 Bichons and related breeds, without working trial"
        },
        {
          id: "the-kennel-club-bolognese-breed-standard",
          role: "verified",
          locator: "Toy Group"
        },
        {
          id: "ukc-bolognese-breed-standard",
          role: "verified",
          locator: "Companion Dog Group"
        },
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Foundation Stock Service (Toy Group)"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "ORIGIN: Italy; BRIEF HISTORICAL SUMMARY"
        },
        {
          id: "fci-bolognese-nomenclature",
          role: "verified",
          locator: "Country of origin: Italy"
        },
        {
          id: "enci-bolognese-breed-standard",
          role: "verified",
          locator: "Origine: Italia (Bologna, Emilia-Romagna)"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, IMPORTANT PROPORTIONS, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "enci-bolognese-breed-standard",
          role: "verified",
          locator: "Storia, cenni storici, Medici, Gonzaga, e impiego come cane da compagnia"
        },
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "About the Breed, History, and Roles"
        },
        {
          id: "the-kennel-club-bolognese-breed-standard",
          role: "cited",
          locator: "General Appearance and Characteristics"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Synthesized in original prose from FCI Standard No. 196, ENCI, The Royal Kennel Club, and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS, HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE AND WEIGHT"
        },
        {
          id: "enci-bolognese-breed-standard",
          role: "verified",
          locator: "Proporzioni importanti (costruzione quadrata), mantello a bioccoli, occhi e dimensioni"
        },
        {
          id: "the-kennel-club-bolognese-breed-standard",
          role: "verified",
          locator: "Head and Skull, Eyes, Ears, Body, Tail, Coat, Colour, Size"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Conformation, square build (height equals length), pure white flocky coat without fringes, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Height at withers: Males: 27–30 cm. Females: 25–28 cm."
        },
        {
          id: "enci-bolognese-breed-standard",
          role: "verified",
          locator: "Altezza al garrese: Maschi da 27 a 30 cm; Femmine da 25 a 28 cm"
        },
        {
          id: "the-kennel-club-bolognese-breed-standard",
          role: "verified",
          locator: "Height: dogs 27-30 cms (10.5-12 ins); bitches 25-28 cms (10-11 ins)"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Preserved in published unit of centimetres (27–30 cm for males, 25–28 cm for females) exactly as specified in the official FCI Standard No. 196, ENCI, and The Royal Kennel Club standard."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "Weight: 2.5–4 kg."
        },
        {
          id: "enci-bolognese-breed-standard",
          role: "verified",
          locator: "Peso: da 2,5 a 4 kg"
        },
        {
          id: "the-kennel-club-bolognese-breed-standard",
          role: "verified",
          locator: "Weight: 2.5-4 kgs (5.5-9 lbs)"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Preserved in published unit of kilograms (2.5 to 4 kg) exactly as specified in the official FCI Standard No. 196, ENCI, and The Royal Kennel Club standard."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12-14 years"
        },
        {
          id: "the-kennel-club-bolognese-breed-standard",
          role: "verified",
          locator: "Longevity and health actuarial profile (12-14 years)"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Supported by kennel club and breed club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (1/5)"
        },
        {
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "COAT: Flocky hair without fringes; low shedding single coat"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "Lips: Tight fitting, margins black"
        },
        {
          id: "enci-bolognese-breed-standard",
          role: "verified",
          locator: "Labbra: Tese e ben pigmentate di nero"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Tight lips result in low drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Very serious, generally not very lively. Enterprising, docile, very attached to his master and his entourage."
        },
        {
          id: "enci-bolognese-breed-standard",
          role: "verified",
          locator: "Comportamento e carattere: Molto serio, non molto vivace, docile e affettuosissimo"
        },
        {
          id: "the-kennel-club-bolognese-breed-standard",
          role: "verified",
          locator: "Characteristics and Temperament: Reserved with strangers, docile, devoted, affectionate"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        },
        {
          id: "the-kennel-club-bolognese-breed-standard",
          role: "cited",
          locator: "Temperament and behavior guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented toy companion temperament, high affection, and calm domestic serenity."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        },
        {
          id: "the-kennel-club-bolognese-breed-standard",
          role: "cited",
          locator: "Care, flocky coat maintenance, and exercise"
        }
      ],
      verifiedOn: null,
      note:
        "Combines toy companion care with flocky single-coat combing and tear-stain management protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-kennel-club-bolognese-breed-standard",
          role: "verified",
          locator: "Exercise requirements: Up to 30 minutes per day"
        },
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Energy Level (2/5); Exercise Needs (2/5)"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "the-kennel-club-bolognese-breed-standard",
          role: "cited",
          locator: "Exercise: Up to 30 minutes daily"
        },
        {
          id: "akc-bolognese-breed-profile",
          role: "cited",
          locator: "Daily exercise recommendations"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 30 to 45 minutes of daily activity reflects the moderate exercise demands of a companion toy breed."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Adaptability: Adapts Well to Apartment Living (5/5)"
        },
        {
          id: "the-kennel-club-bolognese-breed-standard",
          role: "verified",
          locator: "Living environment: Flat/Apartment suitable"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Exercise and small yard play"
        },
        {
          id: "the-kennel-club-bolognese-breed-standard",
          role: "verified",
          locator: "Living environment: Small garden suitable"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "COAT: Single coat without undercoat, indoor companion"
        },
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Weather sensitivity: needs indoor climate control in extreme heat or cold"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Tolerates Being Alone: Low rating (1/5 to 2/5); velcro companion"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food, portion control, treat budgeting"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for small toy companion breeds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance and juvenile meal schedules"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-bolognese-health-screenings",
          role: "verified",
          locator: "Health screening guidance: Patellar Luxation, Eye Examination, Cardiac evaluation"
        },
        {
          id: "enci-bolognese-breed-standard",
          role: "verified",
          locator: "Salute e benessere della razza Bolognese"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Synthesizes national health registry screening guidance with Italian kennel club breed health data."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-bolognese-health-screenings",
          role: "verified",
          locator: "Patellar luxation, eye disorders (cataracts, PRA), Legg-Calve-Perthes"
        },
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Periodontal disease in toy mouths, tear staining (epiphora)"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Details documented genetic and conformational conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "ofa-bolognese-health-screenings",
          role: "cited",
          locator: "Health screening, patella checks, and eye examinations"
        },
        {
          id: "akc-bolognese-breed-profile",
          role: "cited",
          locator: "Routine wellness and dental care"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to small toy companion dogs."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-bolognese-health-screenings",
          role: "verified",
          locator: "Recommended evaluations: Patellar Luxation clinical grading, CAER Eye examination, Cardiac examination"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Screenings summarize published parent club and health registry protocols."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-bolognese-official-standard",
          role: "cited",
          locator: "Jaws/teeth: complete scissor bite with sound teeth"
        },
        {
          id: "akc-bolognese-breed-profile",
          role: "cited",
          locator: "Routine dental care for toy jaws"
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines for toy breeds."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-bolognese-official-standard",
          role: "cited",
          locator: "Ears: long, hanging, rather rigid at base"
        },
        {
          id: "akc-bolognese-breed-profile",
          role: "cited",
          locator: "Ear hygiene and inspection"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for flocky drop ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-bolognese-official-standard",
          role: "cited",
          locator: "Skin taut, tight to body; pure white flocky coat care"
        }
      ],
      verifiedOn: null,
      note: "Dermatological care protocol for breeds with long single flocky coats."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        },
        {
          id: "the-kennel-club-bolognese-breed-standard",
          role: "cited",
          locator: "Characteristics, lifestyle suitability, and exercise"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, gentle toy size, and household adaptability."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Medici court gifts, Catherine the Great, Madame de Pompadour, Titian and Goya paintings, velcro dog personality"
        },
        {
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "Brief historical summary: Aristotle Canes Melitenses, Bologna Renaissance nobility, flocky coat without trimming"
        },
        {
          id: "enci-bolognese-breed-standard",
          role: "verified",
          locator: "Cenni storici e tradizione cortigiana italiana"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Verified historical folklore and cultural heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-bolognese-official-standard",
          role: "verified",
          locator: "Origin, size (25-30 cm), weight (2.5-4 kg), flocky coat, and comparison with Bichon Frise"
        },
        {
          id: "the-kennel-club-bolognese-breed-standard",
          role: "verified",
          locator: "Characteristics and temperament"
        },
        {
          id: "akc-bolognese-breed-profile",
          role: "verified",
          locator: "Lifespan (12-14 years), grooming, apartment living, and separation anxiety"
        },
        {
          id: "ofa-bolognese-health-screenings",
          role: "verified",
          locator: "Recommended health screening panel"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and health data without naming registries in prose."
    }
  },

  updatedOn: "2026-11-10"
};
