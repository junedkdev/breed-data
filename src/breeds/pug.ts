import type { Breed } from "../schema/breed.types";

export const pug: Breed = {
  slug: "pug",
  name: "Pug",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Carlin",
    "Mops",
    "Doguillo",
    "Chinese Pug",
    "Dutch Bulldog",
    "Dutch Mastiff",
    "Miniature Mastiff"
  ],

  group:
    "Companion and Toy Dogs; Section 11 — Small Molossian type dogs (without working trial; also classified in the Toy and Companion Dog groups)",

  origin: {
    country: "China",
    region:
      "Ancient China (developed and standardized further in the Netherlands and Great Britain)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pug_dog_image.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Pug_dog_image.jpg",
      title: "Pug dog image.jpg",
      description: "A fawn Pug dog looking directly forward.",
      creator: "Celebindiaworld",
      uploader: "Celebindiaworld",
      capturedOn: "2020-07-18",
      uploadedOn: "2020-07-18",
      width: 6000,
      height: 4000,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Celebindiaworld, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Pug_dog_image.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-24"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/My_pug.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:My_pug.jpg",
      title: "My pug.jpg",
      description: "A fawn Pug resting indoors.",
      creator: "Gmart1111",
      uploader: "Gmart1111",
      capturedOn: "2020-01-13",
      uploadedOn: "2020-01-13",
      width: 828,
      height: 655,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Gmart1111, Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:My_pug.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-24"
    }
  ],

  overview: {
    summary:
      "A compact, square-built toy companion originating in ancient China, recognized for its expressive wrinkled face, curled tail, gentle warmth, and steady, comic personality.",

    description:
      "The Pug is an ancient, muscular toy dog defined by a square and cobby silhouette, broad chest, and a round head marked by deep facial wrinkles. Packed with substantial bone into a small frame, it epitomizes the classical concept of holding plenty of substance in minimal space. The smooth, glossy double coat appears in fawn, silver fawn, apricot, or solid black, framed by a lustrous black mask and distinctive black ear flaps. Bred strictly for companionship over two millennia, the Pug possesses an affectionate, stable, and cheerful disposition. It bonds closely with human companions of all ages, adapting seamlessly to apartment life while delighting owners with its comic antics, restful quietness indoors, and expressive gazes.",

    history:
      "Tracing its origins back over two thousand years to ancient China, the Pug was bred as an imperial lap dog during the Han dynasty, living in luxury inside imperial palaces and guarded by royal attendants. Dutch merchant traders from the Dutch East India Company brought the breed to Europe in the sixteenth century, where it became the official mascot of the House of Orange after a vigilant dog saved the Prince of Orange from an assassination attempt. The breed spread rapidly to aristocratic courts across France, Italy, and England, where Queen Victoria developed an ardent fondness for Pugs, keeping extensive breeding kennels that helped shape the modern physical standard. In the late nineteenth and twentieth centuries, the breed transitioned into a globally cherished family companion celebrated for its even temper and devoted nature.",

    originalPurpose:
      "Prized lap companion and household pet for emperors and noble courts in ancient China, later serving as an aristocratic palace companion and sentinel in Europe.",

    currentRoles: [
      "Devoted household companion and family pet",
      "Therapy and emotional support visiting dog",
      "Trick dog and reward-based basic agility participant",
      "Conformation show dog"
    ]
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "in",
      male: {
        min: 10,
        max: 13
      },
      female: {
        min: 10,
        max: 13
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 14,
        max: 18
      },
      female: {
        min: 14,
        max: 18
      }
    },

    lifespanYears: {
      min: 13,
      max: 15
    },

    coatType:
      "Short, fine, smooth, soft, and glossy double coat with a flat outer coat and a dense, plush undercoat, neither harsh, off-standing, nor woolly.",

    coatLength: "Short",

    coatColors: [
      "Fawn with black mask, ears, and back trace",
      "Black (solid glossy black)",
      "Silver fawn with black mask and trace",
      "Apricot with black mask and trace"
    ],

    sheddingLevel:
      "High year-round shedding with heavier seasonal shedding during spring and autumn when the dense undercoat molts",

    droolingLevel:
      "Low to moderate, with occasional moisture or water dripping around mealtimes, heavy panting, or excitement",

    distinctiveFeatures: [
      "Decidedly square, cobby, and compact body with firm muscle and substantial bone",
      "Large, massive, rounded head without an apple-dome appearance and with clearly marked forehead wrinkles",
      "Short, blunt, and square muzzle that is not turned upward",
      "Slightly undershot bite with a broad lower jaw where incisors sit nearly in a straight row",
      "Large, dark, lustrous eyes with a soft, solicitous, and expressive gaze",
      "Small, thin, velvet-soft ears carried in either button (flap folding forward) or rose (folded back) fashion",
      "Distinct black mask on the muzzle, black ears, dark moles on cheeks, and a dark thumb mark or diamond on the forehead",
      "Dark trace line extending along the spine from the back of the skull to the tail",
      "High-set tail curled tightly over the hip, with a double curl representing exceptional symmetry",
      "True and jaunty movement characterized by a slight rolling motion of the hindquarters"
    ]
  },

  temperament: {
    traits: [
      "Charming, affectionate, and deeply attached to family",
      "Even-tempered, steady, and remarkably patient",
      "Playful and naturally comical",
      "Friendly and sociable with familiar people and welcoming to strangers",
      "Gentle and tolerant around children and elderly individuals",
      "Peaceful and accommodating with other dogs and domestic animals",
      "Alert and inquisitive without being nervous or hyperactive",
      "Independent and occasionally headstrong when unmotivated",
      "Low territoriality and minimal watchdog aggression",
      "Communicative, expressing emotion through snorts, grumbles, and soft vocalizations rather than persistent barking"
    ],

    scores: {
      affection: 5,
      withChildren: 5,
      withDogs: 5,
      withStrangers: 5,
      protectiveness: 1,
      independence: 2,
      trainability: 3,
      barking: 2,
      energy: 2
    }
  },

  care: {
    exercise: {
      level:
        "Low to moderate; benefits from gentle daily strolls and brief play sessions, requiring strict monitoring to avoid respiratory stress and thermal overload",

      minutesPerDay: {
        min: 30,
        max: 45
      },

      activities: [
        "Leisurely neighborhood walks during the coolest parts of the day",
        "Gentle indoor fetch and interactive puzzle games",
        "Supervised exploration and light romping in a secure yard",
        "Scent-work tracking and hidden treat finding",
        "Short, reward-based basic obedience and trick routines in air-conditioned spaces"
      ]
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush two to three times weekly using a rubber curry brush, soft bristle brush, or grooming mitt to lift loose undercoat hair; increase to daily brushing during peak seasonal shedding periods.",

      bathing:
        "Bathe every four to six weeks using a mild, hydrating dog shampoo, taking care to avoid getting water inside the ear canals or eyes, and dry all skin crevices thoroughly.",

      notes: [
        "Clean the deep facial skin wrinkles and over-nose fold two to three times weekly using a soft damp wipe, following immediately with a dry cloth to prevent bacterial and fungal moisture accumulation.",
        "Inspect the prominent eyes daily for dust, trapped hair, or discharge, wiping the eye corners gently with a sterile damp pad.",
        "Check and clean the soft velvety ears weekly for wax buildup, moisture, or odor.",
        "Trim nails every two to three weeks to prevent splayed toes and discomfort while walking.",
        "Brush teeth daily with enzymatic canine toothpaste to counter dental crowding caused by the shortened jaw.",
        "Never shave the double coat, as the outer fur and undercoat insulate against both cold and surface heat."
      ]
    },

    training: {
      difficulty:
        "Moderate; intelligent and eager to please for food, but easily discouraged by harshness and inclined to tune out repetitive drills",

      tips: [
        "Rely on positive reinforcement, verbal praise, and small low-calorie training treats.",
        "Keep instructional lessons short, lighthearted, and limited to five to ten minutes.",
        "Always walk with a supportive chest harness rather than a neck collar to protect the delicate airway and trachea from strain.",
        "Maintain patience and a regular outdoor schedule during house-training, using crate training and positive rewards.",
        "Avoid stern verbal reprimands or physical corrections, which cause this sensitive companion to withdraw.",
        "Acclimate puppies early to gentle handling of their facial wrinkles, paws, ears, and teeth."
      ],

      socialization:
        "Introduce the young dog in a gradual, supportive manner to a wide variety of friendly people, vaccinated pets, household appliances, and gentle environments. Because the breed possesses an inherently friendly nature, social development focuses on building calm confidence, good manners, and stress-free cooperation during necessary facial and veterinary care."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate and mild climates",
        "Indoor climate-controlled environments with reliable air conditioning are mandatory in hot or humid conditions",
        "Cold climates with indoor heating, warm dog apparel during winter outings, and brief outdoor bathroom trips"
      ],

      aloneTimeTolerance:
        "Low; intensely companion-oriented and susceptible to distress or separation anxiety when left isolated for long hours, thriving best in households with regular human presence"
    }
  },

  nutrition: {
    dietType:
      "Complete and balanced diet formulated for small-breed dogs, adjusted for life stage, metabolic rate, and individual activity levels.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until approximately six months of age, then transitioning to two or three meals.",
      adult:
        "Two measured meals daily to support steady digestion and discourage rapid food bolting.",
      senior:
        "Two portion-controlled meals daily adapted for slower metabolism, joint mobility, and dental health."
    },

    guidelines:
      "Measure food precisely using a digital gram scale or standard measuring cup, as the breed gains weight readily and carries a naturally hearty appetite. Excess weight dramatically increases respiratory difficulty and joint strain in short-faced dogs. Divide the daily ration into two distinct meals, utilize a shallow dish or slow-feeder bowl suited to a flat muzzle, and restrict active exercise immediately before and after eating.",

    considerations: [
      "Maintain a lean body condition to minimize stress on the respiratory system, spine, and joints.",
      "Incorporate training treats into the daily caloric calculation to prevent gradual weight gain.",
      "Utilize small, low-calorie treat options such as green bean slices or baby carrot morsels during training.",
      "Select kibble designed in size and shape for compact flat-faced jaws.",
      "Avoid rich table scraps and fatty foods that can prompt digestive distress or pancreatitis.",
      "Ensure cool, clean drinking water is accessible at all times in a wide, shallow bowl."
    ],

    note:
      "Caloric requirements differ according to age, sterilization status, and daily movement. Work closely with a veterinarian to establish appropriate daily portion targets."
  },

  health: {
    overview:
      "The Pug is a long-lived toy companion with a typical life expectancy of 13 to 15 years. However, its compressed facial anatomy and distinct physical features predispose it to conformational and hereditary health challenges. Primary concerns encompass brachycephalic obstructive airway syndrome (BOAS), eye vulnerabilities resulting from shallow orbits, and skin fold intertrigo inside facial wrinkles. In addition, the breed faces specific genetic risks, most notably necrotizing meningoencephalitis (Pug dog encephalitis / PDE), an inflammatory central nervous system condition with documented genetic susceptibility, along with hip dysplasia, patellar luxation, and congenital spinal hemivertebrae.",

    commonConditions: [
      "Brachycephalic obstructive airway syndrome (BOAS) — stenotic nostrils, elongated soft palate, and narrowed airways causing snoring, exercise intolerance, and severe heat sensitivity",
      "Necrotizing meningoencephalitis (NME / Pug dog encephalitis / PDE) — a severe, progressive inflammatory brain disorder associated with specific immune gene markers",
      "Corneal ulcers and ocular trauma — surface abrasions and corneal injuries caused by prominent, shallow-set eyes and reduced blink protection",
      "Pigmentary keratitis and dry eye (keratoconjunctivitis sicca) — chronic corneal pigmentation and inadequate tear film production requiring veterinary management",
      "Skin fold dermatitis (intertrigo) — bacterial and fungal infections arising in moist, warm facial wrinkles and over-nose folds",
      "Hemivertebrae and spinal malformations — misshapen, wedge-like spinal bones linked to the screw-tail trait, occasionally resulting in nerve compression or hind-limb weakness",
      "Patellar luxation — kneecap displacement from the femoral groove causing intermittent hopping or hind-leg lameness",
      "Hip dysplasia — developmental laxity of the hip joints that can contribute to secondary degenerative arthritis",
      "Periodontal disease — premature plaque buildup and gum inflammation caused by dental crowding in a shortened jaw",
      "Obesity — excess adipose tissue that rapidly compromises breathing and worsens airway obstruction"
    ],

    preventiveCare: [
      "Confirm that prospective breeding parents hold registered screening clearances for genetic encephalitis risk, respiratory function, patellas, hips, and eyes.",
      "Clean and thoroughly dry the facial wrinkles and over-nose fold several times each week.",
      "Walk the dog on a comfortable chest harness instead of a collar to avoid putting pressure on the trachea and airways.",
      "Enforce strict heat safety: keep the dog inside air-conditioned rooms during hot or humid weather and never leave it unattended in a vehicle.",
      "Inspect the eyes daily for cloudiness, redness, discharge, or squinting, and seek prompt veterinary evaluation for any suspected eye scratch.",
      "Maintain a lean body condition through strict portion control and regular, gentle exercise.",
      "Brush teeth daily and schedule periodic professional veterinary dental cleanings.",
      "Keep vaccinations, heartworm prevention, and flea/tick control up to date under veterinary guidance."
    ],

    recommendedScreenings: [
      "DNA marker test for susceptibility to necrotizing meningoencephalitis (Pug dog encephalitis / PDE)",
      "Clinical respiratory function grading / airway evaluation for brachycephalic obstructive airway syndrome",
      "Patellar luxation clinical veterinary evaluation and grading",
      "Radiographic hip evaluation",
      "Ophthalmic examination by a board-certified veterinary ophthalmologist",
      "Spinal radiographic screening for hemivertebrae prior to breeding"
    ],

    dentalCare:
      "Brush teeth daily with soft bristles and canine-safe toothpaste. Because the compressed facial structure leaves little room for 42 adult teeth, dental crowding and rotated teeth accelerate tartar formation, making early home care and regular professional dental cleanings essential.",

    earCare:
      "Inspect the thin velvety ear flaps once a week for redness, dark discharge, or odor. Clean gently using a veterinarian-recommended ear-cleansing liquid, drying the ear entrance carefully without inserting cotton swabs into the canal.",

    skinCare:
      "Gently part and wipe the deep facial wrinkles, nose fold, and tail fold using a mild pet wipe, drying the skin completely with a soft cloth. Check the body during brushing for dry patches, flea irritation, or hot spots, and bathe periodically with a soothing oatmeal or antimicrobial shampoo."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: false,
    apartmentLiving: true,

    idealFor: [
      "First-time dog owners seeking an affectionate, good-natured, and manageable companion",
      "Apartment, condominium, or small-home residents wanting a calm indoor pet",
      "Families with children desiring a gentle, sturdy, and playful companion",
      "Retirees, seniors, or remote workers who spend the majority of the day at home",
      "Owners who prefer leisurely walks and relaxed indoor living over high-intensity outdoor athletics",
      "Households committed to regular facial fold hygiene and air-conditioned summer living"
    ],

    notIdealFor: [
      "Running, jogging, or strenuous hiking enthusiasts looking for an athletic endurance partner",
      "Residents of warm, humid climates lacking reliable indoor air conditioning",
      "Households where the dog would be left alone without human company for long workdays",
      "Individuals intolerant of snoring, snorting sounds, or steady household hair shedding",
      "Owners unwilling to clean facial skin folds several times weekly or manage brachycephalic veterinary needs"
    ]
  },

  funFacts: [
    "Pugs are an ancient breed originating in China during the Han dynasty (around 200 B.C.), where they were pampered companions to emperors and guarded by soldiers.",
    "A collective group of Pugs is traditionally known as a 'grumble'.",
    "The breed's classical motto is 'multum in parvo', a Latin phrase meaning 'a lot in a little' or 'much dog in a small space', describing its compact, muscular substance.",
    "In the sixteenth century, a Pug named Pompey reportedly saved the life of William the Silent, Prince of Orange, by scratching and barking when assassins approached his tent, making the breed the official mascot of the House of Orange.",
    "Josephine Bonaparte had a devoted Pug named Fortune, who carried concealed messages under his collar to her family while she was imprisoned during the French Revolution.",
    "The high-set tail curled tightly over the hip is a hallmark feature, and a double curl is regarded as the epitome of breed perfection.",
    "British royalty, including Queen Victoria, developed a passionate affection for the breed in the nineteenth century, establishing breeding kennels that helped standardize the breed's modern appearance."
  ],

  faq: [
    {
      question: "Where does the Pug originate?",
      answer:
        "The breed originated in ancient China over two thousand years ago during the Han dynasty, where it lived in luxury as an imperial companion before traveling to Europe via Dutch merchant traders in the sixteenth century."
    },
    {
      question: "What was the Pug originally bred to do?",
      answer:
        "Unlike working terriers or hunting hounds, the breed was created exclusively as a loyal, affectionate lap companion and royal house pet."
    },
    {
      question: "How tall and heavy does a Pug get?",
      answer:
        "Adults typically stand 10 to 13 inches tall at the withers and have a desirable weight between 14 and 18 pounds, presenting a square, compact, and muscular build."
    },
    {
      question: "How long does a Pug usually live?",
      answer:
        "With proper nutrition, indoor temperature regulation, and preventive veterinary care, the breed typically enjoys a lifespan of 13 to 15 years."
    },
    {
      question: "Do Pugs shed a lot?",
      answer:
        "Yes. Despite having short hair, the breed possesses a dense double coat that sheds continuously throughout the year, with heavy seasonal shedding in spring and autumn that requires brushing several times a week."
    },
    {
      question: "Why do Pugs snore, snort, and make grunting noises?",
      answer:
        "Due to their shortened facial skull, the soft palate and upper respiratory tissues are compressed into a compact space, which naturally produces harmless soft snorts, grunts, and snoring during sleep or excitement."
    },
    {
      question: "Are Pugs good for apartment living?",
      answer:
        "Yes. Their compact size, modest exercise needs, and generally quiet nature indoors make them exceptionally well suited for apartments, provided they receive daily outdoor bathroom walks and indoor companionship."
    },
    {
      question: "Are Pugs good with children and other pets?",
      answer:
        "They are famously friendly, patient, and sturdy with children of all ages and coexist peacefully with other dogs, cats, and household animals."
    },
    {
      question: "Why should a Pug wear a harness instead of a collar?",
      answer:
        "A chest harness distributes pulling forces across the shoulders and chest rather than pressing against the throat, protecting the delicate trachea and airway from mechanical stress."
    },
    {
      question: "How do you care for a Pug's facial wrinkles?",
      answer:
        "Gently wipe between the forehead wrinkles and the deep over-nose roll two to three times weekly using a soft damp cloth or pet wipe, and dry the skin completely to prevent moisture buildup and bacterial irritation."
    },
    {
      question: "Can Pugs tolerate hot or humid weather?",
      answer:
        "No. Their flat facial anatomy makes it difficult to cool down efficiently through panting, rendering them highly vulnerable to heatstroke; they must stay inside air-conditioned spaces during warm or humid days."
    },
    {
      question: "What major health conditions should prospective owners research?",
      answer:
        "Important health considerations include upper airway sensitivity (brachycephalic airway syndrome), eye scratches and dry eye due to shallow eye sockets, genetic necrotizing meningoencephalitis, hip dysplasia, and patellar luxation."
    }
  ],

  references: [
    "fci-pug-official-standard",
    "fci-pug-nomenclature",
    "akc-pug-breed-standard",
    "akc-pug-breed-profile",
    "the-kennel-club-pug-breed-standard",
    "pug-dog-club-of-america-health",
    "ofas-chic-pug-requirements",
    "pug-boas-cambridge-study-2015",
    "pug-dog-encephalitis-necrotizing-meningoencephalitis-study-2009",
    "wikimedia-pug-dog-image-celebindiaworld",
    "wikimedia-my-pug-gmart1111"
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
          id: "fci-pug-official-standard",
          role: "verified",
          locator: "Standard heading and historical names (Carlin, Mops, Doguillo)"
        },
        {
          id: "fci-pug-nomenclature",
          role: "verified",
          locator: "Official multilingual names: Carlin (French), Mops (German)"
        },
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "History: Dutch Mastiff, Chinese Pug, Dutch Bulldog"
        }
      ],
      verifiedOn: "2026-10-24",
      note: "Cross-verified across FCI Standard No. 253, FCI Nomenclature, and AKC breed history."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-pug-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 9 Companion and Toy Dogs, Section 11 Small Molossian type dogs, without working trial"
        },
        {
          id: "fci-pug-nomenclature",
          role: "verified",
          locator: "Group 9, Section 11 Small Molossian type dogs, without working trial"
        },
        {
          id: "akc-pug-breed-standard",
          role: "verified",
          locator: "Toy Group"
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Toy breed group"
        }
      ],
      verifiedOn: "2026-10-24",
      note: "Formulated without registry labels in user-facing text to comply with Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-pug-official-standard",
          role: "verified",
          locator: "Origin: China; Patronage: Great Britain"
        },
        {
          id: "fci-pug-nomenclature",
          role: "verified",
          locator: "Country of origin: China; Country of patronage: Great Britain"
        },
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "Origin: Ancient China, Han Dynasty (206 B.C. to 200 A.D.), and development in the Netherlands and England"
        }
      ],
      verifiedOn: "2026-10-24",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-pug-official-standard",
          role: "verified",
          locator: "Brief historical summary, General appearance, Behaviour/temperament"
        },
        {
          id: "akc-pug-breed-standard",
          role: "verified",
          locator: "General appearance (square and cobby), Temperament"
        },
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "About the breed, History, and Roles"
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Breed characteristics and historical background"
        }
      ],
      verifiedOn: "2026-10-24",
      note: "Synthesized in original phrasing without source or registry names in user-facing text."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-pug-breed-standard",
          role: "verified",
          locator: "General appearance, Head, Body, Tail, Forequarters, Hindquarters, Coat, Color"
        },
        {
          id: "fci-pug-official-standard",
          role: "verified",
          locator: "Head, Body, Tail, Limbs, Coat, Colour"
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Characteristics, General appearance, Head and skull, Coat, Colour"
        }
      ],
      verifiedOn: "2026-10-24",
      note: "Conformation, coat, colors, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "Height: 10-13 inches"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "FCI Standard No. 253 and The Kennel Club standard do not specify numerical withers height. The stored 10 to 13 inches is the published standard measurement from the AKC breed profile and is preserved in its original published unit."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-pug-breed-standard",
          role: "verified",
          locator: "Weight from 14 to 18 pounds (dog or bitch) desirable"
        },
        {
          id: "fci-pug-official-standard",
          role: "verified",
          locator: "Weight: Ideal weight 6,3 – 8,1 kg"
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Size: Ideal weight 6.3-8.1 kgs (14-18 lbs)"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Preserved in published whole-number unit of pounds (14 to 18 lb) as specified in the AKC official standard and The Kennel Club standard, corresponding to the 6.3 to 8.1 kg ideal weight in the FCI standard."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 13-15 years"
        }
      ],
      verifiedOn: "2026-10-24",
      note: "Supported by kennel club and breed club life expectancy publications."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (4/5)"
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Grooming & FAQ: Pugs are known to shed considerably despite short coat"
        }
      ],
      verifiedOn: "2026-10-24",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (2/5)"
        },
        {
          id: "fci-pug-official-standard",
          role: "verified",
          locator: "Jaws and teeth: slightly undershot, lips not pendulous"
        }
      ],
      verifiedOn: "2026-10-24",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-pug-official-standard",
          role: "verified",
          locator: "Behaviour / Temperament: Great charm, dignity and intelligence. Even-tempered, happy and lively disposition."
        },
        {
          id: "akc-pug-breed-standard",
          role: "verified",
          locator: "Temperament: Even-tempered breed, exhibiting stability, playfulness, great charm, dignity, and an outgoing, loving disposition."
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Characteristics: Great charm, dignity and intelligence."
        }
      ],
      verifiedOn: "2026-10-24",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "cited",
          locator: "Breed characteristics and temperament description"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented breed temperament traits."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "cited",
          locator: "Exercise, Grooming, and Living environment"
        },
        {
          id: "pug-dog-club-of-america-health",
          role: "cited",
          locator: "General health, fold cleaning, and airway precautions"
        }
      ],
      verifiedOn: null,
      note:
        "Combines companion dog care recommendations with brachycephalic airway and facial wrinkle hygiene guidance."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "Energy Level (2/5); Exercise Needs (2/5)"
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Exercise: Up to 1 hour per day split into shorter sessions; heat and humidity limits"
        }
      ],
      verifiedOn: "2026-10-24",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "cited",
          locator: "Exercise: Up to 1 hour per day in short sessions"
        },
        {
          id: "akc-pug-breed-profile",
          role: "cited",
          locator: "Exercise: Moderate daily walks"
        }
      ],
      verifiedOn: null,
      note:
        "An estimated range of 30 to 45 minutes of gentle activity reflects the consensus for brachycephalic companion breeds."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Size of home: Flat/Apartment suitable"
        },
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "Adaptability: Adapts Well to Apartment Living (5/5)"
        }
      ],
      verifiedOn: "2026-10-24",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Size of garden: Small/medium garden"
        },
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "Exercise and backyard play guidance"
        }
      ],
      verifiedOn: "2026-10-24",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Airway structure limits tolerance for heat, humidity, and strenuous activity"
        },
        {
          id: "pug-boas-cambridge-study-2015",
          role: "verified",
          locator: "Thermoregulatory vulnerability in brachycephalic breeds"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Highlights the biological requirement for indoor climate control in hot and humid weather."
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "reliable_source",
      sources: [
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "FAQ: Can Pugs be left alone during the day? Not for long stretches, prone to separation anxiety"
        },
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "Tolerates Being Alone: Low rating"
        }
      ],
      verifiedOn: "2026-10-24",
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "cited",
          locator: "Nutrition: high quality food, calorie monitoring, weight management"
        },
        {
          id: "pug-dog-club-of-america-health",
          role: "cited",
          locator: "Nutrition and obesity management"
        }
      ],
      verifiedOn: null,
      note: "Standard feeding and weight-management recommendations for toy companion dogs."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "cited",
          locator: "Life-stage nutrition and portioning"
        }
      ],
      verifiedOn: null,
      note: "General small-breed feeding schedule to support digestion and prevent rapid eating."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pug-boas-cambridge-study-2015",
          role: "verified",
          locator: "Conformational risk factors in brachycephalic obstructive airway syndrome (BOAS)"
        },
        {
          id: "pug-dog-encephalitis-necrotizing-meningoencephalitis-study-2009",
          role: "verified",
          locator: "Genomic association study of necrotizing meningoencephalitis in Pugs"
        },
        {
          id: "ofas-chic-pug-requirements",
          role: "verified",
          locator: "Screening requirements for PDE, patellas, hips, and eyes"
        },
        {
          id: "pug-dog-club-of-america-health",
          role: "verified",
          locator: "Health overview, breathing issues, PDE research, and orthopaedic screening"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Synthesizes peer-reviewed studies on BOAS and PDE alongside health registry screening protocols."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "pug-boas-cambridge-study-2015",
          role: "verified",
          locator: "BOAS findings, stenotic nares, and elongated soft palate"
        },
        {
          id: "pug-dog-encephalitis-necrotizing-meningoencephalitis-study-2009",
          role: "verified",
          locator: "Necrotizing meningoencephalitis (NME / PDE) clinical and genetic description"
        },
        {
          id: "pug-dog-club-of-america-health",
          role: "verified",
          locator: "Eye injuries, skin fold dermatitis, hemivertebrae, and joint dysplasia"
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Category 3 conformational concerns, eyes, and skin folds"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Details documented conformational and genetic conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "pug-dog-club-of-america-health",
          role: "cited",
          locator: "Preventive care, harness usage, fold maintenance, and temperature control"
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "cited",
          locator: "Heat precautions, fold hygiene, and eye care"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to flat-faced toy dogs."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofas-chic-pug-requirements",
          role: "verified",
          locator: "Parent-club and CHIC testing requirements: PDE DNA test, Patellar Luxation, Eye Examination, Hip Dysplasia"
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Good practice & best practice testing: PDE DNA test, BVA/KC hip scheme, BOAS respiratory grading scheme"
        },
        {
          id: "pug-dog-club-of-america-health",
          role: "verified",
          locator: "Pre-breeding screening recommendations for PDE, eyes, hips, patellas, and spine"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Screenings summarize published breed club and health registry recommendations."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "cited",
          locator: "Grooming and dental maintenance"
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "cited",
          locator: "Dentition and mouth conformation"
        }
      ],
      verifiedOn: null,
      note: "Dental care guidelines for small breeds with shortened dental arcades."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "cited",
          locator: "Ear checks and grooming"
        },
        {
          id: "fci-pug-official-standard",
          role: "cited",
          locator: "Button and rose ear anatomy"
        }
      ],
      verifiedOn: null,
      note: "Ear hygiene guidance for drop-eared toy dogs."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "cited",
          locator: "Skin fold hygiene and health concerns"
        },
        {
          id: "pug-dog-club-of-america-health",
          role: "cited",
          locator: "Facial wrinkle and tail fold maintenance"
        }
      ],
      verifiedOn: null,
      note: "Dermatological care protocol for breeds with deep skin folds."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "cited",
          locator: "Breed characteristics and living requirements"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are informed editorial recommendations based on breed temperament, exercise demands, and thermal sensitivities."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "History: House of Orange, Han dynasty origins, Queen Victoria, 'multum in parvo'"
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Breed characteristics: 'multum in parvo' and royal history"
        },
        {
          id: "fci-pug-official-standard",
          role: "verified",
          locator: "General appearance (multum in parvo) and tail curl description"
        }
      ],
      verifiedOn: "2026-10-24",
      note: "Verified historical folklore and classical breed mottos."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-pug-breed-profile",
          role: "verified",
          locator: "Origin, size, weight, lifespan, shedding, and temperament"
        },
        {
          id: "the-kennel-club-pug-breed-standard",
          role: "verified",
          locator: "Frequently Asked Questions: family suitability, exercise, shedding, health, and separation anxiety"
        },
        {
          id: "fci-pug-official-standard",
          role: "verified",
          locator: "Conformation, weight range, and physical features"
        },
        {
          id: "pug-boas-cambridge-study-2015",
          role: "verified",
          locator: "Respiratory and thermoregulatory characteristics"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "FAQ responses synthesize verified standards, kennel club publications, and veterinary research without citing registry names in user-facing answers."
    }
  },

  updatedOn: "2026-10-24"
};
