import type { Breed } from "../schema/breed.types";

export const bullmastiff: Breed = {
  slug: "bullmastiff",
  name: "Bullmastiff",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "The Gamekeeper's Night Dog",
    "Gamekeeper's Night Dog",
    "Gamekeeper's Night-Dog",
    "Bull-Mastiff",
    "Bull and Mastiff Dog"
  ],

  group:
    "Pinscher and Schnauzer Type, Molossoid Breeds, and Swiss Mountain and Cattle Dogs; Section 2.1 — Mastiff-type Molossoids (without working trial; also classified in the Working Group)",

  origin: {
    country: "Great Britain",
    region:
      "England (developed on 19th-century country estates, notably in Nottinghamshire and Staffordshire around the historic Thorneywood and Farcroft kennels)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bullmastiff.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Bullmastiff.jpg",
      title: "Bullmastiff.jpg",
      description:
        "Adult male Bullmastiff on a plain white background (derivative of a 2006 photograph by Fausto Moreno).",
      creator: "Desaix83 (after the work of Fausto Moreno)",
      uploader: "Desaix83",
      capturedOn: "2006-10-07",
      uploadedOn: "2015-03-17",
      width: 589,
      height: 509,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Desaix83, derived from a 2006 photograph by Fausto Moreno (File:Bullmastiff edited.JPG), Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). See the source page for derivative-work history; indicate any further changes and comply with ShareAlike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-22"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bullmastiff%20puppy.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Bullmastiff_puppy.jpg",
      title: "Bullmastiff puppy.jpg",
      description: "A two-month-old Bullmastiff puppy named George.",
      creator: "Davidmiron",
      uploader: "Davidmiron",
      capturedOn: "2005-07-09",
      uploadedOn: "2008-10-05",
      width: 1836,
      height: 1224,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Davidmiron, Wikimedia Commons, CC BY-SA 3.0 (also dual-licensed under GFDL 1.2+; https://creativecommons.org/licenses/by-sa/3.0/). Identify any changes made to the image and comply with ShareAlike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-22"
    }
  ],

  overview: {
    summary:
      "A powerful, symmetrical British estate guardian bred from a 60% Mastiff and 40% Bulldog foundation, combining a broad square black-masked head, short weather-resistant coat, and agile strength with calm, loyal devotion to its household.",

    description:
      "The Bullmastiff—historically celebrated in Britain as 'The Gamekeeper's Night Dog'—is a large, powerfully built, and symmetrical molossoid dog that shows great strength and endurance without ever appearing clumsy or cumbersome. Built on a nearly square outline with a short, straight back and a wide, deep chest set well down between straight, heavy-boned forelegs, it is distinguished by a large square skull that wrinkles fairly when alert (but not at rest), a pronounced stop, and a short, broad, square-cut black muzzle measuring roughly one-third of the total head length. Medium-sized dark or hazel eyes set the width of the muzzle apart with a central furrow and wide, high-set V-shaped ears darker than the body frame a keen, self-assured expression. Its short, hard, flat-lying coat comes in pure shades of brindle, fawn, or red with an essential black mask toning toward the eyes. Fearless and resolute when defending its people and territory yet docile, quiet, and deeply affectionate indoors, the Bullmastiff thrives with confident, humane leadership, early socialization, and moderate daily walks.",

    history:
      "While estate watchdogs of bull-and-mastiff type were used in England by the late eighteenth century, the documented history of the modern Bullmastiff took shape around 1860 on the sprawling country estates and game preserves of Victorian Britain. Faced with armed nighttime poachers—who risked severe penalties including hanging if caught—estate gamekeepers needed a silent, fearless 'Night Dog' agile enough to overtake a fleeing intruder and powerful enough to knock a man down and pin him without mauling him. Because the Old English Mastiff alone was too slow and lacked the drive to bowl over a runner, whereas the nineteenth-century Bulldog was too ferocious and inclined to savage its quarry, breeders crossed the two breeds until achieving an optimal balance of roughly 60 percent Mastiff and 40 percent Bulldog. Dark brindle coats were prized by gamekeepers for blending into the night, and keepers walking beside their dogs in the dark could feel the skin on the dog's broad forehead wrinkle in concentration the instant an intruder was detected ahead. At the first Gamekeepers' Dog Show in 1900 and subsequent exhibitions, Nottingham breeder William Burton of the Thorneywood Kennels famously offered a one-pound wager to any sportsman who could escape his muzzled brindle dog, Thorneywood Terror, who never lost a match. Meanwhile, S. E. Moseley of the Farcroft Kennels systematically bred multi-generation crosses ('the Moseley Recipe') to fix a true-breeding 60/40 type. Officially recognized as a purebred in Britain in 1924 (with Moseley's brindle female Ch. Farcroft Silvo and V. J. Smith's fawn male Ch. Tiger Prince becoming the first champions in 1928–1929), the breed was recognized in North America in October 1933–1934—when the Rockefeller family also imported two males to patrol their Pocantico estate in New York—and received definitive international recognition in April 1955.",

    originalPurpose:
      "Estate gamekeeper's night guard dog bred to track silently, overtake, knock down, and hold poachers without mauling them until the gamekeeper arrived.",

    currentRoles: [
      "Devoted family and household companion",
      "Watchdog and residential or estate property guardian",
      "Obedience, rally, agility, tracking, and scent-work / nose-work participant",
      "Therapy dog where individually suited"
    ]
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "cm",
      male: {
        min: 64,
        max: 69
      },
      female: {
        min: 61,
        max: 66
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 50,
        max: 59
      },
      female: {
        min: 41,
        max: 50
      }
    },

    lifespanYears: {
      min: 7,
      max: 9
    },

    coatType:
      "Short, hard, dense, weather-resistant single coat lying flat to the body (long, silky, or woolly coats are highly undesirable).",

    coatLength: "Short and flat-lying",

    coatColors: [
      "Brindle (any pure, clear shade, including fawn brindle, red brindle, or red-fawn brindle, with an essential black muzzle and dark eye markings)",
      "Fawn (any pure, clear shade from very light brown/biscuit to reddish-brown or red-fawn, with an essential black muzzle and dark eye markings)",
      "Red (any pure, clear shade from light red-fawn to rich dark red, with an essential black muzzle and dark eye markings; across all three colours, a very small white marking on the chest is permissible, while other white markings are faulted)"
    ],

    sheddingLevel:
      "Moderate year-round with seasonal shedding; weekly brushing helps manage loose hair indoors.",

    droolingLevel:
      "Moderate (more prone to drooling and slobber than many breeds—especially after drinking, around food, in warm weather, or when shaking the head—though upper lips should never hang below the level of the lower jaw).",

    distinctiveFeatures: [
      "Powerful, symmetrical, nearly square build (body length from breastbone to rear of thigh only slightly exceeding height at the withers) that remains sound and active rather than cumbersome",
      "Large, broad, deep skull that appears square from every angle, showing fair wrinkle when alert and interested but smooth when in repose",
      "Pronounced stop and short, broad, deep, square-cut muzzle measuring approximately one-third of total head length from tip of nose to occiput, with a broad flat nose and widely opened nostrils",
      "Essential black muzzle toning off toward the eyes with dark markings around the eyes, non-pendulous flews that never hang below the lower jaw, and a broad under-jaw with a desired level (pincer) or slightly undershot bite and wide-set large canines",
      "Medium-sized dark or hazel eyes set apart the width of the muzzle with a central furrow between them, and small V-shaped ears folded forward, set wide and high level with the occiput, deeper in colour than the body, with tips level with the eyes when alert",
      "Well-arched, very muscular neck almost equal in circumference to the skull, paired with a wide, deep chest let well down between wide-set, straight forelegs",
      "High-set tail strong at the root and tapering to the hocks, carried straight or curved (never hound-fashion or crank-tailed), and well-arched, rounded cat-like feet with hard pads and dark nails",
      "Withers height of 64 to 69 cm (25 to 27 inches, male average ~26 in) for males and 61 to 66 cm (24 to 26 inches) for females, and weight of 50 to 59 kg (110 to 130 pounds, male average ~120 lbs) for males and 41 to 50 kg (90 to 110 pounds in Britain and Europe, or 100 to 120 pounds / 45 to 54 kg in North America) for females"
    ]
  },

  temperament: {
    traits: [
      "Fearless, courageous, and confident when protecting family or territory",
      "Docile, affectionate, and deeply devoted to its household",
      "High-spirited, alert, and observant",
      "Quiet indoors and rarely barks without cause",
      "Possessive and naturally discerning about who belongs on its property, yet welcoming to guests accepted by its owners",
      "Strong-willed and independent-minded, requiring a confident, consistent handler",
      "Can be intolerant of unfamiliar or same-sex dogs (especially intact males) once mature",
      "Stoic with an unusually high pain threshold, requiring close observation for subtle signs of illness or injury"
    ],

    scores: {
      affection: 5,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 2,
      protectiveness: 5,
      independence: 3,
      trainability: 3,
      barking: 2,
      energy: 3
    }
  },

  care: {
    exercise: {
      level:
        "Moderate daily exercise suited to a heavy-boned guardian breed: regular brisk walks and controlled play in a securely fenced yard rather than distance running, avoiding strenuous activity in warm or humid weather and protecting growing puppies from high-impact exercise until well over 18 months of age.",

      minutesPerDay: null,

      activities: [
        "Brisk daily leash walks during cooler morning or evening hours",
        "Short, controlled play sessions in a securely fenced yard",
        "Obedience, rally, and polite-manners training",
        "Tracking, scent work, and nose-work games that engage the breed's keen tracking heritage",
        "Low-impact agility or enrichment puzzles for skeletally mature adults (over 18 months of age)"
      ]
    },

    grooming: {
      level:
        "Low to moderate. The short, flat-lying coat needs only weekly brushing and occasional baths, paired with daily wiping of the jowls and regular inspection of facial folds, ears, and nails.",

      brushing:
        "Brush once a week with a rubber grooming mitt or soft bristle brush to remove loose hair and distribute skin oils, increasing frequency during seasonal shedding.",

      bathing:
        "Bathe only as needed using a mild, dog-safe shampoo, and dry the coat and skin folds thoroughly afterward.",

      notes: [
        "Keep a towel handy and wipe the jowls and chin daily—especially after eating or drinking—to remove saliva and food debris.",
        "Inspect and gently clean any facial or muzzle folds with a soft damp cloth, drying them thoroughly so trapped moisture does not cause bacterial or yeast skin-fold irritation.",
        "Monitor the coat and skin for dryness, oiliness, interdigital cysts, or red itchy paws and groin that can signal food or environmental allergies.",
        "Check and clean the ears regularly with a veterinarian-recommended ear cleanser, as allergic dogs are prone to secondary ear infections.",
        "Trim the strong, dark nails whenever they begin clicking on hard floors to prevent splitting or splaying."
      ]
    },

    training: {
      difficulty:
        "Moderate to challenging for novice or permissive handlers. Intelligent, quick to learn, and blessed with a long memory, yet strong-willed, territorial, and physically powerful enough to require clear household hierarchy and early obedience training.",

      tips: [
        "Enrol in puppy kindergarten and obedience classes early while the puppy is still small enough to manage easily.",
        "Establish calm, fair, and consistent household boundaries from day one so the dog respects every human member of the family without ever resorting to rough handling or physical force.",
        "Teach loose-leash walking, impulse control at doorways, and polite guest greetings so the dog looks to its owner's lead when visitors arrive.",
        "Avoid repetitive ball-fetching drills—most Bullmastiffs will fetch a ball only two or three times before losing interest—and keep sessions purposeful and varied.",
        "Use a sturdy leash and enclose outdoor areas with secure physical fencing to prevent roaming and keep unfamiliar people or animals from wandering onto the dog's territory.",
        "Because Bullmastiffs can be selective or confrontational with other dogs of the same sex (particularly two adult males), households with an existing dog are generally advised to choose an opposite-sex puppy."
      ],

      socialization:
        "Begin structured, positive socialization early in puppyhood, introducing the young Bullmastiff to varied people, welcomed household guests, calm dogs, children, and everyday sights and sounds. Early socialization prevents natural guardian vigilance from turning into over-protectiveness, while adult supervision remains essential around young children because an exuberant puppy or turning adult can easily knock a child down."
    },

    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates with shade, ventilation, and comfortable indoor living",
        "Cool climates when housed indoors with its family",
        "Warm or humid climates only with strict heat precautions, air-conditioned indoor rest, constant fresh water, and walks limited to cool morning or evening hours"
      ],

      aloneTimeTolerance:
        "Low to moderate. Deeply attached to its family, the Bullmastiff wants to be in the heart of the home rather than isolated in a kennel or separate room, and leaving the dog alone for long periods can lead to boredom, loneliness, and destructive chewing."
    }
  },

  nutrition: {
    dietType:
      "Complete and balanced, high-quality large- or giant-breed dog food (or adult dog food during puppyhood as advised by breeders and veterinarians) matched to life stage, workload, and lean body condition.",

    feedingFrequency: {
      puppy:
        "Several smaller measured meals daily using a large-breed puppy or adult formula to ensure slow, steady skeletal growth without rapid weight gain.",
      adult:
        "Two to three measured meals daily (typically 2 to 3 cups of dry kibble twice a day, or roughly 40 to 60 pounds of food per month depending on size and calorie density) rather than a single large meal.",
      senior:
        "Two to three measured daily meals tailored to metabolism, mobility, kidney and dental health, and veterinary advice."
    },

    guidelines:
      "Feed measured portions to keep the dog lean—especially during rapid puppy growth when excess weight and over-supplementation stress developing bones and joints. Never add extra calcium or mineral supplements to a balanced ration unless prescribed by a veterinarian. To help reduce the risk of gastric dilatation-volvulus (GDV or bloat), divide the daily ration into two to three smaller meals (or 3 to 5 small meals in high-risk individuals), place food bowls at floor level rather than on elevated stands, use slow-feeder bowls or puzzle mats for rapid eaters, feed dogs separately in multi-dog homes to reduce mealtime stress, and restrict exercise for at least one hour before and after meals.",

    considerations: [
      "Keep puppies and adults lean to minimize mechanical strain on the hips, elbows, and cranial cruciate ligaments.",
      "Feed two to three smaller meals daily at floor level (avoiding elevated food bowls) and use a slow-feeder bowl if the dog gulps food.",
      "Restrict vigorous physical activity for at least one hour before and after eating, and avoid allowing the dog to gulp excessive quantities of water immediately after meals.",
      "Feed dogs separately in multi-dog households to minimize competitive stress at mealtime.",
      "Keep treats to no more than 10 percent of daily caloric intake, and consult a veterinarian before adding omega-3 fatty acids or joint supplements."
    ],

    note:
      "Exact portion sizes depend on individual frame size (ranging from 41 to 59+ kg), age, metabolism, and food formulation; confirm feeding amounts and bloat-prevention strategies with a veterinarian."
  },

  health: {
    overview:
      "The Bullmastiff has a typical life expectancy of 7 to 9 years (with some longevity estimates ranging from 8 to 10 years, or generally under 10 years) and requires proactive health screening and attentive veterinary care. Because Bullmastiffs are notoriously stoic with an unusually high pain threshold, owners must watch closely for subtle changes in gait, appetite, breathing, or behaviour. Pre-breeding health programs prioritize five core areas: hip dysplasia, elbow dysplasia, cardiac disease (particularly hereditary sub-aortic stenosis [SAS] and dilated cardiomyopathy [DCM]), ophthalmic disorders (entropion, autosomal dominant progressive retinal atrophy [ADPRA, caused by an RHO gene mutation], retinal dysplasia, and canine multifocal retinopathy 1 [CMR1, caused by a BEST1 mutation]), and autoimmune thyroiditis / hypothyroidism (which can manifest as early as 2 to 3 years of age). Cancer is a major concern in the breed—including lymphoma/lymphosarcoma (where a 2023 genomic study of 55 affected Bullmastiffs found an average diagnosis age under 6 years and identified risk loci on chromosomes 13 and 33), cutaneous mast cell tumours, hemangiosarcoma, osteosarcoma, and mammary tumours in intact females. Like other deep-chested large breeds, Bullmastiffs are also at risk for life-threatening gastric dilatation-volvulus (GDV / bloat), cranial cruciate ligament rupture, developmental puppy bone disorders (panosteitis, osteochondritis dissecans [OCD], and hypertrophic osteodystrophy [HOD]), cystinuria and chronic renal disease, and skin or ear allergies.",

    commonConditions: [
      "Hip dysplasia and elbow dysplasia — inherited developmental joint malformations causing osteoarthritic pain, lameness, and reduced mobility, targeted by mandatory pre-breeding radiographic evaluations.",
      "Cranial cruciate ligament (CCL) rupture and developmental puppy bone disorders — knee ligament tears are common in adult Bullmastiffs (with obesity as a major risk factor), while rapidly growing puppies (especially males between 5 and 18 months) can experience self-limiting panosteitis ('shifting leg lameness' of the long bones), osteochondritis dissecans (OCD of the shoulders, elbows, or hocks), or hypertrophic osteodystrophy (HOD).",
      "Cardiac disorders (sub-aortic stenosis [SAS], dilated cardiomyopathy [DCM], and valvular heart murmurs) — SAS is a hereditary narrowing of the left ventricular outflow tract that can cause exercise intolerance, syncope, or sudden death and requires veterinary cardiologist auscultation and Doppler echocardiography, while DCM weakens the heart muscle's pumping ability.",
      "Neoplasia (lymphoma / lymphosarcoma, mast cell tumours, hemangiosarcoma, osteosarcoma, and mammary tumours) — lymphoma has a notably high incidence and early onset in Bullmastiffs (average diagnosis age under 6 years in a 2023 genomic study identifying risk loci near MYC/PVT1 on CFA13 and SENP7/NFKBIZ on CFA33), and cutaneous mast cell tumours are very common, making immediate veterinary evaluation and biopsy of any lump or swollen lymph node essential.",
      "Ophthalmic disorders (entropion, autosomal dominant progressive retinal atrophy [ADPRA], retinal dysplasia, and canine multifocal retinopathy 1 [CMR1]) — entropion (inward-rolling eyelids rubbing the cornea) is common in wrinkled breeds; ADPRA is caused by a dominant RHO (rhodopsin) mutation (meaning there are no asymptomatic carriers and affected dogs develop night blindness progressing to total blindness); and CMR1 is caused by an autosomal recessive BEST1 (c.73C>T) stop mutation.",
      "Gastric dilatation-volvulus (GDV / bloat) — an acute, life-threatening surgical emergency (carrying a 20%–45% mortality rate even with treatment) in which the deep stomach distends with gas and twists 90° to 360° on its mesenteric axis, cutting off blood flow to the stomach and spleen and causing rapid shock.",
      "Hypothyroidism (primary autoimmune thyroiditis) — insufficient thyroid hormone production that can afflict Bullmastiffs as early as 2 to 3 years of age, causing lethargy, weight gain, cold intolerance, symmetrical truncal hair loss or 'rat tail', darkened or thickened facial skin ('tragic expression'), recurrent skin infections, or reproductive failure.",
      "Renal and urinary disorders (cystinuria, glomerulonephritis, renal amyloidosis, and juvenile renal dysplasia) — cystinuria is an inherited defect in renal cystine reabsorption (associated with SLC3A1 and SLC7A9 variants in bulldog/mastiff breeds) that causes cystine kidney, bladder, or urethral stones and dangerous urinary blockage in males.",
      "Allergies, interdigital cysts, and secondary otitis externa — immune-mediated reactions to food, fleas, or environmental allergens causing red, itchy paws and groin, interdigital cysts, facial-fold irritation, and recurrent ear infections."
    ],

    preventiveCare: [
      "Verify documented pre-breeding health clearances for both parents before acquiring a puppy, covering hip and elbow radiographs, veterinary cardiologist examination, board-certified ophthalmologist eye examination (and PRA/CMR1 DNA status where applicable), and thyroid testing.",
      "Remember that Bullmastiffs have an unusually high pain threshold and stoic nature; treat subtle changes in gait, posture, appetite, bowel/bladder habits, or demeanour as potential signs of pain or illness.",
      "Inspect all skin lumps, bumps, or enlarged lymph nodes promptly with a veterinarian (using fine-needle aspirate or biopsy) to catch mast cell tumours or lymphoma early.",
      "Manage bloat (GDV) risk by feeding 2 to 3+ smaller meals daily at floor level, using slow-feeder bowls, restricting exercise for an hour before and after meals, knowing the emergency signs (unproductive retching, distended abdomen, restlessness, pale gums), and discussing prophylactic gastropexy ('stomach tacking' during spay/neuter, which reduces volvulus recurrence from 70%–80% to 3%–5%) with your veterinarian.",
      "Keep puppies and adults lean, feed a slow-growth diet during puppyhood without added calcium supplements, and avoid high-impact jumping or forced running until well over 18 months of age to protect joints and cruciate ligaments.",
      "Schedule annual baseline blood chemistry and urinalysis beginning at 3 years of age (and nitroprusside urine screening in lines at risk for cystinuria) to detect occult kidney or urinary disease early, and keep facial folds and ears clean and dry."
    ],

    recommendedScreenings: [
      "Hip dysplasia radiographic evaluation (pre-breeding requirement).",
      "Elbow dysplasia radiographic evaluation (pre-breeding requirement).",
      "Cardiac evaluation by a qualified veterinarian—preferably a board-certified veterinary cardiologist using auscultation and Doppler echocardiography to screen for sub-aortic stenosis (SAS) and cardiomyopathy.",
      "Ophthalmic examination by a board-certified veterinary ophthalmologist, supplemented by DNA testing for autosomal dominant progressive retinal atrophy (ADPRA / RHO) and canine multifocal retinopathy 1 (CMR1 / BEST1).",
      "Thyroid hormone and autoantibody panel (screening for autoimmune thyroiditis / hypothyroidism).",
      "Annual baseline blood work (BUN, creatinine, phosphorus, potassium) and urinalysis from 3 years of age (plus urinary nitroprusside or genetic screening for cystinuria when indicated)."
    ],

    dentalCare:
      "Brush the teeth regularly with dog-safe toothpaste and schedule routine veterinary dental examinations. Conformation rules specify a broad under-jaw with large, wide-set canine teeth and strong, even incisors meeting in a level (pincer, edge-to-edge) bite, with a slightly undershot bite tolerated (note that dogs with sub-aortic stenosis require prophylactic antibiotics prior to dental procedures due to endocarditis risk).",

    earCare:
      "Inspect the high-set, V-shaped folded ears weekly for redness, foul odour, wax buildup, or discharge—particularly in dogs prone to food or environmental allergies—and clean only with a veterinarian-recommended ear cleanser without inserting cotton swabs deep into the canal.",

    skinCare:
      "Wipe the jowls daily after meals and drinks, and clean and thoroughly dry any facial or muzzle folds with a soft cloth so moisture, saliva, and bacteria do not cause skin-fold dermatitis. Check the short coat, groin, and paw webbing regularly for redness, interdigital cysts, parasites, or new skin masses."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: false,

    idealFor: [
      "Experienced, confident owners who can establish calm, consistent household boundaries for a 41- to 59+ kg guardian",
      "Families (particularly those with older children, or with closely supervised younger children) seeking a devoted, quiet indoor companion and natural home deterrent",
      "Homes with a securely fenced yard and ample indoor living space where the dog is included as part of the family",
      "Owners who enjoy brisk daily walks, obedience, tracking, or nose work rather than long-distance running",
      "Households comfortable with moderate drooling ('slobber cloths') and proactive veterinary care"
    ],

    notIdealFor: [
      "First-time, permissive, or physically frail handlers unable to control or command the respect of a strong-willed 100- to 130-pound dog",
      "Runners, joggers, or cyclists seeking a high-endurance distance-running partner, or owners living in hot climates without indoor air conditioning",
      "Apartment dwellers or small homes without a securely fenced yard",
      "Meticulously house-proud or fashion-conscious owners bothered by drool on clothing, walls, and furniture",
      "Multi-dog households intending to keep multiple adult Bullmastiffs of the same sex (especially intact males) without experience and separation capability",
      "Homes where the dog would be left isolated alone for long workdays or kept in an outdoor kennel"
    ]
  },

  funFacts: [
    "Known throughout Victorian and Edwardian Britain as 'The Gamekeeper's Night Dog', the Bullmastiff was bred around 1860 from a classic formula of 60 percent Mastiff and 40 percent Bulldog to track, overtake, and pin armed poachers at night without mauling them.",
    "At the first Gamekeepers' Dog Show in 1900 and other early exhibitions, Nottingham breeder William Burton offered one pound—a substantial sum at the time—to any sportsman who could escape his muzzled brindle Bullmastiff, Thorneywood Terror; no challenger ever succeeded.",
    "Gamekeepers favoured dark brindle coats because they blended into the forest at night, and keepers walking in the dark kept a hand on the dog's broad head so they could feel its forehead skin wrinkle in concentration the moment a poacher was detected ahead.",
    "Pioneer breeder S. E. Moseley of the Farcroft Kennels developed the multi-generation 'Moseley Recipe'—systematically crossing 50/50, 75/25, and 62.5/37.5 Mastiff-Bulldog litters—to fix a true-breeding 60% Mastiff / 40% Bulldog type, and his brindle female Ch. Farcroft Silvo became the breed's first champion in 1928 with a record 14 Challenge Certificates that stood for over 70 years.",
    "In 1934, two of the earliest Bullmastiffs in the United States were imported with leather muzzles by the Rockefeller family to patrol their vast Pocantico estate north of Manhattan.",
    "True to its guardian heritage, a Bullmastiff rarely cares to chase a ball repeatedly: as breed fanciers joke, it may fetch a thrown ball once or twice, and on the third throw expect you to go get it yourself."
  ],

  faq: [
    {
      question: "Why was the Bullmastiff called 'The Gamekeeper's Night Dog', and what breeds created it?",
      answer:
        "During the mid-nineteenth century (around 1860), British estate gamekeepers needed a fearless, agile dog to accompany them on nighttime patrols and apprehend armed poachers. Because the Old English Mastiff was too slow and the nineteenth-century Bulldog was too ferocious, breeders crossed the two in an approximate 60 percent Mastiff to 40 percent Bulldog ratio—creating a silent, fast, powerful dog that knocked poachers down and held them pinned without mauling them until the gamekeeper arrived."
    },
    {
      question: "How large does an adult Bullmastiff get?",
      answer:
        "Adult males stand 64 to 69 cm (25 to 27 inches, averaging about 26 inches) at the withers and weigh 50 to 59 kg (110 to 130 pounds, averaging about 120 pounds). Adult females stand 61 to 66 cm (24 to 26 inches) and weigh 41 to 50 kg (90 to 110 pounds in Britain and Europe, or 100 to 120 pounds / 45 to 54 kg in North America). Individual companion dogs occasionally fall outside these ranges, from 85-pound females to 170-pound males."
    },
    {
      question: "What is the typical lifespan of a Bullmastiff?",
      answer:
        "Typical life expectancy is 7 to 9 years (with some longevity estimates ranging from 8 to 10 years, and generally under 10 years). Individual longevity depends on genetics, lean body condition, and preventive healthcare."
    },
    {
      question: "What coat colours and markings are accepted in the Bullmastiff?",
      answer:
        "The short, hard coat comes in any pure, clear shade of brindle, fawn, or red. A black muzzle toning off toward the eyes with dark markings around the eyes is essential, and a very small white spot on the chest is permissible; any other white markings or coat colours are faulted."
    },
    {
      question: "Do Bullmastiffs drool or bark a lot?",
      answer:
        "Bullmastiffs are naturally quiet dogs that rarely bark without a good reason, having been bred to work silently at night. Although their upper lips should never hang below the lower jaw, they do drool and slobber more than many breeds—especially after drinking, around food, in warm weather, or when shaking their heads—so owners should keep drool cloths handy."
    },
    {
      question: "Is the Bullmastiff a good family dog, and how does it behave with other pets?",
      answer:
        "With its own family, a well-socialized Bullmastiff is docile, loving, and deeply loyal. However, because puppies and adults are heavy and strong, all interactions with children must be supervised by an adult so a child is not accidentally knocked over. While Bullmastiffs can live peacefully with other household pets when raised together, mature adults—especially intact males—can be intolerant of same-sex dogs, so breeders generally recommend pairing a Bullmastiff with a dog of the opposite sex."
    },
    {
      question: "How much exercise does a Bullmastiff need, and can it go jogging?",
      answer:
        "Bullmastiffs need moderate daily exercise, such as brisk leash walks and play in a securely fenced yard, along with mental outlets like obedience, tracking, or nose work. Because of their heavy bone and short muzzle, they are not built for long-distance running and are sensitive to heat and humidity. Growing puppies should begin with short, slow walks and avoid high-impact jumping or strenuous events until well over 18 months of age."
    },
    {
      question: "How much food does an adult Bullmastiff eat, and how can bloat (GDV) risk be reduced?",
      answer:
        "An adult Bullmastiff typically eats 2 to 3 cups of high-quality dry kibble twice a day (roughly 40 to 60 pounds of food per month), adjusted to maintain a lean body condition. Because deep-chested large breeds are vulnerable to life-threatening gastric dilatation-volvulus (GDV / bloat), owners should divide food into two to three smaller daily meals, feed from floor-level bowls rather than elevated stands, use a slow-feeder bowl for fast eaters, restrict exercise for an hour before and after meals, and discuss prophylactic gastropexy ('stomach tacking') with their veterinarian."
    },
    {
      question: "What health conditions and pre-breeding screenings should I ask a breeder about?",
      answer:
        "Prospective buyers should ask to see documented parent health clearances for hip dysplasia, elbow dysplasia, cardiac health (auscultation and Doppler echocardiogram screening for sub-aortic stenosis and cardiomyopathy), eye health (ophthalmologist examination and DNA testing for autosomal dominant progressive retinal atrophy [RHO] and canine multifocal retinopathy 1 [BEST1]), and thyroid function (autoimmune thyroiditis / hypothyroidism). Owners should also monitor closely for lymphoma, mast cell tumours (having any skin lump biopsied promptly), cruciate ligament injuries, cystinuria, and bloat."
    }
  ],

  references: [
    "fci-bullmastiff-official-standard",
    "fci-bullmastiff-nomenclature",
    "american-kennel-club-bullmastiff",
    "akc-bullmastiff-history",
    "royal-kennel-club-bullmastiff-standard",
    "royal-kennel-club-bullmastiff-profile",
    "american-bullmastiff-association-about-the-breed",
    "american-bullmastiff-association-getting-to-know",
    "american-bullmastiff-association-health-statement",
    "american-bullmastiff-association-common-health-conditions",
    "northern-bullmastiff-club-about-the-breed",
    "bullmastiff-lymphoma-gwas-mortlock-2023",
    "petmd-bullmastiff-health-and-care",
    "merck-veterinary-manual-gastric-dilatation-volvulus",
    "wikimedia-bullmastiff-desaix83",
    "wikimedia-bullmastiff-puppy-davidmiron"
  ],

  evidence: {
    scientificName: {
      reliability: "unverified",
      sources: [],
      verifiedOn: null,
      note:
        "Canis lupus familiaris is the domestic-dog taxonomic name used across this catalog; the Bullmastiff conformation standards do not state a separate scientific name."
    },

    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bullmastiff",
          role: "verified",
          locator: "History & Did You Know?: 'The Bullmastiff's nickname is \"The Gamekeeper's Night Dog\"'"
        },
        {
          id: "akc-bullmastiff-history",
          role: "verified",
          locator: "Why the Bullmastiff Was Developed: 'Nicknamed the Gamekeeper's Night Dog'"
        },
        {
          id: "northern-bullmastiff-club-about-the-breed",
          role: "verified",
          locator: "The Gamekeeper's Night Dog: 'known by the names of \"Bull and Mastiff dog\" \"Gamekeeper's Night Dog\" \"Bull-Mastiff\" and now \"Bullmastiff\"'"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "Populated from empty/unavailable: historical and traditional alternate names ('The Gamekeeper's Night Dog', 'Bull-Mastiff', 'Bull and Mastiff Dog') are verified across the AKC breed profile, AKC History feature, and The Northern Bullmastiff Club."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bullmastiff-official-standard",
          role: "verified",
          locator:
            "FCI-CLASSIFICATION: Group 2 Pinscher and Schnauzer, Molossoid breeds - Swiss Mountain and Cattle Dogs. Section 2.1 Molossoid breeds, Mastiff Type. Without working trial."
        },
        {
          id: "fci-bullmastiff-nomenclature",
          role: "verified",
          locator: "Group n°2, Section Molossian type, Subsection Mastiff type, Not subject to a working trial"
        },
        {
          id: "royal-kennel-club-bullmastiff-standard",
          role: "verified",
          locator: "Working Group"
        },
        {
          id: "american-kennel-club-bullmastiff",
          role: "cited",
          locator: "Working Group"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "Removed 'FCI Group 2:' from user-facing text to comply with Rule 5. Classified in FCI Group 2, Section 2.1 (Mastiff-type Molossoids, without working trial) and in the Working Group by both The Royal Kennel Club and the AKC."
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bullmastiff-official-standard",
          role: "verified",
          locator: "ORIGIN: Great Britain"
        },
        {
          id: "fci-bullmastiff-nomenclature",
          role: "verified",
          locator: "Country of origin of the breed: GREAT BRITAIN"
        }
      ],
      verifiedOn: "2026-10-22",
      note: "FCI Standard No. 157 and FCI Nomenclature No. 157 list Great Britain as the official country of origin."
    },

    "origin.region": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-bullmastiff-profile",
          role: "verified",
          locator: "About this breed: 'This old English breed was developed as a guard dog in the 19th century to assist gamekeepers'"
        },
        {
          id: "american-bullmastiff-association-about-the-breed",
          role: "verified",
          locator: "History of the Breed & AKC Breed Standard: 'developed in England by gamekeepers for protection against poachers'"
        },
        {
          id: "akc-bullmastiff-history",
          role: "verified",
          locator: "The Dog No One Could Outrun: William Burton of the famous Thorneywood Kennels in Nottingham, England"
        },
        {
          id: "northern-bullmastiff-club-about-the-breed",
          role: "verified",
          locator: "The Moseley Recipe: Mr. S. Moseley of the Farcroft kennels"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "Verified across RKC, ABA, AKC History (Thorneywood Kennels in Nottingham), and The Northern Bullmastiff Club (Farcroft Kennels)."
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bullmastiff-official-standard",
          role: "verified",
          locator: "Utilization, Brief Historical Summary, General Appearance, Behaviour/Temperament"
        },
        {
          id: "fci-bullmastiff-nomenclature",
          role: "verified",
          locator: "Definitive acceptance 1955-04-23; Official valid standard 2026-09-08"
        },
        {
          id: "royal-kennel-club-bullmastiff-standard",
          role: "verified",
          locator: "General appearance, Characteristics, Temperament"
        },
        {
          id: "royal-kennel-club-bullmastiff-profile",
          role: "verified",
          locator: "About this breed (19th-century gamekeeper history, brindle nighttime camouflage)"
        },
        {
          id: "american-bullmastiff-association-about-the-breed",
          role: "verified",
          locator: "About the Breed, History of the Breed (1860 England, 60% Mastiff / 40% Bulldog, 1924 UK recognition, Oct 1933/1934 AKC recognition), & AKC Breed Standard"
        },
        {
          id: "akc-bullmastiff-history",
          role: "verified",
          locator: "William Burton's Thorneywood Terror 1-pound wager, forehead wrinkling signal on night patrol, and 1934 Rockefeller import to Pocantico"
        },
        {
          id: "northern-bullmastiff-club-about-the-breed",
          role: "verified",
          locator: "1900 Gamekeepers' Dog Show, S. E. Moseley's Farcroft Kennels and 'Moseley Recipe', 1924 UK recognition, 1928 Ch. Farcroft Silvo and Ch. Tiger Prince, and therapy-dog participation"
        },
        {
          id: "american-kennel-club-bullmastiff",
          role: "verified",
          locator: "About the Breed & Training (agility, obedience, rally, scent work, tracking)"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "Upgraded from reliable_source to official_standard: synthesizes FCI Standard No. 157, FCI Nomenclature No. 157, RKC Standard and Profile, ABA About the Breed, AKC Profile and History, and The Northern Bullmastiff Club in original wording."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bullmastiff-official-standard",
          role: "verified",
          locator:
            "General Appearance, Head (square skull, fair wrinkle when interested, 1:3 muzzle-to-head ratio, non-pendulous flews, level/pincer desired or slightly undershot bite), Eyes (dark or hazel, furrow between), Ears (V-shaped, folded forward, level with occiput), Neck (almost equal to skull circumference), Body, Tail (reaching hocks, crank tail undesirable), Limbs (cat-like feet, dark nails), Gait, Coat, Colour (brindle, fawn, or red; slight white chest mark permissible; black muzzle essential), Size and Weight (males 64–69 cm / 50–59 kg; females 61–66 cm / 41–50 kg)"
        },
        {
          id: "royal-kennel-club-bullmastiff-standard",
          role: "verified",
          locator:
            "Head and skull, Eyes, Ears, Mouth, Neck, Forequarters, Body, Hindquarters, Feet, Tail, Gait/movement, Coat, Colour, Size (dogs 64–69 cm [25–27 in] / 50–59 kg [110–130 lbs]; bitches 61–66 cm [24–26 in] / 41–50 kg [90–110 lbs])"
        },
        {
          id: "american-bullmastiff-association-about-the-breed",
          role: "verified",
          locator:
            "Colors (fawn, red, brindle) & Official AKC Standard (approved Feb 8, 1992; Dogs 25–27 in / 110–130 lbs, Bitches 24–26 in / 100–120 lbs; nearly square proportion; 1:3 muzzle-to-head ratio)"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "Height, weight, coat type, accepted colours, and anatomical features follow FCI Standard No. 157, the Royal Kennel Club Standard, and the AKC/ABA Standard."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bullmastiff-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT - Height at the withers: Males: 64 - 69 cm; Females: 61 - 66 cm"
        },
        {
          id: "royal-kennel-club-bullmastiff-standard",
          role: "verified",
          locator: "Size: Height at shoulder: dogs: 64-69 cms (25-27 ins); bitches 61-66 cm (24-26 ins)"
        },
        {
          id: "american-bullmastiff-association-about-the-breed",
          role: "verified",
          locator: "Height: Male: 25–27 inches (64–68 cm), Female: 24–26 inches (61–66 cm)"
        },
        {
          id: "american-kennel-club-bullmastiff",
          role: "verified",
          locator: "Height: 25-27 inches (male), 24-26 inches (female); Did You Know?: average adult male 26 inches"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "Height ranges (males 64–69 cm / 25–27 in, females 61–66 cm / 24–26 in) are consistent across FCI Standard No. 157, the Royal Kennel Club Standard, and the AKC/ABA Standard."
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bullmastiff-official-standard",
          role: "verified",
          locator: "SIZE AND WEIGHT - Weight: Males: 50 - 59 kg; Females: 41 - 50 kg"
        },
        {
          id: "royal-kennel-club-bullmastiff-standard",
          role: "verified",
          locator: "Size - Weight: dogs: 50-59 kgs (110-130 lbs); bitches: 41-50 kgs (90-110 lbs)"
        },
        {
          id: "american-bullmastiff-association-getting-to-know",
          role: "verified",
          locator: "FAQ 2 How BIG do they get?: 'Weights are between 110-130# for a male and 90-110# for a female. However, there are many Bullmastiffs that fall either under the standard or over the standard (85# to 170#+).'"
        },
        {
          id: "american-kennel-club-bullmastiff",
          role: "conflicting",
          locator: "Weight: 110-130 pounds (male), 100-120 pounds (female)"
        },
        {
          id: "american-bullmastiff-association-about-the-breed",
          role: "conflicting",
          locator: "AKC Breed Standard: Dogs 110 to 130 pounds; Bitches 100 to 120 pounds (45–54 kg)"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "The stored ranges (males 50–59 kg / 110–130 lbs, females 41–50 kg / 90–110 lbs) follow FCI Standard No. 157 and the Royal Kennel Club Standard (and match the ABA Getting to Know FAQ), while the AKC standard's 100–120 lb (45–54 kg) female weight range is documented in distinctiveFeatures and FAQ."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bullmastiff",
          role: "verified",
          locator: "Average sizes and life expectancy: 7–9 years"
        },
        {
          id: "petmd-bullmastiff-health-and-care",
          role: "verified",
          locator: "Bullmastiff Health Issues: 'The typical Bullmastiff lifespan is 7–9 years'"
        },
        {
          id: "american-bullmastiff-association-about-the-breed",
          role: "conflicting",
          locator: "Life Span: 8-10 years"
        },
        {
          id: "royal-kennel-club-bullmastiff-profile",
          role: "cited",
          locator: "Breed characteristics - Lifespan: Under 10 years"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "AKC and PetMD report 7–9 years as the typical lifespan, while the American Bullmastiff Association lists 8–10 years and The Royal Kennel Club lists 'Under 10 years'; all are noted in the FAQ."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bullmastiff",
          role: "verified",
          locator: "Grooming: 'Seasonal shedding is to be expected... Frequent grooming ensures that shedding can be managed'"
        },
        {
          id: "royal-kennel-club-bullmastiff-profile",
          role: "verified",
          locator: "Breed characteristics: Coat length Short, Sheds Yes, Grooming Once a week"
        },
        {
          id: "petmd-bullmastiff-health-and-care",
          role: "verified",
          locator: "Bullmastiff Grooming Guide: 'Bullmastiffs have short, coarse fur that sheds seasonally.'"
        }
      ],
      verifiedOn: "2026-10-22",
      note: "Verified across AKC, The Royal Kennel Club, and PetMD."
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "petmd-bullmastiff-health-and-care",
          role: "verified",
          locator: "Bullmastiff Grooming Guide: 'because of their moderately drooly jowls, you might find yourself wiping drool from your floor and furniture as part of your cleaning routine.' & Skin Care: 'Their jowls may need a daily wipe-down to remove excess drool'"
        },
        {
          id: "american-bullmastiff-association-getting-to-know",
          role: "verified",
          locator: "Common Questions 1. Do they drool?: 'All dogs drool, but sometimes Bullmastiffs may drool more often than other breeds.'"
        },
        {
          id: "northern-bullmastiff-club-about-the-breed",
          role: "verified",
          locator: "Slobber & Drool: 'Due to them being a \"soft mouthed\" breed they can and do produce slobber - some dogs more than others... especially after a drink or when food is around.'"
        },
        {
          id: "fci-bullmastiff-official-standard",
          role: "cited",
          locator: "HEAD - Lips: 'Flews not pendulous, never hanging below level of lower jaw.'"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "Populated from null/unavailable: directly verified from PetMD ('moderately drooly jowls'), the American Bullmastiff Association, and The Northern Bullmastiff Club, alongside FCI Standard No. 157's anatomical requirement that the flews never hang below the lower jaw."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bullmastiff-official-standard",
          role: "verified",
          locator: "Brief Historical Summary & Behaviour/Temperament: 'Powerful; enduring, active and reliable. High-spirited, alert and faithful.'"
        },
        {
          id: "royal-kennel-club-bullmastiff-standard",
          role: "verified",
          locator: "Characteristics and Temperament"
        },
        {
          id: "american-bullmastiff-association-about-the-breed",
          role: "verified",
          locator: "Temperament ('fearless and confident, yet docile'), FAQ: Getting To Know The Bullmastiff (possessive, territorial, loyal, strong-willed, opposite-sex dog recommendation)"
        },
        {
          id: "american-bullmastiff-association-common-health-conditions",
          role: "verified",
          locator: "Health & Research Introduction & Pain and Cancer: 'Bullmastiffs have an unusually high tolerance for pain and often do not \"complain\"'"
        },
        {
          id: "northern-bullmastiff-club-about-the-breed",
          role: "verified",
          locator: "People, Dogs & Other Animals (same-sex intolerance at maturity) & High Spirited & Alert"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "Verified across FCI Standard No. 157, the Royal Kennel Club Standard, the American Bullmastiff Association, and The Northern Bullmastiff Club."
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-bullmastiff",
          role: "cited",
          locator: "Breed traits, temperament, exercise, and training"
        },
        {
          id: "royal-kennel-club-bullmastiff-profile",
          role: "cited",
          locator: "Breed characteristics and historical guarding role"
        },
        {
          id: "american-bullmastiff-association-about-the-breed",
          role: "cited",
          locator: "Getting to Know the Bullmastiff"
        }
      ],
      verifiedOn: null,
      note:
        "The 1–5 values are editorial estimates for app comparison informed by AKC, RKC, and ABA temperament descriptions."
    },

    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bullmastiff",
          role: "verified",
          locator: "Exercise ('moderate exercise should be encouraged. Brisk walks and outdoor play are favorites... secure fencing is a must... Puppies should not be overexercised... not the ideal breed for people who want a canine running partner, but they are great walking companions') & Training (agility, obedience, rally, scent work, tracking)"
        },
        {
          id: "american-bullmastiff-association-getting-to-know",
          role: "verified",
          locator: "Common Questions 9. How much exercise do they need?: 'This breed requires moderate exercise. As a pup, start with very slow short walks... Do not attempt any high impact events until the dog is well over 18 months of age.'"
        },
        {
          id: "petmd-bullmastiff-health-and-care",
          role: "verified",
          locator: "Caring for a Bullmastiff & Fun Activities (Agility, Nose work, Rally, Obedience, Tracking, Hiking, Walking)"
        },
        {
          id: "royal-kennel-club-bullmastiff-profile",
          role: "conflicting",
          locator: "Breed characteristics: Exercise listed as 'More than 2 hours per day'"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "AKC, ABA, and PetMD consistently recommend moderate daily exercise (brisk walks and fenced-yard play, avoiding distance running and high-impact exercise under 18 months), whereas the Royal Kennel Club summary table lists 'More than 2 hours per day'."
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No single numerical daily minute target is established because AKC and ABA advise moderate daily walks while the Royal Kennel Club profile lists over two hours per day."
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bullmastiff",
          role: "verified",
          locator: "Grooming: seasonal shedding, frequent brushing, bathing as needed, monitoring skin/coat dryness or oiliness related to diet or allergies"
        },
        {
          id: "royal-kennel-club-bullmastiff-profile",
          role: "verified",
          locator: "Breed characteristics (Short coat, Grooming Once a week) & Skin problems (facial folds moisture/bacteria/yeast)"
        },
        {
          id: "petmd-bullmastiff-health-and-care",
          role: "verified",
          locator: "Bullmastiff Grooming Guide: daily jowl wipe-down, skin care, eye care, allergy-related ear care, and frequent nail trims when nails click on the floor"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "Verified across AKC Grooming, the Royal Kennel Club Profile, and PetMD."
    },

    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bullmastiff",
          role: "verified",
          locator: "Training (early training and socialization, strong-willed, puppy classes, secure fencing)"
        },
        {
          id: "american-bullmastiff-association-about-the-breed",
          role: "verified",
          locator: "FAQ: Getting To Know The Bullmastiff (clear household hierarchy, obedience school, opposite-sex dog recommendation, supervision around small children)"
        },
        {
          id: "northern-bullmastiff-club-about-the-breed",
          role: "verified",
          locator: "Handling & Training, People, Dogs & Other Animals, & At Home, Children & Play (won't chase a ball for hours; supervise children)"
        },
        {
          id: "petmd-bullmastiff-health-and-care",
          role: "verified",
          locator: "Behavior and Training Tips (positive reinforcement, early socialization)"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "Verified across AKC, ABA, The Northern Bullmastiff Club, and PetMD."
    },

    "care.livingEnvironment": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-bullmastiff-profile",
          role: "verified",
          locator: "Breed characteristics (Size of home: Large house; Size of garden: Large garden) & Health issues in flat-faced dogs"
        },
        {
          id: "american-kennel-club-bullmastiff",
          role: "verified",
          locator: "Exercise: 'secure fencing is a must for outdoor areas'"
        },
        {
          id: "petmd-bullmastiff-health-and-care",
          role: "verified",
          locator: "Considerations for Pet Parents: 'A fenced-in backyard is important for allowing this breed an area to run around in. Bullmastiffs might not do well in an apartment or small house.'"
        },
        {
          id: "northern-bullmastiff-club-about-the-breed",
          role: "verified",
          locator: "At Home, Children & Play: 'The Bullmastiff prefers to be in the heart of the home rather than sitting on his own in a kennel or in another room, they are not content in being left alone for long periods of time, boredom and loneliness can become a problem and are a major cause of chewing'"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "Upgraded from estimate to reliable_source, and populated care.livingEnvironment.aloneTimeTolerance from null: directly verified across The Royal Kennel Club, AKC, PetMD, and The Northern Bullmastiff Club."
    },

    nutrition: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-bullmastiff",
          role: "verified",
          locator: "Nutrition: 'Most Bullmastiff breeders advise feeding adult dog food or large-breed puppy food for puppies in order to ensure slow and steady growth. Several small meals are best for puppies, and two meals daily is a good routine for adults... exercise is discouraged immediately before and after eating. Bullmastiffs should be kept lean'"
        },
        {
          id: "american-bullmastiff-association-getting-to-know",
          role: "verified",
          locator: "Common Questions 3. How much food do they eat?: 'An adult Bullmastiff usually eats between 2-3 cups of dry kibble twice a day. This averages out to 40-60# of dog food per month... do not let your Bullmastiff become overweight.'"
        },
        {
          id: "petmd-bullmastiff-health-and-care",
          role: "verified",
          locator: "What To Feed a Bullmastiff & How To Feed a Bullmastiff (90% dog food / ≤10% treats; 2–3 meals/day; food bowl on the floor rather than elevated; feed separately in multi-dog homes; avoid exercise 1 hour before to 1 hour after a meal; slow-feeder bowl)"
        },
        {
          id: "american-bullmastiff-association-common-health-conditions",
          role: "verified",
          locator: "Bloat - Prevention (small frequent meals, reduce speed of eating, avoid large water intake immediately after eating)"
        },
        {
          id: "merck-veterinary-manual-gastric-dilatation-volvulus",
          role: "verified",
          locator: "Recommendations for owners of high-risk breeds (multiple small meals, exercise restriction around meals, decreasing stress at mealtime, avoiding elevated feed bowls)"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "Upgraded from general_guidance to reliable_source: directly verified across AKC Nutrition, the American Bullmastiff Association, PetMD, and the Merck Veterinary Manual."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-bullmastiff-association-common-health-conditions",
          role: "verified",
          locator: "Introduction (high tolerance for pain), Allergies, Bloat (GDV), Cancer (lymphoma, mast cell tumors, hemangiosarcoma, osteosarcoma, mammary tumors), Cardiac (SAS, cardiomyopathy, murmurs), Eyes (entropion, dominant PRA, retinal dysplasia), Hypothyroidism (onset 2–3 yrs), Kidney/Urinary (chronic kidney failure, cystinuria, glomerulonephritis, amyloidosis, juvenile renal dysplasia), Orthopedics (hip/elbow dysplasia, cruciate ligament rupture, HOD, OCD, panosteitis)"
        },
        {
          id: "american-kennel-club-bullmastiff",
          role: "verified",
          locator: "Health and Recommended Health Tests (Hip, Elbow, Cardiac, Ophthalmologist, Thyroid)"
        },
        {
          id: "royal-kennel-club-bullmastiff-profile",
          role: "verified",
          locator: "Lifespan (Under 10 years), Pre-breeding health screening (BVA/KC Elbow, Eye, and Hip schemes), Breed Watch Category 2"
        },
        {
          id: "bullmastiff-lymphoma-gwas-mortlock-2023",
          role: "verified",
          locator: "Mortlock et al. (Vet Sci 2023;10(12):703, PMID 38133254): average age of lymphoma diagnosis <6 years in 55 cases; GWAS risk regions on CFA13 (MYC/PVT1) and CFA33 (SENP7/NFKBIZ)"
        },
        {
          id: "petmd-bullmastiff-health-and-care",
          role: "verified",
          locator: "7–9 yr lifespan, DCM, SAS, entropion, PRA, hip/elbow dysplasia, lymphoma, bloat/GDV and prophylactic gastropexy"
        },
        {
          id: "merck-veterinary-manual-gastric-dilatation-volvulus",
          role: "verified",
          locator: "GDV mortality rate (20%–45%), clinical signs, and prophylactic gastropexy"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "Stratifies pre-breeding screening priorities, molecularly characterized ocular mutations (RHO autosomal dominant PRA and BEST1 recessive CMR1), 2023 genomic lymphoma research (Mortlock et al., 2023), developmental vs. adult orthopedic disorders, cardiac conditions (SAS and DCM), hypothyroidism, renal/cystinuria risks, and GDV emergency management."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-bullmastiff-association-common-health-conditions",
          role: "verified",
          locator: "Allergies, Bloat, Cancer, Cardiac, Eyes, Hypothyroidism, Kidney and Urinary (Cystinuria), Orthopedics/Joint Disease (Hip/Elbow dysplasia, Cruciate ligament, HOD, OCD, Panosteitis)"
        },
        {
          id: "american-kennel-club-bullmastiff",
          role: "verified",
          locator: "Health: cardiac issues, hip and elbow dysplasia, hypothyroidism, eye problems, cancer, bloat"
        },
        {
          id: "bullmastiff-lymphoma-gwas-mortlock-2023",
          role: "verified",
          locator: "High incidence of lymphoma in Bullmastiffs (<6 yr average diagnosis age; CFA13 and CFA33 loci)"
        },
        {
          id: "petmd-bullmastiff-health-and-care",
          role: "verified",
          locator: "DCM, Entropion, SAS, PRA, Hip Dysplasia, Elbow Dysplasia, Lymphoma, Bloat/GDV"
        },
        {
          id: "merck-veterinary-manual-gastric-dilatation-volvulus",
          role: "verified",
          locator: "GDV pathophysiology and 20%–45% mortality rate"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "Expanded and stratified using the American Bullmastiff Association Common Diseases & Conditions guide, AKC, Mortlock et al. (2023), PetMD, and the Merck Veterinary Manual."
    },

    "health.preventiveCare": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-bullmastiff-association-common-health-conditions",
          role: "verified",
          locator: "Introduction (high pain tolerance), Bloat (gastropexy reduces recurrence from 70%–80% to 3%–5%), Cancer (immediate excision/biopsy of skin lumps), Kidney Disease (annual baseline blood work and urinalysis starting at age 3), Cystinuria (nitroprusside test)"
        },
        {
          id: "american-bullmastiff-association-health-statement",
          role: "verified",
          locator: "Recommended pre-breeding screening: hips, elbows, thyroid, eyes, and heart"
        },
        {
          id: "petmd-bullmastiff-health-and-care",
          role: "verified",
          locator: "Prophylactic gastropexy, floor-level feeding, slow-feeder bowls, 1-hour rest before/after meals"
        },
        {
          id: "merck-veterinary-manual-gastric-dilatation-volvulus",
          role: "verified",
          locator: "GDV warning signs and prophylactic gastropexy"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "Upgraded from general_guidance to reliable_source: directly verified from the American Bullmastiff Association, PetMD, and the Merck Veterinary Manual."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-bullmastiff-association-health-statement",
          role: "verified",
          locator: "Recommended pre-breeding screening: hips, elbows, thyroid, eyes, and heart"
        },
        {
          id: "american-kennel-club-bullmastiff",
          role: "verified",
          locator: "Recommended Health Tests From the National Breed Club: Hip Evaluation, Elbow Evaluation, Cardiac Exam, Ophthalmologist Evaluation, Thyroid Evaluation"
        },
        {
          id: "royal-kennel-club-bullmastiff-profile",
          role: "verified",
          locator: "Pre-breeding Good Practice schemes: elbow, eye, and hip testing"
        },
        {
          id: "american-bullmastiff-association-common-health-conditions",
          role: "verified",
          locator: "Cardiac (cardiologist auscultation and Doppler echocardiogram for SAS), Eyes (ophthalmologist exam and dominant PRA DNA test), Kidney Disease (annual blood work and urinalysis from age 3)"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "Verified across the ABA Health Statement, AKC Recommended Health Tests, RKC Good Practice schemes, and ABA Common Diseases & Conditions."
    },

    "health.dentalCare": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bullmastiff-official-standard",
          role: "verified",
          locator: "FACIAL REGION - Jaws / Teeth: 'Under-jaw broad to end. Level (Pincer bite, edge to edge) desired but slightly undershot tolerated. Canine teeth large and set wide apart, other teeth strong, even and well placed.'"
        },
        {
          id: "royal-kennel-club-bullmastiff-standard",
          role: "verified",
          locator: "Mouth: 'Level desired but slightly undershot tolerated. Canine teeth large and set wide apart, other teeth strong, even and well placed.'"
        },
        {
          id: "american-bullmastiff-association-common-health-conditions",
          role: "verified",
          locator: "Sub Aortic Stenosis: 'Where there is some degree of SAS known to be present, a prophylactic course of antibiotics is recommended prior to any surgery or dental work because there is a heightened risk of endocarditis'"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "Upgraded from general_guidance to official_standard: combines FCI Standard No. 157 and RKC bite/dentition specifications with the ABA's breed-specific SAS dental endocarditis precaution."
    },

    "health.earCare": {
      reliability: "reliable_source",
      sources: [
        {
          id: "petmd-bullmastiff-health-and-care",
          role: "verified",
          locator: "Ear Care: 'Bullmastiffs can develop allergies, which can make them prone to ear infections... Ask your vet about how often you need to clean your dog's ears with an ear cleaner'"
        },
        {
          id: "american-bullmastiff-association-common-health-conditions",
          role: "verified",
          locator: "Allergies: 'reddened ears with a foul-smelling discharge'"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "Upgraded from general_guidance to reliable_source: directly verified from PetMD Ear Care and the ABA Allergies section."
    },

    "health.skinCare": {
      reliability: "reliable_source",
      sources: [
        {
          id: "petmd-bullmastiff-health-and-care",
          role: "verified",
          locator: "Skin Care: 'Their jowls may need a daily wipe-down to remove excess drool or bits of dog food.'"
        },
        {
          id: "royal-kennel-club-bullmastiff-profile",
          role: "verified",
          locator: "Skin problems: facial folds warm/moist environment for bacteria and yeast"
        },
        {
          id: "american-kennel-club-bullmastiff",
          role: "verified",
          locator: "Grooming: 'The skin and coat should be monitored in order to ensure that dryness or oiliness are not issues. These can be related to diet, and sometimes to allergies.'"
        },
        {
          id: "american-bullmastiff-association-common-health-conditions",
          role: "verified",
          locator: "Allergies, Hypothyroidism (inter-digital cysts), & Mast Cell Tumors (prompt check of any skin lumps)"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "Upgraded from general_guidance to reliable_source: directly verified across PetMD, RKC, AKC Grooming, and the ABA."
    },

    suitability: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-bullmastiff-association-about-the-breed",
          role: "verified",
          locator: "FAQ: Getting To Know The Bullmastiff ('THE BULLMASTIFF IS NOT THE BREED FOR EVERYONE', household hierarchy, opposite-sex multi-dog advice, supervision around small children)"
        },
        {
          id: "american-kennel-club-bullmastiff",
          role: "verified",
          locator: "About the Breed, Exercise (walking companion, not running partner; secure fencing), and Training"
        },
        {
          id: "royal-kennel-club-bullmastiff-profile",
          role: "verified",
          locator: "Breed characteristics: Large house, Large garden"
        },
        {
          id: "northern-bullmastiff-club-about-the-breed",
          role: "verified",
          locator: "At Home, Children & Play (heart of the home, not left alone for long periods) & Slobber & Drool (not for meticulously house-proud owners)"
        },
        {
          id: "petmd-bullmastiff-health-and-care",
          role: "verified",
          locator: "Considerations for Pet Parents (best suited for experienced pet parents, older children, fenced backyard, might not do well in an apartment)"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "Upgraded from estimate to reliable_source: suitability flags and lists are directly grounded in the ABA, AKC, RKC, Northern Bullmastiff Club, and PetMD."
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal senior-owner suitability boolean is assigned because suitability depends on an individual owner's physical strength and support in handling a 41–59+ kg guardian."
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bullmastiff-official-standard",
          role: "verified",
          locator: "Brief Historical Summary (Old English Mastiff and Bulldog ancestry, helping gamekeepers apprehend poachers)"
        },
        {
          id: "american-bullmastiff-association-about-the-breed",
          role: "verified",
          locator: "History of the Breed (1860 England, 60% Mastiff / 40% Bulldog)"
        },
        {
          id: "akc-bullmastiff-history",
          role: "verified",
          locator: "William Burton's Thorneywood Terror undefeated 1-pound wager, forehead wrinkling signal on night patrols, and 1934 Rockefeller import to Pocantico"
        },
        {
          id: "northern-bullmastiff-club-about-the-breed",
          role: "verified",
          locator: "1900 Gamekeepers' Dog Show, S. E. Moseley's 'Moseley Recipe', 1928 Ch. Farcroft Silvo (14 CCs record for over 70 years), and ball-fetching humour"
        },
        {
          id: "royal-kennel-club-bullmastiff-profile",
          role: "verified",
          locator: "About this breed (brindle camouflage at night)"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "Removed 'FCI', 'AKC', and 'breed standard' from funFacts[3] and funFacts[4] to comply with Rule 5, and upgraded to official_standard."
    },

    faq: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-bullmastiff-official-standard",
          role: "verified",
          locator: "Origin, Brief Historical Summary, Coat, Colour, Size and Weight (males 64–69 cm / 50–59 kg; females 61–66 cm / 41–50 kg)"
        },
        {
          id: "royal-kennel-club-bullmastiff-standard",
          role: "verified",
          locator: "Size (25–27 in / 110–130 lbs; 24–26 in / 90–110 lbs) & Colour"
        },
        {
          id: "american-kennel-club-bullmastiff",
          role: "verified",
          locator: "Height, Weight (110–130 lbs / 100–120 lbs), Life Expectancy (7–9 yrs), Exercise, Nutrition, Recommended Health Tests"
        },
        {
          id: "american-bullmastiff-association-about-the-breed",
          role: "verified",
          locator: "1860 history, 60/40 formula, 8–10 yr lifespan, opposite-sex multi-dog recommendation"
        },
        {
          id: "american-bullmastiff-association-getting-to-know",
          role: "verified",
          locator: "Drooling, 85–170+ lb companion outliers, 2–3 cups twice daily (40–60 lbs/month), no high-impact events under 18 months"
        },
        {
          id: "american-bullmastiff-association-common-health-conditions",
          role: "verified",
          locator: "Bloat/GDV, SAS, DCM, lymphoma, mast cell tumors, dominant PRA, hypothyroidism, cystinuria, cruciate ligament"
        },
        {
          id: "petmd-bullmastiff-health-and-care",
          role: "verified",
          locator: "7–9 yr lifespan, floor-level feeding, slow-feeder bowls, prophylactic gastropexy"
        },
        {
          id: "merck-veterinary-manual-gastric-dilatation-volvulus",
          role: "verified",
          locator: "GDV signs and prevention"
        }
      ],
      verifiedOn: "2026-10-22",
      note:
        "Removed 'The FCI standard gives...', 'breed-standard ranges', and 'by the breed club' from FAQ answers to comply with Rule 5, and upgraded to official_standard."
    }
  },

  updatedOn: "2026-10-22"
};
