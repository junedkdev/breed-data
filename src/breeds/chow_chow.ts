import type { Breed } from "../schema/breed.types";

export const chow_chow: Breed = {
  slug: "chow-chow",
  name: "Chow Chow",
  scientificName: null,
  alternateNames: [
    "Chow",
    "Tang Quan",
    "Canton Dog",
  ],
  group: "Non-Sporting; Asian Spitz and Related Breeds",

  origin: {
    country: "China",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chow_Chow_dog.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Chow_Chow_dog.jpg",
      title: "Chow Chow dog.jpg",
      description: "Adult female Chow Chow with a dense rough coat.",
      creator: "Andrea Papaccio",
      uploader: "Andrea Papaccio",
      capturedOn: "2025-10-24",
      uploadedOn: "2026-01-04",
      width: 2592,
      height: 3428,
      licenseId: "cc0-1.0",
      attribution:
        "Photo by Andrea Papaccio, via Wikimedia Commons; dedicated to the public domain under CC0 1.0 (https://creativecommons.org/publicdomain/zero/1.0/). Credit provided voluntarily.",
      restrictions: null,
      metadataCheckedOn: "2026-11-07",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/01_Chow_Chow.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:01_Chow_Chow.jpg",
      title: "01 Chow Chow.jpg",
      description: "Red rough-coated Chow Chow standing outdoors.",
      creator: "Prayitno",
      uploader: "Frei sein (Flickr upload bot)",
      capturedOn: "2013-02-09",
      uploadedOn: "2014-03-18",
      width: 2952,
      height: 3690,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Prayitno, via Wikimedia Commons, CC BY 2.0 (https://creativecommons.org/licenses/by/2.0/). Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-11-07",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/02_-_Chow-chow.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:02_-_Chow-chow.jpg",
      title: "02 - Chow-chow.jpg",
      description: "Adult Chow Chow standing in three-quarter profile.",
      creator: "Olga Filonenko",
      uploader: "Frei sein (Flickr upload bot)",
      capturedOn: "2012-10-20",
      uploadedOn: "2014-03-18",
      width: 1734,
      height: 2600,
      licenseId: "cc-by-sa-2.0",
      attribution:
        "Photo by Olga Filonenko, via Wikimedia Commons, CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0/). Changes, if any, must be indicated; adaptations must comply with the same or a compatible share-alike license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-07",
    },
  ],

  overview: {
    summary:
      "Instantly recognisable by its lion-like ruff, square spitz silhouette, small rounded ears, and solid blue-black tongue, the Chow Chow is a sturdy, self-contained dog of Chinese origin. It pairs quiet devotion to its immediate household with a dignified, discerning reserve toward strangers.",

    description:
      "Built on a compact, muscular, squarely proportioned frame with heavy bone, the Chow Chow carries its tail high and close to the back and moves with a characteristic short, pendulum-like stride produced by minimally angled hind legs. The breed comes in both rough and smooth double-coated varieties, neither of which should ever be so excessive in coat volume that movement or heat tolerance is compromised. Because the almond-shaped eyes sit deeply within the skull, peripheral vision is naturally restricted, so handlers and visitors should approach calmly from the front rather than startling the dog from the side or rear. Indoors, a well-adjusted adult is typically clean, quiet, and fastidious, yet strong personal boundaries and watchful instincts require early socialisation, respectful handling, thorough undercoat maintenance, and diligent protection from warm or humid weather.",

    history:
      "With roots in China stretching back more than two millennia—including depictions from the Han and Tang dynasties—ancestral dogs of this spitz type fulfilled diverse roles ranging from guarding estates and hauling loads to hunting game. Maritime trade introduced examples of the breed to Great Britain during the late eighteenth and nineteenth centuries, where dedicated kennel breeding refined its modern presentation prior to formal recognition in Europe and North America around the turn of the twentieth century. In contemporary homes, the breed is kept primarily as a steadfast companion, household sentinel, and show dog.",

    originalPurpose:
      "Guarding property, hunting, and general utility work in China; today kept primarily for companionship and household watchfulness.",

    currentRoles: [
      "Loyal household companion",
      "Alert domestic watchdog",
      "Conformation show competitor",
      "Participant in calm, reward-based training and scent enrichment",
      "Steady walking partner during cool weather",
    ],
  },

  physical: {
    sizeCategory: "Medium-sized, squarely built, heavy-boned spitz",

    height: {
      unit: "cm",
      male: { min: 48, max: 56 },
      female: { min: 46, max: 51 },
    },

    weight: {
      unit: "lb",
      male: { min: 45, max: 70 },
      female: { min: 45, max: 70 },
    },

    lifespanYears: {
      min: 8,
      max: 12,
    },

    coatType:
      "Dense double coat occurring in two distinct varieties: a rough coat with a profuse, coarse, off-standing outer jacket, soft woolly undercoat, thick neck ruff, and thigh breeching; and a smooth coat with a short, dense, straight, plush-textured outer layer over a definite undercoat.",

    coatLength: "Rough variety: long, abundant, and off-standing; Smooth variety: short, dense, and plush",

    coatColors: [
      "Black",
      "Red",
      "Blue",
      "Fawn",
      "Cinnamon",
      "Cream",
      "White",
    ],

    sheddingLevel:
      "High, with heavy seasonal coat blows in spring and autumn that require thorough line-brushing down to the skin to clear trapped undercoat and prevent matting.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Solid blue-black tongue and dark-pigmented mouth tissues",
      "Broad, flat skull paired with a short, wide, square muzzle",
      "Small, thick, stiffly erect ears with slightly rounded tips set wide apart and tilted slightly forward",
      "Deep-set, obliquely placed almond eyes that narrow peripheral vision and create a serious, dignified expression",
      "Profuse lion-like neck ruff and feathering in the rough-coated variety, or dense velvety plush in the smooth variety",
      "Short, compact, square body with a high-set tail resting closely over the back",
      "Straight-hocked hindquarters producing a short, brisk, pendulum-like gait",
    ],
  },

  temperament: {
    traits: [
      "Dignified and self-possessed",
      "Deeply loyal to household members",
      "Independent-minded",
      "Aloof and discerning with strangers",
      "Alert and naturally watchful",
      "Selective toward unfamiliar dogs",
      "Fastidious and quiet indoors",
      "Dislikes intrusive or forceful handling",
    ],

    scores: {
      affection: 3,
      withChildren: 2,
      withDogs: 2,
      withStrangers: 2,
      protectiveness: 4,
      independence: 5,
      trainability: 3,
      barking: 2,
      energy: 3,
    },
  },

  care: {
    exercise: {
      level: "Moderate",

      minutesPerDay: {
        min: 45,
        max: 60,
      },

      activities: [
        "Steady lead walks scheduled during the coolest morning and evening hours",
        "Unrushed sniffing strolls in shaded parks or quiet neighbourhoods",
        "Brief, reward-based obedience and cooperative-care exercises",
        "Indoor scent games and food-dispensing puzzles",
        "Moderate off-lead exploration inside a securely fenced private yard",
      ],
    },

    grooming: {
      level: "High",

      brushing:
        "Line-brush thoroughly two to three times per week—and daily during seasonal shedding—parting the coat in sections down to the skin with a slicker brush and metal comb so impacted undercoat does not mat behind the ears, around the collar ruff, in the armpits, or along the breeches.",

      bathing:
        "Bathe every 4 to 6 weeks or as needed with a gentle canine shampoo, rinse completely, and dry all the way to the skin using a high-velocity cool-air dryer so trapped dampness does not trigger hot spots.",

      notes: [
        "Always part the dense undercoat to the skin to check for hidden tangles, grass seeds, parasites, or early redness.",
        "Wipe the facial folds and eye corners gently and check the small upright ears for wax or debris during weekly brushing.",
        "Keep nails trimmed short so the round, cat-like feet maintain proper posture.",
        "Never shave the double coat in an effort to cool the dog unless medically directed by a veterinarian, as the coat insulates and shields skin; rely instead on air conditioning, shade, and thorough undercoat removal.",
        "Leave the natural outline intact rather than scissoring or sculpting the coat, tidying only the feet if needed.",
      ],
    },

    training: {
      difficulty:
        "Moderate to challenging; intelligent and quick to housebreak, yet strongly independent and unresponsive to harsh corrections or repetitive drilling.",

      tips: [
        "Keep sessions short, calm, and purposeful, rewarding cooperation with high-value treats and quiet praise.",
        "Because deep-set eyes limit side vision, always speak to the dog and approach from the front before touching or attaching a lead.",
        "Condition cooperative grooming, paw handling, eye inspection, and veterinary examinations from early puppyhood.",
        "Establish polite doorway and visitor routines so the dog can relax in its own space rather than feeling pressured to greet strangers.",
        "Practise loose-lead walking and neutral passing around unfamiliar dogs before visiting busy public areas.",
        "Never use physical intimidation or confrontational corrections, which erode trust and provoke defensive resistance.",
        "Ensure children understand never to hug, corner, or disturb a resting dog.",
      ],

      socialization:
        "Start structured, low-pressure socialisation early in puppyhood and maintain it throughout life—rewarding calm observation of diverse people, polite dogs, grooming tools, and everyday environments without forcing unsolicited physical contact from strangers.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Cool and temperate climates",
        "Warm climates only when reliable indoor air conditioning, shade, and strict heat-avoidance routines are maintained",
        "Avoid midday heat, high humidity, and strenuous warm-weather exertion",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "Complete, balanced canine diet tailored to the dog's life stage, activity level, coat health, and veterinary needs.",

    feedingFrequency: {
      puppy:
        "Feed a balanced medium-to-large puppy ration divided into 3 meals daily during early growth, transitioning to 2 meals daily as maturity approaches.",

      adult:
        "Two measured meals per day, adjusted to preserve a firm, muscular build without excess weight over the ribs and joints.",

      senior: null,
    },

    guidelines:
      "Weigh or measure daily rations, keep clean drinking water accessible at all times, and assess body condition by feeling the ribs and waist beneath the thick coat rather than judging by visual bulk alone.",

    considerations: [
      "Excess weight places avoidable strain on the hips, elbows, stifles, and straight hock joints, so keep body condition lean and well muscled.",
      "Count training treats within the daily calorie budget.",
      "Transition between foods gradually over 7 to 10 days unless a veterinarian directs otherwise.",
      "Consult a veterinarian if recurrent skin itchiness, ear inflammation, dull coat quality, or digestive upset develops.",
      "Ensure cool, fresh water is constantly available, especially after walks or during warm weather.",
    ],

    note:
      "Calorie needs vary with age, coat variety, climate, and activity; confirm portion sizes and any dietary supplements with a veterinarian.",
  },

  health: {
    overview:
      "The Chow Chow generally lives 8 to 12 years and benefits from proactive attention to joint soundness, eyelid conformation, thyroid function, skin hygiene beneath the heavy double coat, and heat safety. Parent-club health programs recommend pre-breeding evaluations of the hips, elbows, patellas, eyes, and thyroid to help reduce inherited disease risk, though screening clearances cannot guarantee that an individual dog will remain free of orthopedic, ophthalmic, or endocrine conditions throughout life.",

    commonConditions: [
      "Eyelid entropion and other ocular disorders: inward-rolling eyelids can rub the cornea and cause squinting, tearing, or ulceration; veterinary ophthalmologist screening is recommended.",
      "Hip dysplasia: abnormal hip joint development included in parent-club orthopedic screening guidance.",
      "Elbow dysplasia: developmental elbow joint incongruity monitored through radiographic screening programs.",
      "Patellar luxation: slippage of the kneecap in the hind limb, for which veterinary physical evaluation is recommended.",
      "Autoimmune thyroiditis (hypothyroidism): immune-mediated thyroid disease tracked through breed health-testing panels.",
      "Skin irritation and acute moist dermatitis (hot spots): dense, unbrushed or damp undercoat can trap moisture and conceal localized skin inflammation.",
      "Heat-related illness (heatstroke): heavy double coats and stout build increase vulnerability to overheating in warm or humid conditions.",
    ],

    preventiveCare: [
      "Schedule regular veterinary wellness checks, vaccinations, and parasite control suited to local risks.",
      "Review documented parent-dog screening clearances for eyes, hips, elbows, patellas, and thyroid when selecting a puppy.",
      "Keep the dog at a lean, muscular weight to reduce mechanical stress on the hips, elbows, and stifles.",
      "Inspect the eyes for tearing or squinting and part the coat weekly to check the skin and ears.",
      "Restrict outdoor exercise to cool hours, provide air conditioning or shade, and never leave the dog in a warm vehicle or unshaded yard.",
      "Seek immediate emergency veterinary care for heavy panting that does not subside, noisy breathing, weakness, or collapse.",
    ],

    recommendedScreenings: [
      "Comprehensive eye examination by a board-certified veterinary ophthalmologist",
      "Radiographic hip dysplasia evaluation",
      "Radiographic elbow dysplasia evaluation",
      "Patellar luxation physical evaluation",
      "Autoimmune thyroiditis laboratory panel",
      "Optional cardiac evaluation when advised by a veterinarian or breeding program",
    ],

    dentalCare:
      "Brush teeth several times a week using canine-formulated toothpaste and schedule routine veterinary dental assessments.",

    earCare:
      "Inspect the small, thickly furred upright ears weekly for redness, wax accumulation, odour, or sensitivity, cleaning gently only with veterinarian-approved solutions.",

    skinCare:
      "Part the coat down to the skin during brushing to detect mats, trapped moisture, parasites, or hot spots early, and always dry the undercoat completely after bathing or rain.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "Experienced, patient owners who respect an independent, cat-like canine temperament",
      "Households committed to thorough weekly line-brushing and seasonal undercoat care",
      "People who value a quiet, discerning companion and natural household watchdog",
      "Owners able to provide climate-controlled indoor living and cool-weather walking routines",
      "Handlers skilled in calm, reward-based training and structured boundary management",
    ],

    notIdealFor: [
      "Anyone wanting a low-shedding or low-maintenance coat",
      "Households expecting an effusive, stranger-loving dog that welcomes constant petting from visitors",
      "Novice owners unprepared to manage guardian instincts and selective dog-to-dog sociability",
      "Homes in hot or humid regions without reliable indoor cooling and heat-safe daily routines",
      "People who rely on forceful or confrontational training methods",
    ],
  },

  funFacts: [
    "Along with the Chinese Shar-Pei, the Chow Chow is famous for its solid blue-black tongue and dark-pigmented mouth tissues—a trait that develops after birth as puppies mature.",
    "The breed exists in two distinct double-coated varieties: the familiar rough coat with its lion-like mane, and a sleeker smooth coat with a dense, plush texture.",
    "Because its almond-shaped eyes are set deeply in the skull, a Chow Chow has limited peripheral vision and is most comfortable when approached calmly from the front.",
    "Minimal angulation in the hind legs and hocks aligned directly beneath the hips create the breed's signature short, pendulum-like gait.",
    "Many owners compare the breed's fastidious indoor habits, quiet demeanour, and self-contained personality to those of a cat.",
  ],

  faq: [
    {
      question: "Are Chow Chows good family dogs?",
      answer:
        "They can be deeply devoted to their immediate household, but they are dignified and value personal space. They generally do best in calm homes where children are old enough to respect a dog's boundaries and where all interactions are supervised.",
    },
    {
      question: "How much grooming does a Chow Chow need?",
      answer:
        "Substantial, ongoing coat care is essential. Plan to line-brush through both the outer coat and dense undercoat two to three times a week—and daily during spring and autumn coat blows—paying extra attention to the neck ruff, behind the ears, and the hindquarters.",
    },
    {
      question: "Are Chow Chows easy to train?",
      answer:
        "They typically housebreak quickly and learn household routines well, but they are independent thinkers that see little point in repetitive obedience drills. Short, respectful, reward-based sessions succeed far better than forceful methods.",
    },
    {
      question: "Why should you approach a Chow Chow from the front?",
      answer:
        "The breed's deep-set eyes narrow its side vision, meaning a sudden touch or approach from behind or the side can startle the dog. Speaking softly and letting the dog see you from the front makes greetings much more comfortable.",
    },
    {
      question: "Can a Chow Chow live in a warm climate?",
      answer:
        "Only with strict heat precautions. The thick double coat traps body heat, so the dog needs air-conditioned indoor quarters, constant access to cool water, and walks restricted to early morning or late evening.",
    },
    {
      question: "What colours do Chow Chows come in?",
      answer:
        "Recognised whole colours include black, red, blue, fawn or cinnamon, cream, and white, often with lighter shading under the tail and along the back of the thighs, but never in patchy or parti-coloured patterns.",
    },
    {
      question: "What is a Chow Chow's typical lifespan and what health tests matter most?",
      answer:
        "Typical life expectancy is 8 to 12 years. Prospective buyers should ask breeders for documented eye, hip, elbow, patellar, and autoimmune thyroiditis screening results for both parents.",
    },
  ],

  references: [
    "fci-chow-chow-standard",
    "american-kennel-club-chow-chow",
    "chow-chow-health-screening-chic",
    "wikimedia-chow-chow-andrea-papaccio",
    "wikimedia-chow-chow-prayitno",
    "wikimedia-chow-chow-olga-filonenko",
    "the-dog-api",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Left null in accordance with the repository schema convention when no formal taxonomic string is populated.",
    },

    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Historical and common names (Chow, Tang Quan, Canton Dog) verified from the structured reference record.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "Classification: Group 5 Spitz and primitive types, Section 5 Asian Spitz and related breeds",
        },
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile: Non-Sporting Group",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.breed_group (Non-Sporting)",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Combines the Non-Sporting and Asian Spitz classifications without embedding registry acronyms in user-facing text.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "Origin: China (Patronage: Great Britain)",
        },
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "About the Breed and History: ancient breed of northern Chinese origin",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-07",
      note: null,
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "cited",
          locator: "Origin: China",
        },
      ],
      verifiedOn: null,
      note: "Kept null because the official standard identifies China broadly without designating a single specific province.",
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "Brief Historical Summary, General Appearance, Behaviour/Temperament, and Coat sections",
        },
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "About the Breed, History, Grooming, Exercise, and linked AKC breed standard",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "All overview fields are written in original wording synthesising the official standard and kennel-club reference.",
    },

    "physical.sizeCategory": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "General Appearance and Size sections",
        },
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile and standard: medium in size, squarely built, heavy bone",
        },
      ],
      verifiedOn: "2026-11-07",
      note: null,
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "Size — Height at the withers: Males 48-56 cm; Females 46-51 cm",
        },
        {
          id: "american-kennel-club-chow-chow",
          role: "conflicting",
          locator: "Breed profile — Height: 17-20 inches",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.height.metric (43-51 cm overall for both sexes)",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Stored in exact published FCI metric centimetres (males 48-56 cm, females 46-51 cm). The AKC profile and standard give an overall adult average of 17-20 inches (which The Dog API reflects as 43-51 cm for both sexes).",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile — Weight: 45-70 pounds",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight.metric (20-32 kg for both sexes)",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Stored in the exact unit and whole numbers published by the AKC breed profile (45-70 lb) rather than decimal kilogram conversions (20.4-31.8 kg). Repeated in both male and female schema slots because neither AKC nor FCI publishes separate sex-specific weight ranges.",
    },

    "physical.weight.male.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile — Weight: 45-70 pounds",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight.metric (20-32 kg)",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Uses the exact published AKC upper bound of 70 lb; The Dog API reports 20-32 kg.",
    },

    "physical.weight.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile — Weight: 45-70 pounds",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight.metric (20-32 kg)",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Uses the exact published AKC upper bound of 70 lb; The Dog API reports 20-32 kg.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile — Life Expectancy: 8-12 years",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span (8-12 years)",
        },
      ],
      verifiedOn: "2026-11-07",
      note: null,
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "Coat — Hair: Rough or smooth double coat",
        },
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile: rough and smooth double coats",
        },
      ],
      verifiedOn: "2026-11-07",
      note: null,
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "Coat — Hair: Rough and Smooth descriptions",
        },
      ],
      verifiedOn: "2026-11-07",
      note: null,
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "Colour: Whole coloured black, red, blue, fawn, cream or white, frequently shaded but not in patches or parti-coloured",
        },
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile — Colors: Red, Black, Blue, Cinnamon, Cream",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "GET /breeds/{id}/colours",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Includes the whole colours recognised across FCI (black, red, blue, fawn, cream, white) and AKC (which uses cinnamon alongside red, black, blue, and cream). Non-standard species-wide entries from The Dog API colour endpoint (such as merle, brindle, piebald, tricolour, and black-and-tan) are excluded.",
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile — Grooming and Shedding Level",
        },
      ],
      verifiedOn: "2026-11-07",
      note: null,
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Kept null because official breed standards do not specify a drooling rating.",
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "General Appearance, Head, Mouth (blue-black tongue), Ears, Tail, Hindquarters, and Movement sections",
        },
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile and standard: blue-black tongue, deep-set eyes with limited peripheral vision, lion-like ruff, square build, and stilted gait",
        },
      ],
      verifiedOn: "2026-11-07",
      note: null,
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "Behaviour / Temperament: Quiet dog, good guardian; independent, loyal, yet aloof",
        },
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile — Temperament and Personality",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-07",
      note: null,
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile — Trait ratings and temperament description",
        },
        {
          id: "fci-chow-chow-standard",
          role: "cited",
          locator: "Behaviour / Temperament",
        },
      ],
      verifiedOn: null,
      note: "All 1-5 temperament scores are editorial estimates informed by kennel-club and standard descriptions.",
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile — Exercise section",
        },
      ],
      verifiedOn: "2026-11-07",
      note: null,
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile — Exercise needs",
        },
      ],
      verifiedOn: null,
      note: "Practical daily exercise estimate (45-60 minutes) for a healthy adult in cool or temperate conditions.",
    },

    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile — Exercise section",
        },
      ],
      verifiedOn: null,
      note: "General activity suggestions tailored to a heavy-coated, moderate-energy breed.",
    },

    "care.grooming.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile — Grooming section",
        },
      ],
      verifiedOn: "2026-11-07",
      note: null,
    },

    "care.grooming.brushing": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile — Grooming (thorough brushing multiple times weekly and during seasonal shedding)",
        },
      ],
      verifiedOn: "2026-11-07",
      note: null,
    },

    "care.grooming.bathing": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile — Grooming section",
        },
      ],
      verifiedOn: null,
      note: "General double-coat bathing and complete undercoat drying guidance.",
    },

    "care.grooming.notes": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "cited",
          locator: "Coat — Any artificial shortening of the coat which alters the natural outline or expression should be penalised, with the exception of feet which may be tidied",
        },
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile — Grooming section",
        },
      ],
      verifiedOn: null,
      note: "Routine double-coat maintenance and natural-outline preservation guidance.",
    },

    "care.training.difficulty": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "Behaviour / Temperament",
        },
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile — Training and Personality sections",
        },
      ],
      verifiedOn: "2026-11-07",
      note: null,
    },

    "care.training.tips": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile and standard — Training section and limited peripheral vision guidance",
        },
      ],
      verifiedOn: null,
      note: "Combines reward-based training advice with guidance on approaching from the front due to deep-set eyes and limited peripheral vision.",
    },

    "care.training.socialization": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile — Early socialization and training recommendations",
        },
      ],
      verifiedOn: null,
      note: "General socialisation guidance adapted to an aloof, guardian-type breed.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Left null because suitability for apartment living depends heavily on climate control, elevator access, and individual management.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile — Exercise and care",
        },
      ],
      verifiedOn: null,
      note: "Editorial assessment; a securely fenced yard is helpful when combined with cool indoor living quarters and daily walks.",
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "cited",
          locator: "Coat: profuse coat must never impede activity or cause distress in hot weather",
        },
      ],
      verifiedOn: null,
      note: "Heat-safety and climate guidance informed by the breed's dense Arctic-type double coat.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No authoritative breed-specific duration for alone-time tolerance was established.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile — Nutrition section",
        },
      ],
      verifiedOn: null,
      note: "General canine nutrition guidance tailored to maintaining lean body condition underneath a heavy double coat.",
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific senior feeding schedule was established.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile — Health and Recommended Health Tests",
        },
        {
          id: "chow-chow-health-screening-chic",
          role: "verified",
          locator: "OFA-CHIC breed-specific screening requirements (eyes, hips, elbows, patellas, thyroid; optional cardiac)",
        },
      ],
      verifiedOn: "2026-11-07",
      note: "Distinguishes parent-club recommended screenings and recognized breed predispositions (such as entropion, joint dysplasia, patellar luxation, and autoimmune thyroiditis) from general coat/heat management risks.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile — Health and Grooming sections",
        },
        {
          id: "chow-chow-health-screening-chic",
          role: "cited",
          locator: "Health screening recommendations",
        },
      ],
      verifiedOn: null,
      note: "General veterinary preventive care and heatstroke prevention guidance.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile — Recommended Health Tests from the National Breed Club",
        },
        {
          id: "chow-chow-health-screening-chic",
          role: "verified",
          locator: "Required screenings: Eye exam, Hip evaluation, Elbow evaluation, Patellar evaluation, Autoimmune thyroiditis panel; Optional: Cardiac evaluation",
        },
      ],
      verifiedOn: "2026-11-07",
      note: null,
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine dental care guidance.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine ear care guidance.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile — Grooming section",
        },
      ],
      verifiedOn: null,
      note: "Skin and undercoat inspection guidance for a densely double-coated breed.",
    },

    "suitability.firstTimeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile — Temperament, Training, and Grooming sections",
        },
      ],
      verifiedOn: null,
      note: "Editorial assessment reflecting the breed's strong independence, guardian instincts, and intensive grooming demands.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Kept null because suitability with children depends heavily on child age, respectful handling, individual temperament, and adult supervision.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Kept null because suitability for senior owners depends on physical strength, grooming support, and individual dog temperament.",
    },

    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile — Exercise section",
        },
      ],
      verifiedOn: null,
      note: "Editorial assessment based on daily walking and outdoor enrichment needs during cool hours.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Aligned with care.livingEnvironment.apartmentSuitable.",
    },

    "suitability.idealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile — Temperament, Grooming, and Exercise sections",
        },
      ],
      verifiedOn: null,
      note: "Synthesised owner-matching guidance.",
    },

    "suitability.notIdealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-chow-chow",
          role: "cited",
          locator: "Breed profile — Temperament, Grooming, and Exercise sections",
        },
      ],
      verifiedOn: null,
      note: "Synthesised owner-matching caveats.",
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "Mouth (blue-black tongue), Coat (rough and smooth), Hindquarters, and Movement sections",
        },
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "About the Breed and standard (deep-set eyes with limited peripheral vision; cat-like fastidious indoor nature)",
        },
      ],
      verifiedOn: "2026-11-07",
      note: null,
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-chow-chow-standard",
          role: "verified",
          locator: "Temperament, Coat, and Colour sections",
        },
        {
          id: "american-kennel-club-chow-chow",
          role: "verified",
          locator: "Breed profile — Lifespan (8-12 years), Grooming, Training, Health, and standard (limited peripheral vision)",
        },
        {
          id: "chow-chow-health-screening-chic",
          role: "verified",
          locator: "Recommended health screenings",
        },
      ],
      verifiedOn: "2026-11-07",
      note: null,
    },
  },

  updatedOn: "2026-11-07",
};
