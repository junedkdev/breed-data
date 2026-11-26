import type { Breed } from "../schema/breed.types";

export const rat_terrier: Breed = {
  slug: "rat-terrier",
  name: "Rat Terrier",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Rattie",
    "American Rat Terrier",
    "RT"
  ],

  group:
    "Terriers (classified in the Terrier group)",

  origin: {
    country: "United States",
    region: null
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Amberina_the_Rat_Terrier.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Amberina_the_Rat_Terrier.jpg",
      title: "Amberina the Rat Terrier.jpg",
      description:
        "An adult pied Rat Terrier with a natural undocked tail outdoors, showcasing its compact muscular working build, smooth glossy short coat, blunt wedge-shaped head, and alert erect ears.",
      creator: "Jadenschaul",
      uploader: "Jadenschaul",
      capturedOn: "2020-10-19",
      uploadedOn: "2024-08-31",
      width: 3070,
      height: 2456,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Jadenschaul, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Amberina_the_Rat_Terrier.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rat_Terrier.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Rat_Terrier.jpg",
      title: "Rat Terrier.jpg",
      description:
        "An adult male tricolour pied Rat Terrier outdoors, highlighting its crisp black-tan-and-white markings, expressive dark oval eyes, smooth close-lying coat, and balanced athletic stance.",
      creator: "Bree Bailey",
      uploader: "Pharaoh Hound",
      capturedOn: "2006-09-28",
      uploadedOn: "2007-02-19",
      width: 1280,
      height: 960,
      licenseId: "cc-by-sa-2.0",
      attribution:
        "Photo by Bree Bailey, Wikimedia Commons, CC BY-SA 2.0. Source: https://commons.wikimedia.org/wiki/File:Rat_Terrier.jpg. License: https://creativecommons.org/licenses/by-sa/2.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    }
  ],

  overview: {
    summary:
      "A compact, hard-muscled, and endlessly inquisitive American farm terrier offered in Miniature and Standard sizes, blending fearless vermin-hunting speed and dog-sport versatility with affectionate, easygoing family devotion.",

    description:
      "The Rat Terrier—fondly called the 'Rattie'—is a sturdy, athletic, smooth-coated American working terrier combining sleek elegance with tough, farm-ready grit. Built in two size divisions—Miniature (10 to 13 inches) and Standard (over 13 up to 18 inches)—it balances moderate bone and flat, hard musculature beneath taut skin, with chest depth at the elbow matching the leg length from elbow to ground. Its smooth, blunt wedge-shaped head features flat well-muscled cheeks, a moderate distinct stop, a strong tapering muzzle just shorter than the skull, tight lips, wide-set oblique oval eyes, and expressive matching ears carried erect, semi-erect and tipped, or button. Clad in a short, glossy, close-lying coat wearing crisp pied patterning in shades such as black, chocolate, red, apricot, or blue with white (and often warm tan points), the Rat Terrier carries a docked tail, natural bobtail, or tapered full tail without preference. Less combative than many traditional sparring terriers, it is bright, devoted, playful, and eager to please its family—excelling equally as a lively backyard companion, barn-hunt exterminator, or agile canine-sports competitor.",

    history:
      "An unmistakable American original, the Rat Terrier took shape across nineteenth-century family farms in the United States, where grain storage and henhouses depended on swift, fearless rodent hunters. Rural breeders combined small working terriers brought by British immigrants—such as early Smooth Fox Terriers, Manchester Terriers, and Old English White Terriers—with American feists and occasional crosses to faster or keen-scented breeds like Whippets and Beagles to enhance speed, agility, and hunting versatility. Popular folklore credits President Theodore Roosevelt with popularizing the 'Rat Terrier' name, and the breed became a fixture on American farms throughout the 1920s and 1930s before mechanized agriculture and chemical pest control reduced rural numbers. Historically, litters produced both longer-legged dogs ('Type A') and shorter-legged, heavier-boned dogs ('Type B'); in 1999, the shorter-legged variety became a separate breed named the Teddy Roosevelt Terrier, while a recessive natural hairless mutation born in a Rat Terrier litter in Louisiana later founded the American Hairless Terrier. Full American terrier-group recognition arrived in 2013, cementing the Rat Terrier's modern revival as a versatile family companion and dog-sport star.",

    originalPurpose:
      "Exterminating rats and other farm vermin, hunting small game, guarding henhouses and homesteads, and serving as a sturdy, multipurpose family farm companion.",

    currentRoles: [
      "Devoted, playful family and apartment companion",
      "Versatile dog-sports competitor (agility, lure coursing, barn hunt, rally, obedience, and earthdog)",
      "Alert household watchdog and small-farm ratter",
      "Therapy dog"
    ]
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "in",
      male: {
        min: 10,
        max: 18
      },
      female: {
        min: 10,
        max: 18
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 10,
        max: 25
      },
      female: {
        min: 10,
        max: 25
      }
    },

    lifespanYears: {
      min: 12,
      max: 18
    },

    coatType:
      "Short, close-lying, smooth, shiny single coat over taut skin. Texture varies slightly, and a very faint ruff or wave along the back is permitted though undesirable; any kink, curl, or genetic hairlessness is unacceptable, and whiskers are never removed.",

    coatLength: "Short",

    coatColors: [
      "Any variation of pied patterning—comparatively large patches of one or more colours combined with white—including predominantly black, chocolate, red, apricot, lemon, pearl/fawn, or blue, with or without tan points (cream to rust)",
      "Extreme piebald 'solid white' coat showing mottled or spotted skin pigment",
      "Badger markings, light speckling/ticking/mottling, and sabling are acceptable (solid non-white coats, bicolours without at least a one-inch white patch or strip, brindle, and merle patterns are disqualified)"
    ],

    sheddingLevel:
      "Moderate; the short, close-lying smooth coat sheds fine hairs steadily throughout the year with moderate seasonal increases",

    droolingLevel:
      "Low; clean, tight lips matching nose pigment or pink on flat cheeks and a dry arched neck keep drooling minimal",

    distinctiveFeatures: [
      "Compact, flexible, hard-muscled working terrier with moderate bone—neither rangy/toyish nor bulky/coarse—and body depth at the elbow matching elbow-to-ground height",
      "Two distinct size divisions measured at the withers: Miniature (10 to 13 inches) and Standard (over 13 up to 18 inches); dogs over six months below 10 inches or above 18 inches are disqualified",
      "Adult weight typically ranging from 10 to 25 pounds across both size divisions",
      "Smooth, blunt wedge-shaped head widening gradually toward the ear base with flat well-muscled cheeks, moderate distinct stop, strong tapering muzzle just shorter than the skull, and tight clean lips",
      "Fully pigmented nose matching body colour (seasonal fading allowed) and strong teeth meeting in a scissor bite (level bite acceptable)",
      "Obliquely set, wide-apart oval eyes (not large) ranging from darkest brown to hazel in harmony with coat (grey eyes allowed in blue or blue-fawn dogs only; any blue eye colour is disqualified)",
      "Matching ears set on line with the outer eye corner and carried erect, semi-erect and tipped, or button without preference (rose ears faulted; cropped ears disqualified)",
      "Level firm back, short slightly arched muscular loin, moderately wide chest with discernible forechest, well-bent stifles, and oval compact toes with thick pads and strong nails",
      "Tail set as a continuation of the spine—customarily docked between the second and third joint, born as a natural bobtail, or left naturally long tapering to the hock (length is unimportant)",
      "Short, smooth, shiny pied coat with intact whiskers (genetic hairlessness, kinks, curls, brindle, and merle are disqualified)"
    ]
  },

  temperament: {
    traits: [
      "Keenly observant, curious, lively, playful, and full of energetic zest",
      "Loving, deeply loyal, and devoted to its immediate family, craving regular time alongside its people",
      "Generally friendlier and less combative with other dogs than traditional sparring terriers (a non-sparring breed, though supervised introductions remain wise)",
      "Smart, responsive, and noticeably more eager to please and obedient to command than many harder-headed terriers",
      "Alert and watchful around the home, barking mainly to announce visitors or unusual activity rather than incessantly",
      "May be naturally reserved around unfamiliar strangers while remaining free of overt aggression or extreme shyness",
      "Retains a fierce, fast-reacting vermin-chasing and digging drive outdoors toward rodents, squirrels, and small prey"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 3,
      independence: 3,
      trainability: 5,
      barking: 3,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "Moderate to high; a sturdy, energetic farm terrier that thrives on brisk daily walks, vigorous play sessions, and stimulating dog sports while happily settling indoors beside its family afterward",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Brisk daily neighbourhood or trail walks on a secure leash",
        "High-tempo canine sports including agility, lure coursing, barn hunt, rally, obedience, and earthdog trials",
        "Interactive fetch, tug, and food-puzzle or scent-search games",
        "Supervised vigorous running inside a securely fenced, dig-proof yard"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Minimal coat upkeep—brush once a week with a rubber curry mitt or soft bristle brush to lift loose fine hairs and keep the short, smooth coat glossy.",

      bathing:
        "Bathe only occasionally when visibly muddy or dusty from yard play or digging, using a mild canine shampoo.",

      notes: [
        "Never trim or remove the facial whiskers.",
        "Inspect the erect, tipped, or button ears weekly for wax buildup, dirt, or redness.",
        "Trim strong nails every two to three weeks so the compact oval feet stay neat and balanced.",
        "Brush teeth several times weekly using canine enzymatic toothpaste, as smaller terriers accumulate dental tartar readily."
      ]
    },

    training: {
      difficulty:
        "Easy to moderate; clever, inquisitive, and eager to please, making it highly trainable for obedience and agility—though classic terrier curiosity and strong rodent-chasing drive demand secure containment and engaging sessions",

      tips: [
        "Begin consistent, upbeat basic obedience in early puppyhood using small treats, toys, and praise; Rat Terriers learn new cues rapidly and thrive on clear household routines.",
        "Never allow an untrained Rat Terrier off-leash near unfenced roads or wildlife—its lightning-fast vermin-chasing instinct can send it darting after a squirrel or rabbit immediately.",
        "Channel intense curiosity and digging energy into structured sports like barn hunt, agility, lure coursing, or scent puzzles.",
        "Keep fences snug along the ground edge to discourage adventurous digging."
      ],

      socialization:
        "Generous, positive early exposure to varied strangers, public places, friendly dogs, and respectful children ensures its natural reserve around newcomers stays calm and confident."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate and four-season climates—adaptable across urban apartments, suburban homes, and rural farms",
        "Warm sunny climates require shade, cool fresh drinking water, and sun protection over pale white-coated areas with minimal hair cover",
        "Cold winter weather calls for a snug dog sweater or jacket on walks, as the short single coat offers limited insulation against freezing temperatures"
      ],

      aloneTimeTolerance:
        "Low to moderate; deeply bonded to its household and happiest spending active and relaxed time alongside its family, a bored Rat Terrier left alone all day can turn to digging, chewing, or alert barking."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced small-to-medium adult dog food suited to an active terrier.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until roughly six months of age to support steady energy and balanced musculoskeletal growth.",
      adult:
        "Two measured meals daily on a consistent schedule to maintain hard-muscled working condition.",
      senior:
        "Two portion-controlled meals daily tailored for slower metabolism, dental comfort, and joint and cardiac wellness."
    },

    guidelines:
      "Measure every meal accurately with a scale or measuring cup to preserve the Rat Terrier's lean, hard-muscled silhouette without excess body fat—keeping weight strictly controlled protects kneecaps, hip joints, and heart health across its long 12- to 18-year lifespan. Count all training treats inside the daily caloric budget and provide clean fresh water continuously.",

    considerations: [
      "Match kibble size and caloric intake to whether the dog is a smaller Miniature (near 10 pounds) or a larger Standard (up to 25 pounds).",
      "Maintain a lean body condition throughout life to minimise strain on patellas and hips.",
      "Transition gradually between diet formulas over five to seven days to avoid digestive upset."
    ],

    note:
      "Caloric requirements vary substantially between 10-pound Miniatures and 25-pound athletic Standards. Consult a veterinarian to tailor daily portions."
  },

  health: {
    overview:
      "The Rat Terrier is generally a hardy, vigorous, and remarkably long-lived breed with a typical life expectancy of 12 to 18 years. Responsible breeding programmes actively screen for four core hereditary priorities: clinical patellar luxation, hip dysplasia (alongside developmental Legg-Calvé-Perthes disease in smaller lines), cardiac disease (ideally evaluated by a board-certified veterinary cardiologist), and autosomal-recessive Primary Lens Luxation (PLL, linked to ADAMTS17 and completely preventable via pre-breeding DNA testing). Additional health considerations include hereditary eye conditions monitored via specialist exams (and optional prcd-PRA DNA testing), elbow evaluations, and a peer-reviewed autosomal-recessive thyroid peroxidase (TPO c.331C>T) mutation shared with Toy Fox Terriers that causes congenital hypothyroidism with goiter (CHG) and central nervous system hypomyelination in affected puppies—also preventable via DNA screening.",

    commonConditions: [
      "Primary Lens Luxation (PLL, ADAMTS17-related) — an inherited weakness of the zonular eye ligaments causing painful dislocation of the lens, uveitis, and potentially blinding secondary glaucoma (typically surfacing between 4 and 8 years of age); completely preventable in breeding programmes through mandatory pre-breeding DNA testing",
      "Patellar luxation — intermittent slipping of the kneecap out of the femoral groove, a well-known small-terrier orthopaedic concern actively evaluated prior to breeding",
      "Hip dysplasia and Legg-Calvé-Perthes disease — developmental hip-joint laxity (with one North American radiographic registry dataset showing 93.2% normal and 6.8% dysplastic/borderline across 74 evaluated dogs—a screened cohort rather than universal prevalence) alongside aseptic femoral-head necrosis in young small terriers",
      "Cardiac disease — congenital or acquired heart murmurs and structural cardiac conditions prompting pre-breeding veterinary cardiac evaluations (with cardiologist exams preferred by knowledgeable breeders)",
      "Congenital Hypothyroidism with Goiter (CHG, TPO-related) — a rare autosomal-recessive thyroid-hormone synthesis defect documented in peer-reviewed veterinary pathology research in Rat Terriers (caused by the TPO c.331C>T; p.Arg111* nonsense mutation shared with Toy Fox Terriers), leading to neonatal goiter, stunted growth, and CNS hypomyelination; preventable via DNA testing",
      "Hereditary eye disorders (including prcd-PRA) and occasional allergies or dental disease — ocular conditions monitored via specialist veterinary ophthalmologist exams and elective DNA screening alongside routine small-terrier dental and skin care"
    ],

    preventiveCare: [
      "Insist on documented public pre-breeding clearances for both parents (bred at age 2 or older): clinical patellar luxation evaluation, radiographic hip (and ideally elbow) evaluations, veterinary cardiac exam (cardiologist preferred), specialist veterinary ophthalmologist eye examination, and DNA testing for Primary Lens Luxation (PLL)—plus elective DNA tests for prcd-PRA and TPO congenital hypothyroidism with goiter.",
      "Keep the dog lean and well-muscled throughout its long lifespan to minimise stress on kneecaps and hips.",
      "Brush teeth several times weekly, check ears weekly, and maintain core vaccinations and year-round parasite prevention.",
      "Schedule annual veterinary wellness examinations (semi-annually in senior years), watching promptly for any sudden eye redness, cloudiness, or squinting."
    ],

    recommendedScreenings: [
      "Clinical patellar luxation orthopedic evaluation prior to breeding",
      "Radiographic hip dysplasia evaluation prior to breeding (at 24 months of age or older; Legg-Calvé-Perthes screening in smaller lines)",
      "Cardiac examination (preferably by a board-certified veterinary cardiologist)",
      "DNA test for Primary Lens Luxation (PLL / ADAMTS17)",
      "Ophthalmic examination by a board-certified veterinary ophthalmologist, plus elective radiographic elbow evaluation and DNA tests for prcd-PRA and Congenital Hypothyroidism with Goiter (TPO)"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste and schedule regular veterinary dental cleanings to protect the strong jaws, scissor or level bite, and gums.",

    earCare:
      "Inspect the erect, tipped, or button ears weekly for wax buildup, dirt, or redness, cleaning gently with a veterinarian-approved solution when needed.",

    skinCare:
      "Check the taut skin beneath the short, glossy coat regularly after yard play or digging for ticks, scrapes, allergies, or sunburn on pale white skin areas."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Active singles, couples, families with respectful children, and energetic seniors wanting a portable, sturdy, affectionate, and long-lived American terrier",
      "Apartment or house dwellers able to provide 45 to 60 minutes of daily brisk walks, interactive play, and secure leash/yard safety",
      "Committed first-time dog owners looking for an eager-to-please, low-grooming, non-sparring terrier that responds rapidly to positive training",
      "Dog-sport fans eager to try agility, lure coursing, barn hunt, rally, obedience, or earthdog trials"
    ],

    notIdealFor: [
      "Homes with free-roaming pet rodents, hamsters, rabbits, or small caged animals given its hardwired ratting drive",
      "Owners wanting an off-leash hiker in unfenced wildlife areas or unwilling to dig-proof a backyard fence",
      "Households leaving a deeply social, curious companion alone for long workdays without mental stimulation",
      "Outdoor-only or freezing-kennel environments without cosy indoor shelter"
    ]
  },

  funFacts: [
    "Popular American lore credits President Theodore Roosevelt—an admirer of hardy farm ratters—with giving the Rat Terrier its plain-spoken name, and when the breed's shorter-legged 'Type B' variety became a separate breed in 1999, it was named the Teddy Roosevelt Terrier in his honour.",
    "The Rat Terrier is the direct parent breed of the American Hairless Terrier, which began from a single naturally hairless female puppy named Josephine born into a purebred Rat Terrier litter in Louisiana in 1972.",
    "Unlike many traditional show terriers that are bred to spar head-to-head in the ring, the Rat Terrier is explicitly a non-sparring breed noted for being far friendlier with other dogs.",
    "Every recognized Rat Terrier displays pied patterning (or extreme piebald white over spotted skin), while solid non-white coats, brindle, merle, curls, and genetic hairlessness are all excluded.",
    "Rat Terriers are remarkably long-lived for a working terrier, routinely enjoying active lives of 12 to 18 years."
  ],

  faq: [
    {
      question: "What is a Rat Terrier?",
      answer:
        "The Rat Terrier ('Rattie') is a compact, athletic, smooth-coated American working terrier developed on nineteenth-century farms for rodent control and all-around companionship, known for its pied coat, keen curiosity, and friendly, trainable nature."
    },
    {
      question: "How tall and heavy is a Rat Terrier?",
      answer:
        "The breed comes in two size divisions measured at the withers: Miniature (10 to 13 inches) and Standard (over 13 up to 18 inches). Adults typically weigh between 10 and 25 pounds across both divisions."
    },
    {
      question: "How long does a Rat Terrier live?",
      answer:
        "Rat Terriers are notably long-lived, with a typical life expectancy of 12 to 18 years when kept lean and supported with routine veterinary care."
    },
    {
      question: "Can a Rat Terrier live in an apartment?",
      answer:
        "Yes. Both Miniature and Standard Rat Terriers adapt well to apartment living as long as they receive 45 to 60 minutes of brisk daily walks, interactive games, and mental stimulation."
    },
    {
      question: "Are Rat Terriers good with children, other dogs, and small pets?",
      answer:
        "They make sturdy, playful companions for families with respectful children and are generally friendlier with other dogs than many sparring terriers (with supervision). However, because of their strong vermin-hunting drive, they should not be trusted loose around pet rodents, rabbits, or similar small animals."
    },
    {
      question: "How much grooming and shedding should I expect from a Rat Terrier?",
      answer:
        "Grooming is minimal: weekly brushing with a rubber mitt or soft brush manages moderate shedding and keeps its short, smooth, glossy coat clean, with baths only when dirty, regular nail trims, weekly ear checks, and frequent toothbrushing. Never trim its whiskers."
    },
    {
      question: "Are Rat Terriers easy to train?",
      answer:
        "Yes—they are bright, inquisitive, and noticeably eager to please, excelling in agility, lure coursing, barn hunt, rally, and obedience with upbeat positive training. Consistent boundaries and secure leashes or fences are essential to manage their strong chasing and digging instincts."
    },
    {
      question: "What are the main health concerns for a Rat Terrier?",
      answer:
        "Generally a very healthy breed, its key documented health screening priorities include Primary Lens Luxation (PLL / ADAMTS17, preventable via DNA testing), patellar luxation, hip dysplasia, Legg-Calvé-Perthes disease, cardiac disease, hereditary eye conditions, and rare DNA-screenable Congenital Hypothyroidism with Goiter (TPO)."
    }
  ],

  references: [
    "akc-rat-terrier-official-standard",
    "akc-rat-terrier-breed-profile",
    "rtca-about-the-rat-terrier",
    "rtca-health-and-genetics",
    "rtca-find-a-rat-terrier",
    "ofa-rat-terrier-chic-requirements",
    "ofa-primary-lens-luxation",
    "pubmed-pettigrew-2007-rat-terrier-tpo-chg",
    "omia-canine-congenital-hypothyroidism-tpo",
    "wikimedia-amberina-the-rat-terrier-jadenschaul",
    "wikimedia-rat-terrier-bree-bailey"
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
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-rat-terrier-breed-profile",
          role: "verified",
          locator: "Uses common abbreviation 'RT' and short forms"
        },
        {
          id: "rtca-about-the-rat-terrier",
          role: "cited",
          locator: "American Rat Terrier origin and common informal name 'Rattie'"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "RT verified via AKC; Rattie and American Rat Terrier are widely established colloquial and international forms."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-rat-terrier-official-standard",
          role: "verified",
          locator: "AKC Terrier Group official breed standard"
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
          id: "akc-rat-terrier-official-standard",
          role: "verified",
          locator: "American multipurpose ratting and farm terrier standard"
        },
        {
          id: "akc-rat-terrier-breed-profile",
          role: "verified",
          locator: "Origin: United States"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Country of origin (United States) verified from AKC Official Standard and AKC breed profile."
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The AKC Official Standard, AKC breed profile, and RTCA specify the United States without restricting the breed's origin to a single US state or sub-region."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-rat-terrier-official-standard",
          role: "verified",
          locator: "General Appearance (ratting and farm work, multipurpose companion), Size (Miniature 10-13 in, Standard over 13-18 in), Head, Ears, Coat, Color, Temperament (non-sparring)"
        },
        {
          id: "akc-rat-terrier-breed-profile",
          role: "verified",
          locator: "19th-century US farm heritage, 2013 AKC Terrier Group recognition, lure coursing and agility aptitude, family loyalty"
        },
        {
          id: "rtca-about-the-rat-terrier",
          role: "verified",
          locator: "American original with breed name popularly linked to Theodore Roosevelt; compact smooth-coated exterminator and companion"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Synthesized in original prose from AKC Official Standard, AKC breed profile, and RTCA."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-rat-terrier-official-standard",
          role: "verified",
          locator: "Size/Proportion/Substance (elbow-to-ground equals body depth; shortness in leg serious fault), Head (smooth blunt wedge, scissor preferred/level acceptable, tight lips), Eyes (oval, dark brown to hazel, grey in blue/blue-fawn only; blue eye disqualified), Ears (erect, tipped, or button; rose fault; cropped disqualified), Tail (docked 2nd-3rd joint, natural bobtail, or natural long to hock), Coat (short close shiny; whiskers intact; kink/curl/hairlessness disqualified), Color (pied patterning and extreme piebald white; solid non-white, <1 in white, brindle, and merle disqualified)"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "All proportions, ear carriage options, tail allowances, coat texture, pied colour requirements, and disqualifications follow the AKC Official Standard (effective 2010-07-01)."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-rat-terrier-official-standard",
          role: "verified",
          locator: "Size: Miniature - At least 10 inches, not to exceed 13 inches. Standard - over 13 inches, and up to and including 18 inches in height measured at the withers. Disqualification: Any dog over six months of age measuring less than 10 inches, or over 18 inches."
        },
        {
          id: "rtca-about-the-rat-terrier",
          role: "verified",
          locator: "Height: 10-13 inches (miniature), 13-18 inches (standard)."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Preserved verbatim in published unit of inches (10 to 18 inches spanning Miniature 10–13 in and Standard over 13–18 in divisions for both sexes) from the AKC Official Standard and RTCA."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-rat-terrier-breed-profile",
          role: "verified",
          locator: "Weight: 10-25 pounds."
        },
        {
          id: "rtca-about-the-rat-terrier",
          role: "verified",
          locator: "Weight: 10-25 pounds."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "AKC Official Standard omits numerical weight bounds; preserved verbatim in published unit of pounds (10 to 25 lb) from AKC and RTCA."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-rat-terrier-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12-18 years."
        },
        {
          id: "rtca-about-the-rat-terrier",
          role: "verified",
          locator: "Life Expectancy: 12-18 years."
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified from both AKC and Rat Terrier Club of America."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-rat-terrier-breed-profile",
          role: "verified",
          locator: "Shedding: Moderate; Grooming level 2."
        },
        {
          id: "akc-rat-terrier-official-standard",
          role: "verified",
          locator: "Coat: Short, close lying, smooth and shiny."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-rat-terrier-official-standard",
          role: "verified",
          locator: "Head: The lips are clean and tight; Neck: Strong, arched along the crest and dry."
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Clean, tight lips and a dry neck keep drooling minimal."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-rat-terrier-official-standard",
          role: "verified",
          locator: "Temperament: Keenly observant, devoted, full of energy, yet easily trained and obedient to command; non-sparring breed generally friendly with other dogs, may be reserved with strangers; submissiveness not a fault."
        },
        {
          id: "akc-rat-terrier-breed-profile",
          role: "verified",
          locator: "Personality: Friendly, inquisitive, lovable; Good with Children; Good with other Dogs with supervision; Trainability: Eager to Please; Barking Level: Occasional."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-rat-terrier-breed-profile",
          role: "cited",
          locator: "Friendly, inquisitive, lovable, eager to please, occasional barking, good with children, supervision with other dogs, reserved with strangers"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates reflecting documented loving family devotion, non-sparring sociability, eager trainability, and active terrier energy."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-rat-terrier-breed-profile",
          role: "cited",
          locator: "Regular exercise, lure coursing and agility, low-maintenance smooth coat, socialization, and family time"
        },
        {
          id: "rtca-find-a-rat-terrier",
          role: "cited",
          locator: "Consistent basic puppy obedience, public socialization, and interactive dog sports"
        }
      ],
      verifiedOn: null,
      note:
        "General small-terrier care combining daily walks and engaging sports with minimal smooth-coat brushing and secure leash/fence safety."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-rat-terrier-breed-profile",
          role: "verified",
          locator: "Energy Level: Regular Exercise; robust playmate excelling at lure coursing and agility."
        },
        {
          id: "akc-rat-terrier-official-standard",
          role: "verified",
          locator: "Full of energy; shown in good, hard physical working condition."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-rat-terrier-breed-profile",
          role: "cited",
          locator: "Regular daily exercise and active play"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial daily activity range (45 to 60 minutes) matching a compact, energetic farm terrier."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "rtca-about-the-rat-terrier",
          role: "cited",
          locator: "Compact, portable companions in Miniature and Standard sizes"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial assessment that compact size, occasional barking, and moderate-to-high daily exercise adapt well to apartment living with active owners."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-rat-terrier-breed-profile",
          role: "cited",
          locator: "Farm-terrier heritage thriving with secure fenced play space"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial assessment that a house with a securely fenced, dig-proof yard suits this breed well."
    },

    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-rat-terrier-official-standard",
          role: "cited",
          locator: "Short, close-lying, smooth single coat"
        }
      ],
      verifiedOn: null,
      note: "General climate guidance inferred from its short single coat and predominantly white pied patterns."
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-rat-terrier-breed-profile",
          role: "cited",
          locator: "At its best with plenty of time alongside its family"
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
        "General small-to-medium terrier veterinary nutrition guidance emphasizing lean working condition across both Miniature and Standard sizes."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Standard small-to-medium canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-rat-terrier-breed-profile",
          role: "verified",
          locator: "Generally healthy breed; mentions hip dysplasia, patellar luxation, Legg-Calvé-Perthes, cardiac and eye disease; lists Recommended Health Tests from the National Breed Club (Patella, Hip, Cardiac, PLL DNA)."
        },
        {
          id: "rtca-find-a-rat-terrier",
          role: "verified",
          locator: "Details parent genetic testing, OFA hips & elbows (min age 2), patellas, ophthalmologist eyes, and cardiac exams (cardiologist preferred due to heart issues in the breed)."
        },
        {
          id: "ofa-primary-lens-luxation",
          role: "verified",
          locator: "OFA PLL pathology (zonular ligament weakness, uveitis, glaucoma, typical onset 4-8 years) and DNA screening."
        },
        {
          id: "pubmed-pettigrew-2007-rat-terrier-tpo-chg",
          role: "verified",
          locator: "Vet Pathol 2007;44(1):50-56 (PMID 17197623): CNS hypomyelination and congenital goiter in Rat Terriers caused by a thyroid peroxidase (TPO) gene mutation."
        },
        {
          id: "omia-canine-congenital-hypothyroidism-tpo",
          role: "verified",
          locator: "OMIA000536/9615: Confirms autosomal-recessive TPO nonsense mutation (c.331C>T; p.Arg111Ter) causing congenital hypothyroidism with goiter (CHG) in Rat Terriers and Toy Fox Terriers."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Synthesizes AKC, RTCA, OFA, OMIA, and peer-reviewed veterinary pathology research without naming clubs or registries in user-facing text."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-primary-lens-luxation",
          role: "verified",
          locator: "Primary Lens Luxation (PLL / ADAMTS17) zonular ligament weakness, uveitis, and glaucoma (typical onset 4-8 years)"
        },
        {
          id: "akc-rat-terrier-breed-profile",
          role: "verified",
          locator: "Patellar luxation, hip dysplasia, Legg-Calvé-Perthes disease, cardiac disease, and eye disease"
        },
        {
          id: "pubmed-pettigrew-2007-rat-terrier-tpo-chg",
          role: "verified",
          locator: "Congenital Hypothyroidism with Goiter (CHG) and CNS hypomyelination linked to TPO mutation in Rat Terriers"
        },
        {
          id: "omia-canine-congenital-hypothyroidism-tpo",
          role: "verified",
          locator: "TPO c.331C>T (p.Arg111Ter) autosomal-recessive variant in Rat Terriers"
        },
        {
          id: "rtca-find-a-rat-terrier",
          role: "verified",
          locator: "Cardiac issues warranting cardiologist evaluations alongside hips, elbows, patellas, eyes, and genetic screening"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Explicitly stratifies DNA-screenable Mendelian conditions (ADAMTS17 PLL, TPO CHG) and CHIC-screened orthopaedic/cardiac/ocular disorders from general small-terrier skin and dental precautions."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "rtca-find-a-rat-terrier",
          role: "cited",
          locator: "Pre-breeding hips, elbows (at 2+ years), patellas, ophthalmologist eyes, cardiologist heart, and DNA testing"
        }
      ],
      verifiedOn: null,
      note: "General preventive veterinary care protocol tailored to Rat Terriers."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-rat-terrier-breed-profile",
          role: "verified",
          locator: "Recommended Health Tests from the National Breed Club: Patella Evaluation, Hip Evaluation, Cardiac Exam, and Primary Lens Luxation (PLL) DNA Test."
        },
        {
          id: "rtca-health-and-genetics",
          role: "verified",
          locator: "RTCA/OFA CHIC basic health screening requirements and breed health testing statistics."
        },
        {
          id: "ofa-rat-terrier-chic-requirements",
          role: "verified",
          locator: "OFA CHIC Program breed screening registry for the Rat Terrier."
        },
        {
          id: "rtca-find-a-rat-terrier",
          role: "verified",
          locator: "Recommends Veterinary Ophthalmologist eye exams, cardiologist cardiac exams, hips/elbows at 2+ years, patellas, and genetic testing."
        },
        {
          id: "omia-canine-congenital-hypothyroidism-tpo",
          role: "verified",
          locator: "Elective DNA testing available for TPO congenital hypothyroidism with goiter in Rat Terriers."
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Summarizes RTCA/OFA CHIC required and elective screenings without naming clubs or registries in user-facing prose."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-rat-terrier-official-standard",
          role: "cited",
          locator: "Lower jaw and teeth strong and well developed; scissor bite preferred, level bite acceptable."
        }
      ],
      verifiedOn: null,
      note: "Standard small-terrier home and veterinary dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-rat-terrier-official-standard",
          role: "cited",
          locator: "Ears carried erect, semi-erect and tipped, or button without preference."
        }
      ],
      verifiedOn: null,
      note: "Routine ear inspection and cleaning guidance."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-rat-terrier-official-standard",
          role: "cited",
          locator: "Short, close-lying, smooth shiny coat over taut skin; pied white patterning."
        }
      ],
      verifiedOn: null,
      note: "General skin, tick, and white-coat sun-protection guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-rat-terrier-breed-profile",
          role: "cited",
          locator: "Friendly, lovable, good with children, eager to please, low grooming, regular exercise, supervision with other dogs"
        },
        {
          id: "rtca-about-the-rat-terrier",
          role: "cited",
          locator: "Compact, portable, happy-go-lucky companions in Miniature and Standard sizes"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability evaluations balancing portability, trainability, low grooming, and long lifespan against strong rodent-chasing and digging instincts."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "rtca-about-the-rat-terrier",
          role: "verified",
          locator: "Popularly attributed to Theodore Roosevelt for coining the breed name; 12-18 year lifespan"
        },
        {
          id: "akc-rat-terrier-official-standard",
          role: "verified",
          locator: "Non-sparring terrier breed; pied/extreme-piebald colour rule excluding solid non-white, brindle, merle, curls, and genetic hairlessness"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Verified historical, lineage, temperament, colour, and longevity facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-rat-terrier-official-standard",
          role: "verified",
          locator: "Height (Miniature 10-13 in, Standard over 13-18 in), non-sparring nature, smooth coat, whiskers intact"
        },
        {
          id: "akc-rat-terrier-breed-profile",
          role: "verified",
          locator: "Weight (10-25 lb), lifespan (12-18 years), good with children, sports versatility, recommended health tests (Patella, Hip, Cardiac, PLL DNA)"
        },
        {
          id: "pubmed-pettigrew-2007-rat-terrier-tpo-chg",
          role: "verified",
          locator: "TPO congenital hypothyroidism with goiter"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "FAQ answers synthesize AKC Official Standard, AKC breed profile, RTCA, OFA, and peer-reviewed pathology research without naming clubs or registries in user-facing prose."
    }
  },

  updatedOn: "2026-11-26"
};
