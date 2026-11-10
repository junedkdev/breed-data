import type { Breed } from "../schema/breed.types";

export const scottish_terrier: Breed = {
  slug: "scottish-terrier",
  name: "Scottish Terrier",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Scottie",
    "Aberdeen Terrier",
    "Diehard",
    "Scotch Terrier",
    "Terrier Écossais",
    "Schottischer Terrier"
  ],

  group:
    "Terriers; Section 2 — Small-sized Terriers (without working trial; also classified in the Terrier group)",

  origin: {
    country: "Great Britain",
    region:
      "Highlands of Scotland (specifically Aberdeen, Perthshire, and the Blackmount region)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/ScottishTerrier.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:ScottishTerrier.jpg",
      title: "ScottishTerrier.jpg",
      description:
        "A black Scottish Terrier standing in profile on grass.",
      creator: "Matthew MacKenzie",
      uploader: "Ogmios",
      capturedOn: "2003-02-13",
      uploadedOn: "2003-02-13",
      width: 400,
      height: 327,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Matthew MacKenzie (uploaded by Ogmios), Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:ScottishTerrier.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Scottish_terrier_.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Scottish_terrier_.jpg",
      title: "Scottish terrier .jpg",
      description:
        "A Scottish Terrier sitting outdoors displaying full beard and furnishings.",
      creator: "Cheryl Brind",
      uploader: "Ltshears",
      capturedOn: "2012-05-24",
      uploadedOn: "2012-07-18",
      width: 1536,
      height: 2048,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Cheryl Brind (Flickr / uploaded by Ltshears), Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:Scottish_terrier_.jpg. License: https://creativecommons.org/licenses/by/2.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10"
    }
  ],

  overview: {
    summary:
      "A sturdy, short-legged, and dignified Scottish earthdog recognized for its distinctive bearded silhouette, wiry double coat, pointed erect ears, steadfast loyalty, and bold, lion-hearted determination.",

    description:
      "The Scottish Terrier is a compact, thick-set, and powerful small working terrier that possesses immense substance and heavy bone in a low-slung frame. Renowned for its distinctive, blocky profile, the dog carries an elongated, cleanly chiseled head adorned with prominent bushy eyebrows and an abundant beard. Its weather-resistant double coat consists of an intensely harsh, wiry outer coat over a dense, soft undercoat, creating traditional leg furnishings and a protective undercarriage skirt. Small, sharply pointed prick ears and almond-shaped dark eyes convey a keen, serious, and deeply observant expression. Aloof and discerning with strangers, it forms deep, steadfast bonds with its immediate household, blending the courage and tenacious grit of an ancient vermin hunter with the poised, aristocratic demeanor of a noble domestic companion.",

    history:
      "The roots of the breed trace deep into the rocky Highlands of western Scotland, where hardy earthdogs were cultivated for centuries to flush badgers, foxes, and otters from rugged granite burrows and peat cairns. Known in early records as the Aberdeen Terrier or Scotch Terrier, the dogs were grouped loosely alongside other ancestral Highland terriers. The fourth Earl of Dumbarton maintained a celebrated pack whose relentless courage on quarry earned them the enduring military nickname 'the Diehards'. In the late nineteenth century, dedicated Scottish breeders codified the modern purebred standard, exhibiting them in early Scottish dog shows and establishing an independent registry in 1879. The breed captured worldwide admiration throughout the twentieth century, famously living in the American presidential residence as the companion of Franklin D. Roosevelt and serving as an enduring international icon in commerce, fine arts, and literature.",

    originalPurpose:
      "Dispatching and bolting badgers, foxes, otters, and vermin in rocky subterranean dens and rough cairns across the Scottish Highlands.",

    currentRoles: [
      "Devoted household companion and loyal family pet",
      "Vigilant home and property watchdog",
      "Earthdog and subterranean tracking trial competitor",
      "Canine athlete in barn hunt, agility, and scent trials"
    ]
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "in",
      male: {
        min: 10,
        max: 10
      },
      female: {
        min: 10,
        max: 10
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 19,
        max: 22
      },
      female: {
        min: 18,
        max: 21
      }
    },

    lifespanYears: {
      min: 12,
      max: 15
    },

    coatType:
      "Harsh, wiry, and weather-resistant double coat consisting of an intensely hard, wiry outer layer and a short, dense, and soft undercoat; styled with pronounced facial furnishings, a distinct beard, bushy eyebrows, and full leg and skirt furnishings.",

    coatLength: "Medium",

    coatColors: [
      "Solid black (with or without faint grey or silver hairs intermixed)",
      "Brindle (shades of brindle from dark brindle to red or silver brindle)",
      "Wheaten (shades from straw to pale cream or rich golden wheaten)"
    ],

    sheddingLevel:
      "Low to moderate year-round shedding; dead wiry hair remains trapped within the coat until lifted by regular weekly brushing or periodic hand-stripping",

    droolingLevel:
      "Low; tight, cleanly cut lips minimize drooling, though wet beards require wiping after drinking",

    distinctiveFeatures: [
      "Thick-set, heavy-boned, and low-to-the-ground compact terrier silhouette",
      "Height at the withers of about 10 inches for both males and females",
      "Weight of 19 to 22 pounds for males and 18 to 21 pounds for females in hard working condition",
      "Long, cleanly chiseled head with a flat skull, slight stop, and parallel facial planes",
      "Large black nose and clean, powerful jaws meeting in an even or scissor bite with sound teeth",
      "Small, almond-shaped, wide-set dark brown eyes with black rims and a piercing, intelligent expression",
      "Small, erect, sharply pointed prick ears set high on the skull and covered in short velvety hair",
      "Muscular, moderately short neck blending cleanly into well-laid-back shoulders",
      "Broad, deep, and heavily ribbed chest hanging low between short, heavy-boned front legs",
      "Medium-length carrot-shaped tail set high, carried upright or with a slight curve without bending over the back",
      "Large, thickly padded round forefeet designed for digging, paired with smaller hind feet",
      "Intensely harsh wiry double coat with long beard, prominent eyebrows, and low furnishings"
    ]
  },

  temperament: {
    traits: [
      "Dignified, proud, and self-assured",
      "Deeply loyal, affectionate, and shadow-like with chosen family members",
      "Independent and determined problem-solver",
      "Reserved, aloof, and discerning with unfamiliar strangers",
      "Fearless and plucky with a lion-hearted character",
      "Alert, watchful, and territorial watchdog",
      "Gentle and dependable with older, respectful children",
      "High prey drive toward rodents, rabbits, and small outdoor animals",
      "Can be assertive or reactive toward unfamiliar dogs of the same sex",
      "Sensitive to handler emotional energy and intolerant of harsh handling"
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 2,
      withStrangers: 2,
      protectiveness: 4,
      independence: 4,
      trainability: 3,
      barking: 3,
      energy: 3
    }
  },

  care: {
    exercise: {
      level:
        "Moderate; requires daily walking, olfactory sniffing exploration, and interactive play, but not suited to long-distance running or swimming due to heavy bone and short legs",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Daily brisk leashed walks and neighborhood scent-investigation strolls",
        "Interactive fetch and toy chasing in a securely fenced yard",
        "Barn hunt, earthdog tunneling, and rat-tracking enrichment",
        "Scent-work searching games, snuffle mats, and puzzle-box foraging",
        "Gentle agility courses with low jumps suited to dwarf limbs",
        "Supervised garden exploration and digging in designated sand pits"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Brush and comb thoroughly two to three times weekly using a pin brush and metal greyhound comb to prevent mats in the beard, undercarriage skirt, and leg furnishings; hand-strip dead wiry guard hairs every three to four months to preserve harsh coat texture and deep coloration, or clip periodically for pet maintenance.",

      bathing:
        "Bathe every four to eight weeks or when soiled, using a gentle, moisturizing canine shampoo suited to sensitive terrier skin.",

      notes: [
        "Hand-stripping preserves the hard, weather-resistant wire texture and rich colour, whereas machine clipping softens the coat and may lighten the pigment over time.",
        "Wipe and comb the facial beard clean and dry after meals to prevent food crusting and bacterial staining.",
        "Inspect the small prick ears weekly for wax, dust, or irritation.",
        "Trim hard black nails every two to three weeks to maintain compact foot structure.",
        "Brush teeth several times weekly with canine enzymatic toothpaste.",
        "Supervise around swimming pools and deep open water: due to a heavy chest, dense bone, and very short legs, the breed cannot swim efficiently and is at serious risk of drowning."
      ]
    },

    training: {
      difficulty:
        "Moderate to challenging; highly intelligent and quick-witted, but possesses an independent, proud mindset that will resist repetitive mechanical drills or forceful handling",

      tips: [
        "Use positive reinforcement, high-value food rewards, and enthusiastic praise.",
        "Keep training sessions short, varied, and fast-paced (5 to 10 minutes) to maintain motivation.",
        "Establish fair, calm, and consistent household boundaries from early puppyhood.",
        "Always exercise within a securely fenced yard or on a sturdy leash, as small wildlife will trigger an immediate chase.",
        "Never use harsh verbal reprimands or physical coercion, which cause this proud terrier to become obstinate and withdraw.",
        "Teach polite leash manners early to prevent pulling and dog-directed reactivity on walks."
      ],

      socialization:
        "Introduce the puppy early, calmly, and positively to a wide range of friendly people, vaccinated dogs of all sizes, household noises, vehicles, and novel surfaces. Early structured socialization tempers natural aloofness and fosters a composed, self-confident adult companion."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool and cold climates, where the dense double coat provides natural thermal protection",
        "Warm climates, provided indoor air conditioning, shade, and fresh water are available and exercise occurs during cooler morning or evening hours"
      ],

      aloneTimeTolerance:
        "Moderate when properly exercised and provided with engaging toys, though prolonged isolation without family contact can cause boredom digging or vocal barking."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for small active breeds, adjusted for age, metabolism, and physical output.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age, transitioning to two meals daily on a growth formula supporting steady development.",
      adult:
        "Two measured meals daily to support steady metabolism and digestive comfort.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output, joint support, and lean muscle retention."
    },

    guidelines:
      "Measure food portions carefully using a digital kitchen scale or standard measuring cup, adjusting amounts to maintain a lean, athletic body silhouette where the ribs are easily felt through the thick coat. Divide daily food into two distinct meals, restrict vigorous exercise immediately before and after eating, and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a lean body condition; excess weight places severe mechanical strain on the spine and short limbs.",
      "Account for training treats within the total daily caloric allowance to avoid creeping weight gain.",
      "Incorporate fresh cruciferous and leafy vegetables under veterinary guidance, as research indicates dietary vegetable intake is associated with reduced risk of bladder transitional cell carcinoma in the breed.",
      "Avoid feeding high-fat table scraps that can trigger digestive upset or acute pancreatitis.",
      "Provide clean drinking water at all times.",
      "Transition between diet formulas gradually over five to seven days."
    ],

    note:
      "Caloric needs vary significantly based on age, sterilization status, and daily exercise. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Scottish Terrier is a robust, long-lived earthdog with a typical life expectancy of 12 to 15 years. However, the breed exhibits notable genetic predispositions to specific hereditary and oncological conditions. Primary health concerns include bladder cancer (urothelial / transitional cell carcinoma, frequently associated with somatic BRAF mutations), Scottie Cramp (a hereditary hyperkinetic movement disorder linked to serotonin metabolism), craniomandibular osteopathy (CMO / 'Westie Jaw', linked to the SLC37A2 gene), von Willebrand's disease (vWD Type III), patellar luxation, and elevated alkaline phosphatase (ALP) liver enzyme activity.",

    commonConditions: [
      "Bladder transitional cell carcinoma (TCC / urothelial carcinoma) — a malignant cancer of the urinary bladder and urethra occurring at substantially higher rates in this breed than in the general canine population, screenable through veterinary urinalysis, ultrasound, and non-invasive BRAF mutation urine testing",
      "Scottie Cramp — an inherited, non-painful hyperkinetic movement disorder caused by a disturbance in serotonin neurotransmission, causing temporary stiffening, arching of the spine, and bunny-hopping gait during stress or heavy exertion",
      "Craniomandibular osteopathy (CMO) — a painful, self-limiting proliferative bone disease affecting the jaw and skull bones of puppies between 4 and 8 months of age, screenable via DNA testing for the SLC37A2 mutation",
      "Von Willebrand's disease (vWD Type III) — a severe inherited bleeding disorder caused by a deficiency in von Willebrand factor clotting protein, fully preventable through pre-breeding DNA testing",
      "Patellar luxation — displacement of the kneecap from the femoral groove causing intermittent hind-limb lameness",
      "Benign elevated alkaline phosphatase (ALP) and vacuolar hepatopathy — elevated liver enzymes commonly observed in clinically healthy adult Scotties, requiring veterinary monitoring",
      "Allergic dermatitis and atopy — skin sensitivity to flea bites, pollen, or environmental allergens causing pruritus and secondary infections",
      "Cataracts and progressive retinal atrophy (PRA) — ocular disorders monitored through regular ophthalmologist examinations"
    ],

    preventiveCare: [
      "Confirm that breeding stock has certified DNA clearances for von Willebrand's disease (vWD) and craniomandibular osteopathy (CMO), alongside clinical patellar evaluations and annual eye exams.",
      "Implement routine veterinary screening for bladder cancer (including periodic urine checks, BRAF urine testing, and ultrasound) in adult Scotties aged six and older.",
      "Minimize exposure to lawn herbicides, lawn chemicals, and pesticides, which epidemiological studies have linked to increased bladder cancer risk in the breed.",
      "Maintain a lean body condition to avoid placing excess mechanical wear on hips, knees, and the spine.",
      "Inspect ears and wipe beards clean and dry regularly to prevent yeast and bacterial build-up.",
      "Brush teeth daily or multiple times weekly with canine toothpaste to protect against periodontal disease.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "DNA marker test for von Willebrand's Disease (vWD Type III) prior to breeding",
      "DNA marker test for Craniomandibular Osteopathy (SLC37A2 gene mutation) prior to breeding",
      "Clinical patellar luxation orthopedic evaluation and grading",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist",
      "Periodic veterinary bladder health surveillance (urinalysis and ultrasound) in dogs aged 6 and older"
    ],

    dentalCare:
      "Brush teeth multiple times weekly using canine enzymatic toothpaste. The breed has powerful jaws with a complete 42-tooth scissor bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the small erect prick ears weekly for wax accumulation, moisture, or redness. Clean gently using a veterinarian-recommended ear solution, drying the leather thoroughly.",

    skinCare:
      "Part the dense wiry double coat weekly during brushing to inspect the skin for external parasites, redness, or dry patches. The coat naturally sheds dirt and requires minimal bathing beyond regular grooming."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Experienced terrier owners who appreciate an independent, dignified, and self-reliant companion",
      "Adult households or families with older, respectful children who understand canine boundaries",
      "Apartment or house dwellers who provide daily leashed walks and structured play",
      "Active seniors or retirees seeking an entertaining, devoted companion that is manageable in size",
      "Terrier sports enthusiasts interested in barn hunt, earthdog trials, and scent tracking"
    ],

    notIdealFor: [
      "First-time dog owners seeking an easy-going, unconditionally submissive pet that obeys instantly",
      "Homes with energetic toddlers who may handle a dog roughly or crowd its space",
      "Households with loose small animals or pet rodents vulnerable to terrier prey drive",
      "Owners who expect an off-leash park dog that greets all unfamiliar dogs playfully",
      "People seeking a dog that loves swimming in open lakes or pools"
    ]
  },

  funFacts: [
    "The Scottish Terrier is the only breed of dog to have lived in the White House during three separate presidencies: Franklin D. Roosevelt's beloved Fala, Dwight D. Eisenhower's Telek, and George W. Bush's Barney and Miss Beazley.",
    "During World War II, Franklin D. Roosevelt's Scottie, Fala, was so famous that he received thousands of fan letters and was immortalized in bronze alongside the president at the FDR Memorial in Washington, D.C.",
    "The breed's unmistakable silhouette—short legs, upright tail, prick ears, and bearded muzzle—was chosen as one of the classic playing pieces in the original Monopoly board game in the 1930s.",
    "The fourth Earl of Dumbarton named his favorite pack of Scottish Terriers 'the Diehards' because of their ferocious courage and refusal to surrender when confronting badgers in subterranean rock dens.",
    "Together with the West Highland White Terrier, the black Scottie was chosen in the late nineteenth century as the iconic trademark for Black & White Scotch whisky, becoming a permanent pop-culture pairing.",
    "Due to their heavy bone structure, deep chest, and very short limbs, Scotties are notoriously poor swimmers and sink rapidly in water, which is why owners must take special safety precautions around swimming pools."
  ],

  faq: [
    {
      question: "What is a Scottish Terrier?",
      answer:
        "The Scottish Terrier is a small, heavy-boned, and dignified Scottish earthdog known for its low-slung build, harsh wiry double coat, pointed erect ears, prominent beard, and fearless, independent personality."
    },
    {
      question: "Where does the Scottish Terrier originate?",
      answer:
        "The breed originates from the Highlands of Scotland, developed primarily in Aberdeen and Perthshire to hunt badgers, foxes, and otters in rocky subterranean burrows."
    },
    {
      question: "How tall and heavy is a Scottish Terrier?",
      answer:
        "Adult males and females stand about 10 inches tall at the withers, with males weighing 19 to 22 pounds and females weighing 18 to 21 pounds in fit working condition."
    },
    {
      question: "How long does a Scottish Terrier live?",
      answer:
        "The breed enjoys good longevity, typically living a healthy lifespan of 12 to 15 years with proper nutrition, exercise, and preventive veterinary care."
    },
    {
      question: "Do Scottish Terriers shed a lot, and how are they groomed?",
      answer:
        "They shed minimally to moderately. Their harsh double coat requires brushing two to three times a week to keep furnishings mat-free, along with hand-stripping or clipping every 6 to 8 weeks and regular beard cleaning."
    },
    {
      question: "Are Scottish Terriers good family pets and good with children?",
      answer:
        "They are deeply loyal and affectionate with their own family, but have a dignified, independent nature that does best with older, respectful children who understand how to treat dogs gently; they do not enjoy rough handling or teasing."
    },
    {
      question: "Can a Scottish Terrier live in an apartment?",
      answer:
        "Yes. Their compact size, calm indoor temperament, and moderate exercise needs make them well suited to apartment living, provided they receive daily outdoor walks and playtime."
    },
    {
      question: "Is the Scottish Terrier easy to train?",
      answer:
        "They are very intelligent and quick to learn, but have an independent, proud mindset. Training requires patient, reward-based methods and positive reinforcement rather than repetitive drills or harsh handling."
    },
    {
      question: "Can Scottish Terriers swim?",
      answer:
        "No. Due to their dense, heavy bones, deep barrel chest, and very short legs, Scottish Terriers cannot swim well and are prone to sinking; owners must take strict precautions around swimming pools and deep open water."
    },
    {
      question: "What is Scottie Cramp?",
      answer:
        "Scottie Cramp is an inherited, non-painful movement disorder caused by a disturbance in serotonin metabolism, which causes a temporary stiffening and hopping gait when the dog becomes overly excited or heavily exercised."
    },
    {
      question: "Why is bladder cancer a major concern in Scottish Terriers?",
      answer:
        "The breed has an elevated genetic predisposition to transitional cell carcinoma (bladder cancer); regular veterinary screenings, minimizing lawn chemical exposure, and incorporating fresh vegetables into their diet are recommended preventive steps."
    },
    {
      question: "What health tests are recommended for breeding Scottish Terriers?",
      answer:
        "Recommended pre-breeding screenings include DNA tests for von Willebrand's disease (vWD Type III) and craniomandibular osteopathy (CMO), clinical patellar luxation grading, and veterinary ophthalmologist eye exams."
    }
  ],

  references: [
    "the-kennel-club-scottish-terrier-breed-standard",
    "fci-scottish-terrier-official-standard",
    "fci-scottish-terrier-nomenclature",
    "akc-scottish-terrier-breed-standard",
    "akc-scottish-terrier-breed-profile",
    "scottish-terrier-club-of-america-health",
    "ofa-scottish-terrier-chic-requirements",
    "scottish-terrier-bladder-cancer-study-2005",
    "wikimedia-scottish-terrier-matthew-mackenzie",
    "wikimedia-scottish-terrier-cheryl-brind"
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
          id: "fci-scottish-terrier-official-standard",
          role: "verified",
          locator: "Standard heading: SCOTTISH TERRIER"
        },
        {
          id: "fci-scottish-terrier-nomenclature",
          role: "verified",
          locator: "Official nomenclature: SCOTTISH TERRIER (73), Terrier Écossais, Schottischer Terrier"
        },
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator: "Breed name: Scottish Terrier"
        },
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "History: Scottie, Aberdeen Terrier, Diehard, Scotch Terrier"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Verified across FCI Standard No. 73, FCI Nomenclature, The Royal Kennel Club, and AKC."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-scottish-terrier-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 3 Terriers, Section 2 Small-sized Terriers, without working trial"
        },
        {
          id: "fci-scottish-terrier-nomenclature",
          role: "verified",
          locator: "Group 3, Section 2 Small-sized Terriers, without working trial"
        },
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator: "Terrier Group"
        },
        {
          id: "akc-scottish-terrier-breed-standard",
          role: "verified",
          locator: "Terrier Group"
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
          id: "fci-scottish-terrier-official-standard",
          role: "verified",
          locator: "ORIGIN: Great Britain; BRIEF HISTORICAL SUMMARY"
        },
        {
          id: "fci-scottish-terrier-nomenclature",
          role: "verified",
          locator: "Country of origin: Great Britain"
        },
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator: "Origin and development in Scotland"
        },
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "History: Scottish roots, Aberdeen and Blackmount region"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-scottish-terrier-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator: "General Appearance, Characteristics, Temperament"
        },
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "About the Breed, History, and Roles"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Synthesized in original prose from FCI Standard No. 73, The Royal Kennel Club, and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-scottish-terrier-official-standard",
          role: "verified",
          locator: "HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE"
        },
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator: "Head and Skull, Eyes, Ears, Mouth, Body, Tail, Coat, Colour, Size"
        },
        {
          id: "akc-scottish-terrier-breed-standard",
          role: "verified",
          locator: "General Appearance, Size, Head, Neck, Body, Tail, Legs, Coat, Color"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Conformation, harsh double coat, prick ears, carrot tail, black/brindle/wheaten colors, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-scottish-terrier-breed-standard",
          role: "verified",
          locator: "Size: Height at withers for both genders should be about 10 inches."
        },
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator: "Size: Height at withers: 25-28 cms (10-11 ins)"
        },
        {
          id: "fci-scottish-terrier-official-standard",
          role: "verified",
          locator: "SIZE: Height at withers: 25 - 28 cm (10 - 11 ins)."
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Preserved in published unit of inches (10 inches) as specified in the AKC breed standard and consistent with the 10-11 inch parameters of the British and FCI standards."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-scottish-terrier-breed-standard",
          role: "verified",
          locator: "Weight: A well-balanced dog should weigh from 19 to 22 pounds and a female from 18 to 21 pounds."
        },
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator: "Weight: 8.5-10.5 kgs (19-23 lbs)"
        },
        {
          id: "fci-scottish-terrier-official-standard",
          role: "verified",
          locator: "Weight: 8.5 - 10.5 kg."
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Preserved in published unit of pounds (19 to 22 lb for males, 18 to 21 lb for females) exactly as specified in the official AKC standard."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12-15 years"
        },
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator: "Longevity and health actuarial profile (12-15 years)"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Supported by kennel club and breed club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (2/5)"
        },
        {
          id: "fci-scottish-terrier-official-standard",
          role: "verified",
          locator: "COAT: Harsh, wiry double coat with dense undercoat"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-scottish-terrier-official-standard",
          role: "verified",
          locator: "Lips: Tight fitting lips"
        },
        {
          id: "akc-scottish-terrier-breed-profile",
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
          id: "fci-scottish-terrier-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Loyal and faithful, dignified, independent and reserved, but courageous and highly intelligent. Bold, but never aggressive."
        },
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator: "Characteristics and Temperament: Loyal, faithful, dignified, independent, reserved, courageous, bold"
        },
        {
          id: "akc-scottish-terrier-breed-standard",
          role: "verified",
          locator: "General Appearance: Alert, bold, dignified, independent, courageous"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        },
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "cited",
          locator: "Temperament and behavior guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented terrier temperament, reserved aloofness with strangers, and strong watchdog vigilance."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        },
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "cited",
          locator: "Care, exercise, and coat hand-stripping"
        },
        {
          id: "scottish-terrier-club-of-america-health",
          role: "cited",
          locator: "Health, grooming, and swimming safety precautions"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active earthdog management with wire-coat grooming, water safety, and cancer prevention protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "Energy Level (3/5); Exercise Needs (3/5)"
        },
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator: "Exercise requirements: Up to 1 hour per day"
        }
      ],
      verifiedOn: "2026-11-09",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "cited",
          locator: "Exercise: Up to 1 hour per day"
        },
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "cited",
          locator: "Exercise recommendations"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 45 to 60 minutes of daily activity reflects the moderate exercise demands of a heavy-boned small terrier."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "Adaptability: Adapts Well to Apartment Living (5/5)"
        },
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator: "Living environment: Flat/Apartment suitable with regular outdoor walks"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "Exercise and secure fenced-yard recommendations"
        },
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
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
          id: "fci-scottish-terrier-official-standard",
          role: "verified",
          locator: "COAT: Harsh, wiry double coat providing natural weather protection"
        },
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "Weather adaptation: well-suited to cold and temperate weather"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "cited",
          locator: "Tolerates Being Alone: Moderate; independent nature"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food, portion control, treat budgeting"
        },
        {
          id: "scottish-terrier-bladder-cancer-study-2005",
          role: "cited",
          locator: "Dietary vegetable intake and bladder cancer reduction"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for small terriers, incorporating research-backed vegetable dietary considerations."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scottish-terrier-bladder-cancer-study-2005",
          role: "verified",
          locator: "Risk factors and dietary prevention for transitional cell carcinoma of the bladder in Scottish Terriers"
        },
        {
          id: "ofa-scottish-terrier-chic-requirements",
          role: "verified",
          locator: "CHIC Program requirements: von Willebrand's Disease DNA test, CAER Eye exam, Patellar luxation"
        },
        {
          id: "scottish-terrier-club-of-america-health",
          role: "verified",
          locator: "Health priorities: Bladder cancer (TCC), Scottie Cramp, vWD, CMO, and elevated ALP"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Synthesizes peer-reviewed veterinary oncology research on transitional cell carcinoma with health registry screening requirements."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scottish-terrier-bladder-cancer-study-2005",
          role: "verified",
          locator: "Transitional cell carcinoma (TCC) epidemiology and risk factors in Scottish Terriers"
        },
        {
          id: "ofa-scottish-terrier-chic-requirements",
          role: "verified",
          locator: "Von Willebrand's disease (vWD Type III), patellar luxation, eye diseases"
        },
        {
          id: "scottish-terrier-club-of-america-health",
          role: "verified",
          locator: "Scottie Cramp, craniomandibular osteopathy, and elevated liver enzymes (ALP)"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Details documented genetic, oncological, and conformational conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "scottish-terrier-club-of-america-health",
          role: "cited",
          locator: "Preventive care, herbicide avoidance, bladder screening, and water safety"
        },
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "cited",
          locator: "Routine wellness and veterinary checks"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to heavy-boned terriers prone to urological and neurological conditions."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-scottish-terrier-chic-requirements",
          role: "verified",
          locator: "CHIC Program required screenings: von Willebrand's Disease DNA test, Patellar Luxation, CAER Eye exam"
        },
        {
          id: "scottish-terrier-club-of-america-health",
          role: "verified",
          locator: "Pre-breeding testing protocols: vWD, CMO DNA, patellas, eyes, and adult bladder surveillance"
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
          id: "fci-scottish-terrier-official-standard",
          role: "cited",
          locator: "Jaws/teeth: large teeth with perfect, regular scissor bite"
        },
        {
          id: "akc-scottish-terrier-breed-profile",
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
          id: "fci-scottish-terrier-official-standard",
          role: "cited",
          locator: "Ears: neat, of fine texture, pointed, erect"
        },
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "cited",
          locator: "Ear hygiene and inspection"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for small erect prick ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-scottish-terrier-official-standard",
          role: "cited",
          locator: "Harsh double coat structure"
        },
        {
          id: "scottish-terrier-club-of-america-health",
          role: "cited",
          locator: "Skin allergies and wire coat care"
        }
      ],
      verifiedOn: null,
      note: "Dermatological care protocol for wire-coated terriers."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        },
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "cited",
          locator: "Characteristics, lifestyle suitability, and exercise"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, physical build, and household adaptability."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "White House history (Fala, Telek, Barney), Monopoly token, Black & White whisky, swimming inability"
        },
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator: "History: Earl of Dumbarton Diehards moniker, 1879 breed separation"
        },
        {
          id: "fci-scottish-terrier-official-standard",
          role: "verified",
          locator: "Brief historical summary: Ancient Highland terrier lineage"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Verified historical folklore and cultural heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-scottish-terrier-official-standard",
          role: "verified",
          locator: "Origin, size (about 10 in), coat, and colors"
        },
        {
          id: "the-kennel-club-scottish-terrier-breed-standard",
          role: "verified",
          locator: "Weight (18-22 lbs), longevity (12-15 years), and temperament"
        },
        {
          id: "akc-scottish-terrier-breed-profile",
          role: "verified",
          locator: "Family suitability, swimming inability, training, and exercise"
        },
        {
          id: "scottish-terrier-bladder-cancer-study-2005",
          role: "verified",
          locator: "Bladder cancer risks and prevention"
        },
        {
          id: "ofa-scottish-terrier-chic-requirements",
          role: "verified",
          locator: "Recommended health screening panel"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and oncology research without naming registries in prose."
    }
  },

  updatedOn: "2026-11-10"
};
