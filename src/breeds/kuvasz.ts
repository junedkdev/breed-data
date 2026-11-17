import type { Breed } from "../schema/breed.types";

export const kuvasz: Breed = {
  slug: "kuvasz",
  name: "Kuvasz",
  scientificName: null,

  alternateNames: [
    "Hungarian Kuvasz",
    "Kuvaszok",
    "Magyar Kuvasz",
    "Chien de berger hongrois Kuvasz",
    "Ungarischer Kuvasz",
  ],

  group:
    "Sheepdogs and Cattledogs (except Swiss Cattle Dogs); Section 1 — Sheepdogs (without working trial)",

  origin: {
    country: "Hungary",
    region: "Carpathian Basin and the Hungarian Plains",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kuvasz_-_1.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Kuvasz_-_1.jpg",
      title: "Kuvasz - 1.jpg",
      description: "Female Kuvasz in Ópusztaszer, Hungary.",
      creator: "DenesFeri",
      uploader: "DenesFeri",
      capturedOn: "2019-09-11",
      uploadedOn: "2019-09-23",
      width: 1685,
      height: 2246,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by DenesFeri, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Kuvasz_-_1.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. No changes made.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/DocFile_Kuvasz.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:DocFile_Kuvasz.jpg",
      title: "DocFile Kuvasz.jpg",
      description: "An adult Kuvasz standing outdoors in a field.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2004-09-12",
      uploadedOn: "2019-02-11",
      width: 959,
      height: 772,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:DocFile_Kuvasz.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. No changes made.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kuvasz_-_3.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Kuvasz_-_3.jpg",
      title: "Kuvasz - 3.jpg",
      description: "Female Kuvasz outdoors in Ópusztaszer, Hungary.",
      creator: "DenesFeri",
      uploader: "DenesFeri",
      capturedOn: "2019-09-11",
      uploadedOn: "2019-09-23",
      width: 1642,
      height: 2189,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by DenesFeri, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Kuvasz_-_3.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. No changes made.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17",
    },
  ],

  overview: {
    summary:
      "The Kuvasz is a large, powerfully built Hungarian flock and property guardian distinguished by its dense, wavy white or ivory double coat, dark skin pigmentation, and tireless, courageous devotion to the people and territory in its care.",

    description:
      "Combining substantial bone with lean, sharply defined muscle and light-footed agility, the Kuvasz presents a slightly rectangular outline that is slightly longer than tall and never clumsy or coarse. Its weatherproof double coat pairs a wavy outer coat—forming characteristic crests, ridges, and tassels along the torso—with a fine, downy undercoat, an expressive neck mane, and full feathering on the thighs and tail. A noble, wedge-shaped head with a gently sloping stop, obliquely set dark-brown almond eyes, V-shaped pendant ears, and jet-black nose, lip, and eyelid pigment sets it apart from other white guardian breeds. Devoted, gentle, and appreciative toward its own household, the breed is naturally watchful, independent, and fearless when defending its home or livestock from intruders.",

    history:
      "Rooted in the ancient pastoral traditions of the Carpathian Basin, the ancestors of the Kuvasz arrived in Hungary with the Magyar tribes in the ninth century to protect livestock against wolves, bears, and cattle thieves. During the fifteenth-century reign of King Matthias Corvinus, the dogs were prized at the royal court as trusted personal bodyguards and big-game hunting hounds. As open grazing across the Hungarian plains later contracted, the breed shifted increasingly toward guarding rural estates, villages, and homesteads, with shepherds favouring the white coat so their dogs stood out clearly from predators at night. Nearly wiped out during the devastation of World War II—when fewer than thirty registered dogs survived in Hungary—the breed was carefully rebuilt from remaining working lines and is honoured today as one of Hungary's historic national dog breeds.",

    originalPurpose:
      "Guarding flocks, herds, and rural estates against large predators and thieves in Hungary, as well as serving as a royal court guard and big-game hound.",

    currentRoles: [
      "Working livestock guardian for sheep, goats, and cattle",
      "Rural estate and homestead guardian",
      "Devoted household guardian and companion for experienced owners",
      "Cold-weather hiking and outdoor companion",
      "Conformation, obedience, and rally participant",
    ],
  },

  physical: {
    sizeCategory: "Large, muscular, slightly rectangular flock guardian",

    height: {
      unit: "cm",
      male: {
        min: 71,
        max: 76,
      },
      female: {
        min: 66,
        max: 70,
      },
    },

    weight: {
      unit: "kg",
      male: {
        min: 48,
        max: 62,
      },
      female: {
        min: 37,
        max: 50,
      },
    },

    lifespanYears: {
      min: 10,
      max: 12,
    },

    coatType:
      "Dense, weather-resistant double coat consisting of a moderately coarse, wavy topcoat that forms crests, ridges, and tassels over a fine, downy undercoat.",

    coatLength:
      "Short and smooth (1–2 cm) on the head, ears, feet, and lower limbs; medium length (4–12 cm) on the torso, upper arms, and thighs, with 5–8 cm leg feathering and 10–15 cm tail hair.",

    coatColors: [
      "White",
      "Ivory",
    ],

    sheddingLevel:
      "Moderate year-round shedding with heavy seasonal coat drops in spring and autumn when the dense undercoat molts",

    droolingLevel:
      "Low to moderate; the black-edged lips fit tightly and cleanly over the jaws without loose flews",

    distinctiveFeatures: [
      "Slightly rectangular, powerfully muscled body with clean, sharply outlined joints",
      "Lean, dry, wedge-shaped head that distinguishes the breed from other white flock guardians",
      "Slightly slanting, almond-shaped dark brown eyes with tight black eyelid rims",
      "Medium-set V-shaped ears with rounded tips that curve slightly away at the base before lying flat against the head",
      "Tight-fitting black lips with a characteristic serrated or jagged lip margin",
      "Strong jaws meeting in a regular, complete scissor bite",
      "Abundant wavy white or ivory coat forming crests and ridges, a pronounced neck ruff and chest mane, and full breeches",
      "Black nose leather, lips, and eye rims with black or slate-grey paw pads and a dark palate",
      "Low-set tail reaching to the hocks, hanging straight with a slight upward curve at the tip at rest",
      "Height at the withers of 71–76 cm for males and 66–70 cm for females",
      "Weight of 48–62 kg for males and 37–50 kg for females",
    ],
  },

  temperament: {
    traits: [
      "Brave, fearless, and resolute when defending family, flock, or property",
      "Faithful, dependable, and deeply attached to its household",
      "Naturally watchful and reserved toward unfamiliar people",
      "Self-assured and independent in assessing situations",
      "Gentle and patient with children in its own family",
      "Vigilant and territorial day and night",
      "Sensitive to unfair or harsh treatment",
      "Calm, dignified, and self-reliant",
      "Strong guardian instinct coupled with low prey drive toward guarded stock",
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 2,
      withStrangers: 2,
      protectiveness: 5,
      independence: 4,
      trainability: 3,
      barking: 3,
      energy: 3,
    },
  },

  care: {
    exercise: {
      level:
        "Moderate to high. A tireless working guardian by heritage, the Kuvasz needs daily purposeful walks and room to patrol within a securely fenced property.",

      minutesPerDay: {
        min: 45,
        max: 60,
      },

      activities: [
        "Brisk daily walks and hikes over varied terrain",
        "Supervised patrolling and free movement inside a tall, securely fenced yard or pasture",
        "Active livestock guardianship on working farms",
        "Reward-based obedience, rally, and impulse-control practice",
        "Tracking, scent games, and problem-solving enrichment",
        "Cold-weather treks and winter outdoor excursions",
      ],
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush once or twice a week with a sturdy pin brush and undercoat rake to lift loose hair and prevent mats in the mane and breeches; brush daily during spring and autumn coat blows.",

      bathing:
        "Bathe only when genuinely soiled using a mild canine shampoo, as the coarse outer hair naturally sheds dried mud and frequent washing strips protective coat oils.",

      notes: [
        "Do not shave the double coat, which insulates against both winter cold and summer sun.",
        "Check behind the ears, in the thick neck ruff, and along the feathered legs for burrs, mats, and ticks after country walks.",
        "Use a wide-toothed comb and undercoat rake during seasonal shedding to clear dead undercoat down to the skin.",
        "Inspect the V-shaped pendant ears weekly for wax, moisture, or redness.",
        "Trim nails every few weeks if natural wear does not keep them short.",
        "Brush teeth several times a week with canine toothpaste.",
      ],
    },

    training: {
      difficulty:
        "Moderate to challenging. Bred to think independently while guarding flocks without human direction, the Kuvasz learns quickly when treated with calm fairness but resists harsh corrections or repetitive drills.",

      tips: [
        "Establish calm, consistent household rules early using reward-based methods.",
        "Keep training sessions short, meaningful, and respectful—harsh handling can provoke defensiveness.",
        "Build reliable lead manners and recall in puppyhood before the dog reaches adult size and strength.",
        "Teach clear rituals for welcoming invited visitors while under handler supervision.",
        "Enclose outdoor areas with sturdy five- to six-foot perimeter fencing rather than relying on invisible electronic boundaries.",
      ],

      socialization:
        "Expose puppies steadily and positively from a young age to varied people, calm dogs, grooming handling, and everyday sights and sounds outside the property. Early, ongoing socialisation helps a maturing guardian distinguish normal social situations from genuine threats.",
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cold and snowy climates, where its weatherproof double coat excels",
        "Temperate climates with outdoor space and indoor family access",
        "Warm weather only when given ample shade, cool indoor shelter, fresh water, and early-morning or evening walks",
      ],

      aloneTimeTolerance:
        "Moderate when given a secure territory or flock to watch over, though it bonds closely with its people and needs daily companionship and guidance.",
    },
  },

  nutrition: {
    dietType:
      "Complete, balanced large- or giant-breed canine diet matched to age, body condition, and workload.",

    feedingFrequency: {
      puppy:
        "Feed three measured meals daily in early puppyhood, transitioning to two daily meals on a controlled-growth large-breed puppy formula so bones and joints mature steadily.",
      adult:
        "Feed two measured meals daily rather than one large meal to support digestion and reduce stomach distension.",
      senior:
        "Feed two portion-controlled meals daily adjusted for slower metabolism and joint comfort.",
    },

    guidelines:
      "Measure every meal to keep the dog lean and hard-muscled, as excess weight strains developing and adult joints. Split daily rations into at least two meals, rest the dog for an hour before and after eating to help reduce the risk of gastric dilatation-volvulus (bloat), and provide fresh water at all times.",

    considerations: [
      "Use a large-breed puppy diet with appropriate calcium, phosphorus, and calorie levels to prevent overly rapid growth.",
      "Keep adult weight lean so the ribs are easily felt beneath the coat.",
      "Include training treats within the daily calorie allowance.",
      "Avoid strenuous exercise immediately before and after meals.",
      "Adjust rations between cold-weather outdoor work and quieter summer months.",
      "Change foods gradually over five to seven days.",
    ],

    note:
      "General canine feeding guidance; consult a veterinarian to tailor portions to your dog's age, workload, and health.",
  },

  health: {
    overview:
      "The Kuvasz is a hardy working breed with a typical life expectancy of 10 to 12 years, though like other large, deep-chested dogs it faces orthopaedic, developmental, endocrine, and gastrointestinal risks. Documented concerns include hip and elbow dysplasia, developmental bone and cartilage conditions in growing youngsters (osteochondritis dissecans and panosteitis), gastric dilatation-volvulus (bloat), autoimmune thyroiditis, and inherited eye disorders such as progressive retinal atrophy. Pre-breeding health screenings help breeders reduce hereditary risk, while careful puppy growth management and bloat precautions support lifelong health.",

    commonConditions: [
      "Canine hip dysplasia and elbow dysplasia — developmental joint laxity or malformation that can lead to osteoarthritis.",
      "Gastric dilatation-volvulus (GDV / bloat) — acute, life-threatening stomach distension and torsion in deep-chested dogs.",
      "Osteochondritis dissecans (OCD) and panosteitis — developmental cartilage and long-bone conditions that can cause lameness during rapid adolescent growth.",
      "Autoimmune thyroiditis (hypothyroidism) — immune-mediated thyroid deficiency affecting metabolism, coat quality, and energy.",
      "Inherited ocular conditions, including progressive retinal atrophy (prcd-PRA), cataracts, and eyelid conformation defects (entropion or ectropion).",
      "Degenerative myelopathy — a late-onset progressive spinal cord disorder for which DNA screening is available.",
    ],

    preventiveCare: [
      "Choose puppies from parents with documented hip, elbow, thyroid, and ophthalmic clearances.",
      "Feed a controlled-energy large-breed puppy diet without added calcium supplements to support slow, even skeletal growth.",
      "Feed two smaller meals daily, avoid exercise right before or after eating, and know the emergency signs of bloat.",
      "Maintain a lean, athletic body weight throughout adulthood.",
      "Part the dense double coat weekly to check the skin and dry the undercoat thoroughly after swimming or rain.",
      "Keep routine veterinary exams, dental care, and parasite prevention current.",
    ],

    recommendedScreenings: [
      "Radiographic hip evaluation for breeding stock.",
      "Radiographic elbow evaluation for breeding stock.",
      "Autoimmune thyroiditis laboratory panel from an approved laboratory.",
      "Specialist veterinary ophthalmic examination.",
      "Optional DNA testing for progressive rod-cone degeneration (prcd-PRA) and degenerative myelopathy (DM), plus cardiac and patellar evaluations.",
    ],

    dentalCare:
      "Brush teeth several times a week with canine toothpaste and have the teeth and gums checked at routine veterinary visits.",

    earCare:
      "Inspect the V-shaped pendant ears weekly for wax build-up, trapped moisture, or redness, and clean gently with a veterinarian-approved ear cleanser.",

    skinCare:
      "Brush and comb through the wavy double coat regularly so air reaches the darkly pigmented skin, and dry the dense undercoat completely after wet weather to prevent hot spots.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Experienced handlers who understand independent livestock guardian behaviour",
      "Farms, ranches, and rural properties needing a dependable flock or estate guardian",
      "Homes with large, securely fenced yards and space to patrol",
      "Active households that enjoy brisk daily walks and cold-weather outdoor life",
      "Families committed to early socialisation, calm leadership, and visitor management",
    ],

    notIdealFor: [
      "First-time dog owners unfamiliar with large, territorial guardian breeds",
      "Apartments, townhomes, or densely packed urban neighbourhoods",
      "Properties without tall, secure physical fencing",
      "Owners expecting an outgoing dog that welcomes every stranger unreservedly",
      "Households unwilling to manage seasonal shedding of a thick white double coat",
    ],
  },

  funFacts: [
    "In fifteenth-century Hungary, King Matthias Corvinus kept Kuvasz dogs at his royal court for personal protection and big-game hunting, famously trusting them more than his courtiers.",
    "Hungarian shepherds selectively bred the Kuvasz in white so they could distinguish their flock guardians from dark-coated wolves during night attacks.",
    "The plural of Kuvasz in Hungarian is 'Kuvaszok'.",
    "Its lean, wedge-shaped head and wavy, crest-forming coat clearly distinguish it from other large white flock guardians.",
    "World War II nearly destroyed the breed in Hungary, leaving fewer than thirty registered dogs alive by 1945 before dedicated breeders rebuilt the population.",
    "Even when caked in mud from field work, its coarse outer coat naturally sheds dried dirt once dry.",
    "Hungary officially recognises the Kuvasz among its protected national heritage dog breeds.",
  ],

  faq: [
    {
      question: "What is a Kuvasz?",
      answer:
        "The Kuvasz is an ancient, large-sized Hungarian livestock and estate guardian dog known for its dense wavy white double coat, dark skin pigment, athletic frame, and fearless loyalty to its household.",
    },
    {
      question: "Where did the Kuvasz originate and what was it bred to do?",
      answer:
        "It originated in Hungary, where its ancestors arrived with the Magyar tribes in the Carpathian Basin to guard flocks and property against predators and thieves, and later served as a royal guard and hunting dog.",
    },
    {
      question: "How tall and heavy is an adult Kuvasz?",
      answer:
        "Adult males stand 71 to 76 cm at the withers and weigh 48 to 62 kg, while adult females stand 66 to 70 cm and weigh 37 to 50 kg.",
    },
    {
      question: "How long does a Kuvasz live?",
      answer:
        "Typical life expectancy is 10 to 12 years with appropriate nutrition, weight control, and preventive veterinary care.",
    },
    {
      question: "How can you tell a Kuvasz apart from other large white guardian breeds?",
      answer:
        "The Kuvasz is distinguished by its lean, wedge-shaped head with a slight stop, its wavy double coat that forms crests and ridges (rather than cords or a flat coat), and its jet-black nose, lip, and eyelid pigment.",
    },
    {
      question: "What coat colours and lengths are typical of the Kuvasz?",
      answer:
        "Permitted colours are white and ivory over dark slate-grey to black skin. Hair is short (1–2 cm) on the head, ears, paws, and lower legs, and medium-length (4–12 cm) and wavy over the torso with a thick neck mane and 10–15 cm tail feathering.",
    },
    {
      question: "Does the Kuvasz shed heavily?",
      answer:
        "It sheds moderately through most of the year and blows its dense woolly undercoat heavily in spring and autumn, requiring daily brushing during seasonal coat changes.",
    },
    {
      question: "Is the Kuvasz a good family companion?",
      answer:
        "Toward its own household it is affectionate, patient, and deeply protective, but because it is naturally reserved with strangers and territorial by instinct, it requires an experienced handler, early socialisation, and careful supervision around guests.",
    },
    {
      question: "Can a Kuvasz live in an apartment?",
      answer:
        "No. Its large size, watchful barking, and need for a securely fenced outdoor territory make apartment living unsuitable.",
    },
    {
      question: "How should a Kuvasz be trained?",
      answer:
        "Use calm, fair, reward-based training and early socialisation; as a self-reliant flock guardian, it responds poorly to harsh treatment or repetitive drills.",
    },
    {
      question: "Does a Kuvasz drool much?",
      answer:
        "No. Its black-edged lips fit tightly over the jaws without loose flews, resulting in much less drooling than many mastiff-type guardians.",
    },
    {
      question: "What health screenings are recommended for Kuvasz breeding dogs?",
      answer:
        "Recommended evaluations include hip and elbow radiographs, an autoimmune thyroiditis laboratory panel, a specialist ophthalmic exam, and optional DNA tests for progressive retinal atrophy (prcd-PRA) and degenerative myelopathy.",
    },
  ],

  references: [
    "fci-kuvasz-official-standard",
    "fci-kuvasz-nomenclature",
    "akc-kuvasz-breed-profile",
    "kuvasz-club-of-america-official-standard",
    "kuvasz-club-of-america-judges-education",
    "ofa-kuvasz-chic-requirements",
    "wikimedia-kuvasz-1-denesferi",
    "wikimedia-docfile-kuvasz-canarian",
    "wikimedia-kuvasz-3-denesferi",
    "the-dog-api",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Official breed standards and kennel-club profiles do not establish a separate scientific name for the breed.",
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "Standard header and breed name: KUVASZ",
        },
        {
          id: "fci-kuvasz-nomenclature",
          role: "verified",
          locator: "Official nomenclature: KUVASZ (54)",
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Hungarian Kuvasz and plural Kuvaszok",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names (Hungarian Kuvasz)",
        },
      ],
      verifiedOn: "2026-11-17",
      note: "Verified across FCI Standard No. 54, FCI Nomenclature, AKC breed profile, and The Dog API.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 1 Sheepdogs and Cattledogs (except Swiss Cattledogs), Section 1 Sheepdogs, without working trial",
        },
        {
          id: "fci-kuvasz-nomenclature",
          role: "verified",
          locator: "Group 1, Section 1 Sheepdogs, without working trial",
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "cited",
          locator: "Working Group",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group (Working)",
        },
      ],
      verifiedOn: "2026-11-17",
      note:
        "Follows the Group 1, Section 1 classification without naming registries in user-facing text; AKC and The Dog API classify the breed in the Working Group.",
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "Origin: Hungary; Brief historical summary (Carpathian Basin)",
        },
        {
          id: "fci-kuvasz-nomenclature",
          role: "verified",
          locator: "Country of origin of the breed: Hungary",
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "History: Origin in Hungary and the Carpathian Basin",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin (Hungary)",
        },
      ],
      verifiedOn: "2026-11-17",
      note: null,
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "Utilization, Brief historical summary, General appearance, Important proportions, Behaviour/temperament",
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "About the Breed, History (King Matthias Corvinus, World War II near-extinction), and Roles",
        },
        {
          id: "kuvasz-club-of-america-official-standard",
          role: "verified",
          locator: "General Appearance and working guardian background",
        },
        {
          id: "kuvasz-club-of-america-judges-education",
          role: "verified",
          locator: "History, King Matthias Corvinus court history, and functional utility",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history",
        },
      ],
      verifiedOn: "2026-11-17",
      note:
        "All overview text is rewritten in original wording from FCI Standard No. 54, AKC, and Kuvasz Club of America materials.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "Important proportions, Head, Body, Tail, Limbs, Coat (1–2 cm, 4–12 cm, 5–8 cm, 10–15 cm), Colour (white, ivory permitted), Size and weight",
        },
        {
          id: "kuvasz-club-of-america-official-standard",
          role: "verified",
          locator: "General Appearance, Size/Proportion/Substance, Head, Coat, Color",
        },
        {
          id: "kuvasz-club-of-america-judges-education",
          role: "verified",
          locator: "Proportions, Head, Eyes, Bite, Coat, Color, and Pigmentation",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "GET /breeds/{id}/colours (lists 17 generic species-wide colours)",
        },
      ],
      verifiedOn: "2026-11-17",
      note:
        "Conformation, wedge-shaped head, coat lengths, dark skin pigmentation, and permitted colours (white and ivory) follow FCI Standard No. 54 rather than The Dog API's generic 17-colour list.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "Size and weight: Height at withers: Dogs 71 – 76 cm; Bitches 66 – 70 cm",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.height.metric (Males 71–76 cm, Females 66–71 cm)",
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "cited",
          locator: "Height: 28–30 inches (male), 26–28 inches (female)",
        },
      ],
      verifiedOn: "2026-11-17",
      note:
        "Preserves the official FCI Standard No. 54 centimetre ranges (71–76 cm male, 66–70 cm female) without conversion; The Dog API lists 66–71 cm for females and AKC publishes 28–30 in / 26–28 in.",
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "Size and weight: Weight: Dogs 48 – 62 kg; Bitches 37 – 50 kg",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight.metric (Males 45–52 kg, Females 32–41 kg)",
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "conflicting",
          locator: "Weight: 100–115 pounds (male), 70–90 pounds (female)",
        },
      ],
      verifiedOn: "2026-11-17",
      note:
        "Preserves the official FCI Standard No. 54 kilogram ranges (48–62 kg male, 37–50 kg female) without conversion; The Dog API reports 45–52 kg for males and 32–41 kg for females (corresponding to AKC's 100–115 lb and 70–90 lb).",
    },

    "physical.weight.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "Weight: Dogs 48 – 62 kg",
        },
      ],
      verifiedOn: "2026-11-17",
      note: "Upper male weight bound of 62 kg from FCI Standard No. 54.",
    },

    "physical.weight.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "Weight: Bitches 37 – 50 kg",
        },
      ],
      verifiedOn: "2026-11-17",
      note: "Upper female weight bound of 50 kg from FCI Standard No. 54.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 10–12 years",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span (10–12 years)",
        },
      ],
      verifiedOn: "2026-11-17",
      note: "Verified across both the AKC breed profile and The Dog API.",
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding (Moderate / 3 out of 5), with heavy seasonal undercoat shedding",
        },
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "Coat: coarser topcoat over finer downy undercoat",
        },
      ],
      verifiedOn: "2026-11-17",
      note: null,
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "Lips: black, tightly fitting; edges of lips jagged",
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (2/5)",
        },
      ],
      verifiedOn: "2026-11-17",
      note: "Tight-fitting lips prevent heavy drooling.",
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "Behaviour / Temperament: brave, fearless, protective of people and territory, faithful, dependable, grateful for care",
        },
        {
          id: "kuvasz-club-of-america-official-standard",
          role: "verified",
          locator: "Temperament: spirited, keen intelligence, courageous, primarily a one-family dog, bold and fearless guard",
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Temperament: fearless, sweet, loyal, independent",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-17",
      note: null,
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics ratings",
        },
        {
          id: "kuvasz-club-of-america-official-standard",
          role: "cited",
          locator: "Temperament and guardian behaviour",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 scores informed by documented breed traits.",
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition",
        },
        {
          id: "kuvasz-club-of-america-judges-education",
          role: "cited",
          locator: "Coat care, dirt-shedding outer coat, exercise, and socialisation",
        },
      ],
      verifiedOn: null,
      note:
        "Combines livestock-guardian management with double-coat grooming and reward-based training advice.",
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "Behaviour / Temperament: needs plenty of exercise and an occupation",
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Energy Level: Regular Exercise (3/5)",
        },
      ],
      verifiedOn: "2026-11-17",
      note: null,
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "cited",
          locator: "Exercise: daily walks and secure yard patrolling",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial estimate of 45–60 minutes of purposeful daily activity alongside yard access.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Adaptability: apartment living not recommended",
        },
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "Large territory and property guardian needing room to move and work",
        },
      ],
      verifiedOn: "2026-11-17",
      note: null,
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Exercise: a securely fenced yard is essential for this large, agile guardian",
        },
        {
          id: "kuvasz-club-of-america-judges-education",
          role: "verified",
          locator: "Living environment: secure fencing and outdoor space",
        },
      ],
      verifiedOn: "2026-11-17",
      note: null,
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "Behaviour / Temperament and Coat: able to withstand very harsh weather conditions",
        },
        {
          id: "kuvasz-club-of-america-official-standard",
          role: "verified",
          locator: "Coat: dense double coat protecting against harsh temperatures",
        },
      ],
      verifiedOn: "2026-11-17",
      note: null,
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "cited",
          locator: "Independent guardian character and devotion to handler and territory",
        },
      ],
      verifiedOn: null,
      note: null,
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "cited",
          locator: "Nutrition: controlled puppy growth and bloat precautions",
        },
        {
          id: "kuvasz-club-of-america-judges-education",
          role: "cited",
          locator: "Nutrition, steady growth, and bloat precautions",
        },
      ],
      verifiedOn: null,
      note: "General nutrition and bloat-mitigation guidance for large, deep-chested working breeds.",
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "cited",
          locator: "Life-stage feeding and portion control",
        },
      ],
      verifiedOn: null,
      note: "General large-breed meal scheduling guidance.",
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Health: Bloat (GDV), Hip, Elbow, Thyroid, and Eye evaluations",
        },
        {
          id: "ofa-kuvasz-chic-requirements",
          role: "verified",
          locator: "Required screenings: Hip Dysplasia, Elbow Dysplasia, Autoimmune Thyroiditis, Eye Examination; Optional DNA tests",
        },
        {
          id: "kuvasz-club-of-america-judges-education",
          role: "verified",
          locator: "Health, longevity, and orthopedic considerations",
        },
      ],
      verifiedOn: "2026-11-17",
      note:
        "Distinguishes orthopaedic/developmental risks, bloat, endocrine/ocular disorders, and pre-breeding screening recommendations.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-kuvasz-chic-requirements",
          role: "verified",
          locator: "Hip Dysplasia, Elbow Dysplasia, Autoimmune Thyroiditis, Eye Disorders, prcd-PRA, and Degenerative Myelopathy",
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Health section: Gastric dilatation-volvulus (bloat), osteochondritis dissecans (OCD), and orthopaedic concerns",
        },
        {
          id: "kuvasz-club-of-america-judges-education",
          role: "verified",
          locator: "Health considerations: OCD, panosteitis, bloat, and joint soundness",
        },
      ],
      verifiedOn: "2026-11-17",
      note:
        "Summarises documented breed health risks and screening targets without using prohibited registry acronyms in user-facing text.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "cited",
          locator: "Controlled large-breed puppy growth and bloat prevention",
        },
        {
          id: "kuvasz-club-of-america-judges-education",
          role: "cited",
          locator: "Puppy growth management and health precautions",
        },
      ],
      verifiedOn: null,
      note: "Preventive care guidance for a large, deep-chested double-coated working dog.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-kuvasz-chic-requirements",
          role: "verified",
          locator: "Required screenings: Hip Dysplasia, Elbow Dysplasia, Autoimmune Thyroiditis, Eye Examination; Optional: prcd-PRA DNA, DM DNA, Cardiac, Patella",
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Recommended Health Tests",
        },
      ],
      verifiedOn: "2026-11-17",
      note:
        "Reflects required and optional pre-breeding health tests without naming registries in user-facing text.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "cited",
          locator: "Jaws/Teeth: complete, regular scissor bite",
        },
      ],
      verifiedOn: null,
      note: "General canine dental care guidance.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "cited",
          locator: "Ears: V-shaped with rounded tip, hanging close to the head",
        },
      ],
      verifiedOn: null,
      note: "Routine ear care guidance for pendant ears.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "cited",
          locator: "Skin: rich slate-grey or black pigment under dense double coat",
        },
        {
          id: "kuvasz-club-of-america-official-standard",
          role: "cited",
          locator: "Skin and double-coat maintenance",
        },
      ],
      verifiedOn: null,
      note: "General skin and double-coat care guidance.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-kuvasz-breed-profile",
          role: "cited",
          locator: "About the Breed, Temperament, and Adaptability ratings",
        },
        {
          id: "kuvasz-club-of-america-official-standard",
          role: "cited",
          locator: "Temperament and guardian instincts",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial suitability evaluations based on guardian drive, size, and fencing requirements.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "Brief historical summary (Magyar arrival, King Matthias Corvinus) and Head (wedge shape distinguishing the breed)",
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "History: King Matthias Corvinus, white coat visibility at night, World War II near-extinction, plural Kuvaszok",
        },
        {
          id: "kuvasz-club-of-america-judges-education",
          role: "verified",
          locator: "Hungarian national heritage designation and dirt-shedding coat",
        },
      ],
      verifiedOn: "2026-11-17",
      note: "Historical and breed facts rewritten in original wording.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-kuvasz-official-standard",
          role: "verified",
          locator: "Origin, purpose, height (71–76 cm male, 66–70 cm female), weight (48–62 kg male, 37–50 kg female), wedge-shaped head, and coat lengths (1–2 cm, 4–12 cm, 10–15 cm)",
        },
        {
          id: "akc-kuvasz-breed-profile",
          role: "verified",
          locator: "Lifespan (10–12 years), shedding, temperament, and grooming",
        },
        {
          id: "ofa-kuvasz-chic-requirements",
          role: "verified",
          locator: "Pre-breeding health screening protocols",
        },
      ],
      verifiedOn: "2026-11-17",
      note:
        "FAQ answers synthesise verified standards, kennel-club profiles, and health testing protocols without naming registries in user-facing text.",
    },
  },

  updatedOn: "2026-11-17",
};
