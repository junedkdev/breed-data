import type { Breed } from "../schema/breed.types";

export const posavac_hound: Breed = {
  slug: "posavac-hound",
  name: "Posavac Hound",
  scientificName: null,
  alternateNames: [
    "Posavski Gonič",
    "Posavski Gonic",
    "Posavatz Hound",
    "Posavian Hound",
    "Savetalbracke",
    "Chien Courant de la Vallée de la Save",
    "Sabueso del Valle de Save",
  ],
  group:
    "FCI Group 6 — Scenthounds and related breeds; Section 1.2 — Medium-sized Scenthounds",
  origin: {
    country: "Croatia",
    region: "Posavina, the Sava River valley in Croatia",
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Posavac.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Posavac.jpg",
      title: "Posavac.jpg",
      description:
        "A Posavac Hound photographed at a dog show in Zadar, Croatia.",
      creator: "Mirta12",
      uploader: "Mirta12",
      capturedOn: "2006-04-29",
      uploadedOn: null,
      width: 2048,
      height: 1536,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Mirta12, via Wikimedia Commons, licensed under CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Changes, if any, must be indicated; adaptations must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-13",
    },
  ],
  overview: {
    summary:
      "The Posavac Hound is a medium-sized Croatian scent hound built for endurance in the field. Recognizable by its rectangular frame, short reddish-wheaten coat, and crisp white markings, it pairs remarkable stamina and a resonant hunting voice with strong devotion to its handler. Prospective owners should plan for high scenting drive and daily outdoor activity.",
    description:
      "Muscular and slightly longer than tall at the withers, this sturdy hound moves with balanced, ground-covering efficiency. Its proportional head carries a broad skull, strong muzzle, dark brown oval eyes, and moderately long, rounded hanging ears. The dense, harsh, glossy coat comes in reddish-wheaten shades accented by clear white markings on the head, neck, chest, belly, lower legs, and tail tip. Gentle, lively, and eager to cooperate with familiar people, it can still lock onto an outdoor scent trail, making recall practice and secure lead management essential.",
    history:
      "An ancient Croatian hunting breed rooted in the Sava River valley (Posavina), the Posavac Hound traces back to red-and-white hounds depicted in a 1474 fresco, a 1719 manuscript, and nineteenth-century accounts by Franjo Bertić. Historically traded under the name 'boskini', dogs of this type were first exhibited in 1924, entered the Croatian stud book in 1929, and gained international recognition in 1955.",
    originalPurpose:
      "Scent hunting for hare, fox, and wild boar, as well as working as a leashed tracking hound.",
    currentRoles: [
      "Scent-hound hunting where lawful and appropriate",
      "Leashed tracking and blood-trailing work",
      "Active outdoor companion for households able to meet its exercise needs",
      "Structured scent games and nose-work training",
    ],
  },
  physical: {
    sizeCategory: "Medium",
    height: {
      unit: "cm",
      male: {
        min: 50,
        max: 56,
      },
      female: {
        min: 47,
        max: 53,
      },
    },
    weight: {
      unit: "kg",
      male: {
        min: 16,
        max: 25,
      },
      female: {
        min: 16,
        max: 25,
      },
    },
    lifespanYears: {
      min: 12,
      max: 14,
    },
    coatType:
      "Harsh, dense, shiny, close-lying coat. Hair is short over the body and slightly longer on the backs of the limbs, belly, and underside of the tail.",
    coatLength:
      "Short body coat measuring 2–3 cm, reaching up to 4 cm on the rear of the limbs and forming a light brush under the tail.",
    coatColors: [
      "Reddish-wheaten in varying shades",
      "Reddish-wheaten with crisp white markings on the head",
      "Reddish-wheaten with white markings on the neck, chest, belly, lower legs, and tail tip",
    ],
    sheddingLevel: null,
    droolingLevel: null,
    distinctiveFeatures: [
      "Strong, medium-sized frame built for endurance and smooth movement",
      "Rectangular outline with body length exceeding height at the withers",
      "Reddish-wheaten coat paired with clearly defined white markings",
      "White blaze or stripe on the head, with solid-coloured ears free of white",
      "Optional white collar or stripe on the neck",
      "Oval, dark brown eyes with an attentive expression",
      "Moderately long, flat-hanging triangular ears with rounded tips",
      "Strong muzzle slightly shorter than the skull",
      "Sabre-shaped tail reaching no lower than the hock",
      "Clear, ringing voice used while trailing game",
    ],
  },
  temperament: {
    traits: [
      "Docile and even-tempered",
      "Lively and energetic outdoors",
      "Strongly devoted to its owner",
      "Persistent with high stamina on a trail",
      "Resonant, far-carrying hunting voice",
      "Cooperative and trainable",
    ],
    scores: {
      affection: null,
      withChildren: null,
      withDogs: null,
      withStrangers: null,
      protectiveness: null,
      independence: null,
      trainability: 4,
      barking: 5,
      energy: 4,
    },
  },
  care: {
    exercise: {
      level:
        "High. Built for sustained scent work across varied terrain, this hound needs daily vigorous walks, sniffing opportunities, and structured mental engagement, adjusted for age, fitness, and weather.",
      minutesPerDay: null,
      activities: [
        "Brisk daily walks with ample sniffing time",
        "Reward-based tracking and scent-search games",
        "Leashed trail-following practice in safe, varied terrain",
        "Hiking and outdoor conditioning matched to fitness",
        "Short obedience sessions reinforcing recall and handler check-ins",
      ],
    },
    grooming: {
      level:
        "Low to moderate. The short, dense coat is easy to maintain with weekly brushing and post-walk checks for burrs or ticks.",
      brushing:
        "Brush weekly using a soft bristle brush or rubber grooming mitt to lift loose hair and inspect the skin after field walks.",
      bathing:
        "Bathe only when muddy or soiled using a gentle canine shampoo, rinsing thoroughly to avoid skin dryness.",
      notes: [
        "Check hanging ears weekly for redness, odour, wax, or moisture.",
        "Inspect paws, pads, and between toes after outdoor runs.",
        "Scan the coat for ticks, burrs, or scratches after woodland walks.",
        "Trim nails regularly to keep stride comfortable.",
        "Brush teeth routinely with dog-safe toothpaste.",
      ],
    },
    training: {
      difficulty:
        "Moderate. Cooperative and eager to please its handler, though strong scenting instincts mean reliable recall around wildlife requires patient, consistent practice.",
      tips: [
        "Use clear, reward-based cues and keep sessions engaging.",
        "Train recall progressively in fenced areas before adding distractions.",
        "Use a long line in unfenced spaces near wildlife, livestock, or roads.",
        "Channel trailing instincts into structured nose-work games.",
        "Reward calm settling indoors alongside attentive outdoor check-ins.",
      ],
      socialization:
        "Introduce puppies gradually and positively to varied people, calm dogs, handling, household sounds, and public settings, supervising interactions with children and other animals.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,
      climates: [
        "Provide shade, fresh water, and rest in warm weather.",
        "Avoid heavy exertion during peak heat.",
        "Dry the coat after cold or wet outings and monitor comfort.",
        "A securely fenced yard adds space but does not replace daily walks and scent enrichment.",
      ],
      aloneTimeTolerance: null,
    },
  },
  nutrition: {
    dietType:
      "Complete, balanced dog food tailored to life stage, body condition, activity level, and individual health needs.",
    feedingFrequency: {
      puppy:
        "Feed a balanced puppy formula in multiple measured meals daily according to age and veterinary guidance.",
      adult:
        "Maintain a consistent meal schedule with measured portions to keep a lean, athletic condition.",
      senior:
        "Adjust diet and portions to age, activity, dental health, and any veterinary conditions.",
    },
    guidelines:
      "Select a nutritionally complete diet and tailor portions to weight trends, activity, and body condition rather than fixed averages. Keep fresh water available at all times, make food transitions gradually, and consult a veterinarian for working-dog or weight-management adjustments.",
    considerations: [
      "Working hounds need more calories during active seasons than during rest periods.",
      "Monitor body condition score regularly rather than guessing by eye.",
      "Count training treats within total daily calories.",
      "Avoid sudden diet changes where possible.",
      "Consult a veterinarian for persistent digestive upset or unexplained weight shifts.",
    ],
    note:
      "General canine nutrition guidance; individual portions depend on age, calorie density, workload, and veterinary advice.",
  },
  health: {
    overview:
      "Consulted breed references do not establish a comprehensive breed-wide disease prevalence profile or formal screening schedule for the Posavac Hound, and small regional populations limit statistical health reporting. This lack of data does not mean the breed is free of inherited or acquired conditions. Ask breeders for documented parental health history and keep up routine veterinary care.",
    commonConditions: [],
    preventiveCare: [
      "Schedule regular veterinary exams and keep vaccinations and parasite prevention current.",
      "Maintain a lean body condition and scale exercise to age and fitness.",
      "Inspect ears, coat, paws, nails, and skin routinely, especially after field work.",
      "Use positive handling so the dog is comfortable with grooming and veterinary checks.",
      "Seek veterinary evaluation for persistent changes in appetite, stamina, mobility, or breathing.",
    ],
    recommendedScreenings: [],
    dentalCare:
      "Brush teeth regularly with canine toothpaste and arrange routine veterinary dental checks. Have bad breath, bleeding gums, or chewing difficulty assessed promptly.",
    earCare:
      "Check hanging ears weekly for redness, odour, discharge, or head shaking. Clean gently with a veterinarian-approved solution only when needed.",
    skinCare:
      "Inspect skin during brushing and after outdoor walks for ticks, grass seeds, or persistent itching.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "Handlers interested in scent work, tracking, or lawful hunting",
      "Active households ready for daily vigorous walks and outdoor enrichment",
      "Owners committed to training recall and managing strong scenting instincts",
      "People who appreciate a devoted working hound with structured daily routines",
    ],
    notIdealFor: [
      "Sedentary households wanting a low-energy companion",
      "Owners unable to manage a scent-driven dog securely outdoors",
      "People expecting effortless off-lead recall near wildlife without training",
      "Households where a loud, resonant hound voice would be problematic",
    ],
  },
  funFacts: [
    "Its name comes from Posavina, the fertile Sava River valley in Croatia.",
    "A 1474 fresco depicts a red-and-white hound widely regarded as an early likeness of the breed.",
    "Historical records include a 1719 manuscript and nineteenth-century descriptions of 'boskini' hounds from the Sava valley.",
    "Versatile in the field, it hunts hare, fox, and wild boar and also works as a leashed tracking hound.",
  ],
  faq: [
    {
      question: "Where does the Posavac Hound originate?",
      answer:
        "It originates in Croatia, specifically the Posavina region along the Sava River valley.",
    },
    {
      question: "What was the Posavac Hound bred to do?",
      answer:
        "It was bred as a resilient scent hound for hunting hare, fox, and wild boar, and also excels as a leashed tracking hound.",
    },
    {
      question: "How tall is the Posavac Hound?",
      answer:
        "Adult males measure 50–56 cm at the withers and females measure 47–53 cm, with a ± 2 cm tolerance permitted for dogs of excellent type.",
    },
    {
      question: "How much does the Posavac Hound weigh?",
      answer:
        "Typical adult weight ranges from 16 to 25 kg, depending on sex, build, and conditioning.",
    },
    {
      question: "What does a Posavac Hound look like?",
      answer:
        "It is a medium-sized, rectangular hound with a short reddish-wheaten coat, crisp white markings, close-hanging rounded ears, and a sabre-shaped tail.",
    },
    {
      question: "Is the Posavac Hound easy to train?",
      answer:
        "Generally cooperative and devoted to its owner, it learns well with reward-based training, though strong scenting instincts make recall and long-line management important outdoors.",
    },
    {
      question: "What health problems is the breed known for?",
      answer:
        "No comprehensive breed-wide list of inherited conditions or formal screening protocol is established in consulted sources. Request parental health records from breeders and maintain regular veterinary check-ups.",
    },
  ],
  references: [
    "fci-posavac-hound-standard-154",
    "fci-posavac-hound-nomenclature-154",
    "croatian-ministry-posavac-hound-genebank",
    "swedish-kennel-club-posavski-gonic",
    "commons-posavac-mirta12",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
    "the-dog-api",
  ],
  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-posavac-hound-nomenclature-154",
          role: "verified",
          locator: "Official English, French, German, and Spanish breed names",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names (Posavski Gonic, Posavian Hound)",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Includes official FCI nomenclature names alongside Croatian and English synonyms.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No separate scientific name specific to this domestic dog breed is recorded.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-posavac-hound-standard-154",
          role: "verified",
          locator: "FCI classification: Group 6, Section 1.2",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Follows official FCI breed standard classification; The Dog API lists Hound.",
    },
    origin: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-posavac-hound-standard-154",
          role: "verified",
          locator: "Origin and historical summary",
        },
        {
          id: "croatian-ministry-posavac-hound-genebank",
          role: "verified",
          locator: "Breed history and Croatian origin",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Croatia is the country of origin; Posavina (Sava River valley) is supported by historical records.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-posavac-hound-standard-154",
          role: "verified",
          locator: "Historical summary, general appearance, behaviour, and utilization",
        },
        {
          id: "croatian-ministry-posavac-hound-genebank",
          role: "verified",
          locator: "Breed history, appearance, temperament, and use",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "All user-facing prose is newly written original wording summarizing official standards and historical sources.",
    },
    "overview.currentRoles": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-posavac-hound-standard-154",
          role: "cited",
          locator: "Utilization — hunting and tracking",
        },
      ],
      verifiedOn: null,
      note:
        "Contemporary companion and enrichment roles inferred from the breed's hunting background.",
    },
    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-posavac-hound-standard-154",
          role: "verified",
          locator: "General appearance, proportions, coat, colour, and height (50–56 cm male, 47–53 cm female)",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Official FCI sex-specific height ranges (50–56 cm male, 47–53 cm female) are retained; The Dog API and SKK list a combined 46–58 cm range without separating sexes. Coat colours follow FCI Standard No. 154 rather than The Dog API's species-wide colour list.",
    },
    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (16–25 kg)",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "FCI Standard No. 154 does not publish weight limits; 16–25 kg is sourced from The Dog API, which provides one breed-wide range without separating sexes.",
    },
    "physical.weight.male.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "The Dog API gave one breed-wide weight range (16–25 kg) without separating males and females.",
    },
    "physical.weight.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "The Dog API gave one breed-wide weight range (16–25 kg) without separating males and females.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span (12–14 years)",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "FCI Standard No. 154 does not publish a lifespan; 12–14 years is sourced from The Dog API.",
    },
    "physical.sheddingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Consulted sources describe coat texture and length without establishing a shedding rating.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No breed-specific drooling level was established.",
    },
    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-posavac-hound-standard-154",
          role: "verified",
          locator: "Behaviour / temperament",
        },
        {
          id: "croatian-ministry-posavac-hound-genebank",
          role: "verified",
          locator: "Breed description and temperament",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Traits paraphrase official descriptions; individual behaviour varies.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-posavac-hound-standard-154",
          role: "cited",
          locator: "Trainability, temperament, hunting voice, and stamina",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial estimates, not official ratings; unsupported scores remain null.",
    },
    "temperament.scores.affection": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable numerical affection score was established.",
    },
    "temperament.scores.withChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific score for behaviour with children was established.",
    },
    "temperament.scores.withDogs": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific score for behaviour with other dogs was established.",
    },
    "temperament.scores.withStrangers": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific score for behaviour with strangers was established.",
    },
    "temperament.scores.protectiveness": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable numerical protectiveness score was established.",
    },
    "temperament.scores.independence": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable numerical independence score was established.",
    },
    care: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General canine care guidance adapted to a short-coated scent hound.",
    },
    "care.exercise.level": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-posavac-hound-standard-154",
          role: "cited",
          locator: "Excellent stamina and hunting utilization",
        },
      ],
      verifiedOn: null,
      note:
        "Practical activity estimate inferred from documented stamina and working role.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific daily exercise duration in minutes was established.",
    },
    "care.training.difficulty": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-posavac-hound-standard-154",
          role: "cited",
          locator: "Trainability and scent-hound utilization",
        },
      ],
      verifiedOn: null,
      note:
        "Owner-oriented estimate; the standard notes ease of training without assigning a difficulty score.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Consulted sources do not establish a reliable apartment-suitability rating.",
    },
    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-posavac-hound-standard-154",
          role: "cited",
          locator: "Stamina and hunting utilization",
        },
      ],
      verifiedOn: null,
      note:
        "A fenced yard is helpful for an active hound but does not replace daily walks and enrichment.",
    },
    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General weather-safety guidance, not a breed-specific climate study.",
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific alone-time tolerance rating was established.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Nutritional assessment and individualised feeding guidance",
        },
      ],
      verifiedOn: null,
      note:
        "General canine nutrition guidance, not a breed-specific veterinary prescription.",
    },
    "health.overview": {
      reliability: "general_guidance",
      sources: [
        {
          id: "swedish-kennel-club-posavski-gonic",
          role: "cited",
          locator: "Health — limited numbers available for assessment in Sweden",
        },
      ],
      verifiedOn: null,
      note:
        "Consulted sources do not establish a breed-wide health profile; SKK notes small population limits health assessment.",
    },
    "health.commonConditions": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No dependable breed-specific list of common conditions was established.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General preventive-care guidance; consult a veterinarian for individual care.",
    },
    "health.recommendedScreenings": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No breed-specific screening protocol was established from consulted sources.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "General pet dental-care guidance",
        },
      ],
      verifiedOn: null,
      note:
        "General veterinary dental guidance.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-posavac-hound-standard-154",
          role: "cited",
          locator: "Ear shape and length",
        },
      ],
      verifiedOn: null,
      note:
        "Routine inspection guidance for hanging ears.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Routine coat and skin check guidance.",
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "fci-posavac-hound-standard-154",
          role: "cited",
          locator: "Temperament, stamina, and hunting utilization",
        },
      ],
      verifiedOn: null,
      note:
        "Practical owner-fit estimates, not universal guarantees.",
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal first-time-owner suitability rating was established.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal family-with-children rating was established.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal senior-owner suitability rating was established.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific apartment-living rating was established.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-posavac-hound-standard-154",
          role: "verified",
          locator: "Historical summary and utilization",
        },
        {
          id: "croatian-ministry-posavac-hound-genebank",
          role: "verified",
          locator: "Historical records and breed recognition",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Facts written in original wording from official standard and Croatian breed records.",
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-posavac-hound-standard-154",
          role: "verified",
          locator: "Origin, history, height, coat, colour, temperament, and utilization",
        },
        {
          id: "fci-posavac-hound-nomenclature-154",
          role: "verified",
          locator: "Official breed names and classification",
        },
        {
          id: "swedish-kennel-club-posavski-gonic",
          role: "verified",
          locator: "Breed history and health-information limitations",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-13",
      note:
        "Original answers synthesizing official standards and The Dog API weight range.",
    },
  },
  updatedOn: "2026-11-13",
};
