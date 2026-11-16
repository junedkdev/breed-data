import type { Breed } from "../schema/breed.types";

export const belgian_shepherd_dog_tervuren: Breed = {
  slug: "belgian-shepherd-dog-tervuren",
  name: "Belgian Tervuren",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Belgian Shepherd Dog (Tervueren)",
    "Chien de Berger Belge (Tervueren)",
    "Terv",
    "Tervueren",
    "Belgischer Schäferhund (Tervueren)"
  ],

  group:
    "Sheepdogs and Cattledogs (except Swiss Cattle Dogs); Section 1 — Sheepdogs (with working trial; also classified in the Herding and Pastoral groups)",

  origin: {
    country: "Belgium",
    region:
      "Tervuren (a municipality near Brussels in the province of Flemish Brabant)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Belgian_Tervueren_Shepherd.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Belgian_Tervueren_Shepherd.jpg",
      title: "Belgian Tervueren Shepherd.jpg",
      description:
        "An adult Belgian Tervuren standing outdoors, displaying its characteristic long fawn coat with a black overlay and a distinct black facial mask.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2017-12-08",
      uploadedOn: "2017-12-08",
      width: 1821,
      height: 1868,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Belgian_Tervueren_Shepherd.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-16"
    }
  ],

  overview: {
    summary:
      "An elegant, agile, and long-haired Belgian herding dog known for its striking fawn-to-mahogany coat with a black overlay, exceptional intelligence, and deeply devoted, sensitive nature.",

    description:
      "The Belgian Tervuren is a medium-sized, square-proportioned sheepdog combining impressive athletic stamina with a proud and alert carriage. It is visually distinguished by its long, abundant double coat—typically a rich fawn to mahogany color featuring a black overlay where the tips of the hairs are darkened. The head is finely chiseled, long, and wedge-shaped, topped with erect triangular ears and featuring a characteristic black mask that highlights its dark, intense, almond-shaped eyes. Males often develop a pronounced ruff or mane of thicker hair around the neck and chest. Agile and seemingly tireless, the breed moves with a light, graceful stride. In the home, it is a highly intelligent, observant, and sensitive companion that bonds intensely with its family, though it retains a vigilant and slightly aloof reserve toward strangers, making it a naturally excellent watchdog.",

    history:
      "The breed traces its origins to the late nineteenth century in Belgium, where it was developed as one of four closely related varieties of native sheepdogs. While they share identical working traits and anatomical structure, they were separated primarily by coat type and color. The long-haired fawn dogs took their name from the village of Tervuren, located near Brussels, which was home to early breed enthusiast M.F. Corbeel. Corbeel bred a pair of long-haired, fawn-colored working dogs named 'Tom' and 'Poes', establishing the foundation bloodlines for the modern breed. In addition to herding sheep, early ancestors were used as versatile farm hands and guard dogs, with 'Tom' famously pulling a beer cart by day and guarding the brewery by night. Prized for its versatility, the breed later served as a military messenger, sentry, and police dog. Today, it excels globally as a top-tier canine athlete in obedience, agility, and protection sports, as well as a devoted family companion.",

    originalPurpose:
      "General herding, flock management, and farm guarding in the Belgian countryside.",

    currentRoles: [
      "Competitive canine athlete in agility, obedience, and tracking",
      "Livestock herding and farm dog",
      "Search and rescue, and police work (specialized roles)",
      "Vigilant watchdog and devoted household companion"
    ]
  },

  physical: {
    sizeCategory: "Medium to large",

    height: {
      unit: "cm",
      male: {
        min: 60,
        max: 66
      },
      female: {
        min: 56,
        max: 62
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 25,
        max: 30
      },
      female: {
        min: 20,
        max: 25
      }
    },

    lifespanYears: {
      min: 12,
      max: 14
    },

    coatType:
      "A dense, protective double coat consisting of a woolly undercoat and a long, straight, and abundant outer coat that is somewhat harsh to the touch. It features a pronounced collarette or ruff around the neck and chest, heavy feathering on the legs, and a heavily plumed tail.",

    coatLength: "Long",

    coatColors: [
      "Fawn with a black overlay (where the very tips of the hairs are blackened)",
      "Mahogany with a black overlay",
      "A strict black facial mask covering the muzzle and typically extending to the ears is required",
      "A small amount of white is tolerated on the forechest or toes"
    ],

    sheddingLevel:
      "Moderate to high; the dense undercoat sheds moderately year-round and blows heavily once or twice a year during seasonal weather changes",

    droolingLevel:
      "Low; the cleanly chiseled muzzle and tight, dark-pigmented lips prevent excessive drooling",

    distinctiveFeatures: [
      "Squarely built and harmonious frame, combining elegance with strong, dry musculature",
      "Ideal height at the withers of 62 cm for males (limits 60 to 66 cm) and 58 cm for females (limits 56 to 62 cm)",
      "Working weight of approximately 25 to 30 kg for males and 20 to 25 kg for females",
      "Striking long fawn or mahogany coat featuring a blackened overlay and a distinct ruff around the neck",
      "Sharply chiseled, long, and wedge-shaped head with parallel planes and a moderate stop",
      "Complete, regular scissor bite (a pincer bite is tolerated in working flocks) with strong jaws",
      "Medium-sized, slightly oblique almond-shaped dark brown eyes radiating keen intelligence",
      "High-set, stiffly erect triangular ears of rather small size",
      "Slightly arched, muscular neck widening cleanly into long, oblique shoulders",
      "Deep chest reaching to the elbows with a short, straight, firm back",
      "Medium-length tail reaching at least to the hock, carried hanging down at rest and raised in a gentle curve in motion",
      "Straight, solid-boned forelegs and powerful thighs with compact, round cat-like feet"
    ]
  },

  temperament: {
    traits: [
      "Highly intelligent, quick-thinking, and eager for purposeful work",
      "Deeply bonded, affectionate, and sometimes possessive with its primary handler or family",
      "Exceptionally sensitive to its owner's mood and tone of voice, responding poorly to harsh corrections",
      "Vigilant, alert, and exceptionally observant of its surroundings",
      "Naturally reserved and aloof with strangers, forming its own assessments without unprovoked aggression or fear",
      "Possesses a strong herding and chase drive, which can manifest as circling or heel-nipping if unmanaged",
      "Playful and mischievous, taking genuine delight in mastering complex tasks",
      "Highly protective of its home and property, functioning as a capable and reliable watchdog"
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 5,
      independence: 3,
      trainability: 5,
      barking: 3,
      energy: 5
    }
  },

  care: {
    exercise: {
      level:
        "Very high; an energetic and tireless working dog that requires significant daily aerobic exercise and highly structured mental challenges to remain behaviorally balanced",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Vigorous daily trail running, long-distance hiking, or brisk cycling",
        "Canine sports including agility, obedience, rally, and tracking competitions",
        "Advanced trick training and complex interactive cognitive puzzles",
        "Structured herding trials and protection sports",
        "Extensive free play in a large, securely fenced area"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Brush thoroughly two to three times a week using a pin brush and an undercoat rake to remove loose hair and prevent mats in the long outer coat and dense ruff, increasing to daily brushing during seasonal shedding periods.",

      bathing:
        "Bathe occasionally, about every six to eight weeks, using a high-quality canine shampoo to preserve the coat's natural weather-resistant oils and harsh texture.",

      notes: [
        "Regularly trim the hair between the foot pads to prevent slipping indoors and debris buildup outdoors.",
        "Inspect the stiffly erect ears weekly for dust, dirt, or wax accumulation, cleaning gently with an approved veterinary cleanser.",
        "Trim fast-growing dark nails every two to three weeks to maintain compact foot structure and support athletic agility.",
        "Brush teeth several times weekly using canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Moderate; exceptionally smart and eager to learn, but requires a handler who can provide consistent, positive, and mentally engaging guidance without heavy-handed force",

      tips: [
        "Use reward-based methods and turn learning into a game, as the breed possesses a mischievous sense of humor and quickly becomes bored with repetitive drilling.",
        "Be highly consistent but never harsh; they are extremely sensitive dogs that will lose trust and shut down under punitive training methods.",
        "Begin impulse-control and loose-leash walking exercises in early puppyhood.",
        "Actively redirect natural herding instincts, such as chasing bicycles or nipping at the heels of running children, into structured play or fetch.",
        "Enroll in organized dog sports or obedience classes to provide a constructive outlet for their high working drive."
      ],

      socialization:
        "Early and extensive socialization is crucial. Expose the puppy safely and continuously to diverse people, friendly vaccinated dogs, varied urban noises, and novel environments to ensure its natural reserve does not develop into sharp fearfulness or over-reactivity in public."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool and wet climates, where the thick double coat provides excellent thermal insulation and weather protection",
        "Warm climates, provided indoor air conditioning, ample shade, and fresh water are available, and vigorous exercise is restricted to cool morning or evening hours"
      ],

      aloneTimeTolerance:
        "Low; deeply attached to its owners and highly prone to separation anxiety, destructive chewing, or excessive boredom barking if left isolated for full workdays without mental stimulation."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for active medium-to-large working breeds, adjusted for age, athletic training intensity, and metabolic rate.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age to support steady skeletal development.",
      adult:
        "Two measured meals daily to support sustained energy and reduce digestive discomfort.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output, joint support, and lean muscle retention."
    },

    guidelines:
      "Measure daily rations carefully using a digital kitchen scale or standard measuring cup, adjusting amounts to maintain a lean, athletic body silhouette where the ribs are easily felt beneath the dense double coat. Divide daily food into two distinct meals, restrict vigorous running for at least one hour before and after eating to mitigate bloat risk, and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a lean, muscular body condition; excess weight places unnecessary mechanical stress on the hips and elbows.",
      "Account for training treats within the total daily caloric allowance to prevent creeping weight gain.",
      "Rest the dog before and after meals to mitigate the risk of bloat (gastric dilatation-volvulus).",
      "Increase caloric and protein density during intense working trials, herding camps, or heavy athletic conditioning.",
      "Transition between diet formulas gradually over five to seven days to prevent gastrointestinal upset."
    ],

    note:
      "Caloric needs vary significantly based on working activity, training schedule, and outdoor temperature. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Belgian Tervuren is a generally robust and highly athletic working breed with a typical life expectancy of 12 to 14 years. However, like many large herding dogs, it is susceptible to specific joint, eye, and neurological conditions. Regular orthopedic screenings for hip and elbow dysplasia, ophthalmic exams, and thyroid evaluations are highly recommended prior to breeding to maintain the genetic health of the population.",

    commonConditions: [
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints leading to osteoarthritis and stiffness, monitored through pre-breeding radiographic screening",
      "Elbow dysplasia — developmental abnormalities of the elbow joints that can cause forelimb lameness and secondary arthritis",
      "Idiopathic epilepsy — inherited recurrent neurological seizures documented across Belgian Shepherd lines, managed through veterinary neurological care and anticonvulsant medication",
      "Autoimmune thyroiditis (hypothyroidism) — an immune-mediated disorder leading to underactive thyroid function, weight gain, lethargy, and coat changes, screenable via blood panel",
      "Ocular conditions — including progressive retinal atrophy (PRA), hereditary cataracts, and pannus (chronic superficial keratitis), monitored through annual specialist eye examinations",
      "Gastric dilatation-volvulus (GDV / bloat) — an acute, life-threatening twisting and distension of the stomach in deep-chested athletic dogs, requiring emergency veterinary care",
      "Gastric carcinoma — a malignant stomach cancer occasionally reported in the breed, warranting regular senior veterinary screenings"
    ],

    preventiveCare: [
      "Confirm that breeding stock has certified radiographic clearances for hips and elbows, annual specialist eye examinations, and thyroid evaluations.",
      "Feed two smaller meals daily and avoid vigorous exercise for at least one hour before and after eating to mitigate bloat risk.",
      "Maintain a lean, muscular body condition throughout life to minimize mechanical wear on joints and ligaments.",
      "Monitor closely for any signs of seizures, particularly in young adulthood, and report them immediately for early veterinary management.",
      "Administer consistent year-round parasite prevention against fleas, ticks, and heartworms.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation through an accredited national screening program prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist",
      "Thyroid panel evaluation (including TgAA)"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste. The breed has strong jaws with a complete 42-tooth scissor bite (pincer bite tolerated); periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the stiffly erect triangular ears weekly for dust, dirt, or wax accumulation. Clean gently using a veterinarian-recommended ear solution, drying the leather thoroughly.",

    skinCare:
      "Part the dense double coat weekly during brushing to inspect the skin for external parasites, ticks, hot spots, or irritation. Ensure the thick undercoat dries completely after bathing to prevent skin fold dermatitis."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Experienced dog owners who understand high-drive herding dynamics and positive, consistent leadership",
      "Highly active individuals seeking a tireless jogging, hiking, or canine sports partner",
      "Canine sports enthusiasts involved in agility, obedience, tracking, or herding trials",
      "Homes with a securely fenced yard of at least six feet in height",
      "Families with older, respectful children who understand structured dog boundaries"
    ],

    notIdealFor: [
      "First-time dog owners or passive handlers unprepared for intense working drive and protective instincts",
      "People who work long hours away from home and cannot provide midday engagement",
      "Sedentary households looking for a low-maintenance, easygoing lap dog",
      "Apartment or condominium dwellers unable to provide extensive daily outdoor activity",
      "Households with very young toddlers who run unpredictably and may trigger herding nipping behavior"
    ]
  },

  funFacts: [
    "The breed takes its name from the Belgian village of Tervuren, located near Brussels, which was the home of M.F. Corbeel, the original owner of the breed's foundational pair of dogs.",
    "The very first registered herding champion on record in the United States was a Belgian Tervuren.",
    "While recognized as a completely distinct and separate breed in North America since 1959, most of the world classifies the Tervuren simply as one of four coat varieties of a single Belgian Shepherd breed.",
    "The dark overlay on the Tervuren's coat is often described as 'blackened,' meaning the very tip of each fawn or mahogany hair is dipped in black, giving the dog a striking, multi-dimensional color.",
    "The breed's foundational sire, a dog named 'Tom', was a hard-working canine employee who pulled his owner's heavy beer cart during the day and served as a formidable guard dog for the brewery at night."
  ],

  faq: [
    {
      question: "What is a Belgian Tervuren?",
      answer:
        "The Belgian Tervuren is a highly intelligent, medium-sized herding dog from Belgium, famous for its long fawn-to-mahogany coat with a black overlay, distinct black facial mask, and tireless athletic work ethic."
    },
    {
      question: "What is the difference between a Belgian Tervuren and a Belgian Malinois?",
      answer:
        "While they share an almost identical anatomical structure, high working drive, and Belgian heritage, the Tervuren has a long, abundant double coat, whereas the Malinois has a short, sleek coat."
    },
    {
      question: "How tall and heavy is a Belgian Tervuren?",
      answer:
        "Ideal height at the withers is 62 cm for adult males (ranging from 60 to 66 cm) and 58 cm for adult females (ranging from 56 to 62 cm), with males weighing approximately 25 to 30 kg and females weighing 20 to 25 kg."
    },
    {
      question: "How long does a Belgian Tervuren live?",
      answer:
        "With proper nutrition, regular rigorous exercise, mental engagement, and preventive veterinary care, the breed typically enjoys a healthy lifespan of 12 to 14 years."
    },
    {
      question: "Do Belgian Tervurens shed a lot, and how are they groomed?",
      answer:
        "Yes, they are moderate to high shedders. Their thick double coat requires thorough brushing two to three times a week to prevent mats, and they shed heavily (blow their coat) during seasonal transitions."
    },
    {
      question: "Can a Belgian Tervuren live in an apartment?",
      answer:
        "Generally no. Because of its extremely high energy, intense working drive, vigilance, and need for vigorous daily physical and mental activity, the breed thrives best in a house with a securely fenced yard."
    },
    {
      question: "Is the Belgian Tervuren good for first-time dog owners?",
      answer:
        "No. The Tervuren is an intensely intelligent, sensitive, and protective working breed that requires an experienced handler committed to early socialization and structured, positive training."
    },
    {
      question: "Are Belgian Tervurens good family pets and good with children?",
      answer:
        "With experienced, active families, they are deeply loyal and affectionate; they do best with older, respectful children and require early training to channel their natural herding instincts away from nipping running heels."
    },
    {
      question: "How much exercise does a Belgian Tervuren need each day?",
      answer:
        "The breed requires 60 to 90 minutes (or more) of vigorous daily physical and mental exercise, including brisk trail runs, structured obedience, agility, or herding activities."
    },
    {
      question: "What health tests are recommended for breeding dogs?",
      answer:
        "Recommended pre-breeding screenings include radiographic evaluations for hip and elbow dysplasia, annual veterinary ophthalmologist eye exams, and thyroid panel evaluations."
    }
  ],

  references: [
    "fci-belgian-shepherd-dog-standard-15",
    "fci-belgian-shepherd-dog-nomenclature",
    "srhk-belgian-shepherd-breed-standard",
    "akc-belgian-tervuren-breed-standard",
    "akc-belgian-tervuren-breed-profile",
    "the-kennel-club-belgian-shepherd-dog-tervueren-breed-standard",
    "ofa-belgian-tervuren-chic-requirements",
    "abtc-belgian-tervuren-health",
    "wikimedia-belgian-tervueren-shepherd-canarian"
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
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Standard heading: CHIEN DE BERGER BELGE (Belgian Shepherd Dog) — Variety: Tervueren"
        },
        {
          id: "fci-belgian-shepherd-dog-nomenclature",
          role: "verified",
          locator: "Official nomenclature: BELGIAN SHEPHERD DOG (15)"
        },
        {
          id: "srhk-belgian-shepherd-breed-standard",
          role: "verified",
          locator: "Variété: Berger Belge Tervueren"
        },
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "Breed Name: Belgian Tervuren"
        }
      ],
      verifiedOn: "2026-11-16",
      note: "Verified across FCI Standard No. 15, FCI Nomenclature, SRSH, and AKC."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "FCI Classification: Group 1 Sheepdogs and Cattledogs (except Swiss Cattle Dogs); Section 1 Sheepdogs; with working trial"
        },
        {
          id: "fci-belgian-shepherd-dog-nomenclature",
          role: "verified",
          locator: "Group 1, Section 1 Sheepdogs, with working trial"
        },
        {
          id: "akc-belgian-tervuren-breed-standard",
          role: "verified",
          locator: "Herding Group"
        },
        {
          id: "the-kennel-club-belgian-shepherd-dog-tervueren-breed-standard",
          role: "verified",
          locator: "Pastoral Group"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "ORIGIN: Belgium; BRIEF HISTORICAL SUMMARY (Tervueren)"
        },
        {
          id: "fci-belgian-shepherd-dog-nomenclature",
          role: "verified",
          locator: "Country of origin: Belgium"
        },
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "History: named for the Belgian village of Tervuren"
        }
      ],
      verifiedOn: "2026-11-16",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, VARIETIES (Tervueren)"
        },
        {
          id: "srhk-belgian-shepherd-breed-standard",
          role: "verified",
          locator: "Historique (M.F. Corbeel, Tervueren), utilisation et caractère"
        },
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "About the Breed, History (Tom and Poes, brewery dogs), and Roles"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "Synthesized in original prose from FCI Standard No. 15, SRSH, and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS, HEAD, BODY, TAIL, LIMBS, COAT (Long-haired / Tervueren), COLOUR, SIZE"
        },
        {
          id: "srhk-belgian-shepherd-breed-standard",
          role: "verified",
          locator: "Morphologie carrée, poil long, masque noir, couleur fauve charbonné"
        },
        {
          id: "the-kennel-club-belgian-shepherd-dog-tervueren-breed-standard",
          role: "verified",
          locator: "General Appearance, Head, Coat, Colour, Size"
        },
        {
          id: "akc-belgian-tervuren-breed-standard",
          role: "verified",
          locator: "General Appearance, Size, Proportion, Substance, Head, Coat, Color"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "Square conformation, long fawn coat with black overlay, black mask, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "SIZE, WEIGHT AND MEASUREMENTS: Ideal height at withers: 62 cm for males, 58 cm for females. Limits: 2 cm less, 4 cm more (60-66 cm males, 56-62 cm females)."
        },
        {
          id: "srhk-belgian-shepherd-breed-standard",
          role: "verified",
          locator: "Taille au garrot: Mâles idéal 62 cm (60-66 cm); Femelles idéal 58 cm (56-62 cm)"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "Preserved in published unit of centimetres (60–66 cm for males, ideal 62 cm; 56–62 cm for females, ideal 58 cm) exactly as specified in FCI Standard No. 15 and SRSH standard."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Weight: Males about 25-30 kg; Females about 20-25 kg."
        },
        {
          id: "srhk-belgian-shepherd-breed-standard",
          role: "verified",
          locator: "Poids: Mâles environ 25 à 30 kg; Femelles environ 20 à 25 kg"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "Preserved in published unit of kilograms (25 to 30 kg for males and 20 to 25 kg for females) exactly as specified in FCI Standard No. 15 and SRSH standard."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12-14 years"
        },
        {
          id: "srhk-belgian-shepherd-breed-standard",
          role: "verified",
          locator: "Longévité moyenne de la race (12-14 ans)"
        }
      ],
      verifiedOn: "2026-11-16",
      note: "Supported by kennel club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (3/5) to High (seasonal)"
        },
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "COAT: Long and straight hair... with woolly undercoat"
        }
      ],
      verifiedOn: "2026-11-16",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Lips: Thin, well-tightened and strongly pigmented"
        },
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (1/5)"
        }
      ],
      verifiedOn: "2026-11-16",
      note: "Thin, tight lips prevent drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Watchful and active, bursting with energy, always ready to act; innate sheepdog guarding ability, defender of master"
        },
        {
          id: "akc-belgian-tervuren-breed-standard",
          role: "verified",
          locator: "Temperament: Intelligent, courageous, alert, devoted to owner. Observant and vigilant with strangers."
        }
      ],
      verifiedOn: "2026-11-16",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        },
        {
          id: "the-kennel-club-belgian-shepherd-dog-tervueren-breed-standard",
          role: "cited",
          locator: "Temperament and behavior guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented working Belgian Shepherd temperament, high trainability, and protective vigilance."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        },
        {
          id: "srhk-belgian-shepherd-breed-standard",
          role: "cited",
          locator: "Entretien du poil long et besoins d'activité"
        }
      ],
      verifiedOn: null,
      note:
        "Combines high-drive working herding dog management with long-coat brushing protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "Energy Level (5/5); Exercise Needs (5/5)"
        },
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "UTILIZATION: Working sheepdog and guard dog bursting with energy"
        }
      ],
      verifiedOn: "2026-11-16",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "the-kennel-club-belgian-shepherd-dog-tervueren-breed-standard",
          role: "cited",
          locator: "Exercise requirements: Over 2 hours per day"
        },
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "cited",
          locator: "Daily exercise and mental stimulation recommendations (60-90 minutes+)"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 60 to 90 minutes (up to 120 minutes) of daily activity reflects the intense physical and mental demands of a working Belgian Shepherd."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "cited",
          locator: "Very high energy, working drive, and need for spacious exercise"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial evaluation that intense working energy, protective vigilance, and daily exercise demands make apartment living generally unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "Exercise and secure fenced-yard recommendations"
        }
      ],
      verifiedOn: "2026-11-16",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "COAT: Weather-resistant long double coat adapted to Belgian climate"
        },
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "Weather adaptation: highly adaptable to cool and temperate climates"
        }
      ],
      verifiedOn: "2026-11-16",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "cited",
          locator: "Tolerates Being Alone: Low; deeply handler-focused working dog"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food formulated for active working breeds"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for active medium-to-large working herding breeds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance and divided meals to mitigate bloat"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-belgian-tervuren-chic-requirements",
          role: "verified",
          locator: "CHIC Program requirements: Hip Dysplasia, Elbow Dysplasia, CAER Eye examination, Thyroid evaluation"
        },
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "Health overview: Hip and elbow dysplasia, eye conditions, epilepsy, and bloat precautions"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "Synthesizes national health registry screening protocols with kennel club veterinary profiles."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-belgian-tervuren-chic-requirements",
          role: "verified",
          locator: "Hip dysplasia, elbow dysplasia, autoimmune thyroiditis, eye conditions"
        },
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "Idiopathic epilepsy and gastric dilatation-volvulus (bloat)"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "Details documented genetic and conformational conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "cited",
          locator: "Routine care, bloat precautions, joint protection, and veterinary wellness checks"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to active working Belgian Shepherds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-belgian-tervuren-chic-requirements",
          role: "verified",
          locator: "CHIC Program required screenings: Radiographic Hip Dysplasia evaluation, Radiographic Elbow Dysplasia evaluation, CAER Eye examination, Thyroid panel"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "Screenings summarize published parent club and health registry protocols."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "cited",
          locator: "Jaws/teeth: strong white teeth, scissor bite, complete dentition"
        },
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "cited",
          locator: "Routine dental care"
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "cited",
          locator: "Ears: rather small, set high, distinctly triangular, stiffly erect"
        },
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "cited",
          locator: "Ear hygiene and inspection"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for erect triangular ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "cited",
          locator: "Skin: elastic, well stretched over the body"
        }
      ],
      verifiedOn: null,
      note: "General skin and long-coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        },
        {
          id: "the-kennel-club-belgian-shepherd-dog-tervueren-breed-standard",
          role: "cited",
          locator: "Characteristics and working lifestyle suitability"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, high working drive, and handler experience requirements."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "Village of Tervuren history, M.F. Corbeel's foundation dogs 'Tom' and 'Poes' pulling a beer cart, first AKC herding champion was a Tervuren"
        },
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Brief historical summary: Four Belgian varieties classified as one breed in FCI vs separate breeds in North America"
        }
      ],
      verifiedOn: "2026-11-16",
      note: "Verified historical folklore and working heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-belgian-shepherd-dog-standard-15",
          role: "verified",
          locator: "Origin, height (60-66 cm / 56-62 cm), weight (25-30 kg / 20-25 kg), coat, and differences from Malinois/Laekenois/Groenendael"
        },
        {
          id: "akc-belgian-tervuren-breed-profile",
          role: "verified",
          locator: "Lifespan, grooming, apartment living, owner experience, and exercise needs"
        },
        {
          id: "ofa-belgian-tervuren-chic-requirements",
          role: "verified",
          locator: "Recommended health screening panel"
        }
      ],
      verifiedOn: "2026-11-16",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and health registry data without naming registries in prose."
    }
  },

  updatedOn: "2026-11-16"
};
