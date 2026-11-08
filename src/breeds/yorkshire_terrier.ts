import type { Breed } from "../schema/breed.types";

export const yorkshire_terrier: Breed = {
  slug: "yorkshire-terrier",
  name: "Yorkshire Terrier",
  scientificName: null,
  alternateNames: ["Yorkie"],
  group: "Toy Group; Companion Terriers",

  origin: {
    country: "Great Britain",
    region: "Yorkshire, England",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Yorkshire_Terrier_dog.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Yorkshire_Terrier_dog.jpg",
      title: "Yorkshire Terrier dog.jpg",
      description: "Yorkshire Terrier photographed by its original creator.",
      creator: "MASAHARU TAKWMORI",
      uploader: "MASAHARU TAKWMORI",
      capturedOn: "2015-12-04",
      uploadedOn: "2015-12-05",
      width: 650,
      height: 904,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by MASAHARU TAKWMORI, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Changes, if any, must be indicated. Adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-03",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Yorkshire_terrier_dog_04.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Yorkshire_terrier_dog_04.jpg",
      title: "Yorkshire terrier dog 04.jpg",
      description: "Yorkshire Terrier photographed outdoors.",
      creator: "Roxyuru",
      uploader: "Roxyuru",
      capturedOn: "2020-02-05",
      uploadedOn: "2020-03-09",
      width: 4032,
      height: 3024,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Roxyuru, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Changes, if any, must be indicated. Adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-03",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Yorkshire_terrier_dog_01.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Yorkshire_terrier_dog_01.jpg",
      title: "Yorkshire terrier dog 01.jpg",
      description: "Yorkshire Terrier photographed by its original creator.",
      creator: "Roxyuru",
      uploader: "Roxyuru",
      capturedOn: "2020-02-05",
      uploadedOn: null,
      width: 3024,
      height: 4032,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Roxyuru, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Changes, if any, must be indicated. Adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-03",
    },
  ],

  overview: {
    summary:
      "A diminutive, spirited toy terrier originating in northern England, the Yorkshire Terrier is famous for its shimmering, floor-length steel blue and tan coat and bold, vivacious persona. Despite its compact lap-dog stature, this feisty canine retains the tenacious drive, inquisitive mind, and alert instincts of its industrial rat-catching ancestors. It thrives as a devoted household companion when provided with daily mental enrichment, interactive play, and dedicated coat and dental care.",

    description:
      "Carrying itself with an upright, self-important carriage, the Yorkshire Terrier presents a compact, neat silhouette with a flat-parted, glossy mantle of fine silk. Its skull is moderately flat and small, accentuated by erect V-shaped ears, dark sparkling eyes, and a confident, inquisitive expression. Adult coats showcase a distinct two-tone coloration: a cool, dark steel blue spanning from the occiput to the tail base, complemented by warm, golden-tan points on the head, chest, and legs. While wonderfully adaptable to compact city living, the breed is far from an inert accessory; it possesses quick reflexes, an eager watchdog alertness, and an affectionate, feisty charm that responds best to gentle, positive training and patient socialisation.",

    history:
      "The breed emerged during the mid-nineteenth century in the industrial counties of Yorkshire and Lancashire, where Scottish textile weavers brought ancestral working terriers south to English coal mines and textile mills. Crossbreeding between early Paisley, Clydesdale, Waterside, and English Black and Tan Toy Terriers produced a small, fearless ratter capable of dispatching rodents in cramped spaces. As the Industrial Revolution progressed, the dog's dramatic silky mantle caught the attention of fashionable Victorian society, swiftly transforming it into an iconic companion of the British aristocracy while preserving its bold, tenacious spirit.",

    originalPurpose:
      "Controlling vermin and catching rats in coal pits, textile mills, and crowded industrial workshops.",

    currentRoles: [
      "Devoted family companion",
      "Conformation show dog",
      "Agility and small-dog agility competitor",
      "Obedience, rally, and trick-training partner",
      "Therapy and visitation dog",
    ],
  },

  physical: {
    sizeCategory: "Toy",

    height: {
      unit: "in",
      male: {
        min: 7,
        max: 8,
      },
      female: {
        min: 7,
        max: 8,
      },
    },

    weight: {
      unit: "lb",
      male: {
        min: null,
        max: 7,
      },
      female: {
        min: null,
        max: 7,
      },
    },

    lifespanYears: {
      min: 11,
      max: 15,
    },

    coatType:
      "Long, perfectly straight, fine, and glossy single coat with a luxurious silky texture and no insulating undercoat.",

    coatLength:
      "Long and flowing, parted evenly down the entire length of the spine and hanging straight to the floor, with a long fall over the head.",

    coatColors: [
      "Blue and tan",
      "Blue and gold",
      "Black and tan (in juveniles prior to mature coat transition)",
      "Black and gold (in juveniles prior to mature coat transition)",
    ],

    sheddingLevel:
      "Very low; fine hair grows continuously with minimal seasonal loss, requiring regular combing to remove shed strands from the mantle.",

    droolingLevel: "Low; tight, clean lip conformation prevents noticeable salivation.",

    distinctiveFeatures: [
      "Compact, perfectly balanced toy frame carried with an upright, self-important demeanor",
      "Small, flat-topped skull with a neat, moderate muzzle and black nose leather",
      "Small, erect, V-shaped ears set high on the head and covered in rich tan hair",
      "Dark, medium-sized, sparkling eyes with an alert, intelligent, and feisty expression",
      "Floor-length silky coat parted cleanly along the spine from occiput to tail",
      "Distinctive steel-blue mantle across the body with rich, golden-tan feathering on head, chest, and limbs",
    ],
  },

  temperament: {
    traits: [
      "Spirited, confident, and delightfully bold",
      "Deeply affectionate and loyal to immediate family members",
      "Vigilant, alert, and quick to announce unfamiliar visitors",
      "Inquisitive, playful, and brimming with energy",
      "Intelligent and responsive to upbeat, positive instruction",
      "Independent and occasionally persistent with classic terrier tenacity",
      "Vocal when excited, bored, or alerting to neighborhood activity",
      "Thrives on gentle handling and close human companionship",
    ],

    scores: {
      affection: 5,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 3,
      independence: 3,
      trainability: 4,
      barking: 4,
      energy: 3,
    },
  },

  care: {
    exercise: {
      level:
        "Moderate. Enjoys two to three brisk daily walks, active indoor play, and mentally engaging puzzle games, balanced for its diminutive toy proportions.",

      minutesPerDay: {
        min: 30,
        max: 45,
      },

      activities: [
        "Daily leashed strolls around the neighborhood on a well-fitted harness",
        "Interactive indoor fetch with lightweight plush or rubber toys",
        "Short, fun obedience sessions and trick-learning games",
        "Scent discrimination drills and food-dispensing puzzle toys",
        "Supervised exploratory playtime in a secure, small-dog-proof yard",
      ],
    },

    grooming: {
      level:
        "High for long show coats; moderate for pets maintained in a trimmed puppy cut.",

      brushing:
        "Comb daily with a pin brush and fine-toothed metal comb for full-length coats, gently line-brushing from roots to tips to prevent friction knots in the armpits, chest, and behind the ears.",

      bathing:
        "Bathe every two to four weeks with high-quality moisturizing canine shampoo and silky conditioner, followed by thorough blow-drying and gentle combing.",

      notes: [
        "Keep facial hair out of the eyes using a soft latex band or topknot clip, or trim the brow neatly in pet styles.",
        "Check the ears weekly for wax buildup or irritation, and pluck excess hair from the canal only if advised by a veterinarian.",
        "Trim tiny toenails every two weeks to prevent splayed toes and uncomfortable gait alterations.",
        "Brush teeth daily with dog-safe enzymatic toothpaste to combat rapid tartar formation common in toy jaws.",
        "Clean under the tail and sanitary areas regularly to prevent hygiene soiling in long coats.",
      ],
    },

    training: {
      difficulty:
        "Moderate. Highly intelligent and quick to grasp concepts, but possesses a strong-willed, independent streak and can be vocal if boundaries are lax.",

      tips: [
        "Apply positive reinforcement using tiny, highly palatable treats, verbal encouragement, and gentle play.",
        "Keep training sessions concise (3 to 5 minutes) and upbeat to sustain engagement.",
        "Use a fitted step-in harness rather than a neck collar to protect the delicate trachea during walks.",
        "Establish a consistent, patient housetraining schedule, recognizing that small toy bladders require frequent relief.",
        "Reward quiet behavior early to curb excessive alert barking at everyday household sounds.",
        "Practice cooperative handling from puppyhood for tooth brushing, eye wiping, and combing.",
      ],

      socialization:
        "Provide gentle, gradual exposure to novel sounds, varied footing, friendly people, and calm adult canines during puppyhood. Supervise all interactions around larger dogs and young children to safeguard the dog's fragile skeletal frame from accidental trauma.",
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Adapts well to indoor domestic life in temperate climates.",
        "Sensitive to cold and damp due to a single-layer coat lacking an undercoat; provide a warm dog coat or sweater in winter.",
        "In hot summer weather, restrict outdoor activity to cool morning and evening hours and provide shaded indoor air-conditioning.",
      ],

      aloneTimeTolerance:
        "Low to moderate. Highly social and companion-oriented; prolonged daily isolation can foster separation anxiety, nuisance barking, or destructive chewing.",
    },
  },

  nutrition: {
    dietType:
      "A nutrient-dense, complete and balanced commercial diet formulated specifically for toy or small-breed dogs, featuring small kibble sized for tiny jaws.",

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Measure daily rations carefully with a digital kitchen scale or precise measuring cup, as even slight overfeeding can cause rapid weight gain in a 5-to-7-pound dog. Ensure training treats are tiny and deducted from the total daily caloric budget. Keep fresh, clean drinking water accessible at all times.",

    considerations: [
      "Monitor young puppies closely for signs of hypoglycemia (lethargy, weakness, or shivering), offering small frequent meals.",
      "Select small, crunch-textured kibble that helps mechanically scrape plaque from crowded incisors and premolars.",
      "Avoid high-fat table scraps, which can trigger acute pancreatitis in toy breeds.",
      "Transition gradually between diets over 7 to 10 days to avert gastrointestinal upset.",
      "Consult a veterinarian before introducing any vitamin, mineral, or joint supplements.",
    ],

    note:
      "Daily caloric requirements must be tailored to the individual dog's life stage, exact weight, body condition, and activity level.",
  },

  health: {
    overview:
      "A long-lived toy breed with an average life expectancy of 11 to 15 years. However, its diminutive size and genetic heritage predispose it to distinct dental, orthopaedic, ocular, respiratory, and hepatic vulnerabilities that benefit from conscientious preventive veterinary oversight.",

    commonConditions: [
      "Periodontal disease, resulting from tooth crowding in tiny jaws leading to early plaque, gingivitis, and bone loss",
      "Medial patellar luxation, involving the slip of the kneecap out of the femoral trochlear groove",
      "Tracheal collapse, characterized by progressive weakening of cartilaginous tracheal rings causing a 'goose-honk' cough",
      "Portosystemic shunt (PSS) and microvascular dysplasia (MVD), vascular anomalies causing blood to bypass hepatic filtration",
      "Progressive retinal atrophy (prcd-PRA), an inherited degenerative photoreceptor disorder leading to gradual blindness",
      "Cataracts and dry eye (keratoconjunctivitis sicca)",
      "Legg-Calvé-Perthes disease, aseptic necrosis of the femoral head occurring in young terriers",
      "Hypoglycemia in young or undersized puppies, triggered by low glycogen reserves and missed meals",
    ],

    preventiveCare: [
      "Always walk the dog on a harness rather than a neck collar to protect the delicate tracheal cartilage from pressure.",
      "Brush teeth daily with dog-safe enzymatic toothpaste and schedule professional veterinary cleanings as needed.",
      "Prevent jumping on and off elevated beds or sofas to protect fragile patellae and hip joints.",
      "Feed puppies frequent, measured meals to maintain steady blood glucose levels.",
      "Arrange regular veterinary wellness exams including annual patellar palpation, ophthalmic checks, and bile-acid screening.",
      "Keep current on age-appropriate vaccinations and regional parasite preventatives.",
    ],

    recommendedScreenings: [
      "Annual clinical patellar examination by a licensed veterinarian to evaluate stifle joint stability",
      "Comprehensive eye examination conducted by a board-certified veterinary ophthalmologist",
      "DNA testing for progressive retinal atrophy (prcd-PRA) to identify genetic carrier status",
      "Serum bile-acid testing (pre- and post-prandial) to screen for portosystemic shunts or hepatic vascular anomalies",
    ],

    dentalCare:
      "Brush teeth daily with enzymatic canine toothpaste. The breed's tiny, crowded jaw architecture traps food particles rapidly, making consistent home oral hygiene and routine veterinary cleanings essential to prevent premature tooth loss.",

    earCare:
      "Inspect the upright V-shaped ears weekly for redness, odor, or excess wax. Clean gently using a veterinarian-recommended ear cleanser, wiping outer folds with cotton pads.",

    skinCare:
      "Part the silky coat to inspect the skin for flaking, redness, or flea dirt during routine grooming. Bathe with mild, moisturizing shampoos to keep the single coat hydrated and itch-free.",
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Individuals, couples, and seniors seeking an affectionate, lively companion for apartment or city living",
      "Owners committed to regular coat maintenance, daily brushing, and conscientious dental hygiene",
      "Households able to provide gentle handling and protect a fragile toy frame from rough accidental trauma",
      "Families who enjoy interactive indoor play and moderate daily outdoor strolls",
    ],

    notIdealFor: [
      "Homes seeking a low-maintenance, wash-and-wear dog requiring minimal grooming attention",
      "Households with rambunctious, unsupervised toddlers who may unintentionally drop or step on a tiny dog",
      "Owners expecting an outdoor yard dog or one that tolerates prolonged daily isolation without vocalising",
      "People unwilling to walk the dog on a protective harness or commit to routine tooth brushing",
    ],
  },

  funFacts: [
    "Despite its delicate, glamorous show appearance, the breed originated as a tenacious working ratter in northern England's coal mines and textile mills.",
    "Yorkshire Terrier puppies are born nearly black with small tan points, gradually transforming into their classic steel-blue and gold adult coloration over two to three years.",
    "A celebrated four-pound Yorkshire Terrier named Smoky served in World War II, flying twelve combat missions and running telegraph wires through narrow pipes under airstrips.",
    "Their fine, single coat grows continuously and has a texture very similar to human hair, producing minimal dander when brushed regularly.",
  ],

  faq: [
    {
      question: "How big does a Yorkshire Terrier get?",
      answer:
        "Adult Yorkshire Terriers stand approximately 7 to 8 inches tall at the withers and must not exceed 7 pounds in weight, with many healthy adults weighing between 4 and 7 pounds.",
    },
    {
      question: "How long do Yorkshire Terriers typically live?",
      answer:
        "The breed is known for its longevity, enjoying an average life expectancy of 11 to 15 years when provided with quality veterinary care, balanced nutrition, and daily dental hygiene.",
    },
    {
      question: "Does a Yorkshire Terrier shed a lot?",
      answer:
        "No. Because they have a fine, single hair coat without a dense undercoat, shedding is very low. Regular combing is needed to prevent loose strands from tangling into mats.",
    },
    {
      question: "Why should a Yorkshire Terrier wear a harness instead of a collar?",
      answer:
        "Toy breeds have delicate windpipes susceptible to tracheal collapse. Attaching a leash to a step-in body harness distributes pulling pressure across the chest rather than the fragile neck.",
    },
    {
      question: "Are Yorkshire Terriers good for apartment living?",
      answer:
        "Yes. Their compact size and moderate exercise needs make them ideal apartment companions, provided they receive two to three daily walks and opportunities for indoor play.",
    },
    {
      question: "What health screenings are most important for prospective puppy buyers to verify?",
      answer:
        "Key health evaluations include certified patella examinations for patellar luxation, veterinary ophthalmologist eye exams, DNA screening for prcd-PRA, and bile-acid screening for liver shunts.",
    },
    {
      question: "Do Yorkshire Terriers bark a lot?",
      answer:
        "They are naturally alert watchdogs with keen hearing and will bark to announce visitors or unusual sounds. Consistent, reward-based training helps teach a reliable 'quiet' cue.",
    },
  ],

  references: [
    "american-kennel-club-yorkshire-terrier",
    "american-kennel-club-yorkshire-terrier-standard",
    "fci-yorkshire-terrier-standard",
    "yorkshire-terrier-club-of-america-health-statement",
    "pdsa-yorkshire-terrier-health",
    "the-dog-api",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
    "wikimedia-yorkshire-terrier-dog",
    "wikimedia-yorkshire-terrier-dog-04",
    "wikimedia-yorkshire-terrier-dog-01",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No distinct breed-specific scientific name was established in the consulted references.",
    },

    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "Breed name and profile",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names: Yorkie",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Yorkie is widely recognised as the universally accepted diminutive name for the breed.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier-standard",
          role: "verified",
          locator: "General Appearance: Toy Group",
        },
        {
          id: "fci-yorkshire-terrier-standard",
          role: "verified",
          locator: "Group 3: Terriers, Section 4: Toy Terriers",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Classified under toy breeds and companion terriers.",
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-yorkshire-terrier-standard",
          role: "verified",
          locator: "Country of origin: Great Britain",
        },
        {
          id: "american-kennel-club-yorkshire-terrier-standard",
          role: "verified",
          locator: "General Appearance",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Official breed standards record Great Britain as the country of origin.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-yorkshire-terrier-standard",
          role: "verified",
          locator: "Country of origin: Great Britain",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Great Britain is established as the country of origin.",
    },

    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "About the Breed",
        },
        {
          id: "american-kennel-club-yorkshire-terrier-standard",
          role: "verified",
          locator: "Historical and breed description",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Development is historically rooted in the county of Yorkshire in northern England.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "About the Breed; What to Expect When Caring for a Yorkshire Terrier",
        },
        {
          id: "american-kennel-club-yorkshire-terrier-standard",
          role: "verified",
          locator: "General Appearance; Coat; Colors",
        },
        {
          id: "fci-yorkshire-terrier-standard",
          role: "verified",
          locator: "Breed classification and historical standard listing",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Original narrative synthesising industrial rat-catching origins, Victorian aristocratic refinement, and companion temperament.",
    },

    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "cited",
          locator: "Height and weight",
        },
      ],
      verifiedOn: null,
      note: "Toy size category reflects diminutive stature under 7 pounds.",
    },

    "physical.height": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "Height: 7-8 inches",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.height.metric: 18 - 20 cm",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Stored in published source inches: typical adult height is 7 to 8 inches (18 to 20 cm in metric references).",
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier-standard",
          role: "verified",
          locator: "Weight: Must not exceed 7 pounds",
        },
        {
          id: "fci-yorkshire-terrier-standard",
          role: "verified",
          locator: "Weight: Up to 3.2 kg",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Stored in published source pounds: weight must not exceed 7 pounds (3.2 kg in metric standards).",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "Life Expectancy: 11–15 years",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span: 12 - 16 years",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Published typical life expectancy range of 11 to 15 years.",
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier-standard",
          role: "verified",
          locator: "Coat: perfectly straight, fine, glossy, silky texture without undercoat",
        },
        {
          id: "fci-yorkshire-terrier-standard",
          role: "verified",
          locator: "Coat: perfectly straight, shining, fine silky texture",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Official standards define a single, perfectly straight, fine silky coat lacking an undercoat.",
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier-standard",
          role: "verified",
          locator: "Coat: long on body hanging quite evenly and quite straight down each side",
        },
        {
          id: "fci-yorkshire-terrier-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Long flowing coat parted from nose to tail, falling straight to the floor.",
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier-standard",
          role: "verified",
          locator: "Colors: dark steel blue with rich golden tan points",
        },
        {
          id: "fci-yorkshire-terrier-standard",
          role: "verified",
          locator: "Colour: dark steel blue with tan on head and legs",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Adult coloration combines a dark steel-blue body mantle with rich tan or golden points, with black-and-tan juvenile shading.",
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "cited",
          locator: "Grooming: Shedding: Infrequent",
        },
      ],
      verifiedOn: null,
      note: "Low-shedding single hair coat requiring regular combing to remove detached strands.",
    },

    "physical.droolingLevel": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Tight lip conformation prevents noticeable drooling.",
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier-standard",
          role: "verified",
          locator: "General Appearance; Head; Coat; Colors",
        },
        {
          id: "fci-yorkshire-terrier-standard",
          role: "verified",
          locator: "General Appearance",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Standard-described characteristics: upright posture, small V-shaped ears, parted silky coat, and steel blue/tan coloration.",
    },

    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "Breed Traits and Characteristics",
        },
        {
          id: "fci-yorkshire-terrier-standard",
          role: "verified",
          locator: "Behaviour and Temperament: Alert, intelligent toy terrier",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Official standards describe an alert, lively, intelligent, and courageous toy terrier temperament.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "cited",
          locator: "Breed Traits and Characteristics",
        },
      ],
      verifiedOn: null,
      note: "Comparative scores reflecting high family affection, watchdog alertness, and feisty terrier spirit.",
    },

    "temperament.scores.withChildren": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "cited",
          locator: "Good With Young Children: 3",
        },
      ],
      verifiedOn: null,
      note: "Tolerant with respectful children; supervision is required to protect the dog from physical mishandling.",
    },

    "temperament.scores.withDogs": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "cited",
          locator: "Good With Other Dogs: 3",
        },
      ],
      verifiedOn: null,
      note: "Assertive terrier nature may show bold posture around larger canines.",
    },

    care: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Care guidance tailored to a fragile toy dog requiring daily dental care and coat maintenance.",
    },

    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "What to Expect When Caring for a Yorkshire Terrier: Exercise",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Moderate daily exercise requirements accommodated by short walks and indoor games.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "cited",
          locator: "Exercise needs",
        },
      ],
      verifiedOn: null,
      note: "Estimated 30 to 45 minutes of daily exercise based on toy-breed activity recommendations.",
    },

    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "cited",
          locator: "Exercise and training guidance",
        },
      ],
      verifiedOn: null,
      note: "Practical activity recommendations including leashed walks on harnesses, indoor fetch, and scent puzzles.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "Grooming",
        },
        {
          id: "american-kennel-club-yorkshire-terrier-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Daily line-combing is required for long coats, with regular bathing and sanitary clipping.",
    },

    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "Training and breed characteristics",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Reward-based training is recommended to channel intelligence and manage persistent alert barking.",
    },

    "care.livingEnvironment": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "cited",
          locator: "Size, exercise, and care",
        },
      ],
      verifiedOn: null,
      note: "Indoor living environment recommendations emphasizing temperature protection and indoor enrichment.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "cited",
          locator: "Size and exercise",
        },
      ],
      verifiedOn: null,
      note: "Highly suited to apartment living due to compact size and moderate activity needs.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "A yard provides safe exploration but must be securely fenced against tiny escape gaps.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Companion-oriented toy breed prone to vocalizing if left isolated for long daily intervals.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "pdsa-yorkshire-terrier-health",
          role: "cited",
          locator: "General care guidance",
        },
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Global Nutrition Guidelines",
        },
      ],
      verifiedOn: null,
      note: "Nutritional guidance tailored to small toy dogs, focusing on portion precision and hypoglycemia prevention.",
    },

    "nutrition.dietType": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Nutrient-dense commercial toy-breed diet with appropriate small kibble size.",
    },

    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Frequent small meals are standard for toy puppies to avoid hypoglycemia, but no single universal number is prescribed.",
    },

    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Two measured meals daily are typical, but individual veterinarian advice should guide exact schedules.",
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Senior meal frequencies depend on metabolic rate, dental health, and body condition.",
    },

    "nutrition.guidelines": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "cited",
          locator: "Nutrition",
        },
      ],
      verifiedOn: null,
      note: "Portion control is critical, as minor caloric excess rapidly leads to obesity in a 7-pound dog.",
    },

    "nutrition.considerations": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Practical toy-dog considerations including hypoglycemia watch, dental kibble texture, and pancreatitis avoidance.",
    },

    "nutrition.note": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "Nutrition",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Caloric requirements must be individualised according to body weight, growth rate, and activity.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "yorkshire-terrier-club-of-america-health-statement",
          role: "verified",
          locator: "Recommended health screenings and additional conditions",
        },
        {
          id: "pdsa-yorkshire-terrier-health",
          role: "verified",
          locator: "Breed-related health problems",
        },
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "Health; Recommended Health Tests From the National Breed Club",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Comprehensive overview of toy-breed health vulnerabilities including dental overcrowding, patellar luxation, and tracheal collapse.",
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "yorkshire-terrier-club-of-america-health-statement",
          role: "verified",
          locator: "Recommended health screenings and additional conditions",
        },
        {
          id: "pdsa-yorkshire-terrier-health",
          role: "verified",
          locator: "Breed-related health problems",
        },
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "Health; Recommended Health Tests From the National Breed Club",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Health summary distinguishing recommended physical screenings from monitored toy-breed conditions.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "yorkshire-terrier-club-of-america-health-statement",
          role: "verified",
          locator: "Recommended screening; additional conditions",
        },
        {
          id: "pdsa-yorkshire-terrier-health",
          role: "verified",
          locator: "Breed-related health problems",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Documented conditions including periodontal disease, patellar luxation, tracheal collapse, PSS, and cataracts.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "cited",
          locator: "Health and care guidance",
        },
        {
          id: "yorkshire-terrier-club-of-america-health-statement",
          role: "cited",
          locator: "Recommended health screenings",
        },
      ],
      verifiedOn: null,
      note: "Preventive care emphasizes harness walking to protect the trachea, daily tooth brushing, and hypoglycemia prevention.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "yorkshire-terrier-club-of-america-health-statement",
          role: "verified",
          locator: "Recommended physical health screenings and optional genetic tests",
        },
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "Recommended Health Tests From the National Breed Club",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Parent-club recommended screenings: annual patella evaluation, veterinary ophthalmologist eye exam, prcd-PRA DNA testing, and bile-acid liver shunt tests.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "yorkshire-terrier-club-of-america-health-statement",
          role: "cited",
          locator: "Dental maintenance",
        },
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "Pet Dental Care",
        },
      ],
      verifiedOn: null,
      note: "Daily brushing and professional cleaning to manage tooth crowding and periodontal disease in small jaws.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Weekly inspection of erect V-shaped ears for wax or irritation.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Skin inspection beneath the silky single coat during daily line-combing.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "cited",
          locator: "Breed traits, grooming, and exercise",
        },
        {
          id: "pdsa-yorkshire-terrier-health",
          role: "cited",
          locator: "Suitability around children and care",
        },
      ],
      verifiedOn: null,
      note: "Suitability assessments reflect adaptability to apartment living balanced against high coat and dental commitments.",
    },

    "suitability.firstTimeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "cited",
          locator: "Breed traits",
        },
      ],
      verifiedOn: null,
      note: "Suitable for first-time owners who commit to regular grooming, gentle handling, and positive training.",
    },

    "suitability.familiesWithChildren": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "cited",
          locator: "Family Life",
        },
        {
          id: "pdsa-yorkshire-terrier-health",
          role: "cited",
          locator: "Children and pets",
        },
      ],
      verifiedOn: null,
      note: "Compatible with gentle, respectful children; close adult supervision is essential to prevent handling injuries.",
    },

    "suitability.seniorOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "cited",
          locator: "Size and exercise",
        },
      ],
      verifiedOn: null,
      note: "Highly suited for seniors due to small portable size, affectionate companionship, and manageable indoor exercise.",
    },

    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Appeals to active owners who enjoy walking and interactive small-dog training.",
    },

    "suitability.apartmentLiving": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "cited",
          locator: "Size and exercise",
        },
      ],
      verifiedOn: null,
      note: "Excellent apartment choice provided daily leashed walks and indoor play sessions are provided.",
    },

    "suitability.idealFor": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial assessment reflecting companionship, compact living, and dedicated grooming.",
    },

    "suitability.notIdealFor": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Identifies environments conflicting with toy-dog safety, including homes with unsupervised boisterous toddlers.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "About the Breed",
        },
        {
          id: "american-kennel-club-yorkshire-terrier-standard",
          role: "verified",
          locator: "General Appearance; Coat; Colors",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Working ratter origins, puppy colour changes, Smoky WWII history, and human-hair coat texture verified.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier",
          role: "verified",
          locator: "Breed profile; health; grooming",
        },
        {
          id: "yorkshire-terrier-club-of-america-health-statement",
          role: "verified",
          locator: "Health screening recommendations",
        },
        {
          id: "pdsa-yorkshire-terrier-health",
          role: "verified",
          locator: "Health and suitability",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "FAQ responses synthesize standard size limits in pounds, lifespan, coat care, harness usage, and health testing.",
    },

    "physical.weight.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier-standard",
          role: "verified",
          locator: "Weight: Must not exceed 7 pounds",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Standard specifies that weight must not exceed 7 pounds (3.2 kg in metric references).",
    },

    "physical.weight.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-yorkshire-terrier-standard",
          role: "verified",
          locator: "Weight: Must not exceed 7 pounds",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Standard specifies that weight must not exceed 7 pounds (3.2 kg in metric references).",
    },
  },

  updatedOn: "2026-11-03",
};
