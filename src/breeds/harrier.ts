import type { Breed } from "../schema/breed.types";

export const harrier: Breed = {
  slug: "harrier",
  name: "Harrier",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Hare Hound",
    "English Harrier"
  ],

  group: "Medium-Sized Scenthound (Hound)",

  origin: {
    country: "Great Britain",
    region:
      "England (historically associated with Yorkshire and rural hare-hunting districts across England)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Harrier_tricolour.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Harrier_tricolour.jpg",
      title: "Harrier tricolour.jpg",
      description:
        "An adult tricolour Harrier photographed outdoors.",
      creator: "Smcmilla (edited by Pharaoh Hound)",
      uploader: "Pharaoh Hound",
      capturedOn: null,
      uploadedOn: "2007-03-09",
      width: 540,
      height: 500,
      licenseId: "public-domain",
      attribution:
        "Photo by Smcmilla (edited by Pharaoh Hound), Wikimedia Commons, Public Domain. Source: https://commons.wikimedia.org/wiki/File:Harrier_tricolour.jpg.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Harrier_Hound_-Pedigree_Harrier.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Harrier_Hound_-Pedigree_Harrier.jpg",
      title: "Harrier Hound -Pedigree Harrier.jpg",
      description:
        "A pedigree tricolour Harrier standing outdoors in profile.",
      creator: "Evforce",
      uploader: "Evforce",
      capturedOn: "2021-10-22",
      uploadedOn: null,
      width: 3072,
      height: 4608,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Evforce, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Harrier_Hound_-Pedigree_Harrier.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-21"
    }
  ],

  overview: {
    summary:
      "A medium-sized British scenthound bred for steady stamina and scent-tracking endurance, known for its smooth hound coat, friendly pack nature, and clear baying voice.",

    description:
      "The Harrier is a compact, strongly built, and well-balanced scenthound that sits squarely between the smaller Beagle and the larger English Foxhound in height and frame. Shaped by centuries of pursuing hares and rabbits across varied British terrain, it pairs solid bone and deep lung capacity with smooth, ground-covering movement. Its short, dense, weatherproof coat lies flat over a muscular, unexaggerated body with a deep chest reaching below the elbows, well-sprung ribs, a level topline with a slight arch over the loin, and straight, well-boned legs. The head is cleanly modeled with a fairly broad skull tapering gently toward a rectangular muzzle, bright oval eyes whose shade harmonizes with the coat, and drop ears hanging close to the cheeks. Indoors, this outgoing hound is cheerful, gentle, and eager for companionship, though its nose quickly takes charge once outdoors.",

    history:
      "Harriers belong to England's long tradition of pack scenthounds, with historical accounts tracing the Penistone pack in Yorkshire to Sir Elias de Midhope around 1260. The name itself stems from the Norman word 'harier', referring to a hunting hound. Over the centuries, British breeders refined medium-sized packs capable of working hares and rabbits steadily across open country, followed either on foot or on horseback; during the nineteenth century, some lines were crossed with Foxhounds to add pace for mounted followers. British packs were historically maintained in working hunting studbooks rather than conformation rings, leaving the breed relatively uncommon in modern British show entries even as dedicated breeders in France, continental Europe, and North America—where the hound has been used since colonial times—preserved its athletic build and friendly temperament.",

    originalPurpose:
      "Hunting hare and rabbit in organized packs across varied countryside by scenting and trailing quarry with steady stamina.",

    currentRoles: [
      "Pack and drag-hunt scenthound",
      "Scentwork, tracking, and trailing sport partner",
      "Active family companion for outdoor-oriented households",
      "Canine athlete in rally, coursing ability tests, and long-distance hiking"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 48,
        max: 55
      },
      female: {
        min: 48,
        max: 55
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 20,
        max: 27
      },
      female: {
        min: 20,
        max: 27
      }
    },

    lifespanYears: {
      min: 12,
      max: 15
    },

    coatType:
      "Short, dense, flat-lying, and weatherproof smooth coat with a glossy finish; hair on the ears is finer and softer.",

    coatLength: "Short",

    coatColors: [
      "Tri-colour (black, white, and tan)",
      "Lemon and white",
      "Red and white",
      "Black and tan",
      "Badger pied",
      "White",
      "Blue mottle (occasional recognised hound marking)"
    ],

    sheddingLevel:
      "Moderate year-round shedding; short, smooth hairs loosen steadily and stay tidy with weekly brushing",

    droolingLevel:
      "Low; clean cheeks and moderate flews produce little drool outside of drinking or heavy exercise",

    distinctiveFeatures: [
      "Compact, muscular scenthound build positioned between the Beagle and the English Foxhound in size",
      "Height at the withers of 48 to 55 cm",
      "Athletic working weight of 20 to 27 kg",
      "Short, dense, glossy, weatherproof coat in traditional hound colours and markings",
      "Long, refined head with a moderately broad skull, slight stop, clean cheeks, and rectangular muzzle",
      "Large nose with wide, open nostrils built for sustained scenting",
      "Bright, deeply set oval eyes harmonising with the coat colour and showing a lively, friendly expression",
      "Drop ears hanging neatly along the head with soft, finer hair",
      "Deep chest extending below the elbows, long well-sprung ribcage, and a level topline with a slight arch over the muscular loin",
      "Long, clean, slightly arched neck allowing the hound to lower its nose effortlessly to the ground",
      "Long tail set on and carried high in a fairly straight line, never curled over the back",
      "Straight, clean-cut, well-boned forelegs, short strong pasterns, and compact, durable feet"
    ]
  },

  temperament: {
    traits: [
      "Friendly, cheerful, and people-oriented in daily home life",
      "Outgoing and sociable with other dogs thanks to generations of pack living",
      "Energetic and stamina-driven outdoors, happiest when given a job to follow",
      "Gentle and sturdy companion for households with supervised children",
      "Intelligent and curious, yet independent-minded when a fresh scent catches its interest",
      "Persistent and focused while trailing, often tuning out verbal cues once locked onto a track",
      "Vocal with a carrying, musical hound bay",
      "Strong instinct to chase rabbits, squirrels, and other fast-moving small animals",
      "Polite and welcoming toward visitors rather than territorial or protective"
    ],

    scores: {
      affection: 5,
      withChildren: 5,
      withDogs: 5,
      withStrangers: 4,
      protectiveness: 2,
      independence: 4,
      trainability: 3,
      barking: 4,
      energy: 5
    }
  },

  care: {
    exercise: {
      level:
        "High; an endurance-bred scenthound that needs generous daily aerobic movement plus regular scent-based mental outlets",

      minutesPerDay: {
        min: 90,
        max: 120
      },

      activities: [
        "Brisk daily leashed walks and countryside hikes with dedicated sniffing breaks",
        "Supervised running and exploration inside a tall, securely fenced yard",
        "Structured tracking, scentwork, and nose-search games",
        "Dog sports such as rally, coursing ability tests, and agility",
        "Social group walks or play sessions with compatible dogs",
        "Interactive food-dispensing puzzles and scent-hide toys between outings"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush weekly with a soft-bristle brush or rubber hound glove to sweep away loose hair and keep the short coat glossy.",

      bathing:
        "Bathe occasionally—roughly every six to eight weeks or after muddy field outings—using a gentle canine shampoo.",

      notes: [
        "The short, flat coat sheds dirt easily and needs no clipping or professional trimming.",
        "Check and gently clean the pendant ears once a week to prevent wax, debris, or trapped moisture.",
        "Inspect paws, pads, and ear edges after brushy trail walks for thorns, burrs, or small scrapes.",
        "Trim nails regularly so they stay short and do not interfere with the hound's stride.",
        "Brush teeth frequently with dog-safe enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Moderate; bright, eager for food rewards, and good-humoured, yet independent enough to require calm, consistent leadership",

      tips: [
        "Lead with positive reinforcement, tasty treats, and upbeat praise rather than harsh corrections.",
        "Keep obedience lessons brief, varied, and engaging so the hound stays focused.",
        "Rely on a sturdy leash or a securely enclosed yard outdoors; an intriguing trail can override recall.",
        "Build recall habits early on a long training line in low-distraction areas before progressing outdoors.",
        "Introduce a reliable 'quiet' cue early to channel vocal hound habits.",
        "Channel scenting instincts constructively through nosework and tracking exercises."
      ],

      socialization:
        "Begin gentle, positive exposure during puppyhood to varied people, friendly vaccinated dogs, everyday noises, and unfamiliar outdoor settings. Early, steady socialization reinforces the breed's naturally outgoing, confident disposition."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool climates, where the dense, weatherproof coat offers reliable field protection during active movement",
        "Warm climates, provided shade, fresh water, indoor cooling, and early or late exercise scheduling are maintained"
      ],

      aloneTimeTolerance:
        "Low to moderate; bred to live and work in company, this hound can grow bored and noisy if left isolated for long stretches."
    }
  },

  nutrition: {
    dietType:
      "Complete and balanced commercial dog food formulated for active medium-sized breeds, tailored to life stage and daily workload.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until about six months of age, then transitioning to two measured meals per day.",
      adult:
        "Two measured meals per day to maintain steady energy and comfortable digestion.",
      senior:
        "Two portion-controlled meals daily calibrated for lower caloric burn while preserving lean muscle."
    },

    guidelines:
      "Weigh or measure every meal rather than free-feeding, since food-driven scenthounds gain excess weight easily. Keep the dog in lean, athletic condition with an easily felt ribcage and visible waist. Splitting the daily ration into two meals and allowing quiet rest before and after eating helps support digestive safety in deep-chested dogs.",

    considerations: [
      "Keep weight lean to protect hip joints and maintain field endurance.",
      "Count training treats toward the total daily calorie allowance.",
      "Avoid vigorous running right before or after meals as a precaution against bloat.",
      "Skip rich, greasy table scraps that can upset digestion.",
      "Keep cool, fresh water readily available during and after active outings.",
      "Switch diets gradually over five to seven days to avoid stomach upset."
    ],

    note:
      "Daily calorie needs shift considerably between active trail seasons and quieter periods. Consult a veterinarian for an individualized feeding plan."
  },

  health: {
    overview:
      "The Harrier is generally a sturdy, long-lived hound with a typical life expectancy of 12 to 15 years and no major conformational exaggerations. Responsible breeding prioritizes orthopedic screening for hip dysplasia and regular specialist eye examinations, while everyday preventive care focuses on drop-ear hygiene, weight management, and bloat-aware feeding habits.",

    commonConditions: [
      "Hip dysplasia — an inherited developmental looseness of the hip joint that can progress to arthritis; screened via pre-breeding radiographic hip evaluations",
      "Hereditary eye disorders — conditions such as cataracts or progressive retinal atrophy (PRA) are monitored through periodic examinations by a veterinary ophthalmologist",
      "Otitis externa (outer ear infections) — a conformational risk shared by drop-eared hounds, as folded ear flaps restrict airflow and retain moisture",
      "Gastric dilatation-volvulus (GDV / bloat) — a life-threatening stomach distension and twisting risk seen across deep-chested breeds, requiring emergency veterinary treatment",
      "Minor outdoor field injuries — scratches, paw pad cuts, or ear-tip nicks picked up while moving through brambles and rough cover"
    ],

    preventiveCare: [
      "Verify that breeding parents have completed radiographic hip evaluations and current specialist eye examinations.",
      "Inspect and dry the drop ears weekly, cleaning gently with a veterinarian-approved solution when needed.",
      "Keep body weight lean and well-muscled to reduce stress on joints over a long lifespan.",
      "Divide daily food into two measured meals and schedule calm rest around mealtime.",
      "Maintain year-round veterinary parasite prevention against ticks, fleas, and heartworm.",
      "Book routine annual veterinary checkups and keep core vaccinations up to date."
    ],

    recommendedScreenings: [
      "Radiographic hip evaluation prior to breeding",
      "Periodic eye examination by a board-certified veterinary ophthalmologist",
      "Routine veterinary wellness and cardiovascular checkups"
    ],

    dentalCare:
      "Brush teeth several times a week using dog-safe enzymatic toothpaste, and pair home care with routine veterinary oral exams to keep gums and teeth healthy.",

    earCare:
      "Lift and inspect the hanging ears weekly for odour, redness, wax buildup, or dampness after wet walks, wiping gently with a veterinarian-recommended cleanser.",

    skinCare:
      "Run a brush through the short coat weekly to inspect the skin for ticks, scrapes, or irritation, checking the undercarriage and ear margins closely after woodland walks."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Active households, hikers, and joggers ready to commit to generous daily outdoor exercise",
      "Families with children looking for a cheerful, sturdy, and affectionate dog",
      "Homes with a securely fenced yard where a scent-driven hound cannot slip out",
      "Multi-dog homes that benefit from a naturally pack-friendly temperament",
      "Owners interested in tracking, nosework, rally, or coursing sports"
    ],

    notIdealFor: [
      "Quiet or sedentary households seeking a low-energy indoor companion",
      "Apartments or close-quarters housing where carrying hound bays may disturb neighbours",
      "Homes with free-roaming pet rabbits, rodents, or other small prey animals",
      "Schedules that leave the dog alone for long workdays without companionship or exercise",
      "Owners wanting an aloof or protective watchdog"
    ]
  },

  funFacts: [
    "The breed's name traces back to the Norman word 'harier', meaning a hunting hound, reflecting centuries of pack work across the English countryside.",
    "One of England's earliest documented packs was the Penistone Harrier pack in Yorkshire, founded by Sir Elias de Midhope in 1260.",
    "Because the Harrier stands neatly between the Beagle and the English Foxhound, fans have long nicknamed it a 'Beagle on stilts' or a scaled-down Foxhound.",
    "Historically, Harrier packs were versatile enough to be followed either on foot or on horseback, and they have also been used in North America since colonial times.",
    "A Harrier's carrying, musical bay helped hunters track the pack's path through valleys and hedgerows even when the hounds were out of sight.",
    "Despite being one of Britain's oldest native hound breeds, Harriers remain uncommon in modern pet homes compared with Beagles."
  ],

  faq: [
    {
      question: "What kind of dog is a Harrier?",
      answer:
        "The Harrier is a medium-sized British scenthound originally developed to hunt hares and rabbits in packs. It is known for its smooth coat, athletic stamina, friendly pack nature, and carrying bay."
    },
    {
      question: "How does a Harrier differ from a Beagle and an English Foxhound?",
      answer:
        "Size and pace set them apart: the Harrier sits directly between the smaller Beagle and the taller English Foxhound, combining the Beagle's approachable, friendly outlook with a longer-legged, faster frame."
    },
    {
      question: "How tall and heavy does a Harrier get?",
      answer:
        "Adults typically stand 48 to 55 cm at the withers and weigh 20 to 27 kg in lean, athletic condition."
    },
    {
      question: "What is the average lifespan of a Harrier?",
      answer:
        "A well-cared-for Harrier typically lives 12 to 15 years."
    },
    {
      question: "How much grooming does a Harrier require?",
      answer:
        "Grooming is straightforward. The short, dense coat sheds moderately and needs only weekly brushing with a soft brush or hound glove, alongside weekly ear checks, regular nail trims, and frequent tooth brushing."
    },
    {
      question: "Are Harriers suited to apartment living?",
      answer:
        "Usually not. Their high exercise requirements, strong scenting drive, and resonant baying voice make them much better suited to a house with a securely fenced yard."
    },
    {
      question: "Do Harriers get along with children and other dogs?",
      answer:
        "Yes. Bred to work harmoniously in packs, Harriers are typically outgoing, patient, and gentle with children and very sociable with other dogs, though small pet animals like rabbits can trigger their chase instinct."
    },
    {
      question: "How easy is it to train a Harrier?",
      answer:
        "Harriers are bright and motivated by food rewards, which helps with positive-reinforcement training, but their independent nose means recall outdoors can be unreliable once they catch an exciting scent."
    },
    {
      question: "How much daily exercise does a Harrier need?",
      answer:
        "Plan on roughly 90 to 120 minutes of daily activity—and often over two hours for high-drive individuals—combining brisk leashed walks, secure yard time, and sniffing or tracking games."
    },
    {
      question: "Which health screenings are recommended for Harriers?",
      answer:
        "Pre-breeding health screening focuses on radiographic hip evaluations and periodic examinations by a board-certified veterinary ophthalmologist, complemented by routine veterinary wellness care."
    }
  ],

  references: [
    "natureserve-canis-lupus-familiaris",
    "fci-harrier-official-standard",
    "fci-harrier-nomenclature",
    "the-kennel-club-harrier-breed-standard",
    "rkc-harrier-breed-profile",
    "akc-harrier-breed-standard",
    "akc-harrier-breed-profile",
    "ukc-harrier-breed-standard",
    "scc-harrier-breed-profile",
    "club-du-beagle-harrier-et-harrier-profile",
    "ofa-harrier-health-screenings",
    "wikimedia-harrier-tricolour-lilly-m",
    "wikimedia-harrier-pedigree-evforce",
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
      verifiedOn: "2026-11-21",
      note:
        "Verified standard domestic-dog trinomial taxonomy across the catalog."
    },

    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-harrier-breed-profile",
          role: "verified",
          locator: "About the breed: known in some quarters as 'Hare Hound'"
        },
        {
          id: "fci-harrier-nomenclature",
          role: "verified",
          locator: "Official nomenclature: HARRIER (295)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "alternateNames: [] (empty; no alternate names listed)"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "'Hare Hound' is directly documented by The Royal Kennel Club; 'English Harrier' is a standard English descriptive synonym."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-harrier-nomenclature",
          role: "verified",
          locator: "Group n°6 - Scent hounds and related breeds; Section: Scent hounds; Subsection: Medium-sized Hounds; Subject to a working trial"
        },
        {
          id: "the-kennel-club-harrier-breed-standard",
          role: "verified",
          locator: "Hound Group"
        },
        {
          id: "akc-harrier-breed-profile",
          role: "verified",
          locator: "Hound Group (recognized 1885)"
        },
        {
          id: "ukc-harrier-breed-standard",
          role: "verified",
          locator: "Scenthound Group"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "group: Hound"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "User-facing group wording omits kennel-club names and numeric section labels per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-harrier-nomenclature",
          role: "verified",
          locator: "Country of origin of the breed: GREAT BRITAIN; definitive acceptance 1974-11-27"
        },
        {
          id: "rkc-harrier-breed-profile",
          role: "verified",
          locator: "British hare-hunting heritage dating to the 13th century"
        },
        {
          id: "akc-harrier-breed-profile",
          role: "verified",
          locator: "History: 1260 Penistone pack in Yorkshire, England"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "origin.country: England (official FCI nomenclature lists Great Britain)"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "Preserved 'Great Britain' per official FCI nomenclature; England is specified in origin.region."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "the-kennel-club-harrier-breed-standard",
          role: "verified",
          locator: "General appearance, Characteristics, Temperament, Head and Skull, Body, Coat"
        },
        {
          id: "rkc-harrier-breed-profile",
          role: "verified",
          locator: "Breed history, intermediate size between Foxhound and Beagle, 19th-century Foxhound interbreeding"
        },
        {
          id: "akc-harrier-breed-profile",
          role: "verified",
          locator: "About the Breed, History (1260 Penistone pack, Norman 'harier', U.S. colonial use, drag hunts, tracking/rally/coursing)"
        },
        {
          id: "club-du-beagle-harrier-et-harrier-profile",
          role: "verified",
          locator: "Le Harrier — French parent club breed profile (2018-07-15)"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "Written in completely original prose verified across RKC, AKC, FCI, and SCC/French parent club publications."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "the-kennel-club-harrier-breed-standard",
          role: "verified",
          locator: "General appearance, Head and Skull, Eyes, Neck, Forequarters, Body, Tail, Coat (short, dense and weatherproof), Colour (any recognised hound colours)"
        },
        {
          id: "rkc-harrier-breed-profile",
          role: "verified",
          locator: "Breed Standard colours: Badger Pied, Black & Tan, Lemon & White, Red & White, Tri-colour, White"
        },
        {
          id: "akc-harrier-breed-profile",
          role: "verified",
          locator: "Colors: Black White & Tan, Lemon & White, Red & White, plus occasional blue mottle"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "coatColors lists 17 generic canine colors including Chocolate, Brindle, Merle, and Cream; non-standard colors were excluded"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "Removed unverified 'double coat' claim from earlier draft; RKC describes the coat as short, dense, and weatherproof. Excluded non-standard colors from The Dog API."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-harrier-official-standard",
          role: "verified",
          locator: "SIZE: 48 to 55 cm (ideally 48 to 50 cm)"
        },
        {
          id: "scc-harrier-breed-profile",
          role: "verified",
          locator: "Taille: 0.48 à 0.53 m with +2 cm tolerance for exceptional specimens (up to 55 cm)"
        },
        {
          id: "the-kennel-club-harrier-breed-standard",
          role: "conflicting",
          locator: "Ideal height: dogs 53 cms (21 ins); bitches 48 cms (19 ins), with a tolerance of 2.5cm (1in) smaller"
        },
        {
          id: "akc-harrier-breed-profile",
          role: "conflicting",
          locator: "Height: 19–21 inches"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "height: 48–53 cm (omits the 55 cm upper tolerance published in FCI Standard No. 295)"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "Preserved 48–55 cm in published centimetres per FCI Standard No. 295 (and SCC's 48–53 cm + 2 cm tolerance). RKC publishes sex-specific ideal heights (53 cm males, 48 cm females, with 2.5 cm downward tolerance), and AKC publishes 19–21 inches."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-harrier-breed-profile",
          role: "verified",
          locator: "Indicative weight range: 20 to 27 kg"
        },
        {
          id: "akc-harrier-breed-profile",
          role: "verified",
          locator: "Weight: 45–60 pounds"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "weight: 20–27 kg (breed-wide)"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "Neither FCI Standard No. 295 nor RKC fixes a numerical weight. Replaced the unverified sex-split draft figures (22–27 kg / 20–25 kg) with the published breed-wide 20–27 kg range."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-harrier-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12–15 years"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "lifespanYears: 12–15"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Consistent across AKC and The Dog API."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-harrier-breed-profile",
          role: "verified",
          locator: "Grooming: short glossy coat, minimal maintenance, weekly brushing"
        },
        {
          id: "the-kennel-club-harrier-breed-standard",
          role: "verified",
          locator: "Coat: Short, dense and weatherproof"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "the-kennel-club-harrier-breed-standard",
          role: "verified",
          locator: "Head and Skull: Clean cheeks; flews not excessive"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Clean cheeks and non-excessive flews correspond to low drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "the-kennel-club-harrier-breed-standard",
          role: "verified",
          locator: "Temperament: Friendly, lively; aggression or nervousness unacceptable"
        },
        {
          id: "akc-harrier-breed-profile",
          role: "verified",
          locator: "Temperament: friendly, outgoing, people-oriented, independent/stubborn, pack-oriented"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "temperament.traits: Friendly, outgoing, energetic, intelligent, gentle"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-harrier-breed-profile",
          role: "cited",
          locator: "Breed traits, high exercise needs, friendly and independent scenthound profile"
        },
        {
          id: "rkc-harrier-breed-profile",
          role: "cited",
          locator: "Exercise: More than 2 hours per day; pack-hound characteristics"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 scores synthesized from verified temperament and exercise profiles; energy updated to 5 to reflect RKC's >2 hours/day exercise demand."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-harrier-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Health care guidance"
        },
        {
          id: "rkc-harrier-breed-profile",
          role: "cited",
          locator: "Exercise (>2 hours/day) and care overview"
        }
      ],
      verifiedOn: null,
      note:
        "Combines kennel-club care recommendations with standard drop-ear and scenthound containment practices."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-harrier-breed-profile",
          role: "verified",
          locator: "Exercise: More than 2 hours per day"
        },
        {
          id: "akc-harrier-breed-profile",
          role: "verified",
          locator: "High exercise needs; securely fenced yard, leash walks, tracking, rally, coursing"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "rkc-harrier-breed-profile",
          role: "cited",
          locator: "Exercise: More than 2 hours per day"
        },
        {
          id: "akc-harrier-breed-profile",
          role: "cited",
          locator: "High daily exercise requirements"
        }
      ],
      verifiedOn: null,
      note:
        "Updated from 60–90 to 90–120 minutes/day to better align with RKC's published 'More than 2 hours per day' recommendation."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-harrier-breed-profile",
          role: "cited",
          locator: "High exercise needs, securely fenced yard recommendation, vocal hound nature"
        },
        {
          id: "rkc-harrier-breed-profile",
          role: "cited",
          locator: "More than 2 hours per day exercise demand"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability assessment based on exercise needs, yard containment, and vocal baying."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-harrier-breed-profile",
          role: "verified",
          locator: "Securely fenced yard and leashed walks recommended"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-kennel-club-harrier-breed-standard",
          role: "verified",
          locator: "Coat: Short, dense and weatherproof; built to hunt over different terrains"
        }
      ],
      verifiedOn: "2026-11-21",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-harrier-breed-profile",
          role: "cited",
          locator: "People-oriented and pack-oriented scenthound"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-harrier-breed-profile",
          role: "cited",
          locator: "General canine nutrition and portion-control guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Standard feeding recommendations for active medium-sized scenthounds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-harrier-breed-profile",
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
          id: "akc-harrier-breed-profile",
          role: "verified",
          locator: "Generally healthy; recommended health tests: Hip Evaluation, Ophthalmologist Evaluation; life expectancy 12–15 years"
        },
        {
          id: "rkc-harrier-breed-profile",
          role: "verified",
          locator: "Breed Watch: no points of concern"
        },
        {
          id: "ofa-harrier-health-screenings",
          role: "verified",
          locator: "OFA CHIC Browse By Breed listing for Harrier (HAR)"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "Distinguishes parent-club recommended screenings from general drop-ear and deep-chested conformational precautions."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-harrier-breed-profile",
          role: "verified",
          locator: "Hip Evaluation, Ophthalmologist Evaluation, weekly ear inspection/cleaning"
        },
        {
          id: "ofa-harrier-health-screenings",
          role: "verified",
          locator: "Harrier health screening listing (hip and eye focus)"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "Removed unverified claim of 'primary epilepsy' as a documented breed-wide condition and clearly separated screened hereditary risks from conformational precautions."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-harrier-breed-profile",
          role: "cited",
          locator: "Health screening, weekly ear inspection/cleaning, dental care"
        },
        {
          id: "ofa-harrier-health-screenings",
          role: "cited",
          locator: "Pre-breeding health testing"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care for active drop-eared scenthounds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-harrier-breed-profile",
          role: "verified",
          locator: "Recommended Health Tests from the National Breed Club: Hip Evaluation, Ophthalmologist Evaluation"
        },
        {
          id: "ofa-harrier-health-screenings",
          role: "verified",
          locator: "OFA breed screening portal for Harrier (HAR)"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "Aligned strictly with published National Breed Club recommendations (Hip Evaluation and Ophthalmologist Evaluation), removing unverified mandatory elbow dysplasia screening."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-harrier-breed-profile",
          role: "cited",
          locator: "Grooming: frequent teeth brushing"
        }
      ],
      verifiedOn: null,
      note: "Standard home and veterinary dental hygiene guidance."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-harrier-breed-profile",
          role: "cited",
          locator: "Grooming: weekly ear inspection and cleaning"
        }
      ],
      verifiedOn: null,
      note: "Standard drop-ear hygiene protocol."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-harrier-breed-profile",
          role: "cited",
          locator: "Grooming: weekly brushing and coat inspection"
        }
      ],
      verifiedOn: null,
      note: "General skin and short-coat inspection guidance."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-harrier-breed-profile",
          role: "cited",
          locator: "Temperament, exercise needs, securely fenced yard, family-oriented hound"
        },
        {
          id: "rkc-harrier-breed-profile",
          role: "cited",
          locator: "Exercise: More than 2 hours per day"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability ratings based on verified exercise, containment, and temperament requirements."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-harrier-breed-profile",
          role: "verified",
          locator: "Did You Know & History: Norman 'harier', 1260 Penistone pack by Sir Elias de Midhope, U.S. colonial use"
        },
        {
          id: "rkc-harrier-breed-profile",
          role: "verified",
          locator: "Intermediate size between Beagle and Foxhound, 13th-century history"
        }
      ],
      verifiedOn: "2026-11-21",
      note: "Verified historical and breed-heritage facts written in original prose."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-harrier-official-standard",
          role: "verified",
          locator: "Height (48–55 cm) and medium-sized scenthound profile"
        },
        {
          id: "rkc-harrier-breed-profile",
          role: "verified",
          locator: "Comparison with Beagle and Foxhound, >2 hours/day exercise"
        },
        {
          id: "akc-harrier-breed-profile",
          role: "verified",
          locator: "Lifespan (12–15 years), grooming, training, Hip & Ophthalmologist evaluations"
        },
        {
          id: "scc-harrier-breed-profile",
          role: "verified",
          locator: "Weight range (20–27 kg)"
        }
      ],
      verifiedOn: "2026-11-21",
      note:
        "Original FAQ answers grounded in verified standards and kennel club profiles without Rule 5 registry terms."
    }
  },

  updatedOn: "2026-11-21"
};
