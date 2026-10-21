import type { Breed } from "../schema/breed.types";

export const stabyhoun: Breed = {
  slug: "stabyhoun",
  name: "Stabyhoun",
  scientificName: null,
  alternateNames: ["Stabijhoun", "Friese Stabij", "Frisian Pointer"],
  group:
    "FCI Group 7 — Pointing Dogs; Section 1.2 — Continental Pointing Dogs, Spaniel type; with working trial",
  origin: {
    country: "The Netherlands",
    region: "Friesland",
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Stabijhoun.JPG",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Stabijhoun.JPG",
      title: "Stabijhoun.JPG",
      description: "A Friese Stabij named Dobber fan it Wolderhiem.",
      creator: "Werkpaard",
      uploader: "Werkpaard",
      capturedOn: "2013-06-02",
      uploadedOn: "2013-07-24",
      width: 4288,
      height: 2848,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Werkpaard, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Indicate any changes made; adaptations must comply with applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Friesestabijs01.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Friesestabijs01.jpg",
      title: "Friesestabijs01.jpg",
      description: "Two Friese Stabijs.",
      creator: "Mjk23",
      uploader: "Mjk23",
      capturedOn: null,
      uploadedOn: "2009-04-03",
      width: 2576,
      height: 1932,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Mjk23, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Indicate any changes made; adaptations must comply with applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Stabyhoun.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Stabyhoun.jpg",
      title: "Stabyhoun.jpg",
      description: "A Stabyhoun photographed at an agility event.",
      creator: "Steffen Heinz (Caronna)",
      uploader: "Caronna",
      capturedOn: "2005-04-24",
      uploadedOn: "2005-04-24",
      width: 1495,
      height: 1278,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Steffen Heinz (Caronna), via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Indicate any changes made; adaptations must comply with applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
  ],
  overview: {
    summary:
      "The Stabyhoun is a medium-sized Dutch pointing dog known for its affectionate nature, intelligence, and independent working style. Developed as an all-round farm dog, it traditionally helped with hunting and pest control. It can be a devoted companion for people who provide regular activity, patient training, and opportunities to explore scents and solve problems.",
    description:
      "The Stabyhoun has a sturdy, balanced body that is slightly longer than it is tall. Its medium-length coat is fairly straight, with longer feathering on parts of the legs, chest, collar, and tail. Black-and-white and brown-and-white patterns are characteristic, including roan and ticking variations. At home, a well-guided Stabyhoun can be calm and attentive; outdoors, its curiosity and independent instincts may lead it to investigate interesting scents and wildlife. Consistent, reward-based training and safe supervision help channel these tendencies.",
    history:
      "The breed developed in Friesland in the northern Netherlands as a practical all-round farm dog. Traditional work included pointing and retrieving game, guarding property, catching rodents and moles, and helping with other farm tasks. Some larger dogs were also used to pull small milk carts. The Stabyhoun became more widely known outside its home region during the twentieth century and is now kept as a companion and for suitable canine activities.",
    originalPurpose:
      "A versatile farm and hunting dog used for pointing and retrieving game, guarding property, and controlling rodents and moles.",
    currentRoles: [
      "Companion dog",
      "Hunting and retrieving partner where appropriately trained",
      "Scent work and tracking",
      "Agility and obedience",
      "Other suitable canine sports",
      "Watchful household companion",
    ],
  },
  physical: {
    sizeCategory: "Medium",
    height: {
      unit: "cm",
      male: { min: 50, max: 53 },
      female: { min: 48, max: 50 },
    },
    weight: {
      unit: "kg",
      male: { min: 22, max: 27 },
      female: { min: 18, max: 23 },
    },
    lifespanYears: null,
    coatType:
      "Medium-length, fairly straight coat with a weather-resistant undercoat; a slight wave over the croup may be accepted by the standard.",
    coatLength:
      "Medium overall, with shorter hair on the head and front of the limbs and longer feathering on the chest, collar, legs, and tail.",
    coatColors: [
      "Black and white",
      "Brown and white",
      "Black roan with white",
      "Brown roan with white",
    ],
    sheddingLevel:
      "Moderate; loose hair may increase during seasonal shedding.",
    droolingLevel: null,
    distinctiveFeatures: [
      "Sturdy, balanced body that is slightly longer than its height at the withers",
      "Long head and attentive expression",
      "Medium-length coat with feathering on the chest, collar, legs, and tail",
      "White markings that may include roaning or ticking",
      "Athletic build suited to varied work",
    ],
  },
  temperament: {
    traits: [
      "Affectionate with familiar people",
      "Gentle when handled thoughtfully",
      "Intelligent and observant",
      "Independent and sometimes strong-willed",
      "Curious and inclined to investigate",
      "Watchful and alert to unusual activity",
      "Often responsive to patient, reward-based training",
    ],
    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 3,
      independence: 4,
      trainability: 4,
      barking: 3,
      energy: 4,
    },
  },
  care: {
    exercise: {
      level: "Moderate to high",
      minutesPerDay: null,
      activities: [
        "Daily walks suited to age and fitness",
        "Supervised sniffing and scent-search games",
        "Retrieving games in safe locations",
        "Reward-based obedience and trick training",
        "Suitable field, tracking, agility, or water activities",
      ],
    },
    grooming: {
      level: "Low to moderate",
      brushing:
        "Brush regularly to remove loose hair and check the feathering. Increase brushing during seasonal shedding, paying particular attention behind the ears and around the trousers and tail.",
      bathing:
        "Bathe when needed rather than on a fixed schedule. Use a dog-appropriate shampoo when necessary and rinse thoroughly.",
      notes: [
        "Inspect the coat after outdoor activity for burrs, plant material, and tangles.",
        "Check and clean the ears when needed, especially after swimming or wet outdoor work.",
        "Keep nails trimmed and check paws routinely.",
        "Brush teeth with dog-safe toothpaste and arrange routine dental checks.",
      ],
    },
    training: {
      difficulty: "Moderate; patience and consistency are important.",
      tips: [
        "Use rewards, play, and short sessions to keep training positive.",
        "Teach recall and safe lead skills early, increasing distractions gradually.",
        "Provide scent games and problem-solving tasks to channel curiosity.",
        "Keep sessions varied and stop before the dog becomes frustrated.",
        "Use secure management around wildlife and unfamiliar environments.",
      ],
      socialization:
        "Introduce the dog gradually and positively to different people, dogs, environments, handling, and everyday sounds. Continue training through adolescence and adulthood. Socialization supports confidence but does not guarantee that every dog will enjoy every situation.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: null,
      climates: [
        "Provide shade, fresh water, and good ventilation in hot weather.",
        "In cold or wet weather, provide a dry and comfortable resting place.",
      ],
      aloneTimeTolerance: null,
    },
  },
  nutrition: {
    dietType:
      "A complete and balanced diet appropriate to the dog's life stage, body condition, activity, and individual health needs.",
    feedingFrequency: {
      puppy:
        "Usually several small meals per day; adjust the schedule to age, growth, food instructions, and veterinary advice.",
      adult:
        "Often divided into two meals per day, adjusted to the dog's needs and routine.",
      senior:
        "Choose a suitable diet and schedule according to body condition, activity, and veterinary guidance.",
    },
    guidelines:
      "Measure food portions, monitor body condition and weight, and adjust intake as activity or life stage changes. Include treats in the daily calorie total. Fresh water should always be available. Consult a veterinarian if weight, appetite, or digestion changes unexpectedly.",
    considerations: [
      "Match food intake to activity and monitor body condition.",
      "Avoid assuming all Stabyhouns need the same amount of food.",
      "Make diet changes gradually when practical.",
      "Discuss supplements, persistent digestive problems, and therapeutic diets with a veterinarian.",
    ],
    note:
      "This is general feeding guidance, not a prescribed diet or a breed-specific calorie calculation.",
  },
  health: {
    overview:
      "The breed's health-screening programme includes eye, hip, and elbow examinations for breeding dogs. Screening recommendations help responsible breeders manage risks; they do not diagnose an individual dog or guarantee that disease will be absent. Reliable breed-specific prevalence estimates for major diseases were not established for this record.",
    commonConditions: [],
    preventiveCare: [
      "Arrange routine veterinary examinations and maintain vaccinations and parasite prevention appropriate to local risk.",
      "Maintain a healthy body condition and age-appropriate exercise.",
      "Ask breeders for documented health-screening results and relevant family history.",
      "Seek veterinary advice for persistent lameness, eye changes, unusual coordination, or sustained changes in appetite or behaviour.",
    ],
    recommendedScreenings: [
      "Hip dysplasia assessment through a recognised veterinary screening programme",
      "Elbow dysplasia assessment through a recognised veterinary screening programme",
      "Eye examination by an appropriately qualified veterinary eye specialist",
      "Ask the breeder and veterinarian about any additional screening recommended for the current breeding line",
    ],
    dentalCare:
      "Brush teeth regularly with dog-specific toothpaste and arrange veterinary dental checks. Seek advice for persistent bad breath, pain, bleeding, or difficulty eating.",
    earCare:
      "Inspect the ears regularly and after swimming or muddy outings. Clean only when needed with a dog-safe product. Redness, odour, discharge, pain, or repeated head-shaking should be assessed by a veterinarian.",
    skinCare:
      "Check the skin while brushing, particularly beneath feathering and around the ears. Persistent itching, sores, unusual hair loss, or recurrent irritation warrants veterinary assessment.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "People who enjoy daily walks, training, and outdoor activities",
      "Owners willing to guide an intelligent, curious dog patiently",
      "Households interested in scent work, retrieving, or canine sports",
      "People who can provide companionship, enrichment, and safe supervision",
    ],
    notIdealFor: [
      "People seeking a dog that needs very little activity or engagement",
      "Households unable to provide consistent training and safe management",
      "Owners expecting independent instincts to disappear without training",
    ],
  },
  funFacts: [
    "The breed's traditional work included hunting and retrieving as well as catching moles and rodents around farms.",
    "Some larger Stabyhouns were historically used to pull small milk carts.",
    "The breed is associated with Friesland in the northern Netherlands.",
    "The FCI classifies the Stabyhoun among continental pointing dogs of the Spaniel type.",
  ],
  faq: [
    {
      question: "Where does the Stabyhoun come from?",
      answer:
        "It originated in Friesland in the northern Netherlands, where it developed as a versatile farm and hunting dog.",
    },
    {
      question: "How large does a Stabyhoun get?",
      answer:
        "The FCI standard gives ideal heights of 50–53 cm for males and 48–50 cm for females. Listed weights are 22–27 kg for males and 18–23 kg for females. Height tolerance around the ideal is also described by the standard.",
    },
    {
      question: "What colours are accepted?",
      answer:
        "The standard describes black or brown with white markings, including accepted roan patterns. Other registries may describe accepted colours differently.",
    },
    {
      question: "How long does a Stabyhoun live?",
      answer:
        "A dependable breed-specific lifespan range was not established from the sources used for this record, so no numerical lifespan range is provided.",
    },
    {
      question: "Is the Stabyhoun easy to train?",
      answer:
        "It is intelligent and may be responsive to training, but it also has an independent streak. Patient, consistent, reward-based sessions and meaningful activities are helpful.",
    },
    {
      question: "What health checks should I ask a breeder about?",
      answer:
        "Ask for documented eye, hip, and elbow screening results and discuss any additional tests recommended for the breed or family line with the breeder and veterinarian.",
    },
    {
      question: "Does the Stabyhoun need a lot of grooming?",
      answer:
        "Regular brushing helps remove loose hair and keeps feathering free of tangles and debris. Extra brushing may be useful during seasonal shedding.",
    },
  ],
  references: [
    "fci-stabijhoun-standard",
    "american-kennel-club-stabyhoun",
    "stabyhoun-association-of-america-about-breed",
    "united-kennel-club-stabyhoun-standard",
    "licg-stabijhoun",
    "wikimedia-stabyhoun-werkpaard",
    "wikimedia-stabyhoun-mjk23",
    "wikimedia-stabyhoun-caronna",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
  ],
  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-stabyhoun",
          role: "verified",
          locator: "Breed names and description",
        },
        {
          id: "united-kennel-club-stabyhoun-standard",
          role: "verified",
          locator: "Breed standard and names",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The alternate names are documented names for this breed.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific scientific name was established by the consulted breed sources.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-stabijhoun-standard",
          role: "verified",
          locator: "FCI classification",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    origin: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-stabijhoun-standard",
          role: "verified",
          locator: "Origin and breed history",
        },
        {
          id: "stabyhoun-association-of-america-about-breed",
          role: "verified",
          locator: "History and regional origin",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The breed is associated with Friesland in the Netherlands.",
    },
    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-stabijhoun-standard",
          role: "verified",
          locator: "Country of origin",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "stabyhoun-association-of-america-about-breed",
          role: "verified",
          locator: "Breed history and regional origin",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Friesland is the documented home region.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-stabijhoun-standard",
          role: "verified",
          locator: "History, utilisation, general appearance, and temperament",
        },
        {
          id: "stabyhoun-association-of-america-about-breed",
          role: "verified",
          locator: "History and breed characteristics",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Descriptions are original paraphrases rather than copied source text.",
    },
    "overview.originalPurpose": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-stabijhoun-standard",
          role: "verified",
          locator: "Historical utilisation and working purpose",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "overview.currentRoles": {
      reliability: "reliable_source",
      sources: [
        {
          id: "stabyhoun-association-of-america-about-breed",
          role: "verified",
          locator: "Activities and modern roles",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "These are possible roles, not a claim that every individual dog performs each activity.",
    },
    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-stabijhoun-standard",
          role: "cited",
          locator: "Ideal height and weight",
        },
      ],
      verifiedOn: null,
      note: "Medium is a catalogue size category inferred from the standard's measurements.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-stabijhoun-standard",
          role: "verified",
          locator: "Ideal height at the withers",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The stored values are the ideal male and female height ranges; the standard also describes tolerance around ideal height.",
    },
    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-stabijhoun-standard",
          role: "verified",
          locator: "Ideal weight",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The stored ranges follow the sex-specific weights in the breed standard.",
    },
    "physical.lifespanYears": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A sufficiently reliable breed-specific lifespan range was not established from the sources consulted.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-stabijhoun-standard",
          role: "verified",
          locator: "Coat: structure and undercoat",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-stabijhoun-standard",
          role: "verified",
          locator: "Coat length and feathering",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-stabijhoun-standard",
          role: "verified",
          locator: "Colour",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Colours follow the FCI standard; other registries may specify colours differently.",
    },
    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-stabijhoun-standard",
          role: "cited",
          locator: "Coat and undercoat",
        },
      ],
      verifiedOn: null,
      note: "The standard describes coat structure but does not quantify shedding; the displayed level is an estimate.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling level was established.",
    },
    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-stabijhoun-standard",
          role: "verified",
          locator: "General appearance, proportions, and coat",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-stabijhoun-standard",
          role: "verified",
          locator: "Behaviour and temperament",
        },
        {
          id: "stabyhoun-association-of-america-about-breed",
          role: "verified",
          locator: "Breed characteristics and temperament",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Traits describe typical tendencies, not guaranteed behaviour in every individual dog.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-stabyhoun",
          role: "cited",
          locator: "Breed characteristics",
        },
        {
          id: "stabyhoun-association-of-america-about-breed",
          role: "cited",
          locator: "Temperament and ownership information",
        },
      ],
      verifiedOn: null,
      note: "Scores are editorial estimates on a 1–5 scale, not standardised behavioural measurements.",
    },
    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-stabyhoun",
          role: "verified",
          locator: "Exercise and breed characteristics",
        },
        {
          id: "stabyhoun-association-of-america-about-breed",
          role: "verified",
          locator: "Activity needs and traditional work",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The qualitative activity level is breed-informed and should be adapted to the individual dog.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source reviewed establishes one universal daily exercise-minute target for all Stabyhouns.",
    },
    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [
        {
          id: "stabyhoun-association-of-america-about-breed",
          role: "cited",
          locator: "Activities and working heritage",
        },
      ],
      verifiedOn: null,
      note: "Activities are practical suggestions, not a prescribed exercise programme.",
    },
    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "stabyhoun-association-of-america-about-breed",
          role: "verified",
          locator: "Coat care and grooming",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Grooming needs vary with coat condition, season, and outdoor activities.",
    },
    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "stabyhoun-association-of-america-about-breed",
          role: "verified",
          locator: "Training and temperament",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Training difficulty is a qualitative assessment, not a formal breed-standard rating.",
    },
    "care.training.tips": {
      reliability: "general_guidance",
      sources: [
        {
          id: "stabyhoun-association-of-america-about-breed",
          role: "cited",
          locator: "Training and behaviour guidance",
        },
      ],
      verifiedOn: null,
      note: "Tips are practical training advice rather than guaranteed behavioural outcomes.",
    },
    "care.training.socialization": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Socialisation advice is general canine behavioural guidance.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal yes-or-no apartment-suitability value was not established by the consulted sources.",
    },
    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A yard may help provide safe outdoor space but does not establish a universal housing-suitability answer.",
    },
    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Climate guidance is general dog-care advice, not a claim of measured breed-specific climate tolerance.",
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific alone-time tolerance value was established.",
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
      note: "Nutrition advice is general guidance and should be adapted to the individual dog.",
    },
    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "stabyhoun-association-of-america-about-breed",
          role: "verified",
          locator: "Breed health information and health screening",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The overview describes health-screening practice and avoids claims about disease prevalence.",
    },
    "health.commonConditions": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No common-condition list is recorded because reliable breed-specific prevalence evidence was not established.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Preventive-care advice is general guidance and does not replace veterinary care.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "stabyhoun-association-of-america-about-breed",
          role: "verified",
          locator: "Health screening and responsible breeding",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Confirm the latest programme and the tests applicable to a breeding line with the breed organisation and veterinarian.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "Preventive dental care",
        },
      ],
      verifiedOn: null,
      note: "General veterinary dental guidance.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine ear-care guidance, not a breed-specific medical claim.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine skin and coat care is general dog-care guidance.",
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal first-time-owner suitability label cannot be established; experience, time, and support vary.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Family suitability depends on the individual dog, children's ages, supervision, and household circumstances.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal senior-owner suitability label is not established by the consulted sources.",
    },
    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "stabyhoun-association-of-america-about-breed",
          role: "cited",
          locator: "Activity needs and traditional working purpose",
        },
      ],
      verifiedOn: null,
      note: "This is a practical owner-fit estimate based on the breed's working heritage and activity needs.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A categorical apartment-living suitability value is not established by the consulted sources.",
    },
    "suitability.idealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "stabyhoun-association-of-america-about-breed",
          role: "cited",
          locator: "Working heritage, activities, and care requirements",
        },
      ],
      verifiedOn: null,
      note: "These are practical owner-fit suggestions, not guarantees of individual temperament.",
    },
    "suitability.notIdealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "stabyhoun-association-of-america-about-breed",
          role: "cited",
          locator: "Activity, training, and companionship needs",
        },
      ],
      verifiedOn: null,
      note: "These are practical ownership considerations, not a formal behavioural assessment.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-stabijhoun-standard",
          role: "verified",
          locator: "History and traditional utilisation",
        },
        {
          id: "united-kennel-club-stabyhoun-standard",
          role: "verified",
          locator: "Breed history and characteristics",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Facts are paraphrased from breed-standard and breed-history information.",
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-stabijhoun-standard",
          role: "verified",
          locator: "Classification, height, weight, coat, and colour",
        },
        {
          id: "american-kennel-club-stabyhoun",
          role: "verified",
          locator: "Breed history, characteristics, and health",
        },
        {
          id: "stabyhoun-association-of-america-about-breed",
          role: "verified",
          locator: "Training, care, and health screening",
        },
        {
          id: "licg-stabijhoun",
          role: "verified",
          locator: "Breed profile and lifespan information",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Answers are paraphrased and avoid guarantees about lifespan, health, or behaviour.",
    },
  },
  updatedOn: "2026-10-21",
};
