import type { Breed } from "../schema/breed.types";

export const doberman_pinscher: Breed = {
  slug: "doberman-pinscher",
  name: "Doberman Pinscher",
  scientificName: null,
  alternateNames: [
    "Dobermann",
    "Dobie",
  ],
  group: "Working Dogs; Pinschers and Guard Dogs",

  origin: {
    country: "Germany",
    region: "Thuringia, Germany",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Doberman_Pinscher_aka_Dobermann.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Doberman_Pinscher_aka_Dobermann.jpg",
      title: "Doberman Pinscher aka Dobermann.jpg",
      description: "A black-and-rust female Doberman Pinscher standing in profile.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2011-07-10",
      uploadedOn: "2014-04-16",
      width: 1083,
      height: 1871,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Indicate changes, if any; adaptations must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Doberman_Dog.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Doberman_Dog.jpg",
      title: "Doberman Dog.jpg",
      description: "An alert adult Doberman Pinscher sitting attentively outdoors.",
      creator: "Puppydekho",
      uploader: "Puppydekho",
      capturedOn: "2024-03-03",
      uploadedOn: "2024-03-18",
      width: 1500,
      height: 1600,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Puppydekho, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Indicate changes, if any; adaptations must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Doberman_Pinscher.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Doberman_Pinscher.jpg",
      title: "Doberman Pinscher.jpg",
      description: "Doberman Pinscher standing outdoors on grass.",
      creator: "Willitorivera",
      uploader: "Willitorivera",
      capturedOn: "2017-06-16",
      uploadedOn: null,
      width: 2620,
      height: 4656,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Willitorivera, via Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Indicate changes, if any; adaptations must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-11-08",
    },
  ],

  overview: {
    summary:
      "Renowned for its muscular square build, glossy close-fitting coat, and proud carriage, the Doberman Pinscher is a versatile German working breed celebrated for keen intelligence, vigilance, and fierce household devotion. It pairs athletic speed with deep loyalty, thriving when included as an active partner in daily family life.",

    description:
      "Sculpted with a clean, wedge-shaped head, dark intelligent eyes, a deep chest, and tight cat-like paws, the Doberman Pinscher moves with elastic power and effortless ground coverage. Developed primarily for personal protection and tactical utility, it exhibits sharp situational awareness and an intuitive desire to stay close to its handler. While inherently vigilant and reserved around strangers, a soundly bred and well-socialised adult is affectionate, remarkably gentle with its home circle, and enthusiastic about cooperative tasks. Prospective owners must be ready for serious daily exercise, mental enrichment, and calm, positive training, as an under-exercised or isolated working guardian can channel its restless drive into vocalising or overprotective reactivity.",

    history:
      "The breed originated in Apolda in the German state of Thuringia during the late nineteenth century through the vision of Friedrich Louis Dobermann, a local tax collector and night-watch warden who sought an alert, courageous protection dog. Crossing local butcher's dogs, German Pinschers, and working sighthound and sheepdog strains, he established a dependable, fearless guardian. Rapidly recognized for trainability and physical endurance, the dogs became premier search, sentry, and patrol animals for police forces and military units—including distinguished service with the United States Marine Corps in the Pacific theater—before winning international acclaim in competitive sports and as family companions.",

    originalPurpose:
      "Personal protection, estate guarding, and night-patrol duty for handlers in nineteenth-century Germany, later serving as military scout, messenger, and police patrol dogs.",

    currentRoles: [
      "Devoted household companion and personal guardian",
      "Competitive obedience, rally, and tracking athlete",
      "Agility, flyball, and working dog sport competitor",
      "Search-and-rescue and certified therapy dog in appropriate temperaments",
      "Conformation show competitor",
    ],
  },

  physical: {
    sizeCategory: "Medium-large, muscular, square-bodied working dog",

    height: {
      unit: "cm",
      male: { min: 68, max: 72 },
      female: { min: 63, max: 68 },
    },

    weight: {
      unit: "kg",
      male: { min: 40, max: 45 },
      female: { min: 32, max: 35 },
    },

    lifespanYears: {
      min: 10,
      max: 12,
    },

    coatType:
      "Short, hard, dense, and glossy hair lying smooth and tight against the skin, without a visible undercoat.",

    coatLength: "Short",

    coatColors: [
      "Black and Rust",
      "Brown and Rust",
      "Blue and Rust",
      "Fawn and Rust",
    ],

    sheddingLevel:
      "Moderate visible shedding year-round; fine, needle-like hairs shed continuously and benefit from weekly grooming with a rubber curry glove or bristle brush.",

    droolingLevel: "Low",

    distinctiveFeatures: [
      "Compact, square silhouette with height at the withers nearly matching body length",
      "Clean, elongated wedge-shaped head with flat skull planes and parallel muzzle lines",
      "Dark, oval almond-shaped eyes with an energetic, discerning, and intelligent gaze",
      "Rich, sharply delineated rust markings over each eye, on the muzzle, chest, legs, and under the tail",
      "Deep, well-developed chest reaching the elbows and a moderate belly tuck-up",
      "Naturally folded medium drop ears or cropped erect ears where legally practiced",
      "Naturally long whip-like tail or docked tail where permitted by local jurisdiction",
    ],
  },

  temperament: {
    traits: [
      "Intelligent",
      "Alert and observant",
      "Deeply loyal to its household",
      "Energetic and athletic",
      "Confident",
      "Courageous",
      "Highly trainable",
      "Naturally protective",
      "Sensitive to handler emotion and routine",
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 5,
      independence: 2,
      trainability: 5,
      barking: 3,
      energy: 5,
    },
  },

  care: {
    exercise: {
      level: "High",

      minutesPerDay: {
        min: 60,
        max: 120,
      },

      activities: [
        "Brisk daily walking, running, or jogging alongside an adult handler",
        "Interactive fetch, frisbee, and structured lure-chasing in tall, securely fenced areas",
        "Reward-based obedience drills and precision tracking games",
        "Agility, scent-work, and canine obstacle courses",
        "Mental enrichment through food-dispensing puzzles, scent puzzles, and calm sniffing walks",
      ],
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush once or twice a week with a rubber curry mitt or short-bristled brush to remove dead hairs, stimulate skin circulation, and keep the sleek coat shining.",

      bathing:
        "Bathe only every few months or when muddy, using a mild canine moisturizing shampoo and drying thoroughly to protect the skin barrier.",

      notes: [
        "Inspect the short coat and skin weekly for dandruff, dry patches, or localized redness.",
        "Trim fast-growing dark nails weekly or bi-weekly to prevent splayed toes and preserve sound foot posture.",
        "Check natural drop ears or erect ears weekly for wax, moisture, or odor, wiping gently with veterinarian-approved cleansers.",
        "Provide soft bedding and indoor warmth during cold weather, as the single short coat provides minimal insulation against freezing temperatures.",
      ],
    },

    training: {
      difficulty:
        "Moderate to high; exceptionally smart, observant, and eager to work, but quick to exploit ambiguity, inconsistent rules, or harsh handling.",

      tips: [
        "Rely on reward-based positive reinforcement, clear cues, and calm timing; avoid heavy-handed physical corrections that create conflict or defensive distrust.",
        "Establish polite boundary manners, crate training, and calm settle cues around doors and household visitors from day one.",
        "Practice loose-leash walking and impulse control games early before adolescent strength and chasing drive peak.",
        "Introduce veterinary handling, paw touching, and mouth inspection calmly during puppyhood to build lifetime cooperative veterinary manners.",
      ],

      socialization:
        "Provide controlled, positive exposure to diverse people, friendly dogs, noisy public settings, and varied surfaces throughout puppyhood and adolescence to cultivate calm confidence rather than defensive suspicion.",
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool climates when provided with indoor heating and winter coats for outdoor exercise",
        "Warm climates with ample shade, air conditioning, and exercise scheduled during cool morning and evening hours",
      ],

      aloneTimeTolerance:
        "Low to moderate; deeply attached to family members and prone to separation distress, boredom, or nuisance barking if left isolated for prolonged periods without exercise or mental work.",
    },
  },

  nutrition: {
    dietType:
      "High-quality commercial kibble, wet food, or veterinary-formulated diet tailored to large, deep-chested athletic working breeds.",

    feedingFrequency: {
      puppy: "3 to 4 measured meals daily during rapid skeletal growth, transitioning to 2 meals daily by six months of age",
      adult: "2 measured meals per day to maintain stable energy and mitigate gastric dilatation-volvulus risks",
      senior: null,
    },

    guidelines:
      "Weigh rations accurately and maintain a lean, well-muscled silhouette where ribs can be readily felt beneath the skin, adjusting portions to preserve joint health and avoid excess bulk.",

    considerations: [
      "To reduce the hazard of bloat (gastric dilatation-volvulus), avoid strenuous galloping or vigorous exercise for at least one hour before and after meals.",
      "Account for all training treats within the total daily calorie budget to avoid insidious weight gain.",
      "Keep clean, fresh drinking water accessible throughout the day.",
      "Seek veterinary evaluation if unexplained weight changes, dull coat condition, or chronic digestive sensitivities arise.",
    ],

    note: "Calorie needs vary significantly based on workload, age, metabolism, and reproductive status; discuss optimal nutrition with a veterinarian.",
  },

  health: {
    overview:
      "While athletic and vigorous with a typical lifespan of 10 to 12 years, the Doberman Pinscher faces significant breed-associated health vulnerabilities. Foremost among these is dilated cardiomyopathy (DCM), an adult-onset heart-muscle failure requiring annual screening by veterinary cardiologists, alongside von Willebrand disease, hypothyroidism, chronic hepatitis, and cervical vertebral instability.",

    commonConditions: [
      "Dilated cardiomyopathy (DCM): primary heart-muscle degeneration predisposing to arrhythmias, congestive heart failure, and sudden collapse.",
      "Von Willebrand disease (vWD Type I): an inherited bleeding disorder characterized by reduced blood-clotting factor; detectable via direct DNA testing.",
      "Autoimmune thyroiditis and primary hypothyroidism: immune-mediated thyroid atrophy leading to lethargy, weight gain, and symmetrical coat thinning.",
      "Cervical vertebral instability (Wobbler syndrome): malformation or instability of cervical vertebrae causing spinal cord compression, neck pain, and hind-limb ataxia.",
      "Chronic active hepatitis: progressive inflammatory copper-associated or immune-mediated liver pathology.",
      "Hip dysplasia: developmental incongruity of the hip joints that can lead to osteoarthritis.",
      "Gastric dilatation-volvulus (bloat): acute life-threatening gas distension and twisting of the stomach in deep-chested dogs.",
      "Ophthalmic disorders (including progressive retinal atrophy and persistent pupillary membranes).",
    ],

    preventiveCare: [
      "Initiate annual cardiac evaluations—including echocardiography and 24-hour ambulatory Holter electrocardiography—starting in young adulthood.",
      "Verify that puppy parents hold certified clearances for hips, eyes, thyroid panels, and vWD DNA status.",
      "Learn the acute warning signs of bloat (restless pacing, swollen rigid belly, non-productive retching) and know the nearest emergency veterinary hospital.",
      "Use a supportive harness rather than a neck collar during walks if any cervical tenderness or wobbling gait is suspected.",
      "Keep vaccines, blood parasite prevention, and routine wellness examinations up to date.",
    ],

    recommendedScreenings: [
      "Cardiac examination by a board-certified veterinary cardiologist, including echocardiogram and 24-hour Holter monitor",
      "Radiographic hip dysplasia evaluation through a recognized orthopaedic screening scheme",
      "DNA test for von Willebrand disease (Type I)",
      "Autoimmune thyroiditis complete blood panel through an accredited veterinary laboratory",
      "Comprehensive eye examination by a board-certified veterinary ophthalmologist",
      "Periodic liver panel biochemistry monitoring in mature adults",
    ],

    dentalCare:
      "Brush teeth several times per week using canine-safe enzymatic paste and schedule veterinary dental cleanings as needed.",

    earCare:
      "Check ears weekly for dirt, wax accumulation, or redness, cleaning with a veterinarian-recommended solution and drying thoroughly.",

    skinCare:
      "Examine the skin during weekly brushing for flaking, hot spots, or coat thinning; supply supportive orthopedic bedding to prevent elbow calluses.",
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Experienced dog owners capable of providing confident, calm, reward-based leadership",
      "Highly active individuals, runners, hikers, and canine sports enthusiasts",
      "Households with a securely fenced yard and ample time for structured daily training and play",
      "Families with respectful, dog-savvy older children who understand canine body language",
      "People seeking a loyal, shadows-your-every-move companion and alert watchdog",
    ],

    notIdealFor: [
      "First-time dog owners unprepared for high physical energy and guardian instincts",
      "Sedentary households unable to commit to one to two hours of daily exercise",
      "Homes where the dog would be left alone for 8 to 10 hours daily without companionship",
      "People who rely on harsh discipline or punitive training methods",
    ],
  },

  funFacts: [
    "The Doberman Pinscher is the only dog breed officially named after its creator, Louis Dobermann, a nineteenth-century tax collector and animal warden.",
    "During World War II, Dobermans served bravely as 'Devil Dogs' with the United States Marine Corps in the South Pacific, working as scouts, sentries, and messengers.",
    "Known by enthusiasts as 'Velcro dogs', Dobermans form remarkably intense bonds with their handlers and tend to follow them closely from room to room.",
    "Four coat colors—black, red, blue, and fawn (Isabella)—each carrying warm rust points, are recognized in the American standard, whereas European standards recognize only black and brown.",
    "Despite their fierce Hollywood reputation, soundly raised Dobermans are famous among owners for a silly, playful, and affectionate home personality.",
  ],

  faq: [
    {
      question: "How big do Doberman Pinschers get?",
      answer:
        "Official measurements list males at 68 to 72 cm in wither height and approximately 40 to 45 kg in weight, while females measure 63 to 68 cm and weigh about 32 to 35 kg.",
    },
    {
      question: "Are Doberman Pinschers good family dogs?",
      answer:
        "Yes, soundly bred and well-socialised Dobermans are famously affectionate, playful, and loyal with family members. They do best in homes that provide consistent training, clear boundaries, and appropriate supervision around active children.",
    },
    {
      question: "How much exercise does a Doberman Pinscher need daily?",
      answer:
        "Healthy adult Dobermans require 60 to 120 minutes of daily physical exercise and mental engagement. Combining brisk walks with running, fetch, nosework, and obedience puzzles keeps their high energy safely focused.",
    },
    {
      question: "What health problems are most common in Dobermans?",
      answer:
        "Dilated cardiomyopathy (DCM) is the primary life-threatening condition in the breed. Other key health concerns include von Willebrand disease, hypothyroidism, chronic hepatitis, Wobbler syndrome, and bloat.",
    },
    {
      question: "What health tests should I verify before getting a puppy?",
      answer:
        "Ask breeders for documented parental cardiac clearances (echocardiogram and Holter monitor), DNA results for von Willebrand disease, radiographic hip evaluations, and thyroid panels.",
    },
    {
      question: "Do Doberman Pinschers shed heavily?",
      answer:
        "They shed a moderate amount of short, stiff hairs throughout the year. Regular weekly brushing with a rubber curry glove easily removes loose hair and maintains coat shine.",
    },
    {
      question: "What colors do Doberman Pinschers come in?",
      answer:
        "Colors include black, red (brown), blue, and fawn (Isabella), each paired with sharply defined rust markings above the eyes, on the muzzle, throat, forechest, legs, and under the tail.",
    },
    {
      question: "How long do Doberman Pinschers typically live?",
      answer:
        "The typical life expectancy is 10 to 12 years when supported by quality preventive veterinary care, regular heart screening, and sound nutrition.",
    },
    {
      question: "Can a Doberman Pinscher live in an apartment?",
      answer:
        "While adaptable, their large size, high energy, and natural alertness make apartment living difficult unless an owner can dedicate multiple hours every day to vigorous outdoor exercise and mental stimulation.",
    },
  ],

  references: [
    "fci-dobermann-standard",
    "american-kennel-club-doberman-pinscher",
    "american-kennel-club-working-group-health-testing-requirements",
    "doberman-pinscher-club-america-health-statement",
    "wikimedia-doberman-canarian",
    "wikimedia-doberman-puppydekho",
    "wikimedia-doberman-willitorivera",
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
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "FCI Standard N° 143: Dobermann",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Alternate names (Dobermann, Dobie) verified from standard and structured reference records.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "Classification: Group 2 Pinscher and Schnauzer type, Section 1 Pinschers, with working trial",
        },
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "verified",
          locator: "Breed profile: Working Group",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.breed_group",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Combines Working Group and Pinscher classifications without citing registry acronyms in user-facing text.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "Origin: Germany",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "origin.region": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "Brief Historical Summary: developed in the 1870s in Apolda, Thuringia, Germany",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Identifies the historical region of Thuringia, Germany, documented in the official standard.",
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "Brief Historical Summary, General Appearance, Behaviour/Temperament, and Use sections",
        },
        {
          id: "american-kennel-club-doberman-pinscher",
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
      note: "All overview text is synthesized in original phrasing from standard and kennel-club references.",
    },

    "physical.sizeCategory": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "General Appearance and Size and Weight sections: medium size, powerful and muscular build",
        },
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "verified",
          locator: "About the Breed: medium size, square body",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "Size and Weight: Height at withers — Males 68-72 cm, Bitches 63-68 cm",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.height.metric (male 66-71 cm, female 61-66 cm)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Stored in exact published FCI metric centimetres (males 68-72 cm, females 63-68 cm). The Dog API reflects American standard heights (26-28 in / 24-26 in, converted as 66-71 cm / 61-66 cm); official FCI standard numbers are retained.",
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "Size and Weight: Weight — Males about 40-45 kg, Bitches about 32-35 kg",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight.metric (male 34-45 kg, female 27-41 kg)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Stored in exact sex-specific kilogram figures published in the official FCI breed standard (males 40-45 kg, females 32-35 kg). The Dog API lists 34-45 kg for males and 27-41 kg for females.",
    },

    "physical.weight.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "Size and Weight: Males about 40-45 kg",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (male 34-45 kg)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Official FCI standard and reference agree on 45 kg maximum male weight.",
    },

    "physical.weight.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "Size and Weight: Bitches about 32-35 kg",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight.metric (female 27-41 kg)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Retains the official FCI standard upper bound of 35 kg; The Dog API reports 41 kg.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "verified",
          locator: "Breed profile — Life Expectancy: 10-12 years",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span (10-12 years)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "Coat — Hair: Short, hard and dense; lying tight and smooth; undercoat not allowed",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dobermann-standard",
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
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "Colour: Black or brown with rust red clearly defined and clean markings",
        },
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "verified",
          locator: "Colors & Markings: Black and Rust, Blue and Rust, Fawn and Rust, Red and Rust",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "GET /breeds/{id}/colours",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Includes the standard colors with rust markings recognised across FCI (black, brown) and AKC (black, red, blue, fawn/Isabella). Non-standard species-wide endpoint variants (e.g. merle, brindle, solid white) are excluded.",
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
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
          id: "american-kennel-club-doberman-pinscher",
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
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "General Appearance, Head, Eyes, Tail, Limbs, and Coat sections",
        },
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "verified",
          locator: "About the Breed: physical characteristics",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "Behaviour / Temperament: Friendly, calm, very devoted to the family; medium sharpness and protective instinct; obedient and fearless",
        },
        {
          id: "american-kennel-club-doberman-pinscher",
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
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile — Trait ratings and temperament descriptions",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1-5 ratings based on documented breed characteristics.",
    },

    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "verified",
          locator: "Breed profile — Exercise section",
        },
        {
          id: "fci-dobermann-standard",
          role: "cited",
          locator: "Utilization: working trial dog",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Daily exercise requirements (60-120 minutes) reflecting an athletic, high-energy working breed.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "verified",
          locator: "Breed profile — Grooming section",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Low grooming requirement for a short, single-coated breed, along with routine nail and dental care.",
    },

    "care.training": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile — Training and socialization guidance",
        },
      ],
      verifiedOn: null,
      note: "Humane, reward-based training guidance adapted to a powerful, intelligent protection breed.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile — Exercise and activity requirements",
        },
      ],
      verifiedOn: null,
      note: "Boolean assessment; large size, high energy, and guarding alertness generally make standard apartments less suitable than homes with secure yards.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile — Exercise and activity requirements",
        },
      ],
      verifiedOn: null,
      note: "A securely fenced yard facilitates necessary daily exercise and off-leash play.",
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "cited",
          locator: "Coat — Hair: short, single coat without undercoat",
        },
      ],
      verifiedOn: null,
      note: "Guidance on shelter and winter protection due to the lack of an insulating undercoat.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile — Temperament: deeply attached, people-oriented",
        },
      ],
      verifiedOn: null,
      note: "Guidance on separation and alone-time management for family-attached working dogs.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile — Nutrition section",
        },
      ],
      verifiedOn: null,
      note: "General canine nutritional recommendations suited to a deep-chested, muscular working breed.",
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
          id: "doberman-pinscher-club-america-health-statement",
          role: "verified",
          locator: "DPCA Health Statement: dilated cardiomyopathy, thyroid, vWD, liver disease, cervical vertebral instability, hips, eyes",
        },
        {
          id: "american-kennel-club-working-group-health-testing-requirements",
          role: "verified",
          locator: "Doberman Pinscher health testing requirements",
        },
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "verified",
          locator: "Breed profile — Health section",
        },
      ],
      verifiedOn: "2026-11-08",
      note: "Synthesises parent-club health testing requirements and scientifically documented breed health conditions.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "doberman-pinscher-club-america-health-statement",
          role: "cited",
          locator: "Health testing protocol: annual cardiac screening",
        },
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile — Health and preventive care",
        },
      ],
      verifiedOn: null,
      note: "Proactive veterinary preventive care, annual cardiac monitoring, and bloat emergency readiness.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-working-group-health-testing-requirements",
          role: "verified",
          locator: "Doberman Pinscher: Cardiac Evaluation, Hip Evaluation, Ophthalmologist Evaluation, Thyroid Evaluation, Von Willebrand's Disease DNA Test",
        },
        {
          id: "doberman-pinscher-club-america-health-statement",
          role: "verified",
          locator: "Recommended health testing protocol",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine canine dental hygiene advice.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine ear hygiene for natural and cropped ears.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Skin inspection and callus prevention advice for short-coated breeds.",
    },

    "suitability.firstTimeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile — Temperament, training, and exercise needs",
        },
      ],
      verifiedOn: null,
      note: "Editorial assessment; high physical power, sharp intelligence, and guarding drives make the breed better suited to experienced owners.",
    },

    "suitability.familiesWithChildren": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile — Traits: Good with Young Children",
        },
      ],
      verifiedOn: null,
      note: "Boolean assessment; affectionate and playful with household children under responsible adult supervision.",
    },

    "suitability.seniorOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile — Energy level and exercise needs",
        },
      ],
      verifiedOn: null,
      note: "Editorial assessment; high strength, size, and exercise demands can be challenging for seniors without active support.",
    },

    "suitability.activeOwners": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "verified",
          locator: "Breed profile — Exercise section",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    "suitability.apartmentLiving": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
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
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile — Temperament, exercise, and training needs",
        },
      ],
      verifiedOn: null,
      note: "Synthesised owner-matching guidance based on activity level, guardian instincts, and mental enrichment needs.",
    },

    "suitability.notIdealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "cited",
          locator: "Breed profile — Temperament, exercise, and training needs",
        },
      ],
      verifiedOn: null,
      note: "Synthesised owner-matching caveats.",
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "Brief Historical Summary and General Appearance (creator, working trial, origins)",
        },
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "verified",
          locator: "About the Breed (military Devil Dogs, Velcro nature, playful temperament)",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-dobermann-standard",
          role: "verified",
          locator: "Size, Weight, Coat, Colour, and Temperament sections",
        },
        {
          id: "american-kennel-club-doberman-pinscher",
          role: "verified",
          locator: "Breed profile — Weight, Lifespan, Exercise, Grooming, Training, and Health",
        },
        {
          id: "american-kennel-club-working-group-health-testing-requirements",
          role: "verified",
          locator: "Recommended health evaluations",
        },
        {
          id: "doberman-pinscher-club-america-health-statement",
          role: "verified",
          locator: "Parent-club health statement: DCM, vWD, thyroid, Wobbler syndrome",
        },
      ],
      verifiedOn: "2026-11-08",
      note: null,
    },
  },

  updatedOn: "2026-11-08",
};
