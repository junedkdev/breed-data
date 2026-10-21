import type { Breed } from "../schema/breed.types";

export const samoyed: Breed = {
  slug: "samoyed",
  name: "Samoyed",
  scientificName: null,
  alternateNames: ["Samoiedskaïa Sabaka", "Samoyede", "Samoiedskaya Sobaka"],
  group:
    "FCI Group 5 — Spitz and primitive types; Section 1 — Nordic sledge dogs",
  origin: {
    country: "Northern Russia and Siberia",
    region: "Arctic regions historically inhabited by Samoyedic peoples",
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Samoyed_dog.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Samoyed_dog.jpg",
      title: "Samoyed dog.jpg",
      description: "Juvenile Samoyed dog photographed outdoors.",
      creator: "Ruerd Kroon",
      uploader: "Ruerd Kroon",
      capturedOn: "2022-01-05",
      uploadedOn: "2022-01-05",
      width: 768,
      height: 1024,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Ruerd Kroon, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate any changes made; adaptations must comply with applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Samoyed-dog.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Samoyed-dog.jpg",
      title: "Samoyed-dog.jpg",
      description: "Samoyed female photographed at a dog show.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2018-12-15",
      uploadedOn: "2019-01-31",
      width: 1092,
      height: 1173,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate any changes made; adaptations must comply with applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Samoyed_puppy.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Samoyed_puppy.jpg",
      title: "Samoyed puppy.jpg",
      description: "Samoyed puppy sitting inside a pumpkin.",
      creator: "Ruerd Kroon",
      uploader: "Ruerd Kroon",
      capturedOn: "2022-01-05",
      uploadedOn: null,
      width: 1600,
      height: 1200,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Ruerd Kroon, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate any changes made; adaptations must comply with applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
  ],
  overview: {
    summary:
      "The Samoyed is a sturdy, sociable Arctic spitz breed known for its thick double coat, upright ears, curled tail, and characteristic friendly expression. Originally developed among peoples of northern Russia and Siberia, it worked alongside families in demanding cold environments. It usually thrives with companionship, regular activity, patient training, and substantial coat care.",
    description:
      "Samoyeds are medium-sized, strong dogs with a dense undercoat and a longer, weather-resistant outer coat. Their expression is often described as a 'Samoyed smile', formed by the shape of the eyes and slightly upturned corners of the mouth. They are generally outgoing and alert, and tend to enjoy being involved in family routines. Their thick coat sheds heavily, and their social nature means that long periods without interaction may be difficult for many individuals. Each dog still has its own temperament, activity level, and needs.",
    history:
      "The breed takes its name from Samoyedic peoples of northern Russia and Siberia. Historical accounts describe dogs used for sled pulling, hunting, and helping manage reindeer, with close contact between dogs and the families they lived with. Dogs brought to western Europe by explorers and travellers helped establish the modern western breed. The first written breed standard was produced in England in the early twentieth century.",
    originalPurpose:
      "Sled pulling, hunting, reindeer-related work, and close companionship in Arctic communities.",
    currentRoles: [
      "Companion dog",
      "Sled and pulling sports where safely trained",
      "Hiking and outdoor activity partner in suitable conditions",
      "Obedience, rally, agility, and other canine sports",
      "Participating family companion",
    ],
  },
  physical: {
    sizeCategory: "Medium",
    height: {
      unit: "cm",
      male: { min: 54, max: 60 },
      female: { min: 50, max: 56 },
    },
    weight: {
      unit: "kg",
      male: { min: 20.4, max: 29.5 },
      female: { min: 15.9, max: 22.7 },
    },
    lifespanYears: { min: 12, max: 14 },
    coatType:
      "Dense double coat with a short, soft, thick undercoat and a longer, harsher, straight outer coat.",
    coatLength:
      "Medium to long, with a prominent neck ruff, feathering on the thighs, and a heavily coated tail.",
    coatColors: ["Pure white", "Cream", "White and biscuit"],
    sheddingLevel:
      "High; loose hair is present throughout the year, with heavier seasonal shedding.",
    droolingLevel:
      "Generally low; individual dogs may still drool in response to heat, exertion, stress, or food.",
    distinctiveFeatures: [
      "Dense, weather-resistant double coat",
      "Upright triangular ears",
      "Plumed tail usually carried curled over the back",
      "Dark, alert eyes and a friendly expression",
      "Slightly upturned corners of the mouth associated with the Samoyed smile",
      "Strong, balanced body built for endurance",
    ],
  },
  temperament: {
    traits: [
      "Friendly and sociable",
      "Affectionate with familiar people",
      "Alert and lively",
      "Playful and often mischievous",
      "Intelligent but may be independent",
      "Usually enjoys participating in family activities",
      "May vocalise or bark when excited or seeking interaction",
    ],
    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: 2,
      independence: 3,
      trainability: 3,
      barking: 4,
      energy: 4,
    },
  },
  care: {
    exercise: {
      level: "Moderate to high",
      minutesPerDay: { min: 60, max: 90 },
      activities: [
        "Daily walks adjusted to age, health, and weather",
        "Reward-based training and short learning sessions",
        "Play and interactive games with family members",
        "Scent games and food puzzles",
        "Hiking or other outdoor activities in suitable temperatures",
        "Appropriately trained pulling or canine sports",
      ],
    },
    grooming: {
      level: "High",
      brushing:
        "Brush thoroughly several times per week and more frequently during heavy shedding. Work through the coat in sections so the dense undercoat is reached, paying attention to areas behind the ears, under the legs, around the trousers, and beneath the tail. Use suitable brushes and combs without scraping or irritating the skin.",
      bathing:
        "Bathe when necessary using dog-appropriate products and rinse the dense coat thoroughly. Ensure the undercoat is completely dried after bathing to reduce dampness trapped close to the skin.",
      notes: [
        "Expect substantial loose hair, particularly during seasonal coat changes.",
        "Check for mats, debris, skin irritation, and parasites during grooming.",
        "Avoid shaving the double coat as a routine response to warm weather; discuss coat or skin problems with a veterinarian or qualified groomer.",
        "Trim nails regularly and check paws after outdoor activity.",
        "Brush teeth with dog-safe toothpaste and arrange routine dental checks.",
        "Provide shade, fresh water, ventilation, and cooler exercise periods during hot weather.",
      ],
    },
    training: {
      difficulty:
        "Moderate; consistency, motivation, and patience are important.",
      tips: [
        "Use reward-based training and keep sessions varied and engaging.",
        "Teach recall and loose-lead walking early; practise in secure areas before adding distractions.",
        "Reward calm behaviour as well as active responses.",
        "Use enrichment games to provide mental activity.",
        "Manage barking by identifying its cause and reinforcing alternative behaviours rather than relying on punishment.",
        "Use secure fencing and supervision because some dogs may roam if given the opportunity.",
      ],
      socialization:
        "Introduce the dog gradually and positively to people, dogs, handling, transport, household sounds, and different environments. Continue training and social learning into adulthood. Supervise interactions with children and unfamiliar dogs; early socialization helps build confidence but does not guarantee that every dog will enjoy every situation.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,
      climates: [
        "Cold weather is generally more comfortable for this Arctic-adapted breed.",
        "Hot and humid conditions require extra precautions because of the dense double coat.",
        "In warm climates, provide shade, fresh water, good ventilation, and exercise during cooler parts of the day.",
        "Never leave a dog in a parked vehicle or an inadequately ventilated hot space.",
      ],
      aloneTimeTolerance:
        "Often low; many Samoyeds prefer company and may become bored or vocal if left alone for long periods. Build alone-time skills gradually and provide suitable enrichment.",
    },
  },
  nutrition: {
    dietType:
      "A complete and balanced dog food appropriate to the dog's life stage, body condition, activity, and individual health needs.",
    feedingFrequency: {
      puppy:
        "Usually several small meals daily; follow the food manufacturer's age-specific guidance and your veterinarian's advice.",
      adult:
        "Often fed in two meals per day, with portions adjusted to body condition and activity.",
      senior:
        "Choose a suitable diet and feeding schedule according to body condition, activity, dental health, and veterinary guidance.",
    },
    guidelines:
      "Measure meals rather than feeding by guesswork. Monitor body weight and body condition, adjust portions as activity or life stage changes, and include treats in the daily calorie total. Keep clean drinking water available at all times. A veterinarian can help choose an appropriate diet if the dog has a medical condition or persistent weight or digestive concerns.",
    considerations: [
      "Avoid overfeeding and monitor body condition regularly.",
      "Adjust portions for age, activity, neuter status, and individual metabolism.",
      "Introduce food changes gradually when practical.",
      "Do not add supplements or prescribe restrictive diets without veterinary advice.",
      "Ask a veterinarian about persistent itching, gastrointestinal signs, weight changes, or changes in appetite.",
    ],
    note:
      "These are general feeding principles, not an individual calorie prescription. Food choice and quantity should be tailored to the dog's condition and veterinary needs.",
  },
  health: {
    overview:
      "Responsible Samoyed breeding programmes commonly recommend screening for hip, eye, and cardiac disorders, along with DNA testing for specified inherited eye conditions. Screening helps breeders assess risk but cannot guarantee that a dog will never develop disease. Individual symptoms and health decisions should be assessed by a veterinarian.",
    commonConditions: [
      "Hip dysplasia, for which screening is recommended in breeding dogs",
      "Inherited eye disorders, including X-linked progressive retinal atrophy",
      "Retinal dysplasia and oculoskeletal dysplasia associated with the RD/OSD testing programme",
      "Cardiac disorders for which examination is included in recommended breeder screening",
    ],
    preventiveCare: [
      "Schedule routine veterinary examinations and keep vaccinations and parasite prevention appropriate to local risks.",
      "Maintain a healthy body condition and provide age-appropriate activity.",
      "Ask breeders for documented health-screening results and relevant family history.",
      "Seek veterinary assessment for persistent lameness, vision changes, fainting, breathing difficulty, or sustained changes in appetite or behaviour.",
      "Keep the coat clean and dry and check the skin during brushing.",
    ],
    recommendedScreenings: [
      "Hip evaluation through a recognised programme such as OFA or an equivalent in the breeder's country",
      "Annual eye examination by a veterinary ophthalmologist for breeding dogs",
      "Cardiac examination by an appropriately qualified veterinary cardiologist",
      "DNA test for X-linked progressive retinal atrophy (XLPRA1)",
      "DNA test for retinal dysplasia/oculoskeletal dysplasia (RD/OSD)",
      "Ask the breeder and veterinarian whether additional tests are appropriate for the dog's family line",
    ],
    dentalCare:
      "Brush teeth regularly with dog-specific toothpaste and arrange veterinary dental checks. Seek advice for persistent bad breath, oral pain, bleeding, or difficulty eating.",
    earCare:
      "Inspect the ears regularly and after outdoor activity. Clean only when needed with a dog-safe product. Redness, odour, discharge, pain, or repeated head-shaking should be assessed by a veterinarian.",
    skinCare:
      "Check the skin while brushing, especially beneath dense coat and feathering. Persistent itching, sores, unusual hair loss, or recurrent irritation warrants veterinary assessment.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "Households that want an involved, sociable companion",
      "Owners who can provide daily activity, enrichment, and training",
      "People prepared for frequent brushing and heavy shedding",
      "Families able to supervise dog-child interactions and teach respectful handling",
      "Owners who can manage the dog's comfort carefully in hot weather",
    ],
    notIdealFor: [
      "People who want a low-shedding or low-grooming dog",
      "Households that cannot provide regular activity and companionship",
      "Owners who expect the dog to remain quiet without training or engagement",
      "People unable to keep the dog cool and safe in hot weather",
    ],
  },
  funFacts: [
    "The breed's name comes from Samoyedic peoples of northern Russia and Siberia.",
    "Historically, Samoyeds worked as sled dogs and also supported families in other tasks.",
    "The familiar Samoyed smile is associated with the shape of the eyes and slightly upturned mouth corners.",
    "The breed's dense double coat includes a soft insulating undercoat and a harsher outer coat.",
    "Samoyeds are classified by the FCI among Nordic sledge dogs.",
  ],
  faq: [
    {
      question: "Where does the Samoyed originate?",
      answer:
        "The breed originates from northern Russia and Siberia, where it lived and worked closely with Arctic communities.",
    },
    {
      question: "How big does a Samoyed get?",
      answer:
        "The FCI standard gives ideal heights of about 57 cm for males and 53 cm for females, each with a tolerance of 3 cm. The American Kennel Club lists typical male weights of 45–65 lb and female weights of 35–50 lb.",
    },
    {
      question: "How long does a Samoyed live?",
      answer:
        "The American Kennel Club lists a typical life expectancy of 12–14 years. Individual lifespan varies with genetics, health, care, and environment.",
    },
    {
      question: "Do Samoyeds shed a lot?",
      answer:
        "Yes. Their dense double coat sheds throughout the year, often with heavier seasonal shedding. Regular brushing helps remove loose hair and reduce tangles.",
    },
    {
      question: "Are Samoyeds suitable for hot climates?",
      answer:
        "They are adapted to cold conditions and need careful heat management in warm or humid weather. Provide shade, water, ventilation, and exercise during cooler hours, and watch for signs of overheating.",
    },
    {
      question: "Are Samoyeds easy to train?",
      answer:
        "They are intelligent and can learn well with reward-based training, but may also be independent or easily distracted. Short, varied sessions and consistent practice are helpful.",
    },
    {
      question: "Can Samoyeds be left alone all day?",
      answer:
        "Many Samoyeds are strongly social and may struggle with long periods of isolation. Build alone-time skills gradually and arrange companionship and enrichment suited to the individual dog.",
    },
    {
      question: "What health tests should I ask a breeder about?",
      answer:
        "Ask for documented hip, eye, and cardiac evaluations, plus DNA test results for X-linked progressive retinal atrophy and retinal dysplasia/oculoskeletal dysplasia. A CHIC number means required results have been submitted for publication; it does not itself mean every result is normal.",
    },
    {
      question: "How much grooming does a Samoyed need?",
      answer:
        "Frequent, thorough brushing is important because the double coat sheds heavily and can tangle. Grooming needs often increase during seasonal coat changes.",
    },
  ],
  references: [
    "fci-samoyed-official-standard",
    "fci-samoyed-nomenclature",
    "american-kennel-club-samoyed",
    "samoyed-club-of-america-health-testing",
    "wikimedia-samoyed-ruerd-kroon",
    "wikimedia-samoyed-canarian",
    "wikimedia-samoyed-puppy-ruerd-kroon",
    "avma-pet-dental-care",
  ],
  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-samoyed-nomenclature",
          role: "verified",
          locator: "Breed nomenclature and translated breed names",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Names follow the breed nomenclature and standard title.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The consulted breed standards do not establish a distinct breed-specific scientific name.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-samoyed-official-standard",
          role: "verified",
          locator: "FCI classification",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-samoyed-official-standard",
          role: "verified",
          locator: "Origin and brief historical summary",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-samoyed-official-standard",
          role: "verified",
          locator: "Utilization, brief historical summary, general appearance, behaviour and temperament",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Descriptions are original summaries of the standard and breed history.",
    },
    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-samoyed-official-standard",
          role: "verified",
          locator: "General appearance, coat, colour, and size",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Specific weight and lifespan values are covered by their own evidence claims.",
    },
    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-samoyed",
          role: "verified",
          locator: "Average sizes and life expectancy",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Pounds converted to kilograms and rounded to one decimal place.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-samoyed",
          role: "verified",
          locator: "Average sizes and life expectancy",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Published life-expectancy range; not a guarantee for an individual dog.",
    },
    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-samoyed",
          role: "verified",
          locator: "About the breed",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "General breed tendency; individual dogs may differ.",
    },
    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-samoyed-official-standard",
          role: "verified",
          locator: "Behaviour and temperament",
        },
        {
          id: "american-kennel-club-samoyed",
          role: "verified",
          locator: "About the breed and breed traits",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-samoyed",
          role: "cited",
          locator: "Breed traits and characteristics",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1–5 scores summarising typical tendencies; not a validated behavioural test and not a prediction for an individual dog.",
    },
    care: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General dog-care recommendations should be adapted to the individual animal and local climate.",
    },
    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-samoyed",
          role: "verified",
          locator: "Exercise",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The source supports regular exercise and play; it does not prescribe a universal daily minute target.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-samoyed",
          role: "cited",
          locator: "Exercise",
        },
      ],
      verifiedOn: null,
      note: "Editorial planning range, not an official breed-standard requirement. Adjust for age, health, fitness, and temperature.",
    },
    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-samoyed",
          role: "verified",
          locator: "Grooming",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-samoyed",
          role: "verified",
          locator: "Training",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "care.livingEnvironment": {
  reliability: "general_guidance",
  sources: [],
  verifiedOn: null,
  note: "General environmental care guidance. Individual suitability depends on exercise, training, climate, supervision, and living conditions.",
},
"care.livingEnvironment.apartmentSuitable": {
  reliability: "unavailable",
  sources: [],
  verifiedOn: null,
  note: "No sufficiently reliable evidence was established to assign a categorical apartment-suitability value for the Samoyed.",
},
    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Feeding advice is general and should be tailored with veterinary input when needed.",
    },
    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "samoyed-club-of-america-health-testing",
          role: "verified",
          locator: "Recommended health certifications and CHIC information",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Screening recommendations indicate conditions worth assessing in breeding programmes; they do not establish disease prevalence or diagnose an individual dog.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "Pet dental care",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-samoyed",
          role: "cited",
          locator: "Breed traits, grooming, exercise, and training",
        },
      ],
      verifiedOn: null,
      note: "Suitability depends on the individual dog's temperament and the owner's time, experience, environment, and care capacity.",
    },
    "suitability.firstTimeOwners": {
  reliability: "unavailable",
  sources: [],
  verifiedOn: null,
  note: "No sufficiently reliable basis was established for a categorical first-time-owner suitability rating.",
},

"suitability.seniorOwners": {
  reliability: "unavailable",
  sources: [],
  verifiedOn: null,
  note: "No sufficiently reliable basis was established for a categorical suitability rating for senior owners; individual mobility, activity, and care needs vary.",
},

"suitability.apartmentLiving": {
  reliability: "unavailable",
  sources: [],
  verifiedOn: null,
  note: "No sufficiently reliable basis was established for a separate apartment-living suitability rating.",
},
    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-samoyed-official-standard",
          role: "verified",
          locator: "Historical summary, general appearance, and classification",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-samoyed-official-standard",
          role: "verified",
          locator: "Origin, classification, coat, colour, and height",
        },
        {
          id: "american-kennel-club-samoyed",
          role: "verified",
          locator: "Size, life expectancy, grooming, exercise, training, and health tests",
        },
        {
          id: "samoyed-club-of-america-health-testing",
          role: "verified",
          locator: "Recommended health certifications and CHIC information",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
  },
  updatedOn: "2026-10-21",
};
