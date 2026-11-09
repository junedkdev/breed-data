import type { Breed } from "../schema/breed.types";

export const airedale_terrier: Breed = {
  slug: "airedale-terrier",
  name: "Airedale Terrier",
  scientificName: null,
  alternateNames: [
    "King of Terriers",
    "Waterside Terrier",
    "Bingley Terrier",
  ],
  group: "Terriers; Large and Medium-Sized Terriers",

  origin: {
    country: "Great Britain",
    region: "Yorkshire, England",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/AiredaleDog.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:AiredaleDog.jpg",
      title: "AiredaleDog.jpg",
      description: "Airedale Terrier sitting upright on grass with neat facial furnishings.",
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
      metadataCheckedOn: "2026-11-08",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Airedale_terrier.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Airedale_terrier.jpg",
      title: "Airedale terrier.jpg",
      description: "Adult Airedale Terrier standing outdoors showing classic saddle patterning.",
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
      metadataCheckedOn: "2026-11-08",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Young_Airedale_Terrier_29-07-2009.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Young_Airedale_Terrier_29-07-2009.jpg",
      title: "Young Airedale Terrier 29-07-2009.jpg",
      description:
        "Young Airedale Terrier resting on stone steps showing developing wiry coat texture.",
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
      metadataCheckedOn: "2026-11-08",
    },
  ],

  overview: {
    summary:
      "Widely known as the King of Terriers, the Airedale Terrier is the largest member of the terrier family, developed in northern England for versatile river hunting, sentry work, and vermin control. It unites a hard, wiry black-and-tan jacket with keen intelligence, spirited athleticism, and steadfast loyalty.",

    description:
      "Standing tall and squarely balanced on straight, sturdy limbs, the Airedale Terrier pairs impressive substance with nimble agility. A dark black or grizzled saddle contrasts vividly against rich tan on the head, ears, chest, and legs, while folded V-shaped ears, dark keen eyes, and crisp facial whiskers establish an alert, self-assured expression. Bred to think independently and work tirelessly across land and water, this versatile sporting terrier thrives when given meaningful physical work, positive obedience training, and interactive outdoor games. In a supportive home, it is naturally outgoing, playful, and protective of family members, yet its high drive and terrier grit require firm fence lines, consistent boundaries, and routine stripping or clipping to keep the weatherproof coat clean and functional.",

    history:
      "During the nineteenth century, working sportsmen in Yorkshire's Aire and Wharfe river valleys crossed sturdy black-and-tan working terriers with the Otterhound to craft a hardy waterside hunter capable of dispatching otters and large riverside vermin. Originally called the Waterside or Bingley Terrier, the resulting dogs proved exceptionally capable scent trackers, retrievers, and watchdogs. In the early twentieth century, their courage and trainability made them celebrated dispatch couriers, sentries, and ambulance dogs during military campaigns and pioneer service dogs with municipal police forces, before gaining global acclaim as devoted family guardians and conformation athletes.",

    originalPurpose:
      "Hunting otters, badgers, and river vermin across rough northern English terrain and waterways, later expanding into military messenger, sentry, and police patrol duties.",

    currentRoles: [
      "Faithful family protector and active companion",
      "Competitive obedience, rally, and agility competitor",
      "Scent-work, tracking, and barn hunt participant",
      "Conformation show competitor",
      "Hiking, jogging, and outdoor sporting partner",
    ],
  },

  physical: {
    sizeCategory: "Large, athletic, squarely proportioned terrier",

    height: {
      unit: "cm",
      male: { min: 58, max: 61 },
      female: { min: 56, max: 59 },
    },

    weight: {
      unit: "lb",
      male: { min: 50, max: 70 },
      female: { min: 50, max: 70 },
    },

    lifespanYears: {
      min: 11,
      max: 14,
    },

    coatType:
      "Hard, dense, wiry outer jacket lying straight and close to the body, supported by a shorter, softer insulating undercoat, with distinctive beard and whisker furnishings on the muzzle.",

    coatLength: "Medium-short, close-lying and harsh across the body, with longer furnishings on the muzzle and limbs",

    coatColors: [
      "Black and Tan",
      "Grizzle and Tan",
    ],

    sheddingLevel:
      "Low to moderate visible hair fallout; wiry outer hair and fine undercoat remain largely trapped within the coat until removed through regular hand-stripping, brushing, or clipping.",

    droolingLevel: "Low",

    distinctiveFeatures: [
      "Tallest and largest among all recognized terrier breeds",
      "Long, flat skull with a strong, deep jaw and characteristic chin beard",
      "Small, V-shaped ears folding neatly to the side without pointing toward the eyes",
      "Distinctive dark black or grizzle saddle extending over the back, ribs, and neck onto a rich tan body",
      "Hard, crinkled or straight wiry double coat designed for rough weather and water resistance",
      "Level topline, deep chest, and an upright tail set high and carried gaily",
    ],
  },

  temperament: {
    traits: [
      "Intelligent",
      "Confident",
      "Courageous",
      "Alert",
      "Energetic",
      "Outgoing",
      "Loyal",
      "Persistent",
      "Naturally watchful",
    ],

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
      level: "High",

      minutesPerDay: {
        min: 60,
        max: 90,
      },

      activities: [
        "Brisk daily walks and jogging sessions with conditioned adults",
        "Scent-work challenges, nosework searches, and tracking trails",
        "Supervised ball retrieval and structured flying-disc games in secure paddocks",
        "Canine agility, rally obedience, and barn hunt courses",
        "Sturdy puzzle toys and interactive food-foraging games indoors",
      ],
    },

    grooming: {
      level: "High",

      brushing:
        "Brush through the wiry coat two to three times per week using a slicker brush and metal comb to lift dead undercoat and prevent tangles, paying close attention to the beard and leg furnishings after outdoor excursions.",

      bathing:
        "Bathe every 6 to 8 weeks or as needed using a texturizing canine shampoo, ensuring complete rinsing and drying down to the skin so the dense undercoat does not trap dampness.",

      notes: [
        "Wipe and comb the facial beard after wet meals or damp walks to prevent food debris and moisture from causing chin dermatitis.",
        "Maintain the harsh wiry texture through periodic hand-stripping every few months, or opt for professional clipping if easier household maintenance is preferred.",
        "Check inside the folded ears weekly for wax accumulation, moisture, or redness, and trim nails regularly to preserve tight, upright feet.",
        "Inspect the skin beneath the harsh outer jacket during brushing to detect any hot spots, embedded burrs, or flea irritation early.",
      ],
    },

    training: {
      difficulty:
        "Moderate; quick-witted and highly capable of advanced tasks, but easily bored by repetitive drills and inclined to test boundaries when guidance is inconsistent.",

      tips: [
        "Keep training sessions engaging, upbeat, and reward-based, using high-value treats and toy play to maintain keen focus.",
        "Channel natural digging and chasing instincts into structured canine sports and scent puzzles rather than allowing self-directed yard mischief.",
        "Build reliable recall from early puppyhood, keeping the dog on lead in open areas due to strong prey drive around squirrels and small animals.",
        "Incorporate calm greeting manners and impulse control exercises around doorways to prevent exuberant jumping on family visitors.",
      ],

      socialization:
        "Expose puppies early and steadily to diverse sights, unfamiliar people, calm dogs, novel surfaces, and grooming handling to cultivate an unflappable, friendly, and well-mannered adult temperament.",
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate and cool climates",
        "Warm climates with air-conditioned indoor rest, shaded yards, and exercise scheduled during cool hours",
      ],

      aloneTimeTolerance:
        "Moderate when adequate physical exercise and brain games are provided, though extended confinement can trigger vocalising or destructive chewing.",
    },
  },

  nutrition: {
    dietType:
      "Complete, balanced commercial dry kibble, wet ration, or veterinary-formulated diet tailored to large, athletic terriers.",

    feedingFrequency: {
      puppy: "3 to 4 measured meals daily during early growth, transitioning to 2 meals daily around six months of age",
      adult: "2 balanced meals per day to maintain lean body weight and reduce the risk of gastric bloating",
      senior: null,
    },

    guidelines:
      "Measure food portions precisely based on activity level and body condition score rather than feeding free-choice, assessing the ribs and waist regularly beneath the wiry jacket.",

    considerations: [
      "Avoid intense running, jumping, or rough play for at least one hour before and after meals to mitigate gastric dilatation-volvulus concerns in deep-chested individuals.",
      "Factor training treats into total daily caloric intake to prevent excess weight that could stress hips and elbows.",
      "Provide continuous access to cool, fresh water, cleaning bowls daily to keep beard hair from spoiling the water.",
    ],

    note: "Consult a veterinarian to adjust caloric intake according to age, neuter status, lifestyle, and seasonal activity changes.",
  },

  health: {
    overview:
      "Airedale Terriers are generally sturdy, long-lived large terriers with a median life expectancy of 11 to 14 years. Health screening programs supported by the parent club emphasize evaluations for hip joint conformation, cardiac soundness, and juvenile-onset renal disease, alongside monitoring for dermatologic sensitivities and ocular disorders.",

    commonConditions: [
      "Hip dysplasia",
      "Cardiac conditions (including murmurs and dilated cardiomyopathy)",
      "Kidney disease (hereditary juvenile renal disease / juvenile nephropathy)",
      "Autoimmune thyroiditis (hypothyroidism)",
      "Elbow dysplasia",
      "Ophthalmic disorders (such as corneal dystrophy and cataracts)",
      "Skin sensitivities, atopic dermatitis, and acute moist dermatitis (hot spots)",
      "Gastric dilatation-volvulus (bloat)",
    ],

    preventiveCare: [
      "Schedule yearly veterinary health exams, core vaccinations, and routine parasite control.",
      "Verify that breeding stock has completed certified hip, cardiac, and kidney screenings.",
      "Maintain a lean, muscular body condition through proper portion control and structured exercise.",
      "Clean facial furnishings and dry the skin thoroughly after baths or swimming to ward off fungal and bacterial skin irritation.",
      "Inspect folded ears weekly for moisture, foreign seeds, or signs of canal inflammation.",
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation through an accepted screening scheme",
      "Congenital cardiac examination by a licensed veterinary cardiologist",
      "Renal disease screening through the recognized breed-club health process",
      "Comprehensive eye examination by a board-certified veterinary ophthalmologist",
      "Autoimmune thyroiditis diagnostic laboratory panel",
      "Radiographic elbow dysplasia evaluation",
    ],

    dentalCare:
      "Brush teeth multiple times weekly using canine-safe enzymatic paste and schedule veterinary cleanings as recommended to prevent periodontal disease.",

    earCare:
      "Lift and inspect the folded ears weekly, wiping away excess wax and drying moisture after swimming or bathing to prevent yeast infections.",

    skinCare:
      "Part the harsh outer jacket down to the skin during brushing sessions to catch tangles, grass seeds, or hot spots early, keeping the beard dry after meals.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Active individuals and families seeking an energetic, engaging, and outdoorsy companion",
      "Owners who enjoy hiking, running, obedience, tracking, and interactive dog sports",
      "Households committed to regular coat brushing and periodic hand-stripping or clipping",
      "Homes with a tall, securely fenced yard to safely contain a strong prey drive",
      "Handlers willing to provide firm, positive guidance and mental enrichment",
    ],

    notIdealFor: [
      "Sedentary households looking for a quiet, low-energy lap dog",
      "Owners unwilling to invest time or expense in ongoing professional coat care",
      "Unfenced properties where high prey drive could lead to chasing wildlife or neighbourhood cats",
      "Homes seeking an effortlessly compliant, low-drive dog that thrives on repetitive drilling",
    ],
  },

  funFacts: [
    "Revered as the King of Terriers, the Airedale is the tallest and heaviest of all terrier breeds recognized worldwide.",
    "During World War I, Airedales served on the front lines as heroic messenger dogs, carrying vital dispatches through mud and gunfire with extraordinary bravery.",
    "Celebrated for their versatile working scent drive, Airedales were among the earliest breeds trained as official British and German police service dogs.",
    "The distinctive wiry double coat was specifically bred to shed water and resist thorny riverbank brush in the Yorkshire valleys.",
    "Three United States presidents—Warren G. Harding, Woodrow Wilson, and Calvin Coolidge—proudly kept Airedale Terriers during their time in the White House.",
  ],

  faq: [
    {
      question: "How big do Airedale Terriers get?",
      answer:
        "According to official measurements, males stand approximately 58 to 61 cm at the withers and females measure 56 to 59 cm, with typical adult weights spanning 50 to 70 lb.",
    },
    {
      question: "Do Airedale Terriers shed a lot?",
      answer:
        "They are considered low to moderate shedders. Their dense, wiry double coat traps loose hair rather than dropping it on furniture, but it requires regular brushing and periodic hand-stripping or clipping to remove dead undercoat.",
    },
    {
      question: "Are Airedale Terriers good with children?",
      answer:
        "Yes, they are generally playful, affectionate, and robust companions for active families with children. Because young terriers can be energetic and bouncy, supervision and mutual respect around the dog's personal space are always advised.",
    },
    {
      question: "How much exercise does an Airedale Terrier need?",
      answer:
        "Healthy adults need between 60 and 90 minutes of daily physical exercise and mental engagement. Combining brisk walks with games of fetch, scent puzzles, and agility keeps their sharp minds satisfied.",
    },
    {
      question: "Are Airedale Terriers easy to train?",
      answer:
        "They are highly intelligent and learn commands quickly, but they possess an independent streak and dislike boring, repetitive drills. Varied, reward-based training sessions with positive reinforcement yield the best results.",
    },
    {
      question: "What health screenings should prospective puppy buyers look for?",
      answer:
        "Prospective owners should ensure that both parent dogs have certified evaluations for hip dysplasia, cardiac health, and hereditary kidney disease, with optional clearances for eyes, thyroid, and elbows.",
    },
    {
      question: "What colors do Airedale Terriers come in?",
      answer:
        "The classic coat pattern is black and tan or grizzle and tan, featuring a dark saddle marking over the back, ribs, and neck with rich tan markings on the head, ears, chest, and legs.",
    },
    {
      question: "How long do Airedale Terriers typically live?",
      answer:
        "The breed enjoys an average life expectancy of 11 to 14 years when provided with quality veterinary care, proper nutrition, and regular exercise.",
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
    "the-dog-api",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Left null in accordance with repository schema conventions when no formal taxonomy name is assigned.",
    },

    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Historical names (King of Terriers, Waterside Terrier, Bingley Terrier) verified from the structured reference record.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "FCI classification: Group 3 Terriers, Section 1 Large and medium-sized Terriers",
        },
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "Breed profile: Terrier Group",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.breed_group",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Combines official Terrier Group and Large/Medium Terrier classifications without naming registry acronyms in user-facing text.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "Origin: Great Britain",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin (Yorkshire, England)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "origin.region": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "Brief Historical Summary: native of the county of Yorkshire",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Yorkshire, England, is documented as the historic origin region in the official standard and reference data.",
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "Brief Historical Summary, General Appearance, Behaviour/Temperament, and Coat sections",
        },
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "About the Breed, History, and Traits sections",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "All overview text is synthesized in 100% original wording from official standards and breed profile references.",
    },

    "physical.sizeCategory": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "General Appearance and Size sections",
        },
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "Traits and breed overview: largest of all terrier breeds",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "Size — Height at the withers: Dogs about 58-61 cm (23-24 ins); Bitches about 56-59 cm (22-23 ins)",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.height.metric (male 58-61 cm, female 56-58 cm)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Stored in exact published FCI metric centimetres (males 58-61 cm, females 56-59 cm). The Dog API lists 56-58 cm for females; the official FCI standard (56-59 cm) is retained.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "Breed profile — Weight: 50-70 pounds",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight.metric (male 23-32 kg, female 18-25 kg)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Stored in the exact published unit (lb) from the AKC breed profile (50-70 lb) rather than decimal kilogram conversions (22.7-31.8 kg). Repeated in both sex slots because AKC publishes an overall breed range.",
    },

    "physical.weight.male.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "Breed profile — Weight: 50-70 pounds",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight.metric (23-32 kg)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Uses the AKC published upper bound of 70 lb; The Dog API reports 23-32 kg (51-71 lb).",
    },

    "physical.weight.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "Breed profile — Weight: 50-70 pounds",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight.metric (18-25 kg)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Uses the AKC published upper bound of 70 lb; The Dog API reports 18-25 kg (40-55 lb).",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "Breed profile — Life Expectancy: 11-14 years",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span (11-14 years)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "Coat — Hair: Hard, dense and wiry, not so long as to appear ragged; lying straight and close; undercoat shorter and softer",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "Coat — Hair section",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "Colour: Saddle black or grizzle, as is the top of the neck and top surface of tail. All other parts tan",
        },
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "Breed profile — Colors: Black and Tan, Grizzle and Tan",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "GET /breeds/{id}/colours",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Restricted to the two standard colour combinations (Black and Tan, Grizzle and Tan); non-standard species-wide endpoint entries are excluded.",
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "Breed profile — Shedding Level and Grooming",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "Breed profile — Drooling Level",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "General Appearance, Head, Ears, Body, Tail, and Coat sections",
        },
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "About the Breed: physical hallmarks of the King of Terriers",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "Behaviour / Temperament: Keen of expression, quick of movement, on the tiptoe of expectation; character denoted by expression of eyes, carriage of ears and tail; confident and friendly, courageous and intelligent; alert, not aggressive",
        },
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "Breed profile — Personality & Temperament",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile — Trait ratings and temperament descriptions",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1-5 ratings based on documented breed characteristics.",
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "Breed profile — Exercise section",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile — Exercise needs",
        },
      ],
      verifiedOn: null,
      note: "Practical daily exercise estimate (60-90 minutes) for a healthy, athletic adult terrier.",
    },

    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile — Exercise section (daily walks, play, sports)",
        },
      ],
      verifiedOn: null,
      note: "General activity suggestions adapted to an energetic sporting terrier.",
    },

    "care.grooming.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "Breed profile — Grooming section",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "care.grooming.brushing": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "Breed profile — Grooming (brushing multiple times a week to remove dead hair and prevent matting)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "care.grooming.bathing": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile — Grooming section",
        },
      ],
      verifiedOn: null,
      note: "Routine bathing advice for a wiry double coat.",
    },

    "care.grooming.notes": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile — Grooming and care advice",
        },
      ],
      verifiedOn: null,
      note: "Routine coat stripping, clipping, beard hygiene, and nail care advice.",
    },

    "care.training.difficulty": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "Breed profile — Training section",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "care.training.tips": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile — Training tips and temperament management",
        },
      ],
      verifiedOn: null,
      note: "Positive, reward-based training recommendations for an intelligent, driven terrier.",
    },

    "care.training.socialization": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile — Training and socialization guidance",
        },
      ],
      verifiedOn: null,
      note: "Early socialization advice tailored to an alert guardian-oriented terrier.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile — Exercise and activity requirements",
        },
      ],
      verifiedOn: null,
      note: "Boolean assessment; high energy and exercise demands generally make standard apartments less suitable than homes with secure yards.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile — Exercise and activity requirements",
        },
      ],
      verifiedOn: null,
      note: "A securely fenced yard provides safe exercise opportunities alongside daily walks.",
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "cited",
          locator: "Coat — Hair: weather-resistant wiry jacket",
        },
      ],
      verifiedOn: null,
      note: "General climate guidance adapted to a weather-resistant wiry double-coated breed.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile — Temperament and activity needs",
        },
      ],
      verifiedOn: null,
      note: "Guidance on managing alone time for an active, people-oriented working terrier.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile — Nutrition section",
        },
      ],
      verifiedOn: null,
      note: "General canine nutritional recommendations suited to a large, active terrier.",
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
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "Breed profile — Health section",
        },
        {
          id: "american-kennel-club-terrier-group-health-testing-requirements",
          role: "verified",
          locator: "Airedale Terrier health testing requirements",
        },
        {
          id: "airedale-terrier-club-america-health-statement",
          role: "verified",
          locator: "Health statement: hip, cardiac, and renal disease screening; optional eye, thyroid, elbow checks",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Synthesises parent-club health testing requirements and documented breed health conditions.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile — Health and Grooming sections",
        },
      ],
      verifiedOn: null,
      note: "General veterinary preventive care and husbandry guidance.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-terrier-group-health-testing-requirements",
          role: "verified",
          locator: "Airedale Terrier: Hip Evaluation, Cardiac Exam, Ophthalmologist Evaluation, Kidney Disease Screening (CHIC)",
        },
        {
          id: "airedale-terrier-club-america-health-statement",
          role: "verified",
          locator: "Health statement recommendations: hips, cardiac, renal disease; optional eye, thyroid, elbow evaluations",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile — Health and grooming care",
        },
      ],
      verifiedOn: null,
      note: "General canine dental hygiene advice.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile — Health: regular ear inspection",
        },
      ],
      verifiedOn: null,
      note: "Routine ear hygiene for folded terrier ears.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Skin inspection and beard hygiene advice for a wiry double coat.",
    },

    "suitability.firstTimeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile — Temperament, training, and exercise needs",
        },
      ],
      verifiedOn: null,
      note: "Editorial assessment; high physical drive, strong prey drive, and coat maintenance make the breed better suited to experienced owners.",
    },

    "suitability.familiesWithChildren": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile — Traits: Good with Young Children",
        },
      ],
      verifiedOn: null,
      note: "Boolean assessment; generally playful and affectionate with children under responsible supervision.",
    },

    "suitability.seniorOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile — Energy level and exercise needs",
        },
      ],
      verifiedOn: null,
      note: "Editorial assessment; large size, high strength, and vigorous exercise requirements can be taxing for many seniors.",
    },

    "suitability.activeOwners": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "Breed profile — Exercise and activity section",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "suitability.apartmentLiving": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile — Exercise and living needs",
        },
      ],
      verifiedOn: null,
      note: "Aligned with care.livingEnvironment.apartmentSuitable.",
    },

    "suitability.idealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile — Temperament, exercise, and grooming sections",
        },
      ],
      verifiedOn: null,
      note: "Synthesised owner-matching guidance based on activity level, coat upkeep, and guardian instincts.",
    },

    "suitability.notIdealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-airedale-terrier",
          role: "cited",
          locator: "Breed profile — Temperament, exercise, and grooming sections",
        },
      ],
      verifiedOn: null,
      note: "Synthesised owner-matching caveats.",
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "Brief Historical Summary and General Appearance (origin, working heritage, size)",
        },
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "About the Breed (King of Terriers, wartime messenger service, White House pets)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-airedale-terrier-standard",
          role: "verified",
          locator: "Size, Coat, Colour, and Temperament sections",
        },
        {
          id: "american-kennel-club-airedale-terrier",
          role: "verified",
          locator: "Breed profile — Weight, Lifespan, Exercise, Grooming, Training, and Health",
        },
        {
          id: "american-kennel-club-terrier-group-health-testing-requirements",
          role: "verified",
          locator: "Recommended health evaluations",
        },
        {
          id: "airedale-terrier-club-america-health-statement",
          role: "verified",
          locator: "Health screening recommendations",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },
  },

  updatedOn: "2026-11-08",
};
