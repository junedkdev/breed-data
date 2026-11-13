import type { Breed } from "../schema/breed.types";

export const bouvier_des_flandres: Breed = {
  slug: "bouvier-des-flandres",
  name: "Bouvier des Flandres",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Vlaamse Koehond",
    "Flanders Cattle Dog",
    "Touchie",
    "Vuilbaard",
    "Dirty Beard",
    "Flandrischer Treibhund",
    "Boyero de Flandes"
  ],

  group:
    "Sheepdogs and Cattledogs (except Swiss Cattle Dogs); Section 1 — Sheepdogs (with working trial; also classified in the Herding, Working, and Pastoral groups)",

  origin: {
    country: "Belgium and France",
    region:
      "Flanders plain (straddling the Belgian-French border across West and East Flanders and French Flanders)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bouvier_des_Flandres.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Bouvier_des_Flandres.jpg",
      title: "Bouvier des Flandres.jpg",
      description:
        "An adult fawn-brindle Bouvier des Flandres standing in profile outdoors.",
      creator: "Lilly M",
      uploader: "Lilly M",
      capturedOn: "2007-06-16",
      uploadedOn: "2007-06-25",
      width: 2592,
      height: 1944,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Lilly M, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Bouvier_des_Flandres.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-12"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bouvier_des_Flandres_600.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Bouvier_des_Flandres_600.jpg",
      title: "Bouvier des Flandres 600.jpg",
      description:
        "A Bouvier des Flandres standing outdoors at a dog show.",
      creator: "Tomasz Sienicki",
      uploader: "Pmg",
      capturedOn: "2006-05-20",
      uploadedOn: "2006-05-21",
      width: 600,
      height: 489,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Tomasz Sienicki, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Bouvier_des_Flandres_600.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-12"
    }
  ],

  overview: {
    summary:
      "A rugged, powerfully built, and compact working cattle-droving and farm-guarding dog from Flanders, instantly recognized by its tousled, weatherproof rough double coat, heavy beard and moustache, fearless composure, and steadfast devotion to its family.",

    description:
      "The Bouvier des Flandres is a substantial, short-coupled, and heavily boned working dog combining immense physical strength and agility with calm, rational self-confidence. Developed by farmers and cattle merchants across the damp, windswept plains of Flanders to drive unruly herds, pull milk carts, and guard isolated homesteads, the dog exhibits a compact, squarely proportioned silhouette supported by muscular limbs and a deep, broad chest. Its signature tousled double coat consists of a harsh, dry, rough outer coat roughly 6 cm in length over a fine, dense, insulating undercoat, accented by shaggy eyebrows, a full moustache, and a thick beard that give the head an imposing, bearded expression. Dark, slightly oval eyes radiate intelligence, courage, and quiet attentiveness beneath high-set triangular ears. In domestic life, it is gentle, patient, and deeply loyal to its household while remaining a discerning, formidable protector against genuine threats.",

    history:
      "The breed emerged in the agricultural region of Flanders—spanning northern France and western Belgium—where monastic orders and local farmers bred rugged, all-weather working dogs capable of managing heavy livestock, pulling carts, and guarding farmsteads. By the nineteenth century, several regional strains existed, including the Paret, Moerman, and Roeselare types, before veterinary professor Adolphe Reul and dedicated Belgian and French breeders consolidated the population into a unified working type in 1910 and 1912. During World War I, Flanders became a devastated battlefield, and countless Bouviers perished while serving valiantly as ambulance dogs, dispatch messengers, and draft animals pulling machine-gun carts. The breed was rescued from near extinction largely through the survival of a celebrated Belgian army dog named Ch. Nic de Sottegem, from whom nearly all modern Bouviers descend. Today, the Bouvier des Flandres serves worldwide as a versatile working, police, search-and-rescue, and devoted family guardian dog.",

    originalPurpose:
      "Driving and managing cattle herds across Flanders, pulling farm and milk carts, turning churn wheels, and guarding rural farms and livestock against intruders.",

    currentRoles: [
      "Working cattle drover and farm guardian",
      "Police patrol, military sentry, and search-and-rescue dog",
      "Canine athlete in IPO/IGP protection sports, agility, tracking, carting, and herding trials",
      "Devoted family companion and vigilant home protector"
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
      "Abundant, tousled, rough, dry, and harsh double coat approximately 6 cm long over the body, slightly tousled without being woolly or curly, paired with a fine, dense, insulating undercoat; forming characteristic eyebrows, moustache, and beard on the head.",

    coatLength: "Medium",

    coatColors: [
      "Grey, brindle, or charbonné (fawn with black overlay)",
      "Fawn (ranging from light fawn to deep red-fawn with black mask)",
      "Salt and pepper",
      "Solid black (a small white star on the chest is tolerated)"
    ],

    sheddingLevel:
      "Low to moderate; the rough double coat traps most loose dead hair within the coat until brushed out weekly, with heavier seasonal undercoat shedding in spring and autumn",

    droolingLevel:
      "Low to moderate; dry, tight-fitting lips produce minimal drool, though the heavy beard holds water after drinking",

    distinctiveFeatures: [
      "Compact, short-coupled, square-proportioned working silhouette conveying substantial bone and muscular power without clumsiness",
      "Height at the withers of 62 to 68 cm for males (ideal 65 cm) and 59 to 65 cm for females (ideal 62 cm)",
      "Working weight of 35 to 40 kg for males and 27 to 35 kg for females in lean, athletic condition",
      "Tousled, rough, weather-resistant double coat roughly 6 cm long with heavy eyebrows, moustache, and beard",
      "Massive, well-proportioned head accentuated by facial furnishings, with parallel planes of skull and broad, tapering muzzle",
      "Complete, regular scissor bite with powerful jaws and strong, white, evenly set teeth",
      "Medium-sized, slightly oval dark brown eyes with black rims expressing bold intelligence and calm energy",
      "High-set, triangular drop ears carried close to the cheeks (or naturally triangular uncropped ears)",
      "Strong, muscular, slightly arched neck widening cleanly into well-laid-back shoulders without dewlap",
      "Deep chest extending down to the elbows with well-sprung ribs, a short, broad, muscular back, and firm loin",
      "High-set tail carried cheerfully in motion in line with the spine (some dogs are born with a natural bobtail)",
      "Straight, heavy-boned forelegs and powerful, well-angulated thighs with compact, round cat-like feet and dark nails"
    ]
  },

  temperament: {
    traits: [
      "Calm, balanced, and composed in everyday household life",
      "Deeply loyal, affectionate, and protective of family members",
      "Courageous, fearless, and resolute when defending home or loved ones",
      "Highly intelligent, observant, and quick to assess situations",
      "Reserved, aloof, and discerning with unfamiliar strangers without unprovoked aggression",
      "Patient, gentle, and steady companion for familiar, respectful children",
      "Strong-willed and independent problem-solver requiring confident leadership",
      "High working stamina and enthusiasm for purposeful physical tasks",
      "Natural herding and guarding instincts toward livestock and property",
      "Low indoor reactivity, conserving energy for genuine duties"
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
        "High; an energetic, endurance-driven working breed requiring daily sustained physical exercise and structured mental engagement",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Daily brisk trail walks, long hikes, and structured outdoor exploration",
        "Canine sports including herding trials, agility, tracking, carting, and IPO/IGP obedience",
        "Interactive fetch, tug-of-war, and nosework scent search games",
        "Free running and play sessions in a securely fenced yard",
        "Drafting and recreational cart-pulling once skeletal maturity is achieved"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Brush and comb thoroughly two to three times weekly using a slicker brush, pin brush, and wide-toothed metal comb down to the skin to remove dead undercoat and prevent painful mats from forming in the dense rough coat, beard, and leg furnishings.",

      bathing:
        "Bathe every six to eight weeks or when soiled, using a texturizing or gentle canine shampoo that preserves the harsh, weather-resistant outer coat; dry thoroughly down to the skin.",

      notes: [
        "Schedule professional or skilled home hand-stripping and scissoring every six to eight weeks to maintain the signature tousled working silhouette and prevent coat matting.",
        "Wash and dry the thick beard and moustache regularly after meals and drinking to prevent food buildup, moisture dermatitis, and odor.",
        "Inspect the drop ears weekly for hair growth inside the canal, wax buildup, or moisture, cleaning gently with an approved veterinary cleanser.",
        "Trim stray hair between the paw pads and trim heavy dark nails every two to three weeks.",
        "Brush teeth several times weekly with canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Moderate; highly intelligent, observant, and eager to work with a respected handler, yet strong-willed and easily bored by repetitive drills, requiring calm, consistent, reward-based leadership",

      tips: [
        "Use positive reinforcement, high-value food treats, and enthusiastic interactive play.",
        "Begin obedience, loose-leash walking, recall, and impulse-control training in early puppyhood before substantial adult strength develops.",
        "Establish clear, fair, and consistent household rules and property boundaries from day one.",
        "Never use harsh physical punishment or repetitive drilling, which cause this thoughtful working dog to become stubborn or defensive.",
        "Channel natural herding and guarding drives into structured dog sports, tracking, or obedience.",
        "Always exercise within a securely fenced property of at least five to six feet in height."
      ],

      socialization:
        "Introduce the puppy early, gradually, and positively to diverse people, calm vaccinated dogs of varied sizes, livestock, household noises, vehicles, and grooming handling. Early structured socialization is essential to ensure natural guardian reserve matures into calm, confident composure in public."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cool, wet, and temperate climates, where the harsh weatherproof double coat provides superior thermal protection",
        "Warm climates, provided indoor air conditioning, shade, and cool water are continuously available and vigorous exercise occurs during cool morning or evening hours"
      ],

      aloneTimeTolerance:
        "Moderate when given sufficient daily physical and mental exercise, though deeply bonded to its family and happiest when included in household activities."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for large active working breeds, with controlled calorie and mineral levels to support steady skeletal growth.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age, transitioning to two meals daily on a large-breed growth formula supporting steady bone development.",
      adult:
        "Two measured meals daily to support steady energy and reduce digestive discomfort.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output, joint support, and lean muscle retention."
    },

    guidelines:
      "Measure daily rations carefully using a digital kitchen scale or standard measuring cup, adjusting amounts to maintain a lean, muscular body silhouette where the ribs are easily felt beneath the thick rough coat. Divide daily food into two distinct meals, restrict vigorous running for at least one hour before and after eating to mitigate bloat risk, and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a lean, muscular body condition; excess weight places unnecessary mechanical stress on hips and elbows.",
      "Account for training treats within the total daily caloric allowance to prevent creeping weight gain.",
      "Rest the dog before and after meals to mitigate the risk of bloat (gastric dilatation-volvulus).",
      "Feed a large-breed puppy formula during growth; avoid calcium supplements unless prescribed by a veterinarian.",
      "Wipe the heavy facial beard after meals and water breaks.",
      "Transition between diet formulas gradually over five to seven days."
    ],

    note:
      "Caloric needs vary significantly based on working workload, growth stage, and outdoor temperature. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Bouvier des Flandres is a hardy, robust, and resilient working breed with a typical life expectancy of 10 to 12 years. Primary health considerations reflect its large, deep-chested working conformation, including orthopedic screening for hip and elbow dysplasia, ophthalmic examinations including gonioscopy for primary glaucoma and hereditary cataracts, cardiac evaluations for subvalvular aortic stenosis (SAS), and preventive precautions against gastric dilatation-volvulus (bloat) and laryngeal paralysis.",

    commonConditions: [
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints leading to osteoarthritis and stiffness, monitored through pre-breeding radiographic screening",
      "Elbow dysplasia — developmental abnormalities of the elbow joints that can cause forelimb lameness and secondary arthritis",
      "Primary glaucoma and goniodysgenesis — abnormal drainage angle development in the eye causing elevated intraocular pressure and potential vision loss, monitored through specialist gonioscopy and tonometry eye exams",
      "Subvalvular aortic stenosis (SAS) — a congenital narrowing below the aortic valve that restricts blood flow from the heart, monitored through veterinary cardiologist auscultation and echocardiography",
      "Gastric dilatation-volvulus (GDV / bloat) — an acute, life-threatening twisting and distension of the stomach in large deep-chested breeds, requiring emergency veterinary care",
      "Laryngeal paralysis — degeneration of nerves controlling the laryngeal cartilages in senior dogs, causing noisy breathing and exercise intolerance, manageable with veterinary care",
      "Hypothyroidism — reduced thyroid hormone production causing lethargy, weight gain, and coat changes, manageable with daily hormone replacement",
      "Hereditary cataracts and entropion — ocular conditions monitored through annual certified veterinary ophthalmologist examinations"
    ],

    preventiveCare: [
      "Confirm that breeding stock has certified radiographic clearances for hips and elbows, specialist cardiac evaluations, thyroid panels, and annual eye exams including gonioscopy.",
      "Feed two smaller meals daily and avoid vigorous exercise for at least one hour before and after eating to mitigate bloat risk.",
      "Maintain a lean, muscular body condition throughout growth and adulthood to minimize mechanical wear on joints.",
      "Inspect and clean the drop ears weekly, removing excess canal hair gently and drying moisture.",
      "Brush and comb the rough coat two to three times weekly to prevent mats and skin irritation.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation through an accredited national screening program prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "Annual ophthalmic examination including gonioscopy by a board-certified veterinary ophthalmologist",
      "Congenital cardiac examination including echocardiography by a veterinary cardiologist",
      "Thyroid panel evaluation prior to breeding"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste. The breed has strong jaws with a complete 42-tooth scissor bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the drop ears weekly for wax accumulation, excess canal hair, or redness. Clean gently using a veterinarian-recommended ear solution, drying the leather thoroughly.",

    skinCare:
      "Part the dense rough double coat weekly during brushing to inspect the skin for external parasites, mats, or moisture dermatitis around the beard. Regular undercoat combing promotes healthy skin airflow."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Experienced dog owners familiar with large, strong-willed working herding breeds and consistent leadership",
      "Active outdoor households, hikers, and canine sports enthusiasts involved in herding, agility, tracking, or carting",
      "Families with respectful children seeking a deeply loyal, calm, and protective companion",
      "Homes with a large, securely fenced yard of at least five to six feet in height",
      "Owners committed to regular coat brushing and professional grooming upkeep"
    ],

    notIdealFor: [
      "First-time dog owners or passive handlers unprepared for substantial physical strength and protective independence",
      "Apartment or small urban condominium dwellers without spacious outdoor yard access",
      "Individuals unwilling to dedicate time and budget to frequent brushing and trimming of a heavy rough coat",
      "Owners who leave a dog home alone in isolation for long workdays without companionship"
    ]
  },

  funFacts: [
    "In its native Flanders, the Bouvier des Flandres earned the affectionate local nicknames 'Touchie' and 'Vuilbaard' (meaning 'Dirty Beard'), celebrating its shaggy, mud-and-milk-streaked muzzle earned during long days driving cattle and pulling dairy carts.",
    "During World War I, the Flanders region was turned into a trench-warfare battleground that nearly wiped out the breed; the modern Bouvier owes its survival largely to a decorated Belgian army ambulance and messenger dog named Ch. Nic de Sottegem.",
    "Unlike many herding breeds that work silently or with high-pitched barks, the Bouvier des Flandres uses its massive chest and heavy shoulders to physically nudge stubborn cattle into place while staying calm and low-key.",
    "Despite its imposing size and heavy double coat, the Bouvier des Flandres is surprisingly light on its feet and is considered a low-shedding breed because its coarse outer coat traps loose undercoat hairs until brushed out.",
    "Some Bouvier des Flandres puppies are born naturally without a tail (natural bobtail), a recognized genetic trait noted in the official breed standard."
  ],

  faq: [
    {
      question: "What is a Bouvier des Flandres?",
      answer:
        "The Bouvier des Flandres is a large, rugged Belgian-French cattle-droving and working dog recognized for its tousled, weatherproof rough double coat, heavy beard and moustache, compact muscular build, and calm, protective family loyalty."
    },
    {
      question: "How tall and heavy is a Bouvier des Flandres?",
      answer:
        "Adult males stand 62 to 68 cm at the withers (ideal 65 cm) and weigh 35 to 40 kg, while adult females stand 59 to 65 cm (ideal 62 cm) and weigh 27 to 35 kg in lean, muscular working condition."
    },
    {
      question: "How long does a Bouvier des Flandres live?",
      answer:
        "With proper nutrition, controlled puppy growth, regular exercise, and preventive veterinary care, the breed typically enjoys a healthy lifespan of 10 to 12 years."
    },
    {
      question: "Do Bouvier des Flandres shed a lot, and how are they groomed?",
      answer:
        "They are low-to-moderate shedders because their rough outer coat traps loose undercoat hair rather than dropping it everywhere; however, they require thorough brushing two to three times weekly down to the skin to prevent mats and professional grooming every six to eight weeks."
    },
    {
      question: "Can a Bouvier des Flandres live in an apartment?",
      answer:
        "Generally no. Due to their large size, strong guarding instincts, and need for daily outdoor exercise, they thrive best in a house with a securely fenced yard."
    },
    {
      question: "Are Bouvier des Flandres good family pets and good with children?",
      answer:
        "Yes, with experienced families. They are famously gentle, patient, and protective with familiar children; however, because of their large size and guardian instincts, early socialization and supervision with visiting guests are important."
    },
    {
      question: "Is the Bouvier des Flandres suitable for first-time dog owners?",
      answer:
        "Generally no. The breed is intelligent, strong-willed, and physically powerful, requiring an experienced handler who can provide calm, consistent leadership and early training."
    },
    {
      question: "How much exercise does a Bouvier des Flandres need each day?",
      answer:
        "The breed requires 60 to 90 minutes of daily physical and mental activity, including brisk walks, trail hikes, fetch, and structured dog sports like tracking, herding, or carting."
    },
    {
      question: "What health screenings are recommended for breeding dogs?",
      answer:
        "Recommended pre-breeding screenings include radiographic evaluations for hip and elbow dysplasia, specialist veterinary cardiac exams, annual eye exams including gonioscopy for glaucoma, and thyroid evaluations."
    }
  ],

  references: [
    "fci-bouvier-des-flandres-official-standard",
    "fci-bouvier-des-flandres-nomenclature",
    "srsh-bouvier-des-flandres-standard",
    "scc-bouvier-des-flandres-profile",
    "akc-bouvier-des-flandres-breed-standard",
    "akc-bouvier-des-flandres-breed-profile",
    "the-kennel-club-bouvier-des-flandres-standard",
    "ofa-bouvier-des-flandres-chic-requirements",
    "wikimedia-bouvier-des-flandres-lilly-m",
    "wikimedia-bouvier-des-flandres-600-tomasz-sienicki"
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
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "Standard heading: BOUVIER DES FLANDRES / VLAAMSE KOEHOND"
        },
        {
          id: "fci-bouvier-des-flandres-nomenclature",
          role: "verified",
          locator: "Official nomenclature: BOUVIER DES FLANDRES (191), Flandrischer Treibhund, Boyero de Flandes"
        },
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "verified",
          locator: "History: Touchie, Vuilbaard (Dirty Beard), Flanders Cattle Dog"
        }
      ],
      verifiedOn: "2026-11-12",
      note: "Verified across FCI Standard No. 191, FCI Nomenclature, SRSH, and AKC."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 1 Sheepdogs and Cattledogs (except Swiss Cattle Dogs); Section 1 Sheepdogs; with working trial"
        },
        {
          id: "fci-bouvier-des-flandres-nomenclature",
          role: "verified",
          locator: "Group 1, Section 1 Sheepdogs, with working trial"
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
        }
      ],
      verifiedOn: "2026-11-12",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
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
          locator: "Countries of origin: Belgium, France"
        },
        {
          id: "srsh-bouvier-des-flandres-standard",
          role: "verified",
          locator: "Origine: Belgique et France (Flandres)"
        }
      ],
      verifiedOn: "2026-11-12",
      note: null
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
          locator: "Historique (1910/1912, Ch. Nic de Sottegem, Première Guerre mondiale) et utilisation"
        },
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "verified",
          locator: "About the Breed, History, and Roles"
        }
      ],
      verifiedOn: "2026-11-12",
      note:
        "Synthesized in original prose from FCI Standard No. 191, SRSH, SCC, and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS, HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE AND WEIGHT"
        },
        {
          id: "the-kennel-club-bouvier-des-flandres-standard",
          role: "verified",
          locator: "General Appearance, Head, Coat, Colour, Size"
        },
        {
          id: "akc-bouvier-des-flandres-breed-standard",
          role: "verified",
          locator: "General Appearance, Size, Proportion, Substance, Head, Coat, Color"
        }
      ],
      verifiedOn: "2026-11-12",
      note:
        "Compact square conformation, rough 6 cm tousled double coat, beard and moustache, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Height at the withers: From 62 to 68 cm for dogs (ideal 65 cm); From 59 to 65 cm for bitches (ideal 62 cm)."
        },
        {
          id: "srsh-bouvier-des-flandres-standard",
          role: "verified",
          locator: "Taille au garrot: Mâles 62-68 cm (idéal 65 cm); Femelles 59-65 cm (idéal 62 cm)"
        },
        {
          id: "the-kennel-club-bouvier-des-flandres-standard",
          role: "verified",
          locator: "Size: Height at withers: Dogs 62-68 cms (24.5-26.75 ins), Bitches 59-65 cms (23.25-25.5 ins)"
        }
      ],
      verifiedOn: "2026-11-12",
      note:
        "Preserved in published unit of centimetres (62–68 cm for males, ideal 65 cm; 59–65 cm for females, ideal 62 cm) exactly as specified in FCI Standard No. 191."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "Weight: Approximately 35 to 40 kg for dogs; Approximately 27 to 35 kg for bitches."
        },
        {
          id: "srsh-bouvier-des-flandres-standard",
          role: "verified",
          locator: "Poids: Mâles 35 à 40 kg; Femelles 27 à 35 kg"
        },
        {
          id: "scc-bouvier-des-flandres-profile",
          role: "verified",
          locator: "Poids: Mâle 35-40 kg, Femelle 27-35 kg"
        }
      ],
      verifiedOn: "2026-11-12",
      note:
        "Preserved in published unit of kilograms (35 to 40 kg for males and 27 to 35 kg for females) exactly as specified in FCI Standard No. 191."
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
          locator: "Longévité moyenne: 10 à 12 ans"
        }
      ],
      verifiedOn: "2026-11-12",
      note: "Supported by kennel club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (2/5 to 3/5) - Traps loose hair in rough coat"
        },
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "COAT: Rough, harsh outer coat with fine dense undercoat"
        }
      ],
      verifiedOn: "2026-11-12",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "Lips: Tight fitting, dry and well pigmented"
        },
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (2/5)"
        }
      ],
      verifiedOn: "2026-11-12",
      note: "Dry, tight-fitting lips produce low to moderate drooling."
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
          id: "the-kennel-club-bouvier-des-flandres-standard",
          role: "verified",
          locator: "Characteristics and Temperament: Calm, steady, courageous, intelligent"
        },
        {
          id: "akc-bouvier-des-flandres-breed-standard",
          role: "verified",
          locator: "Temperament: Equable, resolute, fearless, gentle"
        }
      ],
      verifiedOn: "2026-11-12",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        },
        {
          id: "the-kennel-club-bouvier-des-flandres-standard",
          role: "cited",
          locator: "Temperament and behavior guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented working cattle-droving temperament, strong family loyalty, and protective composure."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        },
        {
          id: "scc-bouvier-des-flandres-profile",
          role: "cited",
          locator: "Entretien du poil dur, brossage et exercice"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active working herding dog management with rough double-coat combing and beard hygiene protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "verified",
          locator: "Energy Level (4/5); Exercise Needs (4/5)"
        },
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "UTILIZATION: Cattle drover, farm guard and defense dog"
        }
      ],
      verifiedOn: "2026-11-12",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "the-kennel-club-bouvier-des-flandres-standard",
          role: "cited",
          locator: "Exercise requirements: Over 1 hour per day"
        },
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "cited",
          locator: "Daily exercise recommendations"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 60 to 90 minutes of daily activity reflects the exercise demands of an athletic, muscular working breed."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "cited",
          locator: "Large size, strong guarding instincts, and need for outdoor yard access"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial evaluation that large size, protective territorial vigilance, and exercise requirements make apartment living generally unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "verified",
          locator: "Exercise and secure fenced-yard recommendations (minimum five to six foot fence)"
        }
      ],
      verifiedOn: "2026-11-12",
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
          locator: "Weather adaptation: excels in cool and temperate climates"
        }
      ],
      verifiedOn: "2026-11-12",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "cited",
          locator: "Tolerates Being Alone: Moderate; people-oriented working companion"
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
          locator: "Nutrition: High-quality food formulated for large working breeds"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for large working breeds prone to rapid skeletal growth and bloat."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance and divided meals to mitigate bloat"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule for large breeds."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-bouvier-des-flandres-chic-requirements",
          role: "verified",
          locator: "CHIC Program requirements: Hip Dysplasia, Elbow Dysplasia, CAER Eye examination with gonioscopy, Cardiac evaluation, Thyroid evaluation"
        },
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "verified",
          locator: "Health overview: Hip and elbow dysplasia, glaucoma, SAS, bloat, and laryngeal paralysis"
        }
      ],
      verifiedOn: "2026-11-12",
      note:
        "Synthesizes national health registry screening protocols with kennel club veterinary profiles."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-bouvier-des-flandres-chic-requirements",
          role: "verified",
          locator: "Hip dysplasia, elbow dysplasia, glaucoma, subvalvular aortic stenosis (SAS), autoimmune thyroiditis"
        },
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "verified",
          locator: "Gastric dilatation-volvulus (bloat) and laryngeal paralysis"
        }
      ],
      verifiedOn: "2026-11-12",
      note:
        "Details documented genetic and conformational conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "cited",
          locator: "Routine care, bloat precautions, coat combing, and veterinary wellness checks"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to large rough-coated working dogs."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-bouvier-des-flandres-chic-requirements",
          role: "verified",
          locator: "CHIC Program required screenings: Radiographic Hip Dysplasia evaluation, Radiographic Elbow Dysplasia evaluation, CAER Eye examination with gonioscopy, Congenital Cardiac evaluation, Thyroid panel"
        }
      ],
      verifiedOn: "2026-11-12",
      note:
        "Screenings summarize published parent club and health registry protocols."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "cited",
          locator: "Jaws/teeth: strong white teeth, scissor bite, complete dentition"
        },
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "cited",
          locator: "Routine dental care"
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "cited",
          locator: "Ears: natural triangular drop ears carried close to head"
        },
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "cited",
          locator: "Ear hygiene and inspection"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for drop ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "cited",
          locator: "Skin: tight fitting without excessive looseness; rough tousled double coat"
        }
      ],
      verifiedOn: null,
      note: "General skin and rough-coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        },
        {
          id: "the-kennel-club-bouvier-des-flandres-standard",
          role: "cited",
          locator: "Characteristics and working lifestyle suitability"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, grooming demands, and guardian instincts."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "verified",
          locator: "'Touchie' and 'Vuilbaard' (Dirty Beard) nicknames, World War I rescue via Ch. Nic de Sottegem, low-shedding rough coat"
        },
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "Brief historical summary: Flanders cattle-droving heritage and natural bobtail occurrence"
        }
      ],
      verifiedOn: "2026-11-12",
      note: "Verified historical folklore and working heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-bouvier-des-flandres-official-standard",
          role: "verified",
          locator: "Origin, height (62-68 cm / 59-65 cm), weight (35-40 kg / 27-35 kg), and coat"
        },
        {
          id: "akc-bouvier-des-flandres-breed-profile",
          role: "verified",
          locator: "Lifespan (10-12 years), grooming, apartment living, owner experience, and exercise needs"
        },
        {
          id: "ofa-bouvier-des-flandres-chic-requirements",
          role: "verified",
          locator: "Recommended health screening panel (hips, elbows, heart, eyes/gonioscopy, thyroid)"
        }
      ],
      verifiedOn: "2026-11-12",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and health registry data without naming registries in prose."
    }
  },

  updatedOn: "2026-11-12"
};
