import type { Breed } from "../schema/breed.types";

export const bull_terrier_miniature: Breed = {
  slug: "miniature-bull-terrier",
  name: "Miniature Bull Terrier",
  scientificName: null,
  alternateNames: [
    "Mini Bull Terrier",
    "Mini Bull",
    "Bull Terrier (Miniature)",
    "Bull Terrier Miniature",
  ],
  group: "FCI Group 3 — Terriers; Section 3 — Bull type Terriers",
  origin: {
    country: "Great Britain",
    region: null,
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/A_Miniature_Bull_Terrier.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:A_Miniature_Bull_Terrier.jpg",
      title: "A Miniature Bull Terrier.jpg",
      description: "Miniature Bull Terrier.",
      creator: "audrey_sel",
      uploader: "Flickr upload bot (uploaded to Wikimedia Commons by Frei sein)",
      capturedOn: "2009-02-09",
      uploadedOn: "2014-03-08",
      width: 1048,
      height: 1572,
      licenseId: "cc-by-sa-2.0",
      attribution:
        "Photo by audrey_sel, via Wikimedia Commons, licensed under CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0/). Indicate any changes; adaptations must be distributed under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-16",
    },
  ],
  overview: {
    summary:
      "The Miniature Bull Terrier packs the signature egg-shaped head, small upright ears, and muscular build of the Bull Terrier into a compact frame. Courageous, playful, and often clownish, it is even-tempered and responsive to fair leadership, needing daily exercise, positive training, and attentive supervision.",
    description:
      "Solidly muscled and active, the Miniature Bull Terrier is defined by its long, down-faced, egg-shaped profile, small triangular eyes, close-set erect ears, and short, glossy, harsh coat. Its rounded ribcage, deep chest, and short, strong back give an impression of concentrated power for its size. Spirited, fun-loving, and affectionate with family, it still carries a determined terrier streak and high energy, requiring consistent reward-based training, daily engagement, and careful management around other animals.",
    history:
      "Developed in nineteenth-century Britain from smaller Bull and Terrier dogs—originally bred from the old English Bulldog and the extinct White English Terrier—after James Hinks standardized the Bull Terrier type in the 1850s and exhibited it at Birmingham in 1862. Early miniature dogs were used for ratting and companionship but fell out of registry records in 1918. In 1938, Colonel Richard Glyn and fellow breeders founded a dedicated club to revive the smaller variety, which gained formal British recognition in 1939, North American recognition in 1991, and definitive international recognition in 2011.",
    originalPurpose:
      "A compact variety of the Bull Terrier bred for ratting, vermin control, and spirited companionship.",
    currentRoles: [
      "Active family and household companion",
      "Walking, play, and interactive enrichment partner",
      "Terrier games and scent-work activities",
      "Agility, obedience, and rally sports",
      "Conformation showing",
    ],
  },
  physical: {
    sizeCategory: "Small / Medium-sized Terrier",
    height: {
      unit: "cm",
      male: { min: null, max: 35.5 },
      female: { min: null, max: 35.5 },
    },
    weight: {
      unit: "lb",
      male: { min: 25, max: 45 },
      female: { min: 25, max: 45 },
    },
    lifespanYears: {
      min: 11,
      max: 13,
    },
    coatType:
      "Short, flat, close-lying, and harsh to the touch with a fine gloss; a soft winter undercoat may appear in colder months.",
    coatLength: "Short and even across the body.",
    coatColors: [
      "Pure white, with or without head markings and skin pigmentation",
      "Brindle",
      "Black brindle",
      "Red",
      "Fawn",
      "Tricolour",
    ],
    sheddingLevel:
      "Low to moderate; the short coat sheds year-round and responds well to weekly brushing.",
    droolingLevel: null,
    distinctiveFeatures: [
      "Long, gently curving, down-faced egg-shaped head free of stop",
      "Small, dark, obliquely set triangular eyes",
      "Small, thin ears held stiffly erect and close together",
      "Compact, muscular, squarely proportioned body",
      "Deep chest and well-rounded ribcage",
      "Short, strong back with a slight arch over the loin",
      "Short, low-set tail carried horizontally and tapering to a fine point",
      "Compact, cat-like feet with well-arched toes",
      "Short, harsh, glossy coat",
    ],
  },
  temperament: {
    traits: [
      "Courageous and fearless",
      "Playful, mischievous, and comical",
      "Even-tempered and affectionate with family",
      "Intelligent and alert",
      "Strong-willed and persistent",
      "Responsive to fair, consistent boundaries",
      "Curious with a natural terrier chase drive toward small animals",
    ],
    scores: {
      affection: null,
      withChildren: null,
      withDogs: null,
      withStrangers: null,
      protectiveness: null,
      independence: null,
      trainability: null,
      barking: null,
      energy: null,
    },
  },
  care: {
    exercise: {
      level:
        "Moderate to high. Muscular and energetic, it needs daily brisk walks, interactive play, and mental enrichment scaled to age, fitness, and weather.",
      minutesPerDay: null,
      activities: [
        "Daily brisk walks on a secure lead",
        "Reward-based obedience and trick training",
        "Interactive tug, fetch, and play sessions",
        "Scent games and food-dispensing puzzles",
        "Agility or earthdog sports once physically mature",
        "Supervised play in a securely fenced yard",
        "Structured settling exercises indoors",
      ],
    },
    grooming: {
      level:
        "Low to moderate. The sleek, short coat needs only weekly brushing alongside routine nail, ear, skin, and dental care.",
      brushing:
        "Brush weekly with a soft bristle brush or rubber hound mitt to lift loose hair and maintain coat shine, checking the skin around the face, paws, and belly.",
      bathing:
        "Bathe when dirty using a gentle dog-safe shampoo, rinsing thoroughly to avoid drying the skin.",
      notes: [
        "Use a soft bristle brush or rubber glove weekly to remove loose hair.",
        "Inspect skin routinely for redness, scaling, or sores.",
        "Check upright ears weekly for wax buildup, redness, or odour.",
        "Trim strong, fast-growing nails regularly to prevent splitting.",
        "Brush teeth routinely with dog-safe toothpaste.",
        "Practice calm handling early so grooming and vet checks stay stress-free.",
      ],
    },
    training: {
      difficulty:
        "Moderate to high. Smart and creative, yet strong-willed and easily bored by repetition, requiring upbeat, reward-based consistency.",
      tips: [
        "Start reward-based training, recall, and lead manners early in puppyhood.",
        "Keep sessions short, fun, and varied to hold terrier focus.",
        "Teach impulse control, polite greetings, and calm settling on cue.",
        "Practice off-lead work only inside securely fenced areas.",
        "Manage introductions to unfamiliar dogs carefully without forcing contact.",
        "Supervise closely around cats, small pets, and wildlife.",
        "Condition calm cooperation for nail trims, ear checks, and veterinary exams.",
      ],
      socialization:
        "Provide gradual, positive exposure to varied people, steady dogs, sounds, surfaces, and public settings from puppyhood. Reward calm behavior, supervise all interactions with children and other pets, and give the dog a quiet resting spot.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,
      climates: [
        "The short coat offers limited cold protection; provide warm indoor bedding and a coat during chilly walks.",
        "Provide shade, ventilation, and fresh water in warm weather, avoiding heavy exertion in peak heat.",
        "Protect white-coated areas from prolonged sun exposure.",
      ],
      aloneTimeTolerance: null,
    },
  },
  nutrition: {
    dietType:
      "Complete, balanced dog food matched to life stage, body condition, activity level, and veterinary guidance.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Start with the food manufacturer's portion guide and adjust to maintain a lean, muscular waist without excess weight on a compact frame. Measure meals, count training treats within daily calories, and keep fresh water available at all times.",
    considerations: [
      "Monitor body condition score regularly and adjust portions as activity changes.",
      "Count training treats and chews within the daily calorie budget.",
      "Select a complete formula suited to life stage and any veterinary needs.",
      "Transition foods gradually over several days to prevent digestive upset.",
      "Consult a veterinarian for persistent appetite, weight, or digestive changes.",
    ],
    note:
      "No universal calorie target or meal schedule applies to every Miniature Bull Terrier; tailor portions to the individual dog.",
  },
  health: {
    overview:
      "Recognized inherited and breed-monitored health concerns include primary lens luxation (PLL), patellar luxation, heart disease, hereditary kidney disease, congenital deafness, laryngeal paralysis, and lethal acrodermatitis (LAD). These represent screening priorities rather than conditions every dog will develop. Recommended breeding checks include DNA tests for PLL, LAD, and miniature Bull Terrier-type laryngeal paralysis, along with cardiac exams, BAER hearing tests, patella evaluations, and kidney urine protein-to-creatinine ratio (UPC) testing.",
    commonConditions: [
      "Primary lens luxation (PLL), an inherited eye disorder that can lead to painful lens displacement and glaucoma.",
      "Patellar luxation, where the kneecap slips out of its normal groove.",
      "Heart disease, including congenital and acquired cardiac conditions monitored before breeding.",
      "Kidney disease, monitored through urine protein-to-creatinine ratio (UPC) testing.",
      "Congenital deafness (especially in all-white dogs), evaluated via BAER hearing testing.",
      "Laryngeal paralysis, including a breed-associated form detectable by DNA testing.",
      "Lethal acrodermatitis (LAD), a severe inherited zinc-metabolism and immune disorder detectable by DNA testing.",
    ],
    preventiveCare: [
      "Request documented parental DNA test results (PLL, LAD, laryngeal paralysis) and clinical screening certificates from breeders.",
      "Discuss PLL carrier status and routine ophthalmic exams with your veterinarian.",
      "Verify BAER hearing test results, cardiac clearances, and kidney UPC records in the breeding line.",
      "Maintain a lean body weight and provide age-appropriate exercise.",
      "Keep routine veterinary check-ups, vaccinations, and parasite prevention current.",
      "Seek immediate veterinary care for eye squinting or redness, breathing noise, fainting, hearing loss, or persistent skin lesions.",
    ],
    recommendedScreenings: [
      "Primary lens luxation (PLL) DNA test and ophthalmologist examination.",
      "Lethal acrodermatitis (LAD) DNA test.",
      "Miniature Bull Terrier-type laryngeal paralysis (LP) DNA test.",
      "BAER hearing test.",
      "Cardiac evaluation (auscultation and/or echocardiography).",
      "Kidney evaluation including urine protein-to-creatinine ratio (UPC).",
      "Patellar luxation evaluation.",
    ],
    dentalCare:
      "Brush teeth regularly with dog-safe toothpaste and schedule periodic veterinary dental checks, watching for bad breath, broken teeth, or gum redness.",
    earCare:
      "Inspect the upright ears weekly for redness, wax, odour, or irritation, and confirm BAER hearing status in puppies.",
    skinCare:
      "Check skin during weekly brushing for redness, crusting, sores, footpad thickening, or hair loss, seeking prompt veterinary advice for persistent skin issues.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "Active owners who enjoy an upbeat, comical, interactive terrier companion",
      "Households committed to daily walks, play, and mental enrichment",
      "Handlers who use patient, reward-based training and clear boundaries",
      "Owners prepared to supervise interactions with unfamiliar dogs and small pets",
      "Families proactive about health screening and preventive veterinary care",
    ],
    notIdealFor: [
      "Households wanting a hands-off, low-interaction dog",
      "Owners unable to provide consistent training and supervision",
      "Homes where the dog is left alone for long hours without stimulation",
      "People expecting automatic compatibility with every unfamiliar dog or small animal",
    ],
  },
  funFacts: [
    "It shares the unmistakable down-faced, egg-shaped head of the standard Bull Terrier in a compact body.",
    "A dedicated breed club was established in Britain in 1938 by Colonel Richard Glyn and fellow enthusiasts to save the miniature variety.",
    "International breed standards set a maximum height of 35.5 cm without prescribing a fixed weight cap, requiring weight to stay proportionate to frame.",
    "Despite its short, sleek outer coat, a soft winter undercoat can grow in during colder weather.",
    "Playful and exuberant, it is affectionately nicknamed the 'Clown Prince' among terriers.",
  ],
  faq: [
    {
      question: "Where does the Miniature Bull Terrier originate?",
      answer:
        "It originates in Great Britain, where smaller Bull and Terrier dogs were bred in the nineteenth century and formally revived as a distinct miniature breed in the late 1930s.",
    },
    {
      question: "How tall is a Miniature Bull Terrier?",
      answer:
        "International standards state that height should not exceed 35.5 cm at the withers, while North American standards specify a range of 10 to 14 in.",
    },
    {
      question: "How much should a Miniature Bull Terrier weigh?",
      answer:
        "Primary international standards set no fixed weight limit, asking only that substance match the dog's frame; North American kennel-club profiles note typical ranges of 18–28 lb or 25–45 lb depending on build.",
    },
    {
      question: "What does a Miniature Bull Terrier look like?",
      answer:
        "It is a compact, muscular terrier with a signature egg-shaped head, small triangular eyes, close-set upright ears, a deep chest, and a short, harsh, glossy coat.",
    },
    {
      question: "What coat colours are recognised?",
      answer:
        "Accepted colours are pure white (with optional head markings) and coloured varieties where colour predominates—including brindle, black brindle, red, fawn, and tricolour—while blue and liver are considered undesirable.",
    },
    {
      question: "Is the Miniature Bull Terrier easy to train?",
      answer:
        "Smart and eager for fun, it can also be strong-willed and persistent, so short, upbeat, reward-based training sessions and early socialization work best.",
    },
    {
      question: "What health tests should I ask a breeder about?",
      answer:
        "Request DNA test results for primary lens luxation (PLL), lethal acrodermatitis (LAD), and laryngeal paralysis, along with BAER hearing, cardiac, patella, and kidney (UPC) evaluations.",
    },
    {
      question: "Does the Miniature Bull Terrier need a lot of grooming?",
      answer:
        "Very little. Weekly brushing with a soft bristle brush or rubber glove keeps the short coat tidy, paired with regular nail trims, ear checks, and tooth brushing.",
    },
    {
      question: "Can a Miniature Bull Terrier live in an apartment?",
      answer:
        "No universal rating is established, though its compact size can suit smaller homes if owners provide generous daily exercise, training, mental play, and companionship.",
    },
  ],
  references: [
    "fci-miniature-bull-terrier-standard-359",
    "akc-miniature-bull-terrier-standard",
    "ukc-miniature-bull-terrier-standard",
    "canadian-kennel-club-miniature-bull-terrier-profile",
    "miniature-bull-terrier-club-health",
    "american-kennel-club-terrier-group-health-testing-requirements",
    "cornell-primary-lens-luxation",
    "commons-miniature-bull-terrier-audrey-sel",
    "the-dog-api",
  ],
  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A breed-specific scientific name is not assigned in the breed standards reviewed.",
    },
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        { id: "fci-miniature-bull-terrier-standard-359", role: "verified", locator: "Official breed title" },
        { id: "canadian-kennel-club-miniature-bull-terrier-profile", role: "cited", locator: "Breed profile title and common name" },
        { id: "the-dog-api", role: "cited", locator: "breed.alt_names (Mini Bull)" },
      ],
      verifiedOn: "2026-11-16",
      note: "Alternate names reflect established registry, kennel-club, and The Dog API usage.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        { id: "fci-miniature-bull-terrier-standard-359", role: "verified", locator: "FCI classification: Group 3, Section 3" },
      ],
      verifiedOn: "2026-11-16",
      note: "Classification follows the FCI standard; The Dog API lists Terrier.",
    },
    origin: {
      reliability: "official_standard",
      sources: [
        { id: "fci-miniature-bull-terrier-standard-359", role: "verified", locator: "Origin: Great Britain" },
        { id: "the-dog-api", role: "cited", locator: "breed.origin (England)" },
      ],
      verifiedOn: "2026-11-16",
      note: "Country of origin follows the FCI standard (Great Britain / England).",
    },
    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "The breed standards reviewed identify Great Britain as the country of origin without specifying a narrower region.",
    },
    overview: {
      reliability: "official_standard",
      sources: [
        { id: "fci-miniature-bull-terrier-standard-359", role: "verified", locator: "Historical summary, general appearance and temperament" },
        { id: "akc-miniature-bull-terrier-standard", role: "verified", locator: "Official standard: general appearance and size" },
        { id: "the-dog-api", role: "cited", locator: "breed.description and breed.history" },
      ],
      verifiedOn: "2026-11-16",
      note: "All user-facing prose is newly written original wording summarizing official standards and historical records.",
    },
    "overview.currentRoles": {
      reliability: "estimate",
      sources: [
        { id: "fci-miniature-bull-terrier-standard-359", role: "cited", locator: "Utilization: Terrier" },
        { id: "canadian-kennel-club-miniature-bull-terrier-profile", role: "cited", locator: "Activity level and companion profile" },
      ],
      verifiedOn: null,
      note: "Current activities are practical examples based on terrier characteristics.",
    },
    physical: {
      reliability: "official_standard",
      sources: [
        { id: "fci-miniature-bull-terrier-standard-359", role: "verified", locator: "General appearance, head, body, coat, colour and size" },
        { id: "akc-miniature-bull-terrier-standard", role: "verified", locator: "Official standard: size, coat, colour and conformation" },
      ],
      verifiedOn: "2026-11-16",
      note: "Physical description is paraphrased from official breed standards.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        { id: "fci-miniature-bull-terrier-standard-359", role: "verified", locator: "Size and weight: height should not exceed 35.5 cm" },
      ],
      verifiedOn: "2026-11-16",
      note: "FCI Standard No. 359 sets a maximum height of 35.5 cm with no minimum; AKC specifies 10–14 in and The Dog API lists 25–36 cm.",
    },
    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        { id: "canadian-kennel-club-miniature-bull-terrier-profile", role: "verified", locator: "Height/Weight: usually 25–45 pounds" },
        { id: "fci-miniature-bull-terrier-standard-359", role: "conflicting", locator: "Size and weight: explicitly states there is no weight limit" },
        { id: "the-dog-api", role: "conflicting", locator: "breed.weight.metric (8–13 kg)" },
      ],
      verifiedOn: "2026-11-16",
      note: "Retains the Canadian Kennel Club profile's 25–45 lb range (FCI sets no weight limit; AKC profile notes 18–28 lb; The Dog API lists 8–13 kg).",
    },
    "physical.weight.male.max": {
      reliability: "reliable_source",
      sources: [
        { id: "canadian-kennel-club-miniature-bull-terrier-profile", role: "verified", locator: "Height/Weight: usually 25–45 pounds; no sex-specific split" },
      ],
      verifiedOn: "2026-11-16",
      note: "Upper end of the Canadian Kennel Club's usual profile range; not an official breed-standard maximum.",
    },
    "physical.weight.female.max": {
      reliability: "reliable_source",
      sources: [
        { id: "canadian-kennel-club-miniature-bull-terrier-profile", role: "verified", locator: "Height/Weight: usually 25–45 pounds; no sex-specific split" },
      ],
      verifiedOn: "2026-11-16",
      note: "Upper end of the Canadian Kennel Club's usual profile range; not an official breed-standard maximum.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        { id: "the-dog-api", role: "verified", locator: "breed.life_span (11–13 years)" },
      ],
      verifiedOn: "2026-11-16",
      note: "FCI Standard No. 359 does not publish a lifespan; 11–13 years is sourced from The Dog API.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        { id: "fci-miniature-bull-terrier-standard-359", role: "verified", locator: "Coat: short, flat, even and harsh to touch; winter undercoat may be present" },
      ],
      verifiedOn: "2026-11-16",
      note: "Coat description follows the FCI standard.",
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        { id: "fci-miniature-bull-terrier-standard-359", role: "verified", locator: "Coat: short, flat and even" },
      ],
      verifiedOn: "2026-11-16",
      note: "Describes coat texture and length without a numerical measurement.",
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        { id: "fci-miniature-bull-terrier-standard-359", role: "verified", locator: "Coat colour: White and Coloured varieties" },
      ],
      verifiedOn: "2026-11-16",
      note: "Colours follow the FCI standard rather than The Dog API's species-wide colour list; blue and liver are highly undesirable.",
    },
    "physical.sheddingLevel": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General guidance for a short-coated dog.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling level was established.",
    },
    temperament: {
      reliability: "official_standard",
      sources: [
        { id: "fci-miniature-bull-terrier-standard-359", role: "verified", locator: "Behaviour and temperament" },
        { id: "akc-miniature-bull-terrier-standard", role: "verified", locator: "General appearance and temperament" },
        { id: "the-dog-api", role: "cited", locator: "breed.temperament" },
      ],
      verifiedOn: "2026-11-16",
      note: "Breed-level temperament paraphrased from official standards; individual dogs vary.",
    },
    "temperament.scores.affection": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No validated breed-specific affection score was found.",
    },
    "temperament.scores.withChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No validated breed-specific with-children score was found.",
    },
    "temperament.scores.withDogs": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No validated breed-specific with-dogs score was found.",
    },
    "temperament.scores.withStrangers": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No validated breed-specific with-strangers score was found.",
    },
    "temperament.scores.protectiveness": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No validated breed-specific protectiveness score was found.",
    },
    "temperament.scores.independence": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No validated breed-specific independence score was found.",
    },
    "temperament.scores.trainability": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No validated breed-specific trainability score was found.",
    },
    "temperament.scores.barking": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No validated breed-specific barking score was found.",
    },
    "temperament.scores.energy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No validated breed-specific energy score was found.",
    },
    care: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General dog-care guidance adapted to the breed's size, coat, and active terrier traits.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable universal daily exercise duration in minutes was established.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a universal apartment-suitability rating.",
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific alone-time duration was established.",
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal breed-specific puppy feeding schedule was established.",
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal breed-specific adult feeding schedule was established.",
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal breed-specific senior feeding schedule was established.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General nutrition guidance tailored to body condition, age, activity, and veterinary advice.",
    },
    health: {
      reliability: "reliable_source",
      sources: [
        { id: "miniature-bull-terrier-club-health", role: "verified", locator: "Miniature Bull Terrier Health: conditions monitored by the breed club" },
        { id: "american-kennel-club-terrier-group-health-testing-requirements", role: "verified", locator: "Miniature Bull Terrier recommended health tests" },
      ],
      verifiedOn: "2026-11-16",
      note: "Reports conditions and tests identified by breed-health organizations without claiming universal prevalence.",
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        { id: "miniature-bull-terrier-club-health", role: "verified", locator: "Main inherited conditions monitored and tested by the club" },
        { id: "cornell-primary-lens-luxation", role: "cited", locator: "Primary lens luxation: breed predisposition and clinical effects" },
      ],
      verifiedOn: "2026-11-16",
      note: "Reflects breed-club monitoring and veterinary reference.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        { id: "american-kennel-club-terrier-group-health-testing-requirements", role: "verified", locator: "Miniature Bull Terrier recommended health tests" },
        { id: "miniature-bull-terrier-club-health", role: "verified", locator: "Breed club testing recommendations" },
      ],
      verifiedOn: "2026-11-16",
      note: "Testing recommendations from national breed clubs and health registries.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive veterinary-care guidance.",
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
      note: "General ear-care guidance; hearing screening is addressed separately.",
    },
    "health.skinCare": {
      reliability: "reliable_source",
      sources: [
        { id: "miniature-bull-terrier-club-health", role: "verified", locator: "Lethal acrodermatitis (LAD) listed among breed health concerns" },
      ],
      verifiedOn: "2026-11-16",
      note: "Skin monitoring advice highlights lethal acrodermatitis.",
    },
    suitability: {
      reliability: "estimate",
      sources: [
        { id: "fci-miniature-bull-terrier-standard-359", role: "cited", locator: "Active, muscular terrier with courageous and spirited temperament" },
        { id: "canadian-kennel-club-miniature-bull-terrier-profile", role: "cited", locator: "Activity level and companion description" },
      ],
      verifiedOn: null,
      note: "Editorial household-fit guidance based on breed characteristics.",
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a universal first-time-owner rating.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a universal family-with-children rating.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a universal senior-owner rating.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable universal apartment-living rating was established.",
    },
    funFacts: {
      reliability: "official_standard",
      sources: [
        { id: "fci-miniature-bull-terrier-standard-359", role: "verified", locator: "Historical summary, breed type, height and coat" },
      ],
      verifiedOn: "2026-11-16",
      note: "Facts written in original wording from the official breed standard.",
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        { id: "fci-miniature-bull-terrier-standard-359", role: "verified", locator: "Origin, history, size, coat and temperament" },
        { id: "canadian-kennel-club-miniature-bull-terrier-profile", role: "verified", locator: "Height and weight profile" },
        { id: "american-kennel-club-terrier-group-health-testing-requirements", role: "verified", locator: "Recommended health tests" },
      ],
      verifiedOn: "2026-11-16",
      note: "Original answers summarizing breed standards and health guidance.",
    },
  },
  updatedOn: "2026-11-16",
};
