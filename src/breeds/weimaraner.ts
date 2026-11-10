import type { Breed } from "../schema/breed.types";

export const weimaraner: Breed = {
  slug: "weimaraner",
  name: "Weimaraner",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Grey Ghost",
    "Weimaraner Vorstehhund",
    "Braque de Weimar",
    "Braco de Weimar"
  ],

  group:
    "Gundogs; Section 1.1 — Continental Pointing Dogs, Type 'Braque' (with working trial; also classified in the Sporting and Gun Dog groups)",

  origin: {
    country: "Germany",
    region:
      "Thuringia, central Germany (specifically bred at the Grand Ducal Court of Weimar)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Weimaraner_female.JPG",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Weimaraner_female.JPG",
      title: "Weimaraner female.JPG",
      description:
        "An adult female short-haired Weimaraner standing in profile outdoors.",
      creator: "Pleple2000",
      uploader: "Pleple2000",
      capturedOn: "2008-10-05",
      uploadedOn: "2008-10-18",
      width: 2400,
      height: 1800,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Pleple2000, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Weimaraner_female.JPG. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Weimaraner_600.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Weimaraner_600.jpg",
      title: "Weimaraner 600.jpg",
      description: "A Weimaraner standing outdoors at a dog show.",
      creator: "Tomasz Sienicki",
      uploader: "Pmg",
      capturedOn: "2006-05-20",
      uploadedOn: "2006-05-21",
      width: 600,
      height: 489,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Tomasz Sienicki, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Weimaraner_600.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10"
    }
  ],

  overview: {
    summary:
      "A sleek, athletic, and aristocratic German pointing gundog, universally recognized by its striking silver-grey coat, piercing amber or blue-grey eyes, tireless hunting stamina, and shadow-like devotion to its handler.",

    description:
      "The Weimaraner is a medium-to-large, elegant pointing dog combining lean, sinewy muscular power with graceful, ground-covering athleticism. Built with a clean rectangular silhouette, deep chest, and firm topline, the hound was bred to work closely with huntsmen through demanding forests and fields. Its signature coat appears in two varieties—the classic sleek short coat and a rarer feathered long coat—displaying an unmistakable monochrome palette ranging from shimmering silver-grey to mouse-grey or roe-grey. The head is aristocratically proportioned with a moderate stop, dark flesh-toned or grey nose, long lobular drop ears, and light amber to blue-grey eyes that radiate acute intelligence and focus. Deeply bonded, emotionally sensitive, and energetic, the breed excels as an adaptable field gundog, an enthusiastic canine athlete, and a steadfast household companion that thrives on human companionship.",

    history:
      "The breed was developed during the early nineteenth century at the royal court of Grand Duke Karl August of Saxe-Weimar-Eisenach in Weimar, central Germany. Noble sportsmen crossed historical tracking scenthounds, including the ancient Bloodhound-descended St. Hubert hound and early red Schweisshunde, with versatile German pointing dogs to produce a multi-purpose noble hunting dog capable of tracking big game such as deer, bear, and wild boar. As large game populations dwindled across western Europe, the dogs were redirected toward feathered upland game and hare. In 1897, a dedicated breed club was formed in Germany with strict regulations that permitted breeding stock and puppies to be sold exclusively to certified foresters and active hunters. The breed was introduced to North America and the United Kingdom in the 1920s and 1930s, where its shimmering coat and stealthy field movement earned it the enduring moniker 'The Grey Ghost'.",

    originalPurpose:
      "Tracking and baying large forest game including red deer, wild boar, and bear, transitioning to versatile pointing, flushing, and water retrieving of upland game birds and hares.",

    currentRoles: [
      "Versatile pointing, flushing, and water-retrieving gundog",
      "Field trial and hunt test competitor",
      "Devoted household companion and personal protector",
      "Search, rescue, and tracking detection partner",
      "Canine athlete in agility, tracking, dock diving, and canicross"
    ]
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "cm",
      male: {
        min: 59,
        max: 70
      },
      female: {
        min: 57,
        max: 65
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 30,
        max: 40
      },
      female: {
        min: 25,
        max: 35
      }
    },

    lifespanYears: {
      min: 11,
      max: 14
    },

    coatType:
      "Occurs in two distinct varieties: short-haired (short, smooth, very dense, and sleek topcoat with little or no undercoat) and long-haired (soft, long topcoat with or without undercoat, smooth or slightly wavy, with silky feathering on the ears, rear of legs, underside of chest, and a plumed tail).",

    coatLength: "Short",

    coatColors: [
      "Silver-grey",
      "Roe-grey (fawn-grey)",
      "Mouse-grey",
      "Shades of grey intermediate between silver, fawn, and mouse (small white markings on the chest and toes are permissible)"
    ],

    sheddingLevel:
      "Moderate year-round shedding; the short single coat sheds fine hairs that are easily managed with regular weekly brushing",

    droolingLevel:
      "Low to moderate; lips are moderately deep with flesh-toned edges, producing minimal drool except occasionally around food or after vigorous exercise",

    distinctiveFeatures: [
      "Aristocratic, athletic, and balanced rectangular pointing dog build",
      "Height at the withers of 59 to 70 cm for males (ideal 62 to 67 cm) and 57 to 65 cm for females (ideal 59 to 63 cm)",
      "Weight of 30 to 40 kg for males and 25 to 35 kg for females in lean, conditioned working form",
      "Signature solid grey coat color occurring in silver, roe, or mouse shades, often lighter on the head and ears",
      "Striking, expressive light amber to hazel eyes in adults, appearing distinctive sky-blue in puppies",
      "Long, lean, and cleanly chiseled head with a slight median furrow and a moderate stop",
      "Dark flesh-coloured nose turning smoothly into grey towards the bridge, with wide open nostrils",
      "Complete scissor bite with powerful jaws and sound, evenly spaced teeth",
      "Broad, long, lobular drop ears set high, rounded at the tips, and reaching nearly to the corner of the mouth",
      "Deep, spacious chest extending down to the elbows with well-sprung oval ribs and a moderate tuck-up",
      "Tail set slightly below the topline, carried straight or slightly upward when alert (docked historically or left natural)",
      "Long, sinewy legs with compact, well-arched cat-like feet and webbed toes for swimming"
    ]
  },

  temperament: {
    traits: [
      "Alert, vigilant, and highly responsive to environmental cues",
      "Passionate, tireless, and determined field hunter with an exceptional nose",
      "Deeply affectionate, loyal, and shadow-like with family members",
      "Intelligent, quick-witted, and eager to learn complex tasks",
      "Protective and watchful of household boundaries and family circle",
      "Courteous yet reserved with unfamiliar strangers until properly introduced",
      "Playful and sturdy companion for familiar children",
      "High prey drive toward small wild mammals, birds, and running animals",
      "Sensitive to handler emotional tone and unresponsive to harsh corrections",
      "Prone to separation distress if isolated for long periods without companionship"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 4,
      independence: 2,
      trainability: 5,
      barking: 3,
      energy: 5
    }
  },

  care: {
    exercise: {
      level:
        "Very high; an athletic, high-stamina hunting pointer requiring vigorous daily physical exertion and demanding mental problem-solving to maintain indoor serenity",

      minutesPerDay: {
        min: 90,
        max: 120
      },

      activities: [
        "Daily long-distance trail running, jogging, or brisk hiking on natural terrain",
        "Field pointing, tracking, and upland retrieving training",
        "Water retrieving and swimming in lakes or safe open water",
        "Canine sports including agility, dock diving, tracking, and canicross",
        "Interactive fetch, long-range ball retrieving, and flirt-pole chase games in a secure area",
        "Scent-work challenges, complex obedience drills, and puzzle-toy enrichment"
      ]
    },

    grooming: {
      level: "Low to moderate",

      brushing:
        "Brush once or twice weekly with a rubber curry comb, hound mitt, or soft bristle brush to remove loose dead hairs and maintain skin oils; the long-haired variety requires combing two to three times weekly to keep feathering tangle-free.",

      bathing:
        "Bathe every six to eight weeks or when soiled after muddy field hunts, using a gentle canine shampoo.",

      notes: [
        "Inspect the long drop ears weekly for moisture, wax buildup, or debris, especially after swimming or field hunts, drying the canals thoroughly.",
        "Check webbed paws, pads, and toes after running in thick brush or rocky ground for cuts, burrs, or embedded thorns.",
        "Trim fast-growing nails every two to three weeks to maintain correct compact foot structure.",
        "Brush teeth several times weekly using dog-specific enzymatic toothpaste.",
        "Wipe down the short coat with a damp chamois or microfiber cloth after outdoor excursions to remove dust and restore a brilliant sheen.",
        "Provide soft, orthopedic bedding indoors, as the sleek coat and lean frame make pressure points prone to elbow calluses on hard surfaces."
      ]
    },

    training: {
      difficulty:
        "Moderate; exceptionally intelligent, biddable, and eager to please, but strong-willed, easily bored, and highly energetic, requiring calm, consistent, and reward-based leadership",

      tips: [
        "Use positive reinforcement, high-value food rewards, and enthusiastic praise.",
        "Begin obedience, loose-leash walking, and impulse-control training from early puppyhood.",
        "Keep instructional lessons fast-paced, challenging, and varied to prevent mental boredom.",
        "Avoid harsh verbal reprimands or physical coercion, which cause this sensitive hound to lose trust and become stubborn.",
        "Always exercise within a securely fenced area of at least six feet in height; strong prey drive can prompt sudden pursuit of wildlife.",
        "Practice calm separation routines early to prevent intense velcro attachment from turning into destructive separation anxiety."
      ],

      socialization:
        "Introduce the puppy early, gradually, and positively to diverse people, friendly vaccinated dogs of varying sizes, livestock, novel surfaces, and busy environments. Early structured socialization tempers natural protective wariness and fosters an outgoing, self-assured companion."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Warm climates, provided indoor cooling, shade, fresh water, and exercise during cooler hours are available",
        "Cool climates, provided the dog lives indoors and wears a protective fleece during sub-zero winter weather"
      ],

      aloneTimeTolerance:
        "Low; intensely bonded to its family and famously nicknamed a 'velcro dog', prone to severe separation anxiety, vocal howling, and destructive chewing if left isolated for long workdays."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for large active sporting or working breeds, adjusted for age, activity level, and seasonal field exertion.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age, transitioning to two meals daily on a large-breed growth diet supporting steady skeletal development.",
      adult:
        "Two measured meals daily to support steady metabolism and minimize digestive discomfort.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output, joint support, and lean muscle retention."
    },

    guidelines:
      "Measure daily rations carefully using a digital kitchen scale or standard measuring cup, adjusting amounts to maintain a lean, athletic body silhouette where the ribs are easily felt. Divide daily food into two distinct meals, restrict vigorous running for at least one hour before and after eating to reduce bloat risk, and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a lean, muscular body condition; excess weight places unnecessary mechanical wear on hips and stifles.",
      "Account for training treats within the total daily caloric allowance to avoid creeping weight gain.",
      "Rest the dog before and after meals to mitigate the risk of bloat (gastric dilatation-volvulus).",
      "Avoid feeding high-fat table scraps that can trigger digestive upset or acute pancreatitis.",
      "Provide clean drinking water, especially during warm-weather hunting or training excursions.",
      "Transition between diet formulas gradually over five to seven days."
    ],

    note:
      "Caloric needs fluctuate substantially between sedentary home periods and intense autumn hunting seasons. Work with a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Weimaraner is a robust, athletic sporting dog with a typical life expectancy of 11 to 14 years. Developed through strict working standards, it has maintained good constitutional hardiness. Primary health considerations focus on risks associated with deep-chested sporting dogs—notably gastric dilatation-volvulus (GDV / bloat)—alongside orthopedic screening for hip and elbow dysplasia, hereditary ocular conditions, autoimmune thyroiditis, and rare neurological conditions such as hypomyelination (spinal dysraphism).",

    commonConditions: [
      "Gastric dilatation-volvulus (GDV / bloat) — an acute, life-threatening emergency in deep-chested breeds where the stomach distends with gas and twists on its mesenteric axis, requiring emergency surgical intervention; preventive prophylactic gastropexy is frequently discussed with veterinarians",
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints leading to osteoarthritis and hind-limb lameness, monitored through pre-breeding radiographic screening",
      "Elbow dysplasia — developmental abnormalities of the elbow joints causing forelimb lameness and secondary arthritis",
      "Hypomyelination / Spinal Dysraphism ('shaking puppy syndrome') — an inherited neurological disorder causing distinctive tremors and bunny-hopping in young puppies, screenable via DNA testing",
      "Autoimmune thyroiditis — immune-mediated destruction of the thyroid gland causing hypothyroidism, weight gain, lethargy, and coat thinning",
      "Entropion, distichiasis, and corneal dystrophy — eyelid and ocular conditions monitored through regular veterinary ophthalmologist examinations",
      "Chronic otitis externa — bacterial and yeast ear infections promoted by heavy drop ears that trap moisture after swimming",
      "Tricuspid valve dysplasia (TVD) and cardiac murmurs — congenital or acquired cardiac conditions evaluated via veterinary auscultation and echocardiography"
    ],

    preventiveCare: [
      "Confirm that breeding stock has certified radiographic hip and elbow clearances, DNA clearances, and current specialist eye and thyroid certifications.",
      "Feed two smaller meals daily and avoid vigorous running for at least one hour before and after eating to mitigate bloat risk.",
      "Inspect and thoroughly dry the drop ears after every swim or wet field hunt, wiping canals with an approved veterinary cleanser.",
      "Maintain a lean, muscular body condition throughout life to minimize mechanical wear on joints and ligaments.",
      "Administer consistent year-round parasite prevention against fleas, ticks, and heartworms.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation through an accredited national screening program prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist",
      "Autoimmune thyroiditis blood panel (free T4, TSH, and autoantibodies) prior to breeding",
      "DNA marker test for Spinal Dysraphism / Hypomyelination"
    ],

    dentalCare:
      "Brush teeth several times weekly using dog-specific enzymatic toothpaste. The breed has strong, wide jaws with a complete 42-tooth scissor bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the long drop ears weekly for wax buildup, moisture, or redness. Clean gently using a veterinarian-recommended ear solution, drying the leather and canal opening thoroughly after swimming.",

    skinCare:
      "Part the sleek coat weekly during brushing to inspect the skin for external parasites, scratches, or hot spots. Provide thick orthopedic bedding to protect pressure points over elbows and hocks from calluses."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Active outdoor households, trail runners, and hikers who can provide two hours of daily physical exercise",
      "Gundog sportsmen and hunters seeking an authentic, versatile pointing and retrieving partner",
      "Experienced dog owners familiar with high-energy sporting breeds and gentle leadership",
      "Homes with large, securely fenced yards of at least six feet in height",
      "Canine sports enthusiasts involved in agility, tracking, dock diving, or competitive obedience"
    ],

    notIdealFor: [
      "Sedentary individuals or first-time dog owners unprepared for high physical energy and intense attachment",
      "Apartment or condominium dwellers without access to extensive off-leash running areas",
      "Owners who leave a dog home alone in isolation for long workdays without company",
      "Households with loose small animals or pet rodents vulnerable to high hunting prey drive",
      "People seeking a casual, low-exercise backyard pet"
    ]
  },

  funFacts: [
    "The Weimaraner is famously nicknamed 'The Grey Ghost' (der Graue Geist), a tribute to its ethereal silver-grey coat, silent stealth in the field, and habit of shadow-like devotion right at its owner's heels.",
    "All Weimaraner puppies are born with striking sky-blue eyes, which gradually transition into their adult light amber, grey, or hazel eye color as they mature between six and twelve months of age.",
    "World-renowned contemporary artist and photographer William Wegman made the Weimaraner an international cultural sensation through his famous photographic portraits and video art featuring his dogs Man Ray, Fay Ray, and their descendants dressed in human costumes.",
    "In nineteenth-century Germany, the breed was so jealously guarded by the German aristocracy that breeding stock could only be purchased by members of the exclusive Weimaraner Club, who strictly limited membership to maintain purity and hunting ability.",
    "While the short-haired variety is globally well known, an official long-haired variety with silky feathering on the ears, legs, and tail has been recognized in Germany and international standards for over a century.",
    "Dwight D. Eisenhower kept a beloved Weimaraner named Heidi in the White House during his presidency in the 1950s, making the breed a recognized fixture on the American political scene."
  ],

  faq: [
    {
      question: "What is a Weimaraner?",
      answer:
        "The Weimaraner is an athletic, large-sized German pointing gundog known for its sleek silver-grey coat, amber eyes, high hunting stamina, and deeply devoted, shadow-like temperament."
    },
    {
      question: "Why is the Weimaraner called the 'Grey Ghost'?",
      answer:
        "The breed earned its nickname 'The Grey Ghost' from its shimmering monochrome grey coat, its stealthy and silent movement through hunting fields, and its famous habit of following its handler everywhere like a shadow."
    },
    {
      question: "How tall and heavy is a Weimaraner?",
      answer:
        "Adult males stand 59 to 70 cm at the withers and weigh 30 to 40 kg, while adult females stand 57 to 65 cm and weigh 25 to 35 kg, presenting a lean, powerful, and athletic build."
    },
    {
      question: "How long does a Weimaraner live?",
      answer:
        "With proper nutrition, regular exercise, and conscientious preventive veterinary care, the breed typically enjoys a healthy lifespan of 11 to 14 years."
    },
    {
      question: "Do Weimaraners shed a lot, and how are they groomed?",
      answer:
        "They shed moderately year-round. Their sleek short coat requires minimal grooming, needing only a weekly brushing with a rubber curry comb or bristle brush, occasional ear cleaning, and a wipe-down with a damp cloth to maintain coat sheen."
    },
    {
      question: "Can a Weimaraner live in an apartment?",
      answer:
        "No. Due to their immense exercise requirements, high energy, and deep need for physical activity, they are not suited to apartment living and thrive best in a home with a large, securely fenced yard."
    },
    {
      question: "Are Weimaraners good family pets and good with children?",
      answer:
        "Yes, with active families. They are loving, loyal, and playful with familiar children; however, because of their large size, exuberant energy, and tendency to jump when excited, interactions with toddlers should be supervised."
    },
    {
      question: "Why are Weimaraners prone to separation anxiety?",
      answer:
        "Historically bred to live in close personal contact with their noble handlers rather than in outdoor kennels, Weimaraners form intense, shadow-like attachments to their owners; without early crate training and calm separation practice, they can develop severe separation distress."
    },
    {
      question: "How much exercise does a Weimaraner need every day?",
      answer:
        "The breed requires 90 to 120 minutes of vigorous daily physical activity, including brisk runs, trail hiking, fetch, and mental challenges like tracking, agility, or obedience training."
    },
    {
      question: "What major health conditions affect the Weimaraner?",
      answer:
        "Primary health priorities include gastric dilatation-volvulus (bloat), hip and elbow dysplasia, autoimmune thyroiditis, eye disorders, and rare neurological conditions like spinal dysraphism."
    }
  ],

  references: [
    "fci-weimaraner-official-standard",
    "fci-weimaraner-nomenclature",
    "vdh-weimaraner-breed-standard",
    "weimaraner-klub-ev-breed-profile",
    "akc-weimaraner-breed-standard",
    "akc-weimaraner-breed-profile",
    "the-kennel-club-weimaraner-breed-standard",
    "ukc-weimaraner-breed-standard",
    "weimaraner-club-of-america-health",
    "ofa-weimaraner-chic-requirements",
    "wikimedia-weimaraner-female-pleple2000",
    "wikimedia-weimaraner-600-tomasz-sienicki"
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
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "Standard heading: WEIMARANER"
        },
        {
          id: "fci-weimaraner-nomenclature",
          role: "verified",
          locator: "Official nomenclature: WEIMARANER (99), Braque de Weimar, Braco de Weimar"
        },
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "History: Grey Ghost, Weimaraner Vorstehhund"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Verified across FCI Standard No. 99, FCI Nomenclature, VDH, and AKC."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 7 Pointing Dogs, Section 1.1 Continental Pointing Dogs, Type 'Braque', with working trial"
        },
        {
          id: "fci-weimaraner-nomenclature",
          role: "verified",
          locator: "Group 7, Section 1.1 Continental Pointing Dogs, with working trial"
        },
        {
          id: "akc-weimaraner-breed-standard",
          role: "verified",
          locator: "Sporting Group"
        },
        {
          id: "the-kennel-club-weimaraner-breed-standard",
          role: "verified",
          locator: "Gundog Group"
        },
        {
          id: "ukc-weimaraner-breed-standard",
          role: "verified",
          locator: "Gun Dog Group"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "ORIGIN: Germany; BRIEF HISTORICAL SUMMARY"
        },
        {
          id: "fci-weimaraner-nomenclature",
          role: "verified",
          locator: "Country of origin: Germany"
        },
        {
          id: "weimaraner-klub-ev-breed-profile",
          role: "verified",
          locator: "Geschichte und Ursprung am Hof von Großherzog Karl August von Sachsen-Weimar-Eisenach"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, IMPORTANT PROPORTIONS, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "weimaraner-klub-ev-breed-profile",
          role: "verified",
          locator: "Rasseportrait, Jagdgebrauch, Hof von Weimar und 1897 Vereinsgründung"
        },
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "About the Breed, History (Grand Duke Karl August, Grey Ghost moniker), and Roles"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Synthesized in original prose from FCI Standard No. 99, VDH, German parent club, and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE AND WEIGHT"
        },
        {
          id: "vdh-weimaraner-breed-standard",
          role: "verified",
          locator: "Musterbeschreibung: Kopf, Rute, Behang, Haarvarietäten, Farbe und Grössen"
        },
        {
          id: "akc-weimaraner-breed-standard",
          role: "verified",
          locator: "General Appearance, Size, Head, Eyes, Ears, Body, Tail, Coat, Color"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Conformation, rectangular build, short and long coat varieties, silver/roe/mouse grey coloration, amber eyes, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT: Height at the withers: Males: 59–70 cm (ideal 62–67 cm). Females: 57–65 cm (ideal 59–63 cm)."
        },
        {
          id: "vdh-weimaraner-breed-standard",
          role: "verified",
          locator: "Widerristhöhe: Rüden 59 bis 70 cm (Idealmass 62-67 cm); Hündinnen 57 bis 65 cm (Idealmass 59-63 cm)"
        },
        {
          id: "akc-weimaraner-breed-standard",
          role: "verified",
          locator: "Height: Height at the withers: dogs, 25 to 27 inches (approx. 63.5-68.5 cm); bitches, 23 to 25 inches (approx. 58.5-63.5 cm)"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Preserved in published unit of centimetres (59–70 cm for males, 57–65 cm for females) exactly as specified in the official FCI Standard No. 99 and VDH standard."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "Weight: Males: about 30 to 40 kg. Females: about 25 to 35 kg."
        },
        {
          id: "vdh-weimaraner-breed-standard",
          role: "verified",
          locator: "Gewicht: Rüden ca. 30 bis 40 kg; Hündinnen ca. 25 bis 35 kg"
        },
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "Weight: 70-90 pounds (males), 55-75 pounds (females)"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Preserved in published unit of kilograms (30 to 40 kg for males, 25 to 35 kg for females) exactly as specified in the official FCI Standard No. 99 and VDH standard."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 11-13 years (up to 14 years in health surveys)"
        },
        {
          id: "the-kennel-club-weimaraner-breed-standard",
          role: "verified",
          locator: "Longevity and health actuarial profile (10-14 years)"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Supported by kennel club and parent club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (3/5)"
        },
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "COAT: Short, smooth, very dense topcoat; moderate shedding"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (2/5)"
        },
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "Lips: Moderately deep flews, flesh-coloured, small fold at corner"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Moderately deep flews result in low to moderate drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Versatile, easily trained, passionate, systematic and persevering hunter, watchful but not aggressive"
        },
        {
          id: "vdh-weimaraner-breed-standard",
          role: "verified",
          locator: "Wesen: Vielseitig, führig, passioniert, verlässliche Suche, anhänglich"
        },
        {
          id: "akc-weimaraner-breed-standard",
          role: "verified",
          locator: "Temperament: Friendly, alert, fearless, obedient, great energy and drive"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        },
        {
          id: "the-kennel-club-weimaraner-breed-standard",
          role: "cited",
          locator: "Temperament and behavior guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented gundog temperament, high energy, and shadow-like attachment."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        },
        {
          id: "weimaraner-club-of-america-health",
          role: "cited",
          locator: "Care, health management, and exercise protocols"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active pointing gundog management with sleek coat grooming and bloat prevention protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "Energy Level (5/5); Exercise Needs (5/5)"
        },
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "UTILIZATION: Versatile hunting gundog with high stamina"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "the-kennel-club-weimaraner-breed-standard",
          role: "cited",
          locator: "Exercise: More than 2 hours per day"
        },
        {
          id: "akc-weimaraner-breed-profile",
          role: "cited",
          locator: "Exercise requirements for high-energy pointers"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 90 to 120 minutes of daily activity reflects the exercise demands of an athletic, high-stamina gundog."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "cited",
          locator: "Large size, extreme stamina, and exercise requirements"
        },
        {
          id: "weimaraner-club-of-america-health",
          role: "cited",
          locator: "Living environment recommendations: secure yard required"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial evaluation that very high energy, hunting stamina, and need for open movement make apartment living unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "Exercise and secure fenced-yard recommendations (minimum six-foot fence)"
        },
        {
          id: "weimaraner-klub-ev-breed-profile",
          role: "verified",
          locator: "Haltungsumfeld: Haus mit sicherem Garten oder forstlicher Auslauf"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "COAT: Short sleek coat with little or no undercoat"
        },
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "Weather adaptation: well-adapted to temperate and warm climates, needs coat in winter"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "Tolerates Being Alone: Low rating (1/5 to 2/5); prone to separation anxiety"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food, portion control, bloat precautions"
        },
        {
          id: "weimaraner-club-of-america-health",
          role: "cited",
          locator: "Feeding protocols and bloat prevention"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for large, deep-chested active pointing gundogs."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance and divided meals"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-weimaraner-chic-requirements",
          role: "verified",
          locator: "CHIC Program requirements: Hip Dysplasia, Eye Examination, Autoimmune Thyroiditis, optional Hypomyelination"
        },
        {
          id: "weimaraner-club-of-america-health",
          role: "verified",
          locator: "Health priorities: GDV (bloat), hip dysplasia, hypomyelination/spinal dysraphism, thyroid disease"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Synthesizes national parent club health data with health registry screening requirements."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "weimaraner-club-of-america-health",
          role: "verified",
          locator: "Gastric dilatation-volvulus (bloat), hip and elbow dysplasia, spinal dysraphism, eye conditions"
        },
        {
          id: "ofa-weimaraner-chic-requirements",
          role: "verified",
          locator: "Autoimmune thyroiditis and cardiac disease evaluations"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Details documented genetic and conformational conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "weimaraner-club-of-america-health",
          role: "cited",
          locator: "Preventive care, bloat precautions, prophylactic gastropexy discussion, and ear hygiene"
        },
        {
          id: "akc-weimaraner-breed-profile",
          role: "cited",
          locator: "Routine care and veterinary wellness"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to deep-chested pointing gundogs."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-weimaraner-chic-requirements",
          role: "verified",
          locator: "CHIC Program required screenings: Radiographic Hip Dysplasia evaluation, CAER Eye examination, Autoimmune Thyroiditis blood panel"
        },
        {
          id: "weimaraner-club-of-america-health",
          role: "verified",
          locator: "Pre-breeding testing protocols: Hips, elbows, eyes, thyroid, and spinal dysraphism DNA test"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Screenings summarize published parent club and health registry protocols."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "cited",
          locator: "Jaws/teeth: complete, regular and strong scissor bite"
        },
        {
          id: "akc-weimaraner-breed-profile",
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
          id: "fci-weimaraner-official-standard",
          role: "cited",
          locator: "Ears: broad and fairly long, lobular, rounded tips"
        },
        {
          id: "weimaraner-club-of-america-health",
          role: "cited",
          locator: "Ear canal cleaning and drying after water work"
        }
      ],
      verifiedOn: null,
      note: "Ear maintenance protocol for long drop ears prone to moisture retention."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "cited",
          locator: "Skin: strong, close-fitting, no dewlap"
        },
        {
          id: "weimaraner-club-of-america-health",
          role: "cited",
          locator: "Skin inspection and bedding padding"
        }
      ],
      verifiedOn: null,
      note: "General skin and coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        },
        {
          id: "the-kennel-club-weimaraner-breed-standard",
          role: "cited",
          locator: "Characteristics, lifestyle suitability, and exercise"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, exercise demands, and household adaptability."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "William Wegman fine-art photography (Man Ray, Fay Ray), Eisenhower White House dog Heidi, blue eyes at birth, Grey Ghost nickname"
        },
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "Brief historical summary: Grand Duke Karl August of Weimar, short and long coat varieties"
        },
        {
          id: "weimaraner-klub-ev-breed-profile",
          role: "verified",
          locator: "1897 Vereinsgründung und forstlicher Zuchtbetrieb"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Verified historical folklore and working heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-weimaraner-official-standard",
          role: "verified",
          locator: "Origin, size (59-70 cm / 57-65 cm), weight (30-40 kg / 25-35 kg), coat varieties, and colors"
        },
        {
          id: "akc-weimaraner-breed-profile",
          role: "verified",
          locator: "Grey Ghost moniker, puppy eye color, exercise needs, separation anxiety, and training"
        },
        {
          id: "ofa-weimaraner-chic-requirements",
          role: "verified",
          locator: "Recommended health screening panel and bloat prevention"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and parent club data without naming registries in prose."
    }
  },

  updatedOn: "2026-11-10"
};
