import type { Breed } from "../schema/breed.types";

export const jack_russell_terrier: Breed = {
  slug: "jack-russell-terrier",
  name: "Jack Russell Terrier",
  scientificName: null,
  alternateNames: ["Terrier Jack Russell"],
  group: "Terriers; Small Working Terriers",
  origin: {
    country: "England",
    region: null,
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Jack_russell_terrier.JPG",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Jack_russell_terrier.JPG",
      title: "Jack russell terrier.JPG",
      description: "Photograph of Jack Russell Terrier dogs.",
      creator: "Ilmelodoro",
      uploader: "Ilmelodoro",
      capturedOn: "2012-01-15",
      uploadedOn: "2012-05-26",
      width: 2769,
      height: 1904,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Ilmelodoro, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Indicate any changes made; adaptations must comply with applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-27",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Jack_Russel_Terrier.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Jack_Russel_Terrier.jpg",
      title: "Jack Russel Terrier.jpg",
      description: "Photograph of a Jack Russell Terrier.",
      creator: "Johannesvg",
      uploader: "Johannesvg",
      capturedOn: "2012-01-15",
      uploadedOn: "2013-01-06",
      width: 427,
      height: 640,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Johannesvg, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Indicate any changes made; adaptations must comply with applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-27",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Jack_Russell_terrier_puppy.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Jack_Russell_terrier_puppy.jpg",
      title: "Jack Russell terrier puppy.jpg",
      description: "Photograph of an 11-week-old Jack Russell Terrier puppy.",
      creator: "3steph14",
      uploader: "3steph14",
      capturedOn: "2023-10-25",
      uploadedOn: "2023-11-30",
      width: 4080,
      height: 3072,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by 3steph14, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate any changes made; adaptations must comply with applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-27",
    },
  ],
  overview: {
    summary:
      "A small, tenacious working terrier originally bred in England to pursue quarry underground, the Jack Russell Terrier was subsequently developed into its modern form in Australia. Alert, bold, and exceptionally energetic, this breed combines sharp intelligence with a determined working drive. It flourishes in active households offering daily vigorous physical activity, thoughtful positive training, and constructive outlets for its natural desire to explore, chase, and dig.",
    description:
      "Built slightly longer than tall with an athletic, supple silhouette, the Jack Russell Terrier features a flexible, shallow chest engineered for movement through subterranean dens. Its weather-resistant double coat presents in smooth, rough, or broken textures, predominantly featuring a white ground colour accented by crisp black or tan markings. Far more than a companion lap dog, this terrier possesses persistent drive, acute reflexes, and tireless curiosity. Daily mental enrichment, structured physical exercise, and secure containment are vital to channel its strong working instincts constructively.",
    history:
      "The breed traces its ancestry to nineteenth-century Devon, England, where the Reverend John Russell bred working white-bodied terriers capable of matching hounds across country and flushing foxes from underground dens without causing harm. Working terriers carrying this bloodline were subsequently brought to Australia, where enthusiasts preserved their hunting utility while refining the shorter-legged, balanced working conformation recognised worldwide today. It remains physically and proportionally distinct from the taller, square-built Parson Russell Terrier.",
    originalPurpose:
      "A specialised working earthdog bred to run with hounds, track quarry to subterranean dens, and bolt foxes and other burrowing animals.",
    currentRoles: [
      "Active companion",
      "Agility and flyball competitor",
      "Scent work and tracking partner",
      "Earthdog and barn hunt participant",
      "Obedience and trick training partner",
    ],
  },
  physical: {
    sizeCategory: "Small",
    height: {
      unit: "cm",
      male: { min: 25, max: 30 },
      female: { min: 25, max: 30 },
    },
    weight: {
      unit: "kg",
      male: { min: 5, max: 6 },
      female: { min: 5, max: 6 },
    },
    lifespanYears: { min: 13, max: 15 },
    coatType:
      "Weather-resistant, harsh protective double coat occurring in smooth, broken, or rough textures that shield the dog against dense brush and damp earth.",
    coatLength: "Short, with smooth, broken, and rough varieties.",
    coatColors: [
      "Predominantly white with tan markings",
      "Predominantly white with black markings",
      "Predominantly white with black and tan markings",
    ],
    sheddingLevel: "Low to moderate; regular seasonal shedding.",
    droolingLevel: "Low",
    distinctiveFeatures: [
      "Compact, flexible rectangular frame slightly longer than tall",
      "Chest behind the elbows easily spannable by two average hands",
      "Keen, almond-shaped dark eyes with an alert, intelligent expression",
      "V-shaped button or dropped ears carried forward against the head",
      "Weatherproof coat predominantly white with black and/or tan markings",
      "Tail carried erect and cheerful when moving",
    ],
  },
  temperament: {
    traits: [
      "Spirited, alert, and exceptionally active",
      "Bold, confident, and fearless",
      "Affectionate and deeply loyal to household members",
      "Intelligent and rapid to master complex tasks",
      "Tenacious and single-minded when investigating scents or prey",
      "Pronounced chase drive toward small animals and moving objects",
      "Inclined to vocalise or dig when under-stimulated or trailing quarry",
      "Individual behaviour influenced by lineage, early socialisation, and handling",
    ],
    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 2,
      independence: 4,
      trainability: 4,
      barking: 4,
      energy: 5,
    },
  },
  care: {
    exercise: {
      level:
        "High. This active working terrier requires substantial daily physical exertion combined with engaging mental tasks to satisfy its energetic drive and working heritage.",
      minutesPerDay: {
        min: 45,
        max: 60,
      },
      activities: [
        "Brisk walks with plentiful opportunities for sniffing and investigating",
        "Interactive fetch, tug, and retrieval games in a securely enclosed space",
        "Agility courses, flyball, and obstacle navigation exercises",
        "Scent discrimination games, nosework, and food puzzle challenges",
        "Earthdog drills and barn hunt tracking activities",
        "Short, positive obedience and trick training sessions",
      ],
    },
    grooming: {
      level: "Low to moderate; smooth coats need minimal upkeep, while broken and rough coats require occasional hand-stripping.",
      brushing:
        "Brush weekly with a rubber curry or firm bristle brush for smooth coats, or a slicker brush and pin comb for rough and broken varieties to clear loose undercoat.",
      bathing:
        "Bathe only when visibly muddy or soiled using a mild dog shampoo to preserve the coat's natural weather-resistant oils.",
      notes: [
        "Rough and broken coats benefit from periodic hand-stripping to maintain proper wiry texture and water repellency.",
        "Check ear canals weekly for debris, dirt, or signs of irritation, cleaning only when necessary.",
        "Trim nails every two to three weeks to maintain comfortable paw alignment and footing.",
        "Brush teeth regularly with dog-safe enzymatic toothpaste to support oral health.",
        "Inspect the skin and coat for ticks, burs, or minor abrasions following outdoor activity.",
      ],
    },
    training: {
      difficulty:
        "Moderate to challenging. Highly intelligent and quick to learn, but possesses a strong independent streak and easily becomes bored with repetitive routines.",
      tips: [
        "Apply positive reinforcement techniques utilising high-value treats, toy rewards, and enthusiastic praise.",
        "Keep training sessions short, varied, and fast-paced to maintain engagement.",
        "Prioritise early recall training and impulse control around exciting distractions.",
        "Direct natural digging and chasing instincts into structured games and sports.",
        "Ensure perimeter fences are secure and check for digging attempts near fence lines.",
        "Keep on leash in unfenced areas to prevent sudden pursuit of wildlife.",
      ],
      socialization:
        "Provide structured, positive exposure to novel sounds, varied surfaces, other dogs, and unfamiliar people throughout puppyhood. Active management and supervision remain necessary around cats and smaller pets, as socialisation does not eliminate inherited hunting instincts.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,
      climates: [
        "Adaptable to varied temperate climates when provided appropriate shelter, hydration, and indoor living.",
        "In hot weather, exercise during cooler morning or evening hours and provide shaded rest areas and fresh water.",
        "In cold or wet conditions, provide a dry resting space and consider a fitted canine jacket for smooth-coated dogs.",
      ],
      aloneTimeTolerance: null,
    },
  },
  nutrition: {
    dietType:
      "A complete and balanced canine diet formulated for small breeds, tailored to life stage, physical activity, and body condition.",
    feedingFrequency: {
      puppy:
        "Feed three to four measured meals daily of a small-breed puppy diet to support steady growth and active metabolism.",
      adult:
        "Provide two measured meals daily of an adult formula, monitoring body condition closely to maintain lean muscle mass.",
      senior:
        "Offer two measured meals daily formulated for mature dogs, adjusting caloric intake to match reduced activity.",
    },
    guidelines:
      "Maintain a lean, muscular working condition where ribs can be readily felt beneath a slight fat covering without protruding. Measure all daily portions precisely and factor training treats into the total energy allowance. Ensure unrestricted access to fresh drinking water and seek veterinary advice for persistent weight fluctuations.",
    considerations: [
      "Calibrate portion sizes to individual activity levels and body condition scores.",
      "Include training treats within the total daily caloric budget to prevent stealth weight gain.",
      "Provide continuous access to clean, fresh drinking water.",
      "Introduce dietary changes gradually across seven to ten days to minimise digestive disturbance.",
      "Consult a veterinarian before introducing vitamins or dietary supplements.",
    ],
    note:
      "Exact daily caloric requirements vary depending on individual age, metabolic rate, body condition, and physical workload.",
  },
  health: {
    overview:
      "Generally a robust and long-lived breed with a typical lifespan of 13 to 15 years, though susceptible to specific inherited ocular, neurological, and orthopaedic conditions. Dedicated breeding programmes utilise DNA testing and clinical screening to detect primary lens luxation, cerebellar ataxias, and patellar laxity prior to breeding.",
    commonConditions: [
      "Primary lens luxation (PLL), an inherited breakdown of ocular ciliary zonules leading to lens dislocation and acute secondary glaucoma",
      "Late-onset ataxia (LOA), a progressive neurodegenerative disorder causing loss of balance and motor coordination",
      "Spinocerebellar ataxia (SCA), an inherited condition associated with gait abnormalities, myokymia, and neuromyotonia",
      "Medial patellar luxation, involving instability or displacement of the kneecap out of the femoral groove",
      "Congenital sensorineural deafness, associated with extensive white pigmentation across the head and inner ear",
    ],
    preventiveCare: [
      "Schedule regular wellness examinations with thorough physical and dental evaluations.",
      "Confirm parentage DNA test results for primary lens luxation, late-onset ataxia, and spinocerebellar ataxia.",
      "Arrange veterinary ophthalmic examinations to monitor intraocular pressures and anterior eye health.",
      "Perform routine home tooth brushing to counter periodontal disease common in small-breed jaws.",
      "Maintain current core vaccinations and broad-spectrum parasite prevention appropriate to the region.",
      "Maintain an optimal, lean body condition to reduce mechanical strain on knees and hips.",
    ],
    recommendedScreenings: [
      "DNA test for primary lens luxation (PLL) targeting the ADAMTS17 gene variant",
      "DNA test for late-onset ataxia (LOA) screening for the CAPN1 mutation",
      "DNA test for spinocerebellar ataxia (SCA) screening for the KCNJ10 gene mutation",
      "Annual clinical eye examination conducted by a veterinary ophthalmologist",
      "Orthopaedic clinical evaluation to assess stifle stability and check for patellar luxation",
      "Brainstem auditory evoked response (BAER) hearing evaluation for puppies with white head markings",
    ],
    dentalCare:
      "Brush teeth several times weekly with canine enzymatic toothpaste. Regular home brushing combined with veterinary dental checks helps prevent tartar build-up, gingival inflammation, and early tooth loss.",
    earCare:
      "Inspect ears weekly for accumulated wax, redness, foreign matter, or foul odour. Clean gently as needed using a pH-balanced veterinary ear cleaner, avoiding inserting applicators into the ear canal.",
    skinCare:
      "Check the skin during grooming for redness, flaking, external parasites, or minor cuts. Promptly clean field scratches and consult a veterinarian if persistent itching or hot spots develop.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "Active households that enjoy daily outdoor exercise, hiking, and interactive canine sports",
      "Owners committed to providing secure fencing and close supervision around smaller wildlife",
      "Handlers interested in positive reinforcement training, scent work, and problem-solving activities",
      "Families who appreciate energetic terrier drive, vibrant personality, and alert companionship",
    ],
    notIdealFor: [
      "Sedentary households seeking a low-energy companion requiring minimal physical exertion",
      "Homes where small free-roaming animals cannot be safely separated from a high-prey-drive dog",
      "Owners expecting an off-leash dog in open public areas without extensive recall conditioning",
      "Households unable to dedicate consistent time each day to physical and mental enrichment",
    ],
  },
  funFacts: [
    "The breed traces back to working terriers bred in nineteenth-century Devon, England, but received its modern formal recognition and refinement in Australia.",
    "Functional chest size is critical: an adult's ribcage behind the forelegs must be comfortably spannable by two average adult hands.",
    "The weather-resistant double coat presents in three textures—smooth, broken, and rough—all originating within the exact same litters.",
    "While sharing early ancestral heritage with the taller, square-built Parson Russell Terrier, the Jack Russell possesses distinct rectangular proportions and a lower center of gravity.",
  ],
  faq: [
    {
      question: "Where did the Jack Russell Terrier originate?",
      answer:
        "The ancestral working lines were originally bred in nineteenth-century England by the Reverend John Russell to hunt foxes, while the shorter-stature dog was refined and developed into its distinct recognized form in Australia.",
    },
    {
      question: "What is the typical height of an adult Jack Russell Terrier?",
      answer:
        "Adult height typically ranges from 25 to 30 cm at the withers for both males and females.",
    },
    {
      question: "How much does a healthy Jack Russell Terrier weigh?",
      answer:
        "Functional working weight averages approximately 1 kg for every 5 cm of height, corresponding to an ideal adult weight between 5 and 6 kg depending on size and musculature.",
    },
    {
      question: "What coat varieties and colours are typical for the breed?",
      answer:
        "The weatherproof coat occurs in smooth, broken, and rough varieties. White is always the predominant base color, accented by patches of black, tan, or a combination of both.",
    },
    {
      question: "How much daily exercise does a Jack Russell Terrier need?",
      answer:
        "As a high-energy working terrier, it generally requires 45 to 60 minutes of vigorous daily physical exercise combined with mentally engaging games and interactive training.",
    },
    {
      question: "What genetic health tests are most important for this breed?",
      answer:
        "Key genetic screenings include DNA tests for primary lens luxation (PLL), late-onset ataxia (LOA), and spinocerebellar ataxia (SCA), alongside certified veterinary eye examinations and patellar evaluations.",
    },
    {
      question: "What is the average lifespan of a Jack Russell Terrier?",
      answer:
        "Veterinary records indicate a typical lifespan of 13 to 15 years when provided with appropriate preventative healthcare, balanced nutrition, and regular exercise.",
    },
  ],
  references: [
    "fci-jack-russell-terrier-standard",
    "fci-jack-russell-terrier-nomenclature",
    "royal-kennel-club-jack-russell-terrier-standard",
    "royal-kennel-club-jack-russell-terrier-profile",
    "vca-jack-russell-terrier-breed-care",
    "jack-russell-terrier-club-health-monitoring",
    "pubmed-forman-2013-capn1-ataxia-parson-russell",
    "pubmed-gould-2011-adamts17-lens-luxation",
    "wikimedia-jack-russell-terrier-ilmelodoro",
    "wikimedia-jack-russell-terrier-johannesvg",
    "wikimedia-jack-russell-terrier-puppy-3steph14",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
  ],
  evidence: {
    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "Title and official breed name; French title",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "The alternate name follows the official published French nomenclature title.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A separate scientific species name for this domestic dog breed is not established in the consulted references.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "FCI classification: Group 3 Terriers, Section 2 Small Terriers",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Classified under small working terriers and earthdogs; official standards group the breed within terrier categories.",
    },
    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "Origin: England",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Official breed standard records England as the historical country of origin.",
    },
    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A specific geographical region within England is not formally designated in the primary standard.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "Utilization, Brief Historical Summary and General Appearance",
        },
        {
          id: "royal-kennel-club-jack-russell-terrier-standard",
          role: "verified",
          locator: "Brief Historical Summary and General Appearance",
        },
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "verified",
          locator: "Breed Overview and Appearance",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Original narrative synthesising historical earthdog origins, Australian breed development, conformation, and veterinary management guidance.",
    },
    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "royal-kennel-club-jack-russell-terrier-profile",
          role: "cited",
          locator: "Breed characteristics: Size — Small",
        },
      ],
      verifiedOn: null,
      note: "Categorised within the small size group based on adult height and mass.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "Size and Weight: ideal height at the withers 25–30 cm",
        },
        {
          id: "royal-kennel-club-jack-russell-terrier-standard",
          role: "verified",
          locator: "Size: 25–30 cm (10–12 in)",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Official breed standards specify an ideal wither height of 25 to 30 cm for both males and females.",
    },
    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "Size and Weight: approximately 1 kg per 5 cm of height",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Standard establishes an anatomical ratio of roughly 1 kg per 5 cm of shoulder height, equating to 5 to 6 kg.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "verified",
          locator: "Breed Overview: lifespan 13–15 years",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Documented from veterinary clinical breed records indicating a typical life expectancy of 13 to 15 years.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "Coat: smooth, rough or broken; weatherproof",
        },
        {
          id: "royal-kennel-club-jack-russell-terrier-standard",
          role: "verified",
          locator: "Coat: smooth, broken or rough",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Standards document harsh, weather-resistant coats presenting in smooth, broken, and rough textures.",
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "Coat: smooth, rough or broken varieties",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Short functional working coat across all three structural texture varieties.",
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "Coat colour: white must predominate with black and/or tan markings",
        },
        {
          id: "royal-kennel-club-jack-russell-terrier-standard",
          role: "verified",
          locator: "Colour: white must predominate with black and/or tan markings",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Breed standards require white to predominate as the ground colour, with markings permitted in black, tan, or both.",
    },
    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-jack-russell-terrier-profile",
          role: "verified",
          locator: "Breed characteristics: Sheds — Yes",
        },
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "verified",
          locator: "Breed Overview: shedding level Low to Moderate",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Veterinary and breed profile sources characterise shedding as low to moderate with seasonal variation.",
    },
    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "verified",
          locator: "Breed Overview: drooling level Low",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Veterinary breed profile classifies the drooling tendency as low due to tight lip conformation.",
    },
    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "General Appearance, Important Proportions, Head, Ears, Coat and Size",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Synthesises standard-defined structural proportions, spannable chest, almond-shaped eyes, and button/dropped ears.",
    },
    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "Behaviour / Temperament",
        },
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "verified",
          locator: "Breed Overview, Temperament and Training",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Combines official standard behavioural descriptions with veterinary assessments of high prey drive, boldness, and tenacity.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "cited",
          locator: "Behaviour / Temperament",
        },
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "cited",
          locator: "Breed Overview, Temperament and Training",
        },
      ],
      verifiedOn: null,
      note: "Comparative ratings reflecting high energy, boldness, trainability, and pronounced chase instincts.",
    },
    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-jack-russell-terrier-profile",
          role: "verified",
          locator: "Breed characteristics: Exercise — up to 1 hour per day",
        },
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "verified",
          locator: "Exercise Needs",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Grounded in breed profile and veterinary assessments confirming high aerobic exercise and mental stimulation requirements.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "royal-kennel-club-jack-russell-terrier-profile",
          role: "cited",
          locator: "Breed characteristics: Exercise — up to 1 hour per day",
        },
      ],
      verifiedOn: null,
      note: "Estimated daily exercise duration of 45 to 60 minutes based on breed profile guidance.",
    },
    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "cited",
          locator: "Suggested Exercises and Temperament",
        },
      ],
      verifiedOn: null,
      note: "Recommended activities tailored to channel high working stamina, agility, and scent investigation drives.",
    },
    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-jack-russell-terrier-profile",
          role: "verified",
          locator: "Breed characteristics: Grooming once a week",
        },
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "verified",
          locator: "Grooming and Coat Care",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Weekly brushing is confirmed for routine maintenance, with seasonal hand-stripping advised for rough and broken coats.",
    },
    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "verified",
          locator: "Temperament and Training",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Veterinary guidance stresses positive reinforcement, short engaging sessions, and impulse-control conditioning.",
    },
    "care.livingEnvironment": {
      reliability: "general_guidance",
      sources: [
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "cited",
          locator: "Suggested Exercises and Temperament",
        },
      ],
      verifiedOn: null,
      note: "Practical living advice emphasizing secure fencing, climate considerations, and indoor domestic integration.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Apartment adaptability varies widely depending on exercise volume, mental enrichment, and vocalisation management.",
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Independent alone-time tolerance depends on individual conditioning, training, and household routines.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Global Nutrition Guidelines",
        },
      ],
      verifiedOn: null,
      note: "Nutritional guidance follows global veterinary standards for complete life-stage feeding and body condition monitoring.",
    },
    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-jack-russell-terrier-profile",
          role: "verified",
          locator: "Health: pre-breeding screening for PLL, LOA, SCA and eye testing",
        },
        {
          id: "jack-russell-terrier-club-health-monitoring",
          role: "verified",
          locator: "Health Monitoring in the Jack Russell Terrier",
        },
        {
          id: "pubmed-gould-2011-adamts17-lens-luxation",
          role: "verified",
          locator: "Veterinary Ophthalmology 14(6):378-84",
        },
        {
          id: "pubmed-forman-2013-capn1-ataxia-parson-russell",
          role: "verified",
          locator: "PLoS ONE 8(5):e64627",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Verified inherited health conditions and screening guidelines documented in peer-reviewed scientific studies and breed health registries.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "royal-kennel-club-jack-russell-terrier-profile",
          role: "cited",
          locator: "Health testing guidance",
        },
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "cited",
          locator: "Grooming and Breed Overview",
        },
      ],
      verifiedOn: null,
      note: "Preventative healthcare recommendations integrating DNA screening, ocular evaluations, and routine veterinary wellness.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "Pet Dental Care",
        },
      ],
      verifiedOn: null,
      note: "Veterinary dental guidance recommending frequent tooth brushing and routine professional cleanings.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "cited",
          locator: "Grooming and Coat Care",
        },
      ],
      verifiedOn: null,
      note: "Routine ear hygiene recommendations focusing on weekly inspections and gentle cleansing when indicated.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "cited",
          locator: "Grooming and Coat Care",
        },
      ],
      verifiedOn: null,
      note: "Skin inspection guidance advising prompt care for field scratches and professional evaluation for persistent pruritus.",
    },
    suitability: {
      reliability: "reliable_source",
      sources: [
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "verified",
          locator: "Breed Overview, Temperament and Training, Suggested Exercises",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Qualitative household suitability criteria based on activity levels, training needs, and prey drive management.",
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "First-time owner suitability depends heavily on owner preparation, dedication to training, and active lifestyle.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Compatibility with children depends on individual temperament, socialisation, and constant adult supervision.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No standardized empirical evidence supports a universal categorical rating for senior owners.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Apartment viability depends entirely on dedicated outdoor exercise and mental enrichment rather than dwelling size alone.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "Origin, Country of Development, History and Classification",
        },
        {
          id: "royal-kennel-club-jack-russell-terrier-standard",
          role: "verified",
          locator: "Brief Historical Summary and General Appearance",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Historical development, spannable ribcage proportion, and coat variety facts verified against official standard documentation.",
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-jack-russell-terrier-standard",
          role: "verified",
          locator: "History, Classification, Coat and Size and Weight",
        },
        {
          id: "royal-kennel-club-jack-russell-terrier-profile",
          role: "verified",
          locator: "Health recommendations",
        },
        {
          id: "vca-jack-russell-terrier-breed-care",
          role: "verified",
          locator: "Breed Overview: lifespan and activity needs",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Informational questions and answers grounded in official standard specifications, health profiles, and veterinary guidance.",
    },
  },
  updatedOn: "2026-10-27",
};
