import type { Breed } from "../schema/breed.types";

export const tibetan_terrier: Breed = {
  slug: "tibetan-terrier",
  name: "Tibetan Terrier",
  scientificName: null,

  alternateNames: [
    "Tsang Apso",
    "Dokhi Apso",
    "Dhokhi Apso",
    "Holy Dog of Tibet",
    "Luck Bringer"
  ],

  group:
    "Companion and Toy Dogs; Tibetan Breeds (also classified in the Non-Sporting and Utility groups)",

  origin: {
    country: "Tibet",
    region:
      "Tibetan Plateau, historically associated with high-altitude monasteries, trading caravans, and mountain villages"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tibetan_Terrier.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Tibetan_Terrier.jpg",
      title: "Tibetan Terrier.jpg",
      description: "A Tibetan Terrier.",
      creator: "Acid Pix",
      uploader: "Ltshears, via Flickr upload bot",
      capturedOn: "2012-10-15",
      uploadedOn: "2012-11-13",
      width: 2402,
      height: 1601,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Acid Pix, via Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:Tibetan_Terrier.jpg. License: https://creativecommons.org/licenses/by/2.0/. Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-10-25"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/8_year_old_male_Tibetan_Terrier.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:8_year_old_male_Tibetan_Terrier.jpg",
      title: "8 year old male Tibetan Terrier.jpg",
      description: "8 year old male purebred Tibetan Terrier sporting a 'puppy cut'",
      creator: "Getsnarky",
      uploader: "Getsnarky",
      capturedOn: "2019-12-14",
      uploadedOn: "2020-12-08",
      width: 2049,
      height: 1537,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Getsnarky, via Wikimedia Commons, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:8_year_old_male_Tibetan_Terrier.jpg. License: https://creativecommons.org/licenses/by-sa/4.0/. Changes, if any, must be indicated; derivative works must be shared under the same or a compatible license.",
      restrictions: null,
      metadataCheckedOn: "2026-10-25"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tibet_Terrier_Bennie.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Tibet_Terrier_Bennie.jpg",
      title: "Tibet Terrier Bennie.jpg",
      description: "Tibetan Terrier on snow",
      creator: "Mr407SW",
      uploader: "Mr407SW",
      capturedOn: "2006-03-08",
      uploadedOn: "2008-03-19",
      width: 1728,
      height: 1152,
      licenseId: "public-domain",
      attribution:
        "Photo by Mr407SW, via Wikimedia Commons, dedicated to the public domain by the copyright holder. Source: https://commons.wikimedia.org/wiki/File:Tibet_Terrier_Bennie.jpg.",
      restrictions: null,
      metadataCheckedOn: "2026-10-25"
    }
  ],

  overview: {
    summary:
      "A sturdy, square-proportioned Tibetan companion and monastery watchdog distinguished by its abundant double coat, protective facial fall, and wide, flat snowshoe-like feet.",

    description:
      "The Tibetan Terrier is a medium-sized, powerfully built dog with a compact, square silhouette in which body length from shoulder point to tail root matches height at the withers. Adapted over centuries to extreme high-altitude weather and steep mountain passes, the breed carries a dense, insulating double coat, a natural curtain of long hair falling over the eyes and foreface, a heavily feathered tail curled forward over the back, and uniquely broad, flat, round feet that act like natural snowshoes. Despite the word 'terrier' in its English name—given by nineteenth- and twentieth-century European travellers because of its medium stature—it has no true terrier ancestry or underground earth-working instincts. Instead, it combines the alert watchfulness of a homestead and caravan sentinel with the deep household devotion of an indoor companion. Lively, observant, and affectionate with its family while often polite or reserved around strangers, the breed thrives on daily walks, positive training, close human company, and committed coat care.",

    history:
      "For roughly two millennia, Tibetan monks, villagers, and nomadic traders raised these shaggy dogs across the high plateaus of Tibet, calling them Tsang Apso ('shaggy or bearded dog from the province of Tsang') or Dokhi Apso ('shaggy outdoor dog'). Highly prized as 'luck bringers' and revered as holy dogs, they were never sold for money; instead, monasteries and families presented puppies only as esteemed gifts of gratitude or emblems of good fortune, believed to bring prosperity to a household or caravan. In everyday life, they alerted monks and traders to approaching strangers, helped herd and mind livestock, and scrambled over rocky ledges to retrieve items dropped down mountain slopes. The breed entered documented Western cynology in 1922, when English physician Dr. Agnes R. H. Greig, practicing medicine in northern India, received a gold-and-white female puppy named Bunti in appreciation for performing a successful surgery on a Tibetan patient's wife. Encouraged by dog-show judges in Delhi to establish whether the type bred true, Dr. Greig acquired a male named Rajah, produced her first litter on Christmas Day in 1924, and founded the influential Lamleh kennel in England. Originally registered in India as Lhasa Terriers, the dogs were officially renamed Tibetan Terriers in 1930, gained national recognition in Great Britain in 1937 and international recognition in 1957, and arrived in the United States in 1956 through imports by Dr. Henry and Alice Murphy of Virginia before achieving full North American recognition in 1973.",

    originalPurpose:
      "Monastery and caravan watchdog, livestock-herding assistant, mountain retriever of dropped goods, and cherished household companion and talisman of good fortune in Tibet.",

    currentRoles: [
      "Devoted family and household companion",
      "Alert domestic watchdog",
      "Agility, rally, obedience, and scent-work competitor",
      "Hiking and outdoor walking partner",
      "Therapy and emotional-support visiting dog"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: { min: 36, max: 41 },
      female: null
    },

    weight: {
      unit: "kg",
      male: { min: 8, max: 14 },
      female: { min: 8, max: 14 }
    },

    lifespanYears: {
      min: 12,
      max: 16
    },

    coatType:
      "Profuse double coat consisting of a fine, soft, insulating woolly undercoat and an abundant, fine outer coat with a texture similar to human hair—neither silky nor woolly—falling straight or in natural waves, never tightly curled, and clearing the ground in adult dogs.",

    coatLength: "Long",

    coatColors: [
      "White",
      "Golden",
      "Cream",
      "Grey",
      "Smoke",
      "Black",
      "Parti-colour (bicolour)",
      "Tricolour",
      "Brindle",
      "Sable",
      "Fawn",
      "Red",
      "Silver",
      "Black and Tan"
    ],

    sheddingLevel:
      "Low to moderate; shed hairs frequently catch within the dense double coat rather than falling freely, with heavier undercoat turnover during seasonal changes and the 9-to-18-month juvenile-to-adult coat transition.",

    droolingLevel: "Low",

    distinctiveFeatures: [
      "Large, flat, round feet with no toe arch and heavy hair between the toes and pads, creating a snowshoe effect for traction on snow and steep rock",
      "Long curtain of hair ('fall') covering the eyes and foreface to shield against wind, dust, and snow glare without obstructing vision, complemented by long protective eyelashes and a modest lower-jaw beard",
      "Compact, square, well-muscled body where length from point of shoulder to root of tail equals height at the withers, with a level topline and slightly arched short loin",
      "Medium-length, heavily feathered tail set fairly high and carried in a cheerful curl forward over the back, often with a permissible small kink near the tip",
      "Slightly curved incisor arcade between the canine teeth, with scissor, reverse scissor, level, or slightly undershot bites accepted depending on regional conformation traditions",
      "Pendant V-shaped ears set fairly high on the skull, carried slightly away from the head, and heavily feathered",
      "Jet-black nose leather and dark brown eyes with black eye rims required across all permissible coat colours"
    ]
  },

  temperament: {
    traits: [
      "Deeply affectionate and devoted to family",
      "Bright, observant, and quick-witted",
      "Lively, playful, and spirited",
      "Alert and watchful without pugnacity",
      "Polite or reserved with unfamiliar people",
      "Sensitive to handler tone and household mood",
      "Agile, sure-footed, and adaptable",
      "Independent-minded yet eager for companionship"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 3,
      independence: 3,
      trainability: 4,
      barking: 3,
      energy: 3
    }
  },

  care: {
    exercise: {
      level: "Moderate",

      minutesPerDay: {
        min: 45,
        max: 60
      },

      activities: [
        "Brisk daily walks and neighbourhood exploration",
        "Hikes on varied trails and uneven terrain suited to their sure-footed build",
        "Agility, rally obedience, barn hunt, and scent-work courses",
        "Interactive backyard games and reward-based trick training",
        "Indoor food puzzles and nose-work enrichment on inclement days"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Line-brush and comb a full coat down to the skin three todaily times a week—and daily during the 9-to-18-month adolescent coat change—always misting the hair lightly with water or diluted conditioner first so dry brushing does not snap the outer coat. Part the hair in layers and check friction zones behind the ears, under the collar, in the armpits, along the chest and legs, around the tail base, and between the toes.",

      bathing:
        "Bathe every few weeks or as needed using a mild, dog-formulated shampoo and conditioner. Rinse completely and blow-dry the coat thoroughly down to the dense undercoat while brushing so trapped dampness does not felt into tight mats against the skin.",

      notes: [
        "Never brush a dry, soiled coat; light conditioning spray and gentle detangling prevent static and hair breakage.",
        "Pay extra attention between 9 and 18 months of age, when the soft puppy coat sheds into the coarser adult coat and mats can form overnight.",
        "Trim hair flush with the bottom of the paw pads for indoor traction and inspect the interdigital spaces for burrs, Foxtails, pebble debris, or snowballs.",
        "Many companion owners opt for a shorter, practical 'puppy cut' or lamb clip every 6 to 8 weeks to simplify daily brushing while retaining the breed's expressive look.",
        "Do not shave the double coat down to bare skin unless medically directed by a veterinarian, as the coat insulates and shields skin from sun and cold.",
        "Check and clean the heavily feathered pendant ears weekly, and keep nails trimmed so the flat feet rest squarely on their pads."
      ]
    },

    training: {
      difficulty:
        "Moderate; intelligent and perceptive learners that respond enthusiastically to upbeat, reward-based coaching but can tune out repetitive drills or shut down under harsh corrections.",

      tips: [
        "Keep training sessions short, varied, and game-like using high-value food rewards, play, and praise.",
        "Begin gentle table manners and grooming conditioning in early puppyhood so brushing, combing, blow-drying, foot handling, and ear checks feel routine.",
        "Practice calm doorway and window routines early, rewarding the dog for checking in quietly after an initial alert bark.",
        "Build gradual independence through crate or safe-zone games and chew enrichment so strong family attachment does not turn into separation distress.",
        "Avoid heavy-handed or confrontational methods, which conflict with the breed's sensitive, thoughtful temperament."
      ],

      socialization:
        "Enroll puppies in early socialization classes ideally before 16 weeks of age and introduce diverse people, polite children, friendly dogs, grooming sounds, and novel surfaces at a comfortable pace. Because the breed is naturally sparing of affection toward strangers, reward calm curiosity without forcing unsolicited handling."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Cool and temperate climates",
        "Cold and snowy mountain climates when housed indoors with family",
        "Warm climates when provided air-conditioned indoor living, shade, fresh water, and walks during cool morning or evening hours"
      ],

      aloneTimeTolerance:
        "Low to moderate; bred for centuries as close human companions, Tibetan Terriers bond deeply with their household and can develop separation anxiety or nuisance barking if left isolated for long workdays without gradual conditioning and company."
    }
  },

  nutrition: {
    dietType:
      "A complete, balanced canine diet formulated for medium-sized breeds and matched to the dog's life stage, activity level, and veterinary health profile.",

    feedingFrequency: {
      puppy:
        "Three to four measured meals per day during early growth, tapering to two daily meals as the puppy approaches maturity around 9 to 12 months.",

      adult:
        "Two measured meals per day, adjusted to maintain a lean, well-muscled waistline beneath the heavy coat.",

      senior:
        "Two measured meals per day tailored to senior metabolic needs, joint comfort, and dental or organ health in consultation with a veterinarian."
    },

    guidelines:
      "Because the profuse double coat easily conceals gradual weight gain, assess body condition regularly by feeling the ribs, waist, and spine with your hands rather than relying on visual outline alone. Measure daily rations, count training treats within total daily calories, and provide constant access to clean water.",

    considerations: [
      "Hands-on rib and waist checks are essential because thick coat volume masks early overweight.",
      "Keep body weight lean to reduce mechanical load on hips and kneecaps.",
      "Adequate dietary protein and essential fatty acids support healthy skin and the growth of the long double coat.",
      "Transition between diets gradually over 5 to 7 days to prevent digestive upset.",
      "Consult a veterinarian before adding supplements or switching to a therapeutic formula."
    ],

    note:
      "Calorie requirements vary with age, metabolism, spay/neuter status, and daily exercise; adjust portion sizes with veterinary guidance."
  },

  health: {
    overview:
      "The Tibetan Terrier is generally a hardy, long-lived breed that regularly reaches 12 to 16 years of age, with some individuals living even longer. Responsible health stewardship separates clinical orthopedic, ophthalmic, auditory, and endocrine conditions monitored through veterinary physical examinations from four specific autosomal recessive eye and neurological mutations—neuronal ceroid lipofuscinosis (ATP13A2), primary lens luxation (ADAMTS17), progressive retinal atrophy type 3 (FAM161A), and rod-cone dysplasia type 4 (C2orf71)—for which validated DNA tests allow breeders to prevent affected litters.",

    commonConditions: [
      "Neuronal ceroid lipofuscinosis (NCL / CCL, ATP13A2 mutation): a molecularly characterized, late-onset autosomal recessive neurodegenerative disorder caused by a single-base deletion (c.1620delG) in exon 16 of the ATP13A2 gene on chromosome 2. Clinical signs typically emerge in adulthood with anxiety or uncharacteristic irritability, progressive hindlimb incoordination, difficulty jumping or navigating stairs, dim-light visual decline, and late-stage seizures; widespread DNA screening since 2010 has markedly reduced mutant allele frequency in tested populations.",
      "Primary lens luxation (PLL, ADAMTS17 mutation): an inherited ocular disorder associated with a splice-donor mutation (c.1473+1G>A) in the ADAMTS17 gene on chromosome 3 that weakens the zonular fibres holding the crystalline lens in place, potentially causing painful lens displacement and secondary glaucoma in adulthood; genetically affected dogs and a small percentage of carriers are at clinical risk.",
      "Progressive retinal atrophy (PRA3 and RCD4 forms): inherited retinal degenerations that cause night blindness progressing to complete vision loss. Two distinct autosomal recessive mutations are documented in the breed—an intronic SINE insertion in FAM161A on chromosome 10 causing earlier-onset PRA3, and a frameshift insertion (c.3149_3150insC) in C2orf71 (C17H2orf71) causing late-onset rod-cone dysplasia type 4 (RCD4)—alongside forms detected only through periodic veterinary ophthalmologist exams.",
      "Hip dysplasia: a developmental malformation of the coxofemoral joint that can lead to joint laxity, osteoarthritis, and hindlimb stiffness; monitored through pre-breeding radiographic hip scoring.",
      "Patellar luxation: medial or lateral slippage of the kneecap out of its femoral groove, which can cause intermittent skipping lameness; evaluated via veterinary physical examination.",
      "Congenital sensorineural deafness: hereditary unilateral or bilateral hearing loss present from birth, screened in puppies and breeding stock using brainstem auditory evoked response (BAER) testing.",
      "Other ocular conditions (cataracts, persistent pupillary membranes, distichiasis, and corneal ulcers): structural or age-related eye issues identified during routine board-certified veterinary ophthalmologist examinations.",
      "Autoimmune thyroiditis and hypothyroidism: endocrine insufficiency occasionally reported in the breed that can cause weight gain, lethargy, and coat thinning."
    ],

    preventiveCare: [
      "Verify that both parents of a prospective puppy have documented veterinary hip, patellar, BAER hearing, and annual ophthalmologist clearances, plus DNA test results for NCL (ATP13A2), PLL (ADAMTS17), PRA3 (FAM161A), and RCD4 (C2orf71).",
      "Schedule annual veterinary wellness examinations and periodic eye checks, especially for middle-aged and senior dogs.",
      "Maintain a lean body weight and steady muscle tone to protect the hips, stifles, and spine throughout a 12-to-16-year lifespan.",
      "Keep the facial fall clean and check the eyes regularly for redness, squinting, cloudy lenses, or tearing.",
      "Part the coat to the skin during brushing to prevent mat-induced skin infections and inspect the feathered ear canals weekly.",
      "Seek immediate veterinary care if sudden eye pain, squinting, cloudy corneas, night-vision hesitancy, stumbling on stairs, or uncharacteristic anxiety appears."
    ],

    recommendedScreenings: [
      "Hip dysplasia radiographic evaluation (at 24 months of age or older, or preliminary evaluation as advised)",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist",
      "Neuronal ceroid lipofuscinosis (NCL / ATP13A2 c.1620delG) DNA test",
      "Primary lens luxation (PLL / ADAMTS17 c.1473+1G>A) DNA test",
      "Progressive retinal atrophy type 3 (PRA3 / FAM161A) DNA test",
      "Rod-cone dysplasia type 4 late-onset PRA (RCD4 / C2orf71) DNA test",
      "Patellar luxation veterinary orthopedic evaluation",
      "Brainstem auditory evoked response (BAER) congenital hearing test (and optional laboratory thyroid panel)"
    ],

    dentalCare:
      "Brush teeth several times a week using a canine toothbrush and dog-safe enzymatic toothpaste, and schedule regular veterinary dental evaluations and professional cleanings as needed.",

    earCare:
      "Because the V-shaped pendant ears are heavily feathered and hang beside the skull, air circulation in the ear canal is reduced. Inspect the ears weekly for wax buildup, trapped moisture, redness, or odour, and clean gently with a veterinarian-recommended ear solution after baths.",

    skinCare:
      "Line-brush down to the skin so shed undercoat does not felt into tight mats that trap moisture and cause hotspots. Rinse all shampoo residue thoroughly and dry the undercoat completely after bathing or snowy walks."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Devoted individuals, couples, seniors, and families who want an affectionate, long-lived indoor companion",
      "First-time or experienced dog owners willing to use positive reinforcement training and commit to regular coat care (or professional pet trims)",
      "Active households that enjoy daily walks, trail hikes, agility, rally, or obedience games",
      "Apartment or house dwellers who spend plenty of daily time at home or include their dog in everyday outings",
      "Owners who appreciate a watchful, expressive dog with a sense of humour and strong family loyalty"
    ],

    notIdealFor: [
      "People who want a wash-and-wear coat and are unwilling to brush several times a week or budget for regular grooming",
      "Households where a dog is routinely left isolated alone for long 8-to-10-hour workdays",
      "Owners expecting an instantly effusive greeter with every stranger rather than a polite, discerning companion",
      "People who dislike alert barking at doorway or neighbourhood activity",
      "Trainers who rely on harsh, punitive, or repetitive mechanical methods"
    ]
  },

  funFacts: [
    "Despite its English name, the Tibetan Terrier is not a true terrier at all; early European travellers called it a 'terrier' simply because its compact, lively build reminded them of medium-sized terriers back home.",
    "In Tibet, the breed was revered as the 'Holy Dog of Tibet' and a 'luck bringer'—selling one was believed to bring misfortune to both household and village, so puppies were only ever presented as cherished gifts of gratitude or blessing.",
    "Its large, flat, round feet have no arch in the toes and are densely padded with hair between the toes and pads, acting like built-in snowshoes for grip on icy mountain passes.",
    "Traditional Tibetan accounts describe these agile dogs leaping onto the backs of pack animals and helping traders retrieve fallen articles that tumbled down steep mountain slopes.",
    "Every modern registered lineage outside Tibet traces back to Bunti, a gold-and-white female gifted in 1922 to British surgeon Dr. Agnes R. H. Greig after she saved the life of a Tibetan patient in India.",
    "Unlike most canine breeds where only a straight incisor line is desired, the Tibetan Terrier naturally has a slight curve in the jaw between the canine teeth, and scissor, reverse scissor, level, or slightly undershot bites are recognized."
  ],

  faq: [
    {
      question: "Is the Tibetan Terrier an actual terrier?",
      answer:
        "No. The breed has no working-terrier ancestry and was never bred to go to ground after vermin. It developed in Tibet as a monastery watchdog, herding helper, and companion, and received the 'terrier' label from European visitors solely because of its medium size and spirited agility."
    },
    {
      question: "How tall and heavy is an adult Tibetan Terrier?",
      answer:
        "Adult males typically stand 36 to 41 cm (14 to 16 inches) at the withers—with an ideal male average around 38 to 41 cm (15 to 16 inches) and an overall acceptable span of 36 to 43 cm (14 to 17 inches)—while females are slightly smaller. Adult weight for both sexes is generally 8 to 14 kg (18 to 30 pounds), proportioned to the dog's height so the body remains compact, muscular, and square."
    },
    {
      question: "What coat colours are allowed in the Tibetan Terrier?",
      answer:
        "Almost any colour or pattern is accepted—including white, golden, cream, grey, smoke, black, sable, brindle, fawn, red, silver, parti-colour (bicolour), and tricolour—provided the nose leather, eyelids, and eye rims are black and the eyes are dark brown. However, international and British conformation rules explicitly forbid chocolate, liver, and merle coats."
    },
    {
      question: "How much daily exercise does a Tibetan Terrier require?",
      answer:
        "Most adults thrive on about 45 to 60 minutes of daily physical and mental activity, such as brisk walks, off-lead play in a secure area, hiking, agility, or reward-based training games. Puppies and seniors need shorter, age-appropriate outings."
    },
    {
      question: "Does the Tibetan Terrier shed, and is it hypoallergenic?",
      answer:
        "The breed sheds much less loose hair onto floors and furniture than many double-coated dogs because shed hairs tend to stay trapped inside the long coat until brushed out, with heavier coat turnover during adolescence (9 to 18 months) and seasonal shifts. While some allergy sufferers tolerate the breed well, no dog is completely hypoallergenic because allergens are present in dander and saliva."
    },
    {
      question: "How demanding is Tibetan Terrier coat maintenance?",
      answer:
        "A full-length double coat requires thorough line-brushing and combing down to the skin three to four times a week (and daily during the adolescent coat transition), always misting the coat first so dry brushing does not break the hair. Owners who prefer simpler upkeep often keep their companions in a neat, shorter 'puppy cut' trimmed every 6 to 8 weeks."
    },
    {
      question: "Can a Tibetan Terrier live comfortably in an apartment?",
      answer:
        "Yes, its medium stature and adaptable indoor nature suit apartment living well, provided the dog receives daily outdoor exercise, mental enrichment, and training to moderate alert barking. Because the breed bonds closely with its family and dislikes prolonged isolation, it does best in homes where someone is around for much of the day."
    },
    {
      question: "Are Tibetan Terriers good for first-time dog owners and families with children?",
      answer:
        "Yes. For first-time owners who are prepared for consistent grooming and gentle, positive training, the Tibetan Terrier is a loyal, affectionate, and trainable companion. They generally get along well with respectful children and other household dogs when socialized early and supervised appropriately."
    },
    {
      question: "What inherited health conditions and DNA tests should puppy buyers ask about?",
      answer:
        "Prospective owners should ask breeders for documented orthopedic hip and patellar evaluations, a board-certified veterinary ophthalmologist exam, a BAER hearing test, and DNA test results for four specific inherited disorders: adult-onset neuronal ceroid lipofuscinosis (NCL / ATP13A2), primary lens luxation (PLL / ADAMTS17), progressive retinal atrophy type 3 (PRA3 / FAM161A), and rod-cone dysplasia type 4 (RCD4 / C2orf71)."
    },
    {
      question: "How long do Tibetan Terriers typically live?",
      answer:
        "They are a hardy, long-lived breed with a typical life expectancy of 12 to 16 years, and well-cared-for individuals occasionally reach 17 years or more."
    }
  ],

  references: [
    "fci-tibetan-terrier-standard",
    "fci-tibetan-terrier-nomenclature",
    "akc-tibetan-terrier-standard",
    "akc-tibetan-terrier-profile",
    "rkc-tibetan-terrier-standard",
    "ttca-tibetan-terrier-standard-guide",
    "ttca-tibetan-terrier-history",
    "ttca-tibetan-terrier-health-testing",
    "ttca-tibetan-terrier-health",
    "ofa-tibetan-terrier-ncl",
    "petmd-tibetan-terrier",
    "pubmed-tibetan-terrier-ncl-atp13a2",
    "pubmed-tibetan-terrier-ccl-selection",
    "pubmed-tibetan-terrier-pra3-fam161a",
    "pubmed-canine-pll-adamts17",
    "the-dog-api",
    "wikimedia-tibetan-terrier-acid-pix",
    "wikimedia-tibetan-terrier-8yo-male",
    "wikimedia-tibet-terrier-bennie"
  ],

  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Set to null (unavailable) in alignment with the attached reference schema so no unverified species-level taxonomic string is asserted as a breed-specific fact."
    },

    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "Breed profile & history: Tsang Apso, Dokhi Apso, Holy Dog of Tibet, Luck Bringer"
        },
        {
          id: "fci-tibetan-terrier-standard",
          role: "verified",
          locator: "Brief Historical Summary: 'Holy Dog of Tibet'"
        },
        {
          id: "ttca-tibetan-terrier-history",
          role: "verified",
          locator: "Breed history: 'luck bringers', 'holy dogs'"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names: 'Dhokhi Apso', 'Tsang Apso', 'Holy Dog of Tibet'"
        }
      ],
      verifiedOn: "2026-10-25",
      note:
        "Verified across the AKC breed profile, FCI Standard No. 209, TTCA history, and The Dog API ('Dhokhi Apso' spelling variant added from The Dog API)."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-tibetan-terrier-standard",
          role: "verified",
          locator: "FCI-CLASSIFICATION: Group 9 Companion and Toy Dogs, Section 5 Tibetan breeds. Without working trial."
        },
        {
          id: "fci-tibetan-terrier-nomenclature",
          role: "verified",
          locator: "Group n°9 - Companion and Toy Dogs, Section Tibetan breeds"
        },
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "Group: Non-Sporting Group"
        },
        {
          id: "rkc-tibetan-terrier-standard",
          role: "verified",
          locator: "Group: Utility"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.breed_group: 'Non-Sporting'"
        }
      ],
      verifiedOn: "2026-10-25",
      note:
        "Rewritten to remove registry abbreviations ('AKC', 'FCI') from user-facing text per Rule 5 while reflecting FCI (Companion and Toy Dogs / Tibetan Breeds), AKC and The Dog API (Non-Sporting), and RKC (Utility) classifications."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-tibetan-terrier-standard",
          role: "verified",
          locator: "ORIGIN: Tibet (China); PATRONAGE: Great Britain"
        },
        {
          id: "akc-tibetan-terrier-standard",
          role: "verified",
          locator: "General Appearance & historical origin in Tibet"
        },
        {
          id: "ttca-tibetan-terrier-standard-guide",
          role: "verified",
          locator: "General Appearance commentary: high altitude, climate, and rough terrain of Tibet"
        },
        {
          id: "ttca-tibetan-terrier-history",
          role: "verified",
          locator: "Origin in Tibetan monasteries and villages"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin: 'Tibet'"
        }
      ],
      verifiedOn: "2026-10-25",
      note:
        "Verified across FCI Standard No. 209, AKC Official Standard, TTCA, and The Dog API."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-tibetan-terrier-standard",
          role: "verified",
          locator: "Utilization, Brief Historical Summary, General Appearance, Important Proportions, Behaviour/Temperament"
        },
        {
          id: "akc-tibetan-terrier-standard",
          role: "verified",
          locator: "General Appearance, Head, Body, Feet, Tail, Coat, Temperament"
        },
        {
          id: "rkc-tibetan-terrier-standard",
          role: "verified",
          locator: "General appearance, Characteristics, Temperament"
        },
        {
          id: "ttca-tibetan-terrier-history",
          role: "verified",
          locator: "1922 Dr. Agnes R. H. Greig gift of Bunti, 1924 Christmas Day litter with Rajah, Lamleh kennel, 1930 renaming, 1937 UK recognition, 1956 US import by Dr. Henry and Alice Murphy, 1973 AKC recognition"
        },
        {
          id: "ttca-tibetan-terrier-standard-guide",
          role: "verified",
          locator: "High-altitude adaptations, snowshoe feet, natural presentation"
        },
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "History, temperament, and modern canine sports/therapy roles"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history"
        }
      ],
      verifiedOn: "2026-10-25",
      note:
        "All overview fields (summary, description, history, originalPurpose, currentRoles) are written in 100% original wording with no sentences or phrases copied from The Dog API or any other source."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-tibetan-terrier-standard",
          role: "verified",
          locator: "General Appearance, Important Proportions, Head, Eyes, Ears, Mouth, Body, Tail, Feet, Coat, Colour, Size"
        },
        {
          id: "akc-tibetan-terrier-standard",
          role: "verified",
          locator: "General Appearance, Head, Teeth (scissors, reverse scissors, level, slightly undershot), Body, Feet, Tail, Coat, Color, Size"
        },
        {
          id: "rkc-tibetan-terrier-standard",
          role: "verified",
          locator: "General appearance, Head and skull, Mouth, Feet, Tail, Coat, Colour, Size"
        },
        {
          id: "ttca-tibetan-terrier-standard-guide",
          role: "verified",
          locator: "Pages 1–31: Head fall, black nose requirement, bite variations, square proportions, flat un-arched snowshoe foot anatomy, tail carriage, double coat"
        }
      ],
      verifiedOn: "2026-10-25",
      note:
        "Physical traits verified across FCI Standard No. 209, AKC Official Standard, RKC Standard, and TTCA Illustrated Guide."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-tibetan-terrier-standard",
          role: "verified",
          locator: "SIZE: Height at the withers: Males: 36 - 41 cm; females slightly smaller."
        },
        {
          id: "rkc-tibetan-terrier-standard",
          role: "verified",
          locator: "Size: Height at shoulder: dogs: 36-41 cms (14-16 ins); bitches: slightly smaller."
        },
        {
          id: "akc-tibetan-terrier-standard",
          role: "conflicting",
          locator: "Size: Average height in dogs is 15 to 16 inches (38–41 cm), bitches slightly smaller; heights outside 14–17 inches (36–43 cm) are faulted."
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.height.metric: 36 - 43 cm (applied to both male and female without sex separation)"
        }
      ],
      verifiedOn: "2026-10-25",
      note:
        "Male height is set to 36–41 cm per FCI Standard No. 209 and the RKC standard (14–16 in). AKC lists an average male height of 15–16 in (38–41 cm) within an overall acceptable range of 14–17 in (36–43 cm). Because FCI, RKC, and AKC all state qualitatively that females are 'slightly smaller' rather than defining a separate numeric female range—whereas The Dog API applies the combined 36–43 cm range equally to both sexes—female height is kept null and The Dog API is recorded as conflicting."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-tibetan-terrier-standard",
          role: "verified",
          locator: "Size: Weight should be 18 to 30 pounds (8.2 to 13.6 kg, rounded to 8–14 kg) and proportionate to height (14–30 lbs across 14–16 inch heights)"
        },
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "Weight: 18-30 pounds"
        },
        {
          id: "petmd-tibetan-terrier",
          role: "verified",
          locator: "Size and weight: up to 30 pounds"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric: 8 - 14 kg"
        }
      ],
      verifiedOn: "2026-10-25",
      note:
        "Populated at 8–14 kg (18–30 lb) for both sexes in agreement with the AKC Official Standard, AKC breed profile, and The Dog API."
    },

    "physical.weight.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-tibetan-terrier-standard",
          role: "verified",
          locator: "Size: Weight 18 to 30 pounds (8–14 kg)"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric: max 14 kg"
        }
      ],
      verifiedOn: "2026-10-25",
      note: "Verified at 14 kg (30 lb) from the AKC Official Standard and The Dog API."
    },

    "physical.weight.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-tibetan-terrier-standard",
          role: "verified",
          locator: "Size: Weight 18 to 30 pounds (8–14 kg)"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric: max 14 kg"
        }
      ],
      verifiedOn: "2026-10-25",
      note: "Verified at 14 kg (30 lb) from the AKC Official Standard and The Dog API."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ttca-tibetan-terrier-health",
          role: "verified",
          locator: "Longevity: many living 12 years or beyond, often 15–16 years"
        },
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "Life Expectancy: 15-16 years"
        },
        {
          id: "petmd-tibetan-terrier",
          role: "verified",
          locator: "Life Expectancy: 15–16 years"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span: 12 - 16 years"
        }
      ],
      verifiedOn: "2026-10-25",
      note:
        "Updated from 12–15 to 12–16 years to encompass the 15–16 year upper range documented by AKC, TTCA, PetMD, and The Dog API."
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-tibetan-terrier-standard",
          role: "verified",
          locator: "COAT - Colour: 'White, golden, cream, grey or smoke, black, parti-colour and tricolours; in fact any colour permissible except chocolate, liver or merle which are unacceptable.'"
        },
        {
          id: "rkc-tibetan-terrier-standard",
          role: "verified",
          locator: "Colour: 'White, golden, cream, grey or smoke, black, parti-colour and tricolours; in fact any colour permissible except chocolate, liver or merle, which are unacceptable.'"
        },
        {
          id: "akc-tibetan-terrier-standard",
          role: "verified",
          locator: "Color: Any color or combination of colors including white, golden, cream, grey or smoke, black, parti-color and tri-color, with black nose and dark eyes/eye rims."
        },
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "Standard colors: Black, Black & Tan, Brindle, Cream, Fawn, Gold, Gray, Red, Sable, Silver, White, and parti/tricolour combinations"
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "GET /breeds/{id}/colours: lists 'Brown / Chocolate', 'Liver', and 'Merle' alongside permissible breed colours"
        }
      ],
      verifiedOn: "2026-10-25",
      note:
        "Retained only the permissible breed colours verified in FCI Standard No. 209, RKC, and AKC. Excluded 'Brown / Chocolate', 'Liver', and 'Merle' from The Dog API's general colour endpoint because FCI Standard No. 209 and the RKC standard explicitly forbid chocolate, liver, and merle as unacceptable; recorded The Dog API as conflicting."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "Shedding Level & Grooming"
        },
        {
          id: "petmd-tibetan-terrier",
          role: "verified",
          locator: "Grooming Guide"
        }
      ],
      verifiedOn: "2026-10-25",
      note:
        "Verified from AKC and PetMD coat maintenance descriptions."
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "Breed Traits & Characteristics: Drooling Level (1/5 — Less Likely to Drool)"
        }
      ],
      verifiedOn: "2026-10-25",
      note:
        "Populated from null: the AKC breed profile rates the Tibetan Terrier's drooling level at the lowest tier (1/5)."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-tibetan-terrier-standard",
          role: "verified",
          locator: "BEHAVIOUR / TEMPERAMENT: Lively, good-natured. Loyal companion dog with many engaging ways. Outgoing, alert, intelligent and game; neither fierce nor pugnacious. Sparing of affection to strangers."
        },
        {
          id: "rkc-tibetan-terrier-standard",
          role: "verified",
          locator: "Characteristics & Temperament: Lively, good natured, loyal companion; outgoing, alert, intelligent and game; sparing of affection to strangers."
        },
        {
          id: "akc-tibetan-terrier-standard",
          role: "verified",
          locator: "Temperament: Highly intelligent, sensitive, loyal, devoted, and affectionate; may be cautious or reserved."
        },
        {
          id: "petmd-tibetan-terrier",
          role: "verified",
          locator: "Personality and Temperament: devoted to family, aloof/watchful toward strangers"
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament: Affectionate, intelligent, loyal, alert, playful"
        }
      ],
      verifiedOn: "2026-10-25",
      note:
        "Verified across FCI Standard No. 209, RKC Standard, AKC Standard, PetMD, and The Dog API."
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-tibetan-terrier-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics"
        },
        {
          id: "fci-tibetan-terrier-standard",
          role: "cited",
          locator: "Behaviour / Temperament"
        },
        {
          id: "petmd-tibetan-terrier",
          role: "cited",
          locator: "Personality and Temperament"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 scores informed by FCI, AKC, and PetMD temperament descriptions; not standardized psychometric measurements."
    },

    care: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "Grooming, Exercise, and Training sections"
        },
        {
          id: "petmd-tibetan-terrier",
          role: "verified",
          locator: "Caring for a Tibetan Terrier, Grooming Guide, Training, and Behavior (at least 1 hour of exercise daily, brushing several times a week, puppy socialization before 16 weeks, separation anxiety prevention)"
        },
        {
          id: "ttca-tibetan-terrier-health",
          role: "cited",
          locator: "Coat, ear, dental, and preventive care"
        }
      ],
      verifiedOn: "2026-10-25",
      note:
        "Care guidance verified against AKC and PetMD veterinary breed care recommendations."
    },

    "care.exercise.minutesPerDay": {
      reliability: "reliable_source",
      sources: [
        {
          id: "petmd-tibetan-terrier",
          role: "verified",
          locator: "Personality & Care: 'Tibetan Terriers need at least an hour of exercise every day; this could be a long walk, hike, or running around the backyard.'"
        },
        {
          id: "akc-tibetan-terrier-profile",
          role: "cited",
          locator: "Exercise: moderate to active daily walks and dog sports"
        }
      ],
      verifiedOn: "2026-10-25",
      note:
        "Verified at 45–60 minutes per day based on PetMD's veterinary recommendation of approximately 1 hour of daily exercise and AKC activity guidance."
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "reliable_source",
      sources: [
        {
          id: "petmd-tibetan-terrier",
          role: "verified",
          locator: "Behavior & Considerations for Pet Parents: 'Tibetan Terriers were bred to be companion pets and are devoted to their family members. Because of this, they may develop separation anxiety when left alone... they do best with people who work from home or who can bring their dog along on errands and adventures.'"
        },
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "Temperament & Care: strong desire to be with family"
        }
      ],
      verifiedOn: "2026-10-25",
      note:
        "Populated from null: PetMD and AKC explicitly document that the breed is prone to separation anxiety when left alone for long periods."
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-tibetan-terrier-profile",
          role: "cited",
          locator: "Nutrition: life-stage diet, weight monitoring, treat moderation"
        },
        {
          id: "petmd-tibetan-terrier",
          role: "cited",
          locator: "Feeding and nutritional care"
        },
        {
          id: "ttca-tibetan-terrier-health",
          role: "cited",
          locator: "General health and diet guidance"
        }
      ],
      verifiedOn: null,
      note:
        "General canine nutritional guidance adapted to a medium-sized, heavily coated companion breed."
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "ttca-tibetan-terrier-health",
          role: "verified",
          locator: "Breed health overview, longevity, and inherited conditions"
        },
        {
          id: "ttca-tibetan-terrier-health-testing",
          role: "verified",
          locator: "Recommended health screenings: Hip, Eye, NCL, PLL, PRA3, RCD4, BAER, and Patella"
        },
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "Health & Recommended Health Tests"
        },
        {
          id: "ofa-tibetan-terrier-ncl",
          role: "verified",
          locator: "Tibetan Terrier (NCL-TT): adult-onset behavioral/anxiety signs, progressive ataxia, stairs/jumping difficulty, dim-light visual impairment, seizures"
        },
        {
          id: "petmd-tibetan-terrier",
          role: "verified",
          locator: "Health Issues: NCL, PLL, PRA, hip dysplasia, patellar luxation, congenital deafness, hypothyroidism, cataracts"
        },
        {
          id: "pubmed-tibetan-terrier-ncl-atp13a2",
          role: "verified",
          locator: "Wöhlke et al. (2011, PMID: 22022275): ATP13A2 c.1620delG exon 16 skipping mutation on CFA2 causing late-onset NCL in Tibetan Terriers"
        },
        {
          id: "pubmed-tibetan-terrier-ccl-selection",
          role: "verified",
          locator: "PMID: 24929534 (2014): ATP13A2 mutant allele frequency decreased from 0.20–0.28 to 0.09–0.14 in 1,120 Tibetan Terriers after 2010 DNA testing"
        },
        {
          id: "pubmed-tibetan-terrier-pra3-fam161a",
          role: "verified",
          locator: "Downs & Mellersh (2014, PMID: 24705771): intronic SINE insertion in FAM161A on CFA10 causing PRA3 in Tibetan Spaniels and Tibetan Terriers"
        },
        {
          id: "pubmed-canine-pll-adamts17",
          role: "verified",
          locator: "Gould et al. (2011, PMID: 22050825): ADAMTS17 c.1473+1G>A mutation on CFA3 causing primary lens luxation (PLL)"
        }
      ],
      verifiedOn: "2026-10-25",
      note:
        "Removed 'Breed-club screening recommendations' from health.overview to comply with Rule 5, and enriched commonConditions and recommendedScreenings with molecular genetics from peer-reviewed PubMed studies (ATP13A2 c.1620delG for NCL, ADAMTS17 c.1473+1G>A for PLL, FAM161A SINE insertion for PRA3, and C2orf71 c.3149_3150insC for RCD4) alongside OFA and PetMD clinical descriptions."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ttca-tibetan-terrier-health-testing",
          role: "verified",
          locator: "Hip evaluation, Eye exam, NCL DNA, PLL DNA, PRA3 DNA, RCD4 PRA DNA, BAER hearing test, and Patellar evaluation"
        },
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "Recommended Health Tests"
        },
        {
          id: "ofa-tibetan-terrier-ncl",
          role: "verified",
          locator: "NCL-TT DNA screening"
        }
      ],
      verifiedOn: "2026-10-25",
      note:
        "Verified against TTCA, AKC, and OFA screening recommendations."
    },

    suitability: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "Breed Traits, Care, Exercise, and Grooming"
        },
        {
          id: "petmd-tibetan-terrier",
          role: "verified",
          locator: "Personality, Considerations for Pet Parents, and FAQs"
        },
        {
          id: "fci-tibetan-terrier-standard",
          role: "verified",
          locator: "Behaviour / Temperament"
        }
      ],
      verifiedOn: "2026-10-25",
      note:
        "Populated firstTimeOwners: true and seniorOwners: true based on AKC and PetMD suitability guidance for owners prepared to meet the breed's grooming, positive training, and daily walking needs."
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-tibetan-terrier-standard",
          role: "verified",
          locator: "Brief Historical Summary ('Holy Dog of Tibet', not a true terrier, herding and trader guard), Mouth (curved incisor row, scissor or reverse scissor bite), Feet (large, round, no arch)"
        },
        {
          id: "akc-tibetan-terrier-standard",
          role: "verified",
          locator: "General Appearance (snowshoe effect), Teeth (distinct curve in jaws between canines)"
        },
        {
          id: "ttca-tibetan-terrier-history",
          role: "verified",
          locator: "1922 Dr. Agnes R. H. Greig and Bunti, luck bringers never sold, retrieving dropped items from mountainsides"
        },
        {
          id: "ttca-tibetan-terrier-standard-guide",
          role: "verified",
          locator: "Un-arched flat snowshoe foot structure vs. cat and hare feet"
        }
      ],
      verifiedOn: "2026-10-25",
      note:
        "Verified across FCI Standard No. 209, AKC Official Standard, TTCA Breed History, and TTCA Illustrated Guide."
    },

    faq: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-tibetan-terrier-standard",
          role: "verified",
          locator: "Size (36–41 cm males, females slightly smaller), Colour (chocolate, liver, merle unacceptable), Coat, Temperament"
        },
        {
          id: "rkc-tibetan-terrier-standard",
          role: "verified",
          locator: "Size (36–41 cm / 14–16 in), Colour (chocolate, liver, merle unacceptable)"
        },
        {
          id: "akc-tibetan-terrier-standard",
          role: "verified",
          locator: "Size (15–16 in average male, 14–17 in acceptable; 18–30 lb weight)"
        },
        {
          id: "akc-tibetan-terrier-profile",
          role: "verified",
          locator: "Life expectancy (15–16 years), grooming, exercise, health tests"
        },
        {
          id: "ttca-tibetan-terrier-health-testing",
          role: "verified",
          locator: "Recommended clinical and DNA health tests"
        },
        {
          id: "petmd-tibetan-terrier",
          role: "verified",
          locator: "Exercise, grooming, separation anxiety, family suitability"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "Height (36–43 cm), weight (8–14 kg), lifespan (12–16 years)"
        }
      ],
      verifiedOn: "2026-10-25",
      note:
        "Rewrote all 10 FAQ questions and answers in original, self-contained prose, removing 'The standard gives' (faq[1]) and 'The breed club describes' (faq[9]) to comply with Rule 5."
    }
  },

  updatedOn: "2026-10-25"
};
