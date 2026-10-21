import type { Breed } from "../schema/breed.types";

export const great_dane: Breed = {
  slug: "great-dane",
  name: "Great Dane",
  scientificName: null,
  alternateNames: [
    "Deutsche Dogge",
    "German Mastiff",
    "Dogue Allemand",
  ],
  group:
    "FCI Group 2 — Pinscher and Schnauzer type, Molossoid breeds and Swiss Mountain and Cattle Dogs; Section 2.1 — Molossoid breeds, Mastiff type",
  origin: {
    country: "Germany",
    region: null,
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Blue_Great_Dane.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Blue_Great_Dane.jpg",
      title: "Blue Great Dane.jpg",
      description: "Photograph of a blue Great Dane.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2018-09-08",
      uploadedOn: "2018-09-17",
      width: 1465,
      height: 1408,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Dane_puppies.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Great_Dane_puppies.jpg",
      title: "Great Dane puppies.jpg",
      description: "Photograph of Great Dane puppies.",
      creator: "Jvgrandblanc",
      uploader: "Jvgrandblanc",
      capturedOn: "2016-04-19",
      uploadedOn: "2016-04-20",
      width: 1632,
      height: 918,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Jvgrandblanc, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Dane_Champion_Dog_Show.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Great_Dane_Champion_Dog_Show.jpg",
      title: "Great Dane Champion Dog Show.jpg",
      description:
        "Photograph of a Great Dane with its handler at a dog show.",
      creator: "Valenzuela400",
      uploader: "Valenzuela400",
      capturedOn: null,
      uploadedOn: "2024-01-22",
      width: 1854,
      height: 3523,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Valenzuela400, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
  ],
  overview: {
    summary:
      "The Great Dane is a giant German dog breed recognised for its imposing height, powerful frame, and dignified appearance. Despite its size, the breed standard describes a dog intended to be confident, affectionate with its family, and manageable as a companion. Its size and strength make early training, responsible handling, adequate space, and careful health management especially important.",
    description:
      "The Great Dane has a tall, muscular, nearly square frame, a long and expressive head, a deep chest, and a short, glossy coat. Its height gives it a striking appearance, but correct proportions and balanced movement are important features of the breed. Recognised colour varieties include fawn, brindle, black, harlequin, merle, and blue, with detailed colour rules differing by variety and registry. Great Danes are often devoted to their families and may be reserved around unfamiliar people. Their giant size can affect everyday practicalities such as transport, equipment, exercise planning, and veterinary costs. They need consistent reward-based training and thoughtful management rather than being treated as a low-maintenance dog simply because they may be calm indoors.",
    history:
      "The modern Great Dane developed in Germany from large, powerful dogs associated with hunting and guarding. Historically, several regional names were used for related large dogs before breeders began classifying them together as Deutsche Doggen. A committee formed in Berlin in 1878 helped establish the breed as a distinct German type, and an initial standard was written in 1880. The breed was later refined through organised breeding and standard revisions.",
    originalPurpose:
      "Large-game hunting and guarding roles in its historical development; the modern breed standard identifies companionship and watch or guard duties as its uses.",
    currentRoles: [
      "Companion and family dog",
      "Watchful household companion",
      "Conformation shows",
      "Obedience and other structured companion activities where suitable for the individual dog",
    ],
  },
  physical: {
    sizeCategory: "Giant",
    height: {
      unit: "cm",
      male: {
        min: 80,
        max: 90,
      },
      female: {
        min: 72,
        max: 84,
      },
    },
    weight: {
      unit: "kg",
      male: {
        min: 63.5,
        max: 79.4,
      },
      female: {
        min: 49.9,
        max: 63.5,
      },
    },
    lifespanYears: {
      min: 8,
      max: 10,
    },
    coatType: "Single coat; short, dense, smooth, close-lying, and glossy.",
    coatLength: "Very short.",
    coatColors: [
      "Fawn",
      "Brindle",
      "Black",
      "Harlequin — white with black patches",
      "Merle — grey with black patches",
      "Blue",
    ],
    sheddingLevel: null,
    droolingLevel: null,
    distinctiveFeatures: [
      "Very tall, powerful, and well-proportioned body",
      "Nearly square outline, particularly in males",
      "Long, narrow, expressive head",
      "Deep chest and muscular limbs",
      "Short, glossy coat",
      "Naturally pendant ears",
      "Long tail reaching toward the hocks",
      "Recognised colour varieties with distinct pattern requirements",
    ],
  },
  temperament: {
    traits: [
      "Often devoted and affectionate with familiar people",
      "Expected by the breed standard to be confident and manageable",
      "May be reserved around unfamiliar people",
      "Large and physically powerful, so controlled handling is important",
      "Benefits from early, positive socialisation",
      "Needs consistent training to develop safe everyday manners",
      "Individual behaviour varies with genetics, health, experience, and training",
    ],
    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 3,
      independence: 2,
      trainability: 4,
      barking: 2,
      energy: 3,
    },
  },
  care: {
    exercise: {
      level:
        "Moderate, adjusted for age, joint health, fitness, and body condition. Adults generally benefit from regular controlled walks and enrichment; growing puppies should not be pushed into strenuous or repetitive high-impact exercise.",
      minutesPerDay: null,
      activities: [
        "Regular, controlled walks suited to the dog's fitness",
        "Reward-based obedience and everyday manners practice",
        "Calm sniffing and exploration on walks",
        "Food puzzles and supervised enrichment activities",
        "Low-impact play appropriate to age and physical condition",
        "Gradual conditioning with veterinary guidance where health concerns exist",
      ],
    },
    grooming: {
      level:
        "Low to moderate. The short coat is straightforward to maintain, but routine grooming and skin checks are still needed.",
      brushing:
        "Brush regularly with a soft-bristled brush or suitable grooming mitt to remove loose hair and inspect the skin. Grooming frequency can be increased when shedding is more noticeable.",
      bathing:
        "Bathe when needed using a dog-formulated shampoo. Because of the breed's size, prepare a safe non-slip bathing area and rinse the coat thoroughly.",
      notes: [
        "Check the skin for irritation, lumps, parasites, and wounds during grooming.",
        "Trim nails as needed; long nails can affect comfort and movement.",
        "Check the ears for redness, odour, discharge, or repeated scratching.",
        "Brush the teeth regularly with dog-safe toothpaste.",
        "Use appropriately sized, secure grooming and walking equipment.",
      ],
    },
    training: {
      difficulty:
        "Moderate. Great Danes can learn well with clear, reward-based instruction, but their adult size and strength make early training and safe handling particularly important.",
      tips: [
        "Teach loose-leash walking before the dog becomes difficult to manage physically.",
        "Use reward-based methods and consistent household rules.",
        "Practise calm greetings and four-paws-on-the-floor behaviour.",
        "Teach a reliable response to name, recall cues, and settling cues.",
        "Socialise gradually and positively without forcing interactions.",
        "Avoid harsh handling or training methods that could create fear or defensive behaviour.",
        "Use suitable equipment and supervision around children and unfamiliar dogs.",
      ],
      socialization:
        "Introduce the dog gradually to people, dogs, surfaces, sounds, transport, and everyday environments. Keep experiences positive and age-appropriate, and seek qualified help if fear, reactivity, or handling difficulties emerge.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: null,
      climates: [
        "Provide shade, ventilation, and fresh water in warm weather.",
        "Avoid strenuous activity during heat and adjust walks to local conditions.",
        "Provide a comfortable resting surface with enough room for the dog to stretch out.",
        "Use secure fencing and equipment suited to a very large, powerful dog.",
      ],
      aloneTimeTolerance: null,
    },
  },
  nutrition: {
    dietType:
      "A complete and balanced diet appropriate for the dog's life stage, giant-breed growth needs, body condition, and health.",
    feedingFrequency: {
      puppy:
        "Use a diet formulated for large or giant-breed puppy growth and follow the manufacturer's feeding guidance with veterinary oversight. Avoid adding calcium or other supplements unless a veterinarian specifically recommends them.",
      adult:
        "Feed measured portions of an appropriate complete adult diet. Adjust portions to maintain healthy body condition and avoid excess weight.",
      senior:
        "Select a diet according to body condition, activity, dental health, and any age-related medical needs, with veterinary advice when necessary.",
    },
    guidelines:
      "Great Danes have unusually large bodies and specific growth considerations. Feed a complete, balanced diet appropriate for life stage rather than improvising a homemade ration or adding supplements without advice. Monitor growth and body condition with a veterinarian, particularly during puppyhood. Discuss meal size, feeding frequency, and the risk of gastric dilatation-volvulus with the veterinary team. Avoid strenuous exercise around meals according to your veterinarian's advice, and keep fresh water available.",
    considerations: [
      "Growing puppies need an appropriately formulated large- or giant-breed diet.",
      "Do not add calcium supplements to a complete puppy diet unless specifically prescribed.",
      "Avoid excessive weight gain because it adds stress to joints and mobility.",
      "Discuss meal size, feeding routine, and bloat risk with a veterinarian.",
      "Track body condition and adjust feeding as growth and activity change.",
      "Account for treats when calculating daily food intake.",
    ],
    note:
      "No universal calorie amount or serving size is provided because needs depend on age, body condition, food energy density, activity, and health.",
  },
  health: {
    overview:
      "Great Danes have several important health risks associated with their breed and giant size. Gastric dilatation-volvulus (GDV or bloat) is a potentially life-threatening emergency. Cardiac disease, hip problems, thyroid disorders, and some eye conditions are also described in breed-health resources. Screening can help identify some concerns in breeding dogs, but it cannot guarantee that a puppy or adult dog will remain free of disease.",
    commonConditions: [
      "Gastric dilatation-volvulus (GDV or bloat), a life-threatening emergency that requires immediate veterinary care.",
      "Cardiomyopathy and other cardiac disorders.",
      "Hip dysplasia and other mobility-related joint problems.",
      "Hypothyroidism and autoimmune thyroiditis.",
      "Eye disorders, including cataracts and eyelid abnormalities.",
      "Other conditions may occur; this list is not a diagnosis or a complete list of every possible disease.",
    ],
    preventiveCare: [
      "Schedule regular veterinary examinations and keep preventive care up to date.",
      "Discuss the signs of GDV with a veterinarian and know how to access emergency veterinary care.",
      "Ask a veterinarian whether prophylactic gastropexy is appropriate for the individual dog; it can reduce the risk of stomach twisting but does not remove every risk.",
      "Maintain a healthy body condition and avoid excessive weight gain.",
      "Use a veterinarian-approved nutrition plan during growth.",
      "Ask breeders for documented hip, cardiac, eye, and thyroid screening results for breeding dogs.",
      "Seek prompt veterinary advice for collapse, a swollen abdomen, unproductive retching, breathing difficulty, or sudden weakness.",
    ],
    recommendedScreenings: [
      "Hip evaluation through a recognised programme such as OFA or PennHIP.",
      "Cardiac evaluation; the breed club recommends appropriate cardiac testing for breeding dogs.",
      "Thyroid evaluation, including testing appropriate to the veterinarian's or screening programme's protocol.",
      "Eye examination by a qualified veterinary ophthalmologist.",
      "Confirm current screening recommendations and the interpretation of results with the breed club, screening programme, and veterinarian.",
    ],
    dentalCare:
      "Brush the teeth regularly using dog-safe toothpaste. Have the mouth checked during routine veterinary visits and seek advice for bad breath, bleeding gums, oral pain, or difficulty eating.",
    earCare:
      "Inspect the ears regularly for redness, discharge, odour, or discomfort. Clean only as needed with a veterinarian-recommended product and seek veterinary advice for persistent symptoms.",
    skinCare:
      "Check the coat and skin regularly for irritation, parasites, wounds, or new lumps. Ask a veterinarian about persistent itching, sores, hair loss, or any rapidly changing mass.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "Owners prepared for the space, equipment, training, and financial needs of a giant dog",
      "Households able to provide calm, consistent training and appropriate socialisation",
      "People who can manage a large dog's walking, transport, and veterinary-care needs",
      "Owners willing to plan carefully for breed-associated health risks",
    ],
    notIdealFor: [
      "Households unable to safely handle a very large and powerful dog",
      "Owners who cannot budget for the food, equipment, and veterinary costs of a giant breed",
      "People expecting a dog that requires no training because it may be calm indoors",
      "Homes unable to provide sufficient resting space and safe day-to-day management",
    ],
  },
  funFacts: [
    "The Great Dane is also known by the German name Deutsche Dogge.",
    "The breed's modern development as a distinct German breed was formalised by breeders in the late nineteenth century.",
    "The FCI standard recognises several distinct colour varieties, each with its own detailed markings.",
    "The breed's height means ordinary equipment, transport, and resting spaces often need to be chosen specifically for giant dogs.",
    "The nickname “Apollo of dogs” is commonly associated with the breed's tall, elegant appearance.",
  ],
  faq: [
    {
      question: "How tall is a Great Dane?",
      answer:
        "The FCI standard gives a height at the withers of 80–90 cm for males and 72–84 cm for females. These are standard ranges, not a guarantee of an individual dog's adult height.",
    },
    {
      question: "How long does a Great Dane usually live?",
      answer:
        "The American Kennel Club lists a typical life expectancy of 8–10 years. Individual lifespan varies with genetics, healthcare, body condition, and other factors.",
    },
    {
      question: "Are Great Danes good family dogs?",
      answer:
        "The breed standard describes a confident, devoted companion, but temperament varies between individuals. Because of their size and strength, interactions with children and other animals should be supervised and supported by training.",
    },
    {
      question: "What health risks are especially important for Great Danes?",
      answer:
        "Important concerns include GDV or bloat, cardiac disease, hip problems, thyroid disorders, and some eye conditions. Ask a veterinarian about screening and preventive care, and treat suspected bloat as an emergency.",
    },
    {
      question: "What colours do Great Danes come in?",
      answer:
        "The FCI standard recognises fawn, brindle, black, harlequin, merle, and blue varieties. Exact marking requirements differ by variety, and registration rules can vary by kennel club.",
    },
    {
      question: "Can a Great Dane live in an apartment?",
      answer:
        "There is no universal yes-or-no answer. Suitability depends on the individual dog, available indoor space, safe access outdoors, training, and the owner's ability to meet the dog's needs. Its giant size should be considered carefully before choosing a home.",
    },
    {
      question: "What health tests should a Great Dane breeder provide?",
      answer:
        "Breed-club guidance recommends hip, cardiac, thyroid, and eye evaluations for breeding dogs. Ask for documented results and discuss what they mean with a veterinarian rather than relying only on verbal assurances.",
    },
  ],
  references: [
    "fci-great-dane-standard",
    "american-kennel-club-great-dane-profile",
    "american-kennel-club-great-dane-lifespan-health",
    "great-dane-club-america-health-research",
    "great-dane-club-america-owner-guide",
    "wikimedia-great-dane-blue-canarian",
    "wikimedia-great-dane-puppies-jvgrandblanc",
    "wikimedia-great-dane-champion-show-valenzuela400",
  ],
  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A breed-specific scientific name was not established from the consulted breed standards and kennel-club sources.",
    },
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Breed nomenclature and historical summary",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "Deutsche Dogge is the German breed name used in the standard. Other names are common English-language labels.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "FCI classification",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "The classification follows the FCI standard; other kennel clubs may use different group systems.",
    },
    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Origin",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "The FCI identifies Germany as the country of origin. A more specific origin region was not established.",
    },
    "origin.region": {
  reliability: "unavailable",
  sources: [],
  verifiedOn: null,
  note: "The consulted standard identifies Germany as the country of origin but does not establish a more specific origin region.",
},
    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Historical summary, general appearance, temperament, and utilization",
        },
        {
          id: "american-kennel-club-great-dane-profile",
          role: "cited",
          locator: "Breed profile",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "Descriptions are paraphrased and distinguish historical roles from present-day companion roles.",
    },
    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "General appearance, coat, colour, size, and weight",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "Height, coat, and recognised colours follow the 2024 FCI standard. Weight and lifespan use separate sources.",
    },
    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Breed profile: weight",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "Weight values are converted from the kennel-club's published pound ranges and rounded to one decimal place.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Breed profile: life expectancy",
        },
        {
          id: "american-kennel-club-great-dane-lifespan-health",
          role: "verified",
          locator: "Life span and health issues",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "This is a typical lifespan range, not a guarantee for any individual dog.",
    },
    "physical.sheddingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted sources describe coat characteristics but do not establish a consistent shedding-level category.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A reliable, quantified drooling-level category was not established from the consulted sources.",
    },
    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Behaviour and temperament",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "Traits are paraphrased from the standard and qualified because behaviour varies by individual.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "cited",
          locator: "Behaviour and temperament",
        },
        {
          id: "american-kennel-club-great-dane-profile",
          role: "cited",
          locator: "Breed characteristics",
        },
      ],
      verifiedOn: null,
      note:
        "Scores are editorial estimates on a 1–5 scale, not standardised behavioural measurements.",
    },
    "care.exercise": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "cited",
          locator: "Care and breed characteristics",
        },
        {
          id: "great-dane-club-america-owner-guide",
          role: "cited",
          locator: "Ownership considerations",
        },
      ],
      verifiedOn: null,
      note:
        "Activity guidance is qualitative and should be adapted to age, growth, fitness, and veterinary advice.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted sources do not establish one universal daily minute target suitable for all Great Danes.",
    },
    "care.grooming": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "cited",
          locator: "Coat and grooming",
        },
      ],
      verifiedOn: null,
      note:
        "Practical grooming advice is general guidance, not a quantified breed-specific requirement.",
    },
    "care.training": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "cited",
          locator: "Temperament",
        },
        {
          id: "great-dane-club-america-owner-guide",
          role: "cited",
          locator: "Responsible ownership",
        },
      ],
      verifiedOn: null,
      note:
        "Training suggestions emphasise safe handling and reward-based learning.",
    },
    "care.livingEnvironment": {
      reliability: "general_guidance",
      sources: [
        {
          id: "great-dane-club-america-owner-guide",
          role: "cited",
          locator: "Is a Great Dane for you?",
        },
      ],
      verifiedOn: null,
      note:
        "Environmental guidance concerns responsible management of a giant dog and does not make a universal housing claim.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted sources do not establish a universal yes-or-no apartment-suitability value.",
    },
    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The consulted sources do not establish a universal yes-or-no value for houses with yards.",
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A reliable breed-specific alone-time tolerance value was not established.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-great-dane-lifespan-health",
          role: "cited",
          locator: "Healthy diet and preventive care",
        },
      ],
      verifiedOn: null,
      note:
        "Nutrition advice is general and should be individualised with veterinary guidance, especially during giant-breed growth.",
    },
    health: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-great-dane-lifespan-health",
          role: "cited",
          locator: "Health concerns and preventive care",
        },
      ],
      verifiedOn: null,
      note:
        "Preventive advice does not replace a veterinary diagnosis or treatment plan.",
    },
    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-lifespan-health",
          role: "verified",
          locator: "Life span and health issues",
        },
        {
          id: "great-dane-club-america-health-research",
          role: "verified",
          locator: "Health and research information",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "The overview describes documented breed concerns without claiming every dog will develop them.",
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-lifespan-health",
          role: "verified",
          locator: "Bloat, cardiomyopathy, joint and bone disease, and thyroid problems",
        },
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Health and recommended health tests",
        },
        {
          id: "great-dane-club-america-health-research",
          role: "verified",
          locator: "GDV, cardiac, thyroid, and eye information",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "Conditions are included because the sources identify them as breed concerns; no prevalence ranking is implied.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Recommended health tests from the national breed club",
        },
        {
          id: "great-dane-club-america-health-research",
          role: "verified",
          locator: "Recommended disease screenings",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "Screening recommendations are intended to inform responsible breeding and veterinary planning; current programme requirements should be confirmed before testing.",
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A universal first-time-owner suitability label cannot be reliably assigned from the consulted sources.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Family suitability depends on the individual dog, children's ages, supervision, training, and household circumstances.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Suitability depends on an owner's physical capacity and support; no universal value is assigned.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A categorical apartment-living suitability value is not established by the consulted sources.",
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "great-dane-club-america-owner-guide",
          role: "cited",
          locator: "Is a Great Dane for you?",
        },
        {
          id: "american-kennel-club-great-dane-profile",
          role: "cited",
          locator: "Breed characteristics and ownership commitment",
        },
      ],
      verifiedOn: null,
      note:
        "Suitability guidance is editorial and based on the practical demands of giant-dog ownership.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Historical summary and colour varieties",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "Historical and breed-standard facts are paraphrased.",
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Size, colour, and temperament",
        },
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Breed profile and recommended health tests",
        },
        {
          id: "american-kennel-club-great-dane-lifespan-health",
          role: "verified",
          locator: "Life expectancy and health issues",
        },
        {
          id: "great-dane-club-america-health-research",
          role: "verified",
          locator: "Health and screening guidance",
        },
      ],
      verifiedOn: "2026-10-21",
      note:
        "Answers are paraphrased and avoid guaranteeing lifespan, behaviour, or health outcomes.",
    },
  },
  updatedOn: "2026-10-21",
};