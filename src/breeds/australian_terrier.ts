import type { Breed } from "../schema/breed.types";

export const australian_terrier: Breed = {
  slug: "australian-terrier",
  name: "Australian Terrier",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Aussie",
    "Aussie Terrier",
    "Terrier Australien",
    "Terrier Australiano"
  ],

  group:
    "Terriers; Section 2 — Small-sized Terriers (without working trial)",

  origin: {
    country: "Australia",
    region: null
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Australian_Terrier_001_U.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Australian_Terrier_001_U.jpg",
      title: "Australian Terrier 001 U.jpg",
      description:
        "An adult Australian Terrier standing on grass, showing its sturdy low-set rectangular frame, harsh weatherproof double coat, protective neck ruff, soft topknot, and small erect pointed ears.",
      creator: "Lilly M",
      uploader: "Lilly M",
      capturedOn: "2007-07-01",
      uploadedOn: "2007-07-05",
      width: 2400,
      height: 1800,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Lilly M, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Australian_Terrier_001_U.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-25"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Australian_Terrier_Kr%C3%BCmel_in_der_Abendsonne.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Australian_Terrier_Kr%C3%BCmel_in_der_Abendsonne.jpg",
      title: "Australian Terrier Krümel in der Abendsonne.jpg",
      description:
        "An adult female Australian Terrier resting on a sunlit lawn, highlighting her keen dark oval eyes, long strong muzzle, silky topknot, and rugged rough-coated expression.",
      creator: "Ketterechts",
      uploader: "Ketterechts",
      capturedOn: "2014-09-07",
      uploadedOn: "2021-04-11",
      width: 4000,
      height: 3000,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Ketterechts, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Australian_Terrier_Kr%C3%BCmel_in_der_Abendsonne.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-25"
    }
  ],

  overview: {
    summary:
      "A plucky, low-set, and ruggedly self-assured small working terrier developed in nineteenth-century Australia, known for its untrimmed harsh coat, protective neck ruff, silky topknot, and loyal, adaptable companion temperament.",

    description:
      "One of the smallest of the working terriers, the Australian Terrier packs abundant grit, agility, and warmth into a sturdy, low-set frame that is distinctly longer than it is tall. Its long, strong head balances equal skull and muzzle lengths with a slight stop, dark brown to black oval eyes sparkling with alertness, tight dark-rimmed lips, a strong scissor bite, and small, pointed prick ears carried upright. A signature breed detail is the inverted V-shaped bare patch of black leather extending from the nose up the bridge of the muzzle, framed above by a soft, silky topknot that shields the eyes. Over the body lies an untrimmed, harsh, straight weatherproof double coat with a prominent protective ruff around the neck blending into a chest apron—historically shielding the dog from snake and vermin bites—appearing in rich blue-and-tan or clear solid red or sandy tones. Spirited, courageous, and bold outdoors yet notably even-tempered, affectionate, and people-oriented inside the home, the Australian Terrier adapts readily to both urban apartments and rural properties.",

    history:
      "The Australian Terrier holds the distinction of being the first native dog breed developed in Australia and one of the few terrier breeds established outside the United Kingdom. Its roots go back to small, rough-coated British shipboard ratters—including early ancestors of the Skye, Scotch, Cairn, Dandie Dinmont, and Black and Tan Terriers—that sailed with British colonists beginning with the First Fleet to guard scarce food stores from rodents. Adapting quickly to the harsh Australian bush, settlers selectively bred small, frugal, rough-coated working terriers equipped with thick neck ruffs to hunt vermin and snakes, keep watch over remote homesteads and goldfields claims, and bond closely with ranch children. The earliest written description of the breed was drafted in Victoria in 1887, initially specifying the classic blue-and-tan coat before clear sandy and red shades were also established. Formal recognition expanded internationally during the twentieth century, including full recognition in the United States in 1960 and definitive international recognition in June 1963. Today, the Australian Terrier remains a beloved, resilient companion and lively dog-sport competitor worldwide.",

    originalPurpose:
      "Controlling rats, rodents, and venomous snakes on ships, farms, and outback homesteads while serving as a vigilant watchdog and devoted family companion.",

    currentRoles: [
      "Devoted, lively family and apartment companion",
      "Alert household watchdog",
      "Versatile dog-sports competitor (agility, obedience, earthdog, rally, and barn hunt)",
      "Therapy dog"
    ]
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "in",
      male: {
        min: 10,
        max: 11
      },
      female: {
        min: 10,
        max: 11
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 15,
        max: 20
      },
      female: {
        min: 15,
        max: 20
      }
    },

    lifespanYears: {
      min: 11,
      max: 15
    },

    coatType:
      "Untrimmed, weatherproof double coat featuring a harsh, straight, dense outer coat approximately 2.5 inches long over a short, soft-textured undercoat that thickens in winter and lightens in summer. Softer furnishings form a definite protective ruff around the neck blending into an apron on the chest, light feathering on the forelegs, and a finer, softer silky topknot covering the top of the skull, while the muzzle, ears, lower legs, tail, and feet stay free of long hair.",

    coatLength: "Medium",

    coatColors: [
      "Blue and tan (dark blue, steel-blue, dark grey-blue, or silver-blue body with clearly defined rich tan—not sandy—on the face, ears, underbody, lower legs, feet, and around the vent; silver or lighter topknot)",
      "Solid red (any clear shade of solid red free of smuttiness or dark shading; lighter topknot acceptable)",
      "Solid sandy (any clear shade of solid sandy free of smuttiness or dark shading; lighter topknot acceptable)",
      "White markings on the chest or feet are penalized in all colours"
    ],

    sheddingLevel:
      "Low to moderate; the harsh, straight double coat sheds lightly year-round with moderate seasonal undercoat shedding, and regular combing removes loose dead hair cleanly",

    droolingLevel:
      "Low; tight, dark brown or black-rimmed lips on a clean, powerful muzzle prevent drooling",

    distinctiveFeatures: [
      "Sturdy, low-set, compact small working terrier distinctly longer in body than tall at the withers",
      "Height at the withers of 10 to 11 inches for both males and females",
      "Working adult weight typically ranging from 15 to 20 pounds",
      "Long, strong head with equal skull and muzzle lengths, flat skull, slight definite stop, and punishing jaws with a scissor bite",
      "Desirable inverted V-shaped hairless black leather patch extending from the nose up the bridge of the muzzle",
      "Small, dark brown to black oval eyes set well apart with black rims and a keen, intelligent expression",
      "Small, erect, pointed triangular ears set high yet well apart, kept free of long hair and sensitive in use",
      "Protective neck ruff extending down to the chest apron paired with a soft, silky topknot shielding the eyes",
      "Well-sprung ribs forming a chest reaching slightly below the elbows with a distinct forechest keel, level topline, and 90-degree shoulder-to-upper-arm angulation",
      "High-set tail carried upright without curling over the back (left natural where docking is restricted, or traditionally docked where permitted)",
      "Small, clean, compact cat-like feet with arched toes, thick pads, and strong short black nails driving a free, springy, forceful gait"
    ]
  },

  temperament: {
    traits: [
      "Spirited, alert, plucky, courageous, and self-assured",
      "Friendly, extroverted, affectionate, and deeply loyal to its immediate family",
      "More even-tempered and eager to please than many sharper traditional terriers",
      "Quick-witted, playful, and observant—making an attentive watchdog that promptly announces strangers without unprovoked human aggression",
      "Independent thinker with classic terrier curiosity and a persistent digging and ratting drive",
      "Intense instinct to chase rodents, squirrels, and small running animals outdoors",
      "Generally good with respectful children under supervision, though selective introductions are wise with unfamiliar dogs and household cats"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 4,
      protectiveness: 4,
      independence: 3,
      trainability: 4,
      barking: 4,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "Moderate to high; a lively, energetic small working terrier that stays happy and well-behaved with daily brisk walks, interactive indoor or outdoor play sessions, and mental stimulation",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Brisk daily neighbourhood or park walks on a secure leash (never loose in unfenced areas)",
        "Interactive fetch, tug, and indoor or outdoor puzzle games",
        "Supervised exploration in a securely fenced, dig-proof garden or yard",
        "Canine sports including agility, earthdog trials, obedience, rally, and barn hunt"
      ]
    },

    grooming: {
      level: "Low to moderate",

      brushing:
        "The harsh, weatherproof double coat naturally repels mud and dirt; comb and brush thoroughly two to three times a week using a pin brush and medium-toothed metal comb to pull out loose undercoat and prevent tangles in the ruff, apron, and soft topknot.",

      bathing:
        "Bathe only occasionally—every one to two months or when genuinely dirty—using a mild canine shampoo so you do not soften the harsh, weather-resistant outer coat.",

      notes: [
        "Avoid clipping the harsh body coat with electric clippers, which softens the texture and dulls the rich blue-and-tan or red colour; hand-strip or pluck dead outer hairs periodically and keep hair tidy on the ears, feet, and tail.",
        "Inspect the small erect ears weekly for wax buildup or debris.",
        "Trim strong black nails every two to three weeks so the small cat-like feet stay tight and balanced.",
        "Brush teeth daily or several times weekly using canine enzymatic toothpaste, as small terriers accumulate dental tartar quickly."
      ]
    },

    training: {
      difficulty:
        "Moderate; quick to learn and eager to engage, yet easily bored by dull repetition and independent enough to test inconsistent household boundaries",

      tips: [
        "Keep training sessions brief, upbeat, and varied using positive reinforcement, small treats, and toys; long repetitive drills cause this sharp terrier to tune out.",
        "Never allow an Australian Terrier to run loose in unfenced areas—its strong vermin-chasing drive can send it darting after a squirrel, rabbit, or cat far from home.",
        "Teach a dependable 'quiet' cue early in puppyhood to manage alert watchdog barking, particularly in apartments.",
        "Secure fences along the bottom edge, as classic earthdog instincts can inspire determined digging."
      ],

      socialization:
        "Early, positive exposure to unfamiliar visitors, gentle children, well-mannered dogs, and urban noises reinforces its friendly, outgoing disposition and helps smooth introductions with other household dogs."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate and four-season climates—evolved to adapt across Australia's varied conditions with a weatherproof outer coat and seasonal undercoat that thins out in summer",
        "Cool climates are handled comfortably during brisk walks thanks to its dense winter undercoat",
        "Warm weather is tolerated well when vigorous play is shifted to cooler hours with constant shade and fresh drinking water"
      ],

      aloneTimeTolerance:
        "Low to moderate; deeply people-oriented companions that settle indoors once exercised yet grow bored, vocal, or mischievous if left alone all day without company or mental outlets."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced small-breed dog food with moderate carbohydrate and fat balance suited to an active small terrier.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until roughly six months of age to support steady growth and stable blood sugar.",
      adult:
        "Two measured meals daily on a consistent schedule to support steady energy and healthy weight maintenance.",
      senior:
        "Two portion-controlled meals daily tailored for lower caloric needs, dental health, and metabolic wellness."
    },

    guidelines:
      "Measure every meal accurately with a scale or measuring cup and keep your Australian Terrier lean and muscular—obesity increases strain on the kneecaps and complicates metabolic health in a breed with a strong predisposition to diabetes mellitus. Watch carefully for sudden increases in thirst, frequent urination, or unexplained weight loss despite a good appetite, and contact a veterinarian promptly if they appear. Provide fresh drinking water continuously.",

    considerations: [
      "Maintain a strict lean body condition throughout life; count all training treats within the daily calorie budget.",
      "Avoid high-fat table scraps, which increase the risk of pancreatitis and can complicate diabetes risk.",
      "Choose appropriately sized small-breed kibble and avoid abrupt diet changes, transitioning gradually over five to seven days."
    ],

    note:
      "Because Australian Terriers carry a heightened predisposition to diabetes mellitus, discuss weight management, diet composition, and routine blood-glucose checks with your veterinarian."
  },

  health: {
    overview:
      "The Australian Terrier is generally a hardy, long-lived small working terrier with a typical life expectancy of 11 to 15 years. However, peer-reviewed veterinary epidemiology and genetics research clearly establish diabetes mellitus as the breed's single most notable hereditary health risk—ranking among the highest-risk breeds globally, with US studies documenting roughly 32 times the odds compared with mixed-breed dogs and linking risk to the insulin (INS) gene region and high breed-level genetic predisposition. Responsible pre-breeding screening focuses on clinical patellar luxation evaluations, board-certified veterinary ophthalmologist exams, and thyroid testing, alongside vigilance for Legg-Calvé-Perthes disease, skin or ear allergies, and small-breed dental disease.",

    commonConditions: [
      "Diabetes mellitus (adult-onset insulin-dependent) — the breed's defining scientifically documented predisposition, with US epidemiological data showing roughly 32 times greater risk than mixed-breed dogs; peer-reviewed genetic studies identify associations in the insulin (INS) gene region and broad breed-level genetic uniformity for susceptibility, requiring lifelong insulin therapy and dietary management if diagnosed",
      "Patellar luxation — intermittent slipping of the kneecap out of the femoral groove, a well-known small-terrier orthopaedic concern actively screened prior to breeding",
      "Hereditary eye disorders (including cataracts and Progressive Retinal Atrophy / PRA) — ocular conditions monitored through periodic specialist veterinary ophthalmologist examinations",
      "Hypothyroidism and autoimmune thyroiditis — endocrine thyroid underactivity monitored through pre-breeding thyroid panel screening",
      "Legg-Calvé-Perthes disease — aseptic necrosis of the femoral head occurring in young small-breed terriers (typically under one year of age), causing hind-limb lameness and often treatable with corrective surgery",
      "Environmental or food allergies, otitis externa, and small-breed periodontal disease — skin itchiness, ear inflammation, and rapid tartar buildup requiring routine preventive care"
    ],

    preventiveCare: [
      "Verify that both breeding parents hold documented pre-breeding clearances for patellar luxation, board-certified veterinary ophthalmologist eye exams, and thyroid function, and ask breeders about family history of diabetes mellitus.",
      "Schedule annual veterinary wellness examinations—including routine blood chemistry and urinalysis screening from middle age onward—and monitor closely for early signs of diabetes (excessive thirst, frequent urination, weight loss, or lethargy).",
      "Keep the dog lean and fit to minimise stress on kneecaps and hip joints.",
      "Brush teeth daily or several times weekly and schedule periodic veterinary dental cleanings.",
      "Maintain consistent vaccinations and year-round protection against ticks, fleas, heartworm, and internal parasites."
    ],

    recommendedScreenings: [
      "Clinical patellar luxation orthopedic evaluation by a veterinarian prior to breeding",
      "Ophthalmic examination by a board-certified veterinary ophthalmologist",
      "Thyroid panel evaluation prior to breeding",
      "Multi-generation pedigree review for family history of diabetes mellitus"
    ],

    dentalCare:
      "Brush teeth daily or several times weekly using canine enzymatic toothpaste and schedule regular veterinary dental checks, as small terriers are prone to early plaque and tartar buildup.",

    earCare:
      "Check the small, high-set erect triangular ears weekly for wax buildup, dirt, or allergy-related redness, cleaning gently with a veterinarian-approved solution when needed.",

    skinCare:
      "Part the harsh double coat during regular combing to inspect for dry patches, allergic skin redness, fleas, or ticks—avoiding frequent harsh shampooing that strips protective coat oils."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Apartment or house dwellers seeking a compact, adaptable, plucky small terrier with a big personality",
      "Families with respectful children and active seniors who enjoy brisk daily walks, interactive play, and a devoted watchdog",
      "Committed first-time owners willing to provide firm, upbeat, short training sessions and strict leash safety",
      "Dog-sport fans interested in earthdog, agility, obedience, rally, or barn hunt with a sturdy little athlete"
    ],

    notIdealFor: [
      "Homes with free-roaming pet rodents, rabbits, birds, or unfenced yards where chasing wildlife poses danger",
      "Keen ornamental gardeners unwilling to manage classic terrier digging instincts",
      "Households leaving a social companion alone all day without mental engagement or unable to guide alert barking",
      "Owners unwilling to monitor for chronic endocrine conditions such as diabetes mellitus in adulthood"
    ]
  },

  funFacts: [
    "The Australian Terrier is recognized as the very first dog breed developed in Australia—and one of the few members of the terrier family created outside the British Isles.",
    "Its thick neck ruff and chest apron were not bred merely for style: in nineteenth-century Australia, that dense protective collar helped shield the little terrier's throat while tackling rats and venomous bush snakes.",
    "A classic hallmark on mature Australian Terriers is a small inverted V-shaped hairless black leather patch extending from the nose partway up the bridge of the muzzle.",
    "When the breed entered the American registry in 1960, it became the first new terrier breed admitted there in 24 years.",
    "Peer-reviewed veterinary genetics studies rank the Australian Terrier alongside the Samoyed among the highest-risk breeds for naturally occurring diabetes mellitus, making the breed an important contributor to comparative canine and human diabetes research."
  ],

  faq: [
    {
      question: "What is an Australian Terrier?",
      answer:
        "The Australian Terrier ('Aussie') is a sturdy, low-set small working terrier—the first native breed developed in Australia—famous for its untrimmed harsh coat, protective neck ruff, soft topknot, and plucky, affectionate personality."
    },
    {
      question: "How tall and heavy is an Australian Terrier?",
      answer:
        "Adults stand 10 to 11 inches at the withers and typically weigh 15 to 20 pounds."
    },
    {
      question: "How long does an Australian Terrier live?",
      answer:
        "With lean nutrition, regular daily exercise, and proactive veterinary monitoring, the Australian Terrier typically lives 11 to 15 years."
    },
    {
      question: "Can an Australian Terrier live in an apartment?",
      answer:
        "Yes. Its compact 10 to 11 inch stature and adaptable nature fit apartment living very well, provided it gets 45 to 60 minutes of daily brisk walks and play alongside early training to manage alert watchdog barking."
    },
    {
      question: "Do Australian Terriers shed, and how much grooming do they need?",
      answer:
        "They are low-to-moderate shedders with an easy-care harsh weatherproof double coat that repels dirt well. Combing two to three times a week clears loose undercoat and prevents tangles in the ruff and topknot; avoid clipping the harsh body coat short."
    },
    {
      question: "Are Australian Terriers good with children and other pets?",
      answer:
        "They are loyal, playful, and typically wonderful with respectful children under supervision. Because of their strong vermin-hunting heritage, they should never be trusted loose around small rodents or rabbits, and careful introductions are important with cats and unfamiliar dogs."
    },
    {
      question: "Are Australian Terriers easy to train?",
      answer:
        "They are bright, alert, and eager to please during short, varied, reward-based sessions, though they bore easily with dull drills and keep a strong outdoor chasing instinct—meaning they should always stay leashed or securely fenced."
    },
    {
      question: "What are the main health concerns for an Australian Terrier?",
      answer:
        "Its most significant documented health risk is naturally occurring diabetes mellitus (requiring routine adult wellness checks and lean weight control). Other key concerns screened in breeding stock include patellar luxation (slipping kneecaps), hereditary eye disorders such as cataracts and PRA, thyroid disease, Legg-Calvé-Perthes disease, and small-breed dental tartar."
    }
  ],

  references: [
    "fci-australian-terrier-official-standard",
    "fci-australian-terrier-nomenclature",
    "dogs-australia-australian-terrier-profile",
    "akc-australian-terrier-official-standard",
    "akc-australian-terrier-breed-profile",
    "rkc-australian-terrier-breed-standard",
    "rkc-australian-terrier-breed-profile",
    "austtrust-australian-terrier-health",
    "pmc-mui-2020-australian-terrier-diabetes",
    "pmc-hess-2019-ins-diabetes-australian-terrier",
    "wikimedia-australian-terrier-001-u-lilly-m",
    "wikimedia-australian-terrier-krumel-ketterechts"
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
          id: "fci-australian-terrier-nomenclature",
          role: "verified",
          locator: "Official multilingual names: AUSTRALIAN TERRIER (EN/DE), TERRIER AUSTRALIEN (FR)"
        },
        {
          id: "dogs-australia-australian-terrier-profile",
          role: "verified",
          locator: "Common Australian nickname: Aussie"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified across FCI Nomenclature No. 8 and Dogs Australia; Aussie Terrier and Terrier Australiano are widely used colloquial/Spanish forms."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-australian-terrier-official-standard",
          role: "verified",
          locator: "FCI-CLASSIFICATION: Group 3 Terriers. Section 2 Small-sized Terriers. Without working trial."
        },
        {
          id: "akc-australian-terrier-official-standard",
          role: "verified",
          locator: "AKC Terrier Group official standard"
        },
        {
          id: "rkc-australian-terrier-breed-standard",
          role: "verified",
          locator: "Royal Kennel Club Terrier Group breed standard"
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
          id: "fci-australian-terrier-nomenclature",
          role: "verified",
          locator: "Country of origin of the breed: AUSTRALIA"
        },
        {
          id: "fci-australian-terrier-official-standard",
          role: "verified",
          locator: "BRIEF HISTORICAL SUMMARY: first breed developed in Australia"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Country of origin (Australia) verified from FCI Standard No. 8 and FCI Nomenclature No. 8."
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "FCI Standard No. 8, Dogs Australia, RKC, and AKC specify Australia as a whole without restricting the breed's origin to a single Australian state (although the first written standard was drafted in Victoria in 1887, early colonial development spanned multiple colonies)."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-australian-terrier-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY (first breed developed in Australia), GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "dogs-australia-australian-terrier-profile",
          role: "verified",
          locator: "History: First Fleet shipboard British ratters, snake/vermin hunting, goldfields watchdogs, 1887 Victoria first standard"
        },
        {
          id: "akc-australian-terrier-breed-profile",
          role: "verified",
          locator: "1960 AKC recognition (first terrier addition in 24 years)"
        },
        {
          id: "fci-australian-terrier-nomenclature",
          role: "verified",
          locator: "Definitive FCI acceptance date: 1963-06-20"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Synthesized in original prose from FCI Standard No. 8, Dogs Australia, AKC, and FCI Nomenclature No. 8."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-australian-terrier-official-standard",
          role: "verified",
          locator: "Size/Proportion/Substance, Head (equal skull/muzzle, inverted V hairless nose leather), Eyes, Ears, Bite (scissors), Neck/Topline/Body, Tail, Forequarters (90° shoulder angle, catlike feet), Hindquarters, Coat (2.5 in outer coat, soft topknot, ruff and apron), Color and Markings (blue and tan, solid red, solid sandy), Gait"
        },
        {
          id: "fci-australian-terrier-official-standard",
          role: "verified",
          locator: "Low-set sturdy rectangular build, harsh straight weatherproof double coat, white markings penalized, natural/docked high-set tail"
        },
        {
          id: "rkc-australian-terrier-breed-standard",
          role: "verified",
          locator: "Confirming untrimmed harsh coat, ruff extending to breastbone, silky topknot, and accepted colours"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "All proportions, 90° shoulder angulation, inverted V nose-bridge leather, 2.5-inch harsh coat, ruff/apron/topknot, and accepted colours follow the 2021 AKC Official Standard, FCI Standard No. 8, and 2025 RKC Standard."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-australian-terrier-official-standard",
          role: "verified",
          locator: "Size, Proportion, Substance: Size - Height 10 to 11 inches at the withers. Deviation in either direction is to be discouraged."
        },
        {
          id: "fci-australian-terrier-official-standard",
          role: "cited",
          locator: "Separately publishes desirable height of approximately 25 cm for dogs, with bitches slightly less (omitting female numeric bounds)."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Preserved verbatim in published unit of inches (10 to 11 in for both males and females) from the AKC Official Standard (2021). FCI Standard No. 8 and Dogs Australia note approximately 25 cm for dogs with bitches slightly less."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-australian-terrier-breed-profile",
          role: "verified",
          locator: "Weight: 15-20 pounds"
        },
        {
          id: "fci-australian-terrier-official-standard",
          role: "cited",
          locator: "Separately publishes desirable weight of approximately 6.5 kg for dogs, with bitches slightly less (omitting female numeric bounds)."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Preserved verbatim in published unit of pounds (15 to 20 lb) from the AKC breed profile, providing a complete range for both sexes. FCI Standard No. 8 and Dogs Australia note approximately 6.5 kg for dogs with bitches slightly less."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-australian-terrier-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 11-15 years"
        },
        {
          id: "rkc-australian-terrier-breed-profile",
          role: "verified",
          locator: "Lifespan: Over 12 years"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified from AKC breed profile and consistent with Royal Kennel Club longevity guidance."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "dogs-australia-australian-terrier-profile",
          role: "verified",
          locator: "Dense undercoat in winter, most of it dropped in summer; combing a few times weekly removes loose hair."
        },
        {
          id: "rkc-australian-terrier-breed-profile",
          role: "verified",
          locator: "Breed characteristics: Sheds Yes; Grooming more than once a week."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-australian-terrier-official-standard",
          role: "verified",
          locator: "Lips - Tight and dark brown or black-rimmed."
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Tight, clean dark-rimmed lips prevent drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-australian-terrier-official-standard",
          role: "verified",
          locator: "Temperament: Spirited, alert, courageous, and self-confident, with the natural aggressiveness of a ratter and hedge hunter; as a companion, friendly and affectionate. Faults - Shyness or aggressiveness toward people."
        },
        {
          id: "rkc-australian-terrier-breed-standard",
          role: "verified",
          locator: "Temperament: Friendly, extrovert, obedient and anxious to please. Lives happily in town or country. Not aggressive but courageous if attacked."
        },
        {
          id: "fci-australian-terrier-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Essentially a working terrier, but its loyalty and even disposition make it equally suitable as a companion dog."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-australian-terrier-breed-profile",
          role: "cited",
          locator: "Courageous, affectionate, spirited; high energy, alert watchdog, strong hunting instinct, careful dog introductions"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates reflecting documented affectionate, spirited, alert watchdog nature and classic terrier prey drive."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-australian-terrier-breed-profile",
          role: "cited",
          locator: "Dirt-repelling harsh double coat, daily play/exercise, never run loose due to chasing drive, short varied training sessions"
        },
        {
          id: "dogs-australia-australian-terrier-profile",
          role: "cited",
          locator: "Combing a few times weekly keeps coat free of loose hair"
        }
      ],
      verifiedOn: null,
      note:
        "General small working-terrier care combining daily brisk exercise and strict leash safety with regular combing and dental hygiene."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-australian-terrier-breed-profile",
          role: "verified",
          locator: "Exercise: Very active and requires regular daily play and exercise to prevent boredom."
        },
        {
          id: "rkc-australian-terrier-breed-profile",
          role: "verified",
          locator: "Breed characteristics: Exercise up to 1 hour per day."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "rkc-australian-terrier-breed-profile",
          role: "cited",
          locator: "Up to 1 hour daily exercise baseline"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial daily activity range (45 to 60 minutes) matching a lively, compact working terrier."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-australian-terrier-breed-profile",
          role: "verified",
          locator: "Breed characteristics: Size of home: Flat/Apartment."
        },
        {
          id: "rkc-australian-terrier-breed-standard",
          role: "verified",
          locator: "Temperament: Lives happily in town or country."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "rkc-australian-terrier-breed-profile",
          role: "verified",
          locator: "Size of garden: Small/medium garden."
        },
        {
          id: "rkc-australian-terrier-breed-standard",
          role: "verified",
          locator: "Lives happily in town or country."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "dogs-australia-australian-terrier-profile",
          role: "verified",
          locator: "Rough weatherproof coat with dense winter undercoat mostly dropped in summer; adaptable to Australian conditions."
        }
      ],
      verifiedOn: "2026-11-25",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-australian-terrier-breed-profile",
          role: "cited",
          locator: "Boredom leads to undesirable behaviour; thrives on daily family play and interaction"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "pmc-mui-2020-australian-terrier-diabetes",
          role: "cited",
          locator: "High breed risk of naturally occurring diabetes mellitus highlights weight and dietary awareness"
        }
      ],
      verifiedOn: null,
      note:
        "General small-breed veterinary nutrition guidance emphasizing lean body condition and awareness of diabetes risk."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Standard small-breed canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pmc-hess-2019-ins-diabetes-australian-terrier",
          role: "verified",
          locator: "J Hered 2019 (PMC6916661): Notes Australian Terriers are 32 times more likely than mixed-breed dogs to develop diabetes mellitus in the United States and identifies 5 Bonferroni-significant SNPs in the INS gene region associated with diabetes."
        },
        {
          id: "pmc-mui-2020-australian-terrier-diabetes",
          role: "verified",
          locator: "PLOS ONE 2020 (PMC7514011): Heritability and complex segregation analysis of naturally occurring diabetes in US-bred Australian Terriers showing genetic uniformity for diabetes-susceptibility genes."
        },
        {
          id: "austtrust-australian-terrier-health",
          role: "verified",
          locator: "ATCA/CHIC recommended pre-breeding screenings: Thyroid, patellar luxation, and congenital eye disease (including PRA); also documents Legg-Perthes disease."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Synthesizes peer-reviewed diabetes genetics studies and parent-club CHIC screening protocols without naming clubs or registries in user-facing text."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pmc-hess-2019-ins-diabetes-australian-terrier",
          role: "verified",
          locator: "Diabetes mellitus (32-fold elevated US risk vs. mixed breeds; INS gene region SNP associations)"
        },
        {
          id: "pmc-mui-2020-australian-terrier-diabetes",
          role: "verified",
          locator: "Genetic susceptibility to naturally occurring diabetes in Australian Terriers"
        },
        {
          id: "austtrust-australian-terrier-health",
          role: "verified",
          locator: "Patellar luxation, hereditary eye disorders (including PRA), thyroid disease, and Legg-Calvé-Perthes disease"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Explicitly stratifies peer-reviewed diabetes mellitus predisposition and CHIC-screened orthopaedic/ocular/endocrine disorders from general small-terrier allergy and dental precautions."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "austtrust-australian-terrier-health",
          role: "cited",
          locator: "Pre-breeding patella, eye, and thyroid clearances"
        },
        {
          id: "pmc-mui-2020-australian-terrier-diabetes",
          role: "cited",
          locator: "Adult monitoring for signs of diabetes mellitus"
        }
      ],
      verifiedOn: null,
      note: "General preventive veterinary care protocol tailored to Australian Terriers."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "austtrust-australian-terrier-health",
          role: "verified",
          locator: "ATCA/CHIC recommended screenings for Australian Terrier breeding stock: Patellar Luxation evaluation, Ophthalmic examination (OFA/ACVO eye certification), and Thyroid panel."
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "Summarizes ATCA/OFA CHIC health screening panel alongside family-history review for diabetes without naming registries or clubs in user-facing prose."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-australian-terrier-official-standard",
          role: "cited",
          locator: "Bite - Scissors with teeth of good size."
        }
      ],
      verifiedOn: null,
      note: "Standard small-breed home and veterinary dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-australian-terrier-official-standard",
          role: "cited",
          locator: "Ears - Small, erect and pointed; hair on ears kept very short."
        }
      ],
      verifiedOn: null,
      note: "Routine erect-ear inspection and cleaning guidance."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-australian-terrier-official-standard",
          role: "cited",
          locator: "Harsh straight outer coat with short soft undercoat."
        }
      ],
      verifiedOn: null,
      note: "General skin and double-coat combing guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "rkc-australian-terrier-breed-profile",
          role: "cited",
          locator: "Flat/apartment and small/medium garden suitability, up to 1 hour daily exercise"
        },
        {
          id: "akc-australian-terrier-breed-profile",
          role: "cited",
          locator: "Adaptable devoted companion with strong prey drive requiring strict leash/fence containment"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability evaluations balancing compact apartment adaptability and affectionate nature against vermin-chasing drive, digging, alert barking, and diabetes vigilance."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-australian-terrier-official-standard",
          role: "verified",
          locator: "First breed developed in Australia; one of the few terrier breeds developed outside the UK"
        },
        {
          id: "dogs-australia-australian-terrier-profile",
          role: "verified",
          locator: "Large ruff and chest apron protecting from snake bites in colonial Australia"
        },
        {
          id: "akc-australian-terrier-official-standard",
          role: "verified",
          locator: "Desirable inverted V-shaped hairless black leather patch extending up the nasal bridge"
        },
        {
          id: "akc-australian-terrier-breed-profile",
          role: "verified",
          locator: "1960 AKC admission as first new terrier breed in 24 years"
        },
        {
          id: "pmc-hess-2019-ins-diabetes-australian-terrier",
          role: "verified",
          locator: "Comparative diabetes genetics research alongside the Samoyed"
        }
      ],
      verifiedOn: "2026-11-25",
      note: "Verified historical, anatomical, and veterinary-research facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-australian-terrier-official-standard",
          role: "verified",
          locator: "Height (10-11 in), coat (2.5 in harsh outer coat), ruff, topknot, temperament"
        },
        {
          id: "akc-australian-terrier-breed-profile",
          role: "verified",
          locator: "Weight (15-20 lb), lifespan (11-15 years), prey drive, short training sessions"
        },
        {
          id: "rkc-australian-terrier-breed-profile",
          role: "verified",
          locator: "Apartment suitability and daily exercise"
        },
        {
          id: "pmc-hess-2019-ins-diabetes-australian-terrier",
          role: "verified",
          locator: "Elevated diabetes mellitus predisposition"
        },
        {
          id: "austtrust-australian-terrier-health",
          role: "verified",
          locator: "Patellar luxation, eye disease (cataracts/PRA), thyroid, and Legg-Calvé-Perthes disease"
        }
      ],
      verifiedOn: "2026-11-25",
      note:
        "FAQ answers synthesize AKC Official Standard, FCI Standard No. 8, RKC, AustTrust/ATCA, and peer-reviewed diabetes research without naming clubs or registries in user-facing prose."
    }
  },

  updatedOn: "2026-11-25"
};
