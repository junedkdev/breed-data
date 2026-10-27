import type { Breed } from "../schema/breed.types";

export const kooikerhondje: Breed = {
  slug: "kooikerhondje",
  name: "Nederlandse Kooikerhondje",
  scientificName: "Canis lupus familiaris",
  alternateNames: ["Kooikerhondje", "Dutch Decoy Dog"],
  group: "Sporting Group (AKC); Utility Group (Royal Kennel Club); Retrievers, Flushing Dogs and Water Dogs (FCI)",
  origin: {
    country: "The Netherlands",
    region: null,
  },
  images: [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Kooikerhondje_puppy.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Kooikerhondje_puppy.jpg",
      title: "Kooikerhondje puppy.jpg",
      description: "A Kooikerhondje puppy, described on the original file page as a Dutch Decoy Dog puppy.",
      creator: "Jeroenzwaan",
      uploader: "Jeroenzwaan",
      capturedOn: "2018-01-10",
      uploadedOn: "2018-01-10",
      width: 4032,
      height: 3024,
      licenseId: "cc0-1.0",
      attribution: "Photo by Jeroenzwaan, Wikimedia Commons; dedicated to the public domain under CC0 1.0 (credit appreciated but not required).",
      restrictions: null,
      metadataCheckedOn: "2026-10-27",
    },
  ],
  overview: {
    summary:
      "The Nederlandse Kooikerhondje is a small, lively Dutch sporting dog with an orange-red and white coat, a plumed tail, and a distinctive alert expression. Historically, it helped lure ducks into decoy traps by moving around the water with its waving tail. Today it can be an affectionate companion for people who can provide activity, training, and thoughtful socialisation.",
    description:
      "Nearly square in outline and agile in movement, the Kooikerhondje has a medium-length coat, well-feathered tail, hanging ears that may develop black feathering at the tips, and clear orange-red patches on white. The breed is typically lively, alert, and persistent, while often being friendly with familiar people and reserved around strangers. It is a sporting dog rather than a low-activity ornament: regular exercise, scent and training games, and gradual exposure to varied everyday situations help meet its needs. Temperament and sociability still vary between individuals.",
    history:
      "The breed is associated with the Netherlands and duck-decoy work, in which a dog drew ducks toward a capture area by moving near the water and attracting their curiosity with its tail. The type is described in historical accounts dating back several centuries. Numbers declined, and Baroness van Hardenbroek van Ammerstol began a recovery effort during the Second World War. The Dutch kennel organisation adopted an interim breed in 1966, and official recognition followed in 1971. Modern Kooikerhondjes retain the alertness and stamina associated with that working role.",
    originalPurpose:
      "To help lure ducks into traditional Dutch duck-decoy traps by attracting their curiosity and leading them along the decoy channel; the dog did not retrieve or hunt the ducks directly.",
    currentRoles: [
      "Companion dog",
      "Sporting and activity partner",
      "Obedience and rally participant",
      "Agility and scent-work participant",
      "Participant in suitable retriever or flushing-dog activities where available",
    ],
  },
  physical: {
    sizeCategory: "Small",
    height: {
      unit: "cm",
      male: { min: 37, max: 42 },
      female: { min: 35, max: 40 },
    },
    weight: {
      unit: null,
      male: null,
      female: null,
    },
    lifespanYears: { min: 12, max: null },
    coatType:
      "Medium-length, close-fitting coat that is straight or slightly wavy, with a well-developed undercoat and feathering on the tail and selected areas of the body.",
    coatLength:
      "Medium length. Hair is shorter on the head, front of the legs, and feet; feathering is visible on the tail, throat, forechest, and rear of the legs, without long feathering below the hocks.",
    coatColors: [
      "Clear orange-red patches on a white ground",
      "Orange-red should predominate over the body",
      "A white facial blaze is preferred",
      "Black feathering at the ear tips (earrings) is desirable",
      "Some intermingled black hairs, slight ticking, or a black tail ring are accepted by the cited standard, though some are less desirable",
    ],
    sheddingLevel:
      "Sheds; regular brushing helps manage loose coat, with seasonal variation between individuals.",
    droolingLevel: null,
    distinctiveFeatures: [
      "Small sporting dog with a nearly square outline and slightly longer body than height at the withers.",
      "Orange-red patches on a white coat.",
      "Medium-length coat with a developed undercoat and moderate feathering.",
      "Well-feathered tail with a white plume, carried at or above the level of the back.",
      "Hanging ears that may have distinctive black feathering at the tips.",
      "Lively, springy movement with good reach and rear drive.",
    ],
  },
  temperament: {
    traits: [
      "Lively and agile",
      "Alert and observant",
      "Self-confident",
      "Friendly and easy-going with familiar people",
      "May be reserved around unfamiliar people",
      "Persistent and energetic when working",
      "Generally not intended to be excessively noisy",
      "Often enjoys learning and shared activities",
      "May be sensitive to abrupt handling or chaotic situations",
    ],
    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 2,
      independence: 3,
      trainability: 4,
      barking: 3,
      energy: 4,
    },
  },
  care: {
    exercise: {
      level:
        "Moderate to high. This active sporting breed benefits from daily walks plus opportunities for training, play, and mental work; the right amount depends on age and health.",
      minutesPerDay: null,
      activities: [
        "Daily walks with opportunities for calm sniffing and exploration",
        "Reward-based obedience and recall practice",
        "Scent-search games and food puzzles",
        "Agility, rally, or other suitable dog sports",
        "Fetch or retrieving games with appropriate breaks",
        "Swimming or water-based play for dogs that enjoy it and can do so safely",
      ],
    },
    grooming: {
      level: "Moderate",
      brushing:
        "Brush thoroughly at least weekly, paying attention to the feathering behind the ears, on the tail, and on the backs of the legs. Increase grooming when shedding or when the coat collects debris.",
      bathing:
        "Occasional bathing as needed is generally sufficient. Use dog-appropriate products and dry the coat well after swimming or bathing.",
      notes: [
        "The coat is intended to be natural and untrimmed; avoid unnecessary shaping that changes its characteristic outline.",
        "Check ears regularly for wax, debris, odour, redness, or irritation.",
        "Trim fast-growing nails as needed to prevent splitting and overgrowth.",
        "Brush teeth regularly with dog-specific toothpaste.",
        "Check the coat and skin after outdoor activity and remove plant material promptly.",
      ],
    },
    training: {
      difficulty:
        "Moderate. The breed is intelligent and active, but may be alert or reserved in unfamiliar situations. Use short, consistent, reward-based sessions and build confidence without forcing interactions.",
      tips: [
        "Start with simple reward-based routines and increase distractions gradually.",
        "Teach recall and loose-lead walking early, practising first in secure environments.",
        "Use scent games, retrieving activities, and problem-solving tasks to engage the sporting instinct.",
        "Reward calm behaviour around visitors, dogs, birds, and other distractions.",
        "Avoid harsh corrections; build reliable responses through consistency and motivation.",
        "Supervise around water and wildlife, and use a lead where recall is not dependable.",
      ],
      socialization:
        "Provide gradual, positive exposure to people, dogs, handling, sounds, transport, and new environments from puppyhood onward. Respect signs of uncertainty and allow the dog time to observe rather than pushing it into close contact. Continue confidence-building throughout adulthood.",
    },
    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: [
        "Temperate climates",
        "Cool climates with ordinary outdoor protection as needed",
        "Warmer climates when shade, fresh water, ventilation, and cooler exercise times are provided",
      ],
      aloneTimeTolerance:
        "Individual tolerance varies. Gradually teach comfortable alone time and provide exercise and enrichment. A home routine with long, frequent periods of isolation may not suit a dog that needs regular interaction and activity.",
    },
  },
  nutrition: {
    dietType:
      "Complete and balanced dog food appropriate for life stage, body condition, activity, and veterinary needs.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Use the food's feeding guide as a starting point and adjust portions according to body condition, activity, and veterinary advice. Keep fresh water available. A veterinarian can help choose a suitable diet for growth, adulthood, ageing, or a medical condition.",
    considerations: [
      "Measure portions and monitor body condition to reduce the risk of excess weight.",
      "Include training treats in the daily food allowance.",
      "Introduce diet changes gradually unless a veterinarian advises otherwise.",
      "Choose a diet appropriate to the dog's age, activity, and medical needs.",
      "Seek veterinary advice for persistent digestive problems, appetite changes, or unexpected weight change.",
    ],
    note:
      "The consulted sources do not establish a single feeding frequency or portion size suitable for every Kooikerhondje; requirements depend on age, diet energy density, activity, and health.",
  },
  health: {
    overview:
      "The breed is often described as generally healthy, but inherited disorders are documented and responsible breeding relies on health screening and pedigree information. Breed-club and kennel-club guidance highlights von Willebrand disease type III, hereditary necrotizing myelopathy (ENM), eye disease, patellar luxation, and hip dysplasia as screening priorities. Polymyositis, epilepsy, and kidney disorders have also been reported; their frequency, inheritance, and individual risk are not fully established in all cases. These are breed-level considerations, not a prediction that a particular dog will develop a condition.",
    commonConditions: [
      "Von Willebrand disease type III (VWDIII), an inherited blood-clotting disorder for which breed-specific testing has been recommended.",
      "Hereditary necrotizing myelopathy (ENM), an inherited neurological condition associated with progressive movement impairment.",
      "Patellar luxation, in which the kneecap can move out of its normal position.",
      "Hip dysplasia, a developmental condition affecting the hip joints.",
      "Hereditary eye conditions, including cataracts and distichiasis, which may be detected during ophthalmic examination.",
      "Polymyositis, an inflammatory muscle condition reported in the breed; current individual risk cannot be inferred from breed alone.",
      "Epilepsy and kidney disorders have been reported, but available sources do not establish a reliable prevalence estimate for the breed.",
    ],
    preventiveCare: [
      "Ask the breeder for documented health-screening results for the puppy's parents and relevant relatives.",
      "Discuss eye, patella, and hip evaluations and appropriate DNA tests with a veterinarian or knowledgeable breed specialist.",
      "Keep routine veterinary examinations and vaccinations up to date.",
      "Maintain a healthy body condition and suitable conditioning for exercise.",
      "Seek prompt veterinary advice for unexplained bleeding, weakness, altered gait, seizures, eye changes, or persistent muscle pain.",
      "Do not treat breed-level risk information as a diagnosis; assessment should be based on the individual dog.",
    ],
    recommendedScreenings: [
      "Ophthalmologist evaluation for hereditary eye disease.",
      "Patella evaluation for patellar luxation.",
      "Hip evaluation for hip dysplasia.",
      "DNA testing for von Willebrand disease type III (VWDIII), as recommended in breed-club guidance.",
      "DNA testing for hereditary necrotizing myelopathy (ENM), as recommended in breed-club guidance.",
      "Ask the breed club and veterinarian about newer or additional testing recommendations, including polymyositis, because guidance may change.",
    ],
    dentalCare:
      "Brush teeth regularly with dog-specific toothpaste and arrange veterinary dental checks. Seek advice for persistent bad breath, gum inflammation, oral discomfort, or difficulty chewing.",
    earCare:
      "Inspect the hanging ears regularly for wax, debris, odour, redness, or repeated scratching. Clean only as needed with a veterinarian-approved product and seek advice if irritation persists.",
    skinCare:
      "Check the coat and skin during brushing, especially after outdoor activity. Seek veterinary advice for persistent itching, redness, sores, scaling, or hair loss.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: true,
    idealFor: [
      "Owners who enjoy regular walks, training, and shared activities",
      "Households able to provide consistent positive training and enrichment",
      "People who appreciate an alert, active sporting companion",
      "Families willing to supervise dog-child interactions and teach respectful handling",
      "Owners prepared to manage a dog that may be reserved around strangers",
    ],
    notIdealFor: [
      "Households looking for a very low-energy dog with minimal daily activity needs",
      "People unable to provide training, enrichment, and gradual socialisation",
      "Homes where the dog would routinely be left alone for long periods without support",
      "Owners expecting every individual to be immediately sociable with unfamiliar people or dogs",
    ],
  },
  funFacts: [
    "The Dutch word 'kooiker' refers to a person who operates a duck decoy; the dog helped lure ducks into the decoy channel.",
    "The breed's waving, white-plumed tail was part of its traditional working role around duck decoys.",
    "The breed was revived in the twentieth century after its numbers had declined.",
    "The black feathering at the tips of the ears is often called 'earrings'.",
  ],
  faq: [
    {
      question: "Where does the Kooikerhondje come from?",
      answer:
        "The Kooikerhondje comes from the Netherlands and was developed for traditional duck-decoy work. A dog moved near the water and used its presence and waving tail to attract ducks toward a capture area.",
    },
    {
      question: "How tall is a Kooikerhondje?",
      answer:
        "The Royal Kennel Club standard lists dogs at 37–42 cm and bitches at 35–40 cm. Other registries may describe ideal heights differently.",
    },
    {
      question: "How much does a Kooikerhondje weigh?",
      answer:
        "The consulted official standards do not provide a numeric weight range that I could reliably use here. A veterinarian can assess whether an individual dog has a healthy body condition.",
    },
    {
      question: "How long does a Kooikerhondje live?",
      answer:
        "The Royal Kennel Club describes the breed's lifespan as over 12 years. Lifespan varies with genetics, health, and care.",
    },
    {
      question: "Does a Kooikerhondje need a lot of exercise?",
      answer:
        "It is an active sporting breed and generally benefits from daily walks, training, play, and mental enrichment. The exact amount should be adjusted for age and health.",
    },
    {
      question: "Is the Kooikerhondje friendly with strangers?",
      answer:
        "The breed standard describes the dog as friendly with familiar people but potentially aloof with strangers. Positive, gradual socialisation is helpful, and individual temperaments differ.",
    },
    {
      question: "What health tests should I ask a breeder about?",
      answer:
        "Breed-club and kennel-club guidance includes eye, patella, and hip evaluations, plus DNA tests for von Willebrand disease type III and hereditary necrotizing myelopathy. Ask for documented results and confirm current recommendations with a veterinarian or breed club.",
    },
    {
      question: "Can a Kooikerhondje live in an apartment?",
      answer:
        "It can adapt to apartment living if it receives adequate daily activity, training, and enrichment. Access to safe outdoor exercise and the dog's individual barking and alone-time behaviour should be considered.",
    },
  ],
  references: [
    "fci-kooikerhondje-breed-standard",
    "royal-kennel-club-kooikerhondje-standard",
    "american-kennel-club-nederlandse-kooikerhondje",
    "american-kennel-club-kooikerhondje-health-statement",
    "commons-kooikerhondje-puppy-jeroenzwaan",
  ],
  evidence: {
    scientificName: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Conventional scientific designation for the domestic dog; not a breed-specific taxonomic distinction.",
    },
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-kooikerhondje-breed-standard",
          role: "verified",
          locator: "Breed name and nomenclature",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Nederlandse Kooikerhondje is the formal name; Kooikerhondje and Dutch Decoy Dog are common names used in breed references.",
    },
    group: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-kooikerhondje-breed-standard",
          role: "verified",
          locator: "FCI group and section",
        },
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "Breed standard classification",
        },
        {
          id: "american-kennel-club-nederlandse-kooikerhondje",
          role: "verified",
          locator: "AKC breed profile",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Group labels differ by registry; the value lists the registry-specific classifications rather than asserting one universal group.",
    },
    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kooikerhondje-breed-standard",
          role: "verified",
          locator: "Country of origin: The Netherlands",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "The country is stated by the FCI. No narrower region is asserted.",
    },
    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The consulted official source identifies the country of origin but does not establish a narrower geographic region.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "Historical summary, general appearance, temperament, coat and traditional duck-decoy role",
        },
        {
          id: "fci-kooikerhondje-breed-standard",
          role: "cited",
          locator: "Country of origin and standard publication details",
        },
        {
          id: "american-kennel-club-nederlandse-kooikerhondje",
          role: "cited",
          locator: "Breed profile and temperament",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Original summary of registry history and standard characteristics; descriptions are paraphrased.",
    },
    "physical.sizeCategory": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "General appearance and breed profile size classification",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Small is the catalogue's broad size category.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "Size: dogs 37–42 cm; bitches 35–40 cm",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Uses the centimetre values printed first by this standard; no unit conversion was applied.",
    },
    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The consulted official standards do not establish a numeric weight range suitable for this record; both ranges and the unit are null.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "Breed A to Z: lifespan over 12 years",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "The source describes lifespan as over 12 years; no upper bound is asserted.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Paraphrased from the breed standard.",
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "Coat and feathering",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Paraphrased from the breed standard.",
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "Colour",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Colour descriptions follow the cited standard; permitted details can differ by registry.",
    },
    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "Breed A to Z: sheds",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Qualitative description; amount varies by individual and season.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable consulted source established a breed-specific drooling rating.",
    },
    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "General appearance, tail, coat, colour and movement",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Features are paraphrased from the standard.",
    },
    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "Temperament",
        },
        {
          id: "american-kennel-club-nederlandse-kooikerhondje",
          role: "cited",
          locator: "Breed profile",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Describes breed tendencies, not a guarantee of an individual dog's behaviour.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-nederlandse-kooikerhondje",
          role: "cited",
          locator: "Breed profile traits",
        },
      ],
      verifiedOn: null,
      note: "All 1–5 scores are editorial estimates for app comparison, not scientific measurements or official ratings.",
    },
    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-nederlandse-kooikerhondje",
          role: "cited",
          locator: "Exercise, training, grooming and nutrition",
        },
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "cited",
          locator: "Breed A to Z: exercise and grooming",
        },
      ],
      verifiedOn: null,
      note: "Care guidance is general and should be adjusted for age, health, environment, and the individual dog.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal daily exercise-minute figure is stored; published advice is qualitative or uses broader activity categories.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-nederlandse-kooikerhondje",
          role: "cited",
          locator: "Nutrition and general care",
        },
      ],
      verifiedOn: null,
      note: "General canine feeding advice, not an individual veterinary diet prescription.",
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed puppy meal frequency is prescribed; requirements vary by age, food, and veterinary advice.",
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed adult meal frequency is prescribed; requirements vary by individual.",
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No fixed senior meal frequency is prescribed; requirements vary by individual.",
    },
    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-kooikerhondje-health-statement",
          role: "verified",
          locator: "Recommended screening tests and reported breed health concerns",
        },
        {
          id: "american-kennel-club-nederlandse-kooikerhondje",
          role: "cited",
          locator: "National breed club health testing recommendations",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Health information distinguishes screening priorities from reported conditions; prevalence is not inferred where sources do not establish it.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-kooikerhondje-health-statement",
          role: "cited",
          locator: "Breeding health tests and general pedigree advice",
        },
      ],
      verifiedOn: null,
      note: "General preventive advice; individual screening plans should be confirmed with a veterinarian.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine dental-care guidance, not a breed-specific medical claim.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-nederlandse-kooikerhondje",
          role: "cited",
          locator: "Grooming: ear checks",
        },
      ],
      verifiedOn: null,
      note: "General ear-care advice aligned with breed-profile grooming guidance.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General coat and skin-care advice.",
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-nederlandse-kooikerhondje",
          role: "cited",
          locator: "Activity and temperament description",
        },
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "cited",
          locator: "Size, exercise and home guidance",
        },
      ],
      verifiedOn: null,
      note: "Suitability values are editorial assessments, not guarantees; household fit depends on management, training, and the individual dog.",
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal first-time-owner suitability rating is assigned; experience, support, and activity expectations vary.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal senior-owner suitability rating is assigned because mobility, activity, and support needs differ.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "Historical summary and tail description",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Historical and conformation facts are paraphrased from the breed standard.",
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-kooikerhondje-standard",
          role: "verified",
          locator: "Size, lifespan, history and temperament",
        },
        {
          id: "american-kennel-club-kooikerhondje-health-statement",
          role: "cited",
          locator: "Health-screening recommendations",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "FAQs paraphrase the cited standards and screening guidance; the lifespan answer preserves the source's open-ended wording.",
    },
  },
  updatedOn: "2026-10-27",
};
