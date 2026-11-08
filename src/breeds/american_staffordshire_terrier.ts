import type { Breed } from "../schema/breed.types";

export const american_staffordshire_terrier: Breed = {
  slug: "american-staffordshire-terrier",
  name: "American Staffordshire Terrier",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "AmStaff",
    "American Staffy",
    "Amstaff",
    "Staffordshire Terrier",
    "Yankee Terrier"
  ],

  group:
    "Terriers; Section 3 — Bull type Terriers (without working trial; also classified in the Terrier group)",

  origin: {
    country: "United States",
    region:
      "United States (developed from nineteenth-century crossbreeds between bulldogs and terriers originating in the British Isles, refined across the American Northeast and Midwest)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/American_Staffordshire_Terrier.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:American_Staffordshire_Terrier.jpg",
      title: "American Staffordshire Terrier.jpg",
      description: "An adult American Staffordshire Terrier standing outdoors.",
      creator: "Daniel Oines",
      uploader: "Flickr upload bot",
      capturedOn: "2011-05-28",
      uploadedOn: "2011-05-29",
      width: 2592,
      height: 1936,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Daniel Oines, Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:American_Staffordshire_Terrier.jpg. License: https://creativecommons.org/licenses/by/2.0/.",
      restrictions: null,
      metadataCheckedOn: "2026-10-24"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/American_Staffordshire_Terrier_racer.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:American_Staffordshire_Terrier_racer.jpg",
      title: "American Staffordshire Terrier racer.jpg",
      description: "American Staffordshire Terrier at the National Dog Show in Rybnik, Poland.",
      creator: "Pleple2000",
      uploader: "Pleple2000",
      capturedOn: "2008-10-05",
      uploadedOn: "2008-10-18",
      width: 2400,
      height: 1795,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Pleple2000, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:American_Staffordshire_Terrier_racer.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-10-24"
    }
  ],

  overview: {
    summary:
      "A powerfully built, athletic medium-sized terrier combining substantial muscular strength with grace, agility, and a deeply affectionate, loyal devotion to its human household.",

    description:
      "The American Staffordshire Terrier is a remarkably muscular, compact, and agile medium-sized dog that exudes strength and confidence without appearing clunky or leggy. The body is solidly constructed with a broad, deep skull, pronounced cheek musculature, distinct stop, and strong, punishing jaws meeting in a precise scissor bite. Covered in a short, glossy, and close-lying single coat that appears in virtually all colors and patterns, the breed conveys substantial power in a balanced physical frame. Indoors, the dog is famously gentle, sensitive to human emotional tone, and devoted to family members, while outdoors it possesses tremendous athletic drive, tenacity, and stamina, thriving under structured guidance, consistent boundaries, and engaging physical work.",

    history:
      "The breed traces its roots to nineteenth-century crossbreeding between old-style bulldogs and game terriers in England, which combined the strength and bite power of the bulldog with the agility, speed, and fire of the terrier. Immigrants brought these versatile crossbred dogs to the United States before and after the American Civil War, where frontier farmers, homesteaders, and ranchers selected for a taller, heavier, and more all-around farm guardian capable of catching livestock, dispatching wild vermin, and protecting the family. In 1936, the breed was officially recognized under the initial name Staffordshire Terrier, with prominent breeder Wilfred T. Brandon serving as the first specialty club president. In 1972, the official name was formally amended to the American Staffordshire Terrier to clearly distinguish it from its smaller British relative, the Staffordshire Bull Terrier. Over subsequent decades, the breed developed a distinct, heavier-boned conformation and steady, family-oriented disposition.",

    originalPurpose:
      "All-around farm dog, homestead protector, livestock catcher, wild vermin hunter, and robust companion.",

    currentRoles: [
      "Devoted household companion and family guardian",
      "Canine athlete in weight pull, agility, rally, and obedience",
      "Search, tracking, and scent-work participant",
      "Therapy and emotional support visiting dog when individually assessed and certified"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "in",
      male: {
        min: 18,
        max: 19
      },
      female: {
        min: 17,
        max: 18
      }
    },

    weight: {
      unit: "lb",
      male: {
        min: 55,
        max: 70
      },
      female: {
        min: 40,
        max: 55
      }
    },

    lifespanYears: {
      min: 12,
      max: 16
    },

    coatType:
      "Short, close, stiff to the touch, and glossy single coat, resting flat against the body without undercoat.",

    coatLength: "Short",

    coatColors: [
      "Red (shades from light red to deep rich red)",
      "Fawn (ranging from biscuit to warm golden fawn)",
      "Blue (shades of slate and grey-blue)",
      "Black (solid glossy black)",
      "White",
      "Brindle (including red brindle, fawn brindle, and blue brindle)",
      "Parti-color and piebald (white ground with colored patches)"
    ],

    sheddingLevel:
      "Low to moderate year-round shedding with minor seasonal increases during spring and autumn",

    droolingLevel:
      "Low to moderate; tight-fitting lips minimize drool, though light salivation occurs around food or after vigorous exercise",

    distinctiveFeatures: [
      "Sturdy, stocky, and powerfully muscled body giving an impression of great strength for its size",
      "Broad, deep skull with prominent zygomatic arches and strongly developed cheek muscles",
      "Distinct stop and a medium-length muzzle falling away abruptly beneath the eyes",
      "Strong jaws with an underjaw displaying tremendous gripping power and a clean scissor bite",
      "Tight, even lips free from looseness or pendulous flews",
      "Dark, round eyes set low down and wide apart, with tight, darkly pigmented rims",
      "Short ears set high, carried either in rose or half-prick style when uncropped",
      "Muscular, slightly arched neck tapering from shoulders to the skull without throatiness or dewlap",
      "Deep, wide chest with well-sprung ribs extending far back",
      "Short, low-set tail tapering to a fine point, carried level with the back or slightly lowered without curling",
      "Straight, heavy-boned forelegs set rather wide apart with firm, well-arched feet",
      "Springy, agile gait demonstrating effortless drive and coordination"
    ]
  },

  temperament: {
    traits: [
      "Confident, courageous, and deeply good-natured",
      "Intensely loyal, affectionate, and shadow-like with family members",
      "Gentle and patient with familiar household children",
      "Spirited, playful, and enthusiastically eager to please",
      "Keenly alert and perceptive of surroundings",
      "High physical stamina and tenacious problem-solving drive",
      "Naturally welcoming to approved human guests when properly socialized",
      "Sensitive to handler emotional tone and unresponsive to harsh treatment",
      "May exhibit intolerance or reactivity toward unfamiliar dogs, particularly of the same sex",
      "High prey drive toward smaller animals and outdoor wildlife"
    ],

    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 2,
      withStrangers: 4,
      protectiveness: 4,
      independence: 3,
      trainability: 4,
      barking: 2,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; requires vigorous daily physical exercise and structured mental engagement to maintain muscular fitness and calm indoor composure",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Brisk daily neighborhood leashed walks and structured jogging",
        "Interactive fetch, flirt pole, or spring pole exercises in a secure yard",
        "Structured obedience, rally, and impulse-control sessions",
        "Canine sports including agility, weight pull, dock diving, and scent work",
        "Trail hiking on varied terrain once skeletally mature",
        "Food puzzle challenges and mental enrichment toys"
      ]
    },

    grooming: {
      level: "Low",

      brushing:
        "Brush once or twice weekly using a rubber curry mitt or firm bristle brush to lift dead hair and distribute natural skin oils; increase during seasonal coat changes.",

      bathing:
        "Bathe every four to six weeks or when soiled, using a gentle, moisturizing canine shampoo suited to sensitive skin.",

      notes: [
        "Wipe the short coat with a damp chamois or towel after outdoor runs to remove surface dust and maintain a brilliant gloss.",
        "Check skin regularly for redness, bumps, or dry patches, as short-coated terriers are prone to contact and environmental allergies.",
        "Trim strong, rapidly growing nails every two to three weeks to protect foot alignment and joint posture.",
        "Inspect ears weekly for wax buildup, redness, or odor, whether ears are natural or cropped.",
        "Brush teeth daily or several times weekly using enzyme-based dog toothpaste.",
        "Protect against extreme weather: the single short coat provides little insulation against winter freezing or prolonged hot summer sun."
      ]
    },

    training: {
      difficulty:
        "Moderate; remarkably eager to please and food-motivated, but possesses substantial physical strength and natural tenacity that require consistent leadership and early impulse control",

      tips: [
        "Employ positive reinforcement, high-value food rewards, and enthusiastic praise.",
        "Teach loose-leash walking and solid impulse control from early puppyhood before adult power develops.",
        "Keep instructional lessons short, upbeat, and mentally stimulating to prevent boredom.",
        "Avoid harsh verbal reprimands or physical coercion, which undermine trust in this sensitive breed.",
        "Maintain secure containment with a sturdy, escape-proof fence at least six feet high.",
        "Always supervise interactions around unfamiliar dogs and maintain leashed control in public areas."
      ],

      socialization:
        "Provide thorough, calm, and positive exposure from eight weeks of age to diverse people, everyday sounds, vehicles, livestock, and neutral vaccinated dogs. Early social development builds a confident, stable companion that remains composed in social settings while managing natural terrier prey drive."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool climates, provided indoor living and protective canine coats are provided in sub-freezing weather",
        "Warm climates, provided air conditioning, shade, and fresh water are available and exercise occurs during cooler morning or evening hours"
      ],

      aloneTimeTolerance:
        "Low to moderate; deeply bonded to family and prone to distress, vocalization, or destructive chewing if left isolated for long hours without adequate exercise"
    }
  },

  nutrition: {
    dietType:
      "Complete and balanced dog food formulated for medium-sized, active, and athletic dogs, adjusted for age, metabolism, and physical conditioning.",

    feedingFrequency: {
      puppy:
        "Three to four measured meals daily until six months of age, transitioning to two meals daily thereafter on a growth diet supporting controlled development.",
      adult:
        "Two measured meals daily to support steady energy and comfortable digestion.",
      senior:
        "Two portion-controlled meals daily adapted for reduced metabolic output, joint support, and lean muscle retention."
    },

    guidelines:
      "Measure daily rations precisely using a digital scale or standard measuring cup, adjusting amounts to maintain a lean, athletic body silhouette where the ribs are easily felt. Divide daily food into two distinct meals, restrict vigorous exercise for at least one hour before and after eating, and provide cool, clean drinking water continuously.",

    considerations: [
      "Maintain a lean body condition to avoid placing excess mechanical strain on joints, hips, and cruciate ligaments.",
      "Count training treats toward the daily caloric allowance to avoid gradual weight gain.",
      "Provide high-quality animal protein to support lean, dense muscle development.",
      "Monitor for signs of food sensitivities, such as itchy paws or recurrent ear irritation.",
      "Avoid feeding immediately before or after strenuous athletic exercise.",
      "Transition between diet formulas gradually over five to seven days."
    ],

    note:
      "Caloric needs vary significantly based on age, metabolism, and athletic workload. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The American Staffordshire Terrier is generally a strong, robust breed with an expected lifespan of 12 to 16 years. However, the breed is susceptible to several documented hereditary and conformational disorders. Prominent among genetic concerns is cerebellar ataxia, an autosomal recessive neurodegenerative condition caused by an identified mutation in the ARSG gene on canine chromosome 9. Additional health priorities include hip dysplasia, elbow dysplasia, cranial cruciate ligament tears, congenital heart disease (notably subaortic stenosis), autoimmune thyroiditis, and environmental or flea allergies.",

    commonConditions: [
      "Cerebellar ataxia (neuronal ceroid lipofuscinosis / NCL-A) — a progressive neurodegenerative disorder caused by a mutation in the ARSG gene on chromosome 9, causing tremors, unsteadiness, and loss of coordination, fully preventable through DNA testing of breeding stock",
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints leading to osteoarthritis and hind-limb lameness",
      "Elbow dysplasia — developmental abnormalities of the elbow joints that cause forelimb lameness and joint stiffness",
      "Cranial cruciate ligament (CCL) rupture — acute or progressive tearing of the stifle ligament resulting from athletic force, steep tibial plateau angles, or underlying inflammation",
      "Congenital heart disease — particularly subaortic stenosis (SAS) and cardiomyopathy, requiring pre-breeding auscultation and Doppler echocardiography",
      "Autoimmune thyroiditis — immune-mediated destruction of the thyroid gland resulting in hypothyroidism, lethargy, skin problems, and weight gain",
      "Allergic dermatitis and atopy — skin sensitivity to environmental allergens, food ingredients, or flea bites causing intense itching and secondary bacterial infections",
      "Demodectic mange — proliferation of microscopic skin mites in young dogs with developing immune systems, causing localized or generalized hair loss",
      "Progressive retinal atrophy (PRA) and hereditary cataracts — ocular conditions monitored through regular ophthalmologist evaluations"
    ],

    preventiveCare: [
      "Confirm that both parents possess certified DNA clearances for cerebellar ataxia (NCL-A / ARSG), hip and elbow clearances, and specialist cardiac evaluations.",
      "Maintain an optimal, lean body condition to reduce mechanical strain on hips, elbows, and knee ligaments.",
      "Avoid repetitive high-impact jumping or forced agility drills during the first 12 to 18 months of growth.",
      "Administer consistent year-round flea, tick, and heartworm prevention to avert allergic flare-ups and vector-borne diseases.",
      "Inspect the skin, coat, and ears weekly for redness, scratching, or yeast odor, seeking prompt veterinary treatment for skin allergies.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine dental cleanings."
    ],

    recommendedScreenings: [
      "DNA marker screening for cerebellar ataxia (neuronal ceroid lipofuscinosis / ARSG gene mutation) prior to breeding",
      "Radiographic hip joint evaluation through an accredited national screening program prior to breeding",
      "Radiographic elbow joint evaluation prior to breeding",
      "Cardiac evaluation with Doppler echocardiography performed by a board-certified veterinary cardiologist",
      "Autoimmune thyroiditis blood testing through an approved veterinary diagnostic laboratory",
      "Comprehensive eye examination by a board-certified veterinary ophthalmologist"
    ],

    dentalCare:
      "Brush teeth several times weekly with canine-safe toothpaste. The breed has broad, powerful jaws with a complete 42-tooth scissor bite; routine professional dental examinations maintain healthy gums.",

    earCare:
      "Inspect ears weekly for wax accumulation, redness, or odor, whether ears are natural or cropped. Clean gently with a veterinarian-recommended ear solution, drying the leather thoroughly.",

    skinCare:
      "Part the short coat weekly to inspect the skin for external parasites, redness, or dry patches. Bathe with a soothing, hypoallergenic shampoo if the dog is prone to allergic sensitivities."
  },

  suitability: {
    firstTimeOwners: false,
    familiesWithChildren: true,
    seniorOwners: false,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Experienced dog owners familiar with bully breed temperaments and strong terrier drive",
      "Active individuals and families who enjoy hiking, running, and vigorous outdoor play",
      "Households committed to early, lifelong socialization and positive reinforcement training",
      "Owners with securely fenced yards at least six feet high or dedicated access to safe leashed exercise areas",
      "People seeking an intensely loyal, affectionate, and shadow-like indoor companion"
    ],

    notIdealFor: [
      "Novice or hesitant dog owners unprepared to manage a strong, determined, and athletic dog",
      "Households seeking an off-leash dog park regular or an animal that automatically tolerates unfamiliar dogs of the same sex",
      "Homes with low or unsecure fencing where a high-drive dog could jump or dig out",
      "Owners who travel frequently or must leave the dog isolated for extended workdays",
      "Residents of jurisdictions with restrictive local breed legislation or prohibitive rental policies"
    ]
  },

  funFacts: [
    "The breed was developed from nineteenth-century bull-and-terrier crosses in Britain, which American homesteaders and farmers refined into a larger, multi-purpose farm dog, hunting partner, and homestead protector.",
    "A celebrated war dog named Stubby (Sergeant Stubby), widely described as an early bull-and-terrier or American Staffordshire Terrier type, served with the 102nd Infantry Regiment in World War I, detecting poison gas, locating wounded troops, and capturing a spy, becoming the most decorated canine of the conflict.",
    "In classic American cinema, the beloved canine Petey from the Our Gang (The Little Rascals) comedies of the 1920s and 1930s was a registered American Staffordshire Terrier named Lucenay's Peter.",
    "The breed was officially recognized under the initial name Staffordshire Terrier in 1936; the prefix 'American' was added in 1972 to distinguish it from the newly recognized Staffordshire Bull Terrier of Great Britain.",
    "Despite having a reputation for physical toughness, the breed is famously sensitive toward human emotional tone and thrives on praise, warmth, and close physical proximity to its family.",
    "In competitive weight pull and canine athletics, the breed's low center of gravity, heavy bone structure, and dense musculature make it one of the most powerful pound-for-pound athletes in the canine kingdom.",
    "The American Staffordshire Terrier has been bred to an independent, closed conformation studbook for nearly a century, emphasizing structural balance, head proportions, and a stable, human-friendly temperament."
  ],

  faq: [
    {
      question: "What is an American Staffordshire Terrier?",
      answer:
        "The American Staffordshire Terrier is a stocky, muscular medium-sized terrier originating in the United States, known for its physical strength, courageous spirit, and deeply affectionate nature with family."
    },
    {
      question: "What is the difference between an American Staffordshire Terrier and an American Pit Bull Terrier?",
      answer:
        "While both share nineteenth-century ancestry from English bull-and-terrier stock, they developed as distinct breeds during the twentieth century under separate selection criteria. The American Staffordshire Terrier was cultivated with an emphasis on conformational uniformity, broader bone structure, heavy cheek musculature, and reliable family companionship within an established closed studbook. In contrast, working pit bull lines often present a leaner, more varied athletic build with lighter bone."
    },
    {
      question: "How tall and heavy is an American Staffordshire Terrier?",
      answer:
        "Adult males typically stand about 18 to 19 inches at the shoulder and weigh 55 to 70 pounds, while females stand about 17 to 18 inches and weigh 40 to 55 pounds, with height and weight maintaining harmonious proportion."
    },
    {
      question: "How long does an American Staffordshire Terrier usually live?",
      answer:
        "With proper nutrition, regular exercise, and conscientious preventive veterinary care, the breed typically enjoys a lifespan of 12 to 16 years."
    },
    {
      question: "What does the coat look like, and do they shed a lot?",
      answer:
        "The coat is short, stiff to the touch, and glossy, lying flat against the body in any color or pattern; shedding is low to moderate throughout the year and is easily managed with weekly brushing."
    },
    {
      question: "Are American Staffordshire Terriers good with children?",
      answer:
        "Yes. Within their own household, they are famously affectionate, patient, and gentle with children; however, because they are strong and energetic, interactions with young children should always be supervised by an adult."
    },
    {
      question: "Can an American Staffordshire Terrier live peacefully with other dogs and pets?",
      answer:
        "While they can coexist harmoniously with other household pets when raised together from puppyhood, many adults develop selectivity or intolerance toward unfamiliar dogs of the same sex, and their high terrier prey drive means they should be monitored carefully around small outdoor animals."
    },
    {
      question: "Can an American Staffordshire Terrier live in an apartment?",
      answer:
        "Yes. They can adapt well to apartment living provided they receive extensive daily exercise, mental enrichment, and leashed outdoor walks, though local housing policies and community rules must always be verified beforehand."
    },
    {
      question: "Are American Staffordshire Terriers easy to train?",
      answer:
        "They are intelligent, food-motivated, and eager to please, making them quick learners; however, their physical strength and tenacity require early leash manners, impulse control, and patient, reward-based training."
    },
    {
      question: "What is cerebellar ataxia, and how is it tested in the breed?",
      answer:
        "Cerebellar ataxia is an inherited neurodegenerative disease caused by a mutation in the ARSG gene that leads to progressive loss of balance, tremors, and difficulty walking. A reliable DNA test is available, allowing breeders to ensure that carrier pairings never produce affected puppies."
    },
    {
      question: "What other health screenings are recommended before breeding?",
      answer:
        "Responsible breeding programs evaluate hips and elbows for dysplasia, conduct specialist echocardiograms to screen for congenital heart defects, evaluate thyroid function, and perform annual veterinary ophthalmologist eye exams."
    },
    {
      question: "Why is early socialization especially critical for this breed?",
      answer:
        "Because of their strength, confidence, and terrier determination, early exposure to diverse people, calm dogs, novel sounds, and busy environments builds self-control and social poise, ensuring they mature into balanced, well-mannered ambassadors."
    }
  ],

  references: [
    "fci-american-staffordshire-terrier-official-standard",
    "fci-american-staffordshire-terrier-nomenclature",
    "akc-american-staffordshire-terrier-breed-standard",
    "akc-american-staffordshire-terrier-breed-profile",
    "staffordshire-terrier-club-of-america-breed-standard",
    "staffordshire-terrier-club-of-america-health",
    "ofa-american-staffordshire-terrier-chic-requirements",
    "american-staffordshire-terrier-ataxia-arsg-study-2010",
    "wikimedia-american-staffordshire-terrier-daniel-oines",
    "wikimedia-american-staffordshire-terrier-pleple2000"
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
          id: "fci-american-staffordshire-terrier-official-standard",
          role: "verified",
          locator: "Standard heading and breed name"
        },
        {
          id: "fci-american-staffordshire-terrier-nomenclature",
          role: "verified",
          locator: "Official nomenclature: American Staffordshire Terrier"
        },
        {
          id: "akc-american-staffordshire-terrier-breed-profile",
          role: "verified",
          locator: "History: Staffordshire Terrier, AmStaff, American Staffy, Yankee Terrier"
        }
      ],
      verifiedOn: "2026-10-24",
      note: "Cross-verified across FCI Standard No. 286, FCI Nomenclature, and AKC breed documentation."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-american-staffordshire-terrier-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 3 Terriers, Section 3 Bull type Terriers, without working trial"
        },
        {
          id: "fci-american-staffordshire-terrier-nomenclature",
          role: "verified",
          locator: "Group 3, Section 3 Bull type Terriers, without working trial"
        },
        {
          id: "akc-american-staffordshire-terrier-breed-standard",
          role: "verified",
          locator: "Terrier Group"
        }
      ],
      verifiedOn: "2026-10-24",
      note: "Formulated without prohibited registry labels in user-facing text to comply with Rule 5."
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-american-staffordshire-terrier-official-standard",
          role: "verified",
          locator: "Origin: United States of America; Brief Historical Summary"
        },
        {
          id: "fci-american-staffordshire-terrier-nomenclature",
          role: "verified",
          locator: "Country of origin: United States of America"
        },
        {
          id: "akc-american-staffordshire-terrier-breed-profile",
          role: "verified",
          locator: "History: Development in the United States from nineteenth-century British bull-and-terrier crosses"
        }
      ],
      verifiedOn: "2026-10-24",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-american-staffordshire-terrier-official-standard",
          role: "verified",
          locator: "Brief Historical Summary, General Appearance, Head, Body, and Temperament"
        },
        {
          id: "akc-american-staffordshire-terrier-breed-standard",
          role: "verified",
          locator: "General Impression, Head, Body, and Color"
        },
        {
          id: "akc-american-staffordshire-terrier-breed-profile",
          role: "verified",
          locator: "About the Breed, History (1936 recognition, 1972 renaming), and Roles"
        },
        {
          id: "staffordshire-terrier-club-of-america-breed-standard",
          role: "verified",
          locator: "General appearance, historical purpose, and versatile working roles"
        }
      ],
      verifiedOn: "2026-10-24",
      note: "Synthesized in original phrasing without source or registry names in user-facing text."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-american-staffordshire-terrier-breed-standard",
          role: "verified",
          locator: "General Impression, Head, Body, Legs, Coat, Color, and Size"
        },
        {
          id: "fci-american-staffordshire-terrier-official-standard",
          role: "verified",
          locator: "Head, Body, Tail, Limbs, Coat, Colour, and Size"
        },
        {
          id: "staffordshire-terrier-club-of-america-breed-standard",
          role: "verified",
          locator: "Conformation, anatomical proportions, bite, and distinctive features"
        }
      ],
      verifiedOn: "2026-10-24",
      note: "Conformation, coat, colors, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-american-staffordshire-terrier-breed-standard",
          role: "verified",
          locator: "Size: Height of about 18 to 19 inches at shoulders for male and 17 to 18 inches for female"
        },
        {
          id: "fci-american-staffordshire-terrier-official-standard",
          role: "verified",
          locator: "Size: Males about 46 - 48 cm (18-19 ins), Females about 43 - 46 cm (17-18 ins)"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Preserved in published unit of inches (18 to 19 in for males, 17 to 18 in for females) exactly as published in the AKC breed standard and FCI English standard."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-staffordshire-terrier-breed-profile",
          role: "verified",
          locator: "Weight: 55-70 pounds (male), 40-55 pounds (female)"
        },
        {
          id: "akc-american-staffordshire-terrier-breed-standard",
          role: "verified",
          locator: "Size: Height and weight should be in proportion"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Standards require weight to be in proportion to height. The stored ranges of 55 to 70 lb for males and 40 to 55 lb for females are the canonical weights published in the AKC breed profile and parent-club guides, preserved in pounds."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-staffordshire-terrier-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12-16 years"
        }
      ],
      verifiedOn: "2026-10-24",
      note: "Supported by kennel club and breed club life expectancy publications."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-staffordshire-terrier-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (2/5)"
        },
        {
          id: "fci-american-staffordshire-terrier-official-standard",
          role: "verified",
          locator: "Coat: Short, close, stiff to the touch, and glossy"
        }
      ],
      verifiedOn: "2026-10-24",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-staffordshire-terrier-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (2/5)"
        },
        {
          id: "akc-american-staffordshire-terrier-breed-standard",
          role: "verified",
          locator: "Lips: Tight and even, no looseness"
        }
      ],
      verifiedOn: "2026-10-24",
      note: "Tight-fitting lips prevent excessive drooling."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "akc-american-staffordshire-terrier-breed-standard",
          role: "verified",
          locator: "General Impression: keenness, courage, confidence, good nature"
        },
        {
          id: "fci-american-staffordshire-terrier-official-standard",
          role: "verified",
          locator: "General Appearance & Temperament: courageous, persistent, friendly"
        },
        {
          id: "staffordshire-terrier-club-of-america-breed-standard",
          role: "verified",
          locator: "Temperament: bold, courageous, good-natured, devoted to family"
        }
      ],
      verifiedOn: "2026-10-24",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-american-staffordshire-terrier-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        },
        {
          id: "staffordshire-terrier-club-of-america-breed-standard",
          role: "cited",
          locator: "Temperament and behavior guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented breed temperament traits, highlighting high family affection and known potential for dog selectivity."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-american-staffordshire-terrier-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        },
        {
          id: "staffordshire-terrier-club-of-america-health",
          role: "cited",
          locator: "Care, training, and athletic exercise management"
        }
      ],
      verifiedOn: null,
      note:
        "Combines athletic terrier care guidelines with positive reinforcement training protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-staffordshire-terrier-breed-profile",
          role: "verified",
          locator: "Energy Level (4/5); Exercise Needs (4/5)"
        },
        {
          id: "staffordshire-terrier-club-of-america-breed-standard",
          role: "verified",
          locator: "Athletic agility, springiness, and endurance"
        }
      ],
      verifiedOn: "2026-10-24",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-american-staffordshire-terrier-breed-profile",
          role: "cited",
          locator: "Exercise: Athletic dog requiring vigorous daily physical activity"
        }
      ],
      verifiedOn: null,
      note:
        "An estimated range of 60 to 90 minutes reflects the exercise demands of an athletic, high-energy terrier."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-staffordshire-terrier-breed-profile",
          role: "verified",
          locator: "Adaptability: Adapts Well to Apartment Living (3/5) with adequate outdoor exercise"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Can adapt to apartment living when rigorous daily outdoor exercise is provided, subject to local regulations."
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-staffordshire-terrier-breed-profile",
          role: "verified",
          locator: "Exercise and fenced yard recommendations"
        },
        {
          id: "staffordshire-terrier-club-of-america-health",
          role: "verified",
          locator: "Secure containment and fencing advice"
        }
      ],
      verifiedOn: "2026-10-24",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-american-staffordshire-terrier-official-standard",
          role: "verified",
          locator: "Coat: Short, close, stiff single coat"
        },
        {
          id: "akc-american-staffordshire-terrier-breed-profile",
          role: "verified",
          locator: "Weather sensitivity: single short coat requires protection in cold and heat"
        }
      ],
      verifiedOn: "2026-10-24",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-staffordshire-terrier-breed-profile",
          role: "verified",
          locator: "Tolerates Being Alone: Low to moderate; deeply people-oriented"
        }
      ],
      verifiedOn: "2026-10-24",
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-american-staffordshire-terrier-breed-profile",
          role: "cited",
          locator: "Nutrition: high-quality food, weight management, treat budgeting"
        },
        {
          id: "staffordshire-terrier-club-of-america-health",
          role: "cited",
          locator: "Nutrition and body condition maintenance"
        }
      ],
      verifiedOn: null,
      note: "Standard feeding and weight-management recommendations for athletic medium breeds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-american-staffordshire-terrier-breed-profile",
          role: "cited",
          locator: "Life-stage nutrition and portion control"
        }
      ],
      verifiedOn: null,
      note: "General canine feeding schedule to maintain steady blood glucose and comfortable digestion."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-staffordshire-terrier-ataxia-arsg-study-2010",
          role: "verified",
          locator: "ARSG gene mutation and cerebellar ataxia / neuronal ceroid lipofuscinosis in the American Staffordshire Terrier"
        },
        {
          id: "ofa-american-staffordshire-terrier-chic-requirements",
          role: "verified",
          locator: "Required screenings: Ataxia DNA test, Hip evaluation, Cardiac exam, Thyroid test"
        },
        {
          id: "staffordshire-terrier-club-of-america-health",
          role: "verified",
          locator: "Health overview, hereditary ataxia, orthopedics, cardiac disease, and skin allergies"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Synthesizes peer-reviewed genetics research on cerebellar ataxia with health registry screening requirements."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-staffordshire-terrier-ataxia-arsg-study-2010",
          role: "verified",
          locator: "Cerebellar ataxia / neuronal ceroid lipofuscinosis clinical and genetic description"
        },
        {
          id: "ofa-american-staffordshire-terrier-chic-requirements",
          role: "verified",
          locator: "Hip dysplasia, elbow dysplasia, subaortic stenosis, and thyroiditis"
        },
        {
          id: "staffordshire-terrier-club-of-america-health",
          role: "verified",
          locator: "Cruciate ligament tears, skin allergies (atopy), and demodectic mange"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Details documented genetic and conformational conditions in original prose without prohibited registry terms."
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "staffordshire-terrier-club-of-america-health",
          role: "cited",
          locator: "Preventive care, exercise precautions during puppyhood, and skin management"
        },
        {
          id: "akc-american-staffordshire-terrier-breed-profile",
          role: "cited",
          locator: "General health, parasite prevention, and routine wellness"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to muscular athletic terriers."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-american-staffordshire-terrier-chic-requirements",
          role: "verified",
          locator: "CHIC Program requirements: Cerebellar Ataxia DNA test, Hip Dysplasia, Cardiac Evaluation, Autoimmune Thyroiditis"
        },
        {
          id: "staffordshire-terrier-club-of-america-health",
          role: "verified",
          locator: "Pre-breeding testing protocol: NCL-A DNA test, OFA hips, elbows, heart, and thyroid"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "Screenings summarize published parent club and health registry protocols."
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-american-staffordshire-terrier-breed-standard",
          role: "cited",
          locator: "Jaws and teeth: clean scissor bite"
        },
        {
          id: "akc-american-staffordshire-terrier-breed-profile",
          role: "cited",
          locator: "Routine care and dental hygiene"
        }
      ],
      verifiedOn: null,
      note: "Standard canine dental care guidelines."
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-american-staffordshire-terrier-breed-standard",
          role: "cited",
          locator: "Ears: set high, cropped or uncropped"
        },
        {
          id: "akc-american-staffordshire-terrier-breed-profile",
          role: "cited",
          locator: "Ear checks and routine cleaning"
        }
      ],
      verifiedOn: null,
      note: "Routine ear care protocol for high-set ears."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "staffordshire-terrier-club-of-america-health",
          role: "cited",
          locator: "Skin sensitivity, allergic dermatitis, and coat care"
        }
      ],
      verifiedOn: null,
      note: "Dermatological care protocol for breeds prone to allergic dermatitis."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-american-staffordshire-terrier-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        },
        {
          id: "staffordshire-terrier-club-of-america-breed-standard",
          role: "cited",
          locator: "Temperament and handler requirements"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed strength, energy, and terrier temperament."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-staffordshire-terrier-breed-profile",
          role: "verified",
          locator: "History: Sergeant Stubby World War I, Petey in Our Gang, 1936 and 1972 recognition"
        },
        {
          id: "staffordshire-terrier-club-of-america-breed-standard",
          role: "verified",
          locator: "Historical background, closed studbook, and athletic power"
        },
        {
          id: "fci-american-staffordshire-terrier-official-standard",
          role: "verified",
          locator: "Brief historical summary: bull and terrier foundation"
        }
      ],
      verifiedOn: "2026-10-24",
      note: "Verified historical folklore and cultural heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-american-staffordshire-terrier-breed-standard",
          role: "verified",
          locator: "Size, weight, coat, colors, and temperament"
        },
        {
          id: "akc-american-staffordshire-terrier-breed-profile",
          role: "verified",
          locator: "Lifespan, family suitability, exercise, and training"
        },
        {
          id: "american-staffordshire-terrier-ataxia-arsg-study-2010",
          role: "verified",
          locator: "Cerebellar ataxia genetics and DNA testing"
        },
        {
          id: "ofa-american-staffordshire-terrier-chic-requirements",
          role: "verified",
          locator: "Health screenings for hips, heart, thyroid, and ataxia"
        }
      ],
      verifiedOn: "2026-10-24",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and genetics research without naming registries in prose."
    }
  },

  updatedOn: "2026-10-24"
};
