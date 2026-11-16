import type { Breed } from "../schema/breed.types";

export const pug: Breed = {
  slug: "pug",
  name: "Pug",
  scientificName: null,

  alternateNames: [
    "Carlin",
    "Mops",
    "Doguillo",
    "Chinese Pug",
    "Dutch Bulldog",
    "Dutch Mastiff",
    "Miniature Mastiff",
  ],

  group:
    "Companion and Toy Dogs; Section 11 — Small Molossian type dogs (without working trial)",

  origin: {
    country: "China",
    region:
      "Imperial China, with later refinement in the Netherlands and Great Britain",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pug_dog_image.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Pug_dog_image.jpg",
      title: "Pug dog image.jpg",
      description: "A fawn Pug facing forward.",
      creator: "Celebindiaworld",
      uploader: "Celebindiaworld",
      capturedOn: "2020-07-18",
      uploadedOn: "2020-07-18",
      width: 6000,
      height: 4000,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Celebindiaworld, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Pug_dog_image.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. No changes made.",
      restrictions: null,
      metadataCheckedOn: "2026-11-16",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/My_pug.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:My_pug.jpg",
      title: "My pug.jpg",
      description: "A fawn Pug resting indoors.",
      creator: "Gmart1111",
      uploader: "Gmart1111",
      capturedOn: "2020-01-13",
      uploadedOn: "2020-01-13",
      width: 828,
      height: 655,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Gmart1111, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:My_pug.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. No changes made.",
      restrictions: null,
      metadataCheckedOn: "2026-11-16",
    },
  ],

  overview: {
    summary:
      "The Pug is a square-proportioned, muscular toy companion of ancient Chinese origin, unmistakable for its broad wrinkled brow, short blunt muzzle, tightly curled tail, and affectionate, playful temperament.",

    description:
      "Built on a compact, square, and cobby frame, the Pug packs firm muscle and solid bone into a small body—an ideal traditionally summarised by the Latin motto 'multum in parvo' ('much in little'). Its large, rounded head carries well-defined forehead wrinkles, dark expressive eyes, and a short, square muzzle, while the high-set tail twists tightly over the hip. The fine, smooth, glossy coat comes in shades of fawn (including silver fawn and apricot fawn) with a contrasting black mask and dorsal trace, or in solid black. Bred over centuries purely for human companionship, the breed combines an even-tempered, dignified steadiness with playful humour and thriving sociability indoors.",

    history:
      "Originating in China more than two thousand years ago during the Han dynasty, the Pug's ancestors were treasured lap dogs of the imperial court, housed in luxury and attended by palace guards. In the sixteenth century, maritime traders with the Dutch East India Company introduced these small dogs to the Netherlands, where the breed became closely linked to the House of Orange after a dog reportedly alerted Prince William the Silent to approaching assassins. From the Low Countries, the breed spread to royal households across Europe, gaining particular prominence in nineteenth-century Britain under the patronage of Queen Victoria, whose breeding kennels helped establish the modern type.",

    originalPurpose:
      "Imperial lap dog and court companion in ancient China, later kept as a royal household companion in European courts.",

    currentRoles: [
      "Household companion and family dog",
      "Therapy and visiting companion dog",
      "Trick training and low-impact indoor dog sports",
      "Conformation exhibition",
    ],
  },

  physical: {
    sizeCategory: "Small, square-built, cobby toy dog",

    height: {
      unit: "in",
      male: {
        min: 10,
        max: 13,
      },
      female: {
        min: 10,
        max: 13,
      },
    },

    weight: {
      unit: "lb",
      male: {
        min: 14,
        max: 18,
      },
      female: {
        min: 14,
        max: 18,
      },
    },

    lifespanYears: {
      min: 13,
      max: 15,
    },

    coatType:
      "Fine, smooth, soft, short, and glossy coat that is neither harsh nor woolly; fawn varieties commonly carry a dense undercoat.",

    coatLength: "Short",

    coatColors: [
      "Fawn with a black mask, black ears, and a black dorsal trace",
      "Silver or silver fawn with a black mask, black ears, and a black trace",
      "Apricot or apricot fawn with a black mask, black ears, and a black trace",
      "Solid glossy black",
    ],

    sheddingLevel:
      "High year-round shedding, especially in double-coated fawn dogs during spring and autumn coat changes",

    droolingLevel:
      "Low to moderate, mostly limited to brief dampness after drinking, eating, or warm-weather panting",

    distinctiveFeatures: [
      "Square, cobby, compact build with firm musculature and sturdy bone",
      "Large, round head (never dome-shaped) with clearly defined forehead wrinkles",
      "Short, blunt, square muzzle that does not turn upward",
      "Slightly undershot bite with a wide lower jaw and incisors aligned nearly in a straight row",
      "Dark, lustrous, globular eyes with a soft, attentive expression",
      "Small, thin, velvet-textured ears in either button (folding forward, preferred) or rose (folding back) carriage",
      "Intense black mask, black ears, cheek moles, and forehead diamond or thumb mark on fawn coats",
      "Black trace line running along the spine from the occiput to the tail base on fawn coats",
      "High-set tail curled as tightly as possible over the hip, with a double curl highly prized",
      "Free, self-assured gait featuring a characteristic slight roll of the hindquarters",
    ],
  },

  temperament: {
    traits: [
      "Affectionate and closely bonded to its household",
      "Even-tempered, stable, and patient",
      "Playful, mischievous, and naturally comical",
      "Charming and dignified",
      "Outgoing and welcoming toward guests",
      "Gentle and sturdy around children",
      "Sociable and peaceful with other dogs and household pets",
      "Alert and curious without nervous hyperactivity",
      "Occasionally willful or food-motivated during training",
      "Expressive through soft snorts, grunts, and yawns rather than excessive barking",
    ],

    scores: {
      affection: 5,
      withChildren: 5,
      withDogs: 5,
      withStrangers: 5,
      protectiveness: 1,
      independence: 2,
      trainability: 3,
      barking: 2,
      energy: 2,
    },
  },

  care: {
    exercise: {
      level:
        "Low to moderate. Daily gentle walks and brief indoor play keep the dog fit, while exertion must be carefully limited in warm or humid weather to protect breathing.",

      minutesPerDay: {
        min: 30,
        max: 45,
      },

      activities: [
        "Easy neighbourhood walks during cool morning or evening hours",
        "Short indoor fetch or tug games on non-slip flooring",
        "Supervised sniffing and pottering in a securely fenced garden",
        "Food-Dispensing puzzle toys and indoor scent searches",
        "Brief, upbeat trick and manners sessions in climate-controlled rooms",
      ],
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush two to three times a week with a rubber grooming mitt or soft bristle brush to remove loose hair, increasing to daily brushing during seasonal coat drops.",

      bathing:
        "Bathe every four to six weeks or when soiled using a gentle canine shampoo, shielding the prominent eyes and ear canals from water and drying every skin fold thoroughly afterward.",

      notes: [
        "Wipe inside the facial wrinkles and nasal roll several times a week with a damp cloth or pet wipe, then dry completely to prevent trapped moisture.",
        "Check the prominent eyes daily for dust, stray hairs, redness, or squinting.",
        "Inspect the velvety ear flaps weekly for wax build-up, redness, or odour.",
        "Trim nails every two to three weeks so the feet remain compact and comfortable.",
        "Brush teeth daily with canine toothpaste to manage plaque in a shortened jaw.",
        "Do not shave the coat, as the short hair protects the skin and helps regulate surface temperature.",
      ],
    },

    training: {
      difficulty:
        "Moderate. Food-motivated and eager to please when sessions are fun, the Pug can become stubborn if bored or corrected harshly.",

      tips: [
        "Use upbeat praise and tiny, low-calorie treats that fit within the daily food ration.",
        "Keep training sessions brief—around five to ten minutes—and varied to hold interest.",
        "Always attach the lead to a well-fitted Y-front chest harness rather than a neck collar to avoid pressure on the windpipe and eyes.",
        "Establish a consistent outdoor schedule and reward-based routine for house-training.",
        "Avoid harsh corrections, which cause this sensitive companion to shut down.",
        "Practise gentle daily handling of facial folds, paws, ears, and mouth from puppyhood.",
      ],

      socialization:
        "Introduce puppies gradually and positively to varied people, calm dogs, household sounds, and gentle grooming routines. Because the breed is naturally sociable, early socialisation focuses on polite greetings, confidence in new settings, and relaxed cooperation during wrinkle cleaning, nail trims, and veterinary exams.",
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates with comfortable indoor living",
        "Requires air-conditioned indoor shelter during warm or humid weather",
        "Needs indoor heating and a warm coat for brief winter walks in cold climates",
      ],

      aloneTimeTolerance:
        "Low. Bred specifically for close human company, Pugs dislike long periods of isolation and do best in homes where someone is present for most of the day.",
    },
  },

  nutrition: {
    dietType:
      "Complete, balanced small-breed canine diet matched to life stage, body condition, and activity level.",

    feedingFrequency: {
      puppy:
        "Feed three to four small, measured meals daily until around six months of age, then reduce to two or three meals.",
      adult:
        "Feed two measured meals daily to support steady digestion and help manage appetite.",
      senior:
        "Feed two portion-controlled meals daily adjusted for lower calorie needs, joint health, and dental comfort.",
    },

    guidelines:
      "Weigh or measure every meal accurately, because Pugs have enthusiastic appetites and gain weight easily. Even modest excess weight worsens upper-airway resistance and stresses the spine and joints. Use a shallow, wide dish suited to a flat face, count all training treats toward daily calories, and keep fresh water available at all times.",

    considerations: [
      "Keep body condition lean to reduce respiratory effort and joint load.",
      "Deduct training treats from the daily meal allowance.",
      "Choose tiny, low-calorie rewards such as small vegetable pieces during training.",
      "Use kibble sized and shaped for a short, broad jaw.",
      "Avoid fatty table scraps that can trigger digestive upset or pancreatitis.",
      "Offer water in a wide, shallow bowl that does not rub the nasal fold.",
    ],

    note:
      "General canine feeding guidance; individual calorie needs depend on age, neuter status, activity, and veterinary advice.",
  },

  health: {
    overview:
      "Although many Pugs live 13 to 15 years, the breed's extreme brachycephalic skull, prominent eyes, deep skin folds, and screw-tail conformation create well-documented health vulnerabilities. Major conformational concerns include brachycephalic obstructive airway syndrome (BOAS), corneal ulceration and pigmentary keratitis, and skin fold dermatitis (intertrigo). Recognised neurological and orthopaedic risks include necrotizing meningoencephalitis (NME, also called Pug dog encephalitis or PDE)—a fatal inflammatory brain disease with an established genetic risk test—along with mid-back spinal cord disorders (constrictive myelopathy and hemivertebrae), patellar luxation, and hip dysplasia. Responsible breeders use DNA and clinical screening panels to reduce risk, though screening does not guarantee an individual dog will remain free of disease.",

    commonConditions: [
      "Brachycephalic obstructive airway syndrome (BOAS) — narrowed nostrils (stenotic nares), an elongated soft palate, and compressed nasal passages causing noisy breathing, exercise intolerance, and high risk of overheating.",
      "Necrotizing meningoencephalitis (NME / Pug dog encephalitis / PDE) — a severe, progressive inflammatory disorder of the central nervous system strongly associated with specific MHC class II genetic markers in Pugs.",
      "Corneal ulceration, pigmentary keratitis, and dry eye (keratoconjunctivitis sicca) — ocular surface injury and chronic corneal pigmentation linked to shallow eye sockets and incomplete eyelid closure.",
      "Skin fold dermatitis (intertrigo) — bacterial or yeast inflammation inside moist facial wrinkles, nasal rolls, or tail folds.",
      "Hemivertebrae and Pug constrictive myelopathy — congenital vertebral malformations or mid-back spinal cord compression that can lead to hind-limb ataxia or weakness.",
      "Patellar luxation — medial or lateral slippage of the kneecap causing intermittent skipping or hind-limb lameness.",
      "Canine hip dysplasia — developmental hip joint laxity that can progress to osteoarthritis.",
      "Periodontal disease — early plaque accumulation and gingivitis due to crowded teeth in a shortened jaw.",
      "Obesity — excess weight that directly compounds airway obstruction, heat intolerance, and orthopaedic strain.",
    ],

    preventiveCare: [
      "Verify that breeding parents have documented test results for NME (PDE) DNA susceptibility, respiratory function grading, eye exams, patellas, and hips.",
      "Inspect, wipe, and dry the nasal roll and facial wrinkles several times each week.",
      "Use a chest harness rather than a neck collar on all walks.",
      "Keep the dog in cool, air-conditioned spaces during warm or humid weather and stop activity immediately if breathing becomes laboured.",
      "Seek prompt veterinary care for any squinting, eye redness, corneal cloudiness, or ocular discharge.",
      "Maintain a lean body weight through strict meal measurement.",
      "Brush teeth daily and arrange routine veterinary dental assessments.",
      "Keep routine vaccinations and parasite prevention current.",
    ],

    recommendedScreenings: [
      "Necrotizing meningoencephalitis (NME / PDE) DNA susceptibility test.",
      "Clinical respiratory function grading assessment for brachycephalic obstructive airway syndrome (BOAS).",
      "Specialist veterinary ophthalmic examination.",
      "Veterinary patellar luxation evaluation.",
      "Radiographic hip dysplasia evaluation.",
      "Optional spinal radiographic evaluation, tracheal hypoplasia radiograph, cardiac exam, elbow evaluation, and pyruvate kinase deficiency (PKD) DNA test for breeding stock.",
    ],

    dentalCare:
      "Brush teeth daily with canine toothpaste and a soft brush. Because 42 adult teeth are packed into a shortened jaw, crowding and rotation trap plaque quickly, making home brushing and periodic professional veterinary dental cleanings essential.",

    earCare:
      "Check the folded button or rose ears weekly for wax build-up, redness, or odour. Wipe the outer ear gently with a veterinarian-approved cleanser and dry well without probing the ear canal.",

    skinCare:
      "Part and clean the facial wrinkles, over-nose fold, and tail base two to three times weekly with a gentle wipe, then pat completely dry. Monitor the skin during brushing for redness, yeast odour, or hair loss.",
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: false,
    apartmentLiving: true,

    idealFor: [
      "First-time dog owners looking for an affectionate, people-focused small companion",
      "Apartment and townhome dwellers seeking a quiet, compact indoor dog",
      "Families with gentle children who supervise play around the dog's prominent eyes",
      "Seniors, retirees, or remote workers who are home for most of the day",
      "Owners who prefer relaxed daily strolls over strenuous outdoor sports",
      "Households committed to strict weight control, wrinkle care, and summer air conditioning",
    ],

    notIdealFor: [
      "Runners, hikers, or cyclists seeking a high-endurance athletic partner",
      "Homes in hot or humid regions without reliable indoor air conditioning",
      "People away from home for long workdays",
      "Households bothered by snoring, snorting, or heavy year-round shedding",
      "Owners unwilling to perform regular wrinkle cleaning and proactive veterinary care",
    ],
  },

  funFacts: [
    "Bred in China since at least the Han dynasty (206 BCE–220 CE), early Pugs were pampered imperial companions guarded by palace soldiers.",
    "A group of Pugs is popularly referred to as a 'grumble'.",
    "The traditional Latin phrase 'multum in parvo' ('much in little') appears in standards to describe the breed's substantial muscle and bone packed into a compact frame.",
    "In 1572, a Pug named Pompey is credited with saving William the Silent, Prince of Orange, by alerting him to assassin troops at his camp in Hermigny.",
    "Joséphine Bonaparte's Pug, Fortune, famously carried hidden notes under his collar to her family while she was held at Les Carmes prison in Paris.",
    "A tightly curled tail set high over the hip is a hallmark of the breed, with a double curl prized as the ideal.",
    "Queen Victoria kept dozens of Pugs during the nineteenth century and helped found modern kennel-club interest in the breed.",
  ],

  faq: [
    {
      question: "Where did the Pug originate?",
      answer:
        "The breed originated in ancient China more than two thousand years ago as a companion to imperial households, and was brought to Europe by Dutch traders in the sixteenth century.",
    },
    {
      question: "What was the Pug originally bred for?",
      answer:
        "From its earliest history, the Pug was bred specifically as a devoted lap dog and household companion rather than as a hunting or working breed.",
    },
    {
      question: "How tall is an adult Pug and how much does it weigh?",
      answer:
        "Adults typically stand 10 to 13 inches at the withers and have a desirable weight of 14 to 18 pounds, with a compact, square, muscular build.",
    },
    {
      question: "What is the typical lifespan of a Pug?",
      answer:
        "Typical life expectancy is 13 to 15 years when kept at a lean weight and protected from heat stress.",
    },
    {
      question: "Do Pugs shed a lot despite their short coat?",
      answer:
        "Yes. Their short, fine coat—particularly in fawn dogs with a dense undercoat—sheds heavily year-round and even more during spring and autumn, requiring regular brushing.",
    },
    {
      question: "Why do Pugs snort, wheeze, and snore?",
      answer:
        "Their shortened facial skull compresses the nasal passages and soft palate into a very short space, producing frequent snorts and snoring; however, noisy or laboured breathing during light activity can indicate airway obstruction that should be assessed by a veterinarian.",
    },
    {
      question: "Are Pugs well suited to apartments?",
      answer:
        "Yes. Their small size, moderate exercise needs, and low tendency to bark make them comfortable apartment companions as long as they have regular human company and daily walks.",
    },
    {
      question: "Are Pugs good with children and other pets?",
      answer:
        "They are typically gentle, sturdy, and sociable with children, other dogs, and cats, though adults should supervise play to protect the Pug's prominent eyes from accidental scratches.",
    },
    {
      question: "Why should a Pug be walked on a harness instead of a collar?",
      answer:
        "A chest harness distributes lead pressure across the chest and shoulders rather than the throat, avoiding compression of the windpipe and reducing intraocular pressure behind the prominent eyes.",
    },
    {
      question: "How often should a Pug's facial wrinkles be cleaned?",
      answer:
        "Wipe inside the forehead wrinkles and nasal roll two to three times a week—or daily if damp—using a soft wipe, and dry the skin crevices thoroughly afterward.",
    },
    {
      question: "Can Pugs handle hot or humid weather?",
      answer:
        "No. Short-muzzled dogs cannot cool themselves efficiently through panting and can suffer heatstroke rapidly; keep them in air-conditioned rooms during warm weather and walk only in cool morning or evening hours.",
    },
    {
      question: "What health conditions are most important to know about in Pugs?",
      answer:
        "Key concerns include brachycephalic obstructive airway syndrome (BOAS), corneal ulcers and dry eye, skin fold dermatitis, necrotizing meningoencephalitis (Pug dog encephalitis), spinal malformations or constrictive myelopathy, patellar luxation, and hip dysplasia.",
    },
  ],

  references: [
    "fci-pug-official-standard",
    "fci-pug-nomenclature",
    "akc-pug-breed-standard",
    "akc-pug-breed-profile",
    "the-kennel-club-pug-breed-standard",
    "pug-dog-club-of-america-health",
    "ofas-chic-pug-requirements",
    "pug-boas-cambridge-study-2015",
    "pug-dog-encephalitis-necrotizing-meningoencephalitis-study-2009",
    "wikimedia-pug-dog-image-celebindiaworld",
    "wikimedia-my-pug-gmart1111",
    "the-dog-api",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Official breed standards and kennel-club profiles do not publish a separate scientific name for the breed.",
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-pug-official-standard",
          role: "verified",
          locator: "Standard heading and historical names (Carlin, Mops, Doguillo)",
        },
        {
          id: "fci-pug-nomenclature",
          role: "verified",
          locator: "Official multilingual names: Carlin (French), Mops (German), Doguillo (Spanish)",
        },
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "History: Dutch Mastiff, Chinese Pug, Dutch Bulldog, Miniature Mastiff",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names (Mops, Carlin, Chinese Pug, Dutch Mastiff)",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Verified across FCI Standard No. 253, FCI Nomenclature, AKC breed history, and The Dog API.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-pug-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 9 Companion and Toy Dogs, Section 11 Small Molossian type dogs, without working trial",
        },
        {
          id: "fci-pug-nomenclature",
          role: "verified",
          locator: "Group 9, Section 11 Small Molossian type Dogs, without working trial",
        },
        {
          id: "akc-pug-breed-standard",
          role: "verified",
          locator: "Toy Group",
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Toy breed group",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group (Toy)",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Follows the Group 9, Section 11 classification; AKC, The Kennel Club, and The Dog API place the breed in the Toy Group.",
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-pug-official-standard",
          role: "verified",
          locator: "Origin: China; Patronage: Great Britain",
        },
        {
          id: "fci-pug-nomenclature",
          role: "verified",
          locator: "Country of origin: China; Country of patronage: Great Britain",
        },
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "Origin in ancient China (Han dynasty) and later development in the Netherlands and Great Britain",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin (China)",
        },
      ],
      verifiedOn: "2026-11-16",
      note: null,
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-pug-official-standard",
          role: "verified",
          locator: "Brief historical summary, General appearance, Behaviour/temperament",
        },
        {
          id: "akc-pug-breed-standard",
          role: "verified",
          locator: "General appearance (square and cobby, multum in parvo), Temperament",
        },
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "About the breed, History, and Roles",
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Breed characteristics and historical background",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "All user-facing overview text is newly written in original wording without registry names.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-pug-breed-standard",
          role: "verified",
          locator: "General appearance, Head, Body, Tail, Forequarters, Hindquarters, Coat, Color, Markings",
        },
        {
          id: "fci-pug-official-standard",
          role: "verified",
          locator: "Head, Body, Tail, Limbs, Coat, Colour (silver, apricot, fawn or black)",
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Characteristics, General appearance, Head and skull, Coat, Colour (silver, apricot, fawn or black)",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "GET /breeds/{id}/colours (lists 19 generic species-wide colours)",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Conformation, coat texture, and recognised coat colours (fawn, silver/silver fawn, apricot/apricot fawn, and black) follow the official standards rather than The Dog API's generic 19-colour list. Note that the AKC standard formally groups silver and apricot shades under fawn and disqualifies any colour other than fawn or black.",
    },

    "physical.height": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "Height: 10–13 inches",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.height.metric (25–33 cm)",
        },
      ],
      verifiedOn: "2026-11-16",
      note:
        "Neither FCI Standard No. 253 nor The Kennel Club standard publishes a numerical withers height. Preserves the AKC breed profile's 10–13 inches in its original unit without conversion; The Dog API reports 25–33 cm.",
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-pug-breed-standard",
          role: "verified",
          locator: "Size, Proportion, Substance: Weight from 14 to 18 pounds (dog or bitch) desirable",
        },
        {
          id: "fci-pug-official-standard",
          role: "cited",
          locator: "Weight: Ideal weight 6,3 – 8,1 kg",
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Size: Ideal weight 6.3–8.1 kgs (14–18 lbs)",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight.metric (6–8 kg)",
        },
      ],
      verifiedOn: "2026-11-16",
      note:
        "Preserves the whole-number pound range (14–18 lb) published in the AKC official standard and The Kennel Club standard without conversion; FCI Standard No. 253 publishes 6.3–8.1 kg and The Dog API gives 6–8 kg.",
    },

    "physical.weight.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-pug-breed-standard",
          role: "verified",
          locator: "Weight from 14 to 18 pounds (dog or bitch) desirable",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Upper desirable weight of 18 lb from the AKC official standard (applies equally to males and females).",
    },

    "physical.weight.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-pug-breed-standard",
          role: "verified",
          locator: "Weight from 14 to 18 pounds (dog or bitch) desirable",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Upper desirable weight of 18 lb from the AKC official standard (applies equally to males and females).",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 13–15 years",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Verified from the AKC breed profile; The Dog API attachment did not include a lifespan range.",
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (4/5)",
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Grooming & FAQ: Pugs shed considerably despite their short coat, as most are double-coated",
        },
      ],
      verifiedOn: "2026-11-16",
      note: null,
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (2/5)",
        },
        {
          id: "fci-pug-official-standard",
          role: "verified",
          locator: "Jaws/Teeth: slightly undershot, lips not pendulous",
        },
      ],
      verifiedOn: "2026-11-16",
      note: null,
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-pug-official-standard",
          role: "verified",
          locator: "Behaviour / Temperament: Great charm, dignity and intelligence; even-tempered, happy and lively disposition",
        },
        {
          id: "akc-pug-breed-standard",
          role: "verified",
          locator: "Temperament: Even-tempered breed, exhibiting stability, playfulness, great charm, dignity, and an outgoing, loving disposition",
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Characteristics and Temperament",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-16",
      note: null,
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics ratings",
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "cited",
          locator: "Breed characteristics and temperament description",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 scores informed by kennel-club temperament profiles.",
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition",
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "cited",
          locator: "Exercise, Grooming, and Living environment",
        },
        {
          id: "pug-dog-club-of-america-health",
          role: "cited",
          locator: "General health, fold cleaning, and airway precautions",
        },
      ],
      verifiedOn: null,
      note:
        "Combines general companion-dog care with brachycephalic heat safety and wrinkle hygiene.",
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "Energy Level (2/5); Exercise Needs (2/5)",
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Exercise: Up to 1 hour per day split into shorter sessions; heat and humidity limits",
        },
      ],
      verifiedOn: "2026-11-16",
      note: null,
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "cited",
          locator: "Exercise: Up to 1 hour per day in short sessions",
        },
        {
          id: "akc-pug-breed-profile",
          role: "cited",
          locator: "Exercise: Moderate daily walks and play",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial daily duration estimate of 30–45 minutes of gentle activity split across cool hours.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Size of home: Flat/Apartment suitable",
        },
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "Adaptability: Adapts Well to Apartment Living (5/5)",
        },
      ],
      verifiedOn: "2026-11-16",
      note: null,
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Size of garden: Small/medium garden",
        },
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "Exercise and backyard play guidance",
        },
      ],
      verifiedOn: "2026-11-16",
      note: null,
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Airway structure limits tolerance for heat, humidity, and strenuous activity",
        },
        {
          id: "pug-boas-cambridge-study-2015",
          role: "verified",
          locator: "Thermoregulatory vulnerability in brachycephalic breeds",
        },
      ],
      verifiedOn: "2026-11-16",
      note:
        "Reflects the physiological need for indoor climate control during warm or humid weather.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "FAQ: Can Pugs be left alone during the day? Not for long stretches, prone to separation anxiety",
        },
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "Companion orientation and low tolerance for long isolation",
        },
      ],
      verifiedOn: "2026-11-16",
      note: null,
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "cited",
          locator: "Nutrition: calorie monitoring and weight management",
        },
        {
          id: "pug-dog-club-of-america-health",
          role: "cited",
          locator: "Obesity prevention in brachycephalic dogs",
        },
      ],
      verifiedOn: null,
      note: "General small-breed nutrition guidance emphasising strict portion control.",
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "cited",
          locator: "Life-stage feeding and portioning",
        },
      ],
      verifiedOn: null,
      note: "General small-breed meal scheduling guidance.",
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pug-boas-cambridge-study-2015",
          role: "verified",
          locator: "Conformational risk factors in brachycephalic obstructive airway syndrome (BOAS)",
        },
        {
          id: "pug-dog-encephalitis-necrotizing-meningoencephalitis-study-2009",
          role: "verified",
          locator: "Genome-wide association study of necrotizing meningoencephalitis in Pugs",
        },
        {
          id: "ofas-chic-pug-requirements",
          role: "verified",
          locator: "Mandatory and optional screening protocols for PDE, patellas, eyes, hips, and spine",
        },
        {
          id: "pug-dog-club-of-america-health",
          role: "verified",
          locator: "Health priorities: PDE, BOAS, Pug myelopathy, luxating patellas, and hip dysplasia",
        },
      ],
      verifiedOn: "2026-11-16",
      note:
        "Distinguishes conformational risks, genetically associated neurological disease, orthopaedic conditions, and breeding screening protocols.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pug-boas-cambridge-study-2015",
          role: "verified",
          locator: "BOAS findings, stenotic nares, and elongated soft palate",
        },
        {
          id: "pug-dog-encephalitis-necrotizing-meningoencephalitis-study-2009",
          role: "verified",
          locator: "Necrotizing meningoencephalitis (NME / PDE) clinical and MHC class II genetic association",
        },
        {
          id: "pug-dog-club-of-america-health",
          role: "verified",
          locator: "PDE, BOAS, Pug constrictive myelopathy / hemivertebrae, luxating patellas, hip dysplasia, and ocular/skin fold care",
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Conformational concerns involving breathing, eyes, and skin folds",
        },
      ],
      verifiedOn: "2026-11-16",
      note:
        "Summarises peer-reviewed and breed-club-documented conditions in original wording without prohibited registry names.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "pug-dog-club-of-america-health",
          role: "cited",
          locator: "Preventive care, harness use, wrinkle maintenance, and heat safety",
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "cited",
          locator: "Heat precautions, fold hygiene, and eye care",
        },
      ],
      verifiedOn: null,
      note: "Preventive care guidance tailored to flat-faced companion dogs.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofas-chic-pug-requirements",
          role: "verified",
          locator: "Required tests: PDE DNA test, Eye Examination, Patellar Luxation; Optional: Hip/Elbow Dysplasia, Spine, Tracheal Hypoplasia, Cardiac, PKD DNA",
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Breeding health testing: PDE DNA test, respiratory function grading scheme, hip evaluation",
        },
        {
          id: "pug-dog-club-of-america-health",
          role: "verified",
          locator: "Mandatory and optional health testing recommendations",
        },
      ],
      verifiedOn: "2026-11-16",
      note:
        "Reflects required and optional pre-breeding health screenings without using prohibited registry acronyms in user-facing text.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "cited",
          locator: "Grooming and dental maintenance",
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "cited",
          locator: "Mouth and dentition conformation",
        },
      ],
      verifiedOn: null,
      note: "Dental care guidance for brachycephalic breeds with crowded dentition.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "cited",
          locator: "Ear checks and grooming",
        },
        {
          id: "fci-pug-official-standard",
          role: "cited",
          locator: "Button and rose ear conformation",
        },
      ],
      verifiedOn: null,
      note: "General ear-care guidance for folded button or rose ears.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "cited",
          locator: "Skin fold hygiene and health concerns",
        },
        {
          id: "pug-dog-club-of-america-health",
          role: "cited",
          locator: "Facial wrinkle and tail fold care",
        },
      ],
      verifiedOn: null,
      note: "Routine wrinkle-cleaning and skin-care guidance.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Adaptability ratings",
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "cited",
          locator: "Breed characteristics and living requirements",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial suitability evaluations based on temperament, exercise limits, and climate sensitivity.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "History: Han dynasty origins, House of Orange (Pompey), Joséphine Bonaparte's Fortune, Queen Victoria, 'multum in parvo'",
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Breed characteristics: 'multum in parvo' and royal history",
        },
        {
          id: "fci-pug-official-standard",
          role: "verified",
          locator: "General appearance (multum in parvo) and tightly curled tail",
        },
      ],
      verifiedOn: "2026-11-16",
      note: "Historical facts and traditional breed motto rewritten in original wording.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "Origin, height (10–13 in), weight (14–18 lb), lifespan (13–15 yr), shedding, and temperament",
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "FAQ: family suitability, exercise, shedding, health, and alone-time limits",
        },
        {
          id: "fci-pug-official-standard",
          role: "verified",
          locator: "Conformation, coat, and physical features",
        },
        {
          id: "pug-boas-cambridge-study-2015",
          role: "verified",
          locator: "Brachycephalic airway and thermoregulatory findings",
        },
      ],
      verifiedOn: "2026-11-16",
      note:
        "FAQ answers synthesise verified standards, kennel-club profiles, and veterinary research without naming registries in user-facing text.",
    },
  },

  updatedOn: "2026-11-16",
};
