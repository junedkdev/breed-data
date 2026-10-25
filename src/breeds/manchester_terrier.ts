import type { Breed } from "../schema/breed.types";

export const manchester_terrier: Breed = {
  slug: "manchester-terrier",
  name: "Manchester Terrier",
  scientificName: null,
  alternateNames: [],
  group: "FCI Group 3: Terriers; Section 1: Large and medium-sized Terriers",
  origin: {
    country: "Great Britain",
    region: "Manchester, England",
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_Terrier.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Manchester_Terrier.jpg",
      title: "Manchester Terrier.jpg",
      description: "A Manchester Terrier named Scooter.",
      creator: "Jon Ovington",
      uploader: "Ltshears",
      capturedOn: "2008-12-02",
      uploadedOn: "2012-07-18",
      width: 900,
      height: 1200,
      licenseId: "cc-by-sa-2.0",
      attribution:
        "Photo by Jon Ovington, via Wikimedia Commons, CC BY-SA 2.0. Changes, if any, must be indicated. Adapted versions must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-25",
    },
  ],
  overview: {
    summary:
      "A sleek, alert and athletic terrier from England, the Manchester Terrier combines a keen vermin-hunting instinct with a close bond to its people. Its short black-and-tan coat, elegant outline and quick, observant manner make it distinctive among terriers.",
    description:
      "The Manchester Terrier is a compact, muscular dog with a long, narrow, wedge-shaped head, a bright expression and a smooth, glossy coat. Its traditional black-and-tan markings are sharply defined, including tan spots above the eyes and markings on the muzzle, legs and underside. Developed as a working terrier, it is fast, curious and attentive to movement. At home it can be affectionate and relaxed when its physical and mental needs are met, but its prey drive means small animals should be managed carefully. The breed benefits from daily activity, engaging training, and early, positive socialisation.",
    history:
      "The Manchester Terrier developed in and around Manchester, England, during the period when the region's textile mills and towns needed effective rat-catching dogs. It descends from older black-and-tan terrier types, and Whippet ancestry is commonly cited as contributing to its speed and refined outline. The breed became associated with ratting competitions and rabbit hunting. As tastes and laws changed, its popularity declined, but dedicated breeders maintained it. In the United States, the American Kennel Club recognises Standard and Toy varieties; other kennel organisations classify the breed differently.",
    originalPurpose:
      "Ratting and controlling vermin, with the speed and agility to pursue small game such as rabbits.",
    currentRoles: [
      "Companion dog",
      "Vermin-alert and watchdog companion",
      "Agility, obedience, rally and scent-work participant",
      "Active household companion for people who enjoy training and outdoor activity",
    ],
  },
  physical: {
    sizeCategory: "small",
    height: {
      unit: "cm",
      male: {
        min: 41,
        max: 41,
      },
      female: {
        min: 38,
        max: 38,
      },
    },
    weight: {
      unit: "kg",
      male: {
        min: 5.5,
        max: 10,
      },
      female: {
        min: 5.5,
        max: 10,
      },
    },
    lifespanYears: {
      min: 15,
      max: 17,
    },
    coatType: "Short, smooth, close-lying and glossy.",
    coatLength: "Short and close to the body.",
    coatColors: [
      "Jet black with rich mahogany-tan markings",
    ],
    sheddingLevel: "low to moderate",
    droolingLevel: "low",
    distinctiveFeatures: [
      "Long, narrow, wedge-shaped head with a flat skull",
      "Bright, keen and observant expression",
      "Small, dark, almond-shaped eyes",
      "Small, V-shaped ears carried above the head; permitted ear carriage varies by registry and variety",
      "Compact, muscular body with an elegant, athletic outline",
      "Short, glossy coat requiring little routine grooming",
      "Distinct black-and-tan markings with clearly defined colour boundaries",
      "Tapering tail carried in line with the back rather than curled over it",
    ],
  },
  temperament: {
    traits: [
      "Alert and keenly observant",
      "Bright and quick to notice movement",
      "Affectionate and devoted to familiar people",
      "Energetic and athletic",
      "Curious and interested in exploring",
      "May pursue rodents and other small animals because of its working heritage",
      "Can be discerning around unfamiliar people",
      "Often enjoys learning when training is engaging and reward-based",
    ],
    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 3,
      independence: 3,
      trainability: 4,
      barking: 3,
      energy: 4,
    },
  },
  care: {
    exercise: {
      level: "moderate to high",
      minutesPerDay: {
        min: 45,
        max: 60,
      },
      activities: [
        "Daily walks with time to sniff and explore",
        "Fetch and supervised games in a secure area",
        "Short obedience and trick-training sessions",
        "Agility, rally or other suitable dog sports",
        "Scent games and food-puzzle activities",
      ],
    },
    grooming: {
      level: "low",
      brushing:
        "Wipe the coat with a soft grooming glove or damp cloth weekly; brush occasionally to remove loose hair and maintain shine.",
      bathing:
        "Bathe when necessary with a dog-appropriate shampoo. Avoid frequent bathing that dries the skin.",
      notes: [
        "The short coat is easy to maintain and does not usually need professional trimming.",
        "Check the ears regularly for redness, odour, excess wax or discharge.",
        "Trim nails regularly and inspect the paws after walks.",
        "Brush teeth with dog toothpaste as part of a consistent dental-care routine.",
        "Provide a warm, comfortable resting place in cold weather; the short coat offers limited insulation.",
      ],
    },
    training: {
      difficulty: "moderate",
      tips: [
        "Use short, positive sessions with food rewards, toys or play.",
        "Teach recall early, but do not rely on it to override a strong prey response around wildlife.",
        "Practise calm leash walking and attention around moving animals.",
        "Introduce people, dogs, sounds and new environments gradually and positively.",
        "Provide puzzle games, scent work and training tasks to keep the dog mentally engaged.",
        "Supervise interactions with small pets and keep the dog in a secure area where it cannot chase wildlife.",
      ],
      socialization:
        "Early and ongoing positive socialisation helps the dog become comfortable with unfamiliar people, dogs and everyday environments. Manage introductions thoughtfully and supervise interactions with small animals because prey drive varies by individual.",
    },
    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: [
        "Temperate climates",
        "Mild climates",
        "Cold weather requires suitable shelter or clothing when needed because the coat is short",
        "In hot weather, provide shade, fresh water and exercise during cooler hours",
      ],
      aloneTimeTolerance:
        "Individual tolerance varies. Teach alone time gradually and provide exercise and enrichment; avoid routinely leaving the dog alone for long periods.",
    },
  },
  nutrition: {
    dietType:
      "A complete and balanced diet suitable for the dog's life stage, activity level and body condition.",
    feedingFrequency: {
      puppy:
        "Feed a complete puppy diet in several age-appropriate meals each day, following veterinary guidance and the food's feeding instructions.",
      adult:
        "Two measured meals per day suit many adults; adjust the amount to activity and body condition.",
      senior:
        "Adjust food type and portions to activity, dental health, body condition and veterinary advice.",
    },
    guidelines:
      "Use a nutritionally complete diet appropriate for the dog's age and activity. Treat feeding-guide amounts as a starting point and adjust to maintain a lean, healthy body condition. Keep fresh water available and account for training treats in the daily food allowance.",
    considerations: [
      "Avoid excess calories and monitor body condition regularly.",
      "Use measured portions rather than relying only on visual estimates.",
      "Choose a diet appropriate for growth during puppyhood and avoid unnecessary supplements unless advised by a veterinarian.",
      "Discuss any persistent digestive changes, weight loss, weight gain or food intolerance with a veterinarian.",
    ],
    note:
      "This is general canine nutrition guidance, not an individual feeding prescription. Portion size depends on age, metabolism, activity and health.",
  },
  health: {
    overview:
      "The Manchester Terrier is often described as long-lived, but individual health varies. The breed's parent-club screening guidance includes testing or assessment for von Willebrand disease, thyroid disease, eye and cardiac conditions, and congenital deafness. Some additional conditions are listed as recommended screening topics. These recommendations support responsible breeding; they do not mean every dog will develop those conditions.",
    commonConditions: [
      "Von Willebrand disease: an inherited bleeding disorder for which DNA testing is recommended by the parent club.",
      "Autoimmune thyroiditis: a thyroid condition for which screening is recommended by the parent club.",
      "Patellar luxation: displacement of the kneecap, which can affect small and small-to-medium dogs.",
      "Juvenile dilated cardiomyopathy: a serious heart condition that the parent club lists as a recommended screening topic.",
      "Legg-Calvé-Perthes disease: a hip-joint condition listed in the parent club's recommended screening guidance.",
      "Xanthinuria type 2A: an inherited condition included in the parent club's recommended DNA screening guidance.",
      "Congenital deafness: the parent club lists BAER-based evaluation in its screening recommendations.",
    ],
    preventiveCare: [
      "Arrange regular veterinary examinations and keep vaccinations and parasite prevention appropriate to the dog's circumstances.",
      "Ask about the parents' health-screening records when choosing a puppy.",
      "Maintain a healthy body condition and provide regular exercise suited to age and fitness.",
      "Seek veterinary advice for unexplained bruising or bleeding, weakness, fainting, exercise intolerance, persistent lameness or changes in vision.",
      "Maintain dental hygiene, nail care, and routine ear and skin checks.",
      "Discuss anaesthesia and the dog's full medical history with the veterinarian before any procedure.",
    ],
    recommendedScreenings: [
      "Von Willebrand disease type 1 DNA test",
      "Thyroid evaluation for autoimmune thyroiditis",
      "Ophthalmologist eye examination",
      "Cardiac evaluation",
      "BAER-based evaluation for congenital deafness",
      "Discuss Legg-Calvé-Perthes evaluation, juvenile dilated cardiomyopathy DNA testing, xanthinuria type 2A DNA testing and patellar luxation evaluation with the breeder or veterinarian",
    ],
    dentalCare:
      "Brush regularly with dog toothpaste and arrange veterinary dental checks. Ask a veterinarian about persistent bad breath, gum inflammation, broken teeth or difficulty eating.",
    earCare:
      "Check the ears regularly for redness, odour, discharge or discomfort. Clean only as needed with a dog-safe product and seek veterinary advice if symptoms persist.",
    skinCare:
      "Inspect the short coat and skin during grooming. Seek veterinary advice for persistent itching, redness, lumps, hair loss or recurrent irritation.",
  },
  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,
    idealFor: [
      "People seeking a small, athletic companion",
      "Owners who enjoy daily walks, games and training",
      "Households willing to manage terrier prey drive responsibly",
      "People who prefer a short coat with relatively simple grooming needs",
      "Owners interested in agility, obedience, scent games or other dog activities",
    ],
    notIdealFor: [
      "Homes where small pets cannot be safely separated or supervised",
      "Owners expecting a dog that needs very little exercise or mental stimulation",
      "People unwilling to work on recall, leash manners and early socialisation",
      "Households where the dog would routinely be left alone for long periods without enrichment",
    ],
  },
  funFacts: [
    "The breed takes its name from Manchester, England, where it became associated with ratting and urban working life.",
    "The breed's history combines traditional black-and-tan terrier ancestry with a likely influence from Whippet-type dogs.",
    "In American Kennel Club classification, Manchester Terriers have Standard and Toy varieties; the Toy is a size variety rather than a separate breed in that system.",
    "Its distinct tan markings include small spots above the eyes and clearly separated markings on the muzzle and legs.",
  ],
  faq: [
    {
      question: "Where does the Manchester Terrier come from?",
      answer:
        "The Manchester Terrier originated in England, particularly around Manchester, where it was developed as a fast and effective vermin-catching dog.",
    },
    {
      question: "What colours are accepted for the Manchester Terrier?",
      answer:
        "The traditional standard colour is jet black with rich mahogany-tan markings. The boundaries between the two colours should be clearly defined.",
    },
    {
      question: "How much exercise does a Manchester Terrier need?",
      answer:
        "Many adults benefit from daily walks and additional play or training. Around 45–60 minutes is a practical starting estimate, but age, fitness and individual energy levels should guide the routine.",
    },
    {
      question: "Is the Manchester Terrier easy to groom?",
      answer:
        "Yes, its short, smooth coat is relatively low-maintenance. Regular wiping or brushing, nail trimming, ear checks and dental care are still important.",
    },
    {
      question: "Can a Manchester Terrier live with cats or small pets?",
      answer:
        "Some can, particularly with careful introductions, but prey drive varies and small animals may trigger chasing. Supervise interactions and use secure separation whenever needed.",
    },
    {
      question: "Which health tests should I ask a breeder about?",
      answer:
        "Ask for records of the parent club's recommended tests, including von Willebrand disease, thyroid, eye, cardiac and congenital-deafness assessments. Ask which additional tests are appropriate for the parents and current breeding programme.",
    },
  ],
  references: [
    "fci-manchester-terrier-standard",
    "akc-manchester-terrier-standard",
    "akc-manchester-terrier-profile",
    "royal-kennel-club-manchester-terrier-profile",
    "american-manchester-terrier-health",
    "wikimedia-manchester-terrier-photo",
  ],
  evidence: {
    alternateNames: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No alternate name was recorded because the consulted authoritative sources did not establish a sufficiently reliable current synonym.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No breed-specific scientific name is established in the consulted breed standards; therefore no taxonomic label is asserted.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "FCI classification",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "FCI classification is used; kennel-club grouping systems can differ.",
    },
    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "Origin",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "cited",
          locator: "Historical summary",
        },
        {
          id: "royal-kennel-club-manchester-terrier-profile",
          role: "verified",
          locator: "Breed history",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Manchester, England is the historically associated region and city; this is not a claim that the breed originated exclusively within modern city boundaries.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "Historical summary, general appearance, behaviour and temperament",
        },
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "About the breed and care guidance",
        },
        {
          id: "royal-kennel-club-manchester-terrier-profile",
          role: "cited",
          locator: "Breed history and characteristics",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Descriptions are original summaries of breed history and standard characteristics.",
    },
    "physical.sizeCategory": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-manchester-terrier-profile",
          role: "verified",
          locator: "Breed characteristics: size",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "The Royal Kennel Club categorises the breed as small.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "Size",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "The FCI standard gives 41 cm for dogs and 38 cm for bitches as standard heights. Equal bounds represent the stated target values, not guaranteed individual heights.",
    },
    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-manchester-terrier-standard",
          role: "verified",
          locator: "Size, proportion and substance: Standard variety weight",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "The AKC standard sets the Standard variety at over 12 lb and not exceeding 22 lb. The stored 5.5–10 kg range is a rounded conversion for app display and is not sex-specific in the cited standard.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-manchester-terrier-profile",
          role: "verified",
          locator: "Average sizes and life expectancy",
        },
        {
          id: "royal-kennel-club-manchester-terrier-profile",
          role: "cited",
          locator: "Breed characteristics: lifespan",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "The AKC lists 15–17 years; the Royal Kennel Club describes lifespan as over 12 years. Individual longevity varies.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "Colour",
        },
      ],
      verifiedOn: "2026-10-25",
      note: "Only the standard black-and-tan colour is recorded.",
    },
    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "royal-kennel-club-manchester-terrier-profile",
          role: "cited",
          locator: "Breed characteristics: sheds and coat length",
        },
      ],
      verifiedOn: null,
      note:
        "Low to moderate is an editorial estimate; the source confirms shedding but does not provide a measured shedding rate.",
    },
    "physical.droolingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "cited",
          locator: "Head and lips",
        },
      ],
      verifiedOn: null,
      note:
        "Low is an editorial estimate based on the breed's close-fitting lips and refined head, not a measured breed statistic.",
    },
    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "General appearance, head, eyes, ears, body, tail and coat",
        },
        {
          id: "akc-manchester-terrier-standard",
          role: "cited",
          locator: "General appearance",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "Behaviour and temperament",
        },
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Breed traits and about the breed",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Traits describe typical breed tendencies, not guaranteed behaviour in every individual.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Breed traits and personality",
        },
        {
          id: "fci-manchester-terrier-standard",
          role: "cited",
          locator: "Behaviour and temperament",
        },
      ],
      verifiedOn: null,
      note:
        "All 1–5 scores are editorial estimates for app comparison, not validated behavioural measurements.",
    },
    "care.exercise": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Exercise",
        },
        {
          id: "royal-kennel-club-manchester-terrier-profile",
          role: "cited",
          locator: "Breed characteristics: exercise",
        },
      ],
      verifiedOn: null,
      note:
        "Exercise level and duration are practical guidance, not an official standard requirement; adjust to the individual dog.",
    },
    "care.grooming": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Grooming",
        },
        {
          id: "royal-kennel-club-manchester-terrier-profile",
          role: "cited",
          locator: "Breed characteristics: grooming and coat",
        },
      ],
      verifiedOn: null,
      note:
        "Routine grooming guidance is based on the short coat and general dog-care practice.",
    },
    "care.training": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Training and socialisation",
        },
      ],
      verifiedOn: null,
      note:
        "Training advice is general guidance tailored to an active terrier with prey drive.",
    },
    "care.livingEnvironment": {
      reliability: "estimate",
      sources: [
        {
          id: "royal-kennel-club-manchester-terrier-profile",
          role: "cited",
          locator: "Breed characteristics: size of home, town or country and garden",
        },
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Exercise and care",
        },
      ],
      verifiedOn: null,
      note:
        "Suitability is an editorial assessment and depends on exercise, enrichment, local conditions and the individual dog.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Nutrition",
        },
      ],
      verifiedOn: null,
      note:
        "Feeding guidance is general canine nutrition advice, not an individual prescription.",
    },
    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-manchester-terrier-health",
          role: "verified",
          locator: "Health and Research: Standard Manchester Terrier screening",
        },
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Health and recommended health tests",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "The overview summarises screening guidance and does not imply that an individual dog has any listed condition.",
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-manchester-terrier-health",
          role: "verified",
          locator: "Required and recommended health screening lists for Standard Manchester Terriers",
        },
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Health and recommended health tests",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Conditions are included because they appear in breed-club screening guidance or health information. The list does not establish prevalence or mean every dog is affected.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive-care guidance for dogs.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-manchester-terrier-health",
          role: "verified",
          locator: "Health and Research: required and recommended screening",
        },
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Recommended health tests from the national breed club",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Screening lists may differ by variety and national breeding programme. Confirm current requirements with the responsible breed club and veterinarian.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine dental-care guidance.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine ear-care guidance.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General skin-care guidance.",
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Breed traits, exercise, training and care",
        },
        {
          id: "royal-kennel-club-manchester-terrier-profile",
          role: "cited",
          locator: "Size of home, exercise and town or country",
        },
      ],
      verifiedOn: null,
      note:
        "Suitability flags are editorial guidance, not universal rules. Household setup, training, supervision and the individual dog's temperament matter.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "Historical summary and classification",
        },
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "About the breed and Standard/Toy varieties",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-manchester-terrier-standard",
          role: "verified",
          locator: "Origin, history, size, coat and temperament",
        },
        {
          id: "akc-manchester-terrier-profile",
          role: "cited",
          locator: "Exercise, grooming, nutrition and health",
        },
        {
          id: "american-manchester-terrier-health",
          role: "cited",
          locator: "Health screening guidance",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Answers are original summaries; individual needs and outcomes vary.",
    },
  },
  updatedOn: "2026-10-25",
};
