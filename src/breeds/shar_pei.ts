import type { Breed } from "../schema/breed.types";
import type { SourceId } from "../registry/sources";

const VERIFIED_ON = "2026-10-26" as const;

type VerifiedReliability = "official_standard" | "reliable_source";
type EvidenceReference = {
  id: SourceId;
  locator: string | null;
};

function verified(
  reliability: VerifiedReliability,
  references: readonly EvidenceReference[],
  note: string,
) {
  return {
    reliability,
    sources: references.map(({ id, locator }) => ({
      id,
      role: "verified" as const,
      locator,
    })),
    verifiedOn: VERIFIED_ON,
    note,
  };
}

function estimate(
  references: readonly EvidenceReference[],
  note: string,
) {
  return {
    reliability: "estimate" as const,
    sources: references.map(({ id, locator }) => ({
      id,
      role: "cited" as const,
      locator,
    })),
    verifiedOn: null,
    note,
  };
}

function generalGuidance(note: string) {
  return {
    reliability: "general_guidance" as const,
    sources: [],
    verifiedOn: null,
    note,
  };
}

function unavailable(note: string) {
  return {
    reliability: "unavailable" as const,
    sources: [],
    verifiedOn: null,
    note,
  };
}

export const shar_pei: Breed = {
  slug: "shar-pei",
  name: "Shar Pei",
  scientificName: null,

  alternateNames: [
    "Chinese Shar-Pei",
    "Chinese Shar Pei",
    "Shar-Pei",
  ],

  group:
    "FCI Group 2: Pinscher and Schnauzer – Molossoid and Swiss Mountain and Cattledogs; Section 2.1: Molossian type, Mastiff type. The AKC places the breed in its Non-Sporting Group.",

  origin: {
    country: "China",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Traditional_Shar_Pei.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Traditional_Shar_Pei.jpg",
      title: "Traditional Shar Pei.jpg",
      description: "A brown, traditional-type male Chinese Shar Pei.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: null,
      uploadedOn: "2016-11-25",
      width: 697,
      height: 675,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, licensed under CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Traditional_Shar_Pei.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. No changes made. Provide appropriate credit and the license link; any adaptation must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-26",
    },
  ],

  overview: {
    summary:
      "The Shar Pei is a compact, medium-sized Chinese breed recognised by its loose folds of skin, small ears, broad muzzle and short, harsh coat. It is typically devoted to familiar people and reserved with strangers, so thoughtful socialisation and consistent handling matter.",
    description:
      "A sturdy, squarely built dog, the Shar Pei has a distinctive head and muzzle, a high-set tail and a coat that feels rough rather than soft. Puppies usually have more pronounced folds than adults. The breed is often independent and self-possessed; its calm appearance should not be mistaken for a lack of need for training, enrichment or veterinary care.",
    history:
      "The breed developed in China and historically worked around farms, including guarding homes and livestock and assisting with hunting. Its population declined sharply in the twentieth century, and enthusiasts in Hong Kong, Taiwan and North America helped preserve it. Modern dogs can differ in the amount of facial and body skin they carry, making responsible breeding and attention to comfort especially important.",
    originalPurpose:
      "Farm work, including guarding property and livestock and assisting with hunting; historical accounts also describe use in dog fighting.",
    currentRoles: [
      "Companion dog",
      "Household and property watchdog",
      "Show and breed-competition dog",
    ],
  },

  physical: {
    sizeCategory: "Medium-sized",
    height: {
      unit: "in",
      male: { min: 18, max: 20 },
      female: { min: 18, max: 20 },
    },
    // The AKC standard gives one overall breed weight range rather than
    // separate male and female ranges. The same range is recorded for both
    // sexes to fit the schema; it is not a sex-specific norm.
    weight: {
      unit: "lb",
      male: { min: 45, max: 60 },
      female: { min: 45, max: 60 },
    },
    lifespanYears: {
      min: 8,
      max: 12,
    },
    coatType:
      "A single, short, straight, harsh-textured coat that stands away from the body; the breed has no soft, dense undercoat in the standard description.",
    coatLength:
      "Very short 'horse coat' or a somewhat longer 'brush coat'; the FCI standard limits the coat to no more than 2.5 cm.",
    coatColors: [
      "Black",
      "Blue",
      "Brown",
      "Chocolate",
      "Cream",
      "Apricot",
      "Red",
      "Fawn",
      "Sable",
      "Dilute shades of accepted solid colours",
    ],
    sheddingLevel:
      "Moderate. The coat is short and easy to brush, but short hair can still shed.",
    droolingLevel:
      "Moderate; individual dogs vary, and lip shape can affect drooling.",
    distinctiveFeatures: [
      "Loose, folded skin, especially prominent in puppies and often more limited to the head, neck and withers in adults",
      "Broad muzzle often described as hippopotamus-like",
      "Small, triangular ears set high and close to the head",
      "Blue-black tongue in most accepted solid-colour dogs; some dilute colours may have a lighter or lavender tongue",
      "High-set tail that curves over or to one side of the back",
      "Short, bristly coat with horse-coat and brush-coat varieties",
    ],
  },

  temperament: {
    traits: [
      "Loyal and strongly attached to familiar people",
      "Independent and self-possessed",
      "Often reserved or aloof with unfamiliar people",
      "Alert and naturally watchful",
      "May be selective or intolerant with unfamiliar dogs without suitable socialisation",
      "Can be strong-willed and benefits from calm, consistent handling",
    ],
    scores: {
      affection: 3,
      withChildren: 3,
      withDogs: 2,
      withStrangers: 2,
      protectiveness: 5,
      independence: 5,
      trainability: 3,
      barking: 3,
      energy: 3,
    },
  },

  care: {
    exercise: {
      level: "Moderate",
      minutesPerDay: null,
      activities: [
        "Daily walks at a comfortable pace",
        "Short play sessions and supervised sniffing games",
        "Reward-based training and food-puzzle enrichment",
      ],
    },
    grooming: {
      level: "Low to moderate, with extra attention to skin folds and ears",
      brushing:
        "Brush about once a week with a soft brush or grooming mitt, and check the skin while grooming.",
      bathing:
        "Bathe when needed with a dog-appropriate shampoo; rinse thoroughly and dry all skin folds carefully.",
      notes: [
        "Check skin folds regularly for redness, odour, moisture or discharge; clean and dry them gently as needed.",
        "Inspect ears regularly and seek veterinary advice for odour, discharge, redness, head-shaking or discomfort.",
        "Trim nails as needed and maintain routine dental care.",
        "Avoid vigorous exercise in hot weather and provide shade and fresh water.",
      ],
    },
    training: {
      difficulty:
        "Moderate to challenging for inexperienced handlers because the breed can be independent and reserved.",
      tips: [
        "Use short, consistent, reward-based sessions and clear household rules.",
        "Introduce people, dogs, handling and everyday environments gradually and positively from puppyhood.",
        "Teach reliable leash manners and calm responses to visitors before guarding behaviour becomes rehearsed.",
        "Avoid intimidation or physical punishment; seek a qualified reward-based trainer if reactivity develops.",
      ],
      socialization:
        "Early, ongoing, positive socialisation is important, particularly around unfamiliar people, dogs and routine veterinary handling.",
    },
    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,
      climates: [
        "Provide shade, ventilation and fresh water in warm weather.",
        "Avoid strenuous activity during hot or humid conditions.",
        "Keep the dog indoors with the family rather than leaving it isolated outdoors for long periods.",
      ],
      aloneTimeTolerance:
        "Often limited: this breed may bond closely with its household and can struggle if left alone for long periods. Build alone-time skills gradually and arrange companionship when needed.",
    },
  },

  nutrition: {
    dietType:
      "A complete and balanced diet appropriate to the dog's life stage, body condition and activity level.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Choose a nutritionally complete food and measure portions against body condition rather than relying only on package estimates. Keep fresh water available, introduce diet changes gradually and ask a veterinarian to tailor feeding to age, activity, weight and medical needs.",
    considerations: [
      "Monitor body condition and adjust portions to prevent excess weight.",
      "If recurrent itching, ear disease or skin problems occur, discuss possible allergy evaluation with a veterinarian rather than changing diets repeatedly without guidance.",
      "Do not use supplements or restrictive diets as a substitute for veterinary assessment.",
    ],
    note:
      "No fixed breed-specific meal count is recorded here because the sources reviewed do not establish a universal schedule for every life stage.",
  },

  health: {
    overview:
      "Shar Pei need particular attention to their eyes, ears and skin folds. A UK primary-care study using clinical records from 2013 found entropion, an inward-turning eyelid, in 17.88% of recorded Shar Pei; otitis externa in 16.36%; and pyoderma, a skin infection, in 4.29%. These figures describe that study population and period, not the probability for every individual dog. The same study reported a median longevity of 7.28 years among 190 dogs that died during the study period, which is a different measure from a general breed-profile lifespan estimate.",
    commonConditions: [
      "Entropion and related eye irritation",
      "Otitis externa and other ear disorders",
      "Skin-fold inflammation and bacterial skin infection (pyoderma)",
      "Allergic skin disease",
      "Hip dysplasia",
      "Hypothyroidism",
      "Kidney disorders, including concerns associated with Shar Pei fever and amyloidosis",
    ],
    preventiveCare: [
      "Arrange regular veterinary examinations and seek prompt care for squinting, eye discharge, painful eyes, ear odour, persistent itching or inflamed skin folds.",
      "Keep skin folds clean and dry without harsh scrubbing or unprescribed products.",
      "Maintain a healthy body condition, routine parasite prevention, vaccination and dental care with veterinary guidance.",
      "Discuss the breed's eye, ear, skin and kidney risks with a veterinarian when choosing a puppy and during routine wellness visits.",
      "Ask a veterinarian whether periodic urinalysis or urine-protein monitoring is appropriate, particularly if there is concern about Shar Pei fever or kidney disease.",
    ],
    recommendedScreenings: [
      "Veterinary eye examination, with particular attention to entropion and signs of irritation.",
      "For breeding dogs, discuss recognised eye and hip screening with a veterinarian and responsible breeder.",
      "Prompt veterinary assessment of recurrent ear or skin disease and any episodes of fever, joint pain, vomiting, loss of appetite or marked lethargy.",
    ],
    dentalCare:
      "Brush teeth regularly with dog-specific toothpaste and arrange dental checks as part of routine veterinary care.",
    earCare:
      "Check ears frequently and clean only with a veterinarian-recommended product when needed. Seek advice for odour, discharge, redness, head-shaking or pain; the breed's narrow, folded ear structure can make ear problems important to catch early.",
    skinCare:
      "Inspect folds and areas around the face, neck and tail for moisture, redness, odour or sores. Gently clean when needed and dry thoroughly; persistent irritation requires veterinary assessment rather than repeated home treatment.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "Owners who appreciate an independent, loyal companion and can provide consistent training",
      "Households prepared for regular skin-fold, ear and eye checks",
      "People able to provide daily walks, enrichment and early socialisation",
    ],
    notIdealFor: [
      "Owners expecting every dog to be immediately sociable with unfamiliar people or dogs",
      "Households unable to provide routine skin-fold and ear care or prompt veterinary attention",
      "People who leave a dog alone for long periods every day without a gradual plan or companionship",
    ],
  },

  funFacts: [
    "Shar Pei puppies usually have more extensive skin folds than adults; the folds often become less pronounced as the dog matures.",
    "The breed is recognised by its short, coarse coat and distinctive broad muzzle.",
    "The name Shar Pei is commonly translated as referring to a sandy or sandpaper-like coat texture.",
    "The breed's international FCI recognition became definitive in 1981.",
  ],

  faq: [
    {
      question: "Are Shar Pei good family dogs?",
      answer:
        "They can be loyal companions in a well-managed household, but temperament varies. Early positive socialisation, supervision around children and consistent training are important; do not assume every individual will welcome unfamiliar people or dogs.",
    },
    {
      question: "Do Shar Pei need special skin care?",
      answer:
        "Yes. Check the folds regularly, keep them clean and dry, and contact a veterinarian if you notice redness, odour, discharge or persistent itching. Excessive folds can be associated with painful skin and eye problems.",
    },
    {
      question: "What health problems deserve particular attention?",
      answer:
        "Eye problems such as entropion, ear disease and skin infections are important concerns. The breed has also been associated with kidney disorders and hip dysplasia. A veterinarian can advise on examinations and screening appropriate to the individual dog.",
    },
    {
      question: "How much exercise does a Shar Pei need?",
      answer:
        "Many do well with daily walks and moderate activity, combined with enrichment and training. There is no single evidence-based number of minutes that suits every Shar Pei; adjust activity for age, fitness, health and weather.",
    },
    {
      question: "How often should a Shar Pei be brushed?",
      answer:
        "A weekly brushing is a reasonable starting point for the short coat. Skin-fold and ear checks need to be more frequent than coat brushing.",
    },
    {
      question: "What size is a Shar Pei?",
      answer:
        "The American Kennel Club standard lists a height of 18–20 inches at the withers and an overall weight range of 45–60 pounds. Those are standard figures, not a guarantee of an individual dog's adult size.",
    },
  ],

  references: [
    "fci-shar-pei-standard-1999",
    "fci-shar-pei-nomenclature",
    "akc-chinese-shar-pei-profile",
    "akc-chinese-shar-pei-standard",
    "canadian-kennel-club-chinese-shar-pei",
    "vca-chinese-shar-pei",
    "merck-veterinary-manual-shar-pei-fever",
    "chinese-shar-pei-club-health-statement",
    "oneill-et-al-shar-pei-health-2023",
    "commons-traditional-shar-pei-canarian-2016",
  ],

  evidence: {
    alternateNames: verified(
      "reliable_source",
      [
        {
          id: "akc-chinese-shar-pei-profile",
          locator: "Breed name and opening breed description",
        },
        {
          id: "canadian-kennel-club-chinese-shar-pei",
          locator: "Breed name and breed overview",
        },
      ],
      "Alternate spellings and the Chinese Shar-Pei name are confirmed by kennel-club breed profiles.",
    ),

    scientificName: unavailable(
      "No breed-specific scientific-name claim was needed for this record, so the field is left null.",
    ),

    group: verified(
      "official_standard",
      [
        {
          id: "fci-shar-pei-standard-1999",
          locator: "Cover and FCI classification",
        },
        {
          id: "fci-shar-pei-nomenclature",
          locator: "Group, section, subsection and country of origin",
        },
        {
          id: "akc-chinese-shar-pei-profile",
          locator: "Breed group",
        },
      ],
      "FCI classification and the separate AKC group are both recorded to avoid implying that kennel-club grouping systems are identical.",
    ),

    "origin.country": verified(
      "official_standard",
      [
        {
          id: "fci-shar-pei-standard-1999",
          locator: "Heading: Country of origin",
        },
        {
          id: "fci-shar-pei-nomenclature",
          locator: "Country of origin of the breed",
        },
      ],
      "The official FCI standard and nomenclature identify China as the breed's country of origin.",
    ),

    "origin.region": unavailable(
      "The sources reviewed do not establish a single precise region as the definitive origin for this breed record.",
    ),

    overview: verified(
      "reliable_source",
      [
        {
          id: "fci-shar-pei-standard-1999",
          locator: "General appearance, temperament, origin and historical use",
        },
        {
          id: "canadian-kennel-club-chinese-shar-pei",
          locator: "Origin, temperament and breed overview",
        },
        {
          id: "vca-chinese-shar-pei",
          locator: "History, temperament and appearance",
        },
      ],
      "Overview fields synthesise official-standard and kennel-club/veterinary descriptions in original wording.",
    ),

    "physical.sizeCategory": verified(
      "official_standard",
      [
        {
          id: "akc-chinese-shar-pei-standard",
          locator: "Size, proportion and substance",
        },
        {
          id: "fci-shar-pei-standard-1999",
          locator: "General appearance",
        },
      ],
      "The standard describes a medium-sized, compact dog.",
    ),

    "physical.height": verified(
      "official_standard",
      [
        {
          id: "akc-chinese-shar-pei-standard",
          locator: "Size, proportion and substance: height at the withers",
        },
      ],
      "Height is stored in inches, the unit printed in the selected AKC standard. The same standard range is recorded for both sexes because it does not give separate sex-specific height ranges.",
    ),

    "physical.weight": verified(
      "official_standard",
      [
        {
          id: "akc-chinese-shar-pei-standard",
          locator: "Size, proportion and substance: weight",
        },
      ],
      "Weight is stored in pounds, the unit printed in the selected AKC standard. Its single overall breed range is recorded for both sexes because the standard does not give separate sex-specific ranges.",
    ),

    "physical.lifespanYears": verified(
      "reliable_source",
      [
        {
          id: "vca-chinese-shar-pei",
          locator: "Breed overview: lifespan 8 to 12 years",
        },
        {
          id: "oneill-et-al-shar-pei-health-2023",
          locator: "Results: median longevity among 190 deaths in the study cohort",
        },
      ],
      "The general profile estimate is 8–12 years. The cited UK cohort's median longevity of 7.28 years is noted separately in health.overview because it describes a specific study population and is not directly interchangeable with a breed-profile lifespan range.",
    ),

    "physical.coatType": verified(
      "official_standard",
      [
        {
          id: "fci-shar-pei-standard-1999",
          locator: "Coat",
        },
        {
          id: "akc-chinese-shar-pei-standard",
          locator: "Coat",
        },
      ],
      "The standards describe a short, harsh, straight coat with a distinctive bristly texture.",
    ),

    "physical.coatLength": verified(
      "official_standard",
      [
        {
          id: "fci-shar-pei-standard-1999",
          locator: "Coat: horse coat and brush coat lengths",
        },
      ],
      "The FCI standard describes horse-coat and brush-coat varieties and sets a maximum coat length of 2.5 cm; that measurement is retained only in the descriptive text as printed by the standard.",
    ),

    "physical.coatColors": verified(
      "official_standard",
      [
        {
          id: "fci-shar-pei-standard-1999",
          locator: "Colour",
        },
        {
          id: "akc-chinese-shar-pei-profile",
          locator: "Breed colours and markings",
        },
      ],
      "Listed colours are examples of accepted solid colours and dilute shades; white is not represented as an accepted solid colour under the FCI standard.",
    ),

    "physical.sheddingLevel": verified(
      "reliable_source",
      [
        {
          id: "vca-chinese-shar-pei",
          locator: "Breed overview: shedding level",
        },
      ],
      "The veterinary breed profile characterises shedding as moderate.",
    ),

    "physical.droolingLevel": verified(
      "reliable_source",
      [
        {
          id: "vca-chinese-shar-pei",
          locator: "Breed overview: drooling level",
        },
      ],
      "The veterinary breed profile characterises drooling as moderate; individual dogs vary.",
    ),

    "physical.distinctiveFeatures": verified(
      "official_standard",
      [
        {
          id: "fci-shar-pei-standard-1999",
          locator: "General appearance, head, ears, tail and coat",
        },
        {
          id: "akc-chinese-shar-pei-standard",
          locator: "General appearance, head, tongue, skin and coat",
        },
      ],
      "Distinctive features are paraphrased from the official standards.",
    ),

    "temperament.traits": verified(
      "reliable_source",
      [
        {
          id: "akc-chinese-shar-pei-profile",
          locator: "Breed overview and temperament",
        },
        {
          id: "canadian-kennel-club-chinese-shar-pei",
          locator: "Temperament",
        },
        {
          id: "vca-chinese-shar-pei",
          locator: "Temperament and training",
        },
      ],
      "Trait descriptions reflect recurring source descriptions of loyalty, independence, reserve and guarding instincts without claiming every individual behaves identically.",
    ),

    "temperament.scores": estimate(
      [
        {
          id: "akc-chinese-shar-pei-profile",
          locator: "Breed overview and temperament",
        },
        {
          id: "canadian-kennel-club-chinese-shar-pei",
          locator: "Temperament and activity level",
        },
      ],
      "The 1–5 scores are editorial estimates informed by descriptions of loyalty, independence, reserve and guarding tendencies; they are not measured behavioural test results.",
    ),

    "care.exercise.level": verified(
      "reliable_source",
      [
        {
          id: "vca-chinese-shar-pei",
          locator: "Breed overview: energy level",
        },
        {
          id: "canadian-kennel-club-chinese-shar-pei",
          locator: "Activity level",
        },
      ],
      "Sources describe the breed as moderate or relatively calm in activity needs.",
    ),

    "care.exercise.minutesPerDay": unavailable(
      "The reviewed breed standards and veterinary/kennel-club profiles do not establish a reliable universal daily minute range.",
    ),

    "care.exercise.activities": generalGuidance(
      "Walks, play and enrichment are practical general recommendations, not a breed-specific measured prescription.",
    ),

    "care.grooming": verified(
      "reliable_source",
      [
        {
          id: "vca-chinese-shar-pei",
          locator: "Grooming and care: weekly brushing and ear care",
        },
        {
          id: "canadian-kennel-club-chinese-shar-pei",
          locator: "Coat and grooming",
        },
      ],
      "Weekly coat brushing and additional attention to skin folds are supported by veterinary and kennel-club guidance.",
    ),

    "care.training": verified(
      "reliable_source",
      [
        {
          id: "vca-chinese-shar-pei",
          locator: "Temperament and training",
        },
        {
          id: "akc-chinese-shar-pei-profile",
          locator: "Temperament and socialisation",
        },
      ],
      "Training and socialisation guidance reflects the breed's independent temperament and reserve with unfamiliar people and dogs.",
    ),

    "care.livingEnvironment.apartmentSuitable": estimate(
      [
        {
          id: "canadian-kennel-club-chinese-shar-pei",
          locator: "Activity level",
        },
        {
          id: "vca-chinese-shar-pei",
          locator: "Breed overview and care",
        },
      ],
      "Apartment suitability is an editorial estimate conditional on daily exercise, training, companionship and routine skin/ear care; individual dogs and housing rules differ.",
    ),

    "care.livingEnvironment.houseWithYardSuitable": estimate(
      [
        {
          id: "vca-chinese-shar-pei",
          locator: "Breed overview and care",
        },
      ],
      "A home with a secure yard can be suitable but is not a substitute for companionship, walks or training.",
    ),

    "care.livingEnvironment.climates": generalGuidance(
      "Shade, water, ventilation and avoiding strenuous activity in heat are general canine welfare advice rather than a claim that the breed has a precisely measured climate tolerance.",
    ),

    "care.livingEnvironment.aloneTimeTolerance": verified(
      "reliable_source",
      [
        {
          id: "vca-chinese-shar-pei",
          locator: "Temperament: caution about being left alone for long periods",
        },
      ],
      "The veterinary breed profile notes that the breed may be a poor fit for being left alone for long periods.",
    ),

    "nutrition.dietType": generalGuidance(
      "A complete and balanced diet tailored to life stage and body condition is general veterinary nutrition guidance.",
    ),

    "nutrition.feedingFrequency": unavailable(
      "The sources reviewed do not establish fixed puppy, adult and senior meal counts that apply to every Shar Pei.",
    ),

    "nutrition.guidelines": generalGuidance(
      "Portion measurement, body-condition monitoring, gradual diet changes and access to fresh water are general canine nutrition guidance.",
    ),

    "nutrition.considerations": generalGuidance(
      "Veterinary evaluation is preferable to repeated unsupervised diet changes when skin, ear or suspected food-allergy symptoms occur.",
    ),

    "nutrition.note": generalGuidance(
      "No universal meal schedule is asserted because age, activity, health and food formulation affect feeding needs.",
    ),

    "health.overview": verified(
      "reliable_source",
      [
        {
          id: "oneill-et-al-shar-pei-health-2023",
          locator: "Results and conclusions: UK primary-care records from 2013",
        },
        {
          id: "vca-chinese-shar-pei",
          locator: "Health concerns",
        },
      ],
      "Health text distinguishes findings from a defined UK clinical-record cohort from general veterinary breed guidance.",
    ),

    "health.commonConditions": verified(
      "reliable_source",
      [
        {
          id: "oneill-et-al-shar-pei-health-2023",
          locator: "Results: entropion, otitis externa and pyoderma prevalence",
        },
        {
          id: "vca-chinese-shar-pei",
          locator: "Health concerns: eye, skin, ear, hip, thyroid and kidney problems",
        },
        {
          id: "merck-veterinary-manual-shar-pei-fever",
          locator: "Clinical findings and key points: familial fever syndrome and renal amyloidosis",
        },
      ],
      "Conditions are supported by a population study and veterinary references; inclusion does not mean every dog will develop them.",
    ),

    "health.preventiveCare": generalGuidance(
      "Routine veterinary care and early assessment of concerning symptoms are general preventive-care guidance, tailored here to the breed's documented risk areas.",
    ),

    "health.recommendedScreenings": verified(
      "reliable_source",
      [
        {
          id: "vca-chinese-shar-pei",
          locator: "Health concerns: recommended pre-breeding OFA and CERF screenings",
        },
        {
          id: "oneill-et-al-shar-pei-health-2023",
          locator: "Conclusions: welfare relevance of entropion and skin/ear disease",
        },
        {
          id: "merck-veterinary-manual-shar-pei-fever",
          locator: "Diagnosis: routine screening for urinary protein loss is recommended in Shar Pei",
        },
        {
          id: "chinese-shar-pei-club-health-statement",
          locator: "Recommended CHIC health screenings",
        },
      ],
      "Eye checks, recognised pre-breeding screening and veterinary discussion of urinary protein monitoring are supported; the record does not invent a universal screening panel for every pet.",
    ),

    "health.dentalCare": generalGuidance(
      "Routine tooth brushing and veterinary dental checks are general canine preventive-care advice.",
    ),

    "health.earCare": verified(
      "reliable_source",
      [
        {
          id: "vca-chinese-shar-pei",
          locator: "Grooming and care: regular ear cleaning",
        },
        {
          id: "oneill-et-al-shar-pei-health-2023",
          locator: "Results: otitis externa and other ear disorders",
        },
      ],
      "Regular inspection and prompt attention to ear symptoms are supported by veterinary guidance and breed-specific epidemiology.",
    ),

    "health.skinCare": verified(
      "reliable_source",
      [
        {
          id: "canadian-kennel-club-chinese-shar-pei",
          locator: "Grooming: skin-fold care",
        },
        {
          id: "oneill-et-al-shar-pei-health-2023",
          locator: "Results: pyoderma and dermatological disorders",
        },
        {
          id: "vca-chinese-shar-pei",
          locator: "Grooming and health concerns",
        },
      ],
      "Skin-fold checks and attention to inflammation or infection are supported by breed-care guidance and population-level health findings.",
    ),

    suitability: estimate(
      [
        {
          id: "akc-chinese-shar-pei-profile",
          locator: "Temperament and breed overview",
        },
        {
          id: "vca-chinese-shar-pei",
          locator: "Temperament, training and care",
        },
      ],
      "Suitability descriptions are editorial guidance based on the breed's independence, reserve, training needs and care requirements; they are not a validated behavioural or household assessment.",
    ),

    "suitability.familiesWithChildren": unavailable(
      "The reviewed sources do not support a universal yes/no rating for every family with children; supervision and the individual dog's temperament matter.",
    ),

    "suitability.seniorOwners": unavailable(
      "The reviewed sources do not establish a reliable breed-wide yes/no rating for senior owners.",
    ),

    "suitability.apartmentLiving": unavailable(
      "The reviewed sources do not establish a universal yes/no rating for apartment living; the answer depends on the individual dog and its care plan.",
    ),

    funFacts: verified(
      "reliable_source",
      [
        {
          id: "fci-shar-pei-standard-1999",
          locator: "General appearance, coat and colour",
        },
        {
          id: "fci-shar-pei-nomenclature",
          locator: "Recognition status and date",
        },
        {
          id: "akc-chinese-shar-pei-profile",
          locator: "Breed description and coat",
        },
      ],
      "Fun facts are paraphrased from official and kennel-club material.",
    ),

    faq: verified(
      "reliable_source",
      [
        {
          id: "fci-shar-pei-standard-1999",
          locator: "General appearance, coat and colour",
        },
        {
          id: "akc-chinese-shar-pei-standard",
          locator: "Size, proportion and substance",
        },
        {
          id: "vca-chinese-shar-pei",
          locator: "Breed overview, grooming and health concerns",
        },
        {
          id: "oneill-et-al-shar-pei-health-2023",
          locator: "Results and conclusions",
        },
      ],
      "FAQ answers summarise sourced facts and clearly distinguish general guidance from study-specific statistics.",
    ),
  },

  updatedOn: "2026-10-26",
};
