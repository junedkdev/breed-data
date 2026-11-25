import type { Breed } from "../schema/breed.types";

export const kishu_ken: Breed = {
  slug: "kishu-ken",
  name: "Kishu Ken",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Kishu",
    "Kishu Inu",
    "Kishū-ken",
    "Kishū Inu",
    "紀州犬"
  ],

  group:
    "Spitz and primitive types; Section 5 — Asian Spitz and related breeds (without working trial; also classified in the Hound group)",

  origin: {
    country: "Japan",
    region: "Kishu (Wakayama and Mie Prefectures, Kii Peninsula)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kishu_Ken_in_the_Snow.png",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Kishu_Ken_in_the_Snow.png",
      title: "Kishu Ken in the Snow.png",
      description:
        "An eight-month-old white Kishu Ken outdoors in snow, displaying its crisp snowy double coat, small forward-inclining erect triangular ears, dark wedge-shaped muzzle, and alert expression.",
      creator: "CJ Hammond (Crispette)",
      uploader: "Crispette",
      capturedOn: "2015-01-27",
      uploadedOn: "2015-01-29",
      width: 2000,
      height: 1333,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by CJ Hammond (Crispette), Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Kishu_Ken_in_the_Snow.png. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-25"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kishu-sesame2.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Kishu-sesame2.jpg",
      title: "Kishu-sesame2.jpg",
      description:
        "An adult sesame-coloured Kishu Ken standing outdoors, clearly showing its compact, muscular 10:11 proportions, thick straight double coat with longer cheek and tail fur, and vigorously curled tail.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2021-08-07",
      uploadedOn: "2021-08-11",
      width: 2001,
      height: 1940,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Kishu-sesame2.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-25"
    }
  ],

  overview: {
    summary:
      "A noble, agile, and intensely enduring medium-sized Japanese mountain hunting spitz from the Kii Peninsula, celebrated as a designated Japanese natural monument and Japan's premier purebred wild-boar hunter.",

    description:
      "The Kishu Ken (often called simply the Kishu or Kishu Inu) is a compact, strongly boned, and powerfully muscled medium-sized native Japanese hunting dog shaped by centuries of silent big-game stalking across steep mountain forests. Slightly longer than tall in a balanced 10:11 ratio, it projects rustic dignity, quiet steadiness, and elastic athleticism. Its broad forehead breaks cleanly at a rather abrupt stop into a fairly thick, wedge-shaped muzzle with a straight nasal bridge, tight lips, strong scissor-bite jaws, well-developed cheeks, small forward-tilted prick ears, and dark brown, nearly triangular eyes with subtly upturned outer corners. Clad in a harsh, straight outer coat backed by a soft, dense undercoat—growing noticeably fuller along the cheeks and over its thick curled or sickle tail—the breed appears predominantly in solid white, alongside rarer red and sesame coats. Unlike loud barking hounds, the Kishu Ken typically stalks prey silently like a cat before closing in on wild boar. Deeply loyal, docile, and attentive with its own family or primary handler, it remains naturally discerning and aloof with strangers while carrying a formidable hunting drive that requires experienced, respectful leadership.",

    history:
      "Descending from ancient medium-sized hunting dogs inhabiting Japan since prehistoric times, the Kishu Ken became firmly established in the rugged mountainous territory of historic Kishu—now Wakayama and Mie Prefectures on southeastern Honshu's Kii Peninsula—from which it takes its name. Traditionally grouped among Japan's medium-sized deer-and-boar hunting dogs ('shika-inu') alongside the Kai and Shikoku, it originally appeared widely in red, sesame, brindle, and piebald-marked coats. Following Japan's designation of the Kishu Ken as a protected Living Natural Monument in 1934, breeders standardized exclusively on solid self-coloured coats—causing heavily marked coats to vanish by 1945 while solid white became the iconic majority colour prized for visibility in dense woodland hunts. Imports reached the United States in the late 1960s (with documented breeding in California and Massachusetts beginning by 1971), definitive international recognition arrived in February 1982, and European registrations remain tiny (the first individual entered Sweden only in 2020). Today, the Kishu Ken remains rare outside Japan yet continues to be the most widely used native purebred Japanese dog for wild-boar hunting in its homeland.",

    originalPurpose:
      "Quietly stalking, pursuing, and holding wild boar—and historically deer—at bay across the densely forested mountains of Japan's Kii Peninsula.",

    currentRoles: [
      "Working wild-boar hunting dog in Japan",
      "Devoted rural or active-household companion and vigilant watchdog",
      "Versatile canine-sports competitor (agility, obedience, rally, nosework, Fast CAT, and barn hunt)"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 49,
        max: 55
      },
      female: {
        min: 46,
        max: 52
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 30,
        max: 60
      },
      female: {
        min: 30,
        max: 60
      }
    },

    lifespanYears: {
      min: 12,
      max: 15
    },

    coatType:
      "Weatherproof short-to-medium double coat consisting of a harsh, straight, stiff outer guard coat over a soft, dense undercoat, with noticeably longer hair fringing the cheeks and thick tail. The winter coat is markedly fuller, whereas twice-yearly seasonal moults shed the undercoat heavily—sometimes leaving the summer coat flat and nearly bare of undercoat.",

    coatLength: "Short",

    coatColors: [
      "White (most prevalent modern colour; slight nose depigmentation permitted in white dogs)",
      "Red",
      "Sesame (an even mixture of black, red, and white hairs throughout)",
      "Solid self-coloured coats only (heavy spotting, piebald patches, and long hair are not accepted; black and tan occurs rarely in traditional Japanese lines)"
    ],

    sheddingLevel:
      "High seasonally; the harsh outer coat sheds lightly between moults, while the soft dense undercoat blows out heavily once or twice a year",

    droolingLevel:
      "Low; tight, clean lips on a wedge-shaped muzzle prevent drooling",

    distinctiveFeatures: [
      "Compact, well-balanced, muscular medium Japanese spitz build with a height-to-body-length ratio of 10:11 (females slightly longer than males)",
      "Height at the withers of 49 to 55 cm for males (ideal 52 cm, ± 3 cm tolerance) and 46 to 52 cm for females (ideal 49 cm, ± 3 cm tolerance)",
      "Adult weight typically ranging from 30 to 60 pounds depending on sex and build",
      "Broad forehead, rather abrupt stop with a slight frontal furrow, straight nasal bridge, fairly thick wedge-shaped muzzle, tight lips, strong scissor bite, and relatively well-developed cheeks",
      "Black nose (slight lack of pigment accepted in white-coated dogs)",
      "Dark brown, nearly triangular eyes not too small, with subtly upturned outer corners",
      "Small, triangular, firmly pricked ears inclining slightly forward",
      "Thick muscular neck, high withers, straight strong back, broad muscular loin, deep oval chest (45 to 50% of height) with moderately sprung ribs, and slightly tucked belly",
      "High-set, thick tail carried vigorously curled or curved like a sickle over the back, nearly reaching the hocks when lowered (hanging tails and bobtails are disqualifying)",
      "Moderately angulated limbs (110 to 120° shoulder-to-upper-arm angle), elbows held close, straight parallel forearms, tightly closed arched feet with thick elastic pads, and light resilient movement"
    ]
  },

  temperament: {
    traits: [
      "Embodies three classic Japanese hunting virtues: bold spirited courage ('kan'i'), good-natured docility ('ryosei'), and unassuming rustic dignity ('soboku')",
      "Faithful, deeply devoted, and often intensely bonded to one primary person or immediate family",
      "Remarkably alert, observant, and watchful—frequently seeking elevated vantage points to survey its surroundings and barking primarily to alert",
      "Naturally reserved, discerning, or aloof around unfamiliar strangers, requiring calm early socialization without forced greetings",
      "Intelligent, independent, and strong-willed, excelling as a collaborative partner rather than responding to harsh dominance",
      "Quiet, cat-like stalker outdoors possessing a powerful prey drive toward wild game, rodents, and small pets",
      "Selective with unfamiliar dogs (especially same-sex dogs) and best supervised around young children"
    ],

    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 2,
      withStrangers: 2,
      protectiveness: 4,
      independence: 4,
      trainability: 3,
      barking: 2,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; a spirited, agile mountain big-game hunter with noteworthy endurance that requires substantial daily outdoor exercise alongside engaging mental work to prevent boredom or destructive habits",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Brisk daily trail hikes, forest walks, or structured running on a secure leash (never loose near unfenced wildlife or roads)",
        "Canine sports including agility, obedience, rally, nosework, Fast CAT, coursing ability tests, and barn hunt",
        "Interactive puzzle feeders, scent games, and fetch inside a high, securely fenced yard",
        "Working wild-boar tracking and hunting in rural areas where legally practiced"
      ]
    },

    grooming: {
      level: "Low to moderate",

      brushing:
        "The stiff, dirt-repelling outer coat sheds dried mud effortlessly and carries minimal doggy odour—brush once weekly with a slicker or bristle brush during ordinary months, stepping up to daily brushing and undercoat combing during the once- or twice-yearly heavy seasonal moults.",

      bathing:
        "Bathe only occasionally when dirty or during heavy coat blows, using a mild canine shampoo; blow-drying with a high-velocity dryer during moulting speeds removal of dense dead undercoat cleanly.",

      notes: [
        "Never shave the double coat; it naturally insulates against mountain cold and thins out automatically in summer.",
        "Inspect the small upright triangular ears weekly for wax buildup, dirt, or allergy-related redness.",
        "Check between the tightly closed toes and thick pads after forest trails for ticks, thorns, or burrs, and trim strong nails regularly.",
        "Brush teeth several times weekly using canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Moderate to challenging; smart, food- and bond-motivated, and capable of impressive canine-sports performance, yet strong-willed enough to butt heads with harsh or repetitive handlers",

      tips: [
        "Use fast-paced, upbeat, reward-based training built on high-value food treats, play, and mutual respect; heavy-handed or confrontational methods quickly trigger resistance in a proud Japanese hunting dog.",
        "Never trust off-leash reliability in unfenced areas—its silent stalking and high prey drive can send it climbing steep terrain or darting after wildlife in an instant.",
        "Provide firm, consistent, calm household rules from early puppyhood so its independent streak stays politely channelled.",
        "Install tall, escape-proof fencing, as agile Kishu Ken are capable climbers and jumpers when motivated by outdoor prey."
      ],

      socialization:
        "Early, calm, positive exposure to varied people, polite visitors, unfamiliar dogs, grooming, and everyday noises is crucial so its natural reserve matures into steady, poised discernment rather than reactivity."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cool and temperate four-season mountain climates, mirroring Japan's forested Kii Peninsula",
        "Cold snowy winters are handled enthusiastically thanks to its dense insulating winter undercoat",
        "Warm humid summers are tolerated better than by Arctic breeds because its seasonal moult sheds nearly all undercoat, though heavy exercise still belongs in cool morning or evening hours with shade and fresh water"
      ],

      aloneTimeTolerance:
        "Low to moderate; deeply bonded to its family or primary handler, a bored or isolated Kishu Ken left alone for long stretches frequently turns to digging, escaping, or destructive chewing."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for medium-sized, active working breeds, selected thoughtfully if skin or food sensitivities appear.",

    feedingFrequency: {
      puppy:
        "Three measured small meals daily until roughly six months of age to support steady, muscular skeletal development.",
      adult:
        "Two measured meals daily (morning and evening) to sustain field stamina and steady digestion.",
      senior:
        "Two portion-controlled meals daily tailored for slower metabolism and joint and metabolic wellness."
    },

    guidelines:
      "Measure every meal accurately with a scale or measuring cup to preserve a lean, athletic hunting build where ribs are easily felt beneath the double coat. Because some Kishu Ken experience allergic skin flares on diets heavy in starch, beef, or chicken, monitor skin and ear health closely when choosing a protein source and discuss elimination diets with a veterinarian if itching occurs. Keep clean, fresh drinking water available continuously.",

    considerations: [
      "Watch for food-triggered itching or skin inflammation; fish- or novel-protein moderate-starch formulas may suit allergy-prone individuals better under veterinary guidance.",
      "Count all training treats inside the daily calorie budget to prevent weight gain.",
      "Transition gradually between diet formulas over five to seven days to avoid gastrointestinal upset."
    ],

    note:
      "Caloric needs differ considerably between active hunting or sport-competing Kishu Ken and quieter companion adults. Consult a veterinarian for individualized feeding advice."
  },

  health: {
    overview:
      "The Kishu Ken is generally a hardy, structurally sound native Japanese breed with a typical life expectancy of 12 to 15 years and low observed rates of severe joint deformities. Available breed-health data highlights autoimmune, endocrine, ocular, and dermatological concerns as the primary priorities: environmental and food allergies (an owner-reported survey noted up to 30% experiencing skin inflammation and 40% patterned itching, typically starting between ages 1 and 3), genetic autoimmune thyroiditis leading to hypothyroidism (often surfacing after ages 5 to 6), Addison's disease (hypoadrenocorticism, typically emerging between ages 2 and 6), and occasional Systemic or Cutaneous Lupus Erythematosus (SLE/CLE). Pre-breeding screening prioritizes thyroid panels, specialist eye exams, and dentition verification alongside optional hip, elbow, and patella checks.",

    commonConditions: [
      "Environmental and food allergies (atopic/allergic dermatitis) — the most frequently reported everyday health concern in owner surveys (noting up to 30% skin inflammation and 40% patterned itching, typically beginning between 1 and 3 years of age), managed through diet adjustment, veterinary dermatology care, and careful outbred pairing",
      "Autoimmune thyroiditis (hypothyroidism) — an inherited immune-mediated inflammation of the thyroid gland that can lead to metabolic slowdown, weight gain, lethargy, coat thinning, and recurring skin infections (often appearing after ages 5 to 6); actively screened via periodic pre-breeding thyroid panels every 2 to 3 years",
      "Addison's disease (hypoadrenocorticism) — an autoimmune insufficiency of adrenal stress-hormone production typically presenting in adults aged 2 to 6 years (sometimes acutely as an emergency Addisonian crisis), managed lifelong with veterinary hormone therapy; diagnosed dogs are excluded from breeding",
      "Systemic and Cutaneous / Discoid Lupus Erythematosus (SLE / CLE) — serious autoimmune skin and systemic disorders manifesting as sores on the nose, mouth, or feet, localized hair loss, and severe recurring dermatitis; no predictive DNA test exists and affected dogs are excluded from breeding",
      "Hereditary eye disorders (including entropion and cataracts) and missing teeth — ocular conformation/lens issues and genetically missing teeth monitored through pre-breeding specialist ophthalmologist exams and adult dentition evaluations",
      "Joint precautions (patellar luxation, elbow dysplasia, and hip dysplasia) — currently reported at low rates in the breed, though elective pre-breeding orthopedic evaluations remain good practice",
      "Neu5Gc/Neu5Ac erythrocyte polymorphism — peer-reviewed molecular studies document genetic variation in red-blood-cell sialic acid expression among Japanese breeds including the Kishu Ken (primarily of veterinary haematological and comparative interest)"
    ],

    preventiveCare: [
      "Insist on full breeder transparency and documented pre-breeding clearances for both parents: thyroid evaluation (retested every 2 to 3 years), specialist veterinary ophthalmologist eye examination, adult dentition verification, DNA repository/diversity screening, and any available hip, elbow, and patella evaluations.",
      "Schedule annual veterinary wellness exams including baseline blood chemistry and thyroid screening as the dog enters middle age, and seek prompt care for unexplained lethargy, vomiting, trembling, or collapse (potential Addison's warning signs).",
      "Monitor skin, ears, paws, and nose leather for chronic itching, sores, or dietary reactions, working early with a veterinarian if allergy or lupus-like signs arise.",
      "Maintain a lean working weight, regular toothbrushing, weekly ear checks, and strict year-round protection against ticks, fleas, heartworm, and internal parasites."
    ],

    recommendedScreenings: [
      "Autoimmune thyroiditis / thyroid panel evaluation prior to breeding (recommended to be repeated every 2 to 3 years)",
      "Ophthalmic examination by a board-certified veterinary ophthalmologist",
      "Veterinary adult dentition count / verification",
      "Genetic diversity / DNA repository screening, plus optional radiographic hip dysplasia, radiographic elbow dysplasia, and clinical patellar luxation evaluations"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste and schedule regular veterinary dental checks to maintain complete dentition, strong scissor-bite alignment, and healthy gums.",

    earCare:
      "Check the small, forward-tilted upright triangular ears weekly for wax buildup, dirt, or allergy-related redness, cleaning gently with a veterinarian-approved solution when needed.",

    skinCare:
      "Inspect the skin beneath the double coat during weekly brushing and seasonal coat blows for allergic redness, hot spots, facial/paw sores, or woodland ticks."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: false,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Experienced, confident dog owners who respect independent primitive Japanese spitz breeds and enjoy upbeat, reward-based training",
      "Active countryside or suburban households with tall, escape-proof fencing and time for daily trail hikes, nosework, agility, rally, or barn hunt",
      "Dedicated single-dog households seeking a deeply faithful, quiet, tidy, low-odour companion and alert watchdog",
      "Hunters or rural sportsmen appreciating the stealth, stamina, and grit of a historic mountain boar hound"
    ],

    notIdealFor: [
      "First-time dog owners or passive handlers expecting automatic, repetitive obedience",
      "Homes with small pets (cats, rabbits, rodents, or toy-breed dogs) or households with unsupervised young children",
      "Urban apartments without secure outdoor space or owners hoping for off-leash park walks",
      "People who dislike heavy seasonal undercoat shedding or households that leave a dog alone all day"
    ]
  },

  funFacts: [
    "In 1934, Japan designated the Kishu Ken a Living Natural Monument—and today it remains the most widely used purebred native Japanese dog for hunting wild boar in Japan.",
    "Before 1934, roughly 70 percent of Kishu Ken carried red, sesame, brindle, or heavily spotted coats; after solid coats were standardized, conspicuous markings vanished by 1945 and snowy white became the breed's signature hue because hunters could spot white dogs easily in dim mountain forests.",
    "The official police mascot of Japan's Wakayama Prefecture—the breed's historic homeland—is a white Kishu Ken character named 'Kishu-kun.'",
    "Rather than chasing game with noisy howling, a hunting Kishu Ken stalks silently like a cat across steep slopes and dense undergrowth before confronting wild boar.",
    "Its temperament is judged by three traditional Japanese concepts: 'kan'i' (spirited boldness and courage), 'ryosei' (good-natured docility and loyalty), and 'soboku' (unassuming, natural rustic charm)."
  ],

  faq: [
    {
      question: "What is a Kishu Ken?",
      answer:
        "The Kishu Ken (Kishu or Kishu Inu) is an ancient, medium-sized Japanese hunting spitz originating in the mountainous Kishu region (Wakayama and Mie Prefectures), declared a Japanese Living Natural Monument in 1934 and famous for quietly hunting wild boar."
    },
    {
      question: "How tall and heavy is a Kishu Ken?",
      answer:
        "Adult males stand 49 to 55 cm at the withers (ideally 52 cm) and adult females stand 46 to 52 cm (ideally 49 cm), with adults typically weighing between 30 and 60 pounds."
    },
    {
      question: "How long does a Kishu Ken live?",
      answer:
        "Generally a hardy, structurally sound breed, the Kishu Ken has an average life expectancy of 12 to 15 years with balanced nutrition and routine preventive veterinary care."
    },
    {
      question: "Are Kishu Ken always white?",
      answer:
        "No, though white is by far the most common modern colour. Solid red and sesame (an even blend of black, red, and white hairs) are also recognized."
    },
    {
      question: "Do Kishu Ken shed a lot, and how much grooming do they need?",
      answer:
        "Routine upkeep is easy—their harsh, odourless outer coat repels mud and needs weekly brushing between seasons. However, they blow their soft dense undercoat heavily once or twice a year, requiring frequent brushing and combing (or a bath and high-velocity blow-dry) during moults."
    },
    {
      question: "Can a Kishu Ken live in an apartment or with other pets?",
      answer:
        "Apartments are generally not ideal due to their high daily exercise needs and strong hunting energy; a house with a tall, escape-proof fenced yard is much better. Because of their intense prey drive and potential same-sex dog assertiveness, they are unsafe around small pets and generally thrive best as an only dog."
    },
    {
      question: "Are Kishu Ken good for first-time owners or easy to train?",
      answer:
        "No, they are best suited to experienced owners. While smart, clean, and eager to work for food rewards and a trusted bond during fast-paced positive sessions, they are independent, strong-willed, reserved with strangers, and cannot be trusted off-leash around wildlife."
    },
    {
      question: "What are the main health concerns for a Kishu Ken?",
      answer:
        "Joint deformities are currently uncommon, so the main breed health priorities are immune-mediated and dermatological: environmental and food allergies, autoimmune thyroiditis (hypothyroidism), Addison's disease, occasional lupus (SLE/CLE), hereditary eye issues such as entropion, and genetically missing teeth."
    }
  ],

  references: [
    "fci-kishu-official-standard",
    "fci-kishu-nomenclature",
    "jkc-kishu-breed-standard",
    "akc-kishu-ken-breed-profile",
    "nkkc-national-kishu-ken-club",
    "skk-kishu-breed-profile",
    "scc-kishu-breed-profile",
    "pmc-tanabe-2007-japanese-asian-dog-phylogeny",
    "pmc-cmah-2019-japanese-dogs-neu5gc",
    "wikimedia-kishu-ken-snow-crispette",
    "wikimedia-kishu-sesame2-canarian"
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
          id: "fci-kishu-official-standard",
          role: "verified",
          locator: "Standard heading: KISHU"
        },
        {
          id: "jkc-kishu-breed-standard",
          role: "verified",
          locator: "Japanese breed title: 紀州 / KISHU"
        },
        {
          id: "akc-kishu-ken-breed-profile",
          role: "verified",
          locator: "Official AKC FSS breed name: Kishu Ken"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified across FCI Standard No. 318, JKC, and AKC; Kishu Inu, Kishū-ken, Kishū Inu, and 紀州犬 are established Japanese romanizations and kanji."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kishu-official-standard",
          role: "verified",
          locator: "FCI-CLASSIFICATION: Group 5 Spitz and primitive type. Section 5 Asian Spitz and related breeds. Without working trial."
        },
        {
          id: "akc-kishu-ken-breed-profile",
          role: "verified",
          locator: "AKC Foundation Stock Service assigned to the Hound Group"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kishu-official-standard",
          role: "verified",
          locator: "ORIGIN: Japan; BRIEF HISTORICAL SUMMARY: mountainous districts in Kishu (Wakayama and Mie Prefecture)"
        },
        {
          id: "skk-kishu-breed-profile",
          role: "verified",
          locator: "Historik: Kishū (Kii) province on the Kii Peninsula of southeastern Honshu (Wakayama and Mie Prefectures)"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Country (Japan) and region (Kishu: Wakayama and Mie Prefectures, Kii Peninsula) verified from FCI Standard No. 318, JKC, and SKK."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kishu-official-standard",
          role: "verified",
          locator: "UTILIZATION (wild boar, formerly deer), BRIEF HISTORICAL SUMMARY (1934 Natural Monument, coat standardization), GENERAL APPEARANCE, IMPORTANT PROPORTIONS (10:11)"
        },
        {
          id: "fci-kishu-nomenclature",
          role: "verified",
          locator: "Definitive FCI acceptance date: 1982-02-01"
        },
        {
          id: "jkc-kishu-breed-standard",
          role: "verified",
          locator: "1934 colour unification and disappearance of spotted coats after 1945; predominance of white coats"
        },
        {
          id: "nkkc-national-kishu-ken-club",
          role: "verified",
          locator: "Most common native purebred wild-boar hunter in Japan; late 1960s US arrival and 1971 breeding in California and Massachusetts"
        },
        {
          id: "skk-kishu-breed-profile",
          role: "verified",
          locator: "Grouped with Kai and Shikoku among shika-inu; first Swedish registration in 2020"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Synthesized in original prose from FCI Standard No. 318, FCI Nomenclature, JKC, NKKC, and SKK."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kishu-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS (10:11), HEAD (broad forehead, abrupt stop, slight furrow, black nose with slight depigmentation accepted in white dogs, tight lips, scissor bite), EYES (nearly triangular, slightly upturned outer corners), EARS (small triangular forward-inclined prick), NECK, BODY, TAIL (high-set curled/sickle; hanging/short disqualified), LIMBS, FEET, GAIT (light and resilient), COAT (harsh straight outer, soft dense undercoat, longer on cheeks/tail), COLOUR (white, red, sesame), SIZE"
        },
        {
          id: "nkkc-national-kishu-ken-club",
          role: "verified",
          locator: "Oval chest 45-50% of height, 110-120° shoulder-to-upper-arm angle, seasonal coat shedding leaving summer coat nearly bare of undercoat"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "All proportions, facial structure, double coat, seasonal moults, solid colours, and disqualifications follow FCI Standard No. 318, JKC, and NKKC."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kishu-official-standard",
          role: "verified",
          locator: "SIZE: Height at withers: Males 52 cm, Females 49 cm, tolerance ± 3 cm (i.e., males 49–55 cm, females 46–52 cm)."
        },
        {
          id: "jkc-kishu-breed-standard",
          role: "verified",
          locator: "体高 牡：52㎝ 牝：49㎝ それぞれ上下各3㎝までとする (males 52 cm ± 3 cm, females 49 cm ± 3 cm)."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Preserved verbatim in published unit of centimetres (males 49 to 55 cm, ideal 52 cm; females 46 to 52 cm, ideal 49 cm) from country-of-origin JKC and FCI Standard No. 318 (2016/2017). (AKC separately publishes 19–22 inches overall)."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-kishu-ken-breed-profile",
          role: "verified",
          locator: "Weight: 30-60 pounds."
        },
        {
          id: "scc-kishu-breed-profile",
          role: "cited",
          locator: "SCC profile separately cites an unsexed approximate weight of 20 to 25 kg."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Neither FCI Standard No. 318 nor JKC publishes a weight range; stored verbatim in published unit of pounds (30 to 60 lb) from the AKC breed profile."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-kishu-ken-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12-15 years."
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified from AKC breed data; FCI Standard No. 318 omits lifespan."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-kishu-ken-breed-profile",
          role: "verified",
          locator: "Grooming: Sheds coat 1 to 2 times a year in heavy seasonal moults."
        },
        {
          id: "nkkc-national-kishu-ken-club",
          role: "verified",
          locator: "Full seasonal sheds diminish the undercoat and may leave the summer coat nearly bare of undercoat."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kishu-official-standard",
          role: "verified",
          locator: "Lips: Tight."
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Tight, clean lips prevent drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-kishu-official-standard",
          role: "verified",
          locator: "BEHAVIOUR / TEMPERAMENT: Dog of noteworthy endurance, showing nobility, dignity and naive feeling. The temperament is faithful, docile and very alert."
        },
        {
          id: "nkkc-national-kishu-ken-club",
          role: "verified",
          locator: "Temperament: Intrinsic Japanese qualities of kan'i (spirited boldness/courage), ryosei (good nature/docility), and soboku (unassuming natural charm)."
        },
        {
          id: "skk-kishu-breed-profile",
          role: "verified",
          locator: "Brave, deeply loyal to family, guards home, reserved with strangers, strong hunting drive requiring early socialization with people and dogs."
        },
        {
          id: "akc-kishu-ken-breed-profile",
          role: "verified",
          locator: "Barking Level: Only To Alert; supervision advised with young children and other dogs."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-kishu-ken-breed-profile",
          role: "cited",
          locator: "Alert, good-natured, confident; barks only to alert; reserved with strangers; strong prey drive"
        },
        {
          id: "skk-kishu-breed-profile",
          role: "cited",
          locator: "Demanding hunting and watchdog traits; reserved with strangers; loyal to family"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates reflecting documented family loyalty, quiet alert barking, stranger reserve, selective dog sociability, and strong independent hunting drive."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-kishu-ken-breed-profile",
          role: "cited",
          locator: "Seasonal moult bathing/high-velocity drying, occasional slicker/rubber brushing, daily exercise/mental stimulation, fast-paced upbeat food-motivated training, sports versatility"
        },
        {
          id: "skk-kishu-breed-profile",
          role: "cited",
          locator: "Easy-care double coat brushed during shedding; early socialization with people and other dogs"
        }
      ],
      verifiedOn: null,
      note:
        "General primitive Japanese-spitz care combining high daily exercise and upbeat reward-based training with seasonal-moult grooming."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-kishu-ken-breed-profile",
          role: "verified",
          locator: "Exercise: Requires daily exercise and mental stimulation; excels in agility, obedience, rally, nosework, Fast CAT, coursing ability tests, and barn hunt."
        },
        {
          id: "fci-kishu-official-standard",
          role: "verified",
          locator: "Dog of noteworthy endurance bred for mountain wild-boar hunting."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note:
        "Editorial daily activity range (60 to 90 minutes) reflecting the stamina of a mountain big-game hunting spitz."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "skk-kishu-breed-profile",
          role: "cited",
          locator: "Demanding hunting and watchdog with strong hunting instinct"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial assessment that strong hunting energy, climbing agility, and watchful instincts are much better suited to a house with a tall fenced yard than an apartment."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-kishu-ken-breed-profile",
          role: "cited",
          locator: "Active mountain hound benefiting from secure fenced space and daily exercise"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial assessment that a home with a tall, escape-proof fenced yard suits this agile hunting breed."
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "nkkc-national-kishu-ken-club",
          role: "verified",
          locator: "Winter coat longer and denser than summer coat; seasonal moults shed the undercoat fully for warm weather."
        },
        {
          id: "fci-kishu-official-standard",
          role: "verified",
          locator: "Mountainous Kii Peninsula origin and weatherproof double coat."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-kishu-ken-breed-profile",
          role: "cited",
          locator: "Faithful family-bonded breed needing daily mental and physical engagement"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-kishu-ken-breed-profile",
          role: "verified",
          locator: "Nutrition: Does well on high-quality kibble or balanced diet; some Kishu Ken show allergy-like skin reactions on high-starch or beef- and chicken-heavy diets."
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Diet-sensitivity guidance verified from AKC, paired with general active medium-breed nutrition principles."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Standard medium-breed canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "nkkc-national-kishu-ken-club",
          role: "verified",
          locator: "NAKC Health Statement: Generally healthy with little evidence of joint deformities; primary issues involve autoimmune system, eyes, and skin—owner survey reporting up to 30% skin inflammation and 40% patterned itching (onset ages 1–3), genetic Autoimmune Thyroiditis (often manifesting after ages 5–6; retest every 2–3 years), Addison's Disease (onset ages 2–6), and SLE/CLE."
        },
        {
          id: "akc-kishu-ken-breed-profile",
          role: "verified",
          locator: "Health: Lists Environmental & Food Allergies, Autoimmune Thyroiditis, Addison's Disease, SLE, Cutaneous and Discoid Lupus; recommends Patella, Hip, Elbow, Ophthalmologist, and Thyroid evaluations."
        },
        {
          id: "skk-kishu-breed-profile",
          role: "verified",
          locator: "Hälsa: Very small numbers outside Japan preclude broad European epidemiological surveys."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Synthesizes National Kishu Ken Club health statement, AKC profile, and SKK records without naming clubs or registries in user-facing text."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "nkkc-national-kishu-ken-club",
          role: "verified",
          locator: "Allergies (30% skin inflammation / 40% itching in owner survey), Autoimmune Thyroiditis (genetic), Addison's Disease, SLE/CLE, and genetically missing teeth"
        },
        {
          id: "akc-kishu-ken-breed-profile",
          role: "verified",
          locator: "Environmental & Food Allergies, Autoimmune Thyroiditis, Addison's Disease, SLE/Cutaneous/Discoid Lupus, and eye/joint screenings"
        },
        {
          id: "pmc-cmah-2019-japanese-dogs-neu5gc",
          role: "verified",
          locator: "PMC6842231 (2019): Molecular characterization of CMAH Neu5Ac/Neu5Gc erythrocyte polymorphism in Japanese native breeds including Kishu dogs"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Explicitly distinguishes parent-club-documented autoimmune/dermatological priorities (and owner-reported survey caveats) from low-incidence orthopedic checks and haematological polymorphism."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "nkkc-national-kishu-ken-club",
          role: "cited",
          locator: "Pre-breeding thyroid (retested every 2–3 years), eye, dentition, DNA banking, and breeder transparency"
        }
      ],
      verifiedOn: null,
      note: "General preventive veterinary care protocol tailored to Kishu Ken."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "nkkc-national-kishu-ken-club",
          role: "verified",
          locator: "CHIC required tests: OFA Thyroid evaluation (retest every 2–3 years), OFA Dentition count, OFA/CERF Eye evaluation; CHIC recommended: DNA repository/genetic screening; CHIC optional: Hip, Elbow, Patella (knee)."
        },
        {
          id: "akc-kishu-ken-breed-profile",
          role: "verified",
          locator: "Recommended Health Tests: Patella, Hip, Elbow, Ophthalmologist, and Thyroid evaluations."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Summarizes National Kishu Ken Club / OFA CHIC required and optional screenings without naming clubs or registries in user-facing prose."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-kishu-official-standard",
          role: "cited",
          locator: "Jaws/Teeth: Strong, with a scissor bite."
        },
        {
          id: "nkkc-national-kishu-ken-club",
          role: "cited",
          locator: "Genetically missing teeth penalized; adult dentition verification recommended."
        }
      ],
      verifiedOn: null,
      note: "Standard home and veterinary dental care guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-kishu-official-standard",
          role: "cited",
          locator: "Ears: Small, triangular, slightly inclining forward and firmly pricked."
        }
      ],
      verifiedOn: null,
      note: "Routine erect-ear inspection and cleaning guidance."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "nkkc-national-kishu-ken-club",
          role: "cited",
          locator: "Allergy skin inflammation/itching monitoring and SLE/CLE sore awareness"
        }
      ],
      verifiedOn: null,
      note: "General skin, seasonal-moult, and allergy-monitoring guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "skk-kishu-breed-profile",
          role: "cited",
          locator: "Demanding hunting and watchdog with strong hunting drive and stranger reserve"
        },
        {
          id: "akc-kishu-ken-breed-profile",
          role: "cited",
          locator: "Requires daily exercise, upbeat training, supervision with young children and other dogs"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability evaluations balancing deep family loyalty and tidy coat with strong prey drive, independent temperament, and need for experienced handling."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-kishu-official-standard",
          role: "verified",
          locator: "1934 Natural Monument designation; disappearance of marked coats after 1945"
        },
        {
          id: "nkkc-national-kishu-ken-club",
          role: "verified",
          locator: "Most common native purebred Japanese wild-boar hunting dog; Japanese concepts of kan'i, ryosei, and soboku"
        },
        {
          id: "akc-kishu-ken-breed-profile",
          role: "verified",
          locator: "Wakayama Prefecture police mascot 'Kishu-kun'"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified historical, cultural, and behavioural facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-kishu-official-standard",
          role: "verified",
          locator: "Origin (Kishu: Wakayama and Mie, Japan), 1934 Natural Monument, height (49-55 cm males / 46-52 cm females), accepted colours (white, red, sesame)"
        },
        {
          id: "akc-kishu-ken-breed-profile",
          role: "verified",
          locator: "Weight (30-60 lb), lifespan (12-15 years), seasonal moulting, upbeat food-motivated training, autoimmune conditions"
        },
        {
          id: "nkkc-national-kishu-ken-club",
          role: "verified",
          locator: "Allergies, autoimmune thyroiditis, Addison's disease, SLE/CLE, missing teeth, and low joint-deformity incidence"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "FAQ answers synthesize FCI Standard No. 318, JKC, AKC, and NKKC records without naming clubs or registries in user-facing prose."
    }
  },

  updatedOn: "2026-11-25"
};
