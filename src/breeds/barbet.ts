import type { Breed } from "../schema/breed.types";

export const barbet: Breed = {
  slug: "barbet",
  name: "Barbet",
  scientificName: null,

  alternateNames: [
    "French Water Dog",
    "Barbet Français",
    "Französischer Wasserhund",
    "Perro de Agua Francés"
  ],

  group: "Retrievers, Flushing Dogs, and Water Dogs",

  origin: {
    country: "France",
    region:
      "Mainland France, historically associated with marshes, ponds, rivers, and coastal wetlands"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Barbet_suka_2009_pl.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Barbet_suka_2009_pl.jpg",
      title: "Barbet suka 2009 pl.jpg",
      description:
        "A female Barbet photographed at the 2009 international dog show in Katowice, Poland.",
      creator: "Pleple2000",
      uploader: "Pleple2000",
      capturedOn: "2009-03-21",
      uploadedOn: "2009-03-26",
      width: 2896,
      height: 2092,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Pleple2000, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Barbet_suka_2009_pl.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-19"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Barbet-brown.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Barbet-brown.jpg",
      title: "Barbet-brown.jpg",
      description:
        "A brown Barbet showing its thick curly fleece and bearded muzzle.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2022-12-03",
      uploadedOn: "2022-12-08",
      width: 2779,
      height: 2588,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Barbet-brown.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-19"
    }
  ],

  overview: {
    summary:
      "A rustic, medium-sized French water dog recognized for its dense woolly curls, bearded chin, webbed paws, and cheerful, people-oriented nature.",

    description:
      "The Barbet is a sturdy, medium-sized water retriever with a slightly rectangular silhouette, solid bone, and an unpretentious working outline. A thick, woolly, curly coat covers the entire dog from its broad, rounded skull to its sweeping tail, insulating it against cold marshes and wet weather. Abundant hair on the lower jaw creates the signature chin beard—called 'barbe' in French—that inspired the breed's name, while hair falling over the bridge of the nose frames dark, expressive eyes. Broad, webbed paws and muscular hindquarters power confident swimming in lakes, streams, and muddy flats. Indoors, this breed settles calmly beside its family and forms close bonds, yet outdoors it remains an eager swimmer, curious explorer, and enthusiastic retriever.",

    history:
      "Written accounts and artwork from sixteenth-century France already depict this rustic waterfowl dog, including court records from the era of King Henry IV. Across subsequent centuries, hunters throughout France relied on the Barbet to work dense wetland cover, flush hidden birds, and fetch game from icy water; the breed also appears in Napoleonic-era accounts and is widely regarded as an ancestor of modern water and companion breeds such as the Poodle, Bichon types, and several European water spaniels. Numbers declined sharply after the Second World War, bringing the breed close to disappearance before dedicated French enthusiasts rebuilt the population during the late twentieth century using surviving lines and carefully planned outcrosses with related water dogs. Today, the Barbet remains uncommon worldwide and is carefully managed to protect genetic diversity while preserving its friendly temperament and wetland retrieving instincts.",

    originalPurpose:
      "Locating, flushing, and retrieving wildfowl from cold marshes, ponds, rivers, and coastal wetlands.",

    currentRoles: [
      "Waterfowl flushing and retrieving hunting partner",
      "Active family companion",
      "Canine sports participant in agility, rally, dock diving, and lure coursing",
      "Search-and-rescue and scent-work dog",
      "Therapy and visiting companion dog"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 58,
        max: 65
      },
      female: {
        min: 53,
        max: 61
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 17,
        max: 28
      },
      female: {
        min: 17,
        max: 28
      }
    },

    lifespanYears: {
      min: 12,
      max: 14
    },

    coatType:
      "Long, thick, woolly, and curly coat that naturally covers the whole body and can form cords or strands, with a pronounced beard on the chin and moustache over the muzzle.",

    coatLength: "Long",

    coatColors: [
      "Black",
      "Grey",
      "Brown",
      "Fawn (all shades)",
      "Sand (all shades)",
      "White",
      "Pied (white with black, grey, brown, fawn, or sand patches)"
    ],

    sheddingLevel:
      "Low; loose hairs tend to remain trapped inside the curls rather than dropping freely, so thorough brushing is needed to prevent matting",

    droolingLevel:
      "Low; tight lips keep drooling minimal, though the long beard holds water after drinking",

    distinctiveFeatures: [
      "Slightly rectangular, solidly built medium frame with strong bone",
      "Height at the withers of 58 to 65 cm in males and 53 to 61 cm in females, with a tolerance of plus or minus 1 cm",
      "Typical adult body weight of 17 to 28 kg",
      "Dense, woolly, curly coat covering the entire body, head, ears, and tail naturally",
      "Prominent chin beard and full moustache framing the muzzle",
      "Broad, rounded skull with a clearly defined stop and a sturdy, square muzzle slightly shorter than the skull",
      "Round, dark brown eyes partially shaded by long hair falling over the bridge of the nose",
      "Low-set, long, flat drop ears covered in thick curly hair",
      "Complete scissor bite with strong jaws",
      "Low-set, sweeping tail that curves gently upward at the tip when the dog is in motion",
      "Round, broad, hair-covered feet with webbed toes suited for swimming",
      "Relatively thick skin offering added protection in cold water and dense marsh brush"
    ]
  },

  temperament: {
    traits: [
      "Friendly, cheerful, and deeply attached to its household",
      "Intelligent, quick to learn, and responsive to upbeat training",
      "Loyal and sociable with family members, guests, and other dogs",
      "Playful and athletic outdoors, especially around water and mud",
      "Even-tempered and calm indoors once daily exercise needs are met",
      "Occasionally mischievous or mildly headstrong in youth without steady guidance"
    ],

    scores: {
      affection: 5,
      withChildren: 5,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: 2,
      independence: 2,
      trainability: 4,
      barking: 3,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "Moderate to high; an athletic water retriever that needs steady daily movement and mental engagement to remain relaxed indoors",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Brisk daily walks and trail outings",
        "Swimming and water retrieving in safe lakes, ponds, or calm shores",
        "Off-leash running and fetch in securely fenced spaces",
        "Canine sports such as agility, rally, dock diving, and lure coursing",
        "Indoor enrichment including hide-and-seek, trick training, and scent puzzles"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Brush thoroughly and comb all the way down to the skin several times a week—and more often for longer coats—to clear trapped dead hair, burrs, and early tangles before they tighten into mats.",

      bathing:
        "Bathe every four to six weeks, or after muddy swims, following a complete pre-bath brush-out. If blow-drying straight before scissoring an even trim (often around 7 to 13 cm on the body while keeping the head, ears, and tail longer), wet the coat afterward and let it air-dry so the natural curls spring back.",

      notes: [
        "Wipe and dry the chin beard after meals and drinks to limit dampness and odor.",
        "Check low-set, heavily haired ears weekly and dry them carefully after every swim or bath to discourage wax buildup and infections.",
        "Trim strong, fast-growing nails regularly with clippers or a grinder to prevent splitting or overgrowth.",
        "Inspect paws and the dense coat after wetland or brush outings for grass awns, burrs, and ticks.",
        "Brush teeth routinely with canine toothpaste to support long-term oral health."
      ]
    },

    training: {
      difficulty:
        "Easy to moderate; smart, cooperative, and eager to engage, though playful youngsters benefit from calm consistency",

      tips: [
        "Use upbeat, reward-based sessions because this breed is sensitive to harsh corrections",
        "Begin gentle, consistent manners training early to guide playful and occasionally stubborn youngsters",
        "Keep practice varied with retrieving, scent games, or trick work to hold its attention",
        "Reinforce a dependable recall before allowing off-leash freedom near ponds, marshes, or waterfowl",
        "Channel its natural athleticism into structured sports like rally, agility, or dock diving"
      ],

      socialization:
        "Introduce puppies early and positively to diverse people, calm dogs, everyday noises, urban environments, and safe water settings so they grow into confident, polite adults in both rural and city life."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cold and wet climates, where the thick woolly coat insulates effectively",
        "Warm climates, provided shade, fresh water, swimming access, and shorter coat upkeep are maintained"
      ],

      aloneTimeTolerance:
        "Low; bonds closely with its family and dislikes being left alone for long routine stretches."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced dog food formulated for an active medium-sized dog and matched to its life stage (puppy, adult, or senior).",

    feedingFrequency: {
      puppy: "Three to four small measured meals per day until six months of age",
      adult: "Two measured meals per day",
      senior: "Two measured meals per day with calories adjusted for lower activity"
    },

    guidelines:
      "Serve measured portions tailored to body condition rather than free-feeding, checking the ribs and waist beneath the thick curly coat regularly. Keep clean, fresh drinking water available at all times.",

    considerations: [
      "Keep training treats within roughly 10 percent of daily calories to prevent gradual weight gain.",
      "Many Barbets are modest rather than voracious eaters; maintain steady meal routines and consult a veterinarian if appetite changes abruptly.",
      "Veterinary-approved skin-support or omega-3 oil supplementation may help coat and skin comfort during drier months.",
      "Introduce any diet change gradually over five to seven days to avoid digestive upset.",
      "Ensure extra hydration after swimming or warm-weather exercise."
    ],

    note:
      "Daily calorie needs depend on age, metabolism, swimming frequency, and exercise load; consult a veterinarian before making home-prepared diets or adding supplements."
  },

  health: {
    overview:
      "The Barbet is generally regarded as a sturdy, long-lived sporting dog, typically living 12 to 14 years. Because the modern population was rebuilt from a very small founder base—a peer-reviewed French pedigree study of the 1997–2001 birth cohort recorded an average inbreeding coefficient of 12.4 percent and just 6.7 effective ancestors—careful mate selection and genetic diversity management remain central to breed health. Well-documented inherited concerns that breeders actively screen for include hip dysplasia, elbow dysplasia, and ocular diseases such as progressive rod-cone degeneration (prcd-PRA), where genetic testing in 2017 identified roughly 40 percent carriers among tested dogs. Other issues reported in the breed, though less systematically quantified, include epilepsy, allergies, immune-mediated conditions, and recurring ear infections linked to hairy drop ears and frequent water work.",

    commonConditions: [
      "Hip dysplasia — a well-documented developmental hip-joint condition that can cause laxity, discomfort, and arthritis; breeders screen breeding dogs radiographically and owners help by keeping dogs lean.",
      "Progressive retinal atrophy (prcd-PRA) — an inherited, progressive retinal degeneration that impairs night vision and can cause blindness; DNA testing in 2017 found roughly 40 percent carriers among tested Barbets, making pre-breeding genetic screening essential.",
      "Elbow dysplasia — abnormal elbow-joint development seen less often than hip dysplasia in the breed but still a recognized orthopedic concern managed through radiographic screening and weight control.",
      "Otitis externa (ear infections) — low-set, heavily haired drop ears combined with frequent swimming can trap moisture and wax, requiring routine checks and careful drying after water sessions.",
      "Epilepsy and seizure disorders (reported) — seizures have been noted in some lines, though breed-wide incidence rates are not fully established in peer-reviewed studies; affected dogs need prompt veterinary care and should not be bred.",
      "Allergies and immune-mediated conditions (reported) — environmental or food allergies, occasional immune-system issues, and tick-borne illnesses in dogs working wetlands have been reported by breed health stewards."
    ],

    preventiveCare: [
      "Choose puppies from breeders who prioritize low inbreeding and publish pre-breeding orthopedic, eye, and DNA test results",
      "Inspect and gently dry the ear canals after every swim or bath",
      "Brush and comb the curly coat down to the skin routinely to catch burrs, ticks, and early mats",
      "Maintain year-round tick, flea, and heartworm prevention, particularly for dogs exploring marshes and tall grass",
      "Schedule annual veterinary wellness exams, shifting to twice-yearly checkups in senior years"
    ],

    recommendedScreenings: [
      "Radiographic hip evaluation before breeding",
      "Radiographic elbow evaluation before breeding",
      "DNA test for prcd-PRA (progressive rod-cone degeneration)",
      "Board-certified veterinary ophthalmologist eye examination starting at 12 months of age and repeated periodically",
      "Optional supplemental screening in some breeding programs includes cardiac, thyroid, patella/knee, and D-locus coat-dilution testing"
    ],

    dentalCare:
      "Brush teeth several times per week—ideally daily—using canine enzymatic toothpaste, and pair home care with veterinary dental checks to prevent tartar buildup and gum inflammation.",

    earCare:
      "Check the low-set, heavily haired drop ears weekly and after every swim for redness, odor, or wax buildup. Dry the outer ear and canal opening carefully after water exposure, and ask a veterinarian or experienced groomer before plucking ear hair so you do not irritate sensitive skin.",

    skinCare:
      "Part the curls regularly to inspect the skin underneath for moisture, redness, grass awns, or ticks, especially after wetland outings. Keeping the fleece mat-free allows air to reach the skin and prevents hidden hot spots."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Active individuals and families who enjoy daily walks, hiking, and swimming",
      "Households where someone is home most of the day to provide companionship",
      "Owners willing to commit to regular brushing, combing, and periodic trimming",
      "People interested in waterfowl retrieving, rally, agility, or dock diving",
      "First-time dog owners who are ready for steady coat upkeep and daily exercise"
    ],

    notIdealFor: [
      "Households that leave a dog alone for long workdays on a routine basis",
      "Owners seeking a wash-and-wear coat with minimal grooming effort",
      "Sedentary homes unable to provide at least an hour of daily outdoor activity",
      "People bothered by wet beards, muddy paws, or a dog eager to splash in puddles"
    ]
  },

  funFacts: [
    "The name Barbet comes from the French word 'barbe,' meaning beard, referring to the thick tuft of hair on its chin.",
    "Its enthusiasm for splashing through bogs inspired the classic French saying 'être crotté comme un barbet,' meaning to be thoroughly covered in mud.",
    "Broad, webbed paws act like built-in paddles, helping the dog power smoothly through cold lakes and marshy terrain.",
    "Sixteenth-century French court chronicles mention Barbets alongside nobles during the era of King Henry IV.",
    "Historical naturalists and cynologists link the Barbet to the ancestry of several well-known curly and water breeds, including the Poodle, Bichon types, and European water spaniels."
  ],

  faq: [
    {
      question: "Does a Barbet shed heavily?",
      answer:
        "No. Like other curly-coated water dogs, the Barbet sheds very little loose hair around the house because dead hair stays caught inside the curls. However, that trapped hair mats quickly unless you brush and comb down to the skin several times a week. No dog breed is completely allergy-free, so allergy-sensitive people should spend time with adult Barbets before committing."
    },
    {
      question: "How is a Barbet different from a Standard Poodle?",
      answer:
        "Although the two breeds share ancient water-dog roots, the Barbet is typically sturdier and heavier-boned with a slightly rectangular outline, a rounder skull, and a rustic, natural curly coat rather than sculpted clips. Its temperament is often described as calm, laid-back indoors, and less high-strung while still athletic outdoors."
    },
    {
      question: "How much exercise does a Barbet need each day?",
      answer:
        "Most adult Barbets thrive on 60 to 90 minutes of daily activity. A mix of brisk walks, off-leash play in safe areas, retrieving games, swimming, and brain work such as scent or trick training keeps them relaxed at home."
    },
    {
      question: "Can a Barbet live comfortably in an apartment?",
      answer:
        "Yes, provided its daily exercise and companionship needs are met. A Barbet is quiet and settled indoors once exercised, but quick sidewalk breaks are not enough—it needs real daily outings in parks, trails, or water and dislikes being left alone for long stretches."
    },
    {
      question: "What health tests should Barbet breeders perform?",
      answer:
        "Responsible breeders screen breeding dogs with radiographic hip and elbow evaluations, a DNA test for progressive rod-cone degeneration (prcd-PRA), and periodic eye exams by a veterinary ophthalmologist starting at 12 months of age, while also paying close attention to low inbreeding levels."
    }
  ],

  references: [
    "fci-barbet-official-standard",
    "fci-barbet-nomenclature",
    "scc-barbet-breed-standard",
    "club-du-barbet-profile",
    "akc-barbet-breed-standard",
    "akc-barbet-breed-profile",
    "the-kennel-club-barbet-breed-standard",
    "ukc-barbet-breed-standard",
    "ofa-barbet-chic-requirements",
    "bca-barbet-health-statement",
    "bca-barbet-chic-requirements",
    "leroy-2006-french-breeds-genetic-variability",
    "the-dog-api",
    "wikimedia-barbet-1-pleple2000",
    "wikimedia-barbet-688-tomasz-sienicki"
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Left null because official breed standards do not publish a formal taxonomic scientific name."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-barbet-official-standard",
          role: "verified",
          locator: "Standard heading: BARBET (French Water Dog)"
        },
        {
          id: "fci-barbet-nomenclature",
          role: "verified",
          locator:
            "Multilingual names: BARBET (FR), FRENCH WATER DOG (EN), FRANZÖSISCHER WASSERHUND (DE), PERRO DE AGUA FRANCÉS (ES)"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "alternateNames: French Water Dog"
        }
      ],
      verifiedOn: "2026-11-19",
      note:
        "Verified against FCI Standard No. 105, FCI Nomenclature, and The Dog API."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-barbet-official-standard",
          role: "verified",
          locator:
            "FCI Classification: Group 8 Retrievers, Flushing Dogs, Water Dogs; Section 3 Water Dogs (with working trial)"
        },
        {
          id: "fci-barbet-nomenclature",
          role: "verified",
          locator: "Group 8, Section 3 Water Dogs, subject to working trial"
        },
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator: "Sporting Group (recognized 2020)"
        },
        {
          id: "the-kennel-club-barbet-breed-standard",
          role: "verified",
          locator: "Gundog Group (Imported Breed Register)"
        },
        {
          id: "ukc-barbet-breed-standard",
          role: "verified",
          locator: "Gun Dog Group"
        }
      ],
      verifiedOn: "2026-11-19",
      note:
        "User-facing group label avoids registry acronyms and group numbers per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-barbet-official-standard",
          role: "verified",
          locator: "ORIGIN: France; BRIEF HISTORICAL SUMMARY"
        },
        {
          id: "fci-barbet-nomenclature",
          role: "verified",
          locator: "Country of origin: France"
        },
        {
          id: "scc-barbet-breed-standard",
          role: "verified",
          locator: "Historique et origine française"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "origin.country: France"
        }
      ],
      verifiedOn: "2026-11-19",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-barbet-official-standard",
          role: "verified",
          locator:
            "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE"
        },
        {
          id: "scc-barbet-breed-standard",
          role: "verified",
          locator:
            "Description générale, historique (Agrippa d'Aubigné / Henri IV, Grande Armée, reconstruction après-guerre)"
        },
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator: "About the Breed, History, Exercise, Training"
        },
        {
          id: "the-kennel-club-barbet-breed-standard",
          role: "verified",
          locator: "About this breed (origins, resurgence, search and rescue)"
        }
      ],
      verifiedOn: "2026-11-19",
      note:
        "Rewritten in original prose combining FCI Standard No. 105, SCC, AKC, and Royal Kennel Club records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-barbet-official-standard",
          role: "verified",
          locator:
            "GENERAL APPEARANCE, HEAD, BODY, TAIL, LIMBS, SKIN, COAT, COLOUR, SIZE"
        },
        {
          id: "scc-barbet-breed-standard",
          role: "verified",
          locator:
            "Description générale: crâne rond et large, museau légèrement plus court, poil long laineux frisé, couleurs unicolores et panaché"
        },
        {
          id: "akc-barbet-breed-standard",
          role: "verified",
          locator: "General Appearance, Head, Coat, Color, Feet"
        },
        {
          id: "club-du-barbet-profile",
          role: "verified",
          locator: "Caractéristiques du Barbet"
        }
      ],
      verifiedOn: "2026-11-19",
      note:
        "Corrected skull description from 'flat' to 'rounded' per SCC/FCI ('crâne est rond et large') and added 'Sand' to coatColors per FCI Standard No. 105 ('sable')."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-barbet-official-standard",
          role: "verified",
          locator:
            "SIZE: Height at withers: Males 58 cm to 65 cm; Females 53 cm to 61 cm; tolerance +/- 1 cm"
        },
        {
          id: "scc-barbet-breed-standard",
          role: "verified",
          locator: "Taille: 53 à 65 cm selon sexe"
        },
        {
          id: "akc-barbet-breed-profile",
          role: "conflicting",
          locator: "Height: 19–24.5 inches (overall range in inches)"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator:
            "height (cm): male 53–65, female 51–61 (lower minimums than FCI Standard No. 105)"
        }
      ],
      verifiedOn: "2026-11-19",
      note:
        "FCI Standard No. 105 metric heights (58–65 cm males, 53–61 cm females, +/- 1 cm) take precedence over The Dog API (53–65 cm / 51–61 cm)."
    },

    "physical.height.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-barbet-official-standard",
          role: "verified",
          locator: "SIZE: Males 58 cm to 65 cm (+/- 1 cm)"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "height.male.max: 65 cm"
        }
      ],
      verifiedOn: "2026-11-19",
      note: null
    },

    "physical.height.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-barbet-official-standard",
          role: "verified",
          locator: "SIZE: Females 53 cm to 61 cm (+/- 1 cm)"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "height.female.max: 61 cm"
        }
      ],
      verifiedOn: "2026-11-19",
      note: null
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "weight (kg): male 17–28, female 17–28"
        },
        {
          id: "akc-barbet-breed-profile",
          role: "cited",
          locator: "Weight: 35–65 pounds (published in pounds)"
        },
        {
          id: "scc-barbet-breed-standard",
          role: "cited",
          locator: "Poids: NP (not specified in FCI Standard No. 105 or SCC)"
        }
      ],
      verifiedOn: "2026-11-19",
      note:
        "FCI Standard No. 105 does not publish numerical weight limits and SCC lists Poids: NP. Stored 17–28 kg from The Dog API (consistent with AKC's 35–65 lb range) rather than unverified sex-split figures."
    },

    "physical.weight.male.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "weight.male.max: 28 kg"
        },
        {
          id: "akc-barbet-breed-profile",
          role: "cited",
          locator: "Weight upper range: 65 pounds"
        }
      ],
      verifiedOn: "2026-11-19",
      note: null
    },

    "physical.weight.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-dog-api",
          role: "verified",
          locator: "weight.female.max: 28 kg"
        },
        {
          id: "akc-barbet-breed-profile",
          role: "cited",
          locator: "Weight range: 35–65 pounds"
        }
      ],
      verifiedOn: "2026-11-19",
      note: null
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12–14 years"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "lifespanYears: 12–14"
        },
        {
          id: "the-kennel-club-barbet-breed-standard",
          role: "cited",
          locator: "Lifespan: Over 10 years"
        }
      ],
      verifiedOn: "2026-11-19",
      note: null
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level; Did You Know (non-shedding)"
        },
        {
          id: "the-kennel-club-barbet-breed-standard",
          role: "verified",
          locator: "Breed characteristics: Sheds: No"
        }
      ],
      verifiedOn: "2026-11-19",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (low)"
        }
      ],
      verifiedOn: "2026-11-19",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator: "friendly / bright / sweet-natured; calm, social, loyal"
        },
        {
          id: "scc-barbet-breed-standard",
          role: "verified",
          locator: "Comportement: affectueux, fidèle, sociable, joyeux"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator:
            "temperament.traits: Friendly, intelligent, loyal, playful, athletic, devoted"
        }
      ],
      verifiedOn: "2026-11-19",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics"
        },
        {
          id: "scc-barbet-breed-standard",
          role: "cited",
          locator: "Comportement et vie en ville"
        }
      ],
      verifiedOn: null,
      note: "Editorial 1–5 ratings synthesized from kennel club descriptions."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, Nutrition"
        },
        {
          id: "the-kennel-club-barbet-breed-standard",
          role: "cited",
          locator: "Breed characteristics: Grooming, Exercise, Home/Garden"
        },
        {
          id: "scc-barbet-breed-standard",
          role: "cited",
          locator: "Comportement et Vivre en ville"
        }
      ],
      verifiedOn: null,
      note:
        "Updated grooming guidance to reflect AKC's note that blow-drying before scissoring and re-wetting to air-dry restores curls, replacing the draft's unverified 'never blow dry' rule."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator: "Exercise: agile athlete, swimming, walks, play"
        },
        {
          id: "fci-barbet-official-standard",
          role: "verified",
          locator: "UTILIZATION: water dog for hunting wildfowl in all weather"
        }
      ],
      verifiedOn: "2026-11-19",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "the-kennel-club-barbet-breed-standard",
          role: "cited",
          locator: "Exercise: Up to 1 hour per day"
        },
        {
          id: "akc-barbet-breed-profile",
          role: "cited",
          locator: "Exercise: daily walks, swimming, active play"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial estimate of 60–90 minutes/day reflecting an active water retriever."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-barbet-breed-standard",
          role: "verified",
          locator:
            "Vivre en ville: adaptable to city/apartment life if given substantial daily off-leash walks and parks"
        }
      ],
      verifiedOn: "2026-11-19",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator: "Exercise: playtime in a fenced backyard"
        },
        {
          id: "the-kennel-club-barbet-breed-standard",
          role: "verified",
          locator: "Size of garden: Small/medium garden; Town or country: Country"
        }
      ],
      verifiedOn: "2026-11-19",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-barbet-official-standard",
          role: "verified",
          locator:
            "GENERAL APPEARANCE & UTILIZATION: thick woolly coat protecting against cold and damp; very resistant to cold"
        }
      ],
      verifiedOn: "2026-11-19",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator: "Exercise: prefers not to spend too many hours alone"
        },
        {
          id: "scc-barbet-breed-standard",
          role: "verified",
          locator: "Comportement: ne supportera pas longtemps d'être laissé seul"
        }
      ],
      verifiedOn: "2026-11-19",
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "cited",
          locator:
            "Nutrition: high-quality age-appropriate food, typically not voracious eaters, oil supplementation in dry months"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "cited",
          locator: "Age-appropriate diet guidance"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage meal schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "bca-barbet-health-statement",
          role: "verified",
          locator:
            "BCA Health Statement: hip dysplasia, eye conditions, elbow dysplasia, ~40% prcd-PRA carrier rate (summer 2017), epilepsy, immune system problems"
        },
        {
          id: "leroy-2006-french-breeds-genetic-variability",
          role: "verified",
          locator:
            "Pedigree analysis of 9 French breeds (1997–2001 cohort): Barbet effective number of ancestors = 6.7, average inbreeding coefficient = 12.4%"
        },
        {
          id: "the-kennel-club-barbet-breed-standard",
          role: "verified",
          locator:
            "Pre-breeding health screening: prioritising genetic diversity, prcd-PRA, hips, elbows, eyes"
        }
      ],
      verifiedOn: "2026-11-19",
      note:
        "Distinguishes peer-reviewed genetic diversity data and established screened conditions from reported concerns per Rule 8."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "bca-barbet-health-statement",
          role: "verified",
          locator:
            "Known conditions (hip dysplasia, eye conditions, prcd-PRA, elbow dysplasia) and reported issues (epilepsy, immune problems, tick-related illnesses)"
        },
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator:
            "Health & Grooming: hip/elbow dysplasia, PRA, seizure disorders, allergies, ear wax/debris infections"
        }
      ],
      verifiedOn: "2026-11-19",
      note: null
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "bca-barbet-health-statement",
          role: "cited",
          locator: "Pre-breeding testing and tick-related illness awareness"
        },
        {
          id: "akc-barbet-breed-profile",
          role: "cited",
          locator: "Grooming and routine ear/coat checks"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "bca-barbet-chic-requirements",
          role: "verified",
          locator:
            "CHIC required tests: OFA/PennHIP hips, OFA elbows, prcd-PRA DNA test, ACVO CAER eye exam (min age 12 months); optional cardiac, thyroid, knee, D-locus"
        },
        {
          id: "ofa-barbet-chic-requirements",
          role: "verified",
          locator: "OFA CHIC Barbet program requirements"
        },
        {
          id: "the-kennel-club-barbet-breed-standard",
          role: "verified",
          locator:
            "Good/Best Practice schemes: genetic diversity, prcd-PRA DNA, BVA/RKC hip & elbow, BVA/RKC/ISDS eye"
        }
      ],
      verifiedOn: "2026-11-19",
      note: null
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "cited",
          locator: "Grooming: Teeth should be brushed regularly"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "cited",
          locator:
            "Grooming: Ears should be checked regularly to avoid wax/debris buildup and infection"
        },
        {
          id: "fci-barbet-official-standard",
          role: "cited",
          locator: "Low-set, long, flat, heavily haired ears"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-barbet-official-standard",
          role: "cited",
          locator: "SKIN: Relatively thick; dense woolly curly coat"
        },
        {
          id: "akc-barbet-breed-profile",
          role: "cited",
          locator: "Grooming: brush-out and comb through to the skin"
        }
      ],
      verifiedOn: null,
      note: null
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "cited",
          locator: "Family life, exercise, grooming, and alone-time traits"
        },
        {
          id: "the-kennel-club-barbet-breed-standard",
          role: "cited",
          locator: "Breed characteristics"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability summary based on documented activity, companionship, and grooming demands."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator:
            "Did You Know: 'être crotté comme un Barbet', beard etymology, webbed paws, ancestry of Poodle/Bichon/water breeds"
        },
        {
          id: "scc-barbet-breed-standard",
          role: "verified",
          locator: "Historique: Agrippa d'Aubigné / Henri IV court record"
        },
        {
          id: "fci-barbet-official-standard",
          role: "verified",
          locator: "GENERAL APPEARANCE: beard (French barbe) etymology"
        }
      ],
      verifiedOn: "2026-11-19",
      note: null
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-barbet-official-standard",
          role: "verified",
          locator: "Coat, conformation, and working purpose"
        },
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator: "Grooming, shedding, exercise, and temperament"
        },
        {
          id: "scc-barbet-breed-standard",
          role: "verified",
          locator: "Vivre en ville et comportement"
        },
        {
          id: "bca-barbet-chic-requirements",
          role: "verified",
          locator: "Pre-breeding health screening panel"
        }
      ],
      verifiedOn: "2026-11-19",
      note: null
    }
  },

  updatedOn: "2026-11-19"
};