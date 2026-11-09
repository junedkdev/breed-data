import type { Breed } from "../schema/breed.types";

export const aidi: Breed = {
  slug: "aidi",
  name: "Aidi",
  scientificName: null,

  alternateNames: [
    "Aidi",
    "Atlas Mountain Dog",
    "Atlas Shepherd Dog",
    "Chien de Montagne de l'Atlas",
    "Chien de l'Atlas",
    "Kabyle Dog",
    "Ourika Dog",
  ],

  group: "Guardian Dogs; Mountain Molossoid Breeds",

  origin: {
    country: "Morocco",
    region: "Atlas Mountains and surrounding plateaus of Morocco",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Atlas_Mountain_Dog.JPG",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Atlas_Mountain_Dog.JPG",
      title: "Atlas Mountain Dog.JPG",
      description:
        "An Aidi photographed outdoors, showing its substantial protective coat and guardian build.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2013-08-17",
      uploadedOn: "2013-10-13",
      width: 693,
      height: 457,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Atlasmountainaidi.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Atlasmountainaidi.jpg",
      title: "Atlasmountainaidi.jpg",
      description: "An Atlas Mountain Dog photographed outdoors in natural light.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2023-08-26",
      uploadedOn: "2023-08-27",
      width: 2465,
      height: 2102,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Aidi_Atlas.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Aidi_Atlas.jpg",
      title: "Aidi Atlas.jpg",
      description: "An Aidi photographed in Morocco displaying typical head type and alert posture.",
      creator: "HichamB",
      uploader: "Hichamalemdar",
      capturedOn: "2021-08-19",
      uploadedOn: "2021-08-19",
      width: 1030,
      height: 853,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by HichamB (Wikimedia username Hichamalemdar), via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08",
    },
  ],

  overview: {
    summary:
      "Native to the Atlas Mountains and high plateaus of Morocco, the Aidi—also celebrated as the Atlas Mountain Dog—is an agile, muscular livestock and property guardian. Endowed with a thick, weather-defying coat, keen senses, and fearless vigilance, it unites devoted tenderness toward its family with independent, protective discernment toward outside threats.",

    description:
      "Muscular and sinewy without clumsiness, the Aidi is built for endurance and lightning agility across rocky slopes and high plains. A thick, harsh outer fleece of roughly 6 cm forms a protective mane around the neck and throat—serving as natural armor against extreme climate and native predators—while clean leg furnishings and a bushy scimitar tail balance its rectangular outline. Traditionally stationed alongside semi-nomadic Berber pastoralists, the breed functioned primarily as a vigilant camp and livestock sentry rather than a gathering sheepdog. In a domestic environment, it is deeply affectionate, gentle, and loyal with trusted household members, but its innate territorial watchfulness demands experienced management, early positive socialisation, and secure perimeter fencing.",

    history:
      "The Aidi has guarded Berber communities in North Africa's Atlas range for centuries, protecting nomadic camps, flocks, and belongings against jackals, hyenas, and intruders. Working closely with desert hunters—often operating in tandem with swift Sloughis who pursued game flushed or scented by the dog—the breed developed an independent working intelligence and extraordinary hardiness. Formal breed documentation began in Morocco in the mid-twentieth century, leading to international recognition and preservation efforts that celebrate the dog as a living symbol of North African pastoral culture.",

    originalPurpose:
      "Guarding camps, settlements, property, and flocks of sheep and goats against wild predators and human intruders across the Atlas Mountains and plateau grasslands.",

    currentRoles: [
      "Traditional livestock and rural homestead guardian",
      "Faithful personal protector and family companion for experienced handlers",
      "Scent tracking and outdoor hiking partner",
      "Conformation show competitor where recognized",
    ],
  },

  physical: {
    sizeCategory: "Medium-large, agile and muscular mountain guardian",

    height: {
      unit: "cm",
      male: { min: 52, max: 62 },
      female: { min: 52, max: 62 },
    },

    weight: {
      unit: "kg",
      male: { min: 23, max: 25 },
      female: { min: 23, max: 25 },
    },

    lifespanYears: {
      min: 10,
      max: 12,
    },

    coatType:
      "Thick, dense, and rather harsh outer coat about 6 cm in length, accompanied by an insulating soft undercoat, forming a full protective mane on the neck and throat, with shorter, finer hair on the face and ears.",

    coatLength: "Medium, approximately 6 cm over the body, with a heavy neck ruff, thigh breeches, and bushy plume tail",

    coatColors: [
      "Fawn",
      "Brown",
      "Black",
      "Fawn with Brindle",
      "Fawn with Dark Overlay",
      "Brown with Dark Overlay",
      "White with Patches",
    ],

    sheddingLevel:
      "Moderate to high seasonal shedding; the dense double coat sheds hair continuously and requires thorough line-brushing during spring and autumn undercoat blowouts.",

    droolingLevel: "Low",

    distinctiveFeatures: [
      "Rectangular silhouette with length-to-height ratio of approximately 10 to 9",
      "Bear-like head with flat, broad skull planes and lean, powerful jaws",
      "Dense, harsh weatherproof fleece with a prominent protective neck mane, especially in males",
      "Medium semi-prick or dropped ears with slightly rounded tips, carried alertly forward",
      "Dark amber to hazel expressive eyes with deeply pigmented rims",
      "Long, heavily plumed scimitar tail reaching at least to the hocks, carried low in repose",
    ],
  },

  temperament: {
    traits: [
      "Vigilant and alert",
      "Naturally protective",
      "Devoted and gentle with family",
      "Independent decision-maker",
      "Reserved and discerning with strangers",
      "Courageous and fearless when challenged",
      "Energetic outdoors",
      "Calm when off duty",
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 5,
      independence: 4,
      trainability: 3,
      barking: 4,
      energy: 4,
    },
  },

  care: {
    exercise: {
      level: "High",

      minutesPerDay: {
        min: 60,
        max: 90,
      },

      activities: [
        "Daily sustained walks, hikes, and territory patrols on secure tracking lines",
        "Free roaming and perimeter exploration within a tall, securely fenced rural yard or acreage",
        "Scent-tracking trails and outdoor problem-solving challenges",
        "Structured obedience drills reinforcing calm manners around distractions",
        "Interactive food puzzles and indoor cognitive games during hot weather",
      ],
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush thoroughly two to three times weekly using an undercoat rake and slicker brush, parting the dense coat down to the skin to prevent mats and lift trapped field debris.",

      bathing:
        "Bathe only occasionally when heavily soiled, using a mild canine shampoo to avoid stripping the protective natural oils that waterproof the coat.",

      notes: [
        "Comb out the neck mane, thigh breeches, and tail feathering regularly to avoid burr accumulation.",
        "Inspect the skin beneath the thick hair for ticks, grass seeds, and abrasions after outdoor patrols.",
        "Check semi-prick ears weekly for wax, dirt, or irritation, cleaning gently with veterinarian-approved cleansers.",
        "Trim nails every few weeks to maintain sound, tight paws.",
      ],
    },

    training: {
      difficulty:
        "Moderate to challenging; highly intelligent and perceptive, but possesses independent guardian autonomy that questions repetitive or harsh drilling.",

      tips: [
        "Rely on calm, consistent, reward-based training with high-value reinforcement; avoid harsh punishment that triggers defensive resistance.",
        "Establish clear leadership, polite doorway waiting, and calm visitor greeting protocols early in puppyhood.",
        "Practice solid recall inside secure enclosures, understanding that guardian vigilance can override cues if perceived threats arise.",
        "Socialize puppies continuously to novel sights, sounds, unfamiliar guests, and polite dogs to foster calm discrimination.",
      ],

      socialization:
        "Begin structured socialisation early and maintain it through maturity, teaching the young guardian to observe unfamiliar people and stimuli neutrally without escalating into protective suspicion.",
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Mountain, upland, and cool temperate environments",
        "Warm arid climates when provided with daytime shade, cool indoor retreats, and ample hydration",
      ],

      aloneTimeTolerance:
        "Moderate in a secure environment with clear sentinel duties; extended confinement indoors without activity may lead to persistent watchdog barking or digging.",
    },
  },

  nutrition: {
    dietType:
      "High-quality commercial dry kibble, wet food, or veterinary-formulated diet suited to active, medium-large working guardian breeds.",

    feedingFrequency: {
      puppy: "3 to 4 measured meals daily during skeletal development, transitioning to 2 meals daily around six months of age",
      adult: "2 measured meals per day to maintain steady energy and reduce digestive distension",
      senior: null,
    },

    guidelines:
      "Weigh rations accurately according to body condition score and workload, checking ribs and waist beneath the thick coat rather than judging by outward fur volume alone.",

    considerations: [
      "Avoid strenuous galloping or high-impact exercise immediately before and after meals to mitigate digestive upset and bloat risks.",
      "Factor all training rewards into the overall daily caloric intake.",
      "Provide clean, fresh water at all times in clean, heavy bowls that cannot be tipped.",
      "Consult a veterinarian if noticeable weight fluctuations or digestive changes occur.",
    ],

    note: "Caloric requirements vary with season, outdoor temperature, and workload; discuss specific dietary needs with a veterinarian.",
  },

  health: {
    overview:
      "The Aidi is a rugged, naturally healthy mountain breed with an average lifespan of 10 to 12 years, largely free from the extreme conformational defects common in over-refined breeds. Routine veterinary care should focus on joint soundness, coat and skin health, and vector-borne disease prevention in areas endemic to sand flies and ticks.",

    commonConditions: [
      "Canine leishmaniasis: a vector-borne protozoal disease transmitted by sand flies in Mediterranean and North African regions; preventive repellents and screening are critical in endemic zones.",
      "Hip and elbow dysplasia: developmental joint incongruity occasionally seen in medium-large guardian breeds.",
      "Skin sensitivities and hot spots: localized moist dermatitis beneath dense, damp, or unbrushed undercoats.",
      "Ear canal irritation (otitis externa): inflammation related to debris or moisture trapped in folded ears.",
    ],

    preventiveCare: [
      "Maintain active parasite control, including sand-fly repellents and tick prevention in endemic regions.",
      "Schedule annual comprehensive veterinary wellness checkups and core vaccinations.",
      "Inspect the skin and thick undercoat weekly for parasites, burrs, and early hot spots.",
      "Maintain a lean, muscular body weight to avoid unnecessary mechanical stress on the joints.",
    ],

    recommendedScreenings: [
      "Radiographic hip and elbow evaluations through an accepted screening scheme prior to breeding",
      "Serological screening for leishmaniasis in regions where sand-fly vectors are active",
      "Routine annual veterinary physical, ophthalmic, and dental examinations",
    ],

    dentalCare:
      "Brush teeth multiple times weekly using canine enzymatic paste to maintain clean teeth and healthy gums.",

    earCare:
      "Inspect semi-prick and drop ears weekly, wiping away wax or dirt and keeping canals dry.",

    skinCare:
      "Part the thick coat to check skin health during weekly brushing, drying completely after wet outdoor weather.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Experienced dog owners familiar with livestock guardian and mountain dog temperament",
      "Rural properties, smallholdings, farms, or homes with expansive, securely fenced yards",
      "Active outdoor households seeking a loyal hiking partner and vigilant property sentinel",
      "Owners committed to consistent, positive training and thorough regular coat brushing",
    ],

    notIdealFor: [
      "Novice or first-time dog owners unprepared for autonomous guardian instincts",
      "Apartment, condo, or dense urban living arrangements with shared hallways",
      "Sedentary households looking for a low-energy, visitor-friendly lap companion",
      "Properties without secure perimeter fencing where roaming instincts could cause conflict",
    ],
  },

  funFacts: [
    "Despite being classified as an Atlas Shepherd Dog in some historical texts, the Aidi was never a herding dog; its true job was fiercely defending camps and herds from predators.",
    "In Morocco, Aidi guardians traditionally worked in partnership with the Sloughi sighthound, with the Aidi scenting and flushing wild game while the Sloughi gave chase.",
    "The dense 6 cm fleece functions as both a thermoregulatory blanket against freezing mountain blizzards and heat, and as protective chainmail against predator bites.",
    "The breed has historically guarded both mobile Berber tent encampments in the High Atlas and fortified granaries (agadirs) against raiders.",
    "The official international standard notes that the Aidi is not subject to a working trial, preserving its heritage as a pure natural guardian.",
  ],

  faq: [
    {
      question: "Where does the Aidi originate?",
      answer:
        "The Aidi originates in Morocco, where it developed along the Atlas Mountain range and surrounding high plateaus as a rugged camp and herd protector.",
    },
    {
      question: "Is the Aidi a herding sheepdog?",
      answer:
        "No. Although sometimes called the Atlas Shepherd Dog, the Aidi's historical job was guarding and defending livestock and tents from predators, not rounding up or driving herds.",
    },
    {
      question: "How big does an Aidi get?",
      answer:
        "Official documentation lists height at 52 to 62 cm at the withers for both males and females, with typical adult weights spanning 23 to 25 kg.",
    },
    {
      question: "What colors do Aidi coats come in?",
      answer:
        "Colors range across fawn (from pale sand to deep red), brown, and black, often with brindling, darker mantles, or white patches.",
    },
    {
      question: "Is an Aidi suitable for a first-time dog owner?",
      answer:
        "Generally no. The breed's powerful protective instincts, independent decision-making, and physical strength make it best suited to experienced handlers familiar with guardian dogs.",
    },
    {
      question: "How much exercise does an Aidi need daily?",
      answer:
        "A healthy adult Aidi thrives with 60 to 90 minutes of daily physical exercise and mental engagement, such as long hikes, scent games, and perimeter patrols in secure areas.",
    },
    {
      question: "Does the Aidi shed a lot?",
      answer:
        "Yes, the thick double coat sheds moderately year-round and experiences heavy seasonal coat blows, requiring regular line-brushing with an undercoat rake.",
    },
    {
      question: "What health concerns are associated with the Aidi?",
      answer:
        "The breed is remarkably hardy, but owners should watch for hip dysplasia, ear and skin irritation, and vector-borne diseases like leishmaniasis in Mediterranean and North African zones.",
    },
    {
      question: "Can an Aidi live in an apartment?",
      answer:
        "No. The breed's territorial alertness, protective barking tendency, and need for outdoor space make apartment living unsuitable.",
    },
  ],

  references: [
    "fci-aidi-official-standard",
    "united-kennel-club-aidi-standard",
    "royal-canin-aidi-profile",
    "pubmed-aidi-leishmaniasis-study",
    "wikimedia-aidi-canarian-2013",
    "wikimedia-aidi-canarian-2023",
    "wikimedia-aidi-hichamb-2021",
    "the-dog-api",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names",
        },
        {
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "Breed nomenclature: Aidi, Chien de Montagne de l'Atlas",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "verified",
          locator: "Title and history: Aidi, Atlas Mountain Dog",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Historical and alternate names verified across standards and reference records.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Left null in accordance with repository schema conventions when no formal taxonomy name is assigned.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "FCI classification: Group 2 Pinscher and Schnauzer, Molossoid and Swiss Mountain and Cattledogs; Section 2.2 Mountain type",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "verified",
          locator: "UKC breed group: Guardian Dog",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.breed_group",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Combines Guardian Dog and Mountain Molossoid classifications without naming registry acronyms in user-facing text.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "Origin: Morocco",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "verified",
          locator: "History: Morocco",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "origin.region": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "Brief Historical Summary: Atlas Mountains and plateaux of Morocco",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "verified",
          locator: "History: mountains and plateaus of North Africa, especially Morocco",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin (Atlas Mountains, Morocco)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Identifies the Atlas Mountains and surrounding plateaus of Morocco.",
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "Brief Historical Summary, General Appearance, Behaviour/Temperament, and Utilisation sections",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "verified",
          locator: "History, General Appearance, and Characteristics sections",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "All overview text is synthesized in original phrasing from standard and kennel-club references.",
    },

    "physical.sizeCategory": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "General Appearance and Size sections",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "verified",
          locator: "General appearance: medium-large, muscular guardian dog",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "Size — Height at withers: 52 to 62 cm",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "verified",
          locator: "Height: 20 1/2 to 24 1/2 inches (52-62 cm) ideal for both sexes",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.height.metric (male 52-62 cm, female 46-55 cm)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Stored in exact published metric centimetres (52-62 cm for both sexes). Official standards specify a single 52-62 cm range; The Dog API's lower female figure (46-55 cm) is noted as conflicting.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (23-25 kg for both sexes)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Stored in exact published metric kilograms (23-25 kg) from the structured reference record, as official standards do not bound weight numerically.",
    },

    "physical.weight.male.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (25 kg)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Maximum male weight of 25 kg verified from reference data.",
    },

    "physical.weight.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (25 kg)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Maximum female weight of 25 kg verified from reference data.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-canin-aidi-profile",
          role: "verified",
          locator: "Breed specifics: average life expectancy 10-12 years",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span (10-12 years)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "Coat — Hair: Thick, rather harsh, half-long, about 6 cm long except on face and ears where it is shorter and finer. Mane on neck and under throat especially in males",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "verified",
          locator: "Coat section",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "Coat — Hair: about 6 cm long on body with mane, breeches and plume on tail",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "Colour: Fawn, brown, black, with white markings, darker overlay, or brindling",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "verified",
          locator: "Color section",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "GET /breeds/{id}/colours",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Restricted to recognized fawn, brown, black, brindled, and overlaid colors with or without white markings.",
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "cited",
          locator: "Coat description: thick double coat with undercoat",
        },
      ],
      verifiedOn: null,
      note: "Editorial estimate based on the dense, harsh protective double coat.",
    },

    "physical.droolingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "cited",
          locator: "Head — Lips: lean, tight, black or brown pigmented",
        },
      ],
      verifiedOn: null,
      note: "Editorial estimate reflecting clean, tight lips described in the standard.",
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "General Appearance, Head, Body, Tail, and Coat sections",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "verified",
          locator: "General appearance, head, body proportions (10:9 ratio), and tail plume",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "Behaviour / Temperament: Very devoted, affectionate with master and family, strong protective and guardian instincts, watchful, independent",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "verified",
          locator: "Characteristics: affectionate, vigilant guardian, bold and independent",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "cited",
          locator: "Behaviour / Temperament",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "cited",
          locator: "Characteristics and guardian heritage",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1-5 ratings based on documented working and temperament traits.",
    },

    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        {
          id: "united-kennel-club-aidi-standard",
          role: "verified",
          locator: "History and general appearance: active outdoor mountain guardian",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Daily exercise requirements (60-90 minutes) reflecting an agile, athletic mountain livestock guardian.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "Coat — Hair: harsh double coat about 6 cm long with mane and feathering",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Moderate grooming guidance for a thick double coat, alongside ear, paw, and dental hygiene.",
    },

    "care.training": {
      reliability: "general_guidance",
      sources: [
        {
          id: "united-kennel-club-aidi-standard",
          role: "cited",
          locator: "Characteristics: independent guardian instincts",
        },
      ],
      verifiedOn: null,
      note: "Reward-based training guidance adapted to an independent livestock guardian.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "united-kennel-club-aidi-standard",
          role: "cited",
          locator: "History and traditional guardian role",
        },
      ],
      verifiedOn: null,
      note: "Boolean assessment; high alertness, protective barking, and exercise demands make apartments unsuitable.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "united-kennel-club-aidi-standard",
          role: "cited",
          locator: "History and outdoor working background",
        },
      ],
      verifiedOn: null,
      note: "A securely fenced yard provides necessary perimeter patrolling and safe outdoor movement.",
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "cited",
          locator: "Brief Historical Summary: adapted to heat and cold of Atlas Mountains",
        },
      ],
      verifiedOn: null,
      note: "Climate guidance reflecting adaptation to extreme temperature swings in North African mountains.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Guidance on managing alone time in a secure guardian setting.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine nutritional recommendations suited to a medium-large working mountain guardian.",
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific senior feeding frequency was established.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "pubmed-aidi-leishmaniasis-study",
          role: "verified",
          locator: "Abstract: canine leishmaniasis diagnosis and prevalence in Atlas shepherd dogs",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Synthesises veterinary documentation on endemic vector-borne diseases and general mountain dog health.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pubmed-aidi-leishmaniasis-study",
          role: "verified",
          locator: "Abstract: canine leishmaniasis in Atlas shepherd dogs in North Africa",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Cites documented regional health concerns (canine leishmaniasis) and standard guardian orthopedic considerations.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "pubmed-aidi-leishmaniasis-study",
          role: "cited",
          locator: "Discussion: sand-fly vector control and prevention",
        },
      ],
      verifiedOn: null,
      note: "Preventive veterinary care, parasite control, sand-fly protection, and physical checks.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pubmed-aidi-leishmaniasis-study",
          role: "verified",
          locator: "Screening recommendations: serology in sand-fly regions and joint evaluations",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Screening recommendations for joint evaluation and vector-borne serology in endemic areas.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine canine dental hygiene advice.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine ear hygiene for semi-prick and drop ears.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Skin inspection and post-outdoor coat checks.",
    },

    "suitability.firstTimeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "united-kennel-club-aidi-standard",
          role: "cited",
          locator: "Characteristics: independent guardian drive",
        },
      ],
      verifiedOn: null,
      note: "Editorial assessment; autonomous protective instincts make the breed unsuitable for first-time owners.",
    },

    "suitability.familiesWithChildren": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "cited",
          locator: "Behaviour / Temperament: devoted and affectionate with family",
        },
      ],
      verifiedOn: null,
      note: "Boolean assessment; affectionate and devoted with household children under responsible adult supervision.",
    },

    "suitability.seniorOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "united-kennel-club-aidi-standard",
          role: "cited",
          locator: "General appearance: powerful, agile working dog",
        },
      ],
      verifiedOn: null,
      note: "Editorial assessment; physical strength, guardian vigilance, and exercise needs can be challenging for seniors.",
    },

    "suitability.activeOwners": {
      reliability: "reliable_source",
      sources: [
        {
          id: "united-kennel-club-aidi-standard",
          role: "verified",
          locator: "History and general appearance",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "suitability.apartmentLiving": {
      reliability: "estimate",
      sources: [
        {
          id: "united-kennel-club-aidi-standard",
          role: "cited",
          locator: "History and traditional guardian role",
        },
      ],
      verifiedOn: null,
      note: "Aligned with care.livingEnvironment.apartmentSuitable.",
    },

    "suitability.idealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "united-kennel-club-aidi-standard",
          role: "cited",
          locator: "Characteristics and working heritage",
        },
      ],
      verifiedOn: null,
      note: "Synthesised owner-matching guidance based on guardian heritage and active outdoor needs.",
    },

    "suitability.notIdealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "united-kennel-club-aidi-standard",
          role: "cited",
          locator: "Characteristics and working heritage",
        },
      ],
      verifiedOn: null,
      note: "Synthesised owner-matching caveats.",
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "Brief Historical Summary and Utilisation",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "verified",
          locator: "History and general appearance",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-aidi-official-standard",
          role: "verified",
          locator: "Size, Coat, Colour, and Utilisation sections",
        },
        {
          id: "united-kennel-club-aidi-standard",
          role: "verified",
          locator: "History, Characteristics, Height, and Coat",
        },
        {
          id: "royal-canin-aidi-profile",
          role: "verified",
          locator: "Lifespan",
        },
        {
          id: "pubmed-aidi-leishmaniasis-study",
          role: "verified",
          locator: "Health and leishmaniasis research",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },
  },

  updatedOn: "2026-11-08",
};
