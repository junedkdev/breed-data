import type { Breed } from "../schema/breed.types";

export const boston_terrier: Breed = {
  slug: "boston-terrier",
  name: "Boston Terrier",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "Boston Bull",
    "Boston Bull Terrier",
    "Roundhead",
    "American Gentleman"
  ],

  group: "Companion and small molossian-type dogs",

  origin: {
    country: "United States",
    region:
      "Boston and Southborough, Massachusetts"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Boston_Terrier_DSC_0004_(16399046489).jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Boston_Terrier_DSC_0004_(16399046489).jpg",
      title: "Boston Terrier DSC 0004 (16399046489).jpg",
      description:
        "A standing Boston Terrier indoors displaying its crisp white tuxedo markings, short smooth coat, and erect ears.",
      creator: "Pets Adviser",
      uploader: "Томасина",
      capturedOn: "2015-02-16",
      uploadedOn: "2015-03-21",
      width: 3008,
      height: 2000,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Pets Adviser (https://www.petsadviser.com/), via Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:Boston_Terrier_DSC_0004_(16399046489).jpg. License: https://creativecommons.org/licenses/by/2.0/. Changes, if any, must be indicated.",
      restrictions:
        "Author requests direct attribution link to https://www.petsadviser.com/ rather than Flickr.",
      metadataCheckedOn: "2026-11-26"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Boston_Terrier_Dog_002.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Boston_Terrier_Dog_002.jpg",
      title: "Boston Terrier Dog 002.jpg",
      description:
        "An adult Boston Terrier photographed outdoors on a beach, showing its compact, square frame and wide-set dark eyes.",
      creator: "Ed Siasoco",
      uploader: "Flickr upload bot",
      capturedOn: "2007-06-24",
      uploadedOn: "2008-11-02",
      width: 1500,
      height: 2100,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Ed Siasoco, Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:Boston_Terrier_Dog_002.jpg. License: https://creativecommons.org/licenses/by/2.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-11-26"
    }
  ],

  overview: {
    summary:
      "A compact, lively, and well-mannered American companion dog nicknamed 'The American Gentleman' for its tuxedo-like white markings, bright round eyes, and friendly spirit.",

    description:
      "The Boston Terrier is a short-backed, squarely proportioned small dog that feels sturdy and athletic without looking heavy or coarse. Its sleek, close-lying coat comes in brindle, seal, or black accented by crisp white markings across the muzzle, between the eyes, and down the chest. A flat, square skull free of heavy wrinkles pairs with a short, broad muzzle, small upright ears, and wide-set dark round eyes that radiate curiosity and warmth. Moving with a crisp, rhythmic step, this intelligent, people-loving breed adapts easily to city apartments or suburban homes and delights its family with playful humor.",

    history:
      "Developed in Massachusetts during the late nineteenth century, the Boston Terrier traces back to crosses between the English Bulldog and the now-extinct White English Terrier. Around 1870, Robert C. Hooper of Boston acquired a muscular crossbred dog named Judge—widely regarded as the breed's founding patriarch. Through selective matings in Southborough and Boston's Beacon Hill neighborhood, enthusiasts gradually downsized the dogs and softened their temperament into refined, sociable companions. Early fans nicknamed them 'Roundheads' or 'Boston Bulls' before settling on 'Boston Terrier' after their home city, earning official national recognition in 1893 as one of the earliest breeds created in the United States.",

    originalPurpose:
      "Bred down from bulldog-and-terrier crosses to serve as a gentle, compact household companion.",

    currentRoles: [
      "Affectionate, humorous household companion",
      "Therapy and emotional support partner",
      "Participant in indoor-friendly agility, rally, and obedience sports",
      "Alert home greeter and companion"
    ]
  },

  physical: {
    sizeCategory: "Small",

    height: {
      unit: "in",
      male: {
        min: 15,
        max: 17
      },
      female: {
        min: 15,
        max: 17
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 12,
        max: 25
      },
      female: {
        min: 12,
        max: 25
      }
    },

    lifespanYears: {
      min: 11,
      max: 13
    },

    coatType:
      "Short, smooth, glossy, and fine-textured single coat lying close to the skin.",

    coatLength: "Short",

    coatColors: [
      "Brindle with white markings",
      "Seal (black that shows a reddish tint in bright sunlight) with white markings",
      "Black with white markings",
      "Characteristic white markings include a white muzzle band, a white blaze between the eyes, and a white forechest"
    ],

    sheddingLevel:
      "Low; the short, fine coat sheds lightly and stays neat with minimal brushing",

    droolingLevel:
      "Low; well-fitted lips cover the teeth cleanly without hanging loosely",

    distinctiveFeatures: [
      "Compact, square silhouette balancing sturdy bone and lean muscle, standing roughly 15 to 17 inches tall",
      "Weight grouped into three divisions capped at 25 pounds: under 15 pounds, 15 to under 20 pounds, and 20 to 25 pounds (typically 12 to 25 pounds)",
      "Square, flat-topped skull free of heavy wrinkles with a sharp stop and short, broad, square muzzle",
      "Broad jaws with an even or mildly undershot bite and non-pendulous lips",
      "Large, round, dark eyes set far apart and looking straight ahead",
      "Small, upright ears positioned near the outer corners of the skull (natural or cropped)",
      "Short, fine, low-set tail—either straight or screw-shaped—carried below the level of the back",
      "Small, round, tight paws with well-arched toes"
    ]
  },

  temperament: {
    traits: [
      "Friendly, bright, and genuinely amusing in everyday life",
      "Warmly affectionate and eager to stay close to its family",
      "Sociable and welcoming toward guests and children when properly socialized",
      "Watchful enough to notice visitors without excessive, nonstop barking",
      "Playful and upbeat, enjoying brisk walks and indoor games",
      "Quick to learn yet sensitive to harsh tones or scolding",
      "Occasionally willful if bored by repetitive drills"
    ],

    scores: {
      affection: 5,
      withChildren: 5,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: 3,
      independence: 3,
      trainability: 4,
      barking: 2,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "Moderate; lively and playful day to day, but strenuous running and hot-weather exertion must be limited because of its flat-faced airway structure",

      minutesPerDay: {
        min: 30,
        max: 45
      },

      activities: [
        "Brisk daily walks during cool morning or evening hours",
        "Indoor fetch, tug, and puzzle toys",
        "Short obedience and trick-training sessions",
        "Supervised yard play in shaded, mild weather",
        "Indoor, climate-controlled agility or rally classes"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Go over the coat once a week with a soft bristle brush or rubber grooming mitt to lift loose hair and spread natural skin oils.",

      bathing:
        "Bathe only when dirty using a mild canine shampoo.",

      notes: [
        "Check the large, prominent eyes every day for redness, tearing, or trapped dust; seek prompt veterinary care for any squinting or scratch.",
        "Wipe around the muzzle and any shallow skin folds with a damp cloth and dry gently.",
        "Inspect the upright ears weekly for wax or debris.",
        "Trim nails every two to three weeks so overgrown claws do not affect gait.",
        "Brush teeth several times a week with canine enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Easy to moderate; smart and eager to please, responding best to cheerful, reward-based teaching",

      tips: [
        "Use upbeat praise, small treats, and play rewards; harsh words quickly make this sensitive breed shut down.",
        "Keep lessons brief and varied to hold its lively attention.",
        "Walk on a comfortable chest harness instead of a neck collar to protect the windpipe and prominent eyes.",
        "Build calm greeting habits early so exuberant jumping stays under control."
      ],

      socialization:
        "Introduce puppies early to varied people, gentle children, friendly dogs, and busy street sights so their naturally outgoing personality matures into confident, polite manners."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Sensitive to heat and humidity due to its short muzzle; air-conditioned indoor living and strict limits on summer midday activity are essential",
        "Chills quickly in cold winter weather due to its thin single coat; use a fitted sweater or coat for chilly walks"
      ],

      aloneTimeTolerance:
        "Low to moderate; deeply people-oriented and happiest in homes where it is not left isolated for long workdays."
    }
  },

  nutrition: {
    dietType:
      "Complete, balanced dog food formulated for small-to-medium breeds, measured carefully to maintain a lean, athletic weight.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age.",
      adult:
        "Two measured meals daily for steady digestion and energy.",
      senior:
        "Two controlled meals daily tailored to slower metabolism."
    },

    guidelines:
      "Measure every meal with a kitchen scale or measuring cup rather than leaving food out all day. Extra weight quickly worsens breathing effort and knee stress. Wide, shallow bowls make eating comfortable for a short muzzle, and cool fresh water should stay available continuously.",

    considerations: [
      "Keep ribs easy to feel beneath a light coat with a visible waist.",
      "Count training treats within the daily calorie budget.",
      "Keep cool water handy during walks and warm weather when panting is less efficient.",
      "Transition foods gradually over five to seven days to avoid stomach upset."
    ],

    note:
      "Check with a veterinarian to set exact daily portions based on age, weight class, and activity level."
  },

  health: {
    overview:
      "Boston Terriers generally live 11 to 13 years and are sturdy companions overall, though their short-muzzled skull, large prominent eyes, and compact build bring specific health risks. Key priorities include protecting the eyes from corneal ulcers, screening breeding stock for patellar luxation, congenital deafness, and cataracts (including the autosomal recessive HSF4 juvenile cataract mutation), and preventing overheating.",

    commonConditions: [
      "Brachycephalic Obstructive Airway Syndrome (BOAS) — shortened facial anatomy and narrowed nostrils can restrict airflow and increase heat intolerance; prospective respiratory-grading research shows Boston Terriers have lower severe BOAS rates than Bulldogs or French Bulldogs (roughly 37.5% clinically unaffected Grade 0 and under 1% severe Grade 3), though dogs with pinched nostrils and flatter faces face significantly higher risk",
      "Corneal ulcers and eye injuries — wide-set, prominent eyes are easily scratched by dust, brush, or rough play and require prompt veterinary attention",
      "Hereditary cataracts (early-onset HSF4 and late-onset forms) — scientifically established autosomal recessive HSF4 mutation causes progressive bilateral juvenile cataracts in young Boston Terriers (screenable via DNA test), while genetically distinct late-onset cataracts are monitored via routine specialist eye exams",
      "Patellar luxation — intermittent slipping of the kneecap out of its groove, screened clinically before breeding",
      "Congenital sensorineural deafness — hereditary deafness screened in puppies and breeding dogs via BAER hearing testing",
      "Hemivertebrae — wedge-shaped spinal vertebrae sometimes seen in screw-tailed breeds, occasionally causing spinal compression",
      "Skin allergies — environmental or dietary sensitivities that can cause itching or redness"
    ],

    preventiveCare: [
      "Verify that breeding parents have completed patella, specialist eye, and BAER hearing evaluations, plus HSF4 juvenile cataract DNA testing.",
      "Keep the dog cool in air conditioning during hot, humid weather and avoid midday outdoor exertion.",
      "Use a snug chest harness rather than a neck collar to keep pressure off the trachea and eyes.",
      "Check the eyes daily for redness or discharge, keep thorny plants out of reach, and maintain a lean body weight.",
      "Schedule yearly veterinary wellness visits and dental checkups."
    ],

    recommendedScreenings: [
      "Clinical patellar luxation orthopedic evaluation by a veterinarian",
      "Ophthalmic examination by a board-certified veterinary ophthalmologist",
      "Brainstem Auditory Evoked Response (BAER) hearing evaluation",
      "DNA test for early-onset hereditary juvenile cataracts (HSF4 mutation)"
    ],

    dentalCare:
      "Brush teeth several times weekly with canine enzymatic toothpaste and arrange routine veterinary dental cleanings to keep the short, broad jaw healthy.",

    earCare:
      "Inspect the small upright ears weekly for dust, wax, or irritation, wiping gently with a veterinarian-approved ear cleanser.",

    skinCare:
      "Brush weekly with a soft mitt to keep the sleek coat healthy, and gently wipe and dry any shallow facial creases."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: false,
    apartmentLiving: true,

    idealFor: [
      "First-time owners, families, and older adults wanting a cheerful, affectionate indoor companion",
      "Apartment and city residents looking for a compact, low-shedding, adaptable dog",
      "Households that enjoy a playful, people-focused pet with moderate daily walking needs",
      "Climate-controlled homes that can protect a flat-faced dog from summer heat and winter chill"
    ],

    notIdealFor: [
      "Distance runners or rugged trail hikers seeking a hot-weather endurance partner",
      "Homes where the dog would be left alone for long stretches every day",
      "Hot, humid homes without dependable air conditioning",
      "People wanting an outdoor-only dog or a heavy-duty guard dog"
    ]
  },

  funFacts: [
    "Officially recognized in 1893, the Boston Terrier was among the very first dog breeds developed entirely in the United States.",
    "Its neat white-on-dark coat markings and polite, friendly temperament earned it the lasting nickname 'The American Gentleman'.",
    "Author and activist Helen Keller owned a devoted Boston Terrier named Sir Thomas—affectionately called 'Phiz'—who accompanied her during her college years.",
    "Boston University adopted the breed as its school mascot nearly a century ago.",
    "Massachusetts designated the Boston Terrier as its official state dog."
  ],

  faq: [
    {
      question: "What kind of dog is a Boston Terrier?",
      answer:
        "The Boston Terrier is a compact, smooth-coated American companion breed famous for its tuxedo-like white markings, large expressive eyes, and friendly, lively manners."
    },
    {
      question: "How tall and heavy is a Boston Terrier?",
      answer:
        "Adults typically stand 15 to 17 inches tall at the shoulder and weigh 12 to 25 pounds, divided into three classes capped at 25 pounds."
    },
    {
      question: "How long does a Boston Terrier live?",
      answer:
        "With lean feeding, climate protection, and regular veterinary care, a Boston Terrier typically lives 11 to 13 years."
    },
    {
      question: "Do Boston Terriers shed much, and how are they groomed?",
      answer:
        "They shed lightly. Weekly brushing with a soft brush or rubber mitt and occasional baths keep the sleek coat clean, paired with daily eye checks."
    },
    {
      question: "Are Boston Terriers good apartment dogs?",
      answer:
        "Yes. Their compact size, moderate exercise needs, and quiet, sociable nature suit apartments well, as long as air conditioning keeps them cool in summer."
    },
    {
      question: "Are Boston Terriers good with children?",
      answer:
        "Yes. They are sturdy, patient, and playful with respectful children, making them popular family pets."
    },
    {
      question: "Are Boston Terriers easy to train?",
      answer:
        "Generally yes. They are bright and eager to please, learning best through short, upbeat sessions with praise and treats rather than harsh scolding."
    },
    {
      question: "What health problems are most common in Boston Terriers?",
      answer:
        "Key concerns include breathing sensitivity and overheating from their short muzzle (BOAS), corneal ulcers and cataracts (including early-onset HSF4 juvenile cataracts), patellar luxation, and congenital deafness."
    }
  ],

  references: [
    "natureserve-canis-lupus-familiaris",
    "fci-boston-terrier-official-standard",
    "fci-boston-terrier-nomenclature",
    "akc-boston-terrier-breed-standard",
    "akc-boston-terrier-breed-profile",
    "ofa-boston-terrier-chic-requirements",
    "omia-boston-terrier-hsf4-cataract",
    "pmc-boston-terrier-boas-2024",
    "pmc-boston-terrier-ced-2021",
    "the-dog-api",
    "wikimedia-boston-terrier-dsc-0004",
    "wikimedia-boston-terrier-dog-002"
  ],

  evidence: {
    scientificName: {
      reliability: "reliable_source",
      sources: [
        {
          id: "natureserve-canis-lupus-familiaris",
          role: "verified",
          locator: "Taxonomic listing: Canis lupus familiaris (Domestic Dog)"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Canis lupus familiaris is the verified domestic-dog taxonomic label used across the catalog."
    },

    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "History: Boston Bull, Boston Bull Terrier, Roundhead, American Gentleman"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.alt_names: American Gentleman"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Cross-checked across AKC breed profile and The Dog API."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-boston-terrier-official-standard",
          role: "verified",
          locator: "CLASSIFICATION FCI: Group 9 Companion and Toy Dogs; Section 11 Small Molossian type Dogs; Without working trial"
        },
        {
          id: "akc-boston-terrier-breed-standard",
          role: "verified",
          locator: "Non-Sporting Group"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.breed_group: Non-Sporting"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "User-facing group label states Companion and small molossian-type dogs without registry or section identifiers."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-boston-terrier-official-standard",
          role: "verified",
          locator: "ORIGIN: U.S.A."
        },
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "History: Boston and Southborough, Massachusetts"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.origin: Boston, Massachusetts, United States"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-boston-terrier-official-standard",
          role: "verified",
          locator: "UTILIZATION, GENERAL APPEARANCE, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "About the Breed and History (Hooper's Judge around 1870, English Bulldog x White English Terrier, 1893 recognition)"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description and breed.history"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Written in original prose from FCI Standard No. 140, AKC official records, and cross-checked against The Dog API."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-boston-terrier-official-standard",
          role: "verified",
          locator: "HEAD, EARS, BODY, TAIL, COAT, COLOUR, MARKINGS, WEIGHT"
        },
        {
          id: "akc-boston-terrier-breed-standard",
          role: "verified",
          locator: "General Appearance, Head, Coat, Color (brindle, seal, black with required white markings), Disqualifications"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Follows official AKC and FCI color rules (brindle, seal, or black with required white markings); excludes generic non-breed variants listed in The Dog API (e.g., blue, cream, fawn, liver, merle, red, sable, tricolour, white, or solid colors without white markings)."
    },

    "physical.height": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Height: 15-17 inches"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.height.metric: 38-43 cm"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Preserved in exact published inches (15 to 17 in) from AKC breed profile. Official standards define weight classes rather than a fixed height limit; The Dog API lists converted 38-43 cm."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-boston-terrier-breed-standard",
          role: "verified",
          locator: "Weight classes: under 15 pounds; 15 pounds and under 20 pounds; 20 pounds and not to exceed 25 pounds"
        },
        {
          id: "fci-boston-terrier-official-standard",
          role: "verified",
          locator: "WEIGHT: under 15 pounds (6.8 kg); 15 to under 20 pounds (6.8 to 9 kg); 20 to not exceed 25 pounds (9 to 11.35 kg)"
        },
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Weight: 12-25 pounds"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.weight.metric: 5-11 kg"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Preserved in exact published pounds (12 to 25 lb) matching AKC breed profile and the three official weight classes capped at 25 pounds; The Dog API lists converted 5-11 kg."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 11-13 years"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.life_span: 11-13 years"
        }
      ],
      verifiedOn: "2026-11-26",
      note: "Consistent across AKC breed profile and The Dog API."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Grooming: sleek, fine coat sheds minimally"
        },
        {
          id: "fci-boston-terrier-official-standard",
          role: "verified",
          locator: "COAT: Short, smooth, bright and fine in texture."
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-boston-terrier-breed-standard",
          role: "verified",
          locator: "Chops of good depth, not pendulous, completely covering teeth when mouth is closed."
        },
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (low)"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-boston-terrier-breed-standard",
          role: "verified",
          locator: "Temperament: friendly and lively dog with an excellent disposition and high degree of intelligence"
        },
        {
          id: "fci-boston-terrier-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: friendly, lively, excellent disposition, high intelligence"
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.temperament: Friendly, intelligent, outgoing, playful"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 ratings informed by AKC trait scales and official temperament descriptions."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Practical companion care emphasizing eye protection, brachycephalic heat precautions, and gentle positive training."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Exercise: varies by individual; one or two brisk walks daily plus play, avoiding overheating"
        },
        {
          id: "fci-boston-terrier-official-standard",
          role: "verified",
          locator: "UTILIZATION: Companion"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "cited",
          locator: "Daily walking and play recommendations"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 30 to 45 minutes daily suited to an upbeat but brachycephalic small companion."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "About the Breed: sturdy, portable, excellent urban/apartment companion"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Supervised outdoor play with weather precautions"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Health: brachycephalic heat/humidity sensitivity; needs sweater or coat in cold weather"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "cited",
          locator: "People-oriented companion that does not fare well left alone for extended periods"
        }
      ],
      verifiedOn: null,
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "cited",
          locator: "Nutrition: age-appropriate complete dog food and weight monitoring"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Health: eye protection (cataracts, corneal ulcers, glaucoma), deafness, patellar luxation, and heat/breathing sensitivity"
        },
        {
          id: "ofa-boston-terrier-chic-requirements",
          role: "verified",
          locator: "CHIC screening panel: Patella, Ophthalmologist, BAER"
        },
        {
          id: "omia-boston-terrier-hsf4-cataract",
          role: "verified",
          locator: "OMIA:001758-9615: HSF4 mutation causing early-onset hereditary cataract in Boston Terriers (Mellersh et al. 2007)"
        },
        {
          id: "pmc-boston-terrier-boas-2024",
          role: "verified",
          locator: "Tomlinson et al. (PLOS ONE, 2024): BOAS grading in 104 Boston Terriers (37.5% Grade 0, 35.6% Grade 1, 26.0% Grade 2, 0.96% Grade 3); nostril stenosis and facial foreshortening as key risk factors"
        },
        {
          id: "pmc-boston-terrier-ced-2021",
          role: "verified",
          locator: "UC Davis retrospective study (99 CED dogs vs. 458,680 reference dogs): Boston Terriers significantly overrepresented for corneal endothelial dystrophy"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Distinguishes genetically established early-onset HSF4 cataracts, peer-reviewed BOAS prevalence/risk factors, and senior corneal endothelial dystrophy from conformational risks."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Cataracts, corneal ulcers, deafness, patellar luxation, brachycephalic heat/breathing sensitivity"
        },
        {
          id: "omia-boston-terrier-hsf4-cataract",
          role: "verified",
          locator: "Autosomal recessive HSF4 early-onset hereditary cataract in Boston Terriers"
        },
        {
          id: "ofa-boston-terrier-chic-requirements",
          role: "verified",
          locator: "Patella, Eye, and BAER screening targets"
        },
        {
          id: "pmc-boston-terrier-boas-2024",
          role: "verified",
          locator: "BOAS grade distribution and conformational risk factors in Boston Terriers"
        },
        {
          id: "pmc-boston-terrier-ced-2021",
          role: "verified",
          locator: "Significant breed overrepresentation of Boston Terriers in corneal endothelial dystrophy (CED)"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "cited",
          locator: "Daily eye checks, heat avoidance, cold-weather coat, and annual veterinary visits"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Recommended Health Tests from the National Breed Club: Patella Evaluation, Ophthalmologist Evaluation, BAER Testing"
        },
        {
          id: "ofa-boston-terrier-chic-requirements",
          role: "verified",
          locator: "OFA CHIC testing for Boston Terrier (BTR)"
        },
        {
          id: "omia-boston-terrier-hsf4-cataract",
          role: "verified",
          locator: "HSF4 DNA test for early-onset hereditary juvenile cataracts"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Matches AKC's 3-test national breed club list (Patella, Ophthalmologist, BAER) plus the established HSF4 DNA test for early-onset juvenile cataracts."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-boston-terrier-breed-standard",
          role: "cited",
          locator: "Broad, square jaw with short regular teeth; even or slightly undershot bite"
        },
        {
          id: "akc-boston-terrier-breed-profile",
          role: "cited",
          locator: "Routine dental care"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-boston-terrier-breed-standard",
          role: "cited",
          locator: "Small erect ears positioned near the corners of the skull"
        },
        {
          id: "akc-boston-terrier-breed-profile",
          role: "cited",
          locator: "Weekly ear checks"
        }
      ],
      verifiedOn: null,
      note: null
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "cited",
          locator: "Weekly soft brushing and gentle facial care"
        }
      ],
      verifiedOn: null,
      note: null
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "cited",
          locator: "Temperament, family life, apartment suitability, and weather needs"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial suitability assessment reflecting friendly, adaptable indoor temperament and climate sensitivity."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "1893 recognition, 'American Gentleman' nickname, Helen Keller's dog 'Phiz', Boston University mascot, Massachusetts state dog"
        }
      ],
      verifiedOn: "2026-11-26",
      note: null
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-boston-terrier-breed-standard",
          role: "verified",
          locator: "Weight classes up to 25 lb, coat, and colors"
        },
        {
          id: "akc-boston-terrier-breed-profile",
          role: "verified",
          locator: "Height (15-17 in), weight (12-25 lb), lifespan (11-13 years), grooming, apartment life, children, training, and health"
        },
        {
          id: "omia-boston-terrier-hsf4-cataract",
          role: "verified",
          locator: "HSF4 early-onset hereditary juvenile cataracts"
        }
      ],
      verifiedOn: "2026-11-26",
      note:
        "Synthesized in original wording without naming registries or source organizations."
    }
  },

  updatedOn: "2026-11-26"
};
