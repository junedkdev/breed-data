import type { Breed } from "../schema/breed.types";

export const german_shepherd_dog: Breed = {
  slug: "german-shepherd-dog",
  name: "German Shepherd Dog",
  scientificName: null,
  alternateNames: [],
  group: "FCI Group 1 — Sheepdogs and Cattledogs; Section 1 — Sheepdogs",
  origin: {
    country: "Germany",
    region: null,
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/German_shepherd_dogs.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:German_shepherd_dogs.jpg",
      title: "German shepherd dogs.jpg",
      description: "Two German Shepherd Dogs, a male and a female.",
      creator: "7desks",
      uploader: "7desks",
      capturedOn: "2019-06-15",
      uploadedOn: "2019-09-18",
      width: 1536,
      height: 2048,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by 7desks, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate any changes made; adaptations must comply with applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/German_Shepherd_Dog_Alsatian_4.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:German_Shepherd_Dog_Alsatian_4.jpg",
      title: "German Shepherd Dog Alsatian 4.jpg",
      description: "Photograph of a German Shepherd Dog.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: null,
      uploadedOn: "2020-08-24",
      width: 1818,
      height: 1535,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate any changes made; adaptations must comply with applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/German_Shepherd_Dog_Alsatian_3.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:German_Shepherd_Dog_Alsatian_3.jpg",
      title: "German Shepherd Dog Alsatian 3.jpg",
      description: "Photograph of a German Shepherd Dog.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: null,
      uploadedOn: "2020-08-24",
      width: 1740,
      height: 1507,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate any changes made; adaptations must comply with applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
  ],
  overview: {
    summary:
      "The German Shepherd Dog is an athletic, intelligent working breed developed in Germany for herding and versatile service work. It often forms close bonds with its household and can be alert and protective. A good fit depends on providing consistent training, purposeful activity, early socialisation, and responsible handling.",
    description:
      "This powerful, well-muscled dog has an upright-eared, wedge-shaped head, a long muzzle, and a dense coat with an undercoat. Coat varieties include a standard double coat and a long double coat. Black-and-tan or other dark-marked coats are familiar, but the breed standard also recognises several other colours. Individual dogs differ in confidence, sociability, drive, and exercise needs, so temperament should be assessed individually rather than assumed from appearance alone.",
    history:
      "Systematic development of the breed began in Germany in 1899, with a focus on producing a capable, trainable working dog from regional herding dogs. The breed subsequently became widely used in herding, protection, and many forms of service work. Modern German Shepherd Dogs may work in roles such as search and rescue, detection, assistance, and other structured activities, while some live primarily as companions.",
    originalPurpose:
      "Herding and managing livestock, with an emphasis on sound working ability, trainability, and endurance.",
    currentRoles: [
      "Family companion in an active, prepared household",
      "Herding and livestock work",
      "Police and other public-service work",
      "Search and rescue",
      "Detection and tracking",
      "Assistance and other trained service roles",
      "Obedience and dog sports",
    ],
  },
  physical: {
    sizeCategory: "Large",
    height: {
      unit: "cm",
      male: { min: 60, max: 65 },
      female: { min: 55, max: 60 },
    },
    weight: {
      unit: "kg",
      male: { min: 30, max: 40 },
      female: { min: 22, max: 32 },
    },
    lifespanYears: { min: 9, max: 14 },
    coatType: "Double coat with undercoat",
    coatLength: "Short-to-medium outer coat or long outer coat, depending on coat variety",
    coatColors: [
      "Black with reddish-brown markings",
      "Black with brown markings",
      "Black with yellow-to-light-grey markings",
      "Solid black",
      "Grey with darker shading",
      "Black saddle and mask",
    ],
    sheddingLevel: "High; shedding can become especially heavy seasonally",
    droolingLevel: "Low to moderate",
    distinctiveFeatures: [
      "Upright, medium-sized ears",
      "Wedge-shaped head and long muzzle",
      "Strong, athletic, well-muscled body",
      "Dense coat with an undercoat",
      "Long, bushy tail",
      "Smooth, ground-covering trot when correctly built and conditioned",
    ],
  },
  temperament: {
    traits: [
      "Intelligent and responsive to structured training",
      "Often strongly bonded to familiar people",
      "Alert and observant",
      "Can be reserved around unfamiliar people",
      "May show protective behaviour",
      "Typically benefits from regular mental challenges",
      "Individual confidence and sociability vary",
    ],
    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 5,
      independence: 3,
      trainability: 5,
      barking: 4,
      energy: 5,
    },
  },
  care: {
    exercise: {
      level: "High",
      minutesPerDay: { min: 60, max: 120 },
      activities: [
        "Brisk walks and age-appropriate hikes",
        "Reward-based obedience and cue practice",
        "Scent work, tracking, and search games",
        "Fetch or structured play with suitable breaks",
        "Herding, agility, or other supervised dog sports",
        "Food puzzles and problem-solving games",
      ],
    },
    grooming: {
      level: "Moderate to high, especially during seasonal shedding",
      brushing:
        "Brush several times a week; increase frequency when the undercoat sheds heavily. Use a suitable brush and avoid harsh or excessive de-shedding that irritates the skin.",
      bathing:
        "Bathe when dirty or needed, using a dog-appropriate shampoo and rinsing thoroughly. Routine frequent bathing is usually unnecessary unless advised for a skin condition.",
      notes: [
        "Expect regular hair around the home, with heavier seasonal shedding.",
        "Check and trim nails regularly if normal activity does not wear them down.",
        "Check ears for redness, odour, discharge, or irritation.",
        "Brush teeth regularly with dog-safe dental products.",
        "Do not shave the double coat for routine cooling; ask a veterinarian about any medical exception.",
      ],
    },
    training: {
      difficulty: "Moderate to demanding; best for a consistent, engaged handler",
      tips: [
        "Use reward-based training with clear, consistent cues.",
        "Keep sessions varied and appropriate to the dog's age and attention.",
        "Teach calm behaviour, recall, loose-leash walking, and settling skills.",
        "Provide structured mental work as well as physical exercise.",
        "Avoid encouraging uncontrolled guarding, chasing, or confrontational behaviour.",
        "Seek qualified professional help early if fear, reactivity, or aggression develops.",
      ],
      socialization:
        "Introduce the puppy gradually and positively to different people, environments, sounds, surfaces, and suitable dogs. Keep experiences safe and avoid forcing interactions; continue social learning into adulthood.",
    },
    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,
      climates: [
        "Temperate",
        "Cool",
        "Warm weather with shade, water, ventilation, and exercise adjusted to heat",
      ],
      aloneTimeTolerance:
        "Varies by individual. Build alone time gradually and provide exercise, enrichment, and a predictable routine; long periods of isolation may be difficult for some dogs.",
    },
  },
  nutrition: {
    dietType:
      "A complete and balanced diet appropriate to the dog's life stage, body condition, activity, and veterinary needs.",
    feedingFrequency: {
      puppy:
        "Usually several measured meals per day; follow the food label and veterinary advice for the puppy's age and growth.",
      adult:
        "Often two measured meals daily, adjusted to body condition and activity.",
      senior:
        "Meal frequency and energy intake should be adapted to mobility, body condition, appetite, and any diagnosed conditions.",
    },
    guidelines:
      "Measure food portions and monitor body condition rather than relying only on package estimates. Provide fresh water. For puppies expected to become large adults, use a complete diet formulated for large-breed growth and avoid uncontrolled overfeeding. Ask a veterinarian to tailor portions when weight, growth, or health is a concern.",
    considerations: [
      "Keep the dog lean to reduce avoidable stress on joints.",
      "Adjust portions to activity level, age, reproductive status, and body condition.",
      "Avoid sudden diet changes where possible; transition gradually.",
      "Ask a veterinarian before adding supplements or therapeutic diets.",
      "Because gastric dilatation-volvulus is a serious risk in large, deep-chested dogs, discuss individual risk and feeding routines with a veterinarian.",
    ],
    note:
      "These are general feeding principles, not a prescribed calorie target or a substitute for individual veterinary nutrition advice.",
  },
  health: {
    overview:
      "German Shepherd Dogs can live active lives, but breed-associated concerns include orthopaedic and some neurological conditions. Risk varies between individual dogs and lines; a breed label cannot predict an individual diagnosis. Discuss screening history, symptoms, and preventive care with a veterinarian.",
    commonConditions: [
      "Hip dysplasia",
      "Elbow dysplasia",
      "Degenerative myelopathy",
      "Osteochondritis dissecans",
      "Panosteitis",
      "Exocrine pancreatic insufficiency",
      "Pannus (chronic superficial keratitis)",
      "Allergic dermatitis",
      "Perianal fistula",
      "Gastric dilatation-volvulus (bloat)",
    ],
    preventiveCare: [
      "Maintain a healthy body condition and regular, age-appropriate activity.",
      "Arrange routine veterinary examinations and keep vaccinations and parasite prevention up to date.",
      "Discuss mobility changes, persistent digestive symptoms, skin problems, or changes in vision promptly.",
      "Seek emergency veterinary care for signs suggestive of bloat, such as a swollen abdomen, repeated unproductive retching, or sudden severe distress.",
      "Use a veterinarian's advice when planning exercise during growth and when managing an older dog's mobility.",
    ],
    recommendedScreenings: [
      "Hip dysplasia screening through an appropriate recognised programme",
      "Elbow dysplasia screening through an appropriate recognised programme",
      "Temperament assessment consistent with the relevant breed-club health programme",
      "Discuss additional eye, cardiac, thyroid, or genetic tests with the breeder and veterinarian based on the dog's lineage and current programme recommendations",
    ],
    dentalCare:
      "Brush teeth regularly with dog-safe toothpaste and arrange veterinary dental checks. Dental chews or diets should not replace brushing or professional assessment.",
    earCare:
      "Inspect the ears routinely. Clean only when needed and with a dog-safe product; persistent odour, discharge, redness, pain, or head-shaking warrants veterinary assessment.",
    skinCare:
      "Brush regularly to remove loose coat and check the skin for redness, itching, sores, or unusual hair loss. Heavy shedding can be normal, but persistent itching or skin changes should not automatically be attributed to the coat.",
  },
  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,
    idealFor: [
      "Active people who can provide daily exercise and training",
      "Households committed to early and ongoing socialisation",
      "Handlers interested in structured dog sports or working activities",
      "Owners willing to manage shedding and routine health care",
    ],
    notIdealFor: [
      "People seeking a low-exercise, low-engagement dog",
      "Households unable to provide consistent training and supervision",
      "Owners who cannot manage a large, strong dog safely",
      "Homes where the dog would routinely be left alone for long periods without support or enrichment",
    ],
  },
  funFacts: [
    "The breed's systematic development began in 1899 in Germany.",
    "The FCI classifies it among sheepdogs and cattle dogs and specifies a working trial.",
    "The recognised coat varieties include a double coat and a long double coat; both have an undercoat.",
    "The breed standard describes the dog as a versatile working, herding, and service dog.",
  ],
  faq: [
    {
      question: "How much exercise does a German Shepherd Dog need?",
      answer:
        "Many healthy adults need substantial daily physical activity and mental work. About 60–120 minutes is a practical starting estimate for some adults, not a universal prescription. Adjust activity to age, fitness, health, weather, and veterinary advice.",
    },
    {
      question: "Are German Shepherd Dogs good family dogs?",
      answer:
        "They can be good family companions when well socialised, trained, supervised, and given enough activity. Interactions with children should always be supervised, and the dog's individual temperament and the children's behaviour matter.",
    },
    {
      question: "Do German Shepherd Dogs shed a lot?",
      answer:
        "Yes. Their double coat sheds regularly and can shed especially heavily at seasonal changes. Frequent brushing helps manage loose hair, but it will not eliminate shedding.",
    },
    {
      question: "What health screenings should I ask a breeder about?",
      answer:
        "Ask for documented hip and elbow screening and temperament assessment, and discuss the relevant breed-club recommendations with your veterinarian. Additional tests may be appropriate depending on family history and the current screening programme.",
    },
    {
      question: "Are German Shepherd Dogs easy to train?",
      answer:
        "They are often highly trainable, but intelligence alone does not guarantee easy handling. They need consistent reward-based training, early socialisation, clear boundaries, and ongoing mental engagement.",
    },
    {
      question: "Can a German Shepherd Dog live in an apartment?",
      answer:
        "It is possible for some individuals, but it is not the easiest default. Success depends on the dog's needs, daily exercise, enrichment, training, noise management, and access to suitable outdoor activity—not simply the size of the home.",
    },
    {
      question: "What coat colours are recognised?",
      answer:
        "The FCI standard describes black with several brown, reddish-brown, yellow, or light-grey markings, as well as solid black and grey with darker shading. White is not accepted under that standard.",
    },
  ],
  references: [
    "fci-german-shepherd-dog-standard",
    "american-kennel-club-german-shepherd-dog",
    "vcahospitals-german-shepherd",
    "german-shepherd-dog-club-of-america-health-genetics",
    "wikimedia-german-shepherd-dogs-7desks",
    "wikimedia-german-shepherd-dog-alsatian-4-canarian",
    "wikimedia-german-shepherd-dog-alsatian-3-canarian",
  ],
  evidence: {
    alternateNames: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No additional name is recorded because a consistent, source-verified alternative name was not needed for this record.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific scientific name is recorded.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-shepherd-dog-standard",
          role: "verified",
          locator: "FCI Standard No. 166, classification",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-shepherd-dog-standard",
          role: "verified",
          locator: "FCI Standard No. 166, origin",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The official standard identifies Germany as the country of origin but does not establish a single region for this field.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-german-shepherd-dog-standard",
          role: "verified",
          locator: "FCI Standard No. 166, historical overview and utilisation",
        },
        {
          id: "american-kennel-club-german-shepherd-dog",
          role: "verified",
          locator: "Breed profile, description, exercise, and training",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-german-shepherd-dog-standard",
          role: "cited",
          locator: "FCI Standard No. 166, general appearance",
        },
        {
          id: "american-kennel-club-german-shepherd-dog",
          role: "cited",
          locator: "Breed profile",
        },
      ],
      verifiedOn: null,
      note: "Registry descriptions differ between medium-size and large; this display category is a practical summary.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-shepherd-dog-standard",
          role: "verified",
          locator: "FCI Standard No. 166, size and weight",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-shepherd-dog-standard",
          role: "verified",
          locator: "FCI Standard No. 166, size and weight",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "physical.lifespanYears": {
      reliability: "estimate",
      sources: [
        {
          id: "vcahospitals-german-shepherd",
          role: "cited",
          locator: "Breed overview and quick facts",
        },
      ],
      verifiedOn: null,
      note: "Published lifespan ranges vary by source and population; this broad range is an estimate, not a guarantee.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-shepherd-dog-standard",
          role: "verified",
          locator: "FCI Standard No. 166, coat varieties",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-shepherd-dog-standard",
          role: "verified",
          locator: "FCI Standard No. 166, double coat and long double coat",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-shepherd-dog-standard",
          role: "verified",
          locator: "FCI Standard No. 166, colours",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-german-shepherd-dog",
          role: "verified",
          locator: "Breed profile, shedding level",
        },
        {
          id: "vcahospitals-german-shepherd",
          role: "verified",
          locator: "Breed overview, coat and grooming",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vcahospitals-german-shepherd",
          role: "verified",
          locator: "Breed overview, quick facts",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-german-shepherd-dog-standard",
          role: "verified",
          locator: "FCI Standard No. 166, general appearance, head, ears, coat, and gait",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-german-shepherd-dog-standard",
          role: "verified",
          locator: "FCI Standard No. 166, character",
        },
        {
          id: "american-kennel-club-german-shepherd-dog",
          role: "verified",
          locator: "Breed profile and training guidance",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Traits describe tendencies, not guaranteed behaviour in an individual dog.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-german-shepherd-dog",
          role: "cited",
          locator: "Breed profile temperament and activity scales",
        },
      ],
      verifiedOn: null,
      note: "Scores are editorial 1–5 estimates for app comparison, not a validated behavioural test.",
    },
    "care.exercise": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-german-shepherd-dog",
          role: "cited",
          locator: "Breed profile, exercise and dog activities",
        },
        {
          id: "vcahospitals-german-shepherd",
          role: "cited",
          locator: "Breed overview, exercise needs",
        },
      ],
      verifiedOn: null,
      note: "The daily-minute range is a practical estimate for many healthy adults. Age, fitness, health, weather, and individual drive require adjustment.",
    },
    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-german-shepherd-dog",
          role: "verified",
          locator: "Breed profile, coat care and shedding",
        },
        {
          id: "vcahospitals-german-shepherd",
          role: "verified",
          locator: "Breed overview, grooming",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-german-shepherd-dog",
          role: "verified",
          locator: "Breed profile, training and socialisation",
        },
        {
          id: "fci-german-shepherd-dog-standard",
          role: "verified",
          locator: "FCI Standard No. 166, character and working purpose",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "care.livingEnvironment": {
      reliability: "estimate",
      sources: [
        {
          id: "vcahospitals-german-shepherd",
          role: "cited",
          locator: "Breed overview, ideal home environment",
        },
      ],
      verifiedOn: null,
      note: "Suitability varies by dog, routine, climate, training, and the household's ability to meet the dog's needs.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine nutrition guidance only; not a breed-specific prescription.",
    },
    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vcahospitals-german-shepherd",
          role: "verified",
          locator: "Breed overview, health considerations",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vcahospitals-german-shepherd",
          role: "verified",
          locator: "Breed overview, health considerations and listed conditions",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "These are reported breed-associated concerns, not a prediction that an individual dog will develop them.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive-care advice. A veterinarian should tailor care to the individual dog.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "german-shepherd-dog-club-of-america-health-genetics",
          role: "verified",
          locator: "CHIC programme and certificate requirements",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The core breed-club CHIC requirements listed are hip dysplasia, elbow dysplasia, and a passing temperament-test result; additional tests depend on current recommendations and the individual dog's history.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine dental hygiene guidance.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine ear-care guidance.",
    },
    "health.skinCare": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-german-shepherd-dog",
          role: "verified",
          locator: "Breed profile, coat and grooming guidance",
        },
        {
          id: "vcahospitals-german-shepherd",
          role: "verified",
          locator: "Breed overview, skin and coat care",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "vcahospitals-german-shepherd",
          role: "cited",
          locator: "Breed overview, ideal home environment",
        },
        {
          id: "american-kennel-club-german-shepherd-dog",
          role: "cited",
          locator: "Breed profile, exercise and training",
        },
      ],
      verifiedOn: null,
      note: "Suitability labels are editorial guidance, not guarantees. Training, experience, individual temperament, and the household's routine matter.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-german-shepherd-dog-standard",
          role: "verified",
          locator: "FCI Standard No. 166, history, classification, coat, and utilisation",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-german-shepherd-dog-standard",
          role: "verified",
          locator: "FCI Standard No. 166, size, coat, colour, and character",
        },
        {
          id: "american-kennel-club-german-shepherd-dog",
          role: "verified",
          locator: "Breed profile, exercise, grooming, and training",
        },
        {
          id: "german-shepherd-dog-club-of-america-health-genetics",
          role: "verified",
          locator: "Health screening recommendations",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
  },
  updatedOn: "2026-10-21",
};
