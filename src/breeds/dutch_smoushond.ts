import type { Breed } from "../schema/breed.types";

export const dutch_smoushond: Breed = {
  slug: "dutch-smoushond",
  name: "Dutch Smoushond",
  scientificName: null,
  alternateNames: ["Hollandse Smoushond", "Smous", "Dutch Ratter"],
  group:
    "FCI Group 2 — Pinscher and Schnauzer type, Molossian and Swiss Mountain and Cattle Dogs; Section 1.3 — Pinscher and Schnauzer type; without working trial",
  origin: {
    country: "The Netherlands",
    region: "Amsterdam and the surrounding Netherlands; a more specific geographic origin is not established by the sources consulted",
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hollandse_Smoushond_Amsterdam.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Hollandse_Smoushond_Amsterdam.jpg",
      title: "Hollandse Smoushond Amsterdam.jpg",
      description: "A Dutch Smoushond beside a canal in Amsterdam.",
      creator: "ZeppWeb",
      uploader: "Abujoy",
      capturedOn: null,
      uploadedOn: "2014-03-03",
      width: 612,
      height: 612,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by ZeppWeb, via Wikimedia Commons, CC BY 2.0 (https://creativecommons.org/licenses/by/2.0/). Indicate any changes made; no endorsement is implied.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hollandse_Smoushond_01.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Hollandse_Smoushond_01.jpg",
      title: "Hollandse Smoushond 01.jpg",
      description: "A Dutch Smoushond photographed in Amsterdam.",
      creator: "Zepp Web",
      uploader: "Abujoy",
      capturedOn: null,
      uploadedOn: "2014-03-03",
      width: 612,
      height: 612,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Zepp Web, via Wikimedia Commons, CC BY 2.0 (https://creativecommons.org/licenses/by/2.0/). Indicate any changes made; no endorsement is implied.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hollandse_Smoushond_02.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Hollandse_Smoushond_02.jpg",
      title: "Hollandse Smoushond 02.jpg",
      description: "A Dutch Smoushond photographed in Amsterdam; the Commons file page records a 2014 upload.",
      creator: "Zepp Web",
      uploader: "Abujoy",
      capturedOn: null,
      uploadedOn: "2014-03-03",
      width: 453,
      height: 612,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Zepp Web, via Wikimedia Commons, CC BY 2.0 (https://creativecommons.org/licenses/by/2.0/). Indicate any changes made; no endorsement is implied.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
  ],
  overview: {
    summary:
      "The Dutch Smoushond is a small-to-medium, sturdy Dutch companion breed with a rough yellow coat, distinctive beard and eyebrows, and a lively, people-oriented nature. It was historically kept around horse stables and carriages, where it helped control rats and other vermin.",
    description:
      "Compact and nearly square in outline, the Dutch Smoushond is recognised by its coarse, wiry coat and longer facial furnishings. The breed standard describes a friendly, affectionate and spirited dog rather than a nervous or excessively excitable one. It generally benefits from daily activity, company, positive training and opportunities to investigate its surroundings. Individual energy, sociability and prey interest still vary, so early socialisation and sensible supervision matter.",
    history:
      "The breed became popular in the Netherlands during the nineteenth century, particularly among people associated with horse-and-carriage travel and stable work. Its exact ancestry is uncertain, although the yellow Schnauzer is commonly cited as a possible contributor. After registrations dwindled and the last litter entered the Dutch studbook in 1949, a reconstruction effort began in 1973 using dogs that resembled the historic type. The national breed club has supported the breed since 1978.",
    originalPurpose:
      "A companion and stable dog associated with horse-and-carriage owners, also used to catch rats and other vermin around stables.",
    currentRoles: [
      "Companion dog",
      "Family companion in a household able to provide daily activity and company",
      "Reward-based obedience and trick training",
      "Scent games and other supervised enrichment activities",
    ],
  },
  physical: {
    sizeCategory: "Small to medium",
    height: {
      unit: "cm",
      male: { min: 37, max: 42 },
      female: { min: 35, max: 40 },
    },
    weight: {
      unit: "kg",
      male: { min: 7, max: 11 },
      female: { min: 7, max: 11 },
    },
    lifespanYears: { min: 12, max: 15 },
    coatType:
      "Coarse, hard, straight, wiry outer coat with a sufficient undercoat; a woolly or curly coat and a tendency to mat are undesirable in the standard.",
    coatLength:
      "Approximately 4–7 cm on the body, with longer hair forming a moustache, beard and eyebrows; leg hair is somewhat shorter and the tail is bushy.",
    coatColors: ["Yellow in various shades", "Dark straw yellow is preferred; facial furnishings and ears may be darker yellow"],
    sheddingLevel: null,
    droolingLevel: null,
    distinctiveFeatures: [
      "Rough, wiry yellow coat",
      "Longer facial furnishings forming a moustache, beard and eyebrows",
      "Large, round, dark-brown eyes with a lively expression",
      "Compact, sturdy, nearly square build",
      "Relatively small, high-set, drooping ears",
    ],
  },
  temperament: {
    traits: [
      "Affectionate and people-oriented",
      "Cheerful and lively",
      "Friendly and generally free-spirited",
      "Sensitive to harsh handling",
      "Intelligent and often keen to learn",
      "May show interest in chasing small animals, reflecting its historical vermin-catching role",
      "Often prefers being near its household rather than left alone for long periods",
    ],
    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: 2,
      independence: 2,
      trainability: 4,
      barking: 3,
      energy: 4,
    },
  },
  care: {
    exercise: {
      level: "Moderate; active and playful, but a universal daily-minute prescription was not established.",
      minutesPerDay: null,
      activities: [
        "Daily walks adapted to age, health and fitness",
        "Supervised sniffing and scent-search games",
        "Short, varied reward-based training sessions",
        "Play and safe exploration",
        "Recall and lead practice around distractions",
      ],
    },
    grooming: {
      level: "Moderate, with periodic hand-stripping for the typical harsh coat",
      brushing:
        "The ideal harsh, wiry coat is usually hand-stripped about twice a year when the coat is ready. Brushing is not necessarily required for every coat type; check longer hair for tangles and ask a knowledgeable groomer or breeder for advice if the coat is softer or mats easily.",
      bathing:
        "Bathe when needed rather than on a fixed schedule, using a dog-appropriate shampoo and rinsing thoroughly.",
      notes: [
        "Have a groomer or experienced breeder demonstrate hand-stripping before attempting it yourself.",
        "Check the armpits and hair beneath the tail for tangles or debris.",
        "Check ears routinely and clean only as advised by a veterinarian.",
        "Keep nails at a comfortable length and inspect paws after walks.",
        "Introduce tooth brushing gradually and use dog-safe toothpaste.",
      ],
    },
    training: {
      difficulty: "Often responsive to training when it is gentle, consistent and varied.",
      tips: [
        "Use rewards, play and brief sessions; avoid harsh corrections.",
        "Teach recall and calm lead walking early, then practise around gradually increasing distractions.",
        "Introduce handling, grooming, household sounds and visitors in a positive, gradual way.",
        "Build alone-time tolerance in small steps from puppyhood rather than suddenly leaving the dog for long periods.",
        "Practise calm disengagement from small animals and moving objects; use a lead or secure area where needed.",
      ],
      socialization:
        "Start early and continue throughout life, using positive, controlled exposure to people, dogs, handling and everyday environments. Supervise interactions with children and smaller pets.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: null,
      climates: ["No breed-specific climate-tolerance range was established; provide shelter, water and activity suited to local weather."],
      aloneTimeTolerance:
        "The breed tends to value company. It can learn to remain alone for a few hours when this is introduced gradually from a young age; individual tolerance varies.",
    },
  },
  nutrition: {
    dietType: "A complete and balanced dog food appropriate to the dog's life stage, body condition and health needs.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Choose a nutritionally complete diet suitable for the dog's life stage and monitor body condition, growth and weight. Adjust portions to activity and individual needs, keep fresh water available, and discuss medical or weight concerns with a veterinarian.",
    considerations: [
      "Measure portions and account for treats when managing body condition.",
      "Avoid sudden diet changes; transition gradually unless a veterinarian advises otherwise.",
      "Seek veterinary advice for persistent digestive signs, weight change or suspected food reactions.",
    ],
    note: "No breed-specific feeding quantity or meal-frequency rule was established from the sources consulted; needs vary with age, activity, body condition and health.",
  },
  health: {
    overview:
      "The Dutch breed club describes a breeding approach that prioritises health and temperament and reports no inherited disorder currently identified as requiring special breed-specific attention. That is not a guarantee that an individual dog will never develop an inherited or acquired condition. Ask for the dog's veterinary history and follow routine preventive care with a veterinarian.",
    commonConditions: [],
    preventiveCare: [
      "Maintain regular veterinary wellness visits and age-appropriate vaccination and parasite prevention.",
      "Keep the dog at a healthy body condition and provide regular, age-appropriate exercise.",
      "Monitor changes in appetite, mobility, skin, eyes, ears, teeth, behaviour or energy and seek veterinary advice when concerned.",
      "Ask the breeder and veterinarian about current breed-club recommendations and the health history of the dog's family line.",
    ],
    recommendedScreenings: [
      "No mandatory breed-specific screening test was identified in the consulted Dutch breed information; ask the breeder and veterinarian about current recommendations and family history.",
    ],
    dentalCare:
      "Brush regularly with dog-safe toothpaste when tolerated, provide appropriate dental care, and arrange veterinary checks for bad breath, pain, bleeding gums or difficulty eating.",
    earCare:
      "Inspect the ears routinely for redness, odour, discharge or discomfort. Do not insert cotton swabs deeply; consult a veterinarian if signs of irritation occur.",
    skinCare:
      "Check the skin while grooming and after outdoor activity. For the typical wiry coat, learn the appropriate stripping method from a knowledgeable groomer; seek veterinary advice for persistent itching, sores or hair loss.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "People who want an affectionate, lively companion and can include the dog in everyday life",
      "Households willing to provide daily walks, play and positive training",
      "Owners prepared to learn the grooming needs of a wiry, hand-stripped coat",
    ],
    notIdealFor: [
      "Households that routinely leave a dog alone for long periods without gradual training or support",
      "People seeking a completely low-maintenance coat without periodic grooming",
      "Homes unable to manage the dog's possible interest in small animals safely",
    ],
  },
  funFacts: [
    "The breed's name is linked to its rough, bearded appearance; historically, it was distinguished from the Brussels Griffon.",
    "The first breed standard dates to 1905, and the modern breed was reconstructed after registrations had stopped for a period following the Second World War.",
    "The breed's original stable work included catching rats and other vermin as well as accompanying people around horse-and-carriage settings.",
  ],
  faq: [
    {
      question: "Where does the Dutch Smoushond come from?",
      answer:
        "It is a Dutch breed associated with nineteenth-century stable and carriage life, especially in Amsterdam. Its exact ancestry is uncertain, although the yellow Schnauzer is often mentioned as a possible contributor.",
    },
    {
      question: "How big is a Dutch Smoushond?",
      answer:
        "The breed standard gives approximate heights of 37–42 cm for males and 35–40 cm for females. It lists a breed-wide weight range of 7–11 kg rather than separate male and female ranges.",
    },
    {
      question: "What coat colours are accepted?",
      answer:
        "The standard describes a yellow coat in different shades, preferring dark straw yellow. The ears, moustache, beard and eyebrows may be darker yellow; other colours are undesirable under the standard.",
    },
    {
      question: "How much grooming does the breed need?",
      answer:
        "The typical harsh, wiry coat is generally hand-stripped around twice a year when ready. Coat texture varies, so ask a knowledgeable groomer or breeder to show you the right approach for your dog's coat.",
    },
    {
      question: "Is the Dutch Smoushond easy to train?",
      answer:
        "Many are willing learners, but they respond best to patient, consistent and reward-based methods. Keep sessions varied and start recall, socialisation and calm behaviour around small animals early.",
    },
    {
      question: "Can a Dutch Smoushond live in an apartment?",
      answer:
        "A universal yes-or-no answer is not supported by the sources consulted. Suitability depends on the individual dog's activity, training, noise management, access to walks and how much company it receives.",
    },
    {
      question: "Does the Dutch Smoushond have known inherited health problems?",
      answer:
        "The Dutch breed club reports no inherited disorder currently identified as needing special breed-specific attention, but that does not rule out illness in an individual dog. Ask for health history and maintain routine veterinary care.",
    },
    {
      question: "How long does a Dutch Smoushond live?",
      answer:
        "One Dutch breed-information source gives a typical estimate of about 12–15 years. This is an estimate rather than a guarantee; lifespan varies with genetics, health, care and chance.",
    },
  ],
  references: [
    "fci-dutch-smoushond-standard",
    "fci-dutch-smoushond-nomenclature",
    "hollandse-smoushonden-club-standard",
    "hollandse-smoushonden-club-health-character",
    "licg-hollandse-smoushond",
    "nhic-hollandse-smoushond",
    "wikimedia-dutch-smoushond-zepp-amsterdam",
    "wikimedia-dutch-smoushond-zepp-01",
    "wikimedia-dutch-smoushond-zepp-02",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
  ],
  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "verified", locator: "Breed name and historical summary" },
        { id: "licg-hollandse-smoushond", role: "verified", locator: "Breed name and commonly used short form" },
      ],
      verifiedOn: "2026-10-21",
      note: "The Dutch name and short form are documented; 'Dutch Ratter' describes historical use and is not presented as an official registry name.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific scientific name was established by the consulted sources.",
    },
    group: {
      reliability: "official_standard",
      sources: [{ id: "fci-dutch-smoushond-standard", role: "verified", locator: "FCI classification" }],
      verifiedOn: "2026-10-21",
      note: null,
    },
    origin: {
      reliability: "reliable_source",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "verified", locator: "Origin and historical summary" },
        { id: "licg-hollandse-smoushond", role: "verified", locator: "Origin and history" },
      ],
      verifiedOn: "2026-10-21",
      note: "The breed's country of origin is the Netherlands; Amsterdam is documented in its historical account, but a more precise geographic origin is not asserted.",
    },
    "origin.country": {
      reliability: "official_standard",
      sources: [{ id: "fci-dutch-smoushond-standard", role: "verified", locator: "Origin" }],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "origin.region": {
      reliability: "reliable_source",
      sources: [{ id: "fci-dutch-smoushond-standard", role: "verified", locator: "Historical summary: Amsterdam stable and carriage context" }],
      verifiedOn: "2026-10-21",
      note: "Amsterdam is described as a historical context, not a formally proven exclusive point of origin.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "verified", locator: "Historical summary, utilisation, general appearance and temperament" },
        { id: "licg-hollandse-smoushond", role: "verified", locator: "History and breed profile" },
      ],
      verifiedOn: "2026-10-21",
      note: "User-facing text is an original paraphrase of breed history and standard characteristics.",
    },
    "overview.originalPurpose": {
      reliability: "official_standard",
      sources: [{ id: "fci-dutch-smoushond-standard", role: "verified", locator: "Historical summary and utilisation" }],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "overview.currentRoles": {
      reliability: "estimate",
      sources: [{ id: "licg-hollandse-smoushond", role: "cited", locator: "Modern companion and activity guidance" }],
      verifiedOn: null,
      note: "These are plausible modern activities, not a claim that every dog is suited to every activity.",
    },
    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [{ id: "fci-dutch-smoushond-standard", role: "cited", locator: "Height and weight" }],
      verifiedOn: null,
      note: "Small-to-medium is a catalogue category inferred from the standard's measurements.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [{ id: "fci-dutch-smoushond-standard", role: "verified", locator: "Size and weight: height at the withers" }],
      verifiedOn: "2026-10-21",
      note: "Approximate sex-specific height ranges follow the FCI standard.",
    },
    "physical.weight": {
      reliability: "official_standard",
      sources: [{ id: "fci-dutch-smoushond-standard", role: "verified", locator: "Size and weight: weight" }],
      verifiedOn: "2026-10-21",
      note: "The standard gives one breed-wide range of 7–11 kg, not separate sex-specific ranges; the same range is stored in both schema slots to preserve that fact without inventing a sex distinction.",
    },
    "physical.lifespanYears": {
      reliability: "estimate",
      sources: [
        { id: "licg-hollandse-smoushond", role: "cited", locator: "General breed information: average age and older reported dogs" },
        { id: "nhic-hollandse-smoushond", role: "cited", locator: "Breed data: life expectancy" },
      ],
      verifiedOn: null,
      note: "A secondary-source estimate of 12–15 years; individual lifespan varies and this is not an official standard value.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [{ id: "fci-dutch-smoushond-standard", role: "verified", locator: "Coat: hair and undercoat" }],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [{ id: "fci-dutch-smoushond-standard", role: "verified", locator: "Coat: length and facial furnishings" }],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [{ id: "fci-dutch-smoushond-standard", role: "verified", locator: "Coat: colour" }],
      verifiedOn: "2026-10-21",
      note: "The standard prefers yellow shades, especially dark straw yellow; other colours are described as undesirable.",
    },
    "physical.sheddingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The standard describes coat texture and undercoat but does not quantify shedding, so no categorical level is assigned.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling level was established.",
    },
    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [{ id: "fci-dutch-smoushond-standard", role: "verified", locator: "General appearance, head, eyes, ears and coat" }],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "verified", locator: "Behaviour and temperament" },
        { id: "licg-hollandse-smoushond", role: "verified", locator: "Character and household behaviour" },
      ],
      verifiedOn: "2026-10-21",
      note: "These describe typical tendencies; behaviour depends on the individual dog, training and experience.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "cited", locator: "Temperament description" },
        { id: "licg-hollandse-smoushond", role: "cited", locator: "Character and behaviour" },
      ],
      verifiedOn: null,
      note: "Scores are editorial estimates on a 1–5 scale, not standardised behavioural measurements.",
    },
    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [{ id: "licg-hollandse-smoushond", role: "verified", locator: "Activity, play and exercise needs" }],
      verifiedOn: "2026-10-21",
      note: "Qualitative guidance; adjust activity to age, health and individual temperament.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No source reviewed establishes a universal daily exercise-minute target for this breed.",
    },
    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [{ id: "licg-hollandse-smoushond", role: "cited", locator: "Activity and training guidance" }],
      verifiedOn: null,
      note: "Activities are practical suggestions, not a prescribed exercise programme.",
    },
    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        { id: "licg-hollandse-smoushond", role: "verified", locator: "Coat care and hand-stripping" },
        { id: "hollandse-smoushonden-club-standard", role: "verified", locator: "Coat texture and length" },
      ],
      verifiedOn: "2026-10-21",
      note: "Coat type varies among individuals; grooming should be adapted to the dog's actual coat.",
    },
    "care.training": {
      reliability: "reliable_source",
      sources: [{ id: "licg-hollandse-smoushond", role: "verified", locator: "Training and upbringing" }],
      verifiedOn: "2026-10-21",
      note: "The difficulty description is qualitative, not a formal test score.",
    },
    "care.training.tips": {
      reliability: "general_guidance",
      sources: [{ id: "licg-hollandse-smoushond", role: "cited", locator: "Positive training, socialisation and alone-time advice" }],
      verifiedOn: null,
      note: "Practical training advice; results vary by dog and context.",
    },
    "care.training.socialization": {
      reliability: "general_guidance",
      sources: [{ id: "licg-hollandse-smoushond", role: "cited", locator: "Socialisation and child/pet supervision" }],
      verifiedOn: null,
      note: "General humane socialisation advice informed by breed-specific behaviour notes.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A categorical apartment-suitability answer is not established by the consulted sources.",
    },
    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A yard may provide outdoor space but does not establish a universal housing-suitability answer.",
    },
    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "This is general weather-safety advice, not a measured breed-specific climate-tolerance claim.",
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "reliable_source",
      sources: [{ id: "licg-hollandse-smoushond", role: "verified", locator: "Staying home alone" }],
      verifiedOn: "2026-10-21",
      note: "The source says the dog prefers company but can learn to stay alone for a few hours with gradual training; individual tolerance varies.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [{ id: "wsava-global-nutrition-guidelines", role: "cited", locator: "Nutritional assessment and individualised feeding guidance" }],
      verifiedOn: null,
      note: "General veterinary nutrition guidance; no breed-specific ration is asserted.",
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific meal-frequency schedule was established; ask a veterinarian to tailor feeding to age and needs.",
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific meal-frequency schedule was established; ask a veterinarian to tailor feeding to age and needs.",
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific meal-frequency schedule was established; ask a veterinarian to tailor feeding to age and needs.",
    },
    "health.overview": {
      reliability: "reliable_source",
      sources: [{ id: "hollandse-smoushonden-club-health-character", role: "verified", locator: "Health and breeding policy" }],
      verifiedOn: "2026-10-21",
      note: "Club-reported health policy is described with a caveat; it is not interpreted as proof that every dog is disease-free.",
    },
    "health.commonConditions": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific condition list with reliable prevalence evidence was established; an empty list avoids implying that the breed is disease-free.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive-care guidance; it does not replace individual veterinary advice.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [{ id: "licg-hollandse-smoushond", role: "verified", locator: "Inherited disease research and breeding tests" }],
      verifiedOn: "2026-10-21",
      note: "The source reports no mandatory tests for parent dogs based on the research it describes; recommendations can change and family history remains relevant.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [{ id: "avma-pet-dental-care", role: "cited", locator: "Preventive dental care" }],
      verifiedOn: null,
      note: "General veterinary dental-care guidance.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine ear-care advice, not a breed-specific medical claim.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [{ id: "licg-hollandse-smoushond", role: "cited", locator: "Coat care and skin checks" }],
      verifiedOn: null,
      note: "Routine skin and coat care advice.",
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal first-time-owner suitability label is not established; preparation, support and individual temperament vary.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Family suitability depends on the individual dog, children's ages, supervision and household circumstances.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal senior-owner suitability label is not established by the consulted sources.",
    },
    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [{ id: "licg-hollandse-smoushond", role: "cited", locator: "Activity and play needs" }],
      verifiedOn: null,
      note: "This is a practical owner-fit estimate, not a formal suitability test.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A categorical apartment-living label is not established by the consulted sources.",
    },
    "suitability.idealFor": {
      reliability: "estimate",
      sources: [{ id: "licg-hollandse-smoushond", role: "cited", locator: "Companionship, activity and grooming needs" }],
      verifiedOn: null,
      note: "Practical owner-fit suggestions, not guarantees of behaviour or compatibility.",
    },
    "suitability.notIdealFor": {
      reliability: "estimate",
      sources: [{ id: "licg-hollandse-smoushond", role: "cited", locator: "Alone-time, coat-care and prey-interest guidance" }],
      verifiedOn: null,
      note: "Practical ownership considerations rather than a formal behavioural assessment.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [{ id: "fci-dutch-smoushond-standard", role: "verified", locator: "Historical summary and first breed standard" }],
      verifiedOn: "2026-10-21",
      note: "Historical facts are paraphrased from the official standard.",
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "verified", locator: "Origin, classification, measurements, coat and colour" },
        { id: "licg-hollandse-smoushond", role: "verified", locator: "History, grooming, training, health and lifespan" },
        { id: "nhic-hollandse-smoushond", role: "cited", locator: "Secondary lifespan estimate" },
      ],
      verifiedOn: "2026-10-21",
      note: "Answers are paraphrased and avoid guarantees about health, lifespan, behaviour or housing suitability.",
    },
  },
  updatedOn: "2026-10-21",
};
