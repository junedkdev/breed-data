import type { Breed } from "../schema/breed.types";

export const basset_hound: Breed = {
  slug: "basset-hound",
  name: "Basset Hound",
  scientificName: null,

  alternateNames: [
    "Basset",
    "Hush Puppy Dog",
  ],

  group:
    "Scent Hounds and Related Breeds; Section 1.3 — Small-sized Hounds (with working trial)",

  origin: {
    country: "Great Britain",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Basset_hound_LM.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Basset_hound_LM.jpg",
      title: "Basset hound LM.jpg",
      description:
        "A tricolour Basset Hound at the International Dog Show in Katowice, Poland.",
      creator: "Lilly M",
      uploader: "Pleple2000",
      capturedOn: "2007-03-16",
      uploadedOn: "2007-04-02",
      width: 1780,
      height: 2356,
      licenseId: "cc-by-sa-2.5",
      attribution:
        "Photo by Lilly M (uploaded by Pleple2000), Wikimedia Commons, CC BY-SA 2.5. Source: https://commons.wikimedia.org/wiki/File:Basset_hound_LM.jpg. License: https://creativecommons.org/licenses/by-sa/2.5/. No changes made.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Basset_Hound_600.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Basset_Hound_600.jpg",
      title: "Basset Hound 600.jpg",
      description:
        "A tricolour Basset Hound standing in profile at the City of Birmingham Championship Dog Show.",
      creator: "sannse",
      uploader: "sannse",
      capturedOn: "2003-08-29",
      uploadedOn: "2005-09-11",
      width: 600,
      height: 400,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by sannse, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Basset_Hound_600.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. No changes made.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17",
    },
  ],

  overview: {
    summary:
      "The Basset Hound is a short-legged, heavy-boned scent hound of French ancestry refined in Great Britain, recognised for its long, deep body, velvety low-set ears, supple wrinkled skin, placid and affectionate nature, and deep, melodious trailing voice.",

    description:
      "Combining substantial bone and big-dog substance with a low-set stature of 33 to 38 cm at the withers, the Basset Hound is built for steady, tireless fieldwork rather than speed. Its long, deep torso is carried with adequate ground clearance over short, heavily boned forelegs and muscular hindquarters that drive with smooth, effortless reach. A domed skull with a prominent occipital bone, overlapping upper flews, lozenge-shaped dark eyes, and long, narrow, velvety ears set below eye level give the breed a calm, serious expression. Covered in a smooth, short, weather-resistant coat—most often black, white, and tan tricolour or lemon and white—this gregarious pack hound is gentle and easygoing indoors yet tenacious and vocal once locked onto a scent line.",

    history:
      "Although its name comes from the French word 'bas' ('low') and its early ancestors were low-slung French hunting hounds bred to trail small game on foot, the modern Basset Hound was developed in Great Britain. French hounds from Artois and Normandy—most notably the Basset Artésien Normand—were imported into England beginning in the 1860s. During the 1870s, Sir Everett Millais championed the breed in England, using his imported hound Model as a cornerstone and incorporating Beagle and Bloodhound bloodlines to add bone, size, and scenting power. The Basset Hound Club was established in Britain in 1884 with royal patronage from Queen Alexandra, and the breed gained American recognition in 1885 and definitive international recognition in January 1955.",

    originalPurpose:
      "Methodical pack and foot-hunting of hare, rabbit, and other small game by scent through dense undergrowth.",

    currentRoles: [
      "Family companion",
      "Scent-tracking, mantrailing, and nosework dog",
      "Small-game pack and field-trial hunting hound",
      "Therapy and community visiting dog",
    ],
  },

  physical: {
    sizeCategory: "Small-to-medium height, heavy-boned scent hound",

    height: {
      unit: "cm",
      male: {
        min: 33,
        max: 38,
      },
      female: {
        min: 33,
        max: 38,
      },
    },

    weight: {
      unit: "kg",
      male: {
        min: 18,
        max: 30,
      },
      female: {
        min: 18,
        max: 30,
      },
    },

    lifespanYears: {
      min: 12,
      max: 13,
    },

    coatType:
      "Smooth, short, and close-lying coat without being overly fine, presenting a clean outline completely free of feathering or long hair over supple, elastic skin.",

    coatLength: "Short",

    coatColors: [
      "Tricolour (black, white, and tan)",
      "Lemon and white (bicolour)",
      "Red and white",
      "Tan and white",
      "Any other recognised hound colour",
    ],

    sheddingLevel:
      "Moderate year-round shedding of short, dense hairs",

    droolingLevel:
      "High; substantial upper flews overlapping the lower lips produce frequent drool, especially after drinking, eating, or warm exercise",

    distinctiveFeatures: [
      "Short-legged, heavy-boned hound standing 33 to 38 cm at the withers and weighing 18 to 30 kg, with clear ground clearance beneath the chest",
      "Domed skull with a prominent occipital bone, moderate stop, and foreface tapering slightly to a nearly parallel nasal bridge",
      "Supple, elastic skin without exaggeration, forming a moderate amount of wrinkle at the brow and beside the eyes when the head is lowered",
      "Substantial upper-lip flews overlapping the lower lip and a strong, complete scissor bite",
      "Lozenge-shaped dark eyes—neither prominent nor deep-set—with a calm, serious expression",
      "Long, narrow, supple, velvety ears set low just below the eye line, folding inward and reaching just beyond the end of the muzzle of correct length",
      "Muscular, well-arched, fairly long neck with a pronounced but unexaggerated dewlap",
      "Long, deep body with a prominent breastbone, well-rounded ribs, and a rather broad, level back",
      "Short, powerful forelegs with great bone and wrinkled skin on the lower legs, resting on large, well-knuckled, heavily padded feet",
      "Well-set, fairly long tail strong at the base and tapering, carried high in a gentle sabre curve and never gay or tightly curled",
    ],
  },

  temperament: {
    traits: [
      "Placid, calm, and even-tempered indoors",
      "Affectionate and devoted toward family members, never aggressive or timid",
      "Tenacious and determined when following a ground scent",
      "Gregarious and pack-oriented with other dogs",
      "Patient and gentle with children",
      "Endowed with a deep, melodious, far-carrying voice",
      "Independent and scent-focused outdoors",
    ],

    scores: {
      affection: 5,
      withChildren: 5,
      withDogs: 5,
      withStrangers: 4,
      protectiveness: 2,
      independence: 4,
      trainability: 3,
      barking: 4,
      energy: 2,
    },
  },

  care: {
    exercise: {
      level:
        "Moderate. Though low-key indoors, the Basset Hound is a working scent hound built for endurance and needs up to an hour of daily walking and nosework to stay fit and lean.",

      minutesPerDay: {
        min: 45,
        max: 60,
      },

      activities: [
        "Daily leashed walks with ample time to sniff and explore",
        "Scent-tracking games, nosework, and foraging puzzles",
        "Supervised play and pottering inside a securely fenced garden",
        "Low-impact field tracking trials",
      ],
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush once or twice a week with a rubber hound glove or soft bristle brush to remove loose hair and keep the short coat clean.",

      bathing:
        "Bathe every four to six weeks or when muddy, using a mild canine shampoo and drying all skin folds thoroughly afterward.",

      notes: [
        "Check and gently clean the long, hanging ears two to three times a week, keeping the ear canals dry and well ventilated.",
        "Wipe facial wrinkles, lip folds, and the neck dewlap regularly with a damp cloth and dry them completely to prevent moisture irritation.",
        "Keep a towel handy to wipe drool after the dog drinks or eats.",
        "Trim the heavy nails every two to three weeks so the large, padded feet remain balanced.",
        "Brush teeth several times a week with canine toothpaste.",
        "Use ramps or lift the dog properly rather than allowing repetitive jumping off high furniture or out of vehicles, protecting the long back and short forelegs.",
      ],
    },

    training: {
      difficulty:
        "Moderate. Agreeable and food-motivated, yet bred to follow scent independently—requiring patient, reward-based training and consistent lead or fence containment.",

      tips: [
        "Use high-value food treats and upbeat praise in short, varied sessions.",
        "Incorporate scent games as rewards to work with the hound's natural tracking instinct.",
        "Keep the dog on a lead in unfenced areas, as an interesting scent trail can quickly override recall.",
        "Avoid harsh corrections, which cause a placid hound to tune out.",
      ],

      socialization:
        "Introduce puppies early to varied people, other dogs, household sounds, and regular ear, paw, and wrinkle handling so they grow into relaxed, cooperative adults.",
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool weather when housed indoors",
        "Warm weather with shade, cool water, and walks timed for morning or evening to prevent overheating",
      ],

      aloneTimeTolerance:
        "Low to moderate; because of its strong pack instinct, the breed thrives on company and may bay mournfully if left alone for long hours.",
    },
  },

  nutrition: {
    dietType:
      "Complete, balanced diet formulated for medium-to-large dogs, carefully portioned to prevent excess weight on its long back and short limbs.",

    feedingFrequency: {
      puppy:
        "Three measured meals daily during early growth, transitioning to two daily meals on a controlled-growth formula.",
      adult:
        "Two measured meals daily to support steady digestion and reduce bloat risk.",
      senior:
        "Two portion-controlled meals daily adjusted for lower calorie needs and joint health.",
    },

    guidelines:
      "Measure every meal accurately to keep the dog in fit working trim; extra weight puts heavy strain on the spine, elbows, and stifles. Divide the daily ration into two meals, avoid strenuous activity immediately before and after eating, and use narrow or deep-eared hound bowls so the long ears stay out of food and water.",

    considerations: [
      "Keep body weight lean so ribs remain palpable without heavy fat cover.",
      "Deduct training treats from the daily food allowance.",
      "Use narrow hound dishes to keep the ear tips clean and dry during meals.",
      "Allow rest before and after meals to help lower the risk of gastric dilatation-volvulus (bloat).",
      "Provide fresh drinking water at all times.",
    ],

    note:
      "General canine nutrition guidance; consult a veterinarian to set exact calorie portions for age and activity level.",
  },

  health: {
    overview:
      "The Basset Hound has a typical life expectancy of 12 to 13 years. Because of its achondroplastic (short-limbed, long-backed) build, deep chest, loose skin, and long hanging ears, responsible breeding and care focus on preventing excessive conformational exaggeration alongside screening for inherited platelet, eye, neurological, and orthopaedic conditions.",

    commonConditions: [
      "Primary glaucoma (primary angle-closure glaucoma linked to an ADAMTS17 19-bp deletion, pectinate ligament abnormality, and primary open-angle glaucoma POAG3) — inherited eye conditions that raise intraocular pressure and can cause pain and vision loss",
      "Canine thrombopathia (CTP) — an autosomal recessive platelet aggregation disorder caused by a mutation in the RASGRP1 gene, leading to abnormal mucosal or surgical bleeding",
      "Lafora disease — an inherited late-onset myoclonic epilepsy for which a pre-breeding DNA test is available",
      "Elbow dysplasia and intervertebral disc disease (IVDD) — orthopaedic and spinal disc problems associated with short, heavy-boned chondrodystrophic limbs and a long back",
      "Gastric dilatation-volvulus (GDV / bloat) — acute, life-threatening stomach distension and twisting in deep-chested hounds",
      "Otitis externa, eyelid malformations (entropion or ectropion), and skin-fold dermatitis — ear-canal inflammation, inward- or outward-rolling eyelids, and moisture irritation in facial or body folds",
    ],

    preventiveCare: [
      "Select puppies from parents screened via DNA testing for thrombopathia (RASGRP1), primary glaucoma (ADAMTS17 and POAG3), and Lafora disease, as well as clinical eye exams (including gonioscopy) and elbow evaluations.",
      "Maintain a lean body weight and limit jumping off furniture or steep stairs to protect the spine and elbows.",
      "Clean and dry the hanging ears and skin folds regularly to prevent yeast and bacterial infections.",
      "Feed two measured meals daily and rest the dog before and after exercise to reduce bloat risk.",
      "Schedule routine veterinary wellness, dental, and ophthalmic check-ups.",
    ],

    recommendedScreenings: [
      "DNA test for Canine Thrombopathia (RASGRP1 mutation)",
      "DNA tests for Primary Glaucoma (ADAMTS17 and POAG3) and clinical eye examination with gonioscopy (PLA)",
      "DNA test for Lafora disease",
      "Radiographic elbow dysplasia evaluation",
      "Radiographic hip evaluation and cardiac examination (optional health registry screenings)",
    ],

    dentalCare:
      "Brush teeth several times a week with canine toothpaste and arrange periodic veterinary dental checks.",

    earCare:
      "Inspect and clean the long, velvety ears two to three times weekly with a veterinarian-approved ear cleanser, drying the ear canal entrance carefully.",

    skinCare:
      "Wipe and dry facial wrinkles, lip flews, and neck folds regularly so trapped moisture does not cause skin-fold irritation.",
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Families with children seeking a placid, affectionate, and patient companion",
      "Households with another dog or regular daytime company",
      "Owners who enjoy daily walks and scent-enrichment games rather than fast running",
      "Apartment or house dwellers prepared for routine ear, wrinkle, and drool care",
    ],

    notIdealFor: [
      "Runners or cyclists looking for a high-speed athletic partner",
      "Owners who dislike drool, shedding, or a deep, carrying hound bay",
      "Homes with many steep stairs where lifting a 18 to 30 kg dog is impractical",
      "Households where the dog would be left alone for long workdays",
    ],
  },

  funFacts: [
    "Although its ancestral roots lie in French bassets ('bas' meaning 'low'), the modern Basset Hound was developed in Great Britain in the late nineteenth century by breeders such as Sir Everett Millais, who crossed French imports like his foundation hound Model with Beagle and Bloodhound lines.",
    "Queen Alexandra was an enthusiastic early patron of the breed after the British Basset Hound Club was founded in 1884, keeping a pack of Basset Hounds at the royal kennels at Sandringham.",
    "The breed's long, velvety ears and supple facial skin are functional hunting tools: as the dog moves nose-down through brush, the ears help sweep and hold ground scent around the nostrils.",
    "Its large, heavily padded paws are built to bear weight evenly across all toes, leaving the footprint of a large hound with no unpadded skin touching the ground.",
    "With its soulful expression and booming voice, the Basset Hound became a global pop-culture favourite, inspiring Hush Puppies shoes, the cartoon character Droopy, and Lieutenant Columbo's dog.",
  ],

  faq: [
    {
      question: "Where did the Basset Hound originate?",
      answer:
        "While descending from older French low-set hounds from Artois and Normandy, the modern Basset Hound was developed in Great Britain during the late nineteenth century, where breeders such as Sir Everett Millais refined the breed with Bloodhound and Beagle lines.",
    },
    {
      question: "How tall and heavy is an adult Basset Hound?",
      answer:
        "Adults stand 33 to 38 cm at the withers and typically weigh 18 to 30 kg, carrying remarkable bone and substance on short legs.",
    },
    {
      question: "What is the typical lifespan of a Basset Hound?",
      answer:
        "The Basset Hound typically lives 12 to 13 years when kept at a healthy weight with regular veterinary care.",
    },
    {
      question: "What coat colours are accepted in the Basset Hound?",
      answer:
        "The most common colours are black, white, and tan (tricolour) and lemon and white (bicolour), including red-and-white or tan-and-white shades, though any recognised hound colour is acceptable.",
    },
    {
      question: "Can a Basset Hound live in an apartment?",
      answer:
        "Yes. Because it is calm and low-key indoors, it adapts well to apartments or smaller homes provided it receives daily walks, has company to prevent lonely baying, and does not have to climb steep flights of stairs.",
    },
    {
      question: "Why do Basset Hounds need regular ear and wrinkle care?",
      answer:
        "Their long, heavy ears limit airflow into the ear canal, and their supple facial and neck folds can trap moisture and food; cleaning and drying both areas several times a week prevents yeast and bacterial infections.",
    },
    {
      question: "What genetic and health tests are recommended for Basset Hounds?",
      answer:
        "Responsible breeders screen for canine thrombopathia (RASGRP1 DNA test), primary glaucoma (ADAMTS17 and POAG3 DNA tests plus clinical eye examination and gonioscopy), Lafora disease (DNA test), and elbow and hip dysplasia.",
    },
  ],

  references: [
    "fci-basset-hound-official-standard",
    "fci-basset-hound-nomenclature",
    "the-kennel-club-basset-hound-breed-standard",
    "akc-basset-hound-breed-standard",
    "akc-basset-hound-breed-profile",
    "basset-hound-club-of-america-health",
    "ofa-basset-hound-chic-requirements",
    "basset-hound-thrombopathia-rasgrp1-study-2006",
    "basset-hound-glaucoma-adamts17-study-2015",
    "wikimedia-basset-hound-lilly-m",
    "wikimedia-basset-hound-pleple2000",
    "the-dog-api",
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Official breed standards and kennel-club records do not establish a breed-specific scientific name; kept null per schema rules.",
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "Standard heading: BASSET HOUND",
        },
        {
          id: "fci-basset-hound-nomenclature",
          role: "verified",
          locator: "Official nomenclature: BASSET HOUND (163)",
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "verified",
          locator: "Basset, Hush Puppy Dog",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names (Basset)",
        },
      ],
      verifiedOn: "2026-11-17",
      note: "Verified across FCI Standard No. 163, FCI Nomenclature, AKC, and The Dog API.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 6 Scenthounds and related breeds, Section 1.3 Small-sized Hounds, with working trial",
        },
        {
          id: "fci-basset-hound-nomenclature",
          role: "verified",
          locator: "Group 6, Section 1.3 Small-sized Hounds, with working trial",
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "cited",
          locator: "Hound Group",
        },
        {
          id: "akc-basset-hound-breed-standard",
          role: "cited",
          locator: "Hound Group",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group (Hound)",
        },
      ],
      verifiedOn: "2026-11-17",
      note:
        "Follows the Group 6, Section 1.3 classification without naming registries in user-facing text.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "ORIGIN: Great Britain",
        },
        {
          id: "fci-basset-hound-nomenclature",
          role: "verified",
          locator: "Country of origin: Great Britain",
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "While of French origin, the Basset Hound was developed in England",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.origin (France)",
        },
      ],
      verifiedOn: "2026-11-17",
      note:
        "FCI Standard No. 163 and The Royal Kennel Club record Great Britain as the country of origin/development; The Dog API lists France (reflecting earlier ancestral French basset stock).",
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Official standards identify Great Britain as the country of origin without specifying a single sub-national region.",
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "Utilization, Brief historical summary, General appearance, Behaviour/temperament",
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "Breed standard and About this breed (1860s Artois/Normandy imports, 1870s Everett Millais and Model, Beagle/Bloodhound crosses, 1884 Basset Hound Club, Queen Alexandra)",
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "verified",
          locator: "About the Breed and History (1885 AKC recognition)",
        },
        {
          id: "fci-basset-hound-nomenclature",
          role: "verified",
          locator: "Date of acceptance on a definitive basis: 18.01.1955",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history",
        },
      ],
      verifiedOn: "2026-11-17",
      note:
        "All overview text is rewritten in 100% original wording from FCI Standard No. 163, The Royal Kennel Club, and AKC documentation.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "General appearance, Head, Neck, Body, Tail, Limbs, Gait, Skin, Coat, Colour, and Size",
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "General appearance, Head and skull, Eyes, Ears, Mouth, Neck, Forequarters, Body, Hindquarters, Feet, Tail, Gait, Coat, Colour, and Size",
        },
        {
          id: "akc-basset-hound-breed-standard",
          role: "verified",
          locator: "General Appearance, Head, Neck and Shoulders, Forelegs, Body, Hindquarters, Feet, Tail, Coat, Color",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "GET /breeds/{id}/colours (lists 19 generic species-wide colours including merle, brindle, blue)",
        },
      ],
      verifiedOn: "2026-11-17",
      note:
        "Conformation, moderate supple skin without exaggeration, smooth short coat, and permissible hound colours follow FCI Standard No. 163 and The Royal Kennel Club rather than The Dog API's generic colour list.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "SIZE: Height at the withers: 33 - 38 cm",
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "Size: Height: 33-38 cms (13-15 ins) at withers",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.height.metric (33–38 cm)",
        },
        {
          id: "akc-basset-hound-breed-standard",
          role: "cited",
          locator: "Size: Height should not exceed 14 inches; over 15 inches at the highest point of the shoulder is a disqualification",
        },
      ],
      verifiedOn: "2026-11-17",
      note:
        "Preserved in centimetres (33 to 38 cm for both sexes) as published first by FCI Standard No. 163 and The Royal Kennel Club, matching The Dog API.",
    },

    "physical.height.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "SIZE: Height at the withers: 33 - 38 cm",
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "Height: 33-38 cms at withers",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.height.metric (38 cm)",
        },
      ],
      verifiedOn: "2026-11-17",
      note: "Upper male height bound of 38 cm.",
    },

    "physical.height.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "SIZE: Height at the withers: 33 - 38 cm",
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "Height: 33-38 cms at withers",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.height.metric (38 cm)",
        },
      ],
      verifiedOn: "2026-11-17",
      note: "Upper female height bound of 38 cm.",
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (18–30 kg)",
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "cited",
          locator: "Weight: 40-65 pounds",
        },
      ],
      verifiedOn: "2026-11-17",
      note:
        "FCI Standard No. 163 and The Royal Kennel Club breed standard do not state a numerical weight range; retains the 18–30 kg range from The Dog API (corresponding to the AKC breed profile's 40–65 lb range).",
    },

    "physical.weight.male.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (30 kg)",
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "cited",
          locator: "Weight: 40-65 pounds",
        },
      ],
      verifiedOn: "2026-11-17",
      note: "Upper male weight bound of 30 kg.",
    },

    "physical.weight.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (30 kg; did not separate males and females)",
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "cited",
          locator: "Weight: 40-65 pounds",
        },
      ],
      verifiedOn: "2026-11-17",
      note: "Upper female weight bound of 30 kg.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-basset-hound-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12-13 years",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span (12–13 years)",
        },
      ],
      verifiedOn: "2026-11-17",
      note:
        "Updated to 12–13 years, matching both the AKC breed profile and The Dog API.",
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-basset-hound-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (2/5 to 3/5)",
        },
      ],
      verifiedOn: "2026-11-17",
      note: null,
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-basset-hound-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (4/5)",
        },
        {
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "Lips: The flews of the upper lip overlap the lower substantially",
        },
      ],
      verifiedOn: "2026-11-17",
      note: "Overlapping upper flews result in heavy drooling.",
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "Characteristics and Behaviour / Temperament: tenacious hound of ancient lineage, pack instinct, deep melodious voice; placid, never aggressive or timid; affectionate",
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "Characteristics and Temperament: tenacious, pack instinct, deep melodious voice, placid, affectionate",
        },
        {
          id: "akc-basset-hound-breed-standard",
          role: "verified",
          locator: "Temperament: mild, never sharp or timid, capable of great endurance in the field and extremein devotion",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament (Friendly, calm, gentle, loyal, independent, devoted)",
        },
      ],
      verifiedOn: "2026-11-17",
      note: null,
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-basset-hound-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics ratings",
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "cited",
          locator: "Characteristics and Temperament",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 scores informed by documented breed temperament and low-key indoor energy.",
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "cited",
          locator: "Breeds A to Z care and exercise overview",
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition guidance",
        },
        {
          id: "basset-hound-club-of-america-health",
          role: "cited",
          locator: "Health, back/joint protection, and ear care",
        },
      ],
      verifiedOn: null,
      note:
        "Combines moderate walking and scentwork with ear, skin-fold, and spinal care.",
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "Breeds A to Z: Exercise: Up to 1 hour per day",
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "verified",
          locator: "Energy Level: Calm; daily moderate walk needed",
        },
      ],
      verifiedOn: "2026-11-17",
      note: null,
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "cited",
          locator: "Exercise: Up to 1 hour per day",
        },
      ],
      verifiedOn: null,
      note:
        "Estimated 45 to 60 minutes of daily walking and nosework.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "Breeds A to Z: Size of home: Flat/Apartment suitable",
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "verified",
          locator: "Adaptability to apartment living",
        },
      ],
      verifiedOn: "2026-11-17",
      note: null,
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "Breeds A to Z: Small garden suitable",
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "verified",
          locator: "Fenced yard and leash recommendations",
        },
      ],
      verifiedOn: "2026-11-17",
      note: null,
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "Coat: smooth, short and close",
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "verified",
          locator: "Short coat and heavy build care in warm and cool weather",
        },
      ],
      verifiedOn: "2026-11-17",
      note: null,
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "cited",
          locator: "Characteristics: possessing a pack instinct and a deep melodious voice",
        },
      ],
      verifiedOn: null,
      note:
        "Pack-oriented scenthounds prefer companionship and can vocalise when left isolated for long periods.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-basset-hound-breed-profile",
          role: "cited",
          locator: "Nutrition: portion control, obesity prevention, and bloat precautions",
        },
        {
          id: "basset-hound-club-of-america-health",
          role: "cited",
          locator: "Weight management and GDV precautions",
        },
      ],
      verifiedOn: null,
      note:
        "General nutritional guidance for a heavy-boned, deep-chested dwarf hound.",
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "basset-hound-thrombopathia-rasgrp1-study-2006",
          role: "verified",
          locator: "RASGRP1 gene mutation causing inherited Basset Hound thrombopathia (Boudreaux et al., 2006)",
        },
        {
          id: "basset-hound-glaucoma-adamts17-study-2015",
          role: "verified",
          locator: "ADAMTS17 19-bp deletion associated with primary angle-closure glaucoma in Basset Hounds (Oliver et al., 2015)",
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "Health standard: eye testing & gonioscopy (PLA), DNA tests for Lafora disease & POAG3, elbow dysplasia scheme, and Breed Watch conformational points",
        },
        {
          id: "ofa-basset-hound-chic-requirements",
          role: "verified",
          locator: "CHIC screening panel: Thrombopathia DNA test, Glaucoma DNA test/eye exam, optional elbows, hips, cardiac",
        },
      ],
      verifiedOn: "2026-11-17",
      note:
        "Synthesises peer-reviewed genetics studies and UK/US breed health screening schemes.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "basset-hound-thrombopathia-rasgrp1-study-2006",
          role: "verified",
          locator: "Canine thrombopathia (RASGRP1 mutation)",
        },
        {
          id: "basset-hound-glaucoma-adamts17-study-2015",
          role: "verified",
          locator: "Primary angle-closure glaucoma (ADAMTS17 mutation)",
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "Lafora disease, POAG3, PLA/gonioscopy, elbow dysplasia, and conformational skin/eye/ear points",
        },
        {
          id: "basset-hound-club-of-america-health",
          role: "verified",
          locator: "IVDD, GDV (bloat), thrombopathia, glaucoma, elbow dysplasia, and ear/skin-fold infections",
        },
      ],
      verifiedOn: "2026-11-17",
      note:
        "Distinguishes genetically characterised disorders (CTP, glaucoma, Lafora disease) from conformational and care risks (IVDD, elbow dysplasia, bloat, otitis, eyelid and skin-fold issues).",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "basset-hound-club-of-america-health",
          role: "cited",
          locator: "Preventive care, spine protection, weight control, and ear/fold hygiene",
        },
      ],
      verifiedOn: null,
      note: "Preventive care guidance for a short-legged, drop-eared hound.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-basset-hound-chic-requirements",
          role: "verified",
          locator: "Required: Thrombopathia DNA test, Primary Glaucoma DNA test or eye exam; Optional: elbow, hip, cardiac",
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "Eye testing and gonioscopy (PLA), DNA tests for Lafora's and POAG3, and elbow dysplasia testing",
        },
        {
          id: "basset-hound-club-of-america-health",
          role: "verified",
          locator: "Pre-breeding health screening recommendations",
        },
      ],
      verifiedOn: "2026-11-17",
      note:
        "Combines US and UK kennel-club/parent-club pre-breeding health testing schemes.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "cited",
          locator: "Jaws/Teeth: complete, regular scissor bite",
        },
      ],
      verifiedOn: null,
      note: "Standard canine dental hygiene guidance.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "cited",
          locator: "Ears: set low, long, narrow, supple and velvety, folding inward",
        },
      ],
      verifiedOn: null,
      note: "Ear hygiene guidance for long, low-set hanging ears.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "cited",
          locator: "Skin: supple and elastic without exaggeration",
        },
      ],
      verifiedOn: null,
      note: "Wrinkle and fold hygiene guidance.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "cited",
          locator: "Breeds A to Z lifestyle suitability",
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "cited",
          locator: "About the Breed and family/apartment ratings",
        },
      ],
      verifiedOn: null,
      note:
        "Editorial suitability evaluations based on placid indoor temperament, pack sociability, and physical weight.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "About this breed (Everett Millais, Model, 1884 Basset Hound Club, Queen Alexandra at Sandringham, scent-retaining ears) and Feet (imprint of a large hound)",
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "verified",
          locator: "History and cultural icons (Hush Puppies, Columbo's dog, Droopy)",
        },
      ],
      verifiedOn: "2026-11-17",
      note: "Verified against The Royal Kennel Club and AKC historical notes.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-basset-hound-official-standard",
          role: "verified",
          locator: "Origin (Great Britain), size (33–38 cm), coat, and colours",
        },
        {
          id: "the-kennel-club-basset-hound-breed-standard",
          role: "verified",
          locator: "History, apartment suitability, and health testing schemes",
        },
        {
          id: "akc-basset-hound-breed-profile",
          role: "verified",
          locator: "Lifespan (12–13 years) and care",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric (18–30 kg) and breed.life_span (12–13 years)",
        },
      ],
      verifiedOn: "2026-11-17",
      note:
        "FAQ answers synthesise verified FCI, Royal Kennel Club, AKC, and The Dog API data without naming registries in user-facing text.",
    },
  },

  updatedOn: "2026-11-17",
};
