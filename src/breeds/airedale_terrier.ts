import type { Breed } from "../schema/breed.types";

export const airedale_terrier: Breed = {
  slug: "airedale-terrier",
  name: "Airedale Terrier",
  scientificName: null,
  alternateNames: [],
  group: "AKC Terrier Group; FCI Group 3 — Terriers, Section 1 — Large and medium-sized Terriers",

  origin: {
    country: "Great Britain",
    region: "Yorkshire, England",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/AiredaleDog.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:AiredaleDog.jpg",
      title: "AiredaleDog.jpg",
      description: "Airedale Terrier sitting on grass.",
      creator: "Angela Montillon",
      uploader: "Ltshears (Flickr upload bot)",
      capturedOn: "2006-11-10",
      uploadedOn: "2008-02-28",
      width: 480,
      height: 746,
      licenseId: "cc-by-sa-2.0",
      attribution:
        "Photo by Angela Montillon, via Wikimedia Commons, CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-23",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Airedale_terrier.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Airedale_terrier.jpg",
      title: "Airedale terrier.jpg",
      description: "Airedale Terrier photographed outdoors.",
      creator: "Ioan Bodean",
      uploader: "Ltshears (Flickr upload bot)",
      capturedOn: "2008-09-23",
      uploadedOn: "2008-10-22",
      width: 1024,
      height: 683,
      licenseId: "cc-by-sa-2.0",
      attribution:
        "Photo by Ioan Bodean, via Wikimedia Commons, CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-23",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Young_Airedale_Terrier_29-07-2009.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Young_Airedale_Terrier_29-07-2009.jpg",
      title: "Young Airedale Terrier 29-07-2009.jpg",
      description:
        "Young Airedale Terrier photographed while transitioning from puppy coat to adult coat.",
      creator: "Milkomède",
      uploader: "Milkomède",
      capturedOn: "2009-07-29",
      uploadedOn: "2021-09-20",
      width: 2048,
      height: 1536,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Milkomède, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate changes, if any; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-23",
    },
  ],

  overview: {
    summary:
      "The Airedale Terrier is a large, athletic terrier from Yorkshire, England, recognised by its wiry coat, tan head and legs, and dark saddle marking. Intelligent, alert and energetic, it combines a working-dog background with the potential to be an engaging family companion.",

    description:
      "The Airedale is strongly built without being heavy, with a long head, folded V-shaped ears, a characteristic beard and a dense, wiry double coat. Its traditional black or dark-grizzle saddle contrasts with the tan head, legs and underside. The breed was developed for practical work and retains curiosity, stamina and a strong interest in its surroundings. It generally needs daily activity as well as opportunities to use its mind, so walks alone may not satisfy every individual. Reward-based training, clear routines and suitable games can help channel its energy. Coat maintenance is also important: brushing helps keep the coat free of debris and tangles, while clipping or hand-stripping may be used depending on coat condition and the owner's grooming goals.",

    history:
      "The Airedale Terrier developed in the Aire valley and surrounding parts of Yorkshire in northern England. Early dogs, sometimes known as Waterside or Working Terriers, were used for hunting and controlling animals such as rats and otters. The breed later demonstrated tracking and other working abilities and served in roles including police and military work. Its versatility helped it become established as both a working dog and a companion. The exact contribution of every early cross is not fully documented, so detailed claims about individual ancestral breeds should be treated cautiously.",

    originalPurpose:
      "A versatile working terrier developed for hunting and controlling game and vermin, with later use in tracking and other service roles.",

    currentRoles: [
      "Companion dog",
      "Obedience and rally training",
      "Agility and other suitable dog sports",
      "Scent-work and tracking activities",
      "Hiking and active outdoor companionship",
      "Conformation showing",
    ],
  },

  physical: {
    sizeCategory: "Large, sturdy and athletic terrier",

    // FCI standard measurements in centimetres.
    height: {
      unit: "cm",
      male: { min: 58, max: 61 },
      female: { min: 56, max: 59 },
    },

    // AKC gives an overall 50–70 lb range, not sex-specific ranges.
    // The same overall range is repeated for both slots because the schema
    // requires a BySex object; it is not a claim of sex-specific weight norms.
    weight: {
      unit: "kg",
      male: { min: 22.7, max: 31.8 },
      female: { min: 22.7, max: 31.8 },
    },

    lifespanYears: {
      min: 11,
      max: 14,
    },

    coatType:
      "A hard, dense, wiry outer coat with a shorter, softer undercoat. The coat lies close to the body and may be slightly waved or crinkled. The head and muzzle carry characteristic facial furnishings, including a beard.",

    coatLength: "Short to medium, close-lying and wiry, with facial furnishings",

    coatColors: [
      "Black and tan",
      "Grizzle and tan",
    ],

    sheddingLevel:
      "Usually moderate in visible shedding compared with many heavily shedding breeds, but loose undercoat still needs routine removal. Coat condition and shedding vary with grooming method and the individual dog.",

    droolingLevel: null,

    distinctiveFeatures: [
      "Largest breed in the terrier group",
      "Long, relatively flat head with a strong muzzle",
      "Small, V-shaped ears folded to the side",
      "Dark or grizzled saddle over a tan coat",
      "Hard, dense and wiry double coat",
      "Distinctive beard and moustache-like facial furnishings",
      "Strong, muscular body and free-moving gait",
      "Alert expression and upright carriage when attentive",
    ],
  },

  temperament: {
    traits: [
      "Intelligent",
      "Confident",
      "Alert and observant",
      "Energetic",
      "Courageous",
      "Outgoing and generally friendly",
      "Curious and quick to investigate",
      "Independent at times",
      "Can be persistent when motivated",
    ],

    // Editorial estimates on a 1–5 scale, not standardised test results.
    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 4,
      protectiveness: 3,
      independence: 3,
      trainability: 4,
      barking: 3,
      energy: 4,
    },
  },

  care: {
    exercise: {
      level: "Moderate to high",

      // Practical estimate for a healthy adult; needs vary by individual.
      minutesPerDay: {
        min: 60,
        max: 90,
      },

      activities: [
        "Brisk walks and outdoor exploration",
        "Reward-based obedience practice",
        "Scent-work and tracking games",
        "Fetch or structured play where appropriate",
        "Agility or other suitable dog sports",
        "Food puzzles and problem-solving games",
      ],
    },

    grooming: {
      level: "Moderate to high",

      brushing:
        "Brush thoroughly several times a week to remove loose hair and debris, prevent tangles and check the skin. Work through the beard, legs, furnishings and undercoat rather than brushing only the surface. The coat may need professional hand-stripping to maintain a traditional hard texture, or clipping for easier companion-dog maintenance.",

      bathing:
        "Bathe when needed with a dog-appropriate shampoo and rinse thoroughly. Dry the coat completely, paying attention to the beard and dense areas. Excessive bathing or unsuitable products can affect coat and skin condition, so adjust the routine to the dog's needs.",

      notes: [
        "Ask a professional groomer to explain hand-stripping versus clipping for the dog's coat and lifestyle.",
        "Check the beard and furnishings for food, moisture and debris.",
        "Inspect the ears regularly for redness, odour or discharge.",
        "Trim nails regularly and brush teeth with dog-specific products.",
        "Part the coat during grooming to look for irritation, parasites or small wounds.",
        "Introduce grooming and handling gradually so the dog learns to remain comfortable during care.",
      ],
    },

    training: {
      difficulty:
        "Moderate; intelligence and enthusiasm can support learning, while terrier persistence and high activity can make consistency important.",

      tips: [
        "Use reward-based methods and short, varied training sessions.",
        "Teach a reliable recall and practise it around gradually increasing distractions.",
        "Build impulse control with waits, leave-it exercises and calm greetings.",
        "Offer structured tasks and scent games to engage the dog's problem-solving ability.",
        "Reward calm behaviour as well as active performance.",
        "Use secure areas for running and consider prey drive when near small animals.",
        "Avoid harsh punishment; clear boundaries and consistent reinforcement are more useful.",
      ],

      socialization:
        "Introduce the dog to different people, friendly dogs, handling routines, sounds and environments in gradual, positive ways. Continue practising throughout adulthood and supervise interactions where excitement or unfamiliar animals could become difficult to manage.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool weather suitable for outdoor activity",
        "Warm climates with shade, water and exercise scheduled during cooler hours",
      ],

      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced diet appropriate to life stage, body condition, activity level and veterinary needs.",

    feedingFrequency: {
      puppy:
        "Feed a complete puppy diet in age-appropriate meals. Follow the food manufacturer's guidance and your veterinarian's advice as the puppy grows.",

      adult:
        "Many adult dogs do well with two measured meals a day. Adjust portions for activity, body condition and individual health needs.",

      senior: null,
    },

    guidelines:
      "Measure daily portions and monitor body condition instead of relying on a fixed amount for every dog. Keep fresh water available, count treats as part of daily intake and make diet changes gradually unless your veterinarian advises otherwise. Seek veterinary guidance for persistent digestive problems, weight changes or suspected food reactions.",

    considerations: [
      "Adjust portions for age, activity and body condition.",
      "Avoid excess weight that could put additional strain on joints.",
      "Use treats strategically during training and include them in the daily calorie allowance.",
      "Provide fresh water, especially after exercise.",
      "Ask a veterinarian about diet changes if the dog develops persistent skin or digestive symptoms.",
    ],

    note:
      "Calorie needs differ between individual dogs. Use feeding guidance as a starting point and adjust according to body condition and veterinary advice.",
  },

  health: {
    overview:
      "Airedale Terriers should receive routine veterinary care and screening appropriate to the breed and individual family history. Breed-club screening guidance includes hip evaluation, cardiac examination and kidney-disease screening, with eye examinations and some additional tests listed as optional. Screening can help identify selected risks, but it cannot guarantee that a dog will remain free of inherited or acquired disease.",

    commonConditions: [
      "Hip dysplasia: a developmental joint condition for which breed screening is recommended.",
      "Cardiac conditions: cardiac examination is included in breed-club screening guidance.",
      "Kidney disease: kidney-disease screening is included in the breed's CHIC-related recommendations.",
      "Eye disorders: ophthalmologist examination is listed as an optional screening in the breed-club guidance.",
      "Autoimmune thyroiditis: thyroid evaluation is listed as an optional screening in the breed-club health statement.",
      "Elbow dysplasia: elbow evaluation is listed as an optional screening in the breed-club health statement.",
      "Skin and coat problems: tangles, trapped debris or poor grooming can contribute to discomfort and may conceal skin irritation.",
    ],

    preventiveCare: [
      "Arrange regular veterinary examinations and keep vaccinations and parasite prevention appropriate to local risks.",
      "Ask the breeder for documented screening results and discuss their significance with a veterinarian.",
      "Maintain a healthy body condition and build exercise gradually.",
      "Monitor mobility, appetite, energy, skin and behaviour for changes.",
      "Seek prompt veterinary advice for persistent vomiting, unusual thirst, urinary changes, exercise intolerance or eye discomfort.",
      "Keep grooming and dental care on a regular schedule.",
    ],

    recommendedScreenings: [
      "Hip dysplasia evaluation, such as an accepted OFA or PennHIP assessment",
      "Cardiac examination",
      "Kidney-disease screening through the relevant CHIC process",
      "Ophthalmologist eye examination — listed as optional in the breed-club health statement",
      "Autoimmune thyroiditis evaluation — listed as optional in the breed-club health statement",
      "Elbow dysplasia evaluation — listed as optional in the breed-club health statement",
    ],

    dentalCare:
      "Brush the teeth regularly with a dog-specific toothbrush and toothpaste. Arrange veterinary dental checks and ask for advice if there is persistent bad breath, gum redness, pain or difficulty chewing.",

    earCare:
      "Check the folded ears routinely for redness, odour, discharge or discomfort. Clean only as advised by a veterinarian and seek care if signs of infection appear.",

    skinCare:
      "Part the wiry coat during grooming to check for irritation, parasites, wounds or unusual lumps. Keep the beard and furnishings clean and dry, and seek veterinary advice for persistent itching, redness or hair loss.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,

    idealFor: [
      "People who can provide regular exercise and mental enrichment",
      "Owners interested in training, scent games or dog sports",
      "Households prepared for ongoing coat maintenance",
      "People who enjoy an alert, engaged and capable companion",
      "Owners able to teach consistent manners and manage the dog's environment",
    ],

    notIdealFor: [
      "People seeking a very low-energy dog",
      "Households unable to provide daily activity or enrichment",
      "Owners who cannot commit to routine grooming",
      "People expecting every dog to be reliably safe off-leash in distracting areas",
      "Households unwilling to provide consistent training and supervision",
    ],
  },

  funFacts: [
    "The Airedale Terrier originated in Yorkshire in northern England.",
    "It is recognised as the largest of the terrier breeds.",
    "The breed has worked in varied roles, including tracking and service work.",
    "Its characteristic coat combines a hard, wiry outer layer with a softer undercoat.",
    "The traditional coat pattern has a dark saddle with tan on the head, legs and underside.",
  ],

  faq: [
    {
      question: "How much exercise does an Airedale Terrier need?",
      answer:
        "A healthy adult often benefits from around 60–90 minutes of daily activity, adjusted for age, health and temperament. Mix walks with training and mental enrichment rather than relying on exercise alone.",
    },
    {
      question: "Do Airedale Terriers shed?",
      answer:
        "They can shed loose hair, although the wiry coat may not release hair in the same way as many soft-coated breeds. Regular brushing and appropriate coat maintenance help remove loose undercoat and keep the coat in good condition.",
    },
    {
      question: "Are Airedale Terriers easy to train?",
      answer:
        "They are intelligent and capable learners, but their energy and terrier persistence mean that training should be consistent, varied and rewarding. Recall, impulse control and calm behaviour are useful skills to practise early.",
    },
    {
      question: "Are Airedale Terriers good with children?",
      answer:
        "An individual Airedale may live successfully with children when introductions, training and supervision are appropriate. Suitability depends on the dog's temperament and the children's behaviour; supervise interactions and teach children to respect the dog's space.",
    },
    {
      question: "What grooming does an Airedale Terrier need?",
      answer:
        "Brush several times a week and keep the beard, legs and furnishings clean. Depending on the desired coat texture, the dog may need hand-stripping or clipping. A professional groomer can help choose a suitable routine.",
    },
    {
      question: "What health tests should I ask a breeder about?",
      answer:
        "Ask for documented hip evaluation, cardiac examination and kidney-disease screening results. The breed-club health statement also lists eye, thyroid and elbow evaluations as optional screenings. Discuss results and any family history with a veterinarian.",
    },
    {
      question: "What colours does an Airedale Terrier have?",
      answer:
        "The recognised standard colour pattern is black and tan or grizzle and tan, with the darker colour forming a saddle over the body and tan appearing on the head, legs and underside.",
    },
    {
      question: "How long does an Airedale Terrier live?",
      answer:
        "The American Kennel Club lists an average life expectancy of 11–14 years. Individual lifespan varies with genetics, health, preventive care and living conditions.",
    },
  ],

  references: [
    "fci-airedale-terrier-standard",
    "american-kennel-club-airedale-terrier",
    "american-kennel-club-terrier-group-health-testing-requirements",
    "airedale-terrier-club-america-health-statement",
    "wikimedia-airedale-dog",
    "wikimedia-airedale-terrier-ioan-bodean",
    "wikimedia-airedale-young-milkomede",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A breed-specific scientific name is not recorded; the catalog does not require a formal taxonomic name.",
    },

    alternateNames: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No additional alternate name is recorded in this breed entry.",
    },

    group: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "FCI classification",
        },
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "Breed profile: Terrier Group",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Group labels differ between kennel registries.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "FCI standard: origin",
        },
      ],
      verifiedOn: "2026-10-23",
      note: null,
    },

    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "FCI standard: brief historical summary",
        },
        {
          id: "airedale-terrier-club-america-health-statement",
          role: "cited",
          locator: "Club source; breed-club reference",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Yorkshire, England, is the documented historical region associated with the breed.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "FCI standard: history, general appearance and temperament",
        },
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "Breed profile: appearance, history and roles",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "User-facing descriptions are original synthesis; detailed claims about undocumented ancestry are intentionally avoided.",
    },

    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "cited",
          locator: "FCI standard: general appearance and height",
        },
      ],
      verifiedOn: null,
      note: "Editorial size description based on the standard's measurements and build.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "FCI standard: height at the withers",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Measurements are stored in centimetres.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "Breed profile: average weight",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "The 50–70 lb range is published for the breed overall, not separately by sex. It is converted to kilograms and repeated in both sex slots only because the schema requires a BySex structure.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "Breed profile: life expectancy",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Published life-expectancy range; not a guarantee for an individual dog.",
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "FCI standard: coat",
        },
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile: coat description",
        },
      ],
      verifiedOn: "2026-10-23",
      note: null,
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "FCI standard: coat",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "The standard describes a close-lying coat with a hard, wiry outer layer and softer undercoat.",
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "FCI standard: colour",
        },
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile: colours and markings",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Standard colour descriptions are black and tan or grizzle and tan.",
    },

    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile: coat and grooming",
        },
      ],
      verifiedOn: null,
      note: "Qualitative grooming guidance; no measured breed-specific shedding rate is claimed.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable, standardised breed-specific drooling rating was established.",
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "FCI standard: general appearance, head, coat and movement",
        },
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile: appearance",
        },
      ],
      verifiedOn: "2026-10-23",
      note: null,
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "FCI standard: behaviour and temperament",
        },
        {
          id: "airedale-terrier-club-america-health-statement",
          role: "cited",
          locator: "Breed-club source",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Traits describe general breed tendencies, not guaranteed behaviour in every dog.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile: trait descriptions",
        },
      ],
      verifiedOn: null,
      note: "All 1–5 ratings are editorial estimates, not standardised behavioural test results.",
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "Breed profile: activity and temperament",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Qualitative exercise recommendation.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile: activity needs",
        },
      ],
      verifiedOn: null,
      note: "Practical adult-dog estimate, not an official standard; adapt to age, health and individual needs.",
    },

    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Suggested activities are general care guidance and should be adapted to the individual dog.",
    },

    "care.grooming.level": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile: coat and grooming",
        },
      ],
      verifiedOn: null,
      note: "Editorial grooming level based on coat-maintenance needs.",
    },

    "care.grooming.brushing": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General coat-maintenance advice for a wiry double coat.",
    },

    "care.grooming.bathing": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General bathing guidance; frequency depends on coat and skin condition.",
    },

    "care.grooming.notes": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General grooming, hygiene and handling advice.",
    },

    "care.training.difficulty": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "cited",
          locator: "FCI standard: temperament",
        },
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile: intelligence and activity",
        },
      ],
      verifiedOn: null,
      note: "Editorial assessment; learning speed and difficulty vary by dog and training approach.",
    },

    "care.training.tips": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General reward-based training guidance.",
    },

    "care.training.socialization": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General socialisation guidance.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Apartment suitability depends on exercise, enrichment, noise management and the individual dog; no universal yes/no value is recorded.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile: activity needs",
        },
      ],
      verifiedOn: null,
      note: "A secure yard can help provide activity but does not replace walks, training or interaction.",
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General climate and exercise advice; adapt activity to local weather and the dog's health.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific duration for being left alone was established.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine nutrition advice; individual diet needs depend on life stage, body condition and veterinary requirements.",
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
          id: "american-kennel-club-terrier-group-health-testing-requirements",
          role: "verified",
          locator: "Airedale Terrier: recommended health tests from the national breed club",
        },
        {
          id: "airedale-terrier-club-america-health-statement",
          role: "verified",
          locator: "Health checks and CHIC recommendations",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Screening recommendations indicate areas for assessment and do not prove that every dog will develop a condition.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "airedale-terrier-club-america-health-statement",
          role: "verified",
          locator: "Breed-club health statement: recommended health checks",
        },
        {
          id: "american-kennel-club-terrier-group-health-testing-requirements",
          role: "verified",
          locator: "Airedale Terrier health testing list",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "The list focuses on health areas included in screening recommendations and practical coat care; it does not assert prevalence or predict an individual dog's health.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive veterinary guidance.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-terrier-group-health-testing-requirements",
          role: "verified",
          locator: "Airedale Terrier: hip evaluation, cardiac exam and kidney disease screening",
        },
        {
          id: "airedale-terrier-club-america-health-statement",
          role: "verified",
          locator: "Health statement: recommended and optional checks",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Screening recommendations can change; confirm current requirements with the breed club and veterinarian. A screening result does not guarantee future health.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine dental-care advice.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General ear monitoring advice.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General skin and coat inspection advice.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Experience alone does not determine suitability; owner support, training and exercise capacity vary too widely for a reliable universal value.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability depends on the individual dog, child behaviour, supervision and household experience; no universal yes/no value is recorded.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability for senior owners depends on mobility, support, activity preferences and the individual dog.",
    },

    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile: activity and exercise needs",
        },
      ],
      verifiedOn: null,
      note: "Editorial matching guidance based on the breed's activity needs.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Apartment living depends on exercise, enrichment, noise management and the individual dog; no universal value is recorded.",
    },

    "suitability.idealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile: activity, intelligence and temperament",
        },
      ],
      verifiedOn: null,
      note: "Editorial matching guidance, not a guarantee of compatibility.",
    },

    "suitability.notIdealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile: activity, coat and temperament",
        },
      ],
      verifiedOn: null,
      note: "Editorial matching guidance, not a guarantee of incompatibility.",
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "FCI standard: history, size and working roles",
        },
      ],
      verifiedOn: "2026-10-23",
      note: null,
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "FCI standard: origin, appearance, coat and temperament",
        },
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "Breed profile: height, weight, lifespan and colours",
        },
        {
          id: "airedale-terrier-club-america-health-statement",
          role: "verified",
          locator: "Breed-club health screening recommendations",
        },
      ],
      verifiedOn: "2026-10-23",
      note: "Answers are original summaries and distinguish breed standards, health-screening guidance and general care advice.",
    },
  },

  updatedOn: "2026-10-23",
};
