import type { Breed } from "../schema/breed.types";

export const dachshund: Breed = {
  slug: "dachshund",
  name: "Dachshund",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Dackel",
    "Teckel",
    "Doxie",
    "Wiener Dog",
    "Sausage Dog",
    "Badger Dog"
  ],

  group: "Dachshunds and scent hounds",

  origin: {
    country: "Germany",
    region: "Central Europe"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Wire-haired_Dachshund_R_01.JPG",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Wire-haired_Dachshund_R_01.JPG",
      title: "Wire-haired Dachshund R 01.JPG",
      description:
        "Portrait of a wire-haired Dachshund outdoors showing its harsh coat, beard, bushy eyebrows, and alert gaze.",
      creator: "Lilly M",
      uploader: "Lilly M",
      capturedOn: "2007-06-10",
      uploadedOn: "2007-06-27",
      width: 1814,
      height: 2592,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Lilly M, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Wire-haired_Dachshund_R_01.JPG. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dachshund_smooth-coated_Dachshund.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Dachshund_smooth-coated_Dachshund.jpg",
      title: "Dachshund smooth-coated Dachshund.jpg",
      description:
        "A brown smooth-coated Dachshund resting on grass, showing its sleek short coat, long ears, and tapered muzzle.",
      creator: "kmoney56",
      uploader: "Pharaoh Hound",
      capturedOn: "2007-02-04",
      uploadedOn: "2007-05-20",
      width: 1280,
      height: 851,
      licenseId: "cc-by-sa-2.0",
      attribution:
        "Photo by kmoney56, Wikimedia Commons, CC BY-SA 2.0. Source: https://commons.wikimedia.org/wiki/File:Dachshund_smooth-coated_Dachshund.jpg. License: https://creativecommons.org/licenses/by-sa/2.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    }
  ],

  overview: {
    summary:
      "A low-slung, long-backed German scent hound bred to pursue badgers and other burrowing game underground, prized today for its bold spirit, cleverness, and affectionate nature.",

    description:
      "The Dachshund stands apart immediately with its stretched, muscular torso, deep chest, and short, sturdy legs built for digging and navigating tight earth tunnels. It appears in three distinct coat varieties: smooth and glossy, long and silky with feathering, or dense and wiry with a beard and bushy eyebrows. Its long, evenly tapered head carries soft, mobile drop ears and dark, almond-shaped eyes full of curiosity and determination. Even in its smallest form, this hound keeps a fearless working temperament, pairing a remarkably deep voice and independent mind with warm, playful devotion to its household.",

    history:
      "Named directly from the German words for badger and dog, Dachshund-type hounds were already being shaped in Germany by the fifteenth and sixteenth centuries to track, dig into dens, and confront badgers, foxes, and rabbits underground. Breeders gradually selected for short, strong legs, generous chest capacity, and resolute courage while introducing terrier lines for rough, thorn-resistant wire coats and spaniel lines for weather-protective long coats. Smaller varieties emerged to follow rabbits and other narrow-burrow quarry. By the late nineteenth century, the breed had spread well beyond German forests to become one of the most recognizable companion dogs worldwide.",

    originalPurpose:
      "Tracking, digging into dens, and flushing badgers, foxes, and rabbits above and below ground.",

    currentRoles: [
      "Affectionate, lively household companion",
      "Alert, deep-voiced home watchdog",
      "Participant in earthdog, tracking, and scent-work trials",
      "Active underground and trailing hunting hound in parts of Europe"
    ]
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "in",
      male: {
        min: 5,
        max: 9
      },
      female: {
        min: 5,
        max: 9
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: null,
        max: 32
      },
      female: {
        min: null,
        max: 32
      }
    },

    lifespanYears: {
      min: 12,
      max: 16
    },

    coatType:
      "Three coat varieties: smooth (short, dense, and glossy), long-haired (sleek, slightly wavy, with longer feathering on the ears, underside, legs, and tail), and wire-haired (harsh, dense outer coat with a softer undercoat, beard, and bushy eyebrows).",

    coatLength: "Varies",

    coatColors: [
      "Red (clear red to reddish-brown)",
      "Black and tan",
      "Chocolate and tan",
      "Wild boar (grizzled banding most common in wire-haired coats)",
      "Dapple (merle pattern with irregular lighter patches over a dark or red base)",
      "Brindle (dark striping over a red base)",
      "Cream",
      "Piebald (white with solid-colored patches, accepted in some regions)"
    ],

    sheddingLevel:
      "Moderate; shedding varies by coat variety, with smooth coats needing simple wipe-downs, long coats requiring regular brushing, and wire coats benefiting from periodic hand-stripping",

    droolingLevel:
      "Low; taut, well-fitted lips keep drooling minimal",

    distinctiveFeatures: [
      "Elongated, muscular body set low on short, sturdy legs with elastic skin",
      "Two main size bands in North America: full-sized dogs stand about 8 to 9 inches tall and typically weigh 16 to 32 pounds, while miniatures stand 5 to 6 inches tall and weigh 11 pounds and under",
      "Long, wedge-shaped head tapering smoothly toward the nose with strong jaws and a tight scissor bite",
      "Medium-sized, oval eyes with an energetic, intelligent expression",
      "High-set, rounded drop ears whose front edges rest close to the cheeks",
      "Deep, well-developed chest with a prominent breastbone supporting strong lung capacity",
      "Compact, arched, broad front paws shaped for digging",
      "Tail carried cleanly in line with the spine (feathered into a flag on long-haired dogs)"
    ]
  },

  temperament: {
    traits: [
      "Courageous, spirited, and tenacious with classic scent-hound drive",
      "Clever and quick-witted, yet famously stubborn once locked onto an interesting smell",
      "Warmly affectionate, playful, and closely bonded to its family",
      "Watchful and quick to bark, producing a surprisingly deep voice for its size",
      "Independent thinker bred to work out problems inside dark burrows alone",
      "Reserved around unfamiliar visitors until properly introduced",
      "Strong chasing instinct around rodents and small scurrying animals"
    ],

    scores: {
      affection: 5,
      withChildren: 3,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 4,
      independence: 4,
      trainability: 3,
      barking: 5,
      energy: 3
    }
  },

  care: {
    exercise: {
      level:
        "Moderate; needs steady daily walks to build strong back and core muscles that protect the long spine, without high-impact jumping",

      minutesPerDay: {
        min: 30,
        max: 60
      },

      activities: [
        "Two moderate, brisk daily leash walks on level ground",
        "Scent-tracking games and indoor nosework puzzles",
        "Earthdog trials and supervised ground-level play",
        "Short fetch games on grass or non-slip floors"
      ]
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Wipe or brush smooth coats once a week with a rubber mitt; comb long-haired coats several times weekly to prevent mats behind the ears and legs; brush wire-haired coats once or twice weekly.",

      bathing:
        "Bathe every four to six weeks or as needed; use a mild shampoo suited to the coat type, avoiding softening shampoos on wire coats.",

      notes: [
        "Wire-haired coats look and feel best when dead hair is plucked or hand-stripped a few times a year, with light tidying of the beard and eyebrows.",
        "Lift and inspect the heavy drop ears every week, cleaning away wax gently to lower ear-infection risk.",
        "Trim nails every two to four weeks so long claws do not distort foot posture.",
        "Brush teeth daily to prevent plaque and gum disease.",
        "Use a supportive chest harness rather than a neck collar to avoid pulling on the neck and spine."
      ]
    },

    training: {
      difficulty:
        "Moderate to challenging; bright and food-motivated, yet independent, scent-driven, and sensitive to harsh handling",

      tips: [
        "Use upbeat, reward-based training with small treats; scolding or forceful corrections make this hound shut down or resist.",
        "Approach house-training with crate routines and patient consistency, as many dislike stepping onto wet or cold grass.",
        "Teach a reliable 'quiet' cue early to channel its loud watchdog bark.",
        "Build clear habits around ramps and floor-level lounging so the dog does not leap off beds or sofas.",
        "Practice gentle paw and ear handling early to keep nail trims and ear checks easy."
      ],

      socialization:
        "Introduce puppies early and calmly to varied people, friendly dogs, and everyday noises so natural alertness stays confident and polite rather than noisy or defensive."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Warm climates with shade and fresh drinking water",
        "Cool climates, though smooth-coated dogs appreciate a warm coat in freezing weather"
      ],

      aloneTimeTolerance:
        "Low to moderate; strongly social and people-oriented, often barking or chewing if left alone for long stretches."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced small- or medium-breed dog food portioned carefully to keep body weight lean and protect the spine.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age.",
      adult:
        "Two measured meals daily to support steady energy and weight control.",
      senior:
        "Two portion-controlled meals daily adjusted for lower calorie needs."
    },

    guidelines:
      "Measure every meal precisely and avoid free-feeding. Extra weight is one of the biggest preventable risks for spinal disc strain in this breed. Keep table scraps rare and fatty foods out of reach, and offer fresh water at all times.",

    considerations: [
      "Keep a lean waistline with ribs easy to feel beneath a light cover.",
      "Count every training treat toward the daily calorie allowance.",
      "Watch closely for gradual weight gain after spaying or neutering.",
      "Store food securely, as a determined nose will quickly track down unattended snacks."
    ],

    note:
      "Work with a veterinarian to tailor daily portions to your dog's size variety, age, and activity level."
  },

  health: {
    overview:
      "Many Dachshunds live 12 to 16 years with attentive care, yet their chondrodystrophic build (short legs and an elongated spine) gives the breed the highest documented lifetime risk of intervertebral disc disease (IVDD) among dogs. Keeping body weight lean, building steady core muscle through moderate walking, avoiding repeated jumping, and screening breeding stock for patellar, ocular, and cardiac health are central to lifelong wellness.",

    commonConditions: [
      "Intervertebral Disc Disease (IVDD) — scientifically established high breed risk driven by early disc degeneration and the CFA12 FGF4 retrogene; large breed surveys estimate roughly 15% to 24% lifetime clinical prevalence, varying by coat and size variety, with symptoms ranging from back pain to sudden hind-limb paralysis",
      "Patellar luxation — intermittent slipping of the kneecap out of its groove, monitored through routine orthopedic screening",
      "Progressive Retinal Atrophy (PRA) and other inherited eye disorders — progressive retinal degeneration and cataracts monitored via specialist eye examinations and available DNA tests",
      "Cardiac conditions — congenital heart anomalies and age-related degenerative valve disease screened via veterinary cardiac auscultation",
      "Lafora disease — an inherited late-onset myoclonic epilepsy documented primarily in miniature wire-haired lines, for which DNA testing is available",
      "Obesity-related complications — excess weight sharply worsens spinal stress, joint wear, and metabolic risks such as diabetes",
      "Periodontal disease and ear infections — plaque buildup and low airflow under heavy drop ears require consistent home care"
    ],

    preventiveCare: [
      "Keep body weight strictly lean to reduce mechanical load on spinal discs.",
      "Use ramps or low steps for sofas and beds and discourage leaping down from furniture or sprinting up and down steep stairs.",
      "Walk on a well-fitted chest harness instead of a collar to avoid sudden pressure on the neck.",
      "Support both the chest and hindquarters whenever lifting or carrying the dog so the back stays level.",
      "Maintain regular moderate walking to keep back-supporting muscles strong, alongside yearly veterinary wellness exams."
    ],

    recommendedScreenings: [
      "Clinical patellar luxation orthopedic evaluation by a veterinarian (from 12 months of age, with periodic rechecks)",
      "Ophthalmic examination by a board-certified veterinary ophthalmologist (within two years prior to breeding)",
      "Basic cardiac auscultation by a licensed veterinarian (from 12 months of age, rechecked within two years prior to breeding)",
      "Additional breeder considerations including DNA tests for Progressive Retinal Atrophy (PRA) and Lafora disease (especially in miniature wire-haired lines), plus spinal disc health monitoring"
    ],

    dentalCare:
      "Brush teeth daily with pet-safe enzymatic toothpaste and schedule routine veterinary dental cleanings to keep tartar and gum disease in check.",

    earCare:
      "Check under the heavy drop ears every week for odor, moisture, or wax, cleaning gently with a veterinarian-recommended cleanser.",

    skinCare:
      "Inspect skin weekly during brushing for dryness, mats, or parasites; tailor bathing and coat care to whether the coat is smooth, long-haired, or wire-haired."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: false,
    apartmentLiving: true,

    idealFor: [
      "Individuals, couples, and older owners seeking a devoted, lively, and comical indoor companion",
      "Apartment residents wanting a compact dog with moderate daily walking needs (if vocal barking is managed)",
      "Owners ready to protect spinal health with ramps, lean feeding, and careful lifting",
      "People who enjoy a bold, independent hound personality",
      "Handlers interested in tracking, nosework, or earthdog activities"
    ],

    notIdealFor: [
      "Households with boisterous toddlers who might drop, squeeze, or accidentally injure a delicate back",
      "Long-distance runners or steep-trail hikers looking for a high-impact jogging partner",
      "Noise-sensitive apartments where frequent, deep barking would cause trouble",
      "Owners who prefer free-feeding or struggle to keep portions strictly measured",
      "Multi-story homes with steep, unguarded stairs the dog would climb repeatedly"
    ]
  },

  funFacts: [
    "In German, 'Dachs' means badger and 'Hund' means dog—a literal nod to the breed's original underground quarry.",
    "Thanks to their unmistakable silhouette, Dachshunds picked up affectionate nicknames worldwide, including 'Doxie', 'Wiener Dog', and 'Sausage Dog'.",
    "Their broad, deep chest gives them a booming, resonant bark that sounds like it comes from a dog several times their size.",
    "Wire-haired coats came from crossing smooth Dachshunds with terriers for briar protection, while long-haired coats drew on spaniel lines for colder weather.",
    "Several Dachshunds have reached 20 years of age or older, making the breed a frequent standout for canine longevity."
  ],

  faq: [
    {
      question: "What kind of dog is a Dachshund?",
      answer:
        "A Dachshund is a short-legged, long-backed German scent hound originally bred to hunt badgers in underground burrows, now loved worldwide as a bold, clever, and affectionate companion."
    },
    {
      question: "How tall and heavy is a Dachshund?",
      answer:
        "Full-sized Dachshunds stand about 8 to 9 inches tall and usually weigh 16 to 32 pounds, while miniatures stand 5 to 6 inches tall and weigh 11 pounds and under."
    },
    {
      question: "How long does a Dachshund live?",
      answer:
        "With lean feeding, back protection, and regular veterinary care, Dachshunds commonly live 12 to 16 years."
    },
    {
      question: "How much grooming does a Dachshund need?",
      answer:
        "All three coat types shed moderately. Smooth coats need only a weekly wipe or quick brush, long-haired coats need combing several times a week, and wire-haired coats benefit from weekly brushing plus occasional hand-stripping."
    },
    {
      question: "Can a Dachshund live in an apartment?",
      answer:
        "Yes. Their small size and moderate walking needs fit apartment life well, though early training helps keep their loud watchdog bark under control."
    },
    {
      question: "Are Dachshunds good with children?",
      answer:
        "They can thrive with gentle, older children who know how to support their back properly, but they are not ideal around rough toddlers who could accidentally drop or injure them."
    },
    {
      question: "Are Dachshunds hard to house-train?",
      answer:
        "Many are stubborn about house-training—especially in rain or cold weather—so consistent outdoor schedules, crate training, and warm positive rewards make a big difference."
    },
    {
      question: "What are the main health concerns for a Dachshund?",
      answer:
        "Intervertebral Disc Disease (IVDD) is the top concern due to their long spine, making lean weight and ramps essential. Owners and breeders also watch for patellar luxation, inherited eye issues like PRA, heart murmurs, and Lafora disease in miniature wire-haired lines."
    }
  ],

  references: [
    "natureserve-canis-lupus-familiaris",
    "fci-dachshund-official-standard",
    "fci-dachshund-nomenclature",
    "akc-dachshund-breed-standard",
    "akc-dachshund-breed-profile",
    "dca-health-statement",
    "ofa-dachshund-chic-requirements",
    "ofa-cddy-ivdd",
    "pmc-dachslife-ivdd-2016",
    "the-dog-api",
    "wikimedia-dachshund-wire-haired-lilly-m",
    "wikimedia-dachshund-smooth-coated-kmoney56"
  ],

  evidence: {
    scientificName: {
      reliability: "reliable_source",
      sources: [
        {
          id: "natureserve-canis-lupus-familiaris",
          role: "verified",
          locator: "Taxonomic listing: Canis lupus familiaris (Domestic Dog)"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Canis lupus familiaris is the verified domestic-dog taxonomic label used across the catalog."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dachshund-official-standard",
          role: "verified",
          locator: "Standard heading: DACHSHUND (also Dackel, Teckel)"
        },
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "About the Breed and History: Badger Dog, Wiener Dog, Sausage Dog, Doxie"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names: Doxie, Sausage Dog, Wiener Dog, Teckel"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Cross-checked across FCI Standard No. 148, AKC profile, and The Dog API."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dachshund-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 4 Dachshunds; With working trial"
        },
        {
          id: "akc-dachshund-breed-standard",
          role: "verified",
          locator: "Hound Group"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group: Hound"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "User-facing group label states Dachshunds and scent hounds without registry identifiers."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dachshund-official-standard",
          role: "verified",
          locator: "COUNTRY OF ORIGIN: Germany"
        },
        {
          id: "fci-dachshund-nomenclature",
          role: "verified",
          locator: "Country of origin: Germany"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: Germany"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dachshund-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, COAT VARIETIES"
        },
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "About the Breed, History (15th-16th century German badger hunting, three coat varieties)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Written in original prose from FCI Standard No. 148, AKC records, and cross-checked against The Dog API."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dachshund-official-standard",
          role: "verified",
          locator: "HEAD, EARS, BODY, TAIL, LIMBS, COAT (Smooth, Wire-haired, Long-haired), COLOUR PATTERNS (Dapple/Merle, Brindle)"
        },
        {
          id: "akc-dachshund-breed-standard",
          role: "verified",
          locator: "General Appearance, Size, Coat varieties, Colors (including Wild Boar, Dapple, Brindle, Piebald)"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Covers all three coat varieties and accepted colors/patterns across FCI and AKC; notes that piebald is accepted by AKC while FCI restricts white markings."
    },

    "physical.height": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Height: 8-9 inches (standard), 5-6 inches (miniature)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric: 20-23 cm"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Preserved in exact published inches (5 to 9 in spanning miniature 5-6 in and standard 8-9 in) from AKC breed profile. FCI Standard No. 148 classifies size by chest circumference rather than height; The Dog API lists converted 20-23 cm for full-sized dogs."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-dachshund-breed-standard",
          role: "verified",
          locator: "Standard usually 16 to 32 pounds; Miniature 11 pounds and under"
        },
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Weight: 16-32 pounds (standard), 11 pounds & under (miniature)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.weight.metric: 7-14.5 kg"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Stored as min: null, max: 32 lb in exact published pounds because miniatures are defined as '11 pounds and under' with no fixed lower bound, while full-sized dogs typically weigh 16 to 32 pounds. FCI Standard No. 148 classifies size by chest circumference; The Dog API lists converted 7-14.5 kg for full-sized dogs."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12-16 years"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span: 12-16 years"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Consistent across AKC breed profile and The Dog API."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Grooming: moderate shedders; varies across smooth, longhaired, and wirehaired coats"
        },
        {
          id: "fci-dachshund-official-standard",
          role: "verified",
          locator: "COAT: Smooth-haired, Wire-haired, Long-haired"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dachshund-official-standard",
          role: "verified",
          locator: "Lips: Taut fitting, covering the lower jaw well."
        },
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (low)"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dachshund-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Friendly, neither fearful nor aggressive, passionate and persistent hunting dog"
        },
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Personality: friendly, curious, spunky; independent, stubborn, very vocal, strong scent drive"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament: Courageous, intelligent, independent, alert, playful, devoted"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 ratings informed by AKC trait scales and official temperament descriptions."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "cited",
          locator: "Exercise, Grooming, Training, and Nutrition guidance"
        },
        {
          id: "dca-health-statement",
          role: "cited",
          locator: "Spinal protection, weight management, and preventive care"
        }
      ],
      verifiedOn: null,
      note:
        "Practical daily care emphasizing core-building moderate exercise, ramp use, and coat-specific grooming."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Exercise: two walks daily of moderate length to build back-supporting muscle"
        },
        {
          id: "fci-dachshund-official-standard",
          role: "verified",
          locator: "UTILIZATION: Hunting dog above and below ground"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "cited",
          locator: "Two moderate daily walks guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 30 to 60 minutes daily reflects moderate regular walking that builds back-supporting muscle without high-impact jumping."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Compact indoor companion well suited to apartments when barking is managed"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Supervised outdoor exercise and stair-avoidance recommendations"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Coat varieties and cold-weather protection for smooth-coated dogs"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "cited",
          locator: "Highly social indoor companion temperament"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "cited",
          locator: "Nutrition: strict portion control to prevent back strain and obesity"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "cited",
          locator: "Life-stage feeding and measured meal guidance"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pmc-dachslife-ivdd-2016",
          role: "verified",
          locator: "DachsLife 2015 study (n=2,031): 15.7% overall IVDD prevalence; estimated 19-24% lifetime clinical risk"
        },
        {
          id: "ofa-cddy-ivdd",
          role: "verified",
          locator: "CFA12 FGF4 retrogene (12-FGF4R) causing chondrodystrophy and IVDD in Dachshunds"
        },
        {
          id: "dca-health-statement",
          role: "verified",
          locator: "DCA Health Statement (May 2022): CHIC screening (Patella, CAER Eye, Basic Cardiac) plus IVDD, PRA, and Lafora disease"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Combines peer-reviewed epidemiological data on IVDD with official parent club screening guidance."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pmc-dachslife-ivdd-2016",
          role: "verified",
          locator: "IVDD prevalence across Dachshund varieties (highest in Standard Smooth-Haired at 24.4%, lowest in Standard Wire-Haired at 7.1%)"
        },
        {
          id: "ofa-cddy-ivdd",
          role: "verified",
          locator: "12-FGF4R variant and IVDD risk in Dachshunds"
        },
        {
          id: "dca-health-statement",
          role: "verified",
          locator: "Patella luxation, eye exams (CAER), cardiac auscultation, Lafora disease, IVDD, and PRA"
        },
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Back injury, obesity, diabetes, and drop-ear infection risks"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "cited",
          locator: "Weight control, avoiding furniture jumping and stairs, regular moderate walking"
        },
        {
          id: "dca-health-statement",
          role: "cited",
          locator: "Preventive screening and spinal protection"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "dca-health-statement",
          role: "verified",
          locator: "DCA Health Statement (May 2022): 1. Patella evaluation (12+ mo), 2. ACVO/CAER Eye exam (within 2 yrs pre-breeding), 3. Basic Cardiac exam (12+ mo, within 2 yrs pre-breeding); plus Lafora, IVDD, and PRA consideration"
        },
        {
          id: "ofa-dachshund-chic-requirements",
          role: "verified",
          locator: "OFA CHIC requirements for Dachshund (DH): Patella Evaluation, Cardiac Exam, Ophthalmologist Evaluation"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Matches the May 2022 Dachshund Club of America Health Statement and AKC Hound Group Health Testing Requirements."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-dachshund-official-standard",
          role: "cited",
          locator: "Jaws/teeth: strong jaws and complete scissor bite"
        },
        {
          id: "akc-dachshund-breed-profile",
          role: "cited",
          locator: "Routine dental care"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-dachshund-official-standard",
          role: "cited",
          locator: "Ears: set high, hanging close to cheeks"
        },
        {
          id: "akc-dachshund-breed-profile",
          role: "cited",
          locator: "Drop-ear infection prevention and routine cleaning"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-dachshund-official-standard",
          role: "cited",
          locator: "Skin: tight fitting and well pigmented"
        },
        {
          id: "akc-dachshund-breed-profile",
          role: "cited",
          locator: "Coat-specific grooming across smooth, longhaired, and wirehaired varieties"
        }
      ],
      verifiedOn: null,
      note: null
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "cited",
          locator: "Temperament, barking, exercise, and family compatibility"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability assessment balancing compact indoor adaptability with spinal protection and vocal watchdog traits."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Badger dog translation, Doxie/Wiener/Sausage nicknames, deep bark, coat-variety history, and documented 20+ year longevity"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-dachshund-breed-standard",
          role: "verified",
          locator: "Weight bands (16-32 lb full-sized; 11 lb and under miniature) and three coat varieties"
        },
        {
          id: "akc-dachshund-breed-profile",
          role: "verified",
          locator: "Height (5-6 in miniature; 8-9 in full-sized), lifespan (12-16 years), grooming, apartment life, children, house-training"
        },
        {
          id: "pmc-dachslife-ivdd-2016",
          role: "verified",
          locator: "IVDD risk in Dachshunds"
        },
        {
          id: "dca-health-statement",
          role: "verified",
          locator: "Patella, eye, cardiac, PRA, and Lafora disease screening"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Synthesized in original wording without naming registries or source organizations."
    }
  },

  updatedOn: "2026-11-26"
};
