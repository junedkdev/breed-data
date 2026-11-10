import type { Breed } from "../schema/breed.types";

export const whippet: Breed = {
  slug: "whippet",
  name: "Whippet",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Snap Dog",
    "Snapdog",
    "English Whippet",
    "Lévrier Whippet"
  ],

  group:
    "Sighthounds; Section 3 — Short-haired Sighthounds (without working trial; also classified in the Hound and Sighthound & Pariah Dog groups)",

  origin: {
    country: "Great Britain",
    region:
      "Northern England, United Kingdom (specifically Yorkshire, Lancashire, and northeastern mining districts)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Whippet_2018_19.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Whippet_2018_19.jpg",
      title: "Whippet 2018 19.jpg",
      description:
        "An adult fawn brindle Whippet standing in profile outdoors.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2018-09-08",
      uploadedOn: "2018-09-17",
      width: 1544,
      height: 1432,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Whippet_2018_19.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Whippet_2018_14.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Whippet_2018_14.jpg",
      title: "Whippet 2018 14.jpg",
      description: "An adult fawn Whippet standing outdoors.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2018-09-08",
      uploadedOn: "2018-09-17",
      width: 1634,
      height: 1254,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Whippet_2018_14.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10"
    }
  ],

  overview: {
    summary:
      "An elegant, medium-sized British sighthound built for explosive acceleration and agile coursing, renowned for its graceful arch over the loin, deep chest, gentle indoor serenity, and affectionate devotion to family.",

    description:
      "The Whippet is an athletic, medium-sized sighthound that balances muscular power and functional strength with graceful elegance and clean aerodynamic symmetry. Developed to course rabbits and compete in straight-track rag racing, the hound is engineered for rapid acceleration, reaching speeds of up to 56 kilometers per hour. Its body exhibits an arched topline rising over a powerful loin, paired with a remarkably deep brisket, tucked-up belly, and long, low-slung limbs. The coat is short, fine, and close, occurring in almost every conceivable color and pattern, including solid, brindle, and particolor. The head is long, lean, and flat with a slight stop, expressive oval eyes, and small, fine rose-shaped drop ears. In domestic life, the dog is exceptionally calm, quiet, and comfort-seeking, preferring soft sofas and warm blankets, while outdoors it transforms into an enthusiastic, focused sprinter driven by acute visual pursuit.",

    history:
      "The breed emerged during the nineteenth century in the industrial mining communities and rural districts of northern England, where working-class coal miners and mill workers desired an athletic sporting dog that was less costly to feed and house than a full-sized Greyhound. Huntsmen crossed small Greyhounds with working terriers, including early Manchester Terriers and Bedlingtons, occasionally introducing Italian Greyhound blood to refine elegance and speed. Originally known as 'snap dogs' for their lightning-fast reflex in catching rabbits in enclosed betting courses, the dogs became central to the popular working-class pastime of 'rag racing', where dogs sprinted down cinder tracks toward handlers waving rags. The first official purebred registrations were codified in England in 1891, establishing standard breed clubs by 1899. Throughout the twentieth century, the breed attained international acclaim, evolving from a humble miner's sporting dog into one of the world's most versatile lure coursing athletes and gentle household companions.",

    originalPurpose:
      "Coursing and catching hares and rabbits in open fields and enclosed coursing arenas, as well as competing in sprint rag racing along straight tracks.",

    currentRoles: [
      "Competitive lure coursing and amateur straight-track racing athlete",
      "Devoted household companion and gentle family pet",
      "Canine athlete in agility, flyball, dock diving, and trick training",
      "Therapy and emotional support visiting dog"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 47,
        max: 51
      },
      female: {
        min: 44,
        max: 47
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 12,
        max: 16
      },
      female: {
        min: 10,
        max: 15
      }
    },

    lifespanYears: {
      min: 12,
      max: 15
    },

    coatType:
      "Fine, short, smooth, and tight-fitting all over the body, providing sleek aerodynamic efficiency without feathering or fringe.",

    coatLength: "Short",

    coatColors: [
      "Black",
      "White",
      "Red",
      "Fawn",
      "Blue",
      "Cream",
      "Brindle",
      "Particolor (any base color with white patches, blazes, or spotting)"
    ],

    sheddingLevel:
      "Low; the single short coat sheds minimally and is easily maintained with weekly grooming",

    droolingLevel:
      "Low; clean, dry, tightly fitting lips prevent drooling",

    distinctiveFeatures: [
      "Balanced combination of muscular power, strength, and streamlined grace of outline",
      "Height at the withers of 47 to 51 cm in males and 44 to 47 cm in females",
      "Weight ranging from 12 to 16 kg for males and 10 to 15 kg for females in conditioned athletic form",
      "Graceful, continuous arch over a strong muscular loin, without creating a camel-like hump",
      "Deep, spacious chest with generous heart and lung room, and a well-defined abdominal tuck-up",
      "Long, lean, and flat head tapering smoothly toward the muzzle with a slight stop",
      "Complete, regular scissor bite with powerful jaws and sound teeth",
      "Bright, oval dark eyes expressing alert intelligence and keen focus",
      "Small, rose-shaped drop ears folded back along the neck, becoming semi-erect when alert",
      "Long, muscular, and elegantly arched neck blending cleanly into well-laid-back shoulders",
      "Long, tapering tail without feathering, reaching at least to the hock, carried in a delicate upward curve when moving",
      "Straight, upright forearms with bladed bone and oval, well-knuckled feet with thick pads"
    ]
  },

  temperament: {
    traits: [
      "Gentle, calm, and placid in the home",
      "Affectionate, loving, and deeply attached to family members",
      "Quiet and tranquil companion that rarely barks indoors",
      "Highly competitive, rapid, and enthusiastic when pursuing a lure or moving quarry",
      "Sensitive to household atmosphere and harsh verbal handling",
      "Patient, tolerant, and good-natured with respectful children",
      "Sociable and polite with other peaceful dogs",
      "High visual prey drive toward small running animals, cats, and rodents",
      "Fond of luxury, seeking out the softest bedding, armchairs, and warm blankets",
      "Intolerant of cold weather and rain due to minimal body fat"
    ],

    scores: {
      affection: 5,
      withChildren: 5,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: 1,
      independence: 2,
      trainability: 4,
      barking: 1,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "Moderate to high; requires daily opportunities for short, explosive sprinting in a secure area along with daily leashed walks",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Sprinting and free-running in a securely fenced open field",
        "Daily leashed neighborhood walks and gentle park strolls",
        "Lure coursing and straight-track lure chasing",
        "Canine sports including agility, flyball, and trick training",
        "Interactive fetch and chase games with soft toys in a secure yard",
        "Indoor puzzle-toy foraging and snuffle-mat enrichment"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush once or twice weekly with a rubber hound glove, soft bristle brush, or chamois cloth to remove loose hairs and maintain a glossy coat sheen.",

      bathing:
        "Bathe only occasionally when soiled or dusty, using a mild, moisturizing canine shampoo that does not strip natural skin oils.",

      notes: [
        "The breed possesses virtually no body fat and thin skin; provide plush orthopedic bedding to protect prominent bones from pressure calluses.",
        "Equip the dog with insulated winter coats or fleeces during cold, rainy, or freezing walks, as the fine coat provides minimal thermal protection.",
        "Inspect the sleek skin and slender legs after sprinting for minor scrapes, thorn scratches, or skin tears.",
        "Trim fast-growing nails every two to three weeks to maintain compact foot structure.",
        "Inspect and wipe ears gently with an approved cleanser to remove dust.",
        "Brush teeth multiple times weekly using canine enzymatic toothpaste.",
        "Always walk on a wide sighthound-style collar or supportive harness to prevent slipping out of gear."
      ]
    },

    training: {
      difficulty:
        "Easy to moderate; exceptionally intelligent, gentle, and eager to please, responding enthusiastically to positive reinforcement and play rewards",

      tips: [
        "Use positive reinforcement, high-value treats, and gentle praise.",
        "Keep instructional lessons short, varied, and upbeat (5 to 10 minutes) to maintain motivation.",
        "Practice a solid recall early, but recognize that intense visual pursuit of small wildlife can override verbal commands in unfenced areas.",
        "Always exercise within a securely fenced area with fences at least five to six feet high.",
        "Never use harsh verbal reprimands or physical corrections, which cause this sensitive sighthound to lose confidence and withdraw.",
        "Teach polite leash manners early to prevent sudden lunging at running squirrels or cats."
      ],

      socialization:
        "Introduce the puppy early, gently, and positively to diverse people, friendly vaccinated dogs of all sizes, household appliances, traffic sounds, and novel surfaces. Early social exposure develops a poised, self-assured companion that is relaxed around guests and composed in public settings."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Warm climates, where the sleek single coat dissipates heat effectively",
        "Cold climates, provided the dog lives indoors in a heated home and wears warm fleece coats during outdoor winter walks"
      ],

      aloneTimeTolerance:
        "Moderate when provided with a cozy bed and quiet routine, though prolonged isolation without family companionship can cause mild distress or boredom."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for medium-sized active athletic breeds, with balanced protein and healthy fats tailored to sighthound metabolism.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age, transitioning to two meals daily on a growth formula supporting steady development.",
      adult:
        "Two measured meals daily to support steady energy and comfortable digestion.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output, joint support, and lean muscle retention."
    },

    guidelines:
      "Measure daily rations carefully using a digital kitchen scale or standard measuring cup, adjusting amounts to maintain an athletic body silhouette where the ribs are easily felt and the waist is clearly defined. A healthy specimen is naturally lean, with two or three visible vertebrae and the outline of the last ribs faintly discernible; do not attempt to fatten the dog into a heavy physique. Divide daily food into two distinct meals, restrict vigorous running immediately before and after eating, and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a lean, muscular athletic condition; excess weight places severe mechanical strain on delicate sighthound limbs.",
      "Account for training treats within the total daily caloric allowance to avoid creeping weight gain.",
      "Rest the dog before and after meals to mitigate the risk of digestive distress or bloat.",
      "Use elevated food bowls or comfortable stands to accommodate long legs and an arched neck.",
      "Provide clean drinking water, especially after vigorous sprint sessions.",
      "Transition between diet formulas gradually over five to seven days."
    ],

    note:
      "Caloric needs vary significantly based on sprint training frequency, outdoor temperature, and individual metabolism. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Whippet is an exceptionally healthy, robust, and long-lived sighthound with a typical life expectancy of 12 to 15 years. Unlike many specialized breeds, it has a very low incidence of hip dysplasia, ear infections, and skin allergies. Primary health considerations focus on unique sighthound physiology—notably low body fat and reduced hepatic clearance that cause extreme sensitivity to barbiturate anesthetics—alongside cardiac conditions (such as mitral valve disease and physiological athletic heart enlargement), hereditary eye disorders, thin skin lacerations, and a genetic myostatin mutation (MSTN) that causes extreme muscular hypertrophy in homozygous individuals.",

    commonConditions: [
      "Sighthound anesthetic sensitivity — lack of body fat and atypical hepatic metabolism make the breed intolerant to thiobarbiturate anesthetics; modern protocols using propofol, isoflurane, or sevoflurane with active temperature warming are essential",
      "Myostatin mutation (MSTN gene / 'bully whippet' syndrome) — an autosomal recessive 2-bp deletion in the myostatin gene causing extreme double-muscling and cramping in homozygous dogs, while heterozygous dogs display enhanced racing speed and normal health",
      "Mitral valve disease (MVD) and heart murmurs — degenerative valve changes causing murmurs and heart failure in senior dogs, requiring echocardiographic evaluation to distinguish from normal athletic heart murmurs",
      "Athletic physiological cardiac enlargement — normal, healthy enlargement of the heart with slow resting heart rates common in elite sprinting sighthounds, which can be mistaken for pathology by unfamiliar examiners",
      "Skin lacerations and tears — thin skin and lack of subcutaneous fat make the breed prone to superficial tears and cuts when running through briars or during rough play",
      "Hypothermia — rapid loss of body heat in cold, rainy, or freezing weather due to low adipose tissue and a fine, short coat",
      "Progressive retinal atrophy (PRA) and hereditary cataracts — rare ocular conditions monitored through annual certified ophthalmologist examinations",
      "Hypothyroidism — autoimmune thyroiditis causing lethargy, symmetrical alopecia, and weight changes"
    ],

    preventiveCare: [
      "Ensure any attending veterinarian is knowledgeable about sighthound anesthesia protocols and avoids thiobarbiturates.",
      "Confirm that breeding stock has certified cardiac clearances by a veterinary cardiologist, CAER eye examinations, and DNA testing for the myostatin mutation.",
      "Provide soft, cushioned bedding indoors and dress the dog in warm fleece coats during cold or wet weather.",
      "Feed two smaller meals daily and avoid vigorous sprinting immediately before or after eating to prevent digestive upset.",
      "Inspect skin and legs after outdoor running for small cuts or thorn abrasions, treating minor wounds promptly.",
      "Brush teeth several times weekly with canine enzymatic toothpaste.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "Cardiac evaluation including auscultation and Doppler echocardiogram by a veterinary cardiologist prior to breeding",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist",
      "DNA marker test for the Myostatin Mutation (MSTN gene)",
      "Autoimmune thyroiditis blood profile"
    ],

    dentalCare:
      "Brush teeth several times weekly using dog-specific enzymatic toothpaste. Sighthounds have long, narrow jaws that benefit from early dental hygiene to prevent tartar buildup and gum disease.",

    earCare:
      "Inspect the small rose ears weekly for dust, wax, or irritation. Clean gently with an approved cleanser, drying the leather thoroughly.",

    skinCare:
      "Wipe down the short sleek coat weekly with a soft cloth. Provide thick orthopedic dog beds to protect pressure points over the elbows and hocks from developing calluses."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "First-time dog owners seeking a gentle, quiet, and easily managed companion",
      "Apartment, condominium, or urban dwellers who can provide daily walks and occasional sprint opportunities",
      "Families with children who appreciate a gentle, patient, and sweet-natured pet",
      "Retirees, seniors, or remote workers who value a peaceful, low-barking household companion",
      "Lure coursing, agility, and sighthound sports enthusiasts",
      "Owners who enjoy an affectionate, clean, and comfort-loving lap dog"
    ],

    notIdealFor: [
      "Households with loose outdoor pet rabbits, hamsters, or free-roaming cats vulnerable to high visual prey drive",
      "Owners who expect a dog to spend hours outdoors in freezing, snowy, or rainy weather without shelter",
      "People seeking an aggressive guard dog that barks loudly at property perimeters",
      "Owners who insist on walking dogs off-leash in open, unfenced areas near traffic or wildlife"
    ]
  },

  funFacts: [
    "Despite their ability to accelerate to speeds of 56 kilometers per hour in seconds, Whippets are famously known in the dog world as 'the world's fastest couch potatoes' due to their habit of sleeping up to 18 hours a day on the softest available furniture.",
    "A landmark canine genetics study published in 2007 discovered that a mutation in the myostatin gene enhances racing speed in dogs with one copy of the mutation, while dogs with two copies develop extreme, bodybuilder-like musculature and are known as 'bully whippets'.",
    "Historically nicknamed the 'poor man's racehorse', the Whippet was developed by nineteenth-century English coal miners who could not afford to keep full-sized Greyhounds but wanted an agile dog for Sunday afternoon rag racing.",
    "A Whippet's resting heart rate is naturally slow and its heart is physiologically enlarged compared to non-sighthound breeds, an athletic adaptation similar to that of human marathon runners.",
    "In the 1930s, the breed's trademark double-suspension gallop—where all four feet leave the ground twice during each stride—was captured in famous high-speed motion photography, illustrating the perfection of sighthound biomechanics.",
    "The beloved animated canine companion Santa's Little Helper from the long-running television series The Simpsons is depicted as an athletic sighthound closely modeled on the Whippet and Greyhound."
  ],

  faq: [
    {
      question: "What is a Whippet?",
      answer:
        "The Whippet is an athletic, medium-sized British sighthound known for its streamlined build, deep chest, short coat, remarkable sprint speed, and gentle, loving personality."
    },
    {
      question: "How fast can a Whippet run?",
      answer:
        "A healthy adult Whippet can achieve top sprinting speeds of up to 56 kilometers per hour (35 miles per hour) using a specialized double-suspension rotary gallop."
    },
    {
      question: "How tall and heavy is a Whippet?",
      answer:
        "Adult males stand 47 to 51 cm at the shoulder and weigh 12 to 16 kg, while adult females stand 44 to 47 cm and weigh 10 to 15 kg, presenting an agile, lean, and balanced outline."
    },
    {
      question: "How long does a Whippet live?",
      answer:
        "With proper nutrition, indoor care, and conscientious preventive veterinary care, the breed typically enjoys a healthy lifespan of 12 to 15 years."
    },
    {
      question: "Do Whippets shed a lot, and how are they groomed?",
      answer:
        "They shed very little. Their short, single coat has no undercoat, requires only a weekly brush with a rubber hound mitt or damp cloth, and has virtually no natural dog odor."
    },
    {
      question: "Can a Whippet live in an apartment?",
      answer:
        "Yes. Whippets make exceptional apartment pets because they are quiet, rarely bark, and spend most of their indoor time sleeping on sofas, provided they receive daily walks and occasional sprint opportunities in a secure area."
    },
    {
      question: "Are Whippets good family pets and good with children?",
      answer:
        "Yes. They are famously gentle, patient, and affectionate with children, making wonderful family pets; however, due to their slender limbs and lack of body fat, interactions with toddlers should be calm and supervised."
    },
    {
      question: "Can Whippets live with cats and small pets?",
      answer:
        "They can coexist peacefully with indoor cats when raised together from puppyhood; however, outdoors their acute visual prey drive will instinctively prompt them to chase small running animals, cats, or rabbits."
    },
    {
      question: "What is a 'bully whippet'?",
      answer:
        "A bully whippet is a Whippet that has inherited two copies of a mutation in the myostatin (MSTN) gene, resulting in heavy, double-muscled bodybuilder-like physique; dogs with a single copy have normal musculature and enhanced sprinting speed."
    },
    {
      question: "What health tests are recommended for breeding Whippets?",
      answer:
        "Recommended pre-breeding screenings include cardiac evaluations by a veterinary cardiologist, CAER eye examinations, autoimmune thyroid panels, and DNA testing for the myostatin gene mutation."
    }
  ],

  references: [
    "fci-whippet-official-standard",
    "fci-whippet-nomenclature",
    "the-kennel-club-whippet-breed-standard",
    "akc-whippet-breed-standard",
    "akc-whippet-breed-profile",
    "american-whippet-club-health",
    "ofa-whippet-chic-requirements",
    "whippet-myostatin-mutation-study-2007",
    "wikimedia-whippet-2018-19-canarian",
    "wikimedia-whippet-2018-14-canarian"
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
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "Standard heading: WHIPPET"
        },
        {
          id: "fci-whippet-nomenclature",
          role: "verified",
          locator: "Official nomenclature: WHIPPET (162), Lévrier Whippet"
        },
        {
          id: "the-kennel-club-whippet-breed-standard",
          role: "verified",
          locator: "Breed name: Whippet"
        },
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "History: Snap Dog, Snapdog, English Whippet"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Verified across FCI Standard No. 162, FCI Nomenclature, The Royal Kennel Club, and AKC."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 10 Sighthounds, Section 3 Short-haired Sighthounds, without working trial"
        },
        {
          id: "fci-whippet-nomenclature",
          role: "verified",
          locator: "Group 10, Section 3 Short-haired Sighthounds, without working trial"
        },
        {
          id: "the-kennel-club-whippet-breed-standard",
          role: "verified",
          locator: "Hound Group"
        },
        {
          id: "akc-whippet-breed-standard",
          role: "verified",
          locator: "Hound Group"
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
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "ORIGIN: Great Britain; BRIEF HISTORICAL SUMMARY"
        },
        {
          id: "fci-whippet-nomenclature",
          role: "verified",
          locator: "Country of origin: Great Britain"
        },
        {
          id: "the-kennel-club-whippet-breed-standard",
          role: "verified",
          locator: "Origin and development in Great Britain"
        },
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "History: English origins among 19th-century northern coal miners"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "the-kennel-club-whippet-breed-standard",
          role: "verified",
          locator: "General Appearance, Characteristics, Temperament"
        },
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "About the Breed, History, and Roles"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Synthesized in original prose from FCI Standard No. 162, The Royal Kennel Club, and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE"
        },
        {
          id: "the-kennel-club-whippet-breed-standard",
          role: "verified",
          locator: "Head and Skull, Eyes, Ears, Mouth, Body, Tail, Coat, Colour, Size"
        },
        {
          id: "akc-whippet-breed-standard",
          role: "verified",
          locator: "General Appearance, Size, Head, Neck, Body, Tail, Legs, Coat, Color"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Conformation, arch over loin, deep chest, rose ears, short sleek coat, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "SIZE: Height at withers: Males: 47 - 51 cm (18.5 - 20 ins). Females: 44 - 47 cm (17.5 - 18.5 ins)."
        },
        {
          id: "the-kennel-club-whippet-breed-standard",
          role: "verified",
          locator: "Size: Desirable height: dogs: 47-51 cms (18.5-20 ins); bitches: 44-47 cms (17.5-18.5 ins)"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Preserved in published unit of centimetres (47–51 cm for males, 44–47 cm for females) exactly as specified in the official FCI Standard No. 162 and The Royal Kennel Club standard."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-kennel-club-whippet-breed-standard",
          role: "verified",
          locator: "Weight profile: typical adult weight 12.5-13.5 kg, working range approximately 10 to 18 kg"
        },
        {
          id: "american-whippet-club-health",
          role: "verified",
          locator: "Adult working weight guidance: males typically 12 to 16 kg (26-35 lbs), females 10 to 15 kg (22-33 lbs)"
        },
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Weight: 25-40 pounds (approx. 11-18 kg)"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Official breed standards define size primarily by height and proportional substance. The stored 12 to 16 kg for males and 10 to 15 kg for females represent canonical figures published by national parent breed clubs, preserved in kilograms."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12-15 years"
        },
        {
          id: "the-kennel-club-whippet-breed-standard",
          role: "verified",
          locator: "Longevity and health actuarial profile (12-15 years)"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Supported by kennel club and parent club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (1/5 to 2/5)"
        },
        {
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "COAT: Fine, short, close in texture"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "Lips: Clean cut and tight fitting"
        },
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (1/5)"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Tight lips result in low drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: An ideal companion. Highly adaptable in domestic and sporting surroundings. Gentle, affectionate, even disposition."
        },
        {
          id: "the-kennel-club-whippet-breed-standard",
          role: "verified",
          locator: "Characteristics and Temperament: Gentle, affectionate, even disposition, ideal companion"
        },
        {
          id: "akc-whippet-breed-standard",
          role: "verified",
          locator: "Temperament: Amiable, friendly, gentle, dignified indoors, passionate courser"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        },
        {
          id: "the-kennel-club-whippet-breed-standard",
          role: "cited",
          locator: "Temperament and behavior guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented sighthound temperament, calm domestic habits, and gentle sociability."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        },
        {
          id: "american-whippet-club-health",
          role: "cited",
          locator: "Care, thin skin precautions, bedding, and winter protection"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active sighthound sprint management with low body fat bedding protection and winter coat care protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Energy Level (4/5); Exercise Needs (4/5)"
        },
        {
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "UTILIZATION: Sighthound built for speed and work"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "the-kennel-club-whippet-breed-standard",
          role: "cited",
          locator: "Exercise: Up to 1 hour per day"
        },
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Daily exercise recommendations"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 45 to 60 minutes of daily activity reflects the exercise demands of an athletic sprinting sighthound."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Adaptability: Adapts Well to Apartment Living (5/5)"
        },
        {
          id: "the-kennel-club-whippet-breed-standard",
          role: "verified",
          locator: "Living environment: Flat/Apartment suitable with regular outdoor exercise"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Exercise and secure fenced-yard recommendations"
        },
        {
          id: "american-whippet-club-health",
          role: "verified",
          locator: "Fenced yard and sprint safety recommendations"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "COAT: Fine, short coat without undercoat; thin skin"
        },
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Weather adaptation: sensitive to cold and freezing rain, requires indoor warmth"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Tolerates Being Alone: Moderate rating; comfort-seeking nature"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food, portion control, treat budgeting"
        },
        {
          id: "american-whippet-club-health",
          role: "cited",
          locator: "Maintaining natural lean sighthound body condition"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for active, athletic sighthounds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance and divided meals"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "whippet-myostatin-mutation-study-2007",
          role: "verified",
          locator: "MSTN gene mutation and double-muscling (bully whippet) in Whippets"
        },
        {
          id: "ofa-whippet-chic-requirements",
          role: "verified",
          locator: "CHIC Program requirements: Eye Examination, Congenital Cardiac Exam, Autoimmune Thyroiditis"
        },
        {
          id: "american-whippet-club-health",
          role: "verified",
          locator: "Health priorities: Anesthesia sensitivity, cardiac health (MVD), eye exams, and myostatin testing"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Synthesizes peer-reviewed genetics research on the myostatin mutation with health registry screening requirements."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "whippet-myostatin-mutation-study-2007",
          role: "verified",
          locator: "Myostatin (MSTN) mutation clinical description and genetics"
        },
        {
          id: "american-whippet-club-health",
          role: "verified",
          locator: "Sighthound anesthesia sensitivity, mitral valve disease, skin lacerations, hypothermia"
        },
        {
          id: "ofa-whippet-chic-requirements",
          role: "verified",
          locator: "Cardiac murmurs, eye disorders, and autoimmune thyroiditis"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Details documented genetic, physiological, and conformational conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-whippet-club-health",
          role: "cited",
          locator: "Preventive care, anesthesia warnings, winter clothing, and bedding padding"
        },
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Routine wellness and veterinary checks"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to lean, low-fat sighthounds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-whippet-chic-requirements",
          role: "verified",
          locator: "CHIC Program required screenings: CAER Eye examination, Congenital Cardiac evaluation by specialist, Autoimmune Thyroiditis blood panel"
        },
        {
          id: "american-whippet-club-health",
          role: "verified",
          locator: "Pre-breeding testing protocols: Heart, eyes, thyroid, and DNA myostatin test"
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
          id: "fci-whippet-official-standard",
          role: "cited",
          locator: "Jaws/teeth: powerful jaws with complete scissor bite"
        },
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Routine dental care"
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines for narrow sighthound jaws."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-whippet-official-standard",
          role: "cited",
          locator: "Ears: rose shaped, small, fine in texture"
        },
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "Ear hygiene and inspection"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for small rose drop ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-whippet-official-standard",
          role: "cited",
          locator: "Skin: fine, tight, no loose skin"
        },
        {
          id: "american-whippet-club-health",
          role: "cited",
          locator: "Skin padding, bedding, and hygroma prevention"
        }
      ],
      verifiedOn: null,
      note: "Dermatological care protocol for breeds with fine skin and minimal subcutaneous body fat."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-whippet-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        },
        {
          id: "the-kennel-club-whippet-breed-standard",
          role: "cited",
          locator: "Characteristics, lifestyle suitability, and exercise"
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
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Speed (up to 35 mph), 'couch potato' trait, poor man's racehorse history, Santa's Little Helper connection"
        },
        {
          id: "whippet-myostatin-mutation-study-2007",
          role: "verified",
          locator: "Myostatin gene mutation, athletic sprinting enhancement in heterozygotes, bully whippet phenotype"
        },
        {
          id: "the-kennel-club-whippet-breed-standard",
          role: "verified",
          locator: "History: 19th-century northern English miners, snap dog, rag racing"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Verified historical folklore and working heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-whippet-official-standard",
          role: "verified",
          locator: "Origin, size (47-51 cm / 44-47 cm), coat, and colors"
        },
        {
          id: "the-kennel-club-whippet-breed-standard",
          role: "verified",
          locator: "Weight (12-16 kg / 10-15 kg), speed, and temperament"
        },
        {
          id: "akc-whippet-breed-profile",
          role: "verified",
          locator: "Apartment suitability, family suitability, exercise, and training"
        },
        {
          id: "whippet-myostatin-mutation-study-2007",
          role: "verified",
          locator: "Bully whippet and myostatin genetics"
        },
        {
          id: "ofa-whippet-chic-requirements",
          role: "verified",
          locator: "Recommended health screening panel and anesthesia warnings"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and genetics research without naming registries in prose."
    }
  },

  updatedOn: "2026-11-10"
};
