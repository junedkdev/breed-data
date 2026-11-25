import type { Breed } from "../schema/breed.types";

export const bouvier_des_flandres: Breed = {
  slug: "bouvier-des-flandres",
  name: "Bouvier des Flandres",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Vlaamse Koehond",
    "Flanders Cattle Dog",
    "Cow Dog of Flandres",
    "Vuilbaard",
    "Dirty Beard",
    "Toucheur de Boeuf",
    "Touchie",
    "Flandrischer Treibhund",
    "Boyero de Flandes"
  ],

  group:
    "Cattle-driving and farm-guarding working dogs (with working trial)",

  origin: {
    country: "Belgium and France",
    region:
      "Flanders (spanning western Belgium and northern France)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bouvier_des_Flandres036.JPG",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Bouvier_des_Flandres036.JPG",
      title: "Bouvier des Flandres036.JPG",
      description:
        "An adult Bouvier des Flandres outdoors showing its compact build, shaggy dark coat, and bearded head.",
      creator: "Yorick39",
      uploader: "Yorick39",
      capturedOn: "2010-10-11",
      uploadedOn: "2010-10-12",
      width: 4288,
      height: 3216,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Yorick39, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Bouvier_des_Flandres036.JPG. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-24"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bouvier_des_Flandres_in_a_garden.JPG",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Bouvier_des_Flandres_in_a_garden.JPG",
      title: "Bouvier des Flandres in a garden.JPG",
      description:
        "A bearded Bouvier des Flandres standing outdoors in a garden, showing its tousled rough double coat.",
      creator: "Vyperx1",
      uploader: "Vyperx1",
      capturedOn: "2009-05-05",
      uploadedOn: "2009-05-06",
      width: 1608,
      height: 1900,
      licenseId: "public-domain",
      attribution:
        "Photo by Vyperx1, Wikimedia Commons, Public Domain. Source: https://commons.wikimedia.org/wiki/File:Bouvier_des_Flandres_in_a_garden.JPG.",
      restrictions: null,
      metadataCheckedOn: "2026-11-24"
    }
  ],

  overview: {
    summary:
      "A sturdy, square-framed cattle drover and farm guardian from Flanders, known for its rough, weather-resistant double coat, full beard and moustache, level-headed courage, and steady devotion to its household.",

    description:
      "Built for hard agricultural labor in raw coastal weather, the Bouvier des Flandres pairs heavy bone and dense muscle with agile, ground-covering movement. Its body forms a compact square, supported by a deep ribcage, short loin, and straight, substantial legs. A harsh, dry outer coat roughly 6 cm long lies tousled over a close, fine undercoat, while thick eyebrows, a coarse moustache, and a heavy beard give the head its unmistakable rugged outline. Dark oval eyes framed by black rims convey calm judgment rather than nervous energy. At home, the breed is affectionate, patient, and quietly watchful, staying relaxed indoors while remaining a resolute deterrent if a real threat appears.",

    history:
      "Farmers, cattle merchants, and monastic estates across the borderlands of Belgian and French Flanders selected tough, practical farm dogs strictly for working ability—driving heavy herds, pulling milk carts, turning butter churns, and watching over rural homesteads. Early nicknames such as Vuilbaard (dirty beard), Koehond (cow dog), and Toucheur de Boeuf (cattle driver) reflected those daily chores. Regional types were first shown together in Brussels in May 1910, and breeders drafted a unified description in 1912. World War I devastated Flanders and nearly erased the breed, though individual dogs served bravely as ambulance, messenger, and cart-pulling army dogs; wartime veterinary officers such as Captain Barbry helped preserve surviving bloodlines, including the famed Nic de Sottegem, from which modern populations were rebuilt.",

    originalPurpose:
      "Driving and controlling cattle herds, hauling dairy and farm carts, turning churn wheels, and guarding homesteads across Flanders.",

    currentRoles: [
      "Livestock drover and rural property guardian",
      "Police patrol, military sentry, and search-and-rescue partner",
      "Competitor in obedience, tracking, herding, agility, and carting",
      "Loyal family companion and watchful home protector"
    ]
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "cm",
      male: {
        min: 62,
        max: 68
      },
      female: {
        min: 59,
        max: 65
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 35,
        max: 40
      },
      female: {
        min: 27,
        max: 35
      }
    },

    lifespanYears: {
      min: 10,
      max: 12
    },

    coatType:
      "Abundant, harsh, dry, slightly tousled outer coat roughly 6 cm long over a fine, dense, weatherproof undercoat, with shaggy eyebrows, a full moustache, and a thick beard.",

    coatLength: "Medium",

    coatColors: [
      "Grey",
      "Brindle",
      "Charbonné (smoky or black-overlaid coat)",
      "Uniform black (a small white star on the chest is tolerated)"
    ],

    sheddingLevel:
      "Low to moderate; the coarse outer coat catches most loose undercoat hair until combed out regularly, with heavier seasonal shedding in spring and autumn",

    droolingLevel:
      "Low to moderate; tight, dry lips limit saliva, though the heavy beard drips water after drinking",

    distinctiveFeatures: [
      "Compact, square-proportioned working body where body length closely matches height at the withers",
      "Withers height of 62 to 68 cm for males (ideal 65 cm) and 59 to 65 cm for females (ideal 62 cm)",
      "Lean working weight of roughly 35 to 40 kg for males and 27 to 35 kg for females",
      "Harsh, dry, tousled double coat about 6 cm long with heavy eyebrows, moustache, and beard",
      "Substantial head with a 3:2 skull-to-muzzle ratio, parallel top planes, and black-rimmed nose and lips",
      "Strong jaws with a regular scissor bite and healthy, evenly spaced white teeth",
      "Dark brown, slightly oval eyes with black rims expressing quiet intelligence and steady nerve",
      "High-set triangular drop ears carried close to the cheeks",
      "Muscular, slightly arched neck flowing cleanly into well-angled shoulders with no throatiness",
      "Deep chest reaching the elbows, well-sprung ribs, short broad back, and strong loin",
      "High-set tail carried gaily on the move; some dogs are born naturally tailless",
      "Heavy-boned straight forelegs, powerful hindquarters, compact round feet with dark nails, and a free, single-tracking fast trot"
    ]
  },

  temperament: {
    traits: [
      "Calm, even-tempered, and composed inside the home",
      "Deeply devoted and protective toward familiar household members",
      "Bold, fearless, and steady when confronting a genuine threat",
      "Clever, observant, and quick to read people and surroundings",
      "Naturally reserved with strangers without unprovoked hostility",
      "Gentle and patient with respectful children it knows well",
      "Independent thinker that thrives under fair, confident guidance",
      "High stamina and eagerness for purposeful outdoor work",
      "Strong instinctive drive to herd, patrol, and guard property"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 5,
      independence: 4,
      trainability: 4,
      barking: 3,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; an athletic working breed that needs daily sustained physical outings paired with structured mental tasks",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Brisk daily walks, trail hikes, and varied outdoor exploration",
        "Structured canine sports such as herding, tracking, agility, obedience, and carting",
        "Interactive retrieve, tug, and scent-search games",
        "Off-leash running and play inside a large, securely fenced yard",
        "Recreational draft work once adult bone and joint maturity is complete"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Brush thoroughly at least once or twice weekly—and more often in active outdoor dogs—using a slicker or pin brush followed by a large metal comb down to the skin to clear dead undercoat and stop mats from tightening in the beard, chest, and legs.",

      bathing:
        "Bathe every six to eight weeks or as needed with a mild canine shampoo that preserves the harsh outer texture, rinsing and drying thoroughly down to the skin.",

      notes: [
        "Have the coat professionally tidied, scissored, or stripped every six to eight weeks to keep the tousled working shape manageable and mat-free.",
        "Rinse and towel-dry the beard and moustache regularly after eating and drinking to avoid trapped food, odor, and damp skin irritation.",
        "Check drop ears every week for moisture, wax, or excess ear-canal hair, cleaning gently with a veterinarian-approved solution.",
        "Trim heavy nails every one to two weeks and keep excess hair neat between the paw pads.",
        "Brush teeth several times a week with enzymatic canine toothpaste."
      ]
    },

    training: {
      difficulty:
        "Moderate; bright and capable of advanced work, but independent enough to tune out repetitive drills unless guided with calm consistency and clear rewards",

      tips: [
        "Rely on positive reinforcement, valued food rewards, and engaging play sessions.",
        "Start leash manners, recall, and impulse control early in puppyhood before adult weight and pulling strength arrive.",
        "Set consistent, fair house rules from the first day so natural guarding instincts stay well directed.",
        "Avoid harsh corrections or monotonous repetition, which can make this thoughtful breed dig in its heels.",
        "Keep heavy jumping and long forced runs off-limits for growing puppies to protect developing joints.",
        "Provide a large, securely enclosed outdoor area for safe off-leash exercise."
      ],

      socialization:
        "Expose puppies early and positively to unfamiliar people, well-mannered dogs, varied surfaces, everyday noises, and full-body grooming handling. Thoughtful early socialization channels natural wariness into steady, confident public manners."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cool, damp, and temperate climates, where the harsh, insulating double coat excels outdoors",
        "Warmer climates only with reliable indoor air conditioning, shade, fresh water, and exercise scheduled during cool morning or evening hours"
      ],

      aloneTimeTolerance:
        "Moderate once daily exercise and mental work are met, though this people-oriented breed prefers being part of everyday family life rather than left isolated."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced nutrition tailored for large breeds, often with a somewhat lower protein level than many other large working dogs, matched to age and activity.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals per day until about six months old, then two daily meals on a large-breed growth diet that supports steady, unhurried skeletal development.",
      adult:
        "Two measured meals per day to sustain working energy and reduce stomach distension.",
      senior:
        "Two portion-controlled meals per day adjusted for slower metabolism, joint support, and healthy lean mass."
    },

    guidelines:
      "Measure every meal carefully and monitor body condition by feeling for the ribs beneath the dense coat, since thick hair easily hides weight gain. Split daily rations into two meals, keep vigorous running off-limits for at least an hour before and after feeding to help reduce bloat risk, and keep fresh water available at all times.",

    considerations: [
      "Many Bouviers thrive on a diet slightly lower in protein than other large breeds; confirm the ideal macronutrient balance with your veterinarian.",
      "Keep the dog lean and athletic so extra body weight does not strain the hips and elbows.",
      "Feed a large-breed puppy formula during growth and avoid unprescribed calcium supplements.",
      "Rest the dog before and after meals as a practical precaution against gastric dilatation-volvulus (bloat).",
      "Count training treats within the daily calorie budget and wipe the beard clean after meals.",
      "Make any diet transitions gradually over five to seven days."
    ],

    note:
      "Energy and protein needs shift with age, coat season, and daily workload. Work with a veterinarian to set exact portions and formula choices."
  },

  health: {
    overview:
      "The Bouvier des Flandres is generally robust and long-working, with a typical lifespan of 10 to 12 years. Documented breed health concerns span orthopedic, ocular, cardiac, neurological, and deep-chested conformational risks—including hip and elbow dysplasia, primary glaucoma and cataracts, subaortic stenosis, gastric dilatation-volvulus (bloat), laryngeal paralysis, hypothyroidism, and a breed-associated myopathy—making targeted pre-breeding screening essential.",

    commonConditions: [
      "Hip dysplasia — inherited joint malformation that can lead to painful osteoarthritis and hind-limb stiffness, screened with pre-breeding radiographs",
      "Elbow dysplasia — developmental elbow joint abnormalities causing forelimb lameness and secondary arthritis",
      "Glaucoma and cataracts — ocular disorders including elevated intraocular pressure (which can threaten sight rapidly) and lens clouding, monitored through specialist eye examinations",
      "Subaortic stenosis — a congenital narrowing below the heart's aortic valve that restricts blood flow, assessed by veterinary cardiac examination",
      "Gastric dilatation-volvulus (bloat) — an acute, life-threatening twisting of the gas-filled stomach seen in large, deep-chested breeds and requiring immediate emergency surgery",
      "Laryngeal paralysis — progressive nerve degeneration affecting the airway cartilages, typically in older dogs, leading to noisy breathing and heat or exercise intolerance",
      "Hypothyroidism — underactive thyroid hormone production causing sluggishness, weight gain, and coat thinning, managed with daily veterinary medication",
      "Additional documented conditions — less frequent but reported breed concerns include Bouvier des Flandres myopathy, megaesophagus, ectopic ureters, portosystemic shunt, epilepsy, and congenital deafness"
    ],

    preventiveCare: [
      "Verify that breeding parents have completed recommended orthopedic, cardiac, and specialist ophthalmologist clearances.",
      "Feed two smaller meals daily and avoid intense activity around mealtimes to lower bloat risk.",
      "Protect developing joints by avoiding heavy repetitive impact in puppies and keeping adults lean.",
      "Check and clean drop ears weekly and keep the dense coat combed down to the skin to prevent hidden mats or skin sores.",
      "Keep up with annual veterinary wellness exams, parasite control, and prompt checks for any eye redness, coughing, or breathing changes."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "Congenital cardiac examination by a qualified veterinary specialist",
      "Ophthalmologist eye examination (including glaucoma drainage-angle assessment where indicated)",
      "Thyroid panel evaluation if advised by a veterinarian or breeding program"
    ],

    dentalCare:
      "Brush teeth several times weekly with canine enzymatic toothpaste and schedule regular veterinary dental checks to keep the strong scissor bite and gums healthy.",

    earCare:
      "Inspect the drop ears weekly for wax, redness, odor, or excess hair inside the canal. Clean gently using a veterinarian-recommended cleanser and keep the ear flap dry.",

    skinCare:
      "Part the rough double coat down to the skin during weekly combing to check for parasites, tight mats, or damp skin irritation around the beard and neck."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Experienced owners comfortable guiding a large, strong-willed working dog with steady leadership",
      "Active households who enjoy hiking, outdoor routines, or dog sports such as tracking, herding, agility, and carting",
      "Families with respectful children looking for a calm, affectionate, and watchful companion",
      "Homes with a spacious, securely fenced yard",
      "Owners willing to commit time and budget to regular brushing and coat trimming"
    ],

    notIdealFor: [
      "First-time dog owners or tentative handlers unprepared for strong guarding instincts and adult physical strength",
      "Small apartments or homes without reliable outdoor space for daily exercise",
      "Households unwilling to keep up with weekly deep combing and regular grooming appointments",
      "People who leave a dog alone for long stretches every day"
    ]
  },

  funFacts: [
    "Flemish farmers affectionately called the breed Vuilbaard ('dirty beard') and Toucheur de Boeuf ('cattle driver') because its shaggy muzzle stayed dusted with mud, hay, and milk from daily farm work.",
    "World War I nearly wiped out the breed across its Flanders homeland, where Bouviers worked as ambulance, messenger, and cart-pulling army dogs before surviving lines were painstakingly rebuilt.",
    "Despite weighing up to 40 kg or more, the Bouvier des Flandres moves lightly enough to single-track at a fast trot, placing its feet near a single center line for efficient endurance.",
    "Its harsh outer coat traps most loose undercoat hair rather than scattering it across furniture, which is why thorough weekly combing matters so much to prevent matting.",
    "Some Bouvier des Flandres puppies are born naturally without a tail, a recognized inherited trait in the breed."
  ],

  faq: [
    {
      question: "What kind of dog is a Bouvier des Flandres?",
      answer:
        "It is a large, rugged cattle-driving and farm-guarding breed from Belgium and France, recognizable by its tousled rough double coat, heavy beard and moustache, square muscular build, and steady protective loyalty."
    },
    {
      question: "How big does a Bouvier des Flandres get?",
      answer:
        "Adult males stand 62 to 68 cm at the withers (ideal 65 cm) and weigh roughly 35 to 40 kg, while adult females stand 59 to 65 cm (ideal 62 cm) and weigh roughly 27 to 35 kg."
    },
    {
      question: "What is the average lifespan of a Bouvier des Flandres?",
      answer:
        "Most Bouviers live 10 to 12 years when supported with lean weight management, thoughtful puppy growth care, regular exercise, and routine veterinary checkups."
    },
    {
      question: "How much grooming does a Bouvier des Flandres require?",
      answer:
        "Expect regular upkeep: brush and comb down to the skin at least once or twice weekly to stop mats from forming in the dense undercoat, wipe the beard after meals and water, trim nails every one to two weeks, and schedule professional trimming every six to eight weeks."
    },
    {
      question: "Can a Bouvier des Flandres live comfortably in an apartment?",
      answer:
        "Usually no. Its large size, protective territorial awareness, and need for vigorous daily outdoor activity are much better suited to a house with a large, securely fenced yard."
    },
    {
      question: "Are Bouvier des Flandres good with families and children?",
      answer:
        "Yes, in experienced households. They are typically patient, gentle, and deeply loyal with children they know, though early socialization and adult supervision around visiting guests remain important."
    },
    {
      question: "Is a Bouvier des Flandres a good match for a first-time dog owner?",
      answer:
        "Generally no. This breed combines high intelligence with strong physical power and independent guardian instincts, so it does best with an experienced handler who provides calm, consistent training from puppyhood."
    },
    {
      question: "How much daily exercise does a Bouvier des Flandres need?",
      answer:
        "Plan on 60 to 90 minutes of daily physical and mental activity, such as brisk walks, hikes, fenced play, and structured dog sports like tracking, herding, agility, or carting, while limiting heavy impact in growing puppies."
    },
    {
      question: "What health screenings should breeders perform for a Bouvier des Flandres?",
      answer:
        "Core pre-breeding checks include hip and elbow radiographic evaluations, a specialist cardiac examination, and a veterinary ophthalmologist eye exam, with thyroid testing considered when advised by a veterinarian."
    }
  ],

  references: [
    "natureserve-canis-lupus-familiaris",
    "fci-bouvier-des-flandres-official-standard",
    "fci-bouvier-des-flandres-nomenclature",
    "srsh-bouvier-des-flandres-standard",
    "scc-bouvier-des-flandres-profile",
    "akc-bouvier-des-flandres-breed-standard",
    "akc-bouvier-des-flandres-breed-profile",
    "the-kennel-club-bouvier-des-flandres-standard",
    "ofa-bouvier-des-flandres-chic-requirements",
    "wikimedia-bouvier-des-flandres-lilly-m",
    "wikimedia-bouvier-des-flandres-600-tomasz-sienicki",
    "the-dog-api"
  ],

  evidence: {
    scientificName: {
      reliability: "reliable_source",
      sources: [
        {
          id: "natureserve-canis-lupus-familiaris",
          role: "verified",
          locator: "Canis lupus familiaris (Domestic Dog) taxonomic record"
        }
      ],
      verifiedOn: "2026-11-24",
      note:
        "Domestic dog taxonomic name verified via NatureServe Explorer."
    },

    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "Standard heading: BOUVIER DES FLANDRES / VLAAMSE KOEHOND"
        },
        {
          id: "fci-bouvier-des-flandres-nomenclature",
          role: "verified",
          locator: "Official nomenclature (No. 191): BOUVIER DES FLANDRES, VLAAMSE KOEHOND, FLANDRISCHER TREIBHUND, BOYERO DE FLANDES"
        },
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "verified",
          locator: "History: Vuilbaard (dirty beard), Koehond (cow dog), Toucheur de Boeuf / Pic"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names: Cow Dog of Flandres, Flanders Cattle Dog, Vlaamse Koehond"
        }
      ],
      verifiedOn: "2026-11-24",
      note:
        "Verified across FCI Standard No. 191, FCI Nomenclature, AKC breed profile, and The Dog API."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 1 Sheepdogs and Cattledogs (except Swiss Cattledogs); Section 2 Cattledogs (except Swiss Cattledogs); with working trial"
        },
        {
          id: "fci-bouvier-des-flandres-nomenclature",
          role: "verified",
          locator: "Group 1, Section 2 Cattledogs (except Swiss Cattledogs), with working trial"
        },
        {
          id: "akc-bouvier-des-flandres-breed-standard",
          role: "verified",
          locator: "Herding Group"
        },
        {
          id: "the-kennel-club-bouvier-des-flandres-standard",
          role: "verified",
          locator: "Working Group"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group: Herding"
        }
      ],
      verifiedOn: "2026-11-24",
      note:
        "Corrected FCI classification to Group 1, Section 2 (Cattledogs, except Swiss Cattledogs) with working trial; user-facing text omits registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "ORIGIN: Belgium / France; BRIEF HISTORICAL SUMMARY (Flanders)"
        },
        {
          id: "fci-bouvier-des-flandres-nomenclature",
          role: "verified",
          locator: "Countries of origin: BELGIUM, FRANCE"
        },
        {
          id: "srsh-bouvier-des-flandres-standard",
          role: "verified",
          locator: "Flanders borderland origins (Belgium and France)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: Belgium (Flanders region)"
        }
      ],
      verifiedOn: "2026-11-24",
      note:
        "FCI Standard No. 191 and FCI Nomenclature list both Belgium and France as countries of origin, superseding The Dog API's Belgium-only entry."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "srsh-bouvier-des-flandres-standard",
          role: "verified",
          locator: "Historique, utilisation, et caractère"
        },
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "verified",
          locator: "About the Breed, History (May 1910 Brussels exhibition, 1912 first standard, WWI service)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history"
        }
      ],
      verifiedOn: "2026-11-24",
      note:
        "Written in original prose grounded in FCI Standard No. 191, SRSH, SCC, and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS, HEAD, BODY, TAIL, LIMBS, COAT, COLOUR (grey, brindle, charbonné, uniform black; white star on chest tolerated; chocolate brown, white, pepper and salt, washed-out, and pale fawn to red disqualified)"
        },
        {
          id: "srsh-bouvier-des-flandres-standard",
          role: "verified",
          locator: "PROPORTIONS IMPORTANTES (3:2 skull-to-muzzle, square body), ROBE, COULEUR, DEFAUTS ENTRAINANT L'EXCLUSION"
        },
        {
          id: "akc-bouvier-des-flandres-breed-standard",
          role: "verified",
          locator: "General Appearance, Size, Proportion, Head (3:2 ratio), Coat (tousled ~2.5 in, natural taillessness not penalized), Gait (single-tracks at fast trot)"
        },
        {
          id: "the-kennel-club-bouvier-des-flandres-standard",
          role: "verified",
          locator: "General Appearance, Head, Coat, Colour, Size"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.coat_colors (lists broader unstandardized colour set)"
        }
      ],
      verifiedOn: "2026-11-24",
      note:
        "Coat colours follow FCI Standard No. 191 / SRSH (grey, brindle, charbonné, and uniform black with small white chest star tolerated; FCI disqualifies chocolate brown, white, pepper and salt, washed-out coats, and pale fawn to red, whereas AKC allows fawn and salt-and-pepper and The Dog API lists a much broader unstandardized colour list)."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Height at withers 62-68 cm for dogs (ideal 65 cm), 59-65 cm for bitches (ideal 62 cm), +/- 1 cm tolerance"
        },
        {
          id: "srsh-bouvier-des-flandres-standard",
          role: "verified",
          locator: "Taille au garrot: Mâles 62-68 cm (idéal 65 cm), Femelles 59-65 cm (idéal 62 cm)"
        },
        {
          id: "the-kennel-club-bouvier-des-flandres-standard",
          role: "verified",
          locator: "Size: Dogs 62-68 cms; Bitches 59-65 cms"
        },
        {
          id: "akc-bouvier-des-flandres-breed-standard",
          role: "cited",
          locator: "Height: Dogs 24.5-27.5 inches (ideal 26 in); Bitches 23.5-26.5 inches (ideal 25 in)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height: male 62-70 cm, female 60-67 cm"
        }
      ],
      verifiedOn: "2026-11-24",
      note:
        "Preserved in published centimetres from FCI Standard No. 191, SRSH, and Royal Kennel Club (62-68 cm males, 59-65 cm females), which supersede The Dog API's wider 62-70 / 60-67 cm range."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "Weight: Approximately 35-40 kg for dogs; approximately 27-35 kg for bitches"
        },
        {
          id: "scc-bouvier-des-flandres-profile",
          role: "verified",
          locator: "Poids: Mâle 35-40 kg, Femelle 27-35 kg"
        },
        {
          id: "the-kennel-club-bouvier-des-flandres-standard",
          role: "verified",
          locator: "Weight: Dogs 35-40 kgs; Bitches 27-35 kgs"
        },
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "cited",
          locator: "Weight: 70-110 pounds"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.weight: 32-50 kg (both sexes)"
        }
      ],
      verifiedOn: "2026-11-24",
      note:
        "Preserved in published kilograms from FCI Standard No. 191, SCC, and Royal Kennel Club (35-40 kg males, 27-35 kg females), superseding The Dog API's broader 32-50 kg range."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 10-12 years"
        },
        {
          id: "scc-bouvier-des-flandres-profile",
          role: "verified",
          locator: "Longévité: 10-12 ans"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span: 10-12 years"
        }
      ],
      verifiedOn: "2026-11-24",
      note: "Consistent across AKC, SCC, and The Dog API."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "verified",
          locator: "Grooming & Shedding: rough double coat traps loose hair until brushed"
        },
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "COAT: Harsh outer coat with fine dense undercoat"
        }
      ],
      verifiedOn: "2026-11-24",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "Lips: Tight fitting, dry, strongly pigmented"
        },
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level and beard care"
        }
      ],
      verifiedOn: "2026-11-24",
      note: "Dry, tight-fitting lips limit drooling, though facial hair holds water."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Calm and prudent, wise yet fearless; spirited expression showing intelligence, energy and audacity"
        },
        {
          id: "akc-bouvier-des-flandres-breed-standard",
          role: "verified",
          locator: "Temperament: Equable, resolute, fearless, gentle"
        },
        {
          id: "the-kennel-club-bouvier-des-flandres-standard",
          role: "verified",
          locator: "Characteristics and Temperament: Calm, steady, courageous, intelligent"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament: Loyal, intelligent, protective, courageous, calm, gentle"
        }
      ],
      verifiedOn: "2026-11-24",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics ratings"
        },
        {
          id: "the-kennel-club-bouvier-des-flandres-standard",
          role: "cited",
          locator: "Temperament and working traits"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1-5 scores reflecting verified working cattle-droving traits, strong household loyalty, and reserved guardian temperament."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "cited",
          locator: "Grooming (brush 1-2x/week with slicker/pin brush and comb, clean beard, nails every 1-2 weeks), Exercise, Training"
        },
        {
          id: "scc-bouvier-des-flandres-profile",
          role: "cited",
          locator: "Entretien du poil dur et exercice"
        }
      ],
      verifiedOn: null,
      note:
        "Combines kennel club grooming and exercise advice for large rough-coated working dogs."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "verified",
          locator: "Exercise: active working dog needing daily outings and enclosed space"
        },
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "UTILIZATION: Cattle drover, farm guard and defense dog"
        }
      ],
      verifiedOn: "2026-11-24",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "cited",
          locator: "Daily exercise guidance"
        },
        {
          id: "the-kennel-club-bouvier-des-flandres-standard",
          role: "cited",
          locator: "Working breed activity demands"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial estimate of 60 to 90 minutes per day for a healthy adult working dog."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "cited",
          locator: "Exercise: needs a large enclosed area"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial assessment based on adult size, territorial guarding instincts, and outdoor space needs."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "verified",
          locator: "Exercise: thrives with a large enclosed area"
        }
      ],
      verifiedOn: "2026-11-24",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "COAT: Weather-resistant rough double coat adapted to Flanders climate"
        },
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "verified",
          locator: "Weather adaptation and double-coat insulation"
        }
      ],
      verifiedOn: "2026-11-24",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "cited",
          locator: "Family-oriented companion traits"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "cited",
          locator: "Nutrition: requires a diet lower in protein than most other breeds; large-breed feeding guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Incorporates AKC breed profile guidance noting lower protein needs than many other breeds alongside standard large-breed bloat precautions."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "cited",
          locator: "Life-stage feeding and divided meals"
        }
      ],
      verifiedOn: null,
      note: "Standard large-breed life-stage meal schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "verified",
          locator: "Health: Recommended Health Tests (Hip, Elbow, Cardiac, Ophthalmologist) and documented breed conditions"
        },
        {
          id: "ofa-bouvier-des-flandres-chic-requirements",
          role: "verified",
          locator: "OFA CHIC health screening program for Bouvier des Flandres"
        }
      ],
      verifiedOn: "2026-11-24",
      note:
        "Distinguishes core orthopedic, cardiac, ocular, and deep-chested conformational risks from less frequent reported breed conditions."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "verified",
          locator: "Health conditions: hip dysplasia, elbow dysplasia, glaucoma, cataracts, subaortic stenosis, gastric dilatation/bloat, laryngeal paralysis, hypothyroidism, Bouvier des Flandres myopathy, megaesophagus, ectopic ureters, portosystemic shunt, epilepsy, deafness"
        },
        {
          id: "ofa-bouvier-des-flandres-chic-requirements",
          role: "verified",
          locator: "Breed health screening focus areas (hips, elbows, heart, eyes)"
        }
      ],
      verifiedOn: "2026-11-24",
      note:
        "Separates primary conformational and screened hereditary disorders from less frequent reported conditions."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "cited",
          locator: "Health, grooming, exercise, and puppy joint care guidance"
        }
      ],
      verifiedOn: null,
      note: "General preventive care for large, deep-chested, rough-coated working breeds."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "verified",
          locator: "Recommended Health Tests From the National Breed Club: Hip Evaluation, Elbow Evaluation, Cardiac Exam, Ophthalmologist Evaluation"
        },
        {
          id: "ofa-bouvier-des-flandres-chic-requirements",
          role: "verified",
          locator: "OFA CHIC health testing program for Bouvier des Flandres"
        }
      ],
      verifiedOn: "2026-11-24",
      note:
        "Reflects the four core National Breed Club recommended evaluations (hips, elbows, cardiac, ophthalmologist), with thyroid testing noted as an optional veterinary check."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "cited",
          locator: "Jaws/teeth: strong white teeth, scissor bite"
        },
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "cited",
          locator: "Routine dental hygiene"
        }
      ],
      verifiedOn: null,
      note: "Standard canine dental care guidance."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "cited",
          locator: "Ears: triangular drop ears carried close to the cheeks"
        },
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "cited",
          locator: "Routine ear inspection and cleaning"
        }
      ],
      verifiedOn: null,
      note: "Standard drop-ear hygiene guidance."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "cited",
          locator: "Skin: tight-fitting without looseness under rough double coat"
        }
      ],
      verifiedOn: null,
      note: "General skin and undercoat inspection guidance."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "cited",
          locator: "About the Breed, Temperament, Grooming, and Exercise"
        },
        {
          id: "the-kennel-club-bouvier-des-flandres-standard",
          role: "cited",
          locator: "Working breed characteristics"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability assessment based on size, grooming load, guarding instincts, and training needs."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "verified",
          locator: "History (Vuilbaard, Toucheur de Boeuf, WWI ambulance and messenger work) and Grooming"
        },
        {
          id: "akc-bouvier-des-flandres-breed-standard",
          role: "verified",
          locator: "Gait (single-tracks at fast trot) and Tail (natural taillessness not penalized)"
        },
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "Brief historical summary and natural taillessness note"
        }
      ],
      verifiedOn: "2026-11-24",
      note: "Verified breed history, gait, coat, and tail facts written in original prose."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "Origin, height (62-68 cm / 59-65 cm), weight (35-40 kg / 27-35 kg), coat"
        },
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "verified",
          locator: "Lifespan (10-12 years), grooming, enclosed yard needs, recommended health tests"
        },
        {
          id: "ofa-bouvier-des-flandres-chic-requirements",
          role: "verified",
          locator: "Breed health screening program"
        }
      ],
      verifiedOn: "2026-11-24",
      note:
        "FAQ answers synthesize verified kennel club standards and health screening guidance in original prose without naming registries."
    }
  },

  updatedOn: "2026-11-24"
};
