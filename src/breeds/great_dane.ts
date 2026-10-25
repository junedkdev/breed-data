import type { Breed } from "../schema/breed.types";

export const great_dane: Breed = {
  slug: "great-dane",
  name: "Great Dane",
  scientificName: null,
  alternateNames: [
    "Deutsche Dogge",
    "German Mastiff",
    "Dogue Allemand",
    "Grand Danois",
    "Apollo of Dogs",
  ],
  group:
    "Group 2 — Pinscher and Schnauzer, Molossoid, and Swiss Mountain and Cattle Dogs; Section 2.1 — Molossoid Breeds, Mastiff Type (Working Group)",
  origin: {
    country: "Germany",
    region: null,
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Blue_Great_Dane.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Blue_Great_Dane.jpg",
      title: "Blue Great Dane.jpg",
      description: "Outdoor profile portrait of a pure steel-blue Great Dane.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2018-09-08",
      uploadedOn: "2018-09-17",
      width: 1465,
      height: 1408,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-25",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Dane_puppies.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Great_Dane_puppies.jpg",
      title: "Great Dane puppies.jpg",
      description: "Photograph of young Great Dane puppies resting together.",
      creator: "Jvgrandblanc",
      uploader: "Jvgrandblanc",
      capturedOn: "2016-04-19",
      uploadedOn: "2016-04-20",
      width: 1632,
      height: 918,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Jvgrandblanc, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-25",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Dane_Champion_Dog_Show.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Great_Dane_Champion_Dog_Show.jpg",
      title: "Great Dane Champion Dog Show.jpg",
      description:
        "Full-body photograph of a fawn Great Dane posed with a handler at a conformation show.",
      creator: "Valenzuela400",
      uploader: "Valenzuela400",
      capturedOn: "2024-01-21",
      uploadedOn: "2024-01-22",
      width: 1854,
      height: 3523,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Valenzuela400, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions:
        "The photograph includes a visible dog-show handler; personality rights may apply in some jurisdictions depending on the commercial context.",
      metadataCheckedOn: "2026-10-25",
    },
  ],
  overview: {
    summary:
      "The Great Dane is a giant German dog breed celebrated for its towering stature, clean athletic outlines, and composed, affectionate nature with household members. Combining substantial bone with balanced elegance, a well-bred individual is steady, people-oriented, and alert without unprovoked aggression. Because adult dogs reach 80 to 90 cm (males) or 72 to 84 cm (females) at the withers and weigh 140 to 175 lb (males) or 110 to 140 lb (females), early manners training, spacious living arrangements, and proactive veterinary planning are essential.",
    description:
      "Built on a nearly square, well-muscled frame, the Great Dane pairs impressive substance with smooth, ground-covering movement. The head is long, narrow, and finely chiselled, featuring parallel skull and muzzle planes of equal length, a clearly defined stop, dark almond-shaped eyes, and high-set pendant ears lying close to the cheeks. A long, arched neck flows into high withers, a short and firm back, a broad chest reaching the elbows, a well-tucked belly, and a tapering tail reaching the hocks. The single coat is very short, dense, smooth, and glossy, appearing in fawn, brindle, black, mantle, harlequin, merle, and steel blue. Indoors, mature dogs are typically calm and deeply attached to their families, though they can be reserved with strangers and physically overwhelming if not taught polite leash and greeting habits from puppyhood.",
    history:
      "Despite its English name, the Great Dane originated in Germany, evolving from ancient mastiff-like Bullenbeisser dogs and swift boar-hunting hounds (Hatz- und Saurüden) that combined the power of heavy molossoids with the agility of sighthounds. For centuries, German noble estates bred these large dogs to pursue wild boar and guard property under regional names such as Ulmer Dogge, Englische Dogge, Hatzrüde, Saupacker, and Grosse Dogge grouped by coat colour and stature. In 1878, a seven-member committee of breeders and judges chaired by Dr. Bodinus convened in Berlin and unified these regional types under the single national name Deutsche Dogge. The first formal written description was adopted at a Berlin exhibition in 1880, and dedicated club stewardship beginning in 1888 refined the breed from an aggressive big-game hunter into a poised, steady household guardian and companion.",
    originalPurpose:
      "Pursuing and holding large wild game—particularly wild boar—on noble estates, followed by estate guarding and personal protection.",
    currentRoles: [
      "Devoted family and household companion",
      "Alert domestic watchdog and deterrent guardian",
      "Conformation exhibition dog",
      "Participant in obedience, rally, tracking, agility, and weight-pulling activities suited to individual orthopedic health",
    ],
  },
  physical: {
    sizeCategory: "Giant",
    height: {
      unit: "cm",
      male: {
        min: 80,
        max: 90,
      },
      female: {
        min: 72,
        max: 84,
      },
    },
    weight: {
      unit: "lb",
      male: {
        min: 140,
        max: 175,
      },
      female: {
        min: 110,
        max: 140,
      },
    },
    lifespanYears: {
      min: 7,
      max: 10,
    },
    coatType:
      "Single coat; very short, dense, smooth, close-lying, and glossy without any undercoat.",
    coatLength: "Very short",
    coatColors: [
      "Fawn (light to deep golden yellow with a black mask)",
      "Brindle (golden yellow base with clearly defined black chevron stripes and a black mask)",
      "Black (glossy jet black)",
      "Mantle (black and white with a solid black blanket over the body)",
      "Harlequin (pure white base with irregular torn black patches)",
      "Merle (pale to dark grey base with torn black patches, in solid or mantle pattern)",
      "Blue (pure steel blue)",
    ],
    sheddingLevel: null,
    droolingLevel: null,
    distinctiveFeatures: [
      "Towering, statue-like silhouette combining giant stature with clean, balanced proportions",
      "Nearly square body outline in males, with females permitted slightly greater length",
      "Long, narrow, finely chiselled rectangular head with parallel skull and muzzle planes in a 1:1 ratio",
      "Clearly defined stop and well-developed superciliary ridges without protruding cheek muscles",
      "High-set, medium-sized pendant ears with front edges lying close to the cheeks",
      "Deep, broad chest reaching to the elbows with a pronounced abdominal tuck-up",
      "Rounded, well-arched cat feet with short, strong nails",
      "Long tail set high and broad at the base, tapering evenly to the hocks",
    ],
  },
  temperament: {
    traits: [
      "Affectionate, loyal, and deeply people-oriented with household members",
      "Confident, steady, and high in threshold against provocation",
      "Naturally watchful and often politely reserved toward unfamiliar visitors",
      "Gentle and patient indoors when daily physical and social needs are met",
      "Responsive and eager to please with consistent, reward-based guidance",
      "Physically immense, requiring early impulse control and polite leash habits",
    ],
    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 4,
      independence: 2,
      trainability: 4,
      barking: 3,
      energy: 3,
    },
  },
  care: {
    exercise: {
      level:
        "Moderate and carefully tailored to life stage. Adult dogs thrive on two or three brisk, controlled leash walks per day, whereas rapidly growing puppies and adolescents under two years of age must avoid forced running, repetitive jumping, or strenuous high-impact workouts that strain developing joints.",
      minutesPerDay: null,
      activities: [
        "Brisk, structured leash walks two or three times daily",
        "Low-impact sniffing and decompression walks in securely fenced areas",
        "Reward-based obedience, rally, and impulse-control exercises",
        "Scent-tracking games and interactive food-dispensing puzzles",
        "Gentle hiking or jogging only after skeletal maturity at two years of age",
      ],
    },
    grooming: {
      level:
        "Low to moderate. Although the smooth single coat is short and lies flat, the sheer surface area of a giant dog produces noticeable loose hair during seasonal coat changes.",
      brushing:
        "Brush once a week with a rubber grooming mitt, hound glove, or soft-bristled brush to lift dead hair and distribute skin oils; increase to daily brushing during spring and autumn shedding periods.",
      bathing:
        "Bathe occasionally as needed using a mild, dog-formulated shampoo and a secure, non-slip surface to prevent slips in a heavy dog.",
      notes: [
        "Keep nails trimmed short so the cat-like feet remain well arched and comfortable under the dog's heavy frame.",
        "Inspect the pendant ears weekly for wax buildup, redness, or odour, and wipe gently with a veterinarian-approved cleanser.",
        "Check elbows, hocks, and bony prominences for calluses or pressure sores, providing thick orthopaedic bedding to protect joints.",
        "Brush the teeth several times weekly using enzymatic canine toothpaste.",
      ],
    },
    training: {
      difficulty:
        "Moderate. Great Danes are generally cooperative and sensitive to their handlers, but their rapid growth means fundamental manners must be established while the puppy is still small enough to manage safely.",
      tips: [
        "Enroll in well-supervised puppy socialization and foundational obedience classes as soon as veterinary vaccination schedules allow.",
        "Prioritise loose-leash walking, polite doorway waiting, and keeping all four paws on the floor during greetings.",
        "Use positive reinforcement with food rewards, praise, and calm consistency rather than forceful corrections.",
        "Practice calm settling on a designated mat so the dog learns to relax quietly around household activity.",
        "Always walk on a secure leash in unfenced areas and provide a tall, sturdy perimeter fence at home, as many individuals will follow interesting scents.",
      ],
      socialization:
        "Expose puppies gradually and positively to diverse people, calm dogs, household noises, veterinary handling, and vehicle travel so they mature into self-assured, non-reactive adults.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: null,
      climates: [
        "Short single coat lacks insulating undercoat, requiring protection from freezing temperatures, cold rain, and icy winds.",
        "Avoid midday heat and humid workouts, providing shade, ventilation, and cool drinking water in warm weather.",
        "Supply wide, supportive orthopaedic beds in draft-free indoor living areas to cushion heavy joints.",
      ],
      aloneTimeTolerance: null,
    },
  },
  nutrition: {
    dietType:
      "Complete, balanced commercial or veterinarian-formulated diet specifically designed for giant-breed dogs, with controlled energy and calcium-to-phosphorus ratios during puppyhood.",
    feedingFrequency: {
      puppy:
        "Three to four measured meals daily until four to six months of age, transitioning to two measured meals per day by six to nine months on a dedicated giant-breed growth formula.",
      adult:
        "Two to three smaller measured meals per day rather than a single large daily ration to support digestion and help reduce gastric dilatation-volvulus risk.",
      senior:
        "Two to three measured meals daily adjusted for metabolic rate, lean muscle maintenance, and joint or cardiac health under veterinary supervision.",
    },
    guidelines:
      "Slow, steady skeletal development is vital for Great Dane puppies; overfeeding calories or adding calcium supplements accelerates growth unevenly and increases the risk of developmental bone disorders such as hypertrophic osteodystrophy and osteochondrosis. Throughout adulthood, divide the daily ration into multiple smaller meals, encourage calm eating rather than gulping, and enforce a strict rest period of at least one hour before and after meals to reduce the danger of gastric dilatation-volvulus (bloat).",
    considerations: [
      "Feed only diets formulated for large or giant breeds during growth, and never add unprescribed calcium or mineral supplements.",
      "Divide daily food intake into two or three smaller meals instead of one large meal.",
      "Withhold vigorous running, rough play, and heavy exercise around mealtimes.",
      "Discuss feeding bowl height and slow-feeder options with a veterinarian, as epidemiological studies have associated rapid eating and raised bowls with higher bloat risk.",
      "Maintain a lean body condition score so excess weight does not accelerate osteoarthritis or strain the heart.",
    ],
    note:
      "Exact caloric requirements vary substantially by age, adult frame size, neuter status, and activity level; consult a veterinarian to set target body weights and portion sizes.",
  },
  health: {
    overview:
      "Because of its extreme size, the Great Dane has a shorter average lifespan (typically 7 to 10 years) than smaller breeds and faces several serious, breed-associated health risks. Gastric dilatation-volvulus (GDV, or bloat) is the leading fatal emergency in the breed, with peer-reviewed epidemiological research estimating a 36.7% lifetime risk. Dilated cardiomyopathy (DCM), cervical spondylomyelopathy (Wobbler syndrome), hip dysplasia, developmental bone disorders in growing puppies, autoimmune thyroiditis, ocular conditions, and malignancies such as osteosarcoma and lymphoma are also major clinical concerns.",
    commonConditions: [
      "Gastric dilatation-volvulus (GDV / bloat) — acute, life-threatening distension and torsion of the stomach requiring immediate emergency surgery.",
      "Dilated cardiomyopathy (DCM) — progressive, inherited degeneration and enlargement of the heart muscle leading to arrhythmias or congestive heart failure.",
      "Cervical spondylomyelopathy (Wobbler syndrome) — compression of the cervical spinal cord from vertebral malformation or instability, causing an ataxic, wobbly gait and neck pain.",
      "Hip dysplasia and secondary osteoarthritis — malformation and degenerative wear of the hip joints that impair mobility.",
      "Developmental orthopaedic diseases — hypertrophic osteodystrophy (HOD) and panosteitis during rapid juvenile bone growth.",
      "Autoimmune thyroiditis and hypothyroidism — immune-mediated destruction of the thyroid gland causing metabolic slowing, alongside occasional Addison's disease.",
      "Ocular disorders — juvenile or adult cataracts and eyelid conformation defects such as entropion or ectropion.",
      "Neoplasia — particularly appendicular osteosarcoma (bone cancer) and lymphoma.",
      "Congenital sensorineural deafness and microphthalmia — strongly associated with homozygous merle or predominantly white (albinistic or porcelain) pigment patterns.",
    ],
    preventiveCare: [
      "Learn the early warning signs of gastric dilatation-volvulus (unproductive retching, restlessness, hypersalivation, and abdominal distension) and keep the nearest 24-hour emergency veterinary hospital contact accessible.",
      "Discuss prophylactic gastropexy (preventive surgical stomach tacking, often performed laparoscopically or during spay/neuter) with a veterinarian; peer-reviewed modelling shows it reduces GDV mortality nearly thirty-fold.",
      "Feed a giant-breed puppy ration without added calcium and prohibit forced jogging or jumping before 24 months of age to protect growth plates.",
      "Repeat cardiac (echocardiogram) and thyroid evaluations every two to three years in adult dogs, as normal juvenile results do not rule out adult-onset disease.",
      "Before any elective or emergency surgery, request giant-breed anaesthetic protocols including pre-surgical bloodwork with a clotting profile, intravenous fluid support, electrocardiographic monitoring, and active warming to guard against hypothermia and disseminated intravascular coagulopathy (DIC).",
    ],
    recommendedScreenings: [
      "Hip joint radiographic evaluation (baseline screening at approximately 24 months of age)",
      "Comprehensive cardiac evaluation including echocardiography by a veterinary cardiologist (baseline at two years and repeated every two to three years)",
      "Complete thyroid hormone and thyroglobulin autoantibody panel (baseline at two years and repeated every two to three years)",
      "Ophthalmologist evaluation for cataracts and eyelid conformation",
    ],
    dentalCare:
      "Brush the teeth several times per week with dog-safe toothpaste and schedule professional veterinary dental examinations during annual wellness visits.",
    earCare:
      "Inspect the folded ear canals weekly for moisture, debris, redness, or foul odour, cleaning gently with an ear solution recommended by a veterinarian.",
    skinCare:
      "Check the short coat and skin during weekly brushing for calluses over bony joints, abrasions, parasites, or new cutaneous masses, and provide deep padded bedding to prevent elbow hygromas.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "Households prepared for the space, vehicle capacity, and substantial food and veterinary budgets required by a giant dog",
      "Owners committed to early reward-based obedience training, consistent household boundaries, and daily leash walks",
      "Families seeking an affectionate, people-focused indoor companion who are willing to supervise interactions around young children",
      "Proactive owners who will partner closely with a veterinarian experienced in giant-breed nutrition, bloat prevention, and cardiac care",
    ],
    notIdealFor: [
      "People unprepared for giant-breed medical expenses, adult-human-equivalent medication dosages, or emergency surgical costs",
      "Households unable to physically manage or consistently train a dog weighing 110 to 175 lb",
      "Homes where the dog would be left isolated for long workdays without companionship or bathroom breaks",
      "Runners seeking an immediate high-mileage jogging partner before the puppy reaches two years of age",
    ],
  },
  funFacts: [
    "Despite the English name Great Dane—derived from the French phrase grand Danois—the breed has no documented historical connection to Denmark and was developed entirely in Germany, where it is called the Deutsche Dogge.",
    "In 1878, a committee of seven breeders and judges in Berlin led by Dr. Bodinus replaced numerous regional names such as Ulmer Dogge, Saupacker, and Hatzrüde with the unified breed name Deutsche Dogge.",
    "Standing on its hind legs, an adult Great Dane is taller than most humans, yet its balanced proportions and statue-like presence earned it the classic sobriquet 'Apollo of Dogs.'",
    "Historically, German nobility selected the strongest, swiftest boarhounds to live inside the manor as personal bodyguards and estate protectors—a transition that shaped the modern breed's people-loving indoor temperament.",
    "Standard colour breeding is strictly organised into compatible colour families so that distinct patterns such as fawn, brindle, harlequin, mantle, merle, black, and steel blue preserve clear pigment and avoid health-linked albinistic white coats.",
  ],
  faq: [
    {
      question: "How tall and heavy is a fully grown Great Dane?",
      answer:
        "Adult males measure 80 to 90 cm at the withers and typically weigh 140 to 175 lb, while adult females measure 72 to 84 cm at the withers and weigh 110 to 140 lb.",
    },
    {
      question: "What is the typical life expectancy of a Great Dane?",
      answer:
        "Most Great Danes live between 7 and 10 years (with many health guides citing 8 to 10 years as typical, some dogs living 6 to 7 years, and occasional individuals reaching 12 years). Maintaining a lean weight, scheduling regular cardiac and thyroid screenings, and planning for bloat prevention help support longevity.",
    },
    {
      question: "Why is bloat such a serious concern for Great Danes, and can it be prevented?",
      answer:
        "Gastric dilatation-volvulus (GDV, or bloat) occurs when the deep chest allows the stomach to fill with gas and twist on its axis, cutting off blood flow. Epidemiological research estimates a 36.7% lifetime risk in the breed. Owners can lower mortality risk by discussing prophylactic gastropexy surgery with their veterinarian, feeding two or three smaller meals daily, preventing rapid gulping, and avoiding vigorous exercise around mealtimes.",
    },
    {
      question: "Are Great Danes safe around children?",
      answer:
        "Well-socialised Great Danes are typically gentle, patient, and affectionate with family members. However, an exuberant puppy or wagging tail on a giant dog can easily knock over a toddler, so every interaction with young children must be actively supervised by an adult.",
    },
    {
      question: "What coat colours are recognised in the Great Dane?",
      answer:
        "Recognised varieties are fawn (golden yellow with a black mask), brindle (golden yellow with black chevron stripes), glossy black, mantle (black blanket over a white base), harlequin (white base with torn black patches), merle (grey base with torn black patches, solid or mantle), and pure steel blue.",
    },
    {
      question: "When can a Great Dane start accompanying an owner on jogs or long hikes?",
      answer:
        "You should wait until the dog is at least two years old before starting repetitive jogging, running on hard pavement, or strenuous hiking so that the growth plates and joints finish maturing safely.",
    },
    {
      question: "What health screenings should prospective buyers request for the parents of a Great Dane puppy?",
      answer:
        "Responsible breeders provide documented baseline clearances from approximately two years of age for hip conformation, veterinary ophthalmologist eye exams, thyroid function and autoantibodies, and cardiac health (including echocardiography), with heart and thyroid tests repeated every two to three years in breeding adults.",
    },
  ],
  references: [
    "fci-great-dane-standard",
    "akc-great-dane-standard",
    "american-kennel-club-great-dane-profile",
    "american-kennel-club-great-dane-lifespan-health",
    "great-dane-club-america-health-research",
    "great-dane-club-america-owner-guide",
    "pubmed-great-dane-gdv-risk-factors-2000",
    "pubmed-great-dane-prophylactic-gastropexy-2003",
    "pubmed-great-dane-dcm-expression-2009",
    "the-dog-api",
    "wikimedia-great-dane-blue-canarian",
    "wikimedia-great-dane-puppies-jvgrandblanc",
    "wikimedia-great-dane-champion-show-valenzuela400",
  ],
  evidence: {
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Neither the consulted breed standards nor The Dog API assign a breed-specific scientific trinomial.",
    },
    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Title and Brief Historical Summary",
        },
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "About the Breed and Did You Know? (Deutsche Dogge, Dogue Allemand, Grand Danois, German Mastiff, Apollo of Dogs)",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names (Deutsche Dogge, Apollo of Dogs)",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "FCI Standard No. 235 uses Deutsche Dogge as the official German breed name and notes the traditional epithet 'Apollo amongst all breeds'; AKC and The Dog API verify German Mastiff, Dogue Allemand, Grand Danois, and Apollo of Dogs.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "FCI Classification — Group 2, Section 2.1 (Molossoid breeds, Mastiff type)",
        },
        {
          id: "akc-great-dane-standard",
          role: "verified",
          locator: "General Appearance (Working breeds)",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.breed_group (Working)",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Combines the international Group 2 Section 2.1 Molossoid/Mastiff classification with the Working Group designation used by North American registries and The Dog API.",
    },
    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Origin (Germany)",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin (Germany)",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Both FCI Standard No. 235 and The Dog API identify Germany as the country of origin.",
    },
    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Origin (Germany)",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin (Germany)",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Historical precursors were bred across multiple German principalities and estates (including Ulm and Berlin), so no single sub-national origin region is assigned.",
    },
    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Brief Historical Summary, General Appearance, Behaviour/Temperament, and Utilization",
        },
        {
          id: "akc-great-dane-standard",
          role: "verified",
          locator: "General Appearance, Head, Neck, Topline, Body, and Temperament",
        },
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "About the Breed and History",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "All overview text is rewritten in original wording without naming source organisations inside user-facing fields.",
    },
    "overview.summary": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "General Appearance, Behaviour/Temperament, and Size",
        },
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Breed overview and size/weight ranges",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "overview.description": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Important Proportions, Head, Body, Limbs, and Coat",
        },
        {
          id: "akc-great-dane-standard",
          role: "verified",
          locator: "Size, Proportion, Substance, Head, Body, and Color",
        },
        {
          id: "the-dog-api",
          role: "cited",
          locator: "breed.description",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "overview.history": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Brief Historical Summary (Bullenbeisser, Hatz- und Saurüden, 1878 Berlin committee under Dr. Bodinus, 1880 Berlin standard, 1888 club)",
        },
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "History and Did You Know?",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.history",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "The Dog API confirms the boar-hunting and estate-guardian heritage on German noble estates but states that the breed was standardized as 'Deutsche Dogge' in 1876; FCI Standard No. 235 documents that the seven-member Berlin committee chaired by Dr. Bodinus adopted the unified name 'Deutsche Dogge' in 1878 and laid down the first standard in 1880.",
    },
    "overview.originalPurpose": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Brief Historical Summary and Utilization",
        },
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "History and Did You Know? (boar hound and estate guardian)",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "overview.currentRoles": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Utilization (Companion, watch- and guard dog)",
        },
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "About the Breed and Exercise (companion, home guardian, agility, obedience, tracking, weight pulls)",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "General Appearance, Coat, Colour, and Size",
        },
        {
          id: "akc-great-dane-standard",
          role: "verified",
          locator: "Size, Proportion, Substance, Coat, and Color",
        },
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Height, Weight, and Life Expectancy",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Height uses the published whole-number centimetre ranges from FCI Standard No. 235 (80–90 cm males, 72–84 cm females), and weight uses the published whole-number pound ranges from the AKC breed profile (140–175 lb males, 110–140 lb females) without unit conversion.",
    },
    "physical.sizeCategory": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-great-dane-standard",
          role: "verified",
          locator: "General Appearance ('one of the giant working breeds')",
        },
        {
          id: "great-dane-club-america-owner-guide",
          role: "verified",
          locator: "Is a Great Dane right for you? ('The Great Dane is a giant breed')",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Size and Weight — Height at the withers (Males: 80–90 cm; Females: 72–84 cm)",
        },
        {
          id: "akc-great-dane-standard",
          role: "cited",
          locator: "Size, Proportion, Substance (Males not less than 30 in, 32 in or more preferred; Females not less than 28 in, 30 in or more preferred)",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.height.metric (male 76–81 cm, female 71–76 cm)",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "FCI Standard No. 235 specifies 80–90 cm for males and 72–84 cm for females. The Dog API reports 76–81 cm for males and 71–76 cm for females, which is a metric conversion of the AKC profile's 30–32 in and 28–30 in minimum/preferred thresholds.",
    },
    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Weight (140–175 pounds male; 110–140 pounds female)",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight.metric (male 64–79 kg, female 50–64 kg)",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Neither FCI Standard No. 235 nor the AKC written standard specifies numerical weights. The AKC breed profile publishes whole-number pound ranges (140–175 lb for males, 110–140 lb for females), which are stored verbatim in lb without unit conversion. The Dog API lists 64–79 kg and 50–64 kg (a rounded metric conversion of the AKC pound ranges).",
    },
    "physical.weight.male.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Weight (140–175 pounds male)",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight.metric (79 kg)",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Stored in the AKC profile's published unit (175 lb) rather than The Dog API's converted metric value (79 kg).",
    },
    "physical.weight.female.max": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Weight (110–140 pounds female)",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight.metric (64 kg)",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Stored in the AKC profile's published unit (140 lb) rather than The Dog API's converted metric value (64 kg).",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Life Expectancy (7–10 years)",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span (7–10 years)",
        },
        {
          id: "american-kennel-club-great-dane-lifespan-health",
          role: "cited",
          locator: "Why Are Great Dane Life Spans So Short? (8–10 years typical, some 6–7 years, rare individuals 12 years)",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "Both the AKC breed profile and The Dog API list 7–10 years; the AKC health article notes 8–10 years as typical while observing that some Great Danes live only 6–7 years and a few reach 12.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Coat — Hair ('Very short, dense, smooth and close lying, glossy. Must never be coarse, dull or a double coat.')",
        },
        {
          id: "akc-great-dane-standard",
          role: "verified",
          locator: "Coat ('short, thick and clean with a smooth glossy appearance')",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Coat — Hair ('Very short')",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Coat — Colour (Fawn, Brindle, Harlequin, Merle, Black including Mantel and Plattenhunde, Blue)",
        },
        {
          id: "akc-great-dane-standard",
          role: "verified",
          locator: "Color, Markings and Patterns (Brindle, Fawn, Blue, Black, Harlequin, Mantle, Merle)",
        },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "GET /breeds/{id}/colours",
        },
      ],
      verifiedOn: "2026-10-25",
      note:
        "FCI Standard No. 235 and the AKC Official Standard recognise Fawn, Brindle, Black, Mantle, Harlequin, Merle, and Blue. The Dog API colour endpoint includes non-standard and disqualified colours such as Black and Tan, Brown / Chocolate, Cream, Liver, Red, Sable, Tan, Tricolour, and solid White.",
    },
    "physical.sheddingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Consulted official standards do not assign a categorical shedding-level value.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Consulted official standards do not assign a categorical drooling-level value.",
    },
    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "General Appearance, Important Proportions, Head, Body, Tail, and Limbs",
        },
        {
          id: "akc-great-dane-standard",
          role: "verified",
          locator: "General Appearance, Size, Proportion, Substance, Head, and Body",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Behaviour / Temperament",
        },
        {
          id: "akc-great-dane-standard",
          role: "verified",
          locator: "Temperament",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament (Friendly, gentle, confident, loyal, affectionate)",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "cited",
          locator: "Behaviour / Temperament",
        },
        {
          id: "american-kennel-club-great-dane-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics",
        },
      ],
      verifiedOn: null,
      note:
        "Normalized 1–5 scores informed by the AKC breed trait sliders and FCI/AKC temperament descriptions.",
    },
    "temperament.scores.affection": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "cited",
          locator: "Affectionate With Family",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "temperament.scores.withChildren": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "cited",
          locator: "Good With Young Children",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "temperament.scores.withDogs": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "cited",
          locator: "Good With Other Dogs",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "temperament.scores.withStrangers": {
      reliability: "estimate",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "cited",
          locator: "Behaviour / Temperament ('Might be reserved towards strangers')",
        },
        {
          id: "american-kennel-club-great-dane-profile",
          role: "cited",
          locator: "Openness To Strangers",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "temperament.scores.protectiveness": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "cited",
          locator: "Watchdog/Protective Nature",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "temperament.scores.independence": {
      reliability: "estimate",
      sources: [
        {
          id: "great-dane-club-america-owner-guide",
          role: "cited",
          locator: "How long will the puppy be alone? ('craves the companionship of other animals and people')",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "temperament.scores.trainability": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "cited",
          locator: "Trainability Level",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "temperament.scores.barking": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "cited",
          locator: "Barking Level",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "temperament.scores.energy": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "cited",
          locator: "Energy Level",
        },
      ],
      verifiedOn: null,
      note: null,
    },
    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Exercise (brisk walk two or three times a day; wait until 2 years old before jogging/hiking)",
        },
        {
          id: "great-dane-club-america-owner-guide",
          role: "verified",
          locator: "Is a Great Dane right for you? (wait until after two years old before jogging)",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Exercise",
        },
        {
          id: "great-dane-club-america-owner-guide",
          role: "verified",
          locator: "Is a Great Dane right for you?",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Consulted kennel and breed club sources specify two to three brisk walks per day rather than a fixed daily minute count.",
    },
    "care.exercise.activities": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Exercise (walks, jogging/hiking after age 2, agility, obedience, tracking, weight pulls, flyball)",
        },
        {
          id: "great-dane-club-america-owner-guide",
          role: "verified",
          locator: "Is a Great Dane right for you?",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Grooming (weekly brushing, daily brushing during shedding season, occasional bathing, regular nail trimming)",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "care.grooming.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Grooming",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "care.grooming.brushing": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Grooming",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "care.grooming.bathing": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Grooming",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "care.grooming.notes": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Grooming",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Training and Exercise (early socialization, puppy training classes, leash and tall fence)",
        },
        {
          id: "great-dane-club-america-owner-guide",
          role: "verified",
          locator: "Is a Great Dane right for you? (obedience training, regular socialization, fenced yard)",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "care.training.difficulty": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Training",
        },
        {
          id: "great-dane-club-america-owner-guide",
          role: "verified",
          locator: "Is a Great Dane right for you?",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "care.training.tips": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Training and Exercise",
        },
        {
          id: "great-dane-club-america-owner-guide",
          role: "verified",
          locator: "Is a Great Dane right for you?",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "care.training.socialization": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Training",
        },
        {
          id: "great-dane-club-america-owner-guide",
          role: "verified",
          locator: "Is a Great Dane right for you?",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "care.livingEnvironment": {
      reliability: "reliable_source",
      sources: [
        {
          id: "great-dane-club-america-owner-guide",
          role: "verified",
          locator: "Is a Great Dane right for you?",
        },
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Coat — Hair (single, very short coat without undercoat)",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Consulted sources do not establish a universal boolean apartment-suitability value.",
    },
    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "While a securely fenced yard is strongly recommended, consulted sources do not define a categorical boolean value.",
    },
    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Coat — Hair (single short coat without undercoat)",
        },
        {
          id: "great-dane-club-america-owner-guide",
          role: "verified",
          locator: "Is a Great Dane right for you? and Where will your new puppy live?",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Although the breed club notes that Great Danes do not do well when left alone for extended periods, no quantified hourly tolerance is established.",
    },
    nutrition: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Nutrition",
        },
        {
          id: "american-kennel-club-great-dane-lifespan-health",
          role: "verified",
          locator: "Healthy Diet and Preventative Care",
        },
        {
          id: "pubmed-great-dane-gdv-risk-factors-2000",
          role: "verified",
          locator: "Abstract (eating speed and raised feeding bowl risk factors for GDV)",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "nutrition.dietType": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-lifespan-health",
          role: "verified",
          locator: "Healthy Diet (large and giant breed nutrition to prevent rapid growth)",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-lifespan-health",
          role: "verified",
          locator: "Healthy Diet",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Nutrition (multiple small meals per day)",
        },
        {
          id: "great-dane-club-america-health-research",
          role: "verified",
          locator: "GDV: Bloat (multiple small meals per day)",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Nutrition (age-appropriate diet and multiple small meals per day)",
        },
        {
          id: "american-kennel-club-great-dane-lifespan-health",
          role: "verified",
          locator: "Healthy Diet and Preventative Care",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "nutrition.guidelines": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-lifespan-health",
          role: "verified",
          locator: "Healthy Diet and Preventative Care",
        },
        {
          id: "great-dane-club-america-health-research",
          role: "verified",
          locator: "GDV: Bloat and HOD/Pano",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "nutrition.considerations": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-lifespan-health",
          role: "verified",
          locator: "Healthy Diet and Preventative Care",
        },
        {
          id: "pubmed-great-dane-gdv-risk-factors-2000",
          role: "verified",
          locator: "Abstract (faster speed of eating and raised feeding bowl associated with increased GDV risk)",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "nutrition.note": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Nutrition",
        },
        {
          id: "american-kennel-club-great-dane-lifespan-health",
          role: "verified",
          locator: "Healthy Diet",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "great-dane-club-america-health-research",
          role: "verified",
          locator: "Great Dane Health and Research and Surgical Guidelines",
        },
        {
          id: "american-kennel-club-great-dane-lifespan-health",
          role: "verified",
          locator: "Giant Health Problems for Giant Dogs",
        },
        {
          id: "pubmed-great-dane-prophylactic-gastropexy-2003",
          role: "verified",
          locator: "Abstract (36.7% lifetime risk of GDV and 29.6-fold mortality reduction with prophylactic gastropexy)",
        },
        {
          id: "pubmed-great-dane-dcm-expression-2009",
          role: "verified",
          locator: "Abstract (dilated cardiomyopathy and altered triadin/calstabin2 expression in Great Danes)",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "great-dane-club-america-health-research",
          role: "verified",
          locator: "Great Dane Health and Research",
        },
        {
          id: "american-kennel-club-great-dane-lifespan-health",
          role: "verified",
          locator: "Giant Health Problems for Giant Dogs",
        },
        {
          id: "pubmed-great-dane-prophylactic-gastropexy-2003",
          role: "verified",
          locator: "Abstract (36.7% lifetime risk of GDV in the Great Dane)",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "great-dane-club-america-health-research",
          role: "verified",
          locator: "DCM, K9HD, Hypothyroidism/Addison's, Cataracts/Entropion, GDV, Cancer (osteosarcoma/lymphoma), Wobblers Syndrome, HOD and Pano",
        },
        {
          id: "american-kennel-club-great-dane-lifespan-health",
          role: "verified",
          locator: "Bloat, Cardiomyopathy, Joint & Bone Disease, Thyroid Problems",
        },
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Disqualifying Faults (Blind or deaf Danes; ectropion, entropion, macroblepharia; albinos/porcelain Danes)",
        },
        {
          id: "pubmed-great-dane-dcm-expression-2009",
          role: "verified",
          locator: "Abstract",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "health.preventiveCare": {
      reliability: "reliable_source",
      sources: [
        {
          id: "great-dane-club-america-health-research",
          role: "verified",
          locator: "Surgical Guidelines for the Great Dane, GDV: Bloat, and Recommended disease screenings",
        },
        {
          id: "pubmed-great-dane-prophylactic-gastropexy-2003",
          role: "verified",
          locator: "Abstract (29.6-fold reduction in mortality with prophylactic gastropexy)",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Recommended Health Tests From the National Breed Club (Hip, Cardiac, Ophthalmologist, Thyroid)",
        },
        {
          id: "great-dane-club-america-health-research",
          role: "verified",
          locator: "Recommended disease screenings (baseline at ~2 years for hip, heart/echocardiogram, thyroid, and eye; repeat heart and thyroid every 2–3 years)",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "health.dentalCare": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Grooming and Health",
        },
        {
          id: "american-kennel-club-great-dane-lifespan-health",
          role: "verified",
          locator: "Preventative Care",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "health.earCare": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Grooming",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "health.skinCare": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Grooming",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    suitability: {
      reliability: "reliable_source",
      sources: [
        {
          id: "great-dane-club-america-owner-guide",
          role: "verified",
          locator: "Is a Great Dane right for you? and Questions a Breeder May Ask",
        },
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "About the Breed, Exercise, and Training",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "While prior giant-breed experience is advantageous, consulted sources do not assign a universal boolean value for first-time owners.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Suitability depends on children's ages and strict adult supervision because a playful giant dog can unintentionally knock down small children.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Suitability depends on individual physical strength, transport capability, and support.",
    },
    "suitability.activeOwners": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Exercise",
        },
        {
          id: "great-dane-club-america-owner-guide",
          role: "verified",
          locator: "Is a Great Dane right for you?",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No categorical boolean value is established across consulted sources.",
    },
    "suitability.idealFor": {
      reliability: "reliable_source",
      sources: [
        {
          id: "great-dane-club-america-owner-guide",
          role: "verified",
          locator: "Is a Great Dane right for you?",
        },
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "About the Breed, Care, and Health",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    "suitability.notIdealFor": {
      reliability: "reliable_source",
      sources: [
        {
          id: "great-dane-club-america-owner-guide",
          role: "verified",
          locator: "Is a Great Dane right for you? and Questions a Breeder May Ask",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Brief Historical Summary, General Appearance, and Coat — Colour",
        },
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "About the Breed and Did You Know?",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
    faq: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-great-dane-standard",
          role: "verified",
          locator: "Size and Weight, Coat — Colour, and Behaviour / Temperament",
        },
        {
          id: "akc-great-dane-standard",
          role: "verified",
          locator: "Color, Markings and Patterns",
        },
        {
          id: "american-kennel-club-great-dane-profile",
          role: "verified",
          locator: "Weight, Life Expectancy, Exercise, and Recommended Health Tests",
        },
        {
          id: "american-kennel-club-great-dane-lifespan-health",
          role: "verified",
          locator: "Life Span and Health Issues",
        },
        {
          id: "great-dane-club-america-health-research",
          role: "verified",
          locator: "GDV: Bloat and Recommended disease screenings",
        },
        {
          id: "pubmed-great-dane-prophylactic-gastropexy-2003",
          role: "verified",
          locator: "Abstract (36.7% lifetime risk of GDV)",
        },
      ],
      verifiedOn: "2026-10-25",
      note: null,
    },
  },
  updatedOn: "2026-10-25",
};
