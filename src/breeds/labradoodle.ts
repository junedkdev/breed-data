import type { Breed } from "../schema/breed.types";

export const labradoodle: Breed = {
  slug: "labradoodle",
  name: "Labradoodle",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Australian Labradoodle",
    "Labrador-Poodle Cross"
  ],

  group:
    "Crossbreed / Developing companion and assistance dog (Labrador Retriever × Poodle cross; bred in Miniature, Medium, and Standard size varieties)",

  origin: {
    country: "Australia",
    region: null
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Labradoodle-Brown-Male-Side.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Labradoodle-Brown-Male-Side.jpg",
      title: "Labradoodle-Brown-Male-Side.jpg",
      description:
        "An adult brown male Labradoodle standing in profile outdoors, displaying its athletic compact build, wavy fleece-like coat, and pendant drop ears.",
      creator: "Anton Porsche",
      uploader: "Superanton",
      capturedOn: "2022-05-15",
      uploadedOn: "2022-05-16",
      width: 2571,
      height: 2111,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Anton Porsche (Superanton), Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Labradoodle-Brown-Male-Side.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-20"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Labradoodle.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Labradoodle.jpg",
      title: "Labradoodle.jpg",
      description:
        "A cream-coated Australian Labradoodle seated outdoors, showing its expressive facial furnishings, soft wavy fleece coat, and friendly expression.",
      creator: "Johlum",
      uploader: "Johlum",
      capturedOn: "2008-12-07",
      uploadedOn: "2011-02-20",
      width: 400,
      height: 375,
      licenseId: "cc0-1.0",
      attribution:
        "Photo by Johlum, Wikimedia Commons, CC0 1.0 Public Domain Dedication. Source: https://commons.wikimedia.org/wiki/File:Labradoodle.jpg. License: https://creativecommons.org/publicdomain/zero/1.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-20"
    }
  ],

  overview: {
    summary:
      "An outgoing, clever, and athletic crossbreed originating in Australia from the Labrador Retriever and Poodle, bred in three size tiers and widely kept as a joyful family companion, therapy dog, and assistance partner.",

    description:
      "The Labradoodle combines the sociable, water-loving enthusiasm of the Labrador Retriever with the sharp intelligence and lower-shedding coat traits of the Poodle. Well-structured multi-generational lines display a graceful, compact, medium-boned frame that is nearly square, paired with a moderately broad head, expressive dark or hazel eyes framed by soft eyebrows, and flat-lying pendant ears set slightly above eye level. Because Labradoodles range from first-generation crosses to multi-generational lineages, physical traits vary noticeably: adult dogs fall across Miniature, Medium, and Standard tiers, and coats span silky wavy fleece, dense spiralling wool, or straighter shedding hair. Energetic and buoyant when running free yet gentle and intuitive during quiet handling, the Labradoodle is deeply people-oriented, playful, and quick to learn—making it an engaging household partner for active owners prepared for consistent exercise and demanding coat upkeep.",

    history:
      "The Labradoodle began in Australia in 1989 when breeding manager Wally Conron crossed a Labrador Retriever with a Standard Poodle in response to a request from a visually impaired woman in Hawaii whose husband had severe dog allergies. One puppy from that first litter, named Sultan, proved tolerable for the household and worked successfully as a guide dog for a decade. When the remaining puppies drew little interest as unnamed mixed breeds, Conron coined the catchy portmanteau 'Labradoodle' to help place them, unintentionally igniting an explosive worldwide boom in Poodle crossbreeds. In Australia, subsequent multi-generational breeding programmes worked to stabilize coat texture and temperament by selectively breeding Labradoodle lines—sometimes incorporating additional breeds such as Cocker Spaniels and water spaniels—resulting in the multi-generational Australian Labradoodle, which genomic research shows carries a higher proportion of Poodle ancestry than first-generation crosses. Today, Labradoodles remain immensely popular globally as family companions, therapy dogs, and assistance animals.",

    originalPurpose:
      "Combining the gentle trainability of a guide-dog Labrador Retriever with the lower-shedding coat of a Poodle to assist visually impaired handlers living with dog allergies.",

    currentRoles: [
      "Affectionate family and household companion",
      "Therapy and emotional-support dog",
      "Guide and specialized assistance dog",
      "Active canine-sports partner (agility, obedience, dock diving, and rally)"
    ]
  },

  physical: {
    sizeCategory: "Small to large",

    height: {
      unit: "cm",
      male: {
        min: 35,
        max: 63
      },
      female: {
        min: 35,
        max: 63
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 7,
        max: 30
      },
      female: {
        min: 7,
        max: 30
      }
    },

    lifespanYears: null,

    coatType:
      "Single-layered coat that varies significantly by generation and lineage across three primary textures: wavy or softly curling silky fleece (low-shedding), dense spiralling lamb-like wool (very low-shedding), and straighter hair coats (moderate to heavy shedding, most common in first-generation crosses). Multi-generational lines are selectively bred for fleece or wool coats without a harsh undercoat.",

    coatLength: "Medium",

    coatColors: [
      "Chalk, cream, apricot, gold, and red",
      "Black, blue, and silver",
      "Caramel, caramel cream, caramel ice, and caramel red",
      "Chocolate, lavender, café, and parchment",
      "Patterns including parti, tuxedo, sable, phantom, tri-phantom, and roan (merle is generally discouraged or excluded from breeding due to genetic health risks)"
    ],

    sheddingLevel:
      "Variable (low to high); multi-generational wool and fleece coats shed very little and trap dead hair inside the coat, whereas early-generation hair coats shed moderately to heavily. No dog coat is guaranteed completely allergy-free.",

    droolingLevel:
      "Low; clean-cut, proportionate jaws without heavy pendulous flews keep drooling minimal, though long muzzle furnishings easily hold water after drinking",

    distinctiveFeatures: [
      "Bred across three recognized size tiers: Miniature (35 to 42 cm; 7 to 13 kg), Medium (43 to 52 cm; 13 to 20 kg), and Standard (53 to 63 cm; 21 to 30 kg), though first-generation crosses can exceed these boundaries",
      "Athletic, graceful, compact, medium-boned build with a deep, well-sprung chest and strong muscular loins",
      "Moderately broad, clean-cut head free of heavy cheeks, framed by well-defined eyebrows and soft facial furnishings",
      "Large, expressive, slightly rounded eyes in dark brown, honey, or hazel shades",
      "Medium-thickness pendant drop ears set slightly above eye level and lying flat against the head, never hanging below the lower lip line",
      "Complete scissor bite",
      "Coat texture varying across silky wavy fleece, dense curly wool, or shedding hair depending on inherited coat genes",
      "Full, medium-to-long tail following the topline at rest and carried gaily in motion without curling tightly onto the back",
      "Medium-sized, round feet with well-arched toes and thick, elastic pads supporting an effortless, light trotting gait"
    ]
  },

  temperament: {
    traits: [
      "Sociable, joyful, comical, and enthusiastically friendly toward family and visitors",
      "Highly intelligent, alert, and notably intuitive toward human emotions",
      "Energetic, athletic, and playful outdoors, often retaining exuberant puppy-like behaviour well into young adulthood",
      "Gentle, soft, and responsive when handled calmly",
      "Eager to please and generally easy to train, though individual temperament varies more in first-generation crosses",
      "Strong affinity for water and retrieving inherited from both parent lineages",
      "Poor guard dog due to its typically welcoming attitude toward strangers"
    ],

    scores: {
      affection: 5,
      withChildren: 5,
      withDogs: 4,
      withStrangers: 5,
      protectiveness: 1,
      independence: 2,
      trainability: 5,
      barking: 3,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; an energetic, water-loving sporting cross that requires vigorous daily physical exertion alongside mental enrichment to prevent restlessness and destructive chewing",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Brisk daily walks, trail hikes, or jogging (once skeletal growth is complete)",
        "Swimming and water retrieving in safe lakes or beaches",
        "Interactive fetch, scent-tracking games, and puzzle feeders",
        "Canine sports including agility, obedience, rally, and dock diving"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "For fleece and wool coats, brush and line-comb thoroughly down to the skin two to three times weekly—and daily during the puppy-to-adult coat transition—using a long-pin slicker brush and metal comb to prevent tight, painful matting. Straighter hair coats need weekly brushing to manage shedding.",

      bathing:
        "Bathe every four to six weeks with a gentle canine shampoo and conditioner; always comb out every tangle before bathing because water tightens existing mats.",

      notes: [
        "Wavy fleece and curly wool coats grow continuously and require professional trimming every six to eight weeks.",
        "Because Labradoodles have a scientifically documented elevated risk of outer ear infections, inspect and gently dry the drop ears weekly—and after every swim or bath—keeping excess moisture and debris out of the ear canal.",
        "Keep facial hair around the eyes and muzzle trimmed cleanly for clear vision and hygiene.",
        "Trim nails every two to three weeks and brush teeth several times weekly using canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Easy; clever, food-motivated, and eager to engage, making it well suited to positive training when energy is properly managed",

      tips: [
        "Use positive, reward-based training with high-value treats, toys, and lively praise; keep sessions varied so this bright dog stays mentally stimulated.",
        "Start polite greeting, impulse-control, and loose-leash exercises early to channel exuberant jumping and mouthy retrieving instincts.",
        "Provide sturdy chew toys and structured mental work during adolescence, when boredom quickly triggers chewing or hyperactivity.",
        "Practice gradual calm-settling and alone-time routines early to help prevent separation distress."
      ],

      socialization:
        "Early, positive exposure to varied people, calm dogs, grooming salons, ear-handling, and everyday urban sounds builds lifelong confidence and makes frequent brushing and trimming stress-free."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool climates, where denser fleece and wool coats provide good outdoor insulation",
        "Warm climates require keeping longer coats trimmed comfortably short, scheduling vigorous exercise for cooler morning or evening hours, and ensuring constant shade and cool drinking water"
      ],

      aloneTimeTolerance:
        "Low; deeply people-oriented and social, Labradoodles thrive on regular family interaction and can become anxious, vocal, or destructive if left isolated for long workdays."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food matched to the individual dog's adult size tier (small, medium, or large active formula).",

    feedingFrequency: {
      puppy:
        "Three measured meals daily until roughly six months of age, using a controlled-growth formula appropriate to expected adult size to support sound joint development.",
      adult:
        "Two measured meals daily to sustain steady energy and help lower stomach distension.",
      senior:
        "Two portion-controlled meals daily adapted for lower caloric requirements and joint health."
    },

    guidelines:
      "Weigh or measure every ration accurately using a scale or measuring cup and feel beneath the fluffy coat weekly to ensure ribs remain easily palpable without excess fat. Many Labradoodles inherit the Labrador's strong appetite and gain weight quickly if overfed. Divide daily rations into two meals, rest before and after eating (especially in deep-chested Standard-sized dogs), and provide cool, fresh water continuously.",

    considerations: [
      "Keep growing Medium and Standard puppies lean on a balanced, controlled-calcium growth diet to minimise mechanical stress on developing hips and elbows.",
      "Count all training treats inside the daily calorie allowance to prevent obesity.",
      "In large, deep-chested Standard Labradoodles, avoid vigorous running immediately before or after large meals as a precaution against acute gastric dilatation-volvulus (bloat).",
      "Transition gradually between diet formulas over five to seven days to prevent digestive upset."
    ],

    note:
      "Because adult Labradoodles span from 7 kg Miniatures to 30 kg Standards (or larger in some first-generation crosses), portion sizes and growth diets must be matched to the individual dog's size with a veterinarian."
  },

  health: {
    overview:
      "Large-scale veterinary research debunks the common myth that designer Poodle crossbreeds are substantially healthier than their parent breeds: a 2024 study of 9,402 dogs found no statistically significant difference in health odds between Labradoodles and their progenitor breeds across 86.6% of disorders examined. Labradoodles can inherit conditions from both Labrador Retriever and Poodle lines—including hip and elbow dysplasia, hereditary eye disorders, Exercise-Induced Collapse (EIC), and Addison's disease—and carry a significantly elevated veterinary-documented risk of outer ear infections (otitis externa). On the positive side, veterinary data shows lower odds of patellar luxation compared with purebred Poodles. No formal peer-reviewed actuarial lifespan range is established specifically for the Labradoodle.",

    commonConditions: [
      "Otitis externa (outer ear infections) — strongly documented in primary-care veterinary epidemiology, with Labradoodles showing nearly three times the odds (OR 2.95) compared with general crossbred dogs, linked to drop ears, coat hair in the canal, and water exposure",
      "Hip and elbow dysplasia — developmental joint laxity and malformation inherited from parent lines that can lead to osteoarthritis and lameness; requires pre-breeding radiographic screening",
      "Hereditary eye disorders — peer-reviewed ophthalmic screening studies have documented multifocal retinal dysplasia (MRD, 4.6% in an earlier UK survey; 0.2% in a 2026 Dutch screened cohort), iris-to-iris persistent pupillary membrane (4.7% in the 2026 screened cohort), distichiasis (2.5%), cataracts (0.5% to 3.7% across studies), and Progressive Retinal Atrophy (prcd-PRA, DNA-screenable)",
      "Exercise-Induced Collapse (EIC) — an inherited neuromuscular disorder from Labrador ancestry causing hind-limb weakness or collapse after intense exercise; preventable through pre-breeding DNA screening",
      "Hypoadrenocorticism (Addison's disease) — an immune-mediated adrenal hormone deficiency reported in Poodle and Australian Labradoodle lines, requiring lifelong veterinary hormone replacement if diagnosed",
      "Von Willebrand disease (vWD) and cardiac or thyroid disorders — inherited risks monitored in comprehensive parent-line screening programmes",
      "Gastric dilatation-volvulus (GDV / bloat) — a life-threatening stomach-twisting risk particularly relevant to larger, deep-chested Standard-sized Labradoodles"
    ],

    preventiveCare: [
      "Insist on documented pre-breeding health clearances for both parents: radiographic hip and elbow evaluations, recent board-certified veterinary ophthalmologist eye exams, and DNA clearances for prcd-PRA and Exercise-Induced Collapse (EIC).",
      "Inspect and dry the drop ears thoroughly after every bath or swimming session to reduce the breed's high risk of otitis externa.",
      "Maintain a lean, athletic body condition throughout life to protect hips and elbows and curb Labrador-like weight gain.",
      "Schedule annual veterinary wellness exams, keep vaccinations and year-round parasite prevention current, and discuss bloat precautions for Standard-sized dogs."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "Periodic ophthalmic examination by a board-certified veterinary ophthalmologist (recommended every 18 months for breeding stock)",
      "DNA test for Progressive Retinal Atrophy (prcd-PRA)",
      "DNA test for Exercise-Induced Collapse (EIC)",
      "Optional/comprehensive breeding-line evaluations for patellar luxation, cardiac health, thyroid function, and von Willebrand disease (vWD)"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste and schedule regular veterinary dental evaluations to keep teeth and gums healthy.",

    earCare:
      "Because Labradoodles carry a documented high predisposition to ear infections, inspect the drop ears weekly for odour, wax, moisture, or redness, keep the ear canals dry after swimming, and consult a veterinarian before plucking canal hair.",

    skinCare:
      "Part wavy fleece or curly wool coats down to the skin during brushing to check for tight mats, trapped moisture, grass seeds, ticks, or skin redness."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Active families and first-time owners willing to commit to daily energetic exercise and consistent positive training",
      "Households looking for an affectionate, playful, socially welcoming dog that thrives on close human company",
      "Apartment dwellers choosing a well-exercised Miniature or Medium size variety and ready for routine outdoor outings",
      "Owners prepared for the time and budget required for frequent brushing and professional coat grooming every six to eight weeks"
    ],

    notIdealFor: [
      "People assuming a Labradoodle is guaranteed hypoallergenic or automatically free of hereditary health issues",
      "Owners unwilling to brush a wavy or curly coat multiple times weekly or pay for regular professional grooming",
      "Households that leave a dog alone indoors or outdoors for long workdays without daily interaction",
      "Anyone seeking a naturally suspicious or protective guard dog"
    ]
  },

  funFacts: [
    "The very first Labradoodle litter was bred in Australia in 1989 by Wally Conron specifically to create a lower-shedding guide dog for a blind woman in Hawaii whose husband had dog allergies; one puppy, Sultan, worked as her guide dog for ten years.",
    "Wally Conron later expressed deep public regret over coining the catchy 'Labradoodle' name after it triggered an unregulated commercial craze for designer crossbreeds bred without health screening.",
    "A 2020 genomic study of 150,106 genetic markers found that multi-generational Australian Labradoodles carry substantially more Poodle ancestry than Labrador Retriever ancestry—driven largely by intense selection for Poodle-derived coat genes such as RSPO2 (furnishings), FGF5 (coat length), and KRT71 (curl).",
    "A major 2024 UK veterinary study comparing 9,402 dogs found no overall 'hybrid vigour' health advantage for Labradoodles over purebred Labradors or Poodles—health odds were statistically indistinguishable across 86.6% of disorders studied.",
    "Veterinary epidemiological data from UK primary-care clinics ranked the Labradoodle among the highest-risk dogs for outer ear infections (otitis externa), with nearly triple the odds of general crossbred dogs."
  ],

  faq: [
    {
      question: "What is a Labradoodle?",
      answer:
        "The Labradoodle is a popular crossbreed originating in Australia in 1989 from crossing a Labrador Retriever with a Poodle. Multi-generational Australian Labradoodle lines have also been selectively bred for more predictable fleece or wool coats across Miniature, Medium, and Standard sizes."
    },
    {
      question: "How tall and heavy is a Labradoodle?",
      answer:
        "Across its three established size tiers, height at the withers ranges from 35 to 63 cm and weight ranges from 7 to 30 kg: Miniature (35 to 42 cm; 7 to 13 kg), Medium (43 to 52 cm; 13 to 20 kg), and Standard (53 to 63 cm; 21 to 30 kg). First-generation crosses can vary even more widely."
    },
    {
      question: "Are Labradoodles hypoallergenic and non-shedding?",
      answer:
        "No dog is 100% allergy-free. Multi-generational Labradoodles with wool or wavy fleece coats shed very little and may be better tolerated by some allergy sufferers, whereas first-generation crosses can inherit a shedding hair coat."
    },
    {
      question: "Are Labradoodles healthier than purebred dogs?",
      answer:
        "Large-scale veterinary research shows Labradoodles have broadly similar overall health odds to Labrador Retrievers and Poodles rather than automatic hybrid vigour. Choosing parents with documented hip, elbow, eye, and DNA clearances is just as essential as with purebred dogs."
    },
    {
      question: "How long does a Labradoodle live?",
      answer:
        "No single formal breed-wide actuarial lifespan range is established specifically for the Labradoodle, as longevity varies substantially across Miniature, Medium, and Standard sizes and parent-line health."
    },
    {
      question: "How much grooming does a Labradoodle need?",
      answer:
        "Wavy fleece and curly wool coats require high maintenance: thorough brushing down to the skin two to three times a week to prevent painful mats, plus professional clipping every six to eight weeks and weekly ear checks."
    },
    {
      question: "Are Labradoodles good family dogs and good for first-time owners?",
      answer:
        "Yes, for active households. They are famously friendly, playful, gentle with respectful children, and eager to learn—provided owners commit to 60 to 90 minutes of daily activity and consistent coat care."
    },
    {
      question: "What are the main health concerns for a Labradoodle?",
      answer:
        "Key documented concerns include outer ear infections (otitis externa), hip and elbow dysplasia, hereditary eye conditions (such as multifocal retinal dysplasia, cataracts, and prcd-PRA), Exercise-Induced Collapse (EIC), and Addison's disease."
    }
  ],

  references: [
    "ala-australian-labradoodle-breed-standards",
    "wala-australian-labradoodle-standard",
    "alaa-labradoodle-coat-colors-guide",
    "alaa-labradoodle-health-testing-program",
    "plos-genetics-2020-australian-labradoodle-ali",
    "plos-one-2024-doodle-dilemma-bryson",
    "pubmed-2021-uk-otitis-externa-vetcompass",
    "pubmed-oliver-gould-2012-labradoodle-ophthalmic",
    "frontiers-vet-sci-2026-labradoodle-eye-screening-goossens",
    "wikimedia-labradoodle-brown-male-side-porsche",
    "wikimedia-labradoodle-johlum"
  ],

  evidence: {
    scientificName: {
      reliability: "unverified",
      sources: [],
      verifiedOn: null,
      note:
        "Canis lupus familiaris is used as the standard domestic-dog taxonomic label across the catalog."
    },

    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "plos-genetics-2020-australian-labradoodle-ali",
          role: "verified",
          locator: "Distinguishes Labradoodle (LBD) and multi-generational Australian Labradoodle (ALBD)"
        },
        {
          id: "ala-australian-labradoodle-breed-standards",
          role: "verified",
          locator: "Australian Labradoodle designation"
        }
      ],
      verifiedOn: "2026-11-20",
      note: "Verified across peer-reviewed genomic literature and Australian Labradoodle breed associations."
    },

    group: {
      reliability: "reliable_source",
      sources: [
        {
          id: "plos-one-2024-doodle-dilemma-bryson",
          role: "verified",
          locator: "Classifies Labradoodle as a designer crossbreed (Labrador Retriever × Poodle) with emerging breed associations"
        },
        {
          id: "ala-australian-labradoodle-breed-standards",
          role: "verified",
          locator: "Three size varieties: Miniature, Medium, and Standard"
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "Not recognized as an official purebred by FCI, AKC, or RKC; group wording avoids registry names per Rule 5."
    },

    origin: {
      reliability: "reliable_source",
      sources: [
        {
          id: "plos-genetics-2020-australian-labradoodle-ali",
          role: "verified",
          locator: "Introduction: Australian origin of the Labradoodle and multi-generational Australian Labradoodle"
        },
        {
          id: "ala-australian-labradoodle-breed-standards",
          role: "verified",
          locator: "Australian Labradoodle Association (Australia)"
        }
      ],
      verifiedOn: "2026-11-20",
      note: "Australia is verified as the country of origin across peer-reviewed publications and breed associations."
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No single regional sub-division is formally codified across primary association standards or peer-reviewed genetic studies (the initial 1989 guide-dog cross occurred in Victoria, Australia, while multi-generational development spread nationwide)."
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "plos-genetics-2020-australian-labradoodle-ali",
          role: "verified",
          locator: "Origin as low-shedding service dog cross, multi-generational Australian Labradoodle development, excess Poodle ancestry over F1 Labradoodle"
        },
        {
          id: "plos-one-2024-doodle-dilemma-bryson",
          role: "verified",
          locator: "Introduction: origin of portmanteau name 'Labradoodle' and rise as companion/assistance designer crossbreed"
        },
        {
          id: "ala-australian-labradoodle-breed-standards",
          role: "verified",
          locator: "General Appearance, Temperament, and Size categories"
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "Synthesized in original prose from peer-reviewed studies and Australian Labradoodle association documentation."
    },

    physical: {
      reliability: "reliable_source",
      sources: [
        {
          id: "ala-australian-labradoodle-breed-standards",
          role: "verified",
          locator: "General Appearance, Size, Head, Body, Forequarters, Hindquarters, Feet, Tail, Movement"
        },
        {
          id: "wala-australian-labradoodle-standard",
          role: "verified",
          locator: "Coat Texture (Fleece, Wool, Hair), Head, Eyes, Ears, Teeth (scissor bite), Tail"
        },
        {
          id: "alaa-labradoodle-coat-colors-guide",
          role: "verified",
          locator: "Sixteen recognized coat colours (black-pigmented and brown-pigmented), six patterns, and merle exclusion"
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "Conformation, three coat textures (fleece, wool, hair), and coat colours follow ALA, WALA, and ALAA association standards."
    },

    "physical.height": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ala-australian-labradoodle-breed-standards",
          role: "verified",
          locator: "Size: Miniature 35cm to 42cm, Medium 43cm to 52cm, Standard 53cm to 63cm (overall span 35 to 63 cm)"
        },
        {
          id: "wala-australian-labradoodle-standard",
          role: "cited",
          locator: "Separately publishes wider bounds (Miniature 12 to <17 in, Medium 17 to <21 in, Standard 21 to 28 in)"
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "Stored verbatim in centimetres (35 to 63 cm overall across Miniature, Medium, and Standard tiers) as published first by the Australian Labradoodle Association (ALA). First-generation F1 crosses can vary more widely."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ala-australian-labradoodle-breed-standards",
          role: "verified",
          locator: "Size: Miniature 7kg to 13kg, Medium 13kg to 20kg, Standard 21kg to 30kg (overall span 7 to 30 kg)"
        },
        {
          id: "wala-australian-labradoodle-standard",
          role: "cited",
          locator: "Separately notes approximate overall weight from 12 to 85 pounds (5.4 to 38.5 kg)"
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "Stored verbatim in kilograms (7 to 30 kg overall across Miniature, Medium, and Standard tiers) as published first by the Australian Labradoodle Association (ALA)."
    },

    "physical.lifespanYears": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No official breed standard, parent-club standard (ALA/WALA/ALAA), or peer-reviewed breed-specific actuarial life-table study publishes a definitive lifespan range for the Labradoodle, and longevity varies across size varieties."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "wala-australian-labradoodle-standard",
          role: "verified",
          locator: "Coat Texture: Wool (very low-shedding), Fleece (low-shedding), Hair (moderate to heavy shedding in early generations); allergy-friendliness depends on individual allergy severity"
        },
        {
          id: "plos-genetics-2020-australian-labradoodle-ali",
          role: "verified",
          locator: "Coat trait genetics (RSPO2 furnishings, FGF5 length, KRT71 curl) differentiating multi-generational ALBD from F1 LBD"
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "ala-australian-labradoodle-breed-standards",
          role: "cited",
          locator: "Head: clean-cut and free from fleshy cheeks"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial estimate inferred from clean-cut head and muzzle conformation."
    },

    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ala-australian-labradoodle-breed-standards",
          role: "verified",
          locator: "Temperament: Extremely clever, sociable, comical and joyful, energetic when free and soft and quiet when handled, happy friendly approach, keen and easy to train, intuitive."
        },
        {
          id: "wala-australian-labradoodle-standard",
          role: "verified",
          locator: "Naturally social, biddable, alert, intuitive, intelligent, joyful."
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "ala-australian-labradoodle-breed-standards",
          role: "cited",
          locator: "Sociable, joyful, clever, energetic, easy-to-train temperament description"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates reflecting documented sociable, energetic, highly trainable companion temperament and low guarding instinct."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "wala-australian-labradoodle-standard",
          role: "cited",
          locator: "Continuously growing fleece/wool coats require regular grooming"
        },
        {
          id: "pubmed-2021-uk-otitis-externa-vetcompass",
          role: "cited",
          locator: "Elevated otitis externa risk highlights importance of routine ear care"
        }
      ],
      verifiedOn: null,
      note:
        "General companion care combining sporting-cross exercise needs with intensive wavy/curly coat grooming and proactive drop-ear hygiene."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ala-australian-labradoodle-breed-standards",
          role: "verified",
          locator: "General Appearance & Temperament: Athletic, graceful, energetic when free."
        },
        {
          id: "wala-australian-labradoodle-standard",
          role: "verified",
          locator: "Smooth, powerful, coordinated gait; active sporting heritage."
        }
      ],
      verifiedOn: "2026-11-20",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "Editorial daily activity estimate (60 to 90 minutes) reflecting typical needs for active Medium and Standard Labradoodles (Miniature individuals may require slightly less)."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "Editorial assessment that Miniature and Medium Labradoodles adapt well to apartments when daily exercise is met, whereas energetic Standards generally benefit from more space."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "Editorial assessment that a home with a securely fenced yard suits active Labradoodles of all three sizes."
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "wala-australian-labradoodle-standard",
          role: "cited",
          locator: "Fleece, wool, and hair coat textures"
        }
      ],
      verifiedOn: null,
      note: "General climate guidance based on coat density and active sporting metabolism."
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "ala-australian-labradoodle-breed-standards",
          role: "cited",
          locator: "Highly sociable, family-oriented companion temperament"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General veterinary nutrition principles scaled across small, medium, and large active dog formulas."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "plos-one-2024-doodle-dilemma-bryson",
          role: "verified",
          locator: "PLoS ONE 19(8): e0306350 (2024): No significant difference in 86.6% of disorder comparisons between designer crossbreeds (including 583 Labradoodles) and purebred progenitors; lower patellar luxation risk vs. Poodles."
        },
        {
          id: "pubmed-2021-uk-otitis-externa-vetcompass",
          role: "verified",
          locator: "Canine Med Genet 2021 (PMID 34488894): Labradoodle ranked third highest for otitis externa odds (OR 2.95 vs. general crossbreds)."
        },
        {
          id: "frontiers-vet-sci-2026-labradoodle-eye-screening-goossens",
          role: "verified",
          locator: "Frontiers in Veterinary Science (2026): ECVO ophthalmic screening of 1,182 Labradoodles in the Netherlands (7.8% affected by >=1 KP-HED)."
        },
        {
          id: "pubmed-oliver-gould-2012-labradoodle-ophthalmic",
          role: "verified",
          locator: "Vet Rec 2012 (PMID 22278634): UK ophthalmic survey identifying 4.6% multifocal retinal dysplasia (MRD) and 3.7% cataracts."
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "Grounded in peer-reviewed veterinary epidemiology and ophthalmic screening studies without naming studies or registries in user-facing text."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pubmed-2021-uk-otitis-externa-vetcompass",
          role: "verified",
          locator: "Otitis externa elevated odds (OR 2.95) in UK primary-care VetCompass cohort"
        },
        {
          id: "frontiers-vet-sci-2026-labradoodle-eye-screening-goossens",
          role: "verified",
          locator: "Screened Dutch cohort (n = 1,182): iris-to-iris PPM (4.7%), distichiasis (2.5%), cataracts (0.5%), MRD (0.2%)"
        },
        {
          id: "pubmed-oliver-gould-2012-labradoodle-ophthalmic",
          role: "verified",
          locator: "UK ophthalmic survey (n = 175): MRD (4.6%) and cataracts (3.7%)"
        },
        {
          id: "alaa-labradoodle-health-testing-program",
          role: "verified",
          locator: "Parent-association screened conditions: hip dysplasia, elbow dysplasia, prcd-PRA, EIC, ocular disease, patellar luxation, thyroid, vWD, cardiac"
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "Explicitly distinguishes peer-reviewed primary-care epidemiology (otitis externa), screened ophthalmic cohorts, DNA-screenable parent-breed diseases (prcd-PRA, EIC), and large-breed precautions (GDV)."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "alaa-labradoodle-health-testing-program",
          role: "cited",
          locator: "Pre-breeding hip, elbow, eye, EIC, and prcd-PRA screening protocols"
        },
        {
          id: "pubmed-2021-uk-otitis-externa-vetcompass",
          role: "cited",
          locator: "Proactive ear-care advice for breeds predisposed to otitis externa"
        }
      ],
      verifiedOn: null,
      note: "General preventive veterinary care protocol tailored to Labradoodles."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "alaa-labradoodle-health-testing-program",
          role: "verified",
          locator: "Required/Paw-program screenings: Hip radiographs (OFA/PennHIP/BVA/AVA), Elbow radiographs, DNA tests for prcd-PRA and EIC, 18-month board-certified ophthalmologist eye exam, plus optional patella, thyroid, vWD, and cardiac evaluations."
        },
        {
          id: "pubmed-oliver-gould-2012-labradoodle-ophthalmic",
          role: "verified",
          locator: "Advises routine pre-breeding screening for hereditary eye disease in Labradoodles."
        },
        {
          id: "frontiers-vet-sci-2026-labradoodle-eye-screening-goossens",
          role: "verified",
          locator: "Supports continued ophthalmic screening to guide breeding decisions."
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "Summarizes ALAA screening requirements and peer-reviewed ophthalmic screening recommendations without naming registries in user-facing text."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "wala-australian-labradoodle-standard",
          role: "cited",
          locator: "Teeth: scissor bite"
        }
      ],
      verifiedOn: null,
      note: "Standard home and veterinary dental care guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "pubmed-2021-uk-otitis-externa-vetcompass",
          role: "cited",
          locator: "Labradoodle elevated risk of otitis externa (OR 2.95) and drop-ear conformation"
        },
        {
          id: "ala-australian-labradoodle-breed-standards",
          role: "cited",
          locator: "Ears: flat-lying drop ears; excessive hair in ear canal is undesirable"
        }
      ],
      verifiedOn: null,
      note: "Proactive ear inspection and drying protocol given documented otitis externa predisposition."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "wala-australian-labradoodle-standard",
          role: "cited",
          locator: "Dense wool and wavy fleece coats require regular brushing down to the skin"
        }
      ],
      verifiedOn: null,
      note: "General skin and mat-prevention guidance."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "ala-australian-labradoodle-breed-standards",
          role: "cited",
          locator: "Sociable, family-friendly, clever, energetic companion profile"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability evaluations balancing sociable, trainable nature against high exercise demands, intensive grooming, and allergy/health misconceptions."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "plos-genetics-2020-australian-labradoodle-ali",
          role: "verified",
          locator: "150,106-SNP genomic analysis showing excess Poodle ancestry and selection on RSPO2, FGF5, and KRT71 coat genes"
        },
        {
          id: "plos-one-2024-doodle-dilemma-bryson",
          role: "verified",
          locator: "2024 UK study of 9,402 dogs finding no statistical difference in 86.6% of health comparisons; portmanteau origin"
        },
        {
          id: "pubmed-2021-uk-otitis-externa-vetcompass",
          role: "verified",
          locator: "UK VetCompass otitis externa odds ratio (OR 2.95) for Labradoodles"
        }
      ],
      verifiedOn: "2026-11-20",
      note: "Verified historical, genomic, and veterinary epidemiological facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "ala-australian-labradoodle-breed-standards",
          role: "verified",
          locator: "Size tiers (35-63 cm, 7-30 kg), temperament, and family suitability"
        },
        {
          id: "wala-australian-labradoodle-standard",
          role: "verified",
          locator: "Coat textures (fleece, wool, hair), shedding variability, grooming requirements"
        },
        {
          id: "plos-one-2024-doodle-dilemma-bryson",
          role: "verified",
          locator: "Comparison of Labradoodle health vs. purebred parent breeds"
        },
        {
          id: "pubmed-2021-uk-otitis-externa-vetcompass",
          role: "verified",
          locator: "Otitis externa predisposition"
        },
        {
          id: "alaa-labradoodle-health-testing-program",
          role: "verified",
          locator: "Hip/elbow dysplasia, eye exams, prcd-PRA, and EIC screening"
        }
      ],
      verifiedOn: "2026-11-20",
      note:
        "FAQ answers synthesize breed-association standards and peer-reviewed veterinary research without naming registries or studies in user-facing prose."
    }
  },

  updatedOn: "2026-11-20"
};
