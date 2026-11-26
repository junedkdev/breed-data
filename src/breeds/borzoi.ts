import type { Breed } from "../schema/breed.types";

export const borzoi: Breed = {
  slug: "borzoi",
  name: "Borzoi",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Russkaya Psovaya Borzaya",
    "Russian Hunting Sighthound",
    "Russian Wolfhound",
    "Barzoï",
    "Barsoi"
  ],

  group:
    "Sighthounds; Section 1 — Long-haired or fringed Sighthounds (without working trial outside Russia; also classified in the Hound group)",

  origin: {
    country: "Russia",
    region: null
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Borzoi_white_%26_grey_2.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Borzoi_white_%26_grey_2.jpg",
      title: "Borzoi white & grey 2.jpg",
      description:
        "An adult white-and-grey male Borzoi standing outdoors, clearly displaying its tall narrow aristocratic frame, gently arched loin, long lean head, small folded ears, and silky feathered coat.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2020-08-23",
      uploadedOn: "2020-08-24",
      width: 1708,
      height: 1471,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Borzoi_white_%26_grey_2.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Borzoi_red_%26_white.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Borzoi_red_%26_white.jpg",
      title: "Borzoi red & white.jpg",
      description:
        "An adult red-and-white female Borzoi photographed outdoors in profile, highlighting her refined elongated silhouette, deep narrow brisket, wavy silky coat with full neck frill, and low-carried feathered tail.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2020-08-23",
      uploadedOn: "2020-08-24",
      width: 1950,
      height: 1699,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Borzoi_red_%26_white.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    }
  ],

  overview: {
    summary:
      "An aristocratic, swift, and silky-coated giant Russian sighthound once kept by imperial nobility to course wolves, hares, and foxes across open steppes, admired today for its quiet, dignified indoor composure and breathtaking bursts of speed outdoors.",

    description:
      "The Borzoi—known in Russia as the Russkaya Psovaya Borzaya and formerly called the Russian Wolfhound—is a tall, lean, narrow-bodied sighthound built for explosive agility and graceful coursing power. Slightly elongated in outline (with females marginally longer than males), it pairs a deeply dropped yet fairly narrow chest, a smoothly arched muscular loin, and blade-like straight forelegs with a long, slender, gently domed head inclined toward a subtle Roman nose and scarcely visible stop. Large, obliquely set dark almond eyes lined in black convey soft intelligence, complemented by small, thin, mobile ears folded neatly back toward the nape in repose. Its hallmark coat is long, supple, and silky—lying flat, wavy, or loosely curled over the body with short smooth hair on the head, ears, and front legs, a curly frill around the neck, and abundant feathering down the chest, hindquarters, and low-carried curved tail. Quiet, clean, and almost cat-like in calm indoor dignity, the Borzoi transforms instantly outdoors into a lightning-fast sprinter capable of 35 to 40 miles per hour whenever fleeing game catches its eye.",

    history:
      "The ancestry of the Borzoi stretches back at least to the fifteenth century in Russia, shaped across the open steppes by blending swift, long-coated local coursing dogs with Greyhound, Mountain (Gorsky), and Crimean sighthound blood to create an agile, cold-hardy hunter. By the sixteenth and seventeenth centuries, the breed was firmly established among the Russian aristocracy, who maintained grand country kennels and staged elaborate hunts where matched pairs of Borzoi coursed hares, foxes, and wolves across open terrain—holding wolves pinned until mounted hunters arrived. Known internationally as the Russian Wolfhound until 1936, the breed took its modern name from the Russian word for 'swift.' Following the Russian Revolution of 1917, many imperial kennels were lost, and the breed's global survival owed much to dogs previously gifted to Western European and American fanciers. Definitive international recognition followed in January 1956. Today, the Borzoi excels in lure coursing, oval-track racing, and conformation while living peacefully in calm homes as a serene, independent companion.",

    originalPurpose:
      "Coursing wild game by sight—principally hare and fox, and historically wolves in matched pairs—across open Russian terrain.",

    currentRoles: [
      "Calm, dignified household companion",
      "Lure-coursing and sighthound-racing athlete",
      "Conformation and calm therapy-dog partner"
    ]
  },

  physical: {
    sizeCategory: "Giant",

    height: {
      unit: "cm",
      male: {
        min: 75,
        max: 85
      },
      female: {
        min: 68,
        max: 78
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 75,
        max: 105
      },
      female: {
        min: 60,
        max: 85
      }
    },

    lifespanYears: {
      min: 9,
      max: 14
    },

    coatType:
      "Long, supple, silky coat (never woolly or harshly bristled) that lies flat, wavy, or in loose large curls over thin, elastic, fold-free skin. Hair on the head, ears, and fronts of the legs is short and smooth, while a profuse curly frill frames the neck and long silky feathering drapes the chest, backs of the forelegs, hindquarters, and long tail.",

    coatLength: "Long",

    coatColors: [
      "Any colour or combination of colours—solid or patched on a white ground—including white, gold, sable, red, grey, brindle, and black with tan points",
      "Nose, lips, and eyelid rims must always carry black pigment regardless of coat shade (brown/chocolate, blue, lilac/isabella, and dilute coats with non-black noses are not accepted under international guidelines)"
    ],

    sheddingLevel:
      "Moderate to high; sheds steadily throughout the year and drops large amounts of long silky hair during seasonal shedding periods (roughly once or twice a year)",

    droolingLevel:
      "Low; thin, elastic, fold-free skin and tight, clean black-edged lips free of pendulous flews keep drooling minimal",

    distinctiveFeatures: [
      "Tall, narrow, lean, aristocratic giant sighthound built slightly longer than tall (ideal body length 5 to 10 percent greater than withers height; females longer than males)",
      "Desirable height at the withers of 75 to 85 cm for males and 68 to 78 cm for females (elbow height sits slightly above half of height at the withers)",
      "Adult weight typically ranging from 75 to 105 pounds for males and 60 to 85 pounds for females",
      "Long, narrow, oval-shaped skull almost flat or slightly domed in profile with pronounced occiput, scarcely perceptible stop, and a long, deep muzzle inclined toward a subtle Roman nose",
      "Large, prominent always-black nose, flat cheeks, tight lips, and strong clean jaws meeting in a scissor or even bite",
      "Large, obliquely set dark brown almond eyes with tight black-edged lids projecting a soft, intelligent gaze (never round, bulging, or light)",
      "Small, thin, mobile pointed ears clad in short hair, set above eye level and folded close and backward toward the nape in repose (lifting when attentive)",
      "Long, lean, muscular, laterally flattened slightly arched neck flowing into an unpronounced withers, smoothly arched muscular back and loin, and deeply tucked belly",
      "Narrow yet very deep brisket, blade-like flattened straight forelegs, long muscular hindquarters wider than the forequarters, and hare-shaped feet with arched tight toes",
      "Long, low-set, profusely feathered tail carried low in a graceful curve",
      "Effortless, flowing, ground-covering trot that converges toward the centreline at speed and shifts into an explosive coursing gallop"
    ]
  },

  temperament: {
    traits: [
      "Calm, serene, dignified, and remarkably quiet indoors—rarely barking without cause",
      "Gentle, affectionate, and deeply devoted to its immediate family, often showing an endearing cat-like independence",
      "Naturally reserved, polite, or mildly aloof around unfamiliar strangers without nervous shyness or aggression",
      "Clever, observant, and self-willed rather than mechanically eager to please, responding best to respectful partnership",
      "Expressive in canine body language and generally harmonious living alongside other sighthounds or large respectful dogs",
      "Possesses a powerful, lightning-fast visual chasing instinct triggered instantly by running rabbits, squirrels, cats, or small dogs outdoors",
      "Delicate and sensitive around roughhousing, making calm supervision essential around young children"
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 4,
      withStrangers: 2,
      protectiveness: 2,
      independence: 5,
      trainability: 2,
      barking: 1,
      energy: 3
    }
  },

  care: {
    exercise: {
      level:
        "Moderate; calm, graceful, and happy lounging indoors for much of the day, adult Borzoi need daily brisk leashed walks paired with safe, regular opportunities to sprint in large, securely fenced enclosures",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Brisk daily leashed walks across quiet neighbourhoods or open trails (always on leash outside secure fences)",
        "Short, exuberant full-speed sprints inside a very large, high-fenced paddock or yard",
        "Organised lure coursing and straight or oval sighthound racing for fit adults",
        "Calm, low-pressure obedience, trick enrichment, and relaxed indoor lounging"
      ]
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Despite its regal length, the silky coat is surprisingly manageable—brush and comb thoroughly two to three times a week (and daily during the heavy seasonal shedding weeks) with a pin brush and wide-toothed comb, focusing behind the ears, neck frill, armpits, chest, hindquarter feathering, and tail to prevent mats.",

      bathing:
        "Bathe periodically with a mild canine shampoo—and add an extra bath or two during heavy seasonal coat blows to loosen and clear dead hair quickly.",

      notes: [
        "Trim excess hair cleanly around the hare-shaped paw pads for sure footing and keep strong nails clipped regularly.",
        "Check the small folded ears weekly for wax buildup, dirt, or redness.",
        "Provide soft, thick, supportive bedding to cushion lean sighthound joints and prevent elbow calluses.",
        "Brush teeth several times weekly using canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Moderate to challenging; intelligent and gently well-mannered, yet deeply independent and easily bored by repetitive drills—and its hardwired visual chase drive makes off-leash recall unreliable near moving wildlife",

      tips: [
        "Enrol in calm, positive puppy socialization and obedience classes early using patience, consistency, and appealing food rewards; harsh pressure causes this sensitive aristocrat to withdraw.",
        "Keep training sessions brief, upbeat, and varied rather than drilling mechanical repetitions.",
        "Never allow a Borzoi off-leash in unfenced parks, roadsides, or open fields—flying at 35 to 40 miles per hour after a squirrel or rabbit can carry it out of earshot in seconds.",
        "Use a snug Martingale collar or well-fitted sighthound harness on walks, as the narrow head and sleek neck slip easily out of ordinary flat buckle collars."
      ],

      socialization:
        "Early, unhurried, positive exposure to varied people, friendly dogs, everyday noises, and veterinary handling builds quiet confidence while respecting its naturally reserved sighthound dignity."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cool, crisp, and snowy climates—bred for open Russian winters, where its silky double-layering coat keeps it comfortable during vigorous outdoor exercise",
        "Temperate four-season climates with spacious indoor resting areas",
        "Warm climates are handled well indoors with air conditioning; schedule sprinting and brisk walks during cool early-morning or evening hours with constant shade and cool water"
      ],

      aloneTimeTolerance:
        "Moderate; calm, clean, and quiet indoors once exercised, though many Borzoi enjoy the quiet company of their household or another compatible sighthound."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced large- or giant-breed dog food, using a controlled-growth large-breed puppy diet during rapid skeletal development.",

    feedingFrequency: {
      puppy:
        "Three measured meals daily during rapid early growth (growing Borzoi puppies consume significantly more calories than mature adults).",
      adult:
        "Two measured meals daily (important for lowering acute stomach distension in a deep-chested giant sighthound).",
      senior:
        "Two portion-controlled meals daily tailored for slower metabolism, cardiac support, and joint wellness."
    },

    guidelines:
      "Adult Borzoi often eat less than people expect for a dog of their towering height, whereas fast-growing puppies require carefully balanced nutrition to support rapid bone growth without excess weight. Measure every meal accurately so the dog keeps a lean, hard-muscled coursing frame with visible rib contours and deep tuck-up. Divide daily adult food into two smaller meals, enforce strict calm rest for at least an hour before and after eating, and provide cool fresh drinking water continuously.",

    considerations: [
      "Because the Borzoi has a very deep, narrow chest, strictly avoid vigorous running immediately before or for a couple of hours after meals to help reduce the risk of life-threatening gastric dilatation-volvulus (GDV / bloat), and discuss prophylactic gastropexy with a veterinarian.",
      "Keep growing puppies lean on a balanced large-breed growth formula—rapid growth combined with high-speed puppy running increases developmental orthopaedic and injury risk.",
      "Count all training treats inside the daily calorie budget and transition gradually between diets over five to seven days."
    ],

    note:
      "Caloric needs differ substantially between rapidly growing puppies, coursing athletes, and serene indoor adults. Consult a veterinarian familiar with giant sighthounds to tailor feeding quantities."
  },

  health: {
    overview:
      "The Borzoi is generally a robust, athletic giant sighthound with a typical life expectancy of 9 to 14 years (a 2021 Swedish owner survey reported a mean age of 8.8 years overall—7.4 years in males and 9.8 years in females—reflecting giant-breed mortality patterns). Peer-reviewed veterinary cardiology, genetics, and ophthalmology studies identify five key breed health priorities: cardiac arrhythmias and Dilated Cardiomyopathy (DCM, with a 2023 multicenter study of 152 Borzoi documenting ventricular arrhythmias in 19%—76% without major structural changes—and recommending echocardiographic and ECG/Holter screening), acute gastric dilatation-volvulus (bloat), autosomal-recessive Degenerative Myelopathy (SOD1:c.118G>A allele frequency 0.17 across 787 tested Borzoi), familial autoimmune lymphocytic thyroiditis (hypothyroidism), and multifocal chorioretinopathy ('Borzoi retinopathy'), alongside giant-breed osteosarcoma risk and sighthound anaesthetic sensitivity.",

    commonConditions: [
      "Cardiac arrhythmias, Dilated Cardiomyopathy (DCM), and sudden cardiac death — a 2023 multicenter retrospective study of 152 Borzoi across 14 cardiology centres detected ventricular arrhythmias in 19% (25/131, of which 76% had minimal or no structural heart disease) alongside DCM (n = 13), mostly mild myxomatous mitral valve disease (n = 12), tricuspid valve dysplasia (n = 6), and sudden death in 5% (3/55) with follow-up; a 2024 study established breed-specific echocardiographic reference values and urged routine cardiac screening",
      "Gastric dilatation-volvulus (GDV / bloat) — sudden, life-threatening gas distension and twisting of the stomach requiring immediate emergency surgery; a top non-testable emergency concern in this very deep-chested giant sighthound",
      "Degenerative Myelopathy (DM, SOD1-related) — a late-onset, progressive, painless spinal cord degeneration (typically starting around age 8) associated with homozygosity for the SOD1:c.118G>A variant (found at an allele frequency of 0.17 across 787 tested Borzoi, with incomplete penetrance); preventable through pre-breeding DNA screening",
      "Autoimmune lymphocytic thyroiditis (primary hypothyroidism) — a well-documented familial endocrine disorder studied across four generations of Borzoi, causing lethargy, coat thinning, or weight gain and managed with thyroid hormone replacement; monitored via pre-breeding thyroid panels",
      "Multifocal chorioretinopathy ('Borzoi retinopathy') and other hereditary eye disorders — focal chorioretinal lesions documented in Borzoi (distinct from Progressive Retinal Atrophy) alongside cataracts, monitored through periodic specialist veterinary ophthalmologist examinations",
      "Osteosarcoma (bone cancer) and other senior cancers — a major non-testable cause of senior mortality in giant sighthounds (owner surveys note cancer predominantly in older adults)",
      "Sighthound anaesthetic sensitivity and rapid-growth musculoskeletal injuries — lower body-fat stores and sighthound drug metabolism increase sensitivity to certain anaesthetics, while rapid giant puppy growth heightens vulnerability to developmental or high-speed running injuries"
    ],

    preventiveCare: [
      "Verify documented pre-breeding health clearances for both parents: veterinary cardiac examination (ideally cardiologist echocardiogram plus ECG/Holter screening where available), board-certified veterinary ophthalmologist eye examination, thyroid panel, and Degenerative Myelopathy (SOD1) DNA testing.",
      "Divide daily adult meals into two portions, avoid vigorous exercise right before and for a couple of hours after eating, learn emergency warning signs of bloat (unproductive retching, swollen tight abdomen, restlessness), and discuss prophylactic gastropexy with a veterinarian.",
      "Always remind veterinarians prior to surgery or dental procedures that sighthounds such as Borzoi have heightened anaesthetic sensitivity and unique sighthound blood-chemistry baselines.",
      "Protect rapidly growing Borzoi puppies from excessive forced jumping or uncontrolled collisions during high-speed play, and schedule annual veterinary wellness exams including cardiac auscultation."
    ],

    recommendedScreenings: [
      "Cardiac evaluation by a board-certified veterinary cardiologist (echocardiogram using breed-specific reference values and ECG / 24-hour Holter monitoring for arrhythmias and DCM)",
      "Ophthalmic examination by a board-certified veterinary ophthalmologist (screening for Borzoi multifocal chorioretinopathy and cataracts)",
      "Thyroid panel evaluation prior to breeding",
      "DNA test for Degenerative Myelopathy (SOD1:c.118G>A)"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste and schedule regular veterinary dental evaluations to keep the long, powerful jaws and scissor or even bite healthy.",

    earCare:
      "Inspect the small, thin, backward-folded ears weekly for wax buildup, dirt, or redness, cleaning gently with a veterinarian-approved solution when needed.",

    skinCare:
      "Part the long silky coat during regular brushing to check the thin, elastic skin for mats behind the ears or feathering, ticks, scrapes from sprinting, or pressure calluses on bony elbows."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Calm, spacious homes with a very large, securely fenced yard seeking a quiet, serene, cat-like giant companion",
      "Sighthound enthusiasts interested in lure coursing, oval racing, or showcasing an aristocratic long-coated hound",
      "Quiet families with older, respectful children who appreciate a gentle, dignified, low-barking household dog",
      "Owners willing to provide regular silky-coat brushing, strict on-leash safety, and proactive cardiac and bloat vigilance"
    ],

    notIdealFor: [
      "Small apartments or households lacking safe, spacious fenced areas for high-speed sighthound sprinting",
      "Owners wanting an off-leash hiking dog or instant, mechanical obedience in distracting outdoor environments",
      "Homes with free-roaming cats, rabbits, small rodents, or boisterous roughhousing toddlers",
      "People seeking a loud, fiercely territorial guard dog or unwilling to manage seasonal long-coat shedding"
    ]
  },

  funFacts: [
    "The Russian word 'borzoi' translates directly to 'swift'—and in full stride across open ground, a fit Borzoi can accelerate to 35 to 40 miles per hour.",
    "Until 1936, the breed was officially known in the English-speaking world as the 'Russian Wolfhound,' reflecting imperial hunts where matched pairs of Borzoi coursed wolves across the Russian steppes and pinned them until mounted hunters arrived.",
    "Before the 1917 Russian Revolution, Russian aristocrats kept immense country estates devoted to Borzoi hunting packs—often celebrating successful hunts with lavish ceremonial feasts in field tents.",
    "Despite its towering 75 to 85 cm male frame and flowing silky coat, the Borzoi is famously quiet, tidy, and serene indoors—often likened to an oversized aristocratic cat that may flatly refuse to step outside on a rainy day.",
    "Because sighthounds have uniquely proportioned athletic hearts, veterinary cardiologists published dedicated Borzoi-specific echocardiographic reference values in 2024 to help screen accurately for dilated cardiomyopathy and arrhythmias."
  ],

  faq: [
    {
      question: "What is a Borzoi?",
      answer:
        "The Borzoi (Russkaya Psovaya Borzaya, formerly called the Russian Wolfhound) is a tall, lean, silky-coated giant Russian sighthound historically bred by the aristocracy to course hares, foxes, and wolves across open terrain."
    },
    {
      question: "How tall and heavy is a Borzoi?",
      answer:
        "Desirable height at the withers is 75 to 85 cm for males and 68 to 78 cm for females, with adult males typically weighing 75 to 105 pounds and adult females typically weighing 60 to 85 pounds."
    },
    {
      question: "How long does a Borzoi live?",
      answer:
        "The breed's typical life expectancy is 9 to 14 years (though giant-breed owner surveys report an average age around 9 years, with females often living slightly longer than males)."
    },
    {
      question: "Can a Borzoi live in an apartment?",
      answer:
        "Generally no. Although remarkably quiet, clean, and calm indoors, its giant size and need for safe, spacious fenced areas to sprint at full speed make a large house with a big, securely fenced yard far more practical."
    },
    {
      question: "Do Borzoi shed a lot, and how much grooming do they need?",
      answer:
        "They shed moderately year-round and drop substantial amounts of long hair during seasonal shedding periods (once or twice a year). Thorough brushing two to three times a week—and daily plus extra baths during heavy shedding—keeps the silky coat tangle-free."
    },
    {
      question: "Are Borzoi good with children and other pets?",
      answer:
        "They are gentle, calm, and affectionate with older, respectful children (always supervised, as they dislike roughhousing) and generally live harmoniously with other large, polite dogs. Because of their intense visual chasing instinct, however, they should never be trusted loose around small running animals or unfamiliar outdoor cats."
    },
    {
      question: "Are Borzoi easy to train?",
      answer:
        "They are intelligent and polite, but deeply independent rather than eager to please through repetitive obedience drills. Patient, positive, short sessions work best—and they must always be walked on a leash outside secure fences because running prey instantly triggers their chase instinct."
    },
    {
      question: "What are the main health concerns for a Borzoi?",
      answer:
        "Major breed health priorities include ventricular arrhythmias and Dilated Cardiomyopathy (DCM, screened via cardiologist echo and ECG/Holter monitoring), acute bloat (gastric dilatation-volvulus), Degenerative Myelopathy (SOD1 DNA-screenable), autoimmune hypothyroidism, multifocal chorioretinopathy ('Borzoi retinopathy'), senior bone cancer (osteosarcoma), and sighthound anaesthetic sensitivity."
    }
  ],

  references: [
    "fci-borzoi-official-standard",
    "fci-borzoi-nomenclature",
    "bcoa-borzoi-breed-standard",
    "akc-borzoi-breed-profile",
    "rkc-borzoi-breed-profile",
    "skk-borzoi-breed-profile",
    "skk-borzoi-ras-2022",
    "bcoa-health-information",
    "pmc-sykes-2023-borzoi-cardiac-disease",
    "pubmed-borzoi-echocardiography-2024",
    "pmc-zeng-2014-sod1-dm-breeds",
    "pmc-grahn-2006-borzoi-retinopathy",
    "pubmed-conaway-1985-borzoi-lymphocytic-thyroiditis",
    "wikimedia-borzoi-white-grey-2-canarian",
    "wikimedia-borzoi-red-white-canarian"
  ],

  evidence: {
    scientificName: {
      reliability: "unverified",
      sources: [],
      verifiedOn: null,
      note:
        "Canis lupus familiaris is used as the standard domestic-dog taxonomic label across the catalog; it is not stated in breed standards."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-borzoi-official-standard",
          role: "verified",
          locator: "Standard heading: RUSSKAYA PSOVAYA BORZAYA (Borzoi – Russian Hunting Sighthound)"
        },
        {
          id: "fci-borzoi-nomenclature",
          role: "verified",
          locator: "Official multilingual names: RUSSKAYA PSOVAYA BORZAYA, BORZOI - RUSSIAN HUNTING SIGHTHOUND, BARZOI"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified across FCI Standard No. 193 and FCI Nomenclature No. 193; Russian Wolfhound (used until 1936) and Barsoi (German) are well-established historical and multilingual names."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-borzoi-official-standard",
          role: "verified",
          locator: "FCI-CLASSIFICATION: Group 10 Sighthounds; Section 1 Long-haired or fringed Sighthounds (working trial not required outside Russia)"
        },
        {
          id: "rkc-borzoi-breed-profile",
          role: "verified",
          locator: "Hound Group classification"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-borzoi-official-standard",
          role: "verified",
          locator: "ORIGIN: Russia; BRIEF HISTORICAL SUMMARY: dates from the 15th century in Russia"
        },
        {
          id: "skk-borzoi-breed-profile",
          role: "verified",
          locator: "Ursprungsland/hemland: Ryssland"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Country of origin (Russia) verified directly from FCI Standard No. 193 and SKK."
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "FCI Standard No. 193, AKC, RKC, and SKK specify Russia as a whole without restricting the breed's founding origin to a single Russian province."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-borzoi-official-standard",
          role: "verified",
          locator: "UTILIZATION (hare, fox, less wolf hunting; coursing and racing), BRIEF HISTORICAL SUMMARY (15th-century Russian roots, Greyhound / Chistopsovy, Mountain Gorsky, and Crimean Sighthound crosses), GENERAL APPEARANCE"
        },
        {
          id: "fci-borzoi-nomenclature",
          role: "verified",
          locator: "Date of acceptance on a definitive basis by the FCI: 1956-01-13"
        },
        {
          id: "rkc-borzoi-breed-profile",
          role: "verified",
          locator: "Imperial Russian aristocracy heritage, 'Borzoi' meaning 'swift', hunting in pairs to pin wolves, established by 16th century"
        },
        {
          id: "akc-borzoi-breed-profile",
          role: "verified",
          locator: "Running speed of 35 to 40 miles per hour and calm agreeable indoor character"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Synthesized in original prose from FCI Standard No. 193, FCI Nomenclature No. 193, RKC, and AKC records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-borzoi-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS (5-10% longer than tall, elbow height slightly above half withers height), HEAD (narrow oval skull, hardly visible stop, always-black prominent nose), EYES (large dark almond, black-edged tight lids), EARS (small thin mobile folded back), NECK, BODY (smooth arch), LIMBS, COAT (long supple silky, fold-free thin skin), COLOUR (disqualifying brown/blue/isabella/dilute with non-black nose), SIZE"
        },
        {
          id: "bcoa-borzoi-breed-standard",
          role: "verified",
          locator: "Roman-nosed profile, scissor or even bite, blade-like flattened forelegs, hare-shaped feet, silky flat/wavy/curly coat with curly neck frill, low-carried curved tail, single-tracking fast trot"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "All proportions, head geometry, thin fold-free skin, silky feathered coat, black-pigment requirements, and gait details follow FCI Standard No. 193 (2019) and BCOA/AKC Official Standard."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-borzoi-official-standard",
          role: "verified",
          locator: "SIZE: Desirable height at the withers: males: 75–85 cm; females: 68–78 cm."
        },
        {
          id: "skk-borzoi-breed-profile",
          role: "verified",
          locator: "Mankhöjd för hanar är 75–85 cm och tikar 68–78 cm."
        },
        {
          id: "bcoa-borzoi-breed-standard",
          role: "cited",
          locator: "Separately publishes minimum heights in inches: mature males at least 28 inches, mature bitches at least 26 inches."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Preserved verbatim in published unit of centimetres (males 75 to 85 cm, females 68 to 78 cm) from FCI Standard No. 193 (2019) and SKK."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-borzoi-breed-profile",
          role: "verified",
          locator: "Weight: 75-105 pounds (male), 60-85 pounds (female)."
        },
        {
          id: "bcoa-borzoi-breed-standard",
          role: "verified",
          locator: "Range in weight for males from 75 to 105 pounds and for bitches from 15 to 20 pounds less."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "FCI Standard No. 193 omits weight; stored verbatim in published unit of pounds (75 to 105 lb males, 60 to 85 lb females) from AKC and BCOA."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-borzoi-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 9-14 years."
        },
        {
          id: "skk-borzoi-ras-2022",
          role: "cited",
          locator: "2021 Swedish Borzoi-Ringen owner survey reported mean age of 8.8 years (7.4 males, 9.8 females)."
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Stored verbatim as 9 to 14 years from AKC, with 2021 Swedish survey mean longevity transparently noted in health and FAQ text."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-borzoi-breed-profile",
          role: "verified",
          locator: "Grooming: Sheds steadily year-round and more heavily for several weeks about once a year."
        },
        {
          id: "skk-borzoi-breed-profile",
          role: "verified",
          locator: "Skötsel: Seasonal shedding roughly twice a year producing substantial loose hair indoors."
        },
        {
          id: "rkc-borzoi-breed-profile",
          role: "verified",
          locator: "Breed characteristics: Sheds Yes; Grooming more than once a week."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-borzoi-official-standard",
          role: "verified",
          locator: "GENERAL APPEARANCE: Skin is thin, elastic, without folds; SEVERE FAULTS: loose thick skin, pendulous lips."
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Tight, non-pendulous lips and fold-free skin prevent drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-borzoi-official-standard",
          role: "verified",
          locator: "BEHAVIOUR / TEMPERAMENT: Temperament is calm; visual response is well developed."
        },
        {
          id: "skk-borzoi-breed-profile",
          role: "verified",
          locator: "Egenskaper och mentalitet: Devoted family dog, good pack behaviour and clear dog language, intelligent and independent, somewhat aloof with strangers, calm indoors (may refuse rainy outings) yet explosive outdoors, rarely barks."
        },
        {
          id: "akc-borzoi-breed-profile",
          role: "verified",
          locator: "Gentle, well-mannered companion; strong visual chase instinct toward small running animals requiring on-leash control."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "skk-borzoi-breed-profile",
          role: "cited",
          locator: "Calm indoors, rarely barks, independent, reserved with strangers, strong pack sociability with other dogs"
        },
        {
          id: "akc-borzoi-breed-profile",
          role: "cited",
          locator: "Gentle family affection, self-willed trainability, strong outdoor chase instinct"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates reflecting documented quiet indoor serenity, low barking, high independence, stranger reserve, and sighthound pack sociability."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "skk-borzoi-breed-profile",
          role: "cited",
          locator: "Brushing a couple of times weekly, extra brushing and bathing during shedding periods, on-leash control due to hunting instinct"
        },
        {
          id: "akc-borzoi-breed-profile",
          role: "cited",
          locator: "Regular baths, nail trims, ear checks, frequent toothbrushing, early positive socialization, and strict leash safety"
        }
      ],
      verifiedOn: null,
      note:
        "General giant-sighthound care combining moderate leashed walks and fenced sprinting with weekly silky-coat brushing and bloat-safe routines."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-borzoi-breed-profile",
          role: "verified",
          locator: "Breed characteristics: Exercise: Up to 1 hour per day."
        },
        {
          id: "akc-borzoi-breed-profile",
          role: "verified",
          locator: "Graceful, athletic animals that make calm housedogs when given daily exercise and safe space to run."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "rkc-borzoi-breed-profile",
          role: "cited",
          locator: "Up to 1 hour daily exercise baseline"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial daily activity range (45 to 60 minutes) combining brisk leashed walks with safe fenced sprinting."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-borzoi-breed-profile",
          role: "verified",
          locator: "Breed characteristics: Size of home: Large house."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-borzoi-breed-profile",
          role: "verified",
          locator: "Size of home: Large house."
        },
        {
          id: "skk-borzoi-breed-profile",
          role: "verified",
          locator: "Hunting instinct limits off-leash freedom, requiring safe enclosed areas for running."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-borzoi-official-standard",
          role: "cited",
          locator: "Russian origin and long silky feathered coat"
        }
      ],
      verifiedOn: null,
      note: "General climate guidance inferred from Russian heritage and long silky coat."
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "skk-borzoi-breed-profile",
          role: "cited",
          locator: "Calm quiet indoor demeanour and strong pack orientation"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-borzoi-breed-profile",
          role: "verified",
          locator: "Nutrition: Adult Borzoi tend to eat less than assumed for their size, while rapidly growing Borzoi puppies consume more food than adults; monitor treats and provide fresh water."
        },
        {
          id: "skk-borzoi-breed-profile",
          role: "verified",
          locator: "Hälsa: Do not exercise immediately before or for a couple of hours after feeding due to gastric dilatation-volvulus (bloat) risk."
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Feeding intake contrast and post-meal bloat rest guidance verified directly from AKC and SKK."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Standard giant deep-chested breed life-stage feeding schedule dividing adult food into two smaller meals."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pmc-sykes-2023-borzoi-cardiac-disease",
          role: "verified",
          locator: "Front Vet Sci 2023 (PMC9909344, PMID 36777677): Multicenter study of 152 Borzoi finding ventricular arrhythmias in 25/131 (19%, 76% with minimal/no structural disease), DCM (n=13), mostly mild MMVD (n=12), tricuspid valve dysplasia (n=6), and sudden death in 3/55 (5%)."
        },
        {
          id: "pubmed-borzoi-echocardiography-2024",
          role: "verified",
          locator: "Am J Vet Res 2024 (PMID 38154250): Establishes Borzoi-specific echocardiographic reference values and advises screening for DCM."
        },
        {
          id: "pmc-zeng-2014-sod1-dm-breeds",
          role: "verified",
          locator: "JVIM 2014 (PMC4238831): Reports SOD1:c.118G>A genotypes in 787 tested Borzoi (548 G/G, 209 G/A, 30 A/A; A allele frequency 0.17)."
        },
        {
          id: "pmc-grahn-2006-borzoi-retinopathy",
          role: "verified",
          locator: "PMC1482450 (citing Storey, Grahn, & Alcorn, Vet Ophthalmol 2005): Documents multifocal chorioretinopathy of Borzoi dogs (distinct from PRA)."
        },
        {
          id: "pubmed-conaway-1985-borzoi-lymphocytic-thyroiditis",
          role: "verified",
          locator: "PMID 3840332: Documents familial primary hypothyroidism / lymphocytic thyroiditis across four generations of Borzoi."
        },
        {
          id: "akc-borzoi-breed-profile",
          role: "verified",
          locator: "Recommended national breed-club screenings (Cardiac, Ophthalmologist, Thyroid, DM DNA SOD1A), bloat awareness, and sighthound anaesthetic sensitivity."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Synthesizes peer-reviewed cardiology, molecular genetics, ophthalmology, and endocrinology studies alongside AKC, BCOA, and SKK records without naming clubs or registries in user-facing text."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pmc-sykes-2023-borzoi-cardiac-disease",
          role: "verified",
          locator: "Ventricular arrhythmias (19%), DCM, mostly mild MMVD, tricuspid valve dysplasia, and sudden cardiac death"
        },
        {
          id: "pmc-zeng-2014-sod1-dm-breeds",
          role: "verified",
          locator: "Degenerative Myelopathy SOD1:c.118G>A (allele frequency 0.17 in 787 tested Borzoi)"
        },
        {
          id: "pubmed-conaway-1985-borzoi-lymphocytic-thyroiditis",
          role: "verified",
          locator: "Familial lymphocytic thyroiditis (primary hypothyroidism)"
        },
        {
          id: "pmc-grahn-2006-borzoi-retinopathy",
          role: "verified",
          locator: "Multifocal chorioretinopathy ('Borzoi retinopathy')"
        },
        {
          id: "akc-borzoi-breed-profile",
          role: "verified",
          locator: "Bloat/GDV and sighthound anaesthetic sensitivity"
        },
        {
          id: "skk-borzoi-ras-2022",
          role: "verified",
          locator: "Rapid-growth musculoskeletal/traumatic injuries, senior cancer (8%), bloat, thyroid, and cardiac notes"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Explicitly stratifies peer-reviewed cardiac, genetic (SOD1 DM), endocrine (lymphocytic thyroiditis), and ocular (Borzoi retinopathy) conditions alongside GDV, senior cancer, and sighthound anaesthetic sensitivity."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-borzoi-breed-profile",
          role: "cited",
          locator: "Pre-breeding cardiac, eye, thyroid, and DM screening; bloat readiness; sighthound anaesthesia awareness"
        },
        {
          id: "skk-borzoi-breed-profile",
          role: "cited",
          locator: "Avoid exercise immediately before or for a couple of hours after feeding"
        }
      ],
      verifiedOn: null,
      note: "General preventive veterinary care protocol tailored to Borzoi."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-borzoi-breed-profile",
          role: "verified",
          locator: "Recommended Health Tests from the National Breed Club: Cardiac Exam, Ophthalmologist Evaluation, Thyroid Evaluation, and Degenerative Myelopathy (DM) DNA SOD1A."
        },
        {
          id: "bcoa-health-information",
          role: "verified",
          locator: "BCOA Health Committee Holter monitor rental program and OFA health clinic screening support."
        },
        {
          id: "pubmed-borzoi-echocardiography-2024",
          role: "verified",
          locator: "Supports echocardiographic screening for DCM using Borzoi-specific reference values."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Summarizes BCOA/OFA CHIC recommended screening panel and peer-reviewed cardiac screening guidance without naming clubs or registries in user-facing prose."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-borzoi-breed-profile",
          role: "cited",
          locator: "Teeth should be brushed often."
        },
        {
          id: "bcoa-borzoi-breed-standard",
          role: "cited",
          locator: "Teeth strong and clean with either an even or a scissors bite."
        }
      ],
      verifiedOn: null,
      note: "Standard home and veterinary dental care guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-borzoi-breed-profile",
          role: "cited",
          locator: "A Borzoi's ears should be checked regularly."
        },
        {
          id: "fci-borzoi-official-standard",
          role: "cited",
          locator: "EARS: Small, thin, mobile, pointed-tipped, set closely and backwards toward the nape."
        }
      ],
      verifiedOn: null,
      note: "Routine folded-ear inspection and cleaning guidance."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-borzoi-official-standard",
          role: "cited",
          locator: "Skin is thin, elastic, without folds; long silky feathered coat."
        }
      ],
      verifiedOn: null,
      note: "General skin, mat-prevention, and sighthound pressure-point padding guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "rkc-borzoi-breed-profile",
          role: "cited",
          locator: "Large house requirement, up to 1 hour daily exercise, shedding, dignified aloof yet trustworthy sighthound"
        },
        {
          id: "akc-borzoi-breed-profile",
          role: "cited",
          locator: "Strict on-leash safety due to visual chase instinct, gentle indoor manners, careful child/dog supervision"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability evaluations balancing serene indoor quietness and elegance against giant space needs, strict off-leash limits, prey drive, and seasonal shedding."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-borzoi-breed-profile",
          role: "verified",
          locator: "'Borzoi' means 'swift'; imperial aristocratic kennels; hunting wolves in pairs and ceremonial field-tent feasts"
        },
        {
          id: "akc-borzoi-breed-profile",
          role: "verified",
          locator: "Top coursing speed of 35 to 40 miles per hour"
        },
        {
          id: "skk-borzoi-breed-profile",
          role: "verified",
          locator: "Quiet indoor nature and tendency to refuse stepping outside on rainy days"
        },
        {
          id: "pubmed-borzoi-echocardiography-2024",
          role: "verified",
          locator: "2024 publication of dedicated Borzoi-specific echocardiographic reference values"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified etymological, historical, behavioural, and veterinary-cardiology facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-borzoi-official-standard",
          role: "verified",
          locator: "Origin (Russia), height (75-85 cm males / 68-78 cm females), silky coat"
        },
        {
          id: "akc-borzoi-breed-profile",
          role: "verified",
          locator: "Weight (75-105 lb males / 60-85 lb females), lifespan (9-14 years), shedding, leash safety, bloat/anaesthesia/CHIC screenings"
        },
        {
          id: "rkc-borzoi-breed-profile",
          role: "verified",
          locator: "Large house requirement, grooming frequency"
        },
        {
          id: "pmc-sykes-2023-borzoi-cardiac-disease",
          role: "verified",
          locator: "Ventricular arrhythmias and DCM screening"
        },
        {
          id: "pmc-zeng-2014-sod1-dm-breeds",
          role: "verified",
          locator: "SOD1 Degenerative Myelopathy"
        },
        {
          id: "pmc-grahn-2006-borzoi-retinopathy",
          role: "verified",
          locator: "Borzoi multifocal chorioretinopathy"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "FAQ answers synthesize FCI Standard No. 193, AKC, BCOA, RKC, SKK, and peer-reviewed veterinary studies without naming clubs or registries in user-facing prose."
    }
  },

  updatedOn: "2026-11-26"
};
