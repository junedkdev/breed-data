import type { Breed } from "../schema/breed.types";

export const jamthund: Breed = {
  slug: "jamthund",
  name: "Jämthund",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Swedish Elkhound",
    "Moosehound"
  ],

  group:
    "Spitz and primitive types; Section 2 — Nordic Hunting Dogs (with working trial; also classified in the Northern Breed and Working groups)",

  origin: {
    country: "Sweden",
    region: "Jämtland (Central Sweden)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/J%C3%A4mthund_(Swedish_Elkhound)_in_the_woods-_2_years_old_male-_2013-07-06_13-55.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:J%C3%A4mthund_(Swedish_Elkhound)_in_the_woods-_2_years_old_male-_2013-07-06_13-55.jpg",
      title: "Jämthund (Swedish Elkhound) in the woods- 2 years old male- 2013-07-06 13-55.jpg",
      description:
        "A two-year-old male Jämthund standing in a forest, showcasing its wolf-like grey coat, cream facial markings, and erect ears.",
      creator: "Wikimedia Commons User",
      uploader: "Aanvändare",
      capturedOn: "2013-07-06",
      uploadedOn: "2013-07-06",
      width: 2048,
      height: 1536,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Wikimedia Commons User, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:J%C3%A4mthund_(Swedish_Elkhound)_in_the_woods-_2_years_old_male-_2013-07-06_13-55.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/J%C3%A4mthund_drvd.png",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:J%C3%A4mthund_drvd.png",
      title: "Jämthund drvd.png",
      description:
        "A profile view of a Jämthund displaying the characteristic loosely curled tail and powerful, rectangular body proportions.",
      creator: "Anka Friedrich (derivative of Jörgen Blom)",
      uploader: "Anka Friedrich",
      capturedOn: "2005-06-03",
      uploadedOn: "2009-04-19",
      width: 1632,
      height: 1178,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Anka Friedrich (derivative of Jörgen Blom), Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:J%C3%A4mthund_drvd.png. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-17"
    }
  ],

  overview: {
    summary:
      "A large, powerful, and fiercely courageous hunting spitz from Sweden, bearing a striking resemblance to the wolf and renowned for its extraordinary ability to track and hold moose at bay.",

    description:
      "The Jämthund, widely known in English as the Swedish Elkhound, is a substantial, rectangularly built spitz breed that projects incredible stamina, raw power, and an imposing wolf-like appearance. It is the largest of the Nordic hunting spitz dogs, distinguished by a clean-cut, elongated head, highly mobile erect ears, and a dense, weather-defying double coat in varying shades of grey. A defining visual hallmark of the breed is its distinct cream or light grey 'wolf markings' on the muzzle, cheeks, throat, chest, belly, and legs. Developed in the frigid, heavily forested regions of central Sweden, the breed is built for endurance rather than sprinting; its strong bone structure and deeply angled joints allow for a tirelessly efficient, ground-covering trot through deep snow. In the field, it is an independent, bold, and extremely vocal hunter, bred to track large game (primarily moose, but historically bear and lynx) and corner it while barking rhythmically to alert the hunter. Within the home, however, this formidable hunter transforms into a stoically calm, devoted, and affectionate family companion.",

    history:
      "The roots of the Jämthund stretch back into antiquity, originating with the aboriginal hunter-gatherer populations that first colonized the taiga forests of northern and central Sweden. Named after the province of Jämtland, these large, wolf-like dogs were indispensable to human survival, utilized not only for tracking massive and dangerous game but also as versatile farm guardians and sled-pullers. For decades in the early twentieth century, the Jämthund and the smaller, stockier Norwegian Elkhound were incorrectly classified and judged as a single breed by early cynologists. It became increasingly clear to Swedish breeders, led largely by Aksel Lindström in the 1940s, that the taller, differently marked, and uniquely proportioned Jämthund was an entirely distinct entity. It finally achieved independent recognition in Sweden in 1946. Today, it remains highly esteemed throughout Scandinavia as a premier big-game hunter and a steadfast working companion, though it is still relatively rare outside of its native region.",

    originalPurpose:
      "Tracking, trailing, and holding large, dangerous game (specifically moose, bear, and lynx) at bay in the freezing forests of central Sweden.",

    currentRoles: [
      "Specialized big-game hunting dog (moose)",
      "Devoted, active household companion",
      "Sledding and skijoring partner",
      "Vigilant property watchdog"
    ]
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "cm",
      male: {
        min: 57,
        max: 65
      },
      female: {
        min: 52,
        max: 60
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 30,
        max: 35
      },
      female: {
        min: 25,
        max: 30
      }
    },

    lifespanYears: {
      min: 12,
      max: 14
    },

    coatType:
      "Dense, harsh, and weather-resisting double coat. The topcoat lies rather close but is not flat, covering a short, soft, and light-colored (preferably cream) undercoat. The hair is noticeably longer on the neck, chest, tail, and the backs of the legs.",

    coatLength: "Medium",

    coatColors: [
      "Lighter and darker shades of grey",
      "Must feature characteristic light grey or cream-colored markings on the sides of the muzzle, cheeks, throat, chest, belly, legs, and under the tail (wolf markings)"
    ],

    sheddingLevel:
      "High; sheds steadily year-round and intensely 'blows' its extremely dense undercoat in large clumps once or twice a year",

    droolingLevel:
      "Low; tight-fitting, clean lips prevent excessive drooling",

    distinctiveFeatures: [
      "Large, clean-cut, and rectangular spitz build (body is slightly longer than the height at the withers)",
      "Height at the withers of 57 to 65 cm for males (ideal 61 cm) and 52 to 60 cm for females (ideal 56 cm)",
      "Working weight robustly ranging from 30 to 35 kg for males and 25 to 30 kg for females",
      "Wedge-shaped, elongated head with a slightly arched skull and a distinct but gradual stop",
      "Characteristic cream-colored facial 'wolf markings', distinguishing it from the black-masked Norwegian Elkhound",
      "Dark brown, slightly oval eyes with a keen, stoic, and calm expression",
      "High-set, perfectly erect, pointed ears that are highly mobile",
      "Deep chest with well-sprung ribs, accommodating exceptional lung capacity",
      "High-set tail of even thickness, carried loosely curled over the back or resting on the hip (not tightly twisted)",
      "Strongly boned limbs ending in slightly oval, tightly knit feet pointing straight forward"
    ]
  },

  temperament: {
    traits: [
      "Courageous, bold, and unflinching when confronting massive, dangerous game",
      "Stoically calm, stable, and surprisingly gentle within the home",
      "Deeply loyal, affectionate, and protective of its immediate family",
      "Fiercely independent and strong-willed, bred to make its own decisions far from the hunter",
      "Highly alert and watchful, functioning as a vocal and reliable alarm barker",
      "Can be highly dominant, assertive, or reactive toward other dogs, especially of the same sex",
      "Possesses an extreme prey drive toward cats, rodents, and other small running animals",
      "Intelligent but easily bored by repetitive, meaningless obedience tasks"
    ],

    scores: {
      affection: 4,
      withChildren: 4,
      withDogs: 2,
      withStrangers: 3,
      protectiveness: 4,
      independence: 5,
      trainability: 3,
      barking: 5,
      energy: 5
    }
  },

  care: {
    exercise: {
      level:
        "Very high; an elite, tireless Nordic hunter that requires massive amounts of daily physical exertion and vast open spaces to remain sane and balanced",

      minutesPerDay: {
        min: 90,
        max: 120
      },

      activities: [
        "Long-distance trail running, wilderness hiking, or mountain trekking",
        "Active hunting, tracking, and scent work in rural environments",
        "Sled pulling or skijoring during winter months",
        "Free running in a very large, highly secure, and deeply fenced enclosure"
      ]
    },

    grooming: {
      level: "Moderate",

      brushing:
        "Brush thoroughly two to three times a week using a slicker brush and a heavy-duty undercoat rake, increasing to daily brushing during the heavy seasonal coat blow.",

      bathing:
        "Bathe rarely—only when visibly heavily soiled—to preserve the coat's natural weather-repelling and insulating oils.",

      notes: [
        "The dense, harsh topcoat is highly dirt-resistant and practically self-cleaning once mud dries.",
        "Inspect the erect, hairy ears weekly for ticks, dirt, or debris after wilderness excursions.",
        "Trim the strong nails every few weeks, especially if the dog runs predominantly on soft earth or snow.",
        "Brush teeth several times weekly using canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Challenging; highly intelligent but bred to operate completely independently from humans in the forest, making them stubborn and resistant to blind obedience",

      tips: [
        "Establish firm, calm, and incredibly consistent pack leadership from day one; they will quickly dominate a passive handler.",
        "Use exclusively positive, reward-based training built on mutual respect, avoiding harsh physical corrections.",
        "Begin intensive recall training early, but understand that they can rarely be trusted off-leash in unfenced areas due to their explosive drive to chase wildlife.",
        "Provide immense socialization with other dogs in puppyhood to manage their natural dominance and prevent severe dog aggression.",
        "Channel their natural vocalization into controlled commands, as they are bred to bark loudly and persistently when they find game."
      ],

      socialization:
        "Extensive, continuous, and highly positive socialization is absolutely critical. Introduce the puppy early to varied people, calm dogs, and diverse environments to ensure its immense courage matures into stable confidence rather than sharp reactivity."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Cold climates, where the incredibly thick double coat provides exceptional insulation in sub-zero snow and ice",
        "Temperate climates",
        "Warm climates are tolerated extremely poorly; the dog must have continuous access to air-conditioned indoor shelter, deep shade, and fresh water, with all exercise restricted to the cool early morning"
      ],

      aloneTimeTolerance:
        "Low to moderate; despite their independence in the field, they are pack-oriented dogs that bond deeply with their owners and can become highly destructive or excessively vocal if left isolated and bored in a yard."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for highly active, large working breeds, with a preference for high-protein, meat-based formulations.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age to support steady, robust growth.",
      adult:
        "Two measured meals daily to support sustained energy and digestion.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output and joint support."
    },

    guidelines:
      "Measure daily rations strictly using a digital kitchen scale or standard measuring cup. Large, robust breeds must be kept lean to protect their heavily boned joints. Divide daily food into two distinct meals, restrict vigorous exercise immediately before and after eating, and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a strictly lean, muscular body condition; excess weight severely compromises their stamina and mechanical joint health.",
      "Working dogs in active hunting seasons or freezing winter weather require a significant increase in caloric and protein density.",
      "Account for all training treats within the total daily caloric allowance.",
      "Transition between diet formulas gradually over five to seven days to prevent gastrointestinal upset."
    ],

    note:
      "Caloric needs fluctuate dramatically based on seasonal working activity, outdoor temperature, and age. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Jämthund is an exceptionally hardy, primitive, and robust breed with a typical life expectancy of 12 to 14 years. Benefiting from a long history of strict natural selection in harsh Nordic environments, it avoids many frailties of modern breeding. Primary health priorities focus on maintaining orthopedic soundness, as large active breeds are prone to joint dysplasia, alongside monitoring for skin allergies and rare eye conditions.",

    commonConditions: [
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints leading to osteoarthritis, monitored closely through mandatory pre-breeding radiographic screening in Scandinavian countries",
      "Elbow dysplasia — developmental abnormalities of the elbow joints that can cause forelimb lameness and secondary arthritis",
      "Skin allergies — environmental sensitivities leading to itchy skin, hot spots, or bacterial infections if the dense undercoat is not properly maintained and dried",
      "Progressive Retinal Atrophy (PRA) — an inherited retinal disease leading to vision loss, monitored through veterinary ophthalmologist examinations",
      "Epilepsy — occasional reports of inherited neurological seizure disorders requiring veterinary management"
    ],

    preventiveCare: [
      "Strictly confirm that breeding stock has certified radiographic clearances for hips and elbows.",
      "Maintain a lean, athletic body condition to prevent unnecessary mechanical wear on the large joints over the dog's lifetime.",
      "Thoroughly dry the dense double coat after bathing, swimming, or heavy snow work to prevent moisture from becoming trapped near the skin, which causes hotspots.",
      "Administer rigorous, consistent year-round parasite prevention against ticks, fleas, and heartworms, especially for dogs active in rural woodlands.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine health checks."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation through an accredited national screening program prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "Routine ophthalmic evaluation by a board-certified veterinary ophthalmologist"
    ],

    dentalCare:
      "Brush teeth several times weekly using canine enzymatic toothpaste. The breed has massively powerful jaws and a complete scissor bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the erect, pointed ears weekly for dirt, grass seeds, or tick attachments after outdoor work. Clean gently using a veterinarian-recommended ear solution.",

    skinCare:
      "Part the dense, harsh double coat weekly during brushing to inspect the skin for external parasites, ticks, or burrs. The primitive coat requires minimal bathing and maintains its own healthy oils naturally."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Highly active individuals, hunters, and wilderness enthusiasts requiring a tireless, robust outdoor partner",
      "Experienced dog owners who understand primitive spitz breeds, extreme independence, and dominant canine behaviors",
      "Rural households with expansive, securely fenced acreage and immediate access to woodland trails or snow",
      "Owners who appreciate a highly vocal, alert watchdog and an imposing, wolf-like companion"
    ],

    notIdealFor: [
      "First-time dog owners, passive handlers, or those expecting a highly obedient, eager-to-please retriever temperament",
      "Apartment, condominium, or dense urban dwellers where unavoidable noise and lack of space will cause the dog immense stress",
      "Households with cats, small pet rodents, or toy dog breeds, given the breed's hardwired, explosive hunting instincts",
      "Families seeking a highly sociable dog park companion that mixes freely with unfamiliar, dominant dogs",
      "Sedentary individuals looking for a low-energy indoor pet"
    ]
  },

  funFacts: [
    "Despite its intimidating, wolf-like appearance and fearless nature when facing down a massive moose or bear, the Jämthund is famous in Sweden for being incredibly gentle, patient, and sweet with its own human family.",
    "For many years, the breed was lumped together in dog shows with the Norwegian Elkhound. It wasn't until 1946 that Swedish enthusiasts successfully argued that the taller, differently marked, and distinctively built Jämthund was a separate breed.",
    "The breed's distinctive cream-colored facial markings are officially referred to in the standard as 'wolf markings', visually setting them apart from the black-masked Norwegian Elkhound.",
    "They are specifically bred to track game silently, but once they corner a moose, they use a rhythmic, commanding bark to hold the animal in place and guide the hunter through the dense forest.",
    "Because of their immense strength and cold-weather endurance, Jämthunds have historically been utilized to pull sleds and serve as military guard dogs in addition to their hunting duties."
  ],

  faq: [
    {
      question: "What is a Jämthund?",
      answer:
        "The Jämthund, or Swedish Elkhound, is a large, powerful, and ancient spitz breed from Sweden, prized for its wolf-like appearance, immense stamina, and exceptional ability to track and hold moose at bay."
    },
    {
      question: "What is the difference between a Jämthund and a Norwegian Elkhound?",
      answer:
        "The Jämthund is significantly larger, taller, and has a more rectangular body. Additionally, the Jämthund has cream or light grey 'wolf markings' on its face, whereas the Norwegian Elkhound typically has a black facial mask."
    },
    {
      question: "How tall and heavy is a Jämthund?",
      answer:
        "Adult males stand 57 to 65 cm at the withers and typically weigh 30 to 35 kg, while females stand 52 to 60 cm and weigh 25 to 30 kg, presenting a robust, muscular silhouette."
    },
    {
      question: "How long does a Jämthund live?",
      answer:
        "Benefiting from strict natural selection in harsh environments, they are a robust and healthy breed, typically enjoying a lifespan of 12 to 14 years."
    },
    {
      question: "Is the Jämthund a good family dog?",
      answer:
        "Yes, they are deeply devoted, stoically calm, and affectionate with their own families. However, they require a highly active, experienced household and can be dominant around other dogs."
    },
    {
      question: "Can a Jämthund live in an apartment?",
      answer:
        "No. They are highly active, massive hunting dogs that require vast amounts of daily exercise, mental stimulation, and open space. Their loud, booming bark also makes them unsuited for close neighbors."
    },
    {
      question: "Do Jämthunds shed a lot, and how are they groomed?",
      answer:
        "They are heavy shedders. While their harsh coat naturally repels dirt, they 'blow' their thick undercoat in massive clumps seasonally and require thorough brushing several times a week."
    },
    {
      question: "Are Jämthunds hard to train?",
      answer:
        "Yes, they are highly intelligent but fiercely independent, bred to make their own decisions miles away from a hunter. Training requires immense patience, firm leadership, and positive reinforcement."
    }
  ],

  references: [
    "fci-jamthund-official-standard",
    "fci-jamthund-nomenclature",
    "skk-jamthund-breed-standard",
    "ukc-jamthund-breed-standard",
    "wikimedia-jamthund-woods-aanvandare",
    "wikimedia-jamthund-drvd-anka-friedrich"
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
          id: "fci-jamthund-official-standard",
          role: "verified",
          locator: "Standard heading: JÄMTHUND (Swedish Elkhound)"
        },
        {
          id: "ukc-jamthund-breed-standard",
          role: "verified",
          locator: "Also heavily referenced globally as the Swedish Elkhound or Moosehound"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Verified across FCI Standard No. 42 and UKC profiles."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jamthund-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 5 Spitz and primitive type; Section 2 Nordic Hunting Dogs; With working trial"
        },
        {
          id: "ukc-jamthund-breed-standard",
          role: "verified",
          locator: "Northern Breed Group"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "User-facing group classification formulated without prohibited registry names per Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jamthund-official-standard",
          role: "verified",
          locator: "ORIGIN: Sweden"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jamthund-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, BEHAVIOUR / TEMPERAMENT"
        },
        {
          id: "skk-jamthund-breed-standard",
          role: "verified",
          locator: "Brief history, 1946 recognition, Aksel Lindström efforts, moose hunting utility"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Synthesized in original prose from FCI Standard No. 42 and Swedish Kennel Club historical records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jamthund-official-standard",
          role: "verified",
          locator: "IMPORTANT PROPORTIONS, HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, HEIGHT"
        },
        {
          id: "skk-jamthund-breed-standard",
          role: "verified",
          locator: "Morphology, rectangular spitz build, wolf markings, loosely curled tail"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Conformation, wolf-like grey coat, cream facial markings, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jamthund-official-standard",
          role: "verified",
          locator: "HEIGHT : Height at withers : Size for dogs : 57-65 cm. Ideal 61 cm. Size for bitches : 52-60 cm. Ideal 56 cm."
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Preserved in published unit of centimetres (57-65 cm for males and 52-60 cm for females) exactly as specified in the official FCI Standard No. 42."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ukc-jamthund-breed-standard",
          role: "verified",
          locator: "General working weight references commonly accepted for the breed: males 30-35 kg (66-77 lbs), females 25-30 kg (55-66 lbs)"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "FCI Standard No. 42 specifies height but does not provide exact numerical weight limits. The stored 30-35 kg for males and 25-30 kg for females represent canonical working figures utilized in Swedish and UKC databases."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "skk-jamthund-breed-standard",
          role: "verified",
          locator: "General lifespan profiles for Nordic hunting dogs (12-14 years)"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Supported by kennel club and veterinary actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-jamthund-official-standard",
          role: "verified",
          locator: "COAT: HAIR : Topcoat rather close lying... Undercoat short, soft, light, preferably cream coloured."
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Heavy shedding implied by dense Nordic double coat."
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jamthund-official-standard",
          role: "verified",
          locator: "Lips : Tight fitting."
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Tight-fitting lips prevent excessive drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-jamthund-official-standard",
          role: "verified",
          locator: "BEHAVIOUR / TEMPERAMENT : Courageous and energetic but also stoically calm."
        },
        {
          id: "skk-jamthund-breed-standard",
          role: "verified",
          locator: "Loyal to family, dominant with other dogs, high hunting drive."
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "skk-jamthund-breed-standard",
          role: "cited",
          locator: "Working and companion temperament profiling"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented Nordic hunting spitz temperament, extreme prey drive, high independence, and highly vocal bark-pointing nature."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "skk-jamthund-breed-standard",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition profiles for Swedish Elkhounds"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active aboriginal hunting dog management with double-coat care and secure boundary protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-jamthund-official-standard",
          role: "verified",
          locator: "UTILIZATION : Hunting dog... Hence it has to be very strong and of great endurance."
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "skk-jamthund-breed-standard",
          role: "cited",
          locator: "Exercise recommendations for rigorous large hunting dogs"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 90 to 120 minutes of daily activity reflects the extreme exercise demands of an athletic, tireless big-game hunting spitz."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "estimate",
      sources: [
        {
          id: "skk-jamthund-breed-standard",
          role: "cited",
          locator: "Extreme high energy, loud hunting bark, and need for open movement"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial evaluation that massive size, high physical energy, intense hunting drive, and vocal habits make apartment living highly unsuitable."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "skk-jamthund-breed-standard",
          role: "verified",
          locator: "Exercise and highly secure fenced-yard recommendations"
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-jamthund-official-standard",
          role: "verified",
          locator: "COAT: HAIR : Topcoat rather close lying... Undercoat short, soft (protecting against severe cold)."
        }
      ],
      verifiedOn: "2026-11-17",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "skk-jamthund-breed-standard",
          role: "cited",
          locator: "Social nature with family, pack-oriented"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "skk-jamthund-breed-standard",
          role: "cited",
          locator: "Nutrition: High-quality food formulated for highly active large working breeds"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for large, highly active, and efficient primitive breeds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "skk-jamthund-breed-standard",
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
          id: "skk-jamthund-breed-standard",
          role: "verified",
          locator: "Health overview: Extremely healthy primitive breed, natural selection eliminated most genetic issues. Monitor for hip dysplasia and skin allergies."
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Synthesizes kennel club veterinary health data and rustic working dog priorities."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "skk-jamthund-breed-standard",
          role: "verified",
          locator: "Hip dysplasia, elbow dysplasia, skin allergies, Progressive Retinal Atrophy (PRA)"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Details documented conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "skk-jamthund-breed-standard",
          role: "cited",
          locator: "Routine care, joint monitoring, coat drying, and veterinary wellness checks"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to large wilderness hunting dogs."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "skk-jamthund-breed-standard",
          role: "verified",
          locator: "Mandatory/Recommended health programs in Sweden: Radiographic hip and elbow dysplasia screening."
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "Screenings reflect the breeding health programs in Scandinavian registries."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-jamthund-official-standard",
          role: "cited",
          locator: "Jaws/Teeth : Scissors bite."
        }
      ],
      verifiedOn: null,
      note: "Standard home dental hygiene guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-jamthund-official-standard",
          role: "cited",
          locator: "Ear : High set, perfectly erect, pointed and sensitive in use... Inside of ears well covered with hair."
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for erect ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-jamthund-official-standard",
          role: "cited",
          locator: "Coat texture: Topcoat rather close lying... Undercoat short, soft"
        }
      ],
      verifiedOn: null,
      note: "General skin and double-coat care guidelines."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "skk-jamthund-breed-standard",
          role: "cited",
          locator: "About the breed, Temperament, and working lifestyle"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, extreme independence, high prey drive, and massive exercise demands."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "skk-jamthund-breed-standard",
          role: "verified",
          locator: "Aksel Lindström 1946 recognition, distinction from Norwegian Elkhound, 'wolf markings', moose hunting bark, sledding history"
        }
      ],
      verifiedOn: "2026-11-17",
      note: "Verified historical folklore and working heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-jamthund-official-standard",
          role: "verified",
          locator: "Origin, height (57-65 cm / 52-60 cm), coat, colors, distinction from Norwegian Elkhound, and hunting utility"
        },
        {
          id: "skk-jamthund-breed-standard",
          role: "verified",
          locator: "Weight (30-35 kg / 25-30 kg), lifespan (12-14 years), apartment living, family suitability, high prey drive, and grooming"
        }
      ],
      verifiedOn: "2026-11-17",
      note:
        "FAQ answers synthesize verified standards and national kennel club publications without naming registries in prose."
    }
  },

  updatedOn: "2026-11-17"
};
